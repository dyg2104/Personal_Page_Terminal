PersonalPageTerminal.Views.Bar = Backbone.View.extend({
  template: JST["start/bar"],

  className: "bar-input",

  events: {
    "submit .bar-input-form" : "renderPage"
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  renderPage: function(event) {
    event.preventDefault();
    var entered = $(".bar-input-form").serializeJSON();

    if (entered.command === "cd Bio") {
      var bioView = new PersonalPageTerminal.Views.Bio();
      $(document).find("#prepend-with-content").append(bioView.render().$el);
    } else if (entered.command === "cd Resume") {
      var resumeView = new PersonalPageTerminal.Views.Resume();
      $(document).find("#prepend-with-content").append(resumeView.render().$el);
    } else if (entered.command === "cd Projects") {
      var projectsView = new PersonalPageTerminal.Views.Projects();
      $(document).find("#prepend-with-content").append(projectsView.render().$el);
    // } else if (entered.command === "cd Contact") {
//       var contactView = new PersonalPageTerminal.Views.Contact();
//       $(document).find("#prepend-with-content").append(contactView.render().$el);
    } else if (entered.command === "ls") {
      var listView = new PersonalPageTerminal.Views.List();
      $(document).find("#prepend-with-content").append(listView.render().$el);
    }

    this.$el.find(".bar-input-form").trigger("reset");
  }
});