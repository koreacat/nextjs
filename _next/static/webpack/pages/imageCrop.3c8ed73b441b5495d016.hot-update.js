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
  console.log('render CropBox');

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
        x: e.clientX - wrapRef.current.offsetLeft,
        y: e.clientY - wrapRef.current.offsetTop
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
        lineNumber: 200,
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
        lineNumber: 204,
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
        lineNumber: 208,
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
        lineNumber: 223,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }, _this), getLine(), getPoints()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 212,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIk9SSUdJTl9QT0lOVCIsIk9iamVjdCIsImZyZWV6ZSIsIk9SSUdJTl9TSVpFIiwidyIsImgiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsIkNyb3BCb3giLCJ3cmFwUmVmIiwiaW1nUGF0aCIsImltZ1NpemUiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJsYXN0TW91c2VQb3NSZWYiLCJ1c2VSZWYiLCJjb25zb2xlIiwibG9nIiwic3RhcnRQYW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3ZlQ3JvcEJveCIsInN0b3BQYW4iLCJjdXJyZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXJ0U2V0U2l6ZSIsImRpciIsImVMaW5lWCIsIndMaW5lWCIsInNMaW5lWSIsIm5MaW5lWSIsInNldFNpemVDcm9wQm94Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInNldEJveCIsImlzQ3Jvc3NFTCIsImlzQ3Jvc3NXTCIsImlzQ3Jvc3NTTCIsImlzQ3Jvc3NOTCIsImVYT2Zmc2V0Iiwid1hPZmZzZXQiLCJzWU9mZnNldCIsIm5ZT2Zmc2V0IiwiZUNyb3NzVyIsIndDcm9zc1ciLCJzQ3Jvc3NIIiwibkNyb3NzSCIsImVXIiwid1ciLCJzSCIsIm5IIiwic3RvcFNldFNpemUiLCJnZXREYXNoIiwi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QWpCLE9BRkQ7QUFHTGdFLGVBQVMsdUJBQWdCeEQsTUFBTSxDQUFDcEIsQ0FBdkIsNEJBQTBDb0IsTUFBTSxDQUFDbkIsQ0FBakQ7QUFISixLQUZUO0FBQUEsNEJBVUU7QUFBTSxlQUFTLEVBQUVSLEVBQUUsQ0FBQyxTQUFELENBQW5CO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFFQSxFQUFFLENBQUMsU0FBRCxDQURmO0FBRUUsV0FBRyxFQUFFd0IsT0FGUDtBQUdFLGFBQUssRUFBRTtBQUNMeUQsZUFBSyxZQUFLeEQsT0FBTyxDQUFDUCxDQUFiLE9BREE7QUFFTGdFLGdCQUFNLFlBQUt6RCxPQUFPLENBQUNOLENBQWIsT0FGRDtBQUdMZ0UsbUJBQVMsd0JBQWlCeEQsTUFBTSxDQUFDcEIsQ0FBeEIsNkJBQTRDb0IsTUFBTSxDQUFDbkIsQ0FBbkQ7QUFISjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsRUF1QkdxRSxPQUFPLEVBdkJWLGVBMEJFO0FBQU0sZUFBUyxFQUFFN0UsRUFBRSxDQUFDLE9BQUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRixlQTZCRTtBQUFNLGVBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbkI7QUFBZ0MsaUJBQVcsRUFBRW1DO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkYsRUFnQ0c0QyxPQUFPLEVBaENWLEVBbUNHQyxTQUFTLEVBbkNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBNU5EOztHQUFNMUQsTzs7S0FBQUEsTztBQThOU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjNjOGVkNzNiNDQxYjU0OTVkMDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgRGlyVHlwZSwgUG9pbnQsIFNpemUgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgUmVmT2JqZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQsIG1pblggPSAwLCBtaW5ZID0gMCwgbWF4WCA9IDAsICBtYXhZID0gMCkge1xyXG4gIGNvbnN0IHggPSBwMS54ICsgcDIueDtcclxuICBjb25zdCB5ID0gcDEueSArIHAyLnk7XHJcbiAgcmV0dXJuIHsgXHJcbiAgICB4OiAoeCA8IG1pblgpID8gbWluWCA6ICh4ID4gbWF4WCkgPyBtYXhYIDogeCwgXHJcbiAgICB5OiAoeSA8IG1pblkpID8gbWluWSA6ICh5ID4gbWF4WSkgPyBtYXhZIDogeSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBPUklHSU5fUE9JTlQgPSBPYmplY3QuZnJlZXplKHsgeDogMCwgeTogMCB9KTtcclxuY29uc3QgT1JJR0lOX1NJWkUgPSBPYmplY3QuZnJlZXplKHsgdzogMjAwLCBoOiAyMDAgfSk7XHJcbmNvbnN0IExJTkVfRElSID0gWydlJywgJ3cnLCAncycsICduJ107XHJcbmNvbnN0IFBPSU5UX0RJUiA9IFsnZScsICd3JywgJ3MnLCAnbicsICdzZScsICdzdycsICduZScsICdudyddO1xyXG5cclxuaW50ZXJmYWNlIENyb3BCb3hQcm9wcyB7XHJcbiAgd3JhcFJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICBpbWdQYXRoOiBzdHJpbmc7XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxufVxyXG5cclxuY29uc3QgQ3JvcEJveCA9ICh7d3JhcFJlZiwgaW1nUGF0aCwgaW1nU2l6ZX06IENyb3BCb3hQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdyZW5kZXIgQ3JvcEJveCcpO1xyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vdmVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcblxyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBzZXRPZmZzZXQoKHByZXZPZmZzZXQpID0+IFxyXG4gICAgICBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmLCAwLCAwLCBpbWdTaXplLncgLSBjcm9wQm94U2l6ZS53LCBpbWdTaXplLmggLSBjcm9wQm94U2l6ZS5oKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BQYW4gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRTaXplID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PiwgZGlyOiBEaXJUeXBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZUxpbmVYID0gb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53O1xyXG4gICAgY29uc3Qgd0xpbmVYID0gb2Zmc2V0Lng7XHJcbiAgICBjb25zdCBzTGluZVkgPSBvZmZzZXQueSArIGNyb3BCb3hTaXplLmg7XHJcbiAgICBjb25zdCBuTGluZVkgPSBvZmZzZXQueTtcclxuXHJcbiAgICBjb25zdCBzZXRTaXplQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgXHJcbiAgICAgICAgeDogZS5jbGllbnRYIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQsIFxyXG4gICAgICAgIHk6IGUuY2xpZW50WSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3AsXHJcbiAgICAgIH07XHJcbiAgICAgIHNldEJveChjdXJyZW50TW91c2VQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEJveCA9IChjdXJyZW50TW91c2VQb3MpID0+IHtcclxuICAgICAgY29uc3QgaXNDcm9zc0VMID0gISh3TGluZVggKyBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzV0wgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NTTCA9ICEobkxpbmVZICsgY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgaXNDcm9zc05MID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgY29uc3QgZVhPZmZzZXQgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCB3WE9mZnNldCA9IHdMaW5lWCAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgc1lPZmZzZXQgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBuWU9mZnNldCA9IG5MaW5lWSAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuXHJcbiAgICAgIGNvbnN0IGVDcm9zc1cgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHdDcm9zc1cgPSBjdXJyZW50TW91c2VQb3MueCAtIHdMaW5lWCAtIGNyb3BCb3hTaXplLnc7XHJcbiAgICAgIGNvbnN0IHNDcm9zc0ggPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcbiAgICAgIGNvbnN0IG5Dcm9zc0ggPSBjdXJyZW50TW91c2VQb3MueSAtIG5MaW5lWSAtIGNyb3BCb3hTaXplLmg7XHJcblxyXG4gICAgICBjb25zdCBlVyA9IGNyb3BCb3hTaXplLncgKyBjdXJyZW50TW91c2VQb3MueCAtIGVMaW5lWDtcclxuICAgICAgY29uc3Qgd1cgPSBjcm9wQm94U2l6ZS53ICsgd0xpbmVYIC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHNIID0gY3JvcEJveFNpemUuaCArIGN1cnJlbnRNb3VzZVBvcy55IC0gc0xpbmVZO1xyXG4gICAgICBjb25zdCBuSCA9IGNyb3BCb3hTaXplLmggKyBuTGluZVkgLSBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIHN3aXRjaCAoZGlyKSB7XHJcbiAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25lJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbncnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9wU2V0U2l6ZSA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRTaXplQ3JvcEJveCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRTaXplKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERhc2ggPSAoKSA9PiBbJ3cnLCAnaCddLm1hcCgoZGlyKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2Rhc2gnLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0TGluZSA9ICgpID0+IExJTkVfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2xpbmUnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldFNpemUoZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIGNvbnN0IGdldFBvaW50cyA9ICgpID0+IFBPSU5UX0RJUi5tYXAoKGRpcjogRGlyVHlwZSkgPT5cclxuICAgIDxzcGFuIGtleT17ZGlyfSBjbGFzc05hbWU9e2N4KCdwb2ludCcsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0U2l6ZShlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjeCgnY3JvcEJveCcpfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBgJHtjcm9wQm94U2l6ZS53fXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke2Nyb3BCb3hTaXplLmh9cHhgLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtvZmZzZXQueH1weCkgdHJhbnNsYXRlWSgke29mZnNldC55fXB4KWBcclxuICAgICAgfX1cclxuICAgID5cclxuXHJcbiAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd2aWV3Qm94Jyl9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ3ZpZXdJbWcnKX1cclxuICAgICAgICAgIHNyYz17aW1nUGF0aH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoLSR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcblxyXG4gICAgICB7Lyog6rKp7J6QIOyYgeyXrSAqL31cclxuICAgICAge2dldERhc2goKX1cclxuXHJcbiAgICAgIHsvKiDspJHslZkg7Iut7J6Q6rCAIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnY3Jvc3MnKX0gLz5cclxuXHJcbiAgICAgIHsvKiDsu6TshJwg7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdtb3ZlQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFBhbn0gLz5cclxuXHJcbiAgICAgIHsvKiDrs7TrjZQg7JiB7JetICovfVxyXG4gICAgICB7Z2V0TGluZSgpfVxyXG5cclxuICAgICAgey8qIOygkCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXRQb2ludHMoKX1cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3BCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==