"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.split");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = request;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _stream = require("stream");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 *
 */
function request(params, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(params.method, params.url);

  if (params.headers) {
    for (var header in params.headers) {
      xhr.setRequestHeader(header, params.headers[header]);
    }
  }

  xhr.setRequestHeader('Accept', '*/*');
  var response;
  var str = new _stream.Duplex();

  str._read = function (_size) {
    if (response) {
      str.push(response.body);
    }
  };

  var bufs = [];
  var sent = false;

  str._write = function (chunk, encoding, callback) {
    // bufs.push(chunk.toString(encoding === 'buffer' ? 'binary' : encoding));
    bufs.push(chunk.toString(encoding));
    callback();
  };

  str.on('finish', function () {
    if (!sent) {
      xhr.send(bufs.join(''));
      sent = true;
    }
  });

  if (params.body || params.body === '' || !/^(put|post|patch)$/i.test(params.method)) {
    xhr.send(params.body);
    sent = true;
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var headerNames = getResponseHeaderNames(xhr);
      var headers = (0, _reduce["default"])(headerNames).call(headerNames, function (headers, headerName) {
        return _objectSpread(_objectSpread({}, headers), {}, (0, _defineProperty3["default"])({}, headerName, xhr.getResponseHeader(headerName) || ''));
      }, {});
      response = {
        statusCode: xhr.status,
        headers: headers,
        body: xhr.response
      };

      if (!response.statusCode) {
        response.statusCode = 400;
        response.body = 'Access Declined';
      }

      if (callback) {
        callback(null, response, response.body);
      }

      str.emit('response', response);
      str.emit('complete', response);
      str.end();
    }
  };

  return str;
}

function getResponseHeaderNames(xhr) {
  var headerLines = (xhr.getAllResponseHeaders() || '').split(/[\r\n]+/);
  return (0, _map["default"])(headerLines).call(headerLines, function (headerLine) {
    return headerLine.split(/\s*:/)[0].toLowerCase();
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icm93c2VyL3JlcXVlc3QudHMiXSwibmFtZXMiOlsicmVxdWVzdCIsInBhcmFtcyIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsImhlYWRlciIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXNwb25zZSIsInN0ciIsIkR1cGxleCIsIl9yZWFkIiwiX3NpemUiLCJwdXNoIiwiYm9keSIsImJ1ZnMiLCJzZW50IiwiX3dyaXRlIiwiY2h1bmsiLCJlbmNvZGluZyIsInRvU3RyaW5nIiwib24iLCJzZW5kIiwiam9pbiIsInRlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiaGVhZGVyTmFtZXMiLCJnZXRSZXNwb25zZUhlYWRlck5hbWVzIiwiaGVhZGVyTmFtZSIsImdldFJlc3BvbnNlSGVhZGVyIiwic3RhdHVzQ29kZSIsInN0YXR1cyIsImVtaXQiLCJlbmQiLCJoZWFkZXJMaW5lcyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNwbGl0IiwiaGVhZGVyTGluZSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE9BQVQsQ0FDYkMsTUFEYSxFQUViQyxRQUZhLEVBT2I7QUFDQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTSixNQUFNLENBQUNLLE1BQWhCLEVBQXdCTCxNQUFNLENBQUNNLEdBQS9COztBQUNBLE1BQUlOLE1BQU0sQ0FBQ08sT0FBWCxFQUFvQjtBQUNsQixTQUFLLElBQU1DLE1BQVgsSUFBcUJSLE1BQU0sQ0FBQ08sT0FBNUIsRUFBcUM7QUFDbkNMLE1BQUFBLEdBQUcsQ0FBQ08sZ0JBQUosQ0FBcUJELE1BQXJCLEVBQTZC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QkFBVCxDQUFnQzVCLEdBQWhDLEVBQXFEO0FBQ25ELE1BQU1tQyxXQUFXLEdBQUcsQ0FBQ25DLEdBQUcsQ0FBQ29DLHFCQUFKLE1BQStCLEVBQWhDLEVBQW9DQyxLQUFwQyxDQUEwQyxTQUExQyxDQUFwQjtBQUNBLFNBQU8scUJBQUFGLFdBQVcsTUFBWCxDQUFBQSxXQUFXLEVBQUssVUFBQ0csVUFBRDtBQUFBLFdBQ3JCQSxVQUFVLENBQUNELEtBQVgsQ0FBaUIsTUFBakIsRUFBeUIsQ0FBekIsRUFBNEJFLFdBQTVCLEVBRHFCO0FBQUEsR0FBTCxDQUFsQjtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHVwbGV4IH0gZnJvbSAnc3RyZWFtJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdChcclxuICBwYXJhbXM6IEh0dHBSZXF1ZXN0LFxyXG4gIGNhbGxiYWNrOiAoXHJcbiAgICBlcnI6IEVycm9yIHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICAgIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UsXHJcbiAgICBib2R5OiBzdHJpbmcsXHJcbiAgKSA9PiBhbnksXHJcbikge1xyXG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIHhoci5vcGVuKHBhcmFtcy5tZXRob2QsIHBhcmFtcy51cmwpO1xyXG4gIGlmIChwYXJhbXMuaGVhZGVycykge1xyXG4gICAgZm9yIChjb25zdCBoZWFkZXIgaW4gcGFyYW1zLmhlYWRlcnMpIHtcclxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCBwYXJhbXMuaGVhZGVyc1toZWFkZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICcqLyonKTtcclxuICBsZXQgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTtcclxuICBjb25zdCBzdHIgPSBuZXcgRHVwbGV4KCk7XHJcbiAgc3RyLl9yZWFkID0gKF9zaXplKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgc3RyLnB1c2gocmVzcG9uc2UuYm9keSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBidWZzOiBhbnlbXSA9IFtdO1xyXG4gIHZhciBzZW50ID0gZmFsc2U7XHJcbiAgc3RyLl93cml0ZSA9IChjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSA9PiB7XHJcbiAgIC8vIGJ1ZnMucHVzaChjaHVuay50b1N0cmluZyhlbmNvZGluZyA9PT0gJ2J1ZmZlcicgPyAnYmluYXJ5JyA6IGVuY29kaW5nKSk7XHJcbiAgICBidWZzLnB1c2goY2h1bmsudG9TdHJpbmcoZW5jb2RpbmcpKTtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgfTtcclxuICBzdHIub24oJ2ZpbmlzaCcsICgpID0+IHtcclxuICAgIGlmICghc2VudCkge1xyXG4gICAgICB4aHIuc2VuZChidWZzLmpvaW4oJycpKTtcclxuICAgICAgc2VudCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKFxyXG4gICAgcGFyYW1zLmJvZHkgfHxcclxuICAgIHBhcmFtcy5ib2R5ID09PSAnJyB8fFxyXG4gICAgIS9eKHB1dHxwb3N0fHBhdGNoKSQvaS50ZXN0KHBhcmFtcy5tZXRob2QpXHJcbiAgKSB7XHJcbiAgICB4aHIuc2VuZChwYXJhbXMuYm9keSk7XHJcbiAgICBzZW50ID0gdHJ1ZTtcclxuICB9XHJcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlck5hbWVzID0gZ2V0UmVzcG9uc2VIZWFkZXJOYW1lcyh4aHIpO1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0gaGVhZGVyTmFtZXMucmVkdWNlKFxyXG4gICAgICAgIChoZWFkZXJzLCBoZWFkZXJOYW1lKSA9PiAoe1xyXG4gICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgIFtoZWFkZXJOYW1lXTogeGhyLmdldFJlc3BvbnNlSGVhZGVyKGhlYWRlck5hbWUpIHx8ICcnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHt9IGFzIHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9LFxyXG4gICAgICApO1xyXG4gICAgICByZXNwb25zZSA9IHtcclxuICAgICAgICBzdGF0dXNDb2RlOiB4aHIuc3RhdHVzLFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgYm9keTogeGhyLnJlc3BvbnNlLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICByZXNwb25zZS5zdGF0dXNDb2RlID0gNDAwO1xyXG4gICAgICAgIHJlc3BvbnNlLmJvZHkgPSAnQWNjZXNzIERlY2xpbmVkJztcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSwgcmVzcG9uc2UuYm9keSk7XHJcbiAgICAgIH1cclxuICAgICAgc3RyLmVtaXQoJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xyXG4gICAgICBzdHIuZW1pdCgnY29tcGxldGUnLCByZXNwb25zZSk7XHJcbiAgICAgIHN0ci5lbmQoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlc3BvbnNlSGVhZGVyTmFtZXMoeGhyOiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gIGNvbnN0IGhlYWRlckxpbmVzID0gKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJykuc3BsaXQoL1tcXHJcXG5dKy8pO1xyXG4gIHJldHVybiBoZWFkZXJMaW5lcy5tYXAoKGhlYWRlckxpbmUpID0+XHJcbiAgICBoZWFkZXJMaW5lLnNwbGl0KC9cXHMqOi8pWzBdLnRvTG93ZXJDYXNlKCksXHJcbiAgKTtcclxufVxyXG4iXX0=