const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    
   } ,
   userId:{
    type:String,
    required:true,
    unique:true
   } ,
   password:{
    type:String,
    required:true,
    minLength:6
   } ,
   emailId:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
   } 
})