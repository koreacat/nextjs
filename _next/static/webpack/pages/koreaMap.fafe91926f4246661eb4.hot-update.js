webpackHotUpdate_N_E("pages/koreaMap",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/locationList/locationList.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/koreaMap/locationList/locationList.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".locationList_hidden__39aWG {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.locationList_wrap__3Xb2c {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 378px;\n}\n\n.locationList_locationList__3S5GD {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 24px;\n  gap: 24px;\n  width: 736px;\n  padding: 61px 32px;\n}\n.locationList_locationList__3S5GD .locationList_location__1M_mW {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 46px;\n  background: #FFFFFF;\n  border: 1px solid #e7e8ea;\n  border-radius: 24px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #656a71;\n  cursor: pointer;\n}\n.locationList_locationList__3S5GD .locationList_location__1M_mW.locationList_selected__2qNQ6 {\n  background: #6cdd83 !important;\n  border: 1px solid #52c564;\n  color: #fff;\n}\n.locationList_locationList__3S5GD .locationList_location__1M_mW.locationList_hovered__3fE2g {\n  background: #f4f4f5;\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://locationList.module.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AALA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AAQJ;;AALA;EACI,aAAA;EACA,eAAA;EACA,cAAA;EAAA,SAAA;EACA,YAAA;EACA,kBAAA;AAQJ;AANI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cCuES;EDtET,eAAA;AAQR;AANQ;EACI,8BAAA;EACA,yBAAA;EACA,WClCF;AD0CV;AALQ;EACI,mBCyDK;ADlDjB","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 378px;\n}\n\n.locationList {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  width: 736px;\n  padding: 61px 32px;\n}\n.locationList .location {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 46px;\n  background: #FFFFFF;\n  border: 1px solid #e7e8ea;\n  border-radius: 24px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #656a71;\n  cursor: pointer;\n}\n.locationList .location.selected {\n  background: #6cdd83 !important;\n  border: 1px solid #52c564;\n  color: #fff;\n}\n.locationList .location.hovered {\n  background: #f4f4f5;\n}","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "locationList_hidden__39aWG",
	"wrap": "locationList_wrap__3Xb2c",
	"locationList": "locationList_locationList__3S5GD",
	"location": "locationList_location__1M_mW",
	"selected": "locationList_selected__2qNQ6",
	"hovered": "locationList_hovered__3fE2g"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/koreaMap/locationList/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/koreaMap/locationList/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_store_koreaMapUIStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/store/koreaMapUIStore */ "./src/store/koreaMapUIStore.ts");
/* harmony import */ var src_util_storeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/util/storeProvider */ "./src/util/storeProvider.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./src/components/koreaMap/hooks/index.ts");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locationList.module.scss */ "./src/components/koreaMap/locationList/locationList.module.scss");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\koreaMap\\locationList\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();








var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a);
var Location = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_c = _s(function (_ref) {
  _s();

  var name = _ref.name;

  var _useStores = Object(src_util_storeProvider__WEBPACK_IMPORTED_MODULE_5__["useStores"])(),
      koreaMapUIStore = _useStores.koreaMapUIStore;

  var isSelected = koreaMapUIStore.isSelected,
      toggleLocation = koreaMapUIStore.toggleLocation,
      currentLocation = koreaMapUIStore.currentLocation;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    onClick: function onClick() {
      return toggleLocation();
    },
    className: cx('location', {
      'hovered': currentLocation === name
    }, {
      'selected': isSelected(name)
    }),
    "data-location": name,
    children: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, _this);
}, "aXt+qKMuEE/paCu/DcU8sSNA82w=", false, function () {
  return [src_util_storeProvider__WEBPACK_IMPORTED_MODULE_5__["useStores"]];
}));
_c2 = Location;

var LocationList = function LocationList() {
  _s2();

  var _useStores2 = Object(src_util_storeProvider__WEBPACK_IMPORTED_MODULE_5__["useStores"])(),
      koreaMapUIStore = _useStores2.koreaMapUIStore;

  var setCurrentLocation = koreaMapUIStore.setCurrentLocation;
  var locationListRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useMouseHover"])({
    ref: locationListRef,
    cx: cx,
    setCurrentLocation: setCurrentLocation
  });
  var list = src_store_koreaMapUIStore__WEBPACK_IMPORTED_MODULE_4__["LOCATION_DATA"].map(function (name) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Location, {
      name: name
    }, name, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 43
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: locationListRef,
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('locationList'),
      children: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 3
  }, _this);
};

_s2(LocationList, "6ghsFUgsI4DrvHhaE0hWoLURKjU=", false, function () {
  return [src_util_storeProvider__WEBPACK_IMPORTED_MODULE_5__["useStores"], _hooks__WEBPACK_IMPORTED_MODULE_6__["useMouseHover"]];
});

_c3 = LocationList;
/* harmony default export */ __webpack_exports__["default"] = (LocationList);

var _c, _c2, _c3;

$RefreshReg$(_c, "Location$observer");
$RefreshReg$(_c2, "Location");
$RefreshReg$(_c3, "LocationList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2xvY2F0aW9uTGlzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTG9jYXRpb24iLCJvYnNlcnZlciIsIm5hbWUiLCJ1c2VTdG9yZXMiLCJrb3JlYU1hcFVJU3RvcmUiLCJpc1NlbGVjdGVkIiwidG9nZ2xlTG9jYXRpb24iLCJjdXJyZW50TG9jYXRpb24iLCJMb2NhdGlvbkxpc3QiLCJzZXRDdXJyZW50TG9jYXRpb24iLCJsb2NhdGlvbkxpc3RSZWYiLCJ1c2VSZWYiLCJ1c2VNb3VzZUhvdmVyIiwicmVmIiwibGlzdCIsIkxPQ0FUSU9OX0RBVEEiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxnQ0FBZ0MscUJBQXFCLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsK0JBQStCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGtCQUFrQixHQUFHLHVDQUF1QyxrQkFBa0Isb0JBQW9CLG1CQUFtQixjQUFjLGlCQUFpQix1QkFBdUIsR0FBRyxtRUFBbUUsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLGlCQUFpQix3QkFBd0IsOEJBQThCLHdCQUF3QixxQkFBcUIsb0JBQW9CLHNCQUFzQixtQkFBbUIsb0JBQW9CLEdBQUcsZ0dBQWdHLG1DQUFtQyw4QkFBOEIsZ0JBQWdCLEdBQUcsK0ZBQStGLHdCQUF3QixHQUFHLE9BQU8seUxBQXlMLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FB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YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sb2NhdGlvbkxpc3RfaGlkZGVuX18zOWFXRyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLmxvY2F0aW9uTGlzdF93cmFwX18zWGIyYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzNzhweDtcXG59XFxuXFxuLmxvY2F0aW9uTGlzdF9sb2NhdGlvbkxpc3RfXzNTNUdEIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBncmlkLWdhcDogMjRweDtcXG4gIGdhcDogMjRweDtcXG4gIHdpZHRoOiA3MzZweDtcXG4gIHBhZGRpbmc6IDYxcHggMzJweDtcXG59XFxuLmxvY2F0aW9uTGlzdF9sb2NhdGlvbkxpc3RfXzNTNUdEIC5sb2NhdGlvbkxpc3RfbG9jYXRpb25fXzFNX21XIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDQ2cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZThlYTtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzY1NmE3MTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxvY2F0aW9uTGlzdF9sb2NhdGlvbkxpc3RfXzNTNUdEIC5sb2NhdGlvbkxpc3RfbG9jYXRpb25fXzFNX21XLmxvY2F0aW9uTGlzdF9zZWxlY3RlZF9fMnFOUTYge1xcbiAgYmFja2dyb3VuZDogIzZjZGQ4MyAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzUyYzU2NDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubG9jYXRpb25MaXN0X2xvY2F0aW9uTGlzdF9fM1M1R0QgLmxvY2F0aW9uTGlzdF9sb2NhdGlvbl9fMU1fbVcubG9jYXRpb25MaXN0X2hvdmVyZWRfXzNmRTJnIHtcXG4gIGJhY2tncm91bmQ6ICNmNGY0ZjU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly9sb2NhdGlvbkxpc3QubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDVko7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFRSjs7QUFMQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFRSjtBQU5JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0N1RVM7RUR0RVQsZUFBQTtBQVFSO0FBTlE7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0NsQ0Y7QUQwQ1Y7QUFMUTtFQUNJLG1CQ3lESztBRGxEakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgJ1VURi04JztcXHJcXG5cXHJcXG4vLyB2YXJpYWJsZXNcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvcGF0aC5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuLy8gbWl4aW5zXFxyXFxuQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XFxyXFxuXFxyXFxuLy8gaGlkZGVuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIG1hcmdpbjogLTFweDtcXHJcXG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXCIsXCIuaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4ud3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzNzhweDtcXG59XFxuXFxuLmxvY2F0aW9uTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAyNHB4O1xcbiAgd2lkdGg6IDczNnB4O1xcbiAgcGFkZGluZzogNjFweCAzMnB4O1xcbn1cXG4ubG9jYXRpb25MaXN0IC5sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA0NnB4O1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U4ZWE7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6ICM2NTZhNzE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5sb2NhdGlvbkxpc3QgLmxvY2F0aW9uLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6ICM2Y2RkODMgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MmM1NjQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmxvY2F0aW9uTGlzdCAubG9jYXRpb24uaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kOiAjZjRmNGY1O1xcbn1cIixcIiRDX1dISVRFOiAjZmZmO1xcclxcbiRDX0JMQUNLOiAjMDAwO1xcclxcbiRDX0dVSURFTElORTogIzBmZjtcXHJcXG5cXHJcXG4vLyBKT0JEQSBCTEFDS1xcclxcbiRDX0pPQkRBX0JMQUNLOiAjMTIxNjE5O1xcclxcblxcclxcbi8vIEpPQkRBIFdISVRFXFxyXFxuJENfSk9CREFfV0hJVEU6ICNmOWY5ZmE7XFxyXFxuXFxyXFxuLy8gR1JFRU5cXHJcXG4kQ19HUkVFTl8zMDogI2VmZmRmMztcXHJcXG4kQ19HUkVFTl80MDogI2UwZjllNDtcXHJcXG4kQ19HUkVFTl81MDogI2QwZjVkYTtcXHJcXG4kQ19HUkVFTl82MDogI2MzZjJjZDtcXHJcXG4kQ19HUkVFTl83MDogI2IzZWVjMTtcXHJcXG4kQ19HUkVFTl84MDogI2EyZWJiNDtcXHJcXG4kQ19HUkVFTl85MDogIzkyZTZhMztcXHJcXG4kQ19HUkVFTl8xMDA6ICM2Y2RkODM7XFxyXFxuJENfR1JFRU5fMjAwOiAjNTJjNTY0O1xcclxcbiRDX0dSRUVOXzMwMDogIzQxYWM0ZDtcXHJcXG4kQ19HUkVFTl80MDA6ICMzYzhlNDI7XFxyXFxuJENfR1JFRU5fNTAwOiAjMzc3NTM4O1xcclxcblxcclxcbi8vIFlFTExPV1xcclxcbiRDX1lFTExPV18zMDogI2ZmZmVmMjtcXHJcXG4kQ19ZRUxMT1dfNDA6ICNmZmZkZTU7XFxyXFxuJENfWUVMTE9XXzUwOiAjZmVmY2Q4O1xcclxcbiRDX1lFTExPV182MDogI2ZlZmNjYjtcXHJcXG4kQ19ZRUxMT1dfNzA6ICNmZWY5YmQ7XFxyXFxuJENfWUVMTE9XXzgwOiAjZmVmOGIxO1xcclxcbiRDX1lFTExPV185MDogI2ZkZjY5ZTtcXHJcXG4kQ19ZRUxMT1dfMTAwOiAjZmNmMTZjO1xcclxcbiRDX1lFTExPV18yMDA6ICNlN2RhNGI7XFxyXFxuJENfWUVMTE9XXzMwMDogI2Q4Y2EyYztcXHJcXG4kQ19ZRUxMT1dfNDAwOiAjYjNhODJhO1xcclxcbiRDX1lFTExPV181MDA6ICM5MzhhMjk7XFxyXFxuXFxyXFxuLy8gU0tZXFxyXFxuJENfU0tZXzMwOiAjZjNmZGZjO1xcclxcbiRDX1NLWV80MDogI2U5ZjlmOTtcXHJcXG4kQ19TS1lfNTA6ICNkY2Y3ZjY7XFxyXFxuJENfU0tZXzYwOiAjZDFmNWYzO1xcclxcbiRDX1NLWV83MDogI2M1ZjFlZjtcXHJcXG4kQ19TS1lfODA6ICNiYmVmZWQ7XFxyXFxuJENfU0tZXzkwOiAjYWZlY2VhO1xcclxcbiRDX1NLWV8xMDA6ICM3YWRlZGE7XFxyXFxuJENfU0tZXzIwMDogIzVlYzdjMztcXHJcXG4kQ19TS1lfMzAwOiAjNDZiMmFmO1xcclxcbiRDX1NLWV80MDA6ICM0MDkzOTA7XFxyXFxuJENfU0tZXzUwMDogIzNhNzk3NztcXHJcXG5cXHJcXG4vLyBMSU1FXFxyXFxuJENfTElNRV8zMDogI2Y5ZmZlYjtcXHJcXG4kQ19MSU1FXzQwOiAjZjNmZWRmO1xcclxcbiRDX0xJTUVfNTA6ICNlZGZkZDI7XFxyXFxuJENfTElNRV82MDogI2U3ZmNjNjtcXHJcXG4kQ19MSU1FXzcwOiAjZTJmYmI5O1xcclxcbiRDX0xJTUVfODA6ICNkY2ZhYWQ7XFxyXFxuJENfTElNRV85MDogI2QwZjg5NDtcXHJcXG4kQ19MSU1FXzEwMDogI2JmZWY3YjtcXHJcXG4kQ19MSU1FXzIwMDogI2E0ZDk1YTtcXHJcXG4kQ19MSU1FXzMwMDogIzhlYzkzZDtcXHJcXG4kQ19MSU1FXzQwMDogIzc5YTgzNztcXHJcXG4kQ19MSU1FXzUwMDogIzY2OGEzMztcXHJcXG5cXHJcXG4vLyBQVVJQTEVcXHJcXG4kQ19QVVJQTEVfMzA6ICNmNWYyZmQ7XFxyXFxuJENfUFVSUExFXzQwOiAjZjJlZGZjO1xcclxcbiRDX1BVUlBMRV81MDogI2VlZTdmYztcXHJcXG4kQ19QVVJQTEVfNjA6ICNlOGUwZmI7XFxyXFxuJENfUFVSUExFXzcwOiAjZTBkNWY5O1xcclxcbiRDX1BVUlBMRV84MDogI2Q1YzdmNztcXHJcXG4kQ19QVVJQTEVfOTA6ICNjN2I0ZjQ7XFxyXFxuJENfUFVSUExFXzEwMDogI2I0OWJmMDtcXHJcXG4kQ19QVVJQTEVfMjAwOiAjOTM3NWRiO1xcclxcbiRDX1BVUlBMRV8zMDA6ICM3NzUzY2E7XFxyXFxuJENfUFVSUExFXzQwMDogIzYyM2ZiMztcXHJcXG4kQ19QVVJQTEVfNTAwOiAjNTUzYjk0O1xcclxcblxcclxcbi8vIEJMVUVcXHJcXG4kQ19CTFVFXzMwOiAjZTFlN2Y4O1xcclxcbiRDX0JMVUVfNDA6ICNjM2QxZWY7XFxyXFxuJENfQkxVRV81MDogI2E3YjllNztcXHJcXG4kQ19CTFVFXzYwOiAjOGJhM2RmO1xcclxcbiRDX0JMVUVfNzA6ICM3MThkZDc7XFxyXFxuJENfQkxVRV84MDogIzU4NzhjZjtcXHJcXG4kQ19CTFVFXzkwOiAjMzE1ZmM3O1xcclxcbiRDX0JMVUVfMTAwOiAjMmI1M2FlO1xcclxcbiRDX0JMVUVfMjAwOiAjMzA0YTg5O1xcclxcbiRDX0JMVUVfMzAwOiAjMmM0MTcwO1xcclxcbiRDX0JMVUVfNDAwOiAjMjkzODVkO1xcclxcbiRDX0JMVUVfNTAwOiAjMjUzMTRkO1xcclxcblxcclxcbi8vIEdSQVlcXHJcXG4kQ19DT09MX0dSQVlfMzA6ICNmNGY0ZjU7XFxyXFxuJENfQ09PTF9HUkFZXzQwOiAjZTdlOGVhO1xcclxcbiRDX0NPT0xfR1JBWV81MDogI2NmZDFkNTtcXHJcXG4kQ19DT09MX0dSQVlfNjA6ICM5ZmE0YWI7XFxyXFxuJENfQ09PTF9HUkFZXzcwOiAjNjU2YTcxO1xcclxcbiRDX0NPT0xfR1JBWV84MDogIzQ0NDc0YjtcXHJcXG4kQ19DT09MX0dSQVlfOTA6ICMyNTI4MmI7XFxyXFxuXFxyXFxuJENfV0FSTV9HUkFZXzMwOiAjZjRmNGY0O1xcclxcbiRDX1dBUk1fR1JBWV80MDogI2U4ZThlODtcXHJcXG4kQ19XQVJNX0dSQVlfNTA6ICNkMWQxZDE7XFxyXFxuJENfV0FSTV9HUkFZXzYwOiAjYTRhNGE0O1xcclxcbiRDX1dBUk1fR1JBWV83MDogIzZhNmE2YTtcXHJcXG4kQ19XQVJNX0dSQVlfODA6ICM0NzQ3NDc7XFxyXFxuJENfV0FSTV9HUkFZXzkwOiAjMjMyMzIzO1xcclxcblxcclxcbi8vIFdBUk5JTkdcXHJcXG4kQ19XQVJOSU5HOiAjZjZhNjA5O1xcclxcbiRDX1dBUk5JTkdfREFSSzogI2U4OTgwNjtcXHJcXG4kQ19XQVJOSU5HX0xJR0hUOiAjZmZiYzFmO1xcclxcblxcclxcbi8vIFBPU0lUSVZFXFxyXFxuJENfUE9TSVRJVkU6ICM2Y2RkODM7XFxyXFxuJENfUE9TSVRJVkVfREFSSzogIzNlZDE2MDtcXHJcXG4kQ19QT1NJVElWRV9MSUdIVDogIzkyZTZhMztcXHJcXG5cXHJcXG4vLyBORUdBVElWRVxcclxcbiRDX05FR0FUSVZFOiAjZmI0ZTRlO1xcclxcbiRDX05FR0FUSVZFX0RBUks6ICNlOTNjM2M7XFxyXFxuJENfTkVHQVRJVkVfTElHSFQ6ICNmZjYyNjI7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZGVuXCI6IFwibG9jYXRpb25MaXN0X2hpZGRlbl9fMzlhV0dcIixcblx0XCJ3cmFwXCI6IFwibG9jYXRpb25MaXN0X3dyYXBfXzNYYjJjXCIsXG5cdFwibG9jYXRpb25MaXN0XCI6IFwibG9jYXRpb25MaXN0X2xvY2F0aW9uTGlzdF9fM1M1R0RcIixcblx0XCJsb2NhdGlvblwiOiBcImxvY2F0aW9uTGlzdF9sb2NhdGlvbl9fMU1fbVdcIixcblx0XCJzZWxlY3RlZFwiOiBcImxvY2F0aW9uTGlzdF9zZWxlY3RlZF9fMnFOUTZcIixcblx0XCJob3ZlcmVkXCI6IFwibG9jYXRpb25MaXN0X2hvdmVyZWRfXzNmRTJnXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQge29ic2VydmVyfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TE9DQVRJT05fREFUQX0gZnJvbSBcInNyYy9zdG9yZS9rb3JlYU1hcFVJU3RvcmVcIjtcclxuaW1wb3J0IHt1c2VTdG9yZXN9IGZyb20gXCJzcmMvdXRpbC9zdG9yZVByb3ZpZGVyXCI7XHJcbmltcG9ydCB7dXNlTW91c2VIb3Zlcn0gZnJvbSBcIi4uL2hvb2tzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIExvY2F0aW9uIHtcclxuXHRuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IExvY2F0aW9uID0gb2JzZXJ2ZXIoKHtuYW1lfTogTG9jYXRpb24pID0+IHtcclxuXHRjb25zdCB7a29yZWFNYXBVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtpc1NlbGVjdGVkLCB0b2dnbGVMb2NhdGlvbiwgY3VycmVudExvY2F0aW9ufSA9IGtvcmVhTWFwVUlTdG9yZTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxsaVxyXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB0b2dnbGVMb2NhdGlvbigpfVxyXG5cdFx0XHRjbGFzc05hbWU9e2N4KCdsb2NhdGlvbicsIHsnaG92ZXJlZCc6IGN1cnJlbnRMb2NhdGlvbiA9PT0gbmFtZX0sIHsnc2VsZWN0ZWQnOiBpc1NlbGVjdGVkKG5hbWUpfSl9XHJcblx0XHRcdGRhdGEtbG9jYXRpb249e25hbWV9XHJcblx0XHQ+XHJcblx0XHRcdHtuYW1lfVxyXG5cdFx0PC9saT5cclxuXHQpXHJcbn0pO1xyXG5cclxuY29uc3QgTG9jYXRpb25MaXN0ID0gKCkgPT4ge1xyXG5cdGNvbnN0IHtrb3JlYU1hcFVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge3NldEN1cnJlbnRMb2NhdGlvbn0gPSBrb3JlYU1hcFVJU3RvcmU7XHJcblx0Y29uc3QgbG9jYXRpb25MaXN0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHR1c2VNb3VzZUhvdmVyKHtyZWY6IGxvY2F0aW9uTGlzdFJlZiwgY3gsIHNldEN1cnJlbnRMb2NhdGlvbn0pO1xyXG5cclxuXHRjb25zdCBsaXN0ID0gTE9DQVRJT05fREFUQS5tYXAoKG5hbWUpID0+IDxMb2NhdGlvbiBrZXk9e25hbWV9IG5hbWU9e25hbWV9Lz4pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiByZWY9e2xvY2F0aW9uTGlzdFJlZn0gY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17Y3goJ2xvY2F0aW9uTGlzdCcpfT57bGlzdH08L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25MaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9