import { AppRequest } from "../entities/request.entity";
import { RequestStrategyService } from "../services/request-strategy.service";

type RunRequestUsecaseDependencies = {
  requestStrategyService: RequestStrategyService;
};

export function createRunRequestUsecase({
  requestStrategyService,
}: RunRequestUsecaseDependencies) {
  return async (request: AppRequest) => {
    const requestStrategy = requestStrategyService.getStrategyFromRequest(request);

    if (!requestStrategy) {
      throw new Error('Unsupported request type');
    }

    await requestStrategy.run();
  };
}
