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
		"click #submitContact" : "submitContact" 
	},

	submitContact : function(){
		window.location.hash = "";
	}
});