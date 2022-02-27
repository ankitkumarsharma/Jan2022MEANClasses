var http = require('http');
var nodeEmail = require('nodemailer');


var emailmanage = nodeEmail.createTransport({
    host: "smtp-mail.outlook.com", // hostname
secureConnection: false, // TLS requires secureConnection to be false
port: 587, // port for secure SMTP
tls: {
ciphers:'SSLv3'
},
requireTLS:true,//this parameter solved problem for me
    auth: {
        user:'apsoftwarepvtltd727777@outlook.com',
        pass:'Aditya@790raj',
    }
});
var emailOPtions ={
    from:'apsoftwarepvtltd727777@outlook.com',
    to:'aks.computerexpert@gmail.com',
    subject:'node',
    text:'content',
};
emailmanage.sendMail(emailOPtions,(err,info) =>{
    if(err){
        console.log(err)
    } else {
        console.log('abc')
    }
})
http.createServer((req,res)=>{
    res.end('tfwetytre');
}).listen(4567);
console.log('server is running');