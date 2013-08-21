var App = {
  models: {},
  collections: {},
  controllers: {},
  views: {},

  init: function() {
    new App.controllers.Nav();
<<<<<<< HEAD
    new App.views.Home();
    Backbone.history.start();	
	document.getElementById("userForm").style.visibility = "hidden";
=======
    Backbone.history.start();
>>>>>>> 77bd1517b28722ff9bc55f94ccb459eacdfb4888
  },

  changePage: function(view) {
    $(".container").hide();
    $(".container." + view).show();
  }
};

<<<<<<< HEAD

=======
Backbone.sync = function(method, model) {
  (new App.collections.Users()).fetch({ success: function(users) {
    users.add(model);
    localStorage.setItem("users", JSON.stringify(users));
  }});
}
>>>>>>> 77bd1517b28722ff9bc55f94ccb459eacdfb4888
