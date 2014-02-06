define(function(require, exports, module){
  var $       = require('jquery')
    , mobile  = require('mobile')
    ;

  module.exports =
    require('app/view/jqm').extend(
      {'jqmOpt'     :
          {'role'          : 'listview'
          }
      ,'template'   : _.template( require('text!app/view/dynamicMenu.tpl').trim() )
      ,'before1'    :
          function(args) {
            var _this = this;
            _this.jqmOpt = _.extend(_this.jqmOpt, args.jqmOpt);
            _this.collection = args.collection;
            _this.listenTo(args.collection, 'add remove reset sort change', function() {
              _this.render(args);
              /*
              if (mobile.activePage.attr('id') === 'home') {
                _this.$el.listview('refresh');
              }
              */
            });
          }
      ,'events'     :
          {'click a':
              function(e) {
                var $this  = $(e.currentTarget)
                  , id     = $this.attr('data-id')
                  , module = this.collection.get( id )
                  , action = module.get('action')
                  ;
                if (action === 'link') {
                  mobile.changePage( module.get('link') );
                }
                else if (typeof action === 'function') {
                  action.call( e.currentTarget );
                }
                return true;
              }
          }
      }
    );
});

