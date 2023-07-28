import { HttpRequest } from "../entities/request.entity";
import { HttpRequestService } from "../services/http-request.service";

type RunHttpRequestUsecaseDependencies = {
  httpRequestService: HttpRequestService;
};

export function createRunHttpRequestUsecase({
  httpRequestService,
}: RunHttpRequestUsecaseDependencies) {
  return async (request: HttpRequest) => {
    await httpRequestService.run(request);
  };
}
