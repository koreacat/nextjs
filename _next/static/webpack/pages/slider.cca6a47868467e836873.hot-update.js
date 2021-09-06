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
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.module.scss */ "./src/components/common/slider/slider.module.scss");
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\common\\slider\\index.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

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
    className: cx('slider'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('rail')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('track'),
      style: {
        left: '0%',
        right: 'auto',
        width: "".concat(value, "%")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uCEE8\uD2B8\uB864\uB7EC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('handle'),
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
    }, _this), "\uAC8C\uC774\uC9C0 \uC911\uAC04 \uC2A4\uD15D", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('step')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uD14D\uC2A4\uD2B8", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mark')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "number",
      className: cx('input'),
      value: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDBEQUFoQixDQUFYOztBQWNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BV007QUFBQSwyQkFUbkJDLFFBU21CO0FBQUEsTUFUbkJBLFFBU21CLDhCQVRULEtBU1M7QUFBQSxNQVJuQkMsS0FRbUIsUUFSbkJBLEtBUW1CO0FBQUEsTUFQbkJDLEdBT21CLFFBUG5CQSxHQU9tQjtBQUFBLE1BTm5CQyxHQU1tQixRQU5uQkEsR0FNbUI7QUFBQSxNQUxuQkMsS0FLbUIsUUFMbkJBLEtBS21CO0FBQUEsTUFKbkJDLGNBSW1CLFFBSm5CQSxjQUltQjtBQUFBLE1BSG5CQyxLQUdtQixRQUhuQkEsS0FHbUI7QUFBQSxNQUZuQkMsYUFFbUIsUUFGbkJBLGFBRW1CO0FBQUEsTUFEbkJDLFFBQ21CLFFBRG5CQSxRQUNtQjtBQUVwQixzQkFDQztBQUFLLGFBQVMsRUFBRWIsRUFBRSxDQUFDLFFBQUQsQ0FBbEI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE1BQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBR0M7QUFBSyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxPQUFELENBQWxCO0FBQTZCLFdBQUssRUFBRTtBQUFDYyxZQUFJLEVBQUUsSUFBUDtBQUFhQyxhQUFLLEVBQUUsTUFBcEI7QUFBNEJDLGFBQUssWUFBS0wsS0FBTDtBQUFqQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQsOERBTUM7QUFBSyxlQUFTLEVBQUVYLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQThCLFVBQUksRUFBQyxRQUFuQztBQUE0Qyx1QkFBYyxHQUExRDtBQUE4RCx1QkFBYyxLQUE1RTtBQUFrRix1QkFBYyxJQUFoRztBQUFxRyx1QkFBYyxPQUFuSDtBQUEySCxXQUFLLEVBQUU7QUFBQ2MsWUFBSSxFQUFFLEtBQVA7QUFBY0MsYUFBSyxFQUFFLE1BQXJCO0FBQTZCRSxpQkFBUyxFQUFFO0FBQXhDLE9BQWxJO0FBQStMLGNBQVEsRUFBRTtBQUF6TTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQsK0RBU0M7QUFBSyxlQUFTLEVBQUVqQixFQUFFLENBQUMsTUFBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEQsd0RBWUM7QUFBSyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxNQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRCxlQWNDO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsZUFBUyxFQUFFQSxFQUFFLENBQUMsT0FBRCxDQUFsQztBQUE2QyxXQUFLLEVBQUVXO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWtCQSxDQS9CRDs7S0FBTVAsTTtBQWlDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmNjYTZhNDc4Njg0NjdlODM2ODczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0Tm9kZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgSVNsaWRlclByb3BzIHtcclxuXHRkaXNhYmxlZD86IGJvb2xlYW47XHJcblx0bWFya3M/OiBSZWNvcmQ8bnVtYmVyLCBSZWFjdE5vZGUgfCBzdHJpbmc+O1xyXG5cdG1heD86IG51bWJlcjtcclxuXHRtaW4/OiBudW1iZXI7XHJcblx0cmFuZ2U/OiBib29sZWFuO1xyXG5cdHRvb2x0aXBWaXNpYmxlPzogYm9vbGVhbjtcclxuXHR2YWx1ZT86IG51bWJlcjtcclxuXHRvbkFmdGVyQ2hhbmdlPzogKCkgPT4ge307XHJcblx0b25DaGFuZ2U/OiAodmFsdWUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlciA9IChcclxuXHR7XHJcblx0XHRkaXNhYmxlZD0gZmFsc2UsXHJcblx0XHRtYXJrcyxcclxuXHRcdG1heCxcclxuXHRcdG1pbixcclxuXHRcdHJhbmdlLFxyXG5cdFx0dG9vbHRpcFZpc2libGUsXHJcblx0XHR2YWx1ZSxcclxuXHRcdG9uQWZ0ZXJDaGFuZ2UsXHJcblx0XHRvbkNoYW5nZVxyXG5cdH06IElTbGlkZXJQcm9wcykgPT4ge1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXInKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgncmFpbCcpfS8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3RyYWNrJyl9IHN0eWxlPXt7bGVmdDogJzAlJywgcmlnaHQ6ICdhdXRvJywgd2lkdGg6IGAke3ZhbHVlfSVgfX0vPlxyXG5cdFx0XHRcclxuXHRcdFx06rKM7J207KeAIOy7qO2KuOuhpOufrFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2hhbmRsZScpfSByb2xlPSdzbGlkZXInIGRhdGEtdmFsdWVtaW49JzAnIGRhdGEtdmFsdWVtYXg9JzEwMCcgZGF0YS12YWx1ZW5vdz0nNzQnIGFyaWEtZGlzYWJsZWQ9J2ZhbHNlJyBzdHlsZT17e2xlZnQ6ICc3NCUnLCByaWdodDogJ2F1dG8nLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJ319IHRhYkluZGV4PXswfS8+XHJcblxyXG5cdFx0XHTqsozsnbTsp4Ag7KSR6rCEIOyKpO2FnVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3N0ZXAnKX0vPlxyXG5cclxuXHRcdFx06rKM7J207KeAIO2FjeyKpO2KuFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ21hcmsnKX0vPlxyXG5cclxuXHRcdFx0PGlucHV0IHR5cGU9J251bWJlcicgY2xhc3NOYW1lPXtjeCgnaW5wdXQnKX0gdmFsdWU9e3ZhbHVlfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=