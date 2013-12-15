$(document).ready(function() {
  var chat = new ChatMessage({author: 'pamela', text: 'this is the shit!', time: (new Date()).getTime()});
  console.log(chat.getPurified());
});

var ChatMessage = Backbone.Model.extend({
  defaults: {
    author: 'Unknown',
    text: '',
    time: (new Date()).getTime()
  }, 
  getPurified: function() {
    if (/shit/.test(this.get('text'))) {
      return this.get('text').replace(/shit/, '****')
    } else {
      return this.get('text');
    }
  }
});

var ChatMessages = Backbone.Collection.extend({
    model: ChatMessage,
    comparator: function(model) {
      return model.get('time');
    }
});
