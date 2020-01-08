// selector for thumbnails
// $('.thumbnail img')

// selector for large image
// $('.hero img')

$(function() {
  // When the user clicks on a thumbnail:
  $( 'main' ).on( 'click', '.thumbnail img', (event) => {
    event.preventDefault();

    let thumbSrc = $(event.currentTarget).attr('src');
    let thumbAlt = $(event.currentTarget).attr('alt');

    // update the src attribute of large image to match the thumbnail src
    $('.hero img').attr('src', thumbSrc);

    // update the alt attribute to of large image to match thumbnail alt
    $('.hero img').attr('alt', thumbAlt);
  });
});