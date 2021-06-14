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
    console.log(elTop);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWwvaG9va3MvdXNlU2Nyb2xsLnRzIl0sIm5hbWVzIjpbInVzZVNjcm9sbERpciIsInByb3BzIiwibGFzdFNjcm9sbFRvcCIsImVsIiwib25TY3JvbGxVcCIsInNjcm9sbFVwVG9wIiwib25TY3JvbGxEb3duIiwic2Nyb2xsRG93blRvcCIsInNjcm9sbEV2ZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbERpciIsImVsVG9wIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRIZWlnaHQiLCJpbm5lckhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJvblNjcm9sbCIsInRocm90dGxlIiwid2FpdCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZTyxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUFnRDtBQUFBOztBQUN0RCxNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFEc0QsTUFFOUNDLEVBRjhDLEdBRWVGLEtBRmYsQ0FFOUNFLEVBRjhDO0FBQUEsTUFFMUNDLFVBRjBDLEdBRWVILEtBRmYsQ0FFMUNHLFVBRjBDO0FBQUEsTUFFOUJDLFdBRjhCLEdBRWVKLEtBRmYsQ0FFOUJJLFdBRjhCO0FBQUEsTUFFakJDLFlBRmlCLEdBRWVMLEtBRmYsQ0FFakJLLFlBRmlCO0FBQUEsTUFFSEMsYUFGRyxHQUVlTixLQUZmLENBRUhNLGFBRkc7O0FBSXRELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekIsUUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsSUFBc0JDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkosU0FBakU7QUFDQSxRQUFNSyxTQUFvQixHQUFHTCxTQUFTLEdBQUdQLGFBQVosR0FBNEIsSUFBNUIsR0FBbUMsTUFBaEU7QUFDQSxRQUFNYSxLQUFLLEdBQUdaLEVBQUgsYUFBR0EsRUFBSCx1QkFBR0EsRUFBRSxDQUFFYSxPQUFKLENBQVlDLHFCQUFaLEdBQW9DQyxHQUFsRDtBQUNBLFFBQU1DLFVBQVUsR0FBR1QsTUFBTSxDQUFDVSxXQUExQixDQUp5QixDQUt6Qjs7QUFFQSxRQUFJaEIsVUFBVSxJQUFJVSxTQUFTLEtBQUssSUFBaEMsRUFBc0M7QUFDckMsVUFBSVQsV0FBSixFQUFpQlUsS0FBSyxHQUFHSSxVQUFSLElBQXNCZCxXQUF0QixJQUFxQ0QsVUFBVSxFQUEvQyxDQUFqQixLQUNLQSxVQUFVO0FBQ2Y7O0FBRUQsUUFBSUUsWUFBWSxJQUFJUSxTQUFTLEtBQUssTUFBbEMsRUFBMEM7QUFDekMsVUFBSVAsYUFBSixFQUFtQlEsS0FBSyxHQUFHSSxVQUFSLEdBQXFCWixhQUFyQixJQUFzQ0QsWUFBWSxFQUFsRCxDQUFuQixLQUNLQSxZQUFZO0FBQ2pCOztBQUVESixpQkFBYSxHQUFJTyxTQUFTLElBQUksQ0FBYixHQUFpQixDQUFqQixHQUFxQkEsU0FBdEM7QUFFQVksV0FBTyxDQUFDQyxHQUFSLENBQVlQLEtBQVo7QUFDQSxHQXBCRDs7QUFzQkEsTUFBTVEsUUFBUSxHQUFHQyx5REFBUSxDQUFDaEIsV0FBRCxFQUFjUCxLQUFLLENBQUN3QixJQUFOLElBQWMsRUFBNUIsQ0FBekI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2ZkLFlBQVEsQ0FBQ2UsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NKLFFBQXBDLEVBQThDLEtBQTlDO0FBRUEsV0FBUSxZQUFNO0FBQ2JYLGNBQVEsQ0FBQ2dCLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDTCxRQUF2QztBQUNBLEtBRkQ7QUFHQSxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0E7O0dBbkNldkIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGlja3lTY3JvbGwuNDY1MTQzZTcxOTU1NDZiNWY3YzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHRocm90dGxlIGZyb20gXCIuLi90aHJvdHRsZVwiO1xyXG5cclxudHlwZSBTY3JvbGxEaXIgPSAnVVAnIHwgJ0RPV04nO1xyXG5pbnRlcmZhY2UgdXNlU2Nyb2xsRGlyUHJvcHMge1xyXG5cdGVsPzogTXV0YWJsZVJlZk9iamVjdDxhbnk+O1xyXG5cdG9uU2Nyb2xsVXA/OiAoKSA9PiB2b2lkO1xyXG5cdHNjcm9sbFVwVG9wPzogbnVtYmVyO1xyXG5cdG9uU2Nyb2xsRG93bj86ICgpID0+IHZvaWQ7XHJcblx0c2Nyb2xsRG93blRvcD86IG51bWJlcjtcclxuXHR3YWl0PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU2Nyb2xsRGlyKHByb3BzOiB1c2VTY3JvbGxEaXJQcm9wcykge1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHRjb25zdCB7IGVsLCBvblNjcm9sbFVwLCBzY3JvbGxVcFRvcCwgb25TY3JvbGxEb3duLCBzY3JvbGxEb3duVG9wIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3Qgc2Nyb2xsRXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdGNvbnN0IHNjcm9sbERpcjogU2Nyb2xsRGlyID0gc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCA/ICdVUCcgOiAnRE9XTic7XHJcblx0XHRjb25zdCBlbFRvcCA9IGVsPy5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHQvLyBjb25zdCBhYnNvbHV0ZVRvcCA9IHNjcm9sbFRvcCArIGVsVG9wO1xyXG5cclxuXHRcdGlmIChvblNjcm9sbFVwICYmIHNjcm9sbERpciA9PT0gJ1VQJykge1xyXG5cdFx0XHRpZiAoc2Nyb2xsVXBUb3ApIGVsVG9wIC0gd2luZEhlaWdodCA8PSBzY3JvbGxVcFRvcCAmJiBvblNjcm9sbFVwKCk7XHJcblx0XHRcdGVsc2Ugb25TY3JvbGxVcCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvblNjcm9sbERvd24gJiYgc2Nyb2xsRGlyID09PSAnRE9XTicpIHtcclxuXHRcdFx0aWYgKHNjcm9sbERvd25Ub3ApIGVsVG9wIC0gd2luZEhlaWdodCA+IHNjcm9sbERvd25Ub3AgJiYgb25TY3JvbGxEb3duKCk7XHJcblx0XHRcdGVsc2Ugb25TY3JvbGxEb3duKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKGVsVG9wKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblNjcm9sbCA9IHRocm90dGxlKHNjcm9sbEV2ZW50LCBwcm9wcy53YWl0IHx8IDUwKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCBmYWxzZSk7XHJcblxyXG5cdFx0cmV0dXJuICgoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHRcdH0pO1xyXG5cdH0sIFtdKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=