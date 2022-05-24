webpackHotUpdate_N_E("pages/bubbleChart",{

/***/ "./src/components/charts/bubbleChart/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/charts/bubbleChart/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bubbleChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubbleChart.module.scss */ "./src/components/charts/bubbleChart/bubbleChart.module.scss");
/* harmony import */ var _bubbleChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bubbleChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\charts\\bubbleChart\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_bubbleChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
;
;
var ORIGIN = Object.freeze({
  x: 0,
  y: 0
});
var RATIO = 1;

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

function scalePoint(p1, scale) {
  return {
    x: p1.x / scale,
    y: p1.y / scale
  };
}

var ZOOM_SENSITIVITY = 500; // bigger for lower zoom per scroll

var BubbleChar = function BubbleChar(_ref) {
  _s();

  var canvasWidth = _ref.canvasWidth,
      canvasHeight = _ref.canvasHeight,
      chartDataList = _ref.chartDataList;
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      ctx = _useState[0],
      setCtx = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      scale = _useState2[0],
      setScale = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(ORIGIN),
      offset = _useState3[0],
      setOffset = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(ORIGIN),
      mousePos = _useState4[0],
      setMousePos = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(ORIGIN),
      viewportTopLeft = _useState5[0],
      setViewportTopLeft = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)),
      toolTipEl = _useState6[0],
      setToolTipEl = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    x: '0px',
    y: '0px'
  }),
      toolTipPos = _useState7[0],
      setToolTipPos = _useState7[1];

  var isResetRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var lastMousePosRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(ORIGIN);
  var lastOffsetRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(ORIGIN); // update last offset

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    lastOffsetRef.current = offset;
  }, [offset]); // add event listener on canvas for mouse position

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var el = canvasRef.current;
    if (el === null) return;

    function handleUpdateMouse(event) {
      event.preventDefault();

      if (canvasRef.current) {
        var viewportMousePos = {
          x: event.clientX,
          y: event.clientY
        };
        var topLeftCanvasPos = {
          x: canvasRef.current.offsetLeft,
          y: canvasRef.current.offsetTop
        };
        setMousePos(diffPoints(viewportMousePos, topLeftCanvasPos));
      }
    }

    el.addEventListener("mousemove", handleUpdateMouse);
    el.addEventListener("wheel", handleUpdateMouse);
    return function () {
      el.removeEventListener("mousemove", handleUpdateMouse);
      el.removeEventListener("wheel", handleUpdateMouse);
    };
  }, []); // add event listener on canvas for zoom

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var el = canvasRef.current;
    if (el === null) return; // this is tricky. Update the viewport's "origin" such that
    // the mouse doesn't move during scale - the 'zoom point' of the mouse
    // before and after zoom is relatively the same position on the viewport

    function handleWheel(event) {
      event.preventDefault();

      if (ctx) {
        var zoom = 1 - event.deltaY / ZOOM_SENSITIVITY;
        if (scale * zoom < 0.3) return;
        if (scale * zoom > 3) return;
        var viewportTopLeftDelta = {
          x: mousePos.x / scale * (1 - 1 / zoom),
          y: mousePos.y / scale * (1 - 1 / zoom)
        };
        var newViewportTopLeft = addPoints(viewportTopLeft, viewportTopLeftDelta);
        ctx.translate(viewportTopLeft.x, viewportTopLeft.y);
        ctx.scale(zoom, zoom);
        ctx.translate(-newViewportTopLeft.x, -newViewportTopLeft.y);
        setViewportTopLeft(newViewportTopLeft);
        setScale(scale * zoom);
        isResetRef.current = false;
      }
    }

    el.addEventListener("wheel", handleWheel);
    return function () {
      return el.removeEventListener("wheel", handleWheel);
    };
  }, [ctx, mousePos.x, mousePos.y, viewportTopLeft, scale]); // setup canvas and set context

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    if (!canvasRef) return;
    var renderCtx = canvasRef.current.getContext("2d");
    if (renderCtx) reset(renderCtx);
  }, [canvasHeight, canvasWidth, chartDataList]); // pan when offset or scale changes

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    if (ctx && lastOffsetRef.current) {
      var offsetDiff = scalePoint(diffPoints(offset, lastOffsetRef.current), scale);
      ctx.translate(offsetDiff.x, offsetDiff.y);
      setViewportTopLeft(function (prevVal) {
        return diffPoints(prevVal, offsetDiff);
      });
      isResetRef.current = false;
    }
  }, [ctx, offset, scale]); // draw

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    if (ctx) {
      var storedTransform = ctx.getTransform();
      ctx.canvas.width = ctx.canvas.width;
      ctx.setTransform(storedTransform);
      drawGrid();
      drawCircles();
      drawText();
    }
  }, [canvasWidth, canvasHeight, chartDataList, ctx, scale, offset, viewportTopLeft]);

  var drawGrid = function drawGrid() {
    var GRID_SCALE = 20;
    var s = 110;
    var nX = Math.floor(canvasWidth * GRID_SCALE / s) - 2;
    var nY = Math.floor(canvasHeight * GRID_SCALE / s) - 2;
    var pX = canvasWidth - nX * s;
    var pY = canvasHeight - nY * s;
    var pL = Math.ceil(pX / 2) - 0.5;
    var pT = Math.ceil(pY / 2) - 0.5;
    var pR = canvasWidth - nX * s - pL;
    var pB = canvasHeight - nY * s - pT;
    ctx.strokeStyle = 'lightgrey';
    ctx.beginPath();

    for (var x = pL; x <= canvasWidth - pR; x += s) {
      ctx.moveTo(x, pT);
      ctx.lineTo(x, canvasHeight - pB);
    }

    for (var y = pT; y <= canvasHeight - pB; y += s) {
      ctx.moveTo(pL, y);
      ctx.lineTo(canvasWidth - pR, y);
    }

    ctx.stroke();
  };

  var drawCircles = function drawCircles() {
    if (!chartDataList) return;
    chartDataList.forEach(function (_ref2) {
      var _ref2$point = _ref2.point,
          x = _ref2$point.x,
          y = _ref2$point.y,
          r = _ref2.r,
          fill = _ref2.fill;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = fill;
      ctx.fill();
    });
  };

  var drawText = function drawText() {}; // reset


  var reset = function reset(ctx) {
    if (!ctx && isResetRef.current) return; // adjust for device pixel density

    ctx.canvas.width = canvasWidth * RATIO;
    ctx.canvas.height = canvasHeight * RATIO;
    ctx.scale(RATIO, RATIO);
    setScale(1); // reset state and refs

    setCtx(ctx);
    setOffset(ORIGIN);
    setMousePos(ORIGIN);
    setViewportTopLeft(ORIGIN);
    lastOffsetRef.current = ORIGIN;
    lastMousePosRef.current = ORIGIN; // this thing is so multiple resets in a row don't clear canvas

    isResetRef.current = true;
  }; // functions for panning


  var mouseMove = function mouseMove(e) {
    if (!ctx) return;
    var lastMousePos = lastMousePosRef.current;
    var currentMousePos = {
      x: e.offsetX,
      y: e.offsetY
    };
    lastMousePosRef.current = currentMousePos;
    var mouseDiff = diffPoints(currentMousePos, lastMousePos);
    setOffset(function (prevOffset) {
      return addPoints(prevOffset, mouseDiff);
    });
  };

  var mouseUp = function mouseUp() {
    canvasRef.current.style.cursor = "crosshair";
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  };

  var startPan = function startPan(e) {
    canvasRef.current.style.cursor = "grabbing";
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
    lastMousePosRef.current = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    };
  };

  var handleMouseMove = function handleMouseMove(e) {
    if (!ctx || !chartDataList) return;
    setToolTipEl(null);
    chartDataList.forEach(function (_ref3) {
      var _ref3$point = _ref3.point,
          x = _ref3$point.x,
          y = _ref3$point.y,
          r = _ref3.r,
          toolTip = _ref3.toolTip;
      var circle = new Path2D();
      circle.arc(x, y, r, 0, 2 * Math.PI);

      if (ctx.isPointInPath(circle, e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
        setToolTipPos({
          x: "".concat(e.nativeEvent.offsetX - 140, "px"),
          y: "".concat(e.nativeEvent.offsetY - 60, "px")
        });
        setToolTipEl(toolTip);
        return;
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    style: {
      width: canvasWidth * RATIO
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      onMouseMove: handleMouseMove,
      onMouseDown: startPan,
      ref: canvasRef,
      width: canvasWidth * RATIO,
      height: canvasHeight * RATIO,
      style: {
        cursor: "crosshair",
        width: "".concat(canvasWidth, "px"),
        height: "".concat(canvasHeight, "px")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('tooltipWrap'),
      style: {
        transform: "translate(".concat(toolTipPos.x, ", ").concat(toolTipPos.y, ")")
      },
      children: toolTipEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: ["scale: ", scale.toString()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: cx('btn'),
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 272,
    columnNumber: 5
  }, _this);
};

_s(BubbleChar, "EEGs3qw0sgus/g8LbPtGk3i6iPc=");

_c = BubbleChar;
/* harmony default export */ __webpack_exports__["default"] = (BubbleChar);

var _c;

$RefreshReg$(_c, "BubbleChar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXBFbCIsInNldFRvb2xUaXBFbCIsInRvb2xUaXBQb3MiLCJzZXRUb29sVGlwUG9zIiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwiR1JJRF9TQ0FMRSIsInMiLCJuWCIsIk1hdGgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZm9yRWFjaCIsInBvaW50IiwiciIsImZpbGwiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImhlaWdodCIsIm1vdXNlTW92ZSIsImUiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm1vdXNlRGlmZiIsInByZXZPZmZzZXQiLCJtb3VzZVVwIiwic3R5bGUiLCJjdXJzb3IiLCJkb2N1bWVudCIsInN0YXJ0UGFuIiwibmF0aXZlRXZlbnQiLCJoYW5kbGVNb3VzZU1vdmUiLCJ0b29sVGlwIiwiY2lyY2xlIiwiUGF0aDJEIiwiaXNQb2ludEluUGF0aCIsInRyYW5zZm9ybSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsK0RBQWhCLENBQVg7QUFjQztBQUtBO0FBRUQsSUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFQyxHQUFDLEVBQUUsQ0FBTDtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFkLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUcsQ0FBZDs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFTCxLQUFDLEVBQUVJLEVBQUUsQ0FBQ0osQ0FBSCxHQUFPSyxFQUFFLENBQUNMLENB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Q0FBM0M7QUFESixPQUZUO0FBQUEsZ0JBTUd5QjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRixlQXFCRTtBQUFBLDRCQUFjbEIsS0FBSyxDQUFDeUcsUUFBTixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRixlQXNCRTtBQUFRLGVBQVMsRUFBRXhILEVBQUUsQ0FBQyxLQUFELENBQXJCO0FBQThCLGFBQU8sRUFBRTtBQUFBLGVBQU13QixHQUFHLElBQUl1QyxLQUFLLENBQUN2QyxHQUFELENBQWxCO0FBQUEsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0F4UEQ7O0dBQU1QLFU7O0tBQUFBLFU7QUEwUFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1YmJsZUNoYXJ0LjAzZGNlOWUyY2MyYjg0YTUzZjcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VMYXlvdXRFZmZlY3QsXHJcbiAgdXNlUmVmLFxyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1YmJsZUNoYXJ0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBDaGFydERhdGEge1xyXG4gIHBvaW50OiBQb2ludDtcclxuICByOiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdG9vbFRpcD86IFJlYWN0RWxlbWVudDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENhbnZhc1Byb3BzIHtcclxuICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG4gIGNoYXJ0RGF0YUxpc3Q/OiBDaGFydERhdGFbXTtcclxufTtcclxuXHJcbmludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IE9SSUdJTiA9IE9iamVjdC5mcmVlemUoeyB4OiAwLCB5OiAwIH0pO1xyXG5jb25zdCBSQVRJTyA9IDE7XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggKyBwMi54LCB5OiBwMS55ICsgcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY2FsZVBvaW50KHAxOiBQb2ludCwgc2NhbGU6IG51bWJlcikge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLyBzY2FsZSwgeTogcDEueSAvIHNjYWxlIH07XHJcbn1cclxuXHJcbmNvbnN0IFpPT01fU0VOU0lUSVZJVFkgPSA1MDA7IC8vIGJpZ2dlciBmb3IgbG93ZXIgem9vbSBwZXIgc2Nyb2xsXHJcblxyXG5jb25zdCBCdWJibGVDaGFyID0gKHsgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY2hhcnREYXRhTGlzdCB9OiBDYW52YXNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW21vdXNlUG9zLCBzZXRNb3VzZVBvc10gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdmlld3BvcnRUb3BMZWZ0LCBzZXRWaWV3cG9ydFRvcExlZnRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW3Rvb2xUaXBFbCwgc2V0VG9vbFRpcEVsXSA9IHVzZVN0YXRlKDw+PC8+KTtcclxuICBjb25zdCBbdG9vbFRpcFBvcywgc2V0VG9vbFRpcFBvc10gPSB1c2VTdGF0ZSh7IHg6ICcwcHgnLCB5OiAnMHB4JyB9KTtcclxuICBjb25zdCBpc1Jlc2V0UmVmID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgbGFzdE9mZnNldFJlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuXHJcbiAgLy8gdXBkYXRlIGxhc3Qgb2Zmc2V0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IG9mZnNldDtcclxuICB9LCBbb2Zmc2V0XSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIG1vdXNlIHBvc2l0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVNb3VzZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zID0geyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH07XHJcbiAgICAgICAgY29uc3QgdG9wTGVmdENhbnZhc1BvcyA9IHtcclxuICAgICAgICAgIHg6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldExlZnQsXHJcbiAgICAgICAgICB5OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRUb3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldE1vdXNlUG9zKGRpZmZQb2ludHModmlld3BvcnRNb3VzZVBvcywgdG9wTGVmdENhbnZhc1BvcykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3Igem9vbVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gdGhpcyBpcyB0cmlja3kuIFVwZGF0ZSB0aGUgdmlld3BvcnQncyBcIm9yaWdpblwiIHN1Y2ggdGhhdFxyXG4gICAgLy8gdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZSBkdXJpbmcgc2NhbGUgLSB0aGUgJ3pvb20gcG9pbnQnIG9mIHRoZSBtb3VzZVxyXG4gICAgLy8gYmVmb3JlIGFuZCBhZnRlciB6b29tIGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcG9zaXRpb24gb24gdGhlIHZpZXdwb3J0XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVXaGVlbChldmVudDogV2hlZWxFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgY29uc3Qgem9vbSA9IDEgLSBldmVudC5kZWx0YVkgLyBaT09NX1NFTlNJVElWSVRZO1xyXG5cclxuICAgICAgICBpZiAoc2NhbGUgKiB6b29tIDwgMC4zKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHNjYWxlICogem9vbSA+IDMpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRUb3BMZWZ0RGVsdGEgPSB7XHJcbiAgICAgICAgICB4OiAobW91c2VQb3MueCAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pLFxyXG4gICAgICAgICAgeTogKG1vdXNlUG9zLnkgLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbmV3Vmlld3BvcnRUb3BMZWZ0ID0gYWRkUG9pbnRzKFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0LFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0RGVsdGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjdHgudHJhbnNsYXRlKHZpZXdwb3J0VG9wTGVmdC54LCB2aWV3cG9ydFRvcExlZnQueSk7XHJcbiAgICAgICAgY3R4LnNjYWxlKHpvb20sIHpvb20pO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoLW5ld1ZpZXdwb3J0VG9wTGVmdC54LCAtbmV3Vmlld3BvcnRUb3BMZWZ0LnkpO1xyXG5cclxuICAgICAgICBzZXRWaWV3cG9ydFRvcExlZnQobmV3Vmlld3BvcnRUb3BMZWZ0KTtcclxuICAgICAgICBzZXRTY2FsZShzY2FsZSAqIHpvb20pO1xyXG4gICAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gIH0sIFtjdHgsIG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIHZpZXdwb3J0VG9wTGVmdCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gc2V0dXAgY2FudmFzIGFuZCBzZXQgY29udGV4dFxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbnZhc1JlZikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVuZGVyQ3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKHJlbmRlckN0eCkgcmVzZXQocmVuZGVyQ3R4KTtcclxuICB9LCBbY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgY2hhcnREYXRhTGlzdF0pO1xyXG5cclxuICAvLyBwYW4gd2hlbiBvZmZzZXQgb3Igc2NhbGUgY2hhbmdlc1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4ICYmIGxhc3RPZmZzZXRSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gc2NhbGVQb2ludChcclxuICAgICAgICBkaWZmUG9pbnRzKG9mZnNldCwgbGFzdE9mZnNldFJlZi5jdXJyZW50KSxcclxuICAgICAgICBzY2FsZVxyXG4gICAgICApO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKG9mZnNldERpZmYueCwgb2Zmc2V0RGlmZi55KTtcclxuICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KChwcmV2VmFsKSA9PiBkaWZmUG9pbnRzKHByZXZWYWwsIG9mZnNldERpZmYpKTtcclxuICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSwgW2N0eCwgb2Zmc2V0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBkcmF3XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHgpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkVHJhbnNmb3JtID0gY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcclxuICAgICAgY3R4LnNldFRyYW5zZm9ybShzdG9yZWRUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgZHJhd0dyaWQoKTtcclxuICAgICAgZHJhd0NpcmNsZXMoKTtcclxuICAgICAgZHJhd1RleHQoKTtcclxuICAgIH1cclxuICB9LCBbXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGNoYXJ0RGF0YUxpc3QsXHJcbiAgICBjdHgsXHJcbiAgICBzY2FsZSxcclxuICAgIG9mZnNldCxcclxuICAgIHZpZXdwb3J0VG9wTGVmdFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBkcmF3R3JpZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IEdSSURfU0NBTEUgPSAyMDtcclxuICAgIGNvbnN0IHMgPSAxMTA7XHJcbiAgICBjb25zdCBuWCA9IE1hdGguZmxvb3IoY2FudmFzV2lkdGggKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgblkgPSBNYXRoLmZsb29yKGNhbnZhc0hlaWdodCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBwWCA9IGNhbnZhc1dpZHRoIC0gblggKiBzO1xyXG4gICAgY29uc3QgcFkgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHM7XHJcblxyXG4gICAgY29uc3QgcEwgPSBNYXRoLmNlaWwocFggLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBUID0gTWF0aC5jZWlsKHBZIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwUiA9IGNhbnZhc1dpZHRoIC0gblggKiBzIC0gcEw7XHJcbiAgICBjb25zdCBwQiA9IGNhbnZhc0hlaWdodCAtIG5ZICogcyAtIHBUO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyZXknO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgZm9yIChsZXQgeCA9IHBMOyB4IDw9IGNhbnZhc1dpZHRoIC0gcFI7IHggKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHgsIHBUKTtcclxuICAgICAgY3R4LmxpbmVUbyh4LCBjYW52YXNIZWlnaHQgLSBwQik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB5ID0gcFQ7IHkgPD0gY2FudmFzSGVpZ2h0IC0gcEI7IHkgKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHBMLCB5KTtcclxuICAgICAgY3R4LmxpbmVUbyhjYW52YXNXaWR0aCAtIHBSLCB5KTtcclxuICAgIH1cclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdDaXJjbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcbiAgICBjaGFydERhdGFMaXN0LmZvckVhY2goKHsgcG9pbnQ6IHsgeCwgeSB9LCByLCBmaWxsIH0pID0+IHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGw7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd1RleHQgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICAvLyByZXNldFxyXG4gIGNvbnN0IHJlc2V0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XHJcbiAgICBpZiAoIWN0eCAmJiBpc1Jlc2V0UmVmLmN1cnJlbnQpIHJldHVybjtcclxuICAgIC8vIGFkanVzdCBmb3IgZGV2aWNlIHBpeGVsIGRlbnNpdHlcclxuICAgIGN0eC5jYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCAqIFJBVElPO1xyXG4gICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKiBSQVRJTztcclxuICAgIGN0eC5zY2FsZShSQVRJTywgUkFUSU8pO1xyXG4gICAgc2V0U2NhbGUoMSk7XHJcblxyXG4gICAgLy8gcmVzZXQgc3RhdGUgYW5kIHJlZnNcclxuICAgIHNldEN0eChjdHgpO1xyXG4gICAgc2V0T2Zmc2V0KE9SSUdJTik7XHJcbiAgICBzZXRNb3VzZVBvcyhPUklHSU4pO1xyXG4gICAgc2V0Vmlld3BvcnRUb3BMZWZ0KE9SSUdJTik7XHJcbiAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBPUklHSU47XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IE9SSUdJTjtcclxuXHJcbiAgICAvLyB0aGlzIHRoaW5nIGlzIHNvIG11bHRpcGxlIHJlc2V0cyBpbiBhIHJvdyBkb24ndCBjbGVhciBjYW52YXNcclxuICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgLy8gZnVuY3Rpb25zIGZvciBwYW5uaW5nXHJcbiAgY29uc3QgbW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICghY3R4KSByZXR1cm47XHJcbiAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFkgfTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gY3VycmVudE1vdXNlUG9zO1xyXG4gICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcbiAgICBzZXRPZmZzZXQoKHByZXZPZmZzZXQpID0+IGFkZFBvaW50cyhwcmV2T2Zmc2V0LCBtb3VzZURpZmYpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vdXNlVXAgPSAoKSA9PiB7XHJcbiAgICBjYW52YXNSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VVcCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxDYW52YXNFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VVcCk7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5uYXRpdmVFdmVudC5vZmZzZXRYLCB5OiBlLm5hdGl2ZUV2ZW50Lm9mZnNldFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxDYW52YXNFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgaWYgKCFjdHggfHwgIWNoYXJ0RGF0YUxpc3QpIHJldHVybjtcclxuICAgIHNldFRvb2xUaXBFbChudWxsKTtcclxuXHJcbiAgICBjaGFydERhdGFMaXN0LmZvckVhY2goKHsgcG9pbnQ6IHsgeCwgeSB9LCByLCB0b29sVGlwIH0pID0+IHtcclxuICAgICAgY29uc3QgY2lyY2xlID0gbmV3IFBhdGgyRCgpO1xyXG4gICAgICBjaXJjbGUuYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgaWYgKGN0eC5pc1BvaW50SW5QYXRoKGNpcmNsZSwgZS5uYXRpdmVFdmVudC5vZmZzZXRYLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFkpKSB7XHJcbiAgICAgICAgc2V0VG9vbFRpcFBvcyh7IHg6IGAke2UubmF0aXZlRXZlbnQub2Zmc2V0WCAtIDE0MH1weGAsIHk6IGAke2UubmF0aXZlRXZlbnQub2Zmc2V0WSAtIDYwfXB4YCB9KTtcclxuICAgICAgICBzZXRUb29sVGlwRWwodG9vbFRpcCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9IHN0eWxlPXt7IHdpZHRoOiBjYW52YXNXaWR0aCAqIFJBVElPIH19PlxyXG4gICAgICA8Y2FudmFzXHJcbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cclxuICAgICAgICBvbk1vdXNlRG93bj17c3RhcnRQYW59XHJcbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XHJcbiAgICAgICAgd2lkdGg9e2NhbnZhc1dpZHRoICogUkFUSU99XHJcbiAgICAgICAgaGVpZ2h0PXtjYW52YXNIZWlnaHQgKiBSQVRJT31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY3Vyc29yOiBcImNyb3NzaGFpclwiLFxyXG4gICAgICAgICAgd2lkdGg6IGAke2NhbnZhc1dpZHRofXB4YCxcclxuICAgICAgICAgIGhlaWdodDogYCR7Y2FudmFzSGVpZ2h0fXB4YFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2N4KCd0b29sdGlwV3JhcCcpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0b29sVGlwUG9zLnh9LCAke3Rvb2xUaXBQb3MueX0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Rvb2xUaXBFbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuPnNjYWxlOiB7c2NhbGUudG9TdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjeCgnYnRuJyl9IG9uQ2xpY2s9eygpID0+IGN0eCAmJiByZXNldChjdHgpfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWJibGVDaGFyOyJdLCJzb3VyY2VSb290IjoiIn0=