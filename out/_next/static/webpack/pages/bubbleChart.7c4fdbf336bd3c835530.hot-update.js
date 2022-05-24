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
  var getChartDataList = function getChartDataList() {
    return new Array(30).fill({
      point: {},
      r: 10 + Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(20)
    });
    return [{
      point: {
        x: 230,
        y: 420
      },
      r: 20,
      fill: '#FFD400',
      title: '111',
      toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ToolTip, {
        title: 'x: 230, y: 420'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 18
      }, _this)
    }];
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_bubbleChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
        canvasWidth: 700,
        canvasHeight: 500,
        chartDataList: getChartDataList()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2J1YmJsZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUb29sVGlwIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIkJ1YmJsZUNoYXJ0UGFnZSIsImdldENoYXJ0RGF0YUxpc3QiLCJBcnJheSIsImZpbGwiLCJwb2ludCIsInIiLCJnZXRJbnRlZ2VyIiwieCIsInkiLCJ0b29sVGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBa0M7QUFBQSxNQUEvQkMsS0FBK0IsUUFBL0JBLEtBQStCO0FBQ2hELHNCQUNFO0FBQUssU0FBSyxFQUNSO0FBQ0VDLGdCQUFVLEVBQUUsTUFEZDtBQUVFQyxrQkFBWSxFQUFFLEtBRmhCO0FBR0VDLGFBQU8sRUFBRSxXQUhYO0FBSUVDLGNBQVEsRUFBRSxNQUpaO0FBS0VDLGdCQUFVLEVBQUU7QUFMZCxLQURGO0FBQUEsY0FVR0w7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWZEOztLQUFNRCxPOztBQWlCTixJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFFNUIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFdBQU8sSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBY0MsSUFBZCxDQUFtQjtBQUN4QkMsV0FBSyxFQUFFLEVBRGlCO0FBRXhCQyxPQUFDLEVBQUUsS0FBS0Msc0VBQVUsQ0FBQyxFQUFEO0FBRk0sS0FBbkIsQ0FBUDtBQUtBLFdBQU8sQ0FDTDtBQUNFRixXQUFLLEVBQUU7QUFBRUcsU0FBQyxFQUFFLEdBQUw7QUFBVUMsU0FBQyxFQUFFO0FBQWIsT0FEVDtBQUM2QkgsT0FBQyxFQUFFLEVBRGhDO0FBQ29DRixVQUFJLEVBQUUsU0FEMUM7QUFDcURULFdBQUssRUFBRSxLQUQ1RDtBQUVFZSxhQUFPLGVBQUUscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlgsS0FESyxDQUFQO0FBTUQsR0FaRDs7QUFjQSxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQUEsNkJBQ0UscUVBQUMseUVBQUQ7QUFDRSxtQkFBVyxFQUFFLEdBRGY7QUFFRSxvQkFBWSxFQUFFLEdBRmhCO0FBR0UscUJBQWEsRUFBRVIsZ0JBQWdCO0FBSGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0EzQkQ7O01BQU1ELGU7QUE2QlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1YmJsZUNoYXJ0LjdjNGZkYmYzMzZiZDNjODM1NTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGVudHMgZnJvbSBcIkBjb21wb25lbnRzL2NvbnRlbnRzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIkBjb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IEJ1YmJsZUNoYXIgZnJvbSBcInNyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGVDaGFydFwiO1xyXG5pbXBvcnQgeyBnZXRJbnRlZ2VyIH0gZnJvbSBcInNyYy91dGlsL2dldEludGVnZXJcIjtcclxuXHJcbmNvbnN0IFRvb2xUaXAgPSAoeyB0aXRsZSB9OiB7IHRpdGxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtcclxuICAgICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG5cclxuICAgICAgfVxyXG4gICAgfT5cclxuICAgICAge3RpdGxlfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdWJibGVDaGFydFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGdldENoYXJ0RGF0YUxpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KDMwKS5maWxsKHtcclxuICAgICAgcG9pbnQ6IHt9LFxyXG4gICAgICByOiAxMCArIGdldEludGVnZXIoMjApXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgcG9pbnQ6IHsgeDogMjMwLCB5OiA0MjAgfSwgcjogMjAsIGZpbGw6ICcjRkZENDAwJywgdGl0bGU6ICcxMTEnLFxyXG4gICAgICAgIHRvb2xUaXA6IDxUb29sVGlwIHRpdGxlPXsneDogMjMwLCB5OiA0MjAnfSAvPlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbnRlbnRzPlxyXG4gICAgICAgIDxCdWJibGVDaGFyXHJcbiAgICAgICAgICBjYW52YXNXaWR0aD17NzAwfVxyXG4gICAgICAgICAgY2FudmFzSGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICBjaGFydERhdGFMaXN0PXtnZXRDaGFydERhdGFMaXN0KCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250ZW50cz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlQ2hhcnRQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=