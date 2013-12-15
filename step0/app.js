var messages = [{author: 'Roseanne', text: 'chatting away'},
                 {author: 'Zassmin', text: 'chatting, too'}];


var chats = new ChatMessages(messages);  
var chatView = new ChatMessagesView({collection: chats}); 

$('.chat-messages-wrapper').append(chatView.render().$el);
