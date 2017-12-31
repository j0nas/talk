const io = require('socket.io')();
const { CLIENT_JOIN, CLIENT_CHAT_MESSAGE, SERVER_JOIN, SERVER_CHAT_MESSAGE } = require('../shared/socketEvents');

module.exports = () => {
  io.on('connection', socket => {
    socket.on(CLIENT_CHAT_MESSAGE, message => io.emit(SERVER_CHAT_MESSAGE, message));
    socket.on(CLIENT_JOIN, client => io.emit(SERVER_JOIN, client));
  });

  io.listen(8000);
};
