const express = require('express');
const app = express();
const port = process.env.PORT  || 3000;
const ejs = require('ejs');
require('./config/db');
const path = require('path');
const router = require('./controller/kodo');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '/public')))
app.use(router);





app.listen(port, ()=>{
    console.log(`Server is running on port, ${port}`)
})