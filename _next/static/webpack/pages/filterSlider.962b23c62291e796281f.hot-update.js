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
  selectedItemList.forEach(function (seletedItem) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpc3QiLCJvYnNlcnZlciIsInByb3BzIiwic2Nyb2xsTGVmdE9mZnNldCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJpdGVtc0VscyIsInNlbGVjdGVkSXRlbUxpc3QiLCJsaXN0IiwiZm9yRWFjaCIsInNlbGV0ZWRJdGVtIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJpdGVtRWwiLCJjdXJyZW50IiwidHlwZSIsInRleHQiLCJ0cmFuc2Zvcm0iLCJTbGlkZXIiLCJ1c2VTdGF0ZSIsInNldFNjcm9sbExlZnRPZmZzZXQiLCJlbHMiLCJ1c2VSZWYiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJtYXJnaW5SaWdodCIsInVzZUVmZmVjdCIsInNldEl0ZW1zRWxzIiwiaGFuZGxlTmV4dCIsImxlbmd0aCIsIm9mZnNldFdpZHRoIiwiaGFuZGxlUHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDBEQUFoQixDQUFYO0FBTUEsSUFBTUMsSUFBSSxHQUFHQywyREFBUSxTQUFDLFVBQUNDLEtBQUQsRUFBaUI7QUFBQTs7QUFBQSxNQUMvQkMsZ0JBRCtCLEdBQ1hELEtBRFcsQ0FDL0JDLGdCQUQrQjs7QUFBQSxtQkFFUkMscUVBQVMsRUFGRDtBQUFBLE1BRS9CQyxtQkFGK0IsY0FFL0JBLG1CQUYrQjs7QUFBQSxNQUcvQkMsUUFIK0IsR0FHREQsbUJBSEMsQ0FHL0JDLFFBSCtCO0FBQUEsTUFHckJDLGdCQUhxQixHQUdERixtQkFIQyxDQUdyQkUsZ0JBSHFCO0FBS3RDLE1BQUlD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R0FBRyxDQUFoQyxDQUFmO0FBQ0EsUUFBR0EsWUFBWSxHQUFHLENBQWxCLEVBQXFCQyxlQUFlLENBQUNELFlBQVksR0FBRyxDQUFoQixDQUFmO0FBQ3JCSCx1QkFBbUIsQ0FBQ2xCLGdCQUFnQixJQUFJVyxNQUFNLENBQUNpQixXQUFQLEdBQXFCTCxXQUF6QixDQUFqQixDQUFuQjtBQUNBLEdBTEQ7O0FBT0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUU5QixFQUFFLENBQUMsWUFBRCxDQUFsQjtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsZ0JBQUQsQ0FBbEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVBLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsK0JBQ0MscUVBQUMsSUFBRDtBQUFNLDBCQUFnQixFQUFFTztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBSUM7QUFDQyxZQUFJLEVBQUUsUUFEUDtBQUVDLGlCQUFTLEVBQUVQLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUZkO0FBR0MsZUFBTyxFQUFFb0M7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkQsZUFTQztBQUNDLFlBQUksRUFBRSxRQURQO0FBRUMsaUJBQVMsRUFBRXBDLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUZkO0FBR0MsZUFBTyxFQUFFaUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbUJBLENBN0NzQjtBQUFBLFVBR1F6Qiw2REFIUjtBQUFBLEdBQXZCO01BQU1lLE07QUErQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbHRlclNsaWRlci45NjJiMjNjNjIyOTFlNzk2MjgxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTdG9yZXN9IGZyb20gXCIuLi8uLi8uLi91dGlsL3N0b3JlUHJvdmlkZXJcIjtcclxuaW1wb3J0IHtvYnNlcnZlcn0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTGlzdCB7XHJcblx0c2Nyb2xsTGVmdE9mZnNldDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBMaXN0ID0gb2JzZXJ2ZXIoKHByb3BzOiBMaXN0KSA9PiB7XHJcblx0Y29uc3Qge3Njcm9sbExlZnRPZmZzZXR9ID0gcHJvcHM7XHJcblx0Y29uc3Qge2ZpbHRlclNsaWRlclVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge2l0ZW1zRWxzLCBzZWxlY3RlZEl0ZW1MaXN0fSA9IGZpbHRlclNsaWRlclVJU3RvcmU7XHJcblxyXG5cdGxldCBsaXN0ID0gW107XHJcblx0c2VsZWN0ZWRJdGVtTGlzdC5mb3JFYWNoKChzZWxldGVkSXRlbSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coc2VsZXRlZEl0ZW0pO1xyXG5cdFx0bGlzdC5wdXNoKFxyXG5cdFx0XHQ8bGkgcmVmPXsoaXRlbUVsKSA9PiB7XHJcblx0XHRcdFx0XHRpdGVtc0VscyAmJiBpdGVtc0Vscy5jdXJyZW50ICYmIGl0ZW1FbCAmJiAoaXRlbXNFbHMuY3VycmVudFtzZWxldGVkSXRlbS50eXBlXSA9IGl0ZW1FbCk7XHJcblx0XHRcdFx0fX0gXHJcblx0XHRcdFx0a2V5PXtzZWxldGVkSXRlbS50eXBlfSBcclxuXHRcdFx0XHRjbGFzc05hbWU9e2N4KCdpdGVtJyl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PHNwYW4+e3NlbGV0ZWRJdGVtLnRleHR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGEgXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2RlbGV0ZUJ0bicpfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7fX1cclxuXHRcdFx0XHRcdD5YPC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KSBcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDx1bCBcclxuXHRcdFx0Y2xhc3NOYW1lPXtjeCgnbGlzdCcpfSBcclxuXHRcdFx0c3R5bGU9e3t0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke3Njcm9sbExlZnRPZmZzZXR9cHgsIDBweCwgMHB4KWB9fVxyXG5cdFx0PlxyXG5cdFx0XHR7bGlzdH1cclxuXHRcdDwvdWw+XHJcblx0KVxyXG59KTtcclxuXHJcblxyXG5jb25zdCBTbGlkZXIgPSBvYnNlcnZlcigoKSA9PiB7XHJcblx0Y29uc3QgW3Njcm9sbExlZnRPZmZzZXQsIHNldFNjcm9sbExlZnRPZmZzZXRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHRjb25zdCBlbHMgPSB1c2VSZWY8QXJyYXk8SFRNTEVsZW1lbnQ+PihudWxsKTtcclxuXHRjb25zdCB7ZmlsdGVyU2xpZGVyVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuXHRjb25zdCB7aXRlbXNFbHMsIGN1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4fSA9IGZpbHRlclNsaWRlclVJU3RvcmU7XHJcblx0Y29uc3QgbWFyZ2luUmlnaHQgPSAxMjtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGVscy5jdXJyZW50ID0gW107XHJcblx0XHRmaWx0ZXJTbGlkZXJVSVN0b3JlLnNldEl0ZW1zRWxzKGVscyk7XHJcblx0fSwgW2Vsc10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG5cdFx0aWYoY3VycmVudEluZGV4ICsgMSA+IGl0ZW1zRWxzLmN1cnJlbnQubGVuZ3RoIC0gNCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgaXRlbUVsID0gaXRlbXNFbHMuY3VycmVudFtjdXJyZW50SW5kZXhdO1xyXG5cdFx0aWYoY3VycmVudEluZGV4IDwgaXRlbXNFbHMuY3VycmVudC5sZW5ndGggLSAxKSBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ICsgMSk7XHJcblx0XHRzZXRTY3JvbGxMZWZ0T2Zmc2V0KHNjcm9sbExlZnRPZmZzZXQgLSAoaXRlbUVsLm9mZnNldFdpZHRoICsgbWFyZ2luUmlnaHQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xyXG5cdFx0aWYoY3VycmVudEluZGV4IC0gMSA8IDApIHJldHVybjtcclxuXHRcdGNvbnN0IGl0ZW1FbCA9IGl0ZW1zRWxzLmN1cnJlbnRbY3VycmVudEluZGV4IC0gMV07XHJcblx0XHRpZihjdXJyZW50SW5kZXggPiAwKSBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4IC0gMSk7XHJcblx0XHRzZXRTY3JvbGxMZWZ0T2Zmc2V0KHNjcm9sbExlZnRPZmZzZXQgKyAoaXRlbUVsLm9mZnNldFdpZHRoICsgbWFyZ2luUmlnaHQpKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXJXcmFwJyl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlckNvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyJyl9PlxyXG5cdFx0XHRcdFx0PExpc3Qgc2Nyb2xsTGVmdE9mZnNldD17c2Nyb2xsTGVmdE9mZnNldH0vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdHR5cGU9eydidXR0b24nfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnYnV0dG9uJywgJ3ByZXYnKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVByZXZ9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPXsnYnV0dG9uJ31cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2J1dHRvbicsICduZXh0Jyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==