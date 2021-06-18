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

  var handleClick = function handleClick(index) {
    setScrollMode('CLICK');
    setActive(index); //스크롤 끝나면 스크롤 모드로 변경

    react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Events"].scrollEvent.register('end', function (to, element) {
      setScrollMode('SCROLL');
    });
  };

  var list = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (d, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      ref: function ref(listEl) {
        return listEls.current[index] = listEl;
      },
      className: cx(index === active && 'active'),
      style: {
        height: "calc(100px + ".concat(d.sn * 30 % 100, "px)")
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Element"], {
        name: "detailList".concat(index)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        onClick: function onClick() {
          return handleClick(index);
        },
        to: 'scroll' + index,
        smooth: true,
        offset: -100,
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, _this)]
    }, index, true, {
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

  var scrollTo = function scrollTo(index) {
    if (listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {
      react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["scroller"].scrollTo("detailList".concat(index), {
        containerId: 'listWrap',
        smooth: true,
        ignoreCancelEvents: true
      });
    }
  };

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
          scrollTo(index);
        }
      } else if (scrollDir === 'DOWN') {
        if (elBottom >= windHeight - scrollDownOffset && elBottom < windHeight + itemEl.offsetHeight - scrollDownOffset) {
          setActive(index);
          scrollTo(index);
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
  var items = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (d, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: function ref(itemEl) {
        return itemsEls.current[index] = itemEl;
      },
      className: cx('detailItems'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Element"], {
        name: 'scroll' + index,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('title'),
          children: d.sn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
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
            percent: active === index && scrollMode === 'SCROLL' && Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101),
            colorType: 'YELLOW'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'LIME',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' && Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101),
            colorType: 'LIME'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'GREEN',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' && Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101),
            colorType: 'GREEN'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'SKY',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' && Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101),
            colorType: 'SKY'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'BLUE',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' && Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101),
            colorType: 'BLUE'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 5
      }, _this)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
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
    lineNumber: 158,
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
      lineNumber: 171,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
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
                lineNumber: 178,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
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
              lineNumber: 187,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwic2V0U2Nyb2xsTW9kZSIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsImluZGV4IiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJzbiIsIkRldGFpbEl0ZW1zIiwic2Nyb2xsTW9kZSIsImxpc3RXcmFwRWwiLCJpdGVtc0VscyIsImxhc3RTY3JvbGxUb3AiLCJzY3JvbGxUbyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsIm9mZnNldEhlaWdodCIsInRvcCIsInNjcm9sbGVyIiwiY29udGFpbmVySWQiLCJzbW9vdGgiLCJpZ25vcmVDYW5jZWxFdmVudHMiLCJvblNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxEaXIiLCJ3aW5kSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxVcE9mZnNldCIsInNjcm9sbERvd25PZmZzZXQiLCJpdGVtRWwiLCJlbFRvcCIsImVsQm90dG9tIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsImdldEludGVnZXIiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIiwidXNlUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFBTyxFQUFFcEIsT0FIVjtBQUlDLHNCQUFRLEVBQUVxQixRQUpYO0FBS0Msb0JBQU0sRUFBRXBCLE1BTFQ7QUFNQyx1QkFBUyxFQUFFQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUE2QkMscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBaUNBLENBeENEOztJQUFNdUQsWTs7TUFBQUEsWTtBQTBDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RpY2t5U2Nyb2xsLjQ3M2JkNzljNjc4NjlmMDZjMmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL3N0aWNreVNjcm9sbC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZGV0YWlsRGF0YSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL2RldGFpbERhdGFcIjtcclxuaW1wb3J0IHtFbGVtZW50LCBMaW5rIGFzIFNjcm9sbExpbmt9IGZyb20gXCJyZWFjdC1zY3JvbGwvbW9kdWxlc1wiO1xyXG5pbXBvcnQge0V2ZW50cywgc2Nyb2xsZXJ9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHtSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaXJjbGVQcm9ncmVzcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY2lyY2xlUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHtnZXRJbnRlZ2VyfSBmcm9tIFwiLi4vc3JjL3V0aWwvZ2V0SW50ZWdlclwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbnR5cGUgU0NST0xMX01PREUgPSAnU0NST0xMJyB8ICdDTElDSyc7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsTGlzdFByb3BzIHtcclxuXHRzZXRTY3JvbGxNb2RlOiAoc2Nyb2xsTW9kZTogU0NST0xMX01PREUpID0+IHZvaWQ7XHJcblx0bGlzdEVsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0YWN0aXZlOiBudW1iZXI7XHJcblx0c2V0QWN0aXZlOiAoc246IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsTGlzdCA9IChwcm9wczogRGV0YWlsTGlzdFByb3BzKSA9PiB7XHJcblx0Y29uc3Qge3NldFNjcm9sbE1vZGUsIGxpc3RFbHMsIGFjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRTY3JvbGxNb2RlKCdDTElDSycpO1xyXG5cdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHJcblx0XHQvL+yKpO2BrOuhpCDrgZ3rgpjrqbQg7Iqk7YGs66GkIOuqqOuTnOuhnCDrs4Dqsr1cclxuXHRcdEV2ZW50cy5zY3JvbGxFdmVudC5yZWdpc3RlcignZW5kJywgKHRvLCBlbGVtZW50KSA9PiB7XHJcblx0XHRcdHNldFNjcm9sbE1vZGUoJ1NDUk9MTCcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkLCBpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGxpIGtleT17aW5kZXh9IHJlZj17KGxpc3RFbCkgPT4gbGlzdEVscy5jdXJyZW50W2luZGV4XSA9IGxpc3RFbH1cclxuXHRcdFx0XHRjbGFzc05hbWU9e2N4KGluZGV4ID09PSBhY3RpdmUgJiYgJ2FjdGl2ZScpfSBzdHlsZT17e2hlaWdodDogYGNhbGMoMTAwcHggKyAke2Quc24gKiAzMCAlIDEwMH1weClgfX0+XHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT17YGRldGFpbExpc3Qke2luZGV4fWB9Lz5cclxuXHRcdFx0XHQ8U2Nyb2xsTGlua1xyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaW5kZXgpfVxyXG5cdFx0XHRcdFx0dG89eydzY3JvbGwnICsgaW5kZXh9XHJcblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRvZmZzZXQ9ey0xMDB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2Quc259XHJcblx0XHRcdFx0PC9TY3JvbGxMaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57bGlzdH08Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxJdGVtc1Byb3BzIHtcclxuXHRzY3JvbGxNb2RlOiBTQ1JPTExfTU9ERTtcclxuXHRsaXN0V3JhcEVsOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG5cdGxpc3RFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGl0ZW1zRWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChhY3RpdmU6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsSXRlbXMgPSAocHJvcHM6IERldGFpbEl0ZW1zUHJvcHMpID0+IHtcclxuXHRjb25zdCB7c2Nyb2xsTW9kZSwgbGlzdFdyYXBFbCwgbGlzdEVscywgaXRlbXNFbHMsIGFjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcblxyXG5cdGNvbnN0IHNjcm9sbFRvID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGlmIChsaXN0RWxzLmN1cnJlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIDE1MCA+PSBsaXN0V3JhcEVsLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IHx8IGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDEwMCkge1xyXG5cdFx0XHRzY3JvbGxlci5zY3JvbGxUbyhgZGV0YWlsTGlzdCR7aW5kZXh9YCwge1xyXG5cdFx0XHRcdGNvbnRhaW5lcklkOiAnbGlzdFdyYXAnLFxyXG5cdFx0XHRcdHNtb290aDogdHJ1ZSxcclxuXHRcdFx0XHRpZ25vcmVDYW5jZWxFdmVudHM6IHRydWUsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG5cdFx0aWYgKHNjcm9sbE1vZGUgIT09ICdTQ1JPTEwnKSByZXR1cm47XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdGNvbnN0IHNjcm9sbERpciA9IHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3AgPyAnVVAnIDogJ0RPV04nO1xyXG5cdFx0Y29uc3Qgd2luZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdGNvbnN0IHNjcm9sbFVwT2Zmc2V0ID0gd2luZEhlaWdodCAqIDAuNDtcclxuXHRcdGNvbnN0IHNjcm9sbERvd25PZmZzZXQgPSAzMDA7XHJcblxyXG5cdFx0aXRlbXNFbHMuY3VycmVudC5tYXAoKGl0ZW1FbCwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKGFjdGl2ZSA9PT0gaW5kZXgpIHJldHVybjtcclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdFx0Y29uc3QgZWxCb3R0b20gPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHJcblx0XHRcdGlmIChzY3JvbGxEaXIgPT09ICdVUCcpIHtcclxuXHRcdFx0XHRpZiAoZWxUb3AgPD0gc2Nyb2xsVXBPZmZzZXQgJiYgZWxUb3AgPiAtKGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxVcE9mZnNldCkpIHtcclxuXHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0XHRzY3JvbGxUbyhpbmRleCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbERpciA9PT0gJ0RPV04nKSB7XHJcblx0XHRcdFx0aWYgKGVsQm90dG9tID49IHdpbmRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0ICYmIGVsQm90dG9tIDwgd2luZEhlaWdodCArIGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0KSB7XHJcblx0XHRcdFx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cdFx0XHRcdFx0c2Nyb2xsVG8oaW5kZXgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cdFx0fSlcclxuXHR9LCBbYWN0aXZlLCBzY3JvbGxNb2RlXSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQsIGluZGV4KSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGtleT17aW5kZXh9IHJlZj17KGl0ZW1FbCkgPT4gaXRlbXNFbHMuY3VycmVudFtpbmRleF0gPSBpdGVtRWx9IGNsYXNzTmFtZT17Y3goJ2RldGFpbEl0ZW1zJyl9PlxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9eydzY3JvbGwnICsgaW5kZXh9PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e2Quc259PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLCB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMjBweCAwJ319PlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydZRUxMT1cnfSByPXs2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnICYmIGdldEludGVnZXIoMTAxKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclR5cGU9eydZRUxMT1cnfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0xJTUUnfSByPXs2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnICYmIGdldEludGVnZXIoMTAxKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclR5cGU9eydMSU1FJ30vPlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydHUkVFTid9IHI9ezYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBlcmNlbnQ9e2FjdGl2ZSA9PT0gaW5kZXggJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgJiYgZ2V0SW50ZWdlcigxMDEpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yVHlwZT17J0dSRUVOJ30vPlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydTS1knfSByPXs2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnICYmIGdldEludGVnZXIoMTAxKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclR5cGU9eydTS1knfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0JMVUUnfSByPXs2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnICYmIGdldEludGVnZXIoMTAxKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclR5cGU9eydCTFVFJ30vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdzY3JvbGxUb3AnKX0vPlxyXG5cdClcclxufTtcclxuXHJcbmNvbnN0IFN0aWNreVNjcm9sbCA9ICgpID0+IHtcclxuXHRjb25zdCBbc2Nyb2xsTW9kZSwgc2V0U2Nyb2xsTW9kZV0gPSB1c2VTdGF0ZTxTQ1JPTExfTU9ERT4oJ1NDUk9MTCcpO1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBsaXN0V3JhcEVsID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHRjb25zdCBsaXN0RWxzID0gdXNlUmVmPEFycmF5PEhUTUxFbGVtZW50Pj4oW10pO1xyXG5cdGNvbnN0IGl0ZW1zRWxzID0gdXNlUmVmPEFycmF5PEhUTUxFbGVtZW50Pj4oW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdiYW5uZXInKX0vPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50c1dyYXAnKX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3N1bW1hcnknKX0vPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuXHRcdFx0XHRcdFx0PGRpdiByZWY9e2xpc3RXcmFwRWx9IGlkPSdsaXN0V3JhcCcgY2xhc3NOYW1lPXtjeCgnbGlzdCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsTGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRTY3JvbGxNb2RlPXtzZXRTY3JvbGxNb2RlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0RWxzPXtsaXN0RWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2RldGFpbCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8RGV0YWlsSXRlbXNcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbE1vZGU9e3Njcm9sbE1vZGV9XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0V3JhcEVsPXtsaXN0V3JhcEVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zRWxzPXtpdGVtc0Vsc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTY3JvbGxUb3AvPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5U2Nyb2xsO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==