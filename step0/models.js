var ChatMessage = Backbone.Model.extend({
  defaults: {
    author: 'Unknown',
    text: '',
    time: (new Date()).getTime()
  }
});