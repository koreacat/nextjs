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

  var imgSrc = _ref.imgSrc,
      imgSize = _ref.imgSize,
      offset = _ref.offset,
      setOffset = _ref.setOffset,
      cropBoxSize = _ref.cropBoxSize,
      setCropBoxSize = _ref.setCropBoxSize,
      offsetTop = _ref.offsetTop,
      offsetLeft = _ref.offsetLeft;
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
    var eLineX = offset.x + cropBoxSize.w;
    var wLineX = offset.x;
    var sLineY = offset.y + cropBoxSize.h;
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
        lineNumber: 206,
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
        lineNumber: 210,
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
        lineNumber: 214,
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
        lineNumber: 229,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }, _this), getDash(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cross')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('moveBox'),
      onMouseDown: startPan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, _this), getLine(), getPoints(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('cropBoxInfo'),
      children: [offset.x, ", ", offset.y, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 9
      }, _this), cropBoxSize.w, ", ", cropBoxSize.h, " (px)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 218,
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

/***/ }),

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



var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\imageCrop\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_4___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var ImageCrop = function ImageCrop(_ref) {
  _s();

  var imgSrc = _ref.imgSrc,
      imgName = _ref.imgName,
      width = _ref.width,
      height = _ref.height;
  var wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var cropAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_SIZE"]),
      imgSize = _useState[0],
      setImgSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_SIZE"]),
      cropBoxSize = _useState2[0],
      setCropBoxSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_POINT"]),
      offset = _useState3[0],
      setOffset = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      widthRatio = _useState4[0],
      setWidthRatio = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      heightRatio = _useState5[0],
      setHeightRatio = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, [imgSrc]);

  var getWidth = function getWidth(imgWidth, imgHeight) {
    if (imgWidth > width && imgHeight > height) {
      if (height > width) return width;
      return imgWidth * (height / imgHeight);
    }

    if (imgHeight > height) return Math.min(imgWidth, width) * (height / imgHeight);
    return Math.min(imgWidth, width);
  };

  var getHeight = function getHeight(imgWidth, imgHeight) {
    if (imgWidth > width && imgHeight > height) {
      if (height < width) return height;
      return imgHeight * (width / imgWidth);
    }

    if (imgWidth > width) return Math.min(imgHeight, height) * (width / imgWidth);
    return Math.min(imgHeight, height);
  };

  var init = function init() {
    var imgEl = new Image();
    imgEl.src = imgSrc;

    imgEl.onload = function () {
      var imgWidth = getWidth(imgEl.width, imgEl.height);
      var imgHeight = getHeight(imgEl.width, imgEl.height);
      setWidthRatio(imgWidth / imgEl.width);
      setHeightRatio(imgHeight / imgEl.height);
      setImgSize({
        w: imgWidth,
        h: imgHeight
      });
      setCropBoxSize({
        w: imgWidth / 2,
        h: imgHeight / 2
      });
      setOffset({
        x: imgWidth / 4,
        y: imgHeight / 4
      });
    };
  };

  var download = function download(url) {
    var a = document.createElement('a');
    a.href = url;
    a.download = imgName;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  var handleDownload = function handleDownload() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imgEl = new Image();
    canvas.width = cropBoxSize.w;
    canvas.height = cropBoxSize.h;
    imgEl.src = imgSrc;

    imgEl.onload = function () {
      var oc = document.createElement('canvas');
      var octx = oc.getContext('2d');
      oc.width = imgEl.width * widthRatio;
      oc.height = imgEl.height * heightRatio;
      octx === null || octx === void 0 ? void 0 : octx.drawImage(imgEl, 0, 0, oc.width, oc.height);
      ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(oc, offset.x, offset.y, cropBoxSize.w, cropBoxSize.h, 0, 0, cropBoxSize.w, cropBoxSize.h);
      download(canvas.toDataURL());
    };
  };

  var getOffsetTop = function getOffsetTop() {
    var _cropAreaRef$current;

    return (wrapRef.current ? wrapRef.current.offsetTop : 0) + (cropAreaRef.current ? (_cropAreaRef$current = cropAreaRef.current) === null || _cropAreaRef$current === void 0 ? void 0 : _cropAreaRef$current.offsetTop : 0);
  };

  var getOffsetLeft = function getOffsetLeft() {
    var _wrapRef$current;

    return (wrapRef.current ? (_wrapRef$current = wrapRef.current) === null || _wrapRef$current === void 0 ? void 0 : _wrapRef$current.offsetLeft : 0) + (cropAreaRef.current ? cropAreaRef.current.offsetLeft : 0);
  };

  if (!imgSrc) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: wrapRef,
      className: cx('wrap'),
      style: {
        width: "".concat(width, "px"),
        height: "".concat(height, "px")
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: cropAreaRef,
        className: cx('cropArea'),
        style: {
          width: "".concat(imgSize.w, "px"),
          height: "".concat(imgSize.h, "px")
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('imgArea'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('imgBox'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: cx('img'),
              src: imgSrc,
              style: {
                width: "".concat(imgSize.w, "px"),
                height: "".concat(imgSize.h, "px")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
          offsetTop: getOffsetTop(),
          offsetLeft: getOffsetLeft(),
          imgSize: imgSize,
          setOffset: setOffset,
          setCropBoxSize: setCropBoxSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CropBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          offsetTop: getOffsetTop(),
          offsetLeft: getOffsetLeft(),
          imgSrc: imgSrc,
          imgSize: imgSize,
          offset: offset,
          setOffset: setOffset,
          cropBoxSize: cropBoxSize,
          setCropBoxSize: setCropBoxSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn'),
      onClick: handleDownload,
      children: "download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ImageCrop, "78yR/9LCOLUKOqwM8v6Hw3rMbcg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL0Nyb3BCb3gudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbWFnZUNyb3AvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJkaWZmUG9pbnRzIiwicDEiLCJwMiIsIngiLCJ5IiwiYWRkUG9pbnRzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsImNsYW1wIiwiQ3JvcEJveCIsImltZ1NyYyIsImltZ1NpemUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJjcm9wQm94U2l6ZSIsInNldENyb3BCb3hTaXplIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsImxhc3RNb3VzZVBvc1JlZiIsInVzZVJlZiIsIk9SSUdJTl9QT0lOVCIsImdldEVkZ2VXaWR0aCIsInciLCJnZXRFZGdlSGVpZ2h0IiwiaCIsInN0YXJ0UGFuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZUNyb3BCb3giLCJzdG9wUGFuIiwiY3VycmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwibGFzdE1vdXNlUG9zIiwiY3VycmVudE1vdXNlUG9zIiwibW91c2VEaWZmIiwicHJldk9mZnNldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFNldENyb3BCb3giLCJkaXIiLCJjb25zb2xlIiwibG9nIiwiZUxpbmVYIiwid0xpbmVYIiwic0xpbmVZIiwibkxpbmVZIiwic2V0Q3JvcEJveCIsInBhZ2VYIiwid3JhcFJlZiIsInBhZ2VZIiwic2V0Qm94IiwiaXNDcm9zc0VMIiwiaXNDcm9zc1dMIiwiaXNDcm9zc1NMIiwiaXNDcm9zc05MIiwiZVhPZmZzZXQiLCJ3WE9mZnNldCIsInNZT2Zmc2V0IiwibllPZmZzZXQiLCJlQ3Jvc3NXIiwid0Nyb3NzVyIsInNDcm9zc0giLCJuQ3Jvc3NIIiwiZVciLCJ3VyIsInNIIiwibkgiLCJzdG9wU2V0Q3JvcEJveCIsImdldERhc2giLCJtYXAiLCJnZXRMaW5lIiwiTElORV9ESVIiLCJnZXRQb2ludHMiLCJQT0lOVF9ESVIiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsIkltYWdlQ3JvcCIsImltZ05hbWUiLCJjcm9wQXJlYVJlZiIsInVzZVN0YXRlIiwiT1JJR0lOX1NJWkUiLCJzZXRJbWdTaXplIiwid2lkdGhSYXRpbyIsInNldFdpZHRoUmF0aW8iLCJoZWlnaHRSYXRpbyIsInNldEhlaWdodFJhdGlvIiwidXNlRWZmZWN0IiwiaW5pdCIsImdldFdpZHRoIiwiaW1nV2lkdGgiLCJpbWdIZWlnaHQiLCJNYXRoIiwibWluIiwiZ2V0SGVpZ2h0IiwiaW1nRWwiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRvd25sb2FkIiwidXJsIiwiYSIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiY2xpY2siLCJyZW1vdmUiLCJ3aW5kb3ciLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJoYW5kbGVEb3dubG9hZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJvYyIsIm9jdHgiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJnZXRPZmZzZXRUb3AiLCJnZXRPZmZzZXRMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUErQkMsRUFBL0IsRUFBMEM7QUFDeEMsU0FBTztBQUFFQyxLQUFDLEVBQUVGLEVBQUUsQ0FBQ0UsQ0FBSCxHQUFPRCxFQUFFLENBQUNDLENBQWY7QUFBa0JDLEtBQUMsRUFBRUgsRUFBRSxDQUFDRyxDQUFILEdBQU9GLEVBQUUsQ0FBQ0U7QUFBL0IsR0FBUDtBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJKLEVBQW5CLEVBQThCQyxFQUE5QixFQUFpRjtBQUFBLE1BQXhDSSxJQUF3Qyx1RUFBakMsQ0FBaUM7QUFBQSxNQUE5QkMsSUFBOEIsdUVBQXZCLENBQXVCO0FBQUEsTUFBcEJDLElBQW9CLHVFQUFiLENBQWE7QUFBQSxNQUFWQyxJQUFVLHVFQUFILENBQUc7QUFDL0UsTUFBTU4sQ0FBQyxHQUFHRixFQUFFLENBQUNFLENBQUgsR0FBT0QsRUFBRSxDQUFDQyxDQUFwQjtBQUNBLE1BQU1DLENBQUMsR0FBR0gsRUFBRSxDQUFDRyxDQUFILEdBQU9GLEVBQUUsQ0FBQ0UsQ0FBcEI7QUFDQSxTQUFPO0FBQUVELEtBQUMsRUFBRU8sbURBQUssQ0FBQ1AsQ0FBRCxFQUFJRyxJQUFKLEVBQVVFLElBQVYsQ0FBVjtBQUEyQkosS0FBQyxFQUFFTSxtREFBSyxDQUFDTixDQUFELEVBQUlHLElBQUosRUFBVUUsSUFBVjtBQUFuQyxHQUFQO0FBQ0Q7O0FBYUQsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FVTTtBQUFBOztBQUFBLE1BUmxCQyxNQVFrQixRQVJsQkEsTUFRa0I7QUFBQSxNQVBsQkMsT0FPa0IsUUFQbEJBLE9BT2tCO0FBQUEsTUFObEJDLE1BTWtCLFFBTmxCQSxNQU1rQjtBQUFBLE1BTGxCQyxTQUtrQixRQUxsQkEsU0FLa0I7QUFBQSxNQUpsQkMsV0FJa0IsUUFKbEJBLFdBSWtCO0FBQUEsTUFIbEJDLGNBR2tCLFFBSGxCQSxjQUdrQjtBQUFBLE1BRmxCQyxTQUVrQixRQUZsQkEsU0FFa0I7QUFBQSxNQURsQkMsVUFDa0IsUUFEbEJBLFVBQ2tCO0FBQ3BCLE1BQU1DLGVBQWUsR0FBR0Msb0RBQU0sQ0FBUUMsa0RBQVIsQ0FBOUI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNVixPQUFPLENBQUNXLENBQVIsR0FBWVIsV0FBVyxDQUFDUSxDQUE5QjtBQUFBLEdBQXJCOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxXQUFNWixPQUFPLENBQUNhLENBQVIsR0FBWVYsV0FBVyxDQUFDVSxDQUE5QjtBQUFBLEdBQXRCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBc0Q7QUFDckVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDQyxXQUF2QztBQUNBRixZQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDRSxPQUFyQztBQUNBYixtQkFBZSxDQUFDYyxPQUFoQixHQUEwQjtBQUFFL0IsT0FBQyxFQUFFeUIsQ0FBQyxDQUFDTyxPQUFQO0FBQWdCL0IsT0FBQyxFQUFFd0IsQ0FBQyxDQUFDUTtBQUFyQixLQUExQjtBQUNELEdBTEQ7O0FBT0EsTUFBTUosV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0osQ0FBRCxFQUFtQjtBQUNyQyxRQUFNUyxZQUFZLEdBQUdqQixlQUFlLENBQUNjLE9BQXJDO0FBQ0EsUUFBTUksZUFBZSxHQUFHO0FBQUVuQyxPQUFDLEVBQUV5QixDQUFDLENBQUNPLE9BQVA7QUFBZ0IvQixPQUFDLEVBQUV3QixDQUFDLENBQUNRO0FBQXJCLEtBQXhCO0FBQ0EsUUFBTUcsU0FBUyxHQUFHdkMsVUFBVSxDQUFDc0MsZUFBRCxFQUFrQkQsWUFBbEIsQ0FBNUI7QUFFQWpCLG1CQUFlLENBQUNjLE9BQWhCLEdBQTBCSSxlQUExQjtBQUNBdkIsYUFBUyxDQUFDLFVBQUN5QixVQUFEO0FBQUEsYUFDUm5DLFNBQVMsQ0FBQ21DLFVBQUQsRUFBYUQsU0FBYixFQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QmhCLFlBQVksRUFBMUMsRUFBOENFLGFBQWEsRUFBM0QsQ0FERDtBQUFBLEtBQUQsQ0FBVDtBQUdELEdBVEQ7O0FBV0EsTUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkgsWUFBUSxDQUFDVyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ1QsV0FBMUM7QUFDQUYsWUFBUSxDQUFDVyxtQkFBVCxDQUE2QixTQUE3QixFQUF3Q1IsT0FBeEM7QUFDRCxHQUhEOztBQUtBLE1BQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ2QsQ0FBRCxFQUFtRGUsR0FBbkQsRUFBbUU7QUFDekZmLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBZSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBRUEsUUFBTUMsTUFBTSxHQUFHaEMsTUFBTSxDQUFDWCxDQUFQLEdBQVdhLFdBQVcsQ0FBQ1EsQ0FBdEM7QUFDQSxRQUFNdUIsTUFBTSxHQUFHakMsTUFBTSxDQUFDWCxDQUF0QjtBQUNBLFFBQU02QyxNQUFNLEdBQUdsQyxNQUFNLENBQUNWLENBQVAsR0FBV1ksV0FBVyxDQUFDVSxDQUF0QztBQUNBLFFBQU11QixNQUFNLEdBQUduQyxNQUFNLENBQUNWLENBQXRCOztBQUVBLFFBQU04QyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDdEIsQ0FBRCxFQUFtQjtBQUFBOztBQUNwQyxVQUFNekIsQ0FBQyxHQUFHeUIsQ0FBQyxDQUFDdUIsS0FBRixJQUFXQyxPQUFPLENBQUNsQixPQUFSLHVCQUFrQmtCLE9BQU8sQ0FBQ2xCLE9BQTFCLHFEQUFrQixpQkFBaUJmLFVBQW5DLEdBQWdELENBQTNELENBQVY7QUFDQSxVQUFNZixDQUFDLEdBQUd3QixDQUFDLENBQUN5QixLQUFGLElBQVdELE9BQU8sQ0FBQ2xCLE9BQVIsd0JBQWtCa0IsT0FBTyxDQUFDbEIsT0FBMUIsc0RBQWtCLGtCQUFpQmhCLFNBQW5DLEdBQStDLENBQTFELENBQVY7QUFDQW9DLFlBQU0sQ0FBQztBQUFFbkQsU0FBQyxFQUFFTyxtREFBSyxDQUFDUCxDQUFELEVBQUksQ0FBSixFQUFPVSxPQUFPLENBQUNXLENBQWYsQ0FBVjtBQUE2QnBCLFNBQUMsRUFBRU0sbURBQUssQ0FBQ04sQ0FBRCxFQUFJLENBQUosRUFBT1MsT0FBTyxDQUFDYSxDQUFmO0FBQXJDLE9BQUQsQ0FBTjtBQUNELEtBSkQ7O0FBTUEsUUFBTTRCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNoQixlQUFELEVBQTZDO0FBQzFELFVBQU1pQixTQUFTLEdBQUcsRUFBRVIsTUFBTSxHQUFHL0IsV0FBVyxDQUFDUSxDQUFyQixHQUF5QmMsZUFBZSxDQUFDbkMsQ0FBM0MsQ0FBbEI7QUFDQSxVQUFNcUQsU0FBUyxHQUFHVixNQUFNLEdBQUc5QixXQUFXLENBQUNRLENBQXJCLEdBQXlCYyxlQUFlLENBQUNuQyxDQUEzRDtBQUNBLFVBQU1zRCxTQUFTLEdBQUcsRUFBRVIsTUFBTSxHQUFHakMsV0FBVyxDQUFDVSxDQUFyQixHQUF5QlksZUFBZSxDQUFDbEMsQ0FBM0MsQ0FBbEI7QUFDQSxVQUFNc0QsU0FBUyxHQUFHVixNQUFNLEdBQUdoQyxXQUFXLENBQUNVLENBQXJCLEdBQXlCWSxlQUFlLENBQUNsQyxDQUEzRDtBQUVBLFVBQU11RCxRQUFRLEdBQUdiLE1BQU0sR0FBRzlCLFdBQVcsQ0FBQ1EsQ0FBckIsSUFBMEJWLE1BQU0sQ0FBQ1gsQ0FBUCxHQUFXbUMsZUFBZSxDQUFDbkMsQ0FBckQsQ0FBakI7QUFDQSxVQUFNeUQsUUFBUSxHQUFHYixNQUFNLElBQUlqQyxNQUFNLENBQUNYLENBQVAsR0FBV21DLGVBQWUsQ0FBQ25DLENBQS9CLENBQXZCO0FBQ0EsVUFBTTBELFFBQVEsR0FBR2IsTUFBTSxHQUFHaEMsV0FBVyxDQUFDVSxDQUFyQixJQUEwQlosTUFBTSxDQUFDVixDQUFQLEdBQVdrQyxlQUFlLENBQUNsQyxDQUFyRCxDQUFqQjtBQUNBLFVBQU0wRCxRQUFRLEdBQUdiLE1BQU0sSUFBSW5DLE1BQU0sQ0FBQ1YsQ0FBUCxHQUFXa0MsZUFBZSxDQUFDbEMsQ0FBL0IsQ0FBdkI7QUFFQSxVQUFNMkQsT0FBTyxHQUFHakIsTUFBTSxHQUFHOUIsV0FBVyxDQUFDUSxDQUFyQixHQUF5QmMsZUFBZSxDQUFDbkMsQ0FBekQ7QUFDQSxVQUFNNkQsT0FBTyxHQUFHMUIsZUFBZSxDQUFDbkMsQ0FBaEIsR0FBb0I0QyxNQUFwQixHQUE2Qi9CLFdBQVcsQ0FBQ1EsQ0FBekQ7QUFDQSxVQUFNeUMsT0FBTyxHQUFHakIsTUFBTSxHQUFHaEMsV0FBVyxDQUFDVSxDQUFyQixHQUF5QlksZUFBZSxDQUFDbEMsQ0FBekQ7QUFDQSxVQUFNOEQsT0FBTyxHQUFHNUIsZUFBZSxDQUFDbEMsQ0FBaEIsR0FBb0I2QyxNQUFwQixHQUE2QmpDLFdBQVcsQ0FBQ1UsQ0FBekQ7QUFFQSxVQUFNeUMsRUFBRSxHQUFHbkQsV0FBVyxDQUFDUSxDQUFaLEdBQWdCYyxlQUFlLENBQUNuQyxDQUFoQyxHQUFvQzJDLE1BQS9DO0FBQ0EsVUFBTXNCLEVBQUUsR0FBR3BELFdBQVcsQ0FBQ1EsQ0FBWixHQUFnQnVCLE1BQWhCLEdBQXlCVCxlQUFlLENBQUNuQyxDQUFwRDtBQUNBLFVBQU1rRSxFQUFFLEdBQUdyRCxXQUFXLENBQUNVLENBQVosR0FBZ0JZLGVBQWUsQ0FBQ2xDLENBQWhDLEdBQW9DNEMsTUFBL0M7QUFDQSxVQUFNc0IsRUFBRSxHQUFHdEQsV0FBVyxDQUFDVSxDQUFaLEdBQWdCdUIsTUFBaEIsR0FBeUJYLGVBQWUsQ0FBQ2xDLENBQXBEOztBQUVBLGNBQVF1QyxHQUFSO0FBQ0UsYUFBSyxHQUFMO0FBQ0UsY0FBSWEsU0FBSixFQUFlO0FBQ2J6QyxxQkFBUyxDQUFDO0FBQUVaLGVBQUMsRUFBRXdELFFBQUw7QUFBZXZELGVBQUMsRUFBRVUsTUFBTSxDQUFDVjtBQUF6QixhQUFELENBQVQ7QUFDQWEsMEJBQWMsQ0FBQztBQUFFTyxlQUFDLEVBQUV1QyxPQUFMO0FBQWNyQyxlQUFDLEVBQUVWLFdBQVcsQ0FBQ1U7QUFBN0IsYUFBRCxDQUFkO0FBQ0QsV0FIRCxNQUdPO0FBQ0xULDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFMkMsRUFBTDtBQUFTekMsZUFBQyxFQUFFVixXQUFXLENBQUNVO0FBQXhCLGFBQUQsQ0FBZDtBQUNEOztBQUNEOztBQUNGLGFBQUssR0FBTDtBQUNFLGNBQUk2QixTQUFKLEVBQWU7QUFDYnRDLDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFd0MsT0FBTDtBQUFjdEMsZUFBQyxFQUFFVixXQUFXLENBQUNVO0FBQTdCLGFBQUQsQ0FBZDtBQUNELFdBRkQsTUFFTztBQUNMWCxxQkFBUyxDQUFDO0FBQUVaLGVBQUMsRUFBRXlELFFBQUw7QUFBZXhELGVBQUMsRUFBRVUsTUFBTSxDQUFDVjtBQUF6QixhQUFELENBQVQ7QUFDQWEsMEJBQWMsQ0FBQztBQUFFTyxlQUFDLEVBQUU0QyxFQUFMO0FBQVMxQyxlQUFDLEVBQUVWLFdBQVcsQ0FBQ1U7QUFBeEIsYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxHQUFMO0FBQ0UsY0FBSWdDLFNBQUosRUFBZTtBQUNiM0MscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVXLE1BQU0sQ0FBQ1gsQ0FBWjtBQUFlQyxlQUFDLEVBQUV5RDtBQUFsQixhQUFELENBQVQ7QUFDQTVDLDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFUixXQUFXLENBQUNRLENBQWpCO0FBQW9CRSxlQUFDLEVBQUV1QztBQUF2QixhQUFELENBQWQ7QUFDRCxXQUhELE1BR087QUFDTGhELDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFUixXQUFXLENBQUNRLENBQWpCO0FBQW9CRSxlQUFDLEVBQUUyQztBQUF2QixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLEdBQUw7QUFDRSxjQUFJWixTQUFKLEVBQWU7QUFDYnhDLDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFUixXQUFXLENBQUNRLENBQWpCO0FBQW9CRSxlQUFDLEVBQUV3QztBQUF2QixhQUFELENBQWQ7QUFDRCxXQUZELE1BRU87QUFDTG5ELHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFVyxNQUFNLENBQUNYLENBQVo7QUFBZUMsZUFBQyxFQUFFMEQ7QUFBbEIsYUFBRCxDQUFUO0FBQ0E3QywwQkFBYyxDQUFDO0FBQUVPLGVBQUMsRUFBRVIsV0FBVyxDQUFDUSxDQUFqQjtBQUFvQkUsZUFBQyxFQUFFNEM7QUFBdkIsYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSyxJQUFMO0FBQ0UsY0FBSVosU0FBUyxJQUFJRixTQUFqQixFQUE0QjtBQUMxQnpDLHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFd0QsUUFBTDtBQUFldkQsZUFBQyxFQUFFeUQ7QUFBbEIsYUFBRCxDQUFUO0FBQ0E1QywwQkFBYyxDQUFDO0FBQUVPLGVBQUMsRUFBRXVDLE9BQUw7QUFBY3JDLGVBQUMsRUFBRXVDO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBSEQsTUFHTyxJQUFJVCxTQUFKLEVBQWU7QUFDcEJ6QyxxQkFBUyxDQUFDO0FBQUVaLGVBQUMsRUFBRXdELFFBQUw7QUFBZXZELGVBQUMsRUFBRVUsTUFBTSxDQUFDVjtBQUF6QixhQUFELENBQVQ7QUFDQWEsMEJBQWMsQ0FBQztBQUFFTyxlQUFDLEVBQUV1QyxPQUFMO0FBQWNyQyxlQUFDLEVBQUUyQztBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhNLE1BR0EsSUFBSVgsU0FBSixFQUFlO0FBQ3BCM0MscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVXLE1BQU0sQ0FBQ1gsQ0FBWjtBQUFlQyxlQUFDLEVBQUV5RDtBQUFsQixhQUFELENBQVQ7QUFDQTVDLDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFMkMsRUFBTDtBQUFTekMsZUFBQyxFQUFFdUM7QUFBWixhQUFELENBQWQ7QUFDRCxXQUhNLE1BR0E7QUFDTGhELDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFMkMsRUFBTDtBQUFTekMsZUFBQyxFQUFFMkM7QUFBWixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLElBQUw7QUFDRSxjQUFJWCxTQUFTLElBQUlILFNBQWpCLEVBQTRCO0FBQzFCeEMscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVXLE1BQU0sQ0FBQ1gsQ0FBUCxHQUFXYSxXQUFXLENBQUNRLENBQTVCO0FBQStCcEIsZUFBQyxFQUFFMEQ7QUFBbEMsYUFBRCxDQUFUO0FBQ0E3QywwQkFBYyxDQUFDO0FBQUVPLGVBQUMsRUFBRXdDLE9BQUw7QUFBY3RDLGVBQUMsRUFBRXVDO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBSEQsTUFHTyxJQUFJVixTQUFKLEVBQWU7QUFDcEJ0QywwQkFBYyxDQUFDO0FBQUVPLGVBQUMsRUFBRXdDLE9BQUw7QUFBY3RDLGVBQUMsRUFBRTJDO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBRk0sTUFFQSxJQUFJWCxTQUFKLEVBQWU7QUFDcEIzQyxxQkFBUyxDQUFDO0FBQUVaLGVBQUMsRUFBRXlELFFBQUw7QUFBZXhELGVBQUMsRUFBRTBEO0FBQWxCLGFBQUQsQ0FBVDtBQUNBN0MsMEJBQWMsQ0FBQztBQUFFTyxlQUFDLEVBQUU0QyxFQUFMO0FBQVMxQyxlQUFDLEVBQUV1QztBQUFaLGFBQUQsQ0FBZDtBQUNELFdBSE0sTUFHQTtBQUNMbEQscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUV5RCxRQUFMO0FBQWV4RCxlQUFDLEVBQUVVLE1BQU0sQ0FBQ1Y7QUFBekIsYUFBRCxDQUFUO0FBQ0FhLDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFNEMsRUFBTDtBQUFTMUMsZUFBQyxFQUFFMkM7QUFBWixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLElBQUw7QUFDRSxjQUFJWixTQUFTLElBQUlELFNBQWpCLEVBQTRCO0FBQzFCekMscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUV3RCxRQUFMO0FBQWV2RCxlQUFDLEVBQUVVLE1BQU0sQ0FBQ1YsQ0FBUCxHQUFXWSxXQUFXLENBQUNVO0FBQXpDLGFBQUQsQ0FBVDtBQUNBVCwwQkFBYyxDQUFDO0FBQUVPLGVBQUMsRUFBRXVDLE9BQUw7QUFBY3JDLGVBQUMsRUFBRXdDO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBSEQsTUFHTyxJQUFJVixTQUFKLEVBQWU7QUFDcEJ6QyxxQkFBUyxDQUFDO0FBQUVaLGVBQUMsRUFBRXdELFFBQUw7QUFBZXZELGVBQUMsRUFBRTBEO0FBQWxCLGFBQUQsQ0FBVDtBQUNBN0MsMEJBQWMsQ0FBQztBQUFFTyxlQUFDLEVBQUV1QyxPQUFMO0FBQWNyQyxlQUFDLEVBQUU0QztBQUFqQixhQUFELENBQWQ7QUFDRCxXQUhNLE1BR0EsSUFBSWIsU0FBSixFQUFlO0FBQ3BCeEMsMEJBQWMsQ0FBQztBQUFFTyxlQUFDLEVBQUUyQyxFQUFMO0FBQVN6QyxlQUFDLEVBQUV3QztBQUFaLGFBQUQsQ0FBZDtBQUNELFdBRk0sTUFFQTtBQUNMbkQscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVXLE1BQU0sQ0FBQ1gsQ0FBWjtBQUFlQyxlQUFDLEVBQUUwRDtBQUFsQixhQUFELENBQVQ7QUFDQTdDLDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFMkMsRUFBTDtBQUFTekMsZUFBQyxFQUFFNEM7QUFBWixhQUFELENBQWQ7QUFDRDs7QUFDRDs7QUFDRixhQUFLLElBQUw7QUFDRSxjQUFJYixTQUFTLElBQUlGLFNBQWpCLEVBQTRCO0FBQzFCdEMsMEJBQWMsQ0FBQztBQUFFTyxlQUFDLEVBQUV3QyxPQUFMO0FBQWN0QyxlQUFDLEVBQUV3QztBQUFqQixhQUFELENBQWQ7QUFDRCxXQUZELE1BRU8sSUFBSVgsU0FBSixFQUFlO0FBQ3BCeEMscUJBQVMsQ0FBQztBQUFFWixlQUFDLEVBQUVXLE1BQU0sQ0FBQ1gsQ0FBUCxHQUFXYSxXQUFXLENBQUNRLENBQTVCO0FBQStCcEIsZUFBQyxFQUFFMEQ7QUFBbEMsYUFBRCxDQUFUO0FBQ0E3QywwQkFBYyxDQUFDO0FBQUVPLGVBQUMsRUFBRXdDLE9BQUw7QUFBY3RDLGVBQUMsRUFBRTRDO0FBQWpCLGFBQUQsQ0FBZDtBQUNELFdBSE0sTUFHQSxJQUFJYixTQUFKLEVBQWU7QUFDcEIxQyxxQkFBUyxDQUFDO0FBQUVaLGVBQUMsRUFBRXlELFFBQUw7QUFBZXhELGVBQUMsRUFBRVUsTUFBTSxDQUFDVixDQUFQLEdBQVdZLFdBQVcsQ0FBQ1U7QUFBekMsYUFBRCxDQUFUO0FBQ0FULDBCQUFjLENBQUM7QUFBRU8sZUFBQyxFQUFFNEMsRUFBTDtBQUFTMUMsZUFBQyxFQUFFd0M7QUFBWixhQUFELENBQWQ7QUFDRCxXQUhNLE1BR0E7QUFDTG5ELHFCQUFTLENBQUM7QUFBRVosZUFBQyxFQUFFeUQsUUFBTDtBQUFleEQsZUFBQyxFQUFFMEQ7QUFBbEIsYUFBRCxDQUFUO0FBQ0E3QywwQkFBYyxDQUFDO0FBQUVPLGVBQUMsRUFBRTRDLEVBQUw7QUFBUzFDLGVBQUMsRUFBRTRDO0FBQVosYUFBRCxDQUFkO0FBQ0Q7O0FBQ0Q7QUF4Rko7QUEwRkQsS0EvR0Q7O0FBaUhBLFFBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQnpDLGNBQVEsQ0FBQ1csbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENTLFVBQTFDO0FBQ0FwQixjQUFRLENBQUNXLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDOEIsY0FBeEM7QUFDRCxLQUhEOztBQUtBekMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q21CLFVBQXZDO0FBQ0FwQixZQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDd0MsY0FBckM7QUFDRCxHQXhJRDs7QUEwSUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxXQUFNLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0MsR0FBWCxDQUFlLFVBQUM5QixHQUFEO0FBQUEsMEJBQ25DO0FBQWdCLGlCQUFTLEVBQUUvQyxFQUFFLENBQUMsTUFBRCxFQUFTK0MsR0FBVDtBQUE3QixTQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbUM7QUFBQSxLQUFmLENBQU47QUFBQSxHQUFoQjs7QUFJQSxNQUFNK0IsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxXQUFNQyw4Q0FBUSxDQUFDRixHQUFULENBQWEsVUFBQzlCLEdBQUQ7QUFBQSwwQkFDakM7QUFBZ0IsaUJBQVMsRUFBRS9DLEVBQUUsQ0FBQyxNQUFELEVBQVMrQyxHQUFULENBQTdCO0FBQTRDLG1CQUFXLEVBQUUscUJBQUFmLENBQUM7QUFBQSxpQkFBSWMsZUFBZSxDQUFDZCxDQUFELEVBQUllLEdBQUosQ0FBbkI7QUFBQTtBQUExRCxTQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUM7QUFBQSxLQUFiLENBQU47QUFBQSxHQUFoQjs7QUFJQSxNQUFNaUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFNQywrQ0FBUyxDQUFDSixHQUFWLENBQWMsVUFBQzlCLEdBQUQ7QUFBQSwwQkFDcEM7QUFBZ0IsaUJBQVMsRUFBRS9DLEVBQUUsQ0FBQyxPQUFELEVBQVUrQyxHQUFWLENBQTdCO0FBQTZDLG1CQUFXLEVBQUUscUJBQUFmLENBQUM7QUFBQSxpQkFBSWMsZUFBZSxDQUFDZCxDQUFELEVBQUllLEdBQUosQ0FBbkI7QUFBQTtBQUEzRCxTQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEb0M7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFsQjs7QUFJQSxzQkFDRTtBQUNFLGFBQVMsRUFBRS9DLEVBQUUsQ0FBQyxTQUFELENBRGY7QUFFRSxTQUFLLEVBQUU7QUFDTGtGLFdBQUssWUFBSzlELFdBQVcsQ0FBQ1EsQ0FBakIsT0FEQTtBQUVMdUQsWUFBTSxZQUFLL0QsV0FBVyxDQUFDVSxDQUFqQixPQUZEO0FBR0xzRCxlQUFTLHVCQUFnQmxFLE1BQU0sQ0FBQ1gsQ0FBdkIsNEJBQTBDVyxNQUFNLENBQUNWLENBQWpEO0FBSEosS0FGVDtBQUFBLDRCQVVFO0FBQU0sZUFBUyxFQUFFUixFQUFFLENBQUMsU0FBRCxDQUFuQjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FEZjtBQUVFLFdBQUcsRUFBRWdCLE1BRlA7QUFHRSxhQUFLLEVBQUU7QUFDTGtFLGVBQUssWUFBS2pFLE9BQU8sQ0FBQ1csQ0FBYixPQURBO0FBRUx1RCxnQkFBTSxZQUFLbEUsT0FBTyxDQUFDYSxDQUFiLE9BRkQ7QUFHTHNELG1CQUFTLHdCQUFpQmxFLE1BQU0sQ0FBQ1gsQ0FBeEIsNkJBQTRDVyxNQUFNLENBQUNWLENBQW5EO0FBSEo7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLEVBdUJHb0UsT0FBTyxFQXZCVixlQTBCRTtBQUFNLGVBQVMsRUFBRTVFLEVBQUUsQ0FBQyxPQUFEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUE2QkU7QUFBTSxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQW5CO0FBQWdDLGlCQUFXLEVBQUUrQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGLEVBZ0NHK0MsT0FBTyxFQWhDVixFQW1DR0UsU0FBUyxFQW5DWixlQXFDRTtBQUFNLGVBQVMsRUFBRWhGLEVBQUUsQ0FBQyxhQUFELENBQW5CO0FBQUEsaUJBQ0drQixNQUFNLENBQUNYLENBRFYsUUFDZVcsTUFBTSxDQUFDVixDQUR0QixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdHWSxXQUFXLENBQUNRLENBSGYsUUFHb0JSLFdBQVcsQ0FBQ1UsQ0FIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkNELENBMU9EOztHQUFNZixPOztLQUFBQSxPO0FBNE9TQSxzRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTWYsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFTQSxJQUFNa0YsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBc0Q7QUFBQTs7QUFBQSxNQUFwRHJFLE1BQW9ELFFBQXBEQSxNQUFvRDtBQUFBLE1BQTVDc0UsT0FBNEMsUUFBNUNBLE9BQTRDO0FBQUEsTUFBbkNKLEtBQW1DLFFBQW5DQSxLQUFtQztBQUFBLE1BQTVCQyxNQUE0QixRQUE1QkEsTUFBNEI7QUFDdEUsTUFBTTNCLE9BQU8sR0FBRy9CLG9EQUFNLENBQWlCLElBQWpCLENBQXRCO0FBQ0EsTUFBTThELFdBQVcsR0FBRzlELG9EQUFNLENBQWlCLElBQWpCLENBQTFCOztBQUZzRSxrQkFHeEMrRCxzREFBUSxDQUFPQyxpREFBUCxDQUhnQztBQUFBLE1BRy9EeEUsT0FIK0Q7QUFBQSxNQUd0RHlFLFVBSHNEOztBQUFBLG1CQUloQ0Ysc0RBQVEsQ0FBT0MsaURBQVAsQ0FKd0I7QUFBQSxNQUkvRHJFLFdBSitEO0FBQUEsTUFJbERDLGNBSmtEOztBQUFBLG1CQUsxQ21FLHNEQUFRLENBQVE5RCxrREFBUixDQUxrQztBQUFBLE1BSy9EUixNQUwrRDtBQUFBLE1BS3ZEQyxTQUx1RDs7QUFBQSxtQkFNbENxRSxzREFBUSxDQUFTLENBQVQsQ0FOMEI7QUFBQSxNQU0vREcsVUFOK0Q7QUFBQSxNQU1uREMsYUFObUQ7O0FBQUEsbUJBT2hDSixzREFBUSxDQUFTLENBQVQsQ0FQd0I7QUFBQSxNQU8vREssV0FQK0Q7QUFBQSxNQU9sREMsY0FQa0Q7O0FBU3RFQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsUUFBSTtBQUNMLEdBRlEsRUFFTixDQUFDaEYsTUFBRCxDQUZNLENBQVQ7O0FBS0EsTUFBTWlGLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBbUJDLFNBQW5CLEVBQXlDO0FBQ3hELFFBQUlELFFBQVEsR0FBR2hCLEtBQVgsSUFBb0JpQixTQUFTLEdBQUdoQixNQUFwQyxFQUE0QztBQUMxQyxVQUFJQSxNQUFNLEdBQUdELEtBQWIsRUFBb0IsT0FBT0EsS0FBUDtBQUNwQixhQUFPZ0IsUUFBUSxJQUFJZixNQUFNLEdBQUdnQixTQUFiLENBQWY7QUFDRDs7QUFDRCxRQUFJQSxTQUFTLEdBQUdoQixNQUFoQixFQUF3QixPQUFPaUIsSUFBSSxDQUFDQyxHQUFMLENBQVNILFFBQVQsRUFBbUJoQixLQUFuQixLQUE2QkMsTUFBTSxHQUFHZ0IsU0FBdEMsQ0FBUDtBQUN4QixXQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsUUFBVCxFQUFtQmhCLEtBQW5CLENBQVA7QUFDRCxHQVBEOztBQVNBLE1BQU1vQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSixRQUFELEVBQW1CQyxTQUFuQixFQUF5QztBQUN6RCxRQUFJRCxRQUFRLEdBQUdoQixLQUFYLElBQW9CaUIsU0FBUyxHQUFHaEIsTUFBcEMsRUFBNEM7QUFDMUMsVUFBSUEsTUFBTSxHQUFHRCxLQUFiLEVBQW9CLE9BQU9DLE1BQVA7QUFDcEIsYUFBT2dCLFNBQVMsSUFBSWpCLEtBQUssR0FBR2dCLFFBQVosQ0FBaEI7QUFDRDs7QUFDRCxRQUFJQSxRQUFRLEdBQUdoQixLQUFmLEVBQXNCLE9BQU9rQixJQUFJLENBQUNDLEdBQUwsQ0FBU0YsU0FBVCxFQUFvQmhCLE1BQXBCLEtBQStCRCxLQUFLLEdBQUdnQixRQUF2QyxDQUFQO0FBQ3RCLFdBQU9FLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixTQUFULEVBQW9CaEIsTUFBcEIsQ0FBUDtBQUNELEdBUEQ7O0FBU0EsTUFBTWEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixRQUFNTyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkO0FBQ0FELFNBQUssQ0FBQ0UsR0FBTixHQUFZekYsTUFBWjs7QUFDQXVGLFNBQUssQ0FBQ0csTUFBTixHQUFlLFlBQU07QUFDbkIsVUFBTVIsUUFBUSxHQUFHRCxRQUFRLENBQUNNLEtBQUssQ0FBQ3JCLEtBQVAsRUFBY3FCLEtBQUssQ0FBQ3BCLE1BQXBCLENBQXpCO0FBQ0EsVUFBTWdCLFNBQVMsR0FBR0csU0FBUyxDQUFDQyxLQUFLLENBQUNyQixLQUFQLEVBQWNxQixLQUFLLENBQUNwQixNQUFwQixDQUEzQjtBQUVBUyxtQkFBYSxDQUFDTSxRQUFRLEdBQUdLLEtBQUssQ0FBQ3JCLEtBQWxCLENBQWI7QUFDQVksb0JBQWMsQ0FBQ0ssU0FBUyxHQUFHSSxLQUFLLENBQUNwQixNQUFuQixDQUFkO0FBQ0FPLGdCQUFVLENBQUM7QUFBQzlELFNBQUMsRUFBRXNFLFFBQUo7QUFBY3BFLFNBQUMsRUFBRXFFO0FBQWpCLE9BQUQsQ0FBVjtBQUNBOUUsb0JBQWMsQ0FBQztBQUFDTyxTQUFDLEVBQUVzRSxRQUFRLEdBQUcsQ0FBZjtBQUFrQnBFLFNBQUMsRUFBRXFFLFNBQVMsR0FBRztBQUFqQyxPQUFELENBQWQ7QUFDQWhGLGVBQVMsQ0FBQztBQUFDWixTQUFDLEVBQUUyRixRQUFRLEdBQUcsQ0FBZjtBQUFrQjFGLFNBQUMsRUFBRTJGLFNBQVMsR0FBRztBQUFqQyxPQUFELENBQVQ7QUFDRCxLQVREO0FBVUQsR0FiRDs7QUFlQSxNQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQWlCO0FBQ2hDLFFBQU1DLENBQUMsR0FBRzNFLFFBQVEsQ0FBQzRFLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNBRCxLQUFDLENBQUNFLElBQUYsR0FBU0gsR0FBVDtBQUNBQyxLQUFDLENBQUNGLFFBQUYsR0FBYXJCLE9BQWI7QUFDQXVCLEtBQUMsQ0FBQ0csS0FBRjtBQUNBSCxLQUFDLENBQUNJLE1BQUY7QUFDQUMsVUFBTSxDQUFDQyxHQUFQLENBQVdDLGVBQVgsQ0FBMkJSLEdBQTNCO0FBQ0QsR0FQRDs7QUFTQSxNQUFNUyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTUMsTUFBTSxHQUFHcEYsUUFBUSxDQUFDNEUsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsUUFBTVMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLFFBQU1qQixLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkO0FBRUFjLFVBQU0sQ0FBQ3BDLEtBQVAsR0FBZTlELFdBQVcsQ0FBQ1EsQ0FBM0I7QUFDQTBGLFVBQU0sQ0FBQ25DLE1BQVAsR0FBZ0IvRCxXQUFXLENBQUNVLENBQTVCO0FBQ0F5RSxTQUFLLENBQUNFLEdBQU4sR0FBWXpGLE1BQVo7O0FBRUF1RixTQUFLLENBQUNHLE1BQU4sR0FBZSxZQUFNO0FBQ25CLFVBQU1lLEVBQUUsR0FBR3ZGLFFBQVEsQ0FBQzRFLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWDtBQUNBLFVBQU1ZLElBQUksR0FBR0QsRUFBRSxDQUFDRCxVQUFILENBQWMsSUFBZCxDQUFiO0FBQ0FDLFFBQUUsQ0FBQ3ZDLEtBQUgsR0FBV3FCLEtBQUssQ0FBQ3JCLEtBQU4sR0FBY1MsVUFBekI7QUFDQThCLFFBQUUsQ0FBQ3RDLE1BQUgsR0FBWW9CLEtBQUssQ0FBQ3BCLE1BQU4sR0FBZVUsV0FBM0I7QUFDQTZCLFVBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFQyxTQUFOLENBQWdCcEIsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkJrQixFQUFFLENBQUN2QyxLQUFoQyxFQUF1Q3VDLEVBQUUsQ0FBQ3RDLE1BQTFDO0FBRUFvQyxTQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILFlBQUFBLEdBQUcsQ0FBRUksU0FBTCxDQUNFRixFQURGLEVBRUV2RyxNQUFNLENBQUNYLENBRlQsRUFHRVcsTUFBTSxDQUFDVixDQUhULEVBSUVZLFdBQVcsQ0FBQ1EsQ0FKZCxFQUtFUixXQUFXLENBQUNVLENBTGQsRUFNRSxDQU5GLEVBT0UsQ0FQRixFQVFFVixXQUFXLENBQUNRLENBUmQsRUFTRVIsV0FBVyxDQUFDVSxDQVRkO0FBV0E2RSxjQUFRLENBQUNXLE1BQU0sQ0FBQ00sU0FBUCxFQUFELENBQVI7QUFDRCxLQW5CRDtBQW9CRCxHQTdCRDs7QUErQkEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixXQUFPLENBQUNyRSxPQUFPLENBQUNsQixPQUFSLEdBQWtCa0IsT0FBTyxDQUFDbEIsT0FBUixDQUFnQmhCLFNBQWxDLEdBQThDLENBQS9DLEtBQ0ZpRSxXQUFXLENBQUNqRCxPQUFaLDJCQUFzQmlELFdBQVcsQ0FBQ2pELE9BQWxDLHlEQUFzQixxQkFBcUJoQixTQUEzQyxHQUF1RCxDQURyRCxDQUFQO0FBRUQsR0FIRDs7QUFLQSxNQUFNd0csYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLFdBQU8sQ0FBQ3RFLE9BQU8sQ0FBQ2xCLE9BQVIsdUJBQWtCa0IsT0FBTyxDQUFDbEIsT0FBMUIscURBQWtCLGlCQUFpQmYsVUFBbkMsR0FBZ0QsQ0FBakQsS0FDRmdFLFdBQVcsQ0FBQ2pELE9BQVosR0FBc0JpRCxXQUFXLENBQUNqRCxPQUFaLENBQW9CZixVQUExQyxHQUF1RCxDQURyRCxDQUFQO0FBRUQsR0FIRDs7QUFLQSxNQUFJLENBQUNQLE1BQUwsRUFBYSxPQUFPLElBQVA7QUFFYixzQkFDRTtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFd0MsT0FBVjtBQUFtQixlQUFTLEVBQUV4RCxFQUFFLENBQUMsTUFBRCxDQUFoQztBQUNLLFdBQUssRUFBRTtBQUNMa0YsYUFBSyxZQUFLQSxLQUFMLE9BREE7QUFFTEMsY0FBTSxZQUFLQSxNQUFMO0FBRkQsT0FEWjtBQUFBLDZCQU1FO0FBQ0UsV0FBRyxFQUFFSSxXQURQO0FBRUUsaUJBQVMsRUFBRXZGLEVBQUUsQ0FBQyxVQUFELENBRmY7QUFHRSxhQUFLLEVBQUU7QUFDTGtGLGVBQUssWUFBS2pFLE9BQU8sQ0FBQ1csQ0FBYixPQURBO0FBRUx1RCxnQkFBTSxZQUFLbEUsT0FBTyxDQUFDYSxDQUFiO0FBRkQsU0FIVDtBQUFBLGdDQVFFO0FBQUssbUJBQVMsRUFBRTlCLEVBQUUsQ0FBQyxTQUFELENBQWxCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFQSxFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFBRUEsRUFBRSxDQUFDLEtBQUQsQ0FEZjtBQUVFLGlCQUFHLEVBQUVnQixNQUZQO0FBR0UsbUJBQUssRUFBRTtBQUNMa0UscUJBQUssWUFBS2pFLE9BQU8sQ0FBQ1csQ0FBYixPQURBO0FBRUx1RCxzQkFBTSxZQUFLbEUsT0FBTyxDQUFDYSxDQUFiO0FBRkQ7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFxQkUscUVBQUMsa0RBQUQ7QUFDRSxtQkFBUyxFQUFFK0YsWUFBWSxFQUR6QjtBQUVFLG9CQUFVLEVBQUVDLGFBQWEsRUFGM0I7QUFHRSxpQkFBTyxFQUFFN0csT0FIWDtBQUlFLG1CQUFTLEVBQUVFLFNBSmI7QUFLRSx3QkFBYyxFQUFFRTtBQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRixlQTZCRSxxRUFBQyxnREFBRDtBQUNFLG1CQUFTLEVBQUV3RyxZQUFZLEVBRHpCO0FBRUUsb0JBQVUsRUFBRUMsYUFBYSxFQUYzQjtBQUdFLGdCQUFNLEVBQUU5RyxNQUhWO0FBSUUsaUJBQU8sRUFBRUMsT0FKWDtBQUtFLGdCQUFNLEVBQUVDLE1BTFY7QUFNRSxtQkFBUyxFQUFFQyxTQU5iO0FBT0UscUJBQVcsRUFBRUMsV0FQZjtBQVFFLHdCQUFjLEVBQUVDO0FBUmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWtERTtBQUFHLGVBQVMsRUFBRXJCLEVBQUUsQ0FBQyxLQUFELENBQWhCO0FBQXlCLGFBQU8sRUFBRXFILGNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbERGO0FBQUEsa0JBREY7QUFzREQsQ0F6SkQ7O0dBQU1oQyxTOztLQUFBQSxTO0FBMkpTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuZWJkYTUwNTI4OTU2NDcxOGZiNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyBSZWZPYmplY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUG9pbnQsIFNpemUsIE9SSUdJTl9QT0lOVCwgRGlyVHlwZSwgTElORV9ESVIsIFBPSU5UX0RJUiwgY2xhbXAgfSBmcm9tICcuL2RhdGEnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuZnVuY3Rpb24gZGlmZlBvaW50cyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gIHJldHVybiB7IHg6IHAxLnggLSBwMi54LCB5OiBwMS55IC0gcDIueSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludHMocDE6IFBvaW50LCBwMjogUG9pbnQsIG1pblggPSAwLCBtaW5ZID0gMCwgbWF4WCA9IDAsIG1heFkgPSAwKSB7XHJcbiAgY29uc3QgeCA9IHAxLnggKyBwMi54O1xyXG4gIGNvbnN0IHkgPSBwMS55ICsgcDIueTtcclxuICByZXR1cm4geyB4OiBjbGFtcCh4LCBtaW5YLCBtYXhYKSwgeTogY2xhbXAoeSwgbWluWSwgbWF4WSkgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENyb3BCb3hQcm9wcyB7XHJcbiAgaW1nU3JjOiBzdHJpbmc7XHJcbiAgaW1nU2l6ZTogU2l6ZTtcclxuICBvZmZzZXQ6IFBvaW50O1xyXG4gIHNldE9mZnNldDogKG9mZnNldDogKChwcmV2OiBQb2ludCkgPT4gUG9pbnQpIHwgUG9pbnQpID0+IHZvaWQ7XHJcbiAgY3JvcEJveFNpemU6IFNpemU7XHJcbiAgc2V0Q3JvcEJveFNpemU6IChjcm9wQm94U2l6ZTogU2l6ZSkgPT4gdm9pZDtcclxuICBvZmZzZXRUb3A6IG51bWJlcjtcclxuICBvZmZzZXRMZWZ0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IENyb3BCb3ggPSAoXHJcbiAge1xyXG4gICAgaW1nU3JjLFxyXG4gICAgaW1nU2l6ZSxcclxuICAgIG9mZnNldCxcclxuICAgIHNldE9mZnNldCxcclxuICAgIGNyb3BCb3hTaXplLFxyXG4gICAgc2V0Q3JvcEJveFNpemUsXHJcbiAgICBvZmZzZXRUb3AsXHJcbiAgICBvZmZzZXRMZWZ0LFxyXG4gIH06IENyb3BCb3hQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxhc3RNb3VzZVBvc1JlZiA9IHVzZVJlZjxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuXHJcbiAgY29uc3QgZ2V0RWRnZVdpZHRoID0gKCkgPT4gaW1nU2l6ZS53IC0gY3JvcEJveFNpemUudztcclxuICBjb25zdCBnZXRFZGdlSGVpZ2h0ID0gKCkgPT4gaW1nU2l6ZS5oIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYW4gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gICAgbGFzdE1vdXNlUG9zUmVmLmN1cnJlbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb3ZlQ3JvcEJveCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBsYXN0TW91c2VQb3MgPSBsYXN0TW91c2VQb3NSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcclxuICAgIGNvbnN0IG1vdXNlRGlmZiA9IGRpZmZQb2ludHMoY3VycmVudE1vdXNlUG9zLCBsYXN0TW91c2VQb3MpO1xyXG5cclxuICAgIGxhc3RNb3VzZVBvc1JlZi5jdXJyZW50ID0gY3VycmVudE1vdXNlUG9zO1xyXG4gICAgc2V0T2Zmc2V0KChwcmV2T2Zmc2V0KSA9PlxyXG4gICAgICBhZGRQb2ludHMocHJldk9mZnNldCwgbW91c2VEaWZmLCAwLCAwLCBnZXRFZGdlV2lkdGgoKSwgZ2V0RWRnZUhlaWdodCgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BQYW4gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RhcnRTZXRDcm9wQm94ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PiwgZGlyOiBzdHJpbmcpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2V0Jyk7XHJcblxyXG4gICAgY29uc3QgZUxpbmVYID0gb2Zmc2V0LnggKyBjcm9wQm94U2l6ZS53O1xyXG4gICAgY29uc3Qgd0xpbmVYID0gb2Zmc2V0Lng7XHJcbiAgICBjb25zdCBzTGluZVkgPSBvZmZzZXQueSArIGNyb3BCb3hTaXplLmg7XHJcbiAgICBjb25zdCBuTGluZVkgPSBvZmZzZXQueTtcclxuXHJcbiAgICBjb25zdCBzZXRDcm9wQm94ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgeCA9IGUucGFnZVggLSAod3JhcFJlZi5jdXJyZW50ID8gd3JhcFJlZi5jdXJyZW50Py5vZmZzZXRMZWZ0IDogMCk7XHJcbiAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gKHdyYXBSZWYuY3VycmVudCA/IHdyYXBSZWYuY3VycmVudD8ub2Zmc2V0VG9wIDogMCk7XHJcbiAgICAgIHNldEJveCh7IHg6IGNsYW1wKHgsIDAsIGltZ1NpemUudyksIHk6IGNsYW1wKHksIDAsIGltZ1NpemUuaCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ID0gKGN1cnJlbnRNb3VzZVBvczoge3g6IG51bWJlciwgeTogbnVtYmVyfSkgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nyb3NzRUwgPSAhKHdMaW5lWCArIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IGlzQ3Jvc3NXTCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgPiBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3QgaXNDcm9zc1NMID0gIShuTGluZVkgKyBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnkpO1xyXG4gICAgICBjb25zdCBpc0Nyb3NzTkwgPSBzTGluZVkgLSBjcm9wQm94U2l6ZS5oID4gY3VycmVudE1vdXNlUG9zLnk7XHJcblxyXG4gICAgICBjb25zdCBlWE9mZnNldCA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSAob2Zmc2V0LnggLSBjdXJyZW50TW91c2VQb3MueCk7XHJcbiAgICAgIGNvbnN0IHdYT2Zmc2V0ID0gd0xpbmVYIC0gKG9mZnNldC54IC0gY3VycmVudE1vdXNlUG9zLngpO1xyXG4gICAgICBjb25zdCBzWU9mZnNldCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSAob2Zmc2V0LnkgLSBjdXJyZW50TW91c2VQb3MueSk7XHJcbiAgICAgIGNvbnN0IG5ZT2Zmc2V0ID0gbkxpbmVZIC0gKG9mZnNldC55IC0gY3VycmVudE1vdXNlUG9zLnkpO1xyXG5cclxuICAgICAgY29uc3QgZUNyb3NzVyA9IGVMaW5lWCAtIGNyb3BCb3hTaXplLncgLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgd0Nyb3NzVyA9IGN1cnJlbnRNb3VzZVBvcy54IC0gd0xpbmVYIC0gY3JvcEJveFNpemUudztcclxuICAgICAgY29uc3Qgc0Nyb3NzSCA9IHNMaW5lWSAtIGNyb3BCb3hTaXplLmggLSBjdXJyZW50TW91c2VQb3MueTtcclxuICAgICAgY29uc3QgbkNyb3NzSCA9IGN1cnJlbnRNb3VzZVBvcy55IC0gbkxpbmVZIC0gY3JvcEJveFNpemUuaDtcclxuXHJcbiAgICAgIGNvbnN0IGVXID0gY3JvcEJveFNpemUudyArIGN1cnJlbnRNb3VzZVBvcy54IC0gZUxpbmVYO1xyXG4gICAgICBjb25zdCB3VyA9IGNyb3BCb3hTaXplLncgKyB3TGluZVggLSBjdXJyZW50TW91c2VQb3MueDtcclxuICAgICAgY29uc3Qgc0ggPSBjcm9wQm94U2l6ZS5oICsgY3VycmVudE1vdXNlUG9zLnkgLSBzTGluZVk7XHJcbiAgICAgIGNvbnN0IG5IID0gY3JvcEJveFNpemUuaCArIG5MaW5lWSAtIGN1cnJlbnRNb3VzZVBvcy55O1xyXG5cclxuICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IGNyb3BCb3hTaXplLmggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBjcm9wQm94U2l6ZS5oIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBvZmZzZXQueSB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogY3JvcEJveFNpemUudywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBjcm9wQm94U2l6ZS53LCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogb2Zmc2V0LngsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGNyb3BCb3hTaXplLncsIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2UnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NOTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IHNZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NXTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBlWE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZUNyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCwgeTogc1lPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogZVcsIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVXLCBoOiBzSCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N3JzpcclxuICAgICAgICAgIGlmIChpc0Nyb3NzTkwgJiYgaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54ICsgY3JvcEJveFNpemUudywgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0Nyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDcm9zc0VMKSB7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd0Nyb3NzVywgaDogc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NOTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogbllPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNDcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiB3WE9mZnNldCwgeTogb2Zmc2V0LnkgfSk7XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplKHsgdzogd1csIGg6IHNIIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmUnOlxyXG4gICAgICAgICAgaWYgKGlzQ3Jvc3NTTCAmJiBpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlQ3Jvc3NXLCBoOiBuQ3Jvc3NIIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzV0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogZVhPZmZzZXQsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGVDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IG9mZnNldC54LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBlVywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdudyc6XHJcbiAgICAgICAgICBpZiAoaXNDcm9zc1NMICYmIGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5Dcm9zc0ggfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3Jvc3NFTCkge1xyXG4gICAgICAgICAgICBzZXRPZmZzZXQoeyB4OiBvZmZzZXQueCArIGNyb3BCb3hTaXplLncsIHk6IG5ZT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IHdDcm9zc1csIGg6IG5IIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Nyb3NzU0wpIHtcclxuICAgICAgICAgICAgc2V0T2Zmc2V0KHsgeDogd1hPZmZzZXQsIHk6IG9mZnNldC55ICsgY3JvcEJveFNpemUuaCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkNyb3NzSCB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9mZnNldCh7IHg6IHdYT2Zmc2V0LCB5OiBuWU9mZnNldCB9KTtcclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiB3VywgaDogbkggfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BTZXRDcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldENyb3BCb3gpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2V0Q3JvcEJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDcm9wQm94KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BTZXRDcm9wQm94KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERhc2ggPSAoKSA9PiBbJ3cnLCAnaCddLm1hcCgoZGlyKSA9PlxyXG4gICAgPHNwYW4ga2V5PXtkaXJ9IGNsYXNzTmFtZT17Y3goJ2Rhc2gnLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0TGluZSA9ICgpID0+IExJTkVfRElSLm1hcCgoZGlyOiBzdHJpbmcpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgnbGluZScsIGRpcil9IG9uTW91c2VEb3duPXtlID0+IHN0YXJ0U2V0Q3JvcEJveChlLCBkaXIpfSAvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgZ2V0UG9pbnRzID0gKCkgPT4gUE9JTlRfRElSLm1hcCgoZGlyOiBzdHJpbmcpID0+XHJcbiAgICA8c3BhbiBrZXk9e2Rpcn0gY2xhc3NOYW1lPXtjeCgncG9pbnQnLCBkaXIpfSBvbk1vdXNlRG93bj17ZSA9PiBzdGFydFNldENyb3BCb3goZSwgZGlyKX0gLz5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3gnKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogYCR7Y3JvcEJveFNpemUud31weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtjcm9wQm94U2l6ZS5ofXB4YCxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoJHtvZmZzZXQueX1weClgXHJcbiAgICAgIH19XHJcbiAgICA+XHJcblxyXG4gICAgICB7Lyog7J2066+47KeAIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgndmlld0JveCcpfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCd2aWV3SW1nJyl9XHJcbiAgICAgICAgICBzcmM9e2ltZ1NyY31cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7b2Zmc2V0Lnh9cHgpIHRyYW5zbGF0ZVkoLSR7b2Zmc2V0Lnl9cHgpYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcblxyXG4gICAgICB7Lyog6rKp7J6QIOyYgeyXrSAqL31cclxuICAgICAge2dldERhc2goKX1cclxuXHJcbiAgICAgIHsvKiDspJHslZkg7Iut7J6Q6rCAIOyYgeyXrSAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeCgnY3Jvc3MnKX0gLz5cclxuXHJcbiAgICAgIHsvKiDsu6TshJwg7JiB7JetICovfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCdtb3ZlQm94Jyl9IG9uTW91c2VEb3duPXtzdGFydFBhbn0gLz5cclxuXHJcbiAgICAgIHsvKiDrs7TrjZQg7JiB7JetICovfVxyXG4gICAgICB7Z2V0TGluZSgpfVxyXG5cclxuICAgICAgey8qIOygkCDsmIHsl60gKi99XHJcbiAgICAgIHtnZXRQb2ludHMoKX1cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ2Nyb3BCb3hJbmZvJyl9PlxyXG4gICAgICAgIHtvZmZzZXQueH0sIHtvZmZzZXQueX1cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHtjcm9wQm94U2l6ZS53fSwge2Nyb3BCb3hTaXplLmh9IChweClcclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9wQm94OyIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7U2l6ZSwgUG9pbnQsIE9SSUdJTl9QT0lOVCwgT1JJR0lOX1NJWkV9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgRGltbWVkQm94IGZyb20gJy4vRGltbWVkQm94JztcclxuaW1wb3J0IENyb3BCb3ggZnJvbSAnLi9Dcm9wQm94JztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgSW1hZ2VDcm9wUHJvcHMge1xyXG4gIGltZ1NyYzogc3RyaW5nO1xyXG4gIGltZ05hbWU6IHN0cmluZztcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBJbWFnZUNyb3AgPSAoe2ltZ1NyYywgaW1nTmFtZSwgd2lkdGgsIGhlaWdodH06IEltYWdlQ3JvcFByb3BzKSA9PiB7XHJcbiAgY29uc3Qgd3JhcFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgY3JvcEFyZWFSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcbiAgY29uc3QgW3dpZHRoUmF0aW8sIHNldFdpZHRoUmF0aW9dID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbaGVpZ2h0UmF0aW8sIHNldEhlaWdodFJhdGlvXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbiAgfSwgW2ltZ1NyY10pO1xyXG5cclxuXHJcbiAgY29uc3QgZ2V0V2lkdGggPSAoaW1nV2lkdGg6IG51bWJlciwgaW1nSGVpZ2h0OiBudW1iZXIpID0+IHtcclxuICAgIGlmIChpbWdXaWR0aCA+IHdpZHRoICYmIGltZ0hlaWdodCA+IGhlaWdodCkge1xyXG4gICAgICBpZiAoaGVpZ2h0ID4gd2lkdGgpIHJldHVybiB3aWR0aDtcclxuICAgICAgcmV0dXJuIGltZ1dpZHRoICogKGhlaWdodCAvIGltZ0hlaWdodCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW1nSGVpZ2h0ID4gaGVpZ2h0KSByZXR1cm4gTWF0aC5taW4oaW1nV2lkdGgsIHdpZHRoKSAqIChoZWlnaHQgLyBpbWdIZWlnaHQpO1xyXG4gICAgcmV0dXJuIE1hdGgubWluKGltZ1dpZHRoLCB3aWR0aCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRIZWlnaHQgPSAoaW1nV2lkdGg6IG51bWJlciwgaW1nSGVpZ2h0OiBudW1iZXIpID0+IHtcclxuICAgIGlmIChpbWdXaWR0aCA+IHdpZHRoICYmIGltZ0hlaWdodCA+IGhlaWdodCkge1xyXG4gICAgICBpZiAoaGVpZ2h0IDwgd2lkdGgpIHJldHVybiBoZWlnaHQ7XHJcbiAgICAgIHJldHVybiBpbWdIZWlnaHQgKiAod2lkdGggLyBpbWdXaWR0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW1nV2lkdGggPiB3aWR0aCkgcmV0dXJuIE1hdGgubWluKGltZ0hlaWdodCwgaGVpZ2h0KSAqICh3aWR0aCAvIGltZ1dpZHRoKTtcclxuICAgIHJldHVybiBNYXRoLm1pbihpbWdIZWlnaHQsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW1nRWwgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0VsLnNyYyA9IGltZ1NyYztcclxuICAgIGltZ0VsLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgaW1nV2lkdGggPSBnZXRXaWR0aChpbWdFbC53aWR0aCwgaW1nRWwuaGVpZ2h0KTtcclxuICAgICAgY29uc3QgaW1nSGVpZ2h0ID0gZ2V0SGVpZ2h0KGltZ0VsLndpZHRoLCBpbWdFbC5oZWlnaHQpO1xyXG5cclxuICAgICAgc2V0V2lkdGhSYXRpbyhpbWdXaWR0aCAvIGltZ0VsLndpZHRoKTtcclxuICAgICAgc2V0SGVpZ2h0UmF0aW8oaW1nSGVpZ2h0IC8gaW1nRWwuaGVpZ2h0KTtcclxuICAgICAgc2V0SW1nU2l6ZSh7dzogaW1nV2lkdGgsIGg6IGltZ0hlaWdodH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7dzogaW1nV2lkdGggLyAyLCBoOiBpbWdIZWlnaHQgLyAyfSk7XHJcbiAgICAgIHNldE9mZnNldCh7eDogaW1nV2lkdGggLyA0LCB5OiBpbWdIZWlnaHQgLyA0fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkb3dubG9hZCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgYS5ocmVmID0gdXJsO1xyXG4gICAgYS5kb3dubG9hZCA9IGltZ05hbWU7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBhLnJlbW92ZSgpO1xyXG4gICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNvbnN0IGltZ0VsID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcEJveFNpemUudztcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wQm94U2l6ZS5oO1xyXG4gICAgaW1nRWwuc3JjID0gaW1nU3JjO1xyXG5cclxuICAgIGltZ0VsLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY29uc3Qgb2N0eCA9IG9jLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIG9jLndpZHRoID0gaW1nRWwud2lkdGggKiB3aWR0aFJhdGlvO1xyXG4gICAgICBvYy5oZWlnaHQgPSBpbWdFbC5oZWlnaHQgKiBoZWlnaHRSYXRpbztcclxuICAgICAgb2N0eD8uZHJhd0ltYWdlKGltZ0VsLCAwLCAwLCBvYy53aWR0aCwgb2MuaGVpZ2h0KTtcclxuXHJcbiAgICAgIGN0eD8uZHJhd0ltYWdlKFxyXG4gICAgICAgIG9jLFxyXG4gICAgICAgIG9mZnNldC54LFxyXG4gICAgICAgIG9mZnNldC55LFxyXG4gICAgICAgIGNyb3BCb3hTaXplLncsXHJcbiAgICAgICAgY3JvcEJveFNpemUuaCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgY3JvcEJveFNpemUudyxcclxuICAgICAgICBjcm9wQm94U2l6ZS5oLFxyXG4gICAgICApO1xyXG4gICAgICBkb3dubG9hZChjYW52YXMudG9EYXRhVVJMKCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldE9mZnNldFRvcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAod3JhcFJlZi5jdXJyZW50ID8gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcCA6IDApXHJcbiAgICAgICsgKGNyb3BBcmVhUmVmLmN1cnJlbnQgPyBjcm9wQXJlYVJlZi5jdXJyZW50Py5vZmZzZXRUb3AgOiAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE9mZnNldExlZnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKHdyYXBSZWYuY3VycmVudCA/IHdyYXBSZWYuY3VycmVudD8ub2Zmc2V0TGVmdCA6IDApXHJcbiAgICAgICsgKGNyb3BBcmVhUmVmLmN1cnJlbnQgPyBjcm9wQXJlYVJlZi5jdXJyZW50Lm9mZnNldExlZnQgOiAwKTtcclxuICB9XHJcblxyXG4gIGlmICghaW1nU3JjKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgcmVmPXt3cmFwUmVmfSBjbGFzc05hbWU9e2N4KCd3cmFwJyl9XHJcbiAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXHJcbiAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXHJcbiAgICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJlZj17Y3JvcEFyZWFSZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ltZ0JveCcpfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1nU3JjfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8RGltbWVkQm94XHJcbiAgICAgICAgICAgIG9mZnNldFRvcD17Z2V0T2Zmc2V0VG9wKCl9XHJcbiAgICAgICAgICAgIG9mZnNldExlZnQ9e2dldE9mZnNldExlZnQoKX1cclxuICAgICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPENyb3BCb3hcclxuICAgICAgICAgICAgb2Zmc2V0VG9wPXtnZXRPZmZzZXRUb3AoKX1cclxuICAgICAgICAgICAgb2Zmc2V0TGVmdD17Z2V0T2Zmc2V0TGVmdCgpfVxyXG4gICAgICAgICAgICBpbWdTcmM9e2ltZ1NyY31cclxuICAgICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgICAgb2Zmc2V0PXtvZmZzZXR9XHJcbiAgICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgICBjcm9wQm94U2l6ZT17Y3JvcEJveFNpemV9XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxhIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+ZG93bmxvYWQ8L2E+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcDsiXSwic291cmNlUm9vdCI6IiJ9