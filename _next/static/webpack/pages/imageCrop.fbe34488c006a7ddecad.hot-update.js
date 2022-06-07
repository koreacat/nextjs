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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/components/imageCrop/data.ts");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\CropBox.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

function diffPoints(p1, p2) {
  return {
    x: p1.x - p2.x,
    y: p1.y - p2.y
  };
}

function addPoints(p1, p2) {
  var minX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var minY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var maxX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var maxY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var x = p1.x + p2.x;
  var y = p1.y + p2.y;
  return {
    x: x < minX ? minX : x > maxX ? maxX : x,
    y: y < minY ? minY : y > maxY ? maxY : y
  };
}

var CropBox = function CropBox(_ref) {
  _s();

  var wrapRef = _ref.wrapRef,
      imgPath = _ref.imgPath,
      imgSize = _ref.imgSize,
      offset = _ref.offset,
      setOffset = _ref.setOffset,
      cropBoxSize = _ref.cropBoxSize,
      setCropBoxSize = _ref.setCropBoxSize;
  var lastMousePosRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(_data__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_POINT"]);

  var getEdgeWidth = function getEdgeWidth() {
    return imgSize.w - cropBoxSize.w;
  };

  var getEdgeHeight = function getEdgeHeight() {
    return imgSize.h - cropBoxSize.h;
  };

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
      return addPoints(prevOffset, mouseDiff, 0, 0, getEdgeWidth(), getEdgeHeight());
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
      var x = e.pageX - wrapRef.current.offsetLeft;
      var y = e.pageY - wrapRef.current.offsetTop;
      setBox({
        x: x < 0 ? 0 : x > imgSize.w ? imgSize.w : x,
        y: y < 0 ? 0 : y > imgSize.h ? imgSize.h : y
      });
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
        lineNumber: 209,
        columnNumber: 5
      }, _this);
    });
  };

  var getLine = function getLine() {
    return _data__WEBPACK_IMPORTED_MODULE_4__["LINE_DIR"].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('line', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetSize(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 5
      }, _this);
    });
  };

  var getPoints = function getPoints() {
    return _data__WEBPACK_IMPORTED_MODULE_4__["POINT_DIR"].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('point', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetSize(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
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
        lineNumber: 232,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, _this), getLine(), getPoints(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cropBoxInfo'),
      children: [offset.x, ", ", offset.y, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 9
      }, _this), cropBoxSize.w, ", ", cropBoxSize.h, " (px)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 5
  }, _this);
};

_s(CropBox, "bA0hzQaNqy8p45XI8XubL2KXkxo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIkNyb3BCb3giLCJ3cmFwUmVmIiwiaW1nUGF0aCIsImltZ1NpemUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJjcm9wQm94U2l6ZSIsInNldENyb3BCb3hTaXplIiwibGFzdE1vdXNlUG9zUmVmIiwidXNlUmVmIiwiT1JJR0lOX1BPSU5UIiwiZ2V0RWRnZVdpZHRoIiwidyIsImdldEVkZ2VIZWlnaHQiLCJoIiwic3RhcnRQYW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3ZlQ3JvcEJveCIsInN0b3BQYW4iLCJjdXJyZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXJ0U2V0U2l6ZSIsImRpciIsImVMaW5lWCIsIndMaW5lWCIsInNMaW5lWSIsIm5MaW5lWSIsInNldFNpemVDcm9wQm94IiwicGFnZVgiLCJvZmZzZXRMZWZ0IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJzZXRCb3giLCJpc0Nyb3NzRUwiLCJpc0Nyb3NzV0wiLCJpc0Nyb3NzU0wiLCJpc0Nyb3NzTkwiLCJlWE9mZnNldCIsIndYT2Zmc2V0Iiwic1lPZmZzZXQiLCJuWU9mZnNldCIsImVDcm9zc1ciLCJ3Q3Jvc3NXIiwic0Nyb3NzSCIsIm5Dcm9zc0giLCJlVyIsIndXIiwic0giLCJuSCIsInN0b3BTZXRTaXplIiwiZ2V0RGFzaCIsIm1hcCIsImdldExpbmUiLCJMSU5FX0RJUiIsImdldFBvaW50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QUFFLENBQUMsU0FBRCxDQURmO0FBRUUsV0FBRyxFQUFFZ0IsT0FGUDtBQUdFLGFBQUssRUFBRTtBQUNMK0QsZUFBSyxZQUFLOUQsT0FBTyxDQUFDUyxDQUFiLE9BREE7QUFFTHNELGdCQUFNLFlBQUsvRCxPQUFPLENBQUNXLENBQWIsT0FGRDtBQUdMcUQsbUJBQVMsd0JBQWlCL0QsTUFBTSxDQUFDWCxDQUF4Qiw2QkFBNENXLE1BQU0sQ0FBQ1YsQ0FBbkQ7QUFISjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsRUF1QkdpRSxPQUFPLEVBdkJWLGVBMEJFO0FBQU0sZUFBUyxFQUFFekUsRUFBRSxDQUFDLE9BQUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRixlQTZCRTtBQUFNLGVBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbkI7QUFBZ0MsaUJBQVcsRUFBRTZCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkYsRUFnQ0c4QyxPQUFPLEVBaENWLEVBbUNHRSxTQUFTLEVBbkNaLGVBcUNFO0FBQU0sZUFBUyxFQUFFN0UsRUFBRSxDQUFDLGFBQUQsQ0FBbkI7QUFBQSxpQkFDR2tCLE1BQU0sQ0FBQ1gsQ0FEVixRQUNlVyxNQUFNLENBQUNWLENBRHRCLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0dZLFdBQVcsQ0FBQ00sQ0FIZixRQUdvQk4sV0FBVyxDQUFDUSxDQUhoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2Q0QsQ0EzT0Q7O0dBQU1kLE87O0tBQUFBLE87QUE2T1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC5mYmUzNDQ4OGMwMDZhN2RkZWNhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IFJlZk9iamVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQb2ludCwgU2l6ZSwgT1JJR0lOX1BPSU5ULCBEaXJUeXBlLCBMSU5FX0RJUiwgUE9JTlRfRElSIH0gZnJvbSAnLi9kYXRhJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50LCBtaW5YID0gMCwgbWluWSA9IDAsIG1heFggPSAwLCBtYXhZID0gMCkge1xyXG4gIGNvbnN0IHggPSBwMS54ICsgcDIueDtcclxuICBjb25zdCB5ID0gcDEueSArIHAyLnk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6ICh4IDwgbWluWCkgPyBtaW5YIDogKHggPiBtYXhYKSA/IG1heFggOiB4LFxyXG4gICAgeTogKHkgPCBtaW5ZKSA/IG1pblkgOiAoeSA+IG1heFkpID8gbWF4WSA6IHksXHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENyb3BCb3hQcm9wcyB7XHJcbiAgd3JhcFJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICBpbWdQYXRoOiBzdHJpbmc7XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxuICBvZmZzZXQ6IFBvaW50O1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogUG9pbnQpID0+IHZvaWQ7XHJcbiAgY3JvcEJveFNpemU6IFNpemU7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ3JvcEJveCA9IChcclxuICB7IFxyXG4gICAgd3JhcFJlZiwgXHJcbiAgICBpbWdQYXRoLCBcclxuICAgIGltZ1NpemUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICBzZXRPZmZzZXQsXHJcbiAgICBjcm9wQm94U2l6ZSxcclxuICAgIHNldENyb3BCb3hTaXplLFxyXG4gIH06IENyb3BCb3hQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuXHJcbiAgY29uc3QgZ2V0RWRnZVdpZHRoID0gKCkgPT4gaW1nU2l6ZS53IC0gY3JvcEJveFNpemUudztcclxuICBjb25zdCBnZXRFZGdlSGVpZ2h0ID0gKCkgPT4gaW1nU2l6ZS5oIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb3ZlQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG5cclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gY3VycmVudE1vdXNlUG9zO1xyXG4gICAgc2V0T2Zmc2V0KChwcmV2T2Zmc2V0KSA9PlxyXG4gICAgICBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmLCAwLCAwLCBnZXRFZGdlV2lkdGgoKSwgZ2V0RWRnZUhlaWdodCgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BQYW4gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRTaXplID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PiwgZGlyOiBEaXJUeXBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZUxpbmVYID0gb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53O1xyXG4gICAgY29uc3Qgd0xpbmVYID0gb2Zmc2V0Lng7XHJcbiAgICBjb25zdCBzTGluZVkgPSBvZmZzZXQueSArIGNyb3BCb3hTaXplLmg7XHJcbiAgICBjb25zdCBuTGluZVkgPSBvZmZzZXQueTtcclxuXHJcbiAgICBjb25zdCBzZXRTaXplQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcDtcclxuXHJcbiAgICAgIHNldEJveCh7XHJcbiAgICAgICAgeDogKHggPCAwKSA/IDAgOiAoeCA+IGltZ1NpemUudykgPyBpbWdTaXplLncgOiB4LFxyXG4gICAgICAgIHk6ICh5IDwgMCkgPyAwIDogKHkgPiBpbWdTaXplLmgpID8gaW1nU2l6ZS5oIDogeSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ID0gKGN1cnJlbnRNb3VzZVBvcykgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nyb3NzRUwgPSAhKHdMaW5lWCArIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NXTCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3QgaXNDcm9zc1NMID0gIShuTGluZVkgKyBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzTkwgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBjb25zdCBlWE9mZnNldCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHdYT2Zmc2V0ID0gd0xpbmVYIC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBzWU9mZnNldCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IG5ZT2Zmc2V0ID0gbkxpbmVZIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG5cclxuICAgICAgY29uc3QgZUNyb3NzVyA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgd0Nyb3NzVyA9IGN1cnJlbnRNb3VzZVBvcy54IC0gd0xpbmVYIC0gY3JvcEJveFNpemUudztcclxuICAgICAgY29uc3Qgc0Nyb3NzSCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSBjdXJyZW50TW91c2VQb3MueTtcclxuICAgICAgY29uc3QgbkNyb3NzSCA9IGN1cnJlbnRNb3VzZVBvcy55IC0gbkxpbmVZIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgICAgIGNvbnN0IGVXID0gY3JvcEJveFNpemUudyArIGN1cnJlbnRNb3VzZVBvcy54IC0gZUxpbmVYO1xyXG4gICAgICBjb25zdCB3VyA9IGNyb3BCb3hTaXplLncgKyB3TGluZVggLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgc0ggPSBjcm9wQm94U2l6ZS5oICsgY3VycmVudE1vdXNlUG9zLnkgLSBzTGluZVk7XHJcbiAgICAgIGNvbnN0IG5IID0gY3JvcEJveFNpemUuaCArIG5MaW5lWSAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmUnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdudyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRTaXplID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGFzaCA9ICgpID0+IFsndycsICdoJ10ubWFwKChkaXIpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnZGFzaCcsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRMaW5lID0gKCkgPT4gTElORV9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnbGluZScsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0U2l6ZShlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0UG9pbnRzID0gKCkgPT4gUE9JTlRfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ3BvaW50JywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2N4KCdjcm9wQm94Jyl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IGAke2Nyb3BCb3hTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7Y3JvcEJveFNpemUuaH1weGAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG5cclxuICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3ZpZXdCb3gnKX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtvZmZzZXQueH1weCkgdHJhbnNsYXRlWSgtJHtvZmZzZXQueX1weClgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgIHsvKiDqsqnsnpAg7JiB7JetICovfVxyXG4gICAgICB7Z2V0RGFzaCgpfVxyXG5cclxuICAgICAgey8qIOykkeyVmSDsi63snpDqsIAg7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9zcycpfSAvPlxyXG5cclxuICAgICAgey8qIOy7pOyEnCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ21vdmVCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0UGFufSAvPlxyXG5cclxuICAgICAgey8qIOuztOuNlCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXRMaW5lKCl9XHJcblxyXG4gICAgICB7Lyog7KCQIOyYgeyXrSAqL31cclxuICAgICAge2dldFBvaW50cygpfVxyXG4gICAgICBcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnY3JvcEJveEluZm8nKX0+XHJcbiAgICAgICAge29mZnNldC54fSwge29mZnNldC55fVxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAge2Nyb3BCb3hTaXplLnd9LCB7Y3JvcEJveFNpemUuaH0gKHB4KVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3BCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==