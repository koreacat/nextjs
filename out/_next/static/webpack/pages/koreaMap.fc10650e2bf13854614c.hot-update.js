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
    koreaMapUIStore.activeLocations.add(name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTE9DQVRJT05fREFUQSIsIkxvY2F0aW9uIiwibmFtZSIsInVzZVN0b3JlcyIsImtvcmVhTWFwVUlTdG9yZSIsInRvZ2dsZUFjdGl2ZUxvY2F0aW9uIiwiaGFuZGxlQ2xpY2siLCJhY3RpdmVMb2NhdGlvbnMiLCJhZGQiLCJMb2NhdGlvbkxpc3QiLCJsaXN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLGdFQUFoQixDQUFYO0FBRUEsSUFBTUMsYUFBYSxHQUFHLENBQ2xCLE9BRGtCLEVBQ1QsS0FEUyxFQUNGLE9BREUsRUFDTyxPQURQLEVBRWxCLE9BRmtCLEVBRVQsT0FGUyxFQUVBLE9BRkEsRUFFUyxPQUZULEVBR2xCLFNBSGtCLEVBR1AsS0FITyxFQUdBLE1BSEEsRUFHUSxNQUhSLEVBSWxCLE1BSmtCLEVBSVYsTUFKVSxFQUlGLE1BSkUsRUFJTSxNQUpOLENBQXRCOztBQVdBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXNCO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjs7QUFBQSxtQkFDVEMsd0VBQVMsRUFEQTtBQUFBLE1BQzVCQyxlQUQ0QixjQUM1QkEsZUFENEI7O0FBQUEsTUFFNUJDLG9CQUY0QixHQUVKRCxlQUZJLENBRTVCQyxvQkFGNEI7O0FBSW5DLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJGLG1CQUFlLENBQUNHLGVBQWhCLENBQWdDQyxHQUFoQyxDQUFvQ04sSUFBcEM7QUFDSCxHQUZEOztBQUlBLHNCQUFPO0FBQUksV0FBTyxFQUFFSSxXQUFiO0FBQTBCLGFBQVMsRUFBRVYsRUFBRSxDQUFDLFVBQUQsQ0FBdkM7QUFBQSxjQUFzRE07QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0gsQ0FURDs7R0FBTUQsUTtVQUN3QkUsZ0U7OztLQUR4QkYsUTs7QUFXTixJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLE1BQU1DLElBQUksR0FBR1YsYUFBYSxDQUFDVyxHQUFkLENBQWtCLFVBQUNULElBQUQsRUFBVTtBQUNyQyx3QkFBTyxxRUFBQyxRQUFEO0FBQVUsVUFBSSxFQUFFQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSCxHQUZZLENBQWI7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBRU4sRUFBRSxDQUFDLE1BQUQsQ0FBbEI7QUFBQSwyQkFDSTtBQUFJLGVBQVMsRUFBRUEsRUFBRSxDQUFDLGNBQUQsQ0FBakI7QUFBQSxnQkFBb0NjO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQVZEOztNQUFNRCxZO0FBWVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tvcmVhTWFwLmZjMTA2NTBlMmJmMTM4NTQ2MTRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gXCJzcmMvdXRpbC9zdG9yZVByb3ZpZGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgTE9DQVRJT05fREFUQSA9IFtcclxuICAgICfshJzsmrjtirnrs4Tsi5wnLCAn6rK96riw64+EJywgJ+yduOyynOq0keyXreyLnCcsICfrtoDsgrDqtJHsl63si5wnLCBcclxuICAgICfrjIDqtazqtJHsl63si5wnLCAn6rSR7KO86rSR7Jet7IucJywgJ+uMgOyghOq0keyXreyLnCcsICfsmrjsgrDqtJHsl63si5wnLCBcclxuICAgICfshLjsooXtirnrs4TsnpDsuZjsi5wnLCAn6rCV7JuQ64+EJywgJ+y2qeyyreuCqOuPhCcsICfqsr3sg4Hrgqjrj4QnLCBcclxuICAgICfqsr3sg4HrtoHrj4QnLCAn7KCE652864Ko64+EJywgJ+yghOudvOu2geuPhCcsICfstqnssq3rtoHrj4QnXHJcbl07XHJcblxyXG5pbnRlcmZhY2UgTG9jYXRpb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBMb2NhdGlvbiA9ICh7bmFtZX06IExvY2F0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7a29yZWFNYXBVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG4gICAgY29uc3Qge3RvZ2dsZUFjdGl2ZUxvY2F0aW9ufSA9IGtvcmVhTWFwVUlTdG9yZTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBrb3JlYU1hcFVJU3RvcmUuYWN0aXZlTG9jYXRpb25zLmFkZChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdsb2NhdGlvbicpfT57bmFtZX08L2xpPlxyXG59XHJcblxyXG5jb25zdCBMb2NhdGlvbkxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0ID0gTE9DQVRJT05fREFUQS5tYXAoKG5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gPExvY2F0aW9uIG5hbWU9e25hbWV9Lz5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2N4KCdsb2NhdGlvbldyYXAnKX0+e2xpc3R9PC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=