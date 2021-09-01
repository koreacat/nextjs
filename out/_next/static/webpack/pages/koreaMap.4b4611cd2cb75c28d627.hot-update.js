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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_util_storeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/util/storeProvider */ "./src/util/storeProvider.tsx");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locationList.module.scss */ "./src/components/koreaMap/locationList/locationList.module.scss");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\koreaMap\\locationList\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a);
var LOCATION_DATA = ['서울특별시', '경기도', '인천광역시', '부산광역시', '대구광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '강원도', '충청남도', '경상남도', '경상북도', '전라남도', '전라북도', '충청북도'];

var Location = function Location(_ref) {
  _s();

  var name = _ref.name;

  var _useStores = Object(src_util_storeProvider__WEBPACK_IMPORTED_MODULE_3__["useStores"])(),
      koreaMapUIStore = _useStores.koreaMapUIStore;

  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    koreaMapUIStore.activeLocations.add(name);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    onClick: handleClick,
    className: cx('location'),
    children: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 12
  }, _this);
};

_s(Location, "g3foj5AyxXPpvi3//7j9O1HTkvI=", false, function () {
  return [src_util_storeProvider__WEBPACK_IMPORTED_MODULE_3__["useStores"]];
});

_c = Location;

var LocationList = function LocationList() {
  var list = LOCATION_DATA.map(function (name) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Location, {
      name: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 36,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTE9DQVRJT05fREFUQSIsIkxvY2F0aW9uIiwibmFtZSIsInVzZVN0b3JlcyIsImtvcmVhTWFwVUlTdG9yZSIsImhhbmRsZUNsaWNrIiwidXNlQ2FsbGJhY2siLCJhY3RpdmVMb2NhdGlvbnMiLCJhZGQiLCJMb2NhdGlvbkxpc3QiLCJsaXN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyxnRUFBaEIsQ0FBWDtBQUVBLElBQU1DLGFBQWEsR0FBRyxDQUNsQixPQURrQixFQUNULEtBRFMsRUFDRixPQURFLEVBQ08sT0FEUCxFQUVsQixPQUZrQixFQUVULE9BRlMsRUFFQSxPQUZBLEVBRVMsT0FGVCxFQUdsQixTQUhrQixFQUdQLEtBSE8sRUFHQSxNQUhBLEVBR1EsTUFIUixFQUlsQixNQUprQixFQUlWLE1BSlUsRUFJRixNQUpFLEVBSU0sTUFKTixDQUF0Qjs7QUFXQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFzQjtBQUFBOztBQUFBLE1BQXBCQyxJQUFvQixRQUFwQkEsSUFBb0I7O0FBQUEsbUJBQ1RDLHdFQUFTLEVBREE7QUFBQSxNQUM1QkMsZUFENEIsY0FDNUJBLGVBRDRCOztBQUduQyxNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNsQ0YsbUJBQWUsQ0FBQ0csZUFBaEIsQ0FBZ0NDLEdBQWhDLENBQW9DTixJQUFwQztBQUNILEdBRjhCLEVBRTVCLEVBRjRCLENBQS9CO0FBSUEsc0JBQU87QUFBSSxXQUFPLEVBQUVHLFdBQWI7QUFBMEIsYUFBUyxFQUFFVCxFQUFFLENBQUMsVUFBRCxDQUF2QztBQUFBLGNBQXNETTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDSCxDQVJEOztHQUFNRCxRO1VBQ3dCRSxnRTs7O0tBRHhCRixROztBQVVOLElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsTUFBTUMsSUFBSSxHQUFHVixhQUFhLENBQUNXLEdBQWQsQ0FBa0IsVUFBQ1QsSUFBRCxFQUFVO0FBQ3JDLHdCQUFPLHFFQUFDLFFBQUQ7QUFBVSxVQUFJLEVBQUVBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNILEdBRlksQ0FBYjtBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFFTixFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLDJCQUNJO0FBQUksZUFBUyxFQUFFQSxFQUFFLENBQUMsY0FBRCxDQUFqQjtBQUFBLGdCQUFvQ2M7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBVkQ7O01BQU1ELFk7QUFZU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva29yZWFNYXAuNGI0NjExY2QyY2I3NWMyOGQ2MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSBcInNyYy91dGlsL3N0b3JlUHJvdmlkZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2NhdGlvbkxpc3QubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBMT0NBVElPTl9EQVRBID0gW1xyXG4gICAgJ+yEnOyauO2KueuzhOyLnCcsICfqsr3quLDrj4QnLCAn7J247LKc6rSR7Jet7IucJywgJ+u2gOyCsOq0keyXreyLnCcsIFxyXG4gICAgJ+uMgOq1rOq0keyXreyLnCcsICfqtJHso7zqtJHsl63si5wnLCAn64yA7KCE6rSR7Jet7IucJywgJ+yauOyCsOq0keyXreyLnCcsIFxyXG4gICAgJ+yEuOyihe2KueuzhOyekOy5mOyLnCcsICfqsJXsm5Drj4QnLCAn7Lap7LKt64Ko64+EJywgJ+qyveyDgeuCqOuPhCcsIFxyXG4gICAgJ+qyveyDgeu2geuPhCcsICfsoITrnbzrgqjrj4QnLCAn7KCE652867aB64+EJywgJ+y2qeyyreu2geuPhCdcclxuXTtcclxuXHJcbmludGVyZmFjZSBMb2NhdGlvbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IExvY2F0aW9uID0gKHtuYW1lfTogTG9jYXRpb24pID0+IHtcclxuICAgIGNvbnN0IHtrb3JlYU1hcFVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAga29yZWFNYXBVSVN0b3JlLmFjdGl2ZUxvY2F0aW9ucy5hZGQobmFtZSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdsb2NhdGlvbicpfT57bmFtZX08L2xpPlxyXG59XHJcblxyXG5jb25zdCBMb2NhdGlvbkxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0ID0gTE9DQVRJT05fREFUQS5tYXAoKG5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gPExvY2F0aW9uIG5hbWU9e25hbWV9Lz5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2N4KCdsb2NhdGlvbldyYXAnKX0+e2xpc3R9PC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=