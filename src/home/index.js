const page = require('page'),
      empty = require('empty-element');

page('/', (ctx, next)=>{
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
});
