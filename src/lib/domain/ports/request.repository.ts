import { AppRequest } from '../entities/request.entity';

export type RequestRepository = {
  save: (request: AppRequest) => Promise<void>;
  get: (requestId: string) => Promise<AppRequest | undefined>;
  list: () => Promise<AppRequest[]>;
  delete: (requestId: string) => Promise<void>;
};
