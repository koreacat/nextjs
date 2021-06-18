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
        height: "calc(50px + ".concat(Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(30) * 5, "px)")
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
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'YELLOW'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'LIME',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'LIME'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'GREEN',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'GREEN'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'SKY',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'SKY'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'BLUE',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwic2V0U2Nyb2xsTW9kZSIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsImluZGV4IiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJnZXRJbnRlZ2VyIiwic24iLCJEZXRhaWxJdGVtcyIsInNjcm9sbE1vZGUiLCJsaXN0V3JhcEVsIiwiaXRlbXNFbHMiLCJsYXN0U2Nyb2xsVG9wIiwic2Nyb2xsVG8iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJzY3JvbGxlciIsImNvbnRhaW5lcklkIiwic21vb3RoIiwiaWdub3JlQ2FuY2VsRXZlbnRzIiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsRGlyIiwid2luZEhlaWdodCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsVXBPZmZzZXQiLCJzY3JvbGxEb3duT2Zmc2V0IiwiaXRlbUVsIiwiZWxUb3AiLCJlbEJvdHRvbSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXRlbXMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsInBhZGRpbmciLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIiwidXNlUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFEO0FBQ0Msd0JBQVUsRUFBRTJCLFVBRGI7QUFFQyx3QkFBVSxFQUFFQyxVQUZiO0FBR0MscUJBQU8sRUFBRXJCLE9BSFY7QUFJQyxzQkFBUSxFQUFFc0IsUUFKWDtBQUtDLG9CQUFNLEVBQUVyQixNQUxUO0FBTUMsdUJBQVMsRUFBRUM7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBNkJDLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlDQSxDQXhDRDs7SUFBTXVELFk7O01BQUFBLFk7QUEwQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0aWNreVNjcm9sbC43NDI5NzliMjFjNjY2M2RiNGJiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9zdGlja3lTY3JvbGwubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGRldGFpbERhdGEgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9kZXRhaWxEYXRhXCI7XHJcbmltcG9ydCB7RWxlbWVudCwgTGluayBhcyBTY3JvbGxMaW5rfSBmcm9tIFwicmVhY3Qtc2Nyb2xsL21vZHVsZXNcIjtcclxuaW1wb3J0IHtFdmVudHMsIHNjcm9sbGVyfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7UmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2lyY2xlUHJvZ3Jlc3MgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NpcmNsZVByb2dyZXNzXCI7XHJcbmltcG9ydCB7Z2V0SW50ZWdlcn0gZnJvbSBcIi4uL3NyYy91dGlsL2dldEludGVnZXJcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG50eXBlIFNDUk9MTF9NT0RFID0gJ1NDUk9MTCcgfCAnQ0xJQ0snO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbExpc3RQcm9wcyB7XHJcblx0c2V0U2Nyb2xsTW9kZTogKHNjcm9sbE1vZGU6IFNDUk9MTF9NT0RFKSA9PiB2b2lkO1xyXG5cdGxpc3RFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKHNuOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbExpc3RQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtzZXRTY3JvbGxNb2RlLCBsaXN0RWxzLCBhY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0U2Nyb2xsTW9kZSgnQ0xJQ0snKTtcclxuXHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblxyXG5cdFx0Ly/siqTtgazroaQg64Gd64KY66m0IOyKpO2BrOuhpCDrqqjrk5zroZwg67OA6rK9XHJcblx0XHRFdmVudHMuc2Nyb2xsRXZlbnQucmVnaXN0ZXIoJ2VuZCcsICh0bywgZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRzZXRTY3JvbGxNb2RlKCdTQ1JPTEwnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxpc3QgPSBkZXRhaWxEYXRhLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaSBrZXk9e2luZGV4fSByZWY9eyhsaXN0RWwpID0+IGxpc3RFbHMuY3VycmVudFtpbmRleF0gPSBsaXN0RWx9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeChpbmRleCA9PT0gYWN0aXZlICYmICdhY3RpdmUnKX0gc3R5bGU9e3toZWlnaHQ6IGBjYWxjKDUwcHggKyAke2dldEludGVnZXIoMzApICogNX1weClgfX0+XHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT17YGRldGFpbExpc3Qke2luZGV4fWB9Lz5cclxuXHRcdFx0XHQ8U2Nyb2xsTGlua1xyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaW5kZXgpfVxyXG5cdFx0XHRcdFx0dG89eydzY3JvbGwnICsgaW5kZXh9XHJcblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRvZmZzZXQ9ey0xMDB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2Quc259XHJcblx0XHRcdFx0PC9TY3JvbGxMaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57bGlzdH08Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxJdGVtc1Byb3BzIHtcclxuXHRzY3JvbGxNb2RlOiBTQ1JPTExfTU9ERTtcclxuXHRsaXN0V3JhcEVsOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG5cdGxpc3RFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGl0ZW1zRWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChhY3RpdmU6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsSXRlbXMgPSAocHJvcHM6IERldGFpbEl0ZW1zUHJvcHMpID0+IHtcclxuXHRjb25zdCB7c2Nyb2xsTW9kZSwgbGlzdFdyYXBFbCwgbGlzdEVscywgaXRlbXNFbHMsIGFjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcblxyXG5cdGNvbnN0IHNjcm9sbFRvID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGlmIChsaXN0RWxzLmN1cnJlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIDE1MCA+PSBsaXN0V3JhcEVsLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IHx8IGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDEwMCkge1xyXG5cdFx0XHRzY3JvbGxlci5zY3JvbGxUbyhgZGV0YWlsTGlzdCR7aW5kZXh9YCwge1xyXG5cdFx0XHRcdGNvbnRhaW5lcklkOiAnbGlzdFdyYXAnLFxyXG5cdFx0XHRcdHNtb290aDogdHJ1ZSxcclxuXHRcdFx0XHRpZ25vcmVDYW5jZWxFdmVudHM6IHRydWVcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcblx0XHRpZiAoc2Nyb2xsTW9kZSAhPT0gJ1NDUk9MTCcpIHJldHVybjtcclxuXHRcdGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsRGlyID0gc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCA/ICdVUCcgOiAnRE9XTic7XHJcblx0XHRjb25zdCB3aW5kSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0Y29uc3Qgc2Nyb2xsVXBPZmZzZXQgPSB3aW5kSGVpZ2h0ICogMC40O1xyXG5cdFx0Y29uc3Qgc2Nyb2xsRG93bk9mZnNldCA9IDMwMDtcclxuXHJcblx0XHRpdGVtc0Vscy5jdXJyZW50Lm1hcCgoaXRlbUVsLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRpZiAoYWN0aXZlID09PSBpbmRleCkgcmV0dXJuO1xyXG5cdFx0XHRjb25zdCBlbFRvcCA9IGl0ZW1FbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cdFx0XHRjb25zdCBlbEJvdHRvbSA9IGl0ZW1FbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xyXG5cclxuXHRcdFx0aWYgKHNjcm9sbERpciA9PT0gJ1VQJykge1xyXG5cdFx0XHRcdGlmIChlbFRvcCA8PSBzY3JvbGxVcE9mZnNldCAmJiBlbFRvcCA+IC0oaXRlbUVsLm9mZnNldEhlaWdodCAtIHNjcm9sbFVwT2Zmc2V0KSkge1xyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdHNjcm9sbFRvKGluZGV4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsRGlyID09PSAnRE9XTicpIHtcclxuXHRcdFx0XHRpZiAoZWxCb3R0b20gPj0gd2luZEhlaWdodCAtIHNjcm9sbERvd25PZmZzZXQgJiYgZWxCb3R0b20gPCB3aW5kSGVpZ2h0ICsgaXRlbUVsLm9mZnNldEhlaWdodCAtIHNjcm9sbERvd25PZmZzZXQpIHtcclxuXHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0XHRzY3JvbGxUbyhpbmRleCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsYXN0U2Nyb2xsVG9wID0gKHNjcm9sbFRvcCA8PSAwID8gMCA6IHNjcm9sbFRvcCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblx0XHR9KVxyXG5cdH0sIFthY3RpdmUsIHNjcm9sbE1vZGVdKTtcclxuXHJcblx0Y29uc3QgaXRlbXMgPSBkZXRhaWxEYXRhLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYga2V5PXtpbmRleH0gcmVmPXsoaXRlbUVsKSA9PiBpdGVtc0Vscy5jdXJyZW50W2luZGV4XSA9IGl0ZW1FbH0gY2xhc3NOYW1lPXtjeCgnZGV0YWlsSXRlbXMnKX0+XHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT17J3Njcm9sbCcgKyBpbmRleH0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcyMHB4IDAnfX0+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J1lFTExPVyd9IHI9ezYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBlcmNlbnQ9e2FjdGl2ZSA9PT0gaW5kZXggJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yVHlwZT17J1lFTExPVyd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnTElNRSd9IHI9ezYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBlcmNlbnQ9e2FjdGl2ZSA9PT0gaW5kZXggJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yVHlwZT17J0xJTUUnfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0dSRUVOJ30gcj17NjB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGVyY2VudD17YWN0aXZlID09PSBpbmRleCAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JUeXBlPXsnR1JFRU4nfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J1NLWSd9IHI9ezYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBlcmNlbnQ9e2FjdGl2ZSA9PT0gaW5kZXggJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yVHlwZT17J1NLWSd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnQkxVRSd9IHI9ezYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBlcmNlbnQ9e2FjdGl2ZSA9PT0gaW5kZXggJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yVHlwZT17J0JMVUUnfS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+e2QuY29udGVudHN9PC9kaXY+XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+e2l0ZW1zfTwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBTY3JvbGxUb3AgPSAoKSA9PiB7XHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17Y3goJ3Njcm9sbFRvcCcpfS8+XHJcblx0KVxyXG59O1xyXG5cclxuY29uc3QgU3RpY2t5U2Nyb2xsID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzY3JvbGxNb2RlLCBzZXRTY3JvbGxNb2RlXSA9IHVzZVN0YXRlPFNDUk9MTF9NT0RFPignU0NST0xMJyk7XHJcblx0Y29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IGxpc3RXcmFwRWwgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cdGNvbnN0IGxpc3RFbHMgPSB1c2VSZWY8QXJyYXk8SFRNTEVsZW1lbnQ+PihbXSk7XHJcblx0Y29uc3QgaXRlbXNFbHMgPSB1c2VSZWY8QXJyYXk8SFRNTEVsZW1lbnQ+PihbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2Jhbm5lcicpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzV3JhcCcpfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3VtbWFyeScpfS8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHJlZj17bGlzdFdyYXBFbH0gaWQ9J2xpc3RXcmFwJyBjbGFzc05hbWU9e2N4KCdsaXN0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxMaXN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFNjcm9sbE1vZGU9e3NldFNjcm9sbE1vZGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3RFbHM9e2xpc3RFbHN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnZGV0YWlsJyl9PlxyXG5cdFx0XHRcdFx0XHRcdDxEZXRhaWxJdGVtc1xyXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsTW9kZT17c2Nyb2xsTW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdGxpc3RXcmFwRWw9e2xpc3RXcmFwRWx9XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0RWxzPXtsaXN0RWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXNFbHM9e2l0ZW1zRWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFNjcm9sbFRvcC8+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lTY3JvbGw7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9