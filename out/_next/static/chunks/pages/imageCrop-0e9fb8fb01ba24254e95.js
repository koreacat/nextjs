(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{7166:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(this&&this[t]||t);else if(Array.isArray(t))e.push(o.apply(this,t));else if("object"===i)for(var a in t)r.call(t,a)&&t[a]&&e.push(this&&this[a]||a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},720:function(e,n,t){"use strict";var r=t(1802),o=t.n(r),i=t(7166),a=t.n(i),s=t(5893),c=a().bind(o());n.Z=function(e){return(0,s.jsx)("div",{className:c("contents"),children:e.children})}},9374:function(e,n,t){"use strict";var r=t(5893);n.Z=function(e){return(0,r.jsx)("div",{className:"layout",children:e.children})}},7232:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r,o=t(720),i=t(9374),a=t(7294),s=t(2982),c=Object.freeze({x:0,y:0}),u=Object.freeze({w:0,h:0});!function(e){e.e="e",e.w="w",e.s="s",e.n="n",e.se="se",e.sw="sw",e.ne="ne",e.nw="nw"}(r||(r={}));var h=["e","w","s","n"],m=(0,s.Z)(Object.keys(r));function f(e,n,t){return Math.min(Math.max(e,n),t)}var p=t(4760),d=t.n(p),x=t(7166),l=t.n(x),w=t(5893),v=l().bind(d()),g=function(e){var n=e.imgSize,t=e.setOffset,r=e.setCropBoxSize,o=e.wrapRef,i=e.cropAreaRef,a=function(){var e;return(o.current?o.current.offsetTop:0)+(i.current?null===(e=i.current)||void 0===e?void 0:e.offsetTop:0)},s=function(){var e;return(o.current?null===(e=o.current)||void 0===e?void 0:e.offsetLeft:0)+(i.current?i.current.offsetLeft:0)};return(0,w.jsx)("div",{className:v("dimmedBox"),onMouseDown:function(e){e.preventDefault();var o=e.pageX,i=e.pageY,c=function(e){t({x:o-s(),y:i-a()}),r({w:0,h:0});var c=e.pageX-o,u=e.pageY-i,h=o-s(),m=i-a(),p=(c<0?e.pageX:o)-s(),d=(u<0?e.pageY:i)-a(),x=c<0?h:n.w-h,l=u<0?m:n.h-m,w=f(Math.abs(c),0,x),v=f(Math.abs(u),0,l);t({x:Math.max(p,0),y:Math.max(d,0)}),r({w:w,h:v})};document.addEventListener("mousemove",c),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",e)}))},style:{width:"".concat(n.w,"px"),height:"".concat(n.h,"px")}})},_=l().bind(d());var y=function(e){var n=e.imgSrc,t=e.imgSize,r=e.offset,o=e.setOffset,i=e.cropBoxSize,s=e.setCropBoxSize,u=e.wrapRef,p=e.cropAreaRef,d=(0,a.useRef)(c),x=function(e){var n,r,a=d.current,s={x:e.clientX,y:e.clientY},c={x:(n=s).x-(r=a).x,y:n.y-r.y};d.current=s,o((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=e.x+n.x,s=e.y+n.y;return{x:f(a,t,o),y:f(s,r,i)}}(e,c,0,0,t.w-i.w,t.h-i.h)}))},l=function e(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",e)},v=function(e,n){e.preventDefault();var a=r.x+i.w,c=r.x,h=r.y+i.h,m=r.y,d=function(e){var n=e.pageX-function(){var e;return(u.current?null===(e=u.current)||void 0===e?void 0:e.offsetLeft:0)+(p.current?p.current.offsetLeft:0)}(),r=e.pageY-function(){var e;return(u.current?u.current.offsetTop:0)+(p.current?null===(e=p.current)||void 0===e?void 0:e.offsetTop:0)}();x({x:f(n,0,t.w),y:f(r,0,t.h)})},x=function(e){var t=!(c+i.w>e.x),u=a-i.w>e.x,f=!(m+i.h>e.y),p=h-i.h>e.y,d=a-i.w-(r.x-e.x),x=c-(r.x-e.x),l=h-i.h-(r.y-e.y),w=m-(r.y-e.y),v=a-i.w-e.x,g=e.x-c-i.w,_=h-i.h-e.y,y=e.y-m-i.h,j=i.w+e.x-a,C=i.w+c-e.x,b=i.h+e.y-h,S=i.h+m-e.y;switch(n){case"e":u?(o({x:d,y:r.y}),s({w:v,h:i.h})):s({w:j,h:i.h});break;case"w":t?s({w:g,h:i.h}):(o({x:x,y:r.y}),s({w:C,h:i.h}));break;case"s":p?(o({x:r.x,y:l}),s({w:i.w,h:_})):s({w:i.w,h:b});break;case"n":f?s({w:i.w,h:y}):(o({x:r.x,y:w}),s({w:i.w,h:S}));break;case"se":p&&u?(o({x:d,y:l}),s({w:v,h:_})):u?(o({x:d,y:r.y}),s({w:v,h:b})):p?(o({x:r.x,y:l}),s({w:j,h:_})):s({w:j,h:b});break;case"sw":p&&t?(o({x:r.x+i.w,y:w}),s({w:g,h:_})):t?s({w:g,h:b}):p?(o({x:x,y:w}),s({w:C,h:_})):(o({x:x,y:r.y}),s({w:C,h:b}));break;case"ne":f&&u?(o({x:d,y:r.y+i.h}),s({w:v,h:y})):u?(o({x:d,y:w}),s({w:v,h:S})):f?s({w:j,h:y}):(o({x:r.x,y:w}),s({w:j,h:S}));break;case"nw":f&&t?s({w:g,h:y}):t?(o({x:r.x+i.w,y:w}),s({w:g,h:S})):f?(o({x:x,y:r.y+i.h}),s({w:C,h:y})):(o({x:x,y:w}),s({w:C,h:S}))}};document.addEventListener("mousemove",d),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",e)}))};return(0,w.jsxs)("div",{className:_("cropBox"),style:{width:"".concat(i.w,"px"),height:"".concat(i.h,"px"),transform:"translateX(".concat(r.x,"px) translateY(").concat(r.y,"px)")},children:[(0,w.jsx)("span",{className:_("viewBox"),children:(0,w.jsx)("img",{className:_("viewImg"),src:n,style:{width:"".concat(t.w,"px"),height:"".concat(t.h,"px"),transform:"translateX(-".concat(r.x,"px) translateY(-").concat(r.y,"px)")}})}),["w","h"].map((function(e){return(0,w.jsx)("span",{className:_("dash",e)},e)})),(0,w.jsx)("span",{className:_("cross")}),(0,w.jsx)("span",{className:_("moveBox"),onMouseDown:function(e){e.preventDefault(),document.addEventListener("mousemove",x),document.addEventListener("mouseup",l),d.current={x:e.clientX,y:e.clientY}}}),h.map((function(e){return(0,w.jsx)("span",{className:_("line",e),onMouseDown:function(n){return v(n,e)}},e)})),m.map((function(e){return(0,w.jsx)("span",{className:_("point",e),onMouseDown:function(n){return v(n,e)}},e)})),(0,w.jsxs)("span",{className:_("cropBoxInfo"),children:[r.x,", ",r.y,(0,w.jsx)("br",{}),i.w,", ",i.h," (px)"]})]})},j=l().bind(d()),C=function(e){var n=e.imgSrc,t=e.imgName,r=e.width,o=e.height,i=(0,a.useRef)(null),s=(0,a.useRef)(null),h=(0,a.useState)(u),m=h[0],f=h[1],p=(0,a.useState)(u),d=p[0],x=p[1],l=(0,a.useState)(c),v=l[0],_=l[1],C=(0,a.useState)(1),b=C[0],S=C[1],N=(0,a.useState)(1),B=N[0],E=N[1];(0,a.useEffect)((function(){L()}),[n]);var L=function(){var e=new Image;e.src=n,e.onload=function(){var n=function(e,n){return e>r&&n>o?o>r?r:e*(o/n):n>o?Math.min(e,r)*(o/n):Math.min(e,r)}(e.width,e.height),t=function(e,n){return e>r&&n>o?o<r?o:n*(r/e):e>r?Math.min(n,o)*(r/e):Math.min(n,o)}(e.width,e.height);S(n/e.width),E(t/e.height),f({w:n,h:t}),x({w:n/2,h:t/2}),_({x:n/4,y:t/4})}};return n?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{ref:i,className:j("wrap"),style:{width:"".concat(r,"px"),height:"".concat(o,"px")},children:(0,w.jsxs)("div",{ref:s,className:j("cropArea"),style:{width:"".concat(m.w,"px"),height:"".concat(m.h,"px")},children:[(0,w.jsx)("div",{className:j("imgArea"),children:(0,w.jsx)("div",{className:j("imgBox"),children:(0,w.jsx)("img",{className:j("img"),src:n,style:{width:"".concat(m.w,"px"),height:"".concat(m.h,"px")}})})}),(0,w.jsx)(g,{imgSize:m,setOffset:_,setCropBoxSize:x,wrapRef:i,cropAreaRef:s}),(0,w.jsx)(y,{imgSrc:n,imgSize:m,offset:v,setOffset:_,cropBoxSize:d,setCropBoxSize:x,wrapRef:i,cropAreaRef:s})]})}),(0,w.jsx)("a",{className:j("btn"),onClick:function(){var e=document.createElement("canvas"),r=e.getContext("2d"),o=new Image;e.width=d.w,e.height=d.h,o.src=n,o.onload=function(){var n=document.createElement("canvas"),i=n.getContext("2d");n.width=o.width*b,n.height=o.height*B,null===i||void 0===i||i.drawImage(o,0,0,n.width,n.height),null===r||void 0===r||r.drawImage(n,v.x,v.y,d.w,d.h,0,0,d.w,d.h),function(e){var n=document.createElement("a");n.href=e,n.download=t,n.click(),n.remove(),window.URL.revokeObjectURL(e)}(e.toDataURL())}},children:"download"})]}):null},b=l().bind(d()),S=function(){var e=(0,a.useState)("/nextjs/img/imageCrop/imgTest.jpg"),n=e[0],t=e[1],r=(0,a.useState)(""),s=r[0],c=r[1];return(0,w.jsx)(i.Z,{children:(0,w.jsx)(o.Z,{children:(0,w.jsxs)("div",{style:{margin:"50px",paddingBottom:"100px"},children:[(0,w.jsxs)("label",{style:{display:"block",marginBottom:"10px"},children:[(0,w.jsx)("a",{className:b("btnChoice"),children:"select images"}),(0,w.jsx)("input",{style:{display:"none"},type:"file",accept:"image/png, image/jpeg, image/jpg",onChange:function(e){return function(e){if(e){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result),c(e.name)}}}(e.target.files[0])}})]}),(0,w.jsx)("div",{style:{width:"360px",height:"600px"},children:(0,w.jsx)(C,{imgSrc:n,imgName:s,width:360,height:600})})]})})})}},5656:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/imageCrop",function(){return t(7232)}])},1802:function(e){e.exports={contents:"contents_contents__2RZDA"}},4760:function(e){e.exports={wrap:"imageCrop_wrap__1KkLw",cropArea:"imageCrop_cropArea__34F3E",imgArea:"imageCrop_imgArea__3TSYh",imgBox:"imageCrop_imgBox__1DpaO",dimmedBox:"imageCrop_dimmedBox__Ljad8",cropBox:"imageCrop_cropBox__32w2s",viewBox:"imageCrop_viewBox__1NPLW",viewImg:"imageCrop_viewImg__2yNIO",dash:"imageCrop_dash__1k5qe",w:"imageCrop_w__3wDdG",h:"imageCrop_h__2SQGo",cross:"imageCrop_cross__3E83l",moveBox:"imageCrop_moveBox__1ARXf",line:"imageCrop_line__3pgnf",n:"imageCrop_n__SHC68",e:"imageCrop_e__2jt7w",s:"imageCrop_s__1S21u",point:"imageCrop_point__1sRRv",nw:"imageCrop_nw__nccC3",ne:"imageCrop_ne__2r6NJ",se:"imageCrop_se__1HLvC",sw:"imageCrop_sw__1Y9E7",cropBoxInfo:"imageCrop_cropBoxInfo__3dM_C",btn:"imageCrop_btn__2xzdA",btnChoice:"imageCrop_btnChoice__1un7P"}},907:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},2982:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(907);var o=t(181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(907);function o(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return n=5656,e(e.s=n);var n}));var n=e.O();_N_E=n}]);