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
    chartDataList.forEach(function (_ref3) {
      var _ref3$point = _ref3.point,
          x = _ref3$point.x,
          y = _ref3$point.y,
          r = _ref3.r;
      var circle = new Path2D();
      circle.arc(x, y, r, 0, 2 * Math.PI);

      if (ctx.isPointInPath(circle, e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
        console.log('in');
        setToolTipPos({
          x: "".concat(e.nativeEvent.offsetX, "px"),
          y: "".concat(e.nativeEvent.offsetY - 40, "px")
        });
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
      lineNumber: 280,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('tooltip'),
      style: {
        transform: "translate(".concat(toolTipPos.x, ", ").concat(toolTipPos.y, ")")
      },
      children: toolTip
    }, void 0, false, {
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
      lineNumber: 298,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 279,
    columnNumber: 5
  }, _this);
};

_s(BubbleChar, "2mup5r51XaK4C393A+ES090vyc0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXAiLCJzZXRUb29sVGlwIiwidG9vbFRpcFBvcyIsInNldFRvb2xUaXBQb3MiLCJpc1Jlc2V0UmVmIiwibGFzdE1vdXNlUG9zUmVmIiwibGFzdE9mZnNldFJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJlbCIsImhhbmRsZVVwZGF0ZU1vdXNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdwb3J0TW91c2VQb3MiLCJjbGllbnRYIiwiY2xpZW50WSIsInRvcExlZnRDYW52YXNQb3MiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVXaGVlbCIsInpvb20iLCJkZWx0YVkiLCJ2aWV3cG9ydFRvcExlZnREZWx0YSIsIm5ld1ZpZXdwb3J0VG9wTGVmdCIsInRyYW5zbGF0ZSIsInVzZUxheW91dEVmZmVjdCIsInJlbmRlckN0eCIsImdldENvbnRleHQiLCJyZXNldCIsIm9mZnNldERpZmYiLCJwcmV2VmFsIiwic3RvcmVkVHJhbnNmb3JtIiwiZ2V0VHJhbnNmb3JtIiwiY2FudmFzIiwid2lkdGgiLCJzZXRUcmFuc2Zvcm0iLCJkcmF3R3JpZCIsImRyYXdDaXJjbGVzIiwiZHJhd1RleHQiLCJHUklEX1NDQUxFIiwicyIsIm5YIiwiTWF0aCIsImZsb29yIiwiblkiLCJwWCIsInBZIiwicEwiLCJjZWlsIiwicFQiLCJwUiIsInBCIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJmb3JFYWNoIiwicG9pbnQiLCJyIiwiZmlsbCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwidXNlQ2FsbGJhY2siLCJoZWlnaHQiLCJtb3VzZU1vdmUiLCJlIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsIm1vdXNlVXAiLCJzdHlsZSIsImN1cnNvciIsImRvY3VtZW50Iiwic3RhcnRQYW4iLCJwYWdlWCIsInBhZ2VZIiwiaGFuZGxlTW91c2VNb3ZlIiwiY2lyY2xlIiwiUGF0aDJEIiwiaXNQb2ludEluUGF0aCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjb25zb2xlIiwibG9nIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywrREFBaEIsQ0FBWDtBQWNDO0FBS0E7QUFFRCxJQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVDLEdBQUMsRUFBRSxDQUFMO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQWQsQ0FBZjtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFkOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQStCQyxFQUEvQixFQUEwQztBQUN4QyxTQUFPO0FBQUVMLEtBQUMsRUFBRUksRUFBRSxDQUFDSixDQUFI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QUNFLGVBQVMsRUFBRW5CLEVBQUUsQ0FBQyxTQUFELENBRGY7QUFFRSxXQUFLLEVBQUU7QUFBQzJILGlCQUFTLHNCQUFleEYsVUFBVSxDQUFDNUIsQ0FBMUIsZUFBZ0M0QixVQUFVLENBQUMzQixDQUEzQztBQUFWLE9BRlQ7QUFBQSxnQkFJR3lCO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLGVBbUJFO0FBQVEsZUFBUyxFQUFFakMsRUFBRSxDQUFDLEtBQUQsQ0FBckI7QUFBOEIsYUFBTyxFQUFFO0FBQUEsZUFBTXdCLEdBQUcsSUFBSXVDLEtBQUssQ0FBQ3ZDLEdBQUQsQ0FBbEI7QUFBQSxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQTNQRDs7R0FBTVAsVTs7S0FBQUEsVTtBQTZQU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnViYmxlQ2hhcnQuOGFlNDFhZGY4YTY1ZThlMzllZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZUNhbGxiYWNrLFxyXG4gIHVzZUxheW91dEVmZmVjdCxcclxuICB1c2VSZWYsXHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3RFbGVtZW50XHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnViYmxlQ2hhcnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIENoYXJ0RGF0YSB7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG4gIHI6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0b29sVGlwPzogUmVhY3RFbGVtZW50O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHMge1xyXG4gIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhcnREYXRhTGlzdD86IENoYXJ0RGF0YVtdO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgT1JJR0lOID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmNvbnN0IFJBVElPID0gMTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCArIHAyLngsIHk6IHAxLnkgKyBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjYWxlUG9pbnQocDE6IFBvaW50LCBzY2FsZTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAvIHNjYWxlLCB5OiBwMS55IC8gc2NhbGUgfTtcclxufVxyXG5cclxuY29uc3QgWk9PTV9TRU5TSVRJVklUWSA9IDUwMDsgLy8gYmlnZ2VyIGZvciBsb3dlciB6b29tIHBlciBzY3JvbGxcclxuXHJcbmNvbnN0IEJ1YmJsZUNoYXIgPSAoeyBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjaGFydERhdGFMaXN0IH06IENhbnZhc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGU8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbbW91c2VQb3MsIHNldE1vdXNlUG9zXSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFt2aWV3cG9ydFRvcExlZnQsIHNldFZpZXdwb3J0VG9wTGVmdF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdG9vbFRpcCwgc2V0VG9vbFRpcF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG9vbFRpcFBvcywgc2V0VG9vbFRpcFBvc10gPSB1c2VTdGF0ZSh7eDogJzBweCcsIHk6ICcwcHgnfSk7XHJcbiAgY29uc3QgaXNSZXNldFJlZiA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IGxhc3RPZmZzZXRSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcblxyXG4gIC8vIHVwZGF0ZSBsYXN0IG9mZnNldFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBvZmZzZXQ7XHJcbiAgfSwgW29mZnNldF0pO1xyXG5cclxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gY2FudmFzIGZvciBtb3VzZSBwb3NpdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlTW91c2UoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGNhbnZhc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRNb3VzZVBvcyA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xyXG4gICAgICAgIGNvbnN0IHRvcExlZnRDYW52YXNQb3MgPSB7XHJcbiAgICAgICAgICB4OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgeTogY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0VG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRNb3VzZVBvcyhkaWZmUG9pbnRzKHZpZXdwb3J0TW91c2VQb3MsIHRvcExlZnRDYW52YXNQb3MpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIHpvb21cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIHRoaXMgaXMgdHJpY2t5LiBVcGRhdGUgdGhlIHZpZXdwb3J0J3MgXCJvcmlnaW5cIiBzdWNoIHRoYXRcclxuICAgIC8vIHRoZSBtb3VzZSBkb2Vzbid0IG1vdmUgZHVyaW5nIHNjYWxlIC0gdGhlICd6b29tIHBvaW50JyBvZiB0aGUgbW91c2VcclxuICAgIC8vIGJlZm9yZSBhbmQgYWZ0ZXIgem9vbSBpcyByZWxhdGl2ZWx5IHRoZSBzYW1lIHBvc2l0aW9uIG9uIHRoZSB2aWV3cG9ydFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlV2hlZWwoZXZlbnQ6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgIGNvbnN0IHpvb20gPSAxIC0gZXZlbnQuZGVsdGFZIC8gWk9PTV9TRU5TSVRJVklUWTtcclxuXHJcbiAgICAgICAgaWYgKHNjYWxlICogem9vbSA8IDAuMykgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzY2FsZSAqIHpvb20gPiAzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0VG9wTGVmdERlbHRhID0ge1xyXG4gICAgICAgICAgeDogKG1vdXNlUG9zLnggLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKSxcclxuICAgICAgICAgIHk6IChtb3VzZVBvcy55IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld1ZpZXdwb3J0VG9wTGVmdCA9IGFkZFBvaW50cyhcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdCxcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdERlbHRhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh2aWV3cG9ydFRvcExlZnQueCwgdmlld3BvcnRUb3BMZWZ0LnkpO1xyXG4gICAgICAgIGN0eC5zY2FsZSh6b29tLCB6b29tKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKC1uZXdWaWV3cG9ydFRvcExlZnQueCwgLW5ld1ZpZXdwb3J0VG9wTGVmdC55KTtcclxuXHJcbiAgICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KG5ld1ZpZXdwb3J0VG9wTGVmdCk7XHJcbiAgICAgICAgc2V0U2NhbGUoc2NhbGUgKiB6b29tKTtcclxuICAgICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCk7XHJcbiAgICByZXR1cm4gKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICB9LCBbY3R4LCBtb3VzZVBvcy54LCBtb3VzZVBvcy55LCB2aWV3cG9ydFRvcExlZnQsIHNjYWxlXSk7XHJcblxyXG4gIC8vIHNldHVwIGNhbnZhcyBhbmQgc2V0IGNvbnRleHRcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjYW52YXNSZWYpIHJldHVybjtcclxuICAgIGNvbnN0IHJlbmRlckN0eCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGlmIChyZW5kZXJDdHgpIHJlc2V0KHJlbmRlckN0eCk7XHJcbiAgfSwgW2NhbnZhc0hlaWdodCwgY2FudmFzV2lkdGgsIGNoYXJ0RGF0YUxpc3RdKTtcclxuXHJcbiAgLy8gcGFuIHdoZW4gb2Zmc2V0IG9yIHNjYWxlIGNoYW5nZXNcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN0eCAmJiBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgb2Zmc2V0RGlmZiA9IHNjYWxlUG9pbnQoXHJcbiAgICAgICAgZGlmZlBvaW50cyhvZmZzZXQsIGxhc3RPZmZzZXRSZWYuY3VycmVudCksXHJcbiAgICAgICAgc2NhbGVcclxuICAgICAgKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZShvZmZzZXREaWZmLngsIG9mZnNldERpZmYueSk7XHJcbiAgICAgIHNldFZpZXdwb3J0VG9wTGVmdCgocHJldlZhbCkgPT4gZGlmZlBvaW50cyhwcmV2VmFsLCBvZmZzZXREaWZmKSk7XHJcbiAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sIFtjdHgsIG9mZnNldCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gZHJhd1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4KSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZFRyYW5zZm9ybSA9IGN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IGN0eC5jYW52YXMud2lkdGg7XHJcbiAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oc3RvcmVkVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgIGRyYXdHcmlkKCk7XHJcbiAgICAgIGRyYXdDaXJjbGVzKCk7XHJcbiAgICAgIGRyYXdUZXh0KCk7XHJcbiAgICB9XHJcbiAgfSwgW1xyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBjaGFydERhdGFMaXN0LFxyXG4gICAgY3R4LFxyXG4gICAgc2NhbGUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICB2aWV3cG9ydFRvcExlZnRcclxuICBdKTtcclxuXHJcbiAgY29uc3QgZHJhd0dyaWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBHUklEX1NDQUxFID0gMjA7XHJcbiAgICBjb25zdCBzID0gMTEwO1xyXG4gICAgY29uc3QgblggPSBNYXRoLmZsb29yKGNhbnZhc1dpZHRoICogR1JJRF9TQ0FMRSAvIHMpIC0gMjtcclxuICAgIGNvbnN0IG5ZID0gTWF0aC5mbG9vcihjYW52YXNIZWlnaHQgKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgcFggPSBjYW52YXNXaWR0aCAtIG5YICogcztcclxuICAgIGNvbnN0IHBZID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzO1xyXG5cclxuICAgIGNvbnN0IHBMID0gTWF0aC5jZWlsKHBYIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwVCA9IE1hdGguY2VpbChwWSAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFIgPSBjYW52YXNXaWR0aCAtIG5YICogcyAtIHBMO1xyXG4gICAgY29uc3QgcEIgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHMgLSBwVDtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmV5JztcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGZvciAobGV0IHggPSBwTDsgeCA8PSBjYW52YXNXaWR0aCAtIHBSOyB4ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyh4LCBwVCk7XHJcbiAgICAgIGN0eC5saW5lVG8oeCwgY2FudmFzSGVpZ2h0IC0gcEIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgeSA9IHBUOyB5IDw9IGNhbnZhc0hlaWdodCAtIHBCOyB5ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhwTCwgeSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY2FudmFzV2lkdGggLSBwUiwgeSk7XHJcbiAgICB9XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3Q2lyY2xlcyA9ICgpID0+IHtcclxuICAgIGlmICghY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgY2hhcnREYXRhTGlzdC5mb3JFYWNoKCh7IHBvaW50OiB7IHgsIHkgfSwgciwgZmlsbCB9KSA9PiB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdUZXh0ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXRcclxuICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XHJcbiAgICAgIGlmICghY3R4ICYmIGlzUmVzZXRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgICAvLyBhZGp1c3QgZm9yIGRldmljZSBwaXhlbCBkZW5zaXR5XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCAqIFJBVElPO1xyXG4gICAgICBjdHguY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCAqIFJBVElPO1xyXG4gICAgICBjdHguc2NhbGUoUkFUSU8sIFJBVElPKTtcclxuICAgICAgc2V0U2NhbGUoMSk7XHJcblxyXG4gICAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgICBzZXRDdHgoY3R4KTtcclxuICAgICAgc2V0T2Zmc2V0KE9SSUdJTik7XHJcbiAgICAgIHNldE1vdXNlUG9zKE9SSUdJTik7XHJcbiAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChPUklHSU4pO1xyXG4gICAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBPUklHSU47XHJcbiAgICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG5cclxuICAgICAgLy8gdGhpcyB0aGluZyBpcyBzbyBtdWx0aXBsZSByZXNldHMgaW4gYSByb3cgZG9uJ3QgY2xlYXIgY2FudmFzXHJcbiAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgW2NhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHRdXHJcbiAgKTtcclxuXHJcbiAgLy8gZnVuY3Rpb25zIGZvciBwYW5uaW5nXHJcbiAgY29uc3QgbW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoIWN0eCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcbiAgICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gICAgfSwgW2N0eF1cclxuICApO1xyXG5cclxuICBjb25zdCBtb3VzZVVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gIH0sIFttb3VzZU1vdmVdKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZIH07XHJcbiAgICB9LFxyXG4gICAgW21vdXNlTW92ZSwgbW91c2VVcF1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGlmICghY3R4IHx8ICFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcblxyXG4gICAgY2hhcnREYXRhTGlzdC5mb3JFYWNoKCh7IHBvaW50OiB7IHgsIHkgfSwgciB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBQYXRoMkQoKTtcclxuICAgICAgY2lyY2xlLmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGlmIChjdHguaXNQb2ludEluUGF0aChjaXJjbGUsIGUubmF0aXZlRXZlbnQub2Zmc2V0WCwgZS5uYXRpdmVFdmVudC5vZmZzZXRZKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbicpO1xyXG4gICAgICAgIHNldFRvb2xUaXBQb3Moe3g6IGAke2UubmF0aXZlRXZlbnQub2Zmc2V0WH1weGAsIHk6IGAke2UubmF0aXZlRXZlbnQub2Zmc2V0WSAtIDQwfXB4YH0pO1xyXG4gICAgICAgIHNldFRvb2xUaXAocik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfSBzdHlsZT17eyB3aWR0aDogY2FudmFzV2lkdGggKiBSQVRJTyB9fT5cclxuICAgICAgPGNhbnZhc1xyXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XHJcbiAgICAgICAgb25Nb3VzZURvd249e3N0YXJ0UGFufVxyXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICAgIHdpZHRoPXtjYW52YXNXaWR0aCAqIFJBVElPfVxyXG4gICAgICAgIGhlaWdodD17Y2FudmFzSGVpZ2h0ICogUkFUSU99XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGN1cnNvcjogXCJjcm9zc2hhaXJcIixcclxuICAgICAgICAgIHdpZHRoOiBgJHtjYW52YXNXaWR0aH1weGAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke2NhbnZhc0hlaWdodH1weGBcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCgndG9vbHRpcCcpfVxyXG4gICAgICAgIHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dG9vbFRpcFBvcy54fSwgJHt0b29sVGlwUG9zLnl9KWB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Rvb2xUaXB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXsoKSA9PiBjdHggJiYgcmVzZXQoY3R4KX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlQ2hhcjsiXSwic291cmNlUm9vdCI6IiJ9