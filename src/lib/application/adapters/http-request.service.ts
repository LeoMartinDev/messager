import { HttpRequestService } from "../../domain/services/http-request.service";
import { assert } from "../../utils/assert";
import { HttpBodyType, HttpRequest, HttpResponse } from '../../domain/entities/request.entity';

function getRequestBody(request: HttpRequest): BodyInit | null | undefined {
  if (!request.body || request.body.value === null) {
    return undefined;
  }

  switch (request.body.type) {
    case HttpBodyType.JSON:
      return JSON.stringify(request.body.value);
    case HttpBodyType.TEXT:
      return request.body.value;
    default:
      return undefined;
  }
}

function getRequestContentType(request: HttpRequest): string | undefined {
  if (!request.body || request.body.value === null || request.body.type === null) {
    return undefined;
  }

  switch (request.body.type) {
    case HttpBodyType.JSON:
      return 'application/json';
    case HttpBodyType.TEXT:
      return 'text/plain';
  }
}

function getRequestHeaders(request: HttpRequest): Record<string, string> {
  return {
    ...request.headers,
    'Content-Type': getRequestContentType(request) ?? 'text/plain',
  };
}


function getStringByteSize(str: string): number {
  return new Blob([str]).size;
}

export function createHttpRequestService(): HttpRequestService {
  return {
    async run(request) {
      console.log(request);
      assert(request.url !== null, "Request URL is null");

      const requestBody = getRequestBody(request);
      const requestHeaders = getRequestHeaders(request);

      const startTime = performance.now();


      const response = await fetch(request.url, {
        method: request.method,
        headers: requestHeaders,
        body: requestBody,
      });

      const body = await response.text();

      const endTime = performance.now();
      console.log('perf', performance.getEntriesByName(request.url))
      const requestForUrlPerformances = performance.getEntriesByName(request.url);

      const resourceTiming = requestForUrlPerformances[requestForUrlPerformances.length - 1] as PerformanceResourceTiming;
      const dnsTime = resourceTiming.domainLookupEnd - resourceTiming.domainLookupStart;
      const tcpTime = resourceTiming.connectEnd - resourceTiming.connectStart;
      const totalTime = endTime - startTime;
      console.log(`DNS lookup time: ${dnsTime}ms`);
      console.log(`TCP handshake time: ${tcpTime}ms`);
      console.log(`Total time: ${totalTime}ms`);

      const httpResponse: HttpResponse = {
        statusCode: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        cookies: {},
        body,
        size: {
          body: getStringByteSize(body),
          headers: getStringByteSize(JSON.stringify(response.headers)),
        },
        time: {
          total: totalTime,
        },
      };

      return httpResponse;
    },
  };
}
