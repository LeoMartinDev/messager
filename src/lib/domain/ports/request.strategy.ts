import { AppRequest } from "../entities/request.entity";

export type CreateRequestStrategy<RequestType extends AppRequest> = (request: RequestType) => {
  run: () => Promise<void>;
};

export type RequestStrategy<RequestType extends AppRequest> = ReturnType<CreateRequestStrategy<RequestType>>;
