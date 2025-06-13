const express  = require('express');
const app = express();
const port = process.env.PORT ||3000;
const ejs = require('ejs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
     res.render('index');
});
 
app.get('/about', (req,res)=>{
     res.render('about');
});

app.get('/services', (req,res)=>{
     res.render('services');
});

app.get('/blog', (req,res)=>{
     res.render('blog');
});


   

app.listen(port, ()=>{
console.log('server is running on port ' + port)
});

  