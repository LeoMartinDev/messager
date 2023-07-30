import { JSONValue } from "../../utils/json-value";

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

export const HttpBodyType = {
  JSON: 'json',
  TEXT: 'text',
} as const;

export type HttpBodyType = typeof HttpBodyType[keyof typeof HttpBodyType];

export type HttpJsonBody = {
  type: typeof HttpBodyType.JSON;
  value: Record<string, JSONValue> | null;
};

export type HttpTextBody = {
  type: typeof HttpBodyType.TEXT;
  value: string;
};

export type HttpBody = HttpJsonBody | HttpTextBody | null;

export type HttpRequest = {
  type: typeof RequestType.HTTP;
  method: HttpMethod;
  title: string;
  url: string | null;
  headers: Record<string, string> | null;
  body: HttpBody;
};

export type AppRequest = HttpRequest;

export type HttpResponse = {
  body: Record<string, JSONValue> | string | null;
  headers: Record<string, string>;
  cookies: Record<string, string>;
  statusCode: number;
  size: {
    body: number;
    headers: number;
  },
  time: {
    total: number;
  },
}
