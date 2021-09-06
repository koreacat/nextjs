webpackHotUpdate_N_E("pages/koreaMap",{

/***/ "./src/components/koreaMap/hooks/index.ts":
/*!************************************************!*\
  !*** ./src/components/koreaMap/hooks/index.ts ***!
  \************************************************/
/*! exports provided: useMouseHover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMouseHover", function() { return useMouseHover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


var useMouseHover = function useMouseHover(_ref) {
  _s();

  var ref = _ref.ref,
      cx = _ref.cx,
      setCurrentLocation = _ref.setCurrentLocation;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var mouseover = ref.current.addEventListener('mouseover', function (e) {
      if (!e.target.dataset.location) return;
      setCurrentLocation(e.target.dataset.location, function () {
        return e.target.classList.add(cx('hover'));
      });
    });
    return function () {
      ref.current.removeEventListener('mouseover', mouseover);
    };
  }, []);
};

_s(useMouseHover, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvaG9va3MvaW5kZXgudHMiXSwibmFtZXMiOlsidXNlTW91c2VIb3ZlciIsInJlZiIsImN4Iiwic2V0Q3VycmVudExvY2F0aW9uIiwidXNlRWZmZWN0IiwibW91c2VvdmVyIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsImxvY2F0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUF3RDtBQUFBOztBQUFBLE1BQXREQyxHQUFzRCxRQUF0REEsR0FBc0Q7QUFBQSxNQUFqREMsRUFBaUQsUUFBakRBLEVBQWlEO0FBQUEsTUFBN0NDLGtCQUE2QyxRQUE3Q0Esa0JBQTZDO0FBRXBGQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxTQUFTLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZQyxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxVQUFDQyxDQUFELEVBQU87QUFDbEUsVUFBSSxDQUFDQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsUUFBdEIsRUFBZ0M7QUFDaENSLHdCQUFrQixDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsUUFBbEIsRUFBNEI7QUFBQSxlQUFNSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0csU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUJYLEVBQUUsQ0FBQyxPQUFELENBQXpCLENBQU47QUFBQSxPQUE1QixDQUFsQjtBQUNBLEtBSGlCLENBQWxCO0FBS0EsV0FBUSxZQUFNO0FBQ2JELFNBQUcsQ0FBQ0ssT0FBSixDQUFZUSxtQkFBWixDQUFnQyxXQUFoQyxFQUE2Q1QsU0FBN0M7QUFDQSxLQUZEO0FBR0EsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVVBLENBWk07O0dBQU1MLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva29yZWFNYXAuNTBjODdiODI5MzMyMjgwZjUyYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgSVVzZU1vdXNlSG92ZXJQcm9wcyB7XHJcblx0cmVmO1xyXG5cdGN4O1xyXG5cdHNldEN1cnJlbnRMb2NhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1vdXNlSG92ZXIgPSAoe3JlZiwgY3gsIHNldEN1cnJlbnRMb2NhdGlvbn06IElVc2VNb3VzZUhvdmVyUHJvcHMpID0+IHtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IG1vdXNlb3ZlciA9IHJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcblx0XHRcdGlmICghZS50YXJnZXQuZGF0YXNldC5sb2NhdGlvbikgcmV0dXJuO1xyXG5cdFx0XHRzZXRDdXJyZW50TG9jYXRpb24oZS50YXJnZXQuZGF0YXNldC5sb2NhdGlvbiwgKCkgPT4gZS50YXJnZXQuY2xhc3NMaXN0LmFkZChjeCgnaG92ZXInKSkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuICgoKSA9PiB7XHJcblx0XHRcdHJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlb3Zlcik7XHJcblx0XHR9KVxyXG5cdH0sIFtdKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==