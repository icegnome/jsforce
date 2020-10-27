"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _logger = require("./util/logger");

/**
 *
 */

/**
 *
 */
var SessionRefreshDelegate = /*#__PURE__*/function () {
  function SessionRefreshDelegate(conn, refreshFn) {
    (0, _classCallCheck2["default"])(this, SessionRefreshDelegate);
    (0, _defineProperty2["default"])(this, "_refreshFn", void 0);
    (0, _defineProperty2["default"])(this, "_conn", void 0);
    (0, _defineProperty2["default"])(this, "_logger", void 0);
    (0, _defineProperty2["default"])(this, "_lastRefreshedAt", undefined);
    (0, _defineProperty2["default"])(this, "_refreshPromise", undefined);
    this._conn = conn;
    this._logger = conn._logLevel ? SessionRefreshDelegate._logger.createInstance(conn._logLevel) : SessionRefreshDelegate._logger;
    this._refreshFn = refreshFn;
  }
  /**
   * Refresh access token
   * @private
   */


  (0, _createClass2["default"])(SessionRefreshDelegate, [{
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(since) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this._lastRefreshedAt && this._lastRefreshedAt > since)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (!this._refreshPromise) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return this._refreshPromise;

              case 5:
                return _context.abrupt("return");

              case 6:
                _context.prev = 6;

                this._logger.info('<refresh token>');

                this._refreshPromise = new _promise["default"](function (resolve, reject) {
                  _this._refreshFn(_this._conn, function (err, accessToken, res) {
                    if (!err) {
                      _this._logger.debug('Connection refresh completed.');

                      _this._conn.accessToken = accessToken;

                      _this._conn.emit('refresh', accessToken, res);

                      resolve();
                    } else {
                      reject(err);
                    }
                  });
                });
                _context.next = 11;
                return this._refreshPromise;

              case 11:
                this._logger.info('<refresh complete>');

              case 12:
                _context.prev = 12;
                this._refreshPromise = undefined;
                this._lastRefreshedAt = (0, _now["default"])();
                return _context.finish(12);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6,, 12, 16]]);
      }));

      function refresh(_x) {
        return _refresh.apply(this, arguments);
      }

      return refresh;
    }()
  }, {
    key: "isRefreshing",
    value: function isRefreshing() {
      return !!this._refreshPromise;
    }
  }, {
    key: "waitRefresh",
    value: function () {
      var _waitRefresh = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this._refreshPromise);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function waitRefresh() {
        return _waitRefresh.apply(this, arguments);
      }

      return waitRefresh;
    }()
  }]);
  return SessionRefreshDelegate;
}();

exports["default"] = SessionRefreshDelegate;
(0, _defineProperty2["default"])(SessionRefreshDelegate, "_logger", (0, _logger.getLogger)('session-refresh-delegate'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXNzaW9uLXJlZnJlc2gtZGVsZWdhdGUudHMiXSwibmFtZXMiOlsiU2Vzc2lvblJlZnJlc2hEZWxlZ2F0ZSIsImNvbm4iLCJyZWZyZXNoRm4iLCJ1bmRlZmluZWQiLCJfY29ubiIsIl9sb2dnZXIiLCJfbG9nTGV2ZWwiLCJjcmVhdGVJbnN0YW5jZSIsIl9yZWZyZXNoRm4iLCJzaW5jZSIsIl9sYXN0UmVmcmVzaGVkQXQiLCJfcmVmcmVzaFByb21pc2UiLCJpbmZvIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImFjY2Vzc1Rva2VuIiwicmVzIiwiZGVidWciLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBSEE7QUFDQTtBQUNBOztBQWNBO0FBQ0E7QUFDQTtJQUNxQkEsc0I7QUFTbkIsa0NBQVlDLElBQVosRUFBaUNDLFNBQWpDLEVBQW1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrREFIekJDLFNBR3lCO0FBQUEsOERBRm5CQSxTQUVtQjtBQUNqRSxTQUFLQyxLQUFMLEdBQWFILElBQWI7QUFDQSxTQUFLSSxPQUFMLEdBQWVKLElBQUksQ0FBQ0ssU0FBTCxHQUNYTixzQkFBc0IsQ0FBQ0ssT0FBdkIsQ0FBK0JFLGNBQS9CLENBQThDTixJQUFJLENBQUNLLFNBQW5ELENBRFcsR0FFWE4sc0JBQXNCLENBQUNLLE9BRjNCO0FBR0EsU0FBS0csVUFBTCxHQUFrQk4sU0FBbEI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7Ozs7b0hBQ2dCTyxLOzs7Ozs7O3NCQUVSLEtBQUtDLGdCQUFMLElBQXlCLEtBQUtBLGdCQUFMLEdBQXdCRCxLOzs7Ozs7OztxQkFHakQsS0FBS0UsZTs7Ozs7O3VCQUNELEtBQUtBLGU7Ozs7Ozs7O0FBSVgscUJBQUtOLE9BQUwsQ0FBYU8sSUFBYixDQUFrQixpQkFBbEI7O0FBQ0EscUJBQUtELGVBQUwsR0FBdUIsd0JBQVksVUFBQ0UsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RELGtCQUFBLEtBQUksQ0FBQ04sVUFBTCxDQUFnQixLQUFJLENBQUNKLEtBQXJCLEVBQTRCLFVBQUNXLEdBQUQsRUFBTUMsV0FBTixFQUFtQkMsR0FBbkIsRUFBMkI7QUFDckQsd0JBQUksQ0FBQ0YsR0FBTCxFQUFVO0FBQ1Isc0JBQUEsS0FBSSxDQUFDVixPQUFMLENBQWFhLEtBQWIsQ0FBbUIsK0JBQW5COztBQUNBLHNCQUFBLEtBQUksQ0FBQ2QsS0FBTCxDQUFXWSxXQUFYLEdBQXlCQSxXQUF6Qjs7QUFDQSxzQkFBQSxLQUFJLENBQUNaLEtBQUwsQ0FBV2UsSUFBWCxDQUFnQixTQUFoQixFQUEyQkgsV0FBM0IsRUFBd0NDLEdBQXhDOztBQUNBSixzQkFBQUEsT0FBTztBQUNSLHFCQUxELE1BS087QUFDTEMsc0JBQUFBLE1BQU0sQ0FBQ0MsR0FBRCxDQUFOO0FBQ0Q7QUFDRixtQkFURDtBQVVELGlCQVhzQixDQUF2Qjs7dUJBWU0sS0FBS0osZTs7O0FBQ1gscUJBQUtOLE9BQUwsQ0FBYU8sSUFBYixDQUFrQixvQkFBbEI7Ozs7QUFFQSxxQkFBS0QsZUFBTCxHQUF1QlIsU0FBdkI7QUFDQSxxQkFBS08sZ0JBQUwsR0FBd0Isc0JBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUlvQjtBQUN0QixhQUFPLENBQUMsQ0FBQyxLQUFLQyxlQUFkO0FBQ0Q7Ozs7Ozs7OztrREFHUSxLQUFLQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBekRLWCxzQixhQUNNLHVCQUFVLDBCQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICovXHJcbmltcG9ydCB7IGdldExvZ2dlciwgTG9nZ2VyIH0gZnJvbSAnLi91dGlsL2xvZ2dlcic7XHJcbmltcG9ydCB7IENhbGxiYWNrLCBTY2hlbWEgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcclxuaW1wb3J0IHsgVG9rZW5SZXNwb25zZSB9IGZyb20gJy4vb2F1dGgyJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2Vzc2lvblJlZnJlc2hGdW5jPFMgZXh0ZW5kcyBTY2hlbWE+ID0gKFxyXG4gIGNvbm46IENvbm5lY3Rpb248Uz4sXHJcbiAgY2FsbGJhY2s6IENhbGxiYWNrPHN0cmluZywgVG9rZW5SZXNwb25zZT4sXHJcbikgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvblJlZnJlc2hEZWxlZ2F0ZTxTIGV4dGVuZHMgU2NoZW1hPiB7XHJcbiAgc3RhdGljIF9sb2dnZXI6IExvZ2dlciA9IGdldExvZ2dlcignc2Vzc2lvbi1yZWZyZXNoLWRlbGVnYXRlJyk7XHJcblxyXG4gIHByaXZhdGUgX3JlZnJlc2hGbjogU2Vzc2lvblJlZnJlc2hGdW5jPFM+O1xyXG4gIHByaXZhdGUgX2Nvbm46IENvbm5lY3Rpb248Uz47XHJcbiAgcHJpdmF0ZSBfbG9nZ2VyOiBMb2dnZXI7XHJcbiAgcHJpdmF0ZSBfbGFzdFJlZnJlc2hlZEF0OiBudW1iZXIgfCB2b2lkID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3JlZnJlc2hQcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgdm9pZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbjxTPiwgcmVmcmVzaEZuOiBTZXNzaW9uUmVmcmVzaEZ1bmM8Uz4pIHtcclxuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xyXG4gICAgdGhpcy5fbG9nZ2VyID0gY29ubi5fbG9nTGV2ZWxcclxuICAgICAgPyBTZXNzaW9uUmVmcmVzaERlbGVnYXRlLl9sb2dnZXIuY3JlYXRlSW5zdGFuY2UoY29ubi5fbG9nTGV2ZWwpXHJcbiAgICAgIDogU2Vzc2lvblJlZnJlc2hEZWxlZ2F0ZS5fbG9nZ2VyO1xyXG4gICAgdGhpcy5fcmVmcmVzaEZuID0gcmVmcmVzaEZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVmcmVzaCBhY2Nlc3MgdG9rZW5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGFzeW5jIHJlZnJlc2goc2luY2U6IG51bWJlcikge1xyXG4gICAgLy8gQ2FsbGJhY2sgaW1tZWRpYXRlbHkgV2hlbiByZWZyZXNoZWQgYWZ0ZXIgZGVzaWduYXRlZCB0aW1lXHJcbiAgICBpZiAodGhpcy5fbGFzdFJlZnJlc2hlZEF0ICYmIHRoaXMuX2xhc3RSZWZyZXNoZWRBdCA+IHNpbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9yZWZyZXNoUHJvbWlzZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLl9yZWZyZXNoUHJvbWlzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJzxyZWZyZXNoIHRva2VuPicpO1xyXG4gICAgICB0aGlzLl9yZWZyZXNoUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLl9yZWZyZXNoRm4odGhpcy5fY29ubiwgKGVyciwgYWNjZXNzVG9rZW4sIHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKCdDb25uZWN0aW9uIHJlZnJlc2ggY29tcGxldGVkLicpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm4uZW1pdCgncmVmcmVzaCcsIGFjY2Vzc1Rva2VuLCByZXMpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHRoaXMuX3JlZnJlc2hQcm9taXNlO1xyXG4gICAgICB0aGlzLl9sb2dnZXIuaW5mbygnPHJlZnJlc2ggY29tcGxldGU+Jyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLl9yZWZyZXNoUHJvbWlzZSA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5fbGFzdFJlZnJlc2hlZEF0ID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzUmVmcmVzaGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuX3JlZnJlc2hQcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgd2FpdFJlZnJlc2goKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVmcmVzaFByb21pc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==