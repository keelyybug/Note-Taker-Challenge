const express = require('express');
const app = require('./routes/index.js');
const apiRoutes = require('./routes/apiRoutes/index');//do i need the index portion
const htmlRoutes = require('./routes/htmlRoutes/index');//do i need the index portion?
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);//should i change it to be the index.js?
app.use('/', htmlRoutes);
app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);

