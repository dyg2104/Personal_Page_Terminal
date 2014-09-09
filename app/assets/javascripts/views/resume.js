PersonalPageTerminal.Views.Resume = Backbone.View.extend({
  template: JST["content/resume"],

  tagName: "section",

  render: function(){
    var content = this.template;
    this.$el.html(content);
    return this;
  }

});