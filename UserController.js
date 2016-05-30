UploadController = function() {};

UploadController.prototype.uploadFile = function(req, res) {
    var file = req.files.file;
    console.log(file.name);
    console.log(file.type);
}

module.exports = new UploadController();
