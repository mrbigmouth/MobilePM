
define(
  ['app/view/page'
  ,'text!module/connect/connect.tpl'
  ]
, function(page, template){
    return page.extend(
      {'html'   : template
      }
    );
  }
);