$('#tags').selectmenu({
  select: function() {
  var content = $(this).val();
  $('#' + content).fadeIn(1000).siblings().hide();
  }
});