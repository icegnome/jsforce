"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

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

var _toPrimitive2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol/to-primitive"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _getIteratorMethod2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator-method"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _events = require("events");

var _jsforce = _interopRequireDefault(require("./jsforce"));

var _transport = _interopRequireWildcard(require("./transport"));

var _logger = require("./util/logger");

var _oauth = _interopRequireDefault(require("./oauth2"));

var _cache = _interopRequireDefault(require("./cache"));

var _httpApi = _interopRequireDefault(require("./http-api"));

var _sessionRefreshDelegate = _interopRequireDefault(require("./session-refresh-delegate"));

var _query = _interopRequireDefault(require("./query"));

var _sobject = _interopRequireDefault(require("./sobject"));

var _quickAction = _interopRequireDefault(require("./quick-action"));

var _formatter = require("./util/formatter");

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2["default"])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2["default"])(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2["default"]]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2["default"])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _symbol["default"] === "undefined" || (0, _getIteratorMethod2["default"])(o) == null) { if ((0, _isArray["default"])(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2["default"])(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context48; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = (0, _slice["default"])(_context48 = Object.prototype.toString.call(o)).call(_context48, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from["default"])(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context50; (0, _forEach["default"])(_context50 = ownKeys(Object(source), true)).call(_context50, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context51; (0, _forEach["default"])(_context51 = ownKeys(Object(source))).call(_context51, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 *
 */
var defaultConnectionConfig = {
  loginUrl: 'https://login.salesforce.com',
  instanceUrl: '',
  version: '43.0',
  logLevel: 'NONE',
  maxRequest: 10
};
/**
 *
 */

function esc(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
/**
 *
 */


function parseSignedRequest(sr) {
  if (typeof sr === 'string') {
    if (sr[0] === '{') {
      // might be JSON
      return JSON.parse(sr);
    } // might be original base64-encoded signed request


    var msg = sr.split('.').pop(); // retrieve latter part

    if (!msg) {
      throw new Error('Invalid signed request');
    }

    var json = Buffer.from(msg, 'base64').toString('utf-8');
    return JSON.parse(json);
  }

  return sr;
}
/** @private **/


function parseIdUrl(url) {
  var _context;

  var _url$split$slice = (0, _slice["default"])(_context = url.split('/')).call(_context, -2),
      _url$split$slice2 = (0, _slicedToArray2["default"])(_url$split$slice, 2),
      organizationId = _url$split$slice2[0],
      id = _url$split$slice2[1];

  return {
    id: id,
    organizationId: organizationId,
    url: url
  };
}
/**
 * Session Refresh delegate function for OAuth2 authz code flow
 * @private
 */


function oauthRefreshFn(_x, _x2) {
  return _oauthRefreshFn.apply(this, arguments);
}
/**
 * Session Refresh delegate function for username/password login
 * @private
 */


function _oauthRefreshFn() {
  _oauthRefreshFn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee35(conn, callback) {
    var res, userInfo;
    return _regenerator["default"].wrap(function _callee35$(_context49) {
      while (1) {
        switch (_context49.prev = _context49.next) {
          case 0:
            _context49.prev = 0;

            if (conn.refreshToken) {
              _context49.next = 3;
              break;
            }

            throw new Error('No refresh token found in the connection');

          case 3:
            _context49.next = 5;
            return conn.oauth2.refreshToken(conn.refreshToken);

          case 5:
            res = _context49.sent;
            userInfo = parseIdUrl(res.id);

            conn._establish({
              instanceUrl: res.instance_url,
              accessToken: res.access_token,
              userInfo: userInfo
            });

            callback(undefined, res.access_token, res);
            _context49.next = 14;
            break;

          case 11:
            _context49.prev = 11;
            _context49.t0 = _context49["catch"](0);
            callback(_context49.t0);

          case 14:
          case "end":
            return _context49.stop();
        }
      }
    }, _callee35, null, [[0, 11]]);
  }));
  return _oauthRefreshFn.apply(this, arguments);
}

function createUsernamePasswordRefreshFn(username, password) {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(conn, callback) {
      return _regenerator["default"].wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return conn.login(username, password);

            case 3:
              if (conn.accessToken) {
                _context2.next = 5;
                break;
              }

              throw new Error('Access token not found after login');

            case 5:
              callback(null, conn.accessToken);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              callback(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
}
/**
 * @private
 */


function toSaveResult(id, err) {
  return _objectSpread(_objectSpread({}, id ? {
    id: id
  } : {}), {}, {
    success: false,
    errors: [err]
  });
}
/**
 *
 */


function raiseNoModuleError(name) {
  var _context3;

  throw new Error((0, _concat["default"])(_context3 = "API module '".concat(name, "' is not loaded, load 'jsforce/api/")).call(_context3, name, "' explicitly"));
}
/*
 * Constant of maximum records num in DML operation (update/delete)
 */


var MAX_DML_COUNT = 200;
/**
 *
 */

var Connection = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2["default"])(Connection, _EventEmitter);

  var _super = _createSuper(Connection);

  (0, _createClass2["default"])(Connection, [{
    key: "apex",
    // describe: (name: string) => Promise<DescribeSObjectResult>;
    // describeGlobal: () => Promise<DescribeGlobalResult>;
    // API libs are not instantiated here so that core module to remain without dependencies to them
    // It is responsible for develpers to import api libs explicitly if they are using 'jsforce/core' instead of 'jsforce'.
    get: function get() {
      return raiseNoModuleError('apex');
    }
  }, {
    key: "metadata",
    get: function get() {
      return raiseNoModuleError('metadata');
    }
  }, {
    key: "soap",
    get: function get() {
      return raiseNoModuleError('soap');
    }
    /**
     *
     */

  }]);

  function Connection() {
    var _this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Connection);
    _this = _super.call(this);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "version", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "loginUrl", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "instanceUrl", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "accessToken", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "refreshToken", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "userInfo", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "limitInfo", {});
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "oauth2", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "sobjects", {});
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "cache", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_callOptions", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_maxRequest", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_logger", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_logLevel", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_transport", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_sessionType", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_refreshDelegate", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "describe$", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "describe$$", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "describeSObject", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "describeSObject$", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "describeSObject$$", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "describeGlobal$", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "describeGlobal$$", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "insert", _this.create);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "delete", _this.destroy);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "del", _this.destroy);
    var loginUrl = config.loginUrl,
        instanceUrl = config.instanceUrl,
        version = config.version,
        oauth2 = config.oauth2,
        maxRequest = config.maxRequest,
        logLevel = config.logLevel,
        proxyUrl = config.proxyUrl,
        httpProxy = config.httpProxy;
    _this.loginUrl = loginUrl || defaultConnectionConfig.loginUrl;
    _this.instanceUrl = instanceUrl || defaultConnectionConfig.instanceUrl;
    _this.version = version || defaultConnectionConfig.version;
    _this.oauth2 = oauth2 ? oauth2 instanceof _oauth["default"] ? oauth2 : new _oauth["default"](oauth2) : new _oauth["default"]({
      loginUrl: _this.loginUrl
    });
    var refreshFn = config.refreshFn;

    if (!refreshFn && _this.oauth2.clientId) {
      refreshFn = oauthRefreshFn;
    }

    if (refreshFn) {
      _this._refreshDelegate = new _sessionRefreshDelegate["default"]((0, _assertThisInitialized2["default"])(_this), refreshFn);
    }

    _this._maxRequest = maxRequest || defaultConnectionConfig.maxRequest;
    _this._logger = logLevel ? Connection._logger.createInstance(logLevel) : Connection._logger;
    _this._logLevel = logLevel;
    _this._transport = proxyUrl ? new _transport.ProxyTransport(proxyUrl) : httpProxy ? new _transport.HttpProxyTransport(httpProxy) : new _transport["default"]();
    _this._callOptions = config.callOptions;
    _this.cache = new _cache["default"]();

    var describeCacheKey = function describeCacheKey(type) {
      return type ? "describe.".concat(type) : 'describe';
    };

    var describe = Connection.prototype.describe;
    _this.describe = _this.cache.createCachedFunction(describe, (0, _assertThisInitialized2["default"])(_this), {
      key: describeCacheKey,
      strategy: 'NOCACHE'
    });
    _this.describe$ = _this.cache.createCachedFunction(describe, (0, _assertThisInitialized2["default"])(_this), {
      key: describeCacheKey,
      strategy: 'HIT'
    });
    _this.describe$$ = _this.cache.createCachedFunction(describe, (0, _assertThisInitialized2["default"])(_this), {
      key: describeCacheKey,
      strategy: 'IMMEDIATE'
    });
    _this.describeSObject = _this.describe;
    _this.describeSObject$ = _this.describe$;
    _this.describeSObject$$ = _this.describe$$;
    var describeGlobal = Connection.prototype.describeGlobal;
    _this.describeGlobal = _this.cache.createCachedFunction(describeGlobal, (0, _assertThisInitialized2["default"])(_this), {
      key: 'describeGlobal',
      strategy: 'NOCACHE'
    });
    _this.describeGlobal$ = _this.cache.createCachedFunction(describeGlobal, (0, _assertThisInitialized2["default"])(_this), {
      key: 'describeGlobal',
      strategy: 'HIT'
    });
    _this.describeGlobal$$ = _this.cache.createCachedFunction(describeGlobal, (0, _assertThisInitialized2["default"])(_this), {
      key: 'describeGlobal',
      strategy: 'IMMEDIATE'
    });
    var accessToken = config.accessToken,
        refreshToken = config.refreshToken,
        sessionId = config.sessionId,
        serverUrl = config.serverUrl,
        signedRequest = config.signedRequest;

    _this._establish({
      accessToken: accessToken,
      refreshToken: refreshToken,
      instanceUrl: instanceUrl,
      sessionId: sessionId,
      serverUrl: serverUrl,
      signedRequest: signedRequest
    });

    _jsforce["default"].emit('connection:new', (0, _assertThisInitialized2["default"])(_this));

    return _this;
  }
  /* @private */


  (0, _createClass2["default"])(Connection, [{
    key: "_establish",
    value: function _establish(options) {
      var _context4;

      var accessToken = options.accessToken,
          refreshToken = options.refreshToken,
          instanceUrl = options.instanceUrl,
          sessionId = options.sessionId,
          serverUrl = options.serverUrl,
          signedRequest = options.signedRequest,
          userInfo = options.userInfo;
      this.instanceUrl = serverUrl ? (0, _slice["default"])(_context4 = serverUrl.split('/')).call(_context4, 0, 3).join('/') : instanceUrl || this.instanceUrl;
      this.accessToken = sessionId || accessToken || this.accessToken;
      this.refreshToken = refreshToken || this.refreshToken;

      if (this.refreshToken && !this._refreshDelegate) {
        throw new Error('Refresh token is specified without oauth2 client information or refresh function');
      }

      var signedRequestObject = signedRequest && parseSignedRequest(signedRequest);

      if (signedRequestObject) {
        this.accessToken = signedRequestObject.client.oauthToken;

        if (_transport.CanvasTransport.supported) {
          this._transport = new _transport.CanvasTransport(signedRequestObject);
        }
      }

      this.userInfo = userInfo || this.userInfo;
      this._sessionType = sessionId ? 'soap' : 'oauth2';

      this._resetInstance();
    }
    /* @priveate */

  }, {
    key: "_clearSession",
    value: function _clearSession() {
      this.accessToken = null;
      this.refreshToken = null;
      this.instanceUrl = defaultConnectionConfig.instanceUrl;
      this.userInfo = null;
      this._sessionType = null;
    }
    /* @priveate */

  }, {
    key: "_resetInstance",
    value: function _resetInstance() {
      var _this2 = this;

      this.limitInfo = {};
      this.sobjects = {}; // TODO impl cache

      this.cache.clear();
      this.cache.get('describeGlobal').removeAllListeners('value');
      this.cache.get('describeGlobal').on('value', function (_ref2) {
        var result = _ref2.result;

        if (result) {
          var _iterator = _createForOfIteratorHelper(result.sobjects),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var so = _step.value;

              _this2.sobject(so.name);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      });
      /*
      if (this.tooling) {
        this.tooling._resetInstance();
      }
      */
    }
    /**
     * Authorize (using oauth2 web server flow)
     */

  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(code) {
        var _context5;

        var params,
            res,
            userInfo,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                _context6.next = 3;
                return this.oauth2.requestToken(code, params);

              case 3:
                res = _context6.sent;
                userInfo = parseIdUrl(res.id);

                this._establish({
                  instanceUrl: res.instance_url,
                  accessToken: res.access_token,
                  refreshToken: res.refresh_token,
                  userInfo: userInfo
                });

                this._logger.debug((0, _concat["default"])(_context5 = "<login> completed. user id = ".concat(userInfo.id, ", org id = ")).call(_context5, userInfo.organizationId));

                return _context6.abrupt("return", userInfo);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee2, this);
      }));

      function authorize(_x5) {
        return _authorize.apply(this, arguments);
      }

      return authorize;
    }()
    /**
     *
     */

  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(username, password) {
        return _regenerator["default"].wrap(function _callee3$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._refreshDelegate = new _sessionRefreshDelegate["default"](this, createUsernamePasswordRefreshFn(username, password));

                if (!(this.oauth2 && this.oauth2.clientId && this.oauth2.clientSecret)) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return", this.loginByOAuth2(username, password));

              case 3:
                return _context7.abrupt("return", this.loginBySoap(username, password));

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee3, this);
      }));

      function login(_x6, _x7) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /**
     * Login by OAuth2 username & password flow
     */

  }, {
    key: "loginByOAuth2",
    value: function () {
      var _loginByOAuth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(username, password) {
        var _context8;

        var res, userInfo;
        return _regenerator["default"].wrap(function _callee4$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.oauth2.authenticate(username, password);

              case 2:
                res = _context9.sent;
                userInfo = parseIdUrl(res.id);

                this._establish({
                  instanceUrl: res.instance_url,
                  accessToken: res.access_token,
                  userInfo: userInfo
                });

                this._logger.info((0, _concat["default"])(_context8 = "<login> completed. user id = ".concat(userInfo.id, ", org id = ")).call(_context8, userInfo.organizationId));

                return _context9.abrupt("return", userInfo);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee4, this);
      }));

      function loginByOAuth2(_x8, _x9) {
        return _loginByOAuth.apply(this, arguments);
      }

      return loginByOAuth2;
    }()
    /**
     *
     */

  }, {
    key: "loginBySoap",
    value: function () {
      var _loginBySoap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(username, password) {
        var _context10, _context11;

        var body, soapLoginEndpoint, response, m, faultstring, serverUrl, sessionId, userId, organizationId, idUrl, userInfo;
        return _regenerator["default"].wrap(function _callee5$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(!username || !password)) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt("return", _promise["default"].reject(new Error('no username password given')));

              case 2:
                body = ['<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/">', '<se:Header/>', '<se:Body>', '<login xmlns="urn:partner.soap.sforce.com">', "<username>".concat(esc(username), "</username>"), "<password>".concat(esc(password), "</password>"), '</login>', '</se:Body>', '</se:Envelope>'].join('');
                soapLoginEndpoint = [this.loginUrl, 'services/Soap/u', this.version].join('/');
                _context12.next = 6;
                return this._transport.httpRequest({
                  method: 'POST',
                  url: soapLoginEndpoint,
                  body: body,
                  headers: {
                    'Content-Type': 'text/xml',
                    SOAPAction: '""'
                  }
                });

              case 6:
                response = _context12.sent;

                if (!(response.statusCode >= 400)) {
                  _context12.next = 11;
                  break;
                }

                m = response.body.match(/<faultstring>([^<]+)<\/faultstring>/);
                faultstring = m && m[1];
                throw new Error(faultstring || response.body);

              case 11:
                this._logger.debug("SOAP response = ".concat(response.body));

                m = response.body.match(/<serverUrl>([^<]+)<\/serverUrl>/);
                serverUrl = m && m[1];
                m = response.body.match(/<sessionId>([^<]+)<\/sessionId>/);
                sessionId = m && m[1];
                m = response.body.match(/<userId>([^<]+)<\/userId>/);
                userId = m && m[1];
                m = response.body.match(/<organizationId>([^<]+)<\/organizationId>/);
                organizationId = m && m[1];

                if (!(!serverUrl || !sessionId || !userId || !organizationId)) {
                  _context12.next = 22;
                  break;
                }

                throw new Error('could not extract session information from login response');

              case 22:
                idUrl = [this.loginUrl, 'id', organizationId, userId].join('/');
                userInfo = {
                  id: userId,
                  organizationId: organizationId,
                  url: idUrl
                };

                this._establish({
                  serverUrl: (0, _slice["default"])(_context10 = serverUrl.split('/')).call(_context10, 0, 3).join('/'),
                  sessionId: sessionId,
                  userInfo: userInfo
                });

                this._logger.info((0, _concat["default"])(_context11 = "<login> completed. user id = ".concat(userId, ", org id = ")).call(_context11, organizationId));

                return _context12.abrupt("return", userInfo);

              case 27:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee5, this);
      }));

      function loginBySoap(_x10, _x11) {
        return _loginBySoap.apply(this, arguments);
      }

      return loginBySoap;
    }()
    /**
     * Logout the current session
     */

  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(revoke) {
        return _regenerator["default"].wrap(function _callee6$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this._refreshDelegate = undefined;

                if (!(this._sessionType === 'oauth2')) {
                  _context13.next = 3;
                  break;
                }

                return _context13.abrupt("return", this.logoutByOAuth2(revoke));

              case 3:
                return _context13.abrupt("return", this.logoutBySoap(revoke));

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee6, this);
      }));

      function logout(_x12) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /**
     * Logout the current session by revoking access token via OAuth2 session revoke
     */

  }, {
    key: "logoutByOAuth2",
    value: function () {
      var _logoutByOAuth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(revoke) {
        var token;
        return _regenerator["default"].wrap(function _callee7$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                token = revoke ? this.refreshToken : this.accessToken;

                if (!token) {
                  _context14.next = 4;
                  break;
                }

                _context14.next = 4;
                return this.oauth2.revokeToken(token);

              case 4:
                // Destroy the session bound to this connection
                this._clearSession();

                this._resetInstance();

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee7, this);
      }));

      function logoutByOAuth2(_x13) {
        return _logoutByOAuth.apply(this, arguments);
      }

      return logoutByOAuth2;
    }()
    /**
     * Logout the session by using SOAP web service API
     */

  }, {
    key: "logoutBySoap",
    value: function () {
      var _logoutBySoap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(revoke) {
        var _context15;

        var body, response, m, faultstring;
        return _regenerator["default"].wrap(function _callee8$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                body = ['<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/">', '<se:Header>', '<SessionHeader xmlns="urn:partner.soap.sforce.com">', "<sessionId>".concat(esc(revoke ? this.refreshToken : this.accessToken), "</sessionId>"), '</SessionHeader>', '</se:Header>', '<se:Body>', '<logout xmlns="urn:partner.soap.sforce.com"/>', '</se:Body>', '</se:Envelope>'].join('');
                _context16.next = 3;
                return this._transport.httpRequest({
                  method: 'POST',
                  url: [this.instanceUrl, 'services/Soap/u', this.version].join('/'),
                  body: body,
                  headers: {
                    'Content-Type': 'text/xml',
                    SOAPAction: '""'
                  }
                });

              case 3:
                response = _context16.sent;

                this._logger.debug((0, _concat["default"])(_context15 = "SOAP statusCode = ".concat(response.statusCode, ", response = ")).call(_context15, response.body));

                if (!(response.statusCode >= 400)) {
                  _context16.next = 9;
                  break;
                }

                m = response.body.match(/<faultstring>([^<]+)<\/faultstring>/);
                faultstring = m && m[1];
                throw new Error(faultstring || response.body);

              case 9:
                // Destroy the session bound to this connection
                this._clearSession();

                this._resetInstance();

              case 11:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee8, this);
      }));

      function logoutBySoap(_x14) {
        return _logoutBySoap.apply(this, arguments);
      }

      return logoutBySoap;
    }()
    /**
     * Send REST API request with given HTTP request info, with connected session information.
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */

  }, {
    key: "request",
    value: function request(_request2) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // if request is simple string, regard it as url in GET method
      var _request = typeof _request2 === 'string' ? {
        method: 'GET',
        url: _request2
      } : _request2; // if url is given in relative path, prepend base url or instance url before.


      _request = (0, _assign["default"])({}, _request, {
        url: this._normalizeUrl(_request.url)
      });
      var httpApi = new _httpApi["default"](this, options); // log api usage and its quota

      httpApi.on('response', function (response) {
        if (response.headers && response.headers['sforce-limit-info']) {
          var apiUsage = response.headers['sforce-limit-info'].match(/api-usage=(\d+)\/(\d+)/);

          if (apiUsage) {
            _this3.limitInfo = {
              apiUsage: {
                used: (0, _parseInt2["default"])(apiUsage[1], 10),
                limit: (0, _parseInt2["default"])(apiUsage[2], 10)
              }
            };
          }
        }
      });
      return httpApi.request(_request);
    }
    /**
     * Send HTTP GET request
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */

  }, {
    key: "requestGet",
    value: function requestGet(url, options) {
      var request = {
        method: 'GET',
        url: url
      };
      return this.request(request, options);
    }
    /**
     * Send HTTP POST request with JSON body, with connected session information
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */

  }, {
    key: "requestPost",
    value: function requestPost(url, body, options) {
      var request = {
        method: 'POST',
        url: url,
        body: (0, _stringify["default"])(body),
        headers: {
          'content-type': 'application/json'
        }
      };
      return this.request(request, options);
    }
    /**
     * Send HTTP PUT request with JSON body, with connected session information
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */

  }, {
    key: "requestPut",
    value: function requestPut(url, body, options) {
      var request = {
        method: 'PUT',
        url: url,
        body: (0, _stringify["default"])(body),
        headers: {
          'content-type': 'application/json'
        }
      };
      return this.request(request, options);
    }
    /**
     * Send HTTP PATCH request with JSON body
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */

  }, {
    key: "requestPatch",
    value: function requestPatch(url, body, options) {
      var request = {
        method: 'PATCH',
        url: url,
        body: (0, _stringify["default"])(body),
        headers: {
          'content-type': 'application/json'
        }
      };
      return this.request(request, options);
    }
    /**
     * Send HTTP DELETE request
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */

  }, {
    key: "requestDelete",
    value: function requestDelete(url, options) {
      var request = {
        method: 'DELETE',
        url: url
      };
      return this.request(request, options);
    }
    /** @private **/

  }, {
    key: "_baseUrl",
    value: function _baseUrl() {
      return [this.instanceUrl, 'services/data', "v".concat(this.version)].join('/');
    }
    /**
     * Convert path to absolute url
     * @private
     */

  }, {
    key: "_normalizeUrl",
    value: function _normalizeUrl(url) {
      if (url[0] === '/') {
        if ((0, _indexOf["default"])(url).call(url, '/services/') === 0) {
          return this.instanceUrl + url;
        }

        return this._baseUrl() + url;
      }

      return url;
    }
    /**
     *
     */

  }, {
    key: "query",
    value: function query(soql, options) {
      return new _query["default"](this, soql, options);
    }
    /**
     *
     */

  }, {
    key: "queryMore",
    value: function queryMore(locator, options) {
      return new _query["default"](this, {
        locator: locator
      }, options);
    }
    /* */

  }, {
    key: "_ensureVersion",
    value: function _ensureVersion(majorVersion) {
      var versions = this.version.split('.');
      return (0, _parseInt2["default"])(versions[0], 10) >= majorVersion;
    }
    /* */

  }, {
    key: "_supports",
    value: function _supports(feature) {
      switch (feature) {
        case 'sobject-collection':
          // sobject collection is available only in API ver 42.0+
          return this._ensureVersion(42);

        default:
          return false;
      }
    }
    /**
     * Retrieve specified records
     */

  }, {
    key: "retrieve",
    value: function () {
      var _retrieve = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(type, ids) {
        var options,
            _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                options = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : {};
                return _context17.abrupt("return", (0, _isArray["default"])(ids) ? // check the version whether SObject collection API is supported (42.0)
                this._ensureVersion(42) ? this._retrieveMany(type, ids, options) : this._retrieveParallel(type, ids, options) : this._retrieveSingle(type, ids, options));

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee9, this);
      }));

      function retrieve(_x15, _x16) {
        return _retrieve.apply(this, arguments);
      }

      return retrieve;
    }()
    /** @private */

  }, {
    key: "_retrieveSingle",
    value: function () {
      var _retrieveSingle2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(type, id, options) {
        var url, fields, headers;
        return _regenerator["default"].wrap(function _callee10$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (id) {
                  _context18.next = 2;
                  break;
                }

                throw new Error('Invalid record ID. Specify valid record ID value');

              case 2:
                url = [this._baseUrl(), 'sobjects', type, id].join('/');
                fields = options.fields, headers = options.headers;

                if (fields) {
                  url += "?fields=".concat(fields.join(','));
                }

                return _context18.abrupt("return", this.request({
                  method: 'GET',
                  url: url,
                  headers: headers
                }));

              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee10, this);
      }));

      function _retrieveSingle(_x17, _x18, _x19) {
        return _retrieveSingle2.apply(this, arguments);
      }

      return _retrieveSingle;
    }()
    /** @private */

  }, {
    key: "_retrieveParallel",
    value: function () {
      var _retrieveParallel2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(type, ids, options) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee11$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!(ids.length > this._maxRequest)) {
                  _context19.next = 2;
                  break;
                }

                throw new Error('Exceeded max limit of concurrent call');

              case 2:
                return _context19.abrupt("return", _promise["default"].all((0, _map["default"])(ids).call(ids, function (id) {
                  return _this4._retrieveSingle(type, id, options)["catch"](function (err) {
                    if (options.allOrNone || err.errorCode !== 'NOT_FOUND') {
                      throw err;
                    }

                    return null;
                  });
                })));

              case 3:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee11, this);
      }));

      function _retrieveParallel(_x20, _x21, _x22) {
        return _retrieveParallel2.apply(this, arguments);
      }

      return _retrieveParallel;
    }()
    /** @private */

  }, {
    key: "_retrieveMany",
    value: function () {
      var _retrieveMany2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(type, ids, options) {
        var _context20;

        var url, fields;
        return _regenerator["default"].wrap(function _callee12$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!(ids.length === 0)) {
                  _context21.next = 2;
                  break;
                }

                return _context21.abrupt("return", []);

              case 2:
                url = [this._baseUrl(), 'composite', 'sobjects', type].join('/');
                _context21.t0 = options.fields;

                if (_context21.t0) {
                  _context21.next = 10;
                  break;
                }

                _context21.t1 = _map["default"];
                _context21.next = 8;
                return this.describe$(type);

              case 8:
                _context21.t2 = _context20 = _context21.sent.fields;
                _context21.t0 = (0, _context21.t1)(_context21.t2).call(_context20, function (field) {
                  return field.name;
                });

              case 10:
                fields = _context21.t0;
                return _context21.abrupt("return", this.request({
                  method: 'POST',
                  url: url,
                  body: (0, _stringify["default"])({
                    ids: ids,
                    fields: fields
                  }),
                  headers: _objectSpread(_objectSpread({}, options.headers || {}), {}, {
                    'content-type': 'application/json'
                  })
                }));

              case 12:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee12, this);
      }));

      function _retrieveMany(_x23, _x24, _x25) {
        return _retrieveMany2.apply(this, arguments);
      }

      return _retrieveMany;
    }()
    /**
     * Create records
     */

  }, {
    key: "create",

    /**
     * @param type
     * @param records
     * @param options
     */
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(type, records) {
        var options,
            ret,
            _args13 = arguments;
        return _regenerator["default"].wrap(function _callee13$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                options = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : {};

                if (!(0, _isArray["default"])(records)) {
                  _context22.next = 14;
                  break;
                }

                if (!this._ensureVersion(42)) {
                  _context22.next = 8;
                  break;
                }

                _context22.next = 5;
                return this._createMany(type, records, options);

              case 5:
                _context22.t1 = _context22.sent;
                _context22.next = 11;
                break;

              case 8:
                _context22.next = 10;
                return this._createParallel(type, records, options);

              case 10:
                _context22.t1 = _context22.sent;

              case 11:
                _context22.t0 = _context22.t1;
                _context22.next = 17;
                break;

              case 14:
                _context22.next = 16;
                return this._createSingle(type, records, options);

              case 16:
                _context22.t0 = _context22.sent;

              case 17:
                ret = _context22.t0;
                return _context22.abrupt("return", ret);

              case 19:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee13, this);
      }));

      function create(_x26, _x27) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /** @private */

  }, {
    key: "_createSingle",
    value: function () {
      var _createSingle2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(type, record, options) {
        var Id, rtype, attributes, rec, sobjectType, url;
        return _regenerator["default"].wrap(function _callee14$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                Id = record.Id, rtype = record.type, attributes = record.attributes, rec = (0, _objectWithoutProperties2["default"])(record, ["Id", "type", "attributes"]);
                sobjectType = type || attributes && attributes.type || rtype;

                if (sobjectType) {
                  _context23.next = 4;
                  break;
                }

                throw new Error('No SObject Type defined in record');

              case 4:
                url = [this._baseUrl(), 'sobjects', sobjectType].join('/');
                return _context23.abrupt("return", this.request({
                  method: 'POST',
                  url: url,
                  body: (0, _stringify["default"])(rec),
                  headers: _objectSpread(_objectSpread({}, options.headers || {}), {}, {
                    'content-type': 'application/json'
                  })
                }));

              case 6:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee14, this);
      }));

      function _createSingle(_x28, _x29, _x30) {
        return _createSingle2.apply(this, arguments);
      }

      return _createSingle;
    }()
    /** @private */

  }, {
    key: "_createParallel",
    value: function () {
      var _createParallel2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(type, records, options) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee15$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (!(records.length > this._maxRequest)) {
                  _context24.next = 2;
                  break;
                }

                throw new Error('Exceeded max limit of concurrent call');

              case 2:
                return _context24.abrupt("return", _promise["default"].all((0, _map["default"])(records).call(records, function (record) {
                  return _this5._createSingle(type, record, options)["catch"](function (err) {
                    // be aware that allOrNone in parallel mode will not revert the other successful requests
                    // it only raises error when met at least one failed request.
                    if (options.allOrNone || !err.errorCode) {
                      throw err;
                    }

                    return toSaveResult(null, err);
                  });
                })));

              case 3:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee15, this);
      }));

      function _createParallel(_x31, _x32, _x33) {
        return _createParallel2.apply(this, arguments);
      }

      return _createParallel;
    }()
    /** @private */

  }, {
    key: "_createMany",
    value: function () {
      var _createMany2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(type, records, options) {
        var _context25, _records, url;

        return _regenerator["default"].wrap(function _callee16$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(records.length === 0)) {
                  _context26.next = 2;
                  break;
                }

                return _context26.abrupt("return", _promise["default"].resolve([]));

              case 2:
                if (!(records.length > MAX_DML_COUNT && options.allowRecursive)) {
                  _context26.next = 16;
                  break;
                }

                _context26.t0 = (0, _concat["default"])(_context25 = []);
                _context26.t1 = _context25;
                _context26.t2 = _toConsumableArray2["default"];
                _context26.next = 8;
                return this._createMany(type, (0, _slice["default"])(records).call(records, 0, MAX_DML_COUNT), options);

              case 8:
                _context26.t3 = _context26.sent;
                _context26.t4 = (0, _context26.t2)(_context26.t3);
                _context26.t5 = _toConsumableArray2["default"];
                _context26.next = 13;
                return this._createMany(type, (0, _slice["default"])(records).call(records, MAX_DML_COUNT), options);

              case 13:
                _context26.t6 = _context26.sent;
                _context26.t7 = (0, _context26.t5)(_context26.t6);
                return _context26.abrupt("return", _context26.t0.call.call(_context26.t0, _context26.t1, _context26.t4, _context26.t7));

              case 16:
                _records = (0, _map["default"])(records).call(records, function (record) {
                  var Id = record.Id,
                      rtype = record.type,
                      attributes = record.attributes,
                      rec = (0, _objectWithoutProperties2["default"])(record, ["Id", "type", "attributes"]);
                  var sobjectType = type || attributes && attributes.type || rtype;

                  if (!sobjectType) {
                    throw new Error('No SObject Type defined in record');
                  }

                  return _objectSpread({
                    attributes: {
                      type: sobjectType
                    }
                  }, rec);
                });
                url = [this._baseUrl(), 'composite', 'sobjects'].join('/');
                return _context26.abrupt("return", this.request({
                  method: 'POST',
                  url: url,
                  body: (0, _stringify["default"])({
                    allOrNone: options.allOrNone || false,
                    records: _records
                  }),
                  headers: _objectSpread(_objectSpread({}, options.headers || {}), {}, {
                    'content-type': 'application/json'
                  })
                }));

              case 19:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee16, this);
      }));

      function _createMany(_x34, _x35, _x36) {
        return _createMany2.apply(this, arguments);
      }

      return _createMany;
    }()
    /**
     * Synonym of Connection#create()
     */

  }, {
    key: "update",

    /**
     * @param type
     * @param records
     * @param options
     */
    value: function update(type, records) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return (0, _isArray["default"])(records) ? // check the version whether SObject collection API is supported (42.0)
      this._ensureVersion(42) ? this._updateMany(type, records, options) : this._updateParallel(type, records, options) : this._updateSingle(type, records, options);
    }
    /** @private */

  }, {
    key: "_updateSingle",
    value: function () {
      var _updateSingle2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(type, record, options) {
        var id, rtype, attributes, rec, sobjectType, url;
        return _regenerator["default"].wrap(function _callee17$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                id = record.Id, rtype = record.type, attributes = record.attributes, rec = (0, _objectWithoutProperties2["default"])(record, ["Id", "type", "attributes"]);

                if (id) {
                  _context27.next = 3;
                  break;
                }

                throw new Error('Record id is not found in record.');

              case 3:
                sobjectType = type || attributes && attributes.type || rtype;

                if (sobjectType) {
                  _context27.next = 6;
                  break;
                }

                throw new Error('No SObject Type defined in record');

              case 6:
                url = [this._baseUrl(), 'sobjects', sobjectType, id].join('/');
                return _context27.abrupt("return", this.request({
                  method: 'PATCH',
                  url: url,
                  body: (0, _stringify["default"])(rec),
                  headers: _objectSpread(_objectSpread({}, options.headers || {}), {}, {
                    'content-type': 'application/json'
                  })
                }, {
                  noContentResponse: {
                    id: id,
                    success: true,
                    errors: []
                  }
                }));

              case 8:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee17, this);
      }));

      function _updateSingle(_x37, _x38, _x39) {
        return _updateSingle2.apply(this, arguments);
      }

      return _updateSingle;
    }()
    /** @private */

  }, {
    key: "_updateParallel",
    value: function () {
      var _updateParallel2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(type, records, options) {
        var _this6 = this;

        return _regenerator["default"].wrap(function _callee18$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                if (!(records.length > this._maxRequest)) {
                  _context28.next = 2;
                  break;
                }

                throw new Error('Exceeded max limit of concurrent call');

              case 2:
                return _context28.abrupt("return", _promise["default"].all((0, _map["default"])(records).call(records, function (record) {
                  return _this6._updateSingle(type, record, options)["catch"](function (err) {
                    // be aware that allOrNone in parallel mode will not revert the other successful requests
                    // it only raises error when met at least one failed request.
                    if (options.allOrNone || !err.errorCode) {
                      throw err;
                    }

                    return toSaveResult(record.Id, err);
                  });
                })));

              case 3:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee18, this);
      }));

      function _updateParallel(_x40, _x41, _x42) {
        return _updateParallel2.apply(this, arguments);
      }

      return _updateParallel;
    }()
    /** @private */

  }, {
    key: "_updateMany",
    value: function () {
      var _updateMany2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(type, records, options) {
        var _context29, _records, url;

        return _regenerator["default"].wrap(function _callee19$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!(records.length === 0)) {
                  _context30.next = 2;
                  break;
                }

                return _context30.abrupt("return", []);

              case 2:
                if (!(records.length > MAX_DML_COUNT && options.allowRecursive)) {
                  _context30.next = 16;
                  break;
                }

                _context30.t0 = (0, _concat["default"])(_context29 = []);
                _context30.t1 = _context29;
                _context30.t2 = _toConsumableArray2["default"];
                _context30.next = 8;
                return this._updateMany(type, (0, _slice["default"])(records).call(records, 0, MAX_DML_COUNT), options);

              case 8:
                _context30.t3 = _context30.sent;
                _context30.t4 = (0, _context30.t2)(_context30.t3);
                _context30.t5 = _toConsumableArray2["default"];
                _context30.next = 13;
                return this._updateMany(type, (0, _slice["default"])(records).call(records, MAX_DML_COUNT), options);

              case 13:
                _context30.t6 = _context30.sent;
                _context30.t7 = (0, _context30.t5)(_context30.t6);
                return _context30.abrupt("return", _context30.t0.call.call(_context30.t0, _context30.t1, _context30.t4, _context30.t7));

              case 16:
                _records = (0, _map["default"])(records).call(records, function (record) {
                  var id = record.Id,
                      rtype = record.type,
                      attributes = record.attributes,
                      rec = (0, _objectWithoutProperties2["default"])(record, ["Id", "type", "attributes"]);

                  if (!id) {
                    throw new Error('Record id is not found in record.');
                  }

                  var sobjectType = type || attributes && attributes.type || rtype;

                  if (!sobjectType) {
                    throw new Error('No SObject Type defined in record');
                  }

                  return _objectSpread({
                    id: id,
                    attributes: {
                      type: sobjectType
                    }
                  }, rec);
                });
                url = [this._baseUrl(), 'composite', 'sobjects'].join('/');
                return _context30.abrupt("return", this.request({
                  method: 'PATCH',
                  url: url,
                  body: (0, _stringify["default"])({
                    allOrNone: options.allOrNone || false,
                    records: _records
                  }),
                  headers: _objectSpread(_objectSpread({}, options.headers || {}), {}, {
                    'content-type': 'application/json'
                  })
                }));

              case 19:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee19, this);
      }));

      function _updateMany(_x43, _x44, _x45) {
        return _updateMany2.apply(this, arguments);
      }

      return _updateMany;
    }()
    /**
     * Upsert records
     */

  }, {
    key: "upsert",

    /**
     *
     * @param type
     * @param records
     * @param extIdField
     * @param options
     */
    value: function () {
      var _upsert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(type, records, extIdField) {
        var _this7 = this;

        var options,
            isArray,
            _records,
            results,
            _args20 = arguments;

        return _regenerator["default"].wrap(function _callee20$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                options = _args20.length > 3 && _args20[3] !== undefined ? _args20[3] : {};
                isArray = (0, _isArray["default"])(records);
                _records = (0, _isArray["default"])(records) ? records : [records];

                if (!(_records.length > this._maxRequest)) {
                  _context32.next = 5;
                  break;
                }

                throw new Error('Exceeded max limit of concurrent call');

              case 5:
                _context32.next = 7;
                return _promise["default"].all((0, _map["default"])(_records).call(_records, function (record) {
                  var _context31;

                  var extId = record[extIdField],
                      rtype = record.type,
                      attributes = record.attributes,
                      rec = (0, _objectWithoutProperties2["default"])(record, (0, _map["default"])(_context31 = [extIdField, "type", "attributes"]).call(_context31, _toPropertyKey));
                  var url = [_this7._baseUrl(), 'sobjects', type, extIdField, extId].join('/');
                  return _this7.request({
                    method: 'PATCH',
                    url: url,
                    body: (0, _stringify["default"])(rec),
                    headers: _objectSpread(_objectSpread({}, options.headers || {}), {}, {
                      'content-type': 'application/json'
                    })
                  }, {
                    noContentResponse: {
                      success: true,
                      errors: []
                    }
                  })["catch"](function (err) {
                    // Be aware that `allOrNone` option in upsert method
                    // will not revert the other successful requests.
                    // It only raises error when met at least one failed request.
                    if (!isArray || options.allOrNone || !err.errorCode) {
                      throw err;
                    }

                    return toSaveResult(null, err);
                  });
                }));

              case 7:
                results = _context32.sent;
                return _context32.abrupt("return", isArray ? results : results[0]);

              case 9:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee20, this);
      }));

      function upsert(_x46, _x47, _x48) {
        return _upsert.apply(this, arguments);
      }

      return upsert;
    }()
    /**
     * Delete records
     */

  }, {
    key: "destroy",

    /**
     * @param type
     * @param ids
     * @param options
     */
    value: function () {
      var _destroy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(type, ids) {
        var options,
            _args21 = arguments;
        return _regenerator["default"].wrap(function _callee21$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                options = _args21.length > 2 && _args21[2] !== undefined ? _args21[2] : {};
                return _context33.abrupt("return", (0, _isArray["default"])(ids) ? // check the version whether SObject collection API is supported (42.0)
                this._ensureVersion(42) ? this._destroyMany(type, ids, options) : this._destroyParallel(type, ids, options) : this._destroySingle(type, ids, options));

              case 2:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee21, this);
      }));

      function destroy(_x49, _x50) {
        return _destroy.apply(this, arguments);
      }

      return destroy;
    }()
    /** @private */

  }, {
    key: "_destroySingle",
    value: function () {
      var _destroySingle2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(type, id, options) {
        var url;
        return _regenerator["default"].wrap(function _callee22$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                url = [this._baseUrl(), 'sobjects', type, id].join('/');
                return _context34.abrupt("return", this.request({
                  method: 'DELETE',
                  url: url,
                  headers: options.headers || {}
                }, {
                  noContentResponse: {
                    id: id,
                    success: true,
                    errors: []
                  }
                }));

              case 2:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee22, this);
      }));

      function _destroySingle(_x51, _x52, _x53) {
        return _destroySingle2.apply(this, arguments);
      }

      return _destroySingle;
    }()
    /** @private */

  }, {
    key: "_destroyParallel",
    value: function () {
      var _destroyParallel2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(type, ids, options) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee23$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (!(ids.length > this._maxRequest)) {
                  _context35.next = 2;
                  break;
                }

                throw new Error('Exceeded max limit of concurrent call');

              case 2:
                return _context35.abrupt("return", _promise["default"].all((0, _map["default"])(ids).call(ids, function (id) {
                  return _this8._destroySingle(type, id, options)["catch"](function (err) {
                    // Be aware that `allOrNone` option in parallel mode
                    // will not revert the other successful requests.
                    // It only raises error when met at least one failed request.
                    if (options.allOrNone || !err.errorCode) {
                      throw err;
                    }

                    return toSaveResult(id, err);
                  });
                })));

              case 3:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee23, this);
      }));

      function _destroyParallel(_x54, _x55, _x56) {
        return _destroyParallel2.apply(this, arguments);
      }

      return _destroyParallel;
    }()
    /** @private */

  }, {
    key: "_destroyMany",
    value: function () {
      var _destroyMany2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(type, ids, options) {
        var _context36, url;

        return _regenerator["default"].wrap(function _callee24$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (!(ids.length === 0)) {
                  _context37.next = 2;
                  break;
                }

                return _context37.abrupt("return", []);

              case 2:
                if (!(ids.length > MAX_DML_COUNT && options.allowRecursive)) {
                  _context37.next = 16;
                  break;
                }

                _context37.t0 = (0, _concat["default"])(_context36 = []);
                _context37.t1 = _context36;
                _context37.t2 = _toConsumableArray2["default"];
                _context37.next = 8;
                return this._destroyMany(type, (0, _slice["default"])(ids).call(ids, 0, MAX_DML_COUNT), options);

              case 8:
                _context37.t3 = _context37.sent;
                _context37.t4 = (0, _context37.t2)(_context37.t3);
                _context37.t5 = _toConsumableArray2["default"];
                _context37.next = 13;
                return this._destroyMany(type, (0, _slice["default"])(ids).call(ids, MAX_DML_COUNT), options);

              case 13:
                _context37.t6 = _context37.sent;
                _context37.t7 = (0, _context37.t5)(_context37.t6);
                return _context37.abrupt("return", _context37.t0.call.call(_context37.t0, _context37.t1, _context37.t4, _context37.t7));

              case 16:
                url = [this._baseUrl(), 'composite', 'sobjects?ids='].join('/') + ids.join(',');

                if (options.allOrNone) {
                  url += '&allOrNone=true';
                }

                return _context37.abrupt("return", this.request({
                  method: 'DELETE',
                  url: url,
                  headers: options.headers || {}
                }));

              case 19:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee24, this);
      }));

      function _destroyMany(_x57, _x58, _x59) {
        return _destroyMany2.apply(this, arguments);
      }

      return _destroyMany;
    }()
    /**
     * Synonym of Connection#destroy()
     */

  }, {
    key: "describe",

    /**
     * Describe SObject metadata
     */
    value: function () {
      var _describe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(type) {
        var url, body;
        return _regenerator["default"].wrap(function _callee25$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                url = [this._baseUrl(), 'sobjects', type, 'describe'].join('/');
                _context38.next = 3;
                return this.request(url);

              case 3:
                body = _context38.sent;
                return _context38.abrupt("return", body);

              case 5:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee25, this);
      }));

      function describe(_x60) {
        return _describe.apply(this, arguments);
      }

      return describe;
    }()
    /**
     * Describe global SObjects
     */

  }, {
    key: "describeGlobal",
    value: function () {
      var _describeGlobal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26() {
        var url, body;
        return _regenerator["default"].wrap(function _callee26$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                url = "".concat(this._baseUrl(), "/sobjects");
                _context39.next = 3;
                return this.request(url);

              case 3:
                body = _context39.sent;
                return _context39.abrupt("return", body);

              case 5:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee26, this);
      }));

      function describeGlobal() {
        return _describeGlobal.apply(this, arguments);
      }

      return describeGlobal;
    }()
    /**
     * Get SObject instance
     */

  }, {
    key: "sobject",
    value: function sobject(type) {
      var so = this.sobjects[type] || new _sobject["default"](this, type);
      this.sobjects[type] = so;
      return so;
    }
    /**
     * Get identity information of current user
     */

  }, {
    key: "identity",
    value: function () {
      var _identity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27() {
        var options,
            url,
            _res,
            res,
            _args27 = arguments;

        return _regenerator["default"].wrap(function _callee27$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                options = _args27.length > 0 && _args27[0] !== undefined ? _args27[0] : {};
                url = this.userInfo && this.userInfo.url;

                if (url) {
                  _context40.next = 7;
                  break;
                }

                _context40.next = 5;
                return this.request({
                  method: 'GET',
                  url: this._baseUrl(),
                  headers: options.headers
                });

              case 5:
                _res = _context40.sent;
                url = _res.identity;

              case 7:
                url += '?format=json';

                if (this.accessToken) {
                  url += "&oauth_token=".concat(encodeURIComponent(this.accessToken));
                }

                _context40.next = 11;
                return this.request({
                  method: 'GET',
                  url: url
                });

              case 11:
                res = _context40.sent;
                this.userInfo = {
                  id: res.user_id,
                  organizationId: res.organization_id,
                  url: res.id
                };
                return _context40.abrupt("return", res);

              case 14:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee27, this);
      }));

      function identity() {
        return _identity.apply(this, arguments);
      }

      return identity;
    }()
    /**
     * List recently viewed records
     */

  }, {
    key: "recent",
    value: function () {
      var _recent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(type, limit) {
        var url, _yield$this$request, recentItems;

        return _regenerator["default"].wrap(function _callee28$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                /* eslint-disable no-param-reassign */
                if (typeof type === 'number') {
                  limit = type;
                  type = undefined;
                }

                if (!type) {
                  _context41.next = 8;
                  break;
                }

                url = [this._baseUrl(), 'sobjects', type].join('/');
                _context41.next = 5;
                return this.request(url);

              case 5:
                _yield$this$request = _context41.sent;
                recentItems = _yield$this$request.recentItems;
                return _context41.abrupt("return", limit ? (0, _slice["default"])(recentItems).call(recentItems, 0, limit) : recentItems);

              case 8:
                url = "".concat(this._baseUrl(), "/recent");

                if (limit) {
                  url += "?limit=".concat(limit);
                }

                return _context41.abrupt("return", this.request(url));

              case 11:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee28, this);
      }));

      function recent(_x61, _x62) {
        return _recent.apply(this, arguments);
      }

      return recent;
    }()
    /**
     * Retrieve updated records
     */

  }, {
    key: "updated",
    value: function () {
      var _updated = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(type, start, end) {
        var url, body;
        return _regenerator["default"].wrap(function _callee29$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                /* eslint-disable no-param-reassign */
                url = [this._baseUrl(), 'sobjects', type, 'updated'].join('/');

                if (typeof start === 'string') {
                  start = new Date(start);
                }

                start = (0, _formatter.formatDate)(start);
                url += "?start=".concat(encodeURIComponent(start));

                if (typeof end === 'string') {
                  end = new Date(end);
                }

                end = (0, _formatter.formatDate)(end);
                url += "&end=".concat(encodeURIComponent(end));
                _context42.next = 9;
                return this.request(url);

              case 9:
                body = _context42.sent;
                return _context42.abrupt("return", body);

              case 11:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee29, this);
      }));

      function updated(_x63, _x64, _x65) {
        return _updated.apply(this, arguments);
      }

      return updated;
    }()
    /**
     * Retrieve deleted records
     */

  }, {
    key: "deleted",
    value: function () {
      var _deleted = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(type, start, end) {
        var url, body;
        return _regenerator["default"].wrap(function _callee30$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                /* eslint-disable no-param-reassign */
                url = [this._baseUrl(), 'sobjects', type, 'deleted'].join('/');

                if (typeof start === 'string') {
                  start = new Date(start);
                }

                start = (0, _formatter.formatDate)(start);
                url += "?start=".concat(encodeURIComponent(start));

                if (typeof end === 'string') {
                  end = new Date(end);
                }

                end = (0, _formatter.formatDate)(end);
                url += "&end=".concat(encodeURIComponent(end));
                _context43.next = 9;
                return this.request(url);

              case 9:
                body = _context43.sent;
                return _context43.abrupt("return", body);

              case 11:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee30, this);
      }));

      function deleted(_x66, _x67, _x68) {
        return _deleted.apply(this, arguments);
      }

      return deleted;
    }()
    /**
     * Returns a list of all tabs
     */

  }, {
    key: "tabs",
    value: function () {
      var _tabs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31() {
        var url, body;
        return _regenerator["default"].wrap(function _callee31$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                url = [this._baseUrl(), 'tabs'].join('/');
                _context44.next = 3;
                return this.request(url);

              case 3:
                body = _context44.sent;
                return _context44.abrupt("return", body);

              case 5:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee31, this);
      }));

      function tabs() {
        return _tabs.apply(this, arguments);
      }

      return tabs;
    }()
    /**
     * Returns curren system limit in the organization
     */

  }, {
    key: "limits",
    value: function () {
      var _limits = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32() {
        var url, body;
        return _regenerator["default"].wrap(function _callee32$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                url = [this._baseUrl(), 'limits'].join('/');
                _context45.next = 3;
                return this.request(url);

              case 3:
                body = _context45.sent;
                return _context45.abrupt("return", body);

              case 5:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee32, this);
      }));

      function limits() {
        return _limits.apply(this, arguments);
      }

      return limits;
    }()
    /**
     * Returns a theme info
     */

  }, {
    key: "theme",
    value: function () {
      var _theme = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33() {
        var url, body;
        return _regenerator["default"].wrap(function _callee33$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                url = [this._baseUrl(), 'theme'].join('/');
                _context46.next = 3;
                return this.request(url);

              case 3:
                body = _context46.sent;
                return _context46.abrupt("return", body);

              case 5:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee33, this);
      }));

      function theme() {
        return _theme.apply(this, arguments);
      }

      return theme;
    }()
    /**
     * Returns all registered global quick actions
     */

  }, {
    key: "quickActions",
    value: function () {
      var _quickActions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34() {
        var body;
        return _regenerator["default"].wrap(function _callee34$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _context47.next = 2;
                return this.request('/quickActions');

              case 2:
                body = _context47.sent;
                return _context47.abrupt("return", body);

              case 4:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee34, this);
      }));

      function quickActions() {
        return _quickActions.apply(this, arguments);
      }

      return quickActions;
    }()
    /**
     * Get reference for specified global quick aciton
     */

  }, {
    key: "quickAction",
    value: function quickAction(actionName) {
      return new _quickAction["default"](this, "/quickActions/".concat(actionName));
    }
  }]);
  return Connection;
}(_events.EventEmitter);

exports["default"] = Connection;
(0, _defineProperty3["default"])(Connection, "_logger", (0, _logger.getLogger)('connection'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0aW9uLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRDb25uZWN0aW9uQ29uZmlnIiwibG9naW5VcmwiLCJpbnN0YW5jZVVybCIsInZlcnNpb24iLCJsb2dMZXZlbCIsIm1heFJlcXVlc3QiLCJlc2MiLCJzdHIiLCJTdHJpbmciLCJyZXBsYWNlIiwicGFyc2VTaWduZWRSZXF1ZXN0Iiwic3IiLCJKU09OIiwicGFyc2UiLCJtc2ciLCJzcGxpdCIsInBvcCIsIkVycm9yIiwianNvbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsInBhcnNlSWRVcmwiLCJ1cmwiLCJvcmdhbml6YXRpb25JZCIsImlkIiwib2F1dGhSZWZyZXNoRm4iLCJjb25uIiwiY2FsbGJhY2siLCJyZWZyZXNoVG9rZW4iLCJvYXV0aDIiLCJyZXMiLCJ1c2VySW5mbyIsIl9lc3RhYmxpc2giLCJpbnN0YW5jZV91cmwiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInVuZGVmaW5lZCIsImNyZWF0ZVVzZXJuYW1lUGFzc3dvcmRSZWZyZXNoRm4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibG9naW4iLCJ0b1NhdmVSZXN1bHQiLCJlcnIiLCJzdWNjZXNzIiwiZXJyb3JzIiwicmFpc2VOb01vZHVsZUVycm9yIiwibmFtZSIsIk1BWF9ETUxfQ09VTlQiLCJDb25uZWN0aW9uIiwiY29uZmlnIiwiY3JlYXRlIiwiZGVzdHJveSIsInByb3h5VXJsIiwiaHR0cFByb3h5IiwiT0F1dGgyIiwicmVmcmVzaEZuIiwiY2xpZW50SWQiLCJfcmVmcmVzaERlbGVnYXRlIiwiU2Vzc2lvblJlZnJlc2hEZWxlZ2F0ZSIsIl9tYXhSZXF1ZXN0IiwiX2xvZ2dlciIsImNyZWF0ZUluc3RhbmNlIiwiX2xvZ0xldmVsIiwiX3RyYW5zcG9ydCIsIlByb3h5VHJhbnNwb3J0IiwiSHR0cFByb3h5VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwiX2NhbGxPcHRpb25zIiwiY2FsbE9wdGlvbnMiLCJjYWNoZSIsIkNhY2hlIiwiZGVzY3JpYmVDYWNoZUtleSIsInR5cGUiLCJkZXNjcmliZSIsInByb3RvdHlwZSIsImNyZWF0ZUNhY2hlZEZ1bmN0aW9uIiwia2V5Iiwic3RyYXRlZ3kiLCJkZXNjcmliZSQiLCJkZXNjcmliZSQkIiwiZGVzY3JpYmVTT2JqZWN0IiwiZGVzY3JpYmVTT2JqZWN0JCIsImRlc2NyaWJlU09iamVjdCQkIiwiZGVzY3JpYmVHbG9iYWwiLCJkZXNjcmliZUdsb2JhbCQiLCJkZXNjcmliZUdsb2JhbCQkIiwic2Vzc2lvbklkIiwic2VydmVyVXJsIiwic2lnbmVkUmVxdWVzdCIsImpzZm9yY2UiLCJlbWl0Iiwib3B0aW9ucyIsImpvaW4iLCJzaWduZWRSZXF1ZXN0T2JqZWN0IiwiY2xpZW50Iiwib2F1dGhUb2tlbiIsIkNhbnZhc1RyYW5zcG9ydCIsInN1cHBvcnRlZCIsIl9zZXNzaW9uVHlwZSIsIl9yZXNldEluc3RhbmNlIiwibGltaXRJbmZvIiwic29iamVjdHMiLCJjbGVhciIsImdldCIsInJlbW92ZUFsbExpc3RlbmVycyIsIm9uIiwicmVzdWx0Iiwic28iLCJzb2JqZWN0IiwiY29kZSIsInBhcmFtcyIsInJlcXVlc3RUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJkZWJ1ZyIsImNsaWVudFNlY3JldCIsImxvZ2luQnlPQXV0aDIiLCJsb2dpbkJ5U29hcCIsImF1dGhlbnRpY2F0ZSIsImluZm8iLCJyZWplY3QiLCJib2R5Iiwic29hcExvZ2luRW5kcG9pbnQiLCJodHRwUmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJTT0FQQWN0aW9uIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwibSIsIm1hdGNoIiwiZmF1bHRzdHJpbmciLCJ1c2VySWQiLCJpZFVybCIsInJldm9rZSIsImxvZ291dEJ5T0F1dGgyIiwibG9nb3V0QnlTb2FwIiwidG9rZW4iLCJyZXZva2VUb2tlbiIsIl9jbGVhclNlc3Npb24iLCJyZXF1ZXN0IiwiX3JlcXVlc3QiLCJfbm9ybWFsaXplVXJsIiwiaHR0cEFwaSIsIkh0dHBBcGkiLCJhcGlVc2FnZSIsInVzZWQiLCJsaW1pdCIsIl9iYXNlVXJsIiwic29xbCIsIlF1ZXJ5IiwibG9jYXRvciIsIm1ham9yVmVyc2lvbiIsInZlcnNpb25zIiwiZmVhdHVyZSIsIl9lbnN1cmVWZXJzaW9uIiwiaWRzIiwiX3JldHJpZXZlTWFueSIsIl9yZXRyaWV2ZVBhcmFsbGVsIiwiX3JldHJpZXZlU2luZ2xlIiwiZmllbGRzIiwibGVuZ3RoIiwiYWxsIiwiYWxsT3JOb25lIiwiZXJyb3JDb2RlIiwiZmllbGQiLCJyZWNvcmRzIiwiX2NyZWF0ZU1hbnkiLCJfY3JlYXRlUGFyYWxsZWwiLCJfY3JlYXRlU2luZ2xlIiwicmV0IiwicmVjb3JkIiwiSWQiLCJydHlwZSIsImF0dHJpYnV0ZXMiLCJyZWMiLCJzb2JqZWN0VHlwZSIsInJlc29sdmUiLCJhbGxvd1JlY3Vyc2l2ZSIsIl9yZWNvcmRzIiwiX3VwZGF0ZU1hbnkiLCJfdXBkYXRlUGFyYWxsZWwiLCJfdXBkYXRlU2luZ2xlIiwibm9Db250ZW50UmVzcG9uc2UiLCJleHRJZEZpZWxkIiwiaXNBcnJheSIsImV4dElkIiwicmVzdWx0cyIsIl9kZXN0cm95TWFueSIsIl9kZXN0cm95UGFyYWxsZWwiLCJfZGVzdHJveVNpbmdsZSIsIlNPYmplY3QiLCJpZGVudGl0eSIsImVuY29kZVVSSUNvbXBvbmVudCIsInVzZXJfaWQiLCJvcmdhbml6YXRpb25faWQiLCJyZWNlbnRJdGVtcyIsInN0YXJ0IiwiZW5kIiwiRGF0ZSIsImFjdGlvbk5hbWUiLCJRdWlja0FjdGlvbiIsIkV2ZW50RW1pdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUEyQkE7O0FBS0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBRUE7O0FBQ0E7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QVUsWUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnZXZlbnRzJztcclxuaW1wb3J0IGpzZm9yY2UgZnJvbSAnLi9qc2ZvcmNlJztcclxuaW1wb3J0IHtcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwUmVzcG9uc2UsXHJcbiAgQ2FsbGJhY2ssXHJcbiAgUmVjb3JkLFxyXG4gIFNhdmVSZXN1bHQsXHJcbiAgRGVzY3JpYmVHbG9iYWxSZXN1bHQsXHJcbiAgRGVzY3JpYmVTT2JqZWN0UmVzdWx0LFxyXG4gIERlc2NyaWJlVGFiLFxyXG4gIERlc2NyaWJlVGhlbWUsXHJcbiAgRGVzY3JpYmVRdWlja0FjdGlvblJlc3VsdCxcclxuICBVcGRhdGVkUmVzdWx0LFxyXG4gIERlbGV0ZWRSZXN1bHQsXHJcbiAgT3JnYW5pemF0aW9uTGltaXRzSW5mbyxcclxuICBPcHRpb25hbCxcclxuICBTaWduZWRSZXF1ZXN0T2JqZWN0LFxyXG4gIFNhdmVFcnJvcixcclxuICBEbWxPcHRpb25zLFxyXG4gIFJldHJpZXZlT3B0aW9ucyxcclxuICBTY2hlbWEsXHJcbiAgU09iamVjdE5hbWVzLFxyXG4gIFNPYmplY3RJbnB1dFJlY29yZCxcclxuICBTT2JqZWN0VXBkYXRlUmVjb3JkLFxyXG4gIFNPYmplY3RGaWVsZE5hbWVzLFxyXG59IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBTdHJlYW1Qcm9taXNlIH0gZnJvbSAnLi91dGlsL3Byb21pc2UnO1xyXG5pbXBvcnQgVHJhbnNwb3J0LCB7XHJcbiAgQ2FudmFzVHJhbnNwb3J0LFxyXG4gIFByb3h5VHJhbnNwb3J0LFxyXG4gIEh0dHBQcm94eVRyYW5zcG9ydCxcclxufSBmcm9tICcuL3RyYW5zcG9ydCc7XHJcbmltcG9ydCB7IExvZ2dlciwgZ2V0TG9nZ2VyIH0gZnJvbSAnLi91dGlsL2xvZ2dlcic7XHJcbmltcG9ydCB7IExvZ0xldmVsQ29uZmlnIH0gZnJvbSAnLi91dGlsL2xvZ2dlcic7XHJcbmltcG9ydCBPQXV0aDIsIHsgVG9rZW5SZXNwb25zZSB9IGZyb20gJy4vb2F1dGgyJztcclxuaW1wb3J0IHsgT0F1dGgyQ29uZmlnIH0gZnJvbSAnLi9vYXV0aDInO1xyXG5pbXBvcnQgQ2FjaGUsIHsgQ2FjaGVkRnVuY3Rpb24gfSBmcm9tICcuL2NhY2hlJztcclxuaW1wb3J0IEh0dHBBcGkgZnJvbSAnLi9odHRwLWFwaSc7XHJcbmltcG9ydCBTZXNzaW9uUmVmcmVzaERlbGVnYXRlLCB7XHJcbiAgU2Vzc2lvblJlZnJlc2hGdW5jLFxyXG59IGZyb20gJy4vc2Vzc2lvbi1yZWZyZXNoLWRlbGVnYXRlJztcclxuaW1wb3J0IFF1ZXJ5IGZyb20gJy4vcXVlcnknO1xyXG5pbXBvcnQgeyBRdWVyeU9wdGlvbnMgfSBmcm9tICcuL3F1ZXJ5JztcclxuaW1wb3J0IFNPYmplY3QgZnJvbSAnLi9zb2JqZWN0JztcclxuaW1wb3J0IFF1aWNrQWN0aW9uIGZyb20gJy4vcXVpY2stYWN0aW9uJztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4vdXRpbC9mb3JtYXR0ZXInO1xyXG5pbXBvcnQgQXBleCBmcm9tICcuL2FwaS9hcGV4JztcclxuaW1wb3J0IE1ldGFkYXRhIGZyb20gJy4vYXBpL21ldGFkYXRhJztcclxuaW1wb3J0IFNvYXBBcGkgZnJvbSAnLi9hcGkvc29hcCc7XHJcblxyXG4vKipcclxuICogdHlwZSBkZWZpbml0aW9uc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29ubmVjdGlvbkNvbmZpZzxTIGV4dGVuZHMgU2NoZW1hPiA9IHtcclxuICB2ZXJzaW9uPzogc3RyaW5nO1xyXG4gIGxvZ2luVXJsPzogc3RyaW5nO1xyXG4gIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xyXG4gIHJlZnJlc2hUb2tlbj86IHN0cmluZztcclxuICBpbnN0YW5jZVVybD86IHN0cmluZztcclxuICBzZXNzaW9uSWQ/OiBzdHJpbmc7XHJcbiAgc2VydmVyVXJsPzogc3RyaW5nO1xyXG4gIHNpZ25lZFJlcXVlc3Q/OiBzdHJpbmc7XHJcbiAgb2F1dGgyPzogT0F1dGgyIHwgT0F1dGgyQ29uZmlnO1xyXG4gIG1heFJlcXVlc3Q/OiBudW1iZXI7XHJcbiAgcHJveHlVcmw/OiBzdHJpbmc7XHJcbiAgaHR0cFByb3h5Pzogc3RyaW5nO1xyXG4gIGxvZ0xldmVsPzogTG9nTGV2ZWxDb25maWc7XHJcbiAgY2FsbE9wdGlvbnM/OiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICByZWZyZXNoRm4/OiBTZXNzaW9uUmVmcmVzaEZ1bmM8Uz47XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBVc2VySW5mbyA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBMaW1pdEluZm8gPSB7XHJcbiAgYXBpVXNhZ2U/OiB7XHJcbiAgICB1c2VkOiBudW1iZXI7XHJcbiAgICBsaW1pdDogbnVtYmVyO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBDb25uZWN0aW9uRXN0YWJsaXNoT3B0aW9ucyA9IHtcclxuICBhY2Nlc3NUb2tlbj86IE9wdGlvbmFsPHN0cmluZz47XHJcbiAgcmVmcmVzaFRva2VuPzogT3B0aW9uYWw8c3RyaW5nPjtcclxuICBpbnN0YW5jZVVybD86IE9wdGlvbmFsPHN0cmluZz47XHJcbiAgc2Vzc2lvbklkPzogT3B0aW9uYWw8c3RyaW5nPjtcclxuICBzZXJ2ZXJVcmw/OiBPcHRpb25hbDxzdHJpbmc+O1xyXG4gIHNpZ25lZFJlcXVlc3Q/OiBPcHRpb25hbDxzdHJpbmcgfCBTaWduZWRSZXF1ZXN0T2JqZWN0PjtcclxuICB1c2VySW5mbz86IE9wdGlvbmFsPFVzZXJJbmZvPjtcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY29uc3QgZGVmYXVsdENvbm5lY3Rpb25Db25maWc6IHtcclxuICBsb2dpblVybDogc3RyaW5nO1xyXG4gIGluc3RhbmNlVXJsOiBzdHJpbmc7XHJcbiAgdmVyc2lvbjogc3RyaW5nO1xyXG4gIGxvZ0xldmVsOiBMb2dMZXZlbENvbmZpZztcclxuICBtYXhSZXF1ZXN0OiBudW1iZXI7XHJcbn0gPSB7XHJcbiAgbG9naW5Vcmw6ICdodHRwczovL2xvZ2luLnNhbGVzZm9yY2UuY29tJyxcclxuICBpbnN0YW5jZVVybDogJycsXHJcbiAgdmVyc2lvbjogJzQzLjAnLFxyXG4gIGxvZ0xldmVsOiAnTk9ORScsXHJcbiAgbWF4UmVxdWVzdDogMTAsXHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGVzYyhzdHI6IE9wdGlvbmFsPHN0cmluZz4pOiBzdHJpbmcge1xyXG4gIHJldHVybiBTdHJpbmcoc3RyIHx8ICcnKVxyXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcclxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcclxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcclxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gcGFyc2VTaWduZWRSZXF1ZXN0KHNyOiBzdHJpbmcgfCBPYmplY3QpOiBTaWduZWRSZXF1ZXN0T2JqZWN0IHtcclxuICBpZiAodHlwZW9mIHNyID09PSAnc3RyaW5nJykge1xyXG4gICAgaWYgKHNyWzBdID09PSAneycpIHtcclxuICAgICAgLy8gbWlnaHQgYmUgSlNPTlxyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzcik7XHJcbiAgICB9IC8vIG1pZ2h0IGJlIG9yaWdpbmFsIGJhc2U2NC1lbmNvZGVkIHNpZ25lZCByZXF1ZXN0XHJcbiAgICBjb25zdCBtc2cgPSBzci5zcGxpdCgnLicpLnBvcCgpOyAvLyByZXRyaWV2ZSBsYXR0ZXIgcGFydFxyXG4gICAgaWYgKCFtc2cpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNpZ25lZCByZXF1ZXN0Jyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBqc29uID0gQnVmZmVyLmZyb20obXNnLCAnYmFzZTY0JykudG9TdHJpbmcoJ3V0Zi04Jyk7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICB9XHJcbiAgcmV0dXJuIHNyIGFzIFNpZ25lZFJlcXVlc3RPYmplY3Q7XHJcbn1cclxuXHJcbi8qKiBAcHJpdmF0ZSAqKi9cclxuZnVuY3Rpb24gcGFyc2VJZFVybCh1cmw6IHN0cmluZykge1xyXG4gIGNvbnN0IFtvcmdhbml6YXRpb25JZCwgaWRdID0gdXJsLnNwbGl0KCcvJykuc2xpY2UoLTIpO1xyXG4gIHJldHVybiB7IGlkLCBvcmdhbml6YXRpb25JZCwgdXJsIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXNzaW9uIFJlZnJlc2ggZGVsZWdhdGUgZnVuY3Rpb24gZm9yIE9BdXRoMiBhdXRoeiBjb2RlIGZsb3dcclxuICogQHByaXZhdGVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIG9hdXRoUmVmcmVzaEZuPFMgZXh0ZW5kcyBTY2hlbWE+KFxyXG4gIGNvbm46IENvbm5lY3Rpb248Uz4sXHJcbiAgY2FsbGJhY2s6IENhbGxiYWNrPHN0cmluZywgVG9rZW5SZXNwb25zZT4sXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNvbm4ucmVmcmVzaFRva2VuKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcmVmcmVzaCB0b2tlbiBmb3VuZCBpbiB0aGUgY29ubmVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY29ubi5vYXV0aDIucmVmcmVzaFRva2VuKGNvbm4ucmVmcmVzaFRva2VuKTtcclxuICAgIGNvbnN0IHVzZXJJbmZvID0gcGFyc2VJZFVybChyZXMuaWQpO1xyXG4gICAgY29ubi5fZXN0YWJsaXNoKHtcclxuICAgICAgaW5zdGFuY2VVcmw6IHJlcy5pbnN0YW5jZV91cmwsXHJcbiAgICAgIGFjY2Vzc1Rva2VuOiByZXMuYWNjZXNzX3Rva2VuLFxyXG4gICAgICB1c2VySW5mbyxcclxuICAgIH0pO1xyXG4gICAgY2FsbGJhY2sodW5kZWZpbmVkLCByZXMuYWNjZXNzX3Rva2VuLCByZXMpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY2FsbGJhY2soZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXNzaW9uIFJlZnJlc2ggZGVsZWdhdGUgZnVuY3Rpb24gZm9yIHVzZXJuYW1lL3Bhc3N3b3JkIGxvZ2luXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVVc2VybmFtZVBhc3N3b3JkUmVmcmVzaEZuPFMgZXh0ZW5kcyBTY2hlbWE+KFxyXG4gIHVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuKSB7XHJcbiAgcmV0dXJuIGFzeW5jIChcclxuICAgIGNvbm46IENvbm5lY3Rpb248Uz4sXHJcbiAgICBjYWxsYmFjazogQ2FsbGJhY2s8c3RyaW5nLCBUb2tlblJlc3BvbnNlPixcclxuICApID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGNvbm4ubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgaWYgKCFjb25uLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY2Nlc3MgdG9rZW4gbm90IGZvdW5kIGFmdGVyIGxvZ2luJyk7XHJcbiAgICAgIH1cclxuICAgICAgY2FsbGJhY2sobnVsbCwgY29ubi5hY2Nlc3NUb2tlbik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY2FsbGJhY2soZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIHRvU2F2ZVJlc3VsdChpZDogT3B0aW9uYWw8c3RyaW5nPiwgZXJyOiBTYXZlRXJyb3IpOiBTYXZlUmVzdWx0IHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uKGlkID8geyBpZCB9IDoge30pLFxyXG4gICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICBlcnJvcnM6IFtlcnJdLFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gcmFpc2VOb01vZHVsZUVycm9yKG5hbWU6IHN0cmluZyk6IG5ldmVyIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICBgQVBJIG1vZHVsZSAnJHtuYW1lfScgaXMgbm90IGxvYWRlZCwgbG9hZCAnanNmb3JjZS9hcGkvJHtuYW1lfScgZXhwbGljaXRseWAsXHJcbiAgKTtcclxufVxyXG5cclxuLypcclxuICogQ29uc3RhbnQgb2YgbWF4aW11bSByZWNvcmRzIG51bSBpbiBETUwgb3BlcmF0aW9uICh1cGRhdGUvZGVsZXRlKVxyXG4gKi9cclxuY29uc3QgTUFYX0RNTF9DT1VOVCA9IDIwMDtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdGlvbjxcclxuICBTIGV4dGVuZHMgU2NoZW1hID0gU2NoZW1hXHJcbj4gZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIHN0YXRpYyBfbG9nZ2VyID0gZ2V0TG9nZ2VyKCdjb25uZWN0aW9uJyk7XHJcblxyXG4gIHZlcnNpb246IHN0cmluZztcclxuICBsb2dpblVybDogc3RyaW5nO1xyXG4gIGluc3RhbmNlVXJsOiBzdHJpbmc7XHJcbiAgYWNjZXNzVG9rZW46IE9wdGlvbmFsPHN0cmluZz47XHJcbiAgcmVmcmVzaFRva2VuOiBPcHRpb25hbDxzdHJpbmc+O1xyXG4gIHVzZXJJbmZvOiBPcHRpb25hbDxVc2VySW5mbz47XHJcbiAgbGltaXRJbmZvOiBMaW1pdEluZm8gPSB7fTtcclxuICBvYXV0aDI6IE9BdXRoMjtcclxuICBzb2JqZWN0czogeyBbTiBpbiBTT2JqZWN0TmFtZXM8Uz5dPzogU09iamVjdDxTLCBOPiB9ID0ge307XHJcbiAgY2FjaGU6IENhY2hlO1xyXG4gIF9jYWxsT3B0aW9uczogT3B0aW9uYWw8eyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0+O1xyXG4gIF9tYXhSZXF1ZXN0OiBudW1iZXI7XHJcbiAgX2xvZ2dlcjogTG9nZ2VyO1xyXG4gIF9sb2dMZXZlbDogT3B0aW9uYWw8TG9nTGV2ZWxDb25maWc+O1xyXG4gIF90cmFuc3BvcnQ6IFRyYW5zcG9ydDtcclxuICBfc2Vzc2lvblR5cGU6IE9wdGlvbmFsPCdzb2FwJyB8ICdvYXV0aDInPjtcclxuICBfcmVmcmVzaERlbGVnYXRlOiBPcHRpb25hbDxTZXNzaW9uUmVmcmVzaERlbGVnYXRlPFM+PjtcclxuXHJcbiAgLy8gZGVzY3JpYmU6IChuYW1lOiBzdHJpbmcpID0+IFByb21pc2U8RGVzY3JpYmVTT2JqZWN0UmVzdWx0PjtcclxuICBkZXNjcmliZSQ6IENhY2hlZEZ1bmN0aW9uPChuYW1lOiBzdHJpbmcpID0+IFByb21pc2U8RGVzY3JpYmVTT2JqZWN0UmVzdWx0Pj47XHJcbiAgZGVzY3JpYmUkJDogQ2FjaGVkRnVuY3Rpb248KG5hbWU6IHN0cmluZykgPT4gRGVzY3JpYmVTT2JqZWN0UmVzdWx0PjtcclxuICBkZXNjcmliZVNPYmplY3Q6IChuYW1lOiBzdHJpbmcpID0+IFByb21pc2U8RGVzY3JpYmVTT2JqZWN0UmVzdWx0PjtcclxuICBkZXNjcmliZVNPYmplY3QkOiBDYWNoZWRGdW5jdGlvbjxcclxuICAgIChuYW1lOiBzdHJpbmcpID0+IFByb21pc2U8RGVzY3JpYmVTT2JqZWN0UmVzdWx0PlxyXG4gID47XHJcbiAgZGVzY3JpYmVTT2JqZWN0JCQ6IENhY2hlZEZ1bmN0aW9uPChuYW1lOiBzdHJpbmcpID0+IERlc2NyaWJlU09iamVjdFJlc3VsdD47XHJcbiAgLy8gZGVzY3JpYmVHbG9iYWw6ICgpID0+IFByb21pc2U8RGVzY3JpYmVHbG9iYWxSZXN1bHQ+O1xyXG4gIGRlc2NyaWJlR2xvYmFsJDogQ2FjaGVkRnVuY3Rpb248KCkgPT4gUHJvbWlzZTxEZXNjcmliZUdsb2JhbFJlc3VsdD4+O1xyXG4gIGRlc2NyaWJlR2xvYmFsJCQ6IENhY2hlZEZ1bmN0aW9uPCgpID0+IERlc2NyaWJlR2xvYmFsUmVzdWx0PjtcclxuXHJcbiAgLy8gQVBJIGxpYnMgYXJlIG5vdCBpbnN0YW50aWF0ZWQgaGVyZSBzbyB0aGF0IGNvcmUgbW9kdWxlIHRvIHJlbWFpbiB3aXRob3V0IGRlcGVuZGVuY2llcyB0byB0aGVtXHJcbiAgLy8gSXQgaXMgcmVzcG9uc2libGUgZm9yIGRldmVscGVycyB0byBpbXBvcnQgYXBpIGxpYnMgZXhwbGljaXRseSBpZiB0aGV5IGFyZSB1c2luZyAnanNmb3JjZS9jb3JlJyBpbnN0ZWFkIG9mICdqc2ZvcmNlJy5cclxuICBnZXQgYXBleCgpOiBBcGV4PFM+IHtcclxuICAgIHJldHVybiByYWlzZU5vTW9kdWxlRXJyb3IoJ2FwZXgnKTtcclxuICB9XHJcbiAgZ2V0IG1ldGFkYXRhKCk6IE1ldGFkYXRhPFM+IHtcclxuICAgIHJldHVybiByYWlzZU5vTW9kdWxlRXJyb3IoJ21ldGFkYXRhJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgc29hcCgpOiBTb2FwQXBpPFM+IHtcclxuICAgIHJldHVybiByYWlzZU5vTW9kdWxlRXJyb3IoJ3NvYXAnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBDb25uZWN0aW9uQ29uZmlnPFM+ID0ge30pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxvZ2luVXJsLFxyXG4gICAgICBpbnN0YW5jZVVybCxcclxuICAgICAgdmVyc2lvbixcclxuICAgICAgb2F1dGgyLFxyXG4gICAgICBtYXhSZXF1ZXN0LFxyXG4gICAgICBsb2dMZXZlbCxcclxuICAgICAgcHJveHlVcmwsXHJcbiAgICAgIGh0dHBQcm94eSxcclxuICAgIH0gPSBjb25maWc7XHJcbiAgICB0aGlzLmxvZ2luVXJsID0gbG9naW5VcmwgfHwgZGVmYXVsdENvbm5lY3Rpb25Db25maWcubG9naW5Vcmw7XHJcbiAgICB0aGlzLmluc3RhbmNlVXJsID0gaW5zdGFuY2VVcmwgfHwgZGVmYXVsdENvbm5lY3Rpb25Db25maWcuaW5zdGFuY2VVcmw7XHJcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uIHx8IGRlZmF1bHRDb25uZWN0aW9uQ29uZmlnLnZlcnNpb247XHJcbiAgICB0aGlzLm9hdXRoMiA9IG9hdXRoMlxyXG4gICAgICA/IG9hdXRoMiBpbnN0YW5jZW9mIE9BdXRoMlxyXG4gICAgICAgID8gb2F1dGgyXHJcbiAgICAgICAgOiBuZXcgT0F1dGgyKG9hdXRoMilcclxuICAgICAgOiBuZXcgT0F1dGgyKHsgbG9naW5Vcmw6IHRoaXMubG9naW5VcmwgfSk7XHJcbiAgICBsZXQgcmVmcmVzaEZuID0gY29uZmlnLnJlZnJlc2hGbjtcclxuICAgIGlmICghcmVmcmVzaEZuICYmIHRoaXMub2F1dGgyLmNsaWVudElkKSB7XHJcbiAgICAgIHJlZnJlc2hGbiA9IG9hdXRoUmVmcmVzaEZuO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlZnJlc2hGbikge1xyXG4gICAgICB0aGlzLl9yZWZyZXNoRGVsZWdhdGUgPSBuZXcgU2Vzc2lvblJlZnJlc2hEZWxlZ2F0ZSh0aGlzLCByZWZyZXNoRm4pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWF4UmVxdWVzdCA9IG1heFJlcXVlc3QgfHwgZGVmYXVsdENvbm5lY3Rpb25Db25maWcubWF4UmVxdWVzdDtcclxuICAgIHRoaXMuX2xvZ2dlciA9IGxvZ0xldmVsXHJcbiAgICAgID8gQ29ubmVjdGlvbi5fbG9nZ2VyLmNyZWF0ZUluc3RhbmNlKGxvZ0xldmVsKVxyXG4gICAgICA6IENvbm5lY3Rpb24uX2xvZ2dlcjtcclxuICAgIHRoaXMuX2xvZ0xldmVsID0gbG9nTGV2ZWw7XHJcbiAgICB0aGlzLl90cmFuc3BvcnQgPSBwcm94eVVybFxyXG4gICAgICA/IG5ldyBQcm94eVRyYW5zcG9ydChwcm94eVVybClcclxuICAgICAgOiBodHRwUHJveHlcclxuICAgICAgPyBuZXcgSHR0cFByb3h5VHJhbnNwb3J0KGh0dHBQcm94eSlcclxuICAgICAgOiBuZXcgVHJhbnNwb3J0KCk7XHJcbiAgICB0aGlzLl9jYWxsT3B0aW9ucyA9IGNvbmZpZy5jYWxsT3B0aW9ucztcclxuICAgIHRoaXMuY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuICAgIGNvbnN0IGRlc2NyaWJlQ2FjaGVLZXkgPSAodHlwZT86IHN0cmluZykgPT5cclxuICAgICAgdHlwZSA/IGBkZXNjcmliZS4ke3R5cGV9YCA6ICdkZXNjcmliZSc7XHJcbiAgICBjb25zdCBkZXNjcmliZSA9IENvbm5lY3Rpb24ucHJvdG90eXBlLmRlc2NyaWJlO1xyXG4gICAgdGhpcy5kZXNjcmliZSA9IHRoaXMuY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24oZGVzY3JpYmUsIHRoaXMsIHtcclxuICAgICAga2V5OiBkZXNjcmliZUNhY2hlS2V5LFxyXG4gICAgICBzdHJhdGVneTogJ05PQ0FDSEUnLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRlc2NyaWJlJCA9IHRoaXMuY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24oZGVzY3JpYmUsIHRoaXMsIHtcclxuICAgICAga2V5OiBkZXNjcmliZUNhY2hlS2V5LFxyXG4gICAgICBzdHJhdGVneTogJ0hJVCcsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGVzY3JpYmUkJCA9IHRoaXMuY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24oZGVzY3JpYmUsIHRoaXMsIHtcclxuICAgICAga2V5OiBkZXNjcmliZUNhY2hlS2V5LFxyXG4gICAgICBzdHJhdGVneTogJ0lNTUVESUFURScsXHJcbiAgICB9KSBhcyBhbnk7XHJcbiAgICB0aGlzLmRlc2NyaWJlU09iamVjdCA9IHRoaXMuZGVzY3JpYmU7XHJcbiAgICB0aGlzLmRlc2NyaWJlU09iamVjdCQgPSB0aGlzLmRlc2NyaWJlJDtcclxuICAgIHRoaXMuZGVzY3JpYmVTT2JqZWN0JCQgPSB0aGlzLmRlc2NyaWJlJCQ7XHJcbiAgICBjb25zdCBkZXNjcmliZUdsb2JhbCA9IENvbm5lY3Rpb24ucHJvdG90eXBlLmRlc2NyaWJlR2xvYmFsO1xyXG4gICAgdGhpcy5kZXNjcmliZUdsb2JhbCA9IHRoaXMuY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24oXHJcbiAgICAgIGRlc2NyaWJlR2xvYmFsLFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB7IGtleTogJ2Rlc2NyaWJlR2xvYmFsJywgc3RyYXRlZ3k6ICdOT0NBQ0hFJyB9LFxyXG4gICAgKTtcclxuICAgIHRoaXMuZGVzY3JpYmVHbG9iYWwkID0gdGhpcy5jYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihcclxuICAgICAgZGVzY3JpYmVHbG9iYWwsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHsga2V5OiAnZGVzY3JpYmVHbG9iYWwnLCBzdHJhdGVneTogJ0hJVCcgfSxcclxuICAgICk7XHJcbiAgICB0aGlzLmRlc2NyaWJlR2xvYmFsJCQgPSB0aGlzLmNhY2hlLmNyZWF0ZUNhY2hlZEZ1bmN0aW9uKFxyXG4gICAgICBkZXNjcmliZUdsb2JhbCxcclxuICAgICAgdGhpcyxcclxuICAgICAgeyBrZXk6ICdkZXNjcmliZUdsb2JhbCcsIHN0cmF0ZWd5OiAnSU1NRURJQVRFJyB9LFxyXG4gICAgKSBhcyBhbnk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgICByZWZyZXNoVG9rZW4sXHJcbiAgICAgIHNlc3Npb25JZCxcclxuICAgICAgc2VydmVyVXJsLFxyXG4gICAgICBzaWduZWRSZXF1ZXN0LFxyXG4gICAgfSA9IGNvbmZpZztcclxuICAgIHRoaXMuX2VzdGFibGlzaCh7XHJcbiAgICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgICByZWZyZXNoVG9rZW4sXHJcbiAgICAgIGluc3RhbmNlVXJsLFxyXG4gICAgICBzZXNzaW9uSWQsXHJcbiAgICAgIHNlcnZlclVybCxcclxuICAgICAgc2lnbmVkUmVxdWVzdCxcclxuICAgIH0pO1xyXG5cclxuICAgIGpzZm9yY2UuZW1pdCgnY29ubmVjdGlvbjpuZXcnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qIEBwcml2YXRlICovXHJcbiAgX2VzdGFibGlzaChvcHRpb25zOiBDb25uZWN0aW9uRXN0YWJsaXNoT3B0aW9ucykge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBhY2Nlc3NUb2tlbixcclxuICAgICAgcmVmcmVzaFRva2VuLFxyXG4gICAgICBpbnN0YW5jZVVybCxcclxuICAgICAgc2Vzc2lvbklkLFxyXG4gICAgICBzZXJ2ZXJVcmwsXHJcbiAgICAgIHNpZ25lZFJlcXVlc3QsXHJcbiAgICAgIHVzZXJJbmZvLFxyXG4gICAgfSA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmluc3RhbmNlVXJsID0gc2VydmVyVXJsXHJcbiAgICAgID8gc2VydmVyVXJsXHJcbiAgICAgICAgICAuc3BsaXQoJy8nKVxyXG4gICAgICAgICAgLnNsaWNlKDAsIDMpXHJcbiAgICAgICAgICAuam9pbignLycpXHJcbiAgICAgIDogaW5zdGFuY2VVcmwgfHwgdGhpcy5pbnN0YW5jZVVybDtcclxuICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBzZXNzaW9uSWQgfHwgYWNjZXNzVG9rZW4gfHwgdGhpcy5hY2Nlc3NUb2tlbjtcclxuICAgIHRoaXMucmVmcmVzaFRva2VuID0gcmVmcmVzaFRva2VuIHx8IHRoaXMucmVmcmVzaFRva2VuO1xyXG4gICAgaWYgKHRoaXMucmVmcmVzaFRva2VuICYmICF0aGlzLl9yZWZyZXNoRGVsZWdhdGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdSZWZyZXNoIHRva2VuIGlzIHNwZWNpZmllZCB3aXRob3V0IG9hdXRoMiBjbGllbnQgaW5mb3JtYXRpb24gb3IgcmVmcmVzaCBmdW5jdGlvbicsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaWduZWRSZXF1ZXN0T2JqZWN0ID1cclxuICAgICAgc2lnbmVkUmVxdWVzdCAmJiBwYXJzZVNpZ25lZFJlcXVlc3Qoc2lnbmVkUmVxdWVzdCk7XHJcbiAgICBpZiAoc2lnbmVkUmVxdWVzdE9iamVjdCkge1xyXG4gICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gc2lnbmVkUmVxdWVzdE9iamVjdC5jbGllbnQub2F1dGhUb2tlbjtcclxuICAgICAgaWYgKENhbnZhc1RyYW5zcG9ydC5zdXBwb3J0ZWQpIHtcclxuICAgICAgICB0aGlzLl90cmFuc3BvcnQgPSBuZXcgQ2FudmFzVHJhbnNwb3J0KHNpZ25lZFJlcXVlc3RPYmplY3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVzZXJJbmZvID0gdXNlckluZm8gfHwgdGhpcy51c2VySW5mbztcclxuICAgIHRoaXMuX3Nlc3Npb25UeXBlID0gc2Vzc2lvbklkID8gJ3NvYXAnIDogJ29hdXRoMic7XHJcbiAgICB0aGlzLl9yZXNldEluc3RhbmNlKCk7XHJcbiAgfVxyXG5cclxuICAvKiBAcHJpdmVhdGUgKi9cclxuICBfY2xlYXJTZXNzaW9uKCkge1xyXG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IG51bGw7XHJcbiAgICB0aGlzLnJlZnJlc2hUb2tlbiA9IG51bGw7XHJcbiAgICB0aGlzLmluc3RhbmNlVXJsID0gZGVmYXVsdENvbm5lY3Rpb25Db25maWcuaW5zdGFuY2VVcmw7XHJcbiAgICB0aGlzLnVzZXJJbmZvID0gbnVsbDtcclxuICAgIHRoaXMuX3Nlc3Npb25UeXBlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qIEBwcml2ZWF0ZSAqL1xyXG4gIF9yZXNldEluc3RhbmNlKCkge1xyXG4gICAgdGhpcy5saW1pdEluZm8gPSB7fTtcclxuICAgIHRoaXMuc29iamVjdHMgPSB7fTtcclxuICAgIC8vIFRPRE8gaW1wbCBjYWNoZVxyXG4gICAgdGhpcy5jYWNoZS5jbGVhcigpO1xyXG4gICAgdGhpcy5jYWNoZS5nZXQoJ2Rlc2NyaWJlR2xvYmFsJykucmVtb3ZlQWxsTGlzdGVuZXJzKCd2YWx1ZScpO1xyXG4gICAgdGhpcy5jYWNoZS5nZXQoJ2Rlc2NyaWJlR2xvYmFsJykub24oJ3ZhbHVlJywgKHsgcmVzdWx0IH0pID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc28gb2YgcmVzdWx0LnNvYmplY3RzKSB7XHJcbiAgICAgICAgICB0aGlzLnNvYmplY3Qoc28ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8qXHJcbiAgICBpZiAodGhpcy50b29saW5nKSB7XHJcbiAgICAgIHRoaXMudG9vbGluZy5fcmVzZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG4gICAgKi9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF1dGhvcml6ZSAodXNpbmcgb2F1dGgyIHdlYiBzZXJ2ZXIgZmxvdylcclxuICAgKi9cclxuICBhc3luYyBhdXRob3JpemUoXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge30sXHJcbiAgKTogUHJvbWlzZTxVc2VySW5mbz4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5vYXV0aDIucmVxdWVzdFRva2VuKGNvZGUsIHBhcmFtcyk7XHJcbiAgICBjb25zdCB1c2VySW5mbyA9IHBhcnNlSWRVcmwocmVzLmlkKTtcclxuICAgIHRoaXMuX2VzdGFibGlzaCh7XHJcbiAgICAgIGluc3RhbmNlVXJsOiByZXMuaW5zdGFuY2VfdXJsLFxyXG4gICAgICBhY2Nlc3NUb2tlbjogcmVzLmFjY2Vzc190b2tlbixcclxuICAgICAgcmVmcmVzaFRva2VuOiByZXMucmVmcmVzaF90b2tlbixcclxuICAgICAgdXNlckluZm8sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhcclxuICAgICAgYDxsb2dpbj4gY29tcGxldGVkLiB1c2VyIGlkID0gJHt1c2VySW5mby5pZH0sIG9yZyBpZCA9ICR7dXNlckluZm8ub3JnYW5pemF0aW9uSWR9YCxcclxuICAgICk7XHJcbiAgICByZXR1cm4gdXNlckluZm87XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGFzeW5jIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJJbmZvPiB7XHJcbiAgICB0aGlzLl9yZWZyZXNoRGVsZWdhdGUgPSBuZXcgU2Vzc2lvblJlZnJlc2hEZWxlZ2F0ZShcclxuICAgICAgdGhpcyxcclxuICAgICAgY3JlYXRlVXNlcm5hbWVQYXNzd29yZFJlZnJlc2hGbih1c2VybmFtZSwgcGFzc3dvcmQpLFxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLm9hdXRoMiAmJiB0aGlzLm9hdXRoMi5jbGllbnRJZCAmJiB0aGlzLm9hdXRoMi5jbGllbnRTZWNyZXQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubG9naW5CeU9BdXRoMih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubG9naW5CeVNvYXAodXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ2luIGJ5IE9BdXRoMiB1c2VybmFtZSAmIHBhc3N3b3JkIGZsb3dcclxuICAgKi9cclxuICBhc3luYyBsb2dpbkJ5T0F1dGgyKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJJbmZvPiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLm9hdXRoMi5hdXRoZW50aWNhdGUodXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgIGNvbnN0IHVzZXJJbmZvID0gcGFyc2VJZFVybChyZXMuaWQpO1xyXG4gICAgdGhpcy5fZXN0YWJsaXNoKHtcclxuICAgICAgaW5zdGFuY2VVcmw6IHJlcy5pbnN0YW5jZV91cmwsXHJcbiAgICAgIGFjY2Vzc1Rva2VuOiByZXMuYWNjZXNzX3Rva2VuLFxyXG4gICAgICB1c2VySW5mbyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oXHJcbiAgICAgIGA8bG9naW4+IGNvbXBsZXRlZC4gdXNlciBpZCA9ICR7dXNlckluZm8uaWR9LCBvcmcgaWQgPSAke3VzZXJJbmZvLm9yZ2FuaXphdGlvbklkfWAsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVzZXJJbmZvO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBhc3luYyBsb2dpbkJ5U29hcCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxVc2VySW5mbz4ge1xyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignbm8gdXNlcm5hbWUgcGFzc3dvcmQgZ2l2ZW4nKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0gW1xyXG4gICAgICAnPHNlOkVudmVsb3BlIHhtbG5zOnNlPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS9cIj4nLFxyXG4gICAgICAnPHNlOkhlYWRlci8+JyxcclxuICAgICAgJzxzZTpCb2R5PicsXHJcbiAgICAgICc8bG9naW4geG1sbnM9XCJ1cm46cGFydG5lci5zb2FwLnNmb3JjZS5jb21cIj4nLFxyXG4gICAgICBgPHVzZXJuYW1lPiR7ZXNjKHVzZXJuYW1lKX08L3VzZXJuYW1lPmAsXHJcbiAgICAgIGA8cGFzc3dvcmQ+JHtlc2MocGFzc3dvcmQpfTwvcGFzc3dvcmQ+YCxcclxuICAgICAgJzwvbG9naW4+JyxcclxuICAgICAgJzwvc2U6Qm9keT4nLFxyXG4gICAgICAnPC9zZTpFbnZlbG9wZT4nLFxyXG4gICAgXS5qb2luKCcnKTtcclxuXHJcbiAgICBjb25zdCBzb2FwTG9naW5FbmRwb2ludCA9IFtcclxuICAgICAgdGhpcy5sb2dpblVybCxcclxuICAgICAgJ3NlcnZpY2VzL1NvYXAvdScsXHJcbiAgICAgIHRoaXMudmVyc2lvbixcclxuICAgIF0uam9pbignLycpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl90cmFuc3BvcnQuaHR0cFJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiBzb2FwTG9naW5FbmRwb2ludCxcclxuICAgICAgYm9keSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC94bWwnLFxyXG4gICAgICAgIFNPQVBBY3Rpb246ICdcIlwiJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgbGV0IG07XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSA0MDApIHtcclxuICAgICAgbSA9IHJlc3BvbnNlLmJvZHkubWF0Y2goLzxmYXVsdHN0cmluZz4oW148XSspPFxcL2ZhdWx0c3RyaW5nPi8pO1xyXG4gICAgICBjb25zdCBmYXVsdHN0cmluZyA9IG0gJiYgbVsxXTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGZhdWx0c3RyaW5nIHx8IHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKGBTT0FQIHJlc3BvbnNlID0gJHtyZXNwb25zZS5ib2R5fWApO1xyXG4gICAgbSA9IHJlc3BvbnNlLmJvZHkubWF0Y2goLzxzZXJ2ZXJVcmw+KFtePF0rKTxcXC9zZXJ2ZXJVcmw+Lyk7XHJcbiAgICBjb25zdCBzZXJ2ZXJVcmwgPSBtICYmIG1bMV07XHJcbiAgICBtID0gcmVzcG9uc2UuYm9keS5tYXRjaCgvPHNlc3Npb25JZD4oW148XSspPFxcL3Nlc3Npb25JZD4vKTtcclxuICAgIGNvbnN0IHNlc3Npb25JZCA9IG0gJiYgbVsxXTtcclxuICAgIG0gPSByZXNwb25zZS5ib2R5Lm1hdGNoKC88dXNlcklkPihbXjxdKyk8XFwvdXNlcklkPi8pO1xyXG4gICAgY29uc3QgdXNlcklkID0gbSAmJiBtWzFdO1xyXG4gICAgbSA9IHJlc3BvbnNlLmJvZHkubWF0Y2goLzxvcmdhbml6YXRpb25JZD4oW148XSspPFxcL29yZ2FuaXphdGlvbklkPi8pO1xyXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uSWQgPSBtICYmIG1bMV07XHJcbiAgICBpZiAoIXNlcnZlclVybCB8fCAhc2Vzc2lvbklkIHx8ICF1c2VySWQgfHwgIW9yZ2FuaXphdGlvbklkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnY291bGQgbm90IGV4dHJhY3Qgc2Vzc2lvbiBpbmZvcm1hdGlvbiBmcm9tIGxvZ2luIHJlc3BvbnNlJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGlkVXJsID0gW3RoaXMubG9naW5VcmwsICdpZCcsIG9yZ2FuaXphdGlvbklkLCB1c2VySWRdLmpvaW4oJy8nKTtcclxuICAgIGNvbnN0IHVzZXJJbmZvID0geyBpZDogdXNlcklkLCBvcmdhbml6YXRpb25JZCwgdXJsOiBpZFVybCB9O1xyXG4gICAgdGhpcy5fZXN0YWJsaXNoKHtcclxuICAgICAgc2VydmVyVXJsOiBzZXJ2ZXJVcmxcclxuICAgICAgICAuc3BsaXQoJy8nKVxyXG4gICAgICAgIC5zbGljZSgwLCAzKVxyXG4gICAgICAgIC5qb2luKCcvJyksXHJcbiAgICAgIHNlc3Npb25JZCxcclxuICAgICAgdXNlckluZm8sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2xvZ2dlci5pbmZvKFxyXG4gICAgICBgPGxvZ2luPiBjb21wbGV0ZWQuIHVzZXIgaWQgPSAke3VzZXJJZH0sIG9yZyBpZCA9ICR7b3JnYW5pemF0aW9uSWR9YCxcclxuICAgICk7XHJcbiAgICByZXR1cm4gdXNlckluZm87XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dvdXQgdGhlIGN1cnJlbnQgc2Vzc2lvblxyXG4gICAqL1xyXG4gIGFzeW5jIGxvZ291dChyZXZva2U/OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLl9yZWZyZXNoRGVsZWdhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAodGhpcy5fc2Vzc2lvblR5cGUgPT09ICdvYXV0aDInKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxvZ291dEJ5T0F1dGgyKHJldm9rZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5sb2dvdXRCeVNvYXAocmV2b2tlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ291dCB0aGUgY3VycmVudCBzZXNzaW9uIGJ5IHJldm9raW5nIGFjY2VzcyB0b2tlbiB2aWEgT0F1dGgyIHNlc3Npb24gcmV2b2tlXHJcbiAgICovXHJcbiAgYXN5bmMgbG9nb3V0QnlPQXV0aDIocmV2b2tlPzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZXZva2UgPyB0aGlzLnJlZnJlc2hUb2tlbiA6IHRoaXMuYWNjZXNzVG9rZW47XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgYXdhaXQgdGhpcy5vYXV0aDIucmV2b2tlVG9rZW4odG9rZW4pO1xyXG4gICAgfVxyXG4gICAgLy8gRGVzdHJveSB0aGUgc2Vzc2lvbiBib3VuZCB0byB0aGlzIGNvbm5lY3Rpb25cclxuICAgIHRoaXMuX2NsZWFyU2Vzc2lvbigpO1xyXG4gICAgdGhpcy5fcmVzZXRJbnN0YW5jZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9nb3V0IHRoZSBzZXNzaW9uIGJ5IHVzaW5nIFNPQVAgd2ViIHNlcnZpY2UgQVBJXHJcbiAgICovXHJcbiAgYXN5bmMgbG9nb3V0QnlTb2FwKHJldm9rZT86IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBbXHJcbiAgICAgICc8c2U6RW52ZWxvcGUgeG1sbnM6c2U9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1wiPicsXHJcbiAgICAgICc8c2U6SGVhZGVyPicsXHJcbiAgICAgICc8U2Vzc2lvbkhlYWRlciB4bWxucz1cInVybjpwYXJ0bmVyLnNvYXAuc2ZvcmNlLmNvbVwiPicsXHJcbiAgICAgIGA8c2Vzc2lvbklkPiR7ZXNjKFxyXG4gICAgICAgIHJldm9rZSA/IHRoaXMucmVmcmVzaFRva2VuIDogdGhpcy5hY2Nlc3NUb2tlbixcclxuICAgICAgKX08L3Nlc3Npb25JZD5gLFxyXG4gICAgICAnPC9TZXNzaW9uSGVhZGVyPicsXHJcbiAgICAgICc8L3NlOkhlYWRlcj4nLFxyXG4gICAgICAnPHNlOkJvZHk+JyxcclxuICAgICAgJzxsb2dvdXQgeG1sbnM9XCJ1cm46cGFydG5lci5zb2FwLnNmb3JjZS5jb21cIi8+JyxcclxuICAgICAgJzwvc2U6Qm9keT4nLFxyXG4gICAgICAnPC9zZTpFbnZlbG9wZT4nLFxyXG4gICAgXS5qb2luKCcnKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fdHJhbnNwb3J0Lmh0dHBSZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogW3RoaXMuaW5zdGFuY2VVcmwsICdzZXJ2aWNlcy9Tb2FwL3UnLCB0aGlzLnZlcnNpb25dLmpvaW4oJy8nKSxcclxuICAgICAgYm9keSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC94bWwnLFxyXG4gICAgICAgIFNPQVBBY3Rpb246ICdcIlwiJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFxyXG4gICAgICBgU09BUCBzdGF0dXNDb2RlID0gJHtyZXNwb25zZS5zdGF0dXNDb2RlfSwgcmVzcG9uc2UgPSAke3Jlc3BvbnNlLmJvZHl9YCxcclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSA0MDApIHtcclxuICAgICAgY29uc3QgbSA9IHJlc3BvbnNlLmJvZHkubWF0Y2goLzxmYXVsdHN0cmluZz4oW148XSspPFxcL2ZhdWx0c3RyaW5nPi8pO1xyXG4gICAgICBjb25zdCBmYXVsdHN0cmluZyA9IG0gJiYgbVsxXTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGZhdWx0c3RyaW5nIHx8IHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgfVxyXG4gICAgLy8gRGVzdHJveSB0aGUgc2Vzc2lvbiBib3VuZCB0byB0aGlzIGNvbm5lY3Rpb25cclxuICAgIHRoaXMuX2NsZWFyU2Vzc2lvbigpO1xyXG4gICAgdGhpcy5fcmVzZXRJbnN0YW5jZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCBSRVNUIEFQSSByZXF1ZXN0IHdpdGggZ2l2ZW4gSFRUUCByZXF1ZXN0IGluZm8sIHdpdGggY29ubmVjdGVkIHNlc3Npb24gaW5mb3JtYXRpb24uXHJcbiAgICpcclxuICAgKiBFbmRwb2ludCBVUkwgY2FuIGJlIGFic29sdXRlIFVSTCAoJ2h0dHBzOi8vbmExLnNhbGVzZm9yY2UuY29tL3NlcnZpY2VzL2RhdGEvdjMyLjAvc29iamVjdHMvQWNjb3VudC9kZXNjcmliZScpXHJcbiAgICogLCByZWxhdGl2ZSBwYXRoIGZyb20gcm9vdCAoJy9zZXJ2aWNlcy9kYXRhL3YzMi4wL3NvYmplY3RzL0FjY291bnQvZGVzY3JpYmUnKVxyXG4gICAqICwgb3IgcmVsYXRpdmUgcGF0aCBmcm9tIHZlcnNpb24gcm9vdCAoJy9zb2JqZWN0cy9BY2NvdW50L2Rlc2NyaWJlJykuXHJcbiAgICovXHJcbiAgcmVxdWVzdChcclxuICAgIHJlcXVlc3Q6IHN0cmluZyB8IEh0dHBSZXF1ZXN0LFxyXG4gICAgb3B0aW9uczogT2JqZWN0ID0ge30sXHJcbiAgKTogU3RyZWFtUHJvbWlzZTxhbnk+IHtcclxuICAgIC8vIGlmIHJlcXVlc3QgaXMgc2ltcGxlIHN0cmluZywgcmVnYXJkIGl0IGFzIHVybCBpbiBHRVQgbWV0aG9kXHJcbiAgICBsZXQgX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0ID1cclxuICAgICAgdHlwZW9mIHJlcXVlc3QgPT09ICdzdHJpbmcnID8geyBtZXRob2Q6ICdHRVQnLCB1cmw6IHJlcXVlc3QgfSA6IHJlcXVlc3Q7XHJcbiAgICAvLyBpZiB1cmwgaXMgZ2l2ZW4gaW4gcmVsYXRpdmUgcGF0aCwgcHJlcGVuZCBiYXNlIHVybCBvciBpbnN0YW5jZSB1cmwgYmVmb3JlLlxyXG4gICAgX3JlcXVlc3QgPSBPYmplY3QuYXNzaWduKHt9LCBfcmVxdWVzdCwge1xyXG4gICAgICB1cmw6IHRoaXMuX25vcm1hbGl6ZVVybChfcmVxdWVzdC51cmwpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBodHRwQXBpID0gbmV3IEh0dHBBcGkodGhpcywgb3B0aW9ucyk7XHJcbiAgICAvLyBsb2cgYXBpIHVzYWdlIGFuZCBpdHMgcXVvdGFcclxuICAgIGh0dHBBcGkub24oJ3Jlc3BvbnNlJywgKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMgJiYgcmVzcG9uc2UuaGVhZGVyc1snc2ZvcmNlLWxpbWl0LWluZm8nXSkge1xyXG4gICAgICAgIGNvbnN0IGFwaVVzYWdlID0gcmVzcG9uc2UuaGVhZGVyc1snc2ZvcmNlLWxpbWl0LWluZm8nXS5tYXRjaChcclxuICAgICAgICAgIC9hcGktdXNhZ2U9KFxcZCspXFwvKFxcZCspLyxcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChhcGlVc2FnZSkge1xyXG4gICAgICAgICAgdGhpcy5saW1pdEluZm8gPSB7XHJcbiAgICAgICAgICAgIGFwaVVzYWdlOiB7XHJcbiAgICAgICAgICAgICAgdXNlZDogcGFyc2VJbnQoYXBpVXNhZ2VbMV0sIDEwKSxcclxuICAgICAgICAgICAgICBsaW1pdDogcGFyc2VJbnQoYXBpVXNhZ2VbMl0sIDEwKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBodHRwQXBpLnJlcXVlc3QoX3JlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCBIVFRQIEdFVCByZXF1ZXN0XHJcbiAgICpcclxuICAgKiBFbmRwb2ludCBVUkwgY2FuIGJlIGFic29sdXRlIFVSTCAoJ2h0dHBzOi8vbmExLnNhbGVzZm9yY2UuY29tL3NlcnZpY2VzL2RhdGEvdjMyLjAvc29iamVjdHMvQWNjb3VudC9kZXNjcmliZScpXHJcbiAgICogLCByZWxhdGl2ZSBwYXRoIGZyb20gcm9vdCAoJy9zZXJ2aWNlcy9kYXRhL3YzMi4wL3NvYmplY3RzL0FjY291bnQvZGVzY3JpYmUnKVxyXG4gICAqICwgb3IgcmVsYXRpdmUgcGF0aCBmcm9tIHZlcnNpb24gcm9vdCAoJy9zb2JqZWN0cy9BY2NvdW50L2Rlc2NyaWJlJykuXHJcbiAgICovXHJcbiAgcmVxdWVzdEdldCh1cmw6IHN0cmluZywgb3B0aW9ucz86IE9iamVjdCkge1xyXG4gICAgY29uc3QgcmVxdWVzdDogSHR0cFJlcXVlc3QgPSB7IG1ldGhvZDogJ0dFVCcsIHVybCB9O1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgSFRUUCBQT1NUIHJlcXVlc3Qgd2l0aCBKU09OIGJvZHksIHdpdGggY29ubmVjdGVkIHNlc3Npb24gaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEVuZHBvaW50IFVSTCBjYW4gYmUgYWJzb2x1dGUgVVJMICgnaHR0cHM6Ly9uYTEuc2FsZXNmb3JjZS5jb20vc2VydmljZXMvZGF0YS92MzIuMC9zb2JqZWN0cy9BY2NvdW50L2Rlc2NyaWJlJylcclxuICAgKiAsIHJlbGF0aXZlIHBhdGggZnJvbSByb290ICgnL3NlcnZpY2VzL2RhdGEvdjMyLjAvc29iamVjdHMvQWNjb3VudC9kZXNjcmliZScpXHJcbiAgICogLCBvciByZWxhdGl2ZSBwYXRoIGZyb20gdmVyc2lvbiByb290ICgnL3NvYmplY3RzL0FjY291bnQvZGVzY3JpYmUnKS5cclxuICAgKi9cclxuICByZXF1ZXN0UG9zdCh1cmw6IHN0cmluZywgYm9keTogT2JqZWN0LCBvcHRpb25zPzogT2JqZWN0KSB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBIdHRwUmVxdWVzdCA9IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybCxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocmVxdWVzdCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kIEhUVFAgUFVUIHJlcXVlc3Qgd2l0aCBKU09OIGJvZHksIHdpdGggY29ubmVjdGVkIHNlc3Npb24gaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEVuZHBvaW50IFVSTCBjYW4gYmUgYWJzb2x1dGUgVVJMICgnaHR0cHM6Ly9uYTEuc2FsZXNmb3JjZS5jb20vc2VydmljZXMvZGF0YS92MzIuMC9zb2JqZWN0cy9BY2NvdW50L2Rlc2NyaWJlJylcclxuICAgKiAsIHJlbGF0aXZlIHBhdGggZnJvbSByb290ICgnL3NlcnZpY2VzL2RhdGEvdjMyLjAvc29iamVjdHMvQWNjb3VudC9kZXNjcmliZScpXHJcbiAgICogLCBvciByZWxhdGl2ZSBwYXRoIGZyb20gdmVyc2lvbiByb290ICgnL3NvYmplY3RzL0FjY291bnQvZGVzY3JpYmUnKS5cclxuICAgKi9cclxuICByZXF1ZXN0UHV0KHVybDogc3RyaW5nLCBib2R5OiBPYmplY3QsIG9wdGlvbnM/OiBPYmplY3QpIHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IEh0dHBSZXF1ZXN0ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHJlcXVlc3QsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCBIVFRQIFBBVENIIHJlcXVlc3Qgd2l0aCBKU09OIGJvZHlcclxuICAgKlxyXG4gICAqIEVuZHBvaW50IFVSTCBjYW4gYmUgYWJzb2x1dGUgVVJMICgnaHR0cHM6Ly9uYTEuc2FsZXNmb3JjZS5jb20vc2VydmljZXMvZGF0YS92MzIuMC9zb2JqZWN0cy9BY2NvdW50L2Rlc2NyaWJlJylcclxuICAgKiAsIHJlbGF0aXZlIHBhdGggZnJvbSByb290ICgnL3NlcnZpY2VzL2RhdGEvdjMyLjAvc29iamVjdHMvQWNjb3VudC9kZXNjcmliZScpXHJcbiAgICogLCBvciByZWxhdGl2ZSBwYXRoIGZyb20gdmVyc2lvbiByb290ICgnL3NvYmplY3RzL0FjY291bnQvZGVzY3JpYmUnKS5cclxuICAgKi9cclxuICByZXF1ZXN0UGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IE9iamVjdCwgb3B0aW9ucz86IE9iamVjdCkge1xyXG4gICAgY29uc3QgcmVxdWVzdDogSHR0cFJlcXVlc3QgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgSFRUUCBERUxFVEUgcmVxdWVzdFxyXG4gICAqXHJcbiAgICogRW5kcG9pbnQgVVJMIGNhbiBiZSBhYnNvbHV0ZSBVUkwgKCdodHRwczovL25hMS5zYWxlc2ZvcmNlLmNvbS9zZXJ2aWNlcy9kYXRhL3YzMi4wL3NvYmplY3RzL0FjY291bnQvZGVzY3JpYmUnKVxyXG4gICAqICwgcmVsYXRpdmUgcGF0aCBmcm9tIHJvb3QgKCcvc2VydmljZXMvZGF0YS92MzIuMC9zb2JqZWN0cy9BY2NvdW50L2Rlc2NyaWJlJylcclxuICAgKiAsIG9yIHJlbGF0aXZlIHBhdGggZnJvbSB2ZXJzaW9uIHJvb3QgKCcvc29iamVjdHMvQWNjb3VudC9kZXNjcmliZScpLlxyXG4gICAqL1xyXG4gIHJlcXVlc3REZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBPYmplY3QpIHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IEh0dHBSZXF1ZXN0ID0geyBtZXRob2Q6ICdERUxFVEUnLCB1cmwgfTtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocmVxdWVzdCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKiovXHJcbiAgX2Jhc2VVcmwoKSB7XHJcbiAgICByZXR1cm4gW3RoaXMuaW5zdGFuY2VVcmwsICdzZXJ2aWNlcy9kYXRhJywgYHYke3RoaXMudmVyc2lvbn1gXS5qb2luKCcvJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0IHBhdGggdG8gYWJzb2x1dGUgdXJsXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfbm9ybWFsaXplVXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAodXJsWzBdID09PSAnLycpIHtcclxuICAgICAgaWYgKHVybC5pbmRleE9mKCcvc2VydmljZXMvJykgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZVVybCArIHVybDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5fYmFzZVVybCgpICsgdXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgcXVlcnkoc29xbDogc3RyaW5nLCBvcHRpb25zPzogUGFydGlhbDxRdWVyeU9wdGlvbnM+KSB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5PFMsIFNPYmplY3ROYW1lczxTPiwgUmVjb3JkLCAnUXVlcnlSZXN1bHQnPihcclxuICAgICAgdGhpcyxcclxuICAgICAgc29xbCxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIHF1ZXJ5TW9yZShsb2NhdG9yOiBzdHJpbmcsIG9wdGlvbnM/OiBRdWVyeU9wdGlvbnMpIHtcclxuICAgIHJldHVybiBuZXcgUXVlcnk8UywgU09iamVjdE5hbWVzPFM+LCBSZWNvcmQsICdRdWVyeVJlc3VsdCc+KFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB7IGxvY2F0b3IgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiAqL1xyXG4gIF9lbnN1cmVWZXJzaW9uKG1ham9yVmVyc2lvbjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB2ZXJzaW9ucyA9IHRoaXMudmVyc2lvbi5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZlcnNpb25zWzBdLCAxMCkgPj0gbWFqb3JWZXJzaW9uO1xyXG4gIH1cclxuXHJcbiAgLyogKi9cclxuICBfc3VwcG9ydHMoZmVhdHVyZTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKGZlYXR1cmUpIHtcclxuICAgICAgY2FzZSAnc29iamVjdC1jb2xsZWN0aW9uJzogLy8gc29iamVjdCBjb2xsZWN0aW9uIGlzIGF2YWlsYWJsZSBvbmx5IGluIEFQSSB2ZXIgNDIuMCtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW5zdXJlVmVyc2lvbig0Mik7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgc3BlY2lmaWVkIHJlY29yZHNcclxuICAgKi9cclxuICByZXRyaWV2ZTxOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+PihcclxuICAgIHR5cGU6IE4sXHJcbiAgICBpZHM6IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiBSZXRyaWV2ZU9wdGlvbnMsXHJcbiAgKTogUHJvbWlzZTxSZWNvcmQ+O1xyXG4gIHJldHJpZXZlPE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4+KFxyXG4gICAgdHlwZTogTixcclxuICAgIGlkczogc3RyaW5nW10sXHJcbiAgICBvcHRpb25zPzogUmV0cmlldmVPcHRpb25zLFxyXG4gICk6IFByb21pc2U8UmVjb3JkW10+O1xyXG4gIHJldHJpZXZlPE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4+KFxyXG4gICAgdHlwZTogTixcclxuICAgIGlkczogc3RyaW5nIHwgc3RyaW5nW10sXHJcbiAgICBvcHRpb25zPzogUmV0cmlldmVPcHRpb25zLFxyXG4gICk6IFByb21pc2U8UmVjb3JkIHwgUmVjb3JkW10+O1xyXG4gIGFzeW5jIHJldHJpZXZlKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgaWRzOiBzdHJpbmcgfCBzdHJpbmdbXSxcclxuICAgIG9wdGlvbnM6IFJldHJpZXZlT3B0aW9ucyA9IHt9LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaWRzKVxyXG4gICAgICA/IC8vIGNoZWNrIHRoZSB2ZXJzaW9uIHdoZXRoZXIgU09iamVjdCBjb2xsZWN0aW9uIEFQSSBpcyBzdXBwb3J0ZWQgKDQyLjApXHJcbiAgICAgICAgdGhpcy5fZW5zdXJlVmVyc2lvbig0MilcclxuICAgICAgICA/IHRoaXMuX3JldHJpZXZlTWFueSh0eXBlLCBpZHMsIG9wdGlvbnMpXHJcbiAgICAgICAgOiB0aGlzLl9yZXRyaWV2ZVBhcmFsbGVsKHR5cGUsIGlkcywgb3B0aW9ucylcclxuICAgICAgOiB0aGlzLl9yZXRyaWV2ZVNpbmdsZSh0eXBlLCBpZHMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgYXN5bmMgX3JldHJpZXZlU2luZ2xlKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9uczogUmV0cmlldmVPcHRpb25zKSB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZWNvcmQgSUQuIFNwZWNpZnkgdmFsaWQgcmVjb3JkIElEIHZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgdXJsID0gW3RoaXMuX2Jhc2VVcmwoKSwgJ3NvYmplY3RzJywgdHlwZSwgaWRdLmpvaW4oJy8nKTtcclxuICAgIGNvbnN0IHsgZmllbGRzLCBoZWFkZXJzIH0gPSBvcHRpb25zO1xyXG4gICAgaWYgKGZpZWxkcykge1xyXG4gICAgICB1cmwgKz0gYD9maWVsZHM9JHtmaWVsZHMuam9pbignLCcpfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHsgbWV0aG9kOiAnR0VUJywgdXJsLCBoZWFkZXJzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgYXN5bmMgX3JldHJpZXZlUGFyYWxsZWwoXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBpZHM6IHN0cmluZ1tdLFxyXG4gICAgb3B0aW9uczogUmV0cmlldmVPcHRpb25zLFxyXG4gICkge1xyXG4gICAgaWYgKGlkcy5sZW5ndGggPiB0aGlzLl9tYXhSZXF1ZXN0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhjZWVkZWQgbWF4IGxpbWl0IG9mIGNvbmN1cnJlbnQgY2FsbCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICBpZHMubWFwKChpZCkgPT5cclxuICAgICAgICB0aGlzLl9yZXRyaWV2ZVNpbmdsZSh0eXBlLCBpZCwgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbnMuYWxsT3JOb25lIHx8IGVyci5lcnJvckNvZGUgIT09ICdOT1RfRk9VTkQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiBAcHJpdmF0ZSAqL1xyXG4gIGFzeW5jIF9yZXRyaWV2ZU1hbnkodHlwZTogc3RyaW5nLCBpZHM6IHN0cmluZ1tdLCBvcHRpb25zOiBSZXRyaWV2ZU9wdGlvbnMpIHtcclxuICAgIGlmIChpZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybCA9IFt0aGlzLl9iYXNlVXJsKCksICdjb21wb3NpdGUnLCAnc29iamVjdHMnLCB0eXBlXS5qb2luKCcvJyk7XHJcbiAgICBjb25zdCBmaWVsZHMgPVxyXG4gICAgICBvcHRpb25zLmZpZWxkcyB8fFxyXG4gICAgICAoYXdhaXQgdGhpcy5kZXNjcmliZSQodHlwZSkpLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiBmaWVsZC5uYW1lKTtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkcywgZmllbGRzIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLi4uKG9wdGlvbnMuaGVhZGVycyB8fCB7fSksXHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHJlY29yZHNcclxuICAgKi9cclxuICBjcmVhdGU8XHJcbiAgICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxyXG4gICAgSW5wdXRSZWNvcmQgZXh0ZW5kcyBTT2JqZWN0SW5wdXRSZWNvcmQ8UywgTj4gPSBTT2JqZWN0SW5wdXRSZWNvcmQ8UywgTj5cclxuICA+KFxyXG4gICAgdHlwZTogTixcclxuICAgIHJlY29yZHM6IElucHV0UmVjb3JkW10sXHJcbiAgICBvcHRpb25zPzogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XHJcbiAgY3JlYXRlPFxyXG4gICAgTiBleHRlbmRzIFNPYmplY3ROYW1lczxTPixcclxuICAgIElucHV0UmVjb3JkIGV4dGVuZHMgU09iamVjdElucHV0UmVjb3JkPFMsIE4+ID0gU09iamVjdElucHV0UmVjb3JkPFMsIE4+XHJcbiAgPih0eXBlOiBOLCByZWNvcmQ6IElucHV0UmVjb3JkLCBvcHRpb25zPzogRG1sT3B0aW9ucyk6IFByb21pc2U8U2F2ZVJlc3VsdD47XHJcbiAgY3JlYXRlPFxyXG4gICAgTiBleHRlbmRzIFNPYmplY3ROYW1lczxTPixcclxuICAgIElucHV0UmVjb3JkIGV4dGVuZHMgU09iamVjdElucHV0UmVjb3JkPFMsIE4+ID0gU09iamVjdElucHV0UmVjb3JkPFMsIE4+XHJcbiAgPihcclxuICAgIHR5cGU6IE4sXHJcbiAgICByZWNvcmRzOiBJbnB1dFJlY29yZCB8IElucHV0UmVjb3JkW10sXHJcbiAgICBvcHRpb25zPzogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQgfCBTYXZlUmVzdWx0W10+O1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB0eXBlXHJcbiAgICogQHBhcmFtIHJlY29yZHNcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqL1xyXG4gIGFzeW5jIGNyZWF0ZShcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHJlY29yZHM6IFJlY29yZCB8IFJlY29yZFtdLFxyXG4gICAgb3B0aW9uczogRG1sT3B0aW9ucyA9IHt9LFxyXG4gICkge1xyXG4gICAgY29uc3QgcmV0ID0gQXJyYXkuaXNBcnJheShyZWNvcmRzKVxyXG4gICAgICA/IC8vIGNoZWNrIHRoZSB2ZXJzaW9uIHdoZXRoZXIgU09iamVjdCBjb2xsZWN0aW9uIEFQSSBpcyBzdXBwb3J0ZWQgKDQyLjApXHJcbiAgICAgICAgdGhpcy5fZW5zdXJlVmVyc2lvbig0MilcclxuICAgICAgICA/IGF3YWl0IHRoaXMuX2NyZWF0ZU1hbnkodHlwZSwgcmVjb3Jkcywgb3B0aW9ucylcclxuICAgICAgICA6IGF3YWl0IHRoaXMuX2NyZWF0ZVBhcmFsbGVsKHR5cGUsIHJlY29yZHMsIG9wdGlvbnMpXHJcbiAgICAgIDogYXdhaXQgdGhpcy5fY3JlYXRlU2luZ2xlKHR5cGUsIHJlY29yZHMsIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKiBAcHJpdmF0ZSAqL1xyXG4gIGFzeW5jIF9jcmVhdGVTaW5nbGUodHlwZTogc3RyaW5nLCByZWNvcmQ6IFJlY29yZCwgb3B0aW9uczogRG1sT3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBJZCwgdHlwZTogcnR5cGUsIGF0dHJpYnV0ZXMsIC4uLnJlYyB9ID0gcmVjb3JkO1xyXG4gICAgY29uc3Qgc29iamVjdFR5cGUgPSB0eXBlIHx8IChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMudHlwZSkgfHwgcnR5cGU7XHJcbiAgICBpZiAoIXNvYmplY3RUeXBlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gU09iamVjdCBUeXBlIGRlZmluZWQgaW4gcmVjb3JkJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmwgPSBbdGhpcy5fYmFzZVVybCgpLCAnc29iamVjdHMnLCBzb2JqZWN0VHlwZV0uam9pbignLycpO1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlYyksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAuLi4ob3B0aW9ucy5oZWFkZXJzIHx8IHt9KSxcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBhc3luYyBfY3JlYXRlUGFyYWxsZWwodHlwZTogc3RyaW5nLCByZWNvcmRzOiBSZWNvcmRbXSwgb3B0aW9uczogRG1sT3B0aW9ucykge1xyXG4gICAgaWYgKHJlY29yZHMubGVuZ3RoID4gdGhpcy5fbWF4UmVxdWVzdCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4Y2VlZGVkIG1heCBsaW1pdCBvZiBjb25jdXJyZW50IGNhbGwnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChcclxuICAgICAgcmVjb3Jkcy5tYXAoKHJlY29yZCkgPT5cclxuICAgICAgICB0aGlzLl9jcmVhdGVTaW5nbGUodHlwZSwgcmVjb3JkLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAvLyBiZSBhd2FyZSB0aGF0IGFsbE9yTm9uZSBpbiBwYXJhbGxlbCBtb2RlIHdpbGwgbm90IHJldmVydCB0aGUgb3RoZXIgc3VjY2Vzc2Z1bCByZXF1ZXN0c1xyXG4gICAgICAgICAgLy8gaXQgb25seSByYWlzZXMgZXJyb3Igd2hlbiBtZXQgYXQgbGVhc3Qgb25lIGZhaWxlZCByZXF1ZXN0LlxyXG4gICAgICAgICAgaWYgKG9wdGlvbnMuYWxsT3JOb25lIHx8ICFlcnIuZXJyb3JDb2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0b1NhdmVSZXN1bHQobnVsbCwgZXJyKTtcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBhc3luYyBfY3JlYXRlTWFueShcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHJlY29yZHM6IFJlY29yZFtdLFxyXG4gICAgb3B0aW9uczogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHRbXT4ge1xyXG4gICAgaWYgKHJlY29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlY29yZHMubGVuZ3RoID4gTUFYX0RNTF9DT1VOVCAmJiBvcHRpb25zLmFsbG93UmVjdXJzaXZlKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uKGF3YWl0IHRoaXMuX2NyZWF0ZU1hbnkoXHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgcmVjb3Jkcy5zbGljZSgwLCBNQVhfRE1MX0NPVU5UKSxcclxuICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgKSksXHJcbiAgICAgICAgLi4uKGF3YWl0IHRoaXMuX2NyZWF0ZU1hbnkoXHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgcmVjb3Jkcy5zbGljZShNQVhfRE1MX0NPVU5UKSxcclxuICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgKSksXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICBjb25zdCBfcmVjb3JkcyA9IHJlY29yZHMubWFwKChyZWNvcmQpID0+IHtcclxuICAgICAgY29uc3QgeyBJZCwgdHlwZTogcnR5cGUsIGF0dHJpYnV0ZXMsIC4uLnJlYyB9ID0gcmVjb3JkO1xyXG4gICAgICBjb25zdCBzb2JqZWN0VHlwZSA9IHR5cGUgfHwgKGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlcy50eXBlKSB8fCBydHlwZTtcclxuICAgICAgaWYgKCFzb2JqZWN0VHlwZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gU09iamVjdCBUeXBlIGRlZmluZWQgaW4gcmVjb3JkJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgYXR0cmlidXRlczogeyB0eXBlOiBzb2JqZWN0VHlwZSB9LCAuLi5yZWMgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXJsID0gW3RoaXMuX2Jhc2VVcmwoKSwgJ2NvbXBvc2l0ZScsICdzb2JqZWN0cyddLmpvaW4oJy8nKTtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgYWxsT3JOb25lOiBvcHRpb25zLmFsbE9yTm9uZSB8fCBmYWxzZSxcclxuICAgICAgICByZWNvcmRzOiBfcmVjb3JkcyxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAuLi4ob3B0aW9ucy5oZWFkZXJzIHx8IHt9KSxcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIENvbm5lY3Rpb24jY3JlYXRlKClcclxuICAgKi9cclxuICBpbnNlcnQgPSB0aGlzLmNyZWF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHJlY29yZHNcclxuICAgKi9cclxuICB1cGRhdGU8XHJcbiAgICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxyXG4gICAgVXBkYXRlUmVjb3JkIGV4dGVuZHMgU09iamVjdFVwZGF0ZVJlY29yZDxTLCBOPiA9IFNPYmplY3RVcGRhdGVSZWNvcmQ8UywgTj5cclxuICA+KFxyXG4gICAgdHlwZTogTixcclxuICAgIHJlY29yZHM6IFVwZGF0ZVJlY29yZFtdLFxyXG4gICAgb3B0aW9ucz86IERtbE9wdGlvbnMsXHJcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xyXG4gIHVwZGF0ZTxcclxuICAgIE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4sXHJcbiAgICBVcGRhdGVSZWNvcmQgZXh0ZW5kcyBTT2JqZWN0VXBkYXRlUmVjb3JkPFMsIE4+ID0gU09iamVjdFVwZGF0ZVJlY29yZDxTLCBOPlxyXG4gID4odHlwZTogTiwgcmVjb3JkOiBVcGRhdGVSZWNvcmQsIG9wdGlvbnM/OiBEbWxPcHRpb25zKTogUHJvbWlzZTxTYXZlUmVzdWx0PjtcclxuICB1cGRhdGU8XHJcbiAgICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxyXG4gICAgVXBkYXRlUmVjb3JkIGV4dGVuZHMgU09iamVjdFVwZGF0ZVJlY29yZDxTLCBOPiA9IFNPYmplY3RVcGRhdGVSZWNvcmQ8UywgTj5cclxuICA+KFxyXG4gICAgdHlwZTogTixcclxuICAgIHJlY29yZHM6IFVwZGF0ZVJlY29yZCB8IFVwZGF0ZVJlY29yZFtdLFxyXG4gICAgb3B0aW9ucz86IERtbE9wdGlvbnMsXHJcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0IHwgU2F2ZVJlc3VsdFtdPjtcclxuICAvKipcclxuICAgKiBAcGFyYW0gdHlwZVxyXG4gICAqIEBwYXJhbSByZWNvcmRzXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKi9cclxuICB1cGRhdGU8TiBleHRlbmRzIFNPYmplY3ROYW1lczxTPj4oXHJcbiAgICB0eXBlOiBOLFxyXG4gICAgcmVjb3JkczogUmVjb3JkIHwgUmVjb3JkW10sXHJcbiAgICBvcHRpb25zOiBEbWxPcHRpb25zID0ge30sXHJcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0IHwgU2F2ZVJlc3VsdFtdPiB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyZWNvcmRzKVxyXG4gICAgICA/IC8vIGNoZWNrIHRoZSB2ZXJzaW9uIHdoZXRoZXIgU09iamVjdCBjb2xsZWN0aW9uIEFQSSBpcyBzdXBwb3J0ZWQgKDQyLjApXHJcbiAgICAgICAgdGhpcy5fZW5zdXJlVmVyc2lvbig0MilcclxuICAgICAgICA/IHRoaXMuX3VwZGF0ZU1hbnkodHlwZSwgcmVjb3Jkcywgb3B0aW9ucylcclxuICAgICAgICA6IHRoaXMuX3VwZGF0ZVBhcmFsbGVsKHR5cGUsIHJlY29yZHMsIG9wdGlvbnMpXHJcbiAgICAgIDogdGhpcy5fdXBkYXRlU2luZ2xlKHR5cGUsIHJlY29yZHMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgYXN5bmMgX3VwZGF0ZVNpbmdsZShcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHJlY29yZDogUmVjb3JkLFxyXG4gICAgb3B0aW9uczogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQ+IHtcclxuICAgIGNvbnN0IHsgSWQ6IGlkLCB0eXBlOiBydHlwZSwgYXR0cmlidXRlcywgLi4ucmVjIH0gPSByZWNvcmQ7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVjb3JkIGlkIGlzIG5vdCBmb3VuZCBpbiByZWNvcmQuJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzb2JqZWN0VHlwZSA9IHR5cGUgfHwgKGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlcy50eXBlKSB8fCBydHlwZTtcclxuICAgIGlmICghc29iamVjdFR5cGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBTT2JqZWN0IFR5cGUgZGVmaW5lZCBpbiByZWNvcmQnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybCA9IFt0aGlzLl9iYXNlVXJsKCksICdzb2JqZWN0cycsIHNvYmplY3RUeXBlLCBpZF0uam9pbignLycpO1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVjKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAuLi4ob3B0aW9ucy5oZWFkZXJzIHx8IHt9KSxcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5vQ29udGVudFJlc3BvbnNlOiB7IGlkLCBzdWNjZXNzOiB0cnVlLCBlcnJvcnM6IFtdIH0sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgYXN5bmMgX3VwZGF0ZVBhcmFsbGVsKHR5cGU6IHN0cmluZywgcmVjb3JkczogUmVjb3JkW10sIG9wdGlvbnM6IERtbE9wdGlvbnMpIHtcclxuICAgIGlmIChyZWNvcmRzLmxlbmd0aCA+IHRoaXMuX21heFJlcXVlc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeGNlZWRlZCBtYXggbGltaXQgb2YgY29uY3VycmVudCBjYWxsJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICAgIHJlY29yZHMubWFwKChyZWNvcmQpID0+XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2luZ2xlKHR5cGUsIHJlY29yZCwgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgLy8gYmUgYXdhcmUgdGhhdCBhbGxPck5vbmUgaW4gcGFyYWxsZWwgbW9kZSB3aWxsIG5vdCByZXZlcnQgdGhlIG90aGVyIHN1Y2Nlc3NmdWwgcmVxdWVzdHNcclxuICAgICAgICAgIC8vIGl0IG9ubHkgcmFpc2VzIGVycm9yIHdoZW4gbWV0IGF0IGxlYXN0IG9uZSBmYWlsZWQgcmVxdWVzdC5cclxuICAgICAgICAgIGlmIChvcHRpb25zLmFsbE9yTm9uZSB8fCAhZXJyLmVycm9yQ29kZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdG9TYXZlUmVzdWx0KHJlY29yZC5JZCwgZXJyKTtcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBhc3luYyBfdXBkYXRlTWFueShcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHJlY29yZHM6IFJlY29yZFtdLFxyXG4gICAgb3B0aW9uczogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHRbXT4ge1xyXG4gICAgaWYgKHJlY29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGlmIChyZWNvcmRzLmxlbmd0aCA+IE1BWF9ETUxfQ09VTlQgJiYgb3B0aW9ucy5hbGxvd1JlY3Vyc2l2ZSkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIC4uLihhd2FpdCB0aGlzLl91cGRhdGVNYW55KFxyXG4gICAgICAgICAgdHlwZSxcclxuICAgICAgICAgIHJlY29yZHMuc2xpY2UoMCwgTUFYX0RNTF9DT1VOVCksXHJcbiAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICkpLFxyXG4gICAgICAgIC4uLihhd2FpdCB0aGlzLl91cGRhdGVNYW55KFxyXG4gICAgICAgICAgdHlwZSxcclxuICAgICAgICAgIHJlY29yZHMuc2xpY2UoTUFYX0RNTF9DT1VOVCksXHJcbiAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICkpLFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX3JlY29yZHMgPSByZWNvcmRzLm1hcCgocmVjb3JkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgSWQ6IGlkLCB0eXBlOiBydHlwZSwgYXR0cmlidXRlcywgLi4ucmVjIH0gPSByZWNvcmQ7XHJcbiAgICAgIGlmICghaWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlY29yZCBpZCBpcyBub3QgZm91bmQgaW4gcmVjb3JkLicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNvYmplY3RUeXBlID0gdHlwZSB8fCAoYXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzLnR5cGUpIHx8IHJ0eXBlO1xyXG4gICAgICBpZiAoIXNvYmplY3RUeXBlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBTT2JqZWN0IFR5cGUgZGVmaW5lZCBpbiByZWNvcmQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyBpZCwgYXR0cmlidXRlczogeyB0eXBlOiBzb2JqZWN0VHlwZSB9LCAuLi5yZWMgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXJsID0gW3RoaXMuX2Jhc2VVcmwoKSwgJ2NvbXBvc2l0ZScsICdzb2JqZWN0cyddLmpvaW4oJy8nKTtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIHVybCxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGFsbE9yTm9uZTogb3B0aW9ucy5hbGxPck5vbmUgfHwgZmFsc2UsXHJcbiAgICAgICAgcmVjb3JkczogX3JlY29yZHMsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLi4uKG9wdGlvbnMuaGVhZGVycyB8fCB7fSksXHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBzZXJ0IHJlY29yZHNcclxuICAgKi9cclxuICB1cHNlcnQ8XHJcbiAgICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxyXG4gICAgSW5wdXRSZWNvcmQgZXh0ZW5kcyBTT2JqZWN0SW5wdXRSZWNvcmQ8UywgTj4gPSBTT2JqZWN0SW5wdXRSZWNvcmQ8UywgTj4sXHJcbiAgICBGaWVsZE5hbWVzIGV4dGVuZHMgU09iamVjdEZpZWxkTmFtZXM8UywgTj4gPSBTT2JqZWN0RmllbGROYW1lczxTLCBOPlxyXG4gID4oXHJcbiAgICB0eXBlOiBOLFxyXG4gICAgcmVjb3JkczogSW5wdXRSZWNvcmRbXSxcclxuICAgIGV4dElkRmllbGQ6IEZpZWxkTmFtZXMsXHJcbiAgICBvcHRpb25zPzogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XHJcbiAgdXBzZXJ0PFxyXG4gICAgTiBleHRlbmRzIFNPYmplY3ROYW1lczxTPixcclxuICAgIElucHV0UmVjb3JkIGV4dGVuZHMgU09iamVjdElucHV0UmVjb3JkPFMsIE4+ID0gU09iamVjdElucHV0UmVjb3JkPFMsIE4+LFxyXG4gICAgRmllbGROYW1lcyBleHRlbmRzIFNPYmplY3RGaWVsZE5hbWVzPFMsIE4+ID0gU09iamVjdEZpZWxkTmFtZXM8UywgTj5cclxuICA+KFxyXG4gICAgdHlwZTogTixcclxuICAgIHJlY29yZDogSW5wdXRSZWNvcmQsXHJcbiAgICBleHRJZEZpZWxkOiBGaWVsZE5hbWVzLFxyXG4gICAgb3B0aW9ucz86IERtbE9wdGlvbnMsXHJcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0PjtcclxuICB1cHNlcnQ8XHJcbiAgICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxyXG4gICAgSW5wdXRSZWNvcmQgZXh0ZW5kcyBTT2JqZWN0SW5wdXRSZWNvcmQ8UywgTj4gPSBTT2JqZWN0SW5wdXRSZWNvcmQ8UywgTj4sXHJcbiAgICBGaWVsZE5hbWVzIGV4dGVuZHMgU09iamVjdEZpZWxkTmFtZXM8UywgTj4gPSBTT2JqZWN0RmllbGROYW1lczxTLCBOPlxyXG4gID4oXHJcbiAgICB0eXBlOiBOLFxyXG4gICAgcmVjb3JkczogSW5wdXRSZWNvcmQgfCBJbnB1dFJlY29yZFtdLFxyXG4gICAgZXh0SWRGaWVsZDogRmllbGROYW1lcyxcclxuICAgIG9wdGlvbnM/OiBEbWxPcHRpb25zLFxyXG4gICk6IFByb21pc2U8U2F2ZVJlc3VsdCB8IFNhdmVSZXN1bHRbXT47XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdHlwZVxyXG4gICAqIEBwYXJhbSByZWNvcmRzXHJcbiAgICogQHBhcmFtIGV4dElkRmllbGRcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqL1xyXG4gIGFzeW5jIHVwc2VydChcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHJlY29yZHM6IFJlY29yZCB8IFJlY29yZFtdLFxyXG4gICAgZXh0SWRGaWVsZDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogRG1sT3B0aW9ucyA9IHt9LFxyXG4gICk6IFByb21pc2U8U2F2ZVJlc3VsdCB8IFNhdmVSZXN1bHRbXT4ge1xyXG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkocmVjb3Jkcyk7XHJcbiAgICBjb25zdCBfcmVjb3JkcyA9IEFycmF5LmlzQXJyYXkocmVjb3JkcykgPyByZWNvcmRzIDogW3JlY29yZHNdO1xyXG4gICAgaWYgKF9yZWNvcmRzLmxlbmd0aCA+IHRoaXMuX21heFJlcXVlc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeGNlZWRlZCBtYXggbGltaXQgb2YgY29uY3VycmVudCBjYWxsJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIF9yZWNvcmRzLm1hcCgocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBbZXh0SWRGaWVsZF06IGV4dElkLCB0eXBlOiBydHlwZSwgYXR0cmlidXRlcywgLi4ucmVjIH0gPSByZWNvcmQ7XHJcbiAgICAgICAgY29uc3QgdXJsID0gW3RoaXMuX2Jhc2VVcmwoKSwgJ3NvYmplY3RzJywgdHlwZSwgZXh0SWRGaWVsZCwgZXh0SWRdLmpvaW4oXHJcbiAgICAgICAgICAnLycsXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVjKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIC4uLihvcHRpb25zLmhlYWRlcnMgfHwge30pLFxyXG4gICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBub0NvbnRlbnRSZXNwb25zZTogeyBzdWNjZXNzOiB0cnVlLCBlcnJvcnM6IFtdIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgLy8gQmUgYXdhcmUgdGhhdCBgYWxsT3JOb25lYCBvcHRpb24gaW4gdXBzZXJ0IG1ldGhvZFxyXG4gICAgICAgICAgLy8gd2lsbCBub3QgcmV2ZXJ0IHRoZSBvdGhlciBzdWNjZXNzZnVsIHJlcXVlc3RzLlxyXG4gICAgICAgICAgLy8gSXQgb25seSByYWlzZXMgZXJyb3Igd2hlbiBtZXQgYXQgbGVhc3Qgb25lIGZhaWxlZCByZXF1ZXN0LlxyXG4gICAgICAgICAgaWYgKCFpc0FycmF5IHx8IG9wdGlvbnMuYWxsT3JOb25lIHx8ICFlcnIuZXJyb3JDb2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0b1NhdmVSZXN1bHQobnVsbCwgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGlzQXJyYXkgPyByZXN1bHRzIDogcmVzdWx0c1swXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZSByZWNvcmRzXHJcbiAgICovXHJcbiAgZGVzdHJveTxOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+PihcclxuICAgIHR5cGU6IE4sXHJcbiAgICBpZHM6IHN0cmluZ1tdLFxyXG4gICAgb3B0aW9ucz86IERtbE9wdGlvbnMsXHJcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xyXG4gIGRlc3Ryb3k8TiBleHRlbmRzIFNPYmplY3ROYW1lczxTPj4oXHJcbiAgICB0eXBlOiBOLFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiBEbWxPcHRpb25zLFxyXG4gICk6IFByb21pc2U8U2F2ZVJlc3VsdD47XHJcbiAgZGVzdHJveTxOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+PihcclxuICAgIHR5cGU6IE4sXHJcbiAgICBpZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gICAgb3B0aW9ucz86IERtbE9wdGlvbnMsXHJcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0IHwgU2F2ZVJlc3VsdFtdPjtcclxuICAvKipcclxuICAgKiBAcGFyYW0gdHlwZVxyXG4gICAqIEBwYXJhbSBpZHNcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqL1xyXG4gIGFzeW5jIGRlc3Ryb3koXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBpZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gICAgb3B0aW9uczogRG1sT3B0aW9ucyA9IHt9LFxyXG4gICk6IFByb21pc2U8U2F2ZVJlc3VsdCB8IFNhdmVSZXN1bHRbXT4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaWRzKVxyXG4gICAgICA/IC8vIGNoZWNrIHRoZSB2ZXJzaW9uIHdoZXRoZXIgU09iamVjdCBjb2xsZWN0aW9uIEFQSSBpcyBzdXBwb3J0ZWQgKDQyLjApXHJcbiAgICAgICAgdGhpcy5fZW5zdXJlVmVyc2lvbig0MilcclxuICAgICAgICA/IHRoaXMuX2Rlc3Ryb3lNYW55KHR5cGUsIGlkcywgb3B0aW9ucylcclxuICAgICAgICA6IHRoaXMuX2Rlc3Ryb3lQYXJhbGxlbCh0eXBlLCBpZHMsIG9wdGlvbnMpXHJcbiAgICAgIDogdGhpcy5fZGVzdHJveVNpbmdsZSh0eXBlLCBpZHMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgYXN5bmMgX2Rlc3Ryb3lTaW5nbGUoXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQ+IHtcclxuICAgIGNvbnN0IHVybCA9IFt0aGlzLl9iYXNlVXJsKCksICdzb2JqZWN0cycsIHR5cGUsIGlkXS5qb2luKCcvJyk7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzIHx8IHt9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbm9Db250ZW50UmVzcG9uc2U6IHsgaWQsIHN1Y2Nlc3M6IHRydWUsIGVycm9yczogW10gfSxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBhc3luYyBfZGVzdHJveVBhcmFsbGVsKHR5cGU6IHN0cmluZywgaWRzOiBzdHJpbmdbXSwgb3B0aW9uczogRG1sT3B0aW9ucykge1xyXG4gICAgaWYgKGlkcy5sZW5ndGggPiB0aGlzLl9tYXhSZXF1ZXN0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhjZWVkZWQgbWF4IGxpbWl0IG9mIGNvbmN1cnJlbnQgY2FsbCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICBpZHMubWFwKChpZCkgPT5cclxuICAgICAgICB0aGlzLl9kZXN0cm95U2luZ2xlKHR5cGUsIGlkLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAvLyBCZSBhd2FyZSB0aGF0IGBhbGxPck5vbmVgIG9wdGlvbiBpbiBwYXJhbGxlbCBtb2RlXHJcbiAgICAgICAgICAvLyB3aWxsIG5vdCByZXZlcnQgdGhlIG90aGVyIHN1Y2Nlc3NmdWwgcmVxdWVzdHMuXHJcbiAgICAgICAgICAvLyBJdCBvbmx5IHJhaXNlcyBlcnJvciB3aGVuIG1ldCBhdCBsZWFzdCBvbmUgZmFpbGVkIHJlcXVlc3QuXHJcbiAgICAgICAgICBpZiAob3B0aW9ucy5hbGxPck5vbmUgfHwgIWVyci5lcnJvckNvZGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRvU2F2ZVJlc3VsdChpZCwgZXJyKTtcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBhc3luYyBfZGVzdHJveU1hbnkoXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBpZHM6IHN0cmluZ1tdLFxyXG4gICAgb3B0aW9uczogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHRbXT4ge1xyXG4gICAgaWYgKGlkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKGlkcy5sZW5ndGggPiBNQVhfRE1MX0NPVU5UICYmIG9wdGlvbnMuYWxsb3dSZWN1cnNpdmUpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICAuLi4oYXdhaXQgdGhpcy5fZGVzdHJveU1hbnkoXHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgaWRzLnNsaWNlKDAsIE1BWF9ETUxfQ09VTlQpLFxyXG4gICAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICApKSxcclxuICAgICAgICAuLi4oYXdhaXQgdGhpcy5fZGVzdHJveU1hbnkodHlwZSwgaWRzLnNsaWNlKE1BWF9ETUxfQ09VTlQpLCBvcHRpb25zKSksXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICBsZXQgdXJsID1cclxuICAgICAgW3RoaXMuX2Jhc2VVcmwoKSwgJ2NvbXBvc2l0ZScsICdzb2JqZWN0cz9pZHM9J10uam9pbignLycpICsgaWRzLmpvaW4oJywnKTtcclxuICAgIGlmIChvcHRpb25zLmFsbE9yTm9uZSkge1xyXG4gICAgICB1cmwgKz0gJyZhbGxPck5vbmU9dHJ1ZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMgfHwge30sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN5bm9ueW0gb2YgQ29ubmVjdGlvbiNkZXN0cm95KClcclxuICAgKi9cclxuICBkZWxldGUgPSB0aGlzLmRlc3Ryb3k7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN5bm9ueW0gb2YgQ29ubmVjdGlvbiNkZXN0cm95KClcclxuICAgKi9cclxuICBkZWwgPSB0aGlzLmRlc3Ryb3k7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlIFNPYmplY3QgbWV0YWRhdGFcclxuICAgKi9cclxuICBhc3luYyBkZXNjcmliZSh0eXBlOiBzdHJpbmcpOiBQcm9taXNlPERlc2NyaWJlU09iamVjdFJlc3VsdD4ge1xyXG4gICAgY29uc3QgdXJsID0gW3RoaXMuX2Jhc2VVcmwoKSwgJ3NvYmplY3RzJywgdHlwZSwgJ2Rlc2NyaWJlJ10uam9pbignLycpO1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMucmVxdWVzdCh1cmwpO1xyXG4gICAgcmV0dXJuIGJvZHkgYXMgRGVzY3JpYmVTT2JqZWN0UmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmUgZ2xvYmFsIFNPYmplY3RzXHJcbiAgICovXHJcbiAgYXN5bmMgZGVzY3JpYmVHbG9iYWwoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLl9iYXNlVXJsKCl9L3NvYmplY3RzYDtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLnJlcXVlc3QodXJsKTtcclxuICAgIHJldHVybiBib2R5IGFzIERlc2NyaWJlR2xvYmFsUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IFNPYmplY3QgaW5zdGFuY2VcclxuICAgKi9cclxuICBzb2JqZWN0PE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4+KHR5cGU6IE4pOiBTT2JqZWN0PFMsIE4+O1xyXG4gIHNvYmplY3Q8TiBleHRlbmRzIFNPYmplY3ROYW1lczxTPj4odHlwZTogc3RyaW5nKTogU09iamVjdDxTLCBOPjtcclxuICBzb2JqZWN0PE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4+KHR5cGU6IE4gfCBzdHJpbmcpOiBTT2JqZWN0PFMsIE4+IHtcclxuICAgIGNvbnN0IHNvID1cclxuICAgICAgKHRoaXMuc29iamVjdHNbdHlwZSBhcyBOXSBhcyBTT2JqZWN0PFMsIE4+IHwgdW5kZWZpbmVkKSB8fFxyXG4gICAgICBuZXcgU09iamVjdCh0aGlzLCB0eXBlIGFzIE4pO1xyXG4gICAgdGhpcy5zb2JqZWN0c1t0eXBlIGFzIE5dID0gc287XHJcbiAgICByZXR1cm4gc287XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgaWRlbnRpdHkgaW5mb3JtYXRpb24gb2YgY3VycmVudCB1c2VyXHJcbiAgICovXHJcbiAgYXN5bmMgaWRlbnRpdHkob3B0aW9uczogeyBoZWFkZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0gfSA9IHt9KSB7XHJcbiAgICBsZXQgdXJsID0gdGhpcy51c2VySW5mbyAmJiB0aGlzLnVzZXJJbmZvLnVybDtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB1cmw6IHRoaXMuX2Jhc2VVcmwoKSxcclxuICAgICAgICBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsXHJcbiAgICAgIH0pO1xyXG4gICAgICB1cmwgPSByZXMuaWRlbnRpdHkgYXMgc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgdXJsICs9ICc/Zm9ybWF0PWpzb24nO1xyXG4gICAgaWYgKHRoaXMuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgdXJsICs9IGAmb2F1dGhfdG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5hY2Nlc3NUb2tlbil9YDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucmVxdWVzdCh7IG1ldGhvZDogJ0dFVCcsIHVybCB9KTtcclxuICAgIHRoaXMudXNlckluZm8gPSB7XHJcbiAgICAgIGlkOiByZXMudXNlcl9pZCxcclxuICAgICAgb3JnYW5pemF0aW9uSWQ6IHJlcy5vcmdhbml6YXRpb25faWQsXHJcbiAgICAgIHVybDogcmVzLmlkLFxyXG4gICAgfTtcclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0IHJlY2VudGx5IHZpZXdlZCByZWNvcmRzXHJcbiAgICovXHJcbiAgYXN5bmMgcmVjZW50KHR5cGU/OiBzdHJpbmcgfCBudW1iZXIsIGxpbWl0PzogbnVtYmVyKSB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICBsaW1pdCA9IHR5cGU7XHJcbiAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBsZXQgdXJsO1xyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgdXJsID0gW3RoaXMuX2Jhc2VVcmwoKSwgJ3NvYmplY3RzJywgdHlwZV0uam9pbignLycpO1xyXG4gICAgICBjb25zdCB7IHJlY2VudEl0ZW1zIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3QodXJsKTtcclxuICAgICAgcmV0dXJuIGxpbWl0ID8gcmVjZW50SXRlbXMuc2xpY2UoMCwgbGltaXQpIDogcmVjZW50SXRlbXM7XHJcbiAgICB9XHJcbiAgICB1cmwgPSBgJHt0aGlzLl9iYXNlVXJsKCl9L3JlY2VudGA7XHJcbiAgICBpZiAobGltaXQpIHtcclxuICAgICAgdXJsICs9IGA/bGltaXQ9JHtsaW1pdH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgdXBkYXRlZCByZWNvcmRzXHJcbiAgICovXHJcbiAgYXN5bmMgdXBkYXRlZChcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHN0YXJ0OiBzdHJpbmcgfCBEYXRlLFxyXG4gICAgZW5kOiBzdHJpbmcgfCBEYXRlLFxyXG4gICk6IFByb21pc2U8VXBkYXRlZFJlc3VsdD4ge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuICAgIGxldCB1cmwgPSBbdGhpcy5fYmFzZVVybCgpLCAnc29iamVjdHMnLCB0eXBlLCAndXBkYXRlZCddLmpvaW4oJy8nKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHN0YXJ0ID0gbmV3IERhdGUoc3RhcnQpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQgPSBmb3JtYXREYXRlKHN0YXJ0KTtcclxuICAgIHVybCArPSBgP3N0YXJ0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0YXJ0KX1gO1xyXG4gICAgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGVuZCA9IG5ldyBEYXRlKGVuZCk7XHJcbiAgICB9XHJcbiAgICBlbmQgPSBmb3JtYXREYXRlKGVuZCk7XHJcbiAgICB1cmwgKz0gYCZlbmQ9JHtlbmNvZGVVUklDb21wb25lbnQoZW5kKX1gO1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMucmVxdWVzdCh1cmwpO1xyXG4gICAgcmV0dXJuIGJvZHkgYXMgVXBkYXRlZFJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIGRlbGV0ZWQgcmVjb3Jkc1xyXG4gICAqL1xyXG4gIGFzeW5jIGRlbGV0ZWQoXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBzdGFydDogc3RyaW5nIHwgRGF0ZSxcclxuICAgIGVuZDogc3RyaW5nIHwgRGF0ZSxcclxuICApOiBQcm9taXNlPERlbGV0ZWRSZXN1bHQ+IHtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbiAgICBsZXQgdXJsID0gW3RoaXMuX2Jhc2VVcmwoKSwgJ3NvYmplY3RzJywgdHlwZSwgJ2RlbGV0ZWQnXS5qb2luKCcvJyk7XHJcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0KTtcclxuICAgIH1cclxuICAgIHN0YXJ0ID0gZm9ybWF0RGF0ZShzdGFydCk7XHJcbiAgICB1cmwgKz0gYD9zdGFydD0ke2VuY29kZVVSSUNvbXBvbmVudChzdGFydCl9YDtcclxuXHJcbiAgICBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgZW5kID0gbmV3IERhdGUoZW5kKTtcclxuICAgIH1cclxuICAgIGVuZCA9IGZvcm1hdERhdGUoZW5kKTtcclxuICAgIHVybCArPSBgJmVuZD0ke2VuY29kZVVSSUNvbXBvbmVudChlbmQpfWA7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHVybCk7XHJcbiAgICByZXR1cm4gYm9keSBhcyBEZWxldGVkUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRhYnNcclxuICAgKi9cclxuICBhc3luYyB0YWJzKCk6IFByb21pc2U8RGVzY3JpYmVUYWJbXT4ge1xyXG4gICAgY29uc3QgdXJsID0gW3RoaXMuX2Jhc2VVcmwoKSwgJ3RhYnMnXS5qb2luKCcvJyk7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHVybCk7XHJcbiAgICByZXR1cm4gYm9keSBhcyBEZXNjcmliZVRhYltdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBjdXJyZW4gc3lzdGVtIGxpbWl0IGluIHRoZSBvcmdhbml6YXRpb25cclxuICAgKi9cclxuICBhc3luYyBsaW1pdHMoKTogUHJvbWlzZTxPcmdhbml6YXRpb25MaW1pdHNJbmZvPiB7XHJcbiAgICBjb25zdCB1cmwgPSBbdGhpcy5fYmFzZVVybCgpLCAnbGltaXRzJ10uam9pbignLycpO1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMucmVxdWVzdCh1cmwpO1xyXG4gICAgcmV0dXJuIGJvZHkgYXMgT3JnYW5pemF0aW9uTGltaXRzSW5mbztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSB0aGVtZSBpbmZvXHJcbiAgICovXHJcbiAgYXN5bmMgdGhlbWUoKTogUHJvbWlzZTxEZXNjcmliZVRoZW1lPiB7XHJcbiAgICBjb25zdCB1cmwgPSBbdGhpcy5fYmFzZVVybCgpLCAndGhlbWUnXS5qb2luKCcvJyk7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHVybCk7XHJcbiAgICByZXR1cm4gYm9keSBhcyBEZXNjcmliZVRoZW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbGwgcmVnaXN0ZXJlZCBnbG9iYWwgcXVpY2sgYWN0aW9uc1xyXG4gICAqL1xyXG4gIGFzeW5jIHF1aWNrQWN0aW9ucygpOiBQcm9taXNlPERlc2NyaWJlUXVpY2tBY3Rpb25SZXN1bHRbXT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMucmVxdWVzdCgnL3F1aWNrQWN0aW9ucycpO1xyXG4gICAgcmV0dXJuIGJvZHkgYXMgRGVzY3JpYmVRdWlja0FjdGlvblJlc3VsdFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHJlZmVyZW5jZSBmb3Igc3BlY2lmaWVkIGdsb2JhbCBxdWljayBhY2l0b25cclxuICAgKi9cclxuICBxdWlja0FjdGlvbihhY3Rpb25OYW1lOiBzdHJpbmcpOiBRdWlja0FjdGlvbjxTPiB7XHJcbiAgICByZXR1cm4gbmV3IFF1aWNrQWN0aW9uKHRoaXMsIGAvcXVpY2tBY3Rpb25zLyR7YWN0aW9uTmFtZX1gKTtcclxuICB9XHJcbn1cclxuIl19