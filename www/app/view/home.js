define(function(require, exports, module){
  module.exports =
    require('app/view/menuPage').extend(
      {'jqmOpt'     :
          {'role'          : 'page'
          ,'dom-cache'     : 'true'
          ,'add-back-btn'  : 'false'
          }
      ,'insert'     :
          function(area) {
            this.$el.prependTo( area );
            return this;
          }
      }
    );
});