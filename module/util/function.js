"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.isObject = isObject;
exports.isMapObject = isMapObject;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isPromiseLike = isPromiseLike;
exports.identityFunc = identityFunc;
exports.emptyFunc = emptyFunc;

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

/**
 *
 */
function isObject(v) {
  var t = (0, _typeof2["default"])(v);
  return v != null && (t == 'object' || t == 'function');
}
/**
 *
 */


function isMapObject(v) {
  var t = (0, _typeof2["default"])(v);
  return v != null && t == 'object';
}
/**
 *
 */


function isFunction(v) {
  return typeof v == 'function';
}
/**
 *
 */


function isNumber(v) {
  return typeof v == 'number';
}
/**
 * Detect whether the value has CommonJS Promise/A+ interface or not
 */


function isPromiseLike(v) {
  return isObject(v) && isFunction(v.then);
}
/**
 *
 */


function identityFunc(a) {
  return a;
}
/**
 *
 */


function emptyFunc() {}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwidiIsInQiLCJpc01hcE9iamVjdCIsImlzRnVuY3Rpb24iLCJpc051bWJlciIsImlzUHJvbWlzZUxpa2UiLCJ0aGVuIiwiaWRlbnRpdHlGdW5jIiwiYSIsImVtcHR5RnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxRQUFULENBQWtCQyxDQUFsQixFQUF1QztBQUM1QyxNQUFNQyxDQUFDLDRCQUFVRCxDQUFWLENBQVA7QUFDQSxTQUFPQSxDQUFDLElBQUksSUFBTCxLQUFjQyxDQUFDLElBQUksUUFBTCxJQUFpQkEsQ0FBQyxJQUFJLFVBQXBDLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsV0FBVCxDQUFxQkYsQ0FBckIsRUFBK0Q7QUFDcEUsTUFBTUMsQ0FBQyw0QkFBVUQsQ0FBVixDQUFQO0FBQ0EsU0FBT0EsQ0FBQyxJQUFJLElBQUwsSUFBYUMsQ0FBQyxJQUFJLFFBQXpCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLFVBQVQsQ0FBb0JILENBQXBCLEVBQTBEO0FBQy9ELFNBQU8sT0FBT0EsQ0FBUCxJQUFZLFVBQW5CO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNJLFFBQVQsQ0FBa0JKLENBQWxCLEVBQXVDO0FBQzVDLFNBQU8sT0FBT0EsQ0FBUCxJQUFZLFFBQW5CO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNLLGFBQVQsQ0FBdUJMLENBQXZCLEVBQXdEO0FBQzdELFNBQU9ELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFSLElBQWVHLFVBQVUsQ0FBRUgsQ0FBRCxDQUFXTSxJQUFaLENBQWhDO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLFlBQVQsQ0FBeUJDLENBQXpCLEVBQStCO0FBQ3BDLFNBQU9BLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsU0FBVCxHQUFxQixDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodjogYW55KTogdiBpcyBvYmplY3Qge1xyXG4gIGNvbnN0IHQgPSB0eXBlb2YgdjtcclxuICByZXR1cm4gdiAhPSBudWxsICYmICh0ID09ICdvYmplY3QnIHx8IHQgPT0gJ2Z1bmN0aW9uJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWFwT2JqZWN0KHY6IGFueSk6IHYgaXMgeyBbbmFtZTogc3RyaW5nXTogdW5rbm93biB9IHtcclxuICBjb25zdCB0ID0gdHlwZW9mIHY7XHJcbiAgcmV0dXJuIHYgIT0gbnVsbCAmJiB0ID09ICdvYmplY3QnO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHY6IGFueSk6IHYgaXMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkge1xyXG4gIHJldHVybiB0eXBlb2YgdiA9PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2OiBhbnkpOiB2IGlzIG51bWJlciB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2ID09ICdudW1iZXInO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZWN0IHdoZXRoZXIgdGhlIHZhbHVlIGhhcyBDb21tb25KUyBQcm9taXNlL0ErIGludGVyZmFjZSBvciBub3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2VMaWtlKHY6IGFueSk6IHYgaXMgeyB0aGVuOiBGdW5jdGlvbiB9IHtcclxuICByZXR1cm4gaXNPYmplY3QodikgJiYgaXNGdW5jdGlvbigodiBhcyBhbnkpLnRoZW4pO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eUZ1bmM8VD4oYTogVCkge1xyXG4gIHJldHVybiBhO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eUZ1bmMoKSB7fVxyXG4iXX0=