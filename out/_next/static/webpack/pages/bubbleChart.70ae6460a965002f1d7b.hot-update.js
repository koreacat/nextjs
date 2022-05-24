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


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\charts\\bubbleChart\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();


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
    var s = 110;
    var nX = Math.floor(canvasWidth * 20 / s) - 2;
    var nY = Math.floor(canvasHeight * 20 / s) - 2;
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

  var drawText = function drawText() {
    ctx.beginPath();
    ctx.arc(viewportTopLeft.x, viewportTopLeft.y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
  }; // reset


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
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
      lineNumber: 271,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 5
  }, _this);
};

_s(BubbleChar, "cPt1ZaiwoFxEkqPa+I5lXiJUSpo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJPUklHSU4iLCJPYmplY3QiLCJmcmVlemUiLCJ4IiwieSIsIlJBVElPIiwiZGlmZlBvaW50cyIsInAxIiwicDIiLCJhZGRQb2ludHMiLCJzY2FsZVBvaW50Iiwic2NhbGUiLCJaT09NX1NFTlNJVElWSVRZIiwiQnViYmxlQ2hhciIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2hhcnREYXRhTGlzdCIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiY3R4Iiwic2V0Q3R4Iiwic2V0U2NhbGUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJtb3VzZVBvcyIsInNldE1vdXNlUG9zIiwidmlld3BvcnRUb3BMZWZ0Iiwic2V0Vmlld3BvcnRUb3BMZWZ0IiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwicyIsIm5YIiwiTWF0aCIsImZsb29yIiwiblkiLCJwWCIsInBZIiwicEwiLCJjZWlsIiwicFQiLCJwUiIsInBCIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJmb3JFYWNoIiwicG9pbnQiLCJyIiwiZmlsbCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwidXNlQ2FsbGJhY2siLCJoZWlnaHQiLCJtb3VzZU1vdmUiLCJlIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsIm1vdXNlVXAiLCJzdHlsZSIsImN1cnNvciIsImRvY3VtZW50Iiwic3RhcnRQYW4iLCJwYWdlWCIsInBhZ2VZIiwiaGFuZGxlTW91c2VNb3ZlIiwiY2lyY2xlIiwiUGF0aDJEIiwiaXNQb2ludEluUGF0aCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFCQztBQUtBO0FBRUQsSUFBTUEsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFQyxHQUFDLEVBQUUsQ0FBTDtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFkLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUcsQ0FBZDs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFTCxLQUFDLEVBQUVJLEVBQUUsQ0FBQ0osQ0FBSCxHQUFPSyxFQUFFLENBQUNMLENBQWY7QUFBa0JDLEtBQUMsRUFBRUcsRUFBRSxDQUFDSCxDQUFILEdBQU9JLEVBQUUsQ0FBQ0o7QUFBL0IsR0FBUDtBQUNEOztBQUVELFNBQVNLLFNBQVQsQ0FBbUJGLEVBQW5CLEVBQThCQyxFQUE5QixFQUF5QztBQUN2QyxTQUFPO0FBQUVMLEtBQUMsRUFBRUksRUFBRSxDQUFDSixDQUFI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MUVDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVZEOztBQVlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxpQkFBVyxFQUFFUixlQURmO0FBRUUsaUJBQVcsRUFBRUgsUUFGZjtBQUdFLFNBQUcsRUFBRXJGLFNBSFA7QUFJRSxXQUFLLEVBQUVILFdBQVcsR0FBR1QsS0FKdkI7QUFLRSxZQUFNLEVBQUVVLFlBQVksR0FBR1YsS0FMekI7QUFNRSxXQUFLLEVBQUU7QUFDTCtGLGNBQU0sRUFBRSxXQURIO0FBRUx2QyxhQUFLLFlBQUsvQyxXQUFMLE9BRkE7QUFHTDZFLGNBQU0sWUFBSzVFLFlBQUw7QUFIRDtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWFFO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUssR0FBRyxJQUFJbUMsS0FBSyxDQUFDbkMsR0FBRCxDQUFsQjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0FoUEQ7O0dBQU1QLFU7O0tBQUFBLFU7QUFrUFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1YmJsZUNoYXJ0LjcwYWU2NDYwYTk2NTAwMmYxZDdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VDYWxsYmFjayxcclxuICB1c2VMYXlvdXRFZmZlY3QsXHJcbiAgdXNlUmVmLFxyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIENoYXJ0RGF0YSB7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG4gIHI6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0b29sVGlwPzogUmVhY3RFbGVtZW50O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHMge1xyXG4gIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhcnREYXRhTGlzdD86IENoYXJ0RGF0YVtdO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgT1JJR0lOID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmNvbnN0IFJBVElPID0gMTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCArIHAyLngsIHk6IHAxLnkgKyBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjYWxlUG9pbnQocDE6IFBvaW50LCBzY2FsZTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAvIHNjYWxlLCB5OiBwMS55IC8gc2NhbGUgfTtcclxufVxyXG5cclxuY29uc3QgWk9PTV9TRU5TSVRJVklUWSA9IDUwMDsgLy8gYmlnZ2VyIGZvciBsb3dlciB6b29tIHBlciBzY3JvbGxcclxuXHJcbmNvbnN0IEJ1YmJsZUNoYXIgPSAoe2NhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIGNoYXJ0RGF0YUxpc3R9OiBDYW52YXNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW21vdXNlUG9zLCBzZXRNb3VzZVBvc10gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdmlld3BvcnRUb3BMZWZ0LCBzZXRWaWV3cG9ydFRvcExlZnRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgaXNSZXNldFJlZiA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IGxhc3RPZmZzZXRSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcblxyXG4gIC8vIHVwZGF0ZSBsYXN0IG9mZnNldFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBvZmZzZXQ7XHJcbiAgfSwgW29mZnNldF0pO1xyXG5cclxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gY2FudmFzIGZvciBtb3VzZSBwb3NpdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlTW91c2UoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGNhbnZhc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRNb3VzZVBvcyA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xyXG4gICAgICAgIGNvbnN0IHRvcExlZnRDYW52YXNQb3MgPSB7XHJcbiAgICAgICAgICB4OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgeTogY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0VG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRNb3VzZVBvcyhkaWZmUG9pbnRzKHZpZXdwb3J0TW91c2VQb3MsIHRvcExlZnRDYW52YXNQb3MpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIHpvb21cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIHRoaXMgaXMgdHJpY2t5LiBVcGRhdGUgdGhlIHZpZXdwb3J0J3MgXCJvcmlnaW5cIiBzdWNoIHRoYXRcclxuICAgIC8vIHRoZSBtb3VzZSBkb2Vzbid0IG1vdmUgZHVyaW5nIHNjYWxlIC0gdGhlICd6b29tIHBvaW50JyBvZiB0aGUgbW91c2VcclxuICAgIC8vIGJlZm9yZSBhbmQgYWZ0ZXIgem9vbSBpcyByZWxhdGl2ZWx5IHRoZSBzYW1lIHBvc2l0aW9uIG9uIHRoZSB2aWV3cG9ydFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlV2hlZWwoZXZlbnQ6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgIGNvbnN0IHpvb20gPSAxIC0gZXZlbnQuZGVsdGFZIC8gWk9PTV9TRU5TSVRJVklUWTtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydFRvcExlZnREZWx0YSA9IHtcclxuICAgICAgICAgIHg6IChtb3VzZVBvcy54IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSksXHJcbiAgICAgICAgICB5OiAobW91c2VQb3MueSAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBuZXdWaWV3cG9ydFRvcExlZnQgPSBhZGRQb2ludHMoXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnQsXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnREZWx0YVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodmlld3BvcnRUb3BMZWZ0LngsIHZpZXdwb3J0VG9wTGVmdC55KTtcclxuICAgICAgICBjdHguc2NhbGUoem9vbSwgem9vbSk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtbmV3Vmlld3BvcnRUb3BMZWZ0LngsIC1uZXdWaWV3cG9ydFRvcExlZnQueSk7XHJcblxyXG4gICAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChuZXdWaWV3cG9ydFRvcExlZnQpO1xyXG4gICAgICAgIHNldFNjYWxlKHNjYWxlICogem9vbSk7XHJcbiAgICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gICAgcmV0dXJuICgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCk7XHJcbiAgfSwgW2N0eCwgbW91c2VQb3MueCwgbW91c2VQb3MueSwgdmlld3BvcnRUb3BMZWZ0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBzZXR1cCBjYW52YXMgYW5kIHNldCBjb250ZXh0XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY2FudmFzUmVmKSByZXR1cm47XHJcbiAgICBjb25zdCByZW5kZXJDdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBpZiAocmVuZGVyQ3R4KSByZXNldChyZW5kZXJDdHgpO1xyXG4gIH0sIFtjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoLCBjaGFydERhdGFMaXN0XSk7XHJcblxyXG4gIC8vIHBhbiB3aGVuIG9mZnNldCBvciBzY2FsZSBjaGFuZ2VzXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHggJiYgbGFzdE9mZnNldFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldERpZmYgPSBzY2FsZVBvaW50KFxyXG4gICAgICAgIGRpZmZQb2ludHMob2Zmc2V0LCBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQpLFxyXG4gICAgICAgIHNjYWxlXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUob2Zmc2V0RGlmZi54LCBvZmZzZXREaWZmLnkpO1xyXG4gICAgICBzZXRWaWV3cG9ydFRvcExlZnQoKHByZXZWYWwpID0+IGRpZmZQb2ludHMocHJldlZhbCwgb2Zmc2V0RGlmZikpO1xyXG4gICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LCBbY3R4LCBvZmZzZXQsIHNjYWxlXSk7XHJcblxyXG4gIC8vIGRyYXdcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN0eCkge1xyXG4gICAgICBjb25zdCBzdG9yZWRUcmFuc2Zvcm0gPSBjdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xyXG4gICAgICBjdHguc2V0VHJhbnNmb3JtKHN0b3JlZFRyYW5zZm9ybSk7XHJcblxyXG4gICAgICBkcmF3R3JpZCgpO1xyXG4gICAgICBkcmF3Q2lyY2xlcygpO1xyXG4gICAgICBkcmF3VGV4dCgpO1xyXG4gICAgfVxyXG4gIH0sIFtcclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgY2hhcnREYXRhTGlzdCxcclxuICAgIGN0eCxcclxuICAgIHNjYWxlLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgdmlld3BvcnRUb3BMZWZ0XHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGRyYXdHcmlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcyA9IDExMDtcclxuICAgIGNvbnN0IG5YID0gTWF0aC5mbG9vcihjYW52YXNXaWR0aCAqIDIwIC8gcykgLSAyO1xyXG4gICAgY29uc3QgblkgPSBNYXRoLmZsb29yKGNhbnZhc0hlaWdodCAqIDIwIC8gcykgLSAyO1xyXG4gICAgY29uc3QgcFggPSBjYW52YXNXaWR0aCAtIG5YICogcztcclxuICAgIGNvbnN0IHBZID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzO1xyXG5cclxuICAgIGNvbnN0IHBMID0gTWF0aC5jZWlsKHBYIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwVCA9IE1hdGguY2VpbChwWSAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFIgPSBjYW52YXNXaWR0aCAtIG5YICogcyAtIHBMO1xyXG4gICAgY29uc3QgcEIgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHMgLSBwVDtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmV5JztcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGZvciAobGV0IHggPSBwTDsgeCA8PSBjYW52YXNXaWR0aCAtIHBSOyB4ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyh4LCBwVCk7XHJcbiAgICAgIGN0eC5saW5lVG8oeCwgY2FudmFzSGVpZ2h0IC0gcEIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgeSA9IHBUOyB5IDw9IGNhbnZhc0hlaWdodCAtIHBCOyB5ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhwTCwgeSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY2FudmFzV2lkdGggLSBwUiwgeSk7XHJcbiAgICB9XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3Q2lyY2xlcyA9ICgpID0+IHtcclxuICAgIGlmKCFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcbiAgICBjaGFydERhdGFMaXN0LmZvckVhY2goKHtwb2ludDoge3gsIHl9LCByLCBmaWxsfSkgPT4ge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3VGV4dCA9ICgpID0+IHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmModmlld3BvcnRUb3BMZWZ0LngsIHZpZXdwb3J0VG9wTGVmdC55LCAyMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMDAwMFwiO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIC8vIHJlc2V0XHJcbiAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjayhcclxuICAgIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG4gICAgICBpZiAoIWN0eCAmJiBpc1Jlc2V0UmVmLmN1cnJlbnQpIHJldHVybjtcclxuICAgICAgLy8gYWRqdXN0IGZvciBkZXZpY2UgcGl4ZWwgZGVuc2l0eVxyXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gY2FudmFzV2lkdGggKiBSQVRJTztcclxuICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKiBSQVRJTztcclxuICAgICAgY3R4LnNjYWxlKFJBVElPLCBSQVRJTyk7XHJcbiAgICAgIHNldFNjYWxlKDEpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgc3RhdGUgYW5kIHJlZnNcclxuICAgICAgc2V0Q3R4KGN0eCk7XHJcbiAgICAgIHNldE9mZnNldChPUklHSU4pO1xyXG4gICAgICBzZXRNb3VzZVBvcyhPUklHSU4pO1xyXG4gICAgICBzZXRWaWV3cG9ydFRvcExlZnQoT1JJR0lOKTtcclxuICAgICAgbGFzdE9mZnNldFJlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IE9SSUdJTjtcclxuXHJcbiAgICAgIC8vIHRoaXMgdGhpbmcgaXMgc28gbXVsdGlwbGUgcmVzZXRzIGluIGEgcm93IGRvbid0IGNsZWFyIGNhbnZhc1xyXG4gICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIFtjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0XVxyXG4gICk7XHJcblxyXG4gIC8vIGZ1bmN0aW9ucyBmb3IgcGFubmluZ1xyXG4gIGNvbnN0IG1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKCFjdHgpIHJldHVybjtcclxuICAgICAgY29uc3QgbGFzdE1vdXNlUG9zID0gbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG4gICAgICBzZXRPZmZzZXQoKHByZXZPZmZzZXQpID0+IGFkZFBvaW50cyhwcmV2T2Zmc2V0LCBtb3VzZURpZmYpKTtcclxuICAgIH0sIFtjdHhdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbW91c2VVcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICB9LCBbbW91c2VNb3ZlXSk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiZ3JhYmJpbmdcIjtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmUpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICAgICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGV2ZW50LnBhZ2VYLCB5OiBldmVudC5wYWdlWSB9O1xyXG4gICAgfSxcclxuICAgIFttb3VzZU1vdmUsIG1vdXNlVXBdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWN0eCB8fCAhY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjaGFydERhdGFMaXN0LmZvckVhY2goKHtwb2ludDoge3gsIHl9LCByfSkgPT4ge1xyXG4gICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XHJcbiAgICAgIGNpcmNsZS5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBpZihjdHguaXNQb2ludEluUGF0aChjaXJjbGUsIGUubmF0aXZlRXZlbnQub2Zmc2V0WCwgZS5uYXRpdmVFdmVudC5vZmZzZXRZKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Y2FudmFzXHJcbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cclxuICAgICAgICBvbk1vdXNlRG93bj17c3RhcnRQYW59XHJcbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XHJcbiAgICAgICAgd2lkdGg9e2NhbnZhc1dpZHRoICogUkFUSU99XHJcbiAgICAgICAgaGVpZ2h0PXtjYW52YXNIZWlnaHQgKiBSQVRJT31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY3Vyc29yOiBcImNyb3NzaGFpclwiLFxyXG4gICAgICAgICAgd2lkdGg6IGAke2NhbnZhc1dpZHRofXB4YCxcclxuICAgICAgICAgIGhlaWdodDogYCR7Y2FudmFzSGVpZ2h0fXB4YFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3R4ICYmIHJlc2V0KGN0eCl9PlJlc2V0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1YmJsZUNoYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==