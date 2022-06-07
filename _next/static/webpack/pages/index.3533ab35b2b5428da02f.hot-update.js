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
  character: [{
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
    return titles.map(function (title) {
      var _menu$title;

      var menuEl = (_menu$title = menu[title]) === null || _menu$title === void 0 ? void 0 : _menu$title.map(function (_ref) {
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
                  lineNumber: 100,
                  columnNumber: 32
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }, _this);
      }); // return (
      //   <>
      //     <h1 className={cx('title')}>{title}</h1>
      //     <ul>
      //       {menuEl}
      //     </ul>
      //     <hr />
      //   </>
      // )
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: getMenuEl()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJ0aXRsZXMiLCJtZW51IiwicGFnZSIsIm5hbWUiLCJ0eXBlIiwiY29tcG9uZW50cyIsImVmZmVjdCIsImNoYXJhY3RlciIsIndlYmdsIiwiSW5kZXgiLCJnZXRNZW51RWwiLCJtYXAiLCJ0aXRsZSIsIm1lbnVFbCIsImQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMseURBQWhCLENBQVg7QUFFQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxNQUFELEVBQVMsWUFBVCxFQUF1QixRQUF2QixFQUFpQyxXQUFqQyxFQUE4QyxPQUE5QyxDQUFmO0FBRUEsSUFBTUMsSUFBSSxHQUFHO0FBQ1hDLE1BQUksRUFBRSxDQUNKO0FBQ0VDLFFBQUksRUFBRSxhQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FESSxFQUtKO0FBQ0VELFFBQUksRUFBRSxjQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FMSSxFQVNKO0FBQ0VELFFBQUksRUFBRSxpQkFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxRQUFEO0FBRlIsR0FUSSxFQWFKO0FBQ0VELFFBQUksRUFBRSxnQkFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBYkksQ0FESztBQW1CWEMsWUFBVSxFQUFFLENBQ1Y7QUFDRUYsUUFBSSxFQUFFLE9BRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRDtBQUZSLEdBRFUsRUFLVjtBQUNFRCxRQUFJLEVBQUUsVUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBTFUsRUFTVjtBQUNFRCxRQUFJLEVBQUUsUUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFEO0FBRlIsR0FUVSxFQWFWO0FBQ0VELFFBQUksRUFBRSxZQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FiVSxFQWlCVjtBQUNFRCxRQUFJLEVBQUUsVUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFEO0FBRlIsR0FqQlUsRUFxQlY7QUFDRUQsUUFBSSxFQUFFLFlBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQXJCVSxFQXlCVjtBQUNFRCxRQUFJLEVBQUUsV0FEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFEO0FBRlIsR0F6QlUsRUE2QlY7QUFDRUQsUUFBSSxFQUFFLGFBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVg7QUFGUixHQTdCVSxFQWlDVjtBQUNFRCxRQUFJLEVBQUUsV0FEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQixLQUFsQjtBQUZSLEdBakNVLENBbkJEO0FBeURYRSxRQUFNLEVBQUUsQ0FDTjtBQUNFSCxRQUFJLEVBQUUsTUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxRQUFEO0FBRlIsR0FETSxDQXpERztBQStEWEcsV0FBUyxFQUFFLENBQ1Q7QUFDRUosUUFBSSxFQUFFLFNBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRDtBQUZSLEdBRFMsQ0EvREE7QUFxRVhJLE9BQUssRUFBRSxDQUNMO0FBQ0VMLFFBQUksRUFBRSxPQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLFFBQUQ7QUFGUixHQURLLEVBS0w7QUFDRUQsUUFBSSxFQUFFLFFBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsUUFBRDtBQUZSLEdBTEs7QUFyRUksQ0FBYjs7QUFrRkEsSUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUVsQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFdBQU9WLE1BQU0sQ0FBQ1csR0FBUCxDQUFXLFVBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN6QixVQUFNQyxNQUFNLGtCQUFHWixJQUFJLENBQUNXLEtBQUQsQ0FBUCxnREFBRyxZQUFhRCxHQUFiLENBQWlCO0FBQUEsWUFBR1IsSUFBSCxRQUFHQSxJQUFIO0FBQUEsWUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsNEJBQzlCO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxhQUFNRCxJQUFOLENBQVY7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUVQLEVBQUUsQ0FBQyxVQUFELENBQWhCO0FBQUEseUJBQ0dPLElBREgsRUFFR0MsSUFBSSxDQUFDTyxHQUFMLENBQVMsVUFBQ0csQ0FBRDtBQUFBLG9DQUFPO0FBQUcsMkJBQVMsRUFBRWxCLEVBQUUsQ0FBQ2tCLENBQUQsQ0FBaEI7QUFBQSw0QkFBc0JBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFBQSxlQUFULENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDhCO0FBQUEsT0FBakIsQ0FBZixDQUR5QixDQVl6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQXJCTSxDQUFQO0FBc0JELEdBdkJEOztBQXlCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWxCLEVBQUUsQ0FBQyxNQUFELENBQWxCO0FBQUEsY0FDR2MsU0FBUztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBaENEOztLQUFNRCxLO0FBa0NTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNTMzYWIzNWIyYjU0MjhkYTAyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCB0aXRsZXMgPSBbJ3BhZ2UnLCAnY29tcG9uZW50cycsICdlZmZlY3QnLCAnY2hhcmFjdGVyJywgJ3dlYmdsJ107XHJcblxyXG5jb25zdCBtZW51ID0ge1xyXG4gIHBhZ2U6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2FpSW50cm9kdWNlJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzdGlja3lTY3JvbGwnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ21hc2tJbnRlcmFjdGlvbicsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdtYXRjaEludHJvZHVjZScsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ25ldyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY29tcG9uZW50czogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY291bnQnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAna29yZWFNYXAnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NsaWRlcicsXHJcbiAgICAgIHR5cGU6IFsnZG9tJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjb21wb25lbnRzJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdiYXJDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdyYWRhckNoYXJ0JyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdsaW5lQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYnViYmxlQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcycsICduZXcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2ltYWdlQ3JvcCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ2NhbnZhcycsICduZXcnXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIGVmZmVjdDogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnd2F2ZScsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGFyYWN0ZXI6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NodW5TaWsnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgd2ViZ2w6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dlYkdMJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3RyZWVqcycsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZ2V0TWVudUVsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRpdGxlcy5tYXAodGl0bGUgPT4ge1xyXG4gICAgICBjb25zdCBtZW51RWwgPSBtZW51W3RpdGxlXT8ubWFwKCh7IG5hbWUsIHR5cGUgfSkgPT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgLyR7bmFtZX1gfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAge3R5cGUubWFwKChkKSA9PiA8aSBjbGFzc05hbWU9e2N4KGQpfT57ZH08L2k+KX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyByZXR1cm4gKFxyXG4gICAgICAvLyAgIDw+XHJcbiAgICAgIC8vICAgICA8aDEgY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e3RpdGxlfTwvaDE+XHJcbiAgICAgIC8vICAgICA8dWw+XHJcbiAgICAgIC8vICAgICAgIHttZW51RWx9XHJcbiAgICAgIC8vICAgICA8L3VsPlxyXG4gICAgICAvLyAgICAgPGhyIC8+XHJcbiAgICAgIC8vICAgPC8+XHJcbiAgICAgIC8vIClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG4gICAgICB7Z2V0TWVudUVsKCl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==