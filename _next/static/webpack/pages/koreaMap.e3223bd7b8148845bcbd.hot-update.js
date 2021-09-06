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

  var isHover = function isHover(name) {
    return currentLocation === name;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    onClick: function onClick() {
      return toggleLocation();
    },
    className: cx('location', {
      'hovered': isHover(name)
    }, {
      'selected': isSelected(name)
    }),
    "data-location": name,
    children: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
      lineNumber: 41,
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
      lineNumber: 45,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTG9jYXRpb24iLCJvYnNlcnZlciIsIm5hbWUiLCJ1c2VTdG9yZXMiLCJrb3JlYU1hcFVJU3RvcmUiLCJpc1NlbGVjdGVkIiwidG9nZ2xlTG9jYXRpb24iLCJjdXJyZW50TG9jYXRpb24iLCJpc0hvdmVyIiwiTG9jYXRpb25MaXN0Iiwic2V0Q3VycmVudExvY2F0aW9uIiwibG9jYXRpb25MaXN0UmVmIiwidXNlUmVmIiwidXNlTW91c2VIb3ZlciIsInJlZiIsImxpc3QiLCJMT0NBVElPTl9EQVRBIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsZ0VBQWhCLENBQVg7QUFNQSxJQUFNQyxRQUFRLEdBQUdDLDJEQUFRLFNBQUMsZ0JBQXNCO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjs7QUFBQSxtQkFDckJDLHdFQUFTLEVBRFk7QUFBQSxNQUN4Q0MsZUFEd0MsY0FDeENBLGVBRHdDOztBQUFBLE1BRXhDQyxVQUZ3QyxHQUVPRCxlQUZQLENBRXhDQyxVQUZ3QztBQUFBLE1BRTVCQyxjQUY0QixHQUVPRixlQUZQLENBRTVCRSxjQUY0QjtBQUFBLE1BRVpDLGVBRlksR0FFT0gsZUFGUCxDQUVaRyxlQUZZOztBQUkvQyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDTixJQUFELEVBQXlCO0FBQ3hDLFdBQU9LLGVBQWUsS0FBS0wsSUFBM0I7QUFDQSxHQUZEOztBQUlBLHNCQUNDO0FBQ0MsV0FBTyxFQUFFO0FBQUEsYUFBTUksY0FBYyxFQUFwQjtBQUFBLEtBRFY7QUFFQyxhQUFTLEVBQUVWLEVBQUUsQ0FBQyxVQUFELEVBQWE7QUFBQyxpQkFBV1ksT0FBTyxDQUFDTixJQUFEO0FBQW5CLEtBQWIsRUFBeUM7QUFBQyxrQkFBWUcsVUFBVSxDQUFDSCxJQUFEO0FBQXZCLEtBQXpDLENBRmQ7QUFHQyxxQkFBZUEsSUFIaEI7QUFBQSxjQUtFQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVNBLENBakJ3QjtBQUFBLFVBQ0VDLGdFQURGO0FBQUEsR0FBekI7TUFBTUgsUTs7QUFtQk4sSUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLG9CQUNBTix3RUFBUyxFQURUO0FBQUEsTUFDbkJDLGVBRG1CLGVBQ25CQSxlQURtQjs7QUFBQSxNQUVuQk0sa0JBRm1CLEdBRUdOLGVBRkgsQ0FFbkJNLGtCQUZtQjtBQUcxQixNQUFNQyxlQUFlLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUE5QjtBQUVBQyw4REFBYSxDQUFDO0FBQUNDLE9BQUcsRUFBRUgsZUFBTjtBQUF1QmYsTUFBRSxFQUFGQSxFQUF2QjtBQUEyQmMsc0JBQWtCLEVBQWxCQTtBQUEzQixHQUFELENBQWI7QUFFQSxNQUFNSyxJQUFJLEdBQUdDLHVFQUFhLENBQUNDLEdBQWQsQ0FBa0IsVUFBQ2YsSUFBRDtBQUFBLHdCQUFVLHFFQUFDLFFBQUQ7QUFBcUIsVUFBSSxFQUFFQTtBQUEzQixPQUFlQSxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVjtBQUFBLEdBQWxCLENBQWI7QUFFQSxzQkFDQztBQUFLLE9BQUcsRUFBRVMsZUFBVjtBQUEyQixhQUFTLEVBQUVmLEVBQUUsQ0FBQyxNQUFELENBQXhDO0FBQUEsMkJBQ0M7QUFBSSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxjQUFELENBQWpCO0FBQUEsZ0JBQW9DbUI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUtBLENBZEQ7O0lBQU1OLFk7VUFDcUJOLGdFLEVBSTFCVSxvRDs7O01BTEtKLFk7QUFnQlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tvcmVhTWFwLmUzMjIzYmQ3YjgxNDg4NDViY2JkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMT0NBVElPTl9EQVRBLCBMT0NBVElPTl9UWVBFfSBmcm9tIFwic3JjL3N0b3JlL2tvcmVhTWFwVUlTdG9yZVwiO1xyXG5pbXBvcnQge3VzZVN0b3Jlc30gZnJvbSBcInNyYy91dGlsL3N0b3JlUHJvdmlkZXJcIjtcclxuaW1wb3J0IHt1c2VNb3VzZUhvdmVyfSBmcm9tIFwiLi4vaG9va3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2NhdGlvbkxpc3QubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTG9jYXRpb24ge1xyXG5cdG5hbWU6IExPQ0FUSU9OX1RZUEU7XHJcbn1cclxuXHJcbmNvbnN0IExvY2F0aW9uID0gb2JzZXJ2ZXIoKHtuYW1lfTogTG9jYXRpb24pID0+IHtcclxuXHRjb25zdCB7a29yZWFNYXBVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtpc1NlbGVjdGVkLCB0b2dnbGVMb2NhdGlvbiwgY3VycmVudExvY2F0aW9ufSA9IGtvcmVhTWFwVUlTdG9yZTtcclxuXHJcblx0Y29uc3QgaXNIb3ZlciA9IChuYW1lOiBMT0NBVElPTl9UWVBFKSA9PiB7XHJcblx0XHRyZXR1cm4gY3VycmVudExvY2F0aW9uID09PSBuYW1lO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8bGlcclxuXHRcdFx0b25DbGljaz17KCkgPT4gdG9nZ2xlTG9jYXRpb24oKX1cclxuXHRcdFx0Y2xhc3NOYW1lPXtjeCgnbG9jYXRpb24nLCB7J2hvdmVyZWQnOiBpc0hvdmVyKG5hbWUpfSwgeydzZWxlY3RlZCc6IGlzU2VsZWN0ZWQobmFtZSl9KX1cclxuXHRcdFx0ZGF0YS1sb2NhdGlvbj17bmFtZX1cclxuXHRcdD5cclxuXHRcdFx0e25hbWV9XHJcblx0XHQ8L2xpPlxyXG5cdClcclxufSk7XHJcblxyXG5jb25zdCBMb2NhdGlvbkxpc3QgPSAoKSA9PiB7XHJcblx0Y29uc3Qge2tvcmVhTWFwVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuXHRjb25zdCB7c2V0Q3VycmVudExvY2F0aW9ufSA9IGtvcmVhTWFwVUlTdG9yZTtcclxuXHRjb25zdCBsb2NhdGlvbkxpc3RSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdHVzZU1vdXNlSG92ZXIoe3JlZjogbG9jYXRpb25MaXN0UmVmLCBjeCwgc2V0Q3VycmVudExvY2F0aW9ufSk7XHJcblxyXG5cdGNvbnN0IGxpc3QgPSBMT0NBVElPTl9EQVRBLm1hcCgobmFtZSkgPT4gPExvY2F0aW9uIGtleT17bmFtZX0gbmFtZT17bmFtZX0vPik7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHJlZj17bG9jYXRpb25MaXN0UmVmfSBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtjeCgnbG9jYXRpb25MaXN0Jyl9PntsaXN0fTwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=