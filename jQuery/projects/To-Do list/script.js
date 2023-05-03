$(document).ready(function () {
  $('#input').change(function () {
    var input = $(this).val();
    $('ul').append('<li>' + input + '<i class="fa-solid fa-check-double"></i> <i class="fa-solid fa-trash-can"></i></li>');
  });

  $('ul').on('click', '.fa-trash-can', function () {
    $(this).parent('li').fadeOut(200);
  });
  $('ul').on('click', '.fa-check-double', function () {
    $(this).parent('li').toggleClass('checked');
  });
});
