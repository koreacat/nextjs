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
    console.log('move');
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
      lineNumber: 277,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('tooltipWrap'),
      style: {
        transform: "translate(".concat(toolTipPos.x, ", ").concat(toolTipPos.y, ")")
      },
      children: toolTipEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('scale'),
      children: ["scale: ", scale.toFixed(2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: cx('btn'),
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 276,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXBFbCIsInNldFRvb2xUaXBFbCIsInRvb2xUaXBQb3MiLCJzZXRUb29sVGlwUG9zIiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwiR1JJRF9TQ0FMRSIsInMiLCJuWCIsIk1hdGgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic29ydGVkTGlzdCIsInNvcnQiLCJhIiwiYiIsInIiLCJmb3JFYWNoIiwicG9pbnQiLCJmaWxsIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJoZWlnaHQiLCJtb3VzZU1vdmUiLCJlIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsIm1vdXNlVXAiLCJzdHlsZSIsImN1cnNvciIsImRvY3VtZW50Iiwic3RhcnRQYW4iLCJuYXRpdmVFdmVudCIsImhhbmRsZU1vdXNlTW92ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b29sVGlwIiwiY2lyY2xlIiwiUGF0aDJEIiwiaXNQb2ludEluUGF0aCIsInRyYW5zZm9ybSIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywrREFBaEIsQ0FBWDtBQWNDO0FBS0E7QUFFRCxJQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVDLEdBQUMsRUFBRSxDQUFMO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQWQsQ0FBZjtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFkOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQStCQyxFQUEvQixFQUEwQztBQUN4QyxTQUFPO0FBQUVMLEtBQUMsRUFBRUksRUFBRSxDQUFDSixD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QUVMM0MsYUFBSyxZQUFLbkQsV0FBTCxPQUZBO0FBR0xxRixjQUFNLFlBQUtwRixZQUFMO0FBSEQ7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFhRTtBQUNFLGVBQVMsRUFBRW5CLEVBQUUsQ0FBQyxhQUFELENBRGY7QUFFRSxXQUFLLEVBQUU7QUFDTDJILGlCQUFTLHNCQUFleEYsVUFBVSxDQUFDNUIsQ0FBMUIsZUFBZ0M0QixVQUFVLENBQUMzQixDQUEzQztBQURKLE9BRlQ7QUFBQSxnQkFNR3lCO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLGVBcUJFO0FBQU0sZUFBUyxFQUFFakMsRUFBRSxDQUFDLE9BQUQsQ0FBbkI7QUFBQSw0QkFBc0NlLEtBQUssQ0FBQzZHLE9BQU4sQ0FBYyxDQUFkLENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRixlQXNCRTtBQUFRLGVBQVMsRUFBRTVILEVBQUUsQ0FBQyxLQUFELENBQXJCO0FBQThCLGFBQU8sRUFBRTtBQUFBLGVBQU13QixHQUFHLElBQUl1QyxLQUFLLENBQUN2QyxHQUFELENBQWxCO0FBQUEsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0E1UEQ7O0dBQU1QLFU7O0tBQUFBLFU7QUE4UFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1YmJsZUNoYXJ0LmY0YjQwNTExOTA5ZGQxYjA5MWI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VMYXlvdXRFZmZlY3QsXHJcbiAgdXNlUmVmLFxyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1YmJsZUNoYXJ0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBDaGFydERhdGEge1xyXG4gIHBvaW50OiBQb2ludDtcclxuICByOiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdG9vbFRpcD86IFJlYWN0RWxlbWVudDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENhbnZhc1Byb3BzIHtcclxuICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG4gIGNoYXJ0RGF0YUxpc3Q/OiBDaGFydERhdGFbXTtcclxufTtcclxuXHJcbmludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IE9SSUdJTiA9IE9iamVjdC5mcmVlemUoeyB4OiAwLCB5OiAwIH0pO1xyXG5jb25zdCBSQVRJTyA9IDE7XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggKyBwMi54LCB5OiBwMS55ICsgcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY2FsZVBvaW50KHAxOiBQb2ludCwgc2NhbGU6IG51bWJlcikge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLyBzY2FsZSwgeTogcDEueSAvIHNjYWxlIH07XHJcbn1cclxuXHJcbmNvbnN0IFpPT01fU0VOU0lUSVZJVFkgPSA1MDA7IC8vIGJpZ2dlciBmb3IgbG93ZXIgem9vbSBwZXIgc2Nyb2xsXHJcblxyXG5jb25zdCBCdWJibGVDaGFyID0gKHsgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY2hhcnREYXRhTGlzdCB9OiBDYW52YXNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW21vdXNlUG9zLCBzZXRNb3VzZVBvc10gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdmlld3BvcnRUb3BMZWZ0LCBzZXRWaWV3cG9ydFRvcExlZnRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW3Rvb2xUaXBFbCwgc2V0VG9vbFRpcEVsXSA9IHVzZVN0YXRlKDw+PC8+KTtcclxuICBjb25zdCBbdG9vbFRpcFBvcywgc2V0VG9vbFRpcFBvc10gPSB1c2VTdGF0ZSh7IHg6ICcwcHgnLCB5OiAnMHB4JyB9KTtcclxuICBjb25zdCBpc1Jlc2V0UmVmID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgbGFzdE9mZnNldFJlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuXHJcbiAgLy8gdXBkYXRlIGxhc3Qgb2Zmc2V0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IG9mZnNldDtcclxuICB9LCBbb2Zmc2V0XSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIG1vdXNlIHBvc2l0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVNb3VzZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zID0geyB4OiBldmVudC5vZmZzZXRYLCB5OiBldmVudC5vZmZzZXRZIH07XHJcbiAgICAgICAgY29uc3QgdG9wTGVmdENhbnZhc1BvcyA9IHtcclxuICAgICAgICAgIHg6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldExlZnQsXHJcbiAgICAgICAgICB5OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRUb3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldE1vdXNlUG9zKGRpZmZQb2ludHModmlld3BvcnRNb3VzZVBvcywgdG9wTGVmdENhbnZhc1BvcykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3Igem9vbVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gdGhpcyBpcyB0cmlja3kuIFVwZGF0ZSB0aGUgdmlld3BvcnQncyBcIm9yaWdpblwiIHN1Y2ggdGhhdFxyXG4gICAgLy8gdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZSBkdXJpbmcgc2NhbGUgLSB0aGUgJ3pvb20gcG9pbnQnIG9mIHRoZSBtb3VzZVxyXG4gICAgLy8gYmVmb3JlIGFuZCBhZnRlciB6b29tIGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcG9zaXRpb24gb24gdGhlIHZpZXdwb3J0XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVXaGVlbChldmVudDogV2hlZWxFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgY29uc3Qgem9vbSA9IDEgLSBldmVudC5kZWx0YVkgLyBaT09NX1NFTlNJVElWSVRZO1xyXG5cclxuICAgICAgICBpZiAoc2NhbGUgKiB6b29tIDwgMC4zKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHNjYWxlICogem9vbSA+IDMpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRUb3BMZWZ0RGVsdGEgPSB7XHJcbiAgICAgICAgICB4OiAobW91c2VQb3MueCAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pLFxyXG4gICAgICAgICAgeTogKG1vdXNlUG9zLnkgLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbmV3Vmlld3BvcnRUb3BMZWZ0ID0gYWRkUG9pbnRzKFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0LFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0RGVsdGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjdHgudHJhbnNsYXRlKHZpZXdwb3J0VG9wTGVmdC54LCB2aWV3cG9ydFRvcExlZnQueSk7XHJcbiAgICAgICAgY3R4LnNjYWxlKHpvb20sIHpvb20pO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoLW5ld1ZpZXdwb3J0VG9wTGVmdC54LCAtbmV3Vmlld3BvcnRUb3BMZWZ0LnkpO1xyXG5cclxuICAgICAgICBzZXRWaWV3cG9ydFRvcExlZnQobmV3Vmlld3BvcnRUb3BMZWZ0KTtcclxuICAgICAgICBzZXRTY2FsZShzY2FsZSAqIHpvb20pO1xyXG4gICAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gIH0sIFtjdHgsIG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIHZpZXdwb3J0VG9wTGVmdCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gc2V0dXAgY2FudmFzIGFuZCBzZXQgY29udGV4dFxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbnZhc1JlZikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVuZGVyQ3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKHJlbmRlckN0eCkgcmVzZXQocmVuZGVyQ3R4KTtcclxuICB9LCBbY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgY2hhcnREYXRhTGlzdF0pO1xyXG5cclxuICAvLyBwYW4gd2hlbiBvZmZzZXQgb3Igc2NhbGUgY2hhbmdlc1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4ICYmIGxhc3RPZmZzZXRSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gc2NhbGVQb2ludChcclxuICAgICAgICBkaWZmUG9pbnRzKG9mZnNldCwgbGFzdE9mZnNldFJlZi5jdXJyZW50KSxcclxuICAgICAgICBzY2FsZVxyXG4gICAgICApO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKG9mZnNldERpZmYueCwgb2Zmc2V0RGlmZi55KTtcclxuICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KChwcmV2VmFsKSA9PiBkaWZmUG9pbnRzKHByZXZWYWwsIG9mZnNldERpZmYpKTtcclxuICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSwgW2N0eCwgb2Zmc2V0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBkcmF3XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHgpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkVHJhbnNmb3JtID0gY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcclxuICAgICAgY3R4LnNldFRyYW5zZm9ybShzdG9yZWRUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgZHJhd0dyaWQoKTtcclxuICAgICAgZHJhd0NpcmNsZXMoKTtcclxuICAgICAgZHJhd1RleHQoKTtcclxuICAgIH1cclxuICB9LCBbXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGNoYXJ0RGF0YUxpc3QsXHJcbiAgICBjdHgsXHJcbiAgICBzY2FsZSxcclxuICAgIG9mZnNldCxcclxuICAgIHZpZXdwb3J0VG9wTGVmdFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBkcmF3R3JpZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IEdSSURfU0NBTEUgPSAyMDtcclxuICAgIGNvbnN0IHMgPSAxMTA7XHJcbiAgICBjb25zdCBuWCA9IE1hdGguZmxvb3IoY2FudmFzV2lkdGggKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgblkgPSBNYXRoLmZsb29yKGNhbnZhc0hlaWdodCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBwWCA9IGNhbnZhc1dpZHRoIC0gblggKiBzO1xyXG4gICAgY29uc3QgcFkgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHM7XHJcblxyXG4gICAgY29uc3QgcEwgPSBNYXRoLmNlaWwocFggLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBUID0gTWF0aC5jZWlsKHBZIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwUiA9IGNhbnZhc1dpZHRoIC0gblggKiBzIC0gcEw7XHJcbiAgICBjb25zdCBwQiA9IGNhbnZhc0hlaWdodCAtIG5ZICogcyAtIHBUO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyZXknO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgZm9yIChsZXQgeCA9IHBMOyB4IDw9IGNhbnZhc1dpZHRoIC0gcFI7IHggKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHgsIHBUKTtcclxuICAgICAgY3R4LmxpbmVUbyh4LCBjYW52YXNIZWlnaHQgLSBwQik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB5ID0gcFQ7IHkgPD0gY2FudmFzSGVpZ2h0IC0gcEI7IHkgKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHBMLCB5KTtcclxuICAgICAgY3R4LmxpbmVUbyhjYW52YXNXaWR0aCAtIHBSLCB5KTtcclxuICAgIH1cclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdDaXJjbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcbiAgICBjb25zdCBzb3J0ZWRMaXN0ID0gY2hhcnREYXRhTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBiLnIgLSBhLnI7XHJcbiAgICB9KVxyXG5cclxuICAgIHNvcnRlZExpc3QuZm9yRWFjaCgoeyBwb2ludDogeyB4LCB5IH0sIHIsIGZpbGwgfSkgPT4ge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3VGV4dCA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIC8vIHJlc2V0XHJcbiAgY29uc3QgcmVzZXQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcclxuICAgIGlmICghY3R4ICYmIGlzUmVzZXRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgLy8gYWRqdXN0IGZvciBkZXZpY2UgcGl4ZWwgZGVuc2l0eVxyXG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IGNhbnZhc1dpZHRoICogUkFUSU87XHJcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCAqIFJBVElPO1xyXG4gICAgY3R4LnNjYWxlKFJBVElPLCBSQVRJTyk7XHJcbiAgICBzZXRTY2FsZSgxKTtcclxuXHJcbiAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgc2V0Q3R4KGN0eCk7XHJcbiAgICBzZXRPZmZzZXQoT1JJR0lOKTtcclxuICAgIHNldE1vdXNlUG9zKE9SSUdJTik7XHJcbiAgICBzZXRWaWV3cG9ydFRvcExlZnQoT1JJR0lOKTtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IE9SSUdJTjtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG5cclxuICAgIC8vIHRoaXMgdGhpbmcgaXMgc28gbXVsdGlwbGUgcmVzZXRzIGluIGEgcm93IGRvbid0IGNsZWFyIGNhbnZhc1xyXG4gICAgaXNSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICAvLyBmdW5jdGlvbnMgZm9yIHBhbm5pbmdcclxuICBjb25zdCBtb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKCFjdHgpIHJldHVybjtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW91c2VVcCA9ICgpID0+IHtcclxuICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBjYW52YXNSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIHk6IGUubmF0aXZlRXZlbnQub2Zmc2V0WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWN0eCB8fCAhY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgc2V0VG9vbFRpcEVsKG51bGwpO1xyXG4gICAgY29uc29sZS5sb2coJ21vdmUnKTtcclxuXHJcbiAgICBjaGFydERhdGFMaXN0LmZvckVhY2goKHsgcG9pbnQ6IHsgeCwgeSB9LCByLCB0b29sVGlwIH0pID0+IHtcclxuICAgICAgY29uc3QgY2lyY2xlID0gbmV3IFBhdGgyRCgpO1xyXG4gICAgICBjaXJjbGUuYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgaWYgKGN0eC5pc1BvaW50SW5QYXRoKGNpcmNsZSwgZS5uYXRpdmVFdmVudC5vZmZzZXRYLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFkpKSB7XHJcbiAgICAgICAgc2V0VG9vbFRpcFBvcyh7IHg6IGAke2UubmF0aXZlRXZlbnQub2Zmc2V0WCArIDEwfXB4YCwgeTogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRZIC0gNTB9cHhgIH0pO1xyXG4gICAgICAgIHNldFRvb2xUaXBFbCh0b29sVGlwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfSBzdHlsZT17eyB3aWR0aDogY2FudmFzV2lkdGggKiBSQVRJTyB9fT5cclxuICAgICAgPGNhbnZhc1xyXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XHJcbiAgICAgICAgb25Nb3VzZURvd249e3N0YXJ0UGFufVxyXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICAgIHdpZHRoPXtjYW52YXNXaWR0aCAqIFJBVElPfVxyXG4gICAgICAgIGhlaWdodD17Y2FudmFzSGVpZ2h0ICogUkFUSU99XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGN1cnNvcjogXCJjcm9zc2hhaXJcIixcclxuICAgICAgICAgIHdpZHRoOiBgJHtjYW52YXNXaWR0aH1weGAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke2NhbnZhc0hlaWdodH1weGBcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCgndG9vbHRpcFdyYXAnKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dG9vbFRpcFBvcy54fSwgJHt0b29sVGlwUG9zLnl9KWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0b29sVGlwRWx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdzY2FsZScpfT5zY2FsZToge3NjYWxlLnRvRml4ZWQoMil9PC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXsoKSA9PiBjdHggJiYgcmVzZXQoY3R4KX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlQ2hhcjsiXSwic291cmNlUm9vdCI6IiJ9