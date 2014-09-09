PersonalPageTerminal.Views.Contact = Backbone.View.extend({
  template: JST["content/contact"],

  tagName: "section",

  render: function(){
    var content = this.template;
    this.$el.html(content);
    return this;
  }

});