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
    react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["scroller"].scrollTo("detailList".concat(index), {
      containerId: 'listWrap',
      smooth: true,
      ignoreCancelEvents: true
    });
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
          lineNumber: 126,
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
            lineNumber: 128,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'LIME',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'LIME'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'GREEN',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'GREEN'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'SKY',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'SKY'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'BLUE',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'BLUE'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 5
      }, _this)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
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
    lineNumber: 151,
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
      lineNumber: 164,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
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
                lineNumber: 171,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
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
              lineNumber: 180,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 163,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwic2V0U2Nyb2xsTW9kZSIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsImluZGV4IiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJzbiIsIkRldGFpbEl0ZW1zIiwic2Nyb2xsTW9kZSIsImxpc3RXcmFwRWwiLCJpdGVtc0VscyIsImxhc3RTY3JvbGxUb3AiLCJzY3JvbGxUbyIsInNjcm9sbGVyIiwiY29udGFpbmVySWQiLCJzbW9vdGgiLCJpZ25vcmVDYW5jZWxFdmVudHMiLCJvblNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxEaXIiLCJ3aW5kSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxVcE9mZnNldCIsInNjcm9sbERvd25PZmZzZXQiLCJpdGVtRWwiLCJlbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsQm90dG9tIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsImdldEludGVnZXIiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIiwidXNlUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YSxFQUFFTSxhQURoQjtBQUVDLHVCQUFPLEVBQUVDLE9BRlY7QUFHQyxzQkFBTSxFQUFFQyxNQUhUO0FBSUMseUJBQVMsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFXQztBQUFLLHFCQUFTLEVBQUVULEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsbUNBQ0MscUVBQUMsV0FBRDtBQUNDLHdCQUFVLEVBQUUwQixVQURiO0FBRUMsd0JBQVUsRUFBRUMsVUFGYjtBQUdDLHFCQUFPLEVBQUVwQixPQUhWO0FBSUMsc0JBQVEsRUFBRXFCLFFBSlg7QUFLQyxvQkFBTSxFQUFFcEIsTUFMVDtBQU1DLHVCQUFTLEVBQUVDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQTZCQyxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQ0EsQ0F4Q0Q7O0lBQU11RCxZOztNQUFBQSxZO0FBMENTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGlja3lTY3JvbGwuY2RjMzU2ZDdjMzI5NGJmNzNmYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvc3RpY2t5U2Nyb2xsLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBkZXRhaWxEYXRhIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvZGV0YWlsRGF0YVwiO1xyXG5pbXBvcnQge0VsZW1lbnQsIExpbmsgYXMgU2Nyb2xsTGlua30gZnJvbSBcInJlYWN0LXNjcm9sbC9tb2R1bGVzXCI7XHJcbmltcG9ydCB7YW5pbWF0ZVNjcm9sbCwgRXZlbnRzLCBzY3JvbGxlcn0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQge1JlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENpcmNsZVByb2dyZXNzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jaXJjbGVQcm9ncmVzc1wiO1xyXG5pbXBvcnQge2dldEludGVnZXJ9IGZyb20gXCIuLi9zcmMvdXRpbC9nZXRJbnRlZ2VyXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxudHlwZSBTQ1JPTExfTU9ERSA9ICdTQ1JPTEwnIHwgJ0NMSUNLJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaXN0UHJvcHMge1xyXG5cdHNldFNjcm9sbE1vZGU6IChzY3JvbGxNb2RlOiBTQ1JPTExfTU9ERSkgPT4gdm9pZDtcclxuXHRsaXN0RWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChzbjogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxMaXN0ID0gKHByb3BzOiBEZXRhaWxMaXN0UHJvcHMpID0+IHtcclxuXHRjb25zdCB7c2V0U2Nyb2xsTW9kZSwgbGlzdEVscywgYWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdHNldFNjcm9sbE1vZGUoJ0NMSUNLJyk7XHJcblx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cclxuXHRcdC8v7Iqk7YGs66GkIOuBneuCmOuptCDsiqTtgazroaQg66qo65Oc66GcIOuzgOqyvVxyXG5cdFx0RXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKCdlbmQnLCAodG8sIGVsZW1lbnQpID0+IHtcclxuXHRcdFx0c2V0U2Nyb2xsTW9kZSgnU0NST0xMJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ID0gZGV0YWlsRGF0YS5tYXAoKGQsIGluZGV4KSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkga2V5PXtpbmRleH0gcmVmPXsobGlzdEVsKSA9PiBsaXN0RWxzLmN1cnJlbnRbaW5kZXhdID0gbGlzdEVsfSBjbGFzc05hbWU9e2N4KGluZGV4ID09PSBhY3RpdmUgJiYgJ2FjdGl2ZScpfSBzdHlsZT17e2hlaWdodDogYGNhbGMoMTAwcHggKyAke2Quc24gKiAyMH1weClgfX0+XHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT17YGRldGFpbExpc3Qke2luZGV4fWB9Lz5cclxuXHRcdFx0XHQ8U2Nyb2xsTGlua1xyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaW5kZXgpfVxyXG5cdFx0XHRcdFx0dG89eydzY3JvbGwnICsgaW5kZXh9XHJcblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRvZmZzZXQ9ey0xMDB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2Quc259XHJcblx0XHRcdFx0PC9TY3JvbGxMaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57bGlzdH08Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxJdGVtc1Byb3BzIHtcclxuXHRzY3JvbGxNb2RlOiBTQ1JPTExfTU9ERTtcclxuXHRsaXN0V3JhcEVsOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG5cdGxpc3RFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGl0ZW1zRWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChhY3RpdmU6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsSXRlbXMgPSAocHJvcHM6IERldGFpbEl0ZW1zUHJvcHMpID0+IHtcclxuXHRjb25zdCB7c2Nyb2xsTW9kZSwgbGlzdFdyYXBFbCwgbGlzdEVscywgaXRlbXNFbHMsIGFjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcblxyXG5cdGNvbnN0IHNjcm9sbFRvID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdHNjcm9sbGVyLnNjcm9sbFRvKGBkZXRhaWxMaXN0JHtpbmRleH1gLCB7XHJcblx0XHRcdGNvbnRhaW5lcklkOiAnbGlzdFdyYXAnLFxyXG5cdFx0XHRzbW9vdGg6IHRydWUsXHJcblx0XHRcdGlnbm9yZUNhbmNlbEV2ZW50czp0cnVlXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuXHRcdGlmIChzY3JvbGxNb2RlICE9PSAnU0NST0xMJykgcmV0dXJuO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRjb25zdCBzY3JvbGxEaXIgPSBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wID8gJ1VQJyA6ICdET1dOJztcclxuXHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHRjb25zdCBzY3JvbGxVcE9mZnNldCA9IHdpbmRIZWlnaHQgKiAwLjQ7XHJcblx0XHRjb25zdCBzY3JvbGxEb3duT2Zmc2V0ID0gMzAwO1xyXG5cclxuXHRcdGl0ZW1zRWxzLmN1cnJlbnQubWFwKChpdGVtRWwsIGluZGV4KSA9PiB7XHJcblx0XHRcdGlmKGFjdGl2ZSA9PT0gaW5kZXgpIHJldHVybjtcclxuXHJcblx0XHRcdGNvbnN0IGVsVG9wID0gaXRlbUVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblx0XHRcdGNvbnN0IGVsQm90dG9tID0gaXRlbUVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XHJcblxyXG5cdFx0XHRpZiAoc2Nyb2xsRGlyID09PSAnVVAnKSB7XHJcblx0XHRcdFx0aWYgKGVsVG9wIDw9IHNjcm9sbFVwT2Zmc2V0ICYmIGVsVG9wID4gLShpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsVXBPZmZzZXQpKSB7XHJcblx0XHRcdFx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cdFx0XHRcdFx0aWYobGlzdEVscy5jdXJyZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSAxNTAgPj0gbGlzdFdyYXBFbC5jdXJyZW50Lm9mZnNldEhlaWdodCB8fCBsaXN0RWxzLmN1cnJlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAxMDApIHtcclxuXHRcdFx0XHRcdFx0c2Nyb2xsVG8oaW5kZXgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdET1dOJykge1xyXG5cdFx0XHRcdGlmIChlbEJvdHRvbSA+PSB3aW5kSGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCAmJiBlbEJvdHRvbSA8IHdpbmRIZWlnaHQgKyBpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCkge1xyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdGlmKGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gMTUwID49IGxpc3RXcmFwRWwuY3VycmVudC5vZmZzZXRIZWlnaHQgfHwgbGlzdEVscy5jdXJyZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMTAwKSB7XHJcblx0XHRcdFx0XHRcdHNjcm9sbFRvKGluZGV4KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsYXN0U2Nyb2xsVG9wID0gKHNjcm9sbFRvcCA8PSAwID8gMCA6IHNjcm9sbFRvcCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblx0XHR9KVxyXG5cdH0sIFthY3RpdmUsIHNjcm9sbE1vZGVdKTtcclxuXHJcblx0Y29uc3QgaXRlbXMgPSBkZXRhaWxEYXRhLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYga2V5PXtpbmRleH0gcmVmPXsoaXRlbUVsKSA9PiBpdGVtc0Vscy5jdXJyZW50W2luZGV4XSA9IGl0ZW1FbH0gY2xhc3NOYW1lPXtjeCgnZGV0YWlsSXRlbXMnKX0+XHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT17J3Njcm9sbCcgKyBpbmRleH0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYXJvdW5kJywgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzIwcHggMCd9fT5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnWUVMTE9XJ30gcj17NjB9IHBlcmNlbnQ9e2FjdGl2ZSA9PT0gaW5kZXggJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydZRUxMT1cnfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0xJTUUnfSByPXs2MH0gcGVyY2VudD17YWN0aXZlID09PSBpbmRleCAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9IGNvbG9yVHlwZT17J0xJTUUnfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0dSRUVOJ30gcj17NjB9IHBlcmNlbnQ9e2FjdGl2ZSA9PT0gaW5kZXggJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydHUkVFTid9Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZVByb2dyZXNzIHRpdGxlPXsnU0tZJ30gcj17NjB9IHBlcmNlbnQ9e2FjdGl2ZSA9PT0gaW5kZXggJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfSBjb2xvclR5cGU9eydTS1knfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0JMVUUnfSByPXs2MH0gcGVyY2VudD17YWN0aXZlID09PSBpbmRleCAmJiBzY3JvbGxNb2RlID09PSAnU0NST0xMJyA/IGdldEludGVnZXIoMTAxKSA6IDB9IGNvbG9yVHlwZT17J0JMVUUnfS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+e2QuY29udGVudHN9PC9kaXY+XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+e2l0ZW1zfTwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBTY3JvbGxUb3AgPSAoKSA9PiB7XHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17Y3goJ3Njcm9sbFRvcCcpfS8+XHJcblx0KVxyXG59O1xyXG5cclxuY29uc3QgU3RpY2t5U2Nyb2xsID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzY3JvbGxNb2RlLCBzZXRTY3JvbGxNb2RlXSA9IHVzZVN0YXRlPFNDUk9MTF9NT0RFPignU0NST0xMJyk7XHJcblx0Y29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IGxpc3RXcmFwRWwgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cdGNvbnN0IGxpc3RFbHMgPSB1c2VSZWY8QXJyYXk8SFRNTEVsZW1lbnQ+PihbXSk7XHJcblx0Y29uc3QgaXRlbXNFbHMgPSB1c2VSZWY8QXJyYXk8SFRNTEVsZW1lbnQ+PihbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2Jhbm5lcicpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzV3JhcCcpfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3VtbWFyeScpfS8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHJlZj17bGlzdFdyYXBFbH0gaWQ9J2xpc3RXcmFwJyBjbGFzc05hbWU9e2N4KCdsaXN0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxMaXN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFNjcm9sbE1vZGU9e3NldFNjcm9sbE1vZGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3RFbHM9e2xpc3RFbHN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnZGV0YWlsJyl9PlxyXG5cdFx0XHRcdFx0XHRcdDxEZXRhaWxJdGVtc1xyXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsTW9kZT17c2Nyb2xsTW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdGxpc3RXcmFwRWw9e2xpc3RXcmFwRWx9XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0RWxzPXtsaXN0RWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXNFbHM9e2l0ZW1zRWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFNjcm9sbFRvcC8+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lTY3JvbGw7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9