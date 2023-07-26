import { RequestType, AppRequest } from "../entities/request.entity";
import { CreateRequestStrategy, RequestStrategy } from "../ports/request.strategy";

type RequestStrategyServiceDependencies = {
  [Type in AppRequest['type']]: CreateRequestStrategy<any>;
};

export type RequestStrategyService = ReturnType<typeof createRequestStrategyService>;

export function createRequestStrategyService({
  ...strategies
}: RequestStrategyServiceDependencies) {
  const strategiesStore = new Map<RequestType, CreateRequestStrategy<any>>(
    Object.entries(strategies) as any[]
  );

  return {
    getStrategyFromRequest<R extends AppRequest>(request: R): RequestStrategy<R> | undefined {
      const createStrategy = strategiesStore.get(request.type);

      if (!createStrategy) {
        return;
      }

      return createStrategy(request);
    }
  }
}
