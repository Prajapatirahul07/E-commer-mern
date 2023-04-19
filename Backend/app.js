const express = require("express");
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middleware/error')
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const app = express();
const dotenv = require("dotenv");
const path = require('path');

app.use(express.json({limit:"50mb"}));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ limit:"50mb", extended: true }));
// app.use(fileUpload());
app.use(express.static(path.join(__dirname,'./frontend/build')))

//Config
dotenv.config({path:"Backend/config/config.env"});

//import routes
const product  = require('./Routes/ProductRoute');
const user = require('./Routes/userRoute');
const order = require("./Routes/orderRoute");
const payment = require("./routes/paymentRoute");


app.use("/api/v1/",product);
app.use("/api/v1/",user);
app.use("/api/v1/",order);
app.use("/api/v1", payment);


app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'));
  });


//Middleware for Error
app.use(errorMiddleware);

module.exports = app;