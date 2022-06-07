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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\CropBox.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var LINE_DIR = ['e', 'w', 's', 'n'];
var POINT_DIR = ['e', 'w', 's', 'n', 'se', 'sw', 'ne', 'nw'];

var CropBox = function CropBox() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(ORIGIN_POINT),
      offset = _useState[0],
      setOffset = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(ORIGIN_SIZE),
      cropBoxSize = _useState2[0],
      setCropBoxSize = _useState2[1];

  var lastMousePosRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(ORIGIN_POINT);

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
        lineNumber: 178,
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
        lineNumber: 182,
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
        lineNumber: 186,
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
        lineNumber: 201,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }, _this), getLine(), getPoints()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 190,
    columnNumber: 5
  }, _this);
};

_s(CropBox, "eaXc3jIm/RrQRrcFJjpRw6V+XmE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsIkNyb3BCb3giLCJ1c2VTdGF0ZSIsIk9SSUdJTl9QT0lOVCIsIm9mZnNldCIsInNldE9mZnNldCIsIk9SSUdJTl9TSVpFIiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsImxhc3RNb3VzZVBvc1JlZiIsInVzZVJlZiIsInN0YXJ0UGFuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZUNyb3BCb3giLCJzdG9wUGFuIiwiY3VycmVudCIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJkaWZmUG9pbnRzIiwicHJldk9mZnNldCIsImFkZFBvaW50cyIsImltZ1NpemUiLCJ3IiwiaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldFNpemUiLCJkaXIiLCJlTGluZVgiLCJ3TGluZVgiLCJzTGluZVkiLCJuTGluZVkiLCJzZXRTaXplQ3JvcEJveCIsIndyYXBSZWYiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwic2V0Qm94IiwiaXNDcm9zc0VMIiwiaXNDcm9zc1dMIiwiaXNDcm9zc1NMIiwiaXNDcm9zc05MIiwiZVhPZmZzZXQiLCJ3WE9mZnNldCIsInNZT2Zmc2V0IiwibllPZmZzZXQiLCJlQ3Jvc3NXIiwid0Nyb3NzVyIsInNDcm9zc0giLCJuQ3Jvc3NIIiwiZVciLCJ3VyIsInNIIiwibkgiLCJzdG9wU2V0U2l6ZSIsImdldERhc2giLCJtYXAiLCJnZXRMaW5lIiwiZ2V0UG9pbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJpbWdQYXRoIl0sIm1hcHBpbmdzIjoiOzs7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Q0FEZjtBQUVFLFdBQUcsRUFBRXlFLE9BRlA7QUFHRSxhQUFLLEVBQUU7QUFDTEgsZUFBSyxZQUFLcEMsT0FBTyxDQUFDQyxDQUFiLE9BREE7QUFFTG9DLGdCQUFNLFlBQUtyQyxPQUFPLENBQUNFLENBQWIsT0FGRDtBQUdMb0MsbUJBQVMsd0JBQWlCL0QsTUFBTSxDQUFDZSxDQUF4Qiw2QkFBNENmLE1BQU0sQ0FBQ2lCLENBQW5EO0FBSEo7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLEVBdUJHd0MsT0FBTyxFQXZCVixlQTBCRTtBQUFNLGVBQVMsRUFBRWxFLEVBQUUsQ0FBQyxPQUFEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUE2QkU7QUFBTSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQW5CO0FBQWdDLGlCQUFXLEVBQUVnQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGLEVBZ0NHb0QsT0FBTyxFQWhDVixFQW1DR0MsU0FBUyxFQW5DWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdDRCxDQTFORDs7R0FBTS9ELE87O0tBQUFBLE87QUE0TlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC44NzYzNzBmMjU3OWY0NWNiOWI0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IERpclR5cGUgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBMSU5FX0RJUiA9IFsnZScsICd3JywgJ3MnLCAnbiddO1xyXG5jb25zdCBQT0lOVF9ESVIgPSBbJ2UnLCAndycsICdzJywgJ24nLCAnc2UnLCAnc3cnLCAnbmUnLCAnbncnXTtcclxuXHJcbmNvbnN0IENyb3BCb3ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG4gIGNvbnN0IFtjcm9wQm94U2l6ZSwgc2V0Q3JvcEJveFNpemVdID0gdXNlU3RhdGU8U2l6ZT4oT1JJR0lOX1NJWkUpO1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb3ZlQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG5cclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gY3VycmVudE1vdXNlUG9zO1xyXG4gICAgc2V0T2Zmc2V0KChwcmV2T2Zmc2V0KSA9PiBcclxuICAgICAgYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZiwgMCwgMCwgaW1nU2l6ZS53IC0gY3JvcEJveFNpemUudywgaW1nU2l6ZS5oIC0gY3JvcEJveFNpemUuaClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9wUGFuID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0U2l6ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGRpcjogRGlyVHlwZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGVMaW5lWCA9IG9mZnNldC54ICsgY3JvcEJveFNpemUudztcclxuICAgIGNvbnN0IHdMaW5lWCA9IG9mZnNldC54O1xyXG4gICAgY29uc3Qgc0xpbmVZID0gb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oO1xyXG4gICAgY29uc3QgbkxpbmVZID0gb2Zmc2V0Lnk7XHJcblxyXG4gICAgY29uc3Qgc2V0U2l6ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IFxyXG4gICAgICAgIHg6IGUuY2xpZW50WCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0LCBcclxuICAgICAgICB5OiBlLmNsaWVudFkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRCb3goY3VycmVudE1vdXNlUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRCb3ggPSAoY3VycmVudE1vdXNlUG9zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NFTCA9ICEod0xpbmVYICsgY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1dMID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBpc0Nyb3NzU0wgPSAhKG5MaW5lWSArIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NOTCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIGNvbnN0IGVYT2Zmc2V0ID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgd1hPZmZzZXQgPSB3TGluZVggLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHNZT2Zmc2V0ID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgbllPZmZzZXQgPSBuTGluZVkgLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcblxyXG4gICAgICBjb25zdCBlQ3Jvc3NXID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCB3Q3Jvc3NXID0gY3VycmVudE1vdXNlUG9zLnggLSB3TGluZVggLSBjcm9wQm94U2l6ZS53O1xyXG4gICAgICBjb25zdCBzQ3Jvc3NIID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBuQ3Jvc3NIID0gY3VycmVudE1vdXNlUG9zLnkgLSBuTGluZVkgLSBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICAgICAgY29uc3QgZVcgPSBjcm9wQm94U2l6ZS53ICsgY3VycmVudE1vdXNlUG9zLnggLSBlTGluZVg7XHJcbiAgICAgIGNvbnN0IHdXID0gY3JvcEJveFNpemUudyArIHdMaW5lWCAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBzSCA9IGNyb3BCb3hTaXplLmggKyBjdXJyZW50TW91c2VQb3MueSAtIHNMaW5lWTtcclxuICAgICAgY29uc3QgbkggPSBjcm9wQm94U2l6ZS5oICsgbkxpbmVZIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ253JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcFNldFNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXNoID0gKCkgPT4gWyd3JywgJ2gnXS5tYXAoKGRpcikgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdkYXNoJywgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldExpbmUgPSAoKSA9PiBMSU5FX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdsaW5lJywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRQb2ludHMgPSAoKSA9PiBQT0lOVF9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogYCR7Y3JvcEJveFNpemUud31weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoJHtvZmZzZXQueX1weClgXHJcbiAgICAgIH19XHJcbiAgICA+XHJcblxyXG4gICAgICB7Lyog7J2066+47KeAIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgndmlld0JveCcpfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCd2aWV3SW1nJyl9XHJcbiAgICAgICAgICBzcmM9e2ltZ1BhdGh9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgey8qIOqyqeyekCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXREYXNoKCl9XHJcblxyXG4gICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3NzJyl9IC8+XHJcblxyXG4gICAgICB7Lyog7Luk7IScIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnbW92ZUJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRQYW59IC8+XHJcblxyXG4gICAgICB7Lyog67O0642UIOyYgeyXrSAqL31cclxuICAgICAge2dldExpbmUoKX1cclxuXHJcbiAgICAgIHsvKiDsoJAg7JiB7JetICovfVxyXG4gICAgICB7Z2V0UG9pbnRzKCl9XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9wQm94OyJdLCJzb3VyY2VSb290IjoiIn0=