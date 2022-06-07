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
var LINE_DIR = ['e', 'w', 's', 'n'];
var POINT_DIR = ['e', 'w', 's', 'n', 'se', 'sw', 'ne', 'nw'];

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
    var sLineY = offset.y + cropBoxSize.h;
    var nLineY = offset.y;

    var setSizeCropBox = function setSizeCropBox(e) {
      var currentMousePos = {
        x: e.clientX,
        y: e.clientY
      };
      lastMousePosRef.current = currentMousePos;
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
        lineNumber: 198,
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
        lineNumber: 202,
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
        lineNumber: 206,
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
            lineNumber: 216,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
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
            lineNumber: 242,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('cross')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('moveBox'),
          onMouseDown: startPan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 11
        }, _this), getLine(), getPoints()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 210,
    columnNumber: 5
  }, _this);
};

_s(ImageCrop, "RMKeEY1P+NzSHlt73++1Bf07Gk4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwiT1JJR0lOX1BPSU5UIiwiT2JqZWN0IiwiZnJlZXplIiwiT1JJR0lOX1NJWkUiLCJ3IiwiaCIsIkxJTkVfRElSIiwiUE9JTlRfRElSIiwiSW1hZ2VDcm9wIiwidXNlU3RhdGUiLCJpbWdQYXRoIiwic2V0SW1nUGF0aCIsImltZ1NpemUiLCJzZXRJbWdTaXplIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsImxhc3RNb3VzZVBvc1JlZiIsInVzZVJlZiIsInN0YXJ0UGFuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZUNyb3BCb3giLCJzdG9wUGFuIiwiY3VycmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldFNpemUiLCJkaXIiLCJlTGluZVgiLCJ3TGluZVgiLCJzTGluZVkiLCJuTGluZVkiLCJzZXRTaXplQ3JvcEJveCIsInNldEJveCIsImlzQ3Jvc3NFTCIsImlzQ3Jvc3NXTCIsImlzQ3Jvc3NTTCIsImlzQ3Jvc3NOTCIsImVYT2Zmc2V0Iiwid1hPZmZzZXQiLCJzWU9mZnNldCIsIm5ZT2Zmc2V0IiwiZUNyb3NzVyIsIndDcm9zc1ciLCJzQ3Jvc3NIIiwibkNyb3NzSCIsImVXIiwid1ciLCJzSCIsIm5IIiwic3RvcFNldFNpemUiLCJnZXREYXNoIiwibWFwIiwiZ2V0TGluZSIsImdldFBvaW50cyIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDtBQUVBLElBQU1DLFFBQVEsR0FBRyx3Q0FBakI7QUFZQzs7QUFFRCxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFQyxLQUFDLEVBQUVGLEVBQUUsQ0FBQ0UsQ0FBSCxHQUFPRCxFQUFFLENBQUNDLENBQWY7QUFBa0JDLEtBQUMsRUFBRUgsRUFBRSxDQUFDRyxDQUFILEdBQU9GLEVBQUUsQ0FBQ0U7QUFBL0IsR0FBUDtBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJKLEVBQW5CLEVBQThCQyxFQUE5QixFQUF5QztBQUN2QyxTQUFPO0FBQUVDLEtBQUMsRUFBRUYsRUFBRSxDQUFDRSxDQUFILEdBQU9ELEVBQUUsQ0FBQ0MsQ0FBZjtBQUFrQkMsS0FBQyxFQUFFSCxFQUFFLENBQUNHLENBQUgsR0FBT0YsRUFBRSxDQUFDRTtBQUEvQixHQUFQO0FBQ0Q7O0FBRUQsSUFBTUUsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFTCxHQUFDLEVBQUUsQ0FBTDtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFkLENBQXJCO0FBQ0EsSUFBTUssV0FBVyxHQUFHRixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFRSxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQUFkLENBQXBCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDLEVBQXVDLElBQXZDLENBQWxCOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBU2hCLFFBQVQsQ0FEaEI7QUFBQSxNQUNmaUIsT0FEZTtBQUFBLE1BQ05DLFVBRE07O0FBQUEsbUJBRVFGLHNEQUFRLENBQU87QUFBRUwsS0FBQyxFQUFFLEdBQUw7QUFBVUMsS0FBQyxFQUFFO0FBQWIsR0FBUCxDQUZoQjtBQUFBLE1BRWZPLE9BRmU7QUFBQSxNQUVOQyxVQUZNOztBQUFBLG1CQUdNSixzREFBUSxDQUFRVCxZQUFSLENBSGQ7QUFBQSxNQUdmYyxNQUhlO0FBQUEsTUFHUEMsU0FITzs7QUFBQSxtQkFJZ0JOLHNEQUFRLENBQU9OLFdBQVAsQ0FKeEI7QUFBQSxNQUlmYSxXQUplO0FBQUEsTUFJRkMsY0FKRTs7QUFLdEIsTUFBTUMsZUFBZSxHQUFHQyxvREFBTSxDQUFRbkIsWUFBUixDQUE5Qjs7QUFFQSxNQUFNb0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFzRDtBQUNyRUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNDLFdBQXZDO0FBQ0FGLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNFLE9BQXJDO0FBQ0FSLG1CQUFlLENBQUNTLE9BQWhCLEdBQTBCO0FBQUU5QixPQUFDLEVBQUV3QixDQUFDLENBQUNPLE9BQVA7QUFBZ0I5QixPQUFDLEVBQUV1QixDQUFDLENBQUNRO0FBQXJCLEtBQTFCO0FBQ0QsR0FMRDs7QUFPQSxNQUFNSixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDSixDQUFELEVBQW1CO0FBQ3JDLFFBQU1TLFlBQVksR0FBR1osZUFBZSxDQUFDUyxPQUFyQztBQUNBLFFBQU1JLGVBQWUsR0FBRztBQUFFbEMsT0FBQyxFQUFFd0IsQ0FBQyxDQUFDTyxPQUFQO0FBQWdCOUIsT0FBQyxFQUFFdUIsQ0FBQyxDQUFDUTtBQUFyQixLQUF4QjtBQUNBWCxtQkFBZSxDQUFDUyxPQUFoQixHQUEwQkksZUFBMUI7QUFDQSxRQUFNQyxTQUFTLEdBQUd0QyxVQUFVLENBQUNxQyxlQUFELEVBQWtCRCxZQUFsQixDQUE1QjtBQUNBZixhQUFTLENBQUMsVUFBQ2tCLFVBQUQ7QUFBQSxhQUFnQmxDLFNBQVMsQ0FBQ2tDLFVBQUQsRUFBYUQsU0FBYixDQUF6QjtBQUFBLEtBQUQsQ0FBVDtBQUNELEdBTkQ7O0FBUUEsTUFBTU4sT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkgsWUFBUSxDQUFDVyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ1QsV0FBMUM7QUFDQUYsWUFBUSxDQUFDVyxtQkFBVCxDQUE2QixTQUE3QixFQUF3Q1IsT0FBeEM7QUFDRCxHQUhEOztBQUtBLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNkLENBQUQsRUFBbURlLEdBQW5ELEVBQW9FO0FBQ3ZGZixLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNZSxNQUFNLEdBQUd2QixNQUFNLENBQUNqQixDQUFQLEdBQVdtQixXQUFXLENBQUNaLENBQXRDO0FBQ0EsUUFBTWtDLE1BQU0sR0FBR3hCLE1BQU0sQ0FBQ2pCLENBQXRCO0FBQ0EsUUFBTTBDLE1BQU0sR0FBR3pCLE1BQU0sQ0FBQ2hCLENBQVAsR0FBV2tCLFdBQVcsQ0FBQ1gsQ0FBdEM7QUFDQSxRQUFNbUMsTUFBTSxHQUFHMUIsTUFBTSxDQUFDaEIsQ0FBdEI7O0FBRUEsUUFBTTJDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ3BCLENBQUQsRUFBbUI7QUFDeEMsVUFBTVUsZUFBZSxHQUFHO0FBQUVsQyxTQUFDLEVBQUV3QixDQUFDLENBQUNPLE9BQVA7QUFBZ0I5QixTQUFDLEVBQUV1QixDQUFDLENBQUNRO0FBQXJCLE9BQXhCO0FBQ0FYLHFCQUFlLENBQUNTLE9BQWhCLEdBQTBCSSxlQUExQjtBQUNBVyxZQUFNLENBQUNYLGVBQUQsQ0FBTjtBQUNELEtBSkQ7O0FBTUEsUUFBTVcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ1gsZUFBRCxFQUFxQjtBQUNsQyxVQUFNWSxTQUFTLEdBQUcsRUFBRUwsTUFBTSxHQUFHdEIsV0FBVyxDQUFDWixDQUFyQixHQUF5QjJCLGVBQWUsQ0FBQ2xDLENBQTNDLENBQWxCO0FBQ0EsVUFBTStDLFNBQVMsR0FBR1AsTUFBTSxHQUFHckIsV0FBVyxDQUFDWixDQUFyQixHQUF5QjJCLGVBQWUsQ0FBQ2xDLENBQTNEO0FBQ0EsVUFBTWdELFNBQVMsR0FBRyxFQUFFTCxNQUFNLEdBQUd4QixXQUFXLENBQUNYLENBQXJCLEdBQXlCMEIsZUFBZSxDQUFDakMsQ0FBM0MsQ0FBbEI7QUFDQSxVQUFNZ0QsU0FBUyxHQUFHUCxNQUFNLEdBQUd2QixXQUFXLENBQUNYLENBQXJCLEdBQXlCMEIsZUFBZSxDQUFDakMsQ0FBM0Q7QUFFQSxVQUFNaUQsUUFBUSxHQUFHVixNQUFNLEdBQUdyQixXQUFXLENBQUNaLENBQXJCLElBQTBCVSxNQUFNLENBQUNqQixDQUFQLEdBQVdrQyxlQUFlLENBQUNsQyxDQUFyRCxDQUFqQjtBQUNBLFVBQU1tRCxRQUFRLEdBQUdWLE1BQU0sSUFBSXhCLE1BQU0sQ0FBQ2pCLENBQVAsR0FBV2tDLGVBQWUsQ0FBQ2xDLENBQS9CLENBQXZCO0FBQ0EsVUFBTW9ELFFBQVEsR0FBR1YsTUFBTSxHQUFHdkIsV0FBVyxDQUFDWCxDQUFyQixJQUEwQlMsTUFBTSxDQUFDaEIsQ0FBUCxHQUFXaUMsZUFBZSxDQUFDakMsQ0FBckQsQ0FBakI7QUFDQSxVQUFNb0QsUUFBUSxHQUFHVixNQUFNLElBQUkxQixNQUFNLENBQUNoQixDQUFQLEdBQVdpQyxlQUFlLENBQUNqQyxDQUEvQixDQUF2QjtBQUVBLFVBQU1xRCxPQUFPLEdBQUdkLE1BQU0sR0FBR3JCLFdBQVcsQ0FBQ1osQ0FBckIsR0FBeUIyQixlQUFlLENBQUNsQyxDQUF6RDtBQUNBLFVBQU11RCxPQUFPLEdBQUdyQixlQUFlLENBQUNsQyxDQUFoQixHQUFvQnlDLE1BQXBCLEdBQTZCdEIsV0FBVyxDQUFDWixDQUF6RDtBQUNBLFVBQU1pRCxPQUFPLEdBQUdkLE1BQU0sR0FBR3ZCLFdBQVcsQ0FBQ1gsQ0FBckIsR0FBeUIwQixlQUFlLENBQUNqQyxDQUF6RDtBQUNBLFVBQU13RCxPQUFPLEdBQUd2QixlQUFlLENBQUNqQyxDQUFoQixHQUFvQjBDLE1BQXBCLEdBQTZCeEIsV0FBVyxDQUFDWCxDQUF6RDtBQUVBLFVBQU1rRCxFQUFFLEdBQUd2QyxXQUFXLENBQUNaLENBQVosR0FBZ0IyQixlQUFlLENBQUNsQyxDQUFoQyxHQUFvQ3dDLE1BQS9DO0FBQ0EsVUFBTW1CLEVBQUUsR0FBR3hDLFdBQVcsQ0FBQ1osQ0FBWixHQUFnQmtDLE1BQWhCLEdBQXlCUCxlQUFlLENBQUNsQyxDQUFwRDtBQUNBLFVBQU00RCxFQUFFLEdBQUd6QyxXQUFXLENBQUNYLENBQVosR0FBZ0IwQixlQUFlLENBQUNqQyxDQUFoQyxHQUFvQ3lDLE1BQS9DO0FBQ0EsVUFBTW1CLEVBQUUsR0FBRzFDLFdBQVcsQ0FBQ1gsQ0FBWixHQUFnQm1DLE1BQWhCLEdBQXlCVCxlQUFlLENBQUNqQyxDQUFwRDs7QUFFQSxjQUFRc0MsR0FBUjtBQUNFLGFBQUssR0FBTDtBQUNFLGNBQUlRLFNBQUosRUFBZTtBQUNiN0IscUJBQVMsQ0FBQztBQUFFbEIsZUFBQyxFQUFFa0QsUUFBTDtBQUFlakQsZUFBQyxFQUFFZ0IsTUFBTSxDQUFDaEI7QUFBekIsYUFBRCxDQUFUO0FBQ0FtQiwwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRStDLE9BQUw7QUFBYzlDLGVBQUMsRUFBRVcsV0FBVyxDQUFDWDtBQUE3QixhQUFELENBQWQ7QUFDRCxXQUhELE1BR087QUFDTFksMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVtRCxFQUFMO0FBQVNsRCxlQUFDLEVBQUVXLFdBQVcsQ0FBQ1g7QUFBeEIsYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxHQUFMO0FBQ0UsY0FBSXNDLFNBQUosRUFBZTtBQUNiMUIsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVnRCxPQUFMO0FBQWMvQyxlQUFDLEVBQUVXLFdBQVcsQ0FBQ1g7QUFBN0IsYUFBRCxDQUFkO0FBQ0QsV0FGRCxNQUVPO0FBQ0xVLHFCQUFTLENBQUM7QUFBRWxCLGVBQUMsRUFBRW1ELFFBQUw7QUFBZWxELGVBQUMsRUFBRWdCLE1BQU0sQ0FBQ2hCO0FBQXpCLGFBQUQsQ0FBVDtBQUNBbUIsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVvRCxFQUFMO0FBQVNuRCxlQUFDLEVBQUVXLFdBQVcsQ0FBQ1g7QUFBeEIsYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxHQUFMO0FBQ0UsY0FBSXlDLFNBQUosRUFBZTtBQUNiL0IscUJBQVMsQ0FBQztBQUFFbEIsZUFBQyxFQUFFaUIsTUFBTSxDQUFDakIsQ0FBWjtBQUFlQyxlQUFDLEVBQUVtRDtBQUFsQixhQUFELENBQVQ7QUFDQWhDLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFWSxXQUFXLENBQUNaLENBQWpCO0FBQW9CQyxlQUFDLEVBQUVnRDtBQUF2QixhQUFELENBQWQ7QUFDRCxXQUhELE1BR087QUFDTHBDLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFWSxXQUFXLENBQUNaLENBQWpCO0FBQW9CQyxlQUFDLEVBQUVvRDtBQUF2QixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLEdBQUw7QUFDRSxjQUFJWixTQUFKLEVBQWU7QUFDYjVCLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFWSxXQUFXLENBQUNaLENBQWpCO0FBQW9CQyxlQUFDLEVBQUVpRDtBQUF2QixhQUFELENBQWQ7QUFDRCxXQUZELE1BRU87QUFDTHZDLHFCQUFTLENBQUM7QUFBRWxCLGVBQUMsRUFBRWlCLE1BQU0sQ0FBQ2pCLENBQVo7QUFBZUMsZUFBQyxFQUFFb0Q7QUFBbEIsYUFBRCxDQUFUO0FBQ0FqQywwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRVksV0FBVyxDQUFDWixDQUFqQjtBQUFvQkMsZUFBQyxFQUFFcUQ7QUFBdkIsYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxJQUFMO0FBQ0UsY0FBSVosU0FBUyxJQUFJRixTQUFqQixFQUE0QjtBQUMxQjdCLHFCQUFTLENBQUM7QUFBRWxCLGVBQUMsRUFBRWtELFFBQUw7QUFBZWpELGVBQUMsRUFBRW1EO0FBQWxCLGFBQUQsQ0FBVDtBQUNBaEMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUUrQyxPQUFMO0FBQWM5QyxlQUFDLEVBQUVnRDtBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhELE1BR08sSUFBSVQsU0FBSixFQUFlO0FBQ3BCN0IscUJBQVMsQ0FBQztBQUFFbEIsZUFBQyxFQUFFa0QsUUFBTDtBQUFlakQsZUFBQyxFQUFFZ0IsTUFBTSxDQUFDaEI7QUFBekIsYUFBRCxDQUFUO0FBQ0FtQiwwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRStDLE9BQUw7QUFBYzlDLGVBQUMsRUFBRW9EO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBSE0sTUFHQSxJQUFJWCxTQUFKLEVBQWU7QUFDcEIvQixxQkFBUyxDQUFDO0FBQUVsQixlQUFDLEVBQUVpQixNQUFNLENBQUNqQixDQUFaO0FBQWVDLGVBQUMsRUFBRW1EO0FBQWxCLGFBQUQsQ0FBVDtBQUNBaEMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVtRCxFQUFMO0FBQVNsRCxlQUFDLEVBQUVnRDtBQUFaLGFBQUQsQ0FBZDtBQUNELFdBSE0sTUFHQTtBQUNMcEMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVtRCxFQUFMO0FBQVNsRCxlQUFDLEVBQUVvRDtBQUFaLGFBQUQsQ0FBZDtBQUNEOztBQUNEOztBQUNGLGFBQUssSUFBTDtBQUNFLGNBQUlYLFNBQVMsSUFBSUgsU0FBakIsRUFBNEI7QUFDMUI1QixxQkFBUyxDQUFDO0FBQUVsQixlQUFDLEVBQUVpQixNQUFNLENBQUNqQixDQUFQLEdBQVdtQixXQUFXLENBQUNaLENBQTVCO0FBQStCTixlQUFDLEVBQUVvRDtBQUFsQyxhQUFELENBQVQ7QUFDQWpDLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFZ0QsT0FBTDtBQUFjL0MsZUFBQyxFQUFFZ0Q7QUFBakIsYUFBRCxDQUFkO0FBQ0QsV0FIRCxNQUdPLElBQUlWLFNBQUosRUFBZTtBQUNwQjFCLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFZ0QsT0FBTDtBQUFjL0MsZUFBQyxFQUFFb0Q7QUFBakIsYUFBRCxDQUFkO0FBQ0QsV0FGTSxNQUVBLElBQUlYLFNBQUosRUFBZTtBQUNwQi9CLHFCQUFTLENBQUM7QUFBRWxCLGVBQUMsRUFBRW1ELFFBQUw7QUFBZWxELGVBQUMsRUFBRW9EO0FBQWxCLGFBQUQsQ0FBVDtBQUNBakMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVvRCxFQUFMO0FBQVNuRCxlQUFDLEVBQUVnRDtBQUFaLGFBQUQsQ0FBZDtBQUNELFdBSE0sTUFHQTtBQUNMdEMscUJBQVMsQ0FBQztBQUFFbEIsZUFBQyxFQUFFbUQsUUFBTDtBQUFlbEQsZUFBQyxFQUFFZ0IsTUFBTSxDQUFDaEI7QUFBekIsYUFBRCxDQUFUO0FBQ0FtQiwwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRW9ELEVBQUw7QUFBU25ELGVBQUMsRUFBRW9EO0FBQVosYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxJQUFMO0FBQ0UsY0FBSVosU0FBUyxJQUFJRCxTQUFqQixFQUE0QjtBQUMxQjdCLHFCQUFTLENBQUM7QUFBRWxCLGVBQUMsRUFBRWtELFFBQUw7QUFBZWpELGVBQUMsRUFBRWdCLE1BQU0sQ0FBQ2hCLENBQVAsR0FBV2tCLFdBQVcsQ0FBQ1g7QUFBekMsYUFBRCxDQUFUO0FBQ0FZLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFK0MsT0FBTDtBQUFjOUMsZUFBQyxFQUFFaUQ7QUFBakIsYUFBRCxDQUFkO0FBQ0QsV0FIRCxNQUdPLElBQUlWLFNBQUosRUFBZTtBQUNwQjdCLHFCQUFTLENBQUM7QUFBRWxCLGVBQUMsRUFBRWtELFFBQUw7QUFBZWpELGVBQUMsRUFBRW9EO0FBQWxCLGFBQUQsQ0FBVDtBQUNBakMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUUrQyxPQUFMO0FBQWM5QyxlQUFDLEVBQUVxRDtBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhNLE1BR0EsSUFBSWIsU0FBSixFQUFlO0FBQ3BCNUIsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVtRCxFQUFMO0FBQVNsRCxlQUFDLEVBQUVpRDtBQUFaLGFBQUQsQ0FBZDtBQUNELFdBRk0sTUFFQTtBQUNMdkMscUJBQVMsQ0FBQztBQUFFbEIsZUFBQyxFQUFFaUIsTUFBTSxDQUFDakIsQ0FBWjtBQUFlQyxlQUFDLEVBQUVvRDtBQUFsQixhQUFELENBQVQ7QUFDQWpDLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFbUQsRUFBTDtBQUFTbEQsZUFBQyxFQUFFcUQ7QUFBWixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLElBQUw7QUFDRSxjQUFJYixTQUFTLElBQUlGLFNBQWpCLEVBQTRCO0FBQzFCMUIsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVnRCxPQUFMO0FBQWMvQyxlQUFDLEVBQUVpRDtBQUFqQixhQUFELENBQWQ7QUFDRCxXQUZELE1BRU8sSUFBSVgsU0FBSixFQUFlO0FBQ3BCNUIscUJBQVMsQ0FBQztBQUFFbEIsZUFBQyxFQUFFaUIsTUFBTSxDQUFDakIsQ0FBUCxHQUFXbUIsV0FBVyxDQUFDWixDQUE1QjtBQUErQk4sZUFBQyxFQUFFb0Q7QUFBbEMsYUFBRCxDQUFUO0FBQ0FqQywwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRWdELE9BQUw7QUFBYy9DLGVBQUMsRUFBRXFEO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBSE0sTUFHQSxJQUFJYixTQUFKLEVBQWU7QUFDcEI5QixxQkFBUyxDQUFDO0FBQUVsQixlQUFDLEVBQUVtRCxRQUFMO0FBQWVsRCxlQUFDLEVBQUVnQixNQUFNLENBQUNoQixDQUFQLEdBQVdrQixXQUFXLENBQUNYO0FBQXpDLGFBQUQsQ0FBVDtBQUNBWSwwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRW9ELEVBQUw7QUFBU25ELGVBQUMsRUFBRWlEO0FBQVosYUFBRCxDQUFkO0FBQ0QsV0FITSxNQUdBO0FBQ0x2QyxxQkFBUyxDQUFDO0FBQUVsQixlQUFDLEVBQUVtRCxRQUFMO0FBQWVsRCxlQUFDLEVBQUVvRDtBQUFsQixhQUFELENBQVQ7QUFDQWpDLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFb0QsRUFBTDtBQUFTbkQsZUFBQyxFQUFFcUQ7QUFBWixhQUFELENBQWQ7QUFDRDs7QUFDRDtBQXhGSjtBQTBGRCxLQS9HRDs7QUFpSEEsUUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QnBDLGNBQVEsQ0FBQ1csbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENPLGNBQTFDO0FBQ0FsQixjQUFRLENBQUNXLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDeUIsV0FBeEM7QUFDRCxLQUhEOztBQUtBcEMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q2lCLGNBQXZDO0FBQ0FsQixZQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDbUMsV0FBckM7QUFDQXpDLG1CQUFlLENBQUNTLE9BQWhCLEdBQTBCO0FBQUU5QixPQUFDLEVBQUV3QixDQUFDLENBQUNPLE9BQVA7QUFBZ0I5QixPQUFDLEVBQUV1QixDQUFDLENBQUNRO0FBQXJCLEtBQTFCO0FBQ0QsR0F2SUQ7O0FBeUlBLE1BQU0rQixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU0sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXQyxHQUFYLENBQWUsVUFBQ3pCLEdBQUQ7QUFBQSwwQkFDbkM7QUFBZ0IsaUJBQVMsRUFBRS9DLEVBQUUsQ0FBQyxNQUFELEVBQVMrQyxHQUFUO0FBQTdCLFNBQVdBLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURtQztBQUFBLEtBQWYsQ0FBTjtBQUFBLEdBQWhCOztBQUlBLE1BQU0wQixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU14RCxRQUFRLENBQUN1RCxHQUFULENBQWEsVUFBQ3pCLEdBQUQ7QUFBQSwwQkFDakM7QUFBZ0IsaUJBQVMsRUFBRS9DLEVBQUUsQ0FBQyxNQUFELEVBQVMrQyxHQUFULENBQTdCO0FBQTRDLG1CQUFXLEVBQUUscUJBQUFmLENBQUM7QUFBQSxpQkFBSWMsWUFBWSxDQUFDZCxDQUFELEVBQUllLEdBQUosQ0FBaEI7QUFBQTtBQUExRCxTQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUM7QUFBQSxLQUFiLENBQU47QUFBQSxHQUFoQjs7QUFJQSxNQUFNMkIsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFNeEQsU0FBUyxDQUFDc0QsR0FBVixDQUFjLFVBQUN6QixHQUFEO0FBQUEsMEJBQ3BDO0FBQWdCLGlCQUFTLEVBQUUvQyxFQUFFLENBQUMsT0FBRCxFQUFVK0MsR0FBVixDQUE3QjtBQUE2QyxtQkFBVyxFQUFFLHFCQUFBZixDQUFDO0FBQUEsaUJBQUljLFlBQVksQ0FBQ2QsQ0FBRCxFQUFJZSxHQUFKLENBQWhCO0FBQUE7QUFBM0QsU0FBV0EsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9DO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBbEI7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUUvQyxFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsVUFBRCxDQUFsQjtBQUFBLDhCQUdFO0FBQUssaUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbEI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFQSxFQUFFLENBQUMsS0FBRCxDQURmO0FBRUUsZUFBRyxFQUFFcUIsT0FGUDtBQUdFLGlCQUFLLEVBQUU7QUFDTHNELG1CQUFLLFlBQUtwRCxPQUFPLENBQUNSLENBQWIsT0FEQTtBQUVMNkQsb0JBQU0sWUFBS3JELE9BQU8sQ0FBQ1AsQ0FBYjtBQUZEO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFpQkU7QUFBSyxpQkFBUyxFQUFFaEIsRUFBRSxDQUFDLFdBQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRixlQW9CRTtBQUNFLGlCQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBRGY7QUFFRSxhQUFLLEVBQUU7QUFDTDJFLGVBQUssWUFBS2hELFdBQVcsQ0FBQ1osQ0FBakIsT0FEQTtBQUVMNkQsZ0JBQU0sWUFBS2pELFdBQVcsQ0FBQ1gsQ0FBakIsT0FGRDtBQUdMNkQsbUJBQVMsdUJBQWdCcEQsTUFBTSxDQUFDakIsQ0FBdkIsNEJBQTBDaUIsTUFBTSxDQUFDaEIsQ0FBakQ7QUFISixTQUZUO0FBQUEsZ0NBVUU7QUFBTSxtQkFBUyxFQUFFVCxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FEZjtBQUVFLGVBQUcsRUFBRXFCLE9BRlA7QUFHRSxpQkFBSyxFQUFFO0FBQ0xzRCxtQkFBSyxZQUFLcEQsT0FBTyxDQUFDUixDQUFiLE9BREE7QUFFTDZELG9CQUFNLFlBQUtyRCxPQUFPLENBQUNQLENBQWIsT0FGRDtBQUdMNkQsdUJBQVMsd0JBQWlCcEQsTUFBTSxDQUFDakIsQ0FBeEIsNkJBQTRDaUIsTUFBTSxDQUFDaEIsQ0FBbkQ7QUFISjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLEVBdUJHOEQsT0FBTyxFQXZCVixlQTBCRTtBQUFNLG1CQUFTLEVBQUV2RSxFQUFFLENBQUMsT0FBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRixlQTZCRTtBQUFNLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQW5CO0FBQWdDLHFCQUFXLEVBQUUrQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixFQWdDRzBDLE9BQU8sRUFoQ1YsRUFtQ0dDLFNBQVMsRUFuQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStERCxDQS9PRDs7R0FBTXZELFM7O0tBQUFBLFM7QUFpUFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC4yMDZjMWZhNmIzODEzMWIwY2NiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBJTUdfUEFUSCA9ICcvbmV4dGpzL2ltZy9jaHVuU2lrL2ltZ0NodW5TaWtGYWNlLnBuZyc7XHJcblxyXG50eXBlIERpclR5cGUgPSAnZScgfCAndycgfCAncycgfCAnbicgfCAnc2UnIHwgJ3N3JyB8ICduZScgfCAnbncnO1xyXG5cclxuaW50ZXJmYWNlIFNpemUge1xyXG4gIHc6IG51bWJlcjtcclxuICBoOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCArIHAyLngsIHk6IHAxLnkgKyBwMi55IH07XHJcbn1cclxuXHJcbmNvbnN0IE9SSUdJTl9QT0lOVCA9IE9iamVjdC5mcmVlemUoeyB4OiAwLCB5OiAwIH0pO1xyXG5jb25zdCBPUklHSU5fU0laRSA9IE9iamVjdC5mcmVlemUoeyB3OiAxMDAsIGg6IDEwMCB9KTtcclxuY29uc3QgTElORV9ESVIgPSBbJ2UnLCAndycsICdzJywgJ24nXTtcclxuY29uc3QgUE9JTlRfRElSID0gWydlJywgJ3cnLCAncycsICduJywgJ3NlJywgJ3N3JywgJ25lJywgJ253J107XHJcblxyXG5jb25zdCBJbWFnZUNyb3AgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltZ1BhdGgsIHNldEltZ1BhdGhdID0gdXNlU3RhdGU8c3RyaW5nPihJTUdfUEFUSCk7XHJcbiAgY29uc3QgW2ltZ1NpemUsIHNldEltZ1NpemVdID0gdXNlU3RhdGU8U2l6ZT4oeyB3OiA0MTIsIGg6IDQxMiB9KTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vdmVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RvcFBhbiA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydFNldFNpemUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBkaXI6IERpclR5cGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueCArIGNyb3BCb3hTaXplLnc7XHJcbiAgICBjb25zdCB3TGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IHNMaW5lWSA9IG9mZnNldC55ICsgY3JvcEJveFNpemUuaDtcclxuICAgIGNvbnN0IG5MaW5lWSA9IG9mZnNldC55O1xyXG5cclxuICAgIGNvbnN0IHNldFNpemVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgICAgc2V0Qm94KGN1cnJlbnRNb3VzZVBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ID0gKGN1cnJlbnRNb3VzZVBvcykgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nyb3NzRUwgPSAhKHdMaW5lWCArIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NXTCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3QgaXNDcm9zc1NMID0gIShuTGluZVkgKyBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzTkwgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBjb25zdCBlWE9mZnNldCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHdYT2Zmc2V0ID0gd0xpbmVYIC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBzWU9mZnNldCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IG5ZT2Zmc2V0ID0gbkxpbmVZIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG5cclxuICAgICAgY29uc3QgZUNyb3NzVyA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgd0Nyb3NzVyA9IGN1cnJlbnRNb3VzZVBvcy54IC0gd0xpbmVYIC0gY3JvcEJveFNpemUudztcclxuICAgICAgY29uc3Qgc0Nyb3NzSCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSBjdXJyZW50TW91c2VQb3MueTtcclxuICAgICAgY29uc3QgbkNyb3NzSCA9IGN1cnJlbnRNb3VzZVBvcy55IC0gbkxpbmVZIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgICAgIGNvbnN0IGVXID0gY3JvcEJveFNpemUudyArIGN1cnJlbnRNb3VzZVBvcy54IC0gZUxpbmVYO1xyXG4gICAgICBjb25zdCB3VyA9IGNyb3BCb3hTaXplLncgKyB3TGluZVggLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgc0ggPSBjcm9wQm94U2l6ZS5oICsgY3VycmVudE1vdXNlUG9zLnkgLSBzTGluZVk7XHJcbiAgICAgIGNvbnN0IG5IID0gY3JvcEJveFNpemUuaCArIG5MaW5lWSAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmUnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdudyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRTaXplID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXNoID0gKCkgPT4gWyd3JywgJ2gnXS5tYXAoKGRpcikgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdkYXNoJywgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldExpbmUgPSAoKSA9PiBMSU5FX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdsaW5lJywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRQb2ludHMgPSAoKSA9PiBQT0lOVF9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcblxyXG4gICAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBkaW1tZWQg7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSAvPlxyXG5cclxuICAgICAgICB7LyogY3JvcCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtjcm9wQm94U2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd2aWV3Qm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgICAgIHNyYz17aW1nUGF0aH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIHsvKiDqsqnsnpAg7JiB7JetICovfVxyXG4gICAgICAgICAge2dldERhc2goKX1cclxuXHJcbiAgICAgICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9zcycpfSAvPlxyXG5cclxuICAgICAgICAgIHsvKiDsu6TshJwg7JiB7JetICovfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnbW92ZUJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRQYW59IC8+XHJcblxyXG4gICAgICAgICAgey8qIOuztOuNlCDsmIHsl60gKi99XHJcbiAgICAgICAgICB7Z2V0TGluZSgpfVxyXG5cclxuICAgICAgICAgIHsvKiDsoJAg7JiB7JetICovfVxyXG4gICAgICAgICAge2dldFBvaW50cygpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcDsiXSwic291cmNlUm9vdCI6IiJ9