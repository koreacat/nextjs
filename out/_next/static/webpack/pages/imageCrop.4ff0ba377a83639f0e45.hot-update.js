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
    x: Object(_data__WEBPACK_IMPORTED_MODULE_4__["clamp"])(x, minX, maxX),
    y: Object(_data__WEBPACK_IMPORTED_MODULE_4__["clamp"])(y, minY, maxY)
  };
}

var CropBox = function CropBox(_ref) {
  _s();

  var wrapRef = _ref.wrapRef,
      imgSrc = _ref.imgSrc,
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

  var startSetCropBox = function startSetCropBox(e, dir) {
    e.preventDefault();
    var eLineX = offset.x + cropBoxSize.w;
    var wLineX = offset.x;
    var sLineY = offset.y + cropBoxSize.h;
    var nLineY = offset.y;

    var setCropBox = function setCropBox(e) {
      var x = e.pageX - wrapRef.current.offsetLeft;
      var y = e.pageY - wrapRef.current.offsetTop;
      setBox({
        x: Object(_data__WEBPACK_IMPORTED_MODULE_4__["clamp"])(x, 0, imgSize.w),
        y: Object(_data__WEBPACK_IMPORTED_MODULE_4__["clamp"])(y, 0, imgSize.h)
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

    var stopSetCropBox = function stopSetCropBox() {
      document.removeEventListener("mousemove", setCropBox);
      document.removeEventListener("mouseup", stopSetCropBox);
    };

    document.addEventListener("mousemove", setCropBox);
    document.addEventListener("mouseup", stopSetCropBox);
  };

  var getDash = function getDash() {
    return ['w', 'h'].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('dash', dir)
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 5
      }, _this);
    });
  };

  var getLine = function getLine() {
    return _data__WEBPACK_IMPORTED_MODULE_4__["LINE_DIR"].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('line', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetCropBox(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 5
      }, _this);
    });
  };

  var getPoints = function getPoints() {
    return _data__WEBPACK_IMPORTED_MODULE_4__["POINT_DIR"].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('point', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetCropBox(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
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
        src: imgSrc,
        style: {
          width: "".concat(imgSize.w, "px"),
          height: "".concat(imgSize.h, "px"),
          transform: "translateX(-".concat(offset.x, "px) translateY(-").concat(offset.y, "px)")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }, _this), getLine(), getPoints(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cropBoxInfo'),
      children: [offset.x, ", ", offset.y, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
      }, _this), cropBoxSize.w, ", ", cropBoxSize.h, " (px)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 214,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsImNsYW1wIiwiQ3JvcEJveCIsIndyYXBSZWYiLCJpbWdTcmMiLCJpbWdTaXplIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsImxhc3RNb3VzZVBvc1JlZiIsInVzZVJlZiIsIk9SSUdJTl9QT0lOVCIsImdldEVkZ2VXaWR0aCIsInciLCJnZXRFZGdlSGVpZ2h0IiwiaCIsInN0YXJ0UGFuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZUNyb3BCb3giLCJzdG9wUGFuIiwiY3VycmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldENyb3BCb3giLCJkaXIiLCJlTGluZVgiLCJ3TGluZVgiLCJzTGluZVkiLCJuTGluZVkiLCJzZXRDcm9wQm94IiwicGFnZVgiLCJvZmZzZXRMZWZ0IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJzZXRCb3giLCJpc0Nyb3NzRUwiLCJpc0Nyb3NzV0wiLCJpc0Nyb3NzU0wiLCJpc0Nyb3NzTkwiLCJlWE9mZnNldCIsIndYT2Zmc2V0Iiwic1lPZmZzZXQiLCJuWU9mZnNldCIsImVDcm9zc1ciLCJ3Q3Jvc3NXIiwic0Nyb3NzSCIsIm5Dcm9zc0giLCJlVyIsIndXIiwic0giLCJuSCIsInN0b3BTZXRDcm9wQm94IiwiZ2V0RGFzaCIsIm1hcCIsImdldExpbmUiLCJMSU5FX0RJUiIs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QUFiLE9BRkQ7QUFHTHFELG1CQUFTLHdCQUFpQi9ELE1BQU0sQ0FBQ1osQ0FBeEIsNkJBQTRDWSxNQUFNLENBQUNYLENBQW5EO0FBSEo7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLEVBdUJHa0UsT0FBTyxFQXZCVixlQTBCRTtBQUFNLGVBQVMsRUFBRTFFLEVBQUUsQ0FBQyxPQUFEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUE2QkU7QUFBTSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQW5CO0FBQWdDLGlCQUFXLEVBQUU4QjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGLEVBZ0NHOEMsT0FBTyxFQWhDVixFQW1DR0UsU0FBUyxFQW5DWixlQXFDRTtBQUFNLGVBQVMsRUFBRTlFLEVBQUUsQ0FBQyxhQUFELENBQW5CO0FBQUEsaUJBQ0dtQixNQUFNLENBQUNaLENBRFYsUUFDZVksTUFBTSxDQUFDWCxDQUR0QixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdHYSxXQUFXLENBQUNNLENBSGYsUUFHb0JOLFdBQVcsQ0FBQ1EsQ0FIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkNELENBdk9EOztHQUFNZCxPOztLQUFBQSxPO0FBeU9TQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuNGZmMGJhMzc3YTgzNjM5ZjBlNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBSZWZPYmplY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUG9pbnQsIFNpemUsIE9SSUdJTl9QT0lOVCwgRGlyVHlwZSwgTElORV9ESVIsIFBPSU5UX0RJUiwgY2xhbXAgfSBmcm9tICcuL2RhdGEnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQsIG1pblggPSAwLCBtaW5ZID0gMCwgbWF4WCA9IDAsIG1heFkgPSAwKSB7XHJcbiAgY29uc3QgeCA9IHAxLnggKyBwMi54O1xyXG4gIGNvbnN0IHkgPSBwMS55ICsgcDIueTtcclxuICByZXR1cm4geyB4OiBjbGFtcCh4LCBtaW5YLCBtYXhYKSwgeTogY2xhbXAoeSwgbWluWSwgbWF4WSkgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENyb3BCb3hQcm9wcyB7XHJcbiAgd3JhcFJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICBpbWdTcmM6IHN0cmluZztcclxuICBpbWdTaXplOiBTaXplO1xyXG4gIG9mZnNldDogUG9pbnQ7XHJcbiAgc2V0T2Zmc2V0OiAob2Zmc2V0OiAoKHByZXY6IFBvaW50KSA9PiBQb2ludCkgfCBQb2ludCkgPT4gdm9pZDtcclxuICBjcm9wQm94U2l6ZTogU2l6ZTtcclxuICBzZXRDcm9wQm94U2l6ZTogKGNyb3BCb3hTaXplOiBTaXplKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBDcm9wQm94ID0gKFxyXG4gIHsgXHJcbiAgICB3cmFwUmVmLCBcclxuICAgIGltZ1NyYywgXHJcbiAgICBpbWdTaXplLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgc2V0T2Zmc2V0LFxyXG4gICAgY3JvcEJveFNpemUsXHJcbiAgICBzZXRDcm9wQm94U2l6ZSxcclxuICB9OiBDcm9wQm94UHJvcHMpID0+IHtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIGNvbnN0IGdldEVkZ2VXaWR0aCA9ICgpID0+IGltZ1NpemUudyAtIGNyb3BCb3hTaXplLnc7XHJcbiAgY29uc3QgZ2V0RWRnZUhlaWdodCA9ICgpID0+IGltZ1NpemUuaCAtIGNyb3BCb3hTaXplLmg7XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgbGFzdE1vdXNlUG9zID0gbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuXHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT5cclxuICAgICAgYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZiwgMCwgMCwgZ2V0RWRnZVdpZHRoKCksIGdldEVkZ2VIZWlnaHQoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9wUGFuID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0Q3JvcEJveCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGRpcjogRGlyVHlwZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGVMaW5lWCA9IG9mZnNldC54ICsgY3JvcEJveFNpemUudztcclxuICAgIGNvbnN0IHdMaW5lWCA9IG9mZnNldC54O1xyXG4gICAgY29uc3Qgc0xpbmVZID0gb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oO1xyXG4gICAgY29uc3QgbkxpbmVZID0gb2Zmc2V0Lnk7XHJcblxyXG4gICAgY29uc3Qgc2V0Q3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcDtcclxuICAgICAgc2V0Qm94KHsgeDogY2xhbXAoeCwgMCwgaW1nU2l6ZS53KSwgeTogY2xhbXAoeSwgMCwgaW1nU2l6ZS5oKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRCb3ggPSAoY3VycmVudE1vdXNlUG9zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NFTCA9ICEod0xpbmVYICsgY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1dMID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBpc0Nyb3NzU0wgPSAhKG5MaW5lWSArIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NOTCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIGNvbnN0IGVYT2Zmc2V0ID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgd1hPZmZzZXQgPSB3TGluZVggLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHNZT2Zmc2V0ID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgbllPZmZzZXQgPSBuTGluZVkgLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcblxyXG4gICAgICBjb25zdCBlQ3Jvc3NXID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCB3Q3Jvc3NXID0gY3VycmVudE1vdXNlUG9zLnggLSB3TGluZVggLSBjcm9wQm94U2l6ZS53O1xyXG4gICAgICBjb25zdCBzQ3Jvc3NIID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBuQ3Jvc3NIID0gY3VycmVudE1vdXNlUG9zLnkgLSBuTGluZVkgLSBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICAgICAgY29uc3QgZVcgPSBjcm9wQm94U2l6ZS53ICsgY3VycmVudE1vdXNlUG9zLnggLSBlTGluZVg7XHJcbiAgICAgIGNvbnN0IHdXID0gY3JvcEJveFNpemUudyArIHdMaW5lWCAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBzSCA9IGNyb3BCb3hTaXplLmggKyBjdXJyZW50TW91c2VQb3MueSAtIHNMaW5lWTtcclxuICAgICAgY29uc3QgbkggPSBjcm9wQm94U2l6ZS5oICsgbkxpbmVZIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ253JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcFNldENyb3BCb3ggPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGFzaCA9ICgpID0+IFsndycsICdoJ10ubWFwKChkaXIpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnZGFzaCcsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRMaW5lID0gKCkgPT4gTElORV9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnbGluZScsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0Q3JvcEJveChlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0UG9pbnRzID0gKCkgPT4gUE9JTlRfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ3BvaW50JywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRDcm9wQm94KGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2N4KCdjcm9wQm94Jyl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IGAke2Nyb3BCb3hTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7Y3JvcEJveFNpemUuaH1weGAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG5cclxuICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3ZpZXdCb3gnKX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgc3JjPXtpbWdTcmN9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgey8qIOqyqeyekCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXREYXNoKCl9XHJcblxyXG4gICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3NzJyl9IC8+XHJcblxyXG4gICAgICB7Lyog7Luk7IScIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnbW92ZUJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRQYW59IC8+XHJcblxyXG4gICAgICB7Lyog67O0642UIOyYgeyXrSAqL31cclxuICAgICAge2dldExpbmUoKX1cclxuXHJcbiAgICAgIHsvKiDsoJAg7JiB7JetICovfVxyXG4gICAgICB7Z2V0UG9pbnRzKCl9XHJcbiAgICAgIFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9wQm94SW5mbycpfT5cclxuICAgICAgICB7b2Zmc2V0Lnh9LCB7b2Zmc2V0Lnl9XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICB7Y3JvcEJveFNpemUud30sIHtjcm9wQm94U2l6ZS5ofSAocHgpXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JvcEJveDsiXSwic291cmNlUm9vdCI6IiJ9