const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const path = require('path');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/indexRouter');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/template');




app.use((req, res, next) => {
    console.log("METHOD: ", req.method);
    console.log("URL: ", req.url);
    next();
})

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}..`);
})