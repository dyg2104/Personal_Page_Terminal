window.PersonalPageTerminal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');

    var barView = new PersonalPageTerminal.Views.Bar({});
    $(document).find('#replace-with-bar').replaceWith(barView.render().$el);
		
    var router = new PersonalPageTerminal.Routers.PersonalPageRouter();
		if (!Backbone.History.started) {
			Backbone.history.start();
		}
  }
};