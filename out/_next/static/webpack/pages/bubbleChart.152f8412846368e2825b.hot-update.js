webpackHotUpdate_N_E("pages/bubbleChart",{

/***/ "./src/pages/bubbleChart.tsx":
/*!***********************************!*\
  !*** ./src/pages/bubbleChart.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var src_components_charts_bubbleChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/charts/bubbleChart */ "./src/components/charts/bubbleChart/index.tsx");
/* harmony import */ var src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/util/getInteger */ "./src/util/getInteger.ts");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\pages\\bubbleChart.tsx",
    _this = undefined;






var ToolTip = function ToolTip(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      background: '#fff',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: 700
    },
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = ToolTip;

var BubbleChartPage = function BubbleChartPage() {
  var getChartData = function getChartData() {
    var x = Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(500);
    var y = -x + 400 + Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(300);
    var r = 5 + Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(40);
    return {
      point: {
        x: x,
        y: y
      },
      r: r,
      fill: "#".concat(Math.round(Math.random() * 0xFFFFFF).toString(16)),
      toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ToolTip, {
        title: "x: ".concat(x, " y: ").concat(y, " r: ").concat(r)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 16
      }, _this),
      title: ''
    };
  };

  var getChartDataList = function getChartDataList() {
    return new Array(30).fill({}).map(function () {
      return getChartData();
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_bubbleChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
        canvasWidth: 700,
        canvasHeight: 500,
        chartDataList: getChartDataList()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_c2 = BubbleChartPage;
/* harmony default export */ __webpack_exports__["default"] = (BubbleChartPage);

var _c, _c2;

$RefreshReg$(_c, "ToolTip");
$RefreshReg$(_c2, "BubbleChartPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2J1YmJsZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUb29sVGlwIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIkJ1YmJsZUNoYXJ0UGFnZSIsImdldENoYXJ0RGF0YSIsIngiLCJnZXRJbnRlZ2VyIiwieSIsInIiLCJwb2ludCIsImZpbGwiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJ0b1N0cmluZyIsInRvb2xUaXAiLCJnZXRDaGFydERhdGFMaXN0IiwiQXJyYXkiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFrQztBQUFBLE1BQS9CQyxLQUErQixRQUEvQkEsS0FBK0I7QUFDaEQsc0JBQ0U7QUFBSyxTQUFLLEVBQ1I7QUFDRUMsZ0JBQVUsRUFBRSxNQURkO0FBRUVDLGtCQUFZLEVBQUUsS0FGaEI7QUFHRUMsYUFBTyxFQUFFLFdBSFg7QUFJRUMsY0FBUSxFQUFFLE1BSlo7QUFLRUMsZ0JBQVUsRUFBRTtBQUxkLEtBREY7QUFBQSxjQVVHTDtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBZkQ7O0tBQU1ELE87O0FBaUJOLElBQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUU1QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQU1DLENBQUMsR0FBR0Msc0VBQVUsQ0FBQyxHQUFELENBQXBCO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHLENBQUNGLENBQUQsR0FBSyxHQUFMLEdBQVdDLHNFQUFVLENBQUMsR0FBRCxDQUEvQjtBQUNBLFFBQU1FLENBQUMsR0FBRyxJQUFJRixzRUFBVSxDQUFDLEVBQUQsQ0FBeEI7QUFDQSxXQUFPO0FBQ0xHLFdBQUssRUFBRTtBQUNMSixTQUFDLEVBQUVBLENBREU7QUFFTEUsU0FBQyxFQUFFQTtBQUZFLE9BREY7QUFLTEMsT0FBQyxFQUFFQSxDQUxFO0FBTUxFLFVBQUksYUFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixRQUEzQixFQUFxQ0MsUUFBckMsQ0FBOEMsRUFBOUMsQ0FBTixDQU5DO0FBT0xDLGFBQU8sZUFBRSxxRUFBQyxPQUFEO0FBQVMsYUFBSyxlQUFRVixDQUFSLGlCQUFnQkUsQ0FBaEIsaUJBQXdCQyxDQUF4QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQVFMWCxXQUFLLEVBQUU7QUFSRixLQUFQO0FBVUQsR0FkRDs7QUFnQkEsTUFBTW1CLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixXQUFPLElBQUlDLEtBQUosQ0FBVSxFQUFWLEVBQWNQLElBQWQsQ0FBbUIsRUFBbkIsRUFBdUJRLEdBQXZCLENBQTJCO0FBQUEsYUFBTWQsWUFBWSxFQUFsQjtBQUFBLEtBQTNCLENBQVA7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBQSw2QkFDRSxxRUFBQyx5RUFBRDtBQUNFLG1CQUFXLEVBQUUsR0FEZjtBQUVFLG9CQUFZLEVBQUUsR0FGaEI7QUFHRSxxQkFBYSxFQUFFWSxnQkFBZ0I7QUFIakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWpDRDs7TUFBTWIsZTtBQW1DU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnViYmxlQ2hhcnQuMTUyZjg0MTI4NDYzNjhlMjgyNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250ZW50cyBmcm9tIFwiQGNvbXBvbmVudHMvY29udGVudHNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiQGNvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgQnViYmxlQ2hhciBmcm9tIFwic3JjL2NvbXBvbmVudHMvY2hhcnRzL2J1YmJsZUNoYXJ0XCI7XHJcbmltcG9ydCB7IGdldEludGVnZXIgfSBmcm9tIFwic3JjL3V0aWwvZ2V0SW50ZWdlclwiO1xyXG5cclxuY29uc3QgVG9vbFRpcCA9ICh7IHRpdGxlIH06IHsgdGl0bGU6IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e1xyXG4gICAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzEwcHggMjBweCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcblxyXG4gICAgICB9XHJcbiAgICB9PlxyXG4gICAgICB7dGl0bGV9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJ1YmJsZUNoYXJ0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZ2V0Q2hhcnREYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeCA9IGdldEludGVnZXIoNTAwKTtcclxuICAgIGNvbnN0IHkgPSAteCArIDQwMCArIGdldEludGVnZXIoMzAwKTtcclxuICAgIGNvbnN0IHIgPSA1ICsgZ2V0SW50ZWdlcig0MCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb2ludDoge1xyXG4gICAgICAgIHg6IHgsXHJcbiAgICAgICAgeTogeSxcclxuICAgICAgfSxcclxuICAgICAgcjogcixcclxuICAgICAgZmlsbDogYCMke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDB4RkZGRkZGKS50b1N0cmluZygxNil9YCxcclxuICAgICAgdG9vbFRpcDogPFRvb2xUaXAgdGl0bGU9e2B4OiAke3h9IHk6ICR7eX0gcjogJHtyfWB9Lz4sXHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENoYXJ0RGF0YUxpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KDMwKS5maWxsKHt9KS5tYXAoKCkgPT4gZ2V0Q2hhcnREYXRhKCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxDb250ZW50cz5cclxuICAgICAgICA8QnViYmxlQ2hhclxyXG4gICAgICAgICAgY2FudmFzV2lkdGg9ezcwMH1cclxuICAgICAgICAgIGNhbnZhc0hlaWdodD17NTAwfVxyXG4gICAgICAgICAgY2hhcnREYXRhTGlzdD17Z2V0Q2hhcnREYXRhTGlzdCgpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGVudHM+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1YmJsZUNoYXJ0UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9