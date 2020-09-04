$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="info">
          <div class="info__header">
            <div class="info__header__name">
              ${message.user_name}
            </div>
            <div class="info__header__time-posted">
              ${message.created_at}
            </div>
          </div>
          <div class="info__coment">
            <p class="Message__content">
              ${message.text}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="info">
        <div class="info__header">
          <div class="info__header__name">
            ${message.user_name}
          </div>
          <div class="info__header__time-posted">
            ${message.created_at}
          </div>
        </div>
        <div class="info__coment">
          <p class="Message__content">
            ${message.text}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.form').on('submit', function(e){
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
      $('.main-chat__message-list').append(html);      
      $('form')[0].reset();
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});