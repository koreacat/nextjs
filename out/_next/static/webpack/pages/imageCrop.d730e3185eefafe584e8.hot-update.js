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


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\imageCrop\\CropBox.tsx",
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

  var imgSrc = _ref.imgSrc,
      imgSize = _ref.imgSize,
      offset = _ref.offset,
      setOffset = _ref.setOffset,
      cropBoxSize = _ref.cropBoxSize,
      setCropBoxSize = _ref.setCropBoxSize,
      offsetTop = _ref.offsetTop,
      offsetLeft = _ref.offsetLeft;
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
      var x = e.pageX - offsetLeft;
      var y = e.pageY - offsetTop;
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
        lineNumber: 204,
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
        lineNumber: 208,
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
        lineNumber: 212,
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
        lineNumber: 227,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }, _this), getLine(), getPoints(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cropBoxInfo'),
      children: [offset.x, ", ", offset.y, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }, _this), cropBoxSize.w, ", ", cropBoxSize.h, " (px)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 216,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsImNsYW1wIiwiQ3JvcEJveCIsImltZ1NyYyIsImltZ1NpemUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJjcm9wQm94U2l6ZSIsInNldENyb3BCb3hTaXplIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsImxhc3RNb3VzZVBvc1JlZiIsInVzZVJlZiIsIk9SSUdJTl9QT0lOVCIsImdldEVkZ2VXaWR0aCIsInciLCJnZXRFZGdlSGVpZ2h0IiwiaCIsInN0YXJ0UGFuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZUNyb3BCb3giLCJzdG9wUGFuIiwiY3VycmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldENyb3BCb3giLCJkaXIiLCJlTGluZVgiLCJ3TGluZVgiLCJzTGluZVkiLCJuTGluZVkiLCJzZXRDcm9wQm94IiwicGFnZVgiLCJwYWdlWSIsInNldEJveCIsImlzQ3Jvc3NFTCIsImlzQ3Jvc3NXTCIsImlzQ3Jvc3NTTCIsImlzQ3Jvc3NOTCIsImVYT2Zmc2V0Iiwid1hPZmZzZXQiLCJzWU9mZnNldCIsIm5ZT2Zmc2V0IiwiZUNyb3NzVyIsIndDcm9zc1ciLCJzQ3Jvc3NIIiwibkNyb3NzSCIsImVXIiwid1ciLCJzSCIsIm5IIiwic3RvcFNldENyb3BCb3giLCJnZXREYXNoIiwibWFwIiwiZ2V0TGluZSIsIkxJTkVfRElSIiwiZ2V0UG9pbnRz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LE1BQU0sQ0FBQ1gsQ0FBeEIsNkJBQTRDVyxNQUFNLENBQUNWLENBQW5EO0FBSEo7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLEVBdUJHaUUsT0FBTyxFQXZCVixlQTBCRTtBQUFNLGVBQVMsRUFBRXpFLEVBQUUsQ0FBQyxPQUFEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUE2QkU7QUFBTSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQW5CO0FBQWdDLGlCQUFXLEVBQUUrQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGLEVBZ0NHNEMsT0FBTyxFQWhDVixFQW1DR0UsU0FBUyxFQW5DWixlQXFDRTtBQUFNLGVBQVMsRUFBRTdFLEVBQUUsQ0FBQyxhQUFELENBQW5CO0FBQUEsaUJBQ0drQixNQUFNLENBQUNYLENBRFYsUUFDZVcsTUFBTSxDQUFDVixDQUR0QixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdHWSxXQUFXLENBQUNRLENBSGYsUUFHb0JSLFdBQVcsQ0FBQ1UsQ0FIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkNELENBeE9EOztHQUFNZixPOztLQUFBQSxPO0FBME9TQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuZDczMGUzMTg1ZWVmYWZlNTg0ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBSZWZPYmplY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUG9pbnQsIFNpemUsIE9SSUdJTl9QT0lOVCwgRGlyVHlwZSwgTElORV9ESVIsIFBPSU5UX0RJUiwgY2xhbXAgfSBmcm9tICcuL2RhdGEnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQsIG1pblggPSAwLCBtaW5ZID0gMCwgbWF4WCA9IDAsIG1heFkgPSAwKSB7XHJcbiAgY29uc3QgeCA9IHAxLnggKyBwMi54O1xyXG4gIGNvbnN0IHkgPSBwMS55ICsgcDIueTtcclxuICByZXR1cm4geyB4OiBjbGFtcCh4LCBtaW5YLCBtYXhYKSwgeTogY2xhbXAoeSwgbWluWSwgbWF4WSkgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENyb3BCb3hQcm9wcyB7XHJcbiAgaW1nU3JjOiBzdHJpbmc7XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxuICBvZmZzZXQ6IFBvaW50O1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogKChwcmV2OiBQb2ludCkgPT4gUG9pbnQpIHwgUG9pbnQpID0+IHZvaWQ7XHJcbiAgY3JvcEJveFNpemU6IFNpemU7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxuICBvZmZzZXRUb3A6IG51bWJlcjtcclxuICBvZmZzZXRMZWZ0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IENyb3BCb3ggPSAoXHJcbiAge1xyXG4gICAgaW1nU3JjLFxyXG4gICAgaW1nU2l6ZSxcclxuICAgIG9mZnNldCxcclxuICAgIHNldE9mZnNldCxcclxuICAgIGNyb3BCb3hTaXplLFxyXG4gICAgc2V0Q3JvcEJveFNpemUsXHJcbiAgICBvZmZzZXRUb3AsXHJcbiAgICBvZmZzZXRMZWZ0LFxyXG4gIH06IENyb3BCb3hQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuXHJcbiAgY29uc3QgZ2V0RWRnZVdpZHRoID0gKCkgPT4gaW1nU2l6ZS53IC0gY3JvcEJveFNpemUudztcclxuICBjb25zdCBnZXRFZGdlSGVpZ2h0ID0gKCkgPT4gaW1nU2l6ZS5oIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb3ZlQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG5cclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gY3VycmVudE1vdXNlUG9zO1xyXG4gICAgc2V0T2Zmc2V0KChwcmV2T2Zmc2V0KSA9PlxyXG4gICAgICBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmLCAwLCAwLCBnZXRFZGdlV2lkdGgoKSwgZ2V0RWRnZUhlaWdodCgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BQYW4gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRDcm9wQm94ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PiwgZGlyOiBzdHJpbmcpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueCArIGNyb3BCb3hTaXplLnc7XHJcbiAgICBjb25zdCB3TGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IHNMaW5lWSA9IG9mZnNldC55ICsgY3JvcEJveFNpemUuaDtcclxuICAgIGNvbnN0IG5MaW5lWSA9IG9mZnNldC55O1xyXG5cclxuICAgIGNvbnN0IHNldENyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIG9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gb2Zmc2V0VG9wO1xyXG4gICAgICBzZXRCb3goeyB4OiBjbGFtcCh4LCAwLCBpbWdTaXplLncpLCB5OiBjbGFtcCh5LCAwLCBpbWdTaXplLmgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEJveCA9IChjdXJyZW50TW91c2VQb3M6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pID0+IHtcclxuICAgICAgY29uc3QgaXNDcm9zc0VMID0gISh3TGluZVggKyBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzV0wgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NTTCA9ICEobkxpbmVZICsgY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgaXNDcm9zc05MID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgY29uc3QgZVhPZmZzZXQgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCB3WE9mZnNldCA9IHdMaW5lWCAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgc1lPZmZzZXQgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBuWU9mZnNldCA9IG5MaW5lWSAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuXHJcbiAgICAgIGNvbnN0IGVDcm9zc1cgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHdDcm9zc1cgPSBjdXJyZW50TW91c2VQb3MueCAtIHdMaW5lWCAtIGNyb3BCb3hTaXplLnc7XHJcbiAgICAgIGNvbnN0IHNDcm9zc0ggPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcbiAgICAgIGNvbnN0IG5Dcm9zc0ggPSBjdXJyZW50TW91c2VQb3MueSAtIG5MaW5lWSAtIGNyb3BCb3hTaXplLmg7XHJcblxyXG4gICAgICBjb25zdCBlVyA9IGNyb3BCb3hTaXplLncgKyBjdXJyZW50TW91c2VQb3MueCAtIGVMaW5lWDtcclxuICAgICAgY29uc3Qgd1cgPSBjcm9wQm94U2l6ZS53ICsgd0xpbmVYIC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHNIID0gY3JvcEJveFNpemUuaCArIGN1cnJlbnRNb3VzZVBvcy55IC0gc0xpbmVZO1xyXG4gICAgICBjb25zdCBuSCA9IGNyb3BCb3hTaXplLmggKyBuTGluZVkgLSBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIHN3aXRjaCAoZGlyKSB7XHJcbiAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25lJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbncnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9wU2V0Q3JvcEJveCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0Q3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXNoID0gKCkgPT4gWyd3JywgJ2gnXS5tYXAoKGRpcikgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdkYXNoJywgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldExpbmUgPSAoKSA9PiBMSU5FX0RJUi5tYXAoKGRpcjogc3RyaW5nKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2xpbmUnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldENyb3BCb3goZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldFBvaW50cyA9ICgpID0+IFBPSU5UX0RJUi5tYXAoKGRpcjogc3RyaW5nKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ3BvaW50JywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRDcm9wQm94KGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2N4KCdjcm9wQm94Jyl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IGAke2Nyb3BCb3hTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7Y3JvcEJveFNpemUuaH1weGAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG5cclxuICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3ZpZXdCb3gnKX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgc3JjPXtpbWdTcmN9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgey8qIOqyqeyekCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXREYXNoKCl9XHJcblxyXG4gICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3NzJyl9IC8+XHJcblxyXG4gICAgICB7Lyog7Luk7IScIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnbW92ZUJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRQYW59IC8+XHJcblxyXG4gICAgICB7Lyog67O0642UIOyYgeyXrSAqL31cclxuICAgICAge2dldExpbmUoKX1cclxuXHJcbiAgICAgIHsvKiDsoJAg7JiB7JetICovfVxyXG4gICAgICB7Z2V0UG9pbnRzKCl9XHJcblxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9wQm94SW5mbycpfT5cclxuICAgICAgICB7b2Zmc2V0Lnh9LCB7b2Zmc2V0Lnl9XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICB7Y3JvcEJveFNpemUud30sIHtjcm9wQm94U2l6ZS5ofSAocHgpXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JvcEJveDsiXSwic291cmNlUm9vdCI6IiJ9