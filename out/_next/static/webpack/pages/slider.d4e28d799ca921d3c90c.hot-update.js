webpackHotUpdate_N_E("pages/slider",{

/***/ "./src/components/slider/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/slider/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.module.scss */ "./src/components/slider/slider.module.scss");
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_storeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/storeProvider */ "./src/util/storeProvider.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\slider\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var data = ['유연 근무를 시행하는', '사내식당을', '직급', '뛰어난 동료가 많은', '차별이 없는', '사회공동이익을 추구하는 추구하는 추구하는', '유연 근무를 시행하는', '사내식당을 운영하는', '직급이 없는', '뛰어난 동료가 많은', '차별이 없는', '사회공동이익을 추구하는', '유연 근무를 시행하는', '사내식당을 운영하는', '직급이 없는', '뛰어난 동료가 많은', '차별이 없는', '사회공동이익을 추구하는'];

var List = function List(props) {
  _s();

  var appMenu = props.appMenu;

  var _useStores = Object(_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"])(),
      sliderUIStore = _useStores.sliderUIStore;

  var itemsEls = sliderUIStore.itemsEls; // const scrollEvent = (e: any) => {
  // 	let diff = e.deltaY;
  // 	appMenu.current.scrollLeft += diff;
  // };

  var list = data.map(function (item, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      ref: function ref(itemEl) {
        itemsEls && itemsEls.current && itemEl && (itemsEls.current[index] = itemEl);
      },
      className: cx('item'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    ref: appMenu,
    className: cx('slider'),
    children: list
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, _this);
};

_s(List, "gKhtRzIWGMCQ0w3rGv+roDttYQk=", false, function () {
  return [_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"]];
});

_c = List;
var Slider = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_c2 = _s2(function () {
  _s2();

  var appMenu = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var els = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useStores2 = Object(_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"])(),
      sliderUIStore = _useStores2.sliderUIStore;

  var itemsEls = sliderUIStore.itemsEls,
      currentIndex = sliderUIStore.currentIndex,
      setCurrentIndex = sliderUIStore.setCurrentIndex;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    els.current = [];
    sliderUIStore.setItemsEls(els);
  }, [els]);

  var handleNext = function handleNext() {
    if (!appMenu.current) return;
    var itemEl = itemsEls.current[currentIndex];
    if (currentIndex < itemsEls.current.length - 1) setCurrentIndex(currentIndex + 1);
    appMenu.current.scrollLeft += itemEl.offsetWidth + 12;
  };

  var handlePrev = function handlePrev() {
    if (!appMenu.current) return;
    var itemEl = itemsEls.current[currentIndex - 1];
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    appMenu.current.scrollLeft -= (itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetWidth) + 12;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('sliderWrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('sliderContents'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'prev'),
        onClick: handlePrev
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: 'button',
        className: cx('button', 'next'),
        onClick: handleNext
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(List, {
        appMenu: appMenu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 3
  }, _this);
}, "T33a/7/iEtK91cJeTqBKrM+8RiY=", false, function () {
  return [_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"]];
}));
_c3 = Slider;
/* harmony default export */ __webpack_exports__["default"] = (Slider);

var _c, _c2, _c3;

$RefreshReg$(_c, "List");
$RefreshReg$(_c2, "Slider$observer");
$RefreshReg$(_c3, "Slider");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiZGF0YSIsIkxpc3QiLCJwcm9wcyIsImFwcE1lbnUiLCJ1c2VTdG9yZXMiLCJzbGlkZXJVSVN0b3JlIiwiaXRlbXNFbHMiLCJsaXN0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiaXRlbUVsIiwiY3VycmVudCIsIlNsaWRlciIsIm9ic2VydmVyIiwidXNlUmVmIiwiZWxzIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwidXNlRWZmZWN0Iiwic2V0SXRlbXNFbHMiLCJoYW5kbGVOZXh0IiwibGVuZ3RoIiwic2Nyb2xsTGVmdCIsIm9mZnNldFdpZHRoIiwiaGFuZGxlUHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDBEQUFoQixDQUFYO0FBRUEsSUFBTUMsSUFBSSxHQUFHLENBQ1osYUFEWSxFQUVaLE9BRlksRUFHWixJQUhZLEVBSVosWUFKWSxFQUtaLFFBTFksRUFNWix3QkFOWSxFQU9aLGFBUFksRUFRWixZQVJZLEVBU1osUUFUWSxFQVVaLFlBVlksRUFXWixRQVhZLEVBWVosY0FaWSxFQWFaLGFBYlksRUFjWixZQWRZLEVBZVosUUFmWSxFQWdCWixZQWhCWSxFQWlCWixRQWpCWSxFQWtCWixjQWxCWSxDQUFiOztBQXlCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQWlCO0FBQUE7O0FBQUEsTUFDdEJDLE9BRHNCLEdBQ1hELEtBRFcsQ0FDdEJDLE9BRHNCOztBQUFBLG1CQUVMQyxxRUFBUyxFQUZKO0FBQUEsTUFFdEJDLGFBRnNCLGNBRXRCQSxhQUZzQjs7QUFBQSxNQUd0QkMsUUFI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Q0M7QUFDQyxZQUFJLEVBQUUsUUFEUDtBQUVDLGlCQUFTLEVBQUVBLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUZkO0FBR0MsZUFBTyxFQUFFNkI7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFNQztBQUNDLFlBQUksRUFBRSxRQURQO0FBRUMsaUJBQVMsRUFBRTdCLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUZkO0FBR0MsZUFBTyxFQUFFeUI7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkQsZUFXQyxxRUFBQyxJQUFEO0FBQ0MsZUFBTyxFQUFFbEI7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbUJBLENBNUNzQjtBQUFBLFVBR0VDLDZEQUhGO0FBQUEsR0FBdkI7TUFBTVMsTTtBQThDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmQ0ZTI4ZDc5OWNhOTIxZDNjOTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlU3RvcmVzfSBmcm9tIFwiLi4vLi4vdXRpbC9zdG9yZVByb3ZpZGVyXCI7XHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuXHQn7Jyg7JewIOq3vOustOulvCDsi5ztlontlZjripQnLFxyXG5cdCfsgqzrgrTsi53ri7nsnYQnLFxyXG5cdCfsp4HquIknLFxyXG5cdCfrm7DslrTrgpwg64+Z66OM6rCAIOunjuydgCcsXHJcblx0J+ywqOuzhOydtCDsl4bripQnLFxyXG5cdCfsgqztmozqs7Xrj5nsnbTsnbXsnYQg7LaU6rWs7ZWY64qUIOy2lOq1rO2VmOuKlCDstpTqtaztlZjripQnLFxyXG5cdCfsnKDsl7Ag6re866y066W8IOyLnO2Wie2VmOuKlCcsXHJcblx0J+yCrOuCtOyLneuLueydhCDsmrTsmIHtlZjripQnLFxyXG5cdCfsp4HquInsnbQg7JeG64qUJyxcclxuXHQn65uw7Ja064KcIOuPmeujjOqwgCDrp47snYAnLFxyXG5cdCfssKjrs4TsnbQg7JeG64qUJyxcclxuXHQn7IKs7ZqM6rO164+Z7J207J217J2EIOy2lOq1rO2VmOuKlCcsXHJcblx0J+ycoOyXsCDqt7zrrLTrpbwg7Iuc7ZaJ7ZWY64qUJyxcclxuXHQn7IKs64K07Iud64u57J2EIOyatOyYge2VmOuKlCcsXHJcblx0J+yngeq4ieydtCDsl4bripQnLFxyXG5cdCfrm7DslrTrgpwg64+Z66OM6rCAIOunjuydgCcsXHJcblx0J+ywqOuzhOydtCDsl4bripQnLFxyXG5cdCfsgqztmozqs7Xrj5nsnbTsnbXsnYQg7LaU6rWs7ZWY64qUJyxcclxuXTtcclxuXHJcbmludGVyZmFjZSBMaXN0IHtcclxuXHRhcHBNZW51OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IExpc3QgPSAocHJvcHM6IExpc3QpID0+IHtcclxuXHRjb25zdCB7YXBwTWVudX0gPSBwcm9wcztcclxuXHRjb25zdCB7c2xpZGVyVUlTdG9yZX0gPSB1c2VTdG9yZXMoKTtcclxuXHRjb25zdCB7aXRlbXNFbHN9ID0gc2xpZGVyVUlTdG9yZTtcclxuXHJcblx0Ly8gY29uc3Qgc2Nyb2xsRXZlbnQgPSAoZTogYW55KSA9PiB7XHJcblx0Ly8gXHRsZXQgZGlmZiA9IGUuZGVsdGFZO1xyXG5cdC8vIFx0YXBwTWVudS5jdXJyZW50LnNjcm9sbExlZnQgKz0gZGlmZjtcclxuXHQvLyB9O1xyXG5cclxuXHRjb25zdCBsaXN0ID0gZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkgcmVmPXsoaXRlbUVsKSA9PiB7XHJcblx0XHRcdFx0aXRlbXNFbHMgJiYgaXRlbXNFbHMuY3VycmVudCAmJiBpdGVtRWwgJiYgKGl0ZW1zRWxzLmN1cnJlbnRbaW5kZXhdID0gaXRlbUVsKTtcclxuXHRcdFx0fX0ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjeCgnaXRlbScpfT5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PHNwYW4+e2l0ZW19PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHVsIHJlZj17YXBwTWVudX0gY2xhc3NOYW1lPXtjeCgnc2xpZGVyJyl9PlxyXG5cdFx0XHR7bGlzdH1cclxuXHRcdDwvdWw+XHJcblx0KVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IFNsaWRlciA9IG9ic2VydmVyKCgpID0+IHtcclxuXHRjb25zdCBhcHBNZW51ID0gdXNlUmVmPEhUTUxVTGlzdEVsZW1lbnQ+KG51bGwpO1xyXG5cdGNvbnN0IGVscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KG51bGwpO1xyXG5cdGNvbnN0IHtzbGlkZXJVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG5cdGNvbnN0IHtpdGVtc0VscywgY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXh9ID0gc2xpZGVyVUlTdG9yZTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGVscy5jdXJyZW50ID0gW107XHJcblx0XHRzbGlkZXJVSVN0b3JlLnNldEl0ZW1zRWxzKGVscyk7XHJcblx0fSwgW2Vsc10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG5cdFx0aWYoIWFwcE1lbnUuY3VycmVudCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgaXRlbUVsID0gaXRlbXNFbHMuY3VycmVudFtjdXJyZW50SW5kZXhdO1xyXG5cdFx0aWYoY3VycmVudEluZGV4IDwgaXRlbXNFbHMuY3VycmVudC5sZW5ndGggLSAxKSBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ICsgMSk7XHJcblx0XHRhcHBNZW51LmN1cnJlbnQuc2Nyb2xsTGVmdCArPSBpdGVtRWwub2Zmc2V0V2lkdGggKyAxMjtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xyXG5cdFx0aWYoIWFwcE1lbnUuY3VycmVudCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgaXRlbUVsID0gaXRlbXNFbHMuY3VycmVudFtjdXJyZW50SW5kZXggLSAxXTtcclxuXHRcdGlmKGN1cnJlbnRJbmRleCA+IDApIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggLSAxKTtcclxuXHRcdGFwcE1lbnUuY3VycmVudC5zY3JvbGxMZWZ0IC09IGl0ZW1FbD8ub2Zmc2V0V2lkdGggKyAxMjtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXJXcmFwJyl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlckNvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdHR5cGU9eydidXR0b24nfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnYnV0dG9uJywgJ3ByZXYnKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVByZXZ9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPXsnYnV0dG9uJ31cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2J1dHRvbicsICduZXh0Jyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PExpc3RcclxuXHRcdFx0XHRcdGFwcE1lbnU9e2FwcE1lbnV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9