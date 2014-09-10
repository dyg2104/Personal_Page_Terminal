PersonalPageTerminal.Views.List = Backbone.View.extend({
  template: JST["directory/list"],

  tagName: "section",

  render: function(){
    var content = this.template;
    this.$el.html(content);
    return this;
  }

});