webpackHotUpdate_N_E("pages/webGL",{

/***/ "./src/components/webGL/practice01/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/webGL/practice01/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ "./src/components/webGL/common/util.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\webGL\\practice01\\index.tsx",
    _this = undefined,
    _s2 = $RefreshSig$();





var Practice01 = function Practice01() {
  _s2();

  var _s = $RefreshSig$();

  var canvas = null;
  var gl = null;
  var vertexShaderSource = null;
  var fragmentShaderSource = null;
  var vertexShader = null;
  var fragmentShader = null;
  var program = null;
  var positionAttributeLocation = null;
  var positionBuffer = null;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
    render();
  }); // Returns a random integer from 0 to range - 1.

  function randomInt(range) {
    return Math.floor(Math.random() * range);
  } // Fill the buffer with the values that define a rectangle.


  function setRectangle(gl, x, y, width, height) {
    var x1 = x;
    var x2 = x + width;
    var y1 = y;
    var y2 = y + height;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW);
  }

  var init = function init() {
    // GLSL는 C 언어를 기초로 한, 상위 레벨 셰이딩 언어이다.
    // Rasterization(레스터화)- 백터 그래픽 이미지를 비디오 디스플레이나 프린터 등의 래스터 디바이스에 출력하기 위해 래스터 이미지로 변환하는 것
    // WebGL은 GPU에서 실행됨. 따라서 GPU에서 실행되는 코드를 제공해야합니다.
    // 해당 코드는 함수 쌍 형태로 제공해야하는데
    // 이 두 함수는 vertex shader와 fragment shader로 불리고 C/C++처럼 엄격한 Type을 가지는 GLSL로 작성되어 있습니다.
    // 이 두 개를 합쳐서 program이라고 부릅니다.
    // Get A WebGL context
    canvas = document.querySelector("#c");
    gl = canvas.getContext("webgl");
    if (!gl) return; // Get the strings for our GLSL shaders
    // @ts-ignore

    vertexShaderSource = document.querySelector("#vertex-shader-2d").text; // @ts-ignore

    fragmentShaderSource = document.querySelector("#fragment-shader-2d").text; // create GLSL shaders, upload the GLSL source, compile the shaders
    // vertexShader - 좌표를 제공, 정점 위치를 계산
    // fragmentShader - 색상을 제공, 현재 그려지는 primitive의 각 픽셀에 대한 색상을 계산
    // 두 개를 합쳐서 program

    vertexShader = Object(_common_util__WEBPACK_IMPORTED_MODULE_2__["createShader"])(gl, gl.VERTEX_SHADER, vertexShaderSource);
    fragmentShader = Object(_common_util__WEBPACK_IMPORTED_MODULE_2__["createShader"])(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    program = Object(_common_util__WEBPACK_IMPORTED_MODULE_2__["createProgram"])(gl, vertexShader, fragmentShader); // 먼저 해야 할 일은 방금 생성된 program에 대한 attribute의 location를 찾는 것
    // Attribute location(그리고 uniform location)을 찾는 것은 렌더링할 때가 아니라 초기화하는 동안 해야 합니다.
    // Attribute는 버퍼로부터 데이터를 가져오므로 버퍼를 생성해야 합니다.

    positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    positionBuffer = gl.createBuffer(); // bind point는 WebGL 안에 있는 내부 전역 변수
    // 먼저 bind point에 자원을 할당합시다. 그러면 모든 함수가 bind point를 통해 자원을 참조합니다.
    // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
    // 이제 bind point를 통해 해당 버퍼를 참조해서 데이터를 넣을 수 있습니다.

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // 2D point 3개
    // 캔버스 크기가 400x300이라면 이런 식으로 clip space를 screen space로 변환합니다.

    /*
    * clip space       screen space
    * 0, 0       ->   200, 150
    * 0, 0.5     ->   200, 225
    * 0.7, 0       ->   340, 150
    * */

    var positions = [10, 20, 80, 20, 10, 30, 10, 30, 80, 20, 80, 30]; // WebGL은 강력한 type을 가지는 데이터가 필요하므로, new Float32Array(positions)는 새로운 32bit 부동 소수점 배열을 생성
    // gl.bufferData는 데이터를 GPU의 positionBuffer로 복사합니다.
    // 위에서 ARRAY_BUFFER bind point로 할당했기 때문에 position buffer를 사용히고 있습니다.
    // gl.STATIC_DRAW는 데이터를 어떻게 사용할 것인지 WebGL에 알려줍니다.
    // WebGL은 특정 항목들을 최적화하기 위해 해당 hint를 사용할 수 있는데요.
    // gl.STATIC_DRAW는 이 데이터가 많이 바뀌지 않을 것 같다고 WebGL에 알려줍니다.

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  };

  var render = function render() {
    _s();

    // 사용 가능한 공간을 채우기 위해 CSS로 크기를 결정한 다음 일치하도록 조정
    // @ts-ignore
    webglUtils.resizeCanvasToDisplaySize(gl.canvas); // gl_Position으로 설정할 clip space 값을 어떻게 screen space로 변환하는지 WebGL에 알려줘야 하는데요.
    // 이를 위해 gl.viewport를 호출해서 현재 캔버스 크기를 전달해야 합니다.
    // 이는 -1 <-> +1 clip space를, x는 0 <-> gl.canvas.width로, y는 0 <-> gl.canvas.height로 매핑시켜줍니다.

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); // Clear the canvas

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT); // 실행할 shader program을 WebGL에 알려줍니다.

    gl.useProgram(program);
    var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height); // 위에서 설정한 버퍼에서 데이터를 가져와 shader의 attribute에 제공하는 방법을 WebGL에 알려줘야 하는데,
    // 우선 attribute를 활성화해야 합니다.

    gl.enableVertexAttribArray(positionAttributeLocation); // 데이터를 어떻게 꺼낼지 지정합니다.

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // positionBuffer(ARRAY_BUFFER)의 데이터를 꺼내오는 방법을 attribute에 지시

    var size = 2; // 반복마다 2개의 컴포넌트

    var type = gl.FLOAT; // 데이터는 32bit float

    var normalize = false; // 데이터 정규화 안 함

    var stride = 0; // 0 = 다음 위치를 가져오기 위해 반복마다 size * sizeof(type) 만큼 앞으로 이동

    var offset = 0; // 버퍼의 처음부터 시작
    // gl.vertexAttribPointer의 숨겨진 부분은 현재 바인딩된 ARRAY_BUFFER를 attribute에 할당한다는 겁니다.
    // 이 attribute는 이제 positionBuffer에 바인딩됩니다.
    // 이건 ARRAY_BUFFER bind point에 다른 것들을 자유롭게 할당할 수 있다는 걸 의미

    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset); // draw

    /*
    * count가 3이기 때문에 vertex shader를 세 번 실행할 겁니다.
    * 먼저 vertex shader attribute의
    * a_position.x와 a_position.y가 positionBuffer의 처음 2개의 값으로 설정됩니다.
    * 두 번째로 a_position.x와 a_position.y가 그다음 2개의 값으로 설정됩니다.
    * 마지막에는 남아있는 2개의 값으로 설정됩니다.
    * primitiveType을 gl.TRIANGLES로 설정했기 때문에,
    * vertex shader가 3번 실행될 때마다,
    * WebGL은 gl_Position에 설정한 3개의 값을 기반으로 삼각형을 그리는데요.
    * 캔버스 크기에 상관없이 이 값들은 -1에서 1사이의 clip space 좌표 안에 있습니다.
    * */

    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 6;
    gl.drawArrays(primitiveType, offset, count);
    /*
    * 그리려는 모든 픽셀에 대해 WebGL은 fragment shader를 호출하는데요.
    * Fragment shader는 gl_FragColor를 1, 0, 0.5, 1로 설정
    * */
  };

  _s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
    return [gl.useProgram];
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "vertex-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// Attribute\uB294 \uBC84\uD37C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBC1B\uC74C\n  \t\t\t\t\t// \uBAA8\uB4E0 shader\uB294 main \uD568\uC218\uB97C \uAC00\uC9D0\n  \t\t\t\t\tattribute vec2 a_position;\n  \t\t\t\t\tuniform vec2 u_resolution;\n  \t\t\t\t\t\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// \uC704\uCE58\uB97C \uD53D\uC140\uC5D0\uC11C 0.0\uACFC 1.0\uC0AC\uC774\uB85C \uBCC0\uD658\n    \t\t\t\t\tvec2 zeroToOne = a_position / u_resolution;\n \n\t\t\t\t\t\t// 0->1\uC5D0\uC11C 0->2\uB85C \uBCC0\uD658\n\t\t\t\t\t\tvec2 zeroToTwo = zeroToOne * 2.0;\n\t\t\t\t\t \n\t\t\t\t\t\t// 0->2\uC5D0\uC11C -1->+1\uB85C \uBCC0\uD658 (clip space)\n\t\t\t\t\t\tvec2 clipSpace = zeroToTwo - 1.0;\n\t\t\t\t\t \n  \t\t\t\t\t\tgl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "fragment-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// fragment shader\uB294 \uAE30\uBCF8 \uC815\uBC00\uB3C4\uB97C \uAC00\uC9C0\uACE0 \uC788\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.\n\t\t\t\t\t// mediump\uC740 \uC88B\uC740 \uAE30\uBCF8\uAC12\uC73C\uB85C \"\uC911\uAC04 \uC815\uBC00\uB3C4\"\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t\tuniform vec4 u_color;\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// gl_FragColor\uB294 fragment shader\uAC00 \uC124\uC815\uC744 \uB2F4\uB2F9\uD558\uB294 \uD2B9\uC218 \uBCC0\uC218\n\t\t\t\t\t\t// WebGL\uC5D0\uC11C \uC0C9\uC0C1\uC740 0\uC5D0\uC11C 1\uAE4C\uC9C0\uC785\uB2C8\uB2E4.\n\t\t\t\t\t\tgl_FragColor = u_color;\n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      id: 'c'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 3
  }, _this);
};

_s2(Practice01, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Practice01;
/* harmony default export */ __webpack_exports__["default"] = (Practice01);

var _c;

$RefreshReg$(_c, "Practice01");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2ViR0wvcHJhY3RpY2UwMS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJhY3RpY2UwMSIsImNhbnZhcyIsImdsIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicG9zaXRpb25CdWZmZXIiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVuZGVyIiwicmFuZG9tSW50IiwicmFuZ2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRSZWN0YW5nbGUiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwieDEiLCJ4MiIsInkxIiwieTIiLCJidWZmZXJEYXRhIiwiQVJSQVlfQlVGRkVSIiwiRmxvYXQzMkFycmF5IiwiU1RBVElDX0RSQVciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwidGV4dCIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJGUkFHTUVOVF9TSEFERVIiLCJjcmVhdGVQcm9ncmFtIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJjcmVhdGVCdWZmZXIiLCJiaW5kQnVmZmVyIiwicG9zaXRpb25zIiwid2ViZ2xVdGlscyIsInJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUiLCJ2aWV3cG9ydCIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJ1c2VQcm9ncmFtIiwicmVzb2x1dGlvblVuaWZvcm1Mb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInVuaWZvcm0yZiIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5Iiwic2l6ZSIsInR5cGUiLCJGTE9BVCIsIm5vcm1hbGl6ZSIsInN0cmlkZSIsIm9mZnNldCIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJwcmltaXRpdmVUeXBlIiwiVFJJ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QUFxQ0ksS0FBckM7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNFLEdBOUREOztBQWpId0IsS0FpSGxCbkQsTUFqSGtCO0FBQUEsWUFpSXZCVixFQUFFLENBQUMrQyxVQWpJb0I7QUFBQTs7QUFpTHhCLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFRLFVBQUUsRUFBQyxrQkFBWDtBQUE4QixZQUFJLEVBQUMsT0FBbkM7QUFBMkMsK0JBQXVCLEVBQUU7QUFDbkVnQixnQkFBTTtBQUQ2RDtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFzQkM7QUFBUSxVQUFFLEVBQUMsb0JBQVg7QUFBZ0MsWUFBSSxFQUFDLE9BQXJDO0FBQTZDLCtCQUF1QixFQUFFO0FBQ3JFQSxnQkFBTTtBQUQrRDtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBc0NDO0FBQVEsUUFBRSxFQUFFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTBDQSxDQTNORDs7SUFBTWpFLFU7O0tBQUFBLFU7QUE2TlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dlYkdMLmRlM2U2ZTk1ZDVlMGM0MGY4NGQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUHJvZ3JhbSwgY3JlYXRlU2hhZGVyfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgUHJhY3RpY2UwMSA9ICgpID0+IHtcclxuXHRsZXQgY2FudmFzID0gbnVsbDtcclxuXHRsZXQgZ2wgPSBudWxsO1xyXG5cdGxldCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBudWxsO1xyXG5cdGxldCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG51bGw7XHJcblx0bGV0IHZlcnRleFNoYWRlciA9IG51bGw7XHJcblx0bGV0IGZyYWdtZW50U2hhZGVyID0gbnVsbDtcclxuXHRsZXQgcHJvZ3JhbSA9IG51bGw7XHJcblx0bGV0IHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBudWxsO1xyXG5cdGxldCBwb3NpdGlvbkJ1ZmZlciA9IG51bGw7XHJcblxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW5pdCgpO1xyXG5cdFx0cmVuZGVyKCk7XHJcblx0fSk7XHJcblxyXG5cclxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGZyb20gMCB0byByYW5nZSAtIDEuXHJcblx0ZnVuY3Rpb24gcmFuZG9tSW50KHJhbmdlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpO1xyXG5cdH1cclxuXHJcbi8vIEZpbGwgdGhlIGJ1ZmZlciB3aXRoIHRoZSB2YWx1ZXMgdGhhdCBkZWZpbmUgYSByZWN0YW5nbGUuXHJcblx0ZnVuY3Rpb24gc2V0UmVjdGFuZ2xlKGdsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHR2YXIgeDEgPSB4O1xyXG5cdFx0dmFyIHgyID0geCArIHdpZHRoO1xyXG5cdFx0dmFyIHkxID0geTtcclxuXHRcdHZhciB5MiA9IHkgKyBoZWlnaHQ7XHJcblx0XHRnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbXHJcblx0XHRcdHgxLCB5MSxcclxuXHRcdFx0eDIsIHkxLFxyXG5cdFx0XHR4MSwgeTIsXHJcblx0XHRcdHgxLCB5MixcclxuXHRcdFx0eDIsIHkxLFxyXG5cdFx0XHR4MiwgeTIsXHJcblx0XHRdKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcblx0XHQvLyBHTFNM64qUIEMg7Ja47Ja066W8IOq4sOy0iOuhnCDtlZwsIOyDgeychCDroIjrsqgg7IWw7J2065SpIOyWuOyWtOydtOuLpC5cclxuXHRcdC8vIFJhc3Rlcml6YXRpb24o66CI7Iqk7YSw7ZmUKS0g67Cx7YSwIOq3uOuemO2UvSDsnbTrr7jsp4Drpbwg67mE65SU7JikIOuUlOyKpO2UjOugiOydtOuCmCDtlITrprDthLAg65Ox7J2YIOuemOyKpO2EsCDrlJTrsJTsnbTsiqTsl5Ag7Lac66Cl7ZWY6riwIOychO2VtCDrnpjsiqTthLAg7J2066+47KeA66GcIOuzgO2ZmO2VmOuKlCDqsoNcclxuXHJcblx0XHQvLyBXZWJHTOydgCBHUFXsl5DshJwg7Iuk7ZaJ65CoLiDrlLDrnbzshJwgR1BV7JeQ7IScIOyLpO2WieuQmOuKlCDsvZTrk5zrpbwg7KCc6rO17ZW07JW87ZWp64uI64ukLlxyXG5cdFx0Ly8g7ZW064u5IOy9lOuTnOuKlCDtlajsiJgg7IyNIO2Yle2DnOuhnCDsoJzqs7XtlbTslbztlZjripTrjbBcclxuXHRcdC8vIOydtCDrkZAg7ZWo7IiY64qUIHZlcnRleCBzaGFkZXLsmYAgZnJhZ21lbnQgc2hhZGVy66GcIOu2iOumrOqzoCBDL0MrK+yymOufvCDsl4TqsqntlZwgVHlwZeydhCDqsIDsp4DripQgR0xTTOuhnCDsnpHshLHrkJjslrQg7J6I7Iq164uI64ukLlxyXG5cdFx0Ly8g7J20IOuRkCDqsJzrpbwg7ZWp7LOQ7IScIHByb2dyYW3snbTrnbzqs6Ag67aA66aF64uI64ukLlxyXG5cclxuXHRcdC8vIEdldCBBIFdlYkdMIGNvbnRleHRcclxuXHRcdGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY1wiKTtcclxuXHRcdGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuXHRcdGlmICghZ2wpIHJldHVybjtcclxuXHJcblx0XHQvLyBHZXQgdGhlIHN0cmluZ3MgZm9yIG91ciBHTFNMIHNoYWRlcnNcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHZlcnRleFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmVydGV4LXNoYWRlci0yZFwiKS50ZXh0O1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0ZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZyYWdtZW50LXNoYWRlci0yZFwiKS50ZXh0O1xyXG5cclxuXHJcblx0XHQvLyBjcmVhdGUgR0xTTCBzaGFkZXJzLCB1cGxvYWQgdGhlIEdMU0wgc291cmNlLCBjb21waWxlIHRoZSBzaGFkZXJzXHJcblx0XHQvLyB2ZXJ0ZXhTaGFkZXIgLSDsooztkZzrpbwg7KCc6rO1LCDsoJXsoJAg7JyE7LmY66W8IOqzhOyCsFxyXG5cdFx0Ly8gZnJhZ21lbnRTaGFkZXIgLSDsg4nsg4HsnYQg7KCc6rO1LCDtmITsnqwg6re466Ck7KeA64qUIHByaW1pdGl2ZeydmCDqsIEg7ZS97IWA7JeQIOuMgO2VnCDsg4nsg4HsnYQg6rOE7IKwXHJcblx0XHQvLyDrkZAg6rCc66W8IO2VqeyzkOyEnCBwcm9ncmFtXHJcblx0XHR2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNoYWRlclNvdXJjZSk7XHJcblx0XHRmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XHJcblx0XHRwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG5cclxuXHRcdC8vIOuovOyggCDtlbTslbwg7ZWgIOydvOydgCDrsKnquIgg7IOd7ISx65CcIHByb2dyYW3sl5Ag64yA7ZWcIGF0dHJpYnV0ZeydmCBsb2NhdGlvbuulvCDssL7ripQg6rKDXHJcblx0XHQvLyBBdHRyaWJ1dGUgbG9jYXRpb24o6re466as6rOgIHVuaWZvcm0gbG9jYXRpb24p7J2EIOywvuuKlCDqsoPsnYAg66CM642U66eB7ZWgIOuVjOqwgCDslYTri4jrnbwg7LSI6riw7ZmU7ZWY64qUIOuPmeyViCDtlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0Ly8gQXR0cmlidXRl64qUIOuyhO2NvOuhnOu2gO2EsCDrjbDsnbTthLDrpbwg6rCA7KC47Jik66+A66GcIOuyhO2NvOulvCDsg53shLHtlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0cG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcclxuXHRcdHBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcblxyXG5cdFx0Ly8gYmluZCBwb2ludOuKlCBXZWJHTCDslYjsl5Ag7J6I64qUIOuCtOu2gCDsoITsl60g67OA7IiYXHJcblx0XHQvLyDrqLzsoIAgYmluZCBwb2ludOyXkCDsnpDsm5DsnYQg7ZWg64u57ZWp7Iuc64ukLiDqt7jrn6zrqbQg66qo65OgIO2VqOyImOqwgCBiaW5kIHBvaW5066W8IO2Gte2VtCDsnpDsm5DsnYQg7LC47KGw7ZWp64uI64ukLlxyXG5cdFx0Ly8gQmluZCBpdCB0byBBUlJBWV9CVUZGRVIgKHRoaW5rIG9mIGl0IGFzIEFSUkFZX0JVRkZFUiA9IHBvc2l0aW9uQnVmZmVyKVxyXG5cdFx0Ly8g7J207KCcIGJpbmQgcG9pbnTrpbwg7Ya17ZW0IO2VtOuLuSDrsoTtjbzrpbwg7LC47KGw7ZW07IScIOuNsOydtO2EsOulvCDrhKPsnYQg7IiYIOyeiOyKteuLiOuLpC5cclxuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcblxyXG5cclxuXHRcdC8vIDJEIHBvaW50IDPqsJxcclxuXHRcdC8vIOy6lOuyhOyKpCDtgazquLDqsIAgNDAweDMwMOydtOudvOuptCDsnbTrn7Ag7Iud7Jy866GcIGNsaXAgc3BhY2Xrpbwgc2NyZWVuIHNwYWNl66GcIOuzgO2ZmO2VqeuLiOuLpC5cclxuXHRcdC8qXHJcblx0XHQqIGNsaXAgc3BhY2UgICAgICAgc2NyZWVuIHNwYWNlXHJcblx0XHQqIDAsIDAgICAgICAgLT4gICAyMDAsIDE1MFxyXG5cdFx0KiAwLCAwLjUgICAgIC0+ICAgMjAwLCAyMjVcclxuXHRcdCogMC43LCAwICAgICAgIC0+ICAgMzQwLCAxNTBcclxuXHRcdCogKi9cclxuXHJcblx0XHR2YXIgcG9zaXRpb25zID0gW1xyXG5cdFx0XHQxMCwgMjAsXHJcblx0XHRcdDgwLCAyMCxcclxuXHRcdFx0MTAsIDMwLFxyXG5cdFx0XHQxMCwgMzAsXHJcblx0XHRcdDgwLCAyMCxcclxuXHRcdFx0ODAsIDMwLFxyXG5cdFx0XTtcclxuXHJcblxyXG5cdFx0Ly8gV2ViR0zsnYAg6rCV66Cl7ZWcIHR5cGXsnYQg6rCA7KeA64qUIOuNsOydtO2EsOqwgCDtlYTsmpTtlZjrr4DroZwsIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKeuKlCDsg4jroZzsmrQgMzJiaXQg67aA64+ZIOyGjOyImOygkCDrsLDsl7TsnYQg7IOd7ISxXHJcblx0XHQvLyBnbC5idWZmZXJEYXRh64qUIOuNsOydtO2EsOulvCBHUFXsnZggcG9zaXRpb25CdWZmZXLroZwg67O17IKs7ZWp64uI64ukLlxyXG5cdFx0Ly8g7JyE7JeQ7IScIEFSUkFZX0JVRkZFUiBiaW5kIHBvaW5066GcIO2VoOuLue2WiOq4sCDrlYzrrLjsl5AgcG9zaXRpb24gYnVmZmVy66W8IOyCrOyaqe2eiOqzoCDsnojsirXri4jri6QuXHJcblx0XHQvLyBnbC5TVEFUSUNfRFJBV+uKlCDrjbDsnbTthLDrpbwg7Ja065a76rKMIOyCrOyaqe2VoCDqsoPsnbjsp4AgV2ViR0zsl5Ag7JWM66Ck7KSN64uI64ukLlxyXG5cdFx0Ly8gV2ViR0zsnYAg7Yq57KCVIO2VreuqqeuTpOydhCDstZzsoIHtmZTtlZjquLAg7JyE7ZW0IO2VtOuLuSBoaW5066W8IOyCrOyaqe2VoCDsiJgg7J6I64qU642w7JqULlxyXG5cdFx0Ly8gZ2wuU1RBVElDX0RSQVfripQg7J20IOuNsOydtO2EsOqwgCDrp47snbQg67CU64CM7KeAIOyViuydhCDqsoMg6rCZ64uk6rOgIFdlYkdM7JeQIOyVjOugpOykjeuLiOuLpC5cclxuXHRcdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyksIGdsLlNUQVRJQ19EUkFXKTtcclxuXHJcblx0fTtcclxuXHJcblxyXG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuXHRcdC8vIOyCrOyaqSDqsIDriqXtlZwg6rO16rCE7J2EIOyxhOyasOq4sCDsnITtlbQgQ1NT66GcIO2BrOq4sOulvCDqsrDsoJXtlZwg64uk7J2MIOydvOy5mO2VmOuPhOuhnSDsobDsoJVcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHdlYmdsVXRpbHMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShnbC5jYW52YXMpO1xyXG5cclxuXHRcdC8vIGdsX1Bvc2l0aW9u7Jy866GcIOyEpOygle2VoCBjbGlwIHNwYWNlIOqwkuydhCDslrTrlrvqsowgc2NyZWVuIHNwYWNl66GcIOuzgO2ZmO2VmOuKlOyngCBXZWJHTOyXkCDslYzroKTspJjslbwg7ZWY64qU642w7JqULlxyXG5cdFx0Ly8g7J2066W8IOychO2VtCBnbC52aWV3cG9ydOulvCDtmLjstpztlbTshJwg7ZiE7J6sIOy6lOuyhOyKpCDtgazquLDrpbwg7KCE64us7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdC8vIOydtOuKlCAtMSA8LT4gKzEgY2xpcCBzcGFjZeulvCwgeOuKlCAwIDwtPiBnbC5jYW52YXMud2lkdGjroZwsIHnripQgMCA8LT4gZ2wuY2FudmFzLmhlaWdodOuhnCDrp6TtlZHsi5zsvJzspI3ri4jri6QuXHJcblx0XHRnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuXHJcblx0XHQvLyBDbGVhciB0aGUgY2FudmFzXHJcblx0XHRnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xyXG5cdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG5cdFx0Ly8g7Iuk7ZaJ7ZWgIHNoYWRlciBwcm9ncmFt7J2EIFdlYkdM7JeQIOyVjOugpOykjeuLiOuLpC5cclxuXHRcdGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcblx0XHR2YXIgcmVzb2x1dGlvblVuaWZvcm1Mb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVfcmVzb2x1dGlvblwiKTtcclxuXHJcblx0XHRnbC51bmlmb3JtMmYocmVzb2x1dGlvblVuaWZvcm1Mb2NhdGlvbiwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcblx0XHQvLyDsnITsl5DshJwg7ISk7KCV7ZWcIOuyhO2NvOyXkOyEnCDrjbDsnbTthLDrpbwg6rCA7KC47JmAIHNoYWRlcuydmCBhdHRyaWJ1dGXsl5Ag7KCc6rO17ZWY64qUIOuwqeuyleydhCBXZWJHTOyXkCDslYzroKTspJjslbwg7ZWY64qU642wLFxyXG5cdFx0Ly8g7Jqw7ISgIGF0dHJpYnV0ZeulvCDtmZzshLHtmZTtlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbik7XHJcblxyXG5cdFx0Ly8g642w7J207YSw66W8IOyWtOuWu+qyjCDqurzrgrzsp4Ag7KeA7KCV7ZWp64uI64ukLlxyXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuXHJcblx0XHQvLyBwb3NpdGlvbkJ1ZmZlcihBUlJBWV9CVUZGRVIp7J2YIOuNsOydtO2EsOulvCDqurzrgrTsmKTripQg67Cp67KV7J2EIGF0dHJpYnV0ZeyXkCDsp4Dsi5xcclxuXHRcdHZhciBzaXplID0gMjsgICAgICAgICAgLy8g67CY67O166eI64ukIDLqsJzsnZgg7Lu07Y+s64SM7Yq4XHJcblx0XHR2YXIgdHlwZSA9IGdsLkZMT0FUOyAgIC8vIOuNsOydtO2EsOuKlCAzMmJpdCBmbG9hdFxyXG5cdFx0dmFyIG5vcm1hbGl6ZSA9IGZhbHNlOyAvLyDrjbDsnbTthLAg7KCV6rec7ZmUIOyViCDtlahcclxuXHRcdHZhciBzdHJpZGUgPSAwOyAgICAgICAgLy8gMCA9IOuLpOydjCDsnITsuZjrpbwg6rCA7KC47Jik6riwIOychO2VtCDrsJjrs7Xrp4jri6Qgc2l6ZSAqIHNpemVvZih0eXBlKSDrp4ztgbwg7JWe7Jy866GcIOydtOuPmVxyXG5cdFx0dmFyIG9mZnNldCA9IDA7ICAgICAgICAvLyDrsoTtjbzsnZgg7LKY7J2M67aA7YSwIOyLnOyekVxyXG5cclxuXHRcdC8vIGdsLnZlcnRleEF0dHJpYlBvaW50ZXLsnZgg7Iio6rKo7KeEIOu2gOu2hOydgCDtmITsnqwg67CU7J2465Sp65CcIEFSUkFZX0JVRkZFUuulvCBhdHRyaWJ1dGXsl5Ag7ZWg64u57ZWc64uk64qUIOqygeuLiOuLpC5cclxuXHRcdC8vIOydtCBhdHRyaWJ1dGXripQg7J207KCcIHBvc2l0aW9uQnVmZmVy7JeQIOuwlOyduOuUqeuQqeuLiOuLpC5cclxuXHRcdC8vIOydtOqxtCBBUlJBWV9CVUZGRVIgYmluZCBwb2ludOyXkCDri6Trpbgg6rKD65Ok7J2EIOyekOycoOuhreqyjCDtlaDri7ntlaAg7IiYIOyeiOuLpOuKlCDqsbgg7J2Y66+4XHJcblx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG5cdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBzaXplLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcclxuXHJcblx0XHQvLyBkcmF3XHJcblx0XHQvKlxyXG5cdFx0KiBjb3VudOqwgCAz7J206riwIOuVjOusuOyXkCB2ZXJ0ZXggc2hhZGVy66W8IOyEuCDrsogg7Iuk7ZaJ7ZWgIOqygeuLiOuLpC5cclxuXHRcdCog66i87KCAIHZlcnRleCBzaGFkZXIgYXR0cmlidXRl7J2YXHJcblx0XHQqIGFfcG9zaXRpb24ueOyZgCBhX3Bvc2l0aW9uLnnqsIAgcG9zaXRpb25CdWZmZXLsnZgg7LKY7J2MIDLqsJzsnZgg6rCS7Jy866GcIOyEpOygleuQqeuLiOuLpC5cclxuXHRcdCog65GQIOuyiOynuOuhnCBhX3Bvc2l0aW9uLnjsmYAgYV9wb3NpdGlvbi556rCAIOq3uOuLpOydjCAy6rCc7J2YIOqwkuycvOuhnCDshKTsoJXrkKnri4jri6QuXHJcblx0XHQqIOuniOyngOunieyXkOuKlCDrgqjslYTsnojripQgMuqwnOydmCDqsJLsnLzroZwg7ISk7KCV65Cp64uI64ukLlxyXG5cdFx0KiBwcmltaXRpdmVUeXBl7J2EIGdsLlRSSUFOR0xFU+uhnCDshKTsoJXtlojquLAg65WM66y47JeQLFxyXG5cdFx0KiB2ZXJ0ZXggc2hhZGVy6rCAIDPrsogg7Iuk7ZaJ65CgIOuVjOuniOuLpCxcclxuXHRcdCogV2ViR0zsnYAgZ2xfUG9zaXRpb27sl5Ag7ISk7KCV7ZWcIDPqsJzsnZgg6rCS7J2EIOq4sOuwmOycvOuhnCDsgrzqsIHtmJXsnYQg6re466as64qU642w7JqULlxyXG5cdFx0KiDsupTrsoTsiqQg7YGs6riw7JeQIOyDgeq0gOyXhuydtCDsnbQg6rCS65Ok7J2AIC0x7JeQ7IScIDHsgqzsnbTsnZggY2xpcCBzcGFjZSDsooztkZwg7JWI7JeQIOyeiOyKteuLiOuLpC5cclxuXHRcdCogKi9cclxuXHRcdHZhciBwcmltaXRpdmVUeXBlID0gZ2wuVFJJQU5HTEVTO1xyXG5cdFx0dmFyIG9mZnNldCA9IDA7XHJcblx0XHR2YXIgY291bnQgPSA2O1xyXG5cdFx0Z2wuZHJhd0FycmF5cyhwcmltaXRpdmVUeXBlLCBvZmZzZXQsIGNvdW50KTtcclxuXHJcblx0XHQvKlxyXG5cdFx0KiDqt7jrpqzroKTripQg66qo65OgIO2UveyFgOyXkCDrjIDtlbQgV2ViR0zsnYAgZnJhZ21lbnQgc2hhZGVy66W8IO2YuOy2nO2VmOuKlOuNsOyalC5cclxuXHRcdCogRnJhZ21lbnQgc2hhZGVy64qUIGdsX0ZyYWdDb2xvcuulvCAxLCAwLCAwLjUsIDHroZwg7ISk7KCVXHJcblx0XHQqICovXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDxzY3JpcHQgaWQ9XCJ2ZXJ0ZXgtc2hhZGVyLTJkXCIgdHlwZT1cIm5vdGpzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdF9faHRtbDogYFxyXG5cdFx0XHRcdFx0Ly8gQXR0cmlidXRl64qUIOuyhO2NvOyXkOyEnCDrjbDsnbTthLDrpbwg67Cb7J2MXHJcbiAgXHRcdFx0XHRcdC8vIOuqqOuToCBzaGFkZXLripQgbWFpbiDtlajsiJjrpbwg6rCA7KeQXHJcbiAgXHRcdFx0XHRcdGF0dHJpYnV0ZSB2ZWMyIGFfcG9zaXRpb247XHJcbiAgXHRcdFx0XHRcdHVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XHJcbiAgXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dm9pZCBtYWluKCkge1xyXG5cdFx0XHRcdFx0XHQvLyDsnITsuZjrpbwg7ZS97IWA7JeQ7IScIDAuMOqzvCAxLjDsgqzsnbTroZwg67OA7ZmYXHJcbiAgICBcdFx0XHRcdFx0dmVjMiB6ZXJvVG9PbmUgPSBhX3Bvc2l0aW9uIC8gdV9yZXNvbHV0aW9uO1xyXG4gXHJcblx0XHRcdFx0XHRcdC8vIDAtPjHsl5DshJwgMC0+MuuhnCDrs4DtmZhcclxuXHRcdFx0XHRcdFx0dmVjMiB6ZXJvVG9Ud28gPSB6ZXJvVG9PbmUgKiAyLjA7XHJcblx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdC8vIDAtPjLsl5DshJwgLTEtPisx66GcIOuzgO2ZmCAoY2xpcCBzcGFjZSlcclxuXHRcdFx0XHRcdFx0dmVjMiBjbGlwU3BhY2UgPSB6ZXJvVG9Ud28gLSAxLjA7XHJcblx0XHRcdFx0XHQgXHJcbiAgXHRcdFx0XHRcdFx0Z2xfUG9zaXRpb24gPSB2ZWM0KGNsaXBTcGFjZSAqIHZlYzIoMSwgLTEpLCAwLCAxKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgXHJcblx0XHRcdFx0fX0vPlxyXG5cdFx0XHRcdDxzY3JpcHQgaWQ9XCJmcmFnbWVudC1zaGFkZXItMmRcIiB0eXBlPVwibm90anNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0X19odG1sOiBgXHJcblx0XHRcdFx0XHQvLyBmcmFnbWVudCBzaGFkZXLripQg6riw67O4IOygleuwgOuPhOulvCDqsIDsp4Dqs6Ag7J6I7KeAIOyViuycvOuvgOuhnCDtlZjrgpjrpbwg7ISg7YOd7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdFx0XHRcdC8vIG1lZGl1bXDsnYAg7KKL7J2AIOq4sOuzuOqwkuycvOuhnCBcIuykkeqwhCDsoJXrsIDrj4RcIuulvCDsnZjrr7jtlanri4jri6QuXHJcblx0XHRcdFx0XHRwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHRcdFx0XHRcdHVuaWZvcm0gdmVjNCB1X2NvbG9yO1xyXG5cdFx0XHRcdFx0dm9pZCBtYWluKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBnbF9GcmFnQ29sb3LripQgZnJhZ21lbnQgc2hhZGVy6rCAIOyEpOygleydhCDri7Tri7ntlZjripQg7Yq57IiYIOuzgOyImFxyXG5cdFx0XHRcdFx0XHQvLyBXZWJHTOyXkOyEnCDsg4nsg4HsnYAgMOyXkOyEnCAx6rmM7KeA7J6F64uI64ukLlxyXG5cdFx0XHRcdFx0XHRnbF9GcmFnQ29sb3IgPSB1X2NvbG9yO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGBcclxuXHRcdFx0XHR9fS8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0ey8qQ2xpcCBzcGFjZSDsooztkZzripQg7LqU67KE7IqkIO2BrOq4sOyXkCDsg4HqtIDsl4bsnbQg7ZWt7IOBIC0x7JeQ7IScICsx6rmM7KeA7J6F64uI64ukLiovfVxyXG5cdFx0XHQ8Y2FudmFzIGlkPXsnYyd9Lz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNlMDE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=