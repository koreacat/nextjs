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
  var itemEls = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(new Array());
  var items = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_5__["default"].map(_s2(function (d) {
    _s2();

    if (d.sn === 0) {
      Object(_src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__["useScrollDir"])({
        el: itemEls[d.sn],
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
        ref: function ref(el) {
          return itemEls.current[d.sn] = el;
        },
        className: cx('title'),
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: d.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, _this)]
    }, d.sn, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, _this);
  }, "M3trOI3Oxp6jL1ARzzupiBlmUg0=", false, function () {
    return [_src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__["useScrollDir"]];
  }));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items
  }, void 0, false);
};

_s3(DetailItems, "j4zDiwpg8aZ7A9FQ0roZpuTjEG0=");

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
    lineNumber: 87,
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
      lineNumber: 96,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_contents__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('wrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
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
                lineNumber: 103,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwibGlFbCIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwic24iLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsVG8iLCJjb250YWluZXJJZCIsInNtb290aCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsIkRldGFpbEl0ZW1zIiwiaXRlbUVscyIsIkFycmF5IiwiaXRlbXMiLCJ1c2VTY3JvbGxEaXIiLCJlbCIsInNjcm9sbFVwVG9wIiwib25TY3JvbGxVcCIsImN1cnJlbnQiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIndpbmRvdyIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw0RkFBaEIsQ0FBWDs7QUFRQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQTRCO0FBQUE7O0FBQUEsTUFDdkNDLE1BRHVDLEdBQ2xCRCxLQURrQixDQUN2Q0MsTUFEdUM7QUFBQSxNQUMvQkMsU0FEK0IsR0FDbEJGLEtBRGtCLENBQy9CRSxTQUQrQjtBQUU5QyxNQUFNQyxJQUFJLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxFQUFELEVBQWdCO0FBQ25DSixhQUFTLENBQUNJLEVBQUQsQ0FBVCxDQURtQyxDQUduQzs7QUFDQUMsc0VBQWEsQ0FBQ0MsUUFBZCxDQUF1QkYsRUFBRSxHQUFHLEdBQTVCLEVB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dEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBMEJBLENBN0JEOztJQUFNeUIsWTs7TUFBQUEsWTtBQStCU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RpY2t5U2Nyb2xsLjg3MDg2ZTZhOTE3MGJjM2QzY2I3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL3N0aWNreVNjcm9sbC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgQ29udGVudHMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb250ZW50c1wiO1xyXG5pbXBvcnQgZGV0YWlsRGF0YSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL2RldGFpbERhdGFcIjtcclxuaW1wb3J0IHtFbGVtZW50LCBMaW5rIGFzIFNjcm9sbExpbmt9IGZyb20gXCJyZWFjdC1zY3JvbGwvbW9kdWxlc1wiO1xyXG5pbXBvcnQge2FuaW1hdGVTY3JvbGx9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTY3JvbGxEaXJ9IGZyb20gXCIuLi9zcmMvdXRpbC9ob29rcy91c2VTY3JvbGxcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5cclxuaW50ZXJmYWNlIERldGFpbExpc3RQcm9wcyB7XHJcblx0YWN0aXZlOiBudW1iZXI7XHJcblx0c2V0QWN0aXZlOiAoc246IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsTGlzdCA9IChwcm9wczogRGV0YWlsTGlzdFByb3BzKSA9PiB7XHJcblx0Y29uc3Qge2FjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cdGNvbnN0IGxpRWwgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKHNuOiBudW1iZXIpID0+IHtcclxuXHRcdHNldEFjdGl2ZShzbik7XHJcblxyXG5cdFx0Ly9UT0RPIHRvWSDslbzrp6TsnoRcclxuXHRcdGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8oc24gKiAxMDAsIHtcclxuXHRcdFx0Y29udGFpbmVySWQ6ICdsaXN0RWwnLFxyXG5cdFx0XHRzbW9vdGg6IHRydWVcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxpc3QgPSBkZXRhaWxEYXRhLm1hcCgoZCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGxpIHJlZj17bGlFbH0ga2V5PXtkLnNufSBjbGFzc05hbWU9e2N4KGQuc24gPT09IGFjdGl2ZSAmJiAnYWN0aXZlJyl9PlxyXG5cdFx0XHRcdDxTY3JvbGxMaW5rIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGQuc24pfSB0bz17J3Njcm9sbCcgKyBkLnNufSBzbW9vdGg9e3RydWV9IG9mZnNldD17LTEwMH0+XHJcblx0XHRcdFx0XHR7ZC5zbn1cclxuXHRcdFx0XHQ8L1Njcm9sbExpbms+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntsaXN0fTwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5cclxuaW50ZXJmYWNlIERldGFpbEl0ZW1zUHJvcHMge1xyXG5cdHNldEFjdGl2ZTogKGFjdGl2ZTogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IERldGFpbEl0ZW1zID0gKHByb3BzOiBEZXRhaWxJdGVtc1Byb3BzKSA9PiB7XHJcblx0Y29uc3Qge3NldEFjdGl2ZX0gPSBwcm9wcztcclxuXHRjb25zdCBpdGVtRWxzID0gdXNlUmVmKG5ldyBBcnJheSgpKTtcclxuXHJcblx0Y29uc3QgaXRlbXMgPSBkZXRhaWxEYXRhLm1hcCgoZCkgPT4ge1xyXG5cclxuXHRcdGlmKGQuc24gPT09IDApe1xyXG5cdFx0XHR1c2VTY3JvbGxEaXIoe1xyXG5cdFx0XHRcdGVsOiBpdGVtRWxzW2Quc25dLFxyXG5cdFx0XHRcdHNjcm9sbFVwVG9wOiAwLFxyXG5cdFx0XHRcdG9uU2Nyb2xsVXA6ICgpID0+IHNldEFjdGl2ZShkLnNuKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8RWxlbWVudCBrZXk9e2Quc259IG5hbWU9eydzY3JvbGwnICsgZC5zbn0gY2xhc3NOYW1lPXtjeCgnZGV0YWlsSXRlbXMnKX0+XHJcblx0XHRcdFx0PHNwYW4gcmVmPXsoZWwpID0+IGl0ZW1FbHMuY3VycmVudFtkLnNuXSA9IGVsfSBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0PGRpdj57ZC5jb250ZW50c308L2Rpdj5cclxuXHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57aXRlbXN9PC8+XHJcblx0KTtcclxufTtcclxuXHJcblxyXG5jb25zdCBTY3JvbGxUb3AgPSAoKSA9PiB7XHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17Y3goJ3Njcm9sbFRvcCcpfS8+XHJcblx0KVxyXG59O1xyXG5cclxuY29uc3QgU3RpY2t5U2Nyb2xsID0gKCkgPT4ge1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFubmVyJyl9Lz5cclxuXHRcdFx0PENvbnRlbnRzPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3VtbWFyeScpfS8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdsaXN0RWwnIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERldGFpbExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkZXRhaWwnKX0+XHJcblx0XHRcdFx0XHRcdFx0PERldGFpbEl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0NvbnRlbnRzPlxyXG5cdFx0XHQ8U2Nyb2xsVG9wLz5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreVNjcm9sbDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=