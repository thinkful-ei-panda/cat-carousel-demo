// $('.thumbnail img') - selector for thumbnail

// $('.hero img') - selector for large image

function handleThumbnailClicks() {
  $( '.thumbnail' ).click(event => {
    event.preventDefault();
    // src attribute for small image should be applied to large image when clicked
    const imgSrc = $(event.currentTarget).find('img').attr('src');
    $('.hero img').attr( 'src', imgSrc);
    // alt attribute for small image should be applied to large image when clicked
    const imgAlt = $(event.currentTarget).find('img').attr('alt');
    $('.hero img').attr( 'alt', imgAlt);
  });
}

$(handleThumbnailClicks);