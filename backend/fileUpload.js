var http = require("http");
var formModule = require("formidable");
var fileSave = require('fs');
http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formModule.IncomingForm();
      form.parse(req, function (err, fields) {
        var oldpath = fields.filetoupload;
        var newPath = 'D:/jan-classes/Jan2022MEANClasses/backend/saveFiles/'+oldpath;
        fileSave.rename(oldpath,newPath, function(err){
            if(err) console.log(err);
            res.write("File uploaded!!!");
        res.end();
        })
        
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write('<form action="fileupload" method="post">');
      res.write('<input type="file" name="filetoupload">');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(1234, function () {
    console.log("server is running...");
  });
