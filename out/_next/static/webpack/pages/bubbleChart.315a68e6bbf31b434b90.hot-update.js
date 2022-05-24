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
      }
    });
    console.log('out');
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: cx('btn'),
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 277,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsImlzUmVzZXRSZWYiLCJsYXN0TW91c2VQb3NSZWYiLCJsYXN0T2Zmc2V0UmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImVsIiwiaGFuZGxlVXBkYXRlTW91c2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwidmlld3BvcnRNb3VzZVBvcyIsImNsaWVudFgiLCJjbGllbnRZIiwidG9wTGVmdENhbnZhc1BvcyIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVdoZWVsIiwiem9vbSIsImRlbHRhWSIsInZpZXdwb3J0VG9wTGVmdERlbHRhIiwibmV3Vmlld3BvcnRUb3BMZWZ0IiwidHJhbnNsYXRlIiwidXNlTGF5b3V0RWZmZWN0IiwicmVuZGVyQ3R4IiwiZ2V0Q29udGV4dCIsInJlc2V0Iiwib2Zmc2V0RGlmZiIsInByZXZWYWwiLCJzdG9yZWRUcmFuc2Zvcm0iLCJnZXRUcmFuc2Zvcm0iLCJjYW52YXMiLCJ3aWR0aCIsInNldFRyYW5zZm9ybSIsImRyYXdHcmlkIiwiZHJhd0NpcmNsZXMiLCJkcmF3VGV4dCIsIkdSSURfU0NBTEUiLCJzIiwiblgiLCJNYXRoIiwiZmxvb3IiLCJuWSIsInBYIiwicFkiLCJwTCIsImNlaWwiLCJwVCIsInBSIiwicEIiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImZvckVhY2giLCJwb2ludCIsInIiLCJmaWxsIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJ1c2VDYWxsYmFjayIsImhlaWdodCIsIm1vdXNlTW92ZSIsImUiLCJsYXN0TW91c2VQb3MiLCJjdXJyZW50TW91c2VQb3MiLCJtb3VzZURpZmYiLCJwcmV2T2Zmc2V0IiwibW91c2VVcCIsInN0eWxlIiwiY3Vyc29yIiwiZG9jdW1lbnQiLCJzdGFydFBhbiIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVNb3VzZU1vdmUiLCJjaXJjbGUiLCJQYXRoMkQiLCJpc1BvaW50SW5QYXRoIiwibmF0aXZlRXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLCtEQUFoQixDQUFYO0FBY0M7QUFLQTtBQUVELElBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRUMsR0FBQyxFQUFFLENBQUw7QUFBUUMsR0FBQyxFQUFFO0FBQVgsQ0FBZCxDQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQWQ7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsRUFBcEIsRUFBK0JDLEVBQS9CLEVBQTBDO0FBQ3hDLFNBQU87QUFBRUwsS0FBQyxFQUFFSSxFQUFFLENBQUNKLENBQUgsR0FBT0ssRUFBRSxDQUFDTCxDQUFmO0FBQWtCQyxLQUFDLEVBQUVHLEVBQUUsQ0FBQ0gsQ0FBSCxHQUFPSSxF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QWNFLE9BQS9ELENBQUgsRUFBNEU7QUFDMUVDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDRDtBQUNGLEtBTkQ7QUFRQUQsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNELEdBWkQ7O0FBY0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUV0SCxFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUE0QixTQUFLLEVBQUU7QUFBQ2lFLFdBQUssRUFBRS9DLFdBQVcsR0FBR1Q7QUFBdEIsS0FBbkM7QUFBQSw0QkFDRTtBQUNFLGlCQUFXLEVBQUVxRyxlQURmO0FBRUUsaUJBQVcsRUFBRUgsUUFGZjtBQUdFLFNBQUcsRUFBRXRGLFNBSFA7QUFJRSxXQUFLLEVBQUVILFdBQVcsR0FBR1QsS0FKdkI7QUFLRSxZQUFNLEVBQUVVLFlBQVksR0FBR1YsS0FMekI7QUFNRSxXQUFLLEVBQUU7QUFDTGdHLGNBQU0sRUFBRSxXQURIO0FBRUx4QyxhQUFLLFlBQUsvQyxXQUFMLE9BRkE7QUFHTDhFLGNBQU0sWUFBSzdFLFlBQUw7QUFIRDtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWFFO0FBQVEsZUFBUyxFQUFFbkIsRUFBRSxDQUFDLEtBQUQsQ0FBckI7QUFBOEIsYUFBTyxFQUFFO0FBQUEsZUFBTXdCLEdBQUcsSUFBSW1DLEtBQUssQ0FBQ25DLEdBQUQsQ0FBbEI7QUFBQSxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBblBEOztHQUFNUCxVOztLQUFBQSxVO0FBcVBTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idWJibGVDaGFydC4zMTVhNjhlNmJiZjMxYjQzNGI5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlQ2FsbGJhY2ssXHJcbiAgdXNlTGF5b3V0RWZmZWN0LFxyXG4gIHVzZVJlZixcclxuICB1c2VTdGF0ZSxcclxuICBSZWFjdEVsZW1lbnRcclxufSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idWJibGVDaGFydC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnREYXRhIHtcclxuICBwb2ludDogUG9pbnQ7XHJcbiAgcjogbnVtYmVyO1xyXG4gIGZpbGw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRvb2xUaXA/OiBSZWFjdEVsZW1lbnQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYW52YXNQcm9wcyB7XHJcbiAgY2FudmFzV2lkdGg6IG51bWJlcjtcclxuICBjYW52YXNIZWlnaHQ6IG51bWJlcjtcclxuICBjaGFydERhdGFMaXN0PzogQ2hhcnREYXRhW107XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBPUklHSU4gPSBPYmplY3QuZnJlZXplKHsgeDogMCwgeTogMCB9KTtcclxuY29uc3QgUkFUSU8gPSAxO1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54ICsgcDIueCwgeTogcDEueSArIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2NhbGVQb2ludChwMTogUG9pbnQsIHNjYWxlOiBudW1iZXIpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC8gc2NhbGUsIHk6IHAxLnkgLyBzY2FsZSB9O1xyXG59XHJcblxyXG5jb25zdCBaT09NX1NFTlNJVElWSVRZID0gNTAwOyAvLyBiaWdnZXIgZm9yIGxvd2VyIHpvb20gcGVyIHNjcm9sbFxyXG5cclxuY29uc3QgQnViYmxlQ2hhciA9ICh7Y2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY2hhcnREYXRhTGlzdH06IENhbnZhc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGU8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbbW91c2VQb3MsIHNldE1vdXNlUG9zXSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFt2aWV3cG9ydFRvcExlZnQsIHNldFZpZXdwb3J0VG9wTGVmdF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBpc1Jlc2V0UmVmID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBsYXN0TW91c2VQb3NSZWYgPSB1c2VSZWY8UG9pbnQ+KE9SSUdJTik7XHJcbiAgY29uc3QgbGFzdE9mZnNldFJlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuXHJcbiAgLy8gdXBkYXRlIGxhc3Qgb2Zmc2V0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxhc3RPZmZzZXRSZWYuY3VycmVudCA9IG9mZnNldDtcclxuICB9LCBbb2Zmc2V0XSk7XHJcblxyXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiBjYW52YXMgZm9yIG1vdXNlIHBvc2l0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVNb3VzZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zID0geyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH07XHJcbiAgICAgICAgY29uc3QgdG9wTGVmdENhbnZhc1BvcyA9IHtcclxuICAgICAgICAgIHg6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldExlZnQsXHJcbiAgICAgICAgICB5OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRUb3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldE1vdXNlUG9zKGRpZmZQb2ludHModmlld3BvcnRNb3VzZVBvcywgdG9wTGVmdENhbnZhc1BvcykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3Igem9vbVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gdGhpcyBpcyB0cmlja3kuIFVwZGF0ZSB0aGUgdmlld3BvcnQncyBcIm9yaWdpblwiIHN1Y2ggdGhhdFxyXG4gICAgLy8gdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZSBkdXJpbmcgc2NhbGUgLSB0aGUgJ3pvb20gcG9pbnQnIG9mIHRoZSBtb3VzZVxyXG4gICAgLy8gYmVmb3JlIGFuZCBhZnRlciB6b29tIGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcG9zaXRpb24gb24gdGhlIHZpZXdwb3J0XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVXaGVlbChldmVudDogV2hlZWxFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgY29uc3Qgem9vbSA9IDEgLSBldmVudC5kZWx0YVkgLyBaT09NX1NFTlNJVElWSVRZO1xyXG5cclxuICAgICAgICBpZihzY2FsZSAqIHpvb20gPCAwLjMpIHJldHVybjtcclxuICAgICAgICBpZihzY2FsZSAqIHpvb20gPiAzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0VG9wTGVmdERlbHRhID0ge1xyXG4gICAgICAgICAgeDogKG1vdXNlUG9zLnggLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKSxcclxuICAgICAgICAgIHk6IChtb3VzZVBvcy55IC8gc2NhbGUpICogKDEgLSAxIC8gem9vbSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld1ZpZXdwb3J0VG9wTGVmdCA9IGFkZFBvaW50cyhcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdCxcclxuICAgICAgICAgIHZpZXdwb3J0VG9wTGVmdERlbHRhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh2aWV3cG9ydFRvcExlZnQueCwgdmlld3BvcnRUb3BMZWZ0LnkpO1xyXG4gICAgICAgIGN0eC5zY2FsZSh6b29tLCB6b29tKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKC1uZXdWaWV3cG9ydFRvcExlZnQueCwgLW5ld1ZpZXdwb3J0VG9wTGVmdC55KTtcclxuXHJcbiAgICAgICAgc2V0Vmlld3BvcnRUb3BMZWZ0KG5ld1ZpZXdwb3J0VG9wTGVmdCk7XHJcbiAgICAgICAgc2V0U2NhbGUoc2NhbGUgKiB6b29tKTtcclxuICAgICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCk7XHJcbiAgICByZXR1cm4gKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICB9LCBbY3R4LCBtb3VzZVBvcy54LCBtb3VzZVBvcy55LCB2aWV3cG9ydFRvcExlZnQsIHNjYWxlXSk7XHJcblxyXG4gIC8vIHNldHVwIGNhbnZhcyBhbmQgc2V0IGNvbnRleHRcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjYW52YXNSZWYpIHJldHVybjtcclxuICAgIGNvbnN0IHJlbmRlckN0eCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGlmIChyZW5kZXJDdHgpIHJlc2V0KHJlbmRlckN0eCk7XHJcbiAgfSwgW2NhbnZhc0hlaWdodCwgY2FudmFzV2lkdGgsIGNoYXJ0RGF0YUxpc3RdKTtcclxuXHJcbiAgLy8gcGFuIHdoZW4gb2Zmc2V0IG9yIHNjYWxlIGNoYW5nZXNcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN0eCAmJiBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgb2Zmc2V0RGlmZiA9IHNjYWxlUG9pbnQoXHJcbiAgICAgICAgZGlmZlBvaW50cyhvZmZzZXQsIGxhc3RPZmZzZXRSZWYuY3VycmVudCksXHJcbiAgICAgICAgc2NhbGVcclxuICAgICAgKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZShvZmZzZXREaWZmLngsIG9mZnNldERpZmYueSk7XHJcbiAgICAgIHNldFZpZXdwb3J0VG9wTGVmdCgocHJldlZhbCkgPT4gZGlmZlBvaW50cyhwcmV2VmFsLCBvZmZzZXREaWZmKSk7XHJcbiAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sIFtjdHgsIG9mZnNldCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gZHJhd1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4KSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZFRyYW5zZm9ybSA9IGN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IGN0eC5jYW52YXMud2lkdGg7XHJcbiAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oc3RvcmVkVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgIGRyYXdHcmlkKCk7XHJcbiAgICAgIGRyYXdDaXJjbGVzKCk7XHJcbiAgICAgIGRyYXdUZXh0KCk7XHJcbiAgICB9XHJcbiAgfSwgW1xyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBjaGFydERhdGFMaXN0LFxyXG4gICAgY3R4LFxyXG4gICAgc2NhbGUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICB2aWV3cG9ydFRvcExlZnRcclxuICBdKTtcclxuXHJcbiAgY29uc3QgZHJhd0dyaWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBHUklEX1NDQUxFID0gMjA7XHJcbiAgICBjb25zdCBzID0gMTEwO1xyXG4gICAgY29uc3QgblggPSBNYXRoLmZsb29yKGNhbnZhc1dpZHRoICogR1JJRF9TQ0FMRSAvIHMpIC0gMjtcclxuICAgIGNvbnN0IG5ZID0gTWF0aC5mbG9vcihjYW52YXNIZWlnaHQgKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgcFggPSBjYW52YXNXaWR0aCAtIG5YICogcztcclxuICAgIGNvbnN0IHBZID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzO1xyXG5cclxuICAgIGNvbnN0IHBMID0gTWF0aC5jZWlsKHBYIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwVCA9IE1hdGguY2VpbChwWSAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFIgPSBjYW52YXNXaWR0aCAtIG5YICogcyAtIHBMO1xyXG4gICAgY29uc3QgcEIgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHMgLSBwVDtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmV5JztcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGZvciAobGV0IHggPSBwTDsgeCA8PSBjYW52YXNXaWR0aCAtIHBSOyB4ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyh4LCBwVCk7XHJcbiAgICAgIGN0eC5saW5lVG8oeCwgY2FudmFzSGVpZ2h0IC0gcEIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgeSA9IHBUOyB5IDw9IGNhbnZhc0hlaWdodCAtIHBCOyB5ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhwTCwgeSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY2FudmFzV2lkdGggLSBwUiwgeSk7XHJcbiAgICB9XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3Q2lyY2xlcyA9ICgpID0+IHtcclxuICAgIGlmKCFjaGFydERhdGFMaXN0KSByZXR1cm47XHJcbiAgICBjaGFydERhdGFMaXN0LmZvckVhY2goKHtwb2ludDoge3gsIHl9LCByLCBmaWxsfSkgPT4ge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3VGV4dCA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIC8vIHJlc2V0XHJcbiAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjayhcclxuICAgIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG4gICAgICBpZiAoIWN0eCAmJiBpc1Jlc2V0UmVmLmN1cnJlbnQpIHJldHVybjtcclxuICAgICAgLy8gYWRqdXN0IGZvciBkZXZpY2UgcGl4ZWwgZGVuc2l0eVxyXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gY2FudmFzV2lkdGggKiBSQVRJTztcclxuICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKiBSQVRJTztcclxuICAgICAgY3R4LnNjYWxlKFJBVElPLCBSQVRJTyk7XHJcbiAgICAgIHNldFNjYWxlKDEpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgc3RhdGUgYW5kIHJlZnNcclxuICAgICAgc2V0Q3R4KGN0eCk7XHJcbiAgICAgIHNldE9mZnNldChPUklHSU4pO1xyXG4gICAgICBzZXRNb3VzZVBvcyhPUklHSU4pO1xyXG4gICAgICBzZXRWaWV3cG9ydFRvcExlZnQoT1JJR0lOKTtcclxuICAgICAgbGFzdE9mZnNldFJlZi5jdXJyZW50ID0gT1JJR0lOO1xyXG4gICAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IE9SSUdJTjtcclxuXHJcbiAgICAgIC8vIHRoaXMgdGhpbmcgaXMgc28gbXVsdGlwbGUgcmVzZXRzIGluIGEgcm93IGRvbid0IGNsZWFyIGNhbnZhc1xyXG4gICAgICBpc1Jlc2V0UmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIFtjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0XVxyXG4gICk7XHJcblxyXG4gIC8vIGZ1bmN0aW9ucyBmb3IgcGFubmluZ1xyXG4gIGNvbnN0IG1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKCFjdHgpIHJldHVybjtcclxuICAgICAgY29uc3QgbGFzdE1vdXNlUG9zID0gbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG4gICAgICBzZXRPZmZzZXQoKHByZXZPZmZzZXQpID0+IGFkZFBvaW50cyhwcmV2T2Zmc2V0LCBtb3VzZURpZmYpKTtcclxuICAgIH0sIFtjdHhdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbW91c2VVcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICB9LCBbbW91c2VNb3ZlXSk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiZ3JhYmJpbmdcIjtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmUpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICAgICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGV2ZW50LnBhZ2VYLCB5OiBldmVudC5wYWdlWSB9O1xyXG4gICAgfSxcclxuICAgIFttb3VzZU1vdmUsIG1vdXNlVXBdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWN0eCB8fCAhY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjaGFydERhdGFMaXN0LmZvckVhY2goKHtwb2ludDoge3gsIHl9LCByfSkgPT4ge1xyXG4gICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XHJcbiAgICAgIGNpcmNsZS5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBpZihjdHguaXNQb2ludEluUGF0aChjaXJjbGUsIGUubmF0aXZlRXZlbnQub2Zmc2V0WCwgZS5uYXRpdmVFdmVudC5vZmZzZXRZKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbicpO1xyXG4gICAgICB9IFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ291dCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfSBzdHlsZT17e3dpZHRoOiBjYW52YXNXaWR0aCAqIFJBVElPfX0+XHJcbiAgICAgIDxjYW52YXNcclxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXtzdGFydFBhbn1cclxuICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICB3aWR0aD17Y2FudmFzV2lkdGggKiBSQVRJT31cclxuICAgICAgICBoZWlnaHQ9e2NhbnZhc0hlaWdodCAqIFJBVElPfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBjdXJzb3I6IFwiY3Jvc3NoYWlyXCIsXHJcbiAgICAgICAgICB3aWR0aDogYCR7Y2FudmFzV2lkdGh9cHhgLFxyXG4gICAgICAgICAgaGVpZ2h0OiBgJHtjYW52YXNIZWlnaHR9cHhgXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2N4KCdidG4nKX0gb25DbGljaz17KCkgPT4gY3R4ICYmIHJlc2V0KGN0eCl9PlJlc2V0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1YmJsZUNoYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==