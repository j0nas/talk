import io from 'socket.io-client';
import { CLIENT_JOIN, CLIENT_CHAT_MESSAGE, SERVER_CHAT_MESSAGE, SERVER_JOIN } from '../shared/socketEvents';

const socket = io('http://localhost:8000');

const subscribe = (user, onReceiveMessage, onNewUserJoin) => {
  socket.on(SERVER_CHAT_MESSAGE, onReceiveMessage);
  socket.on(SERVER_JOIN, onNewUserJoin);

  socket.emit(CLIENT_JOIN, user);
};

const emitMessage = message => socket.emit(CLIENT_CHAT_MESSAGE, message);

export { subscribe, emitMessage };
