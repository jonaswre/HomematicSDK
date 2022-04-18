import { Channel } from './channel';

export interface Device {
  id: string;
  name: string;
  address: string;
  interface: string;
  type: string;
  operateGroupOnly: boolean;
  isReady: boolean;
  enabledServiceMsg: boolean;
  channels: Channel[];
}
