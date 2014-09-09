PersonalPageTerminal.Routers.PersonalPageRouter = Backbone.Router.extend({
  routes: {
    "" : "bar"
  },

  bar: function() {
    var barView = new PersonalPageTerminal.Views.Bar({});
    $(document).find('#replace-with-bar').replaceWith(barView.render().$el)
  }

});