webpackHotUpdate_N_E("pages/jobdaIntroduction",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/jobdaIntroduction/jobdaIntroduction.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/jobdaIntroduction/scrollInteraction.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".jobdaIntroduction_container__2CNt3 {\n  background: black;\n  color: white;\n}\n.jobdaIntroduction_container__2CNt3 .jobdaIntroduction_sticky__3-Kuv {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n}\n.jobdaIntroduction_container__2CNt3 .jobdaIntroduction_slideContainer__3l9WA {\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.jobdaIntroduction_title__2nYX5 {\n  position: absolute;\n  padding: 30px 0;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  bottom: 0px;\n}\n\n.jobdaIntroduction_slide__2yptj {\n  position: absolute;\n  display: none;\n  z-index: 0;\n}\n.jobdaIntroduction_slide__2yptj.jobdaIntroduction_enabled__o4Aar {\n  display: block;\n}\n.jobdaIntroduction_slide__2yptj .jobdaIntroduction_bigText__3Q_pe p {\n  margin: 0;\n  font-size: 45px;\n  font-weight: bold;\n  line-height: 1.35;\n  letter-spacing: -1.5px;\n  word-spacing: 1.5px;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://scrollInteraction.module.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,YAAA;AACJ;AACI;EACI,gBAAA;EACA,MAAA;EACA,WAAA;EACA,aAAA;AACR;AAEI;EACI,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AAAR;;AAIC;EACG,kBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AADJ;;AAIA;EACI,kBAAA;EACA,aAAA;EACA,UAAA;AADJ;AAGI;EACI,cAAA;AADR;AAII;EACI,SAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AAFR","sourcesContent":[".container {\r\n    background: black;\r\n    color: white;\r\n\r\n    .sticky {\r\n        position: sticky;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100vh;\r\n    }\r\n\r\n    .slideContainer {\r\n        overflow: hidden;\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n }\r\n\r\n .title {\r\n    position: absolute;\r\n    padding: 30px 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    text-align: center;\r\n    bottom: 0px;\r\n}\r\n\r\n.slide {\r\n    position: absolute;\r\n    display: none;\r\n    z-index: 0;\r\n\r\n    &.enabled {\r\n        display: block;\r\n    }\r\n\r\n    .bigText p {\r\n        margin: 0;\r\n        font-size: 45px;\r\n        font-weight: bold;\r\n        line-height: 1.35;\r\n        letter-spacing: -1.5px;\r\n        word-spacing: 1.5px;\r\n        text-align: center;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "jobdaIntroduction_container__2CNt3",
	"sticky": "jobdaIntroduction_sticky__3-Kuv",
	"slideContainer": "jobdaIntroduction_slideContainer__3l9WA",
	"title": "jobdaIntroduction_title__2nYX5",
	"slide": "jobdaIntroduction_slide__2yptj",
	"enabled": "jobdaIntroduction_enabled__o4Aar",
	"bigText": "jobdaIntroduction_bigText__3Q_pe"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/jobdaIntroduction/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/jobdaIntroduction/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jobdaIntroduction_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollInteraction.module.scss */ "./src/components/jobdaIntroduction/jobdaIntroduction.module.scss");
/* harmony import */ var _jobdaIntroduction_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jobdaIntroduction_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scrollAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollAnimation */ "./src/components/jobdaIntroduction/scrollAnimation.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/components/jobdaIntroduction/data.ts");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\jobdaIntroduction\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_jobdaIntroduction_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var JobdaIntroduction = function JobdaIntroduction() {
  _s();

  var $refs = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])([]);

  var setRef = function setRef(name, el) {
    return $refs.current[name] = el;
  };

  Object(_scrollAnimation__WEBPACK_IMPORTED_MODULE_4__["useScrollAnimation"])({
    $refs: $refs,
    initData: _data__WEBPACK_IMPORTED_MODULE_5__["initData"],
    animationData: _data__WEBPACK_IMPORTED_MODULE_5__["animationData"],
    cx: cx
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('container'),
    style: {
      height: '10000px'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('sticky'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('slideContainer'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx("title"),
          ref: function ref(el) {
            return setRef('title', el);
          },
          children: "sokodomo - \uD68C\uC804\uBAA9\uB9C8 (Feat. Zion.T, \uC6D0\uC288\uD0C0\uC778)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx("slide"),
          ref: function ref(el) {
            return setRef('sl1', el);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx("bigText"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\uB0B4\uAC00 \uC2AC\uD50C \uB54C\uB9C8\uB2E4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx("slide"),
          ref: function ref(el) {
            return setRef('sl2', el);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx("bigText"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\uC774 \uB178\uB798\uAC00 \uCC3E\uC544\uC640"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx("slide"),
          ref: function ref(el) {
            return setRef('sl3', el);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx("bigText"),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\uC138\uC0C1\uC774 \uB465\uADFC \uAC83\uCC98\uB7FC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\uC6B0\uB9B0 \uB3D9\uAE00\uB3D9\uAE00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx("slide"),
          ref: function ref(el) {
            return setRef('sl4', el);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx("bigText"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\uC778\uC0DD\uC740 \uD68C\uC804\uBAA9\uB9C8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx("slide"),
          ref: function ref(el) {
            return setRef('sl5', el);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx("bigText"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\uC6B0\uB9B0 \uB9E4\uC77C \uB2EC\uB824\uAC00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx("slide"),
          ref: function ref(el) {
            return setRef('sl6', el);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx("bigText"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\uC5B8\uC81C\uCBE4 \uB05D\uB098 \uB09C \uC798 \uBAB0\uB77C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, _this);
};

_s(JobdaIntroduction, "XrWT0m3vaes42J+LlZX/yqCVoq0=", false, function () {
  return [_scrollAnimation__WEBPACK_IMPORTED_MODULE_4__["useScrollAnimation"]];
});

_c = JobdaIntroduction;
/* harmony default export */ __webpack_exports__["default"] = (JobdaIntroduction);

var _c;

$RefreshReg$(_c, "JobdaIntroduction");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvam9iZGFJbnRyb2R1Y3Rpb24vam9iZGFJbnRyb2R1Y3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2pvYmRhSW50cm9kdWN0aW9uL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSm9iZGFJbnRyb2R1Y3Rpb24iLCIkcmVmcyIsInVzZVJlZiIsInNldFJlZiIsIm5hbWUiLCJlbCIsImN1cnJlbnQiLCJ1c2VTY3JvbGxBbmltYXRpb24iLCJpbml0RGF0YSIsImFuaW1hdGlvbkRhdGEiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx3Q0FBd0Msc0JBQXNCLGlCQUFpQixHQUFHLHdFQUF3RSxxQkFBcUIsV0FBVyxnQkFBZ0Isa0JBQWtCLEdBQUcsZ0ZBQWdGLHFCQUFxQix1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQixHQUFHLHFDQUFxQyx1QkFBdUIsb0JBQW9CLGdCQUFnQixpQkFBaUIsdUJBQXVCLGdCQUFnQixHQUFHLHFDQUFxQyx1QkFBdUIsa0JBQWtCLGVBQWUsR0FBRyxvRUFBb0UsbUJBQW1CLEdBQUcsdUVBQXVFLGNBQWMsb0JBQW9CLHNCQUFzQixzQkFBc0IsMkJBQTJCLHdCQUF3Qix1QkFBdUIsR0FBRyxPQUFPLDhGQUE4RixXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFB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RSxFQUFSLENBQVY7QUFBQSxXQUFwQztBQUFBLGlDQUNDO0FBQUsscUJBQVMsRUFBRVQsRUFBRSxDQUFDLFNBQUQsQ0FBbEI7QUFBQSxtQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbURBLENBMUREOztHQUFNSSxpQjtVQUtMTyxtRTs7O0tBTEtQLGlCO0FBNERTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qb2JkYUludHJvZHVjdGlvbi4xNDAyYWFiNjdjOWYzNjhlMmFhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmpvYmRhSW50cm9kdWN0aW9uX2NvbnRhaW5lcl9fMkNOdDMge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5qb2JkYUludHJvZHVjdGlvbl9jb250YWluZXJfXzJDTnQzIC5qb2JkYUludHJvZHVjdGlvbl9zdGlja3lfXzMtS3V2IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5qb2JkYUludHJvZHVjdGlvbl9jb250YWluZXJfXzJDTnQzIC5qb2JkYUludHJvZHVjdGlvbl9zbGlkZUNvbnRhaW5lcl9fM2w5V0Ege1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmpvYmRhSW50cm9kdWN0aW9uX3RpdGxlX18ybllYNSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvdHRvbTogMHB4O1xcbn1cXG5cXG4uam9iZGFJbnRyb2R1Y3Rpb25fc2xpZGVfXzJ5cHRqIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4uam9iZGFJbnRyb2R1Y3Rpb25fc2xpZGVfXzJ5cHRqLmpvYmRhSW50cm9kdWN0aW9uX2VuYWJsZWRfX280QWFyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uam9iZGFJbnRyb2R1Y3Rpb25fc2xpZGVfXzJ5cHRqIC5qb2JkYUludHJvZHVjdGlvbl9iaWdUZXh0X18zUV9wZSBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XFxuICBsZXR0ZXItc3BhY2luZzogLTEuNXB4O1xcbiAgd29yZC1zcGFjaW5nOiAxLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2pvYmRhSW50cm9kdWN0aW9uLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVI7O0FBSUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQURKO0FBR0k7RUFDSSxjQUFBO0FBRFI7QUFJSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgICAuc3RpY2t5IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNsaWRlQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gfVxcclxcblxcclxcbiAudGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcblxcclxcbiAgICAmLmVuYWJsZWQge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJpZ1RleHQgcCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xLjVweDtcXHJcXG4gICAgICAgIHdvcmQtc3BhY2luZzogMS41cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiam9iZGFJbnRyb2R1Y3Rpb25fY29udGFpbmVyX18yQ050M1wiLFxuXHRcInN0aWNreVwiOiBcImpvYmRhSW50cm9kdWN0aW9uX3N0aWNreV9fMy1LdXZcIixcblx0XCJzbGlkZUNvbnRhaW5lclwiOiBcImpvYmRhSW50cm9kdWN0aW9uX3NsaWRlQ29udGFpbmVyX18zbDlXQVwiLFxuXHRcInRpdGxlXCI6IFwiam9iZGFJbnRyb2R1Y3Rpb25fdGl0bGVfXzJuWVg1XCIsXG5cdFwic2xpZGVcIjogXCJqb2JkYUludHJvZHVjdGlvbl9zbGlkZV9fMnlwdGpcIixcblx0XCJlbmFibGVkXCI6IFwiam9iZGFJbnRyb2R1Y3Rpb25fZW5hYmxlZF9fbzRBYXJcIixcblx0XCJiaWdUZXh0XCI6IFwiam9iZGFJbnRyb2R1Y3Rpb25fYmlnVGV4dF9fM1FfcGVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2pvYmRhSW50cm9kdWN0aW9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVNjcm9sbEFuaW1hdGlvbiB9IGZyb20gXCIuL3Njcm9sbEFuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBpbml0RGF0YSwgYW5pbWF0aW9uRGF0YSB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBKb2JkYUludHJvZHVjdGlvbiA9ICgpID0+IHtcclxuXHRjb25zdCAkcmVmcyA9IHVzZVJlZjxIVE1MRWxlbWVudFtdPihbXSk7XHJcblxyXG5cdGNvbnN0IHNldFJlZiA9IChuYW1lOiBzdHJpbmcsIGVsOiBIVE1MRWxlbWVudCkgPT4gJHJlZnMuY3VycmVudFtuYW1lXSA9IGVsO1xyXG5cclxuXHR1c2VTY3JvbGxBbmltYXRpb24oeyRyZWZzLCBpbml0RGF0YSwgYW5pbWF0aW9uRGF0YSwgY3h9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGFpbmVyJyl9IHN0eWxlPXt7aGVpZ2h0OiAnMTAwMDBweCd9fT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzdGlja3knKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZUNvbnRhaW5lcicpfT5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goXCJ0aXRsZVwiKX0gcmVmPXtlbCA9PiBzZXRSZWYoJ3RpdGxlJywgZWwpfT5cclxuXHRcdFx0XHRcdFx0c29rb2RvbW8gLSDtmozsoITrqqnrp4ggKEZlYXQuIFppb24uVCwg7JuQ7IqI7YOA7J24KVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KFwic2xpZGVcIil9IHJlZj17ZWwgPT4gc2V0UmVmKCdzbDEnLCBlbCl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goXCJiaWdUZXh0XCIpfT5cclxuXHRcdFx0XHRcdFx0XHQ8cD7rgrTqsIAg7Iqs7ZSMIOuVjOuniOuLpDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goXCJzbGlkZVwiKX0gcmVmPXtlbCA9PiBzZXRSZWYoJ3NsMicsIGVsKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChcImJpZ1RleHRcIil9PlxyXG5cdFx0XHRcdFx0XHRcdDxwPuydtCDrhbjrnpjqsIAg7LC+7JWE7JmAPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChcInNsaWRlXCIpfSByZWY9e2VsID0+IHNldFJlZignc2wzJywgZWwpfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KFwiYmlnVGV4dFwiKX0+XHJcblx0XHRcdFx0XHRcdFx0PHA+7IS47IOB7J20IOuRpeq3vCDqsoPsspjrn7w8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+7Jqw66awIOuPmeq4gOuPmeq4gDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goXCJzbGlkZVwiKX0gcmVmPXtlbCA9PiBzZXRSZWYoJ3NsNCcsIGVsKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChcImJpZ1RleHRcIil9PlxyXG5cdFx0XHRcdFx0XHRcdDxwPuyduOyDneydgCDtmozsoITrqqnrp4g8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KFwic2xpZGVcIil9IHJlZj17ZWwgPT4gc2V0UmVmKCdzbDUnLCBlbCl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goXCJiaWdUZXh0XCIpfT5cclxuXHRcdFx0XHRcdFx0XHQ8cD7smrDrprAg66ek7J28IOuLrOugpOqwgDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goXCJzbGlkZVwiKX0gcmVmPXtlbCA9PiBzZXRSZWYoJ3NsNicsIGVsKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChcImJpZ1RleHRcIil9PlxyXG5cdFx0XHRcdFx0XHRcdDxwPuyWuOygnOyvpCDrgZ3rgpgg64KcIOyemCDrqrDrnbw8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2JkYUludHJvZHVjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
