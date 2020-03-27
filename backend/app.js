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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.use(cors());
// Add headers
// res.setHeader('Access-Control-Allow-Origin', 'https://testing-app-shahzeb61518.herokuapp.com');
// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'https://testing-app-shahzeb61518.herokuapp.com');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Accept,Access-Control-Allow-Origin,Content-Type,Content-Length,Host,Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});



app.use('/api/post', postRoutes);
app.use('/api/admin', authRoutes);

console.log("server is running");

module.exports = app;
