webpackHotUpdate_N_E("pages/koreaMap",{

/***/ "./src/components/koreaMap/hooks/index.ts":
/*!************************************************!*\
  !*** ./src/components/koreaMap/hooks/index.ts ***!
  \************************************************/
/*! exports provided: useMouseOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMouseOver", function() { return useMouseOver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


var useMouseOver = function useMouseOver(_ref) {
  _s();

  var ref = _ref.ref,
      setCurrentLocation = _ref.setCurrentLocation;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var mouseover = ref.current.addEventListener('mouseover', function (e) {
      if (!e.target.dataset.location) return;
      setCurrentLocation(e.target.dataset.location);
    });
    return function () {
      ref.current.removeEventListener('mouseover', mouseover);
    };
  }, []);
};

_s(useMouseOver, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvaG9va3MvaW5kZXgudHMiXSwibmFtZXMiOlsidXNlTW91c2VPdmVyIiwicmVmIiwic2V0Q3VycmVudExvY2F0aW9uIiwidXNlRWZmZWN0IiwibW91c2VvdmVyIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsImxvY2F0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT08sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBbUQ7QUFBQTs7QUFBQSxNQUFqREMsR0FBaUQsUUFBakRBLEdBQWlEO0FBQUEsTUFBNUNDLGtCQUE0QyxRQUE1Q0Esa0JBQTRDO0FBRTlFQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksT0FBSixDQUFZQyxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxVQUFDQyxDQUFELEVBQU87QUFDbEUsVUFBSSxDQUFDQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsUUFBdEIsRUFBZ0M7QUFDaENSLHdCQUFrQixDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsUUFBbEIsQ0FBbEI7QUFDQSxLQUhpQixDQUFsQjtBQUtBLFdBQVEsWUFBTTtBQUNiVCxTQUFHLENBQUNJLE9BQUosQ0FBWU0sbUJBQVosQ0FBZ0MsV0FBaEMsRUFBNkNQLFNBQTdDO0FBQ0EsS0FGRDtBQUdBLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxDQVpNOztHQUFNSixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tvcmVhTWFwLjZlM2ZjZWJmYjY0ODY1ZDdlYTJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSVVzZU1vdXNlT3ZlclByb3BzIHtcclxuXHRyZWY7XHJcblx0c2V0Q3VycmVudExvY2F0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTW91c2VPdmVyID0gKHtyZWYsIHNldEN1cnJlbnRMb2NhdGlvbn06IElVc2VNb3VzZU92ZXJQcm9wcykgPT4ge1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgbW91c2VvdmVyID0gcmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKCFlLnRhcmdldC5kYXRhc2V0LmxvY2F0aW9uKSByZXR1cm47XHJcblx0XHRcdHNldEN1cnJlbnRMb2NhdGlvbihlLnRhcmdldC5kYXRhc2V0LmxvY2F0aW9uKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRyZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZW92ZXIpO1xyXG5cdFx0fSlcclxuXHR9LCBbXSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=