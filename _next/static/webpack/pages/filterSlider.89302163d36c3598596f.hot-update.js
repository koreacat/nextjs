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

  var selectFilter = filterSliderUIStore.selectFilter,
      deleteFilter = filterSliderUIStore.deleteFilter,
      hasFilter = filterSliderUIStore.hasFilter;

  var _onChange = function onChange(checked, filter) {
    checked ? selectFilter(filter) : deleteFilter(filter);
  };

  var filterList = list.map(function (filter) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: cx('item'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: filter.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: 'checkbox',
          onChange: function onChange(e) {
            return _onChange(hasFilter(filter), filter);
          },
          checked: hasFilter(filter)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)
    }, filter.type, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('filterList'),
      children: filterList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
        lineNumber: 51,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '일하는 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WORKING_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '복지 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WELFARE_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '팀 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].TEAM_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '기업 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].COMPANY_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('filterContents'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '퇴근',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].LEAVE_WORK
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '휴식',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].REST
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '자기계발',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].SELF_IMPROVEMENT
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL2ZpbHRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkZpbHRlckxpc3QiLCJwcm9wcyIsInRpdGxlIiwibGlzdCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJzZWxlY3RGaWx0ZXIiLCJkZWxldGVGaWx0ZXIiLCJoYXNGaWx0ZXIiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJmaWx0ZXIiLCJmaWx0ZXJMaXN0IiwibWFwIiwidGV4dCIsImUiLCJ0eXBlIiwiRmlsdGVyIiwiZmlsdGVyRGF0YSIsIkFUVEVOREFOQ0UiLCJXT1JLSU5HX0NVTFRVUkUiLCJXRUxGQVJFX0NVTFRVUkUiLCJURUFNX0NVTFRVUkUiLCJDT01QQU5ZX0NVTFRVUkUiLCJMRUFWRV9XT1JLIiwiUkVTVCIsIlNFTEZfSU1QUk9WRU1FTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUF1QjtBQUFBOztBQUFBLE1BQy9CQyxLQUQrQixHQUNoQkQsS0FEZ0IsQ0FDL0JDLEtBRCtCO0FBQUEsTUFDeEJDLElBRHdCLEdBQ2hCRixLQURnQixDQUN4QkUsSUFEd0I7O0FBQUEsbUJBRVJDLHdFQUFTLEVBRkQ7QUFBQSxNQUUvQkMsbUJBRitCLGNBRS9CQSxtQkFGK0I7O0FBQUEsTUFHL0JDLFlBSCtCLEdBR1VELG1CQUhWLENBRy9CQyxZQUgrQjtBQUFBLE1BR2pCQyxZQUhpQixHQUdVRixtQkFIVixDQUdqQkUsWUFIaUI7QUFBQSxNQUdIQyxTQUhHLEdBR1VILG1CQUhWLENBR0hHLFNBSEc7O0FB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O0FBQUE7QUFBQSxlQUZKLGVBR0kscUVBQUMsVUFBRDtBQUFZLGFBQUssRUFBRSxNQUFuQjtBQUEyQixZQUFJLEVBQUVQLGlFQUFVLENBQUNRO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQWpCRDs7TUFBTVQsTTtBQW1CU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmlsdGVyU2xpZGVyLjg5MzAyMTYzZDM2YzM1OTg1OTZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vZmlsdGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgSWZpbHRlciwgZmlsdGVyRGF0YSB9IGZyb20gJ3NyYy9wYWdlcy9maWx0ZXJTbGlkZXInO1xyXG5pbXBvcnQgeyB1c2VTdG9yZXMgfSBmcm9tICdzcmMvdXRpbC9zdG9yZVByb3ZpZGVyJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRmlsdGVyTGlzdCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgbGlzdDogQXJyYXk8SWZpbHRlcj47XHJcbn1cclxuXHJcbmNvbnN0IEZpbHRlckxpc3QgPSAocHJvcHM6IEZpbHRlckxpc3QpID0+IHtcclxuICAgIGNvbnN0IHt0aXRsZSwgbGlzdH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHtmaWx0ZXJTbGlkZXJVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG4gICAgY29uc3Qge3NlbGVjdEZpbHRlciwgZGVsZXRlRmlsdGVyLCBoYXNGaWx0ZXJ9ID0gZmlsdGVyU2xpZGVyVUlTdG9yZTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IChjaGVja2VkLCBmaWx0ZXIpID0+IHtcclxuICAgICAgICBjaGVja2VkID8gc2VsZWN0RmlsdGVyKGZpbHRlcikgOiBkZWxldGVGaWx0ZXIoZmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJMaXN0ID0gbGlzdC5tYXAoKGZpbHRlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2ZpbHRlci50eXBlfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2N4KCdpdGVtJyl9PlxyXG5cdFx0XHQgICAgXHQ8c3Bhbj57ZmlsdGVyLnRleHR9PC9zcGFuPlxyXG5cdFx0XHQgICAgXHQ8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydjaGVja2JveCd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGhhc0ZpbHRlcihmaWx0ZXIpLCBmaWx0ZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtoYXNGaWx0ZXIoZmlsdGVyKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cdFx0ICAgIFx0PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZmlsdGVyJyl9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdmaWx0ZXJUaXRsZScpfT57dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjeCgnZmlsdGVyTGlzdCcpfT5cclxuICAgICAgICAgICAgICAgIHtmaWx0ZXJMaXN0fVxyXG5cdFx0ICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEZpbHRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdmaWx0ZXJXcmFwJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ZpbHRlckNvbnRlbnRzJyl9PlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfstpzqt7wnfSBsaXN0PXtmaWx0ZXJEYXRhLkFUVEVOREFOQ0V9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn7J287ZWY64qUIOusuO2ZlCd9IGxpc3Q9e2ZpbHRlckRhdGEuV09SS0lOR19DVUxUVVJFfS8+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+uzteyngCDrrLjtmZQnfSBsaXN0PXtmaWx0ZXJEYXRhLldFTEZBUkVfQ1VMVFVSRX0vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyftjIAg66y47ZmUJ30gbGlzdD17ZmlsdGVyRGF0YS5URUFNX0NVTFRVUkV9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn6riw7JeFIOusuO2ZlCd9IGxpc3Q9e2ZpbHRlckRhdGEuQ09NUEFOWV9DVUxUVVJFfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ZpbHRlckNvbnRlbnRzJyl9PlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfth7Tqt7wnfSBsaXN0PXtmaWx0ZXJEYXRhLkxFQVZFX1dPUkt9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn7Zy07IudJ30gbGlzdD17ZmlsdGVyRGF0YS5SRVNUfS8+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+yekOq4sOqzhOuwnCd9IGxpc3Q9e2ZpbHRlckRhdGEuU0VMRl9JTVBST1ZFTUVOVH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==