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
      list = _ref.list;
  var listEl = list === null || list === void 0 ? void 0 : list.map(function (data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: cx('item'),
      children: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('card'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('profileWrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('title'),
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('listWrap'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('listTitle'),
        children: listTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: cx('list'),
        children: listEl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
          lineNumber: 41,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('text', 'em'),
          children: "\uB098\uC758 \uBAA8\uB4E0 \uAC83\uC744 \uB2E4 \uC124\uBA85\uD560 \uC218 \uC5C6\uC5B4\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('cardWrap'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
            title: '지원자 A',
            listTitle: '보유 스펙',
            list: ['지방 출신 대학', '이공계', '학점 3.2', '']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
            title: '지원자 B',
            listTitle: '보유 스펙'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
            title: '지원자 C',
            listTitle: '보유 스펙'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
            lineNumber: 51,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: cx('text', 'em'),
            children: "\uC5EC\uB7EC\uBD84\uB9CC\uC758 \uC5ED\uB7C9 \uC2A4\uD399\uD2B8\uB7FC\uC744 \uBCF4\uC5EC\uC8FC\uC138\uC694."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('cardWrap'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
              title: '지원자 A',
              listTitle: '동료 평가'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
              title: '지원자 B',
              listTitle: '동료 평가'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
              title: '지원자 C',
              listTitle: '동료 평가'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb25PZmZDb3Zlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkNhcmQiLCJ0aXRsZSIsImxpc3RUaXRsZSIsImxpc3QiLCJsaXN0RWwiLCJtYXAiLCJkYXRhIiwiT25PZmZDb3ZlciIsInVzZVN0YXRlIiwiaGVpZ2h0Iiwic3R5bGUiLCJzZXRTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsOERBQWhCLENBQVg7O0FBUUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBb0M7QUFBQSxNQUFsQ0MsS0FBa0MsUUFBbENBLEtBQWtDO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFFaEQsTUFBTUMsTUFBTSxHQUFHRCxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUUsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNsQyx3QkFBTztBQUFJLGVBQVMsRUFBRVYsRUFBRSxDQUFDLE1BQUQsQ0FBakI7QUFBQSxnQkFBNEJVO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNBLEdBRmMsQ0FBZjtBQUlBLHNCQUNDO0FBQUssYUFBUyxFQUFFVixFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsYUFBRCxDQUFsQjtBQUFBLDZCQUNDO0FBQU0saUJBQVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBbkI7QUFBQSxrQkFBK0JLO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJQztBQUFLLGVBQVMsRUFBRUws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O0FBQXNCLHVCQUFTLEVBQUU7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRCxlQUdDLHFFQUFDLElBQUQ7QUFBTSxtQkFBSyxFQUFFLE9BQWI7QUFBc0IsdUJBQVMsRUFBRTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBMEJBLENBN0JEOztHQUFNVyxVOztNQUFBQSxVO0FBK0JTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vbk9mZkNvdmVyLjNhNTM4MWE0ZDFjZDkxMDJiMWI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vb25PZmZDb3Zlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZCB7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0bGlzdFRpdGxlPzogc3RyaW5nO1xyXG5cdGxpc3Q/OiBBcnJheTxzdHJpbmc+O1xyXG59XHJcblxyXG5jb25zdCBDYXJkID0gKHt0aXRsZSwgbGlzdFRpdGxlLCBsaXN0fTogQ2FyZCkgPT4ge1xyXG5cclxuXHRjb25zdCBsaXN0RWwgPSBsaXN0Py5tYXAoKGRhdGEpID0+IHtcclxuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjeCgnaXRlbScpfT57ZGF0YX08L2xpPlxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjYXJkJyl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3Byb2ZpbGVXcmFwJyl9PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ3RpdGxlJyl9Pnt0aXRsZX08L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2xpc3RXcmFwJyl9PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ2xpc3RUaXRsZScpfT57bGlzdFRpdGxlfTwvc3Bhbj5cclxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPXtjeCgnbGlzdCcpfT5cclxuXHRcdFx0XHRcdHtsaXN0RWx9XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5jb25zdCBPbk9mZkNvdmVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzdHlsZSwgc2V0U3R5bGVdID0gdXNlU3RhdGUoe2hlaWdodDogJzAnfSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHNXcmFwJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnLCAnb2ZmJyl9IG9uQ2xpY2s9eygpID0+IHNldFN0eWxlKHtoZWlnaHQ6IGAxMDAlYH0pfT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ3RleHQnKX0+7ISc66WY7JmAIOuqhyDspIQg7Iqk7Y6Z66eM7Jy866Gc64qULi48L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0ZXh0JywgJ2VtJyl9PuuCmOydmCDrqqjrk6Ag6rKD7J2EIOuLpCDshKTrqoXtlaAg7IiYIOyXhuyWtOyalC48L3NwYW4+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NhcmRXcmFwJyl9PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCB0aXRsZT17J+yngOybkOyekCBBJ30gbGlzdFRpdGxlPXsn67O07JygIOyKpO2OmSd9IGxpc3Q9e1sn7KeA67CpIOy2nOyLoCDrjIDtlZknLCAn7J206rO16rOEJywgJ+2VmeygkCAzLjInLCAnJ119Lz5cclxuXHRcdFx0XHRcdFx0PENhcmQgdGl0bGU9eyfsp4Dsm5DsnpAgQid9IGxpc3RUaXRsZT17J+uztOycoCDsiqTtjpknfS8+XHJcblx0XHRcdFx0XHRcdDxDYXJkIHRpdGxlPXsn7KeA7JuQ7J6QIEMnfSBsaXN0VGl0bGU9eyfrs7TsnKAg7Iqk7Y6ZJ30vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50c0NvdmVyJyl9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17KCkgPT4gc2V0U3R5bGUoe2hlaWdodDogYDBgfSl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50cycsICdvbicpfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGV4dCcpfT7shJzrpZjsmYAg66qHIOuniOuUlCDrp5DroZzripQg64ukIO2RnO2YhO2VmOyngCDrqrvtlZw8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ3RleHQnLCAnZW0nKX0+7Jes65+s67aE66eM7J2YIOyXreufiSDsiqTtjpntirjrn7zsnYQg67O07Jes7KO87IS47JqULjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdjYXJkV3JhcCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZCB0aXRsZT17J+yngOybkOyekCBBJ30gbGlzdFRpdGxlPXsn64+Z66OMIO2PieqwgCd9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZCB0aXRsZT17J+yngOybkOyekCBCJ30gbGlzdFRpdGxlPXsn64+Z66OMIO2PieqwgCd9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZCB0aXRsZT17J+yngOybkOyekCBDJ30gbGlzdFRpdGxlPXsn64+Z66OMIO2PieqwgCd9Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPbk9mZkNvdmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9