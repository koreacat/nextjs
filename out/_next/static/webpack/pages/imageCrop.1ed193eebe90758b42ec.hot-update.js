webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/index.tsx":
/*!********************************************!*\
  !*** ./src/components/imageCrop/index.tsx ***!
  \********************************************/
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


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var IMG_PATH = '/nextjs/img/chunSik/imgChunSikFace.png';
;

function diffPoints(p1, p2) {
  return {
    x: p1.x - p2.x,
    y: p1.y - p2.y
  };
}

function addPoints(p1, p2) {
  return {
    x: p1.x + p2.x,
    y: p1.y + p2.y
  };
}

var ORIGIN_POINT = Object.freeze({
  x: 0,
  y: 0
});
var ORIGIN_SIZE = Object.freeze({
  w: 100,
  h: 100
});
var LINE_DIR = ['e', 's', 'w', 'n'];
var POINT_DIR = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];

var ImageCrop = function ImageCrop() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(IMG_PATH),
      imgPath = _useState[0],
      setImgPath = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    w: 412,
    h: 412
  }),
      imgSize = _useState2[0],
      setImgSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(ORIGIN_POINT),
      offset = _useState3[0],
      setOffset = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(ORIGIN_SIZE),
      cropBoxSize = _useState4[0],
      setCropBoxSize = _useState4[1];

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
    lastMousePosRef.current = currentMousePos;
    var mouseDiff = diffPoints(currentMousePos, lastMousePos);
    setOffset(function (prevOffset) {
      return addPoints(prevOffset, mouseDiff);
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
    var nLineY = offset.y;
    var sLineY = offset.y + cropBoxSize.h;

    var setSizeCropBox = function setSizeCropBox(e) {
      var currentMousePos = {
        x: e.clientX,
        y: e.clientY
      };
      lastMousePosRef.current = currentMousePos;
      setBox(currentMousePos);
    };

    var setBox = function setBox(currentMousePos) {
      var isCrossNL = sLineY - cropBoxSize.h > currentMousePos.y;
      var isCrossEL = !(wLineX + cropBoxSize.w > currentMousePos.x);
      var isCrossSL = !(nLineY + cropBoxSize.h > currentMousePos.y);
      var isCrossWL = eLineX - cropBoxSize.w > currentMousePos.x;
      var nYOffset = nLineY - (offset.y - currentMousePos.y);
      var eXOffset = eLineX - cropBoxSize.w - (offset.x - currentMousePos.x);
      var sYOffset = sLineY - cropBoxSize.h - (offset.y - currentMousePos.y);
      var wXOffset = wLineX - (offset.x - currentMousePos.x);
      var nCrossH = currentMousePos.y - nLineY - cropBoxSize.h;
      var nH = cropBoxSize.h + nLineY - currentMousePos.y;
      var eCrossW = eLineX - cropBoxSize.w - currentMousePos.x;
      var eW = cropBoxSize.w + currentMousePos.x - eLineX;
      var sCrossH = sLineY - cropBoxSize.h - currentMousePos.y;
      var sH = cropBoxSize.h + currentMousePos.y - sLineY;
      var wCrossW = currentMousePos.x - wLineX - cropBoxSize.w;
      var wW = cropBoxSize.w + wLineX - currentMousePos.x;

      switch (dir) {
        case 'nw':
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

        case 'ne':
          break;

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

        case 'sw':
          if (isCrossNL && isCrossEL) {
            console.log('a');
            setOffset({
              x: wXOffset,
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
            console.log('c');
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
      }
    };

    var stopSetSize = function stopSetSize() {
      document.removeEventListener("mousemove", setSizeCropBox);
      document.removeEventListener("mouseup", stopSetSize);
    };

    document.addEventListener("mousemove", setSizeCropBox);
    document.addEventListener("mouseup", stopSetSize);
    lastMousePosRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  var getDash = function getDash() {
    return ['w', 'h'].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('dash', dir)
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
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
        lineNumber: 180,
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
        lineNumber: 184,
        columnNumber: 5
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('cropArea'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('imgArea'),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('imgBox'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: cx('img'),
            src: imgPath,
            style: {
              width: "".concat(imgSize.w, "px"),
              height: "".concat(imgSize.h, "px")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 220,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 11
        }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('cross')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('moveBox'),
          onMouseDown: startPan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, _this), getLine(), getPoints()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 5
  }, _this);
};

_s(ImageCrop, "Hi5zB2Z0SIb00Tqr6QJJR+TTY6s=");

_c = ImageCrop;
/* harmony default export */ __webpack_exports__["default"] = (ImageCrop);

var _c;

$RefreshReg$(_c, "ImageCrop");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwiT1JJR0lOX1BPSU5UIiwiT2JqZWN0IiwiZnJlZXplIiwiT1JJR0lOX1NJWkUiLCJ3IiwiaCIsIkxJTkVfRElSIiwiUE9JTlRfRElSIiwiSW1hZ2VDcm9wIiwidXNlU3RhdGUiLCJpbWdQYXRoIiwic2V0SW1nUGF0aCIsImltZ1NpemUiLCJzZXRJbWdTaXplIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsImxhc3RNb3VzZVBvc1JlZiIsInVzZVJlZiIsInN0YXJ0UGFuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZUNyb3BCb3giLCJzdG9wUGFuIiwiY3VycmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldFNpemUiLCJkaXIiLCJlTGluZVgiLCJ3TGluZVgiLCJuTGluZVkiLCJzTGluZVkiLCJzZXRTaXplQ3JvcEJveCIsInNldEJveCIsImlzQ3Jvc3NOTCIsImlzQ3Jvc3NFTCIsImlzQ3Jvc3NTTCIsImlzQ3Jvc3NXTCIsIm5ZT2Zmc2V0IiwiZVhPZmZzZXQiLCJzWU9mZnNldCIsIndYT2Zmc2V0IiwibkNyb3NzSCIsIm5IIiwiZUNyb3NzVyIsImVXIiwic0Nyb3NzSCIsInNIIiwid0Nyb3NzVyIsIndXIiwiY29uc29sZSIsImxvZyIsInN0b3BTZXRTaXplIiwiZ2V0RGFzaCIsIm1hcCIsImdldExpbmUiLCJnZXRQb2ludHMi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RSxPQUFPLEVBdkJWLGVBMEJFO0FBQU0sbUJBQVMsRUFBRXpFLEVBQUUsQ0FBQyxPQUFEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGLGVBNkJFO0FBQU0sbUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbkI7QUFBZ0MscUJBQVcsRUFBRStCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLEVBZ0NHNEMsT0FBTyxFQWhDVixFQW1DR0MsU0FBUyxFQW5DWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0RELENBek5EOztHQUFNekQsUzs7S0FBQUEsUztBQTJOU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjFlZDE5M2VlYmU5MDc1OGI0MmVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IElNR19QQVRIID0gJy9uZXh0anMvaW1nL2NodW5TaWsvaW1nQ2h1blNpa0ZhY2UucG5nJztcclxuXHJcbnR5cGUgRGlyVHlwZSA9ICdudycgfCAnbicgfCAnbmUnIHwgJ2UnIHwgJ3NlJyB8ICdzJyB8ICdzdycgfCAndyc7XHJcblxyXG5pbnRlcmZhY2UgU2l6ZSB7XHJcbiAgdzogbnVtYmVyO1xyXG4gIGg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54ICsgcDIueCwgeTogcDEueSArIHAyLnkgfTtcclxufVxyXG5cclxuY29uc3QgT1JJR0lOX1BPSU5UID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmNvbnN0IE9SSUdJTl9TSVpFID0gT2JqZWN0LmZyZWV6ZSh7IHc6IDEwMCwgaDogMTAwIH0pO1xyXG5jb25zdCBMSU5FX0RJUiA9IFsnZScsICdzJywgJ3cnLCAnbiddO1xyXG5jb25zdCBQT0lOVF9ESVIgPSBbJ253JywgJ24nLCAnbmUnLCAnZScsICdzZScsICdzJywgJ3N3JywgJ3cnXTtcclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICgpID0+IHtcclxuICBjb25zdCBbaW1nUGF0aCwgc2V0SW1nUGF0aF0gPSB1c2VTdGF0ZTxzdHJpbmc+KElNR19QQVRIKTtcclxuICBjb25zdCBbaW1nU2l6ZSwgc2V0SW1nU2l6ZV0gPSB1c2VTdGF0ZTxTaXplPih7dzogNDEyLCBoOiA0MTJ9KTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vdmVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RvcFBhbiA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydFNldFNpemUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBkaXI6IERpclR5cGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgY29uc3QgZUxpbmVYID0gb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53O1xyXG4gICAgY29uc3Qgd0xpbmVYID0gb2Zmc2V0Lng7XHJcbiAgICBjb25zdCBuTGluZVkgPSBvZmZzZXQueTtcclxuICAgIGNvbnN0IHNMaW5lWSA9IG9mZnNldC55ICsgY3JvcEJveFNpemUuaDtcclxuXHJcbiAgICBjb25zdCBzZXRTaXplQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICAgIHNldEJveChjdXJyZW50TW91c2VQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEJveCA9IChjdXJyZW50TW91c2VQb3MpID0+IHtcclxuICAgICAgY29uc3QgaXNDcm9zc05MID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBpc0Nyb3NzRUwgPSAhKHdMaW5lWCArIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NTTCA9ICEobkxpbmVZICsgY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1dMID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54O1xyXG5cclxuICAgICAgY29uc3QgbllPZmZzZXQgPSBuTGluZVkgLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IGVYT2Zmc2V0ID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgc1lPZmZzZXQgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCB3WE9mZnNldCA9IHdMaW5lWCAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuXHJcbiAgICAgIGNvbnN0IG5Dcm9zc0ggPSBjdXJyZW50TW91c2VQb3MueSAtIG5MaW5lWSAtIGNyb3BCb3hTaXplLmg7XHJcbiAgICAgIGNvbnN0IG5IID0gY3JvcEJveFNpemUuaCArIG5MaW5lWSAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBlQ3Jvc3NXID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBlVyA9IGNyb3BCb3hTaXplLncgKyBjdXJyZW50TW91c2VQb3MueCAtIGVMaW5lWDtcclxuICAgICAgY29uc3Qgc0Nyb3NzSCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSBjdXJyZW50TW91c2VQb3MueTtcclxuICAgICAgY29uc3Qgc0ggPSBjcm9wQm94U2l6ZS5oICsgY3VycmVudE1vdXNlUG9zLnkgLSBzTGluZVk7XHJcbiAgICAgIGNvbnN0IHdDcm9zc1cgPSBjdXJyZW50TW91c2VQb3MueCAtIHdMaW5lWCAtIGNyb3BCb3hTaXplLnc7XHJcbiAgICAgIGNvbnN0IHdXID0gY3JvcEJveFNpemUudyArIHdMaW5lWCAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG5cclxuICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICBjYXNlICdudyc6XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgIGlmKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5Dcm9zc0ggfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduZSc6XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICBpZihpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2UnOlxyXG4gICAgICAgICAgaWYoaXNDcm9zc05MICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZihpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgaWYoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N3JzpcclxuICAgICAgICAgIGlmKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EnKTtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjJyk7XHJcblxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgaWYoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVyAsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRTaXplID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXNoID0gKCkgPT4gWyd3JywgJ2gnXS5tYXAoKGRpcikgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdkYXNoJywgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldExpbmUgPSAoKSA9PiBMSU5FX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdsaW5lJywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRQb2ludHMgPSAoKSA9PiBQT0lOVF9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcblxyXG4gICAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBkaW1tZWQg7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSAvPlxyXG5cclxuICAgICAgICB7LyogY3JvcCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtjcm9wQm94U2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd2aWV3Qm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgICAgIHNyYz17aW1nUGF0aH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIHsvKiDqsqnsnpAg7JiB7JetICovfVxyXG4gICAgICAgICAge2dldERhc2goKX1cclxuXHJcbiAgICAgICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9zcycpfSAvPlxyXG5cclxuICAgICAgICAgIHsvKiDsu6TshJwg7JiB7JetICovfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnbW92ZUJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRQYW59IC8+XHJcblxyXG4gICAgICAgICAgey8qIOuztOuNlCDsmIHsl60gKi99XHJcbiAgICAgICAgICB7Z2V0TGluZSgpfVxyXG5cclxuICAgICAgICAgIHsvKiDsoJAg7JiB7JetICovfVxyXG4gICAgICAgICAge2dldFBvaW50cygpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcDsiXSwic291cmNlUm9vdCI6IiJ9