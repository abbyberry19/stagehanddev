const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());
app.use(express.static(__dirname));

// DATABASE CONNECTION

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/stagehanddb');
var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(callback){
        console.log("Connection Succeeded");
    });

app.listen(process.env.PORT || 8081)

// FORUM POSTS
var Post = require("../models/post");
var Upload = require('../models/image');

// Get all posts
app.get('/posts', (req, res) => {
  Post.find({}, function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

// Add new post
app.post('/posts', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
      title: title,
      description: description
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

// Delete a post
  app.delete('/posts/:id', (req, res) => {
    var db = req.db;
    Post.remove({
      _id: req.params.id
    }, function(err, post){
      if (err)
        res.send(err)
      res.send({
        success: true
      })
    })
  })
  

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/uploads/'));
    // cb(null, 'uploads')
    // cb(null, __dirname);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
    // cb(null, Date.now() + file.originalname);
    // cb(null, new Date().toISOString() + file.originalname);
  }
})

var upload = multer({ storage: storage })

app.get("/uploads",(req,res)=>{
  Upload.find({}, function (error, uploads) {
    if (error) { console.error(error); }
    res.send({
      uploads: uploads
    })
  }).sort({_id:-1})
})

app.post("/uploads",upload.single('img'),(req,res)=>{
  var obj = {
    // name: req.body.name,
    // desc: req.body.desc,
    img: {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png'
    }
}
Upload.create(obj, (err, upload) => {
    if (err) {
        console.log(err);
    }
    else {
        res.redirect('/uploads');
    }
  });
});
