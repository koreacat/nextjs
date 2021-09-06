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

  var locationName = _ref.locationName;

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
      'hovered': isHover(locationName)
    }, {
      'selected': isSelected(locationName)
    }),
    "data-location": locationName,
    children: locationName
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTG9jYXRpb24iLCJvYnNlcnZlciIsImxvY2F0aW9uTmFtZSIsInVzZVN0b3JlcyIsImtvcmVhTWFwVUlTdG9yZSIsImlzU2VsZWN0ZWQiLCJ0b2dnbGVMb2NhdGlvbiIsImN1cnJlbnRMb2NhdGlvbiIsImlzSG92ZXIiLCJuYW1lIiwiTG9jYXRpb25MaXN0Iiwic2V0Q3VycmVudExvY2F0aW9uIiwibG9jYXRpb25MaXN0UmVmIiwidXNlUmVmIiwidXNlTW91c2VIb3ZlciIsInJlZiIsImxpc3QiLCJMT0NBVElPTl9EQVRBIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsZ0VBQWhCLENBQVg7QUFNQSxJQUFNQyxRQUFRLEdBQUdDLDJEQUFRLFNBQUMsZ0JBQThCO0FBQUE7O0FBQUEsTUFBNUJDLFlBQTRCLFFBQTVCQSxZQUE0Qjs7QUFBQSxtQkFDN0JDLHdFQUFTLEVBRG9CO0FBQUEsTUFDaERDLGVBRGdELGNBQ2hEQSxlQURnRDs7QUFBQSxNQUVoREMsVUFGZ0QsR0FFREQsZUFGQyxDQUVoREMsVUFGZ0Q7QUFBQSxNQUVwQ0MsY0FGb0MsR0FFREYsZUFGQyxDQUVwQ0UsY0FGb0M7QUFBQSxNQUVwQkMsZUFGb0IsR0FFREgsZUFGQyxDQUVwQkcsZUFGb0I7O0FBSXZELE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBeUI7QUFDeEMsV0FBT0YsZUFBZSxLQUFLRSxJQUEzQjtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFDQyxXQUFPLEVBQUU7QUFBQSxhQUFNSCxjQUFjLEVBQXBCO0FBQUEsS0FEVjtBQUVDLGFBQVMsRUFBRVYsRUFBRSxDQUFDLFVBQUQsRUFBYTtBQUFDLGlCQUFXWSxPQUFPLENBQUNOLFlBQUQ7QUFBbkIsS0FBYixFQUFpRDtBQUFDLGtCQUFZRyxVQUFVLENBQUNILFlBQUQ7QUFBdkIsS0FBakQsQ0FGZDtBQUdDLHFCQUFlQSxZQUhoQjtBQUFBLGNBS0VBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBU0EsQ0FqQndCO0FBQUEsVUFDRUMsZ0VBREY7QUFBQSxHQUF6QjtNQUFNSCxROztBQW1CTixJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0FQLHdFQUFTLEVBRFQ7QUFBQSxNQUNuQkMsZUFEbUIsZUFDbkJBLGVBRG1COztBQUFBLE1BRW5CTyxrQkFGbUIsR0FFR1AsZUFGSCxDQUVuQk8sa0JBRm1CO0FBRzFCLE1BQU1DLGVBQWUsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTlCO0FBRUFDLDhEQUFhLENBQUM7QUFBQ0MsT0FBRyxFQUFFSCxlQUFOO0FBQXVCaEIsTUFBRSxFQUFGQSxFQUF2QjtBQUEyQmUsc0JBQWtCLEVBQWxCQTtBQUEzQixHQUFELENBQWI7QUFFQSxNQUFNSyxJQUFJLEdBQUdDLHVFQUFhLENBQUNDLEdBQWQsQ0FBa0IsVUFBQ1QsSUFBRDtBQUFBLHdCQUFVLHFFQUFDLFFBQUQ7QUFBcUIsVUFBSSxFQUFFQTtBQUEzQixPQUFlQSxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVjtBQUFBLEdBQWxCLENBQWI7QUFFQSxzQkFDQztBQUFLLE9BQUcsRUFBRUcsZUFBVjtBQUEyQixhQUFTLEVBQUVoQixFQUFFLENBQUMsTUFBRCxDQUF4QztBQUFBLDJCQUNDO0FBQUksZUFBUyxFQUFFQSxFQUFFLENBQUMsY0FBRCxDQUFqQjtBQUFBLGdCQUFvQ29CO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQWREOztJQUFNTixZO1VBQ3FCUCxnRSxFQUkxQlcsb0Q7OztNQUxLSixZO0FBZ0JTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9rb3JlYU1hcC5lZTFiYWE1MjkwM2E1Yjc4ZTQzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQge29ic2VydmVyfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TE9DQVRJT05fREFUQSwgTE9DQVRJT05fVFlQRX0gZnJvbSBcInNyYy9zdG9yZS9rb3JlYU1hcFVJU3RvcmVcIjtcclxuaW1wb3J0IHt1c2VTdG9yZXN9IGZyb20gXCJzcmMvdXRpbC9zdG9yZVByb3ZpZGVyXCI7XHJcbmltcG9ydCB7dXNlTW91c2VIb3Zlcn0gZnJvbSBcIi4uL2hvb2tzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIExvY2F0aW9uIHtcclxuXHRsb2NhdGlvbk5hbWU6IExPQ0FUSU9OX1RZUEU7XHJcbn1cclxuXHJcbmNvbnN0IExvY2F0aW9uID0gb2JzZXJ2ZXIoKHtsb2NhdGlvbk5hbWV9OiBMb2NhdGlvbikgPT4ge1xyXG5cdGNvbnN0IHtrb3JlYU1hcFVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge2lzU2VsZWN0ZWQsIHRvZ2dsZUxvY2F0aW9uLCBjdXJyZW50TG9jYXRpb259ID0ga29yZWFNYXBVSVN0b3JlO1xyXG5cclxuXHRjb25zdCBpc0hvdmVyID0gKG5hbWU6IExPQ0FUSU9OX1RZUEUpID0+IHtcclxuXHRcdHJldHVybiBjdXJyZW50TG9jYXRpb24gPT09IG5hbWU7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxsaVxyXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB0b2dnbGVMb2NhdGlvbigpfVxyXG5cdFx0XHRjbGFzc05hbWU9e2N4KCdsb2NhdGlvbicsIHsnaG92ZXJlZCc6IGlzSG92ZXIobG9jYXRpb25OYW1lKX0sIHsnc2VsZWN0ZWQnOiBpc1NlbGVjdGVkKGxvY2F0aW9uTmFtZSl9KX1cclxuXHRcdFx0ZGF0YS1sb2NhdGlvbj17bG9jYXRpb25OYW1lfVxyXG5cdFx0PlxyXG5cdFx0XHR7bG9jYXRpb25OYW1lfVxyXG5cdFx0PC9saT5cclxuXHQpXHJcbn0pO1xyXG5cclxuY29uc3QgTG9jYXRpb25MaXN0ID0gKCkgPT4ge1xyXG5cdGNvbnN0IHtrb3JlYU1hcFVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge3NldEN1cnJlbnRMb2NhdGlvbn0gPSBrb3JlYU1hcFVJU3RvcmU7XHJcblx0Y29uc3QgbG9jYXRpb25MaXN0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHR1c2VNb3VzZUhvdmVyKHtyZWY6IGxvY2F0aW9uTGlzdFJlZiwgY3gsIHNldEN1cnJlbnRMb2NhdGlvbn0pO1xyXG5cclxuXHRjb25zdCBsaXN0ID0gTE9DQVRJT05fREFUQS5tYXAoKG5hbWUpID0+IDxMb2NhdGlvbiBrZXk9e25hbWV9IG5hbWU9e25hbWV9Lz4pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiByZWY9e2xvY2F0aW9uTGlzdFJlZn0gY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17Y3goJ2xvY2F0aW9uTGlzdCcpfT57bGlzdH08L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25MaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9