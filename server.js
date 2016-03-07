var connect = require('connect');
var http = require('http');
var fs = require('fs');

var app = connect();

app.use(function(req, res){
  switch(req.url) {
    case '/bundle.js':
      fs.readFile('build/bundle.js', function(err, data) {
        if (err) throw err;
        res.end(data);
      });
      break;
    case '/styles.css':
      fs.readFile('build/styles.css', function(err, data) {
        if (err) throw err;
        res.end(data);
      });
      break;
    default:
      fs.readFile('build/index.html', function(err, data) {
        if (err) throw err;
        res.end(data);
      });
  }
});

http.createServer(app).listen(3000);
