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

  var selectedLocations = koreaMapUIStore.selectedLocations,
      toggleLocation = koreaMapUIStore.toggleLocation;

  var handleClick = function handleClick() {
    toggleLocation(name);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    onClick: handleClick,
    className: cx('location', {
      'active': selectedLocations.has(name)
    }),
    children: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
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
      lineNumber: 40,
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
      lineNumber: 45,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTE9DQVRJT05fREFUQSIsIkxvY2F0aW9uIiwibmFtZSIsInVzZVN0b3JlcyIsImtvcmVhTWFwVUlTdG9yZSIsInNlbGVjdGVkTG9jYXRpb25zIiwidG9nZ2xlTG9jYXRpb24iLCJoYW5kbGVDbGljayIsImhhcyIsIkxvY2F0aW9uTGlzdCIsImxpc3QiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsZ0VBQWhCLENBQVg7QUFFQSxJQUFNQyxhQUFhLEdBQUcsQ0FDbEIsT0FEa0IsRUFDVCxLQURTLEVBQ0YsT0FERSxFQUNPLE9BRFAsRUFFbEIsT0FGa0IsRUFFVCxPQUZTLEVBRUEsT0FGQSxFQUVTLE9BRlQsRUFHbEIsU0FIa0IsRUFHUCxLQUhPLEVBR0EsTUFIQSxFQUdRLE1BSFIsRUFJbEIsTUFKa0IsRUFJVixNQUpVLEVBSUYsTUFKRSxFQUlNLE1BSk4sQ0FBdEI7O0FBV0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBc0I7QUFBQTs7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9COztBQUFBLG1CQUNUQyx3RUFBUyxFQURBO0FBQUEsTUFDNUJDLGVBRDRCLGNBQzVCQSxlQUQ0Qjs7QUFBQSxNQUU1QkMsaUJBRjRCLEdBRVNELGVBRlQsQ0FFNUJDLGlCQUY0QjtBQUFBLE1BRVRDLGNBRlMsR0FFU0YsZUFGVCxDQUVURSxjQUZTOztBQUluQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCRCxrQkFBYyxDQUFDSixJQUFELENBQWQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQ0ksV0FBTyxFQUFFSyxXQURiO0FBRUksYUFBUyxFQUFFWCxFQUFFLENBQUMsVUFBRCxFQUFhO0FBQUMsZ0JBQVVTLGlCQUFpQixDQUFDRyxHQUFsQixDQUFzQk4sSUFBdEI7QUFBWCxLQUFiLENBRmpCO0FBQUEsY0FJU0E7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQWpCRDs7R0FBTUQsUTtVQUN3QkUsZ0U7OztLQUR4QkYsUTs7QUFtQk4sSUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixNQUFNQyxJQUFJLEdBQUdWLGFBQWEsQ0FBQ1csR0FBZCxDQUFrQixVQUFDVCxJQUFELEVBQVU7QUFDckMsd0JBQU8scUVBQUMsUUFBRDtBQUFVLFVBQUksRUFBRUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FGWSxDQUFiO0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVOLEVBQUUsQ0FBQyxNQUFELENBQWxCO0FBQUEsMkJBQ0k7QUFBSSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxjQUFELENBQWpCO0FBQUEsZ0JBQW9DYztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FWRDs7TUFBTUQsWTtBQVlTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9rb3JlYU1hcC5mNjEzMTZhNGVmMjQ2OWE4M2NjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZXMgfSBmcm9tIFwic3JjL3V0aWwvc3RvcmVQcm92aWRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xvY2F0aW9uTGlzdC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IExPQ0FUSU9OX0RBVEEgPSBbXHJcbiAgICAn7ISc7Jq47Yq567OE7IucJywgJ+qyveq4sOuPhCcsICfsnbjsspzqtJHsl63si5wnLCAn67aA7IKw6rSR7Jet7IucJywgXHJcbiAgICAn64yA6rWs6rSR7Jet7IucJywgJ+q0keyjvOq0keyXreyLnCcsICfrjIDsoITqtJHsl63si5wnLCAn7Jq47IKw6rSR7Jet7IucJywgXHJcbiAgICAn7IS47KKF7Yq567OE7J6Q7LmY7IucJywgJ+qwleybkOuPhCcsICfstqnssq3rgqjrj4QnLCAn6rK97IOB64Ko64+EJywgXHJcbiAgICAn6rK97IOB67aB64+EJywgJ+yghOudvOuCqOuPhCcsICfsoITrnbzrtoHrj4QnLCAn7Lap7LKt67aB64+EJ1xyXG5dO1xyXG5cclxuaW50ZXJmYWNlIExvY2F0aW9uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTG9jYXRpb24gPSAoe25hbWV9OiBMb2NhdGlvbikgPT4ge1xyXG4gICAgY29uc3Qge2tvcmVhTWFwVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuICAgIGNvbnN0IHtzZWxlY3RlZExvY2F0aW9ucywgdG9nZ2xlTG9jYXRpb259ID0ga29yZWFNYXBVSVN0b3JlO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRvZ2dsZUxvY2F0aW9uKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja30gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2xvY2F0aW9uJywgeydhY3RpdmUnOiBzZWxlY3RlZExvY2F0aW9ucy5oYXMobmFtZSl9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IExvY2F0aW9uTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3QgPSBMT0NBVElPTl9EQVRBLm1hcCgobmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8TG9jYXRpb24gbmFtZT17bmFtZX0vPlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y3goJ2xvY2F0aW9uV3JhcCcpfT57bGlzdH08L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==