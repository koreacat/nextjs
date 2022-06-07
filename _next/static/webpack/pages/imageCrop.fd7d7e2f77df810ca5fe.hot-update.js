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


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\CropBox.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
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

var CropBox = function CropBox(_ref) {
  _s();

  var wrapRef = _ref.wrapRef,
      imgPath = _ref.imgPath,
      imgSize = _ref.imgSize;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(ORIGIN_POINT),
      offset = _useState[0],
      setOffset = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(ORIGIN_SIZE),
      cropBoxSize = _useState2[0],
      setCropBoxSize = _useState2[1];

  var lastMousePosRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(ORIGIN_POINT);

  var getEdgeWidth = function getEdgeWidth() {
    return imgSize.w - cropBoxSize.w;
  };

  var getEdgeHeight = function getEdgeHeight() {
    return imgSize.h - cropBoxSize.h;
  };

  var getMaxHeight = function getMaxHeight() {
    return imgSize.h;
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

  var startSetSize = function startSetSize(e, dir) {
    e.preventDefault();
    var eLineX = offset.x + cropBoxSize.w;
    var wLineX = offset.x;
    var sLineY = offset.y + cropBoxSize.h;
    var nLineY = offset.y;

    var setSizeCropBox = function setSizeCropBox(e) {
      var x = e.pageX - wrapRef.current.offsetLeft;
      var y = e.pageY - wrapRef.current.offsetTop;
      setBox({
        x: x < 0 ? 0 : x > imgSize.w ? imgSize.w : x,
        y: y < 0 ? 0 : y > imgSize.h ? imgSize.h : y
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
        lineNumber: 210,
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
        lineNumber: 214,
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
        lineNumber: 218,
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
        src: imgPath,
        style: {
          width: "".concat(imgSize.w, "px"),
          height: "".concat(imgSize.h, "px"),
          transform: "translateX(-".concat(offset.x, "px) translateY(-").concat(offset.y, "px)")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, _this), getLine(), getPoints()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 222,
    columnNumber: 5
  }, _this);
};

_s(CropBox, "eaXc3jIm/RrQRrcFJjpRw6V+XmE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJPUklHSU5fUE9JTlQiLCJPYmplY3QiLCJmcmVlemUiLCJ4IiwieSIsIk9SSUdJTl9TSVpFIiwidyIsImgiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIkNyb3BCb3giLCJ3cmFwUmVmIiwiaW1nUGF0aCIsImltZ1NpemUiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJsYXN0TW91c2VQb3NSZWYiLCJ1c2VSZWYiLCJnZXRFZGdlV2lkdGgiLCJnZXRFZGdlSGVpZ2h0IiwiZ2V0TWF4SGVpZ2h0Iiwic3RhcnRQYW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3ZlQ3JvcEJveCIsInN0b3BQYW4iLCJjdXJyZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXJ0U2V0U2l6ZSIsImRpciIsImVMaW5lWCIsIndMaW5lWCIsInNMaW5lWSIsIm5MaW5lWSIsInNldFNpemVDcm9wQm94IiwicGFnZVgiLCJvZmZzZXRMZWZ0IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJzZXRCb3giLCJpc0Nyb3NzRUwiLCJpc0Nyb3NzV0wiLCJpc0Nyb3NzU0wiLCJpc0Nyb3NzTkwiLCJlWE9mZnNldCIsIndYT2Zmc2V0Iiwic1lPZmZzZXQiLCJuWU9mZnNldCIsImVDcm9zc1ciLCJ3Q3Jvc3NXIiwic0Nyb3NzSCIsIm5Dcm9zc0giLCJlVyIsIndXIiwic0giLCJuSCIsInN0b3BTZXRTaXplIiwiZ2V0RGFzaCIsIm1hcCIsImdldExpbmUiLCJnZXRQb2ludHMiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7QUFFQSxJQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVDLEdBQUMsRUFBRSxDQUFMO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQWQsQ0FBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUdKLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVJLEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBQWQsQ0FBcEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsSUFBakMsRUFBdUMsSUFBdkMsQ0FBbEI7QUFLQzs7QUFFRCxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFVCxLQUFDLEVBQUVRLEVBQUUsQ0FBQ1IsQ0FBSCxHQUFPUyxFQUFFLENBQUNULENBQWY7QUFBa0JDLEtBQUMsRUFBRU8sRUFBRSxDQUFDUCxDQUFILEdBQU9RLEVBQUUsQ0FBQ1I7QUFBL0IsR0FBUDtBQUNEOztBQUVELFNBQVNTLFNBQVQsQ0FBbUJGLEVBQW5CLEVBQThCQyxFQUE5QixFQUFrRjtBQUFBLE1BQXpDRSxJQUF5Qyx1RUFBbEMsQ0FBa0M7QUFBQSxNQUEvQkMsSUFBK0IsdUVBQXhCLENBQXdCO0FBQUEsTUFBckJD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QUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsRUF1Qkd3RSxPQUFPLEVBdkJWLGVBMEJFO0FBQU0sZUFBUyxFQUFFaEYsRUFBRSxDQUFDLE9BQUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRixlQTZCRTtBQUFNLGVBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbkI7QUFBZ0MsaUJBQVcsRUFBRW9DO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkYsRUFnQ0c4QyxPQUFPLEVBaENWLEVBbUNHQyxTQUFTLEVBbkNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBak9EOztHQUFNN0QsTzs7S0FBQUEsTztBQW1PU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLmZkN2Q3ZTJmNzdkZjgxMGNhNWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgRGlyVHlwZSwgU2l6ZSB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBSZWZPYmplY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBPUklHSU5fUE9JTlQgPSBPYmplY3QuZnJlZXplKHsgeDogMCwgeTogMCB9KTtcclxuY29uc3QgT1JJR0lOX1NJWkUgPSBPYmplY3QuZnJlZXplKHsgdzogMjAwLCBoOiAyMDAgfSk7XHJcbmNvbnN0IExJTkVfRElSID0gWydlJywgJ3cnLCAncycsICduJ107XHJcbmNvbnN0IFBPSU5UX0RJUiA9IFsnZScsICd3JywgJ3MnLCAnbicsICdzZScsICdzdycsICduZScsICdudyddO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQsIG1pblggPSAwLCBtaW5ZID0gMCwgbWF4WCA9IDAsICBtYXhZID0gMCkge1xyXG4gIGNvbnN0IHggPSBwMS54ICsgcDIueDtcclxuICBjb25zdCB5ID0gcDEueSArIHAyLnk7XHJcbiAgcmV0dXJuIHsgXHJcbiAgICB4OiAoeCA8IG1pblgpID8gbWluWCA6ICh4ID4gbWF4WCkgPyBtYXhYIDogeCwgXHJcbiAgICB5OiAoeSA8IG1pblkpID8gbWluWSA6ICh5ID4gbWF4WSkgPyBtYXhZIDogeSxcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3JvcEJveFByb3BzIHtcclxuICB3cmFwUmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIGltZ1BhdGg6IHN0cmluZztcclxuICBpbWdTaXplOiBTaXplO1xyXG59XHJcblxyXG5jb25zdCBDcm9wQm94ID0gKHt3cmFwUmVmLCBpbWdQYXRoLCBpbWdTaXplfTogQ3JvcEJveFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG4gIGNvbnN0IFtjcm9wQm94U2l6ZSwgc2V0Q3JvcEJveFNpemVdID0gdXNlU3RhdGU8U2l6ZT4oT1JJR0lOX1NJWkUpO1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuXHJcbiAgY29uc3QgZ2V0RWRnZVdpZHRoID0gKCkgPT4gaW1nU2l6ZS53IC0gY3JvcEJveFNpemUudztcclxuICBjb25zdCBnZXRFZGdlSGVpZ2h0ID0gKCkgPT4gaW1nU2l6ZS5oIC0gY3JvcEJveFNpemUuaDtcclxuICBjb25zdCBnZXRNYXhIZWlnaHQgPSAoKSA9PiBpbWdTaXplLmg7XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgbGFzdE1vdXNlUG9zID0gbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuXHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gXHJcbiAgICAgIGFkZFBvaW50cyhwcmV2T2Zmc2V0LCBtb3VzZURpZmYsIDAsIDAsIGdldEVkZ2VXaWR0aCgpLCBnZXRFZGdlSGVpZ2h0KCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RvcFBhbiA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydFNldFNpemUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBkaXI6IERpclR5cGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueCArIGNyb3BCb3hTaXplLnc7XHJcbiAgICBjb25zdCB3TGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IHNMaW5lWSA9IG9mZnNldC55ICsgY3JvcEJveFNpemUuaDtcclxuICAgIGNvbnN0IG5MaW5lWSA9IG9mZnNldC55O1xyXG5cclxuICAgIGNvbnN0IHNldFNpemVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgeCA9IGUucGFnZVggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdDtcclxuICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgc2V0Qm94KFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICB4OiAoeCA8IDApID8gMCA6ICh4ID4gaW1nU2l6ZS53KSA/IGltZ1NpemUudyA6IHgsIFxyXG4gICAgICAgICAgeTogKHkgPCAwKSA/IDAgOiAoeSA+IGltZ1NpemUuaCkgPyBpbWdTaXplLmggOiB5LCBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRCb3ggPSAoY3VycmVudE1vdXNlUG9zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NFTCA9ICEod0xpbmVYICsgY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3QgaXNDcm9zc1dMID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyA+IGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBpc0Nyb3NzU0wgPSAhKG5MaW5lWSArIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NOTCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggPiBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIGNvbnN0IGVYT2Zmc2V0ID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgd1hPZmZzZXQgPSB3TGluZVggLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHNZT2Zmc2V0ID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgbllPZmZzZXQgPSBuTGluZVkgLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcblxyXG4gICAgICBjb25zdCBlQ3Jvc3NXID0gZUxpbmVYIC0gY3JvcEJveFNpemUudyAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCB3Q3Jvc3NXID0gY3VycmVudE1vdXNlUG9zLnggLSB3TGluZVggLSBjcm9wQm94U2l6ZS53O1xyXG4gICAgICBjb25zdCBzQ3Jvc3NIID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG4gICAgICBjb25zdCBuQ3Jvc3NIID0gY3VycmVudE1vdXNlUG9zLnkgLSBuTGluZVkgLSBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICAgICAgY29uc3QgZVcgPSBjcm9wQm94U2l6ZS53ICsgY3VycmVudE1vdXNlUG9zLnggLSBlTGluZVg7XHJcbiAgICAgIGNvbnN0IHdXID0gY3JvcEJveFNpemUudyArIHdMaW5lWCAtIGN1cnJlbnRNb3VzZVBvcy54O1xyXG4gICAgICBjb25zdCBzSCA9IGNyb3BCb3hTaXplLmggKyBjdXJyZW50TW91c2VQb3MueSAtIHNMaW5lWTtcclxuICAgICAgY29uc3QgbkggPSBjcm9wQm94U2l6ZS5oICsgbkxpbmVZIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc05MKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ253JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NTTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcFNldFNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0U2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXNoID0gKCkgPT4gWyd3JywgJ2gnXS5tYXAoKGRpcikgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdkYXNoJywgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldExpbmUgPSAoKSA9PiBMSU5FX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdsaW5lJywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRQb2ludHMgPSAoKSA9PiBQT0lOVF9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogYCR7Y3JvcEJveFNpemUud31weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoJHtvZmZzZXQueX1weClgXHJcbiAgICAgIH19XHJcbiAgICA+XHJcblxyXG4gICAgICB7Lyog7J2066+47KeAIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgndmlld0JveCcpfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCd2aWV3SW1nJyl9XHJcbiAgICAgICAgICBzcmM9e2ltZ1BhdGh9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKC0ke29mZnNldC55fXB4KWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgey8qIOqyqeyekCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXREYXNoKCl9XHJcblxyXG4gICAgICB7Lyog7KSR7JWZIOyLreyekOqwgCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3NzJyl9IC8+XHJcblxyXG4gICAgICB7Lyog7Luk7IScIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnbW92ZUJveCcpfSBvbk1vdXNlRG93bj17c3RhcnRQYW59IC8+XHJcblxyXG4gICAgICB7Lyog67O0642UIOyYgeyXrSAqL31cclxuICAgICAge2dldExpbmUoKX1cclxuXHJcbiAgICAgIHsvKiDsoJAg7JiB7JetICovfVxyXG4gICAgICB7Z2V0UG9pbnRzKCl9XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9wQm94OyJdLCJzb3VyY2VSb290IjoiIn0=