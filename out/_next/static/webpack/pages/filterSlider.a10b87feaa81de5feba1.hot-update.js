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
      selectedItemList = filterSliderUIStore.selectedItemList;
  var el = [];
  selectedItemList.forEach(function (item, index) {
    console.log(item);
    el.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      ref: function ref(itemEl) {
        itemsEls && itemsEls.current && itemEl && (itemsEls.current[index] = itemEl);
      },
      className: cx('item'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: cx('deleteBtn'),
          onClick: function onClick() {},
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, _this));
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: cx('list'),
    style: {
      transform: "translate3d(".concat(scrollLeftOffset, "px, 0px, 0px)")
    },
    children: el
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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

  var els = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useStores2 = Object(_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"])(),
      filterSliderUIStore = _useStores2.filterSliderUIStore;

  var itemsEls = filterSliderUIStore.itemsEls,
      currentIndex = filterSliderUIStore.currentIndex,
      setCurrentIndex = filterSliderUIStore.setCurrentIndex;
  var marginRight = 12;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    els.current = [];
    filterSliderUIStore.setItemsEls(els);
  }, [els]);

  var handleNext = function handleNext() {
    if (currentIndex + 1 > itemsEls.current.length - 4) return;
    var itemEl = itemsEls.current[currentIndex];
    if (currentIndex < itemsEls.current.length - 1) setCurrentIndex(currentIndex + 1);
    setScrollLeftOffset(scrollLeftOffset - (itemEl.offsetWidth + marginRight));
  };

  var handlePrev = function handlePrev() {
    if (currentIndex - 1 < 0) return;
    var itemEl = itemsEls.current[currentIndex - 1];
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
          lineNumber: 80,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'prev'),
        onClick: handlePrev
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'next'),
        onClick: handleNext
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 3
  }, _this);
}, "ZLvrHQ4OFRnS3EPLMMdHNEhtdmE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpc3QiLCJvYnNlcnZlciIsInByb3BzIiwic2Nyb2xsTGVmdE9mZnNldCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJpdGVtc0VscyIsInNlbGVjdGVkSXRlbUxpc3QiLCJlbCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIml0ZW1FbCIsImN1cnJlbnQiLCJ0cmFuc2Zvcm0iLCJTbGlkZXIiLCJ1c2VTdGF0ZSIsInNldFNjcm9sbExlZnRPZmZzZXQiLCJlbHMiLCJ1c2VSZWYiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJtYXJnaW5SaWdodCIsInVzZUVmZmVjdCIsInNldEl0ZW1zRWxzIiwiaGFuZGxlTmV4dCIsImxlbmd0aCIsIm9mZnNldFdpZHRoIiwiaGFuZGxlUHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDBEQUFoQixDQUFYO0FBTUEsSUFBTUMsSUFBSSxHQUFHQywyREFBUSxTQUFDLFVBQUNDLEtBQUQsRUFBaUI7QUFBQTs7QUFBQSxNQUMvQkMsZ0JBRCtCLEdBQ1hELEtBRFcsQ0FDL0JDLGdCQUQrQjs7QUFBQSxtQkFFUkMscUVBQVMsRUFGRDtBQUFBLE1BRS9CQyxtQkFGK0IsY0FFL0JBLG1CQUYrQjs7QUFBQSxNQUcvQkMsUUFIK0IsR0FHREQsbUJBSEMsQ0FHL0JDLFFBSCtCO0FBQUEsTUFHckJDLGdCQUhxQixHQUdERixtQkFIQyxDQUdyQkUsZ0JBSHFCO0FBS3RDLE1BQUlDLEVBQUUsR0FBRyxFQUFU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RUFBcUJDLGVBQWUsQ0FBQ0QsWUFBWSxHQUFHLENBQWhCLENBQWY7QUFDckJILHVCQUFtQixDQUFDakIsZ0JBQWdCLElBQUlZLE1BQU0sQ0FBQ2UsV0FBUCxHQUFxQkwsV0FBekIsQ0FBakIsQ0FBbkI7QUFDQSxHQUxEOztBQU9BLHNCQUNDO0FBQUssYUFBUyxFQUFFN0IsRUFBRSxDQUFDLFlBQUQsQ0FBbEI7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLGdCQUFELENBQWxCO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFFQSxFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUFBLCtCQUNDLHFFQUFDLElBQUQ7QUFBTSwwQkFBZ0IsRUFBRU87QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUlDO0FBQ0MsWUFBSSxFQUFFLFFBRFA7QUFFQyxpQkFBUyxFQUFFUCxFQUFFLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FGZDtBQUdDLGVBQU8sRUFBRW1DO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpELGVBU0M7QUFDQyxZQUFJLEVBQUUsUUFEUDtBQUVDLGlCQUFTLEVBQUVuQyxFQUFFLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FGZDtBQUdDLGVBQU8sRUFBRWdDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW1CQSxDQTdDc0I7QUFBQSxVQUdReEIsNkRBSFI7QUFBQSxHQUF2QjtNQUFNYyxNO0FBK0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWx0ZXJTbGlkZXIuYTEwYjg3ZmVhYTgxZGU1ZmViYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlU3RvcmVzfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9zdG9yZVByb3ZpZGVyXCI7XHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIExpc3Qge1xyXG5cdHNjcm9sbExlZnRPZmZzZXQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTGlzdCA9IG9ic2VydmVyKChwcm9wczogTGlzdCkgPT4ge1xyXG5cdGNvbnN0IHtzY3JvbGxMZWZ0T2Zmc2V0fSA9IHByb3BzO1xyXG5cdGNvbnN0IHtmaWx0ZXJTbGlkZXJVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtpdGVtc0Vscywgc2VsZWN0ZWRJdGVtTGlzdH0gPSBmaWx0ZXJTbGlkZXJVSVN0b3JlO1xyXG5cclxuXHRsZXQgZWwgPSBbXTtcclxuXHRzZWxlY3RlZEl0ZW1MaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhpdGVtKTtcclxuXHRcdGVsLnB1c2goXHJcblx0XHRcdDxsaSByZWY9eyhpdGVtRWwpID0+IHtcclxuXHRcdFx0XHRcdGl0ZW1zRWxzICYmIGl0ZW1zRWxzLmN1cnJlbnQgJiYgaXRlbUVsICYmIChpdGVtc0Vscy5jdXJyZW50W2luZGV4XSA9IGl0ZW1FbCk7XHJcblx0XHRcdFx0fX0gXHJcblx0XHRcdFx0a2V5PXtpbmRleH0gXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnaXRlbScpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxhIFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdkZWxldGVCdG4nKX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge319XHJcblx0XHRcdFx0XHQ+WDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9saT5cclxuXHRcdCkgXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8dWwgXHJcblx0XHRcdGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0gXHJcblx0XHRcdHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtzY3JvbGxMZWZ0T2Zmc2V0fXB4LCAwcHgsIDBweClgfX1cclxuXHRcdD5cclxuXHRcdFx0e2VsfVxyXG5cdFx0PC91bD5cclxuXHQpXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IFNsaWRlciA9IG9ic2VydmVyKCgpID0+IHtcclxuXHRjb25zdCBbc2Nyb2xsTGVmdE9mZnNldCwgc2V0U2Nyb2xsTGVmdE9mZnNldF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cdGNvbnN0IGVscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KG51bGwpO1xyXG5cdGNvbnN0IHtmaWx0ZXJTbGlkZXJVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtpdGVtc0VscywgY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXh9ID0gZmlsdGVyU2xpZGVyVUlTdG9yZTtcclxuXHRjb25zdCBtYXJnaW5SaWdodCA9IDEyO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZWxzLmN1cnJlbnQgPSBbXTtcclxuXHRcdGZpbHRlclNsaWRlclVJU3RvcmUuc2V0SXRlbXNFbHMoZWxzKTtcclxuXHR9LCBbZWxzXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcblx0XHRpZihjdXJyZW50SW5kZXggKyAxID4gaXRlbXNFbHMuY3VycmVudC5sZW5ndGggLSA0KSByZXR1cm47XHJcblx0XHRjb25zdCBpdGVtRWwgPSBpdGVtc0Vscy5jdXJyZW50W2N1cnJlbnRJbmRleF07XHJcblx0XHRpZihjdXJyZW50SW5kZXggPCBpdGVtc0Vscy5jdXJyZW50Lmxlbmd0aCAtIDEpIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcclxuXHRcdHNldFNjcm9sbExlZnRPZmZzZXQoc2Nyb2xsTGVmdE9mZnNldCAtIChpdGVtRWwub2Zmc2V0V2lkdGggKyBtYXJnaW5SaWdodCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XHJcblx0XHRpZihjdXJyZW50SW5kZXggLSAxIDwgMCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgaXRlbUVsID0gaXRlbXNFbHMuY3VycmVudFtjdXJyZW50SW5kZXggLSAxXTtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCA+IDApIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggLSAxKTtcclxuXHRcdHNldFNjcm9sbExlZnRPZmZzZXQoc2Nyb2xsTGVmdE9mZnNldCArIChpdGVtRWwub2Zmc2V0V2lkdGggKyBtYXJnaW5SaWdodCkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlcldyYXAnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyQ29udGVudHMnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXInKX0+XHJcblx0XHRcdFx0XHQ8TGlzdCBzY3JvbGxMZWZ0T2Zmc2V0PXtzY3JvbGxMZWZ0T2Zmc2V0fS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT17J2J1dHRvbid9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdidXR0b24nLCAncHJldicpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUHJldn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdHR5cGU9eydidXR0b24nfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnYnV0dG9uJywgJ25leHQnKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9