
requirejs.config(
  {'baseUrl' : ''
  ,'paths'   :
    {'jquery'     : 'lib/jquery-2.0.3.min'
    ,'underscore' : 'lib/underscore-min'
    ,'backbone'   : 'lib/backbone-min'
    ,'mobile'     : 'lib/jquery.mobile-1.4.0.min'
    ,'text'       : 'lib/requireText'
    ,'socketio'   : 'lib/socket.io'
    ,'module'     : 'module'
    ,'app'        : 'app'
    }
  ,'shim'    :
    {'jquery'     :
        {'exports' : '$'
        }
    ,'underscore' :
        {'exports' : '_'
        }
    ,'backbone'   :
        {'deps'    : ['underscore', 'jquery']
        ,'exports' : 'Backbone'
        }
    ,'mobile'     :
        {'deps'    : ['jquery']
        ,'exports' : '$.mobile'
        }
    ,'socketio'     :
        {'exports' : 'io'
        }
    }
  ,'urlArgs' : "t=" + Date.now()
  }
);

//jquery設定
require(
  ['jquery'
  ]
, function($) {
    $.support.cors = true;
    $(document).on('mobileinit', function() {
      //mobile設定
      $.extend(
        $.mobile
      , {'autoInitializePage'    : false
        ,'allowCrossDomainPages' : true
        /*
        ,'linkBindingEnabled'    : false
        ,'hashListeningEnabled'  : false
        */
        ,'pushStateEnabled'      : false
        ,'ns'                    : 'jqm-'
        }
      );
    });
  }
);

//app啟動
require(
  ['app/app'
  ,'mobile'
  ]
, function(app, mobile) {

    app.start();
  }
);