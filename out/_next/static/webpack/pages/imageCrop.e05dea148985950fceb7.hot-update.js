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
      var maxCropBoxW = w < 0 ? x : imgSize.w - x;
      var maxCropBoxH = h < 0 ? y : imgSize.h - y;
      var cropBoxW = Object(_data__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.abs(w), 0, maxCropBoxW);
      var cropBoxH = Object(_data__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.abs(h), 0, maxCropBoxH);
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
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsIndyYXBSZWYiLCJpbWdTaXplIiwic2V0T2Zmc2V0Iiwic2V0Q3JvcEJveFNpemUiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInciLCJoIiwic2V0Q3JvcEJveCIsIm9mZnNldFgiLCJvZmZzZXRZIiwibWF4Q3JvcEJveFciLCJtYXhDcm9wQm94SCIsImNyb3BCb3hXIiwiY2xhbXAiLCJNYXRoIiwiYWJzIiwiY3JvcEJveEgiLCJzdG9wU2V0Q3JvcEJveCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFTQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQU1NO0FBQUEsTUFKcEJDLE9BSW9CLFFBSnBCQSxPQUlvQjtBQUFBLE1BSHBCQyxPQUdvQixRQUhwQkEsT0FHb0I7QUFBQSxNQUZwQkMsU0FFb0IsUUFGcEJBLFNBRW9CO0FBQUEsTUFEcEJDLGNBQ29CLFFBRHBCQSxjQUNvQjs7QUFFdEIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQXNEO0FBQzVFQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxVQUFVLEdBQUc7QUFBQ0MsT0FBQyxFQUFFSCxDQUFDLENBQUNJLEtBQU47QUFBYUMs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InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC5lMDVkZWExNDg5ODU5NTBmY2ViNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l6ZSwgUG9pbnQsIGNsYW1wIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRGltbWVkQm94UHJvcHMge1xyXG4gIHdyYXBSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxuICBzZXRPZmZzZXQ6IChvZmZzZXQ6ICgocHJldjogUG9pbnQpID0+IFBvaW50KSB8IFBvaW50KSA9PiB2b2lkO1xyXG4gIHNldENyb3BCb3hTaXplOiAoY3JvcEJveFNpemU6IFNpemUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERpbW1lZEJveCA9IChcclxuICB7XHJcbiAgICB3cmFwUmVmLFxyXG4gICAgaW1nU2l6ZSxcclxuICAgIHNldE9mZnNldCxcclxuICAgIHNldENyb3BCb3hTaXplLFxyXG4gIH06IERpbW1lZEJveFByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0Q3JvcEJveCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSB7eDogZS5wYWdlWCwgeTogZS5wYWdlWX07XHJcblxyXG4gICAgY29uc3QgaW5pdENyb3BCb3ggPSAoKSA9PiB7XHJcbiAgICAgIHNldE9mZnNldCh7XHJcbiAgICAgICAgeDogc3RhcnRQb2ludC54IC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQsIFxyXG4gICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3AsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7dzogMCwgaDogMH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpbml0Q3JvcEJveCgpO1xyXG4gICAgICBjb25zdCB3ID0gZS5wYWdlWCAtIHN0YXJ0UG9pbnQueDtcclxuICAgICAgY29uc3QgaCA9IGUucGFnZVkgLSBzdGFydFBvaW50Lnk7XHJcbiAgICAgIGNvbnN0IHggPSBzdGFydFBvaW50LnggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdDtcclxuICAgICAgY29uc3QgeSA9IHN0YXJ0UG9pbnQueSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3A7XHJcblxyXG4gICAgICBjb25zdCBvZmZzZXRYID0gKHcgPCAwID8gZS5wYWdlWCA6IHN0YXJ0UG9pbnQueCkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdDtcclxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IChoIDwgMCA/IGUucGFnZVkgOiBzdGFydFBvaW50LnkpIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcDtcclxuICAgICBcclxuICAgICAgY29uc3QgbWF4Q3JvcEJveFcgPSB3IDwgMCA/IHggOiBpbWdTaXplLncgLSB4O1xyXG4gICAgICBjb25zdCBtYXhDcm9wQm94SCA9IGggPCAwID8geSA6IGltZ1NpemUuaCAtIHk7XHJcbiAgICAgIGNvbnN0IGNyb3BCb3hXID0gY2xhbXAoTWF0aC5hYnModyksIDAsIG1heENyb3BCb3hXKTtcclxuICAgICAgY29uc3QgY3JvcEJveEggPSBjbGFtcChNYXRoLmFicyhoKSwgMCwgbWF4Q3JvcEJveEgpO1xyXG5cclxuICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WSB9KTtcclxuICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94VywgaDogY3JvcEJveEh9KTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHN0b3BTZXRDcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRTZXRDcm9wQm94fSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaW1tZWRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==