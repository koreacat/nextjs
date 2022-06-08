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
      var offsetX = (w < 0 ? e.pageX : startPoint.x) - wrapRef.current.offsetLeft;
      var offsetY = (h < 0 ? e.pageY : startPoint.y) - wrapRef.current.offsetTop;
      console.log(w, h);
      setOffset({
        x: offsetX,
        y: offsetY
      });
      setCropBoxSize({
        w: Math.abs(w),
        h: Math.abs(h)
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
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsIndyYXBSZWYiLCJpbWdTaXplIiwic2V0T2Zmc2V0Iiwic2V0Q3JvcEJveFNpemUiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInciLCJoIiwic2V0Q3JvcEJveCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY29uc29sZSIsImxvZyIsIk1hdGgiLCJhYnMiLCJzdG9wU2V0Q3JvcEJveCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFTQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQU1NO0FBQUEsTUFKcEJDLE9BSW9CLFFBSnBCQSxPQUlvQjtBQUFBLE1BSHBCQyxPQUdvQixRQUhwQkEsT0FHb0I7QUFBQSxNQUZwQkMsU0FFb0IsUUFGcEJBLFNBRW9CO0FBQUEsTUFEcEJDLGNBQ29CLFFBRHBCQSxjQUNvQjs7QUFFdEIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQXNEO0FBQzVFQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxVQUFVLEdBQUc7QUFBQ0MsT0FBQyxFQUFFSCxDQUFDLENBQUNJLEtBQU47QUFBYUMsT0FBQyxFQUFFTCxDQUFDLENBQUNNO0FBQWxCLEtBQW5COztBQUVBLFFBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJWLGVBQVMsQ0FBQztBQUNSTSxTQUFDLEVBQUVELFVBQVUsQ0FBQ0MsQ0FBWCxHQUFlUixPQUFPLENBQUNhLE9BQVIsQ0FBZ0JDLFVBRDFCO0FBRVJKLFNBQUMsRUFBRUgsVUFBVSxDQUFDRyxDQUFYLEdBQWVWLE9BQU8sQ0FBQ2EsT0FBUixDQUFnQkU7QUFGMUIsT0FBRCxDQUFUO0FBSUFaLG9CQUFjLENBQUM7QUFBQ2EsU0FBQyxFQUFFLENBQUo7QUFBT0MsU0FBQyxFQUFFO0FBQVYsT0FBRCxDQUFkO0FBQ0QsS0FORDs7QUFRQSxRQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDYixDQUFELEVBQW1CO0FBQ3BDTyxpQkFBVztBQUNYLFVBQU1JLENBQUMsR0FBR1gsQ0FBQyxDQUFDSSxLQUFGLEdBQVVGLFVBQVUsQ0FBQ0MsQ0FBL0I7QUFDQSxVQUFNUyxDQUFDLEdBQUdaLENBQUMsQ0FBQ00sS0FBRixHQUFVSixVQUFVLENBQUNHLENBQS9CO0FBQ0EsVUFBTVMsT0FBTyxHQUFHLENBQUNILENBQUMsR0FBRyxDQUFKLEdBQVFYLENBQUMsQ0FBQ0ksS0FBVixHQUFrQkYsVUFBVSxDQUFDQyxDQUE5QixJQUFtQ1IsT0FBTyxDQUFDYSxPQUFSLENBQWdCQyxVQUFuRTtBQUNBLFVBQU1NLE9BQU8sR0FBRyxDQUFDSCxDQUFDLEdBQUcsQ0FBSixHQUFRWixDQUFDLENBQUNNLEtBQVYsR0FBa0JKLFVBQVUsQ0FBQ0csQ0FBOUIsSUFBbUNWLE9BQU8sQ0FBQ2EsT0FBUixDQUFnQkUsU0FBbkU7QUFFQU0sYUFBTyxDQUFDQyxHQUFSLENBQVlOLENBQVosRUFBZUMsQ0FBZjtBQUVBZixlQUFTLENBQUM7QUFBRU0sU0FBQyxFQUFFVyxPQUFMO0FBQWNULFNBQUMsRUFBRVU7QUFBakIsT0FBRCxDQUFUO0FBQ0FqQixvQkFBYyxDQUFDO0FBQUVhLFNBQUMsRUFBRU8sSUFBSSxDQUFDQyxHQUFMLENBQVNSLENBQVQsQ0FBTDtBQUFrQkMsU0FBQyxFQUFFTSxJQUFJLENBQUNDLEdBQUwsQ0FBU1AsQ0FBVDtBQUFyQixPQUFELENBQWQ7QUFDRCxLQVhEOztBQWFBLFFBQU1RLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQkMsY0FBUSxDQUFDQyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ1QsVUFBMUM7QUFDQVEsY0FBUSxDQUFDQyxtQkFBVCxDQUE2QixTQUE3QixFQUF3Q0YsY0FBeEM7QUFDRCxLQUhEOztBQUtBQyxZQUFRLENBQUNFLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDVixVQUF2QztBQUNBUSxZQUFRLENBQUNFLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDSCxjQUFyQztBQUNELEdBaENEOztBQWtDQSxzQkFBTztBQUFLLGFBQVMsRUFBRTlCLEVBQUUsQ0FBQyxXQUFELENBQWxCO0FBQWlDLGVBQVcsRUFBRVM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0EzQ0Q7O0tBQU1MLFM7QUE2Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC44NzcwNDMxNTY0MDEyZmYyOTVlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l6ZSwgUG9pbnQgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBEaW1tZWRCb3hQcm9wcyB7XHJcbiAgd3JhcFJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICBpbWdTaXplOiBTaXplO1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogKChwcmV2OiBQb2ludCkgPT4gUG9pbnQpIHwgUG9pbnQpID0+IHZvaWQ7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGltbWVkQm94ID0gKFxyXG4gIHtcclxuICAgIHdyYXBSZWYsXHJcbiAgICBpbWdTaXplLFxyXG4gICAgc2V0T2Zmc2V0LFxyXG4gICAgc2V0Q3JvcEJveFNpemUsXHJcbiAgfTogRGltbWVkQm94UHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRDcm9wQm94ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IHt4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZfTtcclxuXHJcbiAgICBjb25zdCBpbml0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgc2V0T2Zmc2V0KHtcclxuICAgICAgICB4OiBzdGFydFBvaW50LnggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCwgXHJcbiAgICAgICAgeTogc3RhcnRQb2ludC55IC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHt3OiAwLCBoOiAwfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGluaXRDcm9wQm94KCk7XHJcbiAgICAgIGNvbnN0IHcgPSBlLnBhZ2VYIC0gc3RhcnRQb2ludC54O1xyXG4gICAgICBjb25zdCBoID0gZS5wYWdlWSAtIHN0YXJ0UG9pbnQueTtcclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9ICh3IDwgMCA/IGUucGFnZVggOiBzdGFydFBvaW50LngpIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IG9mZnNldFkgPSAoaCA8IDAgPyBlLnBhZ2VZIDogc3RhcnRQb2ludC55KSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3A7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh3LCBoKTtcclxuXHJcbiAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldFgsIHk6IG9mZnNldFkgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHsgdzogTWF0aC5hYnModyksIGg6IE1hdGguYWJzKGgpIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3Qgc3RvcFNldENyb3BCb3ggPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeCgnZGltbWVkQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFNldENyb3BCb3h9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpbW1lZEJveDsiXSwic291cmNlUm9vdCI6IiJ9