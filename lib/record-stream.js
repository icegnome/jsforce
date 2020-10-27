"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.replace");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.Parsable = exports.Serializable = exports["default"] = void 0;

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _getIteratorMethod2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator-method"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/get"));

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _stream = require("stream");

var _csv = require("./csv");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _symbol["default"] === "undefined" || (0, _getIteratorMethod2["default"])(o) == null) { if ((0, _isArray["default"])(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2["default"])(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context7; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = (0, _slice["default"])(_context7 = Object.prototype.toString.call(o)).call(_context7, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from["default"])(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; (0, _forEach["default"])(_context5 = ownKeys(Object(source), true)).call(_context5, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context6; (0, _forEach["default"])(_context6 = ownKeys(Object(source))).call(_context6, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 * @private
 */
function evalMapping(value, mapping) {
  if (typeof value === 'string') {
    var m = /^\$\{(\w+)\}$/.exec(value);

    if (m) {
      return mapping[m[1]];
    }

    return value.replace(/\$\{(\w+)\}/g, function ($0, prop) {
      var v = mapping[prop];
      return typeof v === 'undefined' || v === null ? '' : String(v);
    });
  }

  return value;
}
/**
 * @private
 */


function convertRecordForSerialization(record) {
  var _context;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _reduce["default"])(_context = (0, _keys["default"])(record)).call(_context, function (rec, key) {
    var value = rec[key];
    var urec;

    if (key === 'attributes') {
      // 'attributes' prop will be ignored
      urec = _objectSpread({}, rec);
      delete urec[key];
      return urec;
    } else if (options.nullValue && value === null) {
      return _objectSpread(_objectSpread({}, rec), {}, (0, _defineProperty3["default"])({}, key, options.nullValue));
    } else if (value !== null && (0, _typeof2["default"])(value) === 'object') {
      var _context2;

      var precord = convertRecordForSerialization(value, options);
      return (0, _reduce["default"])(_context2 = (0, _keys["default"])(precord)).call(_context2, function (prec, pkey) {
        var _context3;

        prec[(0, _concat["default"])(_context3 = "".concat(key, ".")).call(_context3, pkey)] = precord[pkey]; // eslint-disable-line no-param-reassign

        return prec;
      }, _objectSpread({}, rec));
    }

    return rec;
  }, record);
}
/**
 * @private
 */


function createPipelineStream(s1, s2) {
  var pipeline = new _stream.PassThrough();
  pipeline.on('pipe', function (source) {
    source.unpipe(pipeline);
    source.pipe(s1).pipe(s2);
  });

  pipeline.pipe = function (dest, options) {
    return s2.pipe(dest, options);
  };

  return pipeline;
}

/**
 * @private
 */
var CSVStreamConverter = {
  serialize: function serialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var nullValue = options.nullValue,
        csvOpts = (0, _objectWithoutProperties2["default"])(options, ["nullValue"]);
    return createPipelineStream( // eslint-disable-next-line no-use-before-define
    (0, _map["default"])(RecordStream).call(RecordStream, function (record) {
      return convertRecordForSerialization(record, options);
    }), (0, _csv.serializeCSVStream)(csvOpts));
  },
  parse: function parse() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _csv.parseCSVStream)(options);
  }
};
/**
 * @private
 */

var DataStreamConverters = {
  csv: CSVStreamConverter
};
/**
 * Class for Record Stream
 *
 * @class
 * @constructor
 * @extends stream.Transform
 */

var RecordStream = /*#__PURE__*/function (_PassThrough) {
  (0, _inherits2["default"])(RecordStream, _PassThrough);

  var _super = _createSuper(RecordStream);

  /**
   *
   */
  function RecordStream() {
    (0, _classCallCheck2["default"])(this, RecordStream);
    return _super.call(this, {
      objectMode: true
    });
  }
  /**
   * Get record stream of queried records applying the given mapping function
   */


  (0, _createClass2["default"])(RecordStream, [{
    key: "map",
    value: function map(fn) {
      return this.pipe((0, _map["default"])(RecordStream).call(RecordStream, fn));
    }
    /**
     * Get record stream of queried records, applying the given filter function
     */

  }, {
    key: "filter",
    value: function filter(fn) {
      return this.pipe((0, _filter["default"])(RecordStream).call(RecordStream, fn));
    }
    /* --------------------------------------------------- */

    /**
     * Create a record stream which maps records and pass them to downstream
     */

  }], [{
    key: "map",
    value: function map(fn) {
      var mapStream = new _stream.Transform({
        objectMode: true,
        transform: function transform(record, enc, callback) {
          var rec = fn(record) || record; // if not returned record, use same record

          mapStream.push(rec);
          callback();
        }
      });
      return mapStream;
    }
    /**
     * Create mapping stream using given record template
     */

  }, {
    key: "recordMapStream",
    value: function recordMapStream(record, noeval) {
      return (0, _map["default"])(RecordStream).call(RecordStream, function (rec) {
        var mapped = {
          Id: rec.Id
        };

        for (var _i = 0, _Object$keys2 = (0, _keys["default"])(record); _i < _Object$keys2.length; _i++) {
          var _prop = _Object$keys2[_i];
          mapped[_prop] = noeval ? record[_prop] : evalMapping(record[_prop], rec);
        }

        return mapped;
      });
    }
    /**
     * Create a record stream which filters records and pass them to downstream
     *
     * @param {RecordFilterFunction} fn - Record filtering function
     * @returns {RecordStream.Serializable}
     */

  }, {
    key: "filter",
    value: function filter(fn) {
      var filterStream = new _stream.Transform({
        objectMode: true,
        transform: function transform(record, enc, callback) {
          if (fn(record)) {
            filterStream.push(record);
          }

          callback();
        }
      });
      return filterStream;
    }
  }]);
  return RecordStream;
}(_stream.PassThrough);
/**
 * @class RecordStream.Serializable
 * @extends {RecordStream}
 */


exports["default"] = RecordStream;

var Serializable = /*#__PURE__*/function (_RecordStream) {
  (0, _inherits2["default"])(Serializable, _RecordStream);

  var _super2 = _createSuper(Serializable);

  function Serializable() {
    (0, _classCallCheck2["default"])(this, Serializable);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Serializable, [{
    key: "stream",

    /**
     * Create readable data stream which emits serialized record data
     */
    value: function stream() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'csv';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var converter = DataStreamConverters[type];

      if (!converter) {
        throw new Error("Converting [".concat(type, "] data stream is not supported."));
      }

      return this.pipe(converter.serialize(options));
    }
  }]);
  return Serializable;
}(RecordStream);
/**
 * @class RecordStream.Parsable
 * @extends {RecordStream}
 */


exports.Serializable = Serializable;

var Parsable = /*#__PURE__*/function (_RecordStream2) {
  (0, _inherits2["default"])(Parsable, _RecordStream2);

  var _super3 = _createSuper(Parsable);

  function Parsable() {
    var _context4;

    var _this;

    (0, _classCallCheck2["default"])(this, Parsable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super3.call.apply(_super3, (0, _concat["default"])(_context4 = [this]).call(_context4, args));
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_execParse", false);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "_incomings", []);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "addListener", _this.on);
    return _this;
  }

  (0, _createClass2["default"])(Parsable, [{
    key: "stream",

    /**
     * Create writable data stream which accepts serialized record data
     */
    value: function stream() {
      var _this2 = this;

      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'csv';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var converter = DataStreamConverters[type];

      if (!converter) {
        throw new Error("Converting [".concat(type, "] data stream is not supported."));
      }

      var dataStream = new _stream.PassThrough();
      var parserStream = converter.parse(options);
      parserStream.on('error', function (err) {
        return _this2.emit('error', err);
      });
      parserStream.pipe(this).pipe(new _stream.PassThrough({
        objectMode: true,
        highWaterMark: 500 * 1000
      }));

      if (this._execParse) {
        dataStream.pipe(parserStream);
      } else {
        this._incomings.push([dataStream, parserStream]);
      }

      return dataStream;
    }
    /* @override */

  }, {
    key: "on",
    value: function on(ev, fn) {
      if (ev === 'readable' || ev === 'record') {
        if (!this._execParse) {
          this._execParse = true;

          var _iterator = _createForOfIteratorHelper(this._incomings),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
                  dataStream = _step$value[0],
                  parserStream = _step$value[1];

              dataStream.pipe(parserStream);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }

      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Parsable.prototype), "on", this).call(this, ev, fn);
    }
    /* @override */

  }]);
  return Parsable;
}(RecordStream);

exports.Parsable = Parsable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWNvcmQtc3RyZWFtLnRzIl0sIm5hbWVzIjpbImV2YWxNYXBwaW5nIiwidmFsdWUiLCJtYXBwaW5nIiwibSIsImV4ZWMiLCJyZXBsYWNlIiwiJDAiLCJwcm9wIiwidiIsIlN0cmluZyIsImNvbnZlcnRSZWNvcmRGb3JTZXJpYWxpemF0aW9uIiwicmVjb3JkIiwib3B0aW9ucyIsInJlYyIsImtleSIsInVyZWMiLCJudWxsVmFsdWUiLCJwcmVjb3JkIiwicHJlYyIsInBrZXkiLCJjcmVhdGVQaXBlbGluZVN0cmVhbSIsInMxIiwiczIiLCJwaXBlbGluZSIsIlBhc3NUaHJvdWdoIiwib24iLCJzb3VyY2UiLCJ1bnBpcGUiLCJwaXBlIiwiZGVzdCIsIkNTVlN0cmVhbUNvbnZlcnRlciIsInNlcmlhbGl6ZSIsImNzdk9wdHMiLCJSZWNvcmRTdHJlYW0iLCJwYXJzZSIsIkRhdGFTdHJlYW1Db252ZXJ0ZXJzIiwiY3N2Iiwib2JqZWN0TW9kZSIsImZuIiwibWFwU3RyZWFtIiwiVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiZW5jIiwiY2FsbGJhY2siLCJwdXNoIiwibm9ldmFsIiwibWFwcGVkIiwiSWQiLCJmaWx0ZXJTdHJlYW0iLCJTZXJpYWxpemFibGUiLCJ0eXBlIiwiY29udmVydGVyIiwiRXJyb3IiLCJQYXJzYWJsZSIsImRhdGFTdHJlYW0iLCJwYXJzZXJTdHJlYW0iLCJlcnIiLCJlbWl0IiwiaGlnaFdhdGVyTWFyayIsIl9leGVjUGFyc2UiLCJfaW5jb21pbmdzIiwiZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWlDQyxPQUFqQyxFQUFzRTtBQUNwRSxNQUFJLE9BQU9ELEtBQVAsS0FB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bkIsQ0FBVDtBQUFBLE9BQXpCO0FBQ0FELE1BQUFBLFlBQVksQ0FDVDNCLElBREgsQ0FDUSxJQURSLEVBRUdBLElBRkgsQ0FFUSxJQUFJSixtQkFBSixDQUFnQjtBQUFFYSxRQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQnFCLFFBQUFBLGFBQWEsRUFBRSxNQUFNO0FBQXpDLE9BQWhCLENBRlI7O0FBR0EsVUFBSSxLQUFLQyxVQUFULEVBQXFCO0FBQ25CTCxRQUFBQSxVQUFVLENBQUMxQixJQUFYLENBQWdCMkIsWUFBaEI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLSyxVQUFMLENBQWdCaEIsSUFBaEIsQ0FBcUIsQ0FBQ1UsVUFBRCxFQUFhQyxZQUFiLENBQXJCO0FBQ0Q7O0FBQ0QsYUFBT0QsVUFBUDtBQUNEO0FBRUQ7Ozs7dUJBQ0dPLEUsRUFBWXZCLEUsRUFBOEI7QUFDM0MsVUFBSXVCLEVBQUUsS0FBSyxVQUFQLElBQXFCQSxFQUFFLEtBQUssUUFBaEMsRUFBMEM7QUFDeEMsWUFBSSxDQUFDLEtBQUtGLFVBQVYsRUFBc0I7QUFDcEIsZUFBS0EsVUFBTCxHQUFrQixJQUFsQjs7QUFEb0IscURBRXFCLEtBQUtDLFVBRjFCO0FBQUE7O0FBQUE7QUFFcEIsZ0VBQTBEO0FBQUE7QUFBQSxrQkFBOUNOLFVBQThDO0FBQUEsa0JBQWxDQyxZQUFrQzs7QUFDeERELGNBQUFBLFVBQVUsQ0FBQzFCLElBQVgsQ0FBZ0IyQixZQUFoQjtBQUNEO0FBSm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLckI7QUFDRjs7QUFDRCxnSEFBZ0JNLEVBQWhCLEVBQW9CdkIsRUFBcEI7QUFDRDtBQUVEOzs7O0VBdkN1REwsWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZSBSZXByZXNlbnRzIHN0cmVhbSB0aGF0IGhhbmRsZXMgU2FsZXNmb3JjZSByZWNvcmQgYXMgc3RyZWFtIGRhdGFcclxuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XHJcbiAqL1xyXG5pbXBvcnQgeyBSZWFkYWJsZSwgV3JpdGFibGUsIER1cGxleCwgVHJhbnNmb3JtLCBQYXNzVGhyb3VnaCB9IGZyb20gJ3N0cmVhbSc7XHJcbmltcG9ydCB7IFJlY29yZCwgT3B0aW9uYWwgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgc2VyaWFsaXplQ1NWU3RyZWFtLCBwYXJzZUNTVlN0cmVhbSB9IGZyb20gJy4vY3N2JztcclxuXHJcbi8qKlxyXG4gKiB0eXBlIGRlZnNcclxuICovXHJcbmV4cG9ydCB0eXBlIFJlY29yZFN0cmVhbVNlcmlhbGl6ZU9wdGlvbiA9IHtcclxuICBudWxsVmFsdWU/OiBhbnk7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBSZWNvcmRTdHJlYW1QYXJzZU9wdGlvbiA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBldmFsTWFwcGluZyh2YWx1ZTogYW55LCBtYXBwaW5nOiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfSkge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zdCBtID0gL15cXCRcXHsoXFx3KylcXH0kLy5leGVjKHZhbHVlKTtcclxuICAgIGlmIChtKSB7XHJcbiAgICAgIHJldHVybiBtYXBwaW5nW21bMV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcJFxceyhcXHcrKVxcfS9nLCAoJDAsIHByb3ApID0+IHtcclxuICAgICAgY29uc3QgdiA9IG1hcHBpbmdbcHJvcF07XHJcbiAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCA/ICcnIDogU3RyaW5nKHYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjb252ZXJ0UmVjb3JkRm9yU2VyaWFsaXphdGlvbihcclxuICByZWNvcmQ6IFJlY29yZCxcclxuICBvcHRpb25zOiB7IG51bGxWYWx1ZT86IGJvb2xlYW4gfSA9IHt9LFxyXG4pOiBSZWNvcmQge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhyZWNvcmQpLnJlZHVjZSgocmVjOiBSZWNvcmQsIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IChyZWMgYXMgYW55KVtrZXldO1xyXG4gICAgbGV0IHVyZWM6IFJlY29yZDtcclxuICAgIGlmIChrZXkgPT09ICdhdHRyaWJ1dGVzJykge1xyXG4gICAgICAvLyAnYXR0cmlidXRlcycgcHJvcCB3aWxsIGJlIGlnbm9yZWRcclxuICAgICAgdXJlYyA9IHsgLi4ucmVjIH07XHJcbiAgICAgIGRlbGV0ZSB1cmVjW2tleV07XHJcbiAgICAgIHJldHVybiB1cmVjO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLm51bGxWYWx1ZSAmJiB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4geyAuLi5yZWMsIFtrZXldOiBvcHRpb25zLm51bGxWYWx1ZSB9IGFzIFJlY29yZDtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBjb25zdCBwcmVjb3JkID0gY29udmVydFJlY29yZEZvclNlcmlhbGl6YXRpb24odmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMocHJlY29yZCkucmVkdWNlKFxyXG4gICAgICAgIChwcmVjOiBSZWNvcmQsIHBrZXkpID0+IHtcclxuICAgICAgICAgIHByZWNbYCR7a2V5fS4ke3BrZXl9YF0gPSBwcmVjb3JkW3BrZXldOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICByZXR1cm4gcHJlYztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgLi4ucmVjIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVjO1xyXG4gIH0sIHJlY29yZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUGlwZWxpbmVTdHJlYW0oczE6IFdyaXRhYmxlLCBzMjogV3JpdGFibGUpIHtcclxuICBjb25zdCBwaXBlbGluZTogYW55ID0gbmV3IFBhc3NUaHJvdWdoKCk7XHJcbiAgcGlwZWxpbmUub24oJ3BpcGUnLCAoc291cmNlOiBSZWFkYWJsZSkgPT4ge1xyXG4gICAgc291cmNlLnVucGlwZShwaXBlbGluZSk7XHJcbiAgICBzb3VyY2UucGlwZShzMSkucGlwZShzMik7XHJcbiAgfSk7XHJcbiAgcGlwZWxpbmUucGlwZSA9IChkZXN0OiBXcml0YWJsZSwgb3B0aW9ucz86IGFueSkgPT4gczIucGlwZShkZXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gcGlwZWxpbmUgYXMgVHJhbnNmb3JtO1xyXG59XHJcblxyXG50eXBlIFN0cmVhbUNvbnZlcnRlciA9IHtcclxuICBzZXJpYWxpemU6IChvcHRpb25zPzogUmVjb3JkU3RyZWFtU2VyaWFsaXplT3B0aW9uKSA9PiBUcmFuc2Zvcm07XHJcbiAgcGFyc2U6IChvcHRpb25zPzogUmVjb3JkU3RyZWFtUGFyc2VPcHRpb24pID0+IFRyYW5zZm9ybTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuY29uc3QgQ1NWU3RyZWFtQ29udmVydGVyOiBTdHJlYW1Db252ZXJ0ZXIgPSB7XHJcbiAgc2VyaWFsaXplKG9wdGlvbnM6IFJlY29yZFN0cmVhbVNlcmlhbGl6ZU9wdGlvbiA9IHt9KSB7XHJcbiAgICBjb25zdCB7IG51bGxWYWx1ZSwgLi4uY3N2T3B0cyB9ID0gb3B0aW9ucztcclxuICAgIHJldHVybiBjcmVhdGVQaXBlbGluZVN0cmVhbShcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgICAgIFJlY29yZFN0cmVhbS5tYXAoKHJlY29yZCkgPT5cclxuICAgICAgICBjb252ZXJ0UmVjb3JkRm9yU2VyaWFsaXphdGlvbihyZWNvcmQsIG9wdGlvbnMpLFxyXG4gICAgICApLFxyXG4gICAgICBzZXJpYWxpemVDU1ZTdHJlYW0oY3N2T3B0cyksXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcGFyc2Uob3B0aW9uczogUmVjb3JkU3RyZWFtUGFyc2VPcHRpb24gPSB7fSkge1xyXG4gICAgcmV0dXJuIHBhcnNlQ1NWU3RyZWFtKG9wdGlvbnMpO1xyXG4gIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICovXHJcbmNvbnN0IERhdGFTdHJlYW1Db252ZXJ0ZXJzOiB7IFtrZXk6IHN0cmluZ106IFN0cmVhbUNvbnZlcnRlciB9ID0ge1xyXG4gIGNzdjogQ1NWU3RyZWFtQ29udmVydGVyLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBSZWNvcmQgU3RyZWFtXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVuZHMgc3RyZWFtLlRyYW5zZm9ybVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkU3RyZWFtPFxyXG4gIFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmRcclxuPiBleHRlbmRzIFBhc3NUaHJvdWdoIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBvYmplY3RNb2RlOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHJlY29yZCBzdHJlYW0gb2YgcXVlcmllZCByZWNvcmRzIGFwcGx5aW5nIHRoZSBnaXZlbiBtYXBwaW5nIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgbWFwPFJSIGV4dGVuZHMgUmVjb3JkPihmbjogKHJlYzogUikgPT4gT3B0aW9uYWw8UlI+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5waXBlKFJlY29yZFN0cmVhbS5tYXA8UiwgUlI+KGZuKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgcmVjb3JkIHN0cmVhbSBvZiBxdWVyaWVkIHJlY29yZHMsIGFwcGx5aW5nIHRoZSBnaXZlbiBmaWx0ZXIgZnVuY3Rpb25cclxuICAgKi9cclxuICBmaWx0ZXIoZm46IChyZWM6IFIpID0+IGJvb2xlYW4pOiBEdXBsZXgge1xyXG4gICAgcmV0dXJuIHRoaXMucGlwZShSZWNvcmRTdHJlYW0uZmlsdGVyPFI+KGZuKSk7XHJcbiAgfVxyXG5cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgcmVjb3JkIHN0cmVhbSB3aGljaCBtYXBzIHJlY29yZHMgYW5kIHBhc3MgdGhlbSB0byBkb3duc3RyZWFtXHJcbiAgICovXHJcbiAgc3RhdGljIG1hcDxSMSBleHRlbmRzIFJlY29yZCA9IFJlY29yZCwgUjIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQ+KFxyXG4gICAgZm46IChyZWM6IFIxKSA9PiBPcHRpb25hbDxSMj4sXHJcbiAgKSB7XHJcbiAgICBjb25zdCBtYXBTdHJlYW0gPSBuZXcgVHJhbnNmb3JtKHtcclxuICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcclxuICAgICAgdHJhbnNmb3JtKHJlY29yZCwgZW5jLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IHJlYyA9IGZuKHJlY29yZCkgfHwgcmVjb3JkOyAvLyBpZiBub3QgcmV0dXJuZWQgcmVjb3JkLCB1c2Ugc2FtZSByZWNvcmRcclxuICAgICAgICBtYXBTdHJlYW0ucHVzaChyZWMpO1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYXBTdHJlYW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgbWFwcGluZyBzdHJlYW0gdXNpbmcgZ2l2ZW4gcmVjb3JkIHRlbXBsYXRlXHJcbiAgICovXHJcbiAgc3RhdGljIHJlY29yZE1hcFN0cmVhbTxcclxuICAgIFIxIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkLFxyXG4gICAgUjIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmRcclxuICA+KHJlY29yZDogUjIsIG5vZXZhbD86IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiBSZWNvcmRTdHJlYW0ubWFwPFIxLCBSMj4oKHJlYykgPT4ge1xyXG4gICAgICBjb25zdCBtYXBwZWQ6IFJlY29yZCA9IHsgSWQ6IHJlYy5JZCB9O1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMocmVjb3JkKSkge1xyXG4gICAgICAgIG1hcHBlZFtwcm9wXSA9IG5vZXZhbCA/IHJlY29yZFtwcm9wXSA6IGV2YWxNYXBwaW5nKHJlY29yZFtwcm9wXSwgcmVjKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWFwcGVkIGFzIFIyO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSByZWNvcmQgc3RyZWFtIHdoaWNoIGZpbHRlcnMgcmVjb3JkcyBhbmQgcGFzcyB0aGVtIHRvIGRvd25zdHJlYW1cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UmVjb3JkRmlsdGVyRnVuY3Rpb259IGZuIC0gUmVjb3JkIGZpbHRlcmluZyBmdW5jdGlvblxyXG4gICAqIEByZXR1cm5zIHtSZWNvcmRTdHJlYW0uU2VyaWFsaXphYmxlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBmaWx0ZXI8UjEgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQ+KGZuOiAocmVjOiBSMSkgPT4gYm9vbGVhbik6IER1cGxleCB7XHJcbiAgICBjb25zdCBmaWx0ZXJTdHJlYW0gPSBuZXcgVHJhbnNmb3JtKHtcclxuICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcclxuICAgICAgdHJhbnNmb3JtKHJlY29yZCwgZW5jLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChmbihyZWNvcmQpKSB7XHJcbiAgICAgICAgICBmaWx0ZXJTdHJlYW0ucHVzaChyZWNvcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyU3RyZWFtO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBSZWNvcmRTdHJlYW0uU2VyaWFsaXphYmxlXHJcbiAqIEBleHRlbmRzIHtSZWNvcmRTdHJlYW19XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlPFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQ+IGV4dGVuZHMgUmVjb3JkU3RyZWFtPFI+IHtcclxuICAvKipcclxuICAgKiBDcmVhdGUgcmVhZGFibGUgZGF0YSBzdHJlYW0gd2hpY2ggZW1pdHMgc2VyaWFsaXplZCByZWNvcmQgZGF0YVxyXG4gICAqL1xyXG4gIHN0cmVhbSh0eXBlOiBzdHJpbmcgPSAnY3N2Jywgb3B0aW9uczogT2JqZWN0ID0ge30pOiBSZWFkYWJsZSB7XHJcbiAgICBjb25zdCBjb252ZXJ0ZXI6IE9wdGlvbmFsPFN0cmVhbUNvbnZlcnRlcj4gPSBEYXRhU3RyZWFtQ29udmVydGVyc1t0eXBlXTtcclxuICAgIGlmICghY29udmVydGVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29udmVydGluZyBbJHt0eXBlfV0gZGF0YSBzdHJlYW0gaXMgbm90IHN1cHBvcnRlZC5gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnBpcGUoY29udmVydGVyLnNlcmlhbGl6ZShvcHRpb25zKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIFJlY29yZFN0cmVhbS5QYXJzYWJsZVxyXG4gKiBAZXh0ZW5kcyB7UmVjb3JkU3RyZWFtfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhcnNhYmxlPFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQ+IGV4dGVuZHMgUmVjb3JkU3RyZWFtPFI+IHtcclxuICBfZXhlY1BhcnNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgX2luY29taW5nczogQXJyYXk8W1JlYWRhYmxlLCBXcml0YWJsZV0+ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSB3cml0YWJsZSBkYXRhIHN0cmVhbSB3aGljaCBhY2NlcHRzIHNlcmlhbGl6ZWQgcmVjb3JkIGRhdGFcclxuICAgKi9cclxuICBzdHJlYW0odHlwZTogc3RyaW5nID0gJ2NzdicsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogV3JpdGFibGUge1xyXG4gICAgY29uc3QgY29udmVydGVyOiBPcHRpb25hbDxTdHJlYW1Db252ZXJ0ZXI+ID0gRGF0YVN0cmVhbUNvbnZlcnRlcnNbdHlwZV07XHJcbiAgICBpZiAoIWNvbnZlcnRlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnZlcnRpbmcgWyR7dHlwZX1dIGRhdGEgc3RyZWFtIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhU3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoKCk7XHJcbiAgICBjb25zdCBwYXJzZXJTdHJlYW0gPSBjb252ZXJ0ZXIucGFyc2Uob3B0aW9ucyk7XHJcbiAgICBwYXJzZXJTdHJlYW0ub24oJ2Vycm9yJywgKGVycikgPT4gdGhpcy5lbWl0KCdlcnJvcicsIGVycikpO1xyXG4gICAgcGFyc2VyU3RyZWFtXHJcbiAgICAgIC5waXBlKHRoaXMpXHJcbiAgICAgIC5waXBlKG5ldyBQYXNzVGhyb3VnaCh7IG9iamVjdE1vZGU6IHRydWUsIGhpZ2hXYXRlck1hcms6IDUwMCAqIDEwMDAgfSkpO1xyXG4gICAgaWYgKHRoaXMuX2V4ZWNQYXJzZSkge1xyXG4gICAgICBkYXRhU3RyZWFtLnBpcGUocGFyc2VyU3RyZWFtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2luY29taW5ncy5wdXNoKFtkYXRhU3RyZWFtLCBwYXJzZXJTdHJlYW1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhU3RyZWFtO1xyXG4gIH1cclxuXHJcbiAgLyogQG92ZXJyaWRlICovXHJcbiAgb24oZXY6IHN0cmluZywgZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xyXG4gICAgaWYgKGV2ID09PSAncmVhZGFibGUnIHx8IGV2ID09PSAncmVjb3JkJykge1xyXG4gICAgICBpZiAoIXRoaXMuX2V4ZWNQYXJzZSkge1xyXG4gICAgICAgIHRoaXMuX2V4ZWNQYXJzZSA9IHRydWU7XHJcbiAgICAgICAgZm9yIChjb25zdCBbZGF0YVN0cmVhbSwgcGFyc2VyU3RyZWFtXSBvZiB0aGlzLl9pbmNvbWluZ3MpIHtcclxuICAgICAgICAgIGRhdGFTdHJlYW0ucGlwZShwYXJzZXJTdHJlYW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyLm9uKGV2LCBmbik7XHJcbiAgfVxyXG5cclxuICAvKiBAb3ZlcnJpZGUgKi9cclxuICBhZGRMaXN0ZW5lciA9IHRoaXMub247XHJcbn1cclxuIl19