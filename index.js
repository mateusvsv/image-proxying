var express = require("express");
var cors = require('cors');
var path = require('path');
var multiparty = require('connect-multiparty');

var multipartyMiddleware = multiparty();
var app = express();

UploadController = require('./UploadController');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get("/", function(req, res) {
    res.sendFile( __dirname + "/" + "form.html" );
});

app.post('/upload', multipartyMiddleware, UploadController.uploadFile);

var server = app.listen(8080, function () {
    console.log("Sua app rodando na porta %s...", server.address().port);
});
