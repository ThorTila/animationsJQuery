import $ from 'jquery';

(function($) {
  /**
   * Function to trigger chosen jQuery animation.
   *
   * @requires jquery
   * @param {string} type Type of animation you want to trigger
   * @param {number} [duration] Duration of animation (default: 5000)
   * @param {number} [delay] Delay between animation starts on every child (default: 200)
   * @returns Element on which it was called
   * @throws {SyntaxError} When wrong animation type is passed
   * @example
   * $('ul').animateAllChildren('fadeOut');
   * //trigger animation 'fadeOut' on all ul`s children with duration 5000ms and delay between them 200ms
   * @example
   * $('ul').animateAllChildren('slideUP', 500, 100);
   * //trigger animation 'slideUp' on all ul`s children with duration 500ms and delay between them 100ms
   */
  $.fn.animateAllChildren = function(type, duration, delay) {
    var elements = this.children(),
      duration = duration || 5000,
      delay = delay || 200;
    switch (type.toLowerCase()) {
      case 'fadetoggle':
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .fadeToggle({ queue: true, duration: duration });
        });
        break;
      case 'fadeout':
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .fadeOut({ queue: true, duration: duration });
        });
        break;
      case 'fadein':
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .fadeIn({ queue: true, duration: duration });
        });
        break;
      case 'slidetoggle':
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .slideToggle({ queue: true, duration: duration });
        });
        break;
      case 'slideup':
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .slideUp({ queue: true, duration: duration });
        });
        break;
      case 'slidedown':
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .slideDown({ queue: true, duration: duration });
        });
        break;
      default:
        throw new SyntaxError('Wrong animation type passed.');
    }
    return this;
  };
})(jQuery);
