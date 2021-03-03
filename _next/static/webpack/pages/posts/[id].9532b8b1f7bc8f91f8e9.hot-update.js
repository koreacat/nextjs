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
      posts = _ref.posts;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: ["0", post.id]
      }, void 0, true, {
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
    }, this), posts[post.id - 1] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/posts/" + (post.id - 1),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: 'prevPostBtn'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this), posts[post.id + 1] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/posts/" + (post.id + 1),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: 'nextPostBtn'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, this);
} // export async function getServerSideProps() {
// 	return { props: { ssr: true } }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLnRzeCJdLCJuYW1lcyI6WyJQb3N0IiwiUG9zdHMiLCJwb3N0IiwicG9zdHMiLCJpZCIsImNvbnRlbnRzIiwiZ2V0UG9zdHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTyxJQUFNQSxJQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUtlLFNBQVNDLEtBQVQsT0FBZ0M7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDOUMsc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFBLDZCQUNDO0FBQUEsd0JBQVNELElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFJQztBQUFBLDBCQUFVRixJQUFJLENBQUNFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkQsZUFLQztBQUFBLDZCQUNDO0FBQUEsa0JBQUlGLElBQUksQ0FBQ0c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELEVBU0VGLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxFQUFMLEdBQVUsQ0FBWCxDQUFMLGlCQUVZLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFLGFBQWFGLElBQUksQ0FBQ0UsRUFBTCxHQUFVLENBQXZCLENBQVo7QUFBQSw2QkFDSTtBQUFRLGlCQUFTLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYZCxFQWdCRUQsS0FBSyxDQUFDRCxJQUFJLENBQUNFLEVBQUwsR0FBVSxDQUFYLENBQUwsaUJBRVkscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsYUFBYUYsSUFBSSxDQUFDRSxFQUFMLEdBQVUsQ0FBdkIsQ0FBWjtBQUFBLDZCQUNJO0FBQVEsaUJBQVMsRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXlCQSxDLENBRUQ7QUFDQTtBQUNBOztLQTlCd0JILEs7QUE0Q2pCLFNBQWVLLFFBQXRCO0FBQUE7QUFBQTs7O3VTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNPLElBQUlDLE9BQUosQ0FBb0IsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3JEQyx3QkFBVSxDQUFDLFlBQU07QUFDaEJGLHVCQUFPLENBQUMsQ0FDUDtBQUNDSixvQkFBRSxFQUFFLENBREw7QUFFQ0MsMEJBQVEsRUFBRSxvQkFDVCxvQ0FEUyxHQUVULHFDQUZTLEdBR1Q7QUFMRixpQkFETyxFQVFQO0FBQ0NELG9CQUFFLEVBQUUsQ0FETDtBQUVDQywwQkFBUSxFQUFFLHdCQUNULDZDQURTLEdBRVQseUNBRlMsR0FHVDtBQUxGLGlCQVJPLEVBZVA7QUFDQ0Qsb0JBQUUsRUFBRSxDQURMO0FBRUNDLDBCQUFRLEVBQUUsNkJBQ1QsMEJBRFMsR0FFVCwwQkFGUyxHQUdULDBCQUhTLEdBSVQsMEJBSlMsR0FLVDtBQVBGLGlCQWZPLEVBd0JQO0FBQ0NELG9CQUFFLEVBQUUsQ0FETDtBQUVDQywwQkFBUSxFQUFFLHFCQUNULGtDQURTLEdBRVQsbUNBRlMsR0FHVDtBQUxGLGlCQXhCTyxFQStCUDtBQUNDRCxvQkFBRSxFQUFFLENBREw7QUFFQ0MsMEJBQVEsRUFBRSxxQ0FDVCxtQ0FEUyxHQUVULG9DQUZTLEdBR1Q7QUFMRixpQkEvQk8sRUFzQ1A7QUFDQ0Qsb0JBQUUsRUFBRSxDQURMO0FBRUNDLDBCQUFRLEVBQUUsNkJBQ1QsMEJBRFMsR0FFVCwwQkFGUyxHQUdULDBCQUhTLEdBSVQsMEJBSlMsR0FLVDtBQVBGLGlCQXRDTyxFQStDUDtBQUNDRCxvQkFBRSxFQUFFLENBREw7QUFFQ0MsMEJBQVEsRUFBRSxzQ0FDVCxvQ0FEUyxHQUVULG9DQUZTLEdBR1Q7QUFMRixpQkEvQ08sRUFzRFA7QUFDQ0Qsb0JBQUUsRUFBRSxDQURMO0FBRUNDLDBCQUFRLEVBQUUsc0NBQ1Qsb0NBRFMsR0FFVCxvQ0FGUyxHQUdUO0FBTEYsaUJBdERPLENBQUQsQ0FBUDtBQThEQSxlQS9EUyxFQStEUCxDQS9ETyxDQUFWO0FBZ0VBLGFBakVZLENBRFA7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tpZF0uOTUzMmI4YjFmN2JjOGY5MWY4ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvc3Qge1xyXG5cdGlkOiBudW1iZXI7XHJcblx0Y29udGVudHM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoeyBwb3N0LCBwb3N0cyB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT4we3Bvc3QuaWR9PC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8aDE+cG9zdCB7cG9zdC5pZH08L2gxPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxwPntwb3N0LmNvbnRlbnRzfTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRwb3N0c1twb3N0LmlkIC0gMV1cclxuXHRcdFx0XHQmJlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcG9zdHMvXCIgKyAocG9zdC5pZCAtIDEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J3ByZXZQb3N0QnRuJ30+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdH1cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBvc3RzW3Bvc3QuaWQgKyAxXVxyXG5cdFx0XHRcdCYmXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wb3N0cy9cIiArIChwb3N0LmlkICsgMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnbmV4dFBvc3RCdG4nfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyBcdHJldHVybiB7IHByb3BzOiB7IHNzcjogdHJ1ZSB9IH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdGNvbnN0IHBvc3RzOiBQb3N0W10gPSBhd2FpdCBnZXRQb3N0cygpO1xyXG5cdGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiBgL3Bvc3RzLyR7cG9zdC5pZH1gKTtcclxuXHRyZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuXHRjb25zdCBwb3N0czogUG9zdFtdID0gYXdhaXQgZ2V0UG9zdHMoKTtcclxuXHRjb25zdCBwb3N0OiBQb3N0ID0gcG9zdHNbcGFyYW1zLmlkXTtcclxuXHRyZXR1cm4geyBwcm9wczogeyBwb3N0OiBwb3N0LCBwb3N0czogcG9zdHMgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuXHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8UG9zdFtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0cmVzb2x2ZShbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IDAsXHJcblx0XHRcdFx0XHRjb250ZW50czogJ0lcXCdtIHNvIGhhcHB5XFxuJyArXHJcblx0XHRcdFx0XHRcdCdcXCdDYXVzZSB0b2RheSBJIGZvdW5kIG15IGZyaWVuZHNcXG4nICtcclxuXHRcdFx0XHRcdFx0J1RoZXlcXCdyZSBpbiBteSBoZWFkLCBJXFwnbSBzbyB1Z2x5XFxuJyArXHJcblx0XHRcdFx0XHRcdCdUaGF0XFwncyBva2F5IFxcJ2NhdXNlIHNvIGFyZSB5b3UnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnQnJva2Ugb3VyIG1pcnJvcnNcXG4nICtcclxuXHRcdFx0XHRcdFx0J1N1bmRheSBtb3JuaW5nIGlzIGV2ZXJ5ZGF5IGZvciBhbGwgSSBjYXJlXFxuJyArXHJcblx0XHRcdFx0XHRcdCdBbmQgSVxcJ20gbm90IHNjYXJlZCwgbGlnaHQgbXkgY2FuZGxlc1xcbicgK1xyXG5cdFx0XHRcdFx0XHQnSW4gYSBkYXplIFxcJ2NhdXNlIElcXCd2ZSBmb3VuZCBHb2QnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaCwgeWVhaCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAzLFxyXG5cdFx0XHRcdFx0Y29udGVudHM6ICdJXFwnbSBzbyBsb25lbHlcXG4nICtcclxuXHRcdFx0XHRcdFx0J1RoYXRcXCdzIG9rYXksIEkgc2hhdmVkIG15IGhlYWRcXG4nICtcclxuXHRcdFx0XHRcdFx0J0FuZCBJXFwnbSBub3Qgc2FkIGFuZCBqdXN0IG1heWJlXFxuJyArXHJcblx0XHRcdFx0XHRcdCdJXFwnbSB0byBibGFtZSBmb3IgYWxsIElcXCd2ZSBoZWFyZCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiA0LFxyXG5cdFx0XHRcdFx0Y29udGVudHM6ICdJXFwnbSBub3Qgc3VyZSwgSVxcJ20gc28gZXhjaXRlZFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnSSBjYW5cXCd0IHdhaXQgdG8gbWVldCB5b3UgdGhlcmVcXG4nICtcclxuXHRcdFx0XHRcdFx0J0FuZCBJIGRvblxcJ3QgY2FyZSwgSVxcJ20gc28gaG9ybnlcXG4nICtcclxuXHRcdFx0XHRcdFx0J1RoYXRcXCdzIG9rYXksIG15IHdpbGwgaXMgZ29vZCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiA1LFxyXG5cdFx0XHRcdFx0Y29udGVudHM6ICdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IDYsXHJcblx0XHRcdFx0XHRjb250ZW50czogJ0kgbGlrZSBpdCwgSVxcJ20gbm90IGdvbm5hIGNyYWNrXFxuJyArXHJcblx0XHRcdFx0XHRcdCdJIG1pc3MgeW91LCBJXFwnbSBub3QgZ29ubmEgY3JhY2tcXG4nICtcclxuXHRcdFx0XHRcdFx0J0kgbG92ZSB5b3UsIElcXCdtIG5vdCBnb25uYSBjcmFja1xcbicgK1xyXG5cdFx0XHRcdFx0XHQnSSBraWxsZWQgeW91LCBJXFwnbSBub3QgZ29ubmEgY3JhY2snXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogNyxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnSSBsaWtlIGl0LCBJXFwnbSBub3QgZ29ubmEgY3JhY2tcXG4nICtcclxuXHRcdFx0XHRcdFx0J0kgbWlzcyB5b3UsIElcXCdtIG5vdCBnb25uYSBjcmFja1xcbicgK1xyXG5cdFx0XHRcdFx0XHQnSSBsb3ZlIHlvdSwgSVxcJ20gbm90IGdvbm5hIGNyYWNrXFxuJyArXHJcblx0XHRcdFx0XHRcdCdJIGtpbGxlZCB5b3UsIElcXCdtIG5vdCBnb25uYSBjcmFjaydcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdKVxyXG5cdFx0fSwgMClcclxuXHR9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=