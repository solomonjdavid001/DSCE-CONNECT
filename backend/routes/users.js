const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const bcrypt = require('bcrypt');
const passport = require('passport');
//login handle
router.get('/login',(req,res)=>{
    res.render('login');
})
// router.get('/index',(req,res)=>{
//     res.render('index');
// })
  
//Register handle
router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect : '/dashboard',
        failureRedirect : '/users/login',
        failureFlash : true,
        })(req,res,next);
})

module.exports  = router ;
