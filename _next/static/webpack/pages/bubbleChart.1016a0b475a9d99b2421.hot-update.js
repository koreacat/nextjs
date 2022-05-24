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


  var reset = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (ctx) {
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
  }, [canvasWidth, canvasHeight]); // functions for panning

  var mouseMove = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
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
  }, [ctx]);
  var mouseUp = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    canvasRef.current.style.cursor = "crosshair";
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }, [mouseMove]);
  var startPan = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    canvasRef.current.style.cursor = "grabbing";
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
    lastMousePosRef.current = {
      x: event.pageX,
      y: event.pageY
    };
  }, [mouseMove, mouseUp]);

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
        console.log(r);
        setToolTipPos({
          x: "".concat(e.nativeEvent.offsetX - 130, "px"),
          y: "".concat(e.nativeEvent.offsetY - 120, "px")
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
      lineNumber: 283,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('tooltipWrap'),
      style: {
        transform: "translate(".concat(toolTipPos.x, ", ").concat(toolTipPos.y, ")")
      },
      children: toolTipEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: cx('btn'),
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 282,
    columnNumber: 5
  }, _this);
};

_s(BubbleChar, "LDhlv6JIOPRrtdPzSmto0QY6l0w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXBFbCIsInNldFRvb2xUaXBFbCIsInRvb2xUaXBQb3MiLCJzZXRUb29sVGlwUG9zIiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwiR1JJRF9TQ0FMRSIsInMiLCJuWCIsIk1hdGgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZm9yRWFjaCIsInBvaW50IiwiciIsImZpbGwiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsInVzZUNhbGxiYWNrIiwiaGVpZ2h0IiwibW91c2VNb3ZlIiwiZSIsImxhc3RNb3VzZVBvcyIsImN1cnJlbnRNb3VzZVBvcyIsIm1vdXNlRGlmZiIsInByZXZPZmZzZXQiLCJtb3VzZVVwIiwic3R5bGUiLCJjdXJzb3IiLCJkb2N1bWVudCIsInN0YXJ0UGFuIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZU1vdXNlTW92ZSIsInRvb2xUaXAiLCJjaXJjbGUiLCJQYXRoMkQiLCJpc1BvaW50SW5QYXRoIiwibmF0aXZlRXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywrREFBaEIsQ0FBWDtBQWNDO0FBS0E7QUFFRCxJQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVDLEdBQUMsRUFBRSxDQUFMO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQWQsQ0FBZjtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFkOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQStCQyxFQUEvQixFQUEwQztBQUN4QyxTQUFPO0FBQUVMLEtBQUMsRUFBRUks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REg7QUFFTHhDLGFBQUssWUFBS25ELFdBQUwsT0FGQTtBQUdMa0YsY0FBTSxZQUFLakYsWUFBTDtBQUhEO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUU7QUFDRSxlQUFTLEVBQUVuQixFQUFFLENBQUMsYUFBRCxDQURmO0FBRUUsV0FBSyxFQUFFO0FBQ0w0SCxpQkFBUyxzQkFBZXpGLFVBQVUsQ0FBQzVCLENBQTFCLGVBQWdDNEIsVUFBVSxDQUFDM0IsQ0FBM0M7QUFESixPQUZUO0FBQUEsZ0JBTUd5QjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRixlQXFCRTtBQUFRLGVBQVMsRUFBRWpDLEVBQUUsQ0FBQyxLQUFELENBQXJCO0FBQThCLGFBQU8sRUFBRTtBQUFBLGVBQU13QixHQUFHLElBQUl1QyxLQUFLLENBQUN2QyxHQUFELENBQWxCO0FBQUEsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FoUUQ7O0dBQU1QLFU7O0tBQUFBLFU7QUFrUVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1YmJsZUNoYXJ0LjEwMTZhMGI0NzVhOWQ5OWIyNDIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VDYWxsYmFjayxcclxuICB1c2VMYXlvdXRFZmZlY3QsXHJcbiAgdXNlUmVmLFxyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1YmJsZUNoYXJ0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBDaGFydERhdGEge1xyXG4gIHBvaW50OiBQb2ludDtcclxuICByOiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdG9vbFRpcD86IFJlYWN0RWxlbWVudDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENhbnZhc1Byb3BzIHtcclxuICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG4gIGNoYXJ0RGF0YUxpc3Q/OiBDaGFydERhdGFbXTtcclxufTtcclxuXHJcbmludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IE9SSUdJTiA9IE9iamVjdC5mcmVlemUoeyB4OiAwLCB5OiAwIH0pO1xyXG5jb25zdCBSQVRJTyA9IDE7XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggKyBwMi54LCB5OiBwMS55ICsgcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY2FsZVBvaW50KHAxOiBQb2ludCwgc2NhbGU6IG51bWJlcikge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLyBzY2FsZSwgeTogcDEueSAvIHNjYWxlIH07XHJcbn1cclxuXHJcbmNvbnN0IFpPT01fU0VOU0lUSVZJVFkgPSA1MDA7IC8vIGJpZ2dlciBmb3IgbG93ZXIgem9vbSBwZXIgc2Nyb2xsXHJcblxyXG5jb25zdCBCdWJibGVDaGFyID0gKHsgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY2hhcnREYXRhTGlzdCB9OiBDYW52YXNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW21vdXNlUG9zLCBzZXRNb3VzZVBvc10gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdmlld3BvcnRUb3BMZWZ0LCBzZXRWaWV3cG9ydFRvcExlZnRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW3Rvb2xUaXBFbCwgc2V0VG9vbFRpcEVsXSA9IHVzZVN0YXRlKDw+PC8+KTtcclxuICBjb25zdCBbdG9vbFRpcFBvcywgc2V0VG9vbFRpcFBvc10gPSB1c2VTdGF0ZSh7eDogJzBweCcsIHk6ICcwcHgnfSk7XHJcbiAgY29uc3QgaXNSZXNldFJlZiA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IGxhc3RPZmZzZXRSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcblxyXG4gIC8vIHVwZGF0ZSBsYXN0IG9mZnNldFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBvZmZzZXQ7XHJcbiAgfSwgW29mZnNldF0pO1xyXG5cclxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gY2FudmFzIGZvciBtb3VzZSBwb3NpdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlTW91c2UoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGNhbnZhc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRNb3VzZVBvcyA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xyXG4gICAgICAgIGNvbnN0IHRvcExlZnRDYW52YXNQb3MgPSB7XHJcbiAgICAgICAgICB4OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgeTogY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0VG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRNb3VzZVBvcyhkaWZmUG9pbnRzKHZpZXdwb3J0TW91c2VQb3MsIHRvcExlZnRDYW52YXNQb3MpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIHpvb21cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIHRoaXMgaXMgdHJpY2t5LiBVcGRhdGUgdGhlIHZpZXdwb3J0J3MgXCJvcmlnaW5cIiBzdWNoIHRoYXRcclxuICAgIC8vIHRoZSBtb3VzZSBkb2Vzbid0IG1vdmUgZHVyaW5nIHNjYWxlIC0gdGhlICd6b29tIHBvaW50JyBvZiB0aGUgbW91c2VcclxuICAgIC8vIGJlZm9yZSBhbmQgYWZ0ZXIgem9vbSBpcyByZWxhdGl2ZWx5IHRoZSBzYW1lIHBvc2l0aW9uIG9uIHRoZSB2aWV3cG9ydFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlV2hlZWwoZXZlbnQ6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgIGNvbnN0IHpvb20gPSAxIC0gZXZlbnQuZGVsdGFZIC8gWk9PTV9TRU5TSVRJVklUWTtcclxuXHJcbiAgICAgICAgaWYgKHNjYWxlICogem9vbSA8IDAuMykgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzY2FsZSAqIHpvb20gPiAzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0VG9wTGVmdERlbHRhID0ge1xyXG4gICAgICAgICAgeDogKG1vdXNlUG9zLnggLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKSxcclxuICAgICAgICAgIHk6IChtb3VzZVBvcy55IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld1ZpZXdwb3J0VG9wTGVmdCA9IGFkZFBvaW50cyhcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdCxcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdERlbHRhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh2aWV3cG9ydFRvcExlZnQueCwgdmlld3BvcnRUb3BMZWZ0LnkpO1xyXG4gICAgICAgIGN0eC5zY2FsZSh6b29tLCB6b29tKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKC1uZXdWaWV3cG9ydFRvcExlZnQueCwgLW5ld1ZpZXdwb3J0VG9wTGVmdC55KTtcclxuXHJcbiAgICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KG5ld1ZpZXdwb3J0VG9wTGVmdCk7XHJcbiAgICAgICAgc2V0U2NhbGUoc2NhbGUgKiB6b29tKTtcclxuICAgICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCk7XHJcbiAgICByZXR1cm4gKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICB9LCBbY3R4LCBtb3VzZVBvcy54LCBtb3VzZVBvcy55LCB2aWV3cG9ydFRvcExlZnQsIHNjYWxlXSk7XHJcblxyXG4gIC8vIHNldHVwIGNhbnZhcyBhbmQgc2V0IGNvbnRleHRcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjYW52YXNSZWYpIHJldHVybjtcclxuICAgIGNvbnN0IHJlbmRlckN0eCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGlmIChyZW5kZXJDdHgpIHJlc2V0KHJlbmRlckN0eCk7XHJcbiAgfSwgW2NhbnZhc0hlaWdodCwgY2FudmFzV2lkdGgsIGNoYXJ0RGF0YUxpc3RdKTtcclxuXHJcbiAgLy8gcGFuIHdoZW4gb2Zmc2V0IG9yIHNjYWxlIGNoYW5nZXNcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN0eCAmJiBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgb2Zmc2V0RGlmZiA9IHNjYWxlUG9pbnQoXHJcbiAgICAgICAgZGlmZlBvaW50cyhvZmZzZXQsIGxhc3RPZmZzZXRSZWYuY3VycmVudCksXHJcbiAgICAgICAgc2NhbGVcclxuICAgICAgKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZShvZmZzZXREaWZmLngsIG9mZnNldERpZmYueSk7XHJcbiAgICAgIHNldFZpZXdwb3J0VG9wTGVmdCgocHJldlZhbCkgPT4gZGlmZlBvaW50cyhwcmV2VmFsLCBvZmZzZXREaWZmKSk7XHJcbiAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sIFtjdHgsIG9mZnNldCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gZHJhd1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4KSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZFRyYW5zZm9ybSA9IGN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IGN0eC5jYW52YXMud2lkdGg7XHJcbiAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oc3RvcmVkVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgIGRyYXdHcmlkKCk7XHJcbiAgICAgIGRyYXdDaXJjbGVzKCk7XHJcbiAgICAgIGRyYXdUZXh0KCk7XHJcbiAgICB9XHJcbiAgfSwgW1xyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBjaGFydERhdGFMaXN0LFxyXG4gICAgY3R4LFxyXG4gICAgc2NhbGUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICB2aWV3cG9ydFRvcExlZnRcclxuICBdKTtcclxuXHJcbiAgY29uc3QgZHJhd0dyaWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBHUklEX1NDQUxFID0gMjA7XHJcbiAgICBjb25zdCBzID0gMTEwO1xyXG4gICAgY29uc3QgblggPSBNYXRoLmZsb29yKGNhbnZhc1dpZHRoICogR1JJRF9TQ0FMRSAvIHMpIC0gMjtcclxuICAgIGNvbnN0IG5ZID0gTWF0aC5mbG9vcihjYW52YXNIZWlnaHQgKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgcFggPSBjYW52YXNXaWR0aCAtIG5YICogcztcclxuICAgIGNvbnN0IHBZID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzO1xyXG5cclxuICAgIGNvbnN0IHBMID0gTWF0aC5jZWlsKHBYIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwVCA9IE1hdGguY2VpbChwWSAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFIgPSBjYW52YXNXaWR0aCAtIG5YICogcyAtIHBMO1xyXG4gICAgY29uc3QgcEIgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHMgLSBwVDtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmV5JztcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGZvciAobGV0IHggPSBwTDsgeCA8PSBjYW52YXNXaWR0aCAtIHBSOyB4ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyh4LCBwVCk7XHJcbiAgICAgIGN0eC5saW5lVG8oeCwgY2FudmFzSGVpZ2h0IC0gcEIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgeSA9IHBUOyB5IDw9IGNhbnZhc0hlaWdodCAtIHBCOyB5ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhwTCwgeSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY2FudmFzV2lkdGggLSBwUiwgeSk7XHJcbiAgICB9XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3Q2lyY2xlcyA9ICgpID0+IHtcclxuICAgIGlmICghY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgY2hhcnREYXRhTGlzdC5mb3JFYWNoKCh7IHBvaW50OiB7IHgsIHkgfSwgciwgZmlsbCB9KSA9PiB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdUZXh0ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXRcclxuICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XHJcbiAgICAgIGlmICghY3R4ICYmIGlzUmVzZXRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgICAvLyBhZGp1c3QgZm9yIGRldmljZSBwaXhlbCBkZW5zaXR5XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCAqIFJBVElPO1xyXG4gICAgICBjdHguY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCAqIFJBVElPO1xyXG4gICAgICBjdHguc2NhbGUoUkFUSU8sIFJBVElPKTtcclxuICAgICAgc2V0U2NhbGUoMSk7XHJcblxyXG4gICAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgICBzZXRDdHgoY3R4KTtcclxuICAgICAgc2V0T2Zmc2V0KE9SSUdJTik7XHJcbiAgICAgIHNldE1vdXNlUG9zKE9SSUdJTik7XHJcbiAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChPUklHSU4pO1xyXG4gICAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBPUklHSU47XHJcbiAgICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG5cclxuICAgICAgLy8gdGhpcyB0aGluZyBpcyBzbyBtdWx0aXBsZSByZXNldHMgaW4gYSByb3cgZG9uJ3QgY2xlYXIgY2FudmFzXHJcbiAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgW2NhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHRdXHJcbiAgKTtcclxuXHJcbiAgLy8gZnVuY3Rpb25zIGZvciBwYW5uaW5nXHJcbiAgY29uc3QgbW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoIWN0eCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcbiAgICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gICAgfSwgW2N0eF1cclxuICApO1xyXG5cclxuICBjb25zdCBtb3VzZVVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gIH0sIFttb3VzZU1vdmVdKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZIH07XHJcbiAgICB9LFxyXG4gICAgW21vdXNlTW92ZSwgbW91c2VVcF1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGlmICghY3R4IHx8ICFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcbiAgICBzZXRUb29sVGlwRWwobnVsbCk7XHJcblxyXG4gICAgY2hhcnREYXRhTGlzdC5mb3JFYWNoKCh7IHBvaW50OiB7IHgsIHkgfSwgciwgdG9vbFRpcCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBQYXRoMkQoKTtcclxuICAgICAgY2lyY2xlLmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGlmIChjdHguaXNQb2ludEluUGF0aChjaXJjbGUsIGUubmF0aXZlRXZlbnQub2Zmc2V0WCwgZS5uYXRpdmVFdmVudC5vZmZzZXRZKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHIpO1xyXG4gICAgICAgIHNldFRvb2xUaXBQb3Moe3g6IGAke2UubmF0aXZlRXZlbnQub2Zmc2V0WCAtIDEzMH1weGAsIHk6IGAke2UubmF0aXZlRXZlbnQub2Zmc2V0WSAtIDEyMH1weGB9KTtcclxuICAgICAgICBzZXRUb29sVGlwRWwodG9vbFRpcCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9IHN0eWxlPXt7IHdpZHRoOiBjYW52YXNXaWR0aCAqIFJBVElPIH19PlxyXG4gICAgICA8Y2FudmFzXHJcbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cclxuICAgICAgICBvbk1vdXNlRG93bj17c3RhcnRQYW59XHJcbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XHJcbiAgICAgICAgd2lkdGg9e2NhbnZhc1dpZHRoICogUkFUSU99XHJcbiAgICAgICAgaGVpZ2h0PXtjYW52YXNIZWlnaHQgKiBSQVRJT31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY3Vyc29yOiBcImNyb3NzaGFpclwiLFxyXG4gICAgICAgICAgd2lkdGg6IGAke2NhbnZhc1dpZHRofXB4YCxcclxuICAgICAgICAgIGhlaWdodDogYCR7Y2FudmFzSGVpZ2h0fXB4YFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2N4KCd0b29sdGlwV3JhcCcpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0b29sVGlwUG9zLnh9LCAke3Rvb2xUaXBQb3MueX0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Rvb2xUaXBFbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjeCgnYnRuJyl9IG9uQ2xpY2s9eygpID0+IGN0eCAmJiByZXNldChjdHgpfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWJibGVDaGFyOyJdLCJzb3VyY2VSb290IjoiIn0=