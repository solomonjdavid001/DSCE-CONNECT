const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
  name :{
      type  : String,
      required : true
  } ,
  USN:{
    type  : String,
    required : true
  },
  email_id :{
    type  : String,
    required : true
} ,
  email :{
    type  : String,
    required : true
} ,
password :{
    type  : String,
    required : true
} ,
Father_Name :{
    type  : String,
    required : true
},
Mother_Name :{
    type  : String,
    required : true
},
cncs :{
    type  : String,
    required : true
},
dbms :{
    type  : String,
    required : true
},
ir :{
    type  : String,
    required : true
},
python:{
    type  : String,
    required : true
},
me :{
    type  : String,
    required : true
},
cc :{
    type  : String,
    required : true
},
branch:{
    type  : String,
    required : true
},
proctor :{
    type  : String,
    required : true
}
});
const User= mongoose.model('User',UserSchema);
const Var= mongoose.model('User',UserSchema);

module.exports = User;