import express from 'express';
import path from 'path';
import http from 'http';
import socketIO from 'socket.io';

const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '../../client/dist');

const app = express();
const server = new http.Server(app);
const io = socketIO(server).of('/socket/chat');

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

app.use(express.static(PUBLIC_DIR));

app.post('/api/login', (req, res) => {
  res.send({ token: 'token' });
});

app.get('/api/room', (req, res) => {
  res.send([
    { id: '1', name: 'A' },
    { id: '2', name: 'B' },
    { id: '3', name: 'C' },
    { id: '4', name: 'D' },
    { id: '5', name: 'E' },
    { id: '6', name: 'F' },
  ]);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(PUBLIC_DIR, 'index.html'));
});

// app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

io.on('connection', socket => {
  socket.emit('news', { hello: 'world' });
  // socket.on('my other event', data => {
  //   console.log(data);
  // });

  socket.on('message', data => {
    socket.emit('message', { ...data, id: getID() });
  });
});

const getID = (() => {
  let id = 0;
  return () => id++;
})();
