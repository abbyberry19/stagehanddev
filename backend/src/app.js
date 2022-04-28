const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;;
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());
app.use(express.static(__dirname));
// app.set('view engine', 'ejs');

// DATABASE CONNECTION

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/stagehanddb');
var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(callback){
        console.log("Connection Succeeded");
    });

    let gfs;

    db.once("open", () => {
      gfs = Grid(db.db, mongoose.mongo);
      gfs.collection('uploads');
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
  


// // Get uploads
// app.get('/upload', (req, res) => {
//   File.find({}, function (error, files) {
//     if (error) { console.error(error); }
//     res.send({
//       files: files
//     })
//   }).sort({_id:-1})
// });

// app.post('/upload', upload.single('file'), (req, res) => {
//   res.json({ file: req.file });
// });

// app.get('/files', (req, res) => {
//   imgModel.find({}, (error, files) => {
//     if (error) { console.error(error); }
//     res.send({
//       files: files
//     }) 
//   }).sort({_id:-1})
//   });

// app.post('/files', (req, res, next) => {
//   var obj = {
//       name: req.body.name,
//       desc: req.body.desc,
//       img: {
//           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//       }
//   }
//   imgModel.create(obj, (err, item) => {
//       if (err) {
//           console.log(err);
//       }
//       else {
//           // item.save();
//           res.redirect('/');
//       }
//   });
// });

// app.delete('/files/:id', (req, res) => {
//   gfs.remove({ _id: req.params.id }, (err) => {
//     if (err) return res.status(500).json({ success: false })
//       return res.json({ success: true });
//     });
//   });
// });

// // create storage engine
// const storage = new GridFsStorage({
//   url: 'mongodb://localhost:27017/stagehanddb',
//   file: (req, file) => {
//       return new Promise((resolve, reject) => {
//           crypto.randomBytes(16, (err, buf) => {
//               if (err) {
//                   return reject(err);
//               }
//               const filename = buf.toString('hex') + path.extname(file.originalname);
//               const fileInfo = {
//                   filename: filename,
//                   bucketName: 'files'
//               };
//               resolve(fileInfo);
//           });
//       });
//   }
// });

// const upload = multer({ storage });

// // Upload a single image/file to Image collection

// app.post('/files', upload.single('file'), (req, res) => {
//   var db = req.db;
//   var caption = req.body.caption;
//   var filename = req.body.filename;
//   var new_image = new Image({
//     caption: caption,
//     filename: filename
//   })
        
//   new_image.save(function (error) {
//     if (error) {
//       console.log(error)
//     }
//     res.send({
//       success: true,
//       message: 'File saved successfully!'
//     })
//   })
// })
      
// // GET: Delete an image from the collection
// app.delete((req, res, next) => {
//   Image.findOne({ _id: req.params.id })
//     .then((image) => {
//       if (image) {
//     Image.deleteOne({ _id: req.params.id })
//     .then(() => {
//       return res.status(200).json({
//         success: true,
//         message: `File with ID: ${req.params.id} deleted`,
//       });
//     })
//     .catch(err => { return res.status(500).json(err) });
//       } else {
//         res.status(200).json({
//           success: false,
//           message: `File with ID: ${req.params.id} not found`,
//         });
//       }
//     })
//   .catch(err => res.status(500).json(err));
// });

// // Fetches all the files in the uploads collection

// app.get('/files', (req, res) => {
//   Image.find({}, function (error, images) {
//     if (error) { console.error(error); }
//     res.send({
//       images: images
//     })
//   }).sort({_id:-1})
// })

// // Delete a file by an ID

// app.delete('/files/:id', (req, res) => {
//     console.log(req.params.id);
//     gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
//       if (err) {
//         return res.status(404).json({ err: err });
//       }
//       res.status(200).json({
//         success: true,
//         message: `File ${req.params.id} is deleted`,
//       });
//     });
//   });

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
        // upload.save();
        res.redirect('/uploads');
    }
  });
  // var img = fs.readFileSync(req.file.path);
  // var encode_img = img.toString('base64');
  // var final_img = {
  //     contentType:req.file.mimetype,
  //     // image:new Buffer(encode_img,'base64')
  //     image: Buffer.from(encode_img, 'base64')
  // };
  // Upload.create(final_img,function(err,result){
  //     if(err){
  //         console.log(err);
  //     }else{
  //         console.log(result.img.Buffer);
  //         console.log("Saved To database");
  //         res.contentType(final_img.contentType);
  //         res.send(final_img.image);
  //     }
  // })
});

// const { auth } = require('express-openid-connect');

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:3000',
//   clientID: '3ri89GNH8i3fm06CCD3kSVP2bUfgAsNi',
//   issuerBaseURL: 'https://dev-x11k9esb.eu.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });