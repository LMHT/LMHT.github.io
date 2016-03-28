$(document).ready(function() {

  var $previousButton;
  var audio = new Audio();
  var paused = true;

  var setPlaying = function ($button) {
    $button.addClass('pause');
    audio.play();
    paused = false;
  };

  var setPause = function ($button) {
    $button.removeClass('pause');
    audio.pause();
    paused = true;
  };

  audio.onpause = setPause;

  $('body').on( 'click', '.play-button', function(event) {
    var $button = $(event.target);
    var audioSrc = $button.data('audio-src');
    var isPreviousButton = new RegExp(audioSrc).test(audio.src);

    if (!isPreviousButton && !paused) {
      setPause($previousButton);
    }

    audio.src = audioSrc;

    if (paused) {
      setPlaying($button);
    } else {
      setPause($button);
    }

    $previousButton = $button;
  });
});
