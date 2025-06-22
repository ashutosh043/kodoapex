const express  = require('express');
const router = express.Router();



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

module.exports = router;

