var ChatMessagesView = Backbone.View.extend({

  tagName: 'div',

  className: 'chat-message',

  render: function() {
    // Compile the template
    var template = Handlebars.compile($("#chat-messages-template").html());
    // Render the template with the current collection data
    var rendered = template({messages: this.collection.toJSON()});
       
    // Append the rendered HTML to the current view's element
    // this.$el.empty();
    this.$el.empty().append(rendered);
    
    return this;
  }, 
  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  }
});

var ChatFormView = Backbone.View.extend({

  tagName: 'form',

  className: 'chat-form',

  render: function() {
    // Compile the template
    var template = Handlebars.compile($("#chat-form-template").html());
    // Render the template with the current collection data
    var rendered = template();
    // Append the rendered HTML to the current view's element
    this.$el.append(rendered);
    
    return this;
  },

  events: {
   'click button': 'addNewMessage'
  },
  addNewMessage: function(e) {
    // prevent page from refreshing when form is submitted
    e.preventDefault();
    var text = this.$('input').val();
    if (text) {
      this.collection.add({ text: text});
      this.$('input').val('');
    }
  }
});

