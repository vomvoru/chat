export const useMessages = () => {
  const messages: IMessage[] = [
    { name: 'abc', text: 'msg1', id: '1' },
    { name: 'abc', text: 'msg2', id: '2' },
    { name: 'def', text: 'msg3', id: '3' },
    { name: 'abc', text: 'msg4', id: '4' },
    { name: 'def', text: 'msg5', id: '5' },
    { name: 'def', text: 'msg6', id: '6' },
    { name: 'ghi', text: 'msg7', id: '7' },
  ];

  return messages;
};
