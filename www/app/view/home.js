define(
  ['app/view/menuPage'
  ]
, function(mobile, menuPage){
  var app = {};

  app.start = $.noop;

  //建立首頁
  new menuPage(
        {'id'         : 'home'
        ,'title'      : '主選單'
        ,'collection' : APP.data.modules
        }
      )
  return app;
});