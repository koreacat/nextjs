webpackHotUpdate_N_E("pages/lineChart",{

/***/ "./src/components/charts/lineChart/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/charts/lineChart/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lineChart.module.scss */ "./src/components/charts/lineChart/lineChart.module.scss");
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Rows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Rows */ "./src/components/charts/lineChart/Rows.tsx");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Buttons */ "./src/components/charts/lineChart/Buttons.tsx");
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Columns */ "./src/components/charts/lineChart/Columns.tsx");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Divider */ "./src/components/charts/lineChart/Divider.tsx");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Line */ "./src/components/charts/lineChart/Line.tsx");
/* harmony import */ var _Points__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Points */ "./src/components/charts/lineChart/Points.tsx");



var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      onIndex = _useState[0],
      setOnIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      slideIndex = _useState2[0],
      setSlideIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      rowWidth = _useState3[0],
      setRowWidth = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      columnHeight = _useState4[0],
      setColumnHeight = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      lineTrigger = _useState5[0],
      setLineTrigger = _useState5[1]; // 점 아래 세로선 최초 애니메이션 실행용


  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var tableRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var maxRow = Math.max(rows.length, data.length);
  var maxColumns = Math.max(columns.length, data.length - 1);
  var isOver = viewCount < maxRow;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: cx('lineChartArea'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Columns__WEBPACK_IMPORTED_MODULE_7__["default"], {
      columns: columns,
      type: type
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      ref: chartRef,
      className: cx('chartWrap', type),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        ref: tableRef,
        className: cx('tableArea'),
        style: {
          width: tableWidthWhitUnit,
          transform: translateX
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
          value: columns.length - 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Line__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Points__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Rows__WEBPACK_IMPORTED_MODULE_5__["default"], {
        rows: [].concat(Object(C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rows), Object(C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Array(maxRow - rows.length).fill('2'))),
        type: type,
        maxRow: maxRow,
        onIndex: onIndex,
        tableWidthWhitUnit: tableWidthWhitUnit,
        translateX: translateX
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpbmVDaGFydCIsImNvbG9ycyIsInR5cGUiLCJ2aWV3Q291bnQiLCJyb3dzIiwiY29sdW1ucyIsImRhdGEiLCJvbklkeCIsIm9uSW5kZXgiLCJ0cmlnZ2VyIiwidXNlU3RhdGUiLCJzZXRPbkluZGV4Iiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJyb3dXaWR0aCIsInNldFJvd1dpZHRoIiwiY29sdW1uSGVpZ2h0Iiwic2V0Q29sdW1uSGVpZ2h0IiwibGluZVRyaWdnZXIiLCJzZXRMaW5lVHJpZ2dlciIsImNoYXJ0UmVmIiwidXNlUmVmIiwidGFibGVSZWYiLCJtYXhSb3ciLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwibWF4Q29sdW1ucyIsImlzT3ZlciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsImlkeCIsImN1cnJlbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInRhYmxlV2lkdGhXaGl0VW5pdCIsInRyYW5zbGF0ZVgiLCJoYW5kbGVDbGljayIsImluZGV4Iiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJBcnJheSIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBYUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FTSTtBQUFBOztBQUFBOztBQUFBLHlCQVJwQkMsTUFRb0I7QUFBQSxNQVJwQkEsTUFRb0IsNEJBUlgsT0FRVztBQUFBLHVCQVBwQkMsSUFPb0I7QUFBQSxNQVBwQkEsSUFPb0IsMEJBUGIsT0FP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TyxFQUFFVDtBQVRYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBZ0NFLHFFQUFDLDZDQUFEO0FBQ0UsWUFBSSxzSkFBTUwsSUFBTiw2SUFBZSxJQUFJcUMsS0FBSixDQUFVbEIsTUFBTSxHQUFHbkIsSUFBSSxDQUFDc0IsTUFBeEIsRUFBZ0NnQixJQUFoQyxDQUFxQyxHQUFyQyxDQUFmLEVBRE47QUFFRSxZQUFJLEVBQUV4QyxJQUZSO0FBR0UsY0FBTSxFQUFFcUIsTUFIVjtBQUlFLGVBQU8sRUFBRWYsT0FKWDtBQUtFLDBCQUFrQixFQUFFMkIsa0JBTHRCO0FBTUUsa0JBQVUsRUFBRUM7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENGLGVBMENFLHFFQUFDLGdEQUFEO0FBQVMsa0JBQVUsRUFBRXhCLFVBQXJCO0FBQWlDLHFCQUFhLEVBQUVDLGFBQWhEO0FBQStELGNBQU0sRUFBRVUsTUFBdkU7QUFBK0UsaUJBQVMsRUFBRXBCO0FBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtREQsQ0FsR0Q7O0dBQU1ILFM7O0tBQUFBLFM7QUFvR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpbmVDaGFydC5jMjRiNjJiMGVmZDNkMTI1ZmI5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpbmVDaGFydC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhcnREYXRhLCBMaW5lQ2hhcnRDb2xvcnNUeXBlLCBMaW5lQ2hhcnRTaXplVHlwZSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBSb3dzIGZyb20gJy4vUm93cyc7XHJcbmltcG9ydCBCdXR0b25zIGZyb20gJy4vQnV0dG9ucyc7XHJcbmltcG9ydCBDb2x1bW5zIGZyb20gJy4vQ29sdW1ucyc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XHJcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XHJcbmltcG9ydCBQb2ludHMgZnJvbSAnLi9Qb2ludHMnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBMaW5lQ2hhcnRQcm9wcyB7XHJcbiAgY29sb3JzPzogTGluZUNoYXJ0Q29sb3JzVHlwZTtcclxuICB0eXBlPzogTGluZUNoYXJ0U2l6ZVR5cGU7XHJcbiAgdmlld0NvdW50OiBudW1iZXI7XHJcbiAgcm93czogc3RyaW5nW107XHJcbiAgY29sdW1uczogc3RyaW5nW107XHJcbiAgZGF0YTogQ2hhcnREYXRhW107XHJcbiAgb25JbmRleD86IG51bWJlcjtcclxuICB0cmlnZ2VyPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgTGluZUNoYXJ0ID0gKHtcclxuICBjb2xvcnMgPSAnYmxhY2snLFxyXG4gIHR5cGUgPSAnbGFyZ2UnLFxyXG4gIHZpZXdDb3VudCxcclxuICByb3dzLFxyXG4gIGNvbHVtbnMsXHJcbiAgZGF0YSxcclxuICBvbkluZGV4OiBvbklkeCxcclxuICB0cmlnZ2VyID0gdHJ1ZSxcclxufTogTGluZUNoYXJ0UHJvcHMpID0+IHtcclxuICBjb25zdCBbb25JbmRleCwgc2V0T25JbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc2xpZGVJbmRleCwgc2V0U2xpZGVJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFtyb3dXaWR0aCwgc2V0Um93V2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICBjb25zdCBbY29sdW1uSGVpZ2h0LCBzZXRDb2x1bW5IZWlnaHRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICBjb25zdCBbbGluZVRyaWdnZXIsIHNldExpbmVUcmlnZ2VyXSA9IHVzZVN0YXRlKHRydWUpOyAvLyDsoJAg7JWE656YIOyEuOuhnOyEoCDstZzstIgg7JWg64uI66mU7J207IWYIOyLpO2WieyaqVxyXG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgdGFibGVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgbWF4Um93ID0gTWF0aC5tYXgocm93cy5sZW5ndGgsIGRhdGEubGVuZ3RoKTtcclxuICBjb25zdCBtYXhDb2x1bW5zID0gTWF0aC5tYXgoY29sdW1ucy5sZW5ndGgsIGRhdGEubGVuZ3RoIC0gMSk7XHJcbiAgY29uc3QgaXNPdmVyID0gdmlld0NvdW50IDwgbWF4Um93O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG9uSWR4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgaWR4ID0gb25JZHggPiBtYXhDb2x1bW5zID8gbWF4Q29sdW1ucyA6IG9uSWR4O1xyXG4gICAgICBjb25zdCBzbGlkZUluZGV4ID0gaWR4IC0gdmlld0NvdW50ICsgMTtcclxuICAgICAgc2V0T25JbmRleChpZHggPCAwID8gMCA6IGlkeCk7XHJcbiAgICAgIHNldFNsaWRlSW5kZXgoc2xpZGVJbmRleCA8IDAgPyAwIDogc2xpZGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYXJ0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgc2V0Um93V2lkdGgoY2hhcnRSZWYuY3VycmVudC5jbGllbnRXaWR0aCAvICh2aWV3Q291bnQgKyAxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhYmxlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgc2V0Q29sdW1uSGVpZ2h0KHRhYmxlUmVmLmN1cnJlbnQ/LmNsaWVudEhlaWdodCAvIChjb2x1bW5zLmxlbmd0aCAtIDEpKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICBjb25zdCB0YWJsZVdpZHRoV2hpdFVuaXQgPSBpc092ZXIgPyBgJHsobWF4Um93ICsgMSkgKiByb3dXaWR0aH1weGAgOiAnMTAwJSc7XHJcbiAgY29uc3QgdHJhbnNsYXRlWCA9IGlzT3ZlciA/IGB0cmFuc2xhdGVYKCR7LShzbGlkZUluZGV4ICogcm93V2lkdGgpfXB4KWAgOiAndHJhbnNsYXRlWCgwKSc7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNldExpbmVUcmlnZ2VyKGZhbHNlKTtcclxuICAgIHNldE9uSW5kZXgoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2xpbmVDaGFydEFyZWEnKX0+XHJcbiAgICAgIHsvKiBDb2x1bW5zIOyYgeyXrSAqL31cclxuICAgICAgPENvbHVtbnMgY29sdW1ucz17Y29sdW1uc30gdHlwZT17dHlwZX0gLz5cclxuXHJcbiAgICAgIDxkaXYgcmVmPXtjaGFydFJlZn0gY2xhc3NOYW1lPXtjeCgnY2hhcnRXcmFwJywgdHlwZSl9PlxyXG4gICAgICAgIDxkaXYgcmVmPXt0YWJsZVJlZn0gY2xhc3NOYW1lPXtjeCgndGFibGVBcmVhJyl9IHN0eWxlPXt7IHdpZHRoOiB0YWJsZVdpZHRoV2hpdFVuaXQsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCB9fT5cclxuICAgICAgICAgIHsvKiDqsIDroZwg6rWs67aE7ISgIOyYgeyXrSAqL31cclxuICAgICAgICAgIDxEaXZpZGVyIHZhbHVlPXtjb2x1bW5zLmxlbmd0aCAtIDF9IC8+XHJcblxyXG4gICAgICAgICAgey8qIOq6vuydgCDshKAsIOuptCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8TGluZVxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBjb2xvcnM9e2NvbG9yc31cclxuICAgICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAgICAgY29sdW1uSGVpZ2h0PXtjb2x1bW5IZWlnaHR9XHJcbiAgICAgICAgICAgIGhlaWdodD17dGFibGVSZWYuY3VycmVudD8uY2xpZW50SGVpZ2h0ID8/IDB9XHJcbiAgICAgICAgICAgIHRhYmxlUmVmPXt0YWJsZVJlZn1cclxuICAgICAgICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgey8qIOygkCwg7Yi07YyBLCDshLjroZwg7ISgIOyYgeyXrSAqL31cclxuICAgICAgICAgIDxQb2ludHNcclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgY29sb3JzPXtjb2xvcnN9XHJcbiAgICAgICAgICAgIG9uSW5kZXg9e29uSW5kZXh9XHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgY29sdW1uSGVpZ2h0PXtjb2x1bW5IZWlnaHR9XHJcbiAgICAgICAgICAgIG1heFJvdz17bWF4Um93fVxyXG4gICAgICAgICAgICBsaW5lVHJpZ2dlcj17bGluZVRyaWdnZXJ9XHJcbiAgICAgICAgICAgIHRyaWdnZXI9e3RyaWdnZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogUm93cyDsmIHsl60gKi99XHJcbiAgICAgICAgPFJvd3NcclxuICAgICAgICAgIHJvd3M9e1suLi5yb3dzLCAuLi5uZXcgQXJyYXkobWF4Um93IC0gcm93cy5sZW5ndGgpLmZpbGwoJzInKV19XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgbWF4Um93PXttYXhSb3d9XHJcbiAgICAgICAgICBvbkluZGV4PXtvbkluZGV4fVxyXG4gICAgICAgICAgdGFibGVXaWR0aFdoaXRVbml0PXt0YWJsZVdpZHRoV2hpdFVuaXR9XHJcbiAgICAgICAgICB0cmFuc2xhdGVYPXt0cmFuc2xhdGVYfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiDrsoTtirwg7JiB7JetICovfVxyXG4gICAgICAgIDxCdXR0b25zIHNsaWRlSW5kZXg9e3NsaWRlSW5kZXh9IHNldFNsaWRlSW5kZXg9e3NldFNsaWRlSW5kZXh9IG1heFJvdz17bWF4Um93fSB2aWV3Q291bnQ9e3ZpZXdDb3VudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9