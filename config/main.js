const express = require('express');
const config = require('./config');
const apiRouter = require('../api');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const compression = require('compression');
// const morgan = require('morgan');
const path = require('path');
// const {createServer} = require('http');

const app = express();
// const dev = app.get('env') !== 'production';

// if(!dev) {
//   app.disable('x-powered-by');
//   app.use(compression());
//   app.use(morgan('common'));
//   app.use(express.static('front-end/build/'));
//   app.get('*', (req,res) => {
//     res.sendFile(path.join(__dirname, 'front-end', 'build', 'index.html'))
//   })
// }

// if(dev) {
//   app.use(morgan('dev'));
// }

// const server = createServer(app);

// server.listen(config.port, () => {
//   console.log(`Server is starting at PORT: ${config.port}`);
// })

// const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(cookieParser('321321'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'front-end/build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'front-end', 'build', 'index.html')); // relative path
  });
}

app.listen(config.port, () => {
  console.log(`Server: Listening on ${config.port}`);
});