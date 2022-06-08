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


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\DimmedBox.tsx",
    _this = undefined;




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var DimmedBox = function DimmedBox(_ref) {
  var wrapRef = _ref.wrapRef,
      imgSize = _ref.imgSize,
      setOffset = _ref.setOffset,
      setCropBoxSize = _ref.setCropBoxSize;

  var startSetCropBox = function startSetCropBox(e) {
    e.preventDefault();
    var startPoint = {
      x: e.pageX,
      y: e.pageY
    };

    var initCropBox = function initCropBox() {
      setOffset({
        x: startPoint.x - wrapRef.current.offsetLeft,
        y: startPoint.y - wrapRef.current.offsetTop
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
      var x = startPoint.x - wrapRef.current.offsetLeft;
      var y = startPoint.y - wrapRef.current.offsetTop;
      var offsetX = (w < 0 ? e.pageX : startPoint.x) - wrapRef.current.offsetLeft;
      var offsetY = (h < 0 ? e.pageY : startPoint.y) - wrapRef.current.offsetTop;
      var absW = Math.abs(w);
      var absH = Math.abs(h);
      var maxW = imgSize.w - x;
      var maxH = imgSize.h - y;
      var minW = 0;
      var minH = 0;
      console.log(w, imgSize.w - x);
      setOffset({
        x: offsetX,
        y: offsetY
      });
      setCropBoxSize({
        w: Object(_data__WEBPACK_IMPORTED_MODULE_1__["clamp"])(absW, minW, maxW),
        h: Object(_data__WEBPACK_IMPORTED_MODULE_1__["clamp"])(absH, minH, maxH)
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
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsIndyYXBSZWYiLCJpbWdTaXplIiwic2V0T2Zmc2V0Iiwic2V0Q3JvcEJveFNpemUiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInciLCJoIiwic2V0Q3JvcEJveCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWJzVyIsIk1hdGgiLCJhYnMiLCJhYnNIIiwibWF4VyIsIm1heEgiLCJtaW5XIiwibWluSCIsImNvbnNvbGUiLCJsb2ciLCJjbGFtcCIsInN0b3BTZXRDcm9wQm94IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQVNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BTU07QUFBQSxNQUpwQkMsT0FJb0IsUUFKcEJBLE9BSW9CO0FBQUEsTUFIcEJDLE9BR29CLFFBSHBCQSxPQUdvQjtBQUFBLE1BRnBCQyxTQUVvQixRQUZwQkEsU0FFb0I7QUFBQSxNQURwQkMsY0FDb0IsUUFEcEJBLGNBQ29COztBQUV0QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBc0Q7QUFDNUVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLFVBQVUsR0FBRztBQUFDQyxPQUFDLEVBQUVILENBQUMsQ0FBQ0ksS0FB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QUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQXBERDs7S0FBTUwsUztBQXNEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLmZlYWRjNzAzM2ZhNTNhZDdlOWFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXplLCBQb2ludCwgY2xhbXAgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBEaW1tZWRCb3hQcm9wcyB7XHJcbiAgd3JhcFJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICBpbWdTaXplOiBTaXplO1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogKChwcmV2OiBQb2ludCkgPT4gUG9pbnQpIHwgUG9pbnQpID0+IHZvaWQ7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGltbWVkQm94ID0gKFxyXG4gIHtcclxuICAgIHdyYXBSZWYsXHJcbiAgICBpbWdTaXplLFxyXG4gICAgc2V0T2Zmc2V0LFxyXG4gICAgc2V0Q3JvcEJveFNpemUsXHJcbiAgfTogRGltbWVkQm94UHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRDcm9wQm94ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IHt4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZfTtcclxuXHJcbiAgICBjb25zdCBpbml0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgc2V0T2Zmc2V0KHtcclxuICAgICAgICB4OiBzdGFydFBvaW50LnggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCwgXHJcbiAgICAgICAgeTogc3RhcnRQb2ludC55IC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHt3OiAwLCBoOiAwfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGluaXRDcm9wQm94KCk7XHJcbiAgICAgIGNvbnN0IHcgPSBlLnBhZ2VYIC0gc3RhcnRQb2ludC54O1xyXG4gICAgICBjb25zdCBoID0gZS5wYWdlWSAtIHN0YXJ0UG9pbnQueTtcclxuICAgICAgY29uc3QgeCA9IHN0YXJ0UG9pbnQueCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0O1xyXG4gICAgICBjb25zdCB5ID0gc3RhcnRQb2ludC55IC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcDtcclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9ICh3IDwgMCA/IGUucGFnZVggOiBzdGFydFBvaW50LngpIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IG9mZnNldFkgPSAoaCA8IDAgPyBlLnBhZ2VZIDogc3RhcnRQb2ludC55KSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3A7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBhYnNXID0gTWF0aC5hYnModyk7XHJcbiAgICAgIGNvbnN0IGFic0ggPSBNYXRoLmFicyhoKTtcclxuICAgICAgY29uc3QgbWF4VyA9IGltZ1NpemUudyAtIHg7XHJcbiAgICAgIGNvbnN0IG1heEggPSBpbWdTaXplLmggLSB5O1xyXG4gICAgICBjb25zdCBtaW5XID0gMDtcclxuICAgICAgY29uc3QgbWluSCA9IDA7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh3LCBpbWdTaXplLncgLSB4KTtcclxuXHJcbiAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldFgsIHk6IG9mZnNldFkgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY2xhbXAoYWJzVywgbWluVywgbWF4VyksIGg6IGNsYW1wKGFic0gsIG1pbkgsIG1heEgpfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBzdG9wU2V0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2N4KCdkaW1tZWRCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0U2V0Q3JvcEJveH0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGltbWVkQm94OyJdLCJzb3VyY2VSb290IjoiIn0=