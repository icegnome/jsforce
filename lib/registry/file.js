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

exports.FileRegistry = void 0;

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _base = require("./base");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 *
 */
function getDefaultConfigFilePath() {
  var homeDir = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

  if (!homeDir) {
    throw new Error('cannot find user home directory to store configuration files');
  }

  return _path["default"].join(homeDir, '.jsforce', 'config.json');
}
/**
 *
 */


var FileRegistry = /*#__PURE__*/function (_BaseRegistry) {
  (0, _inherits2["default"])(FileRegistry, _BaseRegistry);

  var _super = _createSuper(FileRegistry);

  function FileRegistry(_ref) {
    var _this;

    var configFilePath = _ref.configFilePath;
    (0, _classCallCheck2["default"])(this, FileRegistry);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_configFilePath", void 0);
    _this._configFilePath = configFilePath || getDefaultConfigFilePath();

    try {
      var data = _fs["default"].readFileSync(_this._configFilePath, 'utf-8');

      _this._registryConfig = JSON.parse(data);
    } catch (e) {//
    }

    return _this;
  }

  (0, _createClass2["default"])(FileRegistry, [{
    key: "_saveConfig",
    value: function _saveConfig() {
      var data = (0, _stringify["default"])(this._registryConfig, null, 4);

      try {
        _fs["default"].writeFileSync(this._configFilePath, data);

        _fs["default"].chmodSync(this._configFilePath, '600');
      } catch (e) {
        var configDir = _path["default"].dirname(this._configFilePath);

        _fs["default"].mkdirSync(configDir);

        _fs["default"].chmodSync(configDir, '700');

        _fs["default"].writeFileSync(this._configFilePath, data);

        _fs["default"].chmodSync(this._configFilePath, '600');
      }
    }
  }]);
  return FileRegistry;
}(_base.BaseRegistry);

exports.FileRegistry = FileRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS9maWxlLnRzIl0sIm5hbWVzIjpbImdldERlZmF1bHRDb25maWdGaWxlUGF0aCIsImhvbWVEaXIiLCJwcm9jZXNzIiwiZW52IiwicGxhdGZvcm0iLCJFcnJvciIsInBhdGgiLCJqb2luIiwiRmlsZVJlZ2lzdHJ5IiwiY29uZmlnRmlsZVBhdGgiLCJfY29uZmlnRmlsZVBhdGgiLCJkYXRhIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJfcmVnaXN0cnlDb25maWciLCJKU09OIiwicGFyc2UiLCJlIiwid3JpdGVGaWxlU3luYyIsImNobW9kU3luYyIsImNvbmZpZ0RpciIsImRpcm5hbWUiLCJta2RpclN5bmMiLCJCYXNlUmVnaXN0cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLHdCQUFULEdBQW9DO0FBQ2xDLE1BQU1DLE9BQU8sR0FDWEMsT0FBTyxDQUFDQyxHQUFSLENBQVlELE9BQU8sQ0FBQ0UsUUFBUixLQUFxQixPQUFyQixHQUErQixhQUEvQixHQUErQyxNQUEzRCxDQURGOztBQUVBLE1BQUksQ0FBQ0gsT0FBTCxFQUFjO0FBQ1osVUFBTSxJQUFJSSxLQUFKLENBQ0osOERBREksQ0FBTjtBQUdEOztBQUNELFNBQU9DLGlCQUFLQyxJQUFMLENBQVVOLE9BQVYsRUFBbUIsVUFBbkIsRUFBK0IsYUFBL0IsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7SUFDYU8sWTs7Ozs7QUFHWCw4QkFBNkQ7QUFBQTs7QUFBQSxRQUEvQ0MsY0FBK0MsUUFBL0NBLGNBQStDO0FBQUE7QUFDM0Q7QUFEMkQ7QUFFM0QsVUFBS0MsZUFBTCxHQUF1QkQsY0FBYyxJQUFJVCx3QkFBd0IsRUFBakU7O0FBQ0EsUUFBSTtBQUNGLFVBQUlXLElBQUksR0FBR0MsZUFBR0MsWUFBSCxDQUFnQixNQUFLSCxlQUFyQixFQUFzQyxPQUF0QyxDQUFYOztBQUNBLFlBQUtJLGVBQUwsR0FBdUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxJQUFYLENBQXZCO0FBQ0QsS0FIRCxDQUdFLE9BQU9NLENBQVAsRUFBVSxDQUNWO0FBQ0Q7O0FBUjBEO0FBUzVEOzs7O2tDQUVhO0FBQ1osVUFBTU4sSUFBSSxHQUFHLDJCQUFlLEtBQUtHLGVBQXBCLEVBQXFDLElBQXJDLEVBQTJDLENBQTNDLENBQWI7O0FBQ0EsVUFBSTtBQUNGRix1QkFBR00sYUFBSCxDQUFpQixLQUFLUixlQUF0QixFQUF1Q0MsSUFBdkM7O0FBQ0FDLHVCQUFHTyxTQUFILENBQWEsS0FBS1QsZUFBbEIsRUFBbUMsS0FBbkM7QUFDRCxPQUhELENBR0UsT0FBT08sQ0FBUCxFQUFVO0FBQ1YsWUFBTUcsU0FBUyxHQUFHZCxpQkFBS2UsT0FBTCxDQUFhLEtBQUtYLGVBQWxCLENBQWxCOztBQUNBRSx1QkFBR1UsU0FBSCxDQUFhRixTQUFiOztBQUNBUix1QkFBR08sU0FBSCxDQUFhQyxTQUFiLEVBQXdCLEtBQXhCOztBQUNBUix1QkFBR00sYUFBSCxDQUFpQixLQUFLUixlQUF0QixFQUF1Q0MsSUFBdkM7O0FBQ0FDLHVCQUFHTyxTQUFILENBQWEsS0FBS1QsZUFBbEIsRUFBbUMsS0FBbkM7QUFDRDtBQUNGOzs7RUExQitCYSxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBCYXNlUmVnaXN0cnkgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXREZWZhdWx0Q29uZmlnRmlsZVBhdGgoKSB7XHJcbiAgY29uc3QgaG9tZURpciA9XHJcbiAgICBwcm9jZXNzLmVudltwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gJ1VTRVJQUk9GSUxFJyA6ICdIT01FJ107XHJcbiAgaWYgKCFob21lRGlyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICdjYW5ub3QgZmluZCB1c2VyIGhvbWUgZGlyZWN0b3J5IHRvIHN0b3JlIGNvbmZpZ3VyYXRpb24gZmlsZXMnLFxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIHBhdGguam9pbihob21lRGlyLCAnLmpzZm9yY2UnLCAnY29uZmlnLmpzb24nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmlsZVJlZ2lzdHJ5IGV4dGVuZHMgQmFzZVJlZ2lzdHJ5IHtcclxuICBfY29uZmlnRmlsZVBhdGg6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoeyBjb25maWdGaWxlUGF0aCB9OiB7IGNvbmZpZ0ZpbGVQYXRoPzogc3RyaW5nIH0pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9jb25maWdGaWxlUGF0aCA9IGNvbmZpZ0ZpbGVQYXRoIHx8IGdldERlZmF1bHRDb25maWdGaWxlUGF0aCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmModGhpcy5fY29uZmlnRmlsZVBhdGgsICd1dGYtOCcpO1xyXG4gICAgICB0aGlzLl9yZWdpc3RyeUNvbmZpZyA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2F2ZUNvbmZpZygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLl9yZWdpc3RyeUNvbmZpZywgbnVsbCwgNCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHRoaXMuX2NvbmZpZ0ZpbGVQYXRoLCBkYXRhKTtcclxuICAgICAgZnMuY2htb2RTeW5jKHRoaXMuX2NvbmZpZ0ZpbGVQYXRoLCAnNjAwJyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZ0RpciA9IHBhdGguZGlybmFtZSh0aGlzLl9jb25maWdGaWxlUGF0aCk7XHJcbiAgICAgIGZzLm1rZGlyU3luYyhjb25maWdEaXIpO1xyXG4gICAgICBmcy5jaG1vZFN5bmMoY29uZmlnRGlyLCAnNzAwJyk7XHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmModGhpcy5fY29uZmlnRmlsZVBhdGgsIGRhdGEpO1xyXG4gICAgICBmcy5jaG1vZFN5bmModGhpcy5fY29uZmlnRmlsZVBhdGgsICc2MDAnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19