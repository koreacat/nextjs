_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"38tU":function(t,e,n){"use strict";var r=n("nKUr"),c=n("Bihf"),a=n.n(c),o=n("UbMB"),i=n.n(o).a.bind(a.a);e.a=function(t){return Object(r.jsx)("div",{className:i("contents"),children:t.children})}},"4ODT":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bubbleChart",function(){return n("d36R")}])},AhJb:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return Math.floor(Math.random()*t)}},Bihf:function(t,e,n){t.exports={contents:"contents_contents__2RZDA"}},LLyK:function(t,e,n){t.exports={hidden:"bubbleChart_hidden__1XmSu",textEmphasis:"bubbleChart_textEmphasis__1Z_GG",wrap:"bubbleChart_wrap__1DqYm",tooltipWrap:"bubbleChart_tooltipWrap__rsgTJ",scale:"bubbleChart_scale__I2Lff",btn:"bubbleChart_btn__15cc5"}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},UbMB:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(this&&this[r]||r);else if(Array.isArray(r))t.push(c.apply(this,r));else if("object"===a)for(var o in r)n.call(r,o)&&r[o]&&t.push(this&&this[o]||o)}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):void 0===(r=function(){return c}.apply(e,[]))||(t.exports=r)}()},Z5kR:function(t,e,n){"use strict";var r=n("nKUr");e.a=function(t){return Object(r.jsx)("div",{className:"layout",children:t.children})}},d36R:function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),c=n("38tU"),a=n("Z5kR"),o=n("q1tI"),i=n("LLyK"),s=n.n(i),u=n("UbMB"),f=n.n(u).a.bind(s.a),l=Object.freeze({x:0,y:0});function v(t,e){return{x:t.x-e.x,y:t.y-e.y}}function h(t,e){return{x:t.x+e.x,y:t.y+e.y}}var b=function(t){var e=t.canvasWidth,n=t.canvasHeight,c=t.chartDataList,a=Object(o.useRef)(null),i=Object(o.useState)(null),s=i[0],u=i[1],b=Object(o.useState)(1),d=b[0],x=b[1],p=Object(o.useState)(l),j=p[0],y=p[1],m=Object(o.useState)(l),O=m[0],_=m[1],E=Object(o.useState)(l),w=E[0],g=E[1],L=Object(o.useState)(Object(r.jsx)(r.Fragment,{})),M=L[0],T=L[1],S=Object(o.useState)({x:"0px",y:"0px"}),N=S[0],R=S[1],D=Object(o.useRef)(!1),P=Object(o.useRef)(l),C=Object(o.useRef)(l);Object(o.useEffect)((function(){C.current=j}),[j]),Object(o.useEffect)((function(){var t=a.current;if(null!==t)return t.addEventListener("mousemove",e),t.addEventListener("wheel",e),function(){t.removeEventListener("mousemove",e),t.removeEventListener("wheel",e)};function e(t){if(t.preventDefault(),a.current){var e={x:t.offsetX,y:t.offsetY},n={x:a.current.offsetLeft,y:a.current.offsetTop};_(v(e,n))}}}),[]),Object(o.useEffect)((function(){var t=a.current;if(null!==t)return t.addEventListener("wheel",e),function(){return t.removeEventListener("wheel",e)};function e(t){if(t.preventDefault(),s){var e=1-t.deltaY/500;if(d*e<.3)return;if(d*e>3)return;var n={x:O.x/d*(1-1/e),y:O.y/d*(1-1/e)},r=h(w,n);s.translate(w.x,w.y),s.scale(e,e),s.translate(-r.x,-r.y),g(r),x(d*e),D.current=!1}}}),[s,O.x,O.y,w,d]),Object(o.useLayoutEffect)((function(){if(a){var t=a.current.getContext("2d");t&&Y(t)}}),[n,e,c]),Object(o.useLayoutEffect)((function(){if(s&&C.current){var t=function(t,e){return{x:t.x/e,y:t.y/e}}(v(j,C.current),d);s.translate(t.x,t.y),g((function(e){return v(e,t)})),D.current=!1}}),[s,j,d]),Object(o.useLayoutEffect)((function(){if(s){var t=s.getTransform();s.canvas.width=s.canvas.width,s.setTransform(t),k(),U(),X()}}),[e,n,c,s,d,j,w]);var k=function(){var t=110,r=Math.floor(20*e/t)-2,c=Math.floor(20*n/t)-2,a=e-r*t,o=n-c*t,i=Math.ceil(a/2)-.5,u=Math.ceil(o/2)-.5,f=e-r*t-i,l=n-c*t-u;s.strokeStyle="lightgrey",s.beginPath();for(var v=i;v<=e-f;v+=t)s.moveTo(v,u),s.lineTo(v,n-l);for(var h=u;h<=n-l;h+=t)s.moveTo(i,h),s.lineTo(e-f,h);s.stroke()},U=function(){c&&c.sort((function(t,e){return e.r-t.r})).forEach((function(t){var e=t.point,n=e.x,r=e.y,c=t.r,a=t.fill;s.beginPath(),s.arc(n,r,c,0,2*Math.PI),s.fillStyle=a,s.fill()}))},X=function(){},Y=function(t){!t&&D.current||(t.canvas.width=1*e,t.canvas.height=1*n,t.scale(1,1),x(1),u(t),y(l),_(l),g(l),C.current=l,P.current=l,D.current=!0)},A=function(t){if(s){var e=P.current,n={x:t.offsetX,y:t.offsetY};P.current=n;var r=v(n,e);y((function(t){return h(t,r)}))}},W=function t(){a.current.style.cursor="crosshair",document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",t)};return Object(r.jsxs)("div",{className:f("wrap"),style:{width:1*e},children:[Object(r.jsx)("canvas",{onMouseMove:function(t){s&&c&&(T(null),c.forEach((function(e){var n=e.point,r=n.x,c=n.y,a=e.r,o=e.toolTip,i=new Path2D;if(i.arc(r,c,a,0,2*Math.PI),s.isPointInPath(i,t.nativeEvent.offsetX,t.nativeEvent.offsetY))return R({x:"".concat(t.nativeEvent.offsetX,"px"),y:"".concat(t.nativeEvent.offsetY-50,"px")}),void T(o)})))},onMouseDown:function(t){a.current.style.cursor="grabbing",document.addEventListener("mousemove",A),document.addEventListener("mouseup",W),P.current={x:t.nativeEvent.offsetX,y:t.nativeEvent.offsetY}},ref:a,width:1*e,height:1*n,style:{cursor:"crosshair",width:"".concat(e,"px"),height:"".concat(n,"px")}}),Object(r.jsx)("div",{className:f("tooltipWrap"),style:{transform:"translate(".concat(N.x,", ").concat(N.y,")")},children:M}),Object(r.jsxs)("span",{className:f("scale"),children:["scale: ",d.toFixed(2)]}),Object(r.jsx)("button",{className:f("btn"),onClick:function(){return s&&Y(s)},children:"Reset"})]})},d=n("AhJb"),x=function(t){var e=t.title;return Object(r.jsx)("div",{style:{background:"#fff",borderRadius:"5px",padding:"10px 20px",fontSize:"14px",fontWeight:700},children:e})};e.default=function(){return Object(r.jsx)(a.a,{children:Object(r.jsx)(c.a,{children:Object(r.jsx)(b,{canvasWidth:700,canvasHeight:500,chartDataList:new Array(30).fill({}).map((function(){return function(){var t=100+Object(d.a)(500),e=400-t+Object(d.a)(300),n=5+Object(d.a)(40);return{point:{x:t,y:e},r:n,fill:"#".concat(Math.round(16777215*Math.random()).toString(16)),toolTip:Object(r.jsx)(x,{title:"x: ".concat(t," y: ").concat(e," r: ").concat(n)}),title:""}}()}))})})})}}},[["4ODT",0,1]]]);