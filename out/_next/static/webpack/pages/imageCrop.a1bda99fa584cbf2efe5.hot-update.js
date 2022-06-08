webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/data.ts":
/*!******************************************!*\
  !*** ./src/components/imageCrop/data.ts ***!
  \******************************************/
/*! exports provided: ORIGIN_POINT, ORIGIN_SIZE, LINE_DIR, POINT_DIR, getMinMaxValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGIN_POINT", function() { return ORIGIN_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGIN_SIZE", function() { return ORIGIN_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_DIR", function() { return LINE_DIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT_DIR", function() { return POINT_DIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinMaxValue", function() { return getMinMaxValue; });
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
function getMinMaxValue() {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2RhdGEudHMiXSwibmFtZXMiOlsiT1JJR0lOX1BPSU5UIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJPUklHSU5fU0laRSIsInciLCJoIiwiRElSIiwiTElORV9ESVIiLCJQT0lOVF9ESVIiLCJrZXlzIiwiZ2V0TWluTWF4VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRUMsR0FBQyxFQUFFLENBQUw7QUFBUUMsR0FBQyxFQUFFO0FBQVgsQ0FBZCxDQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBR0osTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRUksR0FBQyxFQUFFLENBQUw7QUFBUUMsR0FBQyxFQUFFO0FBQVgsQ0FBZCxDQUFwQjtJQUVGQyxHOztXQUFBQSxHO0FBQUFBLEs7QUFBQUEsSztBQUFBQSxLO0FBQUFBLEs7QUFBQUEsSztBQUFBQSxLO0FBQUFBLEs7QUFBQUEsSztHQUFBQSxHLEtBQUFBLEc7O0FBWUUsSUFBTUMsUUFBUSxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLHdKQUFJVCxNQUFNLENBQUNVLElBQVAsQ0FBWUgsR0FBWixDQUFQLENBQWY7QUFVTjtBQUVNLFNBQVNJLGNBQVQsR0FBMEIsQ0FFaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLmExYmRhOTlmYTU4NGNiZjJlZmU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgT1JJR0lOX1BPSU5UID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmV4cG9ydCBjb25zdCBPUklHSU5fU0laRSA9IE9iamVjdC5mcmVlemUoeyB3OiAwLCBoOiAwIH0pO1xyXG5cclxuZW51bSBESVIge1xyXG4gIGUgPSAnZScsXHJcbiAgdyA9ICd3JyxcclxuICBzID0gJ3MnLFxyXG4gIG4gPSAnbicsXHJcbiAgc2UgPSAnc2UnLFxyXG4gIHN3ID0gJ3N3JyxcclxuICBuZSA9ICduZScsXHJcbiAgbncgPSAnbncnLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEaXJUeXBlID0ga2V5b2YgdHlwZW9mIERJUjtcclxuZXhwb3J0IGNvbnN0IExJTkVfRElSID0gWydlJywgJ3cnLCAncycsICduJ107XHJcbmV4cG9ydCBjb25zdCBQT0lOVF9ESVIgPSBbLi4uT2JqZWN0LmtleXMoRElSKV07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpemUge1xyXG4gIHc6IG51bWJlcjtcclxuICBoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWluTWF4VmFsdWUoKSB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==