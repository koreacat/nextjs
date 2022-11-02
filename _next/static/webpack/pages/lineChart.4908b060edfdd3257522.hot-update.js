webpackHotUpdate_N_E("pages/lineChart",{

/***/ "./src/pages/lineChart.tsx":
/*!*********************************!*\
  !*** ./src/pages/lineChart.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/charts/lineChart */ "./src/components/charts/lineChart/index.tsx");
/* harmony import */ var src_components_charts_lineChart_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/charts/lineChart/tooltip */ "./src/components/charts/lineChart/tooltip/index.tsx");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/grid */ "./src/components/common/grid/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\pages\\lineChart.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var chartColosMap = {
  ALL: 'black',
  ENTRANT: 'green',
  RETIREE: 'blue'
};
var res = {
  ALL: [2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0],
  ENTRANT: [55, 60, 65, 70, 75, 80, 80, 80, 80, 85, 90, 95],
  RETIREE: [55, 60, 65, 70, 75, 80, 80, 80, 80, 85, 90, 95]
};
var rowValue = ['21.01', '21.02', '21.03', '21.04', '21.05', '21.06', '21.07', '21.08', '21.09', '21.10', '21.11', '21.12'];

var LineChartPage = function LineChartPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('ALL'),
      employeeType = _useState[0],
      setEmployeeType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      yearsValue = _useState2[0],
      setYearsValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      trigger = _useState3[0],
      setTrigger = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      data = _useState4[0],
      setData = _useState4[1];

  var getUnit = function getUnit() {
    var max = Math.max.apply(Math, Object(C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data));
    var exponent = Math.pow(10, max.toString().length - 1);
    return Math.ceil((Math.ceil(max / exponent) * exponent + 3 * exponent) / 5);
  };

  var getColumns = function getColumns() {
    return new Array(6).fill(null).map(function (_, i) {
      return "".concat(i * getUnit(), "\uBA85");
    });
  };

  var getRows = function getRows() {
    return rowValue;
  };

  var getChartData = function getChartData(type) {
    switch (type) {
      case 'ALL':
        return data.map(function (value, i) {
          return {
            column: value / getUnit(),
            toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
              value: "\uCD1D ".concat(value, "\uBA85"),
              type: chartColosMap[type]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 22
            }, _this)
          };
        });

      case 'ENTRANT':
        return data.map(function (value, i) {
          return {
            column: value / getUnit(),
            toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
              value: "\uC785\uC0AC\uC790: ".concat(value, "\uBA85"),
              type: chartColosMap[type]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 22
            }, _this)
          };
        });

      case 'RETIREE':
        return data.map(function (value, i) {
          return {
            column: value / getUnit(),
            toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
              value: "\uD1F4\uC0AC\uC790: ".concat(value, "\uBA85"),
              type: chartColosMap[type]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 22
            }, _this)
          };
        });
    }
  };

  var handleClick = function handleClick(type) {
    setEmployeeType(type);
    animation();
  };

  var handleChange = function handleChange(e) {
    setYearsValue(e.target.value);
    animation();
  };

  var animation = function animation() {
    setTrigger(false);
    setTimeout(function () {
      return setTrigger(true);
    }, 0);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    setData(res[employeeType]);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          padding: '100px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return handleClick('ALL');
            },
            children: "Black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return handleClick('ENTRANT');
            },
            style: {
              marginLeft: '12px'
            },
            children: "Green"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return handleClick('RETIREE');
            },
            style: {
              marginLeft: '12px'
            },
            children: "Blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            value: yearsValue,
            onChange: handleChange,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: '2020',
              children: "2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: '2021',
              children: "2021"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: '2022',
              children: "2022"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: '1400px',
            height: '484px',
            marginTop: '100px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
            colors: chartColosMap[employeeType],
            rows: getRows(),
            columns: getColumns(),
            data: getChartData(employeeType),
            onIndex: 11,
            viewCount: 12,
            trigger: trigger
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, _this);
};

_s(LineChartPage, "QSmFvcVZ1G0AJ7zzZY+DY3n3DLc=");

_c = LineChartPage;
/* harmony default export */ __webpack_exports__["default"] = (LineChartPage);

var _c;

$RefreshReg$(_c, "LineChartPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xpbmVDaGFydC50c3giXSwibmFtZXMiOlsiY2hhcnRDb2xvc01hcCIsIkFMTCIsIkVOVFJBTlQiLCJSRVRJUkVFIiwicmVzIiwicm93VmFsdWUiLCJMaW5lQ2hhcnRQYWdlIiwidXNlU3RhdGUiLCJlbXBsb3llZVR5cGUiLCJzZXRFbXBsb3llZVR5cGUiLCJ5ZWFyc1ZhbHVlIiwic2V0WWVhcnNWYWx1ZSIsInRyaWdnZXIiLCJzZXRUcmlnZ2VyIiwiZGF0YSIsInNldERhdGEiLCJnZXRVbml0IiwibWF4IiwiTWF0aCIsImV4cG9uZW50IiwidG9TdHJpbmciLCJsZW5ndGgiLCJjZWlsIiwiZ2V0Q29sdW1ucyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiZ2V0Um93cyIsImdldENoYXJ0RGF0YSIsInR5cGUiLCJ2YWx1ZSIsImNvbHVtbiIsInRvb2xUaXAiLCJoYW5kbGVDbGljayIsImFuaW1hdGlvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBLElBQU1BLGFBQXdELEdBQUc7QUFDL0RDLEtBQUcsRUFBRSxPQUQwRDtBQUUvREMsU0FBTyxFQUFFLE9BRnNEO0FBRy9EQyxTQUFPLEVBQUU7QUFIc0QsQ0FBakU7QUFNQSxJQUFNQyxHQUFHLEdBQUc7QUFDVkgsS0FBRyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsRUFBekIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FESztBQUVWQyxTQUFP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QSxpQkFERixlQVdFO0FBQUssZUFBSyxFQUFFO0FBQUNPLGlCQUFLLEVBQUUsUUFBUjtBQUFrQkMsa0JBQU0sRUFBRSxPQUExQjtBQUFtQ0MscUJBQVMsRUFBRTtBQUE5QyxXQUFaO0FBQUEsaUNBQ0UscUVBQUMsdUVBQUQ7QUFDRSxrQkFBTSxFQUFFOUMsYUFBYSxDQUFDUSxZQUFELENBRHZCO0FBRUUsZ0JBQUksRUFBRXFCLE9BQU8sRUFGZjtBQUdFLG1CQUFPLEVBQUVOLFVBQVUsRUFIckI7QUFJRSxnQkFBSSxFQUFFTyxZQUFZLENBQUN0QixZQUFELENBSnBCO0FBS0UsbUJBQU8sRUFBRSxFQUxYO0FBTUUscUJBQVMsRUFBRSxFQU5iO0FBT0UsbUJBQU8sRUFBRUk7QUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0EvRkQ7O0dBQU1OLGE7O0tBQUFBLGE7QUFpR1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpbmVDaGFydC40OTA4YjA2MGVkZmRkMzI1NzUyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBDb250ZW50cyBmcm9tIFwiQGNvbXBvbmVudHMvY29udGVudHNcIjtcclxuaW1wb3J0IExpbmVDaGFydCBmcm9tIFwic3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydFwiO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwic3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC90b29sdGlwXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAY29tcG9uZW50cy9ncmlkXCI7XHJcbmltcG9ydCB7Q2hhcnREYXRhLCBMaW5lQ2hhcnRDb2xvcnNUeXBlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L2RhdGFcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgRW1wbG95ZWVUeXBlID0gJ0FMTCcgfCAnRU5UUkFOVCcgfCAnUkVUSVJFRSc7XHJcblxyXG5jb25zdCBjaGFydENvbG9zTWFwOiBSZWNvcmQ8RW1wbG95ZWVUeXBlLCBMaW5lQ2hhcnRDb2xvcnNUeXBlPiA9IHtcclxuICBBTEw6ICdibGFjaycsXHJcbiAgRU5UUkFOVDogJ2dyZWVuJyxcclxuICBSRVRJUkVFOiAnYmx1ZScsXHJcbn07XHJcblxyXG5jb25zdCByZXMgPSB7XHJcbiAgQUxMOiBbMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDAsIDBdLFxyXG4gIEVOVFJBTlQ6IFs1NSwgNjAsIDY1LCA3MCwgNzUsIDgwLCA4MCwgODAsIDgwLCA4NSwgOTAsIDk1XSxcclxuICBSRVRJUkVFOiBbNTUsIDYwLCA2NSwgNzAsIDc1LCA4MCwgODAsIDgwLCA4MCwgODUsIDkwLCA5NV0sXHJcbn1cclxuXHJcbmNvbnN0IHJvd1ZhbHVlID0gW1xyXG4gICcyMS4wMScsICcyMS4wMicsICcyMS4wMycsICcyMS4wNCcsXHJcbiAgJzIxLjA1JywgJzIxLjA2JywgJzIxLjA3JywgJzIxLjA4JyxcclxuICAnMjEuMDknLCAnMjEuMTAnLCAnMjEuMTEnLCAnMjEuMTInLFxyXG5dXHJcblxyXG5jb25zdCBMaW5lQ2hhcnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbXBsb3llZVR5cGUsIHNldEVtcGxveWVlVHlwZV0gPSB1c2VTdGF0ZTxFbXBsb3llZVR5cGU+KCdBTEwnKTtcclxuICBjb25zdCBbeWVhcnNWYWx1ZSwgc2V0WWVhcnNWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbdHJpZ2dlciwgc2V0VHJpZ2dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRVbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uZGF0YSk7XHJcbiAgICBjb25zdCBleHBvbmVudCA9IDEwICoqIChtYXgudG9TdHJpbmcoKS5sZW5ndGggLSAxKTtcclxuICAgIHJldHVybiBNYXRoLmNlaWwoKE1hdGguY2VpbChtYXggLyBleHBvbmVudCkgKiBleHBvbmVudCArIDMgKiBleHBvbmVudCkgLyA1KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDb2x1bW5zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheSg2KS5maWxsKG51bGwpLm1hcCgoXywgaSkgPT4gYCR7aSAqIGdldFVuaXQoKX3rqoVgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSb3dzID0gKCkgPT4gcm93VmFsdWU7XHJcblxyXG4gIGNvbnN0IGdldENoYXJ0RGF0YSA9ICh0eXBlOiBFbXBsb3llZVR5cGUpOiBDaGFydERhdGFbXSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnQUxMJzpcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb2x1bW46IHZhbHVlIC8gZ2V0VW5pdCgpLFxyXG4gICAgICAgICAgICB0b29sVGlwOiA8VG9vbHRpcCB2YWx1ZT17YOy0nSAke3ZhbHVlfeuqhWB9IHR5cGU9e2NoYXJ0Q29sb3NNYXBbdHlwZV19Lz4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNhc2UgJ0VOVFJBTlQnOlxyXG4gICAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbHVtbjogdmFsdWUgLyBnZXRVbml0KCksXHJcbiAgICAgICAgICAgIHRvb2xUaXA6IDxUb29sdGlwIHZhbHVlPXtg7J6F7IKs7J6QOiAke3ZhbHVlfeuqhWB9IHR5cGU9e2NoYXJ0Q29sb3NNYXBbdHlwZV19Lz4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNhc2UgJ1JFVElSRUUnIDpcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb2x1bW46IHZhbHVlIC8gZ2V0VW5pdCgpLFxyXG4gICAgICAgICAgICB0b29sVGlwOiA8VG9vbHRpcCB2YWx1ZT17YO2HtOyCrOyekDogJHt2YWx1ZX3rqoVgfSB0eXBlPXtjaGFydENvbG9zTWFwW3R5cGVdfS8+LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHR5cGU6IEVtcGxveWVlVHlwZSkgPT4ge1xyXG4gICAgc2V0RW1wbG95ZWVUeXBlKHR5cGUpO1xyXG4gICAgYW5pbWF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0WWVhcnNWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBhbmltYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIHNldFRyaWdnZXIoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRUcmlnZ2VyKHRydWUpLCAwKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGEocmVzW2VtcGxveWVlVHlwZV0pO1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEdyaWQgc2l6ZT17NTB9Lz5cclxuICAgICAgPENvbnRlbnRzPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzEwMHB4J319PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnQUxMJyl9PkJsYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ0VOVFJBTlQnKX0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTJweCd9fT5HcmVlbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdSRVRJUkVFJyl9IHN0eWxlPXt7bWFyZ2luTGVmdDogJzEycHgnfX0+Qmx1ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt5ZWFyc1ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnMjAyMCd9PjIwMjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnMjAyMSd9PjIwMjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnMjAyMid9PjIwMjI8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzE0MDBweCcsIGhlaWdodDogJzQ4NHB4JywgbWFyZ2luVG9wOiAnMTAwcHgnfX0+XHJcbiAgICAgICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgICAgICBjb2xvcnM9e2NoYXJ0Q29sb3NNYXBbZW1wbG95ZWVUeXBlXX1cclxuICAgICAgICAgICAgICByb3dzPXtnZXRSb3dzKCl9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17Z2V0Q29sdW1ucygpfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2dldENoYXJ0RGF0YShlbXBsb3llZVR5cGUpfVxyXG4gICAgICAgICAgICAgIG9uSW5kZXg9ezExfVxyXG4gICAgICAgICAgICAgIHZpZXdDb3VudD17MTJ9XHJcbiAgICAgICAgICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcblxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=