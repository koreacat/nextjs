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
  var list = [];
  selectedFilterList.forEach(function (filter) {
    var li = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      ref: function ref(itemEl) {
        itemsEls && itemsEls.current && itemEl && (itemsEls.current[filter.type] = itemEl);
      },
      className: cx('item'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: filter.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: cx('deleteBtn'),
          onClick: function onClick() {
            return deleteFilter(filter);
          },
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 4
      }, _this)
    }, filter.type, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this);

    list.push(li);
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
    console.log(itemsEls);
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
          lineNumber: 83,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'prev'),
        onClick: handlePrev
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'next'),
        onClick: handleNext
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpc3QiLCJvYnNlcnZlciIsInByb3BzIiwic2Nyb2xsTGVmdE9mZnNldCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJpdGVtc0VscyIsInNlbGVjdGVkRmlsdGVyTGlzdCIsImRlbGV0ZUZpbHRlciIsImxpc3QiLCJmb3JFYWNoIiwiZmlsdGVyIiwibGkiLCJpdGVtRWwiLCJjdXJyZW50IiwidHlwZSIsInRleHQiLCJwdXNoIiwidHJhbnNmb3JtIiwiU2xpZGVyIiwidXNlU3RhdGUiLCJzZXRTY3JvbGxMZWZ0T2Zmc2V0IiwiZWxzIiwidXNlUmVmIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwibWFyZ2luUmlnaHQiLCJ1c2VFZmZlY3QiLCJzZXRJdGVtc0VscyIsImhhbmRsZU5leHQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwib2Zmc2V0V2lkdGgiLCJoYW5kbGVQcmV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7QUFNQSxJQUFNQyxJQUFJLEdBQUdDLDJEQUFRLFNBQUMsVUFBQ0MsS0FBRCxFQUFpQjtBQUFBOztBQUFBLE1BQy9CQyxnQkFEK0IsR0FDWEQsS0FEVyxDQUMvQkMsZ0JBRCtCOztBQUFBLG1CQUVSQyxxRUFBUyxFQUZEO0FBQUEsTUFFL0JDLG1CQUYrQixjQUUvQkEsbUJBRitCOztBQUFBLE1BRy9CQyxRQUgrQixHQUdlRCxtQkFIZixDQUcvQkMsUUFIK0I7QUFBQSxNQUdyQkMsa0JBSHFCLEdBR2VGLG1CQUhmLENBR3JCRSxr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YnBhY2svcGFnZXMvZmlsdGVyU2xpZGVyLjIwOTU4NDljNDk5MDhiODg0YzcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVN0b3Jlc30gZnJvbSBcIi4uLy4uLy4uL3V0aWwvc3RvcmVQcm92aWRlclwiO1xyXG5pbXBvcnQge29ic2VydmVyfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBMaXN0IHtcclxuXHRzY3JvbGxMZWZ0T2Zmc2V0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IExpc3QgPSBvYnNlcnZlcigocHJvcHM6IExpc3QpID0+IHtcclxuXHRjb25zdCB7c2Nyb2xsTGVmdE9mZnNldH0gPSBwcm9wcztcclxuXHRjb25zdCB7ZmlsdGVyU2xpZGVyVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuXHRjb25zdCB7aXRlbXNFbHMsIHNlbGVjdGVkRmlsdGVyTGlzdCwgZGVsZXRlRmlsdGVyfSA9IGZpbHRlclNsaWRlclVJU3RvcmU7XHJcblxyXG5cdGxldCBsaXN0ID0gW107XHJcblx0c2VsZWN0ZWRGaWx0ZXJMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG5cdFx0Y29uc3QgbGkgPSAoXHJcblx0XHRcdDxsaSByZWY9eyhpdGVtRWwpID0+IHtcclxuXHRcdFx0XHRpdGVtc0VscyAmJiBpdGVtc0Vscy5jdXJyZW50ICYmIGl0ZW1FbCAmJiAoaXRlbXNFbHMuY3VycmVudFtmaWx0ZXIudHlwZV0gPSBpdGVtRWwpO1xyXG5cdFx0XHR9fSBcclxuXHRcdFx0a2V5PXtmaWx0ZXIudHlwZX0gXHJcblx0XHRcdGNsYXNzTmFtZT17Y3goJ2l0ZW0nKX1cclxuXHRcdD5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8c3Bhbj57ZmlsdGVyLnRleHR9PC9zcGFuPlxyXG5cdFx0XHRcdDxhIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnZGVsZXRlQnRuJyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWx0ZXIoZmlsdGVyKX1cclxuXHRcdFx0XHQ+WDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cclxuXHRcdGxpc3QucHVzaChsaSk7IFxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHVsIFxyXG5cdFx0XHRjbGFzc05hbWU9e2N4KCdsaXN0Jyl9IFxyXG5cdFx0XHRzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7c2Nyb2xsTGVmdE9mZnNldH1weCwgMHB4LCAwcHgpYH19XHJcblx0XHQ+XHJcblx0XHRcdHtsaXN0fVxyXG5cdFx0PC91bD5cclxuXHQpXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IFNsaWRlciA9IG9ic2VydmVyKCgpID0+IHtcclxuXHRjb25zdCBbc2Nyb2xsTGVmdE9mZnNldCwgc2V0U2Nyb2xsTGVmdE9mZnNldF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cdGNvbnN0IGVscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KG51bGwpO1xyXG5cdGNvbnN0IHtmaWx0ZXJTbGlkZXJVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtpdGVtc0VscywgY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXh9ID0gZmlsdGVyU2xpZGVyVUlTdG9yZTtcclxuXHRjb25zdCBtYXJnaW5SaWdodCA9IDEyO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZWxzLmN1cnJlbnQgPSBbXTtcclxuXHRcdGZpbHRlclNsaWRlclVJU3RvcmUuc2V0SXRlbXNFbHMoZWxzKTtcclxuXHR9LCBbZWxzXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhpdGVtc0Vscyk7XHJcblxyXG5cdFx0aWYoY3VycmVudEluZGV4ICsgMSA+IGl0ZW1zRWxzLmN1cnJlbnQubGVuZ3RoIC0gNCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgaXRlbUVsID0gaXRlbXNFbHMuY3VycmVudFtjdXJyZW50SW5kZXhdO1xyXG5cdFx0aWYoY3VycmVudEluZGV4IDwgaXRlbXNFbHMuY3VycmVudC5sZW5ndGggLSAxKSBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ICsgMSk7XHJcblx0XHRzZXRTY3JvbGxMZWZ0T2Zmc2V0KHNjcm9sbExlZnRPZmZzZXQgLSAoaXRlbUVsLm9mZnNldFdpZHRoICsgbWFyZ2luUmlnaHQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xyXG5cdFx0aWYoY3VycmVudEluZGV4IC0gMSA8IDApIHJldHVybjtcclxuXHRcdGNvbnN0IGl0ZW1FbCA9IGl0ZW1zRWxzLmN1cnJlbnRbY3VycmVudEluZGV4IC0gMV07XHJcblx0XHRpZihjdXJyZW50SW5kZXggPiAwKSBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4IC0gMSk7XHJcblx0XHRzZXRTY3JvbGxMZWZ0T2Zmc2V0KHNjcm9sbExlZnRPZmZzZXQgKyAoaXRlbUVsLm9mZnNldFdpZHRoICsgbWFyZ2luUmlnaHQpKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXJXcmFwJyl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlckNvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyJyl9PlxyXG5cdFx0XHRcdFx0PExpc3Qgc2Nyb2xsTGVmdE9mZnNldD17c2Nyb2xsTGVmdE9mZnNldH0vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdHR5cGU9eydidXR0b24nfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnYnV0dG9uJywgJ3ByZXYnKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVByZXZ9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPXsnYnV0dG9uJ31cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2J1dHRvbicsICduZXh0Jyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==