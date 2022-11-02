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
  ENTRANT: [55, 60, 65, 70, 75, 80, 80, 80, 80, 85, 90, 95],
  RETIREE: [155, 560, 635, 230, 275, 780, 850, 580, 580, 851, 690, 935]
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
      lineNumber: 95,
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
            lineNumber: 100,
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
            lineNumber: 101,
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
            lineNumber: 102,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
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
            lineNumber: 110,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xpbmVDaGFydC50c3giXSwibmFtZXMiOlsiY2hhcnRDb2xvc01hcCIsIkFMTCIsIkVOVFJBTlQiLCJSRVRJUkVFIiwicmVzIiwicm93VmFsdWUiLCJMaW5lQ2hhcnRQYWdlIiwidXNlU3RhdGUiLCJlbXBsb3llZVR5cGUiLCJzZXRFbXBsb3llZVR5cGUiLCJ5ZWFyc1ZhbHVlIiwic2V0WWVhcnNWYWx1ZSIsInRyaWdnZXIiLCJzZXRUcmlnZ2VyIiwiZGF0YSIsInNldERhdGEiLCJnZXRVbml0IiwibWF4IiwiTWF0aCIsImV4cG9uZW50IiwidG9TdHJpbmciLCJsZW5ndGgiLCJjZWlsIiwiZ2V0Q29sdW1ucyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiZ2V0Um93cyIsImdldENoYXJ0RGF0YSIsInR5cGUiLCJ2YWx1ZSIsImNvbHVtbiIsInRvb2xUaXAiLCJoYW5kbGVDbGljayIsImFuaW1hdGlvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBLElBQU1BLGFBQXdELEdBQUc7QUFDL0RDLEtBQUcsRUFBRSxPQUQwRDtBQUUvREMsU0FBTyxFQUFFLE9BRnNEO0FBRy9EQyxTQUFPLEVBQUU7QUFIc0QsQ0FBakU7QUFNQSxJQUFNQyxHQUFHLEdBQUc7QUFDVkgsS0FBRyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FE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QUhyQjtBQUlFLGdCQUFJLEVBQUVPLFlBQVksQ0FBQ3RCLFlBQUQsQ0FKcEI7QUFLRSxtQkFBTyxFQUFFLEVBTFg7QUFNRSxxQkFBUyxFQUFFLEVBTmI7QUFPRSxtQkFBTyxFQUFFSTtBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWhHRDs7R0FBTU4sYTs7S0FBQUEsYTtBQWtHU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGluZUNoYXJ0LjYzMjRlNTgwMWY3MzgyZWVmMjMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IENvbnRlbnRzIGZyb20gXCJAY29tcG9uZW50cy9jb250ZW50c1wiO1xyXG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gXCJzcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0XCI7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCJzcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L3Rvb2x0aXBcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBjb21wb25lbnRzL2dyaWRcIjtcclxuaW1wb3J0IHtDaGFydERhdGEsIExpbmVDaGFydENvbG9yc1R5cGV9IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvZGF0YVwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBFbXBsb3llZVR5cGUgPSAnQUxMJyB8ICdFTlRSQU5UJyB8ICdSRVRJUkVFJztcclxuXHJcbmNvbnN0IGNoYXJ0Q29sb3NNYXA6IFJlY29yZDxFbXBsb3llZVR5cGUsIExpbmVDaGFydENvbG9yc1R5cGU+ID0ge1xyXG4gIEFMTDogJ2JsYWNrJyxcclxuICBFTlRSQU5UOiAnZ3JlZW4nLFxyXG4gIFJFVElSRUU6ICdibHVlJyxcclxufTtcclxuXHJcbmNvbnN0IHJlcyA9IHtcclxuICBBTEw6IFsyLCAzLCA0LCA1LCA0LCAxLCAyLCAzLCA0LCA0LCAzLCA3XSxcclxuICBFTlRSQU5UOiBbNTUsIDYwLCA2NSwgNzAsIDc1LCA4MCwgODAsIDgwLCA4MCwgODUsIDkwLCA5NV0sXHJcbiAgUkVUSVJFRTogWzE1NSwgNTYwLCA2MzUsIDIzMCwgMjc1LCA3ODAsIDg1MCwgNTgwLCA1ODAsIDg1MSwgNjkwLCA5MzVdLFxyXG59XHJcblxyXG5jb25zdCByb3dWYWx1ZSA9IFtcclxuICAnMjEuMDEnLCAnMjEuMDInLCAnMjEuMDMnLCAnMjEuMDQnLFxyXG4gICcyMS4wNScsICcyMS4wNicsICcyMS4wNycsICcyMS4wOCcsXHJcbiAgJzIxLjA5JywgJzIxLjEwJywgJzIxLjExJywgJzIxLjEyJyxcclxuXVxyXG5cclxuY29uc3QgTGluZUNoYXJ0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbZW1wbG95ZWVUeXBlLCBzZXRFbXBsb3llZVR5cGVdID0gdXNlU3RhdGU8RW1wbG95ZWVUeXBlPignQUxMJyk7XHJcbiAgY29uc3QgW3llYXJzVmFsdWUsIHNldFllYXJzVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3RyaWdnZXIsIHNldFRyaWdnZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRVbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uZGF0YSk7XHJcbiAgICBjb25zdCBleHBvbmVudCA9IDEwICoqIChtYXgudG9TdHJpbmcoKS5sZW5ndGggLSAxKTtcclxuICAgIHJldHVybiBNYXRoLmNlaWwoKE1hdGguY2VpbChtYXggLyBleHBvbmVudCkgKiBleHBvbmVudCArIDMgKiBleHBvbmVudCkgLyA1KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDb2x1bW5zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheSg2KS5maWxsKG51bGwpLm1hcCgoXywgaSkgPT4gYCR7aSAqIGdldFVuaXQoKX3rqoVgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSb3dzID0gKCkgPT4gcm93VmFsdWU7XHJcblxyXG4gIGNvbnN0IGdldENoYXJ0RGF0YSA9ICh0eXBlOiBFbXBsb3llZVR5cGUpOiBDaGFydERhdGFbXSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnQUxMJzpcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb2x1bW46IHZhbHVlIC8gZ2V0VW5pdCgpLFxyXG4gICAgICAgICAgICB0b29sVGlwOiA8VG9vbHRpcCB2YWx1ZT17YOy0nSAke3ZhbHVlfeuqhWB9IHR5cGU9e2NoYXJ0Q29sb3NNYXBbdHlwZV19Lz4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNhc2UgJ0VOVFJBTlQnOlxyXG4gICAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbHVtbjogdmFsdWUgLyBnZXRVbml0KCksXHJcbiAgICAgICAgICAgIHRvb2xUaXA6IDxUb29sdGlwIHZhbHVlPXtg7J6F7IKs7J6QOiAke3ZhbHVlfeuqhWB9IHR5cGU9e2NoYXJ0Q29sb3NNYXBbdHlwZV19Lz4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNhc2UgJ1JFVElSRUUnIDpcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb2x1bW46IHZhbHVlIC8gZ2V0VW5pdCgpLFxyXG4gICAgICAgICAgICB0b29sVGlwOiA8VG9vbHRpcCB2YWx1ZT17YO2HtOyCrOyekDogJHt2YWx1ZX3rqoVgfSB0eXBlPXtjaGFydENvbG9zTWFwW3R5cGVdfS8+LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHR5cGU6IEVtcGxveWVlVHlwZSkgPT4ge1xyXG4gICAgc2V0RGF0YShyZXNbdHlwZV0pO1xyXG4gICAgc2V0RW1wbG95ZWVUeXBlKHR5cGUpO1xyXG4gICAgYW5pbWF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0WWVhcnNWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBhbmltYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIHNldFRyaWdnZXIoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRUcmlnZ2VyKHRydWUpLCAwKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGEocmVzW2VtcGxveWVlVHlwZV0pO1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEdyaWQgc2l6ZT17NTB9Lz5cclxuICAgICAgPENvbnRlbnRzPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzEwMHB4J319PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnQUxMJyl9PkJsYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ0VOVFJBTlQnKX0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTJweCd9fT5HcmVlbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdSRVRJUkVFJyl9IHN0eWxlPXt7bWFyZ2luTGVmdDogJzEycHgnfX0+Qmx1ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7Lyo8c2VsZWN0IHZhbHVlPXt5ZWFyc1ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT4qL31cclxuICAgICAgICAgICAgey8qICA8b3B0aW9uIHZhbHVlPXsnMjAyMCd9PjIwMjA8L29wdGlvbj4qL31cclxuICAgICAgICAgICAgey8qICA8b3B0aW9uIHZhbHVlPXsnMjAyMSd9PjIwMjE8L29wdGlvbj4qL31cclxuICAgICAgICAgICAgey8qICA8b3B0aW9uIHZhbHVlPXsnMjAyMid9PjIwMjI8L29wdGlvbj4qL31cclxuICAgICAgICAgICAgey8qPC9zZWxlY3Q+Ki99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzE0MDBweCcsIGhlaWdodDogJzQ4NHB4JywgbWFyZ2luVG9wOiAnMTAwcHgnfX0+XHJcbiAgICAgICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgICAgICBjb2xvcnM9e2NoYXJ0Q29sb3NNYXBbZW1wbG95ZWVUeXBlXX1cclxuICAgICAgICAgICAgICByb3dzPXtnZXRSb3dzKCl9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17Z2V0Q29sdW1ucygpfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2dldENoYXJ0RGF0YShlbXBsb3llZVR5cGUpfVxyXG4gICAgICAgICAgICAgIG9uSW5kZXg9ezExfVxyXG4gICAgICAgICAgICAgIHZpZXdDb3VudD17MTJ9XHJcbiAgICAgICAgICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcblxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=