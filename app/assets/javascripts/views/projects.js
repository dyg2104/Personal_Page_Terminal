PersonalPageTerminal.Views.Projects = Backbone.View.extend({
  template: JST["content/projects"],

  tagName: "section",

  render: function(){
    var content = this.template;
    this.$el.html(content);
    return this;
  }

});