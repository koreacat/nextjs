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
        height: "calc(100px + ".concat(d.sn * 20, "px)")
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Element"], {
        name: "detailList".concat(index)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
        lineNumber: 39,
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

          if (listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {
            scrollTo(index);
          }
        }
      } else if (scrollDir === 'DOWN') {
        if (elBottom >= windHeight - scrollDownOffset && elBottom < windHeight + itemEl.offsetHeight - scrollDownOffset) {
          setActive(index);

          if (listEls.current[index].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight || listEls.current[index].getBoundingClientRect().top <= 100) {
            scrollTo(index);
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
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'YELLOW'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'LIME',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'LIME'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
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
            lineNumber: 132,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'BLUE',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
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
    }, index, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwic2V0U2Nyb2xsTW9kZSIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsImluZGV4IiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJzbiIsIkRldGFpbEl0ZW1zIiwic2Nyb2xsTW9kZSIsImxpc3RXcmFwRWwiLCJpdGVtc0VscyIsImxhc3RTY3JvbGxUb3AiLCJzY3JvbGxUbyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsIm9mZnNldEhlaWdodCIsInRvcCIsInNjcm9sbGVyIiwiY29udGFpbmVySWQiLCJzbW9vdGgiLCJpZ25vcmVDYW5jZWxFdmVudHMiLCJvblNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxEaXIiLCJ3aW5kSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxVcE9mZnNldCIsInNjcm9sbERvd25PZmZzZXQiLCJpdGVtRWwiLCJlbFRvcCIsImVsQm90dG9tIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsImdldEludGVnZXIiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIiwidXNlUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUM7QUFBSyxtQkFBUyxFQUFFQSxFQUFFLENBQUMsVUFBRCxDQUFsQjtBQUFBLGtDQUNDO0FBQUssZUFBRyxFQUFFMkIsVUFBVjtBQUFzQixjQUFFLEVBQUMsVUFBekI7QUFBb0MscUJBQVMsRUFBRTNCLEVBQUUsQ0FBQyxNQUFELENBQWpEO0FBQUEsbUNBQ0M7QUFBQSxxQ0FDQyxxRUFBQyxVQUFEO0FBQ0MsNkJBQWEsRUFBRU0sYUFEaEI7QUFFQyx1QkFBTyxFQUFFQyxPQUZWO0FBR0Msc0JBQU0sRUFBRUMsTUFIVDtBQUlDLHlCQUFTLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBV0M7QUFBSyxxQkFBUyxFQUFFVCxFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUFBLG1DQUNDLHFFQUFDLFdBQUQ7QUFDQyx3QkFBVSxFQUFFMEIsVUFEYjtBQUVDLHdCQUFVLEVBQUVDLFVBRmI7QUFHQyxxQkFBTyxFQUFFcEIsT0FIVjtBQUlDLHNCQUFRLEVBQUVxQixRQUpYO0FBS0Msb0JBQU0sRUFBRXBCLE1BTFQ7QUFNQyx1QkFBUyxFQUFFQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUE2QkMscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBaUNBLENBeENEOztJQUFNdUQsWTs7TUFBQUEsWTtBQTBDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RpY2t5U2Nyb2xsLjhlNzQ0ZWFkM2E4NGYzNjE0MjJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL3N0aWNreVNjcm9sbC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZGV0YWlsRGF0YSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5U2Nyb2xsL2RldGFpbERhdGFcIjtcclxuaW1wb3J0IHtFbGVtZW50LCBMaW5rIGFzIFNjcm9sbExpbmt9IGZyb20gXCJyZWFjdC1zY3JvbGwvbW9kdWxlc1wiO1xyXG5pbXBvcnQge2FuaW1hdGVTY3JvbGwsIEV2ZW50cywgc2Nyb2xsZXJ9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHtSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaXJjbGVQcm9ncmVzcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY2lyY2xlUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHtnZXRJbnRlZ2VyfSBmcm9tIFwiLi4vc3JjL3V0aWwvZ2V0SW50ZWdlclwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbnR5cGUgU0NST0xMX01PREUgPSAnU0NST0xMJyB8ICdDTElDSyc7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsTGlzdFByb3BzIHtcclxuXHRzZXRTY3JvbGxNb2RlOiAoc2Nyb2xsTW9kZTogU0NST0xMX01PREUpID0+IHZvaWQ7XHJcblx0bGlzdEVsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0YWN0aXZlOiBudW1iZXI7XHJcblx0c2V0QWN0aXZlOiAoc246IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsTGlzdCA9IChwcm9wczogRGV0YWlsTGlzdFByb3BzKSA9PiB7XHJcblx0Y29uc3Qge3NldFNjcm9sbE1vZGUsIGxpc3RFbHMsIGFjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRTY3JvbGxNb2RlKCdDTElDSycpO1xyXG5cdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHJcblx0XHQvL+yKpO2BrOuhpCDrgZ3rgpjrqbQg7Iqk7YGs66GkIOuqqOuTnOuhnCDrs4Dqsr1cclxuXHRcdEV2ZW50cy5zY3JvbGxFdmVudC5yZWdpc3RlcignZW5kJywgKHRvLCBlbGVtZW50KSA9PiB7XHJcblx0XHRcdHNldFNjcm9sbE1vZGUoJ1NDUk9MTCcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkLCBpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGxpIGtleT17aW5kZXh9IHJlZj17KGxpc3RFbCkgPT4gbGlzdEVscy5jdXJyZW50W2luZGV4XSA9IGxpc3RFbH0gY2xhc3NOYW1lPXtjeChpbmRleCA9PT0gYWN0aXZlICYmICdhY3RpdmUnKX0gc3R5bGU9e3toZWlnaHQ6IGBjYWxjKDEwMHB4ICsgJHtkLnNuICogMjB9cHgpYH19PlxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9e2BkZXRhaWxMaXN0JHtpbmRleH1gfS8+XHJcblx0XHRcdFx0PFNjcm9sbExpbmtcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4KX1cclxuXHRcdFx0XHRcdHRvPXsnc2Nyb2xsJyArIGluZGV4fVxyXG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0b2Zmc2V0PXstMTAwfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtkLnNufVxyXG5cdFx0XHRcdDwvU2Nyb2xsTGluaz5cclxuXHRcdFx0PC9saT5cclxuXHRcdClcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+e2xpc3R9PC8+XHJcblx0KTtcclxufTtcclxuXHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsSXRlbXNQcm9wcyB7XHJcblx0c2Nyb2xsTW9kZTogU0NST0xMX01PREU7XHJcblx0bGlzdFdyYXBFbDogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuXHRsaXN0RWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRpdGVtc0VsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0YWN0aXZlOiBudW1iZXI7XHJcblx0c2V0QWN0aXZlOiAoYWN0aXZlOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbEl0ZW1zID0gKHByb3BzOiBEZXRhaWxJdGVtc1Byb3BzKSA9PiB7XHJcblx0Y29uc3Qge3Njcm9sbE1vZGUsIGxpc3RXcmFwRWwsIGxpc3RFbHMsIGl0ZW1zRWxzLCBhY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHRsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG5cclxuXHRjb25zdCBzY3JvbGxUbyA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZihsaXN0RWxzLmN1cnJlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIDE1MCA+PSBsaXN0V3JhcEVsLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IHx8IGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDEwMCkge1xyXG5cdFx0XHRzY3JvbGxlci5zY3JvbGxUbyhgZGV0YWlsTGlzdCR7aW5kZXh9YCwge1xyXG5cdFx0XHRcdGNvbnRhaW5lcklkOiAnbGlzdFdyYXAnLFxyXG5cdFx0XHRcdHNtb290aDogdHJ1ZSxcclxuXHRcdFx0XHRpZ25vcmVDYW5jZWxFdmVudHM6dHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuXHRcdGlmIChzY3JvbGxNb2RlICE9PSAnU0NST0xMJykgcmV0dXJuO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRjb25zdCBzY3JvbGxEaXIgPSBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wID8gJ1VQJyA6ICdET1dOJztcclxuXHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHRjb25zdCBzY3JvbGxVcE9mZnNldCA9IHdpbmRIZWlnaHQgKiAwLjQ7XHJcblx0XHRjb25zdCBzY3JvbGxEb3duT2Zmc2V0ID0gMzAwO1xyXG5cclxuXHRcdGl0ZW1zRWxzLmN1cnJlbnQubWFwKChpdGVtRWwsIGluZGV4KSA9PiB7XHJcblx0XHRcdGlmKGFjdGl2ZSA9PT0gaW5kZXgpIHJldHVybjtcclxuXHJcblx0XHRcdGNvbnN0IGVsVG9wID0gaXRlbUVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblx0XHRcdGNvbnN0IGVsQm90dG9tID0gaXRlbUVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XHJcblxyXG5cdFx0XHRpZiAoc2Nyb2xsRGlyID09PSAnVVAnKSB7XHJcblx0XHRcdFx0aWYgKGVsVG9wIDw9IHNjcm9sbFVwT2Zmc2V0ICYmIGVsVG9wID4gLShpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsVXBPZmZzZXQpKSB7XHJcblx0XHRcdFx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cdFx0XHRcdFx0aWYobGlzdEVscy5jdXJyZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSAxNTAgPj0gbGlzdFdyYXBFbC5jdXJyZW50Lm9mZnNldEhlaWdodCB8fCBsaXN0RWxzLmN1cnJlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAxMDApIHtcclxuXHRcdFx0XHRcdFx0c2Nyb2xsVG8oaW5kZXgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdET1dOJykge1xyXG5cdFx0XHRcdGlmIChlbEJvdHRvbSA+PSB3aW5kSGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCAmJiBlbEJvdHRvbSA8IHdpbmRIZWlnaHQgKyBpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCkge1xyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdGlmKGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gMTUwID49IGxpc3RXcmFwRWwuY3VycmVudC5vZmZzZXRIZWlnaHQgfHwgbGlzdEVscy5jdXJyZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMTAwKSB7XHJcblx0XHRcdFx0XHRcdHNjcm9sbFRvKGluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxhc3RTY3JvbGxUb3AgPSAoc2Nyb2xsVG9wIDw9IDAgPyAwIDogc2Nyb2xsVG9wKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblxyXG5cdFx0cmV0dXJuICgoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHRcdH0pXHJcblx0fSwgW2FjdGl2ZSwgc2Nyb2xsTW9kZV0pO1xyXG5cclxuXHRjb25zdCBpdGVtcyA9IGRldGFpbERhdGEubWFwKChkLCBpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBrZXk9e2luZGV4fSByZWY9eyhpdGVtRWwpID0+IGl0ZW1zRWxzLmN1cnJlbnRbaW5kZXhdID0gaXRlbUVsfSBjbGFzc05hbWU9e2N4KCdkZXRhaWxJdGVtcycpfT5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPXsnc2Nyb2xsJyArIGluZGV4fT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ3RpdGxlJyl9PntkLnNufTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OidzcGFjZS1hcm91bmQnLCB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMjBweCAwJ319PlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydZRUxMT1cnfSByPXs2MH0gcGVyY2VudD17YWN0aXZlID09PSBpbmRleCAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9IGNvbG9yVHlwZT17J1lFTExPVyd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnTElNRSd9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnID8gZ2V0SW50ZWdlcigxMDEpIDogMH0gY29sb3JUeXBlPXsnTElNRSd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnR1JFRU4nfSByPXs2MH0gcGVyY2VudD17YWN0aXZlID09PSBpbmRleCAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9IGNvbG9yVHlwZT17J0dSRUVOJ30vPlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydTS1knfSByPXs2MH0gcGVyY2VudD17YWN0aXZlID09PSBpbmRleCAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9IGNvbG9yVHlwZT17J1NLWSd9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnQkxVRSd9IHI9ezYwfSBwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnID8gZ2V0SW50ZWdlcigxMDEpIDogMH0gY29sb3JUeXBlPXsnQkxVRSd9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj57ZC5jb250ZW50c308L2Rpdj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57aXRlbXN9PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFNjcm9sbFRvcCA9ICgpID0+IHtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjeCgnc2Nyb2xsVG9wJyl9Lz5cclxuXHQpXHJcbn07XHJcblxyXG5jb25zdCBTdGlja3lTY3JvbGwgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3Njcm9sbE1vZGUsIHNldFNjcm9sbE1vZGVdID0gdXNlU3RhdGU8U0NST0xMX01PREU+KCdTQ1JPTEwnKTtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgbGlzdFdyYXBFbCA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblx0Y29uc3QgbGlzdEVscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KFtdKTtcclxuXHRjb25zdCBpdGVtc0VscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFubmVyJyl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHNXcmFwJyl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzdW1tYXJ5Jyl9Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgcmVmPXtsaXN0V3JhcEVsfSBpZD0nbGlzdFdyYXAnIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERldGFpbExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0U2Nyb2xsTW9kZT17c2V0U2Nyb2xsTW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkZXRhaWwnKX0+XHJcblx0XHRcdFx0XHRcdFx0PERldGFpbEl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxNb2RlPXtzY3JvbGxNb2RlfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdFdyYXBFbD17bGlzdFdyYXBFbH1cclxuXHRcdFx0XHRcdFx0XHRcdGxpc3RFbHM9e2xpc3RFbHN9XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtc0Vscz17aXRlbXNFbHN9XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8U2Nyb2xsVG9wLz5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreVNjcm9sbDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=