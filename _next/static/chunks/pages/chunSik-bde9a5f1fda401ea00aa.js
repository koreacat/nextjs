_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"38tU":function(e,n,t){"use strict";var c=t("nKUr"),i=t("Bihf"),r=t.n(i),o=t("UbMB"),s=t.n(o).a.bind(r.a);n.a=function(e){return Object(c.jsx)("div",{className:s("contents"),children:e.children})}},"5a1a":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chunSik",function(){return t("6yMe")}])},"6yMe":function(e,n,t){"use strict";t.r(n);var c=t("nKUr"),i=t("38tU"),r=t("Z5kR"),o=t("IRpm"),s=t.n(o),a=t("UbMB"),u=t.n(a),l=t("q1tI"),f=u.a.bind(s.a),d=["/nextjs/img/chunSik/imgChunSikLoopy.png","/nextjs/img/chunSik/imgChunSikPitter.png","/nextjs/img/chunSik/imgChunSikSanta.png","/nextjs/img/chunSik/imgChunSikLoopy.png","/nextjs/img/chunSik/imgChunSikPitter.png"],h=function(e){var n=e.clothes,t=e.setClothes,i=d.map((function(e,i){return Object(c.jsx)("li",{className:f("item"),onClick:function(){return function(e){n!==e&&(new Audio("/nextjs/sound/chunSik/soundFlicks.mp3").play(),t(e))}(e)},children:Object(c.jsx)("img",{src:e})},i)}));return Object(c.jsx)("ul",{className:f("list"),children:i})},p=function(){var e=Object(l.useState)(!1),n=e[0],t=e[1],i=Object(l.useState)(null),r=i[0],o=i[1];Object(l.useEffect)((function(){var e=new Audio("/nextjs/sound/chunSik/soundQuincasMoreira.mp3");return o(e),e.addEventListener("ended",(function(){e.currentTime=0,e.play()})),function(){e.pause()}}),[]);var s=function(){n?(t(!1),r.pause()):(t(!0),r.play())};return Object(c.jsx)("div",{className:f("soundWrap"),children:n?Object(c.jsx)("span",{className:f("soundIcon"),onClick:s}):Object(c.jsx)("span",{className:f("soundIcon","mute"),onClick:s})})},_=function(){var e=Object(l.useState)(""),n=e[0],t=e[1];return Object(c.jsx)("div",{className:f("wrap"),children:Object(c.jsxs)("div",{className:f("frame"),children:[Object(c.jsx)(p,{}),Object(c.jsxs)("div",{className:f("chunSikWrap"),children:[Object(c.jsx)("span",{className:f("chunSikBody")}),Object(c.jsx)("span",{className:f("chunSikFace")}),Object(c.jsx)("span",{className:f("chunSikClothes"),style:{backgroundImage:"url('".concat(n,"')")},onClick:function(){""!==n&&(new Audio("/nextjs/sound/chunSik/soundFlicks.mp3").play(),t(""))}})]}),Object(c.jsx)("div",{className:f("selectWrap"),children:Object(c.jsx)(h,{clothes:n,setClothes:t})})]})})};n.default=function(){return Object(c.jsx)(r.a,{children:Object(c.jsx)(i.a,{children:Object(c.jsx)(_,{})})})}},Bihf:function(e,n,t){e.exports={contents:"contents_contents__2RZDA"}},IRpm:function(e,n,t){e.exports={hidden:"chunSik_hidden__2cH9c",wrap:"chunSik_wrap__16c4l",frame:"chunSik_frame__3LFfp",soundWrap:"chunSik_soundWrap__1mQkX",soundIcon:"chunSik_soundIcon__26idi",mute:"chunSik_mute__2AJG_",chunSikWrap:"chunSik_chunSikWrap__LUMyX",chunSikFace:"chunSik_chunSikFace__N7MTI",faceSwing:"chunSik_faceSwing__I51Q2",chunSikBody:"chunSik_chunSikBody__OxB_V",chunSikClothes:"chunSik_chunSikClothes__3e5T-",selectWrap:"chunSik_selectWrap__2tU5j",list:"chunSik_list__2fbQP",item:"chunSik_item__33jt-",chunSikEyes:"chunSik_chunSikEyes__2bdeu",blicking:"chunSik_blicking__1NuA9"}},Kokk:function(e,n,t){e.exports={hidden:"fixedHeader_hidden__AGUu4",fixedHeader:"fixedHeader_fixedHeader__18tHr",up:"fixedHeader_up__5cKX5"}},RzvT:function(e,n,t){e.exports={hidden:"footer_hidden__3PsVa",footer:"footer_footer__3XHPM"}},UbMB:function(e,n,t){var c;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var c=arguments[n];if(c){var r=typeof c;if("string"===r||"number"===r)e.push(this&&this[c]||c);else if(Array.isArray(c))e.push(i.apply(this,c));else if("object"===r)for(var o in c)t.call(c,o)&&c[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(c=function(){return i}.apply(n,[]))||(e.exports=c)}()},YFqc:function(e,n,t){e.exports=t("cTJO")},Z5kR:function(e,n,t){"use strict";var c=t("nKUr"),i=t("YFqc"),r=t.n(i),o=t("q1tI"),s=t("vN0C"),a=t.n(s),u=t("UbMB"),l=t.n(u),f=l.a.bind(a.a),d=function(){return Object(c.jsx)("header",{className:f("header"),children:Object(c.jsx)(r.a,{href:"/",children:Object(c.jsx)("div",{children:Object(c.jsx)("a",{children:"index"})})})})},h=t("Kokk"),p=t.n(h),_=l.a.bind(p.a),j=function(){var e=0,n=Object(o.useState)(!0),t=(n[0],n[1]),i=function(n){n.preventDefault();var c=window.pageYOffset||document.documentElement.scrollTop;t(c>e),e=c<=0?0:c};return Object(o.useEffect)((function(){return document.addEventListener("scroll",i,!1),function(){document.removeEventListener("scroll",i)}}),[]),Object(c.jsx)("div",{className:_("fixedHeader",!1),children:Object(c.jsx)(d,{})})},v=t("RzvT"),k=t.n(v),b=l.a.bind(k.a),m=function(){return Object(c.jsx)("footer",{className:b("footer")})};n.a=function(e){return Object(c.jsxs)("div",{className:"layout",children:[Object(c.jsx)(d,{}),Object(c.jsx)(j,{}),e.children,Object(c.jsx)(m,{})]})}},cTJO:function(e,n,t){"use strict";var c=t("J4zp"),i=t("284h");n.__esModule=!0,n.default=void 0;var r=i(t("q1tI")),o=t("elyg"),s=t("nOHt"),a=t("vNVm"),u={};function l(e,n,t,c){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,c).catch((function(e){0}));var i=c&&"undefined"!==typeof c.locale?c.locale:e&&e.locale;u[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),i=t&&t.pathname||"/",f=r.default.useMemo((function(){var n=(0,o.resolveHref)(i,e.href,!0),t=c(n,2),r=t[0],s=t[1];return{href:r,as:e.as?(0,o.resolveHref)(i,e.as):s||r}}),[i,e.href,e.as]),d=f.href,h=f.as,p=e.children,_=e.replace,j=e.shallow,v=e.scroll,k=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var b=r.Children.only(p),m=b&&"object"===typeof b&&b.ref,x=(0,a.useIntersection)({rootMargin:"200px"}),S=c(x,2),O=S[0],g=S[1],y=r.default.useCallback((function(e){O(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,O]);(0,r.useEffect)((function(){var e=g&&n&&(0,o.isLocalURL)(d),c="undefined"!==typeof k?k:t&&t.locale,i=u[d+"%"+h+(c?"%"+c:"")];e&&!i&&l(t,d,h,{locale:c})}),[h,d,g,k,n,t]);var N={ref:y,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,c,i,r,s,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=c.indexOf("#")<0),n[i?"replace":"push"](t,c,{shallow:r,locale:a,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,d,h,_,j,v,k)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(t,d,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var w="undefined"!==typeof k?k:t&&t.locale,C=t&&t.isLocaleDomain&&(0,o.getDomainLocale)(h,w,t&&t.locales,t&&t.domainLocales);N.href=C||(0,o.addBasePath)((0,o.addLocale)(h,w,t&&t.defaultLocale))}return r.default.cloneElement(b,N)};n.default=f},vN0C:function(e,n,t){e.exports={hidden:"header_hidden__1kCA3",header:"header_header__ADI_k"}},vNVm:function(e,n,t){"use strict";var c=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,a=(0,i.useRef)(),u=(0,i.useState)(!1),l=c(u,2),f=l[0],d=l[1],h=(0,i.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||f||e&&e.tagName&&(a.current=function(e,n,t){var c=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var c=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=c.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:i,elements:c}),t}(t),i=c.id,r=c.observer,o=c.elements;return o.set(e,n),r.observe(e),function(){o.delete(e),r.unobserve(e),0===o.size&&(r.disconnect(),s.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,i.useEffect)((function(){if(!o&&!f){var e=(0,r.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[f]),[h,f]};var i=t("q1tI"),r=t("0G5g"),o="undefined"!==typeof IntersectionObserver;var s=new Map}},[["5a1a",0,2,1]]]);