_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"38tU":function(e,t,n){"use strict";var r=n("nKUr"),a=n("Bihf"),c=n.n(a),o=n("UbMB"),i=n.n(o).a.bind(c.a);t.a=function(e){return Object(r.jsx)("div",{className:i("contents"),children:e.children})}},Bihf:function(e,t,n){e.exports={contents:"contents_contents__2RZDA"}},Kokk:function(e,t,n){e.exports={hidden:"fixedHeader_hidden__AGUu4",fixedHeader:"fixedHeader_fixedHeader__18tHr",up:"fixedHeader_up__5cKX5"}},"U34/":function(e,t,n){e.exports={hidden:"dotChart_hidden__uzzBx",wrap:"dotChart_wrap__IBNIz",dotChart:"dotChart_dotChart__2ioul",arrow:"dotChart_arrow__ux2n4",top:"dotChart_top__1AuRv",right:"dotChart_right__2Zbr-",line:"dotChart_line__14ojx",horizontal:"dotChart_horizontal__8wXDj",vertical:"dotChart_vertical__1oHX_",category:"dotChart_category__3GgUv",leftTop:"dotChart_leftTop__Y0grj",leftBottom:"dotChart_leftBottom__3xtmn",bottomLeft:"dotChart_bottomLeft__21QWK",bottomRight:"dotChart_bottomRight__R8zI5",preference:"dotChart_preference__3cQh0",topLeft:"dotChart_topLeft__Ijb2V",topRight:"dotChart_topRight__PICcP",gray:"dotChart_gray__2aTa8",green:"dotChart_green__3IGDh",red:"dotChart_red__3dwFx",item:"dotChart_item__3_C__",inActive:"dotChart_inActive__2szcz",point:"dotChart_point__325jy",title:"dotChart_title__1LN_v",active:"dotChart_active__1VUw3"}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===c)for(var o in r)n.call(r,o)&&r[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},Z5kR:function(e,t,n){"use strict";var r=n("nKUr");t.a=function(e){return Object(r.jsx)("div",{className:"layout",children:e.children})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),o=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function d(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",u=c.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):i||c}}),[a,e.href,e.as]),f=u.href,h=u.as,_=e.children,p=e.replace,x=e.shallow,j=e.scroll,v=e.locale;"string"===typeof _&&(_=c.default.createElement("a",null,_));var b=c.Children.only(_),m=b&&"object"===typeof b&&b.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),g=r(y,2),O=g[0],C=g[1],N=c.default.useCallback((function(e){O(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,O]);(0,c.useEffect)((function(){var e=C&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof v?v:n&&n.locale,a=l[f+"%"+h+(r?"%"+r:"")];e&&!a&&d(n,f,h,{locale:r})}),[h,f,C,v,t,n]);var w={ref:N,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,f,h,p,x,j,v)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(n,f,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var I="undefined"!==typeof v?v:n&&n.locale,L=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(h,I,n&&n.locales,n&&n.domainLocales);w.href=L||(0,o.addBasePath)((0,o.addLocale)(h,I,n&&n.defaultLocale))}return c.default.cloneElement(b,w)};t.default=u},nZG9:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("Z5kR"),c=n("xt/i"),o=n("xvWl"),i=n("38tU"),s=n("U34/"),l=n.n(s),d=n("UbMB"),u=n.n(d),f=n("q1tI"),h=u.a.bind(l.a),_=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("i",{className:h("arrow","top")}),Object(r.jsx)("i",{className:h("arrow","right")})]})},p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("i",{className:h("line","horizontal")}),Object(r.jsx)("i",{className:h("line","vertical")})]})},x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:h("category","leftTop"),children:"\uc5ed\ub7c9\uc5d0 \uc798\ub9de\uc544\uc694"}),Object(r.jsx)("span",{className:h("category","leftBottom"),children:"\uc5ed\ub7c9\uc5d0 \uc548\ub9de\uc544\uc694"}),Object(r.jsx)("span",{className:h("category","bottomLeft"),children:"\uc720\ud615\uc5d0 \uc548\ub9de\uc544\uc694"}),Object(r.jsx)("span",{className:h("category","bottomRight"),children:"\uc720\ud615\uc5d0 \uc798\ub9de\uc544\uc694"})]})},j=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:h("preference","topLeft","gray"),children:"\ubcf4\ud1b5"}),Object(r.jsx)("div",{className:h("preference","topRight","green"),children:"\ucd94\ucc9c"}),Object(r.jsx)("div",{className:h("preference","bottomLeft","red"),children:"\ube44\ucd94\ucc9c"}),Object(r.jsx)("div",{className:h("preference","bottomRight","gray"),children:"\ubcf4\ud1b5"})]})},v=function(e){var t=e.index,n=e.activeIndex,a=e.setActiveIndex,c=e.title,o=e.position,i=o.x<0?0:o.x>10?10:o.x,s=o.y<0?0:o.y>12?12:o.y,l=i<=1?"flex-start":i>=10?"flex-end":"center",d=i<=5&&s<=6?"red":i>=6&&s>=7?"green":"gray";return Object(r.jsxs)("div",{className:h("item",d,{active:t===n},{inActive:n>=0&&t!==n}),style:{bottom:"".concat(function(e){return e<=6?40+25*(e-1):165+30*(e-6)}(s),"px"),left:"".concat(function(e){return e<=6?16+50*e:316+60*(e-6)}(i),"px"),alignItems:l},children:[Object(r.jsx)("i",{className:h("point")}),Object(r.jsx)("span",{className:h("title"),style:{justifyContent:l},onClick:function(){return a(t)},children:c})]})},b=function(e){var t=e.activeIndex,n=e.setActiveIndex,a=[{x:2,y:11,title:"\uc11c\ube44\uc2a4/\uace0\uac1d\uc9c0\uc6d0"},{x:10,y:10,title:"\ud64d\ubcf4/\ub9c8\ucf00\ud305"},{x:0,y:9,title:"\uacbd\uc601 \uae30\ud68d/\uc9c0\uc6d0"},{x:5,y:8,title:"\uae08\uc735/\ubcf4\ud5d8"},{x:9,y:7,title:"\uc601\uc5c5"},{x:2,y:6,title:"\uc5f0\uad6c/\uac1c\ubc1c"},{x:4,y:5,title:"\uc758\ub8cc/\ubcf4\uac74"},{x:3,y:4,title:"\uac74\uc124/\uc5d4\uc9c0\ub2c8\uc5b4"},{x:2,y:3,title:"\uc0dd\uc0b0/\uc720\ud1b5/\ud488\uc9c8"},{x:7,y:2,title:"\ub514\uc790\uc778"},{x:10,y:1,title:"IT \uc11c\ube44\uc2a4"}].map((function(e,a){return Object(r.jsx)(v,{index:a,activeIndex:t,setActiveIndex:n,title:e.title,position:{x:e.x,y:e.y}},a)}));return Object(r.jsx)(r.Fragment,{children:a})},m=function(){var e=Object(f.useState)(-1),t=e[0],n=e[1];return Object(r.jsx)("div",{className:h("wrap"),children:Object(r.jsxs)("div",{className:h("dotChart"),children:[Object(r.jsx)(_,{}),Object(r.jsx)(p,{}),Object(r.jsx)(x,{}),Object(r.jsx)(j,{}),Object(r.jsx)(b,{activeIndex:t,setActiveIndex:n})]})})};t.default=function(){return Object(r.jsxs)(a.a,{children:[Object(r.jsx)(c.a,{}),Object(r.jsx)(o.a,{}),Object(r.jsx)(i.a,{children:Object(r.jsx)(m,{})})]})}},oZb9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dotChart",function(){return n("nZG9")}])},vN0C:function(e,t,n){e.exports={hidden:"header_hidden__1kCA3",header:"header_header__ADI_k",textWrap:"header_textWrap__1ZvFZ",text:"header_text__8g_XM"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=(0,a.useRef)(),l=(0,a.useState)(!1),d=r(l,2),u=d[0],f=d[1],h=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return(0,a.useEffect)((function(){if(!o&&!u){var e=(0,c.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[u]),[h,u]};var a=n("q1tI"),c=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var i=new Map},"xt/i":function(e,t,n){"use strict";var r=n("nKUr"),a=n("YFqc"),c=n.n(a),o=(n("q1tI"),n("vN0C")),i=n.n(o),s=n("UbMB"),l=n.n(s).a.bind(i.a);t.a=function(){return Object(r.jsx)("header",{className:l("header"),children:Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("div",{className:l("textWrap"),children:Object(r.jsx)("a",{className:l("text"),children:"Home"})})})})}},xvWl:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),c=n("xt/i"),o=n("Kokk"),i=n.n(o),s=n("UbMB"),l=n.n(s).a.bind(i.a);t.a=function(){var e=0,t=Object(a.useState)(!0),n=t[0],o=t[1],i=function(t){t.preventDefault();var n=window.pageYOffset||document.documentElement.scrollTop;o(n>e),e=n<=0?0:n};return Object(a.useEffect)((function(){return document.addEventListener("scroll",i,!1),function(){document.removeEventListener("scroll",i)}}),[]),Object(r.jsx)("div",{className:l("fixedHeader",n&&"up"),children:Object(r.jsx)(c.a,{})})}}},[["oZb9",0,2,1]]]);