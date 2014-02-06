//連線到伺服器 模組
(function(root, undefined) {

var APP    = root.APP
  , MODULE =
      {'id'         : 'connect'
      ,'name'       : '連線到伺服器'
      ,'action'     : 'link'
      ,'sort'       : 5
      }
  ;

define(
  ['app/app'
  ,'module/connect/connectView'
  ]
, function(app, view) {
    var connect = {}
      , $view
      ;
    //加入首頁列表
    app.modules.add(MODULE);
    //建立connect頁面
    connect.$view = $view =
      new view(
        {'id'       : MODULE.id
        ,'title'    : MODULE.name
        }
      ).$el;

    //連線
    $view.on('submit', 'form', function() {
      var form     = this
        , address  = form.address.value
        , account  = form.account.value
        , password = form.password.value
        ;
      require(
        ['socketio'
        ,'app/app'
        ,'cookie'
        ,'mobile'
        ]
      , function(io, app, cookie, mobile) {
          cookie('account', account, {'path':'/'});
          cookie('password', password, {'path':'/'});
          app.socket = io.connect( address );
          app.modules.remove(MODULE.id);
          mobile.changePage('#home');
        }
      );
    });

    return connect;
  }
);

})(this);