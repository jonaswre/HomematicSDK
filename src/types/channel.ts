export interface Channel {
  id: string;
  address: string;
  deviceId: string;
  index: number;
  partnerId: string;
  mode: string;
  category: string;
  isReady: boolean;
  isUsable: boolean;
  isVisible: boolean;
  isLogged: boolean;
  isLogable: boolean;
  isReadable: boolean;
  isWritable: boolean;
  isEventable: boolean;
  isAesAvailable: boolean;
  isVirtual: boolean;
  channelType: string;
}
