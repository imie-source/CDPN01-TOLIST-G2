App.models.User = Backbone.Model.extend({

});

App.collections.Users = Backbone.Collection.extend({
  model: App.models.User,
  fetch: function(options) {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users = _.map(users, function(u) {
      return new App.models.User(u);
    });
    options.success(new App.collections.Users(users));
  }
});
