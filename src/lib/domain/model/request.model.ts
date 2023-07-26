import { HttpMethod, HttpRequest, AppRequest, RequestType } from '../entities/request.entity';

export function createHttpRequest(): HttpRequest {
  return {
    method: HttpMethod.GET,
    title: 'Untitled',
    url: null,
    headers: null,
    body: null,
  };
}

export function createRequest(type: RequestType): AppRequest {
  switch (type) {
    case RequestType.HTTP:
      return createHttpRequest();
    default:
      throw new Error(`Unknown request type`);
  }
}
