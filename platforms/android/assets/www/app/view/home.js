define(
  ['app/view/menuPage'
  ]
, function(menuPage){
  return menuPage.extend(
    {'render'     :
        function() {
          $('body').prepend( this.$el );
        }
    }
  );
});