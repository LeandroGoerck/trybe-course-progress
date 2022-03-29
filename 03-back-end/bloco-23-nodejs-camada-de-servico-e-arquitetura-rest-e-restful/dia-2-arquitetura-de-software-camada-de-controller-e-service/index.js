const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/', function (req, res) {
  res.send('hello world');
});

app.put('/', function (req, res) {
  res.send('hello world');
});

app.delete('/', function (req, res) {
  res.send('hello world');
});

app.all('/', function (req, res) {
  res.send('hello world');
});

app
  .route('/')
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});