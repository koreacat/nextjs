webpackHotUpdate_N_E("pages/introduction",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/count/type02/type02.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/count/type02/type02.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".type02_hidden__w0EKL {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.type02_wrap__u7GQQ {\n  display: flex;\n}\n\n.type02_countWrap__2ZABe {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 132px;\n  padding: 0 6px;\n}\n\n.type02_count__3YyVq {\n  overflow: hidden;\n  display: flex;\n  height: 100%;\n  padding-left: 1px;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 140px;\n  font-weight: 900;\n  line-height: 132px;\n  color: #6cdd83;\n}\n\n.type02_unitText__20Lf4 {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: 100%;\n  padding-bottom: 10px;\n  font-family: NotoSanskr, sans-serif;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 28px;\n  color: #6cdd83;\n}\n\n.type02_number__1UIHL {\n  height: 1320px;\n  transition: all 2s cubic-bezier(0.65, 0.05, 0.29, 0.93);\n}\n.type02_number__1UIHL .type02_digit__2F5V4 {\n  display: block;\n  width: 90px;\n  height: 132px;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://type02.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AALA;EACI,aAAA;AAQJ;;AALA;EACI,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,aAAA;EACA,cAAA;AAQJ;;AALA;EACI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,mCCZa;EDab,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,cELU;AFad;;AALA;EACI,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,YAAA;EACA,oBAAA;EACA,mCCzBa;ED0Bb,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cElBU;AF0Bd;;AALA;EACI,cAAA;EACA,uDAAA;AAQJ;AANI;EACI,cAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;AAQR","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.wrap {\n  display: flex;\n}\n\n.countWrap {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 132px;\n  padding: 0 6px;\n}\n\n.count {\n  overflow: hidden;\n  display: flex;\n  height: 100%;\n  padding-left: 1px;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 140px;\n  font-weight: 900;\n  line-height: 132px;\n  color: #6cdd83;\n}\n\n.unitText {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: 100%;\n  padding-bottom: 10px;\n  font-family: NotoSanskr, sans-serif;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 28px;\n  color: #6cdd83;\n}\n\n.number {\n  height: 1320px;\n  transition: all 2s cubic-bezier(0.65, 0.05, 0.29, 0.93);\n}\n.number .digit {\n  display: block;\n  width: 90px;\n  height: 132px;\n  text-align: center;\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_HEIGHT: 64px;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_HEIGHT: 300px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: NotoSanskr, sans-serif;\r\n$F_MONTSERRAT: Montserrat, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;\r\n","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "type02_hidden__w0EKL",
	"wrap": "type02_wrap__u7GQQ",
	"countWrap": "type02_countWrap__2ZABe",
	"count": "type02_count__3YyVq",
	"unitText": "type02_unitText__20Lf4",
	"number": "type02_number__1UIHL",
	"digit": "type02_digit__2F5V4"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/count/type02/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/count/type02/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type02_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type02.module.scss */ "./src/components/count/type02/type02.module.scss");
/* harmony import */ var _type02_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_type02_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\count\\type02\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_type02_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

var Number = function Number(props) {
  _s();

  var num = props.num,
      delay = props.delay;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    transform: 'translateY(132px)'
  }),
      style = _useState[0],
      setStyle = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      setStyle({
        transform: "translateY(-".concat(num * 132, "px)")
      });
    }, delay);
  }, [num]);
  var digitEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (value, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('digit'),
      children: index
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('number'),
    style: style,
    children: digitEl
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, _this);
};

_s(Number, "KsaZFgk4jerAfN8iEAZOf1nGd/g=");

_c = Number;

var CountType02 = function CountType02(_ref) {
  var count = _ref.count,
      unitText = _ref.unitText;
  var countArr = count.toString().split('');
  var arr = Array.from({
    length: countArr.length
  }, function () {
    return '0';
  });

  for (var i = 0; i < countArr.length; i++) {
    arr[arr.length - countArr.length + i] = countArr[i];
  }

  var NumberEl = arr.map(function (num, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Number, {
      num: parseInt(num),
      delay: (arr.length - 1 - index) * 300
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 10
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('countWrap'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('count'),
        children: NumberEl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('unitText'),
        children: unitText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }, _this);
};

_c2 = CountType02;
/* harmony default export */ __webpack_exports__["default"] = (CountType02);

var _c, _c2;

$RefreshReg$(_c, "Number");
$RefreshReg$(_c2, "CountType02");

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

/***/ "./src/components/count/type02/type02.module.scss":
/*!********************************************************!*\
  !*** ./src/components/count/type02/type02.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./type02.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/count/type02/type02.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./type02.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/count/type02/type02.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./type02.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/count/type02/type02.module.scss");

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
      lineNumber: 11,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('trendsWrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_count_type02__WEBPACK_IMPORTED_MODULE_4__["default"], {
        count: 450
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('questionWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mySelfWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('onOffWrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_onOffCover__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('processWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('resultWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('guideWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('lineGraphWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('barGraphWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('interviewWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('cardBannerWrap')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY291bnQvdHlwZTAyL3R5cGUwMi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY291bnQvdHlwZTAyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY291bnQvdHlwZTAyL3R5cGUwMi5tb2R1bGUuc2Nzcz9kOTU5Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJOdW1iZXIiLCJwcm9wcyIsIm51bSIsImRlbGF5IiwidXNlU3RhdGUiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInNldFN0eWxlIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImRpZ2l0RWwiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiQ291bnRUeXBlMDIiLCJjb3VudCIsInVuaXRUZXh0IiwiY291bnRBcnIiLCJ0b1N0cmluZyIsInNwbGl0IiwiYXJyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiaSIsIk51bWJlckVsIiwicGFyc2VJbnQiLCJJbnRyb2R1Y3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQkFBMEIscUJBQXFCLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHLDhCQUE4QixrQkFBa0Isd0JBQXdCLDhCQUE4QixrQkFBa0IsbUJBQW1CLEdBQUcsMEJBQTBCLHFCQUFxQixrQkFBa0IsaUJBQWlCLHNCQUFzQix3Q0FBd0MscUJBQXFCLHFCQUFxQix1QkFBdUIsbUJBQW1CLEdBQUcsNkJBQTZCLGtCQUFrQiwwQkFBMEIsNEJBQTRCLGlCQUFpQix5QkFB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YnBhY2svcGFnZXMvaW50cm9kdWN0aW9uLjE2MzhjYThlNmI5MWMwYjE5MzlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudHlwZTAyX2hpZGRlbl9fdzBFS0wge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi50eXBlMDJfd3JhcF9fdTdHUVEge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnR5cGUwMl9jb3VudFdyYXBfXzJaQUJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTMycHg7XFxuICBwYWRkaW5nOiAwIDZweDtcXG59XFxuXFxuLnR5cGUwMl9jb3VudF9fM1l5VnEge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDFweDtcXG4gIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc2tyLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsaW5lLWhlaWdodDogMTMycHg7XFxuICBjb2xvcjogIzZjZGQ4MztcXG59XFxuXFxuLnR5cGUwMl91bml0VGV4dF9fMjBMZjQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LWZhbWlseTogTm90b1NhbnNrciwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGNvbG9yOiAjNmNkZDgzO1xcbn1cXG5cXG4udHlwZTAyX251bWJlcl9fMVVJSEwge1xcbiAgaGVpZ2h0OiAxMzIwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMjksIDAuOTMpO1xcbn1cXG4udHlwZTAyX251bWJlcl9fMVVJSEwgLnR5cGUwMl9kaWdpdF9fMkY1VjQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogOTBweDtcXG4gIGhlaWdodDogMTMycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly90eXBlMDIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1ZKOztBQUxBO0VBQ0ksYUFBQTtBQVFKOztBQUxBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVFKOztBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNDWmE7RURhYixnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRUxVO0FGYWQ7O0FBTEE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQ3pCYTtFRDBCYixnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNFbEJVO0FGMEJkOztBQUxBO0VBQ0ksY0FBQTtFQUNBLHVEQUFBO0FBUUo7QUFOSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgJ1VURi04JztcXHJcXG5cXHJcXG4vLyB2YXJpYWJsZXNcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvcGF0aC5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuLy8gbWl4aW5zXFxyXFxuQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XFxyXFxuXFxyXFxuLy8gaGlkZGVuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIG1hcmdpbjogLTFweDtcXHJcXG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXCIsXCIuaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4ud3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY291bnRXcmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTMycHg7XFxuICBwYWRkaW5nOiAwIDZweDtcXG59XFxuXFxuLmNvdW50IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICBmb250LWZhbWlseTogTm90b1NhbnNrciwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTQwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEzMnB4O1xcbiAgY29sb3I6ICM2Y2RkODM7XFxufVxcblxcbi51bml0VGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc2tyLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgY29sb3I6ICM2Y2RkODM7XFxufVxcblxcbi5udW1iZXIge1xcbiAgaGVpZ2h0OiAxMzIwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMjksIDAuOTMpO1xcbn1cXG4ubnVtYmVyIC5kaWdpdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAxMzJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsXCIvLyBoZWFkZXIgaGVpZ2h0XFxyXFxuJE1JTl9XSURUSDogMTE2OHB4O1xcclxcbiRIRUFERVJfSEVJR0hUOiA2NHB4O1xcclxcbiRDT05URU5UU19XSURUSDogMTEyMHB4O1xcclxcbiRGT09URVJfSEVJR0hUOiAzMDBweDtcXHJcXG5cXHJcXG4vLyBmb250XFxyXFxuJEZfTk9UT19TQU5TX0tSOiBOb3RvU2Fuc2tyLCBzYW5zLXNlcmlmO1xcclxcbiRGX01PTlRTRVJSQVQ6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gei1pbmRleFxcclxcbiRaX0lOREVYX0JBU0lDOiAxMDtcXHJcXG4kWl9JTkRFWF9GSVhFRDogMTAwO1xcclxcblwiLFwiJENfV0hJVEU6ICNmZmY7XFxyXFxuJENfQkxBQ0s6ICMwMDA7XFxyXFxuJENfR1VJREVMSU5FOiAjMGZmO1xcclxcblxcclxcbi8vIEpPQkRBIEJMQUNLXFxyXFxuJENfSk9CREFfQkxBQ0s6ICMxMjE2MTk7XFxyXFxuXFxyXFxuLy8gSk9CREEgV0hJVEVcXHJcXG4kQ19KT0JEQV9XSElURTogI2Y5ZjlmYTtcXHJcXG5cXHJcXG4vLyBHUkVFTlxcclxcbiRDX0dSRUVOXzMwOiAjZWZmZGYzO1xcclxcbiRDX0dSRUVOXzQwOiAjZTBmOWU0O1xcclxcbiRDX0dSRUVOXzUwOiAjZDBmNWRhO1xcclxcbiRDX0dSRUVOXzYwOiAjYzNmMmNkO1xcclxcbiRDX0dSRUVOXzcwOiAjYjNlZWMxO1xcclxcbiRDX0dSRUVOXzgwOiAjYTJlYmI0O1xcclxcbiRDX0dSRUVOXzkwOiAjOTJlNmEzO1xcclxcbiRDX0dSRUVOXzEwMDogIzZjZGQ4MztcXHJcXG4kQ19HUkVFTl8yMDA6ICM1MmM1NjQ7XFxyXFxuJENfR1JFRU5fMzAwOiAjNDFhYzRkO1xcclxcbiRDX0dSRUVOXzQwMDogIzNjOGU0MjtcXHJcXG4kQ19HUkVFTl81MDA6ICMzNzc1Mzg7XFxyXFxuXFxyXFxuLy8gWUVMTE9XXFxyXFxuJENfWUVMTE9XXzMwOiAjZmZmZWYyO1xcclxcbiRDX1lFTExPV180MDogI2ZmZmRlNTtcXHJcXG4kQ19ZRUxMT1dfNTA6ICNmZWZjZDg7XFxyXFxuJENfWUVMTE9XXzYwOiAjZmVmY2NiO1xcclxcbiRDX1lFTExPV183MDogI2ZlZjliZDtcXHJcXG4kQ19ZRUxMT1dfODA6ICNmZWY4YjE7XFxyXFxuJENfWUVMTE9XXzkwOiAjZmRmNjllO1xcclxcbiRDX1lFTExPV18xMDA6ICNmY2YxNmM7XFxyXFxuJENfWUVMTE9XXzIwMDogI2U3ZGE0YjtcXHJcXG4kQ19ZRUxMT1dfMzAwOiAjZDhjYTJjO1xcclxcbiRDX1lFTExPV180MDA6ICNiM2E4MmE7XFxyXFxuJENfWUVMTE9XXzUwMDogIzkzOGEyOTtcXHJcXG5cXHJcXG4vLyBTS1lcXHJcXG4kQ19TS1lfMzA6ICNmM2ZkZmM7XFxyXFxuJENfU0tZXzQwOiAjZTlmOWY5O1xcclxcbiRDX1NLWV81MDogI2RjZjdmNjtcXHJcXG4kQ19TS1lfNjA6ICNkMWY1ZjM7XFxyXFxuJENfU0tZXzcwOiAjYzVmMWVmO1xcclxcbiRDX1NLWV84MDogI2JiZWZlZDtcXHJcXG4kQ19TS1lfOTA6ICNhZmVjZWE7XFxyXFxuJENfU0tZXzEwMDogIzdhZGVkYTtcXHJcXG4kQ19TS1lfMjAwOiAjNWVjN2MzO1xcclxcbiRDX1NLWV8zMDA6ICM0NmIyYWY7XFxyXFxuJENfU0tZXzQwMDogIzQwOTM5MDtcXHJcXG4kQ19TS1lfNTAwOiAjM2E3OTc3O1xcclxcblxcclxcbi8vIExJTUVcXHJcXG4kQ19MSU1FXzMwOiAjZjlmZmViO1xcclxcbiRDX0xJTUVfNDA6ICNmM2ZlZGY7XFxyXFxuJENfTElNRV81MDogI2VkZmRkMjtcXHJcXG4kQ19MSU1FXzYwOiAjZTdmY2M2O1xcclxcbiRDX0xJTUVfNzA6ICNlMmZiYjk7XFxyXFxuJENfTElNRV84MDogI2RjZmFhZDtcXHJcXG4kQ19MSU1FXzkwOiAjZDBmODk0O1xcclxcbiRDX0xJTUVfMTAwOiAjYmZlZjdiO1xcclxcbiRDX0xJTUVfMjAwOiAjYTRkOTVhO1xcclxcbiRDX0xJTUVfMzAwOiAjOGVjOTNkO1xcclxcbiRDX0xJTUVfNDAwOiAjNzlhODM3O1xcclxcbiRDX0xJTUVfNTAwOiAjNjY4YTMzO1xcclxcblxcclxcbi8vIFBVUlBMRVxcclxcbiRDX1BVUlBMRV8zMDogI2Y1ZjJmZDtcXHJcXG4kQ19QVVJQTEVfNDA6ICNmMmVkZmM7XFxyXFxuJENfUFVSUExFXzUwOiAjZWVlN2ZjO1xcclxcbiRDX1BVUlBMRV82MDogI2U4ZTBmYjtcXHJcXG4kQ19QVVJQTEVfNzA6ICNlMGQ1Zjk7XFxyXFxuJENfUFVSUExFXzgwOiAjZDVjN2Y3O1xcclxcbiRDX1BVUlBMRV85MDogI2M3YjRmNDtcXHJcXG4kQ19QVVJQTEVfMTAwOiAjYjQ5YmYwO1xcclxcbiRDX1BVUlBMRV8yMDA6ICM5Mzc1ZGI7XFxyXFxuJENfUFVSUExFXzMwMDogIzc3NTNjYTtcXHJcXG4kQ19QVVJQTEVfNDAwOiAjNjIzZmIzO1xcclxcbiRDX1BVUlBMRV81MDA6ICM1NTNiOTQ7XFxyXFxuXFxyXFxuLy8gQkxVRVxcclxcbiRDX0JMVUVfMzA6ICNlMWU3Zjg7XFxyXFxuJENfQkxVRV80MDogI2MzZDFlZjtcXHJcXG4kQ19CTFVFXzUwOiAjYTdiOWU3O1xcclxcbiRDX0JMVUVfNjA6ICM4YmEzZGY7XFxyXFxuJENfQkxVRV83MDogIzcxOGRkNztcXHJcXG4kQ19CTFVFXzgwOiAjNTg3OGNmO1xcclxcbiRDX0JMVUVfOTA6ICMzMTVmYzc7XFxyXFxuJENfQkxVRV8xMDA6ICMyYjUzYWU7XFxyXFxuJENfQkxVRV8yMDA6ICMzMDRhODk7XFxyXFxuJENfQkxVRV8zMDA6ICMyYzQxNzA7XFxyXFxuJENfQkxVRV80MDA6ICMyOTM4NWQ7XFxyXFxuJENfQkxVRV81MDA6ICMyNTMxNGQ7XFxyXFxuXFxyXFxuLy8gR1JBWVxcclxcbiRDX0NPT0xfR1JBWV8zMDogI2Y0ZjRmNTtcXHJcXG4kQ19DT09MX0dSQVlfNDA6ICNlN2U4ZWE7XFxyXFxuJENfQ09PTF9HUkFZXzUwOiAjY2ZkMWQ1O1xcclxcbiRDX0NPT0xfR1JBWV82MDogIzlmYTRhYjtcXHJcXG4kQ19DT09MX0dSQVlfNzA6ICM2NTZhNzE7XFxyXFxuJENfQ09PTF9HUkFZXzgwOiAjNDQ0NzRiO1xcclxcbiRDX0NPT0xfR1JBWV85MDogIzI1MjgyYjtcXHJcXG5cXHJcXG4kQ19XQVJNX0dSQVlfMzA6ICNmNGY0ZjQ7XFxyXFxuJENfV0FSTV9HUkFZXzQwOiAjZThlOGU4O1xcclxcbiRDX1dBUk1fR1JBWV81MDogI2QxZDFkMTtcXHJcXG4kQ19XQVJNX0dSQVlfNjA6ICNhNGE0YTQ7XFxyXFxuJENfV0FSTV9HUkFZXzcwOiAjNmE2YTZhO1xcclxcbiRDX1dBUk1fR1JBWV84MDogIzQ3NDc0NztcXHJcXG4kQ19XQVJNX0dSQVlfOTA6ICMyMzIzMjM7XFxyXFxuXFxyXFxuLy8gV0FSTklOR1xcclxcbiRDX1dBUk5JTkc6ICNmNmE2MDk7XFxyXFxuJENfV0FSTklOR19EQVJLOiAjZTg5ODA2O1xcclxcbiRDX1dBUk5JTkdfTElHSFQ6ICNmZmJjMWY7XFxyXFxuXFxyXFxuLy8gUE9TSVRJVkVcXHJcXG4kQ19QT1NJVElWRTogIzZjZGQ4MztcXHJcXG4kQ19QT1NJVElWRV9EQVJLOiAjM2VkMTYwO1xcclxcbiRDX1BPU0lUSVZFX0xJR0hUOiAjOTJlNmEzO1xcclxcblxcclxcbi8vIE5FR0FUSVZFXFxyXFxuJENfTkVHQVRJVkU6ICNmYjRlNGU7XFxyXFxuJENfTkVHQVRJVkVfREFSSzogI2U5M2MzYztcXHJcXG4kQ19ORUdBVElWRV9MSUdIVDogI2ZmNjI2MjtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoaWRkZW5cIjogXCJ0eXBlMDJfaGlkZGVuX193MEVLTFwiLFxuXHRcIndyYXBcIjogXCJ0eXBlMDJfd3JhcF9fdTdHUVFcIixcblx0XCJjb3VudFdyYXBcIjogXCJ0eXBlMDJfY291bnRXcmFwX18yWkFCZVwiLFxuXHRcImNvdW50XCI6IFwidHlwZTAyX2NvdW50X18zWXlWcVwiLFxuXHRcInVuaXRUZXh0XCI6IFwidHlwZTAyX3VuaXRUZXh0X18yMExmNFwiLFxuXHRcIm51bWJlclwiOiBcInR5cGUwMl9udW1iZXJfXzFVSUhMXCIsXG5cdFwiZGlnaXRcIjogXCJ0eXBlMDJfZGlnaXRfXzJGNVY0XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3R5cGUwMi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTnVtYmVyUHJvcHMge1xyXG5cdG51bTogbnVtYmVyO1xyXG5cdGRlbGF5OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE51bWJlciA9IChwcm9wczogTnVtYmVyUHJvcHMpID0+IHtcclxuXHRjb25zdCB7bnVtLCBkZWxheX0gPSBwcm9wcztcclxuXHRjb25zdCBbc3R5bGUsIHNldFN0eWxlXSA9IHVzZVN0YXRlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEzMnB4KSd9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRzZXRTdHlsZSh7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHtudW0gKiAxMzJ9cHgpYH0pXHJcblx0XHR9LCBkZWxheSk7XHJcblx0fSwgW251bV0pO1xyXG5cclxuXHRjb25zdCBkaWdpdEVsID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcblx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjeCgnZGlnaXQnKX0+e2luZGV4fTwvc3Bhbj5cclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnbnVtYmVyJyl9IHN0eWxlPXtzdHlsZX0+XHJcblx0XHRcdHtkaWdpdEVsfVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBDb3VudFByb3BzIHtcclxuXHRjb3VudDogbnVtYmVyO1xyXG5cdHVuaXRUZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDb3VudFR5cGUwMiA9ICh7Y291bnQsIHVuaXRUZXh0fTogQ291bnRQcm9wcykgPT4ge1xyXG5cdGxldCBjb3VudEFyciA9IGNvdW50LnRvU3RyaW5nKCkuc3BsaXQoJycpO1xyXG5cdGxldCBhcnIgPSBBcnJheS5mcm9tKHtsZW5ndGg6IGNvdW50QXJyLmxlbmd0aH0sICgpID0+ICcwJyk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRBcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGFyclthcnIubGVuZ3RoIC0gY291bnRBcnIubGVuZ3RoICsgaV0gPSBjb3VudEFycltpXTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IE51bWJlckVsID0gYXJyLm1hcCgobnVtLCBpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIDxOdW1iZXIga2V5PXtpbmRleH0gbnVtPXtwYXJzZUludChudW0pfSBkZWxheT17KGFyci5sZW5ndGggLSAxIC0gaW5kZXgpICogMzAwfS8+XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCdjb3VudFdyYXAnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb3VudCcpfT5cclxuXHRcdFx0XHRcdHtOdW1iZXJFbH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd1bml0VGV4dCcpfT57dW5pdFRleHR9PC9zcGFuPlxyXG5cdFx0XHQ8L3NwYW4+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudFR5cGUwMjtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi90eXBlMDIubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3R5cGUwMi5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3R5cGUwMi5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW50cm9kdWN0aW9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBPbk9mZkNvdmVyIGZyb20gXCIuLi9vbk9mZkNvdmVyXCI7XHJcbmltcG9ydCBDb3VudFR5cGUwMiBmcm9tIFwiLi4vY291bnQvdHlwZTAyXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgSW50cm9kdWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFubmVyV3JhcCcpfT48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd0cmVuZHNXcmFwJyl9PlxyXG5cdFx0XHRcdDxDb3VudFR5cGUwMiBjb3VudD17NDUwfS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3F1ZXN0aW9uV3JhcCcpfT48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdteVNlbGZXcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ29uT2ZmV3JhcCcpfT5cclxuXHRcdFx0XHQ8T25PZmZDb3Zlci8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3Byb2Nlc3NXcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3Jlc3VsdFdyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnZ3VpZGVXcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2xpbmVHcmFwaFdyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFyR3JhcGhXcmFwJyl9PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2ludGVydmlld1dyYXAnKX0+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY2FyZEJhbm5lcldyYXAnKX0+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRyb2R1Y3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=