"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _stream = require("stream");

/**
 *
 */
var _index = 0;

function processJsonpRequest(_x, _x2, _x3) {
  return _processJsonpRequest.apply(this, arguments);
}

function _processJsonpRequest() {
  _processJsonpRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params, jsonpParam, timeout) {
    var _context2;

    var cbFuncName, callbacks, url, script, pid, res;
    return _regenerator["default"].wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(params.method.toUpperCase() !== 'GET')) {
              _context3.next = 2;
              break;
            }

            throw new Error('JSONP only supports GET request.');

          case 2:
            _index += 1;
            cbFuncName = "_jsforce_jsonpCallback_".concat(_index);
            callbacks = window;
            url = params.url;
            url += (0, _indexOf["default"])(url).call(url, '?') > 0 ? '&' : '?';
            url += (0, _concat["default"])(_context2 = "".concat(jsonpParam, "=")).call(_context2, cbFuncName);
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;

            if (document.documentElement) {
              document.documentElement.appendChild(script);
            }

            _context3.prev = 12;
            _context3.next = 15;
            return new _promise["default"](function (resolve, reject) {
              pid = (0, _setTimeout2["default"])(function () {
                reject(new Error('JSONP call time out.'));
              }, timeout);
              callbacks[cbFuncName] = resolve;
            });

          case 15:
            res = _context3.sent;
            return _context3.abrupt("return", {
              statusCode: 200,
              headers: {
                'content-type': 'application/json'
              },
              body: (0, _stringify["default"])(res)
            });

          case 17:
            _context3.prev = 17;
            clearTimeout(pid);

            if (document.documentElement) {
              document.documentElement.removeChild(script);
            }

            delete callbacks[cbFuncName];
            return _context3.finish(17);

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, null, [[12,, 17, 22]]);
  }));
  return _processJsonpRequest.apply(this, arguments);
}

function createRequest() {
  var jsonpParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'callback';
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;
  return function (params) {
    var stream = new _stream.Transform({
      transform: function transform(chunk, encoding, callback) {
        callback();
      },
      flush: function flush() {
        (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var response;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return processJsonpRequest(params, jsonpParam, timeout);

                case 2:
                  response = _context.sent;
                  stream.emit('response', response);
                  stream.emit('complete', response);
                  stream.push(response.body);
                  stream.push(null);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
    });
    stream.end();
    return stream;
  };
}

var _default = {
  supported: typeof window !== 'undefined' && typeof document !== 'undefined',
  createRequest: createRequest
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icm93c2VyL2pzb25wLnRzIl0sIm5hbWVzIjpbIl9pbmRleCIsInByb2Nlc3NKc29ucFJlcXVlc3QiLCJwYXJhbXMiLCJqc29ucFBhcmFtIiwidGltZW91dCIsIm1ldGhvZCIsInRvVXBwZXJDYXNlIiwiRXJyb3IiLCJjYkZ1bmNOYW1lIiwiY2FsbGJhY2tzIiwid2luZG93IiwidXJsIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInNyYyIsImRvY3VtZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVzb2x2ZSIsInJlamVjdCIsInBpZCIsInJlcyIsInN0YXR1c0NvZGUiLCJoZWFkZXJzIiwiYm9keSIsImNsZWFyVGltZW91dCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlUmVxdWVzdCIsInN0cmVhbSIsIlRyYW5zZm9ybSIsInRyYW5zZm9ybSIsImNodW5rIiwiZW5jb2RpbmciLCJjYWxsYmFjayIsImZsdXNoIiwicmVzcG9uc2UiLCJlbWl0IiwicHVzaCIsImVuZCIsInN1cHBvcnRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUhBO0FBQ0E7QUFDQTtBQUlBLElBQUlBLE1BQU0sR0FBRyxDQUFiOztTQUVlQyxtQjs7Ozs7dUdBQWYsa0JBQ0VDLE1BREYsRUFFRUMsVUFGRixFQUdFQyxPQUhGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUtNRixNQUFNLENBQUNHLE1BQVAsQ0FBY0MsV0FBZCxPQUFnQyxLQUx0QztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFNVSxJQUFJQyxLQUFKLENBQVUsa0NBQVYsQ0FOVjs7QUFBQTtBQVFFUCxZQUFBQSxNQUFNLElBQUksQ0FBVjtBQUNNUSxZQUFBQSxVQVRSLG9DQVMrQ1IsTUFUL0M7QUFVUVMsWUFBQUEsU0FWUixHQVV5QkMsTUFWekI7QUFXTUMsWUFBQUEsR0FYTixHQVdZVCxNQUFNLENBQUNTLEdBWG5CO0FBWUVBLFlBQUFBLEdBQUcsSUFBSSx5QkFBQUEsR0FBRyxNQUFILENBQUFBLEdBQUcsRUFBUyxHQUFULENBQUgsR0FBbUIsQ0FBbkIsR0FBdUIsR0FBdkIsR0FBNkIsR0FBcEM7QUFDQUEsWUFBQUEsR0FBRyxrREFBT1IsVUFBUCx3QkFBcUJLLFVBQXJCLENBQUg7QUFDTUksWUFBQUEsTUFkUixHQWNpQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBZGpCO0FBZUVGLFlBQUFBLE1BQU0sQ0FBQ0csSUFBUCxHQUFjLGlCQUFkO0FBQ0FILFlBQUFBLE1BQU0sQ0FBQ0ksR0FBUCxHQUFhTCxHQUFiOztBQUNBLGdCQUFJRSxRQUFRLENBQUNJLGVBQWIsRUFBOEI7QUFDNUJKLGNBQUFBLFFBQVEsQ0FBQ0ksZUFBVCxDQUF5QkMsV0FBekIsQ0FBcUNOLE1BQXJDO0FBQ0Q7O0FBbkJIO0FBQUE7QUFBQSxtQkFzQnNCLHdCQUFZLFVBQUNPLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNqREMsY0FBQUEsR0FBRyxHQUFHLDZCQUFXLFlBQU07QUFDckJELGdCQUFBQSxNQUFNLENBQUMsSUFBSWIsS0FBSixDQUFVLHNCQUFWLENBQUQsQ0FBTjtBQUNELGVBRkssRUFFSEgsT0FGRyxDQUFOO0FBR0FLLGNBQUFBLFNBQVMsQ0FBQ0QsVUFBRCxDQUFULEdBQXdCVyxPQUF4QjtBQUNELGFBTGlCLENBdEJ0Qjs7QUFBQTtBQXNCVUcsWUFBQUEsR0F0QlY7QUFBQSw4Q0E0Qlc7QUFDTEMsY0FBQUEsVUFBVSxFQUFFLEdBRFA7QUFFTEMsY0FBQUEsT0FBTyxFQUFFO0FBQUUsZ0NBQWdCO0FBQWxCLGVBRko7QUFHTEMsY0FBQUEsSUFBSSxFQUFFLDJCQUFlSCxHQUFmO0FBSEQsYUE1Qlg7O0FBQUE7QUFBQTtBQWtDSUksWUFBQUEsWUFBWSxDQUFDTCxHQUFELENBQVo7O0FBQ0EsZ0JBQUlSLFFBQVEsQ0FBQ0ksZUFBYixFQUE4QjtBQUM1QkosY0FBQUEsUUFBUSxDQUFDSSxlQUFULENBQXlCVSxXQUF6QixDQUFxQ2YsTUFBckM7QUFDRDs7QUFDRCxtQkFBT0gsU0FBUyxDQUFDRCxVQUFELENBQWhCO0FBdENKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUEwQ0EsU0FBU29CLGFBQVQsR0FHRTtBQUFBLE1BRkF6QixVQUVBLHVFQUZxQixVQUVyQjtBQUFBLE1BREFDLE9BQ0EsdUVBRGtCLEtBQ2xCO0FBQ0EsU0FBTyxVQUFDRixNQUFELEVBQXlCO0FBQzlCLFFBQU0yQixNQUFNLEdBQUcsSUFBSUMsaUJBQUosQ0FBYztBQUMzQkMsTUFBQUEsU0FEMkIscUJBQ2pCQyxLQURpQixFQUNWQyxRQURVLEVBQ0FDLFFBREEsRUFDVTtBQUNuQ0EsUUFBQUEsUUFBUTtBQUNULE9BSDBCO0FBSTNCQyxNQUFBQSxLQUoyQixtQkFJbkI7QUFDTixzRkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUN3QmxDLG1CQUFtQixDQUN4Q0MsTUFEd0MsRUFFeENDLFVBRndDLEVBR3hDQyxPQUh3QyxDQUQzQzs7QUFBQTtBQUNPZ0Msa0JBQUFBLFFBRFA7QUFNQ1Asa0JBQUFBLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLFVBQVosRUFBd0JELFFBQXhCO0FBQ0FQLGtCQUFBQSxNQUFNLENBQUNRLElBQVAsQ0FBWSxVQUFaLEVBQXdCRCxRQUF4QjtBQUNBUCxrQkFBQUEsTUFBTSxDQUFDUyxJQUFQLENBQVlGLFFBQVEsQ0FBQ1gsSUFBckI7QUFDQUksa0JBQUFBLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLElBQVo7O0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRDtBQVdEO0FBaEIwQixLQUFkLENBQWY7QUFrQkFULElBQUFBLE1BQU0sQ0FBQ1UsR0FBUDtBQUNBLFdBQU9WLE1BQVA7QUFDRCxHQXJCRDtBQXNCRDs7ZUFFYztBQUNiVyxFQUFBQSxTQUFTLEVBQUUsT0FBTzlCLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBT0csUUFBUCxLQUFvQixXQURuRDtBQUViZSxFQUFBQSxhQUFhLEVBQWJBO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnc3RyZWFtJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5sZXQgX2luZGV4ID0gMDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NKc29ucFJlcXVlc3QoXHJcbiAgcGFyYW1zOiBIdHRwUmVxdWVzdCxcclxuICBqc29ucFBhcmFtOiBzdHJpbmcsXHJcbiAgdGltZW91dDogbnVtYmVyLFxyXG4pIHtcclxuICBpZiAocGFyYW1zLm1ldGhvZC50b1VwcGVyQ2FzZSgpICE9PSAnR0VUJykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdKU09OUCBvbmx5IHN1cHBvcnRzIEdFVCByZXF1ZXN0LicpO1xyXG4gIH1cclxuICBfaW5kZXggKz0gMTtcclxuICBjb25zdCBjYkZ1bmNOYW1lID0gYF9qc2ZvcmNlX2pzb25wQ2FsbGJhY2tfJHtfaW5kZXh9YDtcclxuICBjb25zdCBjYWxsYmFja3M6IGFueSA9IHdpbmRvdztcclxuICBsZXQgdXJsID0gcGFyYW1zLnVybDtcclxuICB1cmwgKz0gdXJsLmluZGV4T2YoJz8nKSA+IDAgPyAnJicgOiAnPyc7XHJcbiAgdXJsICs9IGAke2pzb25wUGFyYW19PSR7Y2JGdW5jTmFtZX1gO1xyXG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgc2NyaXB0LnNyYyA9IHVybDtcclxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICB9XHJcbiAgbGV0IHBpZDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBwaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdKU09OUCBjYWxsIHRpbWUgb3V0LicpKTtcclxuICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgIGNhbGxiYWNrc1tjYkZ1bmNOYW1lXSA9IHJlc29sdmU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IDIwMCxcclxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcyksXHJcbiAgICB9O1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBjbGVhclRpbWVvdXQocGlkKTtcclxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKHNjcmlwdCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUgY2FsbGJhY2tzW2NiRnVuY05hbWVdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChcclxuICBqc29ucFBhcmFtOiBzdHJpbmcgPSAnY2FsbGJhY2snLFxyXG4gIHRpbWVvdXQ6IG51bWJlciA9IDEwMDAwLFxyXG4pIHtcclxuICByZXR1cm4gKHBhcmFtczogSHR0cFJlcXVlc3QpID0+IHtcclxuICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBUcmFuc2Zvcm0oe1xyXG4gICAgICB0cmFuc2Zvcm0oY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZsdXNoKCkge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb2Nlc3NKc29ucFJlcXVlc3QoXHJcbiAgICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICAgICAganNvbnBQYXJhbSxcclxuICAgICAgICAgICAgdGltZW91dCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzdHJlYW0uZW1pdCgncmVzcG9uc2UnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICBzdHJlYW0uZW1pdCgnY29tcGxldGUnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICBzdHJlYW0ucHVzaChyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICAgIHN0cmVhbS5wdXNoKG51bGwpO1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHN0cmVhbS5lbmQoKTtcclxuICAgIHJldHVybiBzdHJlYW07XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN1cHBvcnRlZDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyxcclxuICBjcmVhdGVSZXF1ZXN0LFxyXG59O1xyXG4iXX0=