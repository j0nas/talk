const { CHAT_MESSAGE } = require('../shared/socketEvents');

const io = require('socket.io')();

module.exports = () => {
  io.on('connection', socket => {
    console.log(`${socket.id} connected.`);
    socket.on(CHAT_MESSAGE, message => io.emit(CHAT_MESSAGE, message));
  });
  io.listen(8000);
};
