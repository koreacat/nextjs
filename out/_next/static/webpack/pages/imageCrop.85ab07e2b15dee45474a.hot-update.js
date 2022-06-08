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
        w: absW < minW ? minW : absW > maxW ? maxW : absW,
        h: absH < minH ? minH : absH > maxH ? maxH : absH
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
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsIndyYXBSZWYiLCJpbWdTaXplIiwic2V0T2Zmc2V0Iiwic2V0Q3JvcEJveFNpemUiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInciLCJoIiwic2V0Q3JvcEJveCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWJzVyIsIk1hdGgiLCJhYnMiLCJhYnNIIiwibWF4VyIsIm1heEgiLCJtaW5XIiwibWluSCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wU2V0Q3JvcEJveCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFTQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQU1NO0FBQUEsTUFKcEJDLE9BSW9CLFFBSnBCQSxPQUlvQjtBQUFBLE1BSHBCQyxPQUdvQixRQUhwQkEsT0FHb0I7QUFBQSxNQUZwQkMsU0FFb0IsUUFGcEJBLFNBRW9CO0FBQUEsTUFEcEJDLGNBQ29CLFFBRHBCQSxjQUNvQjs7QUFFdEIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQXNEO0FBQzVFQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxVQUFVLEdBQUc7QUFBQ0MsT0FBQyxFQUFFSCxDQUFDLENBQUNJLEtBQU47QUFBYUMsT0FBQyxFQUFFTCxDQUFDLENBQUNNO0FBQWxCLEtBQW5COztBQUVBLFFBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJWLGVBQVMsQ0FBQztBQUNSTSxTQUFDLEVBQUVELFVBQVUsQ0FBQ0MsQ0FBWCxHQUFlUixPQUFPLENBQUNhLE9BQVIsQ0FBZ0JDLFVBRDFCO0FBRVJKLFNBQUMsRUFBRUgsVUFBVSxDQUFDRyxDQUFYLEdBQWVWLE9BQU8sQ0FBQ2EsT0FBUixDQUFnQkU7QUFGMUIsT0FBRCxDQUFUO0FBSUFaLG9CQUFjLENBQUM7QUFBQ2EsU0FBQyxFQUFFLENBQUo7QUFBT0MsU0FBQyxFQUFFO0FBQVYsT0FBRCxDQUFkO0FBQ0QsS0FORDs7QUFRQSxRQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDYixDQUFELEVBQW1CO0FBQ3BDTyxpQkFBVztBQUNYLFVBQU1JLENBQUMsR0FBR1gsQ0FBQyxDQUFDSSxLQUFGLEdBQVVGLFVBQVUsQ0FBQ0MsQ0FBL0I7QUFDQSxVQUFNUyxDQUFDLEdBQUdaLENBQUMsQ0FBQ00sS0FBRixHQUFVSixVQUFVLENBQUNHLENBQS9CO0FBQ0EsVUFBTUYsQ0FBQyxHQUFHRCxVQUFVLENBQUNDLENBQVgsR0FBZVIsT0FBTyxDQUFDYSxPQUFSLENBQWdCQyxVQUF6QztBQUNBLFVBQU1KLENBQUMsR0FBR0gsVUFBVSxDQUFDRyxDQUFYLEdBQWVWLE9BQU8sQ0FBQ2EsT0FBUixDQUFnQkUsU0FBekM7QUFDQSxVQUFNSSxPQUFPLEdBQUcsQ0FBQ0gsQ0FBQyxHQUFHLENBQUosR0FBUVgsQ0FBQyxDQUFDSSxLQUFWLEdBQWtCRixVQUFVLENBQUNDLENBQTlCLElBQW1DUixPQUFPLENBQUNhLE9BQVIsQ0FBZ0JDLFVBQW5FO0FBQ0EsVUFBTU0sT0FBTyxHQUFHLENBQUNILENBQUMsR0FBRyxDQUFKLEdBQVFaLENBQUMsQ0FBQ00sS0FBVixHQUFrQkosVUFBVSxDQUFDRyxDQUE5QixJQUFtQ1YsT0FBTyxDQUFDYSxPQUFSLENBQWdCRSxTQUFuRTtBQUVBLFVBQU1NLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNQLENBQVQsQ0FBYjtBQUNBLFVBQU1RLElBQUksR0FBR0YsSUFBSSxDQUFDQyxHQUFMLENBQVNOLENBQVQsQ0FBYjtBQUNBLFVBQU1RLElBQUksR0FBR3hCLE9BQU8sQ0FBQ2UsQ0FBUixHQUFZUixDQUF6QjtBQUNBLFVBQU1rQixJQUFJLEdBQUd6QixPQUFPLENBQUNnQixDQUFSLEdBQVlQLENBQXpCO0FBQ0EsVUFBTWlCLElBQUksR0FBRyxDQUFiO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLENBQWI7QUFFQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlkLENBQVosRUFBZWYsT0FBTyxDQUFDZSxDQUFSLEdBQVlSLENBQTNCO0FBRUFOLGVBQVMsQ0FBQztBQUFFTSxTQUFDLEVBQUVXLE9BQUw7QUFBY1QsU0FBQyxFQUFFVTtBQUFqQixPQUFELENBQVQ7QUFDQWpCLG9CQUFjLENBQUM7QUFDYmEsU0FBQyxFQUFHSyxJQUFJLEdBQUdNLElBQVIsR0FBZ0JBLElBQWhCLEdBQXdCTixJQUFJLEdBQUdJLElBQVIsR0FBZ0JBLElBQWhCLEdBQXVCSixJQURwQztBQUViSixTQUFDLEVBQUdPLElBQUksR0FBR0ksSUFBUixHQUFnQkEsSUFBaEIsR0FBd0JKLElBQUksR0FBR0UsSUFBUixHQUFnQkEsSUFBaEIsR0FBdUJGO0FBRnBDLE9BQUQsQ0FBZDtBQUlELEtBdkJEOztBQXlCQSxRQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JDLGNBQVEsQ0FBQ0MsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENmLFVBQTFDO0FBQ0FjLGNBQVEsQ0FBQ0MsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0NGLGNBQXhDO0FBQ0QsS0FIRDs7QUFLQUMsWUFBUSxDQUFDRSxnQkFBVCxDQUEwQixXQUExQixFQUF1Q2hCLFVBQXZDO0FBQ0FjLFlBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNILGNBQXJDO0FBQ0QsR0E1Q0Q7O0FBOENBLHNCQUFPO0FBQUssYUFBUyxFQUFFcEMsRUFBRSxDQUFDLFdBQUQsQ0FBbEI7QUFBaUMsZUFBVyxFQUFFUztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQXZERDs7S0FBTUwsUztBQXlEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjg1YWIwN2UyYjE1ZGVlNDU0NzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXplLCBQb2ludCB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIERpbW1lZEJveFByb3BzIHtcclxuICB3cmFwUmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIGltZ1NpemU6IFNpemU7XHJcbiAgc2V0T2Zmc2V0OiAob2Zmc2V0OiAoKHByZXY6IFBvaW50KSA9PiBQb2ludCkgfCBQb2ludCkgPT4gdm9pZDtcclxuICBzZXRDcm9wQm94U2l6ZTogKGNyb3BCb3hTaXplOiBTaXplKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEaW1tZWRCb3ggPSAoXHJcbiAge1xyXG4gICAgd3JhcFJlZixcclxuICAgIGltZ1NpemUsXHJcbiAgICBzZXRPZmZzZXQsXHJcbiAgICBzZXRDcm9wQm94U2l6ZSxcclxuICB9OiBEaW1tZWRCb3hQcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCBzdGFydFNldENyb3BCb3ggPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzdGFydFBvaW50ID0ge3g6IGUucGFnZVgsIHk6IGUucGFnZVl9O1xyXG5cclxuICAgIGNvbnN0IGluaXRDcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgICBzZXRPZmZzZXQoe1xyXG4gICAgICAgIHg6IHN0YXJ0UG9pbnQueCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0LCBcclxuICAgICAgICB5OiBzdGFydFBvaW50LnkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0Q3JvcEJveFNpemUoe3c6IDAsIGg6IDB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaW5pdENyb3BCb3goKTtcclxuICAgICAgY29uc3QgdyA9IGUucGFnZVggLSBzdGFydFBvaW50Lng7XHJcbiAgICAgIGNvbnN0IGggPSBlLnBhZ2VZIC0gc3RhcnRQb2ludC55O1xyXG4gICAgICBjb25zdCB4ID0gc3RhcnRQb2ludC54IC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBzdGFydFBvaW50LnkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wO1xyXG4gICAgICBjb25zdCBvZmZzZXRYID0gKHcgPCAwID8gZS5wYWdlWCA6IHN0YXJ0UG9pbnQueCkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdDtcclxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IChoIDwgMCA/IGUucGFnZVkgOiBzdGFydFBvaW50LnkpIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGFic1cgPSBNYXRoLmFicyh3KTtcclxuICAgICAgY29uc3QgYWJzSCA9IE1hdGguYWJzKGgpO1xyXG4gICAgICBjb25zdCBtYXhXID0gaW1nU2l6ZS53IC0geDtcclxuICAgICAgY29uc3QgbWF4SCA9IGltZ1NpemUuaCAtIHk7XHJcbiAgICAgIGNvbnN0IG1pblcgPSAwO1xyXG4gICAgICBjb25zdCBtaW5IID0gMDtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHcsIGltZ1NpemUudyAtIHgpO1xyXG5cclxuICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WSB9KTtcclxuICAgICAgc2V0Q3JvcEJveFNpemUoeyBcclxuICAgICAgICB3OiAoYWJzVyA8IG1pblcpID8gbWluVyA6IChhYnNXID4gbWF4VykgPyBtYXhXIDogYWJzVywgXHJcbiAgICAgICAgaDogKGFic0ggPCBtaW5IKSA/IG1pbkggOiAoYWJzSCA+IG1heEgpID8gbWF4SCA6IGFic0gsIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHN0b3BTZXRDcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRTZXRDcm9wQm94fSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaW1tZWRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==