_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=l.length;u<s;u++){var f=l[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var d=o.props[f],h=r[f]||new Set;"name"===f&&i||!h.has(d)?(h.add(d),r[f]=h):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}p.rewind=function(){};var y=p;t.default=y},"98Ni":function(e,t,n){e.exports={prevPostBtn:"posts_prevPostBtn__EcErt",nextPostBtn:"posts_nextPostBtn__F4A1T"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,u,"next",e)}function u(e){r(i,o,a,c,u,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return o}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Kokk:function(e,t,n){e.exports={hidden:"fixedHeader_hidden__AGUu4",fixedHeader:"fixedHeader_fixedHeader__18tHr",up:"fixedHeader_up__5cKX5"}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RzvT:function(e,t,n){e.exports={hidden:"footer_hidden__3PsVa",footer:"footer_footer__3XHPM"}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(o.apply(this,r));else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},Z5kR:function(e,t,n){"use strict";var r=n("nKUr"),o=n("YFqc"),a=n.n(o),i=n("q1tI"),c=n("vN0C"),u=n.n(c),s=n("UbMB"),f=n.n(s),d=f.a.bind(u.a),l=function(){return Object(r.jsx)("header",{className:d("header"),children:Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("div",{children:Object(r.jsx)("a",{children:"index"})})})})},h=n("Kokk"),p=n.n(h),y=f.a.bind(p.a),v=function(){var e=0,t=Object(i.useState)(!0),n=(t[0],t[1]),o=function(t){t.preventDefault();var r=window.pageYOffset||document.documentElement.scrollTop;n(r>e),e=r<=0?0:r};return Object(i.useEffect)((function(){return document.addEventListener("scroll",o,!1),function(){document.removeEventListener("scroll",o)}}),[]),Object(r.jsx)("div",{className:y("fixedHeader",!1),children:Object(r.jsx)(l,{})})},m=n("RzvT"),b=n.n(m),_=f.a.bind(b.a),g=function(){return Object(r.jsx)("footer",{className:_("footer")})};t.a=function(e){return Object(r.jsxs)("div",{className:"layout",children:[Object(r.jsx)(l,{}),Object(r.jsx)(v,{}),e.children,Object(r.jsx)(g,{})]})}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),u=n("vNVm"),s={};function f(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",d=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),l=d.href,h=d.as,p=e.children,y=e.replace,v=e.shallow,m=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var _=a.Children.only(p),g=_&&"object"===typeof _&&_.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),j=r(x,2),I=j[0],O=j[1],w=a.default.useCallback((function(e){I(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,I]);(0,a.useEffect)((function(){var e=O&&t&&(0,i.isLocalURL)(l),r="undefined"!==typeof b?b:n&&n.locale,o=s[l+"%"+h+(r?"%"+r:"")];e&&!o&&f(n,l,h,{locale:r})}),[h,l,O,b,t,n]);var k={ref:w,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,l,h,y,v,m,b)},onMouseEnter:function(e){(0,i.isLocalURL)(l)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),f(n,l,h,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var M="undefined"!==typeof b?b:n&&n.locale,P=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(h,M,n&&n.locales,n&&n.domainLocales);k.href=P||(0,i.addBasePath)((0,i.addLocale)(h,M,n&&n.defaultLocale))}return a.default.cloneElement(_,k)};t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},muhC:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return _})),n.d(t,"Post",(function(){return g})),n.d(t,"default",(function(){return x})),n.d(t,"getPosts",(function(){return j}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("nKUr"),c=n("1OyB"),u=n("rePB"),s=n("g4pe"),f=n.n(s),d=n("YFqc"),l=n.n(d),h=n("98Ni"),p=n.n(h),y=n("UbMB"),v=n.n(y),m=n("Z5kR"),b=v.a.bind(p.a),_=!0,g=function e(){Object(c.a)(this,e),Object(u.a)(this,"id",void 0),Object(u.a)(this,"contents",void 0)};function x(e){var t=e.post,n=e.posts;return Object(i.jsxs)(m.a,{children:[Object(i.jsx)(f.a,{children:Object(i.jsxs)("title",{children:["post ",t.id]})}),Object(i.jsxs)("h1",{children:["post ",t.id]}),Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:t.contents})}),n[t.id-1]&&Object(i.jsx)(l.a,{href:"/posts/"+(t.id-1),children:Object(i.jsx)("button",{className:b("prevPostBtn")})}),n[t.id+1]&&Object(i.jsx)(l.a,{href:"/posts/"+(t.id+1),children:Object(i.jsx)("button",{className:b("nextPostBtn")})})]})}function j(){return I.apply(this,arguments)}function I(){return(I=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){setTimeout((function(){e([{id:0,contents:"I'm so happy\n'Cause today I found my friends\nThey're in my head, I'm so ugly\nThat's okay 'cause so are you"},{id:1,contents:"Broke our mirrors\nSunday morning is everyday for all I care\nAnd I'm not scared, light my candles\nIn a daze 'cause I've found God"},{id:2,contents:"Yeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah, yeah"},{id:3,contents:"I'm so lonely\nThat's okay, I shaved my head\nAnd I'm not sad and just maybe\nI'm to blame for all I've heard"},{id:4,contents:"I'm not sure, I'm so excited\nI can't wait to meet you there\nAnd I don't care, I'm so horny\nThat's okay, my will is good"},{id:5,contents:"Yeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah\nYeah, yeah, yeah, yeah, yeah"},{id:6,contents:"I like it, I'm not gonna crack\nI miss you, I'm not gonna crack\nI love you, I'm not gonna crack\nI killed you, I'm not gonna crack"},{id:7,contents:"I like it, I'm not gonna crack\nI miss you, I'm not gonna crack\nI love you, I'm not gonna crack\nI killed you, I'm not gonna crack"}])}),0)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vN0C:function(e,t,n){e.exports={hidden:"header_hidden__1kCA3",header:"header_header__ADI_k"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),d=f[0],l=f[1],h=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&l(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!i&&!d){var e=(0,a.requestIdleCallback)((function(){return l(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[h,d]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map},wyEa:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n("muhC")}])}},[["wyEa",0,2,1]]]);