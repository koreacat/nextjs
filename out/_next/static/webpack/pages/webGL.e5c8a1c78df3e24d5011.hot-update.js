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
    draw();
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

    gl.useProgram(program); // 위에서 설정한 버퍼에서 데이터를 가져와 shader의 attribute에 제공하는 방법을 WebGL에 알려줘야 하는데,
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
    var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
  };

  _s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
    return [gl.useProgram];
  });

  var draw = function draw() {
    for (var ii = 0; ii < 50; ++ii) {
      // Setup a random rectangle
      // This will write to positionBuffer because
      // its the last thing we bound on the ARRAY_BUFFER
      // bind point
      setRectangle(gl, randomInt(300), randomInt(300), randomInt(300), randomInt(300)); // Set a random color.

      gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1); // Draw the rectangle.

      var primitiveType = gl.TRIANGLES;
      var offset = 0;
      var count = 6;
      gl.drawArrays(primitiveType, offset, count);
    }
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2ViR0wvcHJhY3RpY2UwMS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJhY3RpY2UwMSIsImNhbnZhcyIsImdsIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicG9zaXRpb25CdWZmZXIiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVuZGVyIiwiZHJhdyIsInJhbmRvbUludCIsInJhbmdlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0UmVjdGFuZ2xlIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIngxIiwieDIiLCJ5MSIsInkyIiwiYnVmZmVyRGF0YSIsIkFSUkFZX0JVRkZFUiIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsInRleHQiLCJjcmVhdGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwiY3JlYXRlUHJvZ3JhbSIsImdldEF0dHJpYkxvY2F0aW9uIiwiY3JlYXRlQnVmZmVyIiwiYmluZEJ1ZmZlciIsIndlYmdsVXRpbHMiLCJyZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplIiwidmlld3BvcnQiLCJjbGVhckNvbG9yIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwidXNlUHJvZ3JhbSIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5Iiwic2l6ZSIsInR5cGUiLCJGTE9BVCIsIm5vcm1hbGl6ZSIsInN0cmlkZSIsIm9mZnNldCIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJyZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidW5pZm9ybTJmIiwiaWkiLCJ1bmlmb3JtNGYiLCJjb2xvclVuaWZvcm1Mb2NhdGlvbiIsInByaW1pdGl2ZVR5cGUiLCJUUklBTkdMRVMiLCJjb3VudCIsImRyYXdBcnJheXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUE7O0FBQ3hCLE1BQUlDLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLElBQVQ7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxJQUF6QjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLElBQTNCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFDQSxNQUFJQyx5QkFBeUIsR0FBRyxJQUFoQztBQUNBLE1BQUlDLGNBQWMsR0FBRyxJQUFyQjtBQUdBQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsUUFBSTtBQUNKQyxVQUFNO0FBQ05DLFFBQUk7QUFDSixHQUpRLENBQVQsQ0Fad0IsQ0FtQnpCOztBQUNDLFdBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3pCLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JILEtBQTNCLENBQVA7QUFDQSxHQXRCdUIsQ0F3QnpCOzs7QUFDQyxXQUFTSSxZQUFULENBQXNCakIsRUFBdEIsRUFBMEJrQixDQUExQixFQUE2QkMsQ0FBN0IsRUFBZ0NDLEtBQWhDLEVBQXVDQyxNQUF2QyxFQUErQztBQUM5QyxRQUFJQyxFQUFFLEdBQUdKLENBQVQ7QUFDQSxRQUFJSyxFQUFFLEdBQUdMLENBQUMsR0FBR0UsS0FBYjtBQUNBLFFBQUlJLEVBQUUsR0FBR0wsQ0FBVDtBQUNBLFFBQUlNLEVBQUUsR0FBR04sQ0FBQyxHQUFHRSxNQUFiO0FBQ0FyQixNQUFFLENBQUMwQixVQUFILENBQWMxQixFQUFFLENBQUMyQixZQUFqQixF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RCxTQUFILENBQWFDLG9CQUFiLEVBQW1DL0MsSUFBSSxDQUFDRSxNQUFMLEVBQW5DLEVBQWtERixJQUFJLENBQUNFLE1BQUwsRUFBbEQsRUFBaUVGLElBQUksQ0FBQ0UsTUFBTCxFQUFqRSxFQUFnRixDQUFoRixFQVQrQixDQVcvQjs7QUFDQSxVQUFJOEMsYUFBYSxHQUFHOUQsRUFBRSxDQUFDK0QsU0FBdkI7QUFDQSxVQUFJVCxNQUFNLEdBQUcsQ0FBYjtBQUNBLFVBQUlVLEtBQUssR0FBRyxDQUFaO0FBQ0FoRSxRQUFFLENBQUNpRSxVQUFILENBQWNILGFBQWQsRUFBNkJSLE1BQTdCLEVBQXFDVSxLQUFyQztBQUNBO0FBQ0QsR0FsQkQ7O0FBb0JBLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFRLFVBQUUsRUFBQyxrQkFBWDtBQUE4QixZQUFJLEVBQUMsT0FBbkM7QUFBMkMsK0JBQXVCLEVBQUU7QUFDbkVFLGdCQUFNO0FBRDZEO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQXNCQztBQUFRLFVBQUUsRUFBQyxvQkFBWDtBQUFnQyxZQUFJLEVBQUMsT0FBckM7QUFBNkMsK0JBQXVCLEVBQUU7QUFDckVBLGdCQUFNO0FBRCtEO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFzQ0M7QUFBUSxRQUFFLEVBQUU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBMENBLENBM05EOztJQUFNcEUsVTs7S0FBQUEsVTtBQTZOU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2ViR0wuZTVjOGExYzc4ZGYzZTI0ZDUwMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVQcm9ncmFtLCBjcmVhdGVTaGFkZXJ9IGZyb20gXCIuLi9jb21tb24vdXRpbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBQcmFjdGljZTAxID0gKCkgPT4ge1xyXG5cdGxldCBjYW52YXMgPSBudWxsO1xyXG5cdGxldCBnbCA9IG51bGw7XHJcblx0bGV0IHZlcnRleFNoYWRlclNvdXJjZSA9IG51bGw7XHJcblx0bGV0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbnVsbDtcclxuXHRsZXQgdmVydGV4U2hhZGVyID0gbnVsbDtcclxuXHRsZXQgZnJhZ21lbnRTaGFkZXIgPSBudWxsO1xyXG5cdGxldCBwcm9ncmFtID0gbnVsbDtcclxuXHRsZXQgcG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IG51bGw7XHJcblx0bGV0IHBvc2l0aW9uQnVmZmVyID0gbnVsbDtcclxuXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbml0KCk7XHJcblx0XHRyZW5kZXIoKTtcclxuXHRcdGRyYXcoKTtcclxuXHR9KTtcclxuXHJcblxyXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgZnJvbSAwIHRvIHJhbmdlIC0gMS5cclxuXHRmdW5jdGlvbiByYW5kb21JbnQocmFuZ2UpIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSk7XHJcblx0fVxyXG5cclxuLy8gRmlsbCB0aGUgYnVmZmVyIHdpdGggdGhlIHZhbHVlcyB0aGF0IGRlZmluZSBhIHJlY3RhbmdsZS5cclxuXHRmdW5jdGlvbiBzZXRSZWN0YW5nbGUoZ2wsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdHZhciB4MSA9IHg7XHJcblx0XHR2YXIgeDIgPSB4ICsgd2lkdGg7XHJcblx0XHR2YXIgeTEgPSB5O1xyXG5cdFx0dmFyIHkyID0geSArIGhlaWdodDtcclxuXHRcdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFtcclxuXHRcdFx0eDEsIHkxLFxyXG5cdFx0XHR4MiwgeTEsXHJcblx0XHRcdHgxLCB5MixcclxuXHRcdFx0eDEsIHkyLFxyXG5cdFx0XHR4MiwgeTEsXHJcblx0XHRcdHgyLCB5MixcclxuXHRcdF0pLCBnbC5TVEFUSUNfRFJBVyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcclxuXHRcdC8vIEdMU0zripQgQyDslrjslrTrpbwg6riw7LSI66GcIO2VnCwg7IOB7JyEIOugiOuyqCDshbDsnbTrlKkg7Ja47Ja07J2064ukLlxyXG5cdFx0Ly8gUmFzdGVyaXphdGlvbijroIjsiqTthLDtmZQpLSDrsLHthLAg6re4656Y7ZS9IOydtOuvuOyngOulvCDruYTrlJTsmKQg65SU7Iqk7ZSM66CI7J2064KYIO2UhOumsO2EsCDrk7HsnZgg656Y7Iqk7YSwIOuUlOuwlOydtOyKpOyXkCDstpzroKXtlZjquLAg7JyE7ZW0IOuemOyKpO2EsCDsnbTrr7jsp4DroZwg67OA7ZmY7ZWY64qUIOqyg1xyXG5cclxuXHRcdC8vIFdlYkdM7J2AIEdQVeyXkOyEnCDsi6TtlonrkKguIOuUsOudvOyEnCBHUFXsl5DshJwg7Iuk7ZaJ65CY64qUIOy9lOuTnOulvCDsoJzqs7XtlbTslbztlanri4jri6QuXHJcblx0XHQvLyDtlbTri7kg7L2U65Oc64qUIO2VqOyImCDsjI0g7ZiV7YOc66GcIOygnOqzte2VtOyVvO2VmOuKlOuNsFxyXG5cdFx0Ly8g7J20IOuRkCDtlajsiJjripQgdmVydGV4IHNoYWRlcuyZgCBmcmFnbWVudCBzaGFkZXLroZwg67aI66as6rOgIEMvQysr7LKY65+8IOyXhOqyqe2VnCBUeXBl7J2EIOqwgOyngOuKlCBHTFNM66GcIOyekeyEseuQmOyWtCDsnojsirXri4jri6QuXHJcblx0XHQvLyDsnbQg65GQIOqwnOulvCDtlanss5DshJwgcHJvZ3JhbeydtOudvOqzoCDrtoDrpoXri4jri6QuXHJcblxyXG5cdFx0Ly8gR2V0IEEgV2ViR0wgY29udGV4dFxyXG5cdFx0Y2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjXCIpO1xyXG5cdFx0Z2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cdFx0aWYgKCFnbCkgcmV0dXJuO1xyXG5cclxuXHRcdC8vIEdldCB0aGUgc3RyaW5ncyBmb3Igb3VyIEdMU0wgc2hhZGVyc1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0dmVydGV4U2hhZGVyU291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2ZXJ0ZXgtc2hhZGVyLTJkXCIpLnRleHQ7XHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJhZ21lbnQtc2hhZGVyLTJkXCIpLnRleHQ7XHJcblxyXG5cclxuXHRcdC8vIGNyZWF0ZSBHTFNMIHNoYWRlcnMsIHVwbG9hZCB0aGUgR0xTTCBzb3VyY2UsIGNvbXBpbGUgdGhlIHNoYWRlcnNcclxuXHRcdC8vIHZlcnRleFNoYWRlciAtIOyijO2RnOulvCDsoJzqs7UsIOygleygkCDsnITsuZjrpbwg6rOE7IKwXHJcblx0XHQvLyBmcmFnbWVudFNoYWRlciAtIOyDieyDgeydhCDsoJzqs7UsIO2YhOyerCDqt7jroKTsp4DripQgcHJpbWl0aXZl7J2YIOqwgSDtlL3shYDsl5Ag64yA7ZWcIOyDieyDgeydhCDqs4TsgrBcclxuXHRcdC8vIOuRkCDqsJzrpbwg7ZWp7LOQ7IScIHByb2dyYW1cclxuXHRcdHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdmVydGV4U2hhZGVyU291cmNlKTtcclxuXHRcdGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcclxuXHRcdHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcblxyXG5cdFx0Ly8g66i87KCAIO2VtOyVvCDtlaAg7J287J2AIOuwqeq4iCDsg53shLHrkJwgcHJvZ3JhbeyXkCDrjIDtlZwgYXR0cmlidXRl7J2YIGxvY2F0aW9u66W8IOywvuuKlCDqsoNcclxuXHRcdC8vIEF0dHJpYnV0ZSBsb2NhdGlvbijqt7jrpqzqs6AgdW5pZm9ybSBsb2NhdGlvbinsnYQg7LC+64qUIOqyg+ydgCDroIzrjZTrp4HtlaAg65WM6rCAIOyVhOuLiOudvCDstIjquLDtmZTtlZjripQg64+Z7JWIIO2VtOyVvCDtlanri4jri6QuXHJcblx0XHQvLyBBdHRyaWJ1dGXripQg67KE7Y2866Gc67aA7YSwIOuNsOydtO2EsOulvCDqsIDsoLjsmKTrr4DroZwg67KE7Y2866W8IOyDneyEse2VtOyVvCDtlanri4jri6QuXHJcblx0XHRwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xyXG5cdFx0cG9zaXRpb25CdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuXHJcblx0XHQvLyBiaW5kIHBvaW5064qUIFdlYkdMIOyViOyXkCDsnojripQg64K067aAIOyghOyXrSDrs4DsiJhcclxuXHRcdC8vIOuovOyggCBiaW5kIHBvaW507JeQIOyekOybkOydhCDtlaDri7ntlansi5zri6QuIOq3uOufrOuptCDrqqjrk6Ag7ZWo7IiY6rCAIGJpbmQgcG9pbnTrpbwg7Ya17ZW0IOyekOybkOydhCDssLjsobDtlanri4jri6QuXHJcblx0XHQvLyBCaW5kIGl0IHRvIEFSUkFZX0JVRkZFUiAodGhpbmsgb2YgaXQgYXMgQVJSQVlfQlVGRkVSID0gcG9zaXRpb25CdWZmZXIpXHJcblx0XHQvLyDsnbTsoJwgYmluZCBwb2ludOulvCDthrXtlbQg7ZW064u5IOuyhO2NvOulvCDssLjsobDtlbTshJwg642w7J207YSw66W8IOuEo+ydhCDsiJgg7J6I7Iq164uI64ukLlxyXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuXHJcblxyXG5cdFx0Ly8gLy8gMkQgcG9pbnQgM+qwnFxyXG5cdFx0Ly8gLy8g7LqU67KE7IqkIO2BrOq4sOqwgCA0MDB4MzAw7J20652866m0IOydtOufsCDsi53snLzroZwgY2xpcCBzcGFjZeulvCBzY3JlZW4gc3BhY2XroZwg67OA7ZmY7ZWp64uI64ukLlxyXG5cdFx0Ly8gLypcclxuXHRcdC8vICogY2xpcCBzcGFjZSAgICAgICBzY3JlZW4gc3BhY2VcclxuXHRcdC8vICogMCwgMCAgICAgICAtPiAgIDIwMCwgMTUwXHJcblx0XHQvLyAqIDAsIDAuNSAgICAgLT4gICAyMDAsIDIyNVxyXG5cdFx0Ly8gKiAwLjcsIDAgICAgICAgLT4gICAzNDAsIDE1MFxyXG5cdFx0Ly8gKiAqL1xyXG5cdFx0Ly9cclxuXHRcdC8vIHZhciBwb3NpdGlvbnMgPSBbXHJcblx0XHQvLyBcdDEwLCAyMCxcclxuXHRcdC8vIFx0ODAsIDIwLFxyXG5cdFx0Ly8gXHQxMCwgMzAsXHJcblx0XHQvLyBcdDEwLCAzMCxcclxuXHRcdC8vIFx0ODAsIDIwLFxyXG5cdFx0Ly8gXHQ4MCwgMzAsXHJcblx0XHQvLyBdO1xyXG5cdFx0Ly9cclxuXHRcdC8vXHJcblx0XHQvLyAvLyBXZWJHTOydgCDqsJXroKXtlZwgdHlwZeydhCDqsIDsp4DripQg642w7J207YSw6rCAIO2VhOyalO2VmOuvgOuhnCwgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMp64qUIOyDiOuhnOyatCAzMmJpdCDrtoDrj5kg7IaM7IiY7KCQIOuwsOyXtOydhCDsg53shLFcclxuXHRcdC8vIC8vIGdsLmJ1ZmZlckRhdGHripQg642w7J207YSw66W8IEdQVeydmCBwb3NpdGlvbkJ1ZmZlcuuhnCDrs7Xsgqztlanri4jri6QuXHJcblx0XHQvLyAvLyDsnITsl5DshJwgQVJSQVlfQlVGRkVSIGJpbmQgcG9pbnTroZwg7ZWg64u57ZaI6riwIOuVjOusuOyXkCBwb3NpdGlvbiBidWZmZXLrpbwg7IKs7Jqp7Z6I6rOgIOyeiOyKteuLiOuLpC5cclxuXHRcdC8vIC8vIGdsLlNUQVRJQ19EUkFX64qUIOuNsOydtO2EsOulvCDslrTrlrvqsowg7IKs7Jqp7ZWgIOqyg+yduOyngCBXZWJHTOyXkCDslYzroKTspI3ri4jri6QuXHJcblx0XHQvLyAvLyBXZWJHTOydgCDtirnsoJUg7ZWt66qp65Ok7J2EIOy1nOygge2ZlO2VmOq4sCDsnITtlbQg7ZW064u5IGhpbnTrpbwg7IKs7Jqp7ZWgIOyImCDsnojripTrjbDsmpQuXHJcblx0XHQvLyAvLyBnbC5TVEFUSUNfRFJBV+uKlCDsnbQg642w7J207YSw6rCAIOunjuydtCDrsJTrgIzsp4Ag7JWK7J2EIOqygyDqsJnri6Tqs6AgV2ViR0zsl5Ag7JWM66Ck7KSN64uI64ukLlxyXG5cdFx0Ly8gZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuXHR9O1xyXG5cclxuXHJcblx0Y29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG5cdFx0Ly8g7IKs7JqpIOqwgOuKpe2VnCDqs7XqsITsnYQg7LGE7Jqw6riwIOychO2VtCBDU1ProZwg7YGs6riw66W8IOqysOygle2VnCDri6TsnYwg7J287LmY7ZWY64+E66GdIOyhsOyglVxyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0d2ViZ2xVdGlscy5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGdsLmNhbnZhcyk7XHJcblxyXG5cdFx0Ly8gZ2xfUG9zaXRpb27snLzroZwg7ISk7KCV7ZWgIGNsaXAgc3BhY2Ug6rCS7J2EIOyWtOuWu+qyjCBzY3JlZW4gc3BhY2XroZwg67OA7ZmY7ZWY64qU7KeAIFdlYkdM7JeQIOyVjOugpOykmOyVvCDtlZjripTrjbDsmpQuXHJcblx0XHQvLyDsnbTrpbwg7JyE7ZW0IGdsLnZpZXdwb3J066W8IO2YuOy2nO2VtOyEnCDtmITsnqwg7LqU67KE7IqkIO2BrOq4sOulvCDsoITri6ztlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0Ly8g7J2064qUIC0xIDwtPiArMSBjbGlwIHNwYWNl66W8LCB464qUIDAgPC0+IGdsLmNhbnZhcy53aWR0aOuhnCwgeeuKlCAwIDwtPiBnbC5jYW52YXMuaGVpZ2h066GcIOunpO2VkeyLnOy8nOykjeuLiOuLpC5cclxuXHRcdGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcblxyXG5cclxuXHRcdC8vIENsZWFyIHRoZSBjYW52YXNcclxuXHRcdGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XHJcblx0XHRnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcblx0XHQvLyDsi6TtlontlaAgc2hhZGVyIHByb2dyYW3snYQgV2ViR0zsl5Ag7JWM66Ck7KSN64uI64ukLlxyXG5cdFx0Z2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcblxyXG5cdFx0Ly8g7JyE7JeQ7IScIOyEpOygle2VnCDrsoTtjbzsl5DshJwg642w7J207YSw66W8IOqwgOyguOyZgCBzaGFkZXLsnZggYXR0cmlidXRl7JeQIOygnOqzte2VmOuKlCDrsKnrspXsnYQgV2ViR0zsl5Ag7JWM66Ck7KSY7JW8IO2VmOuKlOuNsCxcclxuXHRcdC8vIOyasOyEoCBhdHRyaWJ1dGXrpbwg7Zmc7ISx7ZmU7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24pO1xyXG5cclxuXHRcdC8vIOuNsOydtO2EsOulvCDslrTrlrvqsowg6rq864K87KeAIOyngOygle2VqeuLiOuLpC5cclxuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcblxyXG5cdFx0Ly8gcG9zaXRpb25CdWZmZXIoQVJSQVlfQlVGRkVSKeydmCDrjbDsnbTthLDrpbwg6rq864K07Jik64qUIOuwqeuyleydhCBhdHRyaWJ1dGXsl5Ag7KeA7IucXHJcblx0XHR2YXIgc2l6ZSA9IDI7ICAgICAgICAgIC8vIOuwmOuzteuniOuLpCAy6rCc7J2YIOy7tO2PrOuEjO2KuFxyXG5cdFx0dmFyIHR5cGUgPSBnbC5GTE9BVDsgICAvLyDrjbDsnbTthLDripQgMzJiaXQgZmxvYXRcclxuXHRcdHZhciBub3JtYWxpemUgPSBmYWxzZTsgLy8g642w7J207YSwIOygleq3nO2ZlCDslYgg7ZWoXHJcblx0XHR2YXIgc3RyaWRlID0gMDsgICAgICAgIC8vIDAgPSDri6TsnYwg7JyE7LmY66W8IOqwgOyguOyYpOq4sCDsnITtlbQg67CY67O166eI64ukIHNpemUgKiBzaXplb2YodHlwZSkg66eM7YG8IOyVnuycvOuhnCDsnbTrj5lcclxuXHRcdHZhciBvZmZzZXQgPSAwOyAgICAgICAgLy8g67KE7Y287J2YIOyymOydjOu2gO2EsCDsi5zsnpFcclxuXHJcblx0XHQvLyBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVy7J2YIOyIqOqyqOynhCDrtoDrtoTsnYAg7ZiE7J6sIOuwlOyduOuUqeuQnCBBUlJBWV9CVUZGRVLrpbwgYXR0cmlidXRl7JeQIO2VoOuLue2VnOuLpOuKlCDqsoHri4jri6QuXHJcblx0XHQvLyDsnbQgYXR0cmlidXRl64qUIOydtOygnCBwb3NpdGlvbkJ1ZmZlcuyXkCDrsJTsnbjrlKnrkKnri4jri6QuXHJcblx0XHQvLyDsnbTqsbQgQVJSQVlfQlVGRkVSIGJpbmQgcG9pbnTsl5Ag64uk66W4IOqyg+uTpOydhCDsnpDsnKDroa3qsowg7ZWg64u57ZWgIOyImCDsnojri6TripQg6rG4IOydmOuvuFxyXG5cdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuXHRcdFx0cG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XHJcblxyXG5cdFx0dmFyIHJlc29sdXRpb25Vbmlmb3JtTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1X3Jlc29sdXRpb25cIik7XHJcblx0XHRnbC51bmlmb3JtMmYocmVzb2x1dGlvblVuaWZvcm1Mb2NhdGlvbiwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkcmF3ID0gKCkgPT4ge1xyXG5cdFx0Zm9yICh2YXIgaWkgPSAwOyBpaSA8IDUwOyArK2lpKSB7XHJcblx0XHRcdC8vIFNldHVwIGEgcmFuZG9tIHJlY3RhbmdsZVxyXG5cdFx0XHQvLyBUaGlzIHdpbGwgd3JpdGUgdG8gcG9zaXRpb25CdWZmZXIgYmVjYXVzZVxyXG5cdFx0XHQvLyBpdHMgdGhlIGxhc3QgdGhpbmcgd2UgYm91bmQgb24gdGhlIEFSUkFZX0JVRkZFUlxyXG5cdFx0XHQvLyBiaW5kIHBvaW50XHJcblx0XHRcdHNldFJlY3RhbmdsZShcclxuXHRcdFx0XHRnbCwgcmFuZG9tSW50KDMwMCksIHJhbmRvbUludCgzMDApLCByYW5kb21JbnQoMzAwKSwgcmFuZG9tSW50KDMwMCkpO1xyXG5cclxuXHRcdFx0Ly8gU2V0IGEgcmFuZG9tIGNvbG9yLlxyXG5cdFx0XHRnbC51bmlmb3JtNGYoY29sb3JVbmlmb3JtTG9jYXRpb24sIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIDEpO1xyXG5cclxuXHRcdFx0Ly8gRHJhdyB0aGUgcmVjdGFuZ2xlLlxyXG5cdFx0XHR2YXIgcHJpbWl0aXZlVHlwZSA9IGdsLlRSSUFOR0xFUztcclxuXHRcdFx0dmFyIG9mZnNldCA9IDA7XHJcblx0XHRcdHZhciBjb3VudCA9IDY7XHJcblx0XHRcdGdsLmRyYXdBcnJheXMocHJpbWl0aXZlVHlwZSwgb2Zmc2V0LCBjb3VudCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDxzY3JpcHQgaWQ9XCJ2ZXJ0ZXgtc2hhZGVyLTJkXCIgdHlwZT1cIm5vdGpzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdF9faHRtbDogYFxyXG5cdFx0XHRcdFx0Ly8gQXR0cmlidXRl64qUIOuyhO2NvOyXkOyEnCDrjbDsnbTthLDrpbwg67Cb7J2MXHJcbiAgXHRcdFx0XHRcdC8vIOuqqOuToCBzaGFkZXLripQgbWFpbiDtlajsiJjrpbwg6rCA7KeQXHJcbiAgXHRcdFx0XHRcdGF0dHJpYnV0ZSB2ZWMyIGFfcG9zaXRpb247XHJcbiAgXHRcdFx0XHRcdHVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XHJcbiAgXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dm9pZCBtYWluKCkge1xyXG5cdFx0XHRcdFx0XHQvLyDsnITsuZjrpbwg7ZS97IWA7JeQ7IScIDAuMOqzvCAxLjDsgqzsnbTroZwg67OA7ZmYXHJcbiAgICBcdFx0XHRcdFx0dmVjMiB6ZXJvVG9PbmUgPSBhX3Bvc2l0aW9uIC8gdV9yZXNvbHV0aW9uO1xyXG4gXHJcblx0XHRcdFx0XHRcdC8vIDAtPjHsl5DshJwgMC0+MuuhnCDrs4DtmZhcclxuXHRcdFx0XHRcdFx0dmVjMiB6ZXJvVG9Ud28gPSB6ZXJvVG9PbmUgKiAyLjA7XHJcblx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdC8vIDAtPjLsl5DshJwgLTEtPisx66GcIOuzgO2ZmCAoY2xpcCBzcGFjZSlcclxuXHRcdFx0XHRcdFx0dmVjMiBjbGlwU3BhY2UgPSB6ZXJvVG9Ud28gLSAxLjA7XHJcblx0XHRcdFx0XHQgXHJcbiAgXHRcdFx0XHRcdFx0Z2xfUG9zaXRpb24gPSB2ZWM0KGNsaXBTcGFjZSAqIHZlYzIoMSwgLTEpLCAwLCAxKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgXHJcblx0XHRcdFx0fX0vPlxyXG5cdFx0XHRcdDxzY3JpcHQgaWQ9XCJmcmFnbWVudC1zaGFkZXItMmRcIiB0eXBlPVwibm90anNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0X19odG1sOiBgXHJcblx0XHRcdFx0XHQvLyBmcmFnbWVudCBzaGFkZXLripQg6riw67O4IOygleuwgOuPhOulvCDqsIDsp4Dqs6Ag7J6I7KeAIOyViuycvOuvgOuhnCDtlZjrgpjrpbwg7ISg7YOd7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdFx0XHRcdC8vIG1lZGl1bXDsnYAg7KKL7J2AIOq4sOuzuOqwkuycvOuhnCBcIuykkeqwhCDsoJXrsIDrj4RcIuulvCDsnZjrr7jtlanri4jri6QuXHJcblx0XHRcdFx0XHRwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHRcdFx0XHRcdHVuaWZvcm0gdmVjNCB1X2NvbG9yO1xyXG5cdFx0XHRcdFx0dm9pZCBtYWluKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBnbF9GcmFnQ29sb3LripQgZnJhZ21lbnQgc2hhZGVy6rCAIOyEpOygleydhCDri7Tri7ntlZjripQg7Yq57IiYIOuzgOyImFxyXG5cdFx0XHRcdFx0XHQvLyBXZWJHTOyXkOyEnCDsg4nsg4HsnYAgMOyXkOyEnCAx6rmM7KeA7J6F64uI64ukLlxyXG5cdFx0XHRcdFx0XHRnbF9GcmFnQ29sb3IgPSB1X2NvbG9yO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGBcclxuXHRcdFx0XHR9fS8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0ey8qQ2xpcCBzcGFjZSDsooztkZzripQg7LqU67KE7IqkIO2BrOq4sOyXkCDsg4HqtIDsl4bsnbQg7ZWt7IOBIC0x7JeQ7IScICsx6rmM7KeA7J6F64uI64ukLiovfVxyXG5cdFx0XHQ8Y2FudmFzIGlkPXsnYyd9Lz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNlMDE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=