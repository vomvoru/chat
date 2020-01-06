export interface IMessage {
  name: string;
  text: string;
  id: string;
  type: 'image' | 'text';
}

export type IClientMessage = Omit<IMessage, 'id'>;
