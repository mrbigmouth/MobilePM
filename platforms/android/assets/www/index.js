
requirejs.config(
  {'baseUrl' : ''
  ,'paths'   :
    {'jquery'     : 'lib/jquery-2.0.3.min'
    ,'underscore' : 'lib/underscore-min'
    ,'backbone'   : 'lib/backbone-min'
    ,'mobile'     : 'lib/jquery.mobile-1.4.0.min'
    ,'text'       : 'lib/requireText'
    ,'modules'    : 'modules'
    ,'app'        : 'app'
    }
  ,'shim'    :
    {'jquery'  :
        {'exports' : '$'
        }
    ,'jquery'  :
        {'exports' : '$'
        }
    }
  }
);


require(
  ['text!app/wtc.text'
  ]
, function(app) {
    alert(app);
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