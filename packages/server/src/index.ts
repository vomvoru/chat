import express from 'express';
import path from 'path';
import http from 'http';
import socketIO from 'socket.io';
import { IRoom, constants, IClientMessage } from 'chat-common';

const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '../../client/dist');
const NAMESPACE = '/socket/chat';

const rooms: IRoom[] = [
  { id: '1', name: 'A', namespace: `${NAMESPACE}/1` },
  { id: '2', name: 'B', namespace: `${NAMESPACE}/2` },
  { id: '3', name: 'C', namespace: `${NAMESPACE}/3` },
  { id: '4', name: 'D', namespace: `${NAMESPACE}/4` },
  { id: '5', name: 'E', namespace: `${NAMESPACE}/5` },
  { id: '6', name: 'F', namespace: `${NAMESPACE}/6` },
];

const app = express();
const server = new http.Server(app);
const io = socketIO(server);

// Server
server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

app.use(express.static(PUBLIC_DIR));

// API 들
app.get(constants.api.ROOM, (req, res) => {
  res.send(rooms);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(PUBLIC_DIR, 'index.html'));
});

// socket
const initChatSocket = (nsp: string) => {
  const chatIo = io.of(nsp);

  chatIo.on('connection', socket => {
    // TODO IClientMessage 타입인 것을 확실히 보장할수 없는 보안, 안정성 이슈 해결
    socket.on('message', (data: IClientMessage) => {
      chatIo.emit('message', { ...data, id: getID() });
    });
  });
};

rooms.forEach(room => {
  initChatSocket(room.namespace);
});

const getID = (() => {
  let id = 0;
  return () => id++;
})();
