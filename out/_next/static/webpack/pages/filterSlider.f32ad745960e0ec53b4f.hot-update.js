webpackHotUpdate_N_E("pages/filterSlider",{

/***/ "./src/components/filterSlider/filter/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/filterSlider/filter/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.module.scss */ "./src/components/filterSlider/filter/filter.module.scss");
/* harmony import */ var _filter_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filter_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/filterSlider */ "./src/pages/filterSlider.tsx");
/* harmony import */ var src_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/util/storeProvider */ "./src/util/storeProvider.tsx");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\filterSlider\\filter\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_filter_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

var FilterList = function FilterList(props) {
  _s();

  var title = props.title,
      list = props.list;

  var _useStores = Object(src_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"])(),
      filterSliderUIStore = _useStores.filterSliderUIStore;

  var updateItem = filterSliderUIStore.updateItem;
  var filterList = list.map(function (filter, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: cx('item'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: filter.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: 'checkbox',
          onChange: function onChange(e) {
            console.log(e.target.checked);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)
    }, filter.type, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('filter'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('filterTitle'),
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('filterList'),
      children: filterList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
};

_s(FilterList, "ewv5lygNqg+ylnPphswHPyNR5ss=", false, function () {
  return [src_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"]];
});

_c = FilterList;

var Filter = function Filter() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('filterWrap'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('filterContents'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '출근',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].ATTENDANCE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '일하는 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WORKING_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '복지 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WELFARE_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '팀 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].TEAM_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '기업 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].COMPANY_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('filterContents'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '퇴근',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].LEAVE_WORK
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '휴식',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].REST
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '자기계발',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].SELF_IMPROVEMENT
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, _this);
};

_c2 = Filter;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c, _c2;

$RefreshReg$(_c, "FilterList");
$RefreshReg$(_c2, "Filter");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL2ZpbHRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkZpbHRlckxpc3QiLCJwcm9wcyIsInRpdGxlIiwibGlzdCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJ1cGRhdGVJdGVtIiwiZmlsdGVyTGlzdCIsIm1hcCIsImZpbHRlciIsImluZGV4IiwidGV4dCIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiY2hlY2tlZCIsInR5cGUiLCJGaWx0ZXIiLCJmaWx0ZXJEYXRhIiwiQVRURU5EQU5DRSIsIldPUktJTkdfQ1VMVFVSRSIsIldFTEZBUkVfQ1VMVFVSRSIsIlRFQU1fQ1VMVFVSRSIsIkNPTVBBTllfQ1VMVFVSRSIsIkxFQVZFX1dPUksiLCJSRVNUIiwiU0VMRl9JTVBST1ZFTUVOVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywwREFBaEIsQ0FBWDs7QUFPQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQXVCO0FBQUE7O0FBQUEsTUFDL0JDLEtBRCtCLEdBQ2hCRCxLQURnQixDQUMvQkMsS0FEK0I7QUFBQSxNQUN4QkMsSUFEd0IsR0FDaEJGLEtBRGdCLENBQ3hCRSxJQUR3Qjs7QUFBQSxtQkFFUkMsd0VBQVMsRUFGRDtBQUFBLE1BRS9CQyxtQkFGK0IsY0FFL0JBLG1CQUYrQjs7QUFBQSxNQUcvQkMsVUFIK0IsR0FHakJELG1CQUhpQixDQUcvQkMsVUFIK0I7QUFLdEMsTUFBTUMsVUFBVSxHQUFHSixJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDM0Msd0JBQ0k7QUFBQSw2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NTk2MGUwZWM1M2I0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZpbHRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IElmaWx0ZXIsIGZpbHRlckRhdGEgfSBmcm9tICdzcmMvcGFnZXMvZmlsdGVyU2xpZGVyJztcclxuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnc3JjL3V0aWwvc3RvcmVQcm92aWRlcic7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIEZpbHRlckxpc3Qge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGxpc3Q6IEFycmF5PElmaWx0ZXI+O1xyXG59XHJcblxyXG5jb25zdCBGaWx0ZXJMaXN0ID0gKHByb3BzOiBGaWx0ZXJMaXN0KSA9PiB7XHJcbiAgICBjb25zdCB7dGl0bGUsIGxpc3R9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7ZmlsdGVyU2xpZGVyVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuICAgIGNvbnN0IHt1cGRhdGVJdGVtfSA9IGZpbHRlclNsaWRlclVJU3RvcmU7XHJcblxyXG4gICAgY29uc3QgZmlsdGVyTGlzdCA9IGxpc3QubWFwKChmaWx0ZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGtleT17ZmlsdGVyLnR5cGV9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y3goJ2l0ZW0nKX0+XHJcblx0XHRcdCAgICBcdDxzcGFuPntmaWx0ZXIudGV4dH08L3NwYW4+XHJcblx0XHRcdCAgICBcdDxpbnB1dCB0eXBlPXsnY2hlY2tib3gnfSBvbkNoYW5nZT17ZSA9PiB7Y29uc29sZS5sb2coZS50YXJnZXQuY2hlY2tlZCl9fS8+XHJcblx0XHQgICAgXHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdmaWx0ZXInKX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2ZpbHRlclRpdGxlJyl9Pnt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2N4KCdmaWx0ZXJMaXN0Jyl9PlxyXG4gICAgICAgICAgICAgICAge2ZpbHRlckxpc3R9XHJcblx0XHQgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ZpbHRlcldyYXAnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZmlsdGVyQ29udGVudHMnKX0+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+y2nOq3vCd9IGxpc3Q9e2ZpbHRlckRhdGEuQVRURU5EQU5DRX0vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfsnbztlZjripQg66y47ZmUJ30gbGlzdD17ZmlsdGVyRGF0YS5XT1JLSU5HX0NVTFRVUkV9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn67O17KeAIOusuO2ZlCd9IGxpc3Q9e2ZpbHRlckRhdGEuV0VMRkFSRV9DVUxUVVJFfS8+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+2MgCDrrLjtmZQnfSBsaXN0PXtmaWx0ZXJEYXRhLlRFQU1fQ1VMVFVSRX0vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfquLDsl4Ug66y47ZmUJ30gbGlzdD17ZmlsdGVyRGF0YS5DT01QQU5ZX0NVTFRVUkV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZmlsdGVyQ29udGVudHMnKX0+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+2HtOq3vCd9IGxpc3Q9e2ZpbHRlckRhdGEuTEVBVkVfV09SS30vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyftnLTsi50nfSBsaXN0PXtmaWx0ZXJEYXRhLlJFU1R9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn7J6Q6riw6rOE67CcJ30gbGlzdD17ZmlsdGVyRGF0YS5TRUxGX0lNUFJPVkVNRU5UfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiXSwic291cmNlUm9vdCI6IiJ9