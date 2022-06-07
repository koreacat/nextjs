webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/CropBox.tsx":
/*!**********************************************!*\
  !*** ./src/components/imageCrop/CropBox.tsx ***!
  \**********************************************/
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


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\CropBox.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var LINE_DIR = ['e', 'w', 's', 'n'];
var POINT_DIR = ['e', 'w', 's', 'n', 'se', 'sw', 'ne', 'nw'];

var CropBox = function CropBox() {
  var startPan = function startPan(e) {
    e.preventDefault();
    document.addEventListener("mousemove", moveCropBox);
    document.addEventListener("mouseup", stopPan);
    lastMousePosRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  var stopPan = function stopPan() {
    document.removeEventListener("mousemove", moveCropBox);
    document.removeEventListener("mouseup", stopPan);
  };

  var moveCropBox = function moveCropBox(e) {
    var lastMousePos = lastMousePosRef.current;
    var currentMousePos = {
      x: e.clientX,
      y: e.clientY
    };
    var mouseDiff = diffPoints(currentMousePos, lastMousePos);
    lastMousePosRef.current = currentMousePos;
    setOffset(function (prevOffset) {
      return addPoints(prevOffset, mouseDiff, 0, 0, imgSize.w - cropBoxSize.w, imgSize.h - cropBoxSize.h);
    });
  };

  var startSetSize = function startSetSize(e, dir) {
    e.preventDefault();
    var eLineX = offset.x + cropBoxSize.w;
    var wLineX = offset.x;
    var sLineY = offset.y + cropBoxSize.h;
    var nLineY = offset.y;

    var setSizeCropBox = function setSizeCropBox(e) {
      var currentMousePos = {
        x: e.clientX - wrapRef.current.offsetLeft,
        y: e.clientY - wrapRef.current.offsetTop
      };
      setBox(currentMousePos);
    };

    var setBox = function setBox(currentMousePos) {
      var isCrossEL = !(wLineX + cropBoxSize.w > currentMousePos.x);
      var isCrossWL = eLineX - cropBoxSize.w > currentMousePos.x;
      var isCrossSL = !(nLineY + cropBoxSize.h > currentMousePos.y);
      var isCrossNL = sLineY - cropBoxSize.h > currentMousePos.y;
      var eXOffset = eLineX - cropBoxSize.w - (offset.x - currentMousePos.x);
      var wXOffset = wLineX - (offset.x - currentMousePos.x);
      var sYOffset = sLineY - cropBoxSize.h - (offset.y - currentMousePos.y);
      var nYOffset = nLineY - (offset.y - currentMousePos.y);
      var eCrossW = eLineX - cropBoxSize.w - currentMousePos.x;
      var wCrossW = currentMousePos.x - wLineX - cropBoxSize.w;
      var sCrossH = sLineY - cropBoxSize.h - currentMousePos.y;
      var nCrossH = currentMousePos.y - nLineY - cropBoxSize.h;
      var eW = cropBoxSize.w + currentMousePos.x - eLineX;
      var wW = cropBoxSize.w + wLineX - currentMousePos.x;
      var sH = cropBoxSize.h + currentMousePos.y - sLineY;
      var nH = cropBoxSize.h + nLineY - currentMousePos.y;

      switch (dir) {
        case 'e':
          if (isCrossWL) {
            setOffset({
              x: eXOffset,
              y: offset.y
            });
            setCropBoxSize({
              w: eCrossW,
              h: cropBoxSize.h
            });
          } else {
            setCropBoxSize({
              w: eW,
              h: cropBoxSize.h
            });
          }

          break;

        case 'w':
          if (isCrossEL) {
            setCropBoxSize({
              w: wCrossW,
              h: cropBoxSize.h
            });
          } else {
            setOffset({
              x: wXOffset,
              y: offset.y
            });
            setCropBoxSize({
              w: wW,
              h: cropBoxSize.h
            });
          }

          break;

        case 's':
          if (isCrossNL) {
            setOffset({
              x: offset.x,
              y: sYOffset
            });
            setCropBoxSize({
              w: cropBoxSize.w,
              h: sCrossH
            });
          } else {
            setCropBoxSize({
              w: cropBoxSize.w,
              h: sH
            });
          }

          break;

        case 'n':
          if (isCrossSL) {
            setCropBoxSize({
              w: cropBoxSize.w,
              h: nCrossH
            });
          } else {
            setOffset({
              x: offset.x,
              y: nYOffset
            });
            setCropBoxSize({
              w: cropBoxSize.w,
              h: nH
            });
          }

          break;

        case 'se':
          if (isCrossNL && isCrossWL) {
            setOffset({
              x: eXOffset,
              y: sYOffset
            });
            setCropBoxSize({
              w: eCrossW,
              h: sCrossH
            });
          } else if (isCrossWL) {
            setOffset({
              x: eXOffset,
              y: offset.y
            });
            setCropBoxSize({
              w: eCrossW,
              h: sH
            });
          } else if (isCrossNL) {
            setOffset({
              x: offset.x,
              y: sYOffset
            });
            setCropBoxSize({
              w: eW,
              h: sCrossH
            });
          } else {
            setCropBoxSize({
              w: eW,
              h: sH
            });
          }

          break;

        case 'sw':
          if (isCrossNL && isCrossEL) {
            setOffset({
              x: offset.x + cropBoxSize.w,
              y: nYOffset
            });
            setCropBoxSize({
              w: wCrossW,
              h: sCrossH
            });
          } else if (isCrossEL) {
            setCropBoxSize({
              w: wCrossW,
              h: sH
            });
          } else if (isCrossNL) {
            setOffset({
              x: wXOffset,
              y: nYOffset
            });
            setCropBoxSize({
              w: wW,
              h: sCrossH
            });
          } else {
            setOffset({
              x: wXOffset,
              y: offset.y
            });
            setCropBoxSize({
              w: wW,
              h: sH
            });
          }

          break;

        case 'ne':
          if (isCrossSL && isCrossWL) {
            setOffset({
              x: eXOffset,
              y: offset.y + cropBoxSize.h
            });
            setCropBoxSize({
              w: eCrossW,
              h: nCrossH
            });
          } else if (isCrossWL) {
            setOffset({
              x: eXOffset,
              y: nYOffset
            });
            setCropBoxSize({
              w: eCrossW,
              h: nH
            });
          } else if (isCrossSL) {
            setCropBoxSize({
              w: eW,
              h: nCrossH
            });
          } else {
            setOffset({
              x: offset.x,
              y: nYOffset
            });
            setCropBoxSize({
              w: eW,
              h: nH
            });
          }

          break;

        case 'nw':
          if (isCrossSL && isCrossEL) {
            setCropBoxSize({
              w: wCrossW,
              h: nCrossH
            });
          } else if (isCrossEL) {
            setOffset({
              x: offset.x + cropBoxSize.w,
              y: nYOffset
            });
            setCropBoxSize({
              w: wCrossW,
              h: nH
            });
          } else if (isCrossSL) {
            setOffset({
              x: wXOffset,
              y: offset.y + cropBoxSize.h
            });
            setCropBoxSize({
              w: wW,
              h: nCrossH
            });
          } else {
            setOffset({
              x: wXOffset,
              y: nYOffset
            });
            setCropBoxSize({
              w: wW,
              h: nH
            });
          }

          break;
      }
    };

    var stopSetSize = function stopSetSize() {
      document.removeEventListener("mousemove", setSizeCropBox);
      document.removeEventListener("mouseup", stopSetSize);
    };

    document.addEventListener("mousemove", setSizeCropBox);
    document.addEventListener("mouseup", stopSetSize);
  };

  var getDash = function getDash() {
    return ['w', 'h'].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('dash', dir)
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 5
      }, _this);
    });
  };

  var getLine = function getLine() {
    return LINE_DIR.map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('line', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetSize(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 5
      }, _this);
    });
  };

  var getPoints = function getPoints() {
    return POINT_DIR.map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('point', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetSize(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 5
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('cropBox'),
    style: {
      width: "".concat(cropBoxSize.w, "px"),
      height: "".concat(cropBoxSize.h, "px"),
      transform: "translateX(".concat(offset.x, "px) translateY(").concat(offset.y, "px)")
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('viewBox'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: cx('viewImg'),
        src: imgPath,
        style: {
          width: "".concat(imgSize.w, "px"),
          height: "".concat(imgSize.h, "px"),
          transform: "translateX(-".concat(offset.x, "px) translateY(-").concat(offset.y, "px)")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, _this), getLine(), getPoints()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 5
  }, _this);
};

_c = CropBox;
/* harmony default export */ __webpack_exports__["default"] = (CropBox);

var _c;

$RefreshReg$(_c, "CropBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsIkNyb3BCb3giLCJzdGFydFBhbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmVDcm9wQm94Iiwic3RvcFBhbiIsImxhc3RNb3VzZVBvc1JlZiIsImN1cnJlbnQiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxhc3RNb3VzZVBvcyIsImN1cnJlbnRNb3VzZVBvcyIsIm1vdXNlRGlmZiIsImRpZmZQb2ludHMiLCJzZXRPZmZzZXQiLCJwcmV2T2Zmc2V0IiwiYWRkUG9pbnRzIiwiaW1nU2l6ZSIsInciLCJjcm9wQm94U2l6ZSIsImgiLCJzdGFydFNldFNpemUiLCJkaXIiLCJlTGluZVgiLCJvZmZzZXQiLCJ3TGluZVgiLCJzTGluZVkiLCJuTGluZVkiLCJzZXRTaXplQ3JvcEJveCIsIndyYXBSZWYiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwic2V0Qm94IiwiaXNDcm9zc0VMIiwiaXNDcm9zc1dMIiwiaXNDcm9zc1NMIiwiaXNDcm9zc05MIiwiZVhPZmZzZXQiLCJ3WE9mZnNldCIsInNZT2Zmc2V0IiwibllPZmZzZXQiLCJlQ3Jvc3NXIiwid0Nyb3NzVyIsInNDcm9zc0giLCJuQ3Jvc3NIIiwiZVciLCJ3VyIsInNIIiwibkgiLCJzZXRDcm9wQm94U2l6ZSIsInN0b3BTZXRTaXplIiwiZ2V0RGFzaCIsIm1hcCIsImdldExpbmUiLCJnZXRQb2ludHMiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsImltZ1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFH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O0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUE2QkU7QUFBTSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQW5CO0FBQWdDLGlCQUFXLEVBQUVPO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkYsRUFnQ0d5RCxPQUFPLEVBaENWLEVBbUNHQyxTQUFTLEVBbkNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBek5EOztLQUFNM0QsTztBQTJOU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLmEyOWVmZjc0MzEzMmM5YWM3NjI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgRGlyVHlwZSB9IGZyb20gJy4nO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgTElORV9ESVIgPSBbJ2UnLCAndycsICdzJywgJ24nXTtcclxuY29uc3QgUE9JTlRfRElSID0gWydlJywgJ3cnLCAncycsICduJywgJ3NlJywgJ3N3JywgJ25lJywgJ253J107XHJcblxyXG5jb25zdCBDcm9wQm94ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BQYW4gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZUNyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgbGFzdE1vdXNlUG9zID0gbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3MgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgICBjb25zdCBtb3VzZURpZmYgPSBkaWZmUG9pbnRzKGN1cnJlbnRNb3VzZVBvcywgbGFzdE1vdXNlUG9zKTtcclxuXHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IGN1cnJlbnRNb3VzZVBvcztcclxuICAgIHNldE9mZnNldCgocHJldk9mZnNldCkgPT4gXHJcbiAgICAgIGFkZFBvaW50cyhwcmV2T2Zmc2V0LCBtb3VzZURpZmYsIDAsIDAsIGltZ1NpemUudyAtIGNyb3BCb3hTaXplLncsIGltZ1NpemUuaCAtIGNyb3BCb3hTaXplLmgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBjb25zdCBzdGFydFNldFNpemUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBkaXI6IERpclR5cGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueCArIGNyb3BCb3hTaXplLnc7XHJcbiAgICBjb25zdCB3TGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IHNMaW5lWSA9IG9mZnNldC55ICsgY3JvcEJveFNpemUuaDtcclxuICAgIGNvbnN0IG5MaW5lWSA9IG9mZnNldC55O1xyXG5cclxuICAgIGNvbnN0IHNldFNpemVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyBcclxuICAgICAgICB4OiBlLmNsaWVudFggLSB3cmFwUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCwgXHJcbiAgICAgICAgeTogZS5jbGllbnRZIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcclxuICAgICAgfTtcclxuICAgICAgc2V0Qm94KGN1cnJlbnRNb3VzZVBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ID0gKGN1cnJlbnRNb3VzZVBvcykgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nyb3NzRUwgPSAhKHdMaW5lWCArIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NXTCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3QgaXNDcm9zc1NMID0gIShuTGluZVkgKyBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzTkwgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBjb25zdCBlWE9mZnNldCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHdYT2Zmc2V0ID0gd0xpbmVYIC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBzWU9mZnNldCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IG5ZT2Zmc2V0ID0gbkxpbmVZIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG5cclxuICAgICAgY29uc3QgZUNyb3NzVyA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgd0Nyb3NzVyA9IGN1cnJlbnRNb3VzZVBvcy54IC0gd0xpbmVYIC0gY3JvcEJveFNpemUudztcclxuICAgICAgY29uc3Qgc0Nyb3NzSCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSBjdXJyZW50TW91c2VQb3MueTtcclxuICAgICAgY29uc3QgbkNyb3NzSCA9IGN1cnJlbnRNb3VzZVBvcy55IC0gbkxpbmVZIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgICAgIGNvbnN0IGVXID0gY3JvcEJveFNpemUudyArIGN1cnJlbnRNb3VzZVBvcy54IC0gZUxpbmVYO1xyXG4gICAgICBjb25zdCB3VyA9IGNyb3BCb3hTaXplLncgKyB3TGluZVggLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgc0ggPSBjcm9wQm94U2l6ZS5oICsgY3VycmVudE1vdXNlUG9zLnkgLSBzTGluZVk7XHJcbiAgICAgIGNvbnN0IG5IID0gY3JvcEJveFNpemUuaCArIG5MaW5lWSAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmUnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdudyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRTaXplID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGFzaCA9ICgpID0+IFsndycsICdoJ10ubWFwKChkaXIpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnZGFzaCcsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRMaW5lID0gKCkgPT4gTElORV9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnbGluZScsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0U2l6ZShlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0UG9pbnRzID0gKCkgPT4gUE9JTlRfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ3BvaW50JywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2N4KCdjcm9wQm94Jyl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IGAke2Nyb3BCb3hTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7Y3JvcEJveFNpemUuaH1weGAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG5cclxuICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3ZpZXdCb3gnKX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtvZmZzZXQueH1weCkgdHJhbnNsYXRlWSgtJHtvZmZzZXQueX1weClgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgIHsvKiDqsqnsnpAg7JiB7JetICovfVxyXG4gICAgICB7Z2V0RGFzaCgpfVxyXG5cclxuICAgICAgey8qIOykkeyVmSDsi63snpDqsIAg7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9zcycpfSAvPlxyXG5cclxuICAgICAgey8qIOy7pOyEnCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ21vdmVCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0UGFufSAvPlxyXG5cclxuICAgICAgey8qIOuztOuNlCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXRMaW5lKCl9XHJcblxyXG4gICAgICB7Lyog7KCQIOyYgeyXrSAqL31cclxuICAgICAge2dldFBvaW50cygpfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JvcEJveDsiXSwic291cmNlUm9vdCI6IiJ9