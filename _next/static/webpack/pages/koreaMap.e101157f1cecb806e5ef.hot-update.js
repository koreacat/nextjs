webpackHotUpdate_N_E("pages/koreaMap",{

/***/ "./node_modules/mobx-react-lite/es/ObserverComponent.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/ObserverComponent.js ***!
  \**************************************************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return ObserverComponent; });
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return Object(_useObserver__WEBPACK_IMPORTED_MODULE_0__["useObserver"])(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/assertEnvironment.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/assertEnvironment.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["spy"]) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/index.js ***!
  \**************************************************/
/*! exports provided: isUsingStaticRendering, useStaticRendering, observer, useObserver, Observer, useForceUpdate, useAsObservableSource, useLocalStore, useQueuedForceUpdate, useQueuedForceUpdateBlock, isObserverBatched, observerBatching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assertEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assertEnvironment */ "./node_modules/mobx-react-lite/es/assertEnvironment.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _observerBatching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observerBatching */ "./node_modules/mobx-react-lite/es/observerBatching.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_3__["isUsingStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_3__["useStaticRendering"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer */ "./node_modules/mobx-react-lite/es/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_4__["observer"]; });

/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return _useObserver__WEBPACK_IMPORTED_MODULE_5__["useObserver"]; });

/* harmony import */ var _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ObserverComponent */ "./node_modules/mobx-react-lite/es/ObserverComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__["Observer"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["useForceUpdate"]; });

/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__["useAsObservableSource"]; });

/* harmony import */ var _useLocalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useLocalStore */ "./node_modules/mobx-react-lite/es/useLocalStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return _useLocalStore__WEBPACK_IMPORTED_MODULE_9__["useLocalStore"]; });

/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQueuedForceUpdate", function() { return _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__["useQueuedForceUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQueuedForceUpdateBlock", function() { return _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__["useQueuedForceUpdateBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObserverBatched", function() { return _observerBatching__WEBPACK_IMPORTED_MODULE_2__["isObserverBatched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return _observerBatching__WEBPACK_IMPORTED_MODULE_2__["observerBatching"]; });




Object(_observerBatching__WEBPACK_IMPORTED_MODULE_2__["observerBatching"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__["unstable_batchedUpdates"]);











/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_1__["isUsingStaticRendering"])()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return Object(_useObserver__WEBPACK_IMPORTED_MODULE_2__["useObserver"])(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(wrappedComponent));
    }
    else {
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observerBatching.js":
/*!*************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observerBatching.js ***!
  \*************************************************************/
/*! exports provided: defaultNoopBatch, observerBatching, isObserverBatched */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNoopBatch", function() { return defaultNoopBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return observerBatching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObserverBatched", function() { return isObserverBatched; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");


var observerBatchingConfiguredSymbol = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSymbol"])("observerBatching");
function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (true) {
            console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
        }
    }
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({ reactionScheduler: reactionScheduler });
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobal"])()[observerBatchingConfiguredSymbol] = true;
}
var isObserverBatched = function () { return !!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobal"])()[observerBatchingConfiguredSymbol]; };


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/printDebugValue.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/printDebugValue.js ***!
  \************************************************************/
/*! exports provided: printDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDebugValue", function() { return printDebugValue; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

function printDebugValue(v) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["getDependencyTree"])(v);
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js":
/*!********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/reactionCleanupTracking.js ***!
  \********************************************************************/
/*! exports provided: createTrackingData, CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS, CLEANUP_TIMER_LOOP_MILLIS, scheduleCleanupOfReactionIfLeaked, recordReactionAsCommitted, forceCleanupTimerToRunNowForTests, resetCleanupScheduleForTests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTrackingData", function() { return createTrackingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS", function() { return CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_TIMER_LOOP_MILLIS", function() { return CLEANUP_TIMER_LOOP_MILLIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleCleanupOfReactionIfLeaked", function() { return scheduleCleanupOfReactionIfLeaked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordReactionAsCommitted", function() { return recordReactionAsCommitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceCleanupTimerToRunNowForTests", function() { return forceCleanupTimerToRunNowForTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCleanupScheduleForTests", function() { return resetCleanupScheduleForTests; });
function createTrackingData(reaction) {
    var trackingData = {
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
        reaction: reaction
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */
var uncommittedReactionRefs = new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */
var reactionCleanupHandle;
function ensureCleanupTimerRunning() {
    if (reactionCleanupHandle === undefined) {
        reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
    }
}
function scheduleCleanupOfReactionIfLeaked(ref) {
    uncommittedReactionRefs.add(ref);
    ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
    uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */
function cleanUncommittedReactions() {
    reactionCleanupHandle = undefined;
    // Loop through all the candidate leaked reactions; those older
    // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
    var now = Date.now();
    uncommittedReactionRefs.forEach(function (ref) {
        var tracking = ref.current;
        if (tracking) {
            if (now >= tracking.cleanAt) {
                // It's time to tidy up this leaked reaction.
                tracking.reaction.dispose();
                ref.current = null;
                uncommittedReactionRefs.delete(ref);
            }
        }
    });
    if (uncommittedReactionRefs.size > 0) {
        // We've just finished a round of cleanups but there are still
        // some leak candidates outstanding.
        ensureCleanupTimerRunning();
    }
}
/* istanbul ignore next */
/**
 * Only to be used by test functions; do not export outside of mobx-react-lite
 */
function forceCleanupTimerToRunNowForTests() {
    // This allows us to control the execution of the cleanup timer
    // to force it to run at awkward times in unit tests.
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        cleanUncommittedReactions();
    }
}
/* istanbul ignore next */
function resetCleanupScheduleForTests() {
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        reactionCleanupHandle = undefined;
    }
    uncommittedReactionRefs.clear();
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/staticRendering.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/staticRendering.js ***!
  \************************************************************/
/*! exports provided: useStaticRendering, isUsingStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return useStaticRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return isUsingStaticRendering; });
var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useAsObservableSource.js":
/*!******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useAsObservableSource.js ***!
  \******************************************************************/
/*! exports provided: useAsObservableSourceInternal, useAsObservableSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSourceInternal", function() { return useAsObservableSourceInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return useAsObservableSource; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSourceInternal(current, usedByLocalStore) {
    var culprit = usedByLocalStore ? "useLocalStore" : "useAsObservableSource";
    if ( true && usedByLocalStore) {
        var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(current), 1), initialSource = _a[0];
        if ((initialSource !== undefined && current === undefined) ||
            (initialSource === undefined && current !== undefined)) {
            throw new Error("make sure you never pass `undefined` to " + culprit);
        }
    }
    if (usedByLocalStore && current === undefined) {
        return undefined;
    }
    if ( true && !Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(current)) {
        throw new Error(culprit + " expects a plain object as " + (usedByLocalStore ? "second" : "first") + " argument");
    }
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () { return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(current, {}, { deep: false }); }), 1), res = _b[0];
    if ( true &&
        Object.keys(res).length !== Object.keys(current).length) {
        throw new Error("the shape of objects passed to " + culprit + " should be stable");
    }
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
        Object.assign(res, current);
    });
    return res;
}
function useAsObservableSource(current) {
    return useAsObservableSourceInternal(current, false);
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useLocalStore.js":
/*!**********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useLocalStore.js ***!
  \**********************************************************/
/*! exports provided: useLocalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return useLocalStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");




function useLocalStore(initializer, current) {
    var source = Object(_useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__["useAsObservableSourceInternal"])(current, true);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
        var local = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(initializer(source));
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(local)) {
            Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
                Object.keys(local).forEach(function (key) {
                    var value = local[key];
                    if (typeof value === "function") {
                        // @ts-ignore No idea why ts2536 is popping out here
                        local[key] = wrapInTransaction(value, local);
                    }
                });
            });
        }
        return local;
    })[0];
}
// tslint:disable-next-line: ban-types
function wrapInTransaction(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["transaction"])(function () { return fn.apply(context, args); });
    };
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useObserver.js":
/*!********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useObserver.js ***!
  \********************************************************/
/*! exports provided: useObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return useObserver; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _printDebugValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printDebugValue */ "./node_modules/mobx-react-lite/es/printDebugValue.js");
/* harmony import */ var _reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactionCleanupTracking */ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");







var EMPTY_OBJECT = {};
function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_4__["isUsingStaticRendering"])()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || _utils__WEBPACK_IMPORTED_MODULE_5__["useForceUpdate"];
    var forceUpdate = wantedForceUpdateHook();
    var queuedForceUpdate = Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__["useQueuedForceUpdate"])(forceUpdate);
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction_1 = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                queuedForceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.  The easiest way to do that is just to
                // drop our current reaction and allow useEffect() to recreate it.
                newReaction_1.dispose();
                reactionTrackingRef.current = null;
            }
        });
        var trackingData_1 = Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__["createTrackingData"])(newReaction_1);
        reactionTrackingRef.current = trackingData_1;
        Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__["scheduleCleanupOfReactionIfLeaked"])(reactionTrackingRef);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(reaction, _printDebugValue__WEBPACK_IMPORTED_MODULE_2__["printDebugValue"]);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
        // Called on first mount only
        Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__["recordReactionAsCommitted"])(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This is either due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up, or we got a observable change
            // between render and useEffect
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    queuedForceUpdate();
                }),
                cleanAt: Infinity
            };
            queuedForceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // delay all force-update calls after rendering of this component
    return Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__["useQueuedForceUpdateBlock"])(function () {
        // render the original component, but have the
        // reaction track the observables, so that rendering
        // can be invalidated (see above) once a dependency changes
        var rendering;
        var exception;
        reaction.track(function () {
            try {
                rendering = fn();
            }
            catch (e) {
                exception = e;
            }
        });
        if (exception) {
            throw exception; // re-throw any exceptions caught during rendering
        }
        return rendering;
    });
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js ***!
  \*****************************************************************/
/*! exports provided: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQueuedForceUpdate", function() { return useQueuedForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQueuedForceUpdateBlock", function() { return useQueuedForceUpdateBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var insideRender = false;
var forceUpdateQueue = [];
function useQueuedForceUpdate(forceUpdate) {
    return function () {
        if (insideRender) {
            forceUpdateQueue.push(forceUpdate);
        }
        else {
            forceUpdate();
        }
    };
}
function useQueuedForceUpdateBlock(callback) {
    // start intercepting force-update calls
    insideRender = true;
    forceUpdateQueue = [];
    try {
        var result = callback();
        // stop intercepting force-update
        insideRender = false;
        // store queue or nothing if it was empty to execute useLayoutEffect only when necessary
        var queue_1 = forceUpdateQueue.length > 0 ? forceUpdateQueue : undefined;
        // run force-update queue in useLayoutEffect
        react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(function () {
            if (queue_1) {
                queue_1.forEach(function (x) { return x(); });
            }
        }, [queue_1]);
        return result;
    }
    finally {
        insideRender = false;
    }
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils.js ***!
  \**************************************************/
/*! exports provided: useUnmount, useForceUpdate, isPlainObject, getSymbol, getGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUnmount", function() { return useUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbol", function() { return getSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobal", function() { return getGlobal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var EMPTY_ARRAY = [];
function useUnmount(fn) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return fn; }, EMPTY_ARRAY);
}
function useForceUpdate() {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), setTick = _a[1];
    var update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function isPlainObject(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
}
function getSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol.for(name);
    }
    return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js ***!
  \**********************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });




/***/ }),

/***/ "./node_modules/mobx-react/dist/mobxreact.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/mobx-react/dist/mobxreact.esm.js ***!
  \*******************************************************/
/*! exports provided: Observer, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalStore, useObserver, useStaticRendering, MobXProviderContext, PropTypes, Provider, disposeOnUnmount, inject, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobXProviderContext", function() { return MobXProviderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return PropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeOnUnmount", function() { return disposeOnUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["Observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observerBatching"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useAsObservableSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useLocalStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useStaticRendering"]; });






var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};
function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins =
/*#__PURE__*/
newSymbol("patchMixins");
var mobxPatchedDefinition =
/*#__PURE__*/
newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_0__["$mobx"] || "$mobx";
var mobxObserverProperty =
/*#__PURE__*/
newSymbol("isMobXReactObserver");
var mobxIsUnmounted =
/*#__PURE__*/
newSymbol("isUnmounted");
var skipRenderKey =
/*#__PURE__*/
newSymbol("skipRender");
var isForcingUpdateKey =
/*#__PURE__*/
newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ") \n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    var _this$render$mobxAdmi;

    if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])() === true) return;
    (_this$render$mobxAdmi = this.render[mobxAdminProperty]) === null || _this$render$mobxAdmi === void 0 ? void 0 : _this$render$mobxAdmi.dispose();
    this[mobxIsUnmounted] = true;

    if (!this.render[mobxAdminProperty]) {
      // Render may have been hot-swapped and/or overriden by a subclass.
      var _displayName = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
    }
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChanges"])(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        prevReadState = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"])(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"])(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"] === "function" &&
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_1__["memo"] === "function" &&
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function ObserverForwardRef() {
      var args = arguments;
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["Observer"], null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_1__["Component"], component)) {
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountProto");
var instStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c3 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c3 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"];
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableObject"];
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableMap"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, false);
var observableMap =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Map");
var observableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react__WEBPACK_IMPORTED_MODULE_1__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]) throw new Error("mobx-react requires mobx to be available");


//# sourceMappingURL=mobxreact.esm.js.map


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/koreaMap.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/koreaMap/koreaMap.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".koreaMap_hidden__1a3VO {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.koreaMap_wrap__1iHSA {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://../../../styles/common.scss","webpack://koreaMap.module.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AALA;EACI,aAAA;AAQJ","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.wrap {\n  display: flex;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "koreaMap_hidden__1a3VO",
	"wrap": "koreaMap_wrap__1iHSA"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/locationList/locationList.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/koreaMap/locationList/locationList.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".locationList_hidden__39aWG {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.locationList_wrap__3Xb2c {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 378px;\n}\n\n.locationList_locationWrap__1wc_K {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 24px;\n  gap: 24px;\n  width: 736px;\n  padding: 61px 32px;\n}\n.locationList_locationWrap__1wc_K .locationList_location__1M_mW {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 46px;\n  background: #FFFFFF;\n  border: 1px solid #e7e8ea;\n  border-radius: 24px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #656a71;\n  cursor: pointer;\n}\n.locationList_locationWrap__1wc_K .locationList_location__1M_mW.locationList_active__Hqomx {\n  background: #6cdd83;\n  border: 1px solid #52c564;\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://locationList.module.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AALA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AAQJ;;AALA;EACI,aAAA;EACA,eAAA;EACA,cAAA;EAAA,SAAA;EACA,YAAA;EACA,kBAAA;AAQJ;AANI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cCuES;EDtET,eAAA;AAQR;AANQ;EACI,mBCdE;EDeF,yBAAA;EACA,WClCF;AD0CV","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 378px;\n}\n\n.locationWrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  width: 736px;\n  padding: 61px 32px;\n}\n.locationWrap .location {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 46px;\n  background: #FFFFFF;\n  border: 1px solid #e7e8ea;\n  border-radius: 24px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #656a71;\n  cursor: pointer;\n}\n.locationWrap .location.active {\n  background: #6cdd83;\n  border: 1px solid #52c564;\n  color: #fff;\n}","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "locationList_hidden__39aWG",
	"wrap": "locationList_wrap__3Xb2c",
	"locationWrap": "locationList_locationWrap__1wc_K",
	"location": "locationList_location__1M_mW",
	"active": "locationList_active__Hqomx"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/map/map.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/koreaMap/map/map.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".map_hidden__1kBKO {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.map_wrap__3Gvlh {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 383px;\n  height: 378px;\n}\n.map_wrap__3Gvlh .map_active__3c1uV {\n  fill: #92e6a3;\n}\n.map_wrap__3Gvlh path:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://map.module.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AALA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;AAQJ;AANI;EACI,aCOK;ADCb;AALI;EAEI,eAAA;AAMR","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 383px;\n  height: 378px;\n}\n.wrap .active {\n  fill: #92e6a3;\n}\n.wrap path:hover {\n  cursor: pointer;\n}","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "map_hidden__1kBKO",
	"wrap": "map_wrap__3Gvlh",
	"active": "map_active__3c1uV"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/koreaMap/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/koreaMap/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _koreaMap_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./koreaMap.module.scss */ "./src/components/koreaMap/koreaMap.module.scss");
/* harmony import */ var _koreaMap_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_koreaMap_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locationList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locationList */ "./src/components/koreaMap/locationList/index.tsx");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/components/koreaMap/map/index.tsx");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\koreaMap\\index.tsx",
    _this = undefined;





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_koreaMap_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var KoreaMap = function KoreaMap() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_locationList__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_map__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, _this);
};

_c = KoreaMap;
/* harmony default export */ __webpack_exports__["default"] = (KoreaMap);

var _c;

$RefreshReg$(_c, "KoreaMap");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/koreaMap/locationList/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/koreaMap/locationList/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var src_store_koreaMapUIStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/store/koreaMapUIStore */ "./src/store/koreaMapUIStore.ts");
/* harmony import */ var src_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/util/storeProvider */ "./src/util/storeProvider.tsx");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locationList.module.scss */ "./src/components/koreaMap/locationList/locationList.module.scss");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\koreaMap\\locationList\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a);
var Location = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_c = _s(function (_ref) {
  _s();

  var name = _ref.name;

  var _useStores = Object(src_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"])(),
      koreaMapUIStore = _useStores.koreaMapUIStore;

  var isSelected = koreaMapUIStore.isSelected,
      toggleLocation = koreaMapUIStore.toggleLocation;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    onClick: function onClick() {
      return toggleLocation(name);
    },
    className: cx('location', {
      'active': isSelected(name)
    }),
    children: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, _this);
}, "aXt+qKMuEE/paCu/DcU8sSNA82w=", false, function () {
  return [src_util_storeProvider__WEBPACK_IMPORTED_MODULE_4__["useStores"]];
}));
_c2 = Location;

var LocationList = function LocationList() {
  var list = src_store_koreaMapUIStore__WEBPACK_IMPORTED_MODULE_3__["LOCATION_DATA"].map(function (name) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Location, {
      name: name
    }, name, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('locationWrap'),
      children: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, _this);
};

_c3 = LocationList;
/* harmony default export */ __webpack_exports__["default"] = (LocationList);

var _c, _c2, _c3;

$RefreshReg$(_c, "Location$observer");
$RefreshReg$(_c2, "Location");
$RefreshReg$(_c3, "LocationList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/koreaMap/locationList/locationList.module.scss":
/*!***********************************************************************!*\
  !*** ./src/components/koreaMap/locationList/locationList.module.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./locationList.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/locationList/locationList.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./locationList.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/locationList/locationList.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./locationList.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/locationList/locationList.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/koreaMap/map/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/koreaMap/map/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var src_util_storeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/util/storeProvider */ "./src/util/storeProvider.tsx");
/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.module.scss */ "./src/components/koreaMap/map/map.module.scss");
/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_map_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\koreaMap\\map\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a);

var Map = function Map() {
  _s();

  var _useStores = Object(src_util_storeProvider__WEBPACK_IMPORTED_MODULE_3__["useStores"])(),
      koreaMapUIStore = _useStores.koreaMapUIStore;

  var isSelected = koreaMapUIStore.isSelected,
      toggleLocation = koreaMapUIStore.toggleLocation;

  var handleClick = function handleClick(e) {
    toggleLocation(e.target.dataset.location);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      "data-location": "\uB300\uD55C\uBBFC\uAD6D",
      onClick: handleClick,
      width: "265",
      height: "320",
      viewBox: "0 0 265 320",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('서울특별시')
        }),
        "data-location": "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC",
        d: "M58.5451 75.3795C58.5236 75.2366 58.4711 75.1 58.3912 74.9795C58.3113 74.859 58.206 74.7575 58.0827 74.682C57.9594 74.6066 57.821 74.5591 57.6773 74.5429C57.5337 74.5266 57.3882 74.5421 57.2511 74.5881L55.0428 75.2803C54.7581 75.3795 54.6589 75.3407 54.3958 75.1747L54.3052 75.1164C54.1782 75.0324 54.0715 74.921 53.9932 74.7904C53.9148 74.6598 53.8667 74.5133 53.8523 74.3616L52.7999 66.214C52.5282 63.2681 49.1617 64.4564 47.4084 64.9459C46.9771 65.0667 45.8794 65.2026 45.502 65.457C44.9823 65.8086 44.6868 66.6691 44.5402 67.2707C44.3935 67.8724 44.7062 68.3016 44.0506 68.5798C43.5253 68.8164 42.9349 68.8667 42.3771 68.7221C42.1582 68.6362 41.9218 68.6036 41.6878 68.6273C41.4538 68.6509 41.2287 68.73 41.0314 68.858C40.7862 69.0187 40.5007 69.1069 40.2076 69.1125C40.0382 69.1096 39.8726 69.1623 39.7359 69.2623C39.5992 69.3624 39.499 69.5044 39.4506 69.6667C39.3385 70.0355 39.2738 70.7105 39.0624 71.0297C38.8144 71.3542 38.5243 71.6443 38.1998 71.8923C37.5528 72.4336 36.839 72.7722 36.1208 73.1863C35.5127 73.54 34.6112 73.5249 33.947 73.348C33.7396 73.2793 33.5149 73.2848 33.3111 73.3635C33.1073 73.4421 32.9372 73.5891 32.8299 73.7793C32.6315 74.1071 32.6293 74.5104 32.4568 74.8576C32.2605 75.2523 31.2987 75.5779 31.055 75.9359C30.38 76.956 31.5575 77.7734 32.2411 78.6166L32.2907 78.677C32.5629 78.9648 32.8852 79.2009 33.2418 79.3735C33.6558 79.6194 34.1993 79.7768 34.3826 80.2081C34.5983 80.7279 34.484 80.8551 34.5314 81.4223C34.5302 81.7031 34.4843 81.9819 34.3956 82.2483C34.3538 82.3973 34.33 82.5508 34.3244 82.7055C34.3493 83.2281 34.4488 83.7444 34.6198 84.2388C34.7686 84.517 34.9218 84.7952 35.077 85.0713C35.4652 85.7571 35.9979 85.8067 36.701 85.5802C37.404 85.3538 38.1588 85.5802 38.836 85.8584C39.8302 86.2574 40.6065 88.1854 41.7409 87.7519C42.6855 87.3896 44.0743 87.2365 45.0923 87.1955C46.3862 87.1416 47.7535 87.2106 48.9439 87.8058C49.5758 88.1229 50.2789 88.9618 50.9431 88.3018L56.8284 82.2397C57.1239 81.9464 57.6415 81.4978 57.4754 81.1139L56.8996 79.7768C56.8 79.545 56.79 79.2845 56.8716 79.0457L56.919 78.9013C56.9996 78.6649 57.1647 78.4667 57.3827 78.3449L57.8765 78.0688C58.0585 77.9678 58.2049 77.8132 58.296 77.6261C58.3871 77.439 58.4183 77.2284 58.3855 77.0229L58.5451 75.3795Z",
        fill: "#E7E8EA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('경기도')
        }),
        "data-location": "\uACBD\uAE30\uB3C4",
        d: "M35.3617 88.179C35.3444 88.207 35.3272 88.4486 35.3121 88.4723L34.7966 89.1947C34.6198 89.4406 34.3826 89.6023 34.581 89.8741C34.8743 90.2752 35.6852 90.8186 35.9396 91.25C36.9597 92.9903 37.2336 92.1493 37.0826 94.2369C36.9793 95.5618 36.508 96.8316 35.7218 97.9031C35.0748 98.7916 34.072 99.1215 33.4833 100.019C32.7889 101.078 32.5452 102.551 32.6207 103.793C32.7565 105.772 33.8025 107.082 34.9325 108.589C36.0108 110.014 36.9015 111.567 38.7173 112.13C40.5828 112.706 42.4073 113.189 42.7329 115.492C42.9486 116.974 42.8235 117.692 43.5438 119.027C44.2499 120.396 45.0423 121.718 45.916 122.986C46.9814 124.479 47.1043 128.637 48.6894 127.556C50.9905 125.988 54.3634 124.878 56.3216 124.854C60.8289 124.798 65.4936 122.749 70.0828 125.089C71.2215 125.669 73.4946 126.316 74.6419 125.753C75.0732 125.538 75.4226 125.173 75.8043 124.871C76.4513 124.369 77.191 124.037 77.8724 123.597C78.6143 123.12 79.2009 122.275 79.9816 121.861C80.8636 121.395 81.97 121.104 82.8995 120.642C84.4565 119.866 86.1344 118.716 87.7755 118.19C89.3283 117.696 90.6179 117.392 92.0671 116.534C93.5164 115.676 94.5537 114.328 95.9641 113.383C97.4392 112.395 96.4537 113.004 97.7347 111.774C98.1444 111.382 98.542 110.977 98.9273 110.56C98.9531 110.534 98.2544 109.316 98.194 109.169C97.5212 107.53 96.7534 105.378 98.5067 98.1705C99.0955 95.7508 99.8568 93.536 100.029 91.0537C100.18 88.8713 100.18 86.0634 100.18 83.8593C100.18 82.6171 99.3435 82.0198 98.3234 81.5518C97.0568 80.9604 95.8262 80.2951 94.6378 79.5591C92.0369 77.9718 89.7208 76.3652 87.8855 73.8916C86.8266 72.4639 87.1544 71.5905 86.5915 69.9644C86.2443 68.4828 85.3882 66.0308 85.5564 64.8015C85.7354 63.5076 86.2034 63.1086 86.6519 61.834C87.1695 60.3352 87.879 59.2591 88.2306 57.7624C88.608 56.1622 88.1421 54.4887 86.6908 53.7749C85.4184 53.1494 83.7319 53.2379 83.0375 51.849C82.6428 51.0619 82.6709 49.8434 82.3452 48.9786C81.9721 47.9909 81.2454 45.9723 80.456 45.2563C78.9874 43.9214 77.3031 44.2255 75.4743 43.8265C73.8475 43.5123 72.2917 42.9043 70.8829 42.0322C68.2217 40.4126 66.4986 38.2991 64.5663 35.9183C64.1522 35.4071 63.7209 34.8831 63.1321 34.5898C61.7541 33.9018 59.8821 34.4194 58.4264 34.5208C56.8176 34.6308 54.0335 33.298 52.6921 32.416C52.4141 32.2498 52.1722 32.0298 51.9804 31.769C51.9565 31.7333 51.9356 31.6958 51.9178 31.6568C46.8499 32.045 44.2512 33.1923 39.7353 35.804C38.798 36.3137 37.9037 36.8986 37.0611 37.553C36.2847 38.1999 35.8706 39.0367 35.1913 39.7096C33.6817 41.2192 32.0405 42.112 30.8781 44.0227C29.4548 46.354 27.4276 48.1203 25.4349 49.9728C24.4925 50.8527 24.9151 52.1984 24.9497 53.3155C24.9906 54.5534 24.5787 55.5648 24.0352 56.6712C23.4141 57.9263 23.0217 59.1534 22.3617 60.2446C21.8772 61.0632 21.2136 61.7614 20.4208 62.2869C19.3554 62.9943 17.9041 63.4364 16.6554 63.6671C15.5879 63.8634 14.5333 63.6197 13.483 64.0553C12.3638 64.519 12.1697 65.3644 12.1309 66.4427C12.0554 68.3987 13.9489 68.1895 14.9603 69.2614C16.0149 70.3828 16.4484 71.6509 17.7186 72.6213C19.5733 74.036 21.3029 73.1713 23.4659 73.2014L27.1839 72.8284C27.5548 72.7917 28.7819 71.6465 29.0191 71.9334L30.3325 73.8225C30.4067 73.9237 30.514 73.9957 30.6357 74.026C30.7574 74.0564 30.8859 74.0431 30.9989 73.9886L31.2146 73.8829C31.4564 73.7614 31.6601 73.5756 31.8033 73.3459C31.8961 73.1971 31.9454 73.0253 31.9456 72.8499C31.9456 72.1275 31.6523 70.827 32.8643 71.1397C33.4013 71.2778 33.9771 72.2827 34.5702 72.2525C35.1465 72.2421 35.7131 72.1028 36.2286 71.8449L36.3904 71.7501C36.9253 71.3661 37.3675 70.8673 37.6843 70.29C37.9841 69.8027 38.0272 69.3972 38.0768 68.8581C38.1264 68.3189 38.4305 67.8294 39.2263 67.8725L40.0889 67.5986C40.5202 67.2988 40.9041 67.5425 41.3139 67.5555C41.7127 67.5634 42.1089 67.49 42.4784 67.3398C43.1038 67.081 43.2117 66.6928 43.3562 66.117C43.5007 65.5412 43.7745 64.9525 44.2684 64.6247C44.6392 64.4021 45.0433 64.2405 45.4653 64.1459C46.494 63.8634 53.876 62.0152 54.0442 63.8656L55.0557 72.4919C55.0837 72.7788 55.2412 73.471 55.487 73.6263L55.5733 73.6824C55.6927 73.7588 55.8279 73.8072 55.9687 73.824C56.1095 73.8408 56.2522 73.8256 56.3863 73.7794L58.2776 73.1324C58.4071 73.088 58.5447 73.0723 58.6808 73.0865C58.8169 73.1007 58.9483 73.1444 59.0658 73.2146C59.1832 73.2849 59.284 73.3799 59.3609 73.4931C59.4378 73.6063 59.4891 73.7349 59.5112 73.87L59.5651 74.1956C59.6298 74.5903 60.7318 75.4141 60.3803 75.606L60.3415 75.8627C60.1366 75.977 59.9792 77.4564 59.9102 77.6785L59.8627 77.8122C59.7872 78.0279 58.5019 78.7115 58.5968 78.9272L59.1424 80.825C59.2977 81.183 59.0023 82.2484 58.7111 82.5222L51.5944 89.7382C50.9646 90.355 49.6685 89.57 49.069 89.2745C47.9368 88.7181 46.4315 88.6556 45.1871 88.7052C44.0161 88.7938 42.8617 89.0359 41.7538 89.4255C40.6755 89.8309 39.7439 88.0431 38.7993 87.6722C36.8325 86.898 37.4018 86.9174 36.5651 87.1805C36.0752 87.389 35.657 87.736 35.3617 88.179V88.179Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('인천광역시')
        }),
        "data-location": "\uC778\uCC9C\uAD11\uC5ED\uC2DC",
        d: "M33.7658 85.6018L32.722 83.8226C32.6137 83.638 32.5605 83.4262 32.5689 83.2123V83.0872C32.5822 82.8949 32.6511 82.7105 32.7673 82.5567C32.8649 82.42 32.9312 82.2635 32.9614 82.0983C32.9915 81.9331 32.9849 81.7632 32.9418 81.6009C32.8987 81.4386 32.8204 81.2878 32.7123 81.1592C32.6042 81.0307 32.4691 80.9276 32.3166 80.8573L31.3202 80.3979L31.2836 80.426L31.165 80.2793L31.0614 80.1995L29.5475 78.1011L29.0234 75.6491C28.8713 75.2667 28.6064 74.9395 28.264 74.7111C27.9216 74.4827 27.5178 74.3638 27.1062 74.3702H27.0286L22.3639 75.3989L21.5746 75.4787C21.3475 75.5006 21.1325 75.5909 20.9578 75.7375L20.423 76.1861C20.2881 76.298 20.181 76.4395 20.1099 76.5996C20.0388 76.7597 20.0057 76.9341 20.0132 77.1091L20.0779 78.636C20.09 78.9162 20.2048 79.1822 20.4005 79.3831C20.5963 79.5839 20.8591 79.7057 21.1389 79.7251C22.0296 79.7811 23.1058 79.4814 23.5479 80.4497C23.99 81.418 23.8541 82.7163 23.3322 83.6199C23.2077 83.8368 23.0586 84.0387 22.888 84.2216C22.3534 84.805 21.6101 85.1538 20.8198 85.192C19.9032 85.2179 19.6854 84.9332 19.0945 84.4243C18.7149 84.0986 18.2815 84.1547 17.82 84.172C17.6234 84.1827 17.4329 84.2436 17.2666 84.3488C17.1002 84.454 16.9635 84.5999 16.8695 84.7728C16.7755 84.9458 16.7273 85.1398 16.7294 85.3366C16.7316 85.5334 16.784 85.7264 16.8818 85.8972C17.1428 86.3393 17.5655 86.3501 17.9364 86.6154C18.4195 86.9561 18.564 87.6333 18.633 88.1919C18.7236 88.9251 18.3634 89.6648 18.4885 90.4024C18.6438 91.3124 19.5668 91.4958 20.3108 91.8128C20.8207 92.0475 21.367 92.1934 21.9261 92.2441C24.2293 92.4403 25.808 91.4591 27.5634 90.191L29.2283 88.9768C29.8214 88.5455 30.3648 88.0754 31.1002 87.8986C31.2369 87.8531 31.3838 87.8482 31.5231 87.8846C31.6625 87.921 31.7883 87.997 31.8853 88.1034C32.088 88.2997 32.3166 88.0775 32.5948 87.8317L32.7134 87.7282L33.5221 87.023C33.7202 86.8504 33.8525 86.6147 33.8969 86.3558C33.9413 86.0968 33.895 85.8305 33.7658 85.6018V85.6018Z",
        fill: "#E7E8EA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('부산광역시')
        }),
        "data-location": "\uBD80\uC0B0\uAD11\uC5ED\uC2DC",
        d: "M184.352 241.687C184.443 241.558 184.533 241.431 184.63 241.304C184.921 240.918 185.251 240.454 185.1 239.995C184.975 239.617 184.572 239.417 184.205 239.257C183.694 239.041 183.17 238.826 182.679 238.556C181.6 237.972 178.76 236.947 177.602 236.516C176.765 236.205 176.092 236.619 175.7 237.394C175.633 237.534 175.573 237.678 175.521 237.825C175.232 238.567 174.798 239.6 174.138 240.083C173.584 240.486 172.832 240.786 172.23 241.144C170.802 242.007 169.799 242.837 168.415 243.758C166.77 244.815 165.251 246.055 163.886 247.454C163.088 248.3 162.547 249.352 161.757 250.204C161.485 250.521 161.164 250.791 160.806 251.006C160.22 251.325 159.333 251.006 158.939 251.629C158.029 253.094 158.963 254.841 159.666 256.031C160.341 257.176 162.191 258.483 162.715 259.697C163.058 260.489 163.25 261.248 163.877 261.873C164.505 262.499 166.015 262.54 166.897 262.596C167.897 262.66 168.928 261.709 169.75 261.215C170.085 260.992 170.447 260.812 170.828 260.681C171.23 260.577 171.645 260.533 172.06 260.549C174.02 260.549 175.769 261.181 177.677 261.435C178.348 261.526 179.118 261.67 179.759 261.373C180.276 261.133 180.837 260.394 180.593 259.799C180.516 259.635 180.407 259.489 180.274 259.367C179.935 259.056 179.542 258.809 179.114 258.64C178.381 258.346 177.673 257.993 176.998 257.584C176.511 257.277 175.793 256.853 175.655 256.242C175.417 255.199 177.015 255.138 177.531 254.856C178.002 254.623 178.444 254.334 178.844 253.993C179.707 253.193 179.998 251.563 180.425 250.493L182.234 245.964C182.827 244.474 183.446 243.001 184.352 241.687Z",
        fill: "#E7E8EA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('대구광역시')
        }),
        "data-location": "\uB300\uAD6C\uAD11\uC5ED\uC2DC",
        d: "M158.32 189.621C157.772 187.885 156.856 187.145 155.663 186.895C154.884 186.733 153.989 186.513 153.004 186.63C151.479 186.848 150.02 187.397 148.729 188.238C146.722 189.66 147.241 191.368 146.06 193.274C145.335 194.443 144.334 195.463 143.094 195.92C142.094 196.262 141.076 196.55 140.045 196.783C138.016 197.283 137.701 198.575 138.611 200.488C139.655 202.679 140.782 204.467 139.926 207.037C139.525 208.247 138.859 209.343 138.481 210.563C138.148 211.666 138.056 212.827 138.212 213.968C138.367 215.109 138.767 216.203 139.383 217.175C140.013 218.142 140.908 218.968 141.986 219.203C144.837 219.822 145.734 216.83 146.868 214.842C147.985 212.886 149.715 211.98 151.438 210.779C152.84 209.802 154.77 208.217 155.892 206.897C159.064 203.151 159.687 198.105 159.146 193.166C158.986 191.96 158.71 190.773 158.32 189.621V189.621Z",
        fill: "#E7E8EA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('광주광역시')
        }),
        "data-location": "\uAD11\uC8FC\uAD11\uC5ED\uC2DC",
        d: "M60.6046 256.132C59.7613 255.476 59.0118 254.708 58.3769 253.848C57.6911 252.96 57.0225 251.347 55.789 251.163C55.0579 251.056 54.3246 251.295 53.6324 251.565C52.3384 252.071 51.3874 252.792 49.9662 252.938C48.624 253.075 47.2691 252.868 46.0282 252.339C45.8077 252.232 45.5791 252.144 45.3446 252.074C44.4992 251.858 43.6646 252.289 43.1168 252.904C42.6645 253.417 42.248 253.961 41.8703 254.532C41.7105 254.808 41.5123 255.06 41.2816 255.28C41.053 255.474 40.7748 255.595 40.5289 255.768C39.373 256.568 39.4636 258.621 39.2695 259.902L38.8058 262.988C38.4996 265.035 42.2456 264.332 43.2786 264.452C44.717 264.623 45.9765 265.425 47.072 266.326C47.9476 267.045 48.4371 268.42 49.7268 268.453C52.994 268.535 55.3512 263.745 58.7715 265.328C58.9117 265.393 59.0476 265.466 59.1899 265.524C59.633 265.718 60.1288 265.755 60.5956 265.629C61.0625 265.503 61.4726 265.222 61.7584 264.832C62.651 263.713 63.2659 262.399 63.5527 260.998C63.7684 259.954 63.9646 258.379 63.0869 257.562C62.7138 257.215 62.2242 257.047 61.7563 256.829C61.3503 256.635 60.9645 256.402 60.6046 256.132V256.132Z",
        fill: "#E7E8EA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('대전광역시')
        }),
        "data-location": "\uB300\uC804\uAD11\uC5ED\uC2DC",
        d: "M85.3753 165.614C85.3334 165.506 85.2851 165.401 85.2308 165.299C85.1617 165.163 85.082 165.036 85.0022 164.906C84.4177 163.955 83.7966 162.991 83.3028 161.986C83.1108 161.596 82.4897 160.356 82.1015 160.119C81.364 159.666 80.0571 159.28 79.3389 159.599C78.7933 159.84 77.5943 161.208 77.2039 161.654C76.3003 162.696 74.2257 163.017 73.4385 163.021C72.9124 162.995 72.3912 162.907 71.8858 162.758C71.5148 162.67 70.8549 162.42 70.5012 162.644C70.1476 162.868 70.0936 163.269 70.0354 163.623C69.9664 164.054 69.7507 164.891 69.6623 165.318C69.4833 166.166 69.4467 167.043 69.3086 167.893C69.1404 169.015 68.9248 170.138 69.5243 171.264C69.7033 171.592 69.4402 173.42 69.5049 173.796C69.589 174.296 69.9513 175.642 70.4128 176.168C71.3164 177.223 72.2589 177.822 73.4622 178.642C74.3119 179.22 75.3363 179.828 76.3284 179.871C77.6827 179.931 79.0845 179.871 80.3655 179.317C81.3295 178.885 82.0304 178.484 82.9534 177.984C83.9239 177.462 83.9497 175.29 84.1007 174.318C84.2797 173.168 83.8851 171.773 83.9325 170.356C83.9584 169.618 84.4824 168.583 84.9418 168.01C85.2278 167.689 85.4197 167.295 85.4962 166.873C85.5727 166.45 85.5308 166.014 85.3753 165.614V165.614Z",
        fill: "#E7E8EA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('울산광역시')
        }),
        "data-location": "\uC6B8\uC0B0\uAD11\uC5ED\uC2DC",
        d: "M194.341 216.938C194.077 216.559 193.744 216.232 193.36 215.974C192.188 215.245 190.796 214.952 189.429 215.146C187.348 215.42 185.357 214.56 183.433 213.9C182.463 213.566 181.472 213.296 180.466 213.091C179.532 212.903 178.635 213.438 177.824 213.885C176.806 214.443 176.314 216.212 175.536 217.012C174.757 217.812 172.062 219.36 171.076 219.977C170.213 220.51 167.541 220.042 167.481 221.215C167.421 222.388 169.873 225.118 170.578 226.018L173.813 230.156C174.414 230.928 175.016 231.699 175.62 232.468C176.112 233.098 176.683 234.247 177.47 234.521C178.518 234.883 179.95 234.612 180.843 235.351C181.238 235.677 181.52 236.022 181.973 236.315C182.62 236.723 184.969 237.131 185.605 237.54C185.987 237.805 186.4 238.022 186.834 238.187C188.316 238.694 189.703 237.732 189.623 236.11C189.595 235.535 189.37 234.978 189.358 234.385C189.34 233.421 189.358 232.444 189.435 231.491C189.496 230.667 189.588 229.843 189.713 229.026C189.8 228.472 189.664 227.495 190.382 227.322C191.245 227.107 191.596 228.588 192.519 228.634C193.597 228.683 194.344 228.03 194.406 226.971C194.479 225.726 194.406 224.45 194.792 223.268C194.956 222.776 195.2 222.31 195.338 221.808C195.698 220.514 195.301 218.439 194.587 217.279C194.51 217.173 194.428 217.059 194.341 216.938Z",
        fill: "#E7E8EA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('세종특별자치시')
        }),
        "data-location": "\uC138\uC885\uD2B9\uBCC4\uC790\uCE58\uC2DC",
        d: "M69.5027 144.688C68.7005 144.725 67.4712 144.619 66.7876 145.022C66.1039 145.426 64.8833 146.45 64.6892 147.267C64.4541 148.262 64.728 149.59 65.3987 150.349C66.6323 151.745 68.3835 153.323 69.3151 155.482C69.8392 156.7 70.691 159.228 70.5638 160.543C70.4624 161.576 73.0395 162.226 74.9309 161.622C75.9358 161.296 77.3161 160.013 77.7344 159.068C77.9501 158.566 78.6424 157.58 78.6682 157.035C78.9335 151.24 75.4528 146.252 70.8183 144.826C70.3904 144.708 69.9458 144.661 69.5027 144.688V144.688Z",
        fill: "#E7E8EA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('강원도')
        }),
        "data-location": "\uAC15\uC6D0\uB3C4",
        d: "M185.821 102.324C185.741 102.139 185.646 101.962 185.536 101.794C185.141 101.188 184.458 100.821 183.966 100.284C182.672 98.8735 181.674 97.1676 180.757 95.4898C178.969 92.2204 177.41 88.7159 174.555 86.2057C173.287 85.0907 172.892 82.6969 172.368 81.1463C171.76 79.3369 171.175 77.5211 170.533 75.7246C170.303 75.0396 170.031 74.3698 169.717 73.719C167.686 69.7465 163.914 67.4217 160.591 64.6246C160.563 64.5997 160.536 64.573 160.511 64.5448C145.503 46.7594 130.071 4.66704 129.202 2.27753C129.176 2.20661 129.138 2.14085 129.089 2.08344L127.526 0.230925C127.461 0.15419 127.38 0.093559 127.287 0.0538273C127.195 0.0140956 127.095 -0.00364642 126.995 0.00200207C126.895 0.00765055 126.797 0.0365362 126.71 0.086374C126.623 0.136212 126.549 0.205635 126.493 0.289153L122.113 6.82794L122.093 6.86029C120.817 9.01689 119.708 11.6695 118.041 13.5457C115.917 15.918 114.269 18.8186 111.558 20.6517C109.618 21.9586 107.651 21.9996 105.589 22.7458C103.965 23.3302 103.182 24.0397 101.317 24.1173C99.199 24.2015 97.0748 24.1885 94.957 24.1173C93.2102 24.0634 91.8558 23.3194 90.1306 23.1188C87.1415 22.7716 84.1223 22.8126 81.1225 22.9614C79.1772 23.0385 77.2399 23.2547 75.3255 23.6084C74.4629 23.7745 73.0115 24.374 72.1403 24.2252L72.0432 24.2101L67.1197 23.3647C64.8165 22.9679 62.0754 22.3338 59.7873 23.052C58.6853 23.397 58.034 24.4171 57.2899 25.2603L53.4728 29.5735C53.1471 29.9272 53.2571 30.7769 53.5137 31.1371C53.7056 31.3979 53.9475 31.6179 54.2254 31.784C55.6033 32.6833 57.2322 33.1192 58.8751 33.0284C60.3308 32.927 62.2027 32.4095 63.5807 33.0974C64.1695 33.3907 64.6008 33.9148 65.0149 34.4259C66.9558 36.7981 68.6811 38.9202 71.3315 40.5398C72.8828 41.4836 74.5801 42.1629 76.3542 42.5497C78.183 42.9487 79.8673 42.6446 81.336 43.9796C82.0947 44.713 82.6683 45.6163 83.0095 46.6149C83.3351 47.4776 83.3071 48.6982 83.7018 49.4854C84.3962 50.8742 86.074 51.4263 87.355 52.0582C88.053 52.3876 88.6469 52.9027 89.0718 53.547C89.4966 54.1913 89.7361 54.9401 89.7639 55.7114C89.8696 57.2922 89.3477 58.8407 88.8301 60.3395C88.3988 61.614 87.8446 62.7549 87.3033 63.9539C86.6347 65.4355 87.1286 66.7726 87.4758 68.2542C88.0279 69.8803 88.1228 71.4007 89.2011 72.8283C91.0363 75.3019 93.5682 77.1243 96.169 78.7115C97.3574 79.4475 98.588 80.1129 99.8546 80.7042C100.875 81.1722 101.714 81.7696 101.714 83.0117C101.714 85.2158 101.714 87.3767 101.561 89.5592C101.389 91.9569 101.024 94.3369 100.469 96.6759C99.8383 99.281 99.3915 101.927 99.1322 104.595C98.9815 106.319 99.3842 108.047 100.282 109.527C100.885 110.569 102.32 111.037 103.46 111.17C104.694 111.321 105.809 110.696 106.982 110.36C110.047 109.484 113.042 108.371 116.152 107.653C119.818 106.803 124.032 107.301 127.582 108.423C129.657 109.07 131.464 110.096 133.375 111.106C135.1 112.02 136.452 113.54 138.225 114.423C139.042 114.807 139.882 115.141 140.739 115.423L146.843 117.567C148.305 118.08 149.719 118.99 151.311 118.671C153.869 118.158 155.6 115.561 158.329 115.561C160.302 115.561 162.426 115.346 164.309 115.898C166.368 116.504 168.559 116.665 170.69 116.957C173.125 117.291 175.618 117.623 178.023 117.118C181.98 116.284 183.612 112.374 187.496 111.25C187.579 111.224 187.656 111.181 187.722 111.125C187.788 111.068 187.842 110.999 187.881 110.921C187.919 110.843 187.942 110.758 187.947 110.671C187.952 110.584 187.94 110.497 187.91 110.416C187.341 108.826 187.08 107.181 186.629 105.572C186.338 104.558 186.25 103.318 185.821 102.324Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('충청남도')
        }),
        "data-location": "\uCDA9\uCCAD\uB0A8\uB3C4",
        d: "M90.3225 190.244C90.5575 190.002 90.9695 189.731 91.1657 189.448C92.492 187.434 90.4195 184.755 89.4965 182.901C88.6921 181.288 87.7281 180.337 86.1797 179.715C84.8296 179.174 83.6953 178.877 82.3107 179.612C80.5855 180.529 79.5201 181.122 77.3635 181.178C74.2257 181.253 68.8881 178.064 68.2519 174.63C68.0988 173.806 68.4676 172.53 68.2368 171.727C67.8874 170.567 67.909 169.694 67.9737 168.48C68.0667 167.171 68.2672 165.873 68.5732 164.598C69.2914 161.348 69.6968 157.628 67.0636 154.425C65.9853 153.116 64.3528 151.76 63.6972 150.155C62.6189 147.518 63.7252 145.016 65.3836 144.173C65.7737 144 66.1759 143.855 66.587 143.741C67.3246 143.498 68.4632 143.817 69.1749 143.491C69.6688 143.265 71.4566 143.683 71.9505 143.455C72.798 143.064 75.2565 142.376 75.6641 141.533C76.1105 140.616 76.4944 140.698 77.3657 140.211C77.5716 140.109 77.7637 139.982 77.9371 139.831C79.6883 138.154 76.8287 136.368 75.6059 134.884C74.9201 134.052 74.0833 132.68 73.4752 131.774C72.4637 130.265 72.0302 128.755 70.8398 127.36C69.7289 126.109 68.1719 125.343 66.5029 125.227C64.1306 125.048 61.0877 125.874 58.778 126.178C58.4776 126.216 58.1751 126.237 57.8722 126.238C57.4172 126.238 56.9621 126.223 56.5071 126.215C56.3561 126.215 56.203 126.215 56.052 126.215C55.7491 126.217 55.4467 126.238 55.1463 126.277C52.9185 126.583 50.9711 127.686 49.1402 128.665C48.4501 129.033 47.8786 129.838 46.9836 129.654C46.7494 129.594 46.5296 129.488 46.3366 129.342C45.9053 129.051 45.4891 128.695 45.2885 128.229C44.7968 127.049 44.3957 125.736 43.7314 124.649C43.1621 123.713 42.7178 122.641 41.7711 122.003C40.6453 121.244 38.8467 121.14 37.5291 120.953C36.8821 120.862 36.2351 121.442 35.5881 121.311C33.259 120.832 31.193 119.549 29.0601 118.507C27.5505 117.769 26.7353 118.915 25.4414 119.385C23.8994 119.945 22.1159 119.993 20.5135 120.329C18.454 120.761 16.0084 121.751 14.9064 123.638C14.7187 123.987 14.569 124.356 14.46 124.737C14.4384 124.8 14.419 124.863 14.3996 124.925C14.2141 125.49 14.0049 126.034 13.5219 126.417C13.0995 126.74 12.6449 127.017 12.1654 127.246C11.6888 127.485 11.1992 127.701 10.7334 127.938C10.6585 127.975 10.5864 128.017 10.5177 128.065C9.70469 128.65 10.0454 129.687 9.84271 130.636C9.81227 130.784 9.76601 130.929 9.7047 131.067C9.41571 131.714 8.84205 132.115 8.28134 132.527C8.09372 132.665 7.91041 132.803 7.74004 132.958C5.47777 134.899 4.62376 137.735 4.5871 140.642C4.5501 141.18 4.63716 141.72 4.84158 142.219C5.69343 143.989 8.76873 143.377 10.3344 143.48C11.5205 143.56 12.7455 143.825 13.6685 144.574C15.4865 146.047 15.2126 148.395 15.0315 150.448C14.9862 150.957 15.4736 151.095 15.7518 151.419C16.0972 151.818 16.3032 152.318 16.3384 152.844C16.5037 154.23 16.6015 155.623 16.6317 157.022C16.6727 158.835 17.6194 160.246 18.2772 161.863C19.0708 163.817 19.6703 165.937 20.6494 167.807C21.4215 169.293 23.6686 169.004 24.3803 167.591C24.7534 166.836 24.5032 165.89 24.4105 165.135C24.0922 162.531 23.9373 159.91 23.9468 157.287C23.9335 156.908 23.9705 156.528 24.0568 156.159C24.225 155.559 24.9195 154.347 25.6829 154.475C26.3601 154.585 26.6749 155.486 26.7914 156.051C26.9639 156.897 27.2615 157.714 27.4621 158.557C27.7877 159.924 27.9948 161.318 28.3851 162.655C28.6719 163.645 28.7755 164.54 29.1636 165.501C29.4656 166.245 29.6877 167.513 29.2801 168.253C28.8725 168.993 28.3333 169.616 28.2341 170.503C28.1349 171.389 28.4261 172.422 28.4865 173.354C28.5619 174.481 28.7021 175.812 28.4606 176.918C28.163 178.329 27.8675 179.662 27.8805 181.117C27.8805 181.926 28.1975 182.342 28.7431 182.901C29.6963 183.889 31.0485 184.654 32.1484 185.489C32.5593 185.766 32.9282 186.101 33.2439 186.483C33.6256 186.99 33.8068 187.615 34.0677 188.195C34.7147 189.629 35.4717 191.495 37.0438 191.984C37.4234 192.103 37.8192 192.162 38.217 192.159C38.6076 192.157 38.9963 192.103 39.373 191.999C39.849 191.867 40.3057 191.672 40.7316 191.421C40.988 191.271 41.2343 191.104 41.4692 190.921C42.0234 190.49 42.9788 189.933 43.5028 189.491C43.5934 189.416 43.6861 189.347 43.7832 189.276C44.4582 188.818 45.2001 188.478 45.7241 187.831C46.8369 186.42 46.9404 185.903 47.7535 184.712C48.008 184.341 48.1977 183.91 48.5514 183.619C48.743 183.47 48.9551 183.349 49.1811 183.261C51.7173 182.183 54.702 182.463 57.2123 183.477C58.2794 183.929 59.311 184.461 60.2984 185.068C61.4586 185.758 62.455 186.267 63.805 186.53C65.0688 186.781 66.3713 186.358 67.6459 186.207C69.686 185.967 71.6895 185.241 73.6844 186.183C74.4209 186.558 75.0876 187.056 75.6555 187.656C75.9344 187.927 76.1898 188.222 76.4189 188.536C77.0659 189.47 77.3139 191.023 78.1657 191.771C78.9249 192.437 79.9148 192.564 80.8874 192.784C82.287 193.099 84.0295 193.667 85.2006 192.784C85.5594 192.508 85.9354 192.254 86.3263 192.025C86.5183 191.916 86.718 191.821 86.9237 191.741C87.8747 191.374 88.9444 191.283 89.8092 190.675C89.9929 190.547 90.1647 190.403 90.3225 190.244Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('경상남도')
        }),
        "data-location": "\uACBD\uC0C1\uB0A8\uB3C4",
        d: "M166.556 223.833C166.2 223.21 166.028 222.768 165.441 222.323C165.285 222.19 165.104 222.089 164.908 222.028C164.74 221.998 164.568 221.998 164.399 222.028C162.264 222.028 162.148 222.349 160.302 223.264C157.039 224.877 150.237 224.629 146.5 223.078C143.543 221.851 140.435 218.081 137.78 219.809C137.03 220.296 136.836 221.355 136.1 221.719C135.365 222.084 134.408 222.3 133.666 222.088C132.569 221.753 131.493 221.353 130.444 220.891C128.427 220.061 125.119 219.707 123.044 219.037C122.593 218.896 122.186 218.64 121.865 218.293C120.946 217.286 120.787 217.117 120.948 216.203C121.205 214.67 121.531 212.537 121.149 211.655C120.286 209.668 118.891 208.771 116.997 207.792C115.455 206.994 115.272 206.794 113.633 206.188C111.886 205.541 109.79 205.325 108.259 204.247C107.234 203.537 105.473 201.491 104.254 201.314C102.529 201.066 101.3 203.205 99.8654 204.02C97.7304 205.234 98.5521 206.263 96.6305 207.797C94.709 209.33 93.5056 211.189 92.8263 213.738C92.492 215.002 92.3669 216.309 92.1664 217.598C91.9097 219.248 92.2548 220.199 91.61 221.747C90.6697 224.005 90.0357 225.478 91.3145 227.799C91.6553 228.42 92.1772 228.918 92.5222 229.539C94.0491 232.321 94.2302 235.146 92.5653 237.853C92.3949 238.157 92.1672 238.425 91.8946 238.642C92.3418 240.173 92.8177 241.694 93.3223 243.203C94.5667 246.939 93.7817 250.635 95.2266 254.297C95.7528 255.63 96.3049 257.023 97.5514 257.84C98.5822 258.524 99.8244 258.873 100.691 259.745C101.558 260.616 101.198 261.957 100.983 263.007C100.409 265.811 100.965 268.183 101.315 270.909C101.655 273.583 101.438 276.191 102.572 278.725C103.036 279.762 103.553 280.799 104.338 281.619C104.932 282.23 105.655 282.702 106.454 282.999C108.088 283.596 109.882 283.582 111.507 282.96C114.291 281.882 116.074 279.525 116.967 276.807C117.744 274.448 119.555 273.435 121.983 273.788C123.342 273.982 124.658 274.42 126.016 274.606C128.455 274.94 130.998 274.457 133.349 275.151C134.427 275.466 135.415 276.014 136.482 276.339C138.423 276.937 140.532 276.771 142.555 276.493C145.395 276.102 148.41 275.401 150.349 273.286C152.639 270.788 152.937 266.098 150.31 263.698C149.385 262.85 148.197 261.886 147.901 260.603C147.709 259.77 148.391 258.852 148.419 257.993C148.453 257.021 148.106 256.072 148.203 255.093C148.363 253.432 149.713 253.279 151.035 253.915C152.452 254.605 153.97 256.85 155.717 255.304C156.702 254.441 156.364 253.182 156.413 252.002C156.416 251.81 156.435 251.619 156.472 251.431C156.6 250.962 156.896 250.556 157.304 250.292C157.653 250.052 158.037 249.87 158.443 249.751C158.747 249.665 159.09 249.684 159.366 249.535C159.709 249.328 160.016 249.068 160.278 248.765C161.035 247.948 161.553 246.939 162.318 246.13C163.612 244.767 163.595 244.698 165.152 243.663C166.48 242.781 167.856 241.972 169.226 241.157C169.802 240.814 170.951 240.096 171.486 239.708C174.684 237.37 175.491 234.747 173.642 232.375C173.039 231.605 172.249 231.135 171.648 230.363C170.569 228.985 169.707 228.036 168.628 226.656C168.257 226.181 167.684 225.761 167.371 225.263C167.061 224.809 166.789 224.331 166.556 223.833V223.833Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('경상북도')
        }),
        "data-location": "\uACBD\uC0C1\uBD81\uB3C4",
        d: "M200.442 187.262C200.327 187.04 200.169 186.843 199.979 186.681C198.793 185.715 196.947 187.302 196 188.148C194.837 189.183 189.53 192.748 190.315 188.364C190.686 186.298 191.939 185.051 191.557 182.782C190.859 178.616 191.879 173.94 191.879 169.722C192.027 165.624 192.978 160.699 192.336 156.679C191.618 152.178 192.726 147.06 193.093 142.577C193.457 138.154 192.853 136.426 192.068 132.152C191.387 128.445 191.286 124.617 191.139 120.871C191.025 117.903 190.546 114.36 188.12 112.35C188.088 112.446 188.033 112.533 187.961 112.603C187.888 112.674 187.8 112.726 187.703 112.755C183.822 113.888 182.187 117.573 178.229 118.408C175.823 118.913 173.33 118.58 170.897 118.246C168.741 117.98 166.608 117.554 164.516 116.972C162.622 116.415 160.509 116.851 158.536 116.851C156.562 116.851 154.94 118.455 153.342 119.424C151.52 120.528 149.583 121.112 147.554 121.727C146.351 122.091 145.13 122.462 144.067 123.135C143.454 123.523 142.836 124.088 142.232 124.533C141.564 125.013 140.948 125.563 140.396 126.174C139.806 126.832 139.37 127.614 139.122 128.462C138.906 129.234 139.057 129.57 139.195 130.33C139.312 130.977 139.715 131.498 139.771 132.154C139.852 133.203 139.713 134.258 139.366 135.251C139.005 136.297 138.274 137.772 137.336 138.423C136.258 139.163 134.237 139.07 133.023 138.896C131.583 138.661 130.202 138.148 128.958 137.386C128.207 136.955 127.151 135.846 126.187 136.092C125.729 136.206 125.585 136.666 125.108 136.791C124.595 136.927 124.006 136.707 123.508 136.592C122.561 136.377 121.136 135.963 120.211 136.245C119.798 136.353 119.414 136.548 119.083 136.817C118.708 137.149 117.916 137.99 117.754 138.464C117.323 139.728 117.323 141.052 117.304 142.396C117.289 144.432 115.175 144.253 113.704 144.984C112.641 145.512 112.309 146.819 111.733 147.839C111.405 148.415 111.483 149.07 111.19 149.661C110.78 150.479 109.557 150.371 108.936 150.992C107.925 152.003 108.214 153.524 108.117 154.822C107.981 156.625 107.457 158.057 107.661 159.896C107.892 161.958 107.342 164.361 107.342 166.444C107.357 167.777 107.209 169.178 107.787 170.401C108.16 171.188 109.04 171.911 109.797 172.342C112.169 173.658 116.122 172.786 117.409 175.685C118.127 177.305 118.214 179.166 117.841 180.895C117.444 182.707 116.547 184.441 115.468 185.933C115.08 186.47 114.821 187.173 114.519 187.762C114.371 188.066 114.2 188.359 114.006 188.637C113.818 188.88 113.613 189.108 113.392 189.321C112.583 190.138 112.098 190.865 110.888 190.921C110.357 190.947 109.98 191.137 109.484 191.26C108.912 191.409 108.272 191.337 107.687 191.404C106.158 191.579 106.305 193.818 106.219 194.9C106.139 195.922 106.068 196.945 105.975 197.965C105.79 200.035 106.242 200.93 108.255 202.323C109.788 203.389 111.448 204.258 113.197 204.911C114.826 205.517 116.529 205.933 118.071 206.731C119.965 207.71 121.783 209.254 122.654 211.241C123.12 212.258 123.275 213.39 123.101 214.495C122.947 215.409 122.022 215.789 122.939 216.8C123.26 217.148 123.667 217.404 124.118 217.544C126.193 218.215 127.569 218.353 129.577 219.183C130.655 219.63 131.669 220.273 132.799 220.596C133.709 220.855 134.093 220.682 134.893 220.38C135.289 220.237 135.66 220.03 135.99 219.768L136.077 219.699C137.761 218.364 138.041 216.369 136.745 214.652C136.167 213.887 136.799 212.024 136.745 211.254C136.614 209.414 138.039 207.669 138.376 206.699C139.087 204.633 137.729 202.12 136.853 200.361C136.098 198.823 136.791 196.06 138.475 195.659C139.312 195.459 141.494 194.82 142.301 194.529C143.327 194.163 143.728 193.343 144.33 192.405C145.309 190.874 145.093 189.287 146.761 188.146C147.684 187.514 151.367 185.256 152.465 185.126C153.282 185.032 154.024 185.211 154.671 185.342C155.661 185.541 157.716 185.057 158.169 186.451C158.471 187.38 160.47 189.403 160.58 190.378C161.029 194.344 160.729 204.003 158.096 207.012C157.164 208.077 156.211 209.349 155.046 210.134C155.001 210.165 152.57 211.691 152.521 211.726C150.351 213.223 142.456 219.798 148.576 222.757C151.063 223.958 154.015 222.677 156.713 222.668C157.134 222.679 157.556 222.653 157.973 222.591C158.405 222.499 158.829 222.366 159.236 222.194C160.91 221.547 162.355 220.533 163.949 219.742C165.971 218.739 167.207 219.507 169.267 219.032C170.884 218.662 172.64 217.208 173.959 216.246C174.921 215.547 175.163 214.737 175.9 213.816C176.879 212.576 178.704 211.43 180.283 211.471C182.918 211.54 184.404 212.168 186.608 213.397C189.875 215.222 195.234 212.013 196.614 208.884C198.249 205.174 198.34 202.198 198.702 198.226C198.827 196.837 199.241 196.099 199.78 194.775C200.639 192.584 201.674 189.515 200.442 187.262Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('전라남도')
        }),
        "data-location": "\uC804\uB77C\uB0A8\uB3C4",
        d: "M99.0372 264.312C99.2529 263.262 99.6044 261.916 98.7461 261.049C97.8878 260.182 96.637 258.966 95.6061 258.282C94.3704 257.465 93.8075 256.072 93.2813 254.737C92.1491 251.867 93.1368 240.37 89.4361 240.478C86.322 240.568 84.504 240.355 81.3446 240.195C79.1599 240.087 76.9408 241.825 74.8748 242.205C73.4217 242.479 71.9324 242.504 70.471 242.278C68.7975 242.063 67.2361 242.973 65.5108 242.947C63.695 242.919 61.8986 242.44 60.2207 241.772C57.1497 240.547 54.7538 238.321 52.2823 236.177C51.0768 235.129 49.2156 232.727 47.6025 232.425C46.4056 232.209 45.0146 232.897 43.9104 233.238C43.6357 233.312 43.3691 233.414 43.1146 233.542C42.2865 234.001 41.5813 235.174 41.0831 235.962C40.4361 236.986 40.117 238.211 39.6253 239.311C38.8791 240.978 37.0762 242.186 35.2819 242.874C34.5372 243.12 33.7566 243.241 32.9722 243.232C31.5294 243.279 30.0026 243.232 28.7776 242.464C28.0185 241.989 26.7935 241.278 26.2415 240.572C25.0251 239.018 23.9166 237.316 22.6917 235.796C21.6522 234.502 21.277 234.528 20.6688 235.968C19.2368 239.36 19.7717 241.084 17.6496 244.284C16.9659 245.317 15.8402 245.957 15.2169 246.995C14.0589 248.925 16.5562 251.903 14.3543 253.249C12.5169 254.366 9.35749 252.96 7.68828 252.093C5.33975 250.877 2.93299 252.539 1.23144 254.25C0.0560997 255.429 -0.847512 257.359 1.21203 258.211C2.25798 258.643 2.45854 257.853 3.31902 258.83C4.51809 260.197 3.26511 263.654 4.84589 264.198C7.4187 265.084 10.5609 261.179 12.2214 264.974C13.1294 267.051 10.8542 267.937 10.6385 269.868C10.3215 272.712 11.9325 274.036 13.3364 276.111C14.7101 278.125 13.2501 280.741 12.5298 282.917C11.5184 285.977 12.0489 289.368 10.9965 292.35C10.2417 294.489 8.62424 296.978 6.51725 298.011C3.80857 299.337 1.03519 301.08 2.65911 304.6C3.68133 306.817 5.96516 308.9 8.50132 308.697C10.6859 308.529 13.6448 307.466 15.3852 306.144C17.2204 304.748 18.784 302.404 21.443 302.926C23.4983 303.329 24.2768 304.832 24.4623 306.776C24.6973 309.204 24.3286 310.468 26.0366 312.566C27.2249 314.026 28.7733 314.235 30.6021 313.808C32.2993 313.414 33.9513 312.823 35.6658 312.514C37.3026 312.208 38.7475 313.058 40.255 312.814C44.387 312.141 49.2803 311.928 51.1911 307.91C52.953 304.207 53.4965 300.032 55.4719 296.42C57.2403 293.185 62.938 289.204 62.3859 295.93C62.2436 297.655 60.7987 299.275 61.6311 300.966C62.2781 302.305 63.4815 303.368 64.9976 303.536C66.16 303.664 67.1995 303.014 68.4071 303.176C71.7865 303.629 73.7641 305.234 76.5181 301.947C78.1312 300.021 79.2182 298.712 81.4783 297.306C83.2273 296.228 84.739 295.365 85.1768 295.149C92.1146 291.421 92.1706 284.998 95.2352 278.173C96.1366 276.163 97.0424 275.667 98.1444 273.773C98.6326 272.95 98.9898 272.056 99.2033 271.123C98.8928 268.824 98.5498 266.719 99.0372 264.312ZM65.1033 261.015C64.8207 262.391 63.0955 265.38 62.2156 266.477C61.9335 266.863 61.5285 267.14 61.0675 267.265C60.6065 267.389 60.1169 267.352 59.6794 267.161C59.5392 267.103 59.4034 267.03 59.2654 266.967C55.886 265.403 53.0112 270.133 49.7764 270.053C48.504 270.021 46.9038 268.662 46.039 267.953C44.9132 267.034 43.5529 266.448 42.1118 266.262C41.0917 266.141 36.7354 265.281 37.0395 263.258C37.1905 262.244 37.6239 260.948 37.7771 259.932C37.9668 258.666 37.3177 256.361 38.4585 255.569C38.7022 255.401 38.9783 255.28 39.2026 255.091C39.4305 254.873 39.6265 254.624 39.7849 254.351C40.1579 253.788 42.2455 251.854 42.6919 251.347C43.2311 250.73 44.0571 250.036 44.8917 250.247C45.1233 250.316 45.349 250.403 45.5667 250.508C46.783 251.036 48.6959 251.513 50.0136 251.37C51.4197 251.228 52.3578 250.236 53.6366 249.736C54.316 249.471 55.0427 249.231 55.7652 249.339C56.9772 249.52 57.6371 250.553 58.3143 251.431C58.9613 252.263 61.3465 255.017 62.1962 255.643C62.5532 255.909 62.9353 256.139 63.337 256.331C63.7899 256.546 64.2816 256.712 64.6504 257.053C65.5173 257.868 65.3232 259.984 65.1097 261.015H65.1033Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('전라북도')
        }),
        "data-location": "\uC804\uB77C\uBD81\uB3C4",
        d: "M104.276 195.109C104.319 194.566 104.293 194.014 104.371 193.472C104.427 193.063 104.64 192.61 104.614 192.178C104.554 191.236 103.519 191.659 102.852 191.702C101.222 191.805 99.6713 191.337 98.0862 191.029C97.2991 190.874 96.2531 190.684 95.4789 190.464C94.7047 190.244 94.0771 189.908 93.2749 189.968C92.3518 190.041 92.0887 191.072 91.2843 191.441C90.3138 191.885 89.3779 192.366 88.3406 192.653C87.3033 192.94 86.5226 193.434 85.6405 194.087C84.4609 194.963 82.7183 194.611 81.3273 194.303C80.3547 194.087 78.0709 193.738 77.3118 193.073C76.4491 192.325 76.4362 190.988 75.7806 190.054C75.5508 189.74 75.2955 189.446 75.0171 189.174C74.3184 188.476 73.5075 187.594 72.8303 187.27C70.8355 186.328 69.6947 187.486 67.6545 187.725C66.38 187.876 64.8509 188.299 63.598 188.049C62.2587 187.785 61.2516 187.277 60.0913 186.586C59.0799 185.987 58.7068 185.407 57.6156 184.967C54.1284 183.559 50.4665 182.896 48.146 186.554C47.4494 187.65 46.921 188.926 45.8341 189.69C44.6307 190.533 43.3777 191.314 42.101 192.038C41.1025 192.605 40.0437 193.365 38.9007 193.559C38.2709 193.667 37.624 193.449 36.9942 193.444C36.1575 193.444 35.7865 193.785 35.2841 194.411C34.6371 195.228 33.0628 197.158 33.6946 198.329C34.4279 199.683 36.4012 199.077 37.514 199.72C40.9429 201.702 36.4076 204.986 34.9735 206.289C33.41 207.71 33.0498 210.171 32.5883 212.131L28.7064 214.743C26.9143 215.948 23.6147 217.255 23.77 219.804C23.9253 222.354 28.6245 221.411 30.2614 221.899C30.9083 222.093 31.702 222.461 31.689 223.143C31.6782 223.727 31.0722 224.087 30.5503 224.348C28.0444 225.601 26.5477 227.152 24.3997 228.948C20.6559 232.084 24.6758 235.778 26.91 238.636C27.4621 239.341 28.0401 240.053 28.7992 240.527C30.0241 241.291 31.551 241.342 32.9938 241.295C33.7782 241.305 34.5588 241.184 35.3035 240.937C37.0977 240.249 38.038 238.61 38.7842 236.943C39.3535 235.671 39.9552 232.794 41.4756 232.373C41.728 232.304 41.9954 232.306 42.2477 232.244C42.7265 232.125 43.1103 231.793 43.5416 231.536C44.3612 231.036 45.3165 230.818 46.2546 230.609C46.7008 230.478 47.1684 230.437 47.6306 230.488C49.2437 230.782 51.1048 233.193 52.3104 234.241C54.7818 236.397 57.3935 238.826 60.4644 240.051C62.1423 240.719 63.9387 241.198 65.7546 241.226C67.4798 241.252 69.0412 240.337 70.7147 240.557C72.1762 240.783 73.6654 240.759 75.1185 240.484C77.1737 240.104 78.3146 238.798 80.51 238.905C83.0749 239.035 85.6412 239.076 88.209 239.028C88.7029 239.028 89.2226 238.998 89.6475 238.744C89.9746 238.518 90.2436 238.218 90.4325 237.868C92.0973 235.159 92.3475 232.336 90.8207 229.554C90.4821 228.933 89.958 228.435 89.613 227.814C88.3341 225.494 88.966 222.942 89.9084 220.684C90.5554 219.136 90.8552 217.322 91.1118 215.672C91.3124 214.378 91.4374 213.085 91.7717 211.812C92.451 209.263 94.062 208.293 96.0073 206.733C97.9525 205.174 97.5298 203.309 99.6735 202.094C101.114 201.275 102.647 200.471 103.987 199.459C103.987 199.082 104.015 198.663 104.058 198.178C104.125 197.145 104.196 196.131 104.276 195.109Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('충청북도')
        }),
        "data-location": "\uCDA9\uCCAD\uBD81\uB3C4",
        d: "M78.6553 150.459C79.092 151.759 79.4252 153.092 79.6516 154.445C79.7875 155.163 79.8242 155.68 79.8953 156.405C79.9428 156.877 79.5783 157.796 79.8004 158.178C80.0226 158.559 80.5833 158.497 81.0275 158.462C82.2848 158.359 83.1841 158.738 83.6457 159.862C84.1395 161.057 85.0323 162.318 85.6491 163.451C86.1106 164.296 87.2644 166.064 86.2638 167.68C85.2631 169.295 84.6506 170.052 85.1121 172.06C85.4119 173.354 85.0733 175.665 84.9504 176.964C84.9236 177.242 84.9863 177.522 85.1294 177.763C85.2725 178.003 85.4886 178.192 85.7462 178.301C86.8318 178.77 87.8915 179.297 88.9207 179.879C89.8976 180.69 90.2685 181.499 90.7991 182.657C91.1157 183.241 91.4762 183.801 91.8774 184.331C92.3777 185.051 92.5373 186.056 92.8608 186.873C93.0613 187.374 93.1627 188.087 93.5832 188.45C94.5019 189.241 96.555 189.312 97.6657 189.528C100.612 190.104 103.866 190.91 106.859 190.438C108.203 190.222 110.525 189.89 111.712 189.064C112.129 188.733 112.477 188.322 112.734 187.855C113.223 187.087 113.931 186.319 114.422 185.551C115.557 183.779 116.715 181.303 116.825 179.129C116.874 178.354 116.738 177.579 116.428 176.867C114.918 173.505 111.116 175.433 109.083 173.847C107.72 172.782 106.689 171.447 106.249 169.75C105.91 168.439 106.145 167.496 106.165 166.144C106.186 164.835 106.639 163.617 106.544 162.333C106.421 160.671 106.296 159.495 106.506 157.373C106.57 156.726 106.542 156.163 106.695 155.536C106.974 154.406 106.982 153.437 107.002 152.275C107.002 151.533 107.127 150.403 107.687 149.847C108.248 149.29 108.651 149.517 109.318 149.135C110.709 148.337 110.28 147.841 110.886 146.763C111.461 145.743 111.578 144.436 112.641 143.907C114.112 143.176 115.794 143.355 115.809 141.32C115.821 139.982 116.046 138.655 116.475 137.388C116.637 136.914 117.429 136.288 117.804 135.956C118.179 135.624 118.393 135.26 118.837 135.134C119.984 134.807 121.88 134.798 123.042 135.072C123.993 135.288 124.787 135.38 125.699 134.986C126.45 134.66 126.961 134.986 127.754 135.247C130.127 136.053 132.001 137.8 134.593 137.878C135.115 137.91 135.638 137.825 136.122 137.627C137.2 137.142 138.628 135.087 138.723 133.981C138.85 132.452 137.959 131.393 137.645 130.054C137.429 129.072 137.845 127.41 138.212 126.504C138.281 126.333 138.574 126.167 138.66 126.008C140.625 122.326 145.451 120.903 148.85 119.698C147.086 119.079 143.569 118.188 141.805 117.571C140.942 117.271 139.236 116.756 138.427 116.355C136.655 115.473 135.305 113.737 133.577 112.822C131.671 111.813 129.644 110.362 127.569 109.708C124.017 108.587 119.805 108.089 116.139 108.938C113.029 109.656 110.034 110.985 106.969 111.86C105.796 112.197 104.681 113.038 103.447 112.887C102.54 112.777 101.586 112.671 100.929 112.024C100.853 111.946 100.762 111.884 100.661 111.844C100.56 111.803 100.451 111.783 100.343 111.787C100.234 111.79 100.127 111.816 100.029 111.864C99.9304 111.911 99.8432 111.978 99.7727 112.061L99.5829 112.277C99.1969 112.693 98.8 112.883 98.3903 113.275C97.1093 114.504 98.0948 113.896 96.6197 114.884C95.2093 115.829 94.1849 117.168 92.7227 118.035C91.2606 118.902 89.9839 118.982 88.4311 119.475C86.7835 120.002 85.3278 120.935 83.7707 121.712C82.8412 122.173 81.7349 122.464 80.8529 122.93C80.0722 123.344 79.4856 124.19 78.7437 124.666C78.0622 125.098 77.3117 125.654 76.6755 126.157C76.2938 126.458 75.9509 126.823 75.5131 127.039C74.5405 127.515 72.9899 126.957 73.0072 127.99C73.1538 128.225 73.3005 128.462 73.4536 128.695C74.1502 129.773 74.2731 130.705 74.9848 131.766C75.5929 132.672 76.6453 133.828 77.3311 134.66C78.0471 135.523 81.2022 138.973 80.0937 140.039C79.9277 140.198 79.7228 140.737 79.5222 140.849C78.6596 141.337 77.6201 141.255 77.1737 142.171C76.7661 143.017 76.4642 142.84 75.6167 143.23C74.9956 143.517 72.082 143.797 73.404 144.589C75.2134 145.678 77.9026 148.374 78.6553 150.459Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('제주특별자치도')
        }),
        "data-location": "\uC81C\uC8FC\uD2B9\uBCC4\uC790\uCE58\uB3C4",
        d: "M241.945 277.018L235.907 277.617C235.833 277.617 235.76 277.635 235.691 277.648C234.065 277.928 215.274 281.314 208.539 288.329C207.157 289.83 206.034 291.552 205.218 293.423C205.029 293.894 204.961 294.405 205.021 294.909C205.082 295.413 205.268 295.894 205.563 296.306L208.928 301.027C209.169 301.372 209.481 301.663 209.843 301.88C210.204 302.096 210.607 302.235 211.026 302.286C211.444 302.336 211.868 302.299 212.271 302.175C212.674 302.051 213.046 301.844 213.364 301.566L213.439 301.497C213.747 301.208 214.112 300.986 214.511 300.846C214.91 300.706 215.334 300.651 215.755 300.684L221.337 301.137C221.584 301.159 221.833 301.148 222.078 301.107C223.269 300.909 227.138 300.307 229.775 300.398C230.261 300.412 230.743 300.309 231.18 300.096C231.617 299.883 231.995 299.568 232.283 299.177L232.885 298.364C233.215 297.919 233.66 297.573 234.173 297.364C234.685 297.156 235.246 297.092 235.792 297.18L237.086 297.385C237.593 297.467 238.113 297.419 238.596 297.245L243.424 295.519C243.808 295.382 244.16 295.169 244.459 294.892C244.758 294.615 244.998 294.28 245.165 293.908C245.79 292.504 246.981 290.16 248.462 288.773C248.77 288.491 249.017 288.148 249.187 287.766C249.357 287.383 249.447 286.97 249.45 286.552V284.915C249.45 284.352 249.293 283.801 248.997 283.322L247.44 280.809C247.267 280.527 247.048 280.276 246.793 280.065C245.695 279.166 242.676 276.77 241.945 277.018Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        "data-location": "\uC81C\uC8FC\uB3C4\uD14C\uB450\uB9AC",
        x: "189.5",
        y: "261.5",
        width: "75.4499",
        height: "56.3076",
        rx: "7.5",
        stroke: "#E7E8EA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('경상북도')
        }),
        "data-location": "\uACBD\uC0C1\uBD81\uB3C4",
        d: "M245.483 78.2909L244.748 78.4721C244.415 78.5548 244.098 78.6918 243.809 78.8775C242.759 79.5569 239.712 80.7624 239.563 82.1124C239.384 83.7795 242.252 84.5903 243.326 85.261C243.723 85.5138 244.172 85.6712 244.639 85.721C245.107 85.7707 245.579 85.7115 246.02 85.5479C247.461 84.9936 248.392 83.7622 248.931 82.7982C249.226 82.2709 249.36 81.669 249.317 81.0666C249.274 80.4641 249.055 79.8874 248.689 79.4075C248.322 78.9276 247.823 78.5653 247.253 78.3654C246.683 78.1655 246.067 78.1366 245.481 78.2823L245.483 78.2909Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: cx({
          'active': isSelected('경상북도')
        }),
        "data-location": "\uACBD\uC0C1\uBD81\uB3C4",
        d: "M259.788 85.1316L259.261 85.261C259.023 85.3207 258.797 85.419 258.591 85.5522C257.918 85.9835 257.206 86.3889 256.563 86.8634C255.429 87.698 255.826 88.4204 256.85 89.2507C257.713 89.943 259.007 90.7604 260.128 90.3484C261.207 89.9538 261.884 89.0351 262.272 88.3299C262.411 88.0741 262.497 87.7931 262.526 87.5036C262.555 87.214 262.526 86.9216 262.44 86.6434C262.276 86.0995 261.909 85.6394 261.416 85.3581C260.922 85.0768 260.339 84.9957 259.788 85.1316V85.1316Z",
        fill: "#F4F4F5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, _this);
};

_s(Map, "aXt+qKMuEE/paCu/DcU8sSNA82w=", false, function () {
  return [src_util_storeProvider__WEBPACK_IMPORTED_MODULE_3__["useStores"]];
});

_c = Map;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(Map));

var _c, _c2;

$RefreshReg$(_c, "Map");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/koreaMap/map/map.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/koreaMap/map/map.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./map.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/map/map.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./map.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/map/map.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./map.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/map/map.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/store/koreaMapUIStore.ts":
/*!**************************************!*\
  !*** ./src/store/koreaMapUIStore.ts ***!
  \**************************************/
/*! exports provided: LOCATION_DATA, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_DATA", function() { return LOCATION_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KoreaMapUIStore; });
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");







var _class, _descriptor, _descriptor2, _temp;


var LOCATION_DATA = ['서울특별시', '경기도', '인천광역시', '부산광역시', '대구광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '강원도', '충청남도', '경상남도', '경상북도', '전라남도', '전라북도', '충청북도', '제주특별자치도'];
var KoreaMapUIStore = (_class = (_temp = /*#__PURE__*/function () {
  function KoreaMapUIStore() {
    var _this = this;

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, KoreaMapUIStore);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_selectedLocations", _descriptor, this);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isSelected", function (name) {
      return _this._selectedLocations.has(name);
    });

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleLocation", _descriptor2, this);
  }

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(KoreaMapUIStore, [{
    key: "selectedLocations",
    get: function get() {
      return this._selectedLocations;
    }
  }]);

  return KoreaMapUIStore;
}(), _temp), (_descriptor = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "_selectedLocations", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new Set();
  }
}), _descriptor2 = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "toggleLocation", [mobx__WEBPACK_IMPORTED_MODULE_6__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (name) {
      console.log(name, _this2._selectedLocations);
      _this2._selectedLocations.has(name) ? _this2._selectedLocations["delete"](name) : _this2._selectedLocations.add(name);
    };
  }
})), _class);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9PYnNlcnZlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9hc3NlcnRFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9vYnNlcnZlckJhdGNoaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3ByaW50RGVidWdWYWx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9yZWFjdGlvbkNsZWFudXBUcmFja2luZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9zdGF0aWNSZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlQXNPYnNlcnZhYmxlU291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3VzZUxvY2FsU3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlUXVldWVkRm9yY2VVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMvcmVhY3RCYXRjaGVkVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QvZGlzdC9tb2J4cmVhY3QuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9rb3JlYU1hcC9rb3JlYU1hcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbG9jYXRpb25MaXN0L2xvY2F0aW9uTGlzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbWFwL21hcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9rb3JlYU1hcC9sb2NhdGlvbkxpc3QvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9rb3JlYU1hcC9sb2NhdGlvbkxpc3QvbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzPzNlMjgiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2tvcmVhTWFwL21hcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2tvcmVhTWFwL21hcC9tYXAubW9kdWxlLnNjc3M/YmI4ZiIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2tvcmVhTWFwVUlTdG9yZS50cyJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiS29yZWFNYXAiLCJMb2NhdGlvbiIsIm9ic2VydmVyIiwibmFtZSIsInVzZVN0b3JlcyIsImtvcmVhTWFwVUlTdG9yZSIsImlzU2VsZWN0ZWQiLCJ0b2dnbGVMb2NhdGlvbiIsIkxvY2F0aW9uTGlzdCIsImxpc3QiLCJMT0NBVElPTl9EQVRBIiwibWFwIiwiTWFwIiwiaGFuZGxlQ2xpY2siLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsImxvY2F0aW9uIiwiS29yZWFNYXBVSVN0b3JlIiwiX3NlbGVjdGVkTG9jYXRpb25zIiwiaGFzIiwib2JzZXJ2YWJsZSIsIlNldCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnRUFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBMkI7QUFDTTtBQUNqQyxLQUFLLDhDQUFRO0FBQ2I7QUFDQTtBQUNBLEtBQUssd0NBQUc7QUFDUjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ2tEO0FBQ3pCO0FBQ3RELDBFQUFnQixDQUFDLGtGQUFLO0FBQ3lEO0FBQ3pDO0FBQ007QUFDRztBQUNOO0FBQ3VCO0FBQ2hCO0FBQ3lDO0FBQ2hCOzs7Ozs7Ozs7Ozs7O0FDWnpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FB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SCxHQUVHLE1BQUksQ0FBQ2dCLGtCQUFMLENBQXdCTyxHQUF4QixDQUE0QnZCLElBQTVCLENBRkg7QUFHQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tvcmVhTWFwLmUxMDExNTdmMWNlY2I4MDZlNWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gXCIuL3VzZU9ic2VydmVyXCI7XG5mdW5jdGlvbiBPYnNlcnZlckNvbXBvbmVudChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCByZW5kZXIgPSBfYS5yZW5kZXI7XG4gICAgdmFyIGNvbXBvbmVudCA9IGNoaWxkcmVuIHx8IHJlbmRlcjtcbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoY29tcG9uZW50KTtcbn1cbk9ic2VydmVyQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogT2JzZXJ2ZXJQcm9wc0NoZWNrLFxuICAgIHJlbmRlcjogT2JzZXJ2ZXJQcm9wc0NoZWNrXG59O1xuT2JzZXJ2ZXJDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIk9ic2VydmVyXCI7XG5leHBvcnQgeyBPYnNlcnZlckNvbXBvbmVudCBhcyBPYnNlcnZlciB9O1xuZnVuY3Rpb24gT2JzZXJ2ZXJQcm9wc0NoZWNrKHByb3BzLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICB2YXIgZXh0cmFLZXkgPSBrZXkgPT09IFwiY2hpbGRyZW5cIiA/IFwicmVuZGVyXCIgOiBcImNoaWxkcmVuXCI7XG4gICAgdmFyIGhhc1Byb3AgPSB0eXBlb2YgcHJvcHNba2V5XSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIHZhciBoYXNFeHRyYVByb3AgPSB0eXBlb2YgcHJvcHNbZXh0cmFLZXldID09PSBcImZ1bmN0aW9uXCI7XG4gICAgaWYgKGhhc1Byb3AgJiYgaGFzRXh0cmFQcm9wKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJNb2JYIE9ic2VydmVyOiBEbyBub3QgdXNlIGNoaWxkcmVuIGFuZCByZW5kZXIgaW4gdGhlIHNhbWUgdGltZSBpbmBcIiArIGNvbXBvbmVudE5hbWUpO1xuICAgIH1cbiAgICBpZiAoaGFzUHJvcCB8fCBoYXNFeHRyYVByb3ApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiICtcbiAgICAgICAgcHJvcEZ1bGxOYW1lICtcbiAgICAgICAgXCJgIG9mIHR5cGUgYFwiICtcbiAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gK1xuICAgICAgICBcImAgc3VwcGxpZWQgdG9cIiArXG4gICAgICAgIFwiIGBcIiArXG4gICAgICAgIGNvbXBvbmVudE5hbWUgK1xuICAgICAgICBcImAsIGV4cGVjdGVkIGBmdW5jdGlvbmAuXCIpO1xufVxuIiwiaW1wb3J0IHsgc3B5IH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pZiAoIXVzZVN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC1yZWFjdC1saXRlIHJlcXVpcmVzIFJlYWN0IHdpdGggSG9va3Mgc3VwcG9ydFwiKTtcbn1cbmlmICghc3B5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC1yZWFjdC1saXRlIHJlcXVpcmVzIG1vYnggYXQgbGVhc3QgdmVyc2lvbiA0IHRvIGJlIGF2YWlsYWJsZVwiKTtcbn1cbiIsImltcG9ydCBcIi4vYXNzZXJ0RW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIGFzIGJhdGNoIH0gZnJvbSBcIi4vdXRpbHMvcmVhY3RCYXRjaGVkVXBkYXRlc1wiO1xuaW1wb3J0IHsgb2JzZXJ2ZXJCYXRjaGluZyB9IGZyb20gXCIuL29ic2VydmVyQmF0Y2hpbmdcIjtcbm9ic2VydmVyQmF0Y2hpbmcoYmF0Y2gpO1xuZXhwb3J0IHsgaXNVc2luZ1N0YXRpY1JlbmRlcmluZywgdXNlU3RhdGljUmVuZGVyaW5nIH0gZnJvbSBcIi4vc3RhdGljUmVuZGVyaW5nXCI7XG5leHBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCIuL29ic2VydmVyXCI7XG5leHBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gXCIuL3VzZU9ic2VydmVyXCI7XG5leHBvcnQgeyBPYnNlcnZlciB9IGZyb20gXCIuL09ic2VydmVyQ29tcG9uZW50XCI7XG5leHBvcnQgeyB1c2VGb3JjZVVwZGF0ZSB9IGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgeyB1c2VBc09ic2VydmFibGVTb3VyY2UgfSBmcm9tIFwiLi91c2VBc09ic2VydmFibGVTb3VyY2VcIjtcbmV4cG9ydCB7IHVzZUxvY2FsU3RvcmUgfSBmcm9tIFwiLi91c2VMb2NhbFN0b3JlXCI7XG5leHBvcnQgeyB1c2VRdWV1ZWRGb3JjZVVwZGF0ZSwgdXNlUXVldWVkRm9yY2VVcGRhdGVCbG9jayB9IGZyb20gXCIuL3VzZVF1ZXVlZEZvcmNlVXBkYXRlXCI7XG5leHBvcnQgeyBpc09ic2VydmVyQmF0Y2hlZCwgb2JzZXJ2ZXJCYXRjaGluZyB9IGZyb20gXCIuL29ic2VydmVyQmF0Y2hpbmdcIjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc1VzaW5nU3RhdGljUmVuZGVyaW5nIH0gZnJvbSBcIi4vc3RhdGljUmVuZGVyaW5nXCI7XG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gXCIuL3VzZU9ic2VydmVyXCI7XG4vLyBuLmIuIGJhc2UgY2FzZSBpcyBub3QgdXNlZCBmb3IgYWN0dWFsIHR5cGluZ3Mgb3IgZXhwb3J0ZWQgaW4gdGhlIHR5cGluZyBmaWxlc1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVyKGJhc2VDb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgICAvLyBUaGUgd29ya2luZyBvZiBvYnNlcnZlciBpcyBleHBsYWluZWQgc3RlcCBieSBzdGVwIGluIHRoaXMgdGFsazogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1jUEY0aUJlZG9GMCZmZWF0dXJlPXlvdXR1LmJlJnQ9MTMwN1xuICAgIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VDb21wb25lbnQ7XG4gICAgfVxuICAgIHZhciByZWFsT3B0aW9ucyA9IF9fYXNzaWduKHsgZm9yd2FyZFJlZjogZmFsc2UgfSwgb3B0aW9ucyk7XG4gICAgdmFyIGJhc2VDb21wb25lbnROYW1lID0gYmFzZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBiYXNlQ29tcG9uZW50Lm5hbWU7XG4gICAgdmFyIHdyYXBwZWRDb21wb25lbnQgPSBmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gYmFzZUNvbXBvbmVudChwcm9wcywgcmVmKTsgfSwgYmFzZUNvbXBvbmVudE5hbWUpO1xuICAgIH07XG4gICAgd3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGJhc2VDb21wb25lbnROYW1lO1xuICAgIC8vIG1lbW87IHdlIGFyZSBub3QgaW50ZXJlc3RlZCBpbiBkZWVwIHVwZGF0ZXNcbiAgICAvLyBpbiBwcm9wczsgd2UgYXNzdW1lIHRoYXQgaWYgZGVlcCBvYmplY3RzIGFyZSBjaGFuZ2VkLFxuICAgIC8vIHRoaXMgaXMgaW4gb2JzZXJ2YWJsZXMsIHdoaWNoIHdvdWxkIGhhdmUgYmVlbiB0cmFja2VkIGFueXdheVxuICAgIHZhciBtZW1vQ29tcG9uZW50O1xuICAgIGlmIChyZWFsT3B0aW9ucy5mb3J3YXJkUmVmKSB7XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gdXNlIGZvcndhcmRSZWYgaGVyZSBiZWNhdXNlOlxuICAgICAgICAvLyAxLiBpdCBjYW5ub3QgZ28gYmVmb3JlIG1lbW8sIG9ubHkgYWZ0ZXIgaXRcbiAgICAgICAgLy8gMi4gZm9yd2FyZFJlZiBjb252ZXJ0cyB0aGUgZnVuY3Rpb24gaW50byBhbiBhY3R1YWwgY29tcG9uZW50LCBzbyB3ZSBjYW4ndCBsZXQgdGhlIGJhc2VDb21wb25lbnQgZG8gaXRcbiAgICAgICAgLy8gICAgc2luY2UgaXQgd291bGRuJ3QgYmUgYSBjYWxsYWJsZSBmdW5jdGlvbiBhbnltb3JlXG4gICAgICAgIG1lbW9Db21wb25lbnQgPSBtZW1vKGZvcndhcmRSZWYod3JhcHBlZENvbXBvbmVudCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWVtb0NvbXBvbmVudCA9IG1lbW8od3JhcHBlZENvbXBvbmVudCk7XG4gICAgfVxuICAgIGNvcHlTdGF0aWNQcm9wZXJ0aWVzKGJhc2VDb21wb25lbnQsIG1lbW9Db21wb25lbnQpO1xuICAgIG1lbW9Db21wb25lbnQuZGlzcGxheU5hbWUgPSBiYXNlQ29tcG9uZW50TmFtZTtcbiAgICByZXR1cm4gbWVtb0NvbXBvbmVudDtcbn1cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmlkZ3dheS9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ibG9iL21hc3Rlci9zcmMvaW5kZXguanNcbnZhciBob2lzdEJsYWNrTGlzdCA9IHtcbiAgICAkJHR5cGVvZjogdHJ1ZSxcbiAgICByZW5kZXI6IHRydWUsXG4gICAgY29tcGFyZTogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuZnVuY3Rpb24gY29weVN0YXRpY1Byb3BlcnRpZXMoYmFzZSwgdGFyZ2V0KSB7XG4gICAgT2JqZWN0LmtleXMoYmFzZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaG9pc3RCbGFja0xpc3Rba2V5XSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIGtleSkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBjb25maWd1cmUgfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHsgZ2V0R2xvYmFsLCBnZXRTeW1ib2wgfSBmcm9tIFwiLi91dGlsc1wiO1xudmFyIG9ic2VydmVyQmF0Y2hpbmdDb25maWd1cmVkU3ltYm9sID0gZ2V0U3ltYm9sKFwib2JzZXJ2ZXJCYXRjaGluZ1wiKTtcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0Tm9vcEJhdGNoKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlckJhdGNoaW5nKHJlYWN0aW9uU2NoZWR1bGVyKSB7XG4gICAgaWYgKCFyZWFjdGlvblNjaGVkdWxlcikge1xuICAgICAgICByZWFjdGlvblNjaGVkdWxlciA9IGRlZmF1bHROb29wQmF0Y2g7XG4gICAgICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltNb2JYXSBGYWlsZWQgdG8gZ2V0IHVuc3RhYmxlX2JhdGNoZWQgdXBkYXRlcyBmcm9tIHJlYWN0LWRvbSAvIHJlYWN0LW5hdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25maWd1cmUoeyByZWFjdGlvblNjaGVkdWxlcjogcmVhY3Rpb25TY2hlZHVsZXIgfSk7XG4gICAgZ2V0R2xvYmFsKClbb2JzZXJ2ZXJCYXRjaGluZ0NvbmZpZ3VyZWRTeW1ib2xdID0gdHJ1ZTtcbn1cbmV4cG9ydCB2YXIgaXNPYnNlcnZlckJhdGNoZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAhIWdldEdsb2JhbCgpW29ic2VydmVyQmF0Y2hpbmdDb25maWd1cmVkU3ltYm9sXTsgfTtcbiIsImltcG9ydCB7IGdldERlcGVuZGVuY3lUcmVlIH0gZnJvbSBcIm1vYnhcIjtcbmV4cG9ydCBmdW5jdGlvbiBwcmludERlYnVnVmFsdWUodikge1xuICAgIHJldHVybiBnZXREZXBlbmRlbmN5VHJlZSh2KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFja2luZ0RhdGEocmVhY3Rpb24pIHtcbiAgICB2YXIgdHJhY2tpbmdEYXRhID0ge1xuICAgICAgICBjbGVhbkF0OiBEYXRlLm5vdygpICsgQ0xFQU5VUF9MRUFLRURfUkVBQ1RJT05TX0FGVEVSX01JTExJUyxcbiAgICAgICAgcmVhY3Rpb246IHJlYWN0aW9uXG4gICAgfTtcbiAgICByZXR1cm4gdHJhY2tpbmdEYXRhO1xufVxuLyoqXG4gKiBUaGUgbWluaW11bSB0aW1lIGJlZm9yZSB3ZSdsbCBjbGVhbiB1cCBhIFJlYWN0aW9uIGNyZWF0ZWQgaW4gYSByZW5kZXJcbiAqIGZvciBhIGNvbXBvbmVudCB0aGF0IGhhc24ndCBtYW5hZ2VkIHRvIHJ1biBpdHMgZWZmZWN0cy4gVGhpcyBuZWVkcyB0b1xuICogYmUgYmlnIGVub3VnaCB0byBlbnN1cmUgdGhhdCBhIGNvbXBvbmVudCB3b24ndCB0dXJuIHVwIGFuZCBoYXZlIGl0c1xuICogZWZmZWN0cyBydW4gd2l0aG91dCBiZWluZyByZS1yZW5kZXJlZC5cbiAqL1xuZXhwb3J0IHZhciBDTEVBTlVQX0xFQUtFRF9SRUFDVElPTlNfQUZURVJfTUlMTElTID0gMTAwMDA7XG4vKipcbiAqIFRoZSBmcmVxdWVuY3kgd2l0aCB3aGljaCB3ZSdsbCBjaGVjayBmb3IgbGVha2VkIHJlYWN0aW9ucy5cbiAqL1xuZXhwb3J0IHZhciBDTEVBTlVQX1RJTUVSX0xPT1BfTUlMTElTID0gMTAwMDA7XG4vKipcbiAqIFJlYWN0aW9ucyBjcmVhdGVkIGJ5IGNvbXBvbmVudHMgdGhhdCBoYXZlIHlldCB0byBiZSBmdWxseSBtb3VudGVkLlxuICovXG52YXIgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMgPSBuZXcgU2V0KCk7XG4vKipcbiAqIExhdGVzdCAndW5jb21taXR0ZWQgcmVhY3Rpb25zJyBjbGVhbnVwIHRpbWVyIGhhbmRsZS5cbiAqL1xudmFyIHJlYWN0aW9uQ2xlYW51cEhhbmRsZTtcbmZ1bmN0aW9uIGVuc3VyZUNsZWFudXBUaW1lclJ1bm5pbmcoKSB7XG4gICAgaWYgKHJlYWN0aW9uQ2xlYW51cEhhbmRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlYWN0aW9uQ2xlYW51cEhhbmRsZSA9IHNldFRpbWVvdXQoY2xlYW5VbmNvbW1pdHRlZFJlYWN0aW9ucywgQ0xFQU5VUF9USU1FUl9MT09QX01JTExJUyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlQ2xlYW51cE9mUmVhY3Rpb25JZkxlYWtlZChyZWYpIHtcbiAgICB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcy5hZGQocmVmKTtcbiAgICBlbnN1cmVDbGVhbnVwVGltZXJSdW5uaW5nKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkUmVhY3Rpb25Bc0NvbW1pdHRlZChyZWFjdGlvblJlZikge1xuICAgIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLmRlbGV0ZShyZWFjdGlvblJlZik7XG59XG4vKipcbiAqIFJ1biBieSB0aGUgY2xlYW51cCB0aW1lciB0byBkaXNwb3NlIGFueSBvdXRzdGFuZGluZyByZWFjdGlvbnNcbiAqL1xuZnVuY3Rpb24gY2xlYW5VbmNvbW1pdHRlZFJlYWN0aW9ucygpIHtcbiAgICByZWFjdGlvbkNsZWFudXBIYW5kbGUgPSB1bmRlZmluZWQ7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgY2FuZGlkYXRlIGxlYWtlZCByZWFjdGlvbnM7IHRob3NlIG9sZGVyXG4gICAgLy8gdGhhbiBDTEVBTlVQX0xFQUtFRF9SRUFDVElPTlNfQUZURVJfTUlMTElTIGdldCB0aWRpZWQuXG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHZhciB0cmFja2luZyA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAodHJhY2tpbmcpIHtcbiAgICAgICAgICAgIGlmIChub3cgPj0gdHJhY2tpbmcuY2xlYW5BdCkge1xuICAgICAgICAgICAgICAgIC8vIEl0J3MgdGltZSB0byB0aWR5IHVwIHRoaXMgbGVha2VkIHJlYWN0aW9uLlxuICAgICAgICAgICAgICAgIHRyYWNraW5nLnJlYWN0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuZGVsZXRlKHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodW5jb21taXR0ZWRSZWFjdGlvblJlZnMuc2l6ZSA+IDApIHtcbiAgICAgICAgLy8gV2UndmUganVzdCBmaW5pc2hlZCBhIHJvdW5kIG9mIGNsZWFudXBzIGJ1dCB0aGVyZSBhcmUgc3RpbGxcbiAgICAgICAgLy8gc29tZSBsZWFrIGNhbmRpZGF0ZXMgb3V0c3RhbmRpbmcuXG4gICAgICAgIGVuc3VyZUNsZWFudXBUaW1lclJ1bm5pbmcoKTtcbiAgICB9XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuLyoqXG4gKiBPbmx5IHRvIGJlIHVzZWQgYnkgdGVzdCBmdW5jdGlvbnM7IGRvIG5vdCBleHBvcnQgb3V0c2lkZSBvZiBtb2J4LXJlYWN0LWxpdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcmNlQ2xlYW51cFRpbWVyVG9SdW5Ob3dGb3JUZXN0cygpIHtcbiAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBjb250cm9sIHRoZSBleGVjdXRpb24gb2YgdGhlIGNsZWFudXAgdGltZXJcbiAgICAvLyB0byBmb3JjZSBpdCB0byBydW4gYXQgYXdrd2FyZCB0aW1lcyBpbiB1bml0IHRlc3RzLlxuICAgIGlmIChyZWFjdGlvbkNsZWFudXBIYW5kbGUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlYWN0aW9uQ2xlYW51cEhhbmRsZSk7XG4gICAgICAgIGNsZWFuVW5jb21taXR0ZWRSZWFjdGlvbnMoKTtcbiAgICB9XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q2xlYW51cFNjaGVkdWxlRm9yVGVzdHMoKSB7XG4gICAgaWYgKHJlYWN0aW9uQ2xlYW51cEhhbmRsZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQocmVhY3Rpb25DbGVhbnVwSGFuZGxlKTtcbiAgICAgICAgcmVhY3Rpb25DbGVhbnVwSGFuZGxlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcy5jbGVhcigpO1xufVxuIiwidmFyIGdsb2JhbElzVXNpbmdTdGF0aWNSZW5kZXJpbmcgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0aWNSZW5kZXJpbmcoZW5hYmxlKSB7XG4gICAgZ2xvYmFsSXNVc2luZ1N0YXRpY1JlbmRlcmluZyA9IGVuYWJsZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkge1xuICAgIHJldHVybiBnbG9iYWxJc1VzaW5nU3RhdGljUmVuZGVyaW5nO1xufVxuIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXNPYnNlcnZhYmxlU291cmNlSW50ZXJuYWwoY3VycmVudCwgdXNlZEJ5TG9jYWxTdG9yZSkge1xuICAgIHZhciBjdWxwcml0ID0gdXNlZEJ5TG9jYWxTdG9yZSA/IFwidXNlTG9jYWxTdG9yZVwiIDogXCJ1c2VBc09ic2VydmFibGVTb3VyY2VcIjtcbiAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIHVzZWRCeUxvY2FsU3RvcmUpIHtcbiAgICAgICAgdmFyIF9hID0gX19yZWFkKFJlYWN0LnVzZVN0YXRlKGN1cnJlbnQpLCAxKSwgaW5pdGlhbFNvdXJjZSA9IF9hWzBdO1xuICAgICAgICBpZiAoKGluaXRpYWxTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50ID09PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAoaW5pdGlhbFNvdXJjZSA9PT0gdW5kZWZpbmVkICYmIGN1cnJlbnQgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1ha2Ugc3VyZSB5b3UgbmV2ZXIgcGFzcyBgdW5kZWZpbmVkYCB0byBcIiArIGN1bHByaXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh1c2VkQnlMb2NhbFN0b3JlICYmIGN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmICFpc1BsYWluT2JqZWN0KGN1cnJlbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihjdWxwcml0ICsgXCIgZXhwZWN0cyBhIHBsYWluIG9iamVjdCBhcyBcIiArICh1c2VkQnlMb2NhbFN0b3JlID8gXCJzZWNvbmRcIiA6IFwiZmlyc3RcIikgKyBcIiBhcmd1bWVudFwiKTtcbiAgICB9XG4gICAgdmFyIF9iID0gX19yZWFkKFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ic2VydmFibGUoY3VycmVudCwge30sIHsgZGVlcDogZmFsc2UgfSk7IH0pLCAxKSwgcmVzID0gX2JbMF07XG4gICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJlxuICAgICAgICBPYmplY3Qua2V5cyhyZXMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoY3VycmVudCkubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInRoZSBzaGFwZSBvZiBvYmplY3RzIHBhc3NlZCB0byBcIiArIGN1bHByaXQgKyBcIiBzaG91bGQgYmUgc3RhYmxlXCIpO1xuICAgIH1cbiAgICBydW5JbkFjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVzLCBjdXJyZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzT2JzZXJ2YWJsZVNvdXJjZShjdXJyZW50KSB7XG4gICAgcmV0dXJuIHVzZUFzT2JzZXJ2YWJsZVNvdXJjZUludGVybmFsKGN1cnJlbnQsIGZhbHNlKTtcbn1cbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uLCB0cmFuc2FjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBc09ic2VydmFibGVTb3VyY2VJbnRlcm5hbCB9IGZyb20gXCIuL3VzZUFzT2JzZXJ2YWJsZVNvdXJjZVwiO1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yZShpbml0aWFsaXplciwgY3VycmVudCkge1xuICAgIHZhciBzb3VyY2UgPSB1c2VBc09ic2VydmFibGVTb3VyY2VJbnRlcm5hbChjdXJyZW50LCB0cnVlKTtcbiAgICByZXR1cm4gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbG9jYWwgPSBvYnNlcnZhYmxlKGluaXRpYWxpemVyKHNvdXJjZSkpO1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChsb2NhbCkpIHtcbiAgICAgICAgICAgIHJ1bkluQWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsb2NhbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGxvY2FsW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBObyBpZGVhIHdoeSB0czI1MzYgaXMgcG9wcGluZyBvdXQgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxba2V5XSA9IHdyYXBJblRyYW5zYWN0aW9uKHZhbHVlLCBsb2NhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbDtcbiAgICB9KVswXTtcbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXG5mdW5jdGlvbiB3cmFwSW5UcmFuc2FjdGlvbihmbiwgY29udGV4dCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpOyB9KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgUmVhY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJpbnREZWJ1Z1ZhbHVlIH0gZnJvbSBcIi4vcHJpbnREZWJ1Z1ZhbHVlXCI7XG5pbXBvcnQgeyBjcmVhdGVUcmFja2luZ0RhdGEsIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQsIHNjaGVkdWxlQ2xlYW51cE9mUmVhY3Rpb25JZkxlYWtlZCB9IGZyb20gXCIuL3JlYWN0aW9uQ2xlYW51cFRyYWNraW5nXCI7XG5pbXBvcnQgeyBpc1VzaW5nU3RhdGljUmVuZGVyaW5nIH0gZnJvbSBcIi4vc3RhdGljUmVuZGVyaW5nXCI7XG5pbXBvcnQgeyB1c2VGb3JjZVVwZGF0ZSB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VRdWV1ZWRGb3JjZVVwZGF0ZSwgdXNlUXVldWVkRm9yY2VVcGRhdGVCbG9jayB9IGZyb20gXCIuL3VzZVF1ZXVlZEZvcmNlVXBkYXRlXCI7XG52YXIgRU1QVFlfT0JKRUNUID0ge307XG5mdW5jdGlvbiBvYnNlcnZlckNvbXBvbmVudE5hbWVGb3IoYmFzZUNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gXCJvYnNlcnZlclwiICsgYmFzZUNvbXBvbmVudE5hbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlT2JzZXJ2ZXIoZm4sIGJhc2VDb21wb25lbnROYW1lLCBvcHRpb25zKSB7XG4gICAgaWYgKGJhc2VDb21wb25lbnROYW1lID09PSB2b2lkIDApIHsgYmFzZUNvbXBvbmVudE5hbWUgPSBcIm9ic2VydmVkXCI7IH1cbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBFTVBUWV9PQkpFQ1Q7IH1cbiAgICBpZiAoaXNVc2luZ1N0YXRpY1JlbmRlcmluZygpKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICB2YXIgd2FudGVkRm9yY2VVcGRhdGVIb29rID0gb3B0aW9ucy51c2VGb3JjZVVwZGF0ZSB8fCB1c2VGb3JjZVVwZGF0ZTtcbiAgICB2YXIgZm9yY2VVcGRhdGUgPSB3YW50ZWRGb3JjZVVwZGF0ZUhvb2soKTtcbiAgICB2YXIgcXVldWVkRm9yY2VVcGRhdGUgPSB1c2VRdWV1ZWRGb3JjZVVwZGF0ZShmb3JjZVVwZGF0ZSk7XG4gICAgLy8gU3RyaWN0TW9kZS9Db25jdXJyZW50TW9kZS9TdXNwZW5zZSBtYXkgbWVhbiB0aGF0IG91ciBjb21wb25lbnQgaXNcbiAgICAvLyByZW5kZXJlZCBhbmQgYWJhbmRvbmVkIG11bHRpcGxlIHRpbWVzLCBzbyB3ZSBuZWVkIHRvIHRyYWNrIGxlYWtlZFxuICAgIC8vIFJlYWN0aW9ucy5cbiAgICB2YXIgcmVhY3Rpb25UcmFja2luZ1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBpZiAoIXJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudCkge1xuICAgICAgICAvLyBGaXJzdCByZW5kZXIgZm9yIHRoaXMgY29tcG9uZW50IChvciBmaXJzdCB0aW1lIHNpbmNlIGEgcHJldmlvdXNcbiAgICAgICAgLy8gcmVhY3Rpb24gZnJvbSBhbiBhYmFuZG9uZWQgcmVuZGVyIHdhcyBkaXNwb3NlZCkuXG4gICAgICAgIHZhciBuZXdSZWFjdGlvbl8xID0gbmV3IFJlYWN0aW9uKG9ic2VydmVyQ29tcG9uZW50TmFtZUZvcihiYXNlQ29tcG9uZW50TmFtZSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE9ic2VydmFibGUgaGFzIGNoYW5nZWQsIG1lYW5pbmcgd2Ugd2FudCB0byByZS1yZW5kZXJcbiAgICAgICAgICAgIC8vIEJVVCBpZiB3ZSdyZSBhIGNvbXBvbmVudCB0aGF0IGhhc24ndCB5ZXQgZ290IHRvIHRoZSB1c2VFZmZlY3QoKVxuICAgICAgICAgICAgLy8gc3RhZ2UsIHdlIG1pZ2h0IGJlIGEgY29tcG9uZW50IHRoYXQgX3N0YXJ0ZWRfIHRvIHJlbmRlciwgYnV0XG4gICAgICAgICAgICAvLyBnb3QgZHJvcHBlZCwgYW5kIHdlIGRvbid0IHdhbnQgdG8gbWFrZSBzdGF0ZSBjaGFuZ2VzIHRoZW4uXG4gICAgICAgICAgICAvLyAoSXQgdHJpZ2dlcnMgd2FybmluZ3MgaW4gU3RyaWN0TW9kZSwgZm9yIGEgc3RhcnQuKVxuICAgICAgICAgICAgaWYgKHRyYWNraW5nRGF0YV8xLm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHJlYWNoZWQgdXNlRWZmZWN0KCksIHNvIHdlJ3JlIG1vdW50ZWQsIGFuZCBjYW4gdHJpZ2dlciBhbiB1cGRhdGVcbiAgICAgICAgICAgICAgICBxdWV1ZWRGb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZW4ndCB5ZXQgcmVhY2hlZCB1c2VFZmZlY3QoKSwgc28gd2UnbGwgbmVlZCB0byB0cmlnZ2VyIGEgcmUtcmVuZGVyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiAoYW5kIGlmKSB1c2VFZmZlY3QoKSBhcnJpdmVzLiAgVGhlIGVhc2llc3Qgd2F5IHRvIGRvIHRoYXQgaXMganVzdCB0b1xuICAgICAgICAgICAgICAgIC8vIGRyb3Agb3VyIGN1cnJlbnQgcmVhY3Rpb24gYW5kIGFsbG93IHVzZUVmZmVjdCgpIHRvIHJlY3JlYXRlIGl0LlxuICAgICAgICAgICAgICAgIG5ld1JlYWN0aW9uXzEuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdHJhY2tpbmdEYXRhXzEgPSBjcmVhdGVUcmFja2luZ0RhdGEobmV3UmVhY3Rpb25fMSk7XG4gICAgICAgIHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudCA9IHRyYWNraW5nRGF0YV8xO1xuICAgICAgICBzY2hlZHVsZUNsZWFudXBPZlJlYWN0aW9uSWZMZWFrZWQocmVhY3Rpb25UcmFja2luZ1JlZik7XG4gICAgfVxuICAgIHZhciByZWFjdGlvbiA9IHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudC5yZWFjdGlvbjtcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHJlYWN0aW9uLCBwcmludERlYnVnVmFsdWUpO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENhbGxlZCBvbiBmaXJzdCBtb3VudCBvbmx5XG4gICAgICAgIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQocmVhY3Rpb25UcmFja2luZ1JlZik7XG4gICAgICAgIGlmIChyZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIEdyZWF0LiBXZSd2ZSBhbHJlYWR5IGdvdCBvdXIgcmVhY3Rpb24gZnJvbSBvdXIgcmVuZGVyO1xuICAgICAgICAgICAgLy8gYWxsIHdlIG5lZWQgdG8gZG8gaXMgdG8gcmVjb3JkIHRoYXQgaXQncyBub3cgbW91bnRlZCxcbiAgICAgICAgICAgIC8vIHRvIGFsbG93IGZ1dHVyZSBvYnNlcnZhYmxlIGNoYW5nZXMgdG8gdHJpZ2dlciByZS1yZW5kZXJzXG4gICAgICAgICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQubW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGUgcmVhY3Rpb24gd2Ugc2V0IHVwIGluIG91ciByZW5kZXIgaGFzIGJlZW4gZGlzcG9zZWQuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGVpdGhlciBkdWUgdG8gYmFkIHRpbWluZ3Mgb2YgcmVuZGVyaW5ncywgZS5nLiBvdXJcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudCB3YXMgcGF1c2VkIGZvciBhIF92ZXJ5XyBsb25nIHRpbWUsIGFuZCBvdXJcbiAgICAgICAgICAgIC8vIHJlYWN0aW9uIGdvdCBjbGVhbmVkIHVwLCBvciB3ZSBnb3QgYSBvYnNlcnZhYmxlIGNoYW5nZVxuICAgICAgICAgICAgLy8gYmV0d2VlbiByZW5kZXIgYW5kIHVzZUVmZmVjdFxuICAgICAgICAgICAgLy8gUmUtY3JlYXRlIHRoZSByZWFjdGlvblxuICAgICAgICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgIHJlYWN0aW9uOiBuZXcgUmVhY3Rpb24ob2JzZXJ2ZXJDb21wb25lbnROYW1lRm9yKGJhc2VDb21wb25lbnROYW1lKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSd2ZSBkZWZpbml0ZWx5IGFscmVhZHkgYmVlbiBtb3VudGVkIGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgcXVldWVkRm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjbGVhbkF0OiBJbmZpbml0eVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHF1ZXVlZEZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudC5yZWFjdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICAvLyBkZWxheSBhbGwgZm9yY2UtdXBkYXRlIGNhbGxzIGFmdGVyIHJlbmRlcmluZyBvZiB0aGlzIGNvbXBvbmVudFxuICAgIHJldHVybiB1c2VRdWV1ZWRGb3JjZVVwZGF0ZUJsb2NrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcmVuZGVyIHRoZSBvcmlnaW5hbCBjb21wb25lbnQsIGJ1dCBoYXZlIHRoZVxuICAgICAgICAvLyByZWFjdGlvbiB0cmFjayB0aGUgb2JzZXJ2YWJsZXMsIHNvIHRoYXQgcmVuZGVyaW5nXG4gICAgICAgIC8vIGNhbiBiZSBpbnZhbGlkYXRlZCAoc2VlIGFib3ZlKSBvbmNlIGEgZGVwZW5kZW5jeSBjaGFuZ2VzXG4gICAgICAgIHZhciByZW5kZXJpbmc7XG4gICAgICAgIHZhciBleGNlcHRpb247XG4gICAgICAgIHJlYWN0aW9uLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyaW5nID0gZm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjsgLy8gcmUtdGhyb3cgYW55IGV4Y2VwdGlvbnMgY2F1Z2h0IGR1cmluZyByZW5kZXJpbmdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVuZGVyaW5nO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudmFyIGluc2lkZVJlbmRlciA9IGZhbHNlO1xudmFyIGZvcmNlVXBkYXRlUXVldWUgPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWV1ZWRGb3JjZVVwZGF0ZShmb3JjZVVwZGF0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbnNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlUXVldWUucHVzaChmb3JjZVVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWV1ZWRGb3JjZVVwZGF0ZUJsb2NrKGNhbGxiYWNrKSB7XG4gICAgLy8gc3RhcnQgaW50ZXJjZXB0aW5nIGZvcmNlLXVwZGF0ZSBjYWxsc1xuICAgIGluc2lkZVJlbmRlciA9IHRydWU7XG4gICAgZm9yY2VVcGRhdGVRdWV1ZSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuICAgICAgICAvLyBzdG9wIGludGVyY2VwdGluZyBmb3JjZS11cGRhdGVcbiAgICAgICAgaW5zaWRlUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIC8vIHN0b3JlIHF1ZXVlIG9yIG5vdGhpbmcgaWYgaXQgd2FzIGVtcHR5IHRvIGV4ZWN1dGUgdXNlTGF5b3V0RWZmZWN0IG9ubHkgd2hlbiBuZWNlc3NhcnlcbiAgICAgICAgdmFyIHF1ZXVlXzEgPSBmb3JjZVVwZGF0ZVF1ZXVlLmxlbmd0aCA+IDAgPyBmb3JjZVVwZGF0ZVF1ZXVlIDogdW5kZWZpbmVkO1xuICAgICAgICAvLyBydW4gZm9yY2UtdXBkYXRlIHF1ZXVlIGluIHVzZUxheW91dEVmZmVjdFxuICAgICAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHF1ZXVlXzEpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZV8xLmZvckVhY2goZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgoKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtxdWV1ZV8xXSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICBpbnNpZGVSZW5kZXIgPSBmYWxzZTtcbiAgICB9XG59XG4iLCJ2YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xudmFyIEVNUFRZX0FSUkFZID0gW107XG5leHBvcnQgZnVuY3Rpb24gdXNlVW5tb3VudChmbikge1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBmbjsgfSwgRU1QVFlfQVJSQVkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcmNlVXBkYXRlKCkge1xuICAgIHZhciBfYSA9IF9fcmVhZCh1c2VTdGF0ZSgwKSwgMiksIHNldFRpY2sgPSBfYVsxXTtcbiAgICB2YXIgdXBkYXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaWNrKGZ1bmN0aW9uICh0aWNrKSB7IHJldHVybiB0aWNrICsgMTsgfSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB1cGRhdGU7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICByZXR1cm4gIXByb3RvIHx8IHByb3RvID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbChuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gU3ltYm9sLmZvcihuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiX18kbW9ieC1yZWFjdCBcIiArIG5hbWUgKyBcIl9fXCI7XG59XG52YXIgbW9ja0dsb2JhbCA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuICAgIHJldHVybiBtb2NrR2xvYmFsO1xufVxuIiwiZXhwb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG4iLCJpbXBvcnQgeyBSZWFjdGlvbiwgX2FsbG93U3RhdGVDaGFuZ2VzLCBfYWxsb3dTdGF0ZVJlYWRzU3RhcnQsIF9hbGxvd1N0YXRlUmVhZHNFbmQsICRtb2J4LCBjcmVhdGVBdG9tLCB1bnRyYWNrZWQsIGlzT2JzZXJ2YWJsZU1hcCwgaXNPYnNlcnZhYmxlT2JqZWN0LCBpc09ic2VydmFibGVBcnJheSwgb2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IFB1cmVDb21wb25lbnQsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgbWVtbywgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcsIE9ic2VydmVyLCBvYnNlcnZlciBhcyBvYnNlcnZlciQxIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmV4cG9ydCB7IE9ic2VydmVyLCBpc1VzaW5nU3RhdGljUmVuZGVyaW5nLCBvYnNlcnZlckJhdGNoaW5nLCB1c2VBc09ic2VydmFibGVTb3VyY2UsIHVzZUxvY2FsU3RvcmUsIHVzZU9ic2VydmVyLCB1c2VTdGF0aWNSZW5kZXJpbmcgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuXG52YXIgc3ltYm9sSWQgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVTeW1ib2wobmFtZSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIFN5bWJvbChuYW1lKTtcbiAgfVxuXG4gIHZhciBzeW1ib2wgPSBcIl9fJG1vYngtcmVhY3QgXCIgKyBuYW1lICsgXCIgKFwiICsgc3ltYm9sSWQgKyBcIilcIjtcbiAgc3ltYm9sSWQrKztcbiAgcmV0dXJuIHN5bWJvbDtcbn1cblxudmFyIGNyZWF0ZWRTeW1ib2xzID0ge307XG5mdW5jdGlvbiBuZXdTeW1ib2wobmFtZSkge1xuICBpZiAoIWNyZWF0ZWRTeW1ib2xzW25hbWVdKSB7XG4gICAgY3JlYXRlZFN5bWJvbHNbbmFtZV0gPSBjcmVhdGVTeW1ib2wobmFtZSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlZFN5bWJvbHNbbmFtZV07XG59XG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICAvL0Zyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvYzY5OTA0YTUxMWI5MDAyNjY5MzUxNjgyMjMwNjNkZDg3NzJkZmM0MC9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL3NoYWxsb3dFcXVhbC5qc1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIEZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvYzY5OTA0YTUxMWI5MDAyNjY5MzUxNjgyMjMwNjNkZDg3NzJkZmM0MC9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL3NoYWxsb3dFcXVhbC5qc1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59IC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmlkZ3dheS9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ibG9iL21hc3Rlci9zcmMvaW5kZXguanNcblxuXG52YXIgaG9pc3RCbGFja0xpc3QgPSB7XG4gICQkdHlwZW9mOiAxLFxuICByZW5kZXI6IDEsXG4gIGNvbXBhcmU6IDEsXG4gIHR5cGU6IDEsXG4gIGNoaWxkQ29udGV4dFR5cGVzOiAxLFxuICBjb250ZXh0VHlwZTogMSxcbiAgY29udGV4dFR5cGVzOiAxLFxuICBkZWZhdWx0UHJvcHM6IDEsXG4gIGdldERlZmF1bHRQcm9wczogMSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiAxLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IDEsXG4gIG1peGluczogMSxcbiAgcHJvcFR5cGVzOiAxXG59O1xuZnVuY3Rpb24gY29weVN0YXRpY1Byb3BlcnRpZXMoYmFzZSwgdGFyZ2V0KSB7XG4gIHZhciBwcm90b1Byb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2UpKTtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYmFzZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFob2lzdEJsYWNrTGlzdFtrZXldICYmIHByb3RvUHJvcHMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIGtleSkpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcclxuICogSGVscGVyIHRvIHNldCBgcHJvcGAgdG8gYHRoaXNgIGFzIG5vbi1lbnVtZXJhYmxlIChoaWRkZW4gcHJvcClcclxuICogQHBhcmFtIHRhcmdldFxyXG4gKiBAcGFyYW0gcHJvcFxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICovXG5cbmZ1bmN0aW9uIHNldEhpZGRlblByb3AodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICBpZiAoIU9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcCkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gIH1cbn1cbi8qKlxyXG4gKiBVdGlsaXRpZXMgZm9yIHBhdGNoaW5nIGNvbXBvbmVudFdpbGxVbm1vdW50LCB0byBtYWtlIHN1cmUgQGRpc3Bvc2VPblVubW91bnQgd29ya3MgY29ycmVjdGx5IGljbSB3aXRoIHVzZXIgZGVmaW5lZCBob29rc1xyXG4gKiBhbmQgdGhlIGhhbmRsZXIgcHJvdmlkZWQgYnkgbW9ieC1yZWFjdFxyXG4gKi9cblxudmFyIG1vYnhNaXhpbnMgPVxuLyojX19QVVJFX18qL1xubmV3U3ltYm9sKFwicGF0Y2hNaXhpbnNcIik7XG52YXIgbW9ieFBhdGNoZWREZWZpbml0aW9uID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcInBhdGNoZWREZWZpbml0aW9uXCIpO1xuXG5mdW5jdGlvbiBnZXRNaXhpbnModGFyZ2V0LCBtZXRob2ROYW1lKSB7XG4gIHZhciBtaXhpbnMgPSB0YXJnZXRbbW9ieE1peGluc10gPSB0YXJnZXRbbW9ieE1peGluc10gfHwge307XG4gIHZhciBtZXRob2RNaXhpbnMgPSBtaXhpbnNbbWV0aG9kTmFtZV0gPSBtaXhpbnNbbWV0aG9kTmFtZV0gfHwge307XG4gIG1ldGhvZE1peGlucy5sb2NrcyA9IG1ldGhvZE1peGlucy5sb2NrcyB8fCAwO1xuICBtZXRob2RNaXhpbnMubWV0aG9kcyA9IG1ldGhvZE1peGlucy5tZXRob2RzIHx8IFtdO1xuICByZXR1cm4gbWV0aG9kTWl4aW5zO1xufVxuXG5mdW5jdGlvbiB3cmFwcGVyKHJlYWxNZXRob2QsIG1peGlucykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIC8vIGxvY2tzIGFyZSB1c2VkIHRvIGVuc3VyZSB0aGF0IG1peGlucyBhcmUgaW52b2tlZCBvbmx5IG9uY2UgcGVyIGludm9jYXRpb24sIGV2ZW4gb24gcmVjdXJzaXZlIGNhbGxzXG4gIG1peGlucy5sb2NrcysrO1xuXG4gIHRyeSB7XG4gICAgdmFyIHJldFZhbDtcblxuICAgIGlmIChyZWFsTWV0aG9kICE9PSB1bmRlZmluZWQgJiYgcmVhbE1ldGhvZCAhPT0gbnVsbCkge1xuICAgICAgcmV0VmFsID0gcmVhbE1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0VmFsO1xuICB9IGZpbmFsbHkge1xuICAgIG1peGlucy5sb2Nrcy0tO1xuXG4gICAgaWYgKG1peGlucy5sb2NrcyA9PT0gMCkge1xuICAgICAgbWl4aW5zLm1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobXgpIHtcbiAgICAgICAgbXguYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHdyYXBGdW5jdGlvbihyZWFsTWV0aG9kLCBtaXhpbnMpIHtcbiAgdmFyIGZuID0gZnVuY3Rpb24gZm4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgd3JhcHBlci5jYWxsLmFwcGx5KHdyYXBwZXIsIFt0aGlzLCByZWFsTWV0aG9kLCBtaXhpbnNdLmNvbmNhdChhcmdzKSk7XG4gIH07XG5cbiAgcmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBwYXRjaCh0YXJnZXQsIG1ldGhvZE5hbWUsIG1peGluTWV0aG9kKSB7XG4gIHZhciBtaXhpbnMgPSBnZXRNaXhpbnModGFyZ2V0LCBtZXRob2ROYW1lKTtcblxuICBpZiAobWl4aW5zLm1ldGhvZHMuaW5kZXhPZihtaXhpbk1ldGhvZCkgPCAwKSB7XG4gICAgbWl4aW5zLm1ldGhvZHMucHVzaChtaXhpbk1ldGhvZCk7XG4gIH1cblxuICB2YXIgb2xkRGVmaW5pdGlvbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBtZXRob2ROYW1lKTtcblxuICBpZiAob2xkRGVmaW5pdGlvbiAmJiBvbGREZWZpbml0aW9uW21vYnhQYXRjaGVkRGVmaW5pdGlvbl0pIHtcbiAgICAvLyBhbHJlYWR5IHBhdGNoZWQgZGVmaW5pdGlvbiwgZG8gbm90IHJlcGF0Y2hcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgb3JpZ2luYWxNZXRob2QgPSB0YXJnZXRbbWV0aG9kTmFtZV07XG4gIHZhciBuZXdEZWZpbml0aW9uID0gY3JlYXRlRGVmaW5pdGlvbih0YXJnZXQsIG1ldGhvZE5hbWUsIG9sZERlZmluaXRpb24gPyBvbGREZWZpbml0aW9uLmVudW1lcmFibGUgOiB1bmRlZmluZWQsIG1peGlucywgb3JpZ2luYWxNZXRob2QpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBtZXRob2ROYW1lLCBuZXdEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVmaW5pdGlvbih0YXJnZXQsIG1ldGhvZE5hbWUsIGVudW1lcmFibGUsIG1peGlucywgb3JpZ2luYWxNZXRob2QpIHtcbiAgdmFyIF9yZWY7XG5cbiAgdmFyIHdyYXBwZWRGdW5jID0gd3JhcEZ1bmN0aW9uKG9yaWdpbmFsTWV0aG9kLCBtaXhpbnMpO1xuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW21vYnhQYXRjaGVkRGVmaW5pdGlvbl0gPSB0cnVlLCBfcmVmLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gd3JhcHBlZEZ1bmM7XG4gIH0sIF9yZWYuc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgaWYgKHRoaXMgPT09IHRhcmdldCkge1xuICAgICAgd3JhcHBlZEZ1bmMgPSB3cmFwRnVuY3Rpb24odmFsdWUsIG1peGlucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdoZW4gaXQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHByb3RvdHlwZS9hIGNoaWxkIHByb3RvdHlwZSBwYXRjaCB0aGF0IHBhcnRpY3VsYXIgY2FzZSBhZ2FpbiBzZXBhcmF0ZWx5XG4gICAgICAvLyBzaW5jZSB3ZSBuZWVkIHRvIHN0b3JlIHNlcGFyYXRlIHZhbHVlcyBkZXBlbmRpbmcgb24gd2V0aGVyIGl0IGlzIHRoZSBhY3R1YWwgaW5zdGFuY2UsIHRoZSBwcm90b3R5cGUsIGV0Y1xuICAgICAgLy8gZS5nLiB0aGUgbWV0aG9kIGZvciBzdXBlciBtaWdodCBub3QgYmUgdGhlIHNhbWUgYXMgdGhlIG1ldGhvZCBmb3IgdGhlIHByb3RvdHlwZSB3aGljaCBtaWdodCBiZSBub3QgdGhlIHNhbWVcbiAgICAgIC8vIGFzIHRoZSBtZXRob2QgZm9yIHRoZSBpbnN0YW5jZVxuICAgICAgdmFyIG5ld0RlZmluaXRpb24gPSBjcmVhdGVEZWZpbml0aW9uKHRoaXMsIG1ldGhvZE5hbWUsIGVudW1lcmFibGUsIG1peGlucywgdmFsdWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG1ldGhvZE5hbWUsIG5ld0RlZmluaXRpb24pO1xuICAgIH1cbiAgfSwgX3JlZi5jb25maWd1cmFibGUgPSB0cnVlLCBfcmVmLmVudW1lcmFibGUgPSBlbnVtZXJhYmxlLCBfcmVmO1xufVxuXG52YXIgbW9ieEFkbWluUHJvcGVydHkgPSAkbW9ieCB8fCBcIiRtb2J4XCI7XG52YXIgbW9ieE9ic2VydmVyUHJvcGVydHkgPVxuLyojX19QVVJFX18qL1xubmV3U3ltYm9sKFwiaXNNb2JYUmVhY3RPYnNlcnZlclwiKTtcbnZhciBtb2J4SXNVbm1vdW50ZWQgPVxuLyojX19QVVJFX18qL1xubmV3U3ltYm9sKFwiaXNVbm1vdW50ZWRcIik7XG52YXIgc2tpcFJlbmRlcktleSA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJza2lwUmVuZGVyXCIpO1xudmFyIGlzRm9yY2luZ1VwZGF0ZUtleSA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJpc0ZvcmNpbmdVcGRhdGVcIik7XG5mdW5jdGlvbiBtYWtlQ2xhc3NDb21wb25lbnRPYnNlcnZlcihjb21wb25lbnRDbGFzcykge1xuICB2YXIgdGFyZ2V0ID0gY29tcG9uZW50Q2xhc3MucHJvdG90eXBlO1xuXG4gIGlmIChjb21wb25lbnRDbGFzc1ttb2J4T2JzZXJ2ZXJQcm9wZXJ0eV0pIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh0YXJnZXQpO1xuICAgIGNvbnNvbGUud2FybihcIlRoZSBwcm92aWRlZCBjb21wb25lbnQgY2xhc3MgKFwiICsgZGlzcGxheU5hbWUgKyBcIikgXFxuICAgICAgICAgICAgICAgIGhhcyBhbHJlYWR5IGJlZW4gZGVjbGFyZWQgYXMgYW4gb2JzZXJ2ZXIgY29tcG9uZW50LlwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb21wb25lbnRDbGFzc1ttb2J4T2JzZXJ2ZXJQcm9wZXJ0eV0gPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRhcmdldC5jb21wb25lbnRXaWxsUmVhY3QpIHRocm93IG5ldyBFcnJvcihcIlRoZSBjb21wb25lbnRXaWxsUmVhY3QgbGlmZS1jeWNsZSBldmVudCBpcyBubyBsb25nZXIgc3VwcG9ydGVkXCIpO1xuXG4gIGlmIChjb21wb25lbnRDbGFzc1tcIl9fcHJvdG9fX1wiXSAhPT0gUHVyZUNvbXBvbmVudCkge1xuICAgIGlmICghdGFyZ2V0LnNob3VsZENvbXBvbmVudFVwZGF0ZSkgdGFyZ2V0LnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IG9ic2VydmVyU0NVO2Vsc2UgaWYgKHRhcmdldC5zaG91bGRDb21wb25lbnRVcGRhdGUgIT09IG9ic2VydmVyU0NVKSAvLyBuLmIuIHVuZXF1YWwgY2hlY2ssIGluc3RlYWQgb2YgZXhpc3RlbmNlIGNoZWNrLCBhcyBAb2JzZXJ2ZXIgbWlnaHQgYmUgb24gc3VwZXJjbGFzcyBhcyB3ZWxsXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJdCBpcyBub3QgYWxsb3dlZCB0byB1c2Ugc2hvdWxkQ29tcG9uZW50VXBkYXRlIGluIG9ic2VydmVyIGJhc2VkIGNvbXBvbmVudHMuXCIpO1xuICB9IC8vIHRoaXMucHJvcHMgYW5kIHRoaXMuc3RhdGUgYXJlIG1hZGUgb2JzZXJ2YWJsZSwganVzdCB0byBtYWtlIHN1cmUgQGNvbXB1dGVkIGZpZWxkcyB0aGF0XG4gIC8vIGFyZSBkZWZpbmVkIGluc2lkZSB0aGUgY29tcG9uZW50LCBhbmQgd2hpY2ggcmVseSBvbiBzdGF0ZSBvciBwcm9wcywgcmUtY29tcHV0ZSBpZiBzdGF0ZSBvciBwcm9wcyBjaGFuZ2VcbiAgLy8gKG90aGVyd2lzZSB0aGUgY29tcHV0ZWQgd291bGRuJ3QgdXBkYXRlIGFuZCBiZWNvbWUgc3RhbGUgb24gcHJvcHMgY2hhbmdlLCBzaW5jZSBwcm9wcyBhcmUgbm90IG9ic2VydmFibGUpXG4gIC8vIEhvd2V2ZXIsIHRoaXMgc29sdXRpb24gaXMgbm90IHdpdGhvdXQgaXQncyBvd24gcHJvYmxlbXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC1yZWFjdC9pc3N1ZXM/dXRmOD0lRTIlOUMlOTMmcT1pcyUzQWlzc3VlK2xhYmVsJTNBb2JzZXJ2YWJsZS1wcm9wcy1vci1ub3QrXG5cblxuICBtYWtlT2JzZXJ2YWJsZVByb3AodGFyZ2V0LCBcInByb3BzXCIpO1xuICBtYWtlT2JzZXJ2YWJsZVByb3AodGFyZ2V0LCBcInN0YXRlXCIpO1xuICB2YXIgYmFzZVJlbmRlciA9IHRhcmdldC5yZW5kZXI7XG5cbiAgdGFyZ2V0LnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbWFrZUNvbXBvbmVudFJlYWN0aXZlLmNhbGwodGhpcywgYmFzZVJlbmRlcik7XG4gIH07XG5cbiAgcGF0Y2godGFyZ2V0LCBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMkcmVuZGVyJG1vYnhBZG1pO1xuXG4gICAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgIChfdGhpcyRyZW5kZXIkbW9ieEFkbWkgPSB0aGlzLnJlbmRlclttb2J4QWRtaW5Qcm9wZXJ0eV0pID09PSBudWxsIHx8IF90aGlzJHJlbmRlciRtb2J4QWRtaSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcmVuZGVyJG1vYnhBZG1pLmRpc3Bvc2UoKTtcbiAgICB0aGlzW21vYnhJc1VubW91bnRlZF0gPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLnJlbmRlclttb2J4QWRtaW5Qcm9wZXJ0eV0pIHtcbiAgICAgIC8vIFJlbmRlciBtYXkgaGF2ZSBiZWVuIGhvdC1zd2FwcGVkIGFuZC9vciBvdmVycmlkZW4gYnkgYSBzdWJjbGFzcy5cbiAgICAgIHZhciBfZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh0aGlzKTtcblxuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHJlYWN0aXZlIHJlbmRlciBvZiBhbiBvYnNlcnZlciBjbGFzcyBjb21wb25lbnQgKFwiICsgX2Rpc3BsYXlOYW1lICsgXCIpIFxcbiAgICAgICAgICAgICAgICB3YXMgb3ZlcnJpZGVuIGFmdGVyIE1vYlggYXR0YWNoZWQuIFRoaXMgbWF5IHJlc3VsdCBpbiBhIG1lbW9yeSBsZWFrIGlmIHRoZSBcXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVuIHJlYWN0aXZlIHJlbmRlciB3YXMgbm90IHByb3Blcmx5IGRpc3Bvc2VkLlwiKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY29tcG9uZW50Q2xhc3M7XG59IC8vIEdlbmVyYXRlcyBhIGZyaWVuZGx5IG5hbWUgZm9yIGRlYnVnZ2luZ1xuXG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShjb21wKSB7XG4gIHJldHVybiBjb21wLmRpc3BsYXlOYW1lIHx8IGNvbXAubmFtZSB8fCBjb21wLmNvbnN0cnVjdG9yICYmIChjb21wLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IGNvbXAuY29uc3RydWN0b3IubmFtZSkgfHwgXCI8Y29tcG9uZW50PlwiO1xufVxuXG5mdW5jdGlvbiBtYWtlQ29tcG9uZW50UmVhY3RpdmUocmVuZGVyKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSA9PT0gdHJ1ZSkgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMpO1xuICAvKipcclxuICAgKiBJZiBwcm9wcyBhcmUgc2hhbGxvd2x5IG1vZGlmaWVkLCByZWFjdCB3aWxsIHJlbmRlciBhbnl3YXksXHJcbiAgICogc28gYXRvbS5yZXBvcnRDaGFuZ2VkKCkgc2hvdWxkIG5vdCByZXN1bHQgaW4geWV0IGFub3RoZXIgcmUtcmVuZGVyXHJcbiAgICovXG5cbiAgc2V0SGlkZGVuUHJvcCh0aGlzLCBza2lwUmVuZGVyS2V5LCBmYWxzZSk7XG4gIC8qKlxyXG4gICAqIGZvcmNlVXBkYXRlIHdpbGwgcmUtYXNzaWduIHRoaXMucHJvcHMuIFdlIGRvbid0IHdhbnQgdGhhdCB0byBjYXVzZSBhIGxvb3AsXHJcbiAgICogc28gZGV0ZWN0IHRoZXNlIGNoYW5nZXNcclxuICAgKi9cblxuICBzZXRIaWRkZW5Qcm9wKHRoaXMsIGlzRm9yY2luZ1VwZGF0ZUtleSwgZmFsc2UpO1xuICB2YXIgaW5pdGlhbE5hbWUgPSBnZXREaXNwbGF5TmFtZSh0aGlzKTtcbiAgdmFyIGJhc2VSZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgdmFyIGlzUmVuZGVyaW5nUGVuZGluZyA9IGZhbHNlO1xuICB2YXIgcmVhY3Rpb24gPSBuZXcgUmVhY3Rpb24oaW5pdGlhbE5hbWUgKyBcIi5yZW5kZXIoKVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc1JlbmRlcmluZ1BlbmRpbmcpIHtcbiAgICAgIC8vIE4uQi4gR2V0dGluZyBoZXJlICpiZWZvcmUgbW91bnRpbmcqIG1lYW5zIHRoYXQgYSBjb21wb25lbnQgY29uc3RydWN0b3IgaGFzIHNpZGUgZWZmZWN0cyAoc2VlIHRoZSByZWxldmFudCB0ZXN0IGluIG1pc2MuanMpXG4gICAgICAvLyBUaGlzIHVuaWRpb21hdGljIFJlYWN0IHVzYWdlIGJ1dCBSZWFjdCB3aWxsIGNvcnJlY3RseSB3YXJuIGFib3V0IHRoaXMgc28gd2UgY29udGludWUgYXMgdXN1YWxcbiAgICAgIC8vIFNlZSAjODUgLyBQdWxsICM0NFxuICAgICAgaXNSZW5kZXJpbmdQZW5kaW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKF90aGlzW21vYnhJc1VubW91bnRlZF0gIT09IHRydWUpIHtcbiAgICAgICAgdmFyIGhhc0Vycm9yID0gdHJ1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHNldEhpZGRlblByb3AoX3RoaXMsIGlzRm9yY2luZ1VwZGF0ZUtleSwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKCFfdGhpc1tza2lwUmVuZGVyS2V5XSkgQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZS5jYWxsKF90aGlzKTtcbiAgICAgICAgICBoYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHNldEhpZGRlblByb3AoX3RoaXMsIGlzRm9yY2luZ1VwZGF0ZUtleSwgZmFsc2UpO1xuICAgICAgICAgIGlmIChoYXNFcnJvcikgcmVhY3Rpb24uZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmVhY3Rpb25bXCJyZWFjdENvbXBvbmVudFwiXSA9IHRoaXM7XG4gIHJlYWN0aXZlUmVuZGVyW21vYnhBZG1pblByb3BlcnR5XSA9IHJlYWN0aW9uO1xuICB0aGlzLnJlbmRlciA9IHJlYWN0aXZlUmVuZGVyO1xuXG4gIGZ1bmN0aW9uIHJlYWN0aXZlUmVuZGVyKCkge1xuICAgIGlzUmVuZGVyaW5nUGVuZGluZyA9IGZhbHNlO1xuICAgIHZhciBleGNlcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHJlbmRlcmluZyA9IHVuZGVmaW5lZDtcbiAgICByZWFjdGlvbi50cmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZW5kZXJpbmcgPSBfYWxsb3dTdGF0ZUNoYW5nZXMoZmFsc2UsIGJhc2VSZW5kZXIpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBleGNlcHRpb24gPSBlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGV4Y2VwdGlvbikge1xuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJpbmc7XG4gIH1cblxuICByZXR1cm4gcmVhY3RpdmVSZW5kZXIuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZXJTQ1UobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSkge1xuICAgIGNvbnNvbGUud2FybihcIlttb2J4LXJlYWN0XSBJdCBzZWVtcyB0aGF0IGEgcmUtcmVuZGVyaW5nIG9mIGEgUmVhY3QgY29tcG9uZW50IGlzIHRyaWdnZXJlZCB3aGlsZSBpbiBzdGF0aWMgKHNlcnZlci1zaWRlKSBtb2RlLiBQbGVhc2UgbWFrZSBzdXJlIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9ubHkgb25jZSBzZXJ2ZXItc2lkZS5cIik7XG4gIH0gLy8gdXBkYXRlIG9uIGFueSBzdGF0ZSBjaGFuZ2VzIChhcyBpcyB0aGUgZGVmYXVsdClcblxuXG4gIGlmICh0aGlzLnN0YXRlICE9PSBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB1cGRhdGUgaWYgcHJvcHMgYXJlIHNoYWxsb3dseSBub3QgZXF1YWwsIGluc3BpcmVkIGJ5IFB1cmVSZW5kZXJNaXhpblxuICAvLyB3ZSBjb3VsZCByZXR1cm4ganVzdCAnZmFsc2UnIGhlcmUsIGFuZCBhdm9pZCB0aGUgYHNraXBSZW5kZXJgIGNoZWNrcyBldGNcbiAgLy8gaG93ZXZlciwgaXQgaXMgbmljZXIgaWYgbGlmZWN5Y2xlIGV2ZW50cyBhcmUgdHJpZ2dlcmVkIGxpa2UgdXN1YWxseSxcbiAgLy8gc28gd2UgcmV0dXJuIHRydWUgaGVyZSBpZiBwcm9wcyBhcmUgc2hhbGxvd2x5IG1vZGlmaWVkLlxuXG5cbiAgcmV0dXJuICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbn1cblxuZnVuY3Rpb24gbWFrZU9ic2VydmFibGVQcm9wKHRhcmdldCwgcHJvcE5hbWUpIHtcbiAgdmFyIHZhbHVlSG9sZGVyS2V5ID0gbmV3U3ltYm9sKFwicmVhY3RQcm9wX1wiICsgcHJvcE5hbWUgKyBcIl92YWx1ZUhvbGRlclwiKTtcbiAgdmFyIGF0b21Ib2xkZXJLZXkgPSBuZXdTeW1ib2woXCJyZWFjdFByb3BfXCIgKyBwcm9wTmFtZSArIFwiX2F0b21Ib2xkZXJcIik7XG5cbiAgZnVuY3Rpb24gZ2V0QXRvbSgpIHtcbiAgICBpZiAoIXRoaXNbYXRvbUhvbGRlcktleV0pIHtcbiAgICAgIHNldEhpZGRlblByb3AodGhpcywgYXRvbUhvbGRlcktleSwgY3JlYXRlQXRvbShcInJlYWN0aXZlIFwiICsgcHJvcE5hbWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1thdG9tSG9sZGVyS2V5XTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BOYW1lLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJldlJlYWRTdGF0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoX2FsbG93U3RhdGVSZWFkc1N0YXJ0ICYmIF9hbGxvd1N0YXRlUmVhZHNFbmQpIHtcbiAgICAgICAgcHJldlJlYWRTdGF0ZSA9IF9hbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgZ2V0QXRvbS5jYWxsKHRoaXMpLnJlcG9ydE9ic2VydmVkKCk7XG5cbiAgICAgIGlmIChfYWxsb3dTdGF0ZVJlYWRzU3RhcnQgJiYgX2FsbG93U3RhdGVSZWFkc0VuZCkge1xuICAgICAgICBfYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZSZWFkU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpc1t2YWx1ZUhvbGRlcktleV07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICBpZiAoIXRoaXNbaXNGb3JjaW5nVXBkYXRlS2V5XSAmJiAhc2hhbGxvd0VxdWFsKHRoaXNbdmFsdWVIb2xkZXJLZXldLCB2KSkge1xuICAgICAgICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHZhbHVlSG9sZGVyS2V5LCB2KTtcbiAgICAgICAgc2V0SGlkZGVuUHJvcCh0aGlzLCBza2lwUmVuZGVyS2V5LCB0cnVlKTtcbiAgICAgICAgZ2V0QXRvbS5jYWxsKHRoaXMpLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgc2V0SGlkZGVuUHJvcCh0aGlzLCBza2lwUmVuZGVyS2V5LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHZhbHVlSG9sZGVyS2V5LCB2KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5mb3I7IC8vIFVzaW5nIHJlYWN0LWlzIGhhZCBzb21lIGlzc3VlcyAoYW5kIG9wZXJhdGVzIG9uIGVsZW1lbnRzLCBub3Qgb24gdHlwZXMpLCBzZWUgIzYwOCAvICM2MDlcblxudmFyIFJlYWN0Rm9yd2FyZFJlZlN5bWJvbCA9IGhhc1N5bWJvbCA/XG4vKiNfX1BVUkVfXyovXG5TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIikgOiB0eXBlb2YgZm9yd2FyZFJlZiA9PT0gXCJmdW5jdGlvblwiICYmXG4vKiNfX1BVUkVfXyovXG5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbnVsbDtcbn0pW1wiJCR0eXBlb2ZcIl07XG52YXIgUmVhY3RNZW1vU3ltYm9sID0gaGFzU3ltYm9sID9cbi8qI19fUFVSRV9fKi9cblN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpIDogdHlwZW9mIG1lbW8gPT09IFwiZnVuY3Rpb25cIiAmJlxuLyojX19QVVJFX18qL1xubWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG51bGw7XG59KVtcIiQkdHlwZW9mXCJdO1xuLyoqXHJcbiAqIE9ic2VydmVyIGZ1bmN0aW9uIC8gZGVjb3JhdG9yXHJcbiAqL1xuXG5mdW5jdGlvbiBvYnNlcnZlcihjb21wb25lbnQpIHtcbiAgaWYgKGNvbXBvbmVudFtcImlzTW9ieEluamVjdG9yXCJdID09PSB0cnVlKSB7XG4gICAgY29uc29sZS53YXJuKFwiTW9ieCBvYnNlcnZlcjogWW91IGFyZSB0cnlpbmcgdG8gdXNlICdvYnNlcnZlcicgb24gYSBjb21wb25lbnQgdGhhdCBhbHJlYWR5IGhhcyAnaW5qZWN0Jy4gUGxlYXNlIGFwcGx5ICdvYnNlcnZlcicgYmVmb3JlIGFwcGx5aW5nICdpbmplY3QnXCIpO1xuICB9XG5cbiAgaWYgKFJlYWN0TWVtb1N5bWJvbCAmJiBjb21wb25lbnRbXCIkJHR5cGVvZlwiXSA9PT0gUmVhY3RNZW1vU3ltYm9sKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTW9ieCBvYnNlcnZlcjogWW91IGFyZSB0cnlpbmcgdG8gdXNlICdvYnNlcnZlcicgb24gYSBmdW5jdGlvbiBjb21wb25lbnQgd3JhcHBlZCBpbiBlaXRoZXIgYW5vdGhlciBvYnNlcnZlciBvciAnUmVhY3QubWVtbycuIFRoZSBvYnNlcnZlciBhbHJlYWR5IGFwcGxpZXMgJ1JlYWN0Lm1lbW8nIGZvciB5b3UuXCIpO1xuICB9IC8vIFVud3JhcCBmb3J3YXJkIHJlZnMgaW50byBgPE9ic2VydmVyPmAgY29tcG9uZW50XG4gIC8vIHdlIG5lZWQgdG8gdW53cmFwIHRoZSByZW5kZXIsIGJlY2F1c2UgaXQgaXMgdGhlIGlubmVyIHJlbmRlciB0aGF0IG5lZWRzIHRvIGJlIHRyYWNrZWQsXG4gIC8vIG5vdCB0aGUgRm9yd2FyZFJlZiBIb0NcblxuXG4gIGlmIChSZWFjdEZvcndhcmRSZWZTeW1ib2wgJiYgY29tcG9uZW50W1wiJCR0eXBlb2ZcIl0gPT09IFJlYWN0Rm9yd2FyZFJlZlN5bWJvbCkge1xuICAgIHZhciBiYXNlUmVuZGVyID0gY29tcG9uZW50W1wicmVuZGVyXCJdO1xuICAgIGlmICh0eXBlb2YgYmFzZVJlbmRlciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXIgcHJvcGVydHkgb2YgRm9yd2FyZFJlZiB3YXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgcmV0dXJuIGZvcndhcmRSZWYoZnVuY3Rpb24gT2JzZXJ2ZXJGb3J3YXJkUmVmKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChPYnNlcnZlciwgbnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmFzZVJlbmRlci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gLy8gRnVuY3Rpb24gY29tcG9uZW50XG5cblxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJmdW5jdGlvblwiICYmICghY29tcG9uZW50LnByb3RvdHlwZSB8fCAhY29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIpICYmICFjb21wb25lbnRbXCJpc1JlYWN0Q2xhc3NcIl0gJiYgIU9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZi5jYWxsKENvbXBvbmVudCwgY29tcG9uZW50KSkge1xuICAgIHJldHVybiBvYnNlcnZlciQxKGNvbXBvbmVudCk7XG4gIH1cblxuICByZXR1cm4gbWFrZUNsYXNzQ29tcG9uZW50T2JzZXJ2ZXIoY29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBNb2JYUHJvdmlkZXJDb250ZXh0ID1cbi8qI19fUFVSRV9fKi9cblJlYWN0X19kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO1xuZnVuY3Rpb24gUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBzdG9yZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiY2hpbGRyZW5cIl0pO1xuXG4gIHZhciBwYXJlbnRWYWx1ZSA9IFJlYWN0X19kZWZhdWx0LnVzZUNvbnRleHQoTW9iWFByb3ZpZGVyQ29udGV4dCk7XG4gIHZhciBtdXRhYmxlUHJvdmlkZXJSZWYgPSBSZWFjdF9fZGVmYXVsdC51c2VSZWYoX2V4dGVuZHMoe30sIHBhcmVudFZhbHVlLCBzdG9yZXMpKTtcbiAgdmFyIHZhbHVlID0gbXV0YWJsZVByb3ZpZGVyUmVmLmN1cnJlbnQ7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCB2YWx1ZSwgc3RvcmVzKTsgLy8gc3ByZWFkIGluIHByZXZpb3VzIHN0YXRlIGZvciB0aGUgY29udGV4dCBiYXNlZCBzdG9yZXNcblxuXG4gICAgaWYgKCFzaGFsbG93RXF1YWwodmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTW9iWCBQcm92aWRlcjogVGhlIHNldCBvZiBwcm92aWRlZCBzdG9yZXMgaGFzIGNoYW5nZWQuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4LXJlYWN0I3RoZS1zZXQtb2YtcHJvdmlkZWQtc3RvcmVzLWhhcy1jaGFuZ2VkLWVycm9yLlwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChNb2JYUHJvdmlkZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHZhbHVlXG4gIH0sIGNoaWxkcmVuKTtcbn1cblByb3ZpZGVyLmRpc3BsYXlOYW1lID0gXCJNb2JYUHJvdmlkZXJcIjtcblxuLyoqXHJcbiAqIFN0b3JlIEluamVjdGlvblxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmVJbmplY3RvcihncmFiU3RvcmVzRm4sIGNvbXBvbmVudCwgaW5qZWN0TmFtZXMsIG1ha2VSZWFjdGl2ZSkge1xuICAvLyBTdXBwb3J0IGZvcndhcmQgcmVmc1xuICB2YXIgSW5qZWN0b3IgPSBSZWFjdF9fZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgdmFyIG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIHByb3BzKTtcblxuICAgIHZhciBjb250ZXh0ID0gUmVhY3RfX2RlZmF1bHQudXNlQ29udGV4dChNb2JYUHJvdmlkZXJDb250ZXh0KTtcbiAgICBPYmplY3QuYXNzaWduKG5ld1Byb3BzLCBncmFiU3RvcmVzRm4oY29udGV4dCB8fCB7fSwgbmV3UHJvcHMpIHx8IHt9KTtcblxuICAgIGlmIChyZWYpIHtcbiAgICAgIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIG5ld1Byb3BzKTtcbiAgfSk7XG4gIGlmIChtYWtlUmVhY3RpdmUpIEluamVjdG9yID0gb2JzZXJ2ZXIoSW5qZWN0b3IpO1xuICBJbmplY3RvcltcImlzTW9ieEluamVjdG9yXCJdID0gdHJ1ZTsgLy8gYXNzaWduZWQgbGF0ZSB0byBzdXBwcmVzcyBvYnNlcnZlciB3YXJuaW5nXG4gIC8vIFN0YXRpYyBmaWVsZHMgZnJvbSBjb21wb25lbnQgc2hvdWxkIGJlIHZpc2libGUgb24gdGhlIGdlbmVyYXRlZCBJbmplY3RvclxuXG4gIGNvcHlTdGF0aWNQcm9wZXJ0aWVzKGNvbXBvbmVudCwgSW5qZWN0b3IpO1xuICBJbmplY3RvcltcIndyYXBwZWRDb21wb25lbnRcIl0gPSBjb21wb25lbnQ7XG4gIEluamVjdG9yLmRpc3BsYXlOYW1lID0gZ2V0SW5qZWN0TmFtZShjb21wb25lbnQsIGluamVjdE5hbWVzKTtcbiAgcmV0dXJuIEluamVjdG9yO1xufVxuXG5mdW5jdGlvbiBnZXRJbmplY3ROYW1lKGNvbXBvbmVudCwgaW5qZWN0TmFtZXMpIHtcbiAgdmFyIGRpc3BsYXlOYW1lO1xuICB2YXIgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnQubmFtZSB8fCBjb21wb25lbnQuY29uc3RydWN0b3IgJiYgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgfHwgXCJDb21wb25lbnRcIjtcbiAgaWYgKGluamVjdE5hbWVzKSBkaXNwbGF5TmFtZSA9IFwiaW5qZWN0LXdpdGgtXCIgKyBpbmplY3ROYW1lcyArIFwiKFwiICsgY29tcG9uZW50TmFtZSArIFwiKVwiO2Vsc2UgZGlzcGxheU5hbWUgPSBcImluamVjdChcIiArIGNvbXBvbmVudE5hbWUgKyBcIilcIjtcbiAgcmV0dXJuIGRpc3BsYXlOYW1lO1xufVxuXG5mdW5jdGlvbiBncmFiU3RvcmVzQnlOYW1lKHN0b3JlTmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiYXNlU3RvcmVzLCBuZXh0UHJvcHMpIHtcbiAgICBzdG9yZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgaWYgKHN0b3JlTmFtZSBpbiBuZXh0UHJvcHMgLy8gcHJlZmVyIHByb3BzIG92ZXIgc3RvcmVzXG4gICAgICApIHJldHVybjtcbiAgICAgIGlmICghKHN0b3JlTmFtZSBpbiBiYXNlU3RvcmVzKSkgdGhyb3cgbmV3IEVycm9yKFwiTW9iWCBpbmplY3RvcjogU3RvcmUgJ1wiICsgc3RvcmVOYW1lICsgXCInIGlzIG5vdCBhdmFpbGFibGUhIE1ha2Ugc3VyZSBpdCBpcyBwcm92aWRlZCBieSBzb21lIFByb3ZpZGVyXCIpO1xuICAgICAgbmV4dFByb3BzW3N0b3JlTmFtZV0gPSBiYXNlU3RvcmVzW3N0b3JlTmFtZV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHRQcm9wcztcbiAgfTtcbn1cbi8qKlxyXG4gKiBoaWdoZXIgb3JkZXIgY29tcG9uZW50IHRoYXQgaW5qZWN0cyBzdG9yZXMgdG8gYSBjaGlsZC5cclxuICogdGFrZXMgZWl0aGVyIGEgdmFyYXJncyBsaXN0IG9mIHN0cmluZ3MsIHdoaWNoIGFyZSBzdG9yZXMgcmVhZCBmcm9tIHRoZSBjb250ZXh0LFxyXG4gKiBvciBhIGZ1bmN0aW9uIHRoYXQgbWFudWFsbHkgbWFwcyB0aGUgYXZhaWxhYmxlIHN0b3JlcyBmcm9tIHRoZSBjb250ZXh0IHRvIHByb3BzOlxyXG4gKiBzdG9yZXNUb1Byb3BzKG1vYnhTdG9yZXMsIHByb3BzLCBjb250ZXh0KSA9PiBuZXdQcm9wc1xyXG4gKi9cblxuXG5mdW5jdGlvbiBpbmplY3QoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdG9yZU5hbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHN0b3JlTmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGdyYWJTdG9yZXNGbiA9IGFyZ3VtZW50c1swXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU3RvcmVJbmplY3RvcihncmFiU3RvcmVzRm4sIGNvbXBvbmVudENsYXNzLCBncmFiU3RvcmVzRm4ubmFtZSwgdHJ1ZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU3RvcmVJbmplY3RvcihncmFiU3RvcmVzQnlOYW1lKHN0b3JlTmFtZXMpLCBjb21wb25lbnRDbGFzcywgc3RvcmVOYW1lcy5qb2luKFwiLVwiKSwgZmFsc2UpO1xuICAgIH07XG4gIH1cbn1cblxudmFyIHByb3RvU3RvcmVLZXkgPVxuLyojX19QVVJFX18qL1xubmV3U3ltYm9sKFwiZGlzcG9zZU9uVW5tb3VudFByb3RvXCIpO1xudmFyIGluc3RTdG9yZUtleSA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJkaXNwb3NlT25Vbm1vdW50SW5zdFwiKTtcblxuZnVuY3Rpb24gcnVuRGlzcG9zZXJzT25XaWxsVW5tb3VudCgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgW10uY29uY2F0KHRoaXNbcHJvdG9TdG9yZUtleV0gfHwgW10sIHRoaXNbaW5zdFN0b3JlS2V5XSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcEtleU9yRnVuY3Rpb24pIHtcbiAgICB2YXIgcHJvcCA9IHR5cGVvZiBwcm9wS2V5T3JGdW5jdGlvbiA9PT0gXCJzdHJpbmdcIiA/IF90aGlzW3Byb3BLZXlPckZ1bmN0aW9uXSA6IHByb3BLZXlPckZ1bmN0aW9uO1xuXG4gICAgaWYgKHByb3AgIT09IHVuZGVmaW5lZCAmJiBwcm9wICE9PSBudWxsKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wKSkgcHJvcC5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYoKTtcbiAgICAgIH0pO2Vsc2UgcHJvcCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3Bvc2VPblVubW91bnQodGFyZ2V0LCBwcm9wZXJ0eUtleU9yRnVuY3Rpb24pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydHlLZXlPckZ1bmN0aW9uKSkge1xuICAgIHJldHVybiBwcm9wZXJ0eUtleU9yRnVuY3Rpb24ubWFwKGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGRpc3Bvc2VPblVubW91bnQodGFyZ2V0LCBmbik7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgYyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpLmNvbnN0cnVjdG9yO1xuICB2YXIgYzIgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0LmNvbnN0cnVjdG9yKTsgLy8gU3BlY2lhbCBjYXNlIGZvciByZWFjdC1ob3QtbG9hZGVyXG5cbiAgdmFyIGMzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpKTtcblxuICBpZiAoIShjID09PSBSZWFjdF9fZGVmYXVsdC5Db21wb25lbnQgfHwgYyA9PT0gUmVhY3RfX2RlZmF1bHQuUHVyZUNvbXBvbmVudCB8fCBjMiA9PT0gUmVhY3RfX2RlZmF1bHQuQ29tcG9uZW50IHx8IGMyID09PSBSZWFjdF9fZGVmYXVsdC5QdXJlQ29tcG9uZW50IHx8IGMzID09PSBSZWFjdF9fZGVmYXVsdC5Db21wb25lbnQgfHwgYzMgPT09IFJlYWN0X19kZWZhdWx0LlB1cmVDb21wb25lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYngtcmVhY3RdIGRpc3Bvc2VPblVubW91bnQgb25seSBzdXBwb3J0cyBkaXJlY3Qgc3ViY2xhc3NlcyBvZiBSZWFjdC5Db21wb25lbnQgb3IgUmVhY3QuUHVyZUNvbXBvbmVudC5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIHByb3BlcnR5S2V5T3JGdW5jdGlvbiAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcHJvcGVydHlLZXlPckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIgJiYgIUFycmF5LmlzQXJyYXkocHJvcGVydHlLZXlPckZ1bmN0aW9uKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LXJlYWN0XSBkaXNwb3NlT25Vbm1vdW50IG9ubHkgd29ya3MgaWYgdGhlIHBhcmFtZXRlciBpcyBlaXRoZXIgYSBwcm9wZXJ0eSBrZXkgb3IgYSBmdW5jdGlvbi5cIik7XG4gIH0gLy8gZGVjb3JhdG9yJ3MgdGFyZ2V0IGlzIHRoZSBwcm90b3R5cGUsIHNvIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgaW5zdGFuY2UgcHJvcGVydGllcyBsaWtlIHByb3BzXG5cblxuICB2YXIgaXNEZWNvcmF0b3IgPSB0eXBlb2YgcHJvcGVydHlLZXlPckZ1bmN0aW9uID09PSBcInN0cmluZ1wiOyAvLyBhZGQgcHJvcGVydHkga2V5IC8gZnVuY3Rpb24gd2Ugd2FudCBydW4gKGRpc3Bvc2VkKSB0byB0aGUgc3RvcmVcblxuICB2YXIgY29tcG9uZW50V2FzQWxyZWFkeU1vZGlmaWVkID0gISF0YXJnZXRbcHJvdG9TdG9yZUtleV0gfHwgISF0YXJnZXRbaW5zdFN0b3JlS2V5XTtcbiAgdmFyIHN0b3JlID0gaXNEZWNvcmF0b3IgPyAvLyBkZWNvcmF0b3JzIGFyZSBhZGRlZCB0byB0aGUgcHJvdG90eXBlIHN0b3JlXG4gIHRhcmdldFtwcm90b1N0b3JlS2V5XSB8fCAodGFyZ2V0W3Byb3RvU3RvcmVLZXldID0gW10pIDogLy8gZnVuY3Rpb25zIGFyZSBhZGRlZCB0byB0aGUgaW5zdGFuY2Ugc3RvcmVcbiAgdGFyZ2V0W2luc3RTdG9yZUtleV0gfHwgKHRhcmdldFtpbnN0U3RvcmVLZXldID0gW10pO1xuICBzdG9yZS5wdXNoKHByb3BlcnR5S2V5T3JGdW5jdGlvbik7IC8vIHR3ZWFrIHRoZSBjb21wb25lbnQgY2xhc3MgY29tcG9uZW50V2lsbFVubW91bnQgaWYgbm90IGRvbmUgYWxyZWFkeVxuXG4gIGlmICghY29tcG9uZW50V2FzQWxyZWFkeU1vZGlmaWVkKSB7XG4gICAgcGF0Y2godGFyZ2V0LCBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsIHJ1bkRpc3Bvc2Vyc09uV2lsbFVubW91bnQpO1xuICB9IC8vIHJldHVybiB0aGUgZGlzcG9zZXIgYXMgaXMgaWYgaW52b2tlZCBhcyBhIG5vbiBkZWNvcmF0b3JcblxuXG4gIGlmICh0eXBlb2YgcHJvcGVydHlLZXlPckZ1bmN0aW9uICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5S2V5T3JGdW5jdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0b3IpIHtcbiAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiA2ID8gX2xlbiAtIDYgOiAwKSwgX2tleSA9IDY7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHJlc3RbX2tleSAtIDZdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgXCI8PGFub255bW91cz4+XCI7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIHZhciBhY3R1YWwgPSBwcm9wc1twcm9wTmFtZV0gPT09IG51bGwgPyBcIm51bGxcIiA6IFwidW5kZWZpbmVkXCI7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBcIiArIFwiaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgYnV0IGl0cyB2YWx1ZSBpcyBgXCIgKyBhY3R1YWwgKyBcImAuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBAdHMtaWdub3JlIHJlc3QgYXJnIGlzIG5lY2Vzc2FyeSBmb3Igc29tZSBSZWFjdCBpbnRlcm5hbHMgLSBmYWlscyB0ZXN0cyBvdGhlcndpc2VcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTsgLy8gQWRkIGlzUmVxdWlyZWQgdG8gc2F0aXNmeSBSZXF1aXJhYmxlXG5cbiAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG4gIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xufSAvLyBDb3BpZWQgZnJvbSBSZWFjdC5Qcm9wVHlwZXNcblxuXG5mdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gIC8vIE5hdGl2ZSBTeW1ib2wuXG4gIGlmIChwcm9wVHlwZSA9PT0gXCJzeW1ib2xcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG5cblxuICBpZiAocHJvcFZhbHVlW1wiQEB0b1N0cmluZ1RhZ1wiXSA9PT0gXCJTeW1ib2xcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cblxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IC8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuXG5cbmZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gXCJhcnJheVwiO1xuICB9XG5cbiAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICByZXR1cm4gXCJvYmplY3RcIjtcbiAgfVxuXG4gIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgIHJldHVybiBcInN5bWJvbFwiO1xuICB9XG5cbiAgcmV0dXJuIHByb3BUeXBlO1xufSAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4vLyBDb3BpZWQgZnJvbSBSZWFjdC5Qcm9wVHlwZXNcblxuXG5mdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblxuICBpZiAocHJvcFR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIFwiZGF0ZVwiO1xuICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gXCJyZWdleHBcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcFR5cGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoYWxsb3dOYXRpdmVUeXBlLCBtb2J4VHlwZSkge1xuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHJldHVybiB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGFsbG93TmF0aXZlVHlwZSkge1xuICAgICAgICBpZiAoZ2V0UHJvcFR5cGUocHJvcHNbcHJvcE5hbWVdKSA9PT0gbW9ieFR5cGUudG9Mb3dlckNhc2UoKSkgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb2J4Q2hlY2tlcjtcblxuICAgICAgc3dpdGNoIChtb2J4VHlwZSkge1xuICAgICAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgICAgICBtb2J4Q2hlY2tlciA9IGlzT2JzZXJ2YWJsZUFycmF5O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJPYmplY3RcIjpcbiAgICAgICAgICBtb2J4Q2hlY2tlciA9IGlzT2JzZXJ2YWJsZU9iamVjdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiTWFwXCI6XG4gICAgICAgICAgbW9ieENoZWNrZXIgPSBpc09ic2VydmFibGVNYXA7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIG1vYnhUeXBlOiBcIiArIG1vYnhUeXBlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgaWYgKCFtb2J4Q2hlY2tlcihwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHZhciBuYXRpdmVUeXBlRXhwZWN0YXRpb25NZXNzYWdlID0gYWxsb3dOYXRpdmVUeXBlID8gXCIgb3IgamF2YXNjcmlwdCBgXCIgKyBtb2J4VHlwZS50b0xvd2VyQ2FzZSgpICsgXCJgXCIgOiBcIlwiO1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIHByZWNpc2VUeXBlICsgXCJgIHN1cHBsaWVkIHRvXCIgKyBcIiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBgbW9ieC5PYnNlcnZhYmxlXCIgKyBtb2J4VHlwZSArIFwiYFwiICsgbmF0aXZlVHlwZUV4cGVjdGF0aW9uTWVzc2FnZSArIFwiLlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlQXJyYXlPZlR5cGVDaGVja2VyKGFsbG93TmF0aXZlVHlwZSwgdHlwZUNoZWNrZXIpIHtcbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjIgPiA1ID8gX2xlbjIgLSA1IDogMCksIF9rZXkyID0gNTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgcmVzdFtfa2V5MiAtIDVdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiUHJvcGVydHkgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIGNvbXBvbmVudCBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgIGhhcyBcIiArIFwiaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbi5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZXJyb3IgPSBjcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGFsbG93TmF0aXZlVHlwZSwgXCJBcnJheVwiKShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlQ2hlY2tlci5hcHBseSh2b2lkIDAsIFtwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyBcIltcIiArIGkgKyBcIl1cIl0uY29uY2F0KHJlc3QpKTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgb2JzZXJ2YWJsZUFycmF5ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoZmFsc2UsIFwiQXJyYXlcIik7XG52YXIgb2JzZXJ2YWJsZUFycmF5T2YgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZUFycmF5T2ZUeXBlQ2hlY2tlci5iaW5kKG51bGwsIGZhbHNlKTtcbnZhciBvYnNlcnZhYmxlTWFwID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoZmFsc2UsIFwiTWFwXCIpO1xudmFyIG9ic2VydmFibGVPYmplY3QgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihmYWxzZSwgXCJPYmplY3RcIik7XG52YXIgYXJyYXlPck9ic2VydmFibGVBcnJheSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKHRydWUsIFwiQXJyYXlcIik7XG52YXIgYXJyYXlPck9ic2VydmFibGVBcnJheU9mID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU9ic2VydmFibGVBcnJheU9mVHlwZUNoZWNrZXIuYmluZChudWxsLCB0cnVlKTtcbnZhciBvYmplY3RPck9ic2VydmFibGVPYmplY3QgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcih0cnVlLCBcIk9iamVjdFwiKTtcbnZhciBQcm9wVHlwZXMgPSB7XG4gIG9ic2VydmFibGVBcnJheTogb2JzZXJ2YWJsZUFycmF5LFxuICBvYnNlcnZhYmxlQXJyYXlPZjogb2JzZXJ2YWJsZUFycmF5T2YsXG4gIG9ic2VydmFibGVNYXA6IG9ic2VydmFibGVNYXAsXG4gIG9ic2VydmFibGVPYmplY3Q6IG9ic2VydmFibGVPYmplY3QsXG4gIGFycmF5T3JPYnNlcnZhYmxlQXJyYXk6IGFycmF5T3JPYnNlcnZhYmxlQXJyYXksXG4gIGFycmF5T3JPYnNlcnZhYmxlQXJyYXlPZjogYXJyYXlPck9ic2VydmFibGVBcnJheU9mLFxuICBvYmplY3RPck9ic2VydmFibGVPYmplY3Q6IG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdFxufTtcblxuaWYgKCFDb21wb25lbnQpIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QgcmVxdWlyZXMgUmVhY3QgdG8gYmUgYXZhaWxhYmxlXCIpO1xuaWYgKCFvYnNlcnZhYmxlKSB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LXJlYWN0IHJlcXVpcmVzIG1vYnggdG8gYmUgYXZhaWxhYmxlXCIpO1xuXG5leHBvcnQgeyBNb2JYUHJvdmlkZXJDb250ZXh0LCBQcm9wVHlwZXMsIFByb3ZpZGVyLCBkaXNwb3NlT25Vbm1vdW50LCBpbmplY3QsIG9ic2VydmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2J4cmVhY3QuZXNtLmpzLm1hcFxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmtvcmVhTWFwX2hpZGRlbl9fMWEzVk8ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5rb3JlYU1hcF93cmFwX18xaUhTQSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8va29yZWFNYXAubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBV0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNWSjs7QUFMQTtFQUNJLGFBQUE7QUFRSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCAnVVRGLTgnO1xcclxcblxcclxcbi8vIHZhcmlhYmxlc1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycy5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9wYXRoLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4vLyBtaXhpbnNcXHJcXG5AaW1wb3J0ICcuL21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4vLyBoaWRkZW5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbn1cXHJcXG5cIixcIi5oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi53cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhpZGRlblwiOiBcImtvcmVhTWFwX2hpZGRlbl9fMWEzVk9cIixcblx0XCJ3cmFwXCI6IFwia29yZWFNYXBfd3JhcF9fMWlIU0FcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubG9jYXRpb25MaXN0X2hpZGRlbl9fMzlhV0cge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5sb2NhdGlvbkxpc3Rfd3JhcF9fM1hiMmMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMzc4cHg7XFxufVxcblxcbi5sb2NhdGlvbkxpc3RfbG9jYXRpb25XcmFwX18xd2NfSyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ3JpZC1nYXA6IDI0cHg7XFxuICBnYXA6IDI0cHg7XFxuICB3aWR0aDogNzM2cHg7XFxuICBwYWRkaW5nOiA2MXB4IDMycHg7XFxufVxcbi5sb2NhdGlvbkxpc3RfbG9jYXRpb25XcmFwX18xd2NfSyAubG9jYXRpb25MaXN0X2xvY2F0aW9uX18xTV9tVyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA0NnB4O1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U4ZWE7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6ICM2NTZhNzE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5sb2NhdGlvbkxpc3RfbG9jYXRpb25XcmFwX18xd2NfSyAubG9jYXRpb25MaXN0X2xvY2F0aW9uX18xTV9tVy5sb2NhdGlvbkxpc3RfYWN0aXZlX19IcW9teCB7XFxuICBiYWNrZ3JvdW5kOiAjNmNkZDgzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzUyYzU2NDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1ZKOztBQUxBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBUUo7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUo7QUFOSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDdUVTO0VEdEVULGVBQUE7QUFRUjtBQU5RO0VBQ0ksbUJDZEU7RURlRix5QkFBQTtFQUNBLFdDbENGO0FEMENWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0ICdVVEYtOCc7XFxyXFxuXFxyXFxuLy8gdmFyaWFibGVzXFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3BhdGguc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbi8vIG1peGluc1xcclxcbkBpbXBvcnQgJy4vbWl4aW5zLnNjc3MnO1xcclxcblxcclxcbi8vIGhpZGRlblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxyXFxufVxcclxcblwiLFwiLmhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLndyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMzc4cHg7XFxufVxcblxcbi5sb2NhdGlvbldyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMjRweDtcXG4gIHdpZHRoOiA3MzZweDtcXG4gIHBhZGRpbmc6IDYxcHggMzJweDtcXG59XFxuLmxvY2F0aW9uV3JhcCAubG9jYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNDZweDtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlOGVhO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjNjU2YTcxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubG9jYXRpb25XcmFwIC5sb2NhdGlvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzZjZGQ4MztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MmM1NjQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XCIsXCIkQ19XSElURTogI2ZmZjtcXHJcXG4kQ19CTEFDSzogIzAwMDtcXHJcXG4kQ19HVUlERUxJTkU6ICMwZmY7XFxyXFxuXFxyXFxuLy8gSk9CREEgQkxBQ0tcXHJcXG4kQ19KT0JEQV9CTEFDSzogIzEyMTYxOTtcXHJcXG5cXHJcXG4vLyBKT0JEQSBXSElURVxcclxcbiRDX0pPQkRBX1dISVRFOiAjZjlmOWZhO1xcclxcblxcclxcbi8vIEdSRUVOXFxyXFxuJENfR1JFRU5fMzA6ICNlZmZkZjM7XFxyXFxuJENfR1JFRU5fNDA6ICNlMGY5ZTQ7XFxyXFxuJENfR1JFRU5fNTA6ICNkMGY1ZGE7XFxyXFxuJENfR1JFRU5fNjA6ICNjM2YyY2Q7XFxyXFxuJENfR1JFRU5fNzA6ICNiM2VlYzE7XFxyXFxuJENfR1JFRU5fODA6ICNhMmViYjQ7XFxyXFxuJENfR1JFRU5fOTA6ICM5MmU2YTM7XFxyXFxuJENfR1JFRU5fMTAwOiAjNmNkZDgzO1xcclxcbiRDX0dSRUVOXzIwMDogIzUyYzU2NDtcXHJcXG4kQ19HUkVFTl8zMDA6ICM0MWFjNGQ7XFxyXFxuJENfR1JFRU5fNDAwOiAjM2M4ZTQyO1xcclxcbiRDX0dSRUVOXzUwMDogIzM3NzUzODtcXHJcXG5cXHJcXG4vLyBZRUxMT1dcXHJcXG4kQ19ZRUxMT1dfMzA6ICNmZmZlZjI7XFxyXFxuJENfWUVMTE9XXzQwOiAjZmZmZGU1O1xcclxcbiRDX1lFTExPV181MDogI2ZlZmNkODtcXHJcXG4kQ19ZRUxMT1dfNjA6ICNmZWZjY2I7XFxyXFxuJENfWUVMTE9XXzcwOiAjZmVmOWJkO1xcclxcbiRDX1lFTExPV184MDogI2ZlZjhiMTtcXHJcXG4kQ19ZRUxMT1dfOTA6ICNmZGY2OWU7XFxyXFxuJENfWUVMTE9XXzEwMDogI2ZjZjE2YztcXHJcXG4kQ19ZRUxMT1dfMjAwOiAjZTdkYTRiO1xcclxcbiRDX1lFTExPV18zMDA6ICNkOGNhMmM7XFxyXFxuJENfWUVMTE9XXzQwMDogI2IzYTgyYTtcXHJcXG4kQ19ZRUxMT1dfNTAwOiAjOTM4YTI5O1xcclxcblxcclxcbi8vIFNLWVxcclxcbiRDX1NLWV8zMDogI2YzZmRmYztcXHJcXG4kQ19TS1lfNDA6ICNlOWY5Zjk7XFxyXFxuJENfU0tZXzUwOiAjZGNmN2Y2O1xcclxcbiRDX1NLWV82MDogI2QxZjVmMztcXHJcXG4kQ19TS1lfNzA6ICNjNWYxZWY7XFxyXFxuJENfU0tZXzgwOiAjYmJlZmVkO1xcclxcbiRDX1NLWV85MDogI2FmZWNlYTtcXHJcXG4kQ19TS1lfMTAwOiAjN2FkZWRhO1xcclxcbiRDX1NLWV8yMDA6ICM1ZWM3YzM7XFxyXFxuJENfU0tZXzMwMDogIzQ2YjJhZjtcXHJcXG4kQ19TS1lfNDAwOiAjNDA5MzkwO1xcclxcbiRDX1NLWV81MDA6ICMzYTc5Nzc7XFxyXFxuXFxyXFxuLy8gTElNRVxcclxcbiRDX0xJTUVfMzA6ICNmOWZmZWI7XFxyXFxuJENfTElNRV80MDogI2YzZmVkZjtcXHJcXG4kQ19MSU1FXzUwOiAjZWRmZGQyO1xcclxcbiRDX0xJTUVfNjA6ICNlN2ZjYzY7XFxyXFxuJENfTElNRV83MDogI2UyZmJiOTtcXHJcXG4kQ19MSU1FXzgwOiAjZGNmYWFkO1xcclxcbiRDX0xJTUVfOTA6ICNkMGY4OTQ7XFxyXFxuJENfTElNRV8xMDA6ICNiZmVmN2I7XFxyXFxuJENfTElNRV8yMDA6ICNhNGQ5NWE7XFxyXFxuJENfTElNRV8zMDA6ICM4ZWM5M2Q7XFxyXFxuJENfTElNRV80MDA6ICM3OWE4Mzc7XFxyXFxuJENfTElNRV81MDA6ICM2NjhhMzM7XFxyXFxuXFxyXFxuLy8gUFVSUExFXFxyXFxuJENfUFVSUExFXzMwOiAjZjVmMmZkO1xcclxcbiRDX1BVUlBMRV80MDogI2YyZWRmYztcXHJcXG4kQ19QVVJQTEVfNTA6ICNlZWU3ZmM7XFxyXFxuJENfUFVSUExFXzYwOiAjZThlMGZiO1xcclxcbiRDX1BVUlBMRV83MDogI2UwZDVmOTtcXHJcXG4kQ19QVVJQTEVfODA6ICNkNWM3Zjc7XFxyXFxuJENfUFVSUExFXzkwOiAjYzdiNGY0O1xcclxcbiRDX1BVUlBMRV8xMDA6ICNiNDliZjA7XFxyXFxuJENfUFVSUExFXzIwMDogIzkzNzVkYjtcXHJcXG4kQ19QVVJQTEVfMzAwOiAjNzc1M2NhO1xcclxcbiRDX1BVUlBMRV80MDA6ICM2MjNmYjM7XFxyXFxuJENfUFVSUExFXzUwMDogIzU1M2I5NDtcXHJcXG5cXHJcXG4vLyBCTFVFXFxyXFxuJENfQkxVRV8zMDogI2UxZTdmODtcXHJcXG4kQ19CTFVFXzQwOiAjYzNkMWVmO1xcclxcbiRDX0JMVUVfNTA6ICNhN2I5ZTc7XFxyXFxuJENfQkxVRV82MDogIzhiYTNkZjtcXHJcXG4kQ19CTFVFXzcwOiAjNzE4ZGQ3O1xcclxcbiRDX0JMVUVfODA6ICM1ODc4Y2Y7XFxyXFxuJENfQkxVRV85MDogIzMxNWZjNztcXHJcXG4kQ19CTFVFXzEwMDogIzJiNTNhZTtcXHJcXG4kQ19CTFVFXzIwMDogIzMwNGE4OTtcXHJcXG4kQ19CTFVFXzMwMDogIzJjNDE3MDtcXHJcXG4kQ19CTFVFXzQwMDogIzI5Mzg1ZDtcXHJcXG4kQ19CTFVFXzUwMDogIzI1MzE0ZDtcXHJcXG5cXHJcXG4vLyBHUkFZXFxyXFxuJENfQ09PTF9HUkFZXzMwOiAjZjRmNGY1O1xcclxcbiRDX0NPT0xfR1JBWV80MDogI2U3ZThlYTtcXHJcXG4kQ19DT09MX0dSQVlfNTA6ICNjZmQxZDU7XFxyXFxuJENfQ09PTF9HUkFZXzYwOiAjOWZhNGFiO1xcclxcbiRDX0NPT0xfR1JBWV83MDogIzY1NmE3MTtcXHJcXG4kQ19DT09MX0dSQVlfODA6ICM0NDQ3NGI7XFxyXFxuJENfQ09PTF9HUkFZXzkwOiAjMjUyODJiO1xcclxcblxcclxcbiRDX1dBUk1fR1JBWV8zMDogI2Y0ZjRmNDtcXHJcXG4kQ19XQVJNX0dSQVlfNDA6ICNlOGU4ZTg7XFxyXFxuJENfV0FSTV9HUkFZXzUwOiAjZDFkMWQxO1xcclxcbiRDX1dBUk1fR1JBWV82MDogI2E0YTRhNDtcXHJcXG4kQ19XQVJNX0dSQVlfNzA6ICM2YTZhNmE7XFxyXFxuJENfV0FSTV9HUkFZXzgwOiAjNDc0NzQ3O1xcclxcbiRDX1dBUk1fR1JBWV85MDogIzIzMjMyMztcXHJcXG5cXHJcXG4vLyBXQVJOSU5HXFxyXFxuJENfV0FSTklORzogI2Y2YTYwOTtcXHJcXG4kQ19XQVJOSU5HX0RBUks6ICNlODk4MDY7XFxyXFxuJENfV0FSTklOR19MSUdIVDogI2ZmYmMxZjtcXHJcXG5cXHJcXG4vLyBQT1NJVElWRVxcclxcbiRDX1BPU0lUSVZFOiAjNmNkZDgzO1xcclxcbiRDX1BPU0lUSVZFX0RBUks6ICMzZWQxNjA7XFxyXFxuJENfUE9TSVRJVkVfTElHSFQ6ICM5MmU2YTM7XFxyXFxuXFxyXFxuLy8gTkVHQVRJVkVcXHJcXG4kQ19ORUdBVElWRTogI2ZiNGU0ZTtcXHJcXG4kQ19ORUdBVElWRV9EQVJLOiAjZTkzYzNjO1xcclxcbiRDX05FR0FUSVZFX0xJR0hUOiAjZmY2MjYyO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhpZGRlblwiOiBcImxvY2F0aW9uTGlzdF9oaWRkZW5fXzM5YVdHXCIsXG5cdFwid3JhcFwiOiBcImxvY2F0aW9uTGlzdF93cmFwX18zWGIyY1wiLFxuXHRcImxvY2F0aW9uV3JhcFwiOiBcImxvY2F0aW9uTGlzdF9sb2NhdGlvbldyYXBfXzF3Y19LXCIsXG5cdFwibG9jYXRpb25cIjogXCJsb2NhdGlvbkxpc3RfbG9jYXRpb25fXzFNX21XXCIsXG5cdFwiYWN0aXZlXCI6IFwibG9jYXRpb25MaXN0X2FjdGl2ZV9fSHFvbXhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFwX2hpZGRlbl9fMWtCS08ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5tYXBfd3JhcF9fM0d2bGgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzODNweDtcXG4gIGhlaWdodDogMzc4cHg7XFxufVxcbi5tYXBfd3JhcF9fM0d2bGggLm1hcF9hY3RpdmVfXzNjMXVWIHtcXG4gIGZpbGw6ICM5MmU2YTM7XFxufVxcbi5tYXBfd3JhcF9fM0d2bGggcGF0aDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly9tYXAubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDVko7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBUUo7QUFOSTtFQUNJLGFDT0s7QURDYjtBQUxJO0VBRUksZUFBQTtBQU1SXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0ICdVVEYtOCc7XFxyXFxuXFxyXFxuLy8gdmFyaWFibGVzXFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3BhdGguc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbi8vIG1peGluc1xcclxcbkBpbXBvcnQgJy4vbWl4aW5zLnNjc3MnO1xcclxcblxcclxcbi8vIGhpZGRlblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxyXFxufVxcclxcblwiLFwiLmhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLndyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzODNweDtcXG4gIGhlaWdodDogMzc4cHg7XFxufVxcbi53cmFwIC5hY3RpdmUge1xcbiAgZmlsbDogIzkyZTZhMztcXG59XFxuLndyYXAgcGF0aDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLFwiJENfV0hJVEU6ICNmZmY7XFxyXFxuJENfQkxBQ0s6ICMwMDA7XFxyXFxuJENfR1VJREVMSU5FOiAjMGZmO1xcclxcblxcclxcbi8vIEpPQkRBIEJMQUNLXFxyXFxuJENfSk9CREFfQkxBQ0s6ICMxMjE2MTk7XFxyXFxuXFxyXFxuLy8gSk9CREEgV0hJVEVcXHJcXG4kQ19KT0JEQV9XSElURTogI2Y5ZjlmYTtcXHJcXG5cXHJcXG4vLyBHUkVFTlxcclxcbiRDX0dSRUVOXzMwOiAjZWZmZGYzO1xcclxcbiRDX0dSRUVOXzQwOiAjZTBmOWU0O1xcclxcbiRDX0dSRUVOXzUwOiAjZDBmNWRhO1xcclxcbiRDX0dSRUVOXzYwOiAjYzNmMmNkO1xcclxcbiRDX0dSRUVOXzcwOiAjYjNlZWMxO1xcclxcbiRDX0dSRUVOXzgwOiAjYTJlYmI0O1xcclxcbiRDX0dSRUVOXzkwOiAjOTJlNmEzO1xcclxcbiRDX0dSRUVOXzEwMDogIzZjZGQ4MztcXHJcXG4kQ19HUkVFTl8yMDA6ICM1MmM1NjQ7XFxyXFxuJENfR1JFRU5fMzAwOiAjNDFhYzRkO1xcclxcbiRDX0dSRUVOXzQwMDogIzNjOGU0MjtcXHJcXG4kQ19HUkVFTl81MDA6ICMzNzc1Mzg7XFxyXFxuXFxyXFxuLy8gWUVMTE9XXFxyXFxuJENfWUVMTE9XXzMwOiAjZmZmZWYyO1xcclxcbiRDX1lFTExPV180MDogI2ZmZmRlNTtcXHJcXG4kQ19ZRUxMT1dfNTA6ICNmZWZjZDg7XFxyXFxuJENfWUVMTE9XXzYwOiAjZmVmY2NiO1xcclxcbiRDX1lFTExPV183MDogI2ZlZjliZDtcXHJcXG4kQ19ZRUxMT1dfODA6ICNmZWY4YjE7XFxyXFxuJENfWUVMTE9XXzkwOiAjZmRmNjllO1xcclxcbiRDX1lFTExPV18xMDA6ICNmY2YxNmM7XFxyXFxuJENfWUVMTE9XXzIwMDogI2U3ZGE0YjtcXHJcXG4kQ19ZRUxMT1dfMzAwOiAjZDhjYTJjO1xcclxcbiRDX1lFTExPV180MDA6ICNiM2E4MmE7XFxyXFxuJENfWUVMTE9XXzUwMDogIzkzOGEyOTtcXHJcXG5cXHJcXG4vLyBTS1lcXHJcXG4kQ19TS1lfMzA6ICNmM2ZkZmM7XFxyXFxuJENfU0tZXzQwOiAjZTlmOWY5O1xcclxcbiRDX1NLWV81MDogI2RjZjdmNjtcXHJcXG4kQ19TS1lfNjA6ICNkMWY1ZjM7XFxyXFxuJENfU0tZXzcwOiAjYzVmMWVmO1xcclxcbiRDX1NLWV84MDogI2JiZWZlZDtcXHJcXG4kQ19TS1lfOTA6ICNhZmVjZWE7XFxyXFxuJENfU0tZXzEwMDogIzdhZGVkYTtcXHJcXG4kQ19TS1lfMjAwOiAjNWVjN2MzO1xcclxcbiRDX1NLWV8zMDA6ICM0NmIyYWY7XFxyXFxuJENfU0tZXzQwMDogIzQwOTM5MDtcXHJcXG4kQ19TS1lfNTAwOiAjM2E3OTc3O1xcclxcblxcclxcbi8vIExJTUVcXHJcXG4kQ19MSU1FXzMwOiAjZjlmZmViO1xcclxcbiRDX0xJTUVfNDA6ICNmM2ZlZGY7XFxyXFxuJENfTElNRV81MDogI2VkZmRkMjtcXHJcXG4kQ19MSU1FXzYwOiAjZTdmY2M2O1xcclxcbiRDX0xJTUVfNzA6ICNlMmZiYjk7XFxyXFxuJENfTElNRV84MDogI2RjZmFhZDtcXHJcXG4kQ19MSU1FXzkwOiAjZDBmODk0O1xcclxcbiRDX0xJTUVfMTAwOiAjYmZlZjdiO1xcclxcbiRDX0xJTUVfMjAwOiAjYTRkOTVhO1xcclxcbiRDX0xJTUVfMzAwOiAjOGVjOTNkO1xcclxcbiRDX0xJTUVfNDAwOiAjNzlhODM3O1xcclxcbiRDX0xJTUVfNTAwOiAjNjY4YTMzO1xcclxcblxcclxcbi8vIFBVUlBMRVxcclxcbiRDX1BVUlBMRV8zMDogI2Y1ZjJmZDtcXHJcXG4kQ19QVVJQTEVfNDA6ICNmMmVkZmM7XFxyXFxuJENfUFVSUExFXzUwOiAjZWVlN2ZjO1xcclxcbiRDX1BVUlBMRV82MDogI2U4ZTBmYjtcXHJcXG4kQ19QVVJQTEVfNzA6ICNlMGQ1Zjk7XFxyXFxuJENfUFVSUExFXzgwOiAjZDVjN2Y3O1xcclxcbiRDX1BVUlBMRV85MDogI2M3YjRmNDtcXHJcXG4kQ19QVVJQTEVfMTAwOiAjYjQ5YmYwO1xcclxcbiRDX1BVUlBMRV8yMDA6ICM5Mzc1ZGI7XFxyXFxuJENfUFVSUExFXzMwMDogIzc3NTNjYTtcXHJcXG4kQ19QVVJQTEVfNDAwOiAjNjIzZmIzO1xcclxcbiRDX1BVUlBMRV81MDA6ICM1NTNiOTQ7XFxyXFxuXFxyXFxuLy8gQkxVRVxcclxcbiRDX0JMVUVfMzA6ICNlMWU3Zjg7XFxyXFxuJENfQkxVRV80MDogI2MzZDFlZjtcXHJcXG4kQ19CTFVFXzUwOiAjYTdiOWU3O1xcclxcbiRDX0JMVUVfNjA6ICM4YmEzZGY7XFxyXFxuJENfQkxVRV83MDogIzcxOGRkNztcXHJcXG4kQ19CTFVFXzgwOiAjNTg3OGNmO1xcclxcbiRDX0JMVUVfOTA6ICMzMTVmYzc7XFxyXFxuJENfQkxVRV8xMDA6ICMyYjUzYWU7XFxyXFxuJENfQkxVRV8yMDA6ICMzMDRhODk7XFxyXFxuJENfQkxVRV8zMDA6ICMyYzQxNzA7XFxyXFxuJENfQkxVRV80MDA6ICMyOTM4NWQ7XFxyXFxuJENfQkxVRV81MDA6ICMyNTMxNGQ7XFxyXFxuXFxyXFxuLy8gR1JBWVxcclxcbiRDX0NPT0xfR1JBWV8zMDogI2Y0ZjRmNTtcXHJcXG4kQ19DT09MX0dSQVlfNDA6ICNlN2U4ZWE7XFxyXFxuJENfQ09PTF9HUkFZXzUwOiAjY2ZkMWQ1O1xcclxcbiRDX0NPT0xfR1JBWV82MDogIzlmYTRhYjtcXHJcXG4kQ19DT09MX0dSQVlfNzA6ICM2NTZhNzE7XFxyXFxuJENfQ09PTF9HUkFZXzgwOiAjNDQ0NzRiO1xcclxcbiRDX0NPT0xfR1JBWV85MDogIzI1MjgyYjtcXHJcXG5cXHJcXG4kQ19XQVJNX0dSQVlfMzA6ICNmNGY0ZjQ7XFxyXFxuJENfV0FSTV9HUkFZXzQwOiAjZThlOGU4O1xcclxcbiRDX1dBUk1fR1JBWV81MDogI2QxZDFkMTtcXHJcXG4kQ19XQVJNX0dSQVlfNjA6ICNhNGE0YTQ7XFxyXFxuJENfV0FSTV9HUkFZXzcwOiAjNmE2YTZhO1xcclxcbiRDX1dBUk1fR1JBWV84MDogIzQ3NDc0NztcXHJcXG4kQ19XQVJNX0dSQVlfOTA6ICMyMzIzMjM7XFxyXFxuXFxyXFxuLy8gV0FSTklOR1xcclxcbiRDX1dBUk5JTkc6ICNmNmE2MDk7XFxyXFxuJENfV0FSTklOR19EQVJLOiAjZTg5ODA2O1xcclxcbiRDX1dBUk5JTkdfTElHSFQ6ICNmZmJjMWY7XFxyXFxuXFxyXFxuLy8gUE9TSVRJVkVcXHJcXG4kQ19QT1NJVElWRTogIzZjZGQ4MztcXHJcXG4kQ19QT1NJVElWRV9EQVJLOiAjM2VkMTYwO1xcclxcbiRDX1BPU0lUSVZFX0xJR0hUOiAjOTJlNmEzO1xcclxcblxcclxcbi8vIE5FR0FUSVZFXFxyXFxuJENfTkVHQVRJVkU6ICNmYjRlNGU7XFxyXFxuJENfTkVHQVRJVkVfREFSSzogI2U5M2MzYztcXHJcXG4kQ19ORUdBVElWRV9MSUdIVDogI2ZmNjI2MjtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoaWRkZW5cIjogXCJtYXBfaGlkZGVuX18xa0JLT1wiLFxuXHRcIndyYXBcIjogXCJtYXBfd3JhcF9fM0d2bGhcIixcblx0XCJhY3RpdmVcIjogXCJtYXBfYWN0aXZlX18zYzF1VlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9rb3JlYU1hcC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25MaXN0IGZyb20gXCIuL2xvY2F0aW9uTGlzdFwiO1xyXG5pbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IEtvcmVhTWFwID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblx0XHRcdDxMb2NhdGlvbkxpc3QvPlxyXG5cdFx0XHQ8TWFwLz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS29yZWFNYXA7XHJcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBMT0NBVElPTl9EQVRBIH0gZnJvbSBcInNyYy9zdG9yZS9rb3JlYU1hcFVJU3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSBcInNyYy91dGlsL3N0b3JlUHJvdmlkZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2NhdGlvbkxpc3QubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTG9jYXRpb24ge1xyXG5cdG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTG9jYXRpb24gPSBvYnNlcnZlcigoe25hbWV9OiBMb2NhdGlvbikgPT4ge1xyXG5cdGNvbnN0IHtrb3JlYU1hcFVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge2lzU2VsZWN0ZWQsIHRvZ2dsZUxvY2F0aW9ufSA9IGtvcmVhTWFwVUlTdG9yZTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxsaVxyXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB0b2dnbGVMb2NhdGlvbihuYW1lKX1cclxuXHRcdFx0Y2xhc3NOYW1lPXtjeCgnbG9jYXRpb24nLCB7J2FjdGl2ZSc6IGlzU2VsZWN0ZWQobmFtZSl9KX1cclxuXHRcdD5cclxuXHRcdFx0e25hbWV9XHJcblx0XHQ8L2xpPlxyXG5cdClcclxufSlcclxuXHJcbmNvbnN0IExvY2F0aW9uTGlzdCA9ICgpID0+IHtcclxuXHRjb25zdCBsaXN0ID0gTE9DQVRJT05fREFUQS5tYXAoKG5hbWUpID0+IHtcclxuXHRcdHJldHVybiA8TG9jYXRpb24ga2V5PXtuYW1lfSBuYW1lPXtuYW1lfS8+XHJcblx0fSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17Y3goJ2xvY2F0aW9uV3JhcCcpfT57bGlzdH08L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkxpc3Q7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9sb2NhdGlvbkxpc3QubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9sb2NhdGlvbkxpc3QubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gXCJzcmMvdXRpbC9zdG9yZVByb3ZpZGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbWFwLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgTWFwID0gKCkgPT4ge1xyXG5cdGNvbnN0IHtrb3JlYU1hcFVJU3RvcmV9ID0gdXNlU3RvcmVzKCk7XHJcblx0Y29uc3Qge2lzU2VsZWN0ZWQsIHRvZ2dsZUxvY2F0aW9ufSA9IGtvcmVhTWFwVUlTdG9yZTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG5cdFx0dG9nZ2xlTG9jYXRpb24oZS50YXJnZXQuZGF0YXNldC5sb2NhdGlvbik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHQ8c3ZnIGRhdGEtbG9jYXRpb249XCLrjIDtlZzrr7zqta1cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30gd2lkdGg9XCIyNjVcIiBoZWlnaHQ9XCIzMjBcIiB2aWV3Qm94PVwiMCAwIDI2NSAzMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9e2N4KHsnYWN0aXZlJzogaXNTZWxlY3RlZCgn7ISc7Jq47Yq567OE7IucJyl9KX0gZGF0YS1sb2NhdGlvbj1cIuyEnOyauO2KueuzhOyLnFwiIGQ9XCJNNTguNTQ1MSA3NS4zNzk1QzU4LjUyMzYgNzUuMjM2NiA1OC40NzExIDc1LjEgNTguMzkxMiA3NC45Nzk1QzU4LjMxMTMgNzQuODU5IDU4LjIwNiA3NC43NTc1IDU4LjA4MjcgNzQuNjgyQzU3Ljk1OTQgNzQuNjA2NiA1Ny44MjEgNzQuNTU5MSA1Ny42NzczIDc0LjU0MjlDNTcuNTMzNyA3NC41MjY2IDU3LjM4ODIgNzQuNTQyMSA1Ny4yNTExIDc0LjU4ODFMNTUuMDQyOCA3NS4yODAzQzU0Ljc1ODEgNzUuMzc5NSA1NC42NTg5IDc1LjM0MDcgNTQuMzk1OCA3NS4xNzQ3TDU0LjMwNTIgNzUuMTE2NEM1NC4xNzgyIDc1LjAzMjQgNTQuMDcxNSA3NC45MjEgNTMuOTkzMiA3NC43OTA0QzUzLjkxNDggNzQuNjU5OCA1My44NjY3IDc0LjUxMzMgNTMuODUyMyA3NC4zNjE2TDUyLjc5OTkgNjYuMjE0QzUyLjUyODIgNjMuMjY4MSA0OS4xNjE3IDY0LjQ1NjQgNDcuNDA4NCA2NC45NDU5QzQ2Ljk3NzEgNjUuMDY2NyA0NS44Nzk0IDY1LjIwMjYgNDUuNTAyIDY1LjQ1N0M0NC45ODIzIDY1LjgwODYgNDQuNjg2OCA2Ni42NjkxIDQ0LjU0MDIgNjcuMjcwN0M0NC4zOTM1IDY3Ljg3MjQgNDQuNzA2MiA2OC4zMDE2IDQ0LjA1MDYgNjguNTc5OEM0My41MjUzIDY4LjgxNjQgNDIuOTM0OSA2OC44NjY3IDQyLjM3NzEgNjguNzIyMUM0Mi4xNTgyIDY4LjYzNjIgNDEuOTIxOCA2OC42MDM2IDQxLjY4NzggNjguNjI3M0M0MS40NTM4IDY4LjY1MDkgNDEuMjI4NyA2OC43MyA0MS4wMzE0IDY4Ljg1OEM0MC43ODYyIDY5LjAxODcgNDAuNTAwNyA2OS4xMDY5IDQwLjIwNzYgNjkuMTEyNUM0MC4wMzgyIDY5LjEwOTYgMzkuODcyNiA2OS4xNjIzIDM5LjczNTkgNjkuMjYyM0MzOS41OTkyIDY5LjM2MjQgMzkuNDk5IDY5LjUwNDQgMzkuNDUwNiA2OS42NjY3QzM5LjMzODUgNzAuMDM1NSAzOS4yNzM4IDcwLjcxMDUgMzkuMDYyNCA3MS4wMjk3QzM4LjgxNDQgNzEuMzU0MiAzOC41MjQzIDcxLjY0NDMgMzguMTk5OCA3MS44OTIzQzM3LjU1MjggNzIuNDMzNiAzNi44MzkgNzIuNzcyMiAzNi4xMjA4IDczLjE4NjNDMzUuNTEyNyA3My41NCAzNC42MTEyIDczLjUyNDkgMzMuOTQ3IDczLjM0OEMzMy43Mzk2IDczLjI3OTMgMzMuNTE0OSA3My4yODQ4IDMzLjMxMTEgNzMuMzYzNUMzMy4xMDczIDczLjQ0MjEgMzIuOTM3MiA3My41ODkxIDMyLjgyOTkgNzMuNzc5M0MzMi42MzE1IDc0LjEwNzEgMzIuNjI5MyA3NC41MTA0IDMyLjQ1NjggNzQuODU3NkMzMi4yNjA1IDc1LjI1MjMgMzEuMjk4NyA3NS41Nzc5IDMxLjA1NSA3NS45MzU5QzMwLjM4IDc2Ljk1NiAzMS41NTc1IDc3Ljc3MzQgMzIuMjQxMSA3OC42MTY2TDMyLjI5MDcgNzguNjc3QzMyLjU2MjkgNzguOTY0OCAzMi44ODUyIDc5LjIwMDkgMzMuMjQxOCA3OS4zNzM1QzMzLjY1NTggNzkuNjE5NCAzNC4xOTkzIDc5Ljc3NjggMzQuMzgyNiA4MC4yMDgxQzM0LjU5ODMgODAuNzI3OSAzNC40ODQgODAuODU1MSAzNC41MzE0IDgxLjQyMjNDMzQuNTMwMiA4MS43MDMxIDM0LjQ4NDMgODEuOTgxOSAzNC4zOTU2IDgyLjI0ODNDMzQuMzUzOCA4Mi4zOTczIDM0LjMzIDgyLjU1MDggMzQuMzI0NCA4Mi43MDU1QzM0LjM0OTMgODMuMjI4MSAzNC40NDg4IDgzLjc0NDQgMzQuNjE5OCA4NC4yMzg4QzM0Ljc2ODYgODQuNTE3IDM0LjkyMTggODQuNzk1MiAzNS4wNzcgODUuMDcxM0MzNS40NjUyIDg1Ljc1NzEgMzUuOTk3OSA4NS44MDY3IDM2LjcwMSA4NS41ODAyQzM3LjQwNCA4NS4zNTM4IDM4LjE1ODggODUuNTgwMiAzOC44MzYgODUuODU4NEMzOS44MzAyIDg2LjI1NzQgNDAuNjA2NSA4OC4xODU0IDQxLjc0MDkgODcuNzUxOUM0Mi42ODU1IDg3LjM4OTYgNDQuMDc0MyA4Ny4yMzY1IDQ1LjA5MjMgODcuMTk1NUM0Ni4zODYyIDg3LjE0MTYgNDcuNzUzNSA4Ny4yMTA2IDQ4Ljk0MzkgODcuODA1OEM0OS41NzU4IDg4LjEyMjkgNTAuMjc4OSA4OC45NjE4IDUwLjk0MzEgODguMzAxOEw1Ni44Mjg0IDgyLjIzOTdDNTcuMTIzOSA4MS45NDY0IDU3LjY0MTUgODEuNDk3OCA1Ny40NzU0IDgxLjExMzlMNTYuODk5NiA3OS43NzY4QzU2LjggNzkuNTQ1IDU2Ljc5IDc5LjI4NDUgNTYuODcxNiA3OS4wNDU3TDU2LjkxOSA3OC45MDEzQzU2Ljk5OTYgNzguNjY0OSA1Ny4xNjQ3IDc4LjQ2NjcgNTcuMzgyNyA3OC4zNDQ5TDU3Ljg3NjUgNzguMDY4OEM1OC4wNTg1IDc3Ljk2NzggNTguMjA0OSA3Ny44MTMyIDU4LjI5NiA3Ny42MjYxQzU4LjM4NzEgNzcuNDM5IDU4LjQxODMgNzcuMjI4NCA1OC4zODU1IDc3LjAyMjlMNTguNTQ1MSA3NS4zNzk1WlwiIGZpbGw9XCIjRTdFOEVBXCIgLz5cclxuXHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9e2N4KHsnYWN0aXZlJzogaXNTZWxlY3RlZCgn6rK96riw64+EJyl9KX0gZGF0YS1sb2NhdGlvbj1cIuqyveq4sOuPhFwiIGQ9XCJNMzUuMzYxNyA4OC4xNzlDMzUuMzQ0NCA4OC4yMDcgMzUuMzI3MiA4OC40NDg2IDM1LjMxMjEgODguNDcyM0wzNC43OTY2IDg5LjE5NDdDMzQuNjE5OCA4OS40NDA2IDM0LjM4MjYgODkuNjAyMyAzNC41ODEgODkuODc0MUMzNC44NzQzIDkwLjI3NTIgMzUuNjg1MiA5MC44MTg2IDM1LjkzOTYgOTEuMjVDMzYuOTU5NyA5Mi45OTAzIDM3LjIzMzYgOTIuMTQ5MyAzNy4wODI2IDk0LjIzNjlDMzYuOTc5MyA5NS41NjE4IDM2LjUwOCA5Ni44MzE2IDM1LjcyMTggOTcuOTAzMUMzNS4wNzQ4IDk4Ljc5MTYgMzQuMDcyIDk5LjEyMTUgMzMuNDgzMyAxMDAuMDE5QzMyLjc4ODkgMTAxLjA3OCAzMi41NDUyIDEwMi41NTEgMzIuNjIwNyAxMDMuNzkzQzMyLjc1NjUgMTA1Ljc3MiAzMy44MDI1IDEwNy4wODIgMzQuOTMyNSAxMDguNTg5QzM2LjAxMDggMTEwLjAxNCAzNi45MDE1IDExMS41NjcgMzguNzE3MyAxMTIuMTNDNDAuNTgyOCAxMTIuNzA2IDQyLjQwNzMgMTEzLjE4OSA0Mi43MzI5IDExNS40OTJDNDIuOTQ4NiAxMTYuOTc0IDQyLjgyMzUgMTE3LjY5MiA0My41NDM4IDExOS4wMjdDNDQuMjQ5OSAxMjAuMzk2IDQ1LjA0MjMgMTIxLjcxOCA0NS45MTYgMTIyLjk4NkM0Ni45ODE0IDEyNC40NzkgNDcuMTA0MyAxMjguNjM3IDQ4LjY4OTQgMTI3LjU1NkM1MC45OTA1IDEyNS45ODggNTQuMzYzNCAxMjQuODc4IDU2LjMyMTYgMTI0Ljg1NEM2MC44Mjg5IDEyNC43OTggNjUuNDkzNiAxMjIuNzQ5IDcwLjA4MjggMTI1LjA4OUM3MS4yMjE1IDEyNS42NjkgNzMuNDk0NiAxMjYuMzE2IDc0LjY0MTkgMTI1Ljc1M0M3NS4wNzMyIDEyNS41MzggNzUuNDIyNiAxMjUuMTczIDc1LjgwNDMgMTI0Ljg3MUM3Ni40NTEzIDEyNC4zNjkgNzcuMTkxIDEyNC4wMzcgNzcuODcyNCAxMjMuNTk3Qzc4LjYxNDMgMTIzLjEyIDc5LjIwMDkgMTIyLjI3NSA3OS45ODE2IDEyMS44NjFDODAuODYzNiAxMjEuMzk1IDgxLjk3IDEyMS4xMDQgODIuODk5NSAxMjAuNjQyQzg0LjQ1NjUgMTE5Ljg2NiA4Ni4xMzQ0IDExOC43MTYgODcuNzc1NSAxMTguMTlDODkuMzI4MyAxMTcuNjk2IDkwLjYxNzkgMTE3LjM5MiA5Mi4wNjcxIDExNi41MzRDOTMuNTE2NCAxMTUuNjc2IDk0LjU1MzcgMTE0LjMyOCA5NS45NjQxIDExMy4zODNDOTcuNDM5MiAxMTIuMzk1IDk2LjQ1MzcgMTEzLjAwNCA5Ny43MzQ3IDExMS43NzRDOTguMTQ0NCAxMTEuMzgyIDk4LjU0MiAxMTAuOTc3IDk4LjkyNzMgMTEwLjU2Qzk4Ljk1MzEgMTEwLjUzNCA5OC4yNTQ0IDEwOS4zMTYgOTguMTk0IDEwOS4xNjlDOTcuNTIxMiAxMDcuNTMgOTYuNzUzNCAxMDUuMzc4IDk4LjUwNjcgOTguMTcwNUM5OS4wOTU1IDk1Ljc1MDggOTkuODU2OCA5My41MzYgMTAwLjAyOSA5MS4wNTM3QzEwMC4xOCA4OC44NzEzIDEwMC4xOCA4Ni4wNjM0IDEwMC4xOCA4My44NTkzQzEwMC4xOCA4Mi42MTcxIDk5LjM0MzUgODIuMDE5OCA5OC4zMjM0IDgxLjU1MThDOTcuMDU2OCA4MC45NjA0IDk1LjgyNjIgODAuMjk1MSA5NC42Mzc4IDc5LjU1OTFDOTIuMDM2OSA3Ny45NzE4IDg5LjcyMDggNzYuMzY1MiA4Ny44ODU1IDczLjg5MTZDODYuODI2NiA3Mi40NjM5IDg3LjE1NDQgNzEuNTkwNSA4Ni41OTE1IDY5Ljk2NDRDODYuMjQ0MyA2OC40ODI4IDg1LjM4ODIgNjYuMDMwOCA4NS41NTY0IDY0LjgwMTVDODUuNzM1NCA2My41MDc2IDg2LjIwMzQgNjMuMTA4NiA4Ni42NTE5IDYxLjgzNEM4Ny4xNjk1IDYwLjMzNTIgODcuODc5IDU5LjI1OTEgODguMjMwNiA1Ny43NjI0Qzg4LjYwOCA1Ni4xNjIyIDg4LjE0MjEgNTQuNDg4NyA4Ni42OTA4IDUzLjc3NDlDODUuNDE4NCA1My4xNDk0IDgzLjczMTkgNTMuMjM3OSA4My4wMzc1IDUxLjg0OUM4Mi42NDI4IDUxLjA2MTkgODIuNjcwOSA0OS44NDM0IDgyLjM0NTIgNDguOTc4NkM4MS45NzIxIDQ3Ljk5MDkgODEuMjQ1NCA0NS45NzIzIDgwLjQ1NiA0NS4yNTYzQzc4Ljk4NzQgNDMuOTIxNCA3Ny4zMDMxIDQ0LjIyNTUgNzUuNDc0MyA0My44MjY1QzczLjg0NzUgNDMuNTEyMyA3Mi4yOTE3IDQyLjkwNDMgNzAuODgyOSA0Mi4wMzIyQzY4LjIyMTcgNDAuNDEyNiA2Ni40OTg2IDM4LjI5OTEgNjQuNTY2MyAzNS45MTgzQzY0LjE1MjIgMzUuNDA3MSA2My43MjA5IDM0Ljg4MzEgNjMuMTMyMSAzNC41ODk4QzYxLjc1NDEgMzMuOTAxOCA1OS44ODIxIDM0LjQxOTQgNTguNDI2NCAzNC41MjA4QzU2LjgxNzYgMzQuNjMwOCA1NC4wMzM1IDMzLjI5OCA1Mi42OTIxIDMyLjQxNkM1Mi40MTQxIDMyLjI0OTggNTIuMTcyMiAzMi4wMjk4IDUxLjk4MDQgMzEuNzY5QzUxLjk1NjUgMzEuNzMzMyA1MS45MzU2IDMxLjY5NTggNTEuOTE3OCAzMS42NTY4QzQ2Ljg0OTkgMzIuMDQ1IDQ0LjI1MTIgMzMuMTkyMyAzOS43MzUzIDM1LjgwNEMzOC43OTggMzYuMzEzNyAzNy45MDM3IDM2Ljg5ODYgMzcuMDYxMSAzNy41NTNDMzYuMjg0NyAzOC4xOTk5IDM1Ljg3MDYgMzkuMDM2NyAzNS4xOTEzIDM5LjcwOTZDMzMuNjgxNyA0MS4yMTkyIDMyLjA0MDUgNDIuMTEyIDMwLjg3ODEgNDQuMDIyN0MyOS40NTQ4IDQ2LjM1NCAyNy40Mjc2IDQ4LjEyMDMgMjUuNDM0OSA0OS45NzI4QzI0LjQ5MjUgNTAuODUyNyAyNC45MTUxIDUyLjE5ODQgMjQuOTQ5NyA1My4zMTU1QzI0Ljk5MDYgNTQuNTUzNCAyNC41Nzg3IDU1LjU2NDggMjQuMDM1MiA1Ni42NzEyQzIzLjQxNDEgNTcuOTI2MyAyMy4wMjE3IDU5LjE1MzQgMjIuMzYxNyA2MC4yNDQ2QzIxLjg3NzIgNjEuMDYzMiAyMS4yMTM2IDYxLjc2MTQgMjAuNDIwOCA2Mi4yODY5QzE5LjM1NTQgNjIuOTk0MyAxNy45MDQxIDYzLjQzNjQgMTYuNjU1NCA2My42NjcxQzE1LjU4NzkgNjMuODYzNCAxNC41MzMzIDYzLjYxOTcgMTMuNDgzIDY0LjA1NTNDMTIuMzYzOCA2NC41MTkgMTIuMTY5NyA2NS4zNjQ0IDEyLjEzMDkgNjYuNDQyN0MxMi4wNTU0IDY4LjM5ODcgMTMuOTQ4OSA2OC4xODk1IDE0Ljk2MDMgNjkuMjYxNEMxNi4wMTQ5IDcwLjM4MjggMTYuNDQ4NCA3MS42NTA5IDE3LjcxODYgNzIuNjIxM0MxOS41NzMzIDc0LjAzNiAyMS4zMDI5IDczLjE3MTMgMjMuNDY1OSA3My4yMDE0TDI3LjE4MzkgNzIuODI4NEMyNy41NTQ4IDcyLjc5MTcgMjguNzgxOSA3MS42NDY1IDI5LjAxOTEgNzEuOTMzNEwzMC4zMzI1IDczLjgyMjVDMzAuNDA2NyA3My45MjM3IDMwLjUxNCA3My45OTU3IDMwLjYzNTcgNzQuMDI2QzMwLjc1NzQgNzQuMDU2NCAzMC44ODU5IDc0LjA0MzEgMzAuOTk4OSA3My45ODg2TDMxLjIxNDYgNzMuODgyOUMzMS40NTY0IDczLjc2MTQgMzEuNjYwMSA3My41NzU2IDMxLjgwMzMgNzMuMzQ1OUMzMS44OTYxIDczLjE5NzEgMzEuOTQ1NCA3My4wMjUzIDMxLjk0NTYgNzIuODQ5OUMzMS45NDU2IDcyLjEyNzUgMzEuNjUyMyA3MC44MjcgMzIuODY0MyA3MS4xMzk3QzMzLjQwMTMgNzEuMjc3OCAzMy45NzcxIDcyLjI4MjcgMzQuNTcwMiA3Mi4yNTI1QzM1LjE0NjUgNzIuMjQyMSAzNS43MTMxIDcyLjEwMjggMzYuMjI4NiA3MS44NDQ5TDM2LjM5MDQgNzEuNzUwMUMzNi45MjUzIDcxLjM2NjEgMzcuMzY3NSA3MC44NjczIDM3LjY4NDMgNzAuMjlDMzcuOTg0MSA2OS44MDI3IDM4LjAyNzIgNjkuMzk3MiAzOC4wNzY4IDY4Ljg1ODFDMzguMTI2NCA2OC4zMTg5IDM4LjQzMDUgNjcuODI5NCAzOS4yMjYzIDY3Ljg3MjVMNDAuMDg4OSA2Ny41OTg2QzQwLjUyMDIgNjcuMjk4OCA0MC45MDQxIDY3LjU0MjUgNDEuMzEzOSA2Ny41NTU1QzQxLjcxMjcgNjcuNTYzNCA0Mi4xMDg5IDY3LjQ5IDQyLjQ3ODQgNjcuMzM5OEM0My4xMDM4IDY3LjA4MSA0My4yMTE3IDY2LjY5MjggNDMuMzU2MiA2Ni4xMTdDNDMuNTAwNyA2NS41NDEyIDQzLjc3NDUgNjQuOTUyNSA0NC4yNjg0IDY0LjYyNDdDNDQuNjM5MiA2NC40MDIxIDQ1LjA0MzMgNjQuMjQwNSA0NS40NjUzIDY0LjE0NTlDNDYuNDk0IDYzLjg2MzQgNTMuODc2IDYyLjAxNTIgNTQuMDQ0MiA2My44NjU2TDU1LjA1NTcgNzIuNDkxOUM1NS4wODM3IDcyLjc3ODggNTUuMjQxMiA3My40NzEgNTUuNDg3IDczLjYyNjNMNTUuNTczMyA3My42ODI0QzU1LjY5MjcgNzMuNzU4OCA1NS44Mjc5IDczLjgwNzIgNTUuOTY4NyA3My44MjRDNTYuMTA5NSA3My44NDA4IDU2LjI1MjIgNzMuODI1NiA1Ni4zODYzIDczLjc3OTRMNTguMjc3NiA3My4xMzI0QzU4LjQwNzEgNzMuMDg4IDU4LjU0NDcgNzMuMDcyMyA1OC42ODA4IDczLjA4NjVDNTguODE2OSA3My4xMDA3IDU4Ljk0ODMgNzMuMTQ0NCA1OS4wNjU4IDczLjIxNDZDNTkuMTgzMiA3My4yODQ5IDU5LjI4NCA3My4zNzk5IDU5LjM2MDkgNzMuNDkzMUM1OS40Mzc4IDczLjYwNjMgNTkuNDg5MSA3My43MzQ5IDU5LjUxMTIgNzMuODdMNTkuNTY1MSA3NC4xOTU2QzU5LjYyOTggNzQuNTkwMyA2MC43MzE4IDc1LjQxNDEgNjAuMzgwMyA3NS42MDZMNjAuMzQxNSA3NS44NjI3QzYwLjEzNjYgNzUuOTc3IDU5Ljk3OTIgNzcuNDU2NCA1OS45MTAyIDc3LjY3ODVMNTkuODYyNyA3Ny44MTIyQzU5Ljc4NzIgNzguMDI3OSA1OC41MDE5IDc4LjcxMTUgNTguNTk2OCA3OC45MjcyTDU5LjE0MjQgODAuODI1QzU5LjI5NzcgODEuMTgzIDU5LjAwMjMgODIuMjQ4NCA1OC43MTExIDgyLjUyMjJMNTEuNTk0NCA4OS43MzgyQzUwLjk2NDYgOTAuMzU1IDQ5LjY2ODUgODkuNTcgNDkuMDY5IDg5LjI3NDVDNDcuOTM2OCA4OC43MTgxIDQ2LjQzMTUgODguNjU1NiA0NS4xODcxIDg4LjcwNTJDNDQuMDE2MSA4OC43OTM4IDQyLjg2MTcgODkuMDM1OSA0MS43NTM4IDg5LjQyNTVDNDAuNjc1NSA4OS44MzA5IDM5Ljc0MzkgODguMDQzMSAzOC43OTkzIDg3LjY3MjJDMzYuODMyNSA4Ni44OTggMzcuNDAxOCA4Ni45MTc0IDM2LjU2NTEgODcuMTgwNUMzNi4wNzUyIDg3LjM4OSAzNS42NTcgODcuNzM2IDM1LjM2MTcgODguMTc5Vjg4LjE3OVpcIiBmaWxsPVwiI0Y0RjRGNVwiIC8+XHJcblx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPXtjeCh7J2FjdGl2ZSc6IGlzU2VsZWN0ZWQoJ+yduOyynOq0keyXreyLnCcpfSl9IGRhdGEtbG9jYXRpb249XCLsnbjsspzqtJHsl63si5xcIiBkPVwiTTMzLjc2NTggODUuNjAxOEwzMi43MjIgODMuODIyNkMzMi42MTM3IDgzLjYzOCAzMi41NjA1IDgzLjQyNjIgMzIuNTY4OSA4My4yMTIzVjgzLjA4NzJDMzIuNTgyMiA4Mi44OTQ5IDMyLjY1MTEgODIuNzEwNSAzMi43NjczIDgyLjU1NjdDMzIuODY0OSA4Mi40MiAzMi45MzEyIDgyLjI2MzUgMzIuOTYxNCA4Mi4wOTgzQzMyLjk5MTUgODEuOTMzMSAzMi45ODQ5IDgxLjc2MzIgMzIuOTQxOCA4MS42MDA5QzMyLjg5ODcgODEuNDM4NiAzMi44MjA0IDgxLjI4NzggMzIuNzEyMyA4MS4xNTkyQzMyLjYwNDIgODEuMDMwNyAzMi40NjkxIDgwLjkyNzYgMzIuMzE2NiA4MC44NTczTDMxLjMyMDIgODAuMzk3OUwzMS4yODM2IDgwLjQyNkwzMS4xNjUgODAuMjc5M0wzMS4wNjE0IDgwLjE5OTVMMjkuNTQ3NSA3OC4xMDExTDI5LjAyMzQgNzUuNjQ5MUMyOC44NzEzIDc1LjI2NjcgMjguNjA2NCA3NC45Mzk1IDI4LjI2NCA3NC43MTExQzI3LjkyMTYgNzQuNDgyNyAyNy41MTc4IDc0LjM2MzggMjcuMTA2MiA3NC4zNzAySDI3LjAyODZMMjIuMzYzOSA3NS4zOTg5TDIxLjU3NDYgNzUuNDc4N0MyMS4zNDc1IDc1LjUwMDYgMjEuMTMyNSA3NS41OTA5IDIwLjk1NzggNzUuNzM3NUwyMC40MjMgNzYuMTg2MUMyMC4yODgxIDc2LjI5OCAyMC4xODEgNzYuNDM5NSAyMC4xMDk5IDc2LjU5OTZDMjAuMDM4OCA3Ni43NTk3IDIwLjAwNTcgNzYuOTM0MSAyMC4wMTMyIDc3LjEwOTFMMjAuMDc3OSA3OC42MzZDMjAuMDkgNzguOTE2MiAyMC4yMDQ4IDc5LjE4MjIgMjAuNDAwNSA3OS4zODMxQzIwLjU5NjMgNzkuNTgzOSAyMC44NTkxIDc5LjcwNTcgMjEuMTM4OSA3OS43MjUxQzIyLjAyOTYgNzkuNzgxMSAyMy4xMDU4IDc5LjQ4MTQgMjMuNTQ3OSA4MC40NDk3QzIzLjk5IDgxLjQxOCAyMy44NTQxIDgyLjcxNjMgMjMuMzMyMiA4My42MTk5QzIzLjIwNzcgODMuODM2OCAyMy4wNTg2IDg0LjAzODcgMjIuODg4IDg0LjIyMTZDMjIuMzUzNCA4NC44MDUgMjEuNjEwMSA4NS4xNTM4IDIwLjgxOTggODUuMTkyQzE5LjkwMzIgODUuMjE3OSAxOS42ODU0IDg0LjkzMzIgMTkuMDk0NSA4NC40MjQzQzE4LjcxNDkgODQuMDk4NiAxOC4yODE1IDg0LjE1NDcgMTcuODIgODQuMTcyQzE3LjYyMzQgODQuMTgyNyAxNy40MzI5IDg0LjI0MzYgMTcuMjY2NiA4NC4zNDg4QzE3LjEwMDIgODQuNDU0IDE2Ljk2MzUgODQuNTk5OSAxNi44Njk1IDg0Ljc3MjhDMTYuNzc1NSA4NC45NDU4IDE2LjcyNzMgODUuMTM5OCAxNi43Mjk0IDg1LjMzNjZDMTYuNzMxNiA4NS41MzM0IDE2Ljc4NCA4NS43MjY0IDE2Ljg4MTggODUuODk3MkMxNy4xNDI4IDg2LjMzOTMgMTcuNTY1NSA4Ni4zNTAxIDE3LjkzNjQgODYuNjE1NEMxOC40MTk1IDg2Ljk1NjEgMTguNTY0IDg3LjYzMzMgMTguNjMzIDg4LjE5MTlDMTguNzIzNiA4OC45MjUxIDE4LjM2MzQgODkuNjY0OCAxOC40ODg1IDkwLjQwMjRDMTguNjQzOCA5MS4zMTI0IDE5LjU2NjggOTEuNDk1OCAyMC4zMTA4IDkxLjgxMjhDMjAuODIwNyA5Mi4wNDc1IDIxLjM2NyA5Mi4xOTM0IDIxLjkyNjEgOTIuMjQ0MUMyNC4yMjkzIDkyLjQ0MDMgMjUuODA4IDkxLjQ1OTEgMjcuNTYzNCA5MC4xOTFMMjkuMjI4MyA4OC45NzY4QzI5LjgyMTQgODguNTQ1NSAzMC4zNjQ4IDg4LjA3NTQgMzEuMTAwMiA4Ny44OTg2QzMxLjIzNjkgODcuODUzMSAzMS4zODM4IDg3Ljg0ODIgMzEuNTIzMSA4Ny44ODQ2QzMxLjY2MjUgODcuOTIxIDMxLjc4ODMgODcuOTk3IDMxLjg4NTMgODguMTAzNEMzMi4wODggODguMjk5NyAzMi4zMTY2IDg4LjA3NzUgMzIuNTk0OCA4Ny44MzE3TDMyLjcxMzQgODcuNzI4MkwzMy41MjIxIDg3LjAyM0MzMy43MjAyIDg2Ljg1MDQgMzMuODUyNSA4Ni42MTQ3IDMzLjg5NjkgODYuMzU1OEMzMy45NDEzIDg2LjA5NjggMzMuODk1IDg1LjgzMDUgMzMuNzY1OCA4NS42MDE4Vjg1LjYwMThaXCIgZmlsbD1cIiNFN0U4RUFcIiAvPlxyXG5cdFx0XHRcdDxwYXRoIGNsYXNzTmFtZT17Y3goeydhY3RpdmUnOiBpc1NlbGVjdGVkKCfrtoDsgrDqtJHsl63si5wnKX0pfSBkYXRhLWxvY2F0aW9uPVwi67aA7IKw6rSR7Jet7IucXCIgZD1cIk0xODQuMzUyIDI0MS42ODdDMTg0LjQ0MyAyNDEuNTU4IDE4NC41MzMgMjQxLjQzMSAxODQuNjMgMjQxLjMwNEMxODQuOTIxIDI0MC45MTggMTg1LjI1MSAyNDAuNDU0IDE4NS4xIDIzOS45OTVDMTg0Ljk3NSAyMzkuNjE3IDE4NC41NzIgMjM5LjQxNyAxODQuMjA1IDIzOS4yNTdDMTgzLjY5NCAyMzkuMDQxIDE4My4xNyAyMzguODI2IDE4Mi42NzkgMjM4LjU1NkMxODEuNiAyMzcuOTcyIDE3OC43NiAyMzYuOTQ3IDE3Ny42MDIgMjM2LjUxNkMxNzYuNzY1IDIzNi4yMDUgMTc2LjA5MiAyMzYuNjE5IDE3NS43IDIzNy4zOTRDMTc1LjYzMyAyMzcuNTM0IDE3NS41NzMgMjM3LjY3OCAxNzUuNTIxIDIzNy44MjVDMTc1LjIzMiAyMzguNTY3IDE3NC43OTggMjM5LjYgMTc0LjEzOCAyNDAuMDgzQzE3My41ODQgMjQwLjQ4NiAxNzIuODMyIDI0MC43ODYgMTcyLjIzIDI0MS4xNDRDMTcwLjgwMiAyNDIuMDA3IDE2OS43OTkgMjQyLjgzNyAxNjguNDE1IDI0My43NThDMTY2Ljc3IDI0NC44MTUgMTY1LjI1MSAyNDYuMDU1IDE2My44ODYgMjQ3LjQ1NEMxNjMuMDg4IDI0OC4zIDE2Mi41NDcgMjQ5LjM1MiAxNjEuNzU3IDI1MC4yMDRDMTYxLjQ4NSAyNTAuNTIxIDE2MS4xNjQgMjUwLjc5MSAxNjAuODA2IDI1MS4wMDZDMTYwLjIyIDI1MS4zMjUgMTU5LjMzMyAyNTEuMDA2IDE1OC45MzkgMjUxLjYyOUMxNTguMDI5IDI1My4wOTQgMTU4Ljk2MyAyNTQuODQxIDE1OS42NjYgMjU2LjAzMUMxNjAuMzQxIDI1Ny4xNzYgMTYyLjE5MSAyNTguNDgzIDE2Mi43MTUgMjU5LjY5N0MxNjMuMDU4IDI2MC40ODkgMTYzLjI1IDI2MS4yNDggMTYzLjg3NyAyNjEuODczQzE2NC41MDUgMjYyLjQ5OSAxNjYuMDE1IDI2Mi41NCAxNjYuODk3IDI2Mi41OTZDMTY3Ljg5NyAyNjIuNjYgMTY4LjkyOCAyNjEuNzA5IDE2OS43NSAyNjEuMjE1QzE3MC4wODUgMjYwLjk5MiAxNzAuNDQ3IDI2MC44MTIgMTcwLjgyOCAyNjAuNjgxQzE3MS4yMyAyNjAuNTc3IDE3MS42NDUgMjYwLjUzMyAxNzIuMDYgMjYwLjU0OUMxNzQuMDIgMjYwLjU0OSAxNzUuNzY5IDI2MS4xODEgMTc3LjY3NyAyNjEuNDM1QzE3OC4zNDggMjYxLjUyNiAxNzkuMTE4IDI2MS42NyAxNzkuNzU5IDI2MS4zNzNDMTgwLjI3NiAyNjEuMTMzIDE4MC44MzcgMjYwLjM5NCAxODAuNTkzIDI1OS43OTlDMTgwLjUxNiAyNTkuNjM1IDE4MC40MDcgMjU5LjQ4OSAxODAuMjc0IDI1OS4zNjdDMTc5LjkzNSAyNTkuMDU2IDE3OS41NDIgMjU4LjgwOSAxNzkuMTE0IDI1OC42NEMxNzguMzgxIDI1OC4zNDYgMTc3LjY3MyAyNTcuOTkzIDE3Ni45OTggMjU3LjU4NEMxNzYuNTExIDI1Ny4yNzcgMTc1Ljc5MyAyNTYuODUzIDE3NS42NTUgMjU2LjI0MkMxNzUuNDE3IDI1NS4xOTkgMTc3LjAxNSAyNTUuMTM4IDE3Ny41MzEgMjU0Ljg1NkMxNzguMDAyIDI1NC42MjMgMTc4LjQ0NCAyNTQuMzM0IDE3OC44NDQgMjUzLjk5M0MxNzkuNzA3IDI1My4xOTMgMTc5Ljk5OCAyNTEuNTYzIDE4MC40MjUgMjUwLjQ5M0wxODIuMjM0IDI0NS45NjRDMTgyLjgyNyAyNDQuNDc0IDE4My40NDYgMjQzLjAwMSAxODQuMzUyIDI0MS42ODdaXCIgZmlsbD1cIiNFN0U4RUFcIiAvPlxyXG5cdFx0XHRcdDxwYXRoIGNsYXNzTmFtZT17Y3goeydhY3RpdmUnOiBpc1NlbGVjdGVkKCfrjIDqtazqtJHsl63si5wnKX0pfSBkYXRhLWxvY2F0aW9uPVwi64yA6rWs6rSR7Jet7IucXCIgZD1cIk0xNTguMzIgMTg5LjYyMUMxNTcuNzcyIDE4Ny44ODUgMTU2Ljg1NiAxODcuMTQ1IDE1NS42NjMgMTg2Ljg5NUMxNTQuODg0IDE4Ni43MzMgMTUzLjk4OSAxODYuNTEzIDE1My4wMDQgMTg2LjYzQzE1MS40NzkgMTg2Ljg0OCAxNTAuMDIgMTg3LjM5NyAxNDguNzI5IDE4OC4yMzhDMTQ2LjcyMiAxODkuNjYgMTQ3LjI0MSAxOTEuMzY4IDE0Ni4wNiAxOTMuMjc0QzE0NS4zMzUgMTk0LjQ0MyAxNDQuMzM0IDE5NS40NjMgMTQzLjA5NCAxOTUuOTJDMTQyLjA5NCAxOTYuMjYyIDE0MS4wNzYgMTk2LjU1IDE0MC4wNDUgMTk2Ljc4M0MxMzguMDE2IDE5Ny4yODMgMTM3LjcwMSAxOTguNTc1IDEzOC42MTEgMjAwLjQ4OEMxMzkuNjU1IDIwMi42NzkgMTQwLjc4MiAyMDQuNDY3IDEzOS45MjYgMjA3LjAzN0MxMzkuNTI1IDIwOC4yNDcgMTM4Ljg1OSAyMDkuMzQzIDEzOC40ODEgMjEwLjU2M0MxMzguMTQ4IDIxMS42NjYgMTM4LjA1NiAyMTIuODI3IDEzOC4yMTIgMjEzLjk2OEMxMzguMzY3IDIxNS4xMDkgMTM4Ljc2NyAyMTYuMjAzIDEzOS4zODMgMjE3LjE3NUMxNDAuMDEzIDIxOC4xNDIgMTQwLjkwOCAyMTguOTY4IDE0MS45ODYgMjE5LjIwM0MxNDQuODM3IDIxOS44MjIgMTQ1LjczNCAyMTYuODMgMTQ2Ljg2OCAyMTQuODQyQzE0Ny45ODUgMjEyLjg4NiAxNDkuNzE1IDIxMS45OCAxNTEuNDM4IDIxMC43NzlDMTUyLjg0IDIwOS44MDIgMTU0Ljc3IDIwOC4yMTcgMTU1Ljg5MiAyMDYuODk3QzE1OS4wNjQgMjAzLjE1MSAxNTkuNjg3IDE5OC4xMDUgMTU5LjE0NiAxOTMuMTY2QzE1OC45ODYgMTkxLjk2IDE1OC43MSAxOTAuNzczIDE1OC4zMiAxODkuNjIxVjE4OS42MjFaXCIgZmlsbD1cIiNFN0U4RUFcIiAvPlxyXG5cdFx0XHRcdDxwYXRoIGNsYXNzTmFtZT17Y3goeydhY3RpdmUnOiBpc1NlbGVjdGVkKCfqtJHso7zqtJHsl63si5wnKX0pfSBkYXRhLWxvY2F0aW9uPVwi6rSR7KO86rSR7Jet7IucXCIgZD1cIk02MC42MDQ2IDI1Ni4xMzJDNTkuNzYxMyAyNTUuNDc2IDU5LjAxMTggMjU0LjcwOCA1OC4zNzY5IDI1My44NDhDNTcuNjkxMSAyNTIuOTYgNTcuMDIyNSAyNTEuMzQ3IDU1Ljc4OSAyNTEuMTYzQzU1LjA1NzkgMjUxLjA1NiA1NC4zMjQ2IDI1MS4yOTUgNTMuNjMyNCAyNTEuNTY1QzUyLjMzODQgMjUyLjA3MSA1MS4zODc0IDI1Mi43OTIgNDkuOTY2MiAyNTIuOTM4QzQ4LjYyNCAyNTMuMDc1IDQ3LjI2OTEgMjUyLjg2OCA0Ni4wMjgyIDI1Mi4zMzlDNDUuODA3NyAyNTIuMjMyIDQ1LjU3OTEgMjUyLjE0NCA0NS4zNDQ2IDI1Mi4wNzRDNDQuNDk5MiAyNTEuODU4IDQzLjY2NDYgMjUyLjI4OSA0My4xMTY4IDI1Mi45MDRDNDIuNjY0NSAyNTMuNDE3IDQyLjI0OCAyNTMuOTYxIDQxLjg3MDMgMjU0LjUzMkM0MS43MTA1IDI1NC44MDggNDEuNTEyMyAyNTUuMDYgNDEuMjgxNiAyNTUuMjhDNDEuMDUzIDI1NS40NzQgNDAuNzc0OCAyNTUuNTk1IDQwLjUyODkgMjU1Ljc2OEMzOS4zNzMgMjU2LjU2OCAzOS40NjM2IDI1OC42MjEgMzkuMjY5NSAyNTkuOTAyTDM4LjgwNTggMjYyLjk4OEMzOC40OTk2IDI2NS4wMzUgNDIuMjQ1NiAyNjQuMzMyIDQzLjI3ODYgMjY0LjQ1MkM0NC43MTcgMjY0LjYyMyA0NS45NzY1IDI2NS40MjUgNDcuMDcyIDI2Ni4zMjZDNDcuOTQ3NiAyNjcuMDQ1IDQ4LjQzNzEgMjY4LjQyIDQ5LjcyNjggMjY4LjQ1M0M1Mi45OTQgMjY4LjUzNSA1NS4zNTEyIDI2My43NDUgNTguNzcxNSAyNjUuMzI4QzU4LjkxMTcgMjY1LjM5MyA1OS4wNDc2IDI2NS40NjYgNTkuMTg5OSAyNjUuNTI0QzU5LjYzMyAyNjUuNzE4IDYwLjEyODggMjY1Ljc1NSA2MC41OTU2IDI2NS42MjlDNjEuMDYyNSAyNjUuNTAzIDYxLjQ3MjYgMjY1LjIyMiA2MS43NTg0IDI2NC44MzJDNjIuNjUxIDI2My43MTMgNjMuMjY1OSAyNjIuMzk5IDYzLjU1MjcgMjYwLjk5OEM2My43Njg0IDI1OS45NTQgNjMuOTY0NiAyNTguMzc5IDYzLjA4NjkgMjU3LjU2MkM2Mi43MTM4IDI1Ny4yMTUgNjIuMjI0MiAyNTcuMDQ3IDYxLjc1NjMgMjU2LjgyOUM2MS4zNTAzIDI1Ni42MzUgNjAuOTY0NSAyNTYuNDAyIDYwLjYwNDYgMjU2LjEzMlYyNTYuMTMyWlwiIGZpbGw9XCIjRTdFOEVBXCIgLz5cclxuXHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9e2N4KHsnYWN0aXZlJzogaXNTZWxlY3RlZCgn64yA7KCE6rSR7Jet7IucJyl9KX0gZGF0YS1sb2NhdGlvbj1cIuuMgOyghOq0keyXreyLnFwiIGQ9XCJNODUuMzc1MyAxNjUuNjE0Qzg1LjMzMzQgMTY1LjUwNiA4NS4yODUxIDE2NS40MDEgODUuMjMwOCAxNjUuMjk5Qzg1LjE2MTcgMTY1LjE2MyA4NS4wODIgMTY1LjAzNiA4NS4wMDIyIDE2NC45MDZDODQuNDE3NyAxNjMuOTU1IDgzLjc5NjYgMTYyLjk5MSA4My4zMDI4IDE2MS45ODZDODMuMTEwOCAxNjEuNTk2IDgyLjQ4OTcgMTYwLjM1NiA4Mi4xMDE1IDE2MC4xMTlDODEuMzY0IDE1OS42NjYgODAuMDU3MSAxNTkuMjggNzkuMzM4OSAxNTkuNTk5Qzc4Ljc5MzMgMTU5Ljg0IDc3LjU5NDMgMTYxLjIwOCA3Ny4yMDM5IDE2MS42NTRDNzYuMzAwMyAxNjIuNjk2IDc0LjIyNTcgMTYzLjAxNyA3My40Mzg1IDE2My4wMjFDNzIuOTEyNCAxNjIuOTk1IDcyLjM5MTIgMTYyLjkwNyA3MS44ODU4IDE2Mi43NThDNzEuNTE0OCAxNjIuNjcgNzAuODU0OSAxNjIuNDIgNzAuNTAxMiAxNjIuNjQ0QzcwLjE0NzYgMTYyLjg2OCA3MC4wOTM2IDE2My4yNjkgNzAuMDM1NCAxNjMuNjIzQzY5Ljk2NjQgMTY0LjA1NCA2OS43NTA3IDE2NC44OTEgNjkuNjYyMyAxNjUuMzE4QzY5LjQ4MzMgMTY2LjE2NiA2OS40NDY3IDE2Ny4wNDMgNjkuMzA4NiAxNjcuODkzQzY5LjE0MDQgMTY5LjAxNSA2OC45MjQ4IDE3MC4xMzggNjkuNTI0MyAxNzEuMjY0QzY5LjcwMzMgMTcxLjU5MiA2OS40NDAyIDE3My40MiA2OS41MDQ5IDE3My43OTZDNjkuNTg5IDE3NC4yOTYgNjkuOTUxMyAxNzUuNjQyIDcwLjQxMjggMTc2LjE2OEM3MS4zMTY0IDE3Ny4yMjMgNzIuMjU4OSAxNzcuODIyIDczLjQ2MjIgMTc4LjY0MkM3NC4zMTE5IDE3OS4yMiA3NS4zMzYzIDE3OS44MjggNzYuMzI4NCAxNzkuODcxQzc3LjY4MjcgMTc5LjkzMSA3OS4wODQ1IDE3OS44NzEgODAuMzY1NSAxNzkuMzE3QzgxLjMyOTUgMTc4Ljg4NSA4Mi4wMzA0IDE3OC40ODQgODIuOTUzNCAxNzcuOTg0QzgzLjkyMzkgMTc3LjQ2MiA4My45NDk3IDE3NS4yOSA4NC4xMDA3IDE3NC4zMThDODQuMjc5NyAxNzMuMTY4IDgzLjg4NTEgMTcxLjc3MyA4My45MzI1IDE3MC4zNTZDODMuOTU4NCAxNjkuNjE4IDg0LjQ4MjQgMTY4LjU4MyA4NC45NDE4IDE2OC4wMUM4NS4yMjc4IDE2Ny42ODkgODUuNDE5NyAxNjcuMjk1IDg1LjQ5NjIgMTY2Ljg3M0M4NS41NzI3IDE2Ni40NSA4NS41MzA4IDE2Ni4wMTQgODUuMzc1MyAxNjUuNjE0VjE2NS42MTRaXCIgZmlsbD1cIiNFN0U4RUFcIiAvPlxyXG5cdFx0XHRcdDxwYXRoIGNsYXNzTmFtZT17Y3goeydhY3RpdmUnOiBpc1NlbGVjdGVkKCfsmrjsgrDqtJHsl63si5wnKX0pfSBkYXRhLWxvY2F0aW9uPVwi7Jq47IKw6rSR7Jet7IucXCIgZD1cIk0xOTQuMzQxIDIxNi45MzhDMTk0LjA3NyAyMTYuNTU5IDE5My43NDQgMjE2LjIzMiAxOTMuMzYgMjE1Ljk3NEMxOTIuMTg4IDIxNS4yNDUgMTkwLjc5NiAyMTQuOTUyIDE4OS40MjkgMjE1LjE0NkMxODcuMzQ4IDIxNS40MiAxODUuMzU3IDIxNC41NiAxODMuNDMzIDIxMy45QzE4Mi40NjMgMjEzLjU2NiAxODEuNDcyIDIxMy4yOTYgMTgwLjQ2NiAyMTMuMDkxQzE3OS41MzIgMjEyLjkwMyAxNzguNjM1IDIxMy40MzggMTc3LjgyNCAyMTMuODg1QzE3Ni44MDYgMjE0LjQ0MyAxNzYuMzE0IDIxNi4yMTIgMTc1LjUzNiAyMTcuMDEyQzE3NC43NTcgMjE3LjgxMiAxNzIuMDYyIDIxOS4zNiAxNzEuMDc2IDIxOS45NzdDMTcwLjIxMyAyMjAuNTEgMTY3LjU0MSAyMjAuMDQyIDE2Ny40ODEgMjIxLjIxNUMxNjcuNDIxIDIyMi4zODggMTY5Ljg3MyAyMjUuMTE4IDE3MC41NzggMjI2LjAxOEwxNzMuODEzIDIzMC4xNTZDMTc0LjQxNCAyMzAuOTI4IDE3NS4wMTYgMjMxLjY5OSAxNzUuNjIgMjMyLjQ2OEMxNzYuMTEyIDIzMy4wOTggMTc2LjY4MyAyMzQuMjQ3IDE3Ny40NyAyMzQuNTIxQzE3OC41MTggMjM0Ljg4MyAxNzkuOTUgMjM0LjYxMiAxODAuODQzIDIzNS4zNTFDMTgxLjIzOCAyMzUuNjc3IDE4MS41MiAyMzYuMDIyIDE4MS45NzMgMjM2LjMxNUMxODIuNjIgMjM2LjcyMyAxODQuOTY5IDIzNy4xMzEgMTg1LjYwNSAyMzcuNTRDMTg1Ljk4NyAyMzcuODA1IDE4Ni40IDIzOC4wMjIgMTg2LjgzNCAyMzguMTg3QzE4OC4zMTYgMjM4LjY5NCAxODkuNzAzIDIzNy43MzIgMTg5LjYyMyAyMzYuMTFDMTg5LjU5NSAyMzUuNTM1IDE4OS4zNyAyMzQuOTc4IDE4OS4zNTggMjM0LjM4NUMxODkuMzQgMjMzLjQyMSAxODkuMzU4IDIzMi40NDQgMTg5LjQzNSAyMzEuNDkxQzE4OS40OTYgMjMwLjY2NyAxODkuNTg4IDIyOS44NDMgMTg5LjcxMyAyMjkuMDI2QzE4OS44IDIyOC40NzIgMTg5LjY2NCAyMjcuNDk1IDE5MC4zODIgMjI3LjMyMkMxOTEuMjQ1IDIyNy4xMDcgMTkxLjU5NiAyMjguNTg4IDE5Mi41MTkgMjI4LjYzNEMxOTMuNTk3IDIyOC42ODMgMTk0LjM0NCAyMjguMDMgMTk0LjQwNiAyMjYuOTcxQzE5NC40NzkgMjI1LjcyNiAxOTQuNDA2IDIyNC40NSAxOTQuNzkyIDIyMy4yNjhDMTk0Ljk1NiAyMjIuNzc2IDE5NS4yIDIyMi4zMSAxOTUuMzM4IDIyMS44MDhDMTk1LjY5OCAyMjAuNTE0IDE5NS4zMDEgMjE4LjQzOSAxOTQuNTg3IDIxNy4yNzlDMTk0LjUxIDIxNy4xNzMgMTk0LjQyOCAyMTcuMDU5IDE5NC4zNDEgMjE2LjkzOFpcIiBmaWxsPVwiI0U3RThFQVwiIC8+XHJcblx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPXtjeCh7J2FjdGl2ZSc6IGlzU2VsZWN0ZWQoJ+yEuOyihe2KueuzhOyekOy5mOyLnCcpfSl9IGRhdGEtbG9jYXRpb249XCLshLjsooXtirnrs4TsnpDsuZjsi5xcIiBkPVwiTTY5LjUwMjcgMTQ0LjY4OEM2OC43MDA1IDE0NC43MjUgNjcuNDcxMiAxNDQuNjE5IDY2Ljc4NzYgMTQ1LjAyMkM2Ni4xMDM5IDE0NS40MjYgNjQuODgzMyAxNDYuNDUgNjQuNjg5MiAxNDcuMjY3QzY0LjQ1NDEgMTQ4LjI2MiA2NC43MjggMTQ5LjU5IDY1LjM5ODcgMTUwLjM0OUM2Ni42MzIzIDE1MS43NDUgNjguMzgzNSAxNTMuMzIzIDY5LjMxNTEgMTU1LjQ4MkM2OS44MzkyIDE1Ni43IDcwLjY5MSAxNTkuMjI4IDcwLjU2MzggMTYwLjU0M0M3MC40NjI0IDE2MS41NzYgNzMuMDM5NSAxNjIuMjI2IDc0LjkzMDkgMTYxLjYyMkM3NS45MzU4IDE2MS4yOTYgNzcuMzE2MSAxNjAuMDEzIDc3LjczNDQgMTU5LjA2OEM3Ny45NTAxIDE1OC41NjYgNzguNjQyNCAxNTcuNTggNzguNjY4MiAxNTcuMDM1Qzc4LjkzMzUgMTUxLjI0IDc1LjQ1MjggMTQ2LjI1MiA3MC44MTgzIDE0NC44MjZDNzAuMzkwNCAxNDQuNzA4IDY5Ljk0NTggMTQ0LjY2MSA2OS41MDI3IDE0NC42ODhWMTQ0LjY4OFpcIiBmaWxsPVwiI0U3RThFQVwiIC8+XHJcblx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPXtjeCh7J2FjdGl2ZSc6IGlzU2VsZWN0ZWQoJ+qwleybkOuPhCcpfSl9IGRhdGEtbG9jYXRpb249XCLqsJXsm5Drj4RcIiBkPVwiTTE4NS44MjEgMTAyLjMyNEMxODUuNzQxIDEwMi4xMzkgMTg1LjY0NiAxMDEuOTYyIDE4NS41MzYgMTAxLjc5NEMxODUuMTQxIDEwMS4xODggMTg0LjQ1OCAxMDAuODIxIDE4My45NjYgMTAwLjI4NEMxODIuNjcyIDk4Ljg3MzUgMTgxLjY3NCA5Ny4xNjc2IDE4MC43NTcgOTUuNDg5OEMxNzguOTY5IDkyLjIyMDQgMTc3LjQxIDg4LjcxNTkgMTc0LjU1NSA4Ni4yMDU3QzE3My4yODcgODUuMDkwNyAxNzIuODkyIDgyLjY5NjkgMTcyLjM2OCA4MS4xNDYzQzE3MS43NiA3OS4zMzY5IDE3MS4xNzUgNzcuNTIxMSAxNzAuNTMzIDc1LjcyNDZDMTcwLjMwMyA3NS4wMzk2IDE3MC4wMzEgNzQuMzY5OCAxNjkuNzE3IDczLjcxOUMxNjcuNjg2IDY5Ljc0NjUgMTYzLjkxNCA2Ny40MjE3IDE2MC41OTEgNjQuNjI0NkMxNjAuNTYzIDY0LjU5OTcgMTYwLjUzNiA2NC41NzMgMTYwLjUxMSA2NC41NDQ4QzE0NS41MDMgNDYuNzU5NCAxMzAuMDcxIDQuNjY3MDQgMTI5LjIwMiAyLjI3NzUzQzEyOS4xNzYgMi4yMDY2MSAxMjkuMTM4IDIuMTQwODUgMTI5LjA4OSAyLjA4MzQ0TDEyNy41MjYgMC4yMzA5MjVDMTI3LjQ2MSAwLjE1NDE5IDEyNy4zOCAwLjA5MzU1OSAxMjcuMjg3IDAuMDUzODI3M0MxMjcuMTk1IDAuMDE0MDk1NiAxMjcuMDk1IC0wLjAwMzY0NjQyIDEyNi45OTUgMC4wMDIwMDIwN0MxMjYuODk1IDAuMDA3NjUwNTUgMTI2Ljc5NyAwLjAzNjUzNjIgMTI2LjcxIDAuMDg2Mzc0QzEyNi42MjMgMC4xMzYyMTIgMTI2LjU0OSAwLjIwNTYzNSAxMjYuNDkzIDAuMjg5MTUzTDEyMi4xMTMgNi44Mjc5NEwxMjIuMDkzIDYuODYwMjlDMTIwLjgxNyA5LjAxNjg5IDExOS43MDggMTEuNjY5NSAxMTguMDQxIDEzLjU0NTdDMTE1LjkxNyAxNS45MTggMTE0LjI2OSAxOC44MTg2IDExMS41NTggMjAuNjUxN0MxMDkuNjE4IDIxLjk1ODYgMTA3LjY1MSAyMS45OTk2IDEwNS41ODkgMjIuNzQ1OEMxMDMuOTY1IDIzLjMzMDIgMTAzLjE4MiAyNC4wMzk3IDEwMS4zMTcgMjQuMTE3M0M5OS4xOTkgMjQuMjAxNSA5Ny4wNzQ4IDI0LjE4ODUgOTQuOTU3IDI0LjExNzNDOTMuMjEwMiAyNC4wNjM0IDkxLjg1NTggMjMuMzE5NCA5MC4xMzA2IDIzLjExODhDODcuMTQxNSAyMi43NzE2IDg0LjEyMjMgMjIuODEyNiA4MS4xMjI1IDIyLjk2MTRDNzkuMTc3MiAyMy4wMzg1IDc3LjIzOTkgMjMuMjU0NyA3NS4zMjU1IDIzLjYwODRDNzQuNDYyOSAyMy43NzQ1IDczLjAxMTUgMjQuMzc0IDcyLjE0MDMgMjQuMjI1Mkw3Mi4wNDMyIDI0LjIxMDFMNjcuMTE5NyAyMy4zNjQ3QzY0LjgxNjUgMjIuOTY3OSA2Mi4wNzU0IDIyLjMzMzggNTkuNzg3MyAyMy4wNTJDNTguNjg1MyAyMy4zOTcgNTguMDM0IDI0LjQxNzEgNTcuMjg5OSAyNS4yNjAzTDUzLjQ3MjggMjkuNTczNUM1My4xNDcxIDI5LjkyNzIgNTMuMjU3MSAzMC43NzY5IDUzLjUxMzcgMzEuMTM3MUM1My43MDU2IDMxLjM5NzkgNTMuOTQ3NSAzMS42MTc5IDU0LjIyNTQgMzEuNzg0QzU1LjYwMzMgMzIuNjgzMyA1Ny4yMzIyIDMzLjExOTIgNTguODc1MSAzMy4wMjg0QzYwLjMzMDggMzIuOTI3IDYyLjIwMjcgMzIuNDA5NSA2My41ODA3IDMzLjA5NzRDNjQuMTY5NSAzMy4zOTA3IDY0LjYwMDggMzMuOTE0OCA2NS4wMTQ5IDM0LjQyNTlDNjYuOTU1OCAzNi43OTgxIDY4LjY4MTEgMzguOTIwMiA3MS4zMzE1IDQwLjUzOThDNzIuODgyOCA0MS40ODM2IDc0LjU4MDEgNDIuMTYyOSA3Ni4zNTQyIDQyLjU0OTdDNzguMTgzIDQyLjk0ODcgNzkuODY3MyA0Mi42NDQ2IDgxLjMzNiA0My45Nzk2QzgyLjA5NDcgNDQuNzEzIDgyLjY2ODMgNDUuNjE2MyA4My4wMDk1IDQ2LjYxNDlDODMuMzM1MSA0Ny40Nzc2IDgzLjMwNzEgNDguNjk4MiA4My43MDE4IDQ5LjQ4NTRDODQuMzk2MiA1MC44NzQyIDg2LjA3NCA1MS40MjYzIDg3LjM1NSA1Mi4wNTgyQzg4LjA1MyA1Mi4zODc2IDg4LjY0NjkgNTIuOTAyNyA4OS4wNzE4IDUzLjU0N0M4OS40OTY2IDU0LjE5MTMgODkuNzM2MSA1NC45NDAxIDg5Ljc2MzkgNTUuNzExNEM4OS44Njk2IDU3LjI5MjIgODkuMzQ3NyA1OC44NDA3IDg4LjgzMDEgNjAuMzM5NUM4OC4zOTg4IDYxLjYxNCA4Ny44NDQ2IDYyLjc1NDkgODcuMzAzMyA2My45NTM5Qzg2LjYzNDcgNjUuNDM1NSA4Ny4xMjg2IDY2Ljc3MjYgODcuNDc1OCA2OC4yNTQyQzg4LjAyNzkgNjkuODgwMyA4OC4xMjI4IDcxLjQwMDcgODkuMjAxMSA3Mi44MjgzQzkxLjAzNjMgNzUuMzAxOSA5My41NjgyIDc3LjEyNDMgOTYuMTY5IDc4LjcxMTVDOTcuMzU3NCA3OS40NDc1IDk4LjU4OCA4MC4xMTI5IDk5Ljg1NDYgODAuNzA0MkMxMDAuODc1IDgxLjE3MjIgMTAxLjcxNCA4MS43Njk2IDEwMS43MTQgODMuMDExN0MxMDEuNzE0IDg1LjIxNTggMTAxLjcxNCA4Ny4zNzY3IDEwMS41NjEgODkuNTU5MkMxMDEuMzg5IDkxLjk1NjkgMTAxLjAyNCA5NC4zMzY5IDEwMC40NjkgOTYuNjc1OUM5OS44MzgzIDk5LjI4MSA5OS4zOTE1IDEwMS45MjcgOTkuMTMyMiAxMDQuNTk1Qzk4Ljk4MTUgMTA2LjMxOSA5OS4zODQyIDEwOC4wNDcgMTAwLjI4MiAxMDkuNTI3QzEwMC44ODUgMTEwLjU2OSAxMDIuMzIgMTExLjAzNyAxMDMuNDYgMTExLjE3QzEwNC42OTQgMTExLjMyMSAxMDUuODA5IDExMC42OTYgMTA2Ljk4MiAxMTAuMzZDMTEwLjA0NyAxMDkuNDg0IDExMy4wNDIgMTA4LjM3MSAxMTYuMTUyIDEwNy42NTNDMTE5LjgxOCAxMDYuODAzIDEyNC4wMzIgMTA3LjMwMSAxMjcuNTgyIDEwOC40MjNDMTI5LjY1NyAxMDkuMDcgMTMxLjQ2NCAxMTAuMDk2IDEzMy4zNzUgMTExLjEwNkMxMzUuMSAxMTIuMDIgMTM2LjQ1MiAxMTMuNTQgMTM4LjIyNSAxMTQuNDIzQzEzOS4wNDIgMTE0LjgwNyAxMzkuODgyIDExNS4xNDEgMTQwLjczOSAxMTUuNDIzTDE0Ni44NDMgMTE3LjU2N0MxNDguMzA1IDExOC4wOCAxNDkuNzE5IDExOC45OSAxNTEuMzExIDExOC42NzFDMTUzLjg2OSAxMTguMTU4IDE1NS42IDExNS41NjEgMTU4LjMyOSAxMTUuNTYxQzE2MC4zMDIgMTE1LjU2MSAxNjIuNDI2IDExNS4zNDYgMTY0LjMwOSAxMTUuODk4QzE2Ni4zNjggMTE2LjUwNCAxNjguNTU5IDExNi42NjUgMTcwLjY5IDExNi45NTdDMTczLjEyNSAxMTcuMjkxIDE3NS42MTggMTE3LjYyMyAxNzguMDIzIDExNy4xMThDMTgxLjk4IDExNi4yODQgMTgzLjYxMiAxMTIuMzc0IDE4Ny40OTYgMTExLjI1QzE4Ny41NzkgMTExLjIyNCAxODcuNjU2IDExMS4xODEgMTg3LjcyMiAxMTEuMTI1QzE4Ny43ODggMTExLjA2OCAxODcuODQyIDExMC45OTkgMTg3Ljg4MSAxMTAuOTIxQzE4Ny45MTkgMTEwLjg0MyAxODcuOTQyIDExMC43NTggMTg3Ljk0NyAxMTAuNjcxQzE4Ny45NTIgMTEwLjU4NCAxODcuOTQgMTEwLjQ5NyAxODcuOTEgMTEwLjQxNkMxODcuMzQxIDEwOC44MjYgMTg3LjA4IDEwNy4xODEgMTg2LjYyOSAxMDUuNTcyQzE4Ni4zMzggMTA0LjU1OCAxODYuMjUgMTAzLjMxOCAxODUuODIxIDEwMi4zMjRaXCIgZmlsbD1cIiNGNEY0RjVcIiAvPlxyXG5cdFx0XHRcdDxwYXRoIGNsYXNzTmFtZT17Y3goeydhY3RpdmUnOiBpc1NlbGVjdGVkKCfstqnssq3rgqjrj4QnKX0pfSBkYXRhLWxvY2F0aW9uPVwi7Lap7LKt64Ko64+EXCIgZD1cIk05MC4zMjI1IDE5MC4yNDRDOTAuNTU3NSAxOTAuMDAyIDkwLjk2OTUgMTg5LjczMSA5MS4xNjU3IDE4OS40NDhDOTIuNDkyIDE4Ny40MzQgOTAuNDE5NSAxODQuNzU1IDg5LjQ5NjUgMTgyLjkwMUM4OC42OTIxIDE4MS4yODggODcuNzI4MSAxODAuMzM3IDg2LjE3OTcgMTc5LjcxNUM4NC44Mjk2IDE3OS4xNzQgODMuNjk1MyAxNzguODc3IDgyLjMxMDcgMTc5LjYxMkM4MC41ODU1IDE4MC41MjkgNzkuNTIwMSAxODEuMTIyIDc3LjM2MzUgMTgxLjE3OEM3NC4yMjU3IDE4MS4yNTMgNjguODg4MSAxNzguMDY0IDY4LjI1MTkgMTc0LjYzQzY4LjA5ODggMTczLjgwNiA2OC40Njc2IDE3Mi41MyA2OC4yMzY4IDE3MS43MjdDNjcuODg3NCAxNzAuNTY3IDY3LjkwOSAxNjkuNjk0IDY3Ljk3MzcgMTY4LjQ4QzY4LjA2NjcgMTY3LjE3MSA2OC4yNjcyIDE2NS44NzMgNjguNTczMiAxNjQuNTk4QzY5LjI5MTQgMTYxLjM0OCA2OS42OTY4IDE1Ny42MjggNjcuMDYzNiAxNTQuNDI1QzY1Ljk4NTMgMTUzLjExNiA2NC4zNTI4IDE1MS43NiA2My42OTcyIDE1MC4xNTVDNjIuNjE4OSAxNDcuNTE4IDYzLjcyNTIgMTQ1LjAxNiA2NS4zODM2IDE0NC4xNzNDNjUuNzczNyAxNDQgNjYuMTc1OSAxNDMuODU1IDY2LjU4NyAxNDMuNzQxQzY3LjMyNDYgMTQzLjQ5OCA2OC40NjMyIDE0My44MTcgNjkuMTc0OSAxNDMuNDkxQzY5LjY2ODggMTQzLjI2NSA3MS40NTY2IDE0My42ODMgNzEuOTUwNSAxNDMuNDU1QzcyLjc5OCAxNDMuMDY0IDc1LjI1NjUgMTQyLjM3NiA3NS42NjQxIDE0MS41MzNDNzYuMTEwNSAxNDAuNjE2IDc2LjQ5NDQgMTQwLjY5OCA3Ny4zNjU3IDE0MC4yMTFDNzcuNTcxNiAxNDAuMTA5IDc3Ljc2MzcgMTM5Ljk4MiA3Ny45MzcxIDEzOS44MzFDNzkuNjg4MyAxMzguMTU0IDc2LjgyODcgMTM2LjM2OCA3NS42MDU5IDEzNC44ODRDNzQuOTIwMSAxMzQuMDUyIDc0LjA4MzMgMTMyLjY4IDczLjQ3NTIgMTMxLjc3NEM3Mi40NjM3IDEzMC4yNjUgNzIuMDMwMiAxMjguNzU1IDcwLjgzOTggMTI3LjM2QzY5LjcyODkgMTI2LjEwOSA2OC4xNzE5IDEyNS4zNDMgNjYuNTAyOSAxMjUuMjI3QzY0LjEzMDYgMTI1LjA0OCA2MS4wODc3IDEyNS44NzQgNTguNzc4IDEyNi4xNzhDNTguNDc3NiAxMjYuMjE2IDU4LjE3NTEgMTI2LjIzNyA1Ny44NzIyIDEyNi4yMzhDNTcuNDE3MiAxMjYuMjM4IDU2Ljk2MjEgMTI2LjIyMyA1Ni41MDcxIDEyNi4yMTVDNTYuMzU2MSAxMjYuMjE1IDU2LjIwMyAxMjYuMjE1IDU2LjA1MiAxMjYuMjE1QzU1Ljc0OTEgMTI2LjIxNyA1NS40NDY3IDEyNi4yMzggNTUuMTQ2MyAxMjYuMjc3QzUyLjkxODUgMTI2LjU4MyA1MC45NzExIDEyNy42ODYgNDkuMTQwMiAxMjguNjY1QzQ4LjQ1MDEgMTI5LjAzMyA0Ny44Nzg2IDEyOS44MzggNDYuOTgzNiAxMjkuNjU0QzQ2Ljc0OTQgMTI5LjU5NCA0Ni41Mjk2IDEyOS40ODggNDYuMzM2NiAxMjkuMzQyQzQ1LjkwNTMgMTI5LjA1MSA0NS40ODkxIDEyOC42OTUgNDUuMjg4NSAxMjguMjI5QzQ0Ljc5NjggMTI3LjA0OSA0NC4zOTU3IDEyNS43MzYgNDMuNzMxNCAxMjQuNjQ5QzQzLjE2MjEgMTIzLjcxMyA0Mi43MTc4IDEyMi42NDEgNDEuNzcxMSAxMjIuMDAzQzQwLjY0NTMgMTIxLjI0NCAzOC44NDY3IDEyMS4xNCAzNy41MjkxIDEyMC45NTNDMzYuODgyMSAxMjAuODYyIDM2LjIzNTEgMTIxLjQ0MiAzNS41ODgxIDEyMS4zMTFDMzMuMjU5IDEyMC44MzIgMzEuMTkzIDExOS41NDkgMjkuMDYwMSAxMTguNTA3QzI3LjU1MDUgMTE3Ljc2OSAyNi43MzUzIDExOC45MTUgMjUuNDQxNCAxMTkuMzg1QzIzLjg5OTQgMTE5Ljk0NSAyMi4xMTU5IDExOS45OTMgMjAuNTEzNSAxMjAuMzI5QzE4LjQ1NCAxMjAuNzYxIDE2LjAwODQgMTIxLjc1MSAxNC45MDY0IDEyMy42MzhDMTQuNzE4NyAxMjMuOTg3IDE0LjU2OSAxMjQuMzU2IDE0LjQ2IDEyNC43MzdDMTQuNDM4NCAxMjQuOCAxNC40MTkgMTI0Ljg2MyAxNC4zOTk2IDEyNC45MjVDMTQuMjE0MSAxMjUuNDkgMTQuMDA0OSAxMjYuMDM0IDEzLjUyMTkgMTI2LjQxN0MxMy4wOTk1IDEyNi43NCAxMi42NDQ5IDEyNy4wMTcgMTIuMTY1NCAxMjcuMjQ2QzExLjY4ODggMTI3LjQ4NSAxMS4xOTkyIDEyNy43MDEgMTAuNzMzNCAxMjcuOTM4QzEwLjY1ODUgMTI3Ljk3NSAxMC41ODY0IDEyOC4wMTcgMTAuNTE3NyAxMjguMDY1QzkuNzA0NjkgMTI4LjY1IDEwLjA0NTQgMTI5LjY4NyA5Ljg0MjcxIDEzMC42MzZDOS44MTIyNyAxMzAuNzg0IDkuNzY2MDEgMTMwLjkyOSA5LjcwNDcgMTMxLjA2N0M5LjQxNTcxIDEzMS43MTQgOC44NDIwNSAxMzIuMTE1IDguMjgxMzQgMTMyLjUyN0M4LjA5MzcyIDEzMi42NjUgNy45MTA0MSAxMzIuODAzIDcuNzQwMDQgMTMyLjk1OEM1LjQ3Nzc3IDEzNC44OTkgNC42MjM3NiAxMzcuNzM1IDQuNTg3MSAxNDAuNjQyQzQuNTUwMSAxNDEuMTggNC42MzcxNiAxNDEuNzIgNC44NDE1OCAxNDIuMjE5QzUuNjkzNDMgMTQzLjk4OSA4Ljc2ODczIDE0My4zNzcgMTAuMzM0NCAxNDMuNDhDMTEuNTIwNSAxNDMuNTYgMTIuNzQ1NSAxNDMuODI1IDEzLjY2ODUgMTQ0LjU3NEMxNS40ODY1IDE0Ni4wNDcgMTUuMjEyNiAxNDguMzk1IDE1LjAzMTUgMTUwLjQ0OEMxNC45ODYyIDE1MC45NTcgMTUuNDczNiAxNTEuMDk1IDE1Ljc1MTggMTUxLjQxOUMxNi4wOTcyIDE1MS44MTggMTYuMzAzMiAxNTIuMzE4IDE2LjMzODQgMTUyLjg0NEMxNi41MDM3IDE1NC4yMyAxNi42MDE1IDE1NS42MjMgMTYuNjMxNyAxNTcuMDIyQzE2LjY3MjcgMTU4LjgzNSAxNy42MTk0IDE2MC4yNDYgMTguMjc3MiAxNjEuODYzQzE5LjA3MDggMTYzLjgxNyAxOS42NzAzIDE2NS45MzcgMjAuNjQ5NCAxNjcuODA3QzIxLjQyMTUgMTY5LjI5MyAyMy42Njg2IDE2OS4wMDQgMjQuMzgwMyAxNjcuNTkxQzI0Ljc1MzQgMTY2LjgzNiAyNC41MDMyIDE2NS44OSAyNC40MTA1IDE2NS4xMzVDMjQuMDkyMiAxNjIuNTMxIDIzLjkzNzMgMTU5LjkxIDIzLjk0NjggMTU3LjI4N0MyMy45MzM1IDE1Ni45MDggMjMuOTcwNSAxNTYuNTI4IDI0LjA1NjggMTU2LjE1OUMyNC4yMjUgMTU1LjU1OSAyNC45MTk1IDE1NC4zNDcgMjUuNjgyOSAxNTQuNDc1QzI2LjM2MDEgMTU0LjU4NSAyNi42NzQ5IDE1NS40ODYgMjYuNzkxNCAxNTYuMDUxQzI2Ljk2MzkgMTU2Ljg5NyAyNy4yNjE1IDE1Ny43MTQgMjcuNDYyMSAxNTguNTU3QzI3Ljc4NzcgMTU5LjkyNCAyNy45OTQ4IDE2MS4zMTggMjguMzg1MSAxNjIuNjU1QzI4LjY3MTkgMTYzLjY0NSAyOC43NzU1IDE2NC41NCAyOS4xNjM2IDE2NS41MDFDMjkuNDY1NiAxNjYuMjQ1IDI5LjY4NzcgMTY3LjUxMyAyOS4yODAxIDE2OC4yNTNDMjguODcyNSAxNjguOTkzIDI4LjMzMzMgMTY5LjYxNiAyOC4yMzQxIDE3MC41MDNDMjguMTM0OSAxNzEuMzg5IDI4LjQyNjEgMTcyLjQyMiAyOC40ODY1IDE3My4zNTRDMjguNTYxOSAxNzQuNDgxIDI4LjcwMjEgMTc1LjgxMiAyOC40NjA2IDE3Ni45MThDMjguMTYzIDE3OC4zMjkgMjcuODY3NSAxNzkuNjYyIDI3Ljg4MDUgMTgxLjExN0MyNy44ODA1IDE4MS45MjYgMjguMTk3NSAxODIuMzQyIDI4Ljc0MzEgMTgyLjkwMUMyOS42OTYzIDE4My44ODkgMzEuMDQ4NSAxODQuNjU0IDMyLjE0ODQgMTg1LjQ4OUMzMi41NTkzIDE4NS43NjYgMzIuOTI4MiAxODYuMTAxIDMzLjI0MzkgMTg2LjQ4M0MzMy42MjU2IDE4Ni45OSAzMy44MDY4IDE4Ny42MTUgMzQuMDY3NyAxODguMTk1QzM0LjcxNDcgMTg5LjYyOSAzNS40NzE3IDE5MS40OTUgMzcuMDQzOCAxOTEuOTg0QzM3LjQyMzQgMTkyLjEwMyAzNy44MTkyIDE5Mi4xNjIgMzguMjE3IDE5Mi4xNTlDMzguNjA3NiAxOTIuMTU3IDM4Ljk5NjMgMTkyLjEwMyAzOS4zNzMgMTkxLjk5OUMzOS44NDkgMTkxLjg2NyA0MC4zMDU3IDE5MS42NzIgNDAuNzMxNiAxOTEuNDIxQzQwLjk4OCAxOTEuMjcxIDQxLjIzNDMgMTkxLjEwNCA0MS40NjkyIDE5MC45MjFDNDIuMDIzNCAxOTAuNDkgNDIuOTc4OCAxODkuOTMzIDQzLjUwMjggMTg5LjQ5MUM0My41OTM0IDE4OS40MTYgNDMuNjg2MSAxODkuMzQ3IDQzLjc4MzIgMTg5LjI3NkM0NC40NTgyIDE4OC44MTggNDUuMjAwMSAxODguNDc4IDQ1LjcyNDEgMTg3LjgzMUM0Ni44MzY5IDE4Ni40MiA0Ni45NDA0IDE4NS45MDMgNDcuNzUzNSAxODQuNzEyQzQ4LjAwOCAxODQuMzQxIDQ4LjE5NzcgMTgzLjkxIDQ4LjU1MTQgMTgzLjYxOUM0OC43NDMgMTgzLjQ3IDQ4Ljk1NTEgMTgzLjM0OSA0OS4xODExIDE4My4yNjFDNTEuNzE3MyAxODIuMTgzIDU0LjcwMiAxODIuNDYzIDU3LjIxMjMgMTgzLjQ3N0M1OC4yNzk0IDE4My45MjkgNTkuMzExIDE4NC40NjEgNjAuMjk4NCAxODUuMDY4QzYxLjQ1ODYgMTg1Ljc1OCA2Mi40NTUgMTg2LjI2NyA2My44MDUgMTg2LjUzQzY1LjA2ODggMTg2Ljc4MSA2Ni4zNzEzIDE4Ni4zNTggNjcuNjQ1OSAxODYuMjA3QzY5LjY4NiAxODUuOTY3IDcxLjY4OTUgMTg1LjI0MSA3My42ODQ0IDE4Ni4xODNDNzQuNDIwOSAxODYuNTU4IDc1LjA4NzYgMTg3LjA1NiA3NS42NTU1IDE4Ny42NTZDNzUuOTM0NCAxODcuOTI3IDc2LjE4OTggMTg4LjIyMiA3Ni40MTg5IDE4OC41MzZDNzcuMDY1OSAxODkuNDcgNzcuMzEzOSAxOTEuMDIzIDc4LjE2NTcgMTkxLjc3MUM3OC45MjQ5IDE5Mi40MzcgNzkuOTE0OCAxOTIuNTY0IDgwLjg4NzQgMTkyLjc4NEM4Mi4yODcgMTkzLjA5OSA4NC4wMjk1IDE5My42NjcgODUuMjAwNiAxOTIuNzg0Qzg1LjU1OTQgMTkyLjUwOCA4NS45MzU0IDE5Mi4yNTQgODYuMzI2MyAxOTIuMDI1Qzg2LjUxODMgMTkxLjkxNiA4Ni43MTggMTkxLjgyMSA4Ni45MjM3IDE5MS43NDFDODcuODc0NyAxOTEuMzc0IDg4Ljk0NDQgMTkxLjI4MyA4OS44MDkyIDE5MC42NzVDODkuOTkyOSAxOTAuNTQ3IDkwLjE2NDcgMTkwLjQwMyA5MC4zMjI1IDE5MC4yNDRaXCIgZmlsbD1cIiNGNEY0RjVcIiAvPlxyXG5cdFx0XHRcdDxwYXRoIGNsYXNzTmFtZT17Y3goeydhY3RpdmUnOiBpc1NlbGVjdGVkKCfqsr3sg4Hrgqjrj4QnKX0pfSBkYXRhLWxvY2F0aW9uPVwi6rK97IOB64Ko64+EXCIgZD1cIk0xNjYuNTU2IDIyMy44MzNDMTY2LjIgMjIzLjIxIDE2Ni4wMjggMjIyLjc2OCAxNjUuNDQxIDIyMi4zMjNDMTY1LjI4NSAyMjIuMTkgMTY1LjEwNCAyMjIuMDg5IDE2NC45MDggMjIyLjAyOEMxNjQuNzQgMjIxLjk5OCAxNjQuNTY4IDIyMS45OTggMTY0LjM5OSAyMjIuMDI4QzE2Mi4yNjQgMjIyLjAyOCAxNjIuMTQ4IDIyMi4zNDkgMTYwLjMwMiAyMjMuMjY0QzE1Ny4wMzkgMjI0Ljg3NyAxNTAuMjM3IDIyNC42MjkgMTQ2LjUgMjIzLjA3OEMxNDMuNTQzIDIyMS44NTEgMTQwLjQzNSAyMTguMDgxIDEzNy43OCAyMTkuODA5QzEzNy4wMyAyMjAuMjk2IDEzNi44MzYgMjIxLjM1NSAxMzYuMSAyMjEuNzE5QzEzNS4zNjUgMjIyLjA4NCAxMzQuNDA4IDIyMi4zIDEzMy42NjYgMjIyLjA4OEMxMzIuNTY5IDIyMS43NTMgMTMxLjQ5MyAyMjEuMzUzIDEzMC40NDQgMjIwLjg5MUMxMjguNDI3IDIyMC4wNjEgMTI1LjExOSAyMTkuNzA3IDEyMy4wNDQgMjE5LjAzN0MxMjIuNTkzIDIxOC44OTYgMTIyLjE4NiAyMTguNjQgMTIxLjg2NSAyMTguMjkzQzEyMC45NDYgMjE3LjI4NiAxMjAuNzg3IDIxNy4xMTcgMTIwLjk0OCAyMTYuMjAzQzEyMS4yMDUgMjE0LjY3IDEyMS41MzEgMjEyLjUzNyAxMjEuMTQ5IDIxMS42NTVDMTIwLjI4NiAyMDkuNjY4IDExOC44OTEgMjA4Ljc3MSAxMTYuOTk3IDIwNy43OTJDMTE1LjQ1NSAyMDYuOTk0IDExNS4yNzIgMjA2Ljc5NCAxMTMuNjMzIDIwNi4xODhDMTExLjg4NiAyMDUuNTQxIDEwOS43OSAyMDUuMzI1IDEwOC4yNTkgMjA0LjI0N0MxMDcuMjM0IDIwMy41MzcgMTA1LjQ3MyAyMDEuNDkxIDEwNC4yNTQgMjAxLjMxNEMxMDIuNTI5IDIwMS4wNjYgMTAxLjMgMjAzLjIwNSA5OS44NjU0IDIwNC4wMkM5Ny43MzA0IDIwNS4yMzQgOTguNTUyMSAyMDYuMjYzIDk2LjYzMDUgMjA3Ljc5N0M5NC43MDkgMjA5LjMzIDkzLjUwNTYgMjExLjE4OSA5Mi44MjYzIDIxMy43MzhDOTIuNDkyIDIxNS4wMDIgOTIuMzY2OSAyMTYuMzA5IDkyLjE2NjQgMjE3LjU5OEM5MS45MDk3IDIxOS4yNDggOTIuMjU0OCAyMjAuMTk5IDkxLjYxIDIyMS43NDdDOTAuNjY5NyAyMjQuMDA1IDkwLjAzNTcgMjI1LjQ3OCA5MS4zMTQ1IDIyNy43OTlDOTEuNjU1MyAyMjguNDIgOTIuMTc3MiAyMjguOTE4IDkyLjUyMjIgMjI5LjUzOUM5NC4wNDkxIDIzMi4zMjEgOTQuMjMwMiAyMzUuMTQ2IDkyLjU2NTMgMjM3Ljg1M0M5Mi4zOTQ5IDIzOC4xNTcgOTIuMTY3MiAyMzguNDI1IDkxLjg5NDYgMjM4LjY0MkM5Mi4zNDE4IDI0MC4xNzMgOTIuODE3NyAyNDEuNjk0IDkzLjMyMjMgMjQzLjIwM0M5NC41NjY3IDI0Ni45MzkgOTMuNzgxNyAyNTAuNjM1IDk1LjIyNjYgMjU0LjI5N0M5NS43NTI4IDI1NS42MyA5Ni4zMDQ5IDI1Ny4wMjMgOTcuNTUxNCAyNTcuODRDOTguNTgyMiAyNTguNTI0IDk5LjgyNDQgMjU4Ljg3MyAxMDAuNjkxIDI1OS43NDVDMTAxLjU1OCAyNjAuNjE2IDEwMS4xOTggMjYxLjk1NyAxMDAuOTgzIDI2My4wMDdDMTAwLjQwOSAyNjUuODExIDEwMC45NjUgMjY4LjE4MyAxMDEuMzE1IDI3MC45MDlDMTAxLjY1NSAyNzMuNTgzIDEwMS40MzggMjc2LjE5MSAxMDIuNTcyIDI3OC43MjVDMTAzLjAzNiAyNzkuNzYyIDEwMy41NTMgMjgwLjc5OSAxMDQuMzM4IDI4MS42MTlDMTA0LjkzMiAyODIuMjMgMTA1LjY1NSAyODIuNzAyIDEwNi40NTQgMjgyLjk5OUMxMDguMDg4IDI4My41OTYgMTA5Ljg4MiAyODMuNTgyIDExMS41MDcgMjgyLjk2QzExNC4yOTEgMjgxLjg4MiAxMTYuMDc0IDI3OS41MjUgMTE2Ljk2NyAyNzYuODA3QzExNy43NDQgMjc0LjQ0OCAxMTkuNTU1IDI3My40MzUgMTIxLjk4MyAyNzMuNzg4QzEyMy4zNDIgMjczLjk4MiAxMjQuNjU4IDI3NC40MiAxMjYuMDE2IDI3NC42MDZDMTI4LjQ1NSAyNzQuOTQgMTMwLjk5OCAyNzQuNDU3IDEzMy4zNDkgMjc1LjE1MUMxMzQuNDI3IDI3NS40NjYgMTM1LjQxNSAyNzYuMDE0IDEzNi40ODIgMjc2LjMzOUMxMzguNDIzIDI3Ni45MzcgMTQwLjUzMiAyNzYuNzcxIDE0Mi41NTUgMjc2LjQ5M0MxNDUuMzk1IDI3Ni4xMDIgMTQ4LjQxIDI3NS40MDEgMTUwLjM0OSAyNzMuMjg2QzE1Mi42MzkgMjcwLjc4OCAxNTIuOTM3IDI2Ni4wOTggMTUwLjMxIDI2My42OThDMTQ5LjM4NSAyNjIuODUgMTQ4LjE5NyAyNjEuODg2IDE0Ny45MDEgMjYwLjYwM0MxNDcuNzA5IDI1OS43NyAxNDguMzkxIDI1OC44NTIgMTQ4LjQxOSAyNTcuOTkzQzE0OC40NTMgMjU3LjAyMSAxNDguMTA2IDI1Ni4wNzIgMTQ4LjIwMyAyNTUuMDkzQzE0OC4zNjMgMjUzLjQzMiAxNDkuNzEzIDI1My4yNzkgMTUxLjAzNSAyNTMuOTE1QzE1Mi40NTIgMjU0LjYwNSAxNTMuOTcgMjU2Ljg1IDE1NS43MTcgMjU1LjMwNEMxNTYuNzAyIDI1NC40NDEgMTU2LjM2NCAyNTMuMTgyIDE1Ni40MTMgMjUyLjAwMkMxNTYuNDE2IDI1MS44MSAxNTYuNDM1IDI1MS42MTkgMTU2LjQ3MiAyNTEuNDMxQzE1Ni42IDI1MC45NjIgMTU2Ljg5NiAyNTAuNTU2IDE1Ny4zMDQgMjUwLjI5MkMxNTcuNjUzIDI1MC4wNTIgMTU4LjAzNyAyNDkuODcgMTU4LjQ0MyAyNDkuNzUxQzE1OC43NDcgMjQ5LjY2NSAxNTkuMDkgMjQ5LjY4NCAxNTkuMzY2IDI0OS41MzVDMTU5LjcwOSAyNDkuMzI4IDE2MC4wMTYgMjQ5LjA2OCAxNjAuMjc4IDI0OC43NjVDMTYxLjAzNSAyNDcuOTQ4IDE2MS41NTMgMjQ2LjkzOSAxNjIuMzE4IDI0Ni4xM0MxNjMuNjEyIDI0NC43NjcgMTYzLjU5NSAyNDQuNjk4IDE2NS4xNTIgMjQzLjY2M0MxNjYuNDggMjQyLjc4MSAxNjcuODU2IDI0MS45NzIgMTY5LjIyNiAyNDEuMTU3QzE2OS44MDIgMjQwLjgxNCAxNzAuOTUxIDI0MC4wOTYgMTcxLjQ4NiAyMzkuNzA4QzE3NC42ODQgMjM3LjM3IDE3NS40OTEgMjM0Ljc0NyAxNzMuNjQyIDIzMi4zNzVDMTczLjAzOSAyMzEuNjA1IDE3Mi4yNDkgMjMxLjEzNSAxNzEuNjQ4IDIzMC4zNjNDMTcwLjU2OSAyMjguOTg1IDE2OS43MDcgMjI4LjAzNiAxNjguNjI4IDIyNi42NTZDMTY4LjI1NyAyMjYuMTgxIDE2Ny42ODQgMjI1Ljc2MSAxNjcuMzcxIDIyNS4yNjNDMTY3LjA2MSAyMjQuODA5IDE2Ni43ODkgMjI0LjMzMSAxNjYuNTU2IDIyMy44MzNWMjIzLjgzM1pcIiBmaWxsPVwiI0Y0RjRGNVwiIC8+XHJcblx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPXtjeCh7J2FjdGl2ZSc6IGlzU2VsZWN0ZWQoJ+qyveyDgeu2geuPhCcpfSl9IGRhdGEtbG9jYXRpb249XCLqsr3sg4HrtoHrj4RcIiBkPVwiTTIwMC40NDIgMTg3LjI2MkMyMDAuMzI3IDE4Ny4wNCAyMDAuMTY5IDE4Ni44NDMgMTk5Ljk3OSAxODYuNjgxQzE5OC43OTMgMTg1LjcxNSAxOTYuOTQ3IDE4Ny4zMDIgMTk2IDE4OC4xNDhDMTk0LjgzNyAxODkuMTgzIDE4OS41MyAxOTIuNzQ4IDE5MC4zMTUgMTg4LjM2NEMxOTAuNjg2IDE4Ni4yOTggMTkxLjkzOSAxODUuMDUxIDE5MS41NTcgMTgyLjc4MkMxOTAuODU5IDE3OC42MTYgMTkxLjg3OSAxNzMuOTQgMTkxLjg3OSAxNjkuNzIyQzE5Mi4wMjcgMTY1LjYyNCAxOTIuOTc4IDE2MC42OTkgMTkyLjMzNiAxNTYuNjc5QzE5MS42MTggMTUyLjE3OCAxOTIuNzI2IDE0Ny4wNiAxOTMuMDkzIDE0Mi41NzdDMTkzLjQ1NyAxMzguMTU0IDE5Mi44NTMgMTM2LjQyNiAxOTIuMDY4IDEzMi4xNTJDMTkxLjM4NyAxMjguNDQ1IDE5MS4yODYgMTI0LjYxNyAxOTEuMTM5IDEyMC44NzFDMTkxLjAyNSAxMTcuOTAzIDE5MC41NDYgMTE0LjM2IDE4OC4xMiAxMTIuMzVDMTg4LjA4OCAxMTIuNDQ2IDE4OC4wMzMgMTEyLjUzMyAxODcuOTYxIDExMi42MDNDMTg3Ljg4OCAxMTIuNjc0IDE4Ny44IDExMi43MjYgMTg3LjcwMyAxMTIuNzU1QzE4My44MjIgMTEzLjg4OCAxODIuMTg3IDExNy41NzMgMTc4LjIyOSAxMTguNDA4QzE3NS44MjMgMTE4LjkxMyAxNzMuMzMgMTE4LjU4IDE3MC44OTcgMTE4LjI0NkMxNjguNzQxIDExNy45OCAxNjYuNjA4IDExNy41NTQgMTY0LjUxNiAxMTYuOTcyQzE2Mi42MjIgMTE2LjQxNSAxNjAuNTA5IDExNi44NTEgMTU4LjUzNiAxMTYuODUxQzE1Ni41NjIgMTE2Ljg1MSAxNTQuOTQgMTE4LjQ1NSAxNTMuMzQyIDExOS40MjRDMTUxLjUyIDEyMC41MjggMTQ5LjU4MyAxMjEuMTEyIDE0Ny41NTQgMTIxLjcyN0MxNDYuMzUxIDEyMi4wOTEgMTQ1LjEzIDEyMi40NjIgMTQ0LjA2NyAxMjMuMTM1QzE0My40NTQgMTIzLjUyMyAxNDIuODM2IDEyNC4wODggMTQyLjIzMiAxMjQuNTMzQzE0MS41NjQgMTI1LjAxMyAxNDAuOTQ4IDEyNS41NjMgMTQwLjM5NiAxMjYuMTc0QzEzOS44MDYgMTI2LjgzMiAxMzkuMzcgMTI3LjYxNCAxMzkuMTIyIDEyOC40NjJDMTM4LjkwNiAxMjkuMjM0IDEzOS4wNTcgMTI5LjU3IDEzOS4xOTUgMTMwLjMzQzEzOS4zMTIgMTMwLjk3NyAxMzkuNzE1IDEzMS40OTggMTM5Ljc3MSAxMzIuMTU0QzEzOS44NTIgMTMzLjIwMyAxMzkuNzEzIDEzNC4yNTggMTM5LjM2NiAxMzUuMjUxQzEzOS4wMDUgMTM2LjI5NyAxMzguMjc0IDEzNy43NzIgMTM3LjMzNiAxMzguNDIzQzEzNi4yNTggMTM5LjE2MyAxMzQuMjM3IDEzOS4wNyAxMzMuMDIzIDEzOC44OTZDMTMxLjU4MyAxMzguNjYxIDEzMC4yMDIgMTM4LjE0OCAxMjguOTU4IDEzNy4zODZDMTI4LjIwNyAxMzYuOTU1IDEyNy4xNTEgMTM1Ljg0NiAxMjYuMTg3IDEzNi4wOTJDMTI1LjcyOSAxMzYuMjA2IDEyNS41ODUgMTM2LjY2NiAxMjUuMTA4IDEzNi43OTFDMTI0LjU5NSAxMzYuOTI3IDEyNC4wMDYgMTM2LjcwNyAxMjMuNTA4IDEzNi41OTJDMTIyLjU2MSAxMzYuMzc3IDEyMS4xMzYgMTM1Ljk2MyAxMjAuMjExIDEzNi4yNDVDMTE5Ljc5OCAxMzYuMzUzIDExOS40MTQgMTM2LjU0OCAxMTkuMDgzIDEzNi44MTdDMTE4LjcwOCAxMzcuMTQ5IDExNy45MTYgMTM3Ljk5IDExNy43NTQgMTM4LjQ2NEMxMTcuMzIzIDEzOS43MjggMTE3LjMyMyAxNDEuMDUyIDExNy4zMDQgMTQyLjM5NkMxMTcuMjg5IDE0NC40MzIgMTE1LjE3NSAxNDQuMjUzIDExMy43MDQgMTQ0Ljk4NEMxMTIuNjQxIDE0NS41MTIgMTEyLjMwOSAxNDYuODE5IDExMS43MzMgMTQ3LjgzOUMxMTEuNDA1IDE0OC40MTUgMTExLjQ4MyAxNDkuMDcgMTExLjE5IDE0OS42NjFDMTEwLjc4IDE1MC40NzkgMTA5LjU1NyAxNTAuMzcxIDEwOC45MzYgMTUwLjk5MkMxMDcuOTI1IDE1Mi4wMDMgMTA4LjIxNCAxNTMuNTI0IDEwOC4xMTcgMTU0LjgyMkMxMDcuOTgxIDE1Ni42MjUgMTA3LjQ1NyAxNTguMDU3IDEwNy42NjEgMTU5Ljg5NkMxMDcuODkyIDE2MS45NTggMTA3LjM0MiAxNjQuMzYxIDEwNy4zNDIgMTY2LjQ0NEMxMDcuMzU3IDE2Ny43NzcgMTA3LjIwOSAxNjkuMTc4IDEwNy43ODcgMTcwLjQwMUMxMDguMTYgMTcxLjE4OCAxMDkuMDQgMTcxLjkxMSAxMDkuNzk3IDE3Mi4zNDJDMTEyLjE2OSAxNzMuNjU4IDExNi4xMjIgMTcyLjc4NiAxMTcuNDA5IDE3NS42ODVDMTE4LjEyNyAxNzcuMzA1IDExOC4yMTQgMTc5LjE2NiAxMTcuODQxIDE4MC44OTVDMTE3LjQ0NCAxODIuNzA3IDExNi41NDcgMTg0LjQ0MSAxMTUuNDY4IDE4NS45MzNDMTE1LjA4IDE4Ni40NyAxMTQuODIxIDE4Ny4xNzMgMTE0LjUxOSAxODcuNzYyQzExNC4zNzEgMTg4LjA2NiAxMTQuMiAxODguMzU5IDExNC4wMDYgMTg4LjYzN0MxMTMuODE4IDE4OC44OCAxMTMuNjEzIDE4OS4xMDggMTEzLjM5MiAxODkuMzIxQzExMi41ODMgMTkwLjEzOCAxMTIuMDk4IDE5MC44NjUgMTEwLjg4OCAxOTAuOTIxQzExMC4zNTcgMTkwLjk0NyAxMDkuOTggMTkxLjEzNyAxMDkuNDg0IDE5MS4yNkMxMDguOTEyIDE5MS40MDkgMTA4LjI3MiAxOTEuMzM3IDEwNy42ODcgMTkxLjQwNEMxMDYuMTU4IDE5MS41NzkgMTA2LjMwNSAxOTMuODE4IDEwNi4yMTkgMTk0LjlDMTA2LjEzOSAxOTUuOTIyIDEwNi4wNjggMTk2Ljk0NSAxMDUuOTc1IDE5Ny45NjVDMTA1Ljc5IDIwMC4wMzUgMTA2LjI0MiAyMDAuOTMgMTA4LjI1NSAyMDIuMzIzQzEwOS43ODggMjAzLjM4OSAxMTEuNDQ4IDIwNC4yNTggMTEzLjE5NyAyMDQuOTExQzExNC44MjYgMjA1LjUxNyAxMTYuNTI5IDIwNS45MzMgMTE4LjA3MSAyMDYuNzMxQzExOS45NjUgMjA3LjcxIDEyMS43ODMgMjA5LjI1NCAxMjIuNjU0IDIxMS4yNDFDMTIzLjEyIDIxMi4yNTggMTIzLjI3NSAyMTMuMzkgMTIzLjEwMSAyMTQuNDk1QzEyMi45NDcgMjE1LjQwOSAxMjIuMDIyIDIxNS43ODkgMTIyLjkzOSAyMTYuOEMxMjMuMjYgMjE3LjE0OCAxMjMuNjY3IDIxNy40MDQgMTI0LjExOCAyMTcuNTQ0QzEyNi4xOTMgMjE4LjIxNSAxMjcuNTY5IDIxOC4zNTMgMTI5LjU3NyAyMTkuMTgzQzEzMC42NTUgMjE5LjYzIDEzMS42NjkgMjIwLjI3MyAxMzIuNzk5IDIyMC41OTZDMTMzLjcwOSAyMjAuODU1IDEzNC4wOTMgMjIwLjY4MiAxMzQuODkzIDIyMC4zOEMxMzUuMjg5IDIyMC4yMzcgMTM1LjY2IDIyMC4wMyAxMzUuOTkgMjE5Ljc2OEwxMzYuMDc3IDIxOS42OTlDMTM3Ljc2MSAyMTguMzY0IDEzOC4wNDEgMjE2LjM2OSAxMzYuNzQ1IDIxNC42NTJDMTM2LjE2NyAyMTMuODg3IDEzNi43OTkgMjEyLjAyNCAxMzYuNzQ1IDIxMS4yNTRDMTM2LjYxNCAyMDkuNDE0IDEzOC4wMzkgMjA3LjY2OSAxMzguMzc2IDIwNi42OTlDMTM5LjA4NyAyMDQuNjMzIDEzNy43MjkgMjAyLjEyIDEzNi44NTMgMjAwLjM2MUMxMzYuMDk4IDE5OC44MjMgMTM2Ljc5MSAxOTYuMDYgMTM4LjQ3NSAxOTUuNjU5QzEzOS4zMTIgMTk1LjQ1OSAxNDEuNDk0IDE5NC44MiAxNDIuMzAxIDE5NC41MjlDMTQzLjMyNyAxOTQuMTYzIDE0My43MjggMTkzLjM0MyAxNDQuMzMgMTkyLjQwNUMxNDUuMzA5IDE5MC44NzQgMTQ1LjA5MyAxODkuMjg3IDE0Ni43NjEgMTg4LjE0NkMxNDcuNjg0IDE4Ny41MTQgMTUxLjM2NyAxODUuMjU2IDE1Mi40NjUgMTg1LjEyNkMxNTMuMjgyIDE4NS4wMzIgMTU0LjAyNCAxODUuMjExIDE1NC42NzEgMTg1LjM0MkMxNTUuNjYxIDE4NS41NDEgMTU3LjcxNiAxODUuMDU3IDE1OC4xNjkgMTg2LjQ1MUMxNTguNDcxIDE4Ny4zOCAxNjAuNDcgMTg5LjQwMyAxNjAuNTggMTkwLjM3OEMxNjEuMDI5IDE5NC4zNDQgMTYwLjcyOSAyMDQuMDAzIDE1OC4wOTYgMjA3LjAxMkMxNTcuMTY0IDIwOC4wNzcgMTU2LjIxMSAyMDkuMzQ5IDE1NS4wNDYgMjEwLjEzNEMxNTUuMDAxIDIxMC4xNjUgMTUyLjU3IDIxMS42OTEgMTUyLjUyMSAyMTEuNzI2QzE1MC4zNTEgMjEzLjIyMyAxNDIuNDU2IDIxOS43OTggMTQ4LjU3NiAyMjIuNzU3QzE1MS4wNjMgMjIzLjk1OCAxNTQuMDE1IDIyMi42NzcgMTU2LjcxMyAyMjIuNjY4QzE1Ny4xMzQgMjIyLjY3OSAxNTcuNTU2IDIyMi42NTMgMTU3Ljk3MyAyMjIuNTkxQzE1OC40MDUgMjIyLjQ5OSAxNTguODI5IDIyMi4zNjYgMTU5LjIzNiAyMjIuMTk0QzE2MC45MSAyMjEuNTQ3IDE2Mi4zNTUgMjIwLjUzMyAxNjMuOTQ5IDIxOS43NDJDMTY1Ljk3MSAyMTguNzM5IDE2Ny4yMDcgMjE5LjUwNyAxNjkuMjY3IDIxOS4wMzJDMTcwLjg4NCAyMTguNjYyIDE3Mi42NCAyMTcuMjA4IDE3My45NTkgMjE2LjI0NkMxNzQuOTIxIDIxNS41NDcgMTc1LjE2MyAyMTQuNzM3IDE3NS45IDIxMy44MTZDMTc2Ljg3OSAyMTIuNTc2IDE3OC43MDQgMjExLjQzIDE4MC4yODMgMjExLjQ3MUMxODIuOTE4IDIxMS41NCAxODQuNDA0IDIxMi4xNjggMTg2LjYwOCAyMTMuMzk3QzE4OS44NzUgMjE1LjIyMiAxOTUuMjM0IDIxMi4wMTMgMTk2LjYxNCAyMDguODg0QzE5OC4yNDkgMjA1LjE3NCAxOTguMzQgMjAyLjE5OCAxOTguNzAyIDE5OC4yMjZDMTk4LjgyNyAxOTYuODM3IDE5OS4yNDEgMTk2LjA5OSAxOTkuNzggMTk0Ljc3NUMyMDAuNjM5IDE5Mi41ODQgMjAxLjY3NCAxODkuNTE1IDIwMC40NDIgMTg3LjI2MlpcIiBmaWxsPVwiI0Y0RjRGNVwiIC8+XHJcblx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPXtjeCh7J2FjdGl2ZSc6IGlzU2VsZWN0ZWQoJ+yghOudvOuCqOuPhCcpfSl9IGRhdGEtbG9jYXRpb249XCLsoITrnbzrgqjrj4RcIiBkPVwiTTk5LjAzNzIgMjY0LjMxMkM5OS4yNTI5IDI2My4yNjIgOTkuNjA0NCAyNjEuOTE2IDk4Ljc0NjEgMjYxLjA0OUM5Ny44ODc4IDI2MC4xODIgOTYuNjM3IDI1OC45NjYgOTUuNjA2MSAyNTguMjgyQzk0LjM3MDQgMjU3LjQ2NSA5My44MDc1IDI1Ni4wNzIgOTMuMjgxMyAyNTQuNzM3QzkyLjE0OTEgMjUxLjg2NyA5My4xMzY4IDI0MC4zNyA4OS40MzYxIDI0MC40NzhDODYuMzIyIDI0MC41NjggODQuNTA0IDI0MC4zNTUgODEuMzQ0NiAyNDAuMTk1Qzc5LjE1OTkgMjQwLjA4NyA3Ni45NDA4IDI0MS44MjUgNzQuODc0OCAyNDIuMjA1QzczLjQyMTcgMjQyLjQ3OSA3MS45MzI0IDI0Mi41MDQgNzAuNDcxIDI0Mi4yNzhDNjguNzk3NSAyNDIuMDYzIDY3LjIzNjEgMjQyLjk3MyA2NS41MTA4IDI0Mi45NDdDNjMuNjk1IDI0Mi45MTkgNjEuODk4NiAyNDIuNDQgNjAuMjIwNyAyNDEuNzcyQzU3LjE0OTcgMjQwLjU0NyA1NC43NTM4IDIzOC4zMjEgNTIuMjgyMyAyMzYuMTc3QzUxLjA3NjggMjM1LjEyOSA0OS4yMTU2IDIzMi43MjcgNDcuNjAyNSAyMzIuNDI1QzQ2LjQwNTYgMjMyLjIwOSA0NS4wMTQ2IDIzMi44OTcgNDMuOTEwNCAyMzMuMjM4QzQzLjYzNTcgMjMzLjMxMiA0My4zNjkxIDIzMy40MTQgNDMuMTE0NiAyMzMuNTQyQzQyLjI4NjUgMjM0LjAwMSA0MS41ODEzIDIzNS4xNzQgNDEuMDgzMSAyMzUuOTYyQzQwLjQzNjEgMjM2Ljk4NiA0MC4xMTcgMjM4LjIxMSAzOS42MjUzIDIzOS4zMTFDMzguODc5MSAyNDAuOTc4IDM3LjA3NjIgMjQyLjE4NiAzNS4yODE5IDI0Mi44NzRDMzQuNTM3MiAyNDMuMTIgMzMuNzU2NiAyNDMuMjQxIDMyLjk3MjIgMjQzLjIzMkMzMS41Mjk0IDI0My4yNzkgMzAuMDAyNiAyNDMuMjMyIDI4Ljc3NzYgMjQyLjQ2NEMyOC4wMTg1IDI0MS45ODkgMjYuNzkzNSAyNDEuMjc4IDI2LjI0MTUgMjQwLjU3MkMyNS4wMjUxIDIzOS4wMTggMjMuOTE2NiAyMzcuMzE2IDIyLjY5MTcgMjM1Ljc5NkMyMS42NTIyIDIzNC41MDIgMjEuMjc3IDIzNC41MjggMjAuNjY4OCAyMzUuOTY4QzE5LjIzNjggMjM5LjM2IDE5Ljc3MTcgMjQxLjA4NCAxNy42NDk2IDI0NC4yODRDMTYuOTY1OSAyNDUuMzE3IDE1Ljg0MDIgMjQ1Ljk1NyAxNS4yMTY5IDI0Ni45OTVDMTQuMDU4OSAyNDguOTI1IDE2LjU1NjIgMjUxLjkwMyAxNC4zNTQzIDI1My4yNDlDMTIuNTE2OSAyNTQuMzY2IDkuMzU3NDkgMjUyLjk2IDcuNjg4MjggMjUyLjA5M0M1LjMzOTc1IDI1MC44NzcgMi45MzI5OSAyNTIuNTM5IDEuMjMxNDQgMjU0LjI1QzAuMDU2MDk5NyAyNTUuNDI5IC0wLjg0NzUxMiAyNTcuMzU5IDEuMjEyMDMgMjU4LjIxMUMyLjI1Nzk4IDI1OC42NDMgMi40NTg1NCAyNTcuODUzIDMuMzE5MDIgMjU4LjgzQzQuNTE4MDkgMjYwLjE5NyAzLjI2NTExIDI2My42NTQgNC44NDU4OSAyNjQuMTk4QzcuNDE4NyAyNjUuMDg0IDEwLjU2MDkgMjYxLjE3OSAxMi4yMjE0IDI2NC45NzRDMTMuMTI5NCAyNjcuMDUxIDEwLjg1NDIgMjY3LjkzNyAxMC42Mzg1IDI2OS44NjhDMTAuMzIxNSAyNzIuNzEyIDExLjkzMjUgMjc0LjAzNiAxMy4zMzY0IDI3Ni4xMTFDMTQuNzEwMSAyNzguMTI1IDEzLjI1MDEgMjgwLjc0MSAxMi41Mjk4IDI4Mi45MTdDMTEuNTE4NCAyODUuOTc3IDEyLjA0ODkgMjg5LjM2OCAxMC45OTY1IDI5Mi4zNUMxMC4yNDE3IDI5NC40ODkgOC42MjQyNCAyOTYuOTc4IDYuNTE3MjUgMjk4LjAxMUMzLjgwODU3IDI5OS4zMzcgMS4wMzUxOSAzMDEuMDggMi42NTkxMSAzMDQuNkMzLjY4MTMzIDMwNi44MTcgNS45NjUxNiAzMDguOSA4LjUwMTMyIDMwOC42OTdDMTAuNjg1OSAzMDguNTI5IDEzLjY0NDggMzA3LjQ2NiAxNS4zODUyIDMwNi4xNDRDMTcuMjIwNCAzMDQuNzQ4IDE4Ljc4NCAzMDIuNDA0IDIxLjQ0MyAzMDIuOTI2QzIzLjQ5ODMgMzAzLjMyOSAyNC4yNzY4IDMwNC44MzIgMjQuNDYyMyAzMDYuNzc2QzI0LjY5NzMgMzA5LjIwNCAyNC4zMjg2IDMxMC40NjggMjYuMDM2NiAzMTIuNTY2QzI3LjIyNDkgMzE0LjAyNiAyOC43NzMzIDMxNC4yMzUgMzAuNjAyMSAzMTMuODA4QzMyLjI5OTMgMzEzLjQxNCAzMy45NTEzIDMxMi44MjMgMzUuNjY1OCAzMTIuNTE0QzM3LjMwMjYgMzEyLjIwOCAzOC43NDc1IDMxMy4wNTggNDAuMjU1IDMxMi44MTRDNDQuMzg3IDMxMi4xNDEgNDkuMjgwMyAzMTEuOTI4IDUxLjE5MTEgMzA3LjkxQzUyLjk1MyAzMDQuMjA3IDUzLjQ5NjUgMzAwLjAzMiA1NS40NzE5IDI5Ni40MkM1Ny4yNDAzIDI5My4xODUgNjIuOTM4IDI4OS4yMDQgNjIuMzg1OSAyOTUuOTNDNjIuMjQzNiAyOTcuNjU1IDYwLjc5ODcgMjk5LjI3NSA2MS42MzExIDMwMC45NjZDNjIuMjc4MSAzMDIuMzA1IDYzLjQ4MTUgMzAzLjM2OCA2NC45OTc2IDMwMy41MzZDNjYuMTYgMzAzLjY2NCA2Ny4xOTk1IDMwMy4wMTQgNjguNDA3MSAzMDMuMTc2QzcxLjc4NjUgMzAzLjYyOSA3My43NjQxIDMwNS4yMzQgNzYuNTE4MSAzMDEuOTQ3Qzc4LjEzMTIgMzAwLjAyMSA3OS4yMTgyIDI5OC43MTIgODEuNDc4MyAyOTcuMzA2QzgzLjIyNzMgMjk2LjIyOCA4NC43MzkgMjk1LjM2NSA4NS4xNzY4IDI5NS4xNDlDOTIuMTE0NiAyOTEuNDIxIDkyLjE3MDYgMjg0Ljk5OCA5NS4yMzUyIDI3OC4xNzNDOTYuMTM2NiAyNzYuMTYzIDk3LjA0MjQgMjc1LjY2NyA5OC4xNDQ0IDI3My43NzNDOTguNjMyNiAyNzIuOTUgOTguOTg5OCAyNzIuMDU2IDk5LjIwMzMgMjcxLjEyM0M5OC44OTI4IDI2OC44MjQgOTguNTQ5OCAyNjYuNzE5IDk5LjAzNzIgMjY0LjMxMlpNNjUuMTAzMyAyNjEuMDE1QzY0LjgyMDcgMjYyLjM5MSA2My4wOTU1IDI2NS4zOCA2Mi4yMTU2IDI2Ni40NzdDNjEuOTMzNSAyNjYuODYzIDYxLjUyODUgMjY3LjE0IDYxLjA2NzUgMjY3LjI2NUM2MC42MDY1IDI2Ny4zODkgNjAuMTE2OSAyNjcuMzUyIDU5LjY3OTQgMjY3LjE2MUM1OS41MzkyIDI2Ny4xMDMgNTkuNDAzNCAyNjcuMDMgNTkuMjY1NCAyNjYuOTY3QzU1Ljg4NiAyNjUuNDAzIDUzLjAxMTIgMjcwLjEzMyA0OS43NzY0IDI3MC4wNTNDNDguNTA0IDI3MC4wMjEgNDYuOTAzOCAyNjguNjYyIDQ2LjAzOSAyNjcuOTUzQzQ0LjkxMzIgMjY3LjAzNCA0My41NTI5IDI2Ni40NDggNDIuMTExOCAyNjYuMjYyQzQxLjA5MTcgMjY2LjE0MSAzNi43MzU0IDI2NS4yODEgMzcuMDM5NSAyNjMuMjU4QzM3LjE5MDUgMjYyLjI0NCAzNy42MjM5IDI2MC45NDggMzcuNzc3MSAyNTkuOTMyQzM3Ljk2NjggMjU4LjY2NiAzNy4zMTc3IDI1Ni4zNjEgMzguNDU4NSAyNTUuNTY5QzM4LjcwMjIgMjU1LjQwMSAzOC45NzgzIDI1NS4yOCAzOS4yMDI2IDI1NS4wOTFDMzkuNDMwNSAyNTQuODczIDM5LjYyNjUgMjU0LjYyNCAzOS43ODQ5IDI1NC4zNTFDNDAuMTU3OSAyNTMuNzg4IDQyLjI0NTUgMjUxLjg1NCA0Mi42OTE5IDI1MS4zNDdDNDMuMjMxMSAyNTAuNzMgNDQuMDU3MSAyNTAuMDM2IDQ0Ljg5MTcgMjUwLjI0N0M0NS4xMjMzIDI1MC4zMTYgNDUuMzQ5IDI1MC40MDMgNDUuNTY2NyAyNTAuNTA4QzQ2Ljc4MyAyNTEuMDM2IDQ4LjY5NTkgMjUxLjUxMyA1MC4wMTM2IDI1MS4zN0M1MS40MTk3IDI1MS4yMjggNTIuMzU3OCAyNTAuMjM2IDUzLjYzNjYgMjQ5LjczNkM1NC4zMTYgMjQ5LjQ3MSA1NS4wNDI3IDI0OS4yMzEgNTUuNzY1MiAyNDkuMzM5QzU2Ljk3NzIgMjQ5LjUyIDU3LjYzNzEgMjUwLjU1MyA1OC4zMTQzIDI1MS40MzFDNTguOTYxMyAyNTIuMjYzIDYxLjM0NjUgMjU1LjAxNyA2Mi4xOTYyIDI1NS42NDNDNjIuNTUzMiAyNTUuOTA5IDYyLjkzNTMgMjU2LjEzOSA2My4zMzcgMjU2LjMzMUM2My43ODk5IDI1Ni41NDYgNjQuMjgxNiAyNTYuNzEyIDY0LjY1MDQgMjU3LjA1M0M2NS41MTczIDI1Ny44NjggNjUuMzIzMiAyNTkuOTg0IDY1LjEwOTcgMjYxLjAxNUg2NS4xMDMzWlwiIGZpbGw9XCIjRjRGNEY1XCIgLz5cclxuXHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9e2N4KHsnYWN0aXZlJzogaXNTZWxlY3RlZCgn7KCE652867aB64+EJyl9KX0gZGF0YS1sb2NhdGlvbj1cIuyghOudvOu2geuPhFwiIGQ9XCJNMTA0LjI3NiAxOTUuMTA5QzEwNC4zMTkgMTk0LjU2NiAxMDQuMjkzIDE5NC4wMTQgMTA0LjM3MSAxOTMuNDcyQzEwNC40MjcgMTkzLjA2MyAxMDQuNjQgMTkyLjYxIDEwNC42MTQgMTkyLjE3OEMxMDQuNTU0IDE5MS4yMzYgMTAzLjUxOSAxOTEuNjU5IDEwMi44NTIgMTkxLjcwMkMxMDEuMjIyIDE5MS44MDUgOTkuNjcxMyAxOTEuMzM3IDk4LjA4NjIgMTkxLjAyOUM5Ny4yOTkxIDE5MC44NzQgOTYuMjUzMSAxOTAuNjg0IDk1LjQ3ODkgMTkwLjQ2NEM5NC43MDQ3IDE5MC4yNDQgOTQuMDc3MSAxODkuOTA4IDkzLjI3NDkgMTg5Ljk2OEM5Mi4zNTE4IDE5MC4wNDEgOTIuMDg4NyAxOTEuMDcyIDkxLjI4NDMgMTkxLjQ0MUM5MC4zMTM4IDE5MS44ODUgODkuMzc3OSAxOTIuMzY2IDg4LjM0MDYgMTkyLjY1M0M4Ny4zMDMzIDE5Mi45NCA4Ni41MjI2IDE5My40MzQgODUuNjQwNSAxOTQuMDg3Qzg0LjQ2MDkgMTk0Ljk2MyA4Mi43MTgzIDE5NC42MTEgODEuMzI3MyAxOTQuMzAzQzgwLjM1NDcgMTk0LjA4NyA3OC4wNzA5IDE5My43MzggNzcuMzExOCAxOTMuMDczQzc2LjQ0OTEgMTkyLjMyNSA3Ni40MzYyIDE5MC45ODggNzUuNzgwNiAxOTAuMDU0Qzc1LjU1MDggMTg5Ljc0IDc1LjI5NTUgMTg5LjQ0NiA3NS4wMTcxIDE4OS4xNzRDNzQuMzE4NCAxODguNDc2IDczLjUwNzUgMTg3LjU5NCA3Mi44MzAzIDE4Ny4yN0M3MC44MzU1IDE4Ni4zMjggNjkuNjk0NyAxODcuNDg2IDY3LjY1NDUgMTg3LjcyNUM2Ni4zOCAxODcuODc2IDY0Ljg1MDkgMTg4LjI5OSA2My41OTggMTg4LjA0OUM2Mi4yNTg3IDE4Ny43ODUgNjEuMjUxNiAxODcuMjc3IDYwLjA5MTMgMTg2LjU4NkM1OS4wNzk5IDE4NS45ODcgNTguNzA2OCAxODUuNDA3IDU3LjYxNTYgMTg0Ljk2N0M1NC4xMjg0IDE4My41NTkgNTAuNDY2NSAxODIuODk2IDQ4LjE0NiAxODYuNTU0QzQ3LjQ0OTQgMTg3LjY1IDQ2LjkyMSAxODguOTI2IDQ1LjgzNDEgMTg5LjY5QzQ0LjYzMDcgMTkwLjUzMyA0My4zNzc3IDE5MS4zMTQgNDIuMTAxIDE5Mi4wMzhDNDEuMTAyNSAxOTIuNjA1IDQwLjA0MzcgMTkzLjM2NSAzOC45MDA3IDE5My41NTlDMzguMjcwOSAxOTMuNjY3IDM3LjYyNCAxOTMuNDQ5IDM2Ljk5NDIgMTkzLjQ0NEMzNi4xNTc1IDE5My40NDQgMzUuNzg2NSAxOTMuNzg1IDM1LjI4NDEgMTk0LjQxMUMzNC42MzcxIDE5NS4yMjggMzMuMDYyOCAxOTcuMTU4IDMzLjY5NDYgMTk4LjMyOUMzNC40Mjc5IDE5OS42ODMgMzYuNDAxMiAxOTkuMDc3IDM3LjUxNCAxOTkuNzJDNDAuOTQyOSAyMDEuNzAyIDM2LjQwNzYgMjA0Ljk4NiAzNC45NzM1IDIwNi4yODlDMzMuNDEgMjA3LjcxIDMzLjA0OTggMjEwLjE3MSAzMi41ODgzIDIxMi4xMzFMMjguNzA2NCAyMTQuNzQzQzI2LjkxNDMgMjE1Ljk0OCAyMy42MTQ3IDIxNy4yNTUgMjMuNzcgMjE5LjgwNEMyMy45MjUzIDIyMi4zNTQgMjguNjI0NSAyMjEuNDExIDMwLjI2MTQgMjIxLjg5OUMzMC45MDgzIDIyMi4wOTMgMzEuNzAyIDIyMi40NjEgMzEuNjg5IDIyMy4xNDNDMzEuNjc4MiAyMjMuNzI3IDMxLjA3MjIgMjI0LjA4NyAzMC41NTAzIDIyNC4zNDhDMjguMDQ0NCAyMjUuNjAxIDI2LjU0NzcgMjI3LjE1MiAyNC4zOTk3IDIyOC45NDhDMjAuNjU1OSAyMzIuMDg0IDI0LjY3NTggMjM1Ljc3OCAyNi45MSAyMzguNjM2QzI3LjQ2MjEgMjM5LjM0MSAyOC4wNDAxIDI0MC4wNTMgMjguNzk5MiAyNDAuNTI3QzMwLjAyNDEgMjQxLjI5MSAzMS41NTEgMjQxLjM0MiAzMi45OTM4IDI0MS4yOTVDMzMuNzc4MiAyNDEuMzA1IDM0LjU1ODggMjQxLjE4NCAzNS4zMDM1IDI0MC45MzdDMzcuMDk3NyAyNDAuMjQ5IDM4LjAzOCAyMzguNjEgMzguNzg0MiAyMzYuOTQzQzM5LjM1MzUgMjM1LjY3MSAzOS45NTUyIDIzMi43OTQgNDEuNDc1NiAyMzIuMzczQzQxLjcyOCAyMzIuMzA0IDQxLjk5NTQgMjMyLjMwNiA0Mi4yNDc3IDIzMi4yNDRDNDIuNzI2NSAyMzIuMTI1IDQzLjExMDMgMjMxLjc5MyA0My41NDE2IDIzMS41MzZDNDQuMzYxMiAyMzEuMDM2IDQ1LjMxNjUgMjMwLjgxOCA0Ni4yNTQ2IDIzMC42MDlDNDYuNzAwOCAyMzAuNDc4IDQ3LjE2ODQgMjMwLjQzNyA0Ny42MzA2IDIzMC40ODhDNDkuMjQzNyAyMzAuNzgyIDUxLjEwNDggMjMzLjE5MyA1Mi4zMTA0IDIzNC4yNDFDNTQuNzgxOCAyMzYuMzk3IDU3LjM5MzUgMjM4LjgyNiA2MC40NjQ0IDI0MC4wNTFDNjIuMTQyMyAyNDAuNzE5IDYzLjkzODcgMjQxLjE5OCA2NS43NTQ2IDI0MS4yMjZDNjcuNDc5OCAyNDEuMjUyIDY5LjA0MTIgMjQwLjMzNyA3MC43MTQ3IDI0MC41NTdDNzIuMTc2MiAyNDAuNzgzIDczLjY2NTQgMjQwLjc1OSA3NS4xMTg1IDI0MC40ODRDNzcuMTczNyAyNDAuMTA0IDc4LjMxNDYgMjM4Ljc5OCA4MC41MSAyMzguOTA1QzgzLjA3NDkgMjM5LjAzNSA4NS42NDEyIDIzOS4wNzYgODguMjA5IDIzOS4wMjhDODguNzAyOSAyMzkuMDI4IDg5LjIyMjYgMjM4Ljk5OCA4OS42NDc1IDIzOC43NDRDODkuOTc0NiAyMzguNTE4IDkwLjI0MzYgMjM4LjIxOCA5MC40MzI1IDIzNy44NjhDOTIuMDk3MyAyMzUuMTU5IDkyLjM0NzUgMjMyLjMzNiA5MC44MjA3IDIyOS41NTRDOTAuNDgyMSAyMjguOTMzIDg5Ljk1OCAyMjguNDM1IDg5LjYxMyAyMjcuODE0Qzg4LjMzNDEgMjI1LjQ5NCA4OC45NjYgMjIyLjk0MiA4OS45MDg0IDIyMC42ODRDOTAuNTU1NCAyMTkuMTM2IDkwLjg1NTIgMjE3LjMyMiA5MS4xMTE4IDIxNS42NzJDOTEuMzEyNCAyMTQuMzc4IDkxLjQzNzQgMjEzLjA4NSA5MS43NzE3IDIxMS44MTJDOTIuNDUxIDIwOS4yNjMgOTQuMDYyIDIwOC4yOTMgOTYuMDA3MyAyMDYuNzMzQzk3Ljk1MjUgMjA1LjE3NCA5Ny41Mjk4IDIwMy4zMDkgOTkuNjczNSAyMDIuMDk0QzEwMS4xMTQgMjAxLjI3NSAxMDIuNjQ3IDIwMC40NzEgMTAzLjk4NyAxOTkuNDU5QzEwMy45ODcgMTk5LjA4MiAxMDQuMDE1IDE5OC42NjMgMTA0LjA1OCAxOTguMTc4QzEwNC4xMjUgMTk3LjE0NSAxMDQuMTk2IDE5Ni4xMzEgMTA0LjI3NiAxOTUuMTA5WlwiIGZpbGw9XCIjRjRGNEY1XCIgLz5cclxuXHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9e2N4KHsnYWN0aXZlJzogaXNTZWxlY3RlZCgn7Lap7LKt67aB64+EJyl9KX0gZGF0YS1sb2NhdGlvbj1cIuy2qeyyreu2geuPhFwiIGQ9XCJNNzguNjU1MyAxNTAuNDU5Qzc5LjA5MiAxNTEuNzU5IDc5LjQyNTIgMTUzLjA5MiA3OS42NTE2IDE1NC40NDVDNzkuNzg3NSAxNTUuMTYzIDc5LjgyNDIgMTU1LjY4IDc5Ljg5NTMgMTU2LjQwNUM3OS45NDI4IDE1Ni44NzcgNzkuNTc4MyAxNTcuNzk2IDc5LjgwMDQgMTU4LjE3OEM4MC4wMjI2IDE1OC41NTkgODAuNTgzMyAxNTguNDk3IDgxLjAyNzUgMTU4LjQ2MkM4Mi4yODQ4IDE1OC4zNTkgODMuMTg0MSAxNTguNzM4IDgzLjY0NTcgMTU5Ljg2MkM4NC4xMzk1IDE2MS4wNTcgODUuMDMyMyAxNjIuMzE4IDg1LjY0OTEgMTYzLjQ1MUM4Ni4xMTA2IDE2NC4yOTYgODcuMjY0NCAxNjYuMDY0IDg2LjI2MzggMTY3LjY4Qzg1LjI2MzEgMTY5LjI5NSA4NC42NTA2IDE3MC4wNTIgODUuMTEyMSAxNzIuMDZDODUuNDExOSAxNzMuMzU0IDg1LjA3MzMgMTc1LjY2NSA4NC45NTA0IDE3Ni45NjRDODQuOTIzNiAxNzcuMjQyIDg0Ljk4NjMgMTc3LjUyMiA4NS4xMjk0IDE3Ny43NjNDODUuMjcyNSAxNzguMDAzIDg1LjQ4ODYgMTc4LjE5MiA4NS43NDYyIDE3OC4zMDFDODYuODMxOCAxNzguNzcgODcuODkxNSAxNzkuMjk3IDg4LjkyMDcgMTc5Ljg3OUM4OS44OTc2IDE4MC42OSA5MC4yNjg1IDE4MS40OTkgOTAuNzk5MSAxODIuNjU3QzkxLjExNTcgMTgzLjI0MSA5MS40NzYyIDE4My44MDEgOTEuODc3NCAxODQuMzMxQzkyLjM3NzcgMTg1LjA1MSA5Mi41MzczIDE4Ni4wNTYgOTIuODYwOCAxODYuODczQzkzLjA2MTMgMTg3LjM3NCA5My4xNjI3IDE4OC4wODcgOTMuNTgzMiAxODguNDVDOTQuNTAxOSAxODkuMjQxIDk2LjU1NSAxODkuMzEyIDk3LjY2NTcgMTg5LjUyOEMxMDAuNjEyIDE5MC4xMDQgMTAzLjg2NiAxOTAuOTEgMTA2Ljg1OSAxOTAuNDM4QzEwOC4yMDMgMTkwLjIyMiAxMTAuNTI1IDE4OS44OSAxMTEuNzEyIDE4OS4wNjRDMTEyLjEyOSAxODguNzMzIDExMi40NzcgMTg4LjMyMiAxMTIuNzM0IDE4Ny44NTVDMTEzLjIyMyAxODcuMDg3IDExMy45MzEgMTg2LjMxOSAxMTQuNDIyIDE4NS41NTFDMTE1LjU1NyAxODMuNzc5IDExNi43MTUgMTgxLjMwMyAxMTYuODI1IDE3OS4xMjlDMTE2Ljg3NCAxNzguMzU0IDExNi43MzggMTc3LjU3OSAxMTYuNDI4IDE3Ni44NjdDMTE0LjkxOCAxNzMuNTA1IDExMS4xMTYgMTc1LjQzMyAxMDkuMDgzIDE3My44NDdDMTA3LjcyIDE3Mi43ODIgMTA2LjY4OSAxNzEuNDQ3IDEwNi4yNDkgMTY5Ljc1QzEwNS45MSAxNjguNDM5IDEwNi4xNDUgMTY3LjQ5NiAxMDYuMTY1IDE2Ni4xNDRDMTA2LjE4NiAxNjQuODM1IDEwNi42MzkgMTYzLjYxNyAxMDYuNTQ0IDE2Mi4zMzNDMTA2LjQyMSAxNjAuNjcxIDEwNi4yOTYgMTU5LjQ5NSAxMDYuNTA2IDE1Ny4zNzNDMTA2LjU3IDE1Ni43MjYgMTA2LjU0MiAxNTYuMTYzIDEwNi42OTUgMTU1LjUzNkMxMDYuOTc0IDE1NC40MDYgMTA2Ljk4MiAxNTMuNDM3IDEwNy4wMDIgMTUyLjI3NUMxMDcuMDAyIDE1MS41MzMgMTA3LjEyNyAxNTAuNDAzIDEwNy42ODcgMTQ5Ljg0N0MxMDguMjQ4IDE0OS4yOSAxMDguNjUxIDE0OS41MTcgMTA5LjMxOCAxNDkuMTM1QzExMC43MDkgMTQ4LjMzNyAxMTAuMjggMTQ3Ljg0MSAxMTAuODg2IDE0Ni43NjNDMTExLjQ2MSAxNDUuNzQzIDExMS41NzggMTQ0LjQzNiAxMTIuNjQxIDE0My45MDdDMTE0LjExMiAxNDMuMTc2IDExNS43OTQgMTQzLjM1NSAxMTUuODA5IDE0MS4zMkMxMTUuODIxIDEzOS45ODIgMTE2LjA0NiAxMzguNjU1IDExNi40NzUgMTM3LjM4OEMxMTYuNjM3IDEzNi45MTQgMTE3LjQyOSAxMzYuMjg4IDExNy44MDQgMTM1Ljk1NkMxMTguMTc5IDEzNS42MjQgMTE4LjM5MyAxMzUuMjYgMTE4LjgzNyAxMzUuMTM0QzExOS45ODQgMTM0LjgwNyAxMjEuODggMTM0Ljc5OCAxMjMuMDQyIDEzNS4wNzJDMTIzLjk5MyAxMzUuMjg4IDEyNC43ODcgMTM1LjM4IDEyNS42OTkgMTM0Ljk4NkMxMjYuNDUgMTM0LjY2IDEyNi45NjEgMTM0Ljk4NiAxMjcuNzU0IDEzNS4yNDdDMTMwLjEyNyAxMzYuMDUzIDEzMi4wMDEgMTM3LjggMTM0LjU5MyAxMzcuODc4QzEzNS4xMTUgMTM3LjkxIDEzNS42MzggMTM3LjgyNSAxMzYuMTIyIDEzNy42MjdDMTM3LjIgMTM3LjE0MiAxMzguNjI4IDEzNS4wODcgMTM4LjcyMyAxMzMuOTgxQzEzOC44NSAxMzIuNDUyIDEzNy45NTkgMTMxLjM5MyAxMzcuNjQ1IDEzMC4wNTRDMTM3LjQyOSAxMjkuMDcyIDEzNy44NDUgMTI3LjQxIDEzOC4yMTIgMTI2LjUwNEMxMzguMjgxIDEyNi4zMzMgMTM4LjU3NCAxMjYuMTY3IDEzOC42NiAxMjYuMDA4QzE0MC42MjUgMTIyLjMyNiAxNDUuNDUxIDEyMC45MDMgMTQ4Ljg1IDExOS42OThDMTQ3LjA4NiAxMTkuMDc5IDE0My41NjkgMTE4LjE4OCAxNDEuODA1IDExNy41NzFDMTQwLjk0MiAxMTcuMjcxIDEzOS4yMzYgMTE2Ljc1NiAxMzguNDI3IDExNi4zNTVDMTM2LjY1NSAxMTUuNDczIDEzNS4zMDUgMTEzLjczNyAxMzMuNTc3IDExMi44MjJDMTMxLjY3MSAxMTEuODEzIDEyOS42NDQgMTEwLjM2MiAxMjcuNTY5IDEwOS43MDhDMTI0LjAxNyAxMDguNTg3IDExOS44MDUgMTA4LjA4OSAxMTYuMTM5IDEwOC45MzhDMTEzLjAyOSAxMDkuNjU2IDExMC4wMzQgMTEwLjk4NSAxMDYuOTY5IDExMS44NkMxMDUuNzk2IDExMi4xOTcgMTA0LjY4MSAxMTMuMDM4IDEwMy40NDcgMTEyLjg4N0MxMDIuNTQgMTEyLjc3NyAxMDEuNTg2IDExMi42NzEgMTAwLjkyOSAxMTIuMDI0QzEwMC44NTMgMTExLjk0NiAxMDAuNzYyIDExMS44ODQgMTAwLjY2MSAxMTEuODQ0QzEwMC41NiAxMTEuODAzIDEwMC40NTEgMTExLjc4MyAxMDAuMzQzIDExMS43ODdDMTAwLjIzNCAxMTEuNzkgMTAwLjEyNyAxMTEuODE2IDEwMC4wMjkgMTExLjg2NEM5OS45MzA0IDExMS45MTEgOTkuODQzMiAxMTEuOTc4IDk5Ljc3MjcgMTEyLjA2MUw5OS41ODI5IDExMi4yNzdDOTkuMTk2OSAxMTIuNjkzIDk4LjggMTEyLjg4MyA5OC4zOTAzIDExMy4yNzVDOTcuMTA5MyAxMTQuNTA0IDk4LjA5NDggMTEzLjg5NiA5Ni42MTk3IDExNC44ODRDOTUuMjA5MyAxMTUuODI5IDk0LjE4NDkgMTE3LjE2OCA5Mi43MjI3IDExOC4wMzVDOTEuMjYwNiAxMTguOTAyIDg5Ljk4MzkgMTE4Ljk4MiA4OC40MzExIDExOS40NzVDODYuNzgzNSAxMjAuMDAyIDg1LjMyNzggMTIwLjkzNSA4My43NzA3IDEyMS43MTJDODIuODQxMiAxMjIuMTczIDgxLjczNDkgMTIyLjQ2NCA4MC44NTI5IDEyMi45M0M4MC4wNzIyIDEyMy4zNDQgNzkuNDg1NiAxMjQuMTkgNzguNzQzNyAxMjQuNjY2Qzc4LjA2MjIgMTI1LjA5OCA3Ny4zMTE3IDEyNS42NTQgNzYuNjc1NSAxMjYuMTU3Qzc2LjI5MzggMTI2LjQ1OCA3NS45NTA5IDEyNi44MjMgNzUuNTEzMSAxMjcuMDM5Qzc0LjU0MDUgMTI3LjUxNSA3Mi45ODk5IDEyNi45NTcgNzMuMDA3MiAxMjcuOTlDNzMuMTUzOCAxMjguMjI1IDczLjMwMDUgMTI4LjQ2MiA3My40NTM2IDEyOC42OTVDNzQuMTUwMiAxMjkuNzczIDc0LjI3MzEgMTMwLjcwNSA3NC45ODQ4IDEzMS43NjZDNzUuNTkyOSAxMzIuNjcyIDc2LjY0NTMgMTMzLjgyOCA3Ny4zMzExIDEzNC42NkM3OC4wNDcxIDEzNS41MjMgODEuMjAyMiAxMzguOTczIDgwLjA5MzcgMTQwLjAzOUM3OS45Mjc3IDE0MC4xOTggNzkuNzIyOCAxNDAuNzM3IDc5LjUyMjIgMTQwLjg0OUM3OC42NTk2IDE0MS4zMzcgNzcuNjIwMSAxNDEuMjU1IDc3LjE3MzcgMTQyLjE3MUM3Ni43NjYxIDE0My4wMTcgNzYuNDY0MiAxNDIuODQgNzUuNjE2NyAxNDMuMjNDNzQuOTk1NiAxNDMuNTE3IDcyLjA4MiAxNDMuNzk3IDczLjQwNCAxNDQuNTg5Qzc1LjIxMzQgMTQ1LjY3OCA3Ny45MDI2IDE0OC4zNzQgNzguNjU1MyAxNTAuNDU5WlwiIGZpbGw9XCIjRjRGNEY1XCIgLz5cclxuXHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9e2N4KHsnYWN0aXZlJzogaXNTZWxlY3RlZCgn7KCc7KO87Yq567OE7J6Q7LmY64+EJyl9KX0gZGF0YS1sb2NhdGlvbj1cIuygnOyjvO2KueuzhOyekOy5mOuPhFwiIGQ9XCJNMjQxLjk0NSAyNzcuMDE4TDIzNS45MDcgMjc3LjYxN0MyMzUuODMzIDI3Ny42MTcgMjM1Ljc2IDI3Ny42MzUgMjM1LjY5MSAyNzcuNjQ4QzIzNC4wNjUgMjc3LjkyOCAyMTUuMjc0IDI4MS4zMTQgMjA4LjUzOSAyODguMzI5QzIwNy4xNTcgMjg5LjgzIDIwNi4wMzQgMjkxLjU1MiAyMDUuMjE4IDI5My40MjNDMjA1LjAyOSAyOTMuODk0IDIwNC45NjEgMjk0LjQwNSAyMDUuMDIxIDI5NC45MDlDMjA1LjA4MiAyOTUuNDEzIDIwNS4yNjggMjk1Ljg5NCAyMDUuNTYzIDI5Ni4zMDZMMjA4LjkyOCAzMDEuMDI3QzIwOS4xNjkgMzAxLjM3MiAyMDkuNDgxIDMwMS42NjMgMjA5Ljg0MyAzMDEuODhDMjEwLjIwNCAzMDIuMDk2IDIxMC42MDcgMzAyLjIzNSAyMTEuMDI2IDMwMi4yODZDMjExLjQ0NCAzMDIuMzM2IDIxMS44NjggMzAyLjI5OSAyMTIuMjcxIDMwMi4xNzVDMjEyLjY3NCAzMDIuMDUxIDIxMy4wNDYgMzAxLjg0NCAyMTMuMzY0IDMwMS41NjZMMjEzLjQzOSAzMDEuNDk3QzIxMy43NDcgMzAxLjIwOCAyMTQuMTEyIDMwMC45ODYgMjE0LjUxMSAzMDAuODQ2QzIxNC45MSAzMDAuNzA2IDIxNS4zMzQgMzAwLjY1MSAyMTUuNzU1IDMwMC42ODRMMjIxLjMzNyAzMDEuMTM3QzIyMS41ODQgMzAxLjE1OSAyMjEuODMzIDMwMS4xNDggMjIyLjA3OCAzMDEuMTA3QzIyMy4yNjkgMzAwLjkwOSAyMjcuMTM4IDMwMC4zMDcgMjI5Ljc3NSAzMDAuMzk4QzIzMC4yNjEgMzAwLjQxMiAyMzAuNzQzIDMwMC4zMDkgMjMxLjE4IDMwMC4wOTZDMjMxLjYxNyAyOTkuODgzIDIzMS45OTUgMjk5LjU2OCAyMzIuMjgzIDI5OS4xNzdMMjMyLjg4NSAyOTguMzY0QzIzMy4yMTUgMjk3LjkxOSAyMzMuNjYgMjk3LjU3MyAyMzQuMTczIDI5Ny4zNjRDMjM0LjY4NSAyOTcuMTU2IDIzNS4yNDYgMjk3LjA5MiAyMzUuNzkyIDI5Ny4xOEwyMzcuMDg2IDI5Ny4zODVDMjM3LjU5MyAyOTcuNDY3IDIzOC4xMTMgMjk3LjQxOSAyMzguNTk2IDI5Ny4yNDVMMjQzLjQyNCAyOTUuNTE5QzI0My44MDggMjk1LjM4MiAyNDQuMTYgMjk1LjE2OSAyNDQuNDU5IDI5NC44OTJDMjQ0Ljc1OCAyOTQuNjE1IDI0NC45OTggMjk0LjI4IDI0NS4xNjUgMjkzLjkwOEMyNDUuNzkgMjkyLjUwNCAyNDYuOTgxIDI5MC4xNiAyNDguNDYyIDI4OC43NzNDMjQ4Ljc3IDI4OC40OTEgMjQ5LjAxNyAyODguMTQ4IDI0OS4xODcgMjg3Ljc2NkMyNDkuMzU3IDI4Ny4zODMgMjQ5LjQ0NyAyODYuOTcgMjQ5LjQ1IDI4Ni41NTJWMjg0LjkxNUMyNDkuNDUgMjg0LjM1MiAyNDkuMjkzIDI4My44MDEgMjQ4Ljk5NyAyODMuMzIyTDI0Ny40NCAyODAuODA5QzI0Ny4yNjcgMjgwLjUyNyAyNDcuMDQ4IDI4MC4yNzYgMjQ2Ljc5MyAyODAuMDY1QzI0NS42OTUgMjc5LjE2NiAyNDIuNjc2IDI3Ni43NyAyNDEuOTQ1IDI3Ny4wMThaXCIgZmlsbD1cIiNGNEY0RjVcIiAvPlxyXG5cdFx0XHRcdDxyZWN0IGRhdGEtbG9jYXRpb249XCLsoJzso7zrj4TthYzrkZDrpqxcIiB4PVwiMTg5LjVcIiB5PVwiMjYxLjVcIiB3aWR0aD1cIjc1LjQ0OTlcIiBoZWlnaHQ9XCI1Ni4zMDc2XCIgcng9XCI3LjVcIiBzdHJva2U9XCIjRTdFOEVBXCIgLz5cclxuXHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9e2N4KHsnYWN0aXZlJzogaXNTZWxlY3RlZCgn6rK97IOB67aB64+EJyl9KX0gZGF0YS1sb2NhdGlvbj1cIuqyveyDgeu2geuPhFwiIGQ9XCJNMjQ1LjQ4MyA3OC4yOTA5TDI0NC43NDggNzguNDcyMUMyNDQuNDE1IDc4LjU1NDggMjQ0LjA5OCA3OC42OTE4IDI0My44MDkgNzguODc3NUMyNDIuNzU5IDc5LjU1NjkgMjM5LjcxMiA4MC43NjI0IDIzOS41NjMgODIuMTEyNEMyMzkuMzg0IDgzLjc3OTUgMjQyLjI1MiA4NC41OTAzIDI0My4zMjYgODUuMjYxQzI0My43MjMgODUuNTEzOCAyNDQuMTcyIDg1LjY3MTIgMjQ0LjYzOSA4NS43MjFDMjQ1LjEwNyA4NS43NzA3IDI0NS41NzkgODUuNzExNSAyNDYuMDIgODUuNTQ3OUMyNDcuNDYxIDg0Ljk5MzYgMjQ4LjM5MiA4My43NjIyIDI0OC45MzEgODIuNzk4MkMyNDkuMjI2IDgyLjI3MDkgMjQ5LjM2IDgxLjY2OSAyNDkuMzE3IDgxLjA2NjZDMjQ5LjI3NCA4MC40NjQxIDI0OS4wNTUgNzkuODg3NCAyNDguNjg5IDc5LjQwNzVDMjQ4LjMyMiA3OC45Mjc2IDI0Ny44MjMgNzguNTY1MyAyNDcuMjUzIDc4LjM2NTRDMjQ2LjY4MyA3OC4xNjU1IDI0Ni4wNjcgNzguMTM2NiAyNDUuNDgxIDc4LjI4MjNMMjQ1LjQ4MyA3OC4yOTA5WlwiIGZpbGw9XCIjRjRGNEY1XCIgLz5cclxuXHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9e2N4KHsnYWN0aXZlJzogaXNTZWxlY3RlZCgn6rK97IOB67aB64+EJyl9KX0gZGF0YS1sb2NhdGlvbj1cIuqyveyDgeu2geuPhFwiIGQ9XCJNMjU5Ljc4OCA4NS4xMzE2TDI1OS4yNjEgODUuMjYxQzI1OS4wMjMgODUuMzIwNyAyNTguNzk3IDg1LjQxOSAyNTguNTkxIDg1LjU1MjJDMjU3LjkxOCA4NS45ODM1IDI1Ny4yMDYgODYuMzg4OSAyNTYuNTYzIDg2Ljg2MzRDMjU1LjQyOSA4Ny42OTggMjU1LjgyNiA4OC40MjA0IDI1Ni44NSA4OS4yNTA3QzI1Ny43MTMgODkuOTQzIDI1OS4wMDcgOTAuNzYwNCAyNjAuMTI4IDkwLjM0ODRDMjYxLjIwNyA4OS45NTM4IDI2MS44ODQgODkuMDM1MSAyNjIuMjcyIDg4LjMyOTlDMjYyLjQxMSA4OC4wNzQxIDI2Mi40OTcgODcuNzkzMSAyNjIuNTI2IDg3LjUwMzZDMjYyLjU1NSA4Ny4yMTQgMjYyLjUyNiA4Ni45MjE2IDI2Mi40NCA4Ni42NDM0QzI2Mi4yNzYgODYuMDk5NSAyNjEuOTA5IDg1LjYzOTQgMjYxLjQxNiA4NS4zNTgxQzI2MC45MjIgODUuMDc2OCAyNjAuMzM5IDg0Ljk5NTcgMjU5Ljc4OCA4NS4xMzE2Vjg1LjEzMTZaXCIgZmlsbD1cIiNGNEY0RjVcIiAvPlxyXG5cdFx0XHQ8L3N2Zz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoTWFwKTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9tYXAubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL21hcC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL21hcC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0RBVEEgPSBbXHJcblx0J+yEnOyauO2KueuzhOyLnCcsICfqsr3quLDrj4QnLCAn7J247LKc6rSR7Jet7IucJywgJ+u2gOyCsOq0keyXreyLnCcsXHJcblx0J+uMgOq1rOq0keyXreyLnCcsICfqtJHso7zqtJHsl63si5wnLCAn64yA7KCE6rSR7Jet7IucJywgJ+yauOyCsOq0keyXreyLnCcsXHJcblx0J+yEuOyihe2KueuzhOyekOy5mOyLnCcsICfqsJXsm5Drj4QnLCAn7Lap7LKt64Ko64+EJywgJ+qyveyDgeuCqOuPhCcsXHJcblx0J+qyveyDgeu2geuPhCcsICfsoITrnbzrgqjrj4QnLCAn7KCE652867aB64+EJywgJ+y2qeyyreu2geuPhCcsXHJcblx0J+ygnOyjvO2KueuzhOyekOy5mOuPhCdcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtvcmVhTWFwVUlTdG9yZSB7XHJcblx0QG9ic2VydmFibGUgcHJpdmF0ZSBfc2VsZWN0ZWRMb2NhdGlvbnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHJcblx0Z2V0IHNlbGVjdGVkTG9jYXRpb25zICgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucztcclxuXHR9XHJcblxyXG5cdGlzU2VsZWN0ZWQgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuaGFzKG5hbWUpO1xyXG5cdH1cclxuXHJcblx0QGFjdGlvblxyXG5cdHRvZ2dsZUxvY2F0aW9uID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cobmFtZSwgdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMpO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuaGFzKG5hbWUpXHJcblx0XHRcdD8gdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuZGVsZXRlKG5hbWUpXHJcblx0XHRcdDogdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuYWRkKG5hbWUpXHJcblx0fVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9