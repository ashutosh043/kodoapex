const mongoose = require('mongoose');

const kodoDb = async function (){
  try{
     mongoose.connect('mongodb://localhost:27017/kododb');
     console.log("Database connected sucessfully");

  }
  catch(error){
    console.log(error)
  }
}

kodoDb();