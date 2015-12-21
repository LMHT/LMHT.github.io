// Generic object to namespace our app (keep variables out of global scope) and keep things organized!
var app = {

  // Table of Contents of what this file does.
  init: function() {
    this.setUpMenu();
    this.setUpFirstView();
    $('input').val('');
  },

  setUpMenu: function() {
    $("#tags").combobox();

    $('#tags').change(function() {
      var $selected = $(this);
      var url = $selected.val();

      app.getSection(url);
    })
  },

  getSection: function(url) {

    $.ajax({

      url: "elements/" + url

    }).success(function(html) {

      // Replace the card with the new content and fade it back in.
      $("#main")
        .html(html)
        .animate({
          opacity: 1
        }, 500);

      app.updateURL(url);
      $('input').val('');

    });

  },

  updateURL: function(url) {
    window.location.hash = url;
  },

  // This function controls what element will show based on the URL the page loads with.
  setUpFirstView: function() {

    // Look for hash
    var hash = window.location.hash;
    var url = hash.replace("#", "");

    // If there is one...
    if (url) {

      // Deselect the currently selected option
      $("#tags option").prop("selected", false);

      // Select the option that matches the hash
      $("option[value='" + url + "']").prop("selected", true);

      // Load that element
      this.getSection(url); {
        // $('input').val('');
      }

    } else {
      this.getSection('welcome.html');
    }

  }

};




$(function() {
  app.init();
});
