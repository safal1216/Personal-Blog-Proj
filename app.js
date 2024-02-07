//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const homeStartingContent = "Hi there! I'm Safal, and I'm thrilled to welcome you to my little corner of the internet. our mission is to inspire and empower readers to live their best lives. Through a diverse range of topics including personal growth, wellness, productivity, and creativity, we aim to provide practical advice, thought-provoking insights, and uplifting stories that resonate with our audience. Whether you're seeking tips for self-improvement, motivation to pursue your passions, or simply a dose of positivity, you'll find it here. Our goal is to cultivate a supportive community where individuals can thrive, connect, and embark on their journey towards fulfillment and happiness";
const aboutContent = "Welcome to my personal blog! I'm passionate about. This blog is a platform for me to share my thoughts, experiences.";
const contactContent = "Feel free to reach out to me with any questions, comments, or suggestions. I'll do my best to respond to your messages as soon as possible. Thank you!";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

const posts = [];

app.get("/", (req, res)=>{
  res.render("home", {
    startingContent: homeStartingContent,posts: posts
})
})

app.get("/about", (req, res)=>{
  res.render("about", {
    aboutContent: aboutContent
})
})

app.get("/contact", (req, res)=>{
  res.render("contact", {
    contactContent : contactContent
})
})

app.get("/compose", (req, res)=>{
  res.render("compose")
})

app.post("/compose", (req, res)=>{
  const post = {
    title: req.body.postTitle,
    body: req.body.postBody
  }
  posts.push(post)
  res.redirect("/")

})

app.get("/posts/:postName", (req, res)=>{
  const requestedTitle = _.lowerCase(req.params.postName);
  posts.forEach((post)=>{
    const storedTitle = _.lowerCase(post.title);
    if(storedTitle === requestedTitle){
      res.render("post", {
        title: post.title,
        content: post.body
      })
    }
  })
})













app.listen(3000, function() {
  console.log("Server started on port 3000");
});
