const express = require('express');
const db = require('./config/connection');

const { Food } = require('./models/Food');

const app = express();
const PORT = process.env.PORT || 3001;



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`connected to http://localhost:${PORT}`);
  });
})
