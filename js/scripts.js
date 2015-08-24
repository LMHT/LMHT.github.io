/*$('h1').on('mouseenter', function() {
  $(this).hide();
});
*/

/*$('.tags').on('click', function() {
  var content = $(this).attr('for');
  $('#' + content).fadeToggle();
});
*/
/*
$('.tags').on('click', function() {
  var content = $(this).attr('for');
  $('#' + content).show().siblings().hide();
});
*/

/*
$('#menuwidget').menu();
*/


$('#tags').selectmenu({
  select: function() {
  var content = $(this).val();
  $('#' + content).fadeIn('easing').siblings().hide();
  }
});