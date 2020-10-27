"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.registerModule = registerModule;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = require("events");

var _VERSION = _interopRequireDefault(require("./VERSION"));

var _connection = _interopRequireDefault(require("./connection"));

var _oauth = _interopRequireDefault(require("./oauth2"));

var _date = _interopRequireDefault(require("./date"));

var _registry = _interopRequireDefault(require("./registry"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 *
 */
var JSforce = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2["default"])(JSforce, _EventEmitter);

  var _super = _createSuper(JSforce);

  function JSforce() {
    var _context;

    var _this;

    (0, _classCallCheck2["default"])(this, JSforce);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, (0, _concat["default"])(_context = [this]).call(_context, args));
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "VERSION", _VERSION["default"]);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "Connection", _connection["default"]);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "OAuth2", _oauth["default"]);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "SfDate", _date["default"]);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "Date", _date["default"]);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "registry", _registry["default"]);
    return _this;
  }

  return JSforce;
}(_events.EventEmitter);

function registerModule(name, factory) {
  jsforce.on('connection:new', function (conn) {
    var obj = undefined;
    (0, _defineProperty2["default"])(conn, name, {
      get: function get() {
        var _obj;

        obj = (_obj = obj) !== null && _obj !== void 0 ? _obj : factory(conn);
        return obj;
      },
      enumerable: true,
      configurable: true
    });
  });
}

var jsforce = new JSforce();
var _default = jsforce;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc2ZvcmNlLnRzIl0sIm5hbWVzIjpbIkpTZm9yY2UiLCJWRVJTSU9OIiwiQ29ubmVjdGlvbiIsIk9BdXRoMiIsIlNmRGF0ZSIsInJlZ2lzdHJ5IiwiRXZlbnRFbWl0dGVyIiwicmVnaXN0ZXJNb2R1bGUiLCJuYW1lIiwiZmFjdG9yeSIsImpzZm9yY2UiLCJvbiIsImNvbm4iLCJvYmoiLCJ1bmRlZmluZWQiLCJnZXQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtJQUNNQSxPOzs7Ozs7Ozs7Ozs7Ozs7OztnR0FDc0JDLG1CO21HQUNNQyxzQjsrRkFDUkMsaUI7K0ZBQ0FDLGdCOzZGQUNGQSxnQjtpR0FDREMsb0I7Ozs7O0VBTkRDLG9COztBQVNmLFNBQVNDLGNBQVQsQ0FDTEMsSUFESyxFQUVMQyxPQUZLLEVBR0w7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxFQUFSLENBQVcsZ0JBQVgsRUFBNkIsVUFBQ0MsSUFBRCxFQUFzQjtBQUNqRCxRQUFJQyxHQUFRLEdBQUdDLFNBQWY7QUFDQSxxQ0FBc0JGLElBQXRCLEVBQTRCSixJQUE1QixFQUFrQztBQUNoQ08sTUFBQUEsR0FEZ0MsaUJBQzFCO0FBQUE7O0FBQ0pGLFFBQUFBLEdBQUcsV0FBR0EsR0FBSCx1Q0FBVUosT0FBTyxDQUFDRyxJQUFELENBQXBCO0FBQ0EsZUFBT0MsR0FBUDtBQUNELE9BSitCO0FBS2hDRyxNQUFBQSxVQUFVLEVBQUUsSUFMb0I7QUFNaENDLE1BQUFBLFlBQVksRUFBRTtBQU5rQixLQUFsQztBQVFELEdBVkQ7QUFXRDs7QUFFRCxJQUFNUCxPQUFPLEdBQUcsSUFBSVYsT0FBSixFQUFoQjtlQUNlVSxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ2V2ZW50cyc7XHJcbmltcG9ydCBWRVJTSU9OIGZyb20gJy4vVkVSU0lPTic7XHJcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XHJcbmltcG9ydCBPQXV0aDIgZnJvbSAnLi9vYXV0aDInO1xyXG5pbXBvcnQgU2ZEYXRlIGZyb20gJy4vZGF0ZSc7XHJcbmltcG9ydCByZWdpc3RyeSwgeyBSZWdpc3RyeSB9IGZyb20gJy4vcmVnaXN0cnknO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBKU2ZvcmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICBWRVJTSU9OOiB0eXBlb2YgVkVSU0lPTiA9IFZFUlNJT047XHJcbiAgQ29ubmVjdGlvbjogdHlwZW9mIENvbm5lY3Rpb24gPSBDb25uZWN0aW9uO1xyXG4gIE9BdXRoMjogdHlwZW9mIE9BdXRoMiA9IE9BdXRoMjtcclxuICBTZkRhdGU6IHR5cGVvZiBTZkRhdGUgPSBTZkRhdGU7XHJcbiAgRGF0ZTogdHlwZW9mIFNmRGF0ZSA9IFNmRGF0ZTtcclxuICByZWdpc3RyeTogUmVnaXN0cnkgPSByZWdpc3RyeTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBmYWN0b3J5OiAoY29ubjogQ29ubmVjdGlvbikgPT4gYW55LFxyXG4pIHtcclxuICBqc2ZvcmNlLm9uKCdjb25uZWN0aW9uOm5ldycsIChjb25uOiBDb25uZWN0aW9uKSA9PiB7XHJcbiAgICBsZXQgb2JqOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29ubiwgbmFtZSwge1xyXG4gICAgICBnZXQoKSB7XHJcbiAgICAgICAgb2JqID0gb2JqID8/IGZhY3RvcnkoY29ubik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgfSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGpzZm9yY2UgPSBuZXcgSlNmb3JjZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBqc2ZvcmNlO1xyXG4iXX0=