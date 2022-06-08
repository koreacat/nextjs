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
        x: e.pageX - wrapRef.current.offsetLeft,
        y: e.pageY - wrapRef.current.offsetTop
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
      console.log(startPoint, e.pageX, e.pageY);

      if (w < 0 && h < 0) {
        setOffset({
          x: e.pageX - wrapRef.current.offsetLeft,
          y: e.pageY - wrapRef.current.offsetTop
        });
      }

      if (w >= 0 && h < 0) {
        console.log('a');
        setOffset({
          x: e.pageX - wrapRef.current.offsetLeft,
          y: e.pageY - wrapRef.current.offsetTop
        });
      }

      if (w < 0 && h >= 0) {
        console.log('b');
        setOffset({
          x: e.pageX - wrapRef.current.offsetLeft,
          y: e.pageY - wrapRef.current.offsetTop
        });
      }

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
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsIndyYXBSZWYiLCJpbWdTaXplIiwic2V0T2Zmc2V0Iiwic2V0Q3JvcEJveFNpemUiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInciLCJoIiwic2V0Q3JvcEJveCIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwiYWJzIiwic3RvcFNldENyb3BCb3giLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBU0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FNTTtBQUFBLE1BSnBCQyxPQUlvQixRQUpwQkEsT0FJb0I7QUFBQSxNQUhwQkMsT0FHb0IsUUFIcEJBLE9BR29CO0FBQUEsTUFGcEJDLFNBRW9CLFFBRnBCQSxTQUVvQjtBQUFBLE1BRHBCQyxjQUNvQixRQURwQkEsY0FDb0I7O0FBRXRCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFzRDtBQUM1RUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsVUFBVSxHQUFHO0FBQUNDLE9BQUMsRUFBRUgsQ0FBQyxDQUFDSSxLQUFOO0FBQWFDLE9BQUMsRUFBRUwsQ0FBQyxDQUFDTTtBQUFsQixLQUFuQjs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxH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L3BhZ2VzL2ltYWdlQ3JvcC43NTllZDhmZjMxNjRlZjgyODc5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l6ZSwgUG9pbnQgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBEaW1tZWRCb3hQcm9wcyB7XHJcbiAgd3JhcFJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICBpbWdTaXplOiBTaXplO1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogKChwcmV2OiBQb2ludCkgPT4gUG9pbnQpIHwgUG9pbnQpID0+IHZvaWQ7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGltbWVkQm94ID0gKFxyXG4gIHtcclxuICAgIHdyYXBSZWYsXHJcbiAgICBpbWdTaXplLFxyXG4gICAgc2V0T2Zmc2V0LFxyXG4gICAgc2V0Q3JvcEJveFNpemUsXHJcbiAgfTogRGltbWVkQm94UHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRDcm9wQm94ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IHt4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZfTtcclxuXHJcbiAgICBjb25zdCBpbml0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgc2V0T2Zmc2V0KHtcclxuICAgICAgICB4OiBlLnBhZ2VYIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQsIFxyXG4gICAgICAgIHk6IGUucGFnZVkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0Q3JvcEJveFNpemUoe3c6IDAsIGg6IDB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaW5pdENyb3BCb3goKTtcclxuICAgICAgY29uc3QgdyA9IGUucGFnZVggLSBzdGFydFBvaW50Lng7XHJcbiAgICAgIGNvbnN0IGggPSBlLnBhZ2VZIC0gc3RhcnRQb2ludC55O1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGFydFBvaW50LCBlLnBhZ2VYLCBlLnBhZ2VZKTtcclxuXHJcbiAgICAgIGlmKHcgPCAwICYmIGggPCAwKSB7XHJcbiAgICAgICAgc2V0T2Zmc2V0KHtcclxuICAgICAgICAgIHg6IGUucGFnZVggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCwgXHJcbiAgICAgICAgICB5OiBlLnBhZ2VZIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodyA+PSAwICYmIGggPCAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EnKTtcclxuICAgICAgICBzZXRPZmZzZXQoe1xyXG4gICAgICAgICAgeDogZS5wYWdlWCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0LCBcclxuICAgICAgICAgIHk6IGUucGFnZVkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IFxyXG4gICAgICBcclxuICAgICAgaWYodyA8IDAgJiYgaCA+PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2InKTtcclxuICAgICAgICBzZXRPZmZzZXQoe1xyXG4gICAgICAgICAgeDogZS5wYWdlWCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0LCBcclxuICAgICAgICAgIHk6IGUucGFnZVkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IFxyXG4gICAgICBcclxuICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBNYXRoLmFicyh3KSwgaDogTWF0aC5hYnMoaCkgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBzdG9wU2V0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2N4KCdkaW1tZWRCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0U2V0Q3JvcEJveH0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGltbWVkQm94OyJdLCJzb3VyY2VSb290IjoiIn0=