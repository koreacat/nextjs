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
var scrollMode = 'SCROLL';

var DetailList = function DetailList(props) {
  var active = props.active,
      setActive = props.setActive;

  var handleClick = function handleClick(sn) {
    scrollMode = 'CLICK';
    setActive(sn); //스크롤 끝나면 스크롤 모드로 변경

    react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Events"].scrollEvent.register('end', function (to, element) {
      scrollMode = 'SCROLL';
    });
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
        lineNumber: 35,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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

  var onScroll = function onScroll() {
    if (scrollMode !== 'SCROLL') return;
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
  };

  var autoScroll = function autoScroll() {//액티브 된 스크롤이 안보이면 top으로 이동시키기
    // animateScroll.scrollTo(sn * 100, {
    // 	containerId: 'listEl',
    // 	smooth: true
    // });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    document.addEventListener('scroll', onScroll);
    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);
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
          lineNumber: 109,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
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
    lineNumber: 127,
    columnNumber: 3
  }, _this);
};

_c3 = ScrollTop;

var StickyScroll = function StickyScroll() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
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
                lineNumber: 143,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 3
  }, _this);
};

_s2(StickyScroll, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwic2Nyb2xsTW9kZSIsIkRldGFpbExpc3QiLCJwcm9wcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUNsaWNrIiwic24iLCJFdmVudHMiLCJzY3JvbGxFdmVudCIsInJlZ2lzdGVyIiwidG8iLCJlbGVtZW50IiwibGlzdCIsImRldGFpbERhdGEiLCJtYXAiLCJkIiwiRGV0YWlsSXRlbXMiLCJpdGVtc0VscyIsInVzZVJlZiIsImxhc3RTY3JvbGxUb3AiLCJzY3JvbGxVcE9mZnNldCIsInNjcm9sbERvd25PZmZzZXQiLCJvblNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxEaXIiLCJ3aW5kSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdXJyZW50IiwiaXRlbUVsIiwiaW5kZXgiLCJlbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsQm90dG9tIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0IiwiYXV0b1Njcm9sbCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXRlbXMiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsInNjcm9sbFRvIiwiU3RpY2t5U2Nyb2xsIiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNEZBQWhCLENBQVg7QUFHQSxJQUFJQyxVQUF1QixHQUFHLFFBQTlCOztBQU9BLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUND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QyxzQkFBTSxFQUFFTyxNQURUO0FBRUMseUJBQVMsRUFBRUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFTQztBQUFLLHFCQUFTLEVBQUVSLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsbUNBQ0MscUVBQUMsV0FBRDtBQUNDLHVCQUFTLEVBQUVRO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQXNCQyxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEwQkEsQ0E3QkQ7O0lBQU00QyxZOztNQUFBQSxZO0FBK0JTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGlja3lTY3JvbGwuYmZhYmY2NjAyODU4OWYzZGRiZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvc3RpY2t5U2Nyb2xsLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBkZXRhaWxEYXRhIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvZGV0YWlsRGF0YVwiO1xyXG5pbXBvcnQge0VsZW1lbnQsIExpbmsgYXMgU2Nyb2xsTGlua30gZnJvbSBcInJlYWN0LXNjcm9sbC9tb2R1bGVzXCI7XHJcbmltcG9ydCB7YW5pbWF0ZVNjcm9sbCwgRXZlbnRzfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG50eXBlIFNDUk9MTF9NT0RFID0gJ1NDUk9MTCcgfCAnQ0xJQ0snO1xyXG5sZXQgc2Nyb2xsTW9kZTogU0NST0xMX01PREUgPSAnU0NST0xMJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaXN0UHJvcHMge1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKHNuOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbExpc3RQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHthY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoc246IG51bWJlcikgPT4ge1xyXG5cdFx0c2Nyb2xsTW9kZSA9ICdDTElDSyc7XHJcblx0XHRzZXRBY3RpdmUoc24pO1xyXG5cclxuXHRcdC8v7Iqk7YGs66GkIOuBneuCmOuptCDsiqTtgazroaQg66qo65Oc66GcIOuzgOqyvVxyXG5cdFx0RXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKCdlbmQnLCAodG8sIGVsZW1lbnQpID0+IHtcclxuXHRcdFx0c2Nyb2xsTW9kZSA9ICdTQ1JPTEwnO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkga2V5PXtkLnNufSBjbGFzc05hbWU9e2N4KGQuc24gPT09IGFjdGl2ZSAmJiAnYWN0aXZlJyl9PlxyXG5cdFx0XHRcdDxTY3JvbGxMaW5rXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhkLnNuKX1cclxuXHRcdFx0XHRcdHRvPXsnc2Nyb2xsJyArIGQuc259XHJcblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRvZmZzZXQ9ey0xMDB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2Quc259XHJcblx0XHRcdFx0PC9TY3JvbGxMaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57bGlzdH08Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxJdGVtc1Byb3BzIHtcclxuXHRzZXRBY3RpdmU6IChhY3RpdmU6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBEZXRhaWxJdGVtcyA9IChwcm9wczogRGV0YWlsSXRlbXNQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblx0Y29uc3QgaXRlbXNFbHMgPSB1c2VSZWYoW10pO1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHRjb25zdCBzY3JvbGxVcE9mZnNldCA9IDMwMDtcclxuXHRjb25zdCBzY3JvbGxEb3duT2Zmc2V0ID0gMzAwO1xyXG5cclxuXHRjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuXHRcdGlmIChzY3JvbGxNb2RlICE9PSAnU0NST0xMJykgcmV0dXJuO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRjb25zdCBzY3JvbGxEaXIgPSBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wID8gJ1VQJyA6ICdET1dOJztcclxuXHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0aXRlbXNFbHMuY3VycmVudC5tYXAoKGl0ZW1FbCwgaW5kZXgpID0+IHtcclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdFx0Y29uc3QgZWxCb3R0b20gPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHJcblx0XHRcdGlmIChzY3JvbGxEaXIgPT09ICdVUCcpIHtcclxuXHRcdFx0XHRpZiAoZWxUb3AgPD0gc2Nyb2xsVXBPZmZzZXQgJiYgZWxUb3AgPiAtKGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxVcE9mZnNldCkpIHtcclxuXHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbERpciA9PT0gJ0RPV04nKSB7XHJcblx0XHRcdFx0aWYgKGVsQm90dG9tID49IHdpbmRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0ICYmIGVsQm90dG9tIDwgd2luZEhlaWdodCArIGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0KSB7XHJcblx0XHRcdFx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYXV0b1Njcm9sbCA9ICgpID0+IHtcclxuXHRcdC8v7JWh7Yuw67iMIOuQnCDsiqTtgazroaTsnbQg7JWI67O07J2066m0IHRvcOycvOuhnCDsnbTrj5nsi5ztgqTquLBcclxuXHRcdFxyXG5cdFx0Ly8gYW5pbWF0ZVNjcm9sbC5zY3JvbGxUbyhzbiAqIDEwMCwge1xyXG5cdFx0Ly8gXHRjb250YWluZXJJZDogJ2xpc3RFbCcsXHJcblx0XHQvLyBcdHNtb290aDogdHJ1ZVxyXG5cdFx0Ly8gfSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cdFx0fSlcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYga2V5PXtkLnNufSByZWY9eyhpdGVtRWwpID0+IGl0ZW1zRWxzLmN1cnJlbnRbZC5zbl0gPSBpdGVtRWx9IGNsYXNzTmFtZT17Y3goJ2RldGFpbEl0ZW1zJyl9PlxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9eydzY3JvbGwnICsgZC5zbn0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdzY3JvbGxUb3AnKX0vPlxyXG5cdClcclxufTtcclxuXHJcbmNvbnN0IFN0aWNreVNjcm9sbCA9ICgpID0+IHtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2Jhbm5lcicpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzV3JhcCcpfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3VtbWFyeScpfS8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdsaXN0RWwnIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERldGFpbExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkZXRhaWwnKX0+XHJcblx0XHRcdFx0XHRcdFx0PERldGFpbEl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFNjcm9sbFRvcC8+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lTY3JvbGw7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9