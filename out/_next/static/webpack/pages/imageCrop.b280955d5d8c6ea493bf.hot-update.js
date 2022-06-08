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
      var maxW = imgSize.w - x;
      var maxH = imgSize.h - y;
      var cropBoxW = Object(_data__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.abs(w), 0, maxW);
      var cropBoxH = Object(_data__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.abs(h), 0, maxH);
      console.log(w, cropBoxW, maxW);
      setOffset({
        x: offsetX,
        y: offsetY
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
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsIndyYXBSZWYiLCJpbWdTaXplIiwic2V0T2Zmc2V0Iiwic2V0Q3JvcEJveFNpemUiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInciLCJoIiwic2V0Q3JvcEJveCIsIm9mZnNldFgiLCJvZmZzZXRZIiwibWF4VyIsIm1heEgiLCJjcm9wQm94VyIsImNsYW1wIiwiTWF0aCIsImFicyIsImNyb3BCb3hIIiwiY29uc29sZSIsImxvZyIsInN0b3BTZXRDcm9wQm94IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQVNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BTU07QUFBQSxNQUpwQkMsT0FJb0IsUUFKcEJBLE9BSW9CO0FBQUEsTUFIcEJDLE9BR29CLFFBSHBCQSxPQUdvQjtBQUFBLE1BRnBCQyxTQUVvQixRQUZwQkEsU0FFb0I7QUFBQSxNQURwQkMsY0FDb0IsUUFEcEJBLGNBQ29COztBQUV0QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBc0Q7QUFDNUVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLFVBQVUsR0FBRztBQUFDQyxPQUFDLEVBQUVILENBQUMsQ0FBQ0ksS0FBTjtBQUFh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YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC5iMjgwOTU1ZDVkOGM2ZWE0OTNiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l6ZSwgUG9pbnQsIGNsYW1wIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRGltbWVkQm94UHJvcHMge1xyXG4gIHdyYXBSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxuICBzZXRPZmZzZXQ6IChvZmZzZXQ6ICgocHJldjogUG9pbnQpID0+IFBvaW50KSB8IFBvaW50KSA9PiB2b2lkO1xyXG4gIHNldENyb3BCb3hTaXplOiAoY3JvcEJveFNpemU6IFNpemUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERpbW1lZEJveCA9IChcclxuICB7XHJcbiAgICB3cmFwUmVmLFxyXG4gICAgaW1nU2l6ZSxcclxuICAgIHNldE9mZnNldCxcclxuICAgIHNldENyb3BCb3hTaXplLFxyXG4gIH06IERpbW1lZEJveFByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0Q3JvcEJveCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSB7eDogZS5wYWdlWCwgeTogZS5wYWdlWX07XHJcblxyXG4gICAgY29uc3QgaW5pdENyb3BCb3ggPSAoKSA9PiB7XHJcbiAgICAgIHNldE9mZnNldCh7XHJcbiAgICAgICAgeDogc3RhcnRQb2ludC54IC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQsIFxyXG4gICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3AsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7dzogMCwgaDogMH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpbml0Q3JvcEJveCgpO1xyXG4gICAgICBjb25zdCB3ID0gZS5wYWdlWCAtIHN0YXJ0UG9pbnQueDtcclxuICAgICAgY29uc3QgaCA9IGUucGFnZVkgLSBzdGFydFBvaW50Lnk7XHJcbiAgICAgIGNvbnN0IHggPSBzdGFydFBvaW50LnggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdDtcclxuICAgICAgY29uc3QgeSA9IHN0YXJ0UG9pbnQueSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3A7XHJcbiAgICAgIGNvbnN0IG9mZnNldFggPSAodyA8IDAgPyBlLnBhZ2VYIDogc3RhcnRQb2ludC54KSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0O1xyXG4gICAgICBjb25zdCBvZmZzZXRZID0gKGggPCAwID8gZS5wYWdlWSA6IHN0YXJ0UG9pbnQueSkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wO1xyXG4gICAgIFxyXG4gICAgICBjb25zdCBtYXhXID0gaW1nU2l6ZS53IC0geDtcclxuICAgICAgY29uc3QgbWF4SCA9IGltZ1NpemUuaCAtIHk7XHJcbiAgICAgIGNvbnN0IGNyb3BCb3hXID0gY2xhbXAoTWF0aC5hYnModyksIDAsIG1heFcpO1xyXG4gICAgICBjb25zdCBjcm9wQm94SCA9IGNsYW1wKE1hdGguYWJzKGgpLCAwLCBtYXhIKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHcsIGNyb3BCb3hXLCBtYXhXKTtcclxuXHJcbiAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldFgsIHk6IG9mZnNldFkgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFcsIGg6IGNyb3BCb3hIfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBzdG9wU2V0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2N4KCdkaW1tZWRCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0U2V0Q3JvcEJveH0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGltbWVkQm94OyJdLCJzb3VyY2VSb290IjoiIn0=