"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _context;

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {
  Connection: true,
  OAuth2: true,
  Date: true,
  SfDate: true,
  registry: true,
  Registry: true,
  VERSION: true
};

_Object$defineProperty(exports, "Connection", {
  enumerable: true,
  get: function get() {
    return _connection["default"];
  }
});

_Object$defineProperty(exports, "OAuth2", {
  enumerable: true,
  get: function get() {
    return _oauth["default"];
  }
});

_Object$defineProperty(exports, "Date", {
  enumerable: true,
  get: function get() {
    return _date["default"];
  }
});

_Object$defineProperty(exports, "SfDate", {
  enumerable: true,
  get: function get() {
    return _date["default"];
  }
});

_Object$defineProperty(exports, "registry", {
  enumerable: true,
  get: function get() {
    return _registry["default"];
  }
});

_Object$defineProperty(exports, "Registry", {
  enumerable: true,
  get: function get() {
    return _registry.Registry;
  }
});

_Object$defineProperty(exports, "VERSION", {
  enumerable: true,
  get: function get() {
    return _VERSION["default"];
  }
});

exports["default"] = void 0;

var _jsforce = _interopRequireDefault(require("./jsforce"));

var _connection = _interopRequireDefault(require("./connection"));

var _oauth = _interopRequireDefault(require("./oauth2"));

var _date = _interopRequireDefault(require("./date"));

var _registry = _interopRequireWildcard(require("./registry"));

var _VERSION = _interopRequireDefault(require("./VERSION"));

var _types = require("./types");

_forEachInstanceProperty(_context = _Object$keys(_types)).call(_context, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _default = _jsforce["default"];
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbImpzZm9yY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7ZUFVZUEsbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQganNmb3JjZSBmcm9tICcuL2pzZm9yY2UnO1xyXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQgT0F1dGgyIGZyb20gJy4vb2F1dGgyJztcclxuaW1wb3J0IFNmRGF0ZSBmcm9tICcuL2RhdGUnO1xyXG5pbXBvcnQgcmVnaXN0cnksIHsgUmVnaXN0cnkgfSBmcm9tICcuL3JlZ2lzdHJ5JztcclxuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi9WRVJTSU9OJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xyXG5leHBvcnQge1xyXG4gIFZFUlNJT04sXHJcbiAgQ29ubmVjdGlvbixcclxuICBPQXV0aDIsXHJcbiAgU2ZEYXRlIGFzIERhdGUsXHJcbiAgU2ZEYXRlLFxyXG4gIFJlZ2lzdHJ5LFxyXG4gIHJlZ2lzdHJ5LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBqc2ZvcmNlO1xyXG4iXX0=