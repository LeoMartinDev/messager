import { AppRequest } from "../entities/request.entity";
import { RequestRepository } from "../ports/request.repository";

type SaveRequestUsecaseDependencies = {
  requestRepository: RequestRepository;
};

export function saveRequestUsecase({
  requestRepository,
}: SaveRequestUsecaseDependencies) {
  return async (request: AppRequest) => {
    await requestRepository.save(request);
  };
}
