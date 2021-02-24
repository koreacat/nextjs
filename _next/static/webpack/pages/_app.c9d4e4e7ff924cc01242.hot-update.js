webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/FixedHeader.tsx":
/*!************************************!*\
  !*** ./components/FixedHeader.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FixedHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\components\\FixedHeader.tsx",
    _s = $RefreshSig$();




var lastScrollTop = 0;

var scrollEvent = function scrollEvent(e) {
  e.preventDefault();
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    console.log('down');
  } else {
    console.log('up');
  }

  lastScrollTop = st <= 0 ? 0 : st;
};

function FixedHeader() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      scrollUp = _useState[0];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.addEventListener('scroll', scrollEvent, false);
    return function () {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames_bind__WEBPACK_IMPORTED_MODULE_3___default()('fixedHeader', scrollUp && 'Up'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, this);
}

_s(FixedHeader, "NxTJ4wpz4hR0kT1oPY5f8pJ13Qk=");

_c = FixedHeader;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaXhlZEhlYWRlci50c3giXSwibmFtZXMiOlsibGFzdFNjcm9sbFRvcCIsInNjcm9sbEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3QiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiY29uc29sZSIsImxvZyIsIkZpeGVkSGVhZGVyIiwidXNlU3RhdGUiLCJzY3JvbGxVcCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsYUFBYSxHQUFHLENBQXBCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLENBQVQsRUFBbUI7QUFDdENBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLElBQXNCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTFEOztBQUNBLE1BQUlMLEVBQUUsR0FBR0osYUFBVCxFQUF1QjtBQUN0QlUsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBLEdBRkQsTUFFTztBQUNORCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0E7O0FBQ0RYLGVBQWEsR0FBSUksRUFBRSxJQUFJLENBQU4sR0FBVSxDQUFWLEdBQWNBLEVBQS9CO0FBQ0EsQ0FURDs7QUFXZSxTQUFTUSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFDLEtBQUQsQ0FEVTtBQUFBLE1BQzlCQyxRQUQ4Qjs7QUFHckNDLHlEQUFTLENBQUMsWUFBTTtBQUNmUixZQUFRLENBQUNTLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DZixXQUFwQyxFQUFpRCxLQUFqRDtBQUNBLFdBQVEsWUFBTTtBQUNiTSxjQUFRLENBQUNVLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDaEIsV0FBdkM7QUFDQSxLQUZEO0FBR0EsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLHNCQUNDO0FBQUssYUFBUyxFQUFFaUIsc0RBQVUsQ0FBQyxhQUFELEVBQWdCSixRQUFRLElBQUksSUFBNUIsQ0FBMUI7QUFBQSwyQkFDQyxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBS0E7O0dBZnVCRixXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzlkNGU0ZTdmZjkyNGNjMDEyNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcblxyXG5sZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG5jb25zdCBzY3JvbGxFdmVudCA9IGZ1bmN0aW9uKGU6IEV2ZW50KSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGNvbnN0IHN0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0aWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcblx0XHRjb25zb2xlLmxvZygnZG93bicpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZygndXAnKTtcclxuXHR9XHJcblx0bGFzdFNjcm9sbFRvcCA9IChzdCA8PSAwID8gMCA6IHN0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpeGVkSGVhZGVyKCkge1xyXG5cdGNvbnN0IFtzY3JvbGxVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxFdmVudCwgZmFsc2UpO1xyXG5cdFx0cmV0dXJuICgoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEV2ZW50KTtcclxuXHRcdH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdmaXhlZEhlYWRlcicsIHNjcm9sbFVwICYmICdVcCcpfT5cclxuXHRcdFx0PEhlYWRlci8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==