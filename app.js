const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

const indexRouter = require('./routs/index');

const hbs = handlebars.create({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views'),
  partialsDir: path.join(__dirname, 'views'),
});

mongoose.connect('mongodb://localhost:27017/gap', { useNewUrlParser: true, useCreateIndex: true });

const app = express()

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('I\'m ready, pussy!');
})

module.exports = app;
