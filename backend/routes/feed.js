const route=require('express').Router();
const User=require('../models/User');

route.get('/',async(req,res)=>{
    const allObj=await User.find()
    data=[]
    allObj.map(i=>{
        data.push({'name':i.name,'article':i.article,'id':i._id})
    })
    // console.log(data);
    res.json(data)
})















module.exports=route