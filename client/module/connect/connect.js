//連線到伺服器 模組
define(function(require, exports, module) {
    var app       = require('app/app')
      , connect   = (module.exports = {})
      , menuData  =
          {'id'         : 'connect'
          ,'name'       : '連線到伺服器'
          ,'action'     : 'link'
          ,'sort'       : 5
          }
      , $view
      ;
    //離線時要加入首頁列表
    app.on('disconnect', function() {
      app.home.collection.add(menuData);
    });
    //連上線時要移除首頁列表
    app.on('connect', function() {
      app.home.collection.remove('connect');
    });

    //連線form頁面
    connect.$view = $view =
      new (require('module/connect/connectView'))(
        {'id'       : menuData.id
        ,'title'    : menuData.name
        }
      ).$el;

    //連線事件
    $view.on('submit', 'form', function() {
      var form     = this
        , address  = form.address.value
        , account  = form.account.value
        , password = form.password.value
        ;
      require(
        ['socketio'
        ,'cookie'
        ,'mobile'
        ]
      , function(io, cookie, mobile) {
          cookie('account', account, {'path':'/'});
          cookie('password', password, {'path':'/'});
          app.socket = io.connect( address );
          app.trigger('connected');
        }
      );
    });

});