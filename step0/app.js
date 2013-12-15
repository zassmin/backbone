// var messages = [{author: 'Roseanne', text: 'chatting away'},
                 // {author: 'Zassmin', text: 'chatting, too'}];


var chats = new ChatMessages();  
chats.fetch();
var chatView = new ChatMessagesView({collection: chats});
var chatFormView = new ChatFormView({collection: chats}); 

$('.chat-messages-wrapper').append(chatView.render().$el);

$('.chat-form-wrapper').append(chatFormView.render().$el);
