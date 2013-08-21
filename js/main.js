var App = {
  models: {},
  collections: {},
  controllers: {},
  views: {},

  init: function() {
    new App.controllers.Nav();
    Backbone.history.start();
  },

  changePage: function(view) {
    $(".container").hide();
    $(".container." + view).show();
  }
};

Backbone.sync = function(method, model) {
  (new App.collections.Users()).fetch({ success: function(users) {
    users.add(model);
    localStorage.setItem("users", JSON.stringify(users));
  }});
}
