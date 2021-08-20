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

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // // 2D point 3개
    // // 캔버스 크기가 400x300이라면 이런 식으로 clip space를 screen space로 변환합니다.
    // /*
    // * clip space       screen space
    // * 0, 0       ->   200, 150
    // * 0, 0.5     ->   200, 225
    // * 0.7, 0       ->   340, 150
    // * */
    //
    // var positions = [
    // 	10, 20,
    // 	80, 20,
    // 	10, 30,
    // 	10, 30,
    // 	80, 20,
    // 	80, 30,
    // ];
    //
    //
    // // WebGL은 강력한 type을 가지는 데이터가 필요하므로, new Float32Array(positions)는 새로운 32bit 부동 소수점 배열을 생성
    // // gl.bufferData는 데이터를 GPU의 positionBuffer로 복사합니다.
    // // 위에서 ARRAY_BUFFER bind point로 할당했기 때문에 position buffer를 사용히고 있습니다.
    // // gl.STATIC_DRAW는 데이터를 어떻게 사용할 것인지 WebGL에 알려줍니다.
    // // WebGL은 특정 항목들을 최적화하기 위해 해당 hint를 사용할 수 있는데요.
    // // gl.STATIC_DRAW는 이 데이터가 많이 바뀌지 않을 것 같다고 WebGL에 알려줍니다.
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
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

    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
    /*
    * 그리려는 모든 픽셀에 대해 WebGL은 fragment shader를 호출하는데요.
    * Fragment shader는 gl_FragColor를 1, 0, 0.5, 1로 설정
    * */
  };

  _s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
    return [gl.useProgram];
  });

  var draw = function draw() {};

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
        lineNumber: 174,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "fragment-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// fragment shader\uB294 \uAE30\uBCF8 \uC815\uBC00\uB3C4\uB97C \uAC00\uC9C0\uACE0 \uC788\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.\n\t\t\t\t\t// mediump\uC740 \uC88B\uC740 \uAE30\uBCF8\uAC12\uC73C\uB85C \"\uC911\uAC04 \uC815\uBC00\uB3C4\"\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t\tuniform vec4 u_color;\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// gl_FragColor\uB294 fragment shader\uAC00 \uC124\uC815\uC744 \uB2F4\uB2F9\uD558\uB294 \uD2B9\uC218 \uBCC0\uC218\n\t\t\t\t\t\t// WebGL\uC5D0\uC11C \uC0C9\uC0C1\uC740 0\uC5D0\uC11C 1\uAE4C\uC9C0\uC785\uB2C8\uB2E4.\n\t\t\t\t\t\tgl_FragColor = u_color;\n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      id: 'c'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2ViR0wvcHJhY3RpY2UwMS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJhY3RpY2UwMSIsImNhbnZhcyIsImdsIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicG9zaXRpb25CdWZmZXIiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVuZGVyIiwicmFuZG9tSW50IiwicmFuZ2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRSZWN0YW5nbGUiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwieDEiLCJ4MiIsInkxIiwieTIiLCJidWZmZXJEYXRhIiwiQVJSQVlfQlVGRkVSIiwiRmxvYXQzMkFycmF5IiwiU1RBVElDX0RSQVciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwidGV4dCIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJGUkFHTUVOVF9TSEFERVIiLCJjcmVhdGVQcm9ncmFtIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJjcmVhdGVCdWZmZXIiLCJiaW5kQnVmZmVyIiwid2ViZ2xVdGlscyIsInJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUiLCJ2aWV3cG9ydCIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJ1c2VQcm9ncmFtIiwicmVzb2x1dGlvblVuaWZvcm1Mb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInVuaWZvcm0yZiIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5Iiwic2l6ZSIsInR5cGUiLCJGTE9BVCIsIm5vcm1hbGl6ZSIsInN0cmlkZSIsIm9mZnNldCIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJkcmF3IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBOztBQUN4QixNQUFJQyxNQUFNLEdBQUcsSUFBYjtBQUNBLE1BQUlDLEVBQUUsR0FBRyxJQUFUO0FBQ0EsTUFBSUMsa0JBQWtCLEdBQUcsSUFBekI7QUFDQSxNQUFJQyxvQkFBb0IsR0FBRyxJQUEzQjtBQUNBLE1BQUlDLFlBQVksR0FBRyxJQUFuQjtBQUNBLE1BQUlDLGNBQWMsR0FBRyxJQUFyQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0EsTUFBSUMseUJBQXlCLEdBQUcsSUFBaEM7QUFDQSxNQUFJQyxjQUFjLEdBQUcsSUFBckI7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2ZDLFFBQUk7QUFDSkMsVUFBTTtBQUNOLEdBSFEsQ0FBVCxDQVp3QixDQWtCekI7O0FBQ0MsV0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDekIsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkgsS0FBM0IsQ0FBUDtBQUNBLEdBckJ1QixDQXVCekI7OztBQUNDLFdBQVNJLFlBQVQsQ0FBc0JoQixFQUF0QixFQUEwQmlCLENBQTFCLEVBQTZCQyxDQUE3QixFQUFnQ0MsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQStDO0FBQzlDLFFBQUlDLEVBQUUsR0FBR0osQ0FBVDtBQUNBLFFBQUlLLEVBQUUsR0FBR0wsQ0FBQyxHQUFHRSxLQUFiO0FBQ0EsUUFBSUksRUFBRSxHQUFHTCxDQUFUO0FBQ0EsUUFBSU0sRUFBRSxHQUFHTixDQUFDLEdBQUdFLE1BQWI7QUFDQXBCLE1BQUUsQ0FBQ3lCLFVBQUgsQ0FBY3pCLEVBQUUsQ0FBQzBCLFlBQWpCLEVBQStCLElBQUlDLFlBQUosQ0FBaUIsQ0FDL0NOLEVBRCtDLEVBQzNDRSxFQUQyQyxFQUUvQ0QsRUFGK0MsRUFFM0NDLEVBRjJDLEVBRy9DRixFQUgrQyxFQUczQ0csRUFIMkMsRUFJL0NILEVBSitDLEVBSTNDRyxFQUoyQyxFQUsvQ0YsRUFMK0MsRUFLM0NDLEVBTDJDLEVBTS9DRCxFQU4rQyxFQU0zQ0UsRUFOMkMsQ0FBakIsQ0FBL0IsRUFPSXhCLEVBQUUsQ0FBQzRCLFdBUFA7QUFRQTs7QUFHRCxNQUFNbkIsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBVixVQUFNLEdBQUc4QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtBQUNBOUIsTUFBRSxHQUFHRCxNQUFNLENBQUNnQyxVQUFQLENBQWtCLE9BQWxCLENBQUw7QUFDQSxRQUFJLENBQUMvQixFQUFMLEVBQVMsT0FaUyxDQWNsQjtBQUNBOztBQUNBQyxzQkFBa0IsR0FBRzRCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsRUFBNENFLElBQWpFLENBaEJrQixDQWlCbEI7O0FBQ0E5Qix3QkFBb0IsR0FBRzJCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENFLElBQXJFLENBbEJrQixDQXFCbEI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E3QixnQkFBWSxHQUFHOEIsaUVBQVksQ0FBQ2pDLEVBQUQsRUFBS0EsRUFBRSxDQUFDa0MsYUFBUixFQUF1QmpDLGtCQUF2QixDQUEzQjtBQUNBRyxrQkFBYyxHQUFHNkIsaUVBQVksQ0FBQ2pDLEVBQUQsRUFBS0EsRUFBRSxDQUFDbUMsZUFBUixFQUF5QmpDLG9CQUF6QixDQUE3QjtBQUNBRyxXQUFPLEdBQUcrQixrRUFBYSxDQUFDcEMsRUFBRCxFQUFLRyxZQUFMLEVBQW1CQyxjQUFuQixDQUF2QixDQTNCa0IsQ0E4QmxCO0FBQ0E7QUFDQTs7QUFDQUUsNkJBQXlCLEdBQUdOLEVBQUUsQ0FBQ3FDLGlCQUFILENBQXFCaEMsT0FBckIsRUFBOEIsWUFBOUIsQ0FBNUI7QUFDQUUsa0JBQWMsR0FBR1AsRUFBRSxDQUFDc0MsWUFBSCxFQUFqQixDQWxDa0IsQ0FvQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUNBdEMsTUFBRSxDQUFDdUMsVUFBSCxDQUFjdkMsRUFBRSxDQUFDMEIsWUFBakIsRUFBK0JuQixjQUEvQixFQXhDa0IsQ0EyQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxHQXRFRDs7QUF5RUEsTUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNwQjtBQUNBO0FBQ0E4QixjQUFVLENBQUNDLHlCQUFYLENBQXFDekMsRUFBRSxDQUFDRCxNQUF4QyxFQUhvQixDQUtwQjtBQUNBO0FBQ0E7O0FBQ0FDLE1BQUUsQ0FBQzBDLFFBQUgsQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQjFDLEVBQUUsQ0FBQ0QsTUFBSCxDQUFVb0IsS0FBNUIsRUFBbUNuQixFQUFFLENBQUNELE1BQUgsQ0FBVXFCLE1BQTdDLEVBUm9CLENBV3BCOztBQUNBcEIsTUFBRSxDQUFDMkMsVUFBSCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkI7QUFDQTNDLE1BQUUsQ0FBQzRDLEtBQUgsQ0FBUzVDLEVBQUUsQ0FBQzZDLGdCQUFaLEVBYm9CLENBZXBCOztBQUNBN0MsTUFBRSxDQUFDOEMsVUFBSCxDQUFjekMsT0FBZDtBQUNBLFFBQUkwQyx5QkFBeUIsR0FBRy9DLEVBQUUsQ0FBQ2dELGtCQUFILENBQXNCM0MsT0FBdEIsRUFBK0IsY0FBL0IsQ0FBaEM7QUFFQUwsTUFBRSxDQUFDaUQsU0FBSCxDQUFhRix5QkFBYixFQUF3Qy9DLEVBQUUsQ0FBQ0QsTUFBSCxDQUFVb0IsS0FBbEQsRUFBeURuQixFQUFFLENBQUNELE1BQUgsQ0FBVXFCLE1BQW5FLEVBbkJvQixDQXFCcEI7QUFDQTs7QUFDQXBCLE1BQUUsQ0FBQ2tELHVCQUFILENBQTJCNUMseUJBQTNCLEVBdkJvQixDQXlCcEI7O0FBQ0FOLE1BQUUsQ0FBQ3VDLFVBQUgsQ0FBY3ZDLEVBQUUsQ0FBQzBCLFlBQWpCLEVBQStCbkIsY0FBL0IsRUExQm9CLENBNEJwQjs7QUFDQSxRQUFJNEMsSUFBSSxHQUFHLENBQVgsQ0E3Qm9CLENBNkJHOztBQUN2QixRQUFJQyxJQUFJLEdBQUdwRCxFQUFFLENBQUNxRCxLQUFkLENBOUJvQixDQThCRzs7QUFDdkIsUUFBSUMsU0FBUyxHQUFHLEtBQWhCLENBL0JvQixDQStCRzs7QUFDdkIsUUFBSUMsTUFBTSxHQUFHLENBQWIsQ0FoQ29CLENBZ0NHOztBQUN2QixRQUFJQyxNQUFNLEdBQUcsQ0FBYixDQWpDb0IsQ0FpQ0c7QUFFdkI7QUFDQTtBQUNBOztBQUNBeEQsTUFBRSxDQUFDeUQsbUJBQUgsQ0FDQ25ELHlCQURELEVBQzRCNkMsSUFENUIsRUFDa0NDLElBRGxDLEVBQ3dDRSxTQUR4QyxFQUNtREMsTUFEbkQsRUFDMkRDLE1BRDNEO0FBS0E7QUFDRjtBQUNBO0FBQ0E7QUFDRSxHQS9DRDs7QUFqSHdCLEtBaUhsQjlDLE1BakhrQjtBQUFBLFlBaUl2QlYsRUFBRSxDQUFDOEMsVUFqSW9CO0FBQUE7O0FBa0t4QixNQUFNWSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBRWxCLENBRkQ7O0FBSUEsc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFBLDhCQUNDO0FBQVEsVUFBRSxFQUFDLGtCQUFYO0FBQThCLFlBQUksRUFBQyxPQUFuQztBQUEyQywrQkFBdUIsRUFBRTtBQUNuRUMsZ0JBQU07QUFENkQ7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBc0JDO0FBQVEsVUFBRSxFQUFDLG9CQUFYO0FBQWdDLFlBQUksRUFBQyxPQUFyQztBQUE2QywrQkFBdUIsRUFBRTtBQUNyRUEsZ0JBQU07QUFEK0Q7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQXNDQztBQUFRLFFBQUUsRUFBRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEwQ0EsQ0FoTkQ7O0lBQU03RCxVOztLQUFBQSxVO0FBa05TQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93ZWJHTC5kZWQzZWY1ZDQ4MjA5YWJkNzgwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVByb2dyYW0sIGNyZWF0ZVNoYWRlcn0gZnJvbSBcIi4uL2NvbW1vbi91dGlsXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IFByYWN0aWNlMDEgPSAoKSA9PiB7XHJcblx0bGV0IGNhbnZhcyA9IG51bGw7XHJcblx0bGV0IGdsID0gbnVsbDtcclxuXHRsZXQgdmVydGV4U2hhZGVyU291cmNlID0gbnVsbDtcclxuXHRsZXQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBudWxsO1xyXG5cdGxldCB2ZXJ0ZXhTaGFkZXIgPSBudWxsO1xyXG5cdGxldCBmcmFnbWVudFNoYWRlciA9IG51bGw7XHJcblx0bGV0IHByb2dyYW0gPSBudWxsO1xyXG5cdGxldCBwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gbnVsbDtcclxuXHRsZXQgcG9zaXRpb25CdWZmZXIgPSBudWxsO1xyXG5cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGluaXQoKTtcclxuXHRcdHJlbmRlcigpO1xyXG5cdH0pO1xyXG5cclxuXHJcbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBmcm9tIDAgdG8gcmFuZ2UgLSAxLlxyXG5cdGZ1bmN0aW9uIHJhbmRvbUludChyYW5nZSkge1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKTtcclxuXHR9XHJcblxyXG4vLyBGaWxsIHRoZSBidWZmZXIgd2l0aCB0aGUgdmFsdWVzIHRoYXQgZGVmaW5lIGEgcmVjdGFuZ2xlLlxyXG5cdGZ1bmN0aW9uIHNldFJlY3RhbmdsZShnbCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0dmFyIHgxID0geDtcclxuXHRcdHZhciB4MiA9IHggKyB3aWR0aDtcclxuXHRcdHZhciB5MSA9IHk7XHJcblx0XHR2YXIgeTIgPSB5ICsgaGVpZ2h0O1xyXG5cdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoW1xyXG5cdFx0XHR4MSwgeTEsXHJcblx0XHRcdHgyLCB5MSxcclxuXHRcdFx0eDEsIHkyLFxyXG5cdFx0XHR4MSwgeTIsXHJcblx0XHRcdHgyLCB5MSxcclxuXHRcdFx0eDIsIHkyLFxyXG5cdFx0XSksIGdsLlNUQVRJQ19EUkFXKTtcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdCBpbml0ID0gKCkgPT4ge1xyXG5cdFx0Ly8gR0xTTOuKlCBDIOyWuOyWtOulvCDquLDstIjroZwg7ZWcLCDsg4HsnIQg66CI67KoIOyFsOydtOuUqSDslrjslrTsnbTri6QuXHJcblx0XHQvLyBSYXN0ZXJpemF0aW9uKOugiOyKpO2EsO2ZlCktIOuwse2EsCDqt7jrnpjtlL0g7J2066+47KeA66W8IOu5hOuUlOyYpCDrlJTsiqTtlIzroIjsnbTrgpgg7ZSE66aw7YSwIOuTseydmCDrnpjsiqTthLAg65SU67CU7J207Iqk7JeQIOy2nOugpe2VmOq4sCDsnITtlbQg656Y7Iqk7YSwIOydtOuvuOyngOuhnCDrs4DtmZjtlZjripQg6rKDXHJcblxyXG5cdFx0Ly8gV2ViR0zsnYAgR1BV7JeQ7IScIOyLpO2WieuQqC4g65Sw65287IScIEdQVeyXkOyEnCDsi6TtlonrkJjripQg7L2U65Oc66W8IOygnOqzte2VtOyVvO2VqeuLiOuLpC5cclxuXHRcdC8vIO2VtOuLuSDsvZTrk5zripQg7ZWo7IiYIOyMjSDtmJXtg5zroZwg7KCc6rO17ZW07JW87ZWY64qU642wXHJcblx0XHQvLyDsnbQg65GQIO2VqOyImOuKlCB2ZXJ0ZXggc2hhZGVy7JmAIGZyYWdtZW50IHNoYWRlcuuhnCDrtojrpqzqs6AgQy9DKyvsspjrn7wg7JeE6rKp7ZWcIFR5cGXsnYQg6rCA7KeA64qUIEdMU0zroZwg7J6R7ISx65CY7Ja0IOyeiOyKteuLiOuLpC5cclxuXHRcdC8vIOydtCDrkZAg6rCc66W8IO2VqeyzkOyEnCBwcm9ncmFt7J2065286rOgIOu2gOumheuLiOuLpC5cclxuXHJcblx0XHQvLyBHZXQgQSBXZWJHTCBjb250ZXh0XHJcblx0XHRjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NcIik7XHJcblx0XHRnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcblx0XHRpZiAoIWdsKSByZXR1cm47XHJcblxyXG5cdFx0Ly8gR2V0IHRoZSBzdHJpbmdzIGZvciBvdXIgR0xTTCBzaGFkZXJzXHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHR2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZlcnRleC1zaGFkZXItMmRcIikudGV4dDtcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdGZyYWdtZW50U2hhZGVyU291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmcmFnbWVudC1zaGFkZXItMmRcIikudGV4dDtcclxuXHJcblxyXG5cdFx0Ly8gY3JlYXRlIEdMU0wgc2hhZGVycywgdXBsb2FkIHRoZSBHTFNMIHNvdXJjZSwgY29tcGlsZSB0aGUgc2hhZGVyc1xyXG5cdFx0Ly8gdmVydGV4U2hhZGVyIC0g7KKM7ZGc66W8IOygnOqztSwg7KCV7KCQIOychOy5mOulvCDqs4TsgrBcclxuXHRcdC8vIGZyYWdtZW50U2hhZGVyIC0g7IOJ7IOB7J2EIOygnOqztSwg7ZiE7J6sIOq3uOugpOyngOuKlCBwcmltaXRpdmXsnZgg6rCBIO2UveyFgOyXkCDrjIDtlZwg7IOJ7IOB7J2EIOqzhOyCsFxyXG5cdFx0Ly8g65GQIOqwnOulvCDtlanss5DshJwgcHJvZ3JhbVxyXG5cdFx0dmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xyXG5cdFx0ZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xyXG5cdFx0cHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuXHJcblx0XHQvLyDrqLzsoIAg7ZW07JW8IO2VoCDsnbzsnYAg67Cp6riIIOyDneyEseuQnCBwcm9ncmFt7JeQIOuMgO2VnCBhdHRyaWJ1dGXsnZggbG9jYXRpb27rpbwg7LC+64qUIOqyg1xyXG5cdFx0Ly8gQXR0cmlidXRlIGxvY2F0aW9uKOq3uOumrOqzoCB1bmlmb3JtIGxvY2F0aW9uKeydhCDssL7ripQg6rKD7J2AIOugjOuNlOunge2VoCDrlYzqsIAg7JWE64uI6528IOy0iOq4sO2ZlO2VmOuKlCDrj5nslYgg7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdC8vIEF0dHJpYnV0ZeuKlCDrsoTtjbzroZzrtoDthLAg642w7J207YSw66W8IOqwgOyguOyYpOuvgOuhnCDrsoTtjbzrpbwg7IOd7ISx7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBcImFfcG9zaXRpb25cIik7XHJcblx0XHRwb3NpdGlvbkJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG5cclxuXHRcdC8vIGJpbmQgcG9pbnTripQgV2ViR0wg7JWI7JeQIOyeiOuKlCDrgrTrtoAg7KCE7JetIOuzgOyImFxyXG5cdFx0Ly8g66i87KCAIGJpbmQgcG9pbnTsl5Ag7J6Q7JuQ7J2EIO2VoOuLue2VqeyLnOuLpC4g6re465+s66m0IOuqqOuToCDtlajsiJjqsIAgYmluZCBwb2ludOulvCDthrXtlbQg7J6Q7JuQ7J2EIOywuOyhsO2VqeuLiOuLpC5cclxuXHRcdC8vIEJpbmQgaXQgdG8gQVJSQVlfQlVGRkVSICh0aGluayBvZiBpdCBhcyBBUlJBWV9CVUZGRVIgPSBwb3NpdGlvbkJ1ZmZlcilcclxuXHRcdC8vIOydtOygnCBiaW5kIHBvaW5066W8IO2Gte2VtCDtlbTri7kg67KE7Y2866W8IOywuOyhsO2VtOyEnCDrjbDsnbTthLDrpbwg64Sj7J2EIOyImCDsnojsirXri4jri6QuXHJcblx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpO1xyXG5cclxuXHJcblx0XHQvLyAvLyAyRCBwb2ludCAz6rCcXHJcblx0XHQvLyAvLyDsupTrsoTsiqQg7YGs6riw6rCAIDQwMHgzMDDsnbTrnbzrqbQg7J2065+wIOyLneycvOuhnCBjbGlwIHNwYWNl66W8IHNjcmVlbiBzcGFjZeuhnCDrs4DtmZjtlanri4jri6QuXHJcblx0XHQvLyAvKlxyXG5cdFx0Ly8gKiBjbGlwIHNwYWNlICAgICAgIHNjcmVlbiBzcGFjZVxyXG5cdFx0Ly8gKiAwLCAwICAgICAgIC0+ICAgMjAwLCAxNTBcclxuXHRcdC8vICogMCwgMC41ICAgICAtPiAgIDIwMCwgMjI1XHJcblx0XHQvLyAqIDAuNywgMCAgICAgICAtPiAgIDM0MCwgMTUwXHJcblx0XHQvLyAqICovXHJcblx0XHQvL1xyXG5cdFx0Ly8gdmFyIHBvc2l0aW9ucyA9IFtcclxuXHRcdC8vIFx0MTAsIDIwLFxyXG5cdFx0Ly8gXHQ4MCwgMjAsXHJcblx0XHQvLyBcdDEwLCAzMCxcclxuXHRcdC8vIFx0MTAsIDMwLFxyXG5cdFx0Ly8gXHQ4MCwgMjAsXHJcblx0XHQvLyBcdDgwLCAzMCxcclxuXHRcdC8vIF07XHJcblx0XHQvL1xyXG5cdFx0Ly9cclxuXHRcdC8vIC8vIFdlYkdM7J2AIOqwleugpe2VnCB0eXBl7J2EIOqwgOyngOuKlCDrjbDsnbTthLDqsIAg7ZWE7JqU7ZWY66+A66GcLCBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucynripQg7IOI66Gc7Jq0IDMyYml0IOu2gOuPmSDshozsiJjsoJAg67Cw7Je07J2EIOyDneyEsVxyXG5cdFx0Ly8gLy8gZ2wuYnVmZmVyRGF0YeuKlCDrjbDsnbTthLDrpbwgR1BV7J2YIHBvc2l0aW9uQnVmZmVy66GcIOuzteyCrO2VqeuLiOuLpC5cclxuXHRcdC8vIC8vIOychOyXkOyEnCBBUlJBWV9CVUZGRVIgYmluZCBwb2ludOuhnCDtlaDri7ntlojquLAg65WM66y47JeQIHBvc2l0aW9uIGJ1ZmZlcuulvCDsgqzsmqntnojqs6Ag7J6I7Iq164uI64ukLlxyXG5cdFx0Ly8gLy8gZ2wuU1RBVElDX0RSQVfripQg642w7J207YSw66W8IOyWtOuWu+qyjCDsgqzsmqntlaAg6rKD7J247KeAIFdlYkdM7JeQIOyVjOugpOykjeuLiOuLpC5cclxuXHRcdC8vIC8vIFdlYkdM7J2AIO2KueyglSDtla3rqqnrk6TsnYQg7LWc7KCB7ZmU7ZWY6riwIOychO2VtCDtlbTri7kgaGludOulvCDsgqzsmqntlaAg7IiYIOyeiOuKlOuNsOyalC5cclxuXHRcdC8vIC8vIGdsLlNUQVRJQ19EUkFX64qUIOydtCDrjbDsnbTthLDqsIAg66eO7J20IOuwlOuAjOyngCDslYrsnYQg6rKDIOqwmeuLpOqzoCBXZWJHTOyXkCDslYzroKTspI3ri4jri6QuXHJcblx0XHQvLyBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcblx0XHQvLyDsgqzsmqkg6rCA64ql7ZWcIOqzteqwhOydhCDssYTsmrDquLAg7JyE7ZW0IENTU+uhnCDtgazquLDrpbwg6rKw7KCV7ZWcIOuLpOydjCDsnbzsuZjtlZjrj4TroZ0g7KGw7KCVXHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHR3ZWJnbFV0aWxzLnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoZ2wuY2FudmFzKTtcclxuXHJcblx0XHQvLyBnbF9Qb3NpdGlvbuycvOuhnCDshKTsoJXtlaAgY2xpcCBzcGFjZSDqsJLsnYQg7Ja065a76rKMIHNjcmVlbiBzcGFjZeuhnCDrs4DtmZjtlZjripTsp4AgV2ViR0zsl5Ag7JWM66Ck7KSY7JW8IO2VmOuKlOuNsOyalC5cclxuXHRcdC8vIOydtOulvCDsnITtlbQgZ2wudmlld3BvcnTrpbwg7Zi47Lac7ZW07IScIO2YhOyerCDsupTrsoTsiqQg7YGs6riw66W8IOyghOuLrO2VtOyVvCDtlanri4jri6QuXHJcblx0XHQvLyDsnbTripQgLTEgPC0+ICsxIGNsaXAgc3BhY2XrpbwsIHjripQgMCA8LT4gZ2wuY2FudmFzLndpZHRo66GcLCB564qUIDAgPC0+IGdsLmNhbnZhcy5oZWlnaHTroZwg66ek7ZWR7Iuc7Lyc7KSN64uI64ukLlxyXG5cdFx0Z2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcblxyXG5cdFx0Ly8gQ2xlYXIgdGhlIGNhbnZhc1xyXG5cdFx0Z2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcclxuXHRcdGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuXHRcdC8vIOyLpO2Wie2VoCBzaGFkZXIgcHJvZ3JhbeydhCBXZWJHTOyXkCDslYzroKTspI3ri4jri6QuXHJcblx0XHRnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG5cdFx0dmFyIHJlc29sdXRpb25Vbmlmb3JtTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1X3Jlc29sdXRpb25cIik7XHJcblxyXG5cdFx0Z2wudW5pZm9ybTJmKHJlc29sdXRpb25Vbmlmb3JtTG9jYXRpb24sIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcblxyXG5cdFx0Ly8g7JyE7JeQ7IScIOyEpOygle2VnCDrsoTtjbzsl5DshJwg642w7J207YSw66W8IOqwgOyguOyZgCBzaGFkZXLsnZggYXR0cmlidXRl7JeQIOygnOqzte2VmOuKlCDrsKnrspXsnYQgV2ViR0zsl5Ag7JWM66Ck7KSY7JW8IO2VmOuKlOuNsCxcclxuXHRcdC8vIOyasOyEoCBhdHRyaWJ1dGXrpbwg7Zmc7ISx7ZmU7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24pO1xyXG5cclxuXHRcdC8vIOuNsOydtO2EsOulvCDslrTrlrvqsowg6rq864K87KeAIOyngOygle2VqeuLiOuLpC5cclxuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcblxyXG5cdFx0Ly8gcG9zaXRpb25CdWZmZXIoQVJSQVlfQlVGRkVSKeydmCDrjbDsnbTthLDrpbwg6rq864K07Jik64qUIOuwqeuyleydhCBhdHRyaWJ1dGXsl5Ag7KeA7IucXHJcblx0XHR2YXIgc2l6ZSA9IDI7ICAgICAgICAgIC8vIOuwmOuzteuniOuLpCAy6rCc7J2YIOy7tO2PrOuEjO2KuFxyXG5cdFx0dmFyIHR5cGUgPSBnbC5GTE9BVDsgICAvLyDrjbDsnbTthLDripQgMzJiaXQgZmxvYXRcclxuXHRcdHZhciBub3JtYWxpemUgPSBmYWxzZTsgLy8g642w7J207YSwIOygleq3nO2ZlCDslYgg7ZWoXHJcblx0XHR2YXIgc3RyaWRlID0gMDsgICAgICAgIC8vIDAgPSDri6TsnYwg7JyE7LmY66W8IOqwgOyguOyYpOq4sCDsnITtlbQg67CY67O166eI64ukIHNpemUgKiBzaXplb2YodHlwZSkg66eM7YG8IOyVnuycvOuhnCDsnbTrj5lcclxuXHRcdHZhciBvZmZzZXQgPSAwOyAgICAgICAgLy8g67KE7Y287J2YIOyymOydjOu2gO2EsCDsi5zsnpFcclxuXHJcblx0XHQvLyBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVy7J2YIOyIqOqyqOynhCDrtoDrtoTsnYAg7ZiE7J6sIOuwlOyduOuUqeuQnCBBUlJBWV9CVUZGRVLrpbwgYXR0cmlidXRl7JeQIO2VoOuLue2VnOuLpOuKlCDqsoHri4jri6QuXHJcblx0XHQvLyDsnbQgYXR0cmlidXRl64qUIOydtOygnCBwb3NpdGlvbkJ1ZmZlcuyXkCDrsJTsnbjrlKnrkKnri4jri6QuXHJcblx0XHQvLyDsnbTqsbQgQVJSQVlfQlVGRkVSIGJpbmQgcG9pbnTsl5Ag64uk66W4IOqyg+uTpOydhCDsnpDsnKDroa3qsowg7ZWg64u57ZWgIOyImCDsnojri6TripQg6rG4IOydmOuvuFxyXG5cdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuXHRcdFx0cG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XHJcblxyXG5cdFx0XHJcblxyXG5cdFx0LypcclxuXHRcdCog6re466as66Ck64qUIOuqqOuToCDtlL3shYDsl5Ag64yA7ZW0IFdlYkdM7J2AIGZyYWdtZW50IHNoYWRlcuulvCDtmLjstpztlZjripTrjbDsmpQuXHJcblx0XHQqIEZyYWdtZW50IHNoYWRlcuuKlCBnbF9GcmFnQ29sb3LrpbwgMSwgMCwgMC41LCAx66GcIOyEpOyglVxyXG5cdFx0KiAqL1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRyYXcgPSAoKSA9PiB7XHJcblxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8c2NyaXB0IGlkPVwidmVydGV4LXNoYWRlci0yZFwiIHR5cGU9XCJub3Rqc1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcblx0XHRcdFx0XHRfX2h0bWw6IGBcclxuXHRcdFx0XHRcdC8vIEF0dHJpYnV0ZeuKlCDrsoTtjbzsl5DshJwg642w7J207YSw66W8IOuwm+ydjFxyXG4gIFx0XHRcdFx0XHQvLyDrqqjrk6Agc2hhZGVy64qUIG1haW4g7ZWo7IiY66W8IOqwgOynkFxyXG4gIFx0XHRcdFx0XHRhdHRyaWJ1dGUgdmVjMiBhX3Bvc2l0aW9uO1xyXG4gIFx0XHRcdFx0XHR1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xyXG4gIFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8g7JyE7LmY66W8IO2UveyFgOyXkOyEnCAwLjDqs7wgMS4w7IKs7J2066GcIOuzgO2ZmFxyXG4gICAgXHRcdFx0XHRcdHZlYzIgemVyb1RvT25lID0gYV9wb3NpdGlvbiAvIHVfcmVzb2x1dGlvbjtcclxuIFxyXG5cdFx0XHRcdFx0XHQvLyAwLT4x7JeQ7IScIDAtPjLroZwg67OA7ZmYXHJcblx0XHRcdFx0XHRcdHZlYzIgemVyb1RvVHdvID0gemVyb1RvT25lICogMi4wO1xyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHQvLyAwLT4y7JeQ7IScIC0xLT4rMeuhnCDrs4DtmZggKGNsaXAgc3BhY2UpXHJcblx0XHRcdFx0XHRcdHZlYzIgY2xpcFNwYWNlID0gemVyb1RvVHdvIC0gMS4wO1xyXG5cdFx0XHRcdFx0IFxyXG4gIFx0XHRcdFx0XHRcdGdsX1Bvc2l0aW9uID0gdmVjNChjbGlwU3BhY2UgKiB2ZWMyKDEsIC0xKSwgMCwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YFxyXG5cdFx0XHRcdH19Lz5cclxuXHRcdFx0XHQ8c2NyaXB0IGlkPVwiZnJhZ21lbnQtc2hhZGVyLTJkXCIgdHlwZT1cIm5vdGpzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdF9faHRtbDogYFxyXG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgc2hhZGVy64qUIOq4sOuzuCDsoJXrsIDrj4Trpbwg6rCA7KeA6rOgIOyeiOyngCDslYrsnLzrr4DroZwg7ZWY64KY66W8IOyEoO2Dne2VtOyVvCDtlanri4jri6QuXHJcblx0XHRcdFx0XHQvLyBtZWRpdW1w7J2AIOyii+ydgCDquLDrs7jqsJLsnLzroZwgXCLspJHqsIQg7KCV67CA64+EXCLrpbwg7J2Y66+47ZWp64uI64ukLlxyXG5cdFx0XHRcdFx0cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblx0XHRcdFx0XHR1bmlmb3JtIHZlYzQgdV9jb2xvcjtcclxuXHRcdFx0XHRcdHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ2xfRnJhZ0NvbG9y64qUIGZyYWdtZW50IHNoYWRlcuqwgCDshKTsoJXsnYQg64u064u57ZWY64qUIO2KueyImCDrs4DsiJhcclxuXHRcdFx0XHRcdFx0Ly8gV2ViR0zsl5DshJwg7IOJ7IOB7J2AIDDsl5DshJwgMeq5jOyngOyeheuLiOuLpC5cclxuXHRcdFx0XHRcdFx0Z2xfRnJhZ0NvbG9yID0gdV9jb2xvcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgXHJcblx0XHRcdFx0fX0vPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdHsvKkNsaXAgc3BhY2Ug7KKM7ZGc64qUIOy6lOuyhOyKpCDtgazquLDsl5Ag7IOB6rSA7JeG7J20IO2VreyDgSAtMeyXkOyEnCArMeq5jOyngOyeheuLiOuLpC4qL31cclxuXHRcdFx0PGNhbnZhcyBpZD17J2MnfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljZTAxO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9