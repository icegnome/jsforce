"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

/**
 * @file Represents Salesforce QuickAction
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

/**
 * type definitions
 */

/**
 * A class for quick action
 */
var QuickAction = /*#__PURE__*/function () {
  /**
   *
   */
  function QuickAction(conn, path) {
    (0, _classCallCheck2["default"])(this, QuickAction);
    (0, _defineProperty2["default"])(this, "_conn", void 0);
    (0, _defineProperty2["default"])(this, "_path", void 0);
    this._conn = conn;
    this._path = path;
  }
  /**
   * Describe the action's information (including layout, etc.)
   */


  (0, _createClass2["default"])(QuickAction, [{
    key: "describe",
    value: function () {
      var _describe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var url, body;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(this._path, "/describe");
                _context.next = 3;
                return this._conn.request(url);

              case 3:
                body = _context.sent;
                return _context.abrupt("return", body);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function describe() {
        return _describe.apply(this, arguments);
      }

      return describe;
    }()
    /**
     * Retrieve default field values in the action (for given record, if specified)
     */

  }, {
    key: "defaultValues",
    value: function () {
      var _defaultValues = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(contextId) {
        var url, body;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat(this._path, "/defaultValues");

                if (contextId) {
                  url += "/".concat(contextId);
                }

                _context2.next = 4;
                return this._conn.request(url);

              case 4:
                body = _context2.sent;
                return _context2.abrupt("return", body);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function defaultValues(_x) {
        return _defaultValues.apply(this, arguments);
      }

      return defaultValues;
    }()
    /**
     * Execute the action for given context Id and record information
     */

  }, {
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(contextId, record) {
        var requestBody, resBody;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                requestBody = {
                  contextId: contextId,
                  record: record
                };
                _context3.next = 3;
                return this._conn.requestPost(this._path, requestBody);

              case 3:
                resBody = _context3.sent;
                return _context3.abrupt("return", resBody);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function execute(_x2, _x3) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return QuickAction;
}();

exports["default"] = QuickAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWljay1hY3Rpb24udHMiXSwibmFtZXMiOlsiUXVpY2tBY3Rpb24iLCJjb25uIiwicGF0aCIsIl9jb25uIiwiX3BhdGgiLCJ1cmwiLCJyZXF1ZXN0IiwiYm9keSIsImNvbnRleHRJZCIsInJlY29yZCIsInJlcXVlc3RCb2R5IiwicmVxdWVzdFBvc3QiLCJyZXNCb2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQTtBQUNBO0FBQ0E7O0FBWUE7QUFDQTtBQUNBO0lBQ3FCQSxXO0FBSW5CO0FBQ0Y7QUFDQTtBQUNFLHVCQUFZQyxJQUFaLEVBQWlDQyxJQUFqQyxFQUErQztBQUFBO0FBQUE7QUFBQTtBQUM3QyxTQUFLQyxLQUFMLEdBQWFGLElBQWI7QUFDQSxTQUFLRyxLQUFMLEdBQWFGLElBQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7O0FBRVVHLGdCQUFBQSxHLGFBQVMsS0FBS0QsSzs7dUJBQ0QsS0FBS0QsS0FBTCxDQUFXRyxPQUFYLENBQW1CRCxHQUFuQixDOzs7QUFBYkUsZ0JBQUFBLEk7aURBQ0NBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVDtBQUNGO0FBQ0E7Ozs7OzJIQUNzQkMsUzs7Ozs7O0FBQ2RILGdCQUFBQSxHLGFBQVMsS0FBS0QsSzs7QUFDbEIsb0JBQUlJLFNBQUosRUFBZTtBQUNiSCxrQkFBQUEsR0FBRyxlQUFRRyxTQUFSLENBQUg7QUFDRDs7O3VCQUNrQixLQUFLTCxLQUFMLENBQVdHLE9BQVgsQ0FBbUJELEdBQW5CLEM7OztBQUFiRSxnQkFBQUEsSTtrREFDQ0EsSTs7Ozs7Ozs7Ozs7Ozs7OztBQUdUO0FBQ0Y7QUFDQTs7Ozs7cUhBQ2dCQyxTLEVBQW1CQyxNOzs7Ozs7QUFDekJDLGdCQUFBQSxXLEdBQWM7QUFBRUYsa0JBQUFBLFNBQVMsRUFBVEEsU0FBRjtBQUFhQyxrQkFBQUEsTUFBTSxFQUFOQTtBQUFiLGlCOzt1QkFDRSxLQUFLTixLQUFMLENBQVdRLFdBQVgsQ0FBdUIsS0FBS1AsS0FBNUIsRUFBbUNNLFdBQW5DLEM7OztBQUFoQkUsZ0JBQUFBLE87a0RBQ0NBLE8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGUgUmVwcmVzZW50cyBTYWxlc2ZvcmNlIFF1aWNrQWN0aW9uXHJcbiAqIEBhdXRob3IgU2hpbmljaGkgVG9taXRhIDxzaGluaWNoaS50b21pdGFAZ21haWwuY29tPlxyXG4gKi9cclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcclxuaW1wb3J0IHtcclxuICBEZXNjcmliZVF1aWNrQWN0aW9uRGV0YWlsUmVzdWx0LFxyXG4gIFJlY29yZCxcclxuICBPcHRpb25hbCxcclxuICBTY2hlbWEsXHJcbn0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG4vKipcclxuICogdHlwZSBkZWZpbml0aW9uc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgUXVpY2tBY3Rpb25EZWZhdWx0VmFsdWVzID0geyBbbmFtZTogc3RyaW5nXTogYW55IH07XHJcblxyXG5leHBvcnQgdHlwZSBRdWlja0FjdGlvblJlc3VsdCA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGZlZWRJdGVtSWRzOiBPcHRpb25hbDxzdHJpbmdbXT47XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjcmVhdGVkOiBib29sZWFuO1xyXG4gIGNvbnRleHRJZDogc3RyaW5nO1xyXG4gIGVycm9yczogT2JqZWN0W107XHJcbn07XHJcblxyXG4vKipcclxuICogQSBjbGFzcyBmb3IgcXVpY2sgYWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWlja0FjdGlvbjxTIGV4dGVuZHMgU2NoZW1hPiB7XHJcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XHJcbiAgX3BhdGg6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25uOiBDb25uZWN0aW9uPFM+LCBwYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xyXG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXNjcmliZSB0aGUgYWN0aW9uJ3MgaW5mb3JtYXRpb24gKGluY2x1ZGluZyBsYXlvdXQsIGV0Yy4pXHJcbiAgICovXHJcbiAgYXN5bmMgZGVzY3JpYmUoKTogUHJvbWlzZTxEZXNjcmliZVF1aWNrQWN0aW9uRGV0YWlsUmVzdWx0PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLl9wYXRofS9kZXNjcmliZWA7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5fY29ubi5yZXF1ZXN0KHVybCk7XHJcbiAgICByZXR1cm4gYm9keSBhcyBEZXNjcmliZVF1aWNrQWN0aW9uRGV0YWlsUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgZGVmYXVsdCBmaWVsZCB2YWx1ZXMgaW4gdGhlIGFjdGlvbiAoZm9yIGdpdmVuIHJlY29yZCwgaWYgc3BlY2lmaWVkKVxyXG4gICAqL1xyXG4gIGFzeW5jIGRlZmF1bHRWYWx1ZXMoY29udGV4dElkPzogc3RyaW5nKTogUHJvbWlzZTxRdWlja0FjdGlvbkRlZmF1bHRWYWx1ZXM+IHtcclxuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9wYXRofS9kZWZhdWx0VmFsdWVzYDtcclxuICAgIGlmIChjb250ZXh0SWQpIHtcclxuICAgICAgdXJsICs9IGAvJHtjb250ZXh0SWR9YDtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLl9jb25uLnJlcXVlc3QodXJsKTtcclxuICAgIHJldHVybiBib2R5IGFzIFF1aWNrQWN0aW9uRGVmYXVsdFZhbHVlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4ZWN1dGUgdGhlIGFjdGlvbiBmb3IgZ2l2ZW4gY29udGV4dCBJZCBhbmQgcmVjb3JkIGluZm9ybWF0aW9uXHJcbiAgICovXHJcbiAgYXN5bmMgZXhlY3V0ZShjb250ZXh0SWQ6IHN0cmluZywgcmVjb3JkOiBSZWNvcmQpOiBQcm9taXNlPFF1aWNrQWN0aW9uUmVzdWx0PiB7XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgY29udGV4dElkLCByZWNvcmQgfTtcclxuICAgIGNvbnN0IHJlc0JvZHkgPSBhd2FpdCB0aGlzLl9jb25uLnJlcXVlc3RQb3N0KHRoaXMuX3BhdGgsIHJlcXVlc3RCb2R5KTtcclxuICAgIHJldHVybiByZXNCb2R5IGFzIFF1aWNrQWN0aW9uUmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=