/*
 *  jQuery Password Masker - v0.1.0
 *  Hides the content of a text field after a given delay
 *  http://github.com/MathieuLoutre/jquery-mask-password/
 *
 *  Made by Mathieu Triay
 *  Under MIT License
 */
(function() {
  (function($) {
    return $.fn.maskPassword = function(delay, callback) {
      if (delay == null) {
        delay = 1000;
      }
      return $(this).on('keyup', function(e) {
        var _ref;
        if ((_ref = e.keyCode) !== 13 && _ref !== 91 && _ref !== 18 && _ref !== 16 && _ref !== 17 && _ref !== 93) {
          clearTimeout($(this).data('show'));
          $(this).attr({
            'type': 'text'
          });
          return $(this).data('show', setTimeout((function(_this) {
            return function() {
              $(_this).attr({
                'type': 'password'
              });
              return console.log("whoo");
            };
          })(this), delay));
        }
      });
    };
  })($);

}).call(this);
