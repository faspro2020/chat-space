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
  
  $('.Form-all').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      $('.Form-all')[0].reset();
      $('.Forms__btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});