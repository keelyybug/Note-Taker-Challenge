const html = require('express').Router();
const path = require('expres').Router();

html.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

html.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

module.exports = html;