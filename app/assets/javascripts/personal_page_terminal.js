window.PersonalPageTerminal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    new PersonalPageTerminal.Routers.PersonalPageRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  PersonalPageTerminal.initialize();
});