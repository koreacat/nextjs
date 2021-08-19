import { useEffect } from "react";
import { getInteger } from "src/util/getInteger";
import * as webglUtils from 'webgl-dev-utils';

import classnames from "classnames/bind";
import styles from "./practice01.module.scss";
const cx = classnames.bind(styles);

// GLSL는 C 언어를 기초로 한, 상위 레벨 셰이딩 언어이다.
// Rasterization(레스터화)- 백터 그래픽 이미지를 비디오 디스플레이나 프린터 등의 
// 래스터 디바이스에 출력하기 위해 래스터 이미지로 변환하는 것
const canvasWidth = 1280;
const canvasHeight = 720;

const Practice01 = () => {
	let canvas = null;
	let gl = null;
	let program = null;
	let positionAttributeLocation = null;
	let positionBuffer = null;

	useEffect(() => {
		initWebGL();
		initProgram();
		initRender();
		draw();
	});

	const initWebGL = () => {
		canvas = document.querySelector("#canvas");
		gl = canvas.getContext("webgl");
		if (!gl) return;
	}

	const initProgram = () => {
		// WebGL은 GPU에서 실행됨. 따라서 GPU에서 실행되는 코드를 제공해야합니다.
		// 해당 코드는 함수 쌍 형태로 제공해야하는데
		// 이 두 함수는 vertex shader와 fragment shader로 불리고 C/C++처럼 엄격한 Type을 가지는 GLSL로 작성되어 있습니다.
		// 이 두 개를 합쳐서 program이라고 부릅니다.
		
		// vertexShader - 좌표를 제공, 정점 위치를 계산
		// Attribute는 버퍼에서 데이터를 받음
		const vertexShaderCode = `
			attribute vec2 a_position;
			uniform vec2 u_resolution;
			void main() {
				// 위치를 픽셀에서 0.0과 1.0사이로 변환
				vec2 zeroToOne = a_position / u_resolution;

				// 0->1에서 0->2로 변환
				vec2 zeroToTwo = zeroToOne * 2.0;
				
				// 0->2에서 -1->+1로 변환 (clip space)
				vec2 clipSpace = zeroToTwo - 1.0;
				gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
			}`;


		// fragmentShader - 색상을 제공, 현재 그려지는 primitive의 각 픽셀에 대한 색상을 계산
		// fragment shader는 기본 정밀도를 가지고 있지 않으므로 하나를 선택해야 합니다.
		// mediump은 "중간 정밀도"를 의미합니다.
		// gl_FragColor는 fragment shader가 설정을 담당하는 특수 변수
		// WebGL에서 색상은 0에서 1까지입니다
		const fragmentShaderCode = `
			precision mediump float;
			uniform vec4 u_color;
			void main() {gl_FragColor = u_color;}`;

		program = webglUtils.createProgram(gl, vertexShaderCode, fragmentShaderCode);


		// 먼저 해야 할 일은 방금 생성된 program에 대한 attribute의 location를 찾는 것
		// Attribute location(그리고 uniform location)을 찾는 것은 렌더링할 때가 아니라 초기화하는 동안 해야 합니다.
		// Attribute는 버퍼로부터 데이터를 가져오므로 버퍼를 생성해야 합니다.
		positionAttributeLocation = gl.getAttribLocation(program, "a_position");
		positionBuffer = gl.createBuffer();

		// bind point는 WebGL 안에 있는 내부 전역 변수
		// 먼저 bind point에 자원을 할당합시다. 그러면 모든 함수가 bind point를 통해 자원을 참조합니다.
		// Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
		// 이제 bind point를 통해 해당 버퍼를 참조해서 데이터를 넣을 수 있습니다.
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	};


	const initRender = () => {
		// 사용 가능한 공간을 채우기 위해 CSS로 크기를 결정한 다음 일치하도록 조정
		// webglUtils.resizeCanvasToDisplaySize(gl.canvas);


		// gl_Position으로 설정할 clip space 값을 어떻게 screen space로 변환하는지 WebGL에 알려줘야 하는데요.
		// 이를 위해 gl.viewport를 호출해서 현재 캔버스 크기를 전달해야 합니다.
		// 이는 -1 <-> +1 clip space를, x는 0 <-> gl.canvas.width로, y는 0 <-> gl.canvas.height로 매핑시켜줍니다.
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

		// Clear the canvas
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		// 실행할 shader program을 WebGL에 알려줍니다.
		gl.useProgram(program);

		// 위에서 설정한 버퍼에서 데이터를 가져와 shader의 attribute에 제공하는 방법을 WebGL에 알려줘야 하는데,
		// 우선 attribute를 활성화해야 합니다.
		gl.enableVertexAttribArray(positionAttributeLocation);

		// 데이터를 어떻게 꺼낼지 지정합니다.
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

		// positionBuffer(ARRAY_BUFFER)의 데이터를 꺼내오는 방법을 attribute에 지시
		const size = 2;          // 반복마다 2개의 컴포넌트
		const type = gl.FLOAT;   // 데이터는 32bit float
		const normalize = false; // 데이터 정규화 안 함
		const stride = 0;        // 0 = 다음 위치를 가져오기 위해 반복마다 size * sizeof(type) 만큼 앞으로 이동
		const offset = 0;        // 버퍼의 처음부터 시작

		// gl.vertexAttribPointer의 숨겨진 부분은 현재 바인딩된 ARRAY_BUFFER를 attribute에 할당한다는 겁니다.
		// 이 attribute는 이제 positionBuffer에 바인딩됩니다.
		// 이건 ARRAY_BUFFER bind point에 다른 것들을 자유롭게 할당할 수 있다는 걸 의미
		gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

		const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
		gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
	};

	const draw = () => {
		// Setup a random rectangle

		for (let i = 0; i < 50; i++) {
			// This will write to positionBuffer because
			// its the last thing we bound on the ARRAY_BUFFER
			// bind point
			setRectangle(gl, getInteger(canvasWidth), getInteger(canvasHeight), getInteger(300), getInteger(300));

			// Set a random color.
			const colorUniformLocation = gl.getUniformLocation(program, "u_color");
			gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);

			// Draw the rectangle.
			const primitiveType = gl.TRIANGLES;
			const offset = 0;
			const count = 6;
			gl.drawArrays(primitiveType, offset, count);
		}
	};

	const setRectangle = (gl, x, y, width, height) => {
		const x1 = x;
		const x2 = x + width;
		const y1 = y;
		const y2 = y + height;
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
			x1, y1,
			x2, y1,
			x1, y2,
			x1, y2,
			x2, y1,
			x2, y2,
		]), gl.STATIC_DRAW);
	}

	return (
		<div>
			<canvas id={'canvas'} width={canvasWidth} height={canvasHeight}/>
		</div>
	)
};

export default Practice01;
