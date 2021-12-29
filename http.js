const http = require('http');
const server = http.createServer( (req,res) => {
//   res.write('hello roushan');
console.log(req);
if(req.url === '/'){
    res.end('welcome to our homepage')
}
  
if(req.url ==='/about'){
   res.end('welcome to our about us page')  
}

res.end(` <h1>Oops!</h1> <p>we can't seem to find the page you are looking for</p><a href ="/">Go Home</a> `) 

})

server.listen(5000); 