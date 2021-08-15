const route=require('express').Router();
const User=require('../models/User');

route.post('/',async(req,res)=>{
    console.log(req.body.email);
    
    const searchObj=await User.find({email:req.body.email})
    
    if(searchObj.length===0){
        res.send("User not registered")
    }else{
        res.send('logged in succesfully')
    }
})

route.post('/new',(req,res)=>{
    const obj=new User({
        name:req.body.firstName+" "+req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })
    console.log(req.body.password);
    obj.save()
    res.redirect('/')
})

module.exports=route