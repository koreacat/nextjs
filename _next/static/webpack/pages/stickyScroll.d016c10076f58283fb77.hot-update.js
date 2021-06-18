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
        lineNumber: 38,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
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
          console.log(index, listEls.current[index].getBoundingClientRect());

          if (listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {
            react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["animateScroll"].scrollTo(index * 100, {
              containerId: 'listWrap',
              smooth: false,
              ignoreCancelEvents: true
            });
          }
        }
      } else if (scrollDir === 'DOWN') {
        if (elBottom >= windHeight - scrollDownOffset && elBottom < windHeight + itemEl.offsetHeight - scrollDownOffset) {
          setActive(index);

          if (listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {
            react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["animateScroll"].scrollTo(index * 100, {
              containerId: 'listWrap',
              smooth: false,
              ignoreCancelEvents: true
            });
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
          lineNumber: 127,
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
            lineNumber: 129,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'LIME',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'LIME'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'GREEN',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'GREEN'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'SKY',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'SKY'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'BLUE',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'BLUE'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
    lineNumber: 152,
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
      lineNumber: 165,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
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
                lineNumber: 172,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
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
              lineNumber: 181,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwic2V0U2Nyb2xsTW9kZSIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsInNuIiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJEZXRhaWxJdGVtcyIsInNjcm9sbE1vZGUiLCJsaXN0V3JhcEVsIiwiaXRlbXNFbHMiLCJsYXN0U2Nyb2xsVG9wIiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsRGlyIiwid2luZEhlaWdodCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsVXBPZmZzZXQiLCJzY3JvbGxEb3duT2Zmc2V0IiwiaXRlbUVsIiwiaW5kZXgiLCJlbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsQm90dG9tIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImFuaW1hdGVTY3JvbGwiLCJzY3JvbGxUbyIsImNvbnRhaW5lcklkIiwic21vb3RoIiwiaWdub3JlQ2FuY2VsRXZlbnRzIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsImdldEludGVnZXIiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIiwidXNlUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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LGVBRUM7QUFBSyxtQkFBUyxFQUFFQSxFQUFFLENBQUMsVUFBRCxDQUFsQjtBQUFBLGtDQUNDO0FBQUssZUFBRyxFQUFFMEIsVUFBVjtBQUFzQixjQUFFLEVBQUMsVUFBekI7QUFBb0MscUJBQVMsRUFBRTFCLEVBQUUsQ0FBQyxNQUFELENBQWpEO0FBQUEsbUNBQ0M7QUFBQSxxQ0FDQyxxRUFBQyxVQUFEO0FBQ0MsNkJBQWEsRUFBRU0sYUFEaEI7QUFFQyx1QkFBTyxFQUFFQyxPQUZWO0FBR0Msc0JBQU0sRUFBRUMsTUFIVDtBQUlDLHlCQUFTLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBV0M7QUFBSyxxQkFBUyxFQUFFVCxFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUFBLG1DQUNDLHFFQUFDLFdBQUQ7QUFDQyx3QkFBVSxFQUFFeUIsVUFEYjtBQUVDLHdCQUFVLEVBQUVDLFVBRmI7QUFHQyxxQkFBTyxFQUFFbkIsT0FIVjtBQUlDLHNCQUFRLEVBQUVvQixRQUpYO0FBS0Msb0JBQU0sRUFBRW5CLE1BTFQ7QUFNQyx1QkFBUyxFQUFFQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUE2QkMscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBaUNBLENBeENEOztJQUFNeUQsWTs7TUFBQUEsWTtBQTBDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RpY2t5U2Nyb2xsLmQwMTZjMTAwNzZmNTgyODNmYjc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL3N0aWNreVNjcm9sbC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZGV0YWlsRGF0YSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL2RldGFpbERhdGFcIjtcclxuaW1wb3J0IHtFbGVtZW50LCBMaW5rIGFzIFNjcm9sbExpbmt9IGZyb20gXCJyZWFjdC1zY3JvbGwvbW9kdWxlc1wiO1xyXG5pbXBvcnQge2FuaW1hdGVTY3JvbGwsIEV2ZW50c30gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQge1JlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENpcmNsZVByb2dyZXNzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jaXJjbGVQcm9ncmVzc1wiO1xyXG5pbXBvcnQge2dldEludGVnZXJ9IGZyb20gXCIuLi9zcmMvdXRpbC9nZXRJbnRlZ2VyXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxudHlwZSBTQ1JPTExfTU9ERSA9ICdTQ1JPTEwnIHwgJ0NMSUNLJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaXN0UHJvcHMge1xyXG5cdHNldFNjcm9sbE1vZGU6IChzY3JvbGxNb2RlOiBTQ1JPTExfTU9ERSkgPT4gdm9pZDtcclxuXHRsaXN0RWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChzbjogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxMaXN0ID0gKHByb3BzOiBEZXRhaWxMaXN0UHJvcHMpID0+IHtcclxuXHRjb25zdCB7c2V0U2Nyb2xsTW9kZSwgbGlzdEVscywgYWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKHNuOiBudW1iZXIpID0+IHtcclxuXHRcdHNldFNjcm9sbE1vZGUoJ0NMSUNLJyk7XHJcblx0XHRzZXRBY3RpdmUoc24pO1xyXG5cclxuXHRcdC8v7Iqk7YGs66GkIOuBneuCmOuptCDsiqTtgazroaQg66qo65Oc66GcIOuzgOqyvVxyXG5cdFx0RXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKCdlbmQnLCAodG8sIGVsZW1lbnQpID0+IHtcclxuXHRcdFx0c2V0U2Nyb2xsTW9kZSgnU0NST0xMJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaSBrZXk9e2Quc259IHJlZj17KGxpc3RFbCkgPT4gbGlzdEVscy5jdXJyZW50W2Quc25dID0gbGlzdEVsfSBjbGFzc05hbWU9e2N4KGQuc24gPT09IGFjdGl2ZSAmJiAnYWN0aXZlJyl9IHN0eWxlPXt7aGVpZ2h0OiBgY2FsYygxMDBweCArICR7ZC5zbiAqIDIwfXB4KWB9fT5cclxuXHRcdFx0XHQ8U2Nyb2xsTGlua1xyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZC5zbil9XHJcblx0XHRcdFx0XHR0bz17J3Njcm9sbCcgKyBkLnNufVxyXG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0b2Zmc2V0PXstMTAwfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtkLnNufVxyXG5cdFx0XHRcdDwvU2Nyb2xsTGluaz5cclxuXHRcdFx0PC9saT5cclxuXHRcdClcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+e2xpc3R9PC8+XHJcblx0KTtcclxufTtcclxuXHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsSXRlbXNQcm9wcyB7XHJcblx0c2Nyb2xsTW9kZTogU0NST0xMX01PREU7XHJcblx0bGlzdFdyYXBFbDogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuXHRsaXN0RWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRpdGVtc0VsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0YWN0aXZlOiBudW1iZXI7XHJcblx0c2V0QWN0aXZlOiAoYWN0aXZlOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbEl0ZW1zID0gKHByb3BzOiBEZXRhaWxJdGVtc1Byb3BzKSA9PiB7XHJcblx0Y29uc3Qge3Njcm9sbE1vZGUsIGxpc3RXcmFwRWwsIGxpc3RFbHMsIGl0ZW1zRWxzLCBhY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHRsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG5cclxuXHRjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuXHRcdGlmIChzY3JvbGxNb2RlICE9PSAnU0NST0xMJykgcmV0dXJuO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRjb25zdCBzY3JvbGxEaXIgPSBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wID8gJ1VQJyA6ICdET1dOJztcclxuXHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHRjb25zdCBzY3JvbGxVcE9mZnNldCA9IHdpbmRIZWlnaHQgKiAwLjQ7XHJcblx0XHRjb25zdCBzY3JvbGxEb3duT2Zmc2V0ID0gMzAwO1xyXG5cclxuXHRcdGl0ZW1zRWxzLmN1cnJlbnQubWFwKChpdGVtRWwsIGluZGV4KSA9PiB7XHJcblx0XHRcdGlmKGFjdGl2ZSA9PT0gaW5kZXgpIHJldHVybjtcclxuXHJcblx0XHRcdGNvbnN0IGVsVG9wID0gaXRlbUVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblx0XHRcdGNvbnN0IGVsQm90dG9tID0gaXRlbUVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XHJcblxyXG5cdFx0XHRpZiAoc2Nyb2xsRGlyID09PSAnVVAnKSB7XHJcblx0XHRcdFx0aWYgKGVsVG9wIDw9IHNjcm9sbFVwT2Zmc2V0ICYmIGVsVG9wID4gLShpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsVXBPZmZzZXQpKSB7XHJcblx0XHRcdFx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGluZGV4LCBsaXN0RWxzLmN1cnJlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCApO1xyXG5cclxuXHRcdFx0XHRcdGlmKGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gMTUwID49IGxpc3RXcmFwRWwuY3VycmVudC5vZmZzZXRIZWlnaHQgfHwgbGlzdEVscy5jdXJyZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMTAwKSB7XHJcblx0XHRcdFx0XHRcdGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8oaW5kZXggKiAxMDAsIHtcclxuXHRcdFx0XHRcdFx0XHRjb250YWluZXJJZDogJ2xpc3RXcmFwJyxcclxuXHRcdFx0XHRcdFx0XHRzbW9vdGg6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGlnbm9yZUNhbmNlbEV2ZW50czp0cnVlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdET1dOJykge1xyXG5cdFx0XHRcdGlmIChlbEJvdHRvbSA+PSB3aW5kSGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCAmJiBlbEJvdHRvbSA8IHdpbmRIZWlnaHQgKyBpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCkge1xyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdGlmKGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gMTUwID49IGxpc3RXcmFwRWwuY3VycmVudC5vZmZzZXRIZWlnaHQgfHwgbGlzdEVscy5jdXJyZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMTAwKSB7XHJcblx0XHRcdFx0XHRcdGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8oaW5kZXggKiAxMDAsIHtcclxuXHRcdFx0XHRcdFx0XHRjb250YWluZXJJZDogJ2xpc3RXcmFwJyxcclxuXHRcdFx0XHRcdFx0XHRzbW9vdGg6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGlnbm9yZUNhbmNlbEV2ZW50czp0cnVlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cdFx0fSlcclxuXHR9LCBbYWN0aXZlLCBzY3JvbGxNb2RlXSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYga2V5PXtkLnNufSByZWY9eyhpdGVtRWwpID0+IGl0ZW1zRWxzLmN1cnJlbnRbZC5zbl0gPSBpdGVtRWx9IGNsYXNzTmFtZT17Y3goJ2RldGFpbEl0ZW1zJyl9PlxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9eydzY3JvbGwnICsgZC5zbn0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYXJvdW5kJywgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzIwcHggMCd9fT5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnWUVMTE9XJ30gcj17NjB9IHBlcmNlbnQ9e2FjdGl2ZSA9PT0gZC5zbiAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9IGNvbG9yVHlwZT17J1lFTExPVyd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnTElNRSd9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGQuc24gJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydMSU1FJ30vPlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydHUkVFTid9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGQuc24gJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydHUkVFTid9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnU0tZJ30gcj17NjB9IHBlcmNlbnQ9e2FjdGl2ZSA9PT0gZC5zbiAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9IGNvbG9yVHlwZT17J1NLWSd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnQkxVRSd9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGQuc24gJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydCTFVFJ30vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdzY3JvbGxUb3AnKX0vPlxyXG5cdClcclxufTtcclxuXHJcbmNvbnN0IFN0aWNreVNjcm9sbCA9ICgpID0+IHtcclxuXHRjb25zdCBbc2Nyb2xsTW9kZSwgc2V0U2Nyb2xsTW9kZV0gPSB1c2VTdGF0ZTxTQ1JPTExfTU9ERT4oJ1NDUk9MTCcpO1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBsaXN0V3JhcEVsID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHRjb25zdCBsaXN0RWxzID0gdXNlUmVmPEFycmF5PEhUTUxFbGVtZW50Pj4oW10pO1xyXG5cdGNvbnN0IGl0ZW1zRWxzID0gdXNlUmVmPEFycmF5PEhUTUxFbGVtZW50Pj4oW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdiYW5uZXInKX0vPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50c1dyYXAnKX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3N1bW1hcnknKX0vPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuXHRcdFx0XHRcdFx0PGRpdiByZWY9e2xpc3RXcmFwRWx9IGlkPSdsaXN0V3JhcCcgY2xhc3NOYW1lPXtjeCgnbGlzdCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsTGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRTY3JvbGxNb2RlPXtzZXRTY3JvbGxNb2RlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0RWxzPXtsaXN0RWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2RldGFpbCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8RGV0YWlsSXRlbXNcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbE1vZGU9e3Njcm9sbE1vZGV9XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0V3JhcEVsPXtsaXN0V3JhcEVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zRWxzPXtpdGVtc0Vsc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTY3JvbGxUb3AvPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5U2Nyb2xsO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==