(function(root) {
var $     = root.jQuery
  , APP   = root.APP
  , undefined
  ;

//首頁
APP.area.home =
  new APP.view.menuPage(
    {'id'         : 'home'
    ,'collection' :
        new APP.collection.module(
          [ {'id'     : 'connect'
            ,'name'   : '連線'
            ,'sort'   : 5
            }
           ,{'id'     : 'sysSetting'
            ,'name'   : '系統設定'
            ,'sort'   : 100
            }
           ,{'id'     : 'quit'
            ,'name'   : '離開程式'
            ,'sort'   : 255
            }
          ]
        )
    }
  );

/*
//連線
APP.area.connect =
  new (APP.view.dialog.extend(
      {'source'     : $('#template_connect').html().trim()
      }
  ))(
    {'id'     : 'connect'
    }
  );
*/

$.mobile.initializePage();

}(this));