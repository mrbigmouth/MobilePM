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
    var connect = {};
    //建立connect頁面
    connect.view =
      new view(
        {'id'       : MODULE.id
        ,'title'    : MODULE.name
        }
      ).$el;

    app.modules.add(MODULE);

    return connect;
  }
);

})(this);