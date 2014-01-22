define(
  ['jquery'
  ,'underscore'
  ,'backbone'
  ]
, function($, _, BB){
    return BB.View.extend(
      {'tagName'    : 'div'
      ,'jqmOpt'     : {}
      ,'source'     : '<div></div>'
      ,'template'   : undefined
      ,'initialize' :
          function(args) {
            var _this   = this
              , i
              , fn
              , $dom
              ;
            //循序執行可繼承的初始化dom之前的method
            for (i = 1; ( typeof (fn = _this['before' + i]) ) === 'function'; i += 1) {
              fn.call(_this, args);
            }

            //製出dom
            if (typeof _this.template !== 'function') {
              $dom = $( $.parseHTML( _this.source ) );
            }
            else {
              $dom = $( $.parseHTML( _this.template.call(_this, args) ) );
            }

            //製出dom並設定$el與el
            _this.$el = $dom;
            _this.el = $dom[0];

            //設置jqm屬性
            _.each(_this.jqmOpt, function(v, k) {
              $dom.attr(JQMNS + k, v);
            });

            //設置id
            if (args && args.id && $('#' + args.id).length < 1) {
              this.$el.attr('id', args.id);
            }

            //循序執行可繼承的初始化dom之後的method
            for (i = 1; ( typeof (fn = _this['after' + i]) ) === 'function'; i += 1) {
              fn.call(_this, args);
            }

            //插入頁面
            _this.render.call(_this, args);
          }
      ,'render'     :
          function() {
            $('body').append( this.$el );
          }
      }
    );
  }
);