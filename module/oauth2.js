"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.split");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/wrapNativeSuper"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _querystring = _interopRequireDefault(require("querystring"));

var _transport = _interopRequireWildcard(require("./transport"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context8; (0, _forEach["default"])(_context8 = ownKeys(Object(source), true)).call(_context8, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context9; (0, _forEach["default"])(_context9 = ownKeys(Object(source))).call(_context9, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var defaultOAuth2Config = {
  loginUrl: 'https://login.salesforce.com'
};
/**
 * type defs
 */

/**
 * OAuth2 class
 */
var OAuth2 = /*#__PURE__*/function () {
  /**
   *
   */
  function OAuth2(config) {
    (0, _classCallCheck2["default"])(this, OAuth2);
    (0, _defineProperty3["default"])(this, "loginUrl", void 0);
    (0, _defineProperty3["default"])(this, "authzServiceUrl", void 0);
    (0, _defineProperty3["default"])(this, "tokenServiceUrl", void 0);
    (0, _defineProperty3["default"])(this, "revokeServiceUrl", void 0);
    (0, _defineProperty3["default"])(this, "clientId", void 0);
    (0, _defineProperty3["default"])(this, "clientSecret", void 0);
    (0, _defineProperty3["default"])(this, "redirectUri", void 0);
    (0, _defineProperty3["default"])(this, "_transport", void 0);
    var loginUrl = config.loginUrl,
        authzServiceUrl = config.authzServiceUrl,
        tokenServiceUrl = config.tokenServiceUrl,
        revokeServiceUrl = config.revokeServiceUrl,
        clientId = config.clientId,
        clientSecret = config.clientSecret,
        redirectUri = config.redirectUri,
        proxyUrl = config.proxyUrl,
        httpProxy = config.httpProxy;

    if (authzServiceUrl && tokenServiceUrl) {
      var _context;

      this.loginUrl = (0, _slice["default"])(_context = authzServiceUrl.split('/')).call(_context, 0, 3).join('/');
      this.authzServiceUrl = authzServiceUrl;
      this.tokenServiceUrl = tokenServiceUrl;
      this.revokeServiceUrl = revokeServiceUrl || "".concat(this.loginUrl, "/services/oauth2/revoke");
    } else {
      this.loginUrl = loginUrl || defaultOAuth2Config.loginUrl;
      this.authzServiceUrl = "".concat(this.loginUrl, "/services/oauth2/authorize");
      this.tokenServiceUrl = "".concat(this.loginUrl, "/services/oauth2/token");
      this.revokeServiceUrl = "".concat(this.loginUrl, "/services/oauth2/revoke");
    }

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;

    if (proxyUrl) {
      this._transport = new _transport.ProxyTransport(proxyUrl);
    } else if (httpProxy) {
      this._transport = new _transport.HttpProxyTransport(httpProxy);
    } else {
      this._transport = new _transport["default"]();
    }
  }
  /**
   * Get Salesforce OAuth2 authorization page URL to redirect user agent.
   */


  (0, _createClass2["default"])(OAuth2, [{
    key: "getAuthorizationUrl",
    value: function getAuthorizationUrl() {
      var _context2;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _params = _objectSpread(_objectSpread({}, params), {}, {
        response_type: 'code',
        client_id: this.clientId,
        redirect_uri: this.redirectUri
      });

      return this.authzServiceUrl + ((0, _indexOf["default"])(_context2 = this.authzServiceUrl).call(_context2, '?') >= 0 ? '&' : '?') + _querystring["default"].stringify(_params);
    }
    /**
     * OAuth2 Refresh Token Flow
     */

  }, {
    key: "refreshToken",
    value: function () {
      var _refreshToken2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_refreshToken) {
        var params, ret;
        return _regenerator["default"].wrap(function _callee$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.clientId) {
                  _context3.next = 2;
                  break;
                }

                throw new Error('No OAuth2 client id information is specified');

              case 2:
                params = {
                  grant_type: 'refresh_token',
                  refresh_token: _refreshToken,
                  client_id: this.clientId
                };

                if (this.clientSecret) {
                  params.client_secret = this.clientSecret;
                }

                _context3.next = 6;
                return this._postParams(params);

              case 6:
                ret = _context3.sent;
                return _context3.abrupt("return", ret);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee, this);
      }));

      function refreshToken(_x) {
        return _refreshToken2.apply(this, arguments);
      }

      return refreshToken;
    }()
    /**
     * OAuth2 Web Server Authentication Flow (Authorization Code)
     * Access Token Request
     */

  }, {
    key: "requestToken",
    value: function () {
      var _requestToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(code) {
        var params,
            _params,
            ret,
            _args2 = arguments;

        return _regenerator["default"].wrap(function _callee2$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};

                if (!(!this.clientId || !this.redirectUri)) {
                  _context4.next = 3;
                  break;
                }

                throw new Error('No OAuth2 client id or redirect uri configuration is specified');

              case 3:
                _params = _objectSpread(_objectSpread({}, params), {}, {
                  grant_type: 'authorization_code',
                  code: code,
                  client_id: this.clientId,
                  redirect_uri: this.redirectUri
                });

                if (this.clientSecret) {
                  _params.client_secret = this.clientSecret;
                }

                _context4.next = 7;
                return this._postParams(_params);

              case 7:
                ret = _context4.sent;
                return _context4.abrupt("return", ret);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee2, this);
      }));

      function requestToken(_x2) {
        return _requestToken.apply(this, arguments);
      }

      return requestToken;
    }()
    /**
     * OAuth2 Username-Password Flow (Resource Owner Password Credentials)
     */

  }, {
    key: "authenticate",
    value: function () {
      var _authenticate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(username, password) {
        var ret;
        return _regenerator["default"].wrap(function _callee3$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(!this.clientId || !this.clientSecret || !this.redirectUri)) {
                  _context5.next = 2;
                  break;
                }

                throw new Error('No valid OAuth2 client configuration set');

              case 2:
                _context5.next = 4;
                return this._postParams({
                  grant_type: 'password',
                  username: username,
                  password: password,
                  client_id: this.clientId,
                  client_secret: this.clientSecret,
                  redirect_uri: this.redirectUri
                });

              case 4:
                ret = _context5.sent;
                return _context5.abrupt("return", ret);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee3, this);
      }));

      function authenticate(_x3, _x4) {
        return _authenticate.apply(this, arguments);
      }

      return authenticate;
    }()
    /**
     * OAuth2 Revoke Session Token
     */

  }, {
    key: "revokeToken",
    value: function () {
      var _revokeToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(token) {
        var response, res;
        return _regenerator["default"].wrap(function _callee4$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._transport.httpRequest({
                  method: 'POST',
                  url: this.revokeServiceUrl,
                  body: _querystring["default"].stringify({
                    token: token
                  }),
                  headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                  }
                });

              case 2:
                response = _context6.sent;

                if (!(response.statusCode >= 400)) {
                  _context6.next = 7;
                  break;
                }

                res = _querystring["default"].parse(response.body);

                if (!res || !res.error) {
                  res = {
                    error: "ERROR_HTTP_".concat(response.statusCode),
                    error_description: response.body
                  };
                }

                throw new ( /*#__PURE__*/function (_Error) {
                  (0, _inherits2["default"])(_class, _Error);

                  var _super = _createSuper(_class);

                  function _class(_ref) {
                    var _this;

                    var error = _ref.error,
                        error_description = _ref.error_description;
                    (0, _classCallCheck2["default"])(this, _class);
                    _this = _super.call(this, error_description);
                    _this.name = error;
                    return _this;
                  }

                  return _class;
                }( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error)))(res);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee4, this);
      }));

      function revokeToken(_x5) {
        return _revokeToken.apply(this, arguments);
      }

      return revokeToken;
    }()
    /**
     * @private
     */

  }, {
    key: "_postParams",
    value: function () {
      var _postParams2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var response, res;
        return _regenerator["default"].wrap(function _callee5$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._transport.httpRequest({
                  method: 'POST',
                  url: this.tokenServiceUrl,
                  body: _querystring["default"].stringify(params),
                  headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                  }
                });

              case 2:
                response = _context7.sent;

                try {
                  res = JSON.parse(response.body);
                } catch (e) {
                  /* eslint-disable no-empty */
                }

                if (!(response.statusCode >= 400)) {
                  _context7.next = 7;
                  break;
                }

                res = res || {
                  error: "ERROR_HTTP_".concat(response.statusCode),
                  error_description: response.body
                };
                throw new ( /*#__PURE__*/function (_Error2) {
                  (0, _inherits2["default"])(_class2, _Error2);

                  var _super2 = _createSuper(_class2);

                  function _class2(_ref2) {
                    var _this2;

                    var error = _ref2.error,
                        error_description = _ref2.error_description;
                    (0, _classCallCheck2["default"])(this, _class2);
                    _this2 = _super2.call(this, error_description);
                    _this2.name = error;
                    return _this2;
                  }

                  return _class2;
                }( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error)))(res);

              case 7:
                return _context7.abrupt("return", res);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee5, this);
      }));

      function _postParams(_x6) {
        return _postParams2.apply(this, arguments);
      }

      return _postParams;
    }()
  }]);
  return OAuth2;
}();

exports["default"] = OAuth2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vYXV0aDIudHMiXSwibmFtZXMiOlsiZGVmYXVsdE9BdXRoMkNvbmZpZyIsImxvZ2luVXJsIiwiT0F1dGgyIiwiY29uZmlnIiwiYXV0aHpTZXJ2aWNlVXJsIiwidG9rZW5TZXJ2aWNlVXJsIiwicmV2b2tlU2VydmljZVVybCIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwicmVkaXJlY3RVcmkiLCJwcm94eVVybCIsImh0dHBQcm94eSIsInNwbGl0Iiwiam9pbiIsIl90cmFuc3BvcnQiLCJQcm94eVRyYW5zcG9ydCIsIkh0dHBQcm94eVRyYW5zcG9ydCIsIlRyYW5zcG9ydCIsInBhcmFtcyIsIl9wYXJhbXMiLCJyZXNwb25zZV90eXBlIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIiwicXVlcnlzdHJpbmciLCJzdHJpbmdpZnkiLCJyZWZyZXNoVG9rZW4iLCJFcnJvciIsImdyYW50X3R5cGUiLCJyZWZyZXNoX3Rva2VuIiwiY2xpZW50X3NlY3JldCIsIl9wb3N0UGFyYW1zIiwicmV0IiwiY29kZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0b2tlbiIsImh0dHBSZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiYm9keSIsImhlYWRlcnMiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJyZXMiLCJwYXJzZSIsImVycm9yIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJuYW1lIiwiSlNPTiIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7Ozs7Ozs7OztBQUdBLElBQU1BLG1CQUFtQixHQUFHO0FBQzFCQyxFQUFBQSxRQUFRLEVBQUU7QUFEZ0IsQ0FBNUI7QUFJQTtBQUNBO0FBQ0E7O0FBMkJBO0FBQ0E7QUFDQTtJQUNxQkMsTTtBQVduQjtBQUNGO0FBQ0E7QUFDRSxrQkFBWUMsTUFBWixFQUFrQztBQUFBO0FBQUE7QUFBQTtB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QkFBQUEsTUFBTSxFQUFFLE1BRHlDO0FBRWpEQyxrQkFBQUEsR0FBRyxFQUFFLEtBQUtqQyxlQUZ1QztBQUdqRGtDLGtCQUFBQSxJQUFJLEVBQUVoQix3QkFBWUMsU0FBWixDQUFzQk4sTUFBdEIsQ0FIMkM7QUFJakRzQixrQkFBQUEsT0FBTyxFQUFFO0FBQ1Asb0NBQWdCO0FBRFQ7QUFKd0MsaUJBQTVCLEM7OztBQUFqQkMsZ0JBQUFBLFE7O0FBU04sb0JBQUk7QUFDRkUsa0JBQUFBLEdBQUcsR0FBR0ssSUFBSSxDQUFDSixLQUFMLENBQVdILFFBQVEsQ0FBQ0YsSUFBcEIsQ0FBTjtBQUNELGlCQUZELENBRUUsT0FBT1UsQ0FBUCxFQUFVO0FBQ1Y7QUFDRDs7c0JBQ0dSLFFBQVEsQ0FBQ0MsVUFBVCxJQUF1QixHOzs7OztBQUN6QkMsZ0JBQUFBLEdBQUcsR0FBR0EsR0FBRyxJQUFJO0FBQ1hFLGtCQUFBQSxLQUFLLHVCQUFnQkosUUFBUSxDQUFDQyxVQUF6QixDQURNO0FBRVhJLGtCQUFBQSxpQkFBaUIsRUFBRUwsUUFBUSxDQUFDRjtBQUZqQixpQkFBYjtzQkFJTTtBQUFBOztBQUFBOztBQUNKLDBDQU1HO0FBQUE7O0FBQUEsd0JBTERNLEtBS0MsU0FMREEsS0FLQztBQUFBLHdCQUpEQyxpQkFJQyxTQUpEQSxpQkFJQztBQUFBO0FBQ0QsZ0RBQU1BLGlCQUFOO0FBQ0EsMkJBQUtDLElBQUwsR0FBWUYsS0FBWjtBQUZDO0FBR0Y7O0FBVkc7QUFBQSxrRUFBbUJuQixLQUFuQixJQVdIaUIsR0FYRyxDOzs7a0RBYURBLEciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICovXHJcbmltcG9ydCBxdWVyeXN0cmluZyBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBUcmFuc3BvcnQsIHsgUHJveHlUcmFuc3BvcnQsIEh0dHBQcm94eVRyYW5zcG9ydCB9IGZyb20gJy4vdHJhbnNwb3J0JztcclxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmNvbnN0IGRlZmF1bHRPQXV0aDJDb25maWcgPSB7XHJcbiAgbG9naW5Vcmw6ICdodHRwczovL2xvZ2luLnNhbGVzZm9yY2UuY29tJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiB0eXBlIGRlZnNcclxuICovXHJcbmV4cG9ydCB0eXBlIE9BdXRoMkNvbmZpZyA9IHtcclxuICBjbGllbnRJZD86IHN0cmluZztcclxuICBjbGllbnRTZWNyZXQ/OiBzdHJpbmc7XHJcbiAgcmVkaXJlY3RVcmk/OiBzdHJpbmc7XHJcbiAgbG9naW5Vcmw/OiBzdHJpbmc7XHJcbiAgYXV0aHpTZXJ2aWNlVXJsPzogc3RyaW5nO1xyXG4gIHRva2VuU2VydmljZVVybD86IHN0cmluZztcclxuICByZXZva2VTZXJ2aWNlVXJsPzogc3RyaW5nO1xyXG4gIHByb3h5VXJsPzogc3RyaW5nO1xyXG4gIGh0dHBQcm94eT86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEF1dGh6UmVxdWVzdFBhcmFtcyA9IHtcclxuICBzY29wZT86IHN0cmluZztcclxuICBzdGF0ZT86IHN0cmluZztcclxufSAmIHtcclxuICBbYXR0cjogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVG9rZW5SZXNwb25zZSA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGFjY2Vzc190b2tlbjogc3RyaW5nO1xyXG4gIHJlZnJlc2hfdG9rZW46IHN0cmluZztcclxuICBpbnN0YW5jZV91cmw6IHN0cmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBPQXV0aDIgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9BdXRoMiB7XHJcbiAgbG9naW5Vcmw6IHN0cmluZztcclxuICBhdXRoelNlcnZpY2VVcmw6IHN0cmluZztcclxuICB0b2tlblNlcnZpY2VVcmw6IHN0cmluZztcclxuICByZXZva2VTZXJ2aWNlVXJsOiBzdHJpbmc7XHJcbiAgY2xpZW50SWQ6IE9wdGlvbmFsPHN0cmluZz47XHJcbiAgY2xpZW50U2VjcmV0OiBPcHRpb25hbDxzdHJpbmc+O1xyXG4gIHJlZGlyZWN0VXJpOiBPcHRpb25hbDxzdHJpbmc+O1xyXG5cclxuICBfdHJhbnNwb3J0OiBUcmFuc3BvcnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBPQXV0aDJDb25maWcpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbG9naW5VcmwsXHJcbiAgICAgIGF1dGh6U2VydmljZVVybCxcclxuICAgICAgdG9rZW5TZXJ2aWNlVXJsLFxyXG4gICAgICByZXZva2VTZXJ2aWNlVXJsLFxyXG4gICAgICBjbGllbnRJZCxcclxuICAgICAgY2xpZW50U2VjcmV0LFxyXG4gICAgICByZWRpcmVjdFVyaSxcclxuICAgICAgcHJveHlVcmwsXHJcbiAgICAgIGh0dHBQcm94eSxcclxuICAgIH0gPSBjb25maWc7XHJcbiAgICBpZiAoYXV0aHpTZXJ2aWNlVXJsICYmIHRva2VuU2VydmljZVVybCkge1xyXG4gICAgICB0aGlzLmxvZ2luVXJsID0gYXV0aHpTZXJ2aWNlVXJsXHJcbiAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAuc2xpY2UoMCwgMylcclxuICAgICAgICAuam9pbignLycpO1xyXG4gICAgICB0aGlzLmF1dGh6U2VydmljZVVybCA9IGF1dGh6U2VydmljZVVybDtcclxuICAgICAgdGhpcy50b2tlblNlcnZpY2VVcmwgPSB0b2tlblNlcnZpY2VVcmw7XHJcbiAgICAgIHRoaXMucmV2b2tlU2VydmljZVVybCA9XHJcbiAgICAgICAgcmV2b2tlU2VydmljZVVybCB8fCBgJHt0aGlzLmxvZ2luVXJsfS9zZXJ2aWNlcy9vYXV0aDIvcmV2b2tlYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9naW5VcmwgPSBsb2dpblVybCB8fCBkZWZhdWx0T0F1dGgyQ29uZmlnLmxvZ2luVXJsO1xyXG4gICAgICB0aGlzLmF1dGh6U2VydmljZVVybCA9IGAke3RoaXMubG9naW5Vcmx9L3NlcnZpY2VzL29hdXRoMi9hdXRob3JpemVgO1xyXG4gICAgICB0aGlzLnRva2VuU2VydmljZVVybCA9IGAke3RoaXMubG9naW5Vcmx9L3NlcnZpY2VzL29hdXRoMi90b2tlbmA7XHJcbiAgICAgIHRoaXMucmV2b2tlU2VydmljZVVybCA9IGAke3RoaXMubG9naW5Vcmx9L3NlcnZpY2VzL29hdXRoMi9yZXZva2VgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgdGhpcy5jbGllbnRTZWNyZXQgPSBjbGllbnRTZWNyZXQ7XHJcbiAgICB0aGlzLnJlZGlyZWN0VXJpID0gcmVkaXJlY3RVcmk7XHJcbiAgICBpZiAocHJveHlVcmwpIHtcclxuICAgICAgdGhpcy5fdHJhbnNwb3J0ID0gbmV3IFByb3h5VHJhbnNwb3J0KHByb3h5VXJsKTtcclxuICAgIH0gZWxzZSBpZiAoaHR0cFByb3h5KSB7XHJcbiAgICAgIHRoaXMuX3RyYW5zcG9ydCA9IG5ldyBIdHRwUHJveHlUcmFuc3BvcnQoaHR0cFByb3h5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RyYW5zcG9ydCA9IG5ldyBUcmFuc3BvcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBTYWxlc2ZvcmNlIE9BdXRoMiBhdXRob3JpemF0aW9uIHBhZ2UgVVJMIHRvIHJlZGlyZWN0IHVzZXIgYWdlbnQuXHJcbiAgICovXHJcbiAgZ2V0QXV0aG9yaXphdGlvblVybChwYXJhbXM6IEF1dGh6UmVxdWVzdFBhcmFtcyA9IHt9KSB7XHJcbiAgICBjb25zdCBfcGFyYW1zID0ge1xyXG4gICAgICAuLi5wYXJhbXMsXHJcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICdjb2RlJyxcclxuICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudElkLFxyXG4gICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RVcmksXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5hdXRoelNlcnZpY2VVcmwgK1xyXG4gICAgICAodGhpcy5hdXRoelNlcnZpY2VVcmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICtcclxuICAgICAgcXVlcnlzdHJpbmcuc3RyaW5naWZ5KF9wYXJhbXMgYXMgeyBbbmFtZTogc3RyaW5nXTogYW55IH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT0F1dGgyIFJlZnJlc2ggVG9rZW4gRmxvd1xyXG4gICAqL1xyXG4gIGFzeW5jIHJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW46IHN0cmluZyk6IFByb21pc2U8VG9rZW5SZXNwb25zZT4ge1xyXG4gICAgaWYgKCF0aGlzLmNsaWVudElkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gT0F1dGgyIGNsaWVudCBpZCBpbmZvcm1hdGlvbiBpcyBzcGVjaWZpZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmFtczogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICAgIGdyYW50X3R5cGU6ICdyZWZyZXNoX3Rva2VuJyxcclxuICAgICAgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuLFxyXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuY2xpZW50U2VjcmV0KSB7XHJcbiAgICAgIHBhcmFtcy5jbGllbnRfc2VjcmV0ID0gdGhpcy5jbGllbnRTZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXQgPSBhd2FpdCB0aGlzLl9wb3N0UGFyYW1zKHBhcmFtcyk7XHJcbiAgICByZXR1cm4gcmV0IGFzIFRva2VuUmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPQXV0aDIgV2ViIFNlcnZlciBBdXRoZW50aWNhdGlvbiBGbG93IChBdXRob3JpemF0aW9uIENvZGUpXHJcbiAgICogQWNjZXNzIFRva2VuIFJlcXVlc3RcclxuICAgKi9cclxuICBhc3luYyByZXF1ZXN0VG9rZW4oXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9ID0ge30sXHJcbiAgKTogUHJvbWlzZTxUb2tlblJlc3BvbnNlPiB7XHJcbiAgICBpZiAoIXRoaXMuY2xpZW50SWQgfHwgIXRoaXMucmVkaXJlY3RVcmkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdObyBPQXV0aDIgY2xpZW50IGlkIG9yIHJlZGlyZWN0IHVyaSBjb25maWd1cmF0aW9uIGlzIHNwZWNpZmllZCcsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfcGFyYW1zOiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcclxuICAgICAgY29kZSxcclxuICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudElkLFxyXG4gICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RVcmksXHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuY2xpZW50U2VjcmV0KSB7XHJcbiAgICAgIF9wYXJhbXMuY2xpZW50X3NlY3JldCA9IHRoaXMuY2xpZW50U2VjcmV0O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmV0ID0gYXdhaXQgdGhpcy5fcG9zdFBhcmFtcyhfcGFyYW1zKTtcclxuICAgIHJldHVybiByZXQgYXMgVG9rZW5SZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9BdXRoMiBVc2VybmFtZS1QYXNzd29yZCBGbG93IChSZXNvdXJjZSBPd25lciBQYXNzd29yZCBDcmVkZW50aWFscylcclxuICAgKi9cclxuICBhc3luYyBhdXRoZW50aWNhdGUoXHJcbiAgICB1c2VybmFtZTogc3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICApOiBQcm9taXNlPFRva2VuUmVzcG9uc2U+IHtcclxuICAgIGlmICghdGhpcy5jbGllbnRJZCB8fCAhdGhpcy5jbGllbnRTZWNyZXQgfHwgIXRoaXMucmVkaXJlY3RVcmkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2YWxpZCBPQXV0aDIgY2xpZW50IGNvbmZpZ3VyYXRpb24gc2V0Jyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXQgPSBhd2FpdCB0aGlzLl9wb3N0UGFyYW1zKHtcclxuICAgICAgZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXHJcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50U2VjcmV0LFxyXG4gICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RVcmksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXQgYXMgVG9rZW5SZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9BdXRoMiBSZXZva2UgU2Vzc2lvbiBUb2tlblxyXG4gICAqL1xyXG4gIGFzeW5jIHJldm9rZVRva2VuKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fdHJhbnNwb3J0Lmh0dHBSZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogdGhpcy5yZXZva2VTZXJ2aWNlVXJsLFxyXG4gICAgICBib2R5OiBxdWVyeXN0cmluZy5zdHJpbmdpZnkoeyB0b2tlbiB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gNDAwKSB7XHJcbiAgICAgIGxldCByZXM6IGFueSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICBpZiAoIXJlcyB8fCAhcmVzLmVycm9yKSB7XHJcbiAgICAgICAgcmVzID0ge1xyXG4gICAgICAgICAgZXJyb3I6IGBFUlJPUl9IVFRQXyR7cmVzcG9uc2Uuc3RhdHVzQ29kZX1gLFxyXG4gICAgICAgICAgZXJyb3JfZGVzY3JpcHRpb246IHJlc3BvbnNlLmJvZHksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICB0aHJvdyBuZXcgKGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgZXJyb3JfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgfToge1xyXG4gICAgICAgICAgZXJyb3I6IHN0cmluZztcclxuICAgICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgfSkge1xyXG4gICAgICAgICAgc3VwZXIoZXJyb3JfZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgdGhpcy5uYW1lID0gZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KShyZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBhc3luYyBfcG9zdFBhcmFtcyhwYXJhbXM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fdHJhbnNwb3J0Lmh0dHBSZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogdGhpcy50b2tlblNlcnZpY2VVcmwsXHJcbiAgICAgIGJvZHk6IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBsZXQgcmVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzID0gSlNPTi5wYXJzZShyZXNwb25zZS5ib2R5KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID49IDQwMCkge1xyXG4gICAgICByZXMgPSByZXMgfHwge1xyXG4gICAgICAgIGVycm9yOiBgRVJST1JfSFRUUF8ke3Jlc3BvbnNlLnN0YXR1c0NvZGV9YCxcclxuICAgICAgICBlcnJvcl9kZXNjcmlwdGlvbjogcmVzcG9uc2UuYm9keSxcclxuICAgICAgfTtcclxuICAgICAgdGhyb3cgbmV3IChjbGFzcyBleHRlbmRzIEVycm9yIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgIH06IHtcclxuICAgICAgICAgIGVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgICBlcnJvcl9kZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIH0pIHtcclxuICAgICAgICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHRoaXMubmFtZSA9IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkocmVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==