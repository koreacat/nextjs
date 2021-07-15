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
        itemsEls && itemEl && (itemsEls[filter.type] = itemEl);
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
    console.log(itemsEls, selectedFilterList);
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
          lineNumber: 77,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'prev'),
        onClick: handlePrev
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'next'),
        onClick: handleNext
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpc3QiLCJvYnNlcnZlciIsInByb3BzIiwic2Nyb2xsTGVmdE9mZnNldCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJpdGVtc0VscyIsInNlbGVjdGVkRmlsdGVyTGlzdCIsImRlbGV0ZUZpbHRlciIsImZpbHRlckxpc3QiLCJmb3JFYWNoIiwiZmlsdGVyIiwicHVzaCIsImxpc3QiLCJtYXAiLCJpdGVtRWwiLCJ0eXBlIiwidGV4dCIsInRyYW5zZm9ybSIsIlNsaWRlciIsInVzZVN0YXRlIiwic2V0U2Nyb2xsTGVmdE9mZnNldCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsIm1hcmdpblJpZ2h0IiwiaGFuZGxlTmV4dCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJvZmZzZXRXaWR0aCIsImhhbmRsZVByZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywwREFBaEIsQ0FBWDtBQU1BLElBQU1DLElBQUksR0FBR0MsMkRBQVEsU0FBQyxVQUFDQyxLQUFELEVBQWlCO0FBQUE7O0FBQUEsTUFDL0JDLGdCQUQrQixHQUNYRCxLQURXLENBQy9CQyxnQkFEK0I7O0FBQUEsbUJBRVJDLHFFQUFTLEVBRkQ7QUFBQSxNQUUvQkMsbUJBRitCLGNBRS9CQSxtQkFGK0I7O0FBQUEsTUFHL0JDLFFBSCtCLEdBR2VELG1CQUhmLENBRy9CQyxRQUgrQjtBQUFBLE1BR3JCQyxrQkFIcUIsR0FHZUYsbUJBSGYsQ0FHckJFLGtCQUhxQjtBQUFBLE1BR0RDLFlBSEMsR0FHZUgsbUJBSGYsQ0FH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Q0FBQ0QsWUFBWSxHQUFHLENBQWhCLENBQWY7QUFDckJELHVCQUFtQixDQUFDbEIsZ0JBQWdCLElBQUlZLE1BQU0sQ0FBQ2MsV0FBUCxHQUFxQkwsV0FBekIsQ0FBakIsQ0FBbkI7QUFDQSxHQUxEOztBQU9BLHNCQUNDO0FBQUssYUFBUyxFQUFFNUIsRUFBRSxDQUFDLFlBQUQsQ0FBbEI7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLGdCQUFELENBQWxCO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFFQSxFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUFBLCtCQUNDLHFFQUFDLElBQUQ7QUFBTSwwQkFBZ0IsRUFBRU87QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUlDO0FBQ0MsWUFBSSxFQUFFLFFBRFA7QUFFQyxpQkFBUyxFQUFFUCxFQUFFLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FGZDtBQUdDLGVBQU8sRUFBRWtDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpELGVBU0M7QUFDQyxZQUFJLEVBQUUsUUFEUDtBQUVDLGlCQUFTLEVBQUVsQyxFQUFFLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FGZDtBQUdDLGVBQU8sRUFBRTZCO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW1CQSxDQXpDc0I7QUFBQSxVQUVRckIsNkRBRlI7QUFBQSxHQUF2QjtNQUFNZSxNO0FBMkNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWx0ZXJTbGlkZXIuZTRlMDE4MDMyYzdiMTg4NmRhOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlU3RvcmVzfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9zdG9yZVByb3ZpZGVyXCI7XHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIExpc3Qge1xyXG5cdHNjcm9sbExlZnRPZmZzZXQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTGlzdCA9IG9ic2VydmVyKChwcm9wczogTGlzdCkgPT4ge1xyXG5cdGNvbnN0IHtzY3JvbGxMZWZ0T2Zmc2V0fSA9IHByb3BzO1xyXG5cdGNvbnN0IHtmaWx0ZXJTbGlkZXJVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtpdGVtc0Vscywgc2VsZWN0ZWRGaWx0ZXJMaXN0LCBkZWxldGVGaWx0ZXJ9ID0gZmlsdGVyU2xpZGVyVUlTdG9yZTtcclxuXHJcblx0bGV0IGZpbHRlckxpc3QgPSBbXTtcclxuXHRzZWxlY3RlZEZpbHRlckxpc3QuZm9yRWFjaCgoZmlsdGVyKSA9PiB7ZmlsdGVyTGlzdC5wdXNoKGZpbHRlcil9KTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGZpbHRlckxpc3QubWFwKChmaWx0ZXIpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaSByZWY9eyhpdGVtRWwpID0+IHtcclxuXHRcdFx0XHRpdGVtc0VscyAmJiBpdGVtRWwgJiYgKGl0ZW1zRWxzW2ZpbHRlci50eXBlXSA9IGl0ZW1FbCk7XHJcblx0XHRcdH19IFxyXG5cdFx0XHRrZXk9e2ZpbHRlci50eXBlfSBcclxuXHRcdFx0Y2xhc3NOYW1lPXtjeCgnaXRlbScpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PHNwYW4+e2ZpbHRlci50ZXh0fTwvc3Bhbj5cclxuXHRcdFx0XHQ8YSBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2RlbGV0ZUJ0bicpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlRmlsdGVyKGZpbHRlcil9XHJcblx0XHRcdFx0Plg8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9saT5cclxuXHRcdClcclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHVsIFxyXG5cdFx0XHRjbGFzc05hbWU9e2N4KCdsaXN0Jyl9IFxyXG5cdFx0XHRzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7c2Nyb2xsTGVmdE9mZnNldH1weCwgMHB4LCAwcHgpYH19XHJcblx0XHQ+XHJcblx0XHRcdHtsaXN0fVxyXG5cdFx0PC91bD5cclxuXHQpXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IFNsaWRlciA9IG9ic2VydmVyKCgpID0+IHtcclxuXHRjb25zdCBbc2Nyb2xsTGVmdE9mZnNldCwgc2V0U2Nyb2xsTGVmdE9mZnNldF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cdGNvbnN0IHtmaWx0ZXJTbGlkZXJVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtpdGVtc0VscywgY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXgsIHNlbGVjdGVkRmlsdGVyTGlzdH0gPSBmaWx0ZXJTbGlkZXJVSVN0b3JlO1xyXG5cdGNvbnN0IG1hcmdpblJpZ2h0ID0gMTI7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhpdGVtc0Vscywgc2VsZWN0ZWRGaWx0ZXJMaXN0KTtcclxuXHJcblx0XHRpZihjdXJyZW50SW5kZXggKyAxID4gaXRlbXNFbHMubGVuZ3RoIC0gNCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgaXRlbUVsID0gaXRlbXNFbHNbY3VycmVudEluZGV4XTtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCA8IGl0ZW1zRWxzLmxlbmd0aCAtIDEpIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcclxuXHRcdHNldFNjcm9sbExlZnRPZmZzZXQoc2Nyb2xsTGVmdE9mZnNldCAtIChpdGVtRWwub2Zmc2V0V2lkdGggKyBtYXJnaW5SaWdodCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XHJcblx0XHRpZihjdXJyZW50SW5kZXggLSAxIDwgMCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgaXRlbUVsID0gaXRlbXNFbHNbY3VycmVudEluZGV4IC0gMV07XHJcblx0XHRpZihjdXJyZW50SW5kZXggPiAwKSBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4IC0gMSk7XHJcblx0XHRzZXRTY3JvbGxMZWZ0T2Zmc2V0KHNjcm9sbExlZnRPZmZzZXQgKyAoaXRlbUVsLm9mZnNldFdpZHRoICsgbWFyZ2luUmlnaHQpKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXJXcmFwJyl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlckNvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyJyl9PlxyXG5cdFx0XHRcdFx0PExpc3Qgc2Nyb2xsTGVmdE9mZnNldD17c2Nyb2xsTGVmdE9mZnNldH0vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdHR5cGU9eydidXR0b24nfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnYnV0dG9uJywgJ3ByZXYnKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVByZXZ9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPXsnYnV0dG9uJ31cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2J1dHRvbicsICduZXh0Jyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==