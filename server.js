const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

// Initialize
const app = express();

// Settings
app.set('port', process.env.PORT || 1818);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));

// Midlewares
app.use(express.urlencoded({extended: true}));

// Routes
app.use(require('./routes/index.routes'));

// Static files
app.use(express.static('./public'));

module.exports = app;
