import test from 'ava';

import { mockHM } from '../mock_utils';

import { HomematicSDK } from './json-rpc-client';

test('login failed', async (t) => {
  //Setup CCU Response
  mockHM(
    'http://ccu/api/homematic.cgi',
    'Session.login',
    {
      username: 'Admin',
      password: 'WrongPassword',
    },
    null,
    {
      name: 'JSONRPCError',
      code: 501,
      message: 'invalid credentials or too many sessions',
    }
  );

  const client = new HomematicSDK();
  client.host = 'ccu';

  await t.throwsAsync(client.login('Admin', 'WrongPassword'), {
    instanceOf: Error,
    message: 'invalid credentials or too many sessions',
  });
});

test('login success', async (t) => {
  //Setup CCU Response
  mockHM(
    'http://ccu/api/homematic.cgi',
    'Session.login',
    {
      username: 'Admin',
      password: 'CorrectPassword',
    },
    'SessionId'
  );

  const client = new HomematicSDK();
  client.host = 'ccu';

  await client.login('Admin', 'CorrectPassword');
  t.deepEqual(client.sessionId, 'SessionId');
});

test('renewSession', async (t) => {
  //Setup CCU Response
  mockHM(
    'http://ccu/api/homematic.cgi',
    'Session.login',
    {
      username: 'Admin',
      password: 'CorrectPassword',
    },
    'SessionId'
  );

  mockHM(
    'http://ccu/api/homematic.cgi',
    'Session.renew',
    {
      _session_id_: 'SessionId',
    },
    'NewSessionId'
  );

  const client = new HomematicSDK();
  client.host = 'ccu';

  await client.login('Admin', 'CorrectPassword');
  t.deepEqual(client.sessionId, 'SessionId');

  await client.renewSession();
  t.deepEqual(client.sessionId, 'NewSessionId');
});

test('logout', async (t) => {
  //Setup CCU Response
  mockHM(
    'http://ccu/api/homematic.cgi',
    'Session.login',
    {
      username: 'Admin',
      password: 'CorrectPassword',
    },
    'SessionId'
  );

  mockHM(
    'http://ccu/api/homematic.cgi',
    'Session.logout',
    {
      _session_id_: 'SessionId',
    },
    true
  );

  const client = new HomematicSDK();
  client.host = 'ccu';

  await client.login('Admin', 'CorrectPassword');
  t.deepEqual(client.sessionId, 'SessionId');

  await client.logout();
  t.deepEqual(client.sessionId, undefined);
});
