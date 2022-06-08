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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var imgEl = new Image();
    imgEl.src = src;
    imgEl.addEventListener('load', function () {
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
    });
  }, []);
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
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CropBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
        wrapRef: wrapRef,
        imgPath: src,
        imgSize: imgSize,
        offset: offset,
        setOffset: setOffset,
        cropBoxSize: cropBoxSize,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwic3JjIiwid3JhcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiT1JJR0lOX1NJWkUiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJPUklHSU5fUE9JTlQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJ1c2VFZmZlY3QiLCJpbWdFbCIsIkltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBTUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQzdDLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBdEI7O0FBRDZDLGtCQUVmQyxzREFBUSxDQUFPQyxpREFBUCxDQUZPO0FBQUEsTUFFdENDLE9BRnNDO0FBQUEsTUFFN0JDLFVBRjZCOztBQUFBLG1CQUdQSCxzREFBUSxDQUFPQyxpREFBUCxDQUhEO0FBQUEsTUFHdENHLFdBSHNDO0FBQUEsTUFHekJDLGNBSHlCOztBQUFBLG1CQUlqQkwsc0RBQVEsQ0FBUU0sa0RBQVIsQ0FKUztBQUFBLE1BSXRDQyxNQUpzQztBQUFBLE1BSTlCQyxTQUo4Qjs7QUFNN0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQ7QUFDQUQsU0FBSyxDQUFDYixHQUFOLEdBQVlBLEdBQVo7QUFFQWEsU0FBSyxDQUFDRSxnQkFBTixDQUF1QixNQUF2QixFQUErQixZQUFNO0FBQ25DVCxnQkFBVSxDQUFDO0FBQUNVLFNBQUMsRUFBRUgsS0FBSyxDQUFDSSxLQUFWO0FBQWlCQyxTQUFDLEVBQUVMLEtBQUssQ0FBQ007QUFBMUIsT0FBRCxDQUFWO0FBQ0FYLG9CQUFjLENBQUM7QUFBRVEsU0FBQyxFQUFFSCxLQUFLLENBQUNJLEtBQU4sR0FBYyxDQUFuQjtBQUFzQkMsU0FBQyxFQUFFTCxLQUFLLENBQUNNLE1BQU4sR0FBZTtBQUF4QyxPQUFELENBQWQ7QUFDQVIsZUFBUyxDQUFDO0FBQUVTLFNBQUMsRUFBRVAsS0FBSyxDQUFDSSxLQUFOLEdBQWMsQ0FBbkI7QUFBc0JJLFNBQUMsRUFBRVIsS0FBSyxDQUFDSSxLQUFOLEdBQWM7QUFBdkMsT0FBRCxDQUFUO0FBQ0QsS0FKRDtBQUtELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXQSxNQUFHLENBQUNqQixHQUFKLEVBQVMsT0FBTyxJQUFQO0FBR1Qsc0JBQ0U7QUFDRSxPQUFHLEVBQUVDLE9BRFA7QUFFRSxhQUFTLEVBQUVOLEVBQUUsQ0FBQyxNQUFELENBRmY7QUFHRSxTQUFLLEVBQUU7QUFDTHNCLFdBQUssWUFBS1osT0FBTyxDQUFDVyxDQUFiLE9BREE7QUFFTEcsWUFBTSxZQUFLZCxPQUFPLENBQUNhLENBQWI7QUFGRCxLQUhUO0FBQUEsMkJBUUU7QUFBSyxlQUFTLEVBQUV2QixFQUFFLENBQUMsVUFBRCxDQUFsQjtBQUFBLDhCQUdFO0FBQUssaUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbEI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFQSxFQUFFLENBQUMsS0FBRCxDQURmO0FBRUUsZUFBRyxFQUFFSyxHQUZQO0FBR0UsaUJBQUssRUFBRTtBQUNMaUIsbUJBQUssWUFBS1osT0FBTyxDQUFDVyxDQUFiLE9BREE7QUFFTEcsb0JBQU0sWUFBS2QsT0FBTyxDQUFDYSxDQUFiO0FBRkQ7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQWlCRTtBQUFLLGlCQUFTLEVBQUV2QixFQUFFLENBQUMsV0FBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLGVBb0JFLHFFQUFDLGdEQUFEO0FBQ0UsZUFBTyxFQUFFTSxPQURYO0FBRUUsZUFBTyxFQUFFRCxHQUZYO0FBR0UsZUFBTyxFQUFFSyxPQUhYO0FBSUUsY0FBTSxFQUFFSyxNQUpWO0FBS0UsaUJBQVMsRUFBRUMsU0FMYjtBQU1FLG1CQUFXLEVBQUVKLFdBTmY7QUFPRSxzQkFBYyxFQUFFQztBQVBsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQTlERDs7R0FBTVQsUzs7S0FBQUEsUztBQWdFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLmI0ZjBlMGQwMjIyNGY4NjRjMTJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDcm9wQm94IGZyb20gJy4vQ3JvcEJveCc7XHJcbmltcG9ydCB7IFNpemUsIFBvaW50LCBPUklHSU5fUE9JTlQsIE9SSUdJTl9TSVpFIH0gZnJvbSAnLi9kYXRhJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUNyb3BQcm9wcyB7XHJcbiAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICh7IHNyYyB9OiBJbWFnZUNyb3BQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbWdFbCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nRWwuc3JjID0gc3JjO1xyXG5cclxuICAgIGltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIHNldEltZ1NpemUoe3c6IGltZ0VsLndpZHRoLCBoOiBpbWdFbC5oZWlnaHR9KTtcclxuICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBpbWdFbC53aWR0aCAvIDIsIGg6IGltZ0VsLmhlaWdodCAvIDIgfSk7XHJcbiAgICAgIHNldE9mZnNldCh7IHg6IGltZ0VsLndpZHRoIC8gNCwgeTogaW1nRWwud2lkdGggLyA0IH0pO1xyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmKCFzcmMpIHJldHVybiBudWxsO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXt3cmFwUmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2N4KCd3cmFwJyl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2Nyb3BBcmVhJyl9PlxyXG5cclxuICAgICAgICB7Lyog7J2066+47KeAIOyYgeyXrSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ltZ0FyZWEnKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ltZ0JveCcpfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2ltZycpfVxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBkaW1tZWQg7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSAvPlxyXG5cclxuICAgICAgICB7LyogY3JvcCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxDcm9wQm94XHJcbiAgICAgICAgICB3cmFwUmVmPXt3cmFwUmVmfVxyXG4gICAgICAgICAgaW1nUGF0aD17c3JjfVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIG9mZnNldD17b2Zmc2V0fVxyXG4gICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICBjcm9wQm94U2l6ZT17Y3JvcEJveFNpemV9XHJcbiAgICAgICAgICBzZXRDcm9wQm94U2l6ZT17c2V0Q3JvcEJveFNpemV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyb3A7Il0sInNvdXJjZVJvb3QiOiIifQ==