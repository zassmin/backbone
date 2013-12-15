var ChatRouter = Backbone.Router.extend({
  routes:{
    "":"messageBoard",
    "room":"roomRoute"
  },
  messageBoard: function () {
    console.log('todo');
  },
  roomRoute: function () {
    var chats = new ChatMessages();  
    chats.fetch();
    var chatView = new ChatMessagesView({collection: chats});
    var chatFormView = new ChatFormView({collection: chats}); 
    
    $('.chat-messages-wrapper').append(chatView.render().$el);
    
    $('.chat-form-wrapper').append(chatFormView.render().$el);

    console.log('in room route');
  }
});