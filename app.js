//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Hi there! I'm Safal, and I'm thrilled to welcome you to my little corner of the internet. our mission is to inspire and empower readers to live their best lives. Through a diverse range of topics including personal growth, wellness, productivity, and creativity, we aim to provide practical advice, thought-provoking insights, and uplifting stories that resonate with our audience. Whether you're seeking tips for self-improvement, motivation to pursue your passions, or simply a dose of positivity, you'll find it here. Our goal is to cultivate a supportive community where individuals can thrive, connect, and embark on their journey towards fulfillment and happiness";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.render("home", {
    startingContent: homeStartingContent
})
})












app.listen(3000, function() {
  console.log("Server started on port 3000");
});
