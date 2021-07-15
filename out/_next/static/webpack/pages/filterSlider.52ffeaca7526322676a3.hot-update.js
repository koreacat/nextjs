webpackHotUpdate_N_E("pages/filterSlider",{

/***/ "./src/components/filterSlider/slider/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/filterSlider/slider/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.module.scss */ "./src/components/filterSlider/slider/slider.module.scss");
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_storeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/storeProvider */ "./src/util/storeProvider.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\filterSlider\\slider\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var List = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_c = _s(function (props) {
  _s();

  var scrollLeftOffset = props.scrollLeftOffset;

  var _useStores = Object(_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"])(),
      filterSliderUIStore = _useStores.filterSliderUIStore;

  var itemsEls = filterSliderUIStore.itemsEls,
      selectedFilterList = filterSliderUIStore.selectedFilterList,
      deleteFilter = filterSliderUIStore.deleteFilter;
  var filterList = [];
  selectedFilterList.forEach(function (filter) {
    filterList.push(filter);
  });
  var list = filterList.map(function (filter) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      ref: function ref(itemEl) {
        itemsEls && itemEl && itemsEls.push(itemEl);
      },
      className: cx('item'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: filter.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: cx('deleteBtn'),
          onClick: function onClick() {
            return deleteFilter(filter);
          },
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }, _this)
    }, filter.type, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: cx('list'),
    style: {
      transform: "translate3d(".concat(scrollLeftOffset, "px, 0px, 0px)")
    },
    children: list
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, _this);
}, "ewv5lygNqg+ylnPphswHPyNR5ss=", false, function () {
  return [_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"]];
}));
_c2 = List;
var Slider = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_c3 = _s2(function () {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      scrollLeftOffset = _useState[0],
      setScrollLeftOffset = _useState[1];

  var _useStores2 = Object(_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"])(),
      filterSliderUIStore = _useStores2.filterSliderUIStore;

  var itemsEls = filterSliderUIStore.itemsEls,
      currentIndex = filterSliderUIStore.currentIndex,
      setCurrentIndex = filterSliderUIStore.setCurrentIndex,
      selectedFilterList = filterSliderUIStore.selectedFilterList;
  var marginRight = 12;

  var handleNext = function handleNext() {
    if (currentIndex + 1 > itemsEls.length - 4) return;
    var itemEl = itemsEls[currentIndex];
    if (currentIndex < itemsEls.length - 1) setCurrentIndex(currentIndex + 1);
    setScrollLeftOffset(scrollLeftOffset - (itemEl.offsetWidth + marginRight));
  };

  var handlePrev = function handlePrev() {
    if (currentIndex - 1 < 0) return;
    var itemEl = itemsEls[currentIndex - 1];
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    setScrollLeftOffset(scrollLeftOffset + (itemEl.offsetWidth + marginRight));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('sliderWrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('sliderContents'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('slider'),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(List, {
          scrollLeftOffset: scrollLeftOffset
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'prev'),
        onClick: handlePrev
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'next'),
        onClick: handleNext
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 3
  }, _this);
}, "uRv8ENJbJGqdj1AdYGhouoG1FXU=", false, function () {
  return [_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"]];
}));
_c4 = Slider;
/* harmony default export */ __webpack_exports__["default"] = (Slider);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "List$observer");
$RefreshReg$(_c2, "List");
$RefreshReg$(_c3, "Slider$observer");
$RefreshReg$(_c4, "Slider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpc3QiLCJvYnNlcnZlciIsInByb3BzIiwic2Nyb2xsTGVmdE9mZnNldCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJpdGVtc0VscyIsInNlbGVjdGVkRmlsdGVyTGlzdCIsImRlbGV0ZUZpbHRlciIsImZpbHRlckxpc3QiLCJmb3JFYWNoIiwiZmlsdGVyIiwicHVzaCIsImxpc3QiLCJtYXAiLCJpdGVtRWwiLCJ0ZXh0IiwidHlwZSIsInRyYW5zZm9ybSIsIlNsaWRlciIsInVzZVN0YXRlIiwic2V0U2Nyb2xsTGVmdE9mZnNldCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsIm1hcmdpblJpZ2h0IiwiaGFuZGxlTmV4dCIsImxlbmd0aCIsIm9mZnNldFdpZHRoIiwiaGFuZGxlUHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDBEQUFoQixDQUFYO0FBTUEsSUFBTUMsSUFBSSxHQUFHQywyREFBUSxTQUFDLFVBQUNDLEtBQUQsRUFBaUI7QUFBQTs7QUFBQSxNQUMvQkMsZ0JBRCtCLEdBQ1hELEtBRFcsQ0FDL0JDLGdCQUQrQjs7QUFBQSxtQkFFUkMscUVBQVMsRUFGRDtBQUFBLE1BRS9CQyxtQkFGK0IsY0FFL0JBLG1CQUYrQjs7QUFBQSxNQUcvQkMsUUFIK0IsR0FHZUQsbUJBSGYsQ0FHL0JDLFFBSCtCO0FBQUEsTUFHckJDLGtCQUhxQixHQUdlRixtQkFIZixDQUdyQkUsa0JBSHFCO0FBQUEsTUFHREMsWUFIQyxHQUdlSCxtQkFIZixDQUdERyxZQUhDO0FBS3RDLE1B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LEdBQXFCSCxXQUF6QixDQUFqQixDQUFuQjtBQUNBLEdBTEQ7O0FBT0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUU1QixFQUFFLENBQUMsWUFBRCxDQUFsQjtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsZ0JBQUQsQ0FBbEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVBLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsK0JBQ0MscUVBQUMsSUFBRDtBQUFNLDBCQUFnQixFQUFFTztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBSUM7QUFDQyxZQUFJLEVBQUUsUUFEUDtBQUVDLGlCQUFTLEVBQUVQLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUZkO0FBR0MsZUFBTyxFQUFFZ0M7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkQsZUFTQztBQUNDLFlBQUksRUFBRSxRQURQO0FBRUMsaUJBQVMsRUFBRWhDLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUZkO0FBR0MsZUFBTyxFQUFFNkI7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbUJBLENBdkNzQjtBQUFBLFVBRVFyQiw2REFGUjtBQUFBLEdBQXZCO01BQU1lLE07QUF5Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbHRlclNsaWRlci41MmZmZWFjYTc1MjYzMjI2NzZhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTdG9yZXN9IGZyb20gXCIuLi8uLi8uLi91dGlsL3N0b3JlUHJvdmlkZXJcIjtcclxuaW1wb3J0IHtvYnNlcnZlcn0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTGlzdCB7XHJcblx0c2Nyb2xsTGVmdE9mZnNldDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBMaXN0ID0gb2JzZXJ2ZXIoKHByb3BzOiBMaXN0KSA9PiB7XHJcblx0Y29uc3Qge3Njcm9sbExlZnRPZmZzZXR9ID0gcHJvcHM7XHJcblx0Y29uc3Qge2ZpbHRlclNsaWRlclVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge2l0ZW1zRWxzLCBzZWxlY3RlZEZpbHRlckxpc3QsIGRlbGV0ZUZpbHRlcn0gPSBmaWx0ZXJTbGlkZXJVSVN0b3JlO1xyXG5cclxuXHRsZXQgZmlsdGVyTGlzdCA9IFtdO1xyXG5cdHNlbGVjdGVkRmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtmaWx0ZXJMaXN0LnB1c2goZmlsdGVyKX0pO1xyXG5cclxuXHRjb25zdCBsaXN0ID0gZmlsdGVyTGlzdC5tYXAoKGZpbHRlcikgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGxpIHJlZj17KGl0ZW1FbCkgPT4ge1xyXG5cdFx0XHRcdGl0ZW1zRWxzICYmIGl0ZW1FbCAmJiAoaXRlbXNFbHMucHVzaChpdGVtRWwpKTtcclxuXHRcdFx0fX0gXHJcblx0XHRcdGtleT17ZmlsdGVyLnR5cGV9IFxyXG5cdFx0XHRjbGFzc05hbWU9e2N4KCdpdGVtJyl9XHJcblx0XHRcdD5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8c3Bhbj57ZmlsdGVyLnRleHR9PC9zcGFuPlxyXG5cdFx0XHRcdDxhIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnZGVsZXRlQnRuJyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWx0ZXIoZmlsdGVyKX1cclxuXHRcdFx0XHQ+WDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8dWwgXHJcblx0XHRcdGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0gXHJcblx0XHRcdHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtzY3JvbGxMZWZ0T2Zmc2V0fXB4LCAwcHgsIDBweClgfX1cclxuXHRcdD5cclxuXHRcdFx0e2xpc3R9XHJcblx0XHQ8L3VsPlxyXG5cdClcclxufSk7XHJcblxyXG5cclxuY29uc3QgU2xpZGVyID0gb2JzZXJ2ZXIoKCkgPT4ge1xyXG5cdGNvbnN0IFtzY3JvbGxMZWZ0T2Zmc2V0LCBzZXRTY3JvbGxMZWZ0T2Zmc2V0XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblx0Y29uc3Qge2ZpbHRlclNsaWRlclVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge2l0ZW1zRWxzLCBjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleCwgc2VsZWN0ZWRGaWx0ZXJMaXN0fSA9IGZpbHRlclNsaWRlclVJU3RvcmU7XHJcblx0Y29uc3QgbWFyZ2luUmlnaHQgPSAxMjtcclxuXHJcblx0Y29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCArIDEgPiBpdGVtc0Vscy5sZW5ndGggLSA0KSByZXR1cm47XHJcblx0XHRjb25zdCBpdGVtRWwgPSBpdGVtc0Vsc1tjdXJyZW50SW5kZXhdO1xyXG5cdFx0aWYoY3VycmVudEluZGV4IDwgaXRlbXNFbHMubGVuZ3RoIC0gMSkgc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCArIDEpO1xyXG5cdFx0c2V0U2Nyb2xsTGVmdE9mZnNldChzY3JvbGxMZWZ0T2Zmc2V0IC0gKGl0ZW1FbC5vZmZzZXRXaWR0aCArIG1hcmdpblJpZ2h0KSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCAtIDEgPCAwKSByZXR1cm47XHJcblx0XHRjb25zdCBpdGVtRWwgPSBpdGVtc0Vsc1tjdXJyZW50SW5kZXggLSAxXTtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCA+IDApIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggLSAxKTtcclxuXHRcdHNldFNjcm9sbExlZnRPZmZzZXQoc2Nyb2xsTGVmdE9mZnNldCArIChpdGVtRWwub2Zmc2V0V2lkdGggKyBtYXJnaW5SaWdodCkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlcldyYXAnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyQ29udGVudHMnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXInKX0+XHJcblx0XHRcdFx0XHQ8TGlzdCBzY3JvbGxMZWZ0T2Zmc2V0PXtzY3JvbGxMZWZ0T2Zmc2V0fS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT17J2J1dHRvbid9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdidXR0b24nLCAncHJldicpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUHJldn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdHR5cGU9eydidXR0b24nfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnYnV0dG9uJywgJ25leHQnKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9