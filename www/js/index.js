(function(root) {
var JQMNS = 'data-jqm-'
  , $     = root.jQuery
  , _     = root._
  , BB    = root.Backbone
  , APP   = root.APP = 
    //儲存Backbone視圖
    {'view' : {}
    //儲存Backbone的視圖實體化dom元素
    ,'area' : {}
    }

//基本jqm視圖
APP.view.jqm = 
  BB.View.extend(
    {'tagName'    : 'div'
    ,'jqmOpt'     : {}
    ,'initFN'     : []
    ,'source'     : '<div></div>'
    ,'initialize' :
      function() {
        var _this   = this
          , $source = $( $.parseHTML( _.result(_this, 'source') ) )
          , args    = _.toArray(arguments)
          , i
          , fn
          ;
        //設置jqm屬性
        _.each(_this.jqmOpt, function(v, k) {
          $source.attr(JQMNS + k, v);
        });

        //初始化自身el與$el
        _this.el = $source.get(0);
        _this.$el = $source;

        //循序執行可繼承的初始化method
        for (i = 1; ( typeof (fn = _this['init' + i]) ) === 'function'; i += 1) {
          fn.apply(_this, args);
        }

        //插入頁面
        _this.render();
      }
    ,'render'     :
      function() {
        $('body').append( this.$el.enhanceWithin() );
      }
    }
  );


//置頂頁首
APP.view.topHead =
  APP.view.jqm.extend(
    {'jqmOpt'     :
      {'role'          : 'header'
      ,'position'      : 'fixed'
      }
    ,'source'     : $('#template_topHead').html()
    //不要插入頁面
    ,'render'     : $.noop
    }
  )
APP.area.topHead = new APP.view.topHead();

//一般頁面
APP.view.page =
  APP.view.jqm.extend(
    {'jqmOpt'     :
      {'role'          : 'page'
      ,'domCache'      : 'true'
      }
    ,'header'     : APP.area.topHead
    ,'init1'      :
      function(data) {
        this.el.id = data.id;
        if (this.header) {
          this.$el.prepend(this.header.$el.clone(true));
        }
      }
    }
  )

APP.area.home =
  new APP.view.page(
    {'id'     : 'home'
    }
  );

$.mobile.changePage('#home');

}(this));