//require the library
const mongoose = require("mongoose");

// here we are using the MongoDB Url 
const DB_URL = "mongodb://localhost:27017/Issue_Tracker";
//connect to the database
mongoose 
      .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
  })
    .then(() => {
        console.log(`Successfuly connected to MongoDB!!!`);
  })
  .catch((err) => {
        console.log(`Error connecting to database ${err}`);
  });
