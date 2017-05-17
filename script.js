
$('.enter-button').on('click', function(){
  console.log('Button Click')
  var websiteTitle = $('.web-title-input').val();
  var websiteURL = $('.web-url-input').val();
    // if (websiteTitle === "" || websiteURL === ""){
    //   $('.enter-button').prop('disabled' , 'true');
    // } else
    $('.new-link-container').append(`
    <article class='link-card'>
      <h3 class='link-title'>${websiteTitle}</h3>
      <hr class='hr1'>
      <a class='the-link' href='www.thewebsiteurl.com'>${websiteURL}</a>
      <hr class='hr2'>
      <p class='read'>Read</p>
      <p class='delete'>Delete</p>
    </article>`);
    linksCounter();
    reset();
})

$(document).on('input', function(){
  console.log('input')
  var websiteTitle = $('.web-title-input').val();
  var websiteURL = $('.web-url-input').val();
    if (websiteTitle === "" || websiteURL === ""){
      $('.enter-button').prop('disabled', true)
    } else {$('.enter-button').prop('disabled', false)
  }
})



$('.new-link-container').on('click', '.delete', function(){
  console.log ($('.read').parent().children());
  $(this).parent().remove('.link-card')
})

$('.new-link-container').on('click', '.read', function(){
  console.log ($('.read').parent().children());
  $(this).parent().find('.read', '.link-card', '.the-link').toggleClass('read-click');
  $(this).parent().toggleClass('read-click');
  $(this).parent().find('.the-link').toggleClass('read-click-underline');
})

$('.new-link-container').on('click', '.read', function()  {
  readCounter();
})

$('.new-link-container').on('click', '.delete', function()  {
  readCounter();
  linksCounter();
})

function readCounter()  {
  var readCount = $('.read-click-underline').length;
  $('.read-display').text('Read: ' + readCount);
  if (readCount > 0){
    $('.clear-button').prop('disabled', false);
  }
  console.log(readCount);
}

function linksCounter()  {
  var linkCount = $('.link-card').length;
  $('.link-display').text('Links: ' + linkCount);
  console.log(linkCount);
}

function reset(){
  $('.web-title-input').val('');
  $('.web-url-input').val('');
  $('.enter-button').prop('disabled', true);
}


$('.clear-button').on('click', function (){
  console.log('clear')
  $('.clear-button').prop('disabled', true);
  $('.read-click-underline').closest('article').remove()
})
// $(document).ready(function(){
//   console.log('working')
// })
