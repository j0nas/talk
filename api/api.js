import io from 'socket.io-client';
import { CHAT_MESSAGE } from '../shared/socketEvents';

const socket = io('http://localhost:8000');

const subscribe = onReceiveMessage => socket.on(CHAT_MESSAGE, onReceiveMessage);

const dispatch = message => socket.emit(CHAT_MESSAGE, message);

export { subscribe, dispatch };
