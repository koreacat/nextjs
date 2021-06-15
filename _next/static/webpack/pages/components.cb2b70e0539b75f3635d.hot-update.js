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
  var countArr = count.toString().split('');
  var arr = Array.from({
    length: 5
  }, function () {
    return '0';
  });

  for (var i = 0; i < countArr.length; i++) {
    console.log(arr);
    arr[arr.length - countArr.length + i] = countArr[i];
  }

  var NumberEl = arr.map(function (num, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Number, {
      num: parseInt(num)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 51,
      columnNumber: 4
    }, _this), "\uAC1C"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY291bnQvaW5kZXguLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTnVtYmVyIiwicHJvcHMiLCJudW0iLCJ1c2VTdGF0ZSIsInRyYW5zZm9ybSIsInN0eWxlIiwic2V0U3R5bGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiZGlnaXRFbCIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJDb3VudCIsImNvdW50IiwiY291bnRBcnIiLCJ0b1N0cmluZyIsInNwbGl0IiwiYXJyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXJFbCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyx5REFBaEIsQ0FBWDs7QUFNQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQXdCO0FBQUE7O0FBQUEsTUFDL0JDLEdBRCtCLEdBQ3hCRCxLQUR3QixDQUMvQkMsR0FEK0I7O0FBQUEsa0JBRVpDLHNEQUFRLENBQUM7QUFBQ0MsYUFBUyxFQUFFO0FBQVosR0FBRCxDQUZJO0FBQUEsTUFFL0JDLEtBRitCO0FBQUEsTUFFeEJDLFFBRndCOztBQUl0Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2ZDLGNBQVUsQ0FBQyxZQUFNO0FBQ2hCRixjQUFRLENBQUM7QUFBQ0YsaUJBQVMsd0JBQWlCRixHQUFHLEdBQUcsRUFBdkI7QUFBVixPQUFELENBQVI7QUFDQSxLQUZTLEVBRVAsQ0FGTyxDQUFWO0FBR0EsR0FKUSxFQUlOLENBQUNBLEdBQUQsQ0FKTSxDQUFUO0FBTUEsTUFBTU8sT0FBTyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0JDLEdBQS9CLENBQW1DLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNwRSx3QkFBTztBQUFrQixlQUFTLEVBQUVoQixFQUFFLENBQUMsT0FBRCxDQUEvQjtBQUFBLGdCQUEyQ2dCO0FBQTNDLE9BQVdBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0EsR0FGZSxDQUFoQjtBQUlBLHNCQUNDO0FBQUssYUFBUyxFQUFFaEIsRUFBRSxDQUFDLFFBQUQsQ0FBbEI7QUFBOEIsU0FBSyxFQUFFUyxLQUFyQztBQUFBLGNBQ0VJO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0FuQkQ7O0dBQU1ULE07O0tBQUFBLE07O0FBeUJOLElBQU1hLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNaLEtBQUQsRUFBdUI7QUFBQSxNQUM3QmEsS0FENkIsR0FDcEJiLEtBRG9CLENBQzdCYSxLQUQ2QjtBQUVwQyxNQUFJQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsUUFBTixHQUFpQkMsS0FBakIsQ0FBdUIsRUFBdkIsQ0FBZjtBQUNBLE1BQUlDLEdBQUcsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVc7QUFBQ0MsVUFBTSxFQUFFO0FBQVQsR0FBWCxFQUF3QjtBQUFBLFdBQU0sR0FBTjtBQUFBLEdBQXhCLENBQVY7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxRQUFRLENBQUNNLE1BQTdCLEVBQXFDQyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3pDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sR0FBWjtBQUNBQSxPQUFHLENBQUNBLEdBQUcsQ0FBQ0csTUFBSixHQUFhTixRQUFRLENBQUNNLE1BQXRCLEdBQStCQyxDQUFoQyxDQUFILEdBQXdDUCxRQUFRLENBQUNPLENBQUQsQ0FBaEQ7QUFDQTs7QUFFRCxNQUFNRyxRQUFRLEdBQUdQLEdBQUcsQ0FBQ1IsR0FBSixDQUFRLFVBQUNSLEdBQUQsRUFBTVUsS0FBTixFQUFnQjtBQUN4Qyx3QkFBTyxxRUFBQyxNQUFEO0FBQW9CLFNBQUcsRUFBRWMsUUFBUSxDQUFDeEIsR0FBRDtBQUFqQyxPQUFhVSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNBLEdBRmdCLENBQWpCO0FBSUEsc0JBQ0M7QUFBTSxhQUFTLEVBQUVoQixFQUFFLENBQUMsV0FBRCxDQUFuQjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsT0FBRCxDQUFsQjtBQUFBLGdCQUNFNkI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFPQSxDQXJCRDs7TUFBTVosSztBQXVCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29tcG9uZW50cy5jYjJiNzBlMDUzOWI3NWYzNjM1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvdW50Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBOdW1iZXJQcm9wcyB7XHJcblx0bnVtOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE51bWJlciA9IChwcm9wczogTnVtYmVyUHJvcHMpID0+IHtcclxuXHRjb25zdCB7bnVtfSA9IHByb3BzO1xyXG5cdGNvbnN0IFtzdHlsZSwgc2V0U3R5bGVdID0gdXNlU3RhdGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KSd9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRzZXRTdHlsZSh7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHtudW0gKiA1N31weClgfSlcclxuXHRcdH0sIDApO1xyXG5cdH0sIFtudW1dKTtcclxuXHJcblx0Y29uc3QgZGlnaXRFbCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y3goJ2RpZ2l0Jyl9PntpbmRleH08L3NwYW4+XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ251bWJlcicpfSBzdHlsZT17c3R5bGV9PlxyXG5cdFx0XHR7ZGlnaXRFbH1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmludGVyZmFjZSBDb3VudFByb3BzIHtcclxuXHRjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBDb3VudCA9IChwcm9wczogQ291bnRQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtjb3VudH0gPSBwcm9wcztcclxuXHRsZXQgY291bnRBcnIgPSBjb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcclxuXHRsZXQgYXJyID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiA1fSwgKCkgPT4gJzAnKTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudEFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc29sZS5sb2coYXJyKTtcclxuXHRcdGFyclthcnIubGVuZ3RoIC0gY291bnRBcnIubGVuZ3RoICsgaV0gPSBjb3VudEFycltpXTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IE51bWJlckVsID0gYXJyLm1hcCgobnVtLCBpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIDxOdW1iZXIga2V5PXtpbmRleH0gbnVtPXtwYXJzZUludChudW0pfS8+XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCdjb3VudFdyYXAnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY291bnQnKX0+XHJcblx0XHRcdFx0e051bWJlckVsfVxyXG5cdFx0XHQ8L2Rpdj7qsJxcclxuXHRcdDwvc3Bhbj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==