var ChatMessagesView = Backbone.View.extend({

  tagName: 'div',

  className: 'chat-message',

  render: function() {
    // Compile the template
    var template = Handlebars.compile($("#chat-messages-template").html());
    // Render the template with the current collection data
    var rendered = template({messages: this.collection.toJSON()});
    // Append the rendered HTML to the current view's element
    this.$el.append(rendered);
    
    return this;
  }
});

