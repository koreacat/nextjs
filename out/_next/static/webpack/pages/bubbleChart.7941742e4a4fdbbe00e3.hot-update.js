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
        if (scale * zoom < 0.3) return;
        if (scale * zoom > 2) return;
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
        console.log(scale * zoom);
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
      lineNumber: 273,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      style: {
        width: '200px',
        backgroundColor: '#000',
        color: '#fff'
      },
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 272,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJPUklHSU4iLCJPYmplY3QiLCJmcmVlemUiLCJ4IiwieSIsIlJBVElPIiwiZGlmZlBvaW50cyIsInAxIiwicDIiLCJhZGRQb2ludHMiLCJzY2FsZVBvaW50Iiwic2NhbGUiLCJaT09NX1NFTlNJVElWSVRZIiwiQnViYmxlQ2hhciIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2hhcnREYXRhTGlzdCIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiY3R4Iiwic2V0Q3R4Iiwic2V0U2NhbGUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJtb3VzZVBvcyIsInNldE1vdXNlUG9zIiwidmlld3BvcnRUb3BMZWZ0Iiwic2V0Vmlld3BvcnRUb3BMZWZ0IiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJjb25zb2xlIiwibG9nIiwidXNlTGF5b3V0RWZmZWN0IiwicmVuZGVyQ3R4IiwiZ2V0Q29udGV4dCIsInJlc2V0Iiwib2Zmc2V0RGlmZiIsInByZXZWYWwiLCJzdG9yZWRUcmFuc2Zvcm0iLCJnZXRUcmFuc2Zvcm0iLCJjYW52YXMiLCJ3aWR0aCIsInNldFRyYW5zZm9ybSIsImRyYXdHcmlkIiwiZHJhd0NpcmNsZXMiLCJkcmF3VGV4dCIsIkdSSURfU0NBTEUiLCJzIiwiblgiLCJNYXRoIiwiZmxvb3IiLCJuWSIsInBYIiwicFkiLCJwTCIsImNlaWwiLCJwVCIsInBSIiwicEIiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImZvckVhY2giLCJwb2ludCIsInIiLCJmaWxsIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJ1c2VDYWxsYmFjayIsImhlaWdodCIsIm1vdXNlTW92ZSIsImUiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwibW91c2VVcCIsInN0eWxlIiwiY3Vyc29yIiwiZG9jdW1lbnQiLCJzdGFydFBhbiIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVNb3VzZU1vdmUiLCJjaXJjbGUiLCJQYXRoMkQiLCJpc1BvaW50SW5QYXRoIiwibmF0aXZlRXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFCQztBQUtBO0FBRUQsSUFBTUEsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFQyxHQUFDLEVBQUUsQ0FBTDtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFkLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUcsQ0FBZDs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFTCxLQUFDLEVBQUVJLEVBQUUsQ0FBQ0osQ0FBSCxHQUFPSyxFQUFFLENBQUNMLENBQWY7QUFBa0JDLEtBQUMsRUFBRUcsRUFBRSxDQUFDSCxDQUFILEdBQU9JLEVBQUUsQ0FBQ0o7QUFBL0IsR0FBUDtBQUNEOztBQUVELFNBQVNLLFNBQVQsQ0FBbUJGLEVBQW5CLEVBQThCQyxFQUE5QixFQUF5QztBQUN2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TyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBVkQ7O0FBWUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLGlCQUFXLEVBQUV1RCxlQURmO0FBRUUsaUJBQVcsRUFBRUgsUUFGZjtBQUdFLFNBQUcsRUFBRXhGLFNBSFA7QUFJRSxXQUFLLEVBQUVILFdBQVcsR0FBR1QsS0FKdkI7QUFLRSxZQUFNLEVBQUVVLFlBQVksR0FBR1YsS0FMekI7QUFNRSxXQUFLLEVBQUU7QUFDTGtHLGNBQU0sRUFBRSxXQURIO0FBRUx4QyxhQUFLLFlBQUtqRCxXQUFMLE9BRkE7QUFHTGdGLGNBQU0sWUFBSy9FLFlBQUw7QUFIRDtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWFFO0FBQVEsV0FBSyxFQUFFO0FBQUNnRCxhQUFLLEVBQUMsT0FBUDtBQUFnQm9ELHVCQUFlLEVBQUMsTUFBaEM7QUFBd0NDLGFBQUssRUFBQztBQUE5QyxPQUFmO0FBQXNFLGFBQU8sRUFBRTtBQUFBLGVBQU1oRyxHQUFHLElBQUlxQyxLQUFLLENBQUNyQyxHQUFELENBQWxCO0FBQUEsT0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQWxQRDs7R0FBTVAsVTs7S0FBQUEsVTtBQW9QU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnViYmxlQ2hhcnQuNzk0MTc0MmU0YTRmZGJiZTAwZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZUNhbGxiYWNrLFxyXG4gIHVzZUxheW91dEVmZmVjdCxcclxuICB1c2VSZWYsXHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3RFbGVtZW50XHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnREYXRhIHtcclxuICBwb2ludDogUG9pbnQ7XHJcbiAgcjogbnVtYmVyO1xyXG4gIGZpbGw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRvb2xUaXA/OiBSZWFjdEVsZW1lbnQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYW52YXNQcm9wcyB7XHJcbiAgY2FudmFzV2lkdGg6IG51bWJlcjtcclxuICBjYW52YXNIZWlnaHQ6IG51bWJlcjtcclxuICBjaGFydERhdGFMaXN0PzogQ2hhcnREYXRhW107XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBPUklHSU4gPSBPYmplY3QuZnJlZXplKHsgeDogMCwgeTogMCB9KTtcclxuY29uc3QgUkFUSU8gPSAxO1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54ICsgcDIueCwgeTogcDEueSArIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2NhbGVQb2ludChwMTogUG9pbnQsIHNjYWxlOiBudW1iZXIpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC8gc2NhbGUsIHk6IHAxLnkgLyBzY2FsZSB9O1xyXG59XHJcblxyXG5jb25zdCBaT09NX1NFTlNJVElWSVRZID0gNTAwOyAvLyBiaWdnZXIgZm9yIGxvd2VyIHpvb20gcGVyIHNjcm9sbFxyXG5cclxuY29uc3QgQnViYmxlQ2hhciA9ICh7Y2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY2hhcnREYXRhTGlzdH06IENhbnZhc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGU8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbbW91c2VQb3MsIHNldE1vdXNlUG9zXSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFt2aWV3cG9ydFRvcExlZnQsIHNldFZpZXdwb3J0VG9wTGVmdF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBpc1Jlc2V0UmVmID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgbGFzdE9mZnNldFJlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuXHJcbiAgLy8gdXBkYXRlIGxhc3Qgb2Zmc2V0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IG9mZnNldDtcclxuICB9LCBbb2Zmc2V0XSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIG1vdXNlIHBvc2l0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVNb3VzZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zID0geyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH07XHJcbiAgICAgICAgY29uc3QgdG9wTGVmdENhbnZhc1BvcyA9IHtcclxuICAgICAgICAgIHg6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldExlZnQsXHJcbiAgICAgICAgICB5OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRUb3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldE1vdXNlUG9zKGRpZmZQb2ludHModmlld3BvcnRNb3VzZVBvcywgdG9wTGVmdENhbnZhc1BvcykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3Igem9vbVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gdGhpcyBpcyB0cmlja3kuIFVwZGF0ZSB0aGUgdmlld3BvcnQncyBcIm9yaWdpblwiIHN1Y2ggdGhhdFxyXG4gICAgLy8gdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZSBkdXJpbmcgc2NhbGUgLSB0aGUgJ3pvb20gcG9pbnQnIG9mIHRoZSBtb3VzZVxyXG4gICAgLy8gYmVmb3JlIGFuZCBhZnRlciB6b29tIGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcG9zaXRpb24gb24gdGhlIHZpZXdwb3J0XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVXaGVlbChldmVudDogV2hlZWxFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgY29uc3Qgem9vbSA9IDEgLSBldmVudC5kZWx0YVkgLyBaT09NX1NFTlNJVElWSVRZO1xyXG5cclxuICAgICAgICBpZihzY2FsZSAqIHpvb20gPCAwLjMpIHJldHVybjtcclxuICAgICAgICBpZihzY2FsZSAqIHpvb20gPiAyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0VG9wTGVmdERlbHRhID0ge1xyXG4gICAgICAgICAgeDogKG1vdXNlUG9zLnggLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKSxcclxuICAgICAgICAgIHk6IChtb3VzZVBvcy55IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld1ZpZXdwb3J0VG9wTGVmdCA9IGFkZFBvaW50cyhcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdCxcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdERlbHRhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh2aWV3cG9ydFRvcExlZnQueCwgdmlld3BvcnRUb3BMZWZ0LnkpO1xyXG4gICAgICAgIGN0eC5zY2FsZSh6b29tLCB6b29tKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKC1uZXdWaWV3cG9ydFRvcExlZnQueCwgLW5ld1ZpZXdwb3J0VG9wTGVmdC55KTtcclxuXHJcbiAgICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KG5ld1ZpZXdwb3J0VG9wTGVmdCk7XHJcbiAgICAgICAgc2V0U2NhbGUoc2NhbGUgKiB6b29tKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzY2FsZSAqIHpvb20pO1xyXG4gICAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gIH0sIFtjdHgsIG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIHZpZXdwb3J0VG9wTGVmdCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gc2V0dXAgY2FudmFzIGFuZCBzZXQgY29udGV4dFxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbnZhc1JlZikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVuZGVyQ3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKHJlbmRlckN0eCkgcmVzZXQocmVuZGVyQ3R4KTtcclxuICB9LCBbY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgY2hhcnREYXRhTGlzdF0pO1xyXG5cclxuICAvLyBwYW4gd2hlbiBvZmZzZXQgb3Igc2NhbGUgY2hhbmdlc1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4ICYmIGxhc3RPZmZzZXRSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gc2NhbGVQb2ludChcclxuICAgICAgICBkaWZmUG9pbnRzKG9mZnNldCwgbGFzdE9mZnNldFJlZi5jdXJyZW50KSxcclxuICAgICAgICBzY2FsZVxyXG4gICAgICApO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKG9mZnNldERpZmYueCwgb2Zmc2V0RGlmZi55KTtcclxuICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KChwcmV2VmFsKSA9PiBkaWZmUG9pbnRzKHByZXZWYWwsIG9mZnNldERpZmYpKTtcclxuICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSwgW2N0eCwgb2Zmc2V0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBkcmF3XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHgpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkVHJhbnNmb3JtID0gY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcclxuICAgICAgY3R4LnNldFRyYW5zZm9ybShzdG9yZWRUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgZHJhd0dyaWQoKTtcclxuICAgICAgZHJhd0NpcmNsZXMoKTtcclxuICAgICAgZHJhd1RleHQoKTtcclxuICAgIH1cclxuICB9LCBbXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGNoYXJ0RGF0YUxpc3QsXHJcbiAgICBjdHgsXHJcbiAgICBzY2FsZSxcclxuICAgIG9mZnNldCxcclxuICAgIHZpZXdwb3J0VG9wTGVmdFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBkcmF3R3JpZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IEdSSURfU0NBTEUgPSAyMDtcclxuICAgIGNvbnN0IHMgPSAxMTA7XHJcbiAgICBjb25zdCBuWCA9IE1hdGguZmxvb3IoY2FudmFzV2lkdGggKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgblkgPSBNYXRoLmZsb29yKGNhbnZhc0hlaWdodCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBwWCA9IGNhbnZhc1dpZHRoIC0gblggKiBzO1xyXG4gICAgY29uc3QgcFkgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHM7XHJcblxyXG4gICAgY29uc3QgcEwgPSBNYXRoLmNlaWwocFggLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBUID0gTWF0aC5jZWlsKHBZIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwUiA9IGNhbnZhc1dpZHRoIC0gblggKiBzIC0gcEw7XHJcbiAgICBjb25zdCBwQiA9IGNhbnZhc0hlaWdodCAtIG5ZICogcyAtIHBUO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyZXknO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgZm9yIChsZXQgeCA9IHBMOyB4IDw9IGNhbnZhc1dpZHRoIC0gcFI7IHggKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHgsIHBUKTtcclxuICAgICAgY3R4LmxpbmVUbyh4LCBjYW52YXNIZWlnaHQgLSBwQik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB5ID0gcFQ7IHkgPD0gY2FudmFzSGVpZ2h0IC0gcEI7IHkgKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHBMLCB5KTtcclxuICAgICAgY3R4LmxpbmVUbyhjYW52YXNXaWR0aCAtIHBSLCB5KTtcclxuICAgIH1cclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdDaXJjbGVzID0gKCkgPT4ge1xyXG4gICAgaWYoIWNoYXJ0RGF0YUxpc3QpIHJldHVybjtcclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoe3BvaW50OiB7eCwgeX0sIHIsIGZpbGx9KSA9PiB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdUZXh0ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXRcclxuICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XHJcbiAgICAgIGlmICghY3R4ICYmIGlzUmVzZXRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgICAvLyBhZGp1c3QgZm9yIGRldmljZSBwaXhlbCBkZW5zaXR5XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCAqIFJBVElPO1xyXG4gICAgICBjdHguY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCAqIFJBVElPO1xyXG4gICAgICBjdHguc2NhbGUoUkFUSU8sIFJBVElPKTtcclxuICAgICAgc2V0U2NhbGUoMSk7XHJcblxyXG4gICAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgICBzZXRDdHgoY3R4KTtcclxuICAgICAgc2V0T2Zmc2V0KE9SSUdJTik7XHJcbiAgICAgIHNldE1vdXNlUG9zKE9SSUdJTik7XHJcbiAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChPUklHSU4pO1xyXG4gICAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBPUklHSU47XHJcbiAgICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG5cclxuICAgICAgLy8gdGhpcyB0aGluZyBpcyBzbyBtdWx0aXBsZSByZXNldHMgaW4gYSByb3cgZG9uJ3QgY2xlYXIgY2FudmFzXHJcbiAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgW2NhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHRdXHJcbiAgKTtcclxuXHJcbiAgLy8gZnVuY3Rpb25zIGZvciBwYW5uaW5nXHJcbiAgY29uc3QgbW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoIWN0eCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcbiAgICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gICAgfSwgW2N0eF1cclxuICApO1xyXG5cclxuICBjb25zdCBtb3VzZVVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gIH0sIFttb3VzZU1vdmVdKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZIH07XHJcbiAgICB9LFxyXG4gICAgW21vdXNlTW92ZSwgbW91c2VVcF1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGlmICghY3R4IHx8ICFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcbiAgICBcclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoe3BvaW50OiB7eCwgeX0sIHJ9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBQYXRoMkQoKTtcclxuICAgICAgY2lyY2xlLmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGlmKGN0eC5pc1BvaW50SW5QYXRoKGNpcmNsZSwgZS5uYXRpdmVFdmVudC5vZmZzZXRYLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFkpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxjYW52YXNcclxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXtzdGFydFBhbn1cclxuICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICB3aWR0aD17Y2FudmFzV2lkdGggKiBSQVRJT31cclxuICAgICAgICBoZWlnaHQ9e2NhbnZhc0hlaWdodCAqIFJBVElPfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBjdXJzb3I6IFwiY3Jvc3NoYWlyXCIsXHJcbiAgICAgICAgICB3aWR0aDogYCR7Y2FudmFzV2lkdGh9cHhgLFxyXG4gICAgICAgICAgaGVpZ2h0OiBgJHtjYW52YXNIZWlnaHR9cHhgXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBzdHlsZT17e3dpZHRoOicyMDBweCcsIGJhY2tncm91bmRDb2xvcjonIzAwMCcsIGNvbG9yOicjZmZmJ319IG9uQ2xpY2s9eygpID0+IGN0eCAmJiByZXNldChjdHgpfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWJibGVDaGFyOyJdLCJzb3VyY2VSb290IjoiIn0=