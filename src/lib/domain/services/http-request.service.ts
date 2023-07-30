import { HttpRequest, HttpResponse } from "../entities/request.entity";

export type HttpRequestService = {
  run: (request: HttpRequest) => Promise<HttpResponse>;
};
