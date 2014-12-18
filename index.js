var Context = require('kinda-context');

var KoaController = Context.extend('KoaController', function() {
  this.setCreator(function(koaContext) {
    this.koaContext = koaContext;
  });

  Object.defineProperty(this, 'req', {
    get: function() { return this.koaContext.req; }
  });

  Object.defineProperty(this, 'res', {
    get: function() { return this.koaContext.res; }
  });

  Object.defineProperty(this, 'request', {
    get: function() { return this.koaContext.request; }
  });

  Object.defineProperty(this, 'response', {
    get: function() { return this.koaContext.response; }
  });

  this.throw = function() {
    this.koaContext.throw.apply(this.koaContext, arguments);
  };

  Object.defineProperty(this, 'query', {
    get: function() { return this.koaContext.query; },
    set: function(val) { this.koaContext.query = val; }
  });

  this.get = function() {
    return this.koaContext.get.apply(this.koaContext, arguments);
  };

  Object.defineProperty(this, 'status', {
    get: function() { return this.koaContext.status; },
    set: function(val) { this.koaContext.status = val; }
  });

  Object.defineProperty(this, 'body', {
    get: function() { return this.koaContext.body; },
    set: function(val) { this.koaContext.body = val; }
  });

  Object.defineProperty(this, 'params', { // koa-router property
    get: function() { return this.koaContext.params; }
  });
});

module.exports = KoaController;
