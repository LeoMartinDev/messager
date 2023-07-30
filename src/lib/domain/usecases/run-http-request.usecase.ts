import { HttpRequest, HttpResponse } from "../entities/request.entity";
import { HttpRequestService } from "../services/http-request.service";

type RunHttpRequestUsecaseDependencies = {
  httpRequestService: HttpRequestService;
};

export function createRunHttpRequestUsecase({
  httpRequestService,
}: RunHttpRequestUsecaseDependencies) {
  return (request: HttpRequest): Promise<HttpResponse> => {
    return httpRequestService.run(request);
  };
}
