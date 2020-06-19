$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox" data-message-id=${message.id}>
          <div class="Chat-message">
            <div class="Chat-name">
              <div class="Chat-name__box">
                ${message.user_name}
              </div>
            </div>
            <div class="Chat-date">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-comment">
            <div class="Chat-comment__content">
              <p class="Message__content">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="Chat-message">
          <div class="Chat-name">
            <div class="Chat-name__box">
              ${message.user_name}
            </div>
          </div>
          <div class="Chat-date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-comment">
          <div class="Chat-comment__content">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>
      </div>`
    return html;
    };
  }
  
  let reloadMessages = function() {
    let last_message_id = $('.MessageBox:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Chat-main__message-list').append(insertHTML);
        $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});