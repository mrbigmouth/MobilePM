define(
  ['app/view/page'
  ,'app/view/dynamicMenu'
  ]
, function(page, dynamicMenu){
  return page.extend(
    {'after2'     :
        function(args) {
          new dynamicMenu(
            {'collection' : args.collection
            ,'$area'      : this.$el
            }
          )
        }
    }
  );
});

