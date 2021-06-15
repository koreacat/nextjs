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
    length: countArr.length
  }, function () {
    return '0';
  });

  for (var i = 0; i < countArr.length; i++) {
    arr[arr.length - countArr.length] = countArr[i];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY291bnQvaW5kZXguLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiTnVtYmVyIiwicHJvcHMiLCJudW0iLCJ1c2VTdGF0ZSIsInRyYW5zZm9ybSIsInN0eWxlIiwic2V0U3R5bGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiZGlnaXRFbCIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJDb3VudCIsImNvdW50IiwiY291bnRBcnIiLCJ0b1N0cmluZyIsInNwbGl0IiwiYXJyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiaSIsIk51bWJlckVsIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLHlEQUFoQixDQUFYOztBQU1BLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBd0I7QUFBQTs7QUFBQSxNQUMvQkMsR0FEK0IsR0FDeEJELEtBRHdCLENBQy9CQyxHQUQrQjs7QUFBQSxrQkFFWkMsc0RBQVEsQ0FBQztBQUFDQyxhQUFTLEVBQUU7QUFBWixHQUFELENBRkk7QUFBQSxNQUUvQkMsS0FGK0I7QUFBQSxNQUV4QkMsUUFGd0I7O0FBSXRDQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsY0FBVSxDQUFDLFlBQU07QUFDaEJGLGNBQVEsQ0FBQztBQUFDRixpQkFBUyx3QkFBaUJGLEdBQUcsR0FBRyxFQUF2QjtBQUFWLE9BQUQsQ0FBUjtBQUNBLEtBRlMsRUFFUCxDQUZPLENBQVY7QUFHQSxHQUpRLEVBSU4sQ0FBQ0EsR0FBRCxDQUpNLENBQVQ7QUFNQSxNQUFNTyxPQUFPLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQkMsR0FBL0IsQ0FBbUMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3BFLHdCQUFPO0FBQWtCLGVBQVMsRUFBRWhCLEVBQUUsQ0FBQyxPQUFELENBQS9CO0FBQUEsZ0JBQTJDZ0I7QUFBM0MsT0FBV0EsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDQSxHQUZlLENBQWhCO0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUVoQixFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUE4QixTQUFLLEVBQUVTLEtBQXJDO0FBQUEsY0FDRUk7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQW5CRDs7R0FBTVQsTTs7S0FBQUEsTTs7QUF5Qk4sSUFBTWEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ1osS0FBRCxFQUF1QjtBQUFBLE1BQzdCYSxLQUQ2QixHQUNwQmIsS0FEb0IsQ0FDN0JhLEtBRDZCO0FBRXBDLE1BQUlDLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLEdBQWlCQyxLQUFqQixDQUF1QixFQUF2QixDQUFmO0FBQ0EsTUFBSUMsR0FBRyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBVztBQUFDQyxVQUFNLEVBQUVOLFFBQVEsQ0FBQ007QUFBbEIsR0FBWCxFQUFzQztBQUFBLFdBQU0sR0FBTjtBQUFBLEdBQXRDLENBQVY7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxRQUFRLENBQUNNLE1BQTdCLEVBQXFDQyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3pDSixPQUFHLENBQUNBLEdBQUcsQ0FBQ0csTUFBSixHQUFhTixRQUFRLENBQUNNLE1BQXZCLENBQUgsR0FBb0NOLFFBQVEsQ0FBQ08sQ0FBRCxDQUE1QztBQUNBOztBQUdELE1BQU1DLFFBQVEsR0FBR0wsR0FBRyxDQUFDUixHQUFKLENBQVEsVUFBQ1IsR0FBRCxFQUFNVSxLQUFOLEVBQWdCO0FBQ3hDLHdCQUFPLHFFQUFDLE1BQUQ7QUFBb0IsU0FBRyxFQUFFWSxRQUFRLENBQUN0QixHQUFEO0FBQWpDLE9BQWFVLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0EsR0FGZ0IsQ0FBakI7QUFJQSxzQkFDQztBQUFNLGFBQVMsRUFBRWhCLEVBQUUsQ0FBQyxXQUFELENBQW5CO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxPQUFELENBQWxCO0FBQUEsZ0JBQ0UyQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU9BLENBckJEOztNQUFNVixLO0FBdUJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wb25lbnRzLjE3YjhlMDZhNDZjNWJmODI3MWMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vY291bnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIE51bWJlclByb3BzIHtcclxuXHRudW06IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTnVtYmVyID0gKHByb3BzOiBOdW1iZXJQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtudW19ID0gcHJvcHM7XHJcblx0Y29uc3QgW3N0eWxlLCBzZXRTdHlsZV0gPSB1c2VTdGF0ZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwcHgpJ30pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHNldFN0eWxlKHt0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke251bSAqIDU3fXB4KWB9KVxyXG5cdFx0fSwgMCk7XHJcblx0fSwgW251bV0pO1xyXG5cclxuXHRjb25zdCBkaWdpdEVsID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcblx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjeCgnZGlnaXQnKX0+e2luZGV4fTwvc3Bhbj5cclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnbnVtYmVyJyl9IHN0eWxlPXtzdHlsZX0+XHJcblx0XHRcdHtkaWdpdEVsfVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIENvdW50UHJvcHMge1xyXG5cdGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IENvdW50ID0gKHByb3BzOiBDb3VudFByb3BzKSA9PiB7XHJcblx0Y29uc3Qge2NvdW50fSA9IHByb3BzO1xyXG5cdGxldCBjb3VudEFyciA9IGNvdW50LnRvU3RyaW5nKCkuc3BsaXQoJycpO1xyXG5cdGxldCBhcnIgPSBBcnJheS5mcm9tKHtsZW5ndGg6IGNvdW50QXJyLmxlbmd0aH0sICgpID0+ICcwJyk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRBcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGFyclthcnIubGVuZ3RoIC0gY291bnRBcnIubGVuZ3RoXSA9IGNvdW50QXJyW2ldO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0IE51bWJlckVsID0gYXJyLm1hcCgobnVtLCBpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIDxOdW1iZXIga2V5PXtpbmRleH0gbnVtPXtwYXJzZUludChudW0pfS8+XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCdjb3VudFdyYXAnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY291bnQnKX0+XHJcblx0XHRcdFx0e051bWJlckVsfVxyXG5cdFx0XHQ8L2Rpdj7qsJxcclxuXHRcdDwvc3Bhbj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==