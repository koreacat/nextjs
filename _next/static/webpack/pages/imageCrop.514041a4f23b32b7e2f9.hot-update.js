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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/components/imageCrop/data.ts");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCrop.module.scss */ "./src/components/imageCrop/imageCrop.module.scss");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\imageCrop\\DimmedBox.tsx",
    _this = undefined;




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var DimmedBox = function DimmedBox(_ref) {
  var imgSize = _ref.imgSize,
      setOffset = _ref.setOffset,
      setCropBoxSize = _ref.setCropBoxSize,
      offsetTop = _ref.offsetTop,
      offsetLeft = _ref.offsetLeft;

  var startSetCropBox = function startSetCropBox(e) {
    e.preventDefault();
    var startPoint = {
      x: e.pageX,
      y: e.pageY
    };
    console.log(startPoint, offsetLeft, offsetTop);

    var initCropBox = function initCropBox() {
      setOffset({
        x: startPoint.x - offsetLeft,
        y: startPoint.y - offsetTop
      });
      setCropBoxSize({
        w: 0,
        h: 0
      });
    };

    var setCropBox = function setCropBox(e) {
      initCropBox();
      var w = e.pageX - startPoint.x;
      var h = e.pageY - startPoint.y;
      var x = startPoint.x - offsetLeft;
      var y = startPoint.y - offsetTop;
      var offsetX = (w < 0 ? e.pageX : startPoint.x) - offsetLeft;
      var offsetY = (h < 0 ? e.pageY : startPoint.y) - offsetTop;
      var maxCropBoxW = w < 0 ? x : imgSize.w - x;
      var maxCropBoxH = h < 0 ? y : imgSize.h - y;
      var cropBoxW = Object(_data__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.abs(w), 0, maxCropBoxW);
      var cropBoxH = Object(_data__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.abs(h), 0, maxCropBoxH);
      setOffset({
        x: Math.max(offsetX, 0),
        y: Math.max(offsetY, 0)
      });
      setCropBoxSize({
        w: cropBoxW,
        h: cropBoxH
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
    onMouseDown: startSetCropBox,
    style: {
      width: "".concat(imgSize.w, "px"),
      height: "".concat(imgSize.h, "px")
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsImltZ1NpemUiLCJzZXRPZmZzZXQiLCJzZXRDcm9wQm94U2l6ZSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiY29uc29sZSIsImxvZyIsImluaXRDcm9wQm94IiwidyIsImgiLCJzZXRDcm9wQm94Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJtYXhDcm9wQm94VyIsIm1heENyb3BCb3hIIiwiY3JvcEJveFciLCJjbGFtcCIsIk1hdGgiLCJhYnMiLCJjcm9wQm94SCIsIm1heCIsInN0b3BTZXRDcm9wQm94IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBVUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FPTTtBQUFBLE1BTHBCQyxPQUtvQixRQUxwQkEsT0FLb0I7QUFBQSxNQUpwQkMsU0FJb0IsUUFKcEJBLFNBSW9CO0FBQUEsTUFIcEJDLGNBR29CLFFBSHBCQSxjQUdvQjtBQUFBLE1BRnBCQyxTQUVvQixRQUZwQkEsU0FFb0I7QUFBQSxNQURwQkMsVUFDb0IsUUFEcEJBLFVBQ29COztBQUV0QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBc0Q7QUFDNUVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1D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Q0w0QixXQUFLLFlBQUtqQyxPQUFPLENBQUNnQixDQUFiLE9BREE7QUFFTGtCLFlBQU0sWUFBS2xDLE9BQU8sQ0FBQ2lCLENBQWI7QUFGRDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBMUREOztLQUFNbEIsUztBQTREU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjUxNDA0MWE0ZjIzYjMyYjdlMmY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXplLCBQb2ludCwgY2xhbXAgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRGltbWVkQm94UHJvcHMge1xyXG4gIGltZ1NpemU6IFNpemU7XHJcbiAgc2V0T2Zmc2V0OiAob2Zmc2V0OiAoKHByZXY6IFBvaW50KSA9PiBQb2ludCkgfCBQb2ludCkgPT4gdm9pZDtcclxuICBzZXRDcm9wQm94U2l6ZTogKGNyb3BCb3hTaXplOiBTaXplKSA9PiB2b2lkO1xyXG4gIG9mZnNldFRvcDogbnVtYmVyO1xyXG4gIG9mZnNldExlZnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgRGltbWVkQm94ID0gKFxyXG4gIHtcclxuICAgIGltZ1NpemUsXHJcbiAgICBzZXRPZmZzZXQsXHJcbiAgICBzZXRDcm9wQm94U2l6ZSxcclxuICAgIG9mZnNldFRvcCxcclxuICAgIG9mZnNldExlZnQsXHJcbiAgfTogRGltbWVkQm94UHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRDcm9wQm94ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9O1xyXG4gICAgY29uc29sZS5sb2coc3RhcnRQb2ludCwgb2Zmc2V0TGVmdCwgb2Zmc2V0VG9wKTtcclxuXHJcbiAgICBjb25zdCBpbml0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgc2V0T2Zmc2V0KHtcclxuICAgICAgICB4OiBzdGFydFBvaW50LnggLSBvZmZzZXRMZWZ0LFxyXG4gICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtIG9mZnNldFRvcCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHsgdzogMCwgaDogMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaW5pdENyb3BCb3goKTtcclxuICAgICAgY29uc3QgdyA9IGUucGFnZVggLSBzdGFydFBvaW50Lng7XHJcbiAgICAgIGNvbnN0IGggPSBlLnBhZ2VZIC0gc3RhcnRQb2ludC55O1xyXG4gICAgICBjb25zdCB4ID0gc3RhcnRQb2ludC54IC0gb2Zmc2V0TGVmdDtcclxuICAgICAgY29uc3QgeSA9IHN0YXJ0UG9pbnQueSAtIG9mZnNldFRvcDtcclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9ICgodyA8IDApID8gZS5wYWdlWCA6IHN0YXJ0UG9pbnQueCkgLSBvZmZzZXRMZWZ0O1xyXG4gICAgICBjb25zdCBvZmZzZXRZID0gKChoIDwgMCkgPyBlLnBhZ2VZIDogc3RhcnRQb2ludC55KSAtIG9mZnNldFRvcDtcclxuICAgICAgY29uc3QgbWF4Q3JvcEJveFcgPSAodyA8IDApID8geCA6IChpbWdTaXplLncgLSB4KTtcclxuICAgICAgY29uc3QgbWF4Q3JvcEJveEggPSAoaCA8IDApID8geSA6IChpbWdTaXplLmggLSB5KTtcclxuICAgICAgY29uc3QgY3JvcEJveFcgPSBjbGFtcChNYXRoLmFicyh3KSwgMCwgbWF4Q3JvcEJveFcpO1xyXG4gICAgICBjb25zdCBjcm9wQm94SCA9IGNsYW1wKE1hdGguYWJzKGgpLCAwLCBtYXhDcm9wQm94SCk7XHJcblxyXG4gICAgICBzZXRPZmZzZXQoeyB4OiBNYXRoLm1heChvZmZzZXRYLCAwKSwgeTogTWF0aC5tYXgob2Zmc2V0WSwgMCkgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFcsIGg6IGNyb3BCb3hIIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRDcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfVxyXG4gICAgICBvbk1vdXNlRG93bj17c3RhcnRTZXRDcm9wQm94fVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaW1tZWRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==