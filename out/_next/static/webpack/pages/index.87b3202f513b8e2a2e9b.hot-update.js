webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/index.tsx":
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\index.tsx",
    _this = undefined;




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);
var titles = ['page', 'components', 'effect', 'character', 'webgl'];
var menu = {
  page: [{
    name: 'aiIntroduce',
    type: ['dom', 'svg']
  }, {
    name: 'stickyScroll',
    type: ['dom', 'svg']
  }, {
    name: 'maskInteraction',
    type: ['canvas']
  }, {
    name: 'matchIntroduce',
    type: ['dom', 'new']
  }],
  components: [{
    name: 'count',
    type: ['dom']
  }, {
    name: 'koreaMap',
    type: ['dom', 'svg']
  }, {
    name: 'slider',
    type: ['dom']
  }, {
    name: 'components',
    type: ['dom', 'svg']
  }, {
    name: 'barChart',
    type: ['dom']
  }, {
    name: 'radarChart',
    type: ['dom', 'svg']
  }, {
    name: 'lineChart',
    type: ['svg']
  }, {
    name: 'bubbleChart',
    type: ['canvas', 'new']
  }, {
    name: 'imageCrop',
    type: ['dom', 'canvas', 'new']
  }],
  effect: [{
    name: 'wave',
    type: ['canvas']
  }],
  charcter: [{
    name: 'chunSik',
    type: ['dom']
  }],
  webgl: [{
    name: 'webGL',
    type: ['canvas']
  }, {
    name: 'treejs',
    type: ['canvas']
  }]
};

var Index = function Index() {
  var getMenuEl = function getMenuEl() {
    titles.map(function (title) {
      var menuEl = menu[title].map(function (_ref) {
        var name = _ref.name,
            type = _ref.type;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/".concat(name),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: cx('contents'),
              children: [name, type.map(function (d) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: cx(d),
                  children: d
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 30
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 7
        }, _this);
      });
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: cx('title'),
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: menuEl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }, _this)]
      }, void 0, true);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: [getMenuEl('page', menu.page), getMenuEl('Components', menu.components), getMenuEl('Effect', menu.effect), getMenuEl('Chracter', menu.charcter), getMenuEl('WebGL', menu.webgl)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, _this);
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJ0aXRsZXMiLCJtZW51IiwicGFnZSIsIm5hbWUiLCJ0eXBlIiwiY29tcG9uZW50cyIsImVmZmVjdCIsImNoYXJjdGVyIiwid2ViZ2wiLCJJbmRleCIsImdldE1lbnVFbCIsIm1hcCIsInRpdGxlIiwibWVudUVsIiwiZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMseURBQWhCLENBQVg7QUFFQSxJQUFNQyxNQUFNLEdBQUcsQ0FBRSxNQUFGLEVBQVUsWUFBVixFQUF3QixRQUF4QixFQUFrQyxXQUFsQyxFQUErQyxPQUEvQyxDQUFmO0FBRUEsSUFBTUMsSUFBSSxHQUFHO0FBQ1hDLE1BQUksRUFBRSxDQUNKO0FBQ0VDLFFBQUksRUFBRSxhQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FESSxFQUtKO0FBQ0VELFFBQUksRUFBRSxjQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FMSSxFQVNKO0FBQ0VELFFBQUksRUFBRSxpQkFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxRQUFEO0FBRlIsR0FUSSxFQWFKO0FBQ0VELFFBQUksRUFBRSxnQkFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBYkksQ0FESztBQW1CWEMsWUFBVSxFQUFFLENBQ1Y7QUFDRUYsUUFBSSxFQUFFLE9BRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRDtBQUZSLEdBRFUsRUFLVjtBQUNFRCxRQUFJLEVBQUUsVUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdB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LFVBQXBCLENBRlosRUFHR0ssU0FBUyxDQUFDLFFBQUQsRUFBV1QsSUFBSSxDQUFDSyxNQUFoQixDQUhaLEVBSUdJLFNBQVMsQ0FBQyxVQUFELEVBQWFULElBQUksQ0FBQ00sUUFBbEIsQ0FKWixFQUtHRyxTQUFTLENBQUMsT0FBRCxFQUFVVCxJQUFJLENBQUNPLEtBQWYsQ0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBekNEOztLQUFNQyxLO0FBMkNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44N2IzMjAyZjUxM2I4ZTJhMmU5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCB0aXRsZXMgPSBbICdwYWdlJywgJ2NvbXBvbmVudHMnLCAnZWZmZWN0JywgJ2NoYXJhY3RlcicsICd3ZWJnbCcgXTtcclxuXHJcbmNvbnN0IG1lbnUgPSB7XHJcbiAgcGFnZTogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYWlJbnRyb2R1Y2UnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3N0aWNreVNjcm9sbCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbWFza0ludGVyYWN0aW9uJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ21hdGNoSW50cm9kdWNlJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnbmV3J11cclxuICAgIH0sXHJcbiAgXSxcclxuICBjb21wb25lbnRzOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjb3VudCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdrb3JlYU1hcCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc2xpZGVyJyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NvbXBvbmVudHMnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2JhckNoYXJ0JyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3JhZGFyQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2xpbmVDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdidWJibGVDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJywgJ25ldyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnaW1hZ2VDcm9wJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnY2FudmFzJywgJ25ldyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgZWZmZWN0OiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICd3YXZlJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNoYXJjdGVyOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjaHVuU2lrJyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIHdlYmdsOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICd3ZWJHTCcsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICd0cmVlanMnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGdldE1lbnVFbCA9ICgpID0+IHtcclxuXHJcbiAgICB0aXRsZXMubWFwKHRpdGxlID0+IHtcclxuICAgICAgXHJcblxyXG4gICAgICBjb25zdCBtZW51RWwgPSBtZW51W3RpdGxlXS5tYXAoKHsgbmFtZSwgdHlwZSB9KSA9PlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIHt0eXBlLm1hcCgoZCkgPT4gPGkgY2xhc3NOYW1lPXtjeChkKX0+e2R9PC9pPil9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG48PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bWVudUVsfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAge2dldE1lbnVFbCgncGFnZScsIG1lbnUucGFnZSl9XHJcbiAgICAgIHtnZXRNZW51RWwoJ0NvbXBvbmVudHMnLCBtZW51LmNvbXBvbmVudHMpfVxyXG4gICAgICB7Z2V0TWVudUVsKCdFZmZlY3QnLCBtZW51LmVmZmVjdCl9XHJcbiAgICAgIHtnZXRNZW51RWwoJ0NocmFjdGVyJywgbWVudS5jaGFyY3Rlcil9XHJcbiAgICAgIHtnZXRNZW51RWwoJ1dlYkdMJywgbWVudS53ZWJnbCl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==