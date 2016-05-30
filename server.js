var express = require("express");
var cors = require('cors');
var path = require('path');
var HttpStatus = require('http-status-codes');
var multiparty = require('connect-multiparty');
var request = require('request');
var fs = require('fs');

var multipartyMiddleware = multiparty();
var app = express();

app.use(cors());

app.post('/send', multipartyMiddleware, function(req, res) {
    var url = 'https://angular-file-upload-cors-srv.appspot.com/upload';
    var file = req.files.file;
    var post = request.post(url, function (err, resp, body) {
        if (err) {
            console.log('Não foi possível enviar o arquivo.');
            res.sendStatus(HttpStatus.BAD_REQUEST);
        } else {
            console.log('Enviado!!');
            res.sendStatus(HttpStatus.OK);
        }
    });
    var form = post.form();
    var file = req.files.file;
    form.append('file', fs.createReadStream(file.path));
});

var server = app.listen(8081, function () {
    console.log("Sua app rodando na porta %s...", server.address().port);
});

