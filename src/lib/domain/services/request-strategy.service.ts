import { RequestType, AppRequest } from "../entities/request.entity";
import {
  CreateRequestStrategy,
  RequestStrategy,
} from "../ports/request.strategy";

type RequestStrategyServiceDependencies = {
  [Type in AppRequest["type"]]: CreateRequestStrategy<any>;
};

export type RequestStrategyService = ReturnType<
  typeof createRequestStrategyService
>;

export function createRequestStrategyService({
  ...strategies
}: RequestStrategyServiceDependencies) {
  return {
    getStrategyFromRequest<R extends AppRequest>(
      request: R
    ): RequestStrategy<R> | undefined {
      switch (request.type) {
        case RequestType.HTTP:
          return strategies[RequestType.HTTP](request);
        default:
          return undefined;
      }
    },
  };
}
