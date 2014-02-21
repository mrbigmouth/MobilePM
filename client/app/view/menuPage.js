define(function(require, exports, module){
  return require('app/view/page').extend(
    {'after2'     :
        function(args) {
          new (require('app/view/dynamicMenu'))(
            {'collection' : args.collection
            ,'$area'      : this.$el
            }
          )
        }
    }
  );
});

