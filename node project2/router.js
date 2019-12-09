const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('homepage');
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/adduser',(req,res)=>{
    res.render('adduser');
})