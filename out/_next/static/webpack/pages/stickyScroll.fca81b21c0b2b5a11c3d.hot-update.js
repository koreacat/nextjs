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
  var active = props.active,
      setActive = props.setActive;

  var handleClick = function handleClick(sn) {
    scrollMode = 'CLICK';
    setActive(sn); //TODO 스크롤 끝나면

    scrollMode = 'SCROLL';
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
        lineNumber: 32,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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

  var setActive = props.setActive;
  var itemsEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  var lastScrollTop = 0;
  var scrollUpOffset = 300;
  var scrollDownOffset = 300;
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    document.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
      var windHeight = window.innerHeight;
      console.log(scrollMode);
      itemsEls.current.map(function (itemEl, index) {
        var elTop = itemEl === null || itemEl === void 0 ? void 0 : itemEl.getBoundingClientRect().top;
        var elBottom = itemEl === null || itemEl === void 0 ? void 0 : itemEl.getBoundingClientRect().bottom;

        if (scrollDir === 'UP') {
          if (elTop <= scrollUpOffset && elTop > -(itemEl.offsetHeight - scrollUpOffset)) {
            scrollMode === 'SCROLL' && setActive(index);
          }
        } else if (scrollDir === 'DOWN') {
          if (elBottom >= windHeight - scrollDownOffset && elBottom < windHeight + itemEl.offsetHeight - scrollDownOffset) {
            scrollMode === 'SCROLL' && setActive(index);
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
          lineNumber: 99,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 6
        }, _this)]
      }, d.sn, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
    lineNumber: 117,
    columnNumber: 3
  }, _this);
};

_c3 = ScrollTop;

var StickyScroll = function StickyScroll() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('contents'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "listEl",
            className: cx('list'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailList, {
                active: active,
                setActive: setActive
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 3
  }, _this);
};

_s2(StickyScroll, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwic2Nyb2xsTW9kZSIsIkRldGFpbExpc3QiLCJwcm9wcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUNsaWNrIiwic24iLCJsaXN0IiwiZGV0YWlsRGF0YSIsIm1hcCIsImQiLCJEZXRhaWxJdGVtcyIsIml0ZW1zRWxzIiwidXNlUmVmIiwibGFzdFNjcm9sbFRvcCIsInNjcm9sbFVwT2Zmc2V0Iiwic2Nyb2xsRG93bk9mZnNldCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsRGlyIiwid2luZEhlaWdodCIsImlubmVySGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJpdGVtRWwiLCJpbmRleCIsImVsVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiZWxCb3R0b20iLCJib3R0b20iLCJvZmZzZXRIZWlnaHQiLCJpdGVtcyIsImNvbnRlbnRzIiwiU2Nyb2xsVG9wIiwic2Nyb2xsVG8iLCJTdGlja3lTY3JvbGwiLCJ1c2VTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNEZBQWhCLENBQVg7QUFFQSxJQUFJQyxVQUFVLEdBQUcsUUFBakI7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUE0QjtBQUFBLE1BQ3ZDQyxNQUR1QyxHQUNsQkQsS0FEa0IsQ0FDdkNDLE1BRHVDO0FBQUEsTUFDL0JDLFNBRCtCLEdBQ2xCRixLQURr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LGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQXNCQyxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEwQkEsQ0E3QkQ7O0lBQU1zQyxZOztNQUFBQSxZO0FBK0JTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGlja3lTY3JvbGwuZmNhODFiMjFjMGIyYjVhMTFjM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvc3RpY2t5U2Nyb2xsLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBkZXRhaWxEYXRhIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lTY3JvbGwvZGV0YWlsRGF0YVwiO1xyXG5pbXBvcnQge0VsZW1lbnQsIExpbmsgYXMgU2Nyb2xsTGlua30gZnJvbSBcInJlYWN0LXNjcm9sbC9tb2R1bGVzXCI7XHJcbmltcG9ydCB7YW5pbWF0ZVNjcm9sbH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxubGV0IHNjcm9sbE1vZGUgPSAnU0NST0xMJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaXN0UHJvcHMge1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKHNuOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbExpc3RQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHthY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoc246IG51bWJlcikgPT4ge1xyXG5cdFx0c2Nyb2xsTW9kZSA9ICdDTElDSyc7XHJcblx0XHRzZXRBY3RpdmUoc24pO1xyXG5cclxuXHRcdC8vVE9ETyDsiqTtgazroaQg64Gd64KY66m0XHJcblx0XHRzY3JvbGxNb2RlID0gJ1NDUk9MTCc7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkga2V5PXtkLnNufSBjbGFzc05hbWU9e2N4KGQuc24gPT09IGFjdGl2ZSAmJiAnYWN0aXZlJyl9PlxyXG5cdFx0XHRcdDxTY3JvbGxMaW5rXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhkLnNuKX1cclxuXHRcdFx0XHRcdHRvPXsnc2Nyb2xsJyArIGQuc259XHJcblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRvZmZzZXQ9ey0xMDB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2Quc259XHJcblx0XHRcdFx0PC9TY3JvbGxMaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57bGlzdH08Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxJdGVtc1Byb3BzIHtcclxuXHRzZXRBY3RpdmU6IChhY3RpdmU6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBEZXRhaWxJdGVtcyA9IChwcm9wczogRGV0YWlsSXRlbXNQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblx0Y29uc3QgaXRlbXNFbHMgPSB1c2VSZWYoW10pO1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHRjb25zdCBzY3JvbGxVcE9mZnNldCA9IDMwMDtcclxuXHRjb25zdCBzY3JvbGxEb3duT2Zmc2V0ID0gMzAwO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdFx0Y29uc3Qgc2Nyb2xsRGlyID0gc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCA/ICdVUCcgOiAnRE9XTic7XHJcblx0XHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhzY3JvbGxNb2RlKTtcclxuXHJcblx0XHRcdGl0ZW1zRWxzLmN1cnJlbnQubWFwKChpdGVtRWwsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZWxUb3AgPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdFx0XHRjb25zdCBlbEJvdHRvbSA9IGl0ZW1FbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xyXG5cclxuXHRcdFx0XHRpZiAoc2Nyb2xsRGlyID09PSAnVVAnKSB7XHJcblx0XHRcdFx0XHRpZiAoZWxUb3AgPD0gc2Nyb2xsVXBPZmZzZXQgJiYgZWxUb3AgPiAtKGl0ZW1FbC5vZmZzZXRIZWlnaHQgLSBzY3JvbGxVcE9mZnNldCkpIHtcclxuXHRcdFx0XHRcdFx0c2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgJiYgc2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHNjcm9sbERpciA9PT0gJ0RPV04nKSB7XHJcblx0XHRcdFx0XHRpZiAoZWxCb3R0b20gPj0gd2luZEhlaWdodCAtIHNjcm9sbERvd25PZmZzZXQgJiYgZWxCb3R0b20gPCB3aW5kSGVpZ2h0ICsgaXRlbUVsLm9mZnNldEhlaWdodCAtIHNjcm9sbERvd25PZmZzZXQpIHtcclxuXHRcdFx0XHRcdFx0c2Nyb2xsTW9kZSA9PT0gJ1NDUk9MTCcgJiYgc2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxhc3RTY3JvbGxUb3AgPSAoc2Nyb2xsVG9wIDw9IDAgPyAwIDogc2Nyb2xsVG9wKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvL1RPRE8g7Iqk7YGs66Gk7J20IOyViOuztOydtOuptCDsiqTtgazroaQg7J2064+ZXHJcblx0XHRcdC8vIGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8oc24gKiAxMDAsIHtcclxuXHRcdFx0Ly8gXHRjb250YWluZXJJZDogJ2xpc3RFbCcsXHJcblx0XHRcdC8vIFx0c21vb3RoOiB0cnVlXHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgcmVmPXsoaXRlbUVsKSA9PiBpdGVtc0Vscy5jdXJyZW50W2Quc25dID0gaXRlbUVsfSBjbGFzc05hbWU9e2N4KCdkZXRhaWxJdGVtcycpfT5cclxuXHRcdFx0XHQ8RWxlbWVudCBrZXk9e2Quc259IG5hbWU9eydzY3JvbGwnICsgZC5zbn0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2N4KCdzY3JvbGxUb3AnKX0vPlxyXG5cdClcclxufTtcclxuXHJcbnR5cGUgU0NST0xMX01PREUgPSAnU0NST0xMJyB8ICdDTElDSyc7XHJcbmNvbnN0IFN0aWNreVNjcm9sbCA9ICgpID0+IHtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2Jhbm5lcicpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzV3JhcCcpfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3VtbWFyeScpfS8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdsaXN0RWwnIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERldGFpbExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkZXRhaWwnKX0+XHJcblx0XHRcdFx0XHRcdFx0PERldGFpbEl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFNjcm9sbFRvcC8+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lTY3JvbGw7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9