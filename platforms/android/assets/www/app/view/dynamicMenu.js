define(
  ['jquery'
  ,'mobile'
  ,'app/view/jqm'
  ,'text!app/view/dynamicMenu.tpl'
  ]
, function($, mobile, jqm, template){
  return jqm.extend(
    {'jqmOpt'     :
        {'role'          : 'listview'
        }
    ,'template'   : _.template( template.trim() )
    ,'before1'    :
        function(args) {
          this.jqmOpt = _.extend(this.jqmOpt, args.jqmOpt);
          this.collection = args.collection;
        }
    //插入指定區域
    ,'render'     :
        function(args) {
          args.$area.append( this.$el );
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
                mobile.navigate( module.get('link') );
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

