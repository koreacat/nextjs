webpackHotUpdate_N_E("pages/slider",{

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
/* harmony import */ var _util_getInteger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/getInteger */ "./src/util/getInteger.ts");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\pages\\slider.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var SliderPage = function SliderPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(50),
      value = _useState[0],
      setValue = _useState[1];

  var onChange = function onChange(value) {
    setValue(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setInterval(function () {
      setValue(Object(_util_getInteger__WEBPACK_IMPORTED_MODULE_5__["getInteger"])(100));
    }, 3000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: '300px',
          height: '10px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          min: 1,
          max: 20,
          value: value,
          onChange: onChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, _this);
};

_s(SliderPage, "hul/mE5zy4zStrNfGUT99M+cXV4=");

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

/***/ }),

/***/ "./src/util/getInteger.ts":
/*!********************************!*\
  !*** ./src/util/getInteger.ts ***!
  \********************************/
/*! exports provided: getInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInteger", function() { return getInteger; });
var getInteger = function getInteger(max) {
  return Math.floor(Math.random() * max);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NsaWRlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlsL2dldEludGVnZXIudHMiXSwibmFtZXMiOlsiU2xpZGVyUGFnZSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJnZXRJbnRlZ2VyIiwid2lkdGgiLCJoZWlnaHQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNqQkMsS0FEaUI7QUFBQSxNQUNWQyxRQURVOztBQUV4QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRixLQUFELEVBQVc7QUFDM0JDLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0EsR0FGRDs7QUFJQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2ZDLGVBQVcsQ0FBQyxZQUFNO0FBQ2pCSCxjQUFRLENBQUNJLG1FQUFVLENBQUMsR0FBRCxDQUFYLENBQVI7QUFDQSxLQUZVLEVBRVIsSUFGUSxDQUFYO0FBR0EsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLHNCQUNDLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0MscUVBQUMsNERBQUQ7QUFBQSw2QkFFQztBQUFLLGFBQUssRUFBRTtBQUFDQyxlQUFLLEVBQUUsT0FBUjtBQUFpQkMsZ0JBQU0sRUFBRTtBQUF6QixTQUFaO0FBQUEsK0JBQ0MscUVBQUMsMERBQUQ7QUFDQyxhQUFHLEVBQUUsQ0FETjtBQUVDLGFBQUcsRUFBRSxFQUZOO0FBR0MsZUFBSyxFQUFFUCxLQUhSO0FBSUMsa0JBQVEsRUFBRUU7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFnQkEsQ0E1QkQ7O0dBQU1KLFU7O0tBQUFBLFU7QUE4QlNBLHlFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBTyxJQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRyxHQUFELEVBQWlCO0FBQzFDLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JILEdBQTNCLENBQVA7QUFDQSxDQUZNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci4zODhkYTI4NTVhNzU4NmU4OThmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBDb250ZW50cyBmcm9tIFwiQGNvbXBvbmVudHMvY29udGVudHNcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQGNvbXBvbmVudHMvc2xpZGVyXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Z2V0SW50ZWdlcn0gZnJvbSBcIi4uL3V0aWwvZ2V0SW50ZWdlclwiO1xyXG5cclxuY29uc3QgU2xpZGVyUGFnZSA9ICgpID0+IHtcclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDUwKTtcclxuXHRjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWUodmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHNldFZhbHVlKGdldEludGVnZXIoMTAwKSlcclxuXHRcdH0sIDMwMDApXHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PENvbnRlbnRzPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6ICczMDBweCcsIGhlaWdodDogJzEwcHgnfX0+XHJcblx0XHRcdFx0XHQ8U2xpZGVyXHJcblx0XHRcdFx0XHRcdG1pbj17MX1cclxuXHRcdFx0XHRcdFx0bWF4PXsyMH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC9Db250ZW50cz5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlclBhZ2U7XHJcbiIsImV4cG9ydCBjb25zdCBnZXRJbnRlZ2VyID0gKG1heDogbnVtYmVyKSA9PiB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heClcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==