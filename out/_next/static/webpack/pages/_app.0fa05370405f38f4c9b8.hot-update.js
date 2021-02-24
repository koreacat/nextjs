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
var scrollUp = true;

var scrollEvent = function scrollEvent(e) {
  e.preventDefault();
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    scrollUp = false;
  } else {
    scrollUp = true;
  }

  lastScrollTop = st <= 0 ? 0 : st;
};

function FixedHeader() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
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
      lineNumber: 31,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, this);
}

_s(FixedHeader, "DoiXoWpLglkgIfHiVvNdmLJENds=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaXhlZEhlYWRlci50c3giXSwibmFtZXMiOlsibGFzdFNjcm9sbFRvcCIsInNjcm9sbFVwIiwic2Nyb2xsRXZlbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJGaXhlZEhlYWRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTQyxDQUFULEVBQW1CO0FBQ3RDQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUExRDs7QUFDQSxNQUFJTCxFQUFFLEdBQUdMLGFBQVQsRUFBdUI7QUFDdEJDLFlBQVEsR0FBRyxLQUFYO0FBQ0EsR0FGRCxNQUVPO0FBQ05BLFlBQVEsR0FBRyxJQUFYO0FBQ0E7O0FBQ0RELGVBQWEsR0FBSUssRUFBRSxJQUFJLENBQU4sR0FBVSxDQUFWLEdBQWNBLEVBQS9CO0FBQ0EsQ0FURDs7QUFXZSxTQUFTTSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFDLElBQUQsQ0FEVTtBQUFBLE1BQzlCWCxRQUQ4Qjs7QUFHckNZLHlEQUFTLENBQUMsWUFBTTtBQUNmTCxZQUFRLENBQUNNLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DWixXQUFwQyxFQUFpRCxLQUFqRDtBQUNBLFdBQVEsWUFBTTtBQUNiTSxjQUFRLENBQUNPLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDYixXQUF2QztBQUNBLEtBRkQ7QUFHQSxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUVjLHNEQUFVLENBQUMsYUFBRCxFQUFnQmYsUUFBUSxJQUFJLElBQTVCLENBQTFCO0FBQUEsMkJBQ0MscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUtBOztHQWZ1QlUsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBmYTA1MzcwNDA1ZjM4ZjRjOWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5cclxubGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5sZXQgc2Nyb2xsVXAgPSB0cnVlO1xyXG5cclxuY29uc3Qgc2Nyb2xsRXZlbnQgPSBmdW5jdGlvbihlOiBFdmVudCkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRjb25zdCBzdCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdGlmIChzdCA+IGxhc3RTY3JvbGxUb3Ape1xyXG5cdFx0c2Nyb2xsVXAgPSBmYWxzZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c2Nyb2xsVXAgPSB0cnVlO1xyXG5cdH1cclxuXHRsYXN0U2Nyb2xsVG9wID0gKHN0IDw9IDAgPyAwIDogc3QpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRml4ZWRIZWFkZXIoKSB7XHJcblx0Y29uc3QgW3Njcm9sbFVwXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRXZlbnQsIGZhbHNlKTtcclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxFdmVudCk7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZml4ZWRIZWFkZXInLCBzY3JvbGxVcCAmJiAnVXAnKX0+XHJcblx0XHRcdDxIZWFkZXIvPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=