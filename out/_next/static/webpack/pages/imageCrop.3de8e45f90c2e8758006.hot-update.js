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


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\CropBox.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var ORIGIN_POINT = Object.freeze({
  x: 0,
  y: 0
});
var ORIGIN_SIZE = Object.freeze({
  w: 200,
  h: 200
});
var LINE_DIR = ['e', 'w', 's', 'n'];
var POINT_DIR = ['e', 'w', 's', 'n', 'se', 'sw', 'ne', 'nw'];
;

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
    x: x < minX ? minX : x > maxX ? maxX : x,
    y: y < minY ? minY : y > maxY ? maxY : y
  };
}

var CropBox = function CropBox(_ref) {
  _s();

  var wrapRef = _ref.wrapRef,
      imgPath = _ref.imgPath,
      imgSize = _ref.imgSize;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(ORIGIN_POINT),
      offset = _useState[0],
      setOffset = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(ORIGIN_SIZE),
      cropBoxSize = _useState2[0],
      setCropBoxSize = _useState2[1];

  var lastMousePosRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(ORIGIN_POINT);

  var getEdgeWidth = function getEdgeWidth() {
    return imgSize.w - cropBoxSize.w;
  };

  var getEdgeHeight = function getEdgeHeight() {
    return imgSize.h - cropBoxSize.h;
  };

  var getMaxWidth = function getMaxWidth() {
    return imgSize.w - cropBoxSize.w;
  };

  var getMaxHeight = function getMaxHeight() {
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

  var startSetSize = function startSetSize(e, dir) {
    e.preventDefault();
    var eLineX = offset.x + cropBoxSize.w;
    var wLineX = offset.x;
    var sLineY = offset.y + cropBoxSize.h;
    var nLineY = offset.y;

    var setSizeCropBox = function setSizeCropBox(e) {
      var x = e.pageX - wrapRef.current.offsetLeft;
      var y = e.pageY - wrapRef.current.offsetTop;
      setBox({
        x: x < 0 ? 0 : x > getMaxWidth() ? getMaxWidth() : x,
        y: y < 0 ? 0 : y > getMaxHeight() ? getMaxHeight() : y
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
        lineNumber: 211,
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
        lineNumber: 215,
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
        lineNumber: 219,
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
        lineNumber: 234,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }, _this), getLine(), getPoints()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 5
  }, _this);
};

_s(CropBox, "eaXc3jIm/RrQRrcFJjpRw6V+XmE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJPUklHSU5fUE9JTlQiLCJPYmplY3QiLCJmcmVlemUiLCJ4IiwieSIsIk9SSUdJTl9TSVpFIiwidyIsImgiLCJMSU5FX0RJUiIsIlBPSU5UX0RJUiIsImRpZmZQb2ludHMiLCJwMSIsInAyIiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIkNyb3BCb3giLCJ3cmFwUmVmIiwiaW1nUGF0aCIsImltZ1NpemUiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJsYXN0TW91c2VQb3NSZWYiLCJ1c2VSZWYiLCJnZXRFZGdlV2lkdGgiLCJnZXRFZGdlSGVpZ2h0IiwiZ2V0TWF4V2lkdGgiLCJnZXRNYXhIZWlnaHQiLCJzdGFydFBhbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmVDcm9wQm94Iiwic3RvcFBhbiIsImN1cnJlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImxhc3RNb3VzZVBvcyIsImN1cnJlbnRNb3VzZVBvcyIsIm1vdXNlRGlmZiIsInByZXZPZmZzZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhcnRTZXRTaXplIiwiZGlyIiwiZUxpbmVYIiwid0xpbmVYIiwic0xpbmVZIiwibkxpbmVZIiwic2V0U2l6ZUNyb3BCb3giLCJwYWdlWCIsIm9mZnNldExlZnQiLCJwYWdlWSIsIm9mZnNldFRvcCIsInNldEJveCIsImlzQ3Jvc3NFTCIsImlzQ3Jvc3NXTCIsImlzQ3Jvc3NTTCIsImlzQ3Jvc3NOTCIsImVYT2Zmc2V0Iiwid1hPZmZzZXQiLCJzWU9mZnNldCIsIm5ZT2Zmc2V0IiwiZUNyb3NzVyIsIndDcm9zc1ciLCJzQ3Jvc3NIIiwibkNyb3NzSCIsImVXIiwid1ciLCJzSCIsIm5IIiwic3RvcFNldFNpemUiLCJnZXREYXNoIiwibWFwIiwiZ2V0TGluZSIsImdldFBvaW50cyIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDtBQUVBLElBQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRUMsR0FBQyxFQUFFLENBQUw7QUFBUUMsR0FBQyxFQUFFO0FBQVgsQ0FBZCxDQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBR0osTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRUksR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFO0FBQWIsQ0FBZCxDQUFwQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxDQUFsQjtBQUtDOztBQUVELFNBQVNDLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQStCQyxFQUEvQixFQUEwQztBQUN4QyxTQUFPO0FBQUVULEtBQUMsRUFBRVEsRUFBRSxDQUFDUixDQUFILEdBQU9TLEVBQUUsQ0FBQ1QsQ0FBZjtBQUFrQkMsS0FBQyxFQUFFTyxFQUFFLENBQUNQLENBQUgsR0FBT1EsRUFBRSxDQUFDUjtBQUEvQixHQUFQO0FBQ0Q7O0FBRUQsU0FBU1MsU0FBVCxDQUFtQkYsRUFBbkIsRUFBOEJDLEVBQTlCLEVBQWtGO0FBQUEsTUFBekNFLElBQXlDLHVFQUFsQyxDQUFrQztBQUFBLE1BQS9CQyxJQUErQix1RUFBeEIsQ0FB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QU0sWUFBSzdELE9BQU8sQ0FBQ2QsQ0FBYixPQUZEO0FBR0w0RSxtQkFBUyx3QkFBaUI1RCxNQUFNLENBQUNwQixDQUF4Qiw2QkFBNENvQixNQUFNLENBQUNuQixDQUFuRDtBQUhKO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixFQXVCR3lFLE9BQU8sRUF2QlYsZUEwQkU7QUFBTSxlQUFTLEVBQUVqRixFQUFFLENBQUMsT0FBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBNkJFO0FBQU0sZUFBUyxFQUFFQSxFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFnQyxpQkFBVyxFQUFFcUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCRixFQWdDRzhDLE9BQU8sRUFoQ1YsRUFtQ0dDLFNBQVMsRUFuQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3Q0QsQ0FsT0Q7O0dBQU05RCxPOztLQUFBQSxPO0FBb09TQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuM2RlOGU0NWY5MGMyZTg3NTgwMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBEaXJUeXBlLCBTaXplIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IFJlZk9iamVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IE9SSUdJTl9QT0lOVCA9IE9iamVjdC5mcmVlemUoeyB4OiAwLCB5OiAwIH0pO1xyXG5jb25zdCBPUklHSU5fU0laRSA9IE9iamVjdC5mcmVlemUoeyB3OiAyMDAsIGg6IDIwMCB9KTtcclxuY29uc3QgTElORV9ESVIgPSBbJ2UnLCAndycsICdzJywgJ24nXTtcclxuY29uc3QgUE9JTlRfRElSID0gWydlJywgJ3cnLCAncycsICduJywgJ3NlJywgJ3N3JywgJ25lJywgJ253J107XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaWZmUG9pbnRzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgcmV0dXJuIHsgeDogcDEueCAtIHAyLngsIHk6IHAxLnkgLSBwMi55IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCwgbWluWCA9IDAsIG1pblkgPSAwLCBtYXhYID0gMCwgIG1heFkgPSAwKSB7XHJcbiAgY29uc3QgeCA9IHAxLnggKyBwMi54O1xyXG4gIGNvbnN0IHkgPSBwMS55ICsgcDIueTtcclxuICByZXR1cm4geyBcclxuICAgIHg6ICh4IDwgbWluWCkgPyBtaW5YIDogKHggPiBtYXhYKSA/IG1heFggOiB4LCBcclxuICAgIHk6ICh5IDwgbWluWSkgPyBtaW5ZIDogKHkgPiBtYXhZKSA/IG1heFkgOiB5LFxyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBDcm9wQm94UHJvcHMge1xyXG4gIHdyYXBSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgaW1nUGF0aDogc3RyaW5nO1xyXG4gIGltZ1NpemU6IFNpemU7XHJcbn1cclxuXHJcbmNvbnN0IENyb3BCb3ggPSAoe3dyYXBSZWYsIGltZ1BhdGgsIGltZ1NpemV9OiBDcm9wQm94UHJvcHMpID0+IHtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgbGFzdE1vdXNlUG9zUmVmID0gdXNlUmVmPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG5cclxuICBjb25zdCBnZXRFZGdlV2lkdGggPSAoKSA9PiBpbWdTaXplLncgLSBjcm9wQm94U2l6ZS53O1xyXG4gIGNvbnN0IGdldEVkZ2VIZWlnaHQgPSAoKSA9PiBpbWdTaXplLmggLSBjcm9wQm94U2l6ZS5oO1xyXG4gIGNvbnN0IGdldE1heFdpZHRoID0gKCkgPT4gaW1nU2l6ZS53IC0gY3JvcEJveFNpemUudztcclxuICBjb25zdCBnZXRNYXhIZWlnaHQgPSAoKSA9PiBpbWdTaXplLmggLSBjcm9wQm94U2l6ZS5oO1xyXG5cclxuICBjb25zdCBzdGFydFBhbiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhbik7XHJcbiAgICBsYXN0TW91c2VQb3NSZWYuY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vdmVDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxhc3RNb3VzZVBvcyA9IGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgY29uc3QgbW91c2VEaWZmID0gZGlmZlBvaW50cyhjdXJyZW50TW91c2VQb3MsIGxhc3RNb3VzZVBvcyk7XHJcblxyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSBjdXJyZW50TW91c2VQb3M7XHJcbiAgICBzZXRPZmZzZXQoKHByZXZPZmZzZXQpID0+IFxyXG4gICAgICBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmLCAwLCAwLCBnZXRFZGdlV2lkdGgoKSwgZ2V0RWRnZUhlaWdodCgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BQYW4gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRTaXplID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PiwgZGlyOiBEaXJUeXBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZUxpbmVYID0gb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53O1xyXG4gICAgY29uc3Qgd0xpbmVYID0gb2Zmc2V0Lng7XHJcbiAgICBjb25zdCBzTGluZVkgPSBvZmZzZXQueSArIGNyb3BCb3hTaXplLmg7XHJcbiAgICBjb25zdCBuTGluZVkgPSBvZmZzZXQueTtcclxuXHJcbiAgICBjb25zdCBzZXRTaXplQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcDtcclxuXHJcbiAgICAgIHNldEJveChcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgeDogKHggPCAwKSA/IDAgOiAoeCA+IGdldE1heFdpZHRoKCkpID8gZ2V0TWF4V2lkdGgoKSA6IHgsIFxyXG4gICAgICAgICAgeTogKHkgPCAwKSA/IDAgOiAoeSA+IGdldE1heEhlaWdodCgpKSA/IGdldE1heEhlaWdodCgpIDogeSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ID0gKGN1cnJlbnRNb3VzZVBvcykgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nyb3NzRUwgPSAhKHdMaW5lWCArIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NXTCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3QgaXNDcm9zc1NMID0gIShuTGluZVkgKyBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzTkwgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBjb25zdCBlWE9mZnNldCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHdYT2Zmc2V0ID0gd0xpbmVYIC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBzWU9mZnNldCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IG5ZT2Zmc2V0ID0gbkxpbmVZIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG5cclxuICAgICAgY29uc3QgZUNyb3NzVyA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgd0Nyb3NzVyA9IGN1cnJlbnRNb3VzZVBvcy54IC0gd0xpbmVYIC0gY3JvcEJveFNpemUudztcclxuICAgICAgY29uc3Qgc0Nyb3NzSCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSBjdXJyZW50TW91c2VQb3MueTtcclxuICAgICAgY29uc3QgbkNyb3NzSCA9IGN1cnJlbnRNb3VzZVBvcy55IC0gbkxpbmVZIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgICAgIGNvbnN0IGVXID0gY3JvcEJveFNpemUudyArIGN1cnJlbnRNb3VzZVBvcy54IC0gZUxpbmVYO1xyXG4gICAgICBjb25zdCB3VyA9IGNyb3BCb3hTaXplLncgKyB3TGluZVggLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgc0ggPSBjcm9wQm94U2l6ZS5oICsgY3VycmVudE1vdXNlUG9zLnkgLSBzTGluZVk7XHJcbiAgICAgIGNvbnN0IG5IID0gY3JvcEJveFNpemUuaCArIG5MaW5lWSAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmUnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdudyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRTaXplID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFNpemVDcm9wQm94KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc2V0U2l6ZUNyb3BCb3gpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFNldFNpemUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGFzaCA9ICgpID0+IFsndycsICdoJ10ubWFwKChkaXIpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnZGFzaCcsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRMaW5lID0gKCkgPT4gTElORV9ESVIubWFwKChkaXI6IERpclR5cGUpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnbGluZScsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0U2l6ZShlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0UG9pbnRzID0gKCkgPT4gUE9JTlRfRElSLm1hcCgoZGlyOiBEaXJUeXBlKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ3BvaW50JywgZGlyKX0gb25Nb3VzZURvd249e2UgPT4gc3RhcnRTZXRTaXplKGUsIGRpcil9IC8+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2N4KCdjcm9wQm94Jyl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IGAke2Nyb3BCb3hTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7Y3JvcEJveFNpemUuaH1weGAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke29mZnNldC54fXB4KSB0cmFuc2xhdGVZKCR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG5cclxuICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3ZpZXdCb3gnKX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgndmlld0ltZycpfVxyXG4gICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtvZmZzZXQueH1weCkgdHJhbnNsYXRlWSgtJHtvZmZzZXQueX1weClgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgIHsvKiDqsqnsnpAg7JiB7JetICovfVxyXG4gICAgICB7Z2V0RGFzaCgpfVxyXG5cclxuICAgICAgey8qIOykkeyVmSDsi63snpDqsIAg7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdjcm9zcycpfSAvPlxyXG5cclxuICAgICAgey8qIOy7pOyEnCDsmIHsl60gKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ21vdmVCb3gnKX0gb25Nb3VzZURvd249e3N0YXJ0UGFufSAvPlxyXG5cclxuICAgICAgey8qIOuztOuNlCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXRMaW5lKCl9XHJcblxyXG4gICAgICB7Lyog7KCQIOyYgeyXrSAqL31cclxuICAgICAge2dldFBvaW50cygpfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JvcEJveDsiXSwic291cmNlUm9vdCI6IiJ9