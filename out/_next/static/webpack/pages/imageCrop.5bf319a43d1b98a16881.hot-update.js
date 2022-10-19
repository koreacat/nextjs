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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/components/imageCrop/data.ts");


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\imageCrop\\CropBox.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

function diffPoints(p1, p2) {
  return {
    x: p1.x - p2.x,
    y: p1.y - p2.y
  };
}

function addPoints(p1, p2) {
  var minX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var minY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var maxX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var maxY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var x = p1.x + p2.x;
  var y = p1.y + p2.y;
  return {
    x: Object(_data__WEBPACK_IMPORTED_MODULE_4__["clamp"])(x, minX, maxX),
    y: Object(_data__WEBPACK_IMPORTED_MODULE_4__["clamp"])(y, minY, maxY)
  };
}

var CropBox = function CropBox(_ref) {
  _s();

  var wrapRef = _ref.wrapRef,
      imgSrc = _ref.imgSrc,
      imgSize = _ref.imgSize,
      offset = _ref.offset,
      setOffset = _ref.setOffset,
      cropBoxSize = _ref.cropBoxSize,
      setCropBoxSize = _ref.setCropBoxSize;
  var lastMousePosRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(_data__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_POINT"]);

  var getEdgeWidth = function getEdgeWidth() {
    return imgSize.w - cropBoxSize.w;
  };

  var getEdgeHeight = function getEdgeHeight() {
    return imgSize.h - cropBoxSize.h;
  };

  var startPan = function startPan(e) {
    e.preventDefault();
    document.addEventListener("mousemove", moveCropBox);
    document.addEventListener("mouseup", stopPan);
    lastMousePosRef.current = {
      x: e.clientX,
      y: e.clientY
    };
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
      return addPoints(prevOffset, mouseDiff, 0, 0, getEdgeWidth(), getEdgeHeight());
    });
  };

  var stopPan = function stopPan() {
    document.removeEventListener("mousemove", moveCropBox);
    document.removeEventListener("mouseup", stopPan);
  };

  var startSetCropBox = function startSetCropBox(e, dir) {
    e.preventDefault();
    console.log('set');
    var eLineX = offset.x;
    var wLineX = offset.x;
    var sLineY = offset.y;
    var nLineY = offset.y;

    var setCropBox = function setCropBox(e) {
      var _wrapRef$current, _wrapRef$current2;

      var x = e.pageX - (wrapRef.current ? (_wrapRef$current = wrapRef.current) === null || _wrapRef$current === void 0 ? void 0 : _wrapRef$current.offsetLeft : 0);
      var y = e.pageY - (wrapRef.current ? (_wrapRef$current2 = wrapRef.current) === null || _wrapRef$current2 === void 0 ? void 0 : _wrapRef$current2.offsetTop : 0);
      setBox({
        x: Object(_data__WEBPACK_IMPORTED_MODULE_4__["clamp"])(x, 0, imgSize.w),
        y: Object(_data__WEBPACK_IMPORTED_MODULE_4__["clamp"])(y, 0, imgSize.h)
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

    var stopSetCropBox = function stopSetCropBox() {
      document.removeEventListener("mousemove", setCropBox);
      document.removeEventListener("mouseup", stopSetCropBox);
    };

    document.addEventListener("mousemove", setCropBox);
    document.addEventListener("mouseup", stopSetCropBox);
  };

  var getDash = function getDash() {
    return ['w', 'h'].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('dash', dir)
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 5
      }, _this);
    });
  };

  var getLine = function getLine() {
    return _data__WEBPACK_IMPORTED_MODULE_4__["LINE_DIR"].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('line', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetCropBox(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 5
      }, _this);
    });
  };

  var getPoints = function getPoints() {
    return _data__WEBPACK_IMPORTED_MODULE_4__["POINT_DIR"].map(function (dir) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('point', dir),
        onMouseDown: function onMouseDown(e) {
          return startSetCropBox(e, dir);
        }
      }, dir, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
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
        src: imgSrc,
        style: {
          width: "".concat(imgSize.w, "px"),
          height: "".concat(imgSize.h, "px"),
          transform: "translateX(-".concat(offset.x, "px) translateY(-").concat(offset.y, "px)")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }, _this), getLine(), getPoints(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cropBoxInfo'),
      children: [offset.x, ", ", offset.y, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }, _this), cropBoxSize.w, ", ", cropBoxSize.h, " (px)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 5
  }, _this);
};

_s(CropBox, "bA0hzQaNqy8p45XI8XubL2KXkxo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsImNsYW1wIiwiQ3JvcEJveCIsIndyYXBSZWYiLCJpbWdTcmMiLCJpbWdTaXplIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsImxhc3RNb3VzZVBvc1JlZiIsInVzZVJlZiIsIk9SSUdJTl9QT0lOVCIsImdldEVkZ2VXaWR0aCIsInciLCJnZXRFZGdlSGVpZ2h0IiwiaCIsInN0YXJ0UGFuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZUNyb3BCb3giLCJzdG9wUGFuIiwiY3VycmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldENyb3BCb3giLCJkaXIiLCJjb25zb2xlIiwibG9nIiwiZUxpbmVYIiwid0xpbmVYIiwic0xpbmVZIiwibkxpbmVZIiwic2V0Q3JvcEJveCIsInBhZ2VYIiwib2Zmc2V0TGVmdCIsInBhZ2VZIiwib2Zmc2V0VG9wIiwic2V0Qm94IiwiaXNDcm9zc0VMIiwiaXNDcm9zc1dMIiwiaXNDcm9zc1NMIiwiaXNDcm9zc05MIiwiZVhPZmZzZXQiLCJ3WE9mZnNldCIsInNZT2Zmc2V0IiwibllPZmZzZXQiLCJlQ3Jvc3NXIiwid0Nyb3NzVyIsInNDcm9zc0giLCJuQ3Jvc3NIIiwiZVciLCJ3VyIsInNIIiwibkgiLCJzdG9wU2V0Q3JvcEJveCIsImdldERhc2giLCJtYXAiLCJnZXRMaW5lIiwiTElORV9ESVIiLCJnZXRQb2ludHMiLCJQT0lOVF9ESVIiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsRUFBcEIsRUFBK0JDLEVBQS9CLEVBQTBDO0FBQ3hDLFNBQU87QUFBRUMsS0FBQyxFQUFFRixFQUFFLENBQUNFLENBQUgsR0FBT0QsRUFBRSxDQUFDQyxDQUFmO0FBQWtCQyxLQUFDLEVBQUVILEVBQUUsQ0FBQ0csQ0FBSCxHQUFPRixFQUFFLENBQUNFO0FBQS9CLEdBQVA7QUFDRDs7QUFFRCxTQUFTQyxTQUFULENBQW1CSixFQUFuQixFQUE4QkMsRUFBOUIsRUFBaUY7QUFBQSxNQUF4Q0ksSUFBd0MsdUVBQWpDLENBQWlDO0FBQUEsTUFBOUJDLElBQThCLHVFQUF2QixDQUF1QjtBQUFBLE1BQXBCQyxJQUFvQix1RUFBYixDQUFhO0FBQUEsTUFBVkMsSUFBVSx1RUFBSCxDQUFHO0FBQy9FLE1BQU1OLENBQUMsR0FBR0YsRUFBRSxDQUFDRSxDQUFILEdBQU9ELEVBQUUsQ0FBQ0MsQ0FBcEI7QUFDQSxNQUFNQyxDQUFDLEdBQUdILEVBQUUsQ0FBQ0csQ0FBSCxHQUFPRixFQUFFLENBQUNFLENBQXBCO0FBQ0EsU0FBTztBQUFFRCxLQUFDLEVBQUVPLG1EQUFLLENBQUNQLENBQUQsRUFBSUcsSUFBSixFQUFVRSxJQUFWLENBQVY7QUFBMkJKLEtBQUMsRUFBRU0sbURBQUssQ0FBQ04sQ0FBRCxFQUFJRyxJQUFKLEVBQVVFLElBQVY7QUFBbkMsR0FBUDtBQUNEOztBQVlELElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BU007QUFBQTs7QUFBQSxNQVBsQkMsT0FPa0IsUUFQbEJBLE9BT2tCO0FBQUEsTUFObEJDLE1BTWtCLFFBTmxC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LENBRGY7QUFFRSxXQUFHLEVBQUVpQixNQUZQO0FBR0UsYUFBSyxFQUFFO0FBQ0xpRSxlQUFLLFlBQUtoRSxPQUFPLENBQUNTLENBQWIsT0FEQTtBQUVMd0QsZ0JBQU0sWUFBS2pFLE9BQU8sQ0FBQ1csQ0FBYixPQUZEO0FBR0x1RCxtQkFBUyx3QkFBaUJqRSxNQUFNLENBQUNaLENBQXhCLDZCQUE0Q1ksTUFBTSxDQUFDWCxDQUFuRDtBQUhKO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixFQXVCR29FLE9BQU8sRUF2QlYsZUEwQkU7QUFBTSxlQUFTLEVBQUU1RSxFQUFFLENBQUMsT0FBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBNkJFO0FBQU0sZUFBUyxFQUFFQSxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFnQyxpQkFBVyxFQUFFOEI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCRixFQWdDR2dELE9BQU8sRUFoQ1YsRUFtQ0dFLFNBQVMsRUFuQ1osZUFxQ0U7QUFBTSxlQUFTLEVBQUVoRixFQUFFLENBQUMsYUFBRCxDQUFuQjtBQUFBLGlCQUNHbUIsTUFBTSxDQUFDWixDQURWLFFBQ2VZLE1BQU0sQ0FBQ1gsQ0FEdEIsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsRUFHR2EsV0FBVyxDQUFDTSxDQUhmLFFBR29CTixXQUFXLENBQUNRLENBSGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZDRCxDQXpPRDs7R0FBTWQsTzs7S0FBQUEsTztBQTJPU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjViZjMxOWE0M2QxYjk4YTE2ODgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgUmVmT2JqZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBvaW50LCBTaXplLCBPUklHSU5fUE9JTlQsIERpclR5cGUsIExJTkVfRElSLCBQT0lOVF9ESVIsIGNsYW1wIH0gZnJvbSAnLi9kYXRhJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmZ1bmN0aW9uIGRpZmZQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICByZXR1cm4geyB4OiBwMS54IC0gcDIueCwgeTogcDEueSAtIHAyLnkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50LCBtaW5YID0gMCwgbWluWSA9IDAsIG1heFggPSAwLCBtYXhZID0gMCkge1xyXG4gIGNvbnN0IHggPSBwMS54ICsgcDIueDtcclxuICBjb25zdCB5ID0gcDEueSArIHAyLnk7XHJcbiAgcmV0dXJuIHsgeDogY2xhbXAoeCwgbWluWCwgbWF4WCksIHk6IGNsYW1wKHksIG1pblksIG1heFkpIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBDcm9wQm94UHJvcHMge1xyXG4gIHdyYXBSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgaW1nU3JjOiBzdHJpbmc7XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxuICBvZmZzZXQ6IFBvaW50O1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogKChwcmV2OiBQb2ludCkgPT4gUG9pbnQpIHwgUG9pbnQpID0+IHZvaWQ7XHJcbiAgY3JvcEJveFNpemU6IFNpemU7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ3JvcEJveCA9IChcclxuICB7XHJcbiAgICB3cmFwUmVmLFxyXG4gICAgaW1nU3JjLFxyXG4gICAgaW1nU2l6ZSxcclxuICAgIG9mZnNldCxcclxuICAgIHNldE9mZnNldCxcclxuICAgIGNyb3BCb3hTaXplLFxyXG4gICAgc2V0Q3JvcEJveFNpemUsXHJcbiAgfTogQ3JvcEJveFByb3BzKSA9PiB7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG5cclxuICBjb25zdCBnZXRFZGdlV2lkdGggPSAoKSA9PiBpbWdTaXplLncgLSBjcm9wQm94U2l6ZS53O1xyXG4gIGNvbnN0IGdldEVkZ2VIZWlnaHQgPSAoKSA9PiBpbWdTaXplLmggLSBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vdmVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcblxyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBzZXRPZmZzZXQoKHByZXZPZmZzZXQpID0+XHJcbiAgICAgIGFkZFBvaW50cyhwcmV2T2Zmc2V0LCBtb3VzZURpZmYsIDAsIDAsIGdldEVkZ2VXaWR0aCgpLCBnZXRFZGdlSGVpZ2h0KCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RvcFBhbiA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydFNldENyb3BCb3ggPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBkaXI6IHN0cmluZykgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzZXQnKTtcclxuXHJcbiAgICBjb25zdCBlTGluZVggPSBvZmZzZXQueDtcclxuICAgIGNvbnN0IHdMaW5lWCA9IG9mZnNldC54O1xyXG4gICAgY29uc3Qgc0xpbmVZID0gb2Zmc2V0Lnk7XHJcbiAgICBjb25zdCBuTGluZVkgPSBvZmZzZXQueTtcclxuXHJcbiAgICBjb25zdCBzZXRDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgeCA9IGUucGFnZVggLSAod3JhcFJlZi5jdXJyZW50ID8gd3JhcFJlZi5jdXJyZW50Py5vZmZzZXRMZWZ0IDogMCk7XHJcbiAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gKHdyYXBSZWYuY3VycmVudCA/IHdyYXBSZWYuY3VycmVudD8ub2Zmc2V0VG9wIDogMCk7XHJcbiAgICAgIHNldEJveCh7IHg6IGNsYW1wKHgsIDAsIGltZ1NpemUudyksIHk6IGNsYW1wKHksIDAsIGltZ1NpemUuaCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ID0gKGN1cnJlbnRNb3VzZVBvczoge3g6IG51bWJlciwgeTogbnVtYmVyfSkgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nyb3NzRUwgPSAhKHdMaW5lWCArIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NXTCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3QgaXNDcm9zc1NMID0gIShuTGluZVkgKyBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzTkwgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBjb25zdCBlWE9mZnNldCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHdYT2Zmc2V0ID0gd0xpbmVYIC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBzWU9mZnNldCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IG5ZT2Zmc2V0ID0gbkxpbmVZIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG5cclxuICAgICAgY29uc3QgZUNyb3NzVyA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgd0Nyb3NzVyA9IGN1cnJlbnRNb3VzZVBvcy54IC0gd0xpbmVYIC0gY3JvcEJveFNpemUudztcclxuICAgICAgY29uc3Qgc0Nyb3NzSCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSBjdXJyZW50TW91c2VQb3MueTtcclxuICAgICAgY29uc3QgbkNyb3NzSCA9IGN1cnJlbnRNb3VzZVBvcy55IC0gbkxpbmVZIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgICAgIGNvbnN0IGVXID0gY3JvcEJveFNpemUudyArIGN1cnJlbnRNb3VzZVBvcy54IC0gZUxpbmVYO1xyXG4gICAgICBjb25zdCB3VyA9IGNyb3BCb3hTaXplLncgKyB3TGluZVggLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgc0ggPSBjcm9wQm94U2l6ZS5oICsgY3VycmVudE1vdXNlUG9zLnkgLSBzTGluZVk7XHJcbiAgICAgIGNvbnN0IG5IID0gY3JvcEJveFNpemUuaCArIG5MaW5lWSAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmUnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdudyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRDcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERhc2ggPSAoKSA9PiBbJ3cnLCAnaCddLm1hcCgoZGlyKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2Rhc2gnLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0TGluZSA9ICgpID0+IExJTkVfRElSLm1hcCgoZGlyOiBzdHJpbmcpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnbGluZScsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0Q3JvcEJveChlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0UG9pbnRzID0gKCkgPT4gUE9JTlRfRElSLm1hcCgoZGlyOiBzdHJpbmcpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldENyb3BCb3goZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogYCR7Y3JvcEJveFNpemUud31weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoJHtvZmZzZXQueX1weClgXHJcbiAgICAgIH19XHJcbiAgICA+XHJcblxyXG4gICAgICB7Lyog7J2066+47KeAIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgndmlld0JveCcpfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCd2aWV3SW1nJyl9XHJcbiAgICAgICAgICBzcmM9e2ltZ1NyY31cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoLSR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcblxyXG4gICAgICB7Lyog6rKp7J6QIOyYgeyXrSAqL31cclxuICAgICAge2dldERhc2goKX1cclxuXHJcbiAgICAgIHsvKiDspJHslZkg7Iut7J6Q6rCAIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnY3Jvc3MnKX0gLz5cclxuXHJcbiAgICAgIHsvKiDsu6TshJwg7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdtb3ZlQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFBhbn0gLz5cclxuXHJcbiAgICAgIHsvKiDrs7TrjZQg7JiB7JetICovfVxyXG4gICAgICB7Z2V0TGluZSgpfVxyXG5cclxuICAgICAgey8qIOygkCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXRQb2ludHMoKX1cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3hJbmZvJyl9PlxyXG4gICAgICAgIHtvZmZzZXQueH0sIHtvZmZzZXQueX1cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHtjcm9wQm94U2l6ZS53fSwge2Nyb3BCb3hTaXplLmh9IChweClcclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9wQm94OyJdLCJzb3VyY2VSb290IjoiIn0=