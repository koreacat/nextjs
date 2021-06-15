webpackHotUpdate_N_E("pages/components",{

/***/ "./src/components/count/index..tsx":
/*!*****************************************!*\
  !*** ./src/components/count/index..tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _count_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count.module.scss */ "./src/components/count/count.module.scss");
/* harmony import */ var _count_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_count_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\count\\index..tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_count_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

var Number = function Number(props) {
  _s();

  var num = props.num;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    transform: 'translateY(0px)'
  }),
      style = _useState[0],
      setStyle = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setTimeout(function () {
      setStyle({
        transform: "translateY(-".concat(num * 57, "px)")
      });
    }, 0);
  }, [num]);
  var digitEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (value, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('digit'),
      children: index
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('number'),
    style: style,
    children: digitEl
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, _this);
};

_s(Number, "6dxTjuwJoLn2JBPGOjrIUSBt428=");

_c = Number;

var Count = function Count(props) {
  var count = props.count;
  var arr = [];
  arr.unshift(count.toString().split(''));
  var NumberEl = arr.map(function (num, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Number, {
      num: parseInt(num)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: cx('countWrap'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('count'),
      children: NumberEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this), "\uAC1C"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }, _this);
};

_c2 = Count;
/* harmony default export */ __webpack_exports__["default"] = (Count);

var _c, _c2;

$RefreshReg$(_c, "Number");
$RefreshReg$(_c2, "Count");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY291bnQvaW5kZXguLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTnVtYmVyIiwicHJvcHMiLCJudW0iLCJ1c2VTdGF0ZSIsInRyYW5zZm9ybSIsInN0eWxlIiwic2V0U3R5bGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiZGlnaXRFbCIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJDb3VudCIsImNvdW50IiwiYXJyIiwidW5zaGlmdCIsInRvU3RyaW5nIiwic3BsaXQiLCJOdW1iZXJFbCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyx5REFBaEIsQ0FBWDs7QUFNQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQXdCO0FBQUE7O0FBQUEsTUFDL0JDLEdBRCtCLEdBQ3hCRCxLQUR3QixDQUMvQkMsR0FEK0I7O0FBQUEsa0JBRVpDLHNEQUFRLENBQUM7QUFBQ0MsYUFBUyxFQUFFO0FBQVosR0FBRCxDQUZJO0FBQUEsTUFFL0JDLEtBRitCO0FBQUEsTUFFeEJDLFFBRndCOztBQUl0Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2ZDLGNBQVUsQ0FBQyxZQUFNO0FBQ2hCRixjQUFRLENBQUM7QUFBQ0YsaUJBQVMsd0JBQWlCRixHQUFHLEdBQUcsRUFBdkI7QUFBVixPQUFELENBQVI7QUFDQSxLQUZTLEVBRVAsQ0FGTyxDQUFWO0FBR0EsR0FKUSxFQUlOLENBQUNBLEdBQUQsQ0FKTSxDQUFUO0FBTUEsTUFBTU8sT0FBTyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0JDLEdBQS9CLENBQW1DLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNwRSx3QkFBTztBQUFrQixlQUFTLEVBQUVoQixFQUFFLENBQUMsT0FBRCxDQUEvQjtBQUFBLGdCQUEyQ2dCO0FBQTNDLE9BQVdBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0EsR0FGZSxDQUFoQjtBQUlBLHNCQUNDO0FBQUssYUFBUyxFQUFFaEIsRUFBRSxDQUFDLFFBQUQsQ0FBbEI7QUFBOEIsU0FBSyxFQUFFUyxLQUFyQztBQUFBLGNBQ0VJO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0FuQkQ7O0dBQU1ULE07O0tBQUFBLE07O0FBeUJOLElBQU1hLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNaLEtBQUQsRUFBdUI7QUFBQSxNQUM3QmEsS0FENkIsR0FDcEJiLEtBRG9CLENBQzdCYSxLQUQ2QjtBQUVwQyxNQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBQSxLQUFHLENBQUNDLE9BQUosQ0FBWUYsS0FBSyxDQUFDRyxRQUFOLEdBQWlCQyxLQUFqQixDQUF1QixFQUF2QixDQUFaO0FBRUEsTUFBTUMsUUFBUSxHQUFHSixHQUFHLENBQUNMLEdBQUosQ0FBUSxVQUFDUixHQUFELEVBQU1VLEtBQU4sRUFBZ0I7QUFDeEMsd0JBQU8scUVBQUMsTUFBRDtBQUFvQixTQUFHLEVBQUVRLFFBQVEsQ0FBQ2xCLEdBQUQ7QUFBakMsT0FBYVUsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDQSxHQUZnQixDQUFqQjtBQUlBLHNCQUNDO0FBQU0sYUFBUyxFQUFFaEIsRUFBRSxDQUFDLFdBQUQsQ0FBbkI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBbEI7QUFBQSxnQkFDRXVCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBT0EsQ0FoQkQ7O01BQU1OLEs7QUFrQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXBvbmVudHMuNDJjMzIxZmE4MmU1MDllZGFiMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb3VudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTnVtYmVyUHJvcHMge1xyXG5cdG51bTogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBOdW1iZXIgPSAocHJvcHM6IE51bWJlclByb3BzKSA9PiB7XHJcblx0Y29uc3Qge251bX0gPSBwcm9wcztcclxuXHRjb25zdCBbc3R5bGUsIHNldFN0eWxlXSA9IHVzZVN0YXRlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDBweCknfSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0c2V0U3R5bGUoe3RyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7bnVtICogNTd9cHgpYH0pXHJcblx0XHR9LCAwKTtcclxuXHR9LCBbbnVtXSk7XHJcblxyXG5cdGNvbnN0IGRpZ2l0RWwgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuXHRcdHJldHVybiA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2N4KCdkaWdpdCcpfT57aW5kZXh9PC9zcGFuPlxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdudW1iZXInKX0gc3R5bGU9e3N0eWxlfT5cclxuXHRcdFx0e2RpZ2l0RWx9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgQ291bnRQcm9wcyB7XHJcblx0Y291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQ291bnQgPSAocHJvcHM6IENvdW50UHJvcHMpID0+IHtcclxuXHRjb25zdCB7Y291bnR9ID0gcHJvcHM7XHJcblx0bGV0IGFyciA9IFtdO1xyXG5cdGFyci51bnNoaWZ0KGNvdW50LnRvU3RyaW5nKCkuc3BsaXQoJycpKTtcclxuXHJcblx0Y29uc3QgTnVtYmVyRWwgPSBhcnIubWFwKChudW0sIGluZGV4KSA9PiB7XHJcblx0XHRyZXR1cm4gPE51bWJlciBrZXk9e2luZGV4fSBudW09e3BhcnNlSW50KG51bSl9Lz5cclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ2NvdW50V3JhcCcpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb3VudCcpfT5cclxuXHRcdFx0XHR7TnVtYmVyRWx9XHJcblx0XHRcdDwvZGl2PuqwnFxyXG5cdFx0PC9zcGFuPlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9