_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{W4Pv:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var r=t("nKUr"),o=t("g4pe"),c=t.n(o),a=t("YFqc"),i=t.n(a);function u(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"A"}),Object(r.jsx)("meta",{name:"a",content:"a"})]}),Object(r.jsx)("h1",{children:"A"}),Object(r.jsx)(i.a,{href:"/",children:Object(r.jsx)("a",{children:"index"})})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cNoJ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/a",function(){return t("W4Pv")}])},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),u=t("vNVm"),l={};function s(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var m=c.Children.only(v),_=m&&"object"===typeof m&&m.ref,j=(0,u.useIntersection)({rootMargin:"200px"}),w=r(j,2),E=w[0],L=w[1],O=c.default.useCallback((function(e){E(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,E]);(0,c.useEffect)((function(){var e=L&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,L,g,n,t]);var x={ref:O,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,h,b,y,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var M="undefined"!==typeof g?g:t&&t.locale,N=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,M,t&&t.locales,t&&t.domainLocales);x.href=N||(0,a.addBasePath)((0,a.addLocale)(p,M,t&&t.defaultLocale))}return c.default.cloneElement(m,x)};n.default=f},g4pe:function(e,n,t){e.exports=t("8Kt/")},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,u=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),c=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["cNoJ",0,2,1]]]);