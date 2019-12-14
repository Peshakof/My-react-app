const express = require('express');
const config = require('./config');
const apiRouter = require('../api');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const {createServer} = require('http');

const app = express();
const dev = app.get('env') !== 'production';

if(!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));
  app.use(express.static(path.resolve(__dirname, 'build')));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

if(dev) {
  app.use(morgan('dev'));
}

const server = createServer(app);

server.listen(config.port)

// const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(cookieParser('321321'));

app.use(express.json());
app.use('/api', apiRouter);

// app.listen(config.port, () => {
//   console.log(`Server: Listening on ${config.port}`);
// });