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
      var offsetX = Object(_data__WEBPACK_IMPORTED_MODULE_1__["eO"])(w < 0, e.pageX, startPoint.x) - wrapRef.current.offsetLeft;
      var offsetY = Object(_data__WEBPACK_IMPORTED_MODULE_1__["eO"])(h < 0, e.pageY, startPoint.y) - wrapRef.current.offsetTop;
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
    onMouseDown: startSetCropBox
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsIndyYXBSZWYiLCJpbWdTaXplIiwic2V0T2Zmc2V0Iiwic2V0Q3JvcEJveFNpemUiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInciLCJoIiwic2V0Q3JvcEJveCIsIm9mZnNldFgiLCJlTyIsIm9mZnNldFkiLCJtYXhDcm9wQm94VyIsIm1heENyb3BCb3hIIiwiY3JvcEJveFciLCJjbGFtcCIsIk1hdGgiLCJhYnMiLCJjcm9wQm94SCIsIm1heCIsInN0b3BTZXRDcm9wQm94IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQVNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BTU07QUFBQSxNQUpwQkMsT0FJb0IsUUFKcEJBLE9BSW9CO0FBQUEsTUFIcEJDLE9BR29CLFFBSHBCQSxPQUdvQjtBQUFBLE1BRnBCQyxTQUVvQixRQUZwQkEsU0FFb0I7QUFBQSxNQURwQkMsY0FDb0IsUUFEcEJBLGNBQ29COztBQUV0QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBc0Q7QUFDNUVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLFVBQVUsR0FBRztBQUFDQyxPQUFDLEVBQUVILENBQUMsQ0FBQ0ks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QUVuQyxFQUFFLENBQUMsV0FBRCxDQUFsQjtBQUFpQyxlQUFXLEVBQUVTO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBL0NEOztLQUFNTCxTO0FBaURTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuZGNhYzk0ZDFlOWQ4YWI5ZmI1MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpemUsIFBvaW50LCBjbGFtcCwgZU8gfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBEaW1tZWRCb3hQcm9wcyB7XHJcbiAgd3JhcFJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICBpbWdTaXplOiBTaXplO1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogKChwcmV2OiBQb2ludCkgPT4gUG9pbnQpIHwgUG9pbnQpID0+IHZvaWQ7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGltbWVkQm94ID0gKFxyXG4gIHtcclxuICAgIHdyYXBSZWYsXHJcbiAgICBpbWdTaXplLFxyXG4gICAgc2V0T2Zmc2V0LFxyXG4gICAgc2V0Q3JvcEJveFNpemUsXHJcbiAgfTogRGltbWVkQm94UHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRDcm9wQm94ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IHt4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZfTtcclxuXHJcbiAgICBjb25zdCBpbml0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgc2V0T2Zmc2V0KHtcclxuICAgICAgICB4OiBzdGFydFBvaW50LnggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCwgXHJcbiAgICAgICAgeTogc3RhcnRQb2ludC55IC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHt3OiAwLCBoOiAwfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGluaXRDcm9wQm94KCk7XHJcbiAgICAgIGNvbnN0IHcgPSBlLnBhZ2VYIC0gc3RhcnRQb2ludC54O1xyXG4gICAgICBjb25zdCBoID0gZS5wYWdlWSAtIHN0YXJ0UG9pbnQueTtcclxuICAgICAgY29uc3QgeCA9IHN0YXJ0UG9pbnQueCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0O1xyXG4gICAgICBjb25zdCB5ID0gc3RhcnRQb2ludC55IC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcDtcclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IGVPKHcgPCAwLCBlLnBhZ2VYLCBzdGFydFBvaW50LngpIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IG9mZnNldFkgPSBlTyhoIDwgMCwgZS5wYWdlWSwgc3RhcnRQb2ludC55KSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3A7XHJcbiAgICAgIGNvbnN0IG1heENyb3BCb3hXID0gKHcgPCAwKSA/IHggOiAoaW1nU2l6ZS53IC0geCk7XHJcbiAgICAgIGNvbnN0IG1heENyb3BCb3hIID0gKGggPCAwKSA/IHkgOiAoaW1nU2l6ZS5oIC0geSk7XHJcbiAgICAgIGNvbnN0IGNyb3BCb3hXID0gY2xhbXAoTWF0aC5hYnModyksIDAsIG1heENyb3BCb3hXKTtcclxuICAgICAgY29uc3QgY3JvcEJveEggPSBjbGFtcChNYXRoLmFicyhoKSwgMCwgbWF4Q3JvcEJveEgpO1xyXG5cclxuICAgICAgc2V0T2Zmc2V0KHsgeDogTWF0aC5tYXgob2Zmc2V0WCwgMCksIHk6IE1hdGgubWF4KG9mZnNldFksIDApIH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hXLCBoOiBjcm9wQm94SH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3Qgc3RvcFNldENyb3BCb3ggPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeCgnZGltbWVkQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFNldENyb3BCb3h9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpbW1lZEJveDsiXSwic291cmNlUm9vdCI6IiJ9