const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json());

const http = require('http');

const hostname = process.env.HOSTNAME;
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});