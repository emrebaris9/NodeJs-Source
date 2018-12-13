var http = require('http');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Ankara,TR&appid=2ef954e167688e721e09acde086adf5f&units=metric';

const server = http.createServer(function (request, response) {

    var request = require('request');
    request(url, function (err, res, body) {
        var data = JSON.parse(body);
        response.writeHead(200,{'content-type': 'text/html; charset=utf8'});
        response.write("<html><body><div id='container'>");
        response.write("<h1>" + 'Şehir Adı : ' + data['name'] + '<br>' + "</h1>");
        response.write("<h2>" + 'Sıcaklık : ' + data.main['temp'] + '<br>' + "</h2>");
        response.write("</div></body></html>");
        response.end();
    });
}).listen(4000);
