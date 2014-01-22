
var connect  = require('connect')
  , io       = require('socket.io')
  , http     = require('http')
  , app      = connect()
  , server
  , io
  ;

app
  .use(connect.logger('dev'))
  .use(connect.static('static'))
  .use(function(req, res){
    res.end('hello world\n');
  })

server = http.createServer(app).listen(13667);

io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  console.log(socket);
  socket.emit('news', { hello: 'world' });
});