define(
  ['backbone'
  ,'app/model/module'
  ]
, function(BB, module){
  return BB.Collection.extend(
    {'model' : module
    }
  );
});