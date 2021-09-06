webpackHotUpdate_N_E("pages/slider",{

/***/ "./src/components/common/slider/index.tsx":
/*!************************************************!*\
  !*** ./src/components/common/slider/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\common\\slider\\index.tsx",
    _this = undefined;

var Slider = function Slider(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      marks = _ref.marks,
      max = _ref.max,
      min = _ref.min,
      range = _ref.range,
      tooltipVisible = _ref.tooltipVisible,
      value = _ref.value,
      onAfterChange = _ref.onAfterChange,
      onChange = _ref.onChange;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "ant-slider",
    children: ["\uAC8C\uC774\uC9C0 \uBC30\uACBD", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-rail"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this), "\uCC28\uC624\uB978 \uAC8C\uC774\uC9C0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-track",
      style: {
        left: '0%',
        right: 'auto',
        width: '74%'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uC911\uAC04 \uC2A4\uD15D", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-step"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uCEE8\uD2B8\uB864\uB7EC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-handle",
      role: "slider",
      "data-valuemin": "0",
      "data-valuemax": "100",
      "data-valuenow": "74",
      "aria-disabled": "false",
      style: {
        left: '74%',
        right: 'auto',
        transform: 'translateX(-50%)'
      },
      tabIndex: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uD14D\uC2A4\uD2B8", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-mark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }, _this);
};

_c = Slider;
/* harmony default export */ __webpack_exports__["default"] = (Slider);

var _c;

$RefreshReg$(_c, "Slider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiU2xpZGVyIiwiZGlzYWJsZWQiLCJtYXJrcyIsIm1heCIsIm1pbiIsInJhbmdlIiwidG9vbHRpcFZpc2libGUiLCJ2YWx1ZSIsIm9uQWZ0ZXJDaGFuZ2UiLCJvbkNoYW5nZSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQVdNO0FBQUEsMkJBVG5CQyxRQVNtQjtBQUFBLE1BVG5CQSxRQVNtQiw4QkFUVCxLQVNTO0FBQUEsTUFSbkJDLEtBUW1CLFFBUm5CQSxLQVFtQjtBQUFBLE1BUG5CQyxHQU9tQixRQVBuQkEsR0FPbUI7QUFBQSxNQU5uQkMsR0FNbUIsUUFObkJBLEdBTW1CO0FBQUEsTUFMbkJDLEtBS21CLFFBTG5CQSxLQUttQjtBQUFBLE1BSm5CQyxjQUltQixRQUpuQkEsY0FJbUI7QUFBQSxNQUhuQkMsS0FHbUIsUUFIbkJBLEtBR21CO0FBQUEsTUFGbkJDLGFBRW1CLFFBRm5CQSxhQUVtQjtBQUFBLE1BRG5CQyxRQUNtQixRQURuQkEsUUFDbUI7QUFDcEIsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLCtEQUVDO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELHdEQUtDO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQWtDLFdBQUssRUFBRTtBQUFDQyxZQUFJLEVBQUUsSUFBUDtBQUFhQyxhQUFLLEVBQUUsTUFBcEI7QUFBNEJDLGFBQUssRUFBRTtBQUFuQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQsK0RBUUM7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQsOERBV0M7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBbUMsVUFBSSxFQUFDLFFBQXhDO0FBQWlELHVCQUFjLEdBQS9EO0FBQW1FLHVCQUFjLEtBQWpGO0FBQXVGLHVCQUFjLElBQXJHO0FBQTBHLHVCQUFjLE9BQXhIO0FBQWdJLFdBQUssRUFBRTtBQUFDRixZQUFJLEVBQUUsS0FBUDtBQUFjQyxhQUFLLEVBQUUsTUFBckI7QUFBNkJFLGlCQUFTLEVBQUU7QUFBeEMsT0FBdkk7QUFBb00sY0FBUSxFQUFFO0FBQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRCx3REFjQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRCxlQWdCQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBb0JBLENBaENEOztLQUFNYixNO0FBa0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuOTFkNzc5ZjAzZjA4OWE2NDVjMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3ROb2RlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBJU2xpZGVyUHJvcHMge1xyXG5cdGRpc2FibGVkPzogYm9vbGVhbjtcclxuXHRtYXJrcz86IFJlY29yZDxudW1iZXIsIFJlYWN0Tm9kZSB8IHN0cmluZz47XHJcblx0bWF4PzogbnVtYmVyO1xyXG5cdG1pbj86IG51bWJlcjtcclxuXHRyYW5nZT86IGJvb2xlYW47XHJcblx0dG9vbHRpcFZpc2libGU/OiBib29sZWFuO1xyXG5cdHZhbHVlPzogbnVtYmVyO1xyXG5cdG9uQWZ0ZXJDaGFuZ2U/OiAoKSA9PiB7fTtcclxuXHRvbkNoYW5nZT86ICh2YWx1ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgU2xpZGVyID0gKFxyXG5cdHtcclxuXHRcdGRpc2FibGVkPSBmYWxzZSxcclxuXHRcdG1hcmtzLFxyXG5cdFx0bWF4LFxyXG5cdFx0bWluLFxyXG5cdFx0cmFuZ2UsXHJcblx0XHR0b29sdGlwVmlzaWJsZSxcclxuXHRcdHZhbHVlLFxyXG5cdFx0b25BZnRlckNoYW5nZSxcclxuXHRcdG9uQ2hhbmdlXHJcblx0fTogSVNsaWRlclByb3BzKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYW50LXNsaWRlclwiPlxyXG5cdFx0XHTqsozsnbTsp4Ag67Cw6rK9XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYW50LXNsaWRlci1yYWlsXCIvPlxyXG5cclxuXHRcdFx07LCo7Jik66W4IOqyjOydtOyngFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFudC1zbGlkZXItdHJhY2tcIiBzdHlsZT17e2xlZnQ6ICcwJScsIHJpZ2h0OiAnYXV0bycsIHdpZHRoOiAnNzQlJ319Lz5cclxuXHJcblx0XHRcdOqyjOydtOyngCDspJHqsIQg7Iqk7YWdXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYW50LXNsaWRlci1zdGVwXCIvPlxyXG5cclxuXHRcdFx06rKM7J207KeAIOy7qO2KuOuhpOufrFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFudC1zbGlkZXItaGFuZGxlXCIgcm9sZT1cInNsaWRlclwiIGRhdGEtdmFsdWVtaW49XCIwXCIgZGF0YS12YWx1ZW1heD1cIjEwMFwiIGRhdGEtdmFsdWVub3c9XCI3NFwiIGFyaWEtZGlzYWJsZWQ9XCJmYWxzZVwiIHN0eWxlPXt7bGVmdDogJzc0JScsIHJpZ2h0OiAnYXV0bycsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknfX0gdGFiSW5kZXg9ezB9Lz5cclxuXHJcblx0XHRcdOqyjOydtOyngCDthY3siqTtirhcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbnQtc2xpZGVyLW1hcmtcIi8+XHJcblxyXG5cdFx0XHQ8aW5wdXQvPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9