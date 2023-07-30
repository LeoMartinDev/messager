import { Body, fetch } from '@tauri-apps/api/http';

import { HttpRequestService } from "../../domain/services/http-request.service";
import { assert } from "../../utils/assert";
import { HttpBodyType, HttpRequest, HttpResponse } from '../../domain/entities/request.entity';

function getBody(request: HttpRequest): Body | undefined {
  if (!request.body || request.body.value === null) {
    return undefined;
  }

  switch (request.body.type) {
    case HttpBodyType.JSON:
      return Body.json(request.body.value);
    case HttpBodyType.TEXT:
      return Body.text(request.body.value);
    default:
      return undefined;
  }
}

export function createHttpRequestService(): HttpRequestService {
  return {
    async run(request) {
      console.log(request);
      assert(request.url !== null, "Request URL is null");

      const body = getBody(request);

      const response = await fetch(request.url, {
        method: request.method,
        headers: request.headers ?? {},
        body,
      });

      const httpResponse: HttpResponse = {
        statusCode: response.status,
        headers: response.headers,
        cookies: response.cookies,
        size: {
          body: response.size.body,
          headers: response.size.headers,
        },
        time: {
          total: response.time.total,
        },
      };

      return;
    },
  };
}
