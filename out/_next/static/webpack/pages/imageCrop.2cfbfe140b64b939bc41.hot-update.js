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
            // setOffset({ x: eXOffset, y: sYOffset });
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
              x: offset.x,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwiT1JJR0lOX1BPSU5UIiwiT2JqZWN0IiwiZnJlZXplIiwiT1JJR0lOX1NJWkUiLCJ3IiwiaCIsIkxJTkVfRElSIiwiUE9JTlRfRElSIiwiSW1hZ2VDcm9wIiwidXNlU3RhdGUiLCJpbWdQYXRoIiwic2V0SW1nUGF0aCIsImltZ1NpemUiLCJzZXRJbWdTaXplIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsImxhc3RNb3VzZVBvc1JlZiIsInVzZVJlZiIsInN0YXJ0UGFuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZUNyb3BCb3giLCJzdG9wUGFuIiwiY3VycmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldFNpemUiLCJkaXIiLCJlTGluZVgiLCJ3TGluZVgiLCJuTGluZVkiLCJzTGluZVkiLCJzZXRTaXplQ3JvcEJveCIsInNldEJveCIsImlzQ3Jvc3NOTCIsImlzQ3Jvc3NFTCIsImlzQ3Jvc3NTTCIsImlzQ3Jvc3NXTCIsIm5ZT2Zmc2V0IiwiZVhPZmZzZXQiLCJzWU9mZnNldCIsIndYT2Zmc2V0IiwibkNyb3NzSCIsIm5IIiwiZUNyb3NzVyIsImVXIiwic0Nyb3NzSCIsInNIIiwid0Nyb3NzVyIsIndXIiwiY29uc29sZSIsImxvZyIsInN0b3BTZXRTaXplIiwiZ2V0RGFzaCIsIm1hcCIsImdldExpbmUiLCJnZXRQb2ludHMi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QTtBQUFBO0FBQUE7QUFBQSxpQkExQkYsZUE2QkU7QUFBTSxtQkFBUyxFQUFFQSxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFnQyxxQkFBVyxFQUFFK0I7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkYsRUFnQ0c0QyxPQUFPLEVBaENWLEVBbUNHQyxTQUFTLEVBbkNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErREQsQ0F6TkQ7O0dBQU16RCxTOztLQUFBQSxTO0FBMk5TQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuMmNmYmZlMTQwYjY0YjkzOWJjNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgSU1HX1BBVEggPSAnL25leHRqcy9pbWcvY2h1blNpay9pbWdDaHVuU2lrRmFjZS5wbmcnO1xyXG5cclxudHlwZSBEaXJUeXBlID0gJ253JyB8ICduJyB8ICduZScgfCAnZScgfCAnc2UnIHwgJ3MnIHwgJ3N3JyB8ICd3JztcclxuXHJcbmludGVyZmFjZSBTaXplIHtcclxuICB3OiBudW1iZXI7XHJcbiAgaDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggKyBwMi54LCB5OiBwMS55ICsgcDIueSB9O1xyXG59XHJcblxyXG5jb25zdCBPUklHSU5fUE9JTlQgPSBPYmplY3QuZnJlZXplKHsgeDogMCwgeTogMCB9KTtcclxuY29uc3QgT1JJR0lOX1NJWkUgPSBPYmplY3QuZnJlZXplKHsgdzogMTAwLCBoOiAxMDAgfSk7XHJcbmNvbnN0IExJTkVfRElSID0gWydlJywgJ3MnLCAndycsICduJ107XHJcbmNvbnN0IFBPSU5UX0RJUiA9IFsnbncnLCAnbicsICduZScsICdlJywgJ3NlJywgJ3MnLCAnc3cnLCAndyddO1xyXG5cclxuY29uc3QgSW1hZ2VDcm9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbWdQYXRoLCBzZXRJbWdQYXRoXSA9IHVzZVN0YXRlPHN0cmluZz4oSU1HX1BBVEgpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KHt3OiA0MTIsIGg6IDQxMn0pO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgbGFzdE1vdXNlUG9zID0gbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG4gICAgc2V0T2Zmc2V0KChwcmV2T2Zmc2V0KSA9PiBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9wUGFuID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0U2l6ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGRpcjogRGlyVHlwZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueCArIGNyb3BCb3hTaXplLnc7XHJcbiAgICBjb25zdCB3TGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IG5MaW5lWSA9IG9mZnNldC55O1xyXG4gICAgY29uc3Qgc0xpbmVZID0gb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICAgIGNvbnN0IHNldFNpemVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgICAgc2V0Qm94KGN1cnJlbnRNb3VzZVBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ID0gKGN1cnJlbnRNb3VzZVBvcykgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nyb3NzTkwgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NFTCA9ICEod0xpbmVYICsgY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1NMID0gIShuTGluZVkgKyBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzV0wgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLng7XHJcblxyXG4gICAgICBjb25zdCBuWU9mZnNldCA9IG5MaW5lWSAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgZVhPZmZzZXQgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBzWU9mZnNldCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IHdYT2Zmc2V0ID0gd0xpbmVYIC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG5cclxuICAgICAgY29uc3QgbkNyb3NzSCA9IGN1cnJlbnRNb3VzZVBvcy55IC0gbkxpbmVZIC0gY3JvcEJveFNpemUuaDtcclxuICAgICAgY29uc3QgbkggPSBjcm9wQm94U2l6ZS5oICsgbkxpbmVZIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcbiAgICAgIGNvbnN0IGVDcm9zc1cgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IGVXID0gY3JvcEJveFNpemUudyArIGN1cnJlbnRNb3VzZVBvcy54IC0gZUxpbmVYO1xyXG4gICAgICBjb25zdCBzQ3Jvc3NIID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBzSCA9IGNyb3BCb3hTaXplLmggKyBjdXJyZW50TW91c2VQb3MueSAtIHNMaW5lWTtcclxuICAgICAgY29uc3Qgd0Nyb3NzVyA9IGN1cnJlbnRNb3VzZVBvcy54IC0gd0xpbmVYIC0gY3JvcEJveFNpemUudztcclxuICAgICAgY29uc3Qgd1cgPSBjcm9wQm94U2l6ZS53ICsgd0xpbmVYIC0gY3VycmVudE1vdXNlUG9zLng7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgIGNhc2UgJ253JzpcclxuICAgICAgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgaWYoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkNyb3NzSCB9KTsgICAgICAgICAgICBcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25lJzpcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgIGlmKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZSc6XHJcbiAgICAgICAgICBpZihpc0Nyb3NzTkwgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIC8vIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICBpZihpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3cnOlxyXG4gICAgICAgICAgaWYoaXNDcm9zc05MICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYScpO1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZihpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZihpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2MnKTtcclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICBpZihpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXICwgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcFNldFNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERhc2ggPSAoKSA9PiBbJ3cnLCAnaCddLm1hcCgoZGlyKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2Rhc2gnLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0TGluZSA9ICgpID0+IExJTkVfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2xpbmUnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldFBvaW50cyA9ICgpID0+IFBPSU5UX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdwb2ludCcsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0U2l6ZShlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfT5cclxuXHJcbiAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e2ltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIGRpbW1lZCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZGltbWVkQm94Jyl9IC8+XHJcblxyXG4gICAgICAgIHsvKiBjcm9wIOyYgeyXrSDrsJXsiqQgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgnY3JvcEJveCcpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGAke2Nyb3BCb3hTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke2Nyb3BCb3hTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoJHtvZmZzZXQueX1weClgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICB7Lyog7J2066+47KeAIOyYgeyXrSAqL31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3ZpZXdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCd2aWV3SW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoLSR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgey8qIOqyqeyekCDsmIHsl60gKi99XHJcbiAgICAgICAgICB7Z2V0RGFzaCgpfVxyXG5cclxuICAgICAgICAgIHsvKiDspJHslZkg7Iut7J6Q6rCAIOyYgeyXrSAqL31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3NzJyl9IC8+XHJcblxyXG4gICAgICAgICAgey8qIOy7pOyEnCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdtb3ZlQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFBhbn0gLz5cclxuXHJcbiAgICAgICAgICB7Lyog67O0642UIOyYgeyXrSAqL31cclxuICAgICAgICAgIHtnZXRMaW5lKCl9XHJcblxyXG4gICAgICAgICAgey8qIOygkCDsmIHsl60gKi99XHJcbiAgICAgICAgICB7Z2V0UG9pbnRzKCl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wOyJdLCJzb3VyY2VSb290IjoiIn0=