_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/V8q":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mobx",function(){return r("Ri2j")}])},"1OyB":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,f=[],s=!1,l=-1;function p(){s&&u&&(s=!1,u.length?f=u.concat(f):l=-1,f.length&&d())}function d(){if(!s){var e=c(p);s=!0;for(var t=f.length;t;){for(u=f,f=[];++l<t;)u&&u[l].run();l=-1,t=f.length}u=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new h(e,t)),1!==f.length||s||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(f){return void r(f)}c.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,u,"next",e)}function u(e){n(a,o,i,c,u,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return o}))},R7aG:function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return f}));var n=r("q1tI"),o=function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a};function i(){var e=o(Object(n.useState)(0),2)[1];return Object(n.useCallback)((function(){e((function(e){return e+1}))}),[])}function a(e){if(!e||"object"!==typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}function c(e){return"function"===typeof Symbol?Symbol.for(e):"__$mobx-react "+e+"__"}var u={};function f(){return"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:u}}).call(this,r("ntbh"))},Ri2j:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return xe}));var n=r("nKUr"),o=r("q1tI"),i=r.n(o),a=r("g4pe"),c=r.n(a),u=r("2vnA");if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!u.n)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");var f=r("i8i4"),s=r("R7aG"),l=Object(s.b)("observerBatching");function p(e){e()}var d=!1;function h(){return d}function b(e){return Object(u.h)(e)}var v,y=1e4,m=new Set;function w(){void 0===v&&(v=setTimeout(j,1e4))}function j(){v=void 0;var e=Date.now();m.forEach((function(t){var r=t.current;r&&e>=r.cleanAt&&(r.reaction.dispose(),t.current=null,m.delete(t))})),m.size>0&&w()}var O=!1,g=[];var x={};function _(e){return"observer"+e}function T(e,t,r){if(void 0===t&&(t="observed"),void 0===r&&(r=x),h())return e();var n,o=function(e){return function(){O?g.push(e):e()}}((r.useForceUpdate||s.d)()),a=i.a.useRef(null);if(!a.current){var c=new u.b(_(t),(function(){f.mounted?o():(c.dispose(),a.current=null)})),f=function(e){return{cleanAt:Date.now()+y,reaction:e}}(c);a.current=f,n=a,m.add(n),w()}var l=a.current.reaction;return i.a.useDebugValue(l,b),i.a.useEffect((function(){var e;return e=a,m.delete(e),a.current?a.current.mounted=!0:(a.current={reaction:new u.b(_(t),(function(){o()})),cleanAt:1/0},o()),function(){a.current.reaction.dispose(),a.current=null}}),[]),function(e){O=!0,g=[];try{var t=e();O=!1;var r=g.length>0?g:void 0;return i.a.useLayoutEffect((function(){r&&r.forEach((function(e){return e()}))}),[r]),t}finally{O=!1}}((function(){var t,r;if(l.track((function(){try{t=e()}catch(n){r=n}})),r)throw r;return t}))}var E=function(){return(E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function P(e,t){if(h())return e;var r,n,i,a=E({forwardRef:!1},t),c=e.displayName||e.name,u=function(t,r){return T((function(){return e(t,r)}),c)};return u.displayName=c,r=a.forwardRef?Object(o.memo)(Object(o.forwardRef)(u)):Object(o.memo)(u),n=e,i=r,Object.keys(n).forEach((function(e){k[e]||Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))})),r.displayName=c,r}var k={$$typeof:!0,render:!0,compare:!0,type:!0};function R(e){var t=e.children,r=e.render,n=t||r;return"function"!==typeof n?null:T(n)}function S(e,t,r,n,o){var i="children"===t?"render":"children",a="function"===typeof e[t],c="function"===typeof e[i];return a&&c?new Error("MobX Observer: Do not use children and render in the same time in`"+r):a||c?null:new Error("Invalid prop `"+o+"` of type `"+typeof e[t]+"` supplied to `"+r+"`, expected `function`.")}R.propTypes={children:S,render:S},R.displayName="Observer";var C;(C=f.unstable_batchedUpdates)||(C=p),Object(u.f)({reactionScheduler:C}),Object(s.a)()[l]=!0;var N=0;var $={};function z(e){return $[e]||($[e]=function(e){if("function"===typeof Symbol)return Symbol(e);var t="__$mobx-react "+e+" ("+N+")";return N++,t}(e)),$[e]}function A(e,t){if(U(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.hasOwnProperty.call(t,r[o])||!U(e[r[o]],t[r[o]]))return!1;return!0}function U(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function q(e,t,r){Object.hasOwnProperty.call(e,t)?e[t]=r:Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:r})}var M=z("patchMixins"),D=z("patchedDefinition");function B(e,t){for(var r=this,n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];t.locks++;try{var a;return void 0!==e&&null!==e&&(a=e.apply(this,o)),a}finally{t.locks--,0===t.locks&&t.methods.forEach((function(e){e.apply(r,o)}))}}function I(e,t){return function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];B.call.apply(B,[this,e,t].concat(n))}}function L(e,t,r){var n=function(e,t){var r=e[M]=e[M]||{},n=r[t]=r[t]||{};return n.locks=n.locks||0,n.methods=n.methods||[],n}(e,t);n.methods.indexOf(r)<0&&n.methods.push(r);var o=Object.getOwnPropertyDescriptor(e,t);if(!o||!o[D]){var i=e[t],a=X(e,t,o?o.enumerable:void 0,n,i);Object.defineProperty(e,t,a)}}function X(e,t,r,n,o){var i,a=I(o,n);return(i={})[D]=!0,i.get=function(){return a},i.set=function(o){if(this===e)a=I(o,n);else{var i=X(this,t,r,n,o);Object.defineProperty(this,t,i)}},i.configurable=!0,i.enumerable=r,i}var H=u.a||"$mobx",F=z("isMobXReactObserver"),G=z("isUnmounted"),V=z("skipRender"),W=z("isForcingUpdate");function J(e){var t=e.prototype;if(e[F]){var r=K(t);console.warn("The provided component class ("+r+") \n                has already been declared as an observer component.")}else e[F]=!0;if(t.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==o.PureComponent)if(t.shouldComponentUpdate){if(t.shouldComponentUpdate!==Q)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else t.shouldComponentUpdate=Q;Z(t,"props"),Z(t,"state");var n=t.render;return t.render=function(){return Y.call(this,n)},L(t,"componentWillUnmount",(function(){var e;if(!0!==h()&&(null===(e=this.render[H])||void 0===e||e.dispose(),this[G]=!0,!this.render[H])){var t=K(this);console.warn("The reactive render of an observer class component ("+t+") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.")}})),e}function K(e){return e.displayName||e.name||e.constructor&&(e.constructor.displayName||e.constructor.name)||"<component>"}function Y(e){var t=this;if(!0===h())return e.call(this);q(this,V,!1),q(this,W,!1);var r=K(this),n=e.bind(this),i=!1,a=new u.b(r+".render()",(function(){if(!i&&(i=!0,!0!==t[G])){var e=!0;try{q(t,W,!0),t[V]||o.Component.prototype.forceUpdate.call(t),e=!1}finally{q(t,W,!1),e&&a.dispose()}}}));function c(){i=!1;var e=void 0,t=void 0;if(a.track((function(){try{t=Object(u.c)(!1,n)}catch(r){e=r}})),e)throw e;return t}return a.reactComponent=this,c[H]=a,this.render=c,c.call(this)}function Q(e,t){return h()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||!A(this.props,e)}function Z(e,t){var r=z("reactProp_"+t+"_valueHolder"),n=z("reactProp_"+t+"_atomHolder");function o(){return this[n]||q(this,n,Object(u.g)("reactive "+t)),this[n]}Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){var e=!1;return u.e&&u.d&&(e=Object(u.e)(!0)),o.call(this).reportObserved(),u.e&&u.d&&Object(u.d)(e),this[r]},set:function(e){this[W]||A(this[r],e)?q(this,r,e):(q(this,r,e),q(this,V,!0),o.call(this).reportChanged(),q(this,V,!1))}})}var ee="function"===typeof Symbol&&Symbol.for,te=ee?Symbol.for("react.forward_ref"):"function"===typeof o.forwardRef&&Object(o.forwardRef)((function(e){return null})).$$typeof,re=ee?Symbol.for("react.memo"):"function"===typeof o.memo&&Object(o.memo)((function(e){return null})).$$typeof;function ne(e){if(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),re&&e.$$typeof===re)throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(te&&e.$$typeof===te){var t=e.render;if("function"!==typeof t)throw new Error("render property of ForwardRef was not a function");return Object(o.forwardRef)((function(){var e=arguments;return Object(o.createElement)(R,null,(function(){return t.apply(void 0,e)}))}))}return"function"!==typeof e||e.prototype&&e.prototype.render||e.isReactClass||Object.prototype.isPrototypeOf.call(o.Component,e)?J(e):P(e)}function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var ie=i.a.createContext({});function ae(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["children"]),n=i.a.useContext(ie),o=i.a.useRef(oe({},n,r)).current;return i.a.createElement(ie.Provider,{value:o},t)}ae.displayName="MobXProvider";if(!o.Component)throw new Error("mobx-react requires React to be available");if(!u.l)throw new Error("mobx-react requires mobx to be available");var ce=r("o0o1"),ue=r.n(ce);function fe(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function se(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function le(e,t,r,n,o){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var pe,de,he,be=r("HaE+"),ve=r("1OyB"),ye=r("rePB"),me=(de=le((pe=function(){function e(){var t=this;Object(ve.a)(this,e),fe(this,"_type",de,this),fe(this,"_age",he,this),Object(ye.a)(this,"init",(function(){setTimeout((function(){t.setType("\ucf54\uc20f(init)"),t.setAge(1)}),1e3)})),Object(ye.a)(this,"load",Object(be.a)(ue.a.mark((function e(){var r;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we();case 2:r=e.sent,t.setAge(r.age),t.setType(r.type);case 5:case"end":return e.stop()}}),e)})))),Object(ye.a)(this,"setType",(function(e){t._type=e})),Object(ye.a)(this,"setAge",(function(e){t._age=e})),this.init(),this.load()}var t,r,n;return t=e,(r=[{key:"type",get:function(){return this._type}},{key:"age",get:function(){return this._age}}])&&se(t.prototype,r),n&&se(t,n),e}()).prototype,"_type",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),he=le(pe.prototype,"_age",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),pe);function we(){return je.apply(this,arguments)}function je(){return(je=Object(be.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){setTimeout((function(){e({type:"\ub7ec\uc2dc\uc548\ube14\ub8e8(CSR)",age:2})}),2e3)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Oe=ne((function(e){var t=e.data,r=i.a.useContext(ie).mobxStore,o=r.type,a=r.age;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:["type: ",o||t.cat.type]}),Object(n.jsxs)("div",{children:["age: ",a||t.cat.age]})]})})),ge=new me,xe=!0;t.default=function(e){var t=e.data;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(c.a,{children:[Object(n.jsx)("title",{children:"mobx"}),Object(n.jsx)("meta",{name:"mobx",content:"mobx"})]}),Object(n.jsx)("h1",{children:"mobx"}),Object(n.jsx)(ae,{mobxStore:ge,children:Object(n.jsx)(Oe,{data:t})})]})}},g4pe:function(e,t,r){e.exports=r("8Kt/")},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}e.exports=t}},r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{}},i=!0;try{e[t](o,o.exports,n),i=!1}finally{i&&delete r[t]}return o.exports}return n.ab=t+"/",n(149)}()}).call(this,"/")},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}},[["/V8q",0,2,4,1]]]);