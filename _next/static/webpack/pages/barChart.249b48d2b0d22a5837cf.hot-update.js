webpackHotUpdate_N_E("pages/barChart",{

/***/ "./src/components/charts/barChart/type03/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/charts/barChart/type03/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type03_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type03.module.scss */ "./src/components/charts/barChart/type03/type03.module.scss");
/* harmony import */ var _type03_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_type03_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ArrowUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArrowUp */ "./src/components/charts/barChart/type03/ArrowUp.tsx");
/* harmony import */ var _ArrowDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArrowDown */ "./src/components/charts/barChart/type03/ArrowDown.tsx");




var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\barChart\\type03\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_type03_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var getSubText = function getSubText(_ref) {
  var lastYearValue = _ref.lastYearValue,
      thisYearValue = _ref.thisYearValue;
  if (!lastYearValue || lastYearValue === thisYearValue) return '전년대비 보합';
  if (lastYearValue < thisYearValue) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [" \uC804\uB144\uB300\uBE44 \uC0C1\uC2B9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ArrowUp__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 54
    }, _this)]
  }, void 0, true);
  if (lastYearValue > thisYearValue) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: ["\uC804\uB144\uB300\uBE44 \uD558\uB77D", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ArrowDown__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 53
    }, _this)]
  }, void 0, true);
};

var BarChartType03 = function BarChartType03(_ref2) {
  _s();

  var _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'large' : _ref2$type,
      data = _ref2.data,
      _ref2$line = _ref2.line,
      line = _ref2$line === void 0 ? 6 : _ref2$line;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      zeroLineIndex = _useState[0],
      setZeroLineIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      columnHeight = _useState2[0],
      setColumnHeight = _useState2[1];

  var wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var min = Math.min.apply(Math, Object(C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.map(function (d) {
    return d.value;
  })).concat([0]));
  var max = Math.max.apply(Math, Object(C_Users_jgm0531_myProject_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.map(function (d) {
    return d.value;
  })).concat([0]));
  var capacity = Math.abs(max - min);
  var minPer = Math.abs(min / capacity);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setZeroLineIndex(line - Math.round(minPer * (line - 1)) - 1);
    init();
  }, [data]);

  var init = function init() {
    setTimeout(function () {
      if (wrapRef && wrapRef.current) {
        setColumnHeight(wrapRef.current.clientHeight * ((line - 1) / line));
      }
    }, 0);
  };

  var getBar = function getBar() {
    return data.map(function (_ref3, i) {
      var _data, _data2;

      var value = _ref3.value,
          name = _ref3.name;
      var isReverse = value < 0;
      var isLast = i === data.length - 1;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: cx('barWrap'),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: cx('bar', type, {
            reverse: isReverse
          }),
          style: {
            height: "".concat(Math.abs(value / capacity) * columnHeight, "px")
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: cx('tooltip'),
            children: [name, isLast && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: cx('subText'),
              children: getSubText({
                lastYearValue: (_data = data[data.length - 2]) === null || _data === void 0 ? void 0 : _data.value,
                thisYearValue: (_data2 = data[data.length - 1]) === null || _data2 === void 0 ? void 0 : _data2.value
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }, _this);
    });
  };

  var getDividerEl = function getDividerEl() {
    return new Array(line).fill(null).map(function (_, i) {
      var isOn = zeroLineIndex === i;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: cx('divider', {
          on: isOn
        }, type),
        children: isOn && getBar()
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }, _this);
    });
  };

  var getRowsEl = function getRowsEl() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: cx('rowWrap', type),
      children: data.map(function (d, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: cx('row'),
          children: d.row
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this);
  };

  if (!data || data.length === 0) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    ref: wrapRef,
    className: cx('wrap'),
    children: [getDividerEl(), getRowsEl()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, _this);
};

_s(BarChartType03, "jwppLcG4P0wZR1fuRjs85hLniYU=");

_c = BarChartType03;
/* harmony default export */ __webpack_exports__["default"] = (BarChartType03);

var _c;

$RefreshReg$(_c, "BarChartType03");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2JhckNoYXJ0L3R5cGUwMy9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsImdldFN1YlRleHQiLCJsYXN0WWVhclZhbHVlIiwidGhpc1llYXJWYWx1ZSIsIkJhckNoYXJ0VHlwZTAzIiwidHlwZSIsImRhdGEiLCJsaW5lIiwidXNlU3RhdGUiLCJ6ZXJvTGluZUluZGV4Iiwic2V0WmVyb0xpbmVJbmRleCIsImNvbHVtbkhlaWdodCIsInNldENvbHVtbkhlaWdodCIsIndyYXBSZWYiLCJ1c2VSZWYiLCJtaW4iLCJNYXRoIiwibWFwIiwiZCIsInZhbHVlIiwibWF4IiwiY2FwYWNpdHkiLCJhYnMiLCJtaW5QZXIiLCJ1c2VFZmZlY3QiLCJyb3VuZCIsImluaXQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImNsaWVudEhlaWdodCIsImdldEJhciIsImkiLCJuYW1lIiwiaXNSZXZlcnNlIiwiaXNMYXN0IiwibGVuZ3RoIiwicmV2ZXJzZSIsImhlaWdodCIsImdldERpdmlkZXJFbCIsIkFycmF5IiwiZmlsbCIsIl8iLCJpc09uIiwib24iLCJnZXRSb3dzRWwiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDBEQUFoQixDQUFYOztBQWdCQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFxRjtBQUFBLE1BQW5GQyxhQUFtRixRQUFuRkEsYUFBbUY7QUFBQSxNQUFwRUMsYUFBb0UsUUFBcEVBLGFBQW9FO0FBQ3RHLE1BQUcsQ0FBQ0QsYUFBRCxJQUFtQkEsYUFBYSxLQUFLQyxhQUF4QyxFQUF3RCxPQUFPLFNBQVA7QUFDeEQsTUFBR0QsYUFBYSxHQUFHQyxhQUFuQixFQUFr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ZUFERjtBQUtELEtBUjBCLENBQU47QUFBQSxHQUFyQjs7QUFVQSxNQUFNYSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLHdCQUNFO0FBQUssZUFBUyxFQUFFL0MsRUFBRSxDQUFDLFNBQUQsRUFBWVEsSUFBWixDQUFsQjtBQUFBLGdCQUNHQyxJQUFJLENBQUNXLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUlhLENBQUo7QUFBQSw0QkFBVTtBQUFjLG1CQUFTLEVBQUVsQyxFQUFFLENBQUMsS0FBRCxDQUEzQjtBQUFBLG9CQUFxQ3FCLENBQUMsQ0FBQzJCO0FBQXZDLFdBQVdkLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBVjtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFLRCxHQU5EOztBQVFBLE1BQUksQ0FBQ3pCLElBQUQsSUFBU0EsSUFBSSxDQUFDNkIsTUFBTCxLQUFnQixDQUE3QixFQUFnQyxPQUFPLElBQVA7QUFFaEMsc0JBQ0U7QUFBSyxPQUFHLEVBQUV0QixPQUFWO0FBQW1CLGFBQVMsRUFBRWhCLEVBQUUsQ0FBQyxNQUFELENBQWhDO0FBQUEsZUFDR3lDLFlBQVksRUFEZixFQUVHTSxTQUFTLEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQWhGRDs7R0FBTXhDLGM7O0tBQUFBLGM7QUFrRlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JhckNoYXJ0LjI0OWI0OGQyYjBkMjJhNTgzN2NmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vdHlwZTAzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXJyb3dVcCBmcm9tICcuL0Fycm93VXAnO1xyXG5pbXBvcnQgQXJyb3dEb3duIGZyb20gJy4vQXJyb3dEb3duJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5leHBvcnQgdHlwZSBCYXJDaGFydFNpemVUeXBlID0gJ3NtYWxsJyB8ICdsYXJnZSc7XHJcblxyXG5pbnRlcmZhY2UgQmFyQ2hhcnREYXRhIHtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByb3c6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEJhckNoYXJ0VHlwZTAzUHJvcHMge1xyXG4gIHR5cGU/OiBCYXJDaGFydFNpemVUeXBlO1xyXG4gIGRhdGE6IEJhckNoYXJ0RGF0YVtdO1xyXG4gIGxpbmU/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IGdldFN1YlRleHQgPSAoe2xhc3RZZWFyVmFsdWUsIHRoaXNZZWFyVmFsdWV9OiB7bGFzdFllYXJWYWx1ZT86IG51bWJlciwgdGhpc1llYXJWYWx1ZTogbnVtYmVyfSkgPT4ge1xyXG4gIGlmKCFsYXN0WWVhclZhbHVlIHx8IChsYXN0WWVhclZhbHVlID09PSB0aGlzWWVhclZhbHVlKSkgcmV0dXJuICfsoITrhYTrjIDruYQg67O07ZWpJztcclxuICBpZihsYXN0WWVhclZhbHVlIDwgdGhpc1llYXJWYWx1ZSkgcmV0dXJuIDw+IOyghOuFhOuMgOu5hCDsg4Hsirk8QXJyb3dVcC8+PC8+O1xyXG4gIGlmKGxhc3RZZWFyVmFsdWUgPiB0aGlzWWVhclZhbHVlKSByZXR1cm4gPD7soITrhYTrjIDruYQg7ZWY6529PEFycm93RG93bi8+PC8+O1xyXG59XHJcblxyXG5jb25zdCBCYXJDaGFydFR5cGUwMyA9ICh7IHR5cGUgPSAnbGFyZ2UnLCBkYXRhLCBsaW5lID0gNiB9OiBCYXJDaGFydFR5cGUwM1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgW3plcm9MaW5lSW5kZXgsIHNldFplcm9MaW5lSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NvbHVtbkhlaWdodCwgc2V0Q29sdW1uSGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi5kYXRhLm1hcChkID0+IGQudmFsdWUpLCAwKTtcclxuICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5kYXRhLm1hcChkID0+IGQudmFsdWUpLCAwKTtcclxuICBjb25zdCBjYXBhY2l0eSA9IE1hdGguYWJzKG1heCAtIG1pbik7XHJcbiAgY29uc3QgbWluUGVyID0gTWF0aC5hYnMobWluIC8gY2FwYWNpdHkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0WmVyb0xpbmVJbmRleChsaW5lIC0gTWF0aC5yb3VuZChtaW5QZXIgKiAobGluZSAtIDEpKSAtIDEpO1xyXG4gICAgaW5pdCgpO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYod3JhcFJlZiAmJiB3cmFwUmVmLmN1cnJlbnQpe1xyXG4gICAgICAgIHNldENvbHVtbkhlaWdodCh3cmFwUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICogKChsaW5lIC0gMSkgLyBsaW5lKSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDApXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRCYXIgPSAoKSA9PiBkYXRhLm1hcCgoeyB2YWx1ZSwgbmFtZSB9LCBpKSA9PiB7XHJcbiAgICBjb25zdCBpc1JldmVyc2UgPSB2YWx1ZSA8IDA7XHJcbiAgICBjb25zdCBpc0xhc3QgPSBpID09PSBkYXRhLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17Y3goJ2JhcldyYXAnKX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgnYmFyJywgdHlwZSwgeyByZXZlcnNlOiBpc1JldmVyc2UgfSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGAke01hdGguYWJzKHZhbHVlIC8gY2FwYWNpdHkpICogY29sdW1uSGVpZ2h0fXB4YCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3Rvb2x0aXAnKX0+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaXNMYXN0ICYmXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnc3ViVGV4dCcpfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgZ2V0U3ViVGV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFllYXJWYWx1ZTogZGF0YVtkYXRhLmxlbmd0aCAtIDJdPy52YWx1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1llYXJWYWx1ZTogZGF0YVtkYXRhLmxlbmd0aCAtIDFdPy52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZ2V0RGl2aWRlckVsID0gKCkgPT4gbmV3IEFycmF5KGxpbmUpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiB7XHJcbiAgICBjb25zdCBpc09uID0gemVyb0xpbmVJbmRleCA9PT0gaTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtjeCgnZGl2aWRlcicsIHsgb246IGlzT24gfSwgdHlwZSl9PlxyXG4gICAgICAgIHtpc09uICYmIGdldEJhcigpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9KVxyXG5cclxuICBjb25zdCBnZXRSb3dzRWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3Jvd1dyYXAnLCB0eXBlKX0+XHJcbiAgICAgICAge2RhdGEubWFwKChkLCBpKSA9PiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17Y3goJ3JvdycpfT57ZC5yb3d9PC9zcGFuPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXt3cmFwUmVmfSBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG4gICAgICB7Z2V0RGl2aWRlckVsKCl9XHJcbiAgICAgIHtnZXRSb3dzRWwoKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnRUeXBlMDM7Il0sInNvdXJjZVJvb3QiOiIifQ==