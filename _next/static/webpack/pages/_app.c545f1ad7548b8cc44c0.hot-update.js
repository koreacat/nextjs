webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header/FixedHeader.tsx":
/*!*******************************************!*\
  !*** ./components/header/FixedHeader.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FixedHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\components\\header\\FixedHeader.tsx",
    _s = $RefreshSig$();



function FixedHeader() {
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
    className: classnames_bind__WEBPACK_IMPORTED_MODULE_2___default()('fixedHeader', scrollUp && 'Up')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }, this);
}

_s(FixedHeader, "X79MG5yTqrfaU3KHzCAkbjam68Y=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvRml4ZWRIZWFkZXIudHN4Il0sIm5hbWVzIjpbIkZpeGVkSGVhZGVyIiwibGFzdFNjcm9sbFRvcCIsInVzZVN0YXRlIiwic2Nyb2xsVXAiLCJzZXRTY3JvbGxVcCIsInNjcm9sbEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3QiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHZSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQ3JDLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjs7QUFEcUMsa0JBRUxDLHNEQUFRLENBQUMsSUFBRCxDQUZIO0FBQUEsTUFFOUJDLFFBRjhCO0FBQUEsTUFFcEJDLFdBRm9COztBQUlyQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTQyxDQUFULEVBQW1CO0FBQ3RDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUExRDs7QUFDQSxRQUFJTCxFQUFFLEdBQUdQLGFBQVQsRUFBdUI7QUFDdEJHLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0EsS0FGRCxNQUVPO0FBQ05BLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0E7O0FBQ0RILGlCQUFhLEdBQUlPLEVBQUUsSUFBSSxDQUFOLEdBQVUsQ0FBVixHQUFjQSxFQUEvQjtBQUNBLEdBVEQ7O0FBV0FNLHlEQUFTLENBQUMsWUFBTTtBQUNmSCxZQUFRLENBQUNJLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DVixXQUFwQyxFQUFpRCxLQUFqRDtBQUNBLFdBQVEsWUFBTTtBQUNiTSxjQUFRLENBQUNLLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDWCxXQUF2QztBQUNBLEtBRkQ7QUFHQSxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUVZLHNEQUFVLENBQUMsYUFBRCxFQUFnQmQsUUFBUSxJQUFJLElBQTVCO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUtBOztHQTNCdUJILFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNTQ1ZjFhZDc1NDhiOGNjNDRjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpeGVkSGVhZGVyKCkge1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHRjb25zdCBbc2Nyb2xsVXAsIHNldFNjcm9sbFVwXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHRjb25zdCBzY3JvbGxFdmVudCA9IGZ1bmN0aW9uKGU6IEV2ZW50KSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBzdCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0aWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcblx0XHRcdHNldFNjcm9sbFVwKHRydWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0U2Nyb2xsVXAoZmFsc2UpO1xyXG5cdFx0fVxyXG5cdFx0bGFzdFNjcm9sbFRvcCA9IChzdCA8PSAwID8gMCA6IHN0KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRXZlbnQsIGZhbHNlKTtcclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxFdmVudCk7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZml4ZWRIZWFkZXInLCBzY3JvbGxVcCAmJiAnVXAnKX0+XHJcblx0XHRcdHsvKjxIZWFkZXIvPiovfVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=