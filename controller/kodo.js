const express  = require('express');
const router = express.Router();
const kodoModel = require('../model/contact')


router.get('/', (req,res)=>{
   res.render("index");
});

router.get('/about', (req,res)=>{
   res.render("about");
});

router.get('/projects', (req,res)=>{
   res.render("projects");
});

router.get('/teams', (req,res)=>{
   res.render("teams");
});

router.get('/contact', (req,res)=>{
   res.render("contact");
});

router.get('/faq', (req,res)=>{
   res.render("faq");
});


router.get('/blog', (req,res)=>{
   res.render("blog");
});


router.post('/contact', (req,res)=>{
  
   const firstname = req.body.firstname;
   const lastname = req.body.lastname;
   const company = req.body.company;
   const email = req.body.email;
   const phone = req.body.phone;
   const message = req.body.message;

   const sendData = kodoModel({
      firstname,
      lastname,
      company,
      email,
      phone,
      message
   });

   sendData.save();

   res.redirect('/')

})

module.exports = router;

