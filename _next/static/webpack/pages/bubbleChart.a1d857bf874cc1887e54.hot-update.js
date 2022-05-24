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
        backgroundColor: '#000'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJPUklHSU4iLCJPYmplY3QiLCJmcmVlemUiLCJ4IiwieSIsIlJBVElPIiwiZGlmZlBvaW50cyIsInAxIiwicDIiLCJhZGRQb2ludHMiLCJzY2FsZVBvaW50Iiwic2NhbGUiLCJaT09NX1NFTlNJVElWSVRZIiwiQnViYmxlQ2hhciIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2hhcnREYXRhTGlzdCIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiY3R4Iiwic2V0Q3R4Iiwic2V0U2NhbGUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJtb3VzZVBvcyIsInNldE1vdXNlUG9zIiwidmlld3BvcnRUb3BMZWZ0Iiwic2V0Vmlld3BvcnRUb3BMZWZ0IiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJjb25zb2xlIiwibG9nIiwidXNlTGF5b3V0RWZmZWN0IiwicmVuZGVyQ3R4IiwiZ2V0Q29udGV4dCIsInJlc2V0Iiwib2Zmc2V0RGlmZiIsInByZXZWYWwiLCJzdG9yZWRUcmFuc2Zvcm0iLCJnZXRUcmFuc2Zvcm0iLCJjYW52YXMiLCJ3aWR0aCIsInNldFRyYW5zZm9ybSIsImRyYXdHcmlkIiwiZHJhd0NpcmNsZXMiLCJkcmF3VGV4dCIsIkdSSURfU0NBTEUiLCJzIiwiblgiLCJNYXRoIiwiZmxvb3IiLCJuWSIsInBYIiwicFkiLCJwTCIsImNlaWwiLCJwVCIsInBSIiwicEIiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImZvckVhY2giLCJwb2ludCIsInIiLCJmaWxsIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJ1c2VDYWxsYmFjayIsImhlaWdodCIsIm1vdXNlTW92ZSIsImUiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwibW91c2VVcCIsInN0eWxlIiwiY3Vyc29yIiwiZG9jdW1lbnQiLCJzdGFydFBhbiIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVNb3VzZU1vdmUiLCJjaXJjbGUiLCJQYXRoMkQiLCJpc1BvaW50SW5QYXRoIiwibmF0aXZlRXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkM7QUFLQTtBQUVELElBQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRUMsR0FBQyxFQUFFLENBQUw7QUFBUUMsR0FBQyxFQUFFO0FBQVgsQ0FBZCxDQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQWQ7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsRUFBcEIsRUFBK0JDLEVBQS9CLEVBQTBDO0FBQ3hDLFNBQU87QUFBRUwsS0FBQyxFQUFFSSxFQUFFLENBQUNKLENBQUgsR0FBT0ssRUFBRSxDQUFDTCxDQUFmO0FBQWtCQyxLQUFDLEVBQUVHLEVBQUUsQ0FBQ0gsQ0FBSCxHQUFPSSxFQUFFLENBQUNKO0FBQS9CLEdBQVA7QUFDRDs7QUFFRCxTQUFTSyxTQUFULENBQW1CRixFQUFuQixFQUE4QkMsRUFBOUIsRUFBeUM7QUFDdkMsU0FBTztB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R0FBUixDQUFZLElBQVo7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVZEOztBQVlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxpQkFBVyxFQUFFdUQsZUFEZjtBQUVFLGlCQUFXLEVBQUVILFFBRmY7QUFHRSxTQUFHLEVBQUV4RixTQUhQO0FBSUUsV0FBSyxFQUFFSCxXQUFXLEdBQUdULEtBSnZCO0FBS0UsWUFBTSxFQUFFVSxZQUFZLEdBQUdWLEtBTHpCO0FBTUUsV0FBSyxFQUFFO0FBQ0xrRyxjQUFNLEVBQUUsV0FESDtBQUVMeEMsYUFBSyxZQUFLakQsV0FBTCxPQUZBO0FBR0xnRixjQUFNLFlBQUsvRSxZQUFMO0FBSEQ7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFhRTtBQUFRLFdBQUssRUFBRTtBQUFDb0csdUJBQWUsRUFBQztBQUFqQixPQUFmO0FBQXlDLGFBQU8sRUFBRTtBQUFBLGVBQU0vRixHQUFHLElBQUlxQyxLQUFLLENBQUNyQyxHQUFELENBQWxCO0FBQUEsT0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQWxQRDs7R0FBTVAsVTs7S0FBQUEsVTtBQW9QU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnViYmxlQ2hhcnQuYTFkODU3YmY4NzRjYzE4ODdlNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZUNhbGxiYWNrLFxyXG4gIHVzZUxheW91dEVmZmVjdCxcclxuICB1c2VSZWYsXHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3RFbGVtZW50XHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnREYXRhIHtcclxuICBwb2ludDogUG9pbnQ7XHJcbiAgcjogbnVtYmVyO1xyXG4gIGZpbGw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRvb2xUaXA/OiBSZWFjdEVsZW1lbnQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYW52YXNQcm9wcyB7XHJcbiAgY2FudmFzV2lkdGg6IG51bWJlcjtcclxuICBjYW52YXNIZWlnaHQ6IG51bWJlcjtcclxuICBjaGFydERhdGFMaXN0PzogQ2hhcnREYXRhW107XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBPUklHSU4gPSBPYmplY3QuZnJlZXplKHsgeDogMCwgeTogMCB9KTtcclxuY29uc3QgUkFUSU8gPSAxO1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54ICsgcDIueCwgeTogcDEueSArIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2NhbGVQb2ludChwMTogUG9pbnQsIHNjYWxlOiBudW1iZXIpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC8gc2NhbGUsIHk6IHAxLnkgLyBzY2FsZSB9O1xyXG59XHJcblxyXG5jb25zdCBaT09NX1NFTlNJVElWSVRZID0gNTAwOyAvLyBiaWdnZXIgZm9yIGxvd2VyIHpvb20gcGVyIHNjcm9sbFxyXG5cclxuY29uc3QgQnViYmxlQ2hhciA9ICh7Y2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY2hhcnREYXRhTGlzdH06IENhbnZhc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGU8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbbW91c2VQb3MsIHNldE1vdXNlUG9zXSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFt2aWV3cG9ydFRvcExlZnQsIHNldFZpZXdwb3J0VG9wTGVmdF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBpc1Jlc2V0UmVmID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgbGFzdE9mZnNldFJlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuXHJcbiAgLy8gdXBkYXRlIGxhc3Qgb2Zmc2V0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IG9mZnNldDtcclxuICB9LCBbb2Zmc2V0XSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIG1vdXNlIHBvc2l0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVNb3VzZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zID0geyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH07XHJcbiAgICAgICAgY29uc3QgdG9wTGVmdENhbnZhc1BvcyA9IHtcclxuICAgICAgICAgIHg6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldExlZnQsXHJcbiAgICAgICAgICB5OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRUb3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldE1vdXNlUG9zKGRpZmZQb2ludHModmlld3BvcnRNb3VzZVBvcywgdG9wTGVmdENhbnZhc1BvcykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3Igem9vbVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gdGhpcyBpcyB0cmlja3kuIFVwZGF0ZSB0aGUgdmlld3BvcnQncyBcIm9yaWdpblwiIHN1Y2ggdGhhdFxyXG4gICAgLy8gdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZSBkdXJpbmcgc2NhbGUgLSB0aGUgJ3pvb20gcG9pbnQnIG9mIHRoZSBtb3VzZVxyXG4gICAgLy8gYmVmb3JlIGFuZCBhZnRlciB6b29tIGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcG9zaXRpb24gb24gdGhlIHZpZXdwb3J0XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVXaGVlbChldmVudDogV2hlZWxFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgY29uc3Qgem9vbSA9IDEgLSBldmVudC5kZWx0YVkgLyBaT09NX1NFTlNJVElWSVRZO1xyXG5cclxuICAgICAgICBpZihzY2FsZSAqIHpvb20gPCAwLjMpIHJldHVybjtcclxuICAgICAgICBpZihzY2FsZSAqIHpvb20gPiAyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0VG9wTGVmdERlbHRhID0ge1xyXG4gICAgICAgICAgeDogKG1vdXNlUG9zLnggLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKSxcclxuICAgICAgICAgIHk6IChtb3VzZVBvcy55IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld1ZpZXdwb3J0VG9wTGVmdCA9IGFkZFBvaW50cyhcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdCxcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdERlbHRhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh2aWV3cG9ydFRvcExlZnQueCwgdmlld3BvcnRUb3BMZWZ0LnkpO1xyXG4gICAgICAgIGN0eC5zY2FsZSh6b29tLCB6b29tKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKC1uZXdWaWV3cG9ydFRvcExlZnQueCwgLW5ld1ZpZXdwb3J0VG9wTGVmdC55KTtcclxuXHJcbiAgICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KG5ld1ZpZXdwb3J0VG9wTGVmdCk7XHJcbiAgICAgICAgc2V0U2NhbGUoc2NhbGUgKiB6b29tKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzY2FsZSAqIHpvb20pO1xyXG4gICAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gIH0sIFtjdHgsIG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIHZpZXdwb3J0VG9wTGVmdCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gc2V0dXAgY2FudmFzIGFuZCBzZXQgY29udGV4dFxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbnZhc1JlZikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVuZGVyQ3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKHJlbmRlckN0eCkgcmVzZXQocmVuZGVyQ3R4KTtcclxuICB9LCBbY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgY2hhcnREYXRhTGlzdF0pO1xyXG5cclxuICAvLyBwYW4gd2hlbiBvZmZzZXQgb3Igc2NhbGUgY2hhbmdlc1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4ICYmIGxhc3RPZmZzZXRSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gc2NhbGVQb2ludChcclxuICAgICAgICBkaWZmUG9pbnRzKG9mZnNldCwgbGFzdE9mZnNldFJlZi5jdXJyZW50KSxcclxuICAgICAgICBzY2FsZVxyXG4gICAgICApO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKG9mZnNldERpZmYueCwgb2Zmc2V0RGlmZi55KTtcclxuICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KChwcmV2VmFsKSA9PiBkaWZmUG9pbnRzKHByZXZWYWwsIG9mZnNldERpZmYpKTtcclxuICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSwgW2N0eCwgb2Zmc2V0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBkcmF3XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHgpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkVHJhbnNmb3JtID0gY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcclxuICAgICAgY3R4LnNldFRyYW5zZm9ybShzdG9yZWRUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgZHJhd0dyaWQoKTtcclxuICAgICAgZHJhd0NpcmNsZXMoKTtcclxuICAgICAgZHJhd1RleHQoKTtcclxuICAgIH1cclxuICB9LCBbXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGNoYXJ0RGF0YUxpc3QsXHJcbiAgICBjdHgsXHJcbiAgICBzY2FsZSxcclxuICAgIG9mZnNldCxcclxuICAgIHZpZXdwb3J0VG9wTGVmdFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBkcmF3R3JpZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IEdSSURfU0NBTEUgPSAyMDtcclxuICAgIGNvbnN0IHMgPSAxMTA7XHJcbiAgICBjb25zdCBuWCA9IE1hdGguZmxvb3IoY2FudmFzV2lkdGggKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgblkgPSBNYXRoLmZsb29yKGNhbnZhc0hlaWdodCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBwWCA9IGNhbnZhc1dpZHRoIC0gblggKiBzO1xyXG4gICAgY29uc3QgcFkgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHM7XHJcblxyXG4gICAgY29uc3QgcEwgPSBNYXRoLmNlaWwocFggLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBUID0gTWF0aC5jZWlsKHBZIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwUiA9IGNhbnZhc1dpZHRoIC0gblggKiBzIC0gcEw7XHJcbiAgICBjb25zdCBwQiA9IGNhbnZhc0hlaWdodCAtIG5ZICogcyAtIHBUO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyZXknO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgZm9yIChsZXQgeCA9IHBMOyB4IDw9IGNhbnZhc1dpZHRoIC0gcFI7IHggKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHgsIHBUKTtcclxuICAgICAgY3R4LmxpbmVUbyh4LCBjYW52YXNIZWlnaHQgLSBwQik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB5ID0gcFQ7IHkgPD0gY2FudmFzSGVpZ2h0IC0gcEI7IHkgKz0gcykge1xyXG4gICAgICBjdHgubW92ZVRvKHBMLCB5KTtcclxuICAgICAgY3R4LmxpbmVUbyhjYW52YXNXaWR0aCAtIHBSLCB5KTtcclxuICAgIH1cclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdDaXJjbGVzID0gKCkgPT4ge1xyXG4gICAgaWYoIWNoYXJ0RGF0YUxpc3QpIHJldHVybjtcclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoe3BvaW50OiB7eCwgeX0sIHIsIGZpbGx9KSA9PiB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRyYXdUZXh0ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXRcclxuICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XHJcbiAgICAgIGlmICghY3R4ICYmIGlzUmVzZXRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgICAvLyBhZGp1c3QgZm9yIGRldmljZSBwaXhlbCBkZW5zaXR5XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCAqIFJBVElPO1xyXG4gICAgICBjdHguY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCAqIFJBVElPO1xyXG4gICAgICBjdHguc2NhbGUoUkFUSU8sIFJBVElPKTtcclxuICAgICAgc2V0U2NhbGUoMSk7XHJcblxyXG4gICAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgICBzZXRDdHgoY3R4KTtcclxuICAgICAgc2V0T2Zmc2V0KE9SSUdJTik7XHJcbiAgICAgIHNldE1vdXNlUG9zKE9SSUdJTik7XHJcbiAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChPUklHSU4pO1xyXG4gICAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBPUklHSU47XHJcbiAgICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG5cclxuICAgICAgLy8gdGhpcyB0aGluZyBpcyBzbyBtdWx0aXBsZSByZXNldHMgaW4gYSByb3cgZG9uJ3QgY2xlYXIgY2FudmFzXHJcbiAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgW2NhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHRdXHJcbiAgKTtcclxuXHJcbiAgLy8gZnVuY3Rpb25zIGZvciBwYW5uaW5nXHJcbiAgY29uc3QgbW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoIWN0eCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcbiAgICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gICAgfSwgW2N0eF1cclxuICApO1xyXG5cclxuICBjb25zdCBtb3VzZVVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gIH0sIFttb3VzZU1vdmVdKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZIH07XHJcbiAgICB9LFxyXG4gICAgW21vdXNlTW92ZSwgbW91c2VVcF1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGlmICghY3R4IHx8ICFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcbiAgICBcclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoe3BvaW50OiB7eCwgeX0sIHJ9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBQYXRoMkQoKTtcclxuICAgICAgY2lyY2xlLmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGlmKGN0eC5pc1BvaW50SW5QYXRoKGNpcmNsZSwgZS5uYXRpdmVFdmVudC5vZmZzZXRYLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFkpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxjYW52YXNcclxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXtzdGFydFBhbn1cclxuICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICB3aWR0aD17Y2FudmFzV2lkdGggKiBSQVRJT31cclxuICAgICAgICBoZWlnaHQ9e2NhbnZhc0hlaWdodCAqIFJBVElPfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBjdXJzb3I6IFwiY3Jvc3NoYWlyXCIsXHJcbiAgICAgICAgICB3aWR0aDogYCR7Y2FudmFzV2lkdGh9cHhgLFxyXG4gICAgICAgICAgaGVpZ2h0OiBgJHtjYW52YXNIZWlnaHR9cHhgXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzAwMCd9fSBvbkNsaWNrPXsoKSA9PiBjdHggJiYgcmVzZXQoY3R4KX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlQ2hhcjsiXSwic291cmNlUm9vdCI6IiJ9