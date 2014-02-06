define(function(require, exports, module){
  module.exports =
    require('backbone').Collection.extend(
      {'model' : require('app/model/module')
      }
    );
});