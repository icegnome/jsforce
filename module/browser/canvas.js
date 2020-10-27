"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.split");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _getIteratorMethod2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator-method"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _stream = require("stream");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _symbol["default"] === "undefined" || (0, _getIteratorMethod2["default"])(o) == null) { if ((0, _isArray["default"])(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2["default"])(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = (0, _slice["default"])(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from["default"])(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function parseHeaders(hs) {
  var headers = {};

  var _iterator = _createForOfIteratorHelper(hs.split(/\n/)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var line = _step.value;

      var _line$split = line.split(/\s*:\s*/),
          _line$split2 = (0, _slicedToArray2["default"])(_line$split, 2),
          name = _line$split2[0],
          value = _line$split2[1];

      headers[name.toLowerCase()] = value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return headers;
}

function processCanvasRequest(_x, _x2, _x3) {
  return _processCanvasRequest.apply(this, arguments);
}

function _processCanvasRequest() {
  _processCanvasRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params, signedRequest, requestBody) {
    var settings, paramHeaders, _i, _Object$keys, name, data, headers, responseBody;

    return _regenerator["default"].wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            settings = {
              client: signedRequest.client,
              method: params.method,
              data: requestBody
            };
            paramHeaders = params.headers;

            if (paramHeaders) {
              settings.headers = {};

              for (_i = 0, _Object$keys = (0, _keys["default"])(paramHeaders); _i < _Object$keys.length; _i++) {
                name = _Object$keys[_i];

                if (name.toLowerCase() === 'content-type') {
                  settings.contentType = paramHeaders[name];
                } else {
                  settings.headers[name] = paramHeaders[name];
                }
              }
            }

            _context3.next = 5;
            return new _promise["default"](function (resolve, reject) {
              settings.success = resolve;
              settings.failure = reject;
              Sfdc.canvas.client.ajax(params.url, settings);
            });

          case 5:
            data = _context3.sent;
            headers = parseHeaders(data.responseHeaders);
            responseBody = data.payload;

            if (typeof responseBody !== 'string') {
              responseBody = (0, _stringify["default"])(responseBody);
            }

            return _context3.abrupt("return", {
              statusCode: data.status,
              headers: headers,
              body: responseBody
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));
  return _processCanvasRequest.apply(this, arguments);
}

function createRequest(signedRequest) {
  return function (params) {
    var buf = [];
    var stream = new _stream.Transform({
      transform: function transform(chunk, encoding, callback) {
        buf.push(typeof chunk === 'string' ? chunk : chunk.toString('utf8'));
        callback();
      },
      flush: function flush() {
        (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var body, response;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  body = buf.join('');
                  _context.next = 3;
                  return processCanvasRequest(params, signedRequest, body);

                case 3:
                  response = _context.sent;
                  stream.emit('response', response);
                  stream.emit('complete', response);
                  stream.push(response.body);
                  stream.push(null);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
    });

    if (params.body) {
      stream.end(params.body);
    }

    return stream;
  };
}

var _default = {
  supported: (typeof Sfdc === "undefined" ? "undefined" : (0, _typeof2["default"])(Sfdc)) === 'object' && typeof Sfdc.canvas !== 'undefined',
  createRequest: createRequest
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icm93c2VyL2NhbnZhcy50cyJdLCJuYW1lcyI6WyJwYXJzZUhlYWRlcnMiLCJocyIsImhlYWRlcnMiLCJzcGxpdCIsImxpbmUiLCJuYW1lIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInByb2Nlc3NDYW52YXNSZXF1ZXN0IiwicGFyYW1zIiwic2lnbmVkUmVxdWVzdCIsInJlcXVlc3RCb2R5Iiwic2V0dGluZ3MiLCJjbGllbnQiLCJtZXRob2QiLCJkYXRhIiwicGFyYW1IZWFkZXJzIiwiY29udGVudFR5cGUiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VjY2VzcyIsImZhaWx1cmUiLCJTZmRjIiwiY2FudmFzIiwiYWpheCIsInVybCIsInJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlQm9keSIsInBheWxvYWQiLCJzdGF0dXNDb2RlIiwic3RhdHVzIiwiYm9keSIsImNyZWF0ZVJlcXVlc3QiLCJidWYiLCJzdHJlYW0iLCJUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJjaHVuayIsImVuY29kaW5nIiwiY2FsbGJhY2siLCJwdXNoIiwidG9TdHJpbmciLCJmbHVzaCIsImpvaW4iLCJyZXNwb25zZSIsImVtaXQiLCJlbmQiLCJzdXBwb3J0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7OztBQVdBLFNBQVNBLFlBQVQsQ0FBc0JDLEVBQXRCLEVBQWtDO0FBQ2hDLE1BQU1DLE9BQStCLEdBQUcsRUFBeEM7O0FBRGdDLDZDQUViRCxFQUFFLENBQUNFLEtBQUgsQ0FBUyxJQUFULENBRmE7QUFBQTs7QUFBQTtBQUVoQyx3REFBbUM7QUFBQSxVQUF4QkMsSUFBd0I7O0FBQUEsd0JBQ1hBLElBQUksQ0FBQ0QsS0FBTCxDQUFXLFNBQVgsQ0FEVztBQUFBO0FBQUEsVUFDMUJFLElBRDBCO0FBQUEsVUFDcEJDLEtBRG9COztBQUVqQ0osTUFBQUEsT0FBTyxDQUFDRyxJ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eUMsRUFHekNxQixJQUh5QyxDQUY1Qzs7QUFBQTtBQUVPYSxrQkFBQUEsUUFGUDtBQU9DVixrQkFBQUEsTUFBTSxDQUFDVyxJQUFQLENBQVksVUFBWixFQUF3QkQsUUFBeEI7QUFDQVYsa0JBQUFBLE1BQU0sQ0FBQ1csSUFBUCxDQUFZLFVBQVosRUFBd0JELFFBQXhCO0FBQ0FWLGtCQUFBQSxNQUFNLENBQUNNLElBQVAsQ0FBWUksUUFBUSxDQUFDYixJQUFyQjtBQUNBRyxrQkFBQUEsTUFBTSxDQUFDTSxJQUFQLENBQVksSUFBWjs7QUFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFEO0FBWUQ7QUFsQjBCLEtBQWQsQ0FBZjs7QUFvQkEsUUFBSS9CLE1BQU0sQ0FBQ3NCLElBQVgsRUFBaUI7QUFDZkcsTUFBQUEsTUFBTSxDQUFDWSxHQUFQLENBQVdyQyxNQUFNLENBQUNzQixJQUFsQjtBQUNEOztBQUNELFdBQU9HLE1BQVA7QUFDRCxHQTFCRDtBQTJCRDs7ZUFFYztBQUNiYSxFQUFBQSxTQUFTLEVBQUUsUUFBT3pCLElBQVAsMERBQU9BLElBQVAsT0FBZ0IsUUFBaEIsSUFBNEIsT0FBT0EsSUFBSSxDQUFDQyxNQUFaLEtBQXVCLFdBRGpEO0FBRWJTLEVBQUFBLGFBQWEsRUFBYkE7QUFGYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdzdHJlYW0nO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgU2lnbmVkUmVxdWVzdE9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmRlY2xhcmUgdmFyIFNmZGM6IGFueTtcclxuXHJcbnR5cGUgQ2FudmFzUmVzcG9uc2UgPSB7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgcmVzcG9uc2VIZWFkZXJzOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDogYW55O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhzOiBzdHJpbmcpIHtcclxuICBjb25zdCBoZWFkZXJzOiBIdHRwUmVxdWVzdFsnaGVhZGVycyddID0ge307XHJcbiAgZm9yIChjb25zdCBsaW5lIG9mIGhzLnNwbGl0KC9cXG4vKSkge1xyXG4gICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccyo6XFxzKi8pO1xyXG4gICAgaGVhZGVyc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiBoZWFkZXJzO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzQ2FudmFzUmVxdWVzdChcclxuICBwYXJhbXM6IEh0dHBSZXF1ZXN0LFxyXG4gIHNpZ25lZFJlcXVlc3Q6IFNpZ25lZFJlcXVlc3RPYmplY3QsXHJcbiAgcmVxdWVzdEJvZHk6IHN0cmluZyxcclxuKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3M6IGFueSA9IHtcclxuICAgIGNsaWVudDogc2lnbmVkUmVxdWVzdC5jbGllbnQsXHJcbiAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QsXHJcbiAgICBkYXRhOiByZXF1ZXN0Qm9keSxcclxuICB9O1xyXG4gIGNvbnN0IHBhcmFtSGVhZGVycyA9IHBhcmFtcy5oZWFkZXJzO1xyXG4gIGlmIChwYXJhbUhlYWRlcnMpIHtcclxuICAgIHNldHRpbmdzLmhlYWRlcnMgPSB7fTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhwYXJhbUhlYWRlcnMpKSB7XHJcbiAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgc2V0dGluZ3MuY29udGVudFR5cGUgPSBwYXJhbUhlYWRlcnNbbmFtZV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0dGluZ3MuaGVhZGVyc1tuYW1lXSA9IHBhcmFtSGVhZGVyc1tuYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBkYXRhID0gYXdhaXQgbmV3IFByb21pc2U8Q2FudmFzUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNldHRpbmdzLnN1Y2Nlc3MgPSByZXNvbHZlO1xyXG4gICAgc2V0dGluZ3MuZmFpbHVyZSA9IHJlamVjdDtcclxuICAgIFNmZGMuY2FudmFzLmNsaWVudC5hamF4KHBhcmFtcy51cmwsIHNldHRpbmdzKTtcclxuICB9KTtcclxuICBjb25zdCBoZWFkZXJzID0gcGFyc2VIZWFkZXJzKGRhdGEucmVzcG9uc2VIZWFkZXJzKTtcclxuICBsZXQgcmVzcG9uc2VCb2R5ID0gZGF0YS5wYXlsb2FkO1xyXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VCb2R5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmVzcG9uc2VCb2R5ID0gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VCb2R5KTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXR1c0NvZGU6IGRhdGEuc3RhdHVzLFxyXG4gICAgaGVhZGVycyxcclxuICAgIGJvZHk6IHJlc3BvbnNlQm9keSBhcyBzdHJpbmcsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChzaWduZWRSZXF1ZXN0OiBTaWduZWRSZXF1ZXN0T2JqZWN0KSB7XHJcbiAgcmV0dXJuIChwYXJhbXM6IEh0dHBSZXF1ZXN0KSA9PiB7XHJcbiAgICBjb25zdCBidWY6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgVHJhbnNmb3JtKHtcclxuICAgICAgdHJhbnNmb3JtKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spIHtcclxuICAgICAgICBidWYucHVzaCh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnID8gY2h1bmsgOiBjaHVuay50b1N0cmluZygndXRmOCcpKTtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9LFxyXG4gICAgICBmbHVzaCgpIHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYm9keSA9IGJ1Zi5qb2luKCcnKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvY2Vzc0NhbnZhc1JlcXVlc3QoXHJcbiAgICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICAgICAgc2lnbmVkUmVxdWVzdCxcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzdHJlYW0uZW1pdCgncmVzcG9uc2UnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICBzdHJlYW0uZW1pdCgnY29tcGxldGUnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICBzdHJlYW0ucHVzaChyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICAgIHN0cmVhbS5wdXNoKG51bGwpO1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChwYXJhbXMuYm9keSkge1xyXG4gICAgICBzdHJlYW0uZW5kKHBhcmFtcy5ib2R5KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJlYW07XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN1cHBvcnRlZDogdHlwZW9mIFNmZGMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBTZmRjLmNhbnZhcyAhPT0gJ3VuZGVmaW5lZCcsXHJcbiAgY3JlYXRlUmVxdWVzdCxcclxufTtcclxuIl19