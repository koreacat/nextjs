webpackHotUpdate_N_E("pages/components",{

/***/ "./pages/components.tsx":
/*!******************************!*\
  !*** ./pages/components.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/waterFill */ "./src/components/waterFill/index.tsx");
/* harmony import */ var _src_components_count_index___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/count/index. */ "./src/components/count/index..tsx");
/* harmony import */ var _src_components_common_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/common/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_heartFill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/heartFill */ "./src/components/heartFill/index.tsx");
/* harmony import */ var _src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/circleProgress */ "./src/components/circleProgress/index.tsx");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\components.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var getInteger = function getInteger(max) {
  return Math.floor(Math.random() * max);
};

var Components = function Components() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(getInteger(100000)),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(getInteger(101)),
      averagePos = _useState2[0],
      setAveragePos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(getInteger(101)),
      averageVal = _useState3[0],
      setAverageVal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(getInteger(101)),
      averagePer = _useState4[0],
      setAveragePer = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(getInteger(101)),
      percent1 = _useState5[0],
      setPercent1 = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(getInteger(101)),
      percent2 = _useState6[0],
      setPercent2 = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var interval = setInterval(function () {
      setCount(getInteger(100000));
      setAveragePos(getInteger(101));
      setAverageVal(getInteger(101));
      setAveragePer(getInteger(101));
      setPercent1(getInteger(101));
      setPercent2(getInteger(101));
    }, 7000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_count_index___WEBPACK_IMPORTED_MODULE_2__["default"], {
        maxLength: 8,
        count: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'POSITIVE',
        average: averagePos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'PERFORMANCE',
        average: averagePer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'VALUE',
        average: averageVal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_heartFill__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: 'heartFill',
        type: 'POSITIVE',
        average: averagePos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_heartFill__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: 'heartFill',
        type: 'PERFORMANCE',
        average: averagePer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_heartFill__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: 'heartFill',
        type: 'VALUE',
        average: averageVal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 31.5,
        title: '쉬움',
        percent: percent1,
        colorType: 'YELLOW'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 37.8,
        title: '다소 쉬움',
        percent: percent2,
        colorType: 'LIME'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 44.1,
        title: '보통',
        percent: averagePos,
        colorType: 'GREEN'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 50.4,
        title: '다소 어려움',
        percent: averageVal,
        colorType: 'SKY'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 56.7,
        title: '어려움',
        percent: averagePer,
        colorType: 'BLUE'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 3
  }, _this);
};

_s(Components, "7TqkGHyCmhCD4xOXDlGlkEPi94E=");

_c = Components;
/* harmony default export */ __webpack_exports__["default"] = (Components);

var _c;

$RefreshReg$(_c, "Components");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy50c3giXSwibmFtZXMiOlsiZ2V0SW50ZWdlciIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkNvbXBvbmVudHMiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJhdmVyYWdlUG9zIiwic2V0QXZlcmFnZVBvcyIsImF2ZXJhZ2VWYWwiLCJzZXRBdmVyYWdlVmFsIiwiYXZlcmFnZVBlciIsInNldEF2ZXJhZ2VQZXIiLCJwZXJjZW50MSIsInNldFBlcmNlbnQxIiwicGVyY2VudDIiLCJzZXRQZXJjZW50MiIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFpQjtBQUNuQyxTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSCxHQUEzQixDQUFQO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUNOLFVBQVUsQ0FBQyxNQUFELENBQVgsQ0FEVjtBQUFBLE1BQ2pCTyxLQURpQjtBQUFBLE1BQ1ZDLFFBRFU7O0FBQUEsbUJBRVlGLHNEQUFRLENBQUNOLFVBQVUsQ0FBQyxHQUFELENBQVgsQ0FGcEI7QUFBQSxNQUVqQlMsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUFBLG1CQUdZSixzREFBUSxDQUFDTixVQUFVLENBQUMsR0FBRCxDQUFYLENBSHBCO0FBQUEsTUFHakJXLFVBSGlCO0FBQUEsTUFHTEMsYUFISzs7QUFBQSxtQkFJWU4sc0RBQVEsQ0FBQ04sVUFBVSxDQUFDLEdBQUQsQ0FBWCxD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QUFFLE9BRlI7QUFHQyxlQUFPLEVBQUVFLFFBSFY7QUFJQyxpQkFBUyxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBELGVBYUMscUVBQUMsc0VBQUQ7QUFDQyxTQUFDLEVBQUUsSUFESjtBQUVDLGFBQUssRUFBRSxJQUZSO0FBR0MsZUFBTyxFQUFFUixVQUhWO0FBSUMsaUJBQVMsRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRCxlQW1CQyxxRUFBQyxzRUFBRDtBQUNDLFNBQUMsRUFBRSxJQURKO0FBRUMsYUFBSyxFQUFFLFFBRlI7QUFHQyxlQUFPLEVBQUVFLFVBSFY7QUFJQyxpQkFBUyxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRCxlQXlCQyxxRUFBQyxzRUFBRDtBQUNDLFNBQUMsRUFBRSxJQURKO0FBRUMsYUFBSyxFQUFFLEtBRlI7QUFHQyxlQUFPLEVBQUVFLFVBSFY7QUFJQyxpQkFBUyxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE0RUEsQ0FuR0Q7O0dBQU1SLFU7O0tBQUFBLFU7QUFxR1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXBvbmVudHMuY2RjYzM5MTk3MTJhOGY1N2UwNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXYXRlckZpbGwgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3dhdGVyRmlsbFwiO1xyXG5pbXBvcnQgQ291bnQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvdW50L2luZGV4LlwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFydEZpbGwgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2hlYXJ0RmlsbFwiO1xyXG5pbXBvcnQgQ2lyY2xlUHJvZ3Jlc3MgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NpcmNsZVByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBnZXRJbnRlZ2VyID0gKG1heDogbnVtYmVyKSA9PiB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heClcclxufTtcclxuXHJcbmNvbnN0IENvbXBvbmVudHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShnZXRJbnRlZ2VyKDEwMDAwMCkpO1xyXG5cdGNvbnN0IFthdmVyYWdlUG9zLCBzZXRBdmVyYWdlUG9zXSA9IHVzZVN0YXRlKGdldEludGVnZXIoMTAxKSk7XHJcblx0Y29uc3QgW2F2ZXJhZ2VWYWwsIHNldEF2ZXJhZ2VWYWxdID0gdXNlU3RhdGUoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHRjb25zdCBbYXZlcmFnZVBlciwgc2V0QXZlcmFnZVBlcl0gPSB1c2VTdGF0ZShnZXRJbnRlZ2VyKDEwMSkpO1xyXG5cdGNvbnN0IFtwZXJjZW50MSwgc2V0UGVyY2VudDFdID0gdXNlU3RhdGUoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHRjb25zdCBbcGVyY2VudDIsIHNldFBlcmNlbnQyXSA9IHVzZVN0YXRlKGdldEludGVnZXIoMTAxKSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0c2V0Q291bnQoZ2V0SW50ZWdlcigxMDAwMDApKTtcclxuXHRcdFx0c2V0QXZlcmFnZVBvcyhnZXRJbnRlZ2VyKDEwMSkpO1xyXG5cdFx0XHRzZXRBdmVyYWdlVmFsKGdldEludGVnZXIoMTAxKSk7XHJcblx0XHRcdHNldEF2ZXJhZ2VQZXIoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHRcdFx0c2V0UGVyY2VudDEoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHRcdFx0c2V0UGVyY2VudDIoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHRcdH0sIDcwMDApO1xyXG5cclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHRcdH0pXHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8Q291bnRcclxuXHRcdFx0XHRcdG1heExlbmd0aD17OH1cclxuXHRcdFx0XHRcdGNvdW50PXtjb3VudH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblx0XHRcdFx0PFdhdGVyRmlsbFxyXG5cdFx0XHRcdFx0dGl0bGU9eyd3YXRlckZpbGwnfVxyXG5cdFx0XHRcdFx0dHlwZT17J1BPU0lUSVZFJ31cclxuXHRcdFx0XHRcdGF2ZXJhZ2U9e2F2ZXJhZ2VQb3N9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8V2F0ZXJGaWxsXHJcblx0XHRcdFx0XHR0aXRsZT17J3dhdGVyRmlsbCd9XHJcblx0XHRcdFx0XHR0eXBlPXsnUEVSRk9STUFOQ0UnfVxyXG5cdFx0XHRcdFx0YXZlcmFnZT17YXZlcmFnZVBlcn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxXYXRlckZpbGxcclxuXHRcdFx0XHRcdHRpdGxlPXsnd2F0ZXJGaWxsJ31cclxuXHRcdFx0XHRcdHR5cGU9eydWQUxVRSd9XHJcblx0XHRcdFx0XHRhdmVyYWdlPXthdmVyYWdlVmFsfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuXHRcdFx0XHQ8SGVhcnRGaWxsXHJcblx0XHRcdFx0XHR0aXRsZT17J2hlYXJ0RmlsbCd9XHJcblx0XHRcdFx0XHR0eXBlPXsnUE9TSVRJVkUnfVxyXG5cdFx0XHRcdFx0YXZlcmFnZT17YXZlcmFnZVBvc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxIZWFydEZpbGxcclxuXHRcdFx0XHRcdHRpdGxlPXsnaGVhcnRGaWxsJ31cclxuXHRcdFx0XHRcdHR5cGU9eydQRVJGT1JNQU5DRSd9XHJcblx0XHRcdFx0XHRhdmVyYWdlPXthdmVyYWdlUGVyfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEhlYXJ0RmlsbFxyXG5cdFx0XHRcdFx0dGl0bGU9eydoZWFydEZpbGwnfVxyXG5cdFx0XHRcdFx0dHlwZT17J1ZBTFVFJ31cclxuXHRcdFx0XHRcdGF2ZXJhZ2U9e2F2ZXJhZ2VWYWx9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxyXG5cdFx0XHRcdDxDaXJjbGVQcm9ncmVzc1xyXG5cdFx0XHRcdFx0cj17MzEuNX1cclxuXHRcdFx0XHRcdHRpdGxlPXsn7Ims7JuAJ31cclxuXHRcdFx0XHRcdHBlcmNlbnQ9e3BlcmNlbnQxfVxyXG5cdFx0XHRcdFx0Y29sb3JUeXBlPXsnWUVMTE9XJ31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDaXJjbGVQcm9ncmVzc1xyXG5cdFx0XHRcdFx0cj17MzcuOH1cclxuXHRcdFx0XHRcdHRpdGxlPXsn64uk7IaMIOyJrOybgCd9XHJcblx0XHRcdFx0XHRwZXJjZW50PXtwZXJjZW50Mn1cclxuXHRcdFx0XHRcdGNvbG9yVHlwZT17J0xJTUUnfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENpcmNsZVByb2dyZXNzXHJcblx0XHRcdFx0XHRyPXs0NC4xfVxyXG5cdFx0XHRcdFx0dGl0bGU9eyfrs7TthrUnfVxyXG5cdFx0XHRcdFx0cGVyY2VudD17YXZlcmFnZVBvc31cclxuXHRcdFx0XHRcdGNvbG9yVHlwZT17J0dSRUVOJ31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDaXJjbGVQcm9ncmVzc1xyXG5cdFx0XHRcdFx0cj17NTAuNH1cclxuXHRcdFx0XHRcdHRpdGxlPXsn64uk7IaMIOyWtOugpOybgCd9XHJcblx0XHRcdFx0XHRwZXJjZW50PXthdmVyYWdlVmFsfVxyXG5cdFx0XHRcdFx0Y29sb3JUeXBlPXsnU0tZJ31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDaXJjbGVQcm9ncmVzc1xyXG5cdFx0XHRcdFx0cj17NTYuN31cclxuXHRcdFx0XHRcdHRpdGxlPXsn7Ja066Ck7JuAJ31cclxuXHRcdFx0XHRcdHBlcmNlbnQ9e2F2ZXJhZ2VQZXJ9XHJcblx0XHRcdFx0XHRjb2xvclR5cGU9eydCTFVFJ31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=