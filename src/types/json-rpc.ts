export type JSONRPCResponse<Result> = {
  version: string;
  result: Result;
  error: JSONRPCError;
};
export type JSONRPCError = null | {
  name: string;
  code: number;
  message: string;
};
