interface IMessage {
  name: string;
  text: string;
  id: string;
}

type IClientMessage = Omit<IMessage, 'id'>;
