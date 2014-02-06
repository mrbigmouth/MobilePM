define(function(require, exports, module) {
  var _ = require('underscore');

  module.exports =
    require('app/view/jqm').extend(
      {'jqmOpt'     :
          {'role'          : 'header'
          ,'add-back-btn'  : 'true'
          }
      ,'template'   : _.template('<header><h4><%= title %></h4></header>')
      ,'before1'    :
          function(args) {
            this.jqmOpt = _.extend(this.jqmOpt, args.jqmOpt);
          }
      //插入指定區域開頭
      ,'insert'     :
          function(area) {
            this.$el.prependTo( area );
            return this;
          }
      }
    )
});