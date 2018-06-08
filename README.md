# animationsjQuery

## Description

Small jQuery plugin to sequentially animate subelements of the selected html element, according to parameters given in its call.

Written in JavaScript using jQuery.

## Installation

Clone the repository and add animateAllChildren.js file to your page before the file in which you want to use it and after the jquery.

## Tests

There are available tests in this projects. They use qUnit. After you clone this repo just open index.html and you will see results of all available tests.

## Documentation

<a name="animateAllChildren"></a>

## animateAllChildren ⇒

Function to trigger chosen jQuery animation.

**Kind**: global variable  
**Returns**: Element on which it was called  
**Throws**:

- <code>SyntaxError</code> When wrong animation type is passed

| Param      | Type                    | Default           | Description                                                  |
| ---------- | ----------------------- | ----------------- | ------------------------------------------------------------ |
| type       | <code>animations</code> |                   | Type of animation you want to trigger                        |
| [duration] | <code>number</code>     | <code>5000</code> | Duration of animation (default: 5000)                        |
| [delay]    | <code>number</code>     | <code>200</code>  | Delay between animation starts on every child (default: 200) |

**Example**

```js
$('ul').animateAllChildren('fadeOut');
//trigger animation 'fadeOut' on all ul`s children with duration 5000ms and delay between them 200ms
```

**Example**

```js
$('ul').animateAllChildren('slideUP', 500, 100);
//trigger animation 'slideUp' on all ul`s children with duration 500ms and delay between them 100ms
```
