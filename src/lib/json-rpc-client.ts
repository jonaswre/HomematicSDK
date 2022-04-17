import axios from 'axios';

export class HomematicSDK {
  private sessionId: string;
  public host: string;
  public useSSL = false;

  private get url() {
    return `${this.useSSL ? 'https' : 'http'}://${this.host}/api/homematic.cgi`;
  }

  public async login(username: string, password: string) {
    return await this.call('Session.login', {
      username: username,
      password: password,
    });
  }

  private async call<Parameter, Result = unknown>(
    method: string,
    params?: Parameter
  ): Promise<Result> {
    if (this.sessionId) {
      params['_session_id_'] = this.sessionId;
    }
    const response = await axios.post(
      this.url,
      {
        version: '1.1',
        method: method,
        params: params ?? { _session_id_: this.sessionId },
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    );
    const { result, error } = response.data;
    console.log(response.data);
    if (error !== null) {
      throw new Error(error.message);
    }
    return result;
  }
}
