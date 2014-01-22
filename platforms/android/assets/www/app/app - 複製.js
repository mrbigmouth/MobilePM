define(
  ['jquery'
  ,'underscore'
  ,'backbone'
  ]
, function($, _, Backbone){
  var app

  
  return app;
});

(function(root) {
var $       = root.jQuery
  , _       = root._
  , APP     = root.APP
  //模組列表資料
  , modules =
      ['connect'
      ,'setting'
      ]
  , undefined
  ;

//建立首頁視圖
APP.view.home =
  APP.view.menuPage.extend(
    {'render'     :
        function() {
          $('body').prepend( this.$el );
        }
    }
  )

//載入模組
APP.data.modules = new APP.collection.module();
_.each(modules, function(moduleName) {
  $.getScript();
});


  (
    {'id'         : 'home'
    ,'title'      : '主選單'
    ,'collection' : APP.data.modules
    }
  );

//連線選單模組
(function(APP, modules, $, _) {
  //模組基本設定
  var module   =
        {'id'         : 'connect'
        ,'name'       : '連線到伺服器'
        ,'action'     : 'link'
        ,'sort'       : 5
        }
    , source   = $('#template_connect').html().trim()
    ;

  //建立連線到伺服器視圖並實例化
  APP.area[ module.id ] =
    new (APP.view.page.extend(
      {'source' : source
      }
    ))(
      {'id'     : module.id
      ,'title'  : module.name
      }
    );

  modules.add(module);
})(APP, APP.data.modules, $, _);

//使用者設定模組
(function(APP, modules, $, _) {
  //模組基本設定
  var module   =
        {'id'         : 'setting'
        ,'name'       : '使用者設定'
        ,'action'     : 'link'
        ,'sort'       : 200
        }
    , source   = '<div></div>'
    ;

  //建立連線到伺服器視圖並實例化
  APP.area[ module.id ] =
    new (APP.view.page.extend(
      {'source' : source
      }
    ))(
      {'id'     : module.id
      ,'title'  : module.name
      }
    );

  modules.add(module);
})(APP, APP.data.modules, $, _);

/*
//結束程式
(function(APP, modules, navigator) {
  //模組基本設定
  var module   =
        {'id'         : 'quit'
        ,'name'       : '結束程式'
        ,'action'     :
            function() {
            }
        ,'sort'       : 255
        }
    ;

  modules.add(module);
})(APP, APP.data.modules, root.navigator);
*/

//排序
modules.sortBy(function(d) { return d.sort; });

APP.start =
  function() {
    //建立首頁視圖並實例化
    APP.area.home =
      new (APP.view.menuPage.extend(
        {'render'     :
            function() {
              $('body').prepend( this.$el );
            }
        }
      ))(
        {'id'         : 'home'
        ,'title'      : '主選單'
        ,'collection' : APP.data.modules
        }
      );

    //jquery mobile initialzie
    $.mobile.initializePage();
  }

}(this));