webpackHotUpdate_N_E("pages/introduction",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/components/speechBubble/speechBubble.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/components/speechBubble/speechBubble.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".speechBubble_hidden__3iHjZ {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.speechBubble_dot__3aQhq {\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #3ed160;\n  animation: speechBubble_opacityRepeat__1pcvu 1.5s infinite linear;\n}\n.speechBubble_dot__3aQhq + circle {\n  animation-delay: 0.2s;\n}\n.speechBubble_dot__3aQhq + circle + circle {\n  animation-delay: 0.4s;\n}\n\n@keyframes speechBubble_opacityRepeat__1pcvu {\n  0% {\n    opacity: 1;\n  }\n  10% {\n    opacity: 0.3;\n  }\n  30% {\n    opacity: 0.3;\n  }\n  60% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://speechBubble.module.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AALA;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBC+Gc;ED9Gd,iEAAA;AAQJ;AANI;EACI,qBAAA;AAQR;AANQ;EACI,qBAAA;AAQZ;;AAHA;EACI;IACI,UAAA;EAMN;EAJE;IACI,YAAA;EAMN;EAJE;IACI,YAAA;EAMN;EAJE;IACI,UAAA;EAMN;AACF","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.dot {\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #3ed160;\n  animation: opacityRepeat 1.5s infinite linear;\n}\n.dot + circle {\n  animation-delay: 0.2s;\n}\n.dot + circle + circle {\n  animation-delay: 0.4s;\n}\n\n@keyframes opacityRepeat {\n  0% {\n    opacity: 1;\n  }\n  10% {\n    opacity: 0.3;\n  }\n  30% {\n    opacity: 0.3;\n  }\n  60% {\n    opacity: 1;\n  }\n}","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "speechBubble_hidden__3iHjZ",
	"dot": "speechBubble_dot__3aQhq",
	"opacityRepeat": "speechBubble_opacityRepeat__1pcvu"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/components/speechBubble/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/components/speechBubble/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _speechBubble_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speechBubble.module.scss */ "./src/components/components/speechBubble/speechBubble.module.scss");
/* harmony import */ var _speechBubble_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_speechBubble_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\components\\speechBubble\\index.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_speechBubble_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var SpeechBubble = function SpeechBubble() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      width: "148",
      height: "76",
      viewBox: "0 0 148 76",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M132.76 67.5244C132.76 67.5244 123.63 76 110.284 76H107.805H93.4605H33.0696C14.8783 76 0 61.191 0 42.9998V33.0693C0 14.878 14.8783 -0.000244141 33.0696 -0.000244141H107.805C125.997 -0.000244141 140.875 14.878 140.875 33.0693V42.9998C140.875 51.8975 139.61 60.451 142.123 65.5883C144.635 70.7255 148 71.4656 148 71.4656C148 71.4656 140.178 72.8854 132.76 67.5244Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        className: cx('dot'),
        cx: "42",
        cy: "38",
        r: "8",
        fill: "#3ED160"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        className: cx('dot'),
        cx: "70",
        cy: "38",
        r: "8",
        fill: "#3ED160"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        className: cx('dot'),
        cx: "98",
        cy: "38",
        r: "8",
        fill: "#3ED160"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, _this);
};

_c = SpeechBubble;
/* harmony default export */ __webpack_exports__["default"] = (SpeechBubble);

var _c;

$RefreshReg$(_c, "SpeechBubble");

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

/***/ "./src/components/components/speechBubble/speechBubble.module.scss":
/*!*************************************************************************!*\
  !*** ./src/components/components/speechBubble/speechBubble.module.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./speechBubble.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/components/speechBubble/speechBubble.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./speechBubble.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/components/speechBubble/speechBubble.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./speechBubble.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/components/speechBubble/speechBubble.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

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
/* harmony import */ var _onOffCover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../onOffCover */ "./src/components/onOffCover/index.tsx");
/* harmony import */ var _count_type02__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../count/type02 */ "./src/components/count/type02/index.tsx");
/* harmony import */ var _components_speechBubble__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/speechBubble */ "./src/components/components/speechBubble/index.tsx");


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
      lineNumber: 12,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('trendsWrap'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_count_type02__WEBPACK_IMPORTED_MODULE_4__["default"], {
        count: 450,
        unitText: '사'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_count_type02__WEBPACK_IMPORTED_MODULE_4__["default"], {
        count: 30,
        unitText: '만'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_count_type02__WEBPACK_IMPORTED_MODULE_4__["default"], {
        count: 1,
        unitText: '위'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('questionWrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_speechBubble__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mySelfWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('onOffWrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_onOffCover__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('processWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('resultWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('guideWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('lineGraphWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('barGraphWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('interviewWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('cardBannerWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9zcGVlY2hCdWJibGUvc3BlZWNoQnViYmxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL3NwZWVjaEJ1YmJsZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvc3BlZWNoQnViYmxlL3NwZWVjaEJ1YmJsZS5tb2R1bGUuc2Nzcz8zMWYxIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJTcGVlY2hCdWJibGUiLCJJbnRyb2R1Y3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxnQ0FBZ0MscUJBQXFCLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsOEJBQThCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHVCQUF1Qix3QkFBd0Isc0VBQXNFLEdBQUcscUNBQXFDLDBCQUEwQixHQUFHLDhDQUE4QywwQkFBMEIsR0FBRyxrREFBa0QsUUFBUSxpQkFBaUIsS0FBSyxTQUFTLG1CQUFtQixLQUFLLFNBQVMsbUJBQW1CLEtBQUssU0FBUyxpQkFBaUIsS0FBSyxHQUFHLE9BQU8seUxBQXlMLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssMENBQTBDLDBEQUEwRCxv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QUFFQSxFQUFFLENBQUMsZUFBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJELGVBa0JDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsY0FBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJELGVBbUJDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsZUFBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJELGVBb0JDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsZ0JBQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXdCQSxDQXpCRDs7S0FBTUssWTtBQTJCU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW50cm9kdWN0aW9uLmQ2MzExNzQ1YTBjYWRkOWNjYmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3BlZWNoQnViYmxlX2hpZGRlbl9fM2lIaloge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5zcGVlY2hCdWJibGVfZG90X18zYVFocSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzNlZDE2MDtcXG4gIGFuaW1hdGlvbjogc3BlZWNoQnViYmxlX29wYWNpdHlSZXBlYXRfXzFwY3Z1IDEuNXMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG4uc3BlZWNoQnViYmxlX2RvdF9fM2FRaHEgKyBjaXJjbGUge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbn1cXG4uc3BlZWNoQnViYmxlX2RvdF9fM2FRaHEgKyBjaXJjbGUgKyBjaXJjbGUge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwZWVjaEJ1YmJsZV9vcGFjaXR5UmVwZWF0X18xcGN2dSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICB9XFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICB9XFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3BlZWNoQnViYmxlLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1ZKOztBQUxBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkMrR2M7RUQ5R2QsaUVBQUE7QUFRSjtBQU5JO0VBQ0kscUJBQUE7QUFRUjtBQU5RO0VBQ0kscUJBQUE7QUFRWjs7QUFIQTtFQUNJO0lBQ0ksVUFBQTtFQU1OO0VBSkU7SUFDSSxZQUFBO0VBTU47RUFKRTtJQUNJLFlBQUE7RUFNTjtFQUpFO0lBQ0ksVUFBQTtFQU1OO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgJ1VURi04JztcXHJcXG5cXHJcXG4vLyB2YXJpYWJsZXNcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvcGF0aC5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuLy8gbWl4aW5zXFxyXFxuQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XFxyXFxuXFxyXFxuLy8gaGlkZGVuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIG1hcmdpbjogLTFweDtcXHJcXG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXCIsXCIuaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4uZG90IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjM2VkMTYwO1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5UmVwZWF0IDEuNXMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG4uZG90ICsgY2lyY2xlIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcXG59XFxuLmRvdCArIGNpcmNsZSArIGNpcmNsZSB7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eVJlcGVhdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICB9XFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICB9XFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cIixcIiRDX1dISVRFOiAjZmZmO1xcclxcbiRDX0JMQUNLOiAjMDAwO1xcclxcbiRDX0dVSURFTElORTogIzBmZjtcXHJcXG5cXHJcXG4vLyBKT0JEQSBCTEFDS1xcclxcbiRDX0pPQkRBX0JMQUNLOiAjMTIxNjE5O1xcclxcblxcclxcbi8vIEpPQkRBIFdISVRFXFxyXFxuJENfSk9CREFfV0hJVEU6ICNmOWY5ZmE7XFxyXFxuXFxyXFxuLy8gR1JFRU5cXHJcXG4kQ19HUkVFTl8zMDogI2VmZmRmMztcXHJcXG4kQ19HUkVFTl80MDogI2UwZjllNDtcXHJcXG4kQ19HUkVFTl81MDogI2QwZjVkYTtcXHJcXG4kQ19HUkVFTl82MDogI2MzZjJjZDtcXHJcXG4kQ19HUkVFTl83MDogI2IzZWVjMTtcXHJcXG4kQ19HUkVFTl84MDogI2EyZWJiNDtcXHJcXG4kQ19HUkVFTl85MDogIzkyZTZhMztcXHJcXG4kQ19HUkVFTl8xMDA6ICM2Y2RkODM7XFxyXFxuJENfR1JFRU5fMjAwOiAjNTJjNTY0O1xcclxcbiRDX0dSRUVOXzMwMDogIzQxYWM0ZDtcXHJcXG4kQ19HUkVFTl80MDA6ICMzYzhlNDI7XFxyXFxuJENfR1JFRU5fNTAwOiAjMzc3NTM4O1xcclxcblxcclxcbi8vIFlFTExPV1xcclxcbiRDX1lFTExPV18zMDogI2ZmZmVmMjtcXHJcXG4kQ19ZRUxMT1dfNDA6ICNmZmZkZTU7XFxyXFxuJENfWUVMTE9XXzUwOiAjZmVmY2Q4O1xcclxcbiRDX1lFTExPV182MDogI2ZlZmNjYjtcXHJcXG4kQ19ZRUxMT1dfNzA6ICNmZWY5YmQ7XFxyXFxuJENfWUVMTE9XXzgwOiAjZmVmOGIxO1xcclxcbiRDX1lFTExPV185MDogI2ZkZjY5ZTtcXHJcXG4kQ19ZRUxMT1dfMTAwOiAjZmNmMTZjO1xcclxcbiRDX1lFTExPV18yMDA6ICNlN2RhNGI7XFxyXFxuJENfWUVMTE9XXzMwMDogI2Q4Y2EyYztcXHJcXG4kQ19ZRUxMT1dfNDAwOiAjYjNhODJhO1xcclxcbiRDX1lFTExPV181MDA6ICM5MzhhMjk7XFxyXFxuXFxyXFxuLy8gU0tZXFxyXFxuJENfU0tZXzMwOiAjZjNmZGZjO1xcclxcbiRDX1NLWV80MDogI2U5ZjlmOTtcXHJcXG4kQ19TS1lfNTA6ICNkY2Y3ZjY7XFxyXFxuJENfU0tZXzYwOiAjZDFmNWYzO1xcclxcbiRDX1NLWV83MDogI2M1ZjFlZjtcXHJcXG4kQ19TS1lfODA6ICNiYmVmZWQ7XFxyXFxuJENfU0tZXzkwOiAjYWZlY2VhO1xcclxcbiRDX1NLWV8xMDA6ICM3YWRlZGE7XFxyXFxuJENfU0tZXzIwMDogIzVlYzdjMztcXHJcXG4kQ19TS1lfMzAwOiAjNDZiMmFmO1xcclxcbiRDX1NLWV80MDA6ICM0MDkzOTA7XFxyXFxuJENfU0tZXzUwMDogIzNhNzk3NztcXHJcXG5cXHJcXG4vLyBMSU1FXFxyXFxuJENfTElNRV8zMDogI2Y5ZmZlYjtcXHJcXG4kQ19MSU1FXzQwOiAjZjNmZWRmO1xcclxcbiRDX0xJTUVfNTA6ICNlZGZkZDI7XFxyXFxuJENfTElNRV82MDogI2U3ZmNjNjtcXHJcXG4kQ19MSU1FXzcwOiAjZTJmYmI5O1xcclxcbiRDX0xJTUVfODA6ICNkY2ZhYWQ7XFxyXFxuJENfTElNRV85MDogI2QwZjg5NDtcXHJcXG4kQ19MSU1FXzEwMDogI2JmZWY3YjtcXHJcXG4kQ19MSU1FXzIwMDogI2E0ZDk1YTtcXHJcXG4kQ19MSU1FXzMwMDogIzhlYzkzZDtcXHJcXG4kQ19MSU1FXzQwMDogIzc5YTgzNztcXHJcXG4kQ19MSU1FXzUwMDogIzY2OGEzMztcXHJcXG5cXHJcXG4vLyBQVVJQTEVcXHJcXG4kQ19QVVJQTEVfMzA6ICNmNWYyZmQ7XFxyXFxuJENfUFVSUExFXzQwOiAjZjJlZGZjO1xcclxcbiRDX1BVUlBMRV81MDogI2VlZTdmYztcXHJcXG4kQ19QVVJQTEVfNjA6ICNlOGUwZmI7XFxyXFxuJENfUFVSUExFXzcwOiAjZTBkNWY5O1xcclxcbiRDX1BVUlBMRV84MDogI2Q1YzdmNztcXHJcXG4kQ19QVVJQTEVfOTA6ICNjN2I0ZjQ7XFxyXFxuJENfUFVSUExFXzEwMDogI2I0OWJmMDtcXHJcXG4kQ19QVVJQTEVfMjAwOiAjOTM3NWRiO1xcclxcbiRDX1BVUlBMRV8zMDA6ICM3NzUzY2E7XFxyXFxuJENfUFVSUExFXzQwMDogIzYyM2ZiMztcXHJcXG4kQ19QVVJQTEVfNTAwOiAjNTUzYjk0O1xcclxcblxcclxcbi8vIEJMVUVcXHJcXG4kQ19CTFVFXzMwOiAjZTFlN2Y4O1xcclxcbiRDX0JMVUVfNDA6ICNjM2QxZWY7XFxyXFxuJENfQkxVRV81MDogI2E3YjllNztcXHJcXG4kQ19CTFVFXzYwOiAjOGJhM2RmO1xcclxcbiRDX0JMVUVfNzA6ICM3MThkZDc7XFxyXFxuJENfQkxVRV84MDogIzU4NzhjZjtcXHJcXG4kQ19CTFVFXzkwOiAjMzE1ZmM3O1xcclxcbiRDX0JMVUVfMTAwOiAjMmI1M2FlO1xcclxcbiRDX0JMVUVfMjAwOiAjMzA0YTg5O1xcclxcbiRDX0JMVUVfMzAwOiAjMmM0MTcwO1xcclxcbiRDX0JMVUVfNDAwOiAjMjkzODVkO1xcclxcbiRDX0JMVUVfNTAwOiAjMjUzMTRkO1xcclxcblxcclxcbi8vIEdSQVlcXHJcXG4kQ19DT09MX0dSQVlfMzA6ICNmNGY0ZjU7XFxyXFxuJENfQ09PTF9HUkFZXzQwOiAjZTdlOGVhO1xcclxcbiRDX0NPT0xfR1JBWV81MDogI2NmZDFkNTtcXHJcXG4kQ19DT09MX0dSQVlfNjA6ICM5ZmE0YWI7XFxyXFxuJENfQ09PTF9HUkFZXzcwOiAjNjU2YTcxO1xcclxcbiRDX0NPT0xfR1JBWV84MDogIzQ0NDc0YjtcXHJcXG4kQ19DT09MX0dSQVlfOTA6ICMyNTI4MmI7XFxyXFxuXFxyXFxuJENfV0FSTV9HUkFZXzMwOiAjZjRmNGY0O1xcclxcbiRDX1dBUk1fR1JBWV80MDogI2U4ZThlODtcXHJcXG4kQ19XQVJNX0dSQVlfNTA6ICNkMWQxZDE7XFxyXFxuJENfV0FSTV9HUkFZXzYwOiAjYTRhNGE0O1xcclxcbiRDX1dBUk1fR1JBWV83MDogIzZhNmE2YTtcXHJcXG4kQ19XQVJNX0dSQVlfODA6ICM0NzQ3NDc7XFxyXFxuJENfV0FSTV9HUkFZXzkwOiAjMjMyMzIzO1xcclxcblxcclxcbi8vIFdBUk5JTkdcXHJcXG4kQ19XQVJOSU5HOiAjZjZhNjA5O1xcclxcbiRDX1dBUk5JTkdfREFSSzogI2U4OTgwNjtcXHJcXG4kQ19XQVJOSU5HX0xJR0hUOiAjZmZiYzFmO1xcclxcblxcclxcbi8vIFBPU0lUSVZFXFxyXFxuJENfUE9TSVRJVkU6ICM2Y2RkODM7XFxyXFxuJENfUE9TSVRJVkVfREFSSzogIzNlZDE2MDtcXHJcXG4kQ19QT1NJVElWRV9MSUdIVDogIzkyZTZhMztcXHJcXG5cXHJcXG4vLyBORUdBVElWRVxcclxcbiRDX05FR0FUSVZFOiAjZmI0ZTRlO1xcclxcbiRDX05FR0FUSVZFX0RBUks6ICNlOTNjM2M7XFxyXFxuJENfTkVHQVRJVkVfTElHSFQ6ICNmZjYyNjI7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZGVuXCI6IFwic3BlZWNoQnViYmxlX2hpZGRlbl9fM2lIalpcIixcblx0XCJkb3RcIjogXCJzcGVlY2hCdWJibGVfZG90X18zYVFocVwiLFxuXHRcIm9wYWNpdHlSZXBlYXRcIjogXCJzcGVlY2hCdWJibGVfb3BhY2l0eVJlcGVhdF9fMXBjdnVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3BlZWNoQnViYmxlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgU3BlZWNoQnViYmxlID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdDxzdmcgd2lkdGg9XCIxNDhcIiBoZWlnaHQ9XCI3NlwiIHZpZXdCb3g9XCIwIDAgMTQ4IDc2XCI+XHJcblx0XHRcdFx0PHBhdGggZD1cIk0xMzIuNzYgNjcuNTI0NEMxMzIuNzYgNjcuNTI0NCAxMjMuNjMgNzYgMTEwLjI4NCA3NkgxMDcuODA1SDkzLjQ2MDVIMzMuMDY5NkMxNC44NzgzIDc2IDAgNjEuMTkxIDAgNDIuOTk5OFYzMy4wNjkzQzAgMTQuODc4IDE0Ljg3ODMgLTAuMDAwMjQ0MTQxIDMzLjA2OTYgLTAuMDAwMjQ0MTQxSDEwNy44MDVDMTI1Ljk5NyAtMC4wMDAyNDQxNDEgMTQwLjg3NSAxNC44NzggMTQwLjg3NSAzMy4wNjkzVjQyLjk5OThDMTQwLjg3NSA1MS44OTc1IDEzOS42MSA2MC40NTEgMTQyLjEyMyA2NS41ODgzQzE0NC42MzUgNzAuNzI1NSAxNDggNzEuNDY1NiAxNDggNzEuNDY1NkMxNDggNzEuNDY1NiAxNDAuMTc4IDcyLjg4NTQgMTMyLjc2IDY3LjUyNDRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG5cdFx0XHRcdDxjaXJjbGUgY2xhc3NOYW1lPXtjeCgnZG90Jyl9IGN4PVwiNDJcIiBjeT1cIjM4XCIgcj1cIjhcIiBmaWxsPVwiIzNFRDE2MFwiLz5cclxuXHRcdFx0XHQ8Y2lyY2xlIGNsYXNzTmFtZT17Y3goJ2RvdCcpfSBjeD1cIjcwXCIgY3k9XCIzOFwiIHI9XCI4XCIgZmlsbD1cIiMzRUQxNjBcIi8+XHJcblx0XHRcdFx0PGNpcmNsZSBjbGFzc05hbWU9e2N4KCdkb3QnKX0gY3g9XCI5OFwiIGN5PVwiMzhcIiByPVwiOFwiIGZpbGw9XCIjM0VEMTYwXCIvPlxyXG5cdFx0XHQ8L3N2Zz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWVjaEJ1YmJsZTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9zcGVlY2hCdWJibGUubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3NwZWVjaEJ1YmJsZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3NwZWVjaEJ1YmJsZS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW50cm9kdWN0aW9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBPbk9mZkNvdmVyIGZyb20gXCIuLi9vbk9mZkNvdmVyXCI7XHJcbmltcG9ydCBDb3VudFR5cGUwMiBmcm9tIFwiLi4vY291bnQvdHlwZTAyXCI7XHJcbmltcG9ydCBTcGVlY2hCdWJibGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3BlZWNoQnViYmxlXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgSW50cm9kdWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFubmVyV3JhcCcpfT48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd0cmVuZHNXcmFwJyl9PlxyXG5cdFx0XHRcdDxDb3VudFR5cGUwMiBjb3VudD17NDUwfSB1bml0VGV4dD17J+yCrCd9Lz5cclxuXHRcdFx0XHQ8Q291bnRUeXBlMDIgY291bnQ9ezMwfSB1bml0VGV4dD17J+unjCd9Lz5cclxuXHRcdFx0XHQ8Q291bnRUeXBlMDIgY291bnQ9ezF9IHVuaXRUZXh0PXsn7JyEJ30vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdxdWVzdGlvbldyYXAnKX0+XHJcblx0XHRcdFx0PFNwZWVjaEJ1YmJsZS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ215U2VsZldyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnb25PZmZXcmFwJyl9PlxyXG5cdFx0XHRcdDxPbk9mZkNvdmVyLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgncHJvY2Vzc1dyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgncmVzdWx0V3JhcCcpfT48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdndWlkZVdyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnbGluZUdyYXBoV3JhcCcpfT48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdiYXJHcmFwaFdyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnaW50ZXJ2aWV3V3JhcCcpfT48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjYXJkQmFubmVyV3JhcCcpfT48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvZHVjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==