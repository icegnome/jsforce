"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

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

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _sort = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/sort"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _logger = require("./util/logger");

var _recordReference = _interopRequireDefault(require("./record-reference"));

var _query = _interopRequireWildcard(require("./query"));

var _quickAction = _interopRequireDefault(require("./quick-action"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context10; (0, _forEach["default"])(_context10 = ownKeys(Object(source), true)).call(_context10, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context11; (0, _forEach["default"])(_context11 = ownKeys(Object(source))).call(_context11, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 * A class for organizing all SObject access
 */
var SObject = /*#__PURE__*/function () {
  // layouts: (ln?: string) => Promise<DescribeLayoutResult>;
  // compactLayouts: () => Promise<DescribeCompactLayoutsResult>;
  // approvalLayouts: () => Promise<DescribeApprovalLayoutsResult>;

  /**
   *
   */
  function SObject(conn, type) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, SObject);
    (0, _defineProperty3["default"])(this, "type", void 0);
    (0, _defineProperty3["default"])(this, "_conn", void 0);
    (0, _defineProperty3["default"])(this, "_logger", void 0);
    (0, _defineProperty3["default"])(this, "layouts$", void 0);
    (0, _defineProperty3["default"])(this, "layouts$$", void 0);
    (0, _defineProperty3["default"])(this, "compactLayouts$", void 0);
    (0, _defineProperty3["default"])(this, "compactLayouts$$", void 0);
    (0, _defineProperty3["default"])(this, "approvalLayouts$", void 0);
    (0, _defineProperty3["default"])(this, "approvalLayouts$$", void 0);
    (0, _defineProperty3["default"])(this, "insert", this.create);
    (0, _defineProperty3["default"])(this, "delete", this.destroy);
    (0, _defineProperty3["default"])(this, "del", this.destroy);
    this.type = type;
    this._conn = conn;
    this._logger = conn._logLevel ? SObject._logger.createInstance(conn._logLevel) : SObject._logger;
    var cache = this._conn.cache;

    var layoutCacheKey = function layoutCacheKey(layoutName) {
      return layoutName ? "layouts.namedLayouts.".concat(layoutName) : "layouts.".concat(_this.type);
    };

    var layouts = SObject.prototype.layouts;
    this.layouts = cache.createCachedFunction(layouts, this, {
      key: layoutCacheKey,
      strategy: 'NOCACHE'
    });
    this.layouts$ = cache.createCachedFunction(layouts, this, {
      key: layoutCacheKey,
      strategy: 'HIT'
    });
    this.layouts$$ = cache.createCachedFunction(layouts, this, {
      key: layoutCacheKey,
      strategy: 'IMMEDIATE'
    });
    var compactLayoutCacheKey = "compactLayouts.".concat(this.type);
    var compactLayouts = SObject.prototype.compactLayouts;
    this.compactLayouts = cache.createCachedFunction(compactLayouts, this, {
      key: compactLayoutCacheKey,
      strategy: 'NOCACHE'
    });
    this.compactLayouts$ = cache.createCachedFunction(compactLayouts, this, {
      key: compactLayoutCacheKey,
      strategy: 'HIT'
    });
    this.compactLayouts$$ = cache.createCachedFunction(compactLayouts, this, {
      key: compactLayoutCacheKey,
      strategy: 'IMMEDIATE'
    });
    var approvalLayoutCacheKey = "approvalLayouts.".concat(this.type);
    var approvalLayouts = SObject.prototype.approvalLayouts;
    this.approvalLayouts = cache.createCachedFunction(approvalLayouts, this, {
      key: approvalLayoutCacheKey,
      strategy: 'NOCACHE'
    });
    this.approvalLayouts$ = cache.createCachedFunction(approvalLayouts, this, {
      key: approvalLayoutCacheKey,
      strategy: 'HIT'
    });
    this.approvalLayouts$$ = cache.createCachedFunction(approvalLayouts, this, {
      key: approvalLayoutCacheKey,
      strategy: 'IMMEDIATE'
    });
  }
  /**
   * Create records
   */


  (0, _createClass2["default"])(SObject, [{
    key: "create",
    value: function create(records, options) {
      return this._conn.create(this.type, records, options);
    }
    /**
     * Synonym of SObject#create()
     */

  }, {
    key: "retrieve",
    value: function retrieve(ids, options) {
      return this._conn.retrieve(this.type, ids, options);
    }
    /**
     * Update records
     */

  }, {
    key: "update",
    value: function update(records, options) {
      return this._conn.update(this.type, records, options);
    }
    /**
     * Upsert records
     */

  }, {
    key: "upsert",
    value: function upsert(records, extIdField, options) {
      return this._conn.upsert(this.type, records, extIdField, options);
    }
    /**
     * Delete records
     */

  }, {
    key: "destroy",
    value: function destroy(ids, options) {
      return this._conn.destroy(this.type, ids, options);
    }
    /**
     * Synonym of SObject#destroy()
     */

  }, {
    key: "describe",

    /**
     * Describe SObject metadata
     */
    value: function describe() {
      return this._conn.describe(this.type);
    }
    /**
     *
     */

  }, {
    key: "describe$",
    value: function describe$() {
      return this._conn.describe$(this.type);
    }
    /**
     *
     */

  }, {
    key: "describe$$",
    value: function describe$$() {
      return this._conn.describe$$(this.type);
    }
    /**
     * Get record representation instance by given id
     */

  }, {
    key: "record",
    value: function record(id) {
      return new _recordReference["default"](this._conn, this.type, id);
    }
    /**
     * Retrieve recently accessed records
     */

  }, {
    key: "recent",
    value: function recent() {
      return this._conn.recent(this.type);
    }
    /**
     * Retrieve the updated records
     */

  }, {
    key: "updated",
    value: function updated(start, end) {
      return this._conn.updated(this.type, start, end);
    }
    /**
     * Retrieve the deleted records
     */

  }, {
    key: "deleted",
    value: function deleted(start, end) {
      return this._conn.deleted(this.type, start, end);
    }
    /**
     * Describe layout information for SObject
     */

  }, {
    key: "layouts",
    value: function () {
      var _layouts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(layoutName) {
        var _context;

        var url, body;
        return _regenerator["default"].wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = (0, _concat["default"])(_context = "/sobjects/".concat(this.type, "/describe/")).call(_context, layoutName ? "namedLayouts/".concat(layoutName) : 'layouts');
                _context2.next = 3;
                return this._conn.request(url);

              case 3:
                body = _context2.sent;
                return _context2.abrupt("return", body);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));

      function layouts(_x) {
        return _layouts.apply(this, arguments);
      }

      return layouts;
    }()
    /**
     * @typedef {Object} CompactLayoutInfo
     * @prop {Array.<Object>} compactLayouts - Array of compact layouts
     * @prop {String} defaultCompactLayoutId - ID of default compact layout
     * @prop {Array.<Object>} recordTypeCompactLayoutMappings - Array of record type mappings
     */

    /**
     * Describe compact layout information defined for SObject
     *
     * @param {Callback.<CompactLayoutInfo>} [callback] - Callback function
     * @returns {Promise.<CompactLayoutInfo>}
     */

  }, {
    key: "compactLayouts",
    value: function () {
      var _compactLayouts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var url, body;
        return _regenerator["default"].wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = "/sobjects/".concat(this.type, "/describe/compactLayouts");
                _context3.next = 3;
                return this._conn.request(url);

              case 3:
                body = _context3.sent;
                return _context3.abrupt("return", body);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this);
      }));

      function compactLayouts() {
        return _compactLayouts.apply(this, arguments);
      }

      return compactLayouts;
    }()
    /**
     * Describe compact layout information defined for SObject
     *
     * @param {Callback.<ApprovalLayoutInfo>} [callback] - Callback function
     * @returns {Promise.<ApprovalLayoutInfo>}
     */

  }, {
    key: "approvalLayouts",
    value: function () {
      var _approvalLayouts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var url, body;
        return _regenerator["default"].wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = "/sobjects/".concat(this.type, "/describe/approvalLayouts");
                _context4.next = 3;
                return this._conn.request(url);

              case 3:
                body = _context4.sent;
                return _context4.abrupt("return", body);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));

      function approvalLayouts() {
        return _approvalLayouts.apply(this, arguments);
      }

      return approvalLayouts;
    }()
    /**
     * Find and fetch records which matches given conditions
     */

  }, {
    key: "find",
    value: function find(conditions, fields) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var sort = (0, _sort["default"])(options),
          limit = options.limit,
          offset = options.offset,
          qoptions = (0, _objectWithoutProperties2["default"])(options, ["sort", "limit", "offset"]);
      var config = {
        fields: fields == null ? undefined : fields,
        includes: (0, _includes["default"])(options),
        table: this.type,
        conditions: conditions == null ? undefined : conditions,
        sort: sort,
        limit: limit,
        offset: offset
      };
      var query = new _query["default"](this._conn, config, qoptions);
      return query.setResponseTarget(_query.ResponseTargets.Records);
    }
    /**
     * Fetch one record which matches given conditions
     */

  }, {
    key: "findOne",
    value: function findOne(conditions, fields) {
      var _context5;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var query = (0, _find["default"])(_context5 = this).call(_context5, conditions, fields, _objectSpread(_objectSpread({}, options), {}, {
        limit: 1
      }));
      return query.setResponseTarget(_query.ResponseTargets.SingleRecord);
    }
    /**
     * Find and fetch records only by specifying fields to fetch.
     */

  }, {
    key: "select",
    value: function select(fields) {
      var _context6;

      return (0, _find["default"])(_context6 = this).call(_context6, null, fields);
    }
    /**
     * Count num of records which matches given conditions
     */

  }, {
    key: "count",
    value: function count(conditions) {
      var _context7;

      var query = (0, _find["default"])(_context7 = this).call(_context7, conditions, 'count()');
      return query.setResponseTarget(_query.ResponseTargets.Count);
    }
    /**
     * Returns the list of list views for the SObject
     *
     * @param {Callback.<ListViewsInfo>} [callback] - Callback function
     * @returns {Promise.<ListViewsInfo>}
     */

  }, {
    key: "listviews",
    value: function listviews() {
      var _context8;

      var url = (0, _concat["default"])(_context8 = "".concat(this._conn._baseUrl(), "/sobjects/")).call(_context8, this.type, "/listviews");
      return this._conn.request(url);
    }
    /**
     * Returns the list view info in specifed view id
     *
     * @param {String} id - List view ID
     * @returns {ListView}
     */

  }, {
    key: "listview",
    value: function listview(id) {
      return new ListView(this._conn, this.type, id); // eslint-disable-line no-use-before-define
    }
    /**
     * Returns all registered quick actions for the SObject
     *
     * @param {Callback.<Array.<QuickAction~QuickActionInfo>>} [callback] - Callback function
     * @returns {Promise.<Array.<QuickAction~QuickActionInfo>>}
     */

  }, {
    key: "quickActions",
    value: function quickActions() {
      return this._conn.request("/sobjects/".concat(this.type, "/quickActions"));
    }
    /**
     * Get reference for specified quick aciton in the SObject
     *
     * @param {String} actionName - Name of the quick action
     * @returns {QuickAction}
     */

  }, {
    key: "quickAction",
    value: function quickAction(actionName) {
      var _context9;

      return new _quickAction["default"](this._conn, (0, _concat["default"])(_context9 = "/sobjects/".concat(this.type, "/quickActions/")).call(_context9, actionName));
    }
  }]);
  return SObject;
}();
/**
 * A class for organizing list view information
 *
 * @protected
 * @class ListView
 * @param {Connection} conn - Connection instance
 * @param {SObject} type - SObject type
 * @param {String} id - List view ID
 */


exports["default"] = SObject;
(0, _defineProperty3["default"])(SObject, "_logger", (0, _logger.getLogger)('sobject'));

var ListView = /*#__PURE__*/function () {
  /**
   *
   */
  function ListView(conn, type, id) {
    (0, _classCallCheck2["default"])(this, ListView);
    (0, _defineProperty3["default"])(this, "_conn", void 0);
    (0, _defineProperty3["default"])(this, "type", void 0);
    (0, _defineProperty3["default"])(this, "id", void 0);
    this._conn = conn;
    this.type = type;
    this.id = id;
  }
  /**
   * Executes query for the list view and returns the resulting data and presentation information.
   */


  (0, _createClass2["default"])(ListView, [{
    key: "results",
    value: function results() {
      var _context12, _context13;

      var url = (0, _concat["default"])(_context12 = (0, _concat["default"])(_context13 = "".concat(this._conn._baseUrl(), "/sobjects/")).call(_context13, this.type, "/listviews/")).call(_context12, this.id, "/results");
      return this._conn.request(url);
    }
    /**
     * Returns detailed information about a list view
     */

  }, {
    key: "describe",
    value: function describe() {
      var _context14, _context15;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var url = (0, _concat["default"])(_context14 = (0, _concat["default"])(_context15 = "".concat(this._conn._baseUrl(), "/sobjects/")).call(_context15, this.type, "/listviews/")).call(_context14, this.id, "/describe");
      return this._conn.request({
        method: 'GET',
        url: url,
        headers: options.headers
      });
    }
    /**
     * Explain plan for executing list view
     */

  }, {
    key: "explain",
    value: function explain() {
      var url = "/query/?explain=".concat(this.id);
      return this._conn.request(url);
    }
  }]);
  return ListView;
}(); // TODO Bulk
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zb2JqZWN0LnRzIl0sIm5hbWVzIjpbIlNPYmplY3QiLCJjb25uIiwidHlwZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJfY29ubiIsIl9sb2dnZXIiLCJfbG9nTGV2ZWwiLCJjcmVhdGVJbnN0YW5jZSIsImNhY2hlIiwibGF5b3V0Q2FjaGVLZXkiLCJsYXlvdXROYW1lIiwibGF5b3V0cyIsInByb3RvdHlwZSIsImNyZWF0ZUNhY2hlZEZ1bmN0aW9uIiwia2V5Iiwic3RyYXRlZ3kiLCJsYXlvdXRzJCIsImxheW91dHMkJCIsImNvbXBhY3RMYXlvdXRDYWNoZUtleSIsImNvbXBhY3RMYXlvdXRzIiwiY29tcGFjdExheW91dHMkIiwiY29tcGFjdExheW91dHMkJCIsImFwcHJvdmFsTGF5b3V0Q2FjaGVLZXkiLCJhcHByb3ZhbExheW91dHMiLCJhcHByb3ZhbExheW91dHMkIiwiYXBwcm92YWxMYXlvdXRzJCQiLCJyZWNvcmRzIiwib3B0aW9ucyIsImlkcyIsInJldHJpZXZlIiwidXBkYXRlIiwiZXh0SWRGaWVsZCIsInVwc2VydCIsImRlc2NyaWJlIiwiZGVzY3JpYmUkIiwiZGVzY3JpYmUkJCIsImlkIiwiUmVjb3JkUmVmZXJlbmNlIiwicmVjZW50Iiwic3RhcnQiLCJlbmQiLCJ1cGRhdGVkIiwiZGVsZXRlZCIsInVybCIsInJlcXVlc3QiLCJib2R5IiwiY29uZGl0aW9ucyIsImZpZWxkcyIsInNvcnQiLCJsaW1pdCIsIm9mZnNldCIsInFvcHRpb25zIiwiY29uZmlnIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0YWJsZSIsInF1ZXJ5IiwiUXVlcnkiLCJzZXRSZXNwb25zZVRhcmdldCIsIlJlc3BvbnNlVGFyZ2V0cyIsIlJlY29yZHMiLCJTaW5nbGVSZWNvcmQiLCJDb3VudCIsIl9iYXNlVXJsIiwiTGlzdFZpZXciLCJhY3Rpb25OYW1lIiwiUXVpY2tBY3Rpb24iLCJtZXRob2QiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBdUJBOztBQUNBOztBQU9BOzs7Ozs7QUFrQkE7QUFDQTtBQUNBO0lBQ3FCQSxPO0FBY25CO0FBR0E7QUFHQTs7QUFNQTtBQUNGO0FBQ0E7QUFDRSxtQkFBWUMsSUFBWixFQUFpQ0MsSUFBakMsRUFBMEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQXNFakMsS0FBS0MsTUF0RTRCO0FBQUEscURBNElqQyxLQUFLQyxPQTVJNEI7QUFBQSxrREFpSnBDLEtBQUtBLE9BakorQjtBQUN4QyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLRyxLQUFMLEdBQWFKLElBQWI7QUFDQSxTQUFLSyxPQUFMLEdBQWVMLElBQUksQ0FBQ00sU0FBTCxHQUNYUCxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JFLGNBQWhCLENBQStCUCxJQUFJLENBQUNNLFNBQXBDLENBRFcsR0FFWFAsT0FBTyxDQUFDTSxPQUZaO0FBR0EsUUFBTUcsS0FBSyxHQUFHLEtBQUtKLEtBQUwsQ0FBV0ksS0FBekI7O0FBQ0EsUUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxVQUFEO0FBQUEsYUFDckJBLFVBQVUsa0NBQ2tCQSxVQURsQixzQkFFSyxLQUFJLENBQUNULElBRlYsQ0FEVztBQUFBLEtBQXZCOztBQUlBLFFBQU1VLE9BQU8sR0FBR1osT0FBTyxDQUFDYSxTQUFSLENBQWtCRCxPQUFsQztBQUNBLFNBQUtBLE9BQUwsR0FBZUgsS0FBSyxDQUFDSyxvQkFBTixDQUEyQkYsT0FBM0IsRUFBb0MsSUFBcEMsRUFBMEM7QUFDdkRHLE1BQUFBLEdBQUcsRUFBRUwsY0FEa0Q7QUFFdkRNLE1BQUFBLFFBQVEsRUFBRTtBQUY2QyxLQUExQyxDQUFmO0FBSUEsU0FBS0MsUUFBTCxHQUFnQlIsS0FBSyxDQUFDSyxvQkFBTixDQUEyQkYsT0FBM0IsRUFBb0MsSUFBcEMsRUFBMEM7QUFDeERHLE1BQUFBLEdBQUcsRUFBRUwsY0FEbUQ7QUFFeERNLE1BQUFBLFFBQVEsRUFBRTtBQUY4QyxLQUExQyxDQUFoQjtBQUlBLFNBQUtFLFNBQUwsR0FBaUJULEtBQUssQ0FBQ0ssb0JBQU4sQ0FBMkJGLE9BQTNCLEVBQW9DLElBQXBDLEVBQTBDO0FBQ3pERyxNQUFBQSxHQUFHLEVBQUVMLGNBRG9EO0FBRXpETSxNQUFBQSxRQUFRLEVBQUU7QUFGK0MsS0FBMUMsQ0FBakI7QUFJQSxRQUFNRyxxQkFBcUIsNEJBQXFCLEtBQUtqQixJQUExQixDQUEzQjtBQUNBLFFBQU1rQixjQUFjLEdBQUdwQixPQUFPLENBQUNhLFNBQVIsQ0FBa0JPLGNBQXpDO0FBQ0EsU0FBS0EsY0FBTCxHQUFzQlgsS0FBSyxDQUFDSyxvQkFBTixDQUEyQk0sY0FBM0IsRUFBMkMsSUFBM0MsRUFBaUQ7QUFDckVMLE1BQUFBLEdBQUcsRUFBRUkscUJBRGdFO0FBRXJFSCxNQUFBQSxRQUFRLEVBQUU7QUFGMkQsS0FBakQsQ0FBdEI7QUFJQSxTQUFLSyxlQUFMLEdBQXVCWixLQUFLLENBQUNLLG9CQUFOLENBQTJCTSxjQUEzQixFQUEyQyxJQUEzQyxFQUFpRDtBQUN0RUwsTUFBQUEsR0FBRyxFQUFFSSxxQkFEaUU7QUFFdEVILE1BQUFBLFFBQVEsRUFBRTtBQUY0RCxLQUFqRCxDQUF2QjtBQUlBLFNBQUtNLGdCQUFMLEdBQXdCYixLQUFLLENBQUNLLG9CQUFOLENBQTJCTSxjQUEzQixFQUEyQyxJQUEzQyxFQUFpRDtBQUN2RUwsTUFBQUEsR0FBRyxFQUFFSSxxQkFEa0U7QUFFdkVILE1BQUFBLFFBQVEsRUFBRTtBQUY2RCxLQUFqRCxDQUF4QjtBQUlBLFFBQU1PLHNCQUFzQiw2QkFBc0IsS0FBS3JCLElBQTNCLENBQTVCO0FBQ0EsUUFBTXNCLGVBQWUsR0FBR3hCLE9BQU8sQ0FBQ2EsU0FBUixDQUFrQlcsZUFBMUM7QUFDQSxTQUFLQSxlQUFMLEdBQXVCZixLQUFLLENBQUNLLG9CQUFOLENBQTJCVSxlQUEzQixFQUE0QyxJQUE1QyxFQUFrRDtBQUN2RVQsTUFBQUEsR0FBRyxFQUFFUSxzQkFEa0U7QUFFdkVQLE1BQUFBLFFBQVEsRUFBRTtBQUY2RCxLQUFsRCxDQUF2QjtBQUlBLFNBQUtTLGdCQUFMLEdBQXdCaEIsS0FBSyxDQUFDSyxvQkFBTixDQUEyQlUsZUFBM0IsRUFBNEMsSUFBNUMsRUFBa0Q7QUFDeEVULE1BQUFBLEdBQUcsRUFBRVEsc0JBRG1FO0FBRXhFUCxNQUFBQSxRQUFRLEVBQUU7QUFGOEQsS0FBbEQsQ0FBeEI7QUFJQSxTQUFLVSxpQkFBTCxHQUF5QmpCLEtBQUssQ0FBQ0ssb0JBQU4sQ0FBMkJVLGVBQTNCLEVBQTRDLElBQTVDLEVBQWtEO0FBQ3pFVCxNQUFBQSxHQUFHLEVBQUVRLHNCQURvRTtBQUV6RVAsTUFBQUEsUUFBUSxFQUFFO0FBRitELEtBQWxELENBQXpCO0FBSUQ7QUFFRDtBQUNGO0FBQ0E7Ozs7OzJCQU9TVyxPLEVBQXNDQyxPLEVBQXNCO0FBQ2pFLGFBQU8sS0FBS3ZCLEtBQUwsQ0FBV0YsTUFBWCxDQUFrQixLQUFLRCxJQUF2QixFQUE2QnlCLE9BQTdCLEVBQXNDQyxPQUF0QyxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7NkJBWVdDLEcsRUFBd0JELE8sRUFBMkI7QUFDMUQsYUFBTyxLQUFLdkIsS0FBTCxDQUFXeUIsUUFBWCxDQUFvQixLQUFLNUIsSUFBekIsRUFBK0IyQixHQUEvQixFQUFvQ0QsT0FBcEMsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7OzJCQU9TRCxPLEVBQXdDQyxPLEVBQXNCO0FBQ25FLGFBQU8sS0FBS3ZCLEtBQUwsQ0FBVzBCLE1BQVgsQ0FBa0IsS0FBSzdCLElBQXZCLEVBQTZCeUIsT0FBN0IsRUFBc0NDLE9BQXRDLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OzsyQkFpQklELE8sRUFDQUssVSxFQUNBSixPLEVBQ0E7QUFDQSxhQUFPLEtBQUt2QixLQUFMLENBQVc0QixNQUFYLENBQWtCLEtBQUsvQixJQUF2QixFQUE2QnlCLE9BQTdCLEVBQXNDSyxVQUF0QyxFQUFrREosT0FBbEQsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7OzRCQU9VQyxHLEVBQXdCRCxPLEVBQXNCO0FBQ3BELGFBQU8sS0FBS3ZCLEtBQUwsQ0FBV0QsT0FBWCxDQUFtQixLQUFLRixJQUF4QixFQUE4QjJCLEdBQTlCLEVBQW1DRCxPQUFuQyxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7O0FBUUU7QUFDRjtBQUNBOytCQUNhO0FBQ1QsYUFBTyxLQUFLdkIsS0FBTCxDQUFXNkIsUUFBWCxDQUFvQixLQUFLaEMsSUFBekIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7O2dDQUNjO0FBQ1YsYUFBTyxLQUFLRyxLQUFMLENBQVc4QixTQUFYLENBQXFCLEtBQUtqQyxJQUExQixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7aUNBQ2U7QUFDWCxhQUFPLEtBQUtHLEtBQUwsQ0FBVytCLFVBQVgsQ0FBc0IsS0FBS2xDLElBQTNCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OzsyQkFDU21DLEUsRUFBbUM7QUFDeEMsYUFBTyxJQUFJQywyQkFBSixDQUFvQixLQUFLakMsS0FBekIsRUFBZ0MsS0FBS0gsSUFBckMsRUFBMkNtQyxFQUEzQyxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7NkJBQ1c7QUFDUCxhQUFPLEtBQUtoQyxLQUFMLENBQVdrQyxNQUFYLENBQWtCLEtBQUtyQyxJQUF2QixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7NEJBQ1VzQyxLLEVBQXNCQyxHLEVBQW9CO0FBQ2hELGFBQU8sS0FBS3BDLEtBQUwsQ0FBV3FDLE9BQVgsQ0FBbUIsS0FBS3hDLElBQXhCLEVBQThCc0MsS0FBOUIsRUFBcUNDLEdBQXJDLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7Ozs0QkFDVUQsSyxFQUFzQkMsRyxFQUFvQjtBQUNoRCxhQUFPLEtBQUtwQyxLQUFMLENBQVdzQyxPQUFYLENBQW1CLEtBQUt6QyxJQUF4QixFQUE4QnNDLEtBQTlCLEVBQXFDQyxHQUFyQyxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7O29IQUNnQjlCLFU7Ozs7Ozs7O0FBQ05pQyxnQkFBQUEsRywwREFBbUIsS0FBSzFDLEksZ0NBQzVCUyxVQUFVLDBCQUFtQkEsVUFBbkIsSUFBa0MsUzs7dUJBRTNCLEtBQUtOLEtBQUwsQ0FBV3dDLE9BQVgsQ0FBbUJELEdBQW5CLEM7OztBQUFiRSxnQkFBQUEsSTtrREFDQ0EsSTs7Ozs7Ozs7Ozs7Ozs7OztBQUdUO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRVVGLGdCQUFBQSxHLHVCQUFtQixLQUFLMUMsSTs7dUJBQ1gsS0FBS0csS0FBTCxDQUFXd0MsT0FBWCxDQUFtQkQsR0FBbkIsQzs7O0FBQWJFLGdCQUFBQSxJO2tEQUNDQSxJOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUVVRixnQkFBQUEsRyx1QkFBbUIsS0FBSzFDLEk7O3VCQUNYLEtBQUtHLEtBQUwsQ0FBV3dDLE9BQVgsQ0FBbUJELEdBQW5CLEM7OztBQUFiRSxnQkFBQUEsSTtrREFDQ0EsSTs7Ozs7Ozs7Ozs7Ozs7OztBQUdUO0FBQ0Y7QUFDQTs7Ozt5QkFjSUMsVSxFQUNBQyxNLEVBRTZCO0FBQUEsVUFEN0JwQixPQUM2Qix1RUFEQSxFQUNBO0FBQUEsVUFDckJxQixJQURxQix5QkFDZ0JyQixPQURoQjtBQUFBLFVBQ2ZzQixLQURlLEdBQ2dCdEIsT0FEaEIsQ0FDZnNCLEtBRGU7QUFBQSxVQUNSQyxNQURRLEdBQ2dCdkIsT0FEaEIsQ0FDUnVCLE1BRFE7QUFBQSxVQUNHQyxRQURILDZDQUNnQnhCLE9BRGhCO0FBRTdCLFVBQU15QixNQUF5QixHQUFHO0FBQ2hDTCxRQUFBQSxNQUFNLEVBQUVBLE1BQU0sSUFBSSxJQUFWLEdBQWlCTSxTQUFqQixHQUE2Qk4sTUFETDtBQUVoQ08sUUFBQUEsUUFBUSw0QkFBRTNCLE9BQUYsQ0FGd0I7QUFHaEM0QixRQUFBQSxLQUFLLEVBQUUsS0FBS3RELElBSG9CO0FBSWhDNkMsUUFBQUEsVUFBVSxFQUFFQSxVQUFVLElBQUksSUFBZCxHQUFxQk8sU0FBckIsR0FBaUNQLFVBSmI7QUFLaENFLFFBQUFBLElBQUksRUFBSkEsSUFMZ0M7QUFNaENDLFFBQUFBLEtBQUssRUFBTEEsS0FOZ0M7QUFPaENDLFFBQUFBLE1BQU0sRUFBTkE7QUFQZ0MsT0FBbEM7QUFTQSxVQUFNTSxLQUFLLEdBQUcsSUFBSUMsaUJBQUosQ0FBZ0IsS0FBS3JELEtBQXJCLEVBQTRCZ0QsTUFBNUIsRUFBb0NELFFBQXBDLENBQWQ7QUFDQSxhQUFPSyxLQUFLLENBQUNFLGlCQUFOLENBQXdCQyx1QkFBZ0JDLE9BQXhDLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7Ozs0QkFjSWQsVSxFQUNBQyxNLEVBRWtDO0FBQUE7O0FBQUEsVUFEbENwQixPQUNrQyx1RUFETCxFQUNLO0FBQ2xDLFVBQU02QixLQUFLLEdBQUcsd0RBQVVWLFVBQVYsRUFBc0JDLE1BQXRCLGtDQUFtQ3BCLE9BQW5DO0FBQTRDc0IsUUFBQUEsS0FBSyxFQUFFO0FBQW5ELFNBQWQ7QUFDQSxhQUFPTyxLQUFLLENBQUNFLGlCQUFOLENBQXdCQyx1QkFBZ0JFLFlBQXhDLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OzsyQkFNSWQsTSxFQUNxRDtBQUFBOztBQUNyRCxhQUFPLHdEQUFVLElBQVYsRUFBZ0JBLE1BQWhCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OzswQkFDUUQsVSxFQUE2QztBQUFBOztBQUNqRCxVQUFNVSxLQUFLLEdBQUcsd0RBQVVWLFVBQVYsRUFBc0IsU0FBdEIsQ0FBZDtBQUNBLGFBQU9VLEtBQUssQ0FBQ0UsaUJBQU4sQ0FBd0JDLHVCQUFnQkcsS0FBeEMsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2dDQUNjO0FBQUE7O0FBQ1YsVUFBTW5CLEdBQUcsaURBQU0sS0FBS3ZDLEtBQUwsQ0FBVzJELFFBQVgsRUFBTixpQ0FBd0MsS0FBSzlELElBQTdDLGVBQVQ7QUFDQSxhQUFPLEtBQUtHLEtBQUwsQ0FBV3dDLE9BQVgsQ0FBbUJELEdBQW5CLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs2QkFDV1AsRSxFQUFZO0FBQ25CLGFBQU8sSUFBSTRCLFFBQUosQ0FBYSxLQUFLNUQsS0FBbEIsRUFBeUIsS0FBS0gsSUFBOUIsRUFBb0NtQyxFQUFwQyxDQUFQLENBRG1CLENBQzZCO0FBQ2pEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O21DQUNpQjtBQUNiLGFBQU8sS0FBS2hDLEtBQUwsQ0FBV3dDLE9BQVgscUJBQWdDLEtBQUszQyxJQUFyQyxtQkFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2dDQUNjZ0UsVSxFQUFvQjtBQUFBOztBQUM5QixhQUFPLElBQUlDLHVCQUFKLENBQ0wsS0FBSzlELEtBREEsMERBRVEsS0FBS0gsSUFGYixxQ0FFa0NnRSxVQUZsQyxFQUFQO0FBSUQ7Ozs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7aUNBOVlxQmxFLE8sYUFRRix1QkFBVSxTQUFWLEM7O0lBdVliaUUsUTtBQUtKO0FBQ0Y7QUFDQTtBQUNFLG9CQUFZaEUsSUFBWixFQUE4QkMsSUFBOUIsRUFBNENtQyxFQUE1QyxFQUF3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RELFNBQUtoQyxLQUFMLEdBQWFKLElBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLbUMsRUFBTCxHQUFVQSxFQUFWO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7OzhCQUNZO0FBQUE7O0FBQ1IsVUFBTU8sR0FBRyx1RkFBTSxLQUFLdkMsS0FBTCxDQUFXMkQsUUFBWCxFQUFOLGtDQUF3QyxLQUFLOUQsSUFBN0MsbUNBQ1AsS0FBS21DLEVBREUsYUFBVDtBQUdBLGFBQU8sS0FBS2hDLEtBQUwsQ0FBV3dDLE9BQVgsQ0FBbUJELEdBQW5CLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OzsrQkFDbUU7QUFBQTs7QUFBQSxVQUF4RGhCLE9BQXdELHVFQUFKLEVBQUk7QUFDL0QsVUFBTWdCLEdBQUcsdUZBQU0sS0FBS3ZDLEtBQUwsQ0FBVzJELFFBQVgsRUFBTixrQ0FBd0MsS0FBSzlELElBQTdDLG1DQUNQLEtBQUttQyxFQURFLGNBQVQ7QUFHQSxhQUFPLEtBQUtoQyxLQUFMLENBQVd3QyxPQUFYLENBQW1CO0FBQUV1QixRQUFBQSxNQUFNLEVBQUUsS0FBVjtBQUFpQnhCLFFBQUFBLEdBQUcsRUFBSEEsR0FBakI7QUFBc0J5QixRQUFBQSxPQUFPLEVBQUV6QyxPQUFPLENBQUN5QztBQUF2QyxPQUFuQixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7OEJBQ1k7QUFDUixVQUFNekIsR0FBRyw2QkFBc0IsS0FBS1AsRUFBM0IsQ0FBVDtBQUNBLGFBQU8sS0FBS2hDLEtBQUwsQ0FBV3dDLE9BQVgsQ0FBbUJELEdBQW5CLENBQVA7QUFDRDs7O0tBR0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICovXHJcbmltcG9ydCB7IExvZ2dlciwgZ2V0TG9nZ2VyIH0gZnJvbSAnLi91dGlsL2xvZ2dlcic7XHJcbmltcG9ydCB7XHJcbiAgUmVjb3JkLFxyXG4gIERlc2NyaWJlTGF5b3V0UmVzdWx0LFxyXG4gIERlc2NyaWJlQ29tcGFjdExheW91dHNSZXN1bHQsXHJcbiAgRGVzY3JpYmVBcHByb3ZhbExheW91dHNSZXN1bHQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgRG1sT3B0aW9ucyxcclxuICBTYXZlUmVzdWx0LFxyXG4gIFJldHJpZXZlT3B0aW9ucyxcclxuICBTY2hlbWEsXHJcbiAgU09iamVjdE5hbWVzLFxyXG4gIFNPYmplY3RSZWNvcmQsXHJcbiAgU09iamVjdElucHV0UmVjb3JkLFxyXG4gIFNPYmplY3RVcGRhdGVSZWNvcmQsXHJcbiAgQ2hpbGRSZWxhdGlvbnNoaXBOYW1lcyxcclxuICBDaGlsZFJlbGF0aW9uc2hpcFNPYmplY3ROYW1lLFxyXG4gIFNPYmplY3RGaWVsZE5hbWVzLFxyXG4gIEZpZWxkUHJvamVjdGlvbkNvbmZpZyxcclxuICBGaWVsZFBhdGhTcGVjaWZpZXIsXHJcbiAgRmllbGRQYXRoU2NvcGVkUHJvamVjdGlvbixcclxufSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcclxuaW1wb3J0IFJlY29yZFJlZmVyZW5jZSBmcm9tICcuL3JlY29yZC1yZWZlcmVuY2UnO1xyXG5pbXBvcnQgUXVlcnksIHtcclxuICBSZXNwb25zZVRhcmdldHMsXHJcbiAgUXVlcnlPcHRpb25zLFxyXG4gIFF1ZXJ5RmllbGQsXHJcbiAgUXVlcnlDb25kaXRpb24sXHJcbiAgUXVlcnlDb25maWcsXHJcbn0gZnJvbSAnLi9xdWVyeSc7XHJcbmltcG9ydCBRdWlja0FjdGlvbiBmcm9tICcuL3F1aWNrLWFjdGlvbic7XHJcbmltcG9ydCB7IENhY2hlZEZ1bmN0aW9uIH0gZnJvbSAnLi9jYWNoZSc7XHJcblxyXG50eXBlIENoaWxkUXVlcnlDb25maWdQYXJhbTxcclxuICBTIGV4dGVuZHMgU2NoZW1hLFxyXG4gIE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4sXHJcbiAgQ1JOIGV4dGVuZHMgQ2hpbGRSZWxhdGlvbnNoaXBOYW1lczxTLCBOPixcclxuICBDTiBleHRlbmRzIFNPYmplY3ROYW1lczxTPiA9IENoaWxkUmVsYXRpb25zaGlwU09iamVjdE5hbWU8UywgTiwgQ1JOPlxyXG4+ID0gUXVlcnlDb25maWc8UywgQ04+O1xyXG5cclxuZXhwb3J0IHR5cGUgRmluZE9wdGlvbnM8UyBleHRlbmRzIFNjaGVtYSwgTiBleHRlbmRzIFNPYmplY3ROYW1lczxTPj4gPSBQYXJ0aWFsPFxyXG4gIFF1ZXJ5T3B0aW9ucyAmXHJcbiAgICBQaWNrPFF1ZXJ5Q29uZmlnPFMsIE4+LCAnc29ydCcgfCAnaW5jbHVkZXMnPiAmIHtcclxuICAgICAgbGltaXQ6IG51bWJlcjtcclxuICAgICAgb2Zmc2V0OiBudW1iZXI7XHJcbiAgICB9XHJcbj47XHJcblxyXG4vKipcclxuICogQSBjbGFzcyBmb3Igb3JnYW5pemluZyBhbGwgU09iamVjdCBhY2Nlc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNPYmplY3Q8XHJcbiAgUyBleHRlbmRzIFNjaGVtYSxcclxuICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxyXG4gIEZpZWxkTmFtZXMgZXh0ZW5kcyBTT2JqZWN0RmllbGROYW1lczxTLCBOPiA9IFNPYmplY3RGaWVsZE5hbWVzPFMsIE4+LFxyXG4gIFJldHJpZXZlUmVjb3JkIGV4dGVuZHMgU09iamVjdFJlY29yZDxTLCBOLCAnKic+ID0gU09iamVjdFJlY29yZDxTLCBOLCAnKic+LFxyXG4gIElucHV0UmVjb3JkIGV4dGVuZHMgU09iamVjdElucHV0UmVjb3JkPFMsIE4+ID0gU09iamVjdElucHV0UmVjb3JkPFMsIE4+LFxyXG4gIFVwZGF0ZVJlY29yZCBleHRlbmRzIFNPYmplY3RVcGRhdGVSZWNvcmQ8UywgTj4gPSBTT2JqZWN0VXBkYXRlUmVjb3JkPFMsIE4+XHJcbj4ge1xyXG4gIHN0YXRpYyBfbG9nZ2VyID0gZ2V0TG9nZ2VyKCdzb2JqZWN0Jyk7XHJcblxyXG4gIHR5cGU6IE47XHJcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XHJcbiAgX2xvZ2dlcjogTG9nZ2VyO1xyXG5cclxuICAvLyBsYXlvdXRzOiAobG4/OiBzdHJpbmcpID0+IFByb21pc2U8RGVzY3JpYmVMYXlvdXRSZXN1bHQ+O1xyXG4gIGxheW91dHMkOiBDYWNoZWRGdW5jdGlvbjwobG4/OiBzdHJpbmcpID0+IFByb21pc2U8RGVzY3JpYmVMYXlvdXRSZXN1bHQ+PjtcclxuICBsYXlvdXRzJCQ6IENhY2hlZEZ1bmN0aW9uPChsbj86IHN0cmluZykgPT4gRGVzY3JpYmVMYXlvdXRSZXN1bHQ+O1xyXG4gIC8vIGNvbXBhY3RMYXlvdXRzOiAoKSA9PiBQcm9taXNlPERlc2NyaWJlQ29tcGFjdExheW91dHNSZXN1bHQ+O1xyXG4gIGNvbXBhY3RMYXlvdXRzJDogQ2FjaGVkRnVuY3Rpb248KCkgPT4gUHJvbWlzZTxEZXNjcmliZUNvbXBhY3RMYXlvdXRzUmVzdWx0Pj47XHJcbiAgY29tcGFjdExheW91dHMkJDogQ2FjaGVkRnVuY3Rpb248KCkgPT4gRGVzY3JpYmVDb21wYWN0TGF5b3V0c1Jlc3VsdD47XHJcbiAgLy8gYXBwcm92YWxMYXlvdXRzOiAoKSA9PiBQcm9taXNlPERlc2NyaWJlQXBwcm92YWxMYXlvdXRzUmVzdWx0PjtcclxuICBhcHByb3ZhbExheW91dHMkOiBDYWNoZWRGdW5jdGlvbjxcclxuICAgICgpID0+IFByb21pc2U8RGVzY3JpYmVBcHByb3ZhbExheW91dHNSZXN1bHQ+XHJcbiAgPjtcclxuICBhcHByb3ZhbExheW91dHMkJDogQ2FjaGVkRnVuY3Rpb248KCkgPT4gRGVzY3JpYmVBcHByb3ZhbExheW91dHNSZXN1bHQ+O1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4sIHR5cGU6IE4pIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLl9jb25uID0gY29ubjtcclxuICAgIHRoaXMuX2xvZ2dlciA9IGNvbm4uX2xvZ0xldmVsXHJcbiAgICAgID8gU09iamVjdC5fbG9nZ2VyLmNyZWF0ZUluc3RhbmNlKGNvbm4uX2xvZ0xldmVsKVxyXG4gICAgICA6IFNPYmplY3QuX2xvZ2dlcjtcclxuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5fY29ubi5jYWNoZTtcclxuICAgIGNvbnN0IGxheW91dENhY2hlS2V5ID0gKGxheW91dE5hbWU6IHN0cmluZykgPT5cclxuICAgICAgbGF5b3V0TmFtZVxyXG4gICAgICAgID8gYGxheW91dHMubmFtZWRMYXlvdXRzLiR7bGF5b3V0TmFtZX1gXHJcbiAgICAgICAgOiBgbGF5b3V0cy4ke3RoaXMudHlwZX1gO1xyXG4gICAgY29uc3QgbGF5b3V0cyA9IFNPYmplY3QucHJvdG90eXBlLmxheW91dHM7XHJcbiAgICB0aGlzLmxheW91dHMgPSBjYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihsYXlvdXRzLCB0aGlzLCB7XHJcbiAgICAgIGtleTogbGF5b3V0Q2FjaGVLZXksXHJcbiAgICAgIHN0cmF0ZWd5OiAnTk9DQUNIRScsXHJcbiAgICB9KTtcclxuICAgIHRoaXMubGF5b3V0cyQgPSBjYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihsYXlvdXRzLCB0aGlzLCB7XHJcbiAgICAgIGtleTogbGF5b3V0Q2FjaGVLZXksXHJcbiAgICAgIHN0cmF0ZWd5OiAnSElUJyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5sYXlvdXRzJCQgPSBjYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihsYXlvdXRzLCB0aGlzLCB7XHJcbiAgICAgIGtleTogbGF5b3V0Q2FjaGVLZXksXHJcbiAgICAgIHN0cmF0ZWd5OiAnSU1NRURJQVRFJyxcclxuICAgIH0pIGFzIGFueTtcclxuICAgIGNvbnN0IGNvbXBhY3RMYXlvdXRDYWNoZUtleSA9IGBjb21wYWN0TGF5b3V0cy4ke3RoaXMudHlwZX1gO1xyXG4gICAgY29uc3QgY29tcGFjdExheW91dHMgPSBTT2JqZWN0LnByb3RvdHlwZS5jb21wYWN0TGF5b3V0cztcclxuICAgIHRoaXMuY29tcGFjdExheW91dHMgPSBjYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihjb21wYWN0TGF5b3V0cywgdGhpcywge1xyXG4gICAgICBrZXk6IGNvbXBhY3RMYXlvdXRDYWNoZUtleSxcclxuICAgICAgc3RyYXRlZ3k6ICdOT0NBQ0hFJyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb21wYWN0TGF5b3V0cyQgPSBjYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihjb21wYWN0TGF5b3V0cywgdGhpcywge1xyXG4gICAgICBrZXk6IGNvbXBhY3RMYXlvdXRDYWNoZUtleSxcclxuICAgICAgc3RyYXRlZ3k6ICdISVQnLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbXBhY3RMYXlvdXRzJCQgPSBjYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihjb21wYWN0TGF5b3V0cywgdGhpcywge1xyXG4gICAgICBrZXk6IGNvbXBhY3RMYXlvdXRDYWNoZUtleSxcclxuICAgICAgc3RyYXRlZ3k6ICdJTU1FRElBVEUnLFxyXG4gICAgfSkgYXMgYW55O1xyXG4gICAgY29uc3QgYXBwcm92YWxMYXlvdXRDYWNoZUtleSA9IGBhcHByb3ZhbExheW91dHMuJHt0aGlzLnR5cGV9YDtcclxuICAgIGNvbnN0IGFwcHJvdmFsTGF5b3V0cyA9IFNPYmplY3QucHJvdG90eXBlLmFwcHJvdmFsTGF5b3V0cztcclxuICAgIHRoaXMuYXBwcm92YWxMYXlvdXRzID0gY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24oYXBwcm92YWxMYXlvdXRzLCB0aGlzLCB7XHJcbiAgICAgIGtleTogYXBwcm92YWxMYXlvdXRDYWNoZUtleSxcclxuICAgICAgc3RyYXRlZ3k6ICdOT0NBQ0hFJyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hcHByb3ZhbExheW91dHMkID0gY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24oYXBwcm92YWxMYXlvdXRzLCB0aGlzLCB7XHJcbiAgICAgIGtleTogYXBwcm92YWxMYXlvdXRDYWNoZUtleSxcclxuICAgICAgc3RyYXRlZ3k6ICdISVQnLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFwcHJvdmFsTGF5b3V0cyQkID0gY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24oYXBwcm92YWxMYXlvdXRzLCB0aGlzLCB7XHJcbiAgICAgIGtleTogYXBwcm92YWxMYXlvdXRDYWNoZUtleSxcclxuICAgICAgc3RyYXRlZ3k6ICdJTU1FRElBVEUnLFxyXG4gICAgfSkgYXMgYW55O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHJlY29yZHNcclxuICAgKi9cclxuICBjcmVhdGUocmVjb3JkczogSW5wdXRSZWNvcmRbXSwgb3B0aW9ucz86IERtbE9wdGlvbnMpOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XHJcbiAgY3JlYXRlKHJlY29yZHM6IElucHV0UmVjb3JkLCBvcHRpb25zPzogRG1sT3B0aW9ucyk6IFByb21pc2U8U2F2ZVJlc3VsdD47XHJcbiAgY3JlYXRlKFxyXG4gICAgcmVjb3JkczogSW5wdXRSZWNvcmQgfCBJbnB1dFJlY29yZFtdLFxyXG4gICAgb3B0aW9ucz86IERtbE9wdGlvbnMsXHJcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0IHwgU2F2ZVJlc3VsdFtdPjtcclxuICBjcmVhdGUocmVjb3JkczogSW5wdXRSZWNvcmQgfCBJbnB1dFJlY29yZFtdLCBvcHRpb25zPzogRG1sT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4uY3JlYXRlKHRoaXMudHlwZSwgcmVjb3Jkcywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIFNPYmplY3QjY3JlYXRlKClcclxuICAgKi9cclxuICBpbnNlcnQgPSB0aGlzLmNyZWF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgc3BlY2lmaWVkIHJlY29yZHNcclxuICAgKi9cclxuICByZXRyaWV2ZShpZHM6IHN0cmluZ1tdLCBvcHRpb25zPzogUmV0cmlldmVPcHRpb25zKTogUHJvbWlzZTxSZXRyaWV2ZVJlY29yZFtdPjtcclxuICByZXRyaWV2ZShpZHM6IHN0cmluZywgb3B0aW9ucz86IFJldHJpZXZlT3B0aW9ucyk6IFByb21pc2U8UmV0cmlldmVSZWNvcmQ+O1xyXG4gIHJldHJpZXZlKFxyXG4gICAgaWRzOiBzdHJpbmcgfCBzdHJpbmdbXSxcclxuICAgIG9wdGlvbnM/OiBSZXRyaWV2ZU9wdGlvbnMsXHJcbiAgKTogUHJvbWlzZTxSZXRyaWV2ZVJlY29yZCB8IFJldHJpZXZlUmVjb3JkW10+O1xyXG4gIHJldHJpZXZlKGlkczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbnM/OiBSZXRyaWV2ZU9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLnJldHJpZXZlKHRoaXMudHlwZSwgaWRzLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSByZWNvcmRzXHJcbiAgICovXHJcbiAgdXBkYXRlKHJlY29yZHM6IFVwZGF0ZVJlY29yZFtdLCBvcHRpb25zPzogRG1sT3B0aW9ucyk6IFByb21pc2U8U2F2ZVJlc3VsdFtdPjtcclxuICB1cGRhdGUocmVjb3JkczogVXBkYXRlUmVjb3JkLCBvcHRpb25zPzogRG1sT3B0aW9ucyk6IFByb21pc2U8U2F2ZVJlc3VsdD47XHJcbiAgdXBkYXRlKFxyXG4gICAgcmVjb3JkczogVXBkYXRlUmVjb3JkIHwgVXBkYXRlUmVjb3JkW10sXHJcbiAgICBvcHRpb25zPzogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQgfCBTYXZlUmVzdWx0W10+O1xyXG4gIHVwZGF0ZShyZWNvcmRzOiBVcGRhdGVSZWNvcmQgfCBVcGRhdGVSZWNvcmRbXSwgb3B0aW9ucz86IERtbE9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLnVwZGF0ZSh0aGlzLnR5cGUsIHJlY29yZHMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBzZXJ0IHJlY29yZHNcclxuICAgKi9cclxuICB1cHNlcnQoXHJcbiAgICByZWNvcmRzOiBJbnB1dFJlY29yZFtdLFxyXG4gICAgZXh0SWRGaWVsZDogRmllbGROYW1lcyxcclxuICAgIG9wdGlvbnM/OiBEbWxPcHRpb25zLFxyXG4gICk6IFByb21pc2U8U2F2ZVJlc3VsdFtdPjtcclxuICB1cHNlcnQoXHJcbiAgICByZWNvcmRzOiBJbnB1dFJlY29yZCxcclxuICAgIGV4dElkRmllbGQ6IEZpZWxkTmFtZXMsXHJcbiAgICBvcHRpb25zPzogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQ+O1xyXG4gIHVwc2VydChcclxuICAgIHJlY29yZHM6IElucHV0UmVjb3JkIHwgSW5wdXRSZWNvcmRbXSxcclxuICAgIGV4dElkRmllbGQ6IEZpZWxkTmFtZXMsXHJcbiAgICBvcHRpb25zPzogRG1sT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQgfCBTYXZlUmVzdWx0W10+O1xyXG4gIHVwc2VydChcclxuICAgIHJlY29yZHM6IElucHV0UmVjb3JkIHwgSW5wdXRSZWNvcmRbXSxcclxuICAgIGV4dElkRmllbGQ6IEZpZWxkTmFtZXMsXHJcbiAgICBvcHRpb25zPzogRG1sT3B0aW9ucyxcclxuICApIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLnVwc2VydCh0aGlzLnR5cGUsIHJlY29yZHMsIGV4dElkRmllbGQsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlIHJlY29yZHNcclxuICAgKi9cclxuICBkZXN0cm95KGlkczogc3RyaW5nW10sIG9wdGlvbnM/OiBEbWxPcHRpb25zKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xyXG4gIGRlc3Ryb3koaWRzOiBzdHJpbmcsIG9wdGlvbnM/OiBEbWxPcHRpb25zKTogUHJvbWlzZTxTYXZlUmVzdWx0PjtcclxuICBkZXN0cm95KFxyXG4gICAgaWRzOiBzdHJpbmcgfCBzdHJpbmdbXSxcclxuICAgIG9wdGlvbnM/OiBEbWxPcHRpb25zLFxyXG4gICk6IFByb21pc2U8U2F2ZVJlc3VsdCB8IFNhdmVSZXN1bHRbXT47XHJcbiAgZGVzdHJveShpZHM6IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb25zPzogRG1sT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4uZGVzdHJveSh0aGlzLnR5cGUsIGlkcywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIFNPYmplY3QjZGVzdHJveSgpXHJcbiAgICovXHJcbiAgZGVsZXRlID0gdGhpcy5kZXN0cm95O1xyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIFNPYmplY3QjZGVzdHJveSgpXHJcbiAgICovXHJcbiAgZGVsID0gdGhpcy5kZXN0cm95O1xyXG5cclxuICAvKipcclxuICAgKiBEZXNjcmliZSBTT2JqZWN0IG1ldGFkYXRhXHJcbiAgICovXHJcbiAgZGVzY3JpYmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5kZXNjcmliZSh0aGlzLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBkZXNjcmliZSQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5kZXNjcmliZSQodGhpcy50eXBlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgZGVzY3JpYmUkJCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLmRlc2NyaWJlJCQodGhpcy50eXBlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCByZWNvcmQgcmVwcmVzZW50YXRpb24gaW5zdGFuY2UgYnkgZ2l2ZW4gaWRcclxuICAgKi9cclxuICByZWNvcmQoaWQ6IHN0cmluZyk6IFJlY29yZFJlZmVyZW5jZTxTLCBOPiB7XHJcbiAgICByZXR1cm4gbmV3IFJlY29yZFJlZmVyZW5jZSh0aGlzLl9jb25uLCB0aGlzLnR5cGUsIGlkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIHJlY2VudGx5IGFjY2Vzc2VkIHJlY29yZHNcclxuICAgKi9cclxuICByZWNlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZWNlbnQodGhpcy50eXBlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIHRoZSB1cGRhdGVkIHJlY29yZHNcclxuICAgKi9cclxuICB1cGRhdGVkKHN0YXJ0OiBzdHJpbmcgfCBEYXRlLCBlbmQ6IHN0cmluZyB8IERhdGUpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLnVwZGF0ZWQodGhpcy50eXBlLCBzdGFydCwgZW5kKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIHRoZSBkZWxldGVkIHJlY29yZHNcclxuICAgKi9cclxuICBkZWxldGVkKHN0YXJ0OiBzdHJpbmcgfCBEYXRlLCBlbmQ6IHN0cmluZyB8IERhdGUpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLmRlbGV0ZWQodGhpcy50eXBlLCBzdGFydCwgZW5kKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlIGxheW91dCBpbmZvcm1hdGlvbiBmb3IgU09iamVjdFxyXG4gICAqL1xyXG4gIGFzeW5jIGxheW91dHMobGF5b3V0TmFtZT86IHN0cmluZyk6IFByb21pc2U8RGVzY3JpYmVMYXlvdXRSZXN1bHQ+IHtcclxuICAgIGNvbnN0IHVybCA9IGAvc29iamVjdHMvJHt0aGlzLnR5cGV9L2Rlc2NyaWJlLyR7XHJcbiAgICAgIGxheW91dE5hbWUgPyBgbmFtZWRMYXlvdXRzLyR7bGF5b3V0TmFtZX1gIDogJ2xheW91dHMnXHJcbiAgICB9YDtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLl9jb25uLnJlcXVlc3QodXJsKTtcclxuICAgIHJldHVybiBib2R5IGFzIERlc2NyaWJlTGF5b3V0UmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGVkZWYge09iamVjdH0gQ29tcGFjdExheW91dEluZm9cclxuICAgKiBAcHJvcCB7QXJyYXkuPE9iamVjdD59IGNvbXBhY3RMYXlvdXRzIC0gQXJyYXkgb2YgY29tcGFjdCBsYXlvdXRzXHJcbiAgICogQHByb3Age1N0cmluZ30gZGVmYXVsdENvbXBhY3RMYXlvdXRJZCAtIElEIG9mIGRlZmF1bHQgY29tcGFjdCBsYXlvdXRcclxuICAgKiBAcHJvcCB7QXJyYXkuPE9iamVjdD59IHJlY29yZFR5cGVDb21wYWN0TGF5b3V0TWFwcGluZ3MgLSBBcnJheSBvZiByZWNvcmQgdHlwZSBtYXBwaW5nc1xyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlIGNvbXBhY3QgbGF5b3V0IGluZm9ybWF0aW9uIGRlZmluZWQgZm9yIFNPYmplY3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Q2FsbGJhY2suPENvbXBhY3RMYXlvdXRJbmZvPn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2UuPENvbXBhY3RMYXlvdXRJbmZvPn1cclxuICAgKi9cclxuICBhc3luYyBjb21wYWN0TGF5b3V0cygpOiBQcm9taXNlPERlc2NyaWJlQ29tcGFjdExheW91dHNSZXN1bHQ+IHtcclxuICAgIGNvbnN0IHVybCA9IGAvc29iamVjdHMvJHt0aGlzLnR5cGV9L2Rlc2NyaWJlL2NvbXBhY3RMYXlvdXRzYDtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLl9jb25uLnJlcXVlc3QodXJsKTtcclxuICAgIHJldHVybiBib2R5IGFzIERlc2NyaWJlQ29tcGFjdExheW91dHNSZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXNjcmliZSBjb21wYWN0IGxheW91dCBpbmZvcm1hdGlvbiBkZWZpbmVkIGZvciBTT2JqZWN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0NhbGxiYWNrLjxBcHByb3ZhbExheW91dEluZm8+fSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgZnVuY3Rpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXBwcm92YWxMYXlvdXRJbmZvPn1cclxuICAgKi9cclxuICBhc3luYyBhcHByb3ZhbExheW91dHMoKTogUHJvbWlzZTxEZXNjcmliZUFwcHJvdmFsTGF5b3V0c1Jlc3VsdD4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9zb2JqZWN0cy8ke3RoaXMudHlwZX0vZGVzY3JpYmUvYXBwcm92YWxMYXlvdXRzYDtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLl9jb25uLnJlcXVlc3QodXJsKTtcclxuICAgIHJldHVybiBib2R5IGFzIERlc2NyaWJlQXBwcm92YWxMYXlvdXRzUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBhbmQgZmV0Y2ggcmVjb3JkcyB3aGljaCBtYXRjaGVzIGdpdmVuIGNvbmRpdGlvbnNcclxuICAgKi9cclxuICBmaW5kPFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQ+KFxyXG4gICAgY29uZGl0aW9ucz86IE9wdGlvbmFsPFF1ZXJ5Q29uZGl0aW9uPFMsIE4+PixcclxuICApOiBRdWVyeTxTLCBOLCBTT2JqZWN0UmVjb3JkPFMsIE4sICcqJywgUj4sICdSZWNvcmRzJz47XHJcbiAgZmluZDxcclxuICAgIFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQsXHJcbiAgICBGUCBleHRlbmRzIEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPixcclxuICAgIEZQQyBleHRlbmRzIEZpZWxkUHJvamVjdGlvbkNvbmZpZyA9IEZpZWxkUGF0aFNjb3BlZFByb2plY3Rpb248UywgTiwgRlA+XHJcbiAgPihcclxuICAgIGNvbmRpdGlvbnM6IE9wdGlvbmFsPFF1ZXJ5Q29uZGl0aW9uPFMsIE4+PixcclxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgTiwgRlA+PixcclxuICAgIG9wdGlvbnM/OiBGaW5kT3B0aW9uczxTLCBOPixcclxuICApOiBRdWVyeTxTLCBOLCBTT2JqZWN0UmVjb3JkPFMsIE4sIEZQQywgUj4sICdSZWNvcmRzJz47XHJcbiAgZmluZChcclxuICAgIGNvbmRpdGlvbnM/OiBPcHRpb25hbDxRdWVyeUNvbmRpdGlvbjxTLCBOPj4sXHJcbiAgICBmaWVsZHM/OiBPcHRpb25hbDxRdWVyeUZpZWxkPFMsIE4sIEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPj4+LFxyXG4gICAgb3B0aW9uczogRmluZE9wdGlvbnM8UywgTj4gPSB7fSxcclxuICApOiBRdWVyeTxTLCBOLCBhbnksICdSZWNvcmRzJz4ge1xyXG4gICAgY29uc3QgeyBzb3J0LCBsaW1pdCwgb2Zmc2V0LCAuLi5xb3B0aW9ucyB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IGNvbmZpZzogUXVlcnlDb25maWc8UywgTj4gPSB7XHJcbiAgICAgIGZpZWxkczogZmllbGRzID09IG51bGwgPyB1bmRlZmluZWQgOiBmaWVsZHMsXHJcbiAgICAgIGluY2x1ZGVzOiBvcHRpb25zLmluY2x1ZGVzLFxyXG4gICAgICB0YWJsZTogdGhpcy50eXBlLFxyXG4gICAgICBjb25kaXRpb25zOiBjb25kaXRpb25zID09IG51bGwgPyB1bmRlZmluZWQgOiBjb25kaXRpb25zLFxyXG4gICAgICBzb3J0LFxyXG4gICAgICBsaW1pdCxcclxuICAgICAgb2Zmc2V0LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5PFMsIE4+KHRoaXMuX2Nvbm4sIGNvbmZpZywgcW9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHF1ZXJ5LnNldFJlc3BvbnNlVGFyZ2V0KFJlc3BvbnNlVGFyZ2V0cy5SZWNvcmRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIG9uZSByZWNvcmQgd2hpY2ggbWF0Y2hlcyBnaXZlbiBjb25kaXRpb25zXHJcbiAgICovXHJcbiAgZmluZE9uZTxSIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkPihcclxuICAgIGNvbmRpdGlvbnM/OiBPcHRpb25hbDxRdWVyeUNvbmRpdGlvbjxTLCBOPj4sXHJcbiAgKTogUXVlcnk8UywgTiwgU09iamVjdFJlY29yZDxTLCBOLCAnKicsIFI+LCAnU2luZ2xlUmVjb3JkJz47XHJcbiAgZmluZE9uZTxcclxuICAgIFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQsXHJcbiAgICBGUCBleHRlbmRzIEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPixcclxuICAgIEZQQyBleHRlbmRzIEZpZWxkUHJvamVjdGlvbkNvbmZpZyA9IEZpZWxkUGF0aFNjb3BlZFByb2plY3Rpb248UywgTiwgRlA+XHJcbiAgPihcclxuICAgIGNvbmRpdGlvbnM6IE9wdGlvbmFsPFF1ZXJ5Q29uZGl0aW9uPFMsIE4+PixcclxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgTiwgRlA+PixcclxuICAgIG9wdGlvbnM/OiBGaW5kT3B0aW9uczxTLCBOPixcclxuICApOiBRdWVyeTxTLCBOLCBTT2JqZWN0UmVjb3JkPFMsIE4sIEZQQywgUj4sICdTaW5nbGVSZWNvcmQnPjtcclxuICBmaW5kT25lKFxyXG4gICAgY29uZGl0aW9ucz86IE9wdGlvbmFsPFF1ZXJ5Q29uZGl0aW9uPFMsIE4+PixcclxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgTiwgRmllbGRQYXRoU3BlY2lmaWVyPFMsIE4+Pj4sXHJcbiAgICBvcHRpb25zOiBGaW5kT3B0aW9uczxTLCBOPiA9IHt9LFxyXG4gICk6IFF1ZXJ5PFMsIE4sIGFueSwgJ1NpbmdsZVJlY29yZCc+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5maW5kKGNvbmRpdGlvbnMsIGZpZWxkcywgeyAuLi5vcHRpb25zLCBsaW1pdDogMSB9KTtcclxuICAgIHJldHVybiBxdWVyeS5zZXRSZXNwb25zZVRhcmdldChSZXNwb25zZVRhcmdldHMuU2luZ2xlUmVjb3JkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYW5kIGZldGNoIHJlY29yZHMgb25seSBieSBzcGVjaWZ5aW5nIGZpZWxkcyB0byBmZXRjaC5cclxuICAgKi9cclxuICBzZWxlY3Q8XHJcbiAgICBSIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkLFxyXG4gICAgRlAgZXh0ZW5kcyBGaWVsZFBhdGhTcGVjaWZpZXI8UywgTj4gPSBGaWVsZFBhdGhTcGVjaWZpZXI8UywgTj4sXHJcbiAgICBGUEMgZXh0ZW5kcyBGaWVsZFByb2plY3Rpb25Db25maWcgPSBGaWVsZFBhdGhTY29wZWRQcm9qZWN0aW9uPFMsIE4sIEZQPlxyXG4gID4oXHJcbiAgICBmaWVsZHM6IFF1ZXJ5RmllbGQ8UywgTiwgRlA+LFxyXG4gICk6IFF1ZXJ5PFMsIE4sIFNPYmplY3RSZWNvcmQ8UywgTiwgRlBDLCBSPiwgJ1JlY29yZHMnPiB7XHJcbiAgICByZXR1cm4gdGhpcy5maW5kKG51bGwsIGZpZWxkcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb3VudCBudW0gb2YgcmVjb3JkcyB3aGljaCBtYXRjaGVzIGdpdmVuIGNvbmRpdGlvbnNcclxuICAgKi9cclxuICBjb3VudChjb25kaXRpb25zPzogT3B0aW9uYWw8UXVlcnlDb25kaXRpb248UywgTj4+KSB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuZmluZChjb25kaXRpb25zLCAnY291bnQoKScpO1xyXG4gICAgcmV0dXJuIHF1ZXJ5LnNldFJlc3BvbnNlVGFyZ2V0KFJlc3BvbnNlVGFyZ2V0cy5Db3VudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIGxpc3Qgdmlld3MgZm9yIHRoZSBTT2JqZWN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0NhbGxiYWNrLjxMaXN0Vmlld3NJbmZvPn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2UuPExpc3RWaWV3c0luZm8+fVxyXG4gICAqL1xyXG4gIGxpc3R2aWV3cygpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuX2Nvbm4uX2Jhc2VVcmwoKX0vc29iamVjdHMvJHt0aGlzLnR5cGV9L2xpc3R2aWV3c2A7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0KHVybCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsaXN0IHZpZXcgaW5mbyBpbiBzcGVjaWZlZCB2aWV3IGlkXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBMaXN0IHZpZXcgSURcclxuICAgKiBAcmV0dXJucyB7TGlzdFZpZXd9XHJcbiAgICovXHJcbiAgbGlzdHZpZXcoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBMaXN0Vmlldyh0aGlzLl9jb25uLCB0aGlzLnR5cGUsIGlkKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbGwgcmVnaXN0ZXJlZCBxdWljayBhY3Rpb25zIGZvciB0aGUgU09iamVjdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtDYWxsYmFjay48QXJyYXkuPFF1aWNrQWN0aW9uflF1aWNrQWN0aW9uSW5mbz4+fSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgZnVuY3Rpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXJyYXkuPFF1aWNrQWN0aW9uflF1aWNrQWN0aW9uSW5mbz4+fVxyXG4gICAqL1xyXG4gIHF1aWNrQWN0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3QoYC9zb2JqZWN0cy8ke3RoaXMudHlwZX0vcXVpY2tBY3Rpb25zYCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgcmVmZXJlbmNlIGZvciBzcGVjaWZpZWQgcXVpY2sgYWNpdG9uIGluIHRoZSBTT2JqZWN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uTmFtZSAtIE5hbWUgb2YgdGhlIHF1aWNrIGFjdGlvblxyXG4gICAqIEByZXR1cm5zIHtRdWlja0FjdGlvbn1cclxuICAgKi9cclxuICBxdWlja0FjdGlvbihhY3Rpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgUXVpY2tBY3Rpb24oXHJcbiAgICAgIHRoaXMuX2Nvbm4sXHJcbiAgICAgIGAvc29iamVjdHMvJHt0aGlzLnR5cGV9L3F1aWNrQWN0aW9ucy8ke2FjdGlvbk5hbWV9YCxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQSBjbGFzcyBmb3Igb3JnYW5pemluZyBsaXN0IHZpZXcgaW5mb3JtYXRpb25cclxuICpcclxuICogQHByb3RlY3RlZFxyXG4gKiBAY2xhc3MgTGlzdFZpZXdcclxuICogQHBhcmFtIHtDb25uZWN0aW9ufSBjb25uIC0gQ29ubmVjdGlvbiBpbnN0YW5jZVxyXG4gKiBAcGFyYW0ge1NPYmplY3R9IHR5cGUgLSBTT2JqZWN0IHR5cGVcclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gTGlzdCB2aWV3IElEXHJcbiAqL1xyXG5jbGFzcyBMaXN0VmlldyB7XHJcbiAgX2Nvbm46IENvbm5lY3Rpb247XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbiwgdHlwZTogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb25uID0gY29ubjtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeGVjdXRlcyBxdWVyeSBmb3IgdGhlIGxpc3QgdmlldyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIGRhdGEgYW5kIHByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICByZXN1bHRzKCkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5fY29ubi5fYmFzZVVybCgpfS9zb2JqZWN0cy8ke3RoaXMudHlwZX0vbGlzdHZpZXdzLyR7XHJcbiAgICAgIHRoaXMuaWRcclxuICAgIH0vcmVzdWx0c2A7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0KHVybCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IGEgbGlzdCB2aWV3XHJcbiAgICovXHJcbiAgZGVzY3JpYmUob3B0aW9uczogeyBoZWFkZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0gfSA9IHt9KSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLl9jb25uLl9iYXNlVXJsKCl9L3NvYmplY3RzLyR7dGhpcy50eXBlfS9saXN0dmlld3MvJHtcclxuICAgICAgdGhpcy5pZFxyXG4gICAgfS9kZXNjcmliZWA7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0KHsgbWV0aG9kOiAnR0VUJywgdXJsLCBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeHBsYWluIHBsYW4gZm9yIGV4ZWN1dGluZyBsaXN0IHZpZXdcclxuICAgKi9cclxuICBleHBsYWluKCkge1xyXG4gICAgY29uc3QgdXJsID0gYC9xdWVyeS8/ZXhwbGFpbj0ke3RoaXMuaWR9YDtcclxuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3QodXJsKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRPRE8gQnVsa1xyXG4iXX0=