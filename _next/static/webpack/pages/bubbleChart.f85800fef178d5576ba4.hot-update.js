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
      lineNumber: 272,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('tooltipWrap'),
      style: {
        transform: "translate(".concat(toolTipPos.x, ", ").concat(toolTipPos.y, ")")
      },
      children: toolTipEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('scale'),
      children: ["scale: ", scale.toFixed(2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 292,
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
    lineNumber: 271,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXBFbCIsInNldFRvb2xUaXBFbCIsInRvb2xUaXBQb3MiLCJzZXRUb29sVGlwUG9zIiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwiR1JJRF9TQ0FMRSIsInMiLCJuWCIsIk1hdGgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZm9yRWFjaCIsInBvaW50IiwiciIsImZpbGwiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImhlaWdodCIsIm1vdXNlTW92ZSIsImUiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwibW91c2VVcCIsInN0eWxlIiwiY3Vyc29yIiwiZG9jdW1lbnQiLCJzdGFydFBhbiIsIm5hdGl2ZUV2ZW50IiwiaGFuZGxlTW91c2VNb3ZlIiwidG9vbFRpcCIsImNpcmNsZSIsIlBhdGgyRCIsImlzUG9pbnRJblBhdGgiLCJ0cmFuc2Zvcm0iLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsK0RBQWhCLENBQVg7QUFjQztBQUtBO0FBRUQsSUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFQyxHQUFDLEVBQUUsQ0FBTDtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFkLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUcsQ0FBZDs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFTCxLQUFDLEVBQUVJLEVBQUUsQ0FBQ0osQ0FBSCxHQUFPSyxFQUFFLENBQUNMLENBQWY7QUFBa0JDLEtBQUMsRUFBRUcsRUFBRSxDQUFDSCxDQUFILEdBQU9JLEVBQUUsQ0FBQ0o7QUFBL0IsR0FBUDtBQUNEOztBQUVELFNBQVNLLFNBQVQsQ0FBbUJGLEVBQW5CLEVBQThCQyxFQUE5QixFQUF5QztBQUN2QyxTQUFPO0FBQUVMLEtBQUMsRUFBRUksRUFBRSxDQUFDSixDQUFILEdBQU9LLEVBQUUsQ0FBQ0wsQ0FBZjtBQUFrQkMsS0FBQyxFQUFFRyxFQUFFLENBQUNILENBQUgsR0FBT0ksRUFBRSxDQUFDSjtBQUEvQixHQUFQO0FBQ0Q7O0FBRUQsU0FBU00sVUFBVCxDQUFvQkgsRUFBcEIsRUFBK0JJLEtBQS9CLEVBQThDO0FBQzVDLFNBQU87QUFBRVIsS0FBQyxFQUFFSSxFQUFFLENBQUNKLENBQUgsR0FBT1EsS0FBWjtBQUFtQlAsS0FBQyxFQUFFRyxFQUFFLENBQUNILENBQUgsR0FBT087QUFBN0IsR0FBUDtBQUNEOztBQUVELElBQU1DLGdCQUFnQixHQUFHLEdBQXpCLEMsQ0FBOEI7O0FBRTlCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQStEO0FBQUE7O0FBQUEsTUFBNURDLFdBQTRELFFBQTVEQSxXQUE0RDtBQUFBLE1BQS9DQyxZQUErQyxRQUEvQ0EsWUFBK0M7QUFBQSxNQUFqQ0MsYUFBaUMsUUFBakNBLGFBQWlDO0FBQ2hGLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBeEI7O0FBRGdGLGtCQUUxREMsc0RBQVEsQ0FBa0MsSUFBbEMsQ0FGa0Q7QUFBQSxNQUV6RUMsR0FGeUU7QUFBQSxNQUVwRUMsTUFGb0U7O0FBQUEsbUJBR3RERixzREFBUSxDQUFTLENBQVQsQ0FIOEM7QUFBQSxNQUd6RVIsS0FIeUU7QUFBQSxNQUdsRVcsUUFIa0U7O0FBQUEsbUJBSXBESCxzREFBUSxDQUFRbkIsTUFBUixDQUo0QztBQUFBLE1BSXpFdUIsTUFKeUU7QUFBQSxNQUlqRUMsU0FKaUU7O0FBQUEsbUJBS2hETCxzREFBUSxDQUFRbkIsTUFBUixDQUx3QztBQUFBLE1BS3pFeUIsUUFMeUU7QUFBQSxNQUsvREMsV0FMK0Q7O0FBQUEsbUJBTWxDUCxzREFBUSxDQUFRbkIsTUFBUixDQU4wQjtBQUFBLE1BTXpFMkIsZUFOeUU7QUFBQSxNQU14REMsa0JBTndEOztBQUFBLG1CQU85Q1Qsc0RBQVEsZUFBQyx1SkFBRCxDQVBzQztBQUFBLE1BT3pFVSxTQVB5RTtBQUFBLE1BTzlEQyxZQVA4RDs7QUFBQSxtQkFRNUNYLHNEQUFRLENBQUM7QUFBRWhCLEtBQUMsRUFBRSxLQUFMO0FBQVlDLEtBQUMsRUFBRTtBQUFmLEdBQUQsQ0FSb0M7QUFBQSxNQVF6RTJCLFVBUnlFO0FBQUEsTUFRN0RDLGFBUjZEOztBQVNoRixNQUFNQyxVQUFVLEdBQUdmLG9EQUFNLENBQVUsS0FBVixDQUF6QjtBQUNBLE1BQU1nQixlQUFlLEdBQUdoQixvREFBTSxDQUFRbEIsTUFBUixDQUE5QjtBQUNBLE1BQU1tQyxhQUFhLEdBQUdqQixvREFBTSxDQUFRbEIsTUFBUixDQUE1QixDQVhnRixDQWFoRjs7QUFDQW9DLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDRSxPQUFkLEdBQXdCZCxNQUF4QjtBQUNELEdBRlEsRUFFTixDQUFDQSxNQUFELENBRk0sQ0FBVCxDQWRnRixDQWtCaEY7O0FBQ0FhLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1FLEVBQUUsR0FBR3JCLFNBQVMsQ0FBQ29CLE9BQXJCO0FBQ0EsUUFBSUMsRUFBRSxLQUFLLElBQVgsRUFBaUI7O0FBRWpCLGFBQVNDLGlCQUFULENBQTJCQyxLQUEzQixFQUE4QztBQUM1Q0EsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFVBQUl4QixTQUFTLENBQUNvQixPQUFkLEVBQXVCO0FBQ3JCLFlBQU1LLGdCQUFnQixHQUFHO0FBQUV2QyxXQUFDLEVBQUVxQyxLQUFLLENBQUNHLE9BQVg7QUFBb0J2QyxXQUFDLEVBQUVvQyxLQUFLLENBQUNJO0FBQTdCLFNBQXpCO0FBQ0EsWUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkIxQyxXQUFDLEVBQUVjLFNBQVMsQ0FBQ29CLE9BQVYsQ0FBa0JTLFVBREU7QUFFdkIxQyxXQUFDLEVBQUVhLFNBQVMsQ0FBQ29CLE9BQVYsQ0FBa0JVO0FBRkUsU0FBekI7QUFJQXJCLG1CQUFXLENBQUNwQixVQUFVLENBQUNvQyxnQkFBRCxFQUFtQkcsZ0JBQW5CLENBQVgsQ0FBWDtBQUNEO0FBQ0Y7O0FBRURQLE1BQUUsQ0FBQ1UsZ0JBQUgsQ0FBb0IsV0FBcEIsRUFBaUNULGlCQUFqQztBQUNBRCxNQUFFLENBQUNVLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCVCxpQkFBN0I7QUFDQSxXQUFPLFlBQU07QUFDWEQsUUFBRSxDQUFDVyxtQkFBSCxDQUF1QixXQUF2QixFQUFvQ1YsaUJBQXBDO0FBQ0FELFFBQUUsQ0FBQ1csbUJBQUgsQ0FBdUIsT0FBdkIsRUFBZ0NWLGlCQUFoQztBQUNELEtBSEQ7QUFJRCxHQXRCUSxFQXNCTixFQXRCTSxDQUFULENBbkJnRixDQTJDaEY7O0FBQ0FILHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1FLEVBQUUsR0FBR3JCLFNBQVMsQ0FBQ29CLE9BQXJCO0FBQ0EsUUFBSUMsRUFBRSxLQUFLLElBQVgsRUFBaUIsT0FGSCxDQUlkO0FBQ0E7QUFDQTs7QUFDQSxhQUFTWSxXQUFULENBQXFCVixLQUFyQixFQUF3QztBQUN0Q0EsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFVBQUlyQixHQUFKLEVBQVM7QUFDUCxZQUFNK0IsSUFBSSxHQUFHLElBQUlYLEtBQUssQ0FBQ1ksTUFBTixHQUFleEMsZ0JBQWhDO0FBRUEsWUFBSUQsS0FBSyxHQUFHd0MsSUFBUixHQUFlLEdBQW5CLEVBQXdCO0FBQ3hCLFlBQUl4QyxLQUFLLEdBQUd3QyxJQUFSLEdBQWUsQ0FBbkIsRUFBc0I7QUFFdEIsWUFBTUUsb0JBQW9CLEdBQUc7QUFDM0JsRCxXQUFDLEVBQUdzQixRQUFRLENBQUN0QixDQUFULEdBQWFRLEtBQWQsSUFBd0IsSUFBSSxJQUFJd0MsSUFBaEMsQ0FEd0I7QUFFM0IvQyxXQUFDLEVBQUdxQixRQUFRLENBQUNyQixDQUFULEdBQWFPLEtBQWQsSUFBd0IsSUFBSSxJQUFJd0MsSUFBaEM7QUFGd0IsU0FBN0I7QUFJQSxZQUFNRyxrQkFBa0IsR0FBRzdDLFNBQVMsQ0FDbENrQixlQURrQyxFQUVsQzBCLG9CQUZrQyxDQUFwQztBQUtBakMsV0FBRyxDQUFDbUMsU0FBSixDQUFjNUIsZUFBZSxDQUFDeEIsQ0FBOUIsRUFBaUN3QixlQUFlLENBQUN2QixDQUFqRDtBQUNBZ0IsV0FBRyxDQUFDVCxLQUFKLENBQVV3QyxJQUFWLEVBQWdCQSxJQUFoQjtBQUNBL0IsV0FBRyxDQUFDbUMsU0FBSixDQUFjLENBQUNELGtCQUFrQixDQUFDbkQsQ0FBbEMsRUFBcUMsQ0FBQ21ELGtCQUFrQixDQUFDbEQsQ0FBekQ7QUFFQXdCLDBCQUFrQixDQUFDMEIsa0JBQUQsQ0FBbEI7QUFDQWhDLGdCQUFRLENBQUNYLEtBQUssR0FBR3dDLElBQVQsQ0FBUjtBQUNBbEIsa0JBQVUsQ0FBQ0ksT0FBWCxHQUFxQixLQUFyQjtBQUNEO0FBQ0Y7O0FBRURDLE1BQUUsQ0FBQ1UsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkJFLFdBQTdCO0FBQ0EsV0FBTztBQUFBLGFBQU1aLEVBQUUsQ0FBQ1csbUJBQUgsQ0FBdUIsT0FBdkIsRUFBZ0NDLFdBQWhDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FwQ1EsRUFvQ04sQ0FBQzlCLEdBQUQsRUFBTUssUUFBUSxDQUFDdEIsQ0FBZixFQUFrQnNCLFFBQVEsQ0FBQ3JCLENBQTNCLEVBQThCdUIsZUFBOUIsRUFBK0NoQixLQUEvQyxDQXBDTSxDQUFULENBNUNnRixDQWtGaEY7O0FBQ0E2QywrREFBZSxDQUFDLFlBQU07QUFDcEIsUUFBSSxDQUFDdkMsU0FBTCxFQUFnQjtBQUNoQixRQUFNd0MsU0FBUyxHQUFHeEMsU0FBUyxDQUFDb0IsT0FBVixDQUFrQnFCLFVBQWxCLENBQTZCLElBQTdCLENBQWxCO0FBQ0EsUUFBSUQsU0FBSixFQUFlRSxLQUFLLENBQUNGLFNBQUQsQ0FBTDtBQUNoQixHQUpjLEVBSVosQ0FBQzFDLFlBQUQsRUFBZUQsV0FBZixFQUE0QkUsYUFBNUIsQ0FKWSxDQUFmLENBbkZnRixDQXlGaEY7O0FBQ0F3QywrREFBZSxDQUFDLFlBQU07QUFDcEIsUUFBSXBDLEdBQUcsSUFBSWUsYUFBYSxDQUFDRSxPQUF6QixFQUFrQztBQUNoQyxVQUFNdUIsVUFBVSxHQUFHbEQsVUFBVSxDQUMzQkosVUFBVSxDQUFDaUIsTUFBRCxFQUFTWSxhQUFhLENBQUNFLE9BQXZCLENBRGlCLEVBRTNCMUIsS0FGMkIsQ0FBN0I7QUFJQVMsU0FBRyxDQUFDbUMsU0FBSixDQUFjSyxVQUFVLENBQUN6RCxDQUF6QixFQUE0QnlELFVBQVUsQ0FBQ3hELENBQXZDO0FBQ0F3Qix3QkFBa0IsQ0FBQyxVQUFDaUMsT0FBRDtBQUFBLGVBQWF2RCxVQUFVLENBQUN1RCxPQUFELEVBQVVELFVBQVYsQ0FBdkI7QUFBQSxPQUFELENBQWxCO0FBQ0EzQixnQkFBVSxDQUFDSSxPQUFYLEdBQXFCLEtBQXJCO0FBQ0Q7QUFDRixHQVZjLEVBVVosQ0FBQ2pCLEdBQUQsRUFBTUcsTUFBTixFQUFjWixLQUFkLENBVlksQ0FBZixDQTFGZ0YsQ0FzR2hGOztBQUNBNkMsK0RBQWUsQ0FBQyxZQUFNO0FBQ3BCLFFBQUlwQyxHQUFKLEVBQVM7QUFDUCxVQUFNMEMsZUFBZSxHQUFHMUMsR0FBRyxDQUFDMkMsWUFBSixFQUF4QjtBQUNBM0MsU0FBRyxDQUFDNEMsTUFBSixDQUFXQyxLQUFYLEdBQW1CN0MsR0FBRyxDQUFDNEMsTUFBSixDQUFXQyxLQUE5QjtBQUNBN0MsU0FBRyxDQUFDOEMsWUFBSixDQUFpQkosZUFBakI7QUFFQUssY0FBUTtBQUNSQyxpQkFBVztBQUNYQyxjQUFRO0FBQ1Q7QUFDRixHQVZjLEVBVVosQ0FDRHZELFdBREMsRUFFREMsWUFGQyxFQUdEQyxhQUhDLEVBSURJLEdBSkMsRUFLRFQsS0FMQyxFQU1EWSxNQU5DLEVBT0RJLGVBUEMsQ0FWWSxDQUFmOztBQW9CQSxNQUFNd0MsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNRyxVQUFVLEdBQUcsRUFBbkI7QUFDQSxRQUFNQyxDQUFDLEdBQUcsR0FBVjtBQUNBLFFBQU1DLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc1RCxXQUFXLEdBQUd3RCxVQUFkLEdBQTJCQyxDQUF0QyxJQUEyQyxDQUF0RDtBQUNBLFFBQU1JLEVBQUUsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVczRCxZQUFZLEdBQUd1RCxVQUFmLEdBQTRCQyxDQUF2QyxJQUE0QyxDQUF2RDtBQUNBLFFBQU1LLEVBQUUsR0FBRzlELFdBQVcsR0FBRzBELEVBQUUsR0FBR0QsQ0FBOUI7QUFDQSxRQUFNTSxFQUFFLEdBQUc5RCxZQUFZLEdBQUc0RCxFQUFFLEdBQUdKLENBQS9CO0FBRUEsUUFBTU8sRUFBRSxHQUFHTCxJQUFJLENBQUNNLElBQUwsQ0FBVUgsRUFBRSxHQUFHLENBQWYsSUFBb0IsR0FBL0I7QUFDQSxRQUFNSSxFQUFFLEdBQUdQLElBQUksQ0FBQ00sSUFBTCxDQUFVRixFQUFFLEdBQUcsQ0FBZixJQUFvQixHQUEvQjtBQUNBLFFBQU1JLEVBQUUsR0FBR25FLFdBQVcsR0FBRzBELEVBQUUsR0FBR0QsQ0FBbkIsR0FBdUJPLEVBQWxDO0FBQ0EsUUFBTUksRUFBRSxHQUFHbkUsWUFBWSxHQUFHNEQsRUFBRSxHQUFHSixDQUFwQixHQUF3QlMsRUFBbkM7QUFFQTVELE9BQUcsQ0FBQytELFdBQUosR0FBa0IsV0FBbEI7QUFDQS9ELE9BQUcsQ0FBQ2dFLFNBQUo7O0FBQ0EsU0FBSyxJQUFJakYsQ0FBQyxHQUFHMkUsRUFBYixFQUFpQjNFLENBQUMsSUFBSVcsV0FBVyxHQUFHbUUsRUFBcEMsRUFBd0M5RSxDQUFDLElBQUlvRSxDQUE3QyxFQUFnRDtBQUM5Q25ELFNBQUcsQ0FBQ2lFLE1BQUosQ0FBV2xGLENBQVgsRUFBYzZFLEVBQWQ7QUFDQTVELFNBQUcsQ0FBQ2tFLE1BQUosQ0FBV25GLENBQVgsRUFBY1ksWUFBWSxHQUFHbUUsRUFBN0I7QUFDRDs7QUFDRCxTQUFLLElBQUk5RSxDQUFDLEdBQUc0RSxFQUFiLEVBQWlCNUUsQ0FBQyxJQUFJVyxZQUFZLEdBQUdtRSxFQUFyQyxFQUF5QzlFLENBQUMsSUFBSW1FLENBQTlDLEVBQWlEO0FBQy9DbkQsU0FBRyxDQUFDaUUsTUFBSixDQUFXUCxFQUFYLEVBQWUxRSxDQUFmO0FBQ0FnQixTQUFHLENBQUNrRSxNQUFKLENBQVd4RSxXQUFXLEdBQUdtRSxFQUF6QixFQUE2QjdFLENBQTdCO0FBQ0Q7O0FBQ0RnQixPQUFHLENBQUNtRSxNQUFKO0FBQ0QsR0F4QkQ7O0FBMEJBLE1BQU1uQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUksQ0FBQ3BELGFBQUwsRUFBb0I7QUFDcEJBLGlCQUFhLENBQUN3RSxPQUFkLENBQXNCLGlCQUFrQztBQUFBLDhCQUEvQkMsS0FBK0I7QUFBQSxVQUF0QnRGLENBQXNCLGVBQXRCQSxDQUFzQjtBQUFBLFVBQW5CQyxDQUFtQixlQUFuQkEsQ0FBbUI7QUFBQSxVQUFkc0YsQ0FBYyxTQUFkQSxDQUFjO0FBQUEsVUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQ3REdkUsU0FBRyxDQUFDZ0UsU0FBSjtBQUNBaEUsU0FBRyxDQUFDd0UsR0FBSixDQUFRekYsQ0FBUixFQUFXQyxDQUFYLEVBQWNzRixDQUFkLEVBQWlCLENBQWpCLEVBQW9CLElBQUlqQixJQUFJLENBQUNvQixFQUE3QjtBQUNBekUsU0FBRyxDQUFDMEUsU0FBSixHQUFnQkgsSUFBaEI7QUFDQXZFLFNBQUcsQ0FBQ3VFLElBQUo7QUFDRCxLQUxEO0FBTUQsR0FSRDs7QUFVQSxNQUFNdEIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTSxDQUN0QixDQURELENBL0pnRixDQWtLaEY7OztBQUNBLE1BQU1WLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUN2QyxHQUFELEVBQW1DO0FBQy9DLFFBQUksQ0FBQ0EsR0FBRCxJQUFRYSxVQUFVLENBQUNJLE9BQXZCLEVBQWdDLE9BRGUsQ0FFL0M7O0FBQ0FqQixPQUFHLENBQUM0QyxNQUFKLENBQVdDLEtBQVgsR0FBbUJuRCxXQUFXLEdBQUdULEtBQWpDO0FBQ0FlLE9BQUcsQ0FBQzRDLE1BQUosQ0FBVytCLE1BQVgsR0FBb0JoRixZQUFZLEdBQUdWLEtBQW5DO0FBQ0FlLE9BQUcsQ0FBQ1QsS0FBSixDQUFVTixLQUFWLEVBQWlCQSxLQUFqQjtBQUNBaUIsWUFBUSxDQUFDLENBQUQsQ0FBUixDQU4rQyxDQVEvQzs7QUFDQUQsVUFBTSxDQUFDRCxHQUFELENBQU47QUFDQUksYUFBUyxDQUFDeEIsTUFBRCxDQUFUO0FBQ0EwQixlQUFXLENBQUMxQixNQUFELENBQVg7QUFDQTRCLHNCQUFrQixDQUFDNUIsTUFBRCxDQUFsQjtBQUNBbUMsaUJBQWEsQ0FBQ0UsT0FBZCxHQUF3QnJDLE1BQXhCO0FBQ0FrQyxtQkFBZSxDQUFDRyxPQUFoQixHQUEwQnJDLE1BQTFCLENBZCtDLENBZ0IvQzs7QUFDQWlDLGNBQVUsQ0FBQ0ksT0FBWCxHQUFxQixJQUFyQjtBQUNELEdBbEJELENBbktnRixDQXVMaEY7OztBQUNBLE1BQU0yRCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQW1CO0FBQ25DLFFBQUksQ0FBQzdFLEdBQUwsRUFBVTtBQUNWLFFBQU04RSxZQUFZLEdBQUdoRSxlQUFlLENBQUNHLE9BQXJDO0FBQ0EsUUFBTThELGVBQWUsR0FBRztBQUFFaEcsT0FBQyxFQUFFOEYsQ0FBQyxDQUFDdEQsT0FBUDtBQUFnQnZDLE9BQUMsRUFBRTZGLENBQUMsQ0FBQ3JEO0FBQXJCLEtBQXhCO0FBQ0FWLG1CQUFlLENBQUNHLE9BQWhCLEdBQTBCOEQsZUFBMUI7QUFDQSxRQUFNQyxTQUFTLEdBQUc5RixVQUFVLENBQUM2RixlQUFELEVBQWtCRCxZQUFsQixDQUE1QjtBQUNBMUUsYUFBUyxDQUFDLFVBQUM2RSxVQUFEO0FBQUEsYUFBZ0I1RixTQUFTLENBQUM0RixVQUFELEVBQWFELFNBQWIsQ0FBekI7QUFBQSxLQUFELENBQVQ7QUFDRCxHQVBEOztBQVNBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJyRixhQUFTLENBQUNvQixPQUFWLENBQWtCa0UsS0FBbEIsQ0FBd0JDLE1BQXhCLEdBQWlDLFdBQWpDO0FBQ0FDLFlBQVEsQ0FBQ3hELG1CQUFULENBQTZCLFdBQTdCLEVBQTBDK0MsU0FBMUM7QUFDQVMsWUFBUSxDQUFDeEQsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0NxRCxPQUF4QztBQUNELEdBSkQ7O0FBTUEsTUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1QsQ0FBRCxFQUF3RDtBQUN2RWhGLGFBQVMsQ0FBQ29CLE9BQVYsQ0FBa0JrRSxLQUFsQixDQUF3QkMsTUFBeEIsR0FBaUMsVUFBakM7QUFDQUMsWUFBUSxDQUFDekQsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNnRCxTQUF2QztBQUNBUyxZQUFRLENBQUN6RCxnQkFBVCxDQUEwQixTQUExQixFQUFxQ3NELE9BQXJDO0FBQ0FwRSxtQkFBZSxDQUFDRyxPQUFoQixHQUEwQjtBQUFFbEMsT0FBQyxFQUFFOEYsQ0FBQyxDQUFDVSxXQUFGLENBQWNoRSxPQUFuQjtBQUE0QnZDLE9BQUMsRUFBRTZGLENBQUMsQ0FBQ1UsV0FBRixDQUFjL0Q7QUFBN0MsS0FBMUI7QUFDRCxHQUxEOztBQU9BLE1BQU1nRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNYLENBQUQsRUFBd0Q7QUFDOUUsUUFBSSxDQUFDN0UsR0FBRCxJQUFRLENBQUNKLGFBQWIsRUFBNEI7QUFDNUJjLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBRUFkLGlCQUFhLENBQUN3RSxPQUFkLENBQXNCLGlCQUFxQztBQUFBLDhCQUFsQ0MsS0FBa0M7QUFBQSxVQUF6QnRGLENBQXlCLGVBQXpCQSxDQUF5QjtBQUFBLFVBQXRCQyxDQUFzQixlQUF0QkEsQ0FBc0I7QUFBQSxVQUFqQnNGLENBQWlCLFNBQWpCQSxDQUFpQjtBQUFBLFVBQWRtQixPQUFjLFNBQWRBLE9BQWM7QUFDekQsVUFBTUMsTUFBTSxHQUFHLElBQUlDLE1BQUosRUFBZjtBQUNBRCxZQUFNLENBQUNsQixHQUFQLENBQVd6RixDQUFYLEVBQWNDLENBQWQsRUFBaUJzRixDQUFqQixFQUFvQixDQUFwQixFQUF1QixJQUFJakIsSUFBSSxDQUFDb0IsRUFBaEM7O0FBQ0EsVUFBSXpFLEdBQUcsQ0FBQzRGLGFBQUosQ0FBa0JGLE1BQWxCLEVBQTBCYixDQUFDLENBQUNVLFdBQUYsQ0FBY2hFLE9BQXhDLEVBQWlEc0QsQ0FBQyxDQUFDVSxXQUFGLENBQWMvRCxPQUEvRCxDQUFKLEVBQTZFO0FBQzNFWixxQkFBYSxDQUFDO0FBQUU3QixXQUFDLFlBQUs4RixDQUFDLENBQUNVLFdBQUYsQ0FBY2hFLE9BQW5CLE9BQUg7QUFBbUN2QyxXQUFDLFlBQUs2RixDQUFDLENBQUNVLFdBQUYsQ0FBYy9ELE9BQWQsR0FBd0IsRUFBN0I7QUFBcEMsU0FBRCxDQUFiO0FBQ0FkLG9CQUFZLENBQUMrRSxPQUFELENBQVo7QUFDQTtBQUNEO0FBQ0YsS0FSRDtBQVNELEdBYkQ7O0FBZUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVqSCxFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUE0QixTQUFLLEVBQUU7QUFBRXFFLFdBQUssRUFBRW5ELFdBQVcsR0FBR1Q7QUFBdkIsS0FBbkM7QUFBQSw0QkFDRTtBQUNFLGlCQUFXLEVBQUV1RyxlQURmO0FBRUUsaUJBQVcsRUFBRUYsUUFGZjtBQUdFLFNBQUcsRUFBRXpGLFNBSFA7QUFJRSxXQUFLLEVBQUVILFdBQVcsR0FBR1QsS0FKdkI7QUFLRSxZQUFNLEVBQUVVLFlBQVksR0FBR1YsS0FMekI7QUFNRSxXQUFLLEVBQUU7QUFDTG1HLGNBQU0sRUFBRSxXQURIO0FBRUx2QyxhQUFLLFlBQUtuRCxXQUFMLE9BRkE7QUFHTGlGLGNBQU0sWUFBS2hGLFlBQUw7QUFIRDtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWFFO0FBQ0UsZUFBUyxFQUFFbkIsRUFBRSxDQUFDLGFBQUQsQ0FEZjtBQUVFLFdBQUssRUFBRTtBQUNMcUgsaUJBQVMsc0JBQWVsRixVQUFVLENBQUM1QixDQUExQixlQUFnQzRCLFVBQVUsQ0FBQzNCLENBQTNDO0FBREosT0FGVDtBQUFBLGdCQU1HeUI7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsZUFxQkU7QUFBTSxlQUFTLEVBQUVqQyxFQUFFLENBQUMsT0FBRCxDQUFuQjtBQUFBLDRCQUFzQ2UsS0FBSyxDQUFDdUcsT0FBTixDQUFjLENBQWQsQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBc0JFO0FBQVEsZUFBUyxFQUFFdEgsRUFBRSxDQUFDLEtBQUQsQ0FBckI7QUFBOEIsYUFBTyxFQUFFO0FBQUEsZUFBTXdCLEdBQUcsSUFBSXVDLEtBQUssQ0FBQ3ZDLEdBQUQsQ0FBbEI7QUFBQSxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXZQRDs7R0FBTVAsVTs7S0FBQUEsVTtBQXlQU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnViYmxlQ2hhcnQuZjg1ODAwZmVmMTc4ZDU1NzZiYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZUxheW91dEVmZmVjdCxcclxuICB1c2VSZWYsXHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3RFbGVtZW50XHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnViYmxlQ2hhcnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIENoYXJ0RGF0YSB7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG4gIHI6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0b29sVGlwPzogUmVhY3RFbGVtZW50O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHMge1xyXG4gIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhcnREYXRhTGlzdD86IENoYXJ0RGF0YVtdO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgT1JJR0lOID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmNvbnN0IFJBVElPID0gMTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCArIHAyLngsIHk6IHAxLnkgKyBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjYWxlUG9pbnQocDE6IFBvaW50LCBzY2FsZTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAvIHNjYWxlLCB5OiBwMS55IC8gc2NhbGUgfTtcclxufVxyXG5cclxuY29uc3QgWk9PTV9TRU5TSVRJVklUWSA9IDUwMDsgLy8gYmlnZ2VyIGZvciBsb3dlciB6b29tIHBlciBzY3JvbGxcclxuXHJcbmNvbnN0IEJ1YmJsZUNoYXIgPSAoeyBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjaGFydERhdGFMaXN0IH06IENhbnZhc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGU8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbbW91c2VQb3MsIHNldE1vdXNlUG9zXSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFt2aWV3cG9ydFRvcExlZnQsIHNldFZpZXdwb3J0VG9wTGVmdF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdG9vbFRpcEVsLCBzZXRUb29sVGlwRWxdID0gdXNlU3RhdGUoPD48Lz4pO1xyXG4gIGNvbnN0IFt0b29sVGlwUG9zLCBzZXRUb29sVGlwUG9zXSA9IHVzZVN0YXRlKHsgeDogJzBweCcsIHk6ICcwcHgnIH0pO1xyXG4gIGNvbnN0IGlzUmVzZXRSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBsYXN0T2Zmc2V0UmVmID0gdXNlUmVmPFBvaW50PihPUklHSU4pO1xyXG5cclxuICAvLyB1cGRhdGUgbGFzdCBvZmZzZXRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGFzdE9mZnNldFJlZi5jdXJyZW50ID0gb2Zmc2V0O1xyXG4gIH0sIFtvZmZzZXRdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3IgbW91c2UgcG9zaXRpb25cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZU1vdXNlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChjYW52YXNSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0TW91c2VQb3MgPSB7IHg6IGV2ZW50Lm9mZnNldFgsIHk6IGV2ZW50Lm9mZnNldFkgfTtcclxuICAgICAgICBjb25zdCB0b3BMZWZ0Q2FudmFzUG9zID0ge1xyXG4gICAgICAgICAgeDogY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCxcclxuICAgICAgICAgIHk6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldFRvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0TW91c2VQb3MoZGlmZlBvaW50cyh2aWV3cG9ydE1vdXNlUG9zLCB0b3BMZWZ0Q2FudmFzUG9zKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gY2FudmFzIGZvciB6b29tXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAvLyB0aGlzIGlzIHRyaWNreS4gVXBkYXRlIHRoZSB2aWV3cG9ydCdzIFwib3JpZ2luXCIgc3VjaCB0aGF0XHJcbiAgICAvLyB0aGUgbW91c2UgZG9lc24ndCBtb3ZlIGR1cmluZyBzY2FsZSAtIHRoZSAnem9vbSBwb2ludCcgb2YgdGhlIG1vdXNlXHJcbiAgICAvLyBiZWZvcmUgYW5kIGFmdGVyIHpvb20gaXMgcmVsYXRpdmVseSB0aGUgc2FtZSBwb3NpdGlvbiBvbiB0aGUgdmlld3BvcnRcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVdoZWVsKGV2ZW50OiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICBjb25zdCB6b29tID0gMSAtIGV2ZW50LmRlbHRhWSAvIFpPT01fU0VOU0lUSVZJVFk7XHJcblxyXG4gICAgICAgIGlmIChzY2FsZSAqIHpvb20gPCAwLjMpIHJldHVybjtcclxuICAgICAgICBpZiAoc2NhbGUgKiB6b29tID4gMykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3cG9ydFRvcExlZnREZWx0YSA9IHtcclxuICAgICAgICAgIHg6IChtb3VzZVBvcy54IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSksXHJcbiAgICAgICAgICB5OiAobW91c2VQb3MueSAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBuZXdWaWV3cG9ydFRvcExlZnQgPSBhZGRQb2ludHMoXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnQsXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnREZWx0YVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodmlld3BvcnRUb3BMZWZ0LngsIHZpZXdwb3J0VG9wTGVmdC55KTtcclxuICAgICAgICBjdHguc2NhbGUoem9vbSwgem9vbSk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtbmV3Vmlld3BvcnRUb3BMZWZ0LngsIC1uZXdWaWV3cG9ydFRvcExlZnQueSk7XHJcblxyXG4gICAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChuZXdWaWV3cG9ydFRvcExlZnQpO1xyXG4gICAgICAgIHNldFNjYWxlKHNjYWxlICogem9vbSk7XHJcbiAgICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gICAgcmV0dXJuICgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCk7XHJcbiAgfSwgW2N0eCwgbW91c2VQb3MueCwgbW91c2VQb3MueSwgdmlld3BvcnRUb3BMZWZ0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBzZXR1cCBjYW52YXMgYW5kIHNldCBjb250ZXh0XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY2FudmFzUmVmKSByZXR1cm47XHJcbiAgICBjb25zdCByZW5kZXJDdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBpZiAocmVuZGVyQ3R4KSByZXNldChyZW5kZXJDdHgpO1xyXG4gIH0sIFtjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoLCBjaGFydERhdGFMaXN0XSk7XHJcblxyXG4gIC8vIHBhbiB3aGVuIG9mZnNldCBvciBzY2FsZSBjaGFuZ2VzXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHggJiYgbGFzdE9mZnNldFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldERpZmYgPSBzY2FsZVBvaW50KFxyXG4gICAgICAgIGRpZmZQb2ludHMob2Zmc2V0LCBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQpLFxyXG4gICAgICAgIHNjYWxlXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUob2Zmc2V0RGlmZi54LCBvZmZzZXREaWZmLnkpO1xyXG4gICAgICBzZXRWaWV3cG9ydFRvcExlZnQoKHByZXZWYWwpID0+IGRpZmZQb2ludHMocHJldlZhbCwgb2Zmc2V0RGlmZikpO1xyXG4gICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LCBbY3R4LCBvZmZzZXQsIHNjYWxlXSk7XHJcblxyXG4gIC8vIGRyYXdcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN0eCkge1xyXG4gICAgICBjb25zdCBzdG9yZWRUcmFuc2Zvcm0gPSBjdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xyXG4gICAgICBjdHguc2V0VHJhbnNmb3JtKHN0b3JlZFRyYW5zZm9ybSk7XHJcblxyXG4gICAgICBkcmF3R3JpZCgpO1xyXG4gICAgICBkcmF3Q2lyY2xlcygpO1xyXG4gICAgICBkcmF3VGV4dCgpO1xyXG4gICAgfVxyXG4gIH0sIFtcclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgY2hhcnREYXRhTGlzdCxcclxuICAgIGN0eCxcclxuICAgIHNjYWxlLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgdmlld3BvcnRUb3BMZWZ0XHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGRyYXdHcmlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgR1JJRF9TQ0FMRSA9IDIwO1xyXG4gICAgY29uc3QgcyA9IDExMDtcclxuICAgIGNvbnN0IG5YID0gTWF0aC5mbG9vcihjYW52YXNXaWR0aCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBuWSA9IE1hdGguZmxvb3IoY2FudmFzSGVpZ2h0ICogR1JJRF9TQ0FMRSAvIHMpIC0gMjtcclxuICAgIGNvbnN0IHBYID0gY2FudmFzV2lkdGggLSBuWCAqIHM7XHJcbiAgICBjb25zdCBwWSA9IGNhbnZhc0hlaWdodCAtIG5ZICogcztcclxuXHJcbiAgICBjb25zdCBwTCA9IE1hdGguY2VpbChwWCAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFQgPSBNYXRoLmNlaWwocFkgLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBSID0gY2FudmFzV2lkdGggLSBuWCAqIHMgLSBwTDtcclxuICAgIGNvbnN0IHBCID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzIC0gcFQ7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JleSc7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBmb3IgKGxldCB4ID0gcEw7IHggPD0gY2FudmFzV2lkdGggLSBwUjsgeCArPSBzKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8oeCwgcFQpO1xyXG4gICAgICBjdHgubGluZVRvKHgsIGNhbnZhc0hlaWdodCAtIHBCKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IHkgPSBwVDsgeSA8PSBjYW52YXNIZWlnaHQgLSBwQjsgeSArPSBzKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8ocEwsIHkpO1xyXG4gICAgICBjdHgubGluZVRvKGNhbnZhc1dpZHRoIC0gcFIsIHkpO1xyXG4gICAgfVxyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd0NpcmNsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNoYXJ0RGF0YUxpc3QpIHJldHVybjtcclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoeyBwb2ludDogeyB4LCB5IH0sIHIsIGZpbGwgfSkgPT4ge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3VGV4dCA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIC8vIHJlc2V0XHJcbiAgY29uc3QgcmVzZXQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcclxuICAgIGlmICghY3R4ICYmIGlzUmVzZXRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgLy8gYWRqdXN0IGZvciBkZXZpY2UgcGl4ZWwgZGVuc2l0eVxyXG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IGNhbnZhc1dpZHRoICogUkFUSU87XHJcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCAqIFJBVElPO1xyXG4gICAgY3R4LnNjYWxlKFJBVElPLCBSQVRJTyk7XHJcbiAgICBzZXRTY2FsZSgxKTtcclxuXHJcbiAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgc2V0Q3R4KGN0eCk7XHJcbiAgICBzZXRPZmZzZXQoT1JJR0lOKTtcclxuICAgIHNldE1vdXNlUG9zKE9SSUdJTik7XHJcbiAgICBzZXRWaWV3cG9ydFRvcExlZnQoT1JJR0lOKTtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IE9SSUdJTjtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG5cclxuICAgIC8vIHRoaXMgdGhpbmcgaXMgc28gbXVsdGlwbGUgcmVzZXRzIGluIGEgcm93IGRvbid0IGNsZWFyIGNhbnZhc1xyXG4gICAgaXNSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICAvLyBmdW5jdGlvbnMgZm9yIHBhbm5pbmdcclxuICBjb25zdCBtb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKCFjdHgpIHJldHVybjtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW91c2VVcCA9ICgpID0+IHtcclxuICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBjYW52YXNSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIHk6IGUubmF0aXZlRXZlbnQub2Zmc2V0WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWN0eCB8fCAhY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgc2V0VG9vbFRpcEVsKG51bGwpO1xyXG5cclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoeyBwb2ludDogeyB4LCB5IH0sIHIsIHRvb2xUaXAgfSkgPT4ge1xyXG4gICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XHJcbiAgICAgIGNpcmNsZS5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBpZiAoY3R4LmlzUG9pbnRJblBhdGgoY2lyY2xlLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIGUubmF0aXZlRXZlbnQub2Zmc2V0WSkpIHtcclxuICAgICAgICBzZXRUb29sVGlwUG9zKHsgeDogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRYfXB4YCwgeTogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRZIC0gNTB9cHhgIH0pO1xyXG4gICAgICAgIHNldFRvb2xUaXBFbCh0b29sVGlwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfSBzdHlsZT17eyB3aWR0aDogY2FudmFzV2lkdGggKiBSQVRJTyB9fT5cclxuICAgICAgPGNhbnZhc1xyXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XHJcbiAgICAgICAgb25Nb3VzZURvd249e3N0YXJ0UGFufVxyXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICAgIHdpZHRoPXtjYW52YXNXaWR0aCAqIFJBVElPfVxyXG4gICAgICAgIGhlaWdodD17Y2FudmFzSGVpZ2h0ICogUkFUSU99XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGN1cnNvcjogXCJjcm9zc2hhaXJcIixcclxuICAgICAgICAgIHdpZHRoOiBgJHtjYW52YXNXaWR0aH1weGAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke2NhbnZhc0hlaWdodH1weGBcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCgndG9vbHRpcFdyYXAnKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dG9vbFRpcFBvcy54fSwgJHt0b29sVGlwUG9zLnl9KWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0b29sVGlwRWx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdzY2FsZScpfT5zY2FsZToge3NjYWxlLnRvRml4ZWQoMil9PC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXsoKSA9PiBjdHggJiYgcmVzZXQoY3R4KX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlQ2hhcjsiXSwic291cmNlUm9vdCI6IiJ9