_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"H/sG":function(e,t,n){},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(c.apply(this,r));else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),i=n("elyg"),a=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,i.resolveHref)(c,e.as):a||o}}),[c,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,h=e.shallow,j=e.scroll,O=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=o.Children.only(v),m=y&&"object"===typeof y&&y.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),g=r(x,2),w=g[0],E=g[1],_=o.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);(0,o.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof O?O:n&&n.locale,c=u[d+"%"+p+(r?"%"+r:"")];e&&!c&&l(n,d,p,{locale:r})}),[p,d,E,O,t,n]);var P={ref:_,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:s,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,d,p,b,h,j,O)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var L="undefined"!==typeof O?O:n&&n.locale,M=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,L,n&&n.locales,n&&n.domainLocales);P.href=M||(0,i.addBasePath)((0,i.addLocale)(p,L,n&&n.defaultLocale))}return o.default.cloneElement(y,P)};t.default=f},cha2:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("rePB"),o=n("g4pe"),i=n.n(o),a=(n("H/sG"),n("YFqc")),s=n.n(a),u=n("q1tI"),l=function(){return Object(r.jsx)("header",{children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("div",{children:Object(r.jsx)("a",{children:"index"})})})})};function f(){return Object(r.jsx)("footer",{children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("div",{children:Object(r.jsx)("a",{children:"index"})})})})}function d(e){return Object(r.jsx)("div",{className:"contents",children:e.children})}var p=n("UbMB"),v=n.n(p);function b(){var e=0,t=Object(u.useState)(!0),n=t[0],c=t[1],o=function(t){t.preventDefault();var n=window.pageYOffset||document.documentElement.scrollTop;c(n>e),e=n<=0?0:n};return Object(u.useEffect)((function(){return document.addEventListener("scroll",o,!1),function(){document.removeEventListener("scroll",o)}}),[]),Object(r.jsx)("div",{className:v()("fixedHeader",n&&"Up"),children:Object(r.jsx)(l,{})})}function h(e){return Object(r.jsxs)("div",{className:"layout",children:[Object(r.jsx)(l,{}),Object(r.jsx)(b,{}),Object(r.jsx)(d,{children:e.children}),Object(r.jsx)(f,{})]})}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"app"}),Object(r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),Object(r.jsx)(h,{children:Object(r.jsx)(t,O({},n))})]})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,c.useRef)(),u=(0,c.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),a.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var a=new Map}},[[0,0,2,1,3]]]);