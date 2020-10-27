"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Registry", {
  enumerable: true,
  get: function get() {
    return _types.Registry;
  }
});

_Object$defineProperty(exports, "FileRegistry", {
  enumerable: true,
  get: function get() {
    return _file.FileRegistry;
  }
});

_Object$defineProperty(exports, "SfdxRegistry", {
  enumerable: true,
  get: function get() {
    return _sfdx.SfdxRegistry;
  }
});

_Object$defineProperty(exports, "EmptyRegistry", {
  enumerable: true,
  get: function get() {
    return _empty.EmptyRegistry;
  }
});

exports["default"] = void 0;

var _types = require("./types");

var _file = require("./file");

var _sfdx = require("./sfdx");

var _empty = require("./empty");

var registry = process.env.JSFORCE_CONNECTION_REGISTRY === 'sfdx' ? new _sfdx.SfdxRegistry({}) : new _file.FileRegistry({});
var _default = registry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS9pbmRleC50cyJdLCJuYW1lcyI6WyJyZWdpc3RyeSIsInByb2Nlc3MiLCJlbnYiLCJKU0ZPUkNFX0NPTk5FQ1RJT05fUkVHSVNUUlkiLCJTZmR4UmVnaXN0cnkiLCJGaWxlUmVnaXN0cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsMkJBQVosS0FBNEMsTUFBNUMsR0FDSSxJQUFJQyxrQkFBSixDQUFpQixFQUFqQixDQURKLEdBRUksSUFBSUMsa0JBQUosQ0FBaUIsRUFBakIsQ0FITjtlQUtlTCxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgRmlsZVJlZ2lzdHJ5IH0gZnJvbSAnLi9maWxlJztcclxuaW1wb3J0IHsgU2ZkeFJlZ2lzdHJ5IH0gZnJvbSAnLi9zZmR4JztcclxuaW1wb3J0IHsgRW1wdHlSZWdpc3RyeSB9IGZyb20gJy4vZW1wdHknO1xyXG5cclxuY29uc3QgcmVnaXN0cnkgPVxyXG4gIHByb2Nlc3MuZW52LkpTRk9SQ0VfQ09OTkVDVElPTl9SRUdJU1RSWSA9PT0gJ3NmZHgnXHJcbiAgICA/IG5ldyBTZmR4UmVnaXN0cnkoe30pXHJcbiAgICA6IG5ldyBGaWxlUmVnaXN0cnkoe30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cnk7XHJcblxyXG5leHBvcnQgeyBSZWdpc3RyeSwgRmlsZVJlZ2lzdHJ5LCBTZmR4UmVnaXN0cnksIEVtcHR5UmVnaXN0cnkgfTtcclxuIl19