
// shader를 만들고, GLSL을 업로드하고, shader를 컴파일할 함수
const createShader = (gl, type, source) => {
	var shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	if (success) return shader;

	console.log(gl.getShaderInfoLog(shader));
	gl.deleteShader(shader);
};


// 두 shader를 program으로 link하는 함수
const createProgram = (gl, vertexShader, fragmentShader) => {
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	var success = gl.getProgramParameter(program, gl.LINK_STATUS);
	if (success) return program;

	console.log(gl.getProgramInfoLog(program));
	gl.deleteProgram(program);
};


export {createShader, createProgram};
