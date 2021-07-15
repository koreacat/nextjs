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
  selectedItemList.forEach(function (item, index) {
    console.log(item);
    list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
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
    children: list
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpc3QiLCJvYnNlcnZlciIsInByb3BzIiwic2Nyb2xsTGVmdE9mZnNldCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJpdGVtc0VscyIsInNlbGVjdGVkSXRlbUxpc3QiLCJsaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiaXRlbUVsIiwiY3VycmVudCIsInRyYW5zZm9ybSIsIlNsaWRlciIsInVzZVN0YXRlIiwic2V0U2Nyb2xsTGVmdE9mZnNldCIsImVscyIsInVzZVJlZiIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsIm1hcmdpblJpZ2h0IiwidXNlRWZmZWN0Iiwic2V0SXRlbXNFbHMiLCJoYW5kbGVOZXh0IiwibGVuZ3RoIiwib2Zmc2V0V2lkdGgiLCJoYW5kbGVQcmV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7QUFNQSxJQUFNQyxJQUFJLEdBQUdDLDJEQUFRLFNBQUMsVUFBQ0MsS0FBRCxFQUFpQjtBQUFBOztBQUFBLE1BQy9CQyxnQkFEK0IsR0FDWEQsS0FEVyxDQUMvQkMsZ0JBRCtCOztBQUFBLG1CQUVSQyxxRUFBUyxFQUZEO0FBQUEsTUFFL0JDLG1CQUYrQixjQUUvQkEsbUJBRitCOztBQUFBLE1BRy9CQyxRQUgrQixHQUdERCxtQkFIQyxDQUcvQkMsUUFIK0I7QUFBQSxNQUdyQkMsZ0JBSHFCLEdBR0RGLG1CQUhDLENBR3JCRSxnQkFIcUI7QUFLdEMsTUFBSUMsSUFBSSxHQUFHLEVB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QixFQUFxQkMsZUFBZSxDQUFDRCxZQUFZLEdBQUcsQ0FBaEIsQ0FBZjtBQUNyQkgsdUJBQW1CLENBQUNqQixnQkFBZ0IsSUFBSVksTUFBTSxDQUFDZSxXQUFQLEdBQXFCTCxXQUF6QixDQUFqQixDQUFuQjtBQUNBLEdBTEQ7O0FBT0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUU3QixFQUFFLENBQUMsWUFBRCxDQUFsQjtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsZ0JBQUQsQ0FBbEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVBLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsK0JBQ0MscUVBQUMsSUFBRDtBQUFNLDBCQUFnQixFQUFFTztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBSUM7QUFDQyxZQUFJLEVBQUUsUUFEUDtBQUVDLGlCQUFTLEVBQUVQLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUZkO0FBR0MsZUFBTyxFQUFFbUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkQsZUFTQztBQUNDLFlBQUksRUFBRSxRQURQO0FBRUMsaUJBQVMsRUFBRW5DLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUZkO0FBR0MsZUFBTyxFQUFFZ0M7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbUJBLENBN0NzQjtBQUFBLFVBR1F4Qiw2REFIUjtBQUFBLEdBQXZCO01BQU1jLE07QUErQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbHRlclNsaWRlci40NDE2YjhjYTViYTJkZGZlYWE3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTdG9yZXN9IGZyb20gXCIuLi8uLi8uLi91dGlsL3N0b3JlUHJvdmlkZXJcIjtcclxuaW1wb3J0IHtvYnNlcnZlcn0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTGlzdCB7XHJcblx0c2Nyb2xsTGVmdE9mZnNldDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBMaXN0ID0gb2JzZXJ2ZXIoKHByb3BzOiBMaXN0KSA9PiB7XHJcblx0Y29uc3Qge3Njcm9sbExlZnRPZmZzZXR9ID0gcHJvcHM7XHJcblx0Y29uc3Qge2ZpbHRlclNsaWRlclVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge2l0ZW1zRWxzLCBzZWxlY3RlZEl0ZW1MaXN0fSA9IGZpbHRlclNsaWRlclVJU3RvcmU7XHJcblxyXG5cdGxldCBsaXN0ID0gW107XHJcblx0c2VsZWN0ZWRJdGVtTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coaXRlbSk7XHJcblx0XHRsaXN0LnB1c2goXHJcblx0XHRcdDxsaSByZWY9eyhpdGVtRWwpID0+IHtcclxuXHRcdFx0XHRcdGl0ZW1zRWxzICYmIGl0ZW1zRWxzLmN1cnJlbnQgJiYgaXRlbUVsICYmIChpdGVtc0Vscy5jdXJyZW50W2luZGV4XSA9IGl0ZW1FbCk7XHJcblx0XHRcdFx0fX0gXHJcblx0XHRcdFx0a2V5PXtpbmRleH0gXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnaXRlbScpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxhIFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdkZWxldGVCdG4nKX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge319XHJcblx0XHRcdFx0XHQ+WDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9saT5cclxuXHRcdCkgXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8dWwgXHJcblx0XHRcdGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0gXHJcblx0XHRcdHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtzY3JvbGxMZWZ0T2Zmc2V0fXB4LCAwcHgsIDBweClgfX1cclxuXHRcdD5cclxuXHRcdFx0e2xpc3R9XHJcblx0XHQ8L3VsPlxyXG5cdClcclxufSk7XHJcblxyXG5cclxuY29uc3QgU2xpZGVyID0gb2JzZXJ2ZXIoKCkgPT4ge1xyXG5cdGNvbnN0IFtzY3JvbGxMZWZ0T2Zmc2V0LCBzZXRTY3JvbGxMZWZ0T2Zmc2V0XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblx0Y29uc3QgZWxzID0gdXNlUmVmPEFycmF5PEhUTUxFbGVtZW50Pj4obnVsbCk7XHJcblx0Y29uc3Qge2ZpbHRlclNsaWRlclVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge2l0ZW1zRWxzLCBjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleH0gPSBmaWx0ZXJTbGlkZXJVSVN0b3JlO1xyXG5cdGNvbnN0IG1hcmdpblJpZ2h0ID0gMTI7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRlbHMuY3VycmVudCA9IFtdO1xyXG5cdFx0ZmlsdGVyU2xpZGVyVUlTdG9yZS5zZXRJdGVtc0VscyhlbHMpO1xyXG5cdH0sIFtlbHNdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCArIDEgPiBpdGVtc0Vscy5jdXJyZW50Lmxlbmd0aCAtIDQpIHJldHVybjtcclxuXHRcdGNvbnN0IGl0ZW1FbCA9IGl0ZW1zRWxzLmN1cnJlbnRbY3VycmVudEluZGV4XTtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCA8IGl0ZW1zRWxzLmN1cnJlbnQubGVuZ3RoIC0gMSkgc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCArIDEpO1xyXG5cdFx0c2V0U2Nyb2xsTGVmdE9mZnNldChzY3JvbGxMZWZ0T2Zmc2V0IC0gKGl0ZW1FbC5vZmZzZXRXaWR0aCArIG1hcmdpblJpZ2h0KSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCAtIDEgPCAwKSByZXR1cm47XHJcblx0XHRjb25zdCBpdGVtRWwgPSBpdGVtc0Vscy5jdXJyZW50W2N1cnJlbnRJbmRleCAtIDFdO1xyXG5cdFx0aWYoY3VycmVudEluZGV4ID4gMCkgc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCAtIDEpO1xyXG5cdFx0c2V0U2Nyb2xsTGVmdE9mZnNldChzY3JvbGxMZWZ0T2Zmc2V0ICsgKGl0ZW1FbC5vZmZzZXRXaWR0aCArIG1hcmdpblJpZ2h0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyV3JhcCcpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXJDb250ZW50cycpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlcicpfT5cclxuXHRcdFx0XHRcdDxMaXN0IHNjcm9sbExlZnRPZmZzZXQ9e3Njcm9sbExlZnRPZmZzZXR9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPXsnYnV0dG9uJ31cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2J1dHRvbicsICdwcmV2Jyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQcmV2fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT17J2J1dHRvbid9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdidXR0b24nLCAnbmV4dCcpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTmV4dH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=