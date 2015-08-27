var app = {

  init: function() {
    this.setUpMenu();
    this.setUpFirstView();
  },

  setUpMenu: function() {

    this.menu = $('#tags').selectmenu({

      select: function() {

        var url = $(this).val();

        app.getSection(url);

      }

    });

  },

  getSection: function(url) {

    $.ajax({

      url: "elements/" + url

    }).success(function(html) {

      $("#main").html(html);

    });

  },

  setUpFirstView: function() {

    var initialValue = this.menu.val();

    this.getSection(initialValue);

  }

};

app.init();
