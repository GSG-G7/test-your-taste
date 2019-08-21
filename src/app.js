const path = require('path');

const express = require('express');

const exphs = require('express-handlebars');

const router = require('./controllers/index');

const PORT = process.env.PORT || 5000;

const app = express();
app.set('port', PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(router);
app.engine(
    'hbs',
    exphs({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname,'views','partials'),
        defaultLayout: 'main',
    }),
);

module.exports = app;