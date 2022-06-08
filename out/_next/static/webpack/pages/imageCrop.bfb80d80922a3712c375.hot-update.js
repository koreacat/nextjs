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
      var x = (w < 0 ? e.pageX : startPoint.x) - wrapRef.current.offsetLeft;
      var y;

      if (w < 0 && h < 0) {
        setOffset({
          x: e.pageX - wrapRef.current.offsetLeft,
          y: e.pageY - wrapRef.current.offsetTop
        });
      }

      if (w >= 0 && h < 0) {
        setOffset({
          x: startPoint.x - wrapRef.current.offsetLeft,
          y: e.pageY - wrapRef.current.offsetTop
        });
      }

      if (w < 0 && h >= 0) {
        setOffset({
          x: e.pageX - wrapRef.current.offsetLeft,
          y: startPoint.y - wrapRef.current.offsetTop
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsIndyYXBSZWYiLCJpbWdTaXplIiwic2V0T2Zmc2V0Iiwic2V0Q3JvcEJveFNpemUiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInciLCJoIiwic2V0Q3JvcEJveCIsIk1hdGgiLCJhYnMiLCJzdG9wU2V0Q3JvcEJveCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFTQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQU1NO0FBQUEsTUFKcEJDLE9BSW9CLFFBSnBCQSxPQUlvQjtBQUFBLE1BSHBCQyxPQUdvQixRQUhwQkEsT0FHb0I7QUFBQSxNQUZwQkMsU0FFb0IsUUFGcEJBLFNBRW9CO0FBQUEsTUFEcEJDLGNBQ29CLFFBRHBCQSxjQUNvQjs7QUFFdEIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQXNEO0FBQzVFQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxVQUFVLEdBQUc7QUFBQ0MsT0FBQyxFQUFFSCxDQUFDLENBQUNJLEtBQU47QUFBYUMsT0FBQyxFQUFFTCxDQUFDLENBQUNNO0FBQWxCLEtBQW5COztBQUVBLFFBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJWLGVBQVMs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ODA5MjJhMzcxMmMzNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpemUsIFBvaW50IH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRGltbWVkQm94UHJvcHMge1xyXG4gIHdyYXBSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxuICBzZXRPZmZzZXQ6IChvZmZzZXQ6ICgocHJldjogUG9pbnQpID0+IFBvaW50KSB8IFBvaW50KSA9PiB2b2lkO1xyXG4gIHNldENyb3BCb3hTaXplOiAoY3JvcEJveFNpemU6IFNpemUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERpbW1lZEJveCA9IChcclxuICB7XHJcbiAgICB3cmFwUmVmLFxyXG4gICAgaW1nU2l6ZSxcclxuICAgIHNldE9mZnNldCxcclxuICAgIHNldENyb3BCb3hTaXplLFxyXG4gIH06IERpbW1lZEJveFByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0Q3JvcEJveCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSB7eDogZS5wYWdlWCwgeTogZS5wYWdlWX07XHJcblxyXG4gICAgY29uc3QgaW5pdENyb3BCb3ggPSAoKSA9PiB7XHJcbiAgICAgIHNldE9mZnNldCh7XHJcbiAgICAgICAgeDogZS5wYWdlWCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0LCBcclxuICAgICAgICB5OiBlLnBhZ2VZIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHt3OiAwLCBoOiAwfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGluaXRDcm9wQm94KCk7XHJcbiAgICAgIGNvbnN0IHcgPSBlLnBhZ2VYIC0gc3RhcnRQb2ludC54O1xyXG4gICAgICBjb25zdCBoID0gZS5wYWdlWSAtIHN0YXJ0UG9pbnQueTtcclxuXHJcbiAgICAgIGNvbnN0IHggPSAodyA8IDAgPyBlLnBhZ2VYIDogc3RhcnRQb2ludC54KSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0O1xyXG4gICAgICBjb25zdCB5O1xyXG5cclxuICAgICAgaWYodyA8IDAgJiYgaCA8IDApIHtcclxuICAgICAgICBzZXRPZmZzZXQoe1xyXG4gICAgICAgICAgeDogZS5wYWdlWCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0LCBcclxuICAgICAgICAgIHk6IGUucGFnZVkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih3ID49IDAgJiYgaCA8IDApIHtcclxuICAgICAgICBzZXRPZmZzZXQoe1xyXG4gICAgICAgICAgeDogc3RhcnRQb2ludC54IC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQsIFxyXG4gICAgICAgICAgeTogZS5wYWdlWSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3AsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gXHJcbiAgICAgIFxyXG4gICAgICBpZih3IDwgMCAmJiBoID49IDApIHtcclxuICAgICAgICBzZXRPZmZzZXQoe1xyXG4gICAgICAgICAgeDogZS5wYWdlWCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0LCBcclxuICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3AsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gXHJcbiAgICAgIFxyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IE1hdGguYWJzKHcpLCBoOiBNYXRoLmFicyhoKSB9KTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHN0b3BTZXRDcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRTZXRDcm9wQm94fSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaW1tZWRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==