"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StreamPromise = void 0;

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/wrapNativeSuper"));

var _stream = require("stream");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 *
 */
var StreamPromise = /*#__PURE__*/function (_Promise) {
  (0, _inherits2["default"])(StreamPromise, _Promise);

  var _super = _createSuper(StreamPromise);

  function StreamPromise() {
    (0, _classCallCheck2["default"])(this, StreamPromise);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(StreamPromise, [{
    key: "stream",
    value: function stream() {
      return new _stream.Duplex();
    } // dummy

  }], [{
    key: "create",
    value: function create(asyncFn) {
      var streamCallback = function streamCallback(_s) {};

      var streamReady = new _promise["default"](function (resolve) {
        streamCallback = resolve;
      });
      var promise = asyncFn(streamCallback);
      var streamPromise = new StreamPromise(function (resolve, reject) {
        promise.then(resolve, reject);
      });

      streamPromise.stream = function () {
        return new _stream.Transform({
          transform: function transform(data, encoding, cb) {
            (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
              var stream;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return streamReady;

                    case 2:
                      stream = _context.sent;
                      stream.write(data, encoding);
                      cb();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();
          },
          flush: function flush(cb) {
            var _this = this;

            (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
              var stream;
              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return streamReady;

                    case 2:
                      stream = _context2.sent;
                      stream.end();
                      stream.on('data', function (data) {
                        _this.push(data);
                      }).on('end', function () {
                        _this.push(null);

                        cb();
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))();
          }
        });
      };

      return streamPromise;
    }
  }]);
  return StreamPromise;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(_promise["default"]));

exports.StreamPromise = StreamPromise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3Byb21pc2UudHMiXSwibmFtZXMiOlsiU3RyZWFtUHJvbWlzZSIsIkR1cGxleCIsImFzeW5jRm4iLCJzdHJlYW1DYWxsYmFjayIsIl9zIiwic3RyZWFtUmVhZHkiLCJyZXNvbHZlIiwicHJvbWlzZSIsInN0cmVhbVByb21pc2UiLCJyZWplY3QiLCJ0aGVuIiwic3RyZWFtIiwiVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiZGF0YSIsImVuY29kaW5nIiwiY2IiLCJ3cml0ZSIsImZsdXNoIiwiZW5kIiwib24iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7OztBQVNBO0FBQ0E7QUFDQTtJQUNhQSxhOzs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxhQUFPLElBQUlDLGNBQUosRUFBUDtBQUNELEssQ0FBQzs7OzsyQkFFZUMsTyxFQUFrQztBQUNqRCxVQUFJQyxjQUFjLEdBQUcsd0JBQUNDLEVBQUQsRUFBYSxDQUFFLENBQXBDOztBQUNBLFVBQU1DLFdBQVcsR0FBRyx3QkFBb0IsVUFBQ0MsT0FBRCxFQUFhO0FBQ25ESCxRQUFBQSxjQUFjLEdBQUdHLE9BQWpCO0FBQ0QsT0FGbUIsQ0FBcEI7QUFHQSxVQUFNQyxPQUFPLEdBQUdMLE9BQU8sQ0FBQ0MsY0FBRCxDQUF2QjtBQUNBLFVBQU1LLGFBQWEsR0FBRyxJQUFJUixhQUFKLENBQXFCLFVBQUNNLE9BQUQsRUFBVUcsTUFBVixFQUFxQjtBQUM5REYsUUFBQUEsT0FBTyxDQUFDRyxJQUFSLENBQWFKLE9BQWIsRUFBc0JHLE1BQXRCO0FBQ0QsT0FGcUIsQ0FBdEI7O0FBR0FELE1BQUFBLGFBQWEsQ0FBQ0csTUFBZCxHQUF1QjtBQUFBLGVBQ3JCLElBQUlDLGlCQUFKLENBQWM7QUFDWkMsVUFBQUEsU0FEWSxxQkFDRkMsSUFERSxFQUNJQyxRQURKLEVBQ2NDLEVBRGQsRUFDa0I7QUFDNUIsMEZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDc0JYLFdBRHRCOztBQUFBO0FBQ09NLHNCQUFBQSxNQURQO0FBRUNBLHNCQUFBQSxNQUFNLENBQUNNLEtBQVAsQ0FBYUgsSUFBYixFQUFtQkMsUUFBbkI7QUFDQUMsc0JBQUFBLEVBQUU7O0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBRDtBQUtELFdBUFc7QUFRWkUsVUFBQUEsS0FSWSxpQkFRTkYsRUFSTSxFQVFGO0FBQUE7O0FBQ1IsMEZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDc0JYLFdBRHRCOztBQUFBO0FBQ09NLHNCQUFBQSxNQURQO0FBRUNBLHNCQUFBQSxNQUFNLENBQUNRLEdBQVA7QUFDQVIsc0JBQUFBLE1BQU0sQ0FDSFMsRUFESCxDQUNNLE1BRE4sRUFDYyxVQUFDTixJQUFELEVBQVU7QUFDcEIsd0JBQUEsS0FBSSxDQUFDTyxJQUFMLENBQVVQLElBQVY7QUFDRCx1QkFISCxFQUlHTSxFQUpILENBSU0sS0FKTixFQUlhLFlBQU07QUFDZix3QkFBQSxLQUFJLENBQUNDLElBQUwsQ0FBVSxJQUFWOztBQUNBTCx3QkFBQUEsRUFBRTtBQUNILHVCQVBIOztBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUQ7QUFZRDtBQXJCVyxTQUFkLENBRHFCO0FBQUEsT0FBdkI7O0FBd0JBLGFBQU9SLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgRHVwbGV4LCBUcmFuc2Zvcm0gfSBmcm9tICdzdHJlYW0nO1xyXG5cclxudHlwZSBTZXRTdHJlYW1GdW5jID0gKHN0cmVhbTogRHVwbGV4KSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHJlYW1Qcm9taXNlQnVpbGRlcjxUPiA9IChjYWxsYmFjazogU2V0U3RyZWFtRnVuYykgPT4gUHJvbWlzZTxUPjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmVhbVByb21pc2U8VD4gZXh0ZW5kcyBQcm9taXNlPFQ+IHtcclxuICBzdHJlYW0oKSB7XHJcbiAgICByZXR1cm4gbmV3IER1cGxleCgpO1xyXG4gIH0gLy8gZHVtbXlcclxuXHJcbiAgc3RhdGljIGNyZWF0ZTxUPihhc3luY0ZuOiBTdHJlYW1Qcm9taXNlQnVpbGRlcjxUPikge1xyXG4gICAgbGV0IHN0cmVhbUNhbGxiYWNrID0gKF9zOiBhbnkpID0+IHt9O1xyXG4gICAgY29uc3Qgc3RyZWFtUmVhZHkgPSBuZXcgUHJvbWlzZTxEdXBsZXg+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHN0cmVhbUNhbGxiYWNrID0gcmVzb2x2ZTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IGFzeW5jRm4oc3RyZWFtQ2FsbGJhY2spO1xyXG4gICAgY29uc3Qgc3RyZWFtUHJvbWlzZSA9IG5ldyBTdHJlYW1Qcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9KTtcclxuICAgIHN0cmVhbVByb21pc2Uuc3RyZWFtID0gKCkgPT5cclxuICAgICAgbmV3IFRyYW5zZm9ybSh7XHJcbiAgICAgICAgdHJhbnNmb3JtKGRhdGEsIGVuY29kaW5nLCBjYikge1xyXG4gICAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgc3RyZWFtUmVhZHk7XHJcbiAgICAgICAgICAgIHN0cmVhbS53cml0ZShkYXRhLCBlbmNvZGluZyk7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICB9KSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmx1c2goY2IpIHtcclxuICAgICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IHN0cmVhbVJlYWR5O1xyXG4gICAgICAgICAgICBzdHJlYW0uZW5kKCk7XHJcbiAgICAgICAgICAgIHN0cmVhbVxyXG4gICAgICAgICAgICAgIC5vbignZGF0YScsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAub24oJ2VuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaChudWxsKTtcclxuICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHN0cmVhbVByb21pc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==