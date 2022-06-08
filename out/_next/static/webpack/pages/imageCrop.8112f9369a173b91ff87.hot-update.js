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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/components/imageCrop/data.ts");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageCrop.module.scss */ "./src/components/imageCrop/imageCrop.module.scss");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DimmedBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DimmedBox */ "./src/components/imageCrop/DimmedBox.tsx");
/* harmony import */ var _CropBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CropBox */ "./src/components/imageCrop/CropBox.tsx");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_4___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var ImageCrop = function ImageCrop(_ref) {
  _s();

  var src = _ref.src;
  var wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_SIZE"]),
      imgSize = _useState[0],
      setImgSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_SIZE"]),
      cropBoxSize = _useState2[0],
      setCropBoxSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_POINT"]),
      offset = _useState3[0],
      setOffset = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, [src]);

  var init = function init() {
    var imgEl = new Image();
    imgEl.src = src;

    imgEl.onload = function () {
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
        y: imgEl.height / 4
      });
    };
  };

  var handleDownload = function handleDownload() {
    var canvas = document.createElement('canvas');
    canvas.width = imgSize.w;
    canvas.height = imgSize.h;
    var ctx = canvas.getContext('2d');
    var imgEl = new Image();
    imgEl.src = src;

    imgEl.onload = function () {
      ctx.drawImage(imgEl, // 원본 이미지
      offset.x, // 잘려진 이미지 x 좌표
      offset.y, // 잘려진 이미지 y 좌표
      cropBoxSize.w, // 잘려진 이미지 가로 길이
      cropBoxSize.h, // 잘려진 이미지 세로 길이
      0, // 이미지 시작 x 좌표
      0, // 이미지 시작 y 좌표
      imgSize.w, // 이미지 가로 길이
      imgSize.h // 이미지 세로 길이
      );
    };

    return new Promise(function (resolve) {
      resolve(canvas.toDataURL());
    });
  };

  if (!src) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: wrapRef,
    className: cx('wrap'),
    style: {
      width: "".concat(imgSize.w, "px"),
      height: "".concat(imgSize.h, "px")
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 75,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        wrapRef: wrapRef,
        imgSize: imgSize,
        setOffset: setOffset,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CropBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        wrapRef: wrapRef,
        src: src,
        imgSize: imgSize,
        offset: offset,
        setOffset: setOffset,
        cropBoxSize: cropBoxSize,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn'),
      onClick: handleDownload,
      children: "download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwic3JjIiwid3JhcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiT1JJR0lOX1NJWkUiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJPUklHSU5fUE9JTlQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJ1c2VFZmZlY3QiLCJpbml0IiwiaW1nRWwiLCJJbWFnZSIsIm9ubG9hZCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJ4IiwieSIsImhhbmRsZURvd25sb2FkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidG9EYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFNQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE2QjtBQUFBOztBQUFBLE1BQTFCQyxHQUEwQixRQUExQkEsR0FBMEI7QUFDN0MsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFpQixJQUFqQixDQUF0Qjs7QUFENkMsa0JBRWZDLHNEQUFRLENBQU9DLGlEQUFQLENBRk87QUFBQSxNQUV0Q0MsT0FGc0M7QUFBQSxNQUU3QkMsVUFGNkI7O0FBQUEsbUJBR1BILHNEQUFRLENBQU9DLGlEQUFQLENBSEQ7QUFBQSxNQUd0Q0csV0FIc0M7QUFBQSxNQUd6QkMsY0FIeUI7O0FBQUEsbUJBSWpCTCxzREFBUSxDQUFRTSxrREFBUixDQUpT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QUFPLENBQUNjLENBQWI7QUFGRDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBZUUscUVBQUMsa0RBQUQ7QUFDRSxlQUFPLEVBQUVsQixPQURYO0FBRUUsZUFBTyxFQUFFSSxPQUZYO0FBR0UsaUJBQVMsRUFBRU0sU0FIYjtBQUlFLHNCQUFjLEVBQUVIO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixlQXNCRSxxRUFBQyxnREFBRDtBQUNFLGVBQU8sRUFBRVAsT0FEWDtBQUVFLFdBQUcsRUFBRUQsR0FGUDtBQUdFLGVBQU8sRUFBRUssT0FIWDtBQUlFLGNBQU0sRUFBRUssTUFKVjtBQUtFLGlCQUFTLEVBQUVDLFNBTGI7QUFNRSxtQkFBVyxFQUFFSixXQU5mO0FBT0Usc0JBQWMsRUFBRUM7QUFQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQXlDRTtBQUFHLGVBQVMsRUFBRWIsRUFBRSxDQUFDLEtBQUQsQ0FBaEI7QUFBeUIsYUFBTyxFQUFFNEIsY0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2Q0QsQ0E5RkQ7O0dBQU14QixTOztLQUFBQSxTO0FBZ0dTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuODExMmY5MzY5YTE3M2I5MWZmODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2l6ZSwgUG9pbnQsIE9SSUdJTl9QT0lOVCwgT1JJR0lOX1NJWkUgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IERpbW1lZEJveCBmcm9tICcuL0RpbW1lZEJveCc7XHJcbmltcG9ydCBDcm9wQm94IGZyb20gJy4vQ3JvcEJveCc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgSW1hZ2VDcm9wUHJvcHMge1xyXG4gIHNyYzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBJbWFnZUNyb3AgPSAoeyBzcmMgfTogSW1hZ2VDcm9wUHJvcHMpID0+IHtcclxuICBjb25zdCB3cmFwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbaW1nU2l6ZSwgc2V0SW1nU2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG4gIH0sIFtzcmNdKTtcclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0VsID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdFbC5zcmMgPSBzcmM7XHJcbiAgICBpbWdFbC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHNldEltZ1NpemUoeyB3OiBpbWdFbC53aWR0aCwgaDogaW1nRWwuaGVpZ2h0IH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGltZ0VsLndpZHRoIC8gMiwgaDogaW1nRWwuaGVpZ2h0IC8gMiB9KTtcclxuICAgICAgc2V0T2Zmc2V0KHsgeDogaW1nRWwud2lkdGggLyA0LCB5OiBpbWdFbC5oZWlnaHQgLyA0IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IGltZ1NpemUudztcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWdTaXplLmg7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBjb25zdCBpbWdFbCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nRWwuc3JjID0gc3JjO1xyXG4gICAgaW1nRWwub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltZ0VsLCAvLyDsm5Drs7gg7J2066+47KeAXHJcbiAgICAgICAgb2Zmc2V0LngsIC8vIOyemOugpOynhCDsnbTrr7jsp4AgeCDsooztkZxcclxuICAgICAgICBvZmZzZXQueSwgLy8g7J6Y66Ck7KeEIOydtOuvuOyngCB5IOyijO2RnFxyXG4gICAgICAgIGNyb3BCb3hTaXplLncsIC8vIOyemOugpOynhCDsnbTrr7jsp4Ag6rCA66GcIOq4uOydtFxyXG4gICAgICAgIGNyb3BCb3hTaXplLmgsIC8vIOyemOugpOynhCDsnbTrr7jsp4Ag7IS466GcIOq4uOydtFxyXG4gICAgICAgIDAsIC8vIOydtOuvuOyngCDsi5zsnpEgeCDsooztkZxcclxuICAgICAgICAwLCAvLyDsnbTrr7jsp4Ag7Iuc7J6RIHkg7KKM7ZGcXHJcbiAgICAgICAgaW1nU2l6ZS53LCAvLyDsnbTrr7jsp4Ag6rCA66GcIOq4uOydtFxyXG4gICAgICAgIGltZ1NpemUuaCAvLyDsnbTrr7jsp4Ag7IS466GcIOq4uOydtFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgcmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKCkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3dyYXBSZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goJ3dyYXAnKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPERpbW1lZEJveFxyXG4gICAgICAgICAgd3JhcFJlZj17d3JhcFJlZn1cclxuICAgICAgICAgIGltZ1NpemU9e2ltZ1NpemV9XHJcbiAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Q3JvcEJveFxyXG4gICAgICAgICAgd3JhcFJlZj17d3JhcFJlZn1cclxuICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIG9mZnNldD17b2Zmc2V0fVxyXG4gICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICBjcm9wQm94U2l6ZT17Y3JvcEJveFNpemV9XHJcbiAgICAgICAgICBzZXRDcm9wQm94U2l6ZT17c2V0Q3JvcEJveFNpemV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YSBjbGFzc05hbWU9e2N4KCdidG4nKX0gb25DbGljaz17aGFuZGxlRG93bmxvYWR9PmRvd25sb2FkPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyb3A7Il0sInNvdXJjZVJvb3QiOiIifQ==