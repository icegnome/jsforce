"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/wrapNativeSuper"));

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

require("regenerator-runtime/runtime");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _events = require("events");

var _xml2js = _interopRequireDefault(require("xml2js"));

var _logger = require("./util/logger");

var _promise = require("./util/promise");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

/** @private */
function parseJSON(str) {
  return JSON.parse(str);
}
/** @private */


function parseXML(_x) {
  return _parseXML.apply(this, arguments);
}
/** @private */


function _parseXML() {
  _parseXML = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(str) {
    return _regenerator["default"].wrap(function _callee5$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", _xml2js["default"].parseStringPromise(str, {
              explicitArray: false
            }));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee5);
  }));
  return _parseXML.apply(this, arguments);
}

function parseCSV(str) {
  // TODO csv impl
  // return require('./csv').parseCSV(str);
  return str;
}
/** @private */


function parseText(str) {
  return str;
}
/**
 * HTTP based API class with authorization hook
 */


var HttpApi = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2["default"])(HttpApi, _EventEmitter);

  var _super = _createSuper(HttpApi);

  function HttpApi(conn, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, HttpApi);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_conn", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_logger", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_transport", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_responseType", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_noContentResponse", void 0);
    _this._conn = conn;
    _this._logger = conn._logLevel ? HttpApi._logger.createInstance(conn._logLevel) : HttpApi._logger;
    _this._responseType = options.responseType;
    _this._transport = options.transport || conn._transport;
    _this._noContentResponse = options.noContentResponse;
    return _this;
  }
  /**
   * Callout to API endpoint using http
   */


  (0, _createClass2["default"])(HttpApi, [{
    key: "request",
    value: function request(_request) {
      var _this2 = this;

      return _promise.StreamPromise.create( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(setStream) {
          var _context, _context2;

          var refreshDelegate, bodyPromise, _body2, requestTime, requestPromise, response, responseTime, err, body;

          return _regenerator["default"].wrap(function _callee$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  refreshDelegate = _this2.getRefreshDelegate();
                  /* TODO decide remove or not this section */

                  /*
                  // remember previous instance url in case it changes after a refresh
                  const lastInstanceUrl = conn.instanceUrl;
                    // check to see if the token refresh has changed the instance url
                  if(lastInstanceUrl !== conn.instanceUrl){
                    // if the instance url has changed
                    // then replace the current request urls instance url fragment
                    // with the updated instance url
                    request.url = request.url.replace(lastInstanceUrl,conn.instanceUrl);
                  }
                  */

                  if (!(refreshDelegate && refreshDelegate.isRefreshing())) {
                    _context3.next = 10;
                    break;
                  }

                  _context3.next = 4;
                  return refreshDelegate.waitRefresh();

                case 4:
                  bodyPromise = _this2.request(_request);
                  setStream(bodyPromise.stream());
                  _context3.next = 8;
                  return bodyPromise;

                case 8:
                  _body2 = _context3.sent;
                  return _context3.abrupt("return", _body2);

                case 10:
                  // hook before sending
                  _this2.beforeSend(_request);

                  _this2.emit('request', _request);

                  _this2._logger.debug((0, _concat["default"])(_context = "<request> method=".concat(_request.method, ", url=")).call(_context, _request.url));

                  requestTime = (0, _now["default"])();
                  requestPromise = _this2._transport.httpRequest(_request);
                  setStream(requestPromise.stream());
                  _context3.prev = 16;
                  _context3.next = 19;
                  return requestPromise;

                case 19:
                  response = _context3.sent;
                  _context3.next = 26;
                  break;

                case 22:
                  _context3.prev = 22;
                  _context3.t0 = _context3["catch"](16);

                  _this2._logger.error(_context3.t0);

                  throw _context3.t0;

                case 26:
                  _context3.prev = 26;
                  responseTime = (0, _now["default"])();

                  _this2._logger.debug("elappsed time: ".concat(responseTime - requestTime, " msec"));

                  return _context3.finish(26);

                case 30:
                  if (response) {
                    _context3.next = 32;
                    break;
                  }

                  return _context3.abrupt("return");

                case 32:
                  _this2._logger.debug((0, _concat["default"])(_context2 = "<response> status=".concat(String(response.statusCode), ", url=")).call(_context2, _request.url));

                  _this2.emit('response', response); // Refresh token if session has been expired and requires authentication
                  // when session refresh delegate is available


                  if (!(_this2.isSessionExpired(response) && refreshDelegate)) {
                    _context3.next = 38;
                    break;
                  }

                  _context3.next = 37;
                  return refreshDelegate.refresh(requestTime);

                case 37:
                  return _context3.abrupt("return", _this2.request(_request));

                case 38:
                  if (!_this2.isErrorResponse(response)) {
                    _context3.next = 43;
                    break;
                  }

                  _context3.next = 41;
                  return _this2.getError(response);

                case 41:
                  err = _context3.sent;
                  throw err;

                case 43:
                  _context3.next = 45;
                  return _this2.getResponseBody(response);

                case 45:
                  body = _context3.sent;
                  return _context3.abrupt("return", body);

                case 47:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee, null, [[16, 22, 26, 30]]);
        }));

        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * @protected
     */

  }, {
    key: "getRefreshDelegate",
    value: function getRefreshDelegate() {
      return this._conn._refreshDelegate;
    }
    /**
     * @protected
     */

  }, {
    key: "beforeSend",
    value: function beforeSend(request) {
      /* eslint-disable no-param-reassign */
      var headers = request.headers || {};

      if (this._conn.accessToken) {
        headers.Authorization = "Bearer ".concat(this._conn.accessToken);
      }

      if (this._conn._callOptions) {
        var callOptions = [];

        for (var _i = 0, _Object$keys = (0, _keys["default"])(this._conn._callOptions); _i < _Object$keys.length; _i++) {
          var _context4;

          var name = _Object$keys[_i];
          callOptions.push((0, _concat["default"])(_context4 = "".concat(name, "=")).call(_context4, this._conn._callOptions[name]));
        }

        headers['Sforce-Call-Options'] = callOptions.join(', ');
      }

      request.headers = headers;
    }
    /**
     * Detect response content mime-type
     * @protected
     */

  }, {
    key: "getResponseContentType",
    value: function getResponseContentType(response) {
      return this._responseType || response.headers && response.headers['content-type'];
    }
    /**
     * @private
     */

  }, {
    key: "parseResponseBody",
    value: function () {
      var _parseResponseBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(response) {
        var contentType, parseBody;
        return _regenerator["default"].wrap(function _callee2$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                contentType = this.getResponseContentType(response) || '';
                parseBody = /^(text|application)\/xml(;|$)/.test(contentType) ? parseXML : /^application\/json(;|$)/.test(contentType) ? parseJSON : /^text\/csv(;|$)/.test(contentType) ? parseCSV : parseText;
                _context5.prev = 2;
                return _context5.abrupt("return", parseBody(response.body));

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](2);
                return _context5.abrupt("return", response.body);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee2, this, [[2, 6]]);
      }));

      function parseResponseBody(_x3) {
        return _parseResponseBody.apply(this, arguments);
      }

      return parseResponseBody;
    }()
    /**
     * Get response body
     * @protected
     */

  }, {
    key: "getResponseBody",
    value: function () {
      var _getResponseBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(response) {
        var body, err;
        return _regenerator["default"].wrap(function _callee3$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(response.statusCode === 204)) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return", this._noContentResponse);

              case 2:
                _context6.next = 4;
                return this.parseResponseBody(response);

              case 4:
                body = _context6.sent;

                if (!this.hasErrorInResponseBody(body)) {
                  _context6.next = 10;
                  break;
                }

                _context6.next = 8;
                return this.getError(response, body);

              case 8:
                err = _context6.sent;
                throw err;

              case 10:
                if (!(response.statusCode === 300)) {
                  _context6.next = 12;
                  break;
                }

                throw new HttpApiError('Multiple records found', 'MULTIPLE_CHOICES', body);

              case 12:
                return _context6.abrupt("return", body);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee3, this);
      }));

      function getResponseBody(_x4) {
        return _getResponseBody.apply(this, arguments);
      }

      return getResponseBody;
    }()
    /**
     * Detect session expiry
     * @protected
     */

  }, {
    key: "isSessionExpired",
    value: function isSessionExpired(response) {
      return response.statusCode === 401;
    }
    /**
     * Detect error response
     * @protected
     */

  }, {
    key: "isErrorResponse",
    value: function isErrorResponse(response) {
      return response.statusCode >= 400;
    }
    /**
     * Detect error in response body
     * @protected
     */

  }, {
    key: "hasErrorInResponseBody",
    value: function hasErrorInResponseBody(_body) {
      return false;
    }
    /**
     * Parsing error message in response
     * @protected
     */

  }, {
    key: "parseError",
    value: function parseError(body) {
      var errors = body;
      return (0, _isArray["default"])(errors) ? errors[0] : errors;
    }
    /**
     * Get error message in response
     * @protected
     */

  }, {
    key: "getError",
    value: function () {
      var _getError = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(response, body) {
        var error;
        return _regenerator["default"].wrap(function _callee4$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.t0 = this;
                _context7.t1 = body;

                if (_context7.t1) {
                  _context7.next = 7;
                  break;
                }

                _context7.next = 6;
                return this.parseResponseBody(response);

              case 6:
                _context7.t1 = _context7.sent;

              case 7:
                _context7.t2 = _context7.t1;
                error = _context7.t0.parseError.call(_context7.t0, _context7.t2);
                _context7.next = 13;
                break;

              case 11:
                _context7.prev = 11;
                _context7.t3 = _context7["catch"](0);

              case 13:
                error = (0, _typeof2["default"])(error) === 'object' && error !== null && typeof error.message === 'string' ? error : {
                  errorCode: "ERROR_HTTP_".concat(response.statusCode),
                  message: response.body
                };
                return _context7.abrupt("return", new HttpApiError(error.message, error.errorCode));

              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee4, this, [[0, 11]]);
      }));

      function getError(_x5, _x6) {
        return _getError.apply(this, arguments);
      }

      return getError;
    }()
  }]);
  return HttpApi;
}(_events.EventEmitter);
/**
 *
 */


exports["default"] = HttpApi;
(0, _defineProperty2["default"])(HttpApi, "_logger", (0, _logger.getLogger)('http-api'));

var HttpApiError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(HttpApiError, _Error);

  var _super2 = _createSuper(HttpApiError);

  function HttpApiError(message, errorCode, content) {
    var _this3;

    (0, _classCallCheck2["default"])(this, HttpApiError);
    _this3 = _super2.call(this, message);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "errorCode", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "content", void 0);
    _this3.name = errorCode || _this3.name;
    _this3.errorCode = _this3.name;
    _this3.content = content;
    return _this3;
  }

  return HttpApiError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9odHRwLWFwaS50cyJdLCJuYW1lcyI6WyJwYXJzZUpTT04iLCJzdHIiLCJKU09OIiwicGFyc2UiLCJwYXJzZVhNTCIsInhtbDJqcyIsInBhcnNlU3RyaW5nUHJvbWlzZSIsImV4cGxpY2l0QXJyYXkiLCJwYXJzZUNTViIsInBhcnNlVGV4dCIsIkh0dHBBcGkiLCJjb25uIiwib3B0aW9ucyIsIl9jb25uIiwiX2xvZ2dlciIsIl9sb2dMZXZlbCIsImNyZWF0ZUluc3RhbmNlIiwiX3Jlc3BvbnNlVHlwZSIsInJlc3BvbnNlVHlwZSIsIl90cmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJfbm9Db250ZW50UmVzcG9uc2UiLCJub0NvbnRlbnRSZXNwb25zZSIsInJlcXVlc3QiLCJTdHJlYW1Qcm9taXNlIiwiY3JlYXRlIiwic2V0U3RyZWFtIiwicmVmcmVzaERlbGVnYXRlIiwiZ2V0UmVmcmVzaERlbGVnYXRlIiwiaXNSZWZyZXNoaW5nIiwid2FpdFJlZnJlc2giLCJib2R5UHJvbWlzZSIsInN0cmVhbSIsImJvZHkiLCJiZWZvcmVTZW5kIiwiZW1pdCIsImRlYnVnIiwibWV0aG9kIiwidXJsIiwicmVxdWVzdFRpbWUiLCJyZXF1ZXN0UHJvbWlzZSIsImh0dHBSZXF1ZXN0IiwicmVzcG9uc2UiLCJlcnJvciIsInJlc3BvbnNlVGltZSIsIlN0cmluZyIsInN0YXR1c0NvZGUiLCJpc1Nlc3Npb25FeHBpcmVkIiwicmVmcmVzaCIsImlzRXJyb3JSZXNwb25zZSIsImdldEVycm9yIiwiZXJyIiwiZ2V0UmVzcG9uc2VCb2R5IiwiX3JlZnJlc2hEZWxlZ2F0ZSIsImhlYWRlcnMiLCJhY2Nlc3NUb2tlbiIsIkF1dGhvcml6YXRpb24iLCJfY2FsbE9wdGlvbnMiLCJjYWxsT3B0aW9ucyIsIm5hbWUiLCJwdXNoIiwiam9pbiIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VDb250ZW50VHlwZSIsInBhcnNlQm9keSIsInRlc3QiLCJwYXJzZVJlc3BvbnNlQm9keSIsImhhc0Vycm9ySW5SZXNwb25zZUJvZHkiLCJIdHRwQXBpRXJyb3IiLCJfYm9keSIsImVycm9ycyIsInBhcnNlRXJyb3IiLCJtZXNzYWdlIiwiZXJyb3JDb2RlIiwiRXZlbnRFbWl0dGVyIiwiY29udGVudCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFLQTtBQUNBLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQWdDO0FBQzlCLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixHQUFYLENBQVA7QUFDRDtBQUVEOzs7U0FDZUcsUTs7O0FBSWY7Ozs7NEZBSkEsa0JBQXdCSCxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ1NJLG1CQUFPQyxrQkFBUCxDQUEwQkwsR0FBMUIsRUFBK0I7QUFBRU0sY0FBQUEsYUFBYSxFQUFFO0FBQWpCLGFBQS9CLENBRFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQUtBLFNBQVNDLFFBQVQsQ0FBa0JQLEdBQWxCLEVBQStCO0FBQzdCO0FBQ0E7QUFDQSxTQUFPQSxHQUFQO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBU1EsU0FBVCxDQUFtQlIsR0FBbkIsRUFBZ0M7QUFDOUIsU0FBT0EsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7SUFDcUJTLE87Ozs7O0FBU25CLG1CQUFZQyxJQUFaLEVBQWlDQyxPQUFqQyxFQUErQztBQUFBOztBQUFBO0FBQzdDO0FBRDZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFN0MsVUFBS0MsS0FBTCxHQUFhRixJQUFiO0FBQ0EsVUFBS0csT0FBTCxHQUFlSCxJQUFJLENBQUNJLFNBQUwsR0FDWEwsT0FBTyxDQUFDSSxPQUFSLENBQWdCRSxjQUFoQixDQUErQkwsSUFBSSxDQUFDSSxTQUFwQyxDQURXLEdBRVhMLE9BQU8sQ0FBQ0ksT0FGWjtBQUdBLFVBQUtHLGFBQUwsR0FBcUJMLE9BQU8sQ0FBQ00sWUFBN0I7QUFDQSxVQUFLQyxVQUFMLEdBQWtCUCxPQUFPLENBQUNRLFNBQVIsSUFBcUJULElBQUksQ0FBQ1EsVUFBNUM7QUFDQSxVQUFLRSxrQkFBTCxHQUEwQlQsT0FBTyxDQUFDVSxpQkFBbEM7QUFSNkM7QUFTOUM7QUFFRDtBQUNGO0FBQ0E7Ozs7OzRCQUNVQyxRLEVBQTBDO0FBQUE7O0FBQ2hELGFBQU9DLHVCQUFjQyxNQUFkO0FBQUEsaUdBQXFCLGlCQUFPQyxTQUFQO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJDLGtCQUFBQSxlQURvQixHQUNGLE1BQUksQ0FBQ0Msa0JBQUwsRUFERTtBQUUxQjs7QUFDQTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWJnQyx3QkFldEJELGVBQWUsSUFBSUEsZUFBZSxDQUFDRSxZQUFoQixFQWZHO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBZ0JsQkYsZUFBZSxDQUFDRyxXQUFoQixFQWhCa0I7O0FBQUE7QUFpQmxCQyxrQkFBQUEsV0FqQmtCLEdBaUJKLE1BQUksQ0FBQ1IsT0FBTCxDQUFhQSxRQUFiLENBakJJO0FBa0J4Qkcsa0JBQUFBLFNBQVMsQ0FBQ0ssV0FBVyxDQUFDQyxNQUFaLEVBQUQsQ0FBVDtBQWxCd0I7QUFBQSx5QkFtQkxELFdBbkJLOztBQUFBO0FBbUJsQkUsa0JBQUFBLE1BbkJrQjtBQUFBLG9EQW9CakJBLE1BcEJpQjs7QUFBQTtBQXVCMUI7QUFDQSxrQkFBQSxNQUFJLENBQUNDLFVBQUwsQ0FBZ0JYLFFBQWhCOztBQUVBLGtCQUFBLE1BQUksQ0FBQ1ksSUFBTCxDQUFVLFNBQVYsRUFBcUJaLFFBQXJCOztBQUNBLGtCQUFBLE1BQUksQ0FBQ1QsT0FBTCxDQUFhc0IsS0FBYiwrREFDc0JiLFFBQU8sQ0FBQ2MsTUFEOUIsNEJBQzZDZCxRQUFPLENBQUNlLEdBRHJEOztBQUdNQyxrQkFBQUEsV0E5Qm9CLEdBOEJOLHNCQTlCTTtBQStCcEJDLGtCQUFBQSxjQS9Cb0IsR0ErQkgsTUFBSSxDQUFDckIsVUFBTCxDQUFnQnNCLFdBQWhCLENBQTRCbEIsUUFBNUIsQ0EvQkc7QUFpQzFCRyxrQkFBQUEsU0FBUyxDQUFDYyxjQUFjLENBQUNSLE1BQWYsRUFBRCxDQUFUO0FBakMwQjtBQUFBO0FBQUEseUJBcUNQUSxjQXJDTzs7QUFBQTtBQXFDeEJFLGtCQUFBQSxRQXJDd0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUF1Q3hCLGtCQUFBLE1BQUksQ0FBQzVCLE9BQUwsQ0FBYTZCLEtBQWI7O0FBdkN3Qjs7QUFBQTtBQUFBO0FBMENsQkMsa0JBQUFBLFlBMUNrQixHQTBDSCxzQkExQ0c7O0FBMkN4QixrQkFBQSxNQUFJLENBQUM5QixPQUFMLENBQWFzQixLQUFiLDBCQUFxQ1EsWUFBWSxHQUFHTCxXQUFwRDs7QUEzQ3dCOztBQUFBO0FBQUEsc0JBNkNyQkcsUUE3Q3FCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBZ0QxQixrQkFBQSxNQUFJLENBQUM1QixPQUFMLENBQWFzQixLQUFiLGlFQUN1QlMsTUFBTSxDQUFDSCxRQUFRLENBQUNJLFVBQVYsQ0FEN0IsNkJBQzJEdkIsUUFBTyxDQUFDZSxHQURuRTs7QUFHQSxrQkFBQSxNQUFJLENBQUNILElBQUwsQ0FBVSxVQUFWLEVBQXNCTyxRQUF0QixFQW5EMEIsQ0FvRDFCO0FBQ0E7OztBQXJEMEIsd0JBc0R0QixNQUFJLENBQUNLLGdCQUFMLENBQXNCTCxRQUF0QixLQUFtQ2YsZUF0RGI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkF1RGxCQSxlQUFlLENBQUNxQixPQUFoQixDQUF3QlQsV0FBeEIsQ0F2RGtCOztBQUFBO0FBQUEsb0RBd0RqQixNQUFJLENBQUNoQixPQUFMLENBQWFBLFFBQWIsQ0F4RGlCOztBQUFBO0FBQUEsdUJBMER0QixNQUFJLENBQUMwQixlQUFMLENBQXFCUCxRQUFyQixDQTFEc0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkEyRE4sTUFBSSxDQUFDUSxRQUFMLENBQWNSLFFBQWQsQ0EzRE07O0FBQUE7QUEyRGxCUyxrQkFBQUEsR0EzRGtCO0FBQUEsd0JBNERsQkEsR0E1RGtCOztBQUFBO0FBQUE7QUFBQSx5QkE4RFAsTUFBSSxDQUFDQyxlQUFMLENBQXFCVixRQUFyQixDQTlETzs7QUFBQTtBQThEcEJULGtCQUFBQSxJQTlEb0I7QUFBQSxvREErRG5CQSxJQS9EbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBckI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQWlFRDtBQUVEO0FBQ0Y7QUFDQTs7Ozt5Q0FDdUI7QUFDbkIsYUFBTyxLQUFLcEIsS0FBTCxDQUFXd0MsZ0JBQWxCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7K0JBQ2E5QixPLEVBQXNCO0FBQy9CO0FBQ0EsVUFBTStCLE9BQU8sR0FBRy9CLE9BQU8sQ0FBQytCLE9BQVIsSUFBbUIsRUFBbkM7O0FBQ0EsVUFBSSxLQUFLekMsS0FBTCxDQUFXMEMsV0FBZixFQUE0QjtBQUMxQkQsUUFBQUEsT0FBTyxDQUFDRSxhQUFSLG9CQUFrQyxLQUFLM0MsS0FBTCxDQUFXMEMsV0FBN0M7QUFDRDs7QUFDRCxVQUFJLEtBQUsxQyxLQUFMLENBQVc0QyxZQUFmLEVBQTZCO0FBQzNCLFlBQU1DLFdBQVcsR0FBRyxFQUFwQjs7QUFDQSx3Q0FBbUIsc0JBQVksS0FBSzdDLEtBQUwsQ0FBVzRDLFlBQXZCLENBQW5CLGtDQUF5RDtBQUFBOztBQUFwRCxjQUFNRSxJQUFJLG1CQUFWO0FBQ0hELFVBQUFBLFdBQVcsQ0FBQ0UsSUFBWiwrQ0FBb0JELElBQXBCLHdCQUE0QixLQUFLOUMsS0FBTCxDQUFXNEMsWUFBWCxDQUF3QkUsSUFBeEIsQ0FBNUI7QUFDRDs7QUFDREwsUUFBQUEsT0FBTyxDQUFDLHFCQUFELENBQVAsR0FBaUNJLFdBQVcsQ0FBQ0csSUFBWixDQUFpQixJQUFqQixDQUFqQztBQUNEOztBQUNEdEMsTUFBQUEsT0FBTyxDQUFDK0IsT0FBUixHQUFrQkEsT0FBbEI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7OzJDQUN5QlosUSxFQUEwQztBQUMvRCxhQUNFLEtBQUt6QixhQUFMLElBQ0N5QixRQUFRLENBQUNZLE9BQVQsSUFBb0JaLFFBQVEsQ0FBQ1ksT0FBVCxDQUFpQixjQUFqQixDQUZ2QjtBQUlEO0FBRUQ7QUFDRjtBQUNBOzs7OzsrSEFDMEJaLFE7Ozs7OztBQUNoQm9CLGdCQUFBQSxXLEdBQWMsS0FBS0Msc0JBQUwsQ0FBNEJyQixRQUE1QixLQUF5QyxFO0FBQ3ZEc0IsZ0JBQUFBLFMsR0FBWSxnQ0FBZ0NDLElBQWhDLENBQXFDSCxXQUFyQyxJQUNkMUQsUUFEYyxHQUVkLDBCQUEwQjZELElBQTFCLENBQStCSCxXQUEvQixJQUNBOUQsU0FEQSxHQUVBLGtCQUFrQmlFLElBQWxCLENBQXVCSCxXQUF2QixJQUNBdEQsUUFEQSxHQUVBQyxTOztrREFFS3VELFNBQVMsQ0FBQ3RCLFFBQVEsQ0FBQ1QsSUFBVixDOzs7OztrREFFVFMsUUFBUSxDQUFDVCxJOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXBCO0FBQ0Y7QUFDQTtBQUNBOzs7Ozs2SEFDd0JTLFE7Ozs7OztzQkFDaEJBLFFBQVEsQ0FBQ0ksVUFBVCxLQUF3QixHOzs7OztrREFFbkIsS0FBS3pCLGtCOzs7O3VCQUVLLEtBQUs2QyxpQkFBTCxDQUF1QnhCLFFBQXZCLEM7OztBQUFiVCxnQkFBQUEsSTs7cUJBRUYsS0FBS2tDLHNCQUFMLENBQTRCbEMsSUFBNUIsQzs7Ozs7O3VCQUNVLEtBQUtpQixRQUFMLENBQWNSLFFBQWQsRUFBd0JULElBQXhCLEM7OztBQUFaa0IsZ0JBQUFBLEc7c0JBQ01BLEc7OztzQkFFSlQsUUFBUSxDQUFDSSxVQUFULEtBQXdCLEc7Ozs7O3NCQUVwQixJQUFJc0IsWUFBSixDQUNKLHdCQURJLEVBRUosa0JBRkksRUFHSm5DLElBSEksQzs7O2tEQU1EQSxJOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7QUFDRjtBQUNBO0FBQ0E7Ozs7cUNBQ21CUyxRLEVBQXdCO0FBQ3ZDLGFBQU9BLFFBQVEsQ0FBQ0ksVUFBVCxLQUF3QixHQUEvQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7b0NBQ2tCSixRLEVBQXdCO0FBQ3RDLGFBQU9BLFFBQVEsQ0FBQ0ksVUFBVCxJQUF1QixHQUE5QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7MkNBQ3lCdUIsSyxFQUF5QjtBQUM5QyxhQUFPLEtBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7OytCQUNhcEMsSSxFQUFXO0FBQ3BCLFVBQU1xQyxNQUFNLEdBQUdyQyxJQUFmO0FBQ0EsYUFBTyx5QkFBY3FDLE1BQWQsSUFBd0JBLE1BQU0sQ0FBQyxDQUFELENBQTlCLEdBQW9DQSxNQUEzQztBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7O3NIQUNpQjVCLFEsRUFBd0JULEk7Ozs7Ozs7K0JBRzNCLEk7K0JBQWdCQSxJOzs7Ozs7Ozt1QkFBZSxLQUFLaUMsaUJBQUwsQ0FBdUJ4QixRQUF2QixDOzs7Ozs7O0FBQXZDQyxnQkFBQUEsSyxnQkFBYTRCLFU7Ozs7Ozs7OztBQUlmNUIsZ0JBQUFBLEtBQUssR0FDSCx5QkFBT0EsS0FBUCxNQUFpQixRQUFqQixJQUNBQSxLQUFLLEtBQUssSUFEVixJQUVBLE9BQU9BLEtBQUssQ0FBQzZCLE9BQWIsS0FBeUIsUUFGekIsR0FHSTdCLEtBSEosR0FJSTtBQUNFOEIsa0JBQUFBLFNBQVMsdUJBQWdCL0IsUUFBUSxDQUFDSSxVQUF6QixDQURYO0FBRUUwQixrQkFBQUEsT0FBTyxFQUFFOUIsUUFBUSxDQUFDVDtBQUZwQixpQkFMTjtrREFTTyxJQUFJbUMsWUFBSixDQUFpQnpCLEtBQUssQ0FBQzZCLE9BQXZCLEVBQWdDN0IsS0FBSyxDQUFDOEIsU0FBdEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbE80Q0Msb0I7QUFzT3ZEO0FBQ0E7QUFDQTs7OztpQ0F4T3FCaEUsTyxhQUNGLHVCQUFVLFVBQVYsQzs7SUF3T2IwRCxZOzs7OztBQUdKLHdCQUFZSSxPQUFaLEVBQTZCQyxTQUE3QixFQUE2REUsT0FBN0QsRUFBNEU7QUFBQTs7QUFBQTtBQUMxRSxnQ0FBTUgsT0FBTjtBQUQwRTtBQUFBO0FBRTFFLFdBQUtiLElBQUwsR0FBWWMsU0FBUyxJQUFJLE9BQUtkLElBQTlCO0FBQ0EsV0FBS2MsU0FBTCxHQUFpQixPQUFLZCxJQUF0QjtBQUNBLFdBQUtnQixPQUFMLEdBQWVBLE9BQWY7QUFKMEU7QUFLM0U7OztrREFSd0JDLEsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICovXHJcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdldmVudHMnO1xyXG5pbXBvcnQgeG1sMmpzIGZyb20gJ3htbDJqcyc7XHJcbmltcG9ydCB7IExvZ2dlciwgZ2V0TG9nZ2VyIH0gZnJvbSAnLi91dGlsL2xvZ2dlcic7XHJcbmltcG9ydCB7IFN0cmVhbVByb21pc2UgfSBmcm9tICcuL3V0aWwvcHJvbWlzZSc7XHJcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XHJcbmltcG9ydCBUcmFuc3BvcnQgZnJvbSAnLi90cmFuc3BvcnQnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBPcHRpb25hbCwgU2NoZW1hIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG4vKiogQHByaXZhdGUgKi9cclxuZnVuY3Rpb24gcGFyc2VKU09OKHN0cjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcclxufVxyXG5cclxuLyoqIEBwcml2YXRlICovXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlWE1MKHN0cjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHhtbDJqcy5wYXJzZVN0cmluZ1Byb21pc2Uoc3RyLCB7IGV4cGxpY2l0QXJyYXk6IGZhbHNlIH0pO1xyXG59XHJcblxyXG4vKiogQHByaXZhdGUgKi9cclxuZnVuY3Rpb24gcGFyc2VDU1Yoc3RyOiBzdHJpbmcpIHtcclxuICAvLyBUT0RPIGNzdiBpbXBsXHJcbiAgLy8gcmV0dXJuIHJlcXVpcmUoJy4vY3N2JykucGFyc2VDU1Yoc3RyKTtcclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG4vKiogQHByaXZhdGUgKi9cclxuZnVuY3Rpb24gcGFyc2VUZXh0KHN0cjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhUVFAgYmFzZWQgQVBJIGNsYXNzIHdpdGggYXV0aG9yaXphdGlvbiBob29rXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwQXBpPFMgZXh0ZW5kcyBTY2hlbWE+IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICBzdGF0aWMgX2xvZ2dlciA9IGdldExvZ2dlcignaHR0cC1hcGknKTtcclxuXHJcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XHJcbiAgX2xvZ2dlcjogTG9nZ2VyO1xyXG4gIF90cmFuc3BvcnQ6IFRyYW5zcG9ydDtcclxuICBfcmVzcG9uc2VUeXBlOiBzdHJpbmcgfCB2b2lkO1xyXG4gIF9ub0NvbnRlbnRSZXNwb25zZTogc3RyaW5nIHwgdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbjxTPiwgb3B0aW9uczogYW55KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fY29ubiA9IGNvbm47XHJcbiAgICB0aGlzLl9sb2dnZXIgPSBjb25uLl9sb2dMZXZlbFxyXG4gICAgICA/IEh0dHBBcGkuX2xvZ2dlci5jcmVhdGVJbnN0YW5jZShjb25uLl9sb2dMZXZlbClcclxuICAgICAgOiBIdHRwQXBpLl9sb2dnZXI7XHJcbiAgICB0aGlzLl9yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcclxuICAgIHRoaXMuX3RyYW5zcG9ydCA9IG9wdGlvbnMudHJhbnNwb3J0IHx8IGNvbm4uX3RyYW5zcG9ydDtcclxuICAgIHRoaXMuX25vQ29udGVudFJlc3BvbnNlID0gb3B0aW9ucy5ub0NvbnRlbnRSZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxvdXQgdG8gQVBJIGVuZHBvaW50IHVzaW5nIGh0dHBcclxuICAgKi9cclxuICByZXF1ZXN0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0KTogU3RyZWFtUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBTdHJlYW1Qcm9taXNlLmNyZWF0ZShhc3luYyAoc2V0U3RyZWFtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZnJlc2hEZWxlZ2F0ZSA9IHRoaXMuZ2V0UmVmcmVzaERlbGVnYXRlKCk7XHJcbiAgICAgIC8qIFRPRE8gZGVjaWRlIHJlbW92ZSBvciBub3QgdGhpcyBzZWN0aW9uICovXHJcbiAgICAgIC8qXHJcbiAgICAgIC8vIHJlbWVtYmVyIHByZXZpb3VzIGluc3RhbmNlIHVybCBpbiBjYXNlIGl0IGNoYW5nZXMgYWZ0ZXIgYSByZWZyZXNoXHJcbiAgICAgIGNvbnN0IGxhc3RJbnN0YW5jZVVybCA9IGNvbm4uaW5zdGFuY2VVcmw7XHJcblxyXG4gICAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlIHRva2VuIHJlZnJlc2ggaGFzIGNoYW5nZWQgdGhlIGluc3RhbmNlIHVybFxyXG4gICAgICBpZihsYXN0SW5zdGFuY2VVcmwgIT09IGNvbm4uaW5zdGFuY2VVcmwpe1xyXG4gICAgICAgIC8vIGlmIHRoZSBpbnN0YW5jZSB1cmwgaGFzIGNoYW5nZWRcclxuICAgICAgICAvLyB0aGVuIHJlcGxhY2UgdGhlIGN1cnJlbnQgcmVxdWVzdCB1cmxzIGluc3RhbmNlIHVybCBmcmFnbWVudFxyXG4gICAgICAgIC8vIHdpdGggdGhlIHVwZGF0ZWQgaW5zdGFuY2UgdXJsXHJcbiAgICAgICAgcmVxdWVzdC51cmwgPSByZXF1ZXN0LnVybC5yZXBsYWNlKGxhc3RJbnN0YW5jZVVybCxjb25uLmluc3RhbmNlVXJsKTtcclxuICAgICAgfVxyXG4gICAgICAqL1xyXG4gICAgICBpZiAocmVmcmVzaERlbGVnYXRlICYmIHJlZnJlc2hEZWxlZ2F0ZS5pc1JlZnJlc2hpbmcoKSkge1xyXG4gICAgICAgIGF3YWl0IHJlZnJlc2hEZWxlZ2F0ZS53YWl0UmVmcmVzaCgpO1xyXG4gICAgICAgIGNvbnN0IGJvZHlQcm9taXNlID0gdGhpcy5yZXF1ZXN0KHJlcXVlc3QpO1xyXG4gICAgICAgIHNldFN0cmVhbShib2R5UHJvbWlzZS5zdHJlYW0oKSk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IGJvZHlQcm9taXNlO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBob29rIGJlZm9yZSBzZW5kaW5nXHJcbiAgICAgIHRoaXMuYmVmb3JlU2VuZChyZXF1ZXN0KTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVxdWVzdCcsIHJlcXVlc3QpO1xyXG4gICAgICB0aGlzLl9sb2dnZXIuZGVidWcoXHJcbiAgICAgICAgYDxyZXF1ZXN0PiBtZXRob2Q9JHtyZXF1ZXN0Lm1ldGhvZH0sIHVybD0ke3JlcXVlc3QudXJsfWAsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgY29uc3QgcmVxdWVzdFByb21pc2UgPSB0aGlzLl90cmFuc3BvcnQuaHR0cFJlcXVlc3QocmVxdWVzdCk7XHJcblxyXG4gICAgICBzZXRTdHJlYW0ocmVxdWVzdFByb21pc2Uuc3RyZWFtKCkpO1xyXG5cclxuICAgICAgbGV0IHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UgfCB2b2lkO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFByb21pc2U7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihlcnIpO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgZWxhcHBzZWQgdGltZTogJHtyZXNwb25zZVRpbWUgLSByZXF1ZXN0VGltZX0gbXNlY2ApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFxyXG4gICAgICAgIGA8cmVzcG9uc2U+IHN0YXR1cz0ke1N0cmluZyhyZXNwb25zZS5zdGF0dXNDb2RlKX0sIHVybD0ke3JlcXVlc3QudXJsfWAsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCByZXNwb25zZSk7XHJcbiAgICAgIC8vIFJlZnJlc2ggdG9rZW4gaWYgc2Vzc2lvbiBoYXMgYmVlbiBleHBpcmVkIGFuZCByZXF1aXJlcyBhdXRoZW50aWNhdGlvblxyXG4gICAgICAvLyB3aGVuIHNlc3Npb24gcmVmcmVzaCBkZWxlZ2F0ZSBpcyBhdmFpbGFibGVcclxuICAgICAgaWYgKHRoaXMuaXNTZXNzaW9uRXhwaXJlZChyZXNwb25zZSkgJiYgcmVmcmVzaERlbGVnYXRlKSB7XHJcbiAgICAgICAgYXdhaXQgcmVmcmVzaERlbGVnYXRlLnJlZnJlc2gocmVxdWVzdFRpbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocmVxdWVzdCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaXNFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSkge1xyXG4gICAgICAgIGNvbnN0IGVyciA9IGF3YWl0IHRoaXMuZ2V0RXJyb3IocmVzcG9uc2UpO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZUJvZHkocmVzcG9uc2UpO1xyXG4gICAgICByZXR1cm4gYm9keTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqL1xyXG4gIGdldFJlZnJlc2hEZWxlZ2F0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLl9yZWZyZXNoRGVsZWdhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICovXHJcbiAgYmVmb3JlU2VuZChyZXF1ZXN0OiBIdHRwUmVxdWVzdCkge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuICAgIGNvbnN0IGhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnMgfHwge307XHJcbiAgICBpZiAodGhpcy5fY29ubi5hY2Nlc3NUb2tlbikge1xyXG4gICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dGhpcy5fY29ubi5hY2Nlc3NUb2tlbn1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2Nvbm4uX2NhbGxPcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IGNhbGxPcHRpb25zID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyh0aGlzLl9jb25uLl9jYWxsT3B0aW9ucykpIHtcclxuICAgICAgICBjYWxsT3B0aW9ucy5wdXNoKGAke25hbWV9PSR7dGhpcy5fY29ubi5fY2FsbE9wdGlvbnNbbmFtZV19YCk7XHJcbiAgICAgIH1cclxuICAgICAgaGVhZGVyc1snU2ZvcmNlLUNhbGwtT3B0aW9ucyddID0gY2FsbE9wdGlvbnMuam9pbignLCAnKTtcclxuICAgIH1cclxuICAgIHJlcXVlc3QuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlY3QgcmVzcG9uc2UgY29udGVudCBtaW1lLXR5cGVcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICovXHJcbiAgZ2V0UmVzcG9uc2VDb250ZW50VHlwZShyZXNwb25zZTogSHR0cFJlc3BvbnNlKTogT3B0aW9uYWw8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLl9yZXNwb25zZVR5cGUgfHxcclxuICAgICAgKHJlc3BvbnNlLmhlYWRlcnMgJiYgcmVzcG9uc2UuaGVhZGVyc1snY29udGVudC10eXBlJ10pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBhc3luYyBwYXJzZVJlc3BvbnNlQm9keShyZXNwb25zZTogSHR0cFJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHRoaXMuZ2V0UmVzcG9uc2VDb250ZW50VHlwZShyZXNwb25zZSkgfHwgJyc7XHJcbiAgICBjb25zdCBwYXJzZUJvZHkgPSAvXih0ZXh0fGFwcGxpY2F0aW9uKVxcL3htbCg7fCQpLy50ZXN0KGNvbnRlbnRUeXBlKVxyXG4gICAgICA/IHBhcnNlWE1MXHJcbiAgICAgIDogL15hcHBsaWNhdGlvblxcL2pzb24oO3wkKS8udGVzdChjb250ZW50VHlwZSlcclxuICAgICAgPyBwYXJzZUpTT05cclxuICAgICAgOiAvXnRleHRcXC9jc3YoO3wkKS8udGVzdChjb250ZW50VHlwZSlcclxuICAgICAgPyBwYXJzZUNTVlxyXG4gICAgICA6IHBhcnNlVGV4dDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUJvZHkocmVzcG9uc2UuYm9keSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5ib2R5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHJlc3BvbnNlIGJvZHlcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICovXHJcbiAgYXN5bmMgZ2V0UmVzcG9uc2VCb2R5KHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDQpIHtcclxuICAgICAgLy8gTm8gQ29udGVudFxyXG4gICAgICByZXR1cm4gdGhpcy5fbm9Db250ZW50UmVzcG9uc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5wYXJzZVJlc3BvbnNlQm9keShyZXNwb25zZSk7XHJcbiAgICBsZXQgZXJyO1xyXG4gICAgaWYgKHRoaXMuaGFzRXJyb3JJblJlc3BvbnNlQm9keShib2R5KSkge1xyXG4gICAgICBlcnIgPSBhd2FpdCB0aGlzLmdldEVycm9yKHJlc3BvbnNlLCBib2R5KTtcclxuICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDMwMCkge1xyXG4gICAgICAvLyBNdWx0aXBsZSBDaG9pY2VzXHJcbiAgICAgIHRocm93IG5ldyBIdHRwQXBpRXJyb3IoXHJcbiAgICAgICAgJ011bHRpcGxlIHJlY29yZHMgZm91bmQnLFxyXG4gICAgICAgICdNVUxUSVBMRV9DSE9JQ0VTJyxcclxuICAgICAgICBib2R5LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvZHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlY3Qgc2Vzc2lvbiBleHBpcnlcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICovXHJcbiAgaXNTZXNzaW9uRXhwaXJlZChyZXNwb25zZTogSHR0cFJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZWN0IGVycm9yIHJlc3BvbnNlXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqL1xyXG4gIGlzRXJyb3JSZXNwb25zZShyZXNwb25zZTogSHR0cFJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSA0MDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlY3QgZXJyb3IgaW4gcmVzcG9uc2UgYm9keVxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKi9cclxuICBoYXNFcnJvckluUmVzcG9uc2VCb2R5KF9ib2R5OiBPcHRpb25hbDxzdHJpbmc+KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJzaW5nIGVycm9yIG1lc3NhZ2UgaW4gcmVzcG9uc2VcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICovXHJcbiAgcGFyc2VFcnJvcihib2R5OiBhbnkpIHtcclxuICAgIGNvbnN0IGVycm9ycyA9IGJvZHk7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShlcnJvcnMpID8gZXJyb3JzWzBdIDogZXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGVycm9yIG1lc3NhZ2UgaW4gcmVzcG9uc2VcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICovXHJcbiAgYXN5bmMgZ2V0RXJyb3IocmVzcG9uc2U6IEh0dHBSZXNwb25zZSwgYm9keT86IGFueSk6IFByb21pc2U8RXJyb3I+IHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGVycm9yID0gdGhpcy5wYXJzZUVycm9yKGJvZHkgfHwgKGF3YWl0IHRoaXMucGFyc2VSZXNwb25zZUJvZHkocmVzcG9uc2UpKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5XHJcbiAgICB9XHJcbiAgICBlcnJvciA9XHJcbiAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgZXJyb3IgIT09IG51bGwgJiZcclxuICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgPyBlcnJvclxyXG4gICAgICAgIDoge1xyXG4gICAgICAgICAgICBlcnJvckNvZGU6IGBFUlJPUl9IVFRQXyR7cmVzcG9uc2Uuc3RhdHVzQ29kZX1gLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5ib2R5LFxyXG4gICAgICAgICAgfTtcclxuICAgIHJldHVybiBuZXcgSHR0cEFwaUVycm9yKGVycm9yLm1lc3NhZ2UsIGVycm9yLmVycm9yQ29kZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIEh0dHBBcGlFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBlcnJvckNvZGU6IHN0cmluZztcclxuICBjb250ZW50OiBhbnk7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBlcnJvckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQsIGNvbnRlbnQ/OiBhbnkpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5uYW1lID0gZXJyb3JDb2RlIHx8IHRoaXMubmFtZTtcclxuICAgIHRoaXMuZXJyb3JDb2RlID0gdGhpcy5uYW1lO1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICB9XHJcbn1cclxuIl19