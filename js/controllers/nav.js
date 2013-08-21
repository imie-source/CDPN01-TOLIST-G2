App.controllers.Nav = Backbone.Router.extend({
  routes: {
    "contact/new" : "newContact",
    "contact/:id" : "editContact",
    "*path" : "index"
  },

  index: function() {
    new App.views.Home();
    App.changePage("home");
  },

  showContact: function(id){
    App.changePage("form");
  },

  newContact: function() {
    App.changePage("form");
  }
});
