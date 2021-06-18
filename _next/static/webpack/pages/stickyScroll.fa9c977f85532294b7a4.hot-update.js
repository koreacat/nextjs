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
        ignoreCancelEvents: true,
        offset: -1
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
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'YELLOW'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
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
            lineNumber: 132,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'SKY',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'SKY'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_circleProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: 'BLUE',
            r: 60,
            percent: active === index && scrollMode === 'SCROLL' ? Object(_src_util_getInteger__WEBPACK_IMPORTED_MODULE_8__["getInteger"])(101) : 0,
            colorType: 'BLUE'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
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
          lineNumber: 142,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }, _this)
    }, index, false, {
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
    lineNumber: 159,
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
      lineNumber: 172,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
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
                lineNumber: 179,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
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
              lineNumber: 188,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 171,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwic2V0U2Nyb2xsTW9kZSIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsImluZGV4IiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJzbiIsIkRldGFpbEl0ZW1zIiwic2Nyb2xsTW9kZSIsImxpc3RXcmFwRWwiLCJpdGVtc0VscyIsImxhc3RTY3JvbGxUb3AiLCJzY3JvbGxUbyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsIm9mZnNldEhlaWdodCIsInRvcCIsInNjcm9sbGVyIiwiY29udGFpbmVySWQiLCJzbW9vdGgiLCJpZ25vcmVDYW5jZWxFdmVudHMiLCJvZmZzZXQiLCJvblNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxEaXIiLCJ3aW5kSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxVcE9mZnNldCIsInNjcm9sbERvd25PZmZzZXQiLCJpdGVtRWwiLCJlbFRvcCIsImVsQm90dG9tIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsImdldEludGVnZXIiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIiwidXNlUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUVULEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsbUNBQ0MscUVBQUMsV0FBRDtBQUNDLHdCQUFVLEVBQUUwQixVQURiO0FBRUMsd0JBQVUsRUFBRUMsVUFGYjtBQUdDLHFCQUFPLEVBQUVwQixPQUhWO0FBSUMsc0JBQVEsRUFBRXFCLFFBSlg7QUFLQyxvQkFBTSxFQUFFcEIsTUFMVDtBQU1DLHVCQUFTLEVBQUVDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQTZCQyxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQ0EsQ0F4Q0Q7O0lBQU13RCxZOztNQUFBQSxZO0FBMENTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGlja3lTY3JvbGwuZmE5Yzk3N2Y4NTUzMjI5NGI3YTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvc3RpY2t5U2Nyb2xsLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBkZXRhaWxEYXRhIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvZGV0YWlsRGF0YVwiO1xyXG5pbXBvcnQge0VsZW1lbnQsIExpbmsgYXMgU2Nyb2xsTGlua30gZnJvbSBcInJlYWN0LXNjcm9sbC9tb2R1bGVzXCI7XHJcbmltcG9ydCB7RXZlbnRzLCBzY3JvbGxlcn0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQge1JlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENpcmNsZVByb2dyZXNzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jaXJjbGVQcm9ncmVzc1wiO1xyXG5pbXBvcnQge2dldEludGVnZXJ9IGZyb20gXCIuLi9zcmMvdXRpbC9nZXRJbnRlZ2VyXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxudHlwZSBTQ1JPTExfTU9ERSA9ICdTQ1JPTEwnIHwgJ0NMSUNLJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaXN0UHJvcHMge1xyXG5cdHNldFNjcm9sbE1vZGU6IChzY3JvbGxNb2RlOiBTQ1JPTExfTU9ERSkgPT4gdm9pZDtcclxuXHRsaXN0RWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChzbjogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxMaXN0ID0gKHByb3BzOiBEZXRhaWxMaXN0UHJvcHMpID0+IHtcclxuXHRjb25zdCB7c2V0U2Nyb2xsTW9kZSwgbGlzdEVscywgYWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdHNldFNjcm9sbE1vZGUoJ0NMSUNLJyk7XHJcblx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cclxuXHRcdC8v7Iqk7YGs66GkIOuBneuCmOuptCDsiqTtgazroaQg66qo65Oc66GcIOuzgOqyvVxyXG5cdFx0RXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKCdlbmQnLCAodG8sIGVsZW1lbnQpID0+IHtcclxuXHRcdFx0c2V0U2Nyb2xsTW9kZSgnU0NST0xMJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ID0gZGV0YWlsRGF0YS5tYXAoKGQsIGluZGV4KSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkga2V5PXtpbmRleH0gcmVmPXsobGlzdEVsKSA9PiBsaXN0RWxzLmN1cnJlbnRbaW5kZXhdID0gbGlzdEVsfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y3goaW5kZXggPT09IGFjdGl2ZSAmJiAnYWN0aXZlJyl9IHN0eWxlPXt7aGVpZ2h0OiBgY2FsYygxMDBweCArICR7ZC5zbiAqIDMwICUgMTAwfXB4KWB9fT5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPXtgZGV0YWlsTGlzdCR7aW5kZXh9YH0vPlxyXG5cdFx0XHRcdDxTY3JvbGxMaW5rXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpbmRleCl9XHJcblx0XHRcdFx0XHR0bz17J3Njcm9sbCcgKyBpbmRleH1cclxuXHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cclxuXHRcdFx0XHRcdG9mZnNldD17LTEwMH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7ZC5zbn1cclxuXHRcdFx0XHQ8L1Njcm9sbExpbms+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntsaXN0fTwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5cclxuaW50ZXJmYWNlIERldGFpbEl0ZW1zUHJvcHMge1xyXG5cdHNjcm9sbE1vZGU6IFNDUk9MTF9NT0RFO1xyXG5cdGxpc3RXcmFwRWw6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcblx0bGlzdEVsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0aXRlbXNFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKGFjdGl2ZTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxJdGVtcyA9IChwcm9wczogRGV0YWlsSXRlbXNQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtzY3JvbGxNb2RlLCBsaXN0V3JhcEVsLCBsaXN0RWxzLCBpdGVtc0VscywgYWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuXHJcblx0Y29uc3Qgc2Nyb2xsVG8gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYgKGxpc3RFbHMuY3VycmVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gMTUwID49IGxpc3RXcmFwRWwuY3VycmVudC5vZmZzZXRIZWlnaHQgfHwgbGlzdEVscy5jdXJyZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMTAwKSB7XHJcblx0XHRcdHNjcm9sbGVyLnNjcm9sbFRvKGBkZXRhaWxMaXN0JHtpbmRleH1gLCB7XHJcblx0XHRcdFx0Y29udGFpbmVySWQ6ICdsaXN0V3JhcCcsXHJcblx0XHRcdFx0c21vb3RoOiB0cnVlLFxyXG5cdFx0XHRcdGlnbm9yZUNhbmNlbEV2ZW50czogdHJ1ZSxcclxuXHRcdFx0XHRvZmZzZXQ6IC0xXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG5cdFx0aWYgKHNjcm9sbE1vZGUgIT09ICdTQ1JPTEwnKSByZXR1cm47XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdGNvbnN0IHNjcm9sbERpciA9IHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3AgPyAnVVAnIDogJ0RPV04nO1xyXG5cdFx0Y29uc3Qgd2luZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdGNvbnN0IHNjcm9sbFVwT2Zmc2V0ID0gd2luZEhlaWdodCAqIDAuNDtcclxuXHRcdGNvbnN0IHNjcm9sbERvd25PZmZzZXQgPSAzMDA7XHJcblxyXG5cdFx0aXRlbXNFbHMuY3VycmVudC5tYXAoKGl0ZW1FbCwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKGFjdGl2ZSA9PT0gaW5kZXgpIHJldHVybjtcclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdFx0Y29uc3QgZWxCb3R0b20gPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHJcblx0XHRcdGlmIChzY3JvbGxEaXIgPT09ICdVUCcpIHtcclxuXHRcdFx0XHRpZiAoZWxUb3AgPD0gc2Nyb2xsVXBPZmZzZXQgJiYgZWxUb3AgPiAtKGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxVcE9mZnNldCkpIHtcclxuXHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0XHRzY3JvbGxUbyhpbmRleCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbERpciA9PT0gJ0RPV04nKSB7XHJcblx0XHRcdFx0aWYgKGVsQm90dG9tID49IHdpbmRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0ICYmIGVsQm90dG9tIDwgd2luZEhlaWdodCArIGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0KSB7XHJcblx0XHRcdFx0XHRzZXRBY3RpdmUoaW5kZXgpO1xyXG5cdFx0XHRcdFx0c2Nyb2xsVG8oaW5kZXgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cdFx0fSlcclxuXHR9LCBbYWN0aXZlLCBzY3JvbGxNb2RlXSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQsIGluZGV4KSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGtleT17aW5kZXh9IHJlZj17KGl0ZW1FbCkgPT4gaXRlbXNFbHMuY3VycmVudFtpbmRleF0gPSBpdGVtRWx9IGNsYXNzTmFtZT17Y3goJ2RldGFpbEl0ZW1zJyl9PlxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9eydzY3JvbGwnICsgaW5kZXh9PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e2Quc259PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLCB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMjBweCAwJ319PlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydZRUxMT1cnfSByPXs2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnID8gZ2V0SW50ZWdlcigxMDEpIDogMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclR5cGU9eydZRUxMT1cnfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0xJTUUnfSByPXs2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnID8gZ2V0SW50ZWdlcigxMDEpIDogMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclR5cGU9eydMSU1FJ30vPlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydHUkVFTid9IHI9ezYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBlcmNlbnQ9e2FjdGl2ZSA9PT0gaW5kZXggJiYgc2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgPyBnZXRJbnRlZ2VyKDEwMSkgOiAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yVHlwZT17J0dSRUVOJ30vPlxyXG5cdFx0XHRcdFx0XHQ8Q2lyY2xlUHJvZ3Jlc3MgdGl0bGU9eydTS1knfSByPXs2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnID8gZ2V0SW50ZWdlcigxMDEpIDogMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclR5cGU9eydTS1knfS8+XHJcblx0XHRcdFx0XHRcdDxDaXJjbGVQcm9ncmVzcyB0aXRsZT17J0JMVUUnfSByPXs2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJjZW50PXthY3RpdmUgPT09IGluZGV4ICYmIHNjcm9sbE1vZGUgPT09ICdTQ1JPTEwnID8gZ2V0SW50ZWdlcigxMDEpIDogMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclR5cGU9eydCTFVFJ30vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdzY3JvbGxUb3AnKX0vPlxyXG5cdClcclxufTtcclxuXHJcbmNvbnN0IFN0aWNreVNjcm9sbCA9ICgpID0+IHtcclxuXHRjb25zdCBbc2Nyb2xsTW9kZSwgc2V0U2Nyb2xsTW9kZV0gPSB1c2VTdGF0ZTxTQ1JPTExfTU9ERT4oJ1NDUk9MTCcpO1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBsaXN0V3JhcEVsID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHRjb25zdCBsaXN0RWxzID0gdXNlUmVmPEFycmF5PEhUTUxFbGVtZW50Pj4oW10pO1xyXG5cdGNvbnN0IGl0ZW1zRWxzID0gdXNlUmVmPEFycmF5PEhUTUxFbGVtZW50Pj4oW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdiYW5uZXInKX0vPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50c1dyYXAnKX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3N1bW1hcnknKX0vPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuXHRcdFx0XHRcdFx0PGRpdiByZWY9e2xpc3RXcmFwRWx9IGlkPSdsaXN0V3JhcCcgY2xhc3NOYW1lPXtjeCgnbGlzdCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsTGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRTY3JvbGxNb2RlPXtzZXRTY3JvbGxNb2RlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0RWxzPXtsaXN0RWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2RldGFpbCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8RGV0YWlsSXRlbXNcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbE1vZGU9e3Njcm9sbE1vZGV9XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0V3JhcEVsPXtsaXN0V3JhcEVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zRWxzPXtpdGVtc0Vsc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTY3JvbGxUb3AvPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5U2Nyb2xsO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==