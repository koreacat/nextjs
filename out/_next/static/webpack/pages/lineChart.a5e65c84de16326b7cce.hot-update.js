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
  ALL: [2, 3, 4, 5, 4, 1, 2, 3, 4, 4, 3, 7],
  ENTRANT: [55, 60, 65, 70],
  RETIREE: [155, 560, 635, 230, 275, 780, 850, 580, 580, 851, 690, 935]
};
var rowValue = {
  ALL: ['21.01', '21.02', '21.03', '21.04', '21.05', '21.06', '21.07', '21.08', '21.09', '21.10', '21.11', '21.12'],
  ENTRANT: ['21.01', '21.02', '21.03', '21.04'],
  RETIREE: ['21.01', '21.02', '21.03', '21.04', '21.05', '21.06', '21.07', '21.08', '21.09', '21.10', '21.11', '21.12']
};

var LineChartPage = function LineChartPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('ALL'),
      employeeType = _useState[0],
      setEmployeeType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      yearsValue = _useState2[0],
      setYearsValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(true),
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
    return rowValue[employeeType];
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
              lineNumber: 65,
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
              lineNumber: 72,
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
              lineNumber: 79,
              columnNumber: 22
            }, _this)
          };
        });
    }
  };

  var handleClick = function handleClick(type) {
    setData(res[type]);
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
      lineNumber: 107,
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
            lineNumber: 112,
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
            lineNumber: 113,
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
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
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
            onIndex: data.length,
            viewCount: 12,
            trigger: trigger
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, _this);
};

_s(LineChartPage, "IjRJLjuG8PcrwubcSiqNiGUaPRk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xpbmVDaGFydC50c3giXSwibmFtZXMiOlsiY2hhcnRDb2xvc01hcCIsIkFMTCIsIkVOVFJBTlQiLCJSRVRJUkVFIiwicmVzIiwicm93VmFsdWUiLCJMaW5lQ2hhcnRQYWdlIiwidXNlU3RhdGUiLCJlbXBsb3llZVR5cGUiLCJzZXRFbXBsb3llZVR5cGUiLCJ5ZWFyc1ZhbHVlIiwic2V0WWVhcnNWYWx1ZSIsInRyaWdnZXIiLCJzZXRUcmlnZ2VyIiwiZGF0YSIsInNldERhdGEiLCJnZXRVbml0IiwibWF4IiwiTWF0aCIsImV4cG9uZW50IiwidG9TdHJpbmciLCJsZW5ndGgiLCJjZWlsIiwiZ2V0Q29sdW1ucyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiZ2V0Um93cyIsImdldENoYXJ0RGF0YSIsInR5cGUiLCJ2YWx1ZSIsImNvbHVtbiIsInRvb2xUaXAiLCJoYW5kbGVDbGljayIsImFuaW1hdGlvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBLElBQU1BLGFBQXdELEdBQUc7QUFDL0RDLEtBQUcsRUFBRSxPQUQwRDtBQUUvREMsU0FBTyxFQUFFLE9BRnNEO0FBRy9EQyxTQUFPLEVBQUU7QUFIc0QsQ0FBakU7QUFNQSxJQUFNQyxHQUFHLEdBQUc7QUFDVkgsS0FBRyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FE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LGtCQUFNLEVBQUUsT0FBMUI7QUFBbUNDLHFCQUFTLEVBQUU7QUFBOUMsV0FBWjtBQUFBLGlDQUNFLHFFQUFDLHVFQUFEO0FBQ0Usa0JBQU0sRUFBRTlDLGFBQWEsQ0FBQ1EsWUFBRCxDQUR2QjtBQUVFLGdCQUFJLEVBQUVxQixPQUFPLEVBRmY7QUFHRSxtQkFBTyxFQUFFTixVQUFVLEVBSHJCO0FBSUUsZ0JBQUksRUFBRU8sWUFBWSxDQUFDdEIsWUFBRCxDQUpwQjtBQUtFLG1CQUFPLEVBQUVNLElBQUksQ0FBQ08sTUFMaEI7QUFNRSxxQkFBUyxFQUFFLEVBTmI7QUFPRSxtQkFBTyxFQUFFVDtBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWhHRDs7R0FBTU4sYTs7S0FBQUEsYTtBQWtHU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGluZUNoYXJ0LmE1ZTY1Yzg0ZGUxNjMyNmI3Y2NlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IENvbnRlbnRzIGZyb20gXCJAY29tcG9uZW50cy9jb250ZW50c1wiO1xyXG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gXCJzcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0XCI7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCJzcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L3Rvb2x0aXBcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBjb21wb25lbnRzL2dyaWRcIjtcclxuaW1wb3J0IHtDaGFydERhdGEsIExpbmVDaGFydENvbG9yc1R5cGV9IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvZGF0YVwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBFbXBsb3llZVR5cGUgPSAnQUxMJyB8ICdFTlRSQU5UJyB8ICdSRVRJUkVFJztcclxuXHJcbmNvbnN0IGNoYXJ0Q29sb3NNYXA6IFJlY29yZDxFbXBsb3llZVR5cGUsIExpbmVDaGFydENvbG9yc1R5cGU+ID0ge1xyXG4gIEFMTDogJ2JsYWNrJyxcclxuICBFTlRSQU5UOiAnZ3JlZW4nLFxyXG4gIFJFVElSRUU6ICdibHVlJyxcclxufTtcclxuXHJcbmNvbnN0IHJlcyA9IHtcclxuICBBTEw6IFsyLCAzLCA0LCA1LCA0LCAxLCAyLCAzLCA0LCA0LCAzLCA3XSxcclxuICBFTlRSQU5UOiBbNTUsIDYwLCA2NSwgNzBdLFxyXG4gIFJFVElSRUU6IFsxNTUsIDU2MCwgNjM1LCAyMzAsIDI3NSwgNzgwLCA4NTAsIDU4MCwgNTgwLCA4NTEsIDY5MCwgOTM1XSxcclxufVxyXG5cclxuY29uc3Qgcm93VmFsdWUgPSAge1xyXG4gIEFMTDogW1xyXG4gICAgJzIxLjAxJywgJzIxLjAyJywgJzIxLjAzJywgJzIxLjA0JyxcclxuICAgICcyMS4wNScsICcyMS4wNicsICcyMS4wNycsICcyMS4wOCcsXHJcbiAgICAnMjEuMDknLCAnMjEuMTAnLCAnMjEuMTEnLCAnMjEuMTInLFxyXG4gIF0sXHJcbiAgRU5UUkFOVDogW1xyXG4gICAgJzIxLjAxJywgJzIxLjAyJywgJzIxLjAzJywgJzIxLjA0JyxcclxuICBdLFxyXG4gIFJFVElSRUU6IFtcclxuICAgICcyMS4wMScsICcyMS4wMicsICcyMS4wMycsICcyMS4wNCcsXHJcbiAgICAnMjEuMDUnLCAnMjEuMDYnLCAnMjEuMDcnLCAnMjEuMDgnLFxyXG4gICAgJzIxLjA5JywgJzIxLjEwJywgJzIxLjExJywgJzIxLjEyJyxcclxuICBdLFxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IExpbmVDaGFydFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtcGxveWVlVHlwZSwgc2V0RW1wbG95ZWVUeXBlXSA9IHVzZVN0YXRlPEVtcGxveWVlVHlwZT4oJ0FMTCcpO1xyXG4gIGNvbnN0IFt5ZWFyc1ZhbHVlLCBzZXRZZWFyc1ZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt0cmlnZ2VyLCBzZXRUcmlnZ2VyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0VW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmRhdGEpO1xyXG4gICAgY29uc3QgZXhwb25lbnQgPSAxMCAqKiAobWF4LnRvU3RyaW5nKCkubGVuZ3RoIC0gMSk7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKChNYXRoLmNlaWwobWF4IC8gZXhwb25lbnQpICogZXhwb25lbnQgKyAzICogZXhwb25lbnQpIC8gNSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29sdW1ucyA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkoNikuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+IGAke2kgKiBnZXRVbml0KCl966qFYCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Um93cyA9ICgpID0+IHJvd1ZhbHVlW2VtcGxveWVlVHlwZV07XHJcblxyXG4gIGNvbnN0IGdldENoYXJ0RGF0YSA9ICh0eXBlOiBFbXBsb3llZVR5cGUpOiBDaGFydERhdGFbXSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnQUxMJzpcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb2x1bW46IHZhbHVlIC8gZ2V0VW5pdCgpLFxyXG4gICAgICAgICAgICB0b29sVGlwOiA8VG9vbHRpcCB2YWx1ZT17YOy0nSAke3ZhbHVlfeuqhWB9IHR5cGU9e2NoYXJ0Q29sb3NNYXBbdHlwZV19Lz4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNhc2UgJ0VOVFJBTlQnOlxyXG4gICAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbHVtbjogdmFsdWUgLyBnZXRVbml0KCksXHJcbiAgICAgICAgICAgIHRvb2xUaXA6IDxUb29sdGlwIHZhbHVlPXtg7J6F7IKs7J6QOiAke3ZhbHVlfeuqhWB9IHR5cGU9e2NoYXJ0Q29sb3NNYXBbdHlwZV19Lz4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNhc2UgJ1JFVElSRUUnIDpcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb2x1bW46IHZhbHVlIC8gZ2V0VW5pdCgpLFxyXG4gICAgICAgICAgICB0b29sVGlwOiA8VG9vbHRpcCB2YWx1ZT17YO2HtOyCrOyekDogJHt2YWx1ZX3rqoVgfSB0eXBlPXtjaGFydENvbG9zTWFwW3R5cGVdfS8+LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHR5cGU6IEVtcGxveWVlVHlwZSkgPT4ge1xyXG4gICAgc2V0RGF0YShyZXNbdHlwZV0pO1xyXG4gICAgc2V0RW1wbG95ZWVUeXBlKHR5cGUpO1xyXG4gICAgYW5pbWF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0WWVhcnNWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBhbmltYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIHNldFRyaWdnZXIoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRUcmlnZ2VyKHRydWUpLCAwKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGEocmVzW2VtcGxveWVlVHlwZV0pO1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEdyaWQgc2l6ZT17NTB9Lz5cclxuICAgICAgPENvbnRlbnRzPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzEwMHB4J319PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnQUxMJyl9PkJsYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ0VOVFJBTlQnKX0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTJweCd9fT5HcmVlbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdSRVRJUkVFJyl9IHN0eWxlPXt7bWFyZ2luTGVmdDogJzEycHgnfX0+Qmx1ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7Lyo8c2VsZWN0IHZhbHVlPXt5ZWFyc1ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT4qL31cclxuICAgICAgICAgICAgey8qICA8b3B0aW9uIHZhbHVlPXsnMjAyMCd9PjIwMjA8L29wdGlvbj4qL31cclxuICAgICAgICAgICAgey8qICA8b3B0aW9uIHZhbHVlPXsnMjAyMSd9PjIwMjE8L29wdGlvbj4qL31cclxuICAgICAgICAgICAgey8qICA8b3B0aW9uIHZhbHVlPXsnMjAyMid9PjIwMjI8L29wdGlvbj4qL31cclxuICAgICAgICAgICAgey8qPC9zZWxlY3Q+Ki99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzE0MDBweCcsIGhlaWdodDogJzQ4NHB4JywgbWFyZ2luVG9wOiAnMTAwcHgnfX0+XHJcbiAgICAgICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgICAgICBjb2xvcnM9e2NoYXJ0Q29sb3NNYXBbZW1wbG95ZWVUeXBlXX1cclxuICAgICAgICAgICAgICByb3dzPXtnZXRSb3dzKCl9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17Z2V0Q29sdW1ucygpfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2dldENoYXJ0RGF0YShlbXBsb3llZVR5cGUpfVxyXG4gICAgICAgICAgICAgIG9uSW5kZXg9e2RhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICAgIHZpZXdDb3VudD17MTJ9XHJcbiAgICAgICAgICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcblxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=