define(
  ['app/view/page'
  ,'text!module/connect/connect.tpl'
  ]
, function(page, template){
    return page.extend(
      {'html'   : template
      ,'events' :
        {'submit form' :
            function() {
              var form     = this.el
                , address  = form.address.value
                , account  = form.account.value
                , password = form.password.value
                ;
              require(
                ['socketio'
                ,'app/app'
                ]
              , function(io, app) {
                  //app.socket = 
                }
              );
            }
        }
      }
    );
  }
);