_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"38tU":function(e,t,n){"use strict";var r=n("nKUr"),o=n("Bihf"),a=n.n(o),i=n("UbMB"),c=n.n(i).a.bind(a.a);t.a=function(e){return Object(r.jsx)("div",{className:c("contents"),children:e.children})}},AhJb:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return Math.floor(Math.random()*e)}},Bihf:function(e,t,n){e.exports={contents:"contents_contents__2RZDA"}},DXrj:function(e,t,n){e.exports=n("HKe0")},HKe0:function(e,t,n){!function(e){"use strict";var t=function(e,t,n){var r="",o=null,a=0,i=0;for(var c in n)if(r=n[c].type,o=n[c].value,a=e.getAttribLocation(t,c),"pointer"!==r){if("float"===r&&Array.isArray(o)){if((i=o.length)<=0)continue;4<i&&(i=4),e["vertexAttrib"+i+"fv"](a,o)}}else e.enableVertexAttribArray(a),e.vertexAttribPointer(a,o[0],o[1],o[2],o[3],o[4])},n=function(e,t,n){var r="",o=null,a=0,i=0;for(var c in n)r=n[c].type,o=n[c].value,Array.isArray(o)&&(i=o.length,a=e.getUniformLocation(t,c),"int"!==r?"float"!==r||e["uniform"+i+"fv"](a,o):e["uniform"+i+"iv"](a,o))};function r(e,t,n,r){var o=e.createShader(r);return e.shaderSource(o,n),e.compileShader(o),e.attachShader(t,o),o}function o(e,t,n,r){return a(n)&&a(r)?e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),t}function a(e){return!(e&e-1)}e.setProgramAttribute=t,e.setProgramUniform=n,e.createProgram=function(e,t,n){var o=e.createProgram();return r(e,o,t,e.VERTEX_SHADER),r(e,o,n,e.FRAGMENT_SHADER),e.linkProgram(o),o},e.createShader=r,e.createArrayBuffer=function(e,t,n){var r=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,t,n||e.STATIC_DRAW),r},e.updateArrayBuffer=function(e,t,n,r){return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,n,r||e.STATIC_DRAW),t},e.createTextureByImage=function(e,t){var n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),o(e,n,t.width,t.height)},e.updateTexture=function(e,t,n,r){return e.activeTexture(t),e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r),o(e,n,r.width,r.height)},e.checkTexture=o,e.isPowerOf2=a,Object.defineProperty(e,"__esModule",{value:!0})}(t)},Kokk:function(e,t,n){e.exports={hidden:"fixedHeader_hidden__AGUu4",fixedHeader:"fixedHeader_fixedHeader__18tHr",up:"fixedHeader_up__5cKX5"}},Nfuf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/webGL",function(){return n("Tmw3")}])},RzvT:function(e,t,n){e.exports={hidden:"footer_hidden__3PsVa",footer:"footer_footer__3XHPM"}},Tmw3:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("Z5kR"),a=n("38tU"),i=n("q1tI"),c=n("AhJb"),u=n("DXrj"),f=n("UbMB"),s=n.n(f),l=n("YE5m"),d=n.n(l),v=(s.a.bind(d.a),function(){var e=null,t=null,n=null,o=null,a=null;Object(i.useEffect)((function(){f(),s(),l(),d()}));var f=function(){e=document.querySelector("#canvas"),t=e.getContext("webgl")},s=function(){n=u.createProgram(t,"\n\t\t\tattribute vec2 a_position;\n\t\t\tuniform vec2 u_resolution;\n\t\t\tvoid main() {\n\t\t\t\t// \uc704\uce58\ub97c \ud53d\uc140\uc5d0\uc11c 0.0\uacfc 1.0\uc0ac\uc774\ub85c \ubcc0\ud658\n\t\t\t\tvec2 zeroToOne = a_position / u_resolution;\n\n\t\t\t\t// 0->1\uc5d0\uc11c 0->2\ub85c \ubcc0\ud658\n\t\t\t\tvec2 zeroToTwo = zeroToOne * 2.0;\n\t\t\t\t\n\t\t\t\t// 0->2\uc5d0\uc11c -1->+1\ub85c \ubcc0\ud658 (clip space)\n\t\t\t\tvec2 clipSpace = zeroToTwo - 1.0;\n\t\t\t\tgl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n\t\t\t}","\n\t\t\tprecision mediump float;\n\t\t\tuniform vec4 u_color;\n\t\t\tvoid main() {gl_FragColor = u_color;}"),o=t.getAttribLocation(n,"a_position"),a=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,a)},l=function(){t.viewport(0,0,t.canvas.width,t.canvas.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(n),t.enableVertexAttribArray(o),t.bindBuffer(t.ARRAY_BUFFER,a);var e=t.FLOAT;t.vertexAttribPointer(o,2,e,!1,0,0);var r=t.getUniformLocation(n,"u_resolution");t.uniform2f(r,t.canvas.width,t.canvas.height)},d=function(){for(var e=0;e<50;e++){v(t,Object(c.a)(1280),Object(c.a)(720),Object(c.a)(300),Object(c.a)(300));var r=t.getUniformLocation(n,"u_color");t.uniform4f(r,Math.random(),Math.random(),Math.random(),1);var o=t.TRIANGLES;t.drawArrays(o,0,6)}},v=function(e,t,n,r,o){var a=t,i=t+r,c=n,u=n+o;e.bufferData(e.ARRAY_BUFFER,new Float32Array([a,c,i,c,a,u,a,u,i,c,i,u]),e.STATIC_DRAW)};return Object(r.jsx)("div",{children:Object(r.jsx)("canvas",{id:"canvas",width:1280,height:720})})}),_=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(v,{})})};t.default=function(){return Object(r.jsx)(o.a,{children:Object(r.jsx)(a.a,{children:Object(r.jsx)(_,{})})})}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(o.apply(this,r));else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},YE5m:function(e,t,n){},YFqc:function(e,t,n){e.exports=n("cTJO")},Z5kR:function(e,t,n){"use strict";var r=n("nKUr"),o=n("YFqc"),a=n.n(o),i=n("q1tI"),c=n("vN0C"),u=n.n(c),f=n("UbMB"),s=n.n(f),l=s.a.bind(u.a),d=function(){return Object(r.jsx)("header",{className:l("header"),children:Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("div",{children:Object(r.jsx)("a",{children:"index"})})})})},v=n("Kokk"),_=n.n(v),h=s.a.bind(_.a),p=function(){var e=0,t=Object(i.useState)(!0),n=(t[0],t[1]),o=function(t){t.preventDefault();var r=window.pageYOffset||document.documentElement.scrollTop;n(r>e),e=r<=0?0:r};return Object(i.useEffect)((function(){return document.addEventListener("scroll",o,!1),function(){document.removeEventListener("scroll",o)}}),[]),Object(r.jsx)("div",{className:h("fixedHeader",!1),children:Object(r.jsx)(d,{})})},E=n("RzvT"),b=n.n(E),T=s.a.bind(b.a),R=function(){return Object(r.jsx)("footer",{className:T("footer")})};t.a=function(e){return Object(r.jsxs)("div",{className:"layout",children:[Object(r.jsx)(d,{}),Object(r.jsx)(p,{}),e.children,Object(r.jsx)(R,{})]})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),u=n("vNVm"),f={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",l=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=l.href,v=l.as,_=e.children,h=e.replace,p=e.shallow,E=e.scroll,b=e.locale;"string"===typeof _&&(_=a.default.createElement("a",null,_));var T=a.Children.only(_),R=T&&"object"===typeof T&&T.ref,m=(0,u.useIntersection)({rootMargin:"200px"}),A=r(m,2),x=A[0],j=A[1],g=a.default.useCallback((function(e){x(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[R,x]);(0,a.useEffect)((function(){var e=j&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+v+(r?"%"+r:"")];e&&!o&&s(n,d,v,{locale:r})}),[v,d,j,b,t,n]);var O={ref:g,onClick:function(e){T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,v,h,p,E,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),s(n,d,v,{priority:!0}))}};if(e.passHref||"a"===T.type&&!("href"in T.props)){var U="undefined"!==typeof b?b:n&&n.locale,y=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(v,U,n&&n.locales,n&&n.domainLocales);O.href=y||(0,i.addBasePath)((0,i.addLocale)(v,U,n&&n.defaultLocale))}return a.default.cloneElement(T,O)};t.default=l},vN0C:function(e,t,n){e.exports={hidden:"header_hidden__1kCA3",header:"header_header__ADI_k"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=(0,o.useRef)(),f=(0,o.useState)(!1),s=r(f,2),l=s[0],d=s[1],v=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!i&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[v,l]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}},[["Nfuf",0,2,1]]]);