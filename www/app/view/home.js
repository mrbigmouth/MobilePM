define(function(require, exports, module){
  module.exports =
    require('app/view/menuPage').extend(
      {'insert'     :
          function(area) {
            this.$el.prependTo( area );
            return this;
          }
      }
    );
});