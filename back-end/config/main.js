const express = require('express');
const config = require('./config');
const apiRouter = require('../api');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(cookieParser('321321'));

app.use(express.json());
app.use('/api', apiRouter);

app.listen(config.port, () => {
  console.log(`Server: Listening on ${config.port}`);
});