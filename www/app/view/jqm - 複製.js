define(
  ['jquery'
  ,'underscore'
  ,'backbone'
  ,'mobile'
  ]
, function($, _, BB, mobile){
    return BB.View.extend(
      {'jqmOpt'     : {}
      ,'html'       : '<div></div>'
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
            //依參數覆蓋原設定 
            this.template = args.template || this.template;
            /*
            if (typeof _this.template === 'function') {
              //若為template，則依參數製出dom
              $dom = $( $.parseHTML( _this.template.call(_this, args) ) );
            }
            else {
              //否則視為靜態
              //依參數覆蓋原設定 
              this.html = (args.html || this.html).replace(/JQM-/g, 'data-' + mobile.ns);
              $dom = $( $.parseHTML( _this.html ) );
            }
            */

            //製出dom並設定$el與el
            _this.$el = $dom;
            _this.el = $dom[0];

            //設置jqm屬性
            _.each(_this.jqmOpt, function(v, k) {
              $dom.attr('data-' + mobile.ns + k, v);
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