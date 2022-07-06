const express = require("express");
const path = require("path");
const config = require("dotenv");
const https = require("https");
const fs = require("fs");

config.config();
const configValues = process.env;

const app = express();

app.use(
    express.static(path.join(__dirname, "build"))
);

app.get("/*", function (req, res) {
    console.log(
        `🚀 Client ready at desafio.co.ke:${configValues.PORT || 80}`
    );
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(80);


// prod values
// const options = {
//     key: fs.readFileSync('/opt/ssl/key.pem'),
//   cert: fs.readFileSync('/opt/ssl/cert.pem'),
// };
//
// // UAT values
// // const options = {
// //   key: fs.readFileSync('/opt/ssl/private.key'),
// //   cert: fs.readFileSync('/opt/ssl/svdt1homeuat01.cer'),
// // };
//
// // port for prod otherwise use :3000 for UAT
// // app.listen(8000); //Without HTTPS
// https.createServer(options, app).listen(443);
