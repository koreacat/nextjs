webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/DimmedBox.tsx":
/*!************************************************!*\
  !*** ./src/components/imageCrop/DimmedBox.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCrop.module.scss */ "./src/components/imageCrop/imageCrop.module.scss");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\DimmedBox.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

var DimmedBox = function DimmedBox(_ref) {
  var imgSize = _ref.imgSize,
      setOffset = _ref.setOffset,
      setCropBoxSize = _ref.setCropBoxSize;

  var startSetCropBox = function startSetCropBox(e) {
    e.preventDefault();
    var startPoint = {
      x: e.pageX,
      y: e.pageY
    };

    var setCropBox = function setCropBox(e) {
      console.log(startPoint, e.pageX, e.pageY);
      var w = Math.abs(e.pageX - startPoint.x);
      var h = Math.abs(e.pageY - startPoint.y);
      setCropBoxSize({
        w: w < 0 ? 0 : w > imgSize.w ? imgSize.w - w : w,
        h: h < 0 ? 0 : h > imgSize.h ? imgSize.h - h : h
      });
    };

    var stopSetCropBox = function stopSetCropBox() {
      document.removeEventListener("mousemove", setCropBox);
      document.removeEventListener("mouseup", stopSetCropBox);
    };

    document.addEventListener("mousemove", setCropBox);
    document.addEventListener("mouseup", stopSetCropBox);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('dimmedBox'),
    onMouseDown: startSetCropBox
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 10
  }, _this);
};

_c = DimmedBox;
/* harmony default export */ __webpack_exports__["default"] = (DimmedBox);

var _c;

$RefreshReg$(_c, "DimmedBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsImltZ1NpemUiLCJzZXRPZmZzZXQiLCJzZXRDcm9wQm94U2l6ZSIsInN0YXJ0U2V0Q3JvcEJveCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0UG9pbnQiLCJ4IiwicGFnZVgiLCJ5IiwicGFnZVkiLCJzZXRDcm9wQm94IiwiY29uc29sZSIsImxvZyIsInciLCJNYXRoIiwiYWJzIiwiaCIsInN0b3BTZXRDcm9wQm94IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQVFBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BS007QUFBQSxNQUhwQkMsT0FHb0IsUUFIcEJBLE9BR29CO0FBQUEsTUFGcEJDLFNBRW9CLFFBRnBCQSxTQUVvQjtBQUFBLE1BRHBCQyxjQUNvQixRQURwQkEsY0FDb0I7O0FBRXRCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFzRDtBQUM1RUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsVUFBVSxHQUFHO0FBQUNDLE9BQUMsRUFBRUgsQ0FBQyxDQUFDSSxLQUFOO0FBQWFDLE9BQUMsRUFBRUwsQ0FBQyxDQUFDTTtBQUFsQixLQUFuQjs7QUFFQSxRQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDUCxDQUFELEVBQW1CO0FBQ3BDUSxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsVUFBWixFQUF3QkYsQ0FBQyxDQUFDSSxLQUExQixFQUFpQ0osQ0FBQyxDQUFDTSxLQUFuQztBQUNBLFVBQU1JLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNaLENBQUMsQ0FBQ0ksS0FBRixHQUFVRixVQUFVLENBQUNDLENBQTlCLENBQVY7QUFDQSxVQUFNVSxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsR0FBTCxDQUFTWixDQUFDLENBQUNNLEtBQUYsR0FBVUosVUFBVSxDQUFDRyxDQUE5QixDQUFWO0FBRUFQLG9CQUFjLENBQUM7QUFDYlksU0FBQyxFQUFHQSxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQVYsR0FBZUEsQ0FBQyxHQUFHZCxPQUFPLENBQUNjLENBQWIsR0FBa0JkLE9BQU8sQ0FBQ2MsQ0FBUixHQUFZQSxDQUE5QixHQUFrQ0EsQ0FEdEM7QUFFYkcsU0FBQyxFQUFHQSxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQVYsR0FBZUEsQ0FBQyxHQUFHakIsT0FBTyxDQUFDaUIsQ0FBYixHQUFrQmpCLE9BQU8sQ0FBQ2lCLENBQVIsR0FBWUEsQ0FBOUIsR0FBa0NBO0FBRnRDLE9BQUQsQ0FBZDtBQUlELEtBVEQ7O0FBV0EsUUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCQyxjQUFRLENBQUNDLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDVCxVQUExQztBQUNBUSxjQUFRLENBQUNDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDRixjQUF4QztBQUNELEtBSEQ7O0FBS0FDLFlBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNWLFVBQXZDO0FBQ0FRLFlBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNILGNBQXJDO0FBQ0QsR0F0QkQ7O0FBd0JBLHNCQUFPO0FBQUssYUFBUyxFQUFFdkIsRUFBRSxDQUFDLFdBQUQsQ0FBbEI7QUFBaUMsZUFBVyxFQUFFUTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQWhDRDs7S0FBTUosUztBQWtDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjZmNDhhMWJkMGY3MTcxN2E1MWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXplLCBQb2ludCB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBEaW1tZWRCb3hQcm9wcyB7XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxuICBzZXRPZmZzZXQ6IChvZmZzZXQ6ICgocHJldjogUG9pbnQpID0+IFBvaW50KSB8IFBvaW50KSA9PiB2b2lkO1xyXG4gIHNldENyb3BCb3hTaXplOiAoY3JvcEJveFNpemU6IFNpemUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERpbW1lZEJveCA9IChcclxuICB7XHJcbiAgICBpbWdTaXplLFxyXG4gICAgc2V0T2Zmc2V0LFxyXG4gICAgc2V0Q3JvcEJveFNpemUsXHJcbiAgfTogRGltbWVkQm94UHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRDcm9wQm94ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IHt4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZfTtcclxuXHJcbiAgICBjb25zdCBzZXRDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coc3RhcnRQb2ludCwgZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICAgIGNvbnN0IHcgPSBNYXRoLmFicyhlLnBhZ2VYIC0gc3RhcnRQb2ludC54KTtcclxuICAgICAgY29uc3QgaCA9IE1hdGguYWJzKGUucGFnZVkgLSBzdGFydFBvaW50LnkpO1xyXG5cclxuICAgICAgc2V0Q3JvcEJveFNpemUoe1xyXG4gICAgICAgIHc6ICh3IDwgMCkgPyAwIDogKHcgPiBpbWdTaXplLncpID8gaW1nU2l6ZS53IC0gdyA6IHcsXHJcbiAgICAgICAgaDogKGggPCAwKSA/IDAgOiAoaCA+IGltZ1NpemUuaCkgPyBpbWdTaXplLmggLSBoIDogaCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBzdG9wU2V0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2N4KCdkaW1tZWRCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0U2V0Q3JvcEJveH0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGltbWVkQm94OyJdLCJzb3VyY2VSb290IjoiIn0=