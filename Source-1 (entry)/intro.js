// başlangıç 
var http = require('http')
var log = require('./log.js')


http.createServer(function (request, response) {
    if (request.url == "/admin") {
        response.writeHead(200,{'Content-Type': 'text/html'})
        response.write("<html><body><strong>Admin sayfasi</strong></body></html>")
    
    } else if(request.url=="/"){
        response.writeHead(200,{'Content-Type': 'text/html'})
        response.write("<html><body><strong>Ana Sayfa</strong></body></html>")
  
    } else if(request.url == "/customer"){
        response.writeHead(200,{'Content-Type': 'application/json'})
        response.write(JSON.stringify({name: 'Emre', lastname:'Baris', age:'24'}) )
    } 
    response.end('<br/>Sayfa sonu')
}).listen(8080)

log.information("Sunucu Yayına geçti!")




//response.writeHead(200,{'Content-Type': 'text/html'}) // gönderimizin tipi