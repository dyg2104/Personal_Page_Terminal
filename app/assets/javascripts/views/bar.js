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
    console.log(entered.command.toString());
    if (entered.command === "cd bio") {
      var bioView = new PersonalPageTerminal.Views.Bio();
      $(document).find("#prepend-with-content").prepend(bioView.render().$el);
    } else if (entered.command === "cd resume") {
      var resumeView = new PersonalPageTerminal.Views.Resume();
      $(document).find("#prepend-with-content").prepend(resumeView.render().$el);
    } else if (entered.command === "cd projects") {
      var projectsView = new PersonalPageTerminal.Views.Projects();
      $(document).find("#prepend-with-content").prepend(projectsView.render().$el);
    } else if (entered.command === "cd contact") {
      var contactView = new PersonalPageTerminal.Views.Contact();
      $(document).find("#prepend-with-content").prepend(contactView.render().$el);
    }
    this.$el.find(".bar-input-form").trigger("reset");
  }
});