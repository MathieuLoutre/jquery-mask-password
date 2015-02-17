/*
 *  jQuery Password Masker - v0.2.2
 *  Hides the content of a text field after a given delay
 *  http://github.com/MathieuLoutre/jquery-mask-password/
 *
 *  Made by Mathieu Triay
 *  Under MIT License
 */
(function() {
  (function($) {
    $.fn.maskPassword = function(delay) {
      if (delay == null) {
        delay = 1000;
      }
      return $(this).on('keyup', function(e) {
        var len, _ref;
        if ((_ref = e.keyCode) !== 13 && _ref !== 91 && _ref !== 18 && _ref !== 16 && _ref !== 17 && _ref !== 93) {
          clearTimeout($(this).data('show'));
          if ($(this).attr('type') === 'password') {
            $(this).attr({
              'type': 'text'
            });
            len = $(this).val().length;
            this.setSelectionRange(len, len);
          }
          return $(this).data('show', setTimeout((function(_this) {
            return function() {
              $(_this).attr({
                'type': 'password'
              });
              len = $(_this).val().length;
              return _this.setSelectionRange(len, len);
            };
          })(this), delay));
        }
      });
    };
    return $.fn.destroyMaskPassword = function() {
      return clearTimeout($(this).data('show'));
    };
  })($);

}).call(this);
