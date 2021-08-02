webpackHotUpdate_N_E("pages/onOffCover",{

/***/ "./src/components/onOffCover/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/onOffCover/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _onOffCover_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onOffCover.module.scss */ "./src/components/onOffCover/onOffCover.module.scss");
/* harmony import */ var _onOffCover_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_onOffCover_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\onOffCover\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_onOffCover_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Card = function Card(_ref) {
  var title = _ref.title,
      listTitle = _ref.listTitle,
      list = _ref.list,
      img = _ref.img;
  var listEl = list === null || list === void 0 ? void 0 : list.map(function (data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: cx('item'),
      children: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('card'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('profileWrap'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('title'),
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: '/nextjs/img/imgApplicantOffA.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('listWrap'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('listTitle'),
        children: listTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: cx('list'),
        children: listEl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, _this);
};

_c = Card;

var OnOffCover = function OnOffCover() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    height: '0'
  }),
      style = _useState[0],
      setStyle = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('contentsWrap'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contents', 'off'),
        onClick: function onClick() {
          return setStyle({
            height: "100%"
          });
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('text'),
          children: "\uC11C\uB958\uC640 \uBA87 \uC904 \uC2A4\uD399\uB9CC\uC73C\uB85C\uB294.."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('text', 'em'),
          children: "\uB098\uC758 \uBAA8\uB4E0 \uAC83\uC744 \uB2E4 \uC124\uBA85\uD560 \uC218 \uC5C6\uC5B4\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('cardWrap'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
            title: '지원자 A',
            listTitle: '보유 스펙',
            list: ['지방 출신 대학', '이공계', '학점 3.2', '어학점수 無', '어학연수 無']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
            title: '지원자 B',
            listTitle: '보유 스펙',
            list: ['고등학교 졸업', '인턴경험 無', '대외활동 無', '수상경험 無', '보유 자격증 3개']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
            title: '지원자 C',
            listTitle: '보유 스펙',
            list: ['수도권 대학', '인문계', '학점 3.2', '어학점수 890점', '봉사활동 無']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsCover'),
        style: style,
        onClick: function onClick() {
          return setStyle({
            height: "0"
          });
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('contents', 'on'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: cx('text'),
            children: "\uC11C\uB958\uC640 \uBA87 \uB9C8\uB514 \uB9D0\uB85C\uB294 \uB2E4 \uD45C\uD604\uD558\uC9C0 \uBABB\uD55C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: cx('text', 'em'),
            children: "\uC5EC\uB7EC\uBD84\uB9CC\uC758 \uC5ED\uB7C9 \uC2A4\uD399\uD2B8\uB7FC\uC744 \uBCF4\uC5EC\uC8FC\uC138\uC694."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('cardWrap'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
              title: '지원자 A',
              listTitle: '동료 평가',
              list: ['“ 협업 및 소통 능력이 뛰어나 ”', '“ 정말 열정적인 사람이야! ”', '“ 발상이 정말 창의적이야! “', '“ 논리적으로 표현할 줄 알아 “']
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
              title: '지원자 B',
              listTitle: '동료 평가',
              list: ['“ 끈기 있고 추진력 있어 ”', '“ 어떤 일을 맡겨도 잘 해내! ”', '“ 정말 성실한 편이야 ”', '“ 목표달성 능력이 대단해 ”']
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
              title: '지원자 C',
              listTitle: '동료 평가',
              list: ['“ 의사표현 능력이 좋아 ”', '“ 일을 전략적으로 접근해! ”', '“ 감정전달 능력이 뛰어나 ”', '“ 매사에 정말 긍정적인 편이야 ”']
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 3
  }, _this);
};

_s(OnOffCover, "CeFmTd3hNktF3wNW0++ii1qa+S8=");

_c2 = OnOffCover;
/* harmony default export */ __webpack_exports__["default"] = (OnOffCover);

var _c, _c2;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "OnOffCover");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb25PZmZDb3Zlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkNhcmQiLCJ0aXRsZSIsImxpc3RUaXRsZSIsImxpc3QiLCJpbWciLCJsaXN0RWwiLCJtYXAiLCJkYXRhIiwiT25PZmZDb3ZlciIsInVzZVN0YXRlIiwiaGVpZ2h0Iiwic3R5bGUiLCJzZXRTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsOERBQWhCLENBQVg7O0FBU0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUM7QUFBQSxNQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLFNBQWdDLFFBQWhDQSxTQUFnQztBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxHQUFlLFFBQWZBLEdBQWU7QUFFckQsTUFBTUMsTUFBTSxHQUFHRixJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUcsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNsQyx3QkFBTztBQUFJLGVBQVMsRUFBRVgsRUFBRSxDQUFDLE1BQUQsQ0FBakI7QUFBQSxnQkFBNEJXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNBLEdBRmMsQ0FBZjtBQUlBLHNCQUNDO0FBQUssYUFBUyxFQUFFWCxFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsYUFBRCxDQUFsQjtBQUFBLDhCQUNDO0FBQU0saUJBQVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBbkI7QUFBQSxrQkFBK0JLO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQUssV0FB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QUFNLHFCQUFTLEVBQUVBLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUdDO0FBQUsscUJBQVMsRUFBRUEsRUFBRSxDQUFDLFVBQUQsQ0FBbEI7QUFBQSxvQ0FDQyxxRUFBQyxJQUFEO0FBQU0sbUJBQUssRUFBRSxPQUFiO0FBQXNCLHVCQUFTLEVBQUUsT0FBakM7QUFDRyxrQkFBSSxFQUFFLENBQUMscUJBQUQsRUFBd0IsbUJBQXhCLEVBQTZDLG1CQUE3QyxFQUFrRSxvQkFBbEU7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBR0MscUVBQUMsSUFBRDtBQUFNLG1CQUFLLEVBQUUsT0FBYjtBQUFzQix1QkFBUyxFQUFFLE9BQWpDO0FBQ0csa0JBQUksRUFBRSxDQUFDLGtCQUFELEVBQXFCLHFCQUFyQixFQUE0QyxnQkFBNUMsRUFBOEQsa0JBQTlEO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRCxlQUtDLHFFQUFDLElBQUQ7QUFBTSxtQkFBSyxFQUFFLE9BQWI7QUFBc0IsdUJBQVMsRUFBRSxPQUFqQztBQUNHLGtCQUFJLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixtQkFBcEIsRUFBeUMsa0JBQXpDLEVBQTZELHFCQUE3RDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFnQ0EsQ0FuQ0Q7O0dBQU1ZLFU7O01BQUFBLFU7QUFxQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29uT2ZmQ292ZXIuOWIxMDkyNDlkMWJhN2VhMjRlOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9vbk9mZkNvdmVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBDYXJkIHtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRsaXN0VGl0bGU/OiBzdHJpbmc7XHJcblx0bGlzdD86IEFycmF5PHN0cmluZz47XHJcblx0aW1nPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDYXJkID0gKHt0aXRsZSwgbGlzdFRpdGxlLCBsaXN0LCBpbWd9OiBDYXJkKSA9PiB7XHJcblxyXG5cdGNvbnN0IGxpc3RFbCA9IGxpc3Q/Lm1hcCgoZGF0YSkgPT4ge1xyXG5cdFx0cmV0dXJuIDxsaSBjbGFzc05hbWU9e2N4KCdpdGVtJyl9PntkYXRhfTwvbGk+XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NhcmQnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgncHJvZmlsZVdyYXAnKX0+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e3RpdGxlfTwvc3Bhbj5cclxuXHRcdFx0XHQ8aW1nIHNyYz17Jy9uZXh0anMvaW1nL2ltZ0FwcGxpY2FudE9mZkEucG5nJ30vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdsaXN0V3JhcCcpfT5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCdsaXN0VGl0bGUnKX0+e2xpc3RUaXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHR7bGlzdEVsfVxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuY29uc3QgT25PZmZDb3ZlciA9ICgpID0+IHtcclxuXHRjb25zdCBbc3R5bGUsIHNldFN0eWxlXSA9IHVzZVN0YXRlKHtoZWlnaHQ6ICcwJ30pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzV3JhcCcpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJywgJ29mZicpfSBvbkNsaWNrPXsoKSA9PiBzZXRTdHlsZSh7aGVpZ2h0OiBgMTAwJWB9KX0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0ZXh0Jyl9PuyEnOulmOyZgCDrqocg7KSEIOyKpO2OmeunjOycvOuhnOuKlC4uPC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGV4dCcsICdlbScpfT7rgpjsnZgg66qo65OgIOqyg+ydhCDri6Qg7ISk66qF7ZWgIOyImCDsl4bslrTsmpQuPC9zcGFuPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjYXJkV3JhcCcpfT5cclxuXHRcdFx0XHRcdFx0PENhcmQgdGl0bGU9eyfsp4Dsm5DsnpAgQSd9IGxpc3RUaXRsZT17J+uztOycoCDsiqTtjpknfVxyXG5cdFx0XHRcdFx0XHRcdCAgbGlzdD17Wyfsp4DrsKkg7Lac7IugIOuMgO2VmScsICfsnbTqs7Xqs4QnLCAn7ZWZ7KCQIDMuMicsICfslrTtlZnsoJDsiJgg54ShJywgJ+yWtO2VmeyXsOyImCDnhKEnXX0vPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCB0aXRsZT17J+yngOybkOyekCBCJ30gbGlzdFRpdGxlPXsn67O07JygIOyKpO2OmSd9XHJcblx0XHRcdFx0XHRcdFx0ICBsaXN0PXtbJ+qzoOuTse2Vmeq1kCDsobjsl4UnLCAn7J247YS06rK97ZeYIOeEoScsICfrjIDsmbjtmZzrj5kg54ShJywgJ+yImOyDgeqyve2XmCDnhKEnLCAn67O07JygIOyekOqyqeymnSAz6rCcJ119Lz5cclxuXHRcdFx0XHRcdFx0PENhcmQgdGl0bGU9eyfsp4Dsm5DsnpAgQyd9IGxpc3RUaXRsZT17J+uztOycoCDsiqTtjpknfVxyXG5cdFx0XHRcdFx0XHRcdCAgbGlzdD17WyfsiJjrj4Tqtowg64yA7ZWZJywgJ+yduOusuOqzhCcsICftlZnsoJAgMy4yJywgJ+yWtO2VmeygkOyImCA4OTDsoJAnLCAn67SJ7IKs7Zmc64+ZIOeEoSddfS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzQ292ZXInKX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXsoKSA9PiBzZXRTdHlsZSh7aGVpZ2h0OiBgMGB9KX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJywgJ29uJyl9PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0ZXh0Jyl9PuyEnOulmOyZgCDrqocg66eI65SUIOunkOuhnOuKlCDri6Qg7ZGc7ZiE7ZWY7KeAIOuqu+2VnDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGV4dCcsICdlbScpfT7sl6zrn6zrtoTrp4zsnZgg7Jet65+JIOyKpO2Ome2KuOufvOydhCDrs7Tsl6zso7zshLjsmpQuPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NhcmRXcmFwJyl9PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkIHRpdGxlPXsn7KeA7JuQ7J6QIEEnfSBsaXN0VGl0bGU9eyfrj5nro4wg7Y+J6rCAJ31cclxuXHRcdFx0XHRcdFx0XHRcdCAgbGlzdD17WyfigJwg7ZiR7JeFIOuwjyDshozthrUg64ql66Cl7J20IOubsOyWtOuCmCDigJ0nLCAn4oCcIOygleunkCDsl7TsoJXsoIHsnbgg7IKs656M7J207JW8ISDigJ0nLCAn4oCcIOuwnOyDgeydtCDsoJXrp5Ag7LC97J2Y7KCB7J207JW8ISDigJwnLCAn4oCcIOuFvOumrOyggeycvOuhnCDtkZztmITtlaAg7KSEIOyVjOyVhCDigJwnXX0vPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkIHRpdGxlPXsn7KeA7JuQ7J6QIEInfSBsaXN0VGl0bGU9eyfrj5nro4wg7Y+J6rCAJ31cclxuXHRcdFx0XHRcdFx0XHRcdCAgbGlzdD17WyfigJwg64GI6riwIOyeiOqzoCDstpTsp4TroKUg7J6I7Ja0IOKAnScsICfigJwg7Ja065akIOydvOydhCDrp6Hqsqjrj4Qg7J6YIO2VtOuCtCEg4oCdJywgJ+KAnCDsoJXrp5Ag7ISx7Iuk7ZWcIO2OuOydtOyVvCDigJ0nLCAn4oCcIOuqqe2RnOuLrOyEsSDriqXroKXsnbQg64yA64uo7ZW0IOKAnSddfS8+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQgdGl0bGU9eyfsp4Dsm5DsnpAgQyd9IGxpc3RUaXRsZT17J+uPmeujjCDtj4nqsIAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0ICBsaXN0PXtbJ+KAnCDsnZjsgqztkZztmIQg64ql66Cl7J20IOyii+yVhCDigJ0nLCAn4oCcIOydvOydhCDsoITrnrXsoIHsnLzroZwg7KCR6re87ZW0ISDigJ0nLCAn4oCcIOqwkOygleyghOuLrCDriqXroKXsnbQg65uw7Ja064KYIOKAnScsICfigJwg66ek7IKs7JeQIOygleunkCDquI3soJXsoIHsnbgg7Y647J207JW8IOKAnSddfS8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT25PZmZDb3ZlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==