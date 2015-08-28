var app = {

  init: function() {
    this.setUpMenu();
    this.setUpFirstView();
  },

  setUpMenu: function() {

    this.menu = $('#tags').selectmenu({

      select: function() {

        var el = $(this);

        $("#main").animate({
          opacity: 0
        }, 500, function() {
          var url = el.val();
          app.getSection(url);
        });

      }

    });

  },

  getSection: function(url) {

    $.ajax({

      url: "elements/" + url

    }).success(function(html) {

      $("#main")
        .html(html)
        .animate({
          opacity: 1
        }, 500);

    });

  },

  setUpFirstView: function() {

    var initialValue = this.menu.val();

    this.getSection(initialValue);

  }

};

app.init();
