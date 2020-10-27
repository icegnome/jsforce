"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = exports.Cli = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _http = _interopRequireDefault(require("http"));

var _url = _interopRequireDefault(require("url"));

var _crypto = _interopRequireDefault(require("crypto"));

var _open = _interopRequireDefault(require("open"));

var _commander = require("commander");

var _inquirer = _interopRequireDefault(require("inquirer"));

var _request = _interopRequireDefault(require("request"));

var _base64url = _interopRequireDefault(require("base64url"));

var _repl = _interopRequireDefault(require("./repl"));

var _ = _interopRequireWildcard(require(".."));

var _VERSION = _interopRequireDefault(require("../VERSION"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context19; (0, _forEach["default"])(_context19 = ownKeys(Object(source), true)).call(_context19, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context20; (0, _forEach["default"])(_context20 = ownKeys(Object(source))).call(_context20, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var registry = _["default"].registry;

/**
 *
 */
var Cli = /*#__PURE__*/function () {
  function Cli() {
    (0, _classCallCheck2["default"])(this, Cli);
    (0, _defineProperty3["default"])(this, "_repl", new _repl["default"](this));
    (0, _defineProperty3["default"])(this, "_conn", new _.Connection());
    (0, _defineProperty3["default"])(this, "_connName", undefined);
    (0, _defineProperty3["default"])(this, "_outputEnabled", true);
    (0, _defineProperty3["default"])(this, "_defaultLoginUrl", undefined);
  }

  (0, _createClass2["default"])(Cli, [{
    key: "readCommand",

    /**
     *
     */
    value: function readCommand() {
      return new _commander.Command().option('-u, --username [username]', 'Salesforce username').option('-p, --password [password]', 'Salesforce password (and security token, if available)').option('-c, --connection [connection]', 'Connection name stored in connection registry').option('-l, --loginUrl [loginUrl]', 'Salesforce login url').option('--sandbox', 'Login to Salesforce sandbox').option('-e, --evalScript [evalScript]', 'Script to evaluate').version(_VERSION["default"]).parse(process.argv);
    }
  }, {
    key: "start",
    value: function () {
      var _start = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var program;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                program = this.readCommand();
                this._outputEnabled = !program.evalScript;
                _context.prev = 2;
                _context.next = 5;
                return this.connect(program);

              case 5:
                if (program.evalScript) {
                  this._repl.start({
                    interactive: false,
                    evalScript: program.evalScript
                  });
                } else {
                  this._repl.start();
                }

                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);
                process.exit();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "getCurrentConnection",
    value: function getCurrentConnection() {
      return this._conn;
    }
  }, {
    key: "print",
    value: function print() {
      if (this._outputEnabled) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }, {
    key: "saveCurrentConnection",
    value: function saveCurrentConnection() {
      if (this._connName) {
        var conn = this._conn;
        var connName = this._connName;
        var connConfig = {
          oauth2: conn.oauth2 ? {
            clientId: conn.oauth2.clientId || undefined,
            clientSecret: conn.oauth2.clientSecret || undefined,
            redirectUri: conn.oauth2.redirectUri || undefined,
            loginUrl: conn.oauth2.loginUrl || undefined
          } : undefined,
          accessToken: conn.accessToken || undefined,
          instanceUrl: conn.instanceUrl || undefined,
          refreshToken: conn.refreshToken || undefined
        };
        registry.saveConnectionConfig(connName, connConfig);
      }
    }
  }, {
    key: "setLoginServer",
    value: function setLoginServer(loginServer) {
      if (!loginServer) {
        return;
      }

      if (loginServer === 'production') {
        this._defaultLoginUrl = 'https://login.salesforce.com';
      } else if (loginServer === 'sandbox') {
        this._defaultLoginUrl = 'https://test.salesforce.com';
      } else if ((0, _indexOf["default"])(loginServer).call(loginServer, 'https://') !== 0) {
        this._defaultLoginUrl = 'https://' + loginServer;
      } else {
        this._defaultLoginUrl = loginServer;
      }

      this.print("Using \"".concat(this._defaultLoginUrl, "\" as default login URL."));
    }
    /**
     *
     */

  }, {
    key: "connect",
    value: function () {
      var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(options) {
        var _this = this;

        var loginServer, connConfig, username, password, identity;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                loginServer = options.loginUrl ? options.loginUrl : options.sandbox ? 'sandbox' : null;
                this.setLoginServer(loginServer);
                this._connName = options.connection;
                _context2.next = 5;
                return registry.getConnectionConfig(options.connection);

              case 5:
                connConfig = _context2.sent;
                username = options.username;

                if (!connConfig) {
                  connConfig = {};

                  if (this._defaultLoginUrl) {
                    connConfig.loginUrl = this._defaultLoginUrl;
                  }

                  username = username || options.connection;
                }

                this._conn = new _.Connection(connConfig);
                password = options.password;

                if (!username) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 13;
                return this.startPasswordAuth(username, password);

              case 13:
                this.saveCurrentConnection();
                _context2.next = 34;
                break;

              case 16:
                if (!(this._connName && this._conn.accessToken)) {
                  _context2.next = 34;
                  break;
                }

                this._conn.on('refresh', function () {
                  _this.print('Refreshing access token ... ');

                  _this.saveCurrentConnection();
                });

                _context2.prev = 18;
                _context2.next = 21;
                return this._conn.identity();

              case 21:
                identity = _context2.sent;
                this.print("Logged in as : ".concat(identity.username));
                _context2.next = 34;
                break;

              case 25:
                _context2.prev = 25;
                _context2.t0 = _context2["catch"](18);
                this.print(_context2.t0.message);

                if (!this._conn.oauth2) {
                  _context2.next = 32;
                  break;
                }

                throw new Error('Please re-authorize connection.');

              case 32:
                _context2.next = 34;
                return this.startPasswordAuth(this._connName);

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[18, 25]]);
      }));

      function connect(_x) {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
    /**
     *
     */

  }, {
    key: "startPasswordAuth",
    value: function () {
      var _startPasswordAuth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(username, password) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.loginByPassword(username, password, 2);

              case 3:
                _context3.next = 12;
                break;

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);

                if (!(_context3.t0.message === 'canceled')) {
                  _context3.next = 11;
                  break;
                }

                console.error('Password authentication canceled: Not logged in');
                _context3.next = 12;
                break;

              case 11:
                throw _context3.t0;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 5]]);
      }));

      function startPasswordAuth(_x2, _x3) {
        return _startPasswordAuth.apply(this, arguments);
      }

      return startPasswordAuth;
    }()
    /**
     *
     */

  }, {
    key: "loginByPassword",
    value: function () {
      var _loginByPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(username, password, retryCount) {
        var pass, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(password === '')) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('canceled');

              case 2:
                if (!(password == null)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 5;
                return this.promptPassword('Password: ');

              case 5:
                pass = _context4.sent;
                return _context4.abrupt("return", this.loginByPassword(username, pass, retryCount));

              case 7:
                _context4.prev = 7;
                _context4.next = 10;
                return this._conn.login(username, password);

              case 10:
                result = _context4.sent;
                this.print("Logged in as : ".concat(username));
                return _context4.abrupt("return", result);

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](7);
                console.error(_context4.t0.message);

                if (!(retryCount > 0)) {
                  _context4.next = 22;
                  break;
                }

                return _context4.abrupt("return", this.loginByPassword(username, undefined, retryCount - 1));

              case 22:
                throw new Error('canceled');

              case 23:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[7, 15]]);
      }));

      function loginByPassword(_x4, _x5, _x6) {
        return _loginByPassword.apply(this, arguments);
      }

      return loginByPassword;
    }()
    /**
     *
     */

  }, {
    key: "disconnect",
    value: function disconnect(connName) {
      var name = connName || this._connName;

      if (name && registry.getConnectionConfig(name)) {
        registry.removeConnectionConfig(name);
        this.print("Disconnect connection '".concat(name, "'"));
      }

      this._connName = undefined;
      this._conn = new _.Connection();
    }
    /**
     *
     */

  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(clientName) {
        var name, oauth2Config, oauth2, verifier, challenge, state, authzUrl, params, identity;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = clientName || 'default';
                _context5.next = 3;
                return registry.getClientConfig(name);

              case 3:
                oauth2Config = _context5.sent;

                if (!(!oauth2Config || !oauth2Config.clientId)) {
                  _context5.next = 9;
                  break;
                }

                if (!(name === 'default' || name === 'sandbox')) {
                  _context5.next = 8;
                  break;
                }

                this.print('No client information registered. Downloading JSforce default client information...');
                return _context5.abrupt("return", this.downloadDefaultClientInfo(name));

              case 8:
                throw new Error("No OAuth2 client information registered : '".concat(name, "'. Please register client info first."));

              case 9:
                oauth2 = new _.OAuth2(oauth2Config);
                verifier = _base64url["default"].encode(_crypto["default"].randomBytes(32));
                challenge = _base64url["default"].encode(_crypto["default"].createHash('sha256').update(verifier).digest());
                state = _base64url["default"].encode(_crypto["default"].randomBytes(32));
                authzUrl = oauth2.getAuthorizationUrl({
                  code_challenge: challenge,
                  state: state
                });
                this.print('Opening authorization page in browser...');
                this.print("URL: ".concat(authzUrl));
                this.openUrl(authzUrl);
                _context5.next = 19;
                return this.waitCallback(oauth2Config.redirectUri, state);

              case 19:
                params = _context5.sent;

                if (params.code) {
                  _context5.next = 22;
                  break;
                }

                throw new Error('No authorization code returned.');

              case 22:
                if (!(params.state !== state)) {
                  _context5.next = 24;
                  break;
                }

                throw new Error('Invalid state parameter returned.');

              case 24:
                this._conn = new _.Connection({
                  oauth2: oauth2
                });
                this.print('Received authorization code. Please close the opened browser window.');
                _context5.next = 28;
                return this._conn.authorize(params.code, {
                  code_verifier: verifier
                });

              case 28:
                this.print('Authorized. Fetching user info...');
                _context5.next = 31;
                return this._conn.identity();

              case 31:
                identity = _context5.sent;
                this.print("Logged in as : ".concat(identity.username));
                this._connName = identity.username;
                this.saveCurrentConnection();

              case 35:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function authorize(_x7) {
        return _authorize.apply(this, arguments);
      }

      return authorize;
    }()
    /**
     *
     */

  }, {
    key: "downloadDefaultClientInfo",
    value: function () {
      var _downloadDefaultClientInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(clientName) {
        var configUrl, res, clientConfig;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                configUrl = 'https://jsforce.github.io/client-config/default.json';
                _context6.next = 3;
                return new _promise["default"](function (resolve, reject) {
                  (0, _request["default"])(configUrl, function (err, res) {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(res);
                    }
                  });
                });

              case 3:
                res = _context6.sent;
                clientConfig = JSON.parse(res.body);

                if (clientName === 'sandbox') {
                  clientConfig.loginUrl = 'https://test.salesforce.com';
                }

                _context6.next = 8;
                return registry.registerClientConfig(clientName, clientConfig);

              case 8:
                this.print('Client information downloaded successfully.');
                return _context6.abrupt("return", this.authorize(clientName));

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function downloadDefaultClientInfo(_x8) {
        return _downloadDefaultClientInfo.apply(this, arguments);
      }

      return downloadDefaultClientInfo;
    }()
    /**
     *
     */

  }, {
    key: "waitCallback",
    value: function () {
      var _waitCallback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(serverUrl, state) {
        var code;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(serverUrl && (0, _indexOf["default"])(serverUrl).call(serverUrl, 'http://localhost:') === 0)) {
                  _context7.next = 4;
                  break;
                }

                return _context7.abrupt("return", new _promise["default"](function (resolve, reject) {
                  var server = _http["default"].createServer(function (req, res) {
                    if (!req.url) {
                      return;
                    }

                    var qparams = _url["default"].parse(req.url, true).query;

                    res.writeHead(200, {
                      'Content-Type': 'text/html'
                    });
                    res.write('<html><script>location.href="about:blank";</script></html>');
                    res.end();

                    if (qparams.error) {
                      reject(new Error(qparams.error));
                    } else {
                      resolve(qparams);
                    }

                    server.close();
                    req.connection.end();
                    req.connection.destroy();
                  });

                  var port = Number(_url["default"].parse(serverUrl).port);
                  server.listen(port, 'localhost');
                }));

              case 4:
                _context7.next = 6;
                return this.promptMessage('Copy & paste authz code passed in redirected URL: ');

              case 6:
                code = _context7.sent;
                return _context7.abrupt("return", {
                  code: decodeURIComponent(code),
                  state: state
                });

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function waitCallback(_x9, _x10) {
        return _waitCallback.apply(this, arguments);
      }

      return waitCallback;
    }()
    /**
     *
     */

  }, {
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(clientName, clientConfig) {
        var _context8,
            _this2 = this;

        var name, prompts, registered, msg, ok;
        return _regenerator["default"].wrap(function _callee9$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                name = clientName || 'default';
                prompts = {
                  clientId: 'Input client ID : ',
                  clientSecret: 'Input client secret (optional) : ',
                  redirectUri: 'Input redirect URI : ',
                  loginUrl: 'Input login URL (default is https://login.salesforce.com) : '
                };
                _context10.next = 4;
                return registry.getClientConfig(name);

              case 4:
                registered = _context10.sent;

                if (!registered) {
                  _context10.next = 12;
                  break;
                }

                msg = "Client '".concat(name, "' is already registered. Are you sure you want to override ? [yN] : ");
                _context10.next = 9;
                return this.promptConfirm(msg);

              case 9:
                ok = _context10.sent;

                if (ok) {
                  _context10.next = 12;
                  break;
                }

                throw new Error('Registration canceled.');

              case 12:
                _context10.next = 14;
                return (0, _reduce["default"])(_context8 = (0, _keys["default"])(prompts)).call(_context8, /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(promise, name) {
                    var cconfig, promptName, message, value;
                    return _regenerator["default"].wrap(function _callee8$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return promise;

                          case 2:
                            cconfig = _context9.sent;
                            promptName = name;
                            message = prompts[promptName];

                            if (cconfig[promptName]) {
                              _context9.next = 11;
                              break;
                            }

                            _context9.next = 8;
                            return _this2.promptMessage(message);

                          case 8:
                            value = _context9.sent;

                            if (!value) {
                              _context9.next = 11;
                              break;
                            }

                            return _context9.abrupt("return", _objectSpread(_objectSpread({}, cconfig), {}, (0, _defineProperty3["default"])({}, promptName, value)));

                          case 11:
                            return _context9.abrupt("return", cconfig);

                          case 12:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x13, _x14) {
                    return _ref.apply(this, arguments);
                  };
                }(), _promise["default"].resolve(clientConfig));

              case 14:
                clientConfig = _context10.sent;
                _context10.next = 17;
                return registry.registerClientConfig(name, clientConfig);

              case 17:
                this.print('Client registered successfully.');

              case 18:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee9, this);
      }));

      function register(_x11, _x12) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
    /**
     *
     */

  }, {
    key: "listConnections",
    value: function () {
      var _listConnections = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var names, i, name;
        return _regenerator["default"].wrap(function _callee10$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return registry.getConnectionNames();

              case 2:
                names = _context11.sent;

                for (i = 0; i < names.length; i++) {
                  name = names[i];
                  this.print((name === this._connName ? '* ' : '  ') + name);
                }

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee10, this);
      }));

      function listConnections() {
        return _listConnections.apply(this, arguments);
      }

      return listConnections;
    }()
    /**
     *
     */

  }, {
    key: "getConnectionNames",
    value: function () {
      var _getConnectionNames = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        return _regenerator["default"].wrap(function _callee11$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", registry.getConnectionNames());

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee11);
      }));

      function getConnectionNames() {
        return _getConnectionNames.apply(this, arguments);
      }

      return getConnectionNames;
    }()
    /**
     *
     */

  }, {
    key: "getClientNames",
    value: function () {
      var _getClientNames = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
        return _regenerator["default"].wrap(function _callee12$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", registry.getClientNames());

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee12);
      }));

      function getClientNames() {
        return _getClientNames.apply(this, arguments);
      }

      return getClientNames;
    }()
    /**
     *
     */

  }, {
    key: "prompt",
    value: function () {
      var _prompt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(type, message) {
        var answer;
        return _regenerator["default"].wrap(function _callee13$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this._repl.pause();

                _context14.next = 3;
                return _inquirer["default"].prompt([{
                  type: type,
                  name: 'value',
                  message: message
                }]);

              case 3:
                answer = _context14.sent;

                this._repl.resume();

                return _context14.abrupt("return", answer.value);

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee13, this);
      }));

      function prompt(_x15, _x16) {
        return _prompt.apply(this, arguments);
      }

      return prompt;
    }()
    /**
     *
     */

  }, {
    key: "promptMessage",
    value: function () {
      var _promptMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(message) {
        return _regenerator["default"].wrap(function _callee14$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.prompt('input', message));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee14, this);
      }));

      function promptMessage(_x17) {
        return _promptMessage.apply(this, arguments);
      }

      return promptMessage;
    }()
  }, {
    key: "promptPassword",
    value: function () {
      var _promptPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(message) {
        return _regenerator["default"].wrap(function _callee15$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.prompt('password', message));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee15, this);
      }));

      function promptPassword(_x18) {
        return _promptPassword.apply(this, arguments);
      }

      return promptPassword;
    }()
    /**
     *
     */

  }, {
    key: "promptConfirm",
    value: function () {
      var _promptConfirm = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(message) {
        return _regenerator["default"].wrap(function _callee16$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", this.prompt('confirm', message));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee16, this);
      }));

      function promptConfirm(_x19) {
        return _promptConfirm.apply(this, arguments);
      }

      return promptConfirm;
    }()
    /**
     *
     */

  }, {
    key: "openUrl",
    value: function openUrl(url) {
      (0, _open["default"])(url);
    }
    /**
     *
     */

  }, {
    key: "openUrlUsingSession",
    value: function openUrlUsingSession(url) {
      var _context18;

      var frontdoorUrl = (0, _concat["default"])(_context18 = "".concat(this._conn.instanceUrl, "/secur/frontdoor.jsp?sid=")).call(_context18, this._conn.accessToken);

      if (url) {
        frontdoorUrl += '&retURL=' + encodeURIComponent(url);
      }

      this.openUrl(frontdoorUrl);
    }
  }]);
  return Cli;
}();
/* ------------------------------------------------------------------------- */


exports.Cli = Cli;
var cli = new Cli();
var _default = cli;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvY2xpLnRzIl0sIm5hbWVzIjpbInJlZ2lzdHJ5IiwianNmb3JjZSIsIkNsaSIsIlJlcGwiLCJDb25uZWN0aW9uIiwidW5kZWZpbmVkIiwiQ29tbWFuZCIsIm9wdGlvbiIsInZlcnNpb24iLCJwYXJzZSIsInByb2Nlc3MiLCJhcmd2IiwicHJvZ3JhbSIsInJlYWRDb21tYW5kIiwiX291dHB1dEVuYWJsZWQiLCJldmFsU2NyaXB0IiwiY29ubmVjdCIsIl9yZXBsIiwic3RhcnQiLCJpbnRlcmFjdGl2ZSIsImNvbnNvbGUiLCJlcnJvciIsImV4aXQiLCJfY29ubiIsImxvZyIsIl9jb25uTmFtZSIsImNvbm4iLCJjb25uTmFtZSIsImNvbm5Db25maWciLCJvYXV0aDIiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsInJlZGlyZWN0VXJpIiwibG9naW5VcmwiLCJhY2Nlc3NUb2tlbiIsImluc3RhbmNlVXJsIiwicmVmcmVzaFRva2VuIiwic2F2ZUNvbm5lY3Rpb25Db25maWciLCJsb2dpblNlcnZlciIsIl9kZWZhdWx0TG9naW5VcmwiLCJwcmludCIsIm9wdGlvbnMiLCJzYW5kYm94Iiwic2V0TG9naW5TZXJ2ZXIiLCJjb25uZWN0aW9uIiwiZ2V0Q29ubmVjdGlvbkNvbmZpZyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdGFydFBhc3N3b3JkQXV0aCIsInNhdmVDdXJyZW50Q29ubmVjdGlvbiIsIm9uIiwiaWRlbnRpdHkiLCJtZXNzYWdlIiwiRXJyb3IiLCJsb2dpbkJ5UGFzc3dvcmQiLCJyZXRyeUNvdW50IiwicHJvbXB0UGFzc3dvcmQiLCJwYXNzIiwibG9naW4iLCJyZXN1bHQiLCJuYW1lIiwicmVtb3ZlQ29ubmVjdGlvbkNvbmZpZyIsImNsaWVudE5hbWUiLCJnZXRDbGllbnRDb25maWciLCJvYXV0aDJDb25maWciLCJkb3dubG9hZERlZmF1bHRDbGllbnRJbmZvIiwiT0F1dGgyIiwidmVyaWZpZXIiLCJiYXNlNjR1cmwiLCJlbmNvZGUiLCJjcnlwdG8iLCJyYW5kb21CeXRlcyIsImNoYWxsZW5nZSIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJzdGF0ZSIsImF1dGh6VXJsIiwiZ2V0QXV0aG9yaXphdGlvblVybCIsImNvZGVfY2hhbGxlbmdlIiwib3BlblVybCIsIndhaXRDYWxsYmFjayIsInBhcmFtcyIsImNvZGUiLCJhdXRob3JpemUiLCJjb2RlX3ZlcmlmaWVyIiwiY29uZmlnVXJsIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsInJlcyIsImNsaWVudENvbmZpZyIsIkpTT04iLCJib2R5IiwicmVnaXN0ZXJDbGllbnRDb25maWciLCJzZXJ2ZXJVcmwiLCJzZXJ2ZXIiLCJodHRwIiwiY3JlYXRlU2VydmVyIiwicmVxIiwidXJsIiwicXBhcmFtcyIsInF1ZXJ5Iiwid3JpdGVIZWFkIiwid3JpdGUiLCJlbmQiLCJjbG9zZSIsImRlc3Ryb3kiLCJwb3J0IiwiTnVtYmVyIiwibGlzdGVuIiwicHJvbXB0TWVzc2FnZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInByb21wdHMiLCJyZWdpc3RlcmVkIiwibXNnIiwicHJvbXB0Q29uZmlybSIsIm9rIiwicHJvbWlzZSIsImNjb25maWciLCJwcm9tcHROYW1lIiwidmFsdWUiLCJnZXRDb25uZWN0aW9uTmFtZXMiLCJuYW1lcyIsImkiLCJsZW5ndGgiLCJnZXRDbGllbnROYW1lcyIsInR5cGUiLCJwYXVzZSIsImlucXVpcmVyIiwicHJvbXB0IiwiYW5zd2VyIiwicmVzdW1lIiwiZnJvbnRkb29yVXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiY2xpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFJQSxJQUFNQSxRQUFRLEdBQUdDLGFBQVFELFFBQXpCOztBQVdBO0FBQ0E7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QUEsSUFBSSxFQUFKQSxJQURGO0FBRUVuRSxrQkFBQUEsSUFBSSxFQUFFLE9BRlI7QUFHRVIsa0JBQUFBLE9BQU8sRUFBUEE7QUFIRixpQkFEc0QsQ0FBaEIsQzs7O0FBQWxDK0UsZ0JBQUFBLE07O0FBT04scUJBQUtsSCxLQUFMLENBQVdtSCxNQUFYOzttREFDT0QsTUFBTSxDQUFDVixLOzs7Ozs7Ozs7Ozs7Ozs7O0FBR2hCO0FBQ0Y7QUFDQTs7Ozs7NEhBQ3NCckUsTzs7Ozs7bURBQ1gsS0FBSzhFLE1BQUwsQ0FBWSxPQUFaLEVBQXFCOUUsT0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2SEFHWUEsTzs7Ozs7bURBQ1osS0FBSzhFLE1BQUwsQ0FBWSxVQUFaLEVBQXdCOUUsT0FBeEIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQUdUO0FBQ0Y7QUFDQTs7Ozs7NEhBQ3NCQSxPOzs7OzttREFDWCxLQUFLOEUsTUFBTCxDQUFZLFNBQVosRUFBdUI5RSxPQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7QUFDRjtBQUNBOzs7OzRCQUNVZ0QsRyxFQUFhO0FBQ25CLDRCQUFRQSxHQUFSO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7d0NBQ3NCQSxHLEVBQWM7QUFBQTs7QUFDaEMsVUFBSWlDLFlBQVksa0RBQU0sS0FBSzlHLEtBQUwsQ0FBV1ksV0FBakIsaURBQXdELEtBQUtaLEtBQUwsQ0FBV1csV0FBbkUsQ0FBaEI7O0FBQ0EsVUFBSWtFLEdBQUosRUFBUztBQUNQaUMsUUFBQUEsWUFBWSxJQUFJLGFBQWFDLGtCQUFrQixDQUFDbEMsR0FBRCxDQUEvQztBQUNEOztBQUNELFdBQUtwQixPQUFMLENBQWFxRCxZQUFiO0FBQ0Q7Ozs7QUFHSDs7OztBQUVBLElBQU1FLEdBQUcsR0FBRyxJQUFJckksR0FBSixFQUFaO2VBRWVxSSxHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlIENvbW1hbmQgbGluZSBpbnRlcmZhY2UgZm9yIEpTZm9yY2VcclxuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XHJcbiAqL1xyXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcclxuaW1wb3J0IHVybCBmcm9tICd1cmwnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCBvcGVuVXJsIGZyb20gJ29wZW4nO1xyXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnY29tbWFuZGVyJztcclxuaW1wb3J0IGlucXVpcmVyIGZyb20gJ2lucXVpcmVyJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XHJcbmltcG9ydCBiYXNlNjR1cmwgZnJvbSAnYmFzZTY0dXJsJztcclxuaW1wb3J0IFJlcGwgZnJvbSAnLi9yZXBsJztcclxuaW1wb3J0IGpzZm9yY2UsIHsgQ29ubmVjdGlvbiwgT0F1dGgyIH0gZnJvbSAnLi4nO1xyXG5pbXBvcnQgdmVyc2lvbiBmcm9tICcuLi9WRVJTSU9OJztcclxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZyB9IGZyb20gJy4uL3JlZ2lzdHJ5L3R5cGVzJztcclxuXHJcbmNvbnN0IHJlZ2lzdHJ5ID0ganNmb3JjZS5yZWdpc3RyeTtcclxuXHJcbmludGVyZmFjZSBDbGlDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29ubmVjdGlvbj86IHN0cmluZztcclxuICB1c2VybmFtZT86IHN0cmluZztcclxuICBwYXNzd29yZD86IHN0cmluZztcclxuICBsb2dpblVybD86IHN0cmluZztcclxuICBzYW5kYm94PzogYm9vbGVhbjtcclxuICBldmFsU2NyaXB0Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGkge1xyXG4gIF9yZXBsOiBSZXBsID0gbmV3IFJlcGwodGhpcyk7XHJcbiAgX2Nvbm46IENvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigpO1xyXG4gIF9jb25uTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIF9vdXRwdXRFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBfZGVmYXVsdExvZ2luVXJsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgcmVhZENvbW1hbmQoKTogQ2xpQ29tbWFuZCB7XHJcbiAgICByZXR1cm4gbmV3IENvbW1hbmQoKVxyXG4gICAgICAub3B0aW9uKCctdSwgLS11c2VybmFtZSBbdXNlcm5hbWVdJywgJ1NhbGVzZm9yY2UgdXNlcm5hbWUnKVxyXG4gICAgICAub3B0aW9uKFxyXG4gICAgICAgICctcCwgLS1wYXNzd29yZCBbcGFzc3dvcmRdJyxcclxuICAgICAgICAnU2FsZXNmb3JjZSBwYXNzd29yZCAoYW5kIHNlY3VyaXR5IHRva2VuLCBpZiBhdmFpbGFibGUpJyxcclxuICAgICAgKVxyXG4gICAgICAub3B0aW9uKFxyXG4gICAgICAgICctYywgLS1jb25uZWN0aW9uIFtjb25uZWN0aW9uXScsXHJcbiAgICAgICAgJ0Nvbm5lY3Rpb24gbmFtZSBzdG9yZWQgaW4gY29ubmVjdGlvbiByZWdpc3RyeScsXHJcbiAgICAgIClcclxuICAgICAgLm9wdGlvbignLWwsIC0tbG9naW5VcmwgW2xvZ2luVXJsXScsICdTYWxlc2ZvcmNlIGxvZ2luIHVybCcpXHJcbiAgICAgIC5vcHRpb24oJy0tc2FuZGJveCcsICdMb2dpbiB0byBTYWxlc2ZvcmNlIHNhbmRib3gnKVxyXG4gICAgICAub3B0aW9uKCctZSwgLS1ldmFsU2NyaXB0IFtldmFsU2NyaXB0XScsICdTY3JpcHQgdG8gZXZhbHVhdGUnKVxyXG4gICAgICAudmVyc2lvbih2ZXJzaW9uKVxyXG4gICAgICAucGFyc2UocHJvY2Vzcy5hcmd2KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMucmVhZENvbW1hbmQoKTtcclxuICAgIHRoaXMuX291dHB1dEVuYWJsZWQgPSAhcHJvZ3JhbS5ldmFsU2NyaXB0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5jb25uZWN0KHByb2dyYW0pO1xyXG4gICAgICBpZiAocHJvZ3JhbS5ldmFsU2NyaXB0KSB7XHJcbiAgICAgICAgdGhpcy5fcmVwbC5zdGFydCh7XHJcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICBldmFsU2NyaXB0OiBwcm9ncmFtLmV2YWxTY3JpcHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fcmVwbC5zdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBwcm9jZXNzLmV4aXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRDb25uZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm47XHJcbiAgfVxyXG5cclxuICBwcmludCguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgaWYgKHRoaXMuX291dHB1dEVuYWJsZWQpIHtcclxuICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlQ3VycmVudENvbm5lY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5fY29ubk5hbWUpIHtcclxuICAgICAgY29uc3QgY29ubiA9IHRoaXMuX2Nvbm47XHJcbiAgICAgIGNvbnN0IGNvbm5OYW1lID0gdGhpcy5fY29ubk5hbWU7XHJcbiAgICAgIGNvbnN0IGNvbm5Db25maWcgPSB7XHJcbiAgICAgICAgb2F1dGgyOiBjb25uLm9hdXRoMlxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgY2xpZW50SWQ6IGNvbm4ub2F1dGgyLmNsaWVudElkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICBjbGllbnRTZWNyZXQ6IGNvbm4ub2F1dGgyLmNsaWVudFNlY3JldCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgcmVkaXJlY3RVcmk6IGNvbm4ub2F1dGgyLnJlZGlyZWN0VXJpIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICBsb2dpblVybDogY29ubi5vYXV0aDIubG9naW5VcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgICAgICBhY2Nlc3NUb2tlbjogY29ubi5hY2Nlc3NUb2tlbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgaW5zdGFuY2VVcmw6IGNvbm4uaW5zdGFuY2VVcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogY29ubi5yZWZyZXNoVG9rZW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICB9O1xyXG4gICAgICByZWdpc3RyeS5zYXZlQ29ubmVjdGlvbkNvbmZpZyhjb25uTmFtZSwgY29ubkNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRMb2dpblNlcnZlcihsb2dpblNlcnZlcjogT3B0aW9uYWw8c3RyaW5nPikge1xyXG4gICAgaWYgKCFsb2dpblNlcnZlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAobG9naW5TZXJ2ZXIgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICB0aGlzLl9kZWZhdWx0TG9naW5VcmwgPSAnaHR0cHM6Ly9sb2dpbi5zYWxlc2ZvcmNlLmNvbSc7XHJcbiAgICB9IGVsc2UgaWYgKGxvZ2luU2VydmVyID09PSAnc2FuZGJveCcpIHtcclxuICAgICAgdGhpcy5fZGVmYXVsdExvZ2luVXJsID0gJ2h0dHBzOi8vdGVzdC5zYWxlc2ZvcmNlLmNvbSc7XHJcbiAgICB9IGVsc2UgaWYgKGxvZ2luU2VydmVyLmluZGV4T2YoJ2h0dHBzOi8vJykgIT09IDApIHtcclxuICAgICAgdGhpcy5fZGVmYXVsdExvZ2luVXJsID0gJ2h0dHBzOi8vJyArIGxvZ2luU2VydmVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZGVmYXVsdExvZ2luVXJsID0gbG9naW5TZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByaW50KGBVc2luZyBcIiR7dGhpcy5fZGVmYXVsdExvZ2luVXJsfVwiIGFzIGRlZmF1bHQgbG9naW4gVVJMLmApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBhc3luYyBjb25uZWN0KG9wdGlvbnM6IHtcclxuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICBjb25uZWN0aW9uPzogc3RyaW5nO1xyXG4gICAgbG9naW5Vcmw/OiBzdHJpbmc7XHJcbiAgICBzYW5kYm94PzogYm9vbGVhbjtcclxuICB9KSB7XHJcbiAgICBjb25zdCBsb2dpblNlcnZlciA9IG9wdGlvbnMubG9naW5VcmxcclxuICAgICAgPyBvcHRpb25zLmxvZ2luVXJsXHJcbiAgICAgIDogb3B0aW9ucy5zYW5kYm94XHJcbiAgICAgID8gJ3NhbmRib3gnXHJcbiAgICAgIDogbnVsbDtcclxuICAgIHRoaXMuc2V0TG9naW5TZXJ2ZXIobG9naW5TZXJ2ZXIpO1xyXG4gICAgdGhpcy5fY29ubk5hbWUgPSBvcHRpb25zLmNvbm5lY3Rpb247XHJcbiAgICBsZXQgY29ubkNvbmZpZyA9IGF3YWl0IHJlZ2lzdHJ5LmdldENvbm5lY3Rpb25Db25maWcob3B0aW9ucy5jb25uZWN0aW9uKTtcclxuICAgIGxldCB1c2VybmFtZSA9IG9wdGlvbnMudXNlcm5hbWU7XHJcbiAgICBpZiAoIWNvbm5Db25maWcpIHtcclxuICAgICAgY29ubkNvbmZpZyA9IHt9O1xyXG4gICAgICBpZiAodGhpcy5fZGVmYXVsdExvZ2luVXJsKSB7XHJcbiAgICAgICAgY29ubkNvbmZpZy5sb2dpblVybCA9IHRoaXMuX2RlZmF1bHRMb2dpblVybDtcclxuICAgICAgfVxyXG4gICAgICB1c2VybmFtZSA9IHVzZXJuYW1lIHx8IG9wdGlvbnMuY29ubmVjdGlvbjtcclxuICAgIH1cclxuICAgIHRoaXMuX2Nvbm4gPSBuZXcgQ29ubmVjdGlvbihjb25uQ29uZmlnKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gb3B0aW9ucy5wYXNzd29yZDtcclxuICAgIGlmICh1c2VybmFtZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnN0YXJ0UGFzc3dvcmRBdXRoKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRDb25uZWN0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5fY29ubk5hbWUgJiYgdGhpcy5fY29ubi5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgIHRoaXMuX2Nvbm4ub24oJ3JlZnJlc2gnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByaW50KCdSZWZyZXNoaW5nIGFjY2VzcyB0b2tlbiAuLi4gJyk7XHJcbiAgICAgICAgICB0aGlzLnNhdmVDdXJyZW50Q29ubmVjdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBpZGVudGl0eSA9IGF3YWl0IHRoaXMuX2Nvbm4uaWRlbnRpdHkoKTtcclxuICAgICAgICAgIHRoaXMucHJpbnQoYExvZ2dlZCBpbiBhcyA6ICR7aWRlbnRpdHkudXNlcm5hbWV9YCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICB0aGlzLnByaW50KGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgIGlmICh0aGlzLl9jb25uLm9hdXRoMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSByZS1hdXRob3JpemUgY29ubmVjdGlvbi4nKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RhcnRQYXNzd29yZEF1dGgodGhpcy5fY29ubk5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBhc3luYyBzdGFydFBhc3N3b3JkQXV0aCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5sb2dpbkJ5UGFzc3dvcmQodXNlcm5hbWUsIHBhc3N3b3JkLCAyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09ICdjYW5jZWxlZCcpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdQYXNzd29yZCBhdXRoZW50aWNhdGlvbiBjYW5jZWxlZDogTm90IGxvZ2dlZCBpbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBhc3luYyBsb2dpbkJ5UGFzc3dvcmQoXHJcbiAgICB1c2VybmFtZTogc3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIHJldHJ5Q291bnQ6IG51bWJlcixcclxuICApOiBQcm9taXNlPHsgaWQ6IHN0cmluZyB9PiB7XHJcbiAgICBpZiAocGFzc3dvcmQgPT09ICcnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsZWQnKTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZCA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IHBhc3MgPSBhd2FpdCB0aGlzLnByb21wdFBhc3N3b3JkKCdQYXNzd29yZDogJyk7XHJcbiAgICAgIHJldHVybiB0aGlzLmxvZ2luQnlQYXNzd29yZCh1c2VybmFtZSwgcGFzcywgcmV0cnlDb3VudCk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9jb25uLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIHRoaXMucHJpbnQoYExvZ2dlZCBpbiBhcyA6ICR7dXNlcm5hbWV9YCk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIGlmIChyZXRyeUNvdW50ID4gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luQnlQYXNzd29yZCh1c2VybmFtZSwgdW5kZWZpbmVkLCByZXRyeUNvdW50IC0gMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5jZWxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGRpc2Nvbm5lY3QoY29ubk5hbWU/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBjb25uTmFtZSB8fCB0aGlzLl9jb25uTmFtZTtcclxuICAgIGlmIChuYW1lICYmIHJlZ2lzdHJ5LmdldENvbm5lY3Rpb25Db25maWcobmFtZSkpIHtcclxuICAgICAgcmVnaXN0cnkucmVtb3ZlQ29ubmVjdGlvbkNvbmZpZyhuYW1lKTtcclxuICAgICAgdGhpcy5wcmludChgRGlzY29ubmVjdCBjb25uZWN0aW9uICcke25hbWV9J2ApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY29ubk5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9jb25uID0gbmV3IENvbm5lY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgYXN5bmMgYXV0aG9yaXplKGNsaWVudE5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgbmFtZSA9IGNsaWVudE5hbWUgfHwgJ2RlZmF1bHQnO1xyXG4gICAgdmFyIG9hdXRoMkNvbmZpZyA9IGF3YWl0IHJlZ2lzdHJ5LmdldENsaWVudENvbmZpZyhuYW1lKTtcclxuICAgIGlmICghb2F1dGgyQ29uZmlnIHx8ICFvYXV0aDJDb25maWcuY2xpZW50SWQpIHtcclxuICAgICAgaWYgKG5hbWUgPT09ICdkZWZhdWx0JyB8fCBuYW1lID09PSAnc2FuZGJveCcpIHtcclxuICAgICAgICB0aGlzLnByaW50KFxyXG4gICAgICAgICAgJ05vIGNsaWVudCBpbmZvcm1hdGlvbiByZWdpc3RlcmVkLiBEb3dubG9hZGluZyBKU2ZvcmNlIGRlZmF1bHQgY2xpZW50IGluZm9ybWF0aW9uLi4uJyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvd25sb2FkRGVmYXVsdENsaWVudEluZm8obmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBObyBPQXV0aDIgY2xpZW50IGluZm9ybWF0aW9uIHJlZ2lzdGVyZWQgOiAnJHtuYW1lfScuIFBsZWFzZSByZWdpc3RlciBjbGllbnQgaW5mbyBmaXJzdC5gLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb2F1dGgyID0gbmV3IE9BdXRoMihvYXV0aDJDb25maWcpO1xyXG4gICAgY29uc3QgdmVyaWZpZXIgPSBiYXNlNjR1cmwuZW5jb2RlKGNyeXB0by5yYW5kb21CeXRlcygzMikpO1xyXG4gICAgY29uc3QgY2hhbGxlbmdlID0gYmFzZTY0dXJsLmVuY29kZShcclxuICAgICAgY3J5cHRvXHJcbiAgICAgICAgLmNyZWF0ZUhhc2goJ3NoYTI1NicpXHJcbiAgICAgICAgLnVwZGF0ZSh2ZXJpZmllcilcclxuICAgICAgICAuZGlnZXN0KCksXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RhdGUgPSBiYXNlNjR1cmwuZW5jb2RlKGNyeXB0by5yYW5kb21CeXRlcygzMikpO1xyXG4gICAgY29uc3QgYXV0aHpVcmwgPSBvYXV0aDIuZ2V0QXV0aG9yaXphdGlvblVybCh7XHJcbiAgICAgIGNvZGVfY2hhbGxlbmdlOiBjaGFsbGVuZ2UsXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByaW50KCdPcGVuaW5nIGF1dGhvcml6YXRpb24gcGFnZSBpbiBicm93c2VyLi4uJyk7XHJcbiAgICB0aGlzLnByaW50KGBVUkw6ICR7YXV0aHpVcmx9YCk7XHJcbiAgICB0aGlzLm9wZW5VcmwoYXV0aHpVcmwpO1xyXG4gICAgY29uc3QgcGFyYW1zID0gYXdhaXQgdGhpcy53YWl0Q2FsbGJhY2sob2F1dGgyQ29uZmlnLnJlZGlyZWN0VXJpLCBzdGF0ZSk7XHJcbiAgICBpZiAoIXBhcmFtcy5jb2RlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXV0aG9yaXphdGlvbiBjb2RlIHJldHVybmVkLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtcy5zdGF0ZSAhPT0gc3RhdGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0YXRlIHBhcmFtZXRlciByZXR1cm5lZC4nKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2Nvbm4gPSBuZXcgQ29ubmVjdGlvbih7IG9hdXRoMiB9KTtcclxuICAgIHRoaXMucHJpbnQoXHJcbiAgICAgICdSZWNlaXZlZCBhdXRob3JpemF0aW9uIGNvZGUuIFBsZWFzZSBjbG9zZSB0aGUgb3BlbmVkIGJyb3dzZXIgd2luZG93LicsXHJcbiAgICApO1xyXG4gICAgYXdhaXQgdGhpcy5fY29ubi5hdXRob3JpemUocGFyYW1zLmNvZGUsIHsgY29kZV92ZXJpZmllcjogdmVyaWZpZXIgfSk7XHJcbiAgICB0aGlzLnByaW50KCdBdXRob3JpemVkLiBGZXRjaGluZyB1c2VyIGluZm8uLi4nKTtcclxuICAgIGNvbnN0IGlkZW50aXR5ID0gYXdhaXQgdGhpcy5fY29ubi5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5wcmludChgTG9nZ2VkIGluIGFzIDogJHtpZGVudGl0eS51c2VybmFtZX1gKTtcclxuICAgIHRoaXMuX2Nvbm5OYW1lID0gaWRlbnRpdHkudXNlcm5hbWU7XHJcbiAgICB0aGlzLnNhdmVDdXJyZW50Q29ubmVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBhc3luYyBkb3dubG9hZERlZmF1bHRDbGllbnRJbmZvKGNsaWVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgY29uZmlnVXJsID0gJ2h0dHBzOi8vanNmb3JjZS5naXRodWIuaW8vY2xpZW50LWNvbmZpZy9kZWZhdWx0Lmpzb24nO1xyXG4gICAgY29uc3QgcmVzOiB7IGJvZHk6IHN0cmluZyB9ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZXF1ZXN0KGNvbmZpZ1VybCwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGllbnRDb25maWcgPSBKU09OLnBhcnNlKHJlcy5ib2R5KTtcclxuICAgIGlmIChjbGllbnROYW1lID09PSAnc2FuZGJveCcpIHtcclxuICAgICAgY2xpZW50Q29uZmlnLmxvZ2luVXJsID0gJ2h0dHBzOi8vdGVzdC5zYWxlc2ZvcmNlLmNvbSc7XHJcbiAgICB9XHJcbiAgICBhd2FpdCByZWdpc3RyeS5yZWdpc3RlckNsaWVudENvbmZpZyhjbGllbnROYW1lLCBjbGllbnRDb25maWcpO1xyXG4gICAgdGhpcy5wcmludCgnQ2xpZW50IGluZm9ybWF0aW9uIGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXplKGNsaWVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBhc3luYyB3YWl0Q2FsbGJhY2soXHJcbiAgICBzZXJ2ZXJVcmw6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIHN0YXRlOiBzdHJpbmcsXHJcbiAgKTogUHJvbWlzZTx7IGNvZGU6IHN0cmluZzsgc3RhdGU6IHN0cmluZyB9PiB7XHJcbiAgICBpZiAoc2VydmVyVXJsICYmIHNlcnZlclVybC5pbmRleE9mKCdodHRwOi8vbG9jYWxob3N0OicpID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlcS51cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcXBhcmFtcyA9IHVybC5wYXJzZShyZXEudXJsLCB0cnVlKS5xdWVyeTtcclxuICAgICAgICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7ICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJyB9KTtcclxuICAgICAgICAgIHJlcy53cml0ZShcclxuICAgICAgICAgICAgJzxodG1sPjxzY3JpcHQ+bG9jYXRpb24uaHJlZj1cImFib3V0OmJsYW5rXCI7PC9zY3JpcHQ+PC9odG1sPicsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICAgICAgaWYgKHFwYXJhbXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihxcGFyYW1zLmVycm9yIGFzIHN0cmluZykpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShxcGFyYW1zIGFzIHsgY29kZTogc3RyaW5nOyBzdGF0ZTogc3RyaW5nIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VydmVyLmNsb3NlKCk7XHJcbiAgICAgICAgICByZXEuY29ubmVjdGlvbi5lbmQoKTtcclxuICAgICAgICAgIHJlcS5jb25uZWN0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwb3J0ID0gTnVtYmVyKHVybC5wYXJzZShzZXJ2ZXJVcmwpLnBvcnQpO1xyXG4gICAgICAgIHNlcnZlci5saXN0ZW4ocG9ydCwgJ2xvY2FsaG9zdCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvZGUgPSBhd2FpdCB0aGlzLnByb21wdE1lc3NhZ2UoXHJcbiAgICAgICAgJ0NvcHkgJiBwYXN0ZSBhdXRoeiBjb2RlIHBhc3NlZCBpbiByZWRpcmVjdGVkIFVSTDogJyxcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHsgY29kZTogZGVjb2RlVVJJQ29tcG9uZW50KGNvZGUpLCBzdGF0ZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBhc3luYyByZWdpc3RlcihjbGllbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsIGNsaWVudENvbmZpZzogQ2xpZW50Q29uZmlnKSB7XHJcbiAgICBjb25zdCBuYW1lID0gY2xpZW50TmFtZSB8fCAnZGVmYXVsdCc7XHJcbiAgICBjb25zdCBwcm9tcHRzID0ge1xyXG4gICAgICBjbGllbnRJZDogJ0lucHV0IGNsaWVudCBJRCA6ICcsXHJcbiAgICAgIGNsaWVudFNlY3JldDogJ0lucHV0IGNsaWVudCBzZWNyZXQgKG9wdGlvbmFsKSA6ICcsXHJcbiAgICAgIHJlZGlyZWN0VXJpOiAnSW5wdXQgcmVkaXJlY3QgVVJJIDogJyxcclxuICAgICAgbG9naW5Vcmw6ICdJbnB1dCBsb2dpbiBVUkwgKGRlZmF1bHQgaXMgaHR0cHM6Ly9sb2dpbi5zYWxlc2ZvcmNlLmNvbSkgOiAnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyZWQgPSBhd2FpdCByZWdpc3RyeS5nZXRDbGllbnRDb25maWcobmFtZSk7XHJcbiAgICBpZiAocmVnaXN0ZXJlZCkge1xyXG4gICAgICBjb25zdCBtc2cgPSBgQ2xpZW50ICcke25hbWV9JyBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVycmlkZSA/IFt5Tl0gOiBgO1xyXG4gICAgICBjb25zdCBvayA9IGF3YWl0IHRoaXMucHJvbXB0Q29uZmlybShtc2cpO1xyXG4gICAgICBpZiAoIW9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWdpc3RyYXRpb24gY2FuY2VsZWQuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNsaWVudENvbmZpZyA9IGF3YWl0IE9iamVjdC5rZXlzKHByb21wdHMpLnJlZHVjZShhc3luYyAocHJvbWlzZSwgbmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBjY29uZmlnID0gYXdhaXQgcHJvbWlzZTtcclxuICAgICAgY29uc3QgcHJvbXB0TmFtZSA9IG5hbWUgYXMga2V5b2YgdHlwZW9mIHByb21wdHM7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBwcm9tcHRzW3Byb21wdE5hbWVdO1xyXG4gICAgICBpZiAoIWNjb25maWdbcHJvbXB0TmFtZV0pIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHRoaXMucHJvbXB0TWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmNjb25maWcsXHJcbiAgICAgICAgICAgIFtwcm9tcHROYW1lXTogdmFsdWUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2NvbmZpZztcclxuICAgIH0sIFByb21pc2UucmVzb2x2ZShjbGllbnRDb25maWcpKTtcclxuICAgIGF3YWl0IHJlZ2lzdHJ5LnJlZ2lzdGVyQ2xpZW50Q29uZmlnKG5hbWUsIGNsaWVudENvbmZpZyk7XHJcbiAgICB0aGlzLnByaW50KCdDbGllbnQgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkuJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGFzeW5jIGxpc3RDb25uZWN0aW9ucygpIHtcclxuICAgIGNvbnN0IG5hbWVzID0gYXdhaXQgcmVnaXN0cnkuZ2V0Q29ubmVjdGlvbk5hbWVzKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgIHRoaXMucHJpbnQoKG5hbWUgPT09IHRoaXMuX2Nvbm5OYW1lID8gJyogJyA6ICcgICcpICsgbmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGFzeW5jIGdldENvbm5lY3Rpb25OYW1lcygpIHtcclxuICAgIHJldHVybiByZWdpc3RyeS5nZXRDb25uZWN0aW9uTmFtZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgYXN5bmMgZ2V0Q2xpZW50TmFtZXMoKSB7XHJcbiAgICByZXR1cm4gcmVnaXN0cnkuZ2V0Q2xpZW50TmFtZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgYXN5bmMgcHJvbXB0KHR5cGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yZXBsLnBhdXNlKCk7XHJcbiAgICBjb25zdCBhbnN3ZXI6IHsgdmFsdWU6IHN0cmluZyB9ID0gYXdhaXQgaW5xdWlyZXIucHJvbXB0KFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgbmFtZTogJ3ZhbHVlJyxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgICB0aGlzLl9yZXBsLnJlc3VtZSgpO1xyXG4gICAgcmV0dXJuIGFuc3dlci52YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgYXN5bmMgcHJvbXB0TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnByb21wdCgnaW5wdXQnLCBtZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHByb21wdFBhc3N3b3JkKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvbXB0KCdwYXNzd29yZCcsIG1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBhc3luYyBwcm9tcHRDb25maXJtKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvbXB0KCdjb25maXJtJywgbWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIG9wZW5VcmwodXJsOiBzdHJpbmcpIHtcclxuICAgIG9wZW5VcmwodXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgb3BlblVybFVzaW5nU2Vzc2lvbih1cmw/OiBzdHJpbmcpIHtcclxuICAgIGxldCBmcm9udGRvb3JVcmwgPSBgJHt0aGlzLl9jb25uLmluc3RhbmNlVXJsfS9zZWN1ci9mcm9udGRvb3IuanNwP3NpZD0ke3RoaXMuX2Nvbm4uYWNjZXNzVG9rZW59YDtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgZnJvbnRkb29yVXJsICs9ICcmcmV0VVJMPScgKyBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcclxuICAgIH1cclxuICAgIHRoaXMub3BlblVybChmcm9udGRvb3JVcmwpO1xyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuY29uc3QgY2xpID0gbmV3IENsaSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpO1xyXG4iXX0=