const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
// const multer = require("multer");
const path = require("path");
// const verifyJWT = require('./middleware/verifyJWT');
const app = express();


dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(cors());
app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(cookieParser());
app.set("view engine", "ejs");
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "images");
//     },
//     filename: (req, file, cb) => {
//       cb(null, "hello.jpeg");
//     },
//   });
  
//   const upload = multer({ storage: storage });
//   app.post("/upload", upload.single("file"), (req, res) => {
//     res.status(200).json("File has been uploaded");
//   });

 
  app.use('/register', require('./router/register'));
  app.use('/auth', require('./router/auth'));
  app.use('/refresh', require('./router/refresh'));
  
  // app.use(verifyJWT);
  
  
  app.use('/posts', require('./router/post'));
  app.use('/category', require('./router/category'))
  
const PORT = process.env.PORT;


app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})


