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
    console.log(e, ctx);
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
          x: "".concat(e.nativeEvent.offsetX, "px"),
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
      lineNumber: 278,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('tooltipWrap'),
      style: {
        transform: "translate(".concat(toolTipPos.x, ", ").concat(toolTipPos.y, ")")
      },
      children: toolTipEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('scale'),
      children: ["scale: ", scale.toFixed(2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: cx('btn'),
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 277,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXBFbCIsInNldFRvb2xUaXBFbCIsInRvb2xUaXBQb3MiLCJzZXRUb29sVGlwUG9zIiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwiR1JJRF9TQ0FMRSIsInMiLCJuWCIsIk1hdGgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic29ydGVkTGlzdCIsInNvcnQiLCJhIiwiYiIsInIiLCJmb3JFYWNoIiwicG9pbnQiLCJmaWxsIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJoZWlnaHQiLCJtb3VzZU1vdmUiLCJlIiwiY29uc29sZSIsImxvZyIsImxhc3RNb3VzZVBvcyIsImN1cnJlbnRNb3VzZVBvcyIsIm1vdXNlRGlmZiIsInByZXZPZmZzZXQiLCJtb3VzZVVwIiwic3R5bGUiLCJjdXJzb3IiLCJkb2N1bWVudCIsInN0YXJ0UGFuIiwibmF0aXZlRXZlbnQiLCJoYW5kbGVNb3VzZU1vdmUiLCJ0b29sVGlwIiwiY2lyY2xlIiwiUGF0aDJEIiwiaXNQb2ludEluUGF0aCIsInRyYW5zZm9ybSIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywrREFBaEIsQ0FBWDtBQWNDO0FBS0E7QUFFRCxJQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVDLEdBQUMsRUFBRSxDQUFMO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQWQsQ0FBZjtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFkOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQStCQyxFQUEvQixFQUEwQztBQUN4QyxTQUFPO0FBQUVMLEtBQUMsRUFBRUksRUFBRSxDQUFDSixD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TDdDLGFBQUssWUFBS25ELFdBQUwsT0FGQTtBQUdMcUYsY0FBTSxZQUFLcEYsWUFBTDtBQUhEO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUU7QUFDRSxlQUFTLEVBQUVuQixFQUFFLENBQUMsYUFBRCxDQURmO0FBRUUsV0FBSyxFQUFFO0FBQ0wySCxpQkFBUyxzQkFBZXhGLFVBQVUsQ0FBQzVCLENBQTFCLGVBQWdDNEIsVUFBVSxDQUFDM0IsQ0FBM0M7QUFESixPQUZUO0FBQUEsZ0JBTUd5QjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRixlQXFCRTtBQUFNLGVBQVMsRUFBRWpDLEVBQUUsQ0FBQyxPQUFELENBQW5CO0FBQUEsNEJBQXNDZSxLQUFLLENBQUM2RyxPQUFOLENBQWMsQ0FBZCxDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkYsZUFzQkU7QUFBUSxlQUFTLEVBQUU1SCxFQUFFLENBQUMsS0FBRCxDQUFyQjtBQUE4QixhQUFPLEVBQUU7QUFBQSxlQUFNd0IsR0FBRyxJQUFJdUMsS0FBSyxDQUFDdkMsR0FBRCxDQUFsQjtBQUFBLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBN1BEOztHQUFNUCxVOztLQUFBQSxVO0FBK1BTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idWJibGVDaGFydC5mOTk3MDIzZGVmYzZlMGE5NDNmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlTGF5b3V0RWZmZWN0LFxyXG4gIHVzZVJlZixcclxuICB1c2VTdGF0ZSxcclxuICBSZWFjdEVsZW1lbnRcclxufSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idWJibGVDaGFydC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnREYXRhIHtcclxuICBwb2ludDogUG9pbnQ7XHJcbiAgcjogbnVtYmVyO1xyXG4gIGZpbGw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRvb2xUaXA/OiBSZWFjdEVsZW1lbnQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYW52YXNQcm9wcyB7XHJcbiAgY2FudmFzV2lkdGg6IG51bWJlcjtcclxuICBjYW52YXNIZWlnaHQ6IG51bWJlcjtcclxuICBjaGFydERhdGFMaXN0PzogQ2hhcnREYXRhW107XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBPUklHSU4gPSBPYmplY3QuZnJlZXplKHsgeDogMCwgeTogMCB9KTtcclxuY29uc3QgUkFUSU8gPSAxO1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54ICsgcDIueCwgeTogcDEueSArIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2NhbGVQb2ludChwMTogUG9pbnQsIHNjYWxlOiBudW1iZXIpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC8gc2NhbGUsIHk6IHAxLnkgLyBzY2FsZSB9O1xyXG59XHJcblxyXG5jb25zdCBaT09NX1NFTlNJVElWSVRZID0gNTAwOyAvLyBiaWdnZXIgZm9yIGxvd2VyIHpvb20gcGVyIHNjcm9sbFxyXG5cclxuY29uc3QgQnViYmxlQ2hhciA9ICh7IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIGNoYXJ0RGF0YUxpc3QgfTogQ2FudmFzUHJvcHMpID0+IHtcclxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZTxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc2NhbGUsIHNldFNjYWxlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFttb3VzZVBvcywgc2V0TW91c2VQb3NdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW3ZpZXdwb3J0VG9wTGVmdCwgc2V0Vmlld3BvcnRUb3BMZWZ0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFt0b29sVGlwRWwsIHNldFRvb2xUaXBFbF0gPSB1c2VTdGF0ZSg8PjwvPik7XHJcbiAgY29uc3QgW3Rvb2xUaXBQb3MsIHNldFRvb2xUaXBQb3NdID0gdXNlU3RhdGUoeyB4OiAnMHB4JywgeTogJzBweCcgfSk7XHJcbiAgY29uc3QgaXNSZXNldFJlZiA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IGxhc3RPZmZzZXRSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcblxyXG4gIC8vIHVwZGF0ZSBsYXN0IG9mZnNldFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBvZmZzZXQ7XHJcbiAgfSwgW29mZnNldF0pO1xyXG5cclxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gY2FudmFzIGZvciBtb3VzZSBwb3NpdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlTW91c2UoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChjYW52YXNSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0TW91c2VQb3MgPSB7IHg6IGV2ZW50Lm9mZnNldFgsIHk6IGV2ZW50Lm9mZnNldFkgfTtcclxuICAgICAgICBjb25zdCB0b3BMZWZ0Q2FudmFzUG9zID0ge1xyXG4gICAgICAgICAgeDogY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCxcclxuICAgICAgICAgIHk6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldFRvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0TW91c2VQb3MoZGlmZlBvaW50cyh2aWV3cG9ydE1vdXNlUG9zLCB0b3BMZWZ0Q2FudmFzUG9zKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gY2FudmFzIGZvciB6b29tXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAvLyB0aGlzIGlzIHRyaWNreS4gVXBkYXRlIHRoZSB2aWV3cG9ydCdzIFwib3JpZ2luXCIgc3VjaCB0aGF0XHJcbiAgICAvLyB0aGUgbW91c2UgZG9lc24ndCBtb3ZlIGR1cmluZyBzY2FsZSAtIHRoZSAnem9vbSBwb2ludCcgb2YgdGhlIG1vdXNlXHJcbiAgICAvLyBiZWZvcmUgYW5kIGFmdGVyIHpvb20gaXMgcmVsYXRpdmVseSB0aGUgc2FtZSBwb3NpdGlvbiBvbiB0aGUgdmlld3BvcnRcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVdoZWVsKGV2ZW50OiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICBjb25zdCB6b29tID0gMSAtIGV2ZW50LmRlbHRhWSAvIFpPT01fU0VOU0lUSVZJVFk7XHJcblxyXG4gICAgICAgIGlmIChzY2FsZSAqIHpvb20gPCAwLjMpIHJldHVybjtcclxuICAgICAgICBpZiAoc2NhbGUgKiB6b29tID4gMykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3cG9ydFRvcExlZnREZWx0YSA9IHtcclxuICAgICAgICAgIHg6IChtb3VzZVBvcy54IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSksXHJcbiAgICAgICAgICB5OiAobW91c2VQb3MueSAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBuZXdWaWV3cG9ydFRvcExlZnQgPSBhZGRQb2ludHMoXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnQsXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnREZWx0YVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodmlld3BvcnRUb3BMZWZ0LngsIHZpZXdwb3J0VG9wTGVmdC55KTtcclxuICAgICAgICBjdHguc2NhbGUoem9vbSwgem9vbSk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtbmV3Vmlld3BvcnRUb3BMZWZ0LngsIC1uZXdWaWV3cG9ydFRvcExlZnQueSk7XHJcblxyXG4gICAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChuZXdWaWV3cG9ydFRvcExlZnQpO1xyXG4gICAgICAgIHNldFNjYWxlKHNjYWxlICogem9vbSk7XHJcbiAgICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gICAgcmV0dXJuICgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCk7XHJcbiAgfSwgW2N0eCwgbW91c2VQb3MueCwgbW91c2VQb3MueSwgdmlld3BvcnRUb3BMZWZ0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBzZXR1cCBjYW52YXMgYW5kIHNldCBjb250ZXh0XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY2FudmFzUmVmKSByZXR1cm47XHJcbiAgICBjb25zdCByZW5kZXJDdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBpZiAocmVuZGVyQ3R4KSByZXNldChyZW5kZXJDdHgpO1xyXG4gIH0sIFtjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoLCBjaGFydERhdGFMaXN0XSk7XHJcblxyXG4gIC8vIHBhbiB3aGVuIG9mZnNldCBvciBzY2FsZSBjaGFuZ2VzXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHggJiYgbGFzdE9mZnNldFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldERpZmYgPSBzY2FsZVBvaW50KFxyXG4gICAgICAgIGRpZmZQb2ludHMob2Zmc2V0LCBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQpLFxyXG4gICAgICAgIHNjYWxlXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUob2Zmc2V0RGlmZi54LCBvZmZzZXREaWZmLnkpO1xyXG4gICAgICBzZXRWaWV3cG9ydFRvcExlZnQoKHByZXZWYWwpID0+IGRpZmZQb2ludHMocHJldlZhbCwgb2Zmc2V0RGlmZikpO1xyXG4gICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LCBbY3R4LCBvZmZzZXQsIHNjYWxlXSk7XHJcblxyXG4gIC8vIGRyYXdcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN0eCkge1xyXG4gICAgICBjb25zdCBzdG9yZWRUcmFuc2Zvcm0gPSBjdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xyXG4gICAgICBjdHguc2V0VHJhbnNmb3JtKHN0b3JlZFRyYW5zZm9ybSk7XHJcblxyXG4gICAgICBkcmF3R3JpZCgpO1xyXG4gICAgICBkcmF3Q2lyY2xlcygpO1xyXG4gICAgICBkcmF3VGV4dCgpO1xyXG4gICAgfVxyXG4gIH0sIFtcclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgY2hhcnREYXRhTGlzdCxcclxuICAgIGN0eCxcclxuICAgIHNjYWxlLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgdmlld3BvcnRUb3BMZWZ0XHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGRyYXdHcmlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgR1JJRF9TQ0FMRSA9IDIwO1xyXG4gICAgY29uc3QgcyA9IDExMDtcclxuICAgIGNvbnN0IG5YID0gTWF0aC5mbG9vcihjYW52YXNXaWR0aCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBuWSA9IE1hdGguZmxvb3IoY2FudmFzSGVpZ2h0ICogR1JJRF9TQ0FMRSAvIHMpIC0gMjtcclxuICAgIGNvbnN0IHBYID0gY2FudmFzV2lkdGggLSBuWCAqIHM7XHJcbiAgICBjb25zdCBwWSA9IGNhbnZhc0hlaWdodCAtIG5ZICogcztcclxuXHJcbiAgICBjb25zdCBwTCA9IE1hdGguY2VpbChwWCAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFQgPSBNYXRoLmNlaWwocFkgLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBSID0gY2FudmFzV2lkdGggLSBuWCAqIHMgLSBwTDtcclxuICAgIGNvbnN0IHBCID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzIC0gcFQ7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JleSc7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBmb3IgKGxldCB4ID0gcEw7IHggPD0gY2FudmFzV2lkdGggLSBwUjsgeCArPSBzKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8oeCwgcFQpO1xyXG4gICAgICBjdHgubGluZVRvKHgsIGNhbnZhc0hlaWdodCAtIHBCKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IHkgPSBwVDsgeSA8PSBjYW52YXNIZWlnaHQgLSBwQjsgeSArPSBzKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8ocEwsIHkpO1xyXG4gICAgICBjdHgubGluZVRvKGNhbnZhc1dpZHRoIC0gcFIsIHkpO1xyXG4gICAgfVxyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd0NpcmNsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNoYXJ0RGF0YUxpc3QpIHJldHVybjtcclxuICAgIGNvbnN0IHNvcnRlZExpc3QgPSBjaGFydERhdGFMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIGIuciAtIGEucjtcclxuICAgIH0pXHJcblxyXG4gICAgc29ydGVkTGlzdC5mb3JFYWNoKCh7IHBvaW50OiB7IHgsIHkgfSwgciwgZmlsbCB9KSA9PiB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdUZXh0ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXRcclxuICBjb25zdCByZXNldCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG4gICAgaWYgKCFjdHggJiYgaXNSZXNldFJlZi5jdXJyZW50KSByZXR1cm47XHJcbiAgICAvLyBhZGp1c3QgZm9yIGRldmljZSBwaXhlbCBkZW5zaXR5XHJcbiAgICBjdHguY2FudmFzLndpZHRoID0gY2FudmFzV2lkdGggKiBSQVRJTztcclxuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICogUkFUSU87XHJcbiAgICBjdHguc2NhbGUoUkFUSU8sIFJBVElPKTtcclxuICAgIHNldFNjYWxlKDEpO1xyXG5cclxuICAgIC8vIHJlc2V0IHN0YXRlIGFuZCByZWZzXHJcbiAgICBzZXRDdHgoY3R4KTtcclxuICAgIHNldE9mZnNldChPUklHSU4pO1xyXG4gICAgc2V0TW91c2VQb3MoT1JJR0lOKTtcclxuICAgIHNldFZpZXdwb3J0VG9wTGVmdChPUklHSU4pO1xyXG4gICAgbGFzdE9mZnNldFJlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBPUklHSU47XHJcblxyXG4gICAgLy8gdGhpcyB0aGluZyBpcyBzbyBtdWx0aXBsZSByZXNldHMgaW4gYSByb3cgZG9uJ3QgY2xlYXIgY2FudmFzXHJcbiAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIC8vIGZ1bmN0aW9ucyBmb3IgcGFubmluZ1xyXG4gIGNvbnN0IG1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLCBjdHgpO1xyXG4gICAgaWYgKCFjdHgpIHJldHVybjtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW91c2VVcCA9ICgpID0+IHtcclxuICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBjYW52YXNSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIHk6IGUubmF0aXZlRXZlbnQub2Zmc2V0WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWN0eCB8fCAhY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgc2V0VG9vbFRpcEVsKG51bGwpO1xyXG5cclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoeyBwb2ludDogeyB4LCB5IH0sIHIsIHRvb2xUaXAgfSkgPT4ge1xyXG4gICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XHJcbiAgICAgIGNpcmNsZS5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBpZiAoY3R4LmlzUG9pbnRJblBhdGgoY2lyY2xlLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIGUubmF0aXZlRXZlbnQub2Zmc2V0WSkpIHtcclxuICAgICAgICBzZXRUb29sVGlwUG9zKHsgeDogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRYfXB4YCwgeTogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRZIC0gNTB9cHhgIH0pO1xyXG4gICAgICAgIHNldFRvb2xUaXBFbCh0b29sVGlwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfSBzdHlsZT17eyB3aWR0aDogY2FudmFzV2lkdGggKiBSQVRJTyB9fT5cclxuICAgICAgPGNhbnZhc1xyXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XHJcbiAgICAgICAgb25Nb3VzZURvd249e3N0YXJ0UGFufVxyXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICAgIHdpZHRoPXtjYW52YXNXaWR0aCAqIFJBVElPfVxyXG4gICAgICAgIGhlaWdodD17Y2FudmFzSGVpZ2h0ICogUkFUSU99XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGN1cnNvcjogXCJjcm9zc2hhaXJcIixcclxuICAgICAgICAgIHdpZHRoOiBgJHtjYW52YXNXaWR0aH1weGAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke2NhbnZhc0hlaWdodH1weGBcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCgndG9vbHRpcFdyYXAnKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dG9vbFRpcFBvcy54fSwgJHt0b29sVGlwUG9zLnl9KWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0b29sVGlwRWx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdzY2FsZScpfT5zY2FsZToge3NjYWxlLnRvRml4ZWQoMil9PC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXsoKSA9PiBjdHggJiYgcmVzZXQoY3R4KX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlQ2hhcjsiXSwic291cmNlUm9vdCI6IiJ9