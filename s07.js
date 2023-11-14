const { error } = require('console');
let http = require('http');
let port = 8037 ;
let server = http.createServer(requestHandler);
server.listen(port);
console.log("server is running on port:" + port)

let headers = {
    Text : {'Content-Type' : 'Text/Plain'}
    ,
    html : {'Content-Type' : 'Text/Html'}
   };

   function page1controller(response){
    response.writeHead(200,Headers.Html);
    response.write(
        `<html>
        <body>
        salam<strong>be shoma!</strong>
        </body>
        </html>`);
        response.end();
   }
   

   

let obj={
   
    page1:  page1controller
}

function requestHandler(request,response){
    let firstpart = request.url.split('/')[1];
    if(firstpart !== 'Favicon.ico'){
        obj[firstpart](response);
    }
}
function page2controller(response){
    console.log('page2controller1')
    fs.ReadFile(./page2.html,'utf8',function(error,data){
        console.log('page2controller2');
        console.log('page2controller2 error',error);
        console.log('page2controller2 data',data);

        response.writeHead(200,headers.html);
        response.write(data);
        response.end();
    })
    console.log('page2controller 3')
}
function requestHandler4(request.response){
    console.log('request.url',request.url);
    console
}
