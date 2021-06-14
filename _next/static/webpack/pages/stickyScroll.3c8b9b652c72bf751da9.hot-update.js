webpackHotUpdate_N_E("pages/stickyScroll",{

/***/ "./src/util/hooks/useScroll.ts":
/*!*************************************!*\
  !*** ./src/util/hooks/useScroll.ts ***!
  \*************************************/
/*! exports provided: useScrollDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollDir", function() { return useScrollDir; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../throttle */ "./src/util/throttle.ts");
var _s = $RefreshSig$();



function useScrollDir(props) {
  _s();

  var lastScrollTop = 0;
  var el = props.el,
      onScrollUp = props.onScrollUp,
      scrollUpTop = props.scrollUpTop,
      onScrollDown = props.onScrollDown,
      scrollDownTop = props.scrollDownTop;

  var scrollEvent = function scrollEvent() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
    var elTop = el === null || el === void 0 ? void 0 : el.current.getBoundingClientRect().top;
    var windHeight = window.innerHeight; // const absoluteTop = scrollTop + elTop;

    if (onScrollUp && scrollDir === 'UP') {
      if (scrollUpTop) elTop - windHeight <= scrollUpTop && onScrollUp();else onScrollUp();
    }

    if (onScrollDown && scrollDir === 'DOWN') {
      if (scrollDownTop) elTop - windHeight > scrollDownTop && onScrollDown();else onScrollDown();
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    console.log(lastScrollTop);
  };

  var onScroll = Object(_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollEvent, props.wait || 50);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('scroll', onScroll, false);
    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);
}

_s(useScrollDir, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWwvaG9va3MvdXNlU2Nyb2xsLnRzIl0sIm5hbWVzIjpbInVzZVNjcm9sbERpciIsInByb3BzIiwibGFzdFNjcm9sbFRvcCIsImVsIiwib25TY3JvbGxVcCIsInNjcm9sbFVwVG9wIiwib25TY3JvbGxEb3duIiwic2Nyb2xsRG93blRvcCIsInNjcm9sbEV2ZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbERpciIsImVsVG9wIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRIZWlnaHQiLCJpbm5lckhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJvblNjcm9sbCIsInRocm90dGxlIiwid2FpdCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZTyxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUFnRDtBQUFBOztBQUN0RCxNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFEc0QsTUFFOUNDLEVBRjhDLEdBRWVGLEtBRmYsQ0FFOUNFLEVBRjhDO0FBQUEsTUFFMUNDLFVBRjBDLEdBRWVILEtBRmYsQ0FFMUNHLFVBRjBDO0FBQUEsTUFFOUJDLFdBRjhCLEdBRWVKLEtBRmYsQ0FFOUJJLFdBRjhCO0FBQUEsTUFFakJDLFlBRmlCLEdBRWVMLEtBRmYsQ0FFakJLLFlBRmlCO0FBQUEsTUFFSEMsYUFGRyxHQUVlTixLQUZmLENBRUhNLGFBRkc7O0FBSXRELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekIsUUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsSUFBc0JDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkosU0FBakU7QUFDQSxRQUFNSyxTQUFvQixHQUFHTCxTQUFTLEdBQUdQLGFBQVosR0FBNEIsSUFBNUIsR0FBbUMsTUFBaEU7QUFDQSxRQUFNYSxLQUFLLEdBQUdaLEVBQUgsYUFBR0EsRUFBSCx1QkFBR0EsRUFBRSxDQUFFYSxPQUFKLENBQVlDLHFCQUFaLEdBQW9DQyxHQUFsRDtBQUNBLFFBQU1DLFVBQVUsR0FBR1QsTUFBTSxDQUFDVSxXQUExQixDQUp5QixDQUt6Qjs7QUFFQSxRQUFJaEIsVUFBVSxJQUFJVSxTQUFTLEtBQUssSUFBaEMsRUFBc0M7QUFDckMsVUFBSVQsV0FBSixFQUFpQlUsS0FBSyxHQUFHSSxVQUFSLElBQXNCZCxXQUF0QixJQUFxQ0QsVUFBVSxFQUEvQyxDQUFqQixLQUNLQSxVQUFVO0FBQ2Y7O0FBRUQsUUFBSUUsWUFBWSxJQUFJUSxTQUFTLEtBQUssTUFBbEMsRUFBMEM7QUFDekMsVUFBSVAsYUFBSixFQUFtQlEsS0FBSyxHQUFHSSxVQUFSLEdBQXFCWixhQUFyQixJQUFzQ0QsWUFBWSxFQUFsRCxDQUFuQixLQUNLQSxZQUFZO0FBQ2pCOztBQUVESixpQkFBYSxHQUFJTyxTQUFTLElBQUksQ0FBYixHQUFpQixDQUFqQixHQUFxQkEsU0FBdEM7QUFFQVksV0FBTyxDQUFDQyxHQUFSLENBQVlwQixhQUFaO0FBQ0EsR0FwQkQ7O0FBc0JBLE1BQU1xQixRQUFRLEdBQUdDLHlEQUFRLENBQUNoQixXQUFELEVBQWNQLEtBQUssQ0FBQ3dCLElBQU4sSUFBYyxFQUE1QixDQUF6QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZmQsWUFBUSxDQUFDZSxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0osUUFBcEMsRUFBOEMsS0FBOUM7QUFFQSxXQUFRLFlBQU07QUFDYlgsY0FBUSxDQUFDZ0IsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNMLFFBQXZDO0FBQ0EsS0FGRDtBQUdBLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQTs7R0FuQ2V2QixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0aWNreVNjcm9sbC4zYzhiOWI2NTJjNzJiZjc1MWRhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXV0YWJsZVJlZk9iamVjdCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSBcIi4uL3Rocm90dGxlXCI7XHJcblxyXG50eXBlIFNjcm9sbERpciA9ICdVUCcgfCAnRE9XTic7XHJcbmludGVyZmFjZSB1c2VTY3JvbGxEaXJQcm9wcyB7XHJcblx0ZWw/OiBNdXRhYmxlUmVmT2JqZWN0PGFueT47XHJcblx0b25TY3JvbGxVcD86ICgpID0+IHZvaWQ7XHJcblx0c2Nyb2xsVXBUb3A/OiBudW1iZXI7XHJcblx0b25TY3JvbGxEb3duPzogKCkgPT4gdm9pZDtcclxuXHRzY3JvbGxEb3duVG9wPzogbnVtYmVyO1xyXG5cdHdhaXQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTY3JvbGxEaXIocHJvcHM6IHVzZVNjcm9sbERpclByb3BzKSB7XHJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cdGNvbnN0IHsgZWwsIG9uU2Nyb2xsVXAsIHNjcm9sbFVwVG9wLCBvblNjcm9sbERvd24sIHNjcm9sbERvd25Ub3AgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBzY3JvbGxFdmVudCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsRGlyOiBTY3JvbGxEaXIgPSBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wID8gJ1VQJyA6ICdET1dOJztcclxuXHRcdGNvbnN0IGVsVG9wID0gZWw/LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cdFx0Y29uc3Qgd2luZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdC8vIGNvbnN0IGFic29sdXRlVG9wID0gc2Nyb2xsVG9wICsgZWxUb3A7XHJcblxyXG5cdFx0aWYgKG9uU2Nyb2xsVXAgJiYgc2Nyb2xsRGlyID09PSAnVVAnKSB7XHJcblx0XHRcdGlmIChzY3JvbGxVcFRvcCkgZWxUb3AgLSB3aW5kSGVpZ2h0IDw9IHNjcm9sbFVwVG9wICYmIG9uU2Nyb2xsVXAoKTtcclxuXHRcdFx0ZWxzZSBvblNjcm9sbFVwKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9uU2Nyb2xsRG93biAmJiBzY3JvbGxEaXIgPT09ICdET1dOJykge1xyXG5cdFx0XHRpZiAoc2Nyb2xsRG93blRvcCkgZWxUb3AgLSB3aW5kSGVpZ2h0ID4gc2Nyb2xsRG93blRvcCAmJiBvblNjcm9sbERvd24oKTtcclxuXHRcdFx0ZWxzZSBvblNjcm9sbERvd24oKTtcclxuXHRcdH1cclxuXHJcblx0XHRsYXN0U2Nyb2xsVG9wID0gKHNjcm9sbFRvcCA8PSAwID8gMCA6IHNjcm9sbFRvcCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2cobGFzdFNjcm9sbFRvcClcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblNjcm9sbCA9IHRocm90dGxlKHNjcm9sbEV2ZW50LCBwcm9wcy53YWl0IHx8IDUwKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCBmYWxzZSk7XHJcblxyXG5cdFx0cmV0dXJuICgoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHRcdH0pO1xyXG5cdH0sIFtdKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=