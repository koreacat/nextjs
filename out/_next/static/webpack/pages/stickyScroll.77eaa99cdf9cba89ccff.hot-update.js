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
/* harmony import */ var _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/stickyScroll/detailData */ "./src/components/stickyScroll/detailData.ts");
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll/modules */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\stickyScroll.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var DetailList = function DetailList(props) {
  var active = props.active,
      setActive = props.setActive;

  var handleClick = function handleClick(sn) {
    setActive(sn);
  };

  var list = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (d) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: cx(d.sn === active && 'active'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        onClick: function onClick() {
          return handleClick(d.sn);
        },
        to: 'scroll' + d.sn,
        smooth: true,
        offset: -100,
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: list
  }, void 0, false);
};

_c = DetailList;

var DetailItems = function DetailItems(props) {
  _s();

  var setActive = props.setActive;
  var itemsEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  var lastScrollTop = 0;
  var scrollUpOffset = 300;
  var scrollDownOffset = 300;
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    document.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
      var windHeight = window.innerHeight;
      itemsEls.current.map(function (itemEl, index) {
        var elTop = itemEl === null || itemEl === void 0 ? void 0 : itemEl.getBoundingClientRect().top;
        var elBottom = itemEl === null || itemEl === void 0 ? void 0 : itemEl.getBoundingClientRect().bottom;

        if (scrollDir === 'UP') {
          if (elTop <= scrollUpOffset && elTop > -(itemEl.offsetHeight - scrollUpOffset)) {
            setActive(index);
          }
        } else if (scrollDir === 'DOWN') {
          if (elBottom >= windHeight - scrollDownOffset && elBottom < windHeight + itemEl.offsetHeight - scrollDownOffset) {
            setActive(index);
          }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      });
    }, false);
  }, []); //TODO 스크롤이 안보이면 스크롤 이동
  // animateScroll.scrollTo(sn * 100, {
  // 	containerId: 'listEl',
  // 	smooth: true
  // });

  var items = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (d) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: function ref(itemEl) {
        return itemsEls.current[d.sn] = itemEl;
      },
      className: cx('detailItems'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Element"], {
        name: 'scroll' + d.sn,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('title'),
          children: d.sn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, _this)]
      }, d.sn, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items
  }, void 0, false);
};

_s(DetailItems, "duK4hogXKruilIsv/t0refJjK2w=");

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
    lineNumber: 106,
    columnNumber: 3
  }, _this);
};

_c3 = ScrollTop;

var StickyScroll = function StickyScroll() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('SCROLL'),
      scrollMode = _useState[0],
      setScrollMode = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      active = _useState2[0],
      setActive = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
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
                lineNumber: 125,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 3
  }, _this);
};

_s2(StickyScroll, "FG01ZHGEQEITNn3T/zQY7jd0cXI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJzbiIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsIkRldGFpbEl0ZW1zIiwiaXRlbXNFbHMiLCJ1c2VSZWYiLCJsYXN0U2Nyb2xsVG9wIiwic2Nyb2xsVXBPZmZzZXQiLCJzY3JvbGxEb3duT2Zmc2V0IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxEaXIiLCJ3aW5kSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdXJyZW50IiwiaXRlbUVsIiwiaW5kZXgiLCJlbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsQm90dG9tIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0IiwiaXRlbXMiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsInNjcm9sbFRvIiwiU3RpY2t5U2Nyb2xsIiwidXNlU3RhdGUiLCJzY3JvbGxNb2RlIiwic2V0U2Nyb2xsTW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNEZBQWhCLENBQVg7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUE0QjtBQUFBLE1BQ3ZDQyxNQUR1QyxHQUNsQkQsS0FEa0IsQ0FDdkNDLE1BRHVDO0FBQUEsTUFDL0JDLFNBRCtCLEdBQ2xCRixLQURrQixDQUMvQkUsU0FEK0I7O0FBRzlDLE1BQU1D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QUE7QUFBQSxhQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTBCQSxDQTlCRDs7SUFBTW9DLFk7O01BQUFBLFk7QUFnQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0aWNreVNjcm9sbC43N2VhYTk5Y2RmOWNiYTg5Y2NmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9zdGlja3lTY3JvbGwubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGRldGFpbERhdGEgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9kZXRhaWxEYXRhXCI7XHJcbmltcG9ydCB7RWxlbWVudCwgTGluayBhcyBTY3JvbGxMaW5rfSBmcm9tIFwicmVhY3Qtc2Nyb2xsL21vZHVsZXNcIjtcclxuaW1wb3J0IHthbmltYXRlU2Nyb2xsfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsTGlzdFByb3BzIHtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChzbjogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxMaXN0ID0gKHByb3BzOiBEZXRhaWxMaXN0UHJvcHMpID0+IHtcclxuXHRjb25zdCB7YWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKHNuOiBudW1iZXIpID0+IHtcclxuXHRcdHNldEFjdGl2ZShzbik7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkga2V5PXtkLnNufSBjbGFzc05hbWU9e2N4KGQuc24gPT09IGFjdGl2ZSAmJiAnYWN0aXZlJyl9PlxyXG5cdFx0XHRcdDxTY3JvbGxMaW5rIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGQuc24pfSB0bz17J3Njcm9sbCcgKyBkLnNufSBzbW9vdGg9e3RydWV9IG9mZnNldD17LTEwMH0+XHJcblx0XHRcdFx0XHR7ZC5zbn1cclxuXHRcdFx0XHQ8L1Njcm9sbExpbms+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntsaXN0fTwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5cclxuaW50ZXJmYWNlIERldGFpbEl0ZW1zUHJvcHMge1xyXG5cdHNldEFjdGl2ZTogKGFjdGl2ZTogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IERldGFpbEl0ZW1zID0gKHByb3BzOiBEZXRhaWxJdGVtc1Byb3BzKSA9PiB7XHJcblx0Y29uc3Qge3NldEFjdGl2ZX0gPSBwcm9wcztcclxuXHRjb25zdCBpdGVtc0VscyA9IHVzZVJlZihbXSk7XHJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cdGNvbnN0IHNjcm9sbFVwT2Zmc2V0ID0gMzAwO1xyXG5cdGNvbnN0IHNjcm9sbERvd25PZmZzZXQgPSAzMDA7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0XHRjb25zdCBzY3JvbGxEaXIgPSBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wID8gJ1VQJyA6ICdET1dOJztcclxuXHRcdFx0Y29uc3Qgd2luZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblx0XHRcdGl0ZW1zRWxzLmN1cnJlbnQubWFwKChpdGVtRWwsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZWxUb3AgPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdFx0XHRjb25zdCBlbEJvdHRvbSA9IGl0ZW1FbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xyXG5cclxuXHRcdFx0XHRpZiAoc2Nyb2xsRGlyID09PSAnVVAnKSB7XHJcblx0XHRcdFx0XHRpZiAoZWxUb3AgPD0gc2Nyb2xsVXBPZmZzZXQgJiYgZWxUb3AgPiAtKGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxVcE9mZnNldCkpIHtcclxuXHRcdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoc2Nyb2xsRGlyID09PSAnRE9XTicpIHtcclxuXHRcdFx0XHRcdGlmIChlbEJvdHRvbSA+PSB3aW5kSGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCAmJiBlbEJvdHRvbSA8IHdpbmRIZWlnaHQgKyBpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCkge1xyXG5cdFx0XHRcdFx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cclxuXHQvL1RPRE8g7Iqk7YGs66Gk7J20IOyViOuztOydtOuptCDsiqTtgazroaQg7J2064+ZXHJcblx0Ly8gYW5pbWF0ZVNjcm9sbC5zY3JvbGxUbyhzbiAqIDEwMCwge1xyXG5cdC8vIFx0Y29udGFpbmVySWQ6ICdsaXN0RWwnLFxyXG5cdC8vIFx0c21vb3RoOiB0cnVlXHJcblx0Ly8gfSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgcmVmPXsoaXRlbUVsKSA9PiBpdGVtc0Vscy5jdXJyZW50W2Quc25dID0gaXRlbUVsfSBjbGFzc05hbWU9e2N4KCdkZXRhaWxJdGVtcycpfT5cclxuXHRcdFx0XHQ8RWxlbWVudCBrZXk9e2Quc259IG5hbWU9eydzY3JvbGwnICsgZC5zbn0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFNjcm9sbFRvcCA9ICgpID0+IHtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjeCgnc2Nyb2xsVG9wJyl9Lz5cclxuXHQpXHJcbn07XHJcblxyXG5cclxudHlwZSBTQ1JPTExfTU9ERSA9ICdTQ1JPTEwnIHwgJ0NMSUNLJztcclxuY29uc3QgU3RpY2t5U2Nyb2xsID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzY3JvbGxNb2RlLCBzZXRTY3JvbGxNb2RlXSA9IHVzZVN0YXRlPFNDUk9MTF9NT0RFPignU0NST0xMJyk7XHJcblx0Y29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdiYW5uZXInKX0vPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50c1dyYXAnKX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3N1bW1hcnknKX0vPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBpZD0nbGlzdEVsJyBjbGFzc05hbWU9e2N4KCdsaXN0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxMaXN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnZGV0YWlsJyl9PlxyXG5cdFx0XHRcdFx0XHRcdDxEZXRhaWxJdGVtc1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTY3JvbGxUb3AvPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5U2Nyb2xsO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==