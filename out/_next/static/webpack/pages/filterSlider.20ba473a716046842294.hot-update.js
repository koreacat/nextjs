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

  var selectItem = filterSliderUIStore.selectItem,
      deleteItem = filterSliderUIStore.deleteItem;

  var _onChange = function onChange(checked, filter) {
    console.log(checked);
    console.log(filter);
  };

  var filterList = list.map(function (filter) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: cx('item'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: filter.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: 'checkbox',
          onChange: function onChange(e) {
            return _onChange(e.target.checked, filter);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, filter.type, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('filterList'),
      children: filterList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '일하는 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WORKING_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '복지 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WELFARE_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '팀 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].TEAM_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '기업 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].COMPANY_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('filterContents'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '퇴근',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].LEAVE_WORK
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '휴식',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].REST
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '자기계발',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].SELF_IMPROVEMENT
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL2ZpbHRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkZpbHRlckxpc3QiLCJwcm9wcyIsInRpdGxlIiwibGlzdCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJzZWxlY3RJdGVtIiwiZGVsZXRlSXRlbSIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJMaXN0IiwibWFwIiwidGV4dCIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwiRmlsdGVyIiwiZmlsdGVyRGF0YSIsIkFUVEVOREFOQ0UiLCJXT1JLSU5HX0NVTFRVUkUiLCJXRUxGQVJFX0NVTFRVUkUiLCJURUFNX0NVTFRVUkUiLCJDT01QQU5ZX0NVTFRVUkUiLCJMRUFWRV9XT1JLIiwiUkVTVCIsIlNFTEZfSU1QUk9WRU1FTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUF1QjtBQUFBOztBQUFBLE1BQy9CQyxLQUQrQixHQUNoQkQsS0FEZ0IsQ0FDL0JDLEtBRCtCO0FBQUEsTUFDeEJDLElBRHdCLEdBQ2hCRixLQURnQixDQUN4QkUsSUFEd0I7O0FBQUEsbUJBRVJDLHdFQUFTLEVBRkQ7QUFBQSxNQUUvQkMsbUJBRitCLGNBRS9CQSxtQkFGK0I7O0FBQUEsTUFHL0JDLFVBSCtCLEdBR0xELG1CQUhLLENBRy9CQyxVQUgrQjtBQUFBLE1BR25CQyxVQUhtQixHQUdMRixtQkFISyxDQUduQkUsVUFIbUI7O0FBS3RDLE1BQU1DLFNBQVEsR0FBRyxTQUFYQSxRQUFX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RVAsaUVBQVUsQ0FBQ1E7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0JILENBakJEOztNQUFNVCxNO0FBbUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWx0ZXJTbGlkZXIuMjBiYTQ3M2E3MTYwNDY4NDIyOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9maWx0ZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBJZmlsdGVyLCBmaWx0ZXJEYXRhIH0gZnJvbSAnc3JjL3BhZ2VzL2ZpbHRlclNsaWRlcic7XHJcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJ3NyYy91dGlsL3N0b3JlUHJvdmlkZXInO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBGaWx0ZXJMaXN0IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBsaXN0OiBBcnJheTxJZmlsdGVyPjtcclxufVxyXG5cclxuY29uc3QgRmlsdGVyTGlzdCA9IChwcm9wczogRmlsdGVyTGlzdCkgPT4ge1xyXG4gICAgY29uc3Qge3RpdGxlLCBsaXN0fSA9IHByb3BzO1xyXG4gICAgY29uc3Qge2ZpbHRlclNsaWRlclVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcbiAgICBjb25zdCB7c2VsZWN0SXRlbSwgZGVsZXRlSXRlbX0gPSBmaWx0ZXJTbGlkZXJVSVN0b3JlO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGNoZWNrZWQsIGZpbHRlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyTGlzdCA9IGxpc3QubWFwKChmaWx0ZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtmaWx0ZXIudHlwZX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjeCgnaXRlbScpfT5cclxuXHRcdFx0ICAgIFx0PHNwYW4+e2ZpbHRlci50ZXh0fTwvc3Bhbj5cclxuXHRcdFx0ICAgIFx0PGlucHV0IHR5cGU9eydjaGVja2JveCd9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQuY2hlY2tlZCwgZmlsdGVyKX0vPlxyXG5cdFx0ICAgIFx0PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZmlsdGVyJyl9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdmaWx0ZXJUaXRsZScpfT57dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjeCgnZmlsdGVyTGlzdCcpfT5cclxuICAgICAgICAgICAgICAgIHtmaWx0ZXJMaXN0fVxyXG5cdFx0ICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEZpbHRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdmaWx0ZXJXcmFwJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ZpbHRlckNvbnRlbnRzJyl9PlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfstpzqt7wnfSBsaXN0PXtmaWx0ZXJEYXRhLkFUVEVOREFOQ0V9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn7J287ZWY64qUIOusuO2ZlCd9IGxpc3Q9e2ZpbHRlckRhdGEuV09SS0lOR19DVUxUVVJFfS8+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+uzteyngCDrrLjtmZQnfSBsaXN0PXtmaWx0ZXJEYXRhLldFTEZBUkVfQ1VMVFVSRX0vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyftjIAg66y47ZmUJ30gbGlzdD17ZmlsdGVyRGF0YS5URUFNX0NVTFRVUkV9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn6riw7JeFIOusuO2ZlCd9IGxpc3Q9e2ZpbHRlckRhdGEuQ09NUEFOWV9DVUxUVVJFfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ZpbHRlckNvbnRlbnRzJyl9PlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfth7Tqt7wnfSBsaXN0PXtmaWx0ZXJEYXRhLkxFQVZFX1dPUkt9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn7Zy07IudJ30gbGlzdD17ZmlsdGVyRGF0YS5SRVNUfS8+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+yekOq4sOqzhOuwnCd9IGxpc3Q9e2ZpbHRlckRhdGEuU0VMRl9JTVBST1ZFTUVOVH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==