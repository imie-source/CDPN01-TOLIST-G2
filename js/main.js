var App = {
  models: {},
  controllers: {},
  views: {},

  init: function() {
    new App.controllers.Nav();
    Backbone.history.start();
  }
};

