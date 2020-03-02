const express = require('express');

let bodyPaser = require('body-parser'); 

const app = express();


app.use(function(req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));


app.use("/api", require("./api"));
const PORT = process.env.PORT || 3000 


app.listen(PORT, () => {
    console.log(`Server has been starte.... on PORT: ${PORT}`);
    
})

