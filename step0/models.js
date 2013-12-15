var ChatMessage = Backbone.Model.extend({
  defaults: {
    author: 'Unknown',
    text: '',
    time: (new Date()).getTime()
  }
});

var ChatMessages = Backbone.Collection.extend({
    model: ChatMessage,
    comparator: function(model) {
      return model.get('time');
    }
});
