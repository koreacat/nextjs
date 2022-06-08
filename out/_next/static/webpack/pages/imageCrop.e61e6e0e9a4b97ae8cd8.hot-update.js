webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/DimmedBox.tsx":
/*!************************************************!*\
  !*** ./src/components/imageCrop/DimmedBox.tsx ***!
  \************************************************/
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


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\DimmedBox.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

var DimmedBox = function DimmedBox(_ref) {
  var setOffset = _ref.setOffset,
      setCropBoxSize = _ref.setCropBoxSize;

  var startSetCropBox = function startSetCropBox(e) {
    e.preventDefault();
    var eLineX = offset.x + cropBoxSize.w;
    var wLineX = offset.x;
    var sLineY = offset.y + cropBoxSize.h;
    var nLineY = offset.y;

    var setCropBox = function setCropBox(e) {
      var x = e.pageX - wrapRef.current.offsetLeft;
      var y = e.pageY - wrapRef.current.offsetTop;
      setBox({
        x: x < 0 ? 0 : x > imgSize.w ? imgSize.w : x,
        y: y < 0 ? 0 : y > imgSize.h ? imgSize.h : y
      });
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

    document.addEventListener("mousemove", setCropBox);
    document.addEventListener("mouseup", stopSetCropBox);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('dimmedBox'),
    onMouseDown: startSetCropBox
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 10
  }, _this);
};

_c = DimmedBox;
/* harmony default export */ __webpack_exports__["default"] = (DimmedBox);

var _c;

$RefreshReg$(_c, "DimmedBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0RpbW1lZEJveC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIkRpbW1lZEJveCIsInNldE9mZnNldCIsInNldENyb3BCb3hTaXplIiwic3RhcnRTZXRDcm9wQm94IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZUxpbmVYIiwib2Zmc2V0IiwieCIsImNyb3BCb3hTaXplIiwidyIsIndMaW5lWCIsInNMaW5lWSIsInkiLCJoIiwibkxpbmVZIiwic2V0Q3JvcEJveCIsInBhZ2VYIiwid3JhcFJlZiIsImN1cnJlbnQiLCJvZmZzZXRMZWZ0IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJzZXRCb3giLCJpbWdTaXplIiwiY3VycmVudE1vdXNlUG9zIiwiaXNDcm9zc0VMIiwiaXNDcm9zc1dMIiwiaXNDcm9zc1NMIiwiaXNDcm9zc05MIiwiZVhPZmZzZXQiLCJ3WE9mZnNldCIsInNZT2Zmc2V0IiwibllPZmZzZXQiLCJlQ3Jvc3NXIiwid0Nyb3NzVyIsInNDcm9zc0giLCJuQ3Jvc3NIIiwiZVciLCJ3VyIsInNIIiwibkgiLCJkaXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wU2V0Q3JvcEJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BSU07QUFBQSxNQUZwQkMsU0FFb0IsUUFGcEJBLFNBRW9CO0FBQUEsTUFEcEJDLGNBQ29CLFFBRHBCQSxjQUNvQjs7QUFFdEIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQXNEO0FBQzVFQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxNQUFNLEdBQUdDLE1B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RUFBRWpELEVBQUUsQ0FBQyxXQUFELENBQWxCO0FBQWlDLGVBQVcsRUFBRU87QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0E5SUQ7O0tBQU1ILFM7QUFnSlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC5lNjFlNmUwZTlhNGI5N2FlOGNkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l6ZSwgUG9pbnQgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRGltbWVkQm94UHJvcHMge1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogKChwcmV2OiBQb2ludCkgPT4gUG9pbnQpIHwgUG9pbnQpID0+IHZvaWQ7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGltbWVkQm94ID0gKFxyXG4gIHtcclxuICAgIHNldE9mZnNldCxcclxuICAgIHNldENyb3BCb3hTaXplLFxyXG4gIH06IERpbW1lZEJveFByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2V0Q3JvcEJveCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueCArIGNyb3BCb3hTaXplLnc7XHJcbiAgICBjb25zdCB3TGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IHNMaW5lWSA9IG9mZnNldC55ICsgY3JvcEJveFNpemUuaDtcclxuICAgIGNvbnN0IG5MaW5lWSA9IG9mZnNldC55O1xyXG5cclxuICAgIGNvbnN0IHNldENyb3BCb3ggPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRMZWZ0O1xyXG4gICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3A7XHJcblxyXG4gICAgICBzZXRCb3goe1xyXG4gICAgICAgIHg6ICh4IDwgMCkgPyAwIDogKHggPiBpbWdTaXplLncpID8gaW1nU2l6ZS53IDogeCxcclxuICAgICAgICB5OiAoeSA8IDApID8gMCA6ICh5ID4gaW1nU2l6ZS5oKSA/IGltZ1NpemUuaCA6IHksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEJveCA9IChjdXJyZW50TW91c2VQb3MpID0+IHtcclxuICAgICAgY29uc3QgaXNDcm9zc0VMID0gISh3TGluZVggKyBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzV0wgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53ID4gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NTTCA9ICEobkxpbmVZICsgY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55KTtcclxuICAgICAgY29uc3QgaXNDcm9zc05MID0gc0xpbmVZIC0gY3JvcEJveFNpemUuaCA+IGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgY29uc3QgZVhPZmZzZXQgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCB3WE9mZnNldCA9IHdMaW5lWCAtIChvZmZzZXQueCAtIGN1cnJlbnRNb3VzZVBvcy54KTtcclxuICAgICAgY29uc3Qgc1lPZmZzZXQgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBuWU9mZnNldCA9IG5MaW5lWSAtIChvZmZzZXQueSAtIGN1cnJlbnRNb3VzZVBvcy55KTtcclxuXHJcbiAgICAgIGNvbnN0IGVDcm9zc1cgPSBlTGluZVggLSBjcm9wQm94U2l6ZS53IC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHdDcm9zc1cgPSBjdXJyZW50TW91c2VQb3MueCAtIHdMaW5lWCAtIGNyb3BCb3hTaXplLnc7XHJcbiAgICAgIGNvbnN0IHNDcm9zc0ggPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oIC0gY3VycmVudE1vdXNlUG9zLnk7XHJcbiAgICAgIGNvbnN0IG5Dcm9zc0ggPSBjdXJyZW50TW91c2VQb3MueSAtIG5MaW5lWSAtIGNyb3BCb3hTaXplLmg7XHJcblxyXG4gICAgICBjb25zdCBlVyA9IGNyb3BCb3hTaXplLncgKyBjdXJyZW50TW91c2VQb3MueCAtIGVMaW5lWDtcclxuICAgICAgY29uc3Qgd1cgPSBjcm9wQm94U2l6ZS53ICsgd0xpbmVYIC0gY3VycmVudE1vdXNlUG9zLng7XHJcbiAgICAgIGNvbnN0IHNIID0gY3JvcEJveFNpemUuaCArIGN1cnJlbnRNb3VzZVBvcy55IC0gc0xpbmVZO1xyXG4gICAgICBjb25zdCBuSCA9IGNyb3BCb3hTaXplLmggKyBuTGluZVkgLSBjdXJyZW50TW91c2VQb3MueTtcclxuXHJcbiAgICAgIHN3aXRjaCAoZGlyKSB7XHJcbiAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBzWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc05MICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzTkwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25lJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wgJiYgaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1dMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IGVYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbncnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzRUwpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3Q3Jvc3NXLCBoOiBuSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc1NMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSArIGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldENyb3BCb3gpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeCgnZGltbWVkQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFNldENyb3BCb3h9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpbW1lZEJveDsiXSwic291cmNlUm9vdCI6IiJ9