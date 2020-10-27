"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.replace");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.castTypeUsingSchema = castTypeUsingSchema;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _httpApi = _interopRequireDefault(require("./http-api"));

var _function = require("./util/function");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; (0, _forEach["default"])(_context5 = ownKeys(Object(source), true)).call(_context5, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context6; (0, _forEach["default"])(_context6 = ownKeys(Object(source))).call(_context6, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 *
 */
function getPropsSchema(schema, schemaDict) {
  if (schema["extends"] && schemaDict[schema["extends"]]) {
    var extendSchema = schemaDict[schema["extends"]];
    return _objectSpread(_objectSpread({}, getPropsSchema(extendSchema, schemaDict)), schema.props);
  }

  return schema.props;
}

function isNillValue(value) {
  return value == null || (0, _function.isMapObject)(value) && (0, _function.isMapObject)(value.$) && value.$['xsi:nil'] === 'true';
}
/**
 *
 */


function castTypeUsingSchema(value, schema) {
  var schemaDict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _isArray["default"])(schema)) {
    var _context;

    var nillable = schema.length === 2 && schema[0] === '?';
    var schema_ = nillable ? schema[1] : schema[0];

    if (value == null) {
      return nillable ? null : [];
    }

    return (0, _map["default"])(_context = (0, _isArray["default"])(value) ? value : [value]).call(_context, function (v) {
      return castTypeUsingSchema(v, schema_, schemaDict);
    });
  } else if ((0, _function.isMapObject)(schema)) {
    var _context2;

    // if schema is Schema Definition, not schema element
    if ('type' in schema && 'props' in schema && (0, _function.isMapObject)(schema.props)) {
      var props = getPropsSchema(schema, schemaDict);
      return castTypeUsingSchema(value, props, schemaDict);
    }

    var _nillable = ('?' in schema);

    var _schema_ = '?' in schema ? schema['?'] : schema;

    if (_nillable && isNillValue(value)) {
      return null;
    }

    var obj = (0, _function.isMapObject)(value) ? value : {};
    return (0, _reduce["default"])(_context2 = (0, _keys["default"])(_schema_)).call(_context2, function (o, k) {
      var s = _schema_[k];
      var v = obj[k];
      var nillable = (0, _isArray["default"])(s) && s.length === 2 && s[0] === '?' || (0, _function.isMapObject)(s) && '?' in s || typeof s === 'string' && s[0] === '?';

      if (typeof v === 'undefined' && nillable) {
        return o;
      }

      return _objectSpread(_objectSpread({}, o), {}, (0, _defineProperty3["default"])({}, k, castTypeUsingSchema(v, s, schemaDict)));
    }, obj);
  } else {
    var _nillable2 = typeof schema === 'string' && schema[0] === '?';

    var type = typeof schema === 'string' ? _nillable2 ? schema.substring(1) : schema : 'any';

    switch (type) {
      case 'string':
        return isNillValue(value) ? _nillable2 ? null : '' : String(value);

      case 'number':
        return isNillValue(value) ? _nillable2 ? null : 0 : Number(value);

      case 'boolean':
        return isNillValue(value) ? _nillable2 ? null : false : value === 'true';

      case 'null':
        return null;

      default:
        {
          if (schemaDict[type]) {
            var cvalue = castTypeUsingSchema(value, schemaDict[type], schemaDict);
            var isEmpty = (0, _function.isMapObject)(cvalue) && (0, _keys["default"])(cvalue).length === 0;
            return isEmpty && _nillable2 ? null : cvalue;
          }

          return value;
        }
    }
  }
}
/**
 * @private
 */


function lookupValue(obj, propRegExps) {
  var regexp = propRegExps.shift();

  if (!regexp) {
    return obj;
  }

  if ((0, _function.isMapObject)(obj)) {
    for (var _i = 0, _Object$keys2 = (0, _keys["default"])(obj); _i < _Object$keys2.length; _i++) {
      var prop = _Object$keys2[_i];

      if (regexp.test(prop)) {
        return lookupValue(obj[prop], propRegExps);
      }
    }

    return null;
  }
}
/**
 * @private
 */


function toXML(name, value) {
  if ((0, _function.isObject)(name)) {
    value = name;
    name = null;
  }

  if ((0, _isArray["default"])(value)) {
    return (0, _map["default"])(value).call(value, function (v) {
      return toXML(name, v);
    }).join('');
  } else {
    var attrs = [];
    var elems = [];

    if ((0, _function.isMapObject)(value)) {
      for (var _i2 = 0, _Object$keys3 = (0, _keys["default"])(value); _i2 < _Object$keys3.length; _i2++) {
        var k = _Object$keys3[_i2];
        var v = value[k];

        if (k[0] === '@') {
          var kk = k.substring(1);
          attrs.push(kk + '="' + v + '"');
        } else {
          elems.push(toXML(k, v));
        }
      }

      value = elems.join('');
    } else {
      value = String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    }

    var startTag = name ? '<' + name + (attrs.length > 0 ? ' ' + attrs.join(' ') : '') + '>' : '';
    var endTag = name ? '</' + name + '>' : '';
    return startTag + value + endTag;
  }
}
/**
 *
 */


/**
 * Class for SOAP endpoint of Salesforce
 *
 * @protected
 * @class
 * @constructor
 * @param {Connection} conn - Connection instance
 * @param {Object} options - SOAP endpoint setting options
 * @param {String} options.endpointUrl - SOAP endpoint URL
 * @param {String} [options.xmlns] - XML namespace for method call (default is "urn:partner.soap.sforce.com")
 */
var SOAP = /*#__PURE__*/function (_HttpApi) {
  (0, _inherits2["default"])(SOAP, _HttpApi);

  var _super = _createSuper(SOAP);

  function SOAP(conn, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, SOAP);
    _this = _super.call(this, conn, options);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_endpointUrl", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_xmlns", void 0);
    _this._endpointUrl = options.endpointUrl;
    _this._xmlns = options.xmlns || 'urn:partner.soap.sforce.com';
    return _this;
  }
  /**
   * Invoke SOAP call using method and arguments
   */


  (0, _createClass2["default"])(SOAP, [{
    key: "invoke",
    value: function () {
      var _invoke = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(method, args, schema, schemaDict) {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request({
                  method: 'POST',
                  url: this._endpointUrl,
                  headers: {
                    'Content-Type': 'text/xml',
                    SOAPAction: '""'
                  },
                  _message: (0, _defineProperty3["default"])({}, method, args)
                });

              case 2:
                res = _context3.sent;
                return _context3.abrupt("return", schema ? castTypeUsingSchema(res, schema, schemaDict) : res);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee, this);
      }));

      function invoke(_x, _x2, _x3, _x4) {
        return _invoke.apply(this, arguments);
      }

      return invoke;
    }()
    /** @override */

  }, {
    key: "beforeSend",
    value: function beforeSend(request) {
      request.body = this._createEnvelope(request._message);
    }
    /** @override **/

  }, {
    key: "isSessionExpired",
    value: function isSessionExpired(response) {
      return response.statusCode === 500 && /<faultcode>[a-zA-Z]+:INVALID_SESSION_ID<\/faultcode>/.test(response.body);
    }
    /** @override **/

  }, {
    key: "parseError",
    value: function parseError(body) {
      var error = lookupValue(body, [/:Envelope$/, /:Body$/, /:Fault$/]);
      return {
        errorCode: error.faultcode,
        message: error.faultstring
      };
    }
    /** @override **/

  }, {
    key: "getResponseBody",
    value: function () {
      var _getResponseBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(response) {
        var body;
        return _regenerator["default"].wrap(function _callee2$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _get2["default"])((0, _getPrototypeOf2["default"])(SOAP.prototype), "getResponseBody", this).call(this, response);

              case 2:
                body = _context4.sent;
                return _context4.abrupt("return", lookupValue(body, [/:Envelope$/, /:Body$/, /.+/]));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee2, this);
      }));

      function getResponseBody(_x5) {
        return _getResponseBody.apply(this, arguments);
      }

      return getResponseBody;
    }()
    /**
     * @private
     */

  }, {
    key: "_createEnvelope",
    value: function _createEnvelope(message) {
      var header = {};
      var conn = this._conn;

      if (conn.accessToken) {
        header.SessionHeader = {
          sessionId: conn.accessToken
        };
      }

      if (conn._callOptions) {
        header.CallOptions = conn._callOptions;
      }

      return ['<?xml version="1.0" encoding="UTF-8"?>', '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"', ' xmlns:xsd="http://www.w3.org/2001/XMLSchema"', ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">', '<soapenv:Header xmlns="' + this._xmlns + '">', toXML(header), '</soapenv:Header>', '<soapenv:Body xmlns="' + this._xmlns + '">', toXML(message), '</soapenv:Body>', '</soapenv:Envelope>'].join('');
    }
  }]);
  return SOAP;
}(_httpApi["default"]);

exports["default"] = SOAP;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zb2FwLnRzIl0sIm5hbWVzIjpbImdldFByb3BzU2NoZW1hIiwic2NoZW1hIiwic2NoZW1hRGljdCIsImV4dGVuZFNjaGVtYSIsInByb3BzIiwiaXNOaWxsVmFsdWUiLCJ2YWx1ZSIsIiQiLCJjYXN0VHlwZVVzaW5nU2NoZW1hIiwibmlsbGFibGUiLCJsZW5ndGgiLCJzY2hlbWFfIiwidiIsIm9iaiIsIm8iLCJrIiwicyIsInR5cGUiLCJzdWJzdHJpbmciLCJTdHJpbmciLCJOdW1iZXIiLCJjdmFsdWUiLCJpc0VtcHR5IiwibG9va3VwVmFsdWUiLCJwcm9wUmVnRXhwcyIsInJlZ2V4cCIsInNoaWZ0IiwicHJvcCIsInRlc3QiLCJ0b1hNTCIsIm5hbWUiLCJqb2luIiwiYXR0cnMiLCJlbGVtcyIsImtrIiwicHVzaCIsInJlcGxhY2UiLCJzdGFydFRhZyIsImVuZFRhZyIsIlNPQVAiLCJjb25uIiwib3B0aW9ucyIsIl9lbmRwb2ludFVybCIsImVuZHBvaW50VXJsIiwiX3htbG5zIiwieG1sbnMiLCJtZXRob2QiLCJhcmdzIiwicmVxdWVzdCIsInVybCIsImhlYWRlcnMiLCJTT0FQQWN0aW9uIiwiX21lc3NhZ2UiLCJyZXMiLCJib2R5IiwiX2NyZWF0ZUVudmVsb3BlIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJmYXVsdGNvZGUiLCJtZXNzYWdlIiwiZmF1bHRzdHJpbmciLCJoZWFkZXIiLCJfY29ubiIsImFjY2Vzc1Rva2VuIiwiU2Vzc2lvbkhlYWRlciIsInNlc3Npb25JZCIsIl9jYWxsT3B0aW9ucyIsIkNhbGxPcHRpb25zIiwiSHR0cEFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQVNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBU0EsY0FBVCxDQUNFQyxNQURG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Q2tDLE1BQUQsQ0FOQSxFQU9MLG1CQVBLLEVBUUwsMEJBQTBCLEtBQUtuQixNQUEvQixHQUF3QyxJQVJuQyxFQVNMZixLQUFLLENBQUNnQyxPQUFELENBVEEsRUFVTCxpQkFWSyxFQVdMLHFCQVhLLEVBWUw5QixJQVpLLENBWUEsRUFaQSxDQUFQO0FBYUQ7OztFQXRGaUR1QyxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZSBNYW5hZ2VzIG1ldGhvZCBjYWxsIHRvIFNPQVAgZW5kcG9pbnRcclxuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XHJcbiAqL1xyXG5pbXBvcnQgSHR0cEFwaSBmcm9tICcuL2h0dHAtYXBpJztcclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcclxuaW1wb3J0IHtcclxuICBTY2hlbWEsXHJcbiAgSHR0cFJlc3BvbnNlLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIFNvYXBTY2hlbWEsXHJcbiAgU29hcFNjaGVtYURlZixcclxufSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgaXNNYXBPYmplY3QsIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlsL2Z1bmN0aW9uJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UHJvcHNTY2hlbWEoXHJcbiAgc2NoZW1hOiBTb2FwU2NoZW1hRGVmLFxyXG4gIHNjaGVtYURpY3Q6IHsgW25hbWU6IHN0cmluZ106IFNvYXBTY2hlbWFEZWYgfSxcclxuKTogU29hcFNjaGVtYURlZlsncHJvcHMnXSB7XHJcbiAgaWYgKHNjaGVtYS5leHRlbmRzICYmIHNjaGVtYURpY3Rbc2NoZW1hLmV4dGVuZHNdKSB7XHJcbiAgICBjb25zdCBleHRlbmRTY2hlbWEgPSBzY2hlbWFEaWN0W3NjaGVtYS5leHRlbmRzXTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmdldFByb3BzU2NoZW1hKGV4dGVuZFNjaGVtYSwgc2NoZW1hRGljdCksXHJcbiAgICAgIC4uLnNjaGVtYS5wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBzY2hlbWEucHJvcHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTmlsbFZhbHVlKHZhbHVlOiB1bmtub3duKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIHZhbHVlID09IG51bGwgfHxcclxuICAgIChpc01hcE9iamVjdCh2YWx1ZSkgJiZcclxuICAgICAgaXNNYXBPYmplY3QodmFsdWUuJCkgJiZcclxuICAgICAgdmFsdWUuJFsneHNpOm5pbCddID09PSAndHJ1ZScpXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FzdFR5cGVVc2luZ1NjaGVtYShcclxuICB2YWx1ZTogdW5rbm93bixcclxuICBzY2hlbWE/OiBTb2FwU2NoZW1hIHwgU29hcFNjaGVtYURlZixcclxuICBzY2hlbWFEaWN0OiB7IFtuYW1lOiBzdHJpbmddOiBTb2FwU2NoZW1hRGVmIH0gPSB7fSxcclxuKTogYW55IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEpKSB7XHJcbiAgICBjb25zdCBuaWxsYWJsZSA9IHNjaGVtYS5sZW5ndGggPT09IDIgJiYgc2NoZW1hWzBdID09PSAnPyc7XHJcbiAgICBjb25zdCBzY2hlbWFfID0gbmlsbGFibGUgPyBzY2hlbWFbMV0gOiBzY2hlbWFbMF07XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbmlsbGFibGUgPyBudWxsIDogW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdKS5tYXAoKHYpID0+XHJcbiAgICAgIGNhc3RUeXBlVXNpbmdTY2hlbWEodiwgc2NoZW1hXywgc2NoZW1hRGljdCksXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoaXNNYXBPYmplY3Qoc2NoZW1hKSkge1xyXG4gICAgLy8gaWYgc2NoZW1hIGlzIFNjaGVtYSBEZWZpbml0aW9uLCBub3Qgc2NoZW1hIGVsZW1lbnRcclxuICAgIGlmICgndHlwZScgaW4gc2NoZW1hICYmICdwcm9wcycgaW4gc2NoZW1hICYmIGlzTWFwT2JqZWN0KHNjaGVtYS5wcm9wcykpIHtcclxuICAgICAgY29uc3QgcHJvcHMgPSBnZXRQcm9wc1NjaGVtYShzY2hlbWEgYXMgU29hcFNjaGVtYURlZiwgc2NoZW1hRGljdCk7XHJcbiAgICAgIHJldHVybiBjYXN0VHlwZVVzaW5nU2NoZW1hKHZhbHVlLCBwcm9wcywgc2NoZW1hRGljdCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuaWxsYWJsZSA9ICc/JyBpbiBzY2hlbWE7XHJcbiAgICBjb25zdCBzY2hlbWFfID1cclxuICAgICAgJz8nIGluIHNjaGVtYSA/IChzY2hlbWFbJz8nXSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA6IHNjaGVtYTtcclxuICAgIGlmIChuaWxsYWJsZSAmJiBpc05pbGxWYWx1ZSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvYmogPSBpc01hcE9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IHt9O1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNjaGVtYV8pLnJlZHVjZSgobywgaykgPT4ge1xyXG4gICAgICBjb25zdCBzID0gc2NoZW1hX1trXTtcclxuICAgICAgY29uc3QgdiA9IG9ialtrXTtcclxuICAgICAgY29uc3QgbmlsbGFibGUgPVxyXG4gICAgICAgIChBcnJheS5pc0FycmF5KHMpICYmIHMubGVuZ3RoID09PSAyICYmIHNbMF0gPT09ICc/JykgfHxcclxuICAgICAgICAoaXNNYXBPYmplY3QocykgJiYgJz8nIGluIHMpIHx8XHJcbiAgICAgICAgKHR5cGVvZiBzID09PSAnc3RyaW5nJyAmJiBzWzBdID09PSAnPycpO1xyXG4gICAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnICYmIG5pbGxhYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5vLFxyXG4gICAgICAgIFtrXTogY2FzdFR5cGVVc2luZ1NjaGVtYSh2LCBzLCBzY2hlbWFEaWN0KSxcclxuICAgICAgfTtcclxuICAgIH0sIG9iaik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG5pbGxhYmxlID0gdHlwZW9mIHNjaGVtYSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hWzBdID09PSAnPyc7XHJcbiAgICBjb25zdCB0eXBlID1cclxuICAgICAgdHlwZW9mIHNjaGVtYSA9PT0gJ3N0cmluZydcclxuICAgICAgICA/IG5pbGxhYmxlXHJcbiAgICAgICAgICA/IHNjaGVtYS5zdWJzdHJpbmcoMSlcclxuICAgICAgICAgIDogc2NoZW1hXHJcbiAgICAgICAgOiAnYW55JztcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgIHJldHVybiBpc05pbGxWYWx1ZSh2YWx1ZSkgPyAobmlsbGFibGUgPyBudWxsIDogJycpIDogU3RyaW5nKHZhbHVlKTtcclxuICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICByZXR1cm4gaXNOaWxsVmFsdWUodmFsdWUpID8gKG5pbGxhYmxlID8gbnVsbCA6IDApIDogTnVtYmVyKHZhbHVlKTtcclxuICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgcmV0dXJuIGlzTmlsbFZhbHVlKHZhbHVlKVxyXG4gICAgICAgICAgPyBuaWxsYWJsZVxyXG4gICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgOiB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gICAgICBjYXNlICdudWxsJzpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIGlmIChzY2hlbWFEaWN0W3R5cGVdKSB7XHJcbiAgICAgICAgICBjb25zdCBjdmFsdWUgPSBjYXN0VHlwZVVzaW5nU2NoZW1hKFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgc2NoZW1hRGljdFt0eXBlXSxcclxuICAgICAgICAgICAgc2NoZW1hRGljdCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBpc0VtcHR5ID1cclxuICAgICAgICAgICAgaXNNYXBPYmplY3QoY3ZhbHVlKSAmJiBPYmplY3Qua2V5cyhjdmFsdWUpLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgIHJldHVybiBpc0VtcHR5ICYmIG5pbGxhYmxlID8gbnVsbCA6IGN2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlIGFzIGFueTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBsb29rdXBWYWx1ZShvYmo6IHVua25vd24sIHByb3BSZWdFeHBzOiBSZWdFeHBbXSk6IHVua25vd24ge1xyXG4gIGNvbnN0IHJlZ2V4cCA9IHByb3BSZWdFeHBzLnNoaWZ0KCk7XHJcbiAgaWYgKCFyZWdleHApIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG4gIGlmIChpc01hcE9iamVjdChvYmopKSB7XHJcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMob2JqKSkge1xyXG4gICAgICBpZiAocmVnZXhwLnRlc3QocHJvcCkpIHtcclxuICAgICAgICByZXR1cm4gbG9va3VwVmFsdWUob2JqW3Byb3BdLCBwcm9wUmVnRXhwcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiB0b1hNTChuYW1lOiBvYmplY3QgfCBzdHJpbmcgfCBudWxsLCB2YWx1ZT86IGFueSk6IHN0cmluZyB7XHJcbiAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XHJcbiAgICB2YWx1ZSA9IG5hbWU7XHJcbiAgICBuYW1lID0gbnVsbDtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gdmFsdWUubWFwKCh2KSA9PiB0b1hNTChuYW1lLCB2KSkuam9pbignJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGF0dHJzID0gW107XHJcbiAgICBjb25zdCBlbGVtcyA9IFtdO1xyXG4gICAgaWYgKGlzTWFwT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlW2tdO1xyXG4gICAgICAgIGlmIChrWzBdID09PSAnQCcpIHtcclxuICAgICAgICAgIGNvbnN0IGtrID0gay5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICBhdHRycy5wdXNoKGtrICsgJz1cIicgKyB2ICsgJ1wiJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1zLnB1c2godG9YTUwoaywgdikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB2YWx1ZSA9IGVsZW1zLmpvaW4oJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXHJcbiAgICAgICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcclxuICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcclxuICAgICAgICAucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydFRhZyA9IG5hbWVcclxuICAgICAgPyAnPCcgKyBuYW1lICsgKGF0dHJzLmxlbmd0aCA+IDAgPyAnICcgKyBhdHRycy5qb2luKCcgJykgOiAnJykgKyAnPidcclxuICAgICAgOiAnJztcclxuICAgIGNvbnN0IGVuZFRhZyA9IG5hbWUgPyAnPC8nICsgbmFtZSArICc+JyA6ICcnO1xyXG4gICAgcmV0dXJuIHN0YXJ0VGFnICsgdmFsdWUgKyBlbmRUYWc7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIFNPQVBPcHRpb25zID0ge1xyXG4gIGVuZHBvaW50VXJsOiBzdHJpbmc7XHJcbiAgeG1sbnM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIFNPQVAgZW5kcG9pbnQgb2YgU2FsZXNmb3JjZVxyXG4gKlxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEBjbGFzc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtDb25uZWN0aW9ufSBjb25uIC0gQ29ubmVjdGlvbiBpbnN0YW5jZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNPQVAgZW5kcG9pbnQgc2V0dGluZyBvcHRpb25zXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmVuZHBvaW50VXJsIC0gU09BUCBlbmRwb2ludCBVUkxcclxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnhtbG5zXSAtIFhNTCBuYW1lc3BhY2UgZm9yIG1ldGhvZCBjYWxsIChkZWZhdWx0IGlzIFwidXJuOnBhcnRuZXIuc29hcC5zZm9yY2UuY29tXCIpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTT0FQPFMgZXh0ZW5kcyBTY2hlbWE+IGV4dGVuZHMgSHR0cEFwaTxTPiB7XHJcbiAgX2VuZHBvaW50VXJsOiBzdHJpbmc7XHJcbiAgX3htbG5zOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4sIG9wdGlvbnM6IFNPQVBPcHRpb25zKSB7XHJcbiAgICBzdXBlcihjb25uLCBvcHRpb25zKTtcclxuICAgIHRoaXMuX2VuZHBvaW50VXJsID0gb3B0aW9ucy5lbmRwb2ludFVybDtcclxuICAgIHRoaXMuX3htbG5zID0gb3B0aW9ucy54bWxucyB8fCAndXJuOnBhcnRuZXIuc29hcC5zZm9yY2UuY29tJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEludm9rZSBTT0FQIGNhbGwgdXNpbmcgbWV0aG9kIGFuZCBhcmd1bWVudHNcclxuICAgKi9cclxuICBhc3luYyBpbnZva2UoXHJcbiAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgIGFyZ3M6IG9iamVjdCxcclxuICAgIHNjaGVtYT86IFNvYXBTY2hlbWEgfCBTb2FwU2NoZW1hRGVmLFxyXG4gICAgc2NoZW1hRGljdD86IHsgW25hbWU6IHN0cmluZ106IFNvYXBTY2hlbWFEZWYgfSxcclxuICApIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6IHRoaXMuX2VuZHBvaW50VXJsLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3htbCcsXHJcbiAgICAgICAgU09BUEFjdGlvbjogJ1wiXCInLFxyXG4gICAgICB9LFxyXG4gICAgICBfbWVzc2FnZTogeyBbbWV0aG9kXTogYXJncyB9LFxyXG4gICAgfSBhcyBIdHRwUmVxdWVzdCk7XHJcbiAgICByZXR1cm4gc2NoZW1hID8gY2FzdFR5cGVVc2luZ1NjaGVtYShyZXMsIHNjaGVtYSwgc2NoZW1hRGljdCkgOiByZXM7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICovXHJcbiAgYmVmb3JlU2VuZChyZXF1ZXN0OiBIdHRwUmVxdWVzdCAmIHsgX21lc3NhZ2U6IG9iamVjdCB9KSB7XHJcbiAgICByZXF1ZXN0LmJvZHkgPSB0aGlzLl9jcmVhdGVFbnZlbG9wZShyZXF1ZXN0Ll9tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiovXHJcbiAgaXNTZXNzaW9uRXhwaXJlZChyZXNwb25zZTogSHR0cFJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICByZXNwb25zZS5zdGF0dXNDb2RlID09PSA1MDAgJiZcclxuICAgICAgLzxmYXVsdGNvZGU+W2EtekEtWl0rOklOVkFMSURfU0VTU0lPTl9JRDxcXC9mYXVsdGNvZGU+Ly50ZXN0KHJlc3BvbnNlLmJvZHkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqKi9cclxuICBwYXJzZUVycm9yKGJvZHk6IHN0cmluZykge1xyXG4gICAgY29uc3QgZXJyb3IgPSBsb29rdXBWYWx1ZShib2R5LCBbLzpFbnZlbG9wZSQvLCAvOkJvZHkkLywgLzpGYXVsdCQvXSkgYXMge1xyXG4gICAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yQ29kZTogZXJyb3IuZmF1bHRjb2RlLFxyXG4gICAgICBtZXNzYWdlOiBlcnJvci5mYXVsdHN0cmluZyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICoqL1xyXG4gIGFzeW5jIGdldFJlc3BvbnNlQm9keShyZXNwb25zZTogSHR0cFJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgc3VwZXIuZ2V0UmVzcG9uc2VCb2R5KHJlc3BvbnNlKTtcclxuICAgIHJldHVybiBsb29rdXBWYWx1ZShib2R5LCBbLzpFbnZlbG9wZSQvLCAvOkJvZHkkLywgLy4rL10pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfY3JlYXRlRW52ZWxvcGUobWVzc2FnZTogb2JqZWN0KSB7XHJcbiAgICBjb25zdCBoZWFkZXI6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICBjb25zdCBjb25uID0gdGhpcy5fY29ubjtcclxuICAgIGlmIChjb25uLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIGhlYWRlci5TZXNzaW9uSGVhZGVyID0geyBzZXNzaW9uSWQ6IGNvbm4uYWNjZXNzVG9rZW4gfTtcclxuICAgIH1cclxuICAgIGlmIChjb25uLl9jYWxsT3B0aW9ucykge1xyXG4gICAgICBoZWFkZXIuQ2FsbE9wdGlvbnMgPSBjb25uLl9jYWxsT3B0aW9ucztcclxuICAgIH1cclxuICAgIHJldHVybiBbXHJcbiAgICAgICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz4nLFxyXG4gICAgICAnPHNvYXBlbnY6RW52ZWxvcGUgeG1sbnM6c29hcGVudj1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3NvYXAvZW52ZWxvcGUvXCInLFxyXG4gICAgICAnIHhtbG5zOnhzZD1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hXCInLFxyXG4gICAgICAnIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCI+JyxcclxuICAgICAgJzxzb2FwZW52OkhlYWRlciB4bWxucz1cIicgKyB0aGlzLl94bWxucyArICdcIj4nLFxyXG4gICAgICB0b1hNTChoZWFkZXIpLFxyXG4gICAgICAnPC9zb2FwZW52OkhlYWRlcj4nLFxyXG4gICAgICAnPHNvYXBlbnY6Qm9keSB4bWxucz1cIicgKyB0aGlzLl94bWxucyArICdcIj4nLFxyXG4gICAgICB0b1hNTChtZXNzYWdlKSxcclxuICAgICAgJzwvc29hcGVudjpCb2R5PicsXHJcbiAgICAgICc8L3NvYXBlbnY6RW52ZWxvcGU+JyxcclxuICAgIF0uam9pbignJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==