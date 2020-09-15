const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const volleyball = require('volleyball');

const { PORT = 3000 } = process.env;

// ERROR HANDLING
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  console.error(err.stack);
  res.status(500).json(err);
};
let listenCallback = () => {};

// APP
const app = express();
app.use(cors());

// middleware
app.use(express.json());
app.use(helmet());

// LOGGER
app.use(volleyball);

app.use('/', require(__dirname + '/routes/index'));

// ERROR Handling middleware
app.use(errorHandler);

app.listen(PORT, () => {});
