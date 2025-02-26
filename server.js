//DEPENDENCIES
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');
const employeesController = require('./controllers/employees.js');
const authController = require('./controllers/auth.js');


const port = process.env.PORT ? process.env.PORT : '3000';
const path = require('path');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//MIDDLEWARE

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public'))); // middleware for using css file 

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passUserToView);

// ROUTES

app.get('/', (req, res) => {
  // Check if the user is signed in
  if (req.session.user) {
    // If the user is signed in redirect them to their index page
    res.redirect(`/users/${req.session.user._id}/employees`);
  } else {
    res.render('index.ejs');
  }
});

app.use('/auth', authController);
app.use(isSignedIn);
app.use('/users/:userId/employees', employeesController);


// PORT 
app.listen(port, () => {
    console.log(`The express app is ready on port ${port}!`);
  });