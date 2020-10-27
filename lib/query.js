"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.SubQuery = exports["default"] = exports.ResponseTargets = void 0;

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

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _sort4 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/sort"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _events = require("events");

var _logger = require("./util/logger");

var _recordStream = _interopRequireWildcard(require("./record-stream"));

var _soqlBuilder = require("./soql-builder");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _symbol["default"] === "undefined" || (0, _getIteratorMethod2["default"])(o) == null) { if ((0, _isArray["default"])(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2["default"])(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context27; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = (0, _slice["default"])(_context27 = Object.prototype.toString.call(o)).call(_context27, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from["default"])(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context30; (0, _forEach["default"])(_context30 = ownKeys(Object(source), true)).call(_context30, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context31; (0, _forEach["default"])(_context31 = ownKeys(Object(source))).call(_context31, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var ResponseTargetValues = ['QueryResult', 'Records', 'SingleRecord', 'Count'];
var ResponseTargets = (0, _reduce["default"])(ResponseTargetValues).call(ResponseTargetValues, function (values, target) {
  return _objectSpread(_objectSpread({}, values), {}, (0, _defineProperty3["default"])({}, target, target));
}, {});
exports.ResponseTargets = ResponseTargets;

/**
 *
 */
var DEFAULT_BULK_THRESHOLD = 200;
/**
 * Query
 */

var Query = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2["default"])(Query, _EventEmitter);

  var _super = _createSuper(Query);

  /**
   *
   */
  function Query(conn, config, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, Query);
    _this = _super.call(this);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_conn", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_logger", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_soql", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_locator", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_config", {});
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_children", []);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_options", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_executed", false);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_finished", false);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_chaining", false);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_promise", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_stream", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "totalSize", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "totalFetched", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "offset", _this.skip);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "orderby", (0, _sort4["default"])(_this));
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "exec", _this.execute);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "run", _this.execute);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "delete", _this.destroy);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "del", _this.destroy);
    _this._conn = conn;
    _this._logger = conn._logLevel ? Query._logger.createInstance(conn._logLevel) : Query._logger;

    if (typeof config === 'string') {
      _this._soql = config;
    } else if (typeof config.locator === 'string') {
      var locator = config.locator;

      if ((0, _indexOf["default"])(locator).call(locator, '/') >= 0) {
        _this._locator = locator.split('/').pop();
      }
    } else {
      var _ref = config,
          _fields = _ref.fields,
          includes = (0, _includes["default"])(_ref),
          _sort2 = (0, _sort4["default"])(_ref),
          _config = (0, _objectWithoutProperties2["default"])(_ref, ["fields", "includes", "sort"]);

      _this._config = _config;

      _this.select(_fields);

      if (includes) {
        _this.includeChildren(includes);
      }

      if (_sort2) {
        (0, _sort4["default"])(_this).call(_this, _sort2);
      }
    }

    _this._options = _objectSpread({
      headers: {},
      maxFetch: 10000,
      autoFetch: false,
      scanAll: false,
      responseTarget: 'QueryResult'
    }, options || {}); // promise instance

    _this._promise = new _promise["default"](function (resolve, reject) {
      _this.on('response', resolve);

      _this.on('error', reject);
    });
    _this._stream = new _recordStream.Serializable();

    _this.on('record', function (record) {
      return _this._stream.push(record);
    });

    _this.on('end', function () {
      return _this._stream.push(null);
    });

    _this.on('error', function (err) {
      try {
        _this._stream.emit('error', err);
      } catch (e) {// eslint-disable-line no-empty
      }
    });

    return _this;
  }
  /**
   * Select fields to include in the returning result
   */


  (0, _createClass2["default"])(Query, [{
    key: "select",
    value: function select() {
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      if (this._soql) {
        throw Error('Cannot set select fields for the query which has already built SOQL.');
      }

      function toFieldArray(fields) {
        var _context, _context2, _context4, _context5;

        return typeof fields === 'string' ? fields.split(/\s*,\s*/) : (0, _isArray["default"])(fields) ? (0, _reduce["default"])(_context = (0, _map["default"])(_context2 = fields).call(_context2, toFieldArray)).call(_context, function (fs, f) {
          var _context3;

          return (0, _concat["default"])(_context3 = []).call(_context3, (0, _toConsumableArray2["default"])(fs), (0, _toConsumableArray2["default"])(f));
        }, []) : (0, _map["default"])(_context4 = (0, _filter["default"])(_context5 = (0, _entries["default"])(fields)).call(_context5, function (_ref2) {
          var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
              _f = _ref3[0],
              v = _ref3[1];

          return v;
        })).call(_context4, function (_ref4) {
          var _ref5 = (0, _slicedToArray2["default"])(_ref4, 1),
              f = _ref5[0];

          return f;
        });
      }

      if (fields) {
        this._config.fields = toFieldArray(fields);
      } // force convert query record type without changing instance;


      return this;
    }
    /**
     * Set query conditions to filter the result records
     */

  }, {
    key: "where",
    value: function where(conditions) {
      if (this._soql) {
        throw Error('Cannot set where conditions for the query which has already built SOQL.');
      }

      this._config.conditions = conditions;
      return this;
    }
    /**
     * Limit the returning result
     */

  }, {
    key: "limit",
    value: function limit(_limit) {
      if (this._soql) {
        throw Error('Cannot set limit for the query which has already built SOQL.');
      }

      this._config.limit = _limit;
      return this;
    }
    /**
     * Skip records
     */

  }, {
    key: "skip",
    value: function skip(offset) {
      if (this._soql) {
        throw Error('Cannot set skip/offset for the query which has already built SOQL.');
      }

      this._config.offset = offset;
      return this;
    }
    /**
     * Synonym of Query#skip()
     */

  }, {
    key: "sort",
    value: function (_sort) {
      function sort(_x, _x2) {
        return _sort.apply(this, arguments);
      }

      sort.toString = function () {
        return _sort.toString();
      };

      return sort;
    }(function (sort, dir) {
      if (this._soql) {
        throw Error('Cannot set sort for the query which has already built SOQL.');
      }

      if (typeof sort === 'string' && typeof dir !== 'undefined') {
        this._config.sort = [[sort, dir]];
      } else {
        this._config.sort = sort;
      }

      return this;
    })
    /**
     * Synonym of Query#sort()
     */

  }, {
    key: "include",
    value: function include(childRelName, conditions, fields) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (this._soql) {
        throw Error('Cannot include child relationship into the query which has already built SOQL.');
      }

      var childConfig = {
        fields: fields === null ? undefined : fields,
        table: childRelName,
        conditions: conditions === null ? undefined : conditions,
        limit: options.limit,
        offset: options.offset,
        sort: (0, _sort4["default"])(options)
      }; // eslint-disable-next-line no-use-before-define

      var childQuery = new SubQuery(this._conn, childRelName, childConfig, this);

      this._children.push(childQuery);

      return childQuery;
    }
    /**
     * Include child relationship queryies, but not moving down to the children context
     */

  }, {
    key: "includeChildren",
    value: function includeChildren(includes) {
      if (this._soql) {
        throw Error('Cannot include child relationship into the query which has already built SOQL.');
      }

      var _iterator = _createForOfIteratorHelper((0, _keys["default"])(includes)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var crname = _step.value;

          var _ref6 = includes[crname],
              _conditions = _ref6.conditions,
              _fields2 = _ref6.fields,
              _options = (0, _objectWithoutProperties2["default"])(_ref6, ["conditions", "fields"]);

          this.include(crname, _conditions, _fields2, _options);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this;
    }
    /**
     * Setting maxFetch query option
     */

  }, {
    key: "maxFetch",
    value: function maxFetch(_maxFetch) {
      this._options.maxFetch = _maxFetch;
      return this;
    }
    /**
     * Switching auto fetch mode
     */

  }, {
    key: "autoFetch",
    value: function autoFetch(_autoFetch) {
      this._options.autoFetch = _autoFetch;
      return this;
    }
    /**
     * Set flag to scan all records including deleted and archived.
     */

  }, {
    key: "scanAll",
    value: function scanAll(_scanAll) {
      this._options.scanAll = _scanAll;
      return this;
    }
    /**
     *
     */

  }, {
    key: "setResponseTarget",
    value: function setResponseTarget(responseTarget) {
      if (responseTarget in ResponseTargets) {
        this._options.responseTarget = responseTarget;
      } // force change query response target without changing instance


      return this;
    }
    /**
     * Execute query and fetch records from server.
     */

  }, {
    key: "execute",
    value: function execute() {
      var _this2 = this;

      var options_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this._executed) {
        throw new Error('re-executing already executed query');
      }

      if (this._finished) {
        throw new Error('executing already closed query');
      }

      var options = {
        headers: options_.headers || this._options.headers,
        responseTarget: options_.responseTarget || this._options.responseTarget,
        autoFetch: options_.autoFetch || this._options.autoFetch,
        maxFetch: options_.maxFetch || this._options.maxFetch,
        scanAll: options_.scanAll || this._options.scanAll
      }; // collect fetched records in array
      // only when response target is Records and
      // either callback or chaining promises are available to this query.

      this.once('fetch', function () {
        if (options.responseTarget === ResponseTargets.Records && _this2._chaining) {
          _this2._logger.debug('--- collecting all fetched records ---');

          var records = [];

          var onRecord = function onRecord(record) {
            return records.push(record);
          };

          _this2.on('record', onRecord);

          _this2.once('end', function () {
            _this2.removeListener('record', onRecord);

            _this2.emit('response', records, _this2);
          });
        }
      }); // flag to prevent re-execution

      this._executed = true;
      (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // start actual query
                _this2._logger.debug('>>> Query start >>>');

                _context6.prev = 1;
                _context6.next = 4;
                return _this2._execute(options);

              case 4:
                _this2._logger.debug('*** Query finished ***');

                _context6.next = 11;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](1);

                _this2._logger.debug('--- Query error ---', _context6.t0);

                _this2.emit('error', _context6.t0);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee, null, [[1, 7]]);
      }))(); // return Query instance for chaining

      return this;
    }
    /**
     * Synonym of Query#execute()
     */

  }, {
    key: "_execute",

    /**
     * @private
     */
    value: function () {
      var _execute2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(options) {
        var headers, responseTarget, autoFetch, maxFetch, scanAll, url, soql, data, res, numRecords, totalFetched, i, record;
        return _regenerator["default"].wrap(function _callee2$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                headers = options.headers, responseTarget = options.responseTarget, autoFetch = options.autoFetch, maxFetch = options.maxFetch, scanAll = options.scanAll;
                url = '';

                if (!this._locator) {
                  _context7.next = 6;
                  break;
                }

                url = [this._conn._baseUrl(), '/query/', this._locator].join('');
                _context7.next = 12;
                break;

              case 6:
                _context7.next = 8;
                return this.toSOQL();

              case 8:
                soql = _context7.sent;
                this.totalFetched = 0;

                this._logger.debug("SOQL = ".concat(soql));

                url = [this._conn._baseUrl(), '/', scanAll ? 'queryAll' : 'query', '?q=', encodeURIComponent(soql)].join('');

              case 12:
                _context7.next = 14;
                return this._conn.request({
                  method: 'GET',
                  url: url,
                  headers: headers
                });

              case 14:
                data = _context7.sent;
                this.emit('fetch');
                this.totalSize = data.totalSize;
                _context7.t0 = responseTarget;
                _context7.next = _context7.t0 === ResponseTargets.SingleRecord ? 20 : _context7.t0 === ResponseTargets.Records ? 22 : _context7.t0 === ResponseTargets.Count ? 24 : 26;
                break;

              case 20:
                res = data.records && data.records.length > 0 ? data.records[0] : null;
                return _context7.abrupt("break", 27);

              case 22:
                res = data.records;
                return _context7.abrupt("break", 27);

              case 24:
                res = data.totalSize;
                return _context7.abrupt("break", 27);

              case 26:
                res = data;

              case 27:
                // only fire response event when it should be notified per fetch
                if (responseTarget !== ResponseTargets.Records) {
                  this.emit('response', res, this);
                } // streaming record instances


                numRecords = data.records && data.records.length || 0;
                totalFetched = this.totalFetched || 0;
                i = 0;

              case 31:
                if (!(i < numRecords)) {
                  _context7.next = 41;
                  break;
                }

                if (!(totalFetched >= maxFetch)) {
                  _context7.next = 35;
                  break;
                }

                this._finished = true;
                return _context7.abrupt("break", 41);

              case 35:
                record = data.records[i];
                this.emit('record', record, totalFetched, this);
                totalFetched += 1;

              case 38:
                i++;
                _context7.next = 31;
                break;

              case 41:
                this.totalFetched = totalFetched;

                if (data.nextRecordsUrl) {
                  this._locator = data.nextRecordsUrl.split('/').pop();
                }

                this._finished = this._finished || data.done || !autoFetch;

                if (this._finished) {
                  this.emit('end');
                } else {
                  this._execute(options);
                }

                return _context7.abrupt("return", res);

              case 46:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee2, this);
      }));

      function _execute(_x3) {
        return _execute2.apply(this, arguments);
      }

      return _execute;
    }()
    /**
     * Obtain readable stream instance
     */

  }, {
    key: "stream",
    value: function stream() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'csv';

      if (!this._finished && !this._executed) {
        this.execute({
          autoFetch: true
        });
      }

      return type === 'record' ? this._stream : this._stream.stream(type);
    }
    /**
     * Pipe the queried records to another stream
     * This is for backward compatibility; Query is not a record stream instance anymore in 2.0.
     * If you want a record stream instance, use `Query#stream('record')`.
     */

  }, {
    key: "pipe",
    value: function pipe(stream) {
      return this.stream('record').pipe(stream);
    }
    /**
     * @protected
     */

  }, {
    key: "_expandFields",
    value: function () {
      var _expandFields2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(sobject_) {
        var _context8, _context9, _context10, _context12, _context13;

        var _this$_config, _this$_config$fields, fields, _this$_config$table, table, sobject, _yield$Promise$all, _yield$Promise$all2, efields;

        return _regenerator["default"].wrap(function _callee4$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!this._soql) {
                  _context14.next = 2;
                  break;
                }

                throw new Error('Cannot expand fields for the query which has already built SOQL.');

              case 2:
                _this$_config = this._config, _this$_config$fields = _this$_config.fields, fields = _this$_config$fields === void 0 ? [] : _this$_config$fields, _this$_config$table = _this$_config.table, table = _this$_config$table === void 0 ? '' : _this$_config$table;
                sobject = sobject_ || table;

                this._logger.debug((0, _concat["default"])(_context8 = "_expandFields: sobject = ".concat(sobject, ", fields = ")).call(_context8, fields.join(', ')));

                _context14.next = 7;
                return _promise["default"].all((0, _concat["default"])(_context9 = [this._expandAsteriskFields(sobject, fields)]).call(_context9, (0, _toConsumableArray2["default"])((0, _map["default"])(_context10 = this._children).call(_context10, /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(childQuery) {
                    return _regenerator["default"].wrap(function _callee3$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            _context11.next = 2;
                            return childQuery._expandFields();

                          case 2:
                            return _context11.abrupt("return", []);

                          case 3:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x5) {
                    return _ref8.apply(this, arguments);
                  };
                }()))));

              case 7:
                _yield$Promise$all = _context14.sent;
                _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 1);
                efields = _yield$Promise$all2[0];
                this._config.fields = efields;
                this._config.includes = (0, _reduce["default"])(_context12 = (0, _map["default"])(_context13 = this._children).call(_context13, function (cquery) {
                  var cconfig = cquery._query._config;
                  return [cconfig.table, cconfig];
                })).call(_context12, function (includes, _ref9) {
                  var _ref10 = (0, _slicedToArray2["default"])(_ref9, 2),
                      ctable = _ref10[0],
                      cconfig = _ref10[1];

                  return _objectSpread(_objectSpread({}, includes), {}, (0, _defineProperty3["default"])({}, ctable, cconfig));
                }, {});

              case 12:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee4, this);
      }));

      function _expandFields(_x4) {
        return _expandFields2.apply(this, arguments);
      }

      return _expandFields;
    }()
    /**
     *
     */

  }, {
    key: "_findRelationObject",
    value: function () {
      var _findRelationObject2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(relName) {
        var _context15;

        var table, sobject, upperRname, _iterator2, _step2, cr;

        return _regenerator["default"].wrap(function _callee5$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                table = this._config.table;

                if (table) {
                  _context16.next = 3;
                  break;
                }

                throw new Error('No table information provided in the query');

              case 3:
                this._logger.debug((0, _concat["default"])(_context15 = "finding table for relation \"".concat(relName, "\" in \"")).call(_context15, table, "\"..."));

                _context16.next = 6;
                return this._conn.describe$(table);

              case 6:
                sobject = _context16.sent;
                upperRname = relName.toUpperCase();
                _iterator2 = _createForOfIteratorHelper(sobject.childRelationships);
                _context16.prev = 9;

                _iterator2.s();

              case 11:
                if ((_step2 = _iterator2.n()).done) {
                  _context16.next = 17;
                  break;
                }

                cr = _step2.value;

                if (!((cr.relationshipName || '').toUpperCase() === upperRname && cr.childSObject)) {
                  _context16.next = 15;
                  break;
                }

                return _context16.abrupt("return", cr.childSObject);

              case 15:
                _context16.next = 11;
                break;

              case 17:
                _context16.next = 22;
                break;

              case 19:
                _context16.prev = 19;
                _context16.t0 = _context16["catch"](9);

                _iterator2.e(_context16.t0);

              case 22:
                _context16.prev = 22;

                _iterator2.f();

                return _context16.finish(22);

              case 25:
                throw new Error("No child relationship found: ".concat(relName));

              case 26:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee5, this, [[9, 19, 22, 25]]);
      }));

      function _findRelationObject(_x6) {
        return _findRelationObject2.apply(this, arguments);
      }

      return _findRelationObject;
    }()
    /**
     *
     */

  }, {
    key: "_expandAsteriskFields",
    value: function () {
      var _expandAsteriskFields2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(sobject, fields) {
        var _this3 = this;

        var expandedFields;
        return _regenerator["default"].wrap(function _callee7$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return _promise["default"].all((0, _map["default"])(fields).call(fields, /*#__PURE__*/function () {
                  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(field) {
                    return _regenerator["default"].wrap(function _callee6$(_context17) {
                      while (1) {
                        switch (_context17.prev = _context17.next) {
                          case 0:
                            return _context17.abrupt("return", _this3._expandAsteriskField(sobject, field));

                          case 1:
                          case "end":
                            return _context17.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x9) {
                    return _ref11.apply(this, arguments);
                  };
                }()));

              case 2:
                expandedFields = _context19.sent;
                return _context19.abrupt("return", (0, _reduce["default"])(expandedFields).call(expandedFields, function (eflds, flds) {
                  var _context18;

                  return (0, _concat["default"])(_context18 = []).call(_context18, (0, _toConsumableArray2["default"])(eflds), (0, _toConsumableArray2["default"])(flds));
                }, []));

              case 4:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee7);
      }));

      function _expandAsteriskFields(_x7, _x8) {
        return _expandAsteriskFields2.apply(this, arguments);
      }

      return _expandAsteriskFields;
    }()
    /**
     *
     */

  }, {
    key: "_expandAsteriskField",
    value: function () {
      var _expandAsteriskField2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(sobject, field) {
        var _context20,
            _this4 = this;

        var fpath, _context23, so, _ret;

        return _regenerator["default"].wrap(function _callee9$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                this._logger.debug((0, _concat["default"])(_context20 = "expanding field \"".concat(field, "\" in \"")).call(_context20, sobject, "\"..."));

                fpath = field.split('.');

                if (!(fpath[fpath.length - 1] === '*')) {
                  _context24.next = 13;
                  break;
                }

                _context24.next = 5;
                return this._conn.describe$(sobject);

              case 5:
                so = _context24.sent;

                this._logger.debug("table ".concat(sobject, " has been described"));

                if (!(fpath.length > 1)) {
                  _context24.next = 12;
                  break;
                }

                return _context24.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
                  var rname, _iterator3, _step3, f, rfield, referenceTo, rtable, fpaths;

                  return _regenerator["default"].wrap(function _callee8$(_context22) {
                    while (1) {
                      switch (_context22.prev = _context22.next) {
                        case 0:
                          rname = fpath.shift();
                          _iterator3 = _createForOfIteratorHelper(so.fields);
                          _context22.prev = 2;

                          _iterator3.s();

                        case 4:
                          if ((_step3 = _iterator3.n()).done) {
                            _context22.next = 16;
                            break;
                          }

                          f = _step3.value;

                          if (!(f.relationshipName && rname && f.relationshipName.toUpperCase() === rname.toUpperCase())) {
                            _context22.next = 14;
                            break;
                          }

                          rfield = f;
                          referenceTo = rfield.referenceTo || [];
                          rtable = referenceTo.length === 1 ? referenceTo[0] : 'Name';
                          _context22.next = 12;
                          return _this4._expandAsteriskField(rtable, fpath.join('.'));

                        case 12:
                          fpaths = _context22.sent;
                          return _context22.abrupt("return", {
                            v: (0, _map["default"])(fpaths).call(fpaths, function (fp) {
                              var _context21;

                              return (0, _concat["default"])(_context21 = "".concat(rname, ".")).call(_context21, fp);
                            })
                          });

                        case 14:
                          _context22.next = 4;
                          break;

                        case 16:
                          _context22.next = 21;
                          break;

                        case 18:
                          _context22.prev = 18;
                          _context22.t0 = _context22["catch"](2);

                          _iterator3.e(_context22.t0);

                        case 21:
                          _context22.prev = 21;

                          _iterator3.f();

                          return _context22.finish(21);

                        case 24:
                          return _context22.abrupt("return", {
                            v: []
                          });

                        case 25:
                        case "end":
                          return _context22.stop();
                      }
                    }
                  }, _callee8, null, [[2, 18, 21, 24]]);
                })(), "t0", 9);

              case 9:
                _ret = _context24.t0;

                if (!((0, _typeof2["default"])(_ret) === "object")) {
                  _context24.next = 12;
                  break;
                }

                return _context24.abrupt("return", _ret.v);

              case 12:
                return _context24.abrupt("return", (0, _map["default"])(_context23 = so.fields).call(_context23, function (f) {
                  return f.name;
                }));

              case 13:
                return _context24.abrupt("return", [field]);

              case 14:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee9, this);
      }));

      function _expandAsteriskField(_x10, _x11) {
        return _expandAsteriskField2.apply(this, arguments);
      }

      return _expandAsteriskField;
    }()
    /**
     * Explain plan for executing query
     */

  }, {
    key: "explain",
    value: function () {
      var _explain = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var soql, url;
        return _regenerator["default"].wrap(function _callee10$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return this.toSOQL();

              case 2:
                soql = _context25.sent;

                this._logger.debug("SOQL = ".concat(soql));

                url = "/query/?explain=".concat(encodeURIComponent(soql));
                return _context25.abrupt("return", this._conn.request(url));

              case 6:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee10, this);
      }));

      function explain() {
        return _explain.apply(this, arguments);
      }

      return explain;
    }()
    /**
     * Return SOQL expression for the query
     */

  }, {
    key: "toSOQL",
    value: function () {
      var _toSOQL = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        return _regenerator["default"].wrap(function _callee11$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!this._soql) {
                  _context26.next = 2;
                  break;
                }

                return _context26.abrupt("return", this._soql);

              case 2:
                _context26.next = 4;
                return this._expandFields();

              case 4:
                return _context26.abrupt("return", (0, _soqlBuilder.createSOQL)(this._config));

              case 5:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee11, this);
      }));

      function toSOQL() {
        return _toSOQL.apply(this, arguments);
      }

      return toSOQL;
    }()
    /**
     * Promise/A+ interface
     * http://promises-aplus.github.io/promises-spec/
     *
     * Delegate to deferred promise, return promise instance for query result
     */

  }, {
    key: "then",
    value: function then(onResolve, onReject) {
      this._chaining = true;

      if (!this._finished && !this._executed) {
        this.execute();
      }

      if (!this._promise) {
        throw new Error('invalid state: promise is not set after query execution');
      }

      return this._promise.then(onResolve, onReject);
    }
  }, {
    key: "catch",
    value: function _catch(onReject) {
      return this.then(null, onReject);
    }
  }, {
    key: "promise",
    value: function promise() {
      return _promise["default"].resolve(this);
    }
    /**
     * Bulk delete queried records
     */

  }, {
    key: "destroy",
    value: function destroy(type, options) {
      var _this5 = this;

      if ((0, _typeof2["default"])(type) === 'object' && type !== null) {
        options = type;
        type = undefined;
      }

      options = options || {};
      var type_ = type || this._config && this._config.table;

      if (!type_) {
        throw new Error('SOQL based query needs SObject type information to bulk delete.');
      } // Set the threshold number to pass to bulk API
      // FIXME:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars


      var thresholdNum = options.allowBulk === false ? -1 : typeof options.bulkThreshold === 'number' ? options.bulkThreshold : // determine threshold if the connection version supports SObject collection API or not
      this._conn._ensureVersion(42) ? DEFAULT_BULK_THRESHOLD : this._conn._maxRequest / 2;
      return new _promise["default"](function (resolve, reject) {
        var records = []; // let batch = null;

        var handleRecord = function handleRecord(rec) {
          if (!rec.Id) {
            var _err = new Error('Queried record does not include Salesforce record ID.');

            _this5.emit('error', _err);

            return;
          }

          var record = {
            Id: rec.Id
          }; // TODO: enable batch switch

          /*
          if (batch) {
            batch.write(record);
          } else {
          */

          records.push(record);
          /*
            if (thresholdNum < 0 || records.length > thresholdNum) {
              // Use bulk delete instead of SObject REST API
              batch =
                self._conn.sobject(type).deleteBulk()
                  .on('response', resolve)
                  .on('error', reject);
              records.forEach(function(record) {
                batch.write(record);
              });
              records = [];
            }
          }
          */
        };

        var handleEnd = function handleEnd() {
          /*
          if (batch) {
            batch.end();
          } else {
          */
          var ids = (0, _map["default"])(records).call(records, function (record) {
            return record.Id;
          });

          _this5._conn.sobject(type_).destroy(ids, {
            allowRecursive: true
          }).then(resolve, reject);
        };

        _this5.stream('record').on('data', handleRecord).on('end', handleEnd).on('error', reject);
      });
    }
    /**
     * Synonym of Query#destroy()
     */

  }, {
    key: "update",
    value: function update(mapping, type, options) {
      var _this6 = this;

      if ((0, _typeof2["default"])(type) === 'object' && type !== null) {
        options = type;
        type = undefined;
      }

      options = options || {};
      var type_ = type || this._config && this._config.table;

      if (!type_) {
        throw new Error('SOQL based query needs SObject type information to bulk update.');
      }

      var updateStream = typeof mapping === 'function' ? (0, _map["default"])(_recordStream["default"]).call(_recordStream["default"], mapping) : _recordStream["default"].recordMapStream(mapping); // Set the threshold number to pass to bulk API
      // FIXME:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      var thresholdNum = options.allowBulk === false ? -1 : typeof options.bulkThreshold === 'number' ? options.bulkThreshold : // determine threshold if the connection version supports SObject collection API or not
      this._conn._ensureVersion(42) ? DEFAULT_BULK_THRESHOLD : this._conn._maxRequest / 2;
      return new _promise["default"](function (resolve, reject) {
        var records = []; // let batch = null;

        var handleRecord = function handleRecord(record) {
          // TODO: enable batch switch

          /*
          if (batch) {
            batch.write(record);
          } else {
          */
          records.push(record);
          /*
          if (thresholdNum < 0 || records.length > thresholdNum) {
            // Use bulk update instead of SObject REST API
            batch =
              self._conn.sobject(type).updateBulk()
                .on('response', resolve)
                .on('error', reject);
            records.forEach(function(record) {
              batch.write(record);
            });
            records = [];
          }
          }
          */
        };

        var handleEnd = function handleEnd() {
          /*
          if (batch) {
            batch.end();
          } else {
          */
          _this6._conn.sobject(type_).update(records, {
            allowRecursive: true
          }).then(resolve, reject);
          /*
          }
          */

        };

        _this6.stream('record').on('error', reject).pipe(updateStream).on('data', handleRecord).on('end', handleEnd).on('error', reject);
      });
    }
  }]);
  return Query;
}(_events.EventEmitter);
/*--------------------------------------------*/

/**
 * SubQuery object for representing child relationship query
 */


exports["default"] = Query;
(0, _defineProperty3["default"])(Query, "_logger", (0, _logger.getLogger)('query'));

var SubQuery = /*#__PURE__*/function () {
  /**
   *
   */
  function SubQuery(conn, relName, config, parent) {
    (0, _classCallCheck2["default"])(this, SubQuery);
    (0, _defineProperty3["default"])(this, "_relName", void 0);
    (0, _defineProperty3["default"])(this, "_query", void 0);
    (0, _defineProperty3["default"])(this, "_parent", void 0);
    (0, _defineProperty3["default"])(this, "offset", this.skip);
    (0, _defineProperty3["default"])(this, "orderby", (0, _sort4["default"])(this));
    this._relName = relName;
    this._query = new Query(conn, config);
    this._parent = parent;
  }
  /**
   *
   */


  (0, _createClass2["default"])(SubQuery, [{
    key: "select",
    value: function select(fields) {
      // force convert query record type without changing instance
      this._query = this._query.select(fields);
      return this;
    }
    /**
     *
     */

  }, {
    key: "where",
    value: function where(conditions) {
      this._query = this._query.where(conditions);
      return this;
    }
    /**
     * Limit the returning result
     */

  }, {
    key: "limit",
    value: function limit(_limit2) {
      this._query = this._query.limit(_limit2);
      return this;
    }
    /**
     * Skip records
     */

  }, {
    key: "skip",
    value: function skip(offset) {
      this._query = this._query.skip(offset);
      return this;
    }
    /**
     * Synonym of SubQuery#skip()
     */

  }, {
    key: "sort",
    value: function (_sort3) {
      function sort(_x12, _x13) {
        return _sort3.apply(this, arguments);
      }

      sort.toString = function () {
        return _sort3.toString();
      };

      return sort;
    }(function (sort, dir) {
      var _context28;

      this._query = (0, _sort4["default"])(_context28 = this._query).call(_context28, sort, dir);
      return this;
    })
    /**
     * Synonym of SubQuery#sort()
     */

  }, {
    key: "_expandFields",

    /**
     *
     */
    value: function () {
      var _expandFields3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
        var sobject;
        return _regenerator["default"].wrap(function _callee12$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this._parent._findRelationObject(this._relName);

              case 2:
                sobject = _context29.sent;
                return _context29.abrupt("return", this._query._expandFields(sobject));

              case 4:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee12, this);
      }));

      function _expandFields() {
        return _expandFields3.apply(this, arguments);
      }

      return _expandFields;
    }()
    /**
     * Back the context to parent query object
     */

  }, {
    key: "end",
    value: function end() {
      return this._parent;
    }
  }]);
  return SubQuery;
}();

exports.SubQuery = SubQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS50cyJdLCJuYW1lcyI6WyJSZXNwb25zZVRhcmdldFZhbHVlcyIsIlJlc3BvbnNlVGFyZ2V0cyIsInZhbHVlcyIsInRhcmdldCIsIkRFRkFVTFRfQlVMS19USFJFU0hPTEQiLCJRdWVyeSIsImNvbm4iLCJjb25maWciLCJvcHRpb25zIiwic2tpcCIsImV4ZWN1dGUiLCJkZXN0cm95IiwiX2Nvbm4iLCJfbG9nZ2VyIiwiX2xvZ0xldmVsIiwiY3JlYXRlSW5zdGFuY2UiLCJfc29xbCIsImxvY2F0b3IiLCJfbG9jYXRvciIsInNwbGl0IiwicG9wIiwiZmllbGRzIiwiaW5jbHVkZXMiLCJzb3J0IiwiX2NvbmZpZyIsInNlbGVjdCIsImluY2x1ZGVDaGlsZHJlbiIsIl9vcHRpb25zIiwiaGVhZGVycyIsIm1heEZldGNoIiwiYXV0b0ZldGNoIiwic2NhbkFsbCIsInJlc3BvbnNlVGFyZ2V0IiwiX3Byb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib24iLCJfc3RyZWFtIiwiU2VyaWFsaXphYmxlIiwicmVjb3JkIiwicHVzaCIsImVyciIsImVtaXQiLCJlIiwiRXJyb3IiLCJ0b0ZpZWxkQXJyYXkiLCJmcyIsImYiLCJfZiIsInYiLCJjb25kaXRpb25zIiwibGltaXQiLCJvZmZzZXQiLCJkaXIiLCJjaGlsZFJlbE5hbWUiLCJjaGlsZENvbmZpZyIsInVuZGVmaW5lZCIsInRhYmxlIiwiY2hpbGRRdWVyeSIsIlN1YlF1ZXJ5IiwiX2NoaWxkcmVuIiwiY3JuYW1lIiwiaW5jbHVkZSIsIm9wdGlvbnNfIiwiX2V4ZWN1dGVkIiwiX2ZpbmlzaGVkIiwib25jZSIsIlJlY29yZHMiLCJfY2hhaW5pbmciLCJkZWJ1ZyIsInJlY29yZHMiLCJvblJlY29yZCIsInJlbW92ZUxpc3RlbmVyIiwiX2V4ZWN1dGUiLCJ1cmwiLCJfYmFzZVVybCIsImpvaW4iLCJ0b1NPUUwiLCJzb3FsIiwidG90YWxGZXRjaGVkIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdCIsIm1ldGhvZCIsImRhdGEiLCJ0b3RhbFNpemUiLCJTaW5nbGVSZWNvcmQiLCJDb3VudCIsInJlcyIsImxlbmd0aCIsIm51bVJlY29yZHMiLCJpIiwibmV4dFJlY29yZHNVcmwiLCJkb25lIiwidHlwZSIsInN0cmVhbSIsInBpcGUiLCJzb2JqZWN0XyIsInNvYmplY3QiLCJhbGwiLCJfZXhwYW5kQXN0ZXJpc2tGaWVsZHMiLCJfZXhwYW5kRmllbGRzIiwiZWZpZWxkcyIsImNxdWVyeSIsImNjb25maWciLCJfcXVlcnkiLCJjdGFibGUiLCJyZWxOYW1lIiwiZGVzY3JpYmUkIiwidXBwZXJSbmFtZSIsInRvVXBwZXJDYXNlIiwiY2hpbGRSZWxhdGlvbnNoaXBzIiwiY3IiLCJyZWxhdGlvbnNoaXBOYW1lIiwiY2hpbGRTT2JqZWN0IiwiZmllbGQiLCJfZXhwYW5kQXN0ZXJpc2tGaWVsZCIsImV4cGFuZGVkRmllbGRzIiwiZWZsZHMiLCJmbGRzIiwiZnBhdGgiLCJzbyIsInJuYW1lIiwic2hpZnQiLCJyZmllbGQiLCJyZWZlcmVuY2VUbyIsInJ0YWJsZSIsImZwYXRocyIsImZwIiwibmFtZSIsIm9uUmVzb2x2ZSIsIm9uUmVqZWN0IiwidGhlbiIsInR5cGVfIiwidGhyZXNob2xkTnVtIiwiYWxsb3dCdWxrIiwiYnVsa1RocmVzaG9sZCIsIl9lbnN1cmVWZXJzaW9uIiwiX21heFJlcXVlc3QiLCJoYW5kbGVSZWNvcmQiLCJyZWMiLCJJZCIsImhhbmRsZUVuZCIsImlkcyIsImFsbG93UmVjdXJzaXZlIiwibWFwcGluZyIsInVwZGF0ZVN0cmVhbSIsIlJlY29yZFN0cmVhbSIsInJlY29yZE1hcFN0cmVhbSIsInVwZGF0ZSIsIkV2ZW50RW1pdHRlciIsInBhcmVudCIsIl9yZWxOYW1lIiwiX3BhcmVudCIsIndoZXJlIiwiX2ZpbmRSZWxhdGlvbk9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7O2dCQVdJN0IsSSxFQUNBOEIsRyxFQUNBO0FBQUE7O0FBQ0EsV0FBS21ELE1BQUwsR0FBYyx5Q0FBS0EsTUFBTCxtQkFBaUJqRixJQUFqQixFQUE4QjhCLEdBQTlCLENBQWQ7QUFDQSxhQUFPLElBQVA7QUFDRCxLO0FBRUQ7QUFDRjtBQUNBOzs7OztBQUdFO0FBQ0Y7QUFDQTs7Ozs7Ozs7O3VCQUUwQixLQUFLbUcsT0FBTCxDQUFhRSxtQkFBYixDQUFpQyxLQUFLSCxRQUF0QyxDOzs7QUFBaEJ0RCxnQkFBQUEsTzttREFDQyxLQUFLTyxNQUFMLENBQVlKLGFBQVosQ0FBMEJILE9BQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVDtBQUNGO0FBQ0E7Ozs7MEJBTytCO0FBQzNCLGFBQVEsS0FBS3VELE9BQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZSBNYW5hZ2VzIHF1ZXJ5IGZvciByZWNvcmRzIGluIFNhbGVzZm9yY2VcclxuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XHJcbiAqL1xyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnZXZlbnRzJztcclxuaW1wb3J0IHsgTG9nZ2VyLCBnZXRMb2dnZXIgfSBmcm9tICcuL3V0aWwvbG9nZ2VyJztcclxuaW1wb3J0IFJlY29yZFN0cmVhbSwgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuL3JlY29yZC1zdHJlYW0nO1xyXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQgeyBjcmVhdGVTT1FMIH0gZnJvbSAnLi9zb3FsLWJ1aWxkZXInO1xyXG5pbXBvcnQgeyBRdWVyeUNvbmZpZyBhcyBTT1FMUXVlcnlDb25maWcsIFNvcnREaXIgfSBmcm9tICcuL3NvcWwtYnVpbGRlcic7XHJcbmltcG9ydCB7XHJcbiAgUmVjb3JkLFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNjaGVtYSxcclxuICBTT2JqZWN0TmFtZXMsXHJcbiAgQ2hpbGRSZWxhdGlvbnNoaXBOYW1lcyxcclxuICBDaGlsZFJlbGF0aW9uc2hpcFNPYmplY3ROYW1lLFxyXG4gIEZpZWxkUHJvamVjdGlvbkNvbmZpZyxcclxuICBGaWVsZFBhdGhTcGVjaWZpZXIsXHJcbiAgRmllbGRQYXRoU2NvcGVkUHJvamVjdGlvbixcclxuICBTT2JqZWN0UmVjb3JkLFxyXG4gIFNPYmplY3RJbnB1dFJlY29yZCxcclxuICBTT2JqZWN0VXBkYXRlUmVjb3JkLFxyXG4gIFNhdmVSZXN1bHQsXHJcbiAgRGF0ZVN0cmluZyxcclxuICBTT2JqZWN0Q2hpbGRSZWxhdGlvbnNoaXBQcm9wLFxyXG4gIFNPYmplY3RGaWVsZE5hbWVzLFxyXG59IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gJ3N0cmVhbSc7XHJcbmltcG9ydCBTZkRhdGUgZnJvbSAnLi9kYXRlJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUXVlcnlGaWVsZDxcclxuICBTIGV4dGVuZHMgU2NoZW1hLFxyXG4gIE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4sXHJcbiAgRlAgZXh0ZW5kcyBGaWVsZFBhdGhTcGVjaWZpZXI8UywgTj4gPSBGaWVsZFBhdGhTcGVjaWZpZXI8UywgTj5cclxuPiA9IEZQIHwgRlBbXSB8IHN0cmluZyB8IHN0cmluZ1tdIHwgeyBbZmllbGQ6IHN0cmluZ106IG51bWJlciB8IGJvb2xlYW4gfTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxudHlwZSBDVmFsdWU8VD4gPSBUIGV4dGVuZHMgRGF0ZVN0cmluZ1xyXG4gID8gU2ZEYXRlXHJcbiAgOiBUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhblxyXG4gID8gVFxyXG4gIDogbmV2ZXI7XHJcblxyXG50eXBlIENvbmRPcDxUPiA9XHJcbiAgfCBbJyRlcScsIENWYWx1ZTxUPiB8IG51bGxdXHJcbiAgfCBbJyRuZScsIENWYWx1ZTxUPiB8IG51bGxdXHJcbiAgfCBbJyRndCcsIENWYWx1ZTxUPl1cclxuICB8IFsnJGd0ZScsIENWYWx1ZTxUPl1cclxuICB8IFsnJGx0JywgQ1ZhbHVlPFQ+XVxyXG4gIHwgWyckbHRlJywgQ1ZhbHVlPFQ+XVxyXG4gIHwgWyckbGlrZScsIFQgZXh0ZW5kcyBzdHJpbmcgPyBUIDogbmV2ZXJdXHJcbiAgfCBbJyRubGlrZScsIFQgZXh0ZW5kcyBzdHJpbmcgPyBUIDogbmV2ZXJdXHJcbiAgfCBbJyRpbicsIEFycmF5PENWYWx1ZTxUPj5dXHJcbiAgfCBbJyRuaW4nLCBBcnJheTxDVmFsdWU8VD4+XVxyXG4gIHwgWyckaW5jbHVkZXMnLCBUIGV4dGVuZHMgc3RyaW5nID8gVFtdIDogbmV2ZXJdXHJcbiAgfCBbJyRleGNsdWRlcycsIFQgZXh0ZW5kcyBzdHJpbmcgPyBUW10gOiBuZXZlcl1cclxuICB8IFsnJGV4aXN0cycsIGJvb2xlYW5dO1xyXG5cclxudHlwZSBDb25kVmFsdWVPYmo8VCwgT3AgPSBDb25kT3A8VD5bMF0+ID0gT3AgZXh0ZW5kcyBDb25kT3A8VD5bMF1cclxuICA/IE9wIGV4dGVuZHMgc3RyaW5nXHJcbiAgICA/IHsgW0sgaW4gT3BdOiBFeHRyYWN0PENvbmRPcDxUPiwgW09wLCBhbnldPlsxXSB9XHJcbiAgICA6IG5ldmVyXHJcbiAgOiBuZXZlcjtcclxuXHJcbnR5cGUgQ29uZFZhbHVlPFQ+ID0gQ1ZhbHVlPFQ+IHwgQXJyYXk8Q1ZhbHVlPFQ+PiB8IG51bGwgfCBDb25kVmFsdWVPYmo8VD47XHJcblxyXG50eXBlIENvbmRpdGlvblNldDxSIGV4dGVuZHMgUmVjb3JkPiA9IHtcclxuICBbSyBpbiBrZXlvZiBSXT86IENvbmRWYWx1ZTxSW0tdPjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFF1ZXJ5Q29uZGl0aW9uPFMgZXh0ZW5kcyBTY2hlbWEsIE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4+ID1cclxuICB8IHtcclxuICAgICAgJG9yOiBRdWVyeUNvbmRpdGlvbjxTLCBOPltdO1xyXG4gICAgfVxyXG4gIHwge1xyXG4gICAgICAkYW5kOiBRdWVyeUNvbmRpdGlvbjxTLCBOPltdO1xyXG4gICAgfVxyXG4gIHwgQ29uZGl0aW9uU2V0PFNPYmplY3RSZWNvcmQ8UywgTj4+O1xyXG5cclxuZXhwb3J0IHR5cGUgUXVlcnlTb3J0PFxyXG4gIFMgZXh0ZW5kcyBTY2hlbWEsXHJcbiAgTiBleHRlbmRzIFNPYmplY3ROYW1lczxTPixcclxuICBSIGV4dGVuZHMgU09iamVjdFJlY29yZDxTLCBOPiA9IFNPYmplY3RSZWNvcmQ8UywgTj5cclxuPiA9XHJcbiAgfCB7XHJcbiAgICAgIFtLIGluIGtleW9mIFJdPzogU29ydERpcjtcclxuICAgIH1cclxuICB8IEFycmF5PFtrZXlvZiBSLCBTb3J0RGlyXT47XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIFF1ZXJ5Q29uZmlnPFxyXG4gIFMgZXh0ZW5kcyBTY2hlbWEsXHJcbiAgTiBleHRlbmRzIFNPYmplY3ROYW1lczxTPixcclxuICBGUCBleHRlbmRzIEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPlxyXG4+ID0ge1xyXG4gIGZpZWxkcz86IFF1ZXJ5RmllbGQ8UywgTiwgRlA+O1xyXG4gIGluY2x1ZGVzPzoge1xyXG4gICAgW0NSTiBpbiBDaGlsZFJlbGF0aW9uc2hpcE5hbWVzPFMsIE4+XT86IFF1ZXJ5Q29uZmlnPFxyXG4gICAgICBTLFxyXG4gICAgICBDaGlsZFJlbGF0aW9uc2hpcFNPYmplY3ROYW1lPFMsIE4sIENSTj5cclxuICAgID47XHJcbiAgfTtcclxuICB0YWJsZT86IHN0cmluZztcclxuICBjb25kaXRpb25zPzogUXVlcnlDb25kaXRpb248UywgTj47XHJcbiAgc29ydD86IFF1ZXJ5U29ydDxTLCBOPjtcclxuICBsaW1pdD86IG51bWJlcjtcclxuICBvZmZzZXQ/OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBRdWVyeU9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgbWF4RmV0Y2g6IG51bWJlcjtcclxuICBhdXRvRmV0Y2g6IGJvb2xlYW47XHJcbiAgc2NhbkFsbDogYm9vbGVhbjtcclxuICByZXNwb25zZVRhcmdldDogUXVlcnlSZXNwb25zZVRhcmdldDtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFF1ZXJ5UmVzdWx0PFIgZXh0ZW5kcyBSZWNvcmQ+ID0ge1xyXG4gIGRvbmU6IGJvb2xlYW47XHJcbiAgdG90YWxTaXplOiBudW1iZXI7XHJcbiAgcmVjb3JkczogUltdO1xyXG4gIG5leHRSZWNvcmRzVXJsPzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgUmVzcG9uc2VUYXJnZXRWYWx1ZXMgPSBbXHJcbiAgJ1F1ZXJ5UmVzdWx0JyxcclxuICAnUmVjb3JkcycsXHJcbiAgJ1NpbmdsZVJlY29yZCcsXHJcbiAgJ0NvdW50JyxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCB0eXBlIFF1ZXJ5UmVzcG9uc2VUYXJnZXQgPSB0eXBlb2YgUmVzcG9uc2VUYXJnZXRWYWx1ZXNbbnVtYmVyXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXNwb25zZVRhcmdldHM6IHtcclxuICBbSyBpbiBRdWVyeVJlc3BvbnNlVGFyZ2V0XTogSztcclxufSA9IFJlc3BvbnNlVGFyZ2V0VmFsdWVzLnJlZHVjZShcclxuICAodmFsdWVzLCB0YXJnZXQpID0+ICh7IC4uLnZhbHVlcywgW3RhcmdldF06IHRhcmdldCB9KSxcclxuICB7fSBhcyB7XHJcbiAgICBbSyBpbiBRdWVyeVJlc3BvbnNlVGFyZ2V0XTogSztcclxuICB9LFxyXG4pO1xyXG5cclxuZXhwb3J0IHR5cGUgUXVlcnlSZXNwb25zZTxcclxuICBSIGV4dGVuZHMgUmVjb3JkLFxyXG4gIFFSVCBleHRlbmRzIFF1ZXJ5UmVzcG9uc2VUYXJnZXQgPSBRdWVyeVJlc3BvbnNlVGFyZ2V0XHJcbj4gPSBRUlQgZXh0ZW5kcyAnUXVlcnlSZXN1bHQnXHJcbiAgPyBRdWVyeVJlc3VsdDxSPlxyXG4gIDogUVJUIGV4dGVuZHMgJ1JlY29yZHMnXHJcbiAgPyBSW11cclxuICA6IFFSVCBleHRlbmRzICdTaW5nbGVSZWNvcmQnXHJcbiAgPyBSIHwgbnVsbFxyXG4gIDogbnVtYmVyOyAvLyBRUlQgZXh0ZW5kcyAnQ291bnQnXHJcblxyXG5leHBvcnQgdHlwZSBRdWVyeURlc3Ryb3lPcHRpb25zID0ge1xyXG4gIGFsbG93QnVsaz86IGJvb2xlYW47XHJcbiAgYnVsa1RocmVzaG9sZD86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFF1ZXJ5VXBkYXRlT3B0aW9ucyA9IHtcclxuICBhbGxvd0J1bGs/OiBib29sZWFuO1xyXG4gIGJ1bGtUaHJlc2hvbGQ/OiBudW1iZXI7XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNvbnN0IERFRkFVTFRfQlVMS19USFJFU0hPTEQgPSAyMDA7XHJcblxyXG4vKipcclxuICogUXVlcnlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5PFxyXG4gIFMgZXh0ZW5kcyBTY2hlbWEsXHJcbiAgTiBleHRlbmRzIFNPYmplY3ROYW1lczxTPixcclxuICBSIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkLFxyXG4gIFFSVCBleHRlbmRzIFF1ZXJ5UmVzcG9uc2VUYXJnZXQgPSBRdWVyeVJlc3BvbnNlVGFyZ2V0XHJcbj4gZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIHN0YXRpYyBfbG9nZ2VyID0gZ2V0TG9nZ2VyKCdxdWVyeScpO1xyXG5cclxuICBfY29ubjogQ29ubmVjdGlvbjxTPjtcclxuICBfbG9nZ2VyOiBMb2dnZXI7XHJcbiAgX3NvcWw6IE9wdGlvbmFsPHN0cmluZz47XHJcbiAgX2xvY2F0b3I6IE9wdGlvbmFsPHN0cmluZz47XHJcbiAgX2NvbmZpZzogU09RTFF1ZXJ5Q29uZmlnID0ge307XHJcbiAgX2NoaWxkcmVuOiBTdWJRdWVyeTxTLCBOLCBSLCBRUlQsIGFueSwgYW55LCBhbnk+W10gPSBbXTtcclxuICBfb3B0aW9uczogUXVlcnlPcHRpb25zO1xyXG4gIF9leGVjdXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIF9maW5pc2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIF9jaGFpbmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIF9wcm9taXNlOiBQcm9taXNlPFF1ZXJ5UmVzcG9uc2U8UiwgUVJUPj47XHJcbiAgX3N0cmVhbTogU2VyaWFsaXphYmxlPFI+O1xyXG5cclxuICB0b3RhbFNpemU6IE9wdGlvbmFsPG51bWJlcj47XHJcbiAgdG90YWxGZXRjaGVkOiBPcHRpb25hbDxudW1iZXI+O1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29ubjogQ29ubmVjdGlvbjxTPixcclxuICAgIGNvbmZpZzogc3RyaW5nIHwgUXVlcnlDb25maWc8UywgTj4gfCB7IGxvY2F0b3I6IHN0cmluZyB9LFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8UXVlcnlPcHRpb25zPixcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9jb25uID0gY29ubjtcclxuICAgIHRoaXMuX2xvZ2dlciA9IGNvbm4uX2xvZ0xldmVsXHJcbiAgICAgID8gUXVlcnkuX2xvZ2dlci5jcmVhdGVJbnN0YW5jZShjb25uLl9sb2dMZXZlbClcclxuICAgICAgOiBRdWVyeS5fbG9nZ2VyO1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuX3NvcWwgPSBjb25maWc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiAoY29uZmlnIGFzIGFueSkubG9jYXRvciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3QgbG9jYXRvcjogc3RyaW5nID0gKGNvbmZpZyBhcyBhbnkpLmxvY2F0b3I7XHJcbiAgICAgIGlmIChsb2NhdG9yLmluZGV4T2YoJy8nKSA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5fbG9jYXRvciA9IGxvY2F0b3Iuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBmaWVsZHMsIGluY2x1ZGVzLCBzb3J0LCAuLi5fY29uZmlnIH0gPSBjb25maWcgYXMgUXVlcnlDb25maWc8XHJcbiAgICAgICAgUyxcclxuICAgICAgICBOXHJcbiAgICAgID47XHJcbiAgICAgIHRoaXMuX2NvbmZpZyA9IF9jb25maWc7XHJcbiAgICAgIHRoaXMuc2VsZWN0KGZpZWxkcyk7XHJcbiAgICAgIGlmIChpbmNsdWRlcykge1xyXG4gICAgICAgIHRoaXMuaW5jbHVkZUNoaWxkcmVuKGluY2x1ZGVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc29ydCkge1xyXG4gICAgICAgIHRoaXMuc29ydChzb3J0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgIG1heEZldGNoOiAxMDAwMCxcclxuICAgICAgYXV0b0ZldGNoOiBmYWxzZSxcclxuICAgICAgc2NhbkFsbDogZmFsc2UsXHJcbiAgICAgIHJlc3BvbnNlVGFyZ2V0OiAnUXVlcnlSZXN1bHQnLFxyXG4gICAgICAuLi4ob3B0aW9ucyB8fCB7fSksXHJcbiAgICB9IGFzIFF1ZXJ5T3B0aW9ucztcclxuICAgIC8vIHByb21pc2UgaW5zdGFuY2VcclxuICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMub24oJ3Jlc3BvbnNlJywgcmVzb2x2ZSk7XHJcbiAgICAgIHRoaXMub24oJ2Vycm9yJywgcmVqZWN0KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fc3RyZWFtID0gbmV3IFNlcmlhbGl6YWJsZSgpO1xyXG4gICAgdGhpcy5vbigncmVjb3JkJywgKHJlY29yZCkgPT4gdGhpcy5fc3RyZWFtLnB1c2gocmVjb3JkKSk7XHJcbiAgICB0aGlzLm9uKCdlbmQnLCAoKSA9PiB0aGlzLl9zdHJlYW0ucHVzaChudWxsKSk7XHJcbiAgICB0aGlzLm9uKCdlcnJvcicsIChlcnIpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLl9zdHJlYW0uZW1pdCgnZXJyb3InLCBlcnIpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBmaWVsZHMgdG8gaW5jbHVkZSBpbiB0aGUgcmV0dXJuaW5nIHJlc3VsdFxyXG4gICAqL1xyXG4gIHNlbGVjdDxcclxuICAgIFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQsXHJcbiAgICBGUCBleHRlbmRzIEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPixcclxuICAgIEZQQyBleHRlbmRzIEZpZWxkUHJvamVjdGlvbkNvbmZpZyA9IEZpZWxkUGF0aFNjb3BlZFByb2plY3Rpb248UywgTiwgRlA+LFxyXG4gICAgUjIgZXh0ZW5kcyBTT2JqZWN0UmVjb3JkPFMsIE4sIEZQQywgUj4gPSBTT2JqZWN0UmVjb3JkPFMsIE4sIEZQQywgUj5cclxuICA+KGZpZWxkczogUXVlcnlGaWVsZDxTLCBOLCBGUD4gPSAnKicpOiBRdWVyeTxTLCBOLCBSMiwgUVJUPiB7XHJcbiAgICBpZiAodGhpcy5fc29xbCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAnQ2Fubm90IHNldCBzZWxlY3QgZmllbGRzIGZvciB0aGUgcXVlcnkgd2hpY2ggaGFzIGFscmVhZHkgYnVpbHQgU09RTC4nLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9GaWVsZEFycmF5KGZpZWxkczogUXVlcnlGaWVsZDxTLCBOLCBGUD4pOiBzdHJpbmdbXSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgZmllbGRzID09PSAnc3RyaW5nJ1xyXG4gICAgICAgID8gZmllbGRzLnNwbGl0KC9cXHMqLFxccyovKVxyXG4gICAgICAgIDogQXJyYXkuaXNBcnJheShmaWVsZHMpXHJcbiAgICAgICAgPyAoZmllbGRzIGFzIEFycmF5PHN0cmluZyB8IEZQPilcclxuICAgICAgICAgICAgLm1hcCh0b0ZpZWxkQXJyYXkpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGZzLCBmKSA9PiBbLi4uZnMsIC4uLmZdLCBbXSBhcyBzdHJpbmdbXSlcclxuICAgICAgICA6IE9iamVjdC5lbnRyaWVzKGZpZWxkcyBhcyB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSlcclxuICAgICAgICAgICAgLmZpbHRlcigoW19mLCB2XSkgPT4gdilcclxuICAgICAgICAgICAgLm1hcCgoW2ZdKSA9PiBmKTtcclxuICAgIH1cclxuICAgIGlmIChmaWVsZHMpIHtcclxuICAgICAgdGhpcy5fY29uZmlnLmZpZWxkcyA9IHRvRmllbGRBcnJheShmaWVsZHMpO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yY2UgY29udmVydCBxdWVyeSByZWNvcmQgdHlwZSB3aXRob3V0IGNoYW5naW5nIGluc3RhbmNlO1xyXG4gICAgcmV0dXJuICh0aGlzIGFzIGFueSkgYXMgUXVlcnk8UywgTiwgUjIsIFFSVD47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgcXVlcnkgY29uZGl0aW9ucyB0byBmaWx0ZXIgdGhlIHJlc3VsdCByZWNvcmRzXHJcbiAgICovXHJcbiAgd2hlcmUoY29uZGl0aW9uczogUXVlcnlDb25kaXRpb248UywgTj4gfCBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9zb3FsKSB7XHJcbiAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICdDYW5ub3Qgc2V0IHdoZXJlIGNvbmRpdGlvbnMgZm9yIHRoZSBxdWVyeSB3aGljaCBoYXMgYWxyZWFkeSBidWlsdCBTT1FMLicsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb25maWcuY29uZGl0aW9ucyA9IGNvbmRpdGlvbnM7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpbWl0IHRoZSByZXR1cm5pbmcgcmVzdWx0XHJcbiAgICovXHJcbiAgbGltaXQobGltaXQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX3NvcWwpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgJ0Nhbm5vdCBzZXQgbGltaXQgZm9yIHRoZSBxdWVyeSB3aGljaCBoYXMgYWxyZWFkeSBidWlsdCBTT1FMLicsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb25maWcubGltaXQgPSBsaW1pdDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2tpcCByZWNvcmRzXHJcbiAgICovXHJcbiAgc2tpcChvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX3NvcWwpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgJ0Nhbm5vdCBzZXQgc2tpcC9vZmZzZXQgZm9yIHRoZSBxdWVyeSB3aGljaCBoYXMgYWxyZWFkeSBidWlsdCBTT1FMLicsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb25maWcub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIFF1ZXJ5I3NraXAoKVxyXG4gICAqL1xyXG4gIG9mZnNldCA9IHRoaXMuc2tpcDtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHF1ZXJ5IHNvcnQgd2l0aCBkaXJlY3Rpb25cclxuICAgKi9cclxuICBzb3J0KHNvcnQ6IFF1ZXJ5U29ydDxTLCBOPik6IHRoaXM7XHJcbiAgc29ydChzb3J0OiBzdHJpbmcpOiB0aGlzO1xyXG4gIHNvcnQoc29ydDogU09iamVjdEZpZWxkTmFtZXM8UywgTj4sIGRpcjogU29ydERpcik6IHRoaXM7XHJcbiAgc29ydChzb3J0OiBzdHJpbmcsIGRpcjogU29ydERpcik6IHRoaXM7XHJcbiAgc29ydChcclxuICAgIHNvcnQ6IFF1ZXJ5U29ydDxTLCBOPiB8IFNPYmplY3RGaWVsZE5hbWVzPFMsIE4+IHwgc3RyaW5nLFxyXG4gICAgZGlyPzogU29ydERpcixcclxuICApIHtcclxuICAgIGlmICh0aGlzLl9zb3FsKSB7XHJcbiAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICdDYW5ub3Qgc2V0IHNvcnQgZm9yIHRoZSBxdWVyeSB3aGljaCBoYXMgYWxyZWFkeSBidWlsdCBTT1FMLicsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNvcnQgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBkaXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuX2NvbmZpZy5zb3J0ID0gW1tzb3J0LCBkaXJdXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmZpZy5zb3J0ID0gc29ydCBhcyBzdHJpbmcgfCB7IFtmaWVsZDogc3RyaW5nXTogU29ydERpciB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIFF1ZXJ5I3NvcnQoKVxyXG4gICAqL1xyXG4gIG9yZGVyYnk6IHR5cGVvZiBRdWVyeS5wcm90b3R5cGUuc29ydCA9IHRoaXMuc29ydDtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5jbHVkZSBjaGlsZCByZWxhdGlvbnNoaXAgcXVlcnkgYW5kIG1vdmUgZG93biB0byB0aGUgY2hpbGQgcXVlcnkgY29udGV4dFxyXG4gICAqL1xyXG4gIGluY2x1ZGU8XHJcbiAgICBDUk4gZXh0ZW5kcyBDaGlsZFJlbGF0aW9uc2hpcE5hbWVzPFMsIE4+LFxyXG4gICAgQ04gZXh0ZW5kcyBDaGlsZFJlbGF0aW9uc2hpcFNPYmplY3ROYW1lPFMsIE4sIENSTj4sXHJcbiAgICBDRlAgZXh0ZW5kcyBGaWVsZFBhdGhTcGVjaWZpZXI8UywgQ04+ID0gRmllbGRQYXRoU3BlY2lmaWVyPFMsIENOPixcclxuICAgIENGUEMgZXh0ZW5kcyBGaWVsZFByb2plY3Rpb25Db25maWcgPSBGaWVsZFBhdGhTY29wZWRQcm9qZWN0aW9uPFMsIENOLCBDRlA+LFxyXG4gICAgQ1IgZXh0ZW5kcyBSZWNvcmQgPSBTT2JqZWN0UmVjb3JkPFMsIENOLCBDRlBDPlxyXG4gID4oXHJcbiAgICBjaGlsZFJlbE5hbWU6IENSTixcclxuICAgIGNvbmRpdGlvbnM/OiBPcHRpb25hbDxRdWVyeUNvbmRpdGlvbjxTLCBDTj4+LFxyXG4gICAgZmllbGRzPzogT3B0aW9uYWw8UXVlcnlGaWVsZDxTLCBDTiwgQ0ZQPj4sXHJcbiAgICBvcHRpb25zPzogeyBsaW1pdD86IG51bWJlcjsgb2Zmc2V0PzogbnVtYmVyOyBzb3J0PzogUXVlcnlTb3J0PFMsIENOPiB9LFxyXG4gICk6IFN1YlF1ZXJ5PFMsIE4sIFIsIFFSVCwgQ1JOLCBDTiwgQ1I+O1xyXG4gIGluY2x1ZGU8XHJcbiAgICBDUk4gZXh0ZW5kcyBDaGlsZFJlbGF0aW9uc2hpcE5hbWVzPFMsIE4+LFxyXG4gICAgQ04gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4sXHJcbiAgICBDUiBleHRlbmRzIFJlY29yZCA9IFNPYmplY3RSZWNvcmQ8UywgQ04+XHJcbiAgPihcclxuICAgIGNoaWxkUmVsTmFtZTogc3RyaW5nLFxyXG4gICAgY29uZGl0aW9ucz86IE9wdGlvbmFsPFF1ZXJ5Q29uZGl0aW9uPFMsIENOPj4sXHJcbiAgICBmaWVsZHM/OiBPcHRpb25hbDxRdWVyeUZpZWxkPFMsIENOPj4sXHJcbiAgICBvcHRpb25zPzogeyBsaW1pdD86IG51bWJlcjsgb2Zmc2V0PzogbnVtYmVyOyBzb3J0PzogUXVlcnlTb3J0PFMsIENOPiB9LFxyXG4gICk6IFN1YlF1ZXJ5PFMsIE4sIFIsIFFSVCwgQ1JOLCBDTiwgQ1I+O1xyXG5cclxuICBpbmNsdWRlPFxyXG4gICAgQ1JOIGV4dGVuZHMgQ2hpbGRSZWxhdGlvbnNoaXBOYW1lczxTLCBOPixcclxuICAgIENOIGV4dGVuZHMgQ2hpbGRSZWxhdGlvbnNoaXBTT2JqZWN0TmFtZTxTLCBOLCBDUk4+LFxyXG4gICAgQ0ZQIGV4dGVuZHMgRmllbGRQYXRoU3BlY2lmaWVyPFMsIENOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBDTj4sXHJcbiAgICBDRlBDIGV4dGVuZHMgRmllbGRQcm9qZWN0aW9uQ29uZmlnID0gRmllbGRQYXRoU2NvcGVkUHJvamVjdGlvbjxTLCBDTiwgQ0ZQPixcclxuICAgIENSIGV4dGVuZHMgUmVjb3JkID0gU09iamVjdFJlY29yZDxTLCBDTiwgQ0ZQQz5cclxuICA+KFxyXG4gICAgY2hpbGRSZWxOYW1lOiBDUk4gfCBzdHJpbmcsXHJcbiAgICBjb25kaXRpb25zPzogT3B0aW9uYWw8UXVlcnlDb25kaXRpb248UywgQ04+PixcclxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgQ04sIENGUD4+LFxyXG4gICAgb3B0aW9uczogeyBsaW1pdD86IG51bWJlcjsgb2Zmc2V0PzogbnVtYmVyOyBzb3J0PzogUXVlcnlTb3J0PFMsIENOPiB9ID0ge30sXHJcbiAgKTogU3ViUXVlcnk8UywgTiwgUiwgUVJULCBDUk4sIENOLCBDUj4ge1xyXG4gICAgaWYgKHRoaXMuX3NvcWwpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgJ0Nhbm5vdCBpbmNsdWRlIGNoaWxkIHJlbGF0aW9uc2hpcCBpbnRvIHRoZSBxdWVyeSB3aGljaCBoYXMgYWxyZWFkeSBidWlsdCBTT1FMLicsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGlsZENvbmZpZzogUXVlcnlDb25maWc8UywgQ04sIENGUD4gPSB7XHJcbiAgICAgIGZpZWxkczogZmllbGRzID09PSBudWxsID8gdW5kZWZpbmVkIDogZmllbGRzLFxyXG4gICAgICB0YWJsZTogY2hpbGRSZWxOYW1lLFxyXG4gICAgICBjb25kaXRpb25zOiBjb25kaXRpb25zID09PSBudWxsID8gdW5kZWZpbmVkIDogY29uZGl0aW9ucyxcclxuICAgICAgbGltaXQ6IG9wdGlvbnMubGltaXQsXHJcbiAgICAgIG9mZnNldDogb3B0aW9ucy5vZmZzZXQsXHJcbiAgICAgIHNvcnQ6IG9wdGlvbnMuc29ydCxcclxuICAgIH07XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICAgIGNvbnN0IGNoaWxkUXVlcnkgPSBuZXcgU3ViUXVlcnk8UywgTiwgUiwgUVJULCBDUk4sIENOLCBDUj4oXHJcbiAgICAgIHRoaXMuX2Nvbm4sXHJcbiAgICAgIGNoaWxkUmVsTmFtZSBhcyBDUk4sXHJcbiAgICAgIGNoaWxkQ29uZmlnLFxyXG4gICAgICB0aGlzLFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRRdWVyeSk7XHJcbiAgICByZXR1cm4gY2hpbGRRdWVyeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluY2x1ZGUgY2hpbGQgcmVsYXRpb25zaGlwIHF1ZXJ5aWVzLCBidXQgbm90IG1vdmluZyBkb3duIHRvIHRoZSBjaGlsZHJlbiBjb250ZXh0XHJcbiAgICovXHJcbiAgaW5jbHVkZUNoaWxkcmVuKFxyXG4gICAgaW5jbHVkZXM6IHtcclxuICAgICAgW0NSTiBpbiBDaGlsZFJlbGF0aW9uc2hpcE5hbWVzPFMsIE4+XT86IFF1ZXJ5Q29uZmlnPFxyXG4gICAgICAgIFMsXHJcbiAgICAgICAgQ2hpbGRSZWxhdGlvbnNoaXBTT2JqZWN0TmFtZTxTLCBOLCBDUk4+XHJcbiAgICAgID47XHJcbiAgICB9LFxyXG4gICkge1xyXG4gICAgdHlwZSBDUk4gPSBDaGlsZFJlbGF0aW9uc2hpcE5hbWVzPFMsIE4+O1xyXG4gICAgaWYgKHRoaXMuX3NvcWwpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgJ0Nhbm5vdCBpbmNsdWRlIGNoaWxkIHJlbGF0aW9uc2hpcCBpbnRvIHRoZSBxdWVyeSB3aGljaCBoYXMgYWxyZWFkeSBidWlsdCBTT1FMLicsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGNybmFtZSBvZiBPYmplY3Qua2V5cyhpbmNsdWRlcykgYXMgQ1JOW10pIHtcclxuICAgICAgY29uc3QgeyBjb25kaXRpb25zLCBmaWVsZHMsIC4uLm9wdGlvbnMgfSA9IGluY2x1ZGVzW1xyXG4gICAgICAgIGNybmFtZVxyXG4gICAgICBdIGFzIFF1ZXJ5Q29uZmlnPFMsIENoaWxkUmVsYXRpb25zaGlwU09iamVjdE5hbWU8UywgTiwgQ1JOPj47XHJcbiAgICAgIHRoaXMuaW5jbHVkZShjcm5hbWUsIGNvbmRpdGlvbnMsIGZpZWxkcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHRpbmcgbWF4RmV0Y2ggcXVlcnkgb3B0aW9uXHJcbiAgICovXHJcbiAgbWF4RmV0Y2gobWF4RmV0Y2g6IG51bWJlcikge1xyXG4gICAgdGhpcy5fb3B0aW9ucy5tYXhGZXRjaCA9IG1heEZldGNoO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTd2l0Y2hpbmcgYXV0byBmZXRjaCBtb2RlXHJcbiAgICovXHJcbiAgYXV0b0ZldGNoKGF1dG9GZXRjaDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb3B0aW9ucy5hdXRvRmV0Y2ggPSBhdXRvRmV0Y2g7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBmbGFnIHRvIHNjYW4gYWxsIHJlY29yZHMgaW5jbHVkaW5nIGRlbGV0ZWQgYW5kIGFyY2hpdmVkLlxyXG4gICAqL1xyXG4gIHNjYW5BbGwoc2NhbkFsbDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb3B0aW9ucy5zY2FuQWxsID0gc2NhbkFsbDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBzZXRSZXNwb25zZVRhcmdldDxRUlQxIGV4dGVuZHMgUXVlcnlSZXNwb25zZVRhcmdldD4oXHJcbiAgICByZXNwb25zZVRhcmdldDogUVJUMSxcclxuICApOiBRdWVyeTxTLCBOLCBSLCBRUlQxPiB7XHJcbiAgICBpZiAocmVzcG9uc2VUYXJnZXQgaW4gUmVzcG9uc2VUYXJnZXRzKSB7XHJcbiAgICAgIHRoaXMuX29wdGlvbnMucmVzcG9uc2VUYXJnZXQgPSByZXNwb25zZVRhcmdldDtcclxuICAgIH1cclxuICAgIC8vIGZvcmNlIGNoYW5nZSBxdWVyeSByZXNwb25zZSB0YXJnZXQgd2l0aG91dCBjaGFuZ2luZyBpbnN0YW5jZVxyXG4gICAgcmV0dXJuICh0aGlzIGFzIFF1ZXJ5PFMsIE4sIFI+KSBhcyBRdWVyeTxTLCBOLCBSLCBRUlQxPjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4ZWN1dGUgcXVlcnkgYW5kIGZldGNoIHJlY29yZHMgZnJvbSBzZXJ2ZXIuXHJcbiAgICovXHJcbiAgZXhlY3V0ZTxRUlQxIGV4dGVuZHMgUXVlcnlSZXNwb25zZVRhcmdldCA9IFFSVD4oXHJcbiAgICBvcHRpb25zXzogUGFydGlhbDxRdWVyeU9wdGlvbnM+ICYgeyByZXNwb25zZVRhcmdldD86IFFSVDEgfSA9IHt9LFxyXG4gICk6IFF1ZXJ5PFMsIE4sIFIsIFFSVDE+IHtcclxuICAgIGlmICh0aGlzLl9leGVjdXRlZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlLWV4ZWN1dGluZyBhbHJlYWR5IGV4ZWN1dGVkIHF1ZXJ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2ZpbmlzaGVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignZXhlY3V0aW5nIGFscmVhZHkgY2xvc2VkIHF1ZXJ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogb3B0aW9uc18uaGVhZGVycyB8fCB0aGlzLl9vcHRpb25zLmhlYWRlcnMsXHJcbiAgICAgIHJlc3BvbnNlVGFyZ2V0OiBvcHRpb25zXy5yZXNwb25zZVRhcmdldCB8fCB0aGlzLl9vcHRpb25zLnJlc3BvbnNlVGFyZ2V0LFxyXG4gICAgICBhdXRvRmV0Y2g6IG9wdGlvbnNfLmF1dG9GZXRjaCB8fCB0aGlzLl9vcHRpb25zLmF1dG9GZXRjaCxcclxuICAgICAgbWF4RmV0Y2g6IG9wdGlvbnNfLm1heEZldGNoIHx8IHRoaXMuX29wdGlvbnMubWF4RmV0Y2gsXHJcbiAgICAgIHNjYW5BbGw6IG9wdGlvbnNfLnNjYW5BbGwgfHwgdGhpcy5fb3B0aW9ucy5zY2FuQWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb2xsZWN0IGZldGNoZWQgcmVjb3JkcyBpbiBhcnJheVxyXG4gICAgLy8gb25seSB3aGVuIHJlc3BvbnNlIHRhcmdldCBpcyBSZWNvcmRzIGFuZFxyXG4gICAgLy8gZWl0aGVyIGNhbGxiYWNrIG9yIGNoYWluaW5nIHByb21pc2VzIGFyZSBhdmFpbGFibGUgdG8gdGhpcyBxdWVyeS5cclxuICAgIHRoaXMub25jZSgnZmV0Y2gnLCAoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVGFyZ2V0ID09PSBSZXNwb25zZVRhcmdldHMuUmVjb3JkcyAmJlxyXG4gICAgICAgIHRoaXMuX2NoYWluaW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZygnLS0tIGNvbGxlY3RpbmcgYWxsIGZldGNoZWQgcmVjb3JkcyAtLS0nKTtcclxuICAgICAgICBjb25zdCByZWNvcmRzOiBSZWNvcmRbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG9uUmVjb3JkID0gKHJlY29yZDogUmVjb3JkKSA9PiByZWNvcmRzLnB1c2gocmVjb3JkKTtcclxuICAgICAgICB0aGlzLm9uKCdyZWNvcmQnLCBvblJlY29yZCk7XHJcbiAgICAgICAgdGhpcy5vbmNlKCdlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdyZWNvcmQnLCBvblJlY29yZCk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3BvbnNlJywgcmVjb3JkcywgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZsYWcgdG8gcHJldmVudCByZS1leGVjdXRpb25cclxuICAgIHRoaXMuX2V4ZWN1dGVkID0gdHJ1ZTtcclxuXHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBzdGFydCBhY3R1YWwgcXVlcnlcclxuICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKCc+Pj4gUXVlcnkgc3RhcnQgPj4+Jyk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZXhlY3V0ZShvcHRpb25zKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoJyoqKiBRdWVyeSBmaW5pc2hlZCAqKionKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoJy0tLSBRdWVyeSBlcnJvciAtLS0nLCBlcnJvcik7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyByZXR1cm4gUXVlcnkgaW5zdGFuY2UgZm9yIGNoYWluaW5nXHJcbiAgICByZXR1cm4gKHRoaXMgYXMgUXVlcnk8UywgTiwgUj4pIGFzIFF1ZXJ5PFMsIE4sIFIsIFFSVDE+O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3lub255bSBvZiBRdWVyeSNleGVjdXRlKClcclxuICAgKi9cclxuICBleGVjID0gdGhpcy5leGVjdXRlO1xyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIFF1ZXJ5I2V4ZWN1dGUoKVxyXG4gICAqL1xyXG4gIHJ1biA9IHRoaXMuZXhlY3V0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBhc3luYyBfZXhlY3V0ZShvcHRpb25zOiBRdWVyeU9wdGlvbnMpOiBQcm9taXNlPFF1ZXJ5UmVzcG9uc2U8Uj4+IHtcclxuICAgIGNvbnN0IHsgaGVhZGVycywgcmVzcG9uc2VUYXJnZXQsIGF1dG9GZXRjaCwgbWF4RmV0Y2gsIHNjYW5BbGwgfSA9IG9wdGlvbnM7XHJcbiAgICBsZXQgdXJsID0gJyc7XHJcbiAgICBpZiAodGhpcy5fbG9jYXRvcikge1xyXG4gICAgICB1cmwgPSBbdGhpcy5fY29ubi5fYmFzZVVybCgpLCAnL3F1ZXJ5LycsIHRoaXMuX2xvY2F0b3JdLmpvaW4oJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgc29xbCA9IGF3YWl0IHRoaXMudG9TT1FMKCk7XHJcbiAgICAgIHRoaXMudG90YWxGZXRjaGVkID0gMDtcclxuICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKGBTT1FMID0gJHtzb3FsfWApO1xyXG4gICAgICB1cmwgPSBbXHJcbiAgICAgICAgdGhpcy5fY29ubi5fYmFzZVVybCgpLFxyXG4gICAgICAgICcvJyxcclxuICAgICAgICBzY2FuQWxsID8gJ3F1ZXJ5QWxsJyA6ICdxdWVyeScsXHJcbiAgICAgICAgJz9xPScsXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHNvcWwpLFxyXG4gICAgICBdLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2Nvbm4ucmVxdWVzdCh7IG1ldGhvZDogJ0dFVCcsIHVybCwgaGVhZGVycyB9KTtcclxuICAgIHRoaXMuZW1pdCgnZmV0Y2gnKTtcclxuICAgIHRoaXMudG90YWxTaXplID0gZGF0YS50b3RhbFNpemU7XHJcbiAgICBsZXQgcmVzO1xyXG4gICAgc3dpdGNoIChyZXNwb25zZVRhcmdldCkge1xyXG4gICAgICBjYXNlIFJlc3BvbnNlVGFyZ2V0cy5TaW5nbGVSZWNvcmQ6XHJcbiAgICAgICAgcmVzID0gZGF0YS5yZWNvcmRzICYmIGRhdGEucmVjb3Jkcy5sZW5ndGggPiAwID8gZGF0YS5yZWNvcmRzWzBdIDogbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSZXNwb25zZVRhcmdldHMuUmVjb3JkczpcclxuICAgICAgICByZXMgPSBkYXRhLnJlY29yZHM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUmVzcG9uc2VUYXJnZXRzLkNvdW50OlxyXG4gICAgICAgIHJlcyA9IGRhdGEudG90YWxTaXplO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJlcyA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICAvLyBvbmx5IGZpcmUgcmVzcG9uc2UgZXZlbnQgd2hlbiBpdCBzaG91bGQgYmUgbm90aWZpZWQgcGVyIGZldGNoXHJcbiAgICBpZiAocmVzcG9uc2VUYXJnZXQgIT09IFJlc3BvbnNlVGFyZ2V0cy5SZWNvcmRzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCByZXMsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0cmVhbWluZyByZWNvcmQgaW5zdGFuY2VzXHJcbiAgICBjb25zdCBudW1SZWNvcmRzID0gKGRhdGEucmVjb3JkcyAmJiBkYXRhLnJlY29yZHMubGVuZ3RoKSB8fCAwO1xyXG4gICAgbGV0IHRvdGFsRmV0Y2hlZCA9IHRoaXMudG90YWxGZXRjaGVkIHx8IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJlY29yZHM7IGkrKykge1xyXG4gICAgICBpZiAodG90YWxGZXRjaGVkID49IG1heEZldGNoKSB7XHJcbiAgICAgICAgdGhpcy5fZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlY29yZCA9IGRhdGEucmVjb3Jkc1tpXTtcclxuICAgICAgdGhpcy5lbWl0KCdyZWNvcmQnLCByZWNvcmQsIHRvdGFsRmV0Y2hlZCwgdGhpcyk7XHJcbiAgICAgIHRvdGFsRmV0Y2hlZCArPSAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b3RhbEZldGNoZWQgPSB0b3RhbEZldGNoZWQ7XHJcbiAgICBpZiAoZGF0YS5uZXh0UmVjb3Jkc1VybCkge1xyXG4gICAgICB0aGlzLl9sb2NhdG9yID0gZGF0YS5uZXh0UmVjb3Jkc1VybC5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZmluaXNoZWQgPSB0aGlzLl9maW5pc2hlZCB8fCBkYXRhLmRvbmUgfHwgIWF1dG9GZXRjaDtcclxuICAgIGlmICh0aGlzLl9maW5pc2hlZCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2VuZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXhlY3V0ZShvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPYnRhaW4gcmVhZGFibGUgc3RyZWFtIGluc3RhbmNlXHJcbiAgICovXHJcbiAgc3RyZWFtKHR5cGU6ICdyZWNvcmQnKTogU2VyaWFsaXphYmxlPFI+O1xyXG4gIHN0cmVhbSh0eXBlOiAnY3N2Jyk6IFJlYWRhYmxlO1xyXG4gIHN0cmVhbSh0eXBlOiAncmVjb3JkJyB8ICdjc3YnID0gJ2NzdicpIHtcclxuICAgIGlmICghdGhpcy5fZmluaXNoZWQgJiYgIXRoaXMuX2V4ZWN1dGVkKSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZSh7IGF1dG9GZXRjaDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlID09PSAncmVjb3JkJyA/IHRoaXMuX3N0cmVhbSA6IHRoaXMuX3N0cmVhbS5zdHJlYW0odHlwZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQaXBlIHRoZSBxdWVyaWVkIHJlY29yZHMgdG8gYW5vdGhlciBzdHJlYW1cclxuICAgKiBUaGlzIGlzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5OyBRdWVyeSBpcyBub3QgYSByZWNvcmQgc3RyZWFtIGluc3RhbmNlIGFueW1vcmUgaW4gMi4wLlxyXG4gICAqIElmIHlvdSB3YW50IGEgcmVjb3JkIHN0cmVhbSBpbnN0YW5jZSwgdXNlIGBRdWVyeSNzdHJlYW0oJ3JlY29yZCcpYC5cclxuICAgKi9cclxuICBwaXBlKHN0cmVhbTogTm9kZUpTLldyaXRhYmxlU3RyZWFtKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJlYW0oJ3JlY29yZCcpLnBpcGUoc3RyZWFtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKi9cclxuICBhc3luYyBfZXhwYW5kRmllbGRzKHNvYmplY3RfPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5fc29xbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0Nhbm5vdCBleHBhbmQgZmllbGRzIGZvciB0aGUgcXVlcnkgd2hpY2ggaGFzIGFscmVhZHkgYnVpbHQgU09RTC4nLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBmaWVsZHMgPSBbXSwgdGFibGUgPSAnJyB9ID0gdGhpcy5fY29uZmlnO1xyXG4gICAgY29uc3Qgc29iamVjdCA9IHNvYmplY3RfIHx8IHRhYmxlO1xyXG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFxyXG4gICAgICBgX2V4cGFuZEZpZWxkczogc29iamVjdCA9ICR7c29iamVjdH0sIGZpZWxkcyA9ICR7ZmllbGRzLmpvaW4oJywgJyl9YCxcclxuICAgICk7XHJcbiAgICBjb25zdCBbZWZpZWxkc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIHRoaXMuX2V4cGFuZEFzdGVyaXNrRmllbGRzKHNvYmplY3QsIGZpZWxkcyksXHJcbiAgICAgIC4uLnRoaXMuX2NoaWxkcmVuLm1hcChhc3luYyAoY2hpbGRRdWVyeSkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGNoaWxkUXVlcnkuX2V4cGFuZEZpZWxkcygpO1xyXG4gICAgICAgIHJldHVybiBbXSBhcyBzdHJpbmdbXTtcclxuICAgICAgfSksXHJcbiAgICBdKTtcclxuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMgPSBlZmllbGRzO1xyXG4gICAgdGhpcy5fY29uZmlnLmluY2x1ZGVzID0gdGhpcy5fY2hpbGRyZW5cclxuICAgICAgLm1hcCgoY3F1ZXJ5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2NvbmZpZyA9IGNxdWVyeS5fcXVlcnkuX2NvbmZpZztcclxuICAgICAgICByZXR1cm4gW2Njb25maWcudGFibGUsIGNjb25maWddIGFzIFtzdHJpbmcsIFNPUUxRdWVyeUNvbmZpZ107XHJcbiAgICAgIH0pXHJcbiAgICAgIC5yZWR1Y2UoXHJcbiAgICAgICAgKGluY2x1ZGVzLCBbY3RhYmxlLCBjY29uZmlnXSkgPT4gKHtcclxuICAgICAgICAgIC4uLmluY2x1ZGVzLFxyXG4gICAgICAgICAgW2N0YWJsZV06IGNjb25maWcsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAge30gYXMgeyBbbmFtZTogc3RyaW5nXTogU09RTFF1ZXJ5Q29uZmlnIH0sXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGFzeW5jIF9maW5kUmVsYXRpb25PYmplY3QocmVsTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy5fY29uZmlnLnRhYmxlO1xyXG4gICAgaWYgKCF0YWJsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHRhYmxlIGluZm9ybWF0aW9uIHByb3ZpZGVkIGluIHRoZSBxdWVyeScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFxyXG4gICAgICBgZmluZGluZyB0YWJsZSBmb3IgcmVsYXRpb24gXCIke3JlbE5hbWV9XCIgaW4gXCIke3RhYmxlfVwiLi4uYCxcclxuICAgICk7XHJcbiAgICBjb25zdCBzb2JqZWN0ID0gYXdhaXQgdGhpcy5fY29ubi5kZXNjcmliZSQodGFibGUpO1xyXG4gICAgY29uc3QgdXBwZXJSbmFtZSA9IHJlbE5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgIGZvciAoY29uc3QgY3Igb2Ygc29iamVjdC5jaGlsZFJlbGF0aW9uc2hpcHMpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChjci5yZWxhdGlvbnNoaXBOYW1lIHx8ICcnKS50b1VwcGVyQ2FzZSgpID09PSB1cHBlclJuYW1lICYmXHJcbiAgICAgICAgY3IuY2hpbGRTT2JqZWN0XHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBjci5jaGlsZFNPYmplY3Q7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihgTm8gY2hpbGQgcmVsYXRpb25zaGlwIGZvdW5kOiAke3JlbE5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGFzeW5jIF9leHBhbmRBc3Rlcmlza0ZpZWxkcyhcclxuICAgIHNvYmplY3Q6IHN0cmluZyxcclxuICAgIGZpZWxkczogc3RyaW5nW10sXHJcbiAgKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgY29uc3QgZXhwYW5kZWRGaWVsZHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgZmllbGRzLm1hcChhc3luYyAoZmllbGQpID0+IHRoaXMuX2V4cGFuZEFzdGVyaXNrRmllbGQoc29iamVjdCwgZmllbGQpKSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gZXhwYW5kZWRGaWVsZHMucmVkdWNlKFxyXG4gICAgICAoZWZsZHM6IHN0cmluZ1tdLCBmbGRzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IFsuLi5lZmxkcywgLi4uZmxkc10sXHJcbiAgICAgIFtdLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgYXN5bmMgX2V4cGFuZEFzdGVyaXNrRmllbGQoXHJcbiAgICBzb2JqZWN0OiBzdHJpbmcsXHJcbiAgICBmaWVsZDogc3RyaW5nLFxyXG4gICk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgZXhwYW5kaW5nIGZpZWxkIFwiJHtmaWVsZH1cIiBpbiBcIiR7c29iamVjdH1cIi4uLmApO1xyXG4gICAgY29uc3QgZnBhdGggPSBmaWVsZC5zcGxpdCgnLicpO1xyXG4gICAgaWYgKGZwYXRoW2ZwYXRoLmxlbmd0aCAtIDFdID09PSAnKicpIHtcclxuICAgICAgY29uc3Qgc28gPSBhd2FpdCB0aGlzLl9jb25uLmRlc2NyaWJlJChzb2JqZWN0KTtcclxuICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKGB0YWJsZSAke3NvYmplY3R9IGhhcyBiZWVuIGRlc2NyaWJlZGApO1xyXG4gICAgICBpZiAoZnBhdGgubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IHJuYW1lID0gZnBhdGguc2hpZnQoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGYgb2Ygc28uZmllbGRzKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGYucmVsYXRpb25zaGlwTmFtZSAmJlxyXG4gICAgICAgICAgICBybmFtZSAmJlxyXG4gICAgICAgICAgICBmLnJlbGF0aW9uc2hpcE5hbWUudG9VcHBlckNhc2UoKSA9PT0gcm5hbWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJmaWVsZCA9IGY7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVRvID0gcmZpZWxkLnJlZmVyZW5jZVRvIHx8IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBydGFibGUgPSByZWZlcmVuY2VUby5sZW5ndGggPT09IDEgPyByZWZlcmVuY2VUb1swXSA6ICdOYW1lJztcclxuICAgICAgICAgICAgY29uc3QgZnBhdGhzID0gYXdhaXQgdGhpcy5fZXhwYW5kQXN0ZXJpc2tGaWVsZChcclxuICAgICAgICAgICAgICBydGFibGUsXHJcbiAgICAgICAgICAgICAgZnBhdGguam9pbignLicpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZnBhdGhzLm1hcCgoZnApID0+IGAke3JuYW1lfS4ke2ZwfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNvLmZpZWxkcy5tYXAoKGYpID0+IGYubmFtZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW2ZpZWxkXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4cGxhaW4gcGxhbiBmb3IgZXhlY3V0aW5nIHF1ZXJ5XHJcbiAgICovXHJcbiAgYXN5bmMgZXhwbGFpbigpIHtcclxuICAgIGNvbnN0IHNvcWwgPSBhd2FpdCB0aGlzLnRvU09RTCgpO1xyXG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKGBTT1FMID0gJHtzb3FsfWApO1xyXG4gICAgY29uc3QgdXJsID0gYC9xdWVyeS8/ZXhwbGFpbj0ke2VuY29kZVVSSUNvbXBvbmVudChzb3FsKX1gO1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIFNPUUwgZXhwcmVzc2lvbiBmb3IgdGhlIHF1ZXJ5XHJcbiAgICovXHJcbiAgYXN5bmMgdG9TT1FMKCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcWwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NvcWw7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLl9leHBhbmRGaWVsZHMoKTtcclxuICAgIHJldHVybiBjcmVhdGVTT1FMKHRoaXMuX2NvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9taXNlL0ErIGludGVyZmFjZVxyXG4gICAqIGh0dHA6Ly9wcm9taXNlcy1hcGx1cy5naXRodWIuaW8vcHJvbWlzZXMtc3BlYy9cclxuICAgKlxyXG4gICAqIERlbGVnYXRlIHRvIGRlZmVycmVkIHByb21pc2UsIHJldHVybiBwcm9taXNlIGluc3RhbmNlIGZvciBxdWVyeSByZXN1bHRcclxuICAgKi9cclxuICB0aGVuPFUsIFY+KFxyXG4gICAgb25SZXNvbHZlPzpcclxuICAgICAgfCAoKHFyOiBRdWVyeVJlc3BvbnNlPFIsIFFSVD4pID0+IFUgfCBQcm9taXNlPFU+KVxyXG4gICAgICB8IG51bGxcclxuICAgICAgfCB1bmRlZmluZWQsXHJcbiAgICBvblJlamVjdD86ICgoZXJyOiBFcnJvcikgPT4gViB8IFByb21pc2U8Vj4pIHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICApOiBQcm9taXNlPFUgfCBWPiB7XHJcbiAgICB0aGlzLl9jaGFpbmluZyA9IHRydWU7XHJcbiAgICBpZiAoIXRoaXMuX2ZpbmlzaGVkICYmICF0aGlzLl9leGVjdXRlZCkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGUoKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5fcHJvbWlzZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ2ludmFsaWQgc3RhdGU6IHByb21pc2UgaXMgbm90IHNldCBhZnRlciBxdWVyeSBleGVjdXRpb24nLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2UudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcclxuICB9XHJcblxyXG4gIGNhdGNoKFxyXG4gICAgb25SZWplY3Q6IChcclxuICAgICAgZXJyOiBFcnJvcixcclxuICAgICkgPT4gUXVlcnlSZXNwb25zZTxSLCBRUlQ+IHwgUHJvbWlzZTxRdWVyeVJlc3BvbnNlPFIsIFFSVD4+LFxyXG4gICk6IFByb21pc2U8UXVlcnlSZXNwb25zZTxSLCBRUlQ+PiB7XHJcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0KTtcclxuICB9XHJcblxyXG4gIHByb21pc2UoKTogUHJvbWlzZTxRdWVyeVJlc3BvbnNlPFIsIFFSVD4+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWxrIGRlbGV0ZSBxdWVyaWVkIHJlY29yZHNcclxuICAgKi9cclxuICBkZXN0cm95KG9wdGlvbnM/OiBRdWVyeURlc3Ryb3lPcHRpb25zKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xyXG4gIGRlc3Ryb3kodHlwZTogTiwgb3B0aW9ucz86IFF1ZXJ5RGVzdHJveU9wdGlvbnMpOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XHJcbiAgZGVzdHJveSh0eXBlPzogTiB8IFF1ZXJ5RGVzdHJveU9wdGlvbnMsIG9wdGlvbnM/OiBRdWVyeURlc3Ryb3lPcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcclxuICAgICAgb3B0aW9ucyA9IHR5cGU7XHJcbiAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGNvbnN0IHR5cGVfOiBPcHRpb25hbDxOPiA9XHJcbiAgICAgIHR5cGUgfHwgKCh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLnRhYmxlKSBhcyBPcHRpb25hbDxOPik7XHJcbiAgICBpZiAoIXR5cGVfKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnU09RTCBiYXNlZCBxdWVyeSBuZWVkcyBTT2JqZWN0IHR5cGUgaW5mb3JtYXRpb24gdG8gYnVsayBkZWxldGUuJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIFNldCB0aGUgdGhyZXNob2xkIG51bWJlciB0byBwYXNzIHRvIGJ1bGsgQVBJXHJcbiAgICAvLyBGSVhNRTpcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgIGNvbnN0IHRocmVzaG9sZE51bSA9XHJcbiAgICAgIG9wdGlvbnMuYWxsb3dCdWxrID09PSBmYWxzZVxyXG4gICAgICAgID8gLTFcclxuICAgICAgICA6IHR5cGVvZiBvcHRpb25zLmJ1bGtUaHJlc2hvbGQgPT09ICdudW1iZXInXHJcbiAgICAgICAgPyBvcHRpb25zLmJ1bGtUaHJlc2hvbGRcclxuICAgICAgICA6IC8vIGRldGVybWluZSB0aHJlc2hvbGQgaWYgdGhlIGNvbm5lY3Rpb24gdmVyc2lvbiBzdXBwb3J0cyBTT2JqZWN0IGNvbGxlY3Rpb24gQVBJIG9yIG5vdFxyXG4gICAgICAgIHRoaXMuX2Nvbm4uX2Vuc3VyZVZlcnNpb24oNDIpXHJcbiAgICAgICAgPyBERUZBVUxUX0JVTEtfVEhSRVNIT0xEXHJcbiAgICAgICAgOiB0aGlzLl9jb25uLl9tYXhSZXF1ZXN0IC8gMjtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlY29yZHM6IFJlY29yZFtdID0gW107XHJcbiAgICAgIC8vIGxldCBiYXRjaCA9IG51bGw7XHJcbiAgICAgIGNvbnN0IGhhbmRsZVJlY29yZCA9IChyZWM6IFJlY29yZCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVjLklkKSB7XHJcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICdRdWVyaWVkIHJlY29yZCBkb2VzIG5vdCBpbmNsdWRlIFNhbGVzZm9yY2UgcmVjb3JkIElELicsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlY29yZDogUmVjb3JkID0geyBJZDogcmVjLklkIH07XHJcbiAgICAgICAgLy8gVE9ETzogZW5hYmxlIGJhdGNoIHN3aXRjaFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgaWYgKGJhdGNoKSB7XHJcbiAgICAgICAgICBiYXRjaC53cml0ZShyZWNvcmQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgKi9cclxuICAgICAgICByZWNvcmRzLnB1c2gocmVjb3JkKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgaWYgKHRocmVzaG9sZE51bSA8IDAgfHwgcmVjb3Jkcy5sZW5ndGggPiB0aHJlc2hvbGROdW0pIHtcclxuICAgICAgICAgICAgLy8gVXNlIGJ1bGsgZGVsZXRlIGluc3RlYWQgb2YgU09iamVjdCBSRVNUIEFQSVxyXG4gICAgICAgICAgICBiYXRjaCA9XHJcbiAgICAgICAgICAgICAgc2VsZi5fY29ubi5zb2JqZWN0KHR5cGUpLmRlbGV0ZUJ1bGsoKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdyZXNwb25zZScsIHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAub24oJ2Vycm9yJywgcmVqZWN0KTtcclxuICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHJlY29yZCkge1xyXG4gICAgICAgICAgICAgIGJhdGNoLndyaXRlKHJlY29yZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZWNvcmRzID0gW107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGhhbmRsZUVuZCA9ICgpID0+IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmIChiYXRjaCkge1xyXG4gICAgICAgICAgYmF0Y2guZW5kKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGlkcyA9IHJlY29yZHMubWFwKChyZWNvcmQpID0+IHJlY29yZC5JZCBhcyBzdHJpbmcpO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5cclxuICAgICAgICAgIC5zb2JqZWN0KHR5cGVfKVxyXG4gICAgICAgICAgLmRlc3Ryb3koaWRzLCB7IGFsbG93UmVjdXJzaXZlOiB0cnVlIH0pXHJcbiAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnN0cmVhbSgncmVjb3JkJylcclxuICAgICAgICAub24oJ2RhdGEnLCBoYW5kbGVSZWNvcmQpXHJcbiAgICAgICAgLm9uKCdlbmQnLCBoYW5kbGVFbmQpXHJcbiAgICAgICAgLm9uKCdlcnJvcicsIHJlamVjdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN5bm9ueW0gb2YgUXVlcnkjZGVzdHJveSgpXHJcbiAgICovXHJcbiAgZGVsZXRlID0gdGhpcy5kZXN0cm95O1xyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIFF1ZXJ5I2Rlc3Ryb3koKVxyXG4gICAqL1xyXG4gIGRlbCA9IHRoaXMuZGVzdHJveTtcclxuXHJcbiAgLyoqXHJcbiAgICogQnVsayB1cGRhdGUgcXVlcmllZCByZWNvcmRzLCB1c2luZyBnaXZlbiBtYXBwaW5nIGZ1bmN0aW9uL29iamVjdFxyXG4gICAqL1xyXG4gIHVwZGF0ZTxVUiBleHRlbmRzIFNPYmplY3RJbnB1dFJlY29yZDxTLCBOPj4oXHJcbiAgICBtYXBwaW5nOiAoKHJlYzogUikgPT4gVVIpIHwgVVIsXHJcbiAgICB0eXBlOiBOLFxyXG4gICAgb3B0aW9ucz86IFF1ZXJ5VXBkYXRlT3B0aW9ucyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XHJcbiAgdXBkYXRlPFVSIGV4dGVuZHMgU09iamVjdElucHV0UmVjb3JkPFMsIE4+PihcclxuICAgIG1hcHBpbmc6ICgocmVjOiBSKSA9PiBVUikgfCBVUixcclxuICAgIG9wdGlvbnM/OiBRdWVyeVVwZGF0ZU9wdGlvbnMsXHJcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xyXG4gIHVwZGF0ZTxVUiBleHRlbmRzIFNPYmplY3RJbnB1dFJlY29yZDxTLCBOPj4oXHJcbiAgICBtYXBwaW5nOiAoKHJlYzogUikgPT4gVVIpIHwgVVIsXHJcbiAgICB0eXBlPzogTiB8IFF1ZXJ5VXBkYXRlT3B0aW9ucyxcclxuICAgIG9wdGlvbnM/OiBRdWVyeVVwZGF0ZU9wdGlvbnMsXHJcbiAgKSB7XHJcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcclxuICAgICAgb3B0aW9ucyA9IHR5cGU7XHJcbiAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGNvbnN0IHR5cGVfOiBPcHRpb25hbDxOPiA9XHJcbiAgICAgIHR5cGUgfHwgKHRoaXMuX2NvbmZpZyAmJiAodGhpcy5fY29uZmlnLnRhYmxlIGFzIE9wdGlvbmFsPE4+KSk7XHJcbiAgICBpZiAoIXR5cGVfKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnU09RTCBiYXNlZCBxdWVyeSBuZWVkcyBTT2JqZWN0IHR5cGUgaW5mb3JtYXRpb24gdG8gYnVsayB1cGRhdGUuJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVN0cmVhbSA9XHJcbiAgICAgIHR5cGVvZiBtYXBwaW5nID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgPyBSZWNvcmRTdHJlYW0ubWFwKG1hcHBpbmcpXHJcbiAgICAgICAgOiBSZWNvcmRTdHJlYW0ucmVjb3JkTWFwU3RyZWFtKG1hcHBpbmcpO1xyXG4gICAgLy8gU2V0IHRoZSB0aHJlc2hvbGQgbnVtYmVyIHRvIHBhc3MgdG8gYnVsayBBUElcclxuICAgIC8vIEZJWE1FOlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgY29uc3QgdGhyZXNob2xkTnVtID1cclxuICAgICAgb3B0aW9ucy5hbGxvd0J1bGsgPT09IGZhbHNlXHJcbiAgICAgICAgPyAtMVxyXG4gICAgICAgIDogdHlwZW9mIG9wdGlvbnMuYnVsa1RocmVzaG9sZCA9PT0gJ251bWJlcidcclxuICAgICAgICA/IG9wdGlvbnMuYnVsa1RocmVzaG9sZFxyXG4gICAgICAgIDogLy8gZGV0ZXJtaW5lIHRocmVzaG9sZCBpZiB0aGUgY29ubmVjdGlvbiB2ZXJzaW9uIHN1cHBvcnRzIFNPYmplY3QgY29sbGVjdGlvbiBBUEkgb3Igbm90XHJcbiAgICAgICAgdGhpcy5fY29ubi5fZW5zdXJlVmVyc2lvbig0MilcclxuICAgICAgICA/IERFRkFVTFRfQlVMS19USFJFU0hPTERcclxuICAgICAgICA6IHRoaXMuX2Nvbm4uX21heFJlcXVlc3QgLyAyO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcmVjb3JkczogU09iamVjdFVwZGF0ZVJlY29yZDxTLCBOPltdID0gW107XHJcbiAgICAgIC8vIGxldCBiYXRjaCA9IG51bGw7XHJcbiAgICAgIGNvbnN0IGhhbmRsZVJlY29yZCA9IChyZWNvcmQ6IFJlY29yZCkgPT4ge1xyXG4gICAgICAgIC8vIFRPRE86IGVuYWJsZSBiYXRjaCBzd2l0Y2hcclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmIChiYXRjaCkge1xyXG4gICAgICAgICAgYmF0Y2gud3JpdGUocmVjb3JkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICovXHJcbiAgICAgICAgcmVjb3Jkcy5wdXNoKHJlY29yZCBhcyBTT2JqZWN0VXBkYXRlUmVjb3JkPFMsIE4+KTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmICh0aHJlc2hvbGROdW0gPCAwIHx8IHJlY29yZHMubGVuZ3RoID4gdGhyZXNob2xkTnVtKSB7XHJcbiAgICAgICAgICAvLyBVc2UgYnVsayB1cGRhdGUgaW5zdGVhZCBvZiBTT2JqZWN0IFJFU1QgQVBJXHJcbiAgICAgICAgICBiYXRjaCA9XHJcbiAgICAgICAgICAgIHNlbGYuX2Nvbm4uc29iamVjdCh0eXBlKS51cGRhdGVCdWxrKClcclxuICAgICAgICAgICAgICAub24oJ3Jlc3BvbnNlJywgcmVzb2x2ZSlcclxuICAgICAgICAgICAgICAub24oJ2Vycm9yJywgcmVqZWN0KTtcclxuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbihyZWNvcmQpIHtcclxuICAgICAgICAgICAgYmF0Y2gud3JpdGUocmVjb3JkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVjb3JkcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGhhbmRsZUVuZCA9ICgpID0+IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmIChiYXRjaCkge1xyXG4gICAgICAgICAgYmF0Y2guZW5kKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2Nvbm5cclxuICAgICAgICAgIC5zb2JqZWN0KHR5cGVfKVxyXG4gICAgICAgICAgLnVwZGF0ZShyZWNvcmRzLCB7IGFsbG93UmVjdXJzaXZlOiB0cnVlIH0pXHJcbiAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc3RyZWFtKCdyZWNvcmQnKVxyXG4gICAgICAgIC5vbignZXJyb3InLCByZWplY3QpXHJcbiAgICAgICAgLnBpcGUodXBkYXRlU3RyZWFtKVxyXG4gICAgICAgIC5vbignZGF0YScsIGhhbmRsZVJlY29yZClcclxuICAgICAgICAub24oJ2VuZCcsIGhhbmRsZUVuZClcclxuICAgICAgICAub24oJ2Vycm9yJywgcmVqZWN0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKipcclxuICogU3ViUXVlcnkgb2JqZWN0IGZvciByZXByZXNlbnRpbmcgY2hpbGQgcmVsYXRpb25zaGlwIHF1ZXJ5XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3ViUXVlcnk8XHJcbiAgUyBleHRlbmRzIFNjaGVtYSxcclxuICBQTiBleHRlbmRzIFNPYmplY3ROYW1lczxTPixcclxuICBQUiBleHRlbmRzIFJlY29yZCxcclxuICBQUVJUIGV4dGVuZHMgUXVlcnlSZXNwb25zZVRhcmdldCxcclxuICBDUk4gZXh0ZW5kcyBDaGlsZFJlbGF0aW9uc2hpcE5hbWVzPFMsIFBOPiA9IENoaWxkUmVsYXRpb25zaGlwTmFtZXM8UywgUE4+LFxyXG4gIENOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+ID0gQ2hpbGRSZWxhdGlvbnNoaXBTT2JqZWN0TmFtZTxTLCBQTiwgQ1JOPixcclxuICBDUiBleHRlbmRzIFJlY29yZCA9IFJlY29yZFxyXG4+IHtcclxuICBfcmVsTmFtZTogQ1JOO1xyXG4gIF9xdWVyeTogUXVlcnk8UywgQ04sIENSPjtcclxuICBfcGFyZW50OiBRdWVyeTxTLCBQTiwgUFIsIFBRUlQ+O1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29ubjogQ29ubmVjdGlvbjxTPixcclxuICAgIHJlbE5hbWU6IENSTixcclxuICAgIGNvbmZpZzogUXVlcnlDb25maWc8UywgQ04+LFxyXG4gICAgcGFyZW50OiBRdWVyeTxTLCBQTiwgUFIsIFBRUlQ+LFxyXG4gICkge1xyXG4gICAgdGhpcy5fcmVsTmFtZSA9IHJlbE5hbWU7XHJcbiAgICB0aGlzLl9xdWVyeSA9IG5ldyBRdWVyeShjb25uLCBjb25maWcpO1xyXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBzZWxlY3Q8XHJcbiAgICBSIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkLFxyXG4gICAgRlAgZXh0ZW5kcyBGaWVsZFBhdGhTcGVjaWZpZXI8UywgQ04+ID0gRmllbGRQYXRoU3BlY2lmaWVyPFMsIENOPixcclxuICAgIEZQQyBleHRlbmRzIEZpZWxkUHJvamVjdGlvbkNvbmZpZyA9IEZpZWxkUGF0aFNjb3BlZFByb2plY3Rpb248UywgQ04sIEZQPlxyXG4gID4oXHJcbiAgICBmaWVsZHM6IFF1ZXJ5RmllbGQ8UywgQ04sIEZQPixcclxuICApOiBTdWJRdWVyeTxTLCBQTiwgUFIsIFBRUlQsIENSTiwgQ04sIFNPYmplY3RSZWNvcmQ8UywgQ04sIEZQQywgUj4+IHtcclxuICAgIC8vIGZvcmNlIGNvbnZlcnQgcXVlcnkgcmVjb3JkIHR5cGUgd2l0aG91dCBjaGFuZ2luZyBpbnN0YW5jZVxyXG4gICAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeS5zZWxlY3QoZmllbGRzKSBhcyBhbnk7XHJcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KSBhcyBTdWJRdWVyeTxcclxuICAgICAgUyxcclxuICAgICAgUE4sXHJcbiAgICAgIFBSLFxyXG4gICAgICBQUVJULFxyXG4gICAgICBDUk4sXHJcbiAgICAgIENOLFxyXG4gICAgICBTT2JqZWN0UmVjb3JkPFMsIENOLCBGUEMsIFI+XHJcbiAgICA+O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICB3aGVyZShjb25kaXRpb25zOiBRdWVyeUNvbmRpdGlvbjxTLCBDTj4gfCBzdHJpbmcpOiB0aGlzIHtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkud2hlcmUoY29uZGl0aW9ucyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpbWl0IHRoZSByZXR1cm5pbmcgcmVzdWx0XHJcbiAgICovXHJcbiAgbGltaXQobGltaXQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeS5saW1pdChsaW1pdCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNraXAgcmVjb3Jkc1xyXG4gICAqL1xyXG4gIHNraXAob2Zmc2V0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkuc2tpcChvZmZzZXQpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5vbnltIG9mIFN1YlF1ZXJ5I3NraXAoKVxyXG4gICAqL1xyXG4gIG9mZnNldCA9IHRoaXMuc2tpcDtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHF1ZXJ5IHNvcnQgd2l0aCBkaXJlY3Rpb25cclxuICAgKi9cclxuICBzb3J0KHNvcnQ6IFF1ZXJ5U29ydDxTLCBDTj4pOiB0aGlzO1xyXG4gIHNvcnQoc29ydDogc3RyaW5nKTogdGhpcztcclxuICBzb3J0KHNvcnQ6IFNPYmplY3RGaWVsZE5hbWVzPFMsIENOPiwgZGlyOiBTb3J0RGlyKTogdGhpcztcclxuICBzb3J0KHNvcnQ6IHN0cmluZywgZGlyOiBTb3J0RGlyKTogdGhpcztcclxuICBzb3J0KFxyXG4gICAgc29ydDogUXVlcnlTb3J0PFMsIENOPiB8IFNPYmplY3RGaWVsZE5hbWVzPFMsIENOPiB8IHN0cmluZyxcclxuICAgIGRpcj86IFNvcnREaXIsXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5LnNvcnQoc29ydCBhcyBhbnksIGRpciBhcyBTb3J0RGlyKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3lub255bSBvZiBTdWJRdWVyeSNzb3J0KClcclxuICAgKi9cclxuICBvcmRlcmJ5OiB0eXBlb2YgU3ViUXVlcnkucHJvdG90eXBlLnNvcnQgPSB0aGlzLnNvcnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgYXN5bmMgX2V4cGFuZEZpZWxkcygpIHtcclxuICAgIGNvbnN0IHNvYmplY3QgPSBhd2FpdCB0aGlzLl9wYXJlbnQuX2ZpbmRSZWxhdGlvbk9iamVjdCh0aGlzLl9yZWxOYW1lKTtcclxuICAgIHJldHVybiB0aGlzLl9xdWVyeS5fZXhwYW5kRmllbGRzKHNvYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmFjayB0aGUgY29udGV4dCB0byBwYXJlbnQgcXVlcnkgb2JqZWN0XHJcbiAgICovXHJcbiAgZW5kPFxyXG4gICAgQ1JQIGV4dGVuZHMgU09iamVjdENoaWxkUmVsYXRpb25zaGlwUHJvcDxcclxuICAgICAgQ1JOLFxyXG4gICAgICBDUlxyXG4gICAgPiA9IFNPYmplY3RDaGlsZFJlbGF0aW9uc2hpcFByb3A8Q1JOLCBDUj4sXHJcbiAgICBQUjEgZXh0ZW5kcyBSZWNvcmQgPSBQUiAmIENSUFxyXG4gID4oKTogUXVlcnk8UywgUE4sIFBSMSwgUFFSVD4ge1xyXG4gICAgcmV0dXJuICh0aGlzLl9wYXJlbnQgYXMgYW55KSBhcyBRdWVyeTxTLCBQTiwgUFIxLCBQUVJUPjtcclxuICB9XHJcbn1cclxuIl19