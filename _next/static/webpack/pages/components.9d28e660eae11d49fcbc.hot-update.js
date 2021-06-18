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
/* harmony import */ var _src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/util/getInteger */ "./src/util/getInteger.ts");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\components.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Components = function Components() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(100000)),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(101)),
      averagePos = _useState2[0],
      setAveragePos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(101)),
      averageVal = _useState3[0],
      setAverageVal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(101)),
      averagePer = _useState4[0],
      setAveragePer = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(101) * 2),
      percent = _useState5[0],
      setPercent = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var interval = setInterval(function () {
      setCount(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(100000));
      setAveragePos(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(101));
      setAverageVal(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(101));
      setAveragePer(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(101));
      setPercent(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_7__["getInteger"])(101) * 2);
    }, 7000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_count_index___WEBPACK_IMPORTED_MODULE_2__["default"], {
        maxLength: 1,
        count: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_count_index___WEBPACK_IMPORTED_MODULE_2__["default"], {
        maxLength: 3,
        count: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_count_index___WEBPACK_IMPORTED_MODULE_2__["default"], {
        maxLength: 5,
        count: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
        lineNumber: 47,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'PERFORMANCE',
        average: averagePer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'VALUE',
        average: averageVal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
        lineNumber: 64,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_heartFill__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: 'heartFill',
        type: 'PERFORMANCE',
        average: averagePer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_heartFill__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: 'heartFill',
        type: 'VALUE',
        average: averageVal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 31.5,
        title: '쉬움',
        percent: percent / 5,
        colorType: 'YELLOW'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 37.8,
        title: '다소 쉬움',
        percent: percent / 4,
        colorType: 'LIME'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 44.1,
        title: '보통',
        percent: percent / 3,
        colorType: 'GREEN'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 50.4,
        title: '다소 어려움',
        percent: percent / 2,
        colorType: 'SKY'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 56.7,
        title: '어려움',
        percent: 97,
        colorType: 'BLUE'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, _this);
};

_s(Components, "iUXLsWzNR9EYce/8Yta4DBRsPy0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy50c3giXSwibmFtZXMiOlsiQ29tcG9uZW50cyIsInVzZVN0YXRlIiwiZ2V0SW50ZWdlciIsImNvdW50Iiwic2V0Q291bnQiLCJhdmVyYWdlUG9zIiwic2V0QXZlcmFnZVBvcyIsImF2ZXJhZ2VWYWwiLCJzZXRBdmVyYWdlVmFsIiwiYXZlcmFnZVBlciIsInNldEF2ZXJhZ2VQZXIiLCJwZXJjZW50Iiwic2V0UGVyY2VudCIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDQyx1RUFBVSxDQUFDLE1BQUQsQ0FBWCxDQURWO0FBQUEsTUFDakJDLEtBRGlCO0FBQUEsTUFDVkMsUUFEVTs7QUFBQSxtQkFFWUgsc0RBQVEsQ0FBQ0MsdUVBQVUsQ0FBQyxHQUFELENBQVgsQ0FGcEI7QUFBQSxNQUVqQkcsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUFBLG1CQUdZTCxzREFBUSxDQUFDQyx1RUFBVSxDQUFDLEdBQUQsQ0FBWCxDQUhwQjtBQUFBLE1BR2pCSyxVQUhpQjtBQUFBLE1BR0xDLGFBSEs7O0FBQUEsbUJBSVlQLHNEQUFRLENBQUNDLHVFQUFVLENBQUMsR0FBRCxDQUFYLENBSnBCO0FBQUEsTUFJakJPLFVBSmlCO0FBQUEsTUFJTEMsYUFKSzs7QUFBQSxtQkFLTVQsc0RBQVEsQ0FBQ0MsdUVBQVUsQ0FBQyxHQUFELENBQVYsR0FBa0IsQ0FBbkIsQ0FMZDtBQUFBLE1BS2pCUyxPQUxpQjtBQUFBLE1BS1JDLFVBTFE7O0FBT3hCQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxRQUFR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O0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBELGVBYUMscUVBQUMsc0VBQUQ7QUFDQyxTQUFDLEVBQUUsSUFESjtBQUVDLGFBQUssRUFBRSxJQUZSO0FBR0MsZUFBTyxFQUFFQSxPQUFPLEdBQUcsQ0FIcEI7QUFJQyxpQkFBUyxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJELGVBbUJDLHFFQUFDLHNFQUFEO0FBQ0MsU0FBQyxFQUFFLElBREo7QUFFQyxhQUFLLEVBQUUsUUFGUjtBQUdDLGVBQU8sRUFBRUEsT0FBTyxHQUFHLENBSHBCO0FBSUMsaUJBQVMsRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkQsZUF5QkMscUVBQUMsc0VBQUQ7QUFDQyxTQUFDLEVBQUUsSUFESjtBQUVDLGFBQUssRUFBRSxLQUZSO0FBR0MsZUFBTyxFQUFFLEVBSFY7QUFJQyxpQkFBUyxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFvRkEsQ0F6R0Q7O0dBQU1YLFU7O0tBQUFBLFU7QUEyR1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXBvbmVudHMuOWQyOGU2NjBlYWUxMWQ0OWZjYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXYXRlckZpbGwgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3dhdGVyRmlsbFwiO1xyXG5pbXBvcnQgQ291bnQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvdW50L2luZGV4LlwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFydEZpbGwgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2hlYXJ0RmlsbFwiO1xyXG5pbXBvcnQgQ2lyY2xlUHJvZ3Jlc3MgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NpcmNsZVByb2dyZXNzXCI7XHJcbmltcG9ydCB7Z2V0SW50ZWdlcn0gZnJvbSBcIi4uL3NyYy91dGlsL2dldEludGVnZXJcIjtcclxuXHJcbmNvbnN0IENvbXBvbmVudHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShnZXRJbnRlZ2VyKDEwMDAwMCkpO1xyXG5cdGNvbnN0IFthdmVyYWdlUG9zLCBzZXRBdmVyYWdlUG9zXSA9IHVzZVN0YXRlKGdldEludGVnZXIoMTAxKSk7XHJcblx0Y29uc3QgW2F2ZXJhZ2VWYWwsIHNldEF2ZXJhZ2VWYWxdID0gdXNlU3RhdGUoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHRjb25zdCBbYXZlcmFnZVBlciwgc2V0QXZlcmFnZVBlcl0gPSB1c2VTdGF0ZShnZXRJbnRlZ2VyKDEwMSkpO1xyXG5cdGNvbnN0IFtwZXJjZW50LCBzZXRQZXJjZW50XSA9IHVzZVN0YXRlKGdldEludGVnZXIoMTAxKSAqIDIpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHNldENvdW50KGdldEludGVnZXIoMTAwMDAwKSk7XHJcblx0XHRcdHNldEF2ZXJhZ2VQb3MoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHRcdFx0c2V0QXZlcmFnZVZhbChnZXRJbnRlZ2VyKDEwMSkpO1xyXG5cdFx0XHRzZXRBdmVyYWdlUGVyKGdldEludGVnZXIoMTAxKSk7XHJcblx0XHRcdHNldFBlcmNlbnQoZ2V0SW50ZWdlcigxMDEpICogMik7XHJcblx0XHR9LCA3MDAwKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0XHR9KVxyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxyXG5cdFx0XHRcdDxDb3VudFxyXG5cdFx0XHRcdFx0bWF4TGVuZ3RoPXsxfVxyXG5cdFx0XHRcdFx0Y291bnQ9e2NvdW50fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENvdW50XHJcblx0XHRcdFx0XHRtYXhMZW5ndGg9ezN9XHJcblx0XHRcdFx0XHRjb3VudD17Y291bnR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q291bnRcclxuXHRcdFx0XHRcdG1heExlbmd0aD17NX1cclxuXHRcdFx0XHRcdGNvdW50PXtjb3VudH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblx0XHRcdFx0PFdhdGVyRmlsbFxyXG5cdFx0XHRcdFx0dGl0bGU9eyd3YXRlckZpbGwnfVxyXG5cdFx0XHRcdFx0dHlwZT17J1BPU0lUSVZFJ31cclxuXHRcdFx0XHRcdGF2ZXJhZ2U9e2F2ZXJhZ2VQb3N9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8V2F0ZXJGaWxsXHJcblx0XHRcdFx0XHR0aXRsZT17J3dhdGVyRmlsbCd9XHJcblx0XHRcdFx0XHR0eXBlPXsnUEVSRk9STUFOQ0UnfVxyXG5cdFx0XHRcdFx0YXZlcmFnZT17YXZlcmFnZVBlcn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxXYXRlckZpbGxcclxuXHRcdFx0XHRcdHRpdGxlPXsnd2F0ZXJGaWxsJ31cclxuXHRcdFx0XHRcdHR5cGU9eydWQUxVRSd9XHJcblx0XHRcdFx0XHRhdmVyYWdlPXthdmVyYWdlVmFsfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuXHRcdFx0XHQ8SGVhcnRGaWxsXHJcblx0XHRcdFx0XHR0aXRsZT17J2hlYXJ0RmlsbCd9XHJcblx0XHRcdFx0XHR0eXBlPXsnUE9TSVRJVkUnfVxyXG5cdFx0XHRcdFx0YXZlcmFnZT17YXZlcmFnZVBvc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxIZWFydEZpbGxcclxuXHRcdFx0XHRcdHRpdGxlPXsnaGVhcnRGaWxsJ31cclxuXHRcdFx0XHRcdHR5cGU9eydQRVJGT1JNQU5DRSd9XHJcblx0XHRcdFx0XHRhdmVyYWdlPXthdmVyYWdlUGVyfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEhlYXJ0RmlsbFxyXG5cdFx0XHRcdFx0dGl0bGU9eydoZWFydEZpbGwnfVxyXG5cdFx0XHRcdFx0dHlwZT17J1ZBTFVFJ31cclxuXHRcdFx0XHRcdGF2ZXJhZ2U9e2F2ZXJhZ2VWYWx9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxyXG5cdFx0XHRcdDxDaXJjbGVQcm9ncmVzc1xyXG5cdFx0XHRcdFx0cj17MzEuNX1cclxuXHRcdFx0XHRcdHRpdGxlPXsn7Ims7JuAJ31cclxuXHRcdFx0XHRcdHBlcmNlbnQ9e3BlcmNlbnQgLyA1fVxyXG5cdFx0XHRcdFx0Y29sb3JUeXBlPXsnWUVMTE9XJ31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDaXJjbGVQcm9ncmVzc1xyXG5cdFx0XHRcdFx0cj17MzcuOH1cclxuXHRcdFx0XHRcdHRpdGxlPXsn64uk7IaMIOyJrOybgCd9XHJcblx0XHRcdFx0XHRwZXJjZW50PXtwZXJjZW50IC8gNH1cclxuXHRcdFx0XHRcdGNvbG9yVHlwZT17J0xJTUUnfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENpcmNsZVByb2dyZXNzXHJcblx0XHRcdFx0XHRyPXs0NC4xfVxyXG5cdFx0XHRcdFx0dGl0bGU9eyfrs7TthrUnfVxyXG5cdFx0XHRcdFx0cGVyY2VudD17cGVyY2VudCAvIDN9XHJcblx0XHRcdFx0XHRjb2xvclR5cGU9eydHUkVFTid9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdHI9ezUwLjR9XHJcblx0XHRcdFx0XHR0aXRsZT17J+uLpOyGjCDslrTroKTsm4AnfVxyXG5cdFx0XHRcdFx0cGVyY2VudD17cGVyY2VudCAvIDJ9XHJcblx0XHRcdFx0XHRjb2xvclR5cGU9eydTS1knfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENpcmNsZVByb2dyZXNzXHJcblx0XHRcdFx0XHRyPXs1Ni43fVxyXG5cdFx0XHRcdFx0dGl0bGU9eyfslrTroKTsm4AnfVxyXG5cdFx0XHRcdFx0cGVyY2VudD17OTd9XHJcblx0XHRcdFx0XHRjb2xvclR5cGU9eydCTFVFJ31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=