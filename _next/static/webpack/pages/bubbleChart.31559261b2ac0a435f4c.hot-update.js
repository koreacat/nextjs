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
    return {
      point: {
        x: Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(400),
        y: Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(400)
      },
      r: 5 + Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(50),
      fill: '#ffd400',
      toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ToolTip, {
        title: ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 16
      }, _this)
    };
  };

  var getChartDataList = function getChartDataList() {
    console.log();
    return new Array(30).map(function () {
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
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2J1YmJsZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUb29sVGlwIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIkJ1YmJsZUNoYXJ0UGFnZSIsImdldENoYXJ0RGF0YSIsInBvaW50IiwieCIsImdldEludGVnZXIiLCJ5IiwiciIsImZpbGwiLCJ0b29sVGlwIiwiZ2V0Q2hhcnREYXRhTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJBcnJheSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWtDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUNoRCxzQkFDRTtBQUFLLFNBQUssRUFDUjtBQUNFQyxnQkFBVSxFQUFFLE1BRGQ7QUFFRUMsa0JBQVksRUFBRSxLQUZoQjtBQUdFQyxhQUFPLEVBQUUsV0FIWDtBQUlFQyxjQUFRLEVBQUUsTUFKWjtBQUtFQyxnQkFBVSxFQUFFO0FBTGQsS0FERjtBQUFBLGNBVUdMO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FmRDs7S0FBTUQsTzs7QUFpQk4sSUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBRTVCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsV0FBTztBQUNMQyxXQUFLLEVBQUU7QUFDTEMsU0FBQyxFQUFFQyxzRUFBVSxDQUFDLEdBQUQsQ0FEUjtBQUVMQyxTQUFDLEVBQUVELHNFQUFVLENBQUMsR0FBRDtBQUZSLE9BREY7QUFLTEUsT0FBQyxFQUFFLElBQUlGLHNFQUFVLENBQUMsRUFBRCxDQUxaO0FBTUxHLFVBQUksRUFBRSxTQU5EO0FBT0xDLGFBQU8sZUFBRSxxRUFBQyxPQUFEO0FBQVMsYUFBSyxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSixLQUFQO0FBU0QsR0FWRDs7QUFZQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUjtBQUNBLFdBQU8sSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBY0MsR0FBZCxDQUFrQjtBQUFBLGFBQU1aLFlBQVksRUFBbEI7QUFBQSxLQUFsQixDQUFQO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQUEsNkJBQ0UscUVBQUMseUVBQUQ7QUFDRSxtQkFBVyxFQUFFLEdBRGY7QUFFRSxvQkFBWSxFQUFFLEdBRmhCO0FBR0UscUJBQWEsRUFBRVEsZ0JBQWdCO0FBSGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0E5QkQ7O01BQU1ULGU7QUFnQ1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1YmJsZUNoYXJ0LjMxNTU5MjYxYjJhYzBhNDM1ZjRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGVudHMgZnJvbSBcIkBjb21wb25lbnRzL2NvbnRlbnRzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIkBjb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IEJ1YmJsZUNoYXIgZnJvbSBcInNyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGVDaGFydFwiO1xyXG5pbXBvcnQgeyBnZXRJbnRlZ2VyIH0gZnJvbSBcInNyYy91dGlsL2dldEludGVnZXJcIjtcclxuXHJcbmNvbnN0IFRvb2xUaXAgPSAoeyB0aXRsZSB9OiB7IHRpdGxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtcclxuICAgICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG5cclxuICAgICAgfVxyXG4gICAgfT5cclxuICAgICAge3RpdGxlfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdWJibGVDaGFydFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGdldENoYXJ0RGF0YSA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvaW50OiB7XHJcbiAgICAgICAgeDogZ2V0SW50ZWdlcig0MDApLFxyXG4gICAgICAgIHk6IGdldEludGVnZXIoNDAwKSxcclxuICAgICAgfSxcclxuICAgICAgcjogNSArIGdldEludGVnZXIoNTApLFxyXG4gICAgICBmaWxsOiAnI2ZmZDQwMCcsXHJcbiAgICAgIHRvb2xUaXA6IDxUb29sVGlwIHRpdGxlPXsnJ30vPlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2hhcnREYXRhTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KDMwKS5tYXAoKCkgPT4gZ2V0Q2hhcnREYXRhKCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxDb250ZW50cz5cclxuICAgICAgICA8QnViYmxlQ2hhclxyXG4gICAgICAgICAgY2FudmFzV2lkdGg9ezcwMH1cclxuICAgICAgICAgIGNhbnZhc0hlaWdodD17NTAwfVxyXG4gICAgICAgICAgY2hhcnREYXRhTGlzdD17Z2V0Q2hhcnREYXRhTGlzdCgpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGVudHM+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1YmJsZUNoYXJ0UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9