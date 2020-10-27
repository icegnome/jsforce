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

exports["default"] = main;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _getIteratorMethod2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator-method"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _os = _interopRequireDefault(require("os"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _cli = require("../cli/cli");

var _ = require("..");

var _commander = require("commander");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _symbol["default"] === "undefined" || (0, _getIteratorMethod2["default"])(o) == null) { if ((0, _isArray["default"])(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2["default"])(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context3; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = (0, _slice["default"])(_context3 = Object.prototype.toString.call(o)).call(_context3, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from["default"])(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getCacheFileDir() {
  return _path["default"].join(_os["default"].tmpdir(), 'jsforce-gen-schema-cache');
}

function getCacheFilePath(orgId) {
  return _path["default"].join(getCacheFileDir(), orgId, 'describe.json');
}

function readDescribedCache(_x) {
  return _readDescribedCache.apply(this, arguments);
}

function _readDescribedCache() {
  _readDescribedCache = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(orgId) {
    var cacheFile, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            cacheFile = getCacheFilePath(orgId);
            _context.next = 4;
            return _fsExtra["default"].readFile(cacheFile, 'utf8');

          case 4:
            data = _context.sent;
            return _context.abrupt("return", JSON.parse(data));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", null);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _readDescribedCache.apply(this, arguments);
}

function loadDescribeResult(_x2, _x3, _x4) {
  return _loadDescribeResult.apply(this, arguments);
}

function _loadDescribeResult() {
  _loadDescribeResult = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(conn, orgId, cache) {
    var _yield$conn$describeG, sos, sobjects, _iterator2, _step2, name, so, cacheFile;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.info('describing global');
            _context2.next = 3;
            return conn.describeGlobal();

          case 3:
            _yield$conn$describeG = _context2.sent;
            sos = _yield$conn$describeG.sobjects;
            sobjects = [];
            _iterator2 = _createForOfIteratorHelper(sos);
            _context2.prev = 7;

            _iterator2.s();

          case 9:
            if ((_step2 = _iterator2.n()).done) {
              _context2.next = 18;
              break;
            }

            name = _step2.value.name;
            console.info('describing ' + name);
            _context2.next = 14;
            return conn.describe(name);

          case 14:
            so = _context2.sent;
            sobjects.push(so);

          case 16:
            _context2.next = 9;
            break;

          case 18:
            _context2.next = 23;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](7);

            _iterator2.e(_context2.t0);

          case 23:
            _context2.prev = 23;

            _iterator2.f();

            return _context2.finish(23);

          case 26:
            if (!cache) {
              _context2.next = 30;
              break;
            }

            cacheFile = getCacheFilePath(orgId);
            _context2.next = 30;
            return _fsExtra["default"].outputFile(cacheFile, (0, _stringify["default"])(sobjects, null, 2), 'utf8');

          case 30:
            return _context2.abrupt("return", sobjects);

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 20, 23, 26]]);
  }));
  return _loadDescribeResult.apply(this, arguments);
}

function getParentReferences(sobject) {
  var parentReferences = [];

  var _iterator = _createForOfIteratorHelper(sobject.fields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          type = _step$value.type,
          nillable = _step$value.nillable,
          relationshipName = _step$value.relationshipName,
          referenceTo = _step$value.referenceTo;

      if (type === 'reference' && relationshipName && referenceTo && referenceTo.length > 0) {
        var parentSObject = referenceTo.length > 1 ? 'Name' : referenceTo[0];
        parentReferences.push({
          nillable: nillable,
          parentSObject: parentSObject,
          relationshipName: relationshipName
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return parentReferences;
}

function getTSTypeString(type) {
  return type === 'double' || type === 'int' || type === 'currency' || type === 'percent' ? 'number' : type === 'boolean' ? 'boolean' : type === 'date' || type === 'datetime' || type === 'time' ? 'DateString' : type === 'base64' ? 'BlobString' : type === 'address' ? 'Address' : type === 'complexvalue' ? 'any' : 'string';
}

function dumpSchema(_x5, _x6, _x7, _x8, _x9) {
  return _dumpSchema.apply(this, arguments);
}

function _dumpSchema() {
  _dumpSchema = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(conn, orgId, outputFile, schemaName, cache) {
    var sobjects, out;
    return _regenerator["default"].wrap(function _callee3$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            if (!cache) {
              _context15.next = 6;
              break;
            }

            _context15.next = 3;
            return readDescribedCache(orgId);

          case 3:
            _context15.t1 = _context15.sent;
            _context15.next = 7;
            break;

          case 6:
            _context15.t1 = null;

          case 7:
            _context15.t0 = _context15.t1;

            if (_context15.t0) {
              _context15.next = 12;
              break;
            }

            _context15.next = 11;
            return loadDescribeResult(conn, orgId, cache);

          case 11:
            _context15.t0 = _context15.sent;

          case 12:
            sobjects = _context15.t0;
            _context15.next = 15;
            return _fsExtra["default"].ensureFile(outputFile);

          case 15:
            out = _fsExtra["default"].createWriteStream(outputFile, 'utf8');
            return _context15.abrupt("return", new _promise["default"](function (resolve, reject) {
              out.on('error', function (err) {
                return reject(err);
              });
              out.on('finish', resolve);

              var writeLine = function writeLine(message) {
                return out.write(message + '\n');
              };

              writeLine("import { Schema, SObjectDefinition, DateString, BlobString, Address } from 'jsforce';");
              writeLine('');

              var _iterator3 = _createForOfIteratorHelper(sobjects),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _context4, _context5, _context6, _context7, _context8;

                  var sobject = _step3.value;
                  var name = sobject.name,
                      fields = sobject.fields,
                      childRelationships = sobject.childRelationships;
                  writeLine("type Fields$".concat(name, " = {"));
                  writeLine('  //');

                  var _iterator5 = _createForOfIteratorHelper(fields),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _context9, _context10;

                      var _step5$value = _step5.value,
                          _name = _step5$value.name,
                          type = _step5$value.type,
                          nillable = _step5$value.nillable;
                      var tsType = getTSTypeString(type);
                      var orNull = nillable ? ' | null' : '';
                      writeLine((0, _concat["default"])(_context9 = (0, _concat["default"])(_context10 = "  ".concat(_name, ": ")).call(_context10, tsType)).call(_context9, orNull, ";"));
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }

                  writeLine('};');
                  writeLine('');
                  writeLine("type ParentReferences$".concat(name, " = {"));
                  writeLine('  //');
                  var parentReferences = getParentReferences(sobject);

                  var _iterator6 = _createForOfIteratorHelper(parentReferences),
                      _step6;

                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                      var _context11, _context12;

                      var _step6$value = _step6.value,
                          _nillable = _step6$value.nillable,
                          parentSObject = _step6$value.parentSObject,
                          relationshipName = _step6$value.relationshipName;

                      var _orNull = _nillable ? ' | null' : '';

                      writeLine((0, _concat["default"])(_context11 = (0, _concat["default"])(_context12 = "  ".concat(relationshipName, ": SObjectDefinition$")).call(_context12, parentSObject)).call(_context11, _orNull, ";"));
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }

                  writeLine('};');
                  writeLine('');
                  writeLine("type ChildRelationships$".concat(name, " = {"));
                  writeLine('  //');

                  var _iterator7 = _createForOfIteratorHelper(childRelationships),
                      _step7;

                  try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                      var _step7$value = _step7.value,
                          field = _step7$value.field,
                          childSObject = _step7$value.childSObject,
                          _relationshipName = _step7$value.relationshipName;

                      if (field && childSObject && _relationshipName && !/__c$/.test(field)) {
                        var _context13;

                        writeLine((0, _concat["default"])(_context13 = "  ".concat(_relationshipName, ": SObjectDefinition$")).call(_context13, childSObject, ";"));
                      }
                    }
                  } catch (err) {
                    _iterator7.e(err);
                  } finally {
                    _iterator7.f();
                  }

                  writeLine('};');
                  writeLine('');
                  writeLine((0, _concat["default"])(_context4 = (0, _concat["default"])(_context5 = (0, _concat["default"])(_context6 = (0, _concat["default"])(_context7 = (0, _concat["default"])(_context8 = "interface SObjectDefinition$".concat(name, " extends SObjectDefinition<'")).call(_context8, name, "'> {\n    Name: '")).call(_context7, name, "';\n    Fields: Fields$")).call(_context6, name, ";\n    ParentReferences: ParentReferences$")).call(_context5, name, ";\n    ChildRelationships: ChildRelationships$")).call(_context4, name, ";\n  }"));
                  writeLine('');
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              writeLine('');
              writeLine("export interface ".concat(schemaName, " extends Schema {"));
              writeLine('  SObjects: {');

              var _iterator4 = _createForOfIteratorHelper(sobjects),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _context14;

                  var _name2 = _step4.value.name;
                  writeLine((0, _concat["default"])(_context14 = "    ".concat(_name2, ": SObjectDefinition$")).call(_context14, _name2, ";"));
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              writeLine('  };');
              writeLine('}');
              out.end();
            }));

          case 17:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee3);
  }));
  return _dumpSchema.apply(this, arguments);
}

/**
 *
 */
function readCommand() {
  return new _commander.Command().option('-u, --username [username]', 'Salesforce username').option('-p, --password [password]', 'Salesforce password (and security token, if available)').option('-c, --connection [connection]', 'Connection name stored in connection registry').option('-l, --loginUrl [loginUrl]', 'Salesforce login url').option('-n, --schemaName [schemaName]', 'Name of schema type', 'MySchema').requiredOption('-o, --outputFile <outputFile>', 'Generated schema file path', './schema.d.ts').option('--sandbox', 'Login to Salesforce sandbox').option('--no-cache', 'Do not generate cache file for described result in tmp directory').option('--clearCache', 'Clear all existing described cache files').version(_.VERSION).parse(process.argv);
}
/**
 *
 */


function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var program, cli, conn;
    return _regenerator["default"].wrap(function _callee4$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            program = readCommand();
            cli = new _cli.Cli();
            _context16.next = 4;
            return cli.connect(program);

          case 4:
            conn = cli.getCurrentConnection();

            if (conn.userInfo) {
              _context16.next = 8;
              break;
            }

            console.error('Cannot connect to Salesforce');
            return _context16.abrupt("return");

          case 8:
            _context16.next = 10;
            return dumpSchema(conn, conn.userInfo.organizationId, program.outputFile, program.schemaName, program.cache);

          case 10:
            if (!program.clearCache) {
              _context16.next = 14;
              break;
            }

            console.log('removing cache files');
            _context16.next = 14;
            return _fsExtra["default"].remove(getCacheFileDir());

          case 14:
            console.log("Dumped to: ".concat(program.outputFile));

          case 15:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee4);
  }));
  return _main.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWEvZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbImdldENhY2hlRmlsZURpciIsInBhdGgiLCJqb2luIiwib3MiLCJ0bXBkaXIiLCJnZXRDYWNoZUZpbGVQYXRoIiwib3JnSWQiLCJyZWFkRGVzY3JpYmVkQ2FjaGUiLCJjYWNoZUZpbGUiLCJmcyIsInJlYWRGaWxlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImxvYWREZXNjcmliZVJlc3VsdCIsImNvbm4iLCJjYWNoZSIsImNvbnNvbGUiLCJpbmZvIiwiZGVzY3JpYmVHbG9iYWwiLCJzb3MiLCJzb2JqZWN0cyIsIm5hbWUiLCJkZXNjcmliZSIsInNvIiwicHVzaCIsIm91dHB1dEZpbGUiLCJnZXRQYXJlbnRSZWZlcmVuY2VzIiwic29iamVjdCIsInBhcmVudFJlZmVyZW5jZXMiLCJmaWVsZHMiLCJ0eXBlIiwibmlsbGFibGUiLCJyZWxhdGlvbnNoaXBOYW1lIiwicmVmZXJlbmNlVG8iLCJsZW5ndGgiLCJwYXJlbnRTT2JqZWN0IiwiZ2V0VFNUeXBlU3RyaW5nIiwiZHVtcFNjaGVtYSIsInNjaGVtYU5hbWUiLCJlbnN1cmVGaWxlIiwib3V0IiwiY3JlYXRlV3JpdGVTdHJlYW0iLCJyZXNvbHZlIiwicmVqZWN0Iiwib24iLCJlcnIiLCJ3cml0ZUxpbmUiLCJtZXNzYWdlIiwid3JpdGUiLCJjaGlsZFJlbGF0aW9uc2hpcHMiLCJ0c1R5cGUiLCJvck51bGwiLCJmaWVsZCIsImNoaWxkU09iamVjdCIsInRlc3QiLCJlbmQiLCJyZWFkQ29tbWFuZCIsIkNvbW1hbmQiLCJvcHRpb24iLCJyZXF1aXJlZE9wdGlvbiIsInZlcnNpb24iLCJWRVJTSU9OIiwicHJvY2VzcyIsImFyZ3YiLCJtYWluIiwicHJvZ3JhbSIsImNsaSIsIkNsaSIsImNvbm5lY3QiLCJnZXRDdXJyZW50Q29ubmVjdGlvbiIsInVzZXJJbmZvIiwiZXJyb3IiLCJvcmdhbml6YXRpb25JZCIsImNsZWFyQ2FjaGUiLCJsb2ciLCJy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QU1YdEQsWUFBQUEsT0FBTyxDQUFDdUQsS0FBUixDQUFjLDhCQUFkO0FBTlc7O0FBQUE7QUFBQTtBQUFBLG1CQVNQbEMsVUFBVSxDQUNkdkIsSUFEYyxFQUVkQSxJQUFJLENBQUN3RCxRQUFMLENBQWNFLGNBRkEsRUFHZFAsT0FBTyxDQUFDeEMsVUFITSxFQUlkd0MsT0FBTyxDQUFDM0IsVUFKTSxFQUtkMkIsT0FBTyxDQUFDbEQsS0FMTSxDQVRIOztBQUFBO0FBQUEsaUJBZ0JUa0QsT0FBTyxDQUFDUSxVQWhCQztBQUFBO0FBQUE7QUFBQTs7QUFpQlh6RCxZQUFBQSxPQUFPLENBQUMwRCxHQUFSLENBQVksc0JBQVo7QUFqQlc7QUFBQSxtQkFrQkxsRSxvQkFBR21FLE1BQUgsQ0FBVTVFLGVBQWUsRUFBekIsQ0FsQks7O0FBQUE7QUFvQmJpQixZQUFBQSxPQUFPLENBQUMwRCxHQUFSLHNCQUEwQlQsT0FBTyxDQUFDeEMsVUFBbEM7O0FBcEJhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb3MgZnJvbSAnb3MnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgRGVzY3JpYmVTT2JqZWN0UmVzdWx0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBDbGkgfSBmcm9tICcuLi9jbGkvY2xpJztcclxuaW1wb3J0IHsgQ29ubmVjdGlvbiwgVkVSU0lPTiB9IGZyb20gJy4uJztcclxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2NvbW1hbmRlcic7XHJcblxyXG50eXBlIFVud3JhcFByb21pc2U8VD4gPSBUIGV4dGVuZHMgUHJvbWlzZTxpbmZlciBVPiA/IFUgOiBuZXZlcjtcclxuXHJcbmZ1bmN0aW9uIGdldENhY2hlRmlsZURpcigpIHtcclxuICByZXR1cm4gcGF0aC5qb2luKG9zLnRtcGRpcigpLCAnanNmb3JjZS1nZW4tc2NoZW1hLWNhY2hlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENhY2hlRmlsZVBhdGgob3JnSWQ6IHN0cmluZykge1xyXG4gIHJldHVybiBwYXRoLmpvaW4oZ2V0Q2FjaGVGaWxlRGlyKCksIG9yZ0lkLCAnZGVzY3JpYmUuanNvbicpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZWFkRGVzY3JpYmVkQ2FjaGUoXHJcbiAgb3JnSWQ6IHN0cmluZyxcclxuKTogUHJvbWlzZTxVbndyYXBQcm9taXNlPFJldHVyblR5cGU8dHlwZW9mIGxvYWREZXNjcmliZVJlc3VsdD4+IHwgbnVsbD4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYWNoZUZpbGUgPSBnZXRDYWNoZUZpbGVQYXRoKG9yZ0lkKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShjYWNoZUZpbGUsICd1dGY4Jyk7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWREZXNjcmliZVJlc3VsdChcclxuICBjb25uOiBDb25uZWN0aW9uLFxyXG4gIG9yZ0lkOiBzdHJpbmcsXHJcbiAgY2FjaGU/OiBib29sZWFuLFxyXG4pIHtcclxuICBjb25zb2xlLmluZm8oJ2Rlc2NyaWJpbmcgZ2xvYmFsJyk7XHJcbiAgY29uc3QgeyBzb2JqZWN0czogc29zIH0gPSBhd2FpdCBjb25uLmRlc2NyaWJlR2xvYmFsKCk7XHJcbiAgY29uc3Qgc29iamVjdHMgPSBbXTtcclxuICBmb3IgKGNvbnN0IHsgbmFtZSB9IG9mIHNvcykge1xyXG4gICAgY29uc29sZS5pbmZvKCdkZXNjcmliaW5nICcgKyBuYW1lKTtcclxuICAgIGNvbnN0IHNvID0gYXdhaXQgY29ubi5kZXNjcmliZShuYW1lKTtcclxuICAgIHNvYmplY3RzLnB1c2goc28pO1xyXG4gIH1cclxuICBpZiAoY2FjaGUpIHtcclxuICAgIGNvbnN0IGNhY2hlRmlsZSA9IGdldENhY2hlRmlsZVBhdGgob3JnSWQpO1xyXG4gICAgYXdhaXQgZnMub3V0cHV0RmlsZShjYWNoZUZpbGUsIEpTT04uc3RyaW5naWZ5KHNvYmplY3RzLCBudWxsLCAyKSwgJ3V0ZjgnKTtcclxuICB9XHJcbiAgcmV0dXJuIHNvYmplY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnRSZWZlcmVuY2VzKHNvYmplY3Q6IERlc2NyaWJlU09iamVjdFJlc3VsdCkge1xyXG4gIGNvbnN0IHBhcmVudFJlZmVyZW5jZXMgPSBbXTtcclxuICBmb3IgKGNvbnN0IHtcclxuICAgIHR5cGUsXHJcbiAgICBuaWxsYWJsZSxcclxuICAgIHJlbGF0aW9uc2hpcE5hbWUsXHJcbiAgICByZWZlcmVuY2VUbyxcclxuICB9IG9mIHNvYmplY3QuZmllbGRzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGUgPT09ICdyZWZlcmVuY2UnICYmXHJcbiAgICAgIHJlbGF0aW9uc2hpcE5hbWUgJiZcclxuICAgICAgcmVmZXJlbmNlVG8gJiZcclxuICAgICAgcmVmZXJlbmNlVG8ubGVuZ3RoID4gMFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHBhcmVudFNPYmplY3QgPSByZWZlcmVuY2VUby5sZW5ndGggPiAxID8gJ05hbWUnIDogcmVmZXJlbmNlVG9bMF07XHJcbiAgICAgIHBhcmVudFJlZmVyZW5jZXMucHVzaCh7IG5pbGxhYmxlLCBwYXJlbnRTT2JqZWN0LCByZWxhdGlvbnNoaXBOYW1lIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFyZW50UmVmZXJlbmNlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VFNUeXBlU3RyaW5nKHR5cGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHR5cGUgPT09ICdkb3VibGUnIHx8XHJcbiAgICB0eXBlID09PSAnaW50JyB8fFxyXG4gICAgdHlwZSA9PT0gJ2N1cnJlbmN5JyB8fFxyXG4gICAgdHlwZSA9PT0gJ3BlcmNlbnQnXHJcbiAgICA/ICdudW1iZXInXHJcbiAgICA6IHR5cGUgPT09ICdib29sZWFuJ1xyXG4gICAgPyAnYm9vbGVhbidcclxuICAgIDogdHlwZSA9PT0gJ2RhdGUnIHx8IHR5cGUgPT09ICdkYXRldGltZScgfHwgdHlwZSA9PT0gJ3RpbWUnXHJcbiAgICA/ICdEYXRlU3RyaW5nJ1xyXG4gICAgOiB0eXBlID09PSAnYmFzZTY0J1xyXG4gICAgPyAnQmxvYlN0cmluZydcclxuICAgIDogdHlwZSA9PT0gJ2FkZHJlc3MnXHJcbiAgICA/ICdBZGRyZXNzJ1xyXG4gICAgOiB0eXBlID09PSAnY29tcGxleHZhbHVlJ1xyXG4gICAgPyAnYW55J1xyXG4gICAgOiAnc3RyaW5nJztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZHVtcFNjaGVtYShcclxuICBjb25uOiBDb25uZWN0aW9uLFxyXG4gIG9yZ0lkOiBzdHJpbmcsXHJcbiAgb3V0cHV0RmlsZTogc3RyaW5nLFxyXG4gIHNjaGVtYU5hbWU6IHN0cmluZyxcclxuICBjYWNoZT86IGJvb2xlYW4sXHJcbikge1xyXG4gIGNvbnN0IHNvYmplY3RzID1cclxuICAgIChjYWNoZSA/IGF3YWl0IHJlYWREZXNjcmliZWRDYWNoZShvcmdJZCkgOiBudWxsKSB8fFxyXG4gICAgKGF3YWl0IGxvYWREZXNjcmliZVJlc3VsdChjb25uLCBvcmdJZCwgY2FjaGUpKTtcclxuICBhd2FpdCBmcy5lbnN1cmVGaWxlKG91dHB1dEZpbGUpO1xyXG4gIGNvbnN0IG91dCA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKG91dHB1dEZpbGUsICd1dGY4Jyk7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIG91dC5vbignZXJyb3InLCAoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICBvdXQub24oJ2ZpbmlzaCcsIHJlc29sdmUpO1xyXG4gICAgY29uc3Qgd3JpdGVMaW5lID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gb3V0LndyaXRlKG1lc3NhZ2UgKyAnXFxuJyk7XHJcbiAgICB3cml0ZUxpbmUoXHJcbiAgICAgIFwiaW1wb3J0IHsgU2NoZW1hLCBTT2JqZWN0RGVmaW5pdGlvbiwgRGF0ZVN0cmluZywgQmxvYlN0cmluZywgQWRkcmVzcyB9IGZyb20gJ2pzZm9yY2UnO1wiLFxyXG4gICAgKTtcclxuICAgIHdyaXRlTGluZSgnJyk7XHJcbiAgICBmb3IgKGNvbnN0IHNvYmplY3Qgb2Ygc29iamVjdHMpIHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBmaWVsZHMsIGNoaWxkUmVsYXRpb25zaGlwcyB9ID0gc29iamVjdDtcclxuICAgICAgd3JpdGVMaW5lKGB0eXBlIEZpZWxkcyQke25hbWV9ID0ge2ApO1xyXG4gICAgICB3cml0ZUxpbmUoJyAgLy8nKTtcclxuICAgICAgZm9yIChjb25zdCB7IG5hbWUsIHR5cGUsIG5pbGxhYmxlIH0gb2YgZmllbGRzKSB7XHJcbiAgICAgICAgY29uc3QgdHNUeXBlID0gZ2V0VFNUeXBlU3RyaW5nKHR5cGUpO1xyXG4gICAgICAgIGNvbnN0IG9yTnVsbCA9IG5pbGxhYmxlID8gJyB8IG51bGwnIDogJyc7XHJcbiAgICAgICAgd3JpdGVMaW5lKGAgICR7bmFtZX06ICR7dHNUeXBlfSR7b3JOdWxsfTtgKTtcclxuICAgICAgfVxyXG4gICAgICB3cml0ZUxpbmUoJ307Jyk7XHJcbiAgICAgIHdyaXRlTGluZSgnJyk7XHJcbiAgICAgIHdyaXRlTGluZShgdHlwZSBQYXJlbnRSZWZlcmVuY2VzJCR7bmFtZX0gPSB7YCk7XHJcbiAgICAgIHdyaXRlTGluZSgnICAvLycpO1xyXG4gICAgICBjb25zdCBwYXJlbnRSZWZlcmVuY2VzID0gZ2V0UGFyZW50UmVmZXJlbmNlcyhzb2JqZWN0KTtcclxuICAgICAgZm9yIChjb25zdCB7XHJcbiAgICAgICAgbmlsbGFibGUsXHJcbiAgICAgICAgcGFyZW50U09iamVjdCxcclxuICAgICAgICByZWxhdGlvbnNoaXBOYW1lLFxyXG4gICAgICB9IG9mIHBhcmVudFJlZmVyZW5jZXMpIHtcclxuICAgICAgICBjb25zdCBvck51bGwgPSBuaWxsYWJsZSA/ICcgfCBudWxsJyA6ICcnO1xyXG4gICAgICAgIHdyaXRlTGluZShcclxuICAgICAgICAgIGAgICR7cmVsYXRpb25zaGlwTmFtZX06IFNPYmplY3REZWZpbml0aW9uJCR7cGFyZW50U09iamVjdH0ke29yTnVsbH07YCxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHdyaXRlTGluZSgnfTsnKTtcclxuICAgICAgd3JpdGVMaW5lKCcnKTtcclxuICAgICAgd3JpdGVMaW5lKGB0eXBlIENoaWxkUmVsYXRpb25zaGlwcyQke25hbWV9ID0ge2ApO1xyXG4gICAgICB3cml0ZUxpbmUoJyAgLy8nKTtcclxuICAgICAgZm9yIChjb25zdCB7XHJcbiAgICAgICAgZmllbGQsXHJcbiAgICAgICAgY2hpbGRTT2JqZWN0LFxyXG4gICAgICAgIHJlbGF0aW9uc2hpcE5hbWUsXHJcbiAgICAgIH0gb2YgY2hpbGRSZWxhdGlvbnNoaXBzKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkICYmIGNoaWxkU09iamVjdCAmJiByZWxhdGlvbnNoaXBOYW1lICYmICEvX19jJC8udGVzdChmaWVsZCkpIHtcclxuICAgICAgICAgIHdyaXRlTGluZShcclxuICAgICAgICAgICAgYCAgJHtyZWxhdGlvbnNoaXBOYW1lfTogU09iamVjdERlZmluaXRpb24kJHtjaGlsZFNPYmplY3R9O2AsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3cml0ZUxpbmUoJ307Jyk7XHJcbiAgICAgIHdyaXRlTGluZSgnJyk7XHJcbiAgICAgIHdyaXRlTGluZShcclxuICAgICAgICBgaW50ZXJmYWNlIFNPYmplY3REZWZpbml0aW9uJCR7bmFtZX0gZXh0ZW5kcyBTT2JqZWN0RGVmaW5pdGlvbjwnJHtuYW1lfSc+IHtcclxuICAgIE5hbWU6ICcke25hbWV9JztcclxuICAgIEZpZWxkczogRmllbGRzJCR7bmFtZX07XHJcbiAgICBQYXJlbnRSZWZlcmVuY2VzOiBQYXJlbnRSZWZlcmVuY2VzJCR7bmFtZX07XHJcbiAgICBDaGlsZFJlbGF0aW9uc2hpcHM6IENoaWxkUmVsYXRpb25zaGlwcyQke25hbWV9O1xyXG4gIH1gLFxyXG4gICAgICApO1xyXG4gICAgICB3cml0ZUxpbmUoJycpO1xyXG4gICAgfVxyXG4gICAgd3JpdGVMaW5lKCcnKTtcclxuICAgIHdyaXRlTGluZShgZXhwb3J0IGludGVyZmFjZSAke3NjaGVtYU5hbWV9IGV4dGVuZHMgU2NoZW1hIHtgKTtcclxuICAgIHdyaXRlTGluZSgnICBTT2JqZWN0czogeycpO1xyXG4gICAgZm9yIChjb25zdCB7IG5hbWUgfSBvZiBzb2JqZWN0cykge1xyXG4gICAgICB3cml0ZUxpbmUoYCAgICAke25hbWV9OiBTT2JqZWN0RGVmaW5pdGlvbiQke25hbWV9O2ApO1xyXG4gICAgfVxyXG4gICAgd3JpdGVMaW5lKCcgIH07Jyk7XHJcbiAgICB3cml0ZUxpbmUoJ30nKTtcclxuICAgIG91dC5lbmQoKTtcclxuICB9KTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEdlbmVyYXRvckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25uZWN0aW9uPzogc3RyaW5nO1xyXG4gIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIGxvZ2luVXJsPzogc3RyaW5nO1xyXG4gIHNhbmRib3g/OiBib29sZWFuO1xyXG4gIG91dHB1dEZpbGU6IHN0cmluZztcclxuICBjYWNoZT86IGJvb2xlYW47XHJcbiAgY2xlYXJDYWNoZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gcmVhZENvbW1hbmQoKTogR2VuZXJhdG9yQ29tbWFuZCB7XHJcbiAgcmV0dXJuIG5ldyBDb21tYW5kKClcclxuICAgIC5vcHRpb24oJy11LCAtLXVzZXJuYW1lIFt1c2VybmFtZV0nLCAnU2FsZXNmb3JjZSB1c2VybmFtZScpXHJcbiAgICAub3B0aW9uKFxyXG4gICAgICAnLXAsIC0tcGFzc3dvcmQgW3Bhc3N3b3JkXScsXHJcbiAgICAgICdTYWxlc2ZvcmNlIHBhc3N3b3JkIChhbmQgc2VjdXJpdHkgdG9rZW4sIGlmIGF2YWlsYWJsZSknLFxyXG4gICAgKVxyXG4gICAgLm9wdGlvbihcclxuICAgICAgJy1jLCAtLWNvbm5lY3Rpb24gW2Nvbm5lY3Rpb25dJyxcclxuICAgICAgJ0Nvbm5lY3Rpb24gbmFtZSBzdG9yZWQgaW4gY29ubmVjdGlvbiByZWdpc3RyeScsXHJcbiAgICApXHJcbiAgICAub3B0aW9uKCctbCwgLS1sb2dpblVybCBbbG9naW5VcmxdJywgJ1NhbGVzZm9yY2UgbG9naW4gdXJsJylcclxuICAgIC5vcHRpb24oJy1uLCAtLXNjaGVtYU5hbWUgW3NjaGVtYU5hbWVdJywgJ05hbWUgb2Ygc2NoZW1hIHR5cGUnLCAnTXlTY2hlbWEnKVxyXG4gICAgLnJlcXVpcmVkT3B0aW9uKFxyXG4gICAgICAnLW8sIC0tb3V0cHV0RmlsZSA8b3V0cHV0RmlsZT4nLFxyXG4gICAgICAnR2VuZXJhdGVkIHNjaGVtYSBmaWxlIHBhdGgnLFxyXG4gICAgICAnLi9zY2hlbWEuZC50cycsXHJcbiAgICApXHJcbiAgICAub3B0aW9uKCctLXNhbmRib3gnLCAnTG9naW4gdG8gU2FsZXNmb3JjZSBzYW5kYm94JylcclxuICAgIC5vcHRpb24oXHJcbiAgICAgICctLW5vLWNhY2hlJyxcclxuICAgICAgJ0RvIG5vdCBnZW5lcmF0ZSBjYWNoZSBmaWxlIGZvciBkZXNjcmliZWQgcmVzdWx0IGluIHRtcCBkaXJlY3RvcnknLFxyXG4gICAgKVxyXG4gICAgLm9wdGlvbignLS1jbGVhckNhY2hlJywgJ0NsZWFyIGFsbCBleGlzdGluZyBkZXNjcmliZWQgY2FjaGUgZmlsZXMnKVxyXG4gICAgLnZlcnNpb24oVkVSU0lPTilcclxuICAgIC5wYXJzZShwcm9jZXNzLmFyZ3YpIGFzIEdlbmVyYXRvckNvbW1hbmQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuICBjb25zdCBwcm9ncmFtID0gcmVhZENvbW1hbmQoKTtcclxuICBjb25zdCBjbGkgPSBuZXcgQ2xpKCk7XHJcbiAgYXdhaXQgY2xpLmNvbm5lY3QocHJvZ3JhbSk7XHJcbiAgY29uc3QgY29ubiA9IGNsaS5nZXRDdXJyZW50Q29ubmVjdGlvbigpO1xyXG4gIGlmICghY29ubi51c2VySW5mbykge1xyXG4gICAgY29uc29sZS5lcnJvcignQ2Fubm90IGNvbm5lY3QgdG8gU2FsZXNmb3JjZScpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBhd2FpdCBkdW1wU2NoZW1hKFxyXG4gICAgY29ubixcclxuICAgIGNvbm4udXNlckluZm8ub3JnYW5pemF0aW9uSWQsXHJcbiAgICBwcm9ncmFtLm91dHB1dEZpbGUsXHJcbiAgICBwcm9ncmFtLnNjaGVtYU5hbWUsXHJcbiAgICBwcm9ncmFtLmNhY2hlLFxyXG4gICk7XHJcbiAgaWYgKHByb2dyYW0uY2xlYXJDYWNoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ3JlbW92aW5nIGNhY2hlIGZpbGVzJyk7XHJcbiAgICBhd2FpdCBmcy5yZW1vdmUoZ2V0Q2FjaGVGaWxlRGlyKCkpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhgRHVtcGVkIHRvOiAke3Byb2dyYW0ub3V0cHV0RmlsZX1gKTtcclxufVxyXG4iXX0=