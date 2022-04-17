import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);
export const mockHM = (url: string, method: string, params: unknown) =>
  mock.onPost(url, {
    version: '1.1',
    method: method,
    params: params,
  });
