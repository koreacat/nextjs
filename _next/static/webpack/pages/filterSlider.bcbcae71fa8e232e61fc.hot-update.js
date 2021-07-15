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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\filterSlider\\filter\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_filter_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var FilterList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_c = _s(function (props) {
  _s();

  var title = props.title,
      list = props.list;

  var _useStores = Object(src_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"])(),
      filterSliderUIStore = _useStores.filterSliderUIStore;

  var selectFilter = filterSliderUIStore.selectFilter,
      deleteFilter = filterSliderUIStore.deleteFilter,
      hasFilter = filterSliderUIStore.hasFilter;

  var _onChange = function onChange(hasFilter, filter) {
    console.log(hasFilter, filter);
    hasFilter ? deleteFilter(filter) : selectFilter(filter);
  };

  var filterList = list.map(function (filter) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: cx('item'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: filter.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: 'checkbox',
          onChange: function onChange(e) {
            return _onChange(hasFilter(filter), filter);
          },
          checked: hasFilter(filter)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)
    }, filter.type, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
      lineNumber: 41,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('filterList'),
      children: filterList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, _this);
}, "ewv5lygNqg+ylnPphswHPyNR5ss=", false, function () {
  return [src_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"]];
}));
_c2 = FilterList;

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
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '일하는 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WORKING_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '복지 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WELFARE_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '팀 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].TEAM_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '기업 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].COMPANY_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('filterContents'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '퇴근',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].LEAVE_WORK
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '휴식',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].REST
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '자기계발',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].SELF_IMPROVEMENT
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, _this);
};

_c3 = Filter;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c, _c2, _c3;

$RefreshReg$(_c, "FilterList$observer");
$RefreshReg$(_c2, "FilterList");
$RefreshReg$(_c3, "Filter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL2ZpbHRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkZpbHRlckxpc3QiLCJvYnNlcnZlciIsInByb3BzIiwidGl0bGUiLCJsaXN0IiwidXNlU3RvcmVzIiwiZmlsdGVyU2xpZGVyVUlTdG9yZSIsInNlbGVjdEZpbHRlciIsImRlbGV0ZUZpbHRlciIsImhhc0ZpbHRlciIsIm9uQ2hhbmdlIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsImZpbHRlckxpc3QiLCJtYXAiLCJ0ZXh0IiwiZSIsInR5cGUiLCJGaWx0ZXIiLCJmaWx0ZXJEYXRhIiwiQVRURU5EQU5DRSIsIldPUktJTkdfQ1VMVFVSRSIsIldFTEZBUkVfQ1VMVFVSRSIsIlRFQU1fQ1VMVFVSRSIsIkNPTVBBTllfQ1VMVFVSRSIsIkxFQVZFX1dPUksiLCJSRVNUIiwiU0VMRl9JTVBST1ZFTUVOVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywwREFBaEIsQ0FBWDtBQU9BLElBQU1DLFVBQVUsR0FBR0MsMkRBQVEsU0FBQyxVQUFDQyxLQUFELEVBQXVCO0FBQUE7O0FBQUEsTUFDeENDLEtBRHdDLEdBQ3pCRCxLQUR5QixDQUN4Q0MsS0FEd0M7QUFBQSxNQUNqQ0MsSUFEaUMsR0FDekJGLEtBRHlCLENBQ2pDRSxJQURpQzs7QUFBQSxtQkFFakJDLHdFQUFTLEVBRlE7QUFBQSxNQUV4Q0MsbUJBRndDLGNBRXhDQSxtQkFGd0M7O0FBQUEsTUFHeENDLFlBSHdDLEdBR0NELG1CQUhELENBR3hDQyxZQUh3QztBQUFBLE1BRzFCQyxZQUgwQixHQUdDRixtQkFIRCxDQUcxQkUsWUFIMEI7QUFBQSxNQUdaQyxTQUhZLEdB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LHFFQUFDLFVBQUQ7QUFBWSxhQUFLLEVBQUUsSUFBbkI7QUFBeUIsWUFBSSxFQUFFTixpRUFBVSxDQUFDTztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSSxxRUFBQyxVQUFEO0FBQVksYUFBSyxFQUFFLE1BQW5CO0FBQTJCLFlBQUksRUFBRVAsaUVBQVUsQ0FBQ1E7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0JILENBakJEOztNQUFNVCxNO0FBbUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWx0ZXJTbGlkZXIuYmNiY2FlNzFmYThlMjMyZTYxZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9maWx0ZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBJZmlsdGVyLCBmaWx0ZXJEYXRhIH0gZnJvbSAnc3JjL3BhZ2VzL2ZpbHRlclNsaWRlcic7XHJcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJ3NyYy91dGlsL3N0b3JlUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBGaWx0ZXJMaXN0IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBsaXN0OiBBcnJheTxJZmlsdGVyPjtcclxufVxyXG5cclxuY29uc3QgRmlsdGVyTGlzdCA9IG9ic2VydmVyKChwcm9wczogRmlsdGVyTGlzdCkgPT4ge1xyXG4gICAgY29uc3Qge3RpdGxlLCBsaXN0fSA9IHByb3BzO1xyXG4gICAgY29uc3Qge2ZpbHRlclNsaWRlclVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcbiAgICBjb25zdCB7c2VsZWN0RmlsdGVyLCBkZWxldGVGaWx0ZXIsIGhhc0ZpbHRlcn0gPSBmaWx0ZXJTbGlkZXJVSVN0b3JlO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGhhc0ZpbHRlciwgZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaGFzRmlsdGVyLCBmaWx0ZXIpO1xyXG4gICAgICAgIGhhc0ZpbHRlciA/IGRlbGV0ZUZpbHRlcihmaWx0ZXIpIDogc2VsZWN0RmlsdGVyKGZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyTGlzdCA9IGxpc3QubWFwKChmaWx0ZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtmaWx0ZXIudHlwZX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjeCgnaXRlbScpfT5cclxuXHRcdFx0ICAgIFx0PHNwYW4+e2ZpbHRlci50ZXh0fTwvc3Bhbj5cclxuXHRcdFx0ICAgIFx0PGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsnY2hlY2tib3gnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShoYXNGaWx0ZXIoZmlsdGVyKSwgZmlsdGVyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aGFzRmlsdGVyKGZpbHRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHRcdCAgICBcdDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ZpbHRlcicpfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnZmlsdGVyVGl0bGUnKX0+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y3goJ2ZpbHRlckxpc3QnKX0+XHJcbiAgICAgICAgICAgICAgICB7ZmlsdGVyTGlzdH1cclxuXHRcdCAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59KVxyXG5cclxuY29uc3QgRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ZpbHRlcldyYXAnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZmlsdGVyQ29udGVudHMnKX0+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+y2nOq3vCd9IGxpc3Q9e2ZpbHRlckRhdGEuQVRURU5EQU5DRX0vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfsnbztlZjripQg66y47ZmUJ30gbGlzdD17ZmlsdGVyRGF0YS5XT1JLSU5HX0NVTFRVUkV9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn67O17KeAIOusuO2ZlCd9IGxpc3Q9e2ZpbHRlckRhdGEuV0VMRkFSRV9DVUxUVVJFfS8+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+2MgCDrrLjtmZQnfSBsaXN0PXtmaWx0ZXJEYXRhLlRFQU1fQ1VMVFVSRX0vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfquLDsl4Ug66y47ZmUJ30gbGlzdD17ZmlsdGVyRGF0YS5DT01QQU5ZX0NVTFRVUkV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZmlsdGVyQ29udGVudHMnKX0+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+2HtOq3vCd9IGxpc3Q9e2ZpbHRlckRhdGEuTEVBVkVfV09SS30vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyftnLTsi50nfSBsaXN0PXtmaWx0ZXJEYXRhLlJFU1R9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn7J6Q6riw6rOE67CcJ30gbGlzdD17ZmlsdGVyRGF0YS5TRUxGX0lNUFJPVkVNRU5UfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiXSwic291cmNlUm9vdCI6IiJ9