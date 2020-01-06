export interface IMessage {
  name: string;
  text: string;
  id: string;
}

export type IClientMessage = Omit<IMessage, 'id'>;
