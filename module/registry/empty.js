"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.EmptyRegistry = void 0;

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _base = require("./base");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 *
 */
var EmptyRegistry = /*#__PURE__*/function (_BaseRegistry) {
  (0, _inherits2["default"])(EmptyRegistry, _BaseRegistry);

  var _super = _createSuper(EmptyRegistry);

  function EmptyRegistry() {
    (0, _classCallCheck2["default"])(this, EmptyRegistry);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EmptyRegistry, [{
    key: "_saveConfig",
    value: function _saveConfig() {// ignore all call requests
    }
  }]);
  return EmptyRegistry;
}(_base.BaseRegistry);

exports.EmptyRegistry = EmptyRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS9lbXB0eS50cyJdLCJuYW1lcyI6WyJFbXB0eVJlZ2lzdHJ5IiwiQmFzZVJlZ2lzdHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBQ2FBLGE7Ozs7Ozs7Ozs7OztrQ0FDRyxDQUNaO0FBQ0Q7OztFQUhnQ0Msa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUmVnaXN0cnkgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW1wdHlSZWdpc3RyeSBleHRlbmRzIEJhc2VSZWdpc3RyeSB7XHJcbiAgX3NhdmVDb25maWcoKSB7XHJcbiAgICAvLyBpZ25vcmUgYWxsIGNhbGwgcmVxdWVzdHNcclxuICB9XHJcbn1cclxuIl19