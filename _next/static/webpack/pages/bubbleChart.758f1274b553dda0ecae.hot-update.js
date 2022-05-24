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
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = ToolTip;

var BubbleChartPage = function BubbleChartPage() {
  var getChartData = function getChartData() {
    var x = 100 + Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(500);
    var y = -x + 500 + Object(src_util_getInteger__WEBPACK_IMPORTED_MODULE_4__["getInteger"])(400);
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
        lineNumber: 36,
        columnNumber: 16
      }, _this),
      title: ''
    };
  };

  var getChartDataList = function getChartDataList() {
    return new Array(50).fill({}).map(function () {
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
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2J1YmJsZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUb29sVGlwIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIkJ1YmJsZUNoYXJ0UGFnZSIsImdldENoYXJ0RGF0YSIsIngiLCJnZXRJbnRlZ2VyIiwieSIsInIiLCJwb2ludCIsImZpbGwiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJ0b1N0cmluZyIsInRvb2xUaXAiLCJnZXRDaGFydERhdGFMaXN0IiwiQXJyYXkiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFrQztBQUFBLE1BQS9CQyxLQUErQixRQUEvQkEsS0FBK0I7QUFDaEQsc0JBQ0U7QUFBSyxTQUFLLEVBQ1I7QUFDRUMsZ0JBQVUsRUFBRSxNQURkO0FBRUVDLGtCQUFZLEVBQUUsS0FGaEI7QUFHRUMsYUFBTyxFQUFFLFdBSFg7QUFJRUMsY0FBUSxFQUFFLE1BSlo7QUFLRUMsZ0JBQVUsRUFBRTtBQUxkLEtBREY7QUFBQSxjQVVHTDtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBZkQ7O0tBQU1ELE87O0FBaUJOLElBQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUU1QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQU1DLENBQUMsR0FBRyxNQUFNQyxzRUFBVSxDQUFDLEdBQUQsQ0FBMUI7QUFDQSxRQUFNQyxDQUFDLEdBQUcsQ0FBQ0YsQ0FBRCxHQUFLLEdBQUwsR0FBV0Msc0VBQVUsQ0FBQyxHQUFELENBQS9CO0FBQ0EsUUFBTUUsQ0FBQyxHQUFHLElBQUlGLHNFQUFVLENBQUMsRUFBRCxDQUF4QjtBQUNBLFdBQU87QUFDTEcsV0FBSyxFQUFFO0FBQ0xKLFNBQUMsRUFBRUEsQ0FERTtBQUVMRSxTQUFDLEVBQUVBO0FBRkUsT0FERjtBQUtMQyxPQUFDLEVBQUVBLENBTEU7QUFNTEUsVUFBSSxhQUFNQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLFFBQTNCLEVBQXFDQyxRQUFyQyxDQUE4QyxFQUE5QyxDQUFOLENBTkM7QUFPTEMsYUFBTyxlQUFFLHFFQUFDLE9BQUQ7QUFBUyxhQUFLLGVBQVFWLENBQVIsaUJBQWdCRSxDQUFoQixpQkFBd0JDLENBQXhCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKO0FBUUxYLFdBQUssRUFBRTtBQVJGLEtBQVA7QUFVRCxHQWREOztBQWdCQSxNQUFNbUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFdBQU8sSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBY1AsSUFBZCxDQUFtQixFQUFuQixFQUF1QlEsR0FBdkIsQ0FBMkI7QUFBQSxhQUFNZCxZQUFZLEVBQWxCO0FBQUEsS0FBM0IsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRSxxRUFBQyw0REFBRDtBQUFBLDZCQUNFLHFFQUFDLHlFQUFEO0FBQ0UsbUJBQVcsRUFBRSxHQURmO0FBRUUsb0JBQVksRUFBRSxHQUZoQjtBQUdFLHFCQUFhLEVBQUVZLGdCQUFnQjtBQUhqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBakNEOztNQUFNYixlO0FBbUNTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idWJibGVDaGFydC43NThmMTI3NGI1NTNkZGEwZWNhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRlbnRzIGZyb20gXCJAY29tcG9uZW50cy9jb250ZW50c1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IEJ1YmJsZUNoYXIgZnJvbSBcInNyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGVDaGFydFwiO1xyXG5pbXBvcnQgeyBnZXRJbnRlZ2VyIH0gZnJvbSBcInNyYy91dGlsL2dldEludGVnZXJcIjtcclxuXHJcbmNvbnN0IFRvb2xUaXAgPSAoeyB0aXRsZSB9OiB7IHRpdGxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtcclxuICAgICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG5cclxuICAgICAgfVxyXG4gICAgfT5cclxuICAgICAge3RpdGxlfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdWJibGVDaGFydFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGdldENoYXJ0RGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHggPSAxMDAgKyBnZXRJbnRlZ2VyKDUwMCk7XHJcbiAgICBjb25zdCB5ID0gLXggKyA1MDAgKyBnZXRJbnRlZ2VyKDQwMCk7XHJcbiAgICBjb25zdCByID0gNSArIGdldEludGVnZXIoNDApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9pbnQ6IHtcclxuICAgICAgICB4OiB4LFxyXG4gICAgICAgIHk6IHksXHJcbiAgICAgIH0sXHJcbiAgICAgIHI6IHIsXHJcbiAgICAgIGZpbGw6IGAjJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAweEZGRkZGRikudG9TdHJpbmcoMTYpfWAsXHJcbiAgICAgIHRvb2xUaXA6IDxUb29sVGlwIHRpdGxlPXtgeDogJHt4fSB5OiAke3l9IHI6ICR7cn1gfS8+LFxyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDaGFydERhdGFMaXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheSg1MCkuZmlsbCh7fSkubWFwKCgpID0+IGdldENoYXJ0RGF0YSgpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Q29udGVudHM+XHJcbiAgICAgICAgPEJ1YmJsZUNoYXJcclxuICAgICAgICAgIGNhbnZhc1dpZHRoPXs3MDB9XHJcbiAgICAgICAgICBjYW52YXNIZWlnaHQ9ezUwMH1cclxuICAgICAgICAgIGNoYXJ0RGF0YUxpc3Q9e2dldENoYXJ0RGF0YUxpc3QoKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWJibGVDaGFydFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==