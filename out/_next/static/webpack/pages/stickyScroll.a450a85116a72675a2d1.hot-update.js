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
  var listEls = props.listEls,
      active = props.active,
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
      ref: function ref(listEl) {
        return listEls.current[d.sn] = listEl;
      },
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

_c = DetailList;

var DetailItems = function DetailItems(props) {
  _s();

  var listEls = props.listEls,
      itemsEls = props.itemsEls,
      active = props.active,
      setActive = props.setActive;
  var lastScrollTop = 0;
  var scrollUpOffset = 300;
  var scrollDownOffset = 300;

  var onScroll = function onScroll() {
    react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["animateScroll"].scrollTo(active * 100, {
      containerId: 'listWrap',
      smooth: true
    });
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
          lineNumber: 108,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items
  }, void 0, false);
};

_s(DetailItems, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
    lineNumber: 126,
    columnNumber: 3
  }, _this);
};

_c3 = ScrollTop;

var StickyScroll = function StickyScroll() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  var listEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  var itemsEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('contents'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "listWrap",
            className: cx('list'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailList, {
                listEls: listEls,
                active: active,
                setActive: setActive
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              listEls: listEls,
              itemsEls: itemsEls,
              active: active,
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 3
  }, _this);
};

_s2(StickyScroll, "d/mYdsWffD1DH+Q5HhX2wLIlhCU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwic2Nyb2xsTW9kZSIsIkRldGFpbExpc3QiLCJwcm9wcyIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsInNuIiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJEZXRhaWxJdGVtcyIsIml0ZW1zRWxzIiwibGFzdFNjcm9sbFRvcCIsInNjcm9sbFVwT2Zmc2V0Iiwic2Nyb2xsRG93bk9mZnNldCIsIm9uU2Nyb2xsIiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbFRvIiwiY29udGFpbmVySWQiLCJzbW9vdGgiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsRGlyIiwid2luZEhlaWdodCIsImlubmVySGVpZ2h0IiwiaXRlbUVsIiwiaW5kZXgiLCJlbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsQm90dG9tIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsImNvbnRlbnRzIiwiU2Nyb2xsVG9wIiwiU3RpY2t5U2Nyb2xsIiwidXNlU3RhdGUiLCJ1c2VSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNEZBQWhCLENBQVg7QUFHQSxJQUFJQyxVQUF1QixHQUFH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O0FBOEJBLENBbkNEOztJQUFNOEMsWTs7TUFBQUEsWTtBQXFDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RpY2t5U2Nyb2xsLmE0NTBhODUxMTZhNzI2NzVhMmQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL3N0aWNreVNjcm9sbC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZGV0YWlsRGF0YSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL2RldGFpbERhdGFcIjtcclxuaW1wb3J0IHtFbGVtZW50LCBMaW5rIGFzIFNjcm9sbExpbmt9IGZyb20gXCJyZWFjdC1zY3JvbGwvbW9kdWxlc1wiO1xyXG5pbXBvcnQge2FuaW1hdGVTY3JvbGwsIEV2ZW50c30gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQge1JlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG50eXBlIFNDUk9MTF9NT0RFID0gJ1NDUk9MTCcgfCAnQ0xJQ0snO1xyXG5sZXQgc2Nyb2xsTW9kZTogU0NST0xMX01PREUgPSAnU0NST0xMJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaXN0UHJvcHMge1xyXG5cdGxpc3RFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKHNuOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbExpc3RQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtsaXN0RWxzLCBhY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoc246IG51bWJlcikgPT4ge1xyXG5cdFx0c2Nyb2xsTW9kZSA9ICdDTElDSyc7XHJcblx0XHRzZXRBY3RpdmUoc24pO1xyXG5cclxuXHRcdC8v7Iqk7YGs66GkIOuBneuCmOuptCDsiqTtgazroaQg66qo65Oc66GcIOuzgOqyvVxyXG5cdFx0RXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKCdlbmQnLCAodG8sIGVsZW1lbnQpID0+IHtcclxuXHRcdFx0c2Nyb2xsTW9kZSA9ICdTQ1JPTEwnO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkga2V5PXtkLnNufSByZWY9eyhsaXN0RWwpID0+IGxpc3RFbHMuY3VycmVudFtkLnNuXSA9IGxpc3RFbH0gY2xhc3NOYW1lPXtjeChkLnNuID09PSBhY3RpdmUgJiYgJ2FjdGl2ZScpfT5cclxuXHRcdFx0XHQ8U2Nyb2xsTGlua1xyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZC5zbil9XHJcblx0XHRcdFx0XHR0bz17J3Njcm9sbCcgKyBkLnNufVxyXG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0b2Zmc2V0PXstMTAwfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtkLnNufVxyXG5cdFx0XHRcdDwvU2Nyb2xsTGluaz5cclxuXHRcdFx0PC9saT5cclxuXHRcdClcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+e2xpc3R9PC8+XHJcblx0KTtcclxufTtcclxuXHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsSXRlbXNQcm9wcyB7XHJcblx0bGlzdEVsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0aXRlbXNFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKGFjdGl2ZTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxJdGVtcyA9IChwcm9wczogRGV0YWlsSXRlbXNQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtsaXN0RWxzLCBpdGVtc0VscywgYWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cdGNvbnN0IHNjcm9sbFVwT2Zmc2V0ID0gMzAwO1xyXG5cdGNvbnN0IHNjcm9sbERvd25PZmZzZXQgPSAzMDA7XHJcblxyXG5cdGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG5cdFx0YW5pbWF0ZVNjcm9sbC5zY3JvbGxUbyhhY3RpdmUgKiAxMDAsIHtcclxuXHRcdFx0Y29udGFpbmVySWQ6ICdsaXN0V3JhcCcsXHJcblx0XHRcdHNtb290aDogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGlmIChzY3JvbGxNb2RlICE9PSAnU0NST0xMJykgcmV0dXJuO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRjb25zdCBzY3JvbGxEaXIgPSBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wID8gJ1VQJyA6ICdET1dOJztcclxuXHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0aXRlbXNFbHMuY3VycmVudC5tYXAoKGl0ZW1FbCwgaW5kZXgpID0+IHtcclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdFx0Y29uc3QgZWxCb3R0b20gPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHJcblx0XHRcdGlmIChzY3JvbGxEaXIgPT09ICdVUCcpIHtcclxuXHRcdFx0XHRpZiAoZWxUb3AgPD0gc2Nyb2xsVXBPZmZzZXQgJiYgZWxUb3AgPiAtKGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxVcE9mZnNldCkpIHtcclxuXHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbERpciA9PT0gJ0RPV04nKSB7XHJcblx0XHRcdFx0aWYgKGVsQm90dG9tID49IHdpbmRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0ICYmIGVsQm90dG9tIDwgd2luZEhlaWdodCArIGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0KSB7XHJcblx0XHRcdFx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cdFx0fSlcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYga2V5PXtkLnNufSByZWY9eyhpdGVtRWwpID0+IGl0ZW1zRWxzLmN1cnJlbnRbZC5zbl0gPSBpdGVtRWx9IGNsYXNzTmFtZT17Y3goJ2RldGFpbEl0ZW1zJyl9PlxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9eydzY3JvbGwnICsgZC5zbn0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdzY3JvbGxUb3AnKX0vPlxyXG5cdClcclxufTtcclxuXHJcbmNvbnN0IFN0aWNreVNjcm9sbCA9ICgpID0+IHtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgbGlzdEVscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KFtdKTtcclxuXHRjb25zdCBpdGVtc0VscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFubmVyJyl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHNXcmFwJyl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzdW1tYXJ5Jyl9Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgaWQ9J2xpc3RXcmFwJyBjbGFzc05hbWU9e2N4KCdsaXN0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxMaXN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3RFbHM9e2xpc3RFbHN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnZGV0YWlsJyl9PlxyXG5cdFx0XHRcdFx0XHRcdDxEZXRhaWxJdGVtc1xyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zRWxzPXtpdGVtc0Vsc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTY3JvbGxUb3AvPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5U2Nyb2xsO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==