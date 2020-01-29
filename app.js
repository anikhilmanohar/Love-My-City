var express = require('express');
var app = express();
var routes = require('./routes/route');
app.set('view engine','ejs');
app.get('/', routes.home);
app.get('/home', routes.home);
app.get('/:city', routes.city);
app.use(express.static(__dirname+'/public'));
var port = process.env.PORT||8080;

app.listen(port, function(req, res){
    console.log("find the application on: http://localhost:"+port);
})
