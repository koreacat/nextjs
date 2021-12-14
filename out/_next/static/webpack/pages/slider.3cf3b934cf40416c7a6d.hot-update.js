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
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/header */ "./src/components/common/header/index.tsx");
/* harmony import */ var _components_fixedHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/fixedHeader */ "./src/components/common/fixedHeader/index.tsx");
/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/slider */ "./src/components/common/slider/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\pages\\slider.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var SliderPage = function SliderPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(3),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    min: 1,
    max: 10,
    step: 1
  }),
      options = _useState2[0],
      setOptions = _useState2[1];

  var min = options.min,
      max = options.max,
      step = options.step;

  var onChange = function onChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;
    setOptions(_objectSpread(_objectSpread({}, options), {}, Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, Number(value))));
  };

  var marksDifficult = {
    1: '낮음',
    4: '보통',
    10: '높음'
  };
  var marksSalary = {
    1000: '1,000 만원',
    10000: '1억원 이상'
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fixedHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "min"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          name: "min",
          value: min,
          onChange: onChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "max"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          name: "max",
          value: max,
          onChange: onChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "step"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          name: "step",
          value: step,
          onChange: onChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "value : "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: value,
          onChange: function onChange(e) {
            return setValue(Number(e.target.value));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: '262px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_slider__WEBPACK_IMPORTED_MODULE_6__["default"], {
          disabled: false,
          min: min,
          max: max,
          step: step,
          value: value,
          marks: marksDifficult,
          toolTip: function toolTip(value) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: value
            }, void 0, false);
          },
          onChange: function onChange(value) {
            return setValue(value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(SliderPage, "4KG9X2DEmKeJTsuEntZJj6T+0vk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NsaWRlci50c3giXSwibmFtZXMiOlsiU2xpZGVyUGFnZSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJOdW1iZXIiLCJtYXJrc0RpZmZpY3VsdCIsIm1hcmtzU2FsYXJ5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsQ0FBRCxDQURYO0FBQUEsTUFDaEJDLEtBRGdCO0FBQUEsTUFDVEMsUUFEUzs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQztBQUNyQ0csT0FBRyxFQUFFLENBRGdDO0FBRXJDQyxPQUFHLEVBQUUsRUFGZ0M7QUFHckNDLFFBQUksRUFBRTtBQUgrQixHQUFELENBRmY7QUFBQSxNQUVoQkMsT0FGZ0I7QUFBQSxNQUVQQyxVQUZPOztBQUFBLE1BUWhCSixHQVJnQixHQVFFRyxPQVJGLENBUWhCSCxHQVJnQjtBQUFBLE1BUVhDLEdBUlcsR0FRRUUsT0FSRixDQVFYRixHQVJXO0FBQUEsTUFRTkMsSUFSTSxHQVFFQyxPQVJGLENBUU5ELElBUk07O0FBVXZCLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUFBLG9CQUNBQSxDQUFDLENBQUNDLE1BREY7QUFBQSxRQUNmVCxLQURlLGFBQ2ZBLEtBRGU7QUFBQSxRQUNSVSxJQURRLGFBQ1JBLElBRFE7QUFFdEJKLGNBQVUsaUNBQ0xELE9BREsseUpBRVBLLElBRk8sRUFFQUMsTUFBTSxDQUFDWCxLQUFELENBRk4sR0FBVjtBQUlELEdBTkQ7O0FBUUEsTUFBTVksY0FBYyxHQUFHO0FBQ3JCLE9BQUcsSUFEa0I7QUFFckIsT0FBRyxJQUZrQjtBQUdyQixRQUFJO0FBSGlCLEdBQXZCO0FBTUEsTUFBTUMsV0FBVyxHQUFHO0FBQ2xCLFVBQU0sVUFEWTtBQUVsQixXQUFPO0FBRlcsR0FBcEI7QUFLQSxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLHFFQUFDLDREQUFEO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxjQUFJLEVBQUMsS0FGUDtBQUdFLGVBQUssRUFBRVgsR0FIVDtBQUlFLGtCQUFRLEVBQUVLO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVdFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsY0FBSSxFQUFDLEtBRlA7QUFHRSxlQUFLLEVBQUVKLEdBSFQ7QUFJRSxrQkFBUSxFQUFFSTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFxQkU7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLGVBQUssRUFBRUgsSUFIVDtBQUlFLGtCQUFRLEVBQUVHO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkYsZUErQkU7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU8sZUFBSyxFQUFFUCxLQUFkO0FBQXFCLGtCQUFRLEVBQUUsa0JBQUFRLENBQUM7QUFBQSxtQkFBSVAsUUFBUSxDQUFDVSxNQUFNLENBQUNILENBQUMsQ0FBQ0MsTUFBRixDQUFTVCxLQUFWLENBQVAsQ0FBWjtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLG9CQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0JGLGVBcUNFO0FBQUssYUFBSyxFQUFFO0FBQUNjLGVBQUssRUFBRTtBQUFSLFNBQVo7QUFBQSwrQkFDRSxxRUFBQywwREFBRDtBQUNFLGtCQUFRLEVBQUUsS0FEWjtBQUVFLGFBQUcsRUFBRVosR0FGUDtBQUdFLGFBQUcsRUFBRUMsR0FIUDtBQUlFLGNBQUksRUFBRUMsSUFKUjtBQUtFLGVBQUssRUFBRUosS0FMVDtBQU1FLGVBQUssRUFBRVksY0FOVDtBQU9FLGlCQUFPLEVBQUUsaUJBQUFaLEtBQUs7QUFBQSxnQ0FBSTtBQUFBLHdCQUFHQTtBQUFILDZCQUFKO0FBQUEsV0FQaEI7QUFRRSxrQkFBUSxFQUFFLGtCQUFBQSxLQUFLO0FBQUEsbUJBQUlDLFFBQVEsQ0FBQ0QsS0FBRCxDQUFaO0FBQUE7QUFSakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5REQsQ0F0RkQ7O0dBQU1GLFU7O0tBQUFBLFU7QUF3RlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci4zY2YzYjkzNGNmNDA0MTZjN2E2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkBjb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgRml4ZWRIZWFkZXIgZnJvbSBcIkBjb21wb25lbnRzL2ZpeGVkSGVhZGVyXCI7XHJcbmltcG9ydCBDb250ZW50cyBmcm9tIFwiQGNvbXBvbmVudHMvY29udGVudHNcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQGNvbXBvbmVudHMvc2xpZGVyXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2xpZGVyUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDMpO1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKHtcclxuICAgIG1pbjogMSxcclxuICAgIG1heDogMTAsXHJcbiAgICBzdGVwOiAxXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHttaW4sIG1heCwgc3RlcH0gPSBvcHRpb25zO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7dmFsdWUsIG5hbWV9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRPcHRpb25zKHtcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgW25hbWVdOiBOdW1iZXIodmFsdWUpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFya3NEaWZmaWN1bHQgPSB7XHJcbiAgICAxOiAn64Ku7J2MJyxcclxuICAgIDQ6ICfrs7TthrUnLFxyXG4gICAgMTA6ICfrhpLsnYwnXHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXJrc1NhbGFyeSA9IHtcclxuICAgIDEwMDA6ICcxLDAwMCDrp4zsm5AnLFxyXG4gICAgMTAwMDA6ICcx7Ja17JuQIOydtOyDgSdcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyLz5cclxuICAgICAgPEZpeGVkSGVhZGVyLz5cclxuICAgICAgPENvbnRlbnRzPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJtaW5cIlxyXG4gICAgICAgICAgICB2YWx1ZT17bWlufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+bWF4PC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwibWF4XCJcclxuICAgICAgICAgICAgdmFsdWU9e21heH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPnN0ZXA8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzdGVwXCJcclxuICAgICAgICAgICAgdmFsdWU9e3N0ZXB9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj52YWx1ZSA6IDwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfS8+XHJcbiAgICAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcyNjJweCd9fT5cclxuICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBtaW49e21pbn1cclxuICAgICAgICAgICAgbWF4PXttYXh9XHJcbiAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgbWFya3M9e21hcmtzRGlmZmljdWx0fVxyXG4gICAgICAgICAgICB0b29sVGlwPXt2YWx1ZSA9PiA8Pnt2YWx1ZX08Lz59XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRWYWx1ZSh2YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9Db250ZW50cz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlclBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=