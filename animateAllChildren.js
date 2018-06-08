import $ from 'jquery';

/**
 * @author  Łukasz Rasiński
 * @requires jquery
 */

(function($) {
  /**
   * Animations types
   *
   * @enum {string}
   * @readonly
   */
  var animations = Object.freeze({
    FADETOGGLE: 'fadetoggle',
    FADEOUT: 'fadeout',
    FADEIN: 'fadein',
    SLIDETOGGLE: 'slidetoggle',
    SLIDEUP: 'slideup',
    SLIDEDOWN: 'slidedown'
  });
  /**
   * Function to trigger chosen jQuery animation.
   *
   * @name animateAllChildren
   * @param {animations} type Type of animation you want to trigger
   * @param {number} [duration=5000] Duration of animation (default: 5000)
   * @param {number} [delay=200] Delay between animation starts on every child (default: 200)
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
      case animations.FADETOGGLE:
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .fadeToggle({ queue: true, duration: duration });
        });
        break;
      case animations.FADEOUT:
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .fadeOut({ queue: true, duration: duration });
        });
        break;
      case animations.FADEIN:
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .fadeIn({ queue: true, duration: duration });
        });
        break;
      case animations.SLIDETOGGLE:
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .slideToggle({ queue: true, duration: duration });
        });
        break;
      case animations.SLIDEUP:
        elements.each(function(i) {
          $(this)
            .delay(delay * i)
            .slideUp({ queue: true, duration: duration });
        });
        break;
      case animations.SLIDEDOWN:
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
$('ul').animateAllChildren('dupa', 'dupa', 5);
