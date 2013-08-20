var App = {
  models: {},
  collections: {},
  controllers: {},
  views: {},

  init: function() {
    new App.controllers.Nav();
    new App.views.Home();
    Backbone.history.start();
  }
};

Backbone.sync = function(method, model) {
  (new App.collections.Users()).fetch({ success: function(users) {
    users.add(model);
    localStorage.setItem("users", JSON.stringify(users));
  }});
}
