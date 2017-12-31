const express = require('express');
const next = require('next');
const socket = require('./socket');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    socket();

    const server = express();
    server.get('*', (req, res) => handle(req, res));
    server.listen(3000, () => console.log('Ready on localhost:3000'));
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
