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


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\CropBox.tsx",
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
    x: x < minX ? minX : x > maxX ? maxX : x,
    y: y < minY ? minY : y > maxY ? maxY : y
  };
}

var CropBox = function CropBox(_ref) {
  _s();

  var wrapRef = _ref.wrapRef,
      imgPath = _ref.imgPath,
      imgSize = _ref.imgSize,
      offset = _ref.offset,
      setOffset = _ref.setOffset,
      cropBoxSize = _ref.cropBoxSize,
      setCropBoxSize = _ref.setCropBoxSize;
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
        lineNumber: 209,
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
        lineNumber: 213,
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
        lineNumber: 217,
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
        lineNumber: 232,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, _this), getLine(), getPoints(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cropBoxInfo'),
      children: [offset.x, ", ", offset.y, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 9
      }, _this), cropBoxSize.w, ", ", cropBoxSize.h, " (px)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 221,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIkNyb3BCb3giLCJ3cmFwUmVmIiwiaW1nUGF0aCIsImltZ1NpemUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJjcm9wQm94U2l6ZSIsInNldENyb3BCb3hTaXplIiwibGFzdE1vdXNlUG9zUmVmIiwidXNlUmVmIiwiT1JJR0lOX1BPSU5UIiwiZ2V0RWRnZVdpZHRoIiwidyIsImdldEVkZ2VIZWlnaHQiLCJoIiwic3RhcnRQYW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3ZlQ3JvcEJveCIsInN0b3BQYW4iLCJjdXJyZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXJ0U2V0U2l6ZSIsImRpciIsImVMaW5lWCIsIndMaW5lWCIsInNMaW5lWSIsIm5MaW5lWSIsInNldFNpemVDcm9wQm94IiwicGFnZVgiLCJvZmZzZXRMZWZ0IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJzZXRCb3giLCJpc0Nyb3NzRUwiLCJpc0Nyb3NzV0wiLCJpc0Nyb3NzU0wiLCJpc0Nyb3NzTkwiLCJlWE9mZnNldCIsIndYT2Zmc2V0Iiwic1lPZmZzZXQiLCJuWU9mZnNldCIsImVDcm9zc1ciLCJ3Q3Jvc3NXIiwic0Nyb3NzSCIsIm5Dcm9zc0giLCJlVyIsIndXIiwic0giLCJuSCIsInN0b3BTZXRTaXplIiwiZ2V0RGFzaCIsIm1hcCIsImdldExpbmUiLCJMSU5FX0RJUiIsImdldFBvaW50cyIsIlBPSU5UX0RJUiIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFQyxLQUFDLEVBQUVGLEVBQUUsQ0FBQ0UsQ0FBSCxHQUFPRCxFQUFFLENBQUNDLENBQWY7QUFBa0JDLEtBQUMsRUFBRUgsRUFBRSxDQUFDRyxDQUFILEdBQU9GLEVBQUUsQ0FBQ0U7QUFBL0IsR0FBUDtBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJKLEVBQW5CLEVBQThCQyxFQUE5QixFQUFpRjtBQUFBLE1BQXhDSSxJQUF3Qyx1RUFBakMsQ0FBaUM7QUFBQSxNQUE5QkMsSUFBOEIsdUVBQXZCLENBQXVCO0FBQUEsTUFBcEJDLElBQW9CLHVFQUFiLENBQWE7QUFBQSxNQUFWQyxJQUFVLHVFQUFILENBQUc7QUFDL0UsTUFBTU4sQ0FBQyxHQUFHRixFQUFFLENBQUNFLENBQUgsR0FBT0QsRUFBRSxDQUFDQyxDQUFwQjtBQUNBLE1BQU1DLENBQUMsR0FBR0gsRUFBRSxDQUFDRyxDQUFILEdBQU9GLEVBQUUsQ0FBQ0UsQ0FBcEI7QUFDQSxTQUFPO0FBQ0xELEtBQUMsRUFBR0EsQ0FBQyxHQUFHRyxJQUFMLEdBQWFBLElBQWIsR0FBcUJILENBQUMsR0FBR0ssSUFBTCxHQUFhQSxJQUFiLEdBQW9CTCxDQUR0QztBQUVMQyxLQUFDLEVBQUdBLENBQUMsR0FBR0csSUFBTCxHQUFhQSxJQUFiLEdBQXFCSCxDQUFDLEdBQUdLLElBQUwsR0FBYUEsSUFBYixHQUFvQkw7QUFGdEMsR0FBUDtBQUlEOztBQVlELElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BU007QUFBQTs7QUFBQSxNQVBsQkMsT0FPa0IsUUFQbEJBLE9BT2tCO0FBQUEsTUFObEJDLE9BTWtCLFFBTmxCQSxPQU1rQjtBQUFBLE1BTGxCQyxPQUtrQixRQUxsQkEsT0FLa0I7QUFBQSxNQUpsQkMsTUFJa0IsUUFKbEJBLE1BSWtCO0FBQUEsTUFIbEJDLFNBR2tCLFFBSGxCQSxTQUdrQjtBQUFBLE1BRmxCQyxXQUVrQixRQUZsQkEsV0FFa0I7QUFBQSxNQURsQkMsY0FDa0IsUUFEbEJBLGNBQ2tCO0FBQ3BCLE1BQU1DLGVBQWUsR0FBR0Msb0RBQU0sQ0FBUUMsa0RBQVIsQ0FBOUI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNUixPQUFPLENBQUNTLENBQVIsR0FBWU4sV0FBVyxDQUFDTSxDQUE5QjtBQUFBLEdBQXJCOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxXQUFNVixPQUFPLENBQUNXLENBQVIsR0FBWVIsV0FBVyxDQUFDUSxDQUE5QjtBQUFBLEdBQXRCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBc0Q7QUFDckVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDQyxXQUF2QztBQUNBRixZQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDRSxPQUFyQztBQUNBYixtQkFBZSxDQUFDYyxPQUFoQixHQUEwQjtBQUFFN0IsT0FBQyxFQUFFdUIsQ0FBQyxDQUFDTyxPQUFQO0FBQWdCN0IsT0FBQyxFQUFFc0IsQ0FBQyxDQUFDUTtBQUFyQixLQUExQjtBQUNELEdBTEQ7O0FBT0EsTUFBTUosV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0osQ0FBRCxFQUFtQjtBQUNyQyxRQUFNUyxZQUFZLEdBQUdqQixlQUFlLENBQUNjLE9BQXJDO0FBQ0EsUUFBTUksZUFBZSxHQUFHO0FBQUVqQyxPQUFDLEVBQUV1QixDQUFDLENBQUNPLE9BQVA7QUFBZ0I3QixPQUFDLEVBQUVzQixDQUFDLENBQUNRO0FBQXJCLEtBQXhCO0FBQ0EsUUFBTUcsU0FBUyxHQUFHckMsVUFBVSxDQUFDb0MsZUFBRCxFQUFrQkQsWUFBbEIsQ0FBNUI7QUFFQWpCLG1CQUFlLENBQUNjLE9BQWhCLEdBQTBCSSxlQUExQjtBQUNBckIsYUFBUyxDQUFDLFVBQUN1QixVQUFEO0FBQUEsYUFDUmpDLFNBQVMsQ0FBQ2lDLFVBQUQsRUFBYUQsU0FBYixFQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QmhCLFlBQVksRUFBMUMsRUFBOENFLGFBQWEsRUFBM0QsQ0FERDtBQUFBLEtBQUQsQ0FBVDtBQUdELEdBVEQ7O0FBV0EsTUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkgsWUFBUSxDQUFDVyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ1QsV0FBMUM7QUFDQUYsWUFBUSxDQUFDVyxtQkFBVCxDQUE2QixTQUE3QixFQUF3Q1IsT0FBeEM7QUFDRCxHQUhEOztBQUtBLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNkLENBQUQsRUFBbURlLEdBQW5ELEVBQW9FO0FBQ3ZGZixLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNZSxNQUFNLEdBQUc1QixNQUFNLENBQUNYLENBQVAsR0FBV2EsV0FBVyxDQUFDTSxDQUF0QztBQUNBLFFBQU1xQixNQUFNLEdBQUc3QixNQUFNLENBQUNYLENBQXRCO0FBQ0EsUUFBTXlDLE1BQU0sR0FBRzlCLE1BQU0sQ0FBQ1YsQ0FBUCxHQUFXWSxXQUFXLENBQUNRLENBQXRDO0FBQ0EsUUFBTXFCLE1BQU0sR0FBRy9CLE1BQU0sQ0FBQ1YsQ0FBdEI7O0FBRUEsUUFBTTBDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ3BCLENBQUQsRUFBbUI7QUFDeEMsVUFBTXZCLENBQUMsR0FBR3VCLENBQUMsQ0FBQ3FCLEtBQUYsR0FBVXBDLE9BQU8sQ0FBQ3FCLE9BQVIsQ0FBZ0JnQixVQUFwQztBQUNBLFVBQU01QyxDQUFDLEdBQUdzQixDQUFDLENBQUN1QixLQUFGLEdBQVV0QyxPQUFPLENBQUNxQixPQUFSLENBQWdCa0IsU0FBcEM7QUFFQUMsWUFBTSxDQUFDO0FBQ0xoRCxTQUFDLEVBQUdBLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBVixHQUFlQSxDQUFDLEdBQUdVLE9BQU8sQ0FBQ1MsQ0FBYixHQUFrQlQsT0FBTyxDQUFDUyxDQUExQixHQUE4Qm5CLENBRDFDO0FBRUxDLFNBQUMsRUFBR0EsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUFWLEdBQWVBLENBQUMsR0FBR1MsT0FBTyxDQUFDVyxDQUFiLEdBQWtCWCxPQUFPLENBQUNXLENBQTFCLEdBQThCcEI7QUFGMUMsT0FBRCxDQUFOO0FBSUQsS0FSRDs7QUFVQSxRQUFNK0MsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ2YsZUFBRCxFQUFxQjtBQUNsQyxVQUFNZ0IsU0FBUyxHQUFHLEVBQUVULE1BQU0sR0FBRzNCLFdBQVcsQ0FBQ00sQ0FBckIsR0FBeUJjLGVBQWUsQ0FBQ2pDLENBQTNDLENBQWxCO0FBQ0EsVUFBTWtELFNBQVMsR0FBR1gsTUFBTSxHQUFHMUIsV0FBVyxDQUFDTSxDQUFyQixHQUF5QmMsZUFBZSxDQUFDakMsQ0FBM0Q7QUFDQSxVQUFNbUQsU0FBUyxHQUFHLEVBQUVULE1BQU0sR0FBRzdCLFdBQVcsQ0FBQ1EsQ0FBckIsR0FBeUJZLGVBQWUsQ0FBQ2hDLENBQTNDLENBQWxCO0FBQ0EsVUFBTW1ELFNBQVMsR0FBR1gsTUFBTSxHQUFHNUIsV0FBVyxDQUFDUSxDQUFyQixHQUF5QlksZUFBZSxDQUFDaEMsQ0FBM0Q7QUFFQSxVQUFNb0QsUUFBUSxHQUFHZCxNQUFNLEdBQUcxQixXQUFXLENBQUNNLENBQXJCLElBQTBCUixNQUFNLENBQUNYLENBQVAsR0FBV2lDLGVBQWUsQ0FBQ2pDLENBQXJELENBQWpCO0FBQ0EsVUFBTXNELFFBQVEsR0FBR2QsTUFBTSxJQUFJN0IsTUFBTSxDQUFDWCxDQUFQLEdBQVdpQyxlQUFlLENBQUNqQyxDQUEvQixDQUF2QjtBQUNBLFVBQU11RCxRQUFRLEdBQUdkLE1BQU0sR0FBRzVCLFdBQVcsQ0FBQ1EsQ0FBckIsSUFBMEJWLE1BQU0sQ0FBQ1YsQ0FBUCxHQUFXZ0MsZUFBZSxDQUFDaEMsQ0FBckQsQ0FBakI7QUFDQSxVQUFNdUQsUUFBUSxHQUFHZCxNQUFNLElBQUkvQixNQUFNLENBQUNWLENBQVAsR0FBV2dDLGVBQWUsQ0FBQ2hDLENBQS9CLENBQXZCO0FBRUEsVUFBTXdELE9BQU8sR0FBR2xCLE1BQU0sR0FBRzFCLFdBQVcsQ0FBQ00sQ0FBckIsR0FBeUJjLGVBQWUsQ0FBQ2pDLENBQXpEO0FBQ0EsVUFBTTBELE9BQU8sR0FBR3pCLGVBQWUsQ0FBQ2pDLENBQWhCLEdBQW9Cd0MsTUFBcEIsR0FBNkIzQixXQUFXLENBQUNNLENBQXpEO0FBQ0EsVUFBTXdDLE9BQU8sR0FBR2xCLE1BQU0sR0FBRzVCLFdBQVcsQ0FBQ1EsQ0FBckIsR0FBeUJZLGVBQWUsQ0FBQ2hDLENBQXpEO0FBQ0EsVUFBTTJELE9BQU8sR0FBRzNCLGVBQWUsQ0FBQ2hDLENBQWhCLEdBQW9CeUMsTUFBcEIsR0FBNkI3QixXQUFXLENBQUNRLENBQXpEO0FBRUEsVUFBTXdDLEVBQUUsR0FBR2hELFdBQVcsQ0FBQ00sQ0FBWixHQUFnQmMsZUFBZSxDQUFDakMsQ0FBaEMsR0FBb0N1QyxNQUEvQztBQUNBLFVBQU11QixFQUFFLEdBQUdqRCxXQUFXLENBQUNNLENBQVosR0FBZ0JxQixNQUFoQixHQUF5QlAsZUFBZSxDQUFDakMsQ0FBcEQ7QUFDQSxVQUFNK0QsRUFBRSxHQUFHbEQsV0FBVyxDQUFDUSxDQUFaLEdBQWdCWSxlQUFlLENBQUNoQyxDQUFoQyxHQUFvQ3dDLE1BQS9DO0FBQ0EsVUFBTXVCLEVBQUUsR0FBR25ELFdBQVcsQ0FBQ1EsQ0FBWixHQUFnQnFCLE1BQWhCLEdBQXlCVCxlQUFlLENBQUNoQyxDQUFwRDs7QUFFQSxjQUFRcUMsR0FBUjtBQUNFLGFBQUssR0FBTDtBQUNFLGNBQUlZLFNBQUosRUFBZTtBQUNidEMscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVxRCxRQUFMO0FBQWVwRCxlQUFDLEVBQUVVLE1BQU0sQ0FBQ1Y7QUFBekIsYUFBRCxDQUFUO0FBQ0FhLDBCQUFjLENBQUM7QUFBRUssZUFBQyxFQUFFc0MsT0FBTDtBQUFjcEMsZUFBQyxFQUFFUixXQUFXLENBQUNRO0FBQTdCLGFBQUQsQ0FBZDtBQUNELFdBSEQsTUFHTztBQUNMUCwwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRTBDLEVBQUw7QUFBU3hDLGVBQUMsRUFBRVIsV0FBVyxDQUFDUTtBQUF4QixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLEdBQUw7QUFDRSxjQUFJNEIsU0FBSixFQUFlO0FBQ2JuQywwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRXVDLE9BQUw7QUFBY3JDLGVBQUMsRUFBRVIsV0FBVyxDQUFDUTtBQUE3QixhQUFELENBQWQ7QUFDRCxXQUZELE1BRU87QUFDTFQscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVzRCxRQUFMO0FBQWVyRCxlQUFDLEVBQUVVLE1BQU0sQ0FBQ1Y7QUFBekIsYUFBRCxDQUFUO0FBQ0FhLDBCQUFjLENBQUM7QUFBRUssZUFBQyxFQUFFMkMsRUFBTDtBQUFTekMsZUFBQyxFQUFFUixXQUFXLENBQUNRO0FBQXhCLGFBQUQsQ0FBZDtBQUNEOztBQUNEOztBQUNGLGFBQUssR0FBTDtBQUNFLGNBQUkrQixTQUFKLEVBQWU7QUFDYnhDLHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFVyxNQUFNLENBQUNYLENBQVo7QUFBZUMsZUFBQyxFQUFFc0Q7QUFBbEIsYUFBRCxDQUFUO0FBQ0F6QywwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRU4sV0FBVyxDQUFDTSxDQUFqQjtBQUFvQkUsZUFBQyxFQUFFc0M7QUFBdkIsYUFBRCxDQUFkO0FBQ0QsV0FIRCxNQUdPO0FBQ0w3QywwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRU4sV0FBVyxDQUFDTSxDQUFqQjtBQUFvQkUsZUFBQyxFQUFFMEM7QUFBdkIsYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxHQUFMO0FBQ0UsY0FBSVosU0FBSixFQUFlO0FBQ2JyQywwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRU4sV0FBVyxDQUFDTSxDQUFqQjtBQUFvQkUsZUFBQyxFQUFFdUM7QUFBdkIsYUFBRCxDQUFkO0FBQ0QsV0FGRCxNQUVPO0FBQ0xoRCxxQkFBUyxDQUFDO0FBQUVaLGVBQUMsRUFBRVcsTUFBTSxDQUFDWCxDQUFaO0FBQWVDLGVBQUMsRUFBRXVEO0FBQWxCLGFBQUQsQ0FBVDtBQUNBMUMsMEJBQWMsQ0FBQztBQUFFSyxlQUFDLEVBQUVOLFdBQVcsQ0FBQ00sQ0FBakI7QUFBb0JFLGVBQUMsRUFBRTJDO0FBQXZCLGFBQUQsQ0FBZDtBQUNEOztBQUNEOztBQUNGLGFBQUssSUFBTDtBQUNFLGNBQUlaLFNBQVMsSUFBSUYsU0FBakIsRUFBNEI7QUFDMUJ0QyxxQkFBUyxDQUFDO0FBQUVaLGVBQUMsRUFBRXFELFFBQUw7QUFBZXBELGVBQUMsRUFBRXNEO0FBQWxCLGFBQUQsQ0FBVDtBQUNBekMsMEJBQWMsQ0FBQztBQUFFSyxlQUFDLEVBQUVzQyxPQUFMO0FBQWNwQyxlQUFDLEVBQUVzQztBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhELE1BR08sSUFBSVQsU0FBSixFQUFlO0FBQ3BCdEMscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVxRCxRQUFMO0FBQWVwRCxlQUFDLEVBQUVVLE1BQU0sQ0FBQ1Y7QUFBekIsYUFBRCxDQUFUO0FBQ0FhLDBCQUFjLENBQUM7QUFBRUssZUFBQyxFQUFFc0MsT0FBTDtBQUFjcEMsZUFBQyxFQUFFMEM7QUFBakIsYUFBRCxDQUFkO0FBQ0QsV0FITSxNQUdBLElBQUlYLFNBQUosRUFBZTtBQUNwQnhDLHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFVyxNQUFNLENBQUNYLENBQVo7QUFBZUMsZUFBQyxFQUFFc0Q7QUFBbEIsYUFBRCxDQUFUO0FBQ0F6QywwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRTBDLEVBQUw7QUFBU3hDLGVBQUMsRUFBRXNDO0FBQVosYUFBRCxDQUFkO0FBQ0QsV0FITSxNQUdBO0FBQ0w3QywwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRTBDLEVBQUw7QUFBU3hDLGVBQUMsRUFBRTBDO0FBQVosYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxJQUFMO0FBQ0UsY0FBSVgsU0FBUyxJQUFJSCxTQUFqQixFQUE0QjtBQUMxQnJDLHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFVyxNQUFNLENBQUNYLENBQVAsR0FBV2EsV0FBVyxDQUFDTSxDQUE1QjtBQUErQmxCLGVBQUMsRUFBRXVEO0FBQWxDLGFBQUQsQ0FBVDtBQUNBMUMsMEJBQWMsQ0FBQztBQUFFSyxlQUFDLEVBQUV1QyxPQUFMO0FBQWNyQyxlQUFDLEVBQUVzQztBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhELE1BR08sSUFBSVYsU0FBSixFQUFlO0FBQ3BCbkMsMEJBQWMsQ0FBQztBQUFFSyxlQUFDLEVBQUV1QyxPQUFMO0FBQWNyQyxlQUFDLEVBQUUwQztBQUFqQixhQUFELENBQWQ7QUFDRCxXQUZNLE1BRUEsSUFBSVgsU0FBSixFQUFlO0FBQ3BCeEMscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVzRCxRQUFMO0FBQWVyRCxlQUFDLEVBQUV1RDtBQUFsQixhQUFELENBQVQ7QUFDQTFDLDBCQUFjLENBQUM7QUFBRUssZUFBQyxFQUFFMkMsRUFBTDtBQUFTekMsZUFBQyxFQUFFc0M7QUFBWixhQUFELENBQWQ7QUFDRCxXQUhNLE1BR0E7QUFDTC9DLHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFc0QsUUFBTDtBQUFlckQsZUFBQyxFQUFFVSxNQUFNLENBQUNWO0FBQXpCLGFBQUQsQ0FBVDtBQUNBYSwwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRTJDLEVBQUw7QUFBU3pDLGVBQUMsRUFBRTBDO0FBQVosYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxJQUFMO0FBQ0UsY0FBSVosU0FBUyxJQUFJRCxTQUFqQixFQUE0QjtBQUMxQnRDLHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFcUQsUUFBTDtBQUFlcEQsZUFBQyxFQUFFVSxNQUFNLENBQUNWLENBQVAsR0FBV1ksV0FBVyxDQUFDUTtBQUF6QyxhQUFELENBQVQ7QUFDQVAsMEJBQWMsQ0FBQztBQUFFSyxlQUFDLEVBQUVzQyxPQUFMO0FBQWNwQyxlQUFDLEVBQUV1QztBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhELE1BR08sSUFBSVYsU0FBSixFQUFlO0FBQ3BCdEMscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVxRCxRQUFMO0FBQWVwRCxlQUFDLEVBQUV1RDtBQUFsQixhQUFELENBQVQ7QUFDQTFDLDBCQUFjLENBQUM7QUFBRUssZUFBQyxFQUFFc0MsT0FBTDtBQUFjcEMsZUFBQyxFQUFFMkM7QUFBakIsYUFBRCxDQUFkO0FBQ0QsV0FITSxNQUdBLElBQUliLFNBQUosRUFBZTtBQUNwQnJDLDBCQUFjLENBQUM7QUFBRUssZUFBQyxFQUFFMEMsRUFBTDtBQUFTeEMsZUFBQyxFQUFFdUM7QUFBWixhQUFELENBQWQ7QUFDRCxXQUZNLE1BRUE7QUFDTGhELHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFVyxNQUFNLENBQUNYLENBQVo7QUFBZUMsZUFBQyxFQUFFdUQ7QUFBbEIsYUFBRCxDQUFUO0FBQ0ExQywwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRTBDLEVBQUw7QUFBU3hDLGVBQUMsRUFBRTJDO0FBQVosYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxJQUFMO0FBQ0UsY0FBSWIsU0FBUyxJQUFJRixTQUFqQixFQUE0QjtBQUMxQm5DLDBCQUFjLENBQUM7QUFBRUssZUFBQyxFQUFFdUMsT0FBTDtBQUFjckMsZUFBQyxFQUFFdUM7QUFBakIsYUFBRCxDQUFkO0FBQ0QsV0FGRCxNQUVPLElBQUlYLFNBQUosRUFBZTtBQUNwQnJDLHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFVyxNQUFNLENBQUNYLENBQVAsR0FBV2EsV0FBVyxDQUFDTSxDQUE1QjtBQUErQmxCLGVBQUMsRUFBRXVEO0FBQWxDLGFBQUQsQ0FBVDtBQUNBMUMsMEJBQWMsQ0FBQztBQUFFSyxlQUFDLEVBQUV1QyxPQUFMO0FBQWNyQyxlQUFDLEVBQUUyQztBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhNLE1BR0EsSUFBSWIsU0FBSixFQUFlO0FBQ3BCdkMscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVzRCxRQUFMO0FBQWVyRCxlQUFDLEVBQUVVLE1BQU0sQ0FBQ1YsQ0FBUCxHQUFXWSxXQUFXLENBQUNRO0FBQXpDLGFBQUQsQ0FBVDtBQUNBUCwwQkFBYyxDQUFDO0FBQUVLLGVBQUMsRUFBRTJDLEVBQUw7QUFBU3pDLGVBQUMsRUFBRXVDO0FBQVosYUFBRCxDQUFkO0FBQ0QsV0FITSxNQUdBO0FBQ0xoRCxxQkFBUyxDQUFDO0FBQUVaLGVBQUMsRUFBRXNELFFBQUw7QUFBZXJELGVBQUMsRUFBRXVEO0FBQWxCLGFBQUQsQ0FBVDtBQUNBMUMsMEJBQWMsQ0FBQztBQUFFSyxlQUFDLEVBQUUyQyxFQUFMO0FBQVN6QyxlQUFDLEVBQUUyQztBQUFaLGFBQUQsQ0FBZDtBQUNEOztBQUNEO0FBeEZKO0FBMEZELEtBL0dEOztBQWlIQSxRQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCeEMsY0FBUSxDQUFDVyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ08sY0FBMUM7QUFDQWxCLGNBQVEsQ0FBQ1csbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0M2QixXQUF4QztBQUNELEtBSEQ7O0FBS0F4QyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDaUIsY0FBdkM7QUFDQWxCLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUN1QyxXQUFyQztBQUNELEdBMUlEOztBQTRJQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU0sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXQyxHQUFYLENBQWUsVUFBQzdCLEdBQUQ7QUFBQSwwQkFDbkM7QUFBZ0IsaUJBQVMsRUFBRTdDLEVBQUUsQ0FBQyxNQUFELEVBQVM2QyxHQUFUO0FBQTdCLFNBQVdBLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURtQztBQUFBLEtBQWYsQ0FBTjtBQUFBLEdBQWhCOztBQUlBLE1BQU04QixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1DLFFBQVEsQ0FBQ0YsR0FBVCxDQUFhLFVBQUM3QixHQUFEO0FBQUEsMEJBQ2pDO0FBQWdCLGlCQUFTLEVBQUU3QyxFQUFFLENBQUMsTUFBRCxFQUFTNkMsR0FBVCxDQUE3QjtBQUE0QyxtQkFBVyxFQUFFLHFCQUFBZixDQUFDO0FBQUEsaUJBQUljLFlBQVksQ0FBQ2QsQ0FBRCxFQUFJZSxHQUFKLENBQWhCO0FBQUE7QUFBMUQsU0FBV0EsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlDO0FBQUEsS0FBYixDQUFOO0FBQUEsR0FBaEI7O0FBSUEsTUFBTWdDLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTUMsU0FBUyxDQUFDSixHQUFWLENBQWMsVUFBQzdCLEdBQUQ7QUFBQSwwQkFDcEM7QUFBZ0IsaUJBQVMsRUFBRTdDLEVBQUUsQ0FBQyxPQUFELEVBQVU2QyxHQUFWLENBQTdCO0FBQTZDLG1CQUFXLEVBQUUscUJBQUFmLENBQUM7QUFBQSxpQkFBSWMsWUFBWSxDQUFDZCxDQUFELEVBQUllLEdBQUosQ0FBaEI7QUFBQTtBQUEzRCxTQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEb0M7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFsQjs7QUFJQSxzQkFDRTtBQUNFLGFBQVMsRUFBRTdDLEVBQUUsQ0FBQyxTQUFELENBRGY7QUFFRSxTQUFLLEVBQUU7QUFDTCtFLFdBQUssWUFBSzNELFdBQVcsQ0FBQ00sQ0FBakIsT0FEQTtBQUVMc0QsWUFBTSxZQUFLNUQsV0FBVyxDQUFDUSxDQUFqQixPQUZEO0FBR0xxRCxlQUFTLHVCQUFnQi9ELE1BQU0sQ0FBQ1gsQ0FBdkIsNEJBQTBDVyxNQUFNLENBQUNWLENBQWpEO0FBSEosS0FGVDtBQUFBLDRCQVVFO0FBQU0sZUFBUyxFQUFFUixFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FEZjtBQUVFLFdBQUcsRUFBRWdCLE9BRlA7QUFHRSxhQUFLLEVBQUU7QUFDTCtELGVBQUssWUFBSzlELE9BQU8sQ0FBQ1MsQ0FBYixPQURBO0FBRUxzRCxnQkFBTSxZQUFLL0QsT0FBTyxDQUFDVyxDQUFiLE9BRkQ7QUFHTHFELG1CQUFTLHdCQUFpQi9ELE1BQU0sQ0FBQ1gsQ0FBeEIsNkJBQTRDVyxNQUFNLENBQUNWLENBQW5EO0FBSEo7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLEVBdUJHaUUsT0FBTyxFQXZCVixlQTBCRTtBQUFNLGVBQVMsRUFBRXpFLEVBQUUsQ0FBQyxPQUFEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUE2QkU7QUFBTSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQW5CO0FBQWdDLGlCQUFXLEVBQUU2QjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGLEVBZ0NHOEMsT0FBTyxFQWhDVixFQW1DR0UsU0FBUyxFQW5DWixlQXFDRTtBQUFNLGVBQVMsRUFBRTdFLEVBQUUsQ0FBQyxhQUFELENBQW5CO0FBQUEsaUJBQ0drQixNQUFNLENBQUNYLENBRFYsUUFDZVcsTUFBTSxDQUFDVixDQUR0QixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdHWSxXQUFXLENBQUNNLENBSGYsUUFHb0JOLFdBQVcsQ0FBQ1EsQ0FIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkNELENBM09EOztHQUFNZCxPOztLQUFBQSxPO0FBNk9TQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuMjhmYjVmODE0ODZhNDgzYmIzZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBSZWZPYmplY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUG9pbnQsIFNpemUsIE9SSUdJTl9QT0lOVCB9IGZyb20gJy4vZGF0YSc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCwgbWluWCA9IDAsIG1pblkgPSAwLCBtYXhYID0gMCwgbWF4WSA9IDApIHtcclxuICBjb25zdCB4ID0gcDEueCArIHAyLng7XHJcbiAgY29uc3QgeSA9IHAxLnkgKyBwMi55O1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiAoeCA8IG1pblgpID8gbWluWCA6ICh4ID4gbWF4WCkgPyBtYXhYIDogeCxcclxuICAgIHk6ICh5IDwgbWluWSkgPyBtaW5ZIDogKHkgPiBtYXhZKSA/IG1heFkgOiB5LFxyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBDcm9wQm94UHJvcHMge1xyXG4gIHdyYXBSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgaW1nUGF0aDogc3RyaW5nO1xyXG4gIGltZ1NpemU6IFNpemU7XHJcbiAgb2Zmc2V0OiBQb2ludDtcclxuICBzZXRPZmZzZXQ6IChvZmZzZXQ6IFBvaW50KSA9PiB2b2lkO1xyXG4gIGNyb3BCb3hTaXplOiBTaXplO1xyXG4gIHNldENyb3BCb3hTaXplOiAoY3JvcEJveFNpemU6IFNpemUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IENyb3BCb3ggPSAoXHJcbiAgeyBcclxuICAgIHdyYXBSZWYsIFxyXG4gICAgaW1nUGF0aCwgXHJcbiAgICBpbWdTaXplLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgc2V0T2Zmc2V0LFxyXG4gICAgY3JvcEJveFNpemUsXHJcbiAgICBzZXRDcm9wQm94U2l6ZSxcclxuICB9OiBDcm9wQm94UHJvcHMpID0+IHtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIGNvbnN0IGdldEVkZ2VXaWR0aCA9ICgpID0+IGltZ1NpemUudyAtIGNyb3BCb3hTaXplLnc7XHJcbiAgY29uc3QgZ2V0RWRnZUhlaWdodCA9ICgpID0+IGltZ1NpemUuaCAtIGNyb3BCb3hTaXplLmg7XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgbGFzdE1vdXNlUG9zID0gbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuXHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT5cclxuICAgICAgYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZiwgMCwgMCwgZ2V0RWRnZVdpZHRoKCksIGdldEVkZ2VIZWlnaHQoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9wUGFuID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQ3JvcEJveCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0U2l6ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGRpcjogRGlyVHlwZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGVMaW5lWCA9IG9mZnNldC54ICsgY3JvcEJveFNpemUudztcclxuICAgIGNvbnN0IHdMaW5lWCA9IG9mZnNldC54O1xyXG4gICAgY29uc3Qgc0xpbmVZID0gb2Zmc2V0LnkgKyBjcm9wQm94U2l6ZS5oO1xyXG4gICAgY29uc3QgbkxpbmVZID0gb2Zmc2V0Lnk7XHJcblxyXG4gICAgY29uc3Qgc2V0U2l6ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0O1xyXG4gICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3A7XHJcblxyXG4gICAgICBzZXRCb3goe1xyXG4gICAgICAgIHg6ICh4IDwgMCkgPyAwIDogKHggPiBpbWdTaXplLncpID8gaW1nU2l6ZS53IDogeCxcclxuICAgICAgICB5OiAoeSA8IDApID8gMCA6ICh5ID4gaW1nU2l6ZS5oKSA/IGltZ1NpemUuaCA6IHksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEJveCA9IChjdXJyZW50TW91c2VQb3MpID0+IHtcclxuICAgICAgY29uc3QgaXNDcm9zc0VMID0gISh3TGluZVggKyBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzV0wgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NTTCA9ICEobkxpbmVZICsgY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgaXNDcm9zc05MID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgY29uc3QgZVhPZmZzZXQgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCB3WE9mZnNldCA9IHdMaW5lWCAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgc1lPZmZzZXQgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBuWU9mZnNldCA9IG5MaW5lWSAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuXHJcbiAgICAgIGNvbnN0IGVDcm9zc1cgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHdDcm9zc1cgPSBjdXJyZW50TW91c2VQb3MueCAtIHdMaW5lWCAtIGNyb3BCb3hTaXplLnc7XHJcbiAgICAgIGNvbnN0IHNDcm9zc0ggPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcbiAgICAgIGNvbnN0IG5Dcm9zc0ggPSBjdXJyZW50TW91c2VQb3MueSAtIG5MaW5lWSAtIGNyb3BCb3hTaXplLmg7XHJcblxyXG4gICAgICBjb25zdCBlVyA9IGNyb3BCb3hTaXplLncgKyBjdXJyZW50TW91c2VQb3MueCAtIGVMaW5lWDtcclxuICAgICAgY29uc3Qgd1cgPSBjcm9wQm94U2l6ZS53ICsgd0xpbmVYIC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHNIID0gY3JvcEJveFNpemUuaCArIGN1cnJlbnRNb3VzZVBvcy55IC0gc0xpbmVZO1xyXG4gICAgICBjb25zdCBuSCA9IGNyb3BCb3hTaXplLmggKyBuTGluZVkgLSBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIHN3aXRjaCAoZGlyKSB7XHJcbiAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25lJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbncnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9wU2V0U2l6ZSA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRTaXplKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERhc2ggPSAoKSA9PiBbJ3cnLCAnaCddLm1hcCgoZGlyKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2Rhc2gnLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0TGluZSA9ICgpID0+IExJTkVfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2xpbmUnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldFBvaW50cyA9ICgpID0+IFBPSU5UX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdwb2ludCcsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0U2l6ZShlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjeCgnY3JvcEJveCcpfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBgJHtjcm9wQm94U2l6ZS53fXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke2Nyb3BCb3hTaXplLmh9cHhgLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtvZmZzZXQueH1weCkgdHJhbnNsYXRlWSgke29mZnNldC55fXB4KWBcclxuICAgICAgfX1cclxuICAgID5cclxuXHJcbiAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd2aWV3Qm94Jyl9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ3ZpZXdJbWcnKX1cclxuICAgICAgICAgIHNyYz17aW1nUGF0aH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoLSR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcblxyXG4gICAgICB7Lyog6rKp7J6QIOyYgeyXrSAqL31cclxuICAgICAge2dldERhc2goKX1cclxuXHJcbiAgICAgIHsvKiDspJHslZkg7Iut7J6Q6rCAIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnY3Jvc3MnKX0gLz5cclxuXHJcbiAgICAgIHsvKiDsu6TshJwg7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdtb3ZlQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFBhbn0gLz5cclxuXHJcbiAgICAgIHsvKiDrs7TrjZQg7JiB7JetICovfVxyXG4gICAgICB7Z2V0TGluZSgpfVxyXG5cclxuICAgICAgey8qIOygkCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXRQb2ludHMoKX1cclxuICAgICAgXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3hJbmZvJyl9PlxyXG4gICAgICAgIHtvZmZzZXQueH0sIHtvZmZzZXQueX1cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHtjcm9wQm94U2l6ZS53fSwge2Nyb3BCb3hTaXplLmh9IChweClcclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9wQm94OyJdLCJzb3VyY2VSb290IjoiIn0=