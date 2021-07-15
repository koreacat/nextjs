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
  var list = [];
  selectedItemList.forEach(function (seletedItem, index) {
    console.log(seletedItem);
    list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      ref: function ref(itemEl) {
        itemsEls && itemsEls.current && itemEl && (itemsEls.current[seletedItem.type] = itemEl);
      },
      className: cx('item'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: seletedItem.text
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
    }, seletedItem.type, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpc3QiLCJvYnNlcnZlciIsInByb3BzIiwic2Nyb2xsTGVmdE9mZnNldCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJpdGVtc0VscyIsInNlbGVjdGVkSXRlbUxpc3QiLCJsaXN0IiwiZm9yRWFjaCIsInNlbGV0ZWRJdGVtIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIml0ZW1FbCIsImN1cnJlbnQiLCJ0eXBlIiwidGV4dCIsInRyYW5zZm9ybSIsImVsIiwiU2xpZGVyIiwidXNlU3RhdGUiLCJzZXRTY3JvbGxMZWZ0T2Zmc2V0IiwiZWxzIiwidXNlUmVmIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwibWFyZ2luUmlnaHQiLCJ1c2VFZmZlY3QiLCJzZXRJdGVtc0VscyIsImhhbmRsZU5leHQiLCJsZW5ndGgiLCJvZmZzZXRXaWR0aCIsImhhbmRsZVByZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywwREFBaEIsQ0FBWDtBQU1BLElBQU1DLElBQUksR0FBR0MsMkRBQVEsU0FBQyxVQUFDQyxLQUFELEVBQWlCO0FBQUE7O0FBQUEsTUFDL0JDLGdCQUQrQixHQUNYRCxLQURXLENBQy9CQyxnQkFEK0I7O0FBQUEsbUJBRVJDLHFFQUFTLEVBRkQ7QUFBQSxNQUUvQkMsbUJBRitCLGNBRS9CQSxtQkFGK0I7O0FBQUEsTUFHL0JDLFFBSCtCLEdBR0RELG1CQUhDLENBRy9CQyxRQUgrQjtBQUFBLE1BR3JCQyxnQkFIcUIsR0FHREYsbUJBSEMsQ0FHckJFLGdCQUhx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LFFBQVEsQ0FBQ1UsT0FBVCxDQUFpQlUsWUFBWSxHQUFHLENBQWhDLENBQWY7QUFDQSxRQUFHQSxZQUFZLEdBQUcsQ0FBbEIsRUFBcUJDLGVBQWUsQ0FBQ0QsWUFBWSxHQUFHLENBQWhCLENBQWY7QUFDckJILHVCQUFtQixDQUFDcEIsZ0JBQWdCLElBQUlZLE1BQU0sQ0FBQ2tCLFdBQVAsR0FBcUJMLFdBQXpCLENBQWpCLENBQW5CO0FBQ0EsR0FMRDs7QUFPQSxzQkFDQztBQUFLLGFBQVMsRUFBRWhDLEVBQUUsQ0FBQyxZQUFELENBQWxCO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxnQkFBRCxDQUFsQjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUEsRUFBRSxDQUFDLFFBQUQsQ0FBbEI7QUFBQSwrQkFDQyxxRUFBQyxJQUFEO0FBQU0sMEJBQWdCLEVBQUVPO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFJQztBQUNDLFlBQUksRUFBRSxRQURQO0FBRUMsaUJBQVMsRUFBRVAsRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLENBRmQ7QUFHQyxlQUFPLEVBQUVzQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRCxlQVNDO0FBQ0MsWUFBSSxFQUFFLFFBRFA7QUFFQyxpQkFBUyxFQUFFdEMsRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLENBRmQ7QUFHQyxlQUFPLEVBQUVtQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFtQkEsQ0E3Q3NCO0FBQUEsVUFHUTNCLDZEQUhSO0FBQUEsR0FBdkI7TUFBTWlCLE07QUErQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbHRlclNsaWRlci4wNTAyZDA1MmUzZGU4NWUzZWZiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTdG9yZXN9IGZyb20gXCIuLi8uLi8uLi91dGlsL3N0b3JlUHJvdmlkZXJcIjtcclxuaW1wb3J0IHtvYnNlcnZlcn0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTGlzdCB7XHJcblx0c2Nyb2xsTGVmdE9mZnNldDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBMaXN0ID0gb2JzZXJ2ZXIoKHByb3BzOiBMaXN0KSA9PiB7XHJcblx0Y29uc3Qge3Njcm9sbExlZnRPZmZzZXR9ID0gcHJvcHM7XHJcblx0Y29uc3Qge2ZpbHRlclNsaWRlclVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge2l0ZW1zRWxzLCBzZWxlY3RlZEl0ZW1MaXN0fSA9IGZpbHRlclNsaWRlclVJU3RvcmU7XHJcblxyXG5cdGxldCBsaXN0ID0gW107XHJcblx0c2VsZWN0ZWRJdGVtTGlzdC5mb3JFYWNoKChzZWxldGVkSXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHNlbGV0ZWRJdGVtKTtcclxuXHRcdGxpc3QucHVzaChcclxuXHRcdFx0PGxpIHJlZj17KGl0ZW1FbCkgPT4ge1xyXG5cdFx0XHRcdFx0aXRlbXNFbHMgJiYgaXRlbXNFbHMuY3VycmVudCAmJiBpdGVtRWwgJiYgKGl0ZW1zRWxzLmN1cnJlbnRbc2VsZXRlZEl0ZW0udHlwZV0gPSBpdGVtRWwpO1xyXG5cdFx0XHRcdH19IFxyXG5cdFx0XHRcdGtleT17c2VsZXRlZEl0ZW0udHlwZX0gXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnaXRlbScpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxzcGFuPntzZWxldGVkSXRlbS50ZXh0fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxhIFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdkZWxldGVCdG4nKX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge319XHJcblx0XHRcdFx0XHQ+WDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9saT5cclxuXHRcdCkgXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8dWwgXHJcblx0XHRcdGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0gXHJcblx0XHRcdHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtzY3JvbGxMZWZ0T2Zmc2V0fXB4LCAwcHgsIDBweClgfX1cclxuXHRcdD5cclxuXHRcdFx0e2VsfVxyXG5cdFx0PC91bD5cclxuXHQpXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IFNsaWRlciA9IG9ic2VydmVyKCgpID0+IHtcclxuXHRjb25zdCBbc2Nyb2xsTGVmdE9mZnNldCwgc2V0U2Nyb2xsTGVmdE9mZnNldF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cdGNvbnN0IGVscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KG51bGwpO1xyXG5cdGNvbnN0IHtmaWx0ZXJTbGlkZXJVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtpdGVtc0VscywgY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXh9ID0gZmlsdGVyU2xpZGVyVUlTdG9yZTtcclxuXHRjb25zdCBtYXJnaW5SaWdodCA9IDEyO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZWxzLmN1cnJlbnQgPSBbXTtcclxuXHRcdGZpbHRlclNsaWRlclVJU3RvcmUuc2V0SXRlbXNFbHMoZWxzKTtcclxuXHR9LCBbZWxzXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcblx0XHRpZihjdXJyZW50SW5kZXggKyAxID4gaXRlbXNFbHMuY3VycmVudC5sZW5ndGggLSA0KSByZXR1cm47XHJcblx0XHRjb25zdCBpdGVtRWwgPSBpdGVtc0Vscy5jdXJyZW50W2N1cnJlbnRJbmRleF07XHJcblx0XHRpZihjdXJyZW50SW5kZXggPCBpdGVtc0Vscy5jdXJyZW50Lmxlbmd0aCAtIDEpIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcclxuXHRcdHNldFNjcm9sbExlZnRPZmZzZXQoc2Nyb2xsTGVmdE9mZnNldCAtIChpdGVtRWwub2Zmc2V0V2lkdGggKyBtYXJnaW5SaWdodCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XHJcblx0XHRpZihjdXJyZW50SW5kZXggLSAxIDwgMCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgaXRlbUVsID0gaXRlbXNFbHMuY3VycmVudFtjdXJyZW50SW5kZXggLSAxXTtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCA+IDApIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggLSAxKTtcclxuXHRcdHNldFNjcm9sbExlZnRPZmZzZXQoc2Nyb2xsTGVmdE9mZnNldCArIChpdGVtRWwub2Zmc2V0V2lkdGggKyBtYXJnaW5SaWdodCkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlcldyYXAnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyQ29udGVudHMnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXInKX0+XHJcblx0XHRcdFx0XHQ8TGlzdCBzY3JvbGxMZWZ0T2Zmc2V0PXtzY3JvbGxMZWZ0T2Zmc2V0fS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT17J2J1dHRvbid9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdidXR0b24nLCAncHJldicpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUHJldn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdHR5cGU9eydidXR0b24nfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnYnV0dG9uJywgJ25leHQnKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9