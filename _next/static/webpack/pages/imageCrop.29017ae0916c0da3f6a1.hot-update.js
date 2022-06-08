webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/index.tsx":
/*!********************************************!*\
  !*** ./src/components/imageCrop/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCrop.module.scss */ "./src/components/imageCrop/imageCrop.module.scss");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CropBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CropBox */ "./src/components/imageCrop/CropBox.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/components/imageCrop/data.ts");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

var ImageCrop = function ImageCrop(_ref) {
  _s();

  var src = _ref.src;
  var wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_data__WEBPACK_IMPORTED_MODULE_5__["ORIGIN_SIZE"]),
      imgSize = _useState[0],
      setImgSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_data__WEBPACK_IMPORTED_MODULE_5__["ORIGIN_SIZE"]),
      cropBoxSize = _useState2[0],
      setCropBoxSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_data__WEBPACK_IMPORTED_MODULE_5__["ORIGIN_POINT"]),
      offset = _useState3[0],
      setOffset = _useState3[1];

  var load = function load() {
    setImgSize({
      w: imgEl.width,
      h: imgEl.height
    });
    setCropBoxSize({
      w: imgEl.width / 2,
      h: imgEl.height / 2
    });
    setOffset({
      x: imgEl.width / 4,
      y: imgEl.width / 4
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var imgEl = new Image();
    imgEl.src = src;
    imgEl.addEventListener('load', function () {
      return load;
    });
    return function () {
      removeEventListener('load', load);
    };
  }, [src]);
  if (!src) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: wrapRef,
    className: cx('wrap'),
    style: {
      width: "".concat(imgSize.w, "px"),
      height: "".concat(imgSize.h, "px")
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('cropArea'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('imgArea'),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('imgBox'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: cx('img'),
            src: src,
            style: {
              width: "".concat(imgSize.w, "px"),
              height: "".concat(imgSize.h, "px")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CropBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
        wrapRef: wrapRef,
        src: src,
        imgSize: imgSize,
        offset: offset,
        setOffset: setOffset,
        cropBoxSize: cropBoxSize,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_s(ImageCrop, "rphPXB6AbJ+lt/R+BArqc94ubzk=");

_c = ImageCrop;
/* harmony default export */ __webpack_exports__["default"] = (ImageCrop);

var _c;

$RefreshReg$(_c, "ImageCrop");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwic3JjIiwid3JhcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiT1JJR0lOX1NJWkUiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJPUklHSU5fUE9JTlQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJsb2FkIiwidyIsImltZ0VsIiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwieCIsInkiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFNQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE2QjtBQUFBOztBQUFBLE1BQTFCQyxHQUEwQixRQUExQkEsR0FBMEI7QUFDN0MsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFpQixJQUFqQixDQUF0Qjs7QUFENkMsa0JBRWZDLHNEQUFRLENBQU9DLGlEQUFQLENBRk87QUFBQSxNQUV0Q0MsT0FGc0M7QUFBQSxNQUU3QkMsVUFGNkI7O0FBQUEsbUJBR1BILHNEQUFRLENBQU9DLGlEQUFQLENBSEQ7QUFBQSxNQUd0Q0csV0FIc0M7QUFBQSxNQUd6QkMsY0FIeUI7O0FBQUEsbUJBSWpCTCxzREFBUSxDQUFRTSxrREFBUixDQUpTO0FBQUEsTUFJdENDLE1BSnNDO0FBQUEsTUFJOUJDLFNBSjhCOztBQU03QyxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCTixjQUFVLENBQUM7QUFBQ08sT0FBQyxFQUFFQyxLQUFLLENBQUNDLEtBQVY7QUFBaUJDLE9BQUMsRUFBRUYsS0FBSyxDQUFDRztBQUExQixLQUFELENBQVY7QUFDQVQsa0JBQWMsQ0FBQztBQUFFSyxPQUFDLEVBQUVDLEtBQUssQ0FBQ0MsS0FBTixHQUFjLENBQW5CO0FBQXNCQyxPQUFDLEVBQUVGLEtBQUssQ0FBQ0csTUFBTixHQUFlO0FBQXhDLEtBQUQsQ0FBZDtBQUNBTixhQUFTLENBQUM7QUFBRU8sT0FBQyxFQUFFSixLQUFLLENBQUNDLEtBQU4sR0FBYyxDQUFuQjtBQUFzQkksT0FBQyxFQUFFTCxLQUFLLENBQUNDLEtBQU4sR0FBYztBQUF2QyxLQUFELENBQVQ7QUFDRCxHQUpEOztBQU1BSyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNTixLQUFLLEdBQUcsSUFBSU8sS0FBSixFQUFkO0FBQ0FQLFNBQUssQ0FBQ2QsR0FBTixHQUFZQSxHQUFaO0FBQ0FjLFNBQUssQ0FBQ1EsZ0JBQU4sQ0FBdUIsTUFBdkIsRUFBK0I7QUFBQSxhQUFNVixJQUFOO0FBQUEsS0FBL0I7QUFFQSxXQUFPLFlBQU07QUFDWFcseUJBQW1CLENBQUMsTUFBRCxFQUFTWCxJQUFULENBQW5CO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixDQUFDWixHQUFELENBUk0sQ0FBVDtBQVVBLE1BQUcsQ0FBQ0EsR0FBSixFQUFTLE9BQU8sSUFBUDtBQUVULHNCQUNFO0FBQ0UsT0FBRyxFQUFFQyxPQURQO0FBRUUsYUFBUyxFQUFFTixFQUFFLENBQUMsTUFBRCxDQUZmO0FBR0UsU0FBSyxFQUFFO0FBQ0xvQixXQUFLLFlBQUtWLE9BQU8sQ0FBQ1EsQ0FBYixPQURBO0FBRUxJLFlBQU0sWUFBS1osT0FBTyxDQUFDVyxDQUFiO0FBRkQsS0FIVDtBQUFBLDJCQVFFO0FBQUssZUFBUyxFQUFFckIsRUFBRSxDQUFDLFVBQUQsQ0FBbEI7QUFBQSw4QkFHRTtBQUFLLGlCQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQWxCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFQSxFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRUEsRUFBRSxDQUFDLEtBQUQsQ0FEZjtBQUVFLGVBQUcsRUFBRUssR0FGUDtBQUdFLGlCQUFLLEVBQUU7QUFDTGUsbUJBQUssWUFBS1YsT0FBTyxDQUFDUSxDQUFiLE9BREE7QUFFTEksb0JBQU0sWUFBS1osT0FBTyxDQUFDVyxDQUFiO0FBRkQ7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQWlCRTtBQUFLLGlCQUFTLEVBQUVyQixFQUFFLENBQUMsV0FBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLGVBb0JFLHFFQUFDLGdEQUFEO0FBQ0UsZUFBTyxFQUFFTSxPQURYO0FBRUUsV0FBRyxFQUFFRCxHQUZQO0FBR0UsZUFBTyxFQUFFSyxPQUhYO0FBSUUsY0FBTSxFQUFFSyxNQUpWO0FBS0UsaUJBQVMsRUFBRUMsU0FMYjtBQU1FLG1CQUFXLEVBQUVKLFdBTmY7QUFPRSxzQkFBYyxFQUFFQztBQVBsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQWxFRDs7R0FBTVQsUzs7S0FBQUEsUztBQW9FU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjI5MDE3YWUwOTE2YzBkYTNmNmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDcm9wQm94IGZyb20gJy4vQ3JvcEJveCc7XHJcbmltcG9ydCB7IFNpemUsIFBvaW50LCBPUklHSU5fUE9JTlQsIE9SSUdJTl9TSVpFIH0gZnJvbSAnLi9kYXRhJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUNyb3BQcm9wcyB7XHJcbiAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICh7IHNyYyB9OiBJbWFnZUNyb3BQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbWdTaXplKHt3OiBpbWdFbC53aWR0aCwgaDogaW1nRWwuaGVpZ2h0fSk7XHJcbiAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGltZ0VsLndpZHRoIC8gMiwgaDogaW1nRWwuaGVpZ2h0IC8gMiB9KTtcclxuICAgIHNldE9mZnNldCh7IHg6IGltZ0VsLndpZHRoIC8gNCwgeTogaW1nRWwud2lkdGggLyA0IH0pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGltZ0VsID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdFbC5zcmMgPSBzcmM7XHJcbiAgICBpbWdFbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gbG9hZCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWQpO1xyXG4gICAgfVxyXG4gIH0sIFtzcmNdKTtcclxuXHJcbiAgaWYoIXNyYykgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17d3JhcFJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfT5cclxuXHJcbiAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogZGltbWVkIOyYgeyXrSDrsJXsiqQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdkaW1tZWRCb3gnKX0gLz5cclxuXHJcbiAgICAgICAgey8qIGNyb3Ag7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8Q3JvcEJveFxyXG4gICAgICAgICAgd3JhcFJlZj17d3JhcFJlZn1cclxuICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIG9mZnNldD17b2Zmc2V0fVxyXG4gICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICBjcm9wQm94U2l6ZT17Y3JvcEJveFNpemV9XHJcbiAgICAgICAgICBzZXRDcm9wQm94U2l6ZT17c2V0Q3JvcEJveFNpemV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyb3A7Il0sInNvdXJjZVJvb3QiOiIifQ==