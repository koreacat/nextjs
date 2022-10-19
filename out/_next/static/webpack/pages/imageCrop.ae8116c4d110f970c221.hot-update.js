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


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\imageCrop\\DimmedBox.tsx",
    _this = undefined;




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var DimmedBox = function DimmedBox(_ref) {
  var imgSize = _ref.imgSize,
      setOffset = _ref.setOffset,
      setCropBoxSize = _ref.setCropBoxSize,
      offsetTop = _ref.offsetTop,
      offsetLeft = _ref.offsetLeft;

  var startSetCropBox = function startSetCropBox(e) {
    e.preventDefault();
    var startPoint = {
      x: e.pageX,
      y: e.pageY
    };

    var initCropBox = function initCropBox() {
      setOffset({
        x: startPoint.x - offsetLeft,
        y: startPoint.y - offsetTop
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
      var x = startPoint.x - offsetLeft;
      var y = startPoint.y - offsetTop;
      var offsetX = (w < 0 ? e.pageX : startPoint.x) - offsetLeft;
      var offsetY = (h < 0 ? e.pageY : startPoint.y) - offsetTop;
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
    onMouseDown: startSetCropBox,
    style: {
      width: "".concat(imgSize.w, "px"),
      height: "".concat(imgSize.h, "px")
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsImltZ1NpemUiLCJzZXRPZmZzZXQiLCJzZXRDcm9wQm94U2l6ZSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJzdGFydFNldENyb3BCb3giLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBvaW50IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaW5pdENyb3BCb3giLCJ3IiwiaCIsInNldENyb3BCb3giLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm1heENyb3BCb3hXIiwibWF4Q3JvcEJveEgiLCJjcm9wQm94VyIsImNsYW1wIiwiTWF0aCIsImFicyIsImNyb3BCb3hIIiwibWF4Iiwic3RvcFNldENyb3BCb3giLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFVQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQU9NO0FBQUEsTUFMcEJDLE9BS29CLFFBTHBCQSxPQUtvQjtBQUFBLE1BSnBCQyxTQUlvQixRQUpwQkEsU0FJb0I7QUFBQSxNQUhwQkMsY0FHb0IsUUFIcEJBLGNBR29CO0FBQUEsTUFGcEJDLFNBRW9CLFFBRnBCQSxTQUVvQjtBQUFBLE1BRHBCQyxVQUNvQixRQURwQkEsVUFDb0I7O0FBRXRCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFzRDtBQUM1RUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsVUFBVSxHQUFHO0FBQUVD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SFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0F6REQ7O0tBQU1oQixTO0FBMkRTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuYWU4MTE2YzRkMTEwZjk3MGMyMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpemUsIFBvaW50LCBjbGFtcCB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBEaW1tZWRCb3hQcm9wcyB7XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxuICBzZXRPZmZzZXQ6IChvZmZzZXQ6ICgocHJldjogUG9pbnQpID0+IFBvaW50KSB8IFBvaW50KSA9PiB2b2lkO1xyXG4gIHNldENyb3BCb3hTaXplOiAoY3JvcEJveFNpemU6IFNpemUpID0+IHZvaWQ7XHJcbiAgb2Zmc2V0VG9wOiBudW1iZXI7XHJcbiAgb2Zmc2V0TGVmdDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBEaW1tZWRCb3ggPSAoXHJcbiAge1xyXG4gICAgaW1nU2l6ZSxcclxuICAgIHNldE9mZnNldCxcclxuICAgIHNldENyb3BCb3hTaXplLFxyXG4gICAgb2Zmc2V0VG9wLFxyXG4gICAgb2Zmc2V0TGVmdCxcclxuICB9OiBEaW1tZWRCb3hQcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCBzdGFydFNldENyb3BCb3ggPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzdGFydFBvaW50ID0geyB4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZIH07XHJcblxyXG4gICAgY29uc3QgaW5pdENyb3BCb3ggPSAoKSA9PiB7XHJcbiAgICAgIHNldE9mZnNldCh7XHJcbiAgICAgICAgeDogc3RhcnRQb2ludC54IC0gb2Zmc2V0TGVmdCxcclxuICAgICAgICB5OiBzdGFydFBvaW50LnkgLSBvZmZzZXRUb3AsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IDAsIGg6IDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGluaXRDcm9wQm94KCk7XHJcbiAgICAgIGNvbnN0IHcgPSBlLnBhZ2VYIC0gc3RhcnRQb2ludC54O1xyXG4gICAgICBjb25zdCBoID0gZS5wYWdlWSAtIHN0YXJ0UG9pbnQueTtcclxuICAgICAgY29uc3QgeCA9IHN0YXJ0UG9pbnQueCAtIG9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBzdGFydFBvaW50LnkgLSBvZmZzZXRUb3A7XHJcbiAgICAgIGNvbnN0IG9mZnNldFggPSAoKHcgPCAwKSA/IGUucGFnZVggOiBzdGFydFBvaW50LngpIC0gb2Zmc2V0TGVmdDtcclxuICAgICAgY29uc3Qgb2Zmc2V0WSA9ICgoaCA8IDApID8gZS5wYWdlWSA6IHN0YXJ0UG9pbnQueSkgLSBvZmZzZXRUb3A7XHJcbiAgICAgIGNvbnN0IG1heENyb3BCb3hXID0gKHcgPCAwKSA/IHggOiAoaW1nU2l6ZS53IC0geCk7XHJcbiAgICAgIGNvbnN0IG1heENyb3BCb3hIID0gKGggPCAwKSA/IHkgOiAoaW1nU2l6ZS5oIC0geSk7XHJcbiAgICAgIGNvbnN0IGNyb3BCb3hXID0gY2xhbXAoTWF0aC5hYnModyksIDAsIG1heENyb3BCb3hXKTtcclxuICAgICAgY29uc3QgY3JvcEJveEggPSBjbGFtcChNYXRoLmFicyhoKSwgMCwgbWF4Q3JvcEJveEgpO1xyXG5cclxuICAgICAgc2V0T2Zmc2V0KHsgeDogTWF0aC5tYXgob2Zmc2V0WCwgMCksIHk6IE1hdGgubWF4KG9mZnNldFksIDApIH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hXLCBoOiBjcm9wQm94SCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9wU2V0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2N4KCdkaW1tZWRCb3gnKX1cclxuICAgICAgb25Nb3VzZURvd249e3N0YXJ0U2V0Q3JvcEJveH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGltbWVkQm94OyJdLCJzb3VyY2VSb290IjoiIn0=