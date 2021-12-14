webpackHotUpdate_N_E(1,{

/***/ "./src/components/maskInteraction/interaction/Background.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/maskInteraction/interaction/Background.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inlet/react-pixi */ "./node_modules/@inlet/react-pixi/module.js");
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/components/maskInteraction/interaction/data.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/dist/esm/pixi.js");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\maskInteraction\\interaction\\Background.tsx",
    _this = undefined,
    _s = $RefreshSig$();






// 검정색 배경
var Background = function Background(_ref) {
  _s();

  var backgroundRef = _ref.backgroundRef,
      frames = _ref.frames;
  var aniRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  var onScroll = function onScroll() {
    var scrollTop = window.scrollY || window.pageYOffset;

    if (aniRef.current && scrollTop < _data__WEBPACK_IMPORTED_MODULE_3__["TotalFrameCount"] * 100 + 100) {
      aniRef.current.gotoAndStop(scrollTop / 100);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    ref: backgroundRef,
    width: _data__WEBPACK_IMPORTED_MODULE_3__["ContainerWidth"],
    height: _data__WEBPACK_IMPORTED_MODULE_3__["ContainerHeight"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      text: '취업의\n상식',
      y: 162,
      style: new pixi_js__WEBPACK_IMPORTED_MODULE_4__["TextStyle"]({
        fontFamily: 'Pretendard',
        fontSize: 120,
        fontWeight: '800',
        lineHeight: 152,
        letterSpacing: 0.2,
        fill: 0xffffff
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__["Graphics"], {
      x: 269,
      y: 418,
      draw: function draw(g) {
        g.clear();
        g.moveTo(0, 0);
        g.beginFill(0x6cdd83, 1);
        g.drawCircle(0, 0, 20);
        g.endFill();
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__["Sprite"], {
      image: '/nextjs/assets/mainInteraction/iconMouse.png',
      x: 4,
      y: 480,
      scale: 0.55
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), frames.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__["AnimatedSprite"], {
      ref: aniRef,
      position: [54, 204],
      textures: frames,
      isPlaying: false,
      initialFrame: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(Background, "sdOX1s0evCN6gO4BTQQ3On5KO5s=");

_c = Background;
/* harmony default export */ __webpack_exports__["default"] = (Background);

var _c;

$RefreshReg$(_c, "Background");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFza0ludGVyYWN0aW9uL2ludGVyYWN0aW9uL0JhY2tncm91bmQudHN4Il0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kUmVmIiwiZnJhbWVzIiwiYW5pUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvcCIsInNjcm9sbFkiLCJwYWdlWU9mZnNldCIsImN1cnJlbnQiLCJUb3RhbEZyYW1lQ291bnQiLCJnb3RvQW5kU3RvcCIsIkNvbnRhaW5lcldpZHRoIiwiQ29udGFpbmVySGVpZ2h0IiwiUElYSSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImZpbGwiLCJnIiwiY2xlYXIiLCJtb3ZlVG8iLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU9BO0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0Q7QUFBQTs7QUFBQSxNQUE3Q0MsYUFBNkMsUUFBN0NBLGFBQTZDO0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUNqRSxNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQXlCLElBQXpCLENBQXJCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxRQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYRixZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxRQUFyQztBQUNELEtBRkQ7QUFHRCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUUsU0FBUyxHQUFHSixNQUFNLENBQUNLLE9BQVAsSUFBa0JMLE1BQU0sQ0FBQ00sV0FBM0M7O0FBRUEsUUFBSVQsTUFBTSxDQUFDVSxPQUFQLElBQWtCSCxTQUFTLEdBQUdJLHFEQUFlLEdBQUcsR0FBbEIsR0FBd0IsR0FBMUQsRUFBK0Q7QUFDN0RYLFlBQU0sQ0FBQ1UsT0FBUCxDQUFlRSxXQUFmLENBQTJCTCxTQUFTLEdBQUcsR0FBdkM7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBVyxPQUFHLEVBQUVULGFBQWhCO0FBQStCLFNBQUssRUFBRWUsb0RBQXRDO0FBQXNELFVBQU0sRUFBRUMscURBQTlEO0FBQUEsNEJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUUsU0FEUjtBQUVFLE9BQUMsRUFBRSxHQUZMO0FBR0UsV0FBSyxFQUNILElBQUlDLGlEQUFKLENBQW1CO0FBQ2pCQyxrQkFBVSxFQUFFLFlBREs7QUFFakJDLGdCQUFRLEVBQUUsR0FGTztBQUdqQkMsa0JBQVUsRUFBRSxLQUhLO0FBSWpCQyxrQkFBVSxFQUFFLEdBSks7QUFLakJDLHFCQUFhLEVBQUUsR0FMRTtBQU1qQkMsWUFBSSxFQUFFO0FBTlcsT0FBbkI7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFnQkUscUVBQUMsMERBQUQ7QUFDRSxPQUFDLEVBQUUsR0FETDtBQUVFLE9BQUMsRUFBRSxHQUZMO0FBR0UsVUFBSSxFQUFFLGNBQUNDLENBQUQsRUFBTztBQUNYQSxTQUFDLENBQUNDLEtBQUY7QUFDQUQsU0FBQyxDQUFDRSxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVo7QUFDQUYsU0FBQyxDQUFDRyxTQUFGLENBQVksUUFBWixFQUFzQixDQUF0QjtBQUNBSCxTQUFDLENBQUNJLFVBQUYsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEVBQW5CO0FBQ0FKLFNBQUMsQ0FBQ0ssT0FBRjtBQUNEO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRixlQTRCRSxxRUFBQyx3REFBRDtBQUNFLFdBQUssRUFBRSw4Q0FEVDtBQUVFLE9BQUMsRUFBRSxDQUZMO0FBR0UsT0FBQyxFQUFFLEdBSEw7QUFJRSxXQUFLLEVBQUU7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJGLEVBbUNHNUIsTUFBTSxDQUFDNkIsTUFBUCxLQUFrQixDQUFsQixpQkFDQyxxRUFBQyxnRUFBRDtBQUFnQixTQUFHLEVBQUU1QixNQUFyQjtBQUE2QixjQUFRLEVBQUUsQ0FBQyxFQUFELEVBQUssR0FBTCxDQUF2QztBQUFrRCxjQUFRLEVBQUVELE1BQTVEO0FBQW9FLGVBQVMsRUFBRSxLQUEvRTtBQUFzRixrQkFBWSxFQUFFO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0QsQ0E1REQ7O0dBQU1GLFU7O0tBQUFBLFU7QUE4RFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuOTNkZDk2OWIzOGI0NTQ0NzYwZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5pbWF0ZWRTcHJpdGUsIENvbnRhaW5lciwgR3JhcGhpY3MsIFNwcml0ZSwgVGV4dH0gZnJvbSAnQGlubGV0L3JlYWN0LXBpeGknO1xyXG5pbXBvcnQgUmVhY3QsIHsgTXV0YWJsZVJlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29udGFpbmVySGVpZ2h0LCBDb250YWluZXJXaWR0aCwgVG90YWxGcmFtZUNvdW50LCBJQW5pbWF0ZWRTcHJpdGUsIElDb250YWluZXJ9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcblxyXG5pbnRlcmZhY2UgQmFja2dyb3VuZFByb3BzIHtcclxuICBiYWNrZ3JvdW5kUmVmOiBNdXRhYmxlUmVmT2JqZWN0PElDb250YWluZXIgfCBudWxsPjtcclxuICBmcmFtZXM6IFtdO1xyXG59XHJcblxyXG4vLyDqsoDsoJXsg4kg67Cw6rK9XHJcbmNvbnN0IEJhY2tncm91bmQgPSAoeyBiYWNrZ3JvdW5kUmVmLCBmcmFtZXMgfTogQmFja2dyb3VuZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgYW5pUmVmID0gdXNlUmVmPElBbmltYXRlZFNwcml0ZSB8IG51bGw+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgIGlmIChhbmlSZWYuY3VycmVudCAmJiBzY3JvbGxUb3AgPCBUb3RhbEZyYW1lQ291bnQgKiAxMDAgKyAxMDApIHtcclxuICAgICAgYW5pUmVmLmN1cnJlbnQuZ290b0FuZFN0b3Aoc2Nyb2xsVG9wIC8gMTAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciByZWY9e2JhY2tncm91bmRSZWZ9IHdpZHRoPXtDb250YWluZXJXaWR0aH0gaGVpZ2h0PXtDb250YWluZXJIZWlnaHR9PlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIHRleHQ9eyfst6jsl4XsnZhcXG7sg4Hsi50nfVxyXG4gICAgICAgIHk9ezE2Mn1cclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnUHJldGVuZGFyZCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMjAsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc4MDAnLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxNTIsXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IDAuMixcclxuICAgICAgICAgICAgZmlsbDogMHhmZmZmZmYsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxHcmFwaGljc1xyXG4gICAgICAgIHg9ezI2OX1cclxuICAgICAgICB5PXs0MTh9XHJcbiAgICAgICAgZHJhdz17KGcpID0+IHtcclxuICAgICAgICAgIGcuY2xlYXIoKTtcclxuICAgICAgICAgIGcubW92ZVRvKDAsIDApO1xyXG4gICAgICAgICAgZy5iZWdpbkZpbGwoMHg2Y2RkODMsIDEpO1xyXG4gICAgICAgICAgZy5kcmF3Q2lyY2xlKDAsIDAsIDIwKTtcclxuICAgICAgICAgIGcuZW5kRmlsbCgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8U3ByaXRlXHJcbiAgICAgICAgaW1hZ2U9eycvbmV4dGpzL2Fzc2V0cy9tYWluSW50ZXJhY3Rpb24vaWNvbk1vdXNlLnBuZyd9XHJcbiAgICAgICAgeD17NH1cclxuICAgICAgICB5PXs0ODB9XHJcbiAgICAgICAgc2NhbGU9ezAuNTV9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7ZnJhbWVzLmxlbmd0aCAhPT0gMCAmJiAoXHJcbiAgICAgICAgPEFuaW1hdGVkU3ByaXRlIHJlZj17YW5pUmVmfSBwb3NpdGlvbj17WzU0LCAyMDRdfSB0ZXh0dXJlcz17ZnJhbWVzfSBpc1BsYXlpbmc9e2ZhbHNlfSBpbml0aWFsRnJhbWU9ezB9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==