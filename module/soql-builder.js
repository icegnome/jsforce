"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createSOQL = createSOQL;

var _sort2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/sort"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));

var _date = _interopRequireDefault(require("./date"));

/**
 * @file Create and build SOQL string from configuration
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

/** @private **/
function escapeSOQLString(str) {
  return String(str || '').replace(/'/g, "\\'");
}
/** @private **/


function createFieldsClause(fields) {
  var _context;

  var childQueries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cqueries = (0, _values["default"])(childQueries); // eslint-disable-next-line no-use-before-define

  return (0, _concat["default"])(_context = []).call(_context, (0, _toConsumableArray2["default"])(fields || ['Id']), (0, _toConsumableArray2["default"])((0, _map["default"])(cqueries).call(cqueries, function (cquery) {
    return "(".concat(createSOQL(cquery), ")");
  }))).join(', ');
}
/** @private **/


function createValueExpression(value) {
  if ((0, _isArray["default"])(value)) {
    return value.length > 0 ? "(".concat((0, _map["default"])(value).call(value, createValueExpression).join(', '), ")") : undefined;
  }

  if (value instanceof _date["default"]) {
    return value.toString();
  }

  if (typeof value === 'string') {
    return "'".concat(escapeSOQLString(value), "'");
  }

  if (typeof value === 'number') {
    return value.toString();
  }

  if (value === null) {
    return 'null';
  }

  return value;
}

var opMap = {
  '=': '=',
  $eq: '=',
  '!=': '!=',
  $ne: '!=',
  '>': '>',
  $gt: '>',
  '<': '<',
  $lt: '<',
  '>=': '>=',
  $gte: '>=',
  '<=': '<=',
  $lte: '<=',
  $like: 'LIKE',
  $nlike: 'NOT LIKE',
  $in: 'IN',
  $nin: 'NOT IN',
  $includes: 'INCLUDES',
  $excludes: 'EXCLUDES',
  $exists: 'EXISTS'
};
/** @private **/

function createFieldExpression(field, value) {
  var op = '$eq';
  var _value = value; // Assume the `$in` operator if value is an array and none was supplied.

  if ((0, _isArray["default"])(value)) {
    op = '$in';
  } else if ((0, _typeof2["default"])(value) === 'object' && value !== null) {
    // Otherwise, if an object was passed then process the supplied ops.
    for (var _i = 0, _Object$keys = (0, _keys["default"])(value); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];

      if (k[0] === '$') {
        op = k;
        _value = value[k];
        break;
      }
    }
  }

  var sfop = opMap[op];

  if (!sfop || typeof _value === 'undefined') {
    return null;
  }

  var valueExpr = createValueExpression(_value);

  if (typeof valueExpr === 'undefined') {
    return null;
  }

  switch (sfop) {
    case 'NOT LIKE':
      return "(".concat(['NOT', field, 'LIKE', valueExpr].join(' '), ")");

    case 'EXISTS':
      return [field, _value ? '!=' : '=', 'null'].join(' ');

    default:
      return [field, sfop, valueExpr].join(' ');
  }
}
/** @private **/


function createOrderByClause() {
  var sort = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _sort = [];

  if (typeof sort === 'string') {
    var _context2;

    if (/,|\s+(asc|desc)\s*$/.test(sort)) {
      // must be specified in pure "order by" clause. Return raw config.
      return sort;
    } // sort order in mongoose-style expression.
    // e.g. "FieldA -FieldB" => "ORDER BY FieldA ASC, FieldB DESC"


    _sort = (0, _map["default"])(_context2 = sort.split(/\s+/)).call(_context2, function (field) {
      var dir = 'ASC'; // ascending

      var flag = field[0];

      if (flag === '-') {
        dir = 'DESC';
        field = field.substring(1); // eslint-disable-line no-param-reassign
      } else if (flag === '+') {
        field = field.substring(1); // eslint-disable-line no-param-reassign
      }

      return [field, dir];
    });
  } else if ((0, _isArray["default"])(sort)) {
    _sort = sort;
  } else {
    var _context3;

    _sort = (0, _map["default"])(_context3 = (0, _entries["default"])(sort)).call(_context3, function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          field = _ref2[0],
          dir = _ref2[1];

      return [field, dir];
    });
  }

  return (0, _map["default"])(_sort).call(_sort, function (_ref3) {
    var _context4;

    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        field = _ref4[0],
        dir = _ref4[1];

    /* eslint-disable no-param-reassign */
    switch (String(dir)) {
      case 'DESC':
      case 'desc':
      case 'descending':
      case '-':
      case '-1':
        dir = 'DESC';
        break;

      default:
        dir = 'ASC';
    }

    return (0, _concat["default"])(_context4 = "".concat(field, " ")).call(_context4, dir);
  }).join(', ');
}

/** @private **/
function createConditionClause() {
  var _context7;

  var conditions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var operator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'AND';
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (typeof conditions === 'string') {
    return conditions;
  }

  var conditionList = [];

  if (!(0, _isArray["default"])(conditions)) {
    var _context5;

    // if passed in hash object
    var conditionsMap = conditions;
    conditionList = (0, _map["default"])(_context5 = (0, _keys["default"])(conditionsMap)).call(_context5, function (key) {
      return {
        key: key,
        value: conditionsMap[key]
      };
    });
  } else {
    conditionList = (0, _map["default"])(conditions).call(conditions, function (cond) {
      var _context6;

      var conds = (0, _map["default"])(_context6 = (0, _keys["default"])(cond)).call(_context6, function (key) {
        return {
          key: key,
          value: cond[key]
        };
      });
      return conds.length > 1 ? {
        key: '$and',
        value: (0, _map["default"])(conds).call(conds, function (c) {
          return (0, _defineProperty2["default"])({}, c.key, c.value);
        })
      } : conds[0];
    });
  }

  var conditionClauses = (0, _filter["default"])(_context7 = (0, _map["default"])(conditionList).call(conditionList, function (cond) {
    var d = depth + 1;
    var op;

    switch (cond.key) {
      case '$or':
      case '$and':
      case '$not':
        if (operator !== 'NOT' && conditionList.length === 1) {
          d = depth; // not change tree depth
        }

        op = cond.key === '$or' ? 'OR' : cond.key === '$and' ? 'AND' : 'NOT';
        return createConditionClause(cond.value, op, d);

      default:
        return createFieldExpression(cond.key, cond.value);
    }
  })).call(_context7, function (expr) {
    return expr;
  });
  var hasParen;

  if (operator === 'NOT') {
    var _context8, _context9;

    hasParen = depth > 0;
    return (0, _concat["default"])(_context8 = (0, _concat["default"])(_context9 = "".concat(hasParen ? '(' : '', "NOT ")).call(_context9, conditionClauses[0])).call(_context8, hasParen ? ')' : '');
  }

  hasParen = depth > 0 && conditionClauses.length > 1;
  return (hasParen ? '(' : '') + conditionClauses.join(" ".concat(operator, " ")) + (hasParen ? ')' : '');
}
/**
 * Create SOQL
 * @private
 */


function createSOQL(query) {
  var soql = ['SELECT ', createFieldsClause(query.fields, (0, _includes["default"])(query)), ' FROM ', query.table].join('');
  var cond = createConditionClause(query.conditions);

  if (cond) {
    soql += " WHERE ".concat(cond);
  }

  var orderby = createOrderByClause((0, _sort2["default"])(query));

  if (orderby) {
    soql += " ORDER BY ".concat(orderby);
  }

  if (query.limit) {
    soql += " LIMIT ".concat(query.limit);
  }

  if (query.offset) {
    soql += " OFFSET ".concat(query.offset);
  }

  return soql;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zb3FsLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiZXNjYXBlU09RTFN0cmluZyIsInN0ciIsIlN0cmluZyIsInJlcGxhY2UiLCJjcmVhdGVGaWVsZHNDbGF1c2UiLCJmaWVsZHMiLCJjaGlsZFF1ZXJpZXMiLCJjcXVlcmllcyIsImNxdWVyeSIsImNyZWF0ZVNPUUwiLCJqb2luIiwiY3JlYXRlVmFsdWVFeHByZXNzaW9uIiwidmFsdWUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJTZkRhdGUiLCJ0b1N0cmluZyIsIm9wTWFwIiwiJGVxIiwiJG5lIiwiJGd0IiwiJGx0IiwiJGd0ZSIsIiRsdGUiLCIkbGlrZSIsIiRubGlrZSIsIiRpbiIsIiRuaW4iLCIkaW5jbHVkZXMiLCIkZXhjbHVkZXMiLCIkZXhpc3RzIiwiY3JlYXRlRmllbGRFeHByZXNzaW9uIiwiZmllbGQiLCJvcCIsIl92YWx1ZSIsImsiLCJzZm9wIiwidmFsdWVFeHByIiwiY3JlYXRlT3JkZXJCeUNsYXVzZSIsInNvcnQiLCJfc29ydCIsInRlc3QiLCJzcGxpdCIsImRpciIsImZsYWciLCJzdWJzdHJpbmciLCJjcmVhdGVDb25kaXRpb25DbGF1c2UiLCJjb25kaXRpb25zIiwib3BlcmF0b3IiLCJkZXB0aCIsImNvbmRpdGlvbkxpc3QiLCJjb25kaXRpb25zTWFwIiwia2V5IiwiY29uZCIsImNvbmRzIiwiYyIsImNvbmRpdGlvbkNsYXVzZXMiLCJkIiwiZXhwciIsImhhc1BhcmVuIiwicXVlcnkiLCJzb3FsIiwidGFibGUiLCJvcmRlcmJ5IiwibGltaXQiLCJvZmZzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFKQTtBQUNBO0FBQ0E7QUFDQTs7QUEwQkE7QUFDQSxTQUFTQSxnQkFBVCxDQUEwQkMsR0FBMUIsRUFBb0U7QUFDbEUsU0FBT0MsTUFBTSxDQUFDRCxHQUFHLElBQUksRUFBUixDQUFOLENB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aEJKLElBQUFBLElBQUksc0JBQWVELEtBQUssQ0FBQ0ssTUFBckIsQ0FBSjtBQUNEOztBQUNELFNBQU9KLElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZSBDcmVhdGUgYW5kIGJ1aWxkIFNPUUwgc3RyaW5nIGZyb20gY29uZmlndXJhdGlvblxyXG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cclxuICovXHJcbmltcG9ydCBTZkRhdGUgZnJvbSAnLi9kYXRlJztcclxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIENvbmRpdGlvbiA9XHJcbiAgfCBzdHJpbmdcclxuICB8IHsgW2ZpZWxkOiBzdHJpbmddOiBhbnkgfVxyXG4gIHwgQXJyYXk8eyBbZmllbGQ6IHN0cmluZ106IGFueSB9PjtcclxuXHJcbmV4cG9ydCB0eXBlIFNvcnREaXIgPSAnQVNDJyB8ICdERVNDJyB8ICdhc2MnIHwgJ2Rlc2MnIHwgMSB8IC0xO1xyXG5cclxuZXhwb3J0IHR5cGUgU29ydCA9XHJcbiAgfCBzdHJpbmdcclxuICB8IEFycmF5PFtzdHJpbmcsIFNvcnREaXJdPlxyXG4gIHwgeyBbZmllbGQ6IHN0cmluZ106IFNvcnREaXIgfTtcclxuXHJcbmV4cG9ydCB0eXBlIFF1ZXJ5Q29uZmlnID0ge1xyXG4gIGZpZWxkcz86IHN0cmluZ1tdO1xyXG4gIGluY2x1ZGVzPzogeyBbZmllbGQ6IHN0cmluZ106IFF1ZXJ5Q29uZmlnIH07XHJcbiAgdGFibGU/OiBzdHJpbmc7XHJcbiAgY29uZGl0aW9ucz86IENvbmRpdGlvbjtcclxuICBzb3J0PzogU29ydDtcclxuICBsaW1pdD86IG51bWJlcjtcclxuICBvZmZzZXQ/OiBudW1iZXI7XHJcbn07XHJcblxyXG4vKiogQHByaXZhdGUgKiovXHJcbmZ1bmN0aW9uIGVzY2FwZVNPUUxTdHJpbmcoc3RyOiBPcHRpb25hbDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xyXG4gIHJldHVybiBTdHJpbmcoc3RyIHx8ICcnKS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIik7XHJcbn1cclxuXHJcbi8qKiBAcHJpdmF0ZSAqKi9cclxuZnVuY3Rpb24gY3JlYXRlRmllbGRzQ2xhdXNlKFxyXG4gIGZpZWxkcz86IHN0cmluZ1tdLFxyXG4gIGNoaWxkUXVlcmllczogeyBbbmFtZTogc3RyaW5nXTogUXVlcnlDb25maWcgfSA9IHt9LFxyXG4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IGNxdWVyaWVzOiBRdWVyeUNvbmZpZ1tdID0gKE9iamVjdC52YWx1ZXMoXHJcbiAgICBjaGlsZFF1ZXJpZXMsXHJcbiAgKSBhcyBhbnkpIGFzIFF1ZXJ5Q29uZmlnW107XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgcmV0dXJuIFtcclxuICAgIC4uLihmaWVsZHMgfHwgWydJZCddKSxcclxuICAgIC4uLmNxdWVyaWVzLm1hcCgoY3F1ZXJ5KSA9PiBgKCR7Y3JlYXRlU09RTChjcXVlcnkpfSlgKSxcclxuICBdLmpvaW4oJywgJyk7XHJcbn1cclxuXHJcbi8qKiBAcHJpdmF0ZSAqKi9cclxuZnVuY3Rpb24gY3JlYXRlVmFsdWVFeHByZXNzaW9uKHZhbHVlOiBhbnkpOiBPcHRpb25hbDxzdHJpbmc+IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwXHJcbiAgICAgID8gYCgke3ZhbHVlLm1hcChjcmVhdGVWYWx1ZUV4cHJlc3Npb24pLmpvaW4oJywgJyl9KWBcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNmRGF0ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gYCcke2VzY2FwZVNPUUxTdHJpbmcodmFsdWUpfSdgO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuICdudWxsJztcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBvcE1hcDogeyBbb3A6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gICc9JzogJz0nLFxyXG4gICRlcTogJz0nLFxyXG4gICchPSc6ICchPScsXHJcbiAgJG5lOiAnIT0nLFxyXG4gICc+JzogJz4nLFxyXG4gICRndDogJz4nLFxyXG4gICc8JzogJzwnLFxyXG4gICRsdDogJzwnLFxyXG4gICc+PSc6ICc+PScsXHJcbiAgJGd0ZTogJz49JyxcclxuICAnPD0nOiAnPD0nLFxyXG4gICRsdGU6ICc8PScsXHJcbiAgJGxpa2U6ICdMSUtFJyxcclxuICAkbmxpa2U6ICdOT1QgTElLRScsXHJcbiAgJGluOiAnSU4nLFxyXG4gICRuaW46ICdOT1QgSU4nLFxyXG4gICRpbmNsdWRlczogJ0lOQ0xVREVTJyxcclxuICAkZXhjbHVkZXM6ICdFWENMVURFUycsXHJcbiAgJGV4aXN0czogJ0VYSVNUUycsXHJcbn07XHJcblxyXG4vKiogQHByaXZhdGUgKiovXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpZWxkRXhwcmVzc2lvbihmaWVsZDogc3RyaW5nLCB2YWx1ZTogYW55KTogT3B0aW9uYWw8c3RyaW5nPiB7XHJcbiAgbGV0IG9wID0gJyRlcSc7XHJcbiAgbGV0IF92YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAvLyBBc3N1bWUgdGhlIGAkaW5gIG9wZXJhdG9yIGlmIHZhbHVlIGlzIGFuIGFycmF5IGFuZCBub25lIHdhcyBzdXBwbGllZC5cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIG9wID0gJyRpbic7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAvLyBPdGhlcndpc2UsIGlmIGFuIG9iamVjdCB3YXMgcGFzc2VkIHRoZW4gcHJvY2VzcyB0aGUgc3VwcGxpZWQgb3BzLlxyXG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICBpZiAoa1swXSA9PT0gJyQnKSB7XHJcbiAgICAgICAgb3AgPSBrO1xyXG4gICAgICAgIF92YWx1ZSA9IHZhbHVlW2tdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHNmb3AgPSBvcE1hcFtvcF07XHJcbiAgaWYgKCFzZm9wIHx8IHR5cGVvZiBfdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3QgdmFsdWVFeHByID0gY3JlYXRlVmFsdWVFeHByZXNzaW9uKF92YWx1ZSk7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZUV4cHIgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgc3dpdGNoIChzZm9wKSB7XHJcbiAgICBjYXNlICdOT1QgTElLRSc6XHJcbiAgICAgIHJldHVybiBgKCR7WydOT1QnLCBmaWVsZCwgJ0xJS0UnLCB2YWx1ZUV4cHJdLmpvaW4oJyAnKX0pYDtcclxuICAgIGNhc2UgJ0VYSVNUUyc6XHJcbiAgICAgIHJldHVybiBbZmllbGQsIF92YWx1ZSA/ICchPScgOiAnPScsICdudWxsJ10uam9pbignICcpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtmaWVsZCwgc2ZvcCwgdmFsdWVFeHByXS5qb2luKCcgJyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHByaXZhdGUgKiovXHJcbmZ1bmN0aW9uIGNyZWF0ZU9yZGVyQnlDbGF1c2Uoc29ydDogU29ydCA9IFtdKTogc3RyaW5nIHtcclxuICBsZXQgX3NvcnQ6IEFycmF5PFtzdHJpbmcsIFNvcnREaXJdPiA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygc29ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgIGlmICgvLHxcXHMrKGFzY3xkZXNjKVxccyokLy50ZXN0KHNvcnQpKSB7XHJcbiAgICAgIC8vIG11c3QgYmUgc3BlY2lmaWVkIGluIHB1cmUgXCJvcmRlciBieVwiIGNsYXVzZS4gUmV0dXJuIHJhdyBjb25maWcuXHJcbiAgICAgIHJldHVybiBzb3J0O1xyXG4gICAgfVxyXG4gICAgLy8gc29ydCBvcmRlciBpbiBtb25nb29zZS1zdHlsZSBleHByZXNzaW9uLlxyXG4gICAgLy8gZS5nLiBcIkZpZWxkQSAtRmllbGRCXCIgPT4gXCJPUkRFUiBCWSBGaWVsZEEgQVNDLCBGaWVsZEIgREVTQ1wiXHJcbiAgICBfc29ydCA9IHNvcnQuc3BsaXQoL1xccysvKS5tYXAoKGZpZWxkKSA9PiB7XHJcbiAgICAgIGxldCBkaXI6IFNvcnREaXIgPSAnQVNDJzsgLy8gYXNjZW5kaW5nXHJcbiAgICAgIGNvbnN0IGZsYWcgPSBmaWVsZFswXTtcclxuICAgICAgaWYgKGZsYWcgPT09ICctJykge1xyXG4gICAgICAgIGRpciA9ICdERVNDJztcclxuICAgICAgICBmaWVsZCA9IGZpZWxkLnN1YnN0cmluZygxKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICB9IGVsc2UgaWYgKGZsYWcgPT09ICcrJykge1xyXG4gICAgICAgIGZpZWxkID0gZmllbGQuc3Vic3RyaW5nKDEpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFtmaWVsZCwgZGlyXSBhcyBbc3RyaW5nLCBTb3J0RGlyXTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3J0KSkge1xyXG4gICAgX3NvcnQgPSBzb3J0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBfc29ydCA9IE9iamVjdC5lbnRyaWVzKHNvcnQpLm1hcChcclxuICAgICAgKFtmaWVsZCwgZGlyXSkgPT4gW2ZpZWxkLCBkaXJdIGFzIFtzdHJpbmcsIFNvcnREaXJdLFxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIF9zb3J0XHJcbiAgICAubWFwKChbZmllbGQsIGRpcl0pID0+IHtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuICAgICAgc3dpdGNoIChTdHJpbmcoZGlyKSkge1xyXG4gICAgICAgIGNhc2UgJ0RFU0MnOlxyXG4gICAgICAgIGNhc2UgJ2Rlc2MnOlxyXG4gICAgICAgIGNhc2UgJ2Rlc2NlbmRpbmcnOlxyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgIGNhc2UgJy0xJzpcclxuICAgICAgICAgIGRpciA9ICdERVNDJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBkaXIgPSAnQVNDJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYCR7ZmllbGR9ICR7ZGlyfWA7XHJcbiAgICB9KVxyXG4gICAgLmpvaW4oJywgJyk7XHJcbn1cclxuXHJcbnR5cGUgTG9naWNhbE9wZXJhdG9yID0gJ0FORCcgfCAnT1InIHwgJ05PVCc7XHJcblxyXG4vKiogQHByaXZhdGUgKiovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbmRpdGlvbkNsYXVzZShcclxuICBjb25kaXRpb25zOiBDb25kaXRpb24gPSB7fSxcclxuICBvcGVyYXRvcjogTG9naWNhbE9wZXJhdG9yID0gJ0FORCcsXHJcbiAgZGVwdGg6IG51bWJlciA9IDAsXHJcbik6IHN0cmluZyB7XHJcbiAgaWYgKHR5cGVvZiBjb25kaXRpb25zID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIGNvbmRpdGlvbnM7XHJcbiAgfVxyXG4gIGxldCBjb25kaXRpb25MaXN0OiBBcnJheTx7IGtleTogc3RyaW5nOyB2YWx1ZTogQ29uZGl0aW9uIH0+ID0gW107XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNvbmRpdGlvbnMpKSB7XHJcbiAgICAvLyBpZiBwYXNzZWQgaW4gaGFzaCBvYmplY3RcclxuICAgIGNvbnN0IGNvbmRpdGlvbnNNYXAgPSBjb25kaXRpb25zO1xyXG4gICAgY29uZGl0aW9uTGlzdCA9IE9iamVjdC5rZXlzKGNvbmRpdGlvbnNNYXApLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiBjb25kaXRpb25zTWFwW2tleV0sXHJcbiAgICB9KSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbmRpdGlvbkxpc3QgPSBjb25kaXRpb25zLm1hcCgoY29uZCkgPT4ge1xyXG4gICAgICBjb25zdCBjb25kcyA9IE9iamVjdC5rZXlzKGNvbmQpLm1hcCgoa2V5KSA9PiAoeyBrZXksIHZhbHVlOiBjb25kW2tleV0gfSkpO1xyXG4gICAgICByZXR1cm4gY29uZHMubGVuZ3RoID4gMVxyXG4gICAgICAgID8geyBrZXk6ICckYW5kJywgdmFsdWU6IGNvbmRzLm1hcCgoYykgPT4gKHsgW2Mua2V5XTogYy52YWx1ZSB9KSkgfVxyXG4gICAgICAgIDogY29uZHNbMF07XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgY29uZGl0aW9uQ2xhdXNlcyA9IChjb25kaXRpb25MaXN0XHJcbiAgICAubWFwKChjb25kKSA9PiB7XHJcbiAgICAgIGxldCBkID0gZGVwdGggKyAxO1xyXG4gICAgICBsZXQgb3A6IE9wdGlvbmFsPExvZ2ljYWxPcGVyYXRvcj47XHJcbiAgICAgIHN3aXRjaCAoY29uZC5rZXkpIHtcclxuICAgICAgICBjYXNlICckb3InOlxyXG4gICAgICAgIGNhc2UgJyRhbmQnOlxyXG4gICAgICAgIGNhc2UgJyRub3QnOlxyXG4gICAgICAgICAgaWYgKG9wZXJhdG9yICE9PSAnTk9UJyAmJiBjb25kaXRpb25MaXN0Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBkID0gZGVwdGg7IC8vIG5vdCBjaGFuZ2UgdHJlZSBkZXB0aFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3AgPSBjb25kLmtleSA9PT0gJyRvcicgPyAnT1InIDogY29uZC5rZXkgPT09ICckYW5kJyA/ICdBTkQnIDogJ05PVCc7XHJcbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ29uZGl0aW9uQ2xhdXNlKGNvbmQudmFsdWUsIG9wLCBkKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpZWxkRXhwcmVzc2lvbihjb25kLmtleSwgY29uZC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuZmlsdGVyKChleHByKSA9PiBleHByKSBhcyBhbnkpIGFzIHN0cmluZ1tdO1xyXG5cclxuICBsZXQgaGFzUGFyZW46IGJvb2xlYW47XHJcbiAgaWYgKG9wZXJhdG9yID09PSAnTk9UJykge1xyXG4gICAgaGFzUGFyZW4gPSBkZXB0aCA+IDA7XHJcbiAgICByZXR1cm4gYCR7aGFzUGFyZW4gPyAnKCcgOiAnJ31OT1QgJHtjb25kaXRpb25DbGF1c2VzWzBdfSR7XHJcbiAgICAgIGhhc1BhcmVuID8gJyknIDogJydcclxuICAgIH1gO1xyXG4gIH1cclxuICBoYXNQYXJlbiA9IGRlcHRoID4gMCAmJiBjb25kaXRpb25DbGF1c2VzLmxlbmd0aCA+IDE7XHJcbiAgcmV0dXJuIChcclxuICAgIChoYXNQYXJlbiA/ICcoJyA6ICcnKSArXHJcbiAgICBjb25kaXRpb25DbGF1c2VzLmpvaW4oYCAke29wZXJhdG9yfSBgKSArXHJcbiAgICAoaGFzUGFyZW4gPyAnKScgOiAnJylcclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIFNPUUxcclxuICogQHByaXZhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTT1FMKHF1ZXJ5OiBRdWVyeUNvbmZpZyk6IHN0cmluZyB7XHJcbiAgbGV0IHNvcWwgPSBbXHJcbiAgICAnU0VMRUNUICcsXHJcbiAgICBjcmVhdGVGaWVsZHNDbGF1c2UocXVlcnkuZmllbGRzLCBxdWVyeS5pbmNsdWRlcyksXHJcbiAgICAnIEZST00gJyxcclxuICAgIHF1ZXJ5LnRhYmxlLFxyXG4gIF0uam9pbignJyk7XHJcbiAgY29uc3QgY29uZCA9IGNyZWF0ZUNvbmRpdGlvbkNsYXVzZShxdWVyeS5jb25kaXRpb25zKTtcclxuICBpZiAoY29uZCkge1xyXG4gICAgc29xbCArPSBgIFdIRVJFICR7Y29uZH1gO1xyXG4gIH1cclxuICBjb25zdCBvcmRlcmJ5ID0gY3JlYXRlT3JkZXJCeUNsYXVzZShxdWVyeS5zb3J0KTtcclxuICBpZiAob3JkZXJieSkge1xyXG4gICAgc29xbCArPSBgIE9SREVSIEJZICR7b3JkZXJieX1gO1xyXG4gIH1cclxuICBpZiAocXVlcnkubGltaXQpIHtcclxuICAgIHNvcWwgKz0gYCBMSU1JVCAke3F1ZXJ5LmxpbWl0fWA7XHJcbiAgfVxyXG4gIGlmIChxdWVyeS5vZmZzZXQpIHtcclxuICAgIHNvcWwgKz0gYCBPRkZTRVQgJHtxdWVyeS5vZmZzZXR9YDtcclxuICB9XHJcbiAgcmV0dXJuIHNvcWw7XHJcbn1cclxuIl19