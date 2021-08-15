mongoose=require('mongoose')

const Schema=mongoose.Schema({
    googleID:{
        type:String,
    },
    name:{
        type: String
    },
    email:{
        type:String,
        requred:true
    },
    article:{
        type:String
    },
    password:{
        type:String
    },
    imageUrl:{
        type:String
    }
});

module.exports=mongoose.model('Konnect',Schema);