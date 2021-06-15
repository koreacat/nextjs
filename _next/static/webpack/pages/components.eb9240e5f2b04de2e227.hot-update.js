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
    length: maxLength
  }, function () {
    return '0';
  });

  for (var i = 0; i < countArr.length; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY291bnQvaW5kZXguLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTnVtYmVyIiwicHJvcHMiLCJudW0iLCJ1c2VTdGF0ZSIsInRyYW5zZm9ybSIsInN0eWxlIiwic2V0U3R5bGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiZGlnaXRFbCIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJDb3VudCIsImNvdW50IiwiY291bnRBcnIiLCJ0b1N0cmluZyIsInNwbGl0IiwiYXJyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWF4TGVuZ3RoIiwiaSIsIk51bWJlckVsIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLHlEQUFoQixDQUFYOztBQU1BLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBd0I7QUFBQTs7QUFBQSxNQUMvQkMsR0FEK0IsR0FDeEJELEtBRHdCLENBQy9CQyxHQUQrQjs7QUFBQSxrQkFFWkMsc0RBQVEsQ0FBQztBQUFDQyxhQUFTLEVBQUU7QUFBWixHQUFELENBRkk7QUFBQSxNQUUvQkMsS0FGK0I7QUFBQSxNQUV4QkMsUUFGd0I7O0FBSXRDQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsY0FBVSxDQUFDLFlBQU07QUFDaEJGLGNBQVEsQ0FBQztBQUFDRixpQkFBUyx3QkFBaUJGLEdBQUcsR0FBRyxFQUF2QjtBQUFWLE9BQUQsQ0FBUjtBQUNBLEtBRlMsRUFFUCxDQUZPLENBQVY7QUFHQSxHQUpRLEVBSU4sQ0FBQ0EsR0FBRCxDQUpNLENBQVQ7QUFNQSxNQUFNTyxPQUFPLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQkMsR0FBL0IsQ0FBbUMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3BFLHdCQUFPO0FBQWtCLGVBQVMsRUFBRWhCLEVBQUUsQ0FBQyxPQUFELENBQS9CO0FBQUEsZ0JBQTJDZ0I7QUFBM0MsT0FBV0EsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDQSxHQUZlLENBQWhCO0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUVoQixFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUE4QixTQUFLLEVBQUVTLEtBQXJDO0FBQUEsY0FDRUk7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQW5CRDs7R0FBTVQsTTs7S0FBQUEsTTs7QUEwQk4sSUFBTWEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ1osS0FBRCxFQUF1QjtBQUFBLE1BQzdCYSxLQUQ2QixHQUNwQmIsS0FEb0IsQ0FDN0JhLEtBRDZCO0FBRXBDLE1BQUlDLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLEdBQWlCQyxLQUFqQixDQUF1QixFQUF2QixDQUFmO0FBQ0EsTUFBSUMsR0FBRyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBVztBQUFDQyxVQUFNLEVBQUVDO0FBQVQsR0FBWCxFQUFnQztBQUFBLFdBQU0sR0FBTjtBQUFBLEdBQWhDLENBQVY7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUixRQUFRLENBQUNNLE1BQTdCLEVBQXFDRSxDQUFDLEVBQXRDLEVBQTBDO0FBQ3pDTCxPQUFHLENBQUNBLEdBQUcsQ0FBQ0csTUFBSixHQUFhTixRQUFRLENBQUNNLE1BQXRCLEdBQStCRSxDQUFoQyxDQUFILEdBQXdDUixRQUFRLENBQUNRLENBQUQsQ0FBaEQ7QUFDQTs7QUFFRCxNQUFNQyxRQUFRLEdBQUdOLEdBQUcsQ0FBQ1IsR0FBSixDQUFRLFVBQUNSLEdBQUQsRUFBTVUsS0FBTixFQUFnQjtBQUN4Qyx3QkFBTyxxRUFBQyxNQUFEO0FBQW9CLFNBQUcsRUFBRWEsUUFBUSxDQUFDdkIsR0FBRDtBQUFqQyxPQUFhVSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNBLEdBRmdCLENBQWpCO0FBSUEsc0JBQ0M7QUFBTSxhQUFTLEVBQUVoQixFQUFFLENBQUMsV0FBRCxDQUFuQjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsT0FBRCxDQUFsQjtBQUFBLGdCQUNFNEI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFPQSxDQXBCRDs7TUFBTVgsSztBQXNCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29tcG9uZW50cy5lYjkyNDBlNWYyYjA0ZGUyZTIyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvdW50Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBOdW1iZXJQcm9wcyB7XHJcblx0bnVtOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE51bWJlciA9IChwcm9wczogTnVtYmVyUHJvcHMpID0+IHtcclxuXHRjb25zdCB7bnVtfSA9IHByb3BzO1xyXG5cdGNvbnN0IFtzdHlsZSwgc2V0U3R5bGVdID0gdXNlU3RhdGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KSd9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRzZXRTdHlsZSh7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHtudW0gKiA1N31weClgfSlcclxuXHRcdH0sIDApO1xyXG5cdH0sIFtudW1dKTtcclxuXHJcblx0Y29uc3QgZGlnaXRFbCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y3goJ2RpZ2l0Jyl9PntpbmRleH08L3NwYW4+XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ251bWJlcicpfSBzdHlsZT17c3R5bGV9PlxyXG5cdFx0XHR7ZGlnaXRFbH1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmludGVyZmFjZSBDb3VudFByb3BzIHtcclxuXHRtYXhMZW5ndGg6IG51bWJlcjtcclxuXHRjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBDb3VudCA9IChwcm9wczogQ291bnRQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtjb3VudH0gPSBwcm9wcztcclxuXHRsZXQgY291bnRBcnIgPSBjb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcclxuXHRsZXQgYXJyID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiBtYXhMZW5ndGh9LCAoKSA9PiAnMCcpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50QXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRhcnJbYXJyLmxlbmd0aCAtIGNvdW50QXJyLmxlbmd0aCArIGldID0gY291bnRBcnJbaV07XHJcblx0fVxyXG5cclxuXHRjb25zdCBOdW1iZXJFbCA9IGFyci5tYXAoKG51bSwgaW5kZXgpID0+IHtcclxuXHRcdHJldHVybiA8TnVtYmVyIGtleT17aW5kZXh9IG51bT17cGFyc2VJbnQobnVtKX0vPlxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgnY291bnRXcmFwJyl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvdW50Jyl9PlxyXG5cdFx0XHRcdHtOdW1iZXJFbH1cclxuXHRcdFx0PC9kaXY+6rCcXHJcblx0XHQ8L3NwYW4+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=