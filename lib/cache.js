"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = require("events");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Class for managing cache entry
 *
 * @private
 * @class
 * @constructor
 * @template T
 */
var CacheEntry = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2["default"])(CacheEntry, _EventEmitter);

  var _super = _createSuper(CacheEntry);

  function CacheEntry() {
    var _context;

    var _this;

    (0, _classCallCheck2["default"])(this, CacheEntry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, (0, _concat["default"])(_context = [this]).call(_context, args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_fetching", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_value", undefined);
    return _this;
  }

  (0, _createClass2["default"])(CacheEntry, [{
    key: "get",

    /**
     * Get value in the cache entry
     *
     * @param {() => Promise<T>} [callback] - Callback function callbacked the cache entry updated
     * @returns {T|undefined}
     */
    value: function get(callback) {
      if (callback) {
        var cb = callback;
        this.once('value', function (v) {
          return cb(v);
        });

        if (typeof this._value !== 'undefined') {
          this.emit('value', this._value);
        }
      }

      return this._value;
    }
    /**
     * Set value in the cache entry
     */

  }, {
    key: "set",
    value: function set(value) {
      this._value = value;
      this.emit('value', this._value);
    }
    /**
     * Clear cached value
     */

  }, {
    key: "clear",
    value: function clear() {
      this._fetching = false;
      this._value = undefined;
    }
  }]);
  return CacheEntry;
}(_events.EventEmitter);
/**
 * create and return cache key from namespace and serialized arguments.
 * @private
 */


function createCacheKey(namespace, args) {
  var _context2, _context3;

  return (0, _concat["default"])(_context2 = "".concat(namespace || '', "(")).call(_context2, (0, _map["default"])(_context3 = (0, _toConsumableArray2["default"])(args)).call(_context3, function (a) {
    return (0, _stringify["default"])(a);
  }).join(','), ")");
}

function generateKeyString(options, scope, args) {
  return typeof options.key === 'string' ? options.key : typeof options.key === 'function' ? options.key.apply(scope, args) : createCacheKey(options.namespace, args);
}
/**
 * Caching manager for async methods
 *
 * @class
 * @constructor
 */


var Cache = /*#__PURE__*/function () {
  function Cache() {
    (0, _classCallCheck2["default"])(this, Cache);
    (0, _defineProperty2["default"])(this, "_entries", {});
  }

  (0, _createClass2["default"])(Cache, [{
    key: "get",

    /**
     * retrive cache entry, or create if not exists.
     *
     * @param {String} [key] - Key of cache entry
     * @returns {CacheEntry}
     */
    value: function get(key) {
      if (this._entries[key]) {
        return this._entries[key];
      }

      var entry = new CacheEntry();
      this._entries[key] = entry;
      return entry;
    }
    /**
     * clear cache entries prefix matching given key
     */

  }, {
    key: "clear",
    value: function clear(key) {
      for (var _i = 0, _Object$keys = (0, _keys["default"])(this._entries); _i < _Object$keys.length; _i++) {
        var k = _Object$keys[_i];

        if (!key || (0, _indexOf["default"])(k).call(k, key) === 0) {
          this._entries[k].clear();
        }
      }
    }
    /**
     * Enable caching for async call fn to lookup the response cache first,
     * then invoke original if no cached value.
     */

  }, {
    key: "createCachedFunction",
    value: function createCachedFunction(fn, scope) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        strategy: 'NOCACHE'
      };
      var strategy = options.strategy;

      var $fn = function $fn() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var key = generateKeyString(options, scope, args);

        var entry = _this2.get(key);

        var executeFetch = /*#__PURE__*/function () {
          var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
            var result;
            return _regenerator["default"].wrap(function _callee$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    entry._fetching = true;
                    _context4.prev = 1;
                    _context4.next = 4;
                    return fn.apply(scope || _this2, args);

                  case 4:
                    result = _context4.sent;
                    entry.set({
                      error: undefined,
                      result: result
                    });
                    return _context4.abrupt("return", result);

                  case 9:
                    _context4.prev = 9;
                    _context4.t0 = _context4["catch"](1);
                    entry.set({
                      error: _context4.t0,
                      result: undefined
                    });
                    throw _context4.t0;

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee, null, [[1, 9]]);
          }));

          return function executeFetch() {
            return _ref.apply(this, arguments);
          };
        }();

        var value;

        switch (strategy) {
          case 'IMMEDIATE':
            value = entry.get();

            if (!value) {
              throw new Error('Function call result is not cached yet.');
            }

            if (value.error) {
              throw value.error;
            }

            return value.result;

          case 'HIT':
            return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
              return _regenerator["default"].wrap(function _callee2$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (entry._fetching) {
                        _context5.next = 3;
                        break;
                      }

                      _context5.next = 3;
                      return executeFetch();

                    case 3:
                      return _context5.abrupt("return", new _promise["default"](function (resolve, reject) {
                        entry.get(function (_ref3) {
                          var error = _ref3.error,
                              result = _ref3.result;
                          if (error) reject(error);else resolve(result);
                        });
                      }));

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee2);
            }))();

          case 'NOCACHE':
          default:
            return executeFetch();
        }
      };

      $fn.clear = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var key = generateKeyString(options, scope, args);

        _this2.clear(key);
      };

      return $fn;
    }
  }]);
  return Cache;
}();

exports["default"] = Cache;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS50cyJdLCJuYW1lcyI6WyJDYWNoZUVudHJ5IiwidW5kZWZpbmVkIiwiY2FsbGJhY2siLCJjYiIsIm9uY2UiLCJ2IiwiX3ZhbHVlIiwiZW1pdCIsInZhbHVlIiwiX2ZldGNoaW5nIiwiRXZlbnRFbWl0dGVyIiwiY3JlYXRlQ2FjaGVLZXkiLCJuYW1lc3BhY2UiLCJhcmdzIiwiYSIsImpvaW4iLCJnZW5lcmF0ZUtleVN0cmluZyIsIm9wdGlvbnMiLCJzY29wZSIsImtleSIsImFwcGx5IiwiQ2FjaGUiLCJfZW50cmllcyIsImVudHJ5IiwiayIsImNsZWFyIiwiZm4iLCJzdHJhdGVneSIsIiRmbiIsImdldCIsImV4ZWN1dGVGZXRjaCIsInJlc3VsdCIsInNldCIsImVycm9yIiwiRXJyb3IiLCJyZXNvbHZlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNNQSxVOzs7Ozs7Ozs7Ozs7Ozs7OztrR0FDaUIsSzsrRkFDVUMsUzs7Ozs7OztBQUUvQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7d0JBQ01DLFEsRUFBZ0Q7QUFDbEQsVUFBSUEsUUFBSixFQUFjO0FBQ1osWUFBTUMsRUFBRSxHQUFHRCxRQUFYO0FBQ0EsYUFBS0UsSUFBTCxDQUFVLE9BQVYsRUFBbUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFVRixFQUFFLENBQUNFLENBQUQsQ0FBWjtBQUFBLFNBQW5COztBQUNBLFlBQUksT0FBTyxLQUFLQyxNQUFaLEtBQXVCLFdBQTNCLEVBQXdDO0FBQ3RDLGVBQUtDLElBQUwsQ0FBVSxPQUFWLEVBQW1CLEtBQUtELE1BQXhCO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPLEtBQUtBLE1BQVo7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7Ozt3QkFDTUUsSyxFQUFzQjtBQUN4QixXQUFLRixNQUFMLEdBQWNFLEtBQWQ7QUFDQSxXQUFLRCxJQUFMLENBQVUsT0FBVixFQUFtQixLQUFLRCxNQUF4QjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7OzRCQUNVO0FBQ04sV0FBS0csU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtILE1BQUwsR0FBY0wsU0FBZDtBQUNEOzs7RUFuQ3lCUyxvQjtBQXNDNUI7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNDLGNBQVQsQ0FBd0JDLFNBQXhCLEVBQWtEQyxJQUFsRCxFQUF1RTtBQUFBOztBQUNyRSx1REFBVUQsU0FBUyxJQUFJLEVBQXZCLHdCQUE2QixxRUFBSUMsSUFBSixtQkFDdEIsVUFBQ0MsQ0FBRDtBQUFBLFdBQU8sMkJBQWVBLENBQWYsQ0FBUDtBQUFBLEdBRHNCLEVBRTFCQyxJQUYwQixDQUVyQixHQUZxQixDQUE3QjtBQUdEOztBQUVELFNBQVNDLGlCQUFULENBQ0VDLE9BREYsRUFFRUMsS0FGRixFQUdFTCxJQUhGLEVBSVU7QUFDUixTQUFPLE9BQU9JLE9BQU8sQ0FBQ0UsR0FBZixLQUF1QixRQUF2QixHQUNIRixPQUFPLENBQUNFLEdBREwsR0FFSCxPQUFPRixPQUFPLENBQUNFLEdBQWYsS0FBdUIsVUFBdkIsR0FDQUYsT0FBTyxDQUFDRSxHQUFSLENBQVlDLEtBQVosQ0FBa0JGLEtBQWxCLEVBQXlCTCxJQUF6QixDQURBLEdBRUFGLGNBQWMsQ0FBQ00sT0FBTyxDQUFDTCxTQUFULEVBQW9CQyxJQUFwQixDQUpsQjtBQUtEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFDcUJRLEs7Ozt1REFDb0MsRTs7Ozs7O0FBRXZEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTt3QkFDTUYsRyxFQUFhO0FBQ2YsVUFBSSxLQUFLRyxRQUFMLENBQWNILEdBQWQsQ0FBSixFQUF3QjtBQUN0QixlQUFPLEtBQUtHLFFBQUwsQ0FBY0gsR0FBZCxDQUFQO0FBQ0Q7O0FBQ0QsVUFBTUksS0FBSyxHQUFHLElBQUl2QixVQUFKLEVBQWQ7QUFDQSxXQUFLc0IsUUFBTCxDQUFjSCxHQUFkLElBQXFCSSxLQUFyQjtBQUNBLGFBQU9BLEtBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OzswQkFDUUosRyxFQUFjO0FBQ2xCLHNDQUFnQixzQkFBWSxLQUFLRyxRQUFqQixDQUFoQixrQ0FBNEM7QUFBdkMsWUFBTUUsQ0FBQyxtQkFBUDs7QUFDSCxZQUFJLENBQUNMLEdBQUQsSUFBUSx5QkFBQUssQ0FBQyxNQUFELENBQUFBLENBQUMsRUFBU0wsR0FBVCxDQUFELEtBQW1CLENBQS9CLEVBQWtDO0FBQ2hDLGVBQUtHLFFBQUwsQ0FBY0UsQ0FBZCxFQUFpQkMsS0FBakI7QUFDRDtBQUNGO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7Ozt5Q0FFSUMsRSxFQUNBUixLLEVBRW9CO0FBQUE7O0FBQUEsVUFEcEJELE9BQ29CLHVFQURNO0FBQUVVLFFBQUFBLFFBQVEsRUFBRTtBQUFaLE9BQ047QUFDcEIsVUFBTUEsUUFBUSxHQUFHVixPQUFPLENBQUNVLFFBQXpCOztBQUNBLFVBQU1DLEdBQVEsR0FBRyxTQUFYQSxHQUFXLEdBQW9CO0FBQUEsMkNBQWhCZixJQUFnQjtBQUFoQkEsVUFBQUEsSUFBZ0I7QUFBQTs7QUFDbkMsWUFBTU0sR0FBRyxHQUFHSCxpQkFBaUIsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQWlCTCxJQUFqQixDQUE3Qjs7QUFDQSxZQUFNVSxLQUFLLEdBQUcsTUFBSSxDQUFDTSxHQUFMLENBQVNWLEdBQVQsQ0FBZDs7QUFDQSxZQUFNVyxZQUFZO0FBQUEsbUdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CUCxvQkFBQUEsS0FBSyxDQUFDZCxTQUFOLEdBQWtCLElBQWxCO0FBRG1CO0FBQUE7QUFBQSwyQkFHSWlCLEVBQUUsQ0FBQ04sS0FBSCxDQUFTRixLQUFLLElBQUksTUFBbEIsRUFBd0JMLElBQXhCLENBSEo7O0FBQUE7QUFHWGtCLG9CQUFBQSxNQUhXO0FBSWpCUixvQkFBQUEsS0FBSyxDQUFDUyxHQUFOLENBQVU7QUFBRUMsc0JBQUFBLEtBQUssRUFBRWhDLFNBQVQ7QUFBb0I4QixzQkFBQUEsTUFBTSxFQUFOQTtBQUFwQixxQkFBVjtBQUppQixzREFLVkEsTUFMVTs7QUFBQTtBQUFBO0FBQUE7QUFPakJSLG9CQUFBQSxLQUFLLENBQUNTLEdBQU4sQ0FBVTtBQUFFQyxzQkFBQUEsS0FBSyxjQUFQO0FBQVNGLHNCQUFBQSxNQUFNLEVBQUU5QjtBQUFqQixxQkFBVjtBQVBpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFIOztBQUFBLDBCQUFaNkIsWUFBWTtBQUFBO0FBQUE7QUFBQSxXQUFsQjs7QUFXQSxZQUFJdEIsS0FBSjs7QUFDQSxnQkFBUW1CLFFBQVI7QUFDRSxlQUFLLFdBQUw7QUFDRW5CLFlBQUFBLEtBQUssR0FBR2UsS0FBSyxDQUFDTSxHQUFOLEVBQVI7O0FBQ0EsZ0JBQUksQ0FBQ3JCLEtBQUwsRUFBWTtBQUNWLG9CQUFNLElBQUkwQixLQUFKLENBQVUseUNBQVYsQ0FBTjtBQUNEOztBQUNELGdCQUFJMUIsS0FBSyxDQUFDeUIsS0FBVixFQUFpQjtBQUNmLG9CQUFNekIsS0FBSyxDQUFDeUIsS0FBWjtBQUNEOztBQUNELG1CQUFPekIsS0FBSyxDQUFDdUIsTUFBYjs7QUFDRixlQUFLLEtBQUw7QUFDRSxtQkFBTyw4RUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQ0RSLEtBQUssQ0FBQ2QsU0FETDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZCQUdFcUIsWUFBWSxFQUhkOztBQUFBO0FBQUEsd0RBS0Msd0JBQVksVUFBQ0ssT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDYix3QkFBQUEsS0FBSyxDQUFDTSxHQUFOLENBQVUsaUJBQXVCO0FBQUEsOEJBQXBCSSxLQUFvQixTQUFwQkEsS0FBb0I7QUFBQSw4QkFBYkYsTUFBYSxTQUFiQSxNQUFhO0FBQy9CLDhCQUFJRSxLQUFKLEVBQVdHLE1BQU0sQ0FBQ0gsS0FBRCxDQUFOLENBQVgsS0FDS0UsT0FBTyxDQUFDSixNQUFELENBQVA7QUFDTix5QkFIRDtBQUlELHVCQUxNLENBTEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBRCxJQUFQOztBQVlGLGVBQUssU0FBTDtBQUNBO0FBQ0UsbUJBQU9ELFlBQVksRUFBbkI7QUF6Qko7QUEyQkQsT0ExQ0Q7O0FBMkNBRixNQUFBQSxHQUFHLENBQUNILEtBQUosR0FBWSxZQUFvQjtBQUFBLDJDQUFoQlosSUFBZ0I7QUFBaEJBLFVBQUFBLElBQWdCO0FBQUE7O0FBQzlCLFlBQU1NLEdBQUcsR0FBR0gsaUJBQWlCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFpQkwsSUFBakIsQ0FBN0I7O0FBQ0EsUUFBQSxNQUFJLENBQUNZLEtBQUwsQ0FBV04sR0FBWDtBQUNELE9BSEQ7O0FBSUEsYUFBT1MsR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlIE1hbmFnZXMgYXN5bmNocm9ub3VzIG1ldGhvZCByZXNwb25zZSBjYWNoZVxyXG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cclxuICovXHJcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdldmVudHMnO1xyXG5cclxuLyoqXHJcbiAqIHR5cGUgZGVmXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYWNoaW5nT3B0aW9ucyA9IHtcclxuICBrZXk/OiBzdHJpbmcgfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiBzdHJpbmcpO1xyXG4gIG5hbWVzcGFjZT86IHN0cmluZztcclxuICBzdHJhdGVneTogJ05PQ0FDSEUnIHwgJ0hJVCcgfCAnSU1NRURJQVRFJztcclxufTtcclxuXHJcbnR5cGUgQ2FjaGVWYWx1ZTxUPiA9IHtcclxuICBlcnJvcj86IEVycm9yO1xyXG4gIHJlc3VsdDogVDtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIENhY2hlZEZ1bmN0aW9uPEZuPiA9IEZuICYgeyBjbGVhcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkIH07XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIG1hbmFnaW5nIGNhY2hlIGVudHJ5XHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBjbGFzc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHRlbXBsYXRlIFRcclxuICovXHJcbmNsYXNzIENhY2hlRW50cnk8VD4gZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIF9mZXRjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIF92YWx1ZTogQ2FjaGVWYWx1ZTxUPiB8IHZvaWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB2YWx1ZSBpbiB0aGUgY2FjaGUgZW50cnlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KCkgPT4gUHJvbWlzZTxUPn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxiYWNrZWQgdGhlIGNhY2hlIGVudHJ5IHVwZGF0ZWRcclxuICAgKiBAcmV0dXJucyB7VHx1bmRlZmluZWR9XHJcbiAgICovXHJcbiAgZ2V0KGNhbGxiYWNrPzogKHY6IFQpID0+IGFueSk6IENhY2hlVmFsdWU8VD4gfCB2b2lkIHtcclxuICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICBjb25zdCBjYiA9IGNhbGxiYWNrO1xyXG4gICAgICB0aGlzLm9uY2UoJ3ZhbHVlJywgKHY6IFQpID0+IGNiKHYpKTtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl92YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3ZhbHVlJywgdGhpcy5fdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdmFsdWUgaW4gdGhlIGNhY2hlIGVudHJ5XHJcbiAgICovXHJcbiAgc2V0KHZhbHVlOiBDYWNoZVZhbHVlPFQ+KSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbWl0KCd2YWx1ZScsIHRoaXMuX3ZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIGNhY2hlZCB2YWx1ZVxyXG4gICAqL1xyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5fZmV0Y2hpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIGNyZWF0ZSBhbmQgcmV0dXJuIGNhY2hlIGtleSBmcm9tIG5hbWVzcGFjZSBhbmQgc2VyaWFsaXplZCBhcmd1bWVudHMuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDYWNoZUtleShuYW1lc3BhY2U6IHN0cmluZyB8IHZvaWQsIGFyZ3M6IGFueVtdKTogc3RyaW5nIHtcclxuICByZXR1cm4gYCR7bmFtZXNwYWNlIHx8ICcnfSgke1suLi5hcmdzXVxyXG4gICAgLm1hcCgoYSkgPT4gSlNPTi5zdHJpbmdpZnkoYSkpXHJcbiAgICAuam9pbignLCcpfSlgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUtleVN0cmluZyhcclxuICBvcHRpb25zOiBDYWNoaW5nT3B0aW9ucyxcclxuICBzY29wZTogYW55LFxyXG4gIGFyZ3M6IGFueVtdLFxyXG4pOiBzdHJpbmcge1xyXG4gIHJldHVybiB0eXBlb2Ygb3B0aW9ucy5rZXkgPT09ICdzdHJpbmcnXHJcbiAgICA/IG9wdGlvbnMua2V5XHJcbiAgICA6IHR5cGVvZiBvcHRpb25zLmtleSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgPyBvcHRpb25zLmtleS5hcHBseShzY29wZSwgYXJncylcclxuICAgIDogY3JlYXRlQ2FjaGVLZXkob3B0aW9ucy5uYW1lc3BhY2UsIGFyZ3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2FjaGluZyBtYW5hZ2VyIGZvciBhc3luYyBtZXRob2RzXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlIHtcclxuICBwcml2YXRlIF9lbnRyaWVzOiB7IFtrZXk6IHN0cmluZ106IENhY2hlRW50cnk8YW55PiB9ID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHJpdmUgY2FjaGUgZW50cnksIG9yIGNyZWF0ZSBpZiBub3QgZXhpc3RzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldIC0gS2V5IG9mIGNhY2hlIGVudHJ5XHJcbiAgICogQHJldHVybnMge0NhY2hlRW50cnl9XHJcbiAgICovXHJcbiAgZ2V0KGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5fZW50cmllc1trZXldKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9lbnRyaWVzW2tleV07XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbnRyeSA9IG5ldyBDYWNoZUVudHJ5KCk7XHJcbiAgICB0aGlzLl9lbnRyaWVzW2tleV0gPSBlbnRyeTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNsZWFyIGNhY2hlIGVudHJpZXMgcHJlZml4IG1hdGNoaW5nIGdpdmVuIGtleVxyXG4gICAqL1xyXG4gIGNsZWFyKGtleT86IHN0cmluZykge1xyXG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX2VudHJpZXMpKSB7XHJcbiAgICAgIGlmICgha2V5IHx8IGsuaW5kZXhPZihrZXkpID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5fZW50cmllc1trXS5jbGVhcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGUgY2FjaGluZyBmb3IgYXN5bmMgY2FsbCBmbiB0byBsb29rdXAgdGhlIHJlc3BvbnNlIGNhY2hlIGZpcnN0LFxyXG4gICAqIHRoZW4gaW52b2tlIG9yaWdpbmFsIGlmIG5vIGNhY2hlZCB2YWx1ZS5cclxuICAgKi9cclxuICBjcmVhdGVDYWNoZWRGdW5jdGlvbjxGbiBleHRlbmRzIEZ1bmN0aW9uPihcclxuICAgIGZuOiBGbixcclxuICAgIHNjb3BlOiBhbnksXHJcbiAgICBvcHRpb25zOiBDYWNoaW5nT3B0aW9ucyA9IHsgc3RyYXRlZ3k6ICdOT0NBQ0hFJyB9LFxyXG4gICk6IENhY2hlZEZ1bmN0aW9uPEZuPiB7XHJcbiAgICBjb25zdCBzdHJhdGVneSA9IG9wdGlvbnMuc3RyYXRlZ3k7XHJcbiAgICBjb25zdCAkZm46IGFueSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBnZW5lcmF0ZUtleVN0cmluZyhvcHRpb25zLCBzY29wZSwgYXJncyk7XHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5nZXQoa2V5KTtcclxuICAgICAgY29uc3QgZXhlY3V0ZUZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGVudHJ5Ll9mZXRjaGluZyA9IHRydWU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuLmFwcGx5KHNjb3BlIHx8IHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgZW50cnkuc2V0KHsgZXJyb3I6IHVuZGVmaW5lZCwgcmVzdWx0IH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgZW50cnkuc2V0KHsgZXJyb3IsIHJlc3VsdDogdW5kZWZpbmVkIH0pO1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgdmFsdWU7XHJcbiAgICAgIHN3aXRjaCAoc3RyYXRlZ3kpIHtcclxuICAgICAgICBjYXNlICdJTU1FRElBVEUnOlxyXG4gICAgICAgICAgdmFsdWUgPSBlbnRyeS5nZXQoKTtcclxuICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBjYWxsIHJlc3VsdCBpcyBub3QgY2FjaGVkIHlldC4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh2YWx1ZS5lcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyB2YWx1ZS5lcnJvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXN1bHQ7XHJcbiAgICAgICAgY2FzZSAnSElUJzpcclxuICAgICAgICAgIHJldHVybiAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVudHJ5Ll9mZXRjaGluZykge1xyXG4gICAgICAgICAgICAgIC8vIG9ubHkgd2hlbiBubyBvdGhlciBjbGllbnQgaXMgY2FsbGluZyBmdW5jdGlvblxyXG4gICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGVGZXRjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgZW50cnkuZ2V0KCh7IGVycm9yLCByZXN1bHQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSkoKTtcclxuICAgICAgICBjYXNlICdOT0NBQ0hFJzpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIGV4ZWN1dGVGZXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgJGZuLmNsZWFyID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGdlbmVyYXRlS2V5U3RyaW5nKG9wdGlvbnMsIHNjb3BlLCBhcmdzKTtcclxuICAgICAgdGhpcy5jbGVhcihrZXkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAkZm4gYXMgQ2FjaGVkRnVuY3Rpb248Rm4+O1xyXG4gIH1cclxufVxyXG4iXX0=