console.log(`we are using jQuery`);

// $('selector').action()
$('p').click(); // click on p
$('p').click(function () {
  console.log('u clicked on p');
  // $(this).hide();
});

$('p').hover(function () {
  console.log(`hover is success`);
});

$('p').click(function () {
  // $('P').hide();
  // $(this).hide();
});
$('p').dblclick(function () {
  // $('P').hide();
  $(this).hide();
});

$('#pera-id').hover(function () {
  console.log(`id check is success`);
});
$('.pera-class').hover(function () {
  console.log(`class check is success`);
});

// events in jQuery

// multiple function in one action
$('.pera-class').on({
  click: function () {
    console.log(`thanks for clicking`, this);
  },
  mouseleave: function () {
    console.log(`Mouse has left this part`, this);
  },
});

// cool functions
// making text visible invisible
$('.wiki').show();
$('.wiki').hide(2000);
$('.wiki').show(2000);

$('#toggle-btn').click(function () {
  $('.wiki').toggle(1500);
});

// various fade function
$('#fade-btn').click(function () {
  $('.spacex-img').fadeOut(2000);
  $('.spacex-img').fadeIn(2000);
});

$('.spacex-img').click(function () {
  // $('.spacex-img').fadeToggle(2000);
  // $('.spacex-img').fadeTo(1000, 0.5);
});

$('h5').slideUp();
$('h5').slideDown(5000);

$('img').animate(
  {
    height: '550px',
    width: '800px',
  },
  2000
);
//  this is cool
