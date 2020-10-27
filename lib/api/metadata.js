"use strict";

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _context13;

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

var _exportNames = {
  AsyncResultLocator: true,
  RetrieveResultLocator: true,
  DeployResultLocator: true
};
exports.DeployResultLocator = exports.RetrieveResultLocator = exports.AsyncResultLocator = exports["default"] = void 0;

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/get"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _events = require("events");

var _stream = require("stream");

var _jsforce = require("../jsforce");

var _soap = _interopRequireDefault(require("../soap"));

var _function = require("../util/function");

var _schema = require("./metadata/schema");

_forEachInstanceProperty2(_context13 = _Object$keys2(_schema)).call(_context13, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _schema[key]) return;

  _Object$defineProperty2(exports, key, {
    enumerable: true,
    get: function get() {
      return _schema[key];
    }
  });
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context11; (0, _forEach["default"])(_context11 = ownKeys(Object(source), true)).call(_context11, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context12; (0, _forEach["default"])(_context12 = ownKeys(Object(source))).call(_context12, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 *
 */
function deallocateTypeWithMetadata(metadata) {
  var _ref = metadata,
      $ = _ref.$,
      md = (0, _objectWithoutProperties2["default"])(_ref, ["$"]);
  return md;
}

function assignTypeWithMetadata(metadata, type) {
  var convert = function convert(md) {
    return _objectSpread((0, _defineProperty3["default"])({}, '@xsi:type', type), md);
  };

  return (0, _isArray["default"])(metadata) ? (0, _map["default"])(metadata).call(metadata, convert) : convert(metadata);
}
/**
 * Class for Salesforce Metadata API
 */


var MetadataApi = /*#__PURE__*/function () {
  /**
   * Polling interval in milliseconds
   */

  /**
   * Polling timeout in milliseconds
   */

  /**
   *
   */
  function MetadataApi(conn) {
    (0, _classCallCheck2["default"])(this, MetadataApi);
    (0, _defineProperty3["default"])(this, "_conn", void 0);
    (0, _defineProperty3["default"])(this, "pollInterval", 1000);
    (0, _defineProperty3["default"])(this, "pollTimeout", 10000);
    this._conn = conn;
  }
  /**
   * Call Metadata API SOAP endpoint
   *
   * @private
   */


  (0, _createClass2["default"])(MetadataApi, [{
    key: "_invoke",
    value: function () {
      var _invoke2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(method, message, schema) {
        var _context;

        var soapEndpoint, res;
        return _regenerator["default"].wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                soapEndpoint = new _soap["default"](this._conn, {
                  xmlns: 'http://soap.sforce.com/2006/04/metadata',
                  endpointUrl: (0, _concat["default"])(_context = "".concat(this._conn.instanceUrl, "/services/Soap/m/")).call(_context, this._conn.version)
                });
                _context2.next = 3;
                return soapEndpoint.invoke(method, message, schema ? {
                  result: schema
                } : undefined, _schema.ApiSchemas);

              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", res.result);

              case 5:
              case "end":
                return _context2.stop();
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
     * Add one or more new metadata components to the organization.
     */

  }, {
    key: "create",
    value: function create(type, metadata) {
      var isArray = (0, _isArray["default"])(metadata);
      metadata = assignTypeWithMetadata(metadata, type);
      var schema = isArray ? [_schema.ApiSchemas.SaveResult] : _schema.ApiSchemas.SaveResult;
      return this._invoke('createMetadata', {
        metadata: metadata
      }, schema);
    }
    /**
     * Read specified metadata components in the organization.
     */

  }, {
    key: "read",
    value: function () {
      var _read = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(type, fullNames) {
        var _context3;

        var ReadResultSchema, res;
        return _regenerator["default"].wrap(function _callee2$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ReadResultSchema = type in _schema.ApiSchemas ? {
                  type: _schema.ApiSchemas.ReadResult.type,
                  props: {
                    records: [type]
                  }
                } : _schema.ApiSchemas.ReadResult;
                _context4.next = 3;
                return this._invoke('readMetadata', {
                  type: type,
                  fullNames: fullNames
                }, ReadResultSchema);

              case 3:
                res = _context4.sent;
                return _context4.abrupt("return", (0, _isArray["default"])(fullNames) ? (0, _map["default"])(_context3 = res.records).call(_context3, deallocateTypeWithMetadata) : deallocateTypeWithMetadata(res.records[0]));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee2, this);
      }));

      function read(_x4, _x5) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
    /**
     * Update one or more metadata components in the organization.
     */

  }, {
    key: "update",
    value: function update(type, metadata) {
      var isArray = (0, _isArray["default"])(metadata);
      metadata = assignTypeWithMetadata(metadata, type);
      var schema = isArray ? [_schema.ApiSchemas.SaveResult] : _schema.ApiSchemas.SaveResult;
      return this._invoke('updateMetadata', {
        metadata: metadata
      }, schema);
    }
    /**
     * Upsert one or more components in your organization's data.
     */

  }, {
    key: "upsert",
    value: function upsert(type, metadata) {
      var isArray = (0, _isArray["default"])(metadata);
      metadata = assignTypeWithMetadata(metadata, type);
      var schema = isArray ? [_schema.ApiSchemas.UpsertResult] : _schema.ApiSchemas.UpsertResult;
      return this._invoke('upsertMetadata', {
        metadata: metadata
      }, schema);
    }
    /**
     * Deletes specified metadata components in the organization.
     */

  }, {
    key: "delete",
    value: function _delete(type, fullNames) {
      var schema = (0, _isArray["default"])(fullNames) ? [_schema.ApiSchemas.SaveResult] : _schema.ApiSchemas.SaveResult;
      return this._invoke('deleteMetadata', {
        type: type,
        fullNames: fullNames
      }, schema);
    }
    /**
     * Rename fullname of a metadata component in the organization
     */

  }, {
    key: "rename",
    value: function rename(type, oldFullName, newFullName) {
      return this._invoke('renameMetadata', {
        type: type,
        oldFullName: oldFullName,
        newFullName: newFullName
      }, _schema.ApiSchemas.SaveResult);
    }
    /**
     * Retrieves the metadata which describes your organization, including Apex classes and triggers,
     * custom objects, custom fields on standard objects, tab sets that define an app,
     * and many other components.
     */

  }, {
    key: "describe",
    value: function describe(asOfVersion) {
      if (!asOfVersion) {
        asOfVersion = this._conn.version;
      }

      return this._invoke('describeMetadata', {
        asOfVersion: asOfVersion
      }, _schema.ApiSchemas.DescribeMetadataResult);
    }
    /**
     * Retrieves property information about metadata components in your organization
     */

  }, {
    key: "list",
    value: function list(queries, asOfVersion) {
      if (!asOfVersion) {
        asOfVersion = this._conn.version;
      }

      return this._invoke('listMetadata', {
        queries: queries,
        asOfVersion: asOfVersion
      }, [_schema.ApiSchemas.FileProperties]);
    }
    /**
     * Checks the status of asynchronous metadata calls
     */

  }, {
    key: "checkStatus",
    value: function checkStatus(asyncProcessId) {
      var res = this._invoke('checkStatus', {
        asyncProcessId: asyncProcessId
      }, _schema.ApiSchemas.AsyncResult);

      return new AsyncResultLocator(this, res);
    }
    /**
     * Retrieves XML file representations of components in an organization
     */

  }, {
    key: "retrieve",
    value: function retrieve(request) {
      var res = this._invoke('retrieve', {
        request: request
      }, _schema.ApiSchemas.RetrieveResult);

      return new RetrieveResultLocator(this, res);
    }
    /**
     * Checks the status of declarative metadata call retrieve() and returns the zip file contents
     */

  }, {
    key: "checkRetrieveStatus",
    value: function checkRetrieveStatus(asyncProcessId) {
      return this._invoke('checkRetrieveStatus', {
        asyncProcessId: asyncProcessId
      }, _schema.ApiSchemas.RetrieveResult);
    }
    /**
     * Deploy components into an organization using zipped file representations
     */

  }, {
    key: "deploy",
    value: function deploy(zipInput) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var res = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var zipContentB64;
        return _regenerator["default"].wrap(function _callee3$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return new _promise["default"](function (resolve, reject) {
                  if ((0, _function.isObject)(zipInput) && 'pipe' in zipInput && typeof zipInput.pipe === 'function') {
                    var bufs = [];
                    zipInput.on('data', function (d) {
                      return bufs.push(d);
                    });
                    zipInput.on('error', reject);
                    zipInput.on('end', function () {
                      resolve((0, _concat["default"])(Buffer).call(Buffer, bufs).toString('base64'));
                    }); // zipInput.resume();
                  } else if (zipInput instanceof Buffer) {
                    resolve(zipInput.toString('base64'));
                  } else if (zipInput instanceof String || typeof zipInput === 'string') {
                    resolve(zipInput);
                  } else {
                    throw 'Unexpected zipInput type';
                  }
                });

              case 2:
                zipContentB64 = _context5.sent;
                return _context5.abrupt("return", _this._invoke('deploy', {
                  ZipFile: zipContentB64,
                  DeployOptions: options
                }, _schema.ApiSchemas.DeployResult));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee3);
      }))();
      return new DeployResultLocator(this, res);
    }
    /**
     * Checks the status of declarative metadata call deploy()
     */

  }, {
    key: "checkDeployStatus",
    value: function checkDeployStatus(asyncProcessId) {
      var includeDetails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this._invoke('checkDeployStatus', {
        asyncProcessId: asyncProcessId,
        includeDetails: includeDetails
      }, _schema.ApiSchemas.DeployResult);
    }
  }]);
  return MetadataApi;
}();
/*--------------------------------------------*/

/**
 * The locator class for Metadata API asynchronous call result
 */


exports["default"] = MetadataApi;

var AsyncResultLocator = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2["default"])(AsyncResultLocator, _EventEmitter);

  var _super = _createSuper(AsyncResultLocator);

  /**
   *
   */
  function AsyncResultLocator(meta, promise) {
    var _this2;

    (0, _classCallCheck2["default"])(this, AsyncResultLocator);
    _this2 = _super.call(this);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this2), "_meta", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this2), "_promise", void 0);
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this2), "_id", void 0);
    _this2._meta = meta;
    _this2._promise = promise;
    return _this2;
  }
  /**
   * Promise/A+ interface
   * http://promises-aplus.github.io/promises-spec/
   *
   * @method Metadata~AsyncResultLocator#then
   */


  (0, _createClass2["default"])(AsyncResultLocator, [{
    key: "then",
    value: function then(onResolve, onReject) {
      return this._promise.then(onResolve, onReject);
    }
    /**
     * Check the status of async request
     */

  }, {
    key: "check",
    value: function () {
      var _check = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var result;
        return _regenerator["default"].wrap(function _callee4$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._promise;

              case 2:
                result = _context6.sent;
                this._id = result.id;
                _context6.next = 6;
                return this._meta.checkStatus(result.id);

              case 6:
                return _context6.abrupt("return", _context6.sent);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee4, this);
      }));

      function check() {
        return _check.apply(this, arguments);
      }

      return check;
    }()
    /**
     * Polling until async call status becomes complete or error
     */

  }, {
    key: "poll",
    value: function poll(interval, timeout) {
      var _this3 = this;

      var startTime = new Date().getTime();

      var poll = /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
          var now, errMsg, _result;

          return _regenerator["default"].wrap(function _callee5$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  now = new Date().getTime();

                  if (!(startTime + timeout < now)) {
                    _context7.next = 7;
                    break;
                  }

                  errMsg = 'Polling time out.';

                  if (_this3._id) {
                    errMsg += ' Process Id = ' + _this3._id;
                  }

                  _this3.emit('error', new Error(errMsg));

                  return _context7.abrupt("return");

                case 7:
                  _context7.next = 9;
                  return _this3.check();

                case 9:
                  _result = _context7.sent;

                  if (_result.done) {
                    _this3.emit('complete', _result);
                  } else {
                    _this3.emit('progress', _result);

                    (0, _setTimeout2["default"])(poll, interval);
                  }

                  _context7.next = 16;
                  break;

                case 13:
                  _context7.prev = 13;
                  _context7.t0 = _context7["catch"](0);

                  _this3.emit('error', _context7.t0);

                case 16:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee5, null, [[0, 13]]);
        }));

        return function poll() {
          return _ref3.apply(this, arguments);
        };
      }();

      (0, _setTimeout2["default"])(poll, interval);
    }
    /**
     * Check and wait until the async requests become in completed status
     */

  }, {
    key: "complete",
    value: function complete() {
      var _this4 = this;

      return new _promise["default"](function (resolve, reject) {
        _this4.on('complete', resolve);

        _this4.on('error', reject);

        _this4.poll(_this4._meta.pollInterval, _this4._meta.pollTimeout);
      });
    }
  }]);
  return AsyncResultLocator;
}(_events.EventEmitter);
/*--------------------------------------------*/

/**
 * The locator class to track retreive() Metadata API call result
 */


exports.AsyncResultLocator = AsyncResultLocator;

var RetrieveResultLocator = /*#__PURE__*/function (_AsyncResultLocator) {
  (0, _inherits2["default"])(RetrieveResultLocator, _AsyncResultLocator);

  var _super2 = _createSuper(RetrieveResultLocator);

  function RetrieveResultLocator() {
    (0, _classCallCheck2["default"])(this, RetrieveResultLocator);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(RetrieveResultLocator, [{
    key: "complete",

    /**
     * Check and wait until the async request becomes in completed status,
     * and retrieve the result data.
     */
    value: function () {
      var _complete = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var result;
        return _regenerator["default"].wrap(function _callee6$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _get2["default"])((0, _getPrototypeOf2["default"])(RetrieveResultLocator.prototype), "complete", this).call(this);

              case 2:
                result = _context8.sent;
                return _context8.abrupt("return", this._meta.checkRetrieveStatus(result.id));

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee6, this);
      }));

      function complete() {
        return _complete.apply(this, arguments);
      }

      return complete;
    }()
    /**
     * Change the retrieved result to Node.js readable stream
     */

  }, {
    key: "stream",
    value: function stream() {
      var _this5 = this;

      var resultStream = new _stream.Readable();
      var reading = false;
      resultStream._read = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _result2;

        return _regenerator["default"].wrap(function _callee7$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!reading) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt("return");

              case 2:
                reading = true;
                _context9.prev = 3;
                _context9.next = 6;
                return _this5.complete();

              case 6:
                _result2 = _context9.sent;
                resultStream.push(Buffer.from(_result2.zipFile, 'base64'));
                resultStream.push(null);
                _context9.next = 14;
                break;

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](3);
                resultStream.emit('error', _context9.t0);

              case 14:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee7, null, [[3, 11]]);
      }));
      return resultStream;
    }
  }]);
  return RetrieveResultLocator;
}(AsyncResultLocator);
/*--------------------------------------------*/

/**
 * The locator class to track deploy() Metadata API call result
 *
 * @protected
 * @class Metadata~DeployResultLocator
 * @extends Metadata~AsyncResultLocator
 * @param {Metadata} meta - Metadata API object
 * @param {Promise.<Metadata~AsyncResult>} result - Promise object for async result of deploy() call
 */


exports.RetrieveResultLocator = RetrieveResultLocator;

var DeployResultLocator = /*#__PURE__*/function (_AsyncResultLocator2) {
  (0, _inherits2["default"])(DeployResultLocator, _AsyncResultLocator2);

  var _super3 = _createSuper(DeployResultLocator);

  function DeployResultLocator() {
    (0, _classCallCheck2["default"])(this, DeployResultLocator);
    return _super3.apply(this, arguments);
  }

  (0, _createClass2["default"])(DeployResultLocator, [{
    key: "complete",

    /**
     * Check and wait until the async request becomes in completed status,
     * and retrieve the result data.
     */
    value: function () {
      var _complete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(includeDetails) {
        var result;
        return _regenerator["default"].wrap(function _callee8$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _get2["default"])((0, _getPrototypeOf2["default"])(DeployResultLocator.prototype), "complete", this).call(this);

              case 2:
                result = _context10.sent;
                return _context10.abrupt("return", this._meta.checkDeployStatus(result.id, includeDetails));

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee8, this);
      }));

      function complete(_x6) {
        return _complete2.apply(this, arguments);
      }

      return complete;
    }()
  }]);
  return DeployResultLocator;
}(AsyncResultLocator);
/*--------------------------------------------*/

/*
 * Register hook in connection instantiation for dynamically adding this API module features
 */


exports.DeployResultLocator = DeployResultLocator;
(0, _jsforce.registerModule)('metadata', function (conn) {
  return new MetadataApi(conn);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvbWV0YWRhdGEudHMiXSwibmFtZXMiOlsiZGVhbGxvY2F0ZVR5cGVXaXRoTWV0YWRhdGEiLCJtZXRhZGF0YSIsIiQiLCJtZCIsImFzc2lnblR5cGVXaXRoTWV0YWRhdGEiLCJ0eXBlIiwiY29udmVydCIsIk1ldGFkYXRhQXBpIiwiY29ubiIsIl9jb25uIiwibWV0aG9kIiwibWVzc2FnZSIsInNjaGVtYSIsInNvYXBFbmRwb2ludCIsIlNPQVAiLCJ4bWxucyIsImVuZHBvaW50VXJsIiwiaW5zdGFuY2VVcmwiLCJ2ZXJzaW9uIiwiaW52b2tlIiwicmVzdWx0IiwidW5kZWZpbmVkIiwiQXBpU2NoZW1hcyIsInJlcyIsImlzQXJyYXkiLCJTYXZlUmVzdWx0IiwiX2ludm9rZSIsImZ1bGxOYW1lcyIsIlJlYWRSZXN1bHRTY2hlbWEiLCJSZWFkUmVzdWx0IiwicHJvcHMiLCJyZWNvcmRzIiwiVXBzZXJ0UmVzdWx0Iiwib2xkRnVsbE5hbWUiLCJuZXdGdWxsTmFtZSIsImFzT2ZWZXJzaW9uIiwiRGVzY3JpYmVNZXRhZGF0YVJlc3VsdCIsInF1ZXJpZXMiLCJGaWxlUHJvcGVydGllcyIsImFzeW5jUHJvY2Vzc0lkIiwiQXN5bmNSZXN1bHQiLCJBc3luY1Jlc3VsdExvY2F0b3IiLCJyZXF1ZXN0IiwiUmV0cmlldmVSZXN1bHQiLCJSZXRyaWV2ZVJlc3VsdExvY2F0b3IiLCJ6aXBJbnB1dCIsIm9wdGlvbnMiLCJyZXNvbHZlIiwicmVqZWN0IiwicGlwZSIsImJ1ZnMiLCJvbiIsImQiLCJwdXNoIiwiQnVmZmVyIiwidG9TdHJpbmciLCJTdHJpbmciLCJ6aXBDb250ZW50QjY0IiwiWmlwRmlsZSIsIkRlcGxveU9wdGlvbnMiLCJEZXBsb3lSZXN1bHQiLCJEZXBsb3lSZXN1bHRMb2NhdG9yIiwiaW5jbHVkZURldGFpbHMiLCJtZXRhIiwicHJvbWlzZSIsIl9tZXRhIiwiX3Byb21pc2UiLCJvblJlc29sdmUiLCJvblJlamVjdCIsInRoZW4iLCJfaWQiLCJpZCIsImNoZWNrU3RhdHVzIiwiaW50ZXJ2YWwiLCJ0aW1lb3V0Iiwic3RhcnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJwb2xsIiwibm93IiwiZXJyTXNnIiwiZW1pdCIsIkVycm9yIiwiY2hlY2siLCJkb25lIiwicG9sbEludGVydmFsIiwicG9sbFRpbWVvdXQiLCJFdmVudEVtaXR0ZXIiLCJjaGVja1JldHJpZXZlU3RhdHVzIiwicmVzdWx0U3RyZWFtIiwiUmVhZGFibGUiLCJyZWFkaW5nIiwiX3JlYWQiLCJjb21wbGV0ZSIsImZyb20iLCJ6aXBGaWxlIiwiY2hlY2tEZXBsb3lTdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQWdCQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQXFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSwwQkFBVCxDQUF3REMsUUFBeEQsRUFBd0U7QUFBQSxhQUNqREEsUUFEaUQ7QUFBQSxNQUM5REMsQ0FEOEQsUUFDOURBLENBRDhEO0FBQUEsTUFDeERDLEVBRHdEO0FBRXRFLFNBQU9BLEVBQVA7QUFDRDs7QUFFRCxTQUFTQyxzQkFBVCxDQUFnQ0gsUUFBaEMsRUFBaUVJLElBQWpFLEVBQStFO0FBQzdFLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNILEVBQUQ7QUFBQSw4REFBc0IsV0FBdEIsRUFBb0NFLElBQXBDLEdBQTZDRixFQUE3QztBQUFBLEdBQWhCOztBQUNBLFNBQU8seUJBQWNGLFFBQWQsSUFBMEIscUJBQUFBLFFBQVEsTUFBUixDQUFBQSxRQUFRLEVBQUtLLE9BQUwsQ0FBbEMsR0FBa0RBLE9BQU8sQ0FBQ0wsUUFBRCxDQUFoRTtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7SUFDcUJNLFc7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b0MsZ0JBQUFBLFlBQVksQ0FBQ1IsSUFBYixDQUFrQixPQUFsQjs7QUFWaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBckI7QUFhQSxhQUFPUSxZQUFQO0FBQ0Q7OztFQWpDMERoRCxrQjtBQW9DN0Q7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztJQUNhb0IsbUI7Ozs7Ozs7Ozs7Ozs7QUFJWDtBQUNGO0FBQ0E7QUFDQTs7dUhBQ2lCQyxjOzs7Ozs7Ozs7O0FBQ1AxQyxnQkFBQUEsTTttREFDQyxLQUFLNkMsS0FBTCxDQUFXK0IsaUJBQVgsQ0FBNkI1RSxNQUFNLENBQUNtRCxFQUFwQyxFQUF3Q1QsY0FBeEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBVmdEckIsa0I7QUFjM0Q7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsNkJBQWUsVUFBZixFQUEyQixVQUFDakMsSUFBRDtBQUFBLFNBQVUsSUFBSUQsV0FBSixDQUFnQkMsSUFBaEIsQ0FBVjtBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlIE1hbmFnZXMgU2FsZXNmb3JjZSBNZXRhZGF0YSBBUElcclxuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XHJcbiAqL1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xyXG5pbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gJ3N0cmVhbSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyTW9kdWxlIH0gZnJvbSAnLi4vanNmb3JjZSc7XHJcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4uL2Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQgU09BUCBmcm9tICcuLi9zb2FwJztcclxuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi91dGlsL2Z1bmN0aW9uJztcclxuaW1wb3J0IHsgU2NoZW1hLCBTb2FwU2NoZW1hRGVmLCBTb2FwU2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIEFwaVNjaGVtYXMsXHJcbiAgTWV0YWRhdGEsXHJcbiAgUmVhZFJlc3VsdCxcclxuICBTYXZlUmVzdWx0LFxyXG4gIFVwc2VydFJlc3VsdCxcclxuICBMaXN0TWV0YWRhdGFRdWVyeSxcclxuICBGaWxlUHJvcGVydGllcyxcclxuICBEZXNjcmliZU1ldGFkYXRhUmVzdWx0LFxyXG4gIFJldHJpZXZlUmVxdWVzdCxcclxuICBEZXBsb3lPcHRpb25zLFxyXG4gIFJldHJpZXZlUmVzdWx0LFxyXG4gIERlcGxveVJlc3VsdCxcclxuICBBc3luY1Jlc3VsdCxcclxuICBBcGlTY2hlbWFUeXBlcyxcclxufSBmcm9tICcuL21ldGFkYXRhL3NjaGVtYSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWV0YWRhdGEvc2NoZW1hJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxudHlwZSBNZXRhZGF0YVR5cGVfPFxyXG4gIEsgZXh0ZW5kcyBrZXlvZiBBcGlTY2hlbWFUeXBlcyA9IGtleW9mIEFwaVNjaGVtYVR5cGVzXHJcbj4gPSBLIGV4dGVuZHMga2V5b2YgQXBpU2NoZW1hVHlwZXNcclxuICA/IEFwaVNjaGVtYVR5cGVzW0tdIGV4dGVuZHMgTWV0YWRhdGFcclxuICAgID8gS1xyXG4gICAgOiBuZXZlclxyXG4gIDogbmV2ZXI7XHJcblxyXG5leHBvcnQgdHlwZSBNZXRhZGF0YVR5cGUgPSBNZXRhZGF0YVR5cGVfO1xyXG5cclxuZXhwb3J0IHR5cGUgTWV0YWRhdGFEZWZpbml0aW9uPFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcsXHJcbiAgTSBleHRlbmRzIE1ldGFkYXRhID0gTWV0YWRhdGFcclxuPiA9IE1ldGFkYXRhIGV4dGVuZHMgTVxyXG4gID8gVCBleHRlbmRzIGtleW9mIEFwaVNjaGVtYVR5cGVzICYgTWV0YWRhdGFUeXBlXHJcbiAgICA/IEFwaVNjaGVtYVR5cGVzW1RdIGV4dGVuZHMgTWV0YWRhdGFcclxuICAgICAgPyBBcGlTY2hlbWFUeXBlc1tUXVxyXG4gICAgICA6IE1ldGFkYXRhXHJcbiAgICA6IE1ldGFkYXRhXHJcbiAgOiBNO1xyXG5cclxudHlwZSBEZWVwUGFydGlhbDxUPiA9IFQgZXh0ZW5kcyBhbnlbXVxyXG4gID8gRGVlcFBhcnRpYWw8VFtudW1iZXJdPltdXHJcbiAgOiBUIGV4dGVuZHMgb2JqZWN0XHJcbiAgPyB7IFtLIGluIGtleW9mIFRdPzogRGVlcFBhcnRpYWw8VFtLXT4gfVxyXG4gIDogVDtcclxuXHJcbmV4cG9ydCB0eXBlIElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcsXHJcbiAgTSBleHRlbmRzIE1ldGFkYXRhID0gTWV0YWRhdGFcclxuPiA9IERlZXBQYXJ0aWFsPE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPj47XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGRlYWxsb2NhdGVUeXBlV2l0aE1ldGFkYXRhPE0gZXh0ZW5kcyBNZXRhZGF0YT4obWV0YWRhdGE6IE0pOiBNIHtcclxuICBjb25zdCB7ICQsIC4uLm1kIH0gPSBtZXRhZGF0YSBhcyBhbnk7XHJcbiAgcmV0dXJuIG1kO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhc3NpZ25UeXBlV2l0aE1ldGFkYXRhKG1ldGFkYXRhOiBNZXRhZGF0YSB8IE1ldGFkYXRhW10sIHR5cGU6IHN0cmluZykge1xyXG4gIGNvbnN0IGNvbnZlcnQgPSAobWQ6IE1ldGFkYXRhKSA9PiAoeyBbJ0B4c2k6dHlwZSddOiB0eXBlLCAuLi5tZCB9KTtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShtZXRhZGF0YSkgPyBtZXRhZGF0YS5tYXAoY29udmVydCkgOiBjb252ZXJ0KG1ldGFkYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBTYWxlc2ZvcmNlIE1ldGFkYXRhIEFQSVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YWRhdGFBcGk8UyBleHRlbmRzIFNjaGVtYT4ge1xyXG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xyXG5cclxuICAvKipcclxuICAgKiBQb2xsaW5nIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqL1xyXG4gIHBvbGxJbnRlcnZhbDogbnVtYmVyID0gMTAwMDtcclxuXHJcbiAgLyoqXHJcbiAgICogUG9sbGluZyB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xyXG4gICAqL1xyXG4gIHBvbGxUaW1lb3V0OiBudW1iZXIgPSAxMDAwMDtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25uOiBDb25uZWN0aW9uPFM+KSB7XHJcbiAgICB0aGlzLl9jb25uID0gY29ubjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgTWV0YWRhdGEgQVBJIFNPQVAgZW5kcG9pbnRcclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgYXN5bmMgX2ludm9rZShcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogb2JqZWN0LFxyXG4gICAgc2NoZW1hPzogU29hcFNjaGVtYSB8IFNvYXBTY2hlbWFEZWYsXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzb2FwRW5kcG9pbnQgPSBuZXcgU09BUCh0aGlzLl9jb25uLCB7XHJcbiAgICAgIHhtbG5zOiAnaHR0cDovL3NvYXAuc2ZvcmNlLmNvbS8yMDA2LzA0L21ldGFkYXRhJyxcclxuICAgICAgZW5kcG9pbnRVcmw6IGAke3RoaXMuX2Nvbm4uaW5zdGFuY2VVcmx9L3NlcnZpY2VzL1NvYXAvbS8ke3RoaXMuX2Nvbm4udmVyc2lvbn1gLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzb2FwRW5kcG9pbnQuaW52b2tlKFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHNjaGVtYSA/ICh7IHJlc3VsdDogc2NoZW1hIH0gYXMgU29hcFNjaGVtYSkgOiB1bmRlZmluZWQsXHJcbiAgICAgIEFwaVNjaGVtYXMsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5yZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgb25lIG9yIG1vcmUgbmV3IG1ldGFkYXRhIGNvbXBvbmVudHMgdG8gdGhlIG9yZ2FuaXphdGlvbi5cclxuICAgKi9cclxuICBjcmVhdGU8XHJcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcclxuICAgIFQgZXh0ZW5kcyBNZXRhZGF0YVR5cGUgPSBNZXRhZGF0YVR5cGUsXHJcbiAgICBNRCBleHRlbmRzIElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+ID0gSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT5cclxuICA+KHR5cGU6IFQsIG1ldGFkYXRhOiBNRFtdKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xyXG4gIGNyZWF0ZTxcclxuICAgIE0gZXh0ZW5kcyBNZXRhZGF0YSA9IE1ldGFkYXRhLFxyXG4gICAgVCBleHRlbmRzIE1ldGFkYXRhVHlwZSA9IE1ldGFkYXRhVHlwZSxcclxuICAgIE1EIGV4dGVuZHMgSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxyXG4gID4odHlwZTogVCwgbWV0YWRhdGE6IE1EKTogUHJvbWlzZTxTYXZlUmVzdWx0PjtcclxuICBjcmVhdGU8XHJcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcclxuICAgIFQgZXh0ZW5kcyBNZXRhZGF0YVR5cGUgPSBNZXRhZGF0YVR5cGUsXHJcbiAgICBNRCBleHRlbmRzIElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+ID0gSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT5cclxuICA+KHR5cGU6IFQsIG1ldGFkYXRhOiBNRCB8IE1EW10pOiBQcm9taXNlPFNhdmVSZXN1bHQgfCBTYXZlUmVzdWx0W10+O1xyXG4gIGNyZWF0ZSh0eXBlOiBzdHJpbmcsIG1ldGFkYXRhOiBNZXRhZGF0YSB8IE1ldGFkYXRhW10pIHtcclxuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG1ldGFkYXRhKTtcclxuICAgIG1ldGFkYXRhID0gYXNzaWduVHlwZVdpdGhNZXRhZGF0YShtZXRhZGF0YSwgdHlwZSk7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBpc0FycmF5ID8gW0FwaVNjaGVtYXMuU2F2ZVJlc3VsdF0gOiBBcGlTY2hlbWFzLlNhdmVSZXN1bHQ7XHJcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKCdjcmVhdGVNZXRhZGF0YScsIHsgbWV0YWRhdGEgfSwgc2NoZW1hKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgc3BlY2lmaWVkIG1ldGFkYXRhIGNvbXBvbmVudHMgaW4gdGhlIG9yZ2FuaXphdGlvbi5cclxuICAgKi9cclxuICByZWFkPFxyXG4gICAgTSBleHRlbmRzIE1ldGFkYXRhID0gTWV0YWRhdGEsXHJcbiAgICBUIGV4dGVuZHMgTWV0YWRhdGFUeXBlID0gTWV0YWRhdGFUeXBlLFxyXG4gICAgTUQgZXh0ZW5kcyBNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBNZXRhZGF0YURlZmluaXRpb248VCwgTT5cclxuICA+KHR5cGU6IFQsIGZ1bGxOYW1lczogc3RyaW5nW10pOiBQcm9taXNlPE1EW10+O1xyXG4gIHJlYWQ8XHJcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcclxuICAgIFQgZXh0ZW5kcyBNZXRhZGF0YVR5cGUgPSBNZXRhZGF0YVR5cGUsXHJcbiAgICBNRCBleHRlbmRzIE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPiA9IE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxyXG4gID4odHlwZTogVCwgZnVsbE5hbWVzOiBzdHJpbmcpOiBQcm9taXNlPE1EPjtcclxuICByZWFkPFxyXG4gICAgTSBleHRlbmRzIE1ldGFkYXRhID0gTWV0YWRhdGEsXHJcbiAgICBUIGV4dGVuZHMgTWV0YWRhdGFUeXBlID0gTWV0YWRhdGFUeXBlLFxyXG4gICAgTUQgZXh0ZW5kcyBNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBNZXRhZGF0YURlZmluaXRpb248VCwgTT5cclxuICA+KHR5cGU6IFQsIGZ1bGxOYW1lczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPE1EIHwgTURbXT47XHJcbiAgYXN5bmMgcmVhZCh0eXBlOiBzdHJpbmcsIGZ1bGxOYW1lczogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IFJlYWRSZXN1bHRTY2hlbWEgPVxyXG4gICAgICB0eXBlIGluIEFwaVNjaGVtYXNcclxuICAgICAgICA/ICh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFwaVNjaGVtYXMuUmVhZFJlc3VsdC50eXBlLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgIHJlY29yZHM6IFt0eXBlXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0gYXMgY29uc3QpXHJcbiAgICAgICAgOiBBcGlTY2hlbWFzLlJlYWRSZXN1bHQ7XHJcbiAgICBjb25zdCByZXM6IFJlYWRSZXN1bHQgPSBhd2FpdCB0aGlzLl9pbnZva2UoXHJcbiAgICAgICdyZWFkTWV0YWRhdGEnLFxyXG4gICAgICB7IHR5cGUsIGZ1bGxOYW1lcyB9LFxyXG4gICAgICBSZWFkUmVzdWx0U2NoZW1hLFxyXG4gICAgKTtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGZ1bGxOYW1lcylcclxuICAgICAgPyByZXMucmVjb3Jkcy5tYXAoZGVhbGxvY2F0ZVR5cGVXaXRoTWV0YWRhdGEpXHJcbiAgICAgIDogZGVhbGxvY2F0ZVR5cGVXaXRoTWV0YWRhdGEocmVzLnJlY29yZHNbMF0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIG9uZSBvciBtb3JlIG1ldGFkYXRhIGNvbXBvbmVudHMgaW4gdGhlIG9yZ2FuaXphdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGU8XHJcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcclxuICAgIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgICBNRCBleHRlbmRzIElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+ID0gSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT5cclxuICA+KHR5cGU6IFQsIG1ldGFkYXRhOiBQYXJ0aWFsPE1EPltdKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xyXG4gIHVwZGF0ZTxcclxuICAgIE0gZXh0ZW5kcyBNZXRhZGF0YSA9IE1ldGFkYXRhLFxyXG4gICAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcclxuICAgIE1EIGV4dGVuZHMgSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxyXG4gID4odHlwZTogVCwgbWV0YWRhdGE6IFBhcnRpYWw8TUQ+KTogUHJvbWlzZTxTYXZlUmVzdWx0PjtcclxuICB1cGRhdGU8XHJcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcclxuICAgIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgICBNRCBleHRlbmRzIElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+ID0gSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT5cclxuICA+KFxyXG4gICAgdHlwZTogVCxcclxuICAgIG1ldGFkYXRhOiBQYXJ0aWFsPE1EPiB8IFBhcnRpYWw8TUQ+W10sXHJcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0IHwgU2F2ZVJlc3VsdFtdPjtcclxuICB1cGRhdGUodHlwZTogc3RyaW5nLCBtZXRhZGF0YTogTWV0YWRhdGEgfCBNZXRhZGF0YVtdKSB7XHJcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShtZXRhZGF0YSk7XHJcbiAgICBtZXRhZGF0YSA9IGFzc2lnblR5cGVXaXRoTWV0YWRhdGEobWV0YWRhdGEsIHR5cGUpO1xyXG4gICAgY29uc3Qgc2NoZW1hID0gaXNBcnJheSA/IFtBcGlTY2hlbWFzLlNhdmVSZXN1bHRdIDogQXBpU2NoZW1hcy5TYXZlUmVzdWx0O1xyXG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZSgndXBkYXRlTWV0YWRhdGEnLCB7IG1ldGFkYXRhIH0sIHNjaGVtYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcHNlcnQgb25lIG9yIG1vcmUgY29tcG9uZW50cyBpbiB5b3VyIG9yZ2FuaXphdGlvbidzIGRhdGEuXHJcbiAgICovXHJcbiAgdXBzZXJ0PFxyXG4gICAgTSBleHRlbmRzIE1ldGFkYXRhID0gTWV0YWRhdGEsXHJcbiAgICBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxyXG4gICAgTUQgZXh0ZW5kcyBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPiA9IElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+XHJcbiAgPih0eXBlOiBULCBtZXRhZGF0YTogTURbXSk6IFByb21pc2U8VXBzZXJ0UmVzdWx0W10+O1xyXG4gIHVwc2VydDxcclxuICAgIE0gZXh0ZW5kcyBNZXRhZGF0YSA9IE1ldGFkYXRhLFxyXG4gICAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcclxuICAgIE1EIGV4dGVuZHMgSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxyXG4gID4odHlwZTogVCwgbWV0YWRhdGE6IE1EKTogUHJvbWlzZTxVcHNlcnRSZXN1bHQ+O1xyXG4gIHVwc2VydDxcclxuICAgIE0gZXh0ZW5kcyBNZXRhZGF0YSA9IE1ldGFkYXRhLFxyXG4gICAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcclxuICAgIE1EIGV4dGVuZHMgSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxyXG4gID4odHlwZTogVCwgbWV0YWRhdGE6IE1EIHwgTURbXSk6IFByb21pc2U8VXBzZXJ0UmVzdWx0IHwgVXBzZXJ0UmVzdWx0W10+O1xyXG4gIHVwc2VydCh0eXBlOiBzdHJpbmcsIG1ldGFkYXRhOiBNZXRhZGF0YSB8IE1ldGFkYXRhW10pIHtcclxuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG1ldGFkYXRhKTtcclxuICAgIG1ldGFkYXRhID0gYXNzaWduVHlwZVdpdGhNZXRhZGF0YShtZXRhZGF0YSwgdHlwZSk7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBpc0FycmF5XHJcbiAgICAgID8gW0FwaVNjaGVtYXMuVXBzZXJ0UmVzdWx0XVxyXG4gICAgICA6IEFwaVNjaGVtYXMuVXBzZXJ0UmVzdWx0O1xyXG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZSgndXBzZXJ0TWV0YWRhdGEnLCB7IG1ldGFkYXRhIH0sIHNjaGVtYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIHNwZWNpZmllZCBtZXRhZGF0YSBjb21wb25lbnRzIGluIHRoZSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgZGVsZXRlKHR5cGU6IHN0cmluZywgZnVsbE5hbWVzOiBzdHJpbmdbXSk6IFByb21pc2U8U2F2ZVJlc3VsdFtdPjtcclxuICBkZWxldGUodHlwZTogc3RyaW5nLCBmdWxsTmFtZXM6IHN0cmluZyk6IFByb21pc2U8U2F2ZVJlc3VsdD47XHJcbiAgZGVsZXRlKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgZnVsbE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQgfCBTYXZlUmVzdWx0W10+O1xyXG4gIGRlbGV0ZSh0eXBlOiBzdHJpbmcsIGZ1bGxOYW1lczogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEFycmF5LmlzQXJyYXkoZnVsbE5hbWVzKVxyXG4gICAgICA/IFtBcGlTY2hlbWFzLlNhdmVSZXN1bHRdXHJcbiAgICAgIDogQXBpU2NoZW1hcy5TYXZlUmVzdWx0O1xyXG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZSgnZGVsZXRlTWV0YWRhdGEnLCB7IHR5cGUsIGZ1bGxOYW1lcyB9LCBzY2hlbWEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVuYW1lIGZ1bGxuYW1lIG9mIGEgbWV0YWRhdGEgY29tcG9uZW50IGluIHRoZSBvcmdhbml6YXRpb25cclxuICAgKi9cclxuICByZW5hbWUoXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBvbGRGdWxsTmFtZTogc3RyaW5nLFxyXG4gICAgbmV3RnVsbE5hbWU6IHN0cmluZyxcclxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXHJcbiAgICAgICdyZW5hbWVNZXRhZGF0YScsXHJcbiAgICAgIHsgdHlwZSwgb2xkRnVsbE5hbWUsIG5ld0Z1bGxOYW1lIH0sXHJcbiAgICAgIEFwaVNjaGVtYXMuU2F2ZVJlc3VsdCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZXMgdGhlIG1ldGFkYXRhIHdoaWNoIGRlc2NyaWJlcyB5b3VyIG9yZ2FuaXphdGlvbiwgaW5jbHVkaW5nIEFwZXggY2xhc3NlcyBhbmQgdHJpZ2dlcnMsXHJcbiAgICogY3VzdG9tIG9iamVjdHMsIGN1c3RvbSBmaWVsZHMgb24gc3RhbmRhcmQgb2JqZWN0cywgdGFiIHNldHMgdGhhdCBkZWZpbmUgYW4gYXBwLFxyXG4gICAqIGFuZCBtYW55IG90aGVyIGNvbXBvbmVudHMuXHJcbiAgICovXHJcbiAgZGVzY3JpYmUoYXNPZlZlcnNpb24/OiBzdHJpbmcpOiBQcm9taXNlPERlc2NyaWJlTWV0YWRhdGFSZXN1bHQ+IHtcclxuICAgIGlmICghYXNPZlZlcnNpb24pIHtcclxuICAgICAgYXNPZlZlcnNpb24gPSB0aGlzLl9jb25uLnZlcnNpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFxyXG4gICAgICAnZGVzY3JpYmVNZXRhZGF0YScsXHJcbiAgICAgIHsgYXNPZlZlcnNpb24gfSxcclxuICAgICAgQXBpU2NoZW1hcy5EZXNjcmliZU1ldGFkYXRhUmVzdWx0LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlcyBwcm9wZXJ0eSBpbmZvcm1hdGlvbiBhYm91dCBtZXRhZGF0YSBjb21wb25lbnRzIGluIHlvdXIgb3JnYW5pemF0aW9uXHJcbiAgICovXHJcbiAgbGlzdChcclxuICAgIHF1ZXJpZXM6IExpc3RNZXRhZGF0YVF1ZXJ5IHwgTGlzdE1ldGFkYXRhUXVlcnlbXSxcclxuICAgIGFzT2ZWZXJzaW9uPzogc3RyaW5nLFxyXG4gICk6IFByb21pc2U8RmlsZVByb3BlcnRpZXNbXT4ge1xyXG4gICAgaWYgKCFhc09mVmVyc2lvbikge1xyXG4gICAgICBhc09mVmVyc2lvbiA9IHRoaXMuX2Nvbm4udmVyc2lvbjtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ2xpc3RNZXRhZGF0YScsIHsgcXVlcmllcywgYXNPZlZlcnNpb24gfSwgW1xyXG4gICAgICBBcGlTY2hlbWFzLkZpbGVQcm9wZXJ0aWVzLFxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHN0YXR1cyBvZiBhc3luY2hyb25vdXMgbWV0YWRhdGEgY2FsbHNcclxuICAgKi9cclxuICBjaGVja1N0YXR1cyhhc3luY1Byb2Nlc3NJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXMgPSB0aGlzLl9pbnZva2UoXHJcbiAgICAgICdjaGVja1N0YXR1cycsXHJcbiAgICAgIHsgYXN5bmNQcm9jZXNzSWQgfSxcclxuICAgICAgQXBpU2NoZW1hcy5Bc3luY1Jlc3VsdCxcclxuICAgICk7XHJcbiAgICByZXR1cm4gbmV3IEFzeW5jUmVzdWx0TG9jYXRvcih0aGlzLCByZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmVzIFhNTCBmaWxlIHJlcHJlc2VudGF0aW9ucyBvZiBjb21wb25lbnRzIGluIGFuIG9yZ2FuaXphdGlvblxyXG4gICAqL1xyXG4gIHJldHJpZXZlKHJlcXVlc3Q6IFBhcnRpYWw8UmV0cmlldmVSZXF1ZXN0Pikge1xyXG4gICAgY29uc3QgcmVzID0gdGhpcy5faW52b2tlKFxyXG4gICAgICAncmV0cmlldmUnLFxyXG4gICAgICB7IHJlcXVlc3QgfSxcclxuICAgICAgQXBpU2NoZW1hcy5SZXRyaWV2ZVJlc3VsdCxcclxuICAgICk7XHJcbiAgICByZXR1cm4gbmV3IFJldHJpZXZlUmVzdWx0TG9jYXRvcih0aGlzLCByZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSBzdGF0dXMgb2YgZGVjbGFyYXRpdmUgbWV0YWRhdGEgY2FsbCByZXRyaWV2ZSgpIGFuZCByZXR1cm5zIHRoZSB6aXAgZmlsZSBjb250ZW50c1xyXG4gICAqL1xyXG4gIGNoZWNrUmV0cmlldmVTdGF0dXMoYXN5bmNQcm9jZXNzSWQ6IHN0cmluZyk6IFByb21pc2U8UmV0cmlldmVSZXN1bHQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXHJcbiAgICAgICdjaGVja1JldHJpZXZlU3RhdHVzJyxcclxuICAgICAgeyBhc3luY1Byb2Nlc3NJZCB9LFxyXG4gICAgICBBcGlTY2hlbWFzLlJldHJpZXZlUmVzdWx0LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcGxveSBjb21wb25lbnRzIGludG8gYW4gb3JnYW5pemF0aW9uIHVzaW5nIHppcHBlZCBmaWxlIHJlcHJlc2VudGF0aW9uc1xyXG4gICAqL1xyXG4gIGRlcGxveShcclxuICAgIHppcElucHV0OiBSZWFkYWJsZSB8IEJ1ZmZlciB8IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFBhcnRpYWw8RGVwbG95T3B0aW9ucz4gPSB7fSxcclxuICApIHtcclxuICAgIGNvbnN0IHJlcyA9IChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHppcENvbnRlbnRCNjQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaXNPYmplY3QoemlwSW5wdXQpICYmXHJcbiAgICAgICAgICAncGlwZScgaW4gemlwSW5wdXQgJiZcclxuICAgICAgICAgIHR5cGVvZiB6aXBJbnB1dC5waXBlID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBidWZzOiBCdWZmZXJbXSA9IFtdO1xyXG4gICAgICAgICAgemlwSW5wdXQub24oJ2RhdGEnLCAoZCkgPT4gYnVmcy5wdXNoKGQpKTtcclxuICAgICAgICAgIHppcElucHV0Lm9uKCdlcnJvcicsIHJlamVjdCk7XHJcbiAgICAgICAgICB6aXBJbnB1dC5vbignZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKEJ1ZmZlci5jb25jYXQoYnVmcykudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gemlwSW5wdXQucmVzdW1lKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh6aXBJbnB1dCBpbnN0YW5jZW9mIEJ1ZmZlcikge1xyXG4gICAgICAgICAgcmVzb2x2ZSh6aXBJbnB1dC50b1N0cmluZygnYmFzZTY0JykpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoemlwSW5wdXQgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIHppcElucHV0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgcmVzb2x2ZSh6aXBJbnB1dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93ICdVbmV4cGVjdGVkIHppcElucHV0IHR5cGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5faW52b2tlKFxyXG4gICAgICAgICdkZXBsb3knLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFppcEZpbGU6IHppcENvbnRlbnRCNjQsXHJcbiAgICAgICAgICBEZXBsb3lPcHRpb25zOiBvcHRpb25zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQXBpU2NoZW1hcy5EZXBsb3lSZXN1bHQsXHJcbiAgICAgICk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgRGVwbG95UmVzdWx0TG9jYXRvcih0aGlzLCByZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSBzdGF0dXMgb2YgZGVjbGFyYXRpdmUgbWV0YWRhdGEgY2FsbCBkZXBsb3koKVxyXG4gICAqL1xyXG4gIGNoZWNrRGVwbG95U3RhdHVzKFxyXG4gICAgYXN5bmNQcm9jZXNzSWQ6IHN0cmluZyxcclxuICAgIGluY2x1ZGVEZXRhaWxzOiBib29sZWFuID0gZmFsc2UsXHJcbiAgKTogUHJvbWlzZTxEZXBsb3lSZXN1bHQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXHJcbiAgICAgICdjaGVja0RlcGxveVN0YXR1cycsXHJcbiAgICAgIHtcclxuICAgICAgICBhc3luY1Byb2Nlc3NJZCxcclxuICAgICAgICBpbmNsdWRlRGV0YWlscyxcclxuICAgICAgfSxcclxuICAgICAgQXBpU2NoZW1hcy5EZXBsb3lSZXN1bHQsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKipcclxuICogVGhlIGxvY2F0b3IgY2xhc3MgZm9yIE1ldGFkYXRhIEFQSSBhc3luY2hyb25vdXMgY2FsbCByZXN1bHRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBc3luY1Jlc3VsdExvY2F0b3I8XHJcbiAgUyBleHRlbmRzIFNjaGVtYSxcclxuICBSIGV4dGVuZHMge30gPSBBc3luY1Jlc3VsdFxyXG4+IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICBfbWV0YTogTWV0YWRhdGFBcGk8Uz47XHJcbiAgX3Byb21pc2U6IFByb21pc2U8QXN5bmNSZXN1bHQ+O1xyXG4gIF9pZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1ldGE6IE1ldGFkYXRhQXBpPFM+LCBwcm9taXNlOiBQcm9taXNlPEFzeW5jUmVzdWx0Pikge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX21ldGEgPSBtZXRhO1xyXG4gICAgdGhpcy5fcHJvbWlzZSA9IHByb21pc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9taXNlL0ErIGludGVyZmFjZVxyXG4gICAqIGh0dHA6Ly9wcm9taXNlcy1hcGx1cy5naXRodWIuaW8vcHJvbWlzZXMtc3BlYy9cclxuICAgKlxyXG4gICAqIEBtZXRob2QgTWV0YWRhdGF+QXN5bmNSZXN1bHRMb2NhdG9yI3RoZW5cclxuICAgKi9cclxuICB0aGVuPFUsIFY+KFxyXG4gICAgb25SZXNvbHZlPzogKChyZXN1bHQ6IEFzeW5jUmVzdWx0KSA9PiBVIHwgUHJvbWlzZTxVPikgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG4gICAgb25SZWplY3Q/OiAoKGVycjogRXJyb3IpID0+IFYgfCBQcm9taXNlPFY+KSB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgKTogUHJvbWlzZTxVIHwgVj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2UudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHRoZSBzdGF0dXMgb2YgYXN5bmMgcmVxdWVzdFxyXG4gICAqL1xyXG4gIGFzeW5jIGNoZWNrKCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcHJvbWlzZTtcclxuICAgIHRoaXMuX2lkID0gcmVzdWx0LmlkO1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX21ldGEuY2hlY2tTdGF0dXMocmVzdWx0LmlkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBvbGxpbmcgdW50aWwgYXN5bmMgY2FsbCBzdGF0dXMgYmVjb21lcyBjb21wbGV0ZSBvciBlcnJvclxyXG4gICAqL1xyXG4gIHBvbGwoaW50ZXJ2YWw6IG51bWJlciwgdGltZW91dDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHBvbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKHN0YXJ0VGltZSArIHRpbWVvdXQgPCBub3cpIHtcclxuICAgICAgICAgIGxldCBlcnJNc2cgPSAnUG9sbGluZyB0aW1lIG91dC4nO1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2lkKSB7XHJcbiAgICAgICAgICAgIGVyck1zZyArPSAnIFByb2Nlc3MgSWQgPSAnICsgdGhpcy5faWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKGVyck1zZykpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNoZWNrKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlJywgcmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcm9ncmVzcycsIHJlc3VsdCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KHBvbGwsIGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgc2V0VGltZW91dChwb2xsLCBpbnRlcnZhbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBhbmQgd2FpdCB1bnRpbCB0aGUgYXN5bmMgcmVxdWVzdHMgYmVjb21lIGluIGNvbXBsZXRlZCBzdGF0dXNcclxuICAgKi9cclxuICBjb21wbGV0ZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMub24oJ2NvbXBsZXRlJywgcmVzb2x2ZSk7XHJcbiAgICAgIHRoaXMub24oJ2Vycm9yJywgcmVqZWN0KTtcclxuICAgICAgdGhpcy5wb2xsKHRoaXMuX21ldGEucG9sbEludGVydmFsLCB0aGlzLl9tZXRhLnBvbGxUaW1lb3V0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qKlxyXG4gKiBUaGUgbG9jYXRvciBjbGFzcyB0byB0cmFjayByZXRyZWl2ZSgpIE1ldGFkYXRhIEFQSSBjYWxsIHJlc3VsdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJldHJpZXZlUmVzdWx0TG9jYXRvcjxTIGV4dGVuZHMgU2NoZW1hPiBleHRlbmRzIEFzeW5jUmVzdWx0TG9jYXRvcjxcclxuICBTLFxyXG4gIFJldHJpZXZlUmVzdWx0XHJcbj4ge1xyXG4gIC8qKlxyXG4gICAqIENoZWNrIGFuZCB3YWl0IHVudGlsIHRoZSBhc3luYyByZXF1ZXN0IGJlY29tZXMgaW4gY29tcGxldGVkIHN0YXR1cyxcclxuICAgKiBhbmQgcmV0cmlldmUgdGhlIHJlc3VsdCBkYXRhLlxyXG4gICAqL1xyXG4gIGFzeW5jIGNvbXBsZXRlKCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwZXIuY29tcGxldGUoKTtcclxuICAgIHJldHVybiB0aGlzLl9tZXRhLmNoZWNrUmV0cmlldmVTdGF0dXMocmVzdWx0LmlkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZSB0aGUgcmV0cmlldmVkIHJlc3VsdCB0byBOb2RlLmpzIHJlYWRhYmxlIHN0cmVhbVxyXG4gICAqL1xyXG4gIHN0cmVhbSgpIHtcclxuICAgIGNvbnN0IHJlc3VsdFN0cmVhbSA9IG5ldyBSZWFkYWJsZSgpO1xyXG4gICAgbGV0IHJlYWRpbmcgPSBmYWxzZTtcclxuICAgIHJlc3VsdFN0cmVhbS5fcmVhZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHJlYWRpbmcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVhZGluZyA9IHRydWU7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb21wbGV0ZSgpO1xyXG4gICAgICAgIHJlc3VsdFN0cmVhbS5wdXNoKEJ1ZmZlci5mcm9tKHJlc3VsdC56aXBGaWxlLCAnYmFzZTY0JykpO1xyXG4gICAgICAgIHJlc3VsdFN0cmVhbS5wdXNoKG51bGwpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzdWx0U3RyZWFtLmVtaXQoJ2Vycm9yJywgZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcmVzdWx0U3RyZWFtO1xyXG4gIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qKlxyXG4gKiBUaGUgbG9jYXRvciBjbGFzcyB0byB0cmFjayBkZXBsb3koKSBNZXRhZGF0YSBBUEkgY2FsbCByZXN1bHRcclxuICpcclxuICogQHByb3RlY3RlZFxyXG4gKiBAY2xhc3MgTWV0YWRhdGF+RGVwbG95UmVzdWx0TG9jYXRvclxyXG4gKiBAZXh0ZW5kcyBNZXRhZGF0YX5Bc3luY1Jlc3VsdExvY2F0b3JcclxuICogQHBhcmFtIHtNZXRhZGF0YX0gbWV0YSAtIE1ldGFkYXRhIEFQSSBvYmplY3RcclxuICogQHBhcmFtIHtQcm9taXNlLjxNZXRhZGF0YX5Bc3luY1Jlc3VsdD59IHJlc3VsdCAtIFByb21pc2Ugb2JqZWN0IGZvciBhc3luYyByZXN1bHQgb2YgZGVwbG95KCkgY2FsbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERlcGxveVJlc3VsdExvY2F0b3I8UyBleHRlbmRzIFNjaGVtYT4gZXh0ZW5kcyBBc3luY1Jlc3VsdExvY2F0b3I8XHJcbiAgUyxcclxuICBEZXBsb3lSZXN1bHRcclxuPiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgYW5kIHdhaXQgdW50aWwgdGhlIGFzeW5jIHJlcXVlc3QgYmVjb21lcyBpbiBjb21wbGV0ZWQgc3RhdHVzLFxyXG4gICAqIGFuZCByZXRyaWV2ZSB0aGUgcmVzdWx0IGRhdGEuXHJcbiAgICovXHJcbiAgYXN5bmMgY29tcGxldGUoaW5jbHVkZURldGFpbHM/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBlci5jb21wbGV0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuX21ldGEuY2hlY2tEZXBsb3lTdGF0dXMocmVzdWx0LmlkLCBpbmNsdWRlRGV0YWlscyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLypcclxuICogUmVnaXN0ZXIgaG9vayBpbiBjb25uZWN0aW9uIGluc3RhbnRpYXRpb24gZm9yIGR5bmFtaWNhbGx5IGFkZGluZyB0aGlzIEFQSSBtb2R1bGUgZmVhdHVyZXNcclxuICovXHJcbnJlZ2lzdGVyTW9kdWxlKCdtZXRhZGF0YScsIChjb25uKSA9PiBuZXcgTWV0YWRhdGFBcGkoY29ubikpO1xyXG4iXX0=