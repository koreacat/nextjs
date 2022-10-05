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



var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\bubbleChart\\index.tsx",
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
          x: event.offsetX,
          y: event.offsetY
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
    var sortedList = chartDataList.sort(function (a, b) {
      return b.r - a.r;
    });
    sortedList.forEach(function (_ref2) {
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
          x: "".concat(e.nativeEvent.offsetX + 10, "px"),
          y: "".concat(e.nativeEvent.offsetY - 50, "px")
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
      lineNumber: 276,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('tooltipWrap'),
      style: {
        transform: "translate(".concat(toolTipPos.x, ", ").concat(toolTipPos.y, ")")
      },
      children: toolTipEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('scale'),
      children: ["scale: ", scale.toFixed(2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: cx('btn'),
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 275,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXBFbCIsInNldFRvb2xUaXBFbCIsInRvb2xUaXBQb3MiLCJzZXRUb29sVGlwUG9zIiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwiR1JJRF9TQ0FMRSIsInMiLCJuWCIsIk1hdGgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic29ydGVkTGlzdCIsInNvcnQiLCJhIiwiYiIsInIiLCJmb3JFYWNoIiwicG9pbnQiLCJmaWxsIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJoZWlnaHQiLCJtb3VzZU1vdmUiLCJlIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsIm1vdXNlVXAiLCJzdHlsZSIsImN1cnNvciIsImRvY3VtZW50Iiwic3RhcnRQYW4iLCJuYXRpdmVFdmVudCIsImhhbmRsZU1vdXNlTW92ZSIsInRvb2xUaXAiLCJjaXJjbGUiLCJQYXRoMkQiLCJpc1BvaW50SW5QYXRoIiwidHJhbnNmb3JtIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLCtEQUFoQixDQUFYO0FBY0M7QUFLQTtBQUVELElBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRUMsR0FBQyxFQUFFLENBQUw7QUFBUUMsR0FBQyxFQUFFO0FBQVgsQ0FBZCxDQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQWQ7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsRUFBcEIsRUFBK0JDLEVBQS9CLEVBQTBDO0FBQ3hDLFNBQU87QUFBRUwsS0FBQyxFQUFFSSxFQUFFLENBQUNKLENBQUgsR0FBT0ssRUFBRSxD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O0FBSEQ7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFhRTtBQUNFLGVBQVMsRUFBRW5CLEVBQUUsQ0FBQyxhQUFELENBRGY7QUFFRSxXQUFLLEVBQUU7QUFDTHlILGlCQUFTLHNCQUFldEYsVUFBVSxDQUFDNUIsQ0FBMUIsZUFBZ0M0QixVQUFVLENBQUMzQixDQUEzQztBQURKLE9BRlQ7QUFBQSxnQkFNR3lCO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLGVBcUJFO0FBQU0sZUFBUyxFQUFFakMsRUFBRSxDQUFDLE9BQUQsQ0FBbkI7QUFBQSw0QkFBc0NlLEtBQUssQ0FBQzJHLE9BQU4sQ0FBYyxDQUFkLENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRixlQXNCRTtBQUFRLGVBQVMsRUFBRTFILEVBQUUsQ0FBQyxLQUFELENBQXJCO0FBQThCLGFBQU8sRUFBRTtBQUFBLGVBQU13QixHQUFHLElBQUl1QyxLQUFLLENBQUN2QyxHQUFELENBQWxCO0FBQUEsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0EzUEQ7O0dBQU1QLFU7O0tBQUFBLFU7QUE2UFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1YmJsZUNoYXJ0LjcwYWY2MzNmMzc0ZGJjZjRkMmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VMYXlvdXRFZmZlY3QsXHJcbiAgdXNlUmVmLFxyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1YmJsZUNoYXJ0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBDaGFydERhdGEge1xyXG4gIHBvaW50OiBQb2ludDtcclxuICByOiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdG9vbFRpcD86IFJlYWN0RWxlbWVudDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENhbnZhc1Byb3BzIHtcclxuICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG4gIGNoYXJ0RGF0YUxpc3Q/OiBDaGFydERhdGFbXTtcclxufTtcclxuXHJcbmludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IE9SSUdJTiA9IE9iamVjdC5mcmVlemUoeyB4OiAwLCB5OiAwIH0pO1xyXG5jb25zdCBSQVRJTyA9IDE7XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggKyBwMi54LCB5OiBwMS55ICsgcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY2FsZVBvaW50KHAxOiBQb2ludCwgc2NhbGU6IG51bWJlcikge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLyBzY2FsZSwgeTogcDEueSAvIHNjYWxlIH07XHJcbn1cclxuXHJcbmNvbnN0IFpPT01fU0VOU0lUSVZJVFkgPSA1MDA7IC8vIGJpZ2dlciBmb3IgbG93ZXIgem9vbSBwZXIgc2Nyb2xsXHJcblxyXG5jb25zdCBCdWJibGVDaGFyID0gKHsgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY2hhcnREYXRhTGlzdCB9OiBDYW52YXNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW21vdXNlUG9zLCBzZXRNb3VzZVBvc10gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdmlld3BvcnRUb3BMZWZ0LCBzZXRWaWV3cG9ydFRvcExlZnRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW3Rvb2xUaXBFbCwgc2V0VG9vbFRpcEVsXSA9IHVzZVN0YXRlKDw+PC8+KTtcclxuICBjb25zdCBbdG9vbFRpcFBvcywgc2V0VG9vbFRpcFBvc10gPSB1c2VTdGF0ZSh7IHg6ICcwcHgnLCB5OiAnMHB4JyB9KTtcclxuICBjb25zdCBpc1Jlc2V0UmVmID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgbGFzdE9mZnNldFJlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuXHJcbiAgLy8gdXBkYXRlIGxhc3Qgb2Zmc2V0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IG9mZnNldDtcclxuICB9LCBbb2Zmc2V0XSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIG1vdXNlIHBvc2l0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVNb3VzZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zID0geyB4OiBldmVudC5vZmZzZXRYLCB5OiBldmVudC5vZmZzZXRZIH07XHJcbiAgICAgICAgY29uc3QgdG9wTGVmdENhbnZhc1BvcyA9IHtcclxuICAgICAgICAgIHg6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldExlZnQsXHJcbiAgICAgICAgICB5OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRUb3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldE1vdXNlUG9zKGRpZmZQb2ludHModmlld3BvcnRNb3VzZVBvcywgdG9wTGVmdENhbnZhc1BvcykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3Igem9vbVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gdGhpcyBpcyB0cmlja3kuIFVwZGF0ZSB0aGUgdmlld3BvcnQncyBcIm9yaWdpblwiIHN1Y2ggdGhhdFxyXG4gICAgLy8gdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZSBkdXJpbmcgc2NhbGUgLSB0aGUgJ3pvb20gcG9pbnQnIG9mIHRoZSBtb3VzZVxyXG4gICAgLy8gYmVmb3JlIGFuZCBhZnRlciB6b29tIGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcG9zaXRpb24gb24gdGhlIHZpZXdwb3J0XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVXaGVlbChldmVudDogV2hlZWxFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgY29uc3Qgem9vbSA9IDEgLSBldmVudC5kZWx0YVkgLyBaT09NX1NFTlNJVElWSVRZO1xyXG5cclxuICAgICAgICBpZiAoc2NhbGUgKiB6b29tIDwgMC4zKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHNjYWxlICogem9vbSA+IDMpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRUb3BMZWZ0RGVsdGEgPSB7XHJcbiAgICAgICAgICB4OiAobW91c2VQb3MueCAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pLFxyXG4gICAgICAgICAgeTogKG1vdXNlUG9zLnkgLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbmV3Vmlld3BvcnRUb3BMZWZ0ID0gYWRkUG9pbnRzKFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0LFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0RGVsdGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjdHgudHJhbnNsYXRlKHZpZXdwb3J0VG9wTGVmdC54LCB2aWV3cG9ydFRvcExlZnQueSk7XHJcbiAgICAgICAgY3R4LnNjYWxlKHpvb20sIHpvb20pO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoLW5ld1ZpZXdwb3J0VG9wTGVmdC54LCAtbmV3Vmlld3BvcnRUb3BMZWZ0LnkpO1xyXG5cclxuICAgICAgICBzZXRWaWV3cG9ydFRvcExlZnQobmV3Vmlld3BvcnRUb3BMZWZ0KTtcclxuICAgICAgICBzZXRTY2FsZShzY2FsZSAqIHpvb20pO1xyXG4gICAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gIH0sIFtjdHgsIG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIHZpZXdwb3J0VG9wTGVmdCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gc2V0dXAgY2FudmFzIGFuZCBzZXQgY29udGV4dFxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbnZhc1JlZikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVuZGVyQ3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKHJlbmRlckN0eCkgcmVzZXQocmVuZGVyQ3R4KTtcclxuICB9LCBbY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgY2hhcnREYXRhTGlzdF0pO1xyXG5cclxuICAvLyBwYW4gd2hlbiBvZmZzZXQgb3Igc2NhbGUgY2hhbmdlc1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4ICYmIGxhc3RPZmZzZXRSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gc2NhbGVQb2ludChcclxuICAgICAgICBkaWZmUG9pbnRzKG9mZnNldCwgbGFzdE9mZnNldFJlZi5jdXJyZW50KSxcclxuICAgICAgICBzY2FsZVxyXG4gICAgICApO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKG9mZnNldERpZmYueCwgb2Zmc2V0RGlmZi55KTtcclxuICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KChwcmV2VmFsKSA9PiBkaWZmUG9pbnRzKHByZXZWYWwsIG9mZnNldERpZmYpKTtcclxuICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSwgW2N0eCwgb2Zmc2V0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBkcmF3XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHgpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkVHJhbnNmb3JtID0gY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcclxuICAgICAgY3R4LnNldFRyYW5zZm9ybShzdG9yZWRUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgZHJhd0dyaWQoKTtcclxuICAgICAgZHJhd0NpcmNsZXMoKTtcclxuICAgICAgZHJhd1RleHQoKTtcclxuICAgIH1cclxuICB9LCBbXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGNoYXJ0RGF0YUxpc3QsXHJcbiAgICBjdHgsXHJcbiAgICBzY2FsZSxcclxuICAgIG9mZnNldCxcclxuICAgIHZpZXdwb3J0VG9wTGVmdFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBkcmF3R3JpZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IEdSSURfU0NBTEUgPSAyMDtcclxuICAgIGNvbnN0IHMgPSAxMTA7XHJcbiAgICBjb25zdCBuWCA9IE1hdGguZmxvb3IoY2FudmFzV2lkdGggKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgblkgPSBNYXRoLmZsb29yKGNhbnZhc0hlaWdodCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBwWCA9IGNhbnZhc1dpZHRoIC0gblggKiBzO1xyXG4gICAgY29uc3QgcFkgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHM7XHJcblxyXG4gICAgY29uc3QgcEwgPSBNYXRoLmNlaWwocFggLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBUID0gTWF0aC5jZWlsKHBZIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwUiA9IGNhbnZhc1dpZHRoIC0gblggKiBzIC0gcEw7XHJcbiAgICBjb25zdCBwQiA9IGNhbnZhc0hlaWdodCAtIG5ZICogcyAtIHBUO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyZXknO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgZm9yIChsZXQgeCA9IHBMOyB4IDw9IGNhbnZhc1dpZHRoIC0gcFI7IHggKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHgsIHBUKTtcclxuICAgICAgY3R4LmxpbmVUbyh4LCBjYW52YXNIZWlnaHQgLSBwQik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB5ID0gcFQ7IHkgPD0gY2FudmFzSGVpZ2h0IC0gcEI7IHkgKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHBMLCB5KTtcclxuICAgICAgY3R4LmxpbmVUbyhjYW52YXNXaWR0aCAtIHBSLCB5KTtcclxuICAgIH1cclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdDaXJjbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcbiAgICBjb25zdCBzb3J0ZWRMaXN0ID0gY2hhcnREYXRhTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBiLnIgLSBhLnI7XHJcbiAgICB9KVxyXG5cclxuICAgIHNvcnRlZExpc3QuZm9yRWFjaCgoeyBwb2ludDogeyB4LCB5IH0sIHIsIGZpbGwgfSkgPT4ge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3VGV4dCA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIC8vIHJlc2V0XHJcbiAgY29uc3QgcmVzZXQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcclxuICAgIGlmICghY3R4ICYmIGlzUmVzZXRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgLy8gYWRqdXN0IGZvciBkZXZpY2UgcGl4ZWwgZGVuc2l0eVxyXG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IGNhbnZhc1dpZHRoICogUkFUSU87XHJcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCAqIFJBVElPO1xyXG4gICAgY3R4LnNjYWxlKFJBVElPLCBSQVRJTyk7XHJcbiAgICBzZXRTY2FsZSgxKTtcclxuXHJcbiAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgc2V0Q3R4KGN0eCk7XHJcbiAgICBzZXRPZmZzZXQoT1JJR0lOKTtcclxuICAgIHNldE1vdXNlUG9zKE9SSUdJTik7XHJcbiAgICBzZXRWaWV3cG9ydFRvcExlZnQoT1JJR0lOKTtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IE9SSUdJTjtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG5cclxuICAgIC8vIHRoaXMgdGhpbmcgaXMgc28gbXVsdGlwbGUgcmVzZXRzIGluIGEgcm93IGRvbid0IGNsZWFyIGNhbnZhc1xyXG4gICAgaXNSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICAvLyBmdW5jdGlvbnMgZm9yIHBhbm5pbmdcclxuICBjb25zdCBtb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKCFjdHgpIHJldHVybjtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW91c2VVcCA9ICgpID0+IHtcclxuICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBjYW52YXNSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIHk6IGUubmF0aXZlRXZlbnQub2Zmc2V0WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWN0eCB8fCAhY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgc2V0VG9vbFRpcEVsKG51bGwpO1xyXG5cclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoeyBwb2ludDogeyB4LCB5IH0sIHIsIHRvb2xUaXAgfSkgPT4ge1xyXG4gICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XHJcbiAgICAgIGNpcmNsZS5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBpZiAoY3R4LmlzUG9pbnRJblBhdGgoY2lyY2xlLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIGUubmF0aXZlRXZlbnQub2Zmc2V0WSkpIHtcclxuICAgICAgICBzZXRUb29sVGlwUG9zKHsgeDogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRYICsgMTB9cHhgLCB5OiBgJHtlLm5hdGl2ZUV2ZW50Lm9mZnNldFkgLSA1MH1weGAgfSk7XHJcbiAgICAgICAgc2V0VG9vbFRpcEVsKHRvb2xUaXApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9IHN0eWxlPXt7IHdpZHRoOiBjYW52YXNXaWR0aCAqIFJBVElPIH19PlxyXG4gICAgICA8Y2FudmFzXHJcbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cclxuICAgICAgICBvbk1vdXNlRG93bj17c3RhcnRQYW59XHJcbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XHJcbiAgICAgICAgd2lkdGg9e2NhbnZhc1dpZHRoICogUkFUSU99XHJcbiAgICAgICAgaGVpZ2h0PXtjYW52YXNIZWlnaHQgKiBSQVRJT31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY3Vyc29yOiBcImNyb3NzaGFpclwiLFxyXG4gICAgICAgICAgd2lkdGg6IGAke2NhbnZhc1dpZHRofXB4YCxcclxuICAgICAgICAgIGhlaWdodDogYCR7Y2FudmFzSGVpZ2h0fXB4YFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2N4KCd0b29sdGlwV3JhcCcpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0b29sVGlwUG9zLnh9LCAke3Rvb2xUaXBQb3MueX0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Rvb2xUaXBFbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3NjYWxlJyl9PnNjYWxlOiB7c2NhbGUudG9GaXhlZCgyKX08L3NwYW4+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjeCgnYnRuJyl9IG9uQ2xpY2s9eygpID0+IGN0eCAmJiByZXNldChjdHgpfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWJibGVDaGFyOyJdLCJzb3VyY2VSb290IjoiIn0=