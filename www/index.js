
requirejs.config(
  {'baseUrl' : ''
  ,'paths'   :
    {'jquery'     : 'lib/jquery-2.0.3.min'
    ,'underscore' : 'lib/underscore-min'
    ,'backbone'   : 'lib/backbone-min'
    ,'mobile'     : 'lib/jquery.mobile-1.4.0.min'
    ,'text'       : 'lib/requireText'
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
    }
  }
);


require(
  ['app/app'
  ,'mobile'
  ]
, function(app) {
    app.start();
    mobile.initializePage();
  }
);
/*
require(
  ['app/app'
  ,'jquery'
  ,'mobile'
  ]
, function(App){
    App.initialize();
    $.mobile.initializePage();
  }
);
*/