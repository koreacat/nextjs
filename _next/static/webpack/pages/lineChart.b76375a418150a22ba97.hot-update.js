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
/* harmony import */ var C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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
      rowsData = _ref.rows,
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
  var maxRow = Math.max(rowsData.length, data.length);
  var maxColumns = Math.max(columns.length, data.length - 1);
  var isOver = viewCount < maxRow;
  var rows = [].concat(Object(C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rowsData), Object(C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(maxRow - rowsData.length).fill('')));
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setLineTrigger(false);

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Columns__WEBPACK_IMPORTED_MODULE_7__["default"], {
      columns: columns,
      type: type
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
          value: columns.length - 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Line__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Points__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rows__WEBPACK_IMPORTED_MODULE_5__["default"], {
        rows: rows,
        type: type,
        maxRow: maxRow,
        onIndex: onIndex,
        tableWidthWhitUnit: tableWidthWhitUnit,
        translateX: translateX
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        slideIndex: slideIndex,
        setSlideIndex: setSlideIndex,
        maxRow: maxRow,
        viewCount: viewCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpbmVDaGFydCIsImNvbG9ycyIsInR5cGUiLCJ2aWV3Q291bnQiLCJyb3dzRGF0YSIsInJvd3MiLCJjb2x1bW5zIiwiZGF0YSIsIm9uSWR4Iiwib25JbmRleCIsInRyaWdnZXIiLCJ1c2VTdGF0ZSIsInNldE9uSW5kZXgiLCJzbGlkZUluZGV4Iiwic2V0U2xpZGVJbmRleCIsInJvd1dpZHRoIiwic2V0Um93V2lkdGgiLCJjb2x1bW5IZWlnaHQiLCJzZXRDb2x1bW5IZWlnaHQiLCJsaW5lVHJpZ2dlciIsInNldExpbmVUcmlnZ2VyIiwiY2hhcnRSZWYiLCJ1c2VSZWYiLCJ0YWJsZVJlZiIsIm1heFJvdyIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJtYXhDb2x1bW5zIiwiaXNPdmVyIiwiQXJyYXkiLCJmaWxsIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwiaWR4IiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwidGFibGVXaWR0aFdoaXRVbml0IiwidHJhbnNsYXRlWCIsImhhbmRsZUNsaWNrIiwiaW5kZXgiLCJ3aWR0aCIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFhQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVNJO0FBQUE7O0FBQUE7O0FBQUEseUJBUnBCQyxNQVFvQjtBQUFBLE1BUnBCQSxNQVFvQiw0QkFSWCxPQVFXO0FBQUEsdUJBUHBCQyxJQU9vQjtBQUFBLE1BUHBCQSxJQU9vQiwwQkFQYixPQU9hO0FBQUEsTUFOcEJDLFNBTW9CLFFBTnBCQSxTQU1vQjtBQUFBLE1BTGRDLFFBS2MsUUFMcEJDLElBS29CO0FBQUEsTUFKcEJDLE9BSW9CLFFBSnBCQSxPQUlvQjtBQUFBLE1BSHBCQyxJQUdvQixRQUhwQkEsSUFHb0I7QUFBQSxNQUZYQyxLQUVXLFFBRnBCQyxPQUVvQjtBQUFBLDBCQURwQkMsT0FDb0I7QUFBQSxNQURwQkEsT0FDb0IsNkJBRFYsSUFDVTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FEbEI7QUFBQSxNQUNiRixPQURhO0FBQUEsTUFDSkcsVUFESTs7QUFBQSxtQkFFZ0JELHNEQUFRLENBQVMsQ0FBVCxDQUZ4QjtBQUFBLE1BRWJFLFVBRmE7QUFBQSxNQUVEQyxhQUZDOztBQUFBLG1CQUdZSCxzREFBUSxDQUFTLENBQVQsQ0FIcEI7QUFBQSxNQUdiSSxRQUhhO0FBQUEsTUFHSEMsV0FIRzs7QUFBQSxtQkFJb0JMLHNEQUFRLENBQVMsQ0FBVCxDQUo1QjtBQUFBLE1BSWJNLFlBSmE7QUFBQSxNQUlDQyxlQUpEOztBQUFBLG1CQUtrQlAsc0RBQVEsQ0FBQyxJQUFELENBTDFCO0FBQUEsTUFLYlEsV0FMYTtBQUFBLE1BS0FDLGNBTEEsa0JBS2tDOzs7QUFDdEQsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUF3QixJQUF4QixDQUF2QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Qsb0RBQU0sQ0FBd0IsSUFBeEIsQ0FBdkI7QUFFQSxNQUFNRSxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTdEIsUUFBUSxDQUFDdUIsTUFBbEIsRUFBMEJwQixJQUFJLENBQUNvQixNQUEvQixDQUFmO0FBQ0EsTUFBTUMsVUFBVSxHQUFHSCxJQUFJLENBQUNDLEdBQUwsQ0FBU3BCLE9BQU8sQ0FBQ3FCLE1BQWpCLEVBQXlCcEIsSUFBSSxDQUFDb0IsTUFBTCxHQUFjLENBQXZDLENBQW5CO0FBQ0EsTUFBTUUsTUFBTSxHQUFHMUIsU0FBUyxHQUFHcUIsTUFBM0I7QUFDQSxNQUFNbkIsSUFBSSx1SkFBT0QsUUFBUCw2SUFBb0IsSUFBSTBCLEtBQUosQ0FBVU4sTUFBTSxHQUFHcEIsUUFBUSxDQUFDdUIsTUFBNUIsRUFBb0NJLElBQXBDLENBQXlDLEVBQXpDLENBQXBCLEVBQVY7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RaLGtCQUFjLENBQUMsS0FBRCxDQUFkOztBQUNBLFFBQUlaLEtBQUssS0FBS3lCLFNBQWQsRUFBeUI7QUFDdkIsVUFBTUMsR0FBRyxHQUFHMUIsS0FBSyxHQUFHb0IsVUFBUixHQUFxQkEsVUFBckIsR0FBa0NwQixLQUE5Qzs7QUFDQSxVQUFNSyxXQUFVLEdBQUdxQixHQUFHLEdBQUcvQixTQUFOLEdBQWtCLENBQXJDOztBQUNBUyxnQkFBVSxDQUFDc0IsR0FBRyxHQUFHLENBQU4sR0FBVSxDQUFWLEdBQWNBLEdBQWYsQ0FBVjtBQUNBcEIsbUJBQWEsQ0FBQ0QsV0FBVSxHQUFHLENBQWIsR0FBaUIsQ0FBakIsR0FBcUJBLFdBQXRCLENBQWI7QUFDRDs7QUFFRCxRQUFJUSxRQUFRLENBQUNjLE9BQWIsRUFBc0I7QUFDcEJuQixpQkFBVyxDQUFDSyxRQUFRLENBQUNjLE9BQVQsQ0FBaUJDLFdBQWpCLElBQWdDakMsU0FBUyxHQUFHLENBQTVDLENBQUQsQ0FBWDtBQUNEOztBQUVELFFBQUlvQixRQUFRLENBQUNZLE9BQWIsRUFBc0I7QUFBQTs7QUFDcEJqQixxQkFBZSxDQUFDLHNCQUFBSyxRQUFRLENBQUNZLE9BQVQsd0VBQWtCRSxZQUFsQixLQUFrQy9CLE9BQU8sQ0FBQ3FCLE1BQVIsR0FBaUIsQ0FBbkQsQ0FBRCxDQUFmO0FBQ0Q7QUFDRixHQWhCUSxFQWdCTixDQUFDcEIsSUFBRCxDQWhCTSxDQUFUO0FBa0JBLE1BQU0rQixrQkFBa0IsR0FBR1QsTUFBTSxhQUFNLENBQUNMLE1BQU0sR0FBRyxDQUFWLElBQWVULFFBQXJCLFVBQW9DLE1BQXJFO0FBQ0EsTUFBTXdCLFVBQVUsR0FBR1YsTUFBTSx3QkFBaUIsRUFBRWhCLFVBQVUsR0FBR0UsUUFBZixDQUFqQixXQUFpRCxlQUExRTs7QUFFQSxNQUFNeUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNyQ3JCLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FSLGNBQVUsQ0FBQzZCLEtBQUQsQ0FBVjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUU3QyxFQUFFLENBQUMsZUFBRCxDQUFsQjtBQUFBLDRCQUVFLHFFQUFDLGdEQUFEO0FBQVMsYUFBTyxFQUFFVSxPQUFsQjtBQUEyQixVQUFJLEVBQUVKO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUlFO0FBQUssU0FBRyxFQUFFbUIsUUFBVjtBQUFvQixlQUFTLEVBQUV6QixFQUFFLENBQUMsV0FBRCxFQUFjTSxJQUFkLENBQWpDO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUVxQixRQUFWO0FBQW9CLGlCQUFTLEVBQUUzQixFQUFFLENBQUMsV0FBRCxDQUFqQztBQUFnRCxhQUFLLEVBQUU7QUFBRThDLGVBQUssRUFBRUosa0JBQVQ7QUFBNkJLLG1CQUFTLEVBQUVKO0FBQXhDLFNBQXZEO0FBQUEsZ0NBRUUscUVBQUMsZ0RBQUQ7QUFBUyxlQUFLLEVBQUVqQyxPQUFPLENBQUNxQixNQUFSLEdBQWlCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFLRSxxRUFBQyw2Q0FBRDtBQUNFLGNBQUksRUFBRXBCLElBRFI7QUFFRSxjQUFJLEVBQUVMLElBRlI7QUFHRSxnQkFBTSxFQUFFRCxNQUhWO0FBSUUsY0FBSSxFQUFFSSxJQUpSO0FBS0Usc0JBQVksRUFBRVksWUFMaEI7QUFNRSxnQkFBTSxpREFBRU0sUUFBUSxDQUFDWSxPQUFYLHVEQUFFLG1CQUFrQkUsWUFBcEIseUVBQW9DLENBTjVDO0FBT0Usa0JBQVEsRUFBRWQsUUFQWjtBQVFFLGlCQUFPLEVBQUViO0FBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQWlCRSxxRUFBQyxnREFBRDtBQUNFLGNBQUksRUFBRUgsSUFEUjtBQUVFLGNBQUksRUFBRUwsSUFGUjtBQUdFLGdCQUFNLEVBQUVELE1BSFY7QUFJRSxpQkFBTyxFQUFFUSxPQUpYO0FBS0UscUJBQVcsRUFBRStCLFdBTGY7QUFNRSxzQkFBWSxFQUFFdkIsWUFOaEI7QUFPRSxnQkFBTSxFQUFFTyxNQVBWO0FBUUUscUJBQVcsRUFBRUwsV0FSZjtBQVNFLGlCQUFPLEVBQUVUO0FBVFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFnQ0UscUVBQUMsNkNBQUQ7QUFDRSxZQUFJLEVBQUVMLElBRFI7QUFFRSxZQUFJLEVBQUVILElBRlI7QUFHRSxjQUFNLEVBQUVzQixNQUhWO0FBSUUsZUFBTyxFQUFFZixPQUpYO0FBS0UsMEJBQWtCLEVBQUU2QixrQkFMdEI7QUFNRSxrQkFBVSxFQUFFQztBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0YsZUEwQ0UscUVBQUMsZ0RBQUQ7QUFBUyxrQkFBVSxFQUFFMUIsVUFBckI7QUFBaUMscUJBQWEsRUFBRUMsYUFBaEQ7QUFBK0QsY0FBTSxFQUFFVSxNQUF2RTtBQUErRSxpQkFBUyxFQUFFckI7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1ERCxDQXBHRDs7R0FBTUgsUzs7S0FBQUEsUztBQXNHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGluZUNoYXJ0LmI3NjM3NWE0MTgxNTBhMjJiYTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGluZUNoYXJ0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFydERhdGEsIExpbmVDaGFydENvbG9yc1R5cGUsIExpbmVDaGFydFNpemVUeXBlIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IFJvd3MgZnJvbSAnLi9Sb3dzJztcclxuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi9CdXR0b25zJztcclxuaW1wb3J0IENvbHVtbnMgZnJvbSAnLi9Db2x1bW5zJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcclxuaW1wb3J0IExpbmUgZnJvbSAnLi9MaW5lJztcclxuaW1wb3J0IFBvaW50cyBmcm9tICcuL1BvaW50cyc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIExpbmVDaGFydFByb3BzIHtcclxuICBjb2xvcnM/OiBMaW5lQ2hhcnRDb2xvcnNUeXBlO1xyXG4gIHR5cGU/OiBMaW5lQ2hhcnRTaXplVHlwZTtcclxuICB2aWV3Q291bnQ6IG51bWJlcjtcclxuICByb3dzOiBzdHJpbmdbXTtcclxuICBjb2x1bW5zOiBzdHJpbmdbXTtcclxuICBkYXRhOiBDaGFydERhdGFbXTtcclxuICBvbkluZGV4PzogbnVtYmVyO1xyXG4gIHRyaWdnZXI/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBMaW5lQ2hhcnQgPSAoe1xyXG4gIGNvbG9ycyA9ICdibGFjaycsXHJcbiAgdHlwZSA9ICdsYXJnZScsXHJcbiAgdmlld0NvdW50LFxyXG4gIHJvd3M6IHJvd3NEYXRhLFxyXG4gIGNvbHVtbnMsXHJcbiAgZGF0YSxcclxuICBvbkluZGV4OiBvbklkeCxcclxuICB0cmlnZ2VyID0gdHJ1ZSxcclxufTogTGluZUNoYXJ0UHJvcHMpID0+IHtcclxuICBjb25zdCBbb25JbmRleCwgc2V0T25JbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc2xpZGVJbmRleCwgc2V0U2xpZGVJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFtyb3dXaWR0aCwgc2V0Um93V2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICBjb25zdCBbY29sdW1uSGVpZ2h0LCBzZXRDb2x1bW5IZWlnaHRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICBjb25zdCBbbGluZVRyaWdnZXIsIHNldExpbmVUcmlnZ2VyXSA9IHVzZVN0YXRlKHRydWUpOyAvLyDsoJAg7JWE656YIOyEuOuhnOyEoCDstZzstIgg7JWg64uI66mU7J207IWYIOyLpO2WieyaqVxyXG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgdGFibGVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgbWF4Um93ID0gTWF0aC5tYXgocm93c0RhdGEubGVuZ3RoLCBkYXRhLmxlbmd0aCk7XHJcbiAgY29uc3QgbWF4Q29sdW1ucyA9IE1hdGgubWF4KGNvbHVtbnMubGVuZ3RoLCBkYXRhLmxlbmd0aCAtIDEpO1xyXG4gIGNvbnN0IGlzT3ZlciA9IHZpZXdDb3VudCA8IG1heFJvdztcclxuICBjb25zdCByb3dzID0gWy4uLnJvd3NEYXRhLCAuLi5uZXcgQXJyYXkobWF4Um93IC0gcm93c0RhdGEubGVuZ3RoKS5maWxsKCcnKV07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMaW5lVHJpZ2dlcihmYWxzZSk7XHJcbiAgICBpZiAob25JZHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBpZHggPSBvbklkeCA+IG1heENvbHVtbnMgPyBtYXhDb2x1bW5zIDogb25JZHg7XHJcbiAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBpZHggLSB2aWV3Q291bnQgKyAxO1xyXG4gICAgICBzZXRPbkluZGV4KGlkeCA8IDAgPyAwIDogaWR4KTtcclxuICAgICAgc2V0U2xpZGVJbmRleChzbGlkZUluZGV4IDwgMCA/IDAgOiBzbGlkZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhcnRSZWYuY3VycmVudCkge1xyXG4gICAgICBzZXRSb3dXaWR0aChjaGFydFJlZi5jdXJyZW50LmNsaWVudFdpZHRoIC8gKHZpZXdDb3VudCArIDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFibGVSZWYuY3VycmVudCkge1xyXG4gICAgICBzZXRDb2x1bW5IZWlnaHQodGFibGVSZWYuY3VycmVudD8uY2xpZW50SGVpZ2h0IC8gKGNvbHVtbnMubGVuZ3RoIC0gMSkpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIGNvbnN0IHRhYmxlV2lkdGhXaGl0VW5pdCA9IGlzT3ZlciA/IGAkeyhtYXhSb3cgKyAxKSAqIHJvd1dpZHRofXB4YCA6ICcxMDAlJztcclxuICBjb25zdCB0cmFuc2xhdGVYID0gaXNPdmVyID8gYHRyYW5zbGF0ZVgoJHstKHNsaWRlSW5kZXggKiByb3dXaWR0aCl9cHgpYCA6ICd0cmFuc2xhdGVYKDApJztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0TGluZVRyaWdnZXIoZmFsc2UpO1xyXG4gICAgc2V0T25JbmRleChpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnbGluZUNoYXJ0QXJlYScpfT5cclxuICAgICAgey8qIENvbHVtbnMg7JiB7JetICovfVxyXG4gICAgICA8Q29sdW1ucyBjb2x1bW5zPXtjb2x1bW5zfSB0eXBlPXt0eXBlfSAvPlxyXG5cclxuICAgICAgPGRpdiByZWY9e2NoYXJ0UmVmfSBjbGFzc05hbWU9e2N4KCdjaGFydFdyYXAnLCB0eXBlKX0+XHJcbiAgICAgICAgPGRpdiByZWY9e3RhYmxlUmVmfSBjbGFzc05hbWU9e2N4KCd0YWJsZUFyZWEnKX0gc3R5bGU9e3sgd2lkdGg6IHRhYmxlV2lkdGhXaGl0VW5pdCwgdHJhbnNmb3JtOiB0cmFuc2xhdGVYIH19PlxyXG4gICAgICAgICAgey8qIOqwgOuhnCDqtazrtoTshKAg7JiB7JetICovfVxyXG4gICAgICAgICAgPERpdmlkZXIgdmFsdWU9e2NvbHVtbnMubGVuZ3RoIC0gMX0gLz5cclxuXHJcbiAgICAgICAgICB7Lyog6rq+7J2AIOyEoCwg66m0IOyYgeyXrSAqL31cclxuICAgICAgICAgIDxMaW5lXHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIGNvbG9ycz17Y29sb3JzfVxyXG4gICAgICAgICAgICByb3dzPXtyb3dzfVxyXG4gICAgICAgICAgICBjb2x1bW5IZWlnaHQ9e2NvbHVtbkhlaWdodH1cclxuICAgICAgICAgICAgaGVpZ2h0PXt0YWJsZVJlZi5jdXJyZW50Py5jbGllbnRIZWlnaHQgPz8gMH1cclxuICAgICAgICAgICAgdGFibGVSZWY9e3RhYmxlUmVmfVxyXG4gICAgICAgICAgICB0cmlnZ2VyPXt0cmlnZ2VyfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7Lyog7KCQLCDtiLTtjIEsIOyEuOuhnCDshKAg7JiB7JetICovfVxyXG4gICAgICAgICAgPFBvaW50c1xyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBjb2xvcnM9e2NvbG9yc31cclxuICAgICAgICAgICAgb25JbmRleD17b25JbmRleH1cclxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICBjb2x1bW5IZWlnaHQ9e2NvbHVtbkhlaWdodH1cclxuICAgICAgICAgICAgbWF4Um93PXttYXhSb3d9XHJcbiAgICAgICAgICAgIGxpbmVUcmlnZ2VyPXtsaW5lVHJpZ2dlcn1cclxuICAgICAgICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBSb3dzIOyYgeyXrSAqL31cclxuICAgICAgICA8Um93c1xyXG4gICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBtYXhSb3c9e21heFJvd31cclxuICAgICAgICAgIG9uSW5kZXg9e29uSW5kZXh9XHJcbiAgICAgICAgICB0YWJsZVdpZHRoV2hpdFVuaXQ9e3RhYmxlV2lkdGhXaGl0VW5pdH1cclxuICAgICAgICAgIHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZVh9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgey8qIOuyhO2KvCDsmIHsl60gKi99XHJcbiAgICAgICAgPEJ1dHRvbnMgc2xpZGVJbmRleD17c2xpZGVJbmRleH0gc2V0U2xpZGVJbmRleD17c2V0U2xpZGVJbmRleH0gbWF4Um93PXttYXhSb3d9IHZpZXdDb3VudD17dmlld0NvdW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=