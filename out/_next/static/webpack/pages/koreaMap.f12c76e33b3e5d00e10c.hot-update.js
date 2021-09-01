webpackHotUpdate_N_E("pages/koreaMap",{

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
/* harmony import */ var src_util_storeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/util/storeProvider */ "./src/util/storeProvider.tsx");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locationList.module.scss */ "./src/components/koreaMap/locationList/locationList.module.scss");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\koreaMap\\locationList\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);
var LOCATION_DATA = ['서울특별시', '경기도', '인천광역시', '부산광역시', '대구광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '강원도', '충청남도', '경상남도', '경상북도', '전라남도', '전라북도', '충청북도'];

var Location = function Location(_ref) {
  _s();

  var name = _ref.name;

  var _useStores = Object(src_util_storeProvider__WEBPACK_IMPORTED_MODULE_2__["useStores"])(),
      koreaMapUIStore = _useStores.koreaMapUIStore;

  var toggleActiveLocation = koreaMapUIStore.toggleActiveLocation;

  var handleClick = function handleClick() {
    toggleActiveLocation(name);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    onClick: handleClick,
    className: cx('location'),
    children: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 12
  }, _this);
};

_s(Location, "aXt+qKMuEE/paCu/DcU8sSNA82w=", false, function () {
  return [src_util_storeProvider__WEBPACK_IMPORTED_MODULE_2__["useStores"]];
});

_c = Location;

var LocationList = function LocationList() {
  var list = LOCATION_DATA.map(function (name) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Location, {
      name: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 16
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('locationWrap'),
      children: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_c2 = LocationList;
/* harmony default export */ __webpack_exports__["default"] = (LocationList);

var _c, _c2;

$RefreshReg$(_c, "Location");
$RefreshReg$(_c2, "LocationList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTE9DQVRJT05fREFUQSIsIkxvY2F0aW9uIiwibmFtZSIsInVzZVN0b3JlcyIsImtvcmVhTWFwVUlTdG9yZSIsInRvZ2dsZUFjdGl2ZUxvY2F0aW9uIiwiaGFuZGxlQ2xpY2siLCJMb2NhdGlvbkxpc3QiLCJsaXN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLGdFQUFoQixDQUFYO0FBRUEsSUFBTUMsYUFBYSxHQUFHLENBQ2xCLE9BRGtCLEVBQ1QsS0FEUyxFQUNGLE9BREUsRUFDTyxPQURQLEVBRWxCLE9BRmtCLEVBRVQsT0FGUyxFQUVBLE9BRkEsRUFFUyxPQUZULEVBR2xCLFNBSGtCLEVBR1AsS0FITyxFQUdBLE1BSEEsRUFHUSxNQUhSLEVBSWxCLE1BSmtCLEVBSVYsTUFKVSxFQUlGLE1BSkUsRUFJTSxNQUpOLENBQXRCOztBQVdBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXNCO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjs7QUFBQSxtQkFDVEMsd0VBQVMsRUFEQTtBQUFBLE1BQzVCQyxlQUQ0QixjQUM1QkEsZUFENEI7O0FBQUEsTUFFNUJDLG9CQUY0QixHQUVKRCxlQUZJLENBRTVCQyxvQkFGNEI7O0FBSW5DLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJELHdCQUFvQixDQUFDSCxJQUFELENBQXBCO0FBQ0gsR0FGRDs7QUFJQSxzQkFBTztBQUFJLFdBQU8sRUFBRUksV0FBYjtBQUEwQixhQUFTLEVBQUVWLEVBQUUsQ0FBQyxVQUFELENBQXZDO0FBQUEsY0FBc0RNO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNILENBVEQ7O0dBQU1ELFE7VUFDd0JFLGdFOzs7S0FEeEJGLFE7O0FBV04sSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixNQUFNQyxJQUFJLEdBQUdSLGFBQWEsQ0FBQ1MsR0FBZCxDQUFrQixVQUFDUCxJQUFELEVBQVU7QUFDckMsd0JBQU8scUVBQUMsUUFBRDtBQUFVLFVBQUksRUFBRUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FGWSxDQUFiO0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVOLEVBQUUsQ0FBQyxNQUFELENBQWxCO0FBQUEsMkJBQ0k7QUFBSSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxjQUFELENBQWpCO0FBQUEsZ0JBQW9DWTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FWRDs7TUFBTUQsWTtBQVlTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9rb3JlYU1hcC5mMTJjNzZlMzNiM2U1ZDAwZTEwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZXMgfSBmcm9tIFwic3JjL3V0aWwvc3RvcmVQcm92aWRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xvY2F0aW9uTGlzdC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IExPQ0FUSU9OX0RBVEEgPSBbXHJcbiAgICAn7ISc7Jq47Yq567OE7IucJywgJ+qyveq4sOuPhCcsICfsnbjsspzqtJHsl63si5wnLCAn67aA7IKw6rSR7Jet7IucJywgXHJcbiAgICAn64yA6rWs6rSR7Jet7IucJywgJ+q0keyjvOq0keyXreyLnCcsICfrjIDsoITqtJHsl63si5wnLCAn7Jq47IKw6rSR7Jet7IucJywgXHJcbiAgICAn7IS47KKF7Yq567OE7J6Q7LmY7IucJywgJ+qwleybkOuPhCcsICfstqnssq3rgqjrj4QnLCAn6rK97IOB64Ko64+EJywgXHJcbiAgICAn6rK97IOB67aB64+EJywgJ+yghOudvOuCqOuPhCcsICfsoITrnbzrtoHrj4QnLCAn7Lap7LKt67aB64+EJ1xyXG5dO1xyXG5cclxuaW50ZXJmYWNlIExvY2F0aW9uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTG9jYXRpb24gPSAoe25hbWV9OiBMb2NhdGlvbikgPT4ge1xyXG4gICAgY29uc3Qge2tvcmVhTWFwVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuICAgIGNvbnN0IHt0b2dnbGVBY3RpdmVMb2NhdGlvbn0gPSBrb3JlYU1hcFVJU3RvcmU7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlQWN0aXZlTG9jYXRpb24obmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxsaSBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjeCgnbG9jYXRpb24nKX0+e25hbWV9PC9saT5cclxufVxyXG5cclxuY29uc3QgTG9jYXRpb25MaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdCA9IExPQ0FUSU9OX0RBVEEubWFwKChuYW1lKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxMb2NhdGlvbiBuYW1lPXtuYW1lfS8+XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjeCgnbG9jYXRpb25XcmFwJyl9PntsaXN0fTwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9