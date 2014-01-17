(function(root) {
var $     = root.jQuery
  , _     = root._
  , BB    = root.Backbone
  , JQMNS = 'data-' + $.mobile.ns
  , APP   = (
        root.APP = 
          //儲存Backbone的Collection實體
          {'collection' : {}
          //儲存Backbone的Model實體
          ,'model'      : {}
          //儲存APP的所有功能模組
          ,'module'     : {}
          //儲存Backbone視圖
          ,'view'       : {}
          //儲存Backbone的視圖實體化dom元素
          ,'area'       : {}
          }
      )
  , undefined
  ;


//Backbone Modal
//模組資料基本型態
APP.model.module =
    BB.Model.extend(
      {'defaults'   :
          {'name'     : 'module name'
          ,'sort'     : 10
          }
      ,'initialize' :
          function() {
            //初始時將prompt設為name
            this.set('prompt', this.get('name'));
            if (! this.get('link')) {
              this.set('link', '#' + this.id);
            }
          }
      }
    )

//Backbone Collection
//模組集群
APP.collection.module =
    BB.Collection.extend(
      {'model' : APP.model.module
      }
    )

//基本jqm視圖
APP.view.jqm = 
    BB.View.extend(
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

//頁首
APP.view.header =
    APP.view.jqm.extend(
      {'jqmOpt'     :
          {'role'          : 'header'
          }
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

/*
  項目選單
  @jqmOpt
  @collection
  @area
 */
APP.view.dynamicMenu =
    APP.view.jqm.extend(
      {'jqmOpt'     :
          {'role'          : 'listview'
          }
      ,'template'   : _.template( $('#template_dynamicMenu').html().trim() )
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
      }
    )

//一般頁面
APP.view.page =
    APP.view.jqm.extend(
      {'jqmOpt'     :
          {'role'          : 'page'
          ,'domCache'      : 'true'
          }
      ,'before1'    :
          function(args) {
            this.jqmOpt = _.extend(this.jqmOpt, args.jqmOpt);
            this.collection = args.collection;
          }
      }
    )

//選單式頁面
/*
  項目選單
  @jqmOpt
  @collection
 */
APP.view.menuPage =
    APP.view.page.extend(
      {'after1'     :
          function(args) {
            new APP.view.dynamicMenu(
              {'collection' : args.collection
              ,'$area'      : this.$el
              }
            )
          }
      }
    )

//dialog視圖
APP.view.dialog =
    APP.view.jqm.extend(
      {'jqmOpt'     :
        {'role'          : 'page'
        ,'domCache'      : 'true'
        ,'dialog'        : 'true'
        ,'closeBtn'      : 'right'
        }
      //創建dialog header
      ,'after1'     :
          function() {
            var $header = this.$header = 
              new APP.view.header(
                {'jqmOpt' :
                    {'position' : 'fixed'
                    ,'theme'    : 'b'
                    }
                ,'$area'  : this.$el
                }
              )
          }
      }
    )

}(this));