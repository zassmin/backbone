var ChatMessagesView = Backbone.View.extend({

  tagName: 'div',

  className: 'chats',

  render: function() {

    // Save this into a variable so we can use it in callback function later
    var self = this;

    // Iterate through each model in the collection
    this.collection.each(function (book) {

      // Create the DOM for the book img and link
      var chatDiv = $('<div class="chat"></div>');
      var chatAuthor = $('<a>').attr('href', book.get('url'));
      var bookCover = $('<img>').attr('src', book.get('thumbnail'));
      bookLink.append(bookCover);
      bookDiv.append(bookLink);

      // Append the DOM to this view's element
      self.$el.append(bookDiv);
    });

    return this;
  }
});