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
            setCropBoxSize({
              w: wW,
              h: sH
            });
          } else if (isCrossEL) {
            setOffset({
              x: wXOffset,
              y: offset.y
            });
            setCropBoxSize({
              w: wCrossW,
              h: sH
            });
          } else if (isCrossNL) {
            setOffset({
              x: offset.x,
              y: sYOffset
            });
            setCropBoxSize({
              w: wW,
              h: sCrossH
            });
          } else {
            setOffset({
              x: wXOffset,
              y: sYOffset
            });
            setCropBoxSize({
              w: wCrossW,
              h: sCrossH
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
        lineNumber: 175,
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
        lineNumber: 179,
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
        lineNumber: 183,
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
            lineNumber: 193,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
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
            lineNumber: 219,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('cross')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('moveBox'),
          onMouseDown: startPan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, _this), getLine(), getPoints()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 187,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwiT1JJR0lOX1BPSU5UIiwiT2JqZWN0IiwiZnJlZXplIiwiT1JJR0lOX1NJWkUiLCJ3IiwiaCIsIkxJTkVfRElSIiwiUE9JTlRfRElSIiwiSW1hZ2VDcm9wIiwidXNlU3RhdGUiLCJpbWdQYXRoIiwic2V0SW1nUGF0aCIsImltZ1NpemUiLCJzZXRJbWdTaXplIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsImxhc3RNb3VzZVBvc1JlZiIsInVzZVJlZiIsInN0YXJ0UGFuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZUNyb3BCb3giLCJzdG9wUGFuIiwiY3VycmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldFNpemUiLCJkaXIiLCJlTGluZVgiLCJ3TGluZVgiLCJuTGluZVkiLCJzTGluZVkiLCJzZXRTaXplQ3JvcEJveCIsInNldEJveCIsImlzQ3Jvc3NOTCIsImlzQ3Jvc3NFTCIsImlzQ3Jvc3NTTCIsImlzQ3Jvc3NXTCIsIm5ZT2Zmc2V0IiwiZVhPZmZzZXQiLCJzWU9mZnNldCIsIndYT2Zmc2V0IiwibkNyb3NzSCIsIm5IIiwiZUNyb3NzVyIsImVXIiwic0Nyb3NzSCIsInNIIiwid0Nyb3NzVyIsIndXIiwic3RvcFNldFNpemUiLCJnZXREYXNoIiwibWFwIiwiZ2V0TGluZSIsImdldFBvaW50cyIsIndpZHRoIiwiaGVpZ2h0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Q0FBQ2hCLENBQW5EO0FBSEo7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixFQXVCRzhELE9BQU8sRUF2QlYsZUEwQkU7QUFBTSxtQkFBUyxFQUFFdkUsRUFBRSxDQUFDLE9BQUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkYsZUE2QkU7QUFBTSxtQkFBUyxFQUFFQSxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFnQyxxQkFBVyxFQUFFK0I7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkYsRUFnQ0cwQyxPQUFPLEVBaENWLEVBbUNHQyxTQUFTLEVBbkNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErREQsQ0F4TkQ7O0dBQU12RCxTOztLQUFBQSxTO0FBME5TQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuOWFkYTQ4ZjYyMDhkMTViNThkNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgSU1HX1BBVEggPSAnL25leHRqcy9pbWcvY2h1blNpay9pbWdDaHVuU2lrRmFjZS5wbmcnO1xyXG5cclxudHlwZSBEaXJUeXBlID0gJ253JyB8ICduJyB8ICduZScgfCAnZScgfCAnc2UnIHwgJ3MnIHwgJ3N3JyB8ICd3JztcclxuXHJcbmludGVyZmFjZSBTaXplIHtcclxuICB3OiBudW1iZXI7XHJcbiAgaDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggKyBwMi54LCB5OiBwMS55ICsgcDIueSB9O1xyXG59XHJcblxyXG5jb25zdCBPUklHSU5fUE9JTlQgPSBPYmplY3QuZnJlZXplKHsgeDogMCwgeTogMCB9KTtcclxuY29uc3QgT1JJR0lOX1NJWkUgPSBPYmplY3QuZnJlZXplKHsgdzogMTAwLCBoOiAxMDAgfSk7XHJcbmNvbnN0IExJTkVfRElSID0gWydlJywgJ3MnLCAndycsICduJ107XHJcbmNvbnN0IFBPSU5UX0RJUiA9IFsnbncnLCAnbicsICduZScsICdlJywgJ3NlJywgJ3MnLCAnc3cnLCAndyddO1xyXG5cclxuY29uc3QgSW1hZ2VDcm9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbWdQYXRoLCBzZXRJbWdQYXRoXSA9IHVzZVN0YXRlPHN0cmluZz4oSU1HX1BBVEgpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KHt3OiA0MTIsIGg6IDQxMn0pO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgbGFzdE1vdXNlUG9zID0gbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG4gICAgc2V0T2Zmc2V0KChwcmV2T2Zmc2V0KSA9PiBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9wUGFuID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0U2l6ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGRpcjogRGlyVHlwZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueCArIGNyb3BCb3hTaXplLnc7XHJcbiAgICBjb25zdCB3TGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IG5MaW5lWSA9IG9mZnNldC55O1xyXG4gICAgY29uc3Qgc0xpbmVZID0gb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICAgIGNvbnN0IHNldFNpemVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgICAgc2V0Qm94KGN1cnJlbnRNb3VzZVBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ID0gKGN1cnJlbnRNb3VzZVBvcykgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nyb3NzTkwgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NFTCA9ICEod0xpbmVYICsgY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1NMID0gIShuTGluZVkgKyBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzV0wgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLng7XHJcblxyXG4gICAgICBjb25zdCBuWU9mZnNldCA9IG5MaW5lWSAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgZVhPZmZzZXQgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBzWU9mZnNldCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IHdYT2Zmc2V0ID0gd0xpbmVYIC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG5cclxuICAgICAgY29uc3QgbkNyb3NzSCA9IGN1cnJlbnRNb3VzZVBvcy55IC0gbkxpbmVZIC0gY3JvcEJveFNpemUuaDtcclxuICAgICAgY29uc3QgbkggPSBjcm9wQm94U2l6ZS5oICsgbkxpbmVZIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcbiAgICAgIGNvbnN0IGVDcm9zc1cgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IGVXID0gY3JvcEJveFNpemUudyArIGN1cnJlbnRNb3VzZVBvcy54IC0gZUxpbmVYO1xyXG4gICAgICBjb25zdCBzQ3Jvc3NIID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBzSCA9IGNyb3BCb3hTaXplLmggKyBjdXJyZW50TW91c2VQb3MueSAtIHNMaW5lWTtcclxuICAgICAgY29uc3Qgd0Nyb3NzVyA9IGN1cnJlbnRNb3VzZVBvcy54IC0gd0xpbmVYIC0gY3JvcEJveFNpemUudztcclxuICAgICAgY29uc3Qgd1cgPSBjcm9wQm94U2l6ZS53ICsgd0xpbmVYIC0gY3VycmVudE1vdXNlUG9zLng7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgIGNhc2UgJ253JzpcclxuICAgICAgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgaWYoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkNyb3NzSCB9KTsgICAgICAgICAgICBcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25lJzpcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgIGlmKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZSc6XHJcbiAgICAgICAgICBpZihpc0Nyb3NzTkwgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICBpZihpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3cnOlxyXG4gICAgICAgICAgaWYoaXNDcm9zc05MICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzSCB9KTsgICAgICAgICAgICBcclxuICAgICAgICAgIH0gZWxzZSBpZihpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgaWYoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVyAsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRTaXplID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXNoID0gKCkgPT4gWyd3JywgJ2gnXS5tYXAoKGRpcikgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdkYXNoJywgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldExpbmUgPSAoKSA9PiBMSU5FX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdsaW5lJywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRQb2ludHMgPSAoKSA9PiBQT0lOVF9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcblxyXG4gICAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBkaW1tZWQg7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSAvPlxyXG5cclxuICAgICAgICB7LyogY3JvcCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtjcm9wQm94U2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd2aWV3Qm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgICAgIHNyYz17aW1nUGF0aH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIHsvKiDqsqnsnpAg7JiB7JetICovfVxyXG4gICAgICAgICAge2dldERhc2goKX1cclxuXHJcbiAgICAgICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9zcycpfSAvPlxyXG5cclxuICAgICAgICAgIHsvKiDsu6TshJwg7JiB7JetICovfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnbW92ZUJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRQYW59IC8+XHJcblxyXG4gICAgICAgICAgey8qIOuztOuNlCDsmIHsl60gKi99XHJcbiAgICAgICAgICB7Z2V0TGluZSgpfVxyXG5cclxuICAgICAgICAgIHsvKiDsoJAg7JiB7JetICovfVxyXG4gICAgICAgICAge2dldFBvaW50cygpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcDsiXSwic291cmNlUm9vdCI6IiJ9