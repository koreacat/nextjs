webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/fixedHeader/FixedHeader.tsx":
/*!************************************************!*\
  !*** ./components/fixedHeader/FixedHeader.tsx ***!
  \************************************************/
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
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/Header */ "./components/header/Header.tsx");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\components\\fixedHeader\\FixedHeader.tsx",
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
    className: classnames_bind__WEBPACK_IMPORTED_MODULE_2___default()('fixedHeader', scrollUp && 'Up'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, this)
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

/***/ }),

/***/ "./components/header/index.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maXhlZEhlYWRlci9GaXhlZEhlYWRlci50c3giXSwibmFtZXMiOlsiRml4ZWRIZWFkZXIiLCJsYXN0U2Nyb2xsVG9wIiwidXNlU3RhdGUiLCJzY3JvbGxVcCIsInNldFNjcm9sbFVwIiwic2Nyb2xsRXZlbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDckMsTUFBSUMsYUFBYSxHQUFHLENBQXBCOztBQURxQyxrQkFFTEMsc0RBQVEsQ0FBQyxJQUFELENBRkg7QUFBQSxNQUU5QkMsUUFGOEI7QUFBQSxNQUVwQkMsV0FGb0I7O0FBSXJDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLENBQVQsRUFBbUI7QUFDdENBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLElBQXNCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTFEOztBQUNBLFFBQUlMLEVBQUUsR0FBR1AsYUFBVCxFQUF1QjtBQUN0QkcsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQSxLQUZELE1BRU87QUFDTkEsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQTs7QUFDREgsaUJBQWEsR0FBSU8sRUFBRSxJQUFJLENBQU4sR0FBVSxDQUFWLEdBQWNBLEVBQS9CO0FBQ0EsR0FURDs7QUFXQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2ZILFlBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NWLFdBQXBDLEVBQWlELEtBQWpEO0FBQ0EsV0FBUSxZQUFNO0FBQ2JNLGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNYLFdBQXZDO0FBQ0EsS0FGRDtBQUdBLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDQztBQUFLLGFBQVMsRUFBRVksc0RBQVUsQ0FBQyxhQUFELEVBQWdCZCxRQUFRLElBQUksSUFBNUIsQ0FBMUI7QUFBQSwyQkFDQyxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBS0E7O0dBM0J1QkgsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE0YjY2OTc2MTQ3NzMxNDE0Y2YzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXhlZEhlYWRlcigpIHtcclxuXHRsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblx0Y29uc3QgW3Njcm9sbFVwLCBzZXRTY3JvbGxVcF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0Y29uc3Qgc2Nyb2xsRXZlbnQgPSBmdW5jdGlvbihlOiBFdmVudCkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3Qgc3QgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdGlmIChzdCA+IGxhc3RTY3JvbGxUb3Ape1xyXG5cdFx0XHRzZXRTY3JvbGxVcCh0cnVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFNjcm9sbFVwKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGxhc3RTY3JvbGxUb3AgPSAoc3QgPD0gMCA/IDAgOiBzdCk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEV2ZW50LCBmYWxzZSk7XHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRXZlbnQpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2ZpeGVkSGVhZGVyJywgc2Nyb2xsVXAgJiYgJ1VwJyl9PlxyXG5cdFx0XHQ8SGVhZGVyLz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9