
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
  .use(
    connect.cookieSession(
      {'secret' : config.secret
      ,'cookie' :
          {'maxAge'   : null
          ,'path'     : '/'
          ,'httpOnly' : false
          }
      }
    )
  )
  .use(function(req, res){
    res.end('hello world\n');
  })

server = http.createServer(app).listen( config.port );

io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
  
});