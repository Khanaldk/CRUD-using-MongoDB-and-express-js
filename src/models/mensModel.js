const mongoose=require('mongoose');

const mensSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    DOB:{
        type:Date,
       
    },
    country:{
        type:String,
        required:true
    },
    score:{
        type:Number
    },
    event:{
        type:String,
        default:"100m"
    }
});

const MensModel=new mongoose.model("Menranking",mensSchema);

module.exports=MensModel