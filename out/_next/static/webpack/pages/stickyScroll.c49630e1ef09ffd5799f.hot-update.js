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
          lineNumber: 124,
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
            lineNumber: 126,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'LIME',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'LIME'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'GREEN',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'GREEN'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'SKY',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'SKY'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'BLUE',
            r: 60,
            percent: active === d.sn && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'BLUE'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
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
    lineNumber: 149,
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
      lineNumber: 162,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
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
                lineNumber: 169,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
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
              lineNumber: 178,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 161,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwic2V0U2Nyb2xsTW9kZSIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsInNuIiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJEZXRhaWxJdGVtcyIsInNjcm9sbE1vZGUiLCJsaXN0V3JhcEVsIiwiaXRlbXNFbHMiLCJsYXN0U2Nyb2xsVG9wIiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsRGlyIiwid2luZEhlaWdodCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsVXBPZmZzZXQiLCJzY3JvbGxEb3duT2Zmc2V0IiwiaXRlbUVsIiwiaW5kZXgiLCJlbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsQm90dG9tIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0IiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbFRvIiwiY29udGFpbmVySWQiLCJzbW9vdGgiLCJpZ25vcmVDYW5jZWxFdmVudHMiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIml0ZW1zIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJwYWRkaW5nIiwiZ2V0SW50ZWdlciIsImNvbnRlbnRzIiwiU2Nyb2xsVG9wIiwiU3RpY2t5U2Nyb2xsIiwidXNlU3RhdGUiLCJ1c2VSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNEZBQWhCLENBQVg7O0FBV0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUE0QjtBQUFBLE1BQ3ZDQyxhQUR1QyxHQUNNRCxLQUROLENBQ3ZDQyxhQUR1QztBQUFBLE1BQ3hCQyxPQUR3QixHQUNNRixLQUROLENBQ3hCRSxPQUR3QjtBQUFBLE1BQ2ZDLE1BRGUsR0FDTUgsS0FETixDQUNmRyxNQURlO0FBQUEsTUFDUEMsU0FETyxHQUNNSixLQUROLENBQ1BJLFNBRE87O0FBRzlDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEVBQUQsRUFBZ0I7QUFDbkNMLGlCQUFhLENBQUMsT0FBRCxDQUFiO0FBQ0FHLGFBQVMsQ0FBQ0UsRUFBRCxDQUFULENBRm1DLENBSW5DOztBQUNBQywrREFBTSxDQUFDQyxXQUFQLENBQW1CQyxRQUFuQixDQUE0QixLQUE1QixFQUFtQyxVQUFDQyxFQUFELEVBQUtDLE9BQUwsRUFBaUI7QUFDbkRWLG1CQUFhLENBQUMsUUFBRCxDQUFiO0FBQ0EsS0FGRDtBQUdBLEdBUkQ7O0FBVUEsTUFBTVcsSUFBSSxHQUFHQywrRUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xDLHdCQUNDO0FBQWUsU0FBRyxFQUFFLGFBQUNDLE1BQUQ7QUFBQSxlQUFZZCxPQUFPLENBQUNlLE9BQVIsQ0FBZ0JGLENBQUMsQ0FBQ1QsRUFBbEIsSUFBd0JVLE1BQXBDO0FBQUEsT0FBcEI7QUFBZ0UsZUFBUyxFQUFFckIsRUFBRSxDQUFDb0IsQ0FBQyxDQUFDVCxFQUFGLEtBQVNILE1BQVQsSUFBbUIsUUFBcEIsQ0FBN0U7QUFBQSw2QkFDQyxxRUFBQyx5REFBRDtBQUNDLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxXQUFXLENBQUNVLENBQUMsQ0FBQ1QsRUFBSCxDQUFqQjtBQUFBLFNBRFY7QUFFQyxVQUFFLEVBQUUsV0FBV1MsQ0FBQyxDQUFDVCxFQUZsQjtBQUdDLGNBQU0sRUFBRSxJQUhUO0FBSUMsY0FBTSxFQUFFLENBQUMsR0FKVjtBQUFBLGtCQU1FUyxDQUFDLENBQUNUO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELE9BQVNTLENBQUMsQ0FBQ1QsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFZQSxHQWJZLENBQWI7QUFlQSxzQkFDQztBQUFBLGNBQUdNO0FBQUgsbUJBREQ7QUFHQSxDQS9CRDs7S0FBTWIsVTs7QUEyQ04sSUFBTW1CLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNsQixLQUFELEVBQTZCO0FBQUE7O0FBQUEsTUFDekNtQixVQUR5QyxHQUN1Qm5CLEtBRHZCLENBQ3pDbUIsVUFEeUM7QUFBQSxNQUM3QkMsVUFENkIsR0FDdUJwQixLQUR2QixDQUM3Qm9CLFVBRDZCO0FBQUEsTUFDakJsQixPQURpQixHQUN1QkYsS0FEdkIsQ0FDakJFLE9BRGlCO0FBQUEsTUFDUm1CLFFBRFEsR0FDdUJyQixLQUR2QixDQUNScUIsUUFEUTtBQUFBLE1BQ0VsQixNQURGLEdBQ3VCSCxLQUR2QixDQUNFRyxNQURGO0FBQUEsTUFDVUMsU0FEVixHQUN1QkosS0FEdkIsQ0FDVUksU0FEVjtBQUVoRCxNQUFJa0IsYUFBYSxHQUFHLENBQXBCOztBQUdBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDdEIsUUFBSUosVUFBVSxLQUFLLFFBQW5CLEVBQTZCO0FBQzdCLFFBQU1LLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLElBQXNCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJKLFNBQWpFO0FBQ0EsUUFBTUssU0FBUyxHQUFHTCxTQUFTLEdBQUdGLGFBQVosR0FBNEIsSUFBNUIsR0FBbUMsTUFBckQ7QUFDQSxRQUFNUSxVQUFVLEdBQUdMLE1BQU0sQ0FBQ00sV0FBMUI7QUFDQSxRQUFNQyxjQUFjLEdBQUdGLFVBQVUsR0FBRyxHQUFwQztBQUNBLFFBQU1HLGdCQUFnQixHQUFHLEdBQXpCO0FBRUFaLFlBQVEsQ0FBQ0osT0FBVCxDQUFpQkgsR0FBakIsQ0FBcUIsVUFBQ29CLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUN2QyxVQUFHaEMsTUFBTSxLQUFLZ0MsS0FBZCxFQUFxQjtBQUVyQixVQUFNQyxLQUFLLEdBQUdGLE1BQUgsYUFBR0EsTUFBSCx1QkFBR0EsTUFBTSxDQUFFRyxxQkFBUixHQUFnQ0MsR0FBOUM7QUFDQSxVQUFNQyxRQUFRLEdBQUdMLE1BQUgsYUFBR0EsTUFBSCx1QkFBR0EsTUFBTSxDQUFFRyxxQkFBUixHQUFnQ0csTUFBakQ7O0FBRUEsVUFBSVgsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3ZCLFlBQUlPLEtBQUssSUFBSUosY0FBVCxJQUEyQkksS0FBSyxHQUFHLEVBQUVGLE1BQU0sQ0FBQ08sWUFBUCxHQUFzQlQsY0FBeEIsQ0FBdkMsRUFBZ0Y7QUFDL0U1QixtQkFBUyxDQUFDK0IsS0FBRCxDQUFUOztBQUNBLGNBQUdqQyxPQUFPLENBQUNlLE9BQVIsQ0FBZ0JrQixLQUFoQixFQUF1QkUscUJBQXZCLEdBQStDRyxNQUEvQyxHQUF3RCxHQUF4RCxJQUErRHBCLFVBQVUsQ0FBQ0gsT0FBWCxDQUFtQndCLFlBQWxGLElBQWtHdkMsT0FBTyxDQUFDZSxPQUFSLENBQWdCa0IsS0FBaEIsRUFBdUJFLHFCQUF2QixHQUErQ0MsR0FBL0MsSUFBc0QsR0FBM0osRUFBZ0s7QUFDL0pJLDhFQUFhLENBQUNDLFFBQWQsQ0FBdUJSLEtBQUssR0FBRyxHQUEvQixFQUFvQztBQUNuQ1MseUJBQVcsRUFBRSxVQURzQjtBQUVuQ0Msb0JBQU0sRUFBRSxLQUYyQjtBQUduQ0MsZ0NBQWtCLEVBQUM7QUFIZ0IsYUFBcEM7QUFLQTtBQUNEO0FBQ0QsT0FYRCxNQVdPLElBQUlqQixTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDaEMsWUFBSVUsUUFBUSxJQUFJVCxVQUFVLEdBQUdHLGdCQUF6QixJQUE2Q00sUUFBUSxHQUFHVCxVQUFVLEdBQUdJLE1BQU0sQ0FBQ08sWUFBcEIsR0FBbUNSLGdCQUEvRixFQUFpSDtBQUNoSDdCLG1CQUFTLENBQUMrQixLQUFELENBQVQ7O0FBQ0EsY0FBR2pDLE9BQU8sQ0FBQ2UsT0FBUixDQUFnQmtCLEtBQWhCLEVBQXVCRSxxQkFBdkIsR0FBK0NHLE1BQS9DLEdBQXdELEdBQXhELElBQStEcEIsVUFBVSxDQUFDSCxPQUFYLENBQW1Cd0IsWUFBbEYsSUFBa0d2QyxPQUFPLENBQUNlLE9BQVIsQ0FBZ0JrQixLQUFoQixFQUF1QkUscUJBQXZCLEdBQStDQyxHQUEvQyxJQUFzRCxHQUEzSixFQUFnSztBQUMvSkksOEVBQWEsQ0FBQ0MsUUFBZCxDQUF1QlIsS0FBSyxHQUFHLEdBQS9CLEVBQW9DO0FBQ25DUyx5QkFBVyxFQUFFLFVBRHNCO0FBRW5DQyxvQkFBTSxFQUFFLEtBRjJCO0FBR25DQyxnQ0FBa0IsRUFBQztBQUhnQixhQUFwQztBQUtBO0FBQ0Q7QUFDRDs7QUFFRHhCLG1CQUFhLEdBQUlFLFNBQVMsSUFBSSxDQUFiLEdBQWlCLENBQWpCLEdBQXFCQSxTQUF0QztBQUNBLEtBL0JEO0FBZ0NBLEdBeENEOztBQTBDQXVCLHlEQUFTLENBQUMsWUFBTTtBQUNmcEIsWUFBUSxDQUFDcUIsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0N6QixRQUFwQztBQUVBLFdBQVEsWUFBTTtBQUNiSSxjQUFRLENBQUNzQixtQkFBVCxDQUE2QixRQUE3QixFQUF1QzFCLFFBQXZDO0FBQ0EsS0FGRDtBQUdBLEdBTlEsRUFNTixDQUFDcEIsTUFBRCxFQUFTZ0IsVUFBVCxDQU5NLENBQVQ7QUFRQSxNQUFNK0IsS0FBSyxHQUFHckMsK0VBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBTztBQUNuQyx3QkFDQztBQUFnQixTQUFHLEVBQUUsYUFBQ21CLE1BQUQ7QUFBQSxlQUFZYixRQUFRLENBQUNKLE9BQVQsQ0FBaUJGLENBQUMsQ0FBQ1QsRUFBbkIsSUFBeUI0QixNQUFyQztBQUFBLE9BQXJCO0FBQWtFLGVBQVMsRUFBRXZDLEVBQUUsQ0FBQyxhQUFELENBQS9FO0FBQUEsNkJBQ0MscUVBQUMsNERBQUQ7QUFBUyxZQUFJLEVBQUUsV0FBV29CLENBQUMsQ0FBQ1QsRUFBNUI7QUFBQSxnQ0FDQztBQUFNLG1CQUFTLEVBQUVYLEVBQUUsQ0FBQyxPQUFELENBQW5CO0FBQUEsb0JBQStCb0IsQ0FBQyxDQUFDVDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUM7QUFBSyxlQUFLLEVBQUU7QUFBQzZDLG1CQUFPLEVBQUUsTUFBVjtBQUFrQkMsMEJBQWMsRUFBQyxjQUFqQztBQUFpREMsaUJBQUssRUFBRSxNQUF4RDtBQUFnRUMsbUJBQU8sRUFBRTtBQUF6RSxXQUFaO0FBQUEsa0NBQ0MscUVBQUMsc0VBQUQ7QUFBZ0IsaUJBQUssRUFBRSxRQUF2QjtBQUFpQyxhQUFDLEVBQUUsRUFBcEM7QUFBd0MsbUJBQU8sRUFBRW5ELE1BQU0sS0FBS1ksQ0FBQyxDQUFDVCxFQUFiLElBQW1CYSxVQUFVLEtBQUssUUFBbEMsR0FBNkNvQyx1RUFBVSxDQUFDLEdBQUQsQ0FBdkQsR0FBK0QsQ0FBaEg7QUFBbUgscUJBQVMsRUFBRTtBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUMscUVBQUMsc0VBQUQ7QUFBZ0IsaUJBQUssRUFBRSxNQUF2QjtBQUErQixhQUFDLEVBQUUsRUFBbEM7QUFBc0MsbUJBQU8sRUFBRXBELE1BQU0sS0FBS1ksQ0FBQyxDQUFDVCxFQUFiLElBQW1CYSxVQUFVLEtBQUssUUFBbEMsR0FBNkNvQyx1RUFBVSxDQUFDLEdBQUQsQ0FBdkQsR0FBK0QsQ0FBOUc7QUFBaUgscUJBQVMsRUFBRTtBQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELGVBR0MscUVBQUMsc0VBQUQ7QUFBZ0IsaUJBQUssRUFBRSxPQUF2QjtBQUFnQyxhQUFDLEVBQUUsRUFBbkM7QUFBdUMsbUJBQU8sRUFBRXBELE1BQU0sS0FBS1ksQ0FBQyxDQUFDVCxFQUFiLElBQW1CYSxVQUFVLEtBQUssUUFBbEMsR0FBNkNvQyx1RUFBVSxDQUFDLEdBQUQsQ0FBdkQsR0FBK0QsQ0FBL0c7QUFBa0gscUJBQVMsRUFBRTtBQUE3SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhELGVBSUMscUVBQUMsc0VBQUQ7QUFBZ0IsaUJBQUssRUFBRSxLQUF2QjtBQUE4QixhQUFDLEVBQUUsRUFBakM7QUFBcUMsbUJBQU8sRUFBRXBELE1BQU0sS0FBS1ksQ0FBQyxDQUFDVCxFQUFiLElBQW1CYSxVQUFVLEtBQUssUUFBbEMsR0FBNkNvQyx1RUFBVSxDQUFDLEdBQUQsQ0FBdkQsR0FBK0QsQ0FBN0c7QUFBZ0gscUJBQVMsRUFBRTtBQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELGVBS0MscUVBQUMsc0VBQUQ7QUFBZ0IsaUJBQUssRUFBRSxNQUF2QjtBQUErQixhQUFDLEVBQUUsRUFBbEM7QUFBc0MsbUJBQU8sRUFBRXBELE1BQU0sS0FBS1ksQ0FBQyxDQUFDVCxFQUFiLElBQW1CYSxVQUFVLEtBQUssUUFBbEMsR0FBNkNvQyx1RUFBVSxDQUFDLEdBQUQsQ0FBdkQsR0FBK0QsQ0FBOUc7QUFBaUgscUJBQVMsRUFBRTtBQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQVNDO0FBQUEsb0JBQU14QyxDQUFDLENBQUN5QztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsT0FBVXpDLENBQUMsQ0FBQ1QsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFlQSxHQWhCYSxDQUFkO0FBa0JBLHNCQUNDO0FBQUEsY0FBRzRDO0FBQUgsbUJBREQ7QUFHQSxDQTVFRDs7R0FBTWhDLFc7O01BQUFBLFc7O0FBOEVOLElBQU11QyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3ZCLE1BQU1wRCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCb0IsVUFBTSxDQUFDa0IsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBUSxXQUFPLEVBQUV0QyxXQUFqQjtBQUE4QixhQUFTLEVBQUVWLEVBQUUsQ0FBQyxXQUFEO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUdBLENBUkQ7O01BQU04RCxTOztBQVVOLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBYyxRQUFkLENBRGxCO0FBQUEsTUFDbkJ4QyxVQURtQjtBQUFBLE1BQ1BsQixhQURPOztBQUFBLG1CQUVFMEQsc0RBQVEsQ0FBQyxDQUFELENBRlY7QUFBQSxNQUVuQnhELE1BRm1CO0FBQUEsTUFFWEMsU0FGVzs7QUFHMUIsTUFBTWdCLFVBQVUsR0FBR3dDLG9EQUFNLENBQWlCLElBQWpCLENBQXpCO0FBQ0EsTUFBTTFELE9BQU8sR0FBRzBELG9EQUFNLENBQXFCLEVBQXJCLENBQXRCO0FBQ0EsTUFBTXZDLFFBQVEsR0FBR3VDLG9EQUFNLENBQXFCLEVBQXJCLENBQXZCO0FBRUEsc0JBQ0MscUVBQUMscUVBQUQ7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRWpFLEVBQUUsQ0FBQyxRQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBRUEsRUFBRSxDQUFDLGNBQUQsQ0FBbEI7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxVQUFELENBQWxCO0FBQUEsa0NBQ0M7QUFBSyxlQUFHLEVBQUV5QixVQUFWO0FBQXNCLGNBQUUsRUFBQyxVQUF6QjtBQUFvQyxxQkFBUyxFQUFFekIsRUFBRSxDQUFDLE1BQUQsQ0FBakQ7QUFBQSxtQ0FDQztBQUFBLHFDQUNDLHFFQUFDLFVBQUQ7QUFDQyw2QkFBYSxFQUFFTSxhQURoQjtBQUVDLHVCQUFPLEVBQUVDLE9BRlY7QUFHQyxzQkFBTSxFQUFFQyxNQUhUO0FBSUMseUJBQVMsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFXQztBQUFLLHFCQUFTLEVBQUVULEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsbUNBQ0MscUVBQUMsV0FBRDtBQUNDLHdCQUFVLEVBQUV3QixVQURiO0FBRUMsd0JBQVUsRUFBRUMsVUFGYjtBQUdDLHFCQUFPLEVBQUVsQixPQUhWO0FBSUMsc0JBQVEsRUFBRW1CLFFBSlg7QUFLQyxvQkFBTSxFQUFFbEIsTUFMVDtBQU1DLHVCQUFTLEVBQUVDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQTZCQyxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQ0EsQ0F4Q0Q7O0lBQU1zRCxZOztNQUFBQSxZO0FBMENTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGlja3lTY3JvbGwuYzQ5NjMwZTFlZjA5ZmZkNTc5OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvc3RpY2t5U2Nyb2xsLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBkZXRhaWxEYXRhIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvZGV0YWlsRGF0YVwiO1xyXG5pbXBvcnQge0VsZW1lbnQsIExpbmsgYXMgU2Nyb2xsTGlua30gZnJvbSBcInJlYWN0LXNjcm9sbC9tb2R1bGVzXCI7XHJcbmltcG9ydCB7YW5pbWF0ZVNjcm9sbCwgRXZlbnRzfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7UmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2lyY2xlUHJvZ3Jlc3MgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NpcmNsZVByb2dyZXNzXCI7XHJcbmltcG9ydCB7Z2V0SW50ZWdlcn0gZnJvbSBcIi4uL3NyYy91dGlsL2dldEludGVnZXJcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG50eXBlIFNDUk9MTF9NT0RFID0gJ1NDUk9MTCcgfCAnQ0xJQ0snO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbExpc3RQcm9wcyB7XHJcblx0c2V0U2Nyb2xsTW9kZTogKHNjcm9sbE1vZGU6IFNDUk9MTF9NT0RFKSA9PiB2b2lkO1xyXG5cdGxpc3RFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKHNuOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbExpc3RQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtzZXRTY3JvbGxNb2RlLCBsaXN0RWxzLCBhY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoc246IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0U2Nyb2xsTW9kZSgnQ0xJQ0snKTtcclxuXHRcdHNldEFjdGl2ZShzbik7XHJcblxyXG5cdFx0Ly/siqTtgazroaQg64Gd64KY66m0IOyKpO2BrOuhpCDrqqjrk5zroZwg67OA6rK9XHJcblx0XHRFdmVudHMuc2Nyb2xsRXZlbnQucmVnaXN0ZXIoJ2VuZCcsICh0bywgZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRzZXRTY3JvbGxNb2RlKCdTQ1JPTEwnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxpc3QgPSBkZXRhaWxEYXRhLm1hcCgoZCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGxpIGtleT17ZC5zbn0gcmVmPXsobGlzdEVsKSA9PiBsaXN0RWxzLmN1cnJlbnRbZC5zbl0gPSBsaXN0RWx9IGNsYXNzTmFtZT17Y3goZC5zbiA9PT0gYWN0aXZlICYmICdhY3RpdmUnKX0+XHJcblx0XHRcdFx0PFNjcm9sbExpbmtcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGQuc24pfVxyXG5cdFx0XHRcdFx0dG89eydzY3JvbGwnICsgZC5zbn1cclxuXHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cclxuXHRcdFx0XHRcdG9mZnNldD17LTEwMH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7ZC5zbn1cclxuXHRcdFx0XHQ8L1Njcm9sbExpbms+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntsaXN0fTwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5cclxuaW50ZXJmYWNlIERldGFpbEl0ZW1zUHJvcHMge1xyXG5cdHNjcm9sbE1vZGU6IFNDUk9MTF9NT0RFO1xyXG5cdGxpc3RXcmFwRWw6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcblx0bGlzdEVsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0aXRlbXNFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKGFjdGl2ZTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxJdGVtcyA9IChwcm9wczogRGV0YWlsSXRlbXNQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtzY3JvbGxNb2RlLCBsaXN0V3JhcEVsLCBsaXN0RWxzLCBpdGVtc0VscywgYWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuXHJcblx0Y29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcblx0XHRpZiAoc2Nyb2xsTW9kZSAhPT0gJ1NDUk9MTCcpIHJldHVybjtcclxuXHRcdGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsRGlyID0gc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCA/ICdVUCcgOiAnRE9XTic7XHJcblx0XHRjb25zdCB3aW5kSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0Y29uc3Qgc2Nyb2xsVXBPZmZzZXQgPSB3aW5kSGVpZ2h0ICogMC40O1xyXG5cdFx0Y29uc3Qgc2Nyb2xsRG93bk9mZnNldCA9IDMwMDtcclxuXHJcblx0XHRpdGVtc0Vscy5jdXJyZW50Lm1hcCgoaXRlbUVsLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRpZihhY3RpdmUgPT09IGluZGV4KSByZXR1cm47XHJcblxyXG5cdFx0XHRjb25zdCBlbFRvcCA9IGl0ZW1FbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cdFx0XHRjb25zdCBlbEJvdHRvbSA9IGl0ZW1FbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xyXG5cclxuXHRcdFx0aWYgKHNjcm9sbERpciA9PT0gJ1VQJykge1xyXG5cdFx0XHRcdGlmIChlbFRvcCA8PSBzY3JvbGxVcE9mZnNldCAmJiBlbFRvcCA+IC0oaXRlbUVsLm9mZnNldEhlaWdodCAtIHNjcm9sbFVwT2Zmc2V0KSkge1xyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdGlmKGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gMTUwID49IGxpc3RXcmFwRWwuY3VycmVudC5vZmZzZXRIZWlnaHQgfHwgbGlzdEVscy5jdXJyZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMTAwKSB7XHJcblx0XHRcdFx0XHRcdGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8oaW5kZXggKiAxMDAsIHtcclxuXHRcdFx0XHRcdFx0XHRjb250YWluZXJJZDogJ2xpc3RXcmFwJyxcclxuXHRcdFx0XHRcdFx0XHRzbW9vdGg6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGlnbm9yZUNhbmNlbEV2ZW50czp0cnVlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdET1dOJykge1xyXG5cdFx0XHRcdGlmIChlbEJvdHRvbSA+PSB3aW5kSGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCAmJiBlbEJvdHRvbSA8IHdpbmRIZWlnaHQgKyBpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCkge1xyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdGlmKGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gMTUwID49IGxpc3RXcmFwRWwuY3VycmVudC5vZmZzZXRIZWlnaHQgfHwgbGlzdEVscy5jdXJyZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMTAwKSB7XHJcblx0XHRcdFx0XHRcdGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8oaW5kZXggKiAxMDAsIHtcclxuXHRcdFx0XHRcdFx0XHRjb250YWluZXJJZDogJ2xpc3RXcmFwJyxcclxuXHRcdFx0XHRcdFx0XHRzbW9vdGg6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGlnbm9yZUNhbmNlbEV2ZW50czp0cnVlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cdFx0fSlcclxuXHR9LCBbYWN0aXZlLCBzY3JvbGxNb2RlXSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYga2V5PXtkLnNufSByZWY9eyhpdGVtRWwpID0+IGl0ZW1zRWxzLmN1cnJlbnRbZC5zbl0gPSBpdGVtRWx9IGNsYXNzTmFtZT17Y3goJ2RldGFpbEl0ZW1zJyl9PlxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9eydzY3JvbGwnICsgZC5zbn0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYXJvdW5kJywgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzIwcHggMCd9fT5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnWUVMTE9XJ30gcj17NjB9IHBlcmNlbnQ9e2FjdGl2ZSA9PT0gZC5zbiAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9IGNvbG9yVHlwZT17J1lFTExPVyd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnTElNRSd9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGQuc24gJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydMSU1FJ30vPlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydHUkVFTid9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGQuc24gJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydHUkVFTid9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnU0tZJ30gcj17NjB9IHBlcmNlbnQ9e2FjdGl2ZSA9PT0gZC5zbiAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9IGNvbG9yVHlwZT17J1NLWSd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnQkxVRSd9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGQuc24gJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydCTFVFJ30vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdzY3JvbGxUb3AnKX0vPlxyXG5cdClcclxufTtcclxuXHJcbmNvbnN0IFN0aWNreVNjcm9sbCA9ICgpID0+IHtcclxuXHRjb25zdCBbc2Nyb2xsTW9kZSwgc2V0U2Nyb2xsTW9kZV0gPSB1c2VTdGF0ZTxTQ1JPTExfTU9ERT4oJ1NDUk9MTCcpO1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBsaXN0V3JhcEVsID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHRjb25zdCBsaXN0RWxzID0gdXNlUmVmPEFycmF5PEhUTUxFbGVtZW50Pj4oW10pO1xyXG5cdGNvbnN0IGl0ZW1zRWxzID0gdXNlUmVmPEFycmF5PEhUTUxFbGVtZW50Pj4oW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdiYW5uZXInKX0vPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50c1dyYXAnKX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3N1bW1hcnknKX0vPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuXHRcdFx0XHRcdFx0PGRpdiByZWY9e2xpc3RXcmFwRWx9IGlkPSdsaXN0V3JhcCcgY2xhc3NOYW1lPXtjeCgnbGlzdCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsTGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRTY3JvbGxNb2RlPXtzZXRTY3JvbGxNb2RlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0RWxzPXtsaXN0RWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2RldGFpbCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8RGV0YWlsSXRlbXNcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbE1vZGU9e3Njcm9sbE1vZGV9XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0V3JhcEVsPXtsaXN0V3JhcEVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zRWxzPXtpdGVtc0Vsc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTY3JvbGxUb3AvPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5U2Nyb2xsO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==