webpackHotUpdate_N_E("pages/test",{

/***/ "./src/components/test/Test01.tsx":
/*!****************************************!*\
  !*** ./src/components/test/Test01.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/slider */ "./src/components/common/slider/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\test\\Test01.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var TAB_LIST = ['출퇴근', '워라벨', '연차', '동아리 지원', '양육 지원', '건강 지원', '자기계발 지원', '휴가 지원'];
var LIST_MAP = {
  '출퇴근': ['출', '퇴', '근'],
  '워라벨': ['워', '라', '벨'],
  '연차': ['연', '차'],
  '동아리 지원': ['동', '아', '리'],
  '양육 지원': ['양', '육'],
  '건강 지원': ['건', '강'],
  '자기계발 지원': ['자', '기', '계', '발'],
  '휴가 지원': ['휴', '가']
};
var marksDifficult = {
  1000: '1,000 만원',
  10000: '1억원 이상'
};

var Test01 = function Test01() {
  _s();

  var _LIST_MAP$selectedTab;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1000),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    min: 1000,
    max: 10000,
    step: 1000
  }),
      options = _useState2[0],
      setOptions = _useState2[1];

  var min = options.min,
      max = options.max,
      step = options.step;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      selectedTab = _useState3[0],
      setSelectedTab = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      selectedListItems = _useState4[0],
      setSelectedListItems = _useState4[1];

  var tabList = TAB_LIST.map(function (tab) {
    var _LIST_MAP$tab;

    var isSelected = (_LIST_MAP$tab = LIST_MAP[tab]) === null || _LIST_MAP$tab === void 0 ? void 0 : _LIST_MAP$tab.find(function (tabListItem) {
      return -1 !== selectedListItems.indexOf(tabListItem);
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      style: {
        padding: '5px 10px',
        marginRight: '5px',
        border: '1px solid #ccc',
        borderRadius: '20px',
        color: "".concat(isSelected ? '#fff' : '#000'),
        background: "".concat(isSelected ? '#6CDD83' : '#fff')
      },
      onClick: function onClick() {
        setSelectedTab(tab);
      },
      children: tab
    }, tab, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this);
  });
  var list = (_LIST_MAP$selectedTab = LIST_MAP[selectedTab]) === null || _LIST_MAP$selectedTab === void 0 ? void 0 : _LIST_MAP$selectedTab.map(function (listItem) {
    var isSelected = selectedListItems.find(function (selectedListItem) {
      return selectedListItem === listItem;
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      style: {
        padding: '5px 10px',
        marginRight: '5px',
        border: '1px solid #ccc',
        borderRadius: '20px',
        color: "".concat(isSelected ? '#fff' : '#000'),
        background: "".concat(isSelected ? '#6CDD83' : '#fff')
      },
      onClick: function onClick() {
        if (isSelected) setSelectedListItems(function (prev) {
          return prev.filter(function (selectedListItem) {
            return selectedListItem !== listItem;
          });
        });else setSelectedListItems(function (prev) {
          return [].concat(Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [listItem]);
        });
      },
      children: listItem
    }, listItem, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this);
  });
  var listList = selectedListItems.map(function (selectedListItem) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      style: {
        padding: '5px 10px',
        marginRight: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        color: '#fff',
        background: '#6CDD83'
      },
      onClick: function onClick() {
        setSelectedListItems(function (prev) {
          return prev.filter(function (item) {
            return selectedListItem !== item;
          });
        });
      },
      children: selectedListItem
    }, selectedListItem, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      padding: '100px'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: '262px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
        disabled: false,
        min: min,
        max: max,
        step: step,
        value: value,
        marks: marksDifficult,
        toolTip: function toolTip(value) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: value
          }, void 0, false);
        },
        onChange: function onChange(value) {
          return setValue(value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: '24px'
      },
      children: tabList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: '24px'
      },
      children: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: '24px'
      },
      children: [value !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        style: {
          padding: '5px 10px',
          marginRight: '5px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          color: '#fff',
          background: '#6CDD83'
        },
        onClick: function onClick() {
          return setValue(0);
        },
        children: [value, "\uB9CC\uC6D0"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, _this), listList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, _this);
};

_s(Test01, "Rn1lMA5gUscJQ/FinS155D++3cY=");

_c = Test01;
/* harmony default export */ __webpack_exports__["default"] = (Test01);

var _c;

$RefreshReg$(_c, "Test01");

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

/***/ }),

/***/ "./src/pages/test.tsx":
/*!****************************!*\
  !*** ./src/pages/test.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_test_Test01__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/test/Test01 */ "./src/components/test/Test01.tsx");
/* harmony import */ var _components_test_Test02__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/test/Test02 */ "./src/components/test/Test02.tsx");
/* harmony import */ var _components_test_Test03__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/test/Test03 */ "./src/components/test/Test03.tsx");
/* harmony import */ var _components_test_Test04__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/test/Test04 */ "./src/components/test/Test04.tsx");



var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\pages\\test.tsx",
    _this = undefined;






var TestPage = function TestPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_test_Test01__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_test_Test02__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_test_Test03__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_test_Test04__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = TestPage;
/* harmony default export */ __webpack_exports__["default"] = (TestPage);

var _c;

$RefreshReg$(_c, "TestPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9UZXN0MDEudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdGVzdC50c3giXSwibmFtZXMiOlsiVEFCX0xJU1QiLCJMSVNUX01BUCIsIm1hcmtzRGlmZmljdWx0IiwiVGVzdDAxIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibWluIiwibWF4Iiwic3RlcCIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsInNlbGVjdGVkTGlzdEl0ZW1zIiwic2V0U2VsZWN0ZWRMaXN0SXRlbXMiLCJ0YWJMaXN0IiwibWFwIiwidGFiIiwiaXNTZWxlY3RlZCIsImZpbmQiLCJ0YWJMaXN0SXRlbSIsImluZGV4T2YiLCJwYWRkaW5nIiwibWFyZ2luUmlnaHQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImJhY2tncm91bmQiLCJsaXN0IiwibGlzdEl0ZW0iLCJzZWxlY3RlZExpc3RJdGVtIiwicHJldiIsImZpbHRlciIsImxpc3RMaXN0IiwiaXRlbSIsIndpZHRoIiwibWFyZ2luVG9wIiwiVGVzdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBa0IsR0FBRyxDQUN6QixLQUR5QixFQUV6QixLQUZ5QixFQUd6QixJQUh5QixFQUl6QixRQUp5QixFQUt6QixPQUx5QixFQU16QixPQU55QixFQU96QixTQVB5QixFQVF6QixPQVJ5QixDQUEzQjtBQVdBLElBQU1DLFFBQWtDLEdBQUc7QUFDekMsU0FBTyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQURrQztBQUV6QyxTQUFPLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBRmtDO0FBR3pDLFFBQU0sQ0FBQyxHQUFELEVBQU0sR0FBTixDQUhtQztBQUl6QyxZQUFVLENBQUMsR0FBRCxF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QTtBQUFBLFdBREY7QUErQ0QsQ0FqSUQ7O0dBQU0vQixNOztLQUFBQSxNO0FBbUlTQSxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTW1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQVFELENBVEQ7O0tBQU1BLFE7QUFXU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC5kMjAzMGMzZDU5Nzg0ZjUxYWM1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwiQGNvbXBvbmVudHMvc2xpZGVyXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVEFCX0xJU1Q6IHN0cmluZ1tdID0gW1xyXG4gICfstpzth7Tqt7wnLFxyXG4gICfsm4zrnbzrsqgnLFxyXG4gICfsl7DssKgnLFxyXG4gICfrj5nslYTrpqwg7KeA7JuQJyxcclxuICAn7JaR7JyhIOyngOybkCcsXHJcbiAgJ+qxtOqwlSDsp4Dsm5AnLFxyXG4gICfsnpDquLDqs4TrsJwg7KeA7JuQJyxcclxuICAn7Zy06rCAIOyngOybkCdcclxuXTtcclxuXHJcbmNvbnN0IExJU1RfTUFQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7XHJcbiAgJ+y2nO2HtOq3vCc6IFsn7LacJywgJ+2HtCcsICfqt7wnXSxcclxuICAn7JuM652867KoJzogWyfsm4wnLCAn6528JywgJ+uyqCddLFxyXG4gICfsl7DssKgnOiBbJ+yXsCcsICfssKgnXSxcclxuICAn64+Z7JWE66asIOyngOybkCc6IFsn64+ZJywgJ+yVhCcsICfrpqwnXSxcclxuICAn7JaR7JyhIOyngOybkCc6IFsn7JaRJywgJ+ycoSddLFxyXG4gICfqsbTqsJUg7KeA7JuQJzogWyfqsbQnLCAn6rCVJ10sXHJcbiAgJ+yekOq4sOqzhOuwnCDsp4Dsm5AnOiBbJ+yekCcsICfquLAnLCAn6rOEJywgJ+uwnCddLFxyXG4gICftnLTqsIAg7KeA7JuQJzogWyftnLQnLCAn6rCAJ10sXHJcbn07XHJcblxyXG5jb25zdCBtYXJrc0RpZmZpY3VsdCA9IHtcclxuICAxMDAwOiAnMSwwMDAg66eM7JuQJyxcclxuICAxMDAwMDogJzHslrXsm5Ag7J207IOBJ1xyXG59O1xyXG5cclxuY29uc3QgVGVzdDAxID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMTAwMCk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoe1xyXG4gICAgbWluOiAxMDAwLFxyXG4gICAgbWF4OiAxMDAwMCxcclxuICAgIHN0ZXA6IDEwMDBcclxuICB9KTtcclxuICBjb25zdCB7bWluLCBtYXgsIHN0ZXB9ID0gb3B0aW9ucztcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGlzdEl0ZW1zLCBzZXRTZWxlY3RlZExpc3RJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHRhYkxpc3QgPSBUQUJfTElTVC5tYXAoKHRhYikgPT4ge1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IExJU1RfTUFQW3RhYl0/LmZpbmQodGFiTGlzdEl0ZW0gPT4gLTEgIT09IHNlbGVjdGVkTGlzdEl0ZW1zLmluZGV4T2YodGFiTGlzdEl0ZW0pKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAga2V5PXt0YWJ9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCcsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzVweCcsXHJcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgIGNvbG9yOiBgJHtpc1NlbGVjdGVkID8gJyNmZmYnIDogJyMwMDAnfWAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgJHtpc1NlbGVjdGVkID8gJyM2Q0REODMnIDogJyNmZmYnfWBcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldFNlbGVjdGVkVGFiKHRhYilcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RhYn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxpc3QgPSBMSVNUX01BUFtzZWxlY3RlZFRhYl0/Lm1hcCgobGlzdEl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZExpc3RJdGVtcy5maW5kKHNlbGVjdGVkTGlzdEl0ZW0gPT4gc2VsZWN0ZWRMaXN0SXRlbSA9PT0gbGlzdEl0ZW0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBrZXk9e2xpc3RJdGVtfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxyXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICBjb2xvcjogYCR7aXNTZWxlY3RlZCA/ICcjZmZmJyA6ICcjMDAwJ31gLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogYCR7aXNTZWxlY3RlZCA/ICcjNkNERDgzJyA6ICcjZmZmJ31gXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXNTZWxlY3RlZCkgc2V0U2VsZWN0ZWRMaXN0SXRlbXMocHJldiA9PiBwcmV2LmZpbHRlcihzZWxlY3RlZExpc3RJdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkTGlzdEl0ZW0gIT09IGxpc3RJdGVtXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICBlbHNlIHNldFNlbGVjdGVkTGlzdEl0ZW1zKHByZXYgPT4gWy4uLnByZXYsIGxpc3RJdGVtXSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtsaXN0SXRlbX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxpc3RMaXN0ID0gc2VsZWN0ZWRMaXN0SXRlbXMubWFwKChzZWxlY3RlZExpc3RJdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAga2V5PXtzZWxlY3RlZExpc3RJdGVtfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxyXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzZDREQ4MydcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldFNlbGVjdGVkTGlzdEl0ZW1zKHByZXYgPT4gcHJldi5maWx0ZXIoaXRlbSA9PiBzZWxlY3RlZExpc3RJdGVtICE9PSBpdGVtKSlcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3NlbGVjdGVkTGlzdEl0ZW19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6ICcxMDBweCd9fT5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzI2MnB4J319PlxyXG4gICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgIG1pbj17bWlufVxyXG4gICAgICAgICAgbWF4PXttYXh9XHJcbiAgICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgbWFya3M9e21hcmtzRGlmZmljdWx0fVxyXG4gICAgICAgICAgdG9vbFRpcD17dmFsdWUgPT4gPD57dmFsdWV9PC8+fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldFZhbHVlKHZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyNHB4J319PlxyXG4gICAgICAgIHt0YWJMaXN0fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyNHB4J319PlxyXG4gICAgICAgIHtsaXN0fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMjRweCd9fT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZSAhPT0gMCAmJlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzZDREQ4MydcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZhbHVlKDApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsdWV966eM7JuQXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHtsaXN0TGlzdH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0MDE7XHJcbiIsImltcG9ydCBUZXN0MDEgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9UZXN0MDFcIjtcclxuaW1wb3J0IFRlc3QwMiBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXN0L1Rlc3QwMlwiO1xyXG5pbXBvcnQgVGVzdDAzIGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvVGVzdDAzXCI7XHJcbmltcG9ydCBUZXN0MDQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9UZXN0MDRcIjtcclxuXHJcbmNvbnN0IFRlc3RQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGVzdDAxLz5cclxuICAgICAgPFRlc3QwMi8+XHJcbiAgICAgIDxUZXN0MDMvPlxyXG4gICAgICA8VGVzdDA0Lz5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9