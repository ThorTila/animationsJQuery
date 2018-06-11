/**
 * @author  Łukasz Rasiński
 * @requires jquery
 */

(function($) {
  /**
   * Function to trigger chosen jQuery animation.
   *
   * @name animateAllChildren
   * @param {animations} type Type of animation you want to trigger
   * @param {number|object} [options=400] Duration of animation or object with options. {@link http://api.jquery.com/fadeout/#fadeOut-options See more} (default: 400)
   * @param {number} [delay=200] Delay between animation starts on every child (default: 200)
   * @returns Element on which it was called
   * @throws {SyntaxError} When wrong animation type is passed
   * @example
   * $('ul').animateAllChildren('fadeOut');
   * //trigger animation 'fadeOut' on all ul`s children with duration 400ms and delay between them 200ms
   * @example
   * $('ul').animateAllChildren('slideUp', 500, 100);
   * //trigger animation 'slideUp' on all ul`s children with duration 500ms and delay between them 100ms
   * @example
   * $('ul').animateAllChildren('slideDown', { duration: 200, easing: "linear" }, 100);
   * //trigger animation 'slideDown' on all ul`s children with duration 200ms, linear easing function and delay between them 100ms
   */
  $.fn.animateAllChildren = function(type, options, delay) {
    if (!$(this)[type]) throw SyntaxError('Wrong animation type passed.');
    var options = options || {},
      delay = delay || 200;

    var elements = this.children();

    $(elements).each(function(i) {
      $(this)
        .delay(delay * i)
        [type](options);
    });
    return this;
  };
})(jQuery);
