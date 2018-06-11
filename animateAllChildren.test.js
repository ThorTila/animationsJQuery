QUnit.module('errors');

QUnit.test('wrong type passed', function(assert) {
  assert.throws(
    () => $('body').animateAllChildren('test'),
    new SyntaxError('Wrong animation type passed.')
  );
});

QUnit.test('no arg passed', function(assert) {
  assert.throws(
    () => $('body').animateAllChildren(),
    new SyntaxError('Wrong animation type passed.')
  );
});

QUnit.module('animations');

QUnit.test('fadeIn one element with default arguments', function(assert) {
  var list = testList(1),
    listEl = list.children(),
    clock = sinon.useFakeTimers();
  list.appendTo(document.body);
  listEl.css('display', 'none');

  assert.ok(listEl.css('display').indexOf('none') > -1);

  list.animateAllChildren('fadeIn');

  clock.tick(500);

  assert.ok(listEl.css('display').indexOf('list-item') > -1);

  list.remove();
});

QUnit.test('fadeOut multiple elements with specified number values', function(
  assert
) {
  var list = testList(5),
    listEl = list.children(),
    clock = sinon.useFakeTimers(),
    options = 500,
    delay = 200,
    time = (listEl.length - 1) * delay + options;

  list.appendTo(document.body);

  assert.ok(listEl.css('display').indexOf('list-item') > -1);

  list.animateAllChildren('fadeOut', options, delay);

  clock.tick(time + 100);

  listEl.each(function() {
    assert.ok(
      $(this)
        .css('display')
        .indexOf('none') > -1
    );
  });

  list.remove();
});

QUnit.test('slideUp multiple elements with object options argument', function(
  assert
) {
  var list = testList(5),
    listEl = list.children(),
    clock = sinon.useFakeTimers(),
    options = { duration: 500, easing: 'linear', queue: false },
    delay = 200,
    time = delay + options.duration;

  list.appendTo(document.body);

  assert.ok(listEl.css('display').indexOf('list-item') > -1);

  list.animateAllChildren('slideUp', options, delay);

  clock.tick(time + 100);

  listEl.each(function() {
    assert.ok(
      $(this)
        .css('display')
        .indexOf('none') > -1
    );
  });

  list.remove();
});

function testList(val) {
  var list = $('<ul class="test"></ul>'),
    listEl = '<li>lorem ipsum</li>';
  list.empty();
  for (var i = 0; i < val; i++) {
    list.append(listEl);
  }
  return list;
}
