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
/* harmony import */ var _src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/circleProgress */ "./src/components/circleProgress/index.tsx");
/* harmony import */ var _src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/util/getInteger */ "./src/util/getInteger.ts");



var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\stickyScroll.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();










var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var DetailList = function DetailList(props) {
  var setScrollMode = props.setScrollMode,
      listEls = props.listEls,
      active = props.active,
      setActive = props.setActive;

  var handleClick = function handleClick(sn) {
    setScrollMode('CLICK');
    setActive(sn); //스크롤 끝나면 스크롤 모드로 변경

    react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Events"].scrollEvent.register('end', function (to, element) {
      setScrollMode('SCROLL');
    });
  };

  var list = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (d) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      ref: function ref(listEl) {
        return listEls.current[d.sn] = listEl;
      },
      className: cx(d.sn === active && 'active'),
      style: {
        height: "calc(100px + ".concat(d.sn * 20, "px)")
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Element"], {
        name: 'detailList' + d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        onClick: function onClick() {
          return handleClick(d.sn);
        },
        to: 'scroll' + d.sn,
        smooth: true,
        offset: -100,
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this)]
    }, d.sn, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
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

  var scrollMode = props.scrollMode,
      listWrapEl = props.listWrapEl,
      listEls = props.listEls,
      itemsEls = props.itemsEls,
      active = props.active,
      setActive = props.setActive;
  var lastScrollTop = 0;

  var onScroll = function onScroll() {
    if (scrollMode !== 'SCROLL') return;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
    var windHeight = window.innerHeight;
    var scrollUpOffset = windHeight * 0.4;
    var scrollDownOffset = 300;
    itemsEls.current.map(function (itemEl, index) {
      if (active === index) return;
      var elTop = itemEl === null || itemEl === void 0 ? void 0 : itemEl.getBoundingClientRect().top;
      var elBottom = itemEl === null || itemEl === void 0 ? void 0 : itemEl.getBoundingClientRect().bottom;

      if (scrollDir === 'UP') {
        if (elTop <= scrollUpOffset && elTop > -(itemEl.offsetHeight - scrollUpOffset)) {
          setActive(index);

          if (listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {
            // animateScroll.scrollTo(index * 100, {
            // 	containerId: 'listWrap',
            // 	smooth: false,
            // 	ignoreCancelEvents:true
            // });
            react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["scroller"].scrollTo('', {
              containerId: 'listWrap',
              smooth: false,
              ignoreCancelEvents: true
            });
          }
        }
      } else if (scrollDir === 'DOWN') {
        if (elBottom >= windHeight - scrollDownOffset && elBottom < windHeight + itemEl.offsetHeight - scrollDownOffset) {
          setActive(index);

          if (listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {// animateScroll.scrollTo(index * 100, {
            // 	containerId: 'listWrap',
            // 	smooth: false,
            // 	ignoreCancelEvents:true
            // });
          }
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
  }, [active, scrollMode]);
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
          lineNumber: 131,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            padding: '20px 0'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'YELLOW',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'YELLOW'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'LIME',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'LIME'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'GREEN',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'GREEN'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'SKY',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'SKY'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'BLUE',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'BLUE'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
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
    lineNumber: 156,
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

  var listWrapEl = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var listEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  var itemsEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('contents'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            ref: listWrapEl,
            id: "listWrap",
            className: cx('list'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailList, {
                setScrollMode: setScrollMode,
                listEls: listEls,
                active: active,
                setActive: setActive
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              scrollMode: scrollMode,
              listWrapEl: listWrapEl,
              listEls: listEls,
              itemsEls: itemsEls,
              active: active,
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 3
  }, _this);
};

_s2(StickyScroll, "Ck13/ae1PcGlTFeW8X8HpY76AKY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwic2V0U2Nyb2xsTW9kZSIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsInNuIiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJEZXRhaWxJdGVtcyIsInNjcm9sbE1vZGUiLCJsaXN0V3JhcEVsIiwiaXRlbXNFbHMiLCJsYXN0U2Nyb2xsVG9wIiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsRGlyIiwid2luZEhlaWdodCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsVXBPZmZzZXQiLCJzY3JvbGxEb3duT2Zmc2V0IiwiaXRlbUVsIiwiaW5kZXgiLCJlbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsQm90dG9tIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsZXIiLCJzY3JvbGxUbyIsImNvbnRhaW5lcklkIiwic21vb3RoIiwiaWdub3JlQ2FuY2VsRXZlbnRzIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsImdldEludGVnZXIiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIiwidXNlUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUUsQ0FBQyxNQUFELENBQWpEO0FBQUEsbUNBQ0M7QUFBQSxxQ0FDQyxxRUFBQyxVQUFEO0FBQ0MsNkJBQWEsRUFBRU0sYUFEaEI7QUFFQyx1QkFBTyxFQUFFQyxPQUZWO0FBR0Msc0JBQU0sRUFBRUMsTUFIVDtBQUlDLHlCQUFTLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBV0M7QUFBSyxxQkFBUyxFQUFFVCxFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUFBLG1DQUNDLHFFQUFDLFdBQUQ7QUFDQyx3QkFBVSxFQUFFeUIsVUFEYjtBQUVDLHdCQUFVLEVBQUVDLFVBRmI7QUFHQyxxQkFBTyxFQUFFbkIsT0FIVjtBQUlDLHNCQUFRLEVBQUVvQixRQUpYO0FBS0Msb0JBQU0sRUFBRW5CLE1BTFQ7QUFNQyx1QkFBUyxFQUFFQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUE2QkMscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBaUNBLENBeENEOztJQUFNdUQsWTs7TUFBQUEsWTtBQTBDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RpY2t5U2Nyb2xsLmEwYTYxOGRiNjVlYzlkMzM5OTAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL3N0aWNreVNjcm9sbC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZGV0YWlsRGF0YSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL2RldGFpbERhdGFcIjtcclxuaW1wb3J0IHtFbGVtZW50LCBMaW5rIGFzIFNjcm9sbExpbmt9IGZyb20gXCJyZWFjdC1zY3JvbGwvbW9kdWxlc1wiO1xyXG5pbXBvcnQge2FuaW1hdGVTY3JvbGwsIEV2ZW50cywgc2Nyb2xsZXJ9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHtSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaXJjbGVQcm9ncmVzcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY2lyY2xlUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHtnZXRJbnRlZ2VyfSBmcm9tIFwiLi4vc3JjL3V0aWwvZ2V0SW50ZWdlclwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbnR5cGUgU0NST0xMX01PREUgPSAnU0NST0xMJyB8ICdDTElDSyc7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsTGlzdFByb3BzIHtcclxuXHRzZXRTY3JvbGxNb2RlOiAoc2Nyb2xsTW9kZTogU0NST0xMX01PREUpID0+IHZvaWQ7XHJcblx0bGlzdEVsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0YWN0aXZlOiBudW1iZXI7XHJcblx0c2V0QWN0aXZlOiAoc246IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsTGlzdCA9IChwcm9wczogRGV0YWlsTGlzdFByb3BzKSA9PiB7XHJcblx0Y29uc3Qge3NldFNjcm9sbE1vZGUsIGxpc3RFbHMsIGFjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChzbjogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRTY3JvbGxNb2RlKCdDTElDSycpO1xyXG5cdFx0c2V0QWN0aXZlKHNuKTtcclxuXHJcblx0XHQvL+yKpO2BrOuhpCDrgZ3rgpjrqbQg7Iqk7YGs66GkIOuqqOuTnOuhnCDrs4Dqsr1cclxuXHRcdEV2ZW50cy5zY3JvbGxFdmVudC5yZWdpc3RlcignZW5kJywgKHRvLCBlbGVtZW50KSA9PiB7XHJcblx0XHRcdHNldFNjcm9sbE1vZGUoJ1NDUk9MTCcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkga2V5PXtkLnNufSByZWY9eyhsaXN0RWwpID0+IGxpc3RFbHMuY3VycmVudFtkLnNuXSA9IGxpc3RFbH0gY2xhc3NOYW1lPXtjeChkLnNuID09PSBhY3RpdmUgJiYgJ2FjdGl2ZScpfSBzdHlsZT17e2hlaWdodDogYGNhbGMoMTAwcHggKyAke2Quc24gKiAyMH1weClgfX0+XHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT17J2RldGFpbExpc3QnICsgZC5zbn0vPlxyXG5cdFx0XHRcdDxTY3JvbGxMaW5rXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhkLnNuKX1cclxuXHRcdFx0XHRcdHRvPXsnc2Nyb2xsJyArIGQuc259XHJcblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRvZmZzZXQ9ey0xMDB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2Quc259XHJcblx0XHRcdFx0PC9TY3JvbGxMaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57bGlzdH08Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxJdGVtc1Byb3BzIHtcclxuXHRzY3JvbGxNb2RlOiBTQ1JPTExfTU9ERTtcclxuXHRsaXN0V3JhcEVsOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG5cdGxpc3RFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGl0ZW1zRWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChhY3RpdmU6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsSXRlbXMgPSAocHJvcHM6IERldGFpbEl0ZW1zUHJvcHMpID0+IHtcclxuXHRjb25zdCB7c2Nyb2xsTW9kZSwgbGlzdFdyYXBFbCwgbGlzdEVscywgaXRlbXNFbHMsIGFjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcblxyXG5cdGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG5cdFx0aWYgKHNjcm9sbE1vZGUgIT09ICdTQ1JPTEwnKSByZXR1cm47XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdGNvbnN0IHNjcm9sbERpciA9IHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3AgPyAnVVAnIDogJ0RPV04nO1xyXG5cdFx0Y29uc3Qgd2luZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdGNvbnN0IHNjcm9sbFVwT2Zmc2V0ID0gd2luZEhlaWdodCAqIDAuNDtcclxuXHRcdGNvbnN0IHNjcm9sbERvd25PZmZzZXQgPSAzMDA7XHJcblxyXG5cdFx0aXRlbXNFbHMuY3VycmVudC5tYXAoKGl0ZW1FbCwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYoYWN0aXZlID09PSBpbmRleCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdFx0Y29uc3QgZWxCb3R0b20gPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHJcblx0XHRcdGlmIChzY3JvbGxEaXIgPT09ICdVUCcpIHtcclxuXHRcdFx0XHRpZiAoZWxUb3AgPD0gc2Nyb2xsVXBPZmZzZXQgJiYgZWxUb3AgPiAtKGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxVcE9mZnNldCkpIHtcclxuXHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0XHRpZihsaXN0RWxzLmN1cnJlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIDE1MCA+PSBsaXN0V3JhcEVsLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IHx8IGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDEwMCkge1xyXG5cdFx0XHRcdFx0XHQvLyBhbmltYXRlU2Nyb2xsLnNjcm9sbFRvKGluZGV4ICogMTAwLCB7XHJcblx0XHRcdFx0XHRcdC8vIFx0Y29udGFpbmVySWQ6ICdsaXN0V3JhcCcsXHJcblx0XHRcdFx0XHRcdC8vIFx0c21vb3RoOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0Ly8gXHRpZ25vcmVDYW5jZWxFdmVudHM6dHJ1ZVxyXG5cdFx0XHRcdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdFx0XHRcdHNjcm9sbGVyLnNjcm9sbFRvKCcnLCB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVySWQ6ICdsaXN0V3JhcCcsXHJcblx0XHRcdFx0XHRcdFx0c21vb3RoOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRpZ25vcmVDYW5jZWxFdmVudHM6dHJ1ZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsRGlyID09PSAnRE9XTicpIHtcclxuXHRcdFx0XHRpZiAoZWxCb3R0b20gPj0gd2luZEhlaWdodCAtIHNjcm9sbERvd25PZmZzZXQgJiYgZWxCb3R0b20gPCB3aW5kSGVpZ2h0ICsgaXRlbUVsLm9mZnNldEhlaWdodCAtIHNjcm9sbERvd25PZmZzZXQpIHtcclxuXHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0XHRpZihsaXN0RWxzLmN1cnJlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIDE1MCA+PSBsaXN0V3JhcEVsLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IHx8IGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDEwMCkge1xyXG5cdFx0XHRcdFx0XHQvLyBhbmltYXRlU2Nyb2xsLnNjcm9sbFRvKGluZGV4ICogMTAwLCB7XHJcblx0XHRcdFx0XHRcdC8vIFx0Y29udGFpbmVySWQ6ICdsaXN0V3JhcCcsXHJcblx0XHRcdFx0XHRcdC8vIFx0c21vb3RoOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0Ly8gXHRpZ25vcmVDYW5jZWxFdmVudHM6dHJ1ZVxyXG5cdFx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxhc3RTY3JvbGxUb3AgPSAoc2Nyb2xsVG9wIDw9IDAgPyAwIDogc2Nyb2xsVG9wKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblxyXG5cdFx0cmV0dXJuICgoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHRcdH0pXHJcblx0fSwgW2FjdGl2ZSwgc2Nyb2xsTW9kZV0pO1xyXG5cclxuXHRjb25zdCBpdGVtcyA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGtleT17ZC5zbn0gcmVmPXsoaXRlbUVsKSA9PiBpdGVtc0Vscy5jdXJyZW50W2Quc25dID0gaXRlbUVsfSBjbGFzc05hbWU9e2N4KCdkZXRhaWxJdGVtcycpfT5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPXsnc2Nyb2xsJyArIGQuc259PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e2Quc259PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWFyb3VuZCcsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcyMHB4IDAnfX0+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J1lFTExPVyd9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGQuc24gJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydZRUxMT1cnfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0xJTUUnfSByPXs2MH0gcGVyY2VudD17YWN0aXZlID09PSBkLnNuICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnID8gZ2V0SW50ZWdlcigxMDEpIDogMH0gY29sb3JUeXBlPXsnTElNRSd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnR1JFRU4nfSByPXs2MH0gcGVyY2VudD17YWN0aXZlID09PSBkLnNuICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnID8gZ2V0SW50ZWdlcigxMDEpIDogMH0gY29sb3JUeXBlPXsnR1JFRU4nfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J1NLWSd9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGQuc24gJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydTS1knfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0JMVUUnfSByPXs2MH0gcGVyY2VudD17YWN0aXZlID09PSBkLnNuICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnID8gZ2V0SW50ZWdlcigxMDEpIDogMH0gY29sb3JUeXBlPXsnQkxVRSd9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj57ZC5jb250ZW50c308L2Rpdj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57aXRlbXN9PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFNjcm9sbFRvcCA9ICgpID0+IHtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjeCgnc2Nyb2xsVG9wJyl9Lz5cclxuXHQpXHJcbn07XHJcblxyXG5jb25zdCBTdGlja3lTY3JvbGwgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3Njcm9sbE1vZGUsIHNldFNjcm9sbE1vZGVdID0gdXNlU3RhdGU8U0NST0xMX01PREU+KCdTQ1JPTEwnKTtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgbGlzdFdyYXBFbCA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblx0Y29uc3QgbGlzdEVscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KFtdKTtcclxuXHRjb25zdCBpdGVtc0VscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFubmVyJyl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHNXcmFwJyl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzdW1tYXJ5Jyl9Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgcmVmPXtsaXN0V3JhcEVsfSBpZD0nbGlzdFdyYXAnIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERldGFpbExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0U2Nyb2xsTW9kZT17c2V0U2Nyb2xsTW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkZXRhaWwnKX0+XHJcblx0XHRcdFx0XHRcdFx0PERldGFpbEl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxNb2RlPXtzY3JvbGxNb2RlfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdFdyYXBFbD17bGlzdFdyYXBFbH1cclxuXHRcdFx0XHRcdFx0XHRcdGxpc3RFbHM9e2xpc3RFbHN9XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtc0Vscz17aXRlbXNFbHN9XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8U2Nyb2xsVG9wLz5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreVNjcm9sbDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=