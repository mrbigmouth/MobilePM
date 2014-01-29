define(
  ['underscore'
  ,'app/view/jqm'
  ,'app/view/header'
  ]
, function(_, jqm, header){
    return jqm.extend(
      {'jqmOpt'     :
          {'role'          : 'page'
          ,'dom-cache'     : 'true'
          ,'add-back-btn'  : 'true'
          }
      ,'before1'    :
          function(args) {
            this.jqmOpt = _.extend(this.jqmOpt, args.jqmOpt);
            this.jqmOpt.title = args.title;
            this.collection = args.collection;
          }
      //創建header
      ,'after1'     :
          function(args) {
            var $header = this.$header = 
              new header(
                {'$area'  : this.$el
                ,'title'  : args.title
                }
              )
          }
      }
    );
  }
);

