/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/accordion-js/dist/accordion.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/accordion-js/dist/accordion.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Accordion v2.8.0
 * Simple accordion created in pure Javascript.
 * https://github.com/michu2k/Accordion
 *
 * Copyright 2017-2019 Michał Strumpf
 * Published under MIT License
 */


!function (i) {
  function u(o, l) {
    var c = this,
        t = {
      init: function init() {
        if (Array.isArray(o)) return o.length && o.map(function (e) {
          return new u(e, l);
        }), !1;
        this.options = h({
          duration: 600,
          itemNumber: 0,
          aria: !0,
          closeOthers: !0,
          showItem: !1,
          elementClass: "ac",
          questionClass: "ac-q",
          answerClass: "ac-a",
          targetClass: "ac-target",
          onToggle: function onToggle() {}
        }, l), this.container = document.querySelector(o), this.elements = this.container.querySelectorAll("." + this.options.elementClass);
        var e = this.options,
            t = e.aria,
            n = e.showItem,
            i = e.itemNumber;
        t && this.container.setAttribute("role", "tablist");

        for (var s = 0; s < this.elements.length; s++) {
          var r = this.elements[s];
          r.classList.add("js-enabled"), this.hideElement(r), this.setTransition(r), this.generateID(r), t && this.setARIA(r);
        }

        if (n) {
          var a = this.elements[0];
          "number" == typeof i && i < this.elements.length && (a = this.elements[i]), this.toggleElement(a, !1);
        }

        c.attachEvents();
      },
      setTransition: function setTransition(e) {
        var t = this.options,
            n = t.duration,
            i = t.answerClass,
            s = e.querySelector("." + i),
            r = a("transition");
        s.style[r] = n + "ms";
      },
      generateID: function generateID(e) {
        e.setAttribute("id", "ac-".concat(s)), s++;
      },
      setARIA: function setARIA(e) {
        var t = this.options,
            n = t.questionClass,
            i = t.answerClass,
            s = e.querySelector("." + n),
            r = e.querySelector("." + i);
        s.setAttribute("role", "tab"), s.setAttribute("aria-expanded", "false"), r.setAttribute("role", "tabpanel");
      },
      updateARIA: function updateARIA(e, t) {
        var n = this.options.questionClass;
        e.querySelector("." + n).setAttribute("aria-expanded", t);
      },
      callSpecificElement: function callSpecificElement(e) {
        for (var t = e.target, n = this.options, i = n.questionClass, s = n.targetClass, r = n.closeOthers, a = 0; a < this.elements.length; a++) {
          if (this.elements[a].contains(t)) {
            (t.className.match(i) || t.className.match(s)) && (e.preventDefault(), r && this.closeAllElements(a), this.toggleElement(this.elements[a]));
            break;
          }
        }
      },
      hideElement: function hideElement(e) {
        var t = this.options.answerClass;
        e.querySelector("." + t).style.height = 0;
      },
      toggleElement: function toggleElement(e, t) {
        var n,
            i = !(1 < arguments.length && void 0 !== t) || t,
            s = this.options,
            r = s.answerClass,
            a = s.aria,
            o = s.onToggle,
            l = e.querySelector("." + r),
            c = l.scrollHeight;
        e.classList.toggle("is-active"), i || (l.style.height = "auto"), 0 < parseInt(l.style.height) ? (n = !1, requestAnimationFrame(function () {
          l.style.height = 0;
        })) : (n = !0, requestAnimationFrame(function () {
          l.style.height = c + "px";
        })), a && this.updateARIA(e, n), i && o(e, this.elements);
      },
      closeAllElements: function closeAllElements(e) {
        for (var t = this.options.aria, n = this.elements.length, i = 0; i < n; i++) {
          if (i != e) {
            var s = this.elements[i];
            s.classList.contains("is-active") && s.classList.remove("is-active"), t && this.updateARIA(s, !1), this.hideElement(s);
          }
        }
      },
      resizeHandler: function resizeHandler() {
        for (var e, t, n = this.options, i = n.elementClass, s = n.answerClass, r = this.container.querySelectorAll("." + i + ".is-active"), a = 0; a < r.length; a++) {
          t = r[a].querySelector("." + s), requestAnimationFrame(function () {
            t.style.height = "auto", e = t.offsetHeight, requestAnimationFrame(function () {
              t.style.height = e + "px";
            });
          });
        }
      },
      clickHandler: function clickHandler(e) {
        this.callSpecificElement(e);
      },
      keydownHandler: function keydownHandler(e) {
        13 === e.keyCode && this.callSpecificElement(e);
      }
    };
    this.attachEvents = function () {
      var e = t;
      e.clickHandler = e.clickHandler.bind(e), e.keydownHandler = e.keydownHandler.bind(e), e.resizeHandler = e.resizeHandler.bind(e), e.container.addEventListener("click", e.clickHandler), e.container.addEventListener("keydown", e.keydownHandler), i.addEventListener("resize", e.resizeHandler);
    }, this.detachEvents = function () {
      var e = t;
      e.container.removeEventListener("click", e.clickHandler), e.container.removeEventListener("keydown", e.keydownHandler), i.removeEventListener("resize", e.resizeHandler);
    };

    var a = function a(e) {
      return "string" == typeof document.documentElement.style[e] ? e : (e = n(e), e = "webkit".concat(e));
    },
        n = function n(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    },
        h = function h(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    };

    i.requestAnimationFrame = i.requestAnimationFrame || i.webkitRequestAnimationFrame || function (e) {
      i.setTimeout(e, 1e3 / 60);
    }, t.init();
  }

  var s = 0;
   true && void 0 !== module.exports ? module.exports = u : i.Accordion = u;
}(window);

/***/ }),

/***/ "./node_modules/enquire-js/main.js":
/*!*****************************************!*\
  !*** ./node_modules/enquire-js/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enquireScreen = enquireScreen;
exports.unenquireScreen = unenquireScreen;
var enquireJs = void 0;

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquireJs = __webpack_require__(/*! enquire.js */ "./node_modules/enquire.js/src/index.js");
}

var mobileQuery = 'only screen and (max-width: 767.99px)';

function enquireScreen(cb) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mobileQuery;

  if (!enquireJs) {
    return;
  }

  var handler = {
    match: function match() {
      cb && cb(true);
    },
    unmatch: function unmatch() {
      cb && cb();
    }
  };
  enquireJs.register(query, handler);
  return handler;
}

function unenquireScreen(handler) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mobileQuery;

  if (!enquireJs) {
    return;
  }

  enquireJs.unregister(query, handler);
}

exports["default"] = enquireJs;

/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
/*!***************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQuery.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(/*! ./QueryHandler */ "./node_modules/enquire.js/src/QueryHandler.js");

var each = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js").each;
/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */


function MediaQuery(query, isUnconditional) {
  this.query = query;
  this.isUnconditional = isUnconditional;
  this.handlers = [];
  this.mql = window.matchMedia(query);
  var self = this;

  this.listener = function (mql) {
    // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
    self.mql = mql.currentTarget || mql;
    self.assess();
  };

  this.mql.addListener(this.listener);
}

MediaQuery.prototype = {
  constuctor: MediaQuery,

  /**
   * add a handler for this query, triggering if already active
   *
   * @param {object} handler
   * @param {function} handler.match callback for when query is activated
   * @param {function} [handler.unmatch] callback for when query is deactivated
   * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
   * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
   */
  addHandler: function addHandler(handler) {
    var qh = new QueryHandler(handler);
    this.handlers.push(qh);
    this.matches() && qh.on();
  },

  /**
   * removes the given handler from the collection, and calls it's destroy methods
   *
   * @param {object || function} handler the handler to remove
   */
  removeHandler: function removeHandler(handler) {
    var handlers = this.handlers;
    each(handlers, function (h, i) {
      if (h.equals(handler)) {
        h.destroy();
        return !handlers.splice(i, 1); //remove from array and exit each early
      }
    });
  },

  /**
   * Determine whether the media query should be considered a match
   *
   * @return {Boolean} true if media query can be considered a match, false otherwise
   */
  matches: function matches() {
    return this.mql.matches || this.isUnconditional;
  },

  /**
   * Clears all handlers and unbinds events
   */
  clear: function clear() {
    each(this.handlers, function (handler) {
      handler.destroy();
    });
    this.mql.removeListener(this.listener);
    this.handlers.length = 0; //clear array
  },

  /*
      * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
      */
  assess: function assess() {
    var action = this.matches() ? 'on' : 'off';
    each(this.handlers, function (handler) {
      handler[action]();
    });
  }
};
module.exports = MediaQuery;

/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQueryDispatch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(/*! ./MediaQuery */ "./node_modules/enquire.js/src/MediaQuery.js");

var Util = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js");

var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;
/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */

function MediaQueryDispatch() {
  if (!window.matchMedia) {
    throw new Error('matchMedia not present, legacy browsers require a polyfill');
  }

  this.queries = {};
  this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {
  constructor: MediaQueryDispatch,

  /**
   * Registers a handler for the given media query
   *
   * @param {string} q the media query
   * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
   * @param {function} options.match fired when query matched
   * @param {function} [options.unmatch] fired when a query is no longer matched
   * @param {function} [options.setup] fired when handler first triggered
   * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
   * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
   */
  register: function register(q, options, shouldDegrade) {
    var queries = this.queries,
        isUnconditional = shouldDegrade && this.browserIsIncapable;

    if (!queries[q]) {
      queries[q] = new MediaQuery(q, isUnconditional);
    } //normalise to object in an array


    if (isFunction(options)) {
      options = {
        match: options
      };
    }

    if (!isArray(options)) {
      options = [options];
    }

    each(options, function (handler) {
      if (isFunction(handler)) {
        handler = {
          match: handler
        };
      }

      queries[q].addHandler(handler);
    });
    return this;
  },

  /**
   * unregisters a query and all it's handlers, or a specific handler for a query
   *
   * @param {string} q the media query to target
   * @param {object || function} [handler] specific handler to unregister
   */
  unregister: function unregister(q, handler) {
    var query = this.queries[q];

    if (query) {
      if (handler) {
        query.removeHandler(handler);
      } else {
        query.clear();
        delete this.queries[q];
      }
    }

    return this;
  }
};
module.exports = MediaQueryDispatch;

/***/ }),

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/enquire.js/src/QueryHandler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
  this.options = options;
  !options.deferSetup && this.setup();
}

QueryHandler.prototype = {
  constructor: QueryHandler,

  /**
   * coordinates setup of the handler
   *
   * @function
   */
  setup: function setup() {
    if (this.options.setup) {
      this.options.setup();
    }

    this.initialised = true;
  },

  /**
   * coordinates setup and triggering of the handler
   *
   * @function
   */
  on: function on() {
    !this.initialised && this.setup();
    this.options.match && this.options.match();
  },

  /**
   * coordinates the unmatch event for the handler
   *
   * @function
   */
  off: function off() {
    this.options.unmatch && this.options.unmatch();
  },

  /**
   * called when a handler is to be destroyed.
   * delegates to the destroy or unmatch callbacks, depending on availability.
   *
   * @function
   */
  destroy: function destroy() {
    this.options.destroy ? this.options.destroy() : this.off();
  },

  /**
   * determines equality by reference.
   * if object is supplied compare options, if function, compare match callback
   *
   * @function
   * @param {object || function} [target] the target for comparison
   */
  equals: function equals(target) {
    return this.options === target || this.options.match === target;
  }
};
module.exports = QueryHandler;

/***/ }),

/***/ "./node_modules/enquire.js/src/Util.js":
/*!*********************************************!*\
  !*** ./node_modules/enquire.js/src/Util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
  var i = 0,
      length = collection.length,
      cont;

  for (i; i < length; i++) {
    cont = fn(collection[i], i);

    if (cont === false) {
      break; //allow early exit
    }
  }
}
/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */


function isArray(target) {
  return Object.prototype.toString.apply(target) === '[object Array]';
}
/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */


function isFunction(target) {
  return typeof target === 'function';
}

module.exports = {
  isFunction: isFunction,
  isArray: isArray,
  each: each
};

/***/ }),

/***/ "./node_modules/enquire.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/enquire.js/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(/*! ./MediaQueryDispatch */ "./node_modules/enquire.js/src/MediaQueryDispatch.js");

module.exports = new MediaQueryDispatch();

/***/ }),

/***/ "./node_modules/lax.js/lib/lax.min.js":
/*!********************************************!*\
  !*** ./node_modules/lax.js/lib/lax.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(t, a) {
  return _arrayWithHoles(t) || _iterableToArrayLimit(t, a) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(t, a) {
  var n = [],
      e = !0,
      r = !1,
      o = void 0;

  try {
    for (var l, i = t[Symbol.iterator](); !(e = (l = i.next()).done) && (n.push(l.value), !a || n.length !== a); e = !0) {
      ;
    }
  } catch (t) {
    r = !0, o = t;
  } finally {
    try {
      e || null == i["return"] || i["return"]();
    } finally {
      if (r) throw o;
    }
  }

  return n;
}

function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}

!function () {
  var lax = function () {
    for (var lax = {
      elements: []
    }, lastY = 0, currentBreakpoint = "default", breakpointsSeparator = "_", transformFns = {
      "data-lax-opacity": function dataLaxOpacity(t, a) {
        t.opacity = a;
      },
      "data-lax-translate": function dataLaxTranslate(t, a) {
        t.transform += " translate(".concat(a, "px, ").concat(a, "px)");
      },
      "data-lax-translate-x": function dataLaxTranslateX(t, a) {
        t.transform += " translateX(".concat(a, "px)");
      },
      "data-lax-translate-y": function dataLaxTranslateY(t, a) {
        t.transform += " translateY(".concat(a, "px)");
      },
      "data-lax-scale": function dataLaxScale(t, a) {
        t.transform += " scale(".concat(a, ")");
      },
      "data-lax-scale-x": function dataLaxScaleX(t, a) {
        t.transform += " scaleX(".concat(a, ")");
      },
      "data-lax-scale-y": function dataLaxScaleY(t, a) {
        t.transform += " scaleY(".concat(a, ")");
      },
      "data-lax-skew": function dataLaxSkew(t, a) {
        t.transform += " skew(".concat(a, "deg, ").concat(a, "deg)");
      },
      "data-lax-skew-x": function dataLaxSkewX(t, a) {
        t.transform += " skewX(".concat(a, "deg)");
      },
      "data-lax-skew-y": function dataLaxSkewY(t, a) {
        t.transform += " skewY(".concat(a, "deg)");
      },
      "data-lax-rotate": function dataLaxRotate(t, a) {
        t.transform += " rotate(".concat(a, "deg)");
      },
      "data-lax-rotate-x": function dataLaxRotateX(t, a) {
        t.transform += " rotateX(".concat(a, "deg)");
      },
      "data-lax-rotate-y": function dataLaxRotateY(t, a) {
        t.transform += " rotateY(".concat(a, "deg)");
      },
      "data-lax-brightness": function dataLaxBrightness(t, a) {
        t.filter += " brightness(".concat(a, "%)");
      },
      "data-lax-contrast": function dataLaxContrast(t, a) {
        t.filter += " contrast(".concat(a, "%)");
      },
      "data-lax-hue-rotate": function dataLaxHueRotate(t, a) {
        t.filter += " hue-rotate(".concat(a, "deg)");
      },
      "data-lax-blur": function dataLaxBlur(t, a) {
        t.filter += " blur(".concat(a, "px)");
      },
      "data-lax-invert": function dataLaxInvert(t, a) {
        t.filter += "  invert(".concat(a, "%)");
      },
      "data-lax-saturate": function dataLaxSaturate(t, a) {
        t.filter += "  saturate(".concat(a, "%)");
      },
      "data-lax-grayscale": function dataLaxGrayscale(t, a) {
        t.filter += "  grayscale(".concat(a, "%)");
      },
      "data-lax-bg-pos": function dataLaxBgPos(t, a) {
        t.backgroundPosition = "".concat(a, "px ").concat(a, "px");
      },
      "data-lax-bg-pos-x": function dataLaxBgPosX(t, a) {
        t.backgroundPositionX = "".concat(a, "px");
      },
      "data-lax-bg-pos-y": function dataLaxBgPosY(t, a) {
        t.backgroundPositionY = "".concat(a, "px");
      }
    }, _crazy = "", i = 0; i < 20; i++) {
      _crazy += " " + 5 * i + " " + 47 * i % 360 + ", ";
    }

    function intrp(t, a) {
      for (var n = 0; t[n][0] <= a && void 0 !== t[n + 1];) {
        n += 1;
      }

      var e = t[n][0],
          r = void 0 === t[n - 1] ? e : t[n - 1][0],
          o = t[n][1],
          l = void 0 === t[n - 1] ? o : t[n - 1][1];
      return Math.min(Math.max((a - r) / (e - r), 0), 1) * (o - l) + l;
    }

    function fnOrVal(s) {
      return "(" === s[0] ? eval(s) : parseFloat(s);
    }

    return lax.presets = {
      linger: function linger(t) {
        return {
          "data-lax-translate-y": "(vh*0.7) 0, 0 200, -500 0"
        };
      },
      lazy: function lazy(t) {
        return {
          "data-lax-translate-y": "(vh) 0, (-elh) ".concat(0 < arguments.length && void 0 !== t ? t : 100)
        };
      },
      eager: function eager(t) {
        return {
          "data-lax-translate-y": "(vh) 0, (-elh) -".concat(0 < arguments.length && void 0 !== t ? t : 100)
        };
      },
      slalom: function slalom(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 50;
        return {
          "data-lax-translate-x": "vh ".concat(a, ", (vh*0.8) ").concat(-a, ", (vh*0.6) ").concat(a, ", (vh*0.4) ").concat(-a, ", (vh*0.2) ").concat(a, ", (vh*0) ").concat(-a, ", (-elh) ").concat(a)
        };
      },
      crazy: function crazy(t) {
        return {
          "data-lax-hue-rotate": "".concat(_crazy, " | loop=20")
        };
      },
      spin: function spin(t) {
        return {
          "data-lax-rotate": "(vh) 0, (-elh) ".concat(0 < arguments.length && void 0 !== t ? t : 360)
        };
      },
      spinRev: function spinRev(t) {
        return {
          "data-lax-rotate": "(vh) 0, (-elh) ".concat(-(0 < arguments.length && void 0 !== t ? t : 360))
        };
      },
      spinIn: function spinIn(t) {
        return {
          "data-lax-rotate": "vh ".concat(0 < arguments.length && void 0 !== t ? t : 360, ", (vh*0.5) 0")
        };
      },
      spinOut: function spinOut(t) {
        return {
          "data-lax-rotate": "(vh*0.5) 0, -elh ".concat(0 < arguments.length && void 0 !== t ? t : 360)
        };
      },
      blurInOut: function blurInOut(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 40;
        return {
          "data-lax-blur": "(vh) ".concat(a, ", (vh*0.8) 0, (vh*0.2) 0, 0 ").concat(a)
        };
      },
      blurIn: function blurIn(t) {
        return {
          "data-lax-blur": "(vh) ".concat(0 < arguments.length && void 0 !== t ? t : 40, ", (vh*0.7) 0")
        };
      },
      blurOut: function blurOut(t) {
        return {
          "data-lax-blur": "(vh*0.3) 0, 0 ".concat(0 < arguments.length && void 0 !== t ? t : 40)
        };
      },
      fadeInOut: function fadeInOut() {
        return {
          "data-lax-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0"
        };
      },
      fadeIn: function fadeIn() {
        return {
          "data-lax-opacity": "(vh) 0, (vh*0.7) 1"
        };
      },
      fadeOut: function fadeOut() {
        return {
          "data-lax-opacity": "(vh*0.3) 1, 0 0"
        };
      },
      driftLeft: function driftLeft(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 100;
        return {
          "data-lax-translate-x": "vh ".concat(a, ", -elh ").concat(-a)
        };
      },
      driftRight: function driftRight(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 100;
        return {
          "data-lax-translate-x": "vh ".concat(-a, ", -elh ").concat(a)
        };
      },
      leftToRight: function leftToRight(t) {
        return {
          "data-lax-translate-x": "vh 0, -elh (vw*".concat(0 < arguments.length && void 0 !== t ? t : 1, ")")
        };
      },
      rightToLeft: function rightToLeft(t) {
        return {
          "data-lax-translate-x": "vh 0, -elh (vw*".concat(-(0 < arguments.length && void 0 !== t ? t : 1), ")")
        };
      },
      zoomInOut: function zoomInOut(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : .2;
        return {
          "data-lax-scale": "(vh) ".concat(a, ", (vh*0.8) 1, (vh*0.2) 1, -elh ").concat(a)
        };
      },
      zoomIn: function zoomIn(t) {
        return {
          "data-lax-scale": "(vh) ".concat(0 < arguments.length && void 0 !== t ? t : .2, ", (vh*0.7) 1")
        };
      },
      zoomOut: function zoomOut(t) {
        return {
          "data-lax-scale": "(vh*0.3) 1, -elh ".concat(0 < arguments.length && void 0 !== t ? t : .2)
        };
      },
      speedy: function speedy(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 30;
        return {
          "data-lax-skew-x": "(vh) ".concat(a, ", -elh ").concat(-a)
        };
      },
      swing: function swing(t) {
        var a = 0 < arguments.length && void 0 !== t ? t : 30;
        return {
          "data-lax-skew-y": "(vh) ".concat(a, ", -elh ").concat(-a)
        };
      }
    }, lax.addPreset = function (t, a) {
      lax.presets[t] = a;
    }, lax.setup = function () {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      lax.breakpoints = t.breakpoints || {}, lax.selector = t.selector || ".lax", lax.populateElements();
    }, lax.removeElement = function (a) {
      var t = lax.elements.findIndex(function (t) {
        return t.el = a;
      });
      -1 < t && lax.elements.splice(t, 1);
    }, lax.createLaxObject = function (t) {
      return {
        el: t,
        originalStyle: {
          transform: t.style.transform,
          filter: t.style.filter
        },
        transforms: {}
      };
    }, lax.calcTransforms = function (l) {
      for (var i = l.el, r = [], t = 0; t < i.attributes.length; t++) {
        var a = i.attributes[t];
        -1 < a.name.indexOf("data-lax-preset") && r.push(a);
      }

      for (var n = function n(t) {
        var a = r[t],
            n = a.name.split(breakpointsSeparator),
            o = n[1] ? "".concat(breakpointsSeparator).concat(n[1]) : "";
        a.value.split(" ").forEach(function (t) {
          var a = t.split("-"),
              n = lax.presets[a[0]];

          if (n) {
            var e = n(a[1]);

            for (var r in e) {
              i.setAttribute("".concat(r).concat(o), e[r]);
            }
          } else console.log("lax error: preset ".concat(a[0], " is not defined"));
        });
        var e = i.getAttribute("data-lax-anchor");
        e && "" !== e || i.setAttribute("data-lax-anchor", "self"), i.attributes.removeNamedItem(a.name);
      }, e = 0; e < r.length; e++) {
        n(e);
      }

      if (!(i.attributes["data-lax-use-gpu"] && "false" === i.attributes["data-lax-use-gpu"].value) && (i.style["backface-visibility"] = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i.attributes["data-lax-use-gpu"] && i.attributes.removeNamedItem("data-lax-use-gpu"), l.optimise = !1, i.attributes["data-lax-optimize"] && "true" === i.attributes["data-lax-optimize"].value) {
        l.optimise = !0;
        var o = i.getBoundingClientRect();
        i.setAttribute("data-lax-opacity", "".concat(-o.height - 1, " 0, ").concat(-o.height, " 1, ").concat(window.innerHeight, " 1, ").concat(window.innerHeight + 1, " 0")), i.attributes.removeNamedItem("data-lax-optimize");
      }

      for (var c = 0; c < i.attributes.length; c++) {
        var s = i.attributes[c];

        if (!(s.name.indexOf("data-lax") < 0)) {
          var u = s.name.split(breakpointsSeparator),
              f = u[0].split("-"),
              d = u[1] || "default";
          if ("lax" === f[1]) if ("data-lax-anchor" === s.name) {
            l["data-lax-anchor"] = "self" === s.value ? i : document.querySelector(s.value);
            var x = l["data-lax-anchor"].getBoundingClientRect();
            l.anchorTop = Math.floor(x.top) + window.scrollY;
          } else !function () {
            var t = _slicedToArray(s.value.replace(/vw/g, window.innerWidth).replace(/vh/g, window.innerHeight).replace(/elh/g, i.clientHeight).replace(/elw/g, i.clientWidth).replace(/\s+/g, " ").split("|"), 2),
                a = t[0],
                n = t[1],
                r = {};

            n && n.split(" ").forEach(function (t) {
              var a = _slicedToArray(t.split("="), 2),
                  n = a[0],
                  e = a[1];

              r[n] = n && fnOrVal(e);
            });
            var e = u[0],
                o = a.split(",").map(function (t) {
              return t.trim().split(" ").map(fnOrVal);
            }).sort(function (t, a) {
              return t[0] - a[0];
            });
            l.transforms[e] || (l.transforms[e] = {}), l.transforms[e][d] = {
              valueMap: o,
              options: r
            };
          }();
        }
      }

      var v = i.attributes["data-lax-sprite-data"] && i.attributes["data-lax-sprite-data"].value;

      if (v) {
        l.spriteData = v.split(",").map(function (t) {
          return parseInt(t);
        }), i.style.height = l.spriteData[1] + "px", i.style.width = l.spriteData[0] + "px";
        var p = i.attributes["data-lax-sprite-image"] && i.attributes["data-lax-sprite-image"].value;
        p && (i.style.backgroundImage = "url(".concat(p, ")"));
      }

      return l;
    }, lax.addElement = function (t) {
      var a = lax.calcTransforms(lax.createLaxObject(t));
      lax.elements.push(a), lax.updateElement(a);
    }, lax.populateElements = function () {
      lax.elements = [], document.querySelectorAll(lax.selector).forEach(lax.addElement), currentBreakpoint = lax.getCurrentBreakPoint();
    }, lax.updateElements = function () {
      lax.elements.forEach(function (t) {
        lax.calcTransforms(t), lax.updateElement(t);
      }), currentBreakpoint = lax.getCurrentBreakPoint();
    }, lax.getCurrentBreakPoint = function () {
      var t = "default",
          a = window.innerWidth;

      for (var n in lax.breakpoints) {
        if (!(parseFloat(lax.breakpoints[n]) <= a)) break;
        t = n;
      }

      return t;
    }, lax.updateElement = function (t) {
      var a = t.originalStyle,
          n = t.anchorTop,
          e = t.transforms,
          r = t.spriteData,
          o = t.el,
          l = n ? n - lastY : lastY,
          i = {
        transform: a.transform,
        filter: a.filter
      };

      for (var c in e) {
        var s = e[c][currentBreakpoint] || e[c]["default"];

        if (s) {
          var u = l;
          s.options.offset && (u += s.options.offset), s.options.speed && (u *= s.options.speed), s.options.loop && (u %= s.options.loop);
          var f = transformFns[c],
              d = intrp(s.valueMap, u);
          f && f(i, d);
        }
      }

      if (r) {
        var x = _slicedToArray(r, 5),
            v = x[0],
            p = x[1],
            h = x[2],
            m = x[3],
            g = x[4],
            b = Math.floor(lastY / g) % h,
            y = b % m,
            k = Math.floor(b / m);

        i.backgroundPosition = "-".concat(y * v, "px -").concat(k * p, "px");
      }

      if (0 === i.opacity) o.style.opacity = 0;else for (var w in i) {
        o.style[w] = i[w];
      }
    }, lax.update = function (t) {
      lastY !== t && (lastY = t, lax.elements.forEach(lax.updateElement));
    }, lax;
  }();

   true && void 0 !== module.exports ? module.exports = lax : window.lax = lax;
}();

/***/ }),

/***/ "./node_modules/lazyload/lazyload.js":
/*!*******************************************!*\
  !*** ./node_modules/lazyload/lazyload.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    module.exports = factory(root);
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {
  "use strict";

  if (true) {
    root = window;
  }

  var defaults = {
    src: "data-src",
    srcset: "data-srcset",
    selector: ".lazyload",
    root: null,
    rootMargin: "0px",
    threshold: 0
  };
  /**
  * Merge two or more objects. Returns a new object.
  * @private
  * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
  * @param {Object}   objects  The objects to merge together
  * @returns {Object}          Merged values of defaults and options
  */

  var extend = function extend() {
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;
    /* Check if a deep merge */

    if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
      deep = arguments[0];
      i++;
    }
    /* Merge the object into the extended object */


    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          /* If deep merge and property is an object, merge properties */
          if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    /* Loop through each object and conduct a merge */


    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  };

  function LazyLoad(images, options) {
    this.settings = extend(defaults, options || {});
    this.images = images || document.querySelectorAll(this.settings.selector);
    this.observer = null;
    this.init();
  }

  LazyLoad.prototype = {
    init: function init() {
      /* Without observers load everything and bail out early. */
      if (!root.IntersectionObserver) {
        this.loadImages();
        return;
      }

      var self = this;
      var observerConfig = {
        root: this.settings.root,
        rootMargin: this.settings.rootMargin,
        threshold: [this.settings.threshold]
      };
      this.observer = new IntersectionObserver(function (entries) {
        Array.prototype.forEach.call(entries, function (entry) {
          if (entry.isIntersecting) {
            self.observer.unobserve(entry.target);
            var src = entry.target.getAttribute(self.settings.src);
            var srcset = entry.target.getAttribute(self.settings.srcset);

            if ("img" === entry.target.tagName.toLowerCase()) {
              if (src) {
                entry.target.src = src;
              }

              if (srcset) {
                entry.target.srcset = srcset;
              }
            } else {
              entry.target.style.backgroundImage = "url(" + src + ")";
            }
          }
        });
      }, observerConfig);
      Array.prototype.forEach.call(this.images, function (image) {
        self.observer.observe(image);
      });
    },
    loadAndDestroy: function loadAndDestroy() {
      if (!this.settings) {
        return;
      }

      this.loadImages();
      this.destroy();
    },
    loadImages: function loadImages() {
      if (!this.settings) {
        return;
      }

      var self = this;
      Array.prototype.forEach.call(this.images, function (image) {
        var src = image.getAttribute(self.settings.src);
        var srcset = image.getAttribute(self.settings.srcset);

        if ("img" === image.tagName.toLowerCase()) {
          if (src) {
            image.src = src;
          }

          if (srcset) {
            image.srcset = srcset;
          }
        } else {
          image.style.backgroundImage = "url('" + src + "')";
        }
      });
    },
    destroy: function destroy() {
      if (!this.settings) {
        return;
      }

      this.observer.disconnect();
      this.settings = null;
    }
  };

  root.lazyload = function (images, options) {
    return new LazyLoad(images, options);
  };

  if (root.jQuery) {
    var $ = root.jQuery;

    $.fn.lazyload = function (options) {
      options = options || {};
      options.attribute = options.attribute || "data-src";
      new LazyLoad($.makeArray(this), options);
      return this;
    };
  }

  return LazyLoad;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var MicroModal = function () {
  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal = /*#__PURE__*/function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
          _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
          awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

      _classCallCheck(this, Modal); // Save a reference of the modal


      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode: debugMode,
        disableScroll: disableScroll,
        openTrigger: openTrigger,
        closeTrigger: closeTrigger,
        openClass: openClass,
        onShow: onShow,
        onClose: onClose,
        awaitCloseAnimation: awaitCloseAnimation,
        awaitOpenAnimation: awaitOpenAnimation,
        disableFocus: disableFocus
      }; // Register click events only if pre binding eventListeners

      if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    _createClass(Modal, [{
      key: "registerTriggers",
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.filter(Boolean).forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            return _this.showModal(event);
          });
        });
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var _this2 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add(this.config.openClass);
        this.scrollBehaviour('disable');
        this.addEventListeners();

        if (this.config.awaitOpenAnimation) {
          var handler = function handler() {
            _this2.modal.removeEventListener('animationend', handler, false);

            _this2.setFocusToFirstNode();
          };

          this.modal.addEventListener('animationend', handler, false);
        } else {
          this.setFocusToFirstNode();
        }

        this.config.onShow(this.modal, this.activeElement, event);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');

        if (this.activeElement && this.activeElement.focus) {
          this.activeElement.focus();
        }

        this.config.onClose(this.modal, this.activeElement, event);

        if (this.config.awaitCloseAnimation) {
          var openClass = this.config.openClass; // <- old school ftw

          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove(openClass);
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove(this.config.openClass);
        }
      }
    }, {
      key: "closeModalById",
      value: function closeModalById(targetModal) {
        this.modal = document.getElementById(targetModal);
        if (this.modal) this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');

        switch (toggle) {
          case 'enable':
            Object.assign(body.style, {
              overflow: ''
            });
            break;

          case 'disable':
            Object.assign(body.style, {
              overflow: 'hidden'
            });
            break;
        }
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal(event);
        }
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event); // esc

        if (event.keyCode === 9) this.retainFocus(event); // tab
      }
    }, {
      key: "getFocusableNodes",
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Array.apply(void 0, _toConsumableArray(nodes));
      }
      /**
       * Tries to set focus on a node which is not a close trigger
       * if no other nodes exist then focuses on first close trigger
       */

    }, {
      key: "setFocusToFirstNode",
      value: function setFocusToFirstNode() {
        var _this3 = this;

        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return; // remove nodes on whose click, the modal closes
        // could not think of a better name :(

        var nodesWhichAreNotCloseTargets = focusableNodes.filter(function (node) {
          return !node.hasAttribute(_this3.config.closeTrigger);
        });
        if (nodesWhichAreNotCloseTargets.length > 0) nodesWhichAreNotCloseTargets[0].focus();
        if (nodesWhichAreNotCloseTargets.length === 0) focusableNodes[0].focus();
      }
    }, {
      key: "retainFocus",
      value: function retainFocus(event) {
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return;
        /**
         * Filters nodes which are hidden to prevent
         * focus leak outside modal
         */

        focusableNodes = focusableNodes.filter(function (node) {
          return node.offsetParent !== null;
        }); // if disableFocus is true

        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);

    return Modal;
  }();
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  var activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];
    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) {
      validateModalPresence(id);
    }

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


    var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = _toConsumableArray(value);
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // clear events in case previous modal wasn't close

    if (activeModal) activeModal.removeEventListeners(); // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  var close = function close(targetModal) {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init: init,
    show: show,
    close: close
  };
}();

window.MicroModal = MicroModal;
/* harmony default export */ __webpack_exports__["default"] = (MicroModal);

/***/ }),

/***/ "./node_modules/siema/dist/siema.min.js":
/*!**********************************************!*\
  !*** ./node_modules/siema/dist/siema.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    function t(r) {
      if (i[r]) return i[r].exports;
      var n = i[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
    }

    var i = {};
    return t.m = e, t.c = i, t.d = function (e, i, r) {
      t.o(e, i) || Object.defineProperty(e, i, {
        configurable: !1,
        enumerable: !0,
        get: r
      });
    }, t.n = function (e) {
      var i = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return t.d(i, "a", i), i;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 0);
  }([function (e, t, i) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        s = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      return function (t, i, r) {
        return i && e(t.prototype, i), r && e(t, r), t;
      };
    }(),
        l = function () {
      function e(t) {
        var i = this;
        if (r(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭");
        this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function (e) {
          i[e] = i[e].bind(i);
        }), this.init();
      }

      return s(e, [{
        key: "attachEvents",
        value: function value() {
          window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = {
            startX: 0,
            endX: 0,
            startY: 0,
            letItGo: null,
            preventClick: !1
          }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler));
        }
      }, {
        key: "detachEvents",
        value: function value() {
          window.removeEventListener("resize", this.resizeHandler), this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler);
        }
      }, {
        key: "init",
        value: function value() {
          this.attachEvents(), this.selector.style.overflow = "hidden", this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this);
        }
      }, {
        key: "buildSliderFrame",
        value: function value() {
          var e = this.selectorWidth / this.perPage,
              t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
          this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = e * t + "px", this.enableTransition(), this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
          var i = document.createDocumentFragment();
          if (this.config.loop) for (var r = this.innerElements.length - this.perPage; r < this.innerElements.length; r++) {
            var n = this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));
            i.appendChild(n);
          }

          for (var s = 0; s < this.innerElements.length; s++) {
            var l = this.buildSliderFrameItem(this.innerElements[s]);
            i.appendChild(l);
          }

          if (this.config.loop) for (var o = 0; o < this.perPage; o++) {
            var a = this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));
            i.appendChild(a);
          }
          this.sliderFrame.appendChild(i), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
        }
      }, {
        key: "buildSliderFrameItem",
        value: function value(e) {
          var t = document.createElement("div");
          return t.style.cssFloat = this.config.rtl ? "right" : "left", t.style["float"] = this.config.rtl ? "right" : "left", t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%", t.appendChild(e), t;
        }
      }, {
        key: "resolveSlidesNumber",
        value: function value() {
          if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;else if ("object" === n(this.config.perPage)) {
            this.perPage = 1;

            for (var e in this.config.perPage) {
              window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
            }
          }
        }
      }, {
        key: "prev",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1];

          if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;

            if (this.config.loop) {
              if (this.currentSlide - e < 0) {
                this.disableTransition();
                var r = this.currentSlide + this.innerElements.length,
                    n = this.perPage,
                    s = r + n,
                    l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                    o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r - e;
              } else this.currentSlide = this.currentSlide - e;
            } else this.currentSlide = Math.max(this.currentSlide - e, 0);

            i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
          }
        }
      }, {
        key: "next",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1];

          if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;

            if (this.config.loop) {
              if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                this.disableTransition();
                var r = this.currentSlide - this.innerElements.length,
                    n = this.perPage,
                    s = r + n,
                    l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                    o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r + e;
              } else this.currentSlide = this.currentSlide + e;
            } else this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);

            i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
          }
        }
      }, {
        key: "disableTransition",
        value: function value() {
          this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
        }
      }, {
        key: "enableTransition",
        value: function value() {
          this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing;
        }
      }, {
        key: "goTo",
        value: function value(e, t) {
          if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;
            this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
          }
        }
      }, {
        key: "slideToCurrent",
        value: function value(e) {
          var t = this,
              i = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
              r = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage);
          e ? requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              t.enableTransition(), t.sliderFrame.style[t.transformProperty] = "translate3d(" + r + "px, 0, 0)";
            });
          }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + r + "px, 0, 0)";
        }
      }, {
        key: "updateAfterDrag",
        value: function value() {
          var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX),
              t = Math.abs(e),
              i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1,
              r = e > 0 && this.currentSlide - i < 0,
              n = e < 0 && this.currentSlide + i > this.innerElements.length - this.perPage;
          e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent(r || n);
        }
      }, {
        key: "resizeHandler",
        value: function value() {
          this.resolveSlidesNumber(), this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage), this.selectorWidth = this.selector.offsetWidth, this.buildSliderFrame();
        }
      }, {
        key: "clearDrag",
        value: function value() {
          this.drag = {
            startX: 0,
            endX: 0,
            startY: 0,
            letItGo: null,
            preventClick: this.drag.preventClick
          };
        }
      }, {
        key: "touchstartHandler",
        value: function value(e) {
          -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY);
        }
      }, {
        key: "touchendHandler",
        value: function value(e) {
          e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
        }
      }, {
        key: "touchmoveHandler",
        value: function value(e) {
          if (e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo) {
            e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
            var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                i = t * (this.selectorWidth / this.perPage),
                r = this.drag.endX - this.drag.startX,
                n = this.config.rtl ? i + r : i - r;
            this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
          }
        }
      }, {
        key: "mousedownHandler",
        value: function value(e) {
          -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX);
        }
      }, {
        key: "mouseupHandler",
        value: function value(e) {
          e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
        }
      }, {
        key: "mousemoveHandler",
        value: function value(e) {
          if (e.preventDefault(), this.pointerDown) {
            "A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
            var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                i = t * (this.selectorWidth / this.perPage),
                r = this.drag.endX - this.drag.startX,
                n = this.config.rtl ? i + r : i - r;
            this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
          }
        }
      }, {
        key: "mouseleaveHandler",
        value: function value(e) {
          this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag());
        }
      }, {
        key: "clickHandler",
        value: function value(e) {
          this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1;
        }
      }, {
        key: "remove",
        value: function value(e, t) {
          if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
          var i = e < this.currentSlide,
              r = this.currentSlide + this.perPage - 1 === e;
          (i || r) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this);
        }
      }, {
        key: "insert",
        value: function value(e, t, i) {
          if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
          if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");
          var r = t <= this.currentSlide > 0 && this.innerElements.length;
          this.currentSlide = r ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), i && i.call(this);
        }
      }, {
        key: "prepend",
        value: function value(e, t) {
          this.insert(e, 0), t && t.call(this);
        }
      }, {
        key: "append",
        value: function value(e, t) {
          this.insert(e, this.innerElements.length + 1), t && t.call(this);
        }
      }, {
        key: "destroy",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments[1];

          if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
            for (var i = document.createDocumentFragment(), r = 0; r < this.innerElements.length; r++) {
              i.appendChild(this.innerElements[r]);
            }

            this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
          }

          t && t.call(this);
        }
      }], [{
        key: "mergeSettings",
        value: function value(e) {
          var t = {
            selector: ".siema",
            duration: 200,
            easing: "ease-out",
            perPage: 1,
            startIndex: 0,
            draggable: !0,
            multipleDrag: !0,
            threshold: 20,
            loop: !1,
            rtl: !1,
            onInit: function onInit() {},
            onChange: function onChange() {}
          },
              i = e;

          for (var r in i) {
            t[r] = i[r];
          }

          return t;
        }
      }, {
        key: "webkitOrNot",
        value: function value() {
          return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
        }
      }]), e;
    }();

    t["default"] = l, e.exports = t["default"];
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/assets/js/function.accordion.js":
/*!*********************************************!*\
  !*** ./src/assets/js/function.accordion.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);

var targetedClass = '.accordion-container';
var accordionElement = document.querySelectorAll(targetedClass);

if (accordionElement.length > 0) {
  new accordion_js__WEBPACK_IMPORTED_MODULE_0___default.a(targetedClass);
}

/***/ }),

/***/ "./src/assets/js/function.bodyclasses.js":
/*!***********************************************!*\
  !*** ./src/assets/js/function.bodyclasses.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enquire-js */ "./node_modules/enquire-js/main.js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i);

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}

var html = document.querySelector('html');
var mediaQueries = {
  sm: 'screen and (min-width: 0px)',
  mob: 'screen and (min-width: 321px)',
  tab: 'screen and (min-width: 600px)',
  lap: 'screen and (min-width: 1024px)',
  des: 'screen and (min-width: 1280px)',
  lg: 'screen and (min-width: 1440px)',
  xl: 'screen and (min-width: 1680px)',
  landscape: 'screen and (orientation: landscape)',
  potrait: 'screen and (orientation: portrait)'
};
Object.entries(mediaQueries).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      breakpoint = _ref2[0],
      mediaquery = _ref2[1];

  return enquire_js__WEBPACK_IMPORTED_MODULE_0___default.a.register(mediaquery, {
    match: function match() {
      html.classList.add(breakpoint);
    },
    unmatch: function unmatch() {
      html.classList.remove(breakpoint);
    }
  });
});

/***/ }),

/***/ "./src/assets/js/function.lax.js":
/*!***************************************!*\
  !*** ./src/assets/js/function.lax.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lax.js */ "./node_modules/lax.js/lib/lax.min.js");
/* harmony import */ var lax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lax_js__WEBPACK_IMPORTED_MODULE_0__);
 // Lax documentation
// https://github.com/alexfoxy/lax.js?utm_source=xinquji

window.onload = function () {
  lax_js__WEBPACK_IMPORTED_MODULE_0___default.a.setup(); // init

  var updateLax = function updateLax() {
    lax_js__WEBPACK_IMPORTED_MODULE_0___default.a.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

/***/ }),

/***/ "./src/assets/js/function.lazyload.js":
/*!********************************************!*\
  !*** ./src/assets/js/function.lazyload.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazyload */ "./node_modules/lazyload/lazyload.js");
/* harmony import */ var lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazyload__WEBPACK_IMPORTED_MODULE_0__);

new lazyload__WEBPACK_IMPORTED_MODULE_0___default.a();

/***/ }),

/***/ "./src/assets/js/function.modal.js":
/*!*****************************************!*\
  !*** ./src/assets/js/function.modal.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");

micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init({
  onShow: function onShow(modal) {
    return console.info("".concat(modal.id, " is shown"));
  },
  // [1]
  onClose: function onClose(modal) {
    return console.info("".concat(modal.id, " is hidden"));
  },
  // [2]
  openTrigger: 'data-custom-open',
  // [3]
  closeTrigger: 'data-custom-close',
  // [4]
  openClass: 'is-open',
  // [5]
  disableScroll: true,
  // [6]
  disableFocus: false,
  // [7]
  awaitOpenAnimation: false,
  // [8]
  awaitCloseAnimation: false,
  // [9]
  debugMode: true // [10]

});

/***/ }),

/***/ "./src/assets/js/function.offcanvas.js":
/*!*********************************************!*\
  !*** ./src/assets/js/function.offcanvas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menuIcon = document.querySelector('.burger-menu');
var mobimenu = document.querySelector('.responsive-menu');
var sitebody = document.querySelector('body');
var mainmenu = document.querySelector('.responsive-menu');
var className = 'mobimenu';
var verticalMenu = 'vertical__nav';
var mediaQuery = window.matchMedia('(min-width: 1024px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // If the mediaquery is larger than 1024px
    if (mainmenu.classList) {
      mainmenu.classList.remove(className);
      mainmenu.classList.remove(verticalMenu);
      mainmenu.classList.add('mainmenu');
      mainmenu.classList.add('horizontal__nav');
    }
  } else {
    // If the mediaquery is smaller than 1024px
    if (mainmenu.classList) {
      mainmenu.classList.remove('mainmenu');
      mainmenu.classList.remove('horizontal__nav');
      mainmenu.classList.add(className);
      mainmenu.classList.add(verticalMenu);
    } else {
      mainmenu.className += ' ' + className + ' ' + verticalMenu;
    }
  }
} // Register event listener


mediaQuery.addListener(handleTabletChange); // Initial check

handleTabletChange(mediaQuery);
menuIcon.addEventListener('click', function () {
  mobimenu.classList.toggle('change');
  menuIcon.classList.toggle('change');
  sitebody.classList.toggle('mobimenu-is-open');
}); // Create sub menus

function clickedMenu() {
  if (this.querySelector('.mobimenu .sub-menu')) {
    this.classList.toggle('sub-menu-active');
  }
}

document.querySelectorAll('.menu-item-has-children').forEach(function (el) {
  el.addEventListener('click', clickedMenu);
});

/***/ }),

/***/ "./src/assets/js/function.slideshow.js":
/*!*********************************************!*\
  !*** ./src/assets/js/function.slideshow.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! siema */ "./node_modules/siema/dist/siema.min.js");
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(siema__WEBPACK_IMPORTED_MODULE_0__);

var slideshowSelector = document.querySelector('.slideshow');
var previousSlide = document.querySelector('.slide-prev');
var nextSlide = document.querySelector('.slide-next');
var slideshow = "";

if (slideshowSelector) {
  slideshow = new siema__WEBPACK_IMPORTED_MODULE_0___default.a({
    selector: '.slideshow',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: function onInit() {},
    onChange: function onChange() {}
  });
}

if (previousSlide) {
  previousSlide.addEventListener('click', function () {
    return slideshow.prev();
  });
}

if (nextSlide) {
  nextSlide.addEventListener('click', function () {
    return slideshow.next();
  });
} //https://codepen.io/collection/Adpkkd/?cursor=ZD0xJm89MCZwPTEmdj0xMDIyNDU0

/***/ }),

/***/ "./src/assets/js/functions.js":
/*!************************************!*\
  !*** ./src/assets/js/functions.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_bodyclasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function.bodyclasses.js */ "./src/assets/js/function.bodyclasses.js");
/* harmony import */ var _function_slideshow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function.slideshow.js */ "./src/assets/js/function.slideshow.js");
/* harmony import */ var _function_offcanvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function.offcanvas.js */ "./src/assets/js/function.offcanvas.js");
/* harmony import */ var _function_offcanvas_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_function_offcanvas_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _function_lazyload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function.lazyload.js */ "./src/assets/js/function.lazyload.js");
/* harmony import */ var _function_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function.modal.js */ "./src/assets/js/function.modal.js");
/* harmony import */ var _function_accordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function.accordion.js */ "./src/assets/js/function.accordion.js");
/* harmony import */ var _function_lax_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./function.lax.js */ "./src/assets/js/function.lax.js");








/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/assets/js/functions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\myfirsttheme\wp-content\themes\myfirsttheme\src\assets\js\functions.js */"./src/assets/js/functions.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUtanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXguanMvbGliL2xheC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhenlsb2FkL2xhenlsb2FkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taWNyb21vZGFsL2Rpc3QvbWljcm9tb2RhbC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uYm9keWNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5sYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLm1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ub2ZmY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uc2xpZGVzaG93LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbImkiLCJ1IiwibyIsImwiLCJjIiwidCIsImluaXQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtYXAiLCJlIiwib3B0aW9ucyIsImgiLCJkdXJhdGlvbiIsIml0ZW1OdW1iZXIiLCJhcmlhIiwiY2xvc2VPdGhlcnMiLCJzaG93SXRlbSIsImVsZW1lbnRDbGFzcyIsInF1ZXN0aW9uQ2xhc3MiLCJhbnN3ZXJDbGFzcyIsInRhcmdldENsYXNzIiwib25Ub2dnbGUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuIiwic2V0QXR0cmlidXRlIiwicyIsInIiLCJjbGFzc0xpc3QiLCJhZGQiLCJoaWRlRWxlbWVudCIsInNldFRyYW5zaXRpb24iLCJnZW5lcmF0ZUlEIiwic2V0QVJJQSIsImEiLCJ0b2dnbGVFbGVtZW50IiwiYXR0YWNoRXZlbnRzIiwic3R5bGUiLCJjb25jYXQiLCJ1cGRhdGVBUklBIiwiY2FsbFNwZWNpZmljRWxlbWVudCIsInRhcmdldCIsImNvbnRhaW5zIiwiY2xhc3NOYW1lIiwibWF0Y2giLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlQWxsRWxlbWVudHMiLCJoZWlnaHQiLCJhcmd1bWVudHMiLCJzY3JvbGxIZWlnaHQiLCJ0b2dnbGUiLCJwYXJzZUludCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbW92ZSIsInJlc2l6ZUhhbmRsZXIiLCJvZmZzZXRIZWlnaHQiLCJjbGlja0hhbmRsZXIiLCJrZXlkb3duSGFuZGxlciIsImtleUNvZGUiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudEVsZW1lbnQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJBY2NvcmRpb24iLCJ3aW5kb3ciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW5xdWlyZVNjcmVlbiIsInVuZW5xdWlyZVNjcmVlbiIsImVucXVpcmVKcyIsIm1hdGNoTWVkaWFQb2x5ZmlsbCIsIm1lZGlhUXVlcnkiLCJtZWRpYSIsIm1hdGNoZXMiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwibWF0Y2hNZWRpYSIsInJlcXVpcmUiLCJtb2JpbGVRdWVyeSIsImNiIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJoYW5kbGVyIiwidW5tYXRjaCIsInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsIlF1ZXJ5SGFuZGxlciIsImVhY2giLCJNZWRpYVF1ZXJ5IiwiaXNVbmNvbmRpdGlvbmFsIiwiaGFuZGxlcnMiLCJtcWwiLCJzZWxmIiwibGlzdGVuZXIiLCJjdXJyZW50VGFyZ2V0IiwiYXNzZXNzIiwicHJvdG90eXBlIiwiY29uc3R1Y3RvciIsImFkZEhhbmRsZXIiLCJxaCIsInB1c2giLCJvbiIsInJlbW92ZUhhbmRsZXIiLCJlcXVhbHMiLCJkZXN0cm95Iiwic3BsaWNlIiwiY2xlYXIiLCJhY3Rpb24iLCJVdGlsIiwiaXNGdW5jdGlvbiIsIk1lZGlhUXVlcnlEaXNwYXRjaCIsIkVycm9yIiwicXVlcmllcyIsImJyb3dzZXJJc0luY2FwYWJsZSIsImNvbnN0cnVjdG9yIiwicSIsInNob3VsZERlZ3JhZGUiLCJkZWZlclNldHVwIiwic2V0dXAiLCJpbml0aWFsaXNlZCIsIm9mZiIsImNvbGxlY3Rpb24iLCJmbiIsImNvbnQiLCJ0b1N0cmluZyIsImFwcGx5IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsImxheCIsImxhc3RZIiwiY3VycmVudEJyZWFrcG9pbnQiLCJicmVha3BvaW50c1NlcGFyYXRvciIsInRyYW5zZm9ybUZucyIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJmaWx0ZXIiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUG9zaXRpb25YIiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsIl9jcmF6eSIsImludHJwIiwiTWF0aCIsIm1pbiIsIm1heCIsImZuT3JWYWwiLCJldmFsIiwicGFyc2VGbG9hdCIsInByZXNldHMiLCJsaW5nZXIiLCJsYXp5IiwiZWFnZXIiLCJzbGFsb20iLCJjcmF6eSIsInNwaW4iLCJzcGluUmV2Iiwic3BpbkluIiwic3Bpbk91dCIsImJsdXJJbk91dCIsImJsdXJJbiIsImJsdXJPdXQiLCJmYWRlSW5PdXQiLCJmYWRlSW4iLCJmYWRlT3V0IiwiZHJpZnRMZWZ0IiwiZHJpZnRSaWdodCIsImxlZnRUb1JpZ2h0IiwicmlnaHRUb0xlZnQiLCJ6b29tSW5PdXQiLCJ6b29tSW4iLCJ6b29tT3V0Iiwic3BlZWR5Iiwic3dpbmciLCJhZGRQcmVzZXQiLCJicmVha3BvaW50cyIsInNlbGVjdG9yIiwicG9wdWxhdGVFbGVtZW50cyIsInJlbW92ZUVsZW1lbnQiLCJmaW5kSW5kZXgiLCJlbCIsImNyZWF0ZUxheE9iamVjdCIsIm9yaWdpbmFsU3R5bGUiLCJ0cmFuc2Zvcm1zIiwiY2FsY1RyYW5zZm9ybXMiLCJhdHRyaWJ1dGVzIiwibmFtZSIsImluZGV4T2YiLCJzcGxpdCIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlTmFtZWRJdGVtIiwib3B0aW1pc2UiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbm5lckhlaWdodCIsImYiLCJkIiwieCIsImFuY2hvclRvcCIsImZsb29yIiwidG9wIiwic2Nyb2xsWSIsInJlcGxhY2UiLCJpbm5lcldpZHRoIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJ0cmltIiwic29ydCIsInZhbHVlTWFwIiwidiIsInNwcml0ZURhdGEiLCJ3aWR0aCIsInAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGRFbGVtZW50IiwidXBkYXRlRWxlbWVudCIsImdldEN1cnJlbnRCcmVha1BvaW50IiwidXBkYXRlRWxlbWVudHMiLCJvZmZzZXQiLCJzcGVlZCIsImxvb3AiLCJtIiwiZyIsImIiLCJ5IiwiayIsInciLCJ1cGRhdGUiLCJyb290IiwiZmFjdG9yeSIsImRlZmluZSIsImdsb2JhbCIsImRlZmF1bHRzIiwic3JjIiwic3Jjc2V0Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImV4dGVuZCIsImV4dGVuZGVkIiwiZGVlcCIsImNhbGwiLCJtZXJnZSIsIm9iaiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIkxhenlMb2FkIiwiaW1hZ2VzIiwic2V0dGluZ3MiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwibG9hZEltYWdlcyIsIm9ic2VydmVyQ29uZmlnIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJpbWFnZSIsIm9ic2VydmUiLCJsb2FkQW5kRGVzdHJveSIsImRpc2Nvbm5lY3QiLCJsYXp5bG9hZCIsImpRdWVyeSIsIiQiLCJhdHRyaWJ1dGUiLCJtYWtlQXJyYXkiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJpdGVyIiwiZnJvbSIsIm1pbkxlbiIsInRlc3QiLCJsZW4iLCJhcnIyIiwiTWljcm9Nb2RhbCIsIkZPQ1VTQUJMRV9FTEVNRU5UUyIsIk1vZGFsIiwiX3JlZiIsInRhcmdldE1vZGFsIiwiX3JlZiR0cmlnZ2VycyIsInRyaWdnZXJzIiwiX3JlZiRvblNob3ciLCJvblNob3ciLCJfcmVmJG9uQ2xvc2UiLCJvbkNsb3NlIiwiX3JlZiRvcGVuVHJpZ2dlciIsIm9wZW5UcmlnZ2VyIiwiX3JlZiRjbG9zZVRyaWdnZXIiLCJjbG9zZVRyaWdnZXIiLCJfcmVmJG9wZW5DbGFzcyIsIm9wZW5DbGFzcyIsIl9yZWYkZGlzYWJsZVNjcm9sbCIsImRpc2FibGVTY3JvbGwiLCJfcmVmJGRpc2FibGVGb2N1cyIsImRpc2FibGVGb2N1cyIsIl9yZWYkYXdhaXRDbG9zZUFuaW1hdCIsImF3YWl0Q2xvc2VBbmltYXRpb24iLCJfcmVmJGF3YWl0T3BlbkFuaW1hdGkiLCJhd2FpdE9wZW5BbmltYXRpb24iLCJfcmVmJGRlYnVnTW9kZSIsImRlYnVnTW9kZSIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJyZWdpc3RlclRyaWdnZXJzIiwib25DbGljayIsIm9uS2V5ZG93biIsIl90aGlzIiwiX2xlbiIsIl9rZXkiLCJCb29sZWFuIiwidHJpZ2dlciIsImV2ZW50Iiwic2hvd01vZGFsIiwiX3RoaXMyIiwiYWN0aXZlRWxlbWVudCIsInNjcm9sbEJlaGF2aW91ciIsImFkZEV2ZW50TGlzdGVuZXJzIiwic2V0Rm9jdXNUb0ZpcnN0Tm9kZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImZvY3VzIiwiY2xvc2VNb2RhbEJ5SWQiLCJib2R5IiwiYXNzaWduIiwib3ZlcmZsb3ciLCJoYXNBdHRyaWJ1dGUiLCJyZXRhaW5Gb2N1cyIsImdldEZvY3VzYWJsZU5vZGVzIiwibm9kZXMiLCJfdGhpczMiLCJmb2N1c2FibGVOb2RlcyIsIm5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMiLCJub2RlIiwib2Zmc2V0UGFyZW50IiwiZm9jdXNlZEl0ZW1JbmRleCIsInNoaWZ0S2V5IiwiYWN0aXZlTW9kYWwiLCJnZW5lcmF0ZVRyaWdnZXJNYXAiLCJ0cmlnZ2VyQXR0ciIsInRyaWdnZXJNYXAiLCJ2YWxpZGF0ZU1vZGFsUHJlc2VuY2UiLCJpZCIsIndhcm4iLCJ2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSIsInZhbGlkYXRlQXJncyIsInNob3ciLCJjbG9zZSIsImdldCIsIl9fZXNNb2R1bGUiLCJtZXJnZVNldHRpbmdzIiwicmVzb2x2ZVNsaWRlc051bWJlciIsInNlbGVjdG9yV2lkdGgiLCJvZmZzZXRXaWR0aCIsImlubmVyRWxlbWVudHMiLCJjaGlsZHJlbiIsImN1cnJlbnRTbGlkZSIsInN0YXJ0SW5kZXgiLCJwZXJQYWdlIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ3ZWJraXRPck5vdCIsImRyYWdnYWJsZSIsInBvaW50ZXJEb3duIiwiZHJhZyIsInN0YXJ0WCIsImVuZFgiLCJzdGFydFkiLCJsZXRJdEdvIiwicHJldmVudENsaWNrIiwidG91Y2hzdGFydEhhbmRsZXIiLCJ0b3VjaGVuZEhhbmRsZXIiLCJ0b3VjaG1vdmVIYW5kbGVyIiwibW91c2Vkb3duSGFuZGxlciIsIm1vdXNldXBIYW5kbGVyIiwibW91c2VsZWF2ZUhhbmRsZXIiLCJtb3VzZW1vdmVIYW5kbGVyIiwiZGlyZWN0aW9uIiwicnRsIiwiYnVpbGRTbGlkZXJGcmFtZSIsIm9uSW5pdCIsInNsaWRlckZyYW1lIiwiY3JlYXRlRWxlbWVudCIsImVuYWJsZVRyYW5zaXRpb24iLCJjdXJzb3IiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYnVpbGRTbGlkZXJGcmFtZUl0ZW0iLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInNsaWRlVG9DdXJyZW50IiwiY3NzRmxvYXQiLCJkaXNhYmxlVHJhbnNpdGlvbiIsIm9uQ2hhbmdlIiwid2Via2l0VHJhbnNpdGlvbiIsImVhc2luZyIsInRyYW5zaXRpb24iLCJhYnMiLCJtdWx0aXBsZURyYWciLCJjZWlsIiwicHJldiIsIm5vZGVOYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ1cGRhdGVBZnRlckRyYWciLCJjbGVhckRyYWciLCJpbnNlcnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJGdW5jdGlvbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwidGFyZ2V0ZWRDbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJvd25Qcm9wcyIsImtleXMiLCJyZXNBcnJheSIsImh0bWwiLCJtZWRpYVF1ZXJpZXMiLCJzbSIsIm1vYiIsInRhYiIsImxhcCIsImRlcyIsImxnIiwieGwiLCJsYW5kc2NhcGUiLCJwb3RyYWl0IiwiYnJlYWtwb2ludCIsIm1lZGlhcXVlcnkiLCJlbnF1aXJlIiwib25sb2FkIiwidXBkYXRlTGF4IiwiaW5mbyIsIm1lbnVJY29uIiwibW9iaW1lbnUiLCJzaXRlYm9keSIsIm1haW5tZW51IiwidmVydGljYWxNZW51IiwiaGFuZGxlVGFibGV0Q2hhbmdlIiwiY2xpY2tlZE1lbnUiLCJzbGlkZXNob3dTZWxlY3RvciIsInByZXZpb3VzU2xpZGUiLCJuZXh0U2xpZGUiLCJzbGlkZXNob3ciLCJTaWVtYSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENB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LEVBQU47QUFBQSxHQUF4QztBQUNIOztBQUVELElBQUk2QyxTQUFKLEVBQWU7QUFDWEEsV0FBUyxDQUFDbmEsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0M7QUFBQSxXQUFNb2EsU0FBUyxDQUFDbFYsSUFBVixFQUFOO0FBQUEsR0FBcEM7QUFDSCxDLENBRUQsMkU7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohXHJcbiAqIEFjY29yZGlvbiB2Mi44LjBcclxuICogU2ltcGxlIGFjY29yZGlvbiBjcmVhdGVkIGluIHB1cmUgSmF2YXNjcmlwdC5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY2h1MmsvQWNjb3JkaW9uXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE3LTIwMTkgTWljaGHFgiBTdHJ1bXBmXHJcbiAqIFB1Ymxpc2hlZCB1bmRlciBNSVQgTGljZW5zZVxyXG4gKi9cclxuXCJ1c2Ugc3RyaWN0XCI7IWZ1bmN0aW9uKGkpe2Z1bmN0aW9uIHUobyxsKXt2YXIgYz10aGlzLHQ9e2luaXQ6ZnVuY3Rpb24oKXtpZihBcnJheS5pc0FycmF5KG8pKXJldHVybiBvLmxlbmd0aCYmby5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyB1KGUsbCl9KSwhMTt0aGlzLm9wdGlvbnM9aCh7ZHVyYXRpb246NjAwLGl0ZW1OdW1iZXI6MCxhcmlhOiEwLGNsb3NlT3RoZXJzOiEwLHNob3dJdGVtOiExLGVsZW1lbnRDbGFzczpcImFjXCIscXVlc3Rpb25DbGFzczpcImFjLXFcIixhbnN3ZXJDbGFzczpcImFjLWFcIix0YXJnZXRDbGFzczpcImFjLXRhcmdldFwiLG9uVG9nZ2xlOmZ1bmN0aW9uKCl7fX0sbCksdGhpcy5jb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvKSx0aGlzLmVsZW1lbnRzPXRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5vcHRpb25zLmVsZW1lbnRDbGFzcyk7dmFyIGU9dGhpcy5vcHRpb25zLHQ9ZS5hcmlhLG49ZS5zaG93SXRlbSxpPWUuaXRlbU51bWJlcjt0JiZ0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJsaXN0XCIpO2Zvcih2YXIgcz0wO3M8dGhpcy5lbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgcj10aGlzLmVsZW1lbnRzW3NdO3IuY2xhc3NMaXN0LmFkZChcImpzLWVuYWJsZWRcIiksdGhpcy5oaWRlRWxlbWVudChyKSx0aGlzLnNldFRyYW5zaXRpb24ociksdGhpcy5nZW5lcmF0ZUlEKHIpLHQmJnRoaXMuc2V0QVJJQShyKX1pZihuKXt2YXIgYT10aGlzLmVsZW1lbnRzWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiZpPHRoaXMuZWxlbWVudHMubGVuZ3RoJiYoYT10aGlzLmVsZW1lbnRzW2ldKSx0aGlzLnRvZ2dsZUVsZW1lbnQoYSwhMSl9Yy5hdHRhY2hFdmVudHMoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMsbj10LmR1cmF0aW9uLGk9dC5hbnN3ZXJDbGFzcyxzPWUucXVlcnlTZWxlY3RvcihcIi5cIitpKSxyPWEoXCJ0cmFuc2l0aW9uXCIpO3Muc3R5bGVbcl09bitcIm1zXCJ9LGdlbmVyYXRlSUQ6ZnVuY3Rpb24oZSl7ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWMtXCIuY29uY2F0KHMpKSxzKyt9LHNldEFSSUE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLG49dC5xdWVzdGlvbkNsYXNzLGk9dC5hbnN3ZXJDbGFzcyxzPWUucXVlcnlTZWxlY3RvcihcIi5cIituKSxyPWUucXVlcnlTZWxlY3RvcihcIi5cIitpKTtzLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYlwiKSxzLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLHIuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFicGFuZWxcIil9LHVwZGF0ZUFSSUE6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLm9wdGlvbnMucXVlc3Rpb25DbGFzcztlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrbikuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLHQpfSxjYWxsU3BlY2lmaWNFbGVtZW50OmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnRhcmdldCxuPXRoaXMub3B0aW9ucyxpPW4ucXVlc3Rpb25DbGFzcyxzPW4udGFyZ2V0Q2xhc3Mscj1uLmNsb3NlT3RoZXJzLGE9MDthPHRoaXMuZWxlbWVudHMubGVuZ3RoO2ErKylpZih0aGlzLmVsZW1lbnRzW2FdLmNvbnRhaW5zKHQpKXsodC5jbGFzc05hbWUubWF0Y2goaSl8fHQuY2xhc3NOYW1lLm1hdGNoKHMpKSYmKGUucHJldmVudERlZmF1bHQoKSxyJiZ0aGlzLmNsb3NlQWxsRWxlbWVudHMoYSksdGhpcy50b2dnbGVFbGVtZW50KHRoaXMuZWxlbWVudHNbYV0pKTticmVha319LGhpZGVFbGVtZW50OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucy5hbnN3ZXJDbGFzcztlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdCkuc3R5bGUuaGVpZ2h0PTB9LHRvZ2dsZUVsZW1lbnQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPSEoMTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT10KXx8dCxzPXRoaXMub3B0aW9ucyxyPXMuYW5zd2VyQ2xhc3MsYT1zLmFyaWEsbz1zLm9uVG9nZ2xlLGw9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK3IpLGM9bC5zY3JvbGxIZWlnaHQ7ZS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpLGl8fChsLnN0eWxlLmhlaWdodD1cImF1dG9cIiksMDxwYXJzZUludChsLnN0eWxlLmhlaWdodCk/KG49ITEscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7bC5zdHlsZS5oZWlnaHQ9MH0pKToobj0hMCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsLnN0eWxlLmhlaWdodD1jK1wicHhcIn0pKSxhJiZ0aGlzLnVwZGF0ZUFSSUEoZSxuKSxpJiZvKGUsdGhpcy5lbGVtZW50cyl9LGNsb3NlQWxsRWxlbWVudHM6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMub3B0aW9ucy5hcmlhLG49dGhpcy5lbGVtZW50cy5sZW5ndGgsaT0wO2k8bjtpKyspaWYoaSE9ZSl7dmFyIHM9dGhpcy5lbGVtZW50c1tpXTtzLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSYmcy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpLHQmJnRoaXMudXBkYXRlQVJJQShzLCExKSx0aGlzLmhpZGVFbGVtZW50KHMpfX0scmVzaXplSGFuZGxlcjpmdW5jdGlvbigpe2Zvcih2YXIgZSx0LG49dGhpcy5vcHRpb25zLGk9bi5lbGVtZW50Q2xhc3Mscz1uLmFuc3dlckNsYXNzLHI9dGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5cIitpK1wiLmlzLWFjdGl2ZVwiKSxhPTA7YTxyLmxlbmd0aDthKyspdD1yW2FdLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrcykscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5zdHlsZS5oZWlnaHQ9XCJhdXRvXCIsZT10Lm9mZnNldEhlaWdodCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnN0eWxlLmhlaWdodD1lK1wicHhcIn0pfSl9LGNsaWNrSGFuZGxlcjpmdW5jdGlvbihlKXt0aGlzLmNhbGxTcGVjaWZpY0VsZW1lbnQoZSl9LGtleWRvd25IYW5kbGVyOmZ1bmN0aW9uKGUpezEzPT09ZS5rZXlDb2RlJiZ0aGlzLmNhbGxTcGVjaWZpY0VsZW1lbnQoZSl9fTt0aGlzLmF0dGFjaEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXQ7ZS5jbGlja0hhbmRsZXI9ZS5jbGlja0hhbmRsZXIuYmluZChlKSxlLmtleWRvd25IYW5kbGVyPWUua2V5ZG93bkhhbmRsZXIuYmluZChlKSxlLnJlc2l6ZUhhbmRsZXI9ZS5yZXNpemVIYW5kbGVyLmJpbmQoZSksZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZS5rZXlkb3duSGFuZGxlciksaS5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5yZXNpemVIYW5kbGVyKX0sdGhpcy5kZXRhY2hFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10O2UuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUuY2xpY2tIYW5kbGVyKSxlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUua2V5ZG93bkhhbmRsZXIpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGUucmVzaXplSGFuZGxlcil9O3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVbZV0/ZTooZT1uKGUpLGU9XCJ3ZWJraXRcIi5jb25jYXQoZSkpfSxuPWZ1bmN0aW9uKGUpe3JldHVybiBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9LGg9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl07cmV0dXJuIGV9O2kucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxpLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7aS5zZXRUaW1lb3V0KGUsMWUzLzYwKX0sdC5pbml0KCl9dmFyIHM9MDtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZ2b2lkIDAhPT1tb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz11OmkuQWNjb3JkaW9uPXV9KHdpbmRvdyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lbnF1aXJlU2NyZWVuID0gZW5xdWlyZVNjcmVlbjtcbmV4cG9ydHMudW5lbnF1aXJlU2NyZWVuID0gdW5lbnF1aXJlU2NyZWVuO1xudmFyIGVucXVpcmVKcyA9IHZvaWQgMDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgbWF0Y2hNZWRpYVBvbHlmaWxsID0gZnVuY3Rpb24gbWF0Y2hNZWRpYVBvbHlmaWxsKG1lZGlhUXVlcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVkaWE6IG1lZGlhUXVlcnksXG4gICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcigpIHt9LFxuICAgICAgcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge31cbiAgICB9O1xuICB9O1xuICB3aW5kb3cubWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhIHx8IG1hdGNoTWVkaWFQb2x5ZmlsbDtcbiAgZW5xdWlyZUpzID0gcmVxdWlyZSgnZW5xdWlyZS5qcycpO1xufVxuXG52YXIgbW9iaWxlUXVlcnkgPSAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OXB4KSc7XG5cbmZ1bmN0aW9uIGVucXVpcmVTY3JlZW4oY2IpIHtcbiAgdmFyIHF1ZXJ5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBtb2JpbGVRdWVyeTtcblxuICBpZiAoIWVucXVpcmVKcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0ge1xuICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaCgpIHtcbiAgICAgIGNiICYmIGNiKHRydWUpO1xuICAgIH0sXG4gICAgdW5tYXRjaDogZnVuY3Rpb24gdW5tYXRjaCgpIHtcbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfVxuICB9O1xuICBlbnF1aXJlSnMucmVnaXN0ZXIocXVlcnksIGhhbmRsZXIpO1xuICByZXR1cm4gaGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gdW5lbnF1aXJlU2NyZWVuKGhhbmRsZXIpIHtcbiAgdmFyIHF1ZXJ5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBtb2JpbGVRdWVyeTtcblxuICBpZiAoIWVucXVpcmVKcykge1xuICAgIHJldHVybjtcbiAgfVxuICBlbnF1aXJlSnMudW5yZWdpc3RlcihxdWVyeSwgaGFuZGxlcik7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGVucXVpcmVKcztcbiIsInZhciBRdWVyeUhhbmRsZXIgPSByZXF1aXJlKCcuL1F1ZXJ5SGFuZGxlcicpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuL1V0aWwnKS5lYWNoO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgbWVkaWEgcXVlcnksIG1hbmFnZXMgaXQncyBzdGF0ZSBhbmQgcmVnaXN0ZXJlZCBoYW5kbGVycyBmb3IgdGhpcyBxdWVyeVxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBtZWRpYSBxdWVyeSBzdHJpbmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzVW5jb25kaXRpb25hbD1mYWxzZV0gd2hldGhlciB0aGUgbWVkaWEgcXVlcnkgc2hvdWxkIHJ1biByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIGNvbmRpdGlvbnMgYXJlIG1ldC4gUHJpbWFyaWx5IGZvciBoZWxwaW5nIG9sZGVyIGJyb3dzZXJzIGRlYWwgd2l0aCBtb2JpbGUtZmlyc3QgZGVzaWduXG4gKi9cbmZ1bmN0aW9uIE1lZGlhUXVlcnkocXVlcnksIGlzVW5jb25kaXRpb25hbCkge1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmlzVW5jb25kaXRpb25hbCA9IGlzVW5jb25kaXRpb25hbDtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uKG1xbCkge1xuICAgICAgICAvLyBDaHJvbWUgcGFzc2VzIGFuIE1lZGlhUXVlcnlMaXN0RXZlbnQgb2JqZWN0LCB3aGlsZSBvdGhlciBicm93c2VycyBwYXNzIE1lZGlhUXVlcnlMaXN0IGRpcmVjdGx5XG4gICAgICAgIHNlbGYubXFsID0gbXFsLmN1cnJlbnRUYXJnZXQgfHwgbXFsO1xuICAgICAgICBzZWxmLmFzc2VzcygpO1xuICAgIH07XG4gICAgdGhpcy5tcWwuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG59XG5cbk1lZGlhUXVlcnkucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3R1Y3RvciA6IE1lZGlhUXVlcnksXG5cbiAgICAvKipcbiAgICAgKiBhZGQgYSBoYW5kbGVyIGZvciB0aGlzIHF1ZXJ5LCB0cmlnZ2VyaW5nIGlmIGFscmVhZHkgYWN0aXZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gcXVlcnkgaXMgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIudW5tYXRjaF0gY2FsbGJhY2sgZm9yIHdoZW4gcXVlcnkgaXMgZGVhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlci5zZXR1cF0gY2FsbGJhY2sgZm9yIGltbWVkaWF0ZSBleGVjdXRpb24gd2hlbiBhIHF1ZXJ5IGhhbmRsZXIgaXMgcmVnaXN0ZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhbmRsZXIuZGVmZXJTZXR1cD1mYWxzZV0gc2hvdWxkIHRoZSBzZXR1cCBjYWxsYmFjayBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZmlyc3QgdGltZSB0aGUgaGFuZGxlciBpcyBtYXRjaGVkP1xuICAgICAqL1xuICAgIGFkZEhhbmRsZXIgOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIHZhciBxaCA9IG5ldyBRdWVyeUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChxaCk7XG5cbiAgICAgICAgdGhpcy5tYXRjaGVzKCkgJiYgcWgub24oKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlcyB0aGUgZ2l2ZW4gaGFuZGxlciBmcm9tIHRoZSBjb2xsZWN0aW9uLCBhbmQgY2FsbHMgaXQncyBkZXN0cm95IG1ldGhvZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBoYW5kbGVyIHRoZSBoYW5kbGVyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZUhhbmRsZXIgOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnM7XG4gICAgICAgIGVhY2goaGFuZGxlcnMsIGZ1bmN0aW9uKGgsIGkpIHtcbiAgICAgICAgICAgIGlmKGguZXF1YWxzKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFoYW5kbGVycy5zcGxpY2UoaSwxKTsgLy9yZW1vdmUgZnJvbSBhcnJheSBhbmQgZXhpdCBlYWNoIGVhcmx5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgbWVkaWEgcXVlcnkgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYSBtYXRjaFxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBtZWRpYSBxdWVyeSBjYW4gYmUgY29uc2lkZXJlZCBhIG1hdGNoLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBtYXRjaGVzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1xbC5tYXRjaGVzIHx8IHRoaXMuaXNVbmNvbmRpdGlvbmFsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGhhbmRsZXJzIGFuZCB1bmJpbmRzIGV2ZW50c1xuICAgICAqL1xuICAgIGNsZWFyIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1xbC5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5sZW5ndGggPSAwOyAvL2NsZWFyIGFycmF5XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgICogQXNzZXNzZXMgdGhlIHF1ZXJ5LCB0dXJuaW5nIG9uIGFsbCBoYW5kbGVycyBpZiBpdCBtYXRjaGVzLCB0dXJuaW5nIHRoZW0gb2ZmIGlmIGl0IGRvZXNuJ3QgbWF0Y2hcbiAgICAgICAgKi9cbiAgICBhc3Nlc3MgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMubWF0Y2hlcygpID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlclthY3Rpb25dKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFRdWVyeTtcbiIsInZhciBNZWRpYVF1ZXJ5ID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5Jyk7XG52YXIgVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xudmFyIGVhY2ggPSBVdGlsLmVhY2g7XG52YXIgaXNGdW5jdGlvbiA9IFV0aWwuaXNGdW5jdGlvbjtcbnZhciBpc0FycmF5ID0gVXRpbC5pc0FycmF5O1xuXG4vKipcbiAqIEFsbG93cyBmb3IgcmVnaXN0cmF0aW9uIG9mIHF1ZXJ5IGhhbmRsZXJzLlxuICogTWFuYWdlcyB0aGUgcXVlcnkgaGFuZGxlcidzIHN0YXRlIGFuZCBpcyByZXNwb25zaWJsZSBmb3Igd2lyaW5nIHVwIGJyb3dzZXIgZXZlbnRzXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE1lZGlhUXVlcnlEaXNwYXRjaCAoKSB7XG4gICAgaWYoIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWF0Y2hNZWRpYSBub3QgcHJlc2VudCwgbGVnYWN5IGJyb3dzZXJzIHJlcXVpcmUgYSBwb2x5ZmlsbCcpO1xuICAgIH1cblxuICAgIHRoaXMucXVlcmllcyA9IHt9O1xuICAgIHRoaXMuYnJvd3NlcklzSW5jYXBhYmxlID0gIXdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IGFsbCcpLm1hdGNoZXM7XG59XG5cbk1lZGlhUXVlcnlEaXNwYXRjaC5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvciA6IE1lZGlhUXVlcnlEaXNwYXRjaCxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGhhbmRsZXIgZm9yIHRoZSBnaXZlbiBtZWRpYSBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5XG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgQXJyYXkgfHwgRnVuY3Rpb259IG9wdGlvbnMgZWl0aGVyIGEgc2luZ2xlIHF1ZXJ5IGhhbmRsZXIgb2JqZWN0LCBhIGZ1bmN0aW9uLCBvciBhbiBhcnJheSBvZiBxdWVyeSBoYW5kbGVyc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggZmlyZWQgd2hlbiBxdWVyeSBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMudW5tYXRjaF0gZmlyZWQgd2hlbiBhIHF1ZXJ5IGlzIG5vIGxvbmdlciBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuc2V0dXBdIGZpcmVkIHdoZW4gaGFuZGxlciBmaXJzdCB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHdoZXRoZXIgc2V0dXAgc2hvdWxkIGJlIHJ1biBpbW1lZGlhdGVseSBvciBkZWZlcnJlZCB1bnRpbCBxdWVyeSBpcyBmaXJzdCBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc2hvdWxkRGVncmFkZT1mYWxzZV0gd2hldGhlciB0aGlzIHBhcnRpY3VsYXIgbWVkaWEgcXVlcnkgc2hvdWxkIGFsd2F5cyBydW4gb24gaW5jYXBhYmxlIGJyb3dzZXJzXG4gICAgICovXG4gICAgcmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBvcHRpb25zLCBzaG91bGREZWdyYWRlKSB7XG4gICAgICAgIHZhciBxdWVyaWVzICAgICAgICAgPSB0aGlzLnF1ZXJpZXMsXG4gICAgICAgICAgICBpc1VuY29uZGl0aW9uYWwgPSBzaG91bGREZWdyYWRlICYmIHRoaXMuYnJvd3NlcklzSW5jYXBhYmxlO1xuXG4gICAgICAgIGlmKCFxdWVyaWVzW3FdKSB7XG4gICAgICAgICAgICBxdWVyaWVzW3FdID0gbmV3IE1lZGlhUXVlcnkocSwgaXNVbmNvbmRpdGlvbmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbm9ybWFsaXNlIHRvIG9iamVjdCBpbiBhbiBhcnJheVxuICAgICAgICBpZihpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0geyBtYXRjaCA6IG9wdGlvbnMgfTtcbiAgICAgICAgfVxuICAgICAgICBpZighaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IFtvcHRpb25zXTtcbiAgICAgICAgfVxuICAgICAgICBlYWNoKG9wdGlvbnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHsgbWF0Y2ggOiBoYW5kbGVyIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyaWVzW3FdLmFkZEhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB1bnJlZ2lzdGVycyBhIHF1ZXJ5IGFuZCBhbGwgaXQncyBoYW5kbGVycywgb3IgYSBzcGVjaWZpYyBoYW5kbGVyIGZvciBhIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcSB0aGUgbWVkaWEgcXVlcnkgdG8gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IFtoYW5kbGVyXSBzcGVjaWZpYyBoYW5kbGVyIHRvIHVucmVnaXN0ZXJcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyIDogZnVuY3Rpb24ocSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbcV07XG5cbiAgICAgICAgaWYocXVlcnkpIHtcbiAgICAgICAgICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5yZW1vdmVIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnkuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5xdWVyaWVzW3FdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVF1ZXJ5RGlzcGF0Y2g7XG4iLCIvKipcbiAqIERlbGVnYXRlIHRvIGhhbmRsZSBhIG1lZGlhIHF1ZXJ5IGJlaW5nIG1hdGNoZWQgYW5kIHVubWF0Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgbWF0Y2hlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMudW5tYXRjaF0gY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIHVubWF0Y2hlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuc2V0dXBdIG9uZS10aW1lIGNhbGxiYWNrIHRyaWdnZXJlZCB0aGUgZmlyc3QgdGltZSBhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gc2hvdWxkIHRoZSBzZXR1cCBjYWxsYmFjayBiZSBydW4gaW1tZWRpYXRlbHksIHJhdGhlciB0aGFuIGZpcnN0IHRpbWUgcXVlcnkgaXMgbWF0Y2hlZD9cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBRdWVyeUhhbmRsZXIob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgIW9wdGlvbnMuZGVmZXJTZXR1cCAmJiB0aGlzLnNldHVwKCk7XG59XG5cblF1ZXJ5SGFuZGxlci5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvciA6IFF1ZXJ5SGFuZGxlcixcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHNldHVwIG9mIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXR1cCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMuc2V0dXApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBhbmQgdHJpZ2dlcmluZyBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgb24gOiBmdW5jdGlvbigpIHtcbiAgICAgICAgIXRoaXMuaW5pdGlhbGlzZWQgJiYgdGhpcy5zZXR1cCgpO1xuICAgICAgICB0aGlzLm9wdGlvbnMubWF0Y2ggJiYgdGhpcy5vcHRpb25zLm1hdGNoKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHRoZSB1bm1hdGNoIGV2ZW50IGZvciB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgb2ZmIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51bm1hdGNoICYmIHRoaXMub3B0aW9ucy51bm1hdGNoKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNhbGxlZCB3aGVuIGEgaGFuZGxlciBpcyB0byBiZSBkZXN0cm95ZWQuXG4gICAgICogZGVsZWdhdGVzIHRvIHRoZSBkZXN0cm95IG9yIHVubWF0Y2ggY2FsbGJhY2tzLCBkZXBlbmRpbmcgb24gYXZhaWxhYmlsaXR5LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgZGVzdHJveSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGVzdHJveSA/IHRoaXMub3B0aW9ucy5kZXN0cm95KCkgOiB0aGlzLm9mZigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBkZXRlcm1pbmVzIGVxdWFsaXR5IGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBpZiBvYmplY3QgaXMgc3VwcGxpZWQgY29tcGFyZSBvcHRpb25zLCBpZiBmdW5jdGlvbiwgY29tcGFyZSBtYXRjaCBjYWxsYmFja1xuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IFt0YXJnZXRdIHRoZSB0YXJnZXQgZm9yIGNvbXBhcmlzb25cbiAgICAgKi9cbiAgICBlcXVhbHMgOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9PT0gdGFyZ2V0IHx8IHRoaXMub3B0aW9ucy5tYXRjaCA9PT0gdGFyZ2V0O1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeUhhbmRsZXI7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgaXRlcmF0aW5nIG92ZXIgYSBjb2xsZWN0aW9uXG4gKlxuICogQHBhcmFtIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSBmblxuICovXG5mdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGZuKSB7XG4gICAgdmFyIGkgICAgICA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICBjb250O1xuXG4gICAgZm9yKGk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb250ID0gZm4oY29sbGVjdGlvbltpXSwgaSk7XG4gICAgICAgIGlmKGNvbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhazsgLy9hbGxvdyBlYXJseSBleGl0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodGFyZ2V0KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHRhcmdldCB0aGUgb2JqZWN0IHVuZGVyIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgZnVuY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpc0Z1bmN0aW9uIDogaXNGdW5jdGlvbixcbiAgICBpc0FycmF5IDogaXNBcnJheSxcbiAgICBlYWNoIDogZWFjaFxufTtcbiIsInZhciBNZWRpYVF1ZXJ5RGlzcGF0Y2ggPSByZXF1aXJlKCcuL01lZGlhUXVlcnlEaXNwYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgTWVkaWFRdWVyeURpc3BhdGNoKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfc2xpY2VkVG9BcnJheSh0LGEpe3JldHVybiBfYXJyYXlXaXRoSG9sZXModCl8fF9pdGVyYWJsZVRvQXJyYXlMaW1pdCh0LGEpfHxfbm9uSXRlcmFibGVSZXN0KCl9ZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpfWZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdCh0LGEpe3ZhciBuPVtdLGU9ITAscj0hMSxvPXZvaWQgMDt0cnl7Zm9yKHZhciBsLGk9dFtTeW1ib2wuaXRlcmF0b3JdKCk7IShlPShsPWkubmV4dCgpKS5kb25lKSYmKG4ucHVzaChsLnZhbHVlKSwhYXx8bi5sZW5ndGghPT1hKTtlPSEwKTt9Y2F0Y2godCl7cj0hMCxvPXR9ZmluYWxseXt0cnl7ZXx8bnVsbD09aS5yZXR1cm58fGkucmV0dXJuKCl9ZmluYWxseXtpZihyKXRocm93IG99fXJldHVybiBufWZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyh0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0fSFmdW5jdGlvbigpe3ZhciBsYXg9ZnVuY3Rpb24oKXtmb3IodmFyIGxheD17ZWxlbWVudHM6W119LGxhc3RZPTAsY3VycmVudEJyZWFrcG9pbnQ9XCJkZWZhdWx0XCIsYnJlYWtwb2ludHNTZXBhcmF0b3I9XCJfXCIsdHJhbnNmb3JtRm5zPXtcImRhdGEtbGF4LW9wYWNpdHlcIjpmdW5jdGlvbih0LGEpe3Qub3BhY2l0eT1hfSxcImRhdGEtbGF4LXRyYW5zbGF0ZVwiOmZ1bmN0aW9uKHQsYSl7dC50cmFuc2Zvcm0rPVwiIHRyYW5zbGF0ZShcIi5jb25jYXQoYSxcInB4LCBcIikuY29uY2F0KGEsXCJweClcIil9LFwiZGF0YS1sYXgtdHJhbnNsYXRlLXhcIjpmdW5jdGlvbih0LGEpe3QudHJhbnNmb3JtKz1cIiB0cmFuc2xhdGVYKFwiLmNvbmNhdChhLFwicHgpXCIpfSxcImRhdGEtbGF4LXRyYW5zbGF0ZS15XCI6ZnVuY3Rpb24odCxhKXt0LnRyYW5zZm9ybSs9XCIgdHJhbnNsYXRlWShcIi5jb25jYXQoYSxcInB4KVwiKX0sXCJkYXRhLWxheC1zY2FsZVwiOmZ1bmN0aW9uKHQsYSl7dC50cmFuc2Zvcm0rPVwiIHNjYWxlKFwiLmNvbmNhdChhLFwiKVwiKX0sXCJkYXRhLWxheC1zY2FsZS14XCI6ZnVuY3Rpb24odCxhKXt0LnRyYW5zZm9ybSs9XCIgc2NhbGVYKFwiLmNvbmNhdChhLFwiKVwiKX0sXCJkYXRhLWxheC1zY2FsZS15XCI6ZnVuY3Rpb24odCxhKXt0LnRyYW5zZm9ybSs9XCIgc2NhbGVZKFwiLmNvbmNhdChhLFwiKVwiKX0sXCJkYXRhLWxheC1za2V3XCI6ZnVuY3Rpb24odCxhKXt0LnRyYW5zZm9ybSs9XCIgc2tldyhcIi5jb25jYXQoYSxcImRlZywgXCIpLmNvbmNhdChhLFwiZGVnKVwiKX0sXCJkYXRhLWxheC1za2V3LXhcIjpmdW5jdGlvbih0LGEpe3QudHJhbnNmb3JtKz1cIiBza2V3WChcIi5jb25jYXQoYSxcImRlZylcIil9LFwiZGF0YS1sYXgtc2tldy15XCI6ZnVuY3Rpb24odCxhKXt0LnRyYW5zZm9ybSs9XCIgc2tld1koXCIuY29uY2F0KGEsXCJkZWcpXCIpfSxcImRhdGEtbGF4LXJvdGF0ZVwiOmZ1bmN0aW9uKHQsYSl7dC50cmFuc2Zvcm0rPVwiIHJvdGF0ZShcIi5jb25jYXQoYSxcImRlZylcIil9LFwiZGF0YS1sYXgtcm90YXRlLXhcIjpmdW5jdGlvbih0LGEpe3QudHJhbnNmb3JtKz1cIiByb3RhdGVYKFwiLmNvbmNhdChhLFwiZGVnKVwiKX0sXCJkYXRhLWxheC1yb3RhdGUteVwiOmZ1bmN0aW9uKHQsYSl7dC50cmFuc2Zvcm0rPVwiIHJvdGF0ZVkoXCIuY29uY2F0KGEsXCJkZWcpXCIpfSxcImRhdGEtbGF4LWJyaWdodG5lc3NcIjpmdW5jdGlvbih0LGEpe3QuZmlsdGVyKz1cIiBicmlnaHRuZXNzKFwiLmNvbmNhdChhLFwiJSlcIil9LFwiZGF0YS1sYXgtY29udHJhc3RcIjpmdW5jdGlvbih0LGEpe3QuZmlsdGVyKz1cIiBjb250cmFzdChcIi5jb25jYXQoYSxcIiUpXCIpfSxcImRhdGEtbGF4LWh1ZS1yb3RhdGVcIjpmdW5jdGlvbih0LGEpe3QuZmlsdGVyKz1cIiBodWUtcm90YXRlKFwiLmNvbmNhdChhLFwiZGVnKVwiKX0sXCJkYXRhLWxheC1ibHVyXCI6ZnVuY3Rpb24odCxhKXt0LmZpbHRlcis9XCIgYmx1cihcIi5jb25jYXQoYSxcInB4KVwiKX0sXCJkYXRhLWxheC1pbnZlcnRcIjpmdW5jdGlvbih0LGEpe3QuZmlsdGVyKz1cIiAgaW52ZXJ0KFwiLmNvbmNhdChhLFwiJSlcIil9LFwiZGF0YS1sYXgtc2F0dXJhdGVcIjpmdW5jdGlvbih0LGEpe3QuZmlsdGVyKz1cIiAgc2F0dXJhdGUoXCIuY29uY2F0KGEsXCIlKVwiKX0sXCJkYXRhLWxheC1ncmF5c2NhbGVcIjpmdW5jdGlvbih0LGEpe3QuZmlsdGVyKz1cIiAgZ3JheXNjYWxlKFwiLmNvbmNhdChhLFwiJSlcIil9LFwiZGF0YS1sYXgtYmctcG9zXCI6ZnVuY3Rpb24odCxhKXt0LmJhY2tncm91bmRQb3NpdGlvbj1cIlwiLmNvbmNhdChhLFwicHggXCIpLmNvbmNhdChhLFwicHhcIil9LFwiZGF0YS1sYXgtYmctcG9zLXhcIjpmdW5jdGlvbih0LGEpe3QuYmFja2dyb3VuZFBvc2l0aW9uWD1cIlwiLmNvbmNhdChhLFwicHhcIil9LFwiZGF0YS1sYXgtYmctcG9zLXlcIjpmdW5jdGlvbih0LGEpe3QuYmFja2dyb3VuZFBvc2l0aW9uWT1cIlwiLmNvbmNhdChhLFwicHhcIil9fSxfY3Jhenk9XCJcIixpPTA7aTwyMDtpKyspX2NyYXp5Kz1cIiBcIis1KmkrXCIgXCIrNDcqaSUzNjArXCIsIFwiO2Z1bmN0aW9uIGludHJwKHQsYSl7Zm9yKHZhciBuPTA7dFtuXVswXTw9YSYmdm9pZCAwIT09dFtuKzFdOyluKz0xO3ZhciBlPXRbbl1bMF0scj12b2lkIDA9PT10W24tMV0/ZTp0W24tMV1bMF0sbz10W25dWzFdLGw9dm9pZCAwPT09dFtuLTFdP286dFtuLTFdWzFdO3JldHVybiBNYXRoLm1pbihNYXRoLm1heCgoYS1yKS8oZS1yKSwwKSwxKSooby1sKStsfWZ1bmN0aW9uIGZuT3JWYWwocyl7cmV0dXJuXCIoXCI9PT1zWzBdP2V2YWwocyk6cGFyc2VGbG9hdChzKX1yZXR1cm4gbGF4LnByZXNldHM9e2xpbmdlcjpmdW5jdGlvbih0KXtyZXR1cm57XCJkYXRhLWxheC10cmFuc2xhdGUteVwiOlwiKHZoKjAuNykgMCwgMCAyMDAsIC01MDAgMFwifX0sbGF6eTpmdW5jdGlvbih0KXtyZXR1cm57XCJkYXRhLWxheC10cmFuc2xhdGUteVwiOlwiKHZoKSAwLCAoLWVsaCkgXCIuY29uY2F0KDA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90OjEwMCl9fSxlYWdlcjpmdW5jdGlvbih0KXtyZXR1cm57XCJkYXRhLWxheC10cmFuc2xhdGUteVwiOlwiKHZoKSAwLCAoLWVsaCkgLVwiLmNvbmNhdCgwPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQ/dDoxMDApfX0sc2xhbG9tOmZ1bmN0aW9uKHQpe3ZhciBhPTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90OjUwO3JldHVybntcImRhdGEtbGF4LXRyYW5zbGF0ZS14XCI6XCJ2aCBcIi5jb25jYXQoYSxcIiwgKHZoKjAuOCkgXCIpLmNvbmNhdCgtYSxcIiwgKHZoKjAuNikgXCIpLmNvbmNhdChhLFwiLCAodmgqMC40KSBcIikuY29uY2F0KC1hLFwiLCAodmgqMC4yKSBcIikuY29uY2F0KGEsXCIsICh2aCowKSBcIikuY29uY2F0KC1hLFwiLCAoLWVsaCkgXCIpLmNvbmNhdChhKX19LGNyYXp5OmZ1bmN0aW9uKHQpe3JldHVybntcImRhdGEtbGF4LWh1ZS1yb3RhdGVcIjpcIlwiLmNvbmNhdChfY3JhenksXCIgfCBsb29wPTIwXCIpfX0sc3BpbjpmdW5jdGlvbih0KXtyZXR1cm57XCJkYXRhLWxheC1yb3RhdGVcIjpcIih2aCkgMCwgKC1lbGgpIFwiLmNvbmNhdCgwPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQ/dDozNjApfX0sc3BpblJldjpmdW5jdGlvbih0KXtyZXR1cm57XCJkYXRhLWxheC1yb3RhdGVcIjpcIih2aCkgMCwgKC1lbGgpIFwiLmNvbmNhdCgtKDA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90OjM2MCkpfX0sc3BpbkluOmZ1bmN0aW9uKHQpe3JldHVybntcImRhdGEtbGF4LXJvdGF0ZVwiOlwidmggXCIuY29uY2F0KDA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90OjM2MCxcIiwgKHZoKjAuNSkgMFwiKX19LHNwaW5PdXQ6ZnVuY3Rpb24odCl7cmV0dXJue1wiZGF0YS1sYXgtcm90YXRlXCI6XCIodmgqMC41KSAwLCAtZWxoIFwiLmNvbmNhdCgwPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQ/dDozNjApfX0sYmx1ckluT3V0OmZ1bmN0aW9uKHQpe3ZhciBhPTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90OjQwO3JldHVybntcImRhdGEtbGF4LWJsdXJcIjpcIih2aCkgXCIuY29uY2F0KGEsXCIsICh2aCowLjgpIDAsICh2aCowLjIpIDAsIDAgXCIpLmNvbmNhdChhKX19LGJsdXJJbjpmdW5jdGlvbih0KXtyZXR1cm57XCJkYXRhLWxheC1ibHVyXCI6XCIodmgpIFwiLmNvbmNhdCgwPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQ/dDo0MCxcIiwgKHZoKjAuNykgMFwiKX19LGJsdXJPdXQ6ZnVuY3Rpb24odCl7cmV0dXJue1wiZGF0YS1sYXgtYmx1clwiOlwiKHZoKjAuMykgMCwgMCBcIi5jb25jYXQoMDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT10P3Q6NDApfX0sZmFkZUluT3V0OmZ1bmN0aW9uKCl7cmV0dXJue1wiZGF0YS1sYXgtb3BhY2l0eVwiOlwiKHZoKSAwLCAodmgqMC44KSAxLCAodmgqMC4yKSAxLCAwIDBcIn19LGZhZGVJbjpmdW5jdGlvbigpe3JldHVybntcImRhdGEtbGF4LW9wYWNpdHlcIjpcIih2aCkgMCwgKHZoKjAuNykgMVwifX0sZmFkZU91dDpmdW5jdGlvbigpe3JldHVybntcImRhdGEtbGF4LW9wYWNpdHlcIjpcIih2aCowLjMpIDEsIDAgMFwifX0sZHJpZnRMZWZ0OmZ1bmN0aW9uKHQpe3ZhciBhPTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90OjEwMDtyZXR1cm57XCJkYXRhLWxheC10cmFuc2xhdGUteFwiOlwidmggXCIuY29uY2F0KGEsXCIsIC1lbGggXCIpLmNvbmNhdCgtYSl9fSxkcmlmdFJpZ2h0OmZ1bmN0aW9uKHQpe3ZhciBhPTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90OjEwMDtyZXR1cm57XCJkYXRhLWxheC10cmFuc2xhdGUteFwiOlwidmggXCIuY29uY2F0KC1hLFwiLCAtZWxoIFwiKS5jb25jYXQoYSl9fSxsZWZ0VG9SaWdodDpmdW5jdGlvbih0KXtyZXR1cm57XCJkYXRhLWxheC10cmFuc2xhdGUteFwiOlwidmggMCwgLWVsaCAodncqXCIuY29uY2F0KDA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90OjEsXCIpXCIpfX0scmlnaHRUb0xlZnQ6ZnVuY3Rpb24odCl7cmV0dXJue1wiZGF0YS1sYXgtdHJhbnNsYXRlLXhcIjpcInZoIDAsIC1lbGggKHZ3KlwiLmNvbmNhdCgtKDA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90OjEpLFwiKVwiKX19LHpvb21Jbk91dDpmdW5jdGlvbih0KXt2YXIgYT0wPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQ/dDouMjtyZXR1cm57XCJkYXRhLWxheC1zY2FsZVwiOlwiKHZoKSBcIi5jb25jYXQoYSxcIiwgKHZoKjAuOCkgMSwgKHZoKjAuMikgMSwgLWVsaCBcIikuY29uY2F0KGEpfX0sem9vbUluOmZ1bmN0aW9uKHQpe3JldHVybntcImRhdGEtbGF4LXNjYWxlXCI6XCIodmgpIFwiLmNvbmNhdCgwPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQ/dDouMixcIiwgKHZoKjAuNykgMVwiKX19LHpvb21PdXQ6ZnVuY3Rpb24odCl7cmV0dXJue1wiZGF0YS1sYXgtc2NhbGVcIjpcIih2aCowLjMpIDEsIC1lbGggXCIuY29uY2F0KDA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dD90Oi4yKX19LHNwZWVkeTpmdW5jdGlvbih0KXt2YXIgYT0wPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQ/dDozMDtyZXR1cm57XCJkYXRhLWxheC1za2V3LXhcIjpcIih2aCkgXCIuY29uY2F0KGEsXCIsIC1lbGggXCIpLmNvbmNhdCgtYSl9fSxzd2luZzpmdW5jdGlvbih0KXt2YXIgYT0wPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQ/dDozMDtyZXR1cm57XCJkYXRhLWxheC1za2V3LXlcIjpcIih2aCkgXCIuY29uY2F0KGEsXCIsIC1lbGggXCIpLmNvbmNhdCgtYSl9fX0sbGF4LmFkZFByZXNldD1mdW5jdGlvbih0LGEpe2xheC5wcmVzZXRzW3RdPWF9LGxheC5zZXR1cD1mdW5jdGlvbigpe3ZhciB0PTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtsYXguYnJlYWtwb2ludHM9dC5icmVha3BvaW50c3x8e30sbGF4LnNlbGVjdG9yPXQuc2VsZWN0b3J8fFwiLmxheFwiLGxheC5wb3B1bGF0ZUVsZW1lbnRzKCl9LGxheC5yZW1vdmVFbGVtZW50PWZ1bmN0aW9uKGEpe3ZhciB0PWxheC5lbGVtZW50cy5maW5kSW5kZXgoZnVuY3Rpb24odCl7cmV0dXJuIHQuZWw9YX0pOy0xPHQmJmxheC5lbGVtZW50cy5zcGxpY2UodCwxKX0sbGF4LmNyZWF0ZUxheE9iamVjdD1mdW5jdGlvbih0KXtyZXR1cm57ZWw6dCxvcmlnaW5hbFN0eWxlOnt0cmFuc2Zvcm06dC5zdHlsZS50cmFuc2Zvcm0sZmlsdGVyOnQuc3R5bGUuZmlsdGVyfSx0cmFuc2Zvcm1zOnt9fX0sbGF4LmNhbGNUcmFuc2Zvcm1zPWZ1bmN0aW9uKGwpe2Zvcih2YXIgaT1sLmVsLHI9W10sdD0wO3Q8aS5hdHRyaWJ1dGVzLmxlbmd0aDt0Kyspe3ZhciBhPWkuYXR0cmlidXRlc1t0XTstMTxhLm5hbWUuaW5kZXhPZihcImRhdGEtbGF4LXByZXNldFwiKSYmci5wdXNoKGEpfWZvcih2YXIgbj1mdW5jdGlvbih0KXt2YXIgYT1yW3RdLG49YS5uYW1lLnNwbGl0KGJyZWFrcG9pbnRzU2VwYXJhdG9yKSxvPW5bMV0/XCJcIi5jb25jYXQoYnJlYWtwb2ludHNTZXBhcmF0b3IpLmNvbmNhdChuWzFdKTpcIlwiO2EudmFsdWUuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGE9dC5zcGxpdChcIi1cIiksbj1sYXgucHJlc2V0c1thWzBdXTtpZihuKXt2YXIgZT1uKGFbMV0pO2Zvcih2YXIgciBpbiBlKWkuc2V0QXR0cmlidXRlKFwiXCIuY29uY2F0KHIpLmNvbmNhdChvKSxlW3JdKX1lbHNlIGNvbnNvbGUubG9nKFwibGF4IGVycm9yOiBwcmVzZXQgXCIuY29uY2F0KGFbMF0sXCIgaXMgbm90IGRlZmluZWRcIikpfSk7dmFyIGU9aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxheC1hbmNob3JcIik7ZSYmXCJcIiE9PWV8fGkuc2V0QXR0cmlidXRlKFwiZGF0YS1sYXgtYW5jaG9yXCIsXCJzZWxmXCIpLGkuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oYS5uYW1lKX0sZT0wO2U8ci5sZW5ndGg7ZSsrKW4oZSk7aWYoIShpLmF0dHJpYnV0ZXNbXCJkYXRhLWxheC11c2UtZ3B1XCJdJiZcImZhbHNlXCI9PT1pLmF0dHJpYnV0ZXNbXCJkYXRhLWxheC11c2UtZ3B1XCJdLnZhbHVlKSYmKGkuc3R5bGVbXCJiYWNrZmFjZS12aXNpYmlsaXR5XCJdPVwiaGlkZGVuXCIsaS5zdHlsZVtcIi13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eVwiXT1cImhpZGRlblwiKSxpLmF0dHJpYnV0ZXNbXCJkYXRhLWxheC11c2UtZ3B1XCJdJiZpLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKFwiZGF0YS1sYXgtdXNlLWdwdVwiKSxsLm9wdGltaXNlPSExLGkuYXR0cmlidXRlc1tcImRhdGEtbGF4LW9wdGltaXplXCJdJiZcInRydWVcIj09PWkuYXR0cmlidXRlc1tcImRhdGEtbGF4LW9wdGltaXplXCJdLnZhbHVlKXtsLm9wdGltaXNlPSEwO3ZhciBvPWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxheC1vcGFjaXR5XCIsXCJcIi5jb25jYXQoLW8uaGVpZ2h0LTEsXCIgMCwgXCIpLmNvbmNhdCgtby5oZWlnaHQsXCIgMSwgXCIpLmNvbmNhdCh3aW5kb3cuaW5uZXJIZWlnaHQsXCIgMSwgXCIpLmNvbmNhdCh3aW5kb3cuaW5uZXJIZWlnaHQrMSxcIiAwXCIpKSxpLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKFwiZGF0YS1sYXgtb3B0aW1pemVcIil9Zm9yKHZhciBjPTA7YzxpLmF0dHJpYnV0ZXMubGVuZ3RoO2MrKyl7dmFyIHM9aS5hdHRyaWJ1dGVzW2NdO2lmKCEocy5uYW1lLmluZGV4T2YoXCJkYXRhLWxheFwiKTwwKSl7dmFyIHU9cy5uYW1lLnNwbGl0KGJyZWFrcG9pbnRzU2VwYXJhdG9yKSxmPXVbMF0uc3BsaXQoXCItXCIpLGQ9dVsxXXx8XCJkZWZhdWx0XCI7aWYoXCJsYXhcIj09PWZbMV0paWYoXCJkYXRhLWxheC1hbmNob3JcIj09PXMubmFtZSl7bFtcImRhdGEtbGF4LWFuY2hvclwiXT1cInNlbGZcIj09PXMudmFsdWU/aTpkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHMudmFsdWUpO3ZhciB4PWxbXCJkYXRhLWxheC1hbmNob3JcIl0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bC5hbmNob3JUb3A9TWF0aC5mbG9vcih4LnRvcCkrd2luZG93LnNjcm9sbFl9ZWxzZSFmdW5jdGlvbigpe3ZhciB0PV9zbGljZWRUb0FycmF5KHMudmFsdWUucmVwbGFjZSgvdncvZyx3aW5kb3cuaW5uZXJXaWR0aCkucmVwbGFjZSgvdmgvZyx3aW5kb3cuaW5uZXJIZWlnaHQpLnJlcGxhY2UoL2VsaC9nLGkuY2xpZW50SGVpZ2h0KS5yZXBsYWNlKC9lbHcvZyxpLmNsaWVudFdpZHRoKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnNwbGl0KFwifFwiKSwyKSxhPXRbMF0sbj10WzFdLHI9e307biYmbi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgYT1fc2xpY2VkVG9BcnJheSh0LnNwbGl0KFwiPVwiKSwyKSxuPWFbMF0sZT1hWzFdO3Jbbl09biYmZm5PclZhbChlKX0pO3ZhciBlPXVbMF0sbz1hLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQudHJpbSgpLnNwbGl0KFwiIFwiKS5tYXAoZm5PclZhbCl9KS5zb3J0KGZ1bmN0aW9uKHQsYSl7cmV0dXJuIHRbMF0tYVswXX0pO2wudHJhbnNmb3Jtc1tlXXx8KGwudHJhbnNmb3Jtc1tlXT17fSksbC50cmFuc2Zvcm1zW2VdW2RdPXt2YWx1ZU1hcDpvLG9wdGlvbnM6cn19KCl9fXZhciB2PWkuYXR0cmlidXRlc1tcImRhdGEtbGF4LXNwcml0ZS1kYXRhXCJdJiZpLmF0dHJpYnV0ZXNbXCJkYXRhLWxheC1zcHJpdGUtZGF0YVwiXS52YWx1ZTtpZih2KXtsLnNwcml0ZURhdGE9di5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBwYXJzZUludCh0KX0pLGkuc3R5bGUuaGVpZ2h0PWwuc3ByaXRlRGF0YVsxXStcInB4XCIsaS5zdHlsZS53aWR0aD1sLnNwcml0ZURhdGFbMF0rXCJweFwiO3ZhciBwPWkuYXR0cmlidXRlc1tcImRhdGEtbGF4LXNwcml0ZS1pbWFnZVwiXSYmaS5hdHRyaWJ1dGVzW1wiZGF0YS1sYXgtc3ByaXRlLWltYWdlXCJdLnZhbHVlO3AmJihpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1cInVybChcIi5jb25jYXQocCxcIilcIikpfXJldHVybiBsfSxsYXguYWRkRWxlbWVudD1mdW5jdGlvbih0KXt2YXIgYT1sYXguY2FsY1RyYW5zZm9ybXMobGF4LmNyZWF0ZUxheE9iamVjdCh0KSk7bGF4LmVsZW1lbnRzLnB1c2goYSksbGF4LnVwZGF0ZUVsZW1lbnQoYSl9LGxheC5wb3B1bGF0ZUVsZW1lbnRzPWZ1bmN0aW9uKCl7bGF4LmVsZW1lbnRzPVtdLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobGF4LnNlbGVjdG9yKS5mb3JFYWNoKGxheC5hZGRFbGVtZW50KSxjdXJyZW50QnJlYWtwb2ludD1sYXguZ2V0Q3VycmVudEJyZWFrUG9pbnQoKX0sbGF4LnVwZGF0ZUVsZW1lbnRzPWZ1bmN0aW9uKCl7bGF4LmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24odCl7bGF4LmNhbGNUcmFuc2Zvcm1zKHQpLGxheC51cGRhdGVFbGVtZW50KHQpfSksY3VycmVudEJyZWFrcG9pbnQ9bGF4LmdldEN1cnJlbnRCcmVha1BvaW50KCl9LGxheC5nZXRDdXJyZW50QnJlYWtQb2ludD1mdW5jdGlvbigpe3ZhciB0PVwiZGVmYXVsdFwiLGE9d2luZG93LmlubmVyV2lkdGg7Zm9yKHZhciBuIGluIGxheC5icmVha3BvaW50cyl7aWYoIShwYXJzZUZsb2F0KGxheC5icmVha3BvaW50c1tuXSk8PWEpKWJyZWFrO3Q9bn1yZXR1cm4gdH0sbGF4LnVwZGF0ZUVsZW1lbnQ9ZnVuY3Rpb24odCl7dmFyIGE9dC5vcmlnaW5hbFN0eWxlLG49dC5hbmNob3JUb3AsZT10LnRyYW5zZm9ybXMscj10LnNwcml0ZURhdGEsbz10LmVsLGw9bj9uLWxhc3RZOmxhc3RZLGk9e3RyYW5zZm9ybTphLnRyYW5zZm9ybSxmaWx0ZXI6YS5maWx0ZXJ9O2Zvcih2YXIgYyBpbiBlKXt2YXIgcz1lW2NdW2N1cnJlbnRCcmVha3BvaW50XXx8ZVtjXS5kZWZhdWx0O2lmKHMpe3ZhciB1PWw7cy5vcHRpb25zLm9mZnNldCYmKHUrPXMub3B0aW9ucy5vZmZzZXQpLHMub3B0aW9ucy5zcGVlZCYmKHUqPXMub3B0aW9ucy5zcGVlZCkscy5vcHRpb25zLmxvb3AmJih1JT1zLm9wdGlvbnMubG9vcCk7dmFyIGY9dHJhbnNmb3JtRm5zW2NdLGQ9aW50cnAocy52YWx1ZU1hcCx1KTtmJiZmKGksZCl9fWlmKHIpe3ZhciB4PV9zbGljZWRUb0FycmF5KHIsNSksdj14WzBdLHA9eFsxXSxoPXhbMl0sbT14WzNdLGc9eFs0XSxiPU1hdGguZmxvb3IobGFzdFkvZyklaCx5PWIlbSxrPU1hdGguZmxvb3IoYi9tKTtpLmJhY2tncm91bmRQb3NpdGlvbj1cIi1cIi5jb25jYXQoeSp2LFwicHggLVwiKS5jb25jYXQoaypwLFwicHhcIil9aWYoMD09PWkub3BhY2l0eSlvLnN0eWxlLm9wYWNpdHk9MDtlbHNlIGZvcih2YXIgdyBpbiBpKW8uc3R5bGVbd109aVt3XX0sbGF4LnVwZGF0ZT1mdW5jdGlvbih0KXtsYXN0WSE9PXQmJihsYXN0WT10LGxheC5lbGVtZW50cy5mb3JFYWNoKGxheC51cGRhdGVFbGVtZW50KSl9LGxheH0oKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZ2b2lkIDAhPT1tb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1sYXg6d2luZG93LmxheD1sYXh9KCk7IiwiLyohXG4gKiBMYXp5IExvYWQgLSBKYXZhU2NyaXB0IHBsdWdpbiBmb3IgbGF6eSBsb2FkaW5nIGltYWdlc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAwNy0yMDE5IE1pa2EgVHV1cG9sYVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqXG4gKiBQcm9qZWN0IGhvbWU6XG4gKiAgIGh0dHBzOi8vYXBwZWxzaWluaS5uZXQvcHJvamVjdHMvbGF6eWxvYWRcbiAqXG4gKiBWZXJzaW9uOiAyLjAuMC1yYy4yXG4gKlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuTGF6eUxvYWQgPSBmYWN0b3J5KHJvb3QpO1xuICAgIH1cbn0pICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcy53aW5kb3cgfHwgdGhpcy5nbG9iYWwsIGZ1bmN0aW9uIChyb290KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIHJvb3QgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHNyYzogXCJkYXRhLXNyY1wiLFxuICAgICAgICBzcmNzZXQ6IFwiZGF0YS1zcmNzZXRcIixcbiAgICAgICAgc2VsZWN0b3I6IFwiLmxhenlsb2FkXCIsXG4gICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIHRocmVzaG9sZDogMFxuICAgIH07XG5cbiAgICAvKipcbiAgICAqIE1lcmdlIHR3byBvciBtb3JlIG9iamVjdHMuIFJldHVybnMgYSBuZXcgb2JqZWN0LlxuICAgICogQHByaXZhdGVcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gIGRlZXAgICAgIElmIHRydWUsIGRvIGEgZGVlcCAob3IgcmVjdXJzaXZlKSBtZXJnZSBbb3B0aW9uYWxdXG4gICAgKiBAcGFyYW0ge09iamVjdH0gICBvYmplY3RzICBUaGUgb2JqZWN0cyB0byBtZXJnZSB0b2dldGhlclxuICAgICogQHJldHVybnMge09iamVjdH0gICAgICAgICAgTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xuICAgICovXG4gICAgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKCkgIHtcblxuICAgICAgICBsZXQgZXh0ZW5kZWQgPSB7fTtcbiAgICAgICAgbGV0IGRlZXAgPSBmYWxzZTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICAgICAgICAvKiBDaGVjayBpZiBhIGRlZXAgbWVyZ2UgKi9cbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pID09PSBcIltvYmplY3QgQm9vbGVhbl1cIikge1xuICAgICAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIE1lcmdlIHRoZSBvYmplY3QgaW50byB0aGUgZXh0ZW5kZWQgb2JqZWN0ICovXG4gICAgICAgIGxldCBtZXJnZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIElmIGRlZXAgbWVyZ2UgYW5kIHByb3BlcnR5IGlzIGFuIG9iamVjdCwgbWVyZ2UgcHJvcGVydGllcyAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW3Byb3BdKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBleHRlbmQodHJ1ZSwgZXh0ZW5kZWRbcHJvcF0sIG9ialtwcm9wXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmRlZFtwcm9wXSA9IG9ialtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKiBMb29wIHRocm91Z2ggZWFjaCBvYmplY3QgYW5kIGNvbmR1Y3QgYSBtZXJnZSAqL1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgbWVyZ2Uob2JqKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHRlbmRlZDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTGF6eUxvYWQoaW1hZ2VzLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgTGF6eUxvYWQucHJvdG90eXBlID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLyogV2l0aG91dCBvYnNlcnZlcnMgbG9hZCBldmVyeXRoaW5nIGFuZCBiYWlsIG91dCBlYXJseS4gKi9cbiAgICAgICAgICAgIGlmICghcm9vdC5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlcygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG9ic2VydmVyQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHJvb3Q6IHRoaXMuc2V0dGluZ3Mucm9vdCxcbiAgICAgICAgICAgICAgICByb290TWFyZ2luOiB0aGlzLnNldHRpbmdzLnJvb3RNYXJnaW4sXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiBbdGhpcy5zZXR0aW5ncy50aHJlc2hvbGRdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVudHJpZXMsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3Jjc2V0ID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyY3NldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJpbWdcIiA9PT0gZW50cnkudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgc3JjICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIG9ic2VydmVyQ29uZmlnKTtcblxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRBbmREZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRJbWFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncykgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyYyk7XG4gICAgICAgICAgICAgICAgbGV0IHNyY3NldCA9IGltYWdlLmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyY3NldCk7XG4gICAgICAgICAgICAgICAgaWYgKFwiaW1nXCIgPT09IGltYWdlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgc3JjICsgXCInKVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncykgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5sYXp5bG9hZCA9IGZ1bmN0aW9uKGltYWdlcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IExhenlMb2FkKGltYWdlcywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGlmIChyb290LmpRdWVyeSkge1xuICAgICAgICBjb25zdCAkID0gcm9vdC5qUXVlcnk7XG4gICAgICAgICQuZm4ubGF6eWxvYWQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICBvcHRpb25zLmF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlIHx8IFwiZGF0YS1zcmNcIjtcbiAgICAgICAgICAgIG5ldyBMYXp5TG9hZCgkLm1ha2VBcnJheSh0aGlzKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gTGF6eUxvYWQ7XG59KTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgTWljcm9Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgRk9DVVNBQkxFX0VMRU1FTlRTID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXScsICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXTtcblxuICB2YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZGFsKF9yZWYpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IF9yZWYudGFyZ2V0TW9kYWwsXG4gICAgICAgICAgX3JlZiR0cmlnZ2VycyA9IF9yZWYudHJpZ2dlcnMsXG4gICAgICAgICAgdHJpZ2dlcnMgPSBfcmVmJHRyaWdnZXJzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkdHJpZ2dlcnMsXG4gICAgICAgICAgX3JlZiRvblNob3cgPSBfcmVmLm9uU2hvdyxcbiAgICAgICAgICBvblNob3cgPSBfcmVmJG9uU2hvdyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uU2hvdyxcbiAgICAgICAgICBfcmVmJG9uQ2xvc2UgPSBfcmVmLm9uQ2xvc2UsXG4gICAgICAgICAgb25DbG9zZSA9IF9yZWYkb25DbG9zZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uQ2xvc2UsXG4gICAgICAgICAgX3JlZiRvcGVuVHJpZ2dlciA9IF9yZWYub3BlblRyaWdnZXIsXG4gICAgICAgICAgb3BlblRyaWdnZXIgPSBfcmVmJG9wZW5UcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInIDogX3JlZiRvcGVuVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJGNsb3NlVHJpZ2dlciA9IF9yZWYuY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIGNsb3NlVHJpZ2dlciA9IF9yZWYkY2xvc2VUcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLWNsb3NlJyA6IF9yZWYkY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIF9yZWYkb3BlbkNsYXNzID0gX3JlZi5vcGVuQ2xhc3MsXG4gICAgICAgICAgb3BlbkNsYXNzID0gX3JlZiRvcGVuQ2xhc3MgPT09IHZvaWQgMCA/ICdpcy1vcGVuJyA6IF9yZWYkb3BlbkNsYXNzLFxuICAgICAgICAgIF9yZWYkZGlzYWJsZVNjcm9sbCA9IF9yZWYuZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBkaXNhYmxlU2Nyb2xsID0gX3JlZiRkaXNhYmxlU2Nyb2xsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBfcmVmJGRpc2FibGVGb2N1cyA9IF9yZWYuZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIGRpc2FibGVGb2N1cyA9IF9yZWYkZGlzYWJsZUZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9IF9yZWYuYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uID0gX3JlZiRhd2FpdENsb3NlQW5pbWF0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCxcbiAgICAgICAgICBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPSBfcmVmLmF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdE9wZW5BbmltYXRpb24gPSBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhd2FpdE9wZW5BbmltYXRpLFxuICAgICAgICAgIF9yZWYkZGVidWdNb2RlID0gX3JlZi5kZWJ1Z01vZGUsXG4gICAgICAgICAgZGVidWdNb2RlID0gX3JlZiRkZWJ1Z01vZGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkZWJ1Z01vZGU7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2Ugb2YgdGhlIG1vZGFsXG4gICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpOyAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXNzZWQgY29uZmlnXG5cbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICBkZWJ1Z01vZGU6IGRlYnVnTW9kZSxcbiAgICAgICAgZGlzYWJsZVNjcm9sbDogZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgb3BlblRyaWdnZXI6IG9wZW5UcmlnZ2VyLFxuICAgICAgICBjbG9zZVRyaWdnZXI6IGNsb3NlVHJpZ2dlcixcbiAgICAgICAgb3BlbkNsYXNzOiBvcGVuQ2xhc3MsXG4gICAgICAgIG9uU2hvdzogb25TaG93LFxuICAgICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uOiBhd2FpdENsb3NlQW5pbWF0aW9uLFxuICAgICAgICBhd2FpdE9wZW5BbmltYXRpb246IGF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgZGlzYWJsZUZvY3VzOiBkaXNhYmxlRm9jdXNcbiAgICAgIH07IC8vIFJlZ2lzdGVyIGNsaWNrIGV2ZW50cyBvbmx5IGlmIHByZSBiaW5kaW5nIGV2ZW50TGlzdGVuZXJzXG5cbiAgICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPiAwKSB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMuYXBwbHkodGhpcywgX3RvQ29uc3VtYWJsZUFycmF5KHRyaWdnZXJzKSk7IC8vIHByZSBiaW5kIGZ1bmN0aW9ucyBmb3IgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5vbktleWRvd24gPSB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb29wcyB0aHJvdWdoIGFsbCBvcGVuVHJpZ2dlcnMgYW5kIGJpbmRzIGNsaWNrIGV2ZW50XG4gICAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzIFtBcnJheSBvZiBub2RlIGVsZW1lbnRzXVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICAgIGtleTogXCJyZWdpc3RlclRyaWdnZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJUcmlnZ2VycygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJpZ2dlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgdHJpZ2dlcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2Vycy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93TW9kYWwoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2hvd01vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkNsYXNzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2Rpc2FibGUnKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdE9wZW5BbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBfdGhpczIubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuXG4gICAgICAgICAgICBfdGhpczIuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uU2hvdyh0aGlzLm1vZGFsLCB0aGlzLmFjdGl2ZUVsZW1lbnQsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgICAgdmFyIG1vZGFsID0gdGhpcy5tb2RhbDtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW91cignZW5hYmxlJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlbWVudCAmJiB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UodGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0Q2xvc2VBbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgb3BlbkNsYXNzID0gdGhpcy5jb25maWcub3BlbkNsYXNzOyAvLyA8LSBvbGQgc2Nob29sIGZ0d1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShvcGVuQ2xhc3MpO1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbEJ5SWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpO1xuICAgICAgICBpZiAodGhpcy5tb2RhbCkgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNjcm9sbEJlaGF2aW91clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbEJlaGF2aW91cih0b2dnbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlU2Nyb2xsKSByZXR1cm47XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgICAgIHN3aXRjaCAodG9nZ2xlKSB7XG4gICAgICAgICAgY2FzZSAnZW5hYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdkaXNhYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRXZlbnRMaXN0ZW5lcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZUV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZSh0aGlzLmNvbmZpZy5jbG9zZVRyaWdnZXIpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbktleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpOyAvLyBlc2NcblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkgdGhpcy5yZXRhaW5Gb2N1cyhldmVudCk7IC8vIHRhYlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRGb2N1c2FibGVOb2Rlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU5vZGVzKCkge1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMRU1FTlRTKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVzKSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFRyaWVzIHRvIHNldCBmb2N1cyBvbiBhIG5vZGUgd2hpY2ggaXMgbm90IGEgY2xvc2UgdHJpZ2dlclxuICAgICAgICogaWYgbm8gb3RoZXIgbm9kZXMgZXhpc3QgdGhlbiBmb2N1c2VzIG9uIGZpcnN0IGNsb3NlIHRyaWdnZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldEZvY3VzVG9GaXJzdE5vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGb2N1c1RvRmlyc3ROb2RlKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGlzYWJsZUZvY3VzKSByZXR1cm47XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyByZW1vdmUgbm9kZXMgb24gd2hvc2UgY2xpY2ssIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgICAgLy8gY291bGQgbm90IHRoaW5rIG9mIGEgYmV0dGVyIG5hbWUgOihcblxuICAgICAgICB2YXIgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyA9IGZvY3VzYWJsZU5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoX3RoaXMzLmNvbmZpZy5jbG9zZVRyaWdnZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID4gMCkgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0c1swXS5mb2N1cygpO1xuICAgICAgICBpZiAobm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cy5sZW5ndGggPT09IDApIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJldGFpbkZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmV0YWluRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpOyAvLyBubyBmb2N1c2FibGUgbm9kZXNcblxuICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWx0ZXJzIG5vZGVzIHdoaWNoIGFyZSBoaWRkZW4gdG8gcHJldmVudFxuICAgICAgICAgKiBmb2N1cyBsZWFrIG91dHNpZGUgbW9kYWxcbiAgICAgICAgICovXG5cbiAgICAgICAgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gICAgICAgIH0pOyAvLyBpZiBkaXNhYmxlRm9jdXMgaXMgdHJ1ZVxuXG4gICAgICAgIGlmICghdGhpcy5tb2RhbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZvY3VzZWRJdGVtSW5kZXggPSBmb2N1c2FibGVOb2Rlcy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZU5vZGVzW2ZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNhYmxlTm9kZXMubGVuZ3RoID4gMCAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSBmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIE1vZGFsIHByb3RvdHlwZSBlbmRzLlxuICAgKiBIZXJlIG9uIGNvZGUgaXMgcmVzcG9uc2libGUgZm9yIGRldGVjdGluZyBhbmRcbiAgICogYXV0byBiaW5kaW5nIGV2ZW50IGhhbmRsZXJzIG9uIG1vZGFsIHRyaWdnZXJzXG4gICAqL1xuICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcGVuZWQgbW9kYWxcblxuXG4gIHZhciBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gYXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCBpdCdzXG4gICAqIHJlc3BlY3RpdmUgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgICBBbiBhcnJheSBvZiBhbGwgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0cmlnZ2VyQXR0ciBUaGUgZGF0YS1hdHRyaWJ1dGUgd2hpY2ggdHJpZ2dlcnMgdGhlIG1vZHVsZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG5cbiAgdmFyIGdlbmVyYXRlVHJpZ2dlck1hcCA9IGZ1bmN0aW9uIGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2VycywgdHJpZ2dlckF0dHIpIHtcbiAgICB2YXIgdHJpZ2dlck1hcCA9IFtdO1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IHRyaWdnZXIuYXR0cmlidXRlc1t0cmlnZ2VyQXR0cl0udmFsdWU7XG4gICAgICBpZiAodHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPT09IHVuZGVmaW5lZCkgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPSBbXTtcbiAgICAgIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdLnB1c2godHJpZ2dlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyaWdnZXJNYXA7XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgd2hldGhlciBhIG1vZGFsIG9mIHRoZSBnaXZlbiBpZCBleGlzdHNcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGlkICBUaGUgaWQgb2YgdGhlIG1vZGFsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlTW9kYWxQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlTW9kYWxQcmVzZW5jZShpZCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3U2VlbXMgbGlrZSB5b3UgaGF2ZSBtaXNzZWQgJWMnXCIuY29uY2F0KGlkLCBcIidcIiksICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdJRCBzb21ld2hlcmUgaW4geW91ciBjb2RlLiBSZWZlciBleGFtcGxlIGJlbG93IHRvIHJlc29sdmUgaXQuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGlkPVxcXCJcIi5jb25jYXQoaWQsIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBhcmUgbW9kYWwgdHJpZ2dlcnMgcHJlc2VudFxuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBBbiBhcnJheSBvZiBkYXRhLXRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlID0gZnVuY3Rpb24gdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpIHtcbiAgICBpZiAodHJpZ2dlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IFxcdTI3NTdQbGVhc2Ugc3BlY2lmeSBhdCBsZWFzdCBvbmUgJWMnbWljcm9tb2RhbC10cmlnZ2VyJ1wiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnZGF0YSBhdHRyaWJ1dGUuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1taWNyb21vZGFsLXRyaWdnZXI9XFxcIm15LW1vZGFsXFxcIj48L2E+XCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0cmlnZ2VycyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBtb2RhbHNcbiAgICogYXJlIHByZXNlbnQgaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgICBBcnJheSBvZiBET00gbm9kZXMgd2hpY2ggaGF2ZSBkYXRhLXRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VyTWFwIEFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgdGhlaXIgdHJpZ2dlcnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVBcmdzID0gZnVuY3Rpb24gdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSB7XG4gICAgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpO1xuICAgIGlmICghdHJpZ2dlck1hcCkgcmV0dXJuIHRydWU7XG5cbiAgICBmb3IgKHZhciBpZCBpbiB0cmlnZ2VyTWFwKSB7XG4gICAgICB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvKipcbiAgICogQmluZHMgY2xpY2sgaGFuZGxlcnMgdG8gYWxsIG1vZGFsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuXG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KGNvbmZpZykge1xuICAgIC8vIENyZWF0ZSBhbiBjb25maWcgb2JqZWN0IHdpdGggZGVmYXVsdCBvcGVuVHJpZ2dlclxuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgb3BlblRyaWdnZXI6ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcidcbiAgICB9LCBjb25maWcpOyAvLyBDb2xsZWN0cyBhbGwgdGhlIG5vZGVzIHdpdGggdGhlIHRyaWdnZXJcblxuICAgIHZhciB0cmlnZ2VycyA9IF90b0NvbnN1bWFibGVBcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiLmNvbmNhdChvcHRpb25zLm9wZW5UcmlnZ2VyLCBcIl1cIikpKTsgLy8gTWFrZXMgYSBtYXBwaW5ncyBvZiBtb2RhbHMgd2l0aCB0aGVpciB0cmlnZ2VyIG5vZGVzXG5cblxuICAgIHZhciB0cmlnZ2VyTWFwID0gZ2VuZXJhdGVUcmlnZ2VyTWFwKHRyaWdnZXJzLCBvcHRpb25zLm9wZW5UcmlnZ2VyKTsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gRm9yIGV2ZXJ5IHRhcmdldCBtb2RhbCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFyIHZhbHVlID0gdHJpZ2dlck1hcFtrZXldO1xuICAgICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IGtleTtcbiAgICAgIG9wdGlvbnMudHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkodmFsdWUpO1xuICAgICAgYWN0aXZlTW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvd3MgYSBwYXJ0aWN1bGFyIG1vZGFsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0TW9kYWwgW1RoZSBpZCBvZiB0aGUgbW9kYWwgdG8gZGlzcGxheV1cbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgW1RoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byBwYXNzXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyh0YXJnZXRNb2RhbCwgY29uZmlnKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBjb25maWcgfHwge307XG4gICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IHRhcmdldE1vZGFsOyAvLyBDaGVja3MgaWYgbW9kYWxzIGFuZCB0cmlnZ2VycyBleGlzdCBpbiBkb21cblxuICAgIGlmIChvcHRpb25zLmRlYnVnTW9kZSA9PT0gdHJ1ZSAmJiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UodGFyZ2V0TW9kYWwpID09PSBmYWxzZSkgcmV0dXJuOyAvLyBjbGVhciBldmVudHMgaW4gY2FzZSBwcmV2aW91cyBtb2RhbCB3YXNuJ3QgY2xvc2VcblxuICAgIGlmIChhY3RpdmVNb2RhbCkgYWN0aXZlTW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTsgLy8gc3RvcmVzIHJlZmVyZW5jZSB0byBhY3RpdmUgbW9kYWxcblxuICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXG4gICAgYWN0aXZlTW9kYWwuc2hvd01vZGFsKCk7XG4gIH07XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGFjdGl2ZSBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGNsb3NlXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKHRhcmdldE1vZGFsKSB7XG4gICAgdGFyZ2V0TW9kYWwgPyBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkgOiBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIHNob3c6IHNob3csXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59KCk7XG53aW5kb3cuTWljcm9Nb2RhbCA9IE1pY3JvTW9kYWw7XG5cbmV4cG9ydCBkZWZhdWx0IE1pY3JvTW9kYWw7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlNpZW1hXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TaWVtYT10KCk6ZS5TaWVtYT10KCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKGlbcl0pcmV0dXJuIGlbcl0uZXhwb3J0czt2YXIgbj1pW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmw9ITAsbi5leHBvcnRzfXZhciBpPXt9O3JldHVybiB0Lm09ZSx0LmM9aSx0LmQ9ZnVuY3Rpb24oZSxpLHIpe3QubyhlLGkpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIGk9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChpLFwiYVwiLGkpLGl9LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIHI9dFtpXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LGkscil7cmV0dXJuIGkmJmUodC5wcm90b3R5cGUsaSksciYmZSh0LHIpLHR9fSgpLGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBpPXRoaXM7aWYocih0aGlzLGUpLHRoaXMuY29uZmlnPWUubWVyZ2VTZXR0aW5ncyh0KSx0aGlzLnNlbGVjdG9yPVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5zZWxlY3Rvcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLnNlbGVjdG9yKTp0aGlzLmNvbmZpZy5zZWxlY3RvcixudWxsPT09dGhpcy5zZWxlY3Rvcil0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd3Jvbmcgd2l0aCB5b3VyIHNlbGVjdG9yIPCfmK1cIik7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5pbm5lckVsZW1lbnRzPVtdLnNsaWNlLmNhbGwodGhpcy5zZWxlY3Rvci5jaGlsZHJlbiksdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jb25maWcubG9vcD90aGlzLmNvbmZpZy5zdGFydEluZGV4JXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg6TWF0aC5tYXgoMCxNYXRoLm1pbih0aGlzLmNvbmZpZy5zdGFydEluZGV4LHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSksdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eT1lLndlYmtpdE9yTm90KCksW1wicmVzaXplSGFuZGxlclwiLFwidG91Y2hzdGFydEhhbmRsZXJcIixcInRvdWNoZW5kSGFuZGxlclwiLFwidG91Y2htb3ZlSGFuZGxlclwiLFwibW91c2Vkb3duSGFuZGxlclwiLFwibW91c2V1cEhhbmRsZXJcIixcIm1vdXNlbGVhdmVIYW5kbGVyXCIsXCJtb3VzZW1vdmVIYW5kbGVyXCIsXCJjbGlja0hhbmRsZXJcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtpW2VdPWlbZV0uYmluZChpKX0pLHRoaXMuaW5pdCgpfXJldHVybiBzKGUsW3trZXk6XCJhdHRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZHJhZz17c3RhcnRYOjAsZW5kWDowLHN0YXJ0WTowLGxldEl0R286bnVsbCxwcmV2ZW50Q2xpY2s6ITF9LHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnRvdWNoc3RhcnRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMudG91Y2hlbmRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvdWNobW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMubW91c2Vkb3duSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW91c2V1cEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlbGVhdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdXNlbW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGlja0hhbmRsZXIpKX19LHtrZXk6XCJkZXRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKX19LHtrZXk6XCJpbml0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmF0dGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIix0aGlzLnNlbGVjdG9yLnN0eWxlLmRpcmVjdGlvbj10aGlzLmNvbmZpZy5ydGw/XCJydGxcIjpcImx0clwiLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHRoaXMuY29uZmlnLm9uSW5pdC5jYWxsKHRoaXMpfX0se2tleTpcImJ1aWxkU2xpZGVyRnJhbWVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UsdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2U6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0aGlzLnNsaWRlckZyYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53aWR0aD1lKnQrXCJweFwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgcj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKXt2YXIgbj10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tyXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKG4pfWZvcih2YXIgcz0wO3M8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciBsPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW3NdKTtpLmFwcGVuZENoaWxkKGwpfWlmKHRoaXMuY29uZmlnLmxvb3ApZm9yKHZhciBvPTA7bzx0aGlzLnBlclBhZ2U7bysrKXt2YXIgYT10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tvXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKGEpfXRoaXMuc2xpZGVyRnJhbWUuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyRnJhbWUpLHRoaXMuc2xpZGVUb0N1cnJlbnQoKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lSXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuc3R5bGUuY3NzRmxvYXQ9dGhpcy5jb25maWcucnRsP1wicmlnaHRcIjpcImxlZnRcIix0LnN0eWxlLmZsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS53aWR0aD0odGhpcy5jb25maWcubG9vcD8xMDAvKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2UpOjEwMC90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKStcIiVcIix0LmFwcGVuZENoaWxkKGUpLHR9fSx7a2V5OlwicmVzb2x2ZVNsaWRlc051bWJlclwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuY29uZmlnLnBlclBhZ2UpdGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2U7ZWxzZSBpZihcIm9iamVjdFwiPT09bih0aGlzLmNvbmZpZy5wZXJQYWdlKSl7dGhpcy5wZXJQYWdlPTE7Zm9yKHZhciBlIGluIHRoaXMuY29uZmlnLnBlclBhZ2Upd2luZG93LmlubmVyV2lkdGg+PWUmJih0aGlzLnBlclBhZ2U9dGhpcy5jb25maWcucGVyUGFnZVtlXSl9fX0se2tleTpcInByZXZcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7aWYodGhpcy5jb25maWcubG9vcCl7aWYodGhpcy5jdXJyZW50U2xpZGUtZTwwKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXItZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1heCh0aGlzLmN1cnJlbnRTbGlkZS1lLDApO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJuZXh0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlK2U+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2Upe3RoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTt2YXIgcj10aGlzLmN1cnJlbnRTbGlkZS10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLG49dGhpcy5wZXJQYWdlLHM9cituLGw9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpzKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxvPXRoaXMuY29uZmlnLmRyYWdnYWJsZT90aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYOjA7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyhsK28pK1wicHgsIDAsIDApXCIsdGhpcy5jdXJyZW50U2xpZGU9citlfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jdXJyZW50U2xpZGUrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPU1hdGgubWluKHRoaXMuY3VycmVudFNsaWRlK2UsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJkaXNhYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZW5hYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZ319LHtrZXk6XCJnb1RvXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO3RoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/ZSV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWluKE1hdGgubWF4KGUsMCksdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLGkhPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQoKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcInNsaWRlVG9DdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLHI9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSppKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKTtlP3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3QuZW5hYmxlVHJhbnNpdGlvbigpLHQuc2xpZGVyRnJhbWUuc3R5bGVbdC50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9KX0pOnRoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9fSx7a2V5OlwidXBkYXRlQWZ0ZXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0odGhpcy5jb25maWcucnRsPy0xOjEpKih0aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYKSx0PU1hdGguYWJzKGUpLGk9dGhpcy5jb25maWcubXVsdGlwbGVEcmFnP01hdGguY2VpbCh0Lyh0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSk6MSxyPWU+MCYmdGhpcy5jdXJyZW50U2xpZGUtaTwwLG49ZTwwJiZ0aGlzLmN1cnJlbnRTbGlkZStpPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlO2U+MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlP3RoaXMucHJldihpKTplPDAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZSYmdGhpcy5uZXh0KGkpLHRoaXMuc2xpZGVUb0N1cnJlbnQocnx8bil9fSx7a2V5OlwicmVzaXplSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgmJih0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2U/MDp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5idWlsZFNsaWRlckZyYW1lKCl9fSx7a2V5OlwiY2xlYXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOnRoaXMuZHJhZy5wcmV2ZW50Q2xpY2t9fX0se2tleTpcInRvdWNoc3RhcnRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS50b3VjaGVzWzBdLnBhZ2VYLHRoaXMuZHJhZy5zdGFydFk9ZS50b3VjaGVzWzBdLnBhZ2VZKX19LHtrZXk6XCJ0b3VjaGVuZEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJ0b3VjaG1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5zdG9wUHJvcGFnYXRpb24oKSxudWxsPT09dGhpcy5kcmFnLmxldEl0R28mJih0aGlzLmRyYWcubGV0SXRHbz1NYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRZLWUudG91Y2hlc1swXS5wYWdlWSk8TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WC1lLnRvdWNoZXNbMF0ucGFnZVgpKSx0aGlzLnBvaW50ZXJEb3duJiZ0aGlzLmRyYWcubGV0SXRHbyl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5lbmRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2Vkb3duSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITAsdGhpcy5kcmFnLnN0YXJ0WD1lLnBhZ2VYKX19LHtrZXk6XCJtb3VzZXVwSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwibW91c2Vtb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSx0aGlzLnBvaW50ZXJEb3duKXtcIkFcIj09PWUudGFyZ2V0Lm5vZGVOYW1lJiYodGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMCksdGhpcy5kcmFnLmVuZFg9ZS5wYWdlWCx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYmJpbmdcIix0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2VsZWF2ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnBvaW50ZXJEb3duJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMSx0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCkpfX0se2tleTpcImNsaWNrSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuZHJhZy5wcmV2ZW50Q2xpY2smJmUucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcucHJldmVudENsaWNrPSExfX0se2tleTpcInJlbW92ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoZTwwfHxlPj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkl0ZW0gdG8gcmVtb3ZlIGRvZXNuJ3QgZXhpc3Qg8J+YrVwiKTt2YXIgaT1lPHRoaXMuY3VycmVudFNsaWRlLHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlLTE9PT1lOyhpfHxyKSYmdGhpcy5jdXJyZW50U2xpZGUtLSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKGUsMSksdGhpcy5idWlsZFNsaWRlckZyYW1lKCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImluc2VydFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxpKXtpZih0PDB8fHQ+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbnNldCBpdCBhdCB0aGlzIGluZGV4IPCfmK1cIik7aWYoLTEhPT10aGlzLmlubmVyRWxlbWVudHMuaW5kZXhPZihlKSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2FtZSBpdGVtIGluIGEgY2Fyb3VzZWw/IFJlYWxseT8gTm9wZSDwn5itXCIpO3ZhciByPXQ8PXRoaXMuY3VycmVudFNsaWRlPjAmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5jdXJyZW50U2xpZGU9cj90aGlzLmN1cnJlbnRTbGlkZSsxOnRoaXMuY3VycmVudFNsaWRlLHRoaXMuaW5uZXJFbGVtZW50cy5zcGxpY2UodCwwLGUpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLGkmJmkuY2FsbCh0aGlzKX19LHtrZXk6XCJwcmVwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLDApLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJhcHBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSx0PWFyZ3VtZW50c1sxXTtpZih0aGlzLmRldGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiYXV0b1wiLGUpe2Zvcih2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscj0wO3I8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtyKyspaS5hcHBlbmRDaGlsZCh0aGlzLmlubmVyRWxlbWVudHNbcl0pO3RoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZChpKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpfXQmJnQuY2FsbCh0aGlzKX19XSxbe2tleTpcIm1lcmdlU2V0dGluZ3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD17c2VsZWN0b3I6XCIuc2llbWFcIixkdXJhdGlvbjoyMDAsZWFzaW5nOlwiZWFzZS1vdXRcIixwZXJQYWdlOjEsc3RhcnRJbmRleDowLGRyYWdnYWJsZTohMCxtdWx0aXBsZURyYWc6ITAsdGhyZXNob2xkOjIwLGxvb3A6ITEscnRsOiExLG9uSW5pdDpmdW5jdGlvbigpe30sb25DaGFuZ2U6ZnVuY3Rpb24oKXt9fSxpPWU7Zm9yKHZhciByIGluIGkpdFtyXT1pW3JdO3JldHVybiB0fX0se2tleTpcIndlYmtpdE9yTm90XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT9cInRyYW5zZm9ybVwiOlwiV2Via2l0VHJhbnNmb3JtXCJ9fV0pLGV9KCk7dC5kZWZhdWx0PWwsZS5leHBvcnRzPXQuZGVmYXVsdH1dKX0pOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBBY2NvcmRpb24gZnJvbSAnYWNjb3JkaW9uLWpzJztcblxudmFyIHRhcmdldGVkQ2xhc3MgICAgPSAnLmFjY29yZGlvbi1jb250YWluZXInO1xudmFyIGFjY29yZGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldGVkQ2xhc3MpO1xuXG5pZiAoYWNjb3JkaW9uRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgbmV3IEFjY29yZGlvbih0YXJnZXRlZENsYXNzKTtcbn1cbiIsImltcG9ydCBlbnF1aXJlIGZyb20gJ2VucXVpcmUtanMnO1xuXG5pZiAoIU9iamVjdC5lbnRyaWVzKSB7XG4gICAgT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbiggb2JqICl7XG4gICAgICAgIHZhciBvd25Qcm9wcyA9IE9iamVjdC5rZXlzKCBvYmogKSxcbiAgICAgICAgICAgIGkgPSBvd25Qcm9wcy5sZW5ndGgsXG4gICAgICAgICAgICByZXNBcnJheSA9IG5ldyBBcnJheShpKTtcbiAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgcmVzQXJyYXlbaV0gPSBbb3duUHJvcHNbaV0sIG9ialtvd25Qcm9wc1tpXV1dO1xuICAgICAgXG4gICAgICAgIHJldHVybiByZXNBcnJheTtcbiAgICB9O1xufVxuXG5sZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcblxuY29uc3QgbWVkaWFRdWVyaWVzID0ge1xuICAgIHNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpJyxcbiAgICBtb2I6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMXB4KScsXG4gICAgdGFiOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCknLFxuICAgIGxhcDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KScsXG4gICAgZGVzOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpJyxcbiAgICBsZzogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KScsXG4gICAgeGw6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCknLFxuICAgIGxhbmRzY2FwZTogJ3NjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgICBwb3RyYWl0OiAnc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSdcbn07XG5cbk9iamVjdC5lbnRyaWVzKG1lZGlhUXVlcmllcykuZm9yRWFjaCgoW2JyZWFrcG9pbnQsIG1lZGlhcXVlcnldKSA9PiBcbiAgICBlbnF1aXJlLnJlZ2lzdGVyKCBtZWRpYXF1ZXJ5LCB7IFxuICAgICAgICBtYXRjaCA6IGZ1bmN0aW9uKCkgeyBodG1sLmNsYXNzTGlzdC5hZGQoIGJyZWFrcG9pbnQgKTsgfSxcbiAgICAgICAgdW5tYXRjaCA6IGZ1bmN0aW9uKCkgeyBodG1sLmNsYXNzTGlzdC5yZW1vdmUoIGJyZWFrcG9pbnQgKTsgfVxuICAgIH0pXG4pO1xuXG4iLCJpbXBvcnQgbGF4IGZyb20gJ2xheC5qcyc7XHJcblxyXG4vLyBMYXggZG9jdW1lbnRhdGlvblxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWxleGZveHkvbGF4LmpzP3V0bV9zb3VyY2U9eGlucXVqaVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdGxheC5zZXR1cCgpIC8vIGluaXRcclxuXHJcblx0Y29uc3QgdXBkYXRlTGF4ID0gKCkgPT4ge1xyXG5cdFx0bGF4LnVwZGF0ZSh3aW5kb3cuc2Nyb2xsWSlcclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlTGF4KVxyXG5cdH1cclxuXHJcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVMYXgpXHJcbn0iLCJpbXBvcnQgbGF6eWxvYWQgZnJvbSAnbGF6eWxvYWQnO1xuXG5uZXcgbGF6eWxvYWQoKTsiLCJpbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcblxuTWljcm9Nb2RhbC5pbml0KHtcbiAgICBvblNob3c6IG1vZGFsID0+IGNvbnNvbGUuaW5mbyhgJHttb2RhbC5pZH0gaXMgc2hvd25gKSwgLy8gWzFdXG4gICAgb25DbG9zZTogbW9kYWwgPT4gY29uc29sZS5pbmZvKGAke21vZGFsLmlkfSBpcyBoaWRkZW5gKSwgLy8gWzJdXG4gICAgb3BlblRyaWdnZXI6ICdkYXRhLWN1c3RvbS1vcGVuJywgLy8gWzNdXG4gICAgY2xvc2VUcmlnZ2VyOiAnZGF0YS1jdXN0b20tY2xvc2UnLCAvLyBbNF1cbiAgICBvcGVuQ2xhc3M6ICdpcy1vcGVuJywgLy8gWzVdXG4gICAgZGlzYWJsZVNjcm9sbDogdHJ1ZSwgLy8gWzZdXG4gICAgZGlzYWJsZUZvY3VzOiBmYWxzZSwgLy8gWzddXG4gICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBmYWxzZSwgLy8gWzhdXG4gICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogZmFsc2UsIC8vIFs5XVxuICAgIGRlYnVnTW9kZTogdHJ1ZSAvLyBbMTBdXG59KTsiLCJjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItbWVudScpO1xuY29uc3QgbW9iaW1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2l2ZS1tZW51Jyk7XG5jb25zdCBzaXRlYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxubGV0IG1haW5tZW51ICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zaXZlLW1lbnUnKTtcbmxldCBjbGFzc05hbWUgICAgPSAnbW9iaW1lbnUnO1xubGV0IHZlcnRpY2FsTWVudSA9ICd2ZXJ0aWNhbF9fbmF2JztcblxuY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJyk7XG5cbmZ1bmN0aW9uIGhhbmRsZVRhYmxldENoYW5nZShlKSB7XG5cdC8vIENoZWNrIGlmIHRoZSBtZWRpYSBxdWVyeSBpcyB0cnVlXG5cdGlmIChlLm1hdGNoZXMpIHtcbiAgXG5cdFx0Ly8gSWYgdGhlIG1lZGlhcXVlcnkgaXMgbGFyZ2VyIHRoYW4gMTAyNHB4XG5cdFx0aWYgKG1haW5tZW51LmNsYXNzTGlzdCkge1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSh2ZXJ0aWNhbE1lbnUpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbm1lbnUnKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWxfX25hdicpO1xuXHRcdH1cbiAgXG5cdH1lbHNle1xuXHRcdFxuXHRcdC8vIElmIHRoZSBtZWRpYXF1ZXJ5IGlzIHNtYWxsZXIgdGhhbiAxMDI0cHhcblx0XHRpZiAobWFpbm1lbnUuY2xhc3NMaXN0KSB7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWlubWVudScpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbF9fbmF2Jyk7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKHZlcnRpY2FsTWVudSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRtYWlubWVudS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lICsgJyAnICsgdmVydGljYWxNZW51O1xuXHRcdH1cblx0ICBcblx0fVxuICBcbn1cblxuLy8gUmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJcbm1lZGlhUXVlcnkuYWRkTGlzdGVuZXIoaGFuZGxlVGFibGV0Q2hhbmdlKTtcblxuLy8gSW5pdGlhbCBjaGVja1xuaGFuZGxlVGFibGV0Q2hhbmdlKG1lZGlhUXVlcnkpO1xuXG5tZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuXHRtb2JpbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2UnKTtcblx0bWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG5cdHNpdGVib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vYmltZW51LWlzLW9wZW4nKTtcbn0pO1xuXG4vLyBDcmVhdGUgc3ViIG1lbnVzXG5mdW5jdGlvbiBjbGlja2VkTWVudSgpe1xuICAgIGlmKHRoaXMucXVlcnlTZWxlY3RvcignLm1vYmltZW51IC5zdWItbWVudScpKXtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3N1Yi1tZW51LWFjdGl2ZScpO1xuICAgIH1cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja2VkTWVudSk7XG59KTsiLCJpbXBvcnQgU2llbWEgZnJvbSAnc2llbWEnO1xuXG52YXIgc2xpZGVzaG93U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVzaG93Jyk7XG52YXIgcHJldmlvdXNTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1wcmV2Jyk7XG52YXIgbmV4dFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLW5leHQnKTtcbnZhciBzbGlkZXNob3cgPSBcIlwiO1xuXG5pZiAoc2xpZGVzaG93U2VsZWN0b3IpIHtcbiAgICBzbGlkZXNob3cgPSBuZXcgU2llbWEoe1xuICAgICAgICBzZWxlY3RvcjogJy5zbGlkZXNob3cnLFxuICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXG4gICAgICAgIHBlclBhZ2U6IDEsXG4gICAgICAgIHN0YXJ0SW5kZXg6IDAsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxuICAgICAgICB0aHJlc2hvbGQ6IDIwLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICBvbkluaXQ6ICgpID0+IHt9LFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgfSk7XG59XG5cbmlmIChwcmV2aW91c1NsaWRlKSB7XG4gICAgcHJldmlvdXNTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNsaWRlc2hvdy5wcmV2KCkpO1xufVxuXG5pZiAobmV4dFNsaWRlKSB7XG4gICAgbmV4dFNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2xpZGVzaG93Lm5leHQoKSk7XG59XG5cbi8vaHR0cHM6Ly9jb2RlcGVuLmlvL2NvbGxlY3Rpb24vQWRwa2tkLz9jdXJzb3I9WkQweEptODlNQ1p3UFRFbWRqMHhNREl5TkRVMCIsImltcG9ydCAnLi9mdW5jdGlvbi5ib2R5Y2xhc3Nlcy5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb24uc2xpZGVzaG93LmpzJzsgXG5pbXBvcnQgJy4vZnVuY3Rpb24ub2ZmY2FudmFzLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbi5sYXp5bG9hZC5qcyc7IFxuaW1wb3J0ICcuL2Z1bmN0aW9uLm1vZGFsLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbi5hY2NvcmRpb24uanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uLmxheC5qcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==