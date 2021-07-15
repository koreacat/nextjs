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
    list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
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
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: cx('deleteBtn'),
          onClick: function onClick() {
            return deleteFilter(filter);
          },
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, _this)
    }, filter.type, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
    lineNumber: 39,
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

  var itemsEls = filterSliderUIStore.itemsEls;
  var marginRight = 12;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    els.current = [];
    filterSliderUIStore.setItemsEls(els);
  }, [els]);

  var handleNext = function handleNext() {
    itemsEls.current.forEach(function (itemEl) {
      console.log(itemEl);
    }); // setScrollLeftOffset(scrollLeftOffset - (itemEl.offsetWidth + marginRight));
  };

  var handlePrev = function handlePrev() {// setScrollLeftOffset(scrollLeftOffset + (itemEl.offsetWidth + marginRight));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkxpc3QiLCJvYnNlcnZlciIsInByb3BzIiwic2Nyb2xsTGVmdE9mZnNldCIsInVzZVN0b3JlcyIsImZpbHRlclNsaWRlclVJU3RvcmUiLCJpdGVtc0VscyIsInNlbGVjdGVkRmlsdGVyTGlzdCIsImRlbGV0ZUZpbHRlciIsImxpc3QiLCJmb3JFYWNoIiwiZmlsdGVyIiwicHVzaCIsIml0ZW1FbCIsImN1cnJlbnQiLCJ0eXBlIiwidGV4dCIsInRyYW5zZm9ybSIsIlNsaWRlciIsInVzZVN0YXRlIiwic2V0U2Nyb2xsTGVmdE9mZnNldCIsImVscyIsInVzZVJlZiIsIm1hcmdpblJpZ2h0IiwidXNlRWZmZWN0Iiwic2V0SXRlbXNFbHMiLCJoYW5kbGVOZXh0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVByZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywwREFBaEIsQ0FBWDtBQU1BLElBQU1DLElBQUksR0FBR0MsMkRBQVEsU0FBQyxVQUFDQyxLQUFELEVBQWlCO0FBQUE7O0FBQUEsTUFDL0JDLGdCQUQrQixHQUNYRCxLQURXLENBQy9CQyxnQkFEK0I7O0FBQUEsbUJBRVJDLHFFQUFTLEVBRkQ7QUFBQSxNQUUvQkMsbUJBRitCLGNBRS9CQSxtQkFGK0I7O0FBQUEsTUFHL0JDLFFBSCtCLEdBR2VELG1CQUhmLENBRy9CQyxRQUgrQjtBQUFBLE1BR3JCQyxrQkFIcUIsR0FHZUYsbUJBSGYsQ0FHckJFLGtCQUhxQjtBQUFBLE1BR0RDLFlBSEMsR0FHZUgsbUJBSGYsQ0FHREcsWUFIQztBQUt0QyxNQUFJQyxJQUFJ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RFA7QUFFQyxpQkFBUyxFQUFFakMsRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLENBRmQ7QUFHQyxlQUFPLEVBQUU4QjtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFtQkEsQ0EzQ3NCO0FBQUEsVUFHUXRCLDZEQUhSO0FBQUEsR0FBdkI7TUFBTWMsTTtBQTZDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmlsdGVyU2xpZGVyLjE5NDUwNDI2YWNmMjA0NjAyMzRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVN0b3Jlc30gZnJvbSBcIi4uLy4uLy4uL3V0aWwvc3RvcmVQcm92aWRlclwiO1xyXG5pbXBvcnQge29ic2VydmVyfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBMaXN0IHtcclxuXHRzY3JvbGxMZWZ0T2Zmc2V0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IExpc3QgPSBvYnNlcnZlcigocHJvcHM6IExpc3QpID0+IHtcclxuXHRjb25zdCB7c2Nyb2xsTGVmdE9mZnNldH0gPSBwcm9wcztcclxuXHRjb25zdCB7ZmlsdGVyU2xpZGVyVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuXHRjb25zdCB7aXRlbXNFbHMsIHNlbGVjdGVkRmlsdGVyTGlzdCwgZGVsZXRlRmlsdGVyfSA9IGZpbHRlclNsaWRlclVJU3RvcmU7XHJcblxyXG5cdGxldCBsaXN0ID0gW107XHJcblx0c2VsZWN0ZWRGaWx0ZXJMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG5cdFx0bGlzdC5wdXNoKFxyXG5cdFx0XHQ8bGkgcmVmPXsoaXRlbUVsKSA9PiB7XHJcblx0XHRcdFx0XHRpdGVtc0VscyAmJiBpdGVtc0Vscy5jdXJyZW50ICYmIGl0ZW1FbCAmJiAoaXRlbXNFbHMuY3VycmVudFtmaWx0ZXIudHlwZV0gPSBpdGVtRWwpO1xyXG5cdFx0XHRcdH19IFxyXG5cdFx0XHRcdGtleT17ZmlsdGVyLnR5cGV9IFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2l0ZW0nKX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8c3Bhbj57ZmlsdGVyLnRleHR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGEgXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2RlbGV0ZUJ0bicpfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWx0ZXIoZmlsdGVyKX1cclxuXHRcdFx0XHRcdD5YPC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KSBcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDx1bCBcclxuXHRcdFx0Y2xhc3NOYW1lPXtjeCgnbGlzdCcpfSBcclxuXHRcdFx0c3R5bGU9e3t0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke3Njcm9sbExlZnRPZmZzZXR9cHgsIDBweCwgMHB4KWB9fVxyXG5cdFx0PlxyXG5cdFx0XHR7bGlzdH1cclxuXHRcdDwvdWw+XHJcblx0KVxyXG59KTtcclxuXHJcblxyXG5jb25zdCBTbGlkZXIgPSBvYnNlcnZlcigoKSA9PiB7XHJcblx0Y29uc3QgW3Njcm9sbExlZnRPZmZzZXQsIHNldFNjcm9sbExlZnRPZmZzZXRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHRjb25zdCBlbHMgPSB1c2VSZWY8QXJyYXk8SFRNTEVsZW1lbnQ+PihudWxsKTtcclxuXHRjb25zdCB7ZmlsdGVyU2xpZGVyVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuXHRjb25zdCB7aXRlbXNFbHN9ID0gZmlsdGVyU2xpZGVyVUlTdG9yZTtcclxuXHRjb25zdCBtYXJnaW5SaWdodCA9IDEyO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZWxzLmN1cnJlbnQgPSBbXTtcclxuXHRcdGZpbHRlclNsaWRlclVJU3RvcmUuc2V0SXRlbXNFbHMoZWxzKTtcclxuXHR9LCBbZWxzXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcblx0XHRpdGVtc0Vscy5jdXJyZW50LmZvckVhY2goKGl0ZW1FbCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpdGVtRWwpO1xyXG5cdFx0fSlcclxuXHRcdC8vIHNldFNjcm9sbExlZnRPZmZzZXQoc2Nyb2xsTGVmdE9mZnNldCAtIChpdGVtRWwub2Zmc2V0V2lkdGggKyBtYXJnaW5SaWdodCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XHJcblx0XHRcclxuXHRcdC8vIHNldFNjcm9sbExlZnRPZmZzZXQoc2Nyb2xsTGVmdE9mZnNldCArIChpdGVtRWwub2Zmc2V0V2lkdGggKyBtYXJnaW5SaWdodCkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlcldyYXAnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyQ29udGVudHMnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXInKX0+XHJcblx0XHRcdFx0XHQ8TGlzdCBzY3JvbGxMZWZ0T2Zmc2V0PXtzY3JvbGxMZWZ0T2Zmc2V0fS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT17J2J1dHRvbid9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdidXR0b24nLCAncHJldicpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUHJldn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdHR5cGU9eydidXR0b24nfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnYnV0dG9uJywgJ25leHQnKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9