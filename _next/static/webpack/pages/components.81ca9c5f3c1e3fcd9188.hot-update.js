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
        count: 1
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
        lineNumber: 41,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'PERFORMANCE',
        average: averagePer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'VALUE',
        average: averageVal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
        lineNumber: 58,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_heartFill__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: 'heartFill',
        type: 'PERFORMANCE',
        average: averagePer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_heartFill__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: 'heartFill',
        type: 'VALUE',
        average: averageVal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
        lineNumber: 75,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 37.8,
        title: '다소 쉬움',
        percent: percent2,
        colorType: 'LIME'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 44.1,
        title: '보통',
        percent: averagePos,
        colorType: 'GREEN'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 50.4,
        title: '다소 어려움',
        percent: averageVal,
        colorType: 'SKY'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        r: 56.7,
        title: '어려움',
        percent: averagePer,
        colorType: 'BLUE'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy50c3giXSwibmFtZXMiOlsiZ2V0SW50ZWdlciIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkNvbXBvbmVudHMiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJhdmVyYWdlUG9zIiwic2V0QXZlcmFnZVBvcyIsImF2ZXJhZ2VWYWwiLCJzZXRBdmVyYWdlVmFsIiwiYXZlcmFnZVBlciIsInNldEF2ZXJhZ2VQZXIiLCJwZXJjZW50MSIsInNldFBlcmNlbnQxIiwicGVyY2VudDIiLCJzZXRQZXJjZW50MiIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFpQjtBQUNuQyxTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSCxHQUEzQixDQUFQO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUNOLFVBQVUsQ0FBQyxNQUFELENBQVgsQ0FEVjtBQUFBLE1BQ2pCTyxLQURpQjtBQUFBLE1BQ1ZDLFFBRFU7O0FBQUEsbUJBRVlGLHNEQUFRLENBQUNOLFVBQVUsQ0FBQyxHQUFELENBQVgsQ0FGcEI7QUFBQSxNQUVqQlMsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUFBLG1CQUdZSixzREFBUSxDQUFDTixVQUFVLENBQUMsR0FBRCxDQUFYLENBSHBCO0FBQUEsTUFHakJXLFVBSGlCO0FBQUEsTUFHTEMsYUFISzs7QUFBQSxtQkFJWU4sc0RBQVEsQ0FBQ04sVUFBVSxDQUFDLEdBQUQsQ0FBWCxD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RSxRQUhWO0FBSUMsaUJBQVMsRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRCxlQWFDLHFFQUFDLHNFQUFEO0FBQ0MsU0FBQyxFQUFFLElBREo7QUFFQyxhQUFLLEVBQUUsSUFGUjtBQUdDLGVBQU8sRUFBRVIsVUFIVjtBQUlDLGlCQUFTLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkQsZUFtQkMscUVBQUMsc0VBQUQ7QUFDQyxTQUFDLEVBQUUsSUFESjtBQUVDLGFBQUssRUFBRSxRQUZSO0FBR0MsZUFBTyxFQUFFRSxVQUhWO0FBSUMsaUJBQVMsRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkQsZUF5QkMscUVBQUMsc0VBQUQ7QUFDQyxTQUFDLEVBQUUsSUFESjtBQUVDLGFBQUssRUFBRSxLQUZSO0FBR0MsZUFBTyxFQUFFRSxVQUhWO0FBSUMsaUJBQVMsRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBeUVBLENBaEdEOztHQUFNUixVOztLQUFBQSxVO0FBa0dTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wb25lbnRzLjgxY2E5YzVmM2MxZTNmY2Q5MTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2F0ZXJGaWxsIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy93YXRlckZpbGxcIjtcclxuaW1wb3J0IENvdW50IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb3VudC9pbmRleC5cIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhcnRGaWxsIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9oZWFydEZpbGxcIjtcclxuaW1wb3J0IENpcmNsZVByb2dyZXNzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jaXJjbGVQcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgZ2V0SW50ZWdlciA9IChtYXg6IG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpXHJcbn07XHJcblxyXG5jb25zdCBDb21wb25lbnRzID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoZ2V0SW50ZWdlcigxMDAwMDApKTtcclxuXHRjb25zdCBbYXZlcmFnZVBvcywgc2V0QXZlcmFnZVBvc10gPSB1c2VTdGF0ZShnZXRJbnRlZ2VyKDEwMSkpO1xyXG5cdGNvbnN0IFthdmVyYWdlVmFsLCBzZXRBdmVyYWdlVmFsXSA9IHVzZVN0YXRlKGdldEludGVnZXIoMTAxKSk7XHJcblx0Y29uc3QgW2F2ZXJhZ2VQZXIsIHNldEF2ZXJhZ2VQZXJdID0gdXNlU3RhdGUoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHRjb25zdCBbcGVyY2VudDEsIHNldFBlcmNlbnQxXSA9IHVzZVN0YXRlKGdldEludGVnZXIoMTAxKSk7XHJcblx0Y29uc3QgW3BlcmNlbnQyLCBzZXRQZXJjZW50Ml0gPSB1c2VTdGF0ZShnZXRJbnRlZ2VyKDEwMSkpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHNldENvdW50KGdldEludGVnZXIoMTAwMDAwKSk7XHJcblx0XHRcdHNldEF2ZXJhZ2VQb3MoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHRcdFx0c2V0QXZlcmFnZVZhbChnZXRJbnRlZ2VyKDEwMSkpO1xyXG5cdFx0XHRzZXRBdmVyYWdlUGVyKGdldEludGVnZXIoMTAxKSk7XHJcblx0XHRcdHNldFBlcmNlbnQxKGdldEludGVnZXIoMTAxKSk7XHJcblx0XHRcdHNldFBlcmNlbnQyKGdldEludGVnZXIoMTAxKSk7XHJcblx0XHR9LCA3MDAwKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0XHR9KVxyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PENvdW50IGNvdW50PXsxfS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuXHRcdFx0XHQ8V2F0ZXJGaWxsXHJcblx0XHRcdFx0XHR0aXRsZT17J3dhdGVyRmlsbCd9XHJcblx0XHRcdFx0XHR0eXBlPXsnUE9TSVRJVkUnfVxyXG5cdFx0XHRcdFx0YXZlcmFnZT17YXZlcmFnZVBvc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxXYXRlckZpbGxcclxuXHRcdFx0XHRcdHRpdGxlPXsnd2F0ZXJGaWxsJ31cclxuXHRcdFx0XHRcdHR5cGU9eydQRVJGT1JNQU5DRSd9XHJcblx0XHRcdFx0XHRhdmVyYWdlPXthdmVyYWdlUGVyfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFdhdGVyRmlsbFxyXG5cdFx0XHRcdFx0dGl0bGU9eyd3YXRlckZpbGwnfVxyXG5cdFx0XHRcdFx0dHlwZT17J1ZBTFVFJ31cclxuXHRcdFx0XHRcdGF2ZXJhZ2U9e2F2ZXJhZ2VWYWx9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxyXG5cdFx0XHRcdDxIZWFydEZpbGxcclxuXHRcdFx0XHRcdHRpdGxlPXsnaGVhcnRGaWxsJ31cclxuXHRcdFx0XHRcdHR5cGU9eydQT1NJVElWRSd9XHJcblx0XHRcdFx0XHRhdmVyYWdlPXthdmVyYWdlUG9zfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEhlYXJ0RmlsbFxyXG5cdFx0XHRcdFx0dGl0bGU9eydoZWFydEZpbGwnfVxyXG5cdFx0XHRcdFx0dHlwZT17J1BFUkZPUk1BTkNFJ31cclxuXHRcdFx0XHRcdGF2ZXJhZ2U9e2F2ZXJhZ2VQZXJ9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8SGVhcnRGaWxsXHJcblx0XHRcdFx0XHR0aXRsZT17J2hlYXJ0RmlsbCd9XHJcblx0XHRcdFx0XHR0eXBlPXsnVkFMVUUnfVxyXG5cdFx0XHRcdFx0YXZlcmFnZT17YXZlcmFnZVZhbH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblx0XHRcdFx0PENpcmNsZVByb2dyZXNzXHJcblx0XHRcdFx0XHRyPXszMS41fVxyXG5cdFx0XHRcdFx0dGl0bGU9eyfsiazsm4AnfVxyXG5cdFx0XHRcdFx0cGVyY2VudD17cGVyY2VudDF9XHJcblx0XHRcdFx0XHRjb2xvclR5cGU9eydZRUxMT1cnfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENpcmNsZVByb2dyZXNzXHJcblx0XHRcdFx0XHRyPXszNy44fVxyXG5cdFx0XHRcdFx0dGl0bGU9eyfri6Tshowg7Ims7JuAJ31cclxuXHRcdFx0XHRcdHBlcmNlbnQ9e3BlcmNlbnQyfVxyXG5cdFx0XHRcdFx0Y29sb3JUeXBlPXsnTElNRSd9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdHI9ezQ0LjF9XHJcblx0XHRcdFx0XHR0aXRsZT17J+uztO2GtSd9XHJcblx0XHRcdFx0XHRwZXJjZW50PXthdmVyYWdlUG9zfVxyXG5cdFx0XHRcdFx0Y29sb3JUeXBlPXsnR1JFRU4nfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENpcmNsZVByb2dyZXNzXHJcblx0XHRcdFx0XHRyPXs1MC40fVxyXG5cdFx0XHRcdFx0dGl0bGU9eyfri6Tshowg7Ja066Ck7JuAJ31cclxuXHRcdFx0XHRcdHBlcmNlbnQ9e2F2ZXJhZ2VWYWx9XHJcblx0XHRcdFx0XHRjb2xvclR5cGU9eydTS1knfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENpcmNsZVByb2dyZXNzXHJcblx0XHRcdFx0XHRyPXs1Ni43fVxyXG5cdFx0XHRcdFx0dGl0bGU9eyfslrTroKTsm4AnfVxyXG5cdFx0XHRcdFx0cGVyY2VudD17YXZlcmFnZVBlcn1cclxuXHRcdFx0XHRcdGNvbG9yVHlwZT17J0JMVUUnfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==