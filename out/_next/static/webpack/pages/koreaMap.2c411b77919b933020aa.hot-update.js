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
/* harmony import */ var src_util_storeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/util/storeProvider */ "./src/util/storeProvider.tsx");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locationList.module.scss */ "./src/components/koreaMap/locationList/locationList.module.scss");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\koreaMap\\locationList\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a);
var LOCATION_DATA = ['서울특별시', '경기도', '인천광역시', '부산광역시', '대구광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '강원도', '충청남도', '경상남도', '경상북도', '전라남도', '전라북도', '충청북도'];
var Location = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_c = _s(function (_ref) {
  _s();

  var name = _ref.name;

  var _useStores = Object(src_util_storeProvider__WEBPACK_IMPORTED_MODULE_3__["useStores"])(),
      koreaMapUIStore = _useStores.koreaMapUIStore;

  var selectedLocations = koreaMapUIStore.selectedLocations,
      toggleLocation = koreaMapUIStore.toggleLocation;

  var handleClick = function handleClick() {
    toggleLocation(name);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    onClick: handleClick,
    className: cx('location', {
      'active': selectedLocations.has(name)
    }),
    children: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
}, "aXt+qKMuEE/paCu/DcU8sSNA82w=", false, function () {
  return [src_util_storeProvider__WEBPACK_IMPORTED_MODULE_3__["useStores"]];
}));
_c2 = Location;

var LocationList = function LocationList() {
  var list = LOCATION_DATA.map(function (name) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Location, {
      name: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 16
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('locationWrap'),
      children: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9PYnNlcnZlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9hc3NlcnRFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9vYnNlcnZlckJhdGNoaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3ByaW50RGVidWdWYWx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9yZWFjdGlvbkNsZWFudXBUcmFja2luZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9zdGF0aWNSZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlQXNPYnNlcnZhYmxlU291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3VzZUxvY2FsU3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlUXVldWVkRm9yY2VVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMvcmVhY3RCYXRjaGVkVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QvZGlzdC9tb2J4cmVhY3QuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9rb3JlYU1hcC9sb2NhdGlvbkxpc3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJMT0NBVElPTl9EQVRBIiwiTG9jYXRpb24iLCJvYnNlcnZlciIsIm5hbWUiLCJ1c2VTdG9yZXMiLCJrb3JlYU1hcFVJU3RvcmUiLCJzZWxlY3RlZExvY2F0aW9ucyIsInRvZ2dsZUxvY2F0aW9uIiwiaGFuZGxlQ2xpY2siLCJoYXMiLCJMb2NhdGlvbkxpc3QiLCJsaXN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0VBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBQ007QUFDakMsS0FBSyw4Q0FBUTtBQUNiO0FBQ0E7QUFDQSxLQUFLLHdDQUFHO0FBQ1I7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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cUMsR0FFQUQsZUFGQSxDQUVyQ0MsaUJBRnFDO0FBQUEsTUFFbEJDLGNBRmtCLEdBRUFGLGVBRkEsQ0FFbEJFLGNBRmtCOztBQUk1QyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCRCxrQkFBYyxDQUFDSixJQUFELENBQWQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQ0ksV0FBTyxFQUFFSyxXQURiO0FBRUksYUFBUyxFQUFFWixFQUFFLENBQUMsVUFBRCxFQUFhO0FBQUMsZ0JBQVVVLGlCQUFpQixDQUFDRyxHQUFsQixDQUFzQk4sSUFBdEI7QUFBWCxLQUFiLENBRmpCO0FBQUEsY0FJU0E7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQWhCd0I7QUFBQSxVQUNLQyxnRUFETDtBQUFBLEdBQXpCO01BQU1ILFE7O0FBa0JOLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsTUFBTUMsSUFBSSxHQUFHWCxhQUFhLENBQUNZLEdBQWQsQ0FBa0IsVUFBQ1QsSUFBRCxFQUFVO0FBQ3JDLHdCQUFPLHFFQUFDLFFBQUQ7QUFBVSxVQUFJLEVBQUVBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNILEdBRlksQ0FBYjtBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFFUCxFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLDJCQUNJO0FBQUksZUFBUyxFQUFFQSxFQUFFLENBQUMsY0FBRCxDQUFqQjtBQUFBLGdCQUFvQ2U7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBVkQ7O01BQU1ELFk7QUFZU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva29yZWFNYXAuMmM0MTFiNzc5MTliOTMzMDIwYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIi4vdXNlT2JzZXJ2ZXJcIjtcbmZ1bmN0aW9uIE9ic2VydmVyQ29tcG9uZW50KF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHJlbmRlciA9IF9hLnJlbmRlcjtcbiAgICB2YXIgY29tcG9uZW50ID0gY2hpbGRyZW4gfHwgcmVuZGVyO1xuICAgIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB1c2VPYnNlcnZlcihjb21wb25lbnQpO1xufVxuT2JzZXJ2ZXJDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBPYnNlcnZlclByb3BzQ2hlY2ssXG4gICAgcmVuZGVyOiBPYnNlcnZlclByb3BzQ2hlY2tcbn07XG5PYnNlcnZlckNvbXBvbmVudC5kaXNwbGF5TmFtZSA9IFwiT2JzZXJ2ZXJcIjtcbmV4cG9ydCB7IE9ic2VydmVyQ29tcG9uZW50IGFzIE9ic2VydmVyIH07XG5mdW5jdGlvbiBPYnNlcnZlclByb3BzQ2hlY2socHJvcHMsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBleHRyYUtleSA9IGtleSA9PT0gXCJjaGlsZHJlblwiID8gXCJyZW5kZXJcIiA6IFwiY2hpbGRyZW5cIjtcbiAgICB2YXIgaGFzUHJvcCA9IHR5cGVvZiBwcm9wc1trZXldID09PSBcImZ1bmN0aW9uXCI7XG4gICAgdmFyIGhhc0V4dHJhUHJvcCA9IHR5cGVvZiBwcm9wc1tleHRyYUtleV0gPT09IFwiZnVuY3Rpb25cIjtcbiAgICBpZiAoaGFzUHJvcCAmJiBoYXNFeHRyYVByb3ApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIk1vYlggT2JzZXJ2ZXI6IERvIG5vdCB1c2UgY2hpbGRyZW4gYW5kIHJlbmRlciBpbiB0aGUgc2FtZSB0aW1lIGluYFwiICsgY29tcG9uZW50TmFtZSk7XG4gICAgfVxuICAgIGlmIChoYXNQcm9wIHx8IGhhc0V4dHJhUHJvcCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIgK1xuICAgICAgICBwcm9wRnVsbE5hbWUgK1xuICAgICAgICBcImAgb2YgdHlwZSBgXCIgK1xuICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSArXG4gICAgICAgIFwiYCBzdXBwbGllZCB0b1wiICtcbiAgICAgICAgXCIgYFwiICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgIFwiYCwgZXhwZWN0ZWQgYGZ1bmN0aW9uYC5cIik7XG59XG4iLCJpbXBvcnQgeyBzcHkgfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmlmICghdXNlU3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LXJlYWN0LWxpdGUgcmVxdWlyZXMgUmVhY3Qgd2l0aCBIb29rcyBzdXBwb3J0XCIpO1xufVxuaWYgKCFzcHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LXJlYWN0LWxpdGUgcmVxdWlyZXMgbW9ieCBhdCBsZWFzdCB2ZXJzaW9uIDQgdG8gYmUgYXZhaWxhYmxlXCIpO1xufVxuIiwiaW1wb3J0IFwiLi9hc3NlcnRFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgYXMgYmF0Y2ggfSBmcm9tIFwiLi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzXCI7XG5pbXBvcnQgeyBvYnNlcnZlckJhdGNoaW5nIH0gZnJvbSBcIi4vb2JzZXJ2ZXJCYXRjaGluZ1wiO1xub2JzZXJ2ZXJCYXRjaGluZyhiYXRjaCk7XG5leHBvcnQgeyBpc1VzaW5nU3RhdGljUmVuZGVyaW5nLCB1c2VTdGF0aWNSZW5kZXJpbmcgfSBmcm9tIFwiLi9zdGF0aWNSZW5kZXJpbmdcIjtcbmV4cG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIi4vb2JzZXJ2ZXJcIjtcbmV4cG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIi4vdXNlT2JzZXJ2ZXJcIjtcbmV4cG9ydCB7IE9ic2VydmVyIH0gZnJvbSBcIi4vT2JzZXJ2ZXJDb21wb25lbnRcIjtcbmV4cG9ydCB7IHVzZUZvcmNlVXBkYXRlIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCB7IHVzZUFzT2JzZXJ2YWJsZVNvdXJjZSB9IGZyb20gXCIuL3VzZUFzT2JzZXJ2YWJsZVNvdXJjZVwiO1xuZXhwb3J0IHsgdXNlTG9jYWxTdG9yZSB9IGZyb20gXCIuL3VzZUxvY2FsU3RvcmVcIjtcbmV4cG9ydCB7IHVzZVF1ZXVlZEZvcmNlVXBkYXRlLCB1c2VRdWV1ZWRGb3JjZVVwZGF0ZUJsb2NrIH0gZnJvbSBcIi4vdXNlUXVldWVkRm9yY2VVcGRhdGVcIjtcbmV4cG9ydCB7IGlzT2JzZXJ2ZXJCYXRjaGVkLCBvYnNlcnZlckJhdGNoaW5nIH0gZnJvbSBcIi4vb2JzZXJ2ZXJCYXRjaGluZ1wiO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcgfSBmcm9tIFwiLi9zdGF0aWNSZW5kZXJpbmdcIjtcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIi4vdXNlT2JzZXJ2ZXJcIjtcbi8vIG4uYi4gYmFzZSBjYXNlIGlzIG5vdCB1c2VkIGZvciBhY3R1YWwgdHlwaW5ncyBvciBleHBvcnRlZCBpbiB0aGUgdHlwaW5nIGZpbGVzXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZXIoYmFzZUNvbXBvbmVudCwgb3B0aW9ucykge1xuICAgIC8vIFRoZSB3b3JraW5nIG9mIG9ic2VydmVyIGlzIGV4cGxhaW5lZCBzdGVwIGJ5IHN0ZXAgaW4gdGhpcyB0YWxrOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWNQRjRpQmVkb0YwJmZlYXR1cmU9eW91dHUuYmUmdD0xMzA3XG4gICAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSkge1xuICAgICAgICByZXR1cm4gYmFzZUNvbXBvbmVudDtcbiAgICB9XG4gICAgdmFyIHJlYWxPcHRpb25zID0gX19hc3NpZ24oeyBmb3J3YXJkUmVmOiBmYWxzZSB9LCBvcHRpb25zKTtcbiAgICB2YXIgYmFzZUNvbXBvbmVudE5hbWUgPSBiYXNlQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IGJhc2VDb21wb25lbnQubmFtZTtcbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudCA9IGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgICAgIHJldHVybiB1c2VPYnNlcnZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBiYXNlQ29tcG9uZW50KHByb3BzLCByZWYpOyB9LCBiYXNlQ29tcG9uZW50TmFtZSk7XG4gICAgfTtcbiAgICB3cmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYmFzZUNvbXBvbmVudE5hbWU7XG4gICAgLy8gbWVtbzsgd2UgYXJlIG5vdCBpbnRlcmVzdGVkIGluIGRlZXAgdXBkYXRlc1xuICAgIC8vIGluIHByb3BzOyB3ZSBhc3N1bWUgdGhhdCBpZiBkZWVwIG9iamVjdHMgYXJlIGNoYW5nZWQsXG4gICAgLy8gdGhpcyBpcyBpbiBvYnNlcnZhYmxlcywgd2hpY2ggd291bGQgaGF2ZSBiZWVuIHRyYWNrZWQgYW55d2F5XG4gICAgdmFyIG1lbW9Db21wb25lbnQ7XG4gICAgaWYgKHJlYWxPcHRpb25zLmZvcndhcmRSZWYpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSB0byB1c2UgZm9yd2FyZFJlZiBoZXJlIGJlY2F1c2U6XG4gICAgICAgIC8vIDEuIGl0IGNhbm5vdCBnbyBiZWZvcmUgbWVtbywgb25seSBhZnRlciBpdFxuICAgICAgICAvLyAyLiBmb3J3YXJkUmVmIGNvbnZlcnRzIHRoZSBmdW5jdGlvbiBpbnRvIGFuIGFjdHVhbCBjb21wb25lbnQsIHNvIHdlIGNhbid0IGxldCB0aGUgYmFzZUNvbXBvbmVudCBkbyBpdFxuICAgICAgICAvLyAgICBzaW5jZSBpdCB3b3VsZG4ndCBiZSBhIGNhbGxhYmxlIGZ1bmN0aW9uIGFueW1vcmVcbiAgICAgICAgbWVtb0NvbXBvbmVudCA9IG1lbW8oZm9yd2FyZFJlZih3cmFwcGVkQ29tcG9uZW50KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtZW1vQ29tcG9uZW50ID0gbWVtbyh3cmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG4gICAgY29weVN0YXRpY1Byb3BlcnRpZXMoYmFzZUNvbXBvbmVudCwgbWVtb0NvbXBvbmVudCk7XG4gICAgbWVtb0NvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGJhc2VDb21wb25lbnROYW1lO1xuICAgIHJldHVybiBtZW1vQ29tcG9uZW50O1xufVxuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL21yaWRnd2F5L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Jsb2IvbWFzdGVyL3NyYy9pbmRleC5qc1xudmFyIGhvaXN0QmxhY2tMaXN0ID0ge1xuICAgICQkdHlwZW9mOiB0cnVlLFxuICAgIHJlbmRlcjogdHJ1ZSxcbiAgICBjb21wYXJlOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5mdW5jdGlvbiBjb3B5U3RhdGljUHJvcGVydGllcyhiYXNlLCB0YXJnZXQpIHtcbiAgICBPYmplY3Qua2V5cyhiYXNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFob2lzdEJsYWNrTGlzdFtrZXldKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwga2V5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGNvbmZpZ3VyZSB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgeyBnZXRHbG9iYWwsIGdldFN5bWJvbCB9IGZyb20gXCIuL3V0aWxzXCI7XG52YXIgb2JzZXJ2ZXJCYXRjaGluZ0NvbmZpZ3VyZWRTeW1ib2wgPSBnZXRTeW1ib2woXCJvYnNlcnZlckJhdGNoaW5nXCIpO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjaygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVyQmF0Y2hpbmcocmVhY3Rpb25TY2hlZHVsZXIpIHtcbiAgICBpZiAoIXJlYWN0aW9uU2NoZWR1bGVyKSB7XG4gICAgICAgIHJlYWN0aW9uU2NoZWR1bGVyID0gZGVmYXVsdE5vb3BCYXRjaDtcbiAgICAgICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW01vYlhdIEZhaWxlZCB0byBnZXQgdW5zdGFibGVfYmF0Y2hlZCB1cGRhdGVzIGZyb20gcmVhY3QtZG9tIC8gcmVhY3QtbmF0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbmZpZ3VyZSh7IHJlYWN0aW9uU2NoZWR1bGVyOiByZWFjdGlvblNjaGVkdWxlciB9KTtcbiAgICBnZXRHbG9iYWwoKVtvYnNlcnZlckJhdGNoaW5nQ29uZmlndXJlZFN5bWJvbF0gPSB0cnVlO1xufVxuZXhwb3J0IHZhciBpc09ic2VydmVyQmF0Y2hlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhZ2V0R2xvYmFsKClbb2JzZXJ2ZXJCYXRjaGluZ0NvbmZpZ3VyZWRTeW1ib2xdOyB9O1xuIiwiaW1wb3J0IHsgZ2V0RGVwZW5kZW5jeVRyZWUgfSBmcm9tIFwibW9ieFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50RGVidWdWYWx1ZSh2KSB7XG4gICAgcmV0dXJuIGdldERlcGVuZGVuY3lUcmVlKHYpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYWNraW5nRGF0YShyZWFjdGlvbikge1xuICAgIHZhciB0cmFja2luZ0RhdGEgPSB7XG4gICAgICAgIGNsZWFuQXQ6IERhdGUubm93KCkgKyBDTEVBTlVQX0xFQUtFRF9SRUFDVElPTlNfQUZURVJfTUlMTElTLFxuICAgICAgICByZWFjdGlvbjogcmVhY3Rpb25cbiAgICB9O1xuICAgIHJldHVybiB0cmFja2luZ0RhdGE7XG59XG4vKipcbiAqIFRoZSBtaW5pbXVtIHRpbWUgYmVmb3JlIHdlJ2xsIGNsZWFuIHVwIGEgUmVhY3Rpb24gY3JlYXRlZCBpbiBhIHJlbmRlclxuICogZm9yIGEgY29tcG9uZW50IHRoYXQgaGFzbid0IG1hbmFnZWQgdG8gcnVuIGl0cyBlZmZlY3RzLiBUaGlzIG5lZWRzIHRvXG4gKiBiZSBiaWcgZW5vdWdoIHRvIGVuc3VyZSB0aGF0IGEgY29tcG9uZW50IHdvbid0IHR1cm4gdXAgYW5kIGhhdmUgaXRzXG4gKiBlZmZlY3RzIHJ1biB3aXRob3V0IGJlaW5nIHJlLXJlbmRlcmVkLlxuICovXG5leHBvcnQgdmFyIENMRUFOVVBfTEVBS0VEX1JFQUNUSU9OU19BRlRFUl9NSUxMSVMgPSAxMDAwMDtcbi8qKlxuICogVGhlIGZyZXF1ZW5jeSB3aXRoIHdoaWNoIHdlJ2xsIGNoZWNrIGZvciBsZWFrZWQgcmVhY3Rpb25zLlxuICovXG5leHBvcnQgdmFyIENMRUFOVVBfVElNRVJfTE9PUF9NSUxMSVMgPSAxMDAwMDtcbi8qKlxuICogUmVhY3Rpb25zIGNyZWF0ZWQgYnkgY29tcG9uZW50cyB0aGF0IGhhdmUgeWV0IHRvIGJlIGZ1bGx5IG1vdW50ZWQuXG4gKi9cbnZhciB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcyA9IG5ldyBTZXQoKTtcbi8qKlxuICogTGF0ZXN0ICd1bmNvbW1pdHRlZCByZWFjdGlvbnMnIGNsZWFudXAgdGltZXIgaGFuZGxlLlxuICovXG52YXIgcmVhY3Rpb25DbGVhbnVwSGFuZGxlO1xuZnVuY3Rpb24gZW5zdXJlQ2xlYW51cFRpbWVyUnVubmluZygpIHtcbiAgICBpZiAocmVhY3Rpb25DbGVhbnVwSGFuZGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVhY3Rpb25DbGVhbnVwSGFuZGxlID0gc2V0VGltZW91dChjbGVhblVuY29tbWl0dGVkUmVhY3Rpb25zLCBDTEVBTlVQX1RJTUVSX0xPT1BfTUlMTElTKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVDbGVhbnVwT2ZSZWFjdGlvbklmTGVha2VkKHJlZikge1xuICAgIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLmFkZChyZWYpO1xuICAgIGVuc3VyZUNsZWFudXBUaW1lclJ1bm5pbmcoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRSZWFjdGlvbkFzQ29tbWl0dGVkKHJlYWN0aW9uUmVmKSB7XG4gICAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuZGVsZXRlKHJlYWN0aW9uUmVmKTtcbn1cbi8qKlxuICogUnVuIGJ5IHRoZSBjbGVhbnVwIHRpbWVyIHRvIGRpc3Bvc2UgYW55IG91dHN0YW5kaW5nIHJlYWN0aW9uc1xuICovXG5mdW5jdGlvbiBjbGVhblVuY29tbWl0dGVkUmVhY3Rpb25zKCkge1xuICAgIHJlYWN0aW9uQ2xlYW51cEhhbmRsZSA9IHVuZGVmaW5lZDtcbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBjYW5kaWRhdGUgbGVha2VkIHJlYWN0aW9uczsgdGhvc2Ugb2xkZXJcbiAgICAvLyB0aGFuIENMRUFOVVBfTEVBS0VEX1JFQUNUSU9OU19BRlRFUl9NSUxMSVMgZ2V0IHRpZGllZC5cbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgdmFyIHRyYWNraW5nID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICh0cmFja2luZykge1xuICAgICAgICAgICAgaWYgKG5vdyA+PSB0cmFja2luZy5jbGVhbkF0KSB7XG4gICAgICAgICAgICAgICAgLy8gSXQncyB0aW1lIHRvIHRpZHkgdXAgdGhpcyBsZWFrZWQgcmVhY3Rpb24uXG4gICAgICAgICAgICAgICAgdHJhY2tpbmcucmVhY3Rpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcy5kZWxldGUocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcy5zaXplID4gMCkge1xuICAgICAgICAvLyBXZSd2ZSBqdXN0IGZpbmlzaGVkIGEgcm91bmQgb2YgY2xlYW51cHMgYnV0IHRoZXJlIGFyZSBzdGlsbFxuICAgICAgICAvLyBzb21lIGxlYWsgY2FuZGlkYXRlcyBvdXRzdGFuZGluZy5cbiAgICAgICAgZW5zdXJlQ2xlYW51cFRpbWVyUnVubmluZygpO1xuICAgIH1cbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4vKipcbiAqIE9ubHkgdG8gYmUgdXNlZCBieSB0ZXN0IGZ1bmN0aW9uczsgZG8gbm90IGV4cG9ydCBvdXRzaWRlIG9mIG1vYngtcmVhY3QtbGl0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yY2VDbGVhbnVwVGltZXJUb1J1bk5vd0ZvclRlc3RzKCkge1xuICAgIC8vIFRoaXMgYWxsb3dzIHVzIHRvIGNvbnRyb2wgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY2xlYW51cCB0aW1lclxuICAgIC8vIHRvIGZvcmNlIGl0IHRvIHJ1biBhdCBhd2t3YXJkIHRpbWVzIGluIHVuaXQgdGVzdHMuXG4gICAgaWYgKHJlYWN0aW9uQ2xlYW51cEhhbmRsZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQocmVhY3Rpb25DbGVhbnVwSGFuZGxlKTtcbiAgICAgICAgY2xlYW5VbmNvbW1pdHRlZFJlYWN0aW9ucygpO1xuICAgIH1cbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDbGVhbnVwU2NoZWR1bGVGb3JUZXN0cygpIHtcbiAgICBpZiAocmVhY3Rpb25DbGVhbnVwSGFuZGxlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChyZWFjdGlvbkNsZWFudXBIYW5kbGUpO1xuICAgICAgICByZWFjdGlvbkNsZWFudXBIYW5kbGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLmNsZWFyKCk7XG59XG4iLCJ2YXIgZ2xvYmFsSXNVc2luZ1N0YXRpY1JlbmRlcmluZyA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRpY1JlbmRlcmluZyhlbmFibGUpIHtcbiAgICBnbG9iYWxJc1VzaW5nU3RhdGljUmVuZGVyaW5nID0gZW5hYmxlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSB7XG4gICAgcmV0dXJuIGdsb2JhbElzVXNpbmdTdGF0aWNSZW5kZXJpbmc7XG59XG4iLCJ2YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBc09ic2VydmFibGVTb3VyY2VJbnRlcm5hbChjdXJyZW50LCB1c2VkQnlMb2NhbFN0b3JlKSB7XG4gICAgdmFyIGN1bHByaXQgPSB1c2VkQnlMb2NhbFN0b3JlID8gXCJ1c2VMb2NhbFN0b3JlXCIgOiBcInVzZUFzT2JzZXJ2YWJsZVNvdXJjZVwiO1xuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgdXNlZEJ5TG9jYWxTdG9yZSkge1xuICAgICAgICB2YXIgX2EgPSBfX3JlYWQoUmVhY3QudXNlU3RhdGUoY3VycmVudCksIDEpLCBpbml0aWFsU291cmNlID0gX2FbMF07XG4gICAgICAgIGlmICgoaW5pdGlhbFNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnQgPT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgIChpbml0aWFsU291cmNlID09PSB1bmRlZmluZWQgJiYgY3VycmVudCAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWFrZSBzdXJlIHlvdSBuZXZlciBwYXNzIGB1bmRlZmluZWRgIHRvIFwiICsgY3VscHJpdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVzZWRCeUxvY2FsU3RvcmUgJiYgY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgIWlzUGxhaW5PYmplY3QoY3VycmVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGN1bHByaXQgKyBcIiBleHBlY3RzIGEgcGxhaW4gb2JqZWN0IGFzIFwiICsgKHVzZWRCeUxvY2FsU3RvcmUgPyBcInNlY29uZFwiIDogXCJmaXJzdFwiKSArIFwiIGFyZ3VtZW50XCIpO1xuICAgIH1cbiAgICB2YXIgX2IgPSBfX3JlYWQoUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gb2JzZXJ2YWJsZShjdXJyZW50LCB7fSwgeyBkZWVwOiBmYWxzZSB9KTsgfSksIDEpLCByZXMgPSBfYlswXTtcbiAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmXG4gICAgICAgIE9iamVjdC5rZXlzKHJlcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGhlIHNoYXBlIG9mIG9iamVjdHMgcGFzc2VkIHRvIFwiICsgY3VscHJpdCArIFwiIHNob3VsZCBiZSBzdGFibGVcIik7XG4gICAgfVxuICAgIHJ1bkluQWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZXMsIGN1cnJlbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQXNPYnNlcnZhYmxlU291cmNlKGN1cnJlbnQpIHtcbiAgICByZXR1cm4gdXNlQXNPYnNlcnZhYmxlU291cmNlSW50ZXJuYWwoY3VycmVudCwgZmFsc2UpO1xufVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24sIHRyYW5zYWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFzT2JzZXJ2YWJsZVNvdXJjZUludGVybmFsIH0gZnJvbSBcIi4vdXNlQXNPYnNlcnZhYmxlU291cmNlXCI7XG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbFN0b3JlKGluaXRpYWxpemVyLCBjdXJyZW50KSB7XG4gICAgdmFyIHNvdXJjZSA9IHVzZUFzT2JzZXJ2YWJsZVNvdXJjZUludGVybmFsKGN1cnJlbnQsIHRydWUpO1xuICAgIHJldHVybiBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsb2NhbCA9IG9ic2VydmFibGUoaW5pdGlhbGl6ZXIoc291cmNlKSk7XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KGxvY2FsKSkge1xuICAgICAgICAgICAgcnVuSW5BY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxvY2FsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIE5vIGlkZWEgd2h5IHRzMjUzNiBpcyBwb3BwaW5nIG91dCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFtrZXldID0gd3JhcEluVHJhbnNhY3Rpb24odmFsdWUsIGxvY2FsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsO1xuICAgIH0pWzBdO1xufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmZ1bmN0aW9uIHdyYXBJblRyYW5zYWN0aW9uKGZuLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkgeyByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7IH0pO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBSZWFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwcmludERlYnVnVmFsdWUgfSBmcm9tIFwiLi9wcmludERlYnVnVmFsdWVcIjtcbmltcG9ydCB7IGNyZWF0ZVRyYWNraW5nRGF0YSwgcmVjb3JkUmVhY3Rpb25Bc0NvbW1pdHRlZCwgc2NoZWR1bGVDbGVhbnVwT2ZSZWFjdGlvbklmTGVha2VkIH0gZnJvbSBcIi4vcmVhY3Rpb25DbGVhbnVwVHJhY2tpbmdcIjtcbmltcG9ydCB7IGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcgfSBmcm9tIFwiLi9zdGF0aWNSZW5kZXJpbmdcIjtcbmltcG9ydCB7IHVzZUZvcmNlVXBkYXRlIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IHVzZVF1ZXVlZEZvcmNlVXBkYXRlLCB1c2VRdWV1ZWRGb3JjZVVwZGF0ZUJsb2NrIH0gZnJvbSBcIi4vdXNlUXVldWVkRm9yY2VVcGRhdGVcIjtcbnZhciBFTVBUWV9PQkpFQ1QgPSB7fTtcbmZ1bmN0aW9uIG9ic2VydmVyQ29tcG9uZW50TmFtZUZvcihiYXNlQ29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiBcIm9ic2VydmVyXCIgKyBiYXNlQ29tcG9uZW50TmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VPYnNlcnZlcihmbiwgYmFzZUNvbXBvbmVudE5hbWUsIG9wdGlvbnMpIHtcbiAgICBpZiAoYmFzZUNvbXBvbmVudE5hbWUgPT09IHZvaWQgMCkgeyBiYXNlQ29tcG9uZW50TmFtZSA9IFwib2JzZXJ2ZWRcIjsgfVxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IEVNUFRZX09CSkVDVDsgfVxuICAgIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfVxuICAgIHZhciB3YW50ZWRGb3JjZVVwZGF0ZUhvb2sgPSBvcHRpb25zLnVzZUZvcmNlVXBkYXRlIHx8IHVzZUZvcmNlVXBkYXRlO1xuICAgIHZhciBmb3JjZVVwZGF0ZSA9IHdhbnRlZEZvcmNlVXBkYXRlSG9vaygpO1xuICAgIHZhciBxdWV1ZWRGb3JjZVVwZGF0ZSA9IHVzZVF1ZXVlZEZvcmNlVXBkYXRlKGZvcmNlVXBkYXRlKTtcbiAgICAvLyBTdHJpY3RNb2RlL0NvbmN1cnJlbnRNb2RlL1N1c3BlbnNlIG1heSBtZWFuIHRoYXQgb3VyIGNvbXBvbmVudCBpc1xuICAgIC8vIHJlbmRlcmVkIGFuZCBhYmFuZG9uZWQgbXVsdGlwbGUgdGltZXMsIHNvIHdlIG5lZWQgdG8gdHJhY2sgbGVha2VkXG4gICAgLy8gUmVhY3Rpb25zLlxuICAgIHZhciByZWFjdGlvblRyYWNraW5nUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGlmICghcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50KSB7XG4gICAgICAgIC8vIEZpcnN0IHJlbmRlciBmb3IgdGhpcyBjb21wb25lbnQgKG9yIGZpcnN0IHRpbWUgc2luY2UgYSBwcmV2aW91c1xuICAgICAgICAvLyByZWFjdGlvbiBmcm9tIGFuIGFiYW5kb25lZCByZW5kZXIgd2FzIGRpc3Bvc2VkKS5cbiAgICAgICAgdmFyIG5ld1JlYWN0aW9uXzEgPSBuZXcgUmVhY3Rpb24ob2JzZXJ2ZXJDb21wb25lbnROYW1lRm9yKGJhc2VDb21wb25lbnROYW1lKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gT2JzZXJ2YWJsZSBoYXMgY2hhbmdlZCwgbWVhbmluZyB3ZSB3YW50IHRvIHJlLXJlbmRlclxuICAgICAgICAgICAgLy8gQlVUIGlmIHdlJ3JlIGEgY29tcG9uZW50IHRoYXQgaGFzbid0IHlldCBnb3QgdG8gdGhlIHVzZUVmZmVjdCgpXG4gICAgICAgICAgICAvLyBzdGFnZSwgd2UgbWlnaHQgYmUgYSBjb21wb25lbnQgdGhhdCBfc3RhcnRlZF8gdG8gcmVuZGVyLCBidXRcbiAgICAgICAgICAgIC8vIGdvdCBkcm9wcGVkLCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHN0YXRlIGNoYW5nZXMgdGhlbi5cbiAgICAgICAgICAgIC8vIChJdCB0cmlnZ2VycyB3YXJuaW5ncyBpbiBTdHJpY3RNb2RlLCBmb3IgYSBzdGFydC4pXG4gICAgICAgICAgICBpZiAodHJhY2tpbmdEYXRhXzEubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgcmVhY2hlZCB1c2VFZmZlY3QoKSwgc28gd2UncmUgbW91bnRlZCwgYW5kIGNhbiB0cmlnZ2VyIGFuIHVwZGF0ZVxuICAgICAgICAgICAgICAgIHF1ZXVlZEZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlbid0IHlldCByZWFjaGVkIHVzZUVmZmVjdCgpLCBzbyB3ZSdsbCBuZWVkIHRvIHRyaWdnZXIgYSByZS1yZW5kZXJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIChhbmQgaWYpIHVzZUVmZmVjdCgpIGFycml2ZXMuICBUaGUgZWFzaWVzdCB3YXkgdG8gZG8gdGhhdCBpcyBqdXN0IHRvXG4gICAgICAgICAgICAgICAgLy8gZHJvcCBvdXIgY3VycmVudCByZWFjdGlvbiBhbmQgYWxsb3cgdXNlRWZmZWN0KCkgdG8gcmVjcmVhdGUgaXQuXG4gICAgICAgICAgICAgICAgbmV3UmVhY3Rpb25fMS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0cmFja2luZ0RhdGFfMSA9IGNyZWF0ZVRyYWNraW5nRGF0YShuZXdSZWFjdGlvbl8xKTtcbiAgICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50ID0gdHJhY2tpbmdEYXRhXzE7XG4gICAgICAgIHNjaGVkdWxlQ2xlYW51cE9mUmVhY3Rpb25JZkxlYWtlZChyZWFjdGlvblRyYWNraW5nUmVmKTtcbiAgICB9XG4gICAgdmFyIHJlYWN0aW9uID0gcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50LnJlYWN0aW9uO1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUocmVhY3Rpb24sIHByaW50RGVidWdWYWx1ZSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ2FsbGVkIG9uIGZpcnN0IG1vdW50IG9ubHlcbiAgICAgICAgcmVjb3JkUmVhY3Rpb25Bc0NvbW1pdHRlZChyZWFjdGlvblRyYWNraW5nUmVmKTtcbiAgICAgICAgaWYgKHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gR3JlYXQuIFdlJ3ZlIGFscmVhZHkgZ290IG91ciByZWFjdGlvbiBmcm9tIG91ciByZW5kZXI7XG4gICAgICAgICAgICAvLyBhbGwgd2UgbmVlZCB0byBkbyBpcyB0byByZWNvcmQgdGhhdCBpdCdzIG5vdyBtb3VudGVkLFxuICAgICAgICAgICAgLy8gdG8gYWxsb3cgZnV0dXJlIG9ic2VydmFibGUgY2hhbmdlcyB0byB0cmlnZ2VyIHJlLXJlbmRlcnNcbiAgICAgICAgICAgIHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudC5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSByZWFjdGlvbiB3ZSBzZXQgdXAgaW4gb3VyIHJlbmRlciBoYXMgYmVlbiBkaXNwb3NlZC5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZWl0aGVyIGR1ZSB0byBiYWQgdGltaW5ncyBvZiByZW5kZXJpbmdzLCBlLmcuIG91clxuICAgICAgICAgICAgLy8gY29tcG9uZW50IHdhcyBwYXVzZWQgZm9yIGEgX3ZlcnlfIGxvbmcgdGltZSwgYW5kIG91clxuICAgICAgICAgICAgLy8gcmVhY3Rpb24gZ290IGNsZWFuZWQgdXAsIG9yIHdlIGdvdCBhIG9ic2VydmFibGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBiZXR3ZWVuIHJlbmRlciBhbmQgdXNlRWZmZWN0XG4gICAgICAgICAgICAvLyBSZS1jcmVhdGUgdGhlIHJlYWN0aW9uXG4gICAgICAgICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAgcmVhY3Rpb246IG5ldyBSZWFjdGlvbihvYnNlcnZlckNvbXBvbmVudE5hbWVGb3IoYmFzZUNvbXBvbmVudE5hbWUpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGRlZmluaXRlbHkgYWxyZWFkeSBiZWVuIG1vdW50ZWQgYXQgdGhpcyBwb2ludFxuICAgICAgICAgICAgICAgICAgICBxdWV1ZWRGb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNsZWFuQXQ6IEluZmluaXR5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcXVldWVkRm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50LnJlYWN0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIC8vIGRlbGF5IGFsbCBmb3JjZS11cGRhdGUgY2FsbHMgYWZ0ZXIgcmVuZGVyaW5nIG9mIHRoaXMgY29tcG9uZW50XG4gICAgcmV0dXJuIHVzZVF1ZXVlZEZvcmNlVXBkYXRlQmxvY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyByZW5kZXIgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCwgYnV0IGhhdmUgdGhlXG4gICAgICAgIC8vIHJlYWN0aW9uIHRyYWNrIHRoZSBvYnNlcnZhYmxlcywgc28gdGhhdCByZW5kZXJpbmdcbiAgICAgICAgLy8gY2FuIGJlIGludmFsaWRhdGVkIChzZWUgYWJvdmUpIG9uY2UgYSBkZXBlbmRlbmN5IGNoYW5nZXNcbiAgICAgICAgdmFyIHJlbmRlcmluZztcbiAgICAgICAgdmFyIGV4Y2VwdGlvbjtcbiAgICAgICAgcmVhY3Rpb24udHJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZW5kZXJpbmcgPSBmbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uOyAvLyByZS10aHJvdyBhbnkgZXhjZXB0aW9ucyBjYXVnaHQgZHVyaW5nIHJlbmRlcmluZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW5kZXJpbmc7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG52YXIgaW5zaWRlUmVuZGVyID0gZmFsc2U7XG52YXIgZm9yY2VVcGRhdGVRdWV1ZSA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXVlZEZvcmNlVXBkYXRlKGZvcmNlVXBkYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluc2lkZVJlbmRlcikge1xuICAgICAgICAgICAgZm9yY2VVcGRhdGVRdWV1ZS5wdXNoKGZvcmNlVXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXVlZEZvcmNlVXBkYXRlQmxvY2soY2FsbGJhY2spIHtcbiAgICAvLyBzdGFydCBpbnRlcmNlcHRpbmcgZm9yY2UtdXBkYXRlIGNhbGxzXG4gICAgaW5zaWRlUmVuZGVyID0gdHJ1ZTtcbiAgICBmb3JjZVVwZGF0ZVF1ZXVlID0gW107XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gICAgICAgIC8vIHN0b3AgaW50ZXJjZXB0aW5nIGZvcmNlLXVwZGF0ZVxuICAgICAgICBpbnNpZGVSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gc3RvcmUgcXVldWUgb3Igbm90aGluZyBpZiBpdCB3YXMgZW1wdHkgdG8gZXhlY3V0ZSB1c2VMYXlvdXRFZmZlY3Qgb25seSB3aGVuIG5lY2Vzc2FyeVxuICAgICAgICB2YXIgcXVldWVfMSA9IGZvcmNlVXBkYXRlUXVldWUubGVuZ3RoID4gMCA/IGZvcmNlVXBkYXRlUXVldWUgOiB1bmRlZmluZWQ7XG4gICAgICAgIC8vIHJ1biBmb3JjZS11cGRhdGUgcXVldWUgaW4gdXNlTGF5b3V0RWZmZWN0XG4gICAgICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocXVldWVfMSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlXzEuZm9yRWFjaChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3F1ZXVlXzFdKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGluc2lkZVJlbmRlciA9IGZhbHNlO1xuICAgIH1cbn1cbiIsInZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VVbm1vdW50KGZuKSB7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZuOyB9LCBFTVBUWV9BUlJBWSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XG4gICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKDApLCAyKSwgc2V0VGljayA9IF9hWzFdO1xuICAgIHZhciB1cGRhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpY2soZnVuY3Rpb24gKHRpY2spIHsgcmV0dXJuIHRpY2sgKyAxOyB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgIHJldHVybiAhcHJvdG8gfHwgcHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBTeW1ib2wuZm9yKG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJfXyRtb2J4LXJlYWN0IFwiICsgbmFtZSArIFwiX19cIjtcbn1cbnZhciBtb2NrR2xvYmFsID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWw7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG4gICAgcmV0dXJuIG1vY2tHbG9iYWw7XG59XG4iLCJleHBvcnQgeyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyB9IGZyb20gXCJyZWFjdC1kb21cIjtcbiIsImltcG9ydCB7IFJlYWN0aW9uLCBfYWxsb3dTdGF0ZUNoYW5nZXMsIF9hbGxvd1N0YXRlUmVhZHNTdGFydCwgX2FsbG93U3RhdGVSZWFkc0VuZCwgJG1vYngsIGNyZWF0ZUF0b20sIHVudHJhY2tlZCwgaXNPYnNlcnZhYmxlTWFwLCBpc09ic2VydmFibGVPYmplY3QsIGlzT2JzZXJ2YWJsZUFycmF5LCBvYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgUmVhY3RfX2RlZmF1bHQsIHsgUHVyZUNvbXBvbmVudCwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBtZW1vLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNVc2luZ1N0YXRpY1JlbmRlcmluZywgT2JzZXJ2ZXIsIG9ic2VydmVyIGFzIG9ic2VydmVyJDEgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuZXhwb3J0IHsgT2JzZXJ2ZXIsIGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcsIG9ic2VydmVyQmF0Y2hpbmcsIHVzZUFzT2JzZXJ2YWJsZVNvdXJjZSwgdXNlTG9jYWxTdG9yZSwgdXNlT2JzZXJ2ZXIsIHVzZVN0YXRpY1JlbmRlcmluZyB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5cbnZhciBzeW1ib2xJZCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChuYW1lKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gU3ltYm9sKG5hbWUpO1xuICB9XG5cbiAgdmFyIHN5bWJvbCA9IFwiX18kbW9ieC1yZWFjdCBcIiArIG5hbWUgKyBcIiAoXCIgKyBzeW1ib2xJZCArIFwiKVwiO1xuICBzeW1ib2xJZCsrO1xuICByZXR1cm4gc3ltYm9sO1xufVxuXG52YXIgY3JlYXRlZFN5bWJvbHMgPSB7fTtcbmZ1bmN0aW9uIG5ld1N5bWJvbChuYW1lKSB7XG4gIGlmICghY3JlYXRlZFN5bWJvbHNbbmFtZV0pIHtcbiAgICBjcmVhdGVkU3ltYm9sc1tuYW1lXSA9IGNyZWF0ZVN5bWJvbChuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkU3ltYm9sc1tuYW1lXTtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIC8vRnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9jNjk5MDRhNTExYjkwMDI2NjkzNTE2ODIyMzA2M2RkODc3MmRmYzQwL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvc2hhbGxvd0VxdWFsLmpzXG4gIGlmIChpcyhvYmpBLCBvYmpCKSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gRnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9jNjk5MDRhNTExYjkwMDI2NjkzNTE2ODIyMzA2M2RkODc3MmRmYzQwL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvc2hhbGxvd0VxdWFsLmpzXG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn0gLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL21yaWRnd2F5L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Jsb2IvbWFzdGVyL3NyYy9pbmRleC5qc1xuXG5cbnZhciBob2lzdEJsYWNrTGlzdCA9IHtcbiAgJCR0eXBlb2Y6IDEsXG4gIHJlbmRlcjogMSxcbiAgY29tcGFyZTogMSxcbiAgdHlwZTogMSxcbiAgY2hpbGRDb250ZXh0VHlwZXM6IDEsXG4gIGNvbnRleHRUeXBlOiAxLFxuICBjb250ZXh0VHlwZXM6IDEsXG4gIGRlZmF1bHRQcm9wczogMSxcbiAgZ2V0RGVmYXVsdFByb3BzOiAxLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IDEsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogMSxcbiAgbWl4aW5zOiAxLFxuICBwcm9wVHlwZXM6IDFcbn07XG5mdW5jdGlvbiBjb3B5U3RhdGljUHJvcGVydGllcyhiYXNlLCB0YXJnZXQpIHtcbiAgdmFyIHByb3RvUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZSkpO1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWhvaXN0QmxhY2tMaXN0W2tleV0gJiYgcHJvdG9Qcm9wcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwga2V5KSk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxyXG4gKiBIZWxwZXIgdG8gc2V0IGBwcm9wYCB0byBgdGhpc2AgYXMgbm9uLWVudW1lcmFibGUgKGhpZGRlbiBwcm9wKVxyXG4gKiBAcGFyYW0gdGFyZ2V0XHJcbiAqIEBwYXJhbSBwcm9wXHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKi9cblxuZnVuY3Rpb24gc2V0SGlkZGVuUHJvcCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gIGlmICghT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcm9wKSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgfVxufVxuLyoqXHJcbiAqIFV0aWxpdGllcyBmb3IgcGF0Y2hpbmcgY29tcG9uZW50V2lsbFVubW91bnQsIHRvIG1ha2Ugc3VyZSBAZGlzcG9zZU9uVW5tb3VudCB3b3JrcyBjb3JyZWN0bHkgaWNtIHdpdGggdXNlciBkZWZpbmVkIGhvb2tzXHJcbiAqIGFuZCB0aGUgaGFuZGxlciBwcm92aWRlZCBieSBtb2J4LXJlYWN0XHJcbiAqL1xuXG52YXIgbW9ieE1peGlucyA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJwYXRjaE1peGluc1wiKTtcbnZhciBtb2J4UGF0Y2hlZERlZmluaXRpb24gPVxuLyojX19QVVJFX18qL1xubmV3U3ltYm9sKFwicGF0Y2hlZERlZmluaXRpb25cIik7XG5cbmZ1bmN0aW9uIGdldE1peGlucyh0YXJnZXQsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIG1peGlucyA9IHRhcmdldFttb2J4TWl4aW5zXSA9IHRhcmdldFttb2J4TWl4aW5zXSB8fCB7fTtcbiAgdmFyIG1ldGhvZE1peGlucyA9IG1peGluc1ttZXRob2ROYW1lXSA9IG1peGluc1ttZXRob2ROYW1lXSB8fCB7fTtcbiAgbWV0aG9kTWl4aW5zLmxvY2tzID0gbWV0aG9kTWl4aW5zLmxvY2tzIHx8IDA7XG4gIG1ldGhvZE1peGlucy5tZXRob2RzID0gbWV0aG9kTWl4aW5zLm1ldGhvZHMgfHwgW107XG4gIHJldHVybiBtZXRob2RNaXhpbnM7XG59XG5cbmZ1bmN0aW9uIHdyYXBwZXIocmVhbE1ldGhvZCwgbWl4aW5zKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgLy8gbG9ja3MgYXJlIHVzZWQgdG8gZW5zdXJlIHRoYXQgbWl4aW5zIGFyZSBpbnZva2VkIG9ubHkgb25jZSBwZXIgaW52b2NhdGlvbiwgZXZlbiBvbiByZWN1cnNpdmUgY2FsbHNcbiAgbWl4aW5zLmxvY2tzKys7XG5cbiAgdHJ5IHtcbiAgICB2YXIgcmV0VmFsO1xuXG4gICAgaWYgKHJlYWxNZXRob2QgIT09IHVuZGVmaW5lZCAmJiByZWFsTWV0aG9kICE9PSBudWxsKSB7XG4gICAgICByZXRWYWwgPSByZWFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiByZXRWYWw7XG4gIH0gZmluYWxseSB7XG4gICAgbWl4aW5zLmxvY2tzLS07XG5cbiAgICBpZiAobWl4aW5zLmxvY2tzID09PSAwKSB7XG4gICAgICBtaXhpbnMubWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChteCkge1xuICAgICAgICBteC5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uKHJlYWxNZXRob2QsIG1peGlucykge1xuICB2YXIgZm4gPSBmdW5jdGlvbiBmbigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB3cmFwcGVyLmNhbGwuYXBwbHkod3JhcHBlciwgW3RoaXMsIHJlYWxNZXRob2QsIG1peGluc10uY29uY2F0KGFyZ3MpKTtcbiAgfTtcblxuICByZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIHBhdGNoKHRhcmdldCwgbWV0aG9kTmFtZSwgbWl4aW5NZXRob2QpIHtcbiAgdmFyIG1peGlucyA9IGdldE1peGlucyh0YXJnZXQsIG1ldGhvZE5hbWUpO1xuXG4gIGlmIChtaXhpbnMubWV0aG9kcy5pbmRleE9mKG1peGluTWV0aG9kKSA8IDApIHtcbiAgICBtaXhpbnMubWV0aG9kcy5wdXNoKG1peGluTWV0aG9kKTtcbiAgfVxuXG4gIHZhciBvbGREZWZpbml0aW9uID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG1ldGhvZE5hbWUpO1xuXG4gIGlmIChvbGREZWZpbml0aW9uICYmIG9sZERlZmluaXRpb25bbW9ieFBhdGNoZWREZWZpbml0aW9uXSkge1xuICAgIC8vIGFscmVhZHkgcGF0Y2hlZCBkZWZpbml0aW9uLCBkbyBub3QgcmVwYXRjaFxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbE1ldGhvZCA9IHRhcmdldFttZXRob2ROYW1lXTtcbiAgdmFyIG5ld0RlZmluaXRpb24gPSBjcmVhdGVEZWZpbml0aW9uKHRhcmdldCwgbWV0aG9kTmFtZSwgb2xkRGVmaW5pdGlvbiA/IG9sZERlZmluaXRpb24uZW51bWVyYWJsZSA6IHVuZGVmaW5lZCwgbWl4aW5zLCBvcmlnaW5hbE1ldGhvZCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG1ldGhvZE5hbWUsIG5ld0RlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWZpbml0aW9uKHRhcmdldCwgbWV0aG9kTmFtZSwgZW51bWVyYWJsZSwgbWl4aW5zLCBvcmlnaW5hbE1ldGhvZCkge1xuICB2YXIgX3JlZjtcblxuICB2YXIgd3JhcHBlZEZ1bmMgPSB3cmFwRnVuY3Rpb24ob3JpZ2luYWxNZXRob2QsIG1peGlucyk7XG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbbW9ieFBhdGNoZWREZWZpbml0aW9uXSA9IHRydWUsIF9yZWYuZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB3cmFwcGVkRnVuYztcbiAgfSwgX3JlZi5zZXQgPSBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICBpZiAodGhpcyA9PT0gdGFyZ2V0KSB7XG4gICAgICB3cmFwcGVkRnVuYyA9IHdyYXBGdW5jdGlvbih2YWx1ZSwgbWl4aW5zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2hlbiBpdCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgcHJvdG90eXBlL2EgY2hpbGQgcHJvdG90eXBlIHBhdGNoIHRoYXQgcGFydGljdWxhciBjYXNlIGFnYWluIHNlcGFyYXRlbHlcbiAgICAgIC8vIHNpbmNlIHdlIG5lZWQgdG8gc3RvcmUgc2VwYXJhdGUgdmFsdWVzIGRlcGVuZGluZyBvbiB3ZXRoZXIgaXQgaXMgdGhlIGFjdHVhbCBpbnN0YW5jZSwgdGhlIHByb3RvdHlwZSwgZXRjXG4gICAgICAvLyBlLmcuIHRoZSBtZXRob2QgZm9yIHN1cGVyIG1pZ2h0IG5vdCBiZSB0aGUgc2FtZSBhcyB0aGUgbWV0aG9kIGZvciB0aGUgcHJvdG90eXBlIHdoaWNoIG1pZ2h0IGJlIG5vdCB0aGUgc2FtZVxuICAgICAgLy8gYXMgdGhlIG1ldGhvZCBmb3IgdGhlIGluc3RhbmNlXG4gICAgICB2YXIgbmV3RGVmaW5pdGlvbiA9IGNyZWF0ZURlZmluaXRpb24odGhpcywgbWV0aG9kTmFtZSwgZW51bWVyYWJsZSwgbWl4aW5zLCB2YWx1ZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbWV0aG9kTmFtZSwgbmV3RGVmaW5pdGlvbik7XG4gICAgfVxuICB9LCBfcmVmLmNvbmZpZ3VyYWJsZSA9IHRydWUsIF9yZWYuZW51bWVyYWJsZSA9IGVudW1lcmFibGUsIF9yZWY7XG59XG5cbnZhciBtb2J4QWRtaW5Qcm9wZXJ0eSA9ICRtb2J4IHx8IFwiJG1vYnhcIjtcbnZhciBtb2J4T2JzZXJ2ZXJQcm9wZXJ0eSA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJpc01vYlhSZWFjdE9ic2VydmVyXCIpO1xudmFyIG1vYnhJc1VubW91bnRlZCA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJpc1VubW91bnRlZFwiKTtcbnZhciBza2lwUmVuZGVyS2V5ID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcInNraXBSZW5kZXJcIik7XG52YXIgaXNGb3JjaW5nVXBkYXRlS2V5ID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcImlzRm9yY2luZ1VwZGF0ZVwiKTtcbmZ1bmN0aW9uIG1ha2VDbGFzc0NvbXBvbmVudE9ic2VydmVyKGNvbXBvbmVudENsYXNzKSB7XG4gIHZhciB0YXJnZXQgPSBjb21wb25lbnRDbGFzcy5wcm90b3R5cGU7XG5cbiAgaWYgKGNvbXBvbmVudENsYXNzW21vYnhPYnNlcnZlclByb3BlcnR5XSkge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKHRhcmdldCk7XG4gICAgY29uc29sZS53YXJuKFwiVGhlIHByb3ZpZGVkIGNvbXBvbmVudCBjbGFzcyAoXCIgKyBkaXNwbGF5TmFtZSArIFwiKSBcXG4gICAgICAgICAgICAgICAgaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZCBhcyBhbiBvYnNlcnZlciBjb21wb25lbnQuXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbXBvbmVudENsYXNzW21vYnhPYnNlcnZlclByb3BlcnR5XSA9IHRydWU7XG4gIH1cblxuICBpZiAodGFyZ2V0LmNvbXBvbmVudFdpbGxSZWFjdCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbXBvbmVudFdpbGxSZWFjdCBsaWZlLWN5Y2xlIGV2ZW50IGlzIG5vIGxvbmdlciBzdXBwb3J0ZWRcIik7XG5cbiAgaWYgKGNvbXBvbmVudENsYXNzW1wiX19wcm90b19fXCJdICE9PSBQdXJlQ29tcG9uZW50KSB7XG4gICAgaWYgKCF0YXJnZXQuc2hvdWxkQ29tcG9uZW50VXBkYXRlKSB0YXJnZXQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gb2JzZXJ2ZXJTQ1U7ZWxzZSBpZiAodGFyZ2V0LnNob3VsZENvbXBvbmVudFVwZGF0ZSAhPT0gb2JzZXJ2ZXJTQ1UpIC8vIG4uYi4gdW5lcXVhbCBjaGVjaywgaW5zdGVhZCBvZiBleGlzdGVuY2UgY2hlY2ssIGFzIEBvYnNlcnZlciBtaWdodCBiZSBvbiBzdXBlcmNsYXNzIGFzIHdlbGxcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkl0IGlzIG5vdCBhbGxvd2VkIHRvIHVzZSBzaG91bGRDb21wb25lbnRVcGRhdGUgaW4gb2JzZXJ2ZXIgYmFzZWQgY29tcG9uZW50cy5cIik7XG4gIH0gLy8gdGhpcy5wcm9wcyBhbmQgdGhpcy5zdGF0ZSBhcmUgbWFkZSBvYnNlcnZhYmxlLCBqdXN0IHRvIG1ha2Ugc3VyZSBAY29tcHV0ZWQgZmllbGRzIHRoYXRcbiAgLy8gYXJlIGRlZmluZWQgaW5zaWRlIHRoZSBjb21wb25lbnQsIGFuZCB3aGljaCByZWx5IG9uIHN0YXRlIG9yIHByb3BzLCByZS1jb21wdXRlIGlmIHN0YXRlIG9yIHByb3BzIGNoYW5nZVxuICAvLyAob3RoZXJ3aXNlIHRoZSBjb21wdXRlZCB3b3VsZG4ndCB1cGRhdGUgYW5kIGJlY29tZSBzdGFsZSBvbiBwcm9wcyBjaGFuZ2UsIHNpbmNlIHByb3BzIGFyZSBub3Qgb2JzZXJ2YWJsZSlcbiAgLy8gSG93ZXZlciwgdGhpcyBzb2x1dGlvbiBpcyBub3Qgd2l0aG91dCBpdCdzIG93biBwcm9ibGVtczogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4LXJlYWN0L2lzc3Vlcz91dGY4PSVFMiU5QyU5MyZxPWlzJTNBaXNzdWUrbGFiZWwlM0FvYnNlcnZhYmxlLXByb3BzLW9yLW5vdCtcblxuXG4gIG1ha2VPYnNlcnZhYmxlUHJvcCh0YXJnZXQsIFwicHJvcHNcIik7XG4gIG1ha2VPYnNlcnZhYmxlUHJvcCh0YXJnZXQsIFwic3RhdGVcIik7XG4gIHZhciBiYXNlUmVuZGVyID0gdGFyZ2V0LnJlbmRlcjtcblxuICB0YXJnZXQucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYWtlQ29tcG9uZW50UmVhY3RpdmUuY2FsbCh0aGlzLCBiYXNlUmVuZGVyKTtcbiAgfTtcblxuICBwYXRjaCh0YXJnZXQsIFwiY29tcG9uZW50V2lsbFVubW91bnRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyRyZW5kZXIkbW9ieEFkbWk7XG5cbiAgICBpZiAoaXNVc2luZ1N0YXRpY1JlbmRlcmluZygpID09PSB0cnVlKSByZXR1cm47XG4gICAgKF90aGlzJHJlbmRlciRtb2J4QWRtaSA9IHRoaXMucmVuZGVyW21vYnhBZG1pblByb3BlcnR5XSkgPT09IG51bGwgfHwgX3RoaXMkcmVuZGVyJG1vYnhBZG1pID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRyZW5kZXIkbW9ieEFkbWkuZGlzcG9zZSgpO1xuICAgIHRoaXNbbW9ieElzVW5tb3VudGVkXSA9IHRydWU7XG5cbiAgICBpZiAoIXRoaXMucmVuZGVyW21vYnhBZG1pblByb3BlcnR5XSkge1xuICAgICAgLy8gUmVuZGVyIG1heSBoYXZlIGJlZW4gaG90LXN3YXBwZWQgYW5kL29yIG92ZXJyaWRlbiBieSBhIHN1YmNsYXNzLlxuICAgICAgdmFyIF9kaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKHRoaXMpO1xuXG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgcmVhY3RpdmUgcmVuZGVyIG9mIGFuIG9ic2VydmVyIGNsYXNzIGNvbXBvbmVudCAoXCIgKyBfZGlzcGxheU5hbWUgKyBcIikgXFxuICAgICAgICAgICAgICAgIHdhcyBvdmVycmlkZW4gYWZ0ZXIgTW9iWCBhdHRhY2hlZC4gVGhpcyBtYXkgcmVzdWx0IGluIGEgbWVtb3J5IGxlYWsgaWYgdGhlIFxcbiAgICAgICAgICAgICAgICBvdmVycmlkZW4gcmVhY3RpdmUgcmVuZGVyIHdhcyBub3QgcHJvcGVybHkgZGlzcG9zZWQuXCIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb21wb25lbnRDbGFzcztcbn0gLy8gR2VuZXJhdGVzIGEgZnJpZW5kbHkgbmFtZSBmb3IgZGVidWdnaW5nXG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKGNvbXApIHtcbiAgcmV0dXJuIGNvbXAuZGlzcGxheU5hbWUgfHwgY29tcC5uYW1lIHx8IGNvbXAuY29uc3RydWN0b3IgJiYgKGNvbXAuY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgY29tcC5jb25zdHJ1Y3Rvci5uYW1lKSB8fCBcIjxjb21wb25lbnQ+XCI7XG59XG5cbmZ1bmN0aW9uIG1ha2VDb21wb25lbnRSZWFjdGl2ZShyZW5kZXIpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBpZiAoaXNVc2luZ1N0YXRpY1JlbmRlcmluZygpID09PSB0cnVlKSByZXR1cm4gcmVuZGVyLmNhbGwodGhpcyk7XG4gIC8qKlxyXG4gICAqIElmIHByb3BzIGFyZSBzaGFsbG93bHkgbW9kaWZpZWQsIHJlYWN0IHdpbGwgcmVuZGVyIGFueXdheSxcclxuICAgKiBzbyBhdG9tLnJlcG9ydENoYW5nZWQoKSBzaG91bGQgbm90IHJlc3VsdCBpbiB5ZXQgYW5vdGhlciByZS1yZW5kZXJcclxuICAgKi9cblxuICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHNraXBSZW5kZXJLZXksIGZhbHNlKTtcbiAgLyoqXHJcbiAgICogZm9yY2VVcGRhdGUgd2lsbCByZS1hc3NpZ24gdGhpcy5wcm9wcy4gV2UgZG9uJ3Qgd2FudCB0aGF0IHRvIGNhdXNlIGEgbG9vcCxcclxuICAgKiBzbyBkZXRlY3QgdGhlc2UgY2hhbmdlc1xyXG4gICAqL1xuXG4gIHNldEhpZGRlblByb3AodGhpcywgaXNGb3JjaW5nVXBkYXRlS2V5LCBmYWxzZSk7XG4gIHZhciBpbml0aWFsTmFtZSA9IGdldERpc3BsYXlOYW1lKHRoaXMpO1xuICB2YXIgYmFzZVJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB2YXIgaXNSZW5kZXJpbmdQZW5kaW5nID0gZmFsc2U7XG4gIHZhciByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihpbml0aWFsTmFtZSArIFwiLnJlbmRlcigpXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzUmVuZGVyaW5nUGVuZGluZykge1xuICAgICAgLy8gTi5CLiBHZXR0aW5nIGhlcmUgKmJlZm9yZSBtb3VudGluZyogbWVhbnMgdGhhdCBhIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBoYXMgc2lkZSBlZmZlY3RzIChzZWUgdGhlIHJlbGV2YW50IHRlc3QgaW4gbWlzYy5qcylcbiAgICAgIC8vIFRoaXMgdW5pZGlvbWF0aWMgUmVhY3QgdXNhZ2UgYnV0IFJlYWN0IHdpbGwgY29ycmVjdGx5IHdhcm4gYWJvdXQgdGhpcyBzbyB3ZSBjb250aW51ZSBhcyB1c3VhbFxuICAgICAgLy8gU2VlICM4NSAvIFB1bGwgIzQ0XG4gICAgICBpc1JlbmRlcmluZ1BlbmRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAoX3RoaXNbbW9ieElzVW5tb3VudGVkXSAhPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgaGFzRXJyb3IgPSB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc2V0SGlkZGVuUHJvcChfdGhpcywgaXNGb3JjaW5nVXBkYXRlS2V5LCB0cnVlKTtcbiAgICAgICAgICBpZiAoIV90aGlzW3NraXBSZW5kZXJLZXldKSBDb21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlLmNhbGwoX3RoaXMpO1xuICAgICAgICAgIGhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgc2V0SGlkZGVuUHJvcChfdGhpcywgaXNGb3JjaW5nVXBkYXRlS2V5LCBmYWxzZSk7XG4gICAgICAgICAgaWYgKGhhc0Vycm9yKSByZWFjdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZWFjdGlvbltcInJlYWN0Q29tcG9uZW50XCJdID0gdGhpcztcbiAgcmVhY3RpdmVSZW5kZXJbbW9ieEFkbWluUHJvcGVydHldID0gcmVhY3Rpb247XG4gIHRoaXMucmVuZGVyID0gcmVhY3RpdmVSZW5kZXI7XG5cbiAgZnVuY3Rpb24gcmVhY3RpdmVSZW5kZXIoKSB7XG4gICAgaXNSZW5kZXJpbmdQZW5kaW5nID0gZmFsc2U7XG4gICAgdmFyIGV4Y2VwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB2YXIgcmVuZGVyaW5nID0gdW5kZWZpbmVkO1xuICAgIHJlYWN0aW9uLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlbmRlcmluZyA9IF9hbGxvd1N0YXRlQ2hhbmdlcyhmYWxzZSwgYmFzZVJlbmRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGV4Y2VwdGlvbiA9IGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZXhjZXB0aW9uKSB7XG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcmluZztcbiAgfVxuXG4gIHJldHVybiByZWFjdGl2ZVJlbmRlci5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlclNDVShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICBpZiAoaXNVc2luZ1N0YXRpY1JlbmRlcmluZygpKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYngtcmVhY3RdIEl0IHNlZW1zIHRoYXQgYSByZS1yZW5kZXJpbmcgb2YgYSBSZWFjdCBjb21wb25lbnQgaXMgdHJpZ2dlcmVkIHdoaWxlIGluIHN0YXRpYyAoc2VydmVyLXNpZGUpIG1vZGUuIFBsZWFzZSBtYWtlIHN1cmUgY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb25seSBvbmNlIHNlcnZlci1zaWRlLlwiKTtcbiAgfSAvLyB1cGRhdGUgb24gYW55IHN0YXRlIGNoYW5nZXMgKGFzIGlzIHRoZSBkZWZhdWx0KVxuXG5cbiAgaWYgKHRoaXMuc3RhdGUgIT09IG5leHRTdGF0ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHVwZGF0ZSBpZiBwcm9wcyBhcmUgc2hhbGxvd2x5IG5vdCBlcXVhbCwgaW5zcGlyZWQgYnkgUHVyZVJlbmRlck1peGluXG4gIC8vIHdlIGNvdWxkIHJldHVybiBqdXN0ICdmYWxzZScgaGVyZSwgYW5kIGF2b2lkIHRoZSBgc2tpcFJlbmRlcmAgY2hlY2tzIGV0Y1xuICAvLyBob3dldmVyLCBpdCBpcyBuaWNlciBpZiBsaWZlY3ljbGUgZXZlbnRzIGFyZSB0cmlnZ2VyZWQgbGlrZSB1c3VhbGx5LFxuICAvLyBzbyB3ZSByZXR1cm4gdHJ1ZSBoZXJlIGlmIHByb3BzIGFyZSBzaGFsbG93bHkgbW9kaWZpZWQuXG5cblxuICByZXR1cm4gIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xufVxuXG5mdW5jdGlvbiBtYWtlT2JzZXJ2YWJsZVByb3AodGFyZ2V0LCBwcm9wTmFtZSkge1xuICB2YXIgdmFsdWVIb2xkZXJLZXkgPSBuZXdTeW1ib2woXCJyZWFjdFByb3BfXCIgKyBwcm9wTmFtZSArIFwiX3ZhbHVlSG9sZGVyXCIpO1xuICB2YXIgYXRvbUhvbGRlcktleSA9IG5ld1N5bWJvbChcInJlYWN0UHJvcF9cIiArIHByb3BOYW1lICsgXCJfYXRvbUhvbGRlclwiKTtcblxuICBmdW5jdGlvbiBnZXRBdG9tKCkge1xuICAgIGlmICghdGhpc1thdG9tSG9sZGVyS2V5XSkge1xuICAgICAgc2V0SGlkZGVuUHJvcCh0aGlzLCBhdG9tSG9sZGVyS2V5LCBjcmVhdGVBdG9tKFwicmVhY3RpdmUgXCIgKyBwcm9wTmFtZSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzW2F0b21Ib2xkZXJLZXldO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcE5hbWUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcmV2UmVhZFN0YXRlID0gZmFsc2U7XG5cbiAgICAgIGlmIChfYWxsb3dTdGF0ZVJlYWRzU3RhcnQgJiYgX2FsbG93U3RhdGVSZWFkc0VuZCkge1xuICAgICAgICBwcmV2UmVhZFN0YXRlID0gX2FsbG93U3RhdGVSZWFkc1N0YXJ0KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBnZXRBdG9tLmNhbGwodGhpcykucmVwb3J0T2JzZXJ2ZWQoKTtcblxuICAgICAgaWYgKF9hbGxvd1N0YXRlUmVhZHNTdGFydCAmJiBfYWxsb3dTdGF0ZVJlYWRzRW5kKSB7XG4gICAgICAgIF9hbGxvd1N0YXRlUmVhZHNFbmQocHJldlJlYWRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzW3ZhbHVlSG9sZGVyS2V5XTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgIGlmICghdGhpc1tpc0ZvcmNpbmdVcGRhdGVLZXldICYmICFzaGFsbG93RXF1YWwodGhpc1t2YWx1ZUhvbGRlcktleV0sIHYpKSB7XG4gICAgICAgIHNldEhpZGRlblByb3AodGhpcywgdmFsdWVIb2xkZXJLZXksIHYpO1xuICAgICAgICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHNraXBSZW5kZXJLZXksIHRydWUpO1xuICAgICAgICBnZXRBdG9tLmNhbGwodGhpcykucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHNraXBSZW5kZXJLZXksIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEhpZGRlblByb3AodGhpcywgdmFsdWVIb2xkZXJLZXksIHYpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmZvcjsgLy8gVXNpbmcgcmVhY3QtaXMgaGFkIHNvbWUgaXNzdWVzIChhbmQgb3BlcmF0ZXMgb24gZWxlbWVudHMsIG5vdCBvbiB0eXBlcyksIHNlZSAjNjA4IC8gIzYwOVxuXG52YXIgUmVhY3RGb3J3YXJkUmVmU3ltYm9sID0gaGFzU3ltYm9sID9cbi8qI19fUFVSRV9fKi9cblN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSA6IHR5cGVvZiBmb3J3YXJkUmVmID09PSBcImZ1bmN0aW9uXCIgJiZcbi8qI19fUFVSRV9fKi9cbmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBudWxsO1xufSlbXCIkJHR5cGVvZlwiXTtcbnZhciBSZWFjdE1lbW9TeW1ib2wgPSBoYXNTeW1ib2wgP1xuLyojX19QVVJFX18qL1xuU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikgOiB0eXBlb2YgbWVtbyA9PT0gXCJmdW5jdGlvblwiICYmXG4vKiNfX1BVUkVfXyovXG5tZW1vKGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbnVsbDtcbn0pW1wiJCR0eXBlb2ZcIl07XG4vKipcclxuICogT2JzZXJ2ZXIgZnVuY3Rpb24gLyBkZWNvcmF0b3JcclxuICovXG5cbmZ1bmN0aW9uIG9ic2VydmVyKGNvbXBvbmVudCkge1xuICBpZiAoY29tcG9uZW50W1wiaXNNb2J4SW5qZWN0b3JcIl0gPT09IHRydWUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJNb2J4IG9ic2VydmVyOiBZb3UgYXJlIHRyeWluZyB0byB1c2UgJ29ic2VydmVyJyBvbiBhIGNvbXBvbmVudCB0aGF0IGFscmVhZHkgaGFzICdpbmplY3QnLiBQbGVhc2UgYXBwbHkgJ29ic2VydmVyJyBiZWZvcmUgYXBwbHlpbmcgJ2luamVjdCdcIik7XG4gIH1cblxuICBpZiAoUmVhY3RNZW1vU3ltYm9sICYmIGNvbXBvbmVudFtcIiQkdHlwZW9mXCJdID09PSBSZWFjdE1lbW9TeW1ib2wpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNb2J4IG9ic2VydmVyOiBZb3UgYXJlIHRyeWluZyB0byB1c2UgJ29ic2VydmVyJyBvbiBhIGZ1bmN0aW9uIGNvbXBvbmVudCB3cmFwcGVkIGluIGVpdGhlciBhbm90aGVyIG9ic2VydmVyIG9yICdSZWFjdC5tZW1vJy4gVGhlIG9ic2VydmVyIGFscmVhZHkgYXBwbGllcyAnUmVhY3QubWVtbycgZm9yIHlvdS5cIik7XG4gIH0gLy8gVW53cmFwIGZvcndhcmQgcmVmcyBpbnRvIGA8T2JzZXJ2ZXI+YCBjb21wb25lbnRcbiAgLy8gd2UgbmVlZCB0byB1bndyYXAgdGhlIHJlbmRlciwgYmVjYXVzZSBpdCBpcyB0aGUgaW5uZXIgcmVuZGVyIHRoYXQgbmVlZHMgdG8gYmUgdHJhY2tlZCxcbiAgLy8gbm90IHRoZSBGb3J3YXJkUmVmIEhvQ1xuXG5cbiAgaWYgKFJlYWN0Rm9yd2FyZFJlZlN5bWJvbCAmJiBjb21wb25lbnRbXCIkJHR5cGVvZlwiXSA9PT0gUmVhY3RGb3J3YXJkUmVmU3ltYm9sKSB7XG4gICAgdmFyIGJhc2VSZW5kZXIgPSBjb21wb25lbnRbXCJyZW5kZXJcIl07XG4gICAgaWYgKHR5cGVvZiBiYXNlUmVuZGVyICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcInJlbmRlciBwcm9wZXJ0eSBvZiBGb3J3YXJkUmVmIHdhcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICByZXR1cm4gZm9yd2FyZFJlZihmdW5jdGlvbiBPYnNlcnZlckZvcndhcmRSZWYoKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KE9ic2VydmVyLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBiYXNlUmVuZGVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSAvLyBGdW5jdGlvbiBjb21wb25lbnRcblxuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSBcImZ1bmN0aW9uXCIgJiYgKCFjb21wb25lbnQucHJvdG90eXBlIHx8ICFjb21wb25lbnQucHJvdG90eXBlLnJlbmRlcikgJiYgIWNvbXBvbmVudFtcImlzUmVhY3RDbGFzc1wiXSAmJiAhT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoQ29tcG9uZW50LCBjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyJDEoY29tcG9uZW50KTtcbiAgfVxuXG4gIHJldHVybiBtYWtlQ2xhc3NDb21wb25lbnRPYnNlcnZlcihjb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIE1vYlhQcm92aWRlckNvbnRleHQgPVxuLyojX19QVVJFX18qL1xuUmVhY3RfX2RlZmF1bHQuY3JlYXRlQ29udGV4dCh7fSk7XG5mdW5jdGlvbiBQcm92aWRlcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHN0b3JlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgdmFyIHBhcmVudFZhbHVlID0gUmVhY3RfX2RlZmF1bHQudXNlQ29udGV4dChNb2JYUHJvdmlkZXJDb250ZXh0KTtcbiAgdmFyIG11dGFibGVQcm92aWRlclJlZiA9IFJlYWN0X19kZWZhdWx0LnVzZVJlZihfZXh0ZW5kcyh7fSwgcGFyZW50VmFsdWUsIHN0b3JlcykpO1xuICB2YXIgdmFsdWUgPSBtdXRhYmxlUHJvdmlkZXJSZWYuY3VycmVudDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIHZhbHVlLCBzdG9yZXMpOyAvLyBzcHJlYWQgaW4gcHJldmlvdXMgc3RhdGUgZm9yIHRoZSBjb250ZXh0IGJhc2VkIHN0b3Jlc1xuXG5cbiAgICBpZiAoIXNoYWxsb3dFcXVhbCh2YWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNb2JYIFByb3ZpZGVyOiBUaGUgc2V0IG9mIHByb3ZpZGVkIHN0b3JlcyBoYXMgY2hhbmdlZC4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngtcmVhY3QjdGhlLXNldC1vZi1wcm92aWRlZC1zdG9yZXMtaGFzLWNoYW5nZWQtZXJyb3IuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1vYlhQcm92aWRlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSwgY2hpbGRyZW4pO1xufVxuUHJvdmlkZXIuZGlzcGxheU5hbWUgPSBcIk1vYlhQcm92aWRlclwiO1xuXG4vKipcclxuICogU3RvcmUgSW5qZWN0aW9uXHJcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZUluamVjdG9yKGdyYWJTdG9yZXNGbiwgY29tcG9uZW50LCBpbmplY3ROYW1lcywgbWFrZVJlYWN0aXZlKSB7XG4gIC8vIFN1cHBvcnQgZm9yd2FyZCByZWZzXG4gIHZhciBJbmplY3RvciA9IFJlYWN0X19kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICB2YXIgbmV3UHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuXG4gICAgdmFyIGNvbnRleHQgPSBSZWFjdF9fZGVmYXVsdC51c2VDb250ZXh0KE1vYlhQcm92aWRlckNvbnRleHQpO1xuICAgIE9iamVjdC5hc3NpZ24obmV3UHJvcHMsIGdyYWJTdG9yZXNGbihjb250ZXh0IHx8IHt9LCBuZXdQcm9wcykgfHwge30pO1xuXG4gICAgaWYgKHJlZikge1xuICAgICAgbmV3UHJvcHMucmVmID0gcmVmO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgbmV3UHJvcHMpO1xuICB9KTtcbiAgaWYgKG1ha2VSZWFjdGl2ZSkgSW5qZWN0b3IgPSBvYnNlcnZlcihJbmplY3Rvcik7XG4gIEluamVjdG9yW1wiaXNNb2J4SW5qZWN0b3JcIl0gPSB0cnVlOyAvLyBhc3NpZ25lZCBsYXRlIHRvIHN1cHByZXNzIG9ic2VydmVyIHdhcm5pbmdcbiAgLy8gU3RhdGljIGZpZWxkcyBmcm9tIGNvbXBvbmVudCBzaG91bGQgYmUgdmlzaWJsZSBvbiB0aGUgZ2VuZXJhdGVkIEluamVjdG9yXG5cbiAgY29weVN0YXRpY1Byb3BlcnRpZXMoY29tcG9uZW50LCBJbmplY3Rvcik7XG4gIEluamVjdG9yW1wid3JhcHBlZENvbXBvbmVudFwiXSA9IGNvbXBvbmVudDtcbiAgSW5qZWN0b3IuZGlzcGxheU5hbWUgPSBnZXRJbmplY3ROYW1lKGNvbXBvbmVudCwgaW5qZWN0TmFtZXMpO1xuICByZXR1cm4gSW5qZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGdldEluamVjdE5hbWUoY29tcG9uZW50LCBpbmplY3ROYW1lcykge1xuICB2YXIgZGlzcGxheU5hbWU7XG4gIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudC5uYW1lIHx8IGNvbXBvbmVudC5jb25zdHJ1Y3RvciAmJiBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSB8fCBcIkNvbXBvbmVudFwiO1xuICBpZiAoaW5qZWN0TmFtZXMpIGRpc3BsYXlOYW1lID0gXCJpbmplY3Qtd2l0aC1cIiArIGluamVjdE5hbWVzICsgXCIoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7ZWxzZSBkaXNwbGF5TmFtZSA9IFwiaW5qZWN0KFwiICsgY29tcG9uZW50TmFtZSArIFwiKVwiO1xuICByZXR1cm4gZGlzcGxheU5hbWU7XG59XG5cbmZ1bmN0aW9uIGdyYWJTdG9yZXNCeU5hbWUoc3RvcmVOYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGJhc2VTdG9yZXMsIG5leHRQcm9wcykge1xuICAgIHN0b3JlTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG4gICAgICBpZiAoc3RvcmVOYW1lIGluIG5leHRQcm9wcyAvLyBwcmVmZXIgcHJvcHMgb3ZlciBzdG9yZXNcbiAgICAgICkgcmV0dXJuO1xuICAgICAgaWYgKCEoc3RvcmVOYW1lIGluIGJhc2VTdG9yZXMpKSB0aHJvdyBuZXcgRXJyb3IoXCJNb2JYIGluamVjdG9yOiBTdG9yZSAnXCIgKyBzdG9yZU5hbWUgKyBcIicgaXMgbm90IGF2YWlsYWJsZSEgTWFrZSBzdXJlIGl0IGlzIHByb3ZpZGVkIGJ5IHNvbWUgUHJvdmlkZXJcIik7XG4gICAgICBuZXh0UHJvcHNbc3RvcmVOYW1lXSA9IGJhc2VTdG9yZXNbc3RvcmVOYW1lXTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dFByb3BzO1xuICB9O1xufVxuLyoqXHJcbiAqIGhpZ2hlciBvcmRlciBjb21wb25lbnQgdGhhdCBpbmplY3RzIHN0b3JlcyB0byBhIGNoaWxkLlxyXG4gKiB0YWtlcyBlaXRoZXIgYSB2YXJhcmdzIGxpc3Qgb2Ygc3RyaW5ncywgd2hpY2ggYXJlIHN0b3JlcyByZWFkIGZyb20gdGhlIGNvbnRleHQsXHJcbiAqIG9yIGEgZnVuY3Rpb24gdGhhdCBtYW51YWxseSBtYXBzIHRoZSBhdmFpbGFibGUgc3RvcmVzIGZyb20gdGhlIGNvbnRleHQgdG8gcHJvcHM6XHJcbiAqIHN0b3Jlc1RvUHJvcHMobW9ieFN0b3JlcywgcHJvcHMsIGNvbnRleHQpID0+IG5ld1Byb3BzXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGluamVjdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0b3JlTmFtZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc3RvcmVOYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgZ3JhYlN0b3Jlc0ZuID0gYXJndW1lbnRzWzBdO1xuICAgIHJldHVybiBmdW5jdGlvbiAoY29tcG9uZW50Q2xhc3MpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTdG9yZUluamVjdG9yKGdyYWJTdG9yZXNGbiwgY29tcG9uZW50Q2xhc3MsIGdyYWJTdG9yZXNGbi5uYW1lLCB0cnVlKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoY29tcG9uZW50Q2xhc3MpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTdG9yZUluamVjdG9yKGdyYWJTdG9yZXNCeU5hbWUoc3RvcmVOYW1lcyksIGNvbXBvbmVudENsYXNzLCBzdG9yZU5hbWVzLmpvaW4oXCItXCIpLCBmYWxzZSk7XG4gICAgfTtcbiAgfVxufVxuXG52YXIgcHJvdG9TdG9yZUtleSA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJkaXNwb3NlT25Vbm1vdW50UHJvdG9cIik7XG52YXIgaW5zdFN0b3JlS2V5ID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcImRpc3Bvc2VPblVubW91bnRJbnN0XCIpO1xuXG5mdW5jdGlvbiBydW5EaXNwb3NlcnNPbldpbGxVbm1vdW50KCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBbXS5jb25jYXQodGhpc1twcm90b1N0b3JlS2V5XSB8fCBbXSwgdGhpc1tpbnN0U3RvcmVLZXldIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wS2V5T3JGdW5jdGlvbikge1xuICAgIHZhciBwcm9wID0gdHlwZW9mIHByb3BLZXlPckZ1bmN0aW9uID09PSBcInN0cmluZ1wiID8gX3RoaXNbcHJvcEtleU9yRnVuY3Rpb25dIDogcHJvcEtleU9yRnVuY3Rpb247XG5cbiAgICBpZiAocHJvcCAhPT0gdW5kZWZpbmVkICYmIHByb3AgIT09IG51bGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3ApKSBwcm9wLm1hcChmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gZigpO1xuICAgICAgfSk7ZWxzZSBwcm9wKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcG9zZU9uVW5tb3VudCh0YXJnZXQsIHByb3BlcnR5S2V5T3JGdW5jdGlvbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eUtleU9yRnVuY3Rpb24pKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5S2V5T3JGdW5jdGlvbi5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZGlzcG9zZU9uVW5tb3VudCh0YXJnZXQsIGZuKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCkuY29uc3RydWN0b3I7XG4gIHZhciBjMiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQuY29uc3RydWN0b3IpOyAvLyBTcGVjaWFsIGNhc2UgZm9yIHJlYWN0LWhvdC1sb2FkZXJcblxuICB2YXIgYzMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCkpO1xuXG4gIGlmICghKGMgPT09IFJlYWN0X19kZWZhdWx0LkNvbXBvbmVudCB8fCBjID09PSBSZWFjdF9fZGVmYXVsdC5QdXJlQ29tcG9uZW50IHx8IGMyID09PSBSZWFjdF9fZGVmYXVsdC5Db21wb25lbnQgfHwgYzIgPT09IFJlYWN0X19kZWZhdWx0LlB1cmVDb21wb25lbnQgfHwgYzMgPT09IFJlYWN0X19kZWZhdWx0LkNvbXBvbmVudCB8fCBjMyA9PT0gUmVhY3RfX2RlZmF1bHQuUHVyZUNvbXBvbmVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC1yZWFjdF0gZGlzcG9zZU9uVW5tb3VudCBvbmx5IHN1cHBvcnRzIGRpcmVjdCBzdWJjbGFzc2VzIG9mIFJlYWN0LkNvbXBvbmVudCBvciBSZWFjdC5QdXJlQ29tcG9uZW50LlwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvcGVydHlLZXlPckZ1bmN0aW9uICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBwcm9wZXJ0eUtleU9yRnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIiAmJiAhQXJyYXkuaXNBcnJheShwcm9wZXJ0eUtleU9yRnVuY3Rpb24pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYngtcmVhY3RdIGRpc3Bvc2VPblVubW91bnQgb25seSB3b3JrcyBpZiB0aGUgcGFyYW1ldGVyIGlzIGVpdGhlciBhIHByb3BlcnR5IGtleSBvciBhIGZ1bmN0aW9uLlwiKTtcbiAgfSAvLyBkZWNvcmF0b3IncyB0YXJnZXQgaXMgdGhlIHByb3RvdHlwZSwgc28gaXQgZG9lc24ndCBoYXZlIGFueSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGxpa2UgcHJvcHNcblxuXG4gIHZhciBpc0RlY29yYXRvciA9IHR5cGVvZiBwcm9wZXJ0eUtleU9yRnVuY3Rpb24gPT09IFwic3RyaW5nXCI7IC8vIGFkZCBwcm9wZXJ0eSBrZXkgLyBmdW5jdGlvbiB3ZSB3YW50IHJ1biAoZGlzcG9zZWQpIHRvIHRoZSBzdG9yZVxuXG4gIHZhciBjb21wb25lbnRXYXNBbHJlYWR5TW9kaWZpZWQgPSAhIXRhcmdldFtwcm90b1N0b3JlS2V5XSB8fCAhIXRhcmdldFtpbnN0U3RvcmVLZXldO1xuICB2YXIgc3RvcmUgPSBpc0RlY29yYXRvciA/IC8vIGRlY29yYXRvcnMgYXJlIGFkZGVkIHRvIHRoZSBwcm90b3R5cGUgc3RvcmVcbiAgdGFyZ2V0W3Byb3RvU3RvcmVLZXldIHx8ICh0YXJnZXRbcHJvdG9TdG9yZUtleV0gPSBbXSkgOiAvLyBmdW5jdGlvbnMgYXJlIGFkZGVkIHRvIHRoZSBpbnN0YW5jZSBzdG9yZVxuICB0YXJnZXRbaW5zdFN0b3JlS2V5XSB8fCAodGFyZ2V0W2luc3RTdG9yZUtleV0gPSBbXSk7XG4gIHN0b3JlLnB1c2gocHJvcGVydHlLZXlPckZ1bmN0aW9uKTsgLy8gdHdlYWsgdGhlIGNvbXBvbmVudCBjbGFzcyBjb21wb25lbnRXaWxsVW5tb3VudCBpZiBub3QgZG9uZSBhbHJlYWR5XG5cbiAgaWYgKCFjb21wb25lbnRXYXNBbHJlYWR5TW9kaWZpZWQpIHtcbiAgICBwYXRjaCh0YXJnZXQsIFwiY29tcG9uZW50V2lsbFVubW91bnRcIiwgcnVuRGlzcG9zZXJzT25XaWxsVW5tb3VudCk7XG4gIH0gLy8gcmV0dXJuIHRoZSBkaXNwb3NlciBhcyBpcyBpZiBpbnZva2VkIGFzIGEgbm9uIGRlY29yYXRvclxuXG5cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eUtleU9yRnVuY3Rpb24gIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gcHJvcGVydHlLZXlPckZ1bmN0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRvcikge1xuICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDYgPyBfbGVuIC0gNiA6IDApLCBfa2V5ID0gNjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcmVzdFtfa2V5IC0gNl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBcIjw8YW5vbnltb3VzPj5cIjtcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgdmFyIGFjdHVhbCA9IHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCA/IFwibnVsbFwiIDogXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgaXMgbWFya2VkIGFzIHJlcXVpcmVkIFwiICsgXCJpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBidXQgaXRzIHZhbHVlIGlzIGBcIiArIGFjdHVhbCArIFwiYC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgcmVzdCBhcmcgaXMgbmVjZXNzYXJ5IGZvciBzb21lIFJlYWN0IGludGVybmFscyAtIGZhaWxzIHRlc3RzIG90aGVyd2lzZVxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KHJlc3QpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpOyAvLyBBZGQgaXNSZXF1aXJlZCB0byBzYXRpc2Z5IFJlcXVpcmFibGVcblxuICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcbiAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59IC8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuXG5cbmZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgaWYgKHByb3BUeXBlID09PSBcInN5bWJvbFwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcblxuXG4gIGlmIChwcm9wVmFsdWVbXCJAQHRvU3RyaW5nVGFnXCJdID09PSBcIlN5bWJvbFwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuXG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gQ29waWVkIGZyb20gUmVhY3QuUHJvcFR5cGVzXG5cblxuZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgIHJldHVybiBcImFycmF5XCI7XG4gIH1cblxuICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgIHJldHVybiBcIm9iamVjdFwiO1xuICB9XG5cbiAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIFwic3ltYm9sXCI7XG4gIH1cblxuICByZXR1cm4gcHJvcFR5cGU7XG59IC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbi8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuXG5cbmZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXG4gIGlmIChwcm9wVHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4gXCJkYXRlXCI7XG4gICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiBcInJlZ2V4cFwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wVHlwZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihhbGxvd05hdGl2ZVR5cGUsIG1vYnhUeXBlKSB7XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgcmV0dXJuIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoYWxsb3dOYXRpdmVUeXBlKSB7XG4gICAgICAgIGlmIChnZXRQcm9wVHlwZShwcm9wc1twcm9wTmFtZV0pID09PSBtb2J4VHlwZS50b0xvd2VyQ2FzZSgpKSByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG1vYnhDaGVja2VyO1xuXG4gICAgICBzd2l0Y2ggKG1vYnhUeXBlKSB7XG4gICAgICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgICAgIG1vYnhDaGVja2VyID0gaXNPYnNlcnZhYmxlQXJyYXk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIk9iamVjdFwiOlxuICAgICAgICAgIG1vYnhDaGVja2VyID0gaXNPYnNlcnZhYmxlT2JqZWN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJNYXBcIjpcbiAgICAgICAgICBtb2J4Q2hlY2tlciA9IGlzT2JzZXJ2YWJsZU1hcDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgbW9ieFR5cGU6IFwiICsgbW9ieFR5cGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAoIW1vYnhDaGVja2VyKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgdmFyIG5hdGl2ZVR5cGVFeHBlY3RhdGlvbk1lc3NhZ2UgPSBhbGxvd05hdGl2ZVR5cGUgPyBcIiBvciBqYXZhc2NyaXB0IGBcIiArIG1vYnhUeXBlLnRvTG93ZXJDYXNlKCkgKyBcImBcIiA6IFwiXCI7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJlY2lzZVR5cGUgKyBcImAgc3VwcGxpZWQgdG9cIiArIFwiIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGBtb2J4Lk9ic2VydmFibGVcIiArIG1vYnhUeXBlICsgXCJgXCIgKyBuYXRpdmVUeXBlRXhwZWN0YXRpb25NZXNzYWdlICsgXCIuXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGVBcnJheU9mVHlwZUNoZWNrZXIoYWxsb3dOYXRpdmVUeXBlLCB0eXBlQ2hlY2tlcikge1xuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDUgPyBfbGVuMiAtIDUgOiAwKSwgX2tleTIgPSA1OyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICByZXN0W19rZXkyIC0gNV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJQcm9wZXJ0eSBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgY29tcG9uZW50IGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAgaGFzIFwiICsgXCJpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IGNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoYWxsb3dOYXRpdmVUeXBlLCBcIkFycmF5XCIpKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBlcnJvciA9IHR5cGVDaGVja2VyLmFwcGx5KHZvaWQgMCwgW3Byb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiW1wiICsgaSArIFwiXVwiXS5jb25jYXQocmVzdCkpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciBvYnNlcnZhYmxlQXJyYXkgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihmYWxzZSwgXCJBcnJheVwiKTtcbnZhciBvYnNlcnZhYmxlQXJyYXlPZiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlQXJyYXlPZlR5cGVDaGVja2VyLmJpbmQobnVsbCwgZmFsc2UpO1xudmFyIG9ic2VydmFibGVNYXAgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihmYWxzZSwgXCJNYXBcIik7XG52YXIgb2JzZXJ2YWJsZU9iamVjdCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGZhbHNlLCBcIk9iamVjdFwiKTtcbnZhciBhcnJheU9yT2JzZXJ2YWJsZUFycmF5ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IodHJ1ZSwgXCJBcnJheVwiKTtcbnZhciBhcnJheU9yT2JzZXJ2YWJsZUFycmF5T2YgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZUFycmF5T2ZUeXBlQ2hlY2tlci5iaW5kKG51bGwsIHRydWUpO1xudmFyIG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKHRydWUsIFwiT2JqZWN0XCIpO1xudmFyIFByb3BUeXBlcyA9IHtcbiAgb2JzZXJ2YWJsZUFycmF5OiBvYnNlcnZhYmxlQXJyYXksXG4gIG9ic2VydmFibGVBcnJheU9mOiBvYnNlcnZhYmxlQXJyYXlPZixcbiAgb2JzZXJ2YWJsZU1hcDogb2JzZXJ2YWJsZU1hcCxcbiAgb2JzZXJ2YWJsZU9iamVjdDogb2JzZXJ2YWJsZU9iamVjdCxcbiAgYXJyYXlPck9ic2VydmFibGVBcnJheTogYXJyYXlPck9ic2VydmFibGVBcnJheSxcbiAgYXJyYXlPck9ic2VydmFibGVBcnJheU9mOiBhcnJheU9yT2JzZXJ2YWJsZUFycmF5T2YsXG4gIG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdDogb2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0XG59O1xuXG5pZiAoIUNvbXBvbmVudCkgdGhyb3cgbmV3IEVycm9yKFwibW9ieC1yZWFjdCByZXF1aXJlcyBSZWFjdCB0byBiZSBhdmFpbGFibGVcIik7XG5pZiAoIW9ic2VydmFibGUpIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QgcmVxdWlyZXMgbW9ieCB0byBiZSBhdmFpbGFibGVcIik7XG5cbmV4cG9ydCB7IE1vYlhQcm92aWRlckNvbnRleHQsIFByb3BUeXBlcywgUHJvdmlkZXIsIGRpc3Bvc2VPblVubW91bnQsIGluamVjdCwgb2JzZXJ2ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vYnhyZWFjdC5lc20uanMubWFwXG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCB7IG9ic2VydmUgfSBmcm9tIFwibW9ieFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gXCJzcmMvdXRpbC9zdG9yZVByb3ZpZGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgTE9DQVRJT05fREFUQSA9IFtcclxuICAgICfshJzsmrjtirnrs4Tsi5wnLCAn6rK96riw64+EJywgJ+yduOyynOq0keyXreyLnCcsICfrtoDsgrDqtJHsl63si5wnLCBcclxuICAgICfrjIDqtazqtJHsl63si5wnLCAn6rSR7KO86rSR7Jet7IucJywgJ+uMgOyghOq0keyXreyLnCcsICfsmrjsgrDqtJHsl63si5wnLCBcclxuICAgICfshLjsooXtirnrs4TsnpDsuZjsi5wnLCAn6rCV7JuQ64+EJywgJ+y2qeyyreuCqOuPhCcsICfqsr3sg4Hrgqjrj4QnLCBcclxuICAgICfqsr3sg4HrtoHrj4QnLCAn7KCE652864Ko64+EJywgJ+yghOudvOu2geuPhCcsICfstqnssq3rtoHrj4QnXHJcbl07XHJcblxyXG5pbnRlcmZhY2UgTG9jYXRpb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBMb2NhdGlvbiA9IG9ic2VydmVyKCh7bmFtZX06IExvY2F0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7a29yZWFNYXBVSVN0b3JlfSA9IHVzZVN0b3JlcygpO1xyXG4gICAgY29uc3Qge3NlbGVjdGVkTG9jYXRpb25zLCB0b2dnbGVMb2NhdGlvbn0gPSBrb3JlYU1hcFVJU3RvcmU7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlTG9jYXRpb24obmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnbG9jYXRpb24nLCB7J2FjdGl2ZSc6IHNlbGVjdGVkTG9jYXRpb25zLmhhcyhuYW1lKX0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0pXHJcblxyXG5jb25zdCBMb2NhdGlvbkxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0ID0gTE9DQVRJT05fREFUQS5tYXAoKG5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gPExvY2F0aW9uIG5hbWU9e25hbWV9Lz5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2N4KCdsb2NhdGlvbldyYXAnKX0+e2xpc3R9PC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=