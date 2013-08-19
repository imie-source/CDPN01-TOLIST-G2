var App = {
  models: {},
  controllers: {},
  views: {},

  init: function() {
    new App.controllers.Nav();
    new App.views.Home();
    Backbone.history.start();
  }
};