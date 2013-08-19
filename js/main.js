var App = {
  models: {},
  collections: {},
  controllers: {},
  views: {},

  init: function() {
    new App.controllers.Nav();
    Backbone.history.start();
  }
};

