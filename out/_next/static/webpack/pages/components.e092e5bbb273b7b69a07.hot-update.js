webpackHotUpdate_N_E("pages/components",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/contents/contents.module.scss":
false,

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


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\components.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Components = function Components() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Math.floor(Math.random() * 101)),
      averagePos = _useState[0],
      setAveragePos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Math.floor(Math.random() * 101)),
      averageVal = _useState2[0],
      setAverageVal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Math.floor(Math.random() * 101)),
      averagePer = _useState3[0],
      setAveragePer = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Math.floor(Math.random() * 100000)),
      count = _useState4[0],
      setCount = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var interval = setInterval(function () {
      setAveragePos(Math.floor(Math.random() * 101));
      setAverageVal(Math.floor(Math.random() * 101));
      setAveragePer(Math.floor(Math.random() * 101));
      setCount(Math.floor(Math.random() * 100000));
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'POSITIVE',
        average: averagePos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'VALUE',
        average: averageVal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_waterFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'waterFill',
        type: 'PERFORMANCE',
        average: averagePer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_count_index___WEBPACK_IMPORTED_MODULE_2__["default"], {
      count: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};

_s(Components, "LaeTVOwpnjGY4IXh/XISlUQqtrM=");

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

/***/ }),

/***/ "./src/components/common/contents/contents.module.scss":
false,

/***/ "./src/components/common/contents/index.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy50c3giXSwibmFtZXMiOlsiQ29tcG9uZW50cyIsInVzZVN0YXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXZlcmFnZVBvcyIsInNldEF2ZXJhZ2VQb3MiLCJhdmVyYWdlVmFsIiwic2V0QXZlcmFnZVZhbCIsImF2ZXJhZ2VQZXIiLCJzZXRBdmVyYWdlUGVyIiwiY291bnQiLCJzZXRDb3VudCIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQUQsQ0FEcEI7QUFBQSxNQUNqQkMsVUFEaUI7QUFBQSxNQUNMQyxhQURLOztBQUFBLG1CQUVZTCxzREFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQUQsQ0FGcEI7QUFBQSxNQUVqQkcsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUFBLG1CQUdZUCxzREFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQUQsQ0FIcEI7QUFBQSxNQUdqQkssVUFIaUI7QUFBQSxNQUdMQyxhQUhLOztBQUFBLG1CQUlFVCxzREFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLE1BQTNCLENBQUQsQ0FKVjtBQUFBLE1BSWpCTyxLQUppQjtBQUFBLE1BSVZDLFFBSlU7O0FBTXhCQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2xDVCxtQkFBYSxDQUFDSixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQUQsQ0FBYjtBQUNBSSxtQkFBYSxDQUFDTixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQUQsQ0FBYjtBQUNBTSxtQkFBYSxDQUFDUixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQUQsQ0FBYjtBQUNBUSxjQUFRLENBQUNWLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsTUFBM0IsQ0FBRCxDQUFSO0FBQ0EsS0FMMkIsRUFLekIsSUFMeUIsQ0FBNUI7QUFPQSxXQUFRLFlBQU07QUFDYlksbUJBQWEsQ0FBQ0YsUUFBRCxDQUFiO0FBQ0EsS0FGRDtBQUdBLEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxzQkFDQyxxRUFBQyxxRUFBRDtBQUFBLDRCQUNDO0FBQUssV0FBSyxFQUFFO0FBQUNHLGVBQU8sRUFBRTtBQUFWLE9BQVo7QUFBQSw4QkFDQyxxRUFBQyxpRUFBRDtBQUNDLGFBQUssRUFBRSxXQURSO0FBRUMsWUFBSSxFQUFFLFVBRlA7QUFHQyxlQUFPLEVBQUVaO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBTUMscUVBQUMsaUVBQUQ7QUFDQyxhQUFLLEVBQUUsV0FEUjtBQUVDLFlBQUksRUFBRSxPQUZQO0FBR0MsZUFBTyxFQUFFRTtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORCxlQVdDLHFFQUFDLGlFQUFEO0FBQ0MsYUFBSyxFQUFFLFdBRFI7QUFFQyxZQUFJLEVBQUUsYUFGUDtBQUdDLGVBQU8sRUFBRUU7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFrQkMscUVBQUMsb0VBQUQ7QUFBTyxXQUFLLEVBQUVFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXNCQSxDQXpDRDs7R0FBTVgsVTs7S0FBQUEsVTtBQTJDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29tcG9uZW50cy5lMDkyZTViYmIyNzNiN2I2OWEwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhdGVyRmlsbCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvd2F0ZXJGaWxsXCI7XHJcbmltcG9ydCBDb3VudCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY291bnQvaW5kZXguXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbXBvbmVudHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2F2ZXJhZ2VQb3MsIHNldEF2ZXJhZ2VQb3NdID0gdXNlU3RhdGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAxKSk7XHJcblx0Y29uc3QgW2F2ZXJhZ2VWYWwsIHNldEF2ZXJhZ2VWYWxdID0gdXNlU3RhdGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAxKSk7XHJcblx0Y29uc3QgW2F2ZXJhZ2VQZXIsIHNldEF2ZXJhZ2VQZXJdID0gdXNlU3RhdGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAxKSk7XHJcblx0Y29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRzZXRBdmVyYWdlUG9zKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSkpO1xyXG5cdFx0XHRzZXRBdmVyYWdlVmFsKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSkpO1xyXG5cdFx0XHRzZXRBdmVyYWdlUGVyKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSkpO1xyXG5cdFx0XHRzZXRDb3VudChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKTtcclxuXHRcdH0sIDcwMDApO1xyXG5cclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHRcdH0pXHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblx0XHRcdFx0PFdhdGVyRmlsbFxyXG5cdFx0XHRcdFx0dGl0bGU9eyd3YXRlckZpbGwnfVxyXG5cdFx0XHRcdFx0dHlwZT17J1BPU0lUSVZFJ31cclxuXHRcdFx0XHRcdGF2ZXJhZ2U9e2F2ZXJhZ2VQb3N9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8V2F0ZXJGaWxsXHJcblx0XHRcdFx0XHR0aXRsZT17J3dhdGVyRmlsbCd9XHJcblx0XHRcdFx0XHR0eXBlPXsnVkFMVUUnfVxyXG5cdFx0XHRcdFx0YXZlcmFnZT17YXZlcmFnZVZhbH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxXYXRlckZpbGxcclxuXHRcdFx0XHRcdHRpdGxlPXsnd2F0ZXJGaWxsJ31cclxuXHRcdFx0XHRcdHR5cGU9eydQRVJGT1JNQU5DRSd9XHJcblx0XHRcdFx0XHRhdmVyYWdlPXthdmVyYWdlUGVyfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Q291bnQgY291bnQ9e2NvdW50fS8+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9