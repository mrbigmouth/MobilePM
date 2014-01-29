//APP初始化
(function(root, undefined) {
  var MODULES =
      ['connect'
      ]
    ;
/*
APP = root.APP = 
      {'modules' : []
      }
    , 
 */

  //定義APP導出物件
  define(
    ['jquery'
    ,'underscore'
    ,'mobile'
    ,'app/view/home'
    ,'app/collection/module'
    ]
  , function($, _, mobile, home, module){
      var APP = {};
      APP.modules = new module();

      var requireModules = 
        _.map(MODULES, function(v) {
          return 'module/' + v + '/' + v;
        });

      //載入模組完成後才建立首頁
      require(
        requireModules
      , function() {
          new home(
            {'id'         : 'home'
            ,'title'      : '主選單'
            ,'collection' : APP.modules
            }
          );
          mobile.initializePage();
        }
      );

      APP.start = $.noop;

      return APP;
    }
  );

})(this)
