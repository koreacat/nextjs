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

var ORIGIN_POINT = Object.freeze({
  x: 0,
  y: 0
});
var ORIGIN_SIZE = Object.freeze({
  w: 200,
  h: 200
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
        x: e.offsetX,
        y: e.offsetY
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
        lineNumber: 204,
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
        lineNumber: 208,
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
        lineNumber: 212,
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
            lineNumber: 222,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
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
            lineNumber: 248,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('cross')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          ref: moveBoxRef,
          className: cx('moveBox'),
          onMouseDown: startPan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 11
        }, _this), getLine(), getPoints()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 216,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIk9SSUdJTl9QT0lOVCIsIk9iamVjdCIsImZyZWV6ZSIsIk9SSUdJTl9TSVpFIiwidyIsImgiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsIkltYWdlQ3JvcCIsInVzZVN0YXRlIiwiaW1nUGF0aCIsInNldEltZ1BhdGgiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJsYXN0TW91c2VQb3NSZWYiLCJ1c2VSZWYiLCJzdGFydFBhbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmVDcm9wQm94Iiwic3RvcFBhbiIsImN1cnJlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImxhc3RNb3VzZVBvcyIsImN1cnJlbnRNb3VzZVBvcyIsIm1vdXNlRGlmZiIsInByZXZPZmZzZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhcnRTZXRTaXplIiwiZGlyIiwiZUxpbmVYIiwid0xpbmVYIiwic0xpbmVZIiwibkxpbmVZIiwic2V0U2l6ZUNyb3BCb3giLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNldEJveCIsImlzQ3Jvc3NFTCIsImlzQ3Jvc3NXTCIsImlzQ3Jvc3NTTCIsImlzQ3Jvc3NOTCIsImVYT2Zmc2V0Iiwid1hPZmZzZXQiLCJzWU9mZnNldCIsIm5ZT2Zmc2V0IiwiZUNyb3NzVyIsIndDcm9zc1ciLCJzQ3Jvc3NIIiwibkNyb3NzSCIsImVXIiwid1ciLCJzSCIsIm5IIiwic3RvcFNldFNpemUiLCJnZXREYXNoIiwibWFwIiwiZ2V0TGluZSIsImdldFBvaW50cyIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwibW92ZUJveFJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7QUFFQSxJQUFNQyxRQUFRLEdBQUcsd0NBQWpCO0FBWUM7O0FBRUQsU0FBU0MsVUFBVCxDQUFvQkMsRUFBcEIsRUFBK0JDLEVBQS9CLEVBQTBDO0FBQ3hDLFNBQU87QUFBRUMsS0FBQyxFQUFFRixFQUFFLENBQUNFLENBQUgsR0FBT0QsRUFBRSxDQUFDQyxDQUFmO0FBQWtCQyxLQUFDLEVBQUVILEVBQUUsQ0FBQ0csQ0FBSCxHQUFPRixFQUFFLENBQUNFO0FBQS9CLEdBQVA7QUFDRDs7QUFFRCxTQUFTQyxTQUFULENBQW1CSixFQUFuQixFQUE4QkMsRUFBOUIsRUFBa0Y7QUFBQSxNQUF6Q0ksSUFBeUMsdUVBQWxDLENBQWtDO0FBQUEsTUFBL0JDLElBQStCLHVFQUF4QixDQUF3QjtBQUFBLE1BQXJCQyxJQUFxQix1RUFBZCxDQUFjO0FBQUEsTUFBVkMsSUFBVSx1RUFBSCxDQUFHO0FBQ2hGLE1BQU1OLENBQUMsR0FBR0YsRUFBRSxDQUFDRSxDQUFILEdBQU9ELEVBQUUsQ0FBQ0MsQ0FBcEI7QUFDQSxNQUFNQyxDQUFDLEdBQUdILEVBQUUsQ0FBQ0csQ0FBSCxHQUFPRixFQUFFLENBQUNFLENBQXBCO0FBQ0EsU0FBTztBQUNMRCxLQUFDLEVBQUdBLENBQUMsR0FBR0csSUFBTCxHQUFhQSxJQUFiLEdBQXFCSCxDQUFDLEdBQUdLLElBQUwsR0FBYUEsSUFBYixHQUFvQkwsQ0FEdEM7QUFFTEMsS0FBQyxFQUFHQSxDQUFDLEdBQUdHLElBQUwsR0FBYUEsSUFBYixHQUFxQkgsQ0FBQyxHQUFHSyxJQUFMLEdBQWFBLElBQWIsR0FBb0JMO0FBRnRDLEdBQVA7QUFJRDs7QUFFRCxJQUFNTSxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVULEdBQUMsRUFBRSxDQUFMO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQWQsQ0FBckI7QUFDQSxJQUFNUyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVFLEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBQWQsQ0FBcEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsSUFBakMsRUFBdUMsSUFBdkMsQ0FBbEI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFTcEIsUUFBVCxDQURoQjtBQUFBLE1BQ2ZxQixPQURlO0FBQUEsTUFDTkMsVUFETTs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBTztBQUFFTCxLQUFDLEVBQUUsR0FBTDtBQUFVQyxLQUFDLEVBQUU7QUFBYixHQUFQLENBRmhCO0FBQUEsTUFFZk8sT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBQUEsbUJBR01KLHNEQUFRLENBQVFULFlBQVIsQ0FIZDtBQUFBLE1BR2ZjLE1BSGU7QUFBQSxNQUdQQyxTQUhPOztBQUFBLG1CQUlnQk4sc0RBQVEsQ0FBT04sV0FBUCxDQUp4QjtBQUFBLE1BSWZhLFdBSmU7QUFBQSxNQUlGQyxjQUpFOztBQUt0QixNQUFNQyxlQUFlLEdBQUdDLG9EQUFNLENBQVFuQixZQUFSLENBQTlCOztBQUVBLE1BQU1vQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQXNEO0FBQ3JFQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0MsV0FBdkM7QUFDQUYsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0UsT0FBckM7QUFDQVIsbUJBQWUsQ0FBQ1MsT0FBaEIsR0FBMEI7QUFBRWxDLE9BQUMsRUFBRTRCLENBQUMsQ0FBQ08sT0FBUDtBQUFnQmxDLE9BQUMsRUFBRTJCLENBQUMsQ0FBQ1E7QUFBckIsS0FBMUI7QUFDRCxHQUxEOztBQU9BLE1BQU1KLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNKLENBQUQsRUFBbUI7QUFDckMsUUFBTVMsWUFBWSxHQUFHWixlQUFlLENBQUNTLE9BQXJDO0FBQ0EsUUFBTUksZUFBZSxHQUFHO0FBQUV0QyxPQUFDLEVBQUU0QixDQUFDLENBQUNPLE9BQVA7QUFBZ0JsQyxPQUFDLEVBQUUyQixDQUFDLENBQUNRO0FBQXJCLEtBQXhCO0FBQ0EsUUFBTUcsU0FBUyxHQUFHMUMsVUFBVSxDQUFDeUMsZUFBRCxFQUFrQkQsWUFBbEIsQ0FBNUI7QUFFQVosbUJBQWUsQ0FBQ1MsT0FBaEIsR0FBMEJJLGVBQTFCO0FBQ0FoQixhQUFTLENBQUMsVUFBQ2tCLFVBQUQ7QUFBQSxhQUNSdEMsU0FBUyxDQUFDc0MsVUFBRCxFQUFhRCxTQUFiLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCcEIsT0FBTyxDQUFDUixDQUFSLEdBQVlZLFdBQVcsQ0FBQ1osQ0FBdEQsRUFBeURRLE9BQU8sQ0FBQ1AsQ0FBUixHQUFZVyxXQUFXLENBQUNYLENBQWpGLENBREQ7QUFBQSxLQUFELENBQVQ7QUFHRCxHQVREOztBQVdBLE1BQU1xQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCSCxZQUFRLENBQUNXLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDVCxXQUExQztBQUNBRixZQUFRLENBQUNXLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDUixPQUF4QztBQUNELEdBSEQ7O0FBS0EsTUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2QsQ0FBRCxFQUFtRGUsR0FBbkQsRUFBb0U7QUFDdkZmLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQU1lLE1BQU0sR0FBR3ZCLE1BQU0sQ0FBQ3JCLENBQVAsR0FBV3VCLFdBQVcsQ0FBQ1osQ0FBdEM7QUFDQSxRQUFNa0MsTUFBTSxHQUFHeEIsTUFBTSxDQUFDckIsQ0FBdEI7QUFDQSxRQUFNOEMsTUFBTSxHQUFHekIsTUFBTSxDQUFDcEIsQ0FBUCxHQUFXc0IsV0FBVyxDQUFDWCxDQUF0QztBQUNBLFFBQU1tQyxNQUFNLEdBQUcxQixNQUFNLENBQUNwQixDQUF0Qjs7QUFFQSxRQUFNK0MsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDcEIsQ0FBRCxFQUFtQjtBQUN4QyxVQUFNVSxlQUFlLEdBQUc7QUFBRXRDLFNBQUMsRUFBRTRCLENBQUMsQ0FBQ3FCLE9BQVA7QUFBZ0JoRCxTQUFDLEVBQUUyQixDQUFDLENBQUNzQjtBQUFyQixPQUF4QjtBQUNBQyxZQUFNLENBQUNiLGVBQUQsQ0FBTjtBQUNELEtBSEQ7O0FBS0EsUUFBTWEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ2IsZUFBRCxFQUFxQjtBQUNsQyxVQUFNYyxTQUFTLEdBQUcsRUFBRVAsTUFBTSxHQUFHdEIsV0FBVyxDQUFDWixDQUFyQixHQUF5QjJCLGVBQWUsQ0FBQ3RDLENBQTNDLENBQWxCO0FBQ0EsVUFBTXFELFNBQVMsR0FBR1QsTUFBTSxHQUFHckIsV0FBVyxDQUFDWixDQUFyQixHQUF5QjJCLGVBQWUsQ0FBQ3RDLENBQTNEO0FBQ0EsVUFBTXNELFNBQVMsR0FBRyxFQUFFUCxNQUFNLEdBQUd4QixXQUFXLENBQUNYLENBQXJCLEdBQXlCMEIsZUFBZSxDQUFDckMsQ0FBM0MsQ0FBbEI7QUFDQSxVQUFNc0QsU0FBUyxHQUFHVCxNQUFNLEdBQUd2QixXQUFXLENBQUNYLENBQXJCLEdBQXlCMEIsZUFBZSxDQUFDckMsQ0FBM0Q7QUFFQSxVQUFNdUQsUUFBUSxHQUFHWixNQUFNLEdBQUdyQixXQUFXLENBQUNaLENBQXJCLElBQTBCVSxNQUFNLENBQUNyQixDQUFQLEdBQVdzQyxlQUFlLENBQUN0QyxDQUFyRCxDQUFqQjtBQUNBLFVBQU15RCxRQUFRLEdBQUdaLE1BQU0sSUFBSXhCLE1BQU0sQ0FBQ3JCLENBQVAsR0FBV3NDLGVBQWUsQ0FBQ3RDLENBQS9CLENBQXZCO0FBQ0EsVUFBTTBELFFBQVEsR0FBR1osTUFBTSxHQUFHdkIsV0FBVyxDQUFDWCxDQUFyQixJQUEwQlMsTUFBTSxDQUFDcEIsQ0FBUCxHQUFXcUMsZUFBZSxDQUFDckMsQ0FBckQsQ0FBakI7QUFDQSxVQUFNMEQsUUFBUSxHQUFHWixNQUFNLElBQUkxQixNQUFNLENBQUNwQixDQUFQLEdBQVdxQyxlQUFlLENBQUNyQyxDQUEvQixDQUF2QjtBQUVBLFVBQU0yRCxPQUFPLEdBQUdoQixNQUFNLEdBQUdyQixXQUFXLENBQUNaLENBQXJCLEdBQXlCMkIsZUFBZSxDQUFDdEMsQ0FBekQ7QUFDQSxVQUFNNkQsT0FBTyxHQUFHdkIsZUFBZSxDQUFDdEMsQ0FBaEIsR0FBb0I2QyxNQUFwQixHQUE2QnRCLFdBQVcsQ0FBQ1osQ0FBekQ7QUFDQSxVQUFNbUQsT0FBTyxHQUFHaEIsTUFBTSxHQUFHdkIsV0FBVyxDQUFDWCxDQUFyQixHQUF5QjBCLGVBQWUsQ0FBQ3JDLENBQXpEO0FBQ0EsVUFBTThELE9BQU8sR0FBR3pCLGVBQWUsQ0FBQ3JDLENBQWhCLEdBQW9COEMsTUFBcEIsR0FBNkJ4QixXQUFXLENBQUNYLENBQXpEO0FBRUEsVUFBTW9ELEVBQUUsR0FBR3pDLFdBQVcsQ0FBQ1osQ0FBWixHQUFnQjJCLGVBQWUsQ0FBQ3RDLENBQWhDLEdBQW9DNEMsTUFBL0M7QUFDQSxVQUFNcUIsRUFBRSxHQUFHMUMsV0FBVyxDQUFDWixDQUFaLEdBQWdCa0MsTUFBaEIsR0FBeUJQLGVBQWUsQ0FBQ3RDLENBQXBEO0FBQ0EsVUFBTWtFLEVBQUUsR0FBRzNDLFdBQVcsQ0FBQ1gsQ0FBWixHQUFnQjBCLGVBQWUsQ0FBQ3JDLENBQWhDLEdBQW9DNkMsTUFBL0M7QUFDQSxVQUFNcUIsRUFBRSxHQUFHNUMsV0FBVyxDQUFDWCxDQUFaLEdBQWdCbUMsTUFBaEIsR0FBeUJULGVBQWUsQ0FBQ3JDLENBQXBEOztBQUVBLGNBQVEwQyxHQUFSO0FBQ0UsYUFBSyxHQUFMO0FBQ0UsY0FBSVUsU0FBSixFQUFlO0FBQ2IvQixxQkFBUyxDQUFDO0FBQUV0QixlQUFDLEVBQUV3RCxRQUFMO0FBQWV2RCxlQUFDLEVBQUVvQixNQUFNLENBQUNwQjtBQUF6QixhQUFELENBQVQ7QUFDQXVCLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFaUQsT0FBTDtBQUFjaEQsZUFBQyxFQUFFVyxXQUFXLENBQUNYO0FBQTdCLGFBQUQsQ0FBZDtBQUNELFdBSEQsTUFHTztBQUNMWSwwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRXFELEVBQUw7QUFBU3BELGVBQUMsRUFBRVcsV0FBVyxDQUFDWDtBQUF4QixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLEdBQUw7QUFDRSxjQUFJd0MsU0FBSixFQUFlO0FBQ2I1QiwwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRWtELE9BQUw7QUFBY2pELGVBQUMsRUFBRVcsV0FBVyxDQUFDWDtBQUE3QixhQUFELENBQWQ7QUFDRCxXQUZELE1BRU87QUFDTFUscUJBQVMsQ0FBQztBQUFFdEIsZUFBQyxFQUFFeUQsUUFBTDtBQUFleEQsZUFBQyxFQUFFb0IsTUFBTSxDQUFDcEI7QUFBekIsYUFBRCxDQUFUO0FBQ0F1QiwwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRXNELEVBQUw7QUFBU3JELGVBQUMsRUFBRVcsV0FBVyxDQUFDWDtBQUF4QixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLEdBQUw7QUFDRSxjQUFJMkMsU0FBSixFQUFlO0FBQ2JqQyxxQkFBUyxDQUFDO0FBQUV0QixlQUFDLEVBQUVxQixNQUFNLENBQUNyQixDQUFaO0FBQWVDLGVBQUMsRUFBRXlEO0FBQWxCLGFBQUQsQ0FBVDtBQUNBbEMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVZLFdBQVcsQ0FBQ1osQ0FBakI7QUFBb0JDLGVBQUMsRUFBRWtEO0FBQXZCLGFBQUQsQ0FBZDtBQUNELFdBSEQsTUFHTztBQUNMdEMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVZLFdBQVcsQ0FBQ1osQ0FBakI7QUFBb0JDLGVBQUMsRUFBRXNEO0FBQXZCLGFBQUQsQ0FBZDtBQUNEOztBQUNEOztBQUNGLGFBQUssR0FBTDtBQUNFLGNBQUlaLFNBQUosRUFBZTtBQUNiOUIsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVZLFdBQVcsQ0FBQ1osQ0FBakI7QUFBb0JDLGVBQUMsRUFBRW1EO0FBQXZCLGFBQUQsQ0FBZDtBQUNELFdBRkQsTUFFTztBQUNMekMscUJBQVMsQ0FBQztBQUFFdEIsZUFBQyxFQUFFcUIsTUFBTSxDQUFDckIsQ0FBWjtBQUFlQyxlQUFDLEVBQUUwRDtBQUFsQixhQUFELENBQVQ7QUFDQW5DLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFWSxXQUFXLENBQUNaLENBQWpCO0FBQW9CQyxlQUFDLEVBQUV1RDtBQUF2QixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLElBQUw7QUFDRSxjQUFJWixTQUFTLElBQUlGLFNBQWpCLEVBQTRCO0FBQzFCL0IscUJBQVMsQ0FBQztBQUFFdEIsZUFBQyxFQUFFd0QsUUFBTDtBQUFldkQsZUFBQyxFQUFFeUQ7QUFBbEIsYUFBRCxDQUFUO0FBQ0FsQywwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRWlELE9BQUw7QUFBY2hELGVBQUMsRUFBRWtEO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBSEQsTUFHTyxJQUFJVCxTQUFKLEVBQWU7QUFDcEIvQixxQkFBUyxDQUFDO0FBQUV0QixlQUFDLEVBQUV3RCxRQUFMO0FBQWV2RCxlQUFDLEVBQUVvQixNQUFNLENBQUNwQjtBQUF6QixhQUFELENBQVQ7QUFDQXVCLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFaUQsT0FBTDtBQUFjaEQsZUFBQyxFQUFFc0Q7QUFBakIsYUFBRCxDQUFkO0FBQ0QsV0FITSxNQUdBLElBQUlYLFNBQUosRUFBZTtBQUNwQmpDLHFCQUFTLENBQUM7QUFBRXRCLGVBQUMsRUFBRXFCLE1BQU0sQ0FBQ3JCLENBQVo7QUFBZUMsZUFBQyxFQUFFeUQ7QUFBbEIsYUFBRCxDQUFUO0FBQ0FsQywwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRXFELEVBQUw7QUFBU3BELGVBQUMsRUFBRWtEO0FBQVosYUFBRCxDQUFkO0FBQ0QsV0FITSxNQUdBO0FBQ0x0QywwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRXFELEVBQUw7QUFBU3BELGVBQUMsRUFBRXNEO0FBQVosYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxJQUFMO0FBQ0UsY0FBSVgsU0FBUyxJQUFJSCxTQUFqQixFQUE0QjtBQUMxQjlCLHFCQUFTLENBQUM7QUFBRXRCLGVBQUMsRUFBRXFCLE1BQU0sQ0FBQ3JCLENBQVAsR0FBV3VCLFdBQVcsQ0FBQ1osQ0FBNUI7QUFBK0JWLGVBQUMsRUFBRTBEO0FBQWxDLGFBQUQsQ0FBVDtBQUNBbkMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVrRCxPQUFMO0FBQWNqRCxlQUFDLEVBQUVrRDtBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhELE1BR08sSUFBSVYsU0FBSixFQUFlO0FBQ3BCNUIsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVrRCxPQUFMO0FBQWNqRCxlQUFDLEVBQUVzRDtBQUFqQixhQUFELENBQWQ7QUFDRCxXQUZNLE1BRUEsSUFBSVgsU0FBSixFQUFlO0FBQ3BCakMscUJBQVMsQ0FBQztBQUFFdEIsZUFBQyxFQUFFeUQsUUFBTDtBQUFleEQsZUFBQyxFQUFFMEQ7QUFBbEIsYUFBRCxDQUFUO0FBQ0FuQywwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRXNELEVBQUw7QUFBU3JELGVBQUMsRUFBRWtEO0FBQVosYUFBRCxDQUFkO0FBQ0QsV0FITSxNQUdBO0FBQ0x4QyxxQkFBUyxDQUFDO0FBQUV0QixlQUFDLEVBQUV5RCxRQUFMO0FBQWV4RCxlQUFDLEVBQUVvQixNQUFNLENBQUNwQjtBQUF6QixhQUFELENBQVQ7QUFDQXVCLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFc0QsRUFBTDtBQUFTckQsZUFBQyxFQUFFc0Q7QUFBWixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLElBQUw7QUFDRSxjQUFJWixTQUFTLElBQUlELFNBQWpCLEVBQTRCO0FBQzFCL0IscUJBQVMsQ0FBQztBQUFFdEIsZUFBQyxFQUFFd0QsUUFBTDtBQUFldkQsZUFBQyxFQUFFb0IsTUFBTSxDQUFDcEIsQ0FBUCxHQUFXc0IsV0FBVyxDQUFDWDtBQUF6QyxhQUFELENBQVQ7QUFDQVksMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVpRCxPQUFMO0FBQWNoRCxlQUFDLEVBQUVtRDtBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhELE1BR08sSUFBSVYsU0FBSixFQUFlO0FBQ3BCL0IscUJBQVMsQ0FBQztBQUFFdEIsZUFBQyxFQUFFd0QsUUFBTDtBQUFldkQsZUFBQyxFQUFFMEQ7QUFBbEIsYUFBRCxDQUFUO0FBQ0FuQywwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRWlELE9BQUw7QUFBY2hELGVBQUMsRUFBRXVEO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBSE0sTUFHQSxJQUFJYixTQUFKLEVBQWU7QUFDcEI5QiwwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRXFELEVBQUw7QUFBU3BELGVBQUMsRUFBRW1EO0FBQVosYUFBRCxDQUFkO0FBQ0QsV0FGTSxNQUVBO0FBQ0x6QyxxQkFBUyxDQUFDO0FBQUV0QixlQUFDLEVBQUVxQixNQUFNLENBQUNyQixDQUFaO0FBQWVDLGVBQUMsRUFBRTBEO0FBQWxCLGFBQUQsQ0FBVDtBQUNBbkMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVxRCxFQUFMO0FBQVNwRCxlQUFDLEVBQUV1RDtBQUFaLGFBQUQsQ0FBZDtBQUNEOztBQUNEOztBQUNGLGFBQUssSUFBTDtBQUNFLGNBQUliLFNBQVMsSUFBSUYsU0FBakIsRUFBNEI7QUFDMUI1QiwwQkFBYyxDQUFDO0FBQUViLGVBQUMsRUFBRWtELE9BQUw7QUFBY2pELGVBQUMsRUFBRW1EO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBRkQsTUFFTyxJQUFJWCxTQUFKLEVBQWU7QUFDcEI5QixxQkFBUyxDQUFDO0FBQUV0QixlQUFDLEVBQUVxQixNQUFNLENBQUNyQixDQUFQLEdBQVd1QixXQUFXLENBQUNaLENBQTVCO0FBQStCVixlQUFDLEVBQUUwRDtBQUFsQyxhQUFELENBQVQ7QUFDQW5DLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFa0QsT0FBTDtBQUFjakQsZUFBQyxFQUFFdUQ7QUFBakIsYUFBRCxDQUFkO0FBQ0QsV0FITSxNQUdBLElBQUliLFNBQUosRUFBZTtBQUNwQmhDLHFCQUFTLENBQUM7QUFBRXRCLGVBQUMsRUFBRXlELFFBQUw7QUFBZXhELGVBQUMsRUFBRW9CLE1BQU0sQ0FBQ3BCLENBQVAsR0FBV3NCLFdBQVcsQ0FBQ1g7QUFBekMsYUFBRCxDQUFUO0FBQ0FZLDBCQUFjLENBQUM7QUFBRWIsZUFBQyxFQUFFc0QsRUFBTDtBQUFTckQsZUFBQyxFQUFFbUQ7QUFBWixhQUFELENBQWQ7QUFDRCxXQUhNLE1BR0E7QUFDTHpDLHFCQUFTLENBQUM7QUFBRXRCLGVBQUMsRUFBRXlELFFBQUw7QUFBZXhELGVBQUMsRUFBRTBEO0FBQWxCLGFBQUQsQ0FBVDtBQUNBbkMsMEJBQWMsQ0FBQztBQUFFYixlQUFDLEVBQUVzRCxFQUFMO0FBQVNyRCxlQUFDLEVBQUV1RDtBQUFaLGFBQUQsQ0FBZDtBQUNEOztBQUNEO0FBeEZKO0FBMEZELEtBL0dEOztBQWlIQSxRQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCdEMsY0FBUSxDQUFDVyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ08sY0FBMUM7QUFDQWxCLGNBQVEsQ0FBQ1csbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MyQixXQUF4QztBQUNELEtBSEQ7O0FBS0F0QyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDaUIsY0FBdkM7QUFDQWxCLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNxQyxXQUFyQztBQUNELEdBcklEOztBQXVJQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU0sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXQyxHQUFYLENBQWUsVUFBQzNCLEdBQUQ7QUFBQSwwQkFDbkM7QUFBZ0IsaUJBQVMsRUFBRW5ELEVBQUUsQ0FBQyxNQUFELEVBQVNtRCxHQUFUO0FBQTdCLFNBQVdBLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURtQztBQUFBLEtBQWYsQ0FBTjtBQUFBLEdBQWhCOztBQUlBLE1BQU00QixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU0xRCxRQUFRLENBQUN5RCxHQUFULENBQWEsVUFBQzNCLEdBQUQ7QUFBQSwwQkFDakM7QUFBZ0IsaUJBQVMsRUFBRW5ELEVBQUUsQ0FBQyxNQUFELEVBQVNtRCxHQUFULENBQTdCO0FBQTRDLG1CQUFXLEVBQUUscUJBQUFmLENBQUM7QUFBQSxpQkFBSWMsWUFBWSxDQUFDZCxDQUFELEVBQUllLEdBQUosQ0FBaEI7QUFBQTtBQUExRCxTQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUM7QUFBQSxLQUFiLENBQU47QUFBQSxHQUFoQjs7QUFJQSxNQUFNNkIsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFNMUQsU0FBUyxDQUFDd0QsR0FBVixDQUFjLFVBQUMzQixHQUFEO0FBQUEsMEJBQ3BDO0FBQWdCLGlCQUFTLEVBQUVuRCxFQUFFLENBQUMsT0FBRCxFQUFVbUQsR0FBVixDQUE3QjtBQUE2QyxtQkFBVyxFQUFFLHFCQUFBZixDQUFDO0FBQUEsaUJBQUljLFlBQVksQ0FBQ2QsQ0FBRCxFQUFJZSxHQUFKLENBQWhCO0FBQUE7QUFBM0QsU0FBV0EsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9DO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBbEI7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVuRCxFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsVUFBRCxDQUFsQjtBQUFBLDhCQUdFO0FBQUssaUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbEI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFQSxFQUFFLENBQUMsS0FBRCxDQURmO0FBRUUsZUFBRyxFQUFFeUIsT0FGUDtBQUdFLGlCQUFLLEVBQUU7QUFDTHdELG1CQUFLLFlBQUt0RCxPQUFPLENBQUNSLENBQWIsT0FEQTtBQUVMK0Qsb0JBQU0sWUFBS3ZELE9BQU8sQ0FBQ1AsQ0FBYjtBQUZEO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFpQkU7QUFBSyxpQkFBUyxFQUFFcEIsRUFBRSxDQUFDLFdBQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRixlQW9CRTtBQUNFLGlCQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBRGY7QUFFRSxhQUFLLEVBQUU7QUFDTGlGLGVBQUssWUFBS2xELFdBQVcsQ0FBQ1osQ0FBakIsT0FEQTtBQUVMK0QsZ0JBQU0sWUFBS25ELFdBQVcsQ0FBQ1gsQ0FBakIsT0FGRDtBQUdMK0QsbUJBQVMsdUJBQWdCdEQsTUFBTSxDQUFDckIsQ0FBdkIsNEJBQTBDcUIsTUFBTSxDQUFDcEIsQ0FBakQ7QUFISixTQUZUO0FBQUEsZ0NBVUU7QUFBTSxtQkFBUyxFQUFFVCxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FEZjtBQUVFLGVBQUcsRUFBRXlCLE9BRlA7QUFHRSxpQkFBSyxFQUFFO0FBQ0x3RCxtQkFBSyxZQUFLdEQsT0FBTyxDQUFDUixDQUFiLE9BREE7QUFFTCtELG9CQUFNLFlBQUt2RCxPQUFPLENBQUNQLENBQWIsT0FGRDtBQUdMK0QsdUJBQVMsd0JBQWlCdEQsTUFBTSxDQUFDckIsQ0FBeEIsNkJBQTRDcUIsTUFBTSxDQUFDcEIsQ0FBbkQ7QUFISjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLEVBdUJHb0UsT0FBTyxFQXZCVixlQTBCRTtBQUFNLG1CQUFTLEVBQUU3RSxFQUFFLENBQUMsT0FBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRixlQTZCRTtBQUFNLGFBQUcsRUFBRW9GLFVBQVg7QUFBdUIsbUJBQVMsRUFBRXBGLEVBQUUsQ0FBQyxTQUFELENBQXBDO0FBQWlELHFCQUFXLEVBQUVtQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixFQWdDRzRDLE9BQU8sRUFoQ1YsRUFtQ0dDLFNBQVMsRUFuQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStERCxDQWhQRDs7R0FBTXpELFM7O0tBQUFBLFM7QUFrUFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC42Nzg1NDRmNjVhZThjOTU2NWViYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBJTUdfUEFUSCA9ICcvbmV4dGpzL2ltZy9jaHVuU2lrL2ltZ0NodW5TaWtGYWNlLnBuZyc7XHJcblxyXG50eXBlIERpclR5cGUgPSAnZScgfCAndycgfCAncycgfCAnbicgfCAnc2UnIHwgJ3N3JyB8ICduZScgfCAnbncnO1xyXG5cclxuaW50ZXJmYWNlIFNpemUge1xyXG4gIHc6IG51bWJlcjtcclxuICBoOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50LCBtaW5YID0gMCwgbWluWSA9IDAsIG1heFggPSAwLCAgbWF4WSA9IDApIHtcclxuICBjb25zdCB4ID0gcDEueCArIHAyLng7XHJcbiAgY29uc3QgeSA9IHAxLnkgKyBwMi55O1xyXG4gIHJldHVybiB7IFxyXG4gICAgeDogKHggPCBtaW5YKSA/IG1pblggOiAoeCA+IG1heFgpID8gbWF4WCA6IHgsIFxyXG4gICAgeTogKHkgPCBtaW5ZKSA/IG1pblkgOiAoeSA+IG1heFkpID8gbWF4WSA6IHksXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgT1JJR0lOX1BPSU5UID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmNvbnN0IE9SSUdJTl9TSVpFID0gT2JqZWN0LmZyZWV6ZSh7IHc6IDIwMCwgaDogMjAwIH0pO1xyXG5jb25zdCBMSU5FX0RJUiA9IFsnZScsICd3JywgJ3MnLCAnbiddO1xyXG5jb25zdCBQT0lOVF9ESVIgPSBbJ2UnLCAndycsICdzJywgJ24nLCAnc2UnLCAnc3cnLCAnbmUnLCAnbncnXTtcclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICgpID0+IHtcclxuICBjb25zdCBbaW1nUGF0aCwgc2V0SW1nUGF0aF0gPSB1c2VTdGF0ZTxzdHJpbmc+KElNR19QQVRIKTtcclxuICBjb25zdCBbaW1nU2l6ZSwgc2V0SW1nU2l6ZV0gPSB1c2VTdGF0ZTxTaXplPih7IHc6IDQxMiwgaDogNDEyIH0pO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgbGFzdE1vdXNlUG9zID0gbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuXHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gXHJcbiAgICAgIGFkZFBvaW50cyhwcmV2T2Zmc2V0LCBtb3VzZURpZmYsIDAsIDAsIGltZ1NpemUudyAtIGNyb3BCb3hTaXplLncsIGltZ1NpemUuaCAtIGNyb3BCb3hTaXplLmgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RvcFBhbiA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydFNldFNpemUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBkaXI6IERpclR5cGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueCArIGNyb3BCb3hTaXplLnc7XHJcbiAgICBjb25zdCB3TGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IHNMaW5lWSA9IG9mZnNldC55ICsgY3JvcEJveFNpemUuaDtcclxuICAgIGNvbnN0IG5MaW5lWSA9IG9mZnNldC55O1xyXG5cclxuICAgIGNvbnN0IHNldFNpemVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xyXG4gICAgICBzZXRCb3goY3VycmVudE1vdXNlUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRCb3ggPSAoY3VycmVudE1vdXNlUG9zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NFTCA9ICEod0xpbmVYICsgY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1dMID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBpc0Nyb3NzU0wgPSAhKG5MaW5lWSArIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NOTCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIGNvbnN0IGVYT2Zmc2V0ID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgd1hPZmZzZXQgPSB3TGluZVggLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHNZT2Zmc2V0ID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgbllPZmZzZXQgPSBuTGluZVkgLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcblxyXG4gICAgICBjb25zdCBlQ3Jvc3NXID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCB3Q3Jvc3NXID0gY3VycmVudE1vdXNlUG9zLnggLSB3TGluZVggLSBjcm9wQm94U2l6ZS53O1xyXG4gICAgICBjb25zdCBzQ3Jvc3NIID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBuQ3Jvc3NIID0gY3VycmVudE1vdXNlUG9zLnkgLSBuTGluZVkgLSBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICAgICAgY29uc3QgZVcgPSBjcm9wQm94U2l6ZS53ICsgY3VycmVudE1vdXNlUG9zLnggLSBlTGluZVg7XHJcbiAgICAgIGNvbnN0IHdXID0gY3JvcEJveFNpemUudyArIHdMaW5lWCAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBzSCA9IGNyb3BCb3hTaXplLmggKyBjdXJyZW50TW91c2VQb3MueSAtIHNMaW5lWTtcclxuICAgICAgY29uc3QgbkggPSBjcm9wQm94U2l6ZS5oICsgbkxpbmVZIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ253JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcFNldFNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXNoID0gKCkgPT4gWyd3JywgJ2gnXS5tYXAoKGRpcikgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdkYXNoJywgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldExpbmUgPSAoKSA9PiBMSU5FX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdsaW5lJywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRQb2ludHMgPSAoKSA9PiBQT0lOVF9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcblxyXG4gICAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBkaW1tZWQg7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSAvPlxyXG5cclxuICAgICAgICB7LyogY3JvcCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtjcm9wQm94U2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd2aWV3Qm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgICAgIHNyYz17aW1nUGF0aH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIHsvKiDqsqnsnpAg7JiB7JetICovfVxyXG4gICAgICAgICAge2dldERhc2goKX1cclxuXHJcbiAgICAgICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9zcycpfSAvPlxyXG5cclxuICAgICAgICAgIHsvKiDsu6TshJwg7JiB7JetICovfVxyXG4gICAgICAgICAgPHNwYW4gcmVmPXttb3ZlQm94UmVmfSBjbGFzc05hbWU9e2N4KCdtb3ZlQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFBhbn0gLz5cclxuXHJcbiAgICAgICAgICB7Lyog67O0642UIOyYgeyXrSAqL31cclxuICAgICAgICAgIHtnZXRMaW5lKCl9XHJcblxyXG4gICAgICAgICAgey8qIOygkCDsmIHsl60gKi99XHJcbiAgICAgICAgICB7Z2V0UG9pbnRzKCl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wOyJdLCJzb3VyY2VSb290IjoiIn0=