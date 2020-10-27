"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _jsforce = require("../jsforce");

/**
 * @file Manages Salesforce Apex REST endpoint calls
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

/**
 * API class for Apex REST endpoint call
 */
var Apex = /*#__PURE__*/function () {
  /**
   *
   */
  function Apex(conn) {
    (0, _classCallCheck2["default"])(this, Apex);
    (0, _defineProperty2["default"])(this, "_conn", void 0);
    (0, _defineProperty2["default"])(this, "del", this["delete"]);
    this._conn = conn;
  }
  /* @private */


  (0, _createClass2["default"])(Apex, [{
    key: "_baseUrl",
    value: function _baseUrl() {
      return "".concat(this._conn.instanceUrl, "/services/apexrest");
    }
    /**
     * @private
     */

  }, {
    key: "_createRequestParams",
    value: function _createRequestParams(method, path, body) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var headers = (0, _typeof2["default"])(options.headers) === 'object' ? options.headers : {};

      if (!/^(GET|DELETE)$/i.test(method)) {
        headers['content-type'] = 'application/json';
      }

      var params = {
        method: method,
        url: this._baseUrl() + path,
        headers: headers
      };

      if (body) {
        params.body = (0, _stringify["default"])(body);
      }

      return params;
    }
    /**
     * Call Apex REST service in GET request
     */

  }, {
    key: "get",
    value: function get(path, options) {
      return this._conn.request(this._createRequestParams('GET', path, undefined, options));
    }
    /**
     * Call Apex REST service in POST request
     */

  }, {
    key: "post",
    value: function post(path, body, options) {
      var params = this._createRequestParams('POST', path, body, options);

      return this._conn.request(params);
    }
    /**
     * Call Apex REST service in PUT request
     */

  }, {
    key: "put",
    value: function put(path, body, options) {
      var params = this._createRequestParams('PUT', path, body, options);

      return this._conn.request(params);
    }
    /**
     * Call Apex REST service in PATCH request
     */

  }, {
    key: "patch",
    value: function patch(path, body, options) {
      var params = this._createRequestParams('PATCH', path, body, options);

      return this._conn.request(params);
    }
    /**
     * Call Apex REST service in DELETE request
     */

  }, {
    key: "delete",
    value: function _delete(path, options) {
      return this._conn.request(this._createRequestParams('DELETE', path, undefined, options));
    }
    /**
     * Synonym of Apex#delete()
     */

  }]);
  return Apex;
}();
/*--------------------------------------------*/

/*
 * Register hook in connection instantiation for dynamically adding this API module features
 */


exports["default"] = Apex;
(0, _jsforce.registerModule)('apex', function (conn) {
  return new Apex(conn);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYXBleC50cyJdLCJuYW1lcyI6WyJBcGV4IiwiY29ubiIsIl9jb25uIiwiaW5zdGFuY2VVcmwiLCJtZXRob2QiLCJwYXRoIiwiYm9keSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwidGVzdCIsInBhcmFtcyIsInVybCIsIl9iYXNlVXJsIiwicmVxdWVzdCIsIl9jcmVhdGVSZXF1ZXN0UGFyYW1zIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBSkE7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0lBQ3FCQSxJO0FBR25CO0FBQ0Y7QUFDQTtBQUNFLGdCQUFZQyxJQUFaLEVBQWlDO0FBQUE7QUFBQTtBQUFBLGtEQStFM0IsY0EvRTJCO0FBQy9CLFNBQUtDLEtBQUwsR0FBYUQsSUFBYjtBQUNEO0FBRUQ7Ozs7OytCQUNXO0FBQ1QsdUJBQVUsS0FBS0MsS0FBTCxDQUFXQyxXQUFyQjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7O3lDQUVJQyxNLEVBQ0FDLEksRUFDQUMsSSxFQUVhO0FBQUEsVUFEYkMsT0FDYSx1RUFEbUMsRUFDbkM7QUFDYixVQUFNQyxPQUErQixHQUNuQyx5QkFBT0QsT0FBTyxDQUFDQyxPQUFmLE1BQTJCLFFBQTNCLEdBQXNDRCxPQUFPLENBQUNDLE9BQTlDLEdBQXdELEVBRDFEOztBQUVBLFVBQUksQ0FBQyxrQkFBa0JDLElBQWxCLENBQXVCTCxNQUF2QixDQUFMLEVBQXFDO0FBQ25DSSxRQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLEdBQTBCLGtCQUExQjtBQUNEOztBQUNELFVBQU1FLE1BQW1CLEdBQUc7QUFDMUJOLFFBQUFBLE1BQU0sRUFBTkEsTUFEMEI7QUFFMUJPLFFBQUFBLEdBQUcsRUFBRSxLQUFLQyxRQUFMLEtBQWtCUCxJQUZHO0FBRzFCRyxRQUFBQSxPQUFPLEVBQVBBO0FBSDBCLE9BQTVCOztBQUtBLFVBQUlGLElBQUosRUFBVTtBQUNSSSxRQUFBQSxNQUFNLENBQUNKLElBQVAsR0FBYywyQkFBZUEsSUFBZixDQUFkO0FBQ0Q7O0FBQ0QsYUFBT0ksTUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7O3dCQUNNTCxJLEVBQWNFLE8sRUFBa0I7QUFDbEMsYUFBTyxLQUFLTCxLQUFMLENBQVdXLE9BQVgsQ0FDTCxLQUFLQyxvQkFBTCxDQUEwQixLQUExQixFQUFpQ1QsSUFBakMsRUFBdUNVLFNBQXZDLEVBQWtEUixPQUFsRCxDQURLLENBQVA7QUFHRDtBQUVEO0FBQ0Y7QUFDQTs7Ozt5QkFDT0YsSSxFQUFjQyxJLEVBQWVDLE8sRUFBa0I7QUFDbEQsVUFBTUcsTUFBTSxHQUFHLEtBQUtJLG9CQUFMLENBQTBCLE1BQTFCLEVBQWtDVCxJQUFsQyxFQUF3Q0MsSUFBeEMsRUFBOENDLE9BQTlDLENBQWY7O0FBQ0EsYUFBTyxLQUFLTCxLQUFMLENBQVdXLE9BQVgsQ0FBbUJILE1BQW5CLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7Ozt3QkFDTUwsSSxFQUFjQyxJLEVBQWVDLE8sRUFBa0I7QUFDakQsVUFBTUcsTUFBTSxHQUFHLEtBQUtJLG9CQUFMLENBQTBCLEtBQTFCLEVBQWlDVCxJQUFqQyxFQUF1Q0MsSUFBdkMsRUFBNkNDLE9BQTdDLENBQWY7O0FBQ0EsYUFBTyxLQUFLTCxLQUFMLENBQVdXLE9BQVgsQ0FBbUJILE1BQW5CLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OzswQkFDUUwsSSxFQUFjQyxJLEVBQWVDLE8sRUFBa0I7QUFDbkQsVUFBTUcsTUFBTSxHQUFHLEtBQUtJLG9CQUFMLENBQTBCLE9BQTFCLEVBQW1DVCxJQUFuQyxFQUF5Q0MsSUFBekMsRUFBK0NDLE9BQS9DLENBQWY7O0FBQ0EsYUFBTyxLQUFLTCxLQUFMLENBQVdXLE9BQVgsQ0FBbUJILE1BQW5CLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7Ozs0QkFDU0wsSSxFQUFjRSxPLEVBQWtCO0FBQ3JDLGFBQU8sS0FBS0wsS0FBTCxDQUFXVyxPQUFYLENBQ0wsS0FBS0Msb0JBQUwsQ0FBMEIsUUFBMUIsRUFBb0NULElBQXBDLEVBQTBDVSxTQUExQyxFQUFxRFIsT0FBckQsQ0FESyxDQUFQO0FBR0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7O0FBSUE7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsNkJBQWUsTUFBZixFQUF1QixVQUFDTixJQUFEO0FBQUEsU0FBVSxJQUFJRCxJQUFKLENBQVNDLElBQVQsQ0FBVjtBQUFBLENBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlIE1hbmFnZXMgU2FsZXNmb3JjZSBBcGV4IFJFU1QgZW5kcG9pbnQgY2FsbHNcclxuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XHJcbiAqL1xyXG5pbXBvcnQgeyByZWdpc3Rlck1vZHVsZSB9IGZyb20gJy4uL2pzZm9yY2UnO1xyXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuLi9jb25uZWN0aW9uJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBNZXRob2RzLCBTY2hlbWEgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG4vKipcclxuICogQVBJIGNsYXNzIGZvciBBcGV4IFJFU1QgZW5kcG9pbnQgY2FsbFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBleDxTIGV4dGVuZHMgU2NoZW1hPiB7XHJcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbjxTPikge1xyXG4gICAgdGhpcy5fY29ubiA9IGNvbm47XHJcbiAgfVxyXG5cclxuICAvKiBAcHJpdmF0ZSAqL1xyXG4gIF9iYXNlVXJsKCkge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuX2Nvbm4uaW5zdGFuY2VVcmx9L3NlcnZpY2VzL2FwZXhyZXN0YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2NyZWF0ZVJlcXVlc3RQYXJhbXMoXHJcbiAgICBtZXRob2Q6IEh0dHBNZXRob2RzLFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgYm9keT86IE9iamVjdCxcclxuICAgIG9wdGlvbnM6IHsgaGVhZGVycz86IEh0dHBSZXF1ZXN0WydoZWFkZXJzJ10gfSA9IHt9LFxyXG4gICk6IEh0dHBSZXF1ZXN0IHtcclxuICAgIGNvbnN0IGhlYWRlcnM6IEh0dHBSZXF1ZXN0WydoZWFkZXJzJ10gPVxyXG4gICAgICB0eXBlb2Ygb3B0aW9ucy5oZWFkZXJzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuaGVhZGVycyA6IHt9O1xyXG4gICAgaWYgKCEvXihHRVR8REVMRVRFKSQvaS50ZXN0KG1ldGhvZCkpIHtcclxuICAgICAgaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJhbXM6IEh0dHBSZXF1ZXN0ID0ge1xyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIHVybDogdGhpcy5fYmFzZVVybCgpICsgcGF0aCxcclxuICAgICAgaGVhZGVycyxcclxuICAgIH07XHJcbiAgICBpZiAoYm9keSkge1xyXG4gICAgICBwYXJhbXMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmFtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgQXBleCBSRVNUIHNlcnZpY2UgaW4gR0VUIHJlcXVlc3RcclxuICAgKi9cclxuICBnZXQocGF0aDogc3RyaW5nLCBvcHRpb25zPzogT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0KFxyXG4gICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0UGFyYW1zKCdHRVQnLCBwYXRoLCB1bmRlZmluZWQsIG9wdGlvbnMpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgQXBleCBSRVNUIHNlcnZpY2UgaW4gUE9TVCByZXF1ZXN0XHJcbiAgICovXHJcbiAgcG9zdChwYXRoOiBzdHJpbmcsIGJvZHk/OiBPYmplY3QsIG9wdGlvbnM/OiBPYmplY3QpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuX2NyZWF0ZVJlcXVlc3RQYXJhbXMoJ1BPU1QnLCBwYXRoLCBib2R5LCBvcHRpb25zKTtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3QocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgQXBleCBSRVNUIHNlcnZpY2UgaW4gUFVUIHJlcXVlc3RcclxuICAgKi9cclxuICBwdXQocGF0aDogc3RyaW5nLCBib2R5PzogT2JqZWN0LCBvcHRpb25zPzogT2JqZWN0KSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLl9jcmVhdGVSZXF1ZXN0UGFyYW1zKCdQVVQnLCBwYXRoLCBib2R5LCBvcHRpb25zKTtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3QocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgQXBleCBSRVNUIHNlcnZpY2UgaW4gUEFUQ0ggcmVxdWVzdFxyXG4gICAqL1xyXG4gIHBhdGNoKHBhdGg6IHN0cmluZywgYm9keT86IE9iamVjdCwgb3B0aW9ucz86IE9iamVjdCkge1xyXG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5fY3JlYXRlUmVxdWVzdFBhcmFtcygnUEFUQ0gnLCBwYXRoLCBib2R5LCBvcHRpb25zKTtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3QocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgQXBleCBSRVNUIHNlcnZpY2UgaW4gREVMRVRFIHJlcXVlc3RcclxuICAgKi9cclxuICBkZWxldGUocGF0aDogc3RyaW5nLCBvcHRpb25zPzogT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0KFxyXG4gICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0UGFyYW1zKCdERUxFVEUnLCBwYXRoLCB1bmRlZmluZWQsIG9wdGlvbnMpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN5bm9ueW0gb2YgQXBleCNkZWxldGUoKVxyXG4gICAqL1xyXG4gIGRlbCA9IHRoaXMuZGVsZXRlO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLypcclxuICogUmVnaXN0ZXIgaG9vayBpbiBjb25uZWN0aW9uIGluc3RhbnRpYXRpb24gZm9yIGR5bmFtaWNhbGx5IGFkZGluZyB0aGlzIEFQSSBtb2R1bGUgZmVhdHVyZXNcclxuICovXHJcbnJlZ2lzdGVyTW9kdWxlKCdhcGV4JywgKGNvbm4pID0+IG5ldyBBcGV4KGNvbm4pKTtcclxuIl19