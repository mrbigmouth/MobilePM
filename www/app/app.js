//APP初始化
(function(root, undefined) {
  var MODULES =
      ['connect'
      ]
    ;

  //定義APP導出物件
  define(
    ['jquery'
    ,'underscore'
    ,'app/view/home'
    ,'app/collection/module'
    ]
  , function($, _, home, module){
      var APP = 
            //建立使用模組 空collection
            {'modules' : new module()
            //初始不建立連線
            ,'socket'  : null
            ,'start'   : $.noop()
            }
        //模組路徑分析
        , modulePath = 
            _.map(MODULES, function(v) {
              return 'module/' + v + '/' + v;
            })
        ;

      modulePath.unshift('mobile');
      APP.start = 
          function() {
            //載入mobile後初始化
            require(
              modulePath
            , function(mobile) {
                //載入模組完成後才建立首頁
                new home(
                  {'id'         : 'home'
                  ,'title'      : '主選單'
                  ,'collection' : APP.modules
                  }
                );
                mobile.navigate('#home');
              }
            );
          }

      return APP;
    }
  );

})(this)
