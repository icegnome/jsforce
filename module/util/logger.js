"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getLogger = getLogger;
exports.Logger = exports.LogLevels = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

/**
 *
 */
var LogLevels = {
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  FATAL: 5,
  NONE: 6
};
exports.LogLevels = LogLevels;
var LogLevelLabels = ['', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'NONE'];

var globalLogLevelConfig = function () {
  var globalLogLevelStr = process.env.JSFORCE_LOG_LEVEL || global.__JSFORCE_LOG_LEVEL__ || 'NONE';

  if (/^(DEBUG|INFO|WARN|ERROR|FATAL|NONE)$/i.test(globalLogLevelStr)) {
    return {
      '*': globalLogLevelStr
    };
  }

  try {
    return JSON.parse(globalLogLevelStr);
  } catch (e) {
    return {
      '*': 'NONE'
    };
  }
}();

function getModuleLogLevel(logLevelConfig, moduleName) {
  var logLevel = logLevelConfig[moduleName] || logLevelConfig['*'];
  return typeof logLevel === 'number' ? logLevel : LogLevels[logLevel] || LogLevels.NONE;
}
/**
 *
 */


var Logger = /*#__PURE__*/function () {
  function Logger(moduleName) {
    var logLevelConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalLogLevelConfig;
    (0, _classCallCheck2["default"])(this, Logger);
    (0, _defineProperty2["default"])(this, "_moduleName", void 0);
    (0, _defineProperty2["default"])(this, "_logLevel", void 0);
    this._moduleName = moduleName;
    this._logLevel = typeof logLevelConfig === 'number' ? logLevelConfig : typeof logLevelConfig === 'string' ? LogLevels[logLevelConfig] || LogLevels.NONE : getModuleLogLevel(logLevelConfig, moduleName);
  }

  (0, _createClass2["default"])(Logger, [{
    key: "createInstance",
    value: function createInstance() {
      var logLevelConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._logLevel;
      return new Logger(this._moduleName, logLevelConfig);
    }
  }, {
    key: "setLogLevel",
    value: function setLogLevel(logLevel) {
      if (typeof logLevel === 'string') {
        this._logLevel = LogLevels[logLevel] || LogLevels.NONE;
      } else {
        this._logLevel = logLevel;
      }
    }
  }, {
    key: "log",
    value: function log(logLevel) {
      if (this._logLevel <= logLevel) {
        var _context, _context2;

        for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          messages[_key - 1] = arguments[_key];
        }

        var msgs = (0, _concat["default"])(_context = [(0, _concat["default"])(_context2 = "".concat(LogLevelLabels[logLevel], "\t[")).call(_context2, this._moduleName, "] ")]).call(_context, messages);

        if (logLevel < LogLevels.ERROR) {
          var _console;

          (_console = console).log.apply(_console, (0, _toConsumableArray2["default"])(msgs)); // eslint-disable-line no-console

        } else {
          var _console2;

          (_console2 = console).error.apply(_console2, (0, _toConsumableArray2["default"])(msgs)); // eslint-disable-line no-console

        }
      }
    }
  }, {
    key: "debug",
    value: function debug() {
      var _context3;

      for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        messages[_key2] = arguments[_key2];
      }

      this.log.apply(this, (0, _concat["default"])(_context3 = [LogLevels.DEBUG]).call(_context3, messages));
    }
  }, {
    key: "info",
    value: function info() {
      var _context4;

      for (var _len3 = arguments.length, messages = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        messages[_key3] = arguments[_key3];
      }

      this.log.apply(this, (0, _concat["default"])(_context4 = [LogLevels.INFO]).call(_context4, messages));
    }
  }, {
    key: "warn",
    value: function warn() {
      var _context5;

      for (var _len4 = arguments.length, messages = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        messages[_key4] = arguments[_key4];
      }

      this.log.apply(this, (0, _concat["default"])(_context5 = [LogLevels.WARN]).call(_context5, messages));
    }
  }, {
    key: "error",
    value: function error() {
      var _context6;

      for (var _len5 = arguments.length, messages = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        messages[_key5] = arguments[_key5];
      }

      this.log.apply(this, (0, _concat["default"])(_context6 = [LogLevels.ERROR]).call(_context6, messages));
    }
  }, {
    key: "fatal",
    value: function fatal() {
      var _context7;

      for (var _len6 = arguments.length, messages = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        messages[_key6] = arguments[_key6];
      }

      this.log.apply(this, (0, _concat["default"])(_context7 = [LogLevels.FATAL]).call(_context7, messages));
    }
  }]);
  return Logger;
}();

exports.Logger = Logger;
var loggers = {};
/**
 *
 */

function getLogger(moduleName) {
  var logger = loggers[moduleName] || new Logger(moduleName);
  loggers[moduleName] = logger;
  return logger;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2xvZ2dlci50cyJdLCJuYW1lcyI6WyJMb2dMZXZlbHMiLCJERUJVRyIsIklORk8iLCJXQVJOIiwiRVJST1IiLCJGQVRBTCIsIk5PTkUiLCJMb2dMZXZlbExhYmVscyIsImdsb2JhbExvZ0xldmVsQ29uZmlnIiwiZ2xvYmFsTG9nTGV2ZWxTdHIiLCJwcm9jZXNzIiwiZW52IiwiSlNGT1JDRV9MT0dfTEVWRUwiLCJnbG9iYWwiLCJfX0pTRk9SQ0VfTE9HX0xFVkVMX18iLCJ0ZXN0IiwiSlNPTiIsInBhcnNlIiwiZSIsImdldE1vZHVsZUxvZ0xldmVsIiwibG9nTGV2ZWxDb25maWciLCJtb2R1bGVOYW1lIiwibG9nTGV2ZWwiLCJMb2dnZXIiLCJfbW9kdWxlTmFtZSIsIl9sb2dMZXZlbCIsIm1lc3NhZ2VzIiwibXNncyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImxvZ2dlcnMiLCJnZXRMb2dnZXIiLCJsb2dnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsU0FBc0MsR0FBRztBQUNwREMsRUFBQUEsS0FBSyxFQUFFLENBRDZDO0FBRXBEQyxFQUFBQSxJQUFJLEVBQUUsQ0FGOEM7QUFHcERDLEVBQUFBLElBQUksRUFBRSxDQUg4QztBQUlwREMsRUFBQUEsS0FBSyxFQUFFLENBSjZDO0FBS3BEQyxFQUFBQSxLQUFLLEVBQUUsQ0FMNkM7QUFNcERDLEVBQUFBLElBQUksRUFBRTtBQU44QyxDQUEvQzs7QUFTUCxJQUFNQyxjQUFjLEdBQUcsQ0FBQyxFQUFELEVBQUssT0FBTCxFQUFjLE1BQWQsRUFBc0IsTUFBdEIsRUFBOEIsT0FBOUIsRUFBdUMsT0FBdkMsRUFBZ0QsTUFBaEQsQ0FBdkI7O0FBRUEsSUFBTUMsb0JBQW9CLEdBQUksWUFBTTtBQUNsQyxNQUFNQyxpQkFBaUIsR0FDckJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxpQkFBWixJQUNDQyxNQUFELENBQWdC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QixRQUE1QjtBQUNEOzs7NEJBRThCO0FBQUE7O0FBQUEseUNBQXRCQSxRQUFzQjtBQUF0QkEsUUFBQUEsUUFBc0I7QUFBQTs7QUFDN0IsV0FBS0csR0FBTCxrREFBUzdCLFNBQVMsQ0FBQ0ksS0FBbkIsbUJBQTZCc0IsUUFBN0I7QUFDRDs7OzRCQUU4QjtBQUFBOztBQUFBLHlDQUF0QkEsUUFBc0I7QUFBdEJBLFFBQUFBLFFBQXNCO0FBQUE7O0FBQzdCLFdBQUtHLEdBQUwsa0RBQVM3QixTQUFTLENBQUNLLEtBQW5CLG1CQUE2QnFCLFFBQTdCO0FBQ0Q7Ozs7OztBQUdILElBQU1LLE9BQW1DLEdBQUcsRUFBNUM7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsU0FBVCxDQUFtQlgsVUFBbkIsRUFBdUM7QUFDNUMsTUFBTVksTUFBTSxHQUFHRixPQUFPLENBQUNWLFVBQUQsQ0FBUCxJQUF1QixJQUFJRSxNQUFKLENBQVdGLFVBQVgsQ0FBdEM7QUFDQVUsRUFBQUEsT0FBTyxDQUFDVixVQUFELENBQVAsR0FBc0JZLE1BQXRCO0FBQ0EsU0FBT0EsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTG9nTGV2ZWxzOiB7IFtsZXZlbDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XHJcbiAgREVCVUc6IDEsXHJcbiAgSU5GTzogMixcclxuICBXQVJOOiAzLFxyXG4gIEVSUk9SOiA0LFxyXG4gIEZBVEFMOiA1LFxyXG4gIE5PTkU6IDYsXHJcbn07XHJcblxyXG5jb25zdCBMb2dMZXZlbExhYmVscyA9IFsnJywgJ0RFQlVHJywgJ0lORk8nLCAnV0FSTicsICdFUlJPUicsICdGQVRBTCcsICdOT05FJ107XHJcblxyXG5jb25zdCBnbG9iYWxMb2dMZXZlbENvbmZpZyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZ2xvYmFsTG9nTGV2ZWxTdHIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuSlNGT1JDRV9MT0dfTEVWRUwgfHxcclxuICAgIChnbG9iYWwgYXMgYW55KS5fX0pTRk9SQ0VfTE9HX0xFVkVMX18gfHxcclxuICAgICdOT05FJztcclxuICBpZiAoL14oREVCVUd8SU5GT3xXQVJOfEVSUk9SfEZBVEFMfE5PTkUpJC9pLnRlc3QoZ2xvYmFsTG9nTGV2ZWxTdHIpKSB7XHJcbiAgICByZXR1cm4geyAnKic6IGdsb2JhbExvZ0xldmVsU3RyIH07XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShnbG9iYWxMb2dMZXZlbFN0cik7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHsgJyonOiAnTk9ORScgfTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgdHlwZSBMb2dMZXZlbENvbmZpZyA9XHJcbiAgfCBzdHJpbmdcclxuICB8IG51bWJlclxyXG4gIHwgeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH07XHJcblxyXG5mdW5jdGlvbiBnZXRNb2R1bGVMb2dMZXZlbChcclxuICBsb2dMZXZlbENvbmZpZzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH0sXHJcbiAgbW9kdWxlTmFtZTogc3RyaW5nLFxyXG4pIHtcclxuICBjb25zdCBsb2dMZXZlbCA9IGxvZ0xldmVsQ29uZmlnW21vZHVsZU5hbWVdIHx8IGxvZ0xldmVsQ29uZmlnWycqJ107XHJcbiAgcmV0dXJuIHR5cGVvZiBsb2dMZXZlbCA9PT0gJ251bWJlcidcclxuICAgID8gbG9nTGV2ZWxcclxuICAgIDogTG9nTGV2ZWxzW2xvZ0xldmVsXSB8fCBMb2dMZXZlbHMuTk9ORTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuICBfbW9kdWxlTmFtZTogc3RyaW5nO1xyXG4gIF9sb2dMZXZlbDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG1vZHVsZU5hbWU6IHN0cmluZyxcclxuICAgIGxvZ0xldmVsQ29uZmlnOiBMb2dMZXZlbENvbmZpZyA9IGdsb2JhbExvZ0xldmVsQ29uZmlnLFxyXG4gICkge1xyXG4gICAgdGhpcy5fbW9kdWxlTmFtZSA9IG1vZHVsZU5hbWU7XHJcbiAgICB0aGlzLl9sb2dMZXZlbCA9XHJcbiAgICAgIHR5cGVvZiBsb2dMZXZlbENvbmZpZyA9PT0gJ251bWJlcidcclxuICAgICAgICA/IGxvZ0xldmVsQ29uZmlnXHJcbiAgICAgICAgOiB0eXBlb2YgbG9nTGV2ZWxDb25maWcgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgPyBMb2dMZXZlbHNbbG9nTGV2ZWxDb25maWddIHx8IExvZ0xldmVscy5OT05FXHJcbiAgICAgICAgOiBnZXRNb2R1bGVMb2dMZXZlbChsb2dMZXZlbENvbmZpZywgbW9kdWxlTmFtZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJbnN0YW5jZShsb2dMZXZlbENvbmZpZzogTG9nTGV2ZWxDb25maWcgPSB0aGlzLl9sb2dMZXZlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBMb2dnZXIodGhpcy5fbW9kdWxlTmFtZSwgbG9nTGV2ZWxDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9nTGV2ZWwobG9nTGV2ZWw6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBsb2dMZXZlbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5fbG9nTGV2ZWwgPSBMb2dMZXZlbHNbbG9nTGV2ZWxdIHx8IExvZ0xldmVscy5OT05FO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbG9nTGV2ZWwgPSBsb2dMZXZlbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZyhsb2dMZXZlbDogbnVtYmVyLCAuLi5tZXNzYWdlczogQXJyYXk8YW55Pikge1xyXG4gICAgaWYgKHRoaXMuX2xvZ0xldmVsIDw9IGxvZ0xldmVsKSB7XHJcbiAgICAgIGNvbnN0IG1zZ3MgPSBbXHJcbiAgICAgICAgYCR7TG9nTGV2ZWxMYWJlbHNbbG9nTGV2ZWxdfVxcdFske3RoaXMuX21vZHVsZU5hbWV9XSBgLFxyXG4gICAgICAgIC4uLm1lc3NhZ2VzLFxyXG4gICAgICBdO1xyXG4gICAgICBpZiAobG9nTGV2ZWwgPCBMb2dMZXZlbHMuRVJST1IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyguLi5tc2dzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvciguLi5tc2dzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlYnVnKC4uLm1lc3NhZ2VzOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLmxvZyhMb2dMZXZlbHMuREVCVUcsIC4uLm1lc3NhZ2VzKTtcclxuICB9XHJcblxyXG4gIGluZm8oLi4ubWVzc2FnZXM6IEFycmF5PGFueT4pIHtcclxuICAgIHRoaXMubG9nKExvZ0xldmVscy5JTkZPLCAuLi5tZXNzYWdlcyk7XHJcbiAgfVxyXG5cclxuICB3YXJuKC4uLm1lc3NhZ2VzOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLmxvZyhMb2dMZXZlbHMuV0FSTiwgLi4ubWVzc2FnZXMpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoLi4ubWVzc2FnZXM6IEFycmF5PGFueT4pIHtcclxuICAgIHRoaXMubG9nKExvZ0xldmVscy5FUlJPUiwgLi4ubWVzc2FnZXMpO1xyXG4gIH1cclxuXHJcbiAgZmF0YWwoLi4ubWVzc2FnZXM6IEFycmF5PGFueT4pIHtcclxuICAgIHRoaXMubG9nKExvZ0xldmVscy5GQVRBTCwgLi4ubWVzc2FnZXMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9nZ2VyczogeyBbbmFtZTogc3RyaW5nXTogTG9nZ2VyIH0gPSB7fTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2dlcihtb2R1bGVOYW1lOiBzdHJpbmcpIHtcclxuICBjb25zdCBsb2dnZXIgPSBsb2dnZXJzW21vZHVsZU5hbWVdIHx8IG5ldyBMb2dnZXIobW9kdWxlTmFtZSk7XHJcbiAgbG9nZ2Vyc1ttb2R1bGVOYW1lXSA9IGxvZ2dlcjtcclxuICByZXR1cm4gbG9nZ2VyO1xyXG59XHJcbiJdfQ==