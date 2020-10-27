"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _getIteratorMethod2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator-method"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _getOwnPropertyNames = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-names"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _events = require("events");

var _repl = require("repl");

var _stream = require("stream");

var _ = _interopRequireDefault(require(".."));

var _function = require("../util/function");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _symbol["default"] === "undefined" || (0, _getIteratorMethod2["default"])(o) == null) { if ((0, _isArray["default"])(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2["default"])(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context6; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = (0, _slice["default"])(_context6 = Object.prototype.toString.call(o)).call(_context6, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from["default"])(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Intercept the evaled value returned from repl evaluator, convert and send back to output.
 * @private
 */
function injectBefore(replServer, method, beforeFn) {
  var _orig = replServer[method];

  replServer[method] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var callback = args.pop();
    beforeFn.apply(null, (0, _concat["default"])(args).call(args, function (err, res) {
      if (err || res) {
        callback(err, res);
      } else {
        _orig.apply(replServer, (0, _concat["default"])(args).call(args, callback));
      }
    }));
  };

  return replServer;
}
/**
 * @private
 */


function injectAfter(replServer, method, afterFn) {
  var _orig = replServer[method];

  replServer[method] = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var callback = args.pop();

    _orig.apply(replServer, (0, _concat["default"])(args).call(args, function () {
      try {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        afterFn.apply(null, (0, _concat["default"])(args).call(args, callback));
      } catch (e) {
        callback(e);
      }
    }));
  };

  return replServer;
}
/**
 * When the result was "promise", resolve its value
 * @private
 */


function promisify(err, value, callback) {
  // callback immediately if no value passed
  if (!callback && (0, _function.isFunction)(value)) {
    callback = value;
    return callback();
  }

  if (err) {
    throw err;
  }

  if ((0, _function.isPromiseLike)(value)) {
    value.then(function (v) {
      callback(null, v);
    }, function (err) {
      callback(err);
    });
  } else {
    callback(null, value);
  }
}
/**
 * Output object to stdout in JSON representation
 * @private
 */


function outputToStdout(prettyPrint) {
  if (prettyPrint && !(0, _function.isNumber)(prettyPrint)) {
    prettyPrint = 4;
  }

  return function (err, value, callback) {
    if (err) {
      console.error(err);
    } else {
      var str = (0, _stringify["default"])(value, null, prettyPrint);
      console.log(str);
    }

    callback(err, value);
  };
}
/**
 * define get accessor using Object.defineProperty
 * @private
 */


function defineProp(obj, prop, getter) {
  if (_defineProperty3["default"]) {
    (0, _defineProperty3["default"])(obj, prop, {
      get: getter
    });
  }
}
/**
 *
 */


var Repl = /*#__PURE__*/function () {
  function Repl(cli) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Repl);
    (0, _defineProperty2["default"])(this, "_cli", void 0);
    (0, _defineProperty2["default"])(this, "_in", void 0);
    (0, _defineProperty2["default"])(this, "_out", void 0);
    (0, _defineProperty2["default"])(this, "_interactive", true);
    (0, _defineProperty2["default"])(this, "_paused", false);
    (0, _defineProperty2["default"])(this, "_replServer", undefined);
    this._cli = cli;
    this._in = new _stream.Transform();
    this._out = new _stream.Transform();

    this._in._transform = function (chunk, encoding, callback) {
      if (!_this._paused) {
        _this._in.push(chunk);
      }

      callback();
    };

    this._out._transform = function (chunk, encoding, callback) {
      if (!_this._paused && _this._interactive !== false) {
        _this._out.push(chunk);
      }

      callback();
    };
  }
  /**
   *
   */


  (0, _createClass2["default"])(Repl, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._interactive = options.interactive !== false;
      process.stdin.resume();

      if (process.stdin.setRawMode) {
        process.stdin.setRawMode(true);
      }

      process.stdin.pipe(this._in);

      this._out.pipe(process.stdout);

      defineProp(this._out, 'columns', function () {
        return process.stdout.columns;
      });
      this._replServer = (0, _repl.start)({
        input: this._in,
        output: this._out,
        terminal: true
      });

      this._defineAdditionalCommands();

      this._replServer = injectBefore(this._replServer, 'completer', function (line, callback) {
        _this2.complete(line).then(function (rets) {
          callback(null, rets);
        })["catch"](function (err) {
          callback(err);
        });
      });
      this._replServer = injectAfter(this._replServer, 'eval', promisify);

      if (options.interactive === false) {
        this._replServer = injectAfter(this._replServer, 'eval', outputToStdout(options.prettyPrint));
        this._replServer = injectAfter(this._replServer, 'eval', function () {
          process.exit();
        });
      }

      this._replServer.on('exit', function () {
        return process.exit();
      });

      this._defineBuiltinVars(this._replServer.context);

      if (options.evalScript) {
        this._in.write(options.evalScript + '\n', 'utf-8');
      }

      return this;
    }
    /**
     *
     */

  }, {
    key: "_defineAdditionalCommands",
    value: function _defineAdditionalCommands() {
      var cli = this._cli;
      var replServer = this._replServer;

      if (!replServer) {
        return;
      }

      replServer.defineCommand('connections', {
        help: 'List currenty registered Salesforce connections',
        action: function () {
          var _action = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return cli.listConnections();

                  case 2:
                    replServer.displayPrompt();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function action() {
            return _action.apply(this, arguments);
          }

          return action;
        }()
      });
      replServer.defineCommand('connect', {
        help: 'Connect to Salesforce instance',
        action: function () {
          var _action2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
            var _len4,
                args,
                _key4,
                name,
                password,
                params,
                _args2 = arguments;

            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    for (_len4 = _args2.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                      args[_key4] = _args2[_key4];
                    }

                    name = args[0], password = args[1];
                    params = password ? {
                      connection: name,
                      username: name,
                      password: password
                    } : {
                      connection: name,
                      username: name
                    };
                    _context2.prev = 3;
                    _context2.next = 6;
                    return cli.connect(params);

                  case 6:
                    _context2.next = 11;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](3);
                    console.error(_context2.t0.message);

                  case 11:
                    replServer.displayPrompt();

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[3, 8]]);
          }));

          function action() {
            return _action2.apply(this, arguments);
          }

          return action;
        }()
      });
      replServer.defineCommand('disconnect', {
        help: 'Disconnect connection and erase it from registry',
        action: function action(name) {
          cli.disconnect(name);
          replServer.displayPrompt();
        }
      });
      replServer.defineCommand('use', {
        help: 'Specify login server to establish connection',
        action: function action(loginServer) {
          cli.setLoginServer(loginServer);
          replServer.displayPrompt();
        }
      });
      replServer.defineCommand('authorize', {
        help: 'Connect to Salesforce using OAuth2 authorization flow',
        action: function () {
          var _action3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(clientName) {
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return cli.authorize(clientName);

                  case 3:
                    _context3.next = 8;
                    break;

                  case 5:
                    _context3.prev = 5;
                    _context3.t0 = _context3["catch"](0);
                    console.error(_context3.t0.message);

                  case 8:
                    replServer.displayPrompt();

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[0, 5]]);
          }));

          function action(_x) {
            return _action3.apply(this, arguments);
          }

          return action;
        }()
      });
      replServer.defineCommand('register', {
        help: 'Register OAuth2 client information',
        action: function () {
          var _action4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
            var _len5,
                args,
                _key5,
                clientName,
                clientId,
                clientSecret,
                redirectUri,
                loginUrl,
                config,
                _args4 = arguments;

            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    for (_len5 = _args4.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                      args[_key5] = _args4[_key5];
                    }

                    clientName = args[0], clientId = args[1], clientSecret = args[2], redirectUri = args[3], loginUrl = args[4];
                    config = {
                      clientId: clientId,
                      clientSecret: clientSecret,
                      redirectUri: redirectUri,
                      loginUrl: loginUrl
                    };
                    _context4.prev = 3;
                    _context4.next = 6;
                    return cli.register(clientName, config);

                  case 6:
                    _context4.next = 11;
                    break;

                  case 8:
                    _context4.prev = 8;
                    _context4.t0 = _context4["catch"](3);
                    console.error(_context4.t0.message);

                  case 11:
                    replServer.displayPrompt();

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[3, 8]]);
          }));

          function action() {
            return _action4.apply(this, arguments);
          }

          return action;
        }()
      });
      replServer.defineCommand('open', {
        help: 'Open Salesforce web page using established connection',
        action: function action(url) {
          cli.openUrlUsingSession(url);
          replServer.displayPrompt();
        }
      });
    }
    /**
     *
     */

  }, {
    key: "pause",
    value: function pause() {
      this._paused = true;

      if (process.stdin.setRawMode) {
        process.stdin.setRawMode(false);
      }
    }
    /**
     *
     */

  }, {
    key: "resume",
    value: function resume() {
      this._paused = false;
      process.stdin.resume();

      if (process.stdin.setRawMode) {
        process.stdin.setRawMode(true);
      }
    }
    /**
     *
     */

  }, {
    key: "complete",
    value: function () {
      var _complete = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(line) {
        var tokens, _tokens, command, _tokens$, keyword, candidates;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                tokens = line.replace(/^\s+/, '').split(/\s+/);
                _tokens = (0, _slicedToArray2["default"])(tokens, 2), command = _tokens[0], _tokens$ = _tokens[1], keyword = _tokens$ === void 0 ? '' : _tokens$;

                if (!(command[0] === '.' && tokens.length === 2)) {
                  _context5.next = 19;
                  break;
                }

                candidates = [];

                if (!(command === '.connect' || command === '.disconnect')) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 7;
                return this._cli.getConnectionNames();

              case 7:
                candidates = _context5.sent;
                _context5.next = 17;
                break;

              case 10:
                if (!(command === '.authorize')) {
                  _context5.next = 16;
                  break;
                }

                _context5.next = 13;
                return this._cli.getClientNames();

              case 13:
                candidates = _context5.sent;
                _context5.next = 17;
                break;

              case 16:
                if (command === '.use') {
                  candidates = ['production', 'sandbox'];
                }

              case 17:
                candidates = (0, _filter["default"])(candidates).call(candidates, function (name) {
                  return (0, _indexOf["default"])(name).call(name, keyword) === 0;
                });
                return _context5.abrupt("return", [candidates, keyword]);

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function complete(_x2) {
        return _complete.apply(this, arguments);
      }

      return complete;
    }()
    /**
     * Map all jsforce object to REPL context
     * @private
     */

  }, {
    key: "_defineBuiltinVars",
    value: function _defineBuiltinVars(context) {
      var cli = this._cli; // define salesforce package root objects

      for (var key in _["default"]) {
        if (Object.prototype.hasOwnProperty.call(_["default"], key) && !global[key]) {
          context[key] = _["default"][key];
        }
      } // expose jsforce package root object in context.


      context.jsforce = _["default"];

      function createProxyFunc(prop) {
        return function () {
          var _ref;

          var conn = cli.getCurrentConnection();
          return (_ref = conn)[prop].apply(_ref, arguments);
        };
      }

      function createProxyAccessor(prop) {
        return function () {
          var conn = cli.getCurrentConnection();
          return conn[prop];
        };
      }

      var conn = cli.getCurrentConnection(); // list all props in connection instance, other than EventEmitter or object built-in methods

      var props = {};
      var o = conn;

      while (o && o !== _events.EventEmitter.prototype && o !== Object.prototype) {
        var _iterator = _createForOfIteratorHelper((0, _getOwnPropertyNames["default"])(o)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;

            if (p !== 'constructor') {
              props[p] = true;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        o = (0, _getPrototypeOf["default"])(o);
      }

      for (var _i = 0, _Object$keys = (0, _keys["default"])(props); _i < _Object$keys.length; _i++) {
        var _prop = _Object$keys[_i];

        if (typeof global[_prop] !== 'undefined') {
          // avoid global override
          continue;
        }

        if ((0, _indexOf["default"])(_prop).call(_prop, '_') === 0) {
          // ignore private
          continue;
        }

        if ((0, _function.isFunction)(conn[_prop])) {
          context[_prop] = createProxyFunc(_prop);
        } else if ((0, _function.isObject)(conn[_prop])) {
          defineProp(context, _prop, createProxyAccessor(_prop));
        }
      } // expose default connection as "$conn"


      defineProp(context, '$conn', function () {
        return cli.getCurrentConnection();
      });
    }
  }]);
  return Repl;
}();

exports["default"] = Repl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvcmVwbC50cyJdLCJuYW1lcyI6WyJpbmplY3RCZWZvcmUiLCJyZXBsU2VydmVyIiwibWV0aG9kIiwiYmVmb3JlRm4iLCJfb3JpZyIsImFyZ3MiLCJjYWxsYmFjayIsInBvcCIsImFwcGx5IiwiZXJyIiwicmVzIiwiaW5qZWN0QWZ0ZXIiLCJhZnRlckZuIiwiZSIsInByb21pc2lmeSIsInZhbHVlIiwidGhlbiIsInYiLCJvdXRwdXRUb1N0ZG91dCIsInByZXR0eVByaW50IiwiY29uc29sZSIsImVycm9yIiwic3RyIiwibG9nIiwiZGVmaW5lUHJvcCIsIm9iaiIsInByb3AiLCJnZXR0ZXIiLCJnZXQiLCJSZXBsIiwiY2xpIiwidW5kZWZpbmVkIiwiX2NsaSIsIl9pbiIsIlRyYW5zZm9ybSIsIl9vdXQiLCJfdHJhbnNmb3JtIiwiY2h1bmsiLCJlbmNvZGluZyIsIl9wYXVzZWQiLCJwdXNoIiwiX2ludGVyYWN0aXZlIiwib3B0aW9ucyIsImludGVyYWN0aXZlIiwicHJvY2VzcyIsInN0ZGluIiwicmVzdW1lIiwic2V0UmF3TW9kZSIsInBpcGUiLCJzdGRvdXQiLCJjb2x1bW5zIiwiX3JlcGxTZXJ2ZXIiLCJpbnB1dCIsIm91dHB1dCIsInRlcm1pbmFsIiwiX2RlZmluZUFkZGl0aW9uYWxDb21tYW5kcyIsImxpbmUiLCJjb21wbGV0ZSIsInJldHMiLCJleGl0Iiwib24iLCJfZGVmaW5lQnVpbHRpblZhcnMiLCJjb250ZXh0IiwiZXZhbFNjcmlwdCIsIndyaXRlIiwiZGVmaW5lQ29tbWFuZCIsImhlbHAiLCJhY3Rpb24iLCJsaXN0Q29ubmVjdGlvbnMiLCJkaXNwbGF5UHJvbXB0IiwibmFtZSIsInBhc3N3b3JkIiwicGFyYW1zIiwiY29ubmVjdGlvbiIsInVzZXJuYW1lIiwiY29ubmVjdCIsIm1lc3NhZ2UiLCJkaXNjb25uZWN0IiwibG9naW5TZXJ2ZXIiLCJzZXRMb2dpblNlcnZlciIsImNsaWVudE5hbWUiLCJhdXRob3JpemUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsInJlZGlyZWN0VXJpIiwibG9naW5VcmwiLCJjb25maWciLCJyZWdpc3RlciIsInVybCIsIm9wZW5VcmxVc2luZ1Nlc3Npb24iLCJ0b2tlbnMiLCJyZXBsYWNlIiwic3BsaXQiLCJjb21tYW5kIiwia2V5d29yZCIsImxlbmd0aCIsImNhbmRpZGF0ZXMiLCJnZXRDb25uZWN0aW9uTmFtZXMiLCJnZXRDbGllbnROYW1lcyIsImtleSIsImpzZm9yY2UiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJnbG9iYWwiLCJjcmVhdGVQcm94eUZ1bmMiLCJjb25uIiwiZ2V0Q3VycmVudENvbm5lY3Rpb24iLCJjcmVhdGVQcm94eUFjY2Vzc29yIiwicHJvcHMiLCJvIiwiRXZlbnRFbWl0dGVyIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLFlBQVQsQ0FDRUMsVUFERixFQUVFQyxNQUZGLEVBR0VDLFFBSEYsRUFJRTtBQUNBLE1BQU1DLEtBQWUsR0FBSUgsVUFBRCxDQUFvQkMsTUFBcEIsQ0FBeEI7O0FBQ0NELEVBQUFBLFVBQUQsQ0FBb0JDLE1BQXBCLElBQThCLFlBQW9CO0FBQUEsc0NBQWhCRyxJQUFnQjtBQUFoQkEsTUFBQUEsSUFBZ0I7QUFBQTs7QUFDaEQsUUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsRUFBakI7QUFDQUosSUFBQUEsUUFBUSxDQUFDSyxLQUFULENBQ0UsSUFERixFQUVFLHdCQUFBSCxJQUFJLE1BQUosQ0FBQUEsSUFBSSxFQUFRLFVBQUNJLEdBQUQsRUFBV0MsR0FBWCxFQUF3QjtBQUNsQyxVQUFJRCxHQUFHLElBQUlDLEdBQVgsRUFBZ0I7QUFDZEosUUFBQUEsUUFBUSxDQUFD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ZW50IjpbIi8qKlxyXG4gKiBAZmlsZSBDcmVhdGVzIFJFUEwgaW50ZXJmYWNlIHdpdGggYnVpbHQgaW4gU2FsZXNmb3JjZSBBUEkgb2JqZWN0cyBhbmQgYXV0b21hdGljYWxseSByZXNvbHZlcyBwcm9taXNlIG9iamVjdFxyXG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cclxuICogQHByaXZhdGVcclxuICovXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XHJcbmltcG9ydCB7IFJFUExTZXJ2ZXIsIHN0YXJ0IGFzIHN0YXJ0UmVwbCB9IGZyb20gJ3JlcGwnO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdzdHJlYW0nO1xyXG5pbXBvcnQganNmb3JjZSBmcm9tICcuLic7XHJcbmltcG9ydCB7XHJcbiAgaXNQcm9taXNlTGlrZSxcclxuICBpc051bWJlcixcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4uL3V0aWwvZnVuY3Rpb24nO1xyXG5pbXBvcnQgeyBDbGkgfSBmcm9tICcuL2NsaSc7XHJcblxyXG4vKipcclxuICogSW50ZXJjZXB0IHRoZSBldmFsZWQgdmFsdWUgcmV0dXJuZWQgZnJvbSByZXBsIGV2YWx1YXRvciwgY29udmVydCBhbmQgc2VuZCBiYWNrIHRvIG91dHB1dC5cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGluamVjdEJlZm9yZShcclxuICByZXBsU2VydmVyOiBSRVBMU2VydmVyLFxyXG4gIG1ldGhvZDogc3RyaW5nLFxyXG4gIGJlZm9yZUZuOiBGdW5jdGlvbixcclxuKSB7XHJcbiAgY29uc3QgX29yaWc6IEZ1bmN0aW9uID0gKHJlcGxTZXJ2ZXIgYXMgYW55KVttZXRob2RdO1xyXG4gIChyZXBsU2VydmVyIGFzIGFueSlbbWV0aG9kXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xyXG4gICAgYmVmb3JlRm4uYXBwbHkoXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIGFyZ3MuY29uY2F0KChlcnI6IGFueSwgcmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZXJyIHx8IHJlcykge1xyXG4gICAgICAgICAgY2FsbGJhY2soZXJyLCByZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBfb3JpZy5hcHBseShyZXBsU2VydmVyLCBhcmdzLmNvbmNhdChjYWxsYmFjaykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlcGxTZXJ2ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5qZWN0QWZ0ZXIoXHJcbiAgcmVwbFNlcnZlcjogUkVQTFNlcnZlcixcclxuICBtZXRob2Q6IHN0cmluZyxcclxuICBhZnRlckZuOiBGdW5jdGlvbixcclxuKSB7XHJcbiAgY29uc3QgX29yaWc6IEZ1bmN0aW9uID0gKHJlcGxTZXJ2ZXIgYXMgYW55KVttZXRob2RdO1xyXG4gIChyZXBsU2VydmVyIGFzIGFueSlbbWV0aG9kXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xyXG4gICAgX29yaWcuYXBwbHkoXHJcbiAgICAgIHJlcGxTZXJ2ZXIsXHJcbiAgICAgIGFyZ3MuY29uY2F0KCguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhZnRlckZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KGNhbGxiYWNrKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY2FsbGJhY2soZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gcmVwbFNlcnZlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdoZW4gdGhlIHJlc3VsdCB3YXMgXCJwcm9taXNlXCIsIHJlc29sdmUgaXRzIHZhbHVlXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9taXNpZnkoXHJcbiAgZXJyOiBFcnJvciB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgdmFsdWU6IGFueSxcclxuICBjYWxsYmFjazogRnVuY3Rpb24sXHJcbikge1xyXG4gIC8vIGNhbGxiYWNrIGltbWVkaWF0ZWx5IGlmIG5vIHZhbHVlIHBhc3NlZFxyXG4gIGlmICghY2FsbGJhY2sgJiYgaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgIGNhbGxiYWNrID0gdmFsdWU7XHJcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICB9XHJcbiAgaWYgKGVycikge1xyXG4gICAgdGhyb3cgZXJyO1xyXG4gIH1cclxuICBpZiAoaXNQcm9taXNlTGlrZSh2YWx1ZSkpIHtcclxuICAgIHZhbHVlLnRoZW4oXHJcbiAgICAgICh2OiBhbnkpID0+IHtcclxuICAgICAgICBjYWxsYmFjayhudWxsLCB2KTtcclxuICAgICAgfSxcclxuICAgICAgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNhbGxiYWNrKG51bGwsIHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPdXRwdXQgb2JqZWN0IHRvIHN0ZG91dCBpbiBKU09OIHJlcHJlc2VudGF0aW9uXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBvdXRwdXRUb1N0ZG91dChwcmV0dHlQcmludD86IHN0cmluZyB8IG51bWJlcikge1xyXG4gIGlmIChwcmV0dHlQcmludCAmJiAhaXNOdW1iZXIocHJldHR5UHJpbnQpKSB7XHJcbiAgICBwcmV0dHlQcmludCA9IDQ7XHJcbiAgfVxyXG4gIHJldHVybiAoZXJyOiBhbnksIHZhbHVlOiBhbnksIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzdHIgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgcHJldHR5UHJpbnQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gICAgfVxyXG4gICAgY2FsbGJhY2soZXJyLCB2YWx1ZSk7XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGRlZmluZSBnZXQgYWNjZXNzb3IgdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWZpbmVQcm9wKG9iajogT2JqZWN0LCBwcm9wOiBzdHJpbmcsIGdldHRlcjogKCkgPT4gYW55KSB7XHJcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgeyBnZXQ6IGdldHRlciB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbCB7XHJcbiAgX2NsaTogQ2xpO1xyXG4gIF9pbjogVHJhbnNmb3JtO1xyXG4gIF9vdXQ6IFRyYW5zZm9ybTtcclxuICBfaW50ZXJhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIF9wYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBfcmVwbFNlcnZlcjogUkVQTFNlcnZlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoY2xpOiBDbGkpIHtcclxuICAgIHRoaXMuX2NsaSA9IGNsaTtcclxuICAgIHRoaXMuX2luID0gbmV3IFRyYW5zZm9ybSgpO1xyXG4gICAgdGhpcy5fb3V0ID0gbmV3IFRyYW5zZm9ybSgpO1xyXG4gICAgdGhpcy5faW4uX3RyYW5zZm9ybSA9IChjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5fcGF1c2VkKSB7XHJcbiAgICAgICAgdGhpcy5faW4ucHVzaChjaHVuayk7XHJcbiAgICAgIH1cclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH07XHJcbiAgICB0aGlzLl9vdXQuX3RyYW5zZm9ybSA9IChjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5fcGF1c2VkICYmIHRoaXMuX2ludGVyYWN0aXZlICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuX291dC5wdXNoKGNodW5rKTtcclxuICAgICAgfVxyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgc3RhcnQoXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGludGVyYWN0aXZlPzogYm9vbGVhbjtcclxuICAgICAgcHJldHR5UHJpbnQ/OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICAgIGV2YWxTY3JpcHQ/OiBzdHJpbmc7XHJcbiAgICB9ID0ge30sXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9pbnRlcmFjdGl2ZSA9IG9wdGlvbnMuaW50ZXJhY3RpdmUgIT09IGZhbHNlO1xyXG5cclxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XHJcbiAgICBpZiAocHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKSB7XHJcbiAgICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh0cnVlKTtcclxuICAgIH1cclxuICAgIHByb2Nlc3Muc3RkaW4ucGlwZSh0aGlzLl9pbik7XHJcblxyXG4gICAgdGhpcy5fb3V0LnBpcGUocHJvY2Vzcy5zdGRvdXQpO1xyXG5cclxuICAgIGRlZmluZVByb3AodGhpcy5fb3V0LCAnY29sdW1ucycsICgpID0+IHByb2Nlc3Muc3Rkb3V0LmNvbHVtbnMpO1xyXG5cclxuICAgIHRoaXMuX3JlcGxTZXJ2ZXIgPSBzdGFydFJlcGwoe1xyXG4gICAgICBpbnB1dDogdGhpcy5faW4sXHJcbiAgICAgIG91dHB1dDogdGhpcy5fb3V0LFxyXG4gICAgICB0ZXJtaW5hbDogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2RlZmluZUFkZGl0aW9uYWxDb21tYW5kcygpO1xyXG5cclxuICAgIHRoaXMuX3JlcGxTZXJ2ZXIgPSBpbmplY3RCZWZvcmUoXHJcbiAgICAgIHRoaXMuX3JlcGxTZXJ2ZXIsXHJcbiAgICAgICdjb21wbGV0ZXInLFxyXG4gICAgICAobGluZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlKGxpbmUpXHJcbiAgICAgICAgICAudGhlbigocmV0cykgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXRzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVwbFNlcnZlciA9IGluamVjdEFmdGVyKHRoaXMuX3JlcGxTZXJ2ZXIsICdldmFsJywgcHJvbWlzaWZ5KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5pbnRlcmFjdGl2ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5fcmVwbFNlcnZlciA9IGluamVjdEFmdGVyKFxyXG4gICAgICAgIHRoaXMuX3JlcGxTZXJ2ZXIsXHJcbiAgICAgICAgJ2V2YWwnLFxyXG4gICAgICAgIG91dHB1dFRvU3Rkb3V0KG9wdGlvbnMucHJldHR5UHJpbnQpLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9yZXBsU2VydmVyID0gaW5qZWN0QWZ0ZXIodGhpcy5fcmVwbFNlcnZlciwgJ2V2YWwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBwcm9jZXNzLmV4aXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yZXBsU2VydmVyLm9uKCdleGl0JywgKCkgPT4gcHJvY2Vzcy5leGl0KCkpO1xyXG5cclxuICAgIHRoaXMuX2RlZmluZUJ1aWx0aW5WYXJzKHRoaXMuX3JlcGxTZXJ2ZXIuY29udGV4dCk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZXZhbFNjcmlwdCkge1xyXG4gICAgICB0aGlzLl9pbi53cml0ZShvcHRpb25zLmV2YWxTY3JpcHQgKyAnXFxuJywgJ3V0Zi04Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIF9kZWZpbmVBZGRpdGlvbmFsQ29tbWFuZHMoKSB7XHJcbiAgICBjb25zdCBjbGkgPSB0aGlzLl9jbGk7XHJcbiAgICBjb25zdCByZXBsU2VydmVyID0gdGhpcy5fcmVwbFNlcnZlcjtcclxuICAgIGlmICghcmVwbFNlcnZlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXBsU2VydmVyLmRlZmluZUNvbW1hbmQoJ2Nvbm5lY3Rpb25zJywge1xyXG4gICAgICBoZWxwOiAnTGlzdCBjdXJyZW50eSByZWdpc3RlcmVkIFNhbGVzZm9yY2UgY29ubmVjdGlvbnMnLFxyXG4gICAgICBhY3Rpb246IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBjbGkubGlzdENvbm5lY3Rpb25zKCk7XHJcbiAgICAgICAgcmVwbFNlcnZlci5kaXNwbGF5UHJvbXB0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJlcGxTZXJ2ZXIuZGVmaW5lQ29tbWFuZCgnY29ubmVjdCcsIHtcclxuICAgICAgaGVscDogJ0Nvbm5lY3QgdG8gU2FsZXNmb3JjZSBpbnN0YW5jZScsXHJcbiAgICAgIGFjdGlvbjogYXN5bmMgKC4uLmFyZ3M6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW25hbWUsIHBhc3N3b3JkXSA9IGFyZ3M7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gcGFzc3dvcmRcclxuICAgICAgICAgID8geyBjb25uZWN0aW9uOiBuYW1lLCB1c2VybmFtZTogbmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH1cclxuICAgICAgICAgIDogeyBjb25uZWN0aW9uOiBuYW1lLCB1c2VybmFtZTogbmFtZSB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBjbGkuY29ubmVjdChwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcGxTZXJ2ZXIuZGlzcGxheVByb21wdCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXBsU2VydmVyLmRlZmluZUNvbW1hbmQoJ2Rpc2Nvbm5lY3QnLCB7XHJcbiAgICAgIGhlbHA6ICdEaXNjb25uZWN0IGNvbm5lY3Rpb24gYW5kIGVyYXNlIGl0IGZyb20gcmVnaXN0cnknLFxyXG4gICAgICBhY3Rpb246IChuYW1lKSA9PiB7XHJcbiAgICAgICAgY2xpLmRpc2Nvbm5lY3QobmFtZSk7XHJcbiAgICAgICAgcmVwbFNlcnZlci5kaXNwbGF5UHJvbXB0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJlcGxTZXJ2ZXIuZGVmaW5lQ29tbWFuZCgndXNlJywge1xyXG4gICAgICBoZWxwOiAnU3BlY2lmeSBsb2dpbiBzZXJ2ZXIgdG8gZXN0YWJsaXNoIGNvbm5lY3Rpb24nLFxyXG4gICAgICBhY3Rpb246IChsb2dpblNlcnZlcikgPT4ge1xyXG4gICAgICAgIGNsaS5zZXRMb2dpblNlcnZlcihsb2dpblNlcnZlcik7XHJcbiAgICAgICAgcmVwbFNlcnZlci5kaXNwbGF5UHJvbXB0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJlcGxTZXJ2ZXIuZGVmaW5lQ29tbWFuZCgnYXV0aG9yaXplJywge1xyXG4gICAgICBoZWxwOiAnQ29ubmVjdCB0byBTYWxlc2ZvcmNlIHVzaW5nIE9BdXRoMiBhdXRob3JpemF0aW9uIGZsb3cnLFxyXG4gICAgICBhY3Rpb246IGFzeW5jIChjbGllbnROYW1lKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IGNsaS5hdXRob3JpemUoY2xpZW50TmFtZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVwbFNlcnZlci5kaXNwbGF5UHJvbXB0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJlcGxTZXJ2ZXIuZGVmaW5lQ29tbWFuZCgncmVnaXN0ZXInLCB7XHJcbiAgICAgIGhlbHA6ICdSZWdpc3RlciBPQXV0aDIgY2xpZW50IGluZm9ybWF0aW9uJyxcclxuICAgICAgYWN0aW9uOiBhc3luYyAoLi4uYXJnczogc3RyaW5nW10pID0+IHtcclxuICAgICAgICBjb25zdCBbXHJcbiAgICAgICAgICBjbGllbnROYW1lLFxyXG4gICAgICAgICAgY2xpZW50SWQsXHJcbiAgICAgICAgICBjbGllbnRTZWNyZXQsXHJcbiAgICAgICAgICByZWRpcmVjdFVyaSxcclxuICAgICAgICAgIGxvZ2luVXJsLFxyXG4gICAgICAgIF0gPSBhcmdzO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHsgY2xpZW50SWQsIGNsaWVudFNlY3JldCwgcmVkaXJlY3RVcmksIGxvZ2luVXJsIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IGNsaS5yZWdpc3RlcihjbGllbnROYW1lLCBjb25maWcpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcGxTZXJ2ZXIuZGlzcGxheVByb21wdCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXBsU2VydmVyLmRlZmluZUNvbW1hbmQoJ29wZW4nLCB7XHJcbiAgICAgIGhlbHA6ICdPcGVuIFNhbGVzZm9yY2Ugd2ViIHBhZ2UgdXNpbmcgZXN0YWJsaXNoZWQgY29ubmVjdGlvbicsXHJcbiAgICAgIGFjdGlvbjogKHVybCkgPT4ge1xyXG4gICAgICAgIGNsaS5vcGVuVXJsVXNpbmdTZXNzaW9uKHVybCk7XHJcbiAgICAgICAgcmVwbFNlcnZlci5kaXNwbGF5UHJvbXB0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgcGF1c2UoKSB7XHJcbiAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xyXG4gICAgaWYgKHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSkge1xyXG4gICAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XHJcbiAgICBpZiAocHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKSB7XHJcbiAgICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgYXN5bmMgY29tcGxldGUobGluZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSBsaW5lLnJlcGxhY2UoL15cXHMrLywgJycpLnNwbGl0KC9cXHMrLyk7XHJcbiAgICBjb25zdCBbY29tbWFuZCwga2V5d29yZCA9ICcnXSA9IHRva2VucztcclxuICAgIGlmIChjb21tYW5kWzBdID09PSAnLicgJiYgdG9rZW5zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICBsZXQgY2FuZGlkYXRlczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgaWYgKGNvbW1hbmQgPT09ICcuY29ubmVjdCcgfHwgY29tbWFuZCA9PT0gJy5kaXNjb25uZWN0Jykge1xyXG4gICAgICAgIGNhbmRpZGF0ZXMgPSBhd2FpdCB0aGlzLl9jbGkuZ2V0Q29ubmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gJy5hdXRob3JpemUnKSB7XHJcbiAgICAgICAgY2FuZGlkYXRlcyA9IGF3YWl0IHRoaXMuX2NsaS5nZXRDbGllbnROYW1lcygpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09ICcudXNlJykge1xyXG4gICAgICAgIGNhbmRpZGF0ZXMgPSBbJ3Byb2R1Y3Rpb24nLCAnc2FuZGJveCddO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLmZpbHRlcigobmFtZSkgPT4gbmFtZS5pbmRleE9mKGtleXdvcmQpID09PSAwKTtcclxuICAgICAgcmV0dXJuIFtjYW5kaWRhdGVzLCBrZXl3b3JkXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcCBhbGwganNmb3JjZSBvYmplY3QgdG8gUkVQTCBjb250ZXh0XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfZGVmaW5lQnVpbHRpblZhcnMoY29udGV4dDogeyBbdmFyTmFtZTogc3RyaW5nXTogYW55IH0pIHtcclxuICAgIGNvbnN0IGNsaSA9IHRoaXMuX2NsaTtcclxuXHJcbiAgICAvLyBkZWZpbmUgc2FsZXNmb3JjZSBwYWNrYWdlIHJvb3Qgb2JqZWN0c1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4ganNmb3JjZSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGpzZm9yY2UsIGtleSkgJiZcclxuICAgICAgICAhKGdsb2JhbCBhcyBhbnkpW2tleV1cclxuICAgICAgKSB7XHJcbiAgICAgICAgY29udGV4dFtrZXldID0gKGpzZm9yY2UgYXMgYW55KVtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBleHBvc2UganNmb3JjZSBwYWNrYWdlIHJvb3Qgb2JqZWN0IGluIGNvbnRleHQuXHJcbiAgICBjb250ZXh0LmpzZm9yY2UgPSBqc2ZvcmNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3h5RnVuYyhwcm9wOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbm4gPSBjbGkuZ2V0Q3VycmVudENvbm5lY3Rpb24oKTtcclxuICAgICAgICByZXR1cm4gKGNvbm4gYXMgYW55KVtwcm9wXSguLi5hcmdzKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm94eUFjY2Vzc29yKHByb3A6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbm4gPSBjbGkuZ2V0Q3VycmVudENvbm5lY3Rpb24oKTtcclxuICAgICAgICByZXR1cm4gKGNvbm4gYXMgYW55KVtwcm9wXTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25uID0gY2xpLmdldEN1cnJlbnRDb25uZWN0aW9uKCk7XHJcbiAgICAvLyBsaXN0IGFsbCBwcm9wcyBpbiBjb25uZWN0aW9uIGluc3RhbmNlLCBvdGhlciB0aGFuIEV2ZW50RW1pdHRlciBvciBvYmplY3QgYnVpbHQtaW4gbWV0aG9kc1xyXG4gICAgY29uc3QgcHJvcHM6IHsgW3Byb3A6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgbGV0IG86IG9iamVjdCA9IGNvbm47XHJcbiAgICB3aGlsZSAobyAmJiBvICE9PSBFdmVudEVtaXR0ZXIucHJvdG90eXBlICYmIG8gIT09IE9iamVjdC5wcm90b3R5cGUpIHtcclxuICAgICAgZm9yIChjb25zdCBwIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG8pKSB7XHJcbiAgICAgICAgaWYgKHAgIT09ICdjb25zdHJ1Y3RvcicpIHtcclxuICAgICAgICAgIHByb3BzW3BdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhwcm9wcykpIHtcclxuICAgICAgaWYgKHR5cGVvZiAoZ2xvYmFsIGFzIGFueSlbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gYXZvaWQgZ2xvYmFsIG92ZXJyaWRlXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByb3AuaW5kZXhPZignXycpID09PSAwKSB7XHJcbiAgICAgICAgLy8gaWdub3JlIHByaXZhdGVcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNGdW5jdGlvbigoY29ubiBhcyBhbnkpW3Byb3BdKSkge1xyXG4gICAgICAgIGNvbnRleHRbcHJvcF0gPSBjcmVhdGVQcm94eUZ1bmMocHJvcCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoKGNvbm4gYXMgYW55KVtwcm9wXSkpIHtcclxuICAgICAgICBkZWZpbmVQcm9wKGNvbnRleHQsIHByb3AsIGNyZWF0ZVByb3h5QWNjZXNzb3IocHJvcCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXhwb3NlIGRlZmF1bHQgY29ubmVjdGlvbiBhcyBcIiRjb25uXCJcclxuICAgIGRlZmluZVByb3AoY29udGV4dCwgJyRjb25uJywgKCkgPT4ge1xyXG4gICAgICByZXR1cm4gY2xpLmdldEN1cnJlbnRDb25uZWN0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19