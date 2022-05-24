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
    var x = Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(600);
    var y = Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(600);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2J1YmJsZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUb29sVGlwIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIkJ1YmJsZUNoYXJ0UGFnZSIsImdldENoYXJ0RGF0YSIsIngiLCJnZXRJbnRlZ2VyIiwieSIsInIiLCJwb2ludCIsImZpbGwiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJ0b1N0cmluZyIsInRvb2xUaXAiLCJnZXRDaGFydERhdGFMaXN0IiwiQXJyYXkiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFrQztBQUFBLE1BQS9CQyxLQUErQixRQUEvQkEsS0FBK0I7QUFDaEQsc0JBQ0U7QUFBSyxTQUFLLEVBQ1I7QUFDRUMsZ0JBQVUsRUFBRSxNQURkO0FBRUVDLGtCQUFZLEVBQUUsS0FGaEI7QUFHRUMsYUFBTyxFQUFFLFdBSFg7QUFJRUMsY0FBUSxFQUFFLE1BSlo7QUFLRUMsZ0JBQVUsRUFBRTtBQUxkLEtBREY7QUFBQSxjQVVHTDtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBZkQ7O0tBQU1ELE87O0FBaUJOLElBQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUU1QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQU1DLENBQUMsR0FBR0Msc0VBQVUsQ0FBQyxHQUFELENBQXBCO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHRCxzRUFBVSxDQUFDLEdBQUQsQ0FBcEI7QUFDQSxRQUFNRSxDQUFDLEdBQUcsSUFBSUYsc0VBQVUsQ0FBQyxFQUFELENBQXhCO0FBQ0EsV0FBTztBQUNMRyxXQUFLLEVBQUU7QUFDTEosU0FBQyxFQUFFQSxDQURFO0FBRUxFLFNBQUMsRUFBRUE7QUFGRSxPQURGO0FBS0xDLE9BQUMsRUFBRUEsQ0FMRTtBQU1MRSxVQUFJLGFBQU1DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsUUFBM0IsRUFBcUNDLFFBQXJDLENBQThDLEVBQTlDLENBQU4sQ0FOQztBQU9MQyxhQUFPLGVBQUUscUVBQUMsT0FBRDtBQUFTLGFBQUssZUFBUVYsQ0FBUixpQkFBZ0JFLENBQWhCLGlCQUF3QkMsQ0FBeEI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFRTFgsV0FBSyxFQUFFO0FBUkYsS0FBUDtBQVVELEdBZEQ7O0FBZ0JBLE1BQU1tQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsV0FBTyxJQUFJQyxLQUFKLENBQVUsRUFBVixFQUFjUCxJQUFkLENBQW1CLEVBQW5CLEVBQXVCUSxHQUF2QixDQUEyQjtBQUFBLGFBQU1kLFlBQVksRUFBbEI7QUFBQSxLQUEzQixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQUEsNkJBQ0UscUVBQUMseUVBQUQ7QUFDRSxtQkFBVyxFQUFFLEdBRGY7QUFFRSxvQkFBWSxFQUFFLEdBRmhCO0FBR0UscUJBQWEsRUFBRVksZ0JBQWdCO0FBSGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FqQ0Q7O01BQU1iLGU7QUFtQ1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1YmJsZUNoYXJ0LjRhN2NlZmI1MTQyZTQ3MzE2YWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGVudHMgZnJvbSBcIkBjb21wb25lbnRzL2NvbnRlbnRzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIkBjb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IEJ1YmJsZUNoYXIgZnJvbSBcInNyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGVDaGFydFwiO1xyXG5pbXBvcnQgeyBnZXRJbnRlZ2VyIH0gZnJvbSBcInNyYy91dGlsL2dldEludGVnZXJcIjtcclxuXHJcbmNvbnN0IFRvb2xUaXAgPSAoeyB0aXRsZSB9OiB7IHRpdGxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtcclxuICAgICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG5cclxuICAgICAgfVxyXG4gICAgfT5cclxuICAgICAge3RpdGxlfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdWJibGVDaGFydFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGdldENoYXJ0RGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHggPSBnZXRJbnRlZ2VyKDYwMCk7XHJcbiAgICBjb25zdCB5ID0gZ2V0SW50ZWdlcig2MDApO1xyXG4gICAgY29uc3QgciA9IDUgKyBnZXRJbnRlZ2VyKDQwKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvaW50OiB7XHJcbiAgICAgICAgeDogeCxcclxuICAgICAgICB5OiB5LFxyXG4gICAgICB9LFxyXG4gICAgICByOiByLFxyXG4gICAgICBmaWxsOiBgIyR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYpLnRvU3RyaW5nKDE2KX1gLFxyXG4gICAgICB0b29sVGlwOiA8VG9vbFRpcCB0aXRsZT17YHg6ICR7eH0geTogJHt5fSByOiAke3J9YH0vPixcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2hhcnREYXRhTGlzdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkoMzApLmZpbGwoe30pLm1hcCgoKSA9PiBnZXRDaGFydERhdGEoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbnRlbnRzPlxyXG4gICAgICAgIDxCdWJibGVDaGFyXHJcbiAgICAgICAgICBjYW52YXNXaWR0aD17NzAwfVxyXG4gICAgICAgICAgY2FudmFzSGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICBjaGFydERhdGFMaXN0PXtnZXRDaGFydERhdGFMaXN0KCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250ZW50cz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlQ2hhcnRQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=