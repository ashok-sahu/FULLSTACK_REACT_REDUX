const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/crud-app",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("success to connect database!");
  })
  .catch((err) => {
    console.log(err, "failed to connect database!");
  });
