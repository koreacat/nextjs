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
      x: e.clientX,
      y: e.clientY
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: cx('btn'),
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 293,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXBFbCIsInNldFRvb2xUaXBFbCIsInRvb2xUaXBQb3MiLCJzZXRUb29sVGlwUG9zIiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwiR1JJRF9TQ0FMRSIsInMiLCJuWCIsIk1hdGgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZm9yRWFjaCIsInBvaW50IiwiciIsImZpbGwiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImhlaWdodCIsIm1vdXNlTW92ZSIsImUiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwibW91c2VVcCIsInN0eWxlIiwiY3Vyc29yIiwiZG9jdW1lbnQiLCJzdGFydFBhbiIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJoYW5kbGVNb3VzZU1vdmUiLCJ0b29sVGlwIiwiY2lyY2xlIiwiUGF0aDJEIiwiaXNQb2ludEluUGF0aCIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLCtEQUFoQixDQUFYO0FBY0M7QUFLQTtBQUVELElBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRUMsR0FBQyxFQUFFLENBQUw7QUFBUUMsR0FBQyxFQUFFO0FBQVgsQ0FBZCxDQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQWQ7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsRUFBcEIsRUFBK0JDLEVBQS9CLEVBQTBDO0FBQ3hDLFNBQU87QUFBRUwsS0FBQyxFQUFFSSxFQUFFLENBQUNKLENBQUgsR0FBT0ssRUFBRSxDQUFDTCxDQUFmO0FBQWtCQyxL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LE9BRlQ7QUFBQSxnQkFNR3lCO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLGVBcUJFO0FBQVEsZUFBUyxFQUFFakMsRUFBRSxDQUFDLEtBQUQsQ0FBckI7QUFBOEIsYUFBTyxFQUFFO0FBQUEsZUFBTXdCLEdBQUcsSUFBSXVDLEtBQUssQ0FBQ3ZDLEdBQUQsQ0FBbEI7QUFBQSxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQXZQRDs7R0FBTVAsVTs7S0FBQUEsVTtBQXlQU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnViYmxlQ2hhcnQuZTc1Mzk0NTIwMzA4MzBmMzcxZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZUxheW91dEVmZmVjdCxcclxuICB1c2VSZWYsXHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3RFbGVtZW50XHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnViYmxlQ2hhcnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIENoYXJ0RGF0YSB7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG4gIHI6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0b29sVGlwPzogUmVhY3RFbGVtZW50O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHMge1xyXG4gIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhcnREYXRhTGlzdD86IENoYXJ0RGF0YVtdO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgT1JJR0lOID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmNvbnN0IFJBVElPID0gMTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCArIHAyLngsIHk6IHAxLnkgKyBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjYWxlUG9pbnQocDE6IFBvaW50LCBzY2FsZTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAvIHNjYWxlLCB5OiBwMS55IC8gc2NhbGUgfTtcclxufVxyXG5cclxuY29uc3QgWk9PTV9TRU5TSVRJVklUWSA9IDUwMDsgLy8gYmlnZ2VyIGZvciBsb3dlciB6b29tIHBlciBzY3JvbGxcclxuXHJcbmNvbnN0IEJ1YmJsZUNoYXIgPSAoeyBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjaGFydERhdGFMaXN0IH06IENhbnZhc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGU8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbbW91c2VQb3MsIHNldE1vdXNlUG9zXSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFt2aWV3cG9ydFRvcExlZnQsIHNldFZpZXdwb3J0VG9wTGVmdF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdG9vbFRpcEVsLCBzZXRUb29sVGlwRWxdID0gdXNlU3RhdGUoPD48Lz4pO1xyXG4gIGNvbnN0IFt0b29sVGlwUG9zLCBzZXRUb29sVGlwUG9zXSA9IHVzZVN0YXRlKHsgeDogJzBweCcsIHk6ICcwcHgnIH0pO1xyXG4gIGNvbnN0IGlzUmVzZXRSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBsYXN0T2Zmc2V0UmVmID0gdXNlUmVmPFBvaW50PihPUklHSU4pO1xyXG5cclxuICAvLyB1cGRhdGUgbGFzdCBvZmZzZXRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGFzdE9mZnNldFJlZi5jdXJyZW50ID0gb2Zmc2V0O1xyXG4gIH0sIFtvZmZzZXRdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3IgbW91c2UgcG9zaXRpb25cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZU1vdXNlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChjYW52YXNSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0TW91c2VQb3MgPSB7IHg6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFkgfTtcclxuICAgICAgICBjb25zdCB0b3BMZWZ0Q2FudmFzUG9zID0ge1xyXG4gICAgICAgICAgeDogY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCxcclxuICAgICAgICAgIHk6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldFRvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0TW91c2VQb3MoZGlmZlBvaW50cyh2aWV3cG9ydE1vdXNlUG9zLCB0b3BMZWZ0Q2FudmFzUG9zKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gY2FudmFzIGZvciB6b29tXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAvLyB0aGlzIGlzIHRyaWNreS4gVXBkYXRlIHRoZSB2aWV3cG9ydCdzIFwib3JpZ2luXCIgc3VjaCB0aGF0XHJcbiAgICAvLyB0aGUgbW91c2UgZG9lc24ndCBtb3ZlIGR1cmluZyBzY2FsZSAtIHRoZSAnem9vbSBwb2ludCcgb2YgdGhlIG1vdXNlXHJcbiAgICAvLyBiZWZvcmUgYW5kIGFmdGVyIHpvb20gaXMgcmVsYXRpdmVseSB0aGUgc2FtZSBwb3NpdGlvbiBvbiB0aGUgdmlld3BvcnRcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVdoZWVsKGV2ZW50OiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICBjb25zdCB6b29tID0gMSAtIGV2ZW50LmRlbHRhWSAvIFpPT01fU0VOU0lUSVZJVFk7XHJcblxyXG4gICAgICAgIGlmIChzY2FsZSAqIHpvb20gPCAwLjMpIHJldHVybjtcclxuICAgICAgICBpZiAoc2NhbGUgKiB6b29tID4gMykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3cG9ydFRvcExlZnREZWx0YSA9IHtcclxuICAgICAgICAgIHg6IChtb3VzZVBvcy54IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSksXHJcbiAgICAgICAgICB5OiAobW91c2VQb3MueSAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBuZXdWaWV3cG9ydFRvcExlZnQgPSBhZGRQb2ludHMoXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnQsXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnREZWx0YVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodmlld3BvcnRUb3BMZWZ0LngsIHZpZXdwb3J0VG9wTGVmdC55KTtcclxuICAgICAgICBjdHguc2NhbGUoem9vbSwgem9vbSk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtbmV3Vmlld3BvcnRUb3BMZWZ0LngsIC1uZXdWaWV3cG9ydFRvcExlZnQueSk7XHJcblxyXG4gICAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChuZXdWaWV3cG9ydFRvcExlZnQpO1xyXG4gICAgICAgIHNldFNjYWxlKHNjYWxlICogem9vbSk7XHJcbiAgICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gICAgcmV0dXJuICgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCk7XHJcbiAgfSwgW2N0eCwgbW91c2VQb3MueCwgbW91c2VQb3MueSwgdmlld3BvcnRUb3BMZWZ0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBzZXR1cCBjYW52YXMgYW5kIHNldCBjb250ZXh0XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY2FudmFzUmVmKSByZXR1cm47XHJcbiAgICBjb25zdCByZW5kZXJDdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBpZiAocmVuZGVyQ3R4KSByZXNldChyZW5kZXJDdHgpO1xyXG4gIH0sIFtjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoLCBjaGFydERhdGFMaXN0XSk7XHJcblxyXG4gIC8vIHBhbiB3aGVuIG9mZnNldCBvciBzY2FsZSBjaGFuZ2VzXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHggJiYgbGFzdE9mZnNldFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldERpZmYgPSBzY2FsZVBvaW50KFxyXG4gICAgICAgIGRpZmZQb2ludHMob2Zmc2V0LCBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQpLFxyXG4gICAgICAgIHNjYWxlXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUob2Zmc2V0RGlmZi54LCBvZmZzZXREaWZmLnkpO1xyXG4gICAgICBzZXRWaWV3cG9ydFRvcExlZnQoKHByZXZWYWwpID0+IGRpZmZQb2ludHMocHJldlZhbCwgb2Zmc2V0RGlmZikpO1xyXG4gICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LCBbY3R4LCBvZmZzZXQsIHNjYWxlXSk7XHJcblxyXG4gIC8vIGRyYXdcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN0eCkge1xyXG4gICAgICBjb25zdCBzdG9yZWRUcmFuc2Zvcm0gPSBjdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xyXG4gICAgICBjdHguc2V0VHJhbnNmb3JtKHN0b3JlZFRyYW5zZm9ybSk7XHJcblxyXG4gICAgICBkcmF3R3JpZCgpO1xyXG4gICAgICBkcmF3Q2lyY2xlcygpO1xyXG4gICAgICBkcmF3VGV4dCgpO1xyXG4gICAgfVxyXG4gIH0sIFtcclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgY2hhcnREYXRhTGlzdCxcclxuICAgIGN0eCxcclxuICAgIHNjYWxlLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgdmlld3BvcnRUb3BMZWZ0XHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGRyYXdHcmlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgR1JJRF9TQ0FMRSA9IDIwO1xyXG4gICAgY29uc3QgcyA9IDExMDtcclxuICAgIGNvbnN0IG5YID0gTWF0aC5mbG9vcihjYW52YXNXaWR0aCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBuWSA9IE1hdGguZmxvb3IoY2FudmFzSGVpZ2h0ICogR1JJRF9TQ0FMRSAvIHMpIC0gMjtcclxuICAgIGNvbnN0IHBYID0gY2FudmFzV2lkdGggLSBuWCAqIHM7XHJcbiAgICBjb25zdCBwWSA9IGNhbnZhc0hlaWdodCAtIG5ZICogcztcclxuXHJcbiAgICBjb25zdCBwTCA9IE1hdGguY2VpbChwWCAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFQgPSBNYXRoLmNlaWwocFkgLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBSID0gY2FudmFzV2lkdGggLSBuWCAqIHMgLSBwTDtcclxuICAgIGNvbnN0IHBCID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzIC0gcFQ7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JleSc7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBmb3IgKGxldCB4ID0gcEw7IHggPD0gY2FudmFzV2lkdGggLSBwUjsgeCArPSBzKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8oeCwgcFQpO1xyXG4gICAgICBjdHgubGluZVRvKHgsIGNhbnZhc0hlaWdodCAtIHBCKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IHkgPSBwVDsgeSA8PSBjYW52YXNIZWlnaHQgLSBwQjsgeSArPSBzKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8ocEwsIHkpO1xyXG4gICAgICBjdHgubGluZVRvKGNhbnZhc1dpZHRoIC0gcFIsIHkpO1xyXG4gICAgfVxyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd0NpcmNsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNoYXJ0RGF0YUxpc3QpIHJldHVybjtcclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoeyBwb2ludDogeyB4LCB5IH0sIHIsIGZpbGwgfSkgPT4ge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3VGV4dCA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIC8vIHJlc2V0XHJcbiAgY29uc3QgcmVzZXQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcclxuICAgIGlmICghY3R4ICYmIGlzUmVzZXRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgLy8gYWRqdXN0IGZvciBkZXZpY2UgcGl4ZWwgZGVuc2l0eVxyXG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IGNhbnZhc1dpZHRoICogUkFUSU87XHJcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCAqIFJBVElPO1xyXG4gICAgY3R4LnNjYWxlKFJBVElPLCBSQVRJTyk7XHJcbiAgICBzZXRTY2FsZSgxKTtcclxuXHJcbiAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgc2V0Q3R4KGN0eCk7XHJcbiAgICBzZXRPZmZzZXQoT1JJR0lOKTtcclxuICAgIHNldE1vdXNlUG9zKE9SSUdJTik7XHJcbiAgICBzZXRWaWV3cG9ydFRvcExlZnQoT1JJR0lOKTtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IE9SSUdJTjtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG5cclxuICAgIC8vIHRoaXMgdGhpbmcgaXMgc28gbXVsdGlwbGUgcmVzZXRzIGluIGEgcm93IGRvbid0IGNsZWFyIGNhbnZhc1xyXG4gICAgaXNSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICAvLyBmdW5jdGlvbnMgZm9yIHBhbm5pbmdcclxuICBjb25zdCBtb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKCFjdHgpIHJldHVybjtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW91c2VVcCA9ICgpID0+IHtcclxuICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBjYW52YXNSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIHk6IGUubmF0aXZlRXZlbnQub2Zmc2V0WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWN0eCB8fCAhY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgc2V0VG9vbFRpcEVsKG51bGwpO1xyXG5cclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoeyBwb2ludDogeyB4LCB5IH0sIHIsIHRvb2xUaXAgfSkgPT4ge1xyXG4gICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XHJcbiAgICAgIGNpcmNsZS5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBpZiAoY3R4LmlzUG9pbnRJblBhdGgoY2lyY2xlLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIGUubmF0aXZlRXZlbnQub2Zmc2V0WSkpIHtcclxuICAgICAgICBzZXRUb29sVGlwUG9zKHsgeDogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRYIC0gMTQwfXB4YCwgeTogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRZIC0gNjB9cHhgIH0pO1xyXG4gICAgICAgIHNldFRvb2xUaXBFbCh0b29sVGlwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0gc3R5bGU9e3sgd2lkdGg6IGNhbnZhc1dpZHRoICogUkFUSU8gfX0+XHJcbiAgICAgIDxjYW52YXNcclxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXtzdGFydFBhbn1cclxuICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICB3aWR0aD17Y2FudmFzV2lkdGggKiBSQVRJT31cclxuICAgICAgICBoZWlnaHQ9e2NhbnZhc0hlaWdodCAqIFJBVElPfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBjdXJzb3I6IFwiY3Jvc3NoYWlyXCIsXHJcbiAgICAgICAgICB3aWR0aDogYCR7Y2FudmFzV2lkdGh9cHhgLFxyXG4gICAgICAgICAgaGVpZ2h0OiBgJHtjYW52YXNIZWlnaHR9cHhgXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y3goJ3Rvb2x0aXBXcmFwJyl9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Rvb2xUaXBQb3MueH0sICR7dG9vbFRpcFBvcy55fSlgLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dG9vbFRpcEVsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2N4KCdidG4nKX0gb25DbGljaz17KCkgPT4gY3R4ICYmIHJlc2V0KGN0eCl9PlJlc2V0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1YmJsZUNoYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==