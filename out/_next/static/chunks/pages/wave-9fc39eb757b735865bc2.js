_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"1OyB":function(t,i,e){"use strict";function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}e.d(i,"a",(function(){return n}))},"38tU":function(t,i,e){"use strict";var n=e("nKUr"),s=e("Bihf"),r=e.n(s),a=e("UbMB"),o=e.n(a).a.bind(r.a);i.a=function(t){return Object(n.jsx)("div",{className:o("contents"),children:t.children})}},"6jQ3":function(t,i,e){"use strict";e.r(i);var n=e("nKUr"),s=e("Z5kR"),r=e("38tU"),a=e("1OyB"),o=e("vuIU"),c=e("rePB"),h=e("Zust"),u=e.n(h),d=e("UbMB"),l=e.n(d),v=e("q1tI"),f=l.a.bind(u.a),p=function(){function t(i,e,n){Object(a.a)(this,t),Object(c.a)(this,"x",void 0),Object(c.a)(this,"y",void 0),Object(c.a)(this,"fixedY",void 0),Object(c.a)(this,"speed",void 0),Object(c.a)(this,"cur",void 0),Object(c.a)(this,"max",void 0),this.x=e,this.y=n,this.fixedY=n,this.speed=.1,this.cur=i,this.max=100*Math.random()+150}return Object(o.a)(t,[{key:"update",value:function(){this.cur+=this.speed,this.y=this.fixedY+Math.sin(this.cur)*this.max}}]),t}(),b=function(){function t(i,e,n,s,r){Object(a.a)(this,t),Object(c.a)(this,"index",void 0),Object(c.a)(this,"totalPoints",void 0),Object(c.a)(this,"color",void 0),Object(c.a)(this,"points",void 0),Object(c.a)(this,"wrapWidth",void 0),Object(c.a)(this,"wrapHeight",void 0),Object(c.a)(this,"centerX",void 0),Object(c.a)(this,"centerY",void 0),Object(c.a)(this,"pointGap",void 0),this.index=i,this.totalPoints=e,this.color=n,this.points=[],this.wrapWidth=s,this.wrapHeight=r}return Object(o.a)(t,[{key:"resize",value:function(t,i){this.wrapWidth=t,this.wrapHeight=i,this.centerX=t/2,this.centerY=i/2,this.pointGap=this.wrapWidth/(this.totalPoints-1),this.init()}},{key:"init",value:function(){this.points=[];for(var t=0;t<this.totalPoints;t++){var i=new p(this.index+t,this.pointGap*t,this.centerY);this.points[t]=i}}},{key:"draw",value:function(t){t.beginPath,t.fillStyle=this.color;var i=this.points[0].x,e=this.points[0].y;t.moveTo(i,e);for(var n=1;n<this.totalPoints;n++){if(n<this.totalPoints-1)this.points[n].update();var s=(i+this.points[n].x)/2,r=(e+this.points[n].y)/2;t.quadraticCurveTo(i,e,s,r),i=this.points[n].x,e=this.points[n].y}t.lineTo(i,e),t.lineTo(this.wrapWidth,this.wrapHeight),t.lineTo(this.points[0].x,this.wrapHeight),t.fill(),t.closePath()}}]),t}(),w=function(){function t(i,e){Object(a.a)(this,t),Object(c.a)(this,"totalWaves",void 0),Object(c.a)(this,"totalPoints",void 0),Object(c.a)(this,"color",void 0),Object(c.a)(this,"waves",void 0),Object(c.a)(this,"wrapWidth",void 0),Object(c.a)(this,"wrapHeight",void 0),this.totalWaves=3,this.totalPoints=6,this.color=["rgba(0, 199, 235, 0.4)","rgba(0, 146, 199, 0.4)","rgba(200, 187, 158, 0.4)"],this.waves=[],this.wrapWidth=i,this.wrapHeight=e;for(var n=0;n<this.totalWaves;n++){var s=new b(n,this.totalPoints,this.color[n],i,e);this.waves[n]=s}}return Object(o.a)(t,[{key:"resize",value:function(t,i){for(var e=0;e<this.totalWaves;e++){this.waves[e].resize(t,i)}}},{key:"draw",value:function(t){for(var i=0;i<this.totalWaves;i++){this.waves[i].draw(t)}}}]),t}(),j=function(){var t=Object(v.useRef)(null),i=Object(v.useRef)(null),e=0,s=0,r=null,a=null;Object(v.useEffect)((function(){r=i.current.getContext("2d"),e=t.current.clientWidth,s=t.current.clientHeight,a=new w(e,s),window.addEventListener("resize",o,!1),o();var n=requestAnimationFrame(c);return function(){window.removeEventListener("resize",o),cancelAnimationFrame(n)}}),[t,i]);var o=function(){e=t.current.clientWidth,s=t.current.clientHeight,i.current.width=e,i.current.height=s,a.resize(e,s)},c=function t(){r.canvas.width=r.canvas.width,a.draw(r),requestAnimationFrame(t)};return Object(n.jsx)("div",{ref:t,className:f("wrap"),children:Object(n.jsx)("canvas",{ref:i})})};i.default=function(){return Object(n.jsx)(s.a,{children:Object(n.jsx)(r.a,{children:Object(n.jsx)(j,{})})})}},Bihf:function(t,i,e){t.exports={contents:"contents_contents__2RZDA"}},Qetd:function(t,i,e){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},UbMB:function(t,i,e){var n;!function(){"use strict";var e={}.hasOwnProperty;function s(){for(var t=[],i=0;i<arguments.length;i++){var n=arguments[i];if(n){var r=typeof n;if("string"===r||"number"===r)t.push(this&&this[n]||n);else if(Array.isArray(n))t.push(s.apply(this,n));else if("object"===r)for(var a in n)e.call(n,a)&&n[a]&&t.push(this&&this[a]||a)}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0===(n=function(){return s}.apply(i,[]))||(t.exports=n)}()},Z5kR:function(t,i,e){"use strict";var n=e("nKUr");i.a=function(t){return Object(n.jsx)("div",{className:"layout",children:t.children})}},Zust:function(t,i,e){t.exports={wrap:"wave_wrap__1a7wB"}},rePB:function(t,i,e){"use strict";function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}e.d(i,"a",(function(){return n}))},ug5v:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wave",function(){return e("6jQ3")}])},vuIU:function(t,i,e){"use strict";function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}e.d(i,"a",(function(){return s}))}},[["ug5v",0,1]]]);