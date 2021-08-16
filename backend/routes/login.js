const route=require('express').Router();
const User=require('../models/User');

route.post('/',async(req,res)=>{
    
    const searchObj=await User.find({email:req.body.email})
    console.log(searchObj);
    if(searchObj.length===0){
        res.json({message:"User not registered"})
    }else{
        if(searchObj[0].password==req.body.password){
            res.json(searchObj)
        }else{
            res.json({message:'Wrong Password'})
        } 
    }
})

route.post('/new',(req,res)=>{
    const obj=new User({
        name:req.body.firstName+" "+req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })
    obj.save()
    res.redirect('/')
})

module.exports=route