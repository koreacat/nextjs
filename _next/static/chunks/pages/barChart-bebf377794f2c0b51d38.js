_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"38tU":function(e,t,n){"use strict";var r=n("nKUr"),a=n("Bihf"),i=n.n(a),o=n("UbMB"),c=n.n(o).a.bind(i.a);t.a=function(e){return Object(r.jsx)("div",{className:c("contents"),children:e.children})}},Bihf:function(e,t,n){e.exports={contents:"contents_contents__2RZDA"}},Kokk:function(e,t,n){e.exports={hidden:"fixedHeader_hidden__AGUu4",fixedHeader:"fixedHeader_fixedHeader__18tHr",up:"fixedHeader_up__5cKX5"}},RzvT:function(e,t,n){e.exports={hidden:"footer_hidden__3PsVa",footer:"footer_footer__3XHPM"}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===i)for(var o in r)n.call(r,o)&&r[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},XGb0:function(e,t,n){e.exports={hidden:"charts_hidden__30FDR",wrap:"charts_wrap__2ziFw",barChartBtn:"charts_barChartBtn__Hbqw5",open:"charts_open__2HuqE"}},YFqc:function(e,t,n){e.exports=n("cTJO")},Z5kR:function(e,t,n){"use strict";var r=n("nKUr"),a=n("YFqc"),i=n.n(a),o=n("q1tI"),c=n("vN0C"),s=n.n(c),l=n("UbMB"),u=n.n(l),d=u.a.bind(s.a),f=function(){return Object(r.jsx)("header",{className:d("header"),children:Object(r.jsx)(i.a,{href:"/",children:Object(r.jsx)("div",{children:Object(r.jsx)("a",{children:"index"})})})})},h=n("Kokk"),v=n.n(h),p=u.a.bind(v.a),b=function(){var e=0,t=Object(o.useState)(!0),n=(t[0],t[1]),a=function(t){t.preventDefault();var r=window.pageYOffset||document.documentElement.scrollTop;n(r>e),e=r<=0?0:r};return Object(o.useEffect)((function(){return document.addEventListener("scroll",a,!1),function(){document.removeEventListener("scroll",a)}}),[]),Object(r.jsx)("div",{className:p("fixedHeader",!1),children:Object(r.jsx)(f,{})})},_=n("RzvT"),j=n.n(_),x=u.a.bind(j.a),m=function(){return Object(r.jsx)("footer",{className:x("footer")})};t.a=function(e){return Object(r.jsxs)("div",{className:"layout",children:[Object(r.jsx)(f,{}),Object(r.jsx)(b,{}),e.children,Object(r.jsx)(m,{})]})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=a(n("q1tI")),o=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.pathname||"/",d=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):c||i}}),[a,e.href,e.as]),f=d.href,h=d.as,v=e.children,p=e.replace,b=e.shallow,_=e.scroll,j=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var x=i.Children.only(v),m=x&&"object"===typeof x&&x.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),g=r(O,2),w=g[0],y=g[1],N=i.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);(0,i.useEffect)((function(){var e=y&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof j?j:n&&n.locale,a=l[f+"%"+h+(r?"%"+r:"")];e&&!a&&u(n,f,h,{locale:r})}),[h,f,y,j,t,n]);var C={ref:N,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,f,h,p,b,_,j)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,f,h,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var E="undefined"!==typeof j?j:n&&n.locale,M=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(h,E,n&&n.locales,n&&n.domainLocales);C.href=M||(0,o.addBasePath)((0,o.addLocale)(h,E,n&&n.defaultLocale))}return i.default.cloneElement(x,C)};t.default=d},nYaM:function(e,t,n){e.exports={hidden:"barChart_hidden__2-dh6",wrap:"barChart_wrap__2Oez-",bar:"barChart_bar__GnhG1",title:"barChart_title__1SER4",value:"barChart_value__1THeD",emphasized:"barChart_emphasized__3b7o2"}},oNDx:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("Z5kR"),i=n("38tU"),o=n("q1tI"),c=n("nYaM"),s=n.n(c),l=n("UbMB"),u=n.n(l),d=u.a.bind(s.a),f=function(e){var t,n=e.title,a=e.value,i=e.emphasized,c=e.interactionTrigger,s=Object(o.useState)(20),l=s[0],u=s[1];return Object(o.useEffect)((function(){return c?t=setTimeout((function(){u(20+5*a)}),600):u(20),function(){clearTimeout(t)}}),[c,a]),Object(r.jsxs)("div",{className:d("bar",{emphasized:i}),children:[Object(r.jsx)("span",{className:d("title"),children:n}),Object(r.jsx)("span",{className:d("value"),style:{width:l,transition:c&&"all .7s ease-in-out"}})]})},h=function(e){var t=e.data,n=e.interactionTrigger,a=null===t||void 0===t?void 0:t.map((function(e,t){var a=e.title,i=e.value,o=e.emphasized;return Object(r.jsx)(f,{title:a||"",value:i?i>100?100:i<0?0:i:0,emphasized:o,interactionTrigger:n},t)}));return Object(r.jsx)("div",{className:d("wrap"),children:a})},v=[{title:"\uacf5\uc815\ubcf4\uc0c1 \uae30\uc5c5",value:70},{title:"\uc0dd\ud65c\ubcf5\uc9c0 \uae30\uc5c5",value:50},{title:"\ub2a5\ub825\uc790 \uae30\uc5c5",value:10},{title:"\uc0ac\ub0b4\ud654\ud569 \uae30\uc5c5",value:100,emphasized:!0},{title:"\uc790\uc728\ubb38\ud654 \uae30\uc5c5",value:40},{title:"\uc548\uc815\uc801\uc778 \uae30\uc5c5",value:60},{title:"\uce6d\ucc2c\uac00\ub4dd \uae30\uc5c5",value:80},{title:"\ub9ac\ub354\uc88b\uc740 \uae30\uc5c5",value:90,emphasized:!0},{title:"\uc131\uc7a5\uc9c0\uc6d0 \uae30\uc5c5",value:80},{title:"\uacf5\uc815\ud3c9\uac00 \uae30\uc5c5",value:60},{title:"\uc18c\ud1b5\ud558\ub294 \uae30\uc5c5",value:70},{title:"\ub9cc\uc871\ub3c4\ub192\uc740 \uae30\uc5c5",value:50},{title:"\uc790\ub791\uc2a4\ub7f0 \uae30\uc5c5",value:40},{title:"\uc0ac\ud68c\uc801 \uae30\uc5c5",value:70},{title:"\uc724\ub9ac\uc801 \uae30\uc5c5",value:90,emphasized:!0}],p=n("XGb0"),b=n.n(p),_=u.a.bind(b.a);t.default=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return Object(r.jsx)(a.a,{children:Object(r.jsx)(i.a,{children:Object(r.jsxs)("div",{className:_("wrap"),children:[Object(r.jsx)("button",{className:_("barChartBtn",{open:t}),onClick:function(){return n(!t)},children:t?"\uc811\uc5b4\ub450\uae30":"\ud655\uc778\ud558\uae30"}),Object(r.jsx)("div",{style:{overflow:"hidden",height:t?"600px":"0px",transition:t&&".5s all ease-in-out"},children:Object(r.jsx)("div",{style:{padding:"15px"},children:Object(r.jsx)(h,{data:v,interactionTrigger:t})})})]})})})}},sRLJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/barChart",function(){return n("oNDx")}])},vN0C:function(e,t,n){e.exports={hidden:"header_hidden__1kCA3",header:"header_header__ADI_k"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),d=u[0],f=u[1],h=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,a.useEffect)((function(){if(!o&&!d){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[h,d]};var a=n("q1tI"),i=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var c=new Map}},[["sRLJ",0,2,1]]]);