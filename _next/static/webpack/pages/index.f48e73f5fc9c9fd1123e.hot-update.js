webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/common/fixedHeader/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/common/fixedHeader/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header */ "./src/components/common/header/index.tsx");
/* harmony import */ var _fixedHeader_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedHeader.module.scss */ "./src/components/common/fixedHeader/fixedHeader.module.scss");
/* harmony import */ var _fixedHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fixedHeader_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\common\\fixedHeader\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_4___default.a.bind(_fixedHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var FixedHeader = function FixedHeader() {
  _s();

  var lastScrollTop = 0;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      scrollUp = _useState[0],
      setScrollUp = _useState[1];

  var scrollEvent = function scrollEvent(e) {
    e.preventDefault();
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }

    lastScrollTop = st <= 0 ? 0 : st;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener('scroll', scrollEvent, false);
    return function () {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('fixedHeader', scrollUp && 'up'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(FixedHeader, "X79MG5yTqrfaU3KHzCAkbjam68Y=");

_c = FixedHeader;
/* harmony default export */ __webpack_exports__["default"] = (FixedHeader);

var _c;

$RefreshReg$(_c, "FixedHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2ZpeGVkSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRml4ZWRIZWFkZXIiLCJsYXN0U2Nyb2xsVG9wIiwidXNlU3RhdGUiLCJzY3JvbGxVcCIsInNldFNjcm9sbFVwIiwic2Nyb2xsRXZlbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsK0RBQWhCLENBQVg7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7O0FBRHdCLGtCQUVRQyxzREFBUSxDQUFDLElBQUQsQ0FGaEI7QUFBQSxNQUVqQkMsUUFGaUI7QUFBQSxNQUVQQyxXQUZPOztBQUl4QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFVQyxDQUFWLEVBQW9CO0FBQ3RDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUExRDs7QUFDQSxRQUFJTCxFQUFFLEdBQUdQLGFBQVQsRUFBd0I7QUFDdEJHLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7O0FBQ0RILGlCQUFhLEdBQUlPLEVBQUUsSUFBSSxDQUFOLEdBQVUsQ0FBVixHQUFjQSxFQUEvQjtBQUNELEdBVEQ7O0FBV0FNLHlEQUFTLENBQUMsWUFBTTtBQUNkSCxZQUFRLENBQUNJLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DVixXQUFwQyxFQUFpRCxLQUFqRDtBQUNBLFdBQVEsWUFBTTtBQUNaTSxjQUFRLENBQUNLLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDWCxXQUF2QztBQUNELEtBRkQ7QUFHRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVULEVBQUUsQ0FBQyxhQUFELEVBQWdCTyxRQUFRLElBQUksSUFBNUIsQ0FBbEI7QUFBQSwyQkFDRSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0EzQkQ7O0dBQU1ILFc7O0tBQUFBLFc7QUE2QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY0OGU3M2Y1ZmM5YzlmZDExMjNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZpeGVkSGVhZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBGaXhlZEhlYWRlciA9ICgpID0+IHtcclxuICBsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgY29uc3QgW3Njcm9sbFVwLCBzZXRTY3JvbGxVcF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsRXZlbnQgPSBmdW5jdGlvbiAoZTogRXZlbnQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHN0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgIHNldFNjcm9sbFVwKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2Nyb2xsVXAoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgbGFzdFNjcm9sbFRvcCA9IChzdCA8PSAwID8gMCA6IHN0KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRXZlbnQsIGZhbHNlKTtcclxuICAgIHJldHVybiAoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxFdmVudCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ZpeGVkSGVhZGVyJywgc2Nyb2xsVXAgJiYgJ3VwJyl9PlxyXG4gICAgICA8SGVhZGVyLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpeGVkSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9