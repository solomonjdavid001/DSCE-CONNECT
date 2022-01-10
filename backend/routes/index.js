const express = require('express');
const { serializeUser } = require('passport/lib');
const router  = express.Router();
const {ensureAuthenticated} = require('../config/auth')
const Var = require("../models/user");
const User = require("../models/user");
//login page
router.get('/', (req,res)=>{
    res.render('login');
})
// router.get('/', (req,res)=>{
//     res.sendFile('../index.html');
// })
//register page

router.get('/dashboard',(req,res)=>{
    // res.render('dashboard',{
    //     user: req.user
    // });
console.log(req.user)
        Var.find({USN:req.user.email},function(err,red){
            console.log(red)
            console.log(red.password)
            res.render('dashboard',{
                ram: red
           });
            })
        
        })
    
        
    
module.exports = router; 