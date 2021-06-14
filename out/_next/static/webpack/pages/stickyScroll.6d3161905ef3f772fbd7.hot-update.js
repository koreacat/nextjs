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

  var listWrapEl = props.listWrapEl,
      listEls = props.listEls,
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
      if (active === index) return;
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

      if (listEls.current[active].getBoundingClientRect().top <= 100 || listEls.current[active].getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight) {
        console.log('e');
        react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["animateScroll"].scrollTo(active * 100, {
          containerId: 'listWrap',
          smooth: false
        });
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  };

  var onAutoScroll = function onAutoScroll() {
    if (scrollMode !== 'SCROLL') return;
    listEls.current.map(function (listEl, index) {
      if (index === active) {
        if (listEl.getBoundingClientRect().top <= 100 || listEl.getBoundingClientRect().bottom - 150 >= listWrapEl.current.offsetHeight) {
          react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["animateScroll"].scrollTo(active * 100, {
            containerId: 'listWrap',
            smooth: false
          });
        }
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    document.addEventListener('scroll', onScroll); // document.addEventListener('scroll', onAutoScroll);

    return function () {
      document.removeEventListener('scroll', onScroll); // document.removeEventListener('scroll', onAutoScroll);
    };
  }, [active]);
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
          lineNumber: 133,
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
        lineNumber: 132,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  var listWrapEl = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var listEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  var itemsEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('contents'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            ref: listWrapEl,
            id: "listWrap",
            className: cx('list'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailList, {
                listEls: listEls,
                active: active,
                setActive: setActive
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
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
          lineNumber: 167,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 3
  }, _this);
};

_s2(StickyScroll, "00mQlBUdpZLTeox/6pt3i9CuyGc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwic2Nyb2xsTW9kZSIsIkRldGFpbExpc3QiLCJwcm9wcyIsImxpc3RFbHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsInNuIiwiRXZlbnRzIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInRvIiwiZWxlbWVudCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsImxpc3RFbCIsImN1cnJlbnQiLCJEZXRhaWxJdGVtcyIsImxpc3RXcmFwRWwiLCJpdGVtc0VscyIsImxhc3RTY3JvbGxUb3AiLCJzY3JvbGxVcE9mZnNldCIsInNjcm9sbERvd25PZmZzZXQiLCJvblNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxEaXIiLCJ3aW5kSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpdGVtRWwiLCJpbmRleCIsImVsVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiZWxCb3R0b20iLCJib3R0b20iLCJvZmZzZXRIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbFRvIiwiY29udGFpbmVySWQiLCJzbW9vdGgiLCJvbkF1dG9TY3JvbGwiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIml0ZW1zIiwiY29udGVudHMiLCJTY3JvbGxUb3AiLCJTdGlja3lTY3JvbGwiLCJ1c2VTdGF0ZSIsInVzZVJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJ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QyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUErQkEsQ0FyQ0Q7O0lBQU1rRCxZOztNQUFBQSxZO0FBdUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGlja3lTY3JvbGwuNmQzMTYxOTA1ZWYzZjc3MmZiZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvc3RpY2t5U2Nyb2xsLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBkZXRhaWxEYXRhIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvZGV0YWlsRGF0YVwiO1xyXG5pbXBvcnQge0VsZW1lbnQsIExpbmsgYXMgU2Nyb2xsTGlua30gZnJvbSBcInJlYWN0LXNjcm9sbC9tb2R1bGVzXCI7XHJcbmltcG9ydCB7YW5pbWF0ZVNjcm9sbCwgRXZlbnRzfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7UmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbnR5cGUgU0NST0xMX01PREUgPSAnU0NST0xMJyB8ICdDTElDSyc7XHJcbmxldCBzY3JvbGxNb2RlOiBTQ1JPTExfTU9ERSA9ICdTQ1JPTEwnO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbExpc3RQcm9wcyB7XHJcblx0bGlzdEVsczogUmVmT2JqZWN0PEFycmF5PEhUTUxFbGVtZW50Pj47XHJcblx0YWN0aXZlOiBudW1iZXI7XHJcblx0c2V0QWN0aXZlOiAoc246IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsTGlzdCA9IChwcm9wczogRGV0YWlsTGlzdFByb3BzKSA9PiB7XHJcblx0Y29uc3Qge2xpc3RFbHMsIGFjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChzbjogbnVtYmVyKSA9PiB7XHJcblx0XHRzY3JvbGxNb2RlID0gJ0NMSUNLJztcclxuXHRcdHNldEFjdGl2ZShzbik7XHJcblxyXG5cdFx0Ly/siqTtgazroaQg64Gd64KY66m0IOyKpO2BrOuhpCDrqqjrk5zroZwg67OA6rK9XHJcblx0XHRFdmVudHMuc2Nyb2xsRXZlbnQucmVnaXN0ZXIoJ2VuZCcsICh0bywgZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRzY3JvbGxNb2RlID0gJ1NDUk9MTCc7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaSBrZXk9e2Quc259IHJlZj17KGxpc3RFbCkgPT4gbGlzdEVscy5jdXJyZW50W2Quc25dID0gbGlzdEVsfSBjbGFzc05hbWU9e2N4KGQuc24gPT09IGFjdGl2ZSAmJiAnYWN0aXZlJyl9PlxyXG5cdFx0XHRcdDxTY3JvbGxMaW5rXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhkLnNuKX1cclxuXHRcdFx0XHRcdHRvPXsnc2Nyb2xsJyArIGQuc259XHJcblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRvZmZzZXQ9ey0xMDB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2Quc259XHJcblx0XHRcdFx0PC9TY3JvbGxMaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57bGlzdH08Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxJdGVtc1Byb3BzIHtcclxuXHRsaXN0V3JhcEVsOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG5cdGxpc3RFbHM6IFJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+O1xyXG5cdGl0ZW1zRWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PjtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChhY3RpdmU6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsSXRlbXMgPSAocHJvcHM6IERldGFpbEl0ZW1zUHJvcHMpID0+IHtcclxuXHRjb25zdCB7bGlzdFdyYXBFbCwgbGlzdEVscywgaXRlbXNFbHMsIGFjdGl2ZSwgc2V0QWN0aXZlfSA9IHByb3BzO1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHRjb25zdCBzY3JvbGxVcE9mZnNldCA9IDMwMDtcclxuXHRjb25zdCBzY3JvbGxEb3duT2Zmc2V0ID0gMzAwO1xyXG5cclxuXHRjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuXHRcdGlmIChzY3JvbGxNb2RlICE9PSAnU0NST0xMJykgcmV0dXJuO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRjb25zdCBzY3JvbGxEaXIgPSBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wID8gJ1VQJyA6ICdET1dOJztcclxuXHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0aXRlbXNFbHMuY3VycmVudC5tYXAoKGl0ZW1FbCwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYoYWN0aXZlID09PSBpbmRleCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdFx0Y29uc3QgZWxCb3R0b20gPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHJcblx0XHRcdGlmIChzY3JvbGxEaXIgPT09ICdVUCcpIHtcclxuXHRcdFx0XHRpZiAoZWxUb3AgPD0gc2Nyb2xsVXBPZmZzZXQgJiYgZWxUb3AgPiAtKGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxVcE9mZnNldCkpIHtcclxuXHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdET1dOJykge1xyXG5cdFx0XHRcdGlmIChlbEJvdHRvbSA+PSB3aW5kSGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCAmJiBlbEJvdHRvbSA8IHdpbmRIZWlnaHQgKyBpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRG93bk9mZnNldCkge1xyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGxpc3RFbHMuY3VycmVudFthY3RpdmVdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAxMDAgfHwgbGlzdEVscy5jdXJyZW50W2FjdGl2ZV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gMTUwID49IGxpc3RXcmFwRWwuY3VycmVudC5vZmZzZXRIZWlnaHQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZScpO1xyXG5cclxuXHRcdFx0XHRhbmltYXRlU2Nyb2xsLnNjcm9sbFRvKGFjdGl2ZSAqIDEwMCwge1xyXG5cdFx0XHRcdFx0Y29udGFpbmVySWQ6ICdsaXN0V3JhcCcsXHJcblx0XHRcdFx0XHRzbW9vdGg6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25BdXRvU2Nyb2xsID0gKCkgPT4ge1xyXG5cdFx0aWYgKHNjcm9sbE1vZGUgIT09ICdTQ1JPTEwnKSByZXR1cm47XHJcblx0XHRsaXN0RWxzLmN1cnJlbnQubWFwKChsaXN0RWwsIGluZGV4KSA9PiB7XHJcblx0XHRcdGlmKGluZGV4ID09PSBhY3RpdmUpIHtcclxuXHRcdFx0XHRpZihsaXN0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDEwMCB8fCBsaXN0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gMTUwID49IGxpc3RXcmFwRWwuY3VycmVudC5vZmZzZXRIZWlnaHQpIHtcclxuXHRcdFx0XHRcdGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8oYWN0aXZlICogMTAwLCB7XHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lcklkOiAnbGlzdFdyYXAnLFxyXG5cdFx0XHRcdFx0XHRzbW9vdGg6IGZhbHNlLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cdFx0Ly8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25BdXRvU2Nyb2xsKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cdFx0XHQvLyBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkF1dG9TY3JvbGwpO1xyXG5cdFx0fSlcclxuXHR9LCBbYWN0aXZlXSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYga2V5PXtkLnNufSByZWY9eyhpdGVtRWwpID0+IGl0ZW1zRWxzLmN1cnJlbnRbZC5zbl0gPSBpdGVtRWx9IGNsYXNzTmFtZT17Y3goJ2RldGFpbEl0ZW1zJyl9PlxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9eydzY3JvbGwnICsgZC5zbn0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdzY3JvbGxUb3AnKX0vPlxyXG5cdClcclxufTtcclxuXHJcbmNvbnN0IFN0aWNreVNjcm9sbCA9ICgpID0+IHtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgbGlzdFdyYXBFbCA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblx0Y29uc3QgbGlzdEVscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KFtdKTtcclxuXHRjb25zdCBpdGVtc0VscyA9IHVzZVJlZjxBcnJheTxIVE1MRWxlbWVudD4+KFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFubmVyJyl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHNXcmFwJyl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzdW1tYXJ5Jyl9Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgcmVmPXtsaXN0V3JhcEVsfSBpZD0nbGlzdFdyYXAnIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERldGFpbExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkZXRhaWwnKX0+XHJcblx0XHRcdFx0XHRcdFx0PERldGFpbEl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0V3JhcEVsPXtsaXN0V3JhcEVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdEVscz17bGlzdEVsc31cclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zRWxzPXtpdGVtc0Vsc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTY3JvbGxUb3AvPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5U2Nyb2xsO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==