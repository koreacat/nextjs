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
        lineNumber: 157,
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
        lineNumber: 161,
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
        lineNumber: 165,
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
        lineNumber: 180,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }, _this), getLine(), getPoints()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsIkNyb3BCb3giLCJzdGFydFBhbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmVDcm9wQm94Iiwic3RvcFBhbiIsImxhc3RNb3VzZVBvc1JlZiIsImN1cnJlbnQiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwic3RhcnRTZXRTaXplIiwiZGlyIiwiZUxpbmVYIiwib2Zmc2V0IiwiY3JvcEJveFNpemUiLCJ3Iiwid0xpbmVYIiwic0xpbmVZIiwiaCIsIm5MaW5lWSIsInNldFNpemVDcm9wQm94IiwiY3VycmVudE1vdXNlUG9zIiwid3JhcFJlZiIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzZXRCb3giLCJpc0Nyb3NzRUwiLCJpc0Nyb3NzV0wiLCJpc0Nyb3NzU0wiLCJpc0Nyb3NzTkwiLCJlWE9mZnNldCIsIndYT2Zmc2V0Iiwic1lPZmZzZXQiLCJuWU9mZnNldCIsImVDcm9zc1ciLCJ3Q3Jvc3NXIiwic0Nyb3NzSCIsIm5Dcm9zc0giLCJlVyIsIndXIiwic0giLCJuSCIsInNldE9mZnNldCIsInNldENyb3BCb3hTaXplIiwic3RvcFNldFNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0RGFzaCIsIm1hcCIsImdldExpbmUiLCJnZXRQb2ludHMiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsImltZ1BhdGgiLCJpbWdTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7QUFFQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxH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LDZCQUE0Q08sTUFBTSxDQUFDTCxDQUFuRDtBQUhKO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixFQXVCR3NDLE9BQU8sRUF2QlYsZUEwQkU7QUFBTSxlQUFTLEVBQUV4RCxFQUFFLENBQUMsT0FBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBNkJFO0FBQU0sZUFBUyxFQUFFQSxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFnQyxpQkFBVyxFQUFFTztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGLEVBZ0NHbUQsT0FBTyxFQWhDVixFQW1DR0MsU0FBUyxFQW5DWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdDRCxDQXZNRDs7S0FBTXJELE87QUF5TVNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC5jNjE0NWM1NTU2YmE1YWI4YWVlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IERpclR5cGUgfSBmcm9tICcuJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IExJTkVfRElSID0gWydlJywgJ3cnLCAncycsICduJ107XHJcbmNvbnN0IFBPSU5UX0RJUiA9IFsnZScsICd3JywgJ3MnLCAnbicsICdzZScsICdzdycsICduZScsICdudyddO1xyXG5cclxuY29uc3QgQ3JvcEJveCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydFNldFNpemUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBkaXI6IERpclR5cGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueCArIGNyb3BCb3hTaXplLnc7XHJcbiAgICBjb25zdCB3TGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IHNMaW5lWSA9IG9mZnNldC55ICsgY3JvcEJveFNpemUuaDtcclxuICAgIGNvbnN0IG5MaW5lWSA9IG9mZnNldC55O1xyXG5cclxuICAgIGNvbnN0IHNldFNpemVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyBcclxuICAgICAgICB4OiBlLmNsaWVudFggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCwgXHJcbiAgICAgICAgeTogZS5jbGllbnRZIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcclxuICAgICAgfTtcclxuICAgICAgc2V0Qm94KGN1cnJlbnRNb3VzZVBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ID0gKGN1cnJlbnRNb3VzZVBvcykgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nyb3NzRUwgPSAhKHdMaW5lWCArIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NXTCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3QgaXNDcm9zc1NMID0gIShuTGluZVkgKyBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzTkwgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBjb25zdCBlWE9mZnNldCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHdYT2Zmc2V0ID0gd0xpbmVYIC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBzWU9mZnNldCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IG5ZT2Zmc2V0ID0gbkxpbmVZIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG5cclxuICAgICAgY29uc3QgZUNyb3NzVyA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgd0Nyb3NzVyA9IGN1cnJlbnRNb3VzZVBvcy54IC0gd0xpbmVYIC0gY3JvcEJveFNpemUudztcclxuICAgICAgY29uc3Qgc0Nyb3NzSCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSBjdXJyZW50TW91c2VQb3MueTtcclxuICAgICAgY29uc3QgbkNyb3NzSCA9IGN1cnJlbnRNb3VzZVBvcy55IC0gbkxpbmVZIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgICAgIGNvbnN0IGVXID0gY3JvcEJveFNpemUudyArIGN1cnJlbnRNb3VzZVBvcy54IC0gZUxpbmVYO1xyXG4gICAgICBjb25zdCB3VyA9IGNyb3BCb3hTaXplLncgKyB3TGluZVggLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgc0ggPSBjcm9wQm94U2l6ZS5oICsgY3VycmVudE1vdXNlUG9zLnkgLSBzTGluZVk7XHJcbiAgICAgIGNvbnN0IG5IID0gY3JvcEJveFNpemUuaCArIG5MaW5lWSAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmUnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdudyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRTaXplID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGFzaCA9ICgpID0+IFsndycsICdoJ10ubWFwKChkaXIpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnZGFzaCcsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRMaW5lID0gKCkgPT4gTElORV9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnbGluZScsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0U2l6ZShlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0UG9pbnRzID0gKCkgPT4gUE9JTlRfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ3BvaW50JywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2N4KCdjcm9wQm94Jyl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IGAke2Nyb3BCb3hTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7Y3JvcEJveFNpemUuaH1weGAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG5cclxuICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3ZpZXdCb3gnKX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtvZmZzZXQueH1weCkgdHJhbnNsYXRlWSgtJHtvZmZzZXQueX1weClgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgIHsvKiDqsqnsnpAg7JiB7JetICovfVxyXG4gICAgICB7Z2V0RGFzaCgpfVxyXG5cclxuICAgICAgey8qIOykkeyVmSDsi63snpDqsIAg7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9zcycpfSAvPlxyXG5cclxuICAgICAgey8qIOy7pOyEnCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ21vdmVCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0UGFufSAvPlxyXG5cclxuICAgICAgey8qIOuztOuNlCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXRMaW5lKCl9XHJcblxyXG4gICAgICB7Lyog7KCQIOyYgeyXrSAqL31cclxuICAgICAge2dldFBvaW50cygpfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JvcEJveDsiXSwic291cmNlUm9vdCI6IiJ9