"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.parseCSV = parseCSV;
exports.toCSV = toCSV;
exports.parseCSVStream = parseCSVStream;
exports.serializeCSVStream = serializeCSVStream;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _es = _interopRequireDefault(require("csv-parse/lib/es5"));

var _sync = _interopRequireDefault(require("csv-parse/lib/es5/sync"));

var _es2 = _interopRequireDefault(require("csv-stringify/lib/es5"));

var _sync2 = _interopRequireDefault(require("csv-stringify/lib/es5/sync"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 * @private
 */
function parseCSV(str, options) {
  return (0, _sync["default"])(str, _objectSpread(_objectSpread({}, options), {}, {
    columns: true
  }));
}
/**
 * @private
 */


function toCSV(records, options) {
  return (0, _sync2["default"])(records, _objectSpread(_objectSpread({}, options), {}, {
    header: true
  }));
}
/**
 * @private
 */


function parseCSVStream(options) {
  return (0, _es["default"])(_objectSpread(_objectSpread({}, options), {}, {
    columns: true
  }));
}
/**
 * @private
 */


function serializeCSVStream(options) {
  return (0, _es2["default"])(_objectSpread(_objectSpread({}, options), {}, {
    header: true
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jc3YudHMiXSwibmFtZXMiOlsicGFyc2VDU1YiLCJzdHIiLCJvcHRpb25zIiwiY29sdW1ucyIsInRvQ1NWIiwicmVjb3JkcyIsImhlYWRlciIsInBhcnNlQ1NWU3RyZWFtIiwic2VyaWFsaXplQ1NWU3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ08sU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBK0JDLE9BQS9CLEVBQTZEO0FBQ2xFLFNBQU8sc0JBQWFELEdBQWIsa0NBQXVCQyxPQUF2QjtBQUFnQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQXpDLEtBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsS0FBVCxDQUFlQyxPQUFmLEVBQWtDSCxPQUFsQyxFQUFtRTtBQUN4RSxTQUFPLHVCQUFpQkcsT0FBakIsa0NBQStCSCxPQUEvQjtBQUF3Q0ksSUFBQUEsTUFBTSxFQUFFO0FBQWhELEtBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsY0FBVCxDQUF3QkwsT0FBeEIsRUFBd0Q7QUFDN0QsU0FBTyxvREFBY0EsT0FBZDtBQUF1QkMsSUFBQUEsT0FBTyxFQUFFO0FBQWhDLEtBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ssa0JBQVQsQ0FBNEJOLE9BQTVCLEVBQWdFO0FBQ3JFLFNBQU8scURBQWtCQSxPQUFsQjtBQUEyQkksSUFBQUEsTUFBTSxFQUFFO0FBQW5DLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnc3RyZWFtJztcclxuaW1wb3J0IGNzdlBhcnNlLCB7IE9wdGlvbnMgYXMgUGFyc2VPcHRzIH0gZnJvbSAnY3N2LXBhcnNlL2xpYi9lczUnO1xyXG5pbXBvcnQgY3N2UGFyc2VTeW5jIGZyb20gJ2Nzdi1wYXJzZS9saWIvZXM1L3N5bmMnO1xyXG5pbXBvcnQgY3N2U3RyaW5naWZ5LCB7IE9wdGlvbnMgYXMgU3RyaW5naWZ5T3B0cyB9IGZyb20gJ2Nzdi1zdHJpbmdpZnkvbGliL2VzNSc7XHJcbmltcG9ydCBjc3ZTdHJpbmdpZnlTeW5jIGZyb20gJ2Nzdi1zdHJpbmdpZnkvbGliL2VzNS9zeW5jJztcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ1NWKHN0cjogc3RyaW5nLCBvcHRpb25zOiBQYXJzZU9wdHMpOiBPYmplY3RbXSB7XHJcbiAgcmV0dXJuIGNzdlBhcnNlU3luYyhzdHIsIHsgLi4ub3B0aW9ucywgY29sdW1uczogdHJ1ZSB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9DU1YocmVjb3JkczogT2JqZWN0W10sIG9wdGlvbnM/OiBTdHJpbmdpZnlPcHRzKTogc3RyaW5nIHtcclxuICByZXR1cm4gY3N2U3RyaW5naWZ5U3luYyhyZWNvcmRzLCB7IC4uLm9wdGlvbnMsIGhlYWRlcjogdHJ1ZSB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDU1ZTdHJlYW0ob3B0aW9ucz86IFBhcnNlT3B0cyk6IFRyYW5zZm9ybSB7XHJcbiAgcmV0dXJuIGNzdlBhcnNlKHsgLi4ub3B0aW9ucywgY29sdW1uczogdHJ1ZSB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplQ1NWU3RyZWFtKG9wdGlvbnM/OiBTdHJpbmdpZnlPcHRzKTogVHJhbnNmb3JtIHtcclxuICByZXR1cm4gY3N2U3RyaW5naWZ5KHsgLi4ub3B0aW9ucywgaGVhZGVyOiB0cnVlIH0pIGFzIFRyYW5zZm9ybTtcclxufVxyXG4iXX0=