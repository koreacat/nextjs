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

      if (w >= 0 && h >= 0) {
        console.log('a');
      } else if (w >= 0 && h < 0) {
        console.log('b');
      } else if (w < 0 && h >= 0) {
        console.log('c');
      } else {
        console.log('d');
      }

      setOffset({
        x: e.pageX - wrapRef.current.offsetLeft,
        y: e.pageY - wrapRef.current.offsetTop
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
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsIndyYXBSZWYiLCJpbWdTaXplIiwic2V0T2Zmc2V0Iiwic2V0Q3JvcEJveFNpemUiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInciLCJoIiwic2V0Q3JvcEJveCIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwiYWJzIiwic3RvcFNldENyb3BCb3giLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBU0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FNTTtBQUFBLE1BSnBCQyxPQUlvQixRQUpwQkEsT0FJb0I7QUFBQSxNQUhwQkMsT0FHb0IsUUFIcEJBLE9BR29CO0FBQUEsTUFGcEJDLFNBRW9CLFFBRnBCQSxTQUVvQjtBQUFBLE1BRHBCQyxjQUNvQixRQURwQkEsY0FDb0I7O0FBRXRCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFzRDtBQUM1RUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsVUFBVSxHQUFHO0FBQUNDLE9BQUMsRUFBRUgsQ0FBQyxDQUFDSSxLQUFOO0FBQWFDLE9BQUMsRUFBRUwsQ0FBQyxDQUFDTTtBQUFsQixLQUFuQjs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCVixlQUFTLENBQUM7QUFDUk0sU0FBQyxFQUFFSCxDQUFDLENBQUNJLEtBQUYsR0FBVVQsT0FBTyxDQUFDYSxPQUFSLENBQWdCQyxVQURyQjtBQUVSSixTQUFDLEVBQUVMLENBQUMsQ0FBQ00sS0FBRixHQUFVWCxPQUFPLENBQUNhLE9BQVIsQ0FBZ0JFO0FBRnJCLE9BQUQsQ0FBVDtBQUlBWixvQkFBYyxDQUFDO0FBQUNhLFNBQUMsRUFBRSxDQUFKO0FBQU9DLFNBQUMsRUFBRTtBQUFWLE9BQUQsQ0FBZDtBQUNELEtBTkQ7O0FBUUEsUUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2IsQ0FBRCxFQUFtQjtBQUNwQ08saUJBQVc7QUFDWCxVQUFNSSxDQUFDLEdBQUdYLENBQUMsQ0FBQ0ksS0FBRixHQUFVRixVQUFVLENBQUNDLENBQS9CO0FBQ0EsVUFBTVMsQ0FBQyxHQUFHWixDQUFDLENBQUNNLEtBQUYsR0FBVUosVUFBVSxDQUFDRyxDQUEvQjtBQUNBUyxhQUFPLENBQUNDLEdBQVIsQ0FBWWIsVUFBWixFQUF3QkYsQ0FBQyxDQUFDSSxLQUExQixFQUFpQ0osQ0FBQyxDQUFDTSxLQUFuQzs7QUFFQSxVQUFHSyxDQUFDLElBQUksQ0FBTCxJQUFVQyxDQUFDLElBQUksQ0FBbEIsRUFBcUI7QUFDbkJFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDRCxPQUZELE1BRU8sSUFBR0osQ0FBQyxJQUFJLENBQUwsSUFBVUMsQ0FBQyxHQUFHLENBQWpCLEVBQW9CO0FBQ3pCRSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0QsT0FGTSxNQUVBLElBQUdKLENBQUMsR0FBRyxDQUFKLElBQVNDLENBQUMsSUFBSSxDQUFqQixFQUFvQjtBQUN6QkUsZUFBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNELE9BRk0sTUFFQTtBQUNMRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0Q7O0FBRURsQixlQUFTLENBQUM7QUFDUk0sU0FBQyxFQUFFSCxDQUFDLENBQUNJLEtBQUYsR0FBVVQsT0FBTyxDQUFDYSxPQUFSLENBQWdCQyxVQURyQjtBQUVSSixTQUFDLEVBQUVMLENBQUMsQ0FBQ00sS0FBRixHQUFVWCxPQUFPLENBQUNhLE9BQVIsQ0FBZ0JFO0FBRnJCLE9BQUQsQ0FBVDtBQUlBWixvQkFBYyxDQUFDO0FBQUVhLFNBQUMsRUFBRUssSUFBSSxDQUFDQyxHQUFMLENBQVNOLENBQVQsQ0FBTDtBQUFrQkMsU0FBQyxFQUFFSSxJQUFJLENBQUNDLEdBQUwsQ0FBU0wsQ0FBVDtBQUFyQixPQUFELENBQWQ7QUFDRCxLQXJCRDs7QUF1QkEsUUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCQyxjQUFRLENBQUNDLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDUCxVQUExQztBQUNBTSxjQUFRLENBQUNDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDRixjQUF4QztBQUNELEtBSEQ7O0FBS0FDLFlBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNSLFVBQXZDO0FBQ0FNLFlBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNILGNBQXJDO0FBQ0QsR0ExQ0Q7O0FBNENBLHNCQUFPO0FBQUssYUFBUyxFQUFFNUIsRUFBRSxDQUFDLFdBQUQsQ0FBbEI7QUFBaUMsZUFBVyxFQUFFUztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQXJERDs7S0FBTUwsUztBQXVEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLmE1YmM3MjY4MzQxOGIwMDQ2MjI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXplLCBQb2ludCB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIERpbW1lZEJveFByb3BzIHtcclxuICB3cmFwUmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIGltZ1NpemU6IFNpemU7XHJcbiAgc2V0T2Zmc2V0OiAob2Zmc2V0OiAoKHByZXY6IFBvaW50KSA9PiBQb2ludCkgfCBQb2ludCkgPT4gdm9pZDtcclxuICBzZXRDcm9wQm94U2l6ZTogKGNyb3BCb3hTaXplOiBTaXplKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEaW1tZWRCb3ggPSAoXHJcbiAge1xyXG4gICAgd3JhcFJlZixcclxuICAgIGltZ1NpemUsXHJcbiAgICBzZXRPZmZzZXQsXHJcbiAgICBzZXRDcm9wQm94U2l6ZSxcclxuICB9OiBEaW1tZWRCb3hQcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCBzdGFydFNldENyb3BCb3ggPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzdGFydFBvaW50ID0ge3g6IGUucGFnZVgsIHk6IGUucGFnZVl9O1xyXG5cclxuICAgIGNvbnN0IGluaXRDcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgICBzZXRPZmZzZXQoe1xyXG4gICAgICAgIHg6IGUucGFnZVggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCwgXHJcbiAgICAgICAgeTogZS5wYWdlWSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3AsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7dzogMCwgaDogMH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpbml0Q3JvcEJveCgpO1xyXG4gICAgICBjb25zdCB3ID0gZS5wYWdlWCAtIHN0YXJ0UG9pbnQueDtcclxuICAgICAgY29uc3QgaCA9IGUucGFnZVkgLSBzdGFydFBvaW50Lnk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXJ0UG9pbnQsIGUucGFnZVgsIGUucGFnZVkpO1xyXG5cclxuICAgICAgaWYodyA+PSAwICYmIGggPj0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhJyk7XHJcbiAgICAgIH0gZWxzZSBpZih3ID49IDAgJiYgaCA8IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYicpO1xyXG4gICAgICB9IGVsc2UgaWYodyA8IDAgJiYgaCA+PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2MnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRPZmZzZXQoe1xyXG4gICAgICAgIHg6IGUucGFnZVggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCwgXHJcbiAgICAgICAgeTogZS5wYWdlWSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3AsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IE1hdGguYWJzKHcpLCBoOiBNYXRoLmFicyhoKSB9KTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHN0b3BTZXRDcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRTZXRDcm9wQm94fSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaW1tZWRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==