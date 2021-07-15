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
          lineNumber: 27,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: 'checkbox',
          onChange: function onChange(e) {
            return _onChange(e.target.checked, filter);
          },
          checked: true
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
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('filterList'),
      children: filterList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
        lineNumber: 52,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '일하는 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WORKING_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '복지 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].WELFARE_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '팀 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].TEAM_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '기업 문화',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].COMPANY_CULTURE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('filterContents'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '퇴근',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].LEAVE_WORK
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '휴식',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].REST
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FilterList, {
        title: '자기계발',
        list: src_pages_filterSlider__WEBPACK_IMPORTED_MODULE_3__["filterData"].SELF_IMPROVEMENT
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL2ZpbHRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkZpbHRlckxpc3QiLCJwcm9wcyIsInRpdGxlIiwibGlzdCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJzZWxlY3RGaWx0ZXIiLCJkZWxldGVGaWx0ZXIiLCJoYXNGaWx0ZXIiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJmaWx0ZXIiLCJmaWx0ZXJMaXN0IiwibWFwIiwidGV4dCIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwiRmlsdGVyIiwiZmlsdGVyRGF0YSIsIkFUVEVOREFOQ0UiLCJXT1JLSU5HX0NVTFRVUkUiLCJXRUxGQVJFX0NVTFRVUkUiLCJURUFNX0NVTFRVUkUiLCJDT01QQU5ZX0NVTFRVUkUiLCJMRUFWRV9XT1JLIiwiUkVTVCIsIlNFTEZfSU1QUk9WRU1FTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUF1QjtBQUFBOztBQUFBLE1BQy9CQyxLQUQrQixHQUNoQkQsS0FEZ0IsQ0FDL0JDLEtBRCtCO0FBQUEsTUFDeEJDLElBRHdCLEdBQ2hCRixLQURnQixDQUN4QkUsSUFEd0I7O0FBQUEsbUJBRVJDLHdFQUFTLEVBRkQ7QUFBQSxNQUUvQkMsbUJBRitCLGNBRS9CQSxtQkFGK0I7O0FBQUEsTUFHL0JDLFlBSCtCLEdBR1VELG1CQUhWLENBRy9CQyxZQUgrQjtBQUFBLE1BR2pCQyxZQUhpQixHQUdVRixtQkFIVixDQUdqQkUsWUFIaUI7QUFBQSxNQUdIQyxTQUhHLEdBR1VILG1CQUhWLENBR0hHLFNBSEc7O0FBS3RDLE1BQU1DLFNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNsQ0QsV0FBTyxHQUFHSixZQUFZLENBQUNLLE1BQUQsQ0FBZixHQUEwQkosWUFBWSxDQUFDSSxNQUFELENBQTdDO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxVQUFVLEdBQUdULElBQUksQ0FBQ1UsR0FBTCxDQUFTLFVBQUNGLE1BQUQsRUFBWTtBQUVwQyx3QkFDSTtBQUFBLDZCQUNJO0FBQU8saUJBQVMsRUFBRWYsRUFBRSxDQUFDLE1BQUQsQ0FBcEI7QUFBQSxnQ0FDUjtBQUFBLG9CQUFPZSxNQUFNLENBQUNHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUSxlQUVSO0FBQ2dCLGNBQUksRUFBRSxVQUR0QjtBQUVnQixrQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsbUJBQU9OLFNBQVEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNOLE9BQVYsRUFBbUJDLE1BQW5CLENBQWY7QUFBQSxXQUYxQjtBQUdnQixpQkFBTyxFQUFFO0FBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosT0FBU0EsTUFBTSxDQUFDTSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFZSCxHQWRrQixDQUFuQjtBQWdCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRXJCLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsNEJBQ0k7QUFBTSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxhQUFELENBQW5CO0FBQUEsZ0JBQXFDTTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFJLGVBQVMsRUFBRU4sRUFBRSxDQUFDLFlBQUQsQ0FBakI7QUFBQSxnQkFDS2dCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FqQ0Q7O0dBQU1aLFU7VUFFNEJJLGdFOzs7S0FGNUJKLFU7O0FBbUNOLElBQU1rQixNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLHNCQUNJO0FBQUssYUFBUyxFQUFFdEIsRUFBRSxDQUFDLFlBQUQsQ0FBbEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLGdCQUFELENBQWxCO0FBQUEsOEJBQ0kscUVBQUMsVUFBRDtBQUFZLGFBQUssRUFBRSxJQUFuQjtBQUF5QixZQUFJLEVBQUV1QixpRUFBVSxDQUFDQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSxxRUFBQyxVQUFEO0FBQVksYUFBSyxFQUFFLFFBQW5CO0FBQTZCLFlBQUksRUFBRUQsaUVBQVUsQ0FBQ0U7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0kscUVBQUMsVUFBRDtBQUFZLGFBQUssRUFBRSxPQUFuQjtBQUE0QixZQUFJLEVBQUVGLGlFQUFVLENBQUNHO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUlJLHFFQUFDLFVBQUQ7QUFBWSxhQUFLLEVBQUUsTUFBbkI7QUFBMkIsWUFBSSxFQUFFSCxpRUFBVSxDQUFDSTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSSxxRUFBQyxVQUFEO0FBQVksYUFBSyxFQUFFLE9BQW5CO0FBQTRCLFlBQUksRUFBRUosaUVBQVUsQ0FBQ0s7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBUUk7QUFBSyxlQUFTLEVBQUU1QixFQUFFLENBQUMsZ0JBQUQsQ0FBbEI7QUFBQSw4QkFDSSxxRUFBQyxVQUFEO0FBQVksYUFBSyxFQUFFLElBQW5CO0FBQXlCLFlBQUksRUFBRXVCLGlFQUFVLENBQUNNO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHFFQUFDLFVBQUQ7QUFBWSxhQUFLLEVBQUUsSUFBbkI7QUFBeUIsWUFBSSxFQUFFTixpRUFBVSxDQUFDTztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSSxxRUFBQyxVQUFEO0FBQVksYUFBSyxFQUFFLE1BQW5CO0FBQTJCLFlBQUksRUFBRVAsaUVBQVUsQ0FBQ1E7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0JILENBakJEOztNQUFNVCxNO0FBbUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWx0ZXJTbGlkZXIuY2RlOTA2MzFlMmNiYWMxMGRhMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9maWx0ZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBJZmlsdGVyLCBmaWx0ZXJEYXRhIH0gZnJvbSAnc3JjL3BhZ2VzL2ZpbHRlclNsaWRlcic7XHJcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJ3NyYy91dGlsL3N0b3JlUHJvdmlkZXInO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBGaWx0ZXJMaXN0IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBsaXN0OiBBcnJheTxJZmlsdGVyPjtcclxufVxyXG5cclxuY29uc3QgRmlsdGVyTGlzdCA9IChwcm9wczogRmlsdGVyTGlzdCkgPT4ge1xyXG4gICAgY29uc3Qge3RpdGxlLCBsaXN0fSA9IHByb3BzO1xyXG4gICAgY29uc3Qge2ZpbHRlclNsaWRlclVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcbiAgICBjb25zdCB7c2VsZWN0RmlsdGVyLCBkZWxldGVGaWx0ZXIsIGhhc0ZpbHRlcn0gPSBmaWx0ZXJTbGlkZXJVSVN0b3JlO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGNoZWNrZWQsIGZpbHRlcikgPT4ge1xyXG4gICAgICAgIGNoZWNrZWQgPyBzZWxlY3RGaWx0ZXIoZmlsdGVyKSA6IGRlbGV0ZUZpbHRlcihmaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbHRlckxpc3QgPSBsaXN0Lm1hcCgoZmlsdGVyKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2ZpbHRlci50eXBlfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2N4KCdpdGVtJyl9PlxyXG5cdFx0XHQgICAgXHQ8c3Bhbj57ZmlsdGVyLnRleHR9PC9zcGFuPlxyXG5cdFx0XHQgICAgXHQ8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydjaGVja2JveCd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQsIGZpbHRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHRcdCAgICBcdDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ZpbHRlcicpfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnZmlsdGVyVGl0bGUnKX0+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y3goJ2ZpbHRlckxpc3QnKX0+XHJcbiAgICAgICAgICAgICAgICB7ZmlsdGVyTGlzdH1cclxuXHRcdCAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZmlsdGVyV3JhcCcpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdmaWx0ZXJDb250ZW50cycpfT5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn7Lac6re8J30gbGlzdD17ZmlsdGVyRGF0YS5BVFRFTkRBTkNFfS8+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+ydvO2VmOuKlCDrrLjtmZQnfSBsaXN0PXtmaWx0ZXJEYXRhLldPUktJTkdfQ1VMVFVSRX0vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfrs7Xsp4Ag66y47ZmUJ30gbGlzdD17ZmlsdGVyRGF0YS5XRUxGQVJFX0NVTFRVUkV9Lz5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn7YyAIOusuO2ZlCd9IGxpc3Q9e2ZpbHRlckRhdGEuVEVBTV9DVUxUVVJFfS8+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+q4sOyXhSDrrLjtmZQnfSBsaXN0PXtmaWx0ZXJEYXRhLkNPTVBBTllfQ1VMVFVSRX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdmaWx0ZXJDb250ZW50cycpfT5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0IHRpdGxlPXsn7Ye06re8J30gbGlzdD17ZmlsdGVyRGF0YS5MRUFWRV9XT1JLfS8+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdCB0aXRsZT17J+2ctOyLnSd9IGxpc3Q9e2ZpbHRlckRhdGEuUkVTVH0vPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckxpc3QgdGl0bGU9eyfsnpDquLDqs4TrsJwnfSBsaXN0PXtmaWx0ZXJEYXRhLlNFTEZfSU1QUk9WRU1FTlR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=