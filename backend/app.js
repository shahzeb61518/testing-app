const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// Get routes object=> to get access to the routes
const postRoutes = require('./routes/post-routes');
const authRoutes = require('./routes/auth-routes');
const app = express();


const url = "mongodb+srv://shahzeb:shahzeb123@cluster0-tlmv5.mongodb.net/post-data?retryWrites=true&w=majority";
mongoose.connect(url, (err, db) => {
  if (err) throw console.log('err>>>', err);
  console.log("DB is Connected");
});


//app.use(cors());
// Add headers
// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, application/json");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use('/api/post', postRoutes);
app.use('/api/admin', authRoutes);

console.log("server is running");

module.exports = app;
