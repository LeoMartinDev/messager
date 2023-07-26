export const RequestType = {
  HTTP: 'http',
} as const;

export type RequestType = typeof RequestType[keyof typeof RequestType];

export const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

export type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod];

export type HttpRequest = {
  type: 'http';
  method: HttpMethod;
  title: string;
  url: string | null;
  headers: Record<string, string> | null;
  body: string | null;
};

export type AppRequest = HttpRequest;
