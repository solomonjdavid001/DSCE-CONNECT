const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
require("./config/passport")(passport);
const expressEjsLayout = require('express-ejs-layouts')
//mongoose
app.use(express.static("public"));
mongoose.connect('mongodb+srv://varshita:varshita17@cluster0.ksuvr.mongodb.net/StudentRegistration?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));
//EJS
app.set('view engine','ejs');


app.use(expressEjsLayout);
app.use(express.static("public"));
//BodyParser
app.use(express.urlencoded({extended : false}));

//express session
app.use(session({
  secret : 'secret',
  resave : true,
  saveUninitialized : true
 }));
 //use flash
 app.use(passport.initialize());
app.use(passport.session());
 app.use(flash());
 app.use((req,res,next)=> {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error  = req.flash('error');
 next();
 })
//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
//express session

app.listen(3036);