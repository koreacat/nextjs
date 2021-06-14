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

var DetailList = function DetailList(props) {
  var scrollMode = props.scrollMode,
      setScrollMode = props.setScrollMode,
      active = props.active,
      setActive = props.setActive;

  var handleClick = function handleClick(sn) {
    scrollMode !== 'CLICK' && setScrollMode('CLICK');
    setActive(sn);
  };

  var list = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (d) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
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
        lineNumber: 29,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      setScrollMode = props.setScrollMode,
      setActive = props.setActive;
  var itemsEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  var lastScrollTop = 0;
  var scrollUpOffset = 300;
  var scrollDownOffset = 300;
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    document.addEventListener('scroll', function () {
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
      }); //TODO 스크롤이 안보이면 스크롤 이동
      // animateScroll.scrollTo(sn * 100, {
      // 	containerId: 'listEl',
      // 	smooth: true
      // });
    }, false);
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
          lineNumber: 97,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 6
        }, _this)]
      }, d.sn, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items
  }, void 0, false);
};

_s(DetailItems, "duK4hogXKruilIsv/t0refJjK2w=");

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
    lineNumber: 115,
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('contents'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "listEl",
            className: cx('list'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailList, {
                scrollMode: scrollMode,
                setScrollMode: setScrollMode,
                active: active,
                setActive: setActive
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              scrollMode: scrollMode,
              setScrollMode: setScrollMode,
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 3
  }, _this);
};

_s2(StickyScroll, "FG01ZHGEQEITNn3T/zQY7jd0cXI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwic2Nyb2xsTW9kZSIsInNldFNjcm9sbE1vZGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayIsInNuIiwibGlzdCIsImRldGFpbERhdGEiLCJtYXAiLCJkIiwiRGV0YWlsSXRlbXMiLCJpdGVtc0VscyIsInVzZVJlZiIsImxhc3RTY3JvbGxUb3AiLCJzY3JvbGxVcE9mZnNldCIsInNjcm9sbERvd25PZmZzZXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbERpciIsIndpbmRIZWlnaHQiLCJpbm5lckhlaWdodCIsImN1cnJlbnQiLCJpdGVtRWwiLCJpbmRleCIsImVsVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiZWxCb3R0b20iLCJib3R0b20iLCJvZmZzZXRIZWlnaHQiLCJpdGVtcyIsImNvbnRlbnRzIiwiU2Nyb2xsVG9wIiwic2Nyb2xsVG8iLCJTdGlja3lTY3JvbGwiLCJ1c2VTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNEZBQWhCLENBQVg7O0FBU0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUE0QjtBQUFBLE1BQ3ZDQyxVQUR1QyxHQUNTRCxLQURULENBQ3ZDQyxVQUR1QztBQUFBLE1BQzNCQyxhQUQyQixHQUNTRixLQURULENBQzNCRSxhQUQyQjtBQUFBLE1BQ1pDLE1BRFks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QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFXQztBQUFLLHFCQUFTLEVBQUVULEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsbUNBQ0MscUVBQUMsV0FBRDtBQUNDLHdCQUFVLEVBQUVNLFVBRGI7QUFFQywyQkFBYSxFQUFFQyxhQUZoQjtBQUdDLHVCQUFTLEVBQUVFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQTBCQyxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE4QkEsQ0FsQ0Q7O0lBQU1vQyxZOztNQUFBQSxZO0FBb0NTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGlja3lTY3JvbGwuYjE0YTE2NjE5MmRjMzc2ZGI1YTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvc3RpY2t5U2Nyb2xsLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBkZXRhaWxEYXRhIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvZGV0YWlsRGF0YVwiO1xyXG5pbXBvcnQge0VsZW1lbnQsIExpbmsgYXMgU2Nyb2xsTGlua30gZnJvbSBcInJlYWN0LXNjcm9sbC9tb2R1bGVzXCI7XHJcbmltcG9ydCB7YW5pbWF0ZVNjcm9sbH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbExpc3RQcm9wcyB7XHJcblx0c2Nyb2xsTW9kZTogU0NST0xMX01PREU7XHJcblx0c2V0U2Nyb2xsTW9kZTogKHNjcm9sbE1vZGU6IFNDUk9MTF9NT0RFKSA9PiB2b2lkO1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKHNuOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbExpc3RQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtzY3JvbGxNb2RlLCBzZXRTY3JvbGxNb2RlLCBhY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoc246IG51bWJlcikgPT4ge1xyXG5cdFx0c2Nyb2xsTW9kZSAhPT0gJ0NMSUNLJyAmJiBzZXRTY3JvbGxNb2RlKCdDTElDSycpO1xyXG5cdFx0c2V0QWN0aXZlKHNuKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaSBrZXk9e2Quc259IGNsYXNzTmFtZT17Y3goZC5zbiA9PT0gYWN0aXZlICYmICdhY3RpdmUnKX0+XHJcblx0XHRcdFx0PFNjcm9sbExpbmtcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGQuc24pfVxyXG5cdFx0XHRcdFx0dG89eydzY3JvbGwnICsgZC5zbn1cclxuXHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cclxuXHRcdFx0XHRcdG9mZnNldD17LTEwMH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7ZC5zbn1cclxuXHRcdFx0XHQ8L1Njcm9sbExpbms+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntsaXN0fTwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5cclxuaW50ZXJmYWNlIERldGFpbEl0ZW1zUHJvcHMge1xyXG5cdHNjcm9sbE1vZGU6IFNDUk9MTF9NT0RFO1xyXG5cdHNldFNjcm9sbE1vZGU6IChzY3JvbGxNb2RlOiBTQ1JPTExfTU9ERSkgPT4gdm9pZDtcclxuXHRzZXRBY3RpdmU6IChhY3RpdmU6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBEZXRhaWxJdGVtcyA9IChwcm9wczogRGV0YWlsSXRlbXNQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtzY3JvbGxNb2RlLCBzZXRTY3JvbGxNb2RlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblx0Y29uc3QgaXRlbXNFbHMgPSB1c2VSZWYoW10pO1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHRjb25zdCBzY3JvbGxVcE9mZnNldCA9IDMwMDtcclxuXHRjb25zdCBzY3JvbGxEb3duT2Zmc2V0ID0gMzAwO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG5cdFx0XHRpZihzY3JvbGxNb2RlICE9PSAnU0NST0xMJykgcmV0dXJuO1xyXG5cdFx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdFx0Y29uc3Qgc2Nyb2xsRGlyID0gc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCA/ICdVUCcgOiAnRE9XTic7XHJcblx0XHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0XHRpdGVtc0Vscy5jdXJyZW50Lm1hcCgoaXRlbUVsLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGVsVG9wID0gaXRlbUVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblx0XHRcdFx0Y29uc3QgZWxCb3R0b20gPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHJcblx0XHRcdFx0aWYgKHNjcm9sbERpciA9PT0gJ1VQJykge1xyXG5cdFx0XHRcdFx0aWYgKGVsVG9wIDw9IHNjcm9sbFVwT2Zmc2V0ICYmIGVsVG9wID4gLShpdGVtRWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsVXBPZmZzZXQpKSB7XHJcblx0XHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdET1dOJykge1xyXG5cdFx0XHRcdFx0aWYgKGVsQm90dG9tID49IHdpbmRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0ICYmIGVsQm90dG9tIDwgd2luZEhlaWdodCArIGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxEb3duT2Zmc2V0KSB7XHJcblx0XHRcdFx0XHRcdHNldEFjdGl2ZShpbmRleCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsYXN0U2Nyb2xsVG9wID0gKHNjcm9sbFRvcCA8PSAwID8gMCA6IHNjcm9sbFRvcCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly9UT0RPIOyKpO2BrOuhpOydtCDslYjrs7TsnbTrqbQg7Iqk7YGs66GkIOydtOuPmVxyXG5cdFx0XHQvLyBhbmltYXRlU2Nyb2xsLnNjcm9sbFRvKHNuICogMTAwLCB7XHJcblx0XHRcdC8vIFx0Y29udGFpbmVySWQ6ICdsaXN0RWwnLFxyXG5cdFx0XHQvLyBcdHNtb290aDogdHJ1ZVxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBpdGVtcyA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHJlZj17KGl0ZW1FbCkgPT4gaXRlbXNFbHMuY3VycmVudFtkLnNuXSA9IGl0ZW1FbH0gY2xhc3NOYW1lPXtjeCgnZGV0YWlsSXRlbXMnKX0+XHJcblx0XHRcdFx0PEVsZW1lbnQga2V5PXtkLnNufSBuYW1lPXsnc2Nyb2xsJyArIGQuc259PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e2Quc259PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGRpdj57ZC5jb250ZW50c308L2Rpdj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57aXRlbXN9PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFNjcm9sbFRvcCA9ICgpID0+IHtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjeCgnc2Nyb2xsVG9wJyl9Lz5cclxuXHQpXHJcbn07XHJcblxyXG50eXBlIFNDUk9MTF9NT0RFID0gJ1NDUk9MTCcgfCAnQ0xJQ0snO1xyXG5jb25zdCBTdGlja3lTY3JvbGwgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3Njcm9sbE1vZGUsIHNldFNjcm9sbE1vZGVdID0gdXNlU3RhdGU8U0NST0xMX01PREU+KCdTQ1JPTEwnKTtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2Jhbm5lcicpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzV3JhcCcpfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3VtbWFyeScpfS8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdsaXN0RWwnIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERldGFpbExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2Nyb2xsTW9kZT17c2Nyb2xsTW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0U2Nyb2xsTW9kZT17c2V0U2Nyb2xsTW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkZXRhaWwnKX0+XHJcblx0XHRcdFx0XHRcdFx0PERldGFpbEl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxNb2RlPXtzY3JvbGxNb2RlfVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0U2Nyb2xsTW9kZT17c2V0U2Nyb2xsTW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8U2Nyb2xsVG9wLz5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreVNjcm9sbDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=