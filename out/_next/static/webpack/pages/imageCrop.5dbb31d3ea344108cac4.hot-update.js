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
        x: e.clientX,
        y: e.clientY
      };
      console.log(e.target);
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
        lineNumber: 206,
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
        lineNumber: 210,
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
        lineNumber: 214,
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
            lineNumber: 224,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: dimmedBoxRef,
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
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
            lineNumber: 250,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 11
        }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('cross')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('moveBox'),
          onMouseDown: startPan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }, _this), getLine(), getPoints()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 218,
    columnNumber: 5
  }, _this);
};

_s(ImageCrop, "Nadd0uXaTHnLuj8w/mnUyinlDyo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIk9SSUdJTl9QT0lOVCIsIk9iamVjdCIsImZyZWV6ZSIsIk9SSUdJTl9TSVpFIiwidyIsImgiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsIkltYWdlQ3JvcCIsInVzZVN0YXRlIiwiaW1nUGF0aCIsInNldEltZ1BhdGgiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJsYXN0TW91c2VQb3NSZWYiLCJ1c2VSZWYiLCJkaW1tZWRCb3hSZWYiLCJzdGFydFBhbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmVDcm9wQm94Iiwic3RvcFBhbiIsImN1cnJlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImxhc3RNb3VzZVBvcyIsImN1cnJlbnRNb3VzZVBvcyIsIm1vdXNlRGlmZiIsInByZXZPZmZzZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhcnRTZXRTaXplIiwiZGlyIiwiZUxpbmVYIiwid0xpbmVYIiwic0xpbmVZIiwibkxpbmVZIiwic2V0U2l6ZUNyb3BCb3giLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0Iiwic2V0Qm94IiwiaXNDcm9zc0VMIiwiaXNDcm9zc1dMIiwiaXNDcm9zc1NMIiwiaXNDcm9zc05MIiwiZVhPZmZzZXQiLCJ3WE9mZnNldCIsInNZT2Zmc2V0IiwibllPZmZzZXQiLCJlQ3Jvc3NXIiwid0Nyb3NzVyIsInNDcm9zc0giLCJuQ3Jvc3NIIiwiZVciLCJ3VyIsInNIIiwibkgiLCJzdG9wU2V0U2l6ZSIsImdldERhc2giLCJtYXAiLCJnZXRMaW5lIiwiZ2V0UG9pbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYO0FBRUEsSUFBTUMsUUFBUSxHQUFHLHdDQUFqQjtBQVlDOztBQUVELFNBQVNDLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQStCQyxFQUEvQixFQUEwQztBQUN4QyxTQUFPO0FBQUVDLEtBQUMsRUFBRUYsRUFBRSxDQUFDRSxDQUFILEdBQU9ELEVBQUUsQ0FBQ0MsQ0FBZjtBQUFrQkMsS0FBQyxFQUFFSCxFQUFFLENBQUNHLENBQUgsR0FBT0YsRUFBRSxDQUFDRTtBQUEvQixHQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsU0FBVCxDQUFtQkosRUFBbkIsRUFBOEJDLEVBQTlCLEVBQWtGO0FBQUEsTUFBekNJLElBQXlDLHVFQUFsQyxDQUFrQztBQUFBLE1BQS9CQyxJQUErQix1RUFBeEIsQ0FBd0I7QUFBQSxNQUFyQkMsSUFBcUIsdUVBQWQsQ0FBYztBQUFBLE1BQVZDLElBQVUsdUVBQUgsQ0FBRztBQUNoRixNQUFNTixDQUFDLEdBQUdGLEVBQUUsQ0FBQ0UsQ0FBSCxHQUFPRCxFQUFFLENBQUNDLENBQXBCO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHSCxFQUFFLENBQUNHLENBQUgsR0FBT0YsRUFBRSxDQUFDRSxDQUFwQjtBQUNBLFNBQU87QUFDTEQsS0FBQyxFQUFHQSxDQUFDLEdBQUdHLElBQUwsR0FBYUEsSUFBYixHQUFxQkgsQ0FBQyxHQUFHSyxJQUFMLEdBQWFBLElBQWIsR0FBb0JMLENBRHRDO0FBRUxDLEtBQUMsRUFBR0EsQ0FBQyxHQUFHRyxJQUFMLEdBQWFBLElBQWIsR0FBcUJILENBQUMsR0FBR0ssSUFBTCxHQUFhQSxJQUFiLEdBQW9CTDtBQUZ0QyxHQUFQO0FBSUQ7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QUNSLENBQWIsT0FEQTtBQUVMaUUsb0JBQU0sWUFBS3pELE9BQU8sQ0FBQ1AsQ0FBYixPQUZEO0FBR0xpRSx1QkFBUyx3QkFBaUJ4RCxNQUFNLENBQUNyQixDQUF4Qiw2QkFBNENxQixNQUFNLENBQUNwQixDQUFuRDtBQUhKO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsRUF1QkdzRSxPQUFPLEVBdkJWLGVBMEJFO0FBQU0sbUJBQVMsRUFBRS9FLEVBQUUsQ0FBQyxPQUFEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGLGVBNkJFO0FBQU0sbUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbkI7QUFBZ0MscUJBQVcsRUFBRW9DO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLEVBZ0NHNkMsT0FBTyxFQWhDVixFQW1DR0MsU0FBUyxFQW5DWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0RELENBbFBEOztHQUFNM0QsUzs7S0FBQUEsUztBQW9QU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjVkYmIzMWQzZWEzNDQxMDhjYWM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IElNR19QQVRIID0gJy9uZXh0anMvaW1nL2NodW5TaWsvaW1nQ2h1blNpa0ZhY2UucG5nJztcclxuXHJcbnR5cGUgRGlyVHlwZSA9ICdlJyB8ICd3JyB8ICdzJyB8ICduJyB8ICdzZScgfCAnc3cnIHwgJ25lJyB8ICdudyc7XHJcblxyXG5pbnRlcmZhY2UgU2l6ZSB7XHJcbiAgdzogbnVtYmVyO1xyXG4gIGg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQsIG1pblggPSAwLCBtaW5ZID0gMCwgbWF4WCA9IDAsICBtYXhZID0gMCkge1xyXG4gIGNvbnN0IHggPSBwMS54ICsgcDIueDtcclxuICBjb25zdCB5ID0gcDEueSArIHAyLnk7XHJcbiAgcmV0dXJuIHsgXHJcbiAgICB4OiAoeCA8IG1pblgpID8gbWluWCA6ICh4ID4gbWF4WCkgPyBtYXhYIDogeCwgXHJcbiAgICB5OiAoeSA8IG1pblkpID8gbWluWSA6ICh5ID4gbWF4WSkgPyBtYXhZIDogeSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBPUklHSU5fUE9JTlQgPSBPYmplY3QuZnJlZXplKHsgeDogMCwgeTogMCB9KTtcclxuY29uc3QgT1JJR0lOX1NJWkUgPSBPYmplY3QuZnJlZXplKHsgdzogMjAwLCBoOiAyMDAgfSk7XHJcbmNvbnN0IExJTkVfRElSID0gWydlJywgJ3cnLCAncycsICduJ107XHJcbmNvbnN0IFBPSU5UX0RJUiA9IFsnZScsICd3JywgJ3MnLCAnbicsICdzZScsICdzdycsICduZScsICdudyddO1xyXG5cclxuY29uc3QgSW1hZ2VDcm9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbWdQYXRoLCBzZXRJbWdQYXRoXSA9IHVzZVN0YXRlPHN0cmluZz4oSU1HX1BBVEgpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KHsgdzogNDEyLCBoOiA0MTIgfSk7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG4gIGNvbnN0IFtjcm9wQm94U2l6ZSwgc2V0Q3JvcEJveFNpemVdID0gdXNlU3RhdGU8U2l6ZT4oT1JJR0lOX1NJWkUpO1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuICBjb25zdCBkaW1tZWRCb3hSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vdmVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcblxyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBzZXRPZmZzZXQoKHByZXZPZmZzZXQpID0+IFxyXG4gICAgICBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmLCAwLCAwLCBpbWdTaXplLncgLSBjcm9wQm94U2l6ZS53LCBpbWdTaXplLmggLSBjcm9wQm94U2l6ZS5oKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BQYW4gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRTaXplID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PiwgZGlyOiBEaXJUeXBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZUxpbmVYID0gb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53O1xyXG4gICAgY29uc3Qgd0xpbmVYID0gb2Zmc2V0Lng7XHJcbiAgICBjb25zdCBzTGluZVkgPSBvZmZzZXQueSArIGNyb3BCb3hTaXplLmg7XHJcbiAgICBjb25zdCBuTGluZVkgPSBvZmZzZXQueTtcclxuXHJcbiAgICBjb25zdCBzZXRTaXplQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgICBzZXRCb3goY3VycmVudE1vdXNlUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRCb3ggPSAoY3VycmVudE1vdXNlUG9zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NFTCA9ICEod0xpbmVYICsgY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1dMID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBpc0Nyb3NzU0wgPSAhKG5MaW5lWSArIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NOTCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIGNvbnN0IGVYT2Zmc2V0ID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgd1hPZmZzZXQgPSB3TGluZVggLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHNZT2Zmc2V0ID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgbllPZmZzZXQgPSBuTGluZVkgLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcblxyXG4gICAgICBjb25zdCBlQ3Jvc3NXID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCB3Q3Jvc3NXID0gY3VycmVudE1vdXNlUG9zLnggLSB3TGluZVggLSBjcm9wQm94U2l6ZS53O1xyXG4gICAgICBjb25zdCBzQ3Jvc3NIID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBuQ3Jvc3NIID0gY3VycmVudE1vdXNlUG9zLnkgLSBuTGluZVkgLSBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICAgICAgY29uc3QgZVcgPSBjcm9wQm94U2l6ZS53ICsgY3VycmVudE1vdXNlUG9zLnggLSBlTGluZVg7XHJcbiAgICAgIGNvbnN0IHdXID0gY3JvcEJveFNpemUudyArIHdMaW5lWCAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBzSCA9IGNyb3BCb3hTaXplLmggKyBjdXJyZW50TW91c2VQb3MueSAtIHNMaW5lWTtcclxuICAgICAgY29uc3QgbkggPSBjcm9wQm94U2l6ZS5oICsgbkxpbmVZIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ253JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcFNldFNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXNoID0gKCkgPT4gWyd3JywgJ2gnXS5tYXAoKGRpcikgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdkYXNoJywgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldExpbmUgPSAoKSA9PiBMSU5FX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdsaW5lJywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRQb2ludHMgPSAoKSA9PiBQT0lOVF9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcblxyXG4gICAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBkaW1tZWQg7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8ZGl2IHJlZj17ZGltbWVkQm94UmVmfSBjbGFzc05hbWU9e2N4KCdkaW1tZWRCb3gnKX0gLz5cclxuXHJcbiAgICAgICAgey8qIGNyb3Ag7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCdjcm9wQm94Jyl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7Y3JvcEJveFNpemUud31weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7Y3JvcEJveFNpemUuaH1weGAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtvZmZzZXQueH1weCkgdHJhbnNsYXRlWSgke29mZnNldC55fXB4KWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgndmlld0JveCcpfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ3ZpZXdJbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e2ltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtvZmZzZXQueH1weCkgdHJhbnNsYXRlWSgtJHtvZmZzZXQueX1weClgXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICB7Lyog6rKp7J6QIOyYgeyXrSAqL31cclxuICAgICAgICAgIHtnZXREYXNoKCl9XHJcblxyXG4gICAgICAgICAgey8qIOykkeyVmSDsi63snpDqsIAg7JiB7JetICovfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnY3Jvc3MnKX0gLz5cclxuXHJcbiAgICAgICAgICB7Lyog7Luk7IScIOyYgeyXrSAqL31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ21vdmVCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0UGFufSAvPlxyXG5cclxuICAgICAgICAgIHsvKiDrs7TrjZQg7JiB7JetICovfVxyXG4gICAgICAgICAge2dldExpbmUoKX1cclxuXHJcbiAgICAgICAgICB7Lyog7KCQIOyYgeyXrSAqL31cclxuICAgICAgICAgIHtnZXRQb2ludHMoKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyb3A7Il0sInNvdXJjZVJvb3QiOiIifQ==