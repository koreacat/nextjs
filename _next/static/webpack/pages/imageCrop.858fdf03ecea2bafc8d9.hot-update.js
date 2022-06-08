webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/data.ts":
/*!******************************************!*\
  !*** ./src/components/imageCrop/data.ts ***!
  \******************************************/
/*! exports provided: ORIGIN_POINT, ORIGIN_SIZE, LINE_DIR, POINT_DIR, clamp, eO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGIN_POINT", function() { return ORIGIN_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGIN_SIZE", function() { return ORIGIN_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_DIR", function() { return LINE_DIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT_DIR", function() { return POINT_DIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eO", function() { return eO; });
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

var ORIGIN_POINT = Object.freeze({
  x: 0,
  y: 0
});
var ORIGIN_SIZE = Object.freeze({
  w: 0,
  h: 0
});
var DIR;

(function (DIR) {
  DIR["e"] = "e";
  DIR["w"] = "w";
  DIR["s"] = "s";
  DIR["n"] = "n";
  DIR["se"] = "se";
  DIR["sw"] = "sw";
  DIR["ne"] = "ne";
  DIR["nw"] = "nw";
})(DIR || (DIR = {}));

var LINE_DIR = ['e', 'w', 's', 'n'];
var POINT_DIR = Object(C_Users_kj996_project_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys(DIR));
;
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function eO(conditional, a, b) {
  return conditional ? a : b;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2RhdGEudHMiXSwibmFtZXMiOlsiT1JJR0lOX1BPSU5UIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJPUklHSU5fU0laRSIsInciLCJoIiwiRElSIiwiTElORV9ESVIiLCJQT0lOVF9ESVIiLCJrZXlzIiwiY2xhbXAiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZU8iLCJjb25kaXRpb25hbCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFQyxHQUFDLEVBQUUsQ0FBTDtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFkLENBQXJCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHSixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFSSxHQUFDLEVBQUUsQ0FBTDtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFkLENBQXBCO0lBRUZDLEc7O1dBQUFBLEc7QUFBQUEsSztBQUFBQSxLO0FBQUFBLEs7QUFBQUEsSztBQUFBQSxLO0FBQUFBLEs7QUFBQUEsSztBQUFBQSxLO0dBQUFBLEcsS0FBQUEsRzs7QUFZRSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsd0pBQUlULE1BQU0sQ0FBQ1UsSUFBUCxDQUFZSCxHQUFaLENBQVAsQ0FBZjtBQVVOO0FBRU0sU0FBU0ksS0FBVCxDQUFlQyxHQUFmLEVBQTRCQyxHQUE1QixFQUF5Q0MsR0FBekMsRUFBc0Q7QUFDM0QsU0FBT0MsSUFBSSxDQUFDRixHQUFMLENBQVNFLElBQUksQ0FBQ0QsR0FBTCxDQUFTRixHQUFULEVBQWNDLEdBQWQsQ0FBVCxFQUE2QkMsR0FBN0IsQ0FBUDtBQUNEO0FBRU0sU0FBU0UsRUFBVCxDQUFZQyxXQUFaLEVBQWtDQyxDQUFsQyxFQUEwQ0MsQ0FBMUMsRUFBa0Q7QUFDdkQsU0FBT0YsV0FBVyxHQUFHQyxDQUFILEdBQU9DLENBQXpCO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjg1OGZkZjAzZWNlYTJiYWZjOGQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgT1JJR0lOX1BPSU5UID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmV4cG9ydCBjb25zdCBPUklHSU5fU0laRSA9IE9iamVjdC5mcmVlemUoeyB3OiAwLCBoOiAwIH0pO1xyXG5cclxuZW51bSBESVIge1xyXG4gIGUgPSAnZScsXHJcbiAgdyA9ICd3JyxcclxuICBzID0gJ3MnLFxyXG4gIG4gPSAnbicsXHJcbiAgc2UgPSAnc2UnLFxyXG4gIHN3ID0gJ3N3JyxcclxuICBuZSA9ICduZScsXHJcbiAgbncgPSAnbncnLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEaXJUeXBlID0ga2V5b2YgdHlwZW9mIERJUjtcclxuZXhwb3J0IGNvbnN0IExJTkVfRElSID0gWydlJywgJ3cnLCAncycsICduJ107XHJcbmV4cG9ydCBjb25zdCBQT0lOVF9ESVIgPSBbLi4uT2JqZWN0LmtleXMoRElSKV07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpemUge1xyXG4gIHc6IG51bWJlcjtcclxuICBoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobnVtOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlTyhjb25kaXRpb25hbDogYm9vbGVhbiwgYTogYW55LCBiOiBhbnkpIHtcclxuICByZXR1cm4gY29uZGl0aW9uYWwgPyBhIDogYjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9