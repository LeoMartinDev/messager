import { createApplicationContainer } from "./application";
import { createRunHttpRequestUsecase } from "./domain";

export function createApplication() {
  const { httpRequestService } = createApplicationContainer();

  const runHttpRequestUsecase = createRunHttpRequestUsecase({
    httpRequestService,
  });

  return {
    runHttpRequest: runHttpRequestUsecase,
  };
}

export type Application = ReturnType<typeof createApplication>;
