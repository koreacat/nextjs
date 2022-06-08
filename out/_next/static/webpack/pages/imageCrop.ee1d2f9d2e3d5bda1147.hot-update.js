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
    var startPoint = {
      x: e.pageX,
      y: e.pageY
    };

    var setCropBox = function setCropBox(e) {
      console.log(startPoint, e.pageX, e.pageY);
      setCropBoxSize({
        w: Math.abs(e.pageX - startPoint.x),
        h: Math.abs(e.pageY - startPoint.y)
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
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsInNldE9mZnNldCIsInNldENyb3BCb3hTaXplIiwic3RhcnRTZXRDcm9wQm94IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhcnRQb2ludCIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsInNldENyb3BCb3giLCJjb25zb2xlIiwibG9nIiwidyIsIk1hdGgiLCJhYnMiLCJoIiwic3RvcFNldENyb3BCb3giLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBT0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FJTTtBQUFBLE1BRnBCQyxTQUVvQixRQUZwQkEsU0FFb0I7QUFBQSxNQURwQkMsY0FDb0IsUUFEcEJBLGNBQ29COztBQUV0QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBc0Q7QUFDNUVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLFVBQVUsR0FBRztBQUFDQyxPQUFDLEVBQUVILENBQUMsQ0FBQ0ksS0FBTjtBQUFhQyxPQUFDLEVBQUVMLENBQUMsQ0FBQ007QUFBbEIsS0FBbkI7O0FBRUEsUUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ1AsQ0FBRCxFQUFtQjtBQUNwQ1EsYUFBTyxDQUFDQyxHQUFSLENBQVlQLFVBQVosRUFBd0JGLENBQUMsQ0FBQ0ksS0FBMUIsRUFBaUNKLENBQUMsQ0FBQ00sS0FBbkM7QUFDQVIsb0JBQWMsQ0FBQztBQUFDWSxTQUFDLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTWixDQUFDLENBQUNJLEtBQUYsR0FBVUYsVUFBVSxDQUFDQyxDQUE5QixDQUFKO0FBQXNDVSxTQUFDLEVBQUVGLElBQUksQ0FBQ0MsR0FBTCxDQUFTWixDQUFDLENBQUNNLEtBQUYsR0FBVUosVUFBVSxDQUFDRyxDQUE5QjtBQUF6QyxPQUFELENBQWQ7QUFDRCxLQUhEOztBQUtBLFFBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQkMsY0FBUSxDQUFDQyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ1QsVUFBMUM7QUFDQVEsY0FBUSxDQUFDQyxtQkFBVCxDQUE2QixTQUE3QixFQUF3Q0YsY0FBeEM7QUFDRCxLQUhEOztBQUtBQyxZQUFRLENBQUNFLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDVixVQUF2QztBQUNBUSxZQUFRLENBQUNFLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDSCxjQUFyQztBQUNELEdBaEJEOztBQWtCQSxzQkFBTztBQUFLLGFBQVMsRUFBRXRCLEVBQUUsQ0FBQyxXQUFELENBQWxCO0FBQWlDLGVBQVcsRUFBRU87QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0F6QkQ7O0tBQU1ILFM7QUEyQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC5lZTFkMmY5ZDJlM2Q1YmRhMTE0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l6ZSwgUG9pbnQgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRGltbWVkQm94UHJvcHMge1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogKChwcmV2OiBQb2ludCkgPT4gUG9pbnQpIHwgUG9pbnQpID0+IHZvaWQ7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGltbWVkQm94ID0gKFxyXG4gIHtcclxuICAgIHNldE9mZnNldCxcclxuICAgIHNldENyb3BCb3hTaXplLFxyXG4gIH06IERpbW1lZEJveFByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0Q3JvcEJveCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSB7eDogZS5wYWdlWCwgeTogZS5wYWdlWX07XHJcblxyXG4gICAgY29uc3Qgc2V0Q3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXJ0UG9pbnQsIGUucGFnZVgsIGUucGFnZVkpO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7dzogTWF0aC5hYnMoZS5wYWdlWCAtIHN0YXJ0UG9pbnQueCksIGg6IE1hdGguYWJzKGUucGFnZVkgLSBzdGFydFBvaW50LnkpfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBzdG9wU2V0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2N4KCdkaW1tZWRCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0U2V0Q3JvcEJveH0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGltbWVkQm94OyJdLCJzb3VyY2VSb290IjoiIn0=