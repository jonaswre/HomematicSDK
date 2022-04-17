import test from 'ava';

import { mockHM } from '../mock_utils';

import { HomematicSDK } from './json-rpc-client';

mockHM('http://192.168.50.10/api/homematic.cgi', 'Session.login', {
    username: 'Admin',
    password: 'Test',
}).reply(200, 'SessionID');

test('login', async (t) => {
    const client = new HomematicSDK();
    client.host = '192.168.50.10';
    const response = await client.login('Admin', 'Test');
    t.deepEqual(response, 'SessionID');
});
