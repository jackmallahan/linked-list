

//********   event listeners    ************//

// enter button enable on input
$(document).on('input', function() {
  enableEnterButton();
  })

// enter button
$('.enter-button').on('click', function() {
  isUrlValid();
})

// delete link card update counters
$('.new-link-container').on('click', '.delete', function() {
  $(this).parent().remove('.link-card')
  readCounter();
  linksCounter();
})

// link card read button
$('.new-link-container').on('click', '.read', function() {
  $(this).parent().find('.read', '.link-card', '.the-link').toggleClass('read-click');
  $(this).parent().toggleClass('read-click');
  $(this).parent().find('.the-link').toggleClass('read-click-underline');
  readCounter();
})

// clear all read button
$('.clear-button').on('click', function () {
  removeReadLinkCards();
  linksCounter();
  readCounter();
})


//**************   functions  *****************************//

// enable enter button on input
function enableEnterButton()  {
  var websiteTitle = $('.web-title-input').val();
  var websiteURL = $('.web-url-input').val();
    if (websiteTitle === "" || websiteURL === "") {
      $('.enter-button').prop('disabled', true)
  } else {$('.enter-button').prop('disabled', false)
}
}

//  build new card
function buildNewCard() {
  var websiteTitle = $('.web-title-input').val();
  var websiteURL = $('.web-url-input').val();
    $('.new-link-container').append(`
    <article class='link-card'>
      <h3 class='link-title'>${websiteTitle}</h3>
      <hr class='hr1'>
      <a class='the-link' href='www.thewebsiteurl.com'>${websiteURL}</a>
      <hr class='hr2'>
      <p class='read'>Read</p>
      <p class='delete'>Delete</p>
    </article>`);
}

// reset inputs and enter button disable
function reset(){
  $('.web-title-input').val('');
  $('.web-url-input').val('');
  $('.enter-button').prop('disabled', true);
}

// read counter
function readCounter()  {
  var readCount = $('.read-click-underline').length;
  $('.read-display').text('Read: ' + readCount);
  if (readCount > 0){
    $('.clear-button').prop('disabled', false);
  }
}

// link counter
function linksCounter()  {
  var linkCount = $('.link-card').length;
  $('.link-display').text('Links: ' + linkCount);
}

// remove all read link cards
function removeReadLinkCards()  {
  $('.clear-button').prop('disabled', true);
  $('.read-click-underline').closest('article').remove();
  $('.links-display').text('0');
}

// URL Verifier
function isUrlValid() {
    var userInput = $('.web-url-input').val()
    var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    var url = new RegExp(regexQuery,"i");
    if (url.test(userInput)) {
      buildNewCard();
      linksCounter();
      reset();
    }
    else {alert('invalid url: ' + userInput);
    return false;
  }
}
