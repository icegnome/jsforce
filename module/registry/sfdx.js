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

exports.SfdxRegistry = void 0;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _child_process = require("child_process");

var _connection = _interopRequireDefault(require("../connection"));

function isNotNullOrUndefined(v) {
  return v != null;
}
/**
 *
 */


var SfdxRegistry = /*#__PURE__*/function () {
  function SfdxRegistry(_ref) {
    var cliPath = _ref.cliPath;
    (0, _classCallCheck2["default"])(this, SfdxRegistry);
    (0, _defineProperty2["default"])(this, "_cliPath", void 0);
    (0, _defineProperty2["default"])(this, "_orgList", void 0);
    (0, _defineProperty2["default"])(this, "_orgInfoMap", {});
    (0, _defineProperty2["default"])(this, "_defaultOrgInfo", void 0);
    this._cliPath = cliPath;
  }

  (0, _createClass2["default"])(SfdxRegistry, [{
    key: "_createCommand",
    value: function _createCommand(command) {
      var _context, _context2, _context3, _context4;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      return (0, _concat["default"])(_context = (0, _concat["default"])(_context2 = (0, _concat["default"])(_context3 = "".concat(this._cliPath ? this._cliPath + '/' : '', "sfdx ")).call(_context3, command, " ")).call(_context2, (0, _map["default"])(_context4 = (0, _keys["default"])(options)).call(_context4, function (option) {
        var _context5, _context6;

        return (0, _concat["default"])(_context5 = (0, _concat["default"])(_context6 = "".concat(option.length > 1 ? '--' : '-')).call(_context6, option)).call(_context5, options[option] != null ? ' ' + options[option] : '');
      }).join(' '), " --json ")).call(_context, args.join(' '));
    }
  }, {
    key: "_execCommand",
    value: function () {
      var _execCommand2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(command) {
        var options,
            args,
            cmd,
            buf,
            ret,
            err,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                args = _args.length > 2 && _args[2] !== undefined ? _args[2] : [];
                cmd = this._createCommand(command, options, args);
                _context7.next = 5;
                return new _promise["default"](function (resolve, reject) {
                  (0, _child_process.exec)(cmd, function (err, ret) {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(ret);
                    }
                  });
                });

              case 5:
                buf = _context7.sent;
                ret = JSON.parse(buf.toString());

                if (!(ret.status === 0 && ret.result)) {
                  _context7.next = 11;
                  break;
                }

                return _context7.abrupt("return", ret.result);

              case 11:
                err = new Error(ret.message);
                err.name = ret.name;
                throw err;

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee, this);
      }));

      function _execCommand(_x) {
        return _execCommand2.apply(this, arguments);
      }

      return _execCommand;
    }()
  }, {
    key: "_getOrgList",
    value: function () {
      var _getOrgList2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!this._orgList) {
                  this._orgList = this._execCommand('force:org:list');
                }

                return _context8.abrupt("return", this._orgList);

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee2, this);
      }));

      function _getOrgList() {
        return _getOrgList2.apply(this, arguments);
      }

      return _getOrgList;
    }()
  }, {
    key: "getConnectionNames",
    value: function () {
      var _getConnectionNames = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _context9, _context10, _context11;

        var _yield$this$_getOrgLi, nonScratchOrgs, scratchOrgs;

        return _regenerator["default"].wrap(function _callee3$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._getOrgList();

              case 2:
                _yield$this$_getOrgLi = _context12.sent;
                nonScratchOrgs = _yield$this$_getOrgLi.nonScratchOrgs;
                scratchOrgs = _yield$this$_getOrgLi.scratchOrgs;
                return _context12.abrupt("return", (0, _concat["default"])(_context9 = []).call(_context9, (0, _toConsumableArray2["default"])((0, _filter["default"])(_context10 = (0, _map["default"])(nonScratchOrgs).call(nonScratchOrgs, function (o) {
                  return o.alias;
                })).call(_context10, isNotNullOrUndefined)), (0, _toConsumableArray2["default"])((0, _filter["default"])(_context11 = (0, _map["default"])(scratchOrgs).call(scratchOrgs, function (o) {
                  return o.alias;
                })).call(_context11, isNotNullOrUndefined)), (0, _toConsumableArray2["default"])((0, _map["default"])(nonScratchOrgs).call(nonScratchOrgs, function (o) {
                  return o.username;
                })), (0, _toConsumableArray2["default"])((0, _map["default"])(scratchOrgs).call(scratchOrgs, function (o) {
                  return o.username;
                }))));

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee3, this);
      }));

      function getConnectionNames() {
        return _getConnectionNames.apply(this, arguments);
      }

      return getConnectionNames;
    }()
  }, {
    key: "getConnection",
    value: function () {
      var _getConnection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(name) {
        var config;
        return _regenerator["default"].wrap(function _callee4$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.getConnectionConfig(name);

              case 2:
                config = _context13.sent;
                return _context13.abrupt("return", config ? new _connection["default"](config) : null);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee4, this);
      }));

      function getConnection(_x2) {
        return _getConnection.apply(this, arguments);
      }

      return getConnection;
    }()
  }, {
    key: "_getOrgInfo",
    value: function () {
      var _getOrgInfo2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(username) {
        var options, pOrgInfo, orgInfo;
        return _regenerator["default"].wrap(function _callee5$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                options = username ? {
                  u: username
                } : {};

                if (!username || !this._orgInfoMap[username]) {
                  pOrgInfo = this._execCommand('force:org:display', options);

                  this._memoOrgInfo(pOrgInfo, username);
                }

                orgInfo = username ? this._orgInfoMap[username] : this._defaultOrgInfo;

                if (orgInfo) {
                  _context14.next = 5;
                  break;
                }

                throw new Error('no orginfo found');

              case 5:
                return _context14.abrupt("return", orgInfo);

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee5, this);
      }));

      function _getOrgInfo(_x3) {
        return _getOrgInfo2.apply(this, arguments);
      }

      return _getOrgInfo;
    }()
  }, {
    key: "_memoOrgInfo",
    value: function _memoOrgInfo(pOrgInfo, username) {
      var _this = this;

      var pOrgInfo_ = pOrgInfo.then(function (orgInfo) {
        _this._orgInfoMap[orgInfo.username] = pOrgInfo_;

        if (orgInfo.alias) {
          _this._orgInfoMap[orgInfo.alias] = pOrgInfo_;
        }

        return orgInfo;
      });

      if (username) {
        this._orgInfoMap[username] = pOrgInfo_;
      } else {
        this._defaultOrgInfo = pOrgInfo_;
      }
    }
  }, {
    key: "getConnectionConfig",
    value: function () {
      var _getConnectionConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(name) {
        var orgInfo, accessToken, instanceUrl, loginUrl;
        return _regenerator["default"].wrap(function _callee6$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._getOrgInfo(name);

              case 2:
                orgInfo = _context15.sent;

                if (orgInfo) {
                  _context15.next = 5;
                  break;
                }

                return _context15.abrupt("return", null);

              case 5:
                accessToken = orgInfo.accessToken, instanceUrl = orgInfo.instanceUrl, loginUrl = orgInfo.loginUrl;
                return _context15.abrupt("return", {
                  accessToken: accessToken,
                  instanceUrl: instanceUrl,
                  loginUrl: loginUrl
                });

              case 7:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee6, this);
      }));

      function getConnectionConfig(_x4) {
        return _getConnectionConfig.apply(this, arguments);
      }

      return getConnectionConfig;
    }()
  }, {
    key: "saveConnectionConfig",
    value: function () {
      var _saveConnectionConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_name, _connConfig) {
        return _regenerator["default"].wrap(function _callee7$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee7);
      }));

      function saveConnectionConfig(_x5, _x6) {
        return _saveConnectionConfig.apply(this, arguments);
      }

      return saveConnectionConfig;
    }()
  }, {
    key: "setDefaultConnection",
    value: function () {
      var _setDefaultConnection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(_name) {
        return _regenerator["default"].wrap(function _callee8$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee8);
      }));

      function setDefaultConnection(_x7) {
        return _setDefaultConnection.apply(this, arguments);
      }

      return setDefaultConnection;
    }()
  }, {
    key: "removeConnectionConfig",
    value: function () {
      var _removeConnectionConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(name) {
        return _regenerator["default"].wrap(function _callee9$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this._execCommand('force:org:delete', {
                  u: name
                });

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee9, this);
      }));

      function removeConnectionConfig(_x8) {
        return _removeConnectionConfig.apply(this, arguments);
      }

      return removeConnectionConfig;
    }()
  }, {
    key: "getClientConfig",
    value: function () {
      var _getClientConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(_name) {
        return _regenerator["default"].wrap(function _callee10$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", null);

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee10);
      }));

      function getClientConfig(_x9) {
        return _getClientConfig.apply(this, arguments);
      }

      return getClientConfig;
    }()
  }, {
    key: "getClientNames",
    value: function () {
      var _getClientNames = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        return _regenerator["default"].wrap(function _callee11$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", []);

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee11);
      }));

      function getClientNames() {
        return _getClientNames.apply(this, arguments);
      }

      return getClientNames;
    }()
  }, {
    key: "registerClientConfig",
    value: function () {
      var _registerClientConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(_name, _clientConfig) {
        return _regenerator["default"].wrap(function _callee12$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee12);
      }));

      function registerClientConfig(_x10, _x11) {
        return _registerClientConfig.apply(this, arguments);
      }

      return registerClientConfig;
    }()
  }]);
  return SfdxRegistry;
}();

exports.SfdxRegistry = SfdxRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS9zZmR4LnRzIl0sIm5hbWVzIjpbImlzTm90TnVsbE9yVW5kZWZpbmVkIiwidiIsIlNmZHhSZWdpc3RyeSIsImNsaVBhdGgiLCJfY2xpUGF0aCIsImNvbW1hbmQiLCJvcHRpb25zIiwiYXJncyIsIm9wdGlvbiIsImxlbmd0aCIsImpvaW4iLCJjbWQiLCJfY3JlYXRlQ29tbWFuZCIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJyZXQiLCJidWYiLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsInN0YXR1cyIsInJlc3VsdCIsIkVycm9yIiwibWVzc2FnZSIsIm5hbWUiLCJfb3JnTGlzdCIsIl9leGVjQ29tbWFuZCIsIl9nZXRPcmdMaXN0Iiwibm9uU2NyYXRjaE9yZ3MiLCJzY3JhdGNoT3JncyIsIm8iLCJhbGlhcyIsInVzZXJuYW1lIiwiZ2V0Q29ubmVjdGlvbkNvbmZpZyIsImNvbmZpZyIsIkNvbm5lY3Rpb24iLCJ1IiwiX29yZ0luZm9NYXAiLCJwT3JnSW5mbyIsIl9tZW1vT3JnSW5mbyIsIm9yZ0luZm8iLCJfZGVmYXVsdE9yZ0luZm8iLCJwT3JnSW5mb18iLCJ0aGVuIiwiX2dldE9yZ0luZm8iLCJhY2Nlc3NUb2tlbiIsImluc3RhbmNlVXJsIiwibG9naW5VcmwiLCJfbmFtZSIsIl9jb25uQ29uZmlnIiwiX2NsaWVudENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQTZCQSxTQUFTQSxvQkFBVCxDQUFpQ0MsQ0FBakMsRUFBa0U7QUFDaEUsU0FBT0EsQ0FBQyxJQUFJLElBQVo7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0lBQ2FDLFk7QUFNWCw4QkFBK0M7QUFBQSxRQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBSFMsRUFHVDtBQUFBO0FBQzdDLFNBQUtDLFFBQUwsR0FBZ0JELE9BQWhC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O0FBQ0wsYUFBS0QsZUFBTCxHQUF1QkMsU0FBdkI7QUFDRDtBQUNGOzs7O2lJQUV5QmxCLEk7Ozs7Ozs7dUJBQ0YsS0FBS29CLFdBQUwsQ0FBaUJwQixJQUFqQixDOzs7QUFBaEJnQixnQkFBQUEsTzs7b0JBQ0RBLE87Ozs7O21EQUNJLEk7OztBQUVESyxnQkFBQUEsVyxHQUF1Q0wsTyxDQUF2Q0ssVyxFQUFhQyxXLEdBQTBCTixPLENBQTFCTSxXLEVBQWFDLFEsR0FBYVAsTyxDQUFiTyxRO21EQUMzQjtBQUFFRixrQkFBQUEsV0FBVyxFQUFYQSxXQUFGO0FBQWVDLGtCQUFBQSxXQUFXLEVBQVhBLFdBQWY7QUFBNEJDLGtCQUFBQSxRQUFRLEVBQVJBO0FBQTVCLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tJQUdrQkMsSyxFQUFlQyxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0lBSWZELEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvSUFJRXhCLEk7Ozs7Ozt1QkFDckIsS0FBS0UsWUFBTCxDQUFrQixrQkFBbEIsRUFBc0M7QUFBRVUsa0JBQUFBLENBQUMsRUFBRVo7QUFBTCxpQkFBdEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4SEFHY3dCLEs7Ozs7O21EQUNiLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttREFJQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21JQUdrQkEsSyxFQUFlRSxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuLi9jb25uZWN0aW9uJztcclxuaW1wb3J0IHsgUmVnaXN0cnksIENvbm5lY3Rpb25Db25maWcsIENsaWVudENvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG50eXBlIFNmZHhDb21tYW5kT3V0cHV0ID0ge1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxuICByZXN1bHQ/OiBhbnk7XHJcbn07XHJcblxyXG50eXBlIFNmZHhPcmdMaXN0ID0ge1xyXG4gIG5vblNjcmF0Y2hPcmdzOiBTZmR4T3JnSW5mb1tdO1xyXG4gIHNjcmF0Y2hPcmdzOiBTZmR4T3JnSW5mb1tdO1xyXG59O1xyXG5cclxudHlwZSBTZmR4T3JnSW5mbyA9IHtcclxuICBvcmdJZDogc3RyaW5nO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgaW5zdGFuY2VVcmw6IHN0cmluZztcclxuICBsb2dpblVybDogc3RyaW5nO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgY2xpZW50SWQ6IHN0cmluZztcclxuICBpc0Rldkh1YjogYm9vbGVhbjtcclxuICBjb25uZWN0ZWRTdGF0dXM6IHN0cmluZztcclxuICBsYXN0VXNlZDogc3RyaW5nO1xyXG4gIGFsaWFzPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNOb3ROdWxsT3JVbmRlZmluZWQ8VD4odjogVCB8IG51bGwgfCB1bmRlZmluZWQpOiB2IGlzIFQge1xyXG4gIHJldHVybiB2ICE9IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNmZHhSZWdpc3RyeSBpbXBsZW1lbnRzIFJlZ2lzdHJ5IHtcclxuICBfY2xpUGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIF9vcmdMaXN0OiBQcm9taXNlPFNmZHhPcmdMaXN0PiB8IHVuZGVmaW5lZDtcclxuICBfb3JnSW5mb01hcDogeyBbbmFtZTogc3RyaW5nXTogUHJvbWlzZTxTZmR4T3JnSW5mbz4gfSA9IHt9O1xyXG4gIF9kZWZhdWx0T3JnSW5mbzogUHJvbWlzZTxTZmR4T3JnSW5mbz4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHsgY2xpUGF0aCB9OiB7IGNsaVBhdGg/OiBzdHJpbmcgfSkge1xyXG4gICAgdGhpcy5fY2xpUGF0aCA9IGNsaVBhdGg7XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlQ29tbWFuZChcclxuICAgIGNvbW1hbmQ6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHsgW29wdGlvbjogc3RyaW5nXTogYW55IH0gPSB7fSxcclxuICAgIGFyZ3M6IHN0cmluZ1tdID0gW10sXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gYCR7XHJcbiAgICAgIHRoaXMuX2NsaVBhdGggPyB0aGlzLl9jbGlQYXRoICsgJy8nIDogJydcclxuICAgIH1zZmR4ICR7Y29tbWFuZH0gJHtPYmplY3Qua2V5cyhvcHRpb25zKVxyXG4gICAgICAubWFwKFxyXG4gICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICBgJHtvcHRpb24ubGVuZ3RoID4gMSA/ICctLScgOiAnLSd9JHtvcHRpb259JHtcclxuICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dICE9IG51bGwgPyAnICcgKyBvcHRpb25zW29wdGlvbl0gOiAnJ1xyXG4gICAgICAgICAgfWAsXHJcbiAgICAgIClcclxuICAgICAgLmpvaW4oJyAnKX0gLS1qc29uICR7YXJncy5qb2luKCcgJyl9YDtcclxuICB9XHJcblxyXG4gIGFzeW5jIF9leGVjQ29tbWFuZDxUPihcclxuICAgIGNvbW1hbmQ6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHsgW29wdGlvbjogc3RyaW5nXTogYW55IH0gPSB7fSxcclxuICAgIGFyZ3M6IHN0cmluZ1tdID0gW10sXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjbWQgPSB0aGlzLl9jcmVhdGVDb21tYW5kKGNvbW1hbmQsIG9wdGlvbnMsIGFyZ3MpO1xyXG4gICAgY29uc3QgYnVmID0gYXdhaXQgbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGV4ZWMoY21kLCAoZXJyLCByZXQpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJldCA9IEpTT04ucGFyc2UoYnVmLnRvU3RyaW5nKCkpIGFzIFNmZHhDb21tYW5kT3V0cHV0O1xyXG4gICAgaWYgKHJldC5zdGF0dXMgPT09IDAgJiYgcmV0LnJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gcmV0LnJlc3VsdCBhcyBUO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKHJldC5tZXNzYWdlIGFzIHN0cmluZyk7XHJcbiAgICAgIGVyci5uYW1lID0gcmV0Lm5hbWUgYXMgc3RyaW5nO1xyXG4gICAgICB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBfZ2V0T3JnTGlzdCgpIHtcclxuICAgIGlmICghdGhpcy5fb3JnTGlzdCkge1xyXG4gICAgICB0aGlzLl9vcmdMaXN0ID0gdGhpcy5fZXhlY0NvbW1hbmQ8U2ZkeE9yZ0xpc3Q+KCdmb3JjZTpvcmc6bGlzdCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX29yZ0xpc3Q7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDb25uZWN0aW9uTmFtZXMoKSB7XHJcbiAgICBjb25zdCB7IG5vblNjcmF0Y2hPcmdzLCBzY3JhdGNoT3JncyB9ID0gYXdhaXQgdGhpcy5fZ2V0T3JnTGlzdCgpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgLi4ubm9uU2NyYXRjaE9yZ3MubWFwKChvKSA9PiBvLmFsaWFzKS5maWx0ZXIoaXNOb3ROdWxsT3JVbmRlZmluZWQpLFxyXG4gICAgICAuLi5zY3JhdGNoT3Jncy5tYXAoKG8pID0+IG8uYWxpYXMpLmZpbHRlcihpc05vdE51bGxPclVuZGVmaW5lZCksXHJcbiAgICAgIC4uLm5vblNjcmF0Y2hPcmdzLm1hcCgobykgPT4gby51c2VybmFtZSksXHJcbiAgICAgIC4uLnNjcmF0Y2hPcmdzLm1hcCgobykgPT4gby51c2VybmFtZSksXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q29ubmVjdGlvbjxTIGV4dGVuZHMgU2NoZW1hID0gU2NoZW1hPihuYW1lPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCB0aGlzLmdldENvbm5lY3Rpb25Db25maWcobmFtZSk7XHJcbiAgICByZXR1cm4gY29uZmlnID8gbmV3IENvbm5lY3Rpb248Uz4oY29uZmlnKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBhc3luYyBfZ2V0T3JnSW5mbyh1c2VybmFtZT86IHN0cmluZykge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHVzZXJuYW1lID8geyB1OiB1c2VybmFtZSB9IDoge307XHJcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICF0aGlzLl9vcmdJbmZvTWFwW3VzZXJuYW1lXSkge1xyXG4gICAgICBjb25zdCBwT3JnSW5mbyA9IHRoaXMuX2V4ZWNDb21tYW5kPFNmZHhPcmdJbmZvPihcclxuICAgICAgICAnZm9yY2U6b3JnOmRpc3BsYXknLFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX21lbW9PcmdJbmZvKHBPcmdJbmZvLCB1c2VybmFtZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmdJbmZvID0gdXNlcm5hbWVcclxuICAgICAgPyB0aGlzLl9vcmdJbmZvTWFwW3VzZXJuYW1lXVxyXG4gICAgICA6IHRoaXMuX2RlZmF1bHRPcmdJbmZvO1xyXG4gICAgaWYgKCFvcmdJbmZvKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gb3JnaW5mbyBmb3VuZCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9yZ0luZm87XHJcbiAgfVxyXG5cclxuICBfbWVtb09yZ0luZm8ocE9yZ0luZm86IFByb21pc2U8U2ZkeE9yZ0luZm8+LCB1c2VybmFtZT86IHN0cmluZykge1xyXG4gICAgY29uc3QgcE9yZ0luZm9fID0gcE9yZ0luZm8udGhlbigob3JnSW5mbykgPT4ge1xyXG4gICAgICB0aGlzLl9vcmdJbmZvTWFwW29yZ0luZm8udXNlcm5hbWVdID0gcE9yZ0luZm9fO1xyXG4gICAgICBpZiAob3JnSW5mby5hbGlhcykge1xyXG4gICAgICAgIHRoaXMuX29yZ0luZm9NYXBbb3JnSW5mby5hbGlhc10gPSBwT3JnSW5mb187XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9yZ0luZm87XHJcbiAgICB9KTtcclxuICAgIGlmICh1c2VybmFtZSkge1xyXG4gICAgICB0aGlzLl9vcmdJbmZvTWFwW3VzZXJuYW1lXSA9IHBPcmdJbmZvXztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2RlZmF1bHRPcmdJbmZvID0gcE9yZ0luZm9fO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q29ubmVjdGlvbkNvbmZpZyhuYW1lPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBvcmdJbmZvID0gYXdhaXQgdGhpcy5fZ2V0T3JnSW5mbyhuYW1lKTtcclxuICAgIGlmICghb3JnSW5mbykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgYWNjZXNzVG9rZW4sIGluc3RhbmNlVXJsLCBsb2dpblVybCB9ID0gb3JnSW5mbztcclxuICAgIHJldHVybiB7IGFjY2Vzc1Rva2VuLCBpbnN0YW5jZVVybCwgbG9naW5VcmwgfTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNhdmVDb25uZWN0aW9uQ29uZmlnKF9uYW1lOiBzdHJpbmcsIF9jb25uQ29uZmlnOiBDb25uZWN0aW9uQ29uZmlnKSB7XHJcbiAgICAvLyBub3RoaW5nIHRvIGRvXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXREZWZhdWx0Q29ubmVjdGlvbihfbmFtZTogc3RyaW5nKSB7XHJcbiAgICAvLyBub3RoaW5nIHRvIGRvXHJcbiAgfVxyXG5cclxuICBhc3luYyByZW1vdmVDb25uZWN0aW9uQ29uZmlnKG5hbWU6IHN0cmluZykge1xyXG4gICAgYXdhaXQgdGhpcy5fZXhlY0NvbW1hbmQoJ2ZvcmNlOm9yZzpkZWxldGUnLCB7IHU6IG5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDbGllbnRDb25maWcoX25hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDbGllbnROYW1lcygpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlZ2lzdGVyQ2xpZW50Q29uZmlnKF9uYW1lOiBzdHJpbmcsIF9jbGllbnRDb25maWc6IENsaWVudENvbmZpZykge1xyXG4gICAgLy8gbm90aGluZyB0byBkb1xyXG4gIH1cclxufVxyXG4iXX0=