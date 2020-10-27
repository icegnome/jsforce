"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _getIteratorMethod2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator-method"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _jsforce = require("../jsforce");

var _soap = _interopRequireDefault(require("../soap"));

var _schema = require("./soap/schema");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context12; (0, _forEach["default"])(_context12 = ownKeys(Object(source), true)).call(_context12, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context13; (0, _forEach["default"])(_context13 = ownKeys(Object(source))).call(_context13, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _symbol["default"] === "undefined" || (0, _getIteratorMethod2["default"])(o) == null) { if ((0, _isArray["default"])(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2["default"])(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context11; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = (0, _slice["default"])(_context11 = Object.prototype.toString.call(o)).call(_context11, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from["default"])(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 */
function toSoapRecord(records) {
  var _context;

  return (0, _map["default"])(_context = (0, _isArray["default"])(records) ? records : [records]).call(_context, function (record) {
    var _context2;

    var type = record.type,
        attributes = record.attributes,
        rec = (0, _objectWithoutProperties2["default"])(record, ["type", "attributes"]);
    var t = type || (attributes === null || attributes === void 0 ? void 0 : attributes.type);

    if (!t) {
      throw new Error('Given record is not including sObject type information');
    }

    var fieldsToNull = (0, _filter["default"])(_context2 = (0, _keys["default"])(rec)).call(_context2, function (field) {
      return record[field] === null;
    });

    var _iterator = _createForOfIteratorHelper(fieldsToNull),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var field = _step.value;
        delete rec[field];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return fieldsToNull.length > 0 ? _objectSpread({
      type: t,
      fieldsToNull: fieldsToNull
    }, rec) : _objectSpread({
      type: t
    }, rec);
  });
}
/**
 * API class for Partner SOAP call
 */


var SoapApi = /*#__PURE__*/function () {
  function SoapApi(conn) {
    (0, _classCallCheck2["default"])(this, SoapApi);
    (0, _defineProperty3["default"])(this, "_conn", void 0);
    this._conn = conn;
  }
  /**
   * Call SOAP Api (Partner) endpoint
   * @private
   */


  (0, _createClass2["default"])(SoapApi, [{
    key: "_invoke",
    value: function () {
      var _invoke2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(method, message, schema) {
        var _context3;

        var soapEndpoint, res;
        return _regenerator["default"].wrap(function _callee$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                soapEndpoint = new _soap["default"](this._conn, {
                  xmlns: 'urn:partner.soap.sforce.com',
                  endpointUrl: (0, _concat["default"])(_context3 = "".concat(this._conn.instanceUrl, "/services/Soap/u/")).call(_context3, this._conn.version)
                });
                _context4.next = 3;
                return soapEndpoint.invoke(method, message, schema ? {
                  result: schema
                } : undefined, _schema.ApiSchemas);

              case 3:
                res = _context4.sent;
                return _context4.abrupt("return", res.result);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee, this);
      }));

      function _invoke(_x, _x2, _x3) {
        return _invoke2.apply(this, arguments);
      }

      return _invoke;
    }()
    /**
     * Converts a Lead into an Account, Contact, or (optionally) an Opportunity.
     */

  }, {
    key: "convertLead",
    value: function () {
      var _convertLead = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(leadConverts) {
        var schema;
        return _regenerator["default"].wrap(function _callee2$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                schema = (0, _isArray["default"])(leadConverts) ? [_schema.ApiSchemas.LeadConvertResult] : _schema.ApiSchemas.LeadConvertResult;
                return _context5.abrupt("return", this._invoke('convertLead', {
                  leadConverts: leadConverts
                }, schema));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee2, this);
      }));

      function convertLead(_x4) {
        return _convertLead.apply(this, arguments);
      }

      return convertLead;
    }()
    /**
     * Merge up to three records into one
     */

  }, {
    key: "merge",
    value: function () {
      var _merge = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(mergeRequests) {
        var schema;
        return _regenerator["default"].wrap(function _callee3$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                schema = (0, _isArray["default"])(mergeRequests) ? [_schema.ApiSchemas.MergeResult] : _schema.ApiSchemas.MergeResult;
                return _context6.abrupt("return", this._invoke('merge', {
                  mergeRequests: mergeRequests
                }, schema));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee3, this);
      }));

      function merge(_x5) {
        return _merge.apply(this, arguments);
      }

      return merge;
    }()
    /**
     * Delete records from the recycle bin immediately
     */

  }, {
    key: "emptyRecycleBin",
    value: function () {
      var _emptyRecycleBin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ids) {
        return _regenerator["default"].wrap(function _callee4$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this._invoke('emptyRecycleBin', {
                  ids: ids
                }, [_schema.ApiSchemas.EmptyRecycleBinResult]));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee4, this);
      }));

      function emptyRecycleBin(_x6) {
        return _emptyRecycleBin.apply(this, arguments);
      }

      return emptyRecycleBin;
    }()
    /**
     * Returns information about the standard and custom apps available to the logged-in user
     */

  }, {
    key: "describeTabs",
    value: function () {
      var _describeTabs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this._invoke('describeTabs', {}, [_schema.ApiSchemas.DescribeTabSetResult]));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee5, this);
      }));

      function describeTabs() {
        return _describeTabs.apply(this, arguments);
      }

      return describeTabs;
    }()
    /**
     * Retrieves the current system timestamp (Coordinated Universal Time (UTC) time zone) from the API
     */

  }, {
    key: "getServerTimestamp",
    value: function () {
      var _getServerTimestamp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this._invoke('getServerTimestamp', {}, _schema.ApiSchemas.GetServerTimestampResult));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee6, this);
      }));

      function getServerTimestamp() {
        return _getServerTimestamp.apply(this, arguments);
      }

      return getServerTimestamp;
    }()
    /**
     * Retrieves personal information for the user associated with the current session
     */

  }, {
    key: "getUserInfo",
    value: function () {
      var _getUserInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this._invoke('getUserInfo', {}, _schema.ApiSchemas.GetUserInfoResult));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee7, this);
      }));

      function getUserInfo() {
        return _getUserInfo.apply(this, arguments);
      }

      return getUserInfo;
    }()
    /**
     * Sets the specified user’s password to the specified value
     */

  }, {
    key: "setPassword",
    value: function setPassword(userId, password) {
      return this._invoke('setPassword', {
        userId: userId,
        password: password
      }, 'string');
    }
    /**
     * Resets the specified user’s password
     */

  }, {
    key: "resetPassword",
    value: function resetPassword(userId) {
      return this._invoke('resetPassword', {
        userId: userId
      }, _schema.ApiSchemas.ResetPasswordResult);
    }
    /**
     * Adds one or more new records to your organization’s data
     */

  }, {
    key: "create",
    value: function create(sObjects) {
      var schema = (0, _isArray["default"])(sObjects) ? [_schema.ApiSchemas.SaveResult] : _schema.ApiSchemas.SaveResult;
      var args = {
        '@xmlns': 'urn:partner.soap.sforce.com',
        '@xmlns:ns1': 'sobject.partner.soap.sforce.com',
        'ns1:sObjects': toSoapRecord(sObjects)
      };
      return this._invoke('create', args, schema);
    }
    /**
     * Updates one or more existing records in your organization’s data.
     */

  }, {
    key: "update",
    value: function update(sObjects) {
      var schema = (0, _isArray["default"])(sObjects) ? [_schema.ApiSchemas.SaveResult] : _schema.ApiSchemas.SaveResult;
      var args = {
        '@xmlns': 'urn:partner.soap.sforce.com',
        '@xmlns:ns1': 'sobject.partner.soap.sforce.com',
        'ns1:sObjects': toSoapRecord(sObjects)
      };
      return this._invoke('update', args, schema);
    }
    /**
     * Creates new records and updates existing records in your organization’s data.
     */

  }, {
    key: "upsert",
    value: function upsert(externalIdFieldName, sObjects) {
      var schema = (0, _isArray["default"])(sObjects) ? [_schema.ApiSchemas.UpsertResult] : _schema.ApiSchemas.UpsertResult;
      var args = {
        '@xmlns': 'urn:partner.soap.sforce.com',
        '@xmlns:ns1': 'sobject.partner.soap.sforce.com',
        'ns1:externalIDFieldName': externalIdFieldName,
        'ns1:sObjects': toSoapRecord(sObjects)
      };
      return this._invoke('upsert', args, schema);
    }
    /**
     * Deletes one or more records from your organization’s data
     */

  }, {
    key: "delete",
    value: function _delete(ids) {
      var schema = (0, _isArray["default"])(ids) ? [_schema.ApiSchemas.DeleteResult] : _schema.ApiSchemas.DeleteResult;
      var args = {
        '@xmlns': 'urn:partner.soap.sforce.com',
        '@xmlns:ns1': 'sobject.partner.soap.sforce.com',
        'ns1:ids': ids
      };
      return this._invoke('delete', args, schema);
    }
  }]);
  return SoapApi;
}();
/*--------------------------------------------*/

/*
 * Register hook in connection instantiation for dynamically adding this API module features
 */


exports["default"] = SoapApi;
(0, _jsforce.registerModule)('soap', function (conn) {
  return new SoapApi(conn);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvc29hcC50cyJdLCJuYW1lcyI6WyJ0b1NvYXBSZWNvcmQiLCJyZWNvcmRzIiwicmVjb3JkIiwidHlwZSIsImF0dHJpYnV0ZXMiLCJyZWMiLCJ0IiwiRXJyb3IiLCJmaWVsZHNUb051bGwiLCJmaWVsZCIsImxlbmd0aCIsIlNvYXBBcGkiLCJjb25uIiwiX2Nvbm4iLCJtZXRob2QiLCJtZXNzYWdlIiwic2NoZW1hIiwic29hcEVuZHBvaW50IiwiU09BUCIsInhtbG5zIiwiZW5kcG9pbnRVcmwiLCJpbnN0YW5jZVVybCIsInZlcnNpb24iLCJpbnZva2UiLCJyZXN1bHQiLCJ1bmRlZmluZWQiLCJBcGlTY2hlbWFzIiwicmVzIiwibGVhZENvbnZlcnRzIiwiTGVhZENvbnZlcnRSZXN1bHQiLCJfaW52b2tlIiwibWVyZ2VSZXF1ZXN0cyIsIk1lcmdlUmVzdWx0IiwiaWRzIiwiRW1wdHlSZWN5Y2xlQmluUmVzdWx0IiwiRGVzY3JpYmVUYWJTZXRSZXN1bHQiLCJHZXRTZXJ2ZXJUaW1lc3RhbXBSZXN1bHQiLCJHZXRVc2VySW5mb1Jlc3VsdCIsInVzZXJJZCIsInBhc3N3b3JkIiwiUmVzZXRQYXNzd29yZFJlc3VsdCIsInNPYmplY3RzIiwiU2F2ZVJlc3VsdCIsImFyZ3MiLCJleHRlcm5hbElkRmllbGROYW1lIiwiVXBzZXJ0UmVzdWx0IiwiRGVsZXRlUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQXFFO0FBQUE7O0FBQ25FLFNBQU8sZ0NBQUMseUJBQWNBLE9BQWQsSUFBeUJBLE9BQXpCLEdBQW1DLENBQUNBLE9BQUQsQ0FBcEMsaUJBQW1ELFVBQUNDLE1BQUQsRUFBWTtBQUFBOztBQUFBLFFBQzVEQyxJQUQ0RCxHQUMvQkQsTUFEK0IsQ0FDNURDLElBRDREO0FBQUEsUUFDdERDLFVBRHNELEdBQy9CRixNQUQrQixDQUN0REUsVUFEc0Q7QUFBQSxRQUN2Q0MsR0FEdUMsNkNBQy9CSCxNQUQrQjtBQUVwRSxRQUFNSSxDQUFDLEdBQUdILElBQUksS0FBSUMsVUFBSixhQUFJQSxVQUFKLHVCQUFJQSxVQUFVLENBQUVELElBQWhCLENBQWQ7O0FBQ0EsUUFBSSxDQUFDRyxDQUFMLEVBQVE7QUFDTixZQUFNLElBQUlDLEtBQUosQ0FBVSx3REFBVixDQUFOO0FBQ0Q7O0FBQ0QsUUFBTUMsWUFBWSxHQUFHLDBEQUFZSCxHQUFaLG1CQUNuQixVQUFDSSxLQUFEO0FBQUEsYUFBV1AsTUFBTSxDQUFDTyxLQUFELENBQU4sS0FBa0IsSUFBN0I7QUFBQSxLQURtQixDQUFyQjs7QUFOb0UsK0NBU2hERCxZQVRnRDtBQUFBOztBQUFBO0FBU3BFLDBEQUFrQztBQUFBLFlBQXZCQyxLQUF1QjtBQUNoQyxlQUFPSixHQUFHLENBQUNJLEtBQUQsQ0FBVjtBQUNEO0FBWG1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWXBFLFdBQU9ELFlBQVksQ0FBQ0UsTUFBYixHQUFzQixDQUF0QjtBQUNEUCxNQUFBQSxJQUFJLEVBQUVHLENBREw7QUFDUUUsTUFBQUEsWUFBWSxFQUFaQTtBQURSLE9BQ3lCSCxHQUR6QjtBQUVERixNQUFBQSxJQUFJLEVBQUVHO0FBRkwsT0FFV0QsR0FGWCxDQUFQO0FBR0QsR0FmTSxDQUFQO0FBZ0JEO0FBRUQ7QUFDQTtBQUNBOzs7SUFDcUJNLE87QUFHbkIsbUJBQVlDLElBQVosRUFBaUM7QUFBQTtBQUFBO0FBQy9CLFNBQUtDLEtBQUwsR0FBYUQsSUFBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7OztvSEFFSUUsTSxFQUNBQyxPLEVBQ0FDLE07Ozs7Ozs7O0FBRU1DLGdCQUFBQSxZLEdBQWUsSUFBSUMsZ0JBQUosQ0FBUyxLQUFLTCxLQUFkLEVBQXFCO0FBQ3hDTSxrQkFBQUEsS0FBSyxFQUFFLDZCQURpQztBQUV4Q0Msa0JBQUFBLFdBQVcsZ0RBQUssS0FBS1AsS0FBTCxDQUFXUSxXQUFoQix3Q0FBK0MsS0FBS1IsS0FBTCxDQUFXUyxPQUExRDtBQUY2QixpQkFBckIsQzs7dUJBSUhMLFlBQVksQ0FBQ00sTUFBYixDQUNoQlQsTUFEZ0IsRUFFaEJDLE9BRmdCLEVBR2hCQyxNQUFNLEdBQUk7QUFBRVEsa0JBQUFBLE1BQU0sRUFBRVI7QUFBVixpQkFBSixHQUF3Q1MsU0FIOUIsRUFJaEJDLGtCQUpnQixDOzs7QUFBWkMsZ0JBQUFBLEc7a0RBTUNBLEdBQUcsQ0FBQ0gsTTs7Ozs7Ozs7Ozs7Ozs7OztBQUdiO0FBQ0Y7QUFDQTs7Ozs7eUhBU0lJLFk7Ozs7OztBQUVNWixnQkFBQUEsTSxHQUFTLHlCQUFjWSxZQUFkLElBQ1gsQ0FBQ0YsbUJBQVdHLGlCQUFaLENBRFcsR0FFWEgsbUJBQVdHLGlCO2tEQUNSLEtBQUtDLE9BQUwsQ0FBYSxhQUFiLEVBQTRCO0FBQUVGLGtCQUFBQSxZQUFZLEVBQVpBO0FBQUYsaUJBQTVCLEVBQThDWixNQUE5QyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7QUFDRjtBQUNBOzs7OzttSEFNY2UsYTs7Ozs7O0FBQ0pmLGdCQUFBQSxNLEdBQVMseUJBQWNlLGFBQWQsSUFDWCxDQUFDTCxtQkFBV00sV0FBWixDQURXLEdBRVhOLG1CQUFXTSxXO2tEQUNSLEtBQUtGLE9BQUwsQ0FBYSxPQUFiLEVBQXNCO0FBQUVDLGtCQUFBQSxhQUFhLEVBQWJBO0FBQUYsaUJBQXRCLEVBQXlDZixNQUF6QyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7QUFDRjtBQUNBOzs7Ozs2SEFDd0JpQixHOzs7OztrREFDYixLQUFLSCxPQUFMLENBQWEsaUJBQWIsRUFBZ0M7QUFBRUcsa0JBQUFBLEdBQUcsRUFBSEE7QUFBRixpQkFBaEMsRUFBeUMsQ0FDOUNQLG1CQUFXUSxxQkFEbUMsQ0FBekMsQzs7Ozs7Ozs7Ozs7Ozs7OztBQUtUO0FBQ0Y7QUFDQTs7Ozs7Ozs7OztrREFFVyxLQUFLSixPQUFMLENBQWEsY0FBYixFQUE2QixFQUE3QixFQUFpQyxDQUFDSixtQkFBV1Msb0JBQVosQ0FBakMsQzs7Ozs7Ozs7Ozs7Ozs7OztBQUdUO0FBQ0Y7QUFDQTs7Ozs7Ozs7OztrREFFVyxLQUFLTCxPQUFMLENBQ0wsb0JBREssRUFFTCxFQUZLLEVBR0xKLG1CQUFXVSx3QkFITixDOzs7Ozs7Ozs7Ozs7Ozs7O0FBT1Q7QUFDRjtBQUNBOzs7Ozs7Ozs7O21EQUVXLEtBQUtOLE9BQUwsQ0FBYSxhQUFiLEVBQTRCLEVBQTVCLEVBQWdDSixtQkFBV1csaUJBQTNDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVDtBQUNGO0FBQ0E7Ozs7Z0NBQ2NDLE0sRUFBZ0JDLFEsRUFBbUM7QUFDN0QsYUFBTyxLQUFLVCxPQUFMLENBQWEsYUFBYixFQUE0QjtBQUFFUSxRQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVUMsUUFBQUEsUUFBUSxFQUFSQTtBQUFWLE9BQTVCLEVBQWtELFFBQWxELENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OztrQ0FDZ0JELE0sRUFBOEM7QUFDMUQsYUFBTyxLQUFLUixPQUFMLENBQ0wsZUFESyxFQUVMO0FBQUVRLFFBQUFBLE1BQU0sRUFBTkE7QUFBRixPQUZLLEVBR0xaLG1CQUFXYyxtQkFITixDQUFQO0FBS0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7MkJBSVNDLFEsRUFBNkI7QUFDbEMsVUFBTXpCLE1BQU0sR0FBRyx5QkFBY3lCLFFBQWQsSUFDWCxDQUFDZixtQkFBV2dCLFVBQVosQ0FEVyxHQUVYaEIsbUJBQVdnQixVQUZmO0FBR0EsVUFBTUMsSUFBSSxHQUFHO0FBQ1gsa0JBQVUsNkJBREM7QUFFWCxzQkFBYyxpQ0FGSDtBQUdYLHdCQUFnQjNDLFlBQVksQ0FBQ3lDLFFBQUQ7QUFIakIsT0FBYjtBQUtBLGFBQU8sS0FBS1gsT0FBTCxDQUFhLFFBQWIsRUFBdUJhLElBQXZCLEVBQTZCM0IsTUFBN0IsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7OzJCQUlTeUIsUSxFQUE2QjtBQUNsQyxVQUFNekIsTUFBTSxHQUFHLHlCQUFjeUIsUUFBZCxJQUNYLENBQUNmLG1CQUFXZ0IsVUFBWixDQURXLEdBRVhoQixtQkFBV2dCLFVBRmY7QUFHQSxVQUFNQyxJQUFJLEdBQUc7QUFDWCxrQkFBVSw2QkFEQztBQUVYLHNCQUFjLGlDQUZIO0FBR1gsd0JBQWdCM0MsWUFBWSxDQUFDeUMsUUFBRDtBQUhqQixPQUFiO0FBS0EsYUFBTyxLQUFLWCxPQUFMLENBQWEsUUFBYixFQUF1QmEsSUFBdkIsRUFBNkIzQixNQUE3QixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7MkJBVVM0QixtQixFQUE2QkgsUSxFQUE2QjtBQUMvRCxVQUFNekIsTUFBTSxHQUFHLHlCQUFjeUIsUUFBZCxJQUNYLENBQUNmLG1CQUFXbUIsWUFBWixDQURXLEdBRVhuQixtQkFBV21CLFlBRmY7QUFHQSxVQUFNRixJQUFJLEdBQUc7QUFDWCxrQkFBVSw2QkFEQztBQUVYLHNCQUFjLGlDQUZIO0FBR1gsbUNBQTJCQyxtQkFIaEI7QUFJWCx3QkFBZ0I1QyxZQUFZLENBQUN5QyxRQUFEO0FBSmpCLE9BQWI7QUFNQSxhQUFPLEtBQUtYLE9BQUwsQ0FBYSxRQUFiLEVBQXVCYSxJQUF2QixFQUE2QjNCLE1BQTdCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7Ozs0QkFJU2lCLEcsRUFBd0I7QUFDN0IsVUFBTWpCLE1BQU0sR0FBRyx5QkFBY2lCLEdBQWQsSUFDWCxDQUFDUCxtQkFBV29CLFlBQVosQ0FEVyxHQUVYcEIsbUJBQVdvQixZQUZmO0FBR0EsVUFBTUgsSUFBSSxHQUFHO0FBQ1gsa0JBQVUsNkJBREM7QUFFWCxzQkFBYyxpQ0FGSDtBQUdYLG1CQUFXVjtBQUhBLE9BQWI7QUFLQSxhQUFPLEtBQUtILE9BQUwsQ0FBYSxRQUFiLEVBQXVCYSxJQUF2QixFQUE2QjNCLE1BQTdCLENBQVA7QUFDRDs7OztBQUdIOztBQUNBO0FBQ0E7QUFDQTs7OztBQUNBLDZCQUFlLE1BQWYsRUFBdUIsVUFBQ0osSUFBRDtBQUFBLFNBQVUsSUFBSUQsT0FBSixDQUFZQyxJQUFaLENBQVY7QUFBQSxDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZSBTYWxlc2ZvcmNlIFNPQVAgQVBJXHJcbiAqIEBhdXRob3IgU2hpbmljaGkgVG9taXRhIDxzaGluaWNoaS50b21pdGFAZ21haWwuY29tPlxyXG4gKi9cclxuaW1wb3J0IHsgcmVnaXN0ZXJNb2R1bGUgfSBmcm9tICcuLi9qc2ZvcmNlJztcclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi4vY29ubmVjdGlvbic7XHJcbmltcG9ydCBTT0FQIGZyb20gJy4uL3NvYXAnO1xyXG5pbXBvcnQgeyBTY2hlbWEsIFJlY29yZCwgU29hcFNjaGVtYURlZiwgU29hcFNjaGVtYSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHtcclxuICBBcGlTY2hlbWFzLFxyXG4gIExlYWRDb252ZXJ0LFxyXG4gIExlYWRDb252ZXJ0UmVzdWx0LFxyXG4gIE1lcmdlUmVxdWVzdCxcclxuICBNZXJnZVJlc3VsdCxcclxuICBFbXB0eVJlY3ljbGVCaW5SZXN1bHQsXHJcbiAgRGVzY3JpYmVUYWJTZXRSZXN1bHQsXHJcbiAgR2V0U2VydmVyVGltZXN0YW1wUmVzdWx0LFxyXG4gIEdldFVzZXJJbmZvUmVzdWx0LFxyXG4gIFJlc2V0UGFzc3dvcmRSZXN1bHQsXHJcbiAgU2F2ZVJlc3VsdCxcclxuICBVcHNlcnRSZXN1bHQsXHJcbiAgRGVsZXRlUmVzdWx0LFxyXG59IGZyb20gJy4vc29hcC9zY2hlbWEnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiB0b1NvYXBSZWNvcmQocmVjb3JkczogUmVjb3JkIHwgUmVjb3JkW10pOiBSZWNvcmQgfCBSZWNvcmRbXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJlY29yZHMpID8gcmVjb3JkcyA6IFtyZWNvcmRzXSkubWFwKChyZWNvcmQpID0+IHtcclxuICAgIGNvbnN0IHsgdHlwZSwgYXR0cmlidXRlcywgLi4ucmVjIH0gPSByZWNvcmQ7XHJcbiAgICBjb25zdCB0ID0gdHlwZSB8fCBhdHRyaWJ1dGVzPy50eXBlO1xyXG4gICAgaWYgKCF0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignR2l2ZW4gcmVjb3JkIGlzIG5vdCBpbmNsdWRpbmcgc09iamVjdCB0eXBlIGluZm9ybWF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWVsZHNUb051bGwgPSBPYmplY3Qua2V5cyhyZWMpLmZpbHRlcihcclxuICAgICAgKGZpZWxkKSA9PiByZWNvcmRbZmllbGRdID09PSBudWxsLFxyXG4gICAgKTtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzVG9OdWxsKSB7XHJcbiAgICAgIGRlbGV0ZSByZWNbZmllbGRdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpZWxkc1RvTnVsbC5sZW5ndGggPiAwXHJcbiAgICAgID8geyB0eXBlOiB0LCBmaWVsZHNUb051bGwsIC4uLnJlYyB9XHJcbiAgICAgIDogeyB0eXBlOiB0LCAuLi5yZWMgfTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFQSSBjbGFzcyBmb3IgUGFydG5lciBTT0FQIGNhbGxcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvYXBBcGk8UyBleHRlbmRzIFNjaGVtYT4ge1xyXG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25uOiBDb25uZWN0aW9uPFM+KSB7XHJcbiAgICB0aGlzLl9jb25uID0gY29ubjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgU09BUCBBcGkgKFBhcnRuZXIpIGVuZHBvaW50XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBhc3luYyBfaW52b2tlKFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICBtZXNzYWdlOiBvYmplY3QsXHJcbiAgICBzY2hlbWE6IFNvYXBTY2hlbWEgfCBTb2FwU2NoZW1hRGVmLFxyXG4gICkge1xyXG4gICAgY29uc3Qgc29hcEVuZHBvaW50ID0gbmV3IFNPQVAodGhpcy5fY29ubiwge1xyXG4gICAgICB4bWxuczogJ3VybjpwYXJ0bmVyLnNvYXAuc2ZvcmNlLmNvbScsXHJcbiAgICAgIGVuZHBvaW50VXJsOiBgJHt0aGlzLl9jb25uLmluc3RhbmNlVXJsfS9zZXJ2aWNlcy9Tb2FwL3UvJHt0aGlzLl9jb25uLnZlcnNpb259YCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc29hcEVuZHBvaW50Lmludm9rZShcclxuICAgICAgbWV0aG9kLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBzY2hlbWEgPyAoeyByZXN1bHQ6IHNjaGVtYSB9IGFzIFNvYXBTY2hlbWEpIDogdW5kZWZpbmVkLFxyXG4gICAgICBBcGlTY2hlbWFzLFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMucmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgYSBMZWFkIGludG8gYW4gQWNjb3VudCwgQ29udGFjdCwgb3IgKG9wdGlvbmFsbHkpIGFuIE9wcG9ydHVuaXR5LlxyXG4gICAqL1xyXG4gIGNvbnZlcnRMZWFkKFxyXG4gICAgbGVhZENvbnZlcnRzOiBQYXJ0aWFsPExlYWRDb252ZXJ0PltdLFxyXG4gICk6IFByb21pc2U8TGVhZENvbnZlcnRSZXN1bHRbXT47XHJcbiAgY29udmVydExlYWQobGVhZENvbnZlcnQ6IFBhcnRpYWw8TGVhZENvbnZlcnQ+KTogUHJvbWlzZTxMZWFkQ29udmVydFJlc3VsdD47XHJcbiAgY29udmVydExlYWQoXHJcbiAgICBsZWFkQ29udmVydDogUGFydGlhbDxMZWFkQ29udmVydD4gfCBQYXJ0aWFsPExlYWRDb252ZXJ0PltdLFxyXG4gICk6IFByb21pc2U8TGVhZENvbnZlcnRSZXN1bHQgfCBMZWFkQ29udmVydFJlc3VsdFtdPjtcclxuICBhc3luYyBjb252ZXJ0TGVhZChcclxuICAgIGxlYWRDb252ZXJ0czogUGFydGlhbDxMZWFkQ29udmVydD4gfCBQYXJ0aWFsPExlYWRDb252ZXJ0PltdLFxyXG4gICkge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gQXJyYXkuaXNBcnJheShsZWFkQ29udmVydHMpXHJcbiAgICAgID8gW0FwaVNjaGVtYXMuTGVhZENvbnZlcnRSZXN1bHRdXHJcbiAgICAgIDogQXBpU2NoZW1hcy5MZWFkQ29udmVydFJlc3VsdDtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ2NvbnZlcnRMZWFkJywgeyBsZWFkQ29udmVydHMgfSwgc2NoZW1hKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1lcmdlIHVwIHRvIHRocmVlIHJlY29yZHMgaW50byBvbmVcclxuICAgKi9cclxuICBtZXJnZShtZXJnZVJlcXVlc3RzOiBQYXJ0aWFsPE1lcmdlUmVxdWVzdD5bXSk6IFByb21pc2U8TWVyZ2VSZXN1bHRbXT47XHJcbiAgbWVyZ2UobWVyZ2VSZXF1ZXN0OiBQYXJ0aWFsPE1lcmdlUmVxdWVzdD4pOiBQcm9taXNlPE1lcmdlUmVzdWx0PjtcclxuICBtZXJnZShcclxuICAgIG1lcmdlUmVxdWVzdDogUGFydGlhbDxNZXJnZVJlcXVlc3Q+IHwgUGFydGlhbDxNZXJnZVJlcXVlc3Q+W10sXHJcbiAgKTogUHJvbWlzZTxNZXJnZVJlc3VsdCB8IE1lcmdlUmVzdWx0W10+O1xyXG4gIGFzeW5jIG1lcmdlKG1lcmdlUmVxdWVzdHM6IFBhcnRpYWw8TWVyZ2VSZXF1ZXN0PiB8IFBhcnRpYWw8TWVyZ2VSZXF1ZXN0PltdKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBBcnJheS5pc0FycmF5KG1lcmdlUmVxdWVzdHMpXHJcbiAgICAgID8gW0FwaVNjaGVtYXMuTWVyZ2VSZXN1bHRdXHJcbiAgICAgIDogQXBpU2NoZW1hcy5NZXJnZVJlc3VsdDtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ21lcmdlJywgeyBtZXJnZVJlcXVlc3RzIH0sIHNjaGVtYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGUgcmVjb3JkcyBmcm9tIHRoZSByZWN5Y2xlIGJpbiBpbW1lZGlhdGVseVxyXG4gICAqL1xyXG4gIGFzeW5jIGVtcHR5UmVjeWNsZUJpbihpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxFbXB0eVJlY3ljbGVCaW5SZXN1bHQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ2VtcHR5UmVjeWNsZUJpbicsIHsgaWRzIH0sIFtcclxuICAgICAgQXBpU2NoZW1hcy5FbXB0eVJlY3ljbGVCaW5SZXN1bHQsXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YW5kYXJkIGFuZCBjdXN0b20gYXBwcyBhdmFpbGFibGUgdG8gdGhlIGxvZ2dlZC1pbiB1c2VyXHJcbiAgICovXHJcbiAgYXN5bmMgZGVzY3JpYmVUYWJzKCk6IFByb21pc2U8RGVzY3JpYmVUYWJTZXRSZXN1bHRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZSgnZGVzY3JpYmVUYWJzJywge30sIFtBcGlTY2hlbWFzLkRlc2NyaWJlVGFiU2V0UmVzdWx0XSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgc3lzdGVtIHRpbWVzdGFtcCAoQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUgKFVUQykgdGltZSB6b25lKSBmcm9tIHRoZSBBUElcclxuICAgKi9cclxuICBhc3luYyBnZXRTZXJ2ZXJUaW1lc3RhbXAoKTogUHJvbWlzZTxHZXRTZXJ2ZXJUaW1lc3RhbXBSZXN1bHQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXHJcbiAgICAgICdnZXRTZXJ2ZXJUaW1lc3RhbXAnLFxyXG4gICAgICB7fSxcclxuICAgICAgQXBpU2NoZW1hcy5HZXRTZXJ2ZXJUaW1lc3RhbXBSZXN1bHQsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmVzIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZvciB0aGUgdXNlciBhc3NvY2lhdGVkIHdpdGggdGhlIGN1cnJlbnQgc2Vzc2lvblxyXG4gICAqL1xyXG4gIGFzeW5jIGdldFVzZXJJbmZvKCk6IFByb21pc2U8R2V0VXNlckluZm9SZXN1bHQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ2dldFVzZXJJbmZvJywge30sIEFwaVNjaGVtYXMuR2V0VXNlckluZm9SZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgc3BlY2lmaWVkIHVzZXLigJlzIHBhc3N3b3JkIHRvIHRoZSBzcGVjaWZpZWQgdmFsdWVcclxuICAgKi9cclxuICBzZXRQYXNzd29yZCh1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKCdzZXRQYXNzd29yZCcsIHsgdXNlcklkLCBwYXNzd29yZCB9LCAnc3RyaW5nJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIHNwZWNpZmllZCB1c2Vy4oCZcyBwYXNzd29yZFxyXG4gICAqL1xyXG4gIHJlc2V0UGFzc3dvcmQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPFJlc2V0UGFzc3dvcmRSZXN1bHQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXHJcbiAgICAgICdyZXNldFBhc3N3b3JkJyxcclxuICAgICAgeyB1c2VySWQgfSxcclxuICAgICAgQXBpU2NoZW1hcy5SZXNldFBhc3N3b3JkUmVzdWx0LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgb25lIG9yIG1vcmUgbmV3IHJlY29yZHMgdG8geW91ciBvcmdhbml6YXRpb27igJlzIGRhdGFcclxuICAgKi9cclxuICBjcmVhdGUoc09iamVjdDogUmVjb3JkW10pOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XHJcbiAgY3JlYXRlKHNPYmplY3Q6IFJlY29yZCk6IFByb21pc2U8U2F2ZVJlc3VsdD47XHJcbiAgY3JlYXRlKHNPYmplY3RzOiBSZWNvcmQgfCBSZWNvcmRbXSk6IFByb21pc2U8U2F2ZVJlc3VsdCB8IFNhdmVSZXN1bHRbXT47XHJcbiAgY3JlYXRlKHNPYmplY3RzOiBSZWNvcmQgfCBSZWNvcmRbXSkge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gQXJyYXkuaXNBcnJheShzT2JqZWN0cylcclxuICAgICAgPyBbQXBpU2NoZW1hcy5TYXZlUmVzdWx0XVxyXG4gICAgICA6IEFwaVNjaGVtYXMuU2F2ZVJlc3VsdDtcclxuICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICdAeG1sbnMnOiAndXJuOnBhcnRuZXIuc29hcC5zZm9yY2UuY29tJyxcclxuICAgICAgJ0B4bWxuczpuczEnOiAnc29iamVjdC5wYXJ0bmVyLnNvYXAuc2ZvcmNlLmNvbScsXHJcbiAgICAgICduczE6c09iamVjdHMnOiB0b1NvYXBSZWNvcmQoc09iamVjdHMpLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ2NyZWF0ZScsIGFyZ3MsIHNjaGVtYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIG9uZSBvciBtb3JlIGV4aXN0aW5nIHJlY29yZHMgaW4geW91ciBvcmdhbml6YXRpb27igJlzIGRhdGEuXHJcbiAgICovXHJcbiAgdXBkYXRlKHNPYmplY3Q6IFJlY29yZFtdKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xyXG4gIHVwZGF0ZShzT2JqZWN0OiBSZWNvcmQpOiBQcm9taXNlPFNhdmVSZXN1bHQ+O1xyXG4gIHVwZGF0ZShzT2JqZWN0czogUmVjb3JkIHwgUmVjb3JkW10pOiBQcm9taXNlPFNhdmVSZXN1bHQgfCBTYXZlUmVzdWx0W10+O1xyXG4gIHVwZGF0ZShzT2JqZWN0czogUmVjb3JkIHwgUmVjb3JkW10pIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEFycmF5LmlzQXJyYXkoc09iamVjdHMpXHJcbiAgICAgID8gW0FwaVNjaGVtYXMuU2F2ZVJlc3VsdF1cclxuICAgICAgOiBBcGlTY2hlbWFzLlNhdmVSZXN1bHQ7XHJcbiAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAnQHhtbG5zJzogJ3VybjpwYXJ0bmVyLnNvYXAuc2ZvcmNlLmNvbScsXHJcbiAgICAgICdAeG1sbnM6bnMxJzogJ3NvYmplY3QucGFydG5lci5zb2FwLnNmb3JjZS5jb20nLFxyXG4gICAgICAnbnMxOnNPYmplY3RzJzogdG9Tb2FwUmVjb3JkKHNPYmplY3RzKSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKCd1cGRhdGUnLCBhcmdzLCBzY2hlbWEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBuZXcgcmVjb3JkcyBhbmQgdXBkYXRlcyBleGlzdGluZyByZWNvcmRzIGluIHlvdXIgb3JnYW5pemF0aW9u4oCZcyBkYXRhLlxyXG4gICAqL1xyXG4gIHVwc2VydChcclxuICAgIGV4dGVybmFsSWRGaWVsZE5hbWU6IHN0cmluZyxcclxuICAgIHNPYmplY3RzOiBSZWNvcmRbXSxcclxuICApOiBQcm9taXNlPFVwc2VydFJlc3VsdFtdPjtcclxuICB1cHNlcnQoZXh0ZXJuYWxJZEZpZWxkTmFtZTogc3RyaW5nLCBzT2JqZWN0OiBSZWNvcmQpOiBQcm9taXNlPFVwc2VydFJlc3VsdD47XHJcbiAgdXBzZXJ0KFxyXG4gICAgZXh0ZXJuYWxJZEZpZWxkTmFtZTogc3RyaW5nLFxyXG4gICAgc09iamVjdHM6IFJlY29yZCB8IFJlY29yZFtdLFxyXG4gICk6IFByb21pc2U8VXBzZXJ0UmVzdWx0IHwgVXBzZXJ0UmVzdWx0W10+O1xyXG4gIHVwc2VydChleHRlcm5hbElkRmllbGROYW1lOiBzdHJpbmcsIHNPYmplY3RzOiBSZWNvcmQgfCBSZWNvcmRbXSkge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gQXJyYXkuaXNBcnJheShzT2JqZWN0cylcclxuICAgICAgPyBbQXBpU2NoZW1hcy5VcHNlcnRSZXN1bHRdXHJcbiAgICAgIDogQXBpU2NoZW1hcy5VcHNlcnRSZXN1bHQ7XHJcbiAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAnQHhtbG5zJzogJ3VybjpwYXJ0bmVyLnNvYXAuc2ZvcmNlLmNvbScsXHJcbiAgICAgICdAeG1sbnM6bnMxJzogJ3NvYmplY3QucGFydG5lci5zb2FwLnNmb3JjZS5jb20nLFxyXG4gICAgICAnbnMxOmV4dGVybmFsSURGaWVsZE5hbWUnOiBleHRlcm5hbElkRmllbGROYW1lLFxyXG4gICAgICAnbnMxOnNPYmplY3RzJzogdG9Tb2FwUmVjb3JkKHNPYmplY3RzKSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKCd1cHNlcnQnLCBhcmdzLCBzY2hlbWEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBvbmUgb3IgbW9yZSByZWNvcmRzIGZyb20geW91ciBvcmdhbml6YXRpb27igJlzIGRhdGFcclxuICAgKi9cclxuICBkZWxldGUoaWRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8RGVsZXRlUmVzdWx0W10+O1xyXG4gIGRlbGV0ZShpZDogc3RyaW5nKTogUHJvbWlzZTxEZWxldGVSZXN1bHQ+O1xyXG4gIGRlbGV0ZShpZHM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxEZWxldGVSZXN1bHQgfCBEZWxldGVSZXN1bHRbXT47XHJcbiAgZGVsZXRlKGlkczogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEFycmF5LmlzQXJyYXkoaWRzKVxyXG4gICAgICA/IFtBcGlTY2hlbWFzLkRlbGV0ZVJlc3VsdF1cclxuICAgICAgOiBBcGlTY2hlbWFzLkRlbGV0ZVJlc3VsdDtcclxuICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICdAeG1sbnMnOiAndXJuOnBhcnRuZXIuc29hcC5zZm9yY2UuY29tJyxcclxuICAgICAgJ0B4bWxuczpuczEnOiAnc29iamVjdC5wYXJ0bmVyLnNvYXAuc2ZvcmNlLmNvbScsXHJcbiAgICAgICduczE6aWRzJzogaWRzLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ2RlbGV0ZScsIGFyZ3MsIHNjaGVtYSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLypcclxuICogUmVnaXN0ZXIgaG9vayBpbiBjb25uZWN0aW9uIGluc3RhbnRpYXRpb24gZm9yIGR5bmFtaWNhbGx5IGFkZGluZyB0aGlzIEFQSSBtb2R1bGUgZmVhdHVyZXNcclxuICovXHJcbnJlZ2lzdGVyTW9kdWxlKCdzb2FwJywgKGNvbm4pID0+IG5ldyBTb2FwQXBpKGNvbm4pKTtcclxuIl19