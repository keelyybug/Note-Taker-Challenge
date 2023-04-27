const express = require('express');
const app = require('./routes/index.js');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);//should i change it to be the index.js?
app.use('/', htmlRoutes);
app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);

