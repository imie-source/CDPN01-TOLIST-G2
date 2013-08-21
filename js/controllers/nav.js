App.controllers.Nav = Backbone.Router.extend({
  routes: {
  	"contact/new" : "newContact",
  	"contact/:id" : "editContact"
  },

  showContact: function(id){
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
  }
});
