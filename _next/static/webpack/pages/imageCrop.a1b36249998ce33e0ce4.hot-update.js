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
  var setOffset = _ref.setOffset,
      setCropBoxSize = _ref.setCropBoxSize;

  var startSetCropBox = function startSetCropBox(e) {
    e.preventDefault();
    var eLineX = offset.x + cropBoxSize.w;
    var wLineX = offset.x;
    var sLineY = offset.y + cropBoxSize.h;
    var nLineY = offset.y;

    var setCropBox = function setCropBox(e) {
      var x = e.pageX - wrapRef.current.offsetLeft;
      var y = e.pageY - wrapRef.current.offsetTop;
      setBox({
        x: x < 0 ? 0 : x > imgSize.w ? imgSize.w : x,
        y: y < 0 ? 0 : y > imgSize.h ? imgSize.h : y
      });
    };

    document.addEventListener("mousemove", setCropBox);
    document.addEventListener("mouseup", stopSetCropBox);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('dimmedBox'),
    onMouseDown: startSetCropBox
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsInNldE9mZnNldCIsInNldENyb3BCb3hTaXplIiwic3RhcnRTZXRDcm9wQm94IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZUxpbmVYIiwib2Zmc2V0IiwieCIsImNyb3BCb3hTaXplIiwidyIsIndMaW5lWCIsInNMaW5lWSIsInkiLCJoIiwibkxpbmVZIiwic2V0Q3JvcEJveCIsInBhZ2VYIiwid3JhcFJlZiIsImN1cnJlbnQiLCJvZmZzZXRMZWZ0IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJzZXRCb3giLCJpbWdTaXplIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFNldENyb3BCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFPQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUlNO0FBQUEsTUFGcEJDLFNBRW9CLFFBRnBCQSxTQUVvQjtBQUFBLE1BRHBCQyxjQUNvQixRQURwQkEsY0FDb0I7O0FBRXRCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFzRDtBQUM1RUEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsUUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLENBQVAsR0FBV0MsV0FBVyxDQUFDQyxDQUF0QztBQUNBLFFBQU1DLE1BQU0sR0FBR0osTUFBTSxDQUFDQyxDQUF0QjtBQUNBLFFBQU1JLE1BQU0sR0FBR0wsTUFBTSxDQUFDTSxDQUFQLEdBQVdKLFdBQVcsQ0FBQ0ssQ0FBdEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdSLE1BQU0sQ0FBQ00sQ0FBdEI7O0FBRUEsUUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ1osQ0FBRCxFQUFtQjtBQUNwQyxVQUFNSSxDQUFDLEdBQUdKLENBQUMsQ0FBQ2EsS0FBRixHQUFVQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFVBQXBDO0FBQ0EsVUFBTVAsQ0FBQyxHQUFHVCxDQUFDLENBQUNpQixLQUFGLEdBQVVILE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkcsU0FBcEM7QUFFQUMsWUFBTSxDQUFDO0FBQ0xmLFNBQUMsRUFBR0EsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUFWLEdBQWVBLENBQUMsR0FBR2dCLE9BQU8sQ0FBQ2QsQ0FBYixHQUFrQmMsT0FBTyxDQUFDZCxDQUExQixHQUE4QkYsQ0FEMUM7QUFFTEssU0FBQyxFQUFHQSxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQVYsR0FBZUEsQ0FBQyxHQUFHVyxPQUFPLENBQUNWLENBQWIsR0FBa0JVLE9BQU8sQ0FBQ1YsQ0FBMUIsR0FBOEJEO0FBRjFDLE9BQUQsQ0FBTjtBQUlELEtBUkQ7O0FBVUFZLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNWLFVBQXZDO0FBQ0FTLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNDLGNBQXJDO0FBQ0QsR0FwQkQ7O0FBc0JBLHNCQUFPO0FBQUssYUFBUyxFQUFFL0IsRUFBRSxDQUFDLFdBQUQsQ0FBbEI7QUFBaUMsZUFBVyxFQUFFTztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQTdCRDs7S0FBTUgsUztBQStCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLmExYjM2MjQ5OTk4Y2UzM2UwY2U0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXplLCBQb2ludCB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBEaW1tZWRCb3hQcm9wcyB7XHJcbiAgc2V0T2Zmc2V0OiAob2Zmc2V0OiAoKHByZXY6IFBvaW50KSA9PiBQb2ludCkgfCBQb2ludCkgPT4gdm9pZDtcclxuICBzZXRDcm9wQm94U2l6ZTogKGNyb3BCb3hTaXplOiBTaXplKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEaW1tZWRCb3ggPSAoXHJcbiAge1xyXG4gICAgc2V0T2Zmc2V0LFxyXG4gICAgc2V0Q3JvcEJveFNpemUsXHJcbiAgfTogRGltbWVkQm94UHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRDcm9wQm94ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGVMaW5lWCA9IG9mZnNldC54ICsgY3JvcEJveFNpemUudztcclxuICAgIGNvbnN0IHdMaW5lWCA9IG9mZnNldC54O1xyXG4gICAgY29uc3Qgc0xpbmVZID0gb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oO1xyXG4gICAgY29uc3QgbkxpbmVZID0gb2Zmc2V0Lnk7XHJcblxyXG4gICAgY29uc3Qgc2V0Q3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcDtcclxuXHJcbiAgICAgIHNldEJveCh7XHJcbiAgICAgICAgeDogKHggPCAwKSA/IDAgOiAoeCA+IGltZ1NpemUudykgPyBpbWdTaXplLncgOiB4LFxyXG4gICAgICAgIHk6ICh5IDwgMCkgPyAwIDogKHkgPiBpbWdTaXplLmgpID8gaW1nU2l6ZS5oIDogeSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRTZXRDcm9wQm94fSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaW1tZWRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==