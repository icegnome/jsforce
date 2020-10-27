"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.HttpProxyTransport = exports.ProxyTransport = exports.CanvasTransport = exports.JsonpTransport = exports["default"] = void 0;

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/get"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _request2 = _interopRequireDefault(require("request"));

var _promise2 = require("./util/promise");

var _jsonp = _interopRequireDefault(require("./browser/jsonp"));

var _canvas = _interopRequireDefault(require("./browser/canvas"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Normarize Salesforce API host name
 * @private
 */
function normalizeApiHost(apiHost) {
  var m = /(\w+)\.(visual\.force|salesforce)\.com$/.exec(apiHost);

  if (m) {
    return "".concat(m[1], ".salesforce.com");
  }

  return apiHost;
} // set options if defaults setting is available in request, which is not available in xhr module.


var request = _request2["default"].defaults ? function () {
  var defaults = {
    followAllRedirects: true
  };

  if (process.env.HTTP_PROXY) {
    defaults.proxy = process.env.HTTP_PROXY;
  }

  var timeout = (0, _parseInt2["default"])(process.env.HTTP_TIMEOUT || '0', 10);

  if (timeout) {
    defaults.timeout = timeout;
  }

  return _request2["default"].defaults(defaults);
}() : _request2["default"];
var baseUrl = typeof window !== 'undefined' && window.location && window.location.host ? "https://".concat(normalizeApiHost(window.location.host)) : process.env.LOCATION_BASE_URL || '';
/**
 * Class for HTTP request transport
 *
 * @class
 * @protected
 */

var Transport = /*#__PURE__*/function () {
  function Transport() {
    (0, _classCallCheck2["default"])(this, Transport);
  }

  (0, _createClass2["default"])(Transport, [{
    key: "httpRequest",

    /**
     */
    value: function httpRequest(params) {
      var _this = this;

      var streamBuilder = /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(setStream) {
          var createStream, stream;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  createStream = _this.getRequestStreamCreator();
                  stream = createStream(params);
                  setStream(stream);
                  return _context.abrupt("return", new _promise["default"](function (resolve, reject) {
                    stream.on('complete', function (res) {
                      return resolve(res);
                    }).on('error', reject);
                  }));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function streamBuilder(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      return _promise2.StreamPromise.create(streamBuilder);
    }
    /**
     * @protected
     */

  }, {
    key: "getRequestStreamCreator",
    value: function getRequestStreamCreator() {
      return function (params) {
        return request(params, function () {});
      };
    }
  }]);
  return Transport;
}();
/**
 * Class for JSONP request transport
 */


exports["default"] = Transport;

var JsonpTransport = /*#__PURE__*/function (_Transport) {
  (0, _inherits2["default"])(JsonpTransport, _Transport);

  var _super = _createSuper(JsonpTransport);

  function JsonpTransport(jsonpParam) {
    var _this2;

    (0, _classCallCheck2["default"])(this, JsonpTransport);
    _this2 = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "_jsonpParam", void 0);
    _this2._jsonpParam = jsonpParam;
    return _this2;
  }

  (0, _createClass2["default"])(JsonpTransport, [{
    key: "getRequestStreamCreator",
    value: function getRequestStreamCreator() {
      var jsonpRequest = _jsonp["default"].createRequest(this._jsonpParam);

      return function (params) {
        return jsonpRequest(params);
      };
    }
  }]);
  return JsonpTransport;
}(Transport);
/**
 * Class for Sfdc Canvas request transport
 */


exports.JsonpTransport = JsonpTransport;
(0, _defineProperty2["default"])(JsonpTransport, "supprted", _jsonp["default"].supported);

var CanvasTransport = /*#__PURE__*/function (_Transport2) {
  (0, _inherits2["default"])(CanvasTransport, _Transport2);

  var _super2 = _createSuper(CanvasTransport);

  function CanvasTransport(signedRequest) {
    var _this3;

    (0, _classCallCheck2["default"])(this, CanvasTransport);
    _this3 = _super2.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "_signedRequest", void 0);
    _this3._signedRequest = signedRequest;
    return _this3;
  }

  (0, _createClass2["default"])(CanvasTransport, [{
    key: "getRequestStreamCreator",
    value: function getRequestStreamCreator() {
      var canvasRequest = _canvas["default"].createRequest(this._signedRequest);

      return function (params) {
        return canvasRequest(params);
      };
    }
  }]);
  return CanvasTransport;
}(Transport);
/**
 * Class for HTTP request transport using AJAX proxy service
 */


exports.CanvasTransport = CanvasTransport;
(0, _defineProperty2["default"])(CanvasTransport, "supported", _canvas["default"].supported);

var ProxyTransport = /*#__PURE__*/function (_Transport3) {
  (0, _inherits2["default"])(ProxyTransport, _Transport3);

  var _super3 = _createSuper(ProxyTransport);

  function ProxyTransport(proxyUrl) {
    var _this4;

    (0, _classCallCheck2["default"])(this, ProxyTransport);
    _this4 = _super3.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "_proxyUrl", void 0);
    _this4._proxyUrl = proxyUrl;
    return _this4;
  }
  /**
   * Make HTTP request via AJAX proxy
   */


  (0, _createClass2["default"])(ProxyTransport, [{
    key: "httpRequest",
    value: function httpRequest(params) {
      var _context2, _context3;

      var url = params.url;

      if ((0, _indexOf["default"])(url).call(url, '/') === 0) {
        url = baseUrl + url;
      }

      var headers = {
        'salesforceproxy-endpoint': url
      };

      if (params.headers) {
        for (var _i = 0, _Object$keys = (0, _keys["default"])(params.headers); _i < _Object$keys.length; _i++) {
          var _name = _Object$keys[_i];
          headers[_name] = params.headers[_name];
        }
      }

      var nocache = (0, _concat["default"])(_context2 = "".concat((0, _now["default"])(), ".")).call(_context2, String(Math.random()).substring(2));
      var proxyParams = {
        method: params.method,
        url: (0, _concat["default"])(_context3 = "".concat(this._proxyUrl, "?")).call(_context3, nocache),
        headers: headers
      };

      if (params.body || params.body === '') {
        proxyParams.body = params.body;
      }

      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(ProxyTransport.prototype), "httpRequest", this).call(this, proxyParams);
    }
  }]);
  return ProxyTransport;
}(Transport);
/**
 * Class for HTTP request transport using a proxy server
 */


exports.ProxyTransport = ProxyTransport;

var HttpProxyTransport = /*#__PURE__*/function (_Transport4) {
  (0, _inherits2["default"])(HttpProxyTransport, _Transport4);

  var _super4 = _createSuper(HttpProxyTransport);

  function HttpProxyTransport(httpProxy) {
    var _this5;

    (0, _classCallCheck2["default"])(this, HttpProxyTransport);
    _this5 = _super4.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "_httpProxy", void 0);
    _this5._httpProxy = httpProxy;
    return _this5;
  }
  /**
   * Make HTTP request via proxy server
   */


  (0, _createClass2["default"])(HttpProxyTransport, [{
    key: "httpRequest",
    value: function httpRequest(params) {
      var proxyParams = (0, _assign["default"])({}, params, {
        proxy: this._httpProxy
      });
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(HttpProxyTransport.prototype), "httpRequest", this).call(this, proxyParams);
    }
  }]);
  return HttpProxyTransport;
}(Transport);

exports.HttpProxyTransport = HttpProxyTransport;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc3BvcnQudHMiXSwibmFtZXMiOlsibm9ybWFsaXplQXBpSG9zdCIsImFwaUhvc3QiLCJtIiwiZXhlYyIsInJlcXVlc3QiLCJfcmVxdWVzdCIsImRlZmF1bHRzIiwiZm9sbG93QWxsUmVkaXJlY3RzIiwicHJvY2VzcyIsImVudiIsIkhUVFBfUFJPWFkiLCJwcm94eSIsInRpbWVvdXQiLCJIVFRQX1RJTUVPVVQiLCJiYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0IiwiTE9DQVRJT05fQkFTRV9VUkwiLCJUcmFuc3BvcnQiLCJwYXJhbXMiLCJzdHJlYW1CdWlsZGVyIiwic2V0U3RyZWFtIiwiY3JlYXRlU3RyZWFtIiwiZ2V0UmVxdWVzdFN0cmVhbUNyZWF0b3IiLCJzdHJlYW0iLCJyZXNvbHZlIiwicmVqZWN0Iiwib24iLCJyZXMiLCJTdHJlYW1Qcm9taXNlIiwiY3JlYXRlIiwiSnNvbnBUcmFuc3BvcnQiLCJqc29ucFBhcmFtIiwiX2pzb25wUGFyYW0iLCJqc29ucFJlcXVlc3QiLCJqc29ucCIsImNyZWF0ZVJlcXVlc3QiLCJzdXBwb3J0ZWQiLCJDYW52YXNUcmFuc3BvcnQiLCJzaWduZWRSZXF1ZXN0IiwiX3NpZ25lZFJlcXVlc3QiLCJjYW52YXNSZXF1ZXN0IiwiY2FudmFzIiwiUHJveHlUcmFuc3BvcnQiLCJwcm94eVVybCIsIl9wcm94eVVybCIsInVybCIsImhlYWRlcnMiLCJuYW1lIiwibm9jYWNoZSIsIlN0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJwcm94eVBhcmFtcyIsIm1ldGhvZCIsImJvZHkiLCJIdHRwUHJveHlUcmFuc3BvcnQiLCJodHRwUHJveHkiLCJfaHR0cFByb3h5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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ZUMsS0FBZixDQUFoQjtBQUNEO0FBQ0Y7O0FBQ0QsVUFBTUMsT0FBTyxpREFBTSxzQkFBTix3QkFBb0JDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLEVBQUQsQ0FBTixDQUFzQkMsU0FBdEIsQ0FBZ0MsQ0FBaEMsQ0FBcEIsQ0FBYjtBQUNBLFVBQU1DLFdBQXdCLEdBQUc7QUFDL0JDLFFBQUFBLE1BQU0sRUFBRXBDLE1BQU0sQ0FBQ29DLE1BRGdCO0FBRS9CVCxRQUFBQSxHQUFHLGdEQUFLLEtBQUtELFNBQVYsd0JBQXVCSSxPQUF2QixDQUY0QjtBQUcvQkYsUUFBQUEsT0FBTyxFQUFQQTtBQUgrQixPQUFqQzs7QUFLQSxVQUFJNUIsTUFBTSxDQUFDcUMsSUFBUCxJQUFlckMsTUFBTSxDQUFDcUMsSUFBUCxLQUFnQixFQUFuQyxFQUF1QztBQUNyQ0YsUUFBQUEsV0FBVyxDQUFDRSxJQUFaLEdBQW1CckMsTUFBTSxDQUFDcUMsSUFBMUI7QUFDRDs7QUFDRCwrSEFBeUJGLFdBQXpCO0FBQ0Q7OztFQWxDaUNwQyxTO0FBcUNwQztBQUNBO0FBQ0E7Ozs7O0lBQ2F1QyxrQjs7Ozs7QUFHWCw4QkFBWUMsU0FBWixFQUErQjtBQUFBOztBQUFBO0FBQzdCO0FBRDZCO0FBRTdCLFdBQUtDLFVBQUwsR0FBa0JELFNBQWxCO0FBRjZCO0FBRzlCO0FBRUQ7QUFDRjtBQUNBOzs7OztnQ0FDY3ZDLE0sRUFBcUI7QUFDL0IsVUFBTW1DLFdBQVcsR0FBRyx3QkFBYyxFQUFkLEVBQWtCbkMsTUFBbEIsRUFBMEI7QUFBRVQsUUFBQUEsS0FBSyxFQUFFLEtBQUtpRDtBQUFkLE9BQTFCLENBQXBCO0FBQ0EsbUlBQXlCTCxXQUF6QjtBQUNEOzs7RUFkcUNwQyxTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyBEdXBsZXggfSBmcm9tICdzdHJlYW0nO1xyXG5pbXBvcnQgX3JlcXVlc3QgZnJvbSAncmVxdWVzdCc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgU3RyZWFtUHJvbWlzZSwgU3RyZWFtUHJvbWlzZUJ1aWxkZXIgfSBmcm9tICcuL3V0aWwvcHJvbWlzZSc7XHJcbmltcG9ydCBqc29ucCBmcm9tICcuL2Jyb3dzZXIvanNvbnAnO1xyXG5pbXBvcnQgY2FudmFzIGZyb20gJy4vYnJvd3Nlci9jYW52YXMnO1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hcml6ZSBTYWxlc2ZvcmNlIEFQSSBob3N0IG5hbWVcclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFwaUhvc3QoYXBpSG9zdDogc3RyaW5nKSB7XHJcbiAgY29uc3QgbSA9IC8oXFx3KylcXC4odmlzdWFsXFwuZm9yY2V8c2FsZXNmb3JjZSlcXC5jb20kLy5leGVjKGFwaUhvc3QpO1xyXG4gIGlmIChtKSB7XHJcbiAgICByZXR1cm4gYCR7bVsxXX0uc2FsZXNmb3JjZS5jb21gO1xyXG4gIH1cclxuICByZXR1cm4gYXBpSG9zdDtcclxufVxyXG5cclxuLy8gc2V0IG9wdGlvbnMgaWYgZGVmYXVsdHMgc2V0dGluZyBpcyBhdmFpbGFibGUgaW4gcmVxdWVzdCwgd2hpY2ggaXMgbm90IGF2YWlsYWJsZSBpbiB4aHIgbW9kdWxlLlxyXG5jb25zdCByZXF1ZXN0ID0gX3JlcXVlc3QuZGVmYXVsdHNcclxuICA/ICgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRzOiB7XHJcbiAgICAgICAgZm9sbG93QWxsUmVkaXJlY3RzPzogYm9vbGVhbjtcclxuICAgICAgICBwcm94eT86IHN0cmluZztcclxuICAgICAgICB0aW1lb3V0PzogbnVtYmVyO1xyXG4gICAgICB9ID0ge1xyXG4gICAgICAgIGZvbGxvd0FsbFJlZGlyZWN0czogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52LkhUVFBfUFJPWFkpIHtcclxuICAgICAgICBkZWZhdWx0cy5wcm94eSA9IHByb2Nlc3MuZW52LkhUVFBfUFJPWFk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGltZW91dCA9IHBhcnNlSW50KHByb2Nlc3MuZW52LkhUVFBfVElNRU9VVCB8fCAnMCcsIDEwKTtcclxuICAgICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgICBkZWZhdWx0cy50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX3JlcXVlc3QuZGVmYXVsdHMoZGVmYXVsdHMpO1xyXG4gICAgfSkoKVxyXG4gIDogX3JlcXVlc3Q7XHJcblxyXG5jb25zdCBiYXNlVXJsID1cclxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhvc3RcclxuICAgID8gYGh0dHBzOi8vJHtub3JtYWxpemVBcGlIb3N0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KX1gXHJcbiAgICA6IHByb2Nlc3MuZW52LkxPQ0FUSU9OX0JBU0VfVVJMIHx8ICcnO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBIVFRQIHJlcXVlc3QgdHJhbnNwb3J0XHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc3BvcnQge1xyXG4gIC8qKlxyXG4gICAqL1xyXG4gIGh0dHBSZXF1ZXN0KHBhcmFtczogSHR0cFJlcXVlc3QpOiBTdHJlYW1Qcm9taXNlPEh0dHBSZXNwb25zZT4ge1xyXG4gICAgY29uc3Qgc3RyZWFtQnVpbGRlcjogU3RyZWFtUHJvbWlzZUJ1aWxkZXI8SHR0cFJlc3BvbnNlPiA9IGFzeW5jIChcclxuICAgICAgc2V0U3RyZWFtLFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZVN0cmVhbSA9IHRoaXMuZ2V0UmVxdWVzdFN0cmVhbUNyZWF0b3IoKTtcclxuICAgICAgY29uc3Qgc3RyZWFtID0gY3JlYXRlU3RyZWFtKHBhcmFtcyk7XHJcbiAgICAgIHNldFN0cmVhbShzdHJlYW0pO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8SHR0cFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc3RyZWFtXHJcbiAgICAgICAgICAub24oJ2NvbXBsZXRlJywgKHJlczogSHR0cFJlc3BvbnNlKSA9PiByZXNvbHZlKHJlcykpXHJcbiAgICAgICAgICAub24oJ2Vycm9yJywgcmVqZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0cmVhbVByb21pc2UuY3JlYXRlKHN0cmVhbUJ1aWxkZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqL1xyXG4gIGdldFJlcXVlc3RTdHJlYW1DcmVhdG9yKCk6IChyZXE6IEh0dHBSZXF1ZXN0KSA9PiBEdXBsZXgge1xyXG4gICAgcmV0dXJuIChwYXJhbXMpID0+IChyZXF1ZXN0KHBhcmFtcywgKCkgPT4ge30pIGFzIGFueSkgYXMgRHVwbGV4O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBKU09OUCByZXF1ZXN0IHRyYW5zcG9ydFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEpzb25wVHJhbnNwb3J0IGV4dGVuZHMgVHJhbnNwb3J0IHtcclxuICBzdGF0aWMgc3VwcHJ0ZWQ6IGJvb2xlYW4gPSBqc29ucC5zdXBwb3J0ZWQ7XHJcbiAgX2pzb25wUGFyYW06IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoanNvbnBQYXJhbTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fanNvbnBQYXJhbSA9IGpzb25wUGFyYW07XHJcbiAgfVxyXG5cclxuICBnZXRSZXF1ZXN0U3RyZWFtQ3JlYXRvcigpOiAocmVxOiBIdHRwUmVxdWVzdCkgPT4gRHVwbGV4IHtcclxuICAgIGNvbnN0IGpzb25wUmVxdWVzdCA9IGpzb25wLmNyZWF0ZVJlcXVlc3QodGhpcy5fanNvbnBQYXJhbSk7XHJcbiAgICByZXR1cm4gKHBhcmFtcykgPT4ganNvbnBSZXF1ZXN0KHBhcmFtcyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIFNmZGMgQ2FudmFzIHJlcXVlc3QgdHJhbnNwb3J0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2FudmFzVHJhbnNwb3J0IGV4dGVuZHMgVHJhbnNwb3J0IHtcclxuICBzdGF0aWMgc3VwcG9ydGVkOiBib29sZWFuID0gY2FudmFzLnN1cHBvcnRlZDtcclxuICBfc2lnbmVkUmVxdWVzdDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzaWduZWRSZXF1ZXN0OiBhbnkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9zaWduZWRSZXF1ZXN0ID0gc2lnbmVkUmVxdWVzdDtcclxuICB9XHJcblxyXG4gIGdldFJlcXVlc3RTdHJlYW1DcmVhdG9yKCk6IChyZXE6IEh0dHBSZXF1ZXN0KSA9PiBEdXBsZXgge1xyXG4gICAgY29uc3QgY2FudmFzUmVxdWVzdCA9IGNhbnZhcy5jcmVhdGVSZXF1ZXN0KHRoaXMuX3NpZ25lZFJlcXVlc3QpO1xyXG4gICAgcmV0dXJuIChwYXJhbXMpID0+IGNhbnZhc1JlcXVlc3QocGFyYW1zKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgSFRUUCByZXF1ZXN0IHRyYW5zcG9ydCB1c2luZyBBSkFYIHByb3h5IHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm94eVRyYW5zcG9ydCBleHRlbmRzIFRyYW5zcG9ydCB7XHJcbiAgX3Byb3h5VXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3h5VXJsOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9wcm94eVVybCA9IHByb3h5VXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFrZSBIVFRQIHJlcXVlc3QgdmlhIEFKQVggcHJveHlcclxuICAgKi9cclxuICBodHRwUmVxdWVzdChwYXJhbXM6IEh0dHBSZXF1ZXN0KSB7XHJcbiAgICBsZXQgdXJsID0gcGFyYW1zLnVybDtcclxuICAgIGlmICh1cmwuaW5kZXhPZignLycpID09PSAwKSB7XHJcbiAgICAgIHVybCA9IGJhc2VVcmwgKyB1cmw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoZWFkZXJzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgICAgJ3NhbGVzZm9yY2Vwcm94eS1lbmRwb2ludCc6IHVybCxcclxuICAgIH07XHJcbiAgICBpZiAocGFyYW1zLmhlYWRlcnMpIHtcclxuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKHBhcmFtcy5oZWFkZXJzKSkge1xyXG4gICAgICAgIGhlYWRlcnNbbmFtZV0gPSBwYXJhbXMuaGVhZGVyc1tuYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgbm9jYWNoZSA9IGAke0RhdGUubm93KCl9LiR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnN1YnN0cmluZygyKX1gO1xyXG4gICAgY29uc3QgcHJveHlQYXJhbXM6IEh0dHBSZXF1ZXN0ID0ge1xyXG4gICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QsXHJcbiAgICAgIHVybDogYCR7dGhpcy5fcHJveHlVcmx9PyR7bm9jYWNoZX1gLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgfTtcclxuICAgIGlmIChwYXJhbXMuYm9keSB8fCBwYXJhbXMuYm9keSA9PT0gJycpIHtcclxuICAgICAgcHJveHlQYXJhbXMuYm9keSA9IHBhcmFtcy5ib2R5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyLmh0dHBSZXF1ZXN0KHByb3h5UGFyYW1zKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgSFRUUCByZXF1ZXN0IHRyYW5zcG9ydCB1c2luZyBhIHByb3h5IHNlcnZlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEh0dHBQcm94eVRyYW5zcG9ydCBleHRlbmRzIFRyYW5zcG9ydCB7XHJcbiAgX2h0dHBQcm94eTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihodHRwUHJveHk6IHN0cmluZykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2h0dHBQcm94eSA9IGh0dHBQcm94eTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2UgSFRUUCByZXF1ZXN0IHZpYSBwcm94eSBzZXJ2ZXJcclxuICAgKi9cclxuICBodHRwUmVxdWVzdChwYXJhbXM6IEh0dHBSZXF1ZXN0KSB7XHJcbiAgICBjb25zdCBwcm94eVBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcywgeyBwcm94eTogdGhpcy5faHR0cFByb3h5IH0pO1xyXG4gICAgcmV0dXJuIHN1cGVyLmh0dHBSZXF1ZXN0KHByb3h5UGFyYW1zKTtcclxuICB9XHJcbn1cclxuIl19