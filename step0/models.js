$(document).ready(function() {
  
});

var ChatMessage = Backbone.Model.extend({
  defaults: {
    author: 'Unknown',
    text: '',
    time: (new Date()).getTime()
  },
  initialize: function() {
    this.getPurified();
  },
  getPurified: function() {
    if (/shit/.test(this.get('text'))) {
      var pure = this.get('text').replace(/shit/, '****')
      this.set('text', pure);  
      return pure;
    } else {
      return this.get('text');
    }
  }
});

var ChatMessages = Backbone.Collection.extend({
    model: ChatMessage,
    comparator: function(model) {
      return model.get('time');
    },
    url: 'http://backchat-backend.appspot.com/messages'
});
