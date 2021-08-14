const express=require('express')
const cors=require('cors')
const app= express()
const path=require('path')
app.use(cors())
app.use(express.static(path.join(__dirname,'build')))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build',"index.html"))
})

app.get('/api',(req,res)=>{
    res.json({users:['user-1','user-2','user-3']})
})
app.listen('5000',()=>{
    console.log("Listening on 5000");
})