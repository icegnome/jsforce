"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.join");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; (0, _forEach["default"])(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context4; (0, _forEach["default"])(_context4 = ownKeys(Object(source))).call(_context4, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 *
 */

/**
 * Remote reference to record information
 */
var RecordReference = /*#__PURE__*/function () {
  /**
   *
   */
  function RecordReference(conn, type, id) {
    (0, _classCallCheck2["default"])(this, RecordReference);
    (0, _defineProperty3["default"])(this, "type", void 0);
    (0, _defineProperty3["default"])(this, "id", void 0);
    (0, _defineProperty3["default"])(this, "_conn", void 0);
    (0, _defineProperty3["default"])(this, "delete", this.destroy);
    (0, _defineProperty3["default"])(this, "del", this.destroy);
    this._conn = conn;
    this.type = type;
    this.id = id;
  }
  /**
   * Retrieve record field information
   */


  (0, _createClass2["default"])(RecordReference, [{
    key: "retrieve",
    value: function () {
      var _retrieve = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(options) {
        var rec;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._conn.retrieve(this.type, this.id, options);

              case 2:
                rec = _context.sent;
                return _context.abrupt("return", rec);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function retrieve(_x) {
        return _retrieve.apply(this, arguments);
      }

      return retrieve;
    }()
    /**
     * Update record field information
     */

  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(record, options) {
        var record_;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                record_ = _objectSpread(_objectSpread({}, record), {}, {
                  Id: this.id
                });
                return _context2.abrupt("return", this._conn.update(this.type, record_, options));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function update(_x2, _x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
    /**
     * Delete record field
     */

  }, {
    key: "destroy",
    value: function destroy(options) {
      return this._conn.destroy(this.type, this.id, options);
    }
    /**
     * Synonym of Record#destroy()
     */

  }, {
    key: "blob",

    /**
     * Get blob field as stream
     *
     * @param {String} fieldName - Blob field name
     * @returns {stream.Stream}
     */
    value: function blob(fieldName) {
      var url = [this._conn._baseUrl(), 'sobjects', this.type, this.id, fieldName].join('/');
      return this._conn.request(url).stream();
    }
  }]);
  return RecordReference;
}();

exports["default"] = RecordReference;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWNvcmQtcmVmZXJlbmNlLnRzIl0sIm5hbWVzIjpbIlJlY29yZFJlZmVyZW5jZSIsImNvbm4iLCJ0eXBlIiwiaWQiLCJkZXN0cm95IiwiX2Nvbm4iLCJvcHRpb25zIiwicmV0cmlldmUiLCJyZWMiLCJyZWNvcmQiLCJyZWNvcmRfIiwiSWQiLCJ1cGRhdGUiLCJmaWVsZE5hbWUiLCJ1cmwiLCJfYmFzZVVybCIsImpvaW4iLCJyZXF1ZXN0Iiwic3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVdBO0FBQ0E7QUFDQTtJQUNxQkEsZTtBQVVuQjtBQUNGO0FBQ0E7QUFDRSwyQkFBWUMsSUFBWixFQUFpQ0MsSUFBakMsRUFBMENDLEVBQTFDLEVBQXNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFnQzdDLEtBQUtDLE9BaEN3QztBQUFBLGtEQXFDaEQsS0FBS0EsT0FyQzJDO0FBQ3BELFNBQUtDLEtBQUwsR0FBYUosSUFBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7Ozs7cUhBQ2lCRyxPOzs7Ozs7O3VCQUNLLEtBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQixLQUFLTCxJQUF6QixFQUErQixLQUFLQyxFQUFwQyxFQUF3Q0csT0FBeEMsQzs7O0FBQVpFLGdCQUFBQSxHO2lEQUNDQSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7QUFDRjtBQUNBOzs7OztvSEFDZUMsTSxFQUFxQkgsTzs7Ozs7O0FBQzFCSSxnQkFBQUEsTyxtQ0FBZUQsTTtBQUFRRSxrQkFBQUEsRUFBRSxFQUFFLEtBQUtSOztrREFDL0IsS0FBS0UsS0FBTCxDQUFXTyxNQUFYLENBQWtCLEtBQUtWLElBQXZCLEVBQTZCUSxPQUE3QixFQUFzQ0osT0FBdEMsQzs7Ozs7Ozs7Ozs7Ozs7OztBQUdUO0FBQ0Y7QUFDQTs7Ozs0QkFDVUEsTyxFQUFzQjtBQUM1QixhQUFPLEtBQUtELEtBQUwsQ0FBV0QsT0FBWCxDQUFtQixLQUFLRixJQUF4QixFQUE4QixLQUFLQyxFQUFuQyxFQUF1Q0csT0FBdkMsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7OztBQVFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTt5QkFDT08sUyxFQUFtQjtBQUN0QixVQUFNQyxHQUFHLEdBQUcsQ0FDVixLQUFLVCxLQUFMLENBQVdVLFFBQVgsRUFEVSxFQUVWLFVBRlUsRUFHVixLQUFLYixJQUhLLEVBSVYsS0FBS0MsRUFKSyxFQUtWVSxTQUxVLEVBTVZHLElBTlUsQ0FNTCxHQU5LLENBQVo7QUFPQSxhQUFPLEtBQUtYLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQkgsR0FBbkIsRUFBd0JJLE1BQXhCLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcclxuaW1wb3J0IHtcclxuICBSZXRyaWV2ZU9wdGlvbnMsXHJcbiAgRG1sT3B0aW9ucyxcclxuICBTY2hlbWEsXHJcbiAgU09iamVjdE5hbWVzLFxyXG4gIFNPYmplY3RJbnB1dFJlY29yZCxcclxuICBTT2JqZWN0VXBkYXRlUmVjb3JkLFxyXG59IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuLyoqXHJcbiAqIFJlbW90ZSByZWZlcmVuY2UgdG8gcmVjb3JkIGluZm9ybWF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvcmRSZWZlcmVuY2U8XHJcbiAgUyBleHRlbmRzIFNjaGVtYSxcclxuICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxyXG4gIElucHV0UmVjb3JkIGV4dGVuZHMgU09iamVjdElucHV0UmVjb3JkPFMsIE4+ID0gU09iamVjdElucHV0UmVjb3JkPFMsIE4+LFxyXG4gIFJldHJpZXZlUmVjb3JkIGV4dGVuZHMgU09iamVjdFVwZGF0ZVJlY29yZDxTLCBOPiA9IFNPYmplY3RVcGRhdGVSZWNvcmQ8UywgTj5cclxuPiB7XHJcbiAgdHlwZTogTjtcclxuICBpZDogc3RyaW5nO1xyXG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4sIHR5cGU6IE4sIGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIHJlY29yZCBmaWVsZCBpbmZvcm1hdGlvblxyXG4gICAqL1xyXG4gIGFzeW5jIHJldHJpZXZlKG9wdGlvbnM/OiBSZXRyaWV2ZU9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHJlYyA9IGF3YWl0IHRoaXMuX2Nvbm4ucmV0cmlldmUodGhpcy50eXBlLCB0aGlzLmlkLCBvcHRpb25zKTtcclxuICAgIHJldHVybiByZWMgYXMgUmV0cmlldmVSZWNvcmQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgcmVjb3JkIGZpZWxkIGluZm9ybWF0aW9uXHJcbiAgICovXHJcbiAgYXN5bmMgdXBkYXRlKHJlY29yZDogSW5wdXRSZWNvcmQsIG9wdGlvbnM/OiBEbWxPcHRpb25zKSB7XHJcbiAgICBjb25zdCByZWNvcmRfID0geyAuLi5yZWNvcmQsIElkOiB0aGlzLmlkIH07XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi51cGRhdGUodGhpcy50eXBlLCByZWNvcmRfLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZSByZWNvcmQgZmllbGRcclxuICAgKi9cclxuICBkZXN0cm95KG9wdGlvbnM/OiBEbWxPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5kZXN0cm95KHRoaXMudHlwZSwgdGhpcy5pZCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIFJlY29yZCNkZXN0cm95KClcclxuICAgKi9cclxuICBkZWxldGUgPSB0aGlzLmRlc3Ryb3k7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN5bm9ueW0gb2YgUmVjb3JkI2Rlc3Ryb3koKVxyXG4gICAqL1xyXG4gIGRlbCA9IHRoaXMuZGVzdHJveTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGJsb2IgZmllbGQgYXMgc3RyZWFtXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGROYW1lIC0gQmxvYiBmaWVsZCBuYW1lXHJcbiAgICogQHJldHVybnMge3N0cmVhbS5TdHJlYW19XHJcbiAgICovXHJcbiAgYmxvYihmaWVsZE5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdXJsID0gW1xyXG4gICAgICB0aGlzLl9jb25uLl9iYXNlVXJsKCksXHJcbiAgICAgICdzb2JqZWN0cycsXHJcbiAgICAgIHRoaXMudHlwZSxcclxuICAgICAgdGhpcy5pZCxcclxuICAgICAgZmllbGROYW1lLFxyXG4gICAgXS5qb2luKCcvJyk7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0KHVybCkuc3RyZWFtKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==