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
  var dimmedBoxRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var moveBoxRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

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
    var eLineX = offset.x + cropBoxSize.w;
    var wLineX = offset.x;
    var sLineY = offset.y + cropBoxSize.h;
    var nLineY = offset.y;

    var setSizeCropBox = function setSizeCropBox(e) {
      var currentMousePos = {
        x: e.offsetX,
        y: e.offsetY
      };
      console.log(e.target, moveBoxRef.current);
      if (e.target !== dimmedBoxRef.current) return;
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
        ref: dimmedBoxRef,
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
          ref: moveBoxRef,
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

_s(ImageCrop, "VVFZQ1R5MPieVu+yLId4SRg6n5A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIk9SSUdJTl9QT0lOVCIsIk9iamVjdCIsImZyZWV6ZSIsIk9SSUdJTl9TSVpFIiwidyIsImgiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsIkltYWdlQ3JvcCIsInVzZVN0YXRlIiwiaW1nUGF0aCIsInNldEltZ1BhdGgiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJsYXN0TW91c2VQb3NSZWYiLCJ1c2VSZWYiLCJkaW1tZWRCb3hSZWYiLCJtb3ZlQm94UmVmIiwic3RhcnRQYW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3ZlQ3JvcEJveCIsInN0b3BQYW4iLCJjdXJyZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXJ0U2V0U2l6ZSIsImRpciIsImVMaW5lWCIsIndMaW5lWCIsInNMaW5lWSIsIm5MaW5lWSIsInNldFNpemVDcm9wQm94Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0Iiwic2V0Qm94IiwiaXNDcm9zc0VMIiwiaXNDcm9zc1dMIiwiaXNDcm9zc1NMIiwiaXNDcm9zc05MIiwiZVhPZmZzZXQiLCJ3WE9mZnNldCIsInNZT2Zmc2V0IiwibllPZmZzZXQiLCJlQ3Jvc3NXIiwid0Nyb3NzVyIsInNDcm9zc0giLCJuQ3Jvc3NIIiwiZVciLCJ3VyIsInNIIiwibkgiLCJzdG9wU2V0U2l6ZSIsImdldERhc2giLCJtYXAiLCJnZXRMaW5lIiwiZ2V0UG9pbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYO0FBRUEsSUFBTUMsUUFBUSxHQUFHLHdDQUFqQjtBQVlDOztBQUVELFNBQVNDLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQStCQyxFQUEvQixFQUEwQztBQUN4QyxTQUFPO0FBQUVDLEtBQUMsRUFBRUYsRUFBRSxDQUFDRSxDQUFILEdBQU9ELEVBQUUsQ0FBQ0MsQ0FBZjtBQUFrQkMsS0FBQyxFQUFFSCxFQUFFLENBQUNHLENBQUgsR0FBT0YsRUFBRSxDQUFDRTtBQUEvQixHQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsU0FBVCxDQUFtQkosRUFBbkIsRUFBOEJDLEVBQTlCLEVBQWtGO0FBQUEsTUFBekNJLElBQXlDLHVFQUFsQyxDQUFrQztBQUFBLE1BQS9CQyxJQUErQix1RUFBeEIsQ0FBd0I7QUFBQSxNQUFyQkMsSUFBcUIsdUVBQWQsQ0FBYztBQUFBLE1BQVZDLElBQVUsdUVBQUgsQ0FBRztBQUNoRixNQUFNTixDQUFDLEdBQUdGLEVBQUUsQ0FBQ0UsQ0FBSCxHQUFPRCxFQUFFLENBQUNDLENBQXBCO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHSCxFQUFFLENBQUNHLENBQUgsR0FBT0YsRUFBRSxDQUFDRSxDQUFwQjtBQUNBLFNBQU87QUFDTEQsS0FBQyxFQUFHQSxDQUFDLEdBQUdHLElBQUwsR0FBYUEsSUFBYixHQUFxQkgsQ0FBQyxHQUFHSyxJQUFMLEdBQWFBLElBQWIsR0FBb0JMLENBRHRDO0FBRUxDLEtBQUMsRUFBR0EsQ0FBQyxHQUFHRyxJQUFMLEdBQWFBLElBQWIsR0FBcUJILENBQUMsR0FBR0ssSUFBTCxH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TSxtQkFBUyxFQUFFVCxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FEZjtBQUVFLGVBQUcsRUFBRXlCLE9BRlA7QUFHRSxpQkFBSyxFQUFFO0FBQ0w2RCxtQkFBSyxZQUFLM0QsT0FBTyxDQUFDUixDQUFiLE9BREE7QUFFTG9FLG9CQUFNLFlBQUs1RCxPQUFPLENBQUNQLENBQWIsT0FGRDtBQUdMb0UsdUJBQVMsd0JBQWlCM0QsTUFBTSxDQUFDckIsQ0FBeEIsNkJBQTRDcUIsTUFBTSxDQUFDcEIsQ0FBbkQ7QUFISjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLEVBdUJHeUUsT0FBTyxFQXZCVixlQTBCRTtBQUFNLG1CQUFTLEVBQUVsRixFQUFFLENBQUMsT0FBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRixlQTZCRTtBQUFNLGFBQUcsRUFBRW9DLFVBQVg7QUFBdUIsbUJBQVMsRUFBRXBDLEVBQUUsQ0FBQyxTQUFELENBQXBDO0FBQWlELHFCQUFXLEVBQUVxQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixFQWdDRytDLE9BQU8sRUFoQ1YsRUFtQ0dDLFNBQVMsRUFuQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStERCxDQW5QRDs7R0FBTTlELFM7O0tBQUFBLFM7QUFxUFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC45MDE1N2M0N2M4NjAzYTk2NGYxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBJTUdfUEFUSCA9ICcvbmV4dGpzL2ltZy9jaHVuU2lrL2ltZ0NodW5TaWtGYWNlLnBuZyc7XHJcblxyXG50eXBlIERpclR5cGUgPSAnZScgfCAndycgfCAncycgfCAnbicgfCAnc2UnIHwgJ3N3JyB8ICduZScgfCAnbncnO1xyXG5cclxuaW50ZXJmYWNlIFNpemUge1xyXG4gIHc6IG51bWJlcjtcclxuICBoOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50LCBtaW5YID0gMCwgbWluWSA9IDAsIG1heFggPSAwLCAgbWF4WSA9IDApIHtcclxuICBjb25zdCB4ID0gcDEueCArIHAyLng7XHJcbiAgY29uc3QgeSA9IHAxLnkgKyBwMi55O1xyXG4gIHJldHVybiB7IFxyXG4gICAgeDogKHggPCBtaW5YKSA/IG1pblggOiAoeCA+IG1heFgpID8gbWF4WCA6IHgsIFxyXG4gICAgeTogKHkgPCBtaW5ZKSA/IG1pblkgOiAoeSA+IG1heFkpID8gbWF4WSA6IHksXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgT1JJR0lOX1BPSU5UID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmNvbnN0IE9SSUdJTl9TSVpFID0gT2JqZWN0LmZyZWV6ZSh7IHc6IDIwMCwgaDogMjAwIH0pO1xyXG5jb25zdCBMSU5FX0RJUiA9IFsnZScsICd3JywgJ3MnLCAnbiddO1xyXG5jb25zdCBQT0lOVF9ESVIgPSBbJ2UnLCAndycsICdzJywgJ24nLCAnc2UnLCAnc3cnLCAnbmUnLCAnbncnXTtcclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICgpID0+IHtcclxuICBjb25zdCBbaW1nUGF0aCwgc2V0SW1nUGF0aF0gPSB1c2VTdGF0ZTxzdHJpbmc+KElNR19QQVRIKTtcclxuICBjb25zdCBbaW1nU2l6ZSwgc2V0SW1nU2l6ZV0gPSB1c2VTdGF0ZTxTaXplPih7IHc6IDQxMiwgaDogNDEyIH0pO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcbiAgY29uc3QgZGltbWVkQm94UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBtb3ZlQm94UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb3ZlQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG5cclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gY3VycmVudE1vdXNlUG9zO1xyXG4gICAgc2V0T2Zmc2V0KChwcmV2T2Zmc2V0KSA9PiBcclxuICAgICAgYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZiwgMCwgMCwgaW1nU2l6ZS53IC0gY3JvcEJveFNpemUudywgaW1nU2l6ZS5oIC0gY3JvcEJveFNpemUuaClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9wUGFuID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0U2l6ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGRpcjogRGlyVHlwZSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGVMaW5lWCA9IG9mZnNldC54ICsgY3JvcEJveFNpemUudztcclxuICAgIGNvbnN0IHdMaW5lWCA9IG9mZnNldC54O1xyXG4gICAgY29uc3Qgc0xpbmVZID0gb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oO1xyXG4gICAgY29uc3QgbkxpbmVZID0gb2Zmc2V0Lnk7XHJcblxyXG4gICAgY29uc3Qgc2V0U2l6ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LCBtb3ZlQm94UmVmLmN1cnJlbnQpO1xyXG4gICAgICBpZiggZS50YXJnZXQgIT09IGRpbW1lZEJveFJlZi5jdXJyZW50KSByZXR1cm47XHJcbiAgICAgIHNldEJveChjdXJyZW50TW91c2VQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEJveCA9IChjdXJyZW50TW91c2VQb3MpID0+IHtcclxuICAgICAgY29uc3QgaXNDcm9zc0VMID0gISh3TGluZVggKyBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzV0wgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NTTCA9ICEobkxpbmVZICsgY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgaXNDcm9zc05MID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgY29uc3QgZVhPZmZzZXQgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCB3WE9mZnNldCA9IHdMaW5lWCAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgc1lPZmZzZXQgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBuWU9mZnNldCA9IG5MaW5lWSAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuXHJcbiAgICAgIGNvbnN0IGVDcm9zc1cgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHdDcm9zc1cgPSBjdXJyZW50TW91c2VQb3MueCAtIHdMaW5lWCAtIGNyb3BCb3hTaXplLnc7XHJcbiAgICAgIGNvbnN0IHNDcm9zc0ggPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcbiAgICAgIGNvbnN0IG5Dcm9zc0ggPSBjdXJyZW50TW91c2VQb3MueSAtIG5MaW5lWSAtIGNyb3BCb3hTaXplLmg7XHJcblxyXG4gICAgICBjb25zdCBlVyA9IGNyb3BCb3hTaXplLncgKyBjdXJyZW50TW91c2VQb3MueCAtIGVMaW5lWDtcclxuICAgICAgY29uc3Qgd1cgPSBjcm9wQm94U2l6ZS53ICsgd0xpbmVYIC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHNIID0gY3JvcEJveFNpemUuaCArIGN1cnJlbnRNb3VzZVBvcy55IC0gc0xpbmVZO1xyXG4gICAgICBjb25zdCBuSCA9IGNyb3BCb3hTaXplLmggKyBuTGluZVkgLSBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIHN3aXRjaCAoZGlyKSB7XHJcbiAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25lJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbncnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9wU2V0U2l6ZSA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRTaXplKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERhc2ggPSAoKSA9PiBbJ3cnLCAnaCddLm1hcCgoZGlyKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2Rhc2gnLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0TGluZSA9ICgpID0+IExJTkVfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2xpbmUnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldFBvaW50cyA9ICgpID0+IFBPSU5UX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdwb2ludCcsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0U2l6ZShlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfT5cclxuXHJcbiAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e2ltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIGRpbW1lZCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxkaXYgcmVmPXtkaW1tZWRCb3hSZWZ9IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSAvPlxyXG5cclxuICAgICAgICB7LyogY3JvcCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtjcm9wQm94U2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd2aWV3Qm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgICAgIHNyYz17aW1nUGF0aH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIHsvKiDqsqnsnpAg7JiB7JetICovfVxyXG4gICAgICAgICAge2dldERhc2goKX1cclxuXHJcbiAgICAgICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9zcycpfSAvPlxyXG5cclxuICAgICAgICAgIHsvKiDsu6TshJwg7JiB7JetICovfVxyXG4gICAgICAgICAgPHNwYW4gcmVmPXttb3ZlQm94UmVmfSBjbGFzc05hbWU9e2N4KCdtb3ZlQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFBhbn0gLz5cclxuXHJcbiAgICAgICAgICB7Lyog67O0642UIOyYgeyXrSAqL31cclxuICAgICAgICAgIHtnZXRMaW5lKCl9XHJcblxyXG4gICAgICAgICAgey8qIOygkCDsmIHsl60gKi99XHJcbiAgICAgICAgICB7Z2V0UG9pbnRzKCl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wOyJdLCJzb3VyY2VSb290IjoiIn0=