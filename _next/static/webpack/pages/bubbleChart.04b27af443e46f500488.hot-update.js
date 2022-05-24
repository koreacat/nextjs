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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      toolTip = _useState6[0],
      setToolTip = _useState6[1];

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
    chartDataList.forEach(function (_ref3) {
      var _ref3$point = _ref3.point,
          x = _ref3$point.x,
          y = _ref3$point.y,
          r = _ref3.r;
      var circle = new Path2D();
      circle.arc(x, y, r, 0, 2 * Math.PI);

      if (ctx.isPointInPath(circle, e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
        console.log('in');
        setToolTip(r);
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: toolTip
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: cx('btn'),
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 5
  }, _this);
};

_s(BubbleChar, "UKA+fTyKbFHqmW3c/cadJLsZAkQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXAiLCJzZXRUb29sVGlwIiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwiR1JJRF9TQ0FMRSIsInMiLCJuWCIsIk1hdGgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZm9yRWFjaCIsInBvaW50IiwiciIsImZpbGwiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsInVzZUNhbGxiYWNrIiwiaGVpZ2h0IiwibW91c2VNb3ZlIiwiZSIsImxhc3RNb3VzZVBvcyIsImN1cnJlbnRNb3VzZVBvcyIsIm1vdXNlRGlmZiIsInByZXZPZmZzZXQiLCJtb3VzZVVwIiwic3R5bGUiLCJjdXJzb3IiLCJkb2N1bWVudCIsInN0YXJ0UGFuIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZU1vdXNlTW92ZSIsImNpcmNsZSIsIlBhdGgyRCIsImlzUG9pbnRJblBhdGgiLCJuYXRpdmVFdmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsK0RBQWhCLENBQVg7QUFjQztBQUtBO0FBRUQsSUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFQyxHQUFDLEVBQUUsQ0FBTDtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFkLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUcsQ0FBZDs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFTCxLQUFDLEVBQUVJLEVBQUUsQ0FBQ0osQ0FBSCxHQUFPSyxFQUFFLENBQUNMLENBQWY7QUFBa0JDLEtBQUMsRUFBRUcs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YWY0NDNlNDZmNTAwNDg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VDYWxsYmFjayxcclxuICB1c2VMYXlvdXRFZmZlY3QsXHJcbiAgdXNlUmVmLFxyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1YmJsZUNoYXJ0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBDaGFydERhdGEge1xyXG4gIHBvaW50OiBQb2ludDtcclxuICByOiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdG9vbFRpcD86IFJlYWN0RWxlbWVudDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENhbnZhc1Byb3BzIHtcclxuICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG4gIGNoYXJ0RGF0YUxpc3Q/OiBDaGFydERhdGFbXTtcclxufTtcclxuXHJcbmludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IE9SSUdJTiA9IE9iamVjdC5mcmVlemUoeyB4OiAwLCB5OiAwIH0pO1xyXG5jb25zdCBSQVRJTyA9IDE7XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggKyBwMi54LCB5OiBwMS55ICsgcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY2FsZVBvaW50KHAxOiBQb2ludCwgc2NhbGU6IG51bWJlcikge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLyBzY2FsZSwgeTogcDEueSAvIHNjYWxlIH07XHJcbn1cclxuXHJcbmNvbnN0IFpPT01fU0VOU0lUSVZJVFkgPSA1MDA7IC8vIGJpZ2dlciBmb3IgbG93ZXIgem9vbSBwZXIgc2Nyb2xsXHJcblxyXG5jb25zdCBCdWJibGVDaGFyID0gKHtjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjaGFydERhdGFMaXN0fTogQ2FudmFzUHJvcHMpID0+IHtcclxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZTxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc2NhbGUsIHNldFNjYWxlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFttb3VzZVBvcywgc2V0TW91c2VQb3NdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW3ZpZXdwb3J0VG9wTGVmdCwgc2V0Vmlld3BvcnRUb3BMZWZ0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFt0b29sVGlwLCBzZXRUb29sVGlwXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGlzUmVzZXRSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBsYXN0T2Zmc2V0UmVmID0gdXNlUmVmPFBvaW50PihPUklHSU4pO1xyXG5cclxuICAvLyB1cGRhdGUgbGFzdCBvZmZzZXRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGFzdE9mZnNldFJlZi5jdXJyZW50ID0gb2Zmc2V0O1xyXG4gIH0sIFtvZmZzZXRdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3IgbW91c2UgcG9zaXRpb25cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZU1vdXNlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChjYW52YXNSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0TW91c2VQb3MgPSB7IHg6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFkgfTtcclxuICAgICAgICBjb25zdCB0b3BMZWZ0Q2FudmFzUG9zID0ge1xyXG4gICAgICAgICAgeDogY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCxcclxuICAgICAgICAgIHk6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldFRvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0TW91c2VQb3MoZGlmZlBvaW50cyh2aWV3cG9ydE1vdXNlUG9zLCB0b3BMZWZ0Q2FudmFzUG9zKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gY2FudmFzIGZvciB6b29tXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAvLyB0aGlzIGlzIHRyaWNreS4gVXBkYXRlIHRoZSB2aWV3cG9ydCdzIFwib3JpZ2luXCIgc3VjaCB0aGF0XHJcbiAgICAvLyB0aGUgbW91c2UgZG9lc24ndCBtb3ZlIGR1cmluZyBzY2FsZSAtIHRoZSAnem9vbSBwb2ludCcgb2YgdGhlIG1vdXNlXHJcbiAgICAvLyBiZWZvcmUgYW5kIGFmdGVyIHpvb20gaXMgcmVsYXRpdmVseSB0aGUgc2FtZSBwb3NpdGlvbiBvbiB0aGUgdmlld3BvcnRcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVdoZWVsKGV2ZW50OiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICBjb25zdCB6b29tID0gMSAtIGV2ZW50LmRlbHRhWSAvIFpPT01fU0VOU0lUSVZJVFk7XHJcblxyXG4gICAgICAgIGlmKHNjYWxlICogem9vbSA8IDAuMykgcmV0dXJuO1xyXG4gICAgICAgIGlmKHNjYWxlICogem9vbSA+IDMpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRUb3BMZWZ0RGVsdGEgPSB7XHJcbiAgICAgICAgICB4OiAobW91c2VQb3MueCAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pLFxyXG4gICAgICAgICAgeTogKG1vdXNlUG9zLnkgLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbmV3Vmlld3BvcnRUb3BMZWZ0ID0gYWRkUG9pbnRzKFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0LFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0RGVsdGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjdHgudHJhbnNsYXRlKHZpZXdwb3J0VG9wTGVmdC54LCB2aWV3cG9ydFRvcExlZnQueSk7XHJcbiAgICAgICAgY3R4LnNjYWxlKHpvb20sIHpvb20pO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoLW5ld1ZpZXdwb3J0VG9wTGVmdC54LCAtbmV3Vmlld3BvcnRUb3BMZWZ0LnkpO1xyXG5cclxuICAgICAgICBzZXRWaWV3cG9ydFRvcExlZnQobmV3Vmlld3BvcnRUb3BMZWZ0KTtcclxuICAgICAgICBzZXRTY2FsZShzY2FsZSAqIHpvb20pO1xyXG4gICAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gIH0sIFtjdHgsIG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIHZpZXdwb3J0VG9wTGVmdCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gc2V0dXAgY2FudmFzIGFuZCBzZXQgY29udGV4dFxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbnZhc1JlZikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVuZGVyQ3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKHJlbmRlckN0eCkgcmVzZXQocmVuZGVyQ3R4KTtcclxuICB9LCBbY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgY2hhcnREYXRhTGlzdF0pO1xyXG5cclxuICAvLyBwYW4gd2hlbiBvZmZzZXQgb3Igc2NhbGUgY2hhbmdlc1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4ICYmIGxhc3RPZmZzZXRSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gc2NhbGVQb2ludChcclxuICAgICAgICBkaWZmUG9pbnRzKG9mZnNldCwgbGFzdE9mZnNldFJlZi5jdXJyZW50KSxcclxuICAgICAgICBzY2FsZVxyXG4gICAgICApO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKG9mZnNldERpZmYueCwgb2Zmc2V0RGlmZi55KTtcclxuICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KChwcmV2VmFsKSA9PiBkaWZmUG9pbnRzKHByZXZWYWwsIG9mZnNldERpZmYpKTtcclxuICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSwgW2N0eCwgb2Zmc2V0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBkcmF3XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHgpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkVHJhbnNmb3JtID0gY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcclxuICAgICAgY3R4LnNldFRyYW5zZm9ybShzdG9yZWRUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgZHJhd0dyaWQoKTtcclxuICAgICAgZHJhd0NpcmNsZXMoKTtcclxuICAgICAgZHJhd1RleHQoKTtcclxuICAgIH1cclxuICB9LCBbXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGNoYXJ0RGF0YUxpc3QsXHJcbiAgICBjdHgsXHJcbiAgICBzY2FsZSxcclxuICAgIG9mZnNldCxcclxuICAgIHZpZXdwb3J0VG9wTGVmdFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBkcmF3R3JpZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IEdSSURfU0NBTEUgPSAyMDtcclxuICAgIGNvbnN0IHMgPSAxMTA7XHJcbiAgICBjb25zdCBuWCA9IE1hdGguZmxvb3IoY2FudmFzV2lkdGggKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgblkgPSBNYXRoLmZsb29yKGNhbnZhc0hlaWdodCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBwWCA9IGNhbnZhc1dpZHRoIC0gblggKiBzO1xyXG4gICAgY29uc3QgcFkgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHM7XHJcblxyXG4gICAgY29uc3QgcEwgPSBNYXRoLmNlaWwocFggLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBUID0gTWF0aC5jZWlsKHBZIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwUiA9IGNhbnZhc1dpZHRoIC0gblggKiBzIC0gcEw7XHJcbiAgICBjb25zdCBwQiA9IGNhbnZhc0hlaWdodCAtIG5ZICogcyAtIHBUO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyZXknO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgZm9yIChsZXQgeCA9IHBMOyB4IDw9IGNhbnZhc1dpZHRoIC0gcFI7IHggKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHgsIHBUKTtcclxuICAgICAgY3R4LmxpbmVUbyh4LCBjYW52YXNIZWlnaHQgLSBwQik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB5ID0gcFQ7IHkgPD0gY2FudmFzSGVpZ2h0IC0gcEI7IHkgKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHBMLCB5KTtcclxuICAgICAgY3R4LmxpbmVUbyhjYW52YXNXaWR0aCAtIHBSLCB5KTtcclxuICAgIH1cclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdDaXJjbGVzID0gKCkgPT4ge1xyXG4gICAgaWYoIWNoYXJ0RGF0YUxpc3QpIHJldHVybjtcclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoe3BvaW50OiB7eCwgeX0sIHIsIGZpbGx9KSA9PiB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdUZXh0ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXRcclxuICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XHJcbiAgICAgIGlmICghY3R4ICYmIGlzUmVzZXRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgICAvLyBhZGp1c3QgZm9yIGRldmljZSBwaXhlbCBkZW5zaXR5XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCAqIFJBVElPO1xyXG4gICAgICBjdHguY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCAqIFJBVElPO1xyXG4gICAgICBjdHguc2NhbGUoUkFUSU8sIFJBVElPKTtcclxuICAgICAgc2V0U2NhbGUoMSk7XHJcblxyXG4gICAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgICBzZXRDdHgoY3R4KTtcclxuICAgICAgc2V0T2Zmc2V0KE9SSUdJTik7XHJcbiAgICAgIHNldE1vdXNlUG9zKE9SSUdJTik7XHJcbiAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChPUklHSU4pO1xyXG4gICAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBPUklHSU47XHJcbiAgICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG5cclxuICAgICAgLy8gdGhpcyB0aGluZyBpcyBzbyBtdWx0aXBsZSByZXNldHMgaW4gYSByb3cgZG9uJ3QgY2xlYXIgY2FudmFzXHJcbiAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgW2NhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHRdXHJcbiAgKTtcclxuXHJcbiAgLy8gZnVuY3Rpb25zIGZvciBwYW5uaW5nXHJcbiAgY29uc3QgbW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoIWN0eCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcbiAgICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gICAgfSwgW2N0eF1cclxuICApO1xyXG5cclxuICBjb25zdCBtb3VzZVVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gIH0sIFttb3VzZU1vdmVdKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZIH07XHJcbiAgICB9LFxyXG4gICAgW21vdXNlTW92ZSwgbW91c2VVcF1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGlmICghY3R4IHx8ICFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcbiAgICBcclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoe3BvaW50OiB7eCwgeX0sIHJ9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBQYXRoMkQoKTtcclxuICAgICAgY2lyY2xlLmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGlmKGN0eC5pc1BvaW50SW5QYXRoKGNpcmNsZSwgZS5uYXRpdmVFdmVudC5vZmZzZXRYLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFkpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luJyk7XHJcbiAgICAgICAgc2V0VG9vbFRpcChyKTtcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfSBzdHlsZT17e3dpZHRoOiBjYW52YXNXaWR0aCAqIFJBVElPfX0+XHJcbiAgICAgIDxjYW52YXNcclxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXtzdGFydFBhbn1cclxuICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICB3aWR0aD17Y2FudmFzV2lkdGggKiBSQVRJT31cclxuICAgICAgICBoZWlnaHQ9e2NhbnZhc0hlaWdodCAqIFJBVElPfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBjdXJzb3I6IFwiY3Jvc3NoYWlyXCIsXHJcbiAgICAgICAgICB3aWR0aDogYCR7Y2FudmFzV2lkdGh9cHhgLFxyXG4gICAgICAgICAgaGVpZ2h0OiBgJHtjYW52YXNIZWlnaHR9cHhgXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPHNwYW4+e3Rvb2xUaXB9PC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXsoKSA9PiBjdHggJiYgcmVzZXQoY3R4KX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlQ2hhcjsiXSwic291cmNlUm9vdCI6IiJ9