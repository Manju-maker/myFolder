const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
app.set('view engine','ejs');

 
app.get('/',(req,res) =>{
    res.render('home',{user:req.user});
})

// mongoose.connect('keys.mongodb+.dbURI',()=>{
//     console.log('Connected to mongodb');
// })

app.use(cookieSession({
    maxAge: 24*69*60*1000,
    keys:[keys.session.cookieKey]
})
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);


mongoose.connect("mongodb://localhost:27017/mog", { useNewUrlParser: true })
var server = app.listen(2021,()=>{

    console.log("My server is running");
})