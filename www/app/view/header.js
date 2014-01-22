define(
  ['underscore'
  ,'app/view/jqm'
  ]
, function(_, jqm) {
    return jqm.extend(
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
      ,'render'     :
          function(args) {
            args.$area.prepend( this.$el );
          }
      }
    )
  }
);