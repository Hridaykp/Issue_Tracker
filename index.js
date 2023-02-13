//require libraries
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const Port = 5000; //port on which server will be running
const app = express();



app.use(express.urlencoded({extended: false}));
app.use(express.static("assets"));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// use express router
app.use("/", require("./routes"));
app.listen(Port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${Port}`);
});
module.exports = db;