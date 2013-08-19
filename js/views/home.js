App.views.Home = Backbone.View.extend({
	
	el : '.home',

	events: {
		"click #addContact" : "addContact" 
	},

	addContact : function(){
		window.location.hash = "contact/new";
	}
});