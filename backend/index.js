const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config();
const cors=require('cors')
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser=require('body-parser')
const app= express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const path=require('path')
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true,useUnifiedTopology: true })
const mdb=mongoose.connection
mdb.on('open',()=>{
    console.log("DB is connected now...")
});

app.use(cors())
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys:[process.env.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.static(path.join(__dirname,'build')))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build',"index.html"))
})

const auth=require('./routes/googleauth');
app.use('/auth',auth);

app.get('/api',(req,res)=>{
    res.json({users:['user-1','user-2','user-3']})
})
PORT=process.env.PORT || 5000
app.listen(PORT,()=>{console.log(`Listening on ${PORT}!`);})
