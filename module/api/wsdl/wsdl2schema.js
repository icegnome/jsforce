"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _getIteratorMethod2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator-method"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _xml2js = _interopRequireDefault(require("xml2js"));

var _soap = require("../../soap");

var _function = require("../../util/function");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _symbol["default"] === "undefined" || (0, _getIteratorMethod2["default"])(o) == null) { if ((0, _isArray["default"])(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2["default"])(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = (0, _slice["default"])(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from["default"])(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 */
var WSDLRestrictionSchema = {
  $: {
    base: 'string'
  },
  enumeration: [{
    $: {
      value: 'string'
    }
  }],
  'xsd:enumeration': [{
    $: {
      value: 'string'
    }
  }]
};
var WSDLSimpleTypeSchema = {
  $: {
    name: 'string'
  },
  restriction: WSDLRestrictionSchema,
  'xsd:restriction': WSDLRestrictionSchema
};
var WSDLElementSchema = {
  $: {
    name: 'string',
    type: 'string',
    minOccurs: '?number',
    maxOccurs: '?string',
    nillable: '?boolean'
  }
};
var WSDLSequenceSchema = {
  element: ['?', WSDLElementSchema],
  'xsd:element': ['?', WSDLElementSchema]
};
var WSDLExtensionSchema = {
  $: {
    base: 'string'
  },
  sequence: {
    '?': WSDLSequenceSchema
  },
  'xsd:sequence': {
    '?': WSDLSequenceSchema
  }
};
var WSDLComplexContentSchema = {
  extension: {
    '?': WSDLExtensionSchema
  },
  'xsd:extension': {
    '?': WSDLExtensionSchema
  }
};
var WSDLComplexTypeSchema = {
  $: {
    name: 'string'
  },
  sequence: {
    '?': WSDLSequenceSchema
  },
  'xsd:sequence': {
    '?': WSDLSequenceSchema
  },
  complexContent: {
    '?': WSDLComplexContentSchema
  },
  'xsd:complexContent': {
    '?': WSDLComplexContentSchema
  }
};
var WSDLSchemaSchema = {
  $: 'any',
  complexType: ['?', 'any'],
  simpleType: ['?', 'any'],
  'xsd:complexType': ['?', 'any'],
  'xsd:simpleType': ['?', 'any']
};
var WSDLSchema = {
  definitions: {
    $: 'any',
    types: {
      schema: ['?', WSDLSchemaSchema],
      'xsd:schema': ['?', WSDLSchemaSchema]
    },
    message: ['any'],
    portType: {
      $: 'any',
      operation: ['any']
    },
    binding: {
      $: 'any',
      operation: ['any']
    },
    service: {
      $: 'any',
      documentation: 'string',
      operation: ['any']
    }
  }
};
/**
 *
 */

/**
 *
 */
function toJsType(xsdType, simpleTypes) {
  switch (xsdType) {
    case 'xsd:boolean':
      return 'boolean';

    case 'xsd:string':
    case 'xsd:date':
    case 'xsd:dateTime':
    case 'xsd:time':
    case 'xsd:base64Binary':
      return 'string';

    case 'xsd:int':
    case 'xsd:long':
    case 'xsd:double':
      return 'number';

    case 'xsd:anyType':
      return 'any';

    default:
      {
        var _xsdType$split = xsdType.split(':'),
            _xsdType$split2 = (0, _slicedToArray2["default"])(_xsdType$split, 2),
            ns = _xsdType$split2[0],
            _type = _xsdType$split2[1];

        if (simpleTypes[_type]) {
          return simpleTypes[_type];
        }

        if (ns) {
          return _type;
        }

        return xsdType;
      }
  }
}
/**
 *
 */


function readWSDLFile(_x) {
  return _readWSDLFile.apply(this, arguments);
}
/**
 *
 */


function _readWSDLFile() {
  _readWSDLFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(filePath) {
    var xmlData, json;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _fsExtra["default"].readFile(filePath, 'utf8');

          case 2:
            xmlData = _context.sent;
            _context.next = 5;
            return _xml2js["default"].parseStringPromise(xmlData, {
              explicitArray: false
            });

          case 5:
            json = _context.sent;
            return _context.abrupt("return", (0, _soap.castTypeUsingSchema)(json, WSDLSchema));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _readWSDLFile.apply(this, arguments);
}

function getTypeInfo(el, simpleTypes) {
  var type = toJsType(el.$.type, simpleTypes);
  var isArray = el.$.maxOccurs === 'unbounded';
  var nillable = !isArray && el.$.minOccurs === 0 || el.$.nillable;
  return isArray ? nillable ? ['?', type] : [type] : nillable ? "?".concat(type) : type;
}
/**
 *
 */


function extractComplexTypes(wsdl) {
  var _ref, _types$schema, _ref3, _types$schema2;

  console.log(wsdl.definitions.types['xsd:schema']);
  var schemas = {};
  var simpleTypes = {};
  var types = wsdl.definitions.types;

  var _iterator = _createForOfIteratorHelper((_ref = (_types$schema = types.schema) !== null && _types$schema !== void 0 ? _types$schema : types['xsd:schema']) !== null && _ref !== void 0 ? _ref : []),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ref2, _sc$simpleType;

      var sc = _step.value;

      var _iterator3 = _createForOfIteratorHelper((_ref2 = (_sc$simpleType = sc.simpleType) !== null && _sc$simpleType !== void 0 ? _sc$simpleType : sc['xsd:simpleType']) !== null && _ref2 !== void 0 ? _ref2 : []),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _simpleType$restricti;

          var st = _step3.value;
          var simpleType = (0, _soap.castTypeUsingSchema)(st, WSDLSimpleTypeSchema);
          var rs = (_simpleType$restricti = simpleType.restriction) !== null && _simpleType$restricti !== void 0 ? _simpleType$restricti : simpleType['xsd:restriction'];
          var base = rs.$.base.split(':')[1];
          simpleTypes[simpleType.$.name] = base;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  console.log({
    simpleTypes: simpleTypes
  });

  var _iterator2 = _createForOfIteratorHelper((_ref3 = (_types$schema2 = types.schema) !== null && _types$schema2 !== void 0 ? _types$schema2 : types['xsd:schema']) !== null && _ref3 !== void 0 ? _ref3 : []),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _ref4, _sc$complexType;

      var _sc = _step2.value;

      var _iterator4 = _createForOfIteratorHelper((_ref4 = (_sc$complexType = _sc.complexType) !== null && _sc$complexType !== void 0 ? _sc$complexType : _sc['xsd:complexType']) !== null && _ref4 !== void 0 ? _ref4 : []),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _complexType$sequence, _seq$element, _complexType$complexC;

          var ct = _step4.value;
          var complexType = (0, _soap.castTypeUsingSchema)(ct, WSDLComplexTypeSchema);
          var schema = {
            type: complexType.$.name,
            props: {}
          };
          var seq = (_complexType$sequence = complexType.sequence) !== null && _complexType$sequence !== void 0 ? _complexType$sequence : complexType['xsd:sequence'];
          var els = (_seq$element = seq === null || seq === void 0 ? void 0 : seq.element) !== null && _seq$element !== void 0 ? _seq$element : seq === null || seq === void 0 ? void 0 : seq['xsd:element'];

          var _iterator5 = _createForOfIteratorHelper(els !== null && els !== void 0 ? els : []),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _el = _step5.value;
              schema.props[_el.$.name] = getTypeInfo(_el, simpleTypes);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          var cc = (_complexType$complexC = complexType.complexContent) !== null && _complexType$complexC !== void 0 ? _complexType$complexC : complexType['xsd:complexContent'];

          if (cc) {
            var _cc$extension;

            var extension = (_cc$extension = cc.extension) !== null && _cc$extension !== void 0 ? _cc$extension : cc['xsd:extension'];

            if (extension) {
              var _extension$sequence, _seq$element2;

              schema["extends"] = extension.$.base.split(':')[1];

              var _seq = (_extension$sequence = extension.sequence) !== null && _extension$sequence !== void 0 ? _extension$sequence : extension['xsd:sequence'];

              var _els = (_seq$element2 = _seq === null || _seq === void 0 ? void 0 : _seq.element) !== null && _seq$element2 !== void 0 ? _seq$element2 : _seq === null || _seq === void 0 ? void 0 : _seq['xsd:element'];

              var _iterator6 = _createForOfIteratorHelper(_els !== null && _els !== void 0 ? _els : []),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var el = _step6.value;
                  schema.props[el.$.name] = getTypeInfo(el, simpleTypes);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }

          schemas[complexType.$.name] = schema;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return schemas;
}
/**
 *
 */


var GENERATED_MESSAGE_COMMENT = "/**\n * This file is generated from WSDL file by wsdl2schema.ts.\n * Do not modify directly.\n * To generate the file, run \"ts-node path/to/wsdl2schema.ts path/to/wsdl.xml path/to/schema.ts\"\n */\n";
/**
 *
 */

function dumpSchema(_x2, _x3) {
  return _dumpSchema.apply(this, arguments);
}
/**
 *
 */


function _dumpSchema() {
  _dumpSchema = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(schemas, outFile) {
    var out, print, println, writeSchema, writeTypeDef, writeTypeDefs;
    return _regenerator["default"].wrap(function _callee2$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            writeTypeDefs = function _writeTypeDefs(schemas) {
              for (var _i2 = 0, _Object$keys3 = (0, _keys["default"])(schemas); _i2 < _Object$keys3.length; _i2++) {
                var _name2 = _Object$keys3[_i2];
                var schema = schemas[_name2];
                print("export type ".concat(_name2, " = "));
                writeTypeDef(schema, schemas);
                println(';');
                println();
              }

              println('export type ApiSchemaTypes = {');

              for (var _i3 = 0, _Object$keys4 = (0, _keys["default"])(schemas); _i3 < _Object$keys4.length; _i3++) {
                var _context4;

                var _name3 = _Object$keys4[_i3];
                println((0, _concat["default"])(_context4 = "".concat(_name3, ": ")).call(_context4, _name3, ";"), 2);
              }

              println('};');
            };

            writeTypeDef = function _writeTypeDef(o, schemas) {
              var indent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

              if (typeof o === 'string') {
                print(o);
              } else if ((0, _function.isMapObject)(o)) {
                if ('type' in o && 'props' in o) {
                  if ('extends' in o && typeof o["extends"] === 'string') {
                    print("".concat(o["extends"], " & "));
                  }

                  writeTypeDef(o.props, schemas, indent);
                  return;
                }

                var keys = (0, _keys["default"])(o);

                if (keys.length > 0) {
                  println('{');

                  for (var _i = 0, _Object$keys2 = (0, _keys["default"])(o); _i < _Object$keys2.length; _i++) {
                    var _context3;

                    var prop = _Object$keys2[_i];
                    var value = o[prop];
                    var nillable = false;
                    var isArray = false;

                    if ((0, _isArray["default"])(value)) {
                      isArray = true;
                      var len = value.length;

                      if (len === 2 && value[0] === '?') {
                        nillable = true;
                        value = value[1];
                      } else {
                        value = value[0];
                      }
                    } else if ((0, _function.isMapObject)(value)) {
                      if ('?' in value) {
                        nillable = true;
                        value = value['?'];
                      }
                    }

                    if (typeof value === 'string' && value[0] === '?') {
                      nillable = true;
                      value = value.substring(1);
                    }

                    print((0, _concat["default"])(_context3 = "".concat(prop)).call(_context3, nillable ? '?' : '', ": "), indent + 2);
                    writeTypeDef(value, schemas, indent + 2);

                    if (isArray) {
                      print('[]');
                    }

                    if (nillable) {
                      print(' | null | undefined');
                    }

                    println(';');
                  }

                  print('}', indent);
                } else {
                  print('{}');
                }
              }
            };

            writeSchema = function _writeSchema(o) {
              var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

              if (indent > 20) {
                print("'any'");
                return;
              }

              if ((0, _isArray["default"])(o)) {
                print('[');
                var i = 0;

                var _iterator7 = _createForOfIteratorHelper(o),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var co = _step7.value;

                    if (i > 0) {
                      print(', ');
                    }

                    writeSchema(co, indent);
                    i++;
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }

                print(']');
              } else if ((0, _function.isMapObject)(o)) {
                var keys = (0, _keys["default"])(o);

                if (keys.length > 0) {
                  println('{');

                  var _iterator8 = _createForOfIteratorHelper(keys),
                      _step8;

                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var _name = _step8.value;
                      var _co = o[_name];
                      var nameId = /^[\w_$]+$/.test(_name) ? _name : "'".concat(_name, "'");
                      print("".concat(nameId, ": "), indent + 2);
                      writeSchema(_co, indent + 2);
                      println(',');
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }

                  print('}', indent);
                } else {
                  print('{}');
                }
              } else {
                print((0, _stringify["default"])(o).replace(/"/g, "'"));
              }
            };

            out = _fsExtra["default"].createWriteStream(outFile, 'utf8');

            print = function print(str) {
              var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

              for (var i = 0; i < indent; i++) {
                out.write(' ');
              }

              out.write(str);
            };

            println = function println() {
              var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
              var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              print(str + '\n', indent);
            };

            return _context5.abrupt("return", new _promise["default"](function (resolve, reject) {
              out.on('error', reject);
              out.on('finish', function () {
                return resolve();
              });
              println(GENERATED_MESSAGE_COMMENT);
              print('export const ApiSchemas = ');
              writeSchema(schemas);
              println(' as const;');
              println();
              writeTypeDefs(schemas);
              out.end();
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee2);
  }));
  return _dumpSchema.apply(this, arguments);
}

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var wsdlFilePath, outFilePath, wsdl, schemas;
    return _regenerator["default"].wrap(function _callee3$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            wsdlFilePath = process.argv[2];

            if (wsdlFilePath) {
              _context6.next = 4;
              break;
            }

            console.error('No input WSDL file is specified.');
            return _context6.abrupt("return");

          case 4:
            outFilePath = process.argv[3];

            if (wsdlFilePath) {
              _context6.next = 8;
              break;
            }

            console.error('No output typescript schema file is specified.');
            return _context6.abrupt("return");

          case 8:
            _context6.next = 10;
            return readWSDLFile(wsdlFilePath);

          case 10:
            wsdl = _context6.sent;
            schemas = extractComplexTypes(wsdl);
            dumpSchema(schemas, outFilePath);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee3);
  }));
  return _main.apply(this, arguments);
}

main();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvd3NkbC93c2RsMnNjaGVtYS50cyJdLCJuYW1lcyI6WyJXU0RMUmVzdHJpY3Rpb25TY2hlbWEiLCIkIiwiYmFzZSIsImVudW1lcmF0aW9uIiwidmFsdWUiLCJXU0RMU2ltcGxlVHlwZVNjaGVtYSIsIm5hbWUiLCJyZXN0cmljdGlvbiIsIldTRExFbGVtZW50U2NoZW1hIiwidHlwZSIsIm1pbk9jY3VycyIsIm1heE9jY3VycyIsIm5pbGxhYmxlIiwiV1NETFNlcXVlbmNlU2NoZW1hIiwiZWxlbWVudCIsIldTRExFeHRlbnNpb25TY2hlbWEiLCJzZXF1ZW5jZSIsIldTRExDb21wbGV4Q29udGVudFNjaGVtYSIsImV4dGVuc2lvbiIsIldTRExDb21wbGV4VHlwZVNjaGVtYSIsImNvbXBsZXhDb250ZW50IiwiV1NETFNjaGVtYVNjaGVtYSIsImNvbXBsZXhUeXBlIiwic2ltcGxlVHlwZSIsIldTRExTY2hlbWEiLCJkZWZpbml0aW9ucyIsInR5cGVzIiwic2NoZW1hIiwibWVzc2FnZSIsInBvcnRUeXBlIiwib3BlcmF0aW9uIiwiYmluZGluZyIsInNlcnZpY2UiLCJkb2N1bWVudGF0aW9uIiwidG9Kc1R5cGUiLCJ4c2RUeXBlIiwic2ltcGxlVHlwZXMiLCJzcGxpdCIsIm5zIiwicmVhZFdTRExGaWxlIiwiZmlsZVBhdGgiLCJmcyIsInJlYWRGaWxlIiwieG1sRGF0YSIsInhtbDJqcyIsInBhcnNlU3RyaW5nUHJvbWlzZSIsImV4cGxpY2l0QXJyYXkiLCJqc29uIiwiZ2V0VHlwZUluZm8iLCJlbCIsImlzQXJyYXkiLCJleHRyYWN0Q29tcGxleFR5cGVzIiwid3NkbCIsImNvbnNvbGUiLCJsb2ciLCJzY2hlbWFzIiwic2MiLCJzdCIsInJzIiwiY3QiLCJwcm9wcyIsInNlcSIsImVscyIsImNjIiwiR0VORVJBVEVEX01FU1NBR0VfQ09NTUVOVCIsImR1bXBTY2hlbWEiLCJvdXRGaWxlIiwid3JpdGVTY2hlbWEiLCJ3cml0ZVR5cGVEZWYiLCJ3cml0ZVR5cGVEZWZzIiwicHJpbnQiLCJwcmludGxuIiwibyIsImluZGVudCIsImtleXMiLCJsZW5ndGgiLCJwcm9wIiwibGVuIiwic3Vic3RyaW5nIiwiaSIsImNvIiwibmFtZUlkIiwidGVzdCIsInJlcGxhY2UiLCJvdXQiLCJjcmVhdGVXcml0ZVN0cmVhbSIsInN0ciIsIndyaXRlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwiZW5kIiwibWFpbiIsIndzZGxGaWxlUGF0aCIsInByb2Nlc3MiLCJhcmd2IiwiZXJyb3IiLCJvdXRGaWxlUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLHFCQUFxQixHQUFHO0FBQzVCQyxFQUFBQSxDQUFDLEVBQUU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FEeUI7QUFFNUJDLEVBQUFBLFdBQVcsRUFBRSxDQUNYO0FBQ0VGLElBQUFBLENBQUMsRUFBRTtBQUFFRyxNQUFBQSxLQUFLLEVBQUU7QUFBVDtBQURMLEdBRFcsQ0FGZTtBQU81QixxQkFBbUIsQ0FDakI7QUFDRUgsSUFBQUEsQ0FBQyxFQUFFO0FBQUVHLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBREwsR0FEaUI7QUFQUyxDQUE5QjtBQWNBLElBQU1DLG9CQUFvQixHQUFHO0FBQzNCSixFQUFBQSxDQUFDLEVBQUU7QUFBRUssSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FEd0I7QUFFM0JDLEVBQUFBLFdBQVcsRUFBRVAscUJBRmM7QUFHM0IscUJBQW1CQTtBQUhRLENBQTdCO0FBTUEsSUFBTVEsaUJBQWlCLEdBQUc7QUFDeEJQLEVBQUFBLENBQUMsRUFBRTtBQUNESyxJQUFBQSxJQUFJLEVBQUUsUUFETDtBQUVERyxJQUFBQSxJQUFJLEVBQUUsUUFGTDtBQUdEQyxJQUFBQSxTQUFTLEVBQUUsU0FIVjtBQUlEQyxJQUFBQSxTQUFTLEVB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clxuaW1wb3J0IHhtbDJqcyBmcm9tICd4bWwyanMnO1xyXG5pbXBvcnQgeyBjYXN0VHlwZVVzaW5nU2NoZW1hIH0gZnJvbSAnLi4vLi4vc29hcCc7XHJcbmltcG9ydCB7IFNvYXBTY2hlbWFFbGVtZW50VHlwZSwgU29hcFNjaGVtYURlZiB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0IHsgaXNNYXBPYmplY3QgfSBmcm9tICcuLi8uLi91dGlsL2Z1bmN0aW9uJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY29uc3QgV1NETFJlc3RyaWN0aW9uU2NoZW1hID0ge1xyXG4gICQ6IHsgYmFzZTogJ3N0cmluZycgfSxcclxuICBlbnVtZXJhdGlvbjogW1xyXG4gICAge1xyXG4gICAgICAkOiB7IHZhbHVlOiAnc3RyaW5nJyB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gICd4c2Q6ZW51bWVyYXRpb24nOiBbXHJcbiAgICB7XHJcbiAgICAgICQ6IHsgdmFsdWU6ICdzdHJpbmcnIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBXU0RMU2ltcGxlVHlwZVNjaGVtYSA9IHtcclxuICAkOiB7IG5hbWU6ICdzdHJpbmcnIH0sXHJcbiAgcmVzdHJpY3Rpb246IFdTRExSZXN0cmljdGlvblNjaGVtYSxcclxuICAneHNkOnJlc3RyaWN0aW9uJzogV1NETFJlc3RyaWN0aW9uU2NoZW1hLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuY29uc3QgV1NETEVsZW1lbnRTY2hlbWEgPSB7XHJcbiAgJDoge1xyXG4gICAgbmFtZTogJ3N0cmluZycsXHJcbiAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgIG1pbk9jY3VyczogJz9udW1iZXInLFxyXG4gICAgbWF4T2NjdXJzOiAnP3N0cmluZycsXHJcbiAgICBuaWxsYWJsZTogJz9ib29sZWFuJyxcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG5cclxuY29uc3QgV1NETFNlcXVlbmNlU2NoZW1hID0ge1xyXG4gIGVsZW1lbnQ6IFsnPycsIFdTRExFbGVtZW50U2NoZW1hXSxcclxuICAneHNkOmVsZW1lbnQnOiBbJz8nLCBXU0RMRWxlbWVudFNjaGVtYV0sXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBXU0RMRXh0ZW5zaW9uU2NoZW1hID0ge1xyXG4gICQ6IHsgYmFzZTogJ3N0cmluZycgfSxcclxuICBzZXF1ZW5jZTogeyAnPyc6IFdTRExTZXF1ZW5jZVNjaGVtYSB9LFxyXG4gICd4c2Q6c2VxdWVuY2UnOiB7ICc/JzogV1NETFNlcXVlbmNlU2NoZW1hIH0sXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBXU0RMQ29tcGxleENvbnRlbnRTY2hlbWEgPSB7XHJcbiAgZXh0ZW5zaW9uOiB7ICc/JzogV1NETEV4dGVuc2lvblNjaGVtYSB9LFxyXG4gICd4c2Q6ZXh0ZW5zaW9uJzogeyAnPyc6IFdTRExFeHRlbnNpb25TY2hlbWEgfSxcclxufSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IFdTRExDb21wbGV4VHlwZVNjaGVtYSA9IHtcclxuICAkOiB7IG5hbWU6ICdzdHJpbmcnIH0sXHJcbiAgc2VxdWVuY2U6IHsgJz8nOiBXU0RMU2VxdWVuY2VTY2hlbWEgfSxcclxuICAneHNkOnNlcXVlbmNlJzogeyAnPyc6IFdTRExTZXF1ZW5jZVNjaGVtYSB9LFxyXG4gIGNvbXBsZXhDb250ZW50OiB7ICc/JzogV1NETENvbXBsZXhDb250ZW50U2NoZW1hIH0sXHJcbiAgJ3hzZDpjb21wbGV4Q29udGVudCc6IHsgJz8nOiBXU0RMQ29tcGxleENvbnRlbnRTY2hlbWEgfSxcclxufSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IFdTRExTY2hlbWFTY2hlbWEgPSB7XHJcbiAgJDogJ2FueScsXHJcbiAgY29tcGxleFR5cGU6IFsnPycsICdhbnknXSxcclxuICBzaW1wbGVUeXBlOiBbJz8nLCAnYW55J10sXHJcbiAgJ3hzZDpjb21wbGV4VHlwZSc6IFsnPycsICdhbnknXSxcclxuICAneHNkOnNpbXBsZVR5cGUnOiBbJz8nLCAnYW55J10sXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBXU0RMU2NoZW1hID0ge1xyXG4gIGRlZmluaXRpb25zOiB7XHJcbiAgICAkOiAnYW55JyxcclxuICAgIHR5cGVzOiB7XHJcbiAgICAgIHNjaGVtYTogWyc/JywgV1NETFNjaGVtYVNjaGVtYV0sXHJcbiAgICAgICd4c2Q6c2NoZW1hJzogWyc/JywgV1NETFNjaGVtYVNjaGVtYV0sXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZTogWydhbnknXSxcclxuICAgIHBvcnRUeXBlOiB7XHJcbiAgICAgICQ6ICdhbnknLFxyXG4gICAgICBvcGVyYXRpb246IFsnYW55J10sXHJcbiAgICB9LFxyXG4gICAgYmluZGluZzoge1xyXG4gICAgICAkOiAnYW55JyxcclxuICAgICAgb3BlcmF0aW9uOiBbJ2FueSddLFxyXG4gICAgfSxcclxuICAgIHNlcnZpY2U6IHtcclxuICAgICAgJDogJ2FueScsXHJcbiAgICAgIGRvY3VtZW50YXRpb246ICdzdHJpbmcnLFxyXG4gICAgICBvcGVyYXRpb246IFsnYW55J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbnR5cGUgV1NETCA9IFNvYXBTY2hlbWFFbGVtZW50VHlwZTx0eXBlb2YgV1NETFNjaGVtYT47XHJcblxyXG50eXBlIFdTRExFbGVtZW50ID0gU29hcFNjaGVtYUVsZW1lbnRUeXBlPHR5cGVvZiBXU0RMRWxlbWVudFNjaGVtYT47XHJcblxyXG50eXBlIFdTRExTaW1wbGVUeXBlID0gU29hcFNjaGVtYUVsZW1lbnRUeXBlPHR5cGVvZiBXU0RMU2ltcGxlVHlwZVNjaGVtYT47XHJcblxyXG50eXBlIFdTRExDb21wbGV4VHlwZSA9IFNvYXBTY2hlbWFFbGVtZW50VHlwZTx0eXBlb2YgV1NETENvbXBsZXhUeXBlU2NoZW1hPjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gdG9Kc1R5cGUoeHNkVHlwZTogc3RyaW5nLCBzaW1wbGVUeXBlczogeyBbdHlwZTogc3RyaW5nXTogc3RyaW5nIH0pIHtcclxuICBzd2l0Y2ggKHhzZFR5cGUpIHtcclxuICAgIGNhc2UgJ3hzZDpib29sZWFuJzpcclxuICAgICAgcmV0dXJuICdib29sZWFuJztcclxuICAgIGNhc2UgJ3hzZDpzdHJpbmcnOlxyXG4gICAgY2FzZSAneHNkOmRhdGUnOlxyXG4gICAgY2FzZSAneHNkOmRhdGVUaW1lJzpcclxuICAgIGNhc2UgJ3hzZDp0aW1lJzpcclxuICAgIGNhc2UgJ3hzZDpiYXNlNjRCaW5hcnknOlxyXG4gICAgICByZXR1cm4gJ3N0cmluZyc7XHJcbiAgICBjYXNlICd4c2Q6aW50JzpcclxuICAgIGNhc2UgJ3hzZDpsb25nJzpcclxuICAgIGNhc2UgJ3hzZDpkb3VibGUnOlxyXG4gICAgICByZXR1cm4gJ251bWJlcic7XHJcbiAgICBjYXNlICd4c2Q6YW55VHlwZSc6XHJcbiAgICAgIHJldHVybiAnYW55JztcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgW25zLCB0eXBlXSA9IHhzZFR5cGUuc3BsaXQoJzonKTtcclxuICAgICAgaWYgKHNpbXBsZVR5cGVzW3R5cGVdKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpbXBsZVR5cGVzW3R5cGVdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChucykge1xyXG4gICAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB4c2RUeXBlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZWFkV1NETEZpbGUoZmlsZVBhdGg6IHN0cmluZykge1xyXG4gIGNvbnN0IHhtbERhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCwgJ3V0ZjgnKTtcclxuICBjb25zdCBqc29uID0gYXdhaXQgeG1sMmpzLnBhcnNlU3RyaW5nUHJvbWlzZSh4bWxEYXRhLCB7XHJcbiAgICBleHBsaWNpdEFycmF5OiBmYWxzZSxcclxuICB9KTtcclxuICByZXR1cm4gY2FzdFR5cGVVc2luZ1NjaGVtYShqc29uLCBXU0RMU2NoZW1hKSBhcyBXU0RMO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGdldFR5cGVJbmZvKGVsOiBXU0RMRWxlbWVudCwgc2ltcGxlVHlwZXM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9KSB7XHJcbiAgbGV0IHR5cGUgPSB0b0pzVHlwZShlbC4kLnR5cGUsIHNpbXBsZVR5cGVzKTtcclxuICBjb25zdCBpc0FycmF5ID0gZWwuJC5tYXhPY2N1cnMgPT09ICd1bmJvdW5kZWQnO1xyXG4gIGNvbnN0IG5pbGxhYmxlID0gKCFpc0FycmF5ICYmIGVsLiQubWluT2NjdXJzID09PSAwKSB8fCBlbC4kLm5pbGxhYmxlO1xyXG4gIHJldHVybiBpc0FycmF5XHJcbiAgICA/IG5pbGxhYmxlXHJcbiAgICAgID8gWyc/JywgdHlwZV1cclxuICAgICAgOiBbdHlwZV1cclxuICAgIDogbmlsbGFibGVcclxuICAgID8gYD8ke3R5cGV9YFxyXG4gICAgOiB0eXBlO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3RDb21wbGV4VHlwZXMod3NkbDogV1NETCkge1xyXG4gIGNvbnNvbGUubG9nKHdzZGwuZGVmaW5pdGlvbnMudHlwZXNbJ3hzZDpzY2hlbWEnXSk7XHJcbiAgbGV0IHNjaGVtYXM6IHsgW25hbWU6IHN0cmluZ106IFNvYXBTY2hlbWFEZWYgfSA9IHt9O1xyXG4gIGNvbnN0IHNpbXBsZVR5cGVzOiB7IFt0eXBlOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIGNvbnN0IHR5cGVzID0gd3NkbC5kZWZpbml0aW9ucy50eXBlcztcclxuICBmb3IgKGNvbnN0IHNjIG9mIHR5cGVzLnNjaGVtYSA/PyB0eXBlc1sneHNkOnNjaGVtYSddID8/IFtdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHN0IG9mIHNjLnNpbXBsZVR5cGUgPz8gc2NbJ3hzZDpzaW1wbGVUeXBlJ10gPz8gW10pIHtcclxuICAgICAgY29uc3Qgc2ltcGxlVHlwZTogV1NETFNpbXBsZVR5cGUgPSBjYXN0VHlwZVVzaW5nU2NoZW1hKFxyXG4gICAgICAgIHN0LFxyXG4gICAgICAgIFdTRExTaW1wbGVUeXBlU2NoZW1hLFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBycyA9IHNpbXBsZVR5cGUucmVzdHJpY3Rpb24gPz8gc2ltcGxlVHlwZVsneHNkOnJlc3RyaWN0aW9uJ107XHJcbiAgICAgIGNvbnN0IGJhc2UgPSBycy4kLmJhc2Uuc3BsaXQoJzonKVsxXTtcclxuICAgICAgc2ltcGxlVHlwZXNbc2ltcGxlVHlwZS4kLm5hbWVdID0gYmFzZTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc29sZS5sb2coeyBzaW1wbGVUeXBlcyB9KTtcclxuICBmb3IgKGNvbnN0IHNjIG9mIHR5cGVzLnNjaGVtYSA/PyB0eXBlc1sneHNkOnNjaGVtYSddID8/IFtdKSB7XHJcbiAgICBmb3IgKGNvbnN0IGN0IG9mIHNjLmNvbXBsZXhUeXBlID8/IHNjWyd4c2Q6Y29tcGxleFR5cGUnXSA/PyBbXSkge1xyXG4gICAgICBjb25zdCBjb21wbGV4VHlwZTogV1NETENvbXBsZXhUeXBlID0gY2FzdFR5cGVVc2luZ1NjaGVtYShcclxuICAgICAgICBjdCxcclxuICAgICAgICBXU0RMQ29tcGxleFR5cGVTY2hlbWEsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNjaGVtYToge1xyXG4gICAgICAgIHR5cGU6IHN0cmluZztcclxuICAgICAgICBleHRlbmRzPzogc3RyaW5nO1xyXG4gICAgICAgIHByb3BzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcclxuICAgICAgfSA9IHtcclxuICAgICAgICB0eXBlOiBjb21wbGV4VHlwZS4kLm5hbWUsXHJcbiAgICAgICAgcHJvcHM6IHt9LFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBzZXEgPSBjb21wbGV4VHlwZS5zZXF1ZW5jZSA/PyBjb21wbGV4VHlwZVsneHNkOnNlcXVlbmNlJ107XHJcbiAgICAgIGNvbnN0IGVscyA9IHNlcT8uZWxlbWVudCA/PyBzZXE/LlsneHNkOmVsZW1lbnQnXTtcclxuICAgICAgZm9yIChjb25zdCBlbCBvZiBlbHMgPz8gW10pIHtcclxuICAgICAgICBzY2hlbWEucHJvcHNbZWwuJC5uYW1lXSA9IGdldFR5cGVJbmZvKGVsLCBzaW1wbGVUeXBlcyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY2MgPVxyXG4gICAgICAgIGNvbXBsZXhUeXBlLmNvbXBsZXhDb250ZW50ID8/IGNvbXBsZXhUeXBlWyd4c2Q6Y29tcGxleENvbnRlbnQnXTtcclxuICAgICAgaWYgKGNjKSB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gY2MuZXh0ZW5zaW9uID8/IGNjWyd4c2Q6ZXh0ZW5zaW9uJ107XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbikge1xyXG4gICAgICAgICAgc2NoZW1hLmV4dGVuZHMgPSBleHRlbnNpb24uJC5iYXNlLnNwbGl0KCc6JylbMV07XHJcbiAgICAgICAgICBjb25zdCBzZXEgPSBleHRlbnNpb24uc2VxdWVuY2UgPz8gZXh0ZW5zaW9uWyd4c2Q6c2VxdWVuY2UnXTtcclxuICAgICAgICAgIGNvbnN0IGVscyA9IHNlcT8uZWxlbWVudCA/PyBzZXE/LlsneHNkOmVsZW1lbnQnXTtcclxuICAgICAgICAgIGZvciAoY29uc3QgZWwgb2YgZWxzID8/IFtdKSB7XHJcbiAgICAgICAgICAgIHNjaGVtYS5wcm9wc1tlbC4kLm5hbWVdID0gZ2V0VHlwZUluZm8oZWwsIHNpbXBsZVR5cGVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2NoZW1hc1tjb21wbGV4VHlwZS4kLm5hbWVdID0gc2NoZW1hO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc2NoZW1hcztcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBHRU5FUkFURURfTUVTU0FHRV9DT01NRU5UID0gYC8qKlxyXG4gKiBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGZyb20gV1NETCBmaWxlIGJ5IHdzZGwyc2NoZW1hLnRzLlxyXG4gKiBEbyBub3QgbW9kaWZ5IGRpcmVjdGx5LlxyXG4gKiBUbyBnZW5lcmF0ZSB0aGUgZmlsZSwgcnVuIFwidHMtbm9kZSBwYXRoL3RvL3dzZGwyc2NoZW1hLnRzIHBhdGgvdG8vd3NkbC54bWwgcGF0aC90by9zY2hlbWEudHNcIlxyXG4gKi9cclxuYDtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZHVtcFNjaGVtYShzY2hlbWFzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSwgb3V0RmlsZTogc3RyaW5nKSB7XHJcbiAgY29uc3Qgb3V0ID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0ob3V0RmlsZSwgJ3V0ZjgnKTtcclxuICBjb25zdCBwcmludCA9IChzdHI6IHN0cmluZywgaW5kZW50OiBudW1iZXIgPSAwKSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGVudDsgaSsrKSB7XHJcbiAgICAgIG91dC53cml0ZSgnICcpO1xyXG4gICAgfVxyXG4gICAgb3V0LndyaXRlKHN0cik7XHJcbiAgfTtcclxuICBjb25zdCBwcmludGxuID0gKHN0cjogc3RyaW5nID0gJycsIGluZGVudDogbnVtYmVyID0gMCkgPT4ge1xyXG4gICAgcHJpbnQoc3RyICsgJ1xcbicsIGluZGVudCk7XHJcbiAgfTtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgb3V0Lm9uKCdlcnJvcicsIHJlamVjdCk7XHJcbiAgICBvdXQub24oJ2ZpbmlzaCcsICgpID0+IHJlc29sdmUoKSk7XHJcbiAgICBwcmludGxuKEdFTkVSQVRFRF9NRVNTQUdFX0NPTU1FTlQpO1xyXG4gICAgcHJpbnQoJ2V4cG9ydCBjb25zdCBBcGlTY2hlbWFzID0gJyk7XHJcbiAgICB3cml0ZVNjaGVtYShzY2hlbWFzKTtcclxuICAgIHByaW50bG4oJyBhcyBjb25zdDsnKTtcclxuICAgIHByaW50bG4oKTtcclxuICAgIHdyaXRlVHlwZURlZnMoc2NoZW1hcyk7XHJcbiAgICBvdXQuZW5kKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHdyaXRlU2NoZW1hKG86IGFueSwgaW5kZW50OiBudW1iZXIgPSAwKSB7XHJcbiAgICBpZiAoaW5kZW50ID4gMjApIHtcclxuICAgICAgcHJpbnQoXCInYW55J1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobykpIHtcclxuICAgICAgcHJpbnQoJ1snKTtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICBmb3IgKGNvbnN0IGNvIG9mIG8pIHtcclxuICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgIHByaW50KCcsICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3cml0ZVNjaGVtYShjbywgaW5kZW50KTtcclxuICAgICAgICBpKys7XHJcbiAgICAgIH1cclxuICAgICAgcHJpbnQoJ10nKTtcclxuICAgIH0gZWxzZSBpZiAoaXNNYXBPYmplY3QobykpIHtcclxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG8pO1xyXG4gICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcHJpbnRsbigneycpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICBjb25zdCBjbyA9IG9bbmFtZV07XHJcbiAgICAgICAgICBjb25zdCBuYW1lSWQgPSAvXltcXHdfJF0rJC8udGVzdChuYW1lKSA/IG5hbWUgOiBgJyR7bmFtZX0nYDtcclxuICAgICAgICAgIHByaW50KGAke25hbWVJZH06IGAsIGluZGVudCArIDIpO1xyXG4gICAgICAgICAgd3JpdGVTY2hlbWEoY28sIGluZGVudCArIDIpO1xyXG4gICAgICAgICAgcHJpbnRsbignLCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmludCgnfScsIGluZGVudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJpbnQoJ3t9Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByaW50KEpTT04uc3RyaW5naWZ5KG8pLnJlcGxhY2UoL1wiL2csIFwiJ1wiKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB3cml0ZVR5cGVEZWYoXHJcbiAgICBvOiBhbnksXHJcbiAgICBzY2hlbWFzOiB7IFtuYW1lOiBzdHJpbmddOiBTb2FwU2NoZW1hRGVmIH0sXHJcbiAgICBpbmRlbnQ6IG51bWJlciA9IDAsXHJcbiAgKSB7XHJcbiAgICBpZiAodHlwZW9mIG8gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHByaW50KG8pO1xyXG4gICAgfSBlbHNlIGlmIChpc01hcE9iamVjdChvKSkge1xyXG4gICAgICBpZiAoJ3R5cGUnIGluIG8gJiYgJ3Byb3BzJyBpbiBvKSB7XHJcbiAgICAgICAgaWYgKCdleHRlbmRzJyBpbiBvICYmIHR5cGVvZiBvLmV4dGVuZHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBwcmludChgJHtvLmV4dGVuZHN9ICYgYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyaXRlVHlwZURlZihvLnByb3BzLCBzY2hlbWFzLCBpbmRlbnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobyk7XHJcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBwcmludGxuKCd7Jyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKG8pKSB7XHJcbiAgICAgICAgICBsZXQgdmFsdWU6IGFueSA9IG9bcHJvcF07XHJcbiAgICAgICAgICBsZXQgbmlsbGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgIGxldCBpc0FycmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgaXNBcnJheSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHZhbHVlLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGxlbiA9PT0gMiAmJiB2YWx1ZVswXSA9PT0gJz8nKSB7XHJcbiAgICAgICAgICAgICAgbmlsbGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc01hcE9iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKCc/JyBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIG5pbGxhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlWyc/J107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlWzBdID09PSAnPycpIHtcclxuICAgICAgICAgICAgbmlsbGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByaW50KGAke3Byb3B9JHtuaWxsYWJsZSA/ICc/JyA6ICcnfTogYCwgaW5kZW50ICsgMik7XHJcbiAgICAgICAgICB3cml0ZVR5cGVEZWYodmFsdWUsIHNjaGVtYXMsIGluZGVudCArIDIpO1xyXG4gICAgICAgICAgaWYgKGlzQXJyYXkpIHtcclxuICAgICAgICAgICAgcHJpbnQoJ1tdJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobmlsbGFibGUpIHtcclxuICAgICAgICAgICAgcHJpbnQoJyB8IG51bGwgfCB1bmRlZmluZWQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByaW50bG4oJzsnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpbnQoJ30nLCBpbmRlbnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByaW50KCd7fScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB3cml0ZVR5cGVEZWZzKHNjaGVtYXM6IHsgW25hbWU6IHN0cmluZ106IFNvYXBTY2hlbWFEZWYgfSkge1xyXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKHNjaGVtYXMpKSB7XHJcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNjaGVtYXNbbmFtZV07XHJcbiAgICAgIHByaW50KGBleHBvcnQgdHlwZSAke25hbWV9ID0gYCk7XHJcbiAgICAgIHdyaXRlVHlwZURlZihzY2hlbWEsIHNjaGVtYXMpO1xyXG4gICAgICBwcmludGxuKCc7Jyk7XHJcbiAgICAgIHByaW50bG4oKTtcclxuICAgIH1cclxuICAgIHByaW50bG4oJ2V4cG9ydCB0eXBlIEFwaVNjaGVtYVR5cGVzID0geycpO1xyXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKHNjaGVtYXMpKSB7XHJcbiAgICAgIHByaW50bG4oYCR7bmFtZX06ICR7bmFtZX07YCwgMik7XHJcbiAgICB9XHJcbiAgICBwcmludGxuKCd9OycpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnN0IHdzZGxGaWxlUGF0aCA9IHByb2Nlc3MuYXJndlsyXTtcclxuICBpZiAoIXdzZGxGaWxlUGF0aCkge1xyXG4gICAgY29uc29sZS5lcnJvcignTm8gaW5wdXQgV1NETCBmaWxlIGlzIHNwZWNpZmllZC4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3Qgb3V0RmlsZVBhdGggPSBwcm9jZXNzLmFyZ3ZbM107XHJcbiAgaWYgKCF3c2RsRmlsZVBhdGgpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ05vIG91dHB1dCB0eXBlc2NyaXB0IHNjaGVtYSBmaWxlIGlzIHNwZWNpZmllZC4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3Qgd3NkbCA9IGF3YWl0IHJlYWRXU0RMRmlsZSh3c2RsRmlsZVBhdGgpO1xyXG4gIGNvbnN0IHNjaGVtYXMgPSBleHRyYWN0Q29tcGxleFR5cGVzKHdzZGwpO1xyXG4gIGR1bXBTY2hlbWEoc2NoZW1hcywgb3V0RmlsZVBhdGgpO1xyXG59XHJcblxyXG5tYWluKCk7XHJcbiJdfQ==