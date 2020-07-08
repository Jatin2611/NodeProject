const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminroutes = require('./routes/admin.js');
const userroutes = require('./routes/shop.js');
const path = require('path');
const { static } = require('express');

app.use(bodyParser.urlencoded({extended :false}));

app.use('/admin',adminroutes);
app.use(userroutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.use(express.static(path.join(__dirname, 'views')));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
// const http = require('http');
// const server = http.createServer(app);
// server.listen(3000);