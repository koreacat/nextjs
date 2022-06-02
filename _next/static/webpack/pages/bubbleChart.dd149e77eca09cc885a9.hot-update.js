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
    console.log(offset);

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
    console.log(e);
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
      lineNumber: 279,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('tooltipWrap'),
      style: {
        transform: "translate(".concat(toolTipPos.x, ", ").concat(toolTipPos.y, ")")
      },
      children: toolTipEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('scale'),
      children: ["scale: ", scale.toFixed(2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: cx('btn'),
      onClick: function onClick() {
        return ctx && reset(ctx);
      },
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 278,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiT1JJR0lOIiwiT2JqZWN0IiwiZnJlZXplIiwieCIsInkiLCJSQVRJTyIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwic2NhbGVQb2ludCIsInNjYWxlIiwiWk9PTV9TRU5TSVRJVklUWSIsIkJ1YmJsZUNoYXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNoYXJ0RGF0YUxpc3QiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImN0eCIsInNldEN0eCIsInNldFNjYWxlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsInZpZXdwb3J0VG9wTGVmdCIsInNldFZpZXdwb3J0VG9wTGVmdCIsInRvb2xUaXBFbCIsInNldFRvb2xUaXBFbCIsInRvb2xUaXBQb3MiLCJzZXRUb29sVGlwUG9zIiwiaXNSZXNldFJlZiIsImxhc3RNb3VzZVBvc1JlZiIsImxhc3RPZmZzZXRSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZWwiLCJoYW5kbGVVcGRhdGVNb3VzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cG9ydE1vdXNlUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0b3BMZWZ0Q2FudmFzUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2hlZWwiLCJ6b29tIiwiZGVsdGFZIiwidmlld3BvcnRUb3BMZWZ0RGVsdGEiLCJuZXdWaWV3cG9ydFRvcExlZnQiLCJ0cmFuc2xhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZW5kZXJDdHgiLCJnZXRDb250ZXh0IiwicmVzZXQiLCJjb25zb2xlIiwibG9nIiwib2Zmc2V0RGlmZiIsInByZXZWYWwiLCJzdG9yZWRUcmFuc2Zvcm0iLCJnZXRUcmFuc2Zvcm0iLCJjYW52YXMiLCJ3aWR0aCIsInNldFRyYW5zZm9ybSIsImRyYXdHcmlkIiwiZHJhd0NpcmNsZXMiLCJkcmF3VGV4dCIsIkdSSURfU0NBTEUiLCJzIiwiblgiLCJNYXRoIiwiZmxvb3IiLCJuWSIsInBYIiwicFkiLCJwTCIsImNlaWwiLCJwVCIsInBSIiwicEIiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInNvcnRlZExpc3QiLCJzb3J0IiwiYSIsImIiLCJyIiwiZm9yRWFjaCIsInBvaW50IiwiZmlsbCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwiaGVpZ2h0IiwibW91c2VNb3ZlIiwiZSIsImxhc3RNb3VzZVBvcyIsImN1cnJlbnRNb3VzZVBvcyIsIm1vdXNlRGlmZiIsInByZXZPZmZzZXQiLCJtb3VzZVVwIiwic3R5bGUiLCJjdXJzb3IiLCJkb2N1bWVudCIsInN0YXJ0UGFuIiwibmF0aXZlRXZlbnQiLCJoYW5kbGVNb3VzZU1vdmUiLCJ0b29sVGlwIiwiY2lyY2xlIiwiUGF0aDJEIiwiaXNQb2ludEluUGF0aCIsInRyYW5zZm9ybSIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywrREFBaEIsQ0FBWDtBQWNDO0FBS0E7QUFFRCxJQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVDLEdBQUMsRUFBRSxDQUFMO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQWQsQ0FBZjtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFkOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQStCQyxFQUEvQixFQUEwQztBQUN4QyxTQUFPO0FBQUVMLEtBQUMsRUFBRUksRUFBRSxDQUFDSixD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QUFDTHlHLGNBQU0sRUFBRSxXQURIO0FBRUwzQyxhQUFLLFlBQUtyRCxXQUFMLE9BRkE7QUFHTHVGLGNBQU0sWUFBS3RGLFlBQUw7QUFIRDtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWFFO0FBQ0UsZUFBUyxFQUFFbkIsRUFBRSxDQUFDLGFBQUQsQ0FEZjtBQUVFLFdBQUssRUFBRTtBQUNMMkgsaUJBQVMsc0JBQWV4RixVQUFVLENBQUM1QixDQUExQixlQUFnQzRCLFVBQVUsQ0FBQzNCLENBQTNDO0FBREosT0FGVDtBQUFBLGdCQU1HeUI7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsZUFxQkU7QUFBTSxlQUFTLEVBQUVqQyxFQUFFLENBQUMsT0FBRCxDQUFuQjtBQUFBLDRCQUFzQ2UsS0FBSyxDQUFDNkcsT0FBTixDQUFjLENBQWQsQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBc0JFO0FBQVEsZUFBUyxFQUFFNUgsRUFBRSxDQUFDLEtBQUQsQ0FBckI7QUFBOEIsYUFBTyxFQUFFO0FBQUEsZUFBTXdCLEdBQUcsSUFBSXVDLEtBQUssQ0FBQ3ZDLEdBQUQsQ0FBbEI7QUFBQSxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTlQRDs7R0FBTVAsVTs7S0FBQUEsVTtBQWdRU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnViYmxlQ2hhcnQuZGQxNDllNzdlY2EwOWNjODg1YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZUxheW91dEVmZmVjdCxcclxuICB1c2VSZWYsXHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3RFbGVtZW50XHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnViYmxlQ2hhcnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIENoYXJ0RGF0YSB7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG4gIHI6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0b29sVGlwPzogUmVhY3RFbGVtZW50O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHMge1xyXG4gIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhcnREYXRhTGlzdD86IENoYXJ0RGF0YVtdO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgT1JJR0lOID0gT2JqZWN0LmZyZWV6ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbmNvbnN0IFJBVElPID0gMTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCArIHAyLngsIHk6IHAxLnkgKyBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjYWxlUG9pbnQocDE6IFBvaW50LCBzY2FsZTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAvIHNjYWxlLCB5OiBwMS55IC8gc2NhbGUgfTtcclxufVxyXG5cclxuY29uc3QgWk9PTV9TRU5TSVRJVklUWSA9IDUwMDsgLy8gYmlnZ2VyIGZvciBsb3dlciB6b29tIHBlciBzY3JvbGxcclxuXHJcbmNvbnN0IEJ1YmJsZUNoYXIgPSAoeyBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjaGFydERhdGFMaXN0IH06IENhbnZhc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGU8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbbW91c2VQb3MsIHNldE1vdXNlUG9zXSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU4pO1xyXG4gIGNvbnN0IFt2aWV3cG9ydFRvcExlZnQsIHNldFZpZXdwb3J0VG9wTGVmdF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBbdG9vbFRpcEVsLCBzZXRUb29sVGlwRWxdID0gdXNlU3RhdGUoPD48Lz4pO1xyXG4gIGNvbnN0IFt0b29sVGlwUG9zLCBzZXRUb29sVGlwUG9zXSA9IHVzZVN0YXRlKHsgeDogJzBweCcsIHk6ICcwcHgnIH0pO1xyXG4gIGNvbnN0IGlzUmVzZXRSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOKTtcclxuICBjb25zdCBsYXN0T2Zmc2V0UmVmID0gdXNlUmVmPFBvaW50PihPUklHSU4pO1xyXG5cclxuICAvLyB1cGRhdGUgbGFzdCBvZmZzZXRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGFzdE9mZnNldFJlZi5jdXJyZW50ID0gb2Zmc2V0O1xyXG4gIH0sIFtvZmZzZXRdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3IgbW91c2UgcG9zaXRpb25cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZU1vdXNlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zID0geyB4OiBldmVudC5vZmZzZXRYLCB5OiBldmVudC5vZmZzZXRZIH07XHJcbiAgICAgICAgY29uc3QgdG9wTGVmdENhbnZhc1BvcyA9IHtcclxuICAgICAgICAgIHg6IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldExlZnQsXHJcbiAgICAgICAgICB5OiBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRUb3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldE1vdXNlUG9zKGRpZmZQb2ludHModmlld3BvcnRNb3VzZVBvcywgdG9wTGVmdENhbnZhc1BvcykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlVXBkYXRlTW91c2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVVcGRhdGVNb3VzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIGNhbnZhcyBmb3Igem9vbVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gdGhpcyBpcyB0cmlja3kuIFVwZGF0ZSB0aGUgdmlld3BvcnQncyBcIm9yaWdpblwiIHN1Y2ggdGhhdFxyXG4gICAgLy8gdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZSBkdXJpbmcgc2NhbGUgLSB0aGUgJ3pvb20gcG9pbnQnIG9mIHRoZSBtb3VzZVxyXG4gICAgLy8gYmVmb3JlIGFuZCBhZnRlciB6b29tIGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcG9zaXRpb24gb24gdGhlIHZpZXdwb3J0XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVXaGVlbChldmVudDogV2hlZWxFdmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgY29uc3Qgem9vbSA9IDEgLSBldmVudC5kZWx0YVkgLyBaT09NX1NFTlNJVElWSVRZO1xyXG5cclxuICAgICAgICBpZiAoc2NhbGUgKiB6b29tIDwgMC4zKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHNjYWxlICogem9vbSA+IDMpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRUb3BMZWZ0RGVsdGEgPSB7XHJcbiAgICAgICAgICB4OiAobW91c2VQb3MueCAvIHNjYWxlKSAqICgxIC0gMSAvIHpvb20pLFxyXG4gICAgICAgICAgeTogKG1vdXNlUG9zLnkgLyBzY2FsZSkgKiAoMSAtIDEgLyB6b29tKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbmV3Vmlld3BvcnRUb3BMZWZ0ID0gYWRkUG9pbnRzKFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0LFxyXG4gICAgICAgICAgdmlld3BvcnRUb3BMZWZ0RGVsdGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjdHgudHJhbnNsYXRlKHZpZXdwb3J0VG9wTGVmdC54LCB2aWV3cG9ydFRvcExlZnQueSk7XHJcbiAgICAgICAgY3R4LnNjYWxlKHpvb20sIHpvb20pO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoLW5ld1ZpZXdwb3J0VG9wTGVmdC54LCAtbmV3Vmlld3BvcnRUb3BMZWZ0LnkpO1xyXG5cclxuICAgICAgICBzZXRWaWV3cG9ydFRvcExlZnQobmV3Vmlld3BvcnRUb3BMZWZ0KTtcclxuICAgICAgICBzZXRTY2FsZShzY2FsZSAqIHpvb20pO1xyXG4gICAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsKTtcclxuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xyXG4gIH0sIFtjdHgsIG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIHZpZXdwb3J0VG9wTGVmdCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gc2V0dXAgY2FudmFzIGFuZCBzZXQgY29udGV4dFxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbnZhc1JlZikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVuZGVyQ3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKHJlbmRlckN0eCkgcmVzZXQocmVuZGVyQ3R4KTtcclxuICB9LCBbY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgY2hhcnREYXRhTGlzdF0pO1xyXG5cclxuICAvLyBwYW4gd2hlbiBvZmZzZXQgb3Igc2NhbGUgY2hhbmdlc1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhvZmZzZXQpO1xyXG4gICAgaWYgKGN0eCAmJiBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgb2Zmc2V0RGlmZiA9IHNjYWxlUG9pbnQoXHJcbiAgICAgICAgZGlmZlBvaW50cyhvZmZzZXQsIGxhc3RPZmZzZXRSZWYuY3VycmVudCksXHJcbiAgICAgICAgc2NhbGVcclxuICAgICAgKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZShvZmZzZXREaWZmLngsIG9mZnNldERpZmYueSk7XHJcbiAgICAgIHNldFZpZXdwb3J0VG9wTGVmdCgocHJldlZhbCkgPT4gZGlmZlBvaW50cyhwcmV2VmFsLCBvZmZzZXREaWZmKSk7XHJcbiAgICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sIFtjdHgsIG9mZnNldCwgc2NhbGVdKTtcclxuXHJcbiAgLy8gZHJhd1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3R4KSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZFRyYW5zZm9ybSA9IGN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IGN0eC5jYW52YXMud2lkdGg7XHJcbiAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oc3RvcmVkVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgIGRyYXdHcmlkKCk7XHJcbiAgICAgIGRyYXdDaXJjbGVzKCk7XHJcbiAgICAgIGRyYXdUZXh0KCk7XHJcbiAgICB9XHJcbiAgfSwgW1xyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBjaGFydERhdGFMaXN0LFxyXG4gICAgY3R4LFxyXG4gICAgc2NhbGUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICB2aWV3cG9ydFRvcExlZnRcclxuICBdKTtcclxuXHJcbiAgY29uc3QgZHJhd0dyaWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBHUklEX1NDQUxFID0gMjA7XHJcbiAgICBjb25zdCBzID0gMTEwO1xyXG4gICAgY29uc3QgblggPSBNYXRoLmZsb29yKGNhbnZhc1dpZHRoICogR1JJRF9TQ0FMRSAvIHMpIC0gMjtcclxuICAgIGNvbnN0IG5ZID0gTWF0aC5mbG9vcihjYW52YXNIZWlnaHQgKiBHUklEX1NDQUxFIC8gcykgLSAyO1xyXG4gICAgY29uc3QgcFggPSBjYW52YXNXaWR0aCAtIG5YICogcztcclxuICAgIGNvbnN0IHBZID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzO1xyXG5cclxuICAgIGNvbnN0IHBMID0gTWF0aC5jZWlsKHBYIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwVCA9IE1hdGguY2VpbChwWSAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFIgPSBjYW52YXNXaWR0aCAtIG5YICogcyAtIHBMO1xyXG4gICAgY29uc3QgcEIgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHMgLSBwVDtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmV5JztcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGZvciAobGV0IHggPSBwTDsgeCA8PSBjYW52YXNXaWR0aCAtIHBSOyB4ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyh4LCBwVCk7XHJcbiAgICAgIGN0eC5saW5lVG8oeCwgY2FudmFzSGVpZ2h0IC0gcEIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgeSA9IHBUOyB5IDw9IGNhbnZhc0hlaWdodCAtIHBCOyB5ICs9IHMpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhwTCwgeSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY2FudmFzV2lkdGggLSBwUiwgeSk7XHJcbiAgICB9XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3Q2lyY2xlcyA9ICgpID0+IHtcclxuICAgIGlmICghY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgY29uc3Qgc29ydGVkTGlzdCA9IGNoYXJ0RGF0YUxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICByZXR1cm4gYi5yIC0gYS5yO1xyXG4gICAgfSlcclxuXHJcbiAgICBzb3J0ZWRMaXN0LmZvckVhY2goKHsgcG9pbnQ6IHsgeCwgeSB9LCByLCBmaWxsIH0pID0+IHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGw7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd1RleHQgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICAvLyByZXNldFxyXG4gIGNvbnN0IHJlc2V0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XHJcbiAgICBpZiAoIWN0eCAmJiBpc1Jlc2V0UmVmLmN1cnJlbnQpIHJldHVybjtcclxuICAgIC8vIGFkanVzdCBmb3IgZGV2aWNlIHBpeGVsIGRlbnNpdHlcclxuICAgIGN0eC5jYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCAqIFJBVElPO1xyXG4gICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKiBSQVRJTztcclxuICAgIGN0eC5zY2FsZShSQVRJTywgUkFUSU8pO1xyXG4gICAgc2V0U2NhbGUoMSk7XHJcblxyXG4gICAgLy8gcmVzZXQgc3RhdGUgYW5kIHJlZnNcclxuICAgIHNldEN0eChjdHgpO1xyXG4gICAgc2V0T2Zmc2V0KE9SSUdJTik7XHJcbiAgICBzZXRNb3VzZVBvcyhPUklHSU4pO1xyXG4gICAgc2V0Vmlld3BvcnRUb3BMZWZ0KE9SSUdJTik7XHJcbiAgICBsYXN0T2Zmc2V0UmVmLmN1cnJlbnQgPSBPUklHSU47XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IE9SSUdJTjtcclxuXHJcbiAgICAvLyB0aGlzIHRoaW5nIGlzIHNvIG11bHRpcGxlIHJlc2V0cyBpbiBhIHJvdyBkb24ndCBjbGVhciBjYW52YXNcclxuICAgIGlzUmVzZXRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgLy8gZnVuY3Rpb25zIGZvciBwYW5uaW5nXHJcbiAgY29uc3QgbW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgaWYgKCFjdHgpIHJldHVybjtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gYWRkUG9pbnRzKHByZXZPZmZzZXQsIG1vdXNlRGlmZikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW91c2VVcCA9ICgpID0+IHtcclxuICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFuID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBjYW52YXNSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwKTtcclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0geyB4OiBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIHk6IGUubmF0aXZlRXZlbnQub2Zmc2V0WSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWN0eCB8fCAhY2hhcnREYXRhTGlzdCkgcmV0dXJuO1xyXG4gICAgc2V0VG9vbFRpcEVsKG51bGwpO1xyXG5cclxuICAgIGNoYXJ0RGF0YUxpc3QuZm9yRWFjaCgoeyBwb2ludDogeyB4LCB5IH0sIHIsIHRvb2xUaXAgfSkgPT4ge1xyXG4gICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XHJcbiAgICAgIGNpcmNsZS5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBpZiAoY3R4LmlzUG9pbnRJblBhdGgoY2lyY2xlLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgsIGUubmF0aXZlRXZlbnQub2Zmc2V0WSkpIHtcclxuICAgICAgICBzZXRUb29sVGlwUG9zKHsgeDogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRYfXB4YCwgeTogYCR7ZS5uYXRpdmVFdmVudC5vZmZzZXRZIC0gNTB9cHhgIH0pO1xyXG4gICAgICAgIHNldFRvb2xUaXBFbCh0b29sVGlwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfSBzdHlsZT17eyB3aWR0aDogY2FudmFzV2lkdGggKiBSQVRJTyB9fT5cclxuICAgICAgPGNhbnZhc1xyXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XHJcbiAgICAgICAgb25Nb3VzZURvd249e3N0YXJ0UGFufVxyXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICAgIHdpZHRoPXtjYW52YXNXaWR0aCAqIFJBVElPfVxyXG4gICAgICAgIGhlaWdodD17Y2FudmFzSGVpZ2h0ICogUkFUSU99XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGN1cnNvcjogXCJjcm9zc2hhaXJcIixcclxuICAgICAgICAgIHdpZHRoOiBgJHtjYW52YXNXaWR0aH1weGAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke2NhbnZhc0hlaWdodH1weGBcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCgndG9vbHRpcFdyYXAnKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dG9vbFRpcFBvcy54fSwgJHt0b29sVGlwUG9zLnl9KWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0b29sVGlwRWx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdzY2FsZScpfT5zY2FsZToge3NjYWxlLnRvRml4ZWQoMil9PC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXsoKSA9PiBjdHggJiYgcmVzZXQoY3R4KX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlQ2hhcjsiXSwic291cmNlUm9vdCI6IiJ9