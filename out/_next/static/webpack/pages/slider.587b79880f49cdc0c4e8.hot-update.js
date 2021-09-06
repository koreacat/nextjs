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
      onAfterChange = _ref.onAfterChange,
      onChange = _ref.onChange;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "ant-slider",
    children: ["\uAC8C\uC774\uC9C0 \uBC30\uACBD", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-rail"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, _this), "\uCC28\uC624\uB978 \uAC8C\uC774\uC9C0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-track",
      style: "left: 0%; right: auto; width: 74%;"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uC911\uAC04 \uC2A4\uD15D", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-step"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uCEE8\uD2B8\uB864\uB7EC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-handle",
      role: "slider",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": "74",
      "aria-disabled": "false",
      style: "left: 74%; right: auto; transform: translateX(-50%);",
      tabIndex: "0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this), "\uAC8C\uC774\uC9C0 \uD14D\uC2A4\uD2B8", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ant-slider-mark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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

/***/ }),

/***/ "./src/pages/slider.tsx":
/*!******************************!*\
  !*** ./src/pages/slider.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/slider */ "./src/components/common/slider/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\pages\\slider.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var SliderPage = function SliderPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      value = _useState[0],
      setValue = _useState[1];

  var onChange = function onChange(value) {
    setValue(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
        min: 1,
        max: 20,
        value: value,
        onChage: onChange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, _this);
};

_s(SliderPage, "MsrhBkqyAB9WP9mZZ5qdqbK8EhY=");

_c = SliderPage;
/* harmony default export */ __webpack_exports__["default"] = (SliderPage);

var _c;

$RefreshReg$(_c, "SliderPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zbGlkZXIudHN4Il0sIm5hbWVzIjpbIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwib25BZnRlckNoYW5nZSIsIm9uQ2hhbmdlIiwiU2xpZGVyUGFnZSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FVTTtBQUFBLDJCQVJuQkMsUUFRbUI7QUFBQSxNQVJuQkEsUUFRbUIsOEJBUlQsS0FRUztBQUFBLE1BUG5CQyxLQU9tQixRQVBuQkEsS0FPbUI7QUFBQSxNQU5uQkMsR0FNbUIsUUFObkJBLEdBTW1CO0FBQUEsTUFMbkJDLEdBS21CLFFBTG5CQSxHQUttQjtBQUFBLE1BSm5CQyxLQUltQixRQUpuQkEsS0FJbUI7QUFBQSxNQUhuQkMsY0FHbUIsUUFIbkJBLGNBR21CO0FBQUEsTUFGbkJDLGFBRW1CLFFBRm5CQSxhQUVtQjtBQUFBLE1BRG5CQyxRQUNtQixRQURuQkEsUUFDbUI7QUFDcEIsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLCtEQUVDO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELHdEQUtDO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQWtDLFdBQUssRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQsK0RBUUM7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQsOERBV0M7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBbUMsVUFBSSxFQUFDLFFBQXhDO0FBQWlELHVCQUFjLEdBQS9EO0FBQW1FLHVCQUFjLEtBQWpGO0FBQXVGLHVCQUFjLElBQXJHO0FBQTBHLHVCQUFjLE9BQXhIO0FBQWdJLFdBQUssRUFBQyxzREFBdEk7QUFBNkwsY0FBUSxFQUFDO0FBQXRNO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRCx3REFjQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWtCQSxDQTdCRDs7S0FBTVIsTTtBQStCU0EscUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsQ0FBRCxDQURWO0FBQUEsTUFDakJDLEtBRGlCO0FBQUEsTUFDVkMsUUFEVTs7QUFFeEIsTUFBTUosUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0csS0FBRCxFQUFXO0FBQzNCQyxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0MscUVBQUMsMERBQUQ7QUFBQSwyQkFDQyxxRUFBQyw0REFBRDtBQUFBLDZCQUNDLHFFQUFDLDBEQUFEO0FBQ0MsV0FBRyxFQUFFLENBRE47QUFFQyxXQUFHLEVBQUUsRUFGTjtBQUdDLGFBQUssRUFBRUEsS0FIUjtBQUlDLGVBQU8sRUFBRUgsUUFBUTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWFBLENBbkJEOztHQUFNQyxVOztLQUFBQSxVO0FBcUJTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuNTg3Yjc5ODgwZjQ5Y2RjMGM0ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3ROb2RlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBJU2xpZGVyUHJvcHMge1xyXG5cdGRpc2FibGVkOiBib29sZWFuO1xyXG5cdG1hcmtzOiBSZWNvcmQ8bnVtYmVyLCBSZWFjdE5vZGUgfCBzdHJpbmc+O1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdHJhbmdlOiBib29sZWFuO1xyXG5cdHRvb2x0aXBWaXNpYmxlOiBib29sZWFuO1xyXG5cdG9uQWZ0ZXJDaGFuZ2U6ICgpID0+IHt9O1xyXG5cdG9uQ2hhbmdlOiAoKSA9PiB7fTtcclxufVxyXG5cclxuY29uc3QgU2xpZGVyID0gKFxyXG5cdHtcclxuXHRcdGRpc2FibGVkPSBmYWxzZSxcclxuXHRcdG1hcmtzLFxyXG5cdFx0bWF4LFxyXG5cdFx0bWluLFxyXG5cdFx0cmFuZ2UsXHJcblx0XHR0b29sdGlwVmlzaWJsZSxcclxuXHRcdG9uQWZ0ZXJDaGFuZ2UsXHJcblx0XHRvbkNoYW5nZVxyXG5cdH06IElTbGlkZXJQcm9wcykgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFudC1zbGlkZXJcIj5cclxuXHRcdFx06rKM7J207KeAIOuwsOqyvVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFudC1zbGlkZXItcmFpbFwiLz5cclxuXHJcblx0XHRcdOywqOyYpOuluCDqsozsnbTsp4BcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbnQtc2xpZGVyLXRyYWNrXCIgc3R5bGU9XCJsZWZ0OiAwJTsgcmlnaHQ6IGF1dG87IHdpZHRoOiA3NCU7XCIvPlxyXG5cclxuXHRcdFx06rKM7J207KeAIOykkeqwhCDsiqTthZ1cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbnQtc2xpZGVyLXN0ZXBcIi8+XHJcblxyXG5cdFx0XHTqsozsnbTsp4Ag7Luo7Yq466Gk65+sXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYW50LXNsaWRlci1oYW5kbGVcIiByb2xlPVwic2xpZGVyXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgYXJpYS12YWx1ZW5vdz1cIjc0XCIgYXJpYS1kaXNhYmxlZD1cImZhbHNlXCIgc3R5bGU9XCJsZWZ0OiA3NCU7IHJpZ2h0OiBhdXRvOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCIgdGFiSW5kZXg9XCIwXCIvPlxyXG5cclxuXHRcdFx06rKM7J207KeAIO2FjeyKpO2KuFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFudC1zbGlkZXItbWFya1wiLz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcclxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBDb250ZW50cyBmcm9tIFwiQGNvbXBvbmVudHMvY29udGVudHNcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQGNvbXBvbmVudHMvc2xpZGVyXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2xpZGVyUGFnZSA9ICgpID0+IHtcclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcblx0XHRzZXRWYWx1ZSh2YWx1ZSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxDb250ZW50cz5cclxuXHRcdFx0XHQ8U2xpZGVyXHJcblx0XHRcdFx0XHRtaW49ezF9XHJcblx0XHRcdFx0XHRtYXg9ezIwfVxyXG5cdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0b25DaGFnZT17b25DaGFuZ2UoKX1cclxuXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Db250ZW50cz5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlclBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=