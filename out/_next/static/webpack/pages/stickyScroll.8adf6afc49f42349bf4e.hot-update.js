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

  var onAutoScroll = function onAutoScroll() {
    //1. 액티브 된 요소의 위치 구하기
    listEls.current.map(function (listEl, index) {
      //2. 액티브 된 요소의 위치가 음수값이거나 스크롤 el의 높이값보다 크면 액티브된 요소를 top 으로 이동
      if (active === index) {
        react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["animateScroll"].scrollTo(index * 100, {
          containerId: 'listEl',
          smooth: true
        });
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    document.addEventListener('scroll', onScroll);
    document.addEventListener('scroll', onAutoScroll);
    return function () {
      document.removeEventListener('scroll', onScroll);
      document.addEventListener('scroll', onAutoScroll);
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
          lineNumber: 118,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
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
    lineNumber: 136,
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
      lineNumber: 147,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('contents'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "listEl",
            className: cx('list'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailList, {
                listEls: listEls,
                active: active,
                setActive: setActive
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
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
              lineNumber: 162,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 146,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwic2Nyb2xsTW9kZSIsIkRldGFpbExpc3QiLCJwcm9wcyIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsInNuIiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJEZXRhaWxJdGVtcyIsIml0ZW1zRWxzIiwibGFzdFNjcm9sbFRvcCIsInNjcm9sbFVwT2Zmc2V0Iiwic2Nyb2xsRG93bk9mZnNldCIsIm9uU2Nyb2xsIiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbERpciIsIndpbmRIZWlnaHQiLCJpbm5lckhlaWdodCIsIml0ZW1FbCIsImluZGV4IiwiZWxUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJlbEJvdHRvbSIsImJvdHRvbSIsIm9mZnNldEhlaWdodCIsIm9uQXV0b1Njcm9sbCIsImFuaW1hdGVTY3JvbGwiLCJzY3JvbGxUbyIsImNvbnRhaW5lcklkIiwic21vb3RoIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsImNvbnRlbnRzIiwiU2Nyb2xsVG9wIiwiU3RpY2t5U2Nyb2xsIiwidXNlU3RhdGUiLCJ1c2VSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNEZBQWhCLENBQVg7QUFHQSxJ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QU8sRUFBRU8sT0FEVjtBQUVDLHNCQUFRLEVBQUVpQixRQUZYO0FBR0Msb0JBQU0sRUFBRWhCLE1BSFQ7QUFJQyx1QkFBUyxFQUFFQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUEwQkMscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBOEJBLENBbkNEOztJQUFNK0MsWTs7TUFBQUEsWTtBQXFDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RpY2t5U2Nyb2xsLjhhZGY2YWZjNDlmNDIzNDliZjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL3N0aWNreVNjcm9sbC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZGV0YWlsRGF0YSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL2RldGFpbERhdGFcIjtcclxuaW1wb3J0IHtFbGVtZW50LCBMaW5rIGFzIFNjcm9sbExpbmt9IGZyb20gXCJyZWFjdC1zY3JvbGwvbW9kdWxlc1wiO1xyXG5pbXBvcnQge2FuaW1hdGVTY3JvbGwsIEV2ZW50c30gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQge1JlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG50eXBlIFNDUk9MTF9NT0RFID0gJ1NDUk9MTCcgfCAnQ0xJQ0snO1xyXG5sZXQgc2Nyb2xsTW9kZTogU0NST0xMX01PREUgPSAnU0NST0xMJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaXN0UHJvcHMge1xyXG5cdGxpc3RFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKHNuOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbExpc3RQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtsaXN0RWxzLCBhY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoc246IG51bWJlcikgPT4ge1xyXG5cdFx0c2Nyb2xsTW9kZSA9ICdDTElDSyc7XHJcblx0XHRzZXRBY3RpdmUoc24pO1xyXG5cclxuXHRcdC8v7Iqk7YGs66GkIOuBneuCmOuptCDsiqTtgazroaQg66qo65Oc66GcIOuzgOqyvVxyXG5cdFx0RXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKCdlbmQnLCAodG8sIGVsZW1lbnQpID0+IHtcclxuXHRcdFx0c2Nyb2xsTW9kZSA9ICdTQ1JPTEwnO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkga2V5PXtkLnNufSByZWY9eyhsaXN0RWwpID0+IGxpc3RFbHMuY3VycmVudFtkLnNuXSA9IGxpc3RFbH0gY2xhc3NOYW1lPXtjeChkLnNuID09PSBhY3RpdmUgJiYgJ2FjdGl2ZScpfT5cclxuXHRcdFx0XHQ8U2Nyb2xsTGlua1xyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZC5zbil9XHJcblx0XHRcdFx0XHR0bz17J3Njcm9sbCcgKyBkLnNufVxyXG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0b2Zmc2V0PXstMTAwfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtkLnNufVxyXG5cdFx0XHRcdDwvU2Nyb2xsTGluaz5cclxuXHRcdFx0PC9saT5cclxuXHRcdClcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+e2xpc3R9PC8+XHJcblx0KTtcclxufTtcclxuXHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsSXRlbXNQcm9wcyB7XHJcblx0bGlzdEVsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0aXRlbXNFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKGFjdGl2ZTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxJdGVtcyA9IChwcm9wczogRGV0YWlsSXRlbXNQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtsaXN0RWxzLCBpdGVtc0VscywgYWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cdGNvbnN0IHNjcm9sbFVwT2Zmc2V0ID0gMzAwO1xyXG5cdGNvbnN0IHNjcm9sbERvd25PZmZzZXQgPSAzMDA7XHJcblxyXG5cdGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG5cdFx0aWYgKHNjcm9sbE1vZGUgIT09ICdTQ1JPTEwnKSByZXR1cm47XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdGNvbnN0IHNjcm9sbERpciA9IHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3AgPyAnVVAnIDogJ0RPV04nO1xyXG5cdFx0Y29uc3Qgd2luZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblx0XHRpdGVtc0Vscy5jdXJyZW50Lm1hcCgoaXRlbUVsLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zdCBlbFRvcCA9IGl0ZW1FbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cdFx0XHRjb25zdCBlbEJvdHRvbSA9IGl0ZW1FbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xyXG5cclxuXHRcdFx0aWYgKHNjcm9sbERpciA9PT0gJ1VQJykge1xyXG5cdFx0XHRcdGlmIChlbFRvcCA8PSBzY3JvbGxVcE9mZnNldCAmJiBlbFRvcCA+IC0oaXRlbUVsLm9mZnNldEhlaWdodCAtIHNjcm9sbFVwT2Zmc2V0KSkge1xyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsRGlyID09PSAnRE9XTicpIHtcclxuXHRcdFx0XHRpZiAoZWxCb3R0b20gPj0gd2luZEhlaWdodCAtIHNjcm9sbERvd25PZmZzZXQgJiYgZWxCb3R0b20gPCB3aW5kSGVpZ2h0ICsgaXRlbUVsLm9mZnNldEhlaWdodCAtIHNjcm9sbERvd25PZmZzZXQpIHtcclxuXHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsYXN0U2Nyb2xsVG9wID0gKHNjcm9sbFRvcCA8PSAwID8gMCA6IHNjcm9sbFRvcCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkF1dG9TY3JvbGwgPSAoKSA9PiB7XHJcblx0XHQvLzEuIOyVoe2LsOu4jCDrkJwg7JqU7IaM7J2YIOychOy5mCDqtaztlZjquLBcclxuXHRcdGxpc3RFbHMuY3VycmVudC5tYXAoKGxpc3RFbCwgaW5kZXgpID0+IHtcclxuXHRcdFx0Ly8yLiDslaHti7DruIwg65CcIOyalOyGjOydmCDsnITsuZjqsIAg7J2M7IiY6rCS7J206rGw64KYIOyKpO2BrOuhpCBlbOydmCDrhpLsnbTqsJLrs7Tri6Qg7YGs66m0IOyVoe2LsOu4jOuQnCDsmpTshozrpbwgdG9wIOycvOuhnCDsnbTrj5lcclxuXHRcdFx0aWYgKGFjdGl2ZSA9PT0gaW5kZXgpIHtcclxuXHRcdFx0XHRhbmltYXRlU2Nyb2xsLnNjcm9sbFRvKGluZGV4ICogMTAwLCB7XHJcblx0XHRcdFx0XHRjb250YWluZXJJZDogJ2xpc3RFbCcsXHJcblx0XHRcdFx0XHRzbW9vdGg6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQXV0b1Njcm9sbCk7XHJcblxyXG5cdFx0cmV0dXJuICgoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25BdXRvU2Nyb2xsKTtcclxuXHRcdH0pXHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBpdGVtcyA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGtleT17ZC5zbn0gcmVmPXsoaXRlbUVsKSA9PiBpdGVtc0Vscy5jdXJyZW50W2Quc25dID0gaXRlbUVsfSBjbGFzc05hbWU9e2N4KCdkZXRhaWxJdGVtcycpfT5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPXsnc2Nyb2xsJyArIGQuc259PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e2Quc259PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGRpdj57ZC5jb250ZW50c308L2Rpdj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57aXRlbXN9PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFNjcm9sbFRvcCA9ICgpID0+IHtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjeCgnc2Nyb2xsVG9wJyl9Lz5cclxuXHQpXHJcbn07XHJcblxyXG5jb25zdCBTdGlja3lTY3JvbGwgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IGxpc3RFbHMgPSB1c2VSZWY8QXJyYXk8SFRNTEVsZW1lbnQ+PihbXSk7XHJcblx0Y29uc3QgaXRlbXNFbHMgPSB1c2VSZWY8QXJyYXk8SFRNTEVsZW1lbnQ+PihbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2Jhbm5lcicpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzV3JhcCcpfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3VtbWFyeScpfS8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdsaXN0RWwnIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERldGFpbExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkZXRhaWwnKX0+XHJcblx0XHRcdFx0XHRcdFx0PERldGFpbEl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0RWxzPXtsaXN0RWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXNFbHM9e2l0ZW1zRWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFNjcm9sbFRvcC8+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lTY3JvbGw7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9