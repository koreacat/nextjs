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
    className: "slider",
    children: ["\uAC8C\uC774\uC9C0 \uBC30\uACBD", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sliderRail"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this), "\uCC28\uC624\uB978 \uAC8C\uC774\uC9C0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sliderTrack",
      style: {
        left: '0%',
        right: 'auto',
        width: '74%'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uC911\uAC04 \uC2A4\uD15D", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sliderStep"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uCEE8\uD2B8\uB864\uB7EC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sliderHandle",
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
      lineNumber: 40,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uD14D\uC2A4\uD2B8", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sliderMark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "sliderInput",
      value: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiU2xpZGVyIiwiZGlzYWJsZWQiLCJtYXJrcyIsIm1heCIsIm1pbiIsInJhbmdlIiwidG9vbHRpcFZpc2libGUiLCJ2YWx1ZSIsIm9uQWZ0ZXJDaGFuZ2UiLCJvbkNoYW5nZSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQVdNO0FBQUEsMkJBVG5CQyxRQVNtQjtBQUFBLE1BVG5CQSxRQVNtQiw4QkFUVCxLQVNTO0FBQUEsTUFSbkJDLEtBUW1CLFFBUm5CQSxLQVFtQjtBQUFBLE1BUG5CQyxHQU9tQixRQVBuQkEsR0FPbUI7QUFBQSxNQU5uQkMsR0FNbUIsUUFObkJBLEdBTW1CO0FBQUEsTUFMbkJDLEtBS21CLFFBTG5CQSxLQUttQjtBQUFBLE1BSm5CQyxjQUltQixRQUpuQkEsY0FJbUI7QUFBQSxNQUhuQkMsS0FHbUIsUUFIbkJBLEtBR21CO0FBQUEsTUFGbkJDLGFBRW1CLFFBRm5CQSxhQUVtQjtBQUFBLE1BRG5CQyxRQUNtQixRQURuQkEsUUFDbUI7QUFFcEIsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLCtEQUVDO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELHdEQUtDO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBNkIsV0FBSyxFQUFFO0FBQUNDLFlBQUksRUFBRSxJQUFQO0FBQWFDLGFBQUssRUFBRSxNQUFwQjtBQUE0QkMsYUFBSyxFQUFFO0FBQW5DO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRCwrREFRQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRCw4REFXQztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQThCLFVBQUksRUFBQyxRQUFuQztBQUE0Qyx1QkFBYyxHQUExRDtBQUE4RCx1QkFBYyxLQUE1RTtBQUFrRix1QkFBYyxJQUFoRztBQUFxRyx1QkFBYyxPQUFuSDtBQUEySCxXQUFLLEVBQUU7QUFBQ0YsWUFBSSxFQUFFLEtBQVA7QUFBY0MsYUFBSyxFQUFFLE1BQXJCO0FBQTZCRSxpQkFBUyxFQUFFO0FBQXhDLE9BQWxJO0FBQStMLGNBQVEsRUFBRTtBQUF6TTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEQsd0RBY0M7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEQsZUFnQkM7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsV0FBSyxFQUFFTjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBb0JBLENBakNEOztLQUFNUCxNO0FBbUNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuY2ZhMGYxNDQwNWIyZWI1YmIzMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3ROb2RlLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIElTbGlkZXJQcm9wcyB7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdG1hcmtzPzogUmVjb3JkPG51bWJlciwgUmVhY3ROb2RlIHwgc3RyaW5nPjtcclxuXHRtYXg/OiBudW1iZXI7XHJcblx0bWluPzogbnVtYmVyO1xyXG5cdHJhbmdlPzogYm9vbGVhbjtcclxuXHR0b29sdGlwVmlzaWJsZT86IGJvb2xlYW47XHJcblx0dmFsdWU/OiBudW1iZXI7XHJcblx0b25BZnRlckNoYW5nZT86ICgpID0+IHt9O1xyXG5cdG9uQ2hhbmdlPzogKHZhbHVlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBTbGlkZXIgPSAoXHJcblx0e1xyXG5cdFx0ZGlzYWJsZWQ9IGZhbHNlLFxyXG5cdFx0bWFya3MsXHJcblx0XHRtYXgsXHJcblx0XHRtaW4sXHJcblx0XHRyYW5nZSxcclxuXHRcdHRvb2x0aXBWaXNpYmxlLFxyXG5cdFx0dmFsdWUsXHJcblx0XHRvbkFmdGVyQ2hhbmdlLFxyXG5cdFx0b25DaGFuZ2VcclxuXHR9OiBJU2xpZGVyUHJvcHMpID0+IHtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdzbGlkZXInPlxyXG5cdFx0XHTqsozsnbTsp4Ag67Cw6rK9XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzbGlkZXJSYWlsJy8+XHJcblxyXG5cdFx0XHTssKjsmKTrpbgg6rKM7J207KeAXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzbGlkZXJUcmFjaycgc3R5bGU9e3tsZWZ0OiAnMCUnLCByaWdodDogJ2F1dG8nLCB3aWR0aDogJzc0JSd9fS8+XHJcblxyXG5cdFx0XHTqsozsnbTsp4Ag7KSR6rCEIOyKpO2FnVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyU3RlcCcvPlxyXG5cclxuXHRcdFx06rKM7J207KeAIOy7qO2KuOuhpOufrFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2xpZGVySGFuZGxlJyByb2xlPSdzbGlkZXInIGRhdGEtdmFsdWVtaW49JzAnIGRhdGEtdmFsdWVtYXg9JzEwMCcgZGF0YS12YWx1ZW5vdz0nNzQnIGFyaWEtZGlzYWJsZWQ9J2ZhbHNlJyBzdHlsZT17e2xlZnQ6ICc3NCUnLCByaWdodDogJ2F1dG8nLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJ319IHRhYkluZGV4PXswfS8+XHJcblxyXG5cdFx0XHTqsozsnbTsp4Ag7YWN7Iqk7Yq4XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzbGlkZXJNYXJrJy8+XHJcblxyXG5cdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdzbGlkZXJJbnB1dCcgdmFsdWU9e3ZhbHVlfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=