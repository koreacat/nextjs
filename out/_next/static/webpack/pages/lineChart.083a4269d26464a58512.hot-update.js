webpackHotUpdate_N_E("pages/lineChart",{

/***/ "./src/components/charts/lineChart/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/charts/lineChart/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineChart.module.scss */ "./src/components/charts/lineChart/lineChart.module.scss");
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Rows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rows */ "./src/components/charts/lineChart/Rows.tsx");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Buttons */ "./src/components/charts/lineChart/Buttons.tsx");
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Columns */ "./src/components/charts/lineChart/Columns.tsx");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Divider */ "./src/components/charts/lineChart/Divider.tsx");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Line */ "./src/components/charts/lineChart/Line.tsx");
/* harmony import */ var _Points__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Points */ "./src/components/charts/lineChart/Points.tsx");


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var LineChart = function LineChart(_ref) {
  _s();

  var _tableRef$current$cli, _tableRef$current2;

  var _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? 'black' : _ref$colors,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'large' : _ref$type,
      viewCount = _ref.viewCount,
      rows = _ref.rows,
      columns = _ref.columns,
      data = _ref.data,
      onIdx = _ref.onIndex,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? true : _ref$trigger;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      onIndex = _useState[0],
      setOnIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      slideIndex = _useState2[0],
      setSlideIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      rowWidth = _useState3[0],
      setRowWidth = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      columnHeight = _useState4[0],
      setColumnHeight = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      lineTrigger = _useState5[0],
      setLineTrigger = _useState5[1]; // 점 아래 세로선 최초 애니메이션 실행용


  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var tableRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var maxRow = Math.max(rows.length, data.length);
  var maxColumns = Math.max(columns.length, data.length - 1);
  var isOver = viewCount < maxRow;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (onIdx !== undefined) {
      var idx = onIdx > maxColumns ? maxColumns : onIdx;

      var _slideIndex = idx - viewCount + 1;

      setOnIndex(idx < 0 ? 0 : idx);
      setSlideIndex(_slideIndex < 0 ? 0 : _slideIndex);
    }

    if (chartRef.current) {
      setRowWidth(chartRef.current.clientWidth / (viewCount + 1));
    }

    if (tableRef.current) {
      var _tableRef$current;

      setColumnHeight(((_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.clientHeight) / (columns.length - 1));
    }
  }, [data]);
  var tableWidthWhitUnit = isOver ? "".concat((maxRow + 1) * rowWidth, "px") : '100%';
  var translateX = isOver ? "translateX(".concat(-(slideIndex * rowWidth), "px)") : 'translateX(0)';

  var handleClick = function handleClick(index) {
    setLineTrigger(false);
    setOnIndex(index);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('lineChartArea'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Columns__WEBPACK_IMPORTED_MODULE_6__["default"], {
      columns: columns,
      type: type
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: chartRef,
      className: cx('chartWrap', type),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: tableRef,
        className: cx('tableArea'),
        style: {
          width: tableWidthWhitUnit,
          transform: translateX
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Divider__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: columns.length - 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Line__WEBPACK_IMPORTED_MODULE_8__["default"], {
          data: data,
          type: type,
          colors: colors,
          rows: rows,
          columnHeight: columnHeight,
          height: (_tableRef$current$cli = (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.clientHeight) !== null && _tableRef$current$cli !== void 0 ? _tableRef$current$cli : 0,
          tableRef: tableRef,
          trigger: trigger
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Points__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: data,
          type: type,
          colors: colors,
          onIndex: onIndex,
          handleClick: handleClick,
          columnHeight: columnHeight,
          maxRow: maxRow,
          lineTrigger: lineTrigger,
          trigger: trigger
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rows__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rows: rows,
        type: type,
        maxRow: maxRow,
        onIndex: onIndex,
        tableWidthWhitUnit: tableWidthWhitUnit,
        translateX: translateX
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        slideIndex: slideIndex,
        setSlideIndex: setSlideIndex,
        maxRow: maxRow,
        viewCount: viewCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_s(LineChart, "vDUhwrHNkK9uKyKOzSQ4ffO3TZ0=");

_c = LineChart;
/* harmony default export */ __webpack_exports__["default"] = (LineChart);

var _c;

$RefreshReg$(_c, "LineChart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpbmVDaGFydCIsImNvbG9ycyIsInR5cGUiLCJ2aWV3Q291bnQiLCJyb3dzIiwiY29sdW1ucyIsImRhdGEiLCJvbklkeCIsIm9uSW5kZXgiLCJ0cmlnZ2VyIiwidXNlU3RhdGUiLCJzZXRPbkluZGV4Iiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJyb3dXaWR0aCIsInNldFJvd1dpZHRoIiwiY29sdW1uSGVpZ2h0Iiwic2V0Q29sdW1uSGVpZ2h0IiwibGluZVRyaWdnZXIiLCJzZXRMaW5lVHJpZ2dlciIsImNoYXJ0UmVmIiwidXNlUmVmIiwidGFibGVSZWYiLCJtYXhSb3ciLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwibWF4Q29sdW1ucyIsImlzT3ZlciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsImlkeCIsImN1cnJlbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInRhYmxlV2lkdGhXaGl0VW5pdCIsInRyYW5zbGF0ZVgiLCJoYW5kbGVDbGljayIsImluZGV4Iiwid2lkdGgiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQWFBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BU0k7QUFBQTs7QUFBQTs7QUFBQSx5QkFScEJDLE1BUW9CO0FBQUEsTUFScEJBLE1BUW9CLDRCQVJYLE9BUVc7QUFBQSx1QkFQcEJDLElBT29CO0FBQUEsTUFQcEJBLElBT29CLDBCQVBiLE9BT2E7QUFBQSxNQU5wQkMsU0FN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O0FBQUE7QUFBQTtBQUFBLGlCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWdDRSxxRUFBQyw2Q0FBRDtBQUNFLFlBQUksRUFBRUwsSUFEUjtBQUVFLFlBQUksRUFBRUYsSUFGUjtBQUdFLGNBQU0sRUFBRXFCLE1BSFY7QUFJRSxlQUFPLEVBQUVmLE9BSlg7QUFLRSwwQkFBa0IsRUFBRTJCLGtCQUx0QjtBQU1FLGtCQUFVLEVBQUVDO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhDRixlQTBDRSxxRUFBQyxnREFBRDtBQUFTLGtCQUFVLEVBQUV4QixVQUFyQjtBQUFpQyxxQkFBYSxFQUFFQyxhQUFoRDtBQUErRCxjQUFNLEVBQUVVLE1BQXZFO0FBQStFLGlCQUFTLEVBQUVwQjtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbURELENBbEdEOztHQUFNSCxTOztLQUFBQSxTO0FBb0dTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saW5lQ2hhcnQuMDgzYTQyNjlkMjY0NjRhNTg1MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saW5lQ2hhcnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YSwgTGluZUNoYXJ0Q29sb3JzVHlwZSwgTGluZUNoYXJ0U2l6ZVR5cGUgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgUm93cyBmcm9tICcuL1Jvd3MnO1xyXG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuL0J1dHRvbnMnO1xyXG5pbXBvcnQgQ29sdW1ucyBmcm9tICcuL0NvbHVtbnMnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xyXG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xyXG5pbXBvcnQgUG9pbnRzIGZyb20gJy4vUG9pbnRzJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTGluZUNoYXJ0UHJvcHMge1xyXG4gIGNvbG9ycz86IExpbmVDaGFydENvbG9yc1R5cGU7XHJcbiAgdHlwZT86IExpbmVDaGFydFNpemVUeXBlO1xyXG4gIHZpZXdDb3VudDogbnVtYmVyO1xyXG4gIHJvd3M6IHN0cmluZ1tdO1xyXG4gIGNvbHVtbnM6IHN0cmluZ1tdO1xyXG4gIGRhdGE6IENoYXJ0RGF0YVtdO1xyXG4gIG9uSW5kZXg/OiBudW1iZXI7XHJcbiAgdHJpZ2dlcj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IExpbmVDaGFydCA9ICh7XHJcbiAgY29sb3JzID0gJ2JsYWNrJyxcclxuICB0eXBlID0gJ2xhcmdlJyxcclxuICB2aWV3Q291bnQsXHJcbiAgcm93cyxcclxuICBjb2x1bW5zLFxyXG4gIGRhdGEsXHJcbiAgb25JbmRleDogb25JZHgsXHJcbiAgdHJpZ2dlciA9IHRydWUsXHJcbn06IExpbmVDaGFydFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW29uSW5kZXgsIHNldE9uSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NsaWRlSW5kZXgsIHNldFNsaWRlSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICBjb25zdCBbcm93V2lkdGgsIHNldFJvd1dpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgW2NvbHVtbkhlaWdodCwgc2V0Q29sdW1uSGVpZ2h0XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgW2xpbmVUcmlnZ2VyLCBzZXRMaW5lVHJpZ2dlcl0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8g7KCQIOyVhOuemCDshLjroZzshKAg7LWc7LSIIOyVoOuLiOuplOydtOyFmCDsi6TtlonsmqlcclxuICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHRhYmxlUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IG1heFJvdyA9IE1hdGgubWF4KHJvd3MubGVuZ3RoLCBkYXRhLmxlbmd0aCk7XHJcbiAgY29uc3QgbWF4Q29sdW1ucyA9IE1hdGgubWF4KGNvbHVtbnMubGVuZ3RoLCBkYXRhLmxlbmd0aCAtIDEpO1xyXG4gIGNvbnN0IGlzT3ZlciA9IHZpZXdDb3VudCA8IG1heFJvdztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChvbklkeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IG9uSWR4ID4gbWF4Q29sdW1ucyA/IG1heENvbHVtbnMgOiBvbklkeDtcclxuICAgICAgY29uc3Qgc2xpZGVJbmRleCA9IGlkeCAtIHZpZXdDb3VudCArIDE7XHJcbiAgICAgIHNldE9uSW5kZXgoaWR4IDwgMCA/IDAgOiBpZHgpO1xyXG4gICAgICBzZXRTbGlkZUluZGV4KHNsaWRlSW5kZXggPCAwID8gMCA6IHNsaWRlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFydFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHNldFJvd1dpZHRoKGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50V2lkdGggLyAodmlld0NvdW50ICsgMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YWJsZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHNldENvbHVtbkhlaWdodCh0YWJsZVJlZi5jdXJyZW50Py5jbGllbnRIZWlnaHQgLyAoY29sdW1ucy5sZW5ndGggLSAxKSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuXHJcbiAgY29uc3QgdGFibGVXaWR0aFdoaXRVbml0ID0gaXNPdmVyID8gYCR7KG1heFJvdyArIDEpICogcm93V2lkdGh9cHhgIDogJzEwMCUnO1xyXG4gIGNvbnN0IHRyYW5zbGF0ZVggPSBpc092ZXIgPyBgdHJhbnNsYXRlWCgkey0oc2xpZGVJbmRleCAqIHJvd1dpZHRoKX1weClgIDogJ3RyYW5zbGF0ZVgoMCknO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRMaW5lVHJpZ2dlcihmYWxzZSk7XHJcbiAgICBzZXRPbkluZGV4KGluZGV4KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCdsaW5lQ2hhcnRBcmVhJyl9PlxyXG4gICAgICB7LyogQ29sdW1ucyDsmIHsl60gKi99XHJcbiAgICAgIDxDb2x1bW5zIGNvbHVtbnM9e2NvbHVtbnN9IHR5cGU9e3R5cGV9IC8+XHJcblxyXG4gICAgICA8ZGl2IHJlZj17Y2hhcnRSZWZ9IGNsYXNzTmFtZT17Y3goJ2NoYXJ0V3JhcCcsIHR5cGUpfT5cclxuICAgICAgICA8ZGl2IHJlZj17dGFibGVSZWZ9IGNsYXNzTmFtZT17Y3goJ3RhYmxlQXJlYScpfSBzdHlsZT17eyB3aWR0aDogdGFibGVXaWR0aFdoaXRVbml0LCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVggfX0+XHJcbiAgICAgICAgICB7Lyog6rCA66GcIOq1rOu2hOyEoCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8RGl2aWRlciB2YWx1ZT17Y29sdW1ucy5sZW5ndGggLSAxfSAvPlxyXG5cclxuICAgICAgICAgIHsvKiDqur7snYAg7ISgLCDrqbQg7JiB7JetICovfVxyXG4gICAgICAgICAgPExpbmVcclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgY29sb3JzPXtjb2xvcnN9XHJcbiAgICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAgIGNvbHVtbkhlaWdodD17Y29sdW1uSGVpZ2h0fVxyXG4gICAgICAgICAgICBoZWlnaHQ9e3RhYmxlUmVmLmN1cnJlbnQ/LmNsaWVudEhlaWdodCA/PyAwfVxyXG4gICAgICAgICAgICB0YWJsZVJlZj17dGFibGVSZWZ9XHJcbiAgICAgICAgICAgIHRyaWdnZXI9e3RyaWdnZXJ9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIHsvKiDsoJAsIO2ItO2MgSwg7IS466GcIOyEoCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8UG9pbnRzXHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIGNvbG9ycz17Y29sb3JzfVxyXG4gICAgICAgICAgICBvbkluZGV4PXtvbkluZGV4fVxyXG4gICAgICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIGNvbHVtbkhlaWdodD17Y29sdW1uSGVpZ2h0fVxyXG4gICAgICAgICAgICBtYXhSb3c9e21heFJvd31cclxuICAgICAgICAgICAgbGluZVRyaWdnZXI9e2xpbmVUcmlnZ2VyfVxyXG4gICAgICAgICAgICB0cmlnZ2VyPXt0cmlnZ2VyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFJvd3Mg7JiB7JetICovfVxyXG4gICAgICAgIDxSb3dzXHJcbiAgICAgICAgICByb3dzPXtyb3dzfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIG1heFJvdz17bWF4Um93fVxyXG4gICAgICAgICAgb25JbmRleD17b25JbmRleH1cclxuICAgICAgICAgIHRhYmxlV2lkdGhXaGl0VW5pdD17dGFibGVXaWR0aFdoaXRVbml0fVxyXG4gICAgICAgICAgdHJhbnNsYXRlWD17dHJhbnNsYXRlWH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7Lyog67KE7Yq8IOyYgeyXrSAqL31cclxuICAgICAgICA8QnV0dG9ucyBzbGlkZUluZGV4PXtzbGlkZUluZGV4fSBzZXRTbGlkZUluZGV4PXtzZXRTbGlkZUluZGV4fSBtYXhSb3c9e21heFJvd30gdmlld0NvdW50PXt2aWV3Q291bnR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==