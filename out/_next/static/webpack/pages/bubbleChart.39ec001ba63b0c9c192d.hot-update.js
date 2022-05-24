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
    var n = Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(600);
    return {
      point: {
        x: n,
        y: n
      },
      r: 5 + Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(40),
      fill: "#".concat(Math.round(Math.random() * 0xFFFFFF).toString(16)),
      toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ToolTip, {
        title: ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
        lineNumber: 47,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2J1YmJsZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUb29sVGlwIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIkJ1YmJsZUNoYXJ0UGFnZSIsImdldENoYXJ0RGF0YSIsIm4iLCJnZXRJbnRlZ2VyIiwicG9pbnQiLCJ4IiwieSIsInIiLCJmaWxsIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwidG9TdHJpbmciLCJ0b29sVGlwIiwiZ2V0Q2hhcnREYXRhTGlzdCIsIkFycmF5IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBa0M7QUFBQSxNQUEvQkMsS0FBK0IsUUFBL0JBLEtBQStCO0FBQ2hELHNCQUNFO0FBQUssU0FBSyxFQUNSO0FBQ0VDLGdCQUFVLEVBQUUsTUFEZDtBQUVFQyxrQkFBWSxFQUFFLEtBRmhCO0FBR0VDLGFBQU8sRUFBRSxXQUhYO0FBSUVDLGNBQVEsRUFBRSxNQUpaO0FBS0VDLGdCQUFVLEVBQUU7QUFMZCxLQURGO0FBQUEsY0FVR0w7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWZEOztLQUFNRCxPOztBQWlCTixJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFFNUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFNQyxDQUFDLEdBQUdDLHNFQUFVLENBQUMsR0FBRCxDQUFwQjtBQUNBLFdBQU87QUFDTEMsV0FBSyxFQUFFO0FBQ0xDLFNBQUMsRUFBRUgsQ0FERTtBQUVMSSxTQUFDLEVBQUVKO0FBRkUsT0FERjtBQUtMSyxPQUFDLEVBQUUsSUFBSUosc0VBQVUsQ0FBQyxFQUFELENBTFo7QUFNTEssVUFBSSxhQUFNQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLFFBQTNCLEVBQXFDQyxRQUFyQyxDQUE4QyxFQUE5QyxDQUFOLENBTkM7QUFPTEMsYUFBTyxlQUFFLHFFQUFDLE9BQUQ7QUFBUyxhQUFLLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKO0FBUUxuQixXQUFLLEVBQUU7QUFSRixLQUFQO0FBVUQsR0FaRDs7QUFjQSxNQUFNb0IsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFdBQU8sSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBY1AsSUFBZCxDQUFtQixFQUFuQixFQUF1QlEsR0FBdkIsQ0FBMkI7QUFBQSxhQUFNZixZQUFZLEVBQWxCO0FBQUEsS0FBM0IsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRSxxRUFBQyw0REFBRDtBQUFBLDZCQUNFLHFFQUFDLHlFQUFEO0FBQ0UsbUJBQVcsRUFBRSxHQURmO0FBRUUsb0JBQVksRUFBRSxHQUZoQjtBQUdFLHFCQUFhLEVBQUVhLGdCQUFnQjtBQUhqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBL0JEOztNQUFNZCxlO0FBaUNTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idWJibGVDaGFydC4zOWVjMDAxYmE2M2IwYzljMTkyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRlbnRzIGZyb20gXCJAY29tcG9uZW50cy9jb250ZW50c1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAY29tcG9uZW50cy9mb290ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBCdWJibGVDaGFyIGZyb20gXCJzcmMvY29tcG9uZW50cy9jaGFydHMvYnViYmxlQ2hhcnRcIjtcclxuaW1wb3J0IHsgZ2V0SW50ZWdlciB9IGZyb20gXCJzcmMvdXRpbC9nZXRJbnRlZ2VyXCI7XHJcblxyXG5jb25zdCBUb29sVGlwID0gKHsgdGl0bGUgfTogeyB0aXRsZTogc3RyaW5nIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17XHJcbiAgICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuXHJcbiAgICAgIH1cclxuICAgIH0+XHJcbiAgICAgIHt0aXRsZX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQnViYmxlQ2hhcnRQYWdlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBnZXRDaGFydERhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuID0gZ2V0SW50ZWdlcig2MDApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9pbnQ6IHtcclxuICAgICAgICB4OiBuLFxyXG4gICAgICAgIHk6IG4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHI6IDUgKyBnZXRJbnRlZ2VyKDQwKSxcclxuICAgICAgZmlsbDogYCMke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDB4RkZGRkZGKS50b1N0cmluZygxNil9YCxcclxuICAgICAgdG9vbFRpcDogPFRvb2xUaXAgdGl0bGU9eycnfS8+LFxyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDaGFydERhdGFMaXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheSgzMCkuZmlsbCh7fSkubWFwKCgpID0+IGdldENoYXJ0RGF0YSgpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Q29udGVudHM+XHJcbiAgICAgICAgPEJ1YmJsZUNoYXJcclxuICAgICAgICAgIGNhbnZhc1dpZHRoPXs3MDB9XHJcbiAgICAgICAgICBjYW52YXNIZWlnaHQ9ezUwMH1cclxuICAgICAgICAgIGNoYXJ0RGF0YUxpc3Q9e2dldENoYXJ0RGF0YUxpc3QoKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWJibGVDaGFydFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==