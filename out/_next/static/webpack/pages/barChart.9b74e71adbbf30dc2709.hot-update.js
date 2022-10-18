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
  }, []);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2JhckNoYXJ0L3R5cGUwMy9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsImdldFN1YlRleHQiLCJsYXN0WWVhclZhbHVlIiwidGhpc1llYXJWYWx1ZSIsIkJhckNoYXJ0VHlwZTAzIiwidHlwZSIsImRhdGEiLCJsaW5lIiwidXNlU3RhdGUiLCJ6ZXJvTGluZUluZGV4Iiwic2V0WmVyb0xpbmVJbmRleCIsImNvbHVtbkhlaWdodCIsInNldENvbHVtbkhlaWdodCIsIndyYXBSZWYiLCJ1c2VSZWYiLCJtaW4iLCJNYXRoIiwibWFwIiwiZCIsInZhbHVlIiwibWF4IiwiY2FwYWNpdHkiLCJhYnMiLCJtaW5QZXIiLCJ1c2VFZmZlY3QiLCJyb3VuZCIsImluaXQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImNsaWVudEhlaWdodCIsImdldEJhciIsImkiLCJuYW1lIiwiaXNSZXZlcnNlIiwiaXNMYXN0IiwibGVuZ3RoIiwicmV2ZXJzZSIsImhlaWdodCIsImdldERpdmlkZXJFbCIsIkFycmF5IiwiZmlsbCIsIl8iLCJpc09uIiwib24iLCJnZXRSb3dzRWwiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDBEQUFoQixDQUFYOztBQWdCQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFxRjtBQUFBLE1BQW5GQyxhQUFtRixRQUFuRkEsYUFBbUY7QUFBQSxNQUFwRUMsYUFBb0UsUUFBcEVBLGFBQW9FO0FBQ3RHLE1BQUcsQ0FBQ0QsYUFBRCxJQUFtQkEsYUFBYSxLQUFLQyxhQUF4QyxFQUF3RCxPQUFPLFNBQVA7QUFDeEQsTUFBR0QsYUFBYSxHQUFHQyxhQUFuQixFQUFrQyxvQkFBTztBQUFBLHNFQUFVLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVjtBQUFBLGtCQUFQO0FBQ2xDLE1BQUdELGFBQWEsR0FBR0MsYUFBbkIsRUFBa0Msb0JBQU87QUFBQSxxRUFBUyxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVQ7QUFBQSxrQkFBUDtBQUNuQyxDQUpEOztBQU1BLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsUUFBNkQ7QUFBQTs7QUFBQSx5QkFBMURDLElBQTBEO0FBQUEsTUFBMURBLElBQTBELDJCQUFuRCxPQUFtRDtBQUFBLE1BQTFDQyxJQUEwQyxTQUExQ0EsSUFBMEM7QUFBQSx5QkFBcENDLElBQW9DO0FBQUEsTUFBcENBLElBQW9DLDJCQUE3QixDQUE2Qjs7QUFBQSxrQkFDeENDLHNEQUFRLENBQUMsQ0FBRCxDQURnQztBQUFBLE1BQzNFQyxhQUQyRTtBQUFBLE1BQzVEQyxnQkFENEQ7O0FBQUEsbUJBRTFDRixzREFBUSxDQUFDLENBQUQsQ0FGa0M7QUFBQSxNQUUzRUcsWUFGMkU7QUFBQSxNQUU3REMsZUFGNkQ7O0FBR2xGLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBdEI7QUFFQSxNQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBTCxPQUFBQyxJQUFJLDRJQUFRVixJQUFJLENBQUNXLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxLQUFOO0FBQUEsR0FBVixDQUFSLFVBQWdDLENBQWhDLEdBQWhCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixJQUFJLENBQUNJLEdBQUwsT0FBQUosSUFBSSw0SUFBUVYsSUFBSSxDQUFDVyxHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsS0FBTjtBQUFBLEdBQVYsQ0FBUixVQUFnQyxDQUFoQyxHQUFoQjtBQUNBLE1BQU1FLFFBQVEsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVNGLEdBQUcsR0FBR0wsR0FBZixDQUFqQjtBQUNBLE1BQU1RLE1BQU0sR0FBR1AsSUFBSSxDQUFDTSxHQUFMLENBQVNQLEdBQUcsR0FBR00sUUFBZixDQUFmO0FBRUFHLHlEQUFTLENBQUMsWUFBTTtBQUNkZCxvQkFBZ0IsQ0FBQ0gsSUFBSSxHQUFHUyxJQUFJLENBQUNTLEtBQUwsQ0FBV0YsTUFBTSxJQUFJaEIsSUFBSSxHQUFHLENBQVgsQ0FBakIsQ0FBUCxHQUF5QyxDQUExQyxDQUFoQjtBQUNBbUIsUUFBSTtBQUNMLEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBS0EsTUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQkMsY0FBVSxDQUFDLFlBQU07QUFDZixVQUFHZCxPQUFPLElBQUlBLE9BQU8sQ0FBQ2UsT0FBdEIsRUFBOEI7QUFDNUJoQix1QkFBZSxDQUFDQyxPQUFPLENBQUNlLE9BQVIsQ0FBZ0JDLFlBQWhCLElBQWdDLENBQUN0QixJQUFJLEdBQUcsQ0FBUixJQUFhQSxJQUE3QyxDQUFELENBQWY7QUFDRDtBQUNGLEtBSlMsRUFJUCxDQUpPLENBQVY7QUFLRCxHQU5EOztBQVFBLE1BQU11QixNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU14QixJQUFJLENBQUNXLEdBQUwsQ0FBUyxpQkFBa0JjLENBQWxCLEVBQXdCO0FBQUE7O0FBQUEsVUFBckJaLEtBQXFCLFNBQXJCQSxLQUFxQjtBQUFBLFVBQWRhLElBQWMsU0FBZEEsSUFBYztBQUNwRCxVQUFNQyxTQUFTLEdBQUdkLEtBQUssR0FBRyxDQUExQjtBQUNBLFVBQU1lLE1BQU0sR0FBR0gsQ0FBQyxLQUFLekIsSUFBSSxDQUFDNkIsTUFBTCxHQUFjLENBQW5DO0FBRUEsMEJBQ0U7QUFBYSxpQkFBUyxFQUFFdEMsRUFBRSxDQUFDLFNBQUQsQ0FBMUI7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxLQUFELEVBQVFRLElBQVIsRUFBYztBQUFFK0IsbUJBQU8sRUFBRUg7QUFBWCxXQUFkLENBRGY7QUFFRSxlQUFLLEVBQUU7QUFBRUksa0JBQU0sWUFBS3JCLElBQUksQ0FBQ00sR0FBTCxDQUFTSCxLQUFLLEdBQUdFLFFBQWpCLElBQTZCVixZQUFsQztBQUFSLFdBRlQ7QUFBQSxpQ0FJRTtBQUFNLHFCQUFTLEVBQUVkLEVBQUUsQ0FBQyxTQUFELENBQW5CO0FBQUEsdUJBQ0dtQyxJQURILEVBR0lFLE1BQU0saUJBQ047QUFBTSx1QkFBUyxFQUFFckMsRUFBRSxDQUFDLFNBQUQsQ0FBbkI7QUFBQSx3QkFFSUksVUFBVSxDQUFDO0FBQ1RDLDZCQUFhLFdBQUVJLElBQUksQ0FBQ0EsSUFBSSxDQUFDNkIsTUFBTCxHQUFjLENBQWYsQ0FBTiwwQ0FBRSxNQUF1QmhCLEtBRDdCO0FBRVRoQiw2QkFBYSxZQUFFRyxJQUFJLENBQUNBLElBQUksQ0FBQzZCLE1BQUwsR0FBYyxDQUFmLENBQU4sMkNBQUUsT0FBdUJoQjtBQUY3QixlQUFEO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVVksQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsS0E3Qm9CLENBQU47QUFBQSxHQUFmOztBQStCQSxNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU0sSUFBSUMsS0FBSixDQUFVaEMsSUFBVixFQUFnQmlDLElBQWhCLENBQXFCLElBQXJCLEVBQTJCdkIsR0FBM0IsQ0FBK0IsVUFBQ3dCLENBQUQsRUFBSVYsQ0FBSixFQUFVO0FBQ2xFLFVBQU1XLElBQUksR0FBR2pDLGFBQWEsS0FBS3NCLENBQS9CO0FBRUEsMEJBQ0U7QUFBYSxpQkFBUyxFQUFFbEMsRUFBRSxDQUFDLFNBQUQsRUFBWTtBQUFFOEMsWUFBRSxFQUFFRDtBQUFOLFNBQVosRUFBMEJyQyxJQUExQixDQUExQjtBQUFBLGtCQUNHcUMsSUFBSSxJQUFJWixNQUFNO0FBRGpCLFNBQVVDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsS0FSMEIsQ0FBTjtBQUFBLEdBQXJCOztBQVVBLE1BQU1hLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsd0JBQ0U7QUFBSyxlQUFTLEVBQUUvQyxFQUFFLENBQUMsU0FBRCxFQUFZUSxJQUFaLENBQWxCO0FBQUEsZ0JBQ0dDLElBQUksQ0FBQ1csR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSWEsQ0FBSjtBQUFBLDRCQUFVO0FBQWMsbUJBQVMsRUFBRWxDLEVBQUUsQ0FBQyxLQUFELENBQTNCO0FBQUEsb0JBQXFDcUIsQ0FBQyxDQUFDMkI7QUFBdkMsV0FBV2QsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFWO0FBQUEsT0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBTkQ7O0FBUUEsTUFBSSxDQUFDekIsSUFBRCxJQUFTQSxJQUFJLENBQUM2QixNQUFMLEtBQWdCLENBQTdCLEVBQWdDLE9BQU8sSUFBUDtBQUVoQyxzQkFDRTtBQUFLLE9BQUcsRUFBRXRCLE9BQVY7QUFBbUIsYUFBUyxFQUFFaEIsRUFBRSxDQUFDLE1BQUQsQ0FBaEM7QUFBQSxlQUNHeUMsWUFBWSxFQURmLEVBRUdNLFNBQVMsRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBaEZEOztHQUFNeEMsYzs7S0FBQUEsYztBQWtGU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmFyQ2hhcnQuOWI3NGU3MWFkYmJmMzBkYzI3MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi90eXBlMDMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcnJvd1VwIGZyb20gJy4vQXJyb3dVcCc7XHJcbmltcG9ydCBBcnJvd0Rvd24gZnJvbSAnLi9BcnJvd0Rvd24nO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmV4cG9ydCB0eXBlIEJhckNoYXJ0U2l6ZVR5cGUgPSAnc21hbGwnIHwgJ2xhcmdlJztcclxuXHJcbmludGVyZmFjZSBCYXJDaGFydERhdGEge1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJvdzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQmFyQ2hhcnRUeXBlMDNQcm9wcyB7XHJcbiAgdHlwZT86IEJhckNoYXJ0U2l6ZVR5cGU7XHJcbiAgZGF0YTogQmFyQ2hhcnREYXRhW107XHJcbiAgbGluZT86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgZ2V0U3ViVGV4dCA9ICh7bGFzdFllYXJWYWx1ZSwgdGhpc1llYXJWYWx1ZX06IHtsYXN0WWVhclZhbHVlPzogbnVtYmVyLCB0aGlzWWVhclZhbHVlOiBudW1iZXJ9KSA9PiB7XHJcbiAgaWYoIWxhc3RZZWFyVmFsdWUgfHwgKGxhc3RZZWFyVmFsdWUgPT09IHRoaXNZZWFyVmFsdWUpKSByZXR1cm4gJ+yghOuFhOuMgOu5hCDrs7TtlaknO1xyXG4gIGlmKGxhc3RZZWFyVmFsdWUgPCB0aGlzWWVhclZhbHVlKSByZXR1cm4gPD4g7KCE64WE64yA67mEIOyDgeyKuTxBcnJvd1VwLz48Lz47XHJcbiAgaWYobGFzdFllYXJWYWx1ZSA+IHRoaXNZZWFyVmFsdWUpIHJldHVybiA8PuyghOuFhOuMgOu5hCDtlZjrnb08QXJyb3dEb3duLz48Lz47XHJcbn1cclxuXHJcbmNvbnN0IEJhckNoYXJ0VHlwZTAzID0gKHsgdHlwZSA9ICdsYXJnZScsIGRhdGEsIGxpbmUgPSA2IH06IEJhckNoYXJ0VHlwZTAzUHJvcHMpID0+IHtcclxuICBjb25zdCBbemVyb0xpbmVJbmRleCwgc2V0WmVyb0xpbmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29sdW1uSGVpZ2h0LCBzZXRDb2x1bW5IZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgd3JhcFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLmRhdGEubWFwKGQgPT4gZC52YWx1ZSksIDApO1xyXG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmRhdGEubWFwKGQgPT4gZC52YWx1ZSksIDApO1xyXG4gIGNvbnN0IGNhcGFjaXR5ID0gTWF0aC5hYnMobWF4IC0gbWluKTtcclxuICBjb25zdCBtaW5QZXIgPSBNYXRoLmFicyhtaW4gLyBjYXBhY2l0eSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRaZXJvTGluZUluZGV4KGxpbmUgLSBNYXRoLnJvdW5kKG1pblBlciAqIChsaW5lIC0gMSkpIC0gMSk7XHJcbiAgICBpbml0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmKHdyYXBSZWYgJiYgd3JhcFJlZi5jdXJyZW50KXtcclxuICAgICAgICBzZXRDb2x1bW5IZWlnaHQod3JhcFJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAqICgobGluZSAtIDEpIC8gbGluZSkpO1xyXG4gICAgICB9XHJcbiAgICB9LCAwKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QmFyID0gKCkgPT4gZGF0YS5tYXAoKHsgdmFsdWUsIG5hbWUgfSwgaSkgPT4ge1xyXG4gICAgY29uc3QgaXNSZXZlcnNlID0gdmFsdWUgPCAwO1xyXG4gICAgY29uc3QgaXNMYXN0ID0gaSA9PT0gZGF0YS5sZW5ndGggLSAxO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2N4KCdiYXJXcmFwJyl9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2JhcicsIHR5cGUsIHsgcmV2ZXJzZTogaXNSZXZlcnNlIH0pfVxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBgJHtNYXRoLmFicyh2YWx1ZSAvIGNhcGFjaXR5KSAqIGNvbHVtbkhlaWdodH1weGAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd0b29sdGlwJyl9PlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzTGFzdCAmJlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3N1YlRleHQnKX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGdldFN1YlRleHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RZZWFyVmFsdWU6IGRhdGFbZGF0YS5sZW5ndGggLSAyXT8udmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNZZWFyVmFsdWU6IGRhdGFbZGF0YS5sZW5ndGggLSAxXT8udmFsdWVcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGdldERpdmlkZXJFbCA9ICgpID0+IG5ldyBBcnJheShsaW5lKS5maWxsKG51bGwpLm1hcCgoXywgaSkgPT4ge1xyXG4gICAgY29uc3QgaXNPbiA9IHplcm9MaW5lSW5kZXggPT09IGk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17Y3goJ2RpdmlkZXInLCB7IG9uOiBpc09uIH0sIHR5cGUpfT5cclxuICAgICAgICB7aXNPbiAmJiBnZXRCYXIoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZ2V0Um93c0VsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdyb3dXcmFwJywgdHlwZSl9PlxyXG4gICAgICAgIHtkYXRhLm1hcCgoZCwgaSkgPT4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e2N4KCdyb3cnKX0+e2Qucm93fTwvc3Bhbj4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17d3JhcFJlZn0gY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAge2dldERpdmlkZXJFbCgpfVxyXG4gICAgICB7Z2V0Um93c0VsKCl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhckNoYXJ0VHlwZTAzOyJdLCJzb3VyY2VSb290IjoiIn0=