import axios from 'axios';

import { Device } from '../types/device';
import { JSONRPCResponse } from '../types/json-rpc';
import { LinkParamset } from '../types/linkParamset';
import { traverse } from './utils';

export class HomematicSDK {
  private _sessionId: string;
  public host: string;
  public interface = 'HmIP-RF';
  public useSSL = false;

  private get url() {
    return `${this.useSSL ? 'https' : 'http'}://${this.host}/api/homematic.cgi`;
  }

  public get sessionId() {
    return this._sessionId;
  }

  public async login(username: string, password: string) {
    if (this._sessionId === undefined) {
      this._sessionId = await this.call<string>('Session.login', {
        username,
        password,
      });
    }
  }

  public async logout() {
    if (this._sessionId !== undefined) {
      await this.call<boolean>('Session.logout');
      this._sessionId = undefined;
    }
  }

  public async renewSession() {
    if (this._sessionId !== undefined) {
      this._sessionId = await this.call<string>('Session.renew');
    }
  }

  public async listDevices() {
    return await this.call<Device[]>('Device.listAllDetail');
  }

  public async getLinkParamset(senderAddress: string, receiverAddress: string) {
    return await this.call<LinkParamset>('Interface.getParamset', {
      interface: this.interface,
      address: receiverAddress,
      paramsetKey: senderAddress,
    });
  }

  private async call<Result = unknown>(
    method: string,
    params?: unknown
  ): Promise<Result> {
    if (this._sessionId && params !== undefined) {
      params['_session_id_'] = this._sessionId;
    }
    const response = await axios.post<JSONRPCResponse<Result>>(
      this.url,
      {
        version: '1.1',
        method: method,
        params: params ?? { _session_id_: this._sessionId },
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    );
    const { result, error } = response.data;
    if (error !== null) {
      throw new Error(error.message);
    }

    // Workaround
    return JSON.parse(JSON.stringify(result), (_key, value) => traverse(value));
  }
}
