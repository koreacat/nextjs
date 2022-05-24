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
      lineNumber: 272,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 271,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJPUklHSU4iLCJPYmplY3QiLCJmcmVlemUiLCJ4IiwieSIsIlJBVElPIiwiZGlmZlBvaW50cyIsInAxIiwicDIiLCJhZGRQb2ludHMiLCJzY2FsZVBvaW50Iiwic2NhbGUiLCJaT09NX1NFTlNJVElWSVRZIiwiQnViYmxlQ2hhciIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2hhcnREYXRhTGlzdCIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiY3R4Iiwic2V0Q3R4Iiwic2V0U2NhbGUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJtb3VzZVBvcyIsInNldE1vdXNlUG9zIiwidmlld3BvcnRUb3BMZWZ0Iiwic2V0Vmlld3BvcnRUb3BMZWZ0IiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJvZmZzZXREaWZmIiwicHJldlZhbCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsIndpZHRoIiwic2V0VHJhbnNmb3JtIiwiZHJhd0dyaWQiLCJkcmF3Q2lyY2xlcyIsImRyYXdUZXh0IiwiR1JJRF9TQ0FMRSIsInMiLCJuWCIsIk1hdGgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZm9yRWFjaCIsInBvaW50IiwiciIsImZpbGwiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsInVzZUNhbGxiYWNrIiwiaGVpZ2h0IiwibW91c2VNb3ZlIiwiZSIsImxhc3RNb3VzZVBvcyIsImN1cnJlbnRNb3VzZVBvcyIsIm1vdXNlRGlmZiIsInByZXZPZmZzZXQiLCJtb3VzZVVwIiwic3R5bGUiLCJjdXJzb3IiLCJkb2N1bWVudCIsInN0YXJ0UGFuIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZU1vdXNlTW92ZSIsImNpcmNsZSIsIlBhdGgyRCIsImlzUG9pbnRJblBhdGgiLCJuYXRpdmVFdmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkM7QUFLQTtBQUVELElBQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRUMsR0FBQyxFQUFFLENBQUw7QUFBUUMsR0FBQyxFQUFFO0FBQVgsQ0FBZCxDQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQWQ7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsRUFBcEIsRUFBK0JDLEVBQS9CLEVBQTBDO0FBQ3hDLFNBQU87QUFBRUwsS0FBQyxFQUFFSSxFQUFFLENBQUNKLENBQUgsR0FBT0ssRUFBRSxDQUFDTCxDQUFmO0FBQWtCQyxLQUFDLEVBQUVHLEVBQUUsQ0FBQ0gsQ0FBSCxHQUFPSSxFQUFFLENBQUNKO0FBQS9CLEdBQVA7QUFDRDs7QUFFRCxTQUFTSyxTQUFULENBQW1CRixFQUFuQixFQUE4QkMsRUFBOUIsRUFBeUM7QUFDdkMsU0FBTztBQUFFTCxLQUFDLEVBQUVJLEVB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QUFDLENBQUNnQixXQUFGLENBQWNFLE9BQS9ELENBQUgsRUFBNEU7QUFDMUVDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVZEOztBQVlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxpQkFBVyxFQUFFUixlQURmO0FBRUUsaUJBQVcsRUFBRUgsUUFGZjtBQUdFLFNBQUcsRUFBRXRGLFNBSFA7QUFJRSxXQUFLLEVBQUVILFdBQVcsR0FBR1QsS0FKdkI7QUFLRSxZQUFNLEVBQUVVLFlBQVksR0FBR1YsS0FMekI7QUFNRSxXQUFLLEVBQUU7QUFDTGdHLGNBQU0sRUFBRSxXQURIO0FBRUx4QyxhQUFLLFlBQUsvQyxXQUFMLE9BRkE7QUFHTDhFLGNBQU0sWUFBSzdFLFlBQUw7QUFIRDtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWFFO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUssR0FBRyxJQUFJbUMsS0FBSyxDQUFDbkMsR0FBRCxDQUFsQjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0FqUEQ7O0dBQU1QLFU7O0tBQUFBLFU7QUFtUFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1YmJsZUNoYXJ0LjczYmY1ZmU5ZTJhNzBmNWVkN2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VDYWxsYmFjayxcclxuICB1c2VMYXlvdXRFZmZlY3QsXHJcbiAgdXNlUmVmLFxyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIENoYXJ0RGF0YSB7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG4gIHI6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0b29sVGlwPzogUmVhY3RFbGVtZW50O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHMge1xyXG4gIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhcnREYXRhTGlzdD86IENoYXJ0RGF0YVtdO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgT1JJR0lOID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmNvbnN0IFJBVElPID0gMTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCArIHAyLngsIHk6IHAxLnkgKyBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjYWxlUG9pbnQocDE6IFBvaW50LCBzY2FsZTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAvIHNjYWxlLCB5OiBwMS55IC8gc2NhbGUgfTtcclxufVxyXG5cclxuY29uc3QgWk9PTV9TRU5TSVRJVklUWSA9IDUwMDsgLy8gYmlnZ2VyIGZvciBsb3dlciB6b29tIHBlciBzY3JvbGxcclxuXHJcbmNvbnN0IEJ1YmJsZUNoYXIgPSAoe2NhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIGNoYXJ0RGF0YUxpc3R9OiBDYW52YXNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgW21vdXNlUG9zLCBzZXRNb3VzZVBvc10gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdmlld3BvcnRUb3BMZWZ0LCBzZXRWaWV3cG9ydFRvcExlZnRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgaXNSZXNldFJlZiA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IGxhc3RPZmZzZXRSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcblxyXG4gIC8vIHVwZGF0ZSBsYXN0IG9mZnNldFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBvZmZzZXQ7XHJcbiAgfSwgW29mZnNldF0pO1xyXG5cclxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gY2FudmFzIGZvciBtb3VzZSBwb3NpdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlTW91c2UoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGNhbnZhc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRNb3VzZVBvcyA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xyXG4gICAgICAgIGNvbnN0IHRvcExlZnRDYW52YXNQb3MgPSB7XHJcbiAgICAgICAgICB4OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgeTogY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0VG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRNb3VzZVBvcyhkaWZmUG9pbnRzKHZpZXdwb3J0TW91c2VQb3MsIHRvcExlZnRDYW52YXNQb3MpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVVwZGF0ZU1vdXNlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIHpvb21cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIHRoaXMgaXMgdHJpY2t5LiBVcGRhdGUgdGhlIHZpZXdwb3J0J3MgXCJvcmlnaW5cIiBzdWNoIHRoYXRcclxuICAgIC8vIHRoZSBtb3VzZSBkb2Vzbid0IG1vdmUgZHVyaW5nIHNjYWxlIC0gdGhlICd6b29tIHBvaW50JyBvZiB0aGUgbW91c2VcclxuICAgIC8vIGJlZm9yZSBhbmQgYWZ0ZXIgem9vbSBpcyByZWxhdGl2ZWx5IHRoZSBzYW1lIHBvc2l0aW9uIG9uIHRoZSB2aWV3cG9ydFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlV2hlZWwoZXZlbnQ6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgIGNvbnN0IHpvb20gPSAxIC0gZXZlbnQuZGVsdGFZIC8gWk9PTV9TRU5TSVRJVklUWTtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydFRvcExlZnREZWx0YSA9IHtcclxuICAgICAgICAgIHg6IChtb3VzZVBvcy54IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSksXHJcbiAgICAgICAgICB5OiAobW91c2VQb3MueSAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBuZXdWaWV3cG9ydFRvcExlZnQgPSBhZGRQb2ludHMoXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnQsXHJcbiAgICAgICAgICB2aWV3cG9ydFRvcExlZnREZWx0YVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodmlld3BvcnRUb3BMZWZ0LngsIHZpZXdwb3J0VG9wTGVmdC55KTtcclxuICAgICAgICBjdHguc2NhbGUoem9vbSwgem9vbSk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtbmV3Vmlld3BvcnRUb3BMZWZ0LngsIC1uZXdWaWV3cG9ydFRvcExlZnQueSk7XHJcblxyXG4gICAgICAgIHNldFZpZXdwb3J0VG9wTGVmdChuZXdWaWV3cG9ydFRvcExlZnQpO1xyXG4gICAgICAgIHNldFNjYWxlKHNjYWxlICogem9vbSk7XHJcbiAgICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gICAgcmV0dXJuICgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCk7XHJcbiAgfSwgW2N0eCwgbW91c2VQb3MueCwgbW91c2VQb3MueSwgdmlld3BvcnRUb3BMZWZ0LCBzY2FsZV0pO1xyXG5cclxuICAvLyBzZXR1cCBjYW52YXMgYW5kIHNldCBjb250ZXh0XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY2FudmFzUmVmKSByZXR1cm47XHJcbiAgICBjb25zdCByZW5kZXJDdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBpZiAocmVuZGVyQ3R4KSByZXNldChyZW5kZXJDdHgpO1xyXG4gIH0sIFtjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoLCBjaGFydERhdGFMaXN0XSk7XHJcblxyXG4gIC8vIHBhbiB3aGVuIG9mZnNldCBvciBzY2FsZSBjaGFuZ2VzXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHggJiYgbGFzdE9mZnNldFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldERpZmYgPSBzY2FsZVBvaW50KFxyXG4gICAgICAgIGRpZmZQb2ludHMob2Zmc2V0LCBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQpLFxyXG4gICAgICAgIHNjYWxlXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUob2Zmc2V0RGlmZi54LCBvZmZzZXREaWZmLnkpO1xyXG4gICAgICBzZXRWaWV3cG9ydFRvcExlZnQoKHByZXZWYWwpID0+IGRpZmZQb2ludHMocHJldlZhbCwgb2Zmc2V0RGlmZikpO1xyXG4gICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LCBbY3R4LCBvZmZzZXQsIHNjYWxlXSk7XHJcblxyXG4gIC8vIGRyYXdcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN0eCkge1xyXG4gICAgICBjb25zdCBzdG9yZWRUcmFuc2Zvcm0gPSBjdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xyXG4gICAgICBjdHguc2V0VHJhbnNmb3JtKHN0b3JlZFRyYW5zZm9ybSk7XHJcblxyXG4gICAgICBkcmF3R3JpZCgpO1xyXG4gICAgICBkcmF3Q2lyY2xlcygpO1xyXG4gICAgICBkcmF3VGV4dCgpO1xyXG4gICAgfVxyXG4gIH0sIFtcclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgY2hhcnREYXRhTGlzdCxcclxuICAgIGN0eCxcclxuICAgIHNjYWxlLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgdmlld3BvcnRUb3BMZWZ0XHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGRyYXdHcmlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgR1JJRF9TQ0FMRSA9IDIwO1xyXG4gICAgY29uc3QgcyA9IDExMDtcclxuICAgIGNvbnN0IG5YID0gTWF0aC5mbG9vcihjYW52YXNXaWR0aCAqIEdSSURfU0NBTEUgLyBzKSAtIDI7XHJcbiAgICBjb25zdCBuWSA9IE1hdGguZmxvb3IoY2FudmFzSGVpZ2h0ICogR1JJRF9TQ0FMRSAvIHMpIC0gMjtcclxuICAgIGNvbnN0IHBYID0gY2FudmFzV2lkdGggLSBuWCAqIHM7XHJcbiAgICBjb25zdCBwWSA9IGNhbnZhc0hlaWdodCAtIG5ZICogcztcclxuXHJcbiAgICBjb25zdCBwTCA9IE1hdGguY2VpbChwWCAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFQgPSBNYXRoLmNlaWwocFkgLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBSID0gY2FudmFzV2lkdGggLSBuWCAqIHMgLSBwTDtcclxuICAgIGNvbnN0IHBCID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzIC0gcFQ7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JleSc7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBmb3IgKGxldCB4ID0gcEw7IHggPD0gY2FudmFzV2lkdGggLSBwUjsgeCArPSBzKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8oeCwgcFQpO1xyXG4gICAgICBjdHgubGluZVRvKHgsIGNhbnZhc0hlaWdodCAtIHBCKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IHkgPSBwVDsgeSA8PSBjYW52YXNIZWlnaHQgLSBwQjsgeSArPSBzKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8ocEwsIHkpO1xyXG4gICAgICBjdHgubGluZVRvKGNhbnZhc1dpZHRoIC0gcFIsIHkpO1xyXG4gICAgfVxyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd0NpcmNsZXMgPSAoKSA9PiB7XHJcbiAgICBpZighY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgY2hhcnREYXRhTGlzdC5mb3JFYWNoKCh7cG9pbnQ6IHt4LCB5fSwgciwgZmlsbH0pID0+IHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGw7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd1RleHQgPSAoKSA9PiB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKHZpZXdwb3J0VG9wTGVmdC54LCB2aWV3cG9ydFRvcExlZnQueSwgMjAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZjAwMDBcIjtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICAvLyByZXNldFxyXG4gIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcclxuICAgICAgaWYgKCFjdHggJiYgaXNSZXNldFJlZi5jdXJyZW50KSByZXR1cm47XHJcbiAgICAgIC8vIGFkanVzdCBmb3IgZGV2aWNlIHBpeGVsIGRlbnNpdHlcclxuICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IGNhbnZhc1dpZHRoICogUkFUSU87XHJcbiAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICogUkFUSU87XHJcbiAgICAgIGN0eC5zY2FsZShSQVRJTywgUkFUSU8pO1xyXG4gICAgICBzZXRTY2FsZSgxKTtcclxuXHJcbiAgICAgIC8vIHJlc2V0IHN0YXRlIGFuZCByZWZzXHJcbiAgICAgIHNldEN0eChjdHgpO1xyXG4gICAgICBzZXRPZmZzZXQoT1JJR0lOKTtcclxuICAgICAgc2V0TW91c2VQb3MoT1JJR0lOKTtcclxuICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KE9SSUdJTik7XHJcbiAgICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IE9SSUdJTjtcclxuICAgICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBPUklHSU47XHJcblxyXG4gICAgICAvLyB0aGlzIHRoaW5nIGlzIHNvIG11bHRpcGxlIHJlc2V0cyBpbiBhIHJvdyBkb24ndCBjbGVhciBjYW52YXNcclxuICAgICAgaXNSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBbY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodF1cclxuICApO1xyXG5cclxuICAvLyBmdW5jdGlvbnMgZm9yIHBhbm5pbmdcclxuICBjb25zdCBtb3VzZU1vdmUgPSB1c2VDYWxsYmFjayhcclxuICAgIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICghY3R4KSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gY3VycmVudE1vdXNlUG9zO1xyXG4gICAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuICAgICAgc2V0T2Zmc2V0KChwcmV2T2Zmc2V0KSA9PiBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmKSk7XHJcbiAgICB9LCBbY3R4XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG1vdXNlVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjYW52YXNSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VVcCk7XHJcbiAgfSwgW21vdXNlTW92ZV0pO1xyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxDYW52YXNFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgICBjYW52YXNSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlKTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VVcCk7XHJcbiAgICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBldmVudC5wYWdlWCwgeTogZXZlbnQucGFnZVkgfTtcclxuICAgIH0sXHJcbiAgICBbbW91c2VNb3ZlLCBtb3VzZVVwXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxDYW52YXNFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgaWYgKCFjdHggfHwgIWNoYXJ0RGF0YUxpc3QpIHJldHVybjtcclxuICAgIFxyXG4gICAgY2hhcnREYXRhTGlzdC5mb3JFYWNoKCh7cG9pbnQ6IHt4LCB5fSwgcn0pID0+IHtcclxuICAgICAgY29uc3QgY2lyY2xlID0gbmV3IFBhdGgyRCgpO1xyXG4gICAgICBjaXJjbGUuYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgaWYoY3R4LmlzUG9pbnRJblBhdGgoY2lyY2xlLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIGUubmF0aXZlRXZlbnQub2Zmc2V0WSkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGNhbnZhc1xyXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XHJcbiAgICAgICAgb25Nb3VzZURvd249e3N0YXJ0UGFufVxyXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICAgIHdpZHRoPXtjYW52YXNXaWR0aCAqIFJBVElPfVxyXG4gICAgICAgIGhlaWdodD17Y2FudmFzSGVpZ2h0ICogUkFUSU99XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGN1cnNvcjogXCJjcm9zc2hhaXJcIixcclxuICAgICAgICAgIHdpZHRoOiBgJHtjYW52YXNXaWR0aH1weGAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke2NhbnZhc0hlaWdodH1weGBcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGN0eCAmJiByZXNldChjdHgpfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWJibGVDaGFyOyJdLCJzb3VyY2VSb290IjoiIn0=