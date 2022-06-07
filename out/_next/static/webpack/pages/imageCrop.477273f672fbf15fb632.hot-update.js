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
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    };
  };

  var moveCropBox = function moveCropBox(e) {
    var lastMousePos = lastMousePosRef.current;
    var currentMousePos = {
      x: e.offsetX,
      y: e.offsetY
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
        x: e.clientX,
        y: e.clientY
      };
      console.log(currentMousePos, cropBoxSize);
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
        lineNumber: 207,
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
        lineNumber: 211,
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
        lineNumber: 215,
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
            lineNumber: 225,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
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
            lineNumber: 251,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('cross')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('moveBox'),
          onMouseDown: startPan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, _this), getLine(), getPoints()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 219,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIk9SSUdJTl9QT0lOVCIsIk9iamVjdCIsImZyZWV6ZSIsIk9SSUdJTl9TSVpFIiwidyIsImgiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsIkltYWdlQ3JvcCIsInVzZVN0YXRlIiwiaW1nUGF0aCIsInNldEltZ1BhdGgiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJsYXN0TW91c2VQb3NSZWYiLCJ1c2VSZWYiLCJzdGFydFBhbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmVDcm9wQm94Iiwic3RvcFBhbiIsImN1cnJlbnQiLCJuYXRpdmVFdmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldFNpemUiLCJkaXIiLCJlTGluZVgiLCJ3TGluZVgiLCJzTGluZVkiLCJuTGluZVkiLCJzZXRTaXplQ3JvcEJveCIsImNsaWVudFgiLCJjbGllbnRZIiwiY29uc29sZSIsImxvZyIsInNldEJveCIsImlzQ3Jvc3NFTCIsImlzQ3Jvc3NXTCIsImlzQ3Jvc3NTTCIsImlzQ3Jvc3NOTCIsImVYT2Zmc2V0Iiwid1hPZmZzZXQiLCJzWU9mZnNldCIsIm5ZT2Zmc2V0IiwiZUNyb3NzVyIsIndDcm9zc1ciLCJzQ3Jvc3NIIiwibkNyb3NzSCIsImVXIiwid1ciLCJzSCIsIm5IIiwic3RvcFNldFNpemUiLCJnZXREYXNoIiwibWFwIiwiZ2V0TGluZSIsImdldFBvaW50cyIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDtBQUVBLElBQU1DLFFBQVEsR0FBRyx3Q0FBakI7QUFZQzs7QUFFRCxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFQyxLQUFDLEVBQUVGLEVBQUUsQ0FBQ0UsQ0FBSCxHQUFPRCxFQUFFLENBQUNDLENBQWY7QUFBa0JDLEtBQUMsRUFBRUgsRUFBRSxDQUFDRyxDQUFILEdBQU9GLEVBQUUsQ0FBQ0U7QUFBL0IsR0FBUDtBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJKLEVBQW5CLEVBQThCQyxFQUE5QixFQUFrRjtBQUFBLE1BQXpDSSxJQUF5Qyx1RUFBbEMsQ0FBa0M7QUFBQSxNQUEvQkMsSUFBK0IsdUVBQXhCLENBQXdCO0FBQUEsTUFBckJDLElBQXFCLHVFQUFkLENBQWM7QUFBQSxNQUFWQyxJQUFVLHVFQUFILENBQUc7QUFDaEYsTUFBTU4sQ0FBQyxHQUFHRixFQUFFLENBQUNFLENBQUgsR0FBT0QsRUFBRSxDQUFDQyxDQUFwQjtBQUNBLE1BQU1DLENBQUMsR0FBR0gsRUFBRSxDQUFDRyxDQUFILEdBQU9GLEVBQUUsQ0FBQ0UsQ0FBcEI7QUFDQSxTQUFPO0FBQ0xELEtBQUMsRUFBR0EsQ0FBQyxHQUFHRyxJQUFMLEdBQWFBLElBQWIsR0FBcUJILENBQUMsR0FBR0ssSUFBTCxHQUFhQSxJQUFiLEdBQW9CTCxDQUR0QztBQUVMQyxLQUFDLEVBQUdBLENBQUMsR0FBR0csSUFBTCxHQUFhQSxJQUFiLEdBQXFCSCxDQUFDLEdBQUdLLElBQUwsR0FBYUEsSUFBYixHQUFvQkw7QUFGdEMs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LFNBQUQsQ0FBbkI7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBRGY7QUFFRSxlQUFHLEVBQUV5QixPQUZQO0FBR0UsaUJBQUssRUFBRTtBQUNMMkQsbUJBQUssWUFBS3pELE9BQU8sQ0FBQ1IsQ0FBYixPQURBO0FBRUxrRSxvQkFBTSxZQUFLMUQsT0FBTyxDQUFDUCxDQUFiLE9BRkQ7QUFHTGtFLHVCQUFTLHdCQUFpQnpELE1BQU0sQ0FBQ3JCLENBQXhCLDZCQUE0Q3FCLE1BQU0sQ0FBQ3BCLENBQW5EO0FBSEo7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixFQXVCR3VFLE9BQU8sRUF2QlYsZUEwQkU7QUFBTSxtQkFBUyxFQUFFaEYsRUFBRSxDQUFDLE9BQUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkYsZUE2QkU7QUFBTSxtQkFBUyxFQUFFQSxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFnQyxxQkFBVyxFQUFFbUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkYsRUFnQ0crQyxPQUFPLEVBaENWLEVBbUNHQyxTQUFTLEVBbkNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErREQsQ0FuUEQ7O0dBQU01RCxTOztLQUFBQSxTO0FBcVBTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuNDc3MjczZjY3MmZiZjE1ZmI2MzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgSU1HX1BBVEggPSAnL25leHRqcy9pbWcvY2h1blNpay9pbWdDaHVuU2lrRmFjZS5wbmcnO1xyXG5cclxudHlwZSBEaXJUeXBlID0gJ2UnIHwgJ3cnIHwgJ3MnIHwgJ24nIHwgJ3NlJyB8ICdzdycgfCAnbmUnIHwgJ253JztcclxuXHJcbmludGVyZmFjZSBTaXplIHtcclxuICB3OiBudW1iZXI7XHJcbiAgaDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCwgbWluWCA9IDAsIG1pblkgPSAwLCBtYXhYID0gMCwgIG1heFkgPSAwKSB7XHJcbiAgY29uc3QgeCA9IHAxLnggKyBwMi54O1xyXG4gIGNvbnN0IHkgPSBwMS55ICsgcDIueTtcclxuICByZXR1cm4geyBcclxuICAgIHg6ICh4IDwgbWluWCkgPyBtaW5YIDogKHggPiBtYXhYKSA/IG1heFggOiB4LCBcclxuICAgIHk6ICh5IDwgbWluWSkgPyBtaW5ZIDogKHkgPiBtYXhZKSA/IG1heFkgOiB5LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IE9SSUdJTl9QT0lOVCA9IE9iamVjdC5mcmVlemUoeyB4OiAwLCB5OiAwIH0pO1xyXG5jb25zdCBPUklHSU5fU0laRSA9IE9iamVjdC5mcmVlemUoeyB3OiAyMDAsIGg6IDIwMCB9KTtcclxuY29uc3QgTElORV9ESVIgPSBbJ2UnLCAndycsICdzJywgJ24nXTtcclxuY29uc3QgUE9JTlRfRElSID0gWydlJywgJ3cnLCAncycsICduJywgJ3NlJywgJ3N3JywgJ25lJywgJ253J107XHJcblxyXG5jb25zdCBJbWFnZUNyb3AgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltZ1BhdGgsIHNldEltZ1BhdGhdID0gdXNlU3RhdGU8c3RyaW5nPihJTUdfUEFUSCk7XHJcbiAgY29uc3QgW2ltZ1NpemUsIHNldEltZ1NpemVdID0gdXNlU3RhdGU8U2l6ZT4oeyB3OiA0MTIsIGg6IDQxMiB9KTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5uYXRpdmVFdmVudC5vZmZzZXRYLCB5OiBlLm5hdGl2ZUV2ZW50Lm9mZnNldFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vdmVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xyXG4gICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcblxyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBzZXRPZmZzZXQoKHByZXZPZmZzZXQpID0+IFxyXG4gICAgICBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmLCAwLCAwLCBpbWdTaXplLncgLSBjcm9wQm94U2l6ZS53LCBpbWdTaXplLmggLSBjcm9wQm94U2l6ZS5oKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BQYW4gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRTaXplID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PiwgZGlyOiBEaXJUeXBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZUxpbmVYID0gb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53O1xyXG4gICAgY29uc3Qgd0xpbmVYID0gb2Zmc2V0Lng7XHJcbiAgICBjb25zdCBzTGluZVkgPSBvZmZzZXQueSArIGNyb3BCb3hTaXplLmg7XHJcbiAgICBjb25zdCBuTGluZVkgPSBvZmZzZXQueTtcclxuXHJcbiAgICBjb25zdCBzZXRTaXplQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudE1vdXNlUG9zLCBjcm9wQm94U2l6ZSk7XHJcbiAgICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gY3VycmVudE1vdXNlUG9zO1xyXG4gICAgICBzZXRCb3goY3VycmVudE1vdXNlUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRCb3ggPSAoY3VycmVudE1vdXNlUG9zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NFTCA9ICEod0xpbmVYICsgY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1dMID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBpc0Nyb3NzU0wgPSAhKG5MaW5lWSArIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NOTCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIGNvbnN0IGVYT2Zmc2V0ID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgd1hPZmZzZXQgPSB3TGluZVggLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHNZT2Zmc2V0ID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgbllPZmZzZXQgPSBuTGluZVkgLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcblxyXG4gICAgICBjb25zdCBlQ3Jvc3NXID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCB3Q3Jvc3NXID0gY3VycmVudE1vdXNlUG9zLnggLSB3TGluZVggLSBjcm9wQm94U2l6ZS53O1xyXG4gICAgICBjb25zdCBzQ3Jvc3NIID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBuQ3Jvc3NIID0gY3VycmVudE1vdXNlUG9zLnkgLSBuTGluZVkgLSBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICAgICAgY29uc3QgZVcgPSBjcm9wQm94U2l6ZS53ICsgY3VycmVudE1vdXNlUG9zLnggLSBlTGluZVg7XHJcbiAgICAgIGNvbnN0IHdXID0gY3JvcEJveFNpemUudyArIHdMaW5lWCAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBzSCA9IGNyb3BCb3hTaXplLmggKyBjdXJyZW50TW91c2VQb3MueSAtIHNMaW5lWTtcclxuICAgICAgY29uc3QgbkggPSBjcm9wQm94U2l6ZS5oICsgbkxpbmVZIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ253JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcFNldFNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERhc2ggPSAoKSA9PiBbJ3cnLCAnaCddLm1hcCgoZGlyKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2Rhc2gnLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0TGluZSA9ICgpID0+IExJTkVfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2xpbmUnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldFBvaW50cyA9ICgpID0+IFBPSU5UX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdwb2ludCcsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0U2l6ZShlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfT5cclxuXHJcbiAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e2ltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIGRpbW1lZCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZGltbWVkQm94Jyl9IC8+XHJcblxyXG4gICAgICAgIHsvKiBjcm9wIOyYgeyXrSDrsJXsiqQgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgnY3JvcEJveCcpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGAke2Nyb3BCb3hTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke2Nyb3BCb3hTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoJHtvZmZzZXQueX1weClgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICB7Lyog7J2066+47KeAIOyYgeyXrSAqL31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3ZpZXdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCd2aWV3SW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoLSR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgey8qIOqyqeyekCDsmIHsl60gKi99XHJcbiAgICAgICAgICB7Z2V0RGFzaCgpfVxyXG5cclxuICAgICAgICAgIHsvKiDspJHslZkg7Iut7J6Q6rCAIOyYgeyXrSAqL31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3NzJyl9IC8+XHJcblxyXG4gICAgICAgICAgey8qIOy7pOyEnCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdtb3ZlQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFBhbn0gLz5cclxuXHJcbiAgICAgICAgICB7Lyog67O0642UIOyYgeyXrSAqL31cclxuICAgICAgICAgIHtnZXRMaW5lKCl9XHJcblxyXG4gICAgICAgICAgey8qIOygkCDsmIHsl60gKi99XHJcbiAgICAgICAgICB7Z2V0UG9pbnRzKCl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wOyJdLCJzb3VyY2VSb290IjoiIn0=