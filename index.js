const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const postRoute = require("./routes/postRoute");
const app = express();

app.use(cors());
app.use(express.static("public"));
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//define routes
app.use("/post", postRoute);


/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
  return res.status(404).json({
      success: false,
      message: 'API endpoint doesnt exist'
  })
});
// connect to mongodb & listen for requests
const dbURI = "mongodb://127.0.0.1/todoApp";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    const server = http.createServer(app);
    server.listen(9000, "127.0.0.1", () => {
      console.log("Server is listening on the port 9000");
    });
  })
  .catch((err) => console.log(err));
