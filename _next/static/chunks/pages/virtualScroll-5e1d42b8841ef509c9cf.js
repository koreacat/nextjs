_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"38tU":function(e,t,n){"use strict";var r=n("nKUr"),o=n("Bihf"),c=n.n(o),a=n("UbMB"),i=n.n(a).a.bind(c.a);t.a=function(e){return Object(r.jsx)("div",{className:i("contents"),children:e.children})}},Bihf:function(e,t,n){e.exports={contents:"contents_contents__2RZDA"}},COtc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/virtualScroll",function(){return n("zdog")}])},Kokk:function(e,t,n){e.exports={hidden:"fixedHeader_hidden__AGUu4",fixedHeader:"fixedHeader_fixedHeader__18tHr",up:"fixedHeader_up__5cKX5"}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(o.apply(this,r));else if("object"===c)for(var a in r)n.call(r,a)&&r[a]&&e.push(this&&this[a]||a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},Z5kR:function(e,t,n){"use strict";var r=n("nKUr");t.a=function(e){return Object(r.jsx)("div",{className:"layout",children:e.children})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,_=e.scroll,x=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var j=c.Children.only(v),m=j&&"object"===typeof j&&j.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),O=r(y,2),g=O[0],w=O[1],E=c.default.useCallback((function(e){g(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,g]);(0,c.useEffect)((function(){var e=w&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,w,x,t,n]);var M={ref:E,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,h,b,_,x)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var k="undefined"!==typeof x?x:n&&n.locale,N=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);M.href=N||(0,a.addBasePath)((0,a.addLocale)(p,k,n&&n.defaultLocale))}return c.default.cloneElement(j,M)};t.default=f},sgxT:function(e,t,n){},vN0C:function(e,t,n){e.exports={hidden:"header_hidden__1kCA3",header:"header_header__ADI_k",textWrap:"header_textWrap__1ZvFZ",text:"header_text__8g_XM"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),c=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map},"xt/i":function(e,t,n){"use strict";var r=n("nKUr"),o=n("YFqc"),c=n.n(o),a=(n("q1tI"),n("vN0C")),i=n.n(a),s=n("UbMB"),u=n.n(s).a.bind(i.a);t.a=function(){return Object(r.jsx)("header",{className:u("header"),children:Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("div",{className:u("textWrap"),children:Object(r.jsx)("a",{className:u("text"),children:"Home"})})})})}},xvWl:function(e,t,n){"use strict";var r=n("nKUr"),o=n("q1tI"),c=n("xt/i"),a=n("Kokk"),i=n.n(a),s=n("UbMB"),u=n.n(s).a.bind(i.a);t.a=function(){var e=0,t=Object(o.useState)(!0),n=t[0],a=t[1],i=function(t){t.preventDefault();var n=window.pageYOffset||document.documentElement.scrollTop;a(n>e),e=n<=0?0:n};return Object(o.useEffect)((function(){return document.addEventListener("scroll",i,!1),function(){document.removeEventListener("scroll",i)}}),[]),Object(r.jsx)("div",{className:u("fixedHeader",n&&"up"),children:Object(r.jsx)(c.a,{})})}},zdog:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("Z5kR"),c=n("xt/i"),a=n("xvWl"),i=n("38tU"),s=n("sgxT"),u=n.n(s),l=n("UbMB"),f=(n.n(l).a.bind(u.a),function(){return Object(r.jsx)("div",{children:"virtualScroll"})});t.default=function(){return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(c.a,{}),Object(r.jsx)(a.a,{}),Object(r.jsx)(i.a,{children:Object(r.jsx)(f,{})})]})}}},[["COtc",0,2,1,3]]]);