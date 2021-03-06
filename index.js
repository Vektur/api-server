'use strict';

require('dotenv').config()
let server = require('./src/server.js');
let PORT = process.env.PORT || 3300;
let URI = process.env.MONGO_URI;

const mongoose = require('mongoose');
const MONGO_URI = URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGO_URI, options)
  .then(() => server.start(PORT));
