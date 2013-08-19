App.controllers.Nav = Backbone.Router.extend({
  routes: {
  	"contact/new" : "newContact",
  	"contact/:id" : "editContact"
  },

  showContact: function(id){
  	console.log("Contactttt");
  	console.log(id);
  },

  newContact: function() {
  	console.log("helloooo");
  }
});
