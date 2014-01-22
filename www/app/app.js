define(
  ['jquery'
  ,'app/view/home'
  ]
, function(home){
    var app = {};

    //建立首頁
    new home(
      {'id'         : 'home'
      ,'title'      : '主選單'
      ,'collection' : APP.data.modules
      }
    );

    app.start = $.noop;
    return app;
  }
);