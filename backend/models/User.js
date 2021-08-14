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
        typr:String
    }
});

module.exports=mongoose.model('Konnect',Schema);