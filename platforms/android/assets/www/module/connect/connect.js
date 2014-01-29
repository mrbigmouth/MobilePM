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
, function(app, page) {
    var connect = {};
    //建立connect頁面
    new page(
      {'id'       : MODULE.id
      ,'title'    : MODULE.name
      }
    );

    app.modules.add(MODULE);

    return connect;
  }
);

})(this);