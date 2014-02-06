define(function(require, exports, module){
  var _      = require('underscore')
    , $      = require('jquery')
    , mobile = require('mobile')
    ;

  module.exports =
    require('backbone').View.extend(
      {'jqmOpt'     : {}
      ,'html'       : '<div></div>'
      ,'template'   : undefined
      ,'initialize' :
          function(args) {
            var _this   = this
              , i
              , fn
              , $el
              ;

            //設定collection與model
            _this.collection = args.collection;
            _this.model = args.model;

            //循序執行可繼承的初始化dom之前的method
            for (i = 1; ( typeof (fn = _this['before' + i]) ) === 'function'; i += 1) {
              fn.call(_this, args);
            }

            //製出dom
            //依參數覆蓋原設定 
            _this.template = args.template || _this.template;
            if (typeof _this.template !== 'function') {
              //若為template，則依參數製出dom
              _this.template =
                  function() {
                    return (args.html || this.html).replace(/JQM-/g, 'data-' + mobile.ns).trim();
                  }
            };

            _this.el = $.parseHTML( _this.template.call(_this, args) );
            _this.$el = ( $el = $( _this.el ) );

            //設置jqm屬性
            _.each(_this.jqmOpt, function(v, k) {
              $el.attr('data-' + mobile.ns + k, v);
            });

            //設置id
            if (args && args.id && $('#' + args.id).length < 1) {
              $el.attr('id', args.id);
            }

            //製成並插入頁面
            _this.render(args).insert( args.$area || 'body' );
          }
      //插入頁面的方法
      ,'insert'     :
          function(area) {
            this.$el.appendTo( area );
            return this;
          }
      ,'render'     :
          function(args) {
            var _this = this
              , fn
              , i
              ;

            _this.$el
              .html( $($.parseHTML( _this.template.call(_this, args) )).children() );

            //循序執行可繼承的初始化dom之後的method
            for (i = 1; ( typeof (fn = _this['after' + i]) ) === 'function'; i += 1) {
              fn.call(_this, args);
            }

            return this;
          }
      }
    );
});