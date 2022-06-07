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
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\index.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
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
    console.log(titles);
    return titles.map(function (title) {
      console.log(title); // const menuEl = menu[title].map(({ name, type }) =>
      //   <li>
      //     <Link href={`/${name}`}>
      //       <a className={cx('contents')}>
      //         {name}
      //         {type.map((d) => <i className={cx(d)}>{d}</i>)}
      //       </a>
      //     </Link>
      //   </li>
      // );
      // return (
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJ0aXRsZXMiLCJtZW51IiwicGFnZSIsIm5hbWUiLCJ0eXBlIiwiY29tcG9uZW50cyIsImVmZmVjdCIsImNoYXJjdGVyIiwid2ViZ2wiLCJJbmRleCIsImdldE1lbnVFbCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLHlEQUFoQixDQUFYO0FBRUEsSUFBTUMsTUFBTSxHQUFHLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsUUFBdkIsRUFBaUMsV0FBakMsRUFBOEMsT0FBOUMsQ0FBZjtBQUVBLElBQU1DLElBQUksR0FBRztBQUNYQyxNQUFJLEVBQUUsQ0FDSjtBQUNFQyxRQUFJLEVBQUUsYUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBREksRUFLSjtBQUNFRCxRQUFJLEVBQUUsY0FEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBTEksRUFTSjtBQUNFRCxRQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsUUFBRDtBQUZSLEdBVEksRUFhSjtBQUNFRCxRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQWJJLENBREs7QUFtQlhDLFlBQVUsRUFBRSxDQUNWO0FBQ0VGLFFBQUksRUFBRSxPQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQ7QUFGUixHQURVLEVBS1Y7QUFDRUQsUUFBSSxFQUFFLFVBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQUxVLEVBU1Y7QUFDRUQsUUFBSSxFQUFFLFFBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRDtBQUZSLEdBVFUsRUFhVjtBQUNFRCxRQUFJLEVBQUUsWUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBYlUsRUFpQlY7QUFDRUQsUUFBSSxFQUFFLFVBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRDtBQUZSLEdBakJVLEVBcUJWO0FBQ0VELFFBQUksRUFBRSxZQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FyQlUsRUF5QlY7QUFDRUQsUUFBSSxFQUFFLFdBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRDtBQUZSLEdBekJVLEVBNkJWO0FBQ0VELFFBQUksRUFBRSxhQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYO0FBRlIsR0E3QlUsRUFpQ1Y7QUFDRUQsUUFBSSxFQUFFLFdBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsS0FBbEI7QUFGUixHQWpDVSxDQW5CRDtBQXlEWEUsUUFBTSxFQUFFLENBQ047QUFDRUgsUUFBSSxFQUFFLE1BRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsUUFBRDtBQUZSLEdBRE0sQ0F6REc7QUErRFhHLFVBQVEsRUFBRSxDQUNSO0FBQ0VKLFFBQUksRUFBRSxTQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQ7QUFGUixHQURRLENBL0RDO0FBcUVYSSxPQUFLLEVBQUUsQ0FDTDtBQUNFTCxRQUFJLEVBQUUsT0FEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxRQUFEO0FBRlIsR0FESyxFQUtMO0FBQ0VELFFBQUksRUFBRSxRQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLFFBQUQ7QUFGUixHQUxLO0FBckVJLENBQWI7O0FBa0ZBLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFFbEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlaLE1BQVo7QUFDQSxXQUFPQSxNQUFNLENBQUNhLEdBQVAsQ0FBVyxVQUFBQyxLQUFLLEVBQUk7QUFDekJILGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaLEVBRHlCLENBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsS0F2Qk0sQ0FBUDtBQXdCRCxHQTFCRDs7QUE0QkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVsQixFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLGNBQ0djLFNBQVM7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQW5DRDs7S0FBTUQsSztBQXFDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTA4NGMzMTQyNTNhOWEyNTNiOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgdGl0bGVzID0gWydwYWdlJywgJ2NvbXBvbmVudHMnLCAnZWZmZWN0JywgJ2NoYXJhY3RlcicsICd3ZWJnbCddO1xyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICBwYWdlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdhaUludHJvZHVjZScsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc3RpY2t5U2Nyb2xsJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdtYXNrSW50ZXJhY3Rpb24nLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbWF0Y2hJbnRyb2R1Y2UnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICduZXcnXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNvbXBvbmVudHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NvdW50JyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2tvcmVhTWFwJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzbGlkZXInLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY29tcG9uZW50cycsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmFyQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncmFkYXJDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbGluZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2J1YmJsZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdpbWFnZUNyb3AnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgXSxcclxuICBlZmZlY3Q6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dhdmUnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhcmN0ZXI6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NodW5TaWsnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgd2ViZ2w6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dlYkdMJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3RyZWVqcycsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZ2V0TWVudUVsID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGl0bGVzKTtcclxuICAgIHJldHVybiB0aXRsZXMubWFwKHRpdGxlID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGl0bGUpO1xyXG5cclxuICAgICAgLy8gY29uc3QgbWVudUVsID0gbWVudVt0aXRsZV0ubWFwKCh7IG5hbWUsIHR5cGUgfSkgPT5cclxuICAgICAgLy8gICA8bGk+XHJcbiAgICAgIC8vICAgICA8TGluayBocmVmPXtgLyR7bmFtZX1gfT5cclxuICAgICAgLy8gICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcbiAgICAgIC8vICAgICAgICAge25hbWV9XHJcbiAgICAgIC8vICAgICAgICAge3R5cGUubWFwKChkKSA9PiA8aSBjbGFzc05hbWU9e2N4KGQpfT57ZH08L2k+KX1cclxuICAgICAgLy8gICAgICAgPC9hPlxyXG4gICAgICAvLyAgICAgPC9MaW5rPlxyXG4gICAgICAvLyAgIDwvbGk+XHJcbiAgICAgIC8vICk7XHJcblxyXG4gICAgICAvLyByZXR1cm4gKFxyXG4gICAgICAvLyAgIDw+XHJcbiAgICAgIC8vICAgICA8aDEgY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e3RpdGxlfTwvaDE+XHJcbiAgICAgIC8vICAgICA8dWw+XHJcbiAgICAgIC8vICAgICAgIHttZW51RWx9XHJcbiAgICAgIC8vICAgICA8L3VsPlxyXG4gICAgICAvLyAgICAgPGhyIC8+XHJcbiAgICAgIC8vICAgPC8+XHJcbiAgICAgIC8vIClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG4gICAgICB7Z2V0TWVudUVsKCl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==