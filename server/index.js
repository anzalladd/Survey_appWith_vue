const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/survey');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});
var Post = require('./models/index')
//post
app.post('/posts', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var showProgressBar = req.body.showProgressBar;
    var pages = req.body.pages;
    var new_post = new Post({
      title: title,
      showProgressBar: showProgressBar,
      pages : pages
    })
    new_post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
})

//get all post
app.get('/posts', (req, res) => {
    Post.find({}, 'title showProgressBar pages', function (error, posts) {
      if (error) { console.error(error); }
      res.send({
        posts: posts
      })
    }).sort()
})

app.listen(process.env.PORT || 5000,()=>{
    console.log('Connected to port 5000')
})

