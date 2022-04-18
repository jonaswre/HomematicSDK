import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { JSONRPCError, JSONRPCResponse } from './types/jsonRPC';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

export function mockHM<Result>(
  url: string,
  method: string,
  params: unknown,
  result: null | Result = null,
  error: JSONRPCError = null
) {
  return mock
    .onPost(url, {
      version: '1.1',
      method,
      params,
    })
    .reply<JSONRPCResponse<Result>>(200, { version: '1.1', result, error });
}
