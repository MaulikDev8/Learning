console.log(`we are using jQuery`);

// $('selector').action()
$('p').click(); // click on p
$('p').click(function () {
  console.log('u clicked on p');
  $(this).hide();
});
