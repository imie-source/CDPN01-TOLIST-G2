App.views.Home = Backbone.View.extend({
	
	el : '.home',

	events: {
		"click #addContact" : "addContact" 
	},

	addContact : function(){
		window.location.hash = "contact/new";
	}
});

App.views.Form = Backbone.View.extend({
	
	el : '.form',

	events: {
		"click #submitForm" : "submitForm" 
	},

	submitForm : function(){
		window.location.hash = "contact/new";
	}
});