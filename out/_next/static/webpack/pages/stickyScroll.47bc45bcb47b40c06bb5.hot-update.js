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
    console.log(el);
  };

  var onScroll = Object(_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollEvent, props.wait || 50);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('scroll', onScroll, false);
    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [el]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWwvaG9va3MvdXNlU2Nyb2xsLnRzIl0sIm5hbWVzIjpbInVzZVNjcm9sbERpciIsInByb3BzIiwibGFzdFNjcm9sbFRvcCIsImVsIiwib25TY3JvbGxVcCIsInNjcm9sbFVwVG9wIiwib25TY3JvbGxEb3duIiwic2Nyb2xsRG93blRvcCIsInNjcm9sbEV2ZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbERpciIsImVsVG9wIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRIZWlnaHQiLCJpbm5lckhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJvblNjcm9sbCIsInRocm90dGxlIiwid2FpdCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZTyxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUFnRDtBQUFBOztBQUN0RCxNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFEc0QsTUFFOUNDLEVBRjhDLEdBRWVGLEtBRmYsQ0FFOUNFLEVBRjhDO0FBQUEsTUFFMUNDLFVBRjBDLEdBRWVILEtBRmYsQ0FFMUNHLFVBRjBDO0FBQUEsTUFFOUJDLFdBRjhCLEdBRWVKLEtBRmYsQ0FFOUJJLFdBRjhCO0FBQUEsTUFFakJDLFlBRmlCLEdBRWVMLEtBRmYsQ0FFakJLLFlBRmlCO0FBQUEsTUFFSEMsYUFGRyxHQUVlTixLQUZmLENBRUhNLGFBRkc7O0FBSXRELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekIsUUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsSUFBc0JDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkosU0FBakU7QUFDQSxRQUFNSyxTQUFvQixHQUFHTCxTQUFTLEdBQUdQLGFBQVosR0FBNEIsSUFBNUIsR0FBbUMsTUFBaEU7QUFDQSxRQUFNYSxLQUFLLEdBQUdaLEVBQUgsYUFBR0EsRUFBSCx1QkFBR0EsRUFBRSxDQUFFYSxPQUFKLENBQVlDLHFCQUFaLEdBQW9DQyxHQUFsRDtBQUNBLFFBQU1DLFVBQVUsR0FBR1QsTUFBTSxDQUFDVSxXQUExQixDQUp5QixDQUt6Qjs7QUFFQSxRQUFJaEIsVUFBVSxJQUFJVSxTQUFTLEtBQUssSUFBaEMsRUFBc0M7QUFDckMsVUFBSVQsV0FBSixFQUFpQlUsS0FBSyxHQUFHSSxVQUFSLElBQXNCZCxXQUF0QixJQUFxQ0QsVUFBVSxFQUEvQyxDQUFqQixLQUNLQSxVQUFVO0FBQ2Y7O0FBRUQsUUFBSUUsWUFBWSxJQUFJUSxTQUFTLEtBQUssTUFBbEMsRUFBMEM7QUFDekMsVUFBSVAsYUFBSixFQUFtQlEsS0FBSyxHQUFHSSxVQUFSLEdBQXFCWixhQUFyQixJQUFzQ0QsWUFBWSxFQUFsRCxDQUFuQixLQUNLQSxZQUFZO0FBQ2pCOztBQUVESixpQkFBYSxHQUFJTyxTQUFTLElBQUksQ0FBYixHQUFpQixDQUFqQixHQUFxQkEsU0FBdEM7QUFFQVksV0FBTyxDQUFDQyxHQUFSLENBQVluQixFQUFaO0FBQ0EsR0FwQkQ7O0FBc0JBLE1BQU1vQixRQUFRLEdBQUdDLHlEQUFRLENBQUNoQixXQUFELEVBQWNQLEtBQUssQ0FBQ3dCLElBQU4sSUFBYyxFQUE1QixDQUF6QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZmQsWUFBUSxDQUFDZSxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0osUUFBcEMsRUFBOEMsS0FBOUM7QUFFQSxXQUFRLFlBQU07QUFDYlgsY0FBUSxDQUFDZ0IsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNMLFFBQXZDO0FBQ0EsS0FGRDtBQUdBLEdBTlEsRUFNTixDQUFDcEIsRUFBRCxDQU5NLENBQVQ7QUFPQTs7R0FuQ2VILFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RpY2t5U2Nyb2xsLjQ3YmM0NWJjYjQ3YjQwYzA2YmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwiLi4vdGhyb3R0bGVcIjtcclxuXHJcbnR5cGUgU2Nyb2xsRGlyID0gJ1VQJyB8ICdET1dOJztcclxuaW50ZXJmYWNlIHVzZVNjcm9sbERpclByb3BzIHtcclxuXHRlbD86IE11dGFibGVSZWZPYmplY3Q8YW55PjtcclxuXHRvblNjcm9sbFVwPzogKCkgPT4gdm9pZDtcclxuXHRzY3JvbGxVcFRvcD86IG51bWJlcjtcclxuXHRvblNjcm9sbERvd24/OiAoKSA9PiB2b2lkO1xyXG5cdHNjcm9sbERvd25Ub3A/OiBudW1iZXI7XHJcblx0d2FpdD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNjcm9sbERpcihwcm9wczogdXNlU2Nyb2xsRGlyUHJvcHMpIHtcclxuXHRsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblx0Y29uc3QgeyBlbCwgb25TY3JvbGxVcCwgc2Nyb2xsVXBUb3AsIG9uU2Nyb2xsRG93biwgc2Nyb2xsRG93blRvcCB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IHNjcm9sbEV2ZW50ID0gKCkgPT4ge1xyXG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRjb25zdCBzY3JvbGxEaXI6IFNjcm9sbERpciA9IHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3AgPyAnVVAnIDogJ0RPV04nO1xyXG5cdFx0Y29uc3QgZWxUb3AgPSBlbD8uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblx0XHRjb25zdCB3aW5kSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0Ly8gY29uc3QgYWJzb2x1dGVUb3AgPSBzY3JvbGxUb3AgKyBlbFRvcDtcclxuXHJcblx0XHRpZiAob25TY3JvbGxVcCAmJiBzY3JvbGxEaXIgPT09ICdVUCcpIHtcclxuXHRcdFx0aWYgKHNjcm9sbFVwVG9wKSBlbFRvcCAtIHdpbmRIZWlnaHQgPD0gc2Nyb2xsVXBUb3AgJiYgb25TY3JvbGxVcCgpO1xyXG5cdFx0XHRlbHNlIG9uU2Nyb2xsVXAoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob25TY3JvbGxEb3duICYmIHNjcm9sbERpciA9PT0gJ0RPV04nKSB7XHJcblx0XHRcdGlmIChzY3JvbGxEb3duVG9wKSBlbFRvcCAtIHdpbmRIZWlnaHQgPiBzY3JvbGxEb3duVG9wICYmIG9uU2Nyb2xsRG93bigpO1xyXG5cdFx0XHRlbHNlIG9uU2Nyb2xsRG93bigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxhc3RTY3JvbGxUb3AgPSAoc2Nyb2xsVG9wIDw9IDAgPyAwIDogc2Nyb2xsVG9wKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhlbCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TY3JvbGwgPSB0aHJvdHRsZShzY3JvbGxFdmVudCwgcHJvcHMud2FpdCB8fCA1MCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCwgZmFsc2UpO1xyXG5cclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblx0XHR9KTtcclxuXHR9LCBbZWxdKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=