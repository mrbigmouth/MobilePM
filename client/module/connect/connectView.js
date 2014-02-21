define(function(require, exports, module){
  return require('app/view/page').extend(
    {'html'   : require('text!module/connect/connect.tpl')
    }
  );
});