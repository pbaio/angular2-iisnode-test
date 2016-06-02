'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');

const server = express();
const port = process.env.port || 3000;

server.use(bodyParser.json());
server.use(helmet());

server.set('views', path.join(__dirname, 'views'));
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');


server.use(express.static(path.join(__dirname, 'node_modules')));
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'app')));

server.get('/', (req, res) => {
  return res.render('index');
});

server.listen(port, () => {
  console.log(`listening on `);
})
;