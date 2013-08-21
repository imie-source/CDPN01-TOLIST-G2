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
<<<<<<< HEAD
  	console.log("Contactttt");
  	console.log(id);
	
	$('input[name=firstName]').val() = $('table').rows[id].cells[0];
	$('input[name=lastName]').val() = $('table').rows[id].cells[1];
	$('input[name=phoneNumber]').val() = $('table').rows[id].cells[2];
	$('input[name=birthday]').val() = $('table').rows[id].cells[3];
	form.style.visibility = "visible";	
  },

  newContact: function() {
  	console.log("helloooo");
	new App.views.Form();
	document.getElementById("userForm").style.visibility = "visible";
=======
    App.changePage("form");
  },

  newContact: function() {
    App.changePage("form");
>>>>>>> 77bd1517b28722ff9bc55f94ccb459eacdfb4888
  }
});
