webpackHotUpdate_N_E("pages/stickyScroll",{

/***/ "./pages/stickyScroll.tsx":
/*!********************************!*\
  !*** ./pages/stickyScroll.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/common/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/stickyScroll/stickyScroll.module.scss */ "./src/components/stickyScroll/stickyScroll.module.scss");
/* harmony import */ var _src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_common_contents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/common/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/stickyScroll/detailData */ "./src/components/stickyScroll/detailData.ts");
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll/modules */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/util/hooks/useScroll */ "./src/util/hooks/useScroll.ts");



var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\stickyScroll.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();










var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var DetailList = function DetailList(props) {
  _s();

  var active = props.active,
      setActive = props.setActive;
  var liEl = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(null);

  var handleClick = function handleClick(sn) {
    setActive(sn); //TODO toY 야매임

    react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__["animateScroll"].scrollTo(sn * 100, {
      containerId: 'listEl',
      smooth: true
    });
  };

  var list = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (d) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      ref: liEl,
      className: cx(d.sn === active && 'active'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        onClick: function onClick() {
          return handleClick(d.sn);
        },
        to: 'scroll' + d.sn,
        smooth: true,
        offset: -100,
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: list
  }, void 0, false);
};

_s(DetailList, "hNurUXKn8huy7OMLe8gB5r2Kta0=");

_c = DetailList;

var DetailItems = function DetailItems(props) {
  _s3();

  var _s2 = $RefreshSig$();

  var setActive = props.setActive;
  var itemEl = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(null);
  var items = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_5__["default"].map(_s2(function (d) {
    _s2();

    //TODO top이 닿으면 active sn 시키고 scroll 조절
    if (d.sn) {
      Object(_src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__["useScrollDir"])({
        el: itemEl,
        scrollUpTop: 0,
        onScrollUp: function onScrollUp() {
          return setActive(d.sn);
        }
      });
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__["Element"], {
      name: 'scroll' + d.sn,
      className: cx('detailItems'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        ref: itemEl,
        className: cx('title'),
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: d.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, _this)]
    }, d.sn, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, _this);
  }, "M3trOI3Oxp6jL1ARzzupiBlmUg0=", false, function () {
    return [_src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__["useScrollDir"]];
  }));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items
  }, void 0, false);
};

_s3(DetailItems, "ljLwRz/UR75pXzr/dJ3EycToXVA=");

_c2 = DetailItems;

var ScrollTop = function ScrollTop() {
  var handleClick = function handleClick() {
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    onClick: handleClick,
    className: cx('scrollTop')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 3
  }, _this);
};

_c3 = ScrollTop;

var StickyScroll = function StickyScroll() {
  _s4();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_contents__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('wrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('contents'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "listEl",
            className: cx('list'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailList, {
                active: active,
                setActive: setActive
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 3
  }, _this);
};

_s4(StickyScroll, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");

_c4 = StickyScroll;
/* harmony default export */ __webpack_exports__["default"] = (StickyScroll);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "DetailList");
$RefreshReg$(_c2, "DetailItems");
$RefreshReg$(_c3, "ScrollTop");
$RefreshReg$(_c4, "StickyScroll");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwibGlFbCIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwic24iLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsVG8iLCJjb250YWluZXJJZCIsInNtb290aCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsIkRldGFpbEl0ZW1zIiwiaXRlbUVsIiwiaXRlbXMiLCJ1c2VTY3JvbGxEaXIiLCJlbCIsInNjcm9sbFVwVG9wIiwib25TY3JvbGxVcCIsImNvbnRlbnRzIiwiU2Nyb2xsVG9wIiwid2luZG93IiwiU3RpY2t5U2Nyb2xsIiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDRGQUFoQixDQUFYOztBQVFBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBNEI7QUFBQTs7QUFBQSxNQUN2Q0MsTUFEdUMsR0FDbEJELEtBRGtCLENBQ3ZDQyxNQUR1QztBQUFBLE1BQy9CQyxTQUQrQixHQUNsQkYsS0FEa0IsQ0FDL0JFLFNBRCtCO0FBRTlDLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5COztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEVBQUQsRUFBZ0I7QUFDbkNKLGFBQVMsQ0FBQ0ksRUFBRCxDQUFULENBRG1DLENBR25DOztBQUNBQyxzRUFBYSxDQUFDQyxRQUFkLENBQXVCRixFQUFFLEdBQUcsR0FBNUIsRUFBaUM7QUFDaENHLGlCQUFXLEVB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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvc3RpY2t5U2Nyb2xsLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBDb250ZW50cyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbnRlbnRzXCI7XHJcbmltcG9ydCBkZXRhaWxEYXRhIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvZGV0YWlsRGF0YVwiO1xyXG5pbXBvcnQge0VsZW1lbnQsIExpbmsgYXMgU2Nyb2xsTGlua30gZnJvbSBcInJlYWN0LXNjcm9sbC9tb2R1bGVzXCI7XHJcbmltcG9ydCB7YW5pbWF0ZVNjcm9sbH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVNjcm9sbERpcn0gZnJvbSBcIi4uL3NyYy91dGlsL2hvb2tzL3VzZVNjcm9sbFwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsTGlzdFByb3BzIHtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChzbjogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxMaXN0ID0gKHByb3BzOiBEZXRhaWxMaXN0UHJvcHMpID0+IHtcclxuXHRjb25zdCB7YWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblx0Y29uc3QgbGlFbCA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoc246IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0QWN0aXZlKHNuKTtcclxuXHJcblx0XHQvL1RPRE8gdG9ZIOyVvOunpOyehFxyXG5cdFx0YW5pbWF0ZVNjcm9sbC5zY3JvbGxUbyhzbiAqIDEwMCwge1xyXG5cdFx0XHRjb250YWluZXJJZDogJ2xpc3RFbCcsXHJcblx0XHRcdHNtb290aDogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkgcmVmPXtsaUVsfSBrZXk9e2Quc259IGNsYXNzTmFtZT17Y3goZC5zbiA9PT0gYWN0aXZlICYmICdhY3RpdmUnKX0+XHJcblx0XHRcdFx0PFNjcm9sbExpbmsgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZC5zbil9IHRvPXsnc2Nyb2xsJyArIGQuc259IHNtb290aD17dHJ1ZX0gb2Zmc2V0PXstMTAwfT5cclxuXHRcdFx0XHRcdHtkLnNufVxyXG5cdFx0XHRcdDwvU2Nyb2xsTGluaz5cclxuXHRcdFx0PC9saT5cclxuXHRcdClcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+e2xpc3R9PC8+XHJcblx0KTtcclxufTtcclxuXHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsSXRlbXNQcm9wcyB7XHJcblx0c2V0QWN0aXZlOiAoYWN0aXZlOiBudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgRGV0YWlsSXRlbXMgPSAocHJvcHM6IERldGFpbEl0ZW1zUHJvcHMpID0+IHtcclxuXHRjb25zdCB7c2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cdGNvbnN0IGl0ZW1FbCA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0Y29uc3QgaXRlbXMgPSBkZXRhaWxEYXRhLm1hcCgoZCkgPT4ge1xyXG5cdFx0Ly9UT0RPIHRvcOydtCDri7/snLzrqbQgYWN0aXZlIHNuIOyLnO2CpOqzoCBzY3JvbGwg7KGw7KCIXHJcblxyXG5cdFx0aWYoZC5zbiApe1xyXG5cdFx0XHR1c2VTY3JvbGxEaXIoe1xyXG5cdFx0XHRcdGVsOiBpdGVtRWwsXHJcblx0XHRcdFx0c2Nyb2xsVXBUb3A6IDAsXHJcblx0XHRcdFx0b25TY3JvbGxVcDogKCkgPT4gc2V0QWN0aXZlKGQuc24pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8RWxlbWVudCBrZXk9e2Quc259IG5hbWU9eydzY3JvbGwnICsgZC5zbn0gY2xhc3NOYW1lPXtjeCgnZGV0YWlsSXRlbXMnKX0+XHJcblx0XHRcdFx0PHNwYW4gcmVmPXtpdGVtRWx9IGNsYXNzTmFtZT17Y3goJ3RpdGxlJyl9PntkLnNufTwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFNjcm9sbFRvcCA9ICgpID0+IHtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjeCgnc2Nyb2xsVG9wJyl9Lz5cclxuXHQpXHJcbn07XHJcblxyXG5jb25zdCBTdGlja3lTY3JvbGwgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdiYW5uZXInKX0vPlxyXG5cdFx0XHQ8Q29udGVudHM+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzdW1tYXJ5Jyl9Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgaWQ9J2xpc3RFbCcgY2xhc3NOYW1lPXtjeCgnbGlzdCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsTGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2RldGFpbCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8RGV0YWlsSXRlbXNcclxuXHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQ29udGVudHM+XHJcblx0XHRcdDxTY3JvbGxUb3AvPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5U2Nyb2xsO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==