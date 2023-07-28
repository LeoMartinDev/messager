import { createHttpRequestService } from "./adapters/http-request.service";

export function createApplicationContainer() {
  const httpRequestService = createHttpRequestService();

  return {
    httpRequestService,
  };
}
