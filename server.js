var express = require('express'),
    app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/clients/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/clients/views/index.html');
});

var server = app.listen(app.get('port'), function(){
  console.log('The server is running on port, ' + server.address().port);
});
