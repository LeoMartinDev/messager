import { HttpRequest } from "../entities/request.entity";

export type HttpRequestService = {
  run: (request: HttpRequest) => Promise<void>;
};
