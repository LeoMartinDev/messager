import {
  HttpMethod,
  HttpRequest,
  AppRequest,
  RequestType,
} from "../entities/request.entity";

export function createHttpRequest(
  input?: Partial<Omit<HttpRequest, "type">>
): HttpRequest {
  return {
    type: RequestType.HTTP,
    method: HttpMethod.GET,
    title: "Untitled",
    url: null,
    headers: null,
    body: null,
    ...input,
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
