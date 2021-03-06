const auth=require('express').Router();
const passport = require("passport");
const User=require('../models/User');

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: "/auth/google/redirect"
      },async (accessToken, refreshToken, profile, done) => {

        const search=await User.find({email:profile.emails[0].value})
        
        if(search.length===0){
          const wow = new User({
                    googleID: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value
                  })
          wow.save();
          // const created=await User.find({name:profile.displayName})
          
          done(null, wow);
        }else{
        
          done(null, search[0]);
        }
    })
      
  ); 

class Login {
    check=0;
}

let main=new Login;

auth.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));

auth.get("/google/redirect",passport.authenticate("google"),(req,res)=>{
    main.check=1;
    res.send("Logged in successful");
});

auth.get("/logout", (req, res) => {
    res.send('loggedout successfully')
    main.check=0;
});



auth.get('/check',(req,res)=>{
  if(main.check!== 0){
    res.send('Welcome '+req.user.name+", You have accessed website!")
  }else{ 
    res.send("Not allowed to enter :(")
  }
})


passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  User.findById(id).then(user => {
    done(null, user);
    
  });
  
});
module.exports=auth