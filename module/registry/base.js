"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.BaseRegistry = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _connection = _interopRequireDefault(require("../connection"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context10; (0, _forEach["default"])(_context10 = ownKeys(Object(source), true)).call(_context10, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context11; (0, _forEach["default"])(_context11 = ownKeys(Object(source))).call(_context11, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 *
 */
var BaseRegistry = /*#__PURE__*/function () {
  function BaseRegistry() {
    (0, _classCallCheck2["default"])(this, BaseRegistry);
    (0, _defineProperty3["default"])(this, "_registryConfig", {});
  }

  (0, _createClass2["default"])(BaseRegistry, [{
    key: "_saveConfig",
    value: function _saveConfig() {
      throw new Error('_saveConfig must be implemented in subclass');
    }
  }, {
    key: "_getClients",
    value: function _getClients() {
      return this._registryConfig.clients || (this._registryConfig.clients = {});
    }
  }, {
    key: "_getConnections",
    value: function _getConnections() {
      return this._registryConfig.connections || (this._registryConfig.connections = {});
    }
  }, {
    key: "getConnectionNames",
    value: function () {
      var _getConnectionNames = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", (0, _keys["default"])(this._getConnections()));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getConnectionNames() {
        return _getConnectionNames.apply(this, arguments);
      }

      return getConnectionNames;
    }()
  }, {
    key: "getConnection",
    value: function () {
      var _getConnection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(name) {
        var config;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getConnectionConfig(name);

              case 2:
                config = _context2.sent;
                return _context2.abrupt("return", config ? new _connection["default"](config) : null);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getConnection(_x) {
        return _getConnection.apply(this, arguments);
      }

      return getConnection;
    }()
  }, {
    key: "getConnectionConfig",
    value: function () {
      var _getConnectionConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(name) {
        var connections, connConfig, client, connConfig_;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!name) {
                  name = this._registryConfig['default'];
                }

                connections = this._getConnections();
                connConfig = name ? connections[name] : undefined;

                if (connConfig) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", null);

              case 5:
                client = connConfig.client, connConfig_ = (0, _objectWithoutProperties2["default"])(connConfig, ["client"]);

                if (!client) {
                  _context3.next = 18;
                  break;
                }

                _context3.t0 = _objectSpread;
                _context3.t1 = _objectSpread({}, connConfig_);
                _context3.t2 = {};
                _context3.t3 = _objectSpread;
                _context3.t4 = {};
                _context3.next = 14;
                return this.getClientConfig(client);

              case 14:
                _context3.t5 = _context3.sent;
                _context3.t6 = (0, _context3.t3)(_context3.t4, _context3.t5);
                _context3.t7 = {
                  oauth2: _context3.t6
                };
                return _context3.abrupt("return", (0, _context3.t0)(_context3.t1, _context3.t2, _context3.t7));

              case 18:
                return _context3.abrupt("return", connConfig_);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getConnectionConfig(_x2) {
        return _getConnectionConfig.apply(this, arguments);
      }

      return getConnectionConfig;
    }()
  }, {
    key: "saveConnectionConfig",
    value: function () {
      var _saveConnectionConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(name, connConfig) {
        var connections, oauth2, connConfig_, persistConnConfig, clientName;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                connections = this._getConnections();
                oauth2 = connConfig.oauth2, connConfig_ = (0, _objectWithoutProperties2["default"])(connConfig, ["oauth2"]);
                persistConnConfig = connConfig_;

                if (oauth2) {
                  clientName = this._findClientName(oauth2);

                  if (clientName) {
                    persistConnConfig = _objectSpread(_objectSpread({}, persistConnConfig), {}, {
                      client: clientName
                    });
                  }

                  delete connConfig.oauth2;
                }

                connections[name] = persistConnConfig;

                this._saveConfig();

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function saveConnectionConfig(_x3, _x4) {
        return _saveConnectionConfig.apply(this, arguments);
      }

      return saveConnectionConfig;
    }()
  }, {
    key: "_findClientName",
    value: function _findClientName(_ref) {
      var clientId = _ref.clientId,
          loginUrl = _ref.loginUrl;

      var clients = this._getClients();

      for (var _i = 0, _Object$keys2 = (0, _keys["default"])(clients); _i < _Object$keys2.length; _i++) {
        var name = _Object$keys2[_i];
        var client = clients[name];

        if (client.clientId === clientId && (client.loginUrl || 'https://login.salesforce.com') === loginUrl) {
          return name;
        }
      }

      return null;
    }
  }, {
    key: "setDefaultConnection",
    value: function () {
      var _setDefaultConnection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(name) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this._registryConfig['default'] = name;

                this._saveConfig();

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setDefaultConnection(_x5) {
        return _setDefaultConnection.apply(this, arguments);
      }

      return setDefaultConnection;
    }()
  }, {
    key: "removeConnectionConfig",
    value: function () {
      var _removeConnectionConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(name) {
        var connections;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                connections = this._getConnections();
                delete connections[name];

                this._saveConfig();

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function removeConnectionConfig(_x6) {
        return _removeConnectionConfig.apply(this, arguments);
      }

      return removeConnectionConfig;
    }()
  }, {
    key: "getClientConfig",
    value: function () {
      var _getClientConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(name) {
        var clients, clientConfig;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                clients = this._getClients();
                clientConfig = clients[name];
                return _context7.abrupt("return", clientConfig && _objectSpread({}, clientConfig));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getClientConfig(_x7) {
        return _getClientConfig.apply(this, arguments);
      }

      return getClientConfig;
    }()
  }, {
    key: "getClientNames",
    value: function () {
      var _getClientNames = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", (0, _keys["default"])(this._getClients()));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getClientNames() {
        return _getClientNames.apply(this, arguments);
      }

      return getClientNames;
    }()
  }, {
    key: "registerClientConfig",
    value: function () {
      var _registerClientConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(name, clientConfig) {
        var clients;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                clients = this._getClients();
                clients[name] = clientConfig;

                this._saveConfig();

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function registerClientConfig(_x8, _x9) {
        return _registerClientConfig.apply(this, arguments);
      }

      return registerClientConfig;
    }()
  }]);
  return BaseRegistry;
}();

exports.BaseRegistry = BaseRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS9iYXNlLnRzIl0sIm5hbWVzIjpbIkJhc2VSZWdpc3RyeSIsIkVycm9yIiwiX3JlZ2lzdHJ5Q29uZmlnIiwiY2xpZW50cyIsImNvbm5lY3Rpb25zIiwiX2dldENvbm5lY3Rpb25zIiwibmFtZSIsImdldENvbm5lY3Rpb25Db25maWciLCJjb25maWciLCJDb25uZWN0aW9uIiwiY29ubkNvbmZpZyIsInVuZGVmaW5lZCIsImNsaWVudCIsImNvbm5Db25maWdfIiwiZ2V0Q2xpZW50Q29uZmlnIiwib2F1dGgyIiwicGVyc2lzdENvbm5Db25maWciLCJjbGllbnROYW1lIiwiX2ZpbmRDbGllbnROYW1lIiwiX3NhdmVDb25maWciLCJjbGllbnRJZCIsImxvZ2luVXJsIiwiX2dldENsaWVudHMiLCJjbGllbnRDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFVQTtBQUNBO0FBQ0E7SUFDYUEsWTs7OzhEQUN1QixFOzs7OztrQ0FFcEI7QUFDWixZQUFNLElBQUlDLEtBQUosQ0FBVSw2Q0FBVixDQUFOO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsZUFBTCxDQUFxQkMsT0FBckIsS0FBaUMsS0FBS0QsZUFBTCxDQUFxQkMsT0FBckIsR0FBK0IsRUFBaEUsQ0FBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQ0UsS0FBS0QsZUFBTCxDQUFxQkUsV0FBckIsS0FDQyxLQUFLRixlQUFMLENBQXFCRSxXQUFyQixHQUFtQyxFQURwQyxDQURGO0FBSUQ7Ozs7Ozs7OztpREFHUSxzQkFBWSxLQUFLQyxlQUFMLEVBQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsySEFHc0NDLEk7Ozs7Ozs7dUJBQ3hCLEtBQUtDLG1CQUFMLENBQXlCRCxJQUF6QixDOzs7QUFBZkUsZ0JBQUFBLE07a0RBQ0NBLE1BQU0sR0FBRyxJQUFJQyxzQkFBSixDQUFrQkQsTUFBbEIsQ0FBSCxHQUErQixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lJQUdwQkYsSTs7Ozs7O0FBQ3hCLG9CQUFJLENBQUNBLElBQUwsRUFBVztBQUNUQSxrQkFBQUEsSUFBSSxHQUFHLEtBQUtKLGVBQUwsQ0FBcUIsU0FBckIsQ0FBUDtBQUNEOztBQUNLRSxnQkFBQUEsVyxHQUFjLEtBQUtDLGVBQUwsRTtBQUNkSyxnQkFBQUEsVSxHQUFhSixJQUFJLEdBQUdGLFdBQVcsQ0FBQ0UsSUFBRCxDQUFkLEdBQXVCSyxTOztvQkFDekNELFU7Ozs7O2tEQUNJLEk7OztBQUVERSxnQkFBQUEsTSxHQUEyQkYsVSxDQUEzQkUsTSxFQUFXQyxXLDZDQUFnQkgsVTs7cUJBQy9CRSxNOzs7Ozs7aURBRUdDLFc7Ozs7O3VCQUNpQixLQUFLQyxlQUFMLENBQXFCRixNQUFyQixDOzs7Ozs7QUFBcEJHLGtCQUFBQSxNOzs7OztrREFHR0YsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrSUFHa0JQLEksRUFBY0ksVTs7Ozs7O0FBQ2pDTixnQkFBQUEsVyxHQUFjLEtBQUtDLGVBQUwsRTtBQUNaVSxnQkFBQUEsTSxHQUEyQkwsVSxDQUEzQkssTSxFQUFXRixXLDZDQUFnQkgsVTtBQUMvQk0sZ0JBQUFBLGlCLEdBQTZDSCxXOztBQUNqRCxvQkFBSUUsTUFBSixFQUFZO0FBQ0pFLGtCQUFBQSxVQURJLEdBQ1MsS0FBS0MsZUFBTCxDQUFxQkgsTUFBckIsQ0FEVDs7QUFFVixzQkFBSUUsVUFBSixFQUFnQjtBQUNkRCxvQkFBQUEsaUJBQWlCLG1DQUFRQSxpQkFBUjtBQUEyQkosc0JBQUFBLE1BQU0sRUFBRUs7QUFBbkMsc0JBQWpCO0FBQ0Q7O0FBQ0QseUJBQU9QLFVBQVUsQ0FBQ0ssTUFBbEI7QUFDRDs7QUFDRFgsZ0JBQUFBLFdBQVcsQ0FBQ0UsSUFBRCxDQUFYLEdBQW9CVSxpQkFBcEI7O0FBQ0EscUJBQUtHLFdBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHb0Q7QUFBQSxVQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsVUFBMUJDLFFBQTBCLFFBQTFCQSxRQUEwQjs7QUFDcEQsVUFBTWxCLE9BQU8sR0FBRyxLQUFLbUIsV0FBTCxFQUFoQjs7QUFDQSx1Q0FBbUIsc0JBQVluQixPQUFaLENBQW5CLG1DQUF5QztBQUFwQyxZQUFNRyxJQUFJLG9CQUFWO0FBQ0gsWUFBTU0sTUFBTSxHQUFHVCxPQUFPLENBQUNHLElBQUQsQ0FBdEI7O0FBQ0EsWUFDRU0sTUFBTSxDQUFDUSxRQUFQLEtBQW9CQSxRQUFwQixJQUNBLENBQUNSLE1BQU0sQ0FBQ1MsUUFBUCxJQUFtQiw4QkFBcEIsTUFBd0RBLFFBRjFELEVBR0U7QUFDQSxpQkFBT2YsSUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7a0lBRTBCQSxJOzs7OztBQUN6QixxQkFBS0osZUFBTCxDQUFxQixTQUFyQixJQUFrQ0ksSUFBbEM7O0FBQ0EscUJBQUthLFdBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0lBRzJCYixJOzs7Ozs7QUFDckJGLGdCQUFBQSxXLEdBQWMsS0FBS0MsZUFBTCxFO0FBQ3BCLHVCQUFPRCxXQUFXLENBQUNFLElBQUQsQ0FBbEI7O0FBQ0EscUJBQUthLFdBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkhBR29CYixJOzs7Ozs7QUFDZEgsZ0JBQUFBLE8sR0FBVSxLQUFLbUIsV0FBTCxFO0FBQ1ZDLGdCQUFBQSxZLEdBQWVwQixPQUFPLENBQUNHLElBQUQsQztrREFDckJpQixZQUFZLHNCQUFTQSxZQUFULEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJWixzQkFBWSxLQUFLRCxXQUFMLEVBQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrSUFHa0JoQixJLEVBQWNpQixZOzs7Ozs7QUFDakNwQixnQkFBQUEsTyxHQUFVLEtBQUttQixXQUFMLEU7QUFDaEJuQixnQkFBQUEsT0FBTyxDQUFDRyxJQUFELENBQVAsR0FBZ0JpQixZQUFoQjs7QUFDQSxxQkFBS0osV0FBTCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4uL2Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQge1xyXG4gIFJlZ2lzdHJ5Q29uZmlnLFxyXG4gIFJlZ2lzdHJ5LFxyXG4gIENvbm5lY3Rpb25Db25maWcsXHJcbiAgUGVyc2lzdENvbm5lY3Rpb25Db25maWcsXHJcbiAgQ2xpZW50Q29uZmlnLFxyXG59IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlUmVnaXN0cnkgaW1wbGVtZW50cyBSZWdpc3RyeSB7XHJcbiAgX3JlZ2lzdHJ5Q29uZmlnOiBSZWdpc3RyeUNvbmZpZyA9IHt9O1xyXG5cclxuICBfc2F2ZUNvbmZpZygpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignX3NhdmVDb25maWcgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzcycpO1xyXG4gIH1cclxuXHJcbiAgX2dldENsaWVudHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVnaXN0cnlDb25maWcuY2xpZW50cyB8fCAodGhpcy5fcmVnaXN0cnlDb25maWcuY2xpZW50cyA9IHt9KTtcclxuICB9XHJcblxyXG4gIF9nZXRDb25uZWN0aW9ucygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuX3JlZ2lzdHJ5Q29uZmlnLmNvbm5lY3Rpb25zIHx8XHJcbiAgICAgICh0aGlzLl9yZWdpc3RyeUNvbmZpZy5jb25uZWN0aW9ucyA9IHt9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldENvbm5lY3Rpb25OYW1lcygpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9nZXRDb25uZWN0aW9ucygpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldENvbm5lY3Rpb248UyBleHRlbmRzIFNjaGVtYSA9IFNjaGVtYT4obmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCB0aGlzLmdldENvbm5lY3Rpb25Db25maWcobmFtZSk7XHJcbiAgICByZXR1cm4gY29uZmlnID8gbmV3IENvbm5lY3Rpb248Uz4oY29uZmlnKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDb25uZWN0aW9uQ29uZmlnKG5hbWU/OiBzdHJpbmcpIHtcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICBuYW1lID0gdGhpcy5fcmVnaXN0cnlDb25maWdbJ2RlZmF1bHQnXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbm5lY3Rpb25zID0gdGhpcy5fZ2V0Q29ubmVjdGlvbnMoKTtcclxuICAgIGNvbnN0IGNvbm5Db25maWcgPSBuYW1lID8gY29ubmVjdGlvbnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoIWNvbm5Db25maWcpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGNsaWVudCwgLi4uY29ubkNvbmZpZ18gfSA9IGNvbm5Db25maWc7XHJcbiAgICBpZiAoY2xpZW50KSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY29ubkNvbmZpZ18sXHJcbiAgICAgICAgb2F1dGgyOiB7IC4uLihhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZyhjbGllbnQpKSB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbm5Db25maWdfO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2F2ZUNvbm5lY3Rpb25Db25maWcobmFtZTogc3RyaW5nLCBjb25uQ29uZmlnOiBDb25uZWN0aW9uQ29uZmlnKSB7XHJcbiAgICBjb25zdCBjb25uZWN0aW9ucyA9IHRoaXMuX2dldENvbm5lY3Rpb25zKCk7XHJcbiAgICBjb25zdCB7IG9hdXRoMiwgLi4uY29ubkNvbmZpZ18gfSA9IGNvbm5Db25maWc7XHJcbiAgICBsZXQgcGVyc2lzdENvbm5Db25maWc6IFBlcnNpc3RDb25uZWN0aW9uQ29uZmlnID0gY29ubkNvbmZpZ187XHJcbiAgICBpZiAob2F1dGgyKSB7XHJcbiAgICAgIGNvbnN0IGNsaWVudE5hbWUgPSB0aGlzLl9maW5kQ2xpZW50TmFtZShvYXV0aDIpO1xyXG4gICAgICBpZiAoY2xpZW50TmFtZSkge1xyXG4gICAgICAgIHBlcnNpc3RDb25uQ29uZmlnID0geyAuLi5wZXJzaXN0Q29ubkNvbmZpZywgY2xpZW50OiBjbGllbnROYW1lIH07XHJcbiAgICAgIH1cclxuICAgICAgZGVsZXRlIGNvbm5Db25maWcub2F1dGgyO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdGlvbnNbbmFtZV0gPSBwZXJzaXN0Q29ubkNvbmZpZztcclxuICAgIHRoaXMuX3NhdmVDb25maWcoKTtcclxuICB9XHJcblxyXG4gIF9maW5kQ2xpZW50TmFtZSh7IGNsaWVudElkLCBsb2dpblVybCB9OiBDbGllbnRDb25maWcpIHtcclxuICAgIGNvbnN0IGNsaWVudHMgPSB0aGlzLl9nZXRDbGllbnRzKCk7XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMoY2xpZW50cykpIHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gY2xpZW50c1tuYW1lXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNsaWVudC5jbGllbnRJZCA9PT0gY2xpZW50SWQgJiZcclxuICAgICAgICAoY2xpZW50LmxvZ2luVXJsIHx8ICdodHRwczovL2xvZ2luLnNhbGVzZm9yY2UuY29tJykgPT09IGxvZ2luVXJsXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNldERlZmF1bHRDb25uZWN0aW9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcmVnaXN0cnlDb25maWdbJ2RlZmF1bHQnXSA9IG5hbWU7XHJcbiAgICB0aGlzLl9zYXZlQ29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZW1vdmVDb25uZWN0aW9uQ29uZmlnKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgY29ubmVjdGlvbnMgPSB0aGlzLl9nZXRDb25uZWN0aW9ucygpO1xyXG4gICAgZGVsZXRlIGNvbm5lY3Rpb25zW25hbWVdO1xyXG4gICAgdGhpcy5fc2F2ZUNvbmZpZygpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2xpZW50cyA9IHRoaXMuX2dldENsaWVudHMoKTtcclxuICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IGNsaWVudHNbbmFtZV07XHJcbiAgICByZXR1cm4gY2xpZW50Q29uZmlnICYmIHsgLi4uY2xpZW50Q29uZmlnIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDbGllbnROYW1lcygpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9nZXRDbGllbnRzKCkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVnaXN0ZXJDbGllbnRDb25maWcobmFtZTogc3RyaW5nLCBjbGllbnRDb25maWc6IENsaWVudENvbmZpZykge1xyXG4gICAgY29uc3QgY2xpZW50cyA9IHRoaXMuX2dldENsaWVudHMoKTtcclxuICAgIGNsaWVudHNbbmFtZV0gPSBjbGllbnRDb25maWc7XHJcbiAgICB0aGlzLl9zYXZlQ29uZmlnKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==