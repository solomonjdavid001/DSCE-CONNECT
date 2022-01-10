const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../models/user");
module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'email'},(email,password,done)=> {
                //match user
                User.findOne({email : email})
                .then((user)=>{
                 if(!user) {
                     return done(null,false,{message : 'that USN is not registered'});
                 }
                //  else{
                //     return done(null,user);
                //  }
                 //match pass
                 console.log(user.password);
                 bcrypt.compare(password,User.Password,(err,isMatch)=>{

                     if(!isMatch) {
                         return done(null,user);
                     } else {
                        // return done(null,user);
                         return done(null,false,{message : 'pass incorrect'});
                         console.log(user.Password);
                     }
                 })
                if(password==user.password)
                {return done(null,User);
                }
                else
                return done(null,false,{message : 'pass incorrect'})
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}