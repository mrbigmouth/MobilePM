define(function(require, exports, module) {
  module.exports =
    require('backbone').Model.extend(
      {'defaults'   :
          {'name'     : 'module name'
          ,'action'   : 'link'
          ,'sort'     : 10
          }
      ,'initialize' :
          function() {
            //初始時將prompt設為name
            this.set('prompt', this.get('name'));
            if (this.get('action') === 'link' && ! this.get('link')) {
              this.set('link', '#' + this.id);
            }
          }
      }
    )
});