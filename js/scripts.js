$('#tags').selectmenu({

  select: function() {

    var fileChoice = $(this).val();

    $.ajax({

      url: "elements/" + fileChoice

    }).success(function(html) {

      $("#main").html(html);

    });

  }

});
