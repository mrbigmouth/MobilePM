
var connect  = require('connect')
  , io       = require('socket.io')
  , http     = require('http')
  , config   = require('./config.js')
  , app      = connect()
  , server
  , io
  ;

app
  .use(connect.logger('dev'))
  .use(connect.static(__dirname + '/static'))
  .use(connect.cookieParser);

server = http.createServer(app).listen( config.port );

io = require('socket.io').listen(server);

io.configure(function () {
  io.set('authorization', function (handshakeData, callback) {
    callback(null, true);
  });
});

io.sockets.on('connection', function (socket) {
  
});