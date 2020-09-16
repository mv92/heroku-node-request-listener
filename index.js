const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const volleyball = require('volleyball');

const { PORT = 3000, NODE_ENV = '' } = process.env;

// ERROR HANDLING
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  console.error(err.stack);
  res.status(500).json(err);
};

// APP
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// LOGGER
app.use(volleyball);

app.use(require(__dirname + '/routes/index'));

// ERROR Handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listens on port: ${PORT}`);
});
