PersonalPageTerminal.Views.Bio = Backbone.View.extend({
  template: JST["content/bio"],

  tagName: "section",

  render: function(){
    var content = this.template;
    this.$el.html(content);
    return this;
  }

});