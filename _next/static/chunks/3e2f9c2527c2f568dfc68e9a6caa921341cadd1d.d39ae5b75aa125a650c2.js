(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"6Iwu":function(e,r,t){e.exports={hidden:"circleProgress_hidden__-97q0",circleProgress:"circleProgress_circleProgress__2EBB9",circleWrap:"circleProgress_circleWrap__1Fzzg",YELLOW:"circleProgress_YELLOW__19bMx",front:"circleProgress_front__7AsGG",border:"circleProgress_border__3duRE",LIME:"circleProgress_LIME__1odyS",GREEN:"circleProgress_GREEN__pYC-p",SKY:"circleProgress_SKY__2dUxZ",BLUE:"circleProgress_BLUE__1uBC1",circle:"circleProgress_circle__1UaAB",back:"circleProgress_back__1xL-g",text:"circleProgress_text__2f7_T",title:"circleProgress_title__2QAqw",num:"circleProgress_num__I4dya"}},"6XyM":function(e,r,t){"use strict";var n=t("nKUr"),c=t("rePB"),o=t("6Iwu"),s=t.n(o),i=t("UbMB"),a=t.n(i),l=t("q1tI");function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){Object(c.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=a.a.bind(s.a);r.a=function(e){var r=Object(l.useState)(0),t=r[0],c=r[1],o=e.r,s=e.title,i=e.percent,a=e.colorType;i=i<0?0:i>100?100:i;var u=2*o,p=Math.round(u*Math.PI),h=Math.round(p-p*t/100);Object(l.useEffect)((function(){c(Math.round(i))}),[i]);var b={strokeDasharray:p,transform:"translate(".concat(4.5,"px, ").concat(4.5,"px)")};return Object(n.jsxs)("div",{className:d("circleProgress"),children:[Object(n.jsxs)("svg",{className:d("circleWrap",a),style:{width:u+9,height:u+9},children:[Object(n.jsx)("circle",{className:d("circle","back"),cx:o,cy:o,r:o,style:f({strokeWidth:9},b)}),Object(n.jsx)("circle",{className:d("circle","border"),cx:o,cy:o,r:o,style:f({strokeWidth:9,strokeDashoffset:h},b)}),Object(n.jsx)("circle",{className:d("circle","front"),cx:o,cy:o,r:o,style:f({strokeWidth:7,strokeDashoffset:h},b)})]}),Object(n.jsxs)("div",{className:d("text"),children:[Object(n.jsx)("span",{className:d("title"),children:s}),Object(n.jsxs)("span",{className:d("num"),children:[t,"%"]})]})]})}},AhJb:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=function(e){return Math.floor(Math.random()*e)}},Kokk:function(e,r,t){e.exports={hidden:"fixedHeader_hidden__AGUu4",fixedHeader:"fixedHeader_fixedHeader__18tHr",up:"fixedHeader_up__5cKX5"}},RzvT:function(e,r,t){e.exports={hidden:"footer_hidden__3PsVa",footer:"footer_footer__3XHPM"}},UbMB:function(e,r,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function c(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(c.apply(this,n));else if("object"===o)for(var s in n)t.call(n,s)&&n[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(r,[]))||(e.exports=n)}()},YFqc:function(e,r,t){e.exports=t("cTJO")},Z5kR:function(e,r,t){"use strict";var n=t("nKUr"),c=t("YFqc"),o=t.n(c),s=t("q1tI"),i=t("vN0C"),a=t.n(i),l=t("UbMB"),u=t.n(l),f=u.a.bind(a.a),d=function(){return Object(n.jsx)("header",{className:f("header"),children:Object(n.jsx)(o.a,{href:"/",children:Object(n.jsx)("div",{children:Object(n.jsx)("a",{children:"index"})})})})},p=t("Kokk"),h=t.n(p),b=u.a.bind(h.a),_=function(){var e=0,r=Object(s.useState)(!0),t=(r[0],r[1]),c=function(r){r.preventDefault();var n=window.pageYOffset||document.documentElement.scrollTop;t(n>e),e=n<=0?0:n};return Object(s.useEffect)((function(){return document.addEventListener("scroll",c,!1),function(){document.removeEventListener("scroll",c)}}),[]),Object(n.jsx)("div",{className:b("fixedHeader",!1),children:Object(n.jsx)(d,{})})},v=t("RzvT"),j=t.n(v),O=u.a.bind(j.a),x=function(){return Object(n.jsx)("footer",{className:O("footer"),children:Object(n.jsx)(o.a,{href:"/",children:Object(n.jsx)("div",{children:Object(n.jsx)("a",{children:"footer"})})})})};r.a=function(e){return Object(n.jsxs)("div",{className:"layout",children:[Object(n.jsx)(d,{}),Object(n.jsx)(_,{}),e.children,Object(n.jsx)(x,{})]})}},cTJO:function(e,r,t){"use strict";var n=t("J4zp"),c=t("284h");r.__esModule=!0,r.default=void 0;var o=c(t("q1tI")),s=t("elyg"),i=t("nOHt"),a=t("vNVm"),l={};function u(e,r,t,n){if(e&&(0,s.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var c=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[r+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var r=!1!==e.prefetch,t=(0,i.useRouter)(),c=t&&t.pathname||"/",f=o.default.useMemo((function(){var r=(0,s.resolveHref)(c,e.href,!0),t=n(r,2),o=t[0],i=t[1];return{href:o,as:e.as?(0,s.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),d=f.href,p=f.as,h=e.children,b=e.replace,_=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var O=o.Children.only(h),x=O&&"object"===typeof O&&O.ref,y=(0,a.useIntersection)({rootMargin:"200px"}),g=n(y,2),m=g[0],P=g[1],E=o.default.useCallback((function(e){m(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,m]);(0,o.useEffect)((function(){var e=P&&r&&(0,s.isLocalURL)(d),n="undefined"!==typeof j?j:t&&t.locale,c=l[d+"%"+p+(n?"%"+n:"")];e&&!c&&u(t,d,p,{locale:n})}),[p,d,P,j,r,t]);var k={ref:E,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,r,t,n,c,o,i,a){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),r[c?"replace":"push"](t,n,{shallow:o,locale:a,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,b,_,v,j)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var w="undefined"!==typeof j?j:t&&t.locale,M=t&&t.isLocaleDomain&&(0,s.getDomainLocale)(p,w,t&&t.locales,t&&t.domainLocales);k.href=M||(0,s.addBasePath)((0,s.addLocale)(p,w,t&&t.defaultLocale))}return o.default.cloneElement(O,k)};r.default=f},rePB:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,"a",(function(){return n}))},vN0C:function(e,r,t){e.exports={hidden:"header_hidden__1kCA3",header:"header_header__ADI_k"}},vNVm:function(e,r,t){"use strict";var n=t("J4zp");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!s,a=(0,c.useRef)(),l=(0,c.useState)(!1),u=n(l,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||f||e&&e.tagName&&(a.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=i.get(r);if(t)return t;var n=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(r,t={id:r,observer:c,elements:n}),t}(t),c=n.id,o=n.observer,s=n.elements;return s.set(e,r),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return(0,c.useEffect)((function(){if(!s&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=t("q1tI"),o=t("0G5g"),s="undefined"!==typeof IntersectionObserver;var i=new Map}}]);