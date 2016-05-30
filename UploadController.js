var request = require('request');
var fs = require('fs');
var HttpStatus = require('http-status-codes');

UploadController = function() {};

UploadController.prototype.uploadFile = function(req, res) {
    var url = 'http://127.0.0.1:8081/send'; 
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
}

module.exports = new UploadController();
