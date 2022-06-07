webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/CropBox.tsx":
/*!**********************************************!*\
  !*** ./src/components/imageCrop/CropBox.tsx ***!
  \**********************************************/
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


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\CropBox.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var LINE_DIR = ['e', 'w', 's', 'n'];
var POINT_DIR = ['e', 'w', 's', 'n', 'se', 'sw', 'ne', 'nw'];

var CropBox = function CropBox() {
  var startPan = function startPan(e) {
    e.preventDefault();
    document.addEventListener("mousemove", moveCropBox);
    document.addEventListener("mouseup", stopPan);
    lastMousePosRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  var moveCropBox = function moveCropBox(e) {
    var lastMousePos = lastMousePosRef.current;
    var currentMousePos = {
      x: e.clientX,
      y: e.clientY
    };
    var mouseDiff = diffPoints(currentMousePos, lastMousePos);
    lastMousePosRef.current = currentMousePos;
    setOffset(function (prevOffset) {
      return addPoints(prevOffset, mouseDiff, 0, 0, imgSize.w - cropBoxSize.w, imgSize.h - cropBoxSize.h);
    });
  };

  var stopPan = function stopPan() {
    document.removeEventListener("mousemove", moveCropBox);
    document.removeEventListener("mouseup", stopPan);
  };

  var startSetSize = function startSetSize(e, dir) {
    e.preventDefault();
    var eLineX = offset.x + cropBoxSize.w;
    var wLineX = offset.x;
    var sLineY = offset.y + cropBoxSize.h;
    var nLineY = offset.y;

    var setSizeCropBox = function setSizeCropBox(e) {
      var currentMousePos = {
        x: e.clientX - wrapRef.current.offsetLeft,
        y: e.clientY - wrapRef.current.offsetTop
      };
      setBox(currentMousePos);
    };

    var setBox = function setBox(currentMousePos) {
      var isCrossEL = !(wLineX + cropBoxSize.w > currentMousePos.x);
      var isCrossWL = eLineX - cropBoxSize.w > currentMousePos.x;
      var isCrossSL = !(nLineY + cropBoxSize.h > currentMousePos.y);
      var isCrossNL = sLineY - cropBoxSize.h > currentMousePos.y;
      var eXOffset = eLineX - cropBoxSize.w - (offset.x - currentMousePos.x);
      var wXOffset = wLineX - (offset.x - currentMousePos.x);
      var sYOffset = sLineY - cropBoxSize.h - (offset.y - currentMousePos.y);
      var nYOffset = nLineY - (offset.y - currentMousePos.y);
      var eCrossW = eLineX - cropBoxSize.w - currentMousePos.x;
      var wCrossW = currentMousePos.x - wLineX - cropBoxSize.w;
      var sCrossH = sLineY - cropBoxSize.h - currentMousePos.y;
      var nCrossH = currentMousePos.y - nLineY - cropBoxSize.h;
      var eW = cropBoxSize.w + currentMousePos.x - eLineX;
      var wW = cropBoxSize.w + wLineX - currentMousePos.x;
      var sH = cropBoxSize.h + currentMousePos.y - sLineY;
      var nH = cropBoxSize.h + nLineY - currentMousePos.y;

      switch (dir) {
        case 'e':
          if (isCrossWL) {
            setOffset({
              x: eXOffset,
              y: offset.y
            });
            setCropBoxSize({
              w: eCrossW,
              h: cropBoxSize.h
            });
          } else {
            setCropBoxSize({
              w: eW,
              h: cropBoxSize.h
            });
          }

          break;

        case 'w':
          if (isCrossEL) {
            setCropBoxSize({
              w: wCrossW,
              h: cropBoxSize.h
            });
          } else {
            setOffset({
              x: wXOffset,
              y: offset.y
            });
            setCropBoxSize({
              w: wW,
              h: cropBoxSize.h
            });
          }

          break;

        case 's':
          if (isCrossNL) {
            setOffset({
              x: offset.x,
              y: sYOffset
            });
            setCropBoxSize({
              w: cropBoxSize.w,
              h: sCrossH
            });
          } else {
            setCropBoxSize({
              w: cropBoxSize.w,
              h: sH
            });
          }

          break;

        case 'n':
          if (isCrossSL) {
            setCropBoxSize({
              w: cropBoxSize.w,
              h: nCrossH
            });
          } else {
            setOffset({
              x: offset.x,
              y: nYOffset
            });
            setCropBoxSize({
              w: cropBoxSize.w,
              h: nH
            });
          }

          break;

        case 'se':
          if (isCrossNL && isCrossWL) {
            setOffset({
              x: eXOffset,
              y: sYOffset
            });
            setCropBoxSize({
              w: eCrossW,
              h: sCrossH
            });
          } else if (isCrossWL) {
            setOffset({
              x: eXOffset,
              y: offset.y
            });
            setCropBoxSize({
              w: eCrossW,
              h: sH
            });
          } else if (isCrossNL) {
            setOffset({
              x: offset.x,
              y: sYOffset
            });
            setCropBoxSize({
              w: eW,
              h: sCrossH
            });
          } else {
            setCropBoxSize({
              w: eW,
              h: sH
            });
          }

          break;

        case 'sw':
          if (isCrossNL && isCrossEL) {
            setOffset({
              x: offset.x + cropBoxSize.w,
              y: nYOffset
            });
            setCropBoxSize({
              w: wCrossW,
              h: sCrossH
            });
          } else if (isCrossEL) {
            setCropBoxSize({
              w: wCrossW,
              h: sH
            });
          } else if (isCrossNL) {
            setOffset({
              x: wXOffset,
              y: nYOffset
            });
            setCropBoxSize({
              w: wW,
              h: sCrossH
            });
          } else {
            setOffset({
              x: wXOffset,
              y: offset.y
            });
            setCropBoxSize({
              w: wW,
              h: sH
            });
          }

          break;

        case 'ne':
          if (isCrossSL && isCrossWL) {
            setOffset({
              x: eXOffset,
              y: offset.y + cropBoxSize.h
            });
            setCropBoxSize({
              w: eCrossW,
              h: nCrossH
            });
          } else if (isCrossWL) {
            setOffset({
              x: eXOffset,
              y: nYOffset
            });
            setCropBoxSize({
              w: eCrossW,
              h: nH
            });
          } else if (isCrossSL) {
            setCropBoxSize({
              w: eW,
              h: nCrossH
            });
          } else {
            setOffset({
              x: offset.x,
              y: nYOffset
            });
            setCropBoxSize({
              w: eW,
              h: nH
            });
          }

          break;

        case 'nw':
          if (isCrossSL && isCrossEL) {
            setCropBoxSize({
              w: wCrossW,
              h: nCrossH
            });
          } else if (isCrossEL) {
            setOffset({
              x: offset.x + cropBoxSize.w,
              y: nYOffset
            });
            setCropBoxSize({
              w: wCrossW,
              h: nH
            });
          } else if (isCrossSL) {
            setOffset({
              x: wXOffset,
              y: offset.y + cropBoxSize.h
            });
            setCropBoxSize({
              w: wW,
              h: nCrossH
            });
          } else {
            setOffset({
              x: wXOffset,
              y: nYOffset
            });
            setCropBoxSize({
              w: wW,
              h: nH
            });
          }

          break;
      }
    };

    var stopSetSize = function stopSetSize() {
      document.removeEventListener("mousemove", setSizeCropBox);
      document.removeEventListener("mouseup", stopSetSize);
    };

    document.addEventListener("mousemove", setSizeCropBox);
    document.addEventListener("mouseup", stopSetSize);
  };

  var getDash = function getDash() {
    return ['w', 'h'].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('dash', dir)
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 5
      }, _this);
    });
  };

  var getLine = function getLine() {
    return LINE_DIR.map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('line', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetSize(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 5
      }, _this);
    });
  };

  var getPoints = function getPoints() {
    return POINT_DIR.map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('point', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetSize(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 5
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('cropBox'),
    style: {
      width: "".concat(cropBoxSize.w, "px"),
      height: "".concat(cropBoxSize.h, "px"),
      transform: "translateX(".concat(offset.x, "px) translateY(").concat(offset.y, "px)")
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('viewBox'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: cx('viewImg'),
        src: imgPath,
        style: {
          width: "".concat(imgSize.w, "px"),
          height: "".concat(imgSize.h, "px"),
          transform: "translateX(-".concat(offset.x, "px) translateY(-").concat(offset.y, "px)")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }, _this), getLine(), getPoints()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 5
  }, _this);
};

_c = CropBox;
/* harmony default export */ __webpack_exports__["default"] = (CropBox);

var _c;

$RefreshReg$(_c, "CropBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsIkNyb3BCb3giLCJzdGFydFBhbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmVDcm9wQm94Iiwic3RvcFBhbiIsImxhc3RNb3VzZVBvc1JlZiIsImN1cnJlbnQiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwiZGlmZlBvaW50cyIsInNldE9mZnNldCIsInByZXZPZmZzZXQiLCJhZGRQb2ludHMiLCJpbWdTaXplIiwidyIsImNyb3BCb3hTaXplIiwiaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldFNpemUiLCJkaXIiLCJlTGluZVgiLCJvZmZzZXQiLCJ3TGluZVgiLCJzTGluZVkiLCJuTGluZVkiLCJzZXRTaXplQ3JvcEJveCIsIndyYXBSZWYiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwic2V0Qm94IiwiaXNDcm9zc0VMIiwiaXNDcm9zc1dMIiwiaXNDcm9zc1NMIiwiaXNDcm9zc05MIiwiZVhPZmZzZXQiLCJ3WE9mZnNldCIsInNZT2Zmc2V0IiwibllPZmZzZXQiLCJlQ3Jvc3NXIiwid0Nyb3NzVyIsInNDcm9zc0giLCJuQ3Jvc3NIIiwiZVciLCJ3VyIsInNIIiwibkgiLCJzZXRDcm9wQm94U2l6ZSIsInN0b3BTZXRTaXplIiwiZ2V0RGFzaCIsIm1hcCIsImdldExpbmUiLCJnZXRQb2ludHMiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsImltZ1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFH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QUMsT0FBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBNkJFO0FBQU0sZUFBUyxFQUFFQSxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFnQyxpQkFBVyxFQUFFTztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGLEVBZ0NHeUQsT0FBTyxFQWhDVixFQW1DR0MsU0FBUyxFQW5DWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdDRCxDQXZORDs7S0FBTTNELE87QUF5TlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC41MmRlMDRiNzEyNjVkNjNjYmJhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IERpclR5cGUgfSBmcm9tICcuJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IExJTkVfRElSID0gWydlJywgJ3cnLCAncycsICduJ107XHJcbmNvbnN0IFBPSU5UX0RJUiA9IFsnZScsICd3JywgJ3MnLCAnbicsICdzZScsICdzdycsICduZScsICdudyddO1xyXG5cclxuY29uc3QgQ3JvcEJveCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb3ZlQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG5cclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gY3VycmVudE1vdXNlUG9zO1xyXG4gICAgc2V0T2Zmc2V0KChwcmV2T2Zmc2V0KSA9PiBcclxuICAgICAgYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZiwgMCwgMCwgaW1nU2l6ZS53IC0gY3JvcEJveFNpemUudywgaW1nU2l6ZS5oIC0gY3JvcEJveFNpemUuaClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9wUGFuID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0U2l6ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGRpcjogRGlyVHlwZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGVMaW5lWCA9IG9mZnNldC54ICsgY3JvcEJveFNpemUudztcclxuICAgIGNvbnN0IHdMaW5lWCA9IG9mZnNldC54O1xyXG4gICAgY29uc3Qgc0xpbmVZID0gb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oO1xyXG4gICAgY29uc3QgbkxpbmVZID0gb2Zmc2V0Lnk7XHJcblxyXG4gICAgY29uc3Qgc2V0U2l6ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IFxyXG4gICAgICAgIHg6IGUuY2xpZW50WCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0LCBcclxuICAgICAgICB5OiBlLmNsaWVudFkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRCb3goY3VycmVudE1vdXNlUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRCb3ggPSAoY3VycmVudE1vdXNlUG9zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NFTCA9ICEod0xpbmVYICsgY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1dMID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBpc0Nyb3NzU0wgPSAhKG5MaW5lWSArIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NOTCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIGNvbnN0IGVYT2Zmc2V0ID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgd1hPZmZzZXQgPSB3TGluZVggLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHNZT2Zmc2V0ID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgbllPZmZzZXQgPSBuTGluZVkgLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcblxyXG4gICAgICBjb25zdCBlQ3Jvc3NXID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCB3Q3Jvc3NXID0gY3VycmVudE1vdXNlUG9zLnggLSB3TGluZVggLSBjcm9wQm94U2l6ZS53O1xyXG4gICAgICBjb25zdCBzQ3Jvc3NIID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBuQ3Jvc3NIID0gY3VycmVudE1vdXNlUG9zLnkgLSBuTGluZVkgLSBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICAgICAgY29uc3QgZVcgPSBjcm9wQm94U2l6ZS53ICsgY3VycmVudE1vdXNlUG9zLnggLSBlTGluZVg7XHJcbiAgICAgIGNvbnN0IHdXID0gY3JvcEJveFNpemUudyArIHdMaW5lWCAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBzSCA9IGNyb3BCb3hTaXplLmggKyBjdXJyZW50TW91c2VQb3MueSAtIHNMaW5lWTtcclxuICAgICAgY29uc3QgbkggPSBjcm9wQm94U2l6ZS5oICsgbkxpbmVZIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ253JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcFNldFNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXNoID0gKCkgPT4gWyd3JywgJ2gnXS5tYXAoKGRpcikgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdkYXNoJywgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldExpbmUgPSAoKSA9PiBMSU5FX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdsaW5lJywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRQb2ludHMgPSAoKSA9PiBQT0lOVF9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogYCR7Y3JvcEJveFNpemUud31weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoJHtvZmZzZXQueX1weClgXHJcbiAgICAgIH19XHJcbiAgICA+XHJcblxyXG4gICAgICB7Lyog7J2066+47KeAIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgndmlld0JveCcpfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCd2aWV3SW1nJyl9XHJcbiAgICAgICAgICBzcmM9e2ltZ1BhdGh9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgey8qIOqyqeyekCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXREYXNoKCl9XHJcblxyXG4gICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3NzJyl9IC8+XHJcblxyXG4gICAgICB7Lyog7Luk7IScIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnbW92ZUJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRQYW59IC8+XHJcblxyXG4gICAgICB7Lyog67O0642UIOyYgeyXrSAqL31cclxuICAgICAge2dldExpbmUoKX1cclxuXHJcbiAgICAgIHsvKiDsoJAg7JiB7JetICovfVxyXG4gICAgICB7Z2V0UG9pbnRzKCl9XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9wQm94OyJdLCJzb3VyY2VSb290IjoiIn0=