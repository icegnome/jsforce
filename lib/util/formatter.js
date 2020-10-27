"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.zeroPad = zeroPad;
exports.formatDate = formatDate;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

/**
 *
 */
function zeroPad(num) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var nstr = '';

  for (var d = digits - 1; d > 0; d--) {
    if (num >= Math.pow(10, d)) {
      break;
    }

    nstr += '0';
  }

  return nstr + String(num);
}
/**
 *
 */


function formatDate(date) {
  var _context, _context2, _context3, _context4, _context5;

  return (0, _concat["default"])(_context = (0, _concat["default"])(_context2 = (0, _concat["default"])(_context3 = (0, _concat["default"])(_context4 = (0, _concat["default"])(_context5 = "".concat(date.getUTCFullYear(), "-")).call(_context5, zeroPad(date.getUTCMonth() + 1), "-")).call(_context4, zeroPad(date.getUTCDate()), "T")).call(_context3, zeroPad(date.getUTCHours()), ":")).call(_context2, zeroPad(date.getUTCMinutes()), ":")).call(_context, zeroPad(date.getUTCSeconds()), "+00:00");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Zvcm1hdHRlci50cyJdLCJuYW1lcyI6WyJ6ZXJvUGFkIiwibnVtIiwiZGlnaXRzIiwibnN0ciIsImQiLCJTdHJpbmciLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBMEQ7QUFBQSxNQUE1QkMsTUFBNEIsdUVBQVgsQ0FBVztBQUMvRCxNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBR0YsTUFBTSxHQUFHLENBQXRCLEVBQXlCRSxDQUFDLEdBQUcsQ0FBN0IsRUFBZ0NBLENBQUMsRUFBakMsRUFBcUM7QUFDbkMsUUFBSUgsR0FBRyxhQUFJLEVBQUosRUFBVUcsQ0FBVixDQUFQLEVBQW9CO0FBQ2xCO0FBQ0Q7O0FBQ0RELElBQUFBLElBQUksSUFBSSxHQUFSO0FBQ0Q7O0FBQ0QsU0FBT0EsSUFBSSxHQUFHRSxNQUFNLENBQUNKLEdBQUQsQ0FBcEI7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ssVUFBVCxDQUFvQkMsSUFBcEIsRUFBZ0M7QUFBQTs7QUFDckMsc01BQVVBLElBQUksQ0FBQ0MsY0FBTCxFQUFWLHdCQUFtQ1IsT0FBTyxDQUFDTyxJQUFJLENBQUNFLFdBQUwsS0FBcUIsQ0FBdEIsQ0FBMUMsd0JBQXNFVCxPQUFPLENBQzNFTyxJQUFJLENBQUNHLFVBQUwsRUFEMkUsQ0FBN0Usd0JBRUtWLE9BQU8sQ0FBQ08sSUFBSSxDQUFDSSxXQUFMLEVBQUQsQ0FGWix3QkFFb0NYLE9BQU8sQ0FBQ08sSUFBSSxDQUFDSyxhQUFMLEVBQUQsQ0FGM0MsdUJBRXFFWixPQUFPLENBQzFFTyxJQUFJLENBQUNNLGFBQUwsRUFEMEUsQ0FGNUU7QUFLRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHplcm9QYWQobnVtOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyID0gMik6IHN0cmluZyB7XHJcbiAgbGV0IG5zdHIgPSAnJztcclxuICBmb3IgKGxldCBkID0gZGlnaXRzIC0gMTsgZCA+IDA7IGQtLSkge1xyXG4gICAgaWYgKG51bSA+PSAxMCAqKiBkKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgbnN0ciArPSAnMCc7XHJcbiAgfVxyXG4gIHJldHVybiBuc3RyICsgU3RyaW5nKG51bSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSkge1xyXG4gIHJldHVybiBgJHtkYXRlLmdldFVUQ0Z1bGxZZWFyKCl9LSR7emVyb1BhZChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKX0tJHt6ZXJvUGFkKFxyXG4gICAgZGF0ZS5nZXRVVENEYXRlKCksXHJcbiAgKX1UJHt6ZXJvUGFkKGRhdGUuZ2V0VVRDSG91cnMoKSl9OiR7emVyb1BhZChkYXRlLmdldFVUQ01pbnV0ZXMoKSl9OiR7emVyb1BhZChcclxuICAgIGRhdGUuZ2V0VVRDU2Vjb25kcygpLFxyXG4gICl9KzAwOjAwYDtcclxufVxyXG4iXX0=