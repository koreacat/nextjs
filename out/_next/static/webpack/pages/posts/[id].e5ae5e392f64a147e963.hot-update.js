webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: __N_SSG, Post, default, getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\posts\\[id].tsx";


var __N_SSG = true;
var Post = function Post() {
  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Post);

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "id", void 0);

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "contents", void 0);
};
function Posts(_ref) {
  var post = _ref.post,
      length = _ref.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: post.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: ["post ", post.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: post.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, this), post.id < length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/posts/" + (post.id + 1),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: 'nextPostBtn'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, this);
}
_c = Posts;
function getPosts() {
  return _getPosts.apply(this, arguments);
}

function _getPosts() {
  _getPosts = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve([{
                  id: 0,
                  contents: 'I\'m so happy\n' + '\'Cause today I found my friends\n' + 'They\'re in my head, I\'m so ugly\n' + 'That\'s okay \'cause so are you'
                }, {
                  id: 1,
                  contents: 'Broke our mirrors\n' + 'Sunday morning is everyday for all I care\n' + 'And I\'m not scared, light my candles\n' + 'In a daze \'cause I\'ve found God'
                }, {
                  id: 2,
                  contents: 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah, yeah'
                }, {
                  id: 3,
                  contents: 'I\'m so lonely\n' + 'That\'s okay, I shaved my head\n' + 'And I\'m not sad and just maybe\n' + 'I\'m to blame for all I\'ve heard'
                }, {
                  id: 4,
                  contents: 'I\'m not sure, I\'m so excited\n' + 'I can\'t wait to meet you there\n' + 'And I don\'t care, I\'m so horny\n' + 'That\'s okay, my will is good'
                }, {
                  id: 5,
                  contents: 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah, yeah'
                }, {
                  id: 6,
                  contents: 'I like it, I\'m not gonna crack\n' + 'I miss you, I\'m not gonna crack\n' + 'I love you, I\'m not gonna crack\n' + 'I killed you, I\'m not gonna crack'
                }, {
                  id: 7,
                  contents: 'I like it, I\'m not gonna crack\n' + 'I miss you, I\'m not gonna crack\n' + 'I love you, I\'m not gonna crack\n' + 'I killed you, I\'m not gonna crack'
                }]);
              }, 0);
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPosts.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "Posts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLnRzeCJdLCJuYW1lcyI6WyJQb3N0IiwiUG9zdHMiLCJwb3N0IiwibGVuZ3RoIiwiaWQiLCJjb250ZW50cyIsImdldFBvc3RzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUEsSUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFLZSxTQUFTQyxLQUFULE9BQWlDO0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMvQyxzQkFDQztBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0M7QUFBQSxrQkFBUUQsSUFBSSxDQUFDRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFJQztBQUFBLDBCQUFVRixJQUFJLENBQUNFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkQsZUFLQztBQUFBLDZCQUNDO0FBQUEsa0JBQUlGLElBQUksQ0FBQ0c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELEVBU0VILElBQUksQ0FBQ0UsRUFBTCxHQUFVRCxNQUFWLGlCQUVZLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFLGFBQWFELElBQUksQ0FBQ0UsRUFBTCxHQUFVLENBQXZCLENBQVo7QUFBQSw2QkFDSTtBQUFRLGlCQUFTLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1CQTtLQXBCdUJILEs7QUFrQ2pCLFNBQWVLLFFBQXRCO0FBQUE7QUFBQTs7O3VTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNPLElBQUlDLE9BQUosQ0FBb0IsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3JEQyx3QkFBVSxDQUFDLFlBQU07QUFDaEJGLHVCQUFPLENBQUMsQ0FDUDtBQUNDSixvQkFBRSxFQUFFLENBREw7QUFFQ0MsMEJBQVEsRUFBRSxvQkFDVCxvQ0FEUyxHQUVULHFDQUZTLEdBR1Q7QUFMRixpQkFETyxFQVFQO0FBQ0NELG9CQUFFLEVBQUUsQ0FETDtBQUVDQywwQkFBUSxFQUFFLHdCQUNULDZDQURTLEdBRVQseUNBRlMsR0FHVDtBQUxGLGlCQVJPLEVBZVA7QUFDQ0Qsb0JBQUUsRUFBRSxDQURMO0FBRUNDLDBCQUFRLEVBQUUsNkJBQ1QsMEJBRFMsR0FFVCwwQkFGUyxHQUdULDBCQUhTLEdBSVQsMEJBSlMsR0FLVDtBQVBGLGlCQWZPLEVBd0JQO0FBQ0NELG9CQUFFLEVBQUUsQ0FETDtBQUVDQywwQkFBUSxFQUFFLHFCQUNULGtDQURTLEdBRVQsbUNBRlMsR0FHVDtBQUxGLGlCQXhCTyxFQStCUDtBQUNDRCxvQkFBRSxFQUFFLENBREw7QUFFQ0MsMEJBQVEsRUFBRSxxQ0FDVCxtQ0FEUyxHQUVULG9DQUZTLEdBR1Q7QUFMRixpQkEvQk8sRUFzQ1A7QUFDQ0Qsb0JBQUUsRUFBRSxDQURMO0FBRUNDLDBCQUFRLEVBQUUsNkJBQ1QsMEJBRFMsR0FFVCwwQkFGUyxHQUdULDBCQUhTLEdBSVQsMEJBSlMsR0FLVDtBQVBGLGlCQXRDTyxFQStDUDtBQUNDRCxvQkFBRSxFQUFFLENBREw7QUFFQ0MsMEJBQVEsRUFBRSxzQ0FDVCxvQ0FEUyxHQUVULG9DQUZTLEdBR1Q7QUFMRixpQkEvQ08sRUFzRFA7QUFDQ0Qsb0JBQUUsRUFBRSxDQURMO0FBRUNDLDBCQUFRLEVBQUUsc0NBQ1Qsb0NBRFMsR0FFVCxvQ0FGUyxHQUdUO0FBTEYsaUJBdERPLENBQUQsQ0FBUDtBQThEQSxlQS9EUyxFQStEUCxDQS9ETyxDQUFWO0FBZ0VBLGFBakVZLENBRFA7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tpZF0uZTVhZTVlMzkyZjY0YTE0N2U5NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvc3Qge1xyXG5cdGlkOiBudW1iZXI7XHJcblx0Y29udGVudHM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoeyBwb3N0LCBsZW5ndGggfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+e3Bvc3QuaWR9PC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8aDE+cG9zdCB7cG9zdC5pZH08L2gxPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxwPntwb3N0LmNvbnRlbnRzfTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRwb3N0LmlkIDwgbGVuZ3RoXHJcblx0XHRcdFx0JiZcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Bvc3RzL1wiICsgKHBvc3QuaWQgKyAxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyduZXh0UG9zdEJ0bid9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHR9XHJcblxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Y29uc3QgcG9zdHM6IFBvc3RbXSA9IGF3YWl0IGdldFBvc3RzKCk7XHJcblx0Y29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+IGAvcG9zdHMvJHtwb3N0LmlkfWApO1xyXG5cdHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG5cdGNvbnN0IHBvc3RzOiBQb3N0W10gPSBhd2FpdCBnZXRQb3N0cygpO1xyXG5cdGNvbnN0IHBvc3Q6IFBvc3QgPSBwb3N0c1twYXJhbXMuaWRdO1xyXG5cdHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IHBvc3QsIGxlbmd0aDogcG9zdHMubGVuZ3RoIH0gfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XHJcblx0cmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPFBvc3RbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHJlc29sdmUoW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAwLFxyXG5cdFx0XHRcdFx0Y29udGVudHM6ICdJXFwnbSBzbyBoYXBweVxcbicgK1xyXG5cdFx0XHRcdFx0XHQnXFwnQ2F1c2UgdG9kYXkgSSBmb3VuZCBteSBmcmllbmRzXFxuJyArXHJcblx0XHRcdFx0XHRcdCdUaGV5XFwncmUgaW4gbXkgaGVhZCwgSVxcJ20gc28gdWdseVxcbicgK1xyXG5cdFx0XHRcdFx0XHQnVGhhdFxcJ3Mgb2theSBcXCdjYXVzZSBzbyBhcmUgeW91J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0XHRjb250ZW50czogJ0Jyb2tlIG91ciBtaXJyb3JzXFxuJyArXHJcblx0XHRcdFx0XHRcdCdTdW5kYXkgbW9ybmluZyBpcyBldmVyeWRheSBmb3IgYWxsIEkgY2FyZVxcbicgK1xyXG5cdFx0XHRcdFx0XHQnQW5kIElcXCdtIG5vdCBzY2FyZWQsIGxpZ2h0IG15IGNhbmRsZXNcXG4nICtcclxuXHRcdFx0XHRcdFx0J0luIGEgZGF6ZSBcXCdjYXVzZSBJXFwndmUgZm91bmQgR29kJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0XHRjb250ZW50czogJ1llYWgsIHllYWgsIHllYWgsIHllYWhcXG4nICtcclxuXHRcdFx0XHRcdFx0J1llYWgsIHllYWgsIHllYWgsIHllYWhcXG4nICtcclxuXHRcdFx0XHRcdFx0J1llYWgsIHllYWgsIHllYWgsIHllYWhcXG4nICtcclxuXHRcdFx0XHRcdFx0J1llYWgsIHllYWgsIHllYWgsIHllYWhcXG4nICtcclxuXHRcdFx0XHRcdFx0J1llYWgsIHllYWgsIHllYWgsIHllYWhcXG4nICtcclxuXHRcdFx0XHRcdFx0J1llYWgsIHllYWgsIHllYWgsIHllYWgsIHllYWgnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogMyxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnSVxcJ20gc28gbG9uZWx5XFxuJyArXHJcblx0XHRcdFx0XHRcdCdUaGF0XFwncyBva2F5LCBJIHNoYXZlZCBteSBoZWFkXFxuJyArXHJcblx0XHRcdFx0XHRcdCdBbmQgSVxcJ20gbm90IHNhZCBhbmQganVzdCBtYXliZVxcbicgK1xyXG5cdFx0XHRcdFx0XHQnSVxcJ20gdG8gYmxhbWUgZm9yIGFsbCBJXFwndmUgaGVhcmQnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogNCxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnSVxcJ20gbm90IHN1cmUsIElcXCdtIHNvIGV4Y2l0ZWRcXG4nICtcclxuXHRcdFx0XHRcdFx0J0kgY2FuXFwndCB3YWl0IHRvIG1lZXQgeW91IHRoZXJlXFxuJyArXHJcblx0XHRcdFx0XHRcdCdBbmQgSSBkb25cXCd0IGNhcmUsIElcXCdtIHNvIGhvcm55XFxuJyArXHJcblx0XHRcdFx0XHRcdCdUaGF0XFwncyBva2F5LCBteSB3aWxsIGlzIGdvb2QnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogNSxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaCwgeWVhaCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiA2LFxyXG5cdFx0XHRcdFx0Y29udGVudHM6ICdJIGxpa2UgaXQsIElcXCdtIG5vdCBnb25uYSBjcmFja1xcbicgK1xyXG5cdFx0XHRcdFx0XHQnSSBtaXNzIHlvdSwgSVxcJ20gbm90IGdvbm5hIGNyYWNrXFxuJyArXHJcblx0XHRcdFx0XHRcdCdJIGxvdmUgeW91LCBJXFwnbSBub3QgZ29ubmEgY3JhY2tcXG4nICtcclxuXHRcdFx0XHRcdFx0J0kga2lsbGVkIHlvdSwgSVxcJ20gbm90IGdvbm5hIGNyYWNrJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IDcsXHJcblx0XHRcdFx0XHRjb250ZW50czogJ0kgbGlrZSBpdCwgSVxcJ20gbm90IGdvbm5hIGNyYWNrXFxuJyArXHJcblx0XHRcdFx0XHRcdCdJIG1pc3MgeW91LCBJXFwnbSBub3QgZ29ubmEgY3JhY2tcXG4nICtcclxuXHRcdFx0XHRcdFx0J0kgbG92ZSB5b3UsIElcXCdtIG5vdCBnb25uYSBjcmFja1xcbicgK1xyXG5cdFx0XHRcdFx0XHQnSSBraWxsZWQgeW91LCBJXFwnbSBub3QgZ29ubmEgY3JhY2snXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSlcclxuXHRcdH0sIDApXHJcblx0fSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9