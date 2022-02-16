var http = require('http');
var url = require('url');
var nodeEmail = require('nodemailer');
// server create
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var query1 = url.parse(req.url, true).query;
    var content = query1.abc + " "+query1.xyz;
    res.end(content);
}).listen(8080);
console.log('Server running')

var emailManage = nodeEmail.createTransport({
    service: 'gmail',
    auth: {
        user: 'abc@gmail.com',
        pass:'12345'
    }
});

var emailOptions = {
    from: 'abc@gmail.com',
    to: 'aks.computerexpert@gmail.com',
    subject:'ABC XYZ',
    text: 'content'
};

emailManage.sendMail(emailOptions, (err, info)=>{
    if(err){
        console.log(err)
    } else {
        console.log("Email sent", info.response);
    }
})