define(function (require, exports, module) {
  var $       = require('jquery')
    , _       = require('underscore')
    , MODULES =
      ['connect'
      ]
    , needLoadList
    ;

  //建立使用模組 空collection
  exports.modules = new (require('app/collection/module'))();
  //初始連線為空
  exports.socket = null;

  //計算程式須載入的模組路徑
  needLoadList = 
    _.map(MODULES, function(v) {
      return 'module/' + v + '/' + v;
    });

  //需載入列表最前方加上jquery Mobile
  needLoadList.unshift('mobile');

  //程式開始method
  exports.start =
    function() {
      require(
        needLoadList
      , function(mobile) {
          //建立首頁
          new (require('app/view/home'))(
            {'id'         : 'home'
            ,'title'      : '主選單'
            ,'collection' : exports.modules
            }
          );
          mobile.initializePage();
        }
      );
    }

});
