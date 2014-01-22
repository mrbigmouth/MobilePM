//連線到伺服器 模組
(function(root) {
var $       = root.jQuery
  , _       = root._
  , APP     = root.APP
  , undefined
  ;

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

}(this));