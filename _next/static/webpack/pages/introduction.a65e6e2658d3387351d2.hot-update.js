webpackHotUpdate_N_E("pages/introduction",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/introduction/introduction.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/introduction/introduction.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".introduction_hidden__1yW7t {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.introduction_bannerWrap__25ybW {\n  height: 620px;\n  background: #92e6a3;\n}\n\n.introduction_trendsWrap__e-VXI {\n  height: 1104px;\n}\n\n.introduction_questionWrap__33fU1 {\n  height: 680px;\n  background: #6cdd83;\n}\n\n.introduction_mySelfWrap__1aVT0 {\n  height: 959px;\n}\n\n.introduction_onOffWrap__epmSR {\n  height: 1273px;\n  background: #474747;\n}\n\n.introduction_processWrap__3LNMj {\n  height: 960px;\n}\n\n.introduction_resultWrap__3HvS3 {\n  height: 602px;\n  background: #6cdd83;\n}\n\n.introduction_guideWrap__3iLkj {\n  height: 990px;\n}\n\n.introduction_lineGraphWrap__2xMFg {\n  height: 968px;\n}", "",{"version":3,"sources":["webpack://../../../styles/common.scss","webpack://introduction.module.scss","webpack://../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AADA;EACI,aAAA;EACA,mBC+Ge;AD3GnB;;AADA;EACI,cAAA;AAIJ;;AADA;EACI,aAAA;EACA,mBCCU;ADGd;;AADA;EACI,aAAA;AAIJ;;AADA;EACI,cAAA;EACA,mBCkFa;AD9EjB;;AADA;EACI,aAAA;AAIJ;;AADA;EACI,aAAA;EACA,mBCjBU;ADqBd;;AADA;EACI,aAAA;AAIJ;;AADA;EACI,aAAA;AAIJ","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.bannerWrap {\n  height: 620px;\n  background: #92e6a3;\n}\n\n.trendsWrap {\n  height: 1104px;\n}\n\n.questionWrap {\n  height: 680px;\n  background: #6cdd83;\n}\n\n.mySelfWrap {\n  height: 959px;\n}\n\n.onOffWrap {\n  height: 1273px;\n  background: #474747;\n}\n\n.processWrap {\n  height: 960px;\n}\n\n.resultWrap {\n  height: 602px;\n  background: #6cdd83;\n}\n\n.guideWrap {\n  height: 990px;\n}\n\n.lineGraphWrap {\n  height: 968px;\n}","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "introduction_hidden__1yW7t",
	"bannerWrap": "introduction_bannerWrap__25ybW",
	"trendsWrap": "introduction_trendsWrap__e-VXI",
	"questionWrap": "introduction_questionWrap__33fU1",
	"mySelfWrap": "introduction_mySelfWrap__1aVT0",
	"onOffWrap": "introduction_onOffWrap__epmSR",
	"processWrap": "introduction_processWrap__3LNMj",
	"resultWrap": "introduction_resultWrap__3HvS3",
	"guideWrap": "introduction_guideWrap__3iLkj",
	"lineGraphWrap": "introduction_lineGraphWrap__2xMFg"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/introduction/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/introduction/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _introduction_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduction.module.scss */ "./src/components/introduction/introduction.module.scss");
/* harmony import */ var _introduction_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_introduction_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\introduction\\index.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_introduction_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Introduction = function Introduction() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('bannerWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('trendsWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('questionWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mySelfWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('onOffWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('processWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('resultWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('guideWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('lineGraphWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('barGraphWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, _this);
};

_c = Introduction;
/* harmony default export */ __webpack_exports__["default"] = (Introduction);

var _c;

$RefreshReg$(_c, "Introduction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW50cm9kdWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZ0NBQWdDLHFCQUFxQix1QkFBdUIsZUFBZSxnQkFBZ0IsaUJBQWlCLDJCQUEyQixHQUFHLHFDQUFxQyxrQkFBa0Isd0JBQXdCLEdBQUcscUNBQXFDLG1CQUFtQixHQUFHLHVDQUF1QyxrQkFBa0Isd0JBQXdCLEdBQUcscUNBQXFDLGtCQUFrQixHQUFHLG9DQUFvQyxtQkFBbUIsd0JBQXdCLEdBQUcsc0NBQXNDLGtCQUFrQixHQUFHLHFDQUFxQyxrQkFBa0Isd0JBQXdCLEdBQUcsb0NBQW9DLGtCQUFrQixHQUFHLHdDQUF3QyxrQkFBa0IsR0FBRyxPQUFPLG1MQUFtTCxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLDBDQUEwQywwREFBMEQsb0NBQW9DLHlDQUF5Qyw2Q0FBNkMsOEJBQThCLHlCQUF5QiwyQkFBMkIsbUJBQW1CLG9CQUFvQixxQkFBcUIsK0JBQStCLEtBQUssZ0JBQWdCLHFCQUFxQix1QkFBdUIsZUFBZSxnQkFBZ0IsaUJBQWlCLDJCQUEyQixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLGdCQUFnQixtQkFBbUIsd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRyxrQkFBa0IsbUJBQW1CLHVCQUF1QixrREFBa0Qsa0RBQWtELHlDQUF5Qyx5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDJDQUEyQywwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLHFDQUFxQyx1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHVDQUF1Qyx3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDJDQUEyQywwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLHVDQUF1Qyx3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDRDQUE0Qyw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDZCQUE2QixpQ0FBaUMsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsMENBQTBDLDZCQUE2Qiw4QkFBOEIsNENBQTRDLDhCQUE4QiwrQkFBK0IsNENBQTRDLDhCQUE4QiwrQkFBK0IsbUJBQW1CO0FBQ2gvSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLGdFQUFoQixDQUFYOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUIsc0JBQ0M7QUFBSyxhQUFTLEVBQUVKLEVBQUUsQ0FBQyxNQUFELENBQWxCO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxZQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsWUFBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUFHQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLGNBQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhELGVBSUM7QUFBSyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxZQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRCxlQUtDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsV0FBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQsZUFNQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLGFBQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5ELGVBT0M7QUFBSyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxZQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRCxlQVFDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsV0FBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQsZUFTQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLGVBQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRELGVBVUM7QUFBSyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxjQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRCxlQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRCxlQVlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWdCQSxDQWpCRDs7S0FBTUksWTtBQW1CU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW50cm9kdWN0aW9uLmE2NWU2ZTI2NThkMzM4NzM1MWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaW50cm9kdWN0aW9uX2hpZGRlbl9fMXlXN3Qge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5pbnRyb2R1Y3Rpb25fYmFubmVyV3JhcF9fMjV5Ylcge1xcbiAgaGVpZ2h0OiA2MjBweDtcXG4gIGJhY2tncm91bmQ6ICM5MmU2YTM7XFxufVxcblxcbi5pbnRyb2R1Y3Rpb25fdHJlbmRzV3JhcF9fZS1WWEkge1xcbiAgaGVpZ2h0OiAxMTA0cHg7XFxufVxcblxcbi5pbnRyb2R1Y3Rpb25fcXVlc3Rpb25XcmFwX18zM2ZVMSB7XFxuICBoZWlnaHQ6IDY4MHB4O1xcbiAgYmFja2dyb3VuZDogIzZjZGQ4MztcXG59XFxuXFxuLmludHJvZHVjdGlvbl9teVNlbGZXcmFwX18xYVZUMCB7XFxuICBoZWlnaHQ6IDk1OXB4O1xcbn1cXG5cXG4uaW50cm9kdWN0aW9uX29uT2ZmV3JhcF9fZXBtU1Ige1xcbiAgaGVpZ2h0OiAxMjczcHg7XFxuICBiYWNrZ3JvdW5kOiAjNDc0NzQ3O1xcbn1cXG5cXG4uaW50cm9kdWN0aW9uX3Byb2Nlc3NXcmFwX18zTE5NaiB7XFxuICBoZWlnaHQ6IDk2MHB4O1xcbn1cXG5cXG4uaW50cm9kdWN0aW9uX3Jlc3VsdFdyYXBfXzNIdlMzIHtcXG4gIGhlaWdodDogNjAycHg7XFxuICBiYWNrZ3JvdW5kOiAjNmNkZDgzO1xcbn1cXG5cXG4uaW50cm9kdWN0aW9uX2d1aWRlV3JhcF9fM2lMa2oge1xcbiAgaGVpZ2h0OiA5OTBweDtcXG59XFxuXFxuLmludHJvZHVjdGlvbl9saW5lR3JhcGhXcmFwX18yeE1GZyB7XFxuICBoZWlnaHQ6IDk2OHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vaW50cm9kdWN0aW9uLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1ZKOztBQURBO0VBQ0ksYUFBQTtFQUNBLG1CQytHZTtBRDNHbkI7O0FBREE7RUFDSSxjQUFBO0FBSUo7O0FBREE7RUFDSSxhQUFBO0VBQ0EsbUJDQ1U7QURHZDs7QUFEQTtFQUNJLGFBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxtQkNrRmE7QUQ5RWpCOztBQURBO0VBQ0ksYUFBQTtBQUlKOztBQURBO0VBQ0ksYUFBQTtFQUNBLG1CQ2pCVTtBRHFCZDs7QUFEQTtFQUNJLGFBQUE7QUFJSjs7QUFEQTtFQUNJLGFBQUE7QUFJSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCAnVVRGLTgnO1xcclxcblxcclxcbi8vIHZhcmlhYmxlc1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycy5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9wYXRoLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4vLyBtaXhpbnNcXHJcXG5AaW1wb3J0ICcuL21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4vLyBoaWRkZW5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbn1cXHJcXG5cIixcIi5oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5iYW5uZXJXcmFwIHtcXG4gIGhlaWdodDogNjIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjOTJlNmEzO1xcbn1cXG5cXG4udHJlbmRzV3JhcCB7XFxuICBoZWlnaHQ6IDExMDRweDtcXG59XFxuXFxuLnF1ZXN0aW9uV3JhcCB7XFxuICBoZWlnaHQ6IDY4MHB4O1xcbiAgYmFja2dyb3VuZDogIzZjZGQ4MztcXG59XFxuXFxuLm15U2VsZldyYXAge1xcbiAgaGVpZ2h0OiA5NTlweDtcXG59XFxuXFxuLm9uT2ZmV3JhcCB7XFxuICBoZWlnaHQ6IDEyNzNweDtcXG4gIGJhY2tncm91bmQ6ICM0NzQ3NDc7XFxufVxcblxcbi5wcm9jZXNzV3JhcCB7XFxuICBoZWlnaHQ6IDk2MHB4O1xcbn1cXG5cXG4ucmVzdWx0V3JhcCB7XFxuICBoZWlnaHQ6IDYwMnB4O1xcbiAgYmFja2dyb3VuZDogIzZjZGQ4MztcXG59XFxuXFxuLmd1aWRlV3JhcCB7XFxuICBoZWlnaHQ6IDk5MHB4O1xcbn1cXG5cXG4ubGluZUdyYXBoV3JhcCB7XFxuICBoZWlnaHQ6IDk2OHB4O1xcbn1cIixcIiRDX1dISVRFOiAjZmZmO1xcclxcbiRDX0JMQUNLOiAjMDAwO1xcclxcbiRDX0dVSURFTElORTogIzBmZjtcXHJcXG5cXHJcXG4vLyBKT0JEQSBCTEFDS1xcclxcbiRDX0pPQkRBX0JMQUNLOiAjMTIxNjE5O1xcclxcblxcclxcbi8vIEpPQkRBIFdISVRFXFxyXFxuJENfSk9CREFfV0hJVEU6ICNmOWY5ZmE7XFxyXFxuXFxyXFxuLy8gR1JFRU5cXHJcXG4kQ19HUkVFTl8zMDogI2VmZmRmMztcXHJcXG4kQ19HUkVFTl80MDogI2UwZjllNDtcXHJcXG4kQ19HUkVFTl81MDogI2QwZjVkYTtcXHJcXG4kQ19HUkVFTl82MDogI2MzZjJjZDtcXHJcXG4kQ19HUkVFTl83MDogI2IzZWVjMTtcXHJcXG4kQ19HUkVFTl84MDogI2EyZWJiNDtcXHJcXG4kQ19HUkVFTl85MDogIzkyZTZhMztcXHJcXG4kQ19HUkVFTl8xMDA6ICM2Y2RkODM7XFxyXFxuJENfR1JFRU5fMjAwOiAjNTJjNTY0O1xcclxcbiRDX0dSRUVOXzMwMDogIzQxYWM0ZDtcXHJcXG4kQ19HUkVFTl80MDA6ICMzYzhlNDI7XFxyXFxuJENfR1JFRU5fNTAwOiAjMzc3NTM4O1xcclxcblxcclxcbi8vIFlFTExPV1xcclxcbiRDX1lFTExPV18zMDogI2ZmZmVmMjtcXHJcXG4kQ19ZRUxMT1dfNDA6ICNmZmZkZTU7XFxyXFxuJENfWUVMTE9XXzUwOiAjZmVmY2Q4O1xcclxcbiRDX1lFTExPV182MDogI2ZlZmNjYjtcXHJcXG4kQ19ZRUxMT1dfNzA6ICNmZWY5YmQ7XFxyXFxuJENfWUVMTE9XXzgwOiAjZmVmOGIxO1xcclxcbiRDX1lFTExPV185MDogI2ZkZjY5ZTtcXHJcXG4kQ19ZRUxMT1dfMTAwOiAjZmNmMTZjO1xcclxcbiRDX1lFTExPV18yMDA6ICNlN2RhNGI7XFxyXFxuJENfWUVMTE9XXzMwMDogI2Q4Y2EyYztcXHJcXG4kQ19ZRUxMT1dfNDAwOiAjYjNhODJhO1xcclxcbiRDX1lFTExPV181MDA6ICM5MzhhMjk7XFxyXFxuXFxyXFxuLy8gU0tZXFxyXFxuJENfU0tZXzMwOiAjZjNmZGZjO1xcclxcbiRDX1NLWV80MDogI2U5ZjlmOTtcXHJcXG4kQ19TS1lfNTA6ICNkY2Y3ZjY7XFxyXFxuJENfU0tZXzYwOiAjZDFmNWYzO1xcclxcbiRDX1NLWV83MDogI2M1ZjFlZjtcXHJcXG4kQ19TS1lfODA6ICNiYmVmZWQ7XFxyXFxuJENfU0tZXzkwOiAjYWZlY2VhO1xcclxcbiRDX1NLWV8xMDA6ICM3YWRlZGE7XFxyXFxuJENfU0tZXzIwMDogIzVlYzdjMztcXHJcXG4kQ19TS1lfMzAwOiAjNDZiMmFmO1xcclxcbiRDX1NLWV80MDA6ICM0MDkzOTA7XFxyXFxuJENfU0tZXzUwMDogIzNhNzk3NztcXHJcXG5cXHJcXG4vLyBMSU1FXFxyXFxuJENfTElNRV8zMDogI2Y5ZmZlYjtcXHJcXG4kQ19MSU1FXzQwOiAjZjNmZWRmO1xcclxcbiRDX0xJTUVfNTA6ICNlZGZkZDI7XFxyXFxuJENfTElNRV82MDogI2U3ZmNjNjtcXHJcXG4kQ19MSU1FXzcwOiAjZTJmYmI5O1xcclxcbiRDX0xJTUVfODA6ICNkY2ZhYWQ7XFxyXFxuJENfTElNRV85MDogI2QwZjg5NDtcXHJcXG4kQ19MSU1FXzEwMDogI2JmZWY3YjtcXHJcXG4kQ19MSU1FXzIwMDogI2E0ZDk1YTtcXHJcXG4kQ19MSU1FXzMwMDogIzhlYzkzZDtcXHJcXG4kQ19MSU1FXzQwMDogIzc5YTgzNztcXHJcXG4kQ19MSU1FXzUwMDogIzY2OGEzMztcXHJcXG5cXHJcXG4vLyBQVVJQTEVcXHJcXG4kQ19QVVJQTEVfMzA6ICNmNWYyZmQ7XFxyXFxuJENfUFVSUExFXzQwOiAjZjJlZGZjO1xcclxcbiRDX1BVUlBMRV81MDogI2VlZTdmYztcXHJcXG4kQ19QVVJQTEVfNjA6ICNlOGUwZmI7XFxyXFxuJENfUFVSUExFXzcwOiAjZTBkNWY5O1xcclxcbiRDX1BVUlBMRV84MDogI2Q1YzdmNztcXHJcXG4kQ19QVVJQTEVfOTA6ICNjN2I0ZjQ7XFxyXFxuJENfUFVSUExFXzEwMDogI2I0OWJmMDtcXHJcXG4kQ19QVVJQTEVfMjAwOiAjOTM3NWRiO1xcclxcbiRDX1BVUlBMRV8zMDA6ICM3NzUzY2E7XFxyXFxuJENfUFVSUExFXzQwMDogIzYyM2ZiMztcXHJcXG4kQ19QVVJQTEVfNTAwOiAjNTUzYjk0O1xcclxcblxcclxcbi8vIEJMVUVcXHJcXG4kQ19CTFVFXzMwOiAjZTFlN2Y4O1xcclxcbiRDX0JMVUVfNDA6ICNjM2QxZWY7XFxyXFxuJENfQkxVRV81MDogI2E3YjllNztcXHJcXG4kQ19CTFVFXzYwOiAjOGJhM2RmO1xcclxcbiRDX0JMVUVfNzA6ICM3MThkZDc7XFxyXFxuJENfQkxVRV84MDogIzU4NzhjZjtcXHJcXG4kQ19CTFVFXzkwOiAjMzE1ZmM3O1xcclxcbiRDX0JMVUVfMTAwOiAjMmI1M2FlO1xcclxcbiRDX0JMVUVfMjAwOiAjMzA0YTg5O1xcclxcbiRDX0JMVUVfMzAwOiAjMmM0MTcwO1xcclxcbiRDX0JMVUVfNDAwOiAjMjkzODVkO1xcclxcbiRDX0JMVUVfNTAwOiAjMjUzMTRkO1xcclxcblxcclxcbi8vIEdSQVlcXHJcXG4kQ19DT09MX0dSQVlfMzA6ICNmNGY0ZjU7XFxyXFxuJENfQ09PTF9HUkFZXzQwOiAjZTdlOGVhO1xcclxcbiRDX0NPT0xfR1JBWV81MDogI2NmZDFkNTtcXHJcXG4kQ19DT09MX0dSQVlfNjA6ICM5ZmE0YWI7XFxyXFxuJENfQ09PTF9HUkFZXzcwOiAjNjU2YTcxO1xcclxcbiRDX0NPT0xfR1JBWV84MDogIzQ0NDc0YjtcXHJcXG4kQ19DT09MX0dSQVlfOTA6ICMyNTI4MmI7XFxyXFxuXFxyXFxuJENfV0FSTV9HUkFZXzMwOiAjZjRmNGY0O1xcclxcbiRDX1dBUk1fR1JBWV80MDogI2U4ZThlODtcXHJcXG4kQ19XQVJNX0dSQVlfNTA6ICNkMWQxZDE7XFxyXFxuJENfV0FSTV9HUkFZXzYwOiAjYTRhNGE0O1xcclxcbiRDX1dBUk1fR1JBWV83MDogIzZhNmE2YTtcXHJcXG4kQ19XQVJNX0dSQVlfODA6ICM0NzQ3NDc7XFxyXFxuJENfV0FSTV9HUkFZXzkwOiAjMjMyMzIzO1xcclxcblxcclxcbi8vIFdBUk5JTkdcXHJcXG4kQ19XQVJOSU5HOiAjZjZhNjA5O1xcclxcbiRDX1dBUk5JTkdfREFSSzogI2U4OTgwNjtcXHJcXG4kQ19XQVJOSU5HX0xJR0hUOiAjZmZiYzFmO1xcclxcblxcclxcbi8vIFBPU0lUSVZFXFxyXFxuJENfUE9TSVRJVkU6ICM2Y2RkODM7XFxyXFxuJENfUE9TSVRJVkVfREFSSzogIzNlZDE2MDtcXHJcXG4kQ19QT1NJVElWRV9MSUdIVDogIzkyZTZhMztcXHJcXG5cXHJcXG4vLyBORUdBVElWRVxcclxcbiRDX05FR0FUSVZFOiAjZmI0ZTRlO1xcclxcbiRDX05FR0FUSVZFX0RBUks6ICNlOTNjM2M7XFxyXFxuJENfTkVHQVRJVkVfTElHSFQ6ICNmZjYyNjI7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZGVuXCI6IFwiaW50cm9kdWN0aW9uX2hpZGRlbl9fMXlXN3RcIixcblx0XCJiYW5uZXJXcmFwXCI6IFwiaW50cm9kdWN0aW9uX2Jhbm5lcldyYXBfXzI1eWJXXCIsXG5cdFwidHJlbmRzV3JhcFwiOiBcImludHJvZHVjdGlvbl90cmVuZHNXcmFwX19lLVZYSVwiLFxuXHRcInF1ZXN0aW9uV3JhcFwiOiBcImludHJvZHVjdGlvbl9xdWVzdGlvbldyYXBfXzMzZlUxXCIsXG5cdFwibXlTZWxmV3JhcFwiOiBcImludHJvZHVjdGlvbl9teVNlbGZXcmFwX18xYVZUMFwiLFxuXHRcIm9uT2ZmV3JhcFwiOiBcImludHJvZHVjdGlvbl9vbk9mZldyYXBfX2VwbVNSXCIsXG5cdFwicHJvY2Vzc1dyYXBcIjogXCJpbnRyb2R1Y3Rpb25fcHJvY2Vzc1dyYXBfXzNMTk1qXCIsXG5cdFwicmVzdWx0V3JhcFwiOiBcImludHJvZHVjdGlvbl9yZXN1bHRXcmFwX18zSHZTM1wiLFxuXHRcImd1aWRlV3JhcFwiOiBcImludHJvZHVjdGlvbl9ndWlkZVdyYXBfXzNpTGtqXCIsXG5cdFwibGluZUdyYXBoV3JhcFwiOiBcImludHJvZHVjdGlvbl9saW5lR3JhcGhXcmFwX18yeE1GZ1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbnRyb2R1Y3Rpb24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdiYW5uZXJXcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3RyZW5kc1dyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgncXVlc3Rpb25XcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ215U2VsZldyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnb25PZmZXcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3Byb2Nlc3NXcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3Jlc3VsdFdyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnZ3VpZGVXcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2xpbmVHcmFwaFdyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFyR3JhcGhXcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2PjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9kdWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9