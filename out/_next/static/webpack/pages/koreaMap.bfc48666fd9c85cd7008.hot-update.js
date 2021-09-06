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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvaG9va3MvaW5kZXgudHMiXSwibmFtZXMiOlsidXNlTW91c2VPdmVyIiwicmVmIiwic2V0Q3VycmVudExvY2F0aW9uIiwidXNlRWZmZWN0IiwibW91c2VvdmVyIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsImxvY2F0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT08sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBb0Q7QUFBQTs7QUFBQSxNQUFsREMsR0FBa0QsUUFBbERBLEdBQWtEO0FBQUEsTUFBN0NDLGtCQUE2QyxRQUE3Q0Esa0JBQTZDO0FBRS9FQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksT0FBSixDQUFZQyxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxVQUFDQyxDQUFELEVBQU87QUFDbEUsVUFBSSxDQUFDQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsUUFBdEIsRUFBZ0M7QUFDaENSLHdCQUFrQixDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsUUFBbEIsQ0FBbEI7QUFDQSxLQUhpQixDQUFsQjtBQUtBLFdBQVEsWUFBTTtBQUNiVCxTQUFHLENBQUNJLE9BQUosQ0FBWU0sbUJBQVosQ0FBZ0MsV0FBaEMsRUFBNkNQLFNBQTdDO0FBQ0EsS0FGRDtBQUdBLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxDQVpNOztHQUFNSixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tvcmVhTWFwLmJmYzQ4NjY2ZmQ5Yzg1Y2Q3MDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSVVzZU1vdXNlSG92ZXJQcm9wcyB7XHJcblx0cmVmO1xyXG5cdHNldEN1cnJlbnRMb2NhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1vdXNlT3ZlciA9ICh7cmVmLCBzZXRDdXJyZW50TG9jYXRpb259OiBJVXNlTW91c2VIb3ZlclByb3BzKSA9PiB7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBtb3VzZW92ZXIgPSByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG5cdFx0XHRpZiAoIWUudGFyZ2V0LmRhdGFzZXQubG9jYXRpb24pIHJldHVybjtcclxuXHRcdFx0c2V0Q3VycmVudExvY2F0aW9uKGUudGFyZ2V0LmRhdGFzZXQubG9jYXRpb24pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuICgoKSA9PiB7XHJcblx0XHRcdHJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlb3Zlcik7XHJcblx0XHR9KVxyXG5cdH0sIFtdKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==