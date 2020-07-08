const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product',(req,res,next) => {
    // console.log("Middleware - 2");
    // const url = req.url;
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

router.post('/response',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
    // input = req.body;
    // res.send("<h1>This is just / page with user input =</h1>");
    // next();
});

module.exports = router;
