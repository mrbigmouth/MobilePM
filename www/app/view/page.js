define(function(require, exports, module) {
  var _ = require('underscore');

  module.exports =
    require('app/view/jqm').extend(
      {'jqmOpt'     :
          {'role'          : 'page'
          ,'dom-cache'     : 'true'
          ,'add-back-btn'  : 'true'
          }
      ,'before1'    :
          function(args) {
            this.jqmOpt = _.extend(this.jqmOpt, args.jqmOpt);
            this.jqmOpt.title = args.title;
          }
      //創建header
      ,'after1'     :
          function(args) {
            var $header = this.$header = 
              new (require('app/view/header'))(
                {'$area'  : this.$el
                ,'title'  : args.title
                }
              )
          }
      }
    );
});

