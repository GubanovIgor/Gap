const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

const indexRouter = require('./routs/index');

require('dotenv').config();

const hbs = handlebars.create({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views'),
  partialsDir: path.join(__dirname, 'views'),
});


mongoose.connect(`mongodb+srv://applecake:${process.env.PASSWORD}@gap-jusal.mongodb.net/gap?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true });
const app = express()

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('4000');
})

module.exports = app;
