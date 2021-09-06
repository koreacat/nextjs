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
    className: cx('hovered'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTG9jYXRpb24iLCJvYnNlcnZlciIsIm5hbWUiLCJ1c2VTdG9yZXMiLCJrb3JlYU1hcFVJU3RvcmUiLCJpc1NlbGVjdGVkIiwidG9nZ2xlTG9jYXRpb24iLCJjdXJyZW50TG9jYXRpb24iLCJMb2NhdGlvbkxpc3QiLCJzZXRDdXJyZW50TG9jYXRpb24iLCJsb2NhdGlvbkxpc3RSZWYiLCJ1c2VSZWYiLCJ1c2VNb3VzZUhvdmVyIiwicmVmIiwiY2xhc3NOYW1lIiwibGlzdCIsIkxPQ0FUSU9OX0RBVEEiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyxnRUFBaEIsQ0FBWDtBQU1BLElBQU1DLFFBQVEsR0FBR0MsMkRBQVEsU0FBQyxnQkFBc0I7QUFBQTs7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9COztBQUFBLG1CQUNyQkMsd0VBQVMsRUFEWTtBQUFBLE1BQ3hDQyxlQUR3QyxjQUN4Q0EsZUFEd0M7O0FBQUEsTUFFeENDLFVBRndDLEdBRU9ELGVBRlAsQ0FFeENDLFVBRndDO0FBQUEsTUFFNUJDLGNBRjRCLEdBRU9GLGVBRlAsQ0FFNUJFLGNBRjRCO0FBQUEsTUFFWkMsZUFGWSxHQUVPSCxlQUZQLENBRVpHLGVBRlk7QUFJL0Msc0JBQ0M7QUFDQyxXQUFPLEVBQUU7QUFBQSxhQUFNRCxjQUFjLEVBQXBCO0FBQUEsS0FEVjtBQUVDLGFBQVMsRUFBRVYsRUFBRSxDQUFDLFVBQUQsRUFBYTtBQUFDLGlCQUFXVyxlQUFlLEtBQUtMO0FBQWhDLEtBQWIsRUFBb0Q7QUFBQyxrQkFBWUcsVUFBVSxDQUFDSCxJQUFEO0FBQXZCLEtBQXBELENBRmQ7QUFHQyxxQkFBZUEsSUFIaEI7QUFBQSxjQUtFQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVNBLENBYndCO0FBQUEsVUFDRUMsZ0VBREY7QUFBQSxHQUF6QjtNQUFNSCxROztBQWVOLElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxvQkFDQUwsd0VBQVMsRUFEVDtBQUFBLE1BQ25CQyxlQURtQixlQUNuQkEsZUFEbUI7O0FBQUEsTUFFbkJLLGtCQUZtQixHQUVHTCxlQUZILENBRW5CSyxrQkFGbUI7QUFHMUIsTUFBTUMsZUFBZSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBOUI7QUFFQUMsOERBQWEsQ0FBQztBQUFDQyxPQUFHLEVBQUVILGVBQU47QUFBdUJJLGFBQVMsRUFBRWxCLEVBQUUsQ0FBQyxTQUFELENBQXBDO0FBQWlEYSxzQkFBa0IsRUFBbEJBO0FBQWpELEdBQUQsQ0FBYjtBQUVBLE1BQU1NLElBQUksR0FBR0MsdUVBQWEsQ0FBQ0MsR0FBZCxDQUFrQixVQUFDZixJQUFEO0FBQUEsd0JBQVUscUVBQUMsUUFBRDtBQUFxQixVQUFJLEVBQUVBO0FBQTNCLE9BQWVBLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFWO0FBQUEsR0FBbEIsQ0FBYjtBQUVBLHNCQUNDO0FBQUssT0FBRyxFQUFFUSxlQUFWO0FBQTJCLGFBQVMsRUFBRWQsRUFBRSxDQUFDLE1BQUQsQ0FBeEM7QUFBQSwyQkFDQztBQUFJLGVBQVMsRUFBRUEsRUFBRSxDQUFDLGNBQUQsQ0FBakI7QUFBQSxnQkFBb0NtQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0FkRDs7SUFBTVAsWTtVQUNxQkwsZ0UsRUFJMUJTLG9EOzs7TUFMS0osWTtBQWdCU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva29yZWFNYXAuOTU4ZDI5ZWE4MTVjNjQ5MzY3OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHtvYnNlcnZlcn0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0xPQ0FUSU9OX0RBVEF9IGZyb20gXCJzcmMvc3RvcmUva29yZWFNYXBVSVN0b3JlXCI7XHJcbmltcG9ydCB7dXNlU3RvcmVzfSBmcm9tIFwic3JjL3V0aWwvc3RvcmVQcm92aWRlclwiO1xyXG5pbXBvcnQge3VzZU1vdXNlSG92ZXJ9IGZyb20gXCIuLi9ob29rc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xvY2F0aW9uTGlzdC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBMb2NhdGlvbiB7XHJcblx0bmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBMb2NhdGlvbiA9IG9ic2VydmVyKCh7bmFtZX06IExvY2F0aW9uKSA9PiB7XHJcblx0Y29uc3Qge2tvcmVhTWFwVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuXHRjb25zdCB7aXNTZWxlY3RlZCwgdG9nZ2xlTG9jYXRpb24sIGN1cnJlbnRMb2NhdGlvbn0gPSBrb3JlYU1hcFVJU3RvcmU7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8bGlcclxuXHRcdFx0b25DbGljaz17KCkgPT4gdG9nZ2xlTG9jYXRpb24oKX1cclxuXHRcdFx0Y2xhc3NOYW1lPXtjeCgnbG9jYXRpb24nLCB7J2hvdmVyZWQnOiBjdXJyZW50TG9jYXRpb24gPT09IG5hbWV9LCB7J3NlbGVjdGVkJzogaXNTZWxlY3RlZChuYW1lKX0pfVxyXG5cdFx0XHRkYXRhLWxvY2F0aW9uPXtuYW1lfVxyXG5cdFx0PlxyXG5cdFx0XHR7bmFtZX1cclxuXHRcdDwvbGk+XHJcblx0KVxyXG59KTtcclxuXHJcbmNvbnN0IExvY2F0aW9uTGlzdCA9ICgpID0+IHtcclxuXHRjb25zdCB7a29yZWFNYXBVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtzZXRDdXJyZW50TG9jYXRpb259ID0ga29yZWFNYXBVSVN0b3JlO1xyXG5cdGNvbnN0IGxvY2F0aW9uTGlzdFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0dXNlTW91c2VIb3Zlcih7cmVmOiBsb2NhdGlvbkxpc3RSZWYsIGNsYXNzTmFtZTogY3goJ2hvdmVyZWQnKSwgc2V0Q3VycmVudExvY2F0aW9ufSk7XHJcblxyXG5cdGNvbnN0IGxpc3QgPSBMT0NBVElPTl9EQVRBLm1hcCgobmFtZSkgPT4gPExvY2F0aW9uIGtleT17bmFtZX0gbmFtZT17bmFtZX0vPik7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHJlZj17bG9jYXRpb25MaXN0UmVmfSBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtjeCgnbG9jYXRpb25MaXN0Jyl9PntsaXN0fTwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=