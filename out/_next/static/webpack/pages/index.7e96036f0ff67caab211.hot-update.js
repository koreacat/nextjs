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
  var getMenuEl = function getMenuEl(titles, menu) {
    console.log(titles);
    return titles.map(function (title) {
      console.log(title);
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
                  columnNumber: 32
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }, _this);
      });
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: cx('title'),
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: menuEl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: getMenuEl(titles, menu)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJ0aXRsZXMiLCJtZW51IiwicGFnZSIsIm5hbWUiLCJ0eXBlIiwiY29tcG9uZW50cyIsImVmZmVjdCIsImNoYXJjdGVyIiwid2ViZ2wiLCJJbmRleCIsImdldE1lbnVFbCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ0aXRsZSIsIm1lbnVFbCIsImQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLHlEQUFoQixDQUFYO0FBRUEsSUFBTUMsTUFBTSxHQUFHLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsUUFBdkIsRUFBaUMsV0FBakMsRUFBOEMsT0FBOUMsQ0FBZjtBQUVBLElBQU1DLElBQUksR0FBRztBQUNYQyxNQUFJLEVBQUUsQ0FDSjtBQUNFQyxRQUFJLEVBQUUsYUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBREksRUFLSjtBQUNFRCxRQUFJLEVBQUUsY0FEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBTEksRUFTSjtBQUNFRCxRQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsUUFBRDtBQUZSLEdBVEksRUFhSjtBQUNFRCxRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQWJJLENBREs7QUFtQlhDLFlBQVUsRUFBRSxDQUNWO0FBQ0VGLFFBQUksRUFBRSxPQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQ7QUFGUixHQURVLEVBS1Y7QUFDRUQsUUFBSSxFQUFFLFVBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxF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RW5CLEVBQUUsQ0FBQyxNQUFELENBQWxCO0FBQUEsY0FDR2MsU0FBUyxDQUFDVixNQUFELEVBQVNDLElBQVQ7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQW5DRDs7S0FBTVEsSztBQXFDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2U5NjAzNmYwZmY2N2NhYWIyMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgdGl0bGVzID0gWydwYWdlJywgJ2NvbXBvbmVudHMnLCAnZWZmZWN0JywgJ2NoYXJhY3RlcicsICd3ZWJnbCddO1xyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICBwYWdlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdhaUludHJvZHVjZScsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc3RpY2t5U2Nyb2xsJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdtYXNrSW50ZXJhY3Rpb24nLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbWF0Y2hJbnRyb2R1Y2UnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICduZXcnXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNvbXBvbmVudHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NvdW50JyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2tvcmVhTWFwJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzbGlkZXInLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY29tcG9uZW50cycsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmFyQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncmFkYXJDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbGluZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2J1YmJsZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdpbWFnZUNyb3AnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgXSxcclxuICBlZmZlY3Q6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dhdmUnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhcmN0ZXI6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NodW5TaWsnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgd2ViZ2w6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dlYkdMJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3RyZWVqcycsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZ2V0TWVudUVsID0gKHRpdGxlcywgbWVudSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGl0bGVzKTtcclxuICAgIHJldHVybiB0aXRsZXMubWFwKHRpdGxlID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGl0bGUpO1xyXG5cclxuICAgICAgY29uc3QgbWVudUVsID0gbWVudVt0aXRsZV0ubWFwKCh7IG5hbWUsIHR5cGUgfSkgPT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgLyR7bmFtZX1gfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAge3R5cGUubWFwKChkKSA9PiA8aSBjbGFzc05hbWU9e2N4KGQpfT57ZH08L2k+KX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHttZW51RWx9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG4gICAgICB7Z2V0TWVudUVsKHRpdGxlcywgbWVudSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==