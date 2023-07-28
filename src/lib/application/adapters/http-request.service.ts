import { HttpRequestService } from "../../domain/services/http-request.service";
import { assert } from "../../utils/assert";

export function createHttpRequestService(): HttpRequestService {
  return {
    async run(request) {
      assert(request.url !== null, "Request URL is null");

      const response = await fetch(request.url, {
        method: request.method,
        headers: request.headers ?? {},
        body: request.body,
      });

      console.log(response);

      return;
    },
  };
}
