$('.enter-button').on('click', function(){
  console.log('Button Click')
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
    </article>`)
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




// $(document).ready(function(){
//   console.log('working')
// })
