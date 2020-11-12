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

/***/ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js":
/*!**************************************************************************!*\
  !*** ./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */

/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  "use strict";

  var ScrollMagic = function ScrollMagic() {
    _util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
  };

  ScrollMagic.version = "2.0.8"; // TODO: temporary workaround for chrome's scroll jitter bug

  if (typeof window !== 'undefined') {
    window.addEventListener("mousewheel", void 0);
  } // global const


  var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";
  /**
   * The main class that is needed once per scroll container.
   *
   * @class
   *
   * @example
   * // basic initialization
   * var controller = new ScrollMagic.Controller();
   *
   * // passing options
   * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
   *
   * @param {object} [options] - An object containing one or more options for the controller.
   * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
   * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
   * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
   * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
  										 ** `0` => silent
  										 ** `1` => errors
  										 ** `2` => errors, warnings
  										 ** `3` => errors, warnings, debuginfo
   * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
   																										 This interval polls these parameters to fire the necessary events.  
   																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
   *
   */

  ScrollMagic.Controller = function (options) {
    /*
     * ----------------------------------------------------------------
     * settings
     * ----------------------------------------------------------------
     */
    var NAMESPACE = 'ScrollMagic.Controller',
        SCROLL_DIRECTION_FORWARD = 'FORWARD',
        SCROLL_DIRECTION_REVERSE = 'REVERSE',
        SCROLL_DIRECTION_PAUSED = 'PAUSED',
        DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;
    /*
     * ----------------------------------------------------------------
     * private vars
     * ----------------------------------------------------------------
     */

    var Controller = this,
        _options = _util.extend({}, DEFAULT_OPTIONS, options),
        _sceneObjects = [],
        _updateScenesOnNextCycle = false,
        // can be boolean (true => all scenes) or an array of scenes to be updated
    _scrollPos = 0,
        _scrollDirection = SCROLL_DIRECTION_PAUSED,
        _isDocument = true,
        _viewPortSize = 0,
        _enabled = true,
        _updateTimeout,
        _refreshTimeout;
    /*
     * ----------------------------------------------------------------
     * private functions
     * ----------------------------------------------------------------
     */

    /**
     * Internal constructor function of the ScrollMagic Controller
     * @private
     */


    var construct = function construct() {
      for (var key in _options) {
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          log(2, "WARNING: Unknown option \"" + key + "\"");
          delete _options[key];
        }
      }

      _options.container = _util.get.elements(_options.container)[0]; // check ScrollContainer

      if (!_options.container) {
        log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
        throw NAMESPACE + " init failed."; // cancel
      }

      _isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container); // normalize to window

      if (_isDocument) {
        _options.container = window;
      } // update container size immediately


      _viewPortSize = getViewportSize(); // set event handlers

      _options.container.addEventListener("resize", onChange);

      _options.container.addEventListener("scroll", onChange);

      var ri = parseInt(_options.refreshInterval, 10);
      _options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
      scheduleRefresh();
      log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
    };
    /**
     * Schedule the next execution of the refresh function
     * @private
     */


    var scheduleRefresh = function scheduleRefresh() {
      if (_options.refreshInterval > 0) {
        _refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
      }
    };
    /**
     * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
     * @private
     */


    var getScrollPos = function getScrollPos() {
      return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
    };
    /**
     * Returns the current viewport Size (width vor horizontal, height for vertical)
     * @private
     */


    var getViewportSize = function getViewportSize() {
      return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
    };
    /**
     * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
     * Make available publicly for pinned mousewheel workaround.
     * @private
     */


    var setScrollPos = this._setScrollPos = function (pos) {
      if (_options.vertical) {
        if (_isDocument) {
          window.scrollTo(_util.get.scrollLeft(), pos);
        } else {
          _options.container.scrollTop = pos;
        }
      } else {
        if (_isDocument) {
          window.scrollTo(pos, _util.get.scrollTop());
        } else {
          _options.container.scrollLeft = pos;
        }
      }
    };
    /**
     * Handle updates in cycles instead of on scroll (performance)
     * @private
     */


    var updateScenes = function updateScenes() {
      if (_enabled && _updateScenesOnNextCycle) {
        // determine scenes to update
        var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0); // reset scenes

        _updateScenesOnNextCycle = false;
        var oldScrollPos = _scrollPos; // update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)

        _scrollPos = Controller.scrollPos();
        var deltaScroll = _scrollPos - oldScrollPos;

        if (deltaScroll !== 0) {
          // scroll position changed?
          _scrollDirection = deltaScroll > 0 ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
        } // reverse order of scenes if scrolling reverse


        if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
          scenesToUpdate.reverse();
        } // update scenes


        scenesToUpdate.forEach(function (scene, index) {
          log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
          scene.update(true);
        });

        if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
          log(3, "updating 0 Scenes (nothing added to controller)");
        }
      }
    };
    /**
     * Initializes rAF callback
     * @private
     */


    var debounceUpdate = function debounceUpdate() {
      _updateTimeout = _util.rAF(updateScenes);
    };
    /**
     * Handles Container changes
     * @private
     */


    var onChange = function onChange(e) {
      log(3, "event fired causing an update:", e.type);

      if (e.type == "resize") {
        // resize
        _viewPortSize = getViewportSize();
        _scrollDirection = SCROLL_DIRECTION_PAUSED;
      } // schedule update


      if (_updateScenesOnNextCycle !== true) {
        _updateScenesOnNextCycle = true;
        debounceUpdate();
      }
    };

    var refresh = function refresh() {
      if (!_isDocument) {
        // simulate resize event. Only works for viewport relevant param (performance)
        if (_viewPortSize != getViewportSize()) {
          var resizeEvent;

          try {
            resizeEvent = new Event('resize', {
              bubbles: false,
              cancelable: false
            });
          } catch (e) {
            // stupid IE
            resizeEvent = document.createEvent("Event");
            resizeEvent.initEvent("resize", false, false);
          }

          _options.container.dispatchEvent(resizeEvent);
        }
      }

      _sceneObjects.forEach(function (scene, index) {
        // refresh all scenes
        scene.refresh();
      });

      scheduleRefresh();
    };
    /**
     * Send a debug message to the console.
     * provided publicly with _log for plugins
     * @private
     *
     * @param {number} loglevel - The loglevel required to initiate output for the message.
     * @param {...mixed} output - One or more variables that should be passed to the console.
     */


    var log = this._log = function (loglevel, output) {
      if (_options.loglevel >= loglevel) {
        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");

        _util.log.apply(window, arguments);
      }
    }; // for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins


    this._options = _options;
    /**
     * Sort scenes in ascending order of their start offset.
     * @private
     *
     * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
     * @return {array} The sorted array of Scenes.
     */

    var sortScenes = function sortScenes(ScenesArray) {
      if (ScenesArray.length <= 1) {
        return ScenesArray;
      } else {
        var scenes = ScenesArray.slice(0);
        scenes.sort(function (a, b) {
          return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
        });
        return scenes;
      }
    };
    /**
     * ----------------------------------------------------------------
     * public functions
     * ----------------------------------------------------------------
     */

    /**
     * Add one ore more scene(s) to the controller.  
     * This is the equivalent to `Scene.addTo(controller)`.
     * @public
     * @example
     * // with a previously defined scene
     * controller.addScene(scene);
     *
     * // with a newly created scene.
     * controller.addScene(new ScrollMagic.Scene({duration : 0}));
     *
     * // adding multiple scenes
     * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
     *
     * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
     * @return {Controller} Parent object for chaining.
     */


    this.addScene = function (newScene) {
      if (_util.type.Array(newScene)) {
        newScene.forEach(function (scene, index) {
          Controller.addScene(scene);
        });
      } else if (newScene instanceof ScrollMagic.Scene) {
        if (newScene.controller() !== Controller) {
          newScene.addTo(Controller);
        } else if (_sceneObjects.indexOf(newScene) < 0) {
          // new scene
          _sceneObjects.push(newScene); // add to array


          _sceneObjects = sortScenes(_sceneObjects); // sort

          newScene.on("shift.controller_sort", function () {
            // resort whenever scene moves
            _sceneObjects = sortScenes(_sceneObjects);
          }); // insert Global defaults.

          for (var key in _options.globalSceneOptions) {
            if (newScene[key]) {
              newScene[key].call(newScene, _options.globalSceneOptions[key]);
            }
          }

          log(3, "adding Scene (now " + _sceneObjects.length + " total)");
        }
      } else {
        log(1, "ERROR: invalid argument supplied for '.addScene()'");
      }

      return Controller;
    };
    /**
     * Remove one ore more scene(s) from the controller.  
     * This is the equivalent to `Scene.remove()`.
     * @public
     * @example
     * // remove a scene from the controller
     * controller.removeScene(scene);
     *
     * // remove multiple scenes from the controller
     * controller.removeScene([scene, scene2, scene3]);
     *
     * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
     * @returns {Controller} Parent object for chaining.
     */


    this.removeScene = function (Scene) {
      if (_util.type.Array(Scene)) {
        Scene.forEach(function (scene, index) {
          Controller.removeScene(scene);
        });
      } else {
        var index = _sceneObjects.indexOf(Scene);

        if (index > -1) {
          Scene.off("shift.controller_sort");

          _sceneObjects.splice(index, 1);

          log(3, "removing Scene (now " + _sceneObjects.length + " left)");
          Scene.remove();
        }
      }

      return Controller;
    };
    /**
    * Update one ore more scene(s) according to the scroll position of the container.  
    * This is the equivalent to `Scene.update()`.  
    * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
    * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
    * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
    * @public
    * @example
    * // update a specific scene on next cycle
     * controller.updateScene(scene);
     *
    * // update a specific scene immediately
    * controller.updateScene(scene, true);
     *
    * // update multiple scenes scene on next cycle
    * controller.updateScene([scene1, scene2, scene3]);
    *
    * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
    * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
    										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
    * @return {Controller} Parent object for chaining.
    */


    this.updateScene = function (Scene, immediately) {
      if (_util.type.Array(Scene)) {
        Scene.forEach(function (scene, index) {
          Controller.updateScene(scene, immediately);
        });
      } else {
        if (immediately) {
          Scene.update(true);
        } else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) {
          // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
          // prep array for next update cycle
          _updateScenesOnNextCycle = _updateScenesOnNextCycle || [];

          if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
            _updateScenesOnNextCycle.push(Scene);
          }

          _updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort

          debounceUpdate();
        }
      }

      return Controller;
    };
    /**
     * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
     * See `Controller.updateScene()` for more information about what this means.  
     * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
     * The only application for this method is when ScrollMagic fails to detect these events.  
     * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
     * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
     * @public
     * @example
     * // update the controller on next cycle (saves performance due to elimination of redundant updates)
     * controller.update();
     *
     * // update the controller immediately
     * controller.update(true);
     *
     * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
     * @return {Controller} Parent object for chaining.
     */


    this.update = function (immediately) {
      onChange({
        type: "resize"
      }); // will update size and set _updateScenesOnNextCycle to true

      if (immediately) {
        updateScenes();
      }

      return Controller;
    };
    /**
     * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
     * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
     * @public
     *
     * @since 1.1.0
     * @example
     * // scroll to an offset of 100
     * controller.scrollTo(100);
     *
     * // scroll to a DOM element
     * controller.scrollTo("#anchor");
     *
     * // scroll to the beginning of a scene
     * var scene = new ScrollMagic.Scene({offset: 200});
     * controller.scrollTo(scene);
     *
     * // define a new scroll position modification function (jQuery animate instead of jump)
     * controller.scrollTo(function (newScrollPos) {
     *	$("html, body").animate({scrollTop: newScrollPos});
     * });
     * controller.scrollTo(100); // call as usual, but the new function will be used instead
     *
     * // define a new scroll function with an additional parameter
     * controller.scrollTo(function (newScrollPos, message) {
     *  console.log(message);
     *	$(this).animate({scrollTop: newScrollPos});
     * });
     * // call as usual, but supply an extra parameter to the defined custom function
     * controller.scrollTo(100, "my message");
     *
     * // define a new scroll function with an additional parameter containing multiple variables
     * controller.scrollTo(function (newScrollPos, options) {
     *  someGlobalVar = options.a + options.b;
     *	$(this).animate({scrollTop: newScrollPos});
     * });
     * // call as usual, but supply an extra parameter containing multiple options
     * controller.scrollTo(100, {a: 1, b: 2});
     *
     * // define a new scroll function with a callback supplied as an additional parameter
     * controller.scrollTo(function (newScrollPos, callback) {
     *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
     * });
     * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
     * controller.scrollTo(100, function() {
     *	console.log("scroll has finished.");
     * });
     *
     * @param {mixed} scrollTarget - The supplied argument can be one of these types:
     * 1. `number` -> The container will scroll to this new scroll offset.
     * 2. `string` or `object` -> Can be a selector or a DOM object.  
     *  The container will scroll to the position of this element.
     * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
     * 4. `function` -> This function will be used for future scroll position modifications.  
     *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
     *  It may also optionally receive an optional additional parameter (see below)  
     *  _**NOTE:**  
     *  All other options will still work as expected, using the new function to scroll._
     * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
     * @returns {Controller} Parent object for chaining.
     */


    this.scrollTo = function (scrollTarget, additionalParameter) {
      if (_util.type.Number(scrollTarget)) {
        // excecute
        setScrollPos.call(_options.container, scrollTarget, additionalParameter);
      } else if (scrollTarget instanceof ScrollMagic.Scene) {
        // scroll to scene
        if (scrollTarget.controller() === Controller) {
          // check if the controller is associated with this scene
          Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
        } else {
          log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
        }
      } else if (_util.type.Function(scrollTarget)) {
        // assign new scroll function
        setScrollPos = scrollTarget;
      } else {
        // scroll to element
        var elem = _util.get.elements(scrollTarget)[0];

        if (elem) {
          // if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
          while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
            elem = elem.parentNode;
          }

          var param = _options.vertical ? "top" : "left",
              // which param is of interest ?
          containerOffset = _util.get.offset(_options.container),
              // container position is needed because element offset is returned in relation to document, not in relation to container.
          elementOffset = _util.get.offset(elem);

          if (!_isDocument) {
            // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
            containerOffset[param] -= Controller.scrollPos();
          }

          Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
        } else {
          log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
        }
      }

      return Controller;
    };
    /**
     * **Get** the current scrollPosition or **Set** a new method to calculate it.  
     * -> **GET**:
     * When used as a getter this function will return the current scroll position.  
     * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
     * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
     *
     * -> **SET**:
     * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
     * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
     * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
     * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
     * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
     *
     * To change the current scroll position please use `Controller.scrollTo()`.
     * @public
     *
     * @example
     * // get the current scroll Position
     * var scrollPos = controller.scrollPos();
     *
     * // set a new scroll position calculation method
     * controller.scrollPos(function () {
     *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
     * });
     *
     * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
     * @returns {(number|Controller)} Current scroll position or parent object for chaining.
     */


    this.scrollPos = function (scrollPosMethod) {
      if (!arguments.length) {
        // get
        return getScrollPos.call(Controller);
      } else {
        // set
        if (_util.type.Function(scrollPosMethod)) {
          getScrollPos = scrollPosMethod;
        } else {
          log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
        }
      }

      return Controller;
    };
    /**
     * **Get** all infos or one in particular about the controller.
     * @public
     * @example
     * // returns the current scroll position (number)
     * var scrollPos = controller.info("scrollPos");
     *
     * // returns all infos as an object
     * var infos = controller.info();
     *
     * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
     							 Valid options are:
     							 ** `"size"` => the current viewport size of the container
     							 ** `"vertical"` => true if vertical scrolling, otherwise false
     							 ** `"scrollPos"` => the current scroll position
     							 ** `"scrollDirection"` => the last known direction of the scroll
     							 ** `"container"` => the container element
     							 ** `"isDocument"` => true if container element is the document.
     * @returns {(mixed|object)} The requested info(s).
     */


    this.info = function (about) {
      var values = {
        size: _viewPortSize,
        // contains height or width (in regard to orientation);
        vertical: _options.vertical,
        scrollPos: _scrollPos,
        scrollDirection: _scrollDirection,
        container: _options.container,
        isDocument: _isDocument
      };

      if (!arguments.length) {
        // get all as an object
        return values;
      } else if (values[about] !== undefined) {
        return values[about];
      } else {
        log(1, "ERROR: option \"" + about + "\" is not available");
        return;
      }
    };
    /**
     * **Get** or **Set** the current loglevel option value.
     * @public
     *
     * @example
     * // get the current value
     * var loglevel = controller.loglevel();
     *
     * // set a new value
     * controller.loglevel(3);
     *
     * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
     * @returns {(number|Controller)} Current loglevel or parent object for chaining.
     */


    this.loglevel = function (newLoglevel) {
      if (!arguments.length) {
        // get
        return _options.loglevel;
      } else if (_options.loglevel != newLoglevel) {
        // set
        _options.loglevel = newLoglevel;
      }

      return Controller;
    };
    /**
     * **Get** or **Set** the current enabled state of the controller.  
     * This can be used to disable all Scenes connected to the controller without destroying or removing them.
     * @public
     *
     * @example
     * // get the current value
     * var enabled = controller.enabled();
     *
     * // disable the controller
     * controller.enabled(false);
     *
     * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
     * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
     */


    this.enabled = function (newState) {
      if (!arguments.length) {
        // get
        return _enabled;
      } else if (_enabled != newState) {
        // set
        _enabled = !!newState;
        Controller.updateScene(_sceneObjects, true);
      }

      return Controller;
    };
    /**
     * Destroy the Controller, all Scenes and everything.
     * @public
     *
     * @example
     * // without resetting the scenes
     * controller = controller.destroy();
     *
     * // with scene reset
     * controller = controller.destroy(true);
     *
     * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
     * @returns {null} Null to unset handler variables.
     */


    this.destroy = function (resetScenes) {
      window.clearTimeout(_refreshTimeout);
      var i = _sceneObjects.length;

      while (i--) {
        _sceneObjects[i].destroy(resetScenes);
      }

      _options.container.removeEventListener("resize", onChange);

      _options.container.removeEventListener("scroll", onChange);

      _util.cAF(_updateTimeout);

      log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
      return null;
    }; // INIT


    construct();
    return Controller;
  }; // store pagewide controller options


  var CONTROLLER_OPTIONS = {
    defaults: {
      container: window,
      vertical: true,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100
    }
  };
  /*
   * method used to add an option to ScrollMagic Scenes.
   */

  ScrollMagic.Controller.addOption = function (name, defaultValue) {
    CONTROLLER_OPTIONS.defaults[name] = defaultValue;
  }; // instance extension function for plugins


  ScrollMagic.Controller.extend = function (extension) {
    var oldClass = this;

    ScrollMagic.Controller = function () {
      oldClass.apply(this, arguments);
      this.$super = _util.extend({}, this); // copy parent state

      return extension.apply(this, arguments) || this;
    };

    _util.extend(ScrollMagic.Controller, oldClass); // copy properties


    ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype

    ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
  };
  /**
   * A Scene defines where the controller should react and how.
   *
   * @class
   *
   * @example
   * // create a standard scene and add it to a controller
   * new ScrollMagic.Scene()
   *		.addTo(controller);
   *
   * // create a scene with custom options and assign a handler to it.
   * var scene = new ScrollMagic.Scene({
   * 		duration: 100,
   *		offset: 200,
   *		triggerHook: "onEnter",
   *		reverse: false
   * });
   *
   * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
   							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
   							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
   * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
   					Please see `Scene.duration()` for details.
   * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
   * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
   * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
   															  Can also be defined using a string:
   															  ** `"onEnter"` => `1`
   															  ** `"onCenter"` => `0.5`
   															  ** `"onLeave"` => `0`
   * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
   * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
   										  ** `0` => silent
   										  ** `1` => errors
   										  ** `2` => errors, warnings
   										  ** `3` => errors, warnings, debuginfo
   * 
   */


  ScrollMagic.Scene = function (options) {
    /*
     * ----------------------------------------------------------------
     * settings
     * ----------------------------------------------------------------
     */
    var NAMESPACE = 'ScrollMagic.Scene',
        SCENE_STATE_BEFORE = 'BEFORE',
        SCENE_STATE_DURING = 'DURING',
        SCENE_STATE_AFTER = 'AFTER',
        DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;
    /*
     * ----------------------------------------------------------------
     * private vars
     * ----------------------------------------------------------------
     */

    var Scene = this,
        _options = _util.extend({}, DEFAULT_OPTIONS, options),
        _state = SCENE_STATE_BEFORE,
        _progress = 0,
        _scrollOffset = {
      start: 0,
      end: 0
    },
        // reflects the controllers's scroll position for the start and end of the scene respectively
    _triggerPos = 0,
        _enabled = true,
        _durationUpdateMethod,
        _controller;
    /**
     * Internal constructor function of the ScrollMagic Scene
     * @private
     */


    var construct = function construct() {
      for (var key in _options) {
        // check supplied options
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          log(2, "WARNING: Unknown option \"" + key + "\"");
          delete _options[key];
        }
      } // add getters/setters for all possible options


      for (var optionName in DEFAULT_OPTIONS) {
        addSceneOption(optionName);
      } // validate all options


      validateOption();
    };
    /*
     * ----------------------------------------------------------------
     * Event Management
     * ----------------------------------------------------------------
     */


    var _listeners = {};
    /**
     * Scene start event.  
     * Fires whenever the scroll position its the starting point of the scene.  
     * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#start
     *
     * @example
     * scene.on("start", function (event) {
     * 	console.log("Hit start point of scene.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */

    /**
     * Scene end event.  
     * Fires whenever the scroll position its the ending point of the scene.  
     * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#end
     *
     * @example
     * scene.on("end", function (event) {
     * 	console.log("Hit end point of scene.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */

    /**
     * Scene enter event.  
     * Fires whenever the scene enters the "DURING" state.  
     * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#enter
     *
     * @example
     * scene.on("enter", function (event) {
     * 	console.log("Scene entered.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene - always `"DURING"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */

    /**
     * Scene leave event.  
     * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
     * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#leave
     *
     * @example
     * scene.on("leave", function (event) {
     * 	console.log("Scene left.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */

    /**
     * Scene update event.  
     * Fires whenever the scene is updated (but not necessarily changes the progress).
     *
     * @event ScrollMagic.Scene#update
     *
     * @example
     * scene.on("update", function (event) {
     * 	console.log("Scene updated.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
     * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
     * @property {number} event.scrollPos - The current scroll position of the container
     */

    /**
     * Scene progress event.  
     * Fires whenever the progress of the scene changes.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#progress
     *
     * @example
     * scene.on("progress", function (event) {
     * 	console.log("Scene progress changed to " + event.progress);
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */

    /**
     * Scene change event.  
     * Fires whenvever a property of the scene is changed.
     *
     * @event ScrollMagic.Scene#change
     *
     * @example
     * scene.on("change", function (event) {
     * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {string} event.what - Indicates what value has been changed
     * @property {mixed} event.newval - The new value of the changed property
     */

    /**
     * Scene shift event.  
     * Fires whenvever the start or end **scroll offset** of the scene change.
     * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
     * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
     * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
     *
     * @event ScrollMagic.Scene#shift
     * @since 1.1.0
     *
     * @example
     * scene.on("shift", function (event) {
     * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {string} event.reason - Indicates why the scene has shifted
     */

    /**
     * Scene destroy event.  
     * Fires whenvever the scene is destroyed.
     * This can be used to tidy up custom behaviour used in events.
     *
     * @event ScrollMagic.Scene#destroy
     * @since 1.1.0
     *
     * @example
     * scene.on("enter", function (event) {
     *        // add custom action
     *        $("#my-elem").left("200");
     *      })
     *      .on("destroy", function (event) {
     *        // reset my element to start position
     *        if (event.reset) {
     *          $("#my-elem").left("0");
     *        }
     *      });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
     */

    /**
     * Scene add event.  
     * Fires when the scene is added to a controller.
     * This is mostly used by plugins to know that change might be due.
     *
     * @event ScrollMagic.Scene#add
     * @since 2.0.0
     *
     * @example
     * scene.on("add", function (event) {
     * 	console.log('Scene was added to a new controller.');
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {boolean} event.controller - The controller object the scene was added to.
     */

    /**
     * Scene remove event.  
     * Fires when the scene is removed from a controller.
     * This is mostly used by plugins to know that change might be due.
     *
     * @event ScrollMagic.Scene#remove
     * @since 2.0.0
     *
     * @example
     * scene.on("remove", function (event) {
     * 	console.log('Scene was removed from its controller.');
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     */

    /**
     * Add one ore more event listener.  
     * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
     * @method ScrollMagic.Scene#on
     *
     * @example
     * function callback (event) {
     * 		console.log("Event fired! (" + event.type + ")");
     * }
     * // add listeners
     * scene.on("change update progress start end enter leave", callback);
     *
     * @param {string} names - The name or names of the event the callback should be attached to.
     * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
     * @returns {Scene} Parent object for chaining.
     */

    this.on = function (names, callback) {
      if (_util.type.Function(callback)) {
        names = names.trim().split(' ');
        names.forEach(function (fullname) {
          var nameparts = fullname.split('.'),
              eventname = nameparts[0],
              namespace = nameparts[1];

          if (eventname != "*") {
            // disallow wildcards
            if (!_listeners[eventname]) {
              _listeners[eventname] = [];
            }

            _listeners[eventname].push({
              namespace: namespace || '',
              callback: callback
            });
          }
        });
      } else {
        log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
      }

      return Scene;
    };
    /**
     * Remove one or more event listener.
     * @method ScrollMagic.Scene#off
     *
     * @example
     * function callback (event) {
     * 		console.log("Event fired! (" + event.type + ")");
     * }
     * // add listeners
     * scene.on("change update", callback);
     * // remove listeners
     * scene.off("change update", callback);
     *
     * @param {string} names - The name or names of the event that should be removed.
     * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
     * @returns {Scene} Parent object for chaining.
     */


    this.off = function (names, callback) {
      if (!names) {
        log(1, "ERROR: Invalid event name supplied.");
        return Scene;
      }

      names = names.trim().split(' ');
      names.forEach(function (fullname, key) {
        var nameparts = fullname.split('.'),
            eventname = nameparts[0],
            namespace = nameparts[1] || '',
            removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
        removeList.forEach(function (remove) {
          var list = _listeners[remove] || [],
              i = list.length;

          while (i--) {
            var listener = list[i];

            if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
              list.splice(i, 1);
            }
          }

          if (!list.length) {
            delete _listeners[remove];
          }
        });
      });
      return Scene;
    };
    /**
     * Trigger an event.
     * @method ScrollMagic.Scene#trigger
     *
     * @example
     * this.trigger("change");
     *
     * @param {string} name - The name of the event that should be triggered.
     * @param {object} [vars] - An object containing info that should be passed to the callback.
     * @returns {Scene} Parent object for chaining.
     */


    this.trigger = function (name, vars) {
      if (name) {
        var nameparts = name.trim().split('.'),
            eventname = nameparts[0],
            namespace = nameparts[1],
            listeners = _listeners[eventname];
        log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');

        if (listeners) {
          listeners.forEach(function (listener, key) {
            if (!namespace || namespace === listener.namespace) {
              listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
            }
          });
        }
      } else {
        log(1, "ERROR: Invalid event name supplied.");
      }

      return Scene;
    }; // set event listeners


    Scene.on("change.internal", function (e) {
      if (e.what !== "loglevel" && e.what !== "tweenChanges") {
        // no need for a scene update scene with these options...
        if (e.what === "triggerElement") {
          updateTriggerElementPosition();
        } else if (e.what === "reverse") {
          // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
          Scene.update();
        }
      }
    }).on("shift.internal", function (e) {
      updateScrollOffset();
      Scene.update(); // update scene to reflect new position
    });
    /**
     * Send a debug message to the console.
     * @private
     * but provided publicly with _log for plugins
     *
     * @param {number} loglevel - The loglevel required to initiate output for the message.
     * @param {...mixed} output - One or more variables that should be passed to the console.
     */

    var log = this._log = function (loglevel, output) {
      if (_options.loglevel >= loglevel) {
        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");

        _util.log.apply(window, arguments);
      }
    };
    /**
     * Add the scene to a controller.  
     * This is the equivalent to `Controller.addScene(scene)`.
     * @method ScrollMagic.Scene#addTo
     *
     * @example
     * // add a scene to a ScrollMagic Controller
     * scene.addTo(controller);
     *
     * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
     * @returns {Scene} Parent object for chaining.
     */


    this.addTo = function (controller) {
      if (!(controller instanceof ScrollMagic.Controller)) {
        log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
      } else if (_controller != controller) {
        // new controller
        if (_controller) {
          // was associated to a different controller before, so remove it...
          _controller.removeScene(Scene);
        }

        _controller = controller;
        validateOption();
        updateDuration(true);
        updateTriggerElementPosition(true);
        updateScrollOffset();

        _controller.info("container").addEventListener('resize', onContainerResize);

        controller.addScene(Scene);
        Scene.trigger("add", {
          controller: _controller
        });
        log(3, "added " + NAMESPACE + " to controller");
        Scene.update();
      }

      return Scene;
    };
    /**
     * **Get** or **Set** the current enabled state of the scene.  
     * This can be used to disable this scene without removing or destroying it.
     * @method ScrollMagic.Scene#enabled
     *
     * @example
     * // get the current value
     * var enabled = scene.enabled();
     *
     * // disable the scene
     * scene.enabled(false);
     *
     * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
     * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
     */


    this.enabled = function (newState) {
      if (!arguments.length) {
        // get
        return _enabled;
      } else if (_enabled != newState) {
        // set
        _enabled = !!newState;
        Scene.update(true);
      }

      return Scene;
    };
    /**
     * Remove the scene from the controller.  
     * This is the equivalent to `Controller.removeScene(scene)`.
     * The scene will not be updated anymore until you readd it to a controller.
     * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
     * @method ScrollMagic.Scene#remove
     * @example
     * // remove the scene from its controller
     * scene.remove();
     *
     * @returns {Scene} Parent object for chaining.
     */


    this.remove = function () {
      if (_controller) {
        _controller.info("container").removeEventListener('resize', onContainerResize);

        var tmpParent = _controller;
        _controller = undefined;
        tmpParent.removeScene(Scene);
        Scene.trigger("remove");
        log(3, "removed " + NAMESPACE + " from controller");
      }

      return Scene;
    };
    /**
     * Destroy the scene and everything.
     * @method ScrollMagic.Scene#destroy
     * @example
     * // destroy the scene without resetting the pin and tween to their initial positions
     * scene = scene.destroy();
     *
     * // destroy the scene and reset the pin and tween
     * scene = scene.destroy(true);
     *
     * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
     * @returns {null} Null to unset handler variables.
     */


    this.destroy = function (reset) {
      Scene.trigger("destroy", {
        reset: reset
      });
      Scene.remove();
      Scene.off("*.*");
      log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
      return null;
    };
    /**
     * Updates the Scene to reflect the current state.  
     * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
     * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
     * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
     * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
     * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
     * @method ScrollMagic.Scene#update
     * @example
     * // update the scene on next tick
     * scene.update();
     *
     * // update the scene immediately
     * scene.update(true);
     *
     * @fires Scene.update
     *
     * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
     * @returns {Scene} Parent object for chaining.
     */


    this.update = function (immediately) {
      if (_controller) {
        if (immediately) {
          if (_controller.enabled() && _enabled) {
            var scrollPos = _controller.info("scrollPos"),
                newProgress;

            if (_options.duration > 0) {
              newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
            } else {
              newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
            }

            Scene.trigger("update", {
              startPos: _scrollOffset.start,
              endPos: _scrollOffset.end,
              scrollPos: scrollPos
            });
            Scene.progress(newProgress);
          } else if (_pin && _state === SCENE_STATE_DURING) {
            updatePinState(true); // unpin in position
          }
        } else {
          _controller.updateScene(Scene, false);
        }
      }

      return Scene;
    };
    /**
     * Updates dynamic scene variables like the trigger element position or the duration.
     * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
     * 
     * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
     * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
     *
     * @method ScrollMagic.Scene#refresh
     * @since 1.1.0
     * @example
     * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
     * 
     * // change the position of the trigger
     * $("#trigger").css("top", 500);
     * // immediately let the scene know of this change
     * scene.refresh();
     *
     * @fires {@link Scene.shift}, if the trigger element position or the duration changed
     * @fires {@link Scene.change}, if the duration changed
     *
     * @returns {Scene} Parent object for chaining.
     */


    this.refresh = function () {
      updateDuration();
      updateTriggerElementPosition(); // update trigger element position

      return Scene;
    };
    /**
     * **Get** or **Set** the scene's progress.  
     * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
     * The order in which the events are fired depends on the duration of the scene:
     *  1. Scenes with `duration == 0`:  
     *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
     *  When the trigger position of the scene is passed the events are always fired in this order:  
     *  `enter`, `start`, `progress` when scrolling forward  
     *  and  
     *  `progress`, `start`, `leave` when scrolling in reverse
     *  2. Scenes with `duration > 0`:  
     *  Scenes with a set duration have a defined start and end point.  
     *  When scrolling past the start position of the scene it will fire these events in this order:  
     *  `enter`, `start`, `progress`  
     *  When continuing to scroll and passing the end point it will fire these events:  
     *  `progress`, `end`, `leave`  
     *  When reversing through the end point these events are fired:  
     *  `enter`, `end`, `progress`  
     *  And when continuing to scroll past the start position in reverse it will fire:  
     *  `progress`, `start`, `leave`  
     *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
     * 
     * In short:  
     * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
     * `start` and `end` will always trigger at their respective position.
     * 
     * Please review the event descriptions for details on the events and the event object that is passed to the callback.
     * 
     * @method ScrollMagic.Scene#progress
     * @example
     * // get the current scene progress
     * var progress = scene.progress();
     *
     * // set new scene progress
     * scene.progress(0.3);
     *
     * @fires {@link Scene.enter}, when used as setter
     * @fires {@link Scene.start}, when used as setter
     * @fires {@link Scene.progress}, when used as setter
     * @fires {@link Scene.end}, when used as setter
     * @fires {@link Scene.leave}, when used as setter
     *
     * @param {number} [progress] - The new progress value of the scene `[0-1]`.
     * @returns {number} `get` -  Current scene progress.
     * @returns {Scene} `set` -  Parent object for chaining.
     */


    this.progress = function (progress) {
      if (!arguments.length) {
        // get
        return _progress;
      } else {
        // set
        var doUpdate = false,
            oldState = _state,
            scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
            reverseOrForward = _options.reverse || progress >= _progress;

        if (_options.duration === 0) {
          // zero duration scenes
          doUpdate = _progress != progress;
          _progress = progress < 1 && reverseOrForward ? 0 : 1;
          _state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
        } else {
          // scenes with start and end
          if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
            // go back to initial state
            _progress = 0;
            _state = SCENE_STATE_BEFORE;
            doUpdate = true;
          } else if (progress >= 0 && progress < 1 && reverseOrForward) {
            _progress = progress;
            _state = SCENE_STATE_DURING;
            doUpdate = true;
          } else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
            _progress = 1;
            _state = SCENE_STATE_AFTER;
            doUpdate = true;
          } else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
            updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
          }
        }

        if (doUpdate) {
          // fire events
          var eventVars = {
            progress: _progress,
            state: _state,
            scrollDirection: scrollDirection
          },
              stateChanged = _state != oldState;

          var trigger = function trigger(eventName) {
            // tmp helper to simplify code
            Scene.trigger(eventName, eventVars);
          };

          if (stateChanged) {
            // enter events
            if (oldState !== SCENE_STATE_DURING) {
              trigger("enter");
              trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
            }
          }

          trigger("progress");

          if (stateChanged) {
            // leave events
            if (_state !== SCENE_STATE_DURING) {
              trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
              trigger("leave");
            }
          }
        }

        return Scene;
      }
    };
    /**
     * Update the start and end scrollOffset of the container.
     * The positions reflect what the controller's scroll position will be at the start and end respectively.
     * Is called, when:
     *   - Scene event "change" is called with: offset, triggerHook, duration 
     *   - scroll container event "resize" is called
     *   - the position of the triggerElement changes
     *   - the controller changes -> addTo()
     * @private
     */


    var updateScrollOffset = function updateScrollOffset() {
      _scrollOffset = {
        start: _triggerPos + _options.offset
      };

      if (_controller && _options.triggerElement) {
        // take away triggerHook portion to get relative to top
        _scrollOffset.start -= _controller.info("size") * _options.triggerHook;
      }

      _scrollOffset.end = _scrollOffset.start + _options.duration;
    };
    /**
     * Updates the duration if set to a dynamic function.
     * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
     * 
     * @fires {@link Scene.change}, if the duration changed
     * @fires {@link Scene.shift}, if the duration changed
     *
     * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
     * @private
     */


    var updateDuration = function updateDuration(suppressEvents) {
      // update duration
      if (_durationUpdateMethod) {
        var varname = "duration";

        if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) {
          // set
          Scene.trigger("change", {
            what: varname,
            newval: _options[varname]
          });
          Scene.trigger("shift", {
            reason: varname
          });
        }
      }
    };
    /**
     * Updates the position of the triggerElement, if present.
     * This method is called ...
     *  - ... when the triggerElement is changed
     *  - ... when the scene is added to a (new) controller
     *  - ... in regular intervals from the controller through scene.refresh().
     * 
     * @fires {@link Scene.shift}, if the position changed
     *
     * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
     * @private
     */


    var updateTriggerElementPosition = function updateTriggerElementPosition(suppressEvents) {
      var elementPos = 0,
          telem = _options.triggerElement;

      if (_controller && (telem || _triggerPos > 0)) {
        // either an element exists or was removed and the triggerPos is still > 0
        if (telem) {
          // there currently a triggerElement set
          if (telem.parentNode) {
            // check if element is still attached to DOM
            var controllerInfo = _controller.info(),
                containerOffset = _util.get.offset(controllerInfo.container),
                // container position is needed because element offset is returned in relation to document, not in relation to container.
            param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
            // if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.


            while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
              telem = telem.parentNode;
            }

            var elementOffset = _util.get.offset(telem);

            if (!controllerInfo.isDocument) {
              // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
              containerOffset[param] -= _controller.scrollPos();
            }

            elementPos = elementOffset[param] - containerOffset[param];
          } else {
            // there was an element, but it was removed from DOM
            log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
            Scene.triggerElement(undefined); // unset, so a change event is triggered
          }
        }

        var changed = elementPos != _triggerPos;
        _triggerPos = elementPos;

        if (changed && !suppressEvents) {
          Scene.trigger("shift", {
            reason: "triggerElementPosition"
          });
        }
      }
    };
    /**
     * Trigger a shift event, when the container is resized and the triggerHook is > 1.
     * @private
     */


    var onContainerResize = function onContainerResize(e) {
      if (_options.triggerHook > 0) {
        Scene.trigger("shift", {
          reason: "containerResize"
        });
      }
    };

    var _validate = _util.extend(SCENE_OPTIONS.validate, {
      // validation for duration handled internally for reference to private var _durationMethod
      duration: function duration(val) {
        if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
          // percentage value
          var perc = parseFloat(val) / 100;

          val = function val() {
            return _controller ? _controller.info("size") * perc : 0;
          };
        }

        if (_util.type.Function(val)) {
          // function
          _durationUpdateMethod = val;

          try {
            val = parseFloat(_durationUpdateMethod.call(Scene));
          } catch (e) {
            val = -1; // will cause error below
          }
        } // val has to be float


        val = parseFloat(val);

        if (!_util.type.Number(val) || val < 0) {
          if (_durationUpdateMethod) {
            _durationUpdateMethod = undefined;
            throw ["Invalid return value of supplied function for option \"duration\":", val];
          } else {
            throw ["Invalid value for option \"duration\":", val];
          }
        }

        return val;
      }
    });
    /**
     * Checks the validity of a specific or all options and reset to default if neccessary.
     * @private
     */


    var validateOption = function validateOption(check) {
      check = arguments.length ? [check] : Object.keys(_validate);
      check.forEach(function (optionName, key) {
        var value;

        if (_validate[optionName]) {
          // there is a validation method for this option
          try {
            // validate value
            value = _validate[optionName](_options[optionName]);
          } catch (e) {
            // validation failed -> reset to default
            value = DEFAULT_OPTIONS[optionName];
            var logMSG = _util.type.String(e) ? [e] : e;

            if (_util.type.Array(logMSG)) {
              logMSG[0] = "ERROR: " + logMSG[0];
              logMSG.unshift(1); // loglevel 1 for error msg

              log.apply(this, logMSG);
            } else {
              log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
            }
          } finally {
            _options[optionName] = value;
          }
        }
      });
    };
    /**
     * Helper used by the setter/getters for scene options
     * @private
     */


    var changeOption = function changeOption(varname, newval) {
      var changed = false,
          oldval = _options[varname];

      if (_options[varname] != newval) {
        _options[varname] = newval;
        validateOption(varname); // resets to default if necessary

        changed = oldval != _options[varname];
      }

      return changed;
    }; // generate getters/setters for all options


    var addSceneOption = function addSceneOption(optionName) {
      if (!Scene[optionName]) {
        Scene[optionName] = function (newVal) {
          if (!arguments.length) {
            // get
            return _options[optionName];
          } else {
            if (optionName === "duration") {
              // new duration is set, so any previously set function must be unset
              _durationUpdateMethod = undefined;
            }

            if (changeOption(optionName, newVal)) {
              // set
              Scene.trigger("change", {
                what: optionName,
                newval: _options[optionName]
              });

              if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
                Scene.trigger("shift", {
                  reason: optionName
                });
              }
            }
          }

          return Scene;
        };
      }
    };
    /**
     * **Get** or **Set** the duration option value.
     *
     * As a **setter** it accepts three types of parameters:
     * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
     *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
     *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
     * 2. `string`: Always updates the duration relative to parent scroll container.  
     *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
     *   When scrolling vertically the width is used for reference respectively.
     * 3. `function`: The supplied function will be called to return the scene duration.
     *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
     *   The scene can be referenced inside the callback using `this`.
     *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
     *   It's recomended to avoid calculations within the function and use cached variables as return values.  
     *   This counts double if you use the same function for multiple scenes._
     *
     * @method ScrollMagic.Scene#duration
     * @example
     * // get the current duration value
     * var duration = scene.duration();
     *
     * // set a new duration
     * scene.duration(300);
     *
     * // set duration responsively to container size
     * scene.duration("100%");
     *
     * // use a function to randomize the duration for some reason.
     * var durationValueCache;
     * function durationCallback () {
     *   return durationValueCache;
     * }
     * function updateDuration () {
     *   durationValueCache = Math.random() * 100;
     * }
     * updateDuration(); // set to initial value
     * scene.duration(durationCallback); // set duration callback
     *
     * @fires {@link Scene.change}, when used as setter
     * @fires {@link Scene.shift}, when used as setter
     * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
     * @returns {number} `get` -  Current scene duration.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the offset option value.
     * @method ScrollMagic.Scene#offset
     * @example
     * // get the current offset
     * var offset = scene.offset();
     *
     * // set a new offset
     * scene.offset(100);
     *
     * @fires {@link Scene.change}, when used as setter
     * @fires {@link Scene.shift}, when used as setter
     * @param {number} [newOffset] - The new offset of the scene.
     * @returns {number} `get` -  Current scene offset.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the triggerElement option value.
     * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
     * @method ScrollMagic.Scene#triggerElement
     * @example
     * // get the current triggerElement
     * var triggerElement = scene.triggerElement();
     *
     * // set a new triggerElement using a selector
     * scene.triggerElement("#trigger");
     * // set a new triggerElement using a DOM object
     * scene.triggerElement(document.getElementById("trigger"));
     *
     * @fires {@link Scene.change}, when used as setter
     * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
     * @returns {(string|object)} `get` -  Current triggerElement.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the triggerHook option value.
     * @method ScrollMagic.Scene#triggerHook
     * @example
     * // get the current triggerHook value
     * var triggerHook = scene.triggerHook();
     *
     * // set a new triggerHook using a string
     * scene.triggerHook("onLeave");
     * // set a new triggerHook using a number
     * scene.triggerHook(0.7);
     *
     * @fires {@link Scene.change}, when used as setter
     * @fires {@link Scene.shift}, when used as setter
     * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
     * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the reverse option value.
     * @method ScrollMagic.Scene#reverse
     * @example
     * // get the current reverse option
     * var reverse = scene.reverse();
     *
     * // set new reverse option
     * scene.reverse(false);
     *
     * @fires {@link Scene.change}, when used as setter
     * @param {boolean} [newReverse] - The new reverse setting of the scene.
     * @returns {boolean} `get` -  Current reverse option value.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the loglevel option value.
     * @method ScrollMagic.Scene#loglevel
     * @example
     * // get the current loglevel
     * var loglevel = scene.loglevel();
     *
     * // set new loglevel
     * scene.loglevel(3);
     *
     * @fires {@link Scene.change}, when used as setter
     * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
     * @returns {number} `get` -  Current loglevel.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** the associated controller.
     * @method ScrollMagic.Scene#controller
     * @example
     * // get the controller of a scene
     * var controller = scene.controller();
     *
     * @returns {ScrollMagic.Controller} Parent controller or `undefined`
     */


    this.controller = function () {
      return _controller;
    };
    /**
     * **Get** the current state.
     * @method ScrollMagic.Scene#state
     * @example
     * // get the current state
     * var state = scene.state();
     *
     * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
     */


    this.state = function () {
      return _state;
    };
    /**
     * **Get** the current scroll offset for the start of the scene.  
     * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
     * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
     * @method ScrollMagic.Scene#scrollOffset
     * @example
     * // get the current scroll offset for the start and end of the scene.
     * var start = scene.scrollOffset();
     * var end = scene.scrollOffset() + scene.duration();
     * console.log("the scene starts at", start, "and ends at", end);
     *
     * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
     */


    this.scrollOffset = function () {
      return _scrollOffset.start;
    };
    /**
     * **Get** the trigger position of the scene (including the value of the `offset` option).  
     * @method ScrollMagic.Scene#triggerPosition
     * @example
     * // get the scene's trigger position
     * var triggerPosition = scene.triggerPosition();
     *
     * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
     */


    this.triggerPosition = function () {
      var pos = _options.offset; // the offset is the basis

      if (_controller) {
        // get the trigger position
        if (_options.triggerElement) {
          // Element as trigger
          pos += _triggerPos;
        } else {
          // return the height of the triggerHook to start at the beginning
          pos += _controller.info("size") * Scene.triggerHook();
        }
      }

      return pos;
    };

    var _pin, _pinOptions;

    Scene.on("shift.internal", function (e) {
      var durationChanged = e.reason === "duration";

      if (_state === SCENE_STATE_AFTER && durationChanged || _state === SCENE_STATE_DURING && _options.duration === 0) {
        // if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
        updatePinState();
      }

      if (durationChanged) {
        updatePinDimensions();
      }
    }).on("progress.internal", function (e) {
      updatePinState();
    }).on("add.internal", function (e) {
      updatePinDimensions();
    }).on("destroy.internal", function (e) {
      Scene.removePin(e.reset);
    });
    /**
     * Update the pin state.
     * @private
     */

    var updatePinState = function updatePinState(forceUnpin) {
      if (_pin && _controller) {
        var containerInfo = _controller.info(),
            pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins


        if (!forceUnpin && _state === SCENE_STATE_DURING) {
          // during scene or if duration is 0 and we are past the trigger
          // pinned state
          if (_util.css(pinTarget, "position") != "fixed") {
            // change state before updating pin spacer (position changes due to fixed collapsing might occur.)
            _util.css(pinTarget, {
              "position": "fixed"
            }); // update pin spacer


            updatePinDimensions();
          }

          var fixedPos = _util.get.offset(_pinOptions.spacer, true),
              // get viewport position of spacer
          scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
          : Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress
          // add scrollDistance


          fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance; // set new values

          _util.css(_pinOptions.spacer.firstChild, {
            top: fixedPos.top,
            left: fixedPos.left
          });
        } else {
          // unpinned state
          var newCSS = {
            position: _pinOptions.inFlow ? "relative" : "absolute",
            top: 0,
            left: 0
          },
              change = _util.css(pinTarget, "position") != newCSS.position;

          if (!_pinOptions.pushFollowers) {
            newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
          } else if (_options.duration > 0) {
            // only concerns scenes with duration
            if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
              change = true; // if in after state but havent updated spacer yet (jumped past pin)
            } else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) {
              // before
              change = true; // jumped past fixed state upward direction
            }
          } // set new values


          _util.css(pinTarget, newCSS);

          if (change) {
            // update pin spacer if state changed
            updatePinDimensions();
          }
        }
      }
    };
    /**
     * Update the pin spacer and/or element size.
     * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
     * @private
     */


    var updatePinDimensions = function updatePinDimensions() {
      if (_pin && _controller && _pinOptions.inFlow) {
        // no spacerresize, if original position is absolute
        var after = _state === SCENE_STATE_AFTER,
            before = _state === SCENE_STATE_BEFORE,
            during = _state === SCENE_STATE_DURING,
            vertical = _controller.info("vertical"),
            pinTarget = _pinOptions.spacer.firstChild,
            // usually the pined element but can also be another spacer (cascaded pins)
        marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
            css = {}; // set new size
        // if relsize: spacer -> pin | else: pin -> spacer


        if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
          if (during) {
            _util.css(_pin, {
              "width": _util.get.width(_pinOptions.spacer)
            });
          } else {
            _util.css(_pin, {
              "width": "100%"
            });
          }
        } else {
          // minwidth is needed for cascaded pins.
          css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
          css.width = during ? css["min-width"] : "auto";
        }

        if (_pinOptions.relSize.height) {
          if (during) {
            // the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
            _util.css(_pin, {
              "height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
            });
          } else {
            _util.css(_pin, {
              "height": "100%"
            });
          }
        } else {
          // margin is only included if it's a cascaded pin to resolve an IE9 bug
          css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins

          css.height = during ? css["min-height"] : "auto";
        } // add space for duration if pushFollowers is true


        if (_pinOptions.pushFollowers) {
          css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
          css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
        }

        _util.css(_pinOptions.spacer, css);
      }
    };
    /**
     * Updates the Pin state (in certain scenarios)
     * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
     * So this function is called on resize and scroll of the document.
     * @private
     */


    var updatePinInContainer = function updatePinInContainer() {
      if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
        updatePinState();
      }
    };
    /**
     * Updates the Pin spacer size state (in certain scenarios)
     * If container is resized during pin and relatively sized the size of the pin might need to be updated...
     * So this function is called on resize of the container.
     * @private
     */


    var updateRelativePinSpacer = function updateRelativePinSpacer() {
      if (_controller && _pin && // well, duh
      _state === SCENE_STATE_DURING && ( // element in pinned state?
      // is width or height relatively sized, but not in relation to body? then we need to recalc.
      (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode) || _pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))) {
        updatePinDimensions();
      }
    };
    /**
     * Is called, when the mousewhel is used while over a pinned element inside a div container.
     * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
     * @private
     */


    var onMousewheelOverPin = function onMousewheelOverPin(e) {
      if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
        // in pin state
        e.preventDefault();

        _controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
      }
    };
    /**
     * Pin an element for the duration of the scene.
     * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
     * Make sure only one pin is applied to an element at the same time.
     * An element can be pinned multiple times, but only successively.
     * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
     * @method ScrollMagic.Scene#setPin
     * @example
     * // pin element and push all following elements down by the amount of the pin duration.
     * scene.setPin("#pin");
     *
     * // pin element and keeping all following elements in their place. The pinned element will move past them.
     * scene.setPin("#pin", {pushFollowers: false});
     *
     * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
     * @param {object} [settings] - settings for the pin
     * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
     												   Ignored, when duration is `0`.
     * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
     *
     * @returns {Scene} Parent object for chaining.
     */


    this.setPin = function (element, settings) {
      var defaultSettings = {
        pushFollowers: true,
        spacerClass: "scrollmagic-pin-spacer"
      };
      var pushFollowersActivelySet = settings && settings.hasOwnProperty('pushFollowers');
      settings = _util.extend({}, defaultSettings, settings); // validate Element

      element = _util.get.elements(element)[0];

      if (!element) {
        log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
        return Scene; // cancel
      } else if (_util.css(element, "position") === "fixed") {
        log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
        return Scene; // cancel
      }

      if (_pin) {
        // preexisting pin?
        if (_pin === element) {
          // same pin we already have -> do nothing
          return Scene; // cancel
        } else {
          // kill old pin
          Scene.removePin();
        }
      }

      _pin = element;
      var parentDisplay = _pin.parentNode.style.display,
          boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
      _pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.

      var inFlow = _util.css(_pin, "position") != "absolute",
          pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
          sizeCSS = _util.css(_pin, ["width", "height"]);

      _pin.parentNode.style.display = parentDisplay; // hack end.

      if (!inFlow && settings.pushFollowers) {
        log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
        settings.pushFollowers = false;
      }

      window.setTimeout(function () {
        // wait until all finished, because with responsive duration it will only be set after scene is added to controller
        if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) {
          log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
        }
      }, 0); // create spacer and insert

      var spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
          spacerCSS = _util.extend(pinCSS, {
        position: inFlow ? "relative" : "absolute",
        boxSizing: "content-box",
        mozBoxSizing: "content-box",
        webkitBoxSizing: "content-box"
      });

      if (!inFlow) {
        // copy size if positioned absolutely, to work for bottom/right positioned elements.
        _util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
      }

      _util.css(spacer, spacerCSS);

      spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");

      _util.addClass(spacer, settings.spacerClass); // set the pin Options


      _pinOptions = {
        spacer: spacer,
        relSize: {
          // save if size is defined using % values. if so, handle spacer resize differently...
          width: sizeCSS.width.slice(-1) === "%",
          height: sizeCSS.height.slice(-1) === "%",
          autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
        },
        pushFollowers: settings.pushFollowers,
        inFlow: inFlow // stores if the element takes up space in the document flow

      };

      if (!_pin.___origStyle) {
        _pin.___origStyle = {};
        var pinInlineCSS = _pin.style,
            copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
        copyStyles.forEach(function (val) {
          _pin.___origStyle[val] = pinInlineCSS[val] || "";
        });
      } // if relative size, transfer it to spacer and make pin calculate it...


      if (_pinOptions.relSize.width) {
        _util.css(spacer, {
          width: sizeCSS.width
        });
      }

      if (_pinOptions.relSize.height) {
        _util.css(spacer, {
          height: sizeCSS.height
        });
      } // now place the pin element inside the spacer	


      spacer.appendChild(_pin); // and set new css

      _util.css(_pin, {
        position: inFlow ? "relative" : "absolute",
        margin: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      });

      if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
        _util.css(_pin, {
          boxSizing: "border-box",
          mozBoxSizing: "border-box",
          webkitBoxSizing: "border-box"
        });
      } // add listener to document to update pin position in case controller is not the document.


      window.addEventListener('scroll', updatePinInContainer);
      window.addEventListener('resize', updatePinInContainer);
      window.addEventListener('resize', updateRelativePinSpacer); // add mousewheel listener to catch scrolls over fixed elements

      _pin.addEventListener("mousewheel", onMousewheelOverPin);

      _pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

      log(3, "added pin"); // finally update the pin to init

      updatePinState();
      return Scene;
    };
    /**
     * Remove the pin from the scene.
     * @method ScrollMagic.Scene#removePin
     * @example
     * // remove the pin from the scene without resetting it (the spacer is not removed)
     * scene.removePin();
     *
     * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
     * scene.removePin(true);
     *
     * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
     * @returns {Scene} Parent object for chaining.
     */


    this.removePin = function (reset) {
      if (_pin) {
        if (_state === SCENE_STATE_DURING) {
          updatePinState(true); // force unpin at position
        }

        if (reset || !_controller) {
          // if there's no controller no progress was made anyway...
          var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...

          if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
            // copy margins to child spacer
            var style = _pinOptions.spacer.style,
                values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
                margins = {};
            values.forEach(function (val) {
              margins[val] = style[val] || "";
            });

            _util.css(pinTarget, margins);
          }

          _pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);

          _pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);

          if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
            // if it's the last pin for this element -> restore inline styles
            // TODO: only correctly set for first pin (when cascading) - how to fix?
            _util.css(_pin, _pin.___origStyle);

            delete _pin.___origStyle;
          }
        }

        window.removeEventListener('scroll', updatePinInContainer);
        window.removeEventListener('resize', updatePinInContainer);
        window.removeEventListener('resize', updateRelativePinSpacer);

        _pin.removeEventListener("mousewheel", onMousewheelOverPin);

        _pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);

        _pin = undefined;
        log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
      }

      return Scene;
    };

    var _cssClasses,
        _cssClassElems = [];

    Scene.on("destroy.internal", function (e) {
      Scene.removeClassToggle(e.reset);
    });
    /**
     * Define a css class modification while the scene is active.  
     * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
     * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
     * @method ScrollMagic.Scene#setClassToggle
     * @example
     * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
     * scene.setClassToggle("#my-elem", "myclass");
     *
     * // add multiple classes to multiple elements defined by the selector '.classChange'
     * scene.setClassToggle(".classChange", "class1 class2 class3");
     *
     * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
     * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
     *
     * @returns {Scene} Parent object for chaining.
     */

    this.setClassToggle = function (element, classes) {
      var elems = _util.get.elements(element);

      if (elems.length === 0 || !_util.type.String(classes)) {
        log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
        return Scene;
      }

      if (_cssClassElems.length > 0) {
        // remove old ones
        Scene.removeClassToggle();
      }

      _cssClasses = classes;
      _cssClassElems = elems;
      Scene.on("enter.internal_class leave.internal_class", function (e) {
        var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;

        _cssClassElems.forEach(function (elem, key) {
          toggle(elem, _cssClasses);
        });
      });
      return Scene;
    };
    /**
     * Remove the class binding from the scene.
     * @method ScrollMagic.Scene#removeClassToggle
     * @example
     * // remove class binding from the scene without reset
     * scene.removeClassToggle();
     *
     * // remove class binding and remove the changes it caused
     * scene.removeClassToggle(true);
     *
     * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
     * @returns {Scene} Parent object for chaining.
     */


    this.removeClassToggle = function (reset) {
      if (reset) {
        _cssClassElems.forEach(function (elem, key) {
          _util.removeClass(elem, _cssClasses);
        });
      }

      Scene.off("start.internal_class end.internal_class");
      _cssClasses = undefined;
      _cssClassElems = [];
      return Scene;
    }; // INIT


    construct();
    return Scene;
  }; // store pagewide scene options


  var SCENE_OPTIONS = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: undefined,
      triggerHook: 0.5,
      reverse: true,
      loglevel: 2
    },
    validate: {
      offset: function offset(val) {
        val = parseFloat(val);

        if (!_util.type.Number(val)) {
          throw ["Invalid value for option \"offset\":", val];
        }

        return val;
      },
      triggerElement: function triggerElement(val) {
        val = val || undefined;

        if (val) {
          var elem = _util.get.elements(val)[0];

          if (elem && elem.parentNode) {
            val = elem;
          } else {
            throw ["Element defined in option \"triggerElement\" was not found:", val];
          }
        }

        return val;
      },
      triggerHook: function triggerHook(val) {
        var translate = {
          "onCenter": 0.5,
          "onEnter": 1,
          "onLeave": 0
        };

        if (_util.type.Number(val)) {
          val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
        } else if (val in translate) {
          val = translate[val];
        } else {
          throw ["Invalid value for option \"triggerHook\": ", val];
        }

        return val;
      },
      reverse: function reverse(val) {
        return !!val; // force boolean
      },
      loglevel: function loglevel(val) {
        val = parseInt(val);

        if (!_util.type.Number(val) || val < 0 || val > 3) {
          throw ["Invalid value for option \"loglevel\":", val];
        }

        return val;
      }
    },
    // holder for  validation methods. duration validation is handled in 'getters-setters.js'
    shifts: ["duration", "offset", "triggerHook"] // list of options that trigger a `shift` event

  };
  /*
   * method used to add an option to ScrollMagic Scenes.
   * TODO: DOC (private for dev)
   */

  ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
    if (!(name in SCENE_OPTIONS.defaults)) {
      SCENE_OPTIONS.defaults[name] = defaultValue;
      SCENE_OPTIONS.validate[name] = validationCallback;

      if (shifts) {
        SCENE_OPTIONS.shifts.push(name);
      }
    } else {
      ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
    }
  }; // instance extension function for plugins
  // TODO: DOC (private for dev)


  ScrollMagic.Scene.extend = function (extension) {
    var oldClass = this;

    ScrollMagic.Scene = function () {
      oldClass.apply(this, arguments);
      this.$super = _util.extend({}, this); // copy parent state

      return extension.apply(this, arguments) || this;
    };

    _util.extend(ScrollMagic.Scene, oldClass); // copy properties


    ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype

    ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
  };
  /**
   * TODO: DOCS (private for dev)
   * @class
   * @private
   */


  ScrollMagic.Event = function (type, namespace, target, vars) {
    vars = vars || {};

    for (var key in vars) {
      this[key] = vars[key];
    }

    this.type = type;
    this.target = this.currentTarget = target;
    this.namespace = namespace || '';
    this.timeStamp = this.timestamp = Date.now();
    return this;
  };
  /*
   * TODO: DOCS (private for dev)
   */


  var _util = ScrollMagic._util = function (window) {
    var U = {},
        i;
    /**
     * ------------------------------
     * internal helpers
     * ------------------------------
     */
    // parse float and fall back to 0.

    var floatval = function floatval(number) {
      return parseFloat(number) || 0;
    }; // get current style IE safe (otherwise IE would return calculated values for 'auto')


    var _getComputedStyle = function _getComputedStyle(elem) {
      return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
    }; // get element dimension (width or height)


    var _dimension = function _dimension(which, elem, outer, includeMargin) {
      elem = elem === document ? window : elem;

      if (elem === window) {
        includeMargin = false;
      } else if (!_type.DomElement(elem)) {
        return 0;
      }

      which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
      var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;

      if (outer && includeMargin) {
        var style = _getComputedStyle(elem);

        dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
      }

      return dimension;
    }; // converts 'margin-top' into 'marginTop'


    var _camelCase = function _camelCase(str) {
      return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
    };
    /**
     * ------------------------------
     * external helpers
     * ------------------------------
     */
    // extend obj – same as jQuery.extend({}, objA, objB)


    U.extend = function (obj) {
      obj = obj || {};

      for (i = 1; i < arguments.length; i++) {
        if (!arguments[i]) {
          continue;
        }

        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) {
            obj[key] = arguments[i][key];
          }
        }
      }

      return obj;
    }; // check if a css display type results in margin-collapse or not


    U.isMarginCollapseType = function (str) {
      return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
    }; // implementation of requestAnimationFrame
    // based on https://gist.github.com/paulirish/1579671


    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'];
    var _requestAnimationFrame = window.requestAnimationFrame;
    var _cancelAnimationFrame = window.cancelAnimationFrame; // try vendor prefixes if the above doesn't work

    for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
      _requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
      _cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
    } // fallbacks


    if (!_requestAnimationFrame) {
      _requestAnimationFrame = function _requestAnimationFrame(callback) {
        var currTime = new Date().getTime(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }

    if (!_cancelAnimationFrame) {
      _cancelAnimationFrame = function _cancelAnimationFrame(id) {
        window.clearTimeout(id);
      };
    }

    U.rAF = _requestAnimationFrame.bind(window);
    U.cAF = _cancelAnimationFrame.bind(window);
    var loglevels = ["error", "warn", "log"],
        console = window.console || {};

    console.log = console.log || function () {}; // no console log, well - do nothing then...
    // make sure methods for all levels exist.


    for (i = 0; i < loglevels.length; i++) {
      var method = loglevels[i];

      if (!console[method]) {
        console[method] = console.log; // prefer .log over nothing
      }
    }

    U.log = function (loglevel) {
      if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
      var now = new Date(),
          time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
          method = loglevels[loglevel - 1],
          args = Array.prototype.splice.call(arguments, 1),
          func = Function.prototype.bind.call(console[method], console);
      args.unshift(time);
      func.apply(console, args);
    };
    /**
     * ------------------------------
     * type testing
     * ------------------------------
     */


    var _type = U.type = function (v) {
      return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
    };

    _type.String = function (v) {
      return _type(v) === 'string';
    };

    _type.Function = function (v) {
      return _type(v) === 'function';
    };

    _type.Array = function (v) {
      return Array.isArray(v);
    };

    _type.Number = function (v) {
      return !_type.Array(v) && v - parseFloat(v) + 1 >= 0;
    };

    _type.DomElement = function (o) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : //DOM2
      o && _typeof(o) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
    };
    /**
     * ------------------------------
     * DOM Element info
     * ------------------------------
     */
    // always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors


    var _get = U.get = {};

    _get.elements = function (selector) {
      var arr = [];

      if (_type.String(selector)) {
        try {
          selector = document.querySelectorAll(selector);
        } catch (e) {
          // invalid selector
          return arr;
        }
      }

      if (_type(selector) === 'nodelist' || _type.Array(selector) || selector instanceof NodeList) {
        for (var i = 0, ref = arr.length = selector.length; i < ref; i++) {
          // list of elements
          var elem = selector[i];
          arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
        }
      } else if (_type.DomElement(selector) || selector === document || selector === window) {
        arr = [selector]; // only the element
      }

      return arr;
    }; // get scroll top value


    _get.scrollTop = function (elem) {
      return elem && typeof elem.scrollTop === 'number' ? elem.scrollTop : window.pageYOffset || 0;
    }; // get scroll left value


    _get.scrollLeft = function (elem) {
      return elem && typeof elem.scrollLeft === 'number' ? elem.scrollLeft : window.pageXOffset || 0;
    }; // get element height


    _get.width = function (elem, outer, includeMargin) {
      return _dimension('width', elem, outer, includeMargin);
    }; // get element width


    _get.height = function (elem, outer, includeMargin) {
      return _dimension('height', elem, outer, includeMargin);
    }; // get element position (optionally relative to viewport)


    _get.offset = function (elem, relativeToViewport) {
      var offset = {
        top: 0,
        left: 0
      };

      if (elem && elem.getBoundingClientRect) {
        // check if available
        var rect = elem.getBoundingClientRect();
        offset.top = rect.top;
        offset.left = rect.left;

        if (!relativeToViewport) {
          // clientRect is by default relative to viewport...
          offset.top += _get.scrollTop();
          offset.left += _get.scrollLeft();
        }
      }

      return offset;
    };
    /**
     * ------------------------------
     * DOM Element manipulation
     * ------------------------------
     */


    U.addClass = function (elem, classname) {
      if (classname) {
        if (elem.classList) elem.classList.add(classname);else elem.className += ' ' + classname;
      }
    };

    U.removeClass = function (elem, classname) {
      if (classname) {
        if (elem.classList) elem.classList.remove(classname);else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }; // if options is string -> returns css value
    // if options is array -> returns object with css value pairs
    // if options is object -> set new css values


    U.css = function (elem, options) {
      if (_type.String(options)) {
        return _getComputedStyle(elem)[_camelCase(options)];
      } else if (_type.Array(options)) {
        var obj = {},
            style = _getComputedStyle(elem);

        options.forEach(function (option, key) {
          obj[option] = style[_camelCase(option)];
        });
        return obj;
      } else {
        for (var option in options) {
          var val = options[option];

          if (val == parseFloat(val)) {
            // assume pixel for seemingly numerical values
            val += 'px';
          }

          elem.style[_camelCase(option)] = val;
        }
      }
    };

    return U;
  }(window || {});

  ScrollMagic.Scene.prototype.addIndicators = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');

    return this;
  };

  ScrollMagic.Scene.prototype.removeIndicators = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');

    return this;
  };

  ScrollMagic.Scene.prototype.setTween = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');

    return this;
  };

  ScrollMagic.Scene.prototype.removeTween = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');

    return this;
  };

  ScrollMagic.Scene.prototype.setVelocity = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');

    return this;
  };

  ScrollMagic.Scene.prototype.removeVelocity = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');

    return this;
  };

  return ScrollMagic;
});

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

/***/ "./src/assets/js/function.scrollmagic.js":
/*!***********************************************!*\
  !*** ./src/assets/js/function.scrollmagic.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_0__);
 // ScrollMagic Documentation
// https://github.com/janpaepke/ScrollMagic/wiki/Getting-Started-:-How-to-use-ScrollMagic
// init controller

var controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Controller(); // create a scene

new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Scene({
  duration: 100,
  // the scene should last for a scroll distance of 100px
  offset: 50 // start this scene after scrolling for 50px

}).setPin('#post-1') // pins the element for the the scene's duration
.addTo(controller); // assign the scene to the controller

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
/* harmony import */ var _function_scrollmagic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./function.scrollmagic.js */ "./src/assets/js/function.scrollmagic.js");








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUtanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5bG9hZC9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWljcm9tb2RhbC9kaXN0L21pY3JvbW9kYWwuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9TY3JvbGxNYWdpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uYm9keWNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLm1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ub2ZmY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uc2Nyb2xsbWFnaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5zbGlkZXNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOlsiaSIsInUiLCJvIiwibCIsImMiLCJ0IiwiaW5pdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm1hcCIsImUiLCJvcHRpb25zIiwiaCIsImR1cmF0aW9uIiwiaXRlbU51bWJlciIsImFyaWEiLCJjbG9zZU90aGVycyIsInNob3dJdGVtIiwiZWxlbWVudENsYXNzIiwicXVlc3Rpb25DbGFzcyIsImFuc3dlckNsYXNzIiwidGFyZ2V0Q2xhc3MiLCJvblRvZ2dsZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm4iLCJzZXRBdHRyaWJ1dGUiLCJzIiwiciIsImNsYXNzTGlzdCIsImFkZCIsImhpZGVFbGVtZW50Iiwic2V0VHJhbnNpdGlvbiIsImdlbmVyYXRlSUQiLCJzZXRBUklBIiwiYSIsInRvZ2dsZUVsZW1lbnQiLCJhdHRhY2hFdmVudHMiLCJzdHlsZSIsImNvbmNhdCIsInVwZGF0ZUFSSUEiLCJjYWxsU3BlY2lmaWNFbGVtZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbGFzc05hbWUiLCJtYXRjaCIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VBbGxFbGVtZW50cyIsImhlaWdodCIsImFyZ3VtZW50cyIsInNjcm9sbEhlaWdodCIsInRvZ2dsZSIsInBhcnNlSW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlIiwicmVzaXplSGFuZGxlciIsIm9mZnNldEhlaWdodCIsImNsaWNrSGFuZGxlciIsImtleWRvd25IYW5kbGVyIiwia2V5Q29kZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50RWxlbWVudCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwibW9kdWxlIiwiZXhwb3J0cyIsIkFjY29yZGlvbiIsIndpbmRvdyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnF1aXJlU2NyZWVuIiwidW5lbnF1aXJlU2NyZWVuIiwiZW5xdWlyZUpzIiwibWF0Y2hNZWRpYVBvbHlmaWxsIiwibWVkaWFRdWVyeSIsIm1lZGlhIiwibWF0Y2hlcyIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJtYXRjaE1lZGlhIiwicmVxdWlyZSIsIm1vYmlsZVF1ZXJ5IiwiY2IiLCJxdWVyeSIsInVuZGVmaW5lZCIsImhhbmRsZXIiLCJ1bm1hdGNoIiwicmVnaXN0ZXIiLCJ1bnJlZ2lzdGVyIiwiUXVlcnlIYW5kbGVyIiwiZWFjaCIsIk1lZGlhUXVlcnkiLCJpc1VuY29uZGl0aW9uYWwiLCJoYW5kbGVycyIsIm1xbCIsInNlbGYiLCJsaXN0ZW5lciIsImN1cnJlbnRUYXJnZXQiLCJhc3Nlc3MiLCJwcm90b3R5cGUiLCJjb25zdHVjdG9yIiwiYWRkSGFuZGxlciIsInFoIiwicHVzaCIsIm9uIiwicmVtb3ZlSGFuZGxlciIsImVxdWFscyIsImRlc3Ryb3kiLCJzcGxpY2UiLCJjbGVhciIsImFjdGlvbiIsIlV0aWwiLCJpc0Z1bmN0aW9uIiwiTWVkaWFRdWVyeURpc3BhdGNoIiwiRXJyb3IiLCJxdWVyaWVzIiwiYnJvd3NlcklzSW5jYXBhYmxlIiwiY29uc3RydWN0b3IiLCJxIiwic2hvdWxkRGVncmFkZSIsImRlZmVyU2V0dXAiLCJzZXR1cCIsImluaXRpYWxpc2VkIiwib2ZmIiwiY29sbGVjdGlvbiIsImZuIiwiY29udCIsInRvU3RyaW5nIiwiYXBwbHkiLCJyb290IiwiZmFjdG9yeSIsImRlZmluZSIsImdsb2JhbCIsImRlZmF1bHRzIiwic3JjIiwic3Jjc2V0Iiwic2VsZWN0b3IiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiZXh0ZW5kIiwiZXh0ZW5kZWQiLCJkZWVwIiwiY2FsbCIsIm1lcmdlIiwib2JqIiwicHJvcCIsImhhc093blByb3BlcnR5IiwiTGF6eUxvYWQiLCJpbWFnZXMiLCJzZXR0aW5ncyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJsb2FkSW1hZ2VzIiwib2JzZXJ2ZXJDb25maWciLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZSIsIm9ic2VydmUiLCJsb2FkQW5kRGVzdHJveSIsImRpc2Nvbm5lY3QiLCJsYXp5bG9hZCIsImpRdWVyeSIsIiQiLCJhdHRyaWJ1dGUiLCJtYWtlQXJyYXkiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJpdGVyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmcm9tIiwibWluTGVuIiwibmFtZSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiTWljcm9Nb2RhbCIsIkZPQ1VTQUJMRV9FTEVNRU5UUyIsIk1vZGFsIiwiX3JlZiIsInRhcmdldE1vZGFsIiwiX3JlZiR0cmlnZ2VycyIsInRyaWdnZXJzIiwiX3JlZiRvblNob3ciLCJvblNob3ciLCJfcmVmJG9uQ2xvc2UiLCJvbkNsb3NlIiwiX3JlZiRvcGVuVHJpZ2dlciIsIm9wZW5UcmlnZ2VyIiwiX3JlZiRjbG9zZVRyaWdnZXIiLCJjbG9zZVRyaWdnZXIiLCJfcmVmJG9wZW5DbGFzcyIsIm9wZW5DbGFzcyIsIl9yZWYkZGlzYWJsZVNjcm9sbCIsImRpc2FibGVTY3JvbGwiLCJfcmVmJGRpc2FibGVGb2N1cyIsImRpc2FibGVGb2N1cyIsIl9yZWYkYXdhaXRDbG9zZUFuaW1hdCIsImF3YWl0Q2xvc2VBbmltYXRpb24iLCJfcmVmJGF3YWl0T3BlbkFuaW1hdGkiLCJhd2FpdE9wZW5BbmltYXRpb24iLCJfcmVmJGRlYnVnTW9kZSIsImRlYnVnTW9kZSIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJyZWdpc3RlclRyaWdnZXJzIiwib25DbGljayIsIm9uS2V5ZG93biIsIl90aGlzIiwiX2xlbiIsIl9rZXkiLCJmaWx0ZXIiLCJCb29sZWFuIiwidHJpZ2dlciIsImV2ZW50Iiwic2hvd01vZGFsIiwiX3RoaXMyIiwiYWN0aXZlRWxlbWVudCIsInNjcm9sbEJlaGF2aW91ciIsImFkZEV2ZW50TGlzdGVuZXJzIiwic2V0Rm9jdXNUb0ZpcnN0Tm9kZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImZvY3VzIiwiY2xvc2VNb2RhbEJ5SWQiLCJib2R5IiwiYXNzaWduIiwib3ZlcmZsb3ciLCJoYXNBdHRyaWJ1dGUiLCJyZXRhaW5Gb2N1cyIsImdldEZvY3VzYWJsZU5vZGVzIiwibm9kZXMiLCJfdGhpczMiLCJmb2N1c2FibGVOb2RlcyIsIm5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMiLCJub2RlIiwib2Zmc2V0UGFyZW50IiwiZm9jdXNlZEl0ZW1JbmRleCIsImluZGV4T2YiLCJzaGlmdEtleSIsImFjdGl2ZU1vZGFsIiwiZ2VuZXJhdGVUcmlnZ2VyTWFwIiwidHJpZ2dlckF0dHIiLCJ0cmlnZ2VyTWFwIiwiYXR0cmlidXRlcyIsInZhbGlkYXRlTW9kYWxQcmVzZW5jZSIsImlkIiwiY29uc29sZSIsIndhcm4iLCJ2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSIsInZhbGlkYXRlQXJncyIsInNob3ciLCJjbG9zZSIsIlNjcm9sbE1hZ2ljIiwiX3V0aWwiLCJsb2ciLCJ2ZXJzaW9uIiwiUElOX1NQQUNFUl9BVFRSSUJVVEUiLCJDb250cm9sbGVyIiwiTkFNRVNQQUNFIiwiU0NST0xMX0RJUkVDVElPTl9GT1JXQVJEIiwiU0NST0xMX0RJUkVDVElPTl9SRVZFUlNFIiwiU0NST0xMX0RJUkVDVElPTl9QQVVTRUQiLCJERUZBVUxUX09QVElPTlMiLCJDT05UUk9MTEVSX09QVElPTlMiLCJfb3B0aW9ucyIsIl9zY2VuZU9iamVjdHMiLCJfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUiLCJfc2Nyb2xsUG9zIiwiX3Njcm9sbERpcmVjdGlvbiIsIl9pc0RvY3VtZW50IiwiX3ZpZXdQb3J0U2l6ZSIsIl9lbmFibGVkIiwiX3VwZGF0ZVRpbWVvdXQiLCJfcmVmcmVzaFRpbWVvdXQiLCJjb25zdHJ1Y3QiLCJnZXQiLCJnZXRWaWV3cG9ydFNpemUiLCJvbkNoYW5nZSIsInJpIiwicmVmcmVzaEludGVydmFsIiwidHlwZSIsIk51bWJlciIsInNjaGVkdWxlUmVmcmVzaCIsInJlZnJlc2giLCJnZXRTY3JvbGxQb3MiLCJ2ZXJ0aWNhbCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ3aWR0aCIsInNldFNjcm9sbFBvcyIsIl9zZXRTY3JvbGxQb3MiLCJwb3MiLCJzY3JvbGxUbyIsInVwZGF0ZVNjZW5lcyIsInNjZW5lc1RvVXBkYXRlIiwib2xkU2Nyb2xsUG9zIiwic2Nyb2xsUG9zIiwiZGVsdGFTY3JvbGwiLCJyZXZlcnNlIiwic2NlbmUiLCJpbmRleCIsInVwZGF0ZSIsImxvZ2xldmVsIiwiZGVib3VuY2VVcGRhdGUiLCJyQUYiLCJyZXNpemVFdmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJfbG9nIiwib3V0cHV0Iiwic29ydFNjZW5lcyIsIlNjZW5lc0FycmF5Iiwic2NlbmVzIiwic29ydCIsImIiLCJzY3JvbGxPZmZzZXQiLCJhZGRTY2VuZSIsIm5ld1NjZW5lIiwiU2NlbmUiLCJjb250cm9sbGVyIiwiYWRkVG8iLCJnbG9iYWxTY2VuZU9wdGlvbnMiLCJyZW1vdmVTY2VuZSIsInVwZGF0ZVNjZW5lIiwiaW1tZWRpYXRlbHkiLCJzY3JvbGxUYXJnZXQiLCJhZGRpdGlvbmFsUGFyYW1ldGVyIiwiRnVuY3Rpb24iLCJlbGVtIiwicGFyZW50Tm9kZSIsInBhcmFtIiwiY29udGFpbmVyT2Zmc2V0Iiwib2Zmc2V0IiwiZWxlbWVudE9mZnNldCIsInNjcm9sbFBvc01ldGhvZCIsImluZm8iLCJhYm91dCIsInZhbHVlcyIsInNpemUiLCJzY3JvbGxEaXJlY3Rpb24iLCJpc0RvY3VtZW50IiwibmV3TG9nbGV2ZWwiLCJlbmFibGVkIiwibmV3U3RhdGUiLCJyZXNldFNjZW5lcyIsImNsZWFyVGltZW91dCIsImNBRiIsImFkZE9wdGlvbiIsImRlZmF1bHRWYWx1ZSIsImV4dGVuc2lvbiIsIm9sZENsYXNzIiwiJHN1cGVyIiwiU0NFTkVfU1RBVEVfQkVGT1JFIiwiU0NFTkVfU1RBVEVfRFVSSU5HIiwiU0NFTkVfU1RBVEVfQUZURVIiLCJTQ0VORV9PUFRJT05TIiwiX3N0YXRlIiwiX3Byb2dyZXNzIiwiX3Njcm9sbE9mZnNldCIsInN0YXJ0IiwiZW5kIiwiX3RyaWdnZXJQb3MiLCJfZHVyYXRpb25VcGRhdGVNZXRob2QiLCJfY29udHJvbGxlciIsIm9wdGlvbk5hbWUiLCJhZGRTY2VuZU9wdGlvbiIsInZhbGlkYXRlT3B0aW9uIiwiX2xpc3RlbmVycyIsIm5hbWVzIiwiY2FsbGJhY2siLCJ0cmltIiwic3BsaXQiLCJmdWxsbmFtZSIsIm5hbWVwYXJ0cyIsImV2ZW50bmFtZSIsIm5hbWVzcGFjZSIsInJlbW92ZUxpc3QiLCJrZXlzIiwibGlzdCIsInZhcnMiLCJsaXN0ZW5lcnMiLCJ3aGF0IiwidXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbiIsInVwZGF0ZVNjcm9sbE9mZnNldCIsInVwZGF0ZUR1cmF0aW9uIiwib25Db250YWluZXJSZXNpemUiLCJ0bXBQYXJlbnQiLCJyZXNldCIsIm5ld1Byb2dyZXNzIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJwcm9ncmVzcyIsIl9waW4iLCJ1cGRhdGVQaW5TdGF0ZSIsImRvVXBkYXRlIiwib2xkU3RhdGUiLCJyZXZlcnNlT3JGb3J3YXJkIiwiZXZlbnRWYXJzIiwic3RhdGUiLCJzdGF0ZUNoYW5nZWQiLCJldmVudE5hbWUiLCJ0cmlnZ2VyRWxlbWVudCIsInRyaWdnZXJIb29rIiwic3VwcHJlc3NFdmVudHMiLCJ2YXJuYW1lIiwiY2hhbmdlT3B0aW9uIiwibmV3dmFsIiwicmVhc29uIiwiZWxlbWVudFBvcyIsInRlbGVtIiwiY29udHJvbGxlckluZm8iLCJjaGFuZ2VkIiwiX3ZhbGlkYXRlIiwidmFsaWRhdGUiLCJ2YWwiLCJTdHJpbmciLCJwZXJjIiwicGFyc2VGbG9hdCIsImNoZWNrIiwibG9nTVNHIiwidW5zaGlmdCIsIm1lc3NhZ2UiLCJvbGR2YWwiLCJuZXdWYWwiLCJzaGlmdHMiLCJ0cmlnZ2VyUG9zaXRpb24iLCJfcGluT3B0aW9ucyIsImR1cmF0aW9uQ2hhbmdlZCIsInVwZGF0ZVBpbkRpbWVuc2lvbnMiLCJyZW1vdmVQaW4iLCJmb3JjZVVucGluIiwiY29udGFpbmVySW5mbyIsInBpblRhcmdldCIsInNwYWNlciIsImZpcnN0Q2hpbGQiLCJjc3MiLCJmaXhlZFBvcyIsInNjcm9sbERpc3RhbmNlIiwiTWF0aCIsInJvdW5kIiwidG9wIiwibGVmdCIsIm5ld0NTUyIsInBvc2l0aW9uIiwiaW5GbG93IiwiY2hhbmdlIiwicHVzaEZvbGxvd2VycyIsImFmdGVyIiwiYmVmb3JlIiwiZHVyaW5nIiwibWFyZ2luQ29sbGFwc2UiLCJpc01hcmdpbkNvbGxhcHNlVHlwZSIsInJlbFNpemUiLCJhdXRvRnVsbFdpZHRoIiwidXBkYXRlUGluSW5Db250YWluZXIiLCJ1cGRhdGVSZWxhdGl2ZVBpblNwYWNlciIsIm9uTW91c2V3aGVlbE92ZXJQaW4iLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwic2V0UGluIiwiZWxlbWVudCIsImRlZmF1bHRTZXR0aW5ncyIsInNwYWNlckNsYXNzIiwicHVzaEZvbGxvd2Vyc0FjdGl2ZWx5U2V0IiwicGFyZW50RGlzcGxheSIsImRpc3BsYXkiLCJib3VuZHNQYXJhbXMiLCJwaW5DU1MiLCJzaXplQ1NTIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlRWxlbWVudCIsInNwYWNlckNTUyIsImJveFNpemluZyIsIm1vekJveFNpemluZyIsIndlYmtpdEJveFNpemluZyIsImFkZENsYXNzIiwiX19fb3JpZ1N0eWxlIiwicGluSW5saW5lQ1NTIiwiY29weVN0eWxlcyIsImFwcGVuZENoaWxkIiwibWFyZ2luIiwiYm90dG9tIiwicmlnaHQiLCJtYXJnaW5zIiwicmVtb3ZlQ2hpbGQiLCJfY3NzQ2xhc3NlcyIsIl9jc3NDbGFzc0VsZW1zIiwicmVtb3ZlQ2xhc3NUb2dnbGUiLCJzZXRDbGFzc1RvZ2dsZSIsImNsYXNzZXMiLCJlbGVtcyIsInJlbW92ZUNsYXNzIiwidHJhbnNsYXRlIiwibWF4IiwibWluIiwidmFsaWRhdGlvbkNhbGxiYWNrIiwidGltZVN0YW1wIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIlUiLCJmbG9hdHZhbCIsIm51bWJlciIsIl9nZXRDb21wdXRlZFN0eWxlIiwiY3VycmVudFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIl9kaW1lbnNpb24iLCJ3aGljaCIsIm91dGVyIiwiaW5jbHVkZU1hcmdpbiIsIl90eXBlIiwiRG9tRWxlbWVudCIsInN1YnN0ciIsImRpbWVuc2lvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIl9jYW1lbENhc2UiLCJzdHIiLCJyZXBsYWNlIiwiZyIsImxhc3RUaW1lIiwidmVuZG9ycyIsIl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImN1cnJUaW1lIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJsb2dsZXZlbHMiLCJtZXRob2QiLCJ0aW1lIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsImFyZ3MiLCJmdW5jIiwidiIsIkhUTUxFbGVtZW50IiwiU1ZHRWxlbWVudCIsIm5vZGVUeXBlIiwibm9kZU5hbWUiLCJfZ2V0IiwiTm9kZUxpc3QiLCJyZWYiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwicmVsYXRpdmVUb1ZpZXdwb3J0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsImNsYXNzbmFtZSIsIlJlZ0V4cCIsImpvaW4iLCJvcHRpb24iLCJhZGRJbmRpY2F0b3JzIiwicmVtb3ZlSW5kaWNhdG9ycyIsInNldFR3ZWVuIiwicmVtb3ZlVHdlZW4iLCJzZXRWZWxvY2l0eSIsInJlbW92ZVZlbG9jaXR5IiwibSIsImQiLCJfX2VzTW9kdWxlIiwicCIsIm1lcmdlU2V0dGluZ3MiLCJyZXNvbHZlU2xpZGVzTnVtYmVyIiwic2VsZWN0b3JXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW5uZXJFbGVtZW50cyIsImNoaWxkcmVuIiwiY3VycmVudFNsaWRlIiwibG9vcCIsInN0YXJ0SW5kZXgiLCJwZXJQYWdlIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ3ZWJraXRPck5vdCIsImRyYWdnYWJsZSIsInBvaW50ZXJEb3duIiwiZHJhZyIsInN0YXJ0WCIsImVuZFgiLCJzdGFydFkiLCJsZXRJdEdvIiwicHJldmVudENsaWNrIiwidG91Y2hzdGFydEhhbmRsZXIiLCJ0b3VjaGVuZEhhbmRsZXIiLCJ0b3VjaG1vdmVIYW5kbGVyIiwibW91c2Vkb3duSGFuZGxlciIsIm1vdXNldXBIYW5kbGVyIiwibW91c2VsZWF2ZUhhbmRsZXIiLCJtb3VzZW1vdmVIYW5kbGVyIiwiZGlyZWN0aW9uIiwicnRsIiwiYnVpbGRTbGlkZXJGcmFtZSIsIm9uSW5pdCIsInNsaWRlckZyYW1lIiwiZW5hYmxlVHJhbnNpdGlvbiIsImN1cnNvciIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJidWlsZFNsaWRlckZyYW1lSXRlbSIsImNsb25lTm9kZSIsImlubmVySFRNTCIsInNsaWRlVG9DdXJyZW50IiwiY3NzRmxvYXQiLCJpbm5lcldpZHRoIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJ3ZWJraXRUcmFuc2l0aW9uIiwiZWFzaW5nIiwidHJhbnNpdGlvbiIsImFicyIsIm11bHRpcGxlRHJhZyIsImNlaWwiLCJwcmV2IiwibmV4dCIsInN0b3BQcm9wYWdhdGlvbiIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlQWZ0ZXJEcmFnIiwiY2xlYXJEcmFnIiwiaW5zZXJ0IiwicmVtb3ZlQXR0cmlidXRlIiwidHJhbnNmb3JtIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJ0YXJnZXRlZENsYXNzIiwiYWNjb3JkaW9uRWxlbWVudCIsIm93blByb3BzIiwicmVzQXJyYXkiLCJodG1sIiwibWVkaWFRdWVyaWVzIiwic20iLCJtb2IiLCJ0YWIiLCJsYXAiLCJkZXMiLCJsZyIsInhsIiwibGFuZHNjYXBlIiwicG90cmFpdCIsImJyZWFrcG9pbnQiLCJtZWRpYXF1ZXJ5IiwiZW5xdWlyZSIsIm1lbnVJY29uIiwibW9iaW1lbnUiLCJzaXRlYm9keSIsIm1haW5tZW51IiwidmVydGljYWxNZW51IiwiaGFuZGxlVGFibGV0Q2hhbmdlIiwiY2xpY2tlZE1lbnUiLCJlbCIsInNsaWRlc2hvd1NlbGVjdG9yIiwicHJldmlvdXNTbGlkZSIsIm5leHRTbGlkZSIsInNsaWRlc2hvdyIsIlNpZW1hIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7OztBQVFhOztBQUFBLENBQUMsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsV0FBU0MsQ0FBVCxDQUFXQyxDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDLFFBQUlDLENBQUMsR0FBQyxJQUFOO0FBQUEsUUFBV0MsQ0FBQyxHQUFDO0FBQUNDLFVBQUksRUFBQyxnQkFBVTtBQUFDLFlBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTixDQUFkLENBQUgsRUFBb0IsT0FBT0EsQ0FBQyxDQUFDTyxNQUFGLElBQVVQLENBQUMsQ0FBQ1EsR0FBRixDQUFNLFVBQVNDLENBQVQsRUFBVztBQUFDLGlCQUFPLElBQUlWLENBQUosQ0FBTVUsQ0FBTixFQUFRUixDQUFSLENBQVA7QUFBa0IsU0FBcEMsQ0FBVixFQUFnRCxDQUFDLENBQXhEO0FBQTBELGFBQUtTLE9BQUwsR0FBYUMsQ0FBQyxDQUFDO0FBQUNDLGtCQUFRLEVBQUMsR0FBVjtBQUFjQyxvQkFBVSxFQUFDLENBQXpCO0FBQTJCQyxjQUFJLEVBQUMsQ0FBQyxDQUFqQztBQUFtQ0MscUJBQVcsRUFBQyxDQUFDLENBQWhEO0FBQWtEQyxrQkFBUSxFQUFDLENBQUMsQ0FBNUQ7QUFBOERDLHNCQUFZLEVBQUMsSUFBM0U7QUFBZ0ZDLHVCQUFhLEVBQUMsTUFBOUY7QUFBcUdDLHFCQUFXLEVBQUMsTUFBakg7QUFBd0hDLHFCQUFXLEVBQUMsV0FBcEk7QUFBZ0pDLGtCQUFRLEVBQUMsb0JBQVUsQ0FBRTtBQUFySyxTQUFELEVBQXdLcEIsQ0FBeEssQ0FBZCxFQUF5TCxLQUFLcUIsU0FBTCxHQUFlQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJ4QixDQUF2QixDQUF4TSxFQUFrTyxLQUFLeUIsUUFBTCxHQUFjLEtBQUtILFNBQUwsQ0FBZUksZ0JBQWYsQ0FBZ0MsTUFBSSxLQUFLaEIsT0FBTCxDQUFhTyxZQUFqRCxDQUFoUDtBQUErUyxZQUFJUixDQUFDLEdBQUMsS0FBS0MsT0FBWDtBQUFBLFlBQW1CUCxDQUFDLEdBQUNNLENBQUMsQ0FBQ0ssSUFBdkI7QUFBQSxZQUE0QmEsQ0FBQyxHQUFDbEIsQ0FBQyxDQUFDTyxRQUFoQztBQUFBLFlBQXlDbEIsQ0FBQyxHQUFDVyxDQUFDLENBQUNJLFVBQTdDO0FBQXdEVixTQUFDLElBQUUsS0FBS21CLFNBQUwsQ0FBZU0sWUFBZixDQUE0QixNQUE1QixFQUFtQyxTQUFuQyxDQUFIOztBQUFpRCxhQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLSixRQUFMLENBQWNsQixNQUE1QixFQUFtQ3NCLENBQUMsRUFBcEMsRUFBdUM7QUFBQyxjQUFJQyxDQUFDLEdBQUMsS0FBS0wsUUFBTCxDQUFjSSxDQUFkLENBQU47QUFBdUJDLFdBQUMsQ0FBQ0MsU0FBRixDQUFZQyxHQUFaLENBQWdCLFlBQWhCLEdBQThCLEtBQUtDLFdBQUwsQ0FBaUJILENBQWpCLENBQTlCLEVBQWtELEtBQUtJLGFBQUwsQ0FBbUJKLENBQW5CLENBQWxELEVBQXdFLEtBQUtLLFVBQUwsQ0FBZ0JMLENBQWhCLENBQXhFLEVBQTJGM0IsQ0FBQyxJQUFFLEtBQUtpQyxPQUFMLENBQWFOLENBQWIsQ0FBOUY7QUFBOEc7O0FBQUEsWUFBR0gsQ0FBSCxFQUFLO0FBQUMsY0FBSVUsQ0FBQyxHQUFDLEtBQUtaLFFBQUwsQ0FBYyxDQUFkLENBQU47QUFBdUIsc0JBQVUsT0FBTzNCLENBQWpCLElBQW9CQSxDQUFDLEdBQUMsS0FBSzJCLFFBQUwsQ0FBY2xCLE1BQXBDLEtBQTZDOEIsQ0FBQyxHQUFDLEtBQUtaLFFBQUwsQ0FBYzNCLENBQWQsQ0FBL0MsR0FBaUUsS0FBS3dDLGFBQUwsQ0FBbUJELENBQW5CLEVBQXFCLENBQUMsQ0FBdEIsQ0FBakU7QUFBMEY7O0FBQUFuQyxTQUFDLENBQUNxQyxZQUFGO0FBQWlCLE9BQTV5QjtBQUE2eUJMLG1CQUFhLEVBQUMsdUJBQVN6QixDQUFULEVBQVc7QUFBQyxZQUFJTixDQUFDLEdBQUMsS0FBS08sT0FBWDtBQUFBLFlBQW1CaUIsQ0FBQyxHQUFDeEIsQ0FBQyxDQUFDUyxRQUF2QjtBQUFBLFlBQWdDZCxDQUFDLEdBQUNLLENBQUMsQ0FBQ2dCLFdBQXBDO0FBQUEsWUFBZ0RVLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ2UsYUFBRixDQUFnQixNQUFJMUIsQ0FBcEIsQ0FBbEQ7QUFBQSxZQUF5RWdDLENBQUMsR0FBQ08sQ0FBQyxDQUFDLFlBQUQsQ0FBNUU7QUFBMkZSLFNBQUMsQ0FBQ1csS0FBRixDQUFRVixDQUFSLElBQVdILENBQUMsR0FBQyxJQUFiO0FBQWtCLE9BQXA3QjtBQUFxN0JRLGdCQUFVLEVBQUMsb0JBQVMxQixDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDbUIsWUFBRixDQUFlLElBQWYsRUFBb0IsTUFBTWEsTUFBTixDQUFhWixDQUFiLENBQXBCLEdBQXFDQSxDQUFDLEVBQXRDO0FBQXlDLE9BQXIvQjtBQUFzL0JPLGFBQU8sRUFBQyxpQkFBUzNCLENBQVQsRUFBVztBQUFDLFlBQUlOLENBQUMsR0FBQyxLQUFLTyxPQUFYO0FBQUEsWUFBbUJpQixDQUFDLEdBQUN4QixDQUFDLENBQUNlLGFBQXZCO0FBQUEsWUFBcUNwQixDQUFDLEdBQUNLLENBQUMsQ0FBQ2dCLFdBQXpDO0FBQUEsWUFBcURVLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ2UsYUFBRixDQUFnQixNQUFJRyxDQUFwQixDQUF2RDtBQUFBLFlBQThFRyxDQUFDLEdBQUNyQixDQUFDLENBQUNlLGFBQUYsQ0FBZ0IsTUFBSTFCLENBQXBCLENBQWhGO0FBQXVHK0IsU0FBQyxDQUFDRCxZQUFGLENBQWUsTUFBZixFQUFzQixLQUF0QixHQUE2QkMsQ0FBQyxDQUFDRCxZQUFGLENBQWUsZUFBZixFQUErQixPQUEvQixDQUE3QixFQUFxRUUsQ0FBQyxDQUFDRixZQUFGLENBQWUsTUFBZixFQUFzQixVQUF0QixDQUFyRTtBQUF1RyxPQUF4dEM7QUFBeXRDYyxnQkFBVSxFQUFDLG9CQUFTakMsQ0FBVCxFQUFXTixDQUFYLEVBQWE7QUFBQyxZQUFJd0IsQ0FBQyxHQUFDLEtBQUtqQixPQUFMLENBQWFRLGFBQW5CO0FBQWlDVCxTQUFDLENBQUNlLGFBQUYsQ0FBZ0IsTUFBSUcsQ0FBcEIsRUFBdUJDLFlBQXZCLENBQW9DLGVBQXBDLEVBQW9EekIsQ0FBcEQ7QUFBdUQsT0FBMTBDO0FBQTIwQ3dDLHlCQUFtQixFQUFDLDZCQUFTbEMsQ0FBVCxFQUFXO0FBQUMsYUFBSSxJQUFJTixDQUFDLEdBQUNNLENBQUMsQ0FBQ21DLE1BQVIsRUFBZWpCLENBQUMsR0FBQyxLQUFLakIsT0FBdEIsRUFBOEJaLENBQUMsR0FBQzZCLENBQUMsQ0FBQ1QsYUFBbEMsRUFBZ0RXLENBQUMsR0FBQ0YsQ0FBQyxDQUFDUCxXQUFwRCxFQUFnRVUsQ0FBQyxHQUFDSCxDQUFDLENBQUNaLFdBQXBFLEVBQWdGc0IsQ0FBQyxHQUFDLENBQXRGLEVBQXdGQSxDQUFDLEdBQUMsS0FBS1osUUFBTCxDQUFjbEIsTUFBeEcsRUFBK0c4QixDQUFDLEVBQWhIO0FBQW1ILGNBQUcsS0FBS1osUUFBTCxDQUFjWSxDQUFkLEVBQWlCUSxRQUFqQixDQUEwQjFDLENBQTFCLENBQUgsRUFBZ0M7QUFBQyxhQUFDQSxDQUFDLENBQUMyQyxTQUFGLENBQVlDLEtBQVosQ0FBa0JqRCxDQUFsQixLQUFzQkssQ0FBQyxDQUFDMkMsU0FBRixDQUFZQyxLQUFaLENBQWtCbEIsQ0FBbEIsQ0FBdkIsTUFBK0NwQixDQUFDLENBQUN1QyxjQUFGLElBQW1CbEIsQ0FBQyxJQUFFLEtBQUttQixnQkFBTCxDQUFzQlosQ0FBdEIsQ0FBdEIsRUFBK0MsS0FBS0MsYUFBTCxDQUFtQixLQUFLYixRQUFMLENBQWNZLENBQWQsQ0FBbkIsQ0FBOUY7QUFBb0k7QUFBTTtBQUE5UjtBQUErUixPQUExb0Q7QUFBMm9ESixpQkFBVyxFQUFDLHFCQUFTeEIsQ0FBVCxFQUFXO0FBQUMsWUFBSU4sQ0FBQyxHQUFDLEtBQUtPLE9BQUwsQ0FBYVMsV0FBbkI7QUFBK0JWLFNBQUMsQ0FBQ2UsYUFBRixDQUFnQixNQUFJckIsQ0FBcEIsRUFBdUJxQyxLQUF2QixDQUE2QlUsTUFBN0IsR0FBb0MsQ0FBcEM7QUFBc0MsT0FBeHVEO0FBQXl1RFosbUJBQWEsRUFBQyx1QkFBUzdCLENBQVQsRUFBV04sQ0FBWCxFQUFhO0FBQUMsWUFBSXdCLENBQUo7QUFBQSxZQUFNN0IsQ0FBQyxHQUFDLEVBQUUsSUFBRXFELFNBQVMsQ0FBQzVDLE1BQVosSUFBb0IsS0FBSyxDQUFMLEtBQVNKLENBQS9CLEtBQW1DQSxDQUEzQztBQUFBLFlBQTZDMEIsQ0FBQyxHQUFDLEtBQUtuQixPQUFwRDtBQUFBLFlBQTREb0IsQ0FBQyxHQUFDRCxDQUFDLENBQUNWLFdBQWhFO0FBQUEsWUFBNEVrQixDQUFDLEdBQUNSLENBQUMsQ0FBQ2YsSUFBaEY7QUFBQSxZQUFxRmQsQ0FBQyxHQUFDNkIsQ0FBQyxDQUFDUixRQUF6RjtBQUFBLFlBQWtHcEIsQ0FBQyxHQUFDUSxDQUFDLENBQUNlLGFBQUYsQ0FBZ0IsTUFBSU0sQ0FBcEIsQ0FBcEc7QUFBQSxZQUEySDVCLENBQUMsR0FBQ0QsQ0FBQyxDQUFDbUQsWUFBL0g7QUFBNEkzQyxTQUFDLENBQUNzQixTQUFGLENBQVlzQixNQUFaLENBQW1CLFdBQW5CLEdBQWdDdkQsQ0FBQyxLQUFHRyxDQUFDLENBQUN1QyxLQUFGLENBQVFVLE1BQVIsR0FBZSxNQUFsQixDQUFqQyxFQUEyRCxJQUFFSSxRQUFRLENBQUNyRCxDQUFDLENBQUN1QyxLQUFGLENBQVFVLE1BQVQsQ0FBVixJQUE0QnZCLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBSzRCLHFCQUFxQixDQUFDLFlBQVU7QUFBQ3RELFdBQUMsQ0FBQ3VDLEtBQUYsQ0FBUVUsTUFBUixHQUFlLENBQWY7QUFBaUIsU0FBN0IsQ0FBdEQsS0FBdUZ2QixDQUFDLEdBQUMsQ0FBQyxDQUFILEVBQUs0QixxQkFBcUIsQ0FBQyxZQUFVO0FBQUN0RCxXQUFDLENBQUN1QyxLQUFGLENBQVFVLE1BQVIsR0FBZWhELENBQUMsR0FBQyxJQUFqQjtBQUFzQixTQUFsQyxDQUFqSCxDQUEzRCxFQUFpTm1DLENBQUMsSUFBRSxLQUFLSyxVQUFMLENBQWdCakMsQ0FBaEIsRUFBa0JrQixDQUFsQixDQUFwTixFQUF5TzdCLENBQUMsSUFBRUUsQ0FBQyxDQUFDUyxDQUFELEVBQUcsS0FBS2dCLFFBQVIsQ0FBN087QUFBK1AsT0FBaHBFO0FBQWlwRXdCLHNCQUFnQixFQUFDLDBCQUFTeEMsQ0FBVCxFQUFXO0FBQUMsYUFBSSxJQUFJTixDQUFDLEdBQUMsS0FBS08sT0FBTCxDQUFhSSxJQUFuQixFQUF3QmEsQ0FBQyxHQUFDLEtBQUtGLFFBQUwsQ0FBY2xCLE1BQXhDLEVBQStDVCxDQUFDLEdBQUMsQ0FBckQsRUFBdURBLENBQUMsR0FBQzZCLENBQXpELEVBQTJEN0IsQ0FBQyxFQUE1RDtBQUErRCxjQUFHQSxDQUFDLElBQUVXLENBQU4sRUFBUTtBQUFDLGdCQUFJb0IsQ0FBQyxHQUFDLEtBQUtKLFFBQUwsQ0FBYzNCLENBQWQsQ0FBTjtBQUF1QitCLGFBQUMsQ0FBQ0UsU0FBRixDQUFZYyxRQUFaLENBQXFCLFdBQXJCLEtBQW1DaEIsQ0FBQyxDQUFDRSxTQUFGLENBQVl5QixNQUFaLENBQW1CLFdBQW5CLENBQW5DLEVBQW1FckQsQ0FBQyxJQUFFLEtBQUt1QyxVQUFMLENBQWdCYixDQUFoQixFQUFrQixDQUFDLENBQW5CLENBQXRFLEVBQTRGLEtBQUtJLFdBQUwsQ0FBaUJKLENBQWpCLENBQTVGO0FBQWdIO0FBQS9NO0FBQWdOLE9BQTkzRTtBQUErM0U0QixtQkFBYSxFQUFDLHlCQUFVO0FBQUMsYUFBSSxJQUFJaEQsQ0FBSixFQUFNTixDQUFOLEVBQVF3QixDQUFDLEdBQUMsS0FBS2pCLE9BQWYsRUFBdUJaLENBQUMsR0FBQzZCLENBQUMsQ0FBQ1YsWUFBM0IsRUFBd0NZLENBQUMsR0FBQ0YsQ0FBQyxDQUFDUixXQUE1QyxFQUF3RFcsQ0FBQyxHQUFDLEtBQUtSLFNBQUwsQ0FBZUksZ0JBQWYsQ0FBZ0MsTUFBSTVCLENBQUosR0FBTSxZQUF0QyxDQUExRCxFQUE4R3VDLENBQUMsR0FBQyxDQUFwSCxFQUFzSEEsQ0FBQyxHQUFDUCxDQUFDLENBQUN2QixNQUExSCxFQUFpSThCLENBQUMsRUFBbEk7QUFBcUlsQyxXQUFDLEdBQUMyQixDQUFDLENBQUNPLENBQUQsQ0FBRCxDQUFLYixhQUFMLENBQW1CLE1BQUlLLENBQXZCLENBQUYsRUFBNEIwQixxQkFBcUIsQ0FBQyxZQUFVO0FBQUNwRCxhQUFDLENBQUNxQyxLQUFGLENBQVFVLE1BQVIsR0FBZSxNQUFmLEVBQXNCekMsQ0FBQyxHQUFDTixDQUFDLENBQUN1RCxZQUExQixFQUF1Q0gscUJBQXFCLENBQUMsWUFBVTtBQUFDcEQsZUFBQyxDQUFDcUMsS0FBRixDQUFRVSxNQUFSLEdBQWV6QyxDQUFDLEdBQUMsSUFBakI7QUFBc0IsYUFBbEMsQ0FBNUQ7QUFBZ0csV0FBNUcsQ0FBakQ7QUFBckk7QUFBb1MsT0FBNXJGO0FBQTZyRmtELGtCQUFZLEVBQUMsc0JBQVNsRCxDQUFULEVBQVc7QUFBQyxhQUFLa0MsbUJBQUwsQ0FBeUJsQyxDQUF6QjtBQUE0QixPQUFsdkY7QUFBbXZGbUQsb0JBQWMsRUFBQyx3QkFBU25ELENBQVQsRUFBVztBQUFDLGVBQUtBLENBQUMsQ0FBQ29ELE9BQVAsSUFBZ0IsS0FBS2xCLG1CQUFMLENBQXlCbEMsQ0FBekIsQ0FBaEI7QUFBNEM7QUFBMXpGLEtBQWI7QUFBeTBGLFNBQUs4QixZQUFMLEdBQWtCLFlBQVU7QUFBQyxVQUFJOUIsQ0FBQyxHQUFDTixDQUFOO0FBQVFNLE9BQUMsQ0FBQ2tELFlBQUYsR0FBZWxELENBQUMsQ0FBQ2tELFlBQUYsQ0FBZUcsSUFBZixDQUFvQnJELENBQXBCLENBQWYsRUFBc0NBLENBQUMsQ0FBQ21ELGNBQUYsR0FBaUJuRCxDQUFDLENBQUNtRCxjQUFGLENBQWlCRSxJQUFqQixDQUFzQnJELENBQXRCLENBQXZELEVBQWdGQSxDQUFDLENBQUNnRCxhQUFGLEdBQWdCaEQsQ0FBQyxDQUFDZ0QsYUFBRixDQUFnQkssSUFBaEIsQ0FBcUJyRCxDQUFyQixDQUFoRyxFQUF3SEEsQ0FBQyxDQUFDYSxTQUFGLENBQVl5QyxnQkFBWixDQUE2QixPQUE3QixFQUFxQ3RELENBQUMsQ0FBQ2tELFlBQXZDLENBQXhILEVBQTZLbEQsQ0FBQyxDQUFDYSxTQUFGLENBQVl5QyxnQkFBWixDQUE2QixTQUE3QixFQUF1Q3RELENBQUMsQ0FBQ21ELGNBQXpDLENBQTdLLEVBQXNPOUQsQ0FBQyxDQUFDaUUsZ0JBQUYsQ0FBbUIsUUFBbkIsRUFBNEJ0RCxDQUFDLENBQUNnRCxhQUE5QixDQUF0TztBQUFtUixLQUF4VCxFQUF5VCxLQUFLTyxZQUFMLEdBQWtCLFlBQVU7QUFBQyxVQUFJdkQsQ0FBQyxHQUFDTixDQUFOO0FBQVFNLE9BQUMsQ0FBQ2EsU0FBRixDQUFZMkMsbUJBQVosQ0FBZ0MsT0FBaEMsRUFBd0N4RCxDQUFDLENBQUNrRCxZQUExQyxHQUF3RGxELENBQUMsQ0FBQ2EsU0FBRixDQUFZMkMsbUJBQVosQ0FBZ0MsU0FBaEMsRUFBMEN4RCxDQUFDLENBQUNtRCxjQUE1QyxDQUF4RCxFQUFvSDlELENBQUMsQ0FBQ21FLG1CQUFGLENBQXNCLFFBQXRCLEVBQStCeEQsQ0FBQyxDQUFDZ0QsYUFBakMsQ0FBcEg7QUFBb0ssS0FBbGdCOztBQUFtZ0IsUUFBSXBCLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVM1QixDQUFULEVBQVc7QUFBQyxhQUFNLFlBQVUsT0FBT2MsUUFBUSxDQUFDMkMsZUFBVCxDQUF5QjFCLEtBQXpCLENBQStCL0IsQ0FBL0IsQ0FBakIsR0FBbURBLENBQW5ELElBQXNEQSxDQUFDLEdBQUNrQixDQUFDLENBQUNsQixDQUFELENBQUgsRUFBT0EsQ0FBQyxHQUFDLFNBQVNnQyxNQUFULENBQWdCaEMsQ0FBaEIsQ0FBL0QsQ0FBTjtBQUF5RixLQUEzRztBQUFBLFFBQTRHa0IsQ0FBQyxHQUFDLFNBQUZBLENBQUUsQ0FBU2xCLENBQVQsRUFBVztBQUFDLGFBQU9BLENBQUMsQ0FBQzBELE1BQUYsQ0FBUyxDQUFULEVBQVlDLFdBQVosS0FBMEIzRCxDQUFDLENBQUM0RCxLQUFGLENBQVEsQ0FBUixDQUFqQztBQUE0QyxLQUF0SztBQUFBLFFBQXVLMUQsQ0FBQyxHQUFDLFNBQUZBLENBQUUsQ0FBU0YsQ0FBVCxFQUFXTixDQUFYLEVBQWE7QUFBQyxXQUFJLElBQUl3QixDQUFSLElBQWF4QixDQUFiO0FBQWVNLFNBQUMsQ0FBQ2tCLENBQUQsQ0FBRCxHQUFLeEIsQ0FBQyxDQUFDd0IsQ0FBRCxDQUFOO0FBQWY7O0FBQXlCLGFBQU9sQixDQUFQO0FBQVMsS0FBek47O0FBQTBOWCxLQUFDLENBQUN5RCxxQkFBRixHQUF3QnpELENBQUMsQ0FBQ3lELHFCQUFGLElBQXlCekQsQ0FBQyxDQUFDd0UsMkJBQTNCLElBQXdELFVBQVM3RCxDQUFULEVBQVc7QUFBQ1gsT0FBQyxDQUFDeUUsVUFBRixDQUFhOUQsQ0FBYixFQUFlLE1BQUksRUFBbkI7QUFBdUIsS0FBbkgsRUFBb0hOLENBQUMsQ0FBQ0MsSUFBRixFQUFwSDtBQUE2SDs7QUFBQSxNQUFJeUIsQ0FBQyxHQUFDLENBQU47QUFBUSxXQUE0QixLQUFLLENBQUwsS0FBUzJDLE1BQU0sQ0FBQ0MsT0FBNUMsR0FBb0RELE1BQU0sQ0FBQ0MsT0FBUCxHQUFlMUUsQ0FBbkUsR0FBcUVELENBQUMsQ0FBQzRFLFNBQUYsR0FBWTNFLENBQWpGO0FBQW1GLENBQTF4SCxDQUEyeEg0RSxNQUEzeEgsQ0FBRCxDOzs7Ozs7Ozs7Ozs7QUNSQTs7QUFFYkMsTUFBTSxDQUFDQyxjQUFQLENBQXNCSixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQ0ssT0FBSyxFQUFFO0FBRG9DLENBQTdDO0FBR0FMLE9BQU8sQ0FBQ00sYUFBUixHQUF3QkEsYUFBeEI7QUFDQU4sT0FBTyxDQUFDTyxlQUFSLEdBQTBCQSxlQUExQjtBQUNBLElBQUlDLFNBQVMsR0FBRyxLQUFLLENBQXJCOztBQUNBLElBQUksT0FBT04sTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQyxNQUFJTyxrQkFBa0IsR0FBRyxTQUFTQSxrQkFBVCxDQUE0QkMsVUFBNUIsRUFBd0M7QUFDL0QsV0FBTztBQUNMQyxXQUFLLEVBQUVELFVBREY7QUFFTEUsYUFBTyxFQUFFLEtBRko7QUFHTEMsaUJBQVcsRUFBRSxTQUFTQSxXQUFULEdBQXVCLENBQUUsQ0FIakM7QUFJTEMsb0JBQWMsRUFBRSxTQUFTQSxjQUFULEdBQTBCLENBQUU7QUFKdkMsS0FBUDtBQU1ELEdBUEQ7O0FBUUFaLFFBQU0sQ0FBQ2EsVUFBUCxHQUFvQmIsTUFBTSxDQUFDYSxVQUFQLElBQXFCTixrQkFBekM7QUFDQUQsV0FBUyxHQUFHUSxtQkFBTyxDQUFDLDBEQUFELENBQW5CO0FBQ0Q7O0FBRUQsSUFBSUMsV0FBVyxHQUFHLHVDQUFsQjs7QUFFQSxTQUFTWCxhQUFULENBQXVCWSxFQUF2QixFQUEyQjtBQUN6QixNQUFJQyxLQUFLLEdBQUd6QyxTQUFTLENBQUM1QyxNQUFWLEdBQW1CLENBQW5CLElBQXdCNEMsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQjBDLFNBQXpDLEdBQXFEMUMsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0V1QyxXQUFoRjs7QUFFQSxNQUFJLENBQUNULFNBQUwsRUFBZ0I7QUFDZDtBQUNEOztBQUVELE1BQUlhLE9BQU8sR0FBRztBQUNaL0MsU0FBSyxFQUFFLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEI0QyxRQUFFLElBQUlBLEVBQUUsQ0FBQyxJQUFELENBQVI7QUFDRCxLQUhXO0FBSVpJLFdBQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCSixRQUFFLElBQUlBLEVBQUUsRUFBUjtBQUNEO0FBTlcsR0FBZDtBQVFBVixXQUFTLENBQUNlLFFBQVYsQ0FBbUJKLEtBQW5CLEVBQTBCRSxPQUExQjtBQUNBLFNBQU9BLE9BQVA7QUFDRDs7QUFFRCxTQUFTZCxlQUFULENBQXlCYyxPQUF6QixFQUFrQztBQUNoQyxNQUFJRixLQUFLLEdBQUd6QyxTQUFTLENBQUM1QyxNQUFWLEdBQW1CLENBQW5CLElBQXdCNEMsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQjBDLFNBQXpDLEdBQXFEMUMsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0V1QyxXQUFoRjs7QUFFQSxNQUFJLENBQUNULFNBQUwsRUFBZ0I7QUFDZDtBQUNEOztBQUNEQSxXQUFTLENBQUNnQixVQUFWLENBQXFCTCxLQUFyQixFQUE0QkUsT0FBNUI7QUFDRDs7QUFFRHJCLE9BQU8sV0FBUCxHQUFrQlEsU0FBbEIsQzs7Ozs7Ozs7Ozs7QUNuREEsSUFBSWlCLFlBQVksR0FBR1QsbUJBQU8sQ0FBQyxxRUFBRCxDQUExQjs7QUFDQSxJQUFJVSxJQUFJLEdBQUdWLG1CQUFPLENBQUMscURBQUQsQ0FBUCxDQUFrQlUsSUFBN0I7QUFFQTs7Ozs7Ozs7O0FBT0EsU0FBU0MsVUFBVCxDQUFvQlIsS0FBcEIsRUFBMkJTLGVBQTNCLEVBQTRDO0FBQ3hDLE9BQUtULEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtTLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLE9BQUtDLEdBQUwsR0FBVzVCLE1BQU0sQ0FBQ2EsVUFBUCxDQUFrQkksS0FBbEIsQ0FBWDtBQUVBLE1BQUlZLElBQUksR0FBRyxJQUFYOztBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsVUFBU0YsR0FBVCxFQUFjO0FBQzFCO0FBQ0FDLFFBQUksQ0FBQ0QsR0FBTCxHQUFXQSxHQUFHLENBQUNHLGFBQUosSUFBcUJILEdBQWhDO0FBQ0FDLFFBQUksQ0FBQ0csTUFBTDtBQUNILEdBSkQ7O0FBS0EsT0FBS0osR0FBTCxDQUFTakIsV0FBVCxDQUFxQixLQUFLbUIsUUFBMUI7QUFDSDs7QUFFREwsVUFBVSxDQUFDUSxTQUFYLEdBQXVCO0FBRW5CQyxZQUFVLEVBQUdULFVBRk07O0FBSW5COzs7Ozs7Ozs7QUFTQVUsWUFBVSxFQUFHLG9CQUFTaEIsT0FBVCxFQUFrQjtBQUMzQixRQUFJaUIsRUFBRSxHQUFHLElBQUliLFlBQUosQ0FBaUJKLE9BQWpCLENBQVQ7QUFDQSxTQUFLUSxRQUFMLENBQWNVLElBQWQsQ0FBbUJELEVBQW5CO0FBRUEsU0FBSzFCLE9BQUwsTUFBa0IwQixFQUFFLENBQUNFLEVBQUgsRUFBbEI7QUFDSCxHQWxCa0I7O0FBb0JuQjs7Ozs7QUFLQUMsZUFBYSxFQUFHLHVCQUFTcEIsT0FBVCxFQUFrQjtBQUM5QixRQUFJUSxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFDQUgsUUFBSSxDQUFDRyxRQUFELEVBQVcsVUFBUzNGLENBQVQsRUFBWWIsQ0FBWixFQUFlO0FBQzFCLFVBQUdhLENBQUMsQ0FBQ3dHLE1BQUYsQ0FBU3JCLE9BQVQsQ0FBSCxFQUFzQjtBQUNsQm5GLFNBQUMsQ0FBQ3lHLE9BQUY7QUFDQSxlQUFPLENBQUNkLFFBQVEsQ0FBQ2UsTUFBVCxDQUFnQnZILENBQWhCLEVBQWtCLENBQWxCLENBQVIsQ0FGa0IsQ0FFWTtBQUNqQztBQUNKLEtBTEcsQ0FBSjtBQU1ILEdBakNrQjs7QUFtQ25COzs7OztBQUtBdUYsU0FBTyxFQUFHLG1CQUFXO0FBQ2pCLFdBQU8sS0FBS2tCLEdBQUwsQ0FBU2xCLE9BQVQsSUFBb0IsS0FBS2dCLGVBQWhDO0FBQ0gsR0ExQ2tCOztBQTRDbkI7OztBQUdBaUIsT0FBSyxFQUFHLGlCQUFXO0FBQ2ZuQixRQUFJLENBQUMsS0FBS0csUUFBTixFQUFnQixVQUFTUixPQUFULEVBQWtCO0FBQ2xDQSxhQUFPLENBQUNzQixPQUFSO0FBQ0gsS0FGRyxDQUFKO0FBR0EsU0FBS2IsR0FBTCxDQUFTaEIsY0FBVCxDQUF3QixLQUFLa0IsUUFBN0I7QUFDQSxTQUFLSCxRQUFMLENBQWMvRixNQUFkLEdBQXVCLENBQXZCLENBTGUsQ0FLVztBQUM3QixHQXJEa0I7O0FBdURuQjs7O0FBR0FvRyxRQUFNLEVBQUcsa0JBQVc7QUFDaEIsUUFBSVksTUFBTSxHQUFHLEtBQUtsQyxPQUFMLEtBQWlCLElBQWpCLEdBQXdCLEtBQXJDO0FBRUFjLFFBQUksQ0FBQyxLQUFLRyxRQUFOLEVBQWdCLFVBQVNSLE9BQVQsRUFBa0I7QUFDbENBLGFBQU8sQ0FBQ3lCLE1BQUQsQ0FBUDtBQUNILEtBRkcsQ0FBSjtBQUdIO0FBaEVrQixDQUF2QjtBQW1FQS9DLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjJCLFVBQWpCLEM7Ozs7Ozs7Ozs7O0FDNUZBLElBQUlBLFVBQVUsR0FBR1gsbUJBQU8sQ0FBQyxpRUFBRCxDQUF4Qjs7QUFDQSxJQUFJK0IsSUFBSSxHQUFHL0IsbUJBQU8sQ0FBQyxxREFBRCxDQUFsQjs7QUFDQSxJQUFJVSxJQUFJLEdBQUdxQixJQUFJLENBQUNyQixJQUFoQjtBQUNBLElBQUlzQixVQUFVLEdBQUdELElBQUksQ0FBQ0MsVUFBdEI7QUFDQSxJQUFJbkgsT0FBTyxHQUFHa0gsSUFBSSxDQUFDbEgsT0FBbkI7QUFFQTs7Ozs7OztBQU1BLFNBQVNvSCxrQkFBVCxHQUErQjtBQUMzQixNQUFHLENBQUMvQyxNQUFNLENBQUNhLFVBQVgsRUFBdUI7QUFDbkIsVUFBTSxJQUFJbUMsS0FBSixDQUFVLDREQUFWLENBQU47QUFDSDs7QUFFRCxPQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLE9BQUtDLGtCQUFMLEdBQTBCLENBQUNsRCxNQUFNLENBQUNhLFVBQVAsQ0FBa0IsVUFBbEIsRUFBOEJILE9BQXpEO0FBQ0g7O0FBRURxQyxrQkFBa0IsQ0FBQ2QsU0FBbkIsR0FBK0I7QUFFM0JrQixhQUFXLEVBQUdKLGtCQUZhOztBQUkzQjs7Ozs7Ozs7Ozs7QUFXQTFCLFVBQVEsRUFBRyxrQkFBUytCLENBQVQsRUFBWXJILE9BQVosRUFBcUJzSCxhQUFyQixFQUFvQztBQUMzQyxRQUFJSixPQUFPLEdBQVcsS0FBS0EsT0FBM0I7QUFBQSxRQUNJdkIsZUFBZSxHQUFHMkIsYUFBYSxJQUFJLEtBQUtILGtCQUQ1Qzs7QUFHQSxRQUFHLENBQUNELE9BQU8sQ0FBQ0csQ0FBRCxDQUFYLEVBQWdCO0FBQ1pILGFBQU8sQ0FBQ0csQ0FBRCxDQUFQLEdBQWEsSUFBSTNCLFVBQUosQ0FBZTJCLENBQWYsRUFBa0IxQixlQUFsQixDQUFiO0FBQ0gsS0FOMEMsQ0FRM0M7OztBQUNBLFFBQUdvQixVQUFVLENBQUMvRyxPQUFELENBQWIsRUFBd0I7QUFDcEJBLGFBQU8sR0FBRztBQUFFcUMsYUFBSyxFQUFHckM7QUFBVixPQUFWO0FBQ0g7O0FBQ0QsUUFBRyxDQUFDSixPQUFPLENBQUNJLE9BQUQsQ0FBWCxFQUFzQjtBQUNsQkEsYUFBTyxHQUFHLENBQUNBLE9BQUQsQ0FBVjtBQUNIOztBQUNEeUYsUUFBSSxDQUFDekYsT0FBRCxFQUFVLFVBQVNvRixPQUFULEVBQWtCO0FBQzVCLFVBQUkyQixVQUFVLENBQUMzQixPQUFELENBQWQsRUFBeUI7QUFDckJBLGVBQU8sR0FBRztBQUFFL0MsZUFBSyxFQUFHK0M7QUFBVixTQUFWO0FBQ0g7O0FBQ0Q4QixhQUFPLENBQUNHLENBQUQsQ0FBUCxDQUFXakIsVUFBWCxDQUFzQmhCLE9BQXRCO0FBQ0gsS0FMRyxDQUFKO0FBT0EsV0FBTyxJQUFQO0FBQ0gsR0F0QzBCOztBQXdDM0I7Ozs7OztBQU1BRyxZQUFVLEVBQUcsb0JBQVM4QixDQUFULEVBQVlqQyxPQUFaLEVBQXFCO0FBQzlCLFFBQUlGLEtBQUssR0FBRyxLQUFLZ0MsT0FBTCxDQUFhRyxDQUFiLENBQVo7O0FBRUEsUUFBR25DLEtBQUgsRUFBVTtBQUNOLFVBQUdFLE9BQUgsRUFBWTtBQUNSRixhQUFLLENBQUNzQixhQUFOLENBQW9CcEIsT0FBcEI7QUFDSCxPQUZELE1BR0s7QUFDREYsYUFBSyxDQUFDMEIsS0FBTjtBQUNBLGVBQU8sS0FBS00sT0FBTCxDQUFhRyxDQUFiLENBQVA7QUFDSDtBQUNKOztBQUVELFdBQU8sSUFBUDtBQUNIO0FBNUQwQixDQUEvQjtBQStEQXZELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmlELGtCQUFqQixDOzs7Ozs7Ozs7OztBQ3BGQTs7Ozs7Ozs7OztBQVVBLFNBQVN4QixZQUFULENBQXNCeEYsT0FBdEIsRUFBK0I7QUFDM0IsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsR0FBQ0EsT0FBTyxDQUFDdUgsVUFBVCxJQUF1QixLQUFLQyxLQUFMLEVBQXZCO0FBQ0g7O0FBRURoQyxZQUFZLENBQUNVLFNBQWIsR0FBeUI7QUFFckJrQixhQUFXLEVBQUc1QixZQUZPOztBQUlyQjs7Ozs7QUFLQWdDLE9BQUssRUFBRyxpQkFBVztBQUNmLFFBQUcsS0FBS3hILE9BQUwsQ0FBYXdILEtBQWhCLEVBQXVCO0FBQ25CLFdBQUt4SCxPQUFMLENBQWF3SCxLQUFiO0FBQ0g7O0FBQ0QsU0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNILEdBZG9COztBQWdCckI7Ozs7O0FBS0FsQixJQUFFLEVBQUcsY0FBVztBQUNaLEtBQUMsS0FBS2tCLFdBQU4sSUFBcUIsS0FBS0QsS0FBTCxFQUFyQjtBQUNBLFNBQUt4SCxPQUFMLENBQWFxQyxLQUFiLElBQXNCLEtBQUtyQyxPQUFMLENBQWFxQyxLQUFiLEVBQXRCO0FBQ0gsR0F4Qm9COztBQTBCckI7Ozs7O0FBS0FxRixLQUFHLEVBQUcsZUFBVztBQUNiLFNBQUsxSCxPQUFMLENBQWFxRixPQUFiLElBQXdCLEtBQUtyRixPQUFMLENBQWFxRixPQUFiLEVBQXhCO0FBQ0gsR0FqQ29COztBQW1DckI7Ozs7OztBQU1BcUIsU0FBTyxFQUFHLG1CQUFXO0FBQ2pCLFNBQUsxRyxPQUFMLENBQWEwRyxPQUFiLEdBQXVCLEtBQUsxRyxPQUFMLENBQWEwRyxPQUFiLEVBQXZCLEdBQWdELEtBQUtnQixHQUFMLEVBQWhEO0FBQ0gsR0EzQ29COztBQTZDckI7Ozs7Ozs7QUFPQWpCLFFBQU0sRUFBRyxnQkFBU3ZFLE1BQVQsRUFBaUI7QUFDdEIsV0FBTyxLQUFLbEMsT0FBTCxLQUFpQmtDLE1BQWpCLElBQTJCLEtBQUtsQyxPQUFMLENBQWFxQyxLQUFiLEtBQXVCSCxNQUF6RDtBQUNIO0FBdERvQixDQUF6QjtBQTBEQTRCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnlCLFlBQWpCLEM7Ozs7Ozs7Ozs7O0FDekVBOzs7Ozs7QUFNQSxTQUFTQyxJQUFULENBQWNrQyxVQUFkLEVBQTBCQyxFQUExQixFQUE4QjtBQUMxQixNQUFJeEksQ0FBQyxHQUFRLENBQWI7QUFBQSxNQUNJUyxNQUFNLEdBQUc4SCxVQUFVLENBQUM5SCxNQUR4QjtBQUFBLE1BRUlnSSxJQUZKOztBQUlBLE9BQUl6SSxDQUFKLEVBQU9BLENBQUMsR0FBR1MsTUFBWCxFQUFtQlQsQ0FBQyxFQUFwQixFQUF3QjtBQUNwQnlJLFFBQUksR0FBR0QsRUFBRSxDQUFDRCxVQUFVLENBQUN2SSxDQUFELENBQVgsRUFBZ0JBLENBQWhCLENBQVQ7O0FBQ0EsUUFBR3lJLElBQUksS0FBSyxLQUFaLEVBQW1CO0FBQ2YsWUFEZSxDQUNSO0FBQ1Y7QUFDSjtBQUNKO0FBRUQ7Ozs7Ozs7O0FBTUEsU0FBU2pJLE9BQVQsQ0FBaUJzQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPZ0MsTUFBTSxDQUFDZ0MsU0FBUCxDQUFpQjRCLFFBQWpCLENBQTBCQyxLQUExQixDQUFnQzdGLE1BQWhDLE1BQTRDLGdCQUFuRDtBQUNIO0FBRUQ7Ozs7Ozs7O0FBTUEsU0FBUzZFLFVBQVQsQ0FBb0I3RSxNQUFwQixFQUE0QjtBQUN4QixTQUFPLE9BQU9BLE1BQVAsS0FBa0IsVUFBekI7QUFDSDs7QUFFRDRCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiZ0QsWUFBVSxFQUFHQSxVQURBO0FBRWJuSCxTQUFPLEVBQUdBLE9BRkc7QUFHYjZGLE1BQUksRUFBR0E7QUFITSxDQUFqQixDOzs7Ozs7Ozs7OztBQ3ZDQSxJQUFJdUIsa0JBQWtCLEdBQUdqQyxtQkFBTyxDQUFDLGlGQUFELENBQWhDOztBQUNBakIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlpRCxrQkFBSixFQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7Ozs7Ozs7O0FBZUEsQ0FBQyxVQUFVZ0IsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDdEIsTUFBSSw4QkFBT2xFLE9BQVAsT0FBbUIsUUFBdkIsRUFBaUM7QUFDN0JELFVBQU0sQ0FBQ0MsT0FBUCxHQUFpQmtFLE9BQU8sQ0FBQ0QsSUFBRCxDQUF4QjtBQUNILEdBRkQsTUFFTyxJQUFJLElBQUosRUFBZ0Q7QUFDbkRFLHFDQUFPLEVBQUQsb0NBQUtELE9BQUw7QUFBQTtBQUFBO0FBQUEsb0dBQU47QUFDSCxHQUZNLE1BRUEsRUFFTjtBQUNKLENBUkQsRUFRSSxPQUFPRSxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5QyxLQUFLbEUsTUFBTCxJQUFlLEtBQUtrRSxNQVJqRSxFQVF5RSxVQUFVSCxJQUFWLEVBQWdCO0FBRXJGOztBQUVBLE1BQUksSUFBSixFQUErQztBQUMzQ0EsUUFBSSxHQUFHL0QsTUFBUDtBQUNIOztBQUVELE1BQU1tRSxRQUFRLEdBQUc7QUFDYkMsT0FBRyxFQUFFLFVBRFE7QUFFYkMsVUFBTSxFQUFFLGFBRks7QUFHYkMsWUFBUSxFQUFFLFdBSEc7QUFJYlAsUUFBSSxFQUFFLElBSk87QUFLYlEsY0FBVSxFQUFFLEtBTEM7QUFNYkMsYUFBUyxFQUFFO0FBTkUsR0FBakI7QUFTQTs7Ozs7Ozs7QUFPQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFhO0FBRXhCLFFBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQVg7QUFDQSxRQUFJeEosQ0FBQyxHQUFHLENBQVI7QUFDQSxRQUFJUyxNQUFNLEdBQUc0QyxTQUFTLENBQUM1QyxNQUF2QjtBQUVBOztBQUNBLFFBQUlxRSxNQUFNLENBQUNnQyxTQUFQLENBQWlCNEIsUUFBakIsQ0FBMEJlLElBQTFCLENBQStCcEcsU0FBUyxDQUFDLENBQUQsQ0FBeEMsTUFBaUQsa0JBQXJELEVBQXlFO0FBQ3JFbUcsVUFBSSxHQUFHbkcsU0FBUyxDQUFDLENBQUQsQ0FBaEI7QUFDQXJELE9BQUM7QUFDSjtBQUVEOzs7QUFDQSxRQUFJMEosS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBVUMsR0FBVixFQUFlO0FBQ3ZCLFdBQUssSUFBSUMsSUFBVCxJQUFpQkQsR0FBakIsRUFBc0I7QUFDbEIsWUFBSTdFLE1BQU0sQ0FBQ2dDLFNBQVAsQ0FBaUIrQyxjQUFqQixDQUFnQ0osSUFBaEMsQ0FBcUNFLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLEVBQXFEO0FBQ2pEO0FBQ0EsY0FBSUosSUFBSSxJQUFJMUUsTUFBTSxDQUFDZ0MsU0FBUCxDQUFpQjRCLFFBQWpCLENBQTBCZSxJQUExQixDQUErQkUsR0FBRyxDQUFDQyxJQUFELENBQWxDLE1BQThDLGlCQUExRCxFQUE2RTtBQUN6RUwsb0JBQVEsQ0FBQ0ssSUFBRCxDQUFSLEdBQWlCTixNQUFNLENBQUMsSUFBRCxFQUFPQyxRQUFRLENBQUNLLElBQUQsQ0FBZixFQUF1QkQsR0FBRyxDQUFDQyxJQUFELENBQTFCLENBQXZCO0FBQ0gsV0FGRCxNQUVPO0FBQ0hMLG9CQUFRLENBQUNLLElBQUQsQ0FBUixHQUFpQkQsR0FBRyxDQUFDQyxJQUFELENBQXBCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osS0FYRDtBQWFBOzs7QUFDQSxXQUFPNUosQ0FBQyxHQUFHUyxNQUFYLEVBQW1CVCxDQUFDLEVBQXBCLEVBQXdCO0FBQ3BCLFVBQUkySixHQUFHLEdBQUd0RyxTQUFTLENBQUNyRCxDQUFELENBQW5CO0FBQ0EwSixXQUFLLENBQUNDLEdBQUQsQ0FBTDtBQUNIOztBQUVELFdBQU9KLFFBQVA7QUFDSCxHQWxDRDs7QUFvQ0EsV0FBU08sUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEJuSixPQUExQixFQUFtQztBQUMvQixTQUFLb0osUUFBTCxHQUFnQlYsTUFBTSxDQUFDTixRQUFELEVBQVdwSSxPQUFPLElBQUksRUFBdEIsQ0FBdEI7QUFDQSxTQUFLbUosTUFBTCxHQUFjQSxNQUFNLElBQUl0SSxRQUFRLENBQUNHLGdCQUFULENBQTBCLEtBQUtvSSxRQUFMLENBQWNiLFFBQXhDLENBQXhCO0FBQ0EsU0FBS2MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUszSixJQUFMO0FBQ0g7O0FBRUR3SixVQUFRLENBQUNoRCxTQUFULEdBQXFCO0FBQ2pCeEcsUUFBSSxFQUFFLGdCQUFXO0FBRWI7QUFDQSxVQUFJLENBQUNzSSxJQUFJLENBQUNzQixvQkFBVixFQUFnQztBQUM1QixhQUFLQyxVQUFMO0FBQ0E7QUFDSDs7QUFFRCxVQUFJekQsSUFBSSxHQUFHLElBQVg7QUFDQSxVQUFJMEQsY0FBYyxHQUFHO0FBQ2pCeEIsWUFBSSxFQUFFLEtBQUtvQixRQUFMLENBQWNwQixJQURIO0FBRWpCUSxrQkFBVSxFQUFFLEtBQUtZLFFBQUwsQ0FBY1osVUFGVDtBQUdqQkMsaUJBQVMsRUFBRSxDQUFDLEtBQUtXLFFBQUwsQ0FBY1gsU0FBZjtBQUhNLE9BQXJCO0FBTUEsV0FBS1ksUUFBTCxHQUFnQixJQUFJQyxvQkFBSixDQUF5QixVQUFTRyxPQUFULEVBQWtCO0FBQ3ZEOUosYUFBSyxDQUFDdUcsU0FBTixDQUFnQndELE9BQWhCLENBQXdCYixJQUF4QixDQUE2QlksT0FBN0IsRUFBc0MsVUFBVUUsS0FBVixFQUFpQjtBQUNuRCxjQUFJQSxLQUFLLENBQUNDLGNBQVYsRUFBMEI7QUFDdEI5RCxnQkFBSSxDQUFDdUQsUUFBTCxDQUFjUSxTQUFkLENBQXdCRixLQUFLLENBQUN6SCxNQUE5QjtBQUNBLGdCQUFJbUcsR0FBRyxHQUFHc0IsS0FBSyxDQUFDekgsTUFBTixDQUFhNEgsWUFBYixDQUEwQmhFLElBQUksQ0FBQ3NELFFBQUwsQ0FBY2YsR0FBeEMsQ0FBVjtBQUNBLGdCQUFJQyxNQUFNLEdBQUdxQixLQUFLLENBQUN6SCxNQUFOLENBQWE0SCxZQUFiLENBQTBCaEUsSUFBSSxDQUFDc0QsUUFBTCxDQUFjZCxNQUF4QyxDQUFiOztBQUNBLGdCQUFJLFVBQVVxQixLQUFLLENBQUN6SCxNQUFOLENBQWE2SCxPQUFiLENBQXFCQyxXQUFyQixFQUFkLEVBQWtEO0FBQzlDLGtCQUFJM0IsR0FBSixFQUFTO0FBQ0xzQixxQkFBSyxDQUFDekgsTUFBTixDQUFhbUcsR0FBYixHQUFtQkEsR0FBbkI7QUFDSDs7QUFDRCxrQkFBSUMsTUFBSixFQUFZO0FBQ1JxQixxQkFBSyxDQUFDekgsTUFBTixDQUFhb0csTUFBYixHQUFzQkEsTUFBdEI7QUFDSDtBQUNKLGFBUEQsTUFPTztBQUNIcUIsbUJBQUssQ0FBQ3pILE1BQU4sQ0FBYUosS0FBYixDQUFtQm1JLGVBQW5CLEdBQXFDLFNBQVM1QixHQUFULEdBQWUsR0FBcEQ7QUFDSDtBQUNKO0FBQ0osU0FoQkQ7QUFpQkgsT0FsQmUsRUFrQmJtQixjQWxCYSxDQUFoQjtBQW9CQTdKLFdBQUssQ0FBQ3VHLFNBQU4sQ0FBZ0J3RCxPQUFoQixDQUF3QmIsSUFBeEIsQ0FBNkIsS0FBS00sTUFBbEMsRUFBMEMsVUFBVWUsS0FBVixFQUFpQjtBQUN2RHBFLFlBQUksQ0FBQ3VELFFBQUwsQ0FBY2MsT0FBZCxDQUFzQkQsS0FBdEI7QUFDSCxPQUZEO0FBR0gsS0F2Q2dCO0FBeUNqQkUsa0JBQWMsRUFBRSwwQkFBWTtBQUN4QixVQUFJLENBQUMsS0FBS2hCLFFBQVYsRUFBb0I7QUFBRTtBQUFTOztBQUMvQixXQUFLRyxVQUFMO0FBQ0EsV0FBSzdDLE9BQUw7QUFDSCxLQTdDZ0I7QUErQ2pCNkMsY0FBVSxFQUFFLHNCQUFZO0FBQ3BCLFVBQUksQ0FBQyxLQUFLSCxRQUFWLEVBQW9CO0FBQUU7QUFBUzs7QUFFL0IsVUFBSXRELElBQUksR0FBRyxJQUFYO0FBQ0FuRyxXQUFLLENBQUN1RyxTQUFOLENBQWdCd0QsT0FBaEIsQ0FBd0JiLElBQXhCLENBQTZCLEtBQUtNLE1BQWxDLEVBQTBDLFVBQVVlLEtBQVYsRUFBaUI7QUFDdkQsWUFBSTdCLEdBQUcsR0FBRzZCLEtBQUssQ0FBQ0osWUFBTixDQUFtQmhFLElBQUksQ0FBQ3NELFFBQUwsQ0FBY2YsR0FBakMsQ0FBVjtBQUNBLFlBQUlDLE1BQU0sR0FBRzRCLEtBQUssQ0FBQ0osWUFBTixDQUFtQmhFLElBQUksQ0FBQ3NELFFBQUwsQ0FBY2QsTUFBakMsQ0FBYjs7QUFDQSxZQUFJLFVBQVU0QixLQUFLLENBQUNILE9BQU4sQ0FBY0MsV0FBZCxFQUFkLEVBQTJDO0FBQ3ZDLGNBQUkzQixHQUFKLEVBQVM7QUFDTDZCLGlCQUFLLENBQUM3QixHQUFOLEdBQVlBLEdBQVo7QUFDSDs7QUFDRCxjQUFJQyxNQUFKLEVBQVk7QUFDUjRCLGlCQUFLLENBQUM1QixNQUFOLEdBQWVBLE1BQWY7QUFDSDtBQUNKLFNBUEQsTUFPTztBQUNINEIsZUFBSyxDQUFDcEksS0FBTixDQUFZbUksZUFBWixHQUE4QixVQUFVNUIsR0FBVixHQUFnQixJQUE5QztBQUNIO0FBQ0osT0FiRDtBQWNILEtBakVnQjtBQW1FakIzQixXQUFPLEVBQUUsbUJBQVk7QUFDakIsVUFBSSxDQUFDLEtBQUswQyxRQUFWLEVBQW9CO0FBQUU7QUFBUzs7QUFDL0IsV0FBS0MsUUFBTCxDQUFjZ0IsVUFBZDtBQUNBLFdBQUtqQixRQUFMLEdBQWdCLElBQWhCO0FBQ0g7QUF2RWdCLEdBQXJCOztBQTBFQXBCLE1BQUksQ0FBQ3NDLFFBQUwsR0FBZ0IsVUFBU25CLE1BQVQsRUFBaUJuSixPQUFqQixFQUEwQjtBQUN0QyxXQUFPLElBQUlrSixRQUFKLENBQWFDLE1BQWIsRUFBcUJuSixPQUFyQixDQUFQO0FBQ0gsR0FGRDs7QUFJQSxNQUFJZ0ksSUFBSSxDQUFDdUMsTUFBVCxFQUFpQjtBQUNiLFFBQU1DLENBQUMsR0FBR3hDLElBQUksQ0FBQ3VDLE1BQWY7O0FBQ0FDLEtBQUMsQ0FBQzVDLEVBQUYsQ0FBSzBDLFFBQUwsR0FBZ0IsVUFBVXRLLE9BQVYsRUFBbUI7QUFDL0JBLGFBQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCO0FBQ0FBLGFBQU8sQ0FBQ3lLLFNBQVIsR0FBb0J6SyxPQUFPLENBQUN5SyxTQUFSLElBQXFCLFVBQXpDO0FBQ0EsVUFBSXZCLFFBQUosQ0FBYXNCLENBQUMsQ0FBQ0UsU0FBRixDQUFZLElBQVosQ0FBYixFQUFnQzFLLE9BQWhDO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0FMRDtBQU1IOztBQUVELFNBQU9rSixRQUFQO0FBQ0gsQ0FwS0QsRTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUEsU0FBU3lCLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxXQUFuQyxFQUFnRDtBQUM5QyxNQUFJLEVBQUVELFFBQVEsWUFBWUMsV0FBdEIsQ0FBSixFQUF3QztBQUN0QyxVQUFNLElBQUlDLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTQyxpQkFBVCxDQUEyQjdJLE1BQTNCLEVBQW1DOEksS0FBbkMsRUFBMEM7QUFDeEMsT0FBSyxJQUFJNUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRMLEtBQUssQ0FBQ25MLE1BQTFCLEVBQWtDVCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQUk2TCxVQUFVLEdBQUdELEtBQUssQ0FBQzVMLENBQUQsQ0FBdEI7QUFDQTZMLGNBQVUsQ0FBQ0MsVUFBWCxHQUF3QkQsVUFBVSxDQUFDQyxVQUFYLElBQXlCLEtBQWpEO0FBQ0FELGNBQVUsQ0FBQ0UsWUFBWCxHQUEwQixJQUExQjtBQUNBLFFBQUksV0FBV0YsVUFBZixFQUEyQkEsVUFBVSxDQUFDRyxRQUFYLEdBQXNCLElBQXRCO0FBQzNCbEgsVUFBTSxDQUFDQyxjQUFQLENBQXNCakMsTUFBdEIsRUFBOEIrSSxVQUFVLENBQUNJLEdBQXpDLEVBQThDSixVQUE5QztBQUNEO0FBQ0Y7O0FBRUQsU0FBU0ssWUFBVCxDQUFzQlQsV0FBdEIsRUFBbUNVLFVBQW5DLEVBQStDQyxXQUEvQyxFQUE0RDtBQUMxRCxNQUFJRCxVQUFKLEVBQWdCUixpQkFBaUIsQ0FBQ0YsV0FBVyxDQUFDM0UsU0FBYixFQUF3QnFGLFVBQXhCLENBQWpCO0FBQ2hCLE1BQUlDLFdBQUosRUFBaUJULGlCQUFpQixDQUFDRixXQUFELEVBQWNXLFdBQWQsQ0FBakI7QUFDakIsU0FBT1gsV0FBUDtBQUNEOztBQUVELFNBQVNZLGtCQUFULENBQTRCQyxHQUE1QixFQUFpQztBQUMvQixTQUFPQyxrQkFBa0IsQ0FBQ0QsR0FBRCxDQUFsQixJQUEyQkUsZ0JBQWdCLENBQUNGLEdBQUQsQ0FBM0MsSUFBb0RHLDJCQUEyQixDQUFDSCxHQUFELENBQS9FLElBQXdGSSxrQkFBa0IsRUFBakg7QUFDRDs7QUFFRCxTQUFTSCxrQkFBVCxDQUE0QkQsR0FBNUIsRUFBaUM7QUFDL0IsTUFBSS9MLEtBQUssQ0FBQ0MsT0FBTixDQUFjOEwsR0FBZCxDQUFKLEVBQXdCLE9BQU9LLGlCQUFpQixDQUFDTCxHQUFELENBQXhCO0FBQ3pCOztBQUVELFNBQVNFLGdCQUFULENBQTBCSSxJQUExQixFQUFnQztBQUM5QixNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQmhJLE1BQU0sQ0FBQzhILElBQUQsQ0FBOUQsRUFBc0UsT0FBT3JNLEtBQUssQ0FBQ3dNLElBQU4sQ0FBV0gsSUFBWCxDQUFQO0FBQ3ZFOztBQUVELFNBQVNILDJCQUFULENBQXFDdk0sQ0FBckMsRUFBd0M4TSxNQUF4QyxFQUFnRDtBQUM5QyxNQUFJLENBQUM5TSxDQUFMLEVBQVE7QUFDUixNQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQixPQUFPeU0saUJBQWlCLENBQUN6TSxDQUFELEVBQUk4TSxNQUFKLENBQXhCO0FBQzNCLE1BQUluTCxDQUFDLEdBQUdpRCxNQUFNLENBQUNnQyxTQUFQLENBQWlCNEIsUUFBakIsQ0FBMEJlLElBQTFCLENBQStCdkosQ0FBL0IsRUFBa0NxRSxLQUFsQyxDQUF3QyxDQUF4QyxFQUEyQyxDQUFDLENBQTVDLENBQVI7QUFDQSxNQUFJMUMsQ0FBQyxLQUFLLFFBQU4sSUFBa0IzQixDQUFDLENBQUM4SCxXQUF4QixFQUFxQ25HLENBQUMsR0FBRzNCLENBQUMsQ0FBQzhILFdBQUYsQ0FBY2lGLElBQWxCO0FBQ3JDLE1BQUlwTCxDQUFDLEtBQUssS0FBTixJQUFlQSxDQUFDLEtBQUssS0FBekIsRUFBZ0MsT0FBT3RCLEtBQUssQ0FBQ3dNLElBQU4sQ0FBV2xMLENBQVgsQ0FBUDtBQUNoQyxNQUFJQSxDQUFDLEtBQUssV0FBTixJQUFxQiwyQ0FBMkNxTCxJQUEzQyxDQUFnRHJMLENBQWhELENBQXpCLEVBQTZFLE9BQU84SyxpQkFBaUIsQ0FBQ3pNLENBQUQsRUFBSThNLE1BQUosQ0FBeEI7QUFDOUU7O0FBRUQsU0FBU0wsaUJBQVQsQ0FBMkJMLEdBQTNCLEVBQWdDYSxHQUFoQyxFQUFxQztBQUNuQyxNQUFJQSxHQUFHLElBQUksSUFBUCxJQUFlQSxHQUFHLEdBQUdiLEdBQUcsQ0FBQzdMLE1BQTdCLEVBQXFDME0sR0FBRyxHQUFHYixHQUFHLENBQUM3TCxNQUFWOztBQUVyQyxPQUFLLElBQUlULENBQUMsR0FBRyxDQUFSLEVBQVdvTixJQUFJLEdBQUcsSUFBSTdNLEtBQUosQ0FBVTRNLEdBQVYsQ0FBdkIsRUFBdUNuTixDQUFDLEdBQUdtTixHQUEzQyxFQUFnRG5OLENBQUMsRUFBakQ7QUFBcURvTixRQUFJLENBQUNwTixDQUFELENBQUosR0FBVXNNLEdBQUcsQ0FBQ3RNLENBQUQsQ0FBYjtBQUFyRDs7QUFFQSxTQUFPb04sSUFBUDtBQUNEOztBQUVELFNBQVNWLGtCQUFULEdBQThCO0FBQzVCLFFBQU0sSUFBSWhCLFNBQUosQ0FBYyxzSUFBZCxDQUFOO0FBQ0Q7O0FBRUQsSUFBSTJCLFVBQVUsR0FBRyxZQUFZO0FBRTNCLE1BQUlDLGtCQUFrQixHQUFHLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsK0RBQTFCLEVBQTJGLDJDQUEzRixFQUF3SSw2Q0FBeEksRUFBdUwsMkNBQXZMLEVBQW9PLFFBQXBPLEVBQThPLFFBQTlPLEVBQXdQLE9BQXhQLEVBQWlRLG1CQUFqUSxFQUFzUixpQ0FBdFIsQ0FBekI7O0FBRUEsTUFBSUMsS0FBSyxHQUFHLGFBQWEsWUFBWTtBQUNuQyxhQUFTQSxLQUFULENBQWVDLElBQWYsRUFBcUI7QUFDbkIsVUFBSUMsV0FBVyxHQUFHRCxJQUFJLENBQUNDLFdBQXZCO0FBQUEsVUFDSUMsYUFBYSxHQUFHRixJQUFJLENBQUNHLFFBRHpCO0FBQUEsVUFFSUEsUUFBUSxHQUFHRCxhQUFhLEtBQUssS0FBSyxDQUF2QixHQUEyQixFQUEzQixHQUFnQ0EsYUFGL0M7QUFBQSxVQUdJRSxXQUFXLEdBQUdKLElBQUksQ0FBQ0ssTUFIdkI7QUFBQSxVQUlJQSxNQUFNLEdBQUdELFdBQVcsS0FBSyxLQUFLLENBQXJCLEdBQXlCLFlBQVksQ0FBRSxDQUF2QyxHQUEwQ0EsV0FKdkQ7QUFBQSxVQUtJRSxZQUFZLEdBQUdOLElBQUksQ0FBQ08sT0FMeEI7QUFBQSxVQU1JQSxPQUFPLEdBQUdELFlBQVksS0FBSyxLQUFLLENBQXRCLEdBQTBCLFlBQVksQ0FBRSxDQUF4QyxHQUEyQ0EsWUFOekQ7QUFBQSxVQU9JRSxnQkFBZ0IsR0FBR1IsSUFBSSxDQUFDUyxXQVA1QjtBQUFBLFVBUUlBLFdBQVcsR0FBR0QsZ0JBQWdCLEtBQUssS0FBSyxDQUExQixHQUE4Qix5QkFBOUIsR0FBMERBLGdCQVI1RTtBQUFBLFVBU0lFLGlCQUFpQixHQUFHVixJQUFJLENBQUNXLFlBVDdCO0FBQUEsVUFVSUEsWUFBWSxHQUFHRCxpQkFBaUIsS0FBSyxLQUFLLENBQTNCLEdBQStCLHVCQUEvQixHQUF5REEsaUJBVjVFO0FBQUEsVUFXSUUsY0FBYyxHQUFHWixJQUFJLENBQUNhLFNBWDFCO0FBQUEsVUFZSUEsU0FBUyxHQUFHRCxjQUFjLEtBQUssS0FBSyxDQUF4QixHQUE0QixTQUE1QixHQUF3Q0EsY0FaeEQ7QUFBQSxVQWFJRSxrQkFBa0IsR0FBR2QsSUFBSSxDQUFDZSxhQWI5QjtBQUFBLFVBY0lBLGFBQWEsR0FBR0Qsa0JBQWtCLEtBQUssS0FBSyxDQUE1QixHQUFnQyxLQUFoQyxHQUF3Q0Esa0JBZDVEO0FBQUEsVUFlSUUsaUJBQWlCLEdBQUdoQixJQUFJLENBQUNpQixZQWY3QjtBQUFBLFVBZ0JJQSxZQUFZLEdBQUdELGlCQUFpQixLQUFLLEtBQUssQ0FBM0IsR0FBK0IsS0FBL0IsR0FBdUNBLGlCQWhCMUQ7QUFBQSxVQWlCSUUscUJBQXFCLEdBQUdsQixJQUFJLENBQUNtQixtQkFqQmpDO0FBQUEsVUFrQklBLG1CQUFtQixHQUFHRCxxQkFBcUIsS0FBSyxLQUFLLENBQS9CLEdBQW1DLEtBQW5DLEdBQTJDQSxxQkFsQnJFO0FBQUEsVUFtQklFLHFCQUFxQixHQUFHcEIsSUFBSSxDQUFDcUIsa0JBbkJqQztBQUFBLFVBb0JJQSxrQkFBa0IsR0FBR0QscUJBQXFCLEtBQUssS0FBSyxDQUEvQixHQUFtQyxLQUFuQyxHQUEyQ0EscUJBcEJwRTtBQUFBLFVBcUJJRSxjQUFjLEdBQUd0QixJQUFJLENBQUN1QixTQXJCMUI7QUFBQSxVQXNCSUEsU0FBUyxHQUFHRCxjQUFjLEtBQUssS0FBSyxDQUF4QixHQUE0QixLQUE1QixHQUFvQ0EsY0F0QnBEOztBQXdCQXZELHFCQUFlLENBQUMsSUFBRCxFQUFPZ0MsS0FBUCxDQUFmLENBekJtQixDQTJCbkI7OztBQUNBLFdBQUt5QixLQUFMLEdBQWF2TixRQUFRLENBQUN3TixjQUFULENBQXdCeEIsV0FBeEIsQ0FBYixDQTVCbUIsQ0E0QmdDOztBQUVuRCxXQUFLeUIsTUFBTCxHQUFjO0FBQ1pILGlCQUFTLEVBQUVBLFNBREM7QUFFWlIscUJBQWEsRUFBRUEsYUFGSDtBQUdaTixtQkFBVyxFQUFFQSxXQUhEO0FBSVpFLG9CQUFZLEVBQUVBLFlBSkY7QUFLWkUsaUJBQVMsRUFBRUEsU0FMQztBQU1aUixjQUFNLEVBQUVBLE1BTkk7QUFPWkUsZUFBTyxFQUFFQSxPQVBHO0FBUVpZLDJCQUFtQixFQUFFQSxtQkFSVDtBQVNaRSwwQkFBa0IsRUFBRUEsa0JBVFI7QUFVWkosb0JBQVksRUFBRUE7QUFWRixPQUFkLENBOUJtQixDQXlDaEI7O0FBRUgsVUFBSWQsUUFBUSxDQUFDbE4sTUFBVCxHQUFrQixDQUF0QixFQUF5QixLQUFLME8sZ0JBQUwsQ0FBc0J4RyxLQUF0QixDQUE0QixJQUE1QixFQUFrQzBELGtCQUFrQixDQUFDc0IsUUFBRCxDQUFwRCxFQTNDTixDQTJDdUU7O0FBRTFGLFdBQUt5QixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhcEwsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0EsV0FBS3FMLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlckwsSUFBZixDQUFvQixJQUFwQixDQUFqQjtBQUNEO0FBQ0Q7Ozs7Ozs7QUFPQWtJLGdCQUFZLENBQUNxQixLQUFELEVBQVEsQ0FBQztBQUNuQnRCLFNBQUcsRUFBRSxrQkFEYztBQUVuQmpILFdBQUssRUFBRSxTQUFTbUssZ0JBQVQsR0FBNEI7QUFDakMsWUFBSUcsS0FBSyxHQUFHLElBQVo7O0FBRUEsYUFBSyxJQUFJQyxJQUFJLEdBQUdsTSxTQUFTLENBQUM1QyxNQUFyQixFQUE2QmtOLFFBQVEsR0FBRyxJQUFJcE4sS0FBSixDQUFVZ1AsSUFBVixDQUF4QyxFQUF5REMsSUFBSSxHQUFHLENBQXJFLEVBQXdFQSxJQUFJLEdBQUdELElBQS9FLEVBQXFGQyxJQUFJLEVBQXpGLEVBQTZGO0FBQzNGN0Isa0JBQVEsQ0FBQzZCLElBQUQsQ0FBUixHQUFpQm5NLFNBQVMsQ0FBQ21NLElBQUQsQ0FBMUI7QUFDRDs7QUFFRDdCLGdCQUFRLENBQUM4QixNQUFULENBQWdCQyxPQUFoQixFQUF5QnBGLE9BQXpCLENBQWlDLFVBQVVxRixPQUFWLEVBQW1CO0FBQ2xEQSxpQkFBTyxDQUFDMUwsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBVTJMLEtBQVYsRUFBaUI7QUFDakQsbUJBQU9OLEtBQUssQ0FBQ08sU0FBTixDQUFnQkQsS0FBaEIsQ0FBUDtBQUNELFdBRkQ7QUFHRCxTQUpEO0FBS0Q7QUFka0IsS0FBRCxFQWVqQjtBQUNEM0QsU0FBRyxFQUFFLFdBREo7QUFFRGpILFdBQUssRUFBRSxTQUFTNkssU0FBVCxHQUFxQjtBQUMxQixZQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxZQUFJRixLQUFLLEdBQUd2TSxTQUFTLENBQUM1QyxNQUFWLEdBQW1CLENBQW5CLElBQXdCNEMsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQjBDLFNBQXpDLEdBQXFEMUMsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsSUFBaEY7QUFDQSxhQUFLME0sYUFBTCxHQUFxQnRPLFFBQVEsQ0FBQ3NPLGFBQTlCO0FBQ0EsYUFBS2YsS0FBTCxDQUFXbE4sWUFBWCxDQUF3QixhQUF4QixFQUF1QyxPQUF2QztBQUNBLGFBQUtrTixLQUFMLENBQVcvTSxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixLQUFLZ04sTUFBTCxDQUFZYixTQUFyQztBQUNBLGFBQUsyQixlQUFMLENBQXFCLFNBQXJCO0FBQ0EsYUFBS0MsaUJBQUw7O0FBRUEsWUFBSSxLQUFLZixNQUFMLENBQVlMLGtCQUFoQixFQUFvQztBQUNsQyxjQUFJN0ksT0FBTyxHQUFHLFNBQVNBLE9BQVQsR0FBbUI7QUFDL0I4SixrQkFBTSxDQUFDZCxLQUFQLENBQWE3SyxtQkFBYixDQUFpQyxjQUFqQyxFQUFpRDZCLE9BQWpELEVBQTBELEtBQTFEOztBQUVBOEosa0JBQU0sQ0FBQ0ksbUJBQVA7QUFDRCxXQUpEOztBQU1BLGVBQUtsQixLQUFMLENBQVcvSyxnQkFBWCxDQUE0QixjQUE1QixFQUE0QytCLE9BQTVDLEVBQXFELEtBQXJEO0FBQ0QsU0FSRCxNQVFPO0FBQ0wsZUFBS2tLLG1CQUFMO0FBQ0Q7O0FBRUQsYUFBS2hCLE1BQUwsQ0FBWXJCLE1BQVosQ0FBbUIsS0FBS21CLEtBQXhCLEVBQStCLEtBQUtlLGFBQXBDLEVBQW1ESCxLQUFuRDtBQUNEO0FBekJBLEtBZmlCLEVBeUNqQjtBQUNEM0QsU0FBRyxFQUFFLFlBREo7QUFFRGpILFdBQUssRUFBRSxTQUFTbUwsVUFBVCxHQUFzQjtBQUMzQixZQUFJUCxLQUFLLEdBQUd2TSxTQUFTLENBQUM1QyxNQUFWLEdBQW1CLENBQW5CLElBQXdCNEMsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQjBDLFNBQXpDLEdBQXFEMUMsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsSUFBaEY7QUFDQSxZQUFJMkwsS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0FBQ0EsYUFBS0EsS0FBTCxDQUFXbE4sWUFBWCxDQUF3QixhQUF4QixFQUF1QyxNQUF2QztBQUNBLGFBQUtzTyxvQkFBTDtBQUNBLGFBQUtKLGVBQUwsQ0FBcUIsUUFBckI7O0FBRUEsWUFBSSxLQUFLRCxhQUFMLElBQXNCLEtBQUtBLGFBQUwsQ0FBbUJNLEtBQTdDLEVBQW9EO0FBQ2xELGVBQUtOLGFBQUwsQ0FBbUJNLEtBQW5CO0FBQ0Q7O0FBRUQsYUFBS25CLE1BQUwsQ0FBWW5CLE9BQVosQ0FBb0IsS0FBS2lCLEtBQXpCLEVBQWdDLEtBQUtlLGFBQXJDLEVBQW9ESCxLQUFwRDs7QUFFQSxZQUFJLEtBQUtWLE1BQUwsQ0FBWVAsbUJBQWhCLEVBQXFDO0FBQ25DLGNBQUlOLFNBQVMsR0FBRyxLQUFLYSxNQUFMLENBQVliLFNBQTVCLENBRG1DLENBQ0k7O0FBRXZDLGVBQUtXLEtBQUwsQ0FBVy9LLGdCQUFYLENBQTRCLGNBQTVCLEVBQTRDLFNBQVMrQixPQUFULEdBQW1CO0FBQzdEZ0osaUJBQUssQ0FBQy9NLFNBQU4sQ0FBZ0J5QixNQUFoQixDQUF1QjJLLFNBQXZCO0FBQ0FXLGlCQUFLLENBQUM3SyxtQkFBTixDQUEwQixjQUExQixFQUEwQzZCLE9BQTFDLEVBQW1ELEtBQW5EO0FBQ0QsV0FIRCxFQUdHLEtBSEg7QUFJRCxTQVBELE1BT087QUFDTGdKLGVBQUssQ0FBQy9NLFNBQU4sQ0FBZ0J5QixNQUFoQixDQUF1QixLQUFLd0wsTUFBTCxDQUFZYixTQUFuQztBQUNEO0FBQ0Y7QUF6QkEsS0F6Q2lCLEVBbUVqQjtBQUNEcEMsU0FBRyxFQUFFLGdCQURKO0FBRURqSCxXQUFLLEVBQUUsU0FBU3NMLGNBQVQsQ0FBd0I3QyxXQUF4QixFQUFxQztBQUMxQyxhQUFLdUIsS0FBTCxHQUFhdk4sUUFBUSxDQUFDd04sY0FBVCxDQUF3QnhCLFdBQXhCLENBQWI7QUFDQSxZQUFJLEtBQUt1QixLQUFULEVBQWdCLEtBQUttQixVQUFMO0FBQ2pCO0FBTEEsS0FuRWlCLEVBeUVqQjtBQUNEbEUsU0FBRyxFQUFFLGlCQURKO0FBRURqSCxXQUFLLEVBQUUsU0FBU2dMLGVBQVQsQ0FBeUJ6TSxNQUF6QixFQUFpQztBQUN0QyxZQUFJLENBQUMsS0FBSzJMLE1BQUwsQ0FBWVgsYUFBakIsRUFBZ0M7QUFDaEMsWUFBSWdDLElBQUksR0FBRzlPLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFYOztBQUVBLGdCQUFRNkIsTUFBUjtBQUNFLGVBQUssUUFBTDtBQUNFdUIsa0JBQU0sQ0FBQzBMLE1BQVAsQ0FBY0QsSUFBSSxDQUFDN04sS0FBbkIsRUFBMEI7QUFDeEIrTixzQkFBUSxFQUFFO0FBRGMsYUFBMUI7QUFHQTs7QUFFRixlQUFLLFNBQUw7QUFDRTNMLGtCQUFNLENBQUMwTCxNQUFQLENBQWNELElBQUksQ0FBQzdOLEtBQW5CLEVBQTBCO0FBQ3hCK04sc0JBQVEsRUFBRTtBQURjLGFBQTFCO0FBR0E7QUFYSjtBQWFEO0FBbkJBLEtBekVpQixFQTZGakI7QUFDRHhFLFNBQUcsRUFBRSxtQkFESjtBQUVEakgsV0FBSyxFQUFFLFNBQVNpTCxpQkFBVCxHQUE2QjtBQUNsQyxhQUFLakIsS0FBTCxDQUFXL0ssZ0JBQVgsQ0FBNEIsWUFBNUIsRUFBMEMsS0FBS21MLE9BQS9DO0FBQ0EsYUFBS0osS0FBTCxDQUFXL0ssZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsS0FBS21MLE9BQTFDO0FBQ0EzTixnQkFBUSxDQUFDd0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS29MLFNBQTFDO0FBQ0Q7QUFOQSxLQTdGaUIsRUFvR2pCO0FBQ0RwRCxTQUFHLEVBQUUsc0JBREo7QUFFRGpILFdBQUssRUFBRSxTQUFTb0wsb0JBQVQsR0FBZ0M7QUFDckMsYUFBS3BCLEtBQUwsQ0FBVzdLLG1CQUFYLENBQStCLFlBQS9CLEVBQTZDLEtBQUtpTCxPQUFsRDtBQUNBLGFBQUtKLEtBQUwsQ0FBVzdLLG1CQUFYLENBQStCLE9BQS9CLEVBQXdDLEtBQUtpTCxPQUE3QztBQUNBM04sZ0JBQVEsQ0FBQzBDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtrTCxTQUE3QztBQUNEO0FBTkEsS0FwR2lCLEVBMkdqQjtBQUNEcEQsU0FBRyxFQUFFLFNBREo7QUFFRGpILFdBQUssRUFBRSxTQUFTb0ssT0FBVCxDQUFpQlEsS0FBakIsRUFBd0I7QUFDN0IsWUFBSUEsS0FBSyxDQUFDOU0sTUFBTixDQUFhNE4sWUFBYixDQUEwQixLQUFLeEIsTUFBTCxDQUFZZixZQUF0QyxDQUFKLEVBQXlEO0FBQ3ZELGVBQUtnQyxVQUFMLENBQWdCUCxLQUFoQjtBQUNEO0FBQ0Y7QUFOQSxLQTNHaUIsRUFrSGpCO0FBQ0QzRCxTQUFHLEVBQUUsV0FESjtBQUVEakgsV0FBSyxFQUFFLFNBQVNxSyxTQUFULENBQW1CTyxLQUFuQixFQUEwQjtBQUMvQixZQUFJQSxLQUFLLENBQUM3TCxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCLEtBQUtvTSxVQUFMLENBQWdCUCxLQUFoQixFQURLLENBQ21COztBQUVsRCxZQUFJQSxLQUFLLENBQUM3TCxPQUFOLEtBQWtCLENBQXRCLEVBQXlCLEtBQUs0TSxXQUFMLENBQWlCZixLQUFqQixFQUhNLENBR21CO0FBQ25EO0FBTkEsS0FsSGlCLEVBeUhqQjtBQUNEM0QsU0FBRyxFQUFFLG1CQURKO0FBRURqSCxXQUFLLEVBQUUsU0FBUzRMLGlCQUFULEdBQTZCO0FBQ2xDLFlBQUlDLEtBQUssR0FBRyxLQUFLN0IsS0FBTCxDQUFXcE4sZ0JBQVgsQ0FBNEIwTCxrQkFBNUIsQ0FBWjtBQUNBLGVBQU8vTSxLQUFLLENBQUNvSSxLQUFOLENBQVksS0FBSyxDQUFqQixFQUFvQjBELGtCQUFrQixDQUFDd0UsS0FBRCxDQUF0QyxDQUFQO0FBQ0Q7QUFDRDs7Ozs7QUFOQyxLQXpIaUIsRUFvSWpCO0FBQ0Q1RSxTQUFHLEVBQUUscUJBREo7QUFFRGpILFdBQUssRUFBRSxTQUFTa0wsbUJBQVQsR0FBK0I7QUFDcEMsWUFBSVksTUFBTSxHQUFHLElBQWI7O0FBRUEsWUFBSSxLQUFLNUIsTUFBTCxDQUFZVCxZQUFoQixFQUE4QjtBQUM5QixZQUFJc0MsY0FBYyxHQUFHLEtBQUtILGlCQUFMLEVBQXJCLENBSm9DLENBSVc7O0FBRS9DLFlBQUlHLGNBQWMsQ0FBQ3RRLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUMsT0FORyxDQU1LO0FBQ3pDOztBQUVBLFlBQUl1USw0QkFBNEIsR0FBR0QsY0FBYyxDQUFDdEIsTUFBZixDQUFzQixVQUFVd0IsSUFBVixFQUFnQjtBQUN2RSxpQkFBTyxDQUFDQSxJQUFJLENBQUNQLFlBQUwsQ0FBa0JJLE1BQU0sQ0FBQzVCLE1BQVAsQ0FBY2YsWUFBaEMsQ0FBUjtBQUNELFNBRmtDLENBQW5DO0FBR0EsWUFBSTZDLDRCQUE0QixDQUFDdlEsTUFBN0IsR0FBc0MsQ0FBMUMsRUFBNkN1USw0QkFBNEIsQ0FBQyxDQUFELENBQTVCLENBQWdDWCxLQUFoQztBQUM3QyxZQUFJVyw0QkFBNEIsQ0FBQ3ZRLE1BQTdCLEtBQXdDLENBQTVDLEVBQStDc1EsY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQlYsS0FBbEI7QUFDaEQ7QUFoQkEsS0FwSWlCLEVBcUpqQjtBQUNEcEUsU0FBRyxFQUFFLGFBREo7QUFFRGpILFdBQUssRUFBRSxTQUFTMkwsV0FBVCxDQUFxQmYsS0FBckIsRUFBNEI7QUFDakMsWUFBSW1CLGNBQWMsR0FBRyxLQUFLSCxpQkFBTCxFQUFyQixDQURpQyxDQUNjOztBQUUvQyxZQUFJRyxjQUFjLENBQUN0USxNQUFmLEtBQTBCLENBQTlCLEVBQWlDO0FBQ2pDOzs7OztBQUtBc1Esc0JBQWMsR0FBR0EsY0FBYyxDQUFDdEIsTUFBZixDQUFzQixVQUFVd0IsSUFBVixFQUFnQjtBQUNyRCxpQkFBT0EsSUFBSSxDQUFDQyxZQUFMLEtBQXNCLElBQTdCO0FBQ0QsU0FGZ0IsQ0FBakIsQ0FUaUMsQ0FXN0I7O0FBRUosWUFBSSxDQUFDLEtBQUtsQyxLQUFMLENBQVdqTSxRQUFYLENBQW9CdEIsUUFBUSxDQUFDc08sYUFBN0IsQ0FBTCxFQUFrRDtBQUNoRGdCLHdCQUFjLENBQUMsQ0FBRCxDQUFkLENBQWtCVixLQUFsQjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUljLGdCQUFnQixHQUFHSixjQUFjLENBQUNLLE9BQWYsQ0FBdUIzUCxRQUFRLENBQUNzTyxhQUFoQyxDQUF2Qjs7QUFFQSxjQUFJSCxLQUFLLENBQUN5QixRQUFOLElBQWtCRixnQkFBZ0IsS0FBSyxDQUEzQyxFQUE4QztBQUM1Q0osMEJBQWMsQ0FBQ0EsY0FBYyxDQUFDdFEsTUFBZixHQUF3QixDQUF6QixDQUFkLENBQTBDNFAsS0FBMUM7QUFDQVQsaUJBQUssQ0FBQzFNLGNBQU47QUFDRDs7QUFFRCxjQUFJLENBQUMwTSxLQUFLLENBQUN5QixRQUFQLElBQW1CTixjQUFjLENBQUN0USxNQUFmLEdBQXdCLENBQTNDLElBQWdEMFEsZ0JBQWdCLEtBQUtKLGNBQWMsQ0FBQ3RRLE1BQWYsR0FBd0IsQ0FBakcsRUFBb0c7QUFDbEdzUSwwQkFBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQlYsS0FBbEI7QUFDQVQsaUJBQUssQ0FBQzFNLGNBQU47QUFDRDtBQUNGO0FBQ0Y7QUE5QkEsS0FySmlCLENBQVIsQ0FBWjs7QUFzTEEsV0FBT3FLLEtBQVA7QUFDRCxHQS9Pd0IsRUFBekI7QUFnUEE7Ozs7O0FBS0E7OztBQUdBLE1BQUkrRCxXQUFXLEdBQUcsSUFBbEI7QUFDQTs7Ozs7Ozs7QUFRQSxNQUFJQyxrQkFBa0IsR0FBRyxTQUFTQSxrQkFBVCxDQUE0QjVELFFBQTVCLEVBQXNDNkQsV0FBdEMsRUFBbUQ7QUFDMUUsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0E5RCxZQUFRLENBQUNyRCxPQUFULENBQWlCLFVBQVVxRixPQUFWLEVBQW1CO0FBQ2xDLFVBQUlsQyxXQUFXLEdBQUdrQyxPQUFPLENBQUMrQixVQUFSLENBQW1CRixXQUFuQixFQUFnQ3hNLEtBQWxEO0FBQ0EsVUFBSXlNLFVBQVUsQ0FBQ2hFLFdBQUQsQ0FBVixLQUE0QjFILFNBQWhDLEVBQTJDMEwsVUFBVSxDQUFDaEUsV0FBRCxDQUFWLEdBQTBCLEVBQTFCO0FBQzNDZ0UsZ0JBQVUsQ0FBQ2hFLFdBQUQsQ0FBVixDQUF3QnZHLElBQXhCLENBQTZCeUksT0FBN0I7QUFDRCxLQUpEO0FBS0EsV0FBTzhCLFVBQVA7QUFDRCxHQVJEO0FBU0E7Ozs7Ozs7O0FBUUEsTUFBSUUscUJBQXFCLEdBQUcsU0FBU0EscUJBQVQsQ0FBK0JDLEVBQS9CLEVBQW1DO0FBQzdELFFBQUksQ0FBQ25RLFFBQVEsQ0FBQ3dOLGNBQVQsQ0FBd0IyQyxFQUF4QixDQUFMLEVBQWtDO0FBQ2hDQyxhQUFPLENBQUNDLElBQVIsQ0FBYSxtREFBbURuUCxNQUFuRCxDQUEwRGlQLEVBQTFELEVBQThELEdBQTlELENBQWIsRUFBaUYsNkRBQWpGLEVBQWdKLCtEQUFoSjtBQUNBQyxhQUFPLENBQUNDLElBQVIsQ0FBYSxZQUFiLEVBQTJCLDZEQUEzQixFQUEwRiw2QkFBNkJuUCxNQUE3QixDQUFvQ2lQLEVBQXBDLEVBQXdDLFdBQXhDLENBQTFGO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQU5EO0FBT0E7Ozs7Ozs7O0FBUUEsTUFBSUcsdUJBQXVCLEdBQUcsU0FBU0EsdUJBQVQsQ0FBaUNwRSxRQUFqQyxFQUEyQztBQUN2RSxRQUFJQSxRQUFRLENBQUNsTixNQUFULElBQW1CLENBQXZCLEVBQTBCO0FBQ3hCb1IsYUFBTyxDQUFDQyxJQUFSLENBQWEsc0VBQWIsRUFBcUYsNkRBQXJGLEVBQW9KLGlCQUFwSjtBQUNBRCxhQUFPLENBQUNDLElBQVIsQ0FBYSxZQUFiLEVBQTJCLDZEQUEzQixFQUEwRix5REFBMUY7QUFDQSxhQUFPLEtBQVA7QUFDRDtBQUNGLEdBTkQ7QUFPQTs7Ozs7Ozs7O0FBU0EsTUFBSUUsWUFBWSxHQUFHLFNBQVNBLFlBQVQsQ0FBc0JyRSxRQUF0QixFQUFnQzhELFVBQWhDLEVBQTRDO0FBQzdETSwyQkFBdUIsQ0FBQ3BFLFFBQUQsQ0FBdkI7QUFDQSxRQUFJLENBQUM4RCxVQUFMLEVBQWlCLE9BQU8sSUFBUDs7QUFFakIsU0FBSyxJQUFJRyxFQUFULElBQWVILFVBQWYsRUFBMkI7QUFDekJFLDJCQUFxQixDQUFDQyxFQUFELENBQXJCO0FBQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0QsR0FURDtBQVVBOzs7Ozs7O0FBT0EsTUFBSXRSLElBQUksR0FBRyxTQUFTQSxJQUFULENBQWM0TyxNQUFkLEVBQXNCO0FBQy9CO0FBQ0EsUUFBSXRPLE9BQU8sR0FBR2tFLE1BQU0sQ0FBQzBMLE1BQVAsQ0FBYyxFQUFkLEVBQWtCO0FBQzlCdkMsaUJBQVcsRUFBRTtBQURpQixLQUFsQixFQUVYaUIsTUFGVyxDQUFkLENBRitCLENBSW5COztBQUVaLFFBQUl2QixRQUFRLEdBQUd0QixrQkFBa0IsQ0FBQzVLLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsSUFBSWUsTUFBSixDQUFXL0IsT0FBTyxDQUFDcU4sV0FBbkIsRUFBZ0MsR0FBaEMsQ0FBMUIsQ0FBRCxDQUFqQyxDQU4rQixDQU1xRTs7O0FBR3BHLFFBQUl3RCxVQUFVLEdBQUdGLGtCQUFrQixDQUFDNUQsUUFBRCxFQUFXL00sT0FBTyxDQUFDcU4sV0FBbkIsQ0FBbkMsQ0FUK0IsQ0FTcUM7O0FBRXBFLFFBQUlyTixPQUFPLENBQUNtTyxTQUFSLEtBQXNCLElBQXRCLElBQThCaUQsWUFBWSxDQUFDckUsUUFBRCxFQUFXOEQsVUFBWCxDQUFaLEtBQXVDLEtBQXpFLEVBQWdGLE9BWGpELENBV3lEOztBQUV4RixTQUFLLElBQUl4RixHQUFULElBQWdCd0YsVUFBaEIsRUFBNEI7QUFDMUIsVUFBSXpNLEtBQUssR0FBR3lNLFVBQVUsQ0FBQ3hGLEdBQUQsQ0FBdEI7QUFDQXJMLGFBQU8sQ0FBQzZNLFdBQVIsR0FBc0J4QixHQUF0QjtBQUNBckwsYUFBTyxDQUFDK00sUUFBUixHQUFtQnRCLGtCQUFrQixDQUFDckgsS0FBRCxDQUFyQztBQUNBc00saUJBQVcsR0FBRyxJQUFJL0QsS0FBSixDQUFVM00sT0FBVixDQUFkLENBSjBCLENBSVE7QUFDbkM7QUFDRixHQW5CRDtBQW9CQTs7Ozs7Ozs7QUFRQSxNQUFJcVIsSUFBSSxHQUFHLFNBQVNBLElBQVQsQ0FBY3hFLFdBQWQsRUFBMkJ5QixNQUEzQixFQUFtQztBQUM1QyxRQUFJdE8sT0FBTyxHQUFHc08sTUFBTSxJQUFJLEVBQXhCO0FBQ0F0TyxXQUFPLENBQUM2TSxXQUFSLEdBQXNCQSxXQUF0QixDQUY0QyxDQUVUOztBQUVuQyxRQUFJN00sT0FBTyxDQUFDbU8sU0FBUixLQUFzQixJQUF0QixJQUE4QjRDLHFCQUFxQixDQUFDbEUsV0FBRCxDQUFyQixLQUF1QyxLQUF6RSxFQUFnRixPQUpwQyxDQUk0Qzs7QUFFeEYsUUFBSTZELFdBQUosRUFBaUJBLFdBQVcsQ0FBQ2xCLG9CQUFaLEdBTjJCLENBTVM7O0FBRXJEa0IsZUFBVyxHQUFHLElBQUkvRCxLQUFKLENBQVUzTSxPQUFWLENBQWQsQ0FSNEMsQ0FRVjs7QUFFbEMwUSxlQUFXLENBQUN6QixTQUFaO0FBQ0QsR0FYRDtBQVlBOzs7Ozs7O0FBT0EsTUFBSXFDLEtBQUssR0FBRyxTQUFTQSxLQUFULENBQWV6RSxXQUFmLEVBQTRCO0FBQ3RDQSxlQUFXLEdBQUc2RCxXQUFXLENBQUNoQixjQUFaLENBQTJCN0MsV0FBM0IsQ0FBSCxHQUE2QzZELFdBQVcsQ0FBQ25CLFVBQVosRUFBeEQ7QUFDRCxHQUZEOztBQUlBLFNBQU87QUFDTDdQLFFBQUksRUFBRUEsSUFERDtBQUVMMlIsUUFBSSxFQUFFQSxJQUZEO0FBR0xDLFNBQUssRUFBRUE7QUFIRixHQUFQO0FBS0QsQ0E5WGdCLEVBQWpCOztBQStYQXJOLE1BQU0sQ0FBQ3dJLFVBQVAsR0FBb0JBLFVBQXBCO0FBRWVBLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUN4YkE7Ozs7Ozs7Ozs7Ozs7QUFZQTs7O0FBR0MsV0FBVXpFLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3pCLE1BQUksSUFBSixFQUFnRDtBQUMvQztBQUNBQyx3Q0FBT0QsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUFOO0FBQ0EsR0FIRCxNQUdPLEVBTU47QUFDRCxDQVhBLEVBV0MsSUFYRCxFQVdPLFlBQVk7QUFDbkI7O0FBRUEsTUFBSXNKLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDN0JDLFNBQUssQ0FBQ0MsR0FBTixDQUFVLENBQVYsRUFBYSw4TEFBYjtBQUNBLEdBRkQ7O0FBSUFGLGFBQVcsQ0FBQ0csT0FBWixHQUFzQixPQUF0QixDQVBtQixDQVNuQjs7QUFDQSxNQUFJLE9BQVF6TixNQUFSLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ3BDQSxVQUFNLENBQUNaLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLEtBQUssQ0FBM0M7QUFDQSxHQVprQixDQWNuQjs7O0FBQ0EsTUFBSXNPLG9CQUFvQixHQUFHLDZCQUEzQjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkFKLGFBQVcsQ0FBQ0ssVUFBWixHQUF5QixVQUFVNVIsT0FBVixFQUFtQjtBQUMzQzs7Ozs7QUFLQSxRQUNDNlIsU0FBUyxHQUFHLHdCQURiO0FBQUEsUUFFQ0Msd0JBQXdCLEdBQUcsU0FGNUI7QUFBQSxRQUdDQyx3QkFBd0IsR0FBRyxTQUg1QjtBQUFBLFFBSUNDLHVCQUF1QixHQUFHLFFBSjNCO0FBQUEsUUFLQ0MsZUFBZSxHQUFHQyxrQkFBa0IsQ0FBQzlKLFFBTHRDO0FBT0E7Ozs7OztBQUtBLFFBQ0N3SixVQUFVLEdBQUcsSUFEZDtBQUFBLFFBRUNPLFFBQVEsR0FBR1gsS0FBSyxDQUFDOUksTUFBTixDQUFhLEVBQWIsRUFBaUJ1SixlQUFqQixFQUFrQ2pTLE9BQWxDLENBRlo7QUFBQSxRQUdDb1MsYUFBYSxHQUFHLEVBSGpCO0FBQUEsUUFJQ0Msd0JBQXdCLEdBQUcsS0FKNUI7QUFBQSxRQUltQztBQUNsQ0MsY0FBVSxHQUFHLENBTGQ7QUFBQSxRQU1DQyxnQkFBZ0IsR0FBR1AsdUJBTnBCO0FBQUEsUUFPQ1EsV0FBVyxHQUFHLElBUGY7QUFBQSxRQVFDQyxhQUFhLEdBQUcsQ0FSakI7QUFBQSxRQVNDQyxRQUFRLEdBQUcsSUFUWjtBQUFBLFFBVUNDLGNBVkQ7QUFBQSxRQVdDQyxlQVhEO0FBYUE7Ozs7OztBQU1BOzs7Ozs7QUFJQSxRQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFZO0FBQzNCLFdBQUssSUFBSXhILEdBQVQsSUFBZ0I4RyxRQUFoQixFQUEwQjtBQUN6QixZQUFJLENBQUNGLGVBQWUsQ0FBQ2hKLGNBQWhCLENBQStCb0MsR0FBL0IsQ0FBTCxFQUEwQztBQUN6Q29HLGFBQUcsQ0FBQyxDQUFELEVBQUksK0JBQStCcEcsR0FBL0IsR0FBcUMsSUFBekMsQ0FBSDtBQUNBLGlCQUFPOEcsUUFBUSxDQUFDOUcsR0FBRCxDQUFmO0FBQ0E7QUFDRDs7QUFDRDhHLGNBQVEsQ0FBQ3ZSLFNBQVQsR0FBcUI0USxLQUFLLENBQUNzQixHQUFOLENBQVUvUixRQUFWLENBQW1Cb1IsUUFBUSxDQUFDdlIsU0FBNUIsRUFBdUMsQ0FBdkMsQ0FBckIsQ0FQMkIsQ0FRM0I7O0FBQ0EsVUFBSSxDQUFDdVIsUUFBUSxDQUFDdlIsU0FBZCxFQUF5QjtBQUN4QjZRLFdBQUcsQ0FBQyxDQUFELEVBQUksMkJBQTJCSSxTQUEzQixHQUF1QyxzQ0FBM0MsQ0FBSDtBQUNBLGNBQU1BLFNBQVMsR0FBRyxlQUFsQixDQUZ3QixDQUVXO0FBQ25DOztBQUNEVyxpQkFBVyxHQUFHTCxRQUFRLENBQUN2UixTQUFULEtBQXVCcUQsTUFBdkIsSUFBaUNrTyxRQUFRLENBQUN2UixTQUFULEtBQXVCQyxRQUFRLENBQUM4TyxJQUFqRSxJQUF5RSxDQUFDOU8sUUFBUSxDQUFDOE8sSUFBVCxDQUFjeE4sUUFBZCxDQUF1QmdRLFFBQVEsQ0FBQ3ZSLFNBQWhDLENBQXhGLENBYjJCLENBYzNCOztBQUNBLFVBQUk0UixXQUFKLEVBQWlCO0FBQ2hCTCxnQkFBUSxDQUFDdlIsU0FBVCxHQUFxQnFELE1BQXJCO0FBQ0EsT0FqQjBCLENBa0IzQjs7O0FBQ0F3TyxtQkFBYSxHQUFHTSxlQUFlLEVBQS9CLENBbkIyQixDQW9CM0I7O0FBQ0FaLGNBQVEsQ0FBQ3ZSLFNBQVQsQ0FBbUJ5QyxnQkFBbkIsQ0FBb0MsUUFBcEMsRUFBOEMyUCxRQUE5Qzs7QUFDQWIsY0FBUSxDQUFDdlIsU0FBVCxDQUFtQnlDLGdCQUFuQixDQUFvQyxRQUFwQyxFQUE4QzJQLFFBQTlDOztBQUVBLFVBQUlDLEVBQUUsR0FBR3JRLFFBQVEsQ0FBQ3VQLFFBQVEsQ0FBQ2UsZUFBVixFQUEyQixFQUEzQixDQUFqQjtBQUNBZixjQUFRLENBQUNlLGVBQVQsR0FBMkIxQixLQUFLLENBQUMyQixJQUFOLENBQVdDLE1BQVgsQ0FBa0JILEVBQWxCLElBQXdCQSxFQUF4QixHQUE2QmhCLGVBQWUsQ0FBQ2lCLGVBQXhFO0FBQ0FHLHFCQUFlO0FBRWY1QixTQUFHLENBQUMsQ0FBRCxFQUFJLGVBQWVJLFNBQWYsR0FBMkIsZ0JBQTNCLEdBQThDTixXQUFXLENBQUNHLE9BQTFELEdBQW9FLEdBQXhFLENBQUg7QUFDQSxLQTdCRDtBQStCQTs7Ozs7O0FBSUEsUUFBSTJCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBWTtBQUNqQyxVQUFJbEIsUUFBUSxDQUFDZSxlQUFULEdBQTJCLENBQS9CLEVBQWtDO0FBQ2pDTix1QkFBZSxHQUFHM08sTUFBTSxDQUFDSixVQUFQLENBQWtCeVAsT0FBbEIsRUFBMkJuQixRQUFRLENBQUNlLGVBQXBDLENBQWxCO0FBQ0E7QUFDRCxLQUpEO0FBTUE7Ozs7OztBQUlBLFFBQUlLLFlBQVksR0FBRyx3QkFBWTtBQUM5QixhQUFPcEIsUUFBUSxDQUFDcUIsUUFBVCxHQUFvQmhDLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVVcsU0FBVixDQUFvQnRCLFFBQVEsQ0FBQ3ZSLFNBQTdCLENBQXBCLEdBQThENFEsS0FBSyxDQUFDc0IsR0FBTixDQUFVWSxVQUFWLENBQXFCdkIsUUFBUSxDQUFDdlIsU0FBOUIsQ0FBckU7QUFDQSxLQUZEO0FBSUE7Ozs7OztBQUlBLFFBQUltUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDakMsYUFBT1osUUFBUSxDQUFDcUIsUUFBVCxHQUFvQmhDLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVXRRLE1BQVYsQ0FBaUIyUCxRQUFRLENBQUN2UixTQUExQixDQUFwQixHQUEyRDRRLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVWEsS0FBVixDQUFnQnhCLFFBQVEsQ0FBQ3ZSLFNBQXpCLENBQWxFO0FBQ0EsS0FGRDtBQUlBOzs7Ozs7O0FBS0EsUUFBSWdULFlBQVksR0FBRyxLQUFLQyxhQUFMLEdBQXFCLFVBQVVDLEdBQVYsRUFBZTtBQUN0RCxVQUFJM0IsUUFBUSxDQUFDcUIsUUFBYixFQUF1QjtBQUN0QixZQUFJaEIsV0FBSixFQUFpQjtBQUNoQnZPLGdCQUFNLENBQUM4UCxRQUFQLENBQWdCdkMsS0FBSyxDQUFDc0IsR0FBTixDQUFVWSxVQUFWLEVBQWhCLEVBQXdDSSxHQUF4QztBQUNBLFNBRkQsTUFFTztBQUNOM0Isa0JBQVEsQ0FBQ3ZSLFNBQVQsQ0FBbUI2UyxTQUFuQixHQUErQkssR0FBL0I7QUFDQTtBQUNELE9BTkQsTUFNTztBQUNOLFlBQUl0QixXQUFKLEVBQWlCO0FBQ2hCdk8sZ0JBQU0sQ0FBQzhQLFFBQVAsQ0FBZ0JELEdBQWhCLEVBQXFCdEMsS0FBSyxDQUFDc0IsR0FBTixDQUFVVyxTQUFWLEVBQXJCO0FBQ0EsU0FGRCxNQUVPO0FBQ050QixrQkFBUSxDQUFDdlIsU0FBVCxDQUFtQjhTLFVBQW5CLEdBQWdDSSxHQUFoQztBQUNBO0FBQ0Q7QUFDRCxLQWREO0FBZ0JBOzs7Ozs7QUFJQSxRQUFJRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFZO0FBQzlCLFVBQUl0QixRQUFRLElBQUlMLHdCQUFoQixFQUEwQztBQUN6QztBQUNBLFlBQUk0QixjQUFjLEdBQUd6QyxLQUFLLENBQUMyQixJQUFOLENBQVd4VCxLQUFYLENBQWlCMFMsd0JBQWpCLElBQTZDQSx3QkFBN0MsR0FBd0VELGFBQWEsQ0FBQ3pPLEtBQWQsQ0FBb0IsQ0FBcEIsQ0FBN0YsQ0FGeUMsQ0FHekM7O0FBQ0EwTyxnQ0FBd0IsR0FBRyxLQUEzQjtBQUNBLFlBQUk2QixZQUFZLEdBQUc1QixVQUFuQixDQUx5QyxDQU16Qzs7QUFDQUEsa0JBQVUsR0FBR1YsVUFBVSxDQUFDdUMsU0FBWCxFQUFiO0FBQ0EsWUFBSUMsV0FBVyxHQUFHOUIsVUFBVSxHQUFHNEIsWUFBL0I7O0FBQ0EsWUFBSUUsV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQUU7QUFDeEI3QiwwQkFBZ0IsR0FBSTZCLFdBQVcsR0FBRyxDQUFmLEdBQW9CdEMsd0JBQXBCLEdBQStDQyx3QkFBbEU7QUFDQSxTQVh3QyxDQVl6Qzs7O0FBQ0EsWUFBSVEsZ0JBQWdCLEtBQUtSLHdCQUF6QixFQUFtRDtBQUNsRGtDLHdCQUFjLENBQUNJLE9BQWY7QUFDQSxTQWZ3QyxDQWdCekM7OztBQUNBSixzQkFBYyxDQUFDdkssT0FBZixDQUF1QixVQUFVNEssS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDOUM5QyxhQUFHLENBQUMsQ0FBRCxFQUFJLHFCQUFxQjhDLEtBQUssR0FBRyxDQUE3QixJQUFrQyxHQUFsQyxHQUF3Q04sY0FBYyxDQUFDcFUsTUFBdkQsR0FBZ0UsSUFBaEUsR0FBdUV1UyxhQUFhLENBQUN2UyxNQUFyRixHQUE4RixTQUFsRyxDQUFIO0FBQ0F5VSxlQUFLLENBQUNFLE1BQU4sQ0FBYSxJQUFiO0FBQ0EsU0FIRDs7QUFJQSxZQUFJUCxjQUFjLENBQUNwVSxNQUFmLEtBQTBCLENBQTFCLElBQStCc1MsUUFBUSxDQUFDc0MsUUFBVCxJQUFxQixDQUF4RCxFQUEyRDtBQUMxRGhELGFBQUcsQ0FBQyxDQUFELEVBQUksaURBQUosQ0FBSDtBQUNBO0FBQ0Q7QUFDRCxLQTFCRDtBQTRCQTs7Ozs7O0FBSUEsUUFBSWlELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBWTtBQUNoQy9CLG9CQUFjLEdBQUduQixLQUFLLENBQUNtRCxHQUFOLENBQVVYLFlBQVYsQ0FBakI7QUFDQSxLQUZEO0FBSUE7Ozs7OztBQUlBLFFBQUloQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFValQsQ0FBVixFQUFhO0FBQzNCMFIsU0FBRyxDQUFDLENBQUQsRUFBSSxnQ0FBSixFQUFzQzFSLENBQUMsQ0FBQ29ULElBQXhDLENBQUg7O0FBQ0EsVUFBSXBULENBQUMsQ0FBQ29ULElBQUYsSUFBVSxRQUFkLEVBQXdCO0FBQ3ZCO0FBQ0FWLHFCQUFhLEdBQUdNLGVBQWUsRUFBL0I7QUFDQVIsd0JBQWdCLEdBQUdQLHVCQUFuQjtBQUNBLE9BTjBCLENBTzNCOzs7QUFDQSxVQUFJSyx3QkFBd0IsS0FBSyxJQUFqQyxFQUF1QztBQUN0Q0EsZ0NBQXdCLEdBQUcsSUFBM0I7QUFDQXFDLHNCQUFjO0FBQ2Q7QUFDRCxLQVpEOztBQWNBLFFBQUlwQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFZO0FBQ3pCLFVBQUksQ0FBQ2QsV0FBTCxFQUFrQjtBQUNqQjtBQUNBLFlBQUlDLGFBQWEsSUFBSU0sZUFBZSxFQUFwQyxFQUF3QztBQUN2QyxjQUFJNkIsV0FBSjs7QUFDQSxjQUFJO0FBQ0hBLHVCQUFXLEdBQUcsSUFBSUMsS0FBSixDQUFVLFFBQVYsRUFBb0I7QUFDakNDLHFCQUFPLEVBQUUsS0FEd0I7QUFFakNDLHdCQUFVLEVBQUU7QUFGcUIsYUFBcEIsQ0FBZDtBQUlBLFdBTEQsQ0FLRSxPQUFPaFYsQ0FBUCxFQUFVO0FBQUU7QUFDYjZVLHVCQUFXLEdBQUcvVCxRQUFRLENBQUNtVSxXQUFULENBQXFCLE9BQXJCLENBQWQ7QUFDQUosdUJBQVcsQ0FBQ0ssU0FBWixDQUFzQixRQUF0QixFQUFnQyxLQUFoQyxFQUF1QyxLQUF2QztBQUNBOztBQUNEOUMsa0JBQVEsQ0FBQ3ZSLFNBQVQsQ0FBbUJzVSxhQUFuQixDQUFpQ04sV0FBakM7QUFDQTtBQUNEOztBQUNEeEMsbUJBQWEsQ0FBQzFJLE9BQWQsQ0FBc0IsVUFBVTRLLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQUU7QUFDL0NELGFBQUssQ0FBQ2hCLE9BQU47QUFDQSxPQUZEOztBQUdBRCxxQkFBZTtBQUNmLEtBckJEO0FBdUJBOzs7Ozs7Ozs7O0FBUUEsUUFBSTVCLEdBQUcsR0FBRyxLQUFLMEQsSUFBTCxHQUFZLFVBQVVWLFFBQVYsRUFBb0JXLE1BQXBCLEVBQTRCO0FBQ2pELFVBQUlqRCxRQUFRLENBQUNzQyxRQUFULElBQXFCQSxRQUF6QixFQUFtQztBQUNsQzlVLGFBQUssQ0FBQ3VHLFNBQU4sQ0FBZ0JTLE1BQWhCLENBQXVCa0MsSUFBdkIsQ0FBNEJwRyxTQUE1QixFQUF1QyxDQUF2QyxFQUEwQyxDQUExQyxFQUE2QyxNQUFNb1AsU0FBTixHQUFrQixNQUEvRDs7QUFDQUwsYUFBSyxDQUFDQyxHQUFOLENBQVUxSixLQUFWLENBQWdCOUQsTUFBaEIsRUFBd0J4QixTQUF4QjtBQUNBO0FBQ0QsS0FMRCxDQWhOMkMsQ0FzTjNDOzs7QUFDQSxTQUFLMFAsUUFBTCxHQUFnQkEsUUFBaEI7QUFFQTs7Ozs7Ozs7QUFPQSxRQUFJa0QsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBVUMsV0FBVixFQUF1QjtBQUN2QyxVQUFJQSxXQUFXLENBQUN6VixNQUFaLElBQXNCLENBQTFCLEVBQTZCO0FBQzVCLGVBQU95VixXQUFQO0FBQ0EsT0FGRCxNQUVPO0FBQ04sWUFBSUMsTUFBTSxHQUFHRCxXQUFXLENBQUMzUixLQUFaLENBQWtCLENBQWxCLENBQWI7QUFDQTRSLGNBQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVU3VCxDQUFWLEVBQWE4VCxDQUFiLEVBQWdCO0FBQzNCLGlCQUFPOVQsQ0FBQyxDQUFDK1QsWUFBRixLQUFtQkQsQ0FBQyxDQUFDQyxZQUFGLEVBQW5CLEdBQXNDLENBQXRDLEdBQTBDLENBQUMsQ0FBbEQ7QUFDQSxTQUZEO0FBR0EsZUFBT0gsTUFBUDtBQUNBO0FBQ0QsS0FWRDtBQVlBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxTQUFLSSxRQUFMLEdBQWdCLFVBQVVDLFFBQVYsRUFBb0I7QUFDbkMsVUFBSXBFLEtBQUssQ0FBQzJCLElBQU4sQ0FBV3hULEtBQVgsQ0FBaUJpVyxRQUFqQixDQUFKLEVBQWdDO0FBQy9CQSxnQkFBUSxDQUFDbE0sT0FBVCxDQUFpQixVQUFVNEssS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDeEMzQyxvQkFBVSxDQUFDK0QsUUFBWCxDQUFvQnJCLEtBQXBCO0FBQ0EsU0FGRDtBQUdBLE9BSkQsTUFJTyxJQUFJc0IsUUFBUSxZQUFZckUsV0FBVyxDQUFDc0UsS0FBcEMsRUFBMkM7QUFDakQsWUFBSUQsUUFBUSxDQUFDRSxVQUFULE9BQTBCbEUsVUFBOUIsRUFBMEM7QUFDekNnRSxrQkFBUSxDQUFDRyxLQUFULENBQWVuRSxVQUFmO0FBQ0EsU0FGRCxNQUVPLElBQUlRLGFBQWEsQ0FBQzVCLE9BQWQsQ0FBc0JvRixRQUF0QixJQUFrQyxDQUF0QyxFQUF5QztBQUMvQztBQUNBeEQsdUJBQWEsQ0FBQzlMLElBQWQsQ0FBbUJzUCxRQUFuQixFQUYrQyxDQUVqQjs7O0FBQzlCeEQsdUJBQWEsR0FBR2lELFVBQVUsQ0FBQ2pELGFBQUQsQ0FBMUIsQ0FIK0MsQ0FHSjs7QUFDM0N3RCxrQkFBUSxDQUFDclAsRUFBVCxDQUFZLHVCQUFaLEVBQXFDLFlBQVk7QUFBRTtBQUNsRDZMLHlCQUFhLEdBQUdpRCxVQUFVLENBQUNqRCxhQUFELENBQTFCO0FBQ0EsV0FGRCxFQUorQyxDQU8vQzs7QUFDQSxlQUFLLElBQUkvRyxHQUFULElBQWdCOEcsUUFBUSxDQUFDNkQsa0JBQXpCLEVBQTZDO0FBQzVDLGdCQUFJSixRQUFRLENBQUN2SyxHQUFELENBQVosRUFBbUI7QUFDbEJ1SyxzQkFBUSxDQUFDdkssR0FBRCxDQUFSLENBQWN4QyxJQUFkLENBQW1CK00sUUFBbkIsRUFBNkJ6RCxRQUFRLENBQUM2RCxrQkFBVCxDQUE0QjNLLEdBQTVCLENBQTdCO0FBQ0E7QUFDRDs7QUFDRG9HLGFBQUcsQ0FBQyxDQUFELEVBQUksdUJBQXVCVyxhQUFhLENBQUN2UyxNQUFyQyxHQUE4QyxTQUFsRCxDQUFIO0FBQ0E7QUFDRCxPQWxCTSxNQWtCQTtBQUNONFIsV0FBRyxDQUFDLENBQUQsRUFBSSxvREFBSixDQUFIO0FBQ0E7O0FBQ0QsYUFBT0csVUFBUDtBQUNBLEtBM0JEO0FBNkJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsU0FBS3FFLFdBQUwsR0FBbUIsVUFBVUosS0FBVixFQUFpQjtBQUNuQyxVQUFJckUsS0FBSyxDQUFDMkIsSUFBTixDQUFXeFQsS0FBWCxDQUFpQmtXLEtBQWpCLENBQUosRUFBNkI7QUFDNUJBLGFBQUssQ0FBQ25NLE9BQU4sQ0FBYyxVQUFVNEssS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDckMzQyxvQkFBVSxDQUFDcUUsV0FBWCxDQUF1QjNCLEtBQXZCO0FBQ0EsU0FGRDtBQUdBLE9BSkQsTUFJTztBQUNOLFlBQUlDLEtBQUssR0FBR25DLGFBQWEsQ0FBQzVCLE9BQWQsQ0FBc0JxRixLQUF0QixDQUFaOztBQUNBLFlBQUl0QixLQUFLLEdBQUcsQ0FBQyxDQUFiLEVBQWdCO0FBQ2ZzQixlQUFLLENBQUNuTyxHQUFOLENBQVUsdUJBQVY7O0FBQ0EwSyx1QkFBYSxDQUFDekwsTUFBZCxDQUFxQjROLEtBQXJCLEVBQTRCLENBQTVCOztBQUNBOUMsYUFBRyxDQUFDLENBQUQsRUFBSSx5QkFBeUJXLGFBQWEsQ0FBQ3ZTLE1BQXZDLEdBQWdELFFBQXBELENBQUg7QUFDQWdXLGVBQUssQ0FBQy9TLE1BQU47QUFDQTtBQUNEOztBQUNELGFBQU84TyxVQUFQO0FBQ0EsS0FmRDtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLFNBQUtzRSxXQUFMLEdBQW1CLFVBQVVMLEtBQVYsRUFBaUJNLFdBQWpCLEVBQThCO0FBQ2hELFVBQUkzRSxLQUFLLENBQUMyQixJQUFOLENBQVd4VCxLQUFYLENBQWlCa1csS0FBakIsQ0FBSixFQUE2QjtBQUM1QkEsYUFBSyxDQUFDbk0sT0FBTixDQUFjLFVBQVU0SyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QjtBQUNyQzNDLG9CQUFVLENBQUNzRSxXQUFYLENBQXVCNUIsS0FBdkIsRUFBOEI2QixXQUE5QjtBQUNBLFNBRkQ7QUFHQSxPQUpELE1BSU87QUFDTixZQUFJQSxXQUFKLEVBQWlCO0FBQ2hCTixlQUFLLENBQUNyQixNQUFOLENBQWEsSUFBYjtBQUNBLFNBRkQsTUFFTyxJQUFJbkMsd0JBQXdCLEtBQUssSUFBN0IsSUFBcUN3RCxLQUFLLFlBQVl0RSxXQUFXLENBQUNzRSxLQUF0RSxFQUE2RTtBQUFFO0FBQ3JGO0FBQ0F4RCxrQ0FBd0IsR0FBR0Esd0JBQXdCLElBQUksRUFBdkQ7O0FBQ0EsY0FBSUEsd0JBQXdCLENBQUM3QixPQUF6QixDQUFpQ3FGLEtBQWpDLEtBQTJDLENBQUMsQ0FBaEQsRUFBbUQ7QUFDbER4RCxvQ0FBd0IsQ0FBQy9MLElBQXpCLENBQThCdVAsS0FBOUI7QUFDQTs7QUFDRHhELGtDQUF3QixHQUFHZ0QsVUFBVSxDQUFDaEQsd0JBQUQsQ0FBckMsQ0FObUYsQ0FNbEI7O0FBQ2pFcUMsd0JBQWM7QUFDZDtBQUNEOztBQUNELGFBQU85QyxVQUFQO0FBQ0EsS0FuQkQ7QUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLFNBQUs0QyxNQUFMLEdBQWMsVUFBVTJCLFdBQVYsRUFBdUI7QUFDcENuRCxjQUFRLENBQUM7QUFDUkcsWUFBSSxFQUFFO0FBREUsT0FBRCxDQUFSLENBRG9DLENBR2hDOztBQUNKLFVBQUlnRCxXQUFKLEVBQWlCO0FBQ2hCbkMsb0JBQVk7QUFDWjs7QUFDRCxhQUFPcEMsVUFBUDtBQUNBLEtBUkQ7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLFNBQUttQyxRQUFMLEdBQWdCLFVBQVVxQyxZQUFWLEVBQXdCQyxtQkFBeEIsRUFBNkM7QUFDNUQsVUFBSTdFLEtBQUssQ0FBQzJCLElBQU4sQ0FBV0MsTUFBWCxDQUFrQmdELFlBQWxCLENBQUosRUFBcUM7QUFBRTtBQUN0Q3hDLG9CQUFZLENBQUMvSyxJQUFiLENBQWtCc0osUUFBUSxDQUFDdlIsU0FBM0IsRUFBc0N3VixZQUF0QyxFQUFvREMsbUJBQXBEO0FBQ0EsT0FGRCxNQUVPLElBQUlELFlBQVksWUFBWTdFLFdBQVcsQ0FBQ3NFLEtBQXhDLEVBQStDO0FBQUU7QUFDdkQsWUFBSU8sWUFBWSxDQUFDTixVQUFiLE9BQThCbEUsVUFBbEMsRUFBOEM7QUFBRTtBQUMvQ0Esb0JBQVUsQ0FBQ21DLFFBQVgsQ0FBb0JxQyxZQUFZLENBQUNWLFlBQWIsRUFBcEIsRUFBaURXLG1CQUFqRDtBQUNBLFNBRkQsTUFFTztBQUNONUUsYUFBRyxDQUFDLENBQUQsRUFBSSxzRkFBSixFQUE0RjJFLFlBQTVGLENBQUg7QUFDQTtBQUNELE9BTk0sTUFNQSxJQUFJNUUsS0FBSyxDQUFDMkIsSUFBTixDQUFXbUQsUUFBWCxDQUFvQkYsWUFBcEIsQ0FBSixFQUF1QztBQUFFO0FBQy9DeEMsb0JBQVksR0FBR3dDLFlBQWY7QUFDQSxPQUZNLE1BRUE7QUFBRTtBQUNSLFlBQUlHLElBQUksR0FBRy9FLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVS9SLFFBQVYsQ0FBbUJxVixZQUFuQixFQUFpQyxDQUFqQyxDQUFYOztBQUNBLFlBQUlHLElBQUosRUFBVTtBQUNUO0FBQ0EsaUJBQU9BLElBQUksQ0FBQ0MsVUFBTCxDQUFnQjFHLFlBQWhCLENBQTZCNkIsb0JBQTdCLENBQVAsRUFBMkQ7QUFDMUQ0RSxnQkFBSSxHQUFHQSxJQUFJLENBQUNDLFVBQVo7QUFDQTs7QUFFRCxjQUNDQyxLQUFLLEdBQUd0RSxRQUFRLENBQUNxQixRQUFULEdBQW9CLEtBQXBCLEdBQTRCLE1BRHJDO0FBQUEsY0FDNkM7QUFDNUNrRCx5QkFBZSxHQUFHbEYsS0FBSyxDQUFDc0IsR0FBTixDQUFVNkQsTUFBVixDQUFpQnhFLFFBQVEsQ0FBQ3ZSLFNBQTFCLENBRm5CO0FBQUEsY0FFeUQ7QUFDeERnVyx1QkFBYSxHQUFHcEYsS0FBSyxDQUFDc0IsR0FBTixDQUFVNkQsTUFBVixDQUFpQkosSUFBakIsQ0FIakI7O0FBS0EsY0FBSSxDQUFDL0QsV0FBTCxFQUFrQjtBQUFFO0FBQ25Ca0UsMkJBQWUsQ0FBQ0QsS0FBRCxDQUFmLElBQTBCN0UsVUFBVSxDQUFDdUMsU0FBWCxFQUExQjtBQUNBOztBQUVEdkMsb0JBQVUsQ0FBQ21DLFFBQVgsQ0FBb0I2QyxhQUFhLENBQUNILEtBQUQsQ0FBYixHQUF1QkMsZUFBZSxDQUFDRCxLQUFELENBQTFELEVBQW1FSixtQkFBbkU7QUFDQSxTQWhCRCxNQWdCTztBQUNONUUsYUFBRyxDQUFDLENBQUQsRUFBSSxpRUFBSixFQUF1RTJFLFlBQXZFLENBQUg7QUFDQTtBQUNEOztBQUNELGFBQU94RSxVQUFQO0FBQ0EsS0FsQ0Q7QUFvQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEsU0FBS3VDLFNBQUwsR0FBaUIsVUFBVTBDLGVBQVYsRUFBMkI7QUFDM0MsVUFBSSxDQUFDcFUsU0FBUyxDQUFDNUMsTUFBZixFQUF1QjtBQUFFO0FBQ3hCLGVBQU8wVCxZQUFZLENBQUMxSyxJQUFiLENBQWtCK0ksVUFBbEIsQ0FBUDtBQUNBLE9BRkQsTUFFTztBQUFFO0FBQ1IsWUFBSUosS0FBSyxDQUFDMkIsSUFBTixDQUFXbUQsUUFBWCxDQUFvQk8sZUFBcEIsQ0FBSixFQUEwQztBQUN6Q3RELHNCQUFZLEdBQUdzRCxlQUFmO0FBQ0EsU0FGRCxNQUVPO0FBQ05wRixhQUFHLENBQUMsQ0FBRCxFQUFJLGtIQUFKLENBQUg7QUFDQTtBQUNEOztBQUNELGFBQU9HLFVBQVA7QUFDQSxLQVhEO0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsU0FBS2tGLElBQUwsR0FBWSxVQUFVQyxLQUFWLEVBQWlCO0FBQzVCLFVBQUlDLE1BQU0sR0FBRztBQUNaQyxZQUFJLEVBQUV4RSxhQURNO0FBQ1M7QUFDckJlLGdCQUFRLEVBQUVyQixRQUFRLENBQUNxQixRQUZQO0FBR1pXLGlCQUFTLEVBQUU3QixVQUhDO0FBSVo0RSx1QkFBZSxFQUFFM0UsZ0JBSkw7QUFLWjNSLGlCQUFTLEVBQUV1UixRQUFRLENBQUN2UixTQUxSO0FBTVp1VyxrQkFBVSxFQUFFM0U7QUFOQSxPQUFiOztBQVFBLFVBQUksQ0FBQy9QLFNBQVMsQ0FBQzVDLE1BQWYsRUFBdUI7QUFBRTtBQUN4QixlQUFPbVgsTUFBUDtBQUNBLE9BRkQsTUFFTyxJQUFJQSxNQUFNLENBQUNELEtBQUQsQ0FBTixLQUFrQjVSLFNBQXRCLEVBQWlDO0FBQ3ZDLGVBQU82UixNQUFNLENBQUNELEtBQUQsQ0FBYjtBQUNBLE9BRk0sTUFFQTtBQUNOdEYsV0FBRyxDQUFDLENBQUQsRUFBSSxxQkFBcUJzRixLQUFyQixHQUE2QixxQkFBakMsQ0FBSDtBQUNBO0FBQ0E7QUFDRCxLQWpCRDtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLFNBQUt0QyxRQUFMLEdBQWdCLFVBQVUyQyxXQUFWLEVBQXVCO0FBQ3RDLFVBQUksQ0FBQzNVLFNBQVMsQ0FBQzVDLE1BQWYsRUFBdUI7QUFBRTtBQUN4QixlQUFPc1MsUUFBUSxDQUFDc0MsUUFBaEI7QUFDQSxPQUZELE1BRU8sSUFBSXRDLFFBQVEsQ0FBQ3NDLFFBQVQsSUFBcUIyQyxXQUF6QixFQUFzQztBQUFFO0FBQzlDakYsZ0JBQVEsQ0FBQ3NDLFFBQVQsR0FBb0IyQyxXQUFwQjtBQUNBOztBQUNELGFBQU94RixVQUFQO0FBQ0EsS0FQRDtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLFNBQUt5RixPQUFMLEdBQWUsVUFBVUMsUUFBVixFQUFvQjtBQUNsQyxVQUFJLENBQUM3VSxTQUFTLENBQUM1QyxNQUFmLEVBQXVCO0FBQUU7QUFDeEIsZUFBTzZTLFFBQVA7QUFDQSxPQUZELE1BRU8sSUFBSUEsUUFBUSxJQUFJNEUsUUFBaEIsRUFBMEI7QUFBRTtBQUNsQzVFLGdCQUFRLEdBQUcsQ0FBQyxDQUFDNEUsUUFBYjtBQUNBMUYsa0JBQVUsQ0FBQ3NFLFdBQVgsQ0FBdUI5RCxhQUF2QixFQUFzQyxJQUF0QztBQUNBOztBQUNELGFBQU9SLFVBQVA7QUFDQSxLQVJEO0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxTQUFLbEwsT0FBTCxHQUFlLFVBQVU2USxXQUFWLEVBQXVCO0FBQ3JDdFQsWUFBTSxDQUFDdVQsWUFBUCxDQUFvQjVFLGVBQXBCO0FBQ0EsVUFBSXhULENBQUMsR0FBR2dULGFBQWEsQ0FBQ3ZTLE1BQXRCOztBQUNBLGFBQU9ULENBQUMsRUFBUixFQUFZO0FBQ1hnVCxxQkFBYSxDQUFDaFQsQ0FBRCxDQUFiLENBQWlCc0gsT0FBakIsQ0FBeUI2USxXQUF6QjtBQUNBOztBQUNEcEYsY0FBUSxDQUFDdlIsU0FBVCxDQUFtQjJDLG1CQUFuQixDQUF1QyxRQUF2QyxFQUFpRHlQLFFBQWpEOztBQUNBYixjQUFRLENBQUN2UixTQUFULENBQW1CMkMsbUJBQW5CLENBQXVDLFFBQXZDLEVBQWlEeVAsUUFBakQ7O0FBQ0F4QixXQUFLLENBQUNpRyxHQUFOLENBQVU5RSxjQUFWOztBQUNBbEIsU0FBRyxDQUFDLENBQUQsRUFBSSxlQUFlSSxTQUFmLEdBQTJCLFdBQTNCLElBQTBDMEYsV0FBVyxHQUFHLE1BQUgsR0FBWSxPQUFqRSxJQUE0RSxHQUFoRixDQUFIO0FBQ0EsYUFBTyxJQUFQO0FBQ0EsS0FYRCxDQXRuQjJDLENBbW9CM0M7OztBQUNBMUUsYUFBUztBQUNULFdBQU9qQixVQUFQO0FBQ0EsR0F0b0JELENBM0NtQixDQW1yQm5COzs7QUFDQSxNQUFJTSxrQkFBa0IsR0FBRztBQUN4QjlKLFlBQVEsRUFBRTtBQUNUeEgsZUFBUyxFQUFFcUQsTUFERjtBQUVUdVAsY0FBUSxFQUFFLElBRkQ7QUFHVHdDLHdCQUFrQixFQUFFLEVBSFg7QUFJVHZCLGNBQVEsRUFBRSxDQUpEO0FBS1R2QixxQkFBZSxFQUFFO0FBTFI7QUFEYyxHQUF6QjtBQVNBOzs7O0FBR0EzQixhQUFXLENBQUNLLFVBQVosQ0FBdUI4RixTQUF2QixHQUFtQyxVQUFVckwsSUFBVixFQUFnQnNMLFlBQWhCLEVBQThCO0FBQ2hFekYsc0JBQWtCLENBQUM5SixRQUFuQixDQUE0QmlFLElBQTVCLElBQW9Dc0wsWUFBcEM7QUFDQSxHQUZELENBaHNCbUIsQ0Ftc0JuQjs7O0FBQ0FwRyxhQUFXLENBQUNLLFVBQVosQ0FBdUJsSixNQUF2QixHQUFnQyxVQUFVa1AsU0FBVixFQUFxQjtBQUNwRCxRQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFDQXRHLGVBQVcsQ0FBQ0ssVUFBWixHQUF5QixZQUFZO0FBQ3BDaUcsY0FBUSxDQUFDOVAsS0FBVCxDQUFlLElBQWYsRUFBcUJ0RixTQUFyQjtBQUNBLFdBQUtxVixNQUFMLEdBQWN0RyxLQUFLLENBQUM5SSxNQUFOLENBQWEsRUFBYixFQUFpQixJQUFqQixDQUFkLENBRm9DLENBRUU7O0FBQ3RDLGFBQU9rUCxTQUFTLENBQUM3UCxLQUFWLENBQWdCLElBQWhCLEVBQXNCdEYsU0FBdEIsS0FBb0MsSUFBM0M7QUFDQSxLQUpEOztBQUtBK08sU0FBSyxDQUFDOUksTUFBTixDQUFhNkksV0FBVyxDQUFDSyxVQUF6QixFQUFxQ2lHLFFBQXJDLEVBUG9ELENBT0o7OztBQUNoRHRHLGVBQVcsQ0FBQ0ssVUFBWixDQUF1QjFMLFNBQXZCLEdBQW1DMlIsUUFBUSxDQUFDM1IsU0FBNUMsQ0FSb0QsQ0FRRzs7QUFDdkRxTCxlQUFXLENBQUNLLFVBQVosQ0FBdUIxTCxTQUF2QixDQUFpQ2tCLFdBQWpDLEdBQStDbUssV0FBVyxDQUFDSyxVQUEzRCxDQVRvRCxDQVNtQjtBQUN2RSxHQVZEO0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0FMLGFBQVcsQ0FBQ3NFLEtBQVosR0FBb0IsVUFBVTdWLE9BQVYsRUFBbUI7QUFFdEM7Ozs7O0FBTUEsUUFDQzZSLFNBQVMsR0FBRyxtQkFEYjtBQUFBLFFBRUNrRyxrQkFBa0IsR0FBRyxRQUZ0QjtBQUFBLFFBR0NDLGtCQUFrQixHQUFHLFFBSHRCO0FBQUEsUUFJQ0MsaUJBQWlCLEdBQUcsT0FKckI7QUFBQSxRQUtDaEcsZUFBZSxHQUFHaUcsYUFBYSxDQUFDOVAsUUFMakM7QUFPQTs7Ozs7O0FBTUEsUUFDQ3lOLEtBQUssR0FBRyxJQURUO0FBQUEsUUFFQzFELFFBQVEsR0FBR1gsS0FBSyxDQUFDOUksTUFBTixDQUFhLEVBQWIsRUFBaUJ1SixlQUFqQixFQUFrQ2pTLE9BQWxDLENBRlo7QUFBQSxRQUdDbVksTUFBTSxHQUFHSixrQkFIVjtBQUFBLFFBSUNLLFNBQVMsR0FBRyxDQUpiO0FBQUEsUUFLQ0MsYUFBYSxHQUFHO0FBQ2ZDLFdBQUssRUFBRSxDQURRO0FBRWZDLFNBQUcsRUFBRTtBQUZVLEtBTGpCO0FBQUEsUUFRSTtBQUNIQyxlQUFXLEdBQUcsQ0FUZjtBQUFBLFFBVUM5RixRQUFRLEdBQUcsSUFWWjtBQUFBLFFBV0MrRixxQkFYRDtBQUFBLFFBWUNDLFdBWkQ7QUFjQTs7Ozs7O0FBSUEsUUFBSTdGLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVk7QUFDM0IsV0FBSyxJQUFJeEgsR0FBVCxJQUFnQjhHLFFBQWhCLEVBQTBCO0FBQUU7QUFDM0IsWUFBSSxDQUFDRixlQUFlLENBQUNoSixjQUFoQixDQUErQm9DLEdBQS9CLENBQUwsRUFBMEM7QUFDekNvRyxhQUFHLENBQUMsQ0FBRCxFQUFJLCtCQUErQnBHLEdBQS9CLEdBQXFDLElBQXpDLENBQUg7QUFDQSxpQkFBTzhHLFFBQVEsQ0FBQzlHLEdBQUQsQ0FBZjtBQUNBO0FBQ0QsT0FOMEIsQ0FPM0I7OztBQUNBLFdBQUssSUFBSXNOLFVBQVQsSUFBdUIxRyxlQUF2QixFQUF3QztBQUN2QzJHLHNCQUFjLENBQUNELFVBQUQsQ0FBZDtBQUNBLE9BVjBCLENBVzNCOzs7QUFDQUUsb0JBQWM7QUFDZCxLQWJEO0FBZUE7Ozs7Ozs7QUFNQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsU0FBS3ZTLEVBQUwsR0FBVSxVQUFVd1MsS0FBVixFQUFpQkMsUUFBakIsRUFBMkI7QUFDcEMsVUFBSXhILEtBQUssQ0FBQzJCLElBQU4sQ0FBV21ELFFBQVgsQ0FBb0IwQyxRQUFwQixDQUFKLEVBQW1DO0FBQ2xDRCxhQUFLLEdBQUdBLEtBQUssQ0FBQ0UsSUFBTixHQUFhQyxLQUFiLENBQW1CLEdBQW5CLENBQVI7QUFDQUgsYUFBSyxDQUFDclAsT0FBTixDQUFjLFVBQVV5UCxRQUFWLEVBQW9CO0FBQ2pDLGNBQ0NDLFNBQVMsR0FBR0QsUUFBUSxDQUFDRCxLQUFULENBQWUsR0FBZixDQURiO0FBQUEsY0FFQ0csU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLGNBR0NFLFNBQVMsR0FBR0YsU0FBUyxDQUFDLENBQUQsQ0FIdEI7O0FBSUEsY0FBSUMsU0FBUyxJQUFJLEdBQWpCLEVBQXNCO0FBQUU7QUFDdkIsZ0JBQUksQ0FBQ1AsVUFBVSxDQUFDTyxTQUFELENBQWYsRUFBNEI7QUFDM0JQLHdCQUFVLENBQUNPLFNBQUQsQ0FBVixHQUF3QixFQUF4QjtBQUNBOztBQUNEUCxzQkFBVSxDQUFDTyxTQUFELENBQVYsQ0FBc0IvUyxJQUF0QixDQUEyQjtBQUMxQmdULHVCQUFTLEVBQUVBLFNBQVMsSUFBSSxFQURFO0FBRTFCTixzQkFBUSxFQUFFQTtBQUZnQixhQUEzQjtBQUlBO0FBQ0QsU0FkRDtBQWVBLE9BakJELE1BaUJPO0FBQ052SCxXQUFHLENBQUMsQ0FBRCxFQUFJLHdEQUF3RHNILEtBQXhELEdBQWdFLDRCQUFwRSxDQUFIO0FBQ0E7O0FBQ0QsYUFBT2xELEtBQVA7QUFDQSxLQXRCRDtBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxTQUFLbk8sR0FBTCxHQUFXLFVBQVVxUixLQUFWLEVBQWlCQyxRQUFqQixFQUEyQjtBQUNyQyxVQUFJLENBQUNELEtBQUwsRUFBWTtBQUNYdEgsV0FBRyxDQUFDLENBQUQsRUFBSSxxQ0FBSixDQUFIO0FBQ0EsZUFBT29FLEtBQVA7QUFDQTs7QUFDRGtELFdBQUssR0FBR0EsS0FBSyxDQUFDRSxJQUFOLEdBQWFDLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBUjtBQUNBSCxXQUFLLENBQUNyUCxPQUFOLENBQWMsVUFBVXlQLFFBQVYsRUFBb0I5TixHQUFwQixFQUF5QjtBQUN0QyxZQUNDK04sU0FBUyxHQUFHRCxRQUFRLENBQUNELEtBQVQsQ0FBZSxHQUFmLENBRGI7QUFBQSxZQUVDRyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFELENBRnRCO0FBQUEsWUFHQ0UsU0FBUyxHQUFHRixTQUFTLENBQUMsQ0FBRCxDQUFULElBQWdCLEVBSDdCO0FBQUEsWUFJQ0csVUFBVSxHQUFHRixTQUFTLEtBQUssR0FBZCxHQUFvQm5WLE1BQU0sQ0FBQ3NWLElBQVAsQ0FBWVYsVUFBWixDQUFwQixHQUE4QyxDQUFDTyxTQUFELENBSjVEO0FBS0FFLGtCQUFVLENBQUM3UCxPQUFYLENBQW1CLFVBQVU1RyxNQUFWLEVBQWtCO0FBQ3BDLGNBQ0MyVyxJQUFJLEdBQUdYLFVBQVUsQ0FBQ2hXLE1BQUQsQ0FBVixJQUFzQixFQUQ5QjtBQUFBLGNBRUMxRCxDQUFDLEdBQUdxYSxJQUFJLENBQUM1WixNQUZWOztBQUdBLGlCQUFPVCxDQUFDLEVBQVIsRUFBWTtBQUNYLGdCQUFJMkcsUUFBUSxHQUFHMFQsSUFBSSxDQUFDcmEsQ0FBRCxDQUFuQjs7QUFDQSxnQkFBSTJHLFFBQVEsS0FBS3VULFNBQVMsS0FBS3ZULFFBQVEsQ0FBQ3VULFNBQXZCLElBQW9DQSxTQUFTLEtBQUssR0FBdkQsQ0FBUixLQUF3RSxDQUFDTixRQUFELElBQWFBLFFBQVEsSUFBSWpULFFBQVEsQ0FBQ2lULFFBQTFHLENBQUosRUFBeUg7QUFDeEhTLGtCQUFJLENBQUM5UyxNQUFMLENBQVl2SCxDQUFaLEVBQWUsQ0FBZjtBQUNBO0FBQ0Q7O0FBQ0QsY0FBSSxDQUFDcWEsSUFBSSxDQUFDNVosTUFBVixFQUFrQjtBQUNqQixtQkFBT2laLFVBQVUsQ0FBQ2hXLE1BQUQsQ0FBakI7QUFDQTtBQUNELFNBYkQ7QUFjQSxPQXBCRDtBQXFCQSxhQUFPK1MsS0FBUDtBQUNBLEtBNUJEO0FBOEJBOzs7Ozs7Ozs7Ozs7O0FBV0EsU0FBSzlHLE9BQUwsR0FBZSxVQUFVMUMsSUFBVixFQUFnQnFOLElBQWhCLEVBQXNCO0FBQ3BDLFVBQUlyTixJQUFKLEVBQVU7QUFDVCxZQUNDK00sU0FBUyxHQUFHL00sSUFBSSxDQUFDNE0sSUFBTCxHQUFZQyxLQUFaLENBQWtCLEdBQWxCLENBRGI7QUFBQSxZQUVDRyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFELENBRnRCO0FBQUEsWUFHQ0UsU0FBUyxHQUFHRixTQUFTLENBQUMsQ0FBRCxDQUh0QjtBQUFBLFlBSUNPLFNBQVMsR0FBR2IsVUFBVSxDQUFDTyxTQUFELENBSnZCO0FBS0E1SCxXQUFHLENBQUMsQ0FBRCxFQUFJLGNBQUosRUFBb0I0SCxTQUFwQixFQUErQkssSUFBSSxHQUFHLElBQUgsR0FBVSxFQUE3QyxFQUFpREEsSUFBSSxJQUFJLEVBQXpELENBQUg7O0FBQ0EsWUFBSUMsU0FBSixFQUFlO0FBQ2RBLG1CQUFTLENBQUNqUSxPQUFWLENBQWtCLFVBQVUzRCxRQUFWLEVBQW9Cc0YsR0FBcEIsRUFBeUI7QUFDMUMsZ0JBQUksQ0FBQ2lPLFNBQUQsSUFBY0EsU0FBUyxLQUFLdlQsUUFBUSxDQUFDdVQsU0FBekMsRUFBb0Q7QUFDbkR2VCxzQkFBUSxDQUFDaVQsUUFBVCxDQUFrQm5RLElBQWxCLENBQXVCZ04sS0FBdkIsRUFBOEIsSUFBSXRFLFdBQVcsQ0FBQ3NELEtBQWhCLENBQXNCd0UsU0FBdEIsRUFBaUN0VCxRQUFRLENBQUN1VCxTQUExQyxFQUFxRHpELEtBQXJELEVBQTRENkQsSUFBNUQsQ0FBOUI7QUFDQTtBQUNELFdBSkQ7QUFLQTtBQUNELE9BZEQsTUFjTztBQUNOakksV0FBRyxDQUFDLENBQUQsRUFBSSxxQ0FBSixDQUFIO0FBQ0E7O0FBQ0QsYUFBT29FLEtBQVA7QUFDQSxLQW5CRCxDQTNYc0MsQ0FnWnRDOzs7QUFDQUEsU0FBSyxDQUNIdFAsRUFERixDQUNLLGlCQURMLEVBQ3dCLFVBQVV4RyxDQUFWLEVBQWE7QUFDbkMsVUFBSUEsQ0FBQyxDQUFDNlosSUFBRixLQUFXLFVBQVgsSUFBeUI3WixDQUFDLENBQUM2WixJQUFGLEtBQVcsY0FBeEMsRUFBd0Q7QUFBRTtBQUN6RCxZQUFJN1osQ0FBQyxDQUFDNlosSUFBRixLQUFXLGdCQUFmLEVBQWlDO0FBQ2hDQyxzQ0FBNEI7QUFDNUIsU0FGRCxNQUVPLElBQUk5WixDQUFDLENBQUM2WixJQUFGLEtBQVcsU0FBZixFQUEwQjtBQUFFO0FBQ2xDL0QsZUFBSyxDQUFDckIsTUFBTjtBQUNBO0FBQ0Q7QUFDRCxLQVRGLEVBVUVqTyxFQVZGLENBVUssZ0JBVkwsRUFVdUIsVUFBVXhHLENBQVYsRUFBYTtBQUNsQytaLHdCQUFrQjtBQUNsQmpFLFdBQUssQ0FBQ3JCLE1BQU4sR0FGa0MsQ0FFbEI7QUFDaEIsS0FiRjtBQWVBOzs7Ozs7Ozs7QUFRQSxRQUFJL0MsR0FBRyxHQUFHLEtBQUswRCxJQUFMLEdBQVksVUFBVVYsUUFBVixFQUFvQlcsTUFBcEIsRUFBNEI7QUFDakQsVUFBSWpELFFBQVEsQ0FBQ3NDLFFBQVQsSUFBcUJBLFFBQXpCLEVBQW1DO0FBQ2xDOVUsYUFBSyxDQUFDdUcsU0FBTixDQUFnQlMsTUFBaEIsQ0FBdUJrQyxJQUF2QixDQUE0QnBHLFNBQTVCLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDLEVBQTZDLE1BQU1vUCxTQUFOLEdBQWtCLE1BQS9EOztBQUNBTCxhQUFLLENBQUNDLEdBQU4sQ0FBVTFKLEtBQVYsQ0FBZ0I5RCxNQUFoQixFQUF3QnhCLFNBQXhCO0FBQ0E7QUFDRCxLQUxEO0FBT0E7Ozs7Ozs7Ozs7Ozs7O0FBWUEsU0FBS3NULEtBQUwsR0FBYSxVQUFVRCxVQUFWLEVBQXNCO0FBQ2xDLFVBQUksRUFBRUEsVUFBVSxZQUFZdkUsV0FBVyxDQUFDSyxVQUFwQyxDQUFKLEVBQXFEO0FBQ3BESCxXQUFHLENBQUMsQ0FBRCxFQUFJLDZFQUFKLENBQUg7QUFDQSxPQUZELE1BRU8sSUFBSWlILFdBQVcsSUFBSTVDLFVBQW5CLEVBQStCO0FBQ3JDO0FBQ0EsWUFBSTRDLFdBQUosRUFBaUI7QUFBRTtBQUNsQkEscUJBQVcsQ0FBQ3pDLFdBQVosQ0FBd0JKLEtBQXhCO0FBQ0E7O0FBQ0Q2QyxtQkFBVyxHQUFHNUMsVUFBZDtBQUNBK0Msc0JBQWM7QUFDZGtCLHNCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FGLG9DQUE0QixDQUFDLElBQUQsQ0FBNUI7QUFDQUMsMEJBQWtCOztBQUNsQnBCLG1CQUFXLENBQUM1QixJQUFaLENBQWlCLFdBQWpCLEVBQThCelQsZ0JBQTlCLENBQStDLFFBQS9DLEVBQXlEMlcsaUJBQXpEOztBQUNBbEUsa0JBQVUsQ0FBQ0gsUUFBWCxDQUFvQkUsS0FBcEI7QUFDQUEsYUFBSyxDQUFDOUcsT0FBTixDQUFjLEtBQWQsRUFBcUI7QUFDcEIrRyxvQkFBVSxFQUFFNEM7QUFEUSxTQUFyQjtBQUdBakgsV0FBRyxDQUFDLENBQUQsRUFBSSxXQUFXSSxTQUFYLEdBQXVCLGdCQUEzQixDQUFIO0FBQ0FnRSxhQUFLLENBQUNyQixNQUFOO0FBQ0E7O0FBQ0QsYUFBT3FCLEtBQVA7QUFDQSxLQXRCRDtBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFLd0IsT0FBTCxHQUFlLFVBQVVDLFFBQVYsRUFBb0I7QUFDbEMsVUFBSSxDQUFDN1UsU0FBUyxDQUFDNUMsTUFBZixFQUF1QjtBQUFFO0FBQ3hCLGVBQU82UyxRQUFQO0FBQ0EsT0FGRCxNQUVPLElBQUlBLFFBQVEsSUFBSTRFLFFBQWhCLEVBQTBCO0FBQUU7QUFDbEM1RSxnQkFBUSxHQUFHLENBQUMsQ0FBQzRFLFFBQWI7QUFDQXpCLGFBQUssQ0FBQ3JCLE1BQU4sQ0FBYSxJQUFiO0FBQ0E7O0FBQ0QsYUFBT3FCLEtBQVA7QUFDQSxLQVJEO0FBVUE7Ozs7Ozs7Ozs7Ozs7O0FBWUEsU0FBSy9TLE1BQUwsR0FBYyxZQUFZO0FBQ3pCLFVBQUk0VixXQUFKLEVBQWlCO0FBQ2hCQSxtQkFBVyxDQUFDNUIsSUFBWixDQUFpQixXQUFqQixFQUE4QnZULG1CQUE5QixDQUFrRCxRQUFsRCxFQUE0RHlXLGlCQUE1RDs7QUFDQSxZQUFJQyxTQUFTLEdBQUd2QixXQUFoQjtBQUNBQSxtQkFBVyxHQUFHdlQsU0FBZDtBQUNBOFUsaUJBQVMsQ0FBQ2hFLFdBQVYsQ0FBc0JKLEtBQXRCO0FBQ0FBLGFBQUssQ0FBQzlHLE9BQU4sQ0FBYyxRQUFkO0FBQ0EwQyxXQUFHLENBQUMsQ0FBRCxFQUFJLGFBQWFJLFNBQWIsR0FBeUIsa0JBQTdCLENBQUg7QUFDQTs7QUFDRCxhQUFPZ0UsS0FBUDtBQUNBLEtBVkQ7QUFZQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsU0FBS25QLE9BQUwsR0FBZSxVQUFVd1QsS0FBVixFQUFpQjtBQUMvQnJFLFdBQUssQ0FBQzlHLE9BQU4sQ0FBYyxTQUFkLEVBQXlCO0FBQ3hCbUwsYUFBSyxFQUFFQTtBQURpQixPQUF6QjtBQUdBckUsV0FBSyxDQUFDL1MsTUFBTjtBQUNBK1MsV0FBSyxDQUFDbk8sR0FBTixDQUFVLEtBQVY7QUFDQStKLFNBQUcsQ0FBQyxDQUFELEVBQUksZUFBZUksU0FBZixHQUEyQixXQUEzQixJQUEwQ3FJLEtBQUssR0FBRyxNQUFILEdBQVksT0FBM0QsSUFBc0UsR0FBMUUsQ0FBSDtBQUNBLGFBQU8sSUFBUDtBQUNBLEtBUkQ7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxTQUFLMUYsTUFBTCxHQUFjLFVBQVUyQixXQUFWLEVBQXVCO0FBQ3BDLFVBQUl1QyxXQUFKLEVBQWlCO0FBQ2hCLFlBQUl2QyxXQUFKLEVBQWlCO0FBQ2hCLGNBQUl1QyxXQUFXLENBQUNyQixPQUFaLE1BQXlCM0UsUUFBN0IsRUFBdUM7QUFDdEMsZ0JBQ0N5QixTQUFTLEdBQUd1RSxXQUFXLENBQUM1QixJQUFaLENBQWlCLFdBQWpCLENBRGI7QUFBQSxnQkFFQ3FELFdBRkQ7O0FBSUEsZ0JBQUloSSxRQUFRLENBQUNqUyxRQUFULEdBQW9CLENBQXhCLEVBQTJCO0FBQzFCaWEseUJBQVcsR0FBRyxDQUFDaEcsU0FBUyxHQUFHa0UsYUFBYSxDQUFDQyxLQUEzQixLQUFxQ0QsYUFBYSxDQUFDRSxHQUFkLEdBQW9CRixhQUFhLENBQUNDLEtBQXZFLENBQWQ7QUFDQSxhQUZELE1BRU87QUFDTjZCLHlCQUFXLEdBQUdoRyxTQUFTLElBQUlrRSxhQUFhLENBQUNDLEtBQTNCLEdBQW1DLENBQW5DLEdBQXVDLENBQXJEO0FBQ0E7O0FBRUR6QyxpQkFBSyxDQUFDOUcsT0FBTixDQUFjLFFBQWQsRUFBd0I7QUFDdkJxTCxzQkFBUSxFQUFFL0IsYUFBYSxDQUFDQyxLQUREO0FBRXZCK0Isb0JBQU0sRUFBRWhDLGFBQWEsQ0FBQ0UsR0FGQztBQUd2QnBFLHVCQUFTLEVBQUVBO0FBSFksYUFBeEI7QUFNQTBCLGlCQUFLLENBQUN5RSxRQUFOLENBQWVILFdBQWY7QUFDQSxXQWxCRCxNQWtCTyxJQUFJSSxJQUFJLElBQUlwQyxNQUFNLEtBQUtILGtCQUF2QixFQUEyQztBQUNqRHdDLDBCQUFjLENBQUMsSUFBRCxDQUFkLENBRGlELENBQzNCO0FBQ3RCO0FBQ0QsU0F0QkQsTUFzQk87QUFDTjlCLHFCQUFXLENBQUN4QyxXQUFaLENBQXdCTCxLQUF4QixFQUErQixLQUEvQjtBQUNBO0FBQ0Q7O0FBQ0QsYUFBT0EsS0FBUDtBQUNBLEtBN0JEO0FBK0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsU0FBS3ZDLE9BQUwsR0FBZSxZQUFZO0FBQzFCeUcsb0JBQWM7QUFDZEYsa0NBQTRCLEdBRkYsQ0FHMUI7O0FBQ0EsYUFBT2hFLEtBQVA7QUFDQSxLQUxEO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQSxTQUFLeUUsUUFBTCxHQUFnQixVQUFVQSxRQUFWLEVBQW9CO0FBQ25DLFVBQUksQ0FBQzdYLFNBQVMsQ0FBQzVDLE1BQWYsRUFBdUI7QUFBRTtBQUN4QixlQUFPdVksU0FBUDtBQUNBLE9BRkQsTUFFTztBQUFFO0FBQ1IsWUFDQ3FDLFFBQVEsR0FBRyxLQURaO0FBQUEsWUFFQ0MsUUFBUSxHQUFHdkMsTUFGWjtBQUFBLFlBR0NqQixlQUFlLEdBQUd3QixXQUFXLEdBQUdBLFdBQVcsQ0FBQzVCLElBQVosQ0FBaUIsaUJBQWpCLENBQUgsR0FBeUMsUUFIdkU7QUFBQSxZQUlDNkQsZ0JBQWdCLEdBQUd4SSxRQUFRLENBQUNrQyxPQUFULElBQW9CaUcsUUFBUSxJQUFJbEMsU0FKcEQ7O0FBS0EsWUFBSWpHLFFBQVEsQ0FBQ2pTLFFBQVQsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDNUI7QUFDQXVhLGtCQUFRLEdBQUdyQyxTQUFTLElBQUlrQyxRQUF4QjtBQUNBbEMsbUJBQVMsR0FBR2tDLFFBQVEsR0FBRyxDQUFYLElBQWdCSyxnQkFBaEIsR0FBbUMsQ0FBbkMsR0FBdUMsQ0FBbkQ7QUFDQXhDLGdCQUFNLEdBQUdDLFNBQVMsS0FBSyxDQUFkLEdBQWtCTCxrQkFBbEIsR0FBdUNDLGtCQUFoRDtBQUNBLFNBTEQsTUFLTztBQUNOO0FBQ0EsY0FBSXNDLFFBQVEsR0FBRyxDQUFYLElBQWdCbkMsTUFBTSxLQUFLSixrQkFBM0IsSUFBaUQ0QyxnQkFBckQsRUFBdUU7QUFDdEU7QUFDQXZDLHFCQUFTLEdBQUcsQ0FBWjtBQUNBRCxrQkFBTSxHQUFHSixrQkFBVDtBQUNBMEMsb0JBQVEsR0FBRyxJQUFYO0FBQ0EsV0FMRCxNQUtPLElBQUlILFFBQVEsSUFBSSxDQUFaLElBQWlCQSxRQUFRLEdBQUcsQ0FBNUIsSUFBaUNLLGdCQUFyQyxFQUF1RDtBQUM3RHZDLHFCQUFTLEdBQUdrQyxRQUFaO0FBQ0FuQyxrQkFBTSxHQUFHSCxrQkFBVDtBQUNBeUMsb0JBQVEsR0FBRyxJQUFYO0FBQ0EsV0FKTSxNQUlBLElBQUlILFFBQVEsSUFBSSxDQUFaLElBQWlCbkMsTUFBTSxLQUFLRixpQkFBaEMsRUFBbUQ7QUFDekRHLHFCQUFTLEdBQUcsQ0FBWjtBQUNBRCxrQkFBTSxHQUFHRixpQkFBVDtBQUNBd0Msb0JBQVEsR0FBRyxJQUFYO0FBQ0EsV0FKTSxNQUlBLElBQUl0QyxNQUFNLEtBQUtILGtCQUFYLElBQWlDLENBQUMyQyxnQkFBdEMsRUFBd0Q7QUFDOURILDBCQUFjLEdBRGdELENBQzVDO0FBQ2xCO0FBQ0Q7O0FBQ0QsWUFBSUMsUUFBSixFQUFjO0FBQ2I7QUFDQSxjQUNDRyxTQUFTLEdBQUc7QUFDWE4sb0JBQVEsRUFBRWxDLFNBREM7QUFFWHlDLGlCQUFLLEVBQUUxQyxNQUZJO0FBR1hqQiwyQkFBZSxFQUFFQTtBQUhOLFdBRGI7QUFBQSxjQU1DNEQsWUFBWSxHQUFHM0MsTUFBTSxJQUFJdUMsUUFOMUI7O0FBUUEsY0FBSTNMLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVVnTSxTQUFWLEVBQXFCO0FBQUU7QUFDcENsRixpQkFBSyxDQUFDOUcsT0FBTixDQUFjZ00sU0FBZCxFQUF5QkgsU0FBekI7QUFDQSxXQUZEOztBQUlBLGNBQUlFLFlBQUosRUFBa0I7QUFBRTtBQUNuQixnQkFBSUosUUFBUSxLQUFLMUMsa0JBQWpCLEVBQXFDO0FBQ3BDakoscUJBQU8sQ0FBQyxPQUFELENBQVA7QUFDQUEscUJBQU8sQ0FBQzJMLFFBQVEsS0FBSzNDLGtCQUFiLEdBQWtDLE9BQWxDLEdBQTRDLEtBQTdDLENBQVA7QUFDQTtBQUNEOztBQUNEaEosaUJBQU8sQ0FBQyxVQUFELENBQVA7O0FBQ0EsY0FBSStMLFlBQUosRUFBa0I7QUFBRTtBQUNuQixnQkFBSTNDLE1BQU0sS0FBS0gsa0JBQWYsRUFBbUM7QUFDbENqSixxQkFBTyxDQUFDb0osTUFBTSxLQUFLSixrQkFBWCxHQUFnQyxPQUFoQyxHQUEwQyxLQUEzQyxDQUFQO0FBQ0FoSixxQkFBTyxDQUFDLE9BQUQsQ0FBUDtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxlQUFPOEcsS0FBUDtBQUNBO0FBQ0QsS0FoRUQ7QUFtRUE7Ozs7Ozs7Ozs7OztBQVVBLFFBQUlpRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQVk7QUFDcEN6QixtQkFBYSxHQUFHO0FBQ2ZDLGFBQUssRUFBRUUsV0FBVyxHQUFHckcsUUFBUSxDQUFDd0U7QUFEZixPQUFoQjs7QUFHQSxVQUFJK0IsV0FBVyxJQUFJdkcsUUFBUSxDQUFDNkksY0FBNUIsRUFBNEM7QUFDM0M7QUFDQTNDLHFCQUFhLENBQUNDLEtBQWQsSUFBdUJJLFdBQVcsQ0FBQzVCLElBQVosQ0FBaUIsTUFBakIsSUFBMkIzRSxRQUFRLENBQUM4SSxXQUEzRDtBQUNBOztBQUNENUMsbUJBQWEsQ0FBQ0UsR0FBZCxHQUFvQkYsYUFBYSxDQUFDQyxLQUFkLEdBQXNCbkcsUUFBUSxDQUFDalMsUUFBbkQ7QUFDQSxLQVREO0FBV0E7Ozs7Ozs7Ozs7OztBQVVBLFFBQUk2WixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQVVtQixjQUFWLEVBQTBCO0FBQzlDO0FBQ0EsVUFBSXpDLHFCQUFKLEVBQTJCO0FBQzFCLFlBQUkwQyxPQUFPLEdBQUcsVUFBZDs7QUFDQSxZQUFJQyxZQUFZLENBQUNELE9BQUQsRUFBVTFDLHFCQUFxQixDQUFDNVAsSUFBdEIsQ0FBMkJnTixLQUEzQixDQUFWLENBQVosSUFBNEQsQ0FBQ3FGLGNBQWpFLEVBQWlGO0FBQUU7QUFDbEZyRixlQUFLLENBQUM5RyxPQUFOLENBQWMsUUFBZCxFQUF3QjtBQUN2QjZLLGdCQUFJLEVBQUV1QixPQURpQjtBQUV2QkUsa0JBQU0sRUFBRWxKLFFBQVEsQ0FBQ2dKLE9BQUQ7QUFGTyxXQUF4QjtBQUlBdEYsZUFBSyxDQUFDOUcsT0FBTixDQUFjLE9BQWQsRUFBdUI7QUFDdEJ1TSxrQkFBTSxFQUFFSDtBQURjLFdBQXZCO0FBR0E7QUFDRDtBQUNELEtBZEQ7QUFnQkE7Ozs7Ozs7Ozs7Ozs7O0FBWUEsUUFBSXRCLDRCQUE0QixHQUFHLFNBQS9CQSw0QkFBK0IsQ0FBVXFCLGNBQVYsRUFBMEI7QUFDNUQsVUFDQ0ssVUFBVSxHQUFHLENBRGQ7QUFBQSxVQUVDQyxLQUFLLEdBQUdySixRQUFRLENBQUM2SSxjQUZsQjs7QUFHQSxVQUFJdEMsV0FBVyxLQUFLOEMsS0FBSyxJQUFJaEQsV0FBVyxHQUFHLENBQTVCLENBQWYsRUFBK0M7QUFBRTtBQUNoRCxZQUFJZ0QsS0FBSixFQUFXO0FBQUU7QUFDWixjQUFJQSxLQUFLLENBQUNoRixVQUFWLEVBQXNCO0FBQUU7QUFDdkIsZ0JBQ0NpRixjQUFjLEdBQUcvQyxXQUFXLENBQUM1QixJQUFaLEVBRGxCO0FBQUEsZ0JBRUNKLGVBQWUsR0FBR2xGLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVTZELE1BQVYsQ0FBaUI4RSxjQUFjLENBQUM3YSxTQUFoQyxDQUZuQjtBQUFBLGdCQUUrRDtBQUM5RDZWLGlCQUFLLEdBQUdnRixjQUFjLENBQUNqSSxRQUFmLEdBQTBCLEtBQTFCLEdBQWtDLE1BSDNDLENBRHFCLENBSThCO0FBRW5EOzs7QUFDQSxtQkFBT2dJLEtBQUssQ0FBQ2hGLFVBQU4sQ0FBaUIxRyxZQUFqQixDQUE4QjZCLG9CQUE5QixDQUFQLEVBQTREO0FBQzNENkosbUJBQUssR0FBR0EsS0FBSyxDQUFDaEYsVUFBZDtBQUNBOztBQUVELGdCQUFJSSxhQUFhLEdBQUdwRixLQUFLLENBQUNzQixHQUFOLENBQVU2RCxNQUFWLENBQWlCNkUsS0FBakIsQ0FBcEI7O0FBRUEsZ0JBQUksQ0FBQ0MsY0FBYyxDQUFDdEUsVUFBcEIsRUFBZ0M7QUFBRTtBQUNqQ1QsNkJBQWUsQ0FBQ0QsS0FBRCxDQUFmLElBQTBCaUMsV0FBVyxDQUFDdkUsU0FBWixFQUExQjtBQUNBOztBQUVEb0gsc0JBQVUsR0FBRzNFLGFBQWEsQ0FBQ0gsS0FBRCxDQUFiLEdBQXVCQyxlQUFlLENBQUNELEtBQUQsQ0FBbkQ7QUFFQSxXQW5CRCxNQW1CTztBQUFFO0FBQ1JoRixlQUFHLENBQUMsQ0FBRCxFQUFJLG1FQUFKLEVBQXlFdE0sU0FBekUsQ0FBSDtBQUNBMFEsaUJBQUssQ0FBQ21GLGNBQU4sQ0FBcUI3VixTQUFyQixFQUZNLENBRTJCO0FBQ2pDO0FBQ0Q7O0FBRUQsWUFBSXVXLE9BQU8sR0FBR0gsVUFBVSxJQUFJL0MsV0FBNUI7QUFDQUEsbUJBQVcsR0FBRytDLFVBQWQ7O0FBQ0EsWUFBSUcsT0FBTyxJQUFJLENBQUNSLGNBQWhCLEVBQWdDO0FBQy9CckYsZUFBSyxDQUFDOUcsT0FBTixDQUFjLE9BQWQsRUFBdUI7QUFDdEJ1TSxrQkFBTSxFQUFFO0FBRGMsV0FBdkI7QUFHQTtBQUNEO0FBQ0QsS0F2Q0Q7QUF5Q0E7Ozs7OztBQUlBLFFBQUl0QixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQVVqYSxDQUFWLEVBQWE7QUFDcEMsVUFBSW9TLFFBQVEsQ0FBQzhJLFdBQVQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDN0JwRixhQUFLLENBQUM5RyxPQUFOLENBQWMsT0FBZCxFQUF1QjtBQUN0QnVNLGdCQUFNLEVBQUU7QUFEYyxTQUF2QjtBQUdBO0FBQ0QsS0FORDs7QUFTQSxRQUFJSyxTQUFTLEdBQUduSyxLQUFLLENBQUM5SSxNQUFOLENBQWF3UCxhQUFhLENBQUMwRCxRQUEzQixFQUFxQztBQUNwRDtBQUNBMWIsY0FBUSxFQUFFLGtCQUFVMmIsR0FBVixFQUFlO0FBQ3hCLFlBQUlySyxLQUFLLENBQUMyQixJQUFOLENBQVcySSxNQUFYLENBQWtCRCxHQUFsQixLQUEwQkEsR0FBRyxDQUFDeFosS0FBSixDQUFVLGdCQUFWLENBQTlCLEVBQTJEO0FBQzFEO0FBQ0EsY0FBSTBaLElBQUksR0FBR0MsVUFBVSxDQUFDSCxHQUFELENBQVYsR0FBa0IsR0FBN0I7O0FBQ0FBLGFBQUcsR0FBRyxlQUFZO0FBQ2pCLG1CQUFPbkQsV0FBVyxHQUFHQSxXQUFXLENBQUM1QixJQUFaLENBQWlCLE1BQWpCLElBQTJCaUYsSUFBOUIsR0FBcUMsQ0FBdkQ7QUFDQSxXQUZEO0FBR0E7O0FBQ0QsWUFBSXZLLEtBQUssQ0FBQzJCLElBQU4sQ0FBV21ELFFBQVgsQ0FBb0J1RixHQUFwQixDQUFKLEVBQThCO0FBQzdCO0FBQ0FwRCwrQkFBcUIsR0FBR29ELEdBQXhCOztBQUNBLGNBQUk7QUFDSEEsZUFBRyxHQUFHRyxVQUFVLENBQUN2RCxxQkFBcUIsQ0FBQzVQLElBQXRCLENBQTJCZ04sS0FBM0IsQ0FBRCxDQUFoQjtBQUNBLFdBRkQsQ0FFRSxPQUFPOVYsQ0FBUCxFQUFVO0FBQ1g4YixlQUFHLEdBQUcsQ0FBQyxDQUFQLENBRFcsQ0FDRDtBQUNWO0FBQ0QsU0FoQnVCLENBaUJ4Qjs7O0FBQ0FBLFdBQUcsR0FBR0csVUFBVSxDQUFDSCxHQUFELENBQWhCOztBQUNBLFlBQUksQ0FBQ3JLLEtBQUssQ0FBQzJCLElBQU4sQ0FBV0MsTUFBWCxDQUFrQnlJLEdBQWxCLENBQUQsSUFBMkJBLEdBQUcsR0FBRyxDQUFyQyxFQUF3QztBQUN2QyxjQUFJcEQscUJBQUosRUFBMkI7QUFDMUJBLGlDQUFxQixHQUFHdFQsU0FBeEI7QUFDQSxrQkFBTSxDQUFDLG9FQUFELEVBQXVFMFcsR0FBdkUsQ0FBTjtBQUNBLFdBSEQsTUFHTztBQUNOLGtCQUFNLENBQUMsd0NBQUQsRUFBMkNBLEdBQTNDLENBQU47QUFDQTtBQUNEOztBQUNELGVBQU9BLEdBQVA7QUFDQTtBQTlCbUQsS0FBckMsQ0FBaEI7QUFpQ0E7Ozs7OztBQUlBLFFBQUloRCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQVVvRCxLQUFWLEVBQWlCO0FBQ3JDQSxXQUFLLEdBQUd4WixTQUFTLENBQUM1QyxNQUFWLEdBQW1CLENBQUNvYyxLQUFELENBQW5CLEdBQTZCL1gsTUFBTSxDQUFDc1YsSUFBUCxDQUFZbUMsU0FBWixDQUFyQztBQUNBTSxXQUFLLENBQUN2UyxPQUFOLENBQWMsVUFBVWlQLFVBQVYsRUFBc0J0TixHQUF0QixFQUEyQjtBQUN4QyxZQUFJakgsS0FBSjs7QUFDQSxZQUFJdVgsU0FBUyxDQUFDaEQsVUFBRCxDQUFiLEVBQTJCO0FBQUU7QUFDNUIsY0FBSTtBQUFFO0FBQ0x2VSxpQkFBSyxHQUFHdVgsU0FBUyxDQUFDaEQsVUFBRCxDQUFULENBQXNCeEcsUUFBUSxDQUFDd0csVUFBRCxDQUE5QixDQUFSO0FBQ0EsV0FGRCxDQUVFLE9BQU81WSxDQUFQLEVBQVU7QUFBRTtBQUNicUUsaUJBQUssR0FBRzZOLGVBQWUsQ0FBQzBHLFVBQUQsQ0FBdkI7QUFDQSxnQkFBSXVELE1BQU0sR0FBRzFLLEtBQUssQ0FBQzJCLElBQU4sQ0FBVzJJLE1BQVgsQ0FBa0IvYixDQUFsQixJQUF1QixDQUFDQSxDQUFELENBQXZCLEdBQTZCQSxDQUExQzs7QUFDQSxnQkFBSXlSLEtBQUssQ0FBQzJCLElBQU4sQ0FBV3hULEtBQVgsQ0FBaUJ1YyxNQUFqQixDQUFKLEVBQThCO0FBQzdCQSxvQkFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLFlBQVlBLE1BQU0sQ0FBQyxDQUFELENBQTlCO0FBQ0FBLG9CQUFNLENBQUNDLE9BQVAsQ0FBZSxDQUFmLEVBRjZCLENBRVY7O0FBQ25CMUssaUJBQUcsQ0FBQzFKLEtBQUosQ0FBVSxJQUFWLEVBQWdCbVUsTUFBaEI7QUFDQSxhQUpELE1BSU87QUFDTnpLLGlCQUFHLENBQUMsQ0FBRCxFQUFJLDhEQUE4RGtILFVBQTlELEdBQTJFLElBQS9FLEVBQXFGNVksQ0FBQyxDQUFDcWMsT0FBdkYsQ0FBSDtBQUNBO0FBQ0QsV0FaRCxTQVlVO0FBQ1RqSyxvQkFBUSxDQUFDd0csVUFBRCxDQUFSLEdBQXVCdlUsS0FBdkI7QUFDQTtBQUNEO0FBQ0QsT0FuQkQ7QUFvQkEsS0F0QkQ7QUF3QkE7Ozs7OztBQUlBLFFBQUlnWCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVRCxPQUFWLEVBQW1CRSxNQUFuQixFQUEyQjtBQUM3QyxVQUNDSyxPQUFPLEdBQUcsS0FEWDtBQUFBLFVBRUNXLE1BQU0sR0FBR2xLLFFBQVEsQ0FBQ2dKLE9BQUQsQ0FGbEI7O0FBR0EsVUFBSWhKLFFBQVEsQ0FBQ2dKLE9BQUQsQ0FBUixJQUFxQkUsTUFBekIsRUFBaUM7QUFDaENsSixnQkFBUSxDQUFDZ0osT0FBRCxDQUFSLEdBQW9CRSxNQUFwQjtBQUNBeEMsc0JBQWMsQ0FBQ3NDLE9BQUQsQ0FBZCxDQUZnQyxDQUVQOztBQUN6Qk8sZUFBTyxHQUFHVyxNQUFNLElBQUlsSyxRQUFRLENBQUNnSixPQUFELENBQTVCO0FBQ0E7O0FBQ0QsYUFBT08sT0FBUDtBQUNBLEtBVkQsQ0EvNEJzQyxDQTI1QnRDOzs7QUFDQSxRQUFJOUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFVRCxVQUFWLEVBQXNCO0FBQzFDLFVBQUksQ0FBQzlDLEtBQUssQ0FBQzhDLFVBQUQsQ0FBVixFQUF3QjtBQUN2QjlDLGFBQUssQ0FBQzhDLFVBQUQsQ0FBTCxHQUFvQixVQUFVMkQsTUFBVixFQUFrQjtBQUNyQyxjQUFJLENBQUM3WixTQUFTLENBQUM1QyxNQUFmLEVBQXVCO0FBQUU7QUFDeEIsbUJBQU9zUyxRQUFRLENBQUN3RyxVQUFELENBQWY7QUFDQSxXQUZELE1BRU87QUFDTixnQkFBSUEsVUFBVSxLQUFLLFVBQW5CLEVBQStCO0FBQUU7QUFDaENGLG1DQUFxQixHQUFHdFQsU0FBeEI7QUFDQTs7QUFDRCxnQkFBSWlXLFlBQVksQ0FBQ3pDLFVBQUQsRUFBYTJELE1BQWIsQ0FBaEIsRUFBc0M7QUFBRTtBQUN2Q3pHLG1CQUFLLENBQUM5RyxPQUFOLENBQWMsUUFBZCxFQUF3QjtBQUN2QjZLLG9CQUFJLEVBQUVqQixVQURpQjtBQUV2QjBDLHNCQUFNLEVBQUVsSixRQUFRLENBQUN3RyxVQUFEO0FBRk8sZUFBeEI7O0FBSUEsa0JBQUlULGFBQWEsQ0FBQ3FFLE1BQWQsQ0FBcUIvTCxPQUFyQixDQUE2Qm1JLFVBQTdCLElBQTJDLENBQUMsQ0FBaEQsRUFBbUQ7QUFDbEQ5QyxxQkFBSyxDQUFDOUcsT0FBTixDQUFjLE9BQWQsRUFBdUI7QUFDdEJ1TSx3QkFBTSxFQUFFM0M7QUFEYyxpQkFBdkI7QUFHQTtBQUNEO0FBQ0Q7O0FBQ0QsaUJBQU85QyxLQUFQO0FBQ0EsU0FwQkQ7QUFxQkE7QUFDRCxLQXhCRDtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7O0FBU0EsU0FBS0MsVUFBTCxHQUFrQixZQUFZO0FBQzdCLGFBQU80QyxXQUFQO0FBQ0EsS0FGRDtBQUlBOzs7Ozs7Ozs7OztBQVNBLFNBQUttQyxLQUFMLEdBQWEsWUFBWTtBQUN4QixhQUFPMUMsTUFBUDtBQUNBLEtBRkQ7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsU0FBS3pDLFlBQUwsR0FBb0IsWUFBWTtBQUMvQixhQUFPMkMsYUFBYSxDQUFDQyxLQUFyQjtBQUNBLEtBRkQ7QUFJQTs7Ozs7Ozs7Ozs7QUFTQSxTQUFLa0UsZUFBTCxHQUF1QixZQUFZO0FBQ2xDLFVBQUkxSSxHQUFHLEdBQUczQixRQUFRLENBQUN3RSxNQUFuQixDQURrQyxDQUNQOztBQUMzQixVQUFJK0IsV0FBSixFQUFpQjtBQUNoQjtBQUNBLFlBQUl2RyxRQUFRLENBQUM2SSxjQUFiLEVBQTZCO0FBQzVCO0FBQ0FsSCxhQUFHLElBQUkwRSxXQUFQO0FBQ0EsU0FIRCxNQUdPO0FBQ047QUFDQTFFLGFBQUcsSUFBSTRFLFdBQVcsQ0FBQzVCLElBQVosQ0FBaUIsTUFBakIsSUFBMkJqQixLQUFLLENBQUNvRixXQUFOLEVBQWxDO0FBQ0E7QUFDRDs7QUFDRCxhQUFPbkgsR0FBUDtBQUNBLEtBYkQ7O0FBZ0JBLFFBQ0N5RyxJQURELEVBRUNrQyxXQUZEOztBQUlBNUcsU0FBSyxDQUNIdFAsRUFERixDQUNLLGdCQURMLEVBQ3VCLFVBQVV4RyxDQUFWLEVBQWE7QUFDbEMsVUFBSTJjLGVBQWUsR0FBRzNjLENBQUMsQ0FBQ3ViLE1BQUYsS0FBYSxVQUFuQzs7QUFDQSxVQUFLbkQsTUFBTSxLQUFLRixpQkFBWCxJQUFnQ3lFLGVBQWpDLElBQXNEdkUsTUFBTSxLQUFLSCxrQkFBWCxJQUFpQzdGLFFBQVEsQ0FBQ2pTLFFBQVQsS0FBc0IsQ0FBakgsRUFBcUg7QUFDcEg7QUFDQXNhLHNCQUFjO0FBQ2Q7O0FBQ0QsVUFBSWtDLGVBQUosRUFBcUI7QUFDcEJDLDJCQUFtQjtBQUNuQjtBQUNELEtBVkYsRUFXRXBXLEVBWEYsQ0FXSyxtQkFYTCxFQVcwQixVQUFVeEcsQ0FBVixFQUFhO0FBQ3JDeWEsb0JBQWM7QUFDZCxLQWJGLEVBY0VqVSxFQWRGLENBY0ssY0FkTCxFQWNxQixVQUFVeEcsQ0FBVixFQUFhO0FBQ2hDNGMseUJBQW1CO0FBQ25CLEtBaEJGLEVBaUJFcFcsRUFqQkYsQ0FpQkssa0JBakJMLEVBaUJ5QixVQUFVeEcsQ0FBVixFQUFhO0FBQ3BDOFYsV0FBSyxDQUFDK0csU0FBTixDQUFnQjdjLENBQUMsQ0FBQ21hLEtBQWxCO0FBQ0EsS0FuQkY7QUFvQkE7Ozs7O0FBSUEsUUFBSU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFVcUMsVUFBVixFQUFzQjtBQUMxQyxVQUFJdEMsSUFBSSxJQUFJN0IsV0FBWixFQUF5QjtBQUN4QixZQUNDb0UsYUFBYSxHQUFHcEUsV0FBVyxDQUFDNUIsSUFBWixFQURqQjtBQUFBLFlBRUNpRyxTQUFTLEdBQUdOLFdBQVcsQ0FBQ08sTUFBWixDQUFtQkMsVUFGaEMsQ0FEd0IsQ0FHb0I7OztBQUU1QyxZQUFJLENBQUNKLFVBQUQsSUFBZTFFLE1BQU0sS0FBS0gsa0JBQTlCLEVBQWtEO0FBQUU7QUFDbkQ7QUFDQSxjQUFJeEcsS0FBSyxDQUFDMEwsR0FBTixDQUFVSCxTQUFWLEVBQXFCLFVBQXJCLEtBQW9DLE9BQXhDLEVBQWlEO0FBQ2hEO0FBQ0F2TCxpQkFBSyxDQUFDMEwsR0FBTixDQUFVSCxTQUFWLEVBQXFCO0FBQ3BCLDBCQUFZO0FBRFEsYUFBckIsRUFGZ0QsQ0FLaEQ7OztBQUNBSiwrQkFBbUI7QUFDbkI7O0FBRUQsY0FDQ1EsUUFBUSxHQUFHM0wsS0FBSyxDQUFDc0IsR0FBTixDQUFVNkQsTUFBVixDQUFpQjhGLFdBQVcsQ0FBQ08sTUFBN0IsRUFBcUMsSUFBckMsQ0FEWjtBQUFBLGNBQ3dEO0FBQ3ZESSx3QkFBYyxHQUFHakwsUUFBUSxDQUFDa0MsT0FBVCxJQUFvQmxDLFFBQVEsQ0FBQ2pTLFFBQVQsS0FBc0IsQ0FBMUMsR0FDakI0YyxhQUFhLENBQUMzSSxTQUFkLEdBQTBCa0UsYUFBYSxDQUFDQyxLQUR2QixDQUM2QjtBQUQ3QixZQUdqQitFLElBQUksQ0FBQ0MsS0FBTCxDQUFXbEYsU0FBUyxHQUFHakcsUUFBUSxDQUFDalMsUUFBckIsR0FBZ0MsRUFBM0MsSUFBaUQsRUFMbEQsQ0FYaUQsQ0FnQks7QUFFdEQ7OztBQUNBaWQsa0JBQVEsQ0FBQ0wsYUFBYSxDQUFDdEosUUFBZCxHQUF5QixLQUF6QixHQUFpQyxNQUFsQyxDQUFSLElBQXFENEosY0FBckQsQ0FuQmlELENBcUJqRDs7QUFDQTVMLGVBQUssQ0FBQzBMLEdBQU4sQ0FBVVQsV0FBVyxDQUFDTyxNQUFaLENBQW1CQyxVQUE3QixFQUF5QztBQUN4Q00sZUFBRyxFQUFFSixRQUFRLENBQUNJLEdBRDBCO0FBRXhDQyxnQkFBSSxFQUFFTCxRQUFRLENBQUNLO0FBRnlCLFdBQXpDO0FBSUEsU0ExQkQsTUEwQk87QUFDTjtBQUNBLGNBQ0NDLE1BQU0sR0FBRztBQUNSQyxvQkFBUSxFQUFFakIsV0FBVyxDQUFDa0IsTUFBWixHQUFxQixVQUFyQixHQUFrQyxVQURwQztBQUVSSixlQUFHLEVBQUUsQ0FGRztBQUdSQyxnQkFBSSxFQUFFO0FBSEUsV0FEVjtBQUFBLGNBTUNJLE1BQU0sR0FBR3BNLEtBQUssQ0FBQzBMLEdBQU4sQ0FBVUgsU0FBVixFQUFxQixVQUFyQixLQUFvQ1UsTUFBTSxDQUFDQyxRQU5yRDs7QUFRQSxjQUFJLENBQUNqQixXQUFXLENBQUNvQixhQUFqQixFQUFnQztBQUMvQkosa0JBQU0sQ0FBQ1gsYUFBYSxDQUFDdEosUUFBZCxHQUF5QixLQUF6QixHQUFpQyxNQUFsQyxDQUFOLEdBQWtEckIsUUFBUSxDQUFDalMsUUFBVCxHQUFvQmtZLFNBQXRFO0FBQ0EsV0FGRCxNQUVPLElBQUlqRyxRQUFRLENBQUNqUyxRQUFULEdBQW9CLENBQXhCLEVBQTJCO0FBQUU7QUFDbkMsZ0JBQUlpWSxNQUFNLEtBQUtGLGlCQUFYLElBQWdDK0QsVUFBVSxDQUFDeEssS0FBSyxDQUFDMEwsR0FBTixDQUFVVCxXQUFXLENBQUNPLE1BQXRCLEVBQThCLGFBQTlCLENBQUQsQ0FBVixLQUE2RCxDQUFqRyxFQUFvRztBQUNuR1ksb0JBQU0sR0FBRyxJQUFULENBRG1HLENBQ3BGO0FBQ2YsYUFGRCxNQUVPLElBQUl6RixNQUFNLEtBQUtKLGtCQUFYLElBQWlDaUUsVUFBVSxDQUFDeEssS0FBSyxDQUFDMEwsR0FBTixDQUFVVCxXQUFXLENBQUNPLE1BQXRCLEVBQThCLGdCQUE5QixDQUFELENBQVYsS0FBZ0UsQ0FBckcsRUFBd0c7QUFBRTtBQUNoSFksb0JBQU0sR0FBRyxJQUFULENBRDhHLENBQy9GO0FBQ2Y7QUFDRCxXQWxCSyxDQW1CTjs7O0FBQ0FwTSxlQUFLLENBQUMwTCxHQUFOLENBQVVILFNBQVYsRUFBcUJVLE1BQXJCOztBQUNBLGNBQUlHLE1BQUosRUFBWTtBQUNYO0FBQ0FqQiwrQkFBbUI7QUFDbkI7QUFDRDtBQUNEO0FBQ0QsS0EzREQ7QUE2REE7Ozs7Ozs7QUFLQSxRQUFJQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQVk7QUFDckMsVUFBSXBDLElBQUksSUFBSTdCLFdBQVIsSUFBdUIrRCxXQUFXLENBQUNrQixNQUF2QyxFQUErQztBQUFFO0FBQ2hELFlBQ0NHLEtBQUssR0FBSTNGLE1BQU0sS0FBS0YsaUJBRHJCO0FBQUEsWUFFQzhGLE1BQU0sR0FBSTVGLE1BQU0sS0FBS0osa0JBRnRCO0FBQUEsWUFHQ2lHLE1BQU0sR0FBSTdGLE1BQU0sS0FBS0gsa0JBSHRCO0FBQUEsWUFJQ3hFLFFBQVEsR0FBR2tGLFdBQVcsQ0FBQzVCLElBQVosQ0FBaUIsVUFBakIsQ0FKWjtBQUFBLFlBS0NpRyxTQUFTLEdBQUdOLFdBQVcsQ0FBQ08sTUFBWixDQUFtQkMsVUFMaEM7QUFBQSxZQUs0QztBQUMzQ2dCLHNCQUFjLEdBQUd6TSxLQUFLLENBQUMwTSxvQkFBTixDQUEyQjFNLEtBQUssQ0FBQzBMLEdBQU4sQ0FBVVQsV0FBVyxDQUFDTyxNQUF0QixFQUE4QixTQUE5QixDQUEzQixDQU5sQjtBQUFBLFlBT0NFLEdBQUcsR0FBRyxFQVBQLENBRDhDLENBVTlDO0FBQ0E7OztBQUNBLFlBQUlULFdBQVcsQ0FBQzBCLE9BQVosQ0FBb0J4SyxLQUFwQixJQUE2QjhJLFdBQVcsQ0FBQzBCLE9BQVosQ0FBb0JDLGFBQXJELEVBQW9FO0FBQ25FLGNBQUlKLE1BQUosRUFBWTtBQUNYeE0saUJBQUssQ0FBQzBMLEdBQU4sQ0FBVTNDLElBQVYsRUFBZ0I7QUFDZix1QkFBUy9JLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVWEsS0FBVixDQUFnQjhJLFdBQVcsQ0FBQ08sTUFBNUI7QUFETSxhQUFoQjtBQUdBLFdBSkQsTUFJTztBQUNOeEwsaUJBQUssQ0FBQzBMLEdBQU4sQ0FBVTNDLElBQVYsRUFBZ0I7QUFDZix1QkFBUztBQURNLGFBQWhCO0FBR0E7QUFDRCxTQVZELE1BVU87QUFDTjtBQUNBMkMsYUFBRyxDQUFDLFdBQUQsQ0FBSCxHQUFtQjFMLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVWEsS0FBVixDQUFnQkgsUUFBUSxHQUFHK0csSUFBSCxHQUFVd0MsU0FBbEMsRUFBNkMsSUFBN0MsRUFBbUQsSUFBbkQsQ0FBbkI7QUFDQUcsYUFBRyxDQUFDdkosS0FBSixHQUFZcUssTUFBTSxHQUFHZCxHQUFHLENBQUMsV0FBRCxDQUFOLEdBQXNCLE1BQXhDO0FBQ0E7O0FBQ0QsWUFBSVQsV0FBVyxDQUFDMEIsT0FBWixDQUFvQjNiLE1BQXhCLEVBQWdDO0FBQy9CLGNBQUl3YixNQUFKLEVBQVk7QUFDWDtBQUNBeE0saUJBQUssQ0FBQzBMLEdBQU4sQ0FBVTNDLElBQVYsRUFBZ0I7QUFDZix3QkFBVS9JLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVXRRLE1BQVYsQ0FBaUJpYSxXQUFXLENBQUNPLE1BQTdCLEtBQXdDUCxXQUFXLENBQUNvQixhQUFaLEdBQTRCMUwsUUFBUSxDQUFDalMsUUFBckMsR0FBZ0QsQ0FBeEY7QUFESyxhQUFoQjtBQUdBLFdBTEQsTUFLTztBQUNOc1IsaUJBQUssQ0FBQzBMLEdBQU4sQ0FBVTNDLElBQVYsRUFBZ0I7QUFDZix3QkFBVTtBQURLLGFBQWhCO0FBR0E7QUFDRCxTQVhELE1BV087QUFDTjtBQUNBMkMsYUFBRyxDQUFDLFlBQUQsQ0FBSCxHQUFvQjFMLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVXRRLE1BQVYsQ0FBaUJnUixRQUFRLEdBQUd1SixTQUFILEdBQWV4QyxJQUF4QyxFQUE4QyxJQUE5QyxFQUFvRCxDQUFDMEQsY0FBckQsQ0FBcEIsQ0FGTSxDQUVvRjs7QUFDMUZmLGFBQUcsQ0FBQzFhLE1BQUosR0FBYXdiLE1BQU0sR0FBR2QsR0FBRyxDQUFDLFlBQUQsQ0FBTixHQUF1QixNQUExQztBQUNBLFNBMUM2QyxDQTRDOUM7OztBQUNBLFlBQUlULFdBQVcsQ0FBQ29CLGFBQWhCLEVBQStCO0FBQzlCWCxhQUFHLENBQUMsYUFBYTFKLFFBQVEsR0FBRyxLQUFILEdBQVcsTUFBaEMsQ0FBRCxDQUFILEdBQStDckIsUUFBUSxDQUFDalMsUUFBVCxHQUFvQmtZLFNBQW5FO0FBQ0E4RSxhQUFHLENBQUMsYUFBYTFKLFFBQVEsR0FBRyxRQUFILEdBQWMsT0FBbkMsQ0FBRCxDQUFILEdBQW1EckIsUUFBUSxDQUFDalMsUUFBVCxJQUFxQixJQUFJa1ksU0FBekIsQ0FBbkQ7QUFDQTs7QUFDRDVHLGFBQUssQ0FBQzBMLEdBQU4sQ0FBVVQsV0FBVyxDQUFDTyxNQUF0QixFQUE4QkUsR0FBOUI7QUFDQTtBQUNELEtBcEREO0FBc0RBOzs7Ozs7OztBQU1BLFFBQUltQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQVk7QUFDdEMsVUFBSTNGLFdBQVcsSUFBSTZCLElBQWYsSUFBdUJwQyxNQUFNLEtBQUtILGtCQUFsQyxJQUF3RCxDQUFDVSxXQUFXLENBQUM1QixJQUFaLENBQWlCLFlBQWpCLENBQTdELEVBQTZGO0FBQzVGMEQsc0JBQWM7QUFDZDtBQUNELEtBSkQ7QUFNQTs7Ozs7Ozs7QUFNQSxRQUFJOEQsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFZO0FBQ3pDLFVBQUk1RixXQUFXLElBQUk2QixJQUFmLElBQXVCO0FBQzFCcEMsWUFBTSxLQUFLSCxrQkFEUixNQUM4QjtBQUMvQjtBQUNBLE9BQUN5RSxXQUFXLENBQUMwQixPQUFaLENBQW9CeEssS0FBcEIsSUFBNkI4SSxXQUFXLENBQUMwQixPQUFaLENBQW9CQyxhQUFsRCxLQUFvRTVNLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVWEsS0FBVixDQUFnQjFQLE1BQWhCLEtBQTJCdU4sS0FBSyxDQUFDc0IsR0FBTixDQUFVYSxLQUFWLENBQWdCOEksV0FBVyxDQUFDTyxNQUFaLENBQW1CeEcsVUFBbkMsQ0FBaEcsSUFDQ2lHLFdBQVcsQ0FBQzBCLE9BQVosQ0FBb0IzYixNQUFwQixJQUE4QmdQLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVXRRLE1BQVYsQ0FBaUJ5QixNQUFqQixLQUE0QnVOLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVXRRLE1BQVYsQ0FBaUJpYSxXQUFXLENBQUNPLE1BQVosQ0FBbUJ4RyxVQUFwQyxDQUp6RCxDQUFKLEVBTUU7QUFDRG1HLDJCQUFtQjtBQUNuQjtBQUNELEtBVkQ7QUFZQTs7Ozs7OztBQUtBLFFBQUk0QixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQVV4ZSxDQUFWLEVBQWE7QUFDdEMsVUFBSTJZLFdBQVcsSUFBSTZCLElBQWYsSUFBdUJwQyxNQUFNLEtBQUtILGtCQUFsQyxJQUF3RCxDQUFDVSxXQUFXLENBQUM1QixJQUFaLENBQWlCLFlBQWpCLENBQTdELEVBQTZGO0FBQUU7QUFDOUYvVyxTQUFDLENBQUN1QyxjQUFGOztBQUNBb1csbUJBQVcsQ0FBQzdFLGFBQVosQ0FBMEI2RSxXQUFXLENBQUM1QixJQUFaLENBQWlCLFdBQWpCLEtBQWlDLENBQUMvVyxDQUFDLENBQUN5ZSxVQUFGLElBQWdCemUsQ0FBQyxDQUFDMlksV0FBVyxDQUFDNUIsSUFBWixDQUFpQixVQUFqQixJQUErQixhQUEvQixHQUErQyxhQUFoRCxDQUFsQixJQUFvRixDQUFwRixJQUF5RixDQUFDL1csQ0FBQyxDQUFDMGUsTUFBSCxHQUFZLEVBQXRJLENBQTFCO0FBQ0E7QUFDRCxLQUxEO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxTQUFLQyxNQUFMLEdBQWMsVUFBVUMsT0FBVixFQUFtQnZWLFFBQW5CLEVBQTZCO0FBQzFDLFVBQ0N3VixlQUFlLEdBQUc7QUFDakJmLHFCQUFhLEVBQUUsSUFERTtBQUVqQmdCLG1CQUFXLEVBQUU7QUFGSSxPQURuQjtBQUtBLFVBQUlDLHdCQUF3QixHQUFHMVYsUUFBUSxJQUFJQSxRQUFRLENBQUNILGNBQVQsQ0FBd0IsZUFBeEIsQ0FBM0M7QUFDQUcsY0FBUSxHQUFHb0ksS0FBSyxDQUFDOUksTUFBTixDQUFhLEVBQWIsRUFBaUJrVyxlQUFqQixFQUFrQ3hWLFFBQWxDLENBQVgsQ0FQMEMsQ0FTMUM7O0FBQ0F1VixhQUFPLEdBQUduTixLQUFLLENBQUNzQixHQUFOLENBQVUvUixRQUFWLENBQW1CNGQsT0FBbkIsRUFBNEIsQ0FBNUIsQ0FBVjs7QUFDQSxVQUFJLENBQUNBLE9BQUwsRUFBYztBQUNibE4sV0FBRyxDQUFDLENBQUQsRUFBSSxnRUFBSixDQUFIO0FBQ0EsZUFBT29FLEtBQVAsQ0FGYSxDQUVDO0FBQ2QsT0FIRCxNQUdPLElBQUlyRSxLQUFLLENBQUMwTCxHQUFOLENBQVV5QixPQUFWLEVBQW1CLFVBQW5CLE1BQW1DLE9BQXZDLEVBQWdEO0FBQ3REbE4sV0FBRyxDQUFDLENBQUQsRUFBSSwrRkFBSixDQUFIO0FBQ0EsZUFBT29FLEtBQVAsQ0FGc0QsQ0FFeEM7QUFDZDs7QUFFRCxVQUFJMEUsSUFBSixFQUFVO0FBQUU7QUFDWCxZQUFJQSxJQUFJLEtBQUtvRSxPQUFiLEVBQXNCO0FBQ3JCO0FBQ0EsaUJBQU85SSxLQUFQLENBRnFCLENBRVA7QUFDZCxTQUhELE1BR087QUFDTjtBQUNBQSxlQUFLLENBQUMrRyxTQUFOO0FBQ0E7QUFFRDs7QUFDRHJDLFVBQUksR0FBR29FLE9BQVA7QUFFQSxVQUNDSSxhQUFhLEdBQUd4RSxJQUFJLENBQUMvRCxVQUFMLENBQWdCMVUsS0FBaEIsQ0FBc0JrZCxPQUR2QztBQUFBLFVBRUNDLFlBQVksR0FBRyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLEVBQW1DLFFBQW5DLEVBQTZDLFlBQTdDLEVBQTJELGFBQTNELEVBQTBFLFdBQTFFLEVBQXVGLGNBQXZGLENBRmhCO0FBSUExRSxVQUFJLENBQUMvRCxVQUFMLENBQWdCMVUsS0FBaEIsQ0FBc0JrZCxPQUF0QixHQUFnQyxNQUFoQyxDQW5DMEMsQ0FtQ0Y7O0FBQ3hDLFVBQ0NyQixNQUFNLEdBQUduTSxLQUFLLENBQUMwTCxHQUFOLENBQVUzQyxJQUFWLEVBQWdCLFVBQWhCLEtBQStCLFVBRHpDO0FBQUEsVUFFQzJFLE1BQU0sR0FBRzFOLEtBQUssQ0FBQzBMLEdBQU4sQ0FBVTNDLElBQVYsRUFBZ0IwRSxZQUFZLENBQUNsZCxNQUFiLENBQW9CLENBQUMsU0FBRCxDQUFwQixDQUFoQixDQUZWO0FBQUEsVUFHQ29kLE9BQU8sR0FBRzNOLEtBQUssQ0FBQzBMLEdBQU4sQ0FBVTNDLElBQVYsRUFBZ0IsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUFoQixDQUhYOztBQUlBQSxVQUFJLENBQUMvRCxVQUFMLENBQWdCMVUsS0FBaEIsQ0FBc0JrZCxPQUF0QixHQUFnQ0QsYUFBaEMsQ0F4QzBDLENBd0NLOztBQUUvQyxVQUFJLENBQUNwQixNQUFELElBQVd2VSxRQUFRLENBQUN5VSxhQUF4QixFQUF1QztBQUN0Q3BNLFdBQUcsQ0FBQyxDQUFELEVBQUkseUZBQUosQ0FBSDtBQUNBckksZ0JBQVEsQ0FBQ3lVLGFBQVQsR0FBeUIsS0FBekI7QUFDQTs7QUFDRDVaLFlBQU0sQ0FBQ0osVUFBUCxDQUFrQixZQUFZO0FBQUU7QUFDL0IsWUFBSTBXLElBQUksSUFBSXBJLFFBQVEsQ0FBQ2pTLFFBQVQsS0FBc0IsQ0FBOUIsSUFBbUM0ZSx3QkFBbkMsSUFBK0QxVixRQUFRLENBQUN5VSxhQUE1RSxFQUEyRjtBQUMxRnBNLGFBQUcsQ0FBQyxDQUFELEVBQUksMEJBQUosRUFBZ0MsSUFBaEMsRUFBc0MsMENBQXRDLENBQUg7QUFDQTtBQUNELE9BSkQsRUFJRyxDQUpILEVBOUMwQyxDQW9EMUM7O0FBQ0EsVUFDQ3VMLE1BQU0sR0FBR3pDLElBQUksQ0FBQy9ELFVBQUwsQ0FBZ0I0SSxZQUFoQixDQUE2QnZlLFFBQVEsQ0FBQ3dlLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0IsRUFBNEQ5RSxJQUE1RCxDQURWO0FBQUEsVUFFQytFLFNBQVMsR0FBRzlOLEtBQUssQ0FBQzlJLE1BQU4sQ0FBYXdXLE1BQWIsRUFBcUI7QUFDaEN4QixnQkFBUSxFQUFFQyxNQUFNLEdBQUcsVUFBSCxHQUFnQixVQURBO0FBRWhDNEIsaUJBQVMsRUFBRSxhQUZxQjtBQUdoQ0Msb0JBQVksRUFBRSxhQUhrQjtBQUloQ0MsdUJBQWUsRUFBRTtBQUplLE9BQXJCLENBRmI7O0FBU0EsVUFBSSxDQUFDOUIsTUFBTCxFQUFhO0FBQUU7QUFDZG5NLGFBQUssQ0FBQzlJLE1BQU4sQ0FBYTRXLFNBQWIsRUFBd0I5TixLQUFLLENBQUMwTCxHQUFOLENBQVUzQyxJQUFWLEVBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FBaEIsQ0FBeEI7QUFDQTs7QUFFRC9JLFdBQUssQ0FBQzBMLEdBQU4sQ0FBVUYsTUFBVixFQUFrQnNDLFNBQWxCOztBQUNBdEMsWUFBTSxDQUFDOWIsWUFBUCxDQUFvQnlRLG9CQUFwQixFQUEwQyxFQUExQzs7QUFDQUgsV0FBSyxDQUFDa08sUUFBTixDQUFlMUMsTUFBZixFQUF1QjVULFFBQVEsQ0FBQ3lWLFdBQWhDLEVBcEUwQyxDQXNFMUM7OztBQUNBcEMsaUJBQVcsR0FBRztBQUNiTyxjQUFNLEVBQUVBLE1BREs7QUFFYm1CLGVBQU8sRUFBRTtBQUFFO0FBQ1Z4SyxlQUFLLEVBQUV3TCxPQUFPLENBQUN4TCxLQUFSLENBQWNoUSxLQUFkLENBQW9CLENBQUMsQ0FBckIsTUFBNEIsR0FEM0I7QUFFUm5CLGdCQUFNLEVBQUUyYyxPQUFPLENBQUMzYyxNQUFSLENBQWVtQixLQUFmLENBQXFCLENBQUMsQ0FBdEIsTUFBNkIsR0FGN0I7QUFHUnlhLHVCQUFhLEVBQUVlLE9BQU8sQ0FBQ3hMLEtBQVIsS0FBa0IsTUFBbEIsSUFBNEJnSyxNQUE1QixJQUFzQ25NLEtBQUssQ0FBQzBNLG9CQUFOLENBQTJCZ0IsTUFBTSxDQUFDRixPQUFsQztBQUg3QyxTQUZJO0FBT2JuQixxQkFBYSxFQUFFelUsUUFBUSxDQUFDeVUsYUFQWDtBQVFiRixjQUFNLEVBQUVBLE1BUkssQ0FRRzs7QUFSSCxPQUFkOztBQVdBLFVBQUksQ0FBQ3BELElBQUksQ0FBQ29GLFlBQVYsRUFBd0I7QUFDdkJwRixZQUFJLENBQUNvRixZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsWUFDQ0MsWUFBWSxHQUFHckYsSUFBSSxDQUFDelksS0FEckI7QUFBQSxZQUVDK2QsVUFBVSxHQUFHWixZQUFZLENBQUNsZCxNQUFiLENBQW9CLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsVUFBcEIsRUFBZ0MsV0FBaEMsRUFBNkMsY0FBN0MsRUFBNkQsaUJBQTdELENBQXBCLENBRmQ7QUFHQThkLGtCQUFVLENBQUNuVyxPQUFYLENBQW1CLFVBQVVtUyxHQUFWLEVBQWU7QUFDakN0QixjQUFJLENBQUNvRixZQUFMLENBQWtCOUQsR0FBbEIsSUFBeUIrRCxZQUFZLENBQUMvRCxHQUFELENBQVosSUFBcUIsRUFBOUM7QUFDQSxTQUZEO0FBR0EsT0ExRnlDLENBNEYxQzs7O0FBQ0EsVUFBSVksV0FBVyxDQUFDMEIsT0FBWixDQUFvQnhLLEtBQXhCLEVBQStCO0FBQzlCbkMsYUFBSyxDQUFDMEwsR0FBTixDQUFVRixNQUFWLEVBQWtCO0FBQ2pCckosZUFBSyxFQUFFd0wsT0FBTyxDQUFDeEw7QUFERSxTQUFsQjtBQUdBOztBQUNELFVBQUk4SSxXQUFXLENBQUMwQixPQUFaLENBQW9CM2IsTUFBeEIsRUFBZ0M7QUFDL0JnUCxhQUFLLENBQUMwTCxHQUFOLENBQVVGLE1BQVYsRUFBa0I7QUFDakJ4YSxnQkFBTSxFQUFFMmMsT0FBTyxDQUFDM2M7QUFEQyxTQUFsQjtBQUdBLE9BdEd5QyxDQXdHMUM7OztBQUNBd2EsWUFBTSxDQUFDOEMsV0FBUCxDQUFtQnZGLElBQW5CLEVBekcwQyxDQTBHMUM7O0FBQ0EvSSxXQUFLLENBQUMwTCxHQUFOLENBQVUzQyxJQUFWLEVBQWdCO0FBQ2ZtRCxnQkFBUSxFQUFFQyxNQUFNLEdBQUcsVUFBSCxHQUFnQixVQURqQjtBQUVmb0MsY0FBTSxFQUFFLE1BRk87QUFHZnhDLFdBQUcsRUFBRSxNQUhVO0FBSWZDLFlBQUksRUFBRSxNQUpTO0FBS2Z3QyxjQUFNLEVBQUUsTUFMTztBQU1mQyxhQUFLLEVBQUU7QUFOUSxPQUFoQjs7QUFTQSxVQUFJeEQsV0FBVyxDQUFDMEIsT0FBWixDQUFvQnhLLEtBQXBCLElBQTZCOEksV0FBVyxDQUFDMEIsT0FBWixDQUFvQkMsYUFBckQsRUFBb0U7QUFDbkU1TSxhQUFLLENBQUMwTCxHQUFOLENBQVUzQyxJQUFWLEVBQWdCO0FBQ2ZnRixtQkFBUyxFQUFFLFlBREk7QUFFZkMsc0JBQVksRUFBRSxZQUZDO0FBR2ZDLHlCQUFlLEVBQUU7QUFIRixTQUFoQjtBQUtBLE9BMUh5QyxDQTRIMUM7OztBQUNBeGIsWUFBTSxDQUFDWixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2diLG9CQUFsQztBQUNBcGEsWUFBTSxDQUFDWixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2diLG9CQUFsQztBQUNBcGEsWUFBTSxDQUFDWixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2liLHVCQUFsQyxFQS9IMEMsQ0FnSTFDOztBQUNBL0QsVUFBSSxDQUFDbFgsZ0JBQUwsQ0FBc0IsWUFBdEIsRUFBb0NrYixtQkFBcEM7O0FBQ0FoRSxVQUFJLENBQUNsWCxnQkFBTCxDQUFzQixnQkFBdEIsRUFBd0NrYixtQkFBeEM7O0FBRUE5TSxTQUFHLENBQUMsQ0FBRCxFQUFJLFdBQUosQ0FBSCxDQXBJMEMsQ0FzSTFDOztBQUNBK0ksb0JBQWM7QUFFZCxhQUFPM0UsS0FBUDtBQUNBLEtBMUlEO0FBNElBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFLK0csU0FBTCxHQUFpQixVQUFVMUMsS0FBVixFQUFpQjtBQUNqQyxVQUFJSyxJQUFKLEVBQVU7QUFDVCxZQUFJcEMsTUFBTSxLQUFLSCxrQkFBZixFQUFtQztBQUNsQ3dDLHdCQUFjLENBQUMsSUFBRCxDQUFkLENBRGtDLENBQ1o7QUFDdEI7O0FBQ0QsWUFBSU4sS0FBSyxJQUFJLENBQUN4QixXQUFkLEVBQTJCO0FBQUU7QUFDNUIsY0FBSXFFLFNBQVMsR0FBR04sV0FBVyxDQUFDTyxNQUFaLENBQW1CQyxVQUFuQyxDQUQwQixDQUNxQjs7QUFDL0MsY0FBSUYsU0FBUyxDQUFDak4sWUFBVixDQUF1QjZCLG9CQUF2QixDQUFKLEVBQWtEO0FBQUU7QUFDbkQsZ0JBQ0M3UCxLQUFLLEdBQUcyYSxXQUFXLENBQUNPLE1BQVosQ0FBbUJsYixLQUQ1QjtBQUFBLGdCQUVDa1YsTUFBTSxHQUFHLENBQUMsUUFBRCxFQUFXLFlBQVgsRUFBeUIsYUFBekIsRUFBd0MsV0FBeEMsRUFBcUQsY0FBckQsQ0FGVjtBQUFBLGdCQUdDa0osT0FBTyxHQUFHLEVBSFg7QUFJQWxKLGtCQUFNLENBQUN0TixPQUFQLENBQWUsVUFBVW1TLEdBQVYsRUFBZTtBQUM3QnFFLHFCQUFPLENBQUNyRSxHQUFELENBQVAsR0FBZS9aLEtBQUssQ0FBQytaLEdBQUQsQ0FBTCxJQUFjLEVBQTdCO0FBQ0EsYUFGRDs7QUFHQXJLLGlCQUFLLENBQUMwTCxHQUFOLENBQVVILFNBQVYsRUFBcUJtRCxPQUFyQjtBQUNBOztBQUNEekQscUJBQVcsQ0FBQ08sTUFBWixDQUFtQnhHLFVBQW5CLENBQThCNEksWUFBOUIsQ0FBMkNyQyxTQUEzQyxFQUFzRE4sV0FBVyxDQUFDTyxNQUFsRTs7QUFDQVAscUJBQVcsQ0FBQ08sTUFBWixDQUFtQnhHLFVBQW5CLENBQThCMkosV0FBOUIsQ0FBMEMxRCxXQUFXLENBQUNPLE1BQXREOztBQUNBLGNBQUksQ0FBQ3pDLElBQUksQ0FBQy9ELFVBQUwsQ0FBZ0IxRyxZQUFoQixDQUE2QjZCLG9CQUE3QixDQUFMLEVBQXlEO0FBQUU7QUFDMUQ7QUFDQUgsaUJBQUssQ0FBQzBMLEdBQU4sQ0FBVTNDLElBQVYsRUFBZ0JBLElBQUksQ0FBQ29GLFlBQXJCOztBQUNBLG1CQUFPcEYsSUFBSSxDQUFDb0YsWUFBWjtBQUNBO0FBQ0Q7O0FBQ0QxYixjQUFNLENBQUNWLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDOGEsb0JBQXJDO0FBQ0FwYSxjQUFNLENBQUNWLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDOGEsb0JBQXJDO0FBQ0FwYSxjQUFNLENBQUNWLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDK2EsdUJBQXJDOztBQUNBL0QsWUFBSSxDQUFDaFgsbUJBQUwsQ0FBeUIsWUFBekIsRUFBdUNnYixtQkFBdkM7O0FBQ0FoRSxZQUFJLENBQUNoWCxtQkFBTCxDQUF5QixnQkFBekIsRUFBMkNnYixtQkFBM0M7O0FBQ0FoRSxZQUFJLEdBQUdwVixTQUFQO0FBQ0FzTSxXQUFHLENBQUMsQ0FBRCxFQUFJLDBCQUEwQnlJLEtBQUssR0FBRyxNQUFILEdBQVksT0FBM0MsSUFBc0QsR0FBMUQsQ0FBSDtBQUNBOztBQUNELGFBQU9yRSxLQUFQO0FBQ0EsS0FsQ0Q7O0FBcUNBLFFBQ0N1SyxXQUREO0FBQUEsUUFFQ0MsY0FBYyxHQUFHLEVBRmxCOztBQUlBeEssU0FBSyxDQUNIdFAsRUFERixDQUNLLGtCQURMLEVBQ3lCLFVBQVV4RyxDQUFWLEVBQWE7QUFDcEM4VixXQUFLLENBQUN5SyxpQkFBTixDQUF3QnZnQixDQUFDLENBQUNtYSxLQUExQjtBQUNBLEtBSEY7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLFNBQUtxRyxjQUFMLEdBQXNCLFVBQVU1QixPQUFWLEVBQW1CNkIsT0FBbkIsRUFBNEI7QUFDakQsVUFBSUMsS0FBSyxHQUFHalAsS0FBSyxDQUFDc0IsR0FBTixDQUFVL1IsUUFBVixDQUFtQjRkLE9BQW5CLENBQVo7O0FBQ0EsVUFBSThCLEtBQUssQ0FBQzVnQixNQUFOLEtBQWlCLENBQWpCLElBQXNCLENBQUMyUixLQUFLLENBQUMyQixJQUFOLENBQVcySSxNQUFYLENBQWtCMEUsT0FBbEIsQ0FBM0IsRUFBdUQ7QUFDdEQvTyxXQUFHLENBQUMsQ0FBRCxFQUFJLHVEQUF1RGdQLEtBQUssQ0FBQzVnQixNQUFOLEtBQWlCLENBQWpCLEdBQXFCLFNBQXJCLEdBQWlDLFNBQXhGLElBQXFHLFlBQXpHLENBQUg7QUFDQSxlQUFPZ1csS0FBUDtBQUNBOztBQUNELFVBQUl3SyxjQUFjLENBQUN4Z0IsTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUM5QjtBQUNBZ1csYUFBSyxDQUFDeUssaUJBQU47QUFDQTs7QUFDREYsaUJBQVcsR0FBR0ksT0FBZDtBQUNBSCxvQkFBYyxHQUFHSSxLQUFqQjtBQUNBNUssV0FBSyxDQUFDdFAsRUFBTixDQUFTLDJDQUFULEVBQXNELFVBQVV4RyxDQUFWLEVBQWE7QUFDbEUsWUFBSTRDLE1BQU0sR0FBRzVDLENBQUMsQ0FBQ29ULElBQUYsS0FBVyxPQUFYLEdBQXFCM0IsS0FBSyxDQUFDa08sUUFBM0IsR0FBc0NsTyxLQUFLLENBQUNrUCxXQUF6RDs7QUFDQUwsc0JBQWMsQ0FBQzNXLE9BQWYsQ0FBdUIsVUFBVTZNLElBQVYsRUFBZ0JsTCxHQUFoQixFQUFxQjtBQUMzQzFJLGdCQUFNLENBQUM0VCxJQUFELEVBQU82SixXQUFQLENBQU47QUFDQSxTQUZEO0FBR0EsT0FMRDtBQU1BLGFBQU92SyxLQUFQO0FBQ0EsS0FuQkQ7QUFxQkE7Ozs7Ozs7Ozs7Ozs7OztBQWFBLFNBQUt5SyxpQkFBTCxHQUF5QixVQUFVcEcsS0FBVixFQUFpQjtBQUN6QyxVQUFJQSxLQUFKLEVBQVc7QUFDVm1HLHNCQUFjLENBQUMzVyxPQUFmLENBQXVCLFVBQVU2TSxJQUFWLEVBQWdCbEwsR0FBaEIsRUFBcUI7QUFDM0NtRyxlQUFLLENBQUNrUCxXQUFOLENBQWtCbkssSUFBbEIsRUFBd0I2SixXQUF4QjtBQUNBLFNBRkQ7QUFHQTs7QUFDRHZLLFdBQUssQ0FBQ25PLEdBQU4sQ0FBVSx5Q0FBVjtBQUNBMFksaUJBQVcsR0FBR2piLFNBQWQ7QUFDQWtiLG9CQUFjLEdBQUcsRUFBakI7QUFDQSxhQUFPeEssS0FBUDtBQUNBLEtBVkQsQ0E1a0RzQyxDQXdsRHRDOzs7QUFDQWhELGFBQVM7QUFDVCxXQUFPZ0QsS0FBUDtBQUNBLEdBM2xERCxDQXZ2Qm1CLENBbzFFbkI7OztBQUNBLE1BQUlxQyxhQUFhLEdBQUc7QUFDbkI5UCxZQUFRLEVBQUU7QUFDVGxJLGNBQVEsRUFBRSxDQUREO0FBRVR5VyxZQUFNLEVBQUUsQ0FGQztBQUdUcUUsb0JBQWMsRUFBRTdWLFNBSFA7QUFJVDhWLGlCQUFXLEVBQUUsR0FKSjtBQUtUNUcsYUFBTyxFQUFFLElBTEE7QUFNVEksY0FBUSxFQUFFO0FBTkQsS0FEUztBQVNuQm1ILFlBQVEsRUFBRTtBQUNUakYsWUFBTSxFQUFFLGdCQUFVa0YsR0FBVixFQUFlO0FBQ3RCQSxXQUFHLEdBQUdHLFVBQVUsQ0FBQ0gsR0FBRCxDQUFoQjs7QUFDQSxZQUFJLENBQUNySyxLQUFLLENBQUMyQixJQUFOLENBQVdDLE1BQVgsQ0FBa0J5SSxHQUFsQixDQUFMLEVBQTZCO0FBQzVCLGdCQUFNLENBQUMsc0NBQUQsRUFBeUNBLEdBQXpDLENBQU47QUFDQTs7QUFDRCxlQUFPQSxHQUFQO0FBQ0EsT0FQUTtBQVFUYixvQkFBYyxFQUFFLHdCQUFVYSxHQUFWLEVBQWU7QUFDOUJBLFdBQUcsR0FBR0EsR0FBRyxJQUFJMVcsU0FBYjs7QUFDQSxZQUFJMFcsR0FBSixFQUFTO0FBQ1IsY0FBSXRGLElBQUksR0FBRy9FLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVS9SLFFBQVYsQ0FBbUI4YSxHQUFuQixFQUF3QixDQUF4QixDQUFYOztBQUNBLGNBQUl0RixJQUFJLElBQUlBLElBQUksQ0FBQ0MsVUFBakIsRUFBNkI7QUFDNUJxRixlQUFHLEdBQUd0RixJQUFOO0FBQ0EsV0FGRCxNQUVPO0FBQ04sa0JBQU0sQ0FBQyw2REFBRCxFQUFnRXNGLEdBQWhFLENBQU47QUFDQTtBQUNEOztBQUNELGVBQU9BLEdBQVA7QUFDQSxPQW5CUTtBQW9CVFosaUJBQVcsRUFBRSxxQkFBVVksR0FBVixFQUFlO0FBQzNCLFlBQUk4RSxTQUFTLEdBQUc7QUFDZixzQkFBWSxHQURHO0FBRWYscUJBQVcsQ0FGSTtBQUdmLHFCQUFXO0FBSEksU0FBaEI7O0FBS0EsWUFBSW5QLEtBQUssQ0FBQzJCLElBQU4sQ0FBV0MsTUFBWCxDQUFrQnlJLEdBQWxCLENBQUosRUFBNEI7QUFDM0JBLGFBQUcsR0FBR3dCLElBQUksQ0FBQ3VELEdBQUwsQ0FBUyxDQUFULEVBQVl2RCxJQUFJLENBQUN3RCxHQUFMLENBQVM3RSxVQUFVLENBQUNILEdBQUQsQ0FBbkIsRUFBMEIsQ0FBMUIsQ0FBWixDQUFOLENBRDJCLENBQ3NCO0FBQ2pELFNBRkQsTUFFTyxJQUFJQSxHQUFHLElBQUk4RSxTQUFYLEVBQXNCO0FBQzVCOUUsYUFBRyxHQUFHOEUsU0FBUyxDQUFDOUUsR0FBRCxDQUFmO0FBQ0EsU0FGTSxNQUVBO0FBQ04sZ0JBQU0sQ0FBQyw0Q0FBRCxFQUErQ0EsR0FBL0MsQ0FBTjtBQUNBOztBQUNELGVBQU9BLEdBQVA7QUFDQSxPQWxDUTtBQW1DVHhILGFBQU8sRUFBRSxpQkFBVXdILEdBQVYsRUFBZTtBQUN2QixlQUFPLENBQUMsQ0FBQ0EsR0FBVCxDQUR1QixDQUNUO0FBQ2QsT0FyQ1E7QUFzQ1RwSCxjQUFRLEVBQUUsa0JBQVVvSCxHQUFWLEVBQWU7QUFDeEJBLFdBQUcsR0FBR2paLFFBQVEsQ0FBQ2laLEdBQUQsQ0FBZDs7QUFDQSxZQUFJLENBQUNySyxLQUFLLENBQUMyQixJQUFOLENBQVdDLE1BQVgsQ0FBa0J5SSxHQUFsQixDQUFELElBQTJCQSxHQUFHLEdBQUcsQ0FBakMsSUFBc0NBLEdBQUcsR0FBRyxDQUFoRCxFQUFtRDtBQUNsRCxnQkFBTSxDQUFDLHdDQUFELEVBQTJDQSxHQUEzQyxDQUFOO0FBQ0E7O0FBQ0QsZUFBT0EsR0FBUDtBQUNBO0FBNUNRLEtBVFM7QUFzRGhCO0FBQ0hVLFVBQU0sRUFBRSxDQUFDLFVBQUQsRUFBYSxRQUFiLEVBQXVCLGFBQXZCLENBdkRXLENBdUQ0Qjs7QUF2RDVCLEdBQXBCO0FBeURBOzs7OztBQUlBaEwsYUFBVyxDQUFDc0UsS0FBWixDQUFrQjZCLFNBQWxCLEdBQThCLFVBQVVyTCxJQUFWLEVBQWdCc0wsWUFBaEIsRUFBOEJtSixrQkFBOUIsRUFBa0R2RSxNQUFsRCxFQUEwRDtBQUN2RixRQUFJLEVBQUVsUSxJQUFJLElBQUk2TCxhQUFhLENBQUM5UCxRQUF4QixDQUFKLEVBQXVDO0FBQ3RDOFAsbUJBQWEsQ0FBQzlQLFFBQWQsQ0FBdUJpRSxJQUF2QixJQUErQnNMLFlBQS9CO0FBQ0FPLG1CQUFhLENBQUMwRCxRQUFkLENBQXVCdlAsSUFBdkIsSUFBK0J5VSxrQkFBL0I7O0FBQ0EsVUFBSXZFLE1BQUosRUFBWTtBQUNYckUscUJBQWEsQ0FBQ3FFLE1BQWQsQ0FBcUJqVyxJQUFyQixDQUEwQitGLElBQTFCO0FBQ0E7QUFDRCxLQU5ELE1BTU87QUFDTmtGLGlCQUFXLENBQUNDLEtBQVosQ0FBa0JDLEdBQWxCLENBQXNCLENBQXRCLEVBQXlCLDREQUE0RHBGLElBQTVELEdBQW1FLCtCQUE1RjtBQUNBO0FBQ0QsR0FWRCxDQWw1RW1CLENBNjVFbkI7QUFDQTs7O0FBQ0FrRixhQUFXLENBQUNzRSxLQUFaLENBQWtCbk4sTUFBbEIsR0FBMkIsVUFBVWtQLFNBQVYsRUFBcUI7QUFDL0MsUUFBSUMsUUFBUSxHQUFHLElBQWY7O0FBQ0F0RyxlQUFXLENBQUNzRSxLQUFaLEdBQW9CLFlBQVk7QUFDL0JnQyxjQUFRLENBQUM5UCxLQUFULENBQWUsSUFBZixFQUFxQnRGLFNBQXJCO0FBQ0EsV0FBS3FWLE1BQUwsR0FBY3RHLEtBQUssQ0FBQzlJLE1BQU4sQ0FBYSxFQUFiLEVBQWlCLElBQWpCLENBQWQsQ0FGK0IsQ0FFTzs7QUFDdEMsYUFBT2tQLFNBQVMsQ0FBQzdQLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0J0RixTQUF0QixLQUFvQyxJQUEzQztBQUNBLEtBSkQ7O0FBS0ErTyxTQUFLLENBQUM5SSxNQUFOLENBQWE2SSxXQUFXLENBQUNzRSxLQUF6QixFQUFnQ2dDLFFBQWhDLEVBUCtDLENBT0o7OztBQUMzQ3RHLGVBQVcsQ0FBQ3NFLEtBQVosQ0FBa0IzUCxTQUFsQixHQUE4QjJSLFFBQVEsQ0FBQzNSLFNBQXZDLENBUitDLENBUUc7O0FBQ2xEcUwsZUFBVyxDQUFDc0UsS0FBWixDQUFrQjNQLFNBQWxCLENBQTRCa0IsV0FBNUIsR0FBMENtSyxXQUFXLENBQUNzRSxLQUF0RCxDQVQrQyxDQVNjO0FBQzdELEdBVkQ7QUFjQTs7Ozs7OztBQU1BdEUsYUFBVyxDQUFDc0QsS0FBWixHQUFvQixVQUFVMUIsSUFBVixFQUFnQm1HLFNBQWhCLEVBQTJCcFgsTUFBM0IsRUFBbUN3WCxJQUFuQyxFQUF5QztBQUM1REEsUUFBSSxHQUFHQSxJQUFJLElBQUksRUFBZjs7QUFDQSxTQUFLLElBQUlyTyxHQUFULElBQWdCcU8sSUFBaEIsRUFBc0I7QUFDckIsV0FBS3JPLEdBQUwsSUFBWXFPLElBQUksQ0FBQ3JPLEdBQUQsQ0FBaEI7QUFDQTs7QUFDRCxTQUFLOEgsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS2pSLE1BQUwsR0FBYyxLQUFLOEQsYUFBTCxHQUFxQjlELE1BQW5DO0FBQ0EsU0FBS29YLFNBQUwsR0FBaUJBLFNBQVMsSUFBSSxFQUE5QjtBQUNBLFNBQUt5SCxTQUFMLEdBQWlCLEtBQUtDLFNBQUwsR0FBaUJDLElBQUksQ0FBQ0MsR0FBTCxFQUFsQztBQUNBLFdBQU8sSUFBUDtBQUNBLEdBVkQ7QUFZQTs7Ozs7QUFJQSxNQUFJMVAsS0FBSyxHQUFHRCxXQUFXLENBQUNDLEtBQVosR0FBcUIsVUFBVXZOLE1BQVYsRUFBa0I7QUFDbEQsUUFBSWtkLENBQUMsR0FBRyxFQUFSO0FBQUEsUUFDQy9oQixDQUREO0FBR0E7Ozs7O0FBTUE7O0FBQ0EsUUFBSWdpQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFVQyxNQUFWLEVBQWtCO0FBQ2hDLGFBQU9yRixVQUFVLENBQUNxRixNQUFELENBQVYsSUFBc0IsQ0FBN0I7QUFDQSxLQUZELENBWGtELENBY2xEOzs7QUFDQSxRQUFJQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQVUvSyxJQUFWLEVBQWdCO0FBQ3ZDLGFBQU9BLElBQUksQ0FBQ2dMLFlBQUwsR0FBb0JoTCxJQUFJLENBQUNnTCxZQUF6QixHQUF3Q3RkLE1BQU0sQ0FBQ3VkLGdCQUFQLENBQXdCakwsSUFBeEIsQ0FBL0M7QUFDQSxLQUZELENBZmtELENBbUJsRDs7O0FBQ0EsUUFBSWtMLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVVDLEtBQVYsRUFBaUJuTCxJQUFqQixFQUF1Qm9MLEtBQXZCLEVBQThCQyxhQUE5QixFQUE2QztBQUM3RHJMLFVBQUksR0FBSUEsSUFBSSxLQUFLMVYsUUFBVixHQUFzQm9ELE1BQXRCLEdBQStCc1MsSUFBdEM7O0FBQ0EsVUFBSUEsSUFBSSxLQUFLdFMsTUFBYixFQUFxQjtBQUNwQjJkLHFCQUFhLEdBQUcsS0FBaEI7QUFDQSxPQUZELE1BRU8sSUFBSSxDQUFDQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUJ2TCxJQUFqQixDQUFMLEVBQTZCO0FBQ25DLGVBQU8sQ0FBUDtBQUNBOztBQUNEbUwsV0FBSyxHQUFHQSxLQUFLLENBQUNqZSxNQUFOLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsS0FBZ0NnZSxLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCL1gsV0FBaEIsRUFBeEM7QUFDQSxVQUFJZ1ksU0FBUyxHQUFHLENBQUNMLEtBQUssR0FBR3BMLElBQUksQ0FBQyxXQUFXbUwsS0FBWixDQUFKLElBQTBCbkwsSUFBSSxDQUFDLFVBQVVtTCxLQUFYLENBQWpDLEdBQXFEbkwsSUFBSSxDQUFDLFdBQVdtTCxLQUFaLENBQUosSUFBMEJuTCxJQUFJLENBQUMsVUFBVW1MLEtBQVgsQ0FBekYsS0FBK0csQ0FBL0g7O0FBQ0EsVUFBSUMsS0FBSyxJQUFJQyxhQUFiLEVBQTRCO0FBQzNCLFlBQUk5ZixLQUFLLEdBQUd3ZixpQkFBaUIsQ0FBQy9LLElBQUQsQ0FBN0I7O0FBQ0F5TCxpQkFBUyxJQUFJTixLQUFLLEtBQUssUUFBVixHQUFxQk4sUUFBUSxDQUFDdGYsS0FBSyxDQUFDbWdCLFNBQVAsQ0FBUixHQUE0QmIsUUFBUSxDQUFDdGYsS0FBSyxDQUFDb2dCLFlBQVAsQ0FBekQsR0FBZ0ZkLFFBQVEsQ0FBQ3RmLEtBQUssQ0FBQ3FnQixVQUFQLENBQVIsR0FBNkJmLFFBQVEsQ0FBQ3RmLEtBQUssQ0FBQ3NnQixXQUFQLENBQWxJO0FBQ0E7O0FBQ0QsYUFBT0osU0FBUDtBQUNBLEtBZEQsQ0FwQmtELENBbUNsRDs7O0FBQ0EsUUFBSUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBVUMsR0FBVixFQUFlO0FBQy9CLGFBQU9BLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLGtCQUFaLEVBQWdDLElBQWhDLEVBQXNDQSxPQUF0QyxDQUE4QyxXQUE5QyxFQUEyRCxVQUFVQyxDQUFWLEVBQWE7QUFDOUUsZUFBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLOWUsV0FBTCxFQUFQO0FBQ0EsT0FGTSxDQUFQO0FBR0EsS0FKRDtBQU1BOzs7OztBQU1BOzs7QUFDQXlkLEtBQUMsQ0FBQ3pZLE1BQUYsR0FBVyxVQUFVSyxHQUFWLEVBQWU7QUFDekJBLFNBQUcsR0FBR0EsR0FBRyxJQUFJLEVBQWI7O0FBQ0EsV0FBSzNKLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3FELFNBQVMsQ0FBQzVDLE1BQTFCLEVBQWtDVCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3RDLFlBQUksQ0FBQ3FELFNBQVMsQ0FBQ3JELENBQUQsQ0FBZCxFQUFtQjtBQUNsQjtBQUNBOztBQUNELGFBQUssSUFBSWlNLEdBQVQsSUFBZ0I1SSxTQUFTLENBQUNyRCxDQUFELENBQXpCLEVBQThCO0FBQzdCLGNBQUlxRCxTQUFTLENBQUNyRCxDQUFELENBQVQsQ0FBYTZKLGNBQWIsQ0FBNEJvQyxHQUE1QixDQUFKLEVBQXNDO0FBQ3JDdEMsZUFBRyxDQUFDc0MsR0FBRCxDQUFILEdBQVc1SSxTQUFTLENBQUNyRCxDQUFELENBQVQsQ0FBYWlNLEdBQWIsQ0FBWDtBQUNBO0FBQ0Q7QUFDRDs7QUFDRCxhQUFPdEMsR0FBUDtBQUNBLEtBYkQsQ0FqRGtELENBZ0VsRDs7O0FBQ0FvWSxLQUFDLENBQUNqRCxvQkFBRixHQUF5QixVQUFVb0UsR0FBVixFQUFlO0FBQ3ZDLGFBQU8sQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixXQUFsQixFQUErQixPQUEvQixFQUF3QyxhQUF4QyxFQUF1RDlSLE9BQXZELENBQStEOFIsR0FBL0QsSUFBc0UsQ0FBQyxDQUE5RTtBQUNBLEtBRkQsQ0FqRWtELENBcUVsRDtBQUNBOzs7QUFDQSxRQUNDRyxRQUFRLEdBQUcsQ0FEWjtBQUFBLFFBRUNDLE9BQU8sR0FBRyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsUUFBZCxFQUF3QixHQUF4QixDQUZYO0FBR0EsUUFBSUMsc0JBQXNCLEdBQUcxZSxNQUFNLENBQUNwQixxQkFBcEM7QUFDQSxRQUFJK2YscUJBQXFCLEdBQUczZSxNQUFNLENBQUM0ZSxvQkFBbkMsQ0EzRWtELENBNEVsRDs7QUFDQSxTQUFLempCLENBQUMsR0FBRyxDQUFULEVBQVksQ0FBQ3VqQixzQkFBRCxJQUEyQnZqQixDQUFDLEdBQUdzakIsT0FBTyxDQUFDN2lCLE1BQW5ELEVBQTJELEVBQUVULENBQTdELEVBQWdFO0FBQy9EdWpCLDRCQUFzQixHQUFHMWUsTUFBTSxDQUFDeWUsT0FBTyxDQUFDdGpCLENBQUQsQ0FBUCxHQUFhLHVCQUFkLENBQS9CO0FBQ0F3akIsMkJBQXFCLEdBQUczZSxNQUFNLENBQUN5ZSxPQUFPLENBQUN0akIsQ0FBRCxDQUFQLEdBQWEsc0JBQWQsQ0FBTixJQUErQzZFLE1BQU0sQ0FBQ3llLE9BQU8sQ0FBQ3RqQixDQUFELENBQVAsR0FBYSw2QkFBZCxDQUE3RTtBQUNBLEtBaEZpRCxDQWtGbEQ7OztBQUNBLFFBQUksQ0FBQ3VqQixzQkFBTCxFQUE2QjtBQUM1QkEsNEJBQXNCLEdBQUcsZ0NBQVUzSixRQUFWLEVBQW9CO0FBQzVDLFlBQ0M4SixRQUFRLEdBQUcsSUFBSTdCLElBQUosR0FBVzhCLE9BQVgsRUFEWjtBQUFBLFlBRUNDLFVBQVUsR0FBRzNGLElBQUksQ0FBQ3VELEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTWtDLFFBQVEsR0FBR0wsUUFBakIsQ0FBWixDQUZkO0FBQUEsWUFHQ3pSLEVBQUUsR0FBRy9NLE1BQU0sQ0FBQ0osVUFBUCxDQUFrQixZQUFZO0FBQ2xDbVYsa0JBQVEsQ0FBQzhKLFFBQVEsR0FBR0UsVUFBWixDQUFSO0FBQ0EsU0FGSSxFQUVGQSxVQUZFLENBSE47QUFNQVAsZ0JBQVEsR0FBR0ssUUFBUSxHQUFHRSxVQUF0QjtBQUNBLGVBQU9oUyxFQUFQO0FBQ0EsT0FURDtBQVVBOztBQUNELFFBQUksQ0FBQzRSLHFCQUFMLEVBQTRCO0FBQzNCQSwyQkFBcUIsR0FBRywrQkFBVTVSLEVBQVYsRUFBYztBQUNyQy9NLGNBQU0sQ0FBQ3VULFlBQVAsQ0FBb0J4RyxFQUFwQjtBQUNBLE9BRkQ7QUFHQTs7QUFDRG1RLEtBQUMsQ0FBQ3hNLEdBQUYsR0FBUWdPLHNCQUFzQixDQUFDdmYsSUFBdkIsQ0FBNEJhLE1BQTVCLENBQVI7QUFDQWtkLEtBQUMsQ0FBQzFKLEdBQUYsR0FBUW1MLHFCQUFxQixDQUFDeGYsSUFBdEIsQ0FBMkJhLE1BQTNCLENBQVI7QUFFQSxRQUNDZ2YsU0FBUyxHQUFHLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsS0FBbEIsQ0FEYjtBQUFBLFFBRUNoUyxPQUFPLEdBQUdoTixNQUFNLENBQUNnTixPQUFQLElBQWtCLEVBRjdCOztBQUlBQSxXQUFPLENBQUNRLEdBQVIsR0FBY1IsT0FBTyxDQUFDUSxHQUFSLElBQWUsWUFBWSxDQUFFLENBQTNDLENBM0drRCxDQTJHTDtBQUM3Qzs7O0FBQ0EsU0FBS3JTLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzZqQixTQUFTLENBQUNwakIsTUFBMUIsRUFBa0NULENBQUMsRUFBbkMsRUFBdUM7QUFDdEMsVUFBSThqQixNQUFNLEdBQUdELFNBQVMsQ0FBQzdqQixDQUFELENBQXRCOztBQUNBLFVBQUksQ0FBQzZSLE9BQU8sQ0FBQ2lTLE1BQUQsQ0FBWixFQUFzQjtBQUNyQmpTLGVBQU8sQ0FBQ2lTLE1BQUQsQ0FBUCxHQUFrQmpTLE9BQU8sQ0FBQ1EsR0FBMUIsQ0FEcUIsQ0FDVTtBQUMvQjtBQUNEOztBQUNEMFAsS0FBQyxDQUFDMVAsR0FBRixHQUFRLFVBQVVnRCxRQUFWLEVBQW9CO0FBQzNCLFVBQUlBLFFBQVEsR0FBR3dPLFNBQVMsQ0FBQ3BqQixNQUFyQixJQUErQjRVLFFBQVEsSUFBSSxDQUEvQyxFQUFrREEsUUFBUSxHQUFHd08sU0FBUyxDQUFDcGpCLE1BQXJCO0FBQ2xELFVBQUlxaEIsR0FBRyxHQUFHLElBQUlELElBQUosRUFBVjtBQUFBLFVBQ0NrQyxJQUFJLEdBQUcsQ0FBQyxNQUFNakMsR0FBRyxDQUFDa0MsUUFBSixFQUFQLEVBQXVCemYsS0FBdkIsQ0FBNkIsQ0FBQyxDQUE5QixJQUFtQyxHQUFuQyxHQUF5QyxDQUFDLE1BQU11ZCxHQUFHLENBQUNtQyxVQUFKLEVBQVAsRUFBeUIxZixLQUF6QixDQUErQixDQUFDLENBQWhDLENBQXpDLEdBQThFLEdBQTlFLEdBQW9GLENBQUMsTUFBTXVkLEdBQUcsQ0FBQ29DLFVBQUosRUFBUCxFQUF5QjNmLEtBQXpCLENBQStCLENBQUMsQ0FBaEMsQ0FBcEYsR0FBeUgsR0FBekgsR0FBK0gsQ0FBQyxPQUFPdWQsR0FBRyxDQUFDcUMsZUFBSixFQUFSLEVBQStCNWYsS0FBL0IsQ0FBcUMsQ0FBQyxDQUF0QyxDQUR2STtBQUFBLFVBRUN1ZixNQUFNLEdBQUdELFNBQVMsQ0FBQ3hPLFFBQVEsR0FBRyxDQUFaLENBRm5CO0FBQUEsVUFHQytPLElBQUksR0FBRzdqQixLQUFLLENBQUN1RyxTQUFOLENBQWdCUyxNQUFoQixDQUF1QmtDLElBQXZCLENBQTRCcEcsU0FBNUIsRUFBdUMsQ0FBdkMsQ0FIUjtBQUFBLFVBSUNnaEIsSUFBSSxHQUFHbk4sUUFBUSxDQUFDcFEsU0FBVCxDQUFtQjlDLElBQW5CLENBQXdCeUYsSUFBeEIsQ0FBNkJvSSxPQUFPLENBQUNpUyxNQUFELENBQXBDLEVBQThDalMsT0FBOUMsQ0FKUjtBQUtBdVMsVUFBSSxDQUFDckgsT0FBTCxDQUFhZ0gsSUFBYjtBQUNBTSxVQUFJLENBQUMxYixLQUFMLENBQVdrSixPQUFYLEVBQW9CdVMsSUFBcEI7QUFDQSxLQVREO0FBV0E7Ozs7Ozs7QUFNQSxRQUFJM0IsS0FBSyxHQUFHVixDQUFDLENBQUNoTyxJQUFGLEdBQVMsVUFBVXVRLENBQVYsRUFBYTtBQUNqQyxhQUFPeGYsTUFBTSxDQUFDZ0MsU0FBUCxDQUFpQjRCLFFBQWpCLENBQTBCZSxJQUExQixDQUErQjZhLENBQS9CLEVBQWtDbkIsT0FBbEMsQ0FBMEMsbUJBQTFDLEVBQStELElBQS9ELEVBQXFFdlksV0FBckUsRUFBUDtBQUNBLEtBRkQ7O0FBR0E2WCxTQUFLLENBQUMvRixNQUFOLEdBQWUsVUFBVTRILENBQVYsRUFBYTtBQUMzQixhQUFPN0IsS0FBSyxDQUFDNkIsQ0FBRCxDQUFMLEtBQWEsUUFBcEI7QUFDQSxLQUZEOztBQUdBN0IsU0FBSyxDQUFDdkwsUUFBTixHQUFpQixVQUFVb04sQ0FBVixFQUFhO0FBQzdCLGFBQU83QixLQUFLLENBQUM2QixDQUFELENBQUwsS0FBYSxVQUFwQjtBQUNBLEtBRkQ7O0FBR0E3QixTQUFLLENBQUNsaUIsS0FBTixHQUFjLFVBQVUrakIsQ0FBVixFQUFhO0FBQzFCLGFBQU8vakIsS0FBSyxDQUFDQyxPQUFOLENBQWM4akIsQ0FBZCxDQUFQO0FBQ0EsS0FGRDs7QUFHQTdCLFNBQUssQ0FBQ3pPLE1BQU4sR0FBZSxVQUFVc1EsQ0FBVixFQUFhO0FBQzNCLGFBQU8sQ0FBQzdCLEtBQUssQ0FBQ2xpQixLQUFOLENBQVkrakIsQ0FBWixDQUFELElBQW9CQSxDQUFDLEdBQUcxSCxVQUFVLENBQUMwSCxDQUFELENBQWQsR0FBb0IsQ0FBckIsSUFBMkIsQ0FBckQ7QUFDQSxLQUZEOztBQUdBN0IsU0FBSyxDQUFDQyxVQUFOLEdBQW1CLFVBQVV4aUIsQ0FBVixFQUFhO0FBQy9CLGFBQ0MsUUFBT3FrQixXQUFQLHlDQUFPQSxXQUFQLE9BQXVCLFFBQXZCLElBQW1DLE9BQU9BLFdBQVAsS0FBdUIsVUFBMUQsR0FBdUVya0IsQ0FBQyxZQUFZcWtCLFdBQWIsSUFBNEJya0IsQ0FBQyxZQUFZc2tCLFVBQWhILEdBQTZIO0FBQzdIdGtCLE9BQUMsSUFBSSxRQUFPQSxDQUFQLE1BQWEsUUFBbEIsSUFBOEJBLENBQUMsS0FBSyxJQUFwQyxJQUE0Q0EsQ0FBQyxDQUFDdWtCLFFBQUYsS0FBZSxDQUEzRCxJQUFnRSxPQUFPdmtCLENBQUMsQ0FBQ3drQixRQUFULEtBQXNCLFFBRnZGO0FBSUEsS0FMRDtBQU9BOzs7OztBQUtBOzs7QUFDQSxRQUFJQyxJQUFJLEdBQUc1QyxDQUFDLENBQUNyTyxHQUFGLEdBQVEsRUFBbkI7O0FBQ0FpUixRQUFJLENBQUNoakIsUUFBTCxHQUFnQixVQUFVd0gsUUFBVixFQUFvQjtBQUNuQyxVQUFJbUQsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsVUFBSW1XLEtBQUssQ0FBQy9GLE1BQU4sQ0FBYXZULFFBQWIsQ0FBSixFQUE0QjtBQUMzQixZQUFJO0FBQ0hBLGtCQUFRLEdBQUcxSCxRQUFRLENBQUNHLGdCQUFULENBQTBCdUgsUUFBMUIsQ0FBWDtBQUNBLFNBRkQsQ0FFRSxPQUFPeEksQ0FBUCxFQUFVO0FBQUU7QUFDYixpQkFBTzJMLEdBQVA7QUFDQTtBQUNEOztBQUNELFVBQUltVyxLQUFLLENBQUN0WixRQUFELENBQUwsS0FBb0IsVUFBcEIsSUFBa0NzWixLQUFLLENBQUNsaUIsS0FBTixDQUFZNEksUUFBWixDQUFsQyxJQUEyREEsUUFBUSxZQUFZeWIsUUFBbkYsRUFBNkY7QUFDNUYsYUFBSyxJQUFJNWtCLENBQUMsR0FBRyxDQUFSLEVBQVc2a0IsR0FBRyxHQUFHdlksR0FBRyxDQUFDN0wsTUFBSixHQUFhMEksUUFBUSxDQUFDMUksTUFBNUMsRUFBb0RULENBQUMsR0FBRzZrQixHQUF4RCxFQUE2RDdrQixDQUFDLEVBQTlELEVBQWtFO0FBQUU7QUFDbkUsY0FBSW1YLElBQUksR0FBR2hPLFFBQVEsQ0FBQ25KLENBQUQsQ0FBbkI7QUFDQXNNLGFBQUcsQ0FBQ3RNLENBQUQsQ0FBSCxHQUFTeWlCLEtBQUssQ0FBQ0MsVUFBTixDQUFpQnZMLElBQWpCLElBQXlCQSxJQUF6QixHQUFnQ3dOLElBQUksQ0FBQ2hqQixRQUFMLENBQWN3VixJQUFkLENBQXpDLENBRmlFLENBRUg7QUFDOUQ7QUFDRCxPQUxELE1BS08sSUFBSXNMLEtBQUssQ0FBQ0MsVUFBTixDQUFpQnZaLFFBQWpCLEtBQThCQSxRQUFRLEtBQUsxSCxRQUEzQyxJQUF1RDBILFFBQVEsS0FBS3RFLE1BQXhFLEVBQWdGO0FBQ3RGeUgsV0FBRyxHQUFHLENBQUNuRCxRQUFELENBQU4sQ0FEc0YsQ0FDcEU7QUFDbEI7O0FBQ0QsYUFBT21ELEdBQVA7QUFDQSxLQWxCRCxDQWpLa0QsQ0FvTGxEOzs7QUFDQXFZLFFBQUksQ0FBQ3RRLFNBQUwsR0FBaUIsVUFBVThDLElBQVYsRUFBZ0I7QUFDaEMsYUFBUUEsSUFBSSxJQUFJLE9BQU9BLElBQUksQ0FBQzlDLFNBQVosS0FBMEIsUUFBbkMsR0FBK0M4QyxJQUFJLENBQUM5QyxTQUFwRCxHQUFnRXhQLE1BQU0sQ0FBQ2lnQixXQUFQLElBQXNCLENBQTdGO0FBQ0EsS0FGRCxDQXJMa0QsQ0F3TGxEOzs7QUFDQUgsUUFBSSxDQUFDclEsVUFBTCxHQUFrQixVQUFVNkMsSUFBVixFQUFnQjtBQUNqQyxhQUFRQSxJQUFJLElBQUksT0FBT0EsSUFBSSxDQUFDN0MsVUFBWixLQUEyQixRQUFwQyxHQUFnRDZDLElBQUksQ0FBQzdDLFVBQXJELEdBQWtFelAsTUFBTSxDQUFDa2dCLFdBQVAsSUFBc0IsQ0FBL0Y7QUFDQSxLQUZELENBekxrRCxDQTRMbEQ7OztBQUNBSixRQUFJLENBQUNwUSxLQUFMLEdBQWEsVUFBVTRDLElBQVYsRUFBZ0JvTCxLQUFoQixFQUF1QkMsYUFBdkIsRUFBc0M7QUFDbEQsYUFBT0gsVUFBVSxDQUFDLE9BQUQsRUFBVWxMLElBQVYsRUFBZ0JvTCxLQUFoQixFQUF1QkMsYUFBdkIsQ0FBakI7QUFDQSxLQUZELENBN0xrRCxDQWdNbEQ7OztBQUNBbUMsUUFBSSxDQUFDdmhCLE1BQUwsR0FBYyxVQUFVK1QsSUFBVixFQUFnQm9MLEtBQWhCLEVBQXVCQyxhQUF2QixFQUFzQztBQUNuRCxhQUFPSCxVQUFVLENBQUMsUUFBRCxFQUFXbEwsSUFBWCxFQUFpQm9MLEtBQWpCLEVBQXdCQyxhQUF4QixDQUFqQjtBQUNBLEtBRkQsQ0FqTWtELENBcU1sRDs7O0FBQ0FtQyxRQUFJLENBQUNwTixNQUFMLEdBQWMsVUFBVUosSUFBVixFQUFnQjZOLGtCQUFoQixFQUFvQztBQUNqRCxVQUFJek4sTUFBTSxHQUFHO0FBQ1o0RyxXQUFHLEVBQUUsQ0FETztBQUVaQyxZQUFJLEVBQUU7QUFGTSxPQUFiOztBQUlBLFVBQUlqSCxJQUFJLElBQUlBLElBQUksQ0FBQzhOLHFCQUFqQixFQUF3QztBQUFFO0FBQ3pDLFlBQUlDLElBQUksR0FBRy9OLElBQUksQ0FBQzhOLHFCQUFMLEVBQVg7QUFDQTFOLGNBQU0sQ0FBQzRHLEdBQVAsR0FBYStHLElBQUksQ0FBQy9HLEdBQWxCO0FBQ0E1RyxjQUFNLENBQUM2RyxJQUFQLEdBQWM4RyxJQUFJLENBQUM5RyxJQUFuQjs7QUFDQSxZQUFJLENBQUM0RyxrQkFBTCxFQUF5QjtBQUFFO0FBQzFCek4sZ0JBQU0sQ0FBQzRHLEdBQVAsSUFBY3dHLElBQUksQ0FBQ3RRLFNBQUwsRUFBZDtBQUNBa0QsZ0JBQU0sQ0FBQzZHLElBQVAsSUFBZXVHLElBQUksQ0FBQ3JRLFVBQUwsRUFBZjtBQUNBO0FBQ0Q7O0FBQ0QsYUFBT2lELE1BQVA7QUFDQSxLQWZEO0FBaUJBOzs7Ozs7O0FBTUF3SyxLQUFDLENBQUN6QixRQUFGLEdBQWEsVUFBVW5KLElBQVYsRUFBZ0JnTyxTQUFoQixFQUEyQjtBQUN2QyxVQUFJQSxTQUFKLEVBQWU7QUFDZCxZQUFJaE8sSUFBSSxDQUFDbFYsU0FBVCxFQUNDa1YsSUFBSSxDQUFDbFYsU0FBTCxDQUFlQyxHQUFmLENBQW1CaWpCLFNBQW5CLEVBREQsS0FHQ2hPLElBQUksQ0FBQ25VLFNBQUwsSUFBa0IsTUFBTW1pQixTQUF4QjtBQUNEO0FBQ0QsS0FQRDs7QUFRQXBELEtBQUMsQ0FBQ1QsV0FBRixHQUFnQixVQUFVbkssSUFBVixFQUFnQmdPLFNBQWhCLEVBQTJCO0FBQzFDLFVBQUlBLFNBQUosRUFBZTtBQUNkLFlBQUloTyxJQUFJLENBQUNsVixTQUFULEVBQ0NrVixJQUFJLENBQUNsVixTQUFMLENBQWV5QixNQUFmLENBQXNCeWhCLFNBQXRCLEVBREQsS0FHQ2hPLElBQUksQ0FBQ25VLFNBQUwsR0FBaUJtVSxJQUFJLENBQUNuVSxTQUFMLENBQWVtZ0IsT0FBZixDQUF1QixJQUFJaUMsTUFBSixDQUFXLFlBQVlELFNBQVMsQ0FBQ3JMLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUJ1TCxJQUFyQixDQUEwQixHQUExQixDQUFaLEdBQTZDLFNBQXhELEVBQW1FLElBQW5FLENBQXZCLEVBQWlHLEdBQWpHLENBQWpCO0FBQ0Q7QUFDRCxLQVBELENBck9rRCxDQTZPbEQ7QUFDQTtBQUNBOzs7QUFDQXRELEtBQUMsQ0FBQ2pFLEdBQUYsR0FBUSxVQUFVM0csSUFBVixFQUFnQnZXLE9BQWhCLEVBQXlCO0FBQ2hDLFVBQUk2aEIsS0FBSyxDQUFDL0YsTUFBTixDQUFhOWIsT0FBYixDQUFKLEVBQTJCO0FBQzFCLGVBQU9zaEIsaUJBQWlCLENBQUMvSyxJQUFELENBQWpCLENBQXdCOEwsVUFBVSxDQUFDcmlCLE9BQUQsQ0FBbEMsQ0FBUDtBQUNBLE9BRkQsTUFFTyxJQUFJNmhCLEtBQUssQ0FBQ2xpQixLQUFOLENBQVlLLE9BQVosQ0FBSixFQUEwQjtBQUNoQyxZQUNDK0ksR0FBRyxHQUFHLEVBRFA7QUFBQSxZQUVDakgsS0FBSyxHQUFHd2YsaUJBQWlCLENBQUMvSyxJQUFELENBRjFCOztBQUdBdlcsZUFBTyxDQUFDMEosT0FBUixDQUFnQixVQUFVZ2IsTUFBVixFQUFrQnJaLEdBQWxCLEVBQXVCO0FBQ3RDdEMsYUFBRyxDQUFDMmIsTUFBRCxDQUFILEdBQWM1aUIsS0FBSyxDQUFDdWdCLFVBQVUsQ0FBQ3FDLE1BQUQsQ0FBWCxDQUFuQjtBQUNBLFNBRkQ7QUFHQSxlQUFPM2IsR0FBUDtBQUNBLE9BUk0sTUFRQTtBQUNOLGFBQUssSUFBSTJiLE1BQVQsSUFBbUIxa0IsT0FBbkIsRUFBNEI7QUFDM0IsY0FBSTZiLEdBQUcsR0FBRzdiLE9BQU8sQ0FBQzBrQixNQUFELENBQWpCOztBQUNBLGNBQUk3SSxHQUFHLElBQUlHLFVBQVUsQ0FBQ0gsR0FBRCxDQUFyQixFQUE0QjtBQUFFO0FBQzdCQSxlQUFHLElBQUksSUFBUDtBQUNBOztBQUNEdEYsY0FBSSxDQUFDelUsS0FBTCxDQUFXdWdCLFVBQVUsQ0FBQ3FDLE1BQUQsQ0FBckIsSUFBaUM3SSxHQUFqQztBQUNBO0FBQ0Q7QUFDRCxLQXBCRDs7QUFzQkEsV0FBT3NGLENBQVA7QUFDQSxHQXZRZ0MsQ0F1US9CbGQsTUFBTSxJQUFJLEVBdlFxQixDQUFqQzs7QUEwUUFzTixhQUFXLENBQUNzRSxLQUFaLENBQWtCM1AsU0FBbEIsQ0FBNEJ5ZSxhQUE1QixHQUE0QyxZQUFZO0FBQ3ZEcFQsZUFBVyxDQUFDQyxLQUFaLENBQWtCQyxHQUFsQixDQUFzQixDQUF0QixFQUF5QixnS0FBekI7O0FBQ0EsV0FBTyxJQUFQO0FBQ0EsR0FIRDs7QUFJQUYsYUFBVyxDQUFDc0UsS0FBWixDQUFrQjNQLFNBQWxCLENBQTRCMGUsZ0JBQTVCLEdBQStDLFlBQVk7QUFDMURyVCxlQUFXLENBQUNDLEtBQVosQ0FBa0JDLEdBQWxCLENBQXNCLENBQXRCLEVBQXlCLG1LQUF6Qjs7QUFDQSxXQUFPLElBQVA7QUFDQSxHQUhEOztBQUlBRixhQUFXLENBQUNzRSxLQUFaLENBQWtCM1AsU0FBbEIsQ0FBNEIyZSxRQUE1QixHQUF1QyxZQUFZO0FBQ2xEdFQsZUFBVyxDQUFDQyxLQUFaLENBQWtCQyxHQUFsQixDQUFzQixDQUF0QixFQUF5QixpSkFBekI7O0FBQ0EsV0FBTyxJQUFQO0FBQ0EsR0FIRDs7QUFJQUYsYUFBVyxDQUFDc0UsS0FBWixDQUFrQjNQLFNBQWxCLENBQTRCNGUsV0FBNUIsR0FBMEMsWUFBWTtBQUNyRHZULGVBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsQ0FBdEIsRUFBeUIsb0pBQXpCOztBQUNBLFdBQU8sSUFBUDtBQUNBLEdBSEQ7O0FBSUFGLGFBQVcsQ0FBQ3NFLEtBQVosQ0FBa0IzUCxTQUFsQixDQUE0QjZlLFdBQTVCLEdBQTBDLFlBQVk7QUFDckR4VCxlQUFXLENBQUNDLEtBQVosQ0FBa0JDLEdBQWxCLENBQXNCLENBQXRCLEVBQXlCLDRKQUF6Qjs7QUFDQSxXQUFPLElBQVA7QUFDQSxHQUhEOztBQUlBRixhQUFXLENBQUNzRSxLQUFaLENBQWtCM1AsU0FBbEIsQ0FBNEI4ZSxjQUE1QixHQUE2QyxZQUFZO0FBQ3hEelQsZUFBVyxDQUFDQyxLQUFaLENBQWtCQyxHQUFsQixDQUFzQixDQUF0QixFQUF5QiwrSkFBekI7O0FBQ0EsV0FBTyxJQUFQO0FBQ0EsR0FIRDs7QUFLQSxTQUFPRixXQUFQO0FBQ0EsQ0FsdkZBLENBQUQsQzs7Ozs7Ozs7Ozs7OztBQ2ZBLENBQUMsVUFBU3hSLENBQVQsRUFBV04sQ0FBWCxFQUFhO0FBQUMsNENBQWlCc0UsT0FBakIsTUFBMEIsMENBQWlCRCxNQUFqQixFQUExQixHQUFrREEsTUFBTSxDQUFDQyxPQUFQLEdBQWV0RSxDQUFDLEVBQWxFLEdBQXFFLFFBQXNDeUksaUNBQWUsRUFBVCxvQ0FBWXpJLENBQVo7QUFBQTtBQUFBO0FBQUEsb0dBQTVDLEdBQTJELFNBQWhJO0FBQXVMLENBQXJNLENBQXNNLGVBQWEsT0FBT3FHLElBQXBCLEdBQXlCQSxJQUF6QixHQUE4QixJQUFwTyxFQUF5TyxZQUFVO0FBQUMsU0FBTyxVQUFTL0YsQ0FBVCxFQUFXO0FBQUMsYUFBU04sQ0FBVCxDQUFXMkIsQ0FBWCxFQUFhO0FBQUMsVUFBR2hDLENBQUMsQ0FBQ2dDLENBQUQsQ0FBSixFQUFRLE9BQU9oQyxDQUFDLENBQUNnQyxDQUFELENBQUQsQ0FBSzJDLE9BQVo7QUFBb0IsVUFBSTlDLENBQUMsR0FBQzdCLENBQUMsQ0FBQ2dDLENBQUQsQ0FBRCxHQUFLO0FBQUNoQyxTQUFDLEVBQUNnQyxDQUFIO0FBQUs3QixTQUFDLEVBQUMsQ0FBQyxDQUFSO0FBQVV3RSxlQUFPLEVBQUM7QUFBbEIsT0FBWDtBQUFpQyxhQUFPaEUsQ0FBQyxDQUFDcUIsQ0FBRCxDQUFELENBQUt5SCxJQUFMLENBQVU1SCxDQUFDLENBQUM4QyxPQUFaLEVBQW9COUMsQ0FBcEIsRUFBc0JBLENBQUMsQ0FBQzhDLE9BQXhCLEVBQWdDdEUsQ0FBaEMsR0FBbUN3QixDQUFDLENBQUMxQixDQUFGLEdBQUksQ0FBQyxDQUF4QyxFQUEwQzBCLENBQUMsQ0FBQzhDLE9BQW5EO0FBQTJEOztBQUFBLFFBQUkzRSxDQUFDLEdBQUMsRUFBTjtBQUFTLFdBQU9LLENBQUMsQ0FBQ3dsQixDQUFGLEdBQUlsbEIsQ0FBSixFQUFNTixDQUFDLENBQUNELENBQUYsR0FBSUosQ0FBVixFQUFZSyxDQUFDLENBQUN5bEIsQ0FBRixHQUFJLFVBQVNubEIsQ0FBVCxFQUFXWCxDQUFYLEVBQWFnQyxDQUFiLEVBQWU7QUFBQzNCLE9BQUMsQ0FBQ0gsQ0FBRixDQUFJUyxDQUFKLEVBQU1YLENBQU4sS0FBVThFLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQnBFLENBQXRCLEVBQXdCWCxDQUF4QixFQUEwQjtBQUFDK0wsb0JBQVksRUFBQyxDQUFDLENBQWY7QUFBaUJELGtCQUFVLEVBQUMsQ0FBQyxDQUE3QjtBQUErQjRILFdBQUcsRUFBQzFSO0FBQW5DLE9BQTFCLENBQVY7QUFBMkUsS0FBM0csRUFBNEczQixDQUFDLENBQUN3QixDQUFGLEdBQUksVUFBU2xCLENBQVQsRUFBVztBQUFDLFVBQUlYLENBQUMsR0FBQ1csQ0FBQyxJQUFFQSxDQUFDLENBQUNvbEIsVUFBTCxHQUFnQixZQUFVO0FBQUMsZUFBT3BsQixDQUFDLFdBQVI7QUFBaUIsT0FBNUMsR0FBNkMsWUFBVTtBQUFDLGVBQU9BLENBQVA7QUFBUyxPQUF2RTtBQUF3RSxhQUFPTixDQUFDLENBQUN5bEIsQ0FBRixDQUFJOWxCLENBQUosRUFBTSxHQUFOLEVBQVVBLENBQVYsR0FBYUEsQ0FBcEI7QUFBc0IsS0FBMU4sRUFBMk5LLENBQUMsQ0FBQ0gsQ0FBRixHQUFJLFVBQVNTLENBQVQsRUFBV04sQ0FBWCxFQUFhO0FBQUMsYUFBT3lFLE1BQU0sQ0FBQ2dDLFNBQVAsQ0FBaUIrQyxjQUFqQixDQUFnQ0osSUFBaEMsQ0FBcUM5SSxDQUFyQyxFQUF1Q04sQ0FBdkMsQ0FBUDtBQUFpRCxLQUE5UixFQUErUkEsQ0FBQyxDQUFDMmxCLENBQUYsR0FBSSxFQUFuUyxFQUFzUzNsQixDQUFDLENBQUNBLENBQUMsQ0FBQzBCLENBQUYsR0FBSSxDQUFMLENBQTlTO0FBQXNULEdBQWpkLENBQWtkLENBQUMsVUFBU3BCLENBQVQsRUFBV04sQ0FBWCxFQUFhTCxDQUFiLEVBQWU7QUFBQzs7QUFBYSxhQUFTZ0MsQ0FBVCxDQUFXckIsQ0FBWCxFQUFhTixDQUFiLEVBQWU7QUFBQyxVQUFHLEVBQUVNLENBQUMsWUFBWU4sQ0FBZixDQUFILEVBQXFCLE1BQU0sSUFBSXFMLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQXlEOztBQUFBNUcsVUFBTSxDQUFDQyxjQUFQLENBQXNCMUUsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQzJFLFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUluRCxDQUFDLEdBQUMsY0FBWSxPQUFPZ0wsTUFBbkIsSUFBMkIsb0JBQWlCQSxNQUFNLENBQUNDLFFBQXhCLENBQTNCLEdBQTRELFVBQVNuTSxDQUFULEVBQVc7QUFBQyxxQkFBY0EsQ0FBZDtBQUFnQixLQUF4RixHQUF5RixVQUFTQSxDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLElBQUUsY0FBWSxPQUFPa00sTUFBdEIsSUFBOEJsTSxDQUFDLENBQUNxSCxXQUFGLEtBQWdCNkUsTUFBOUMsSUFBc0RsTSxDQUFDLEtBQUdrTSxNQUFNLENBQUMvRixTQUFqRSxHQUEyRSxRQUEzRSxXQUEyRm5HLENBQTNGLENBQVA7QUFBb0csS0FBL007QUFBQSxRQUFnTm9CLENBQUMsR0FBQyxZQUFVO0FBQUMsZUFBU3BCLENBQVQsQ0FBV0EsQ0FBWCxFQUFhTixDQUFiLEVBQWU7QUFBQyxhQUFJLElBQUlMLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0ssQ0FBQyxDQUFDSSxNQUFoQixFQUF1QlQsQ0FBQyxFQUF4QixFQUEyQjtBQUFDLGNBQUlnQyxDQUFDLEdBQUMzQixDQUFDLENBQUNMLENBQUQsQ0FBUDtBQUFXZ0MsV0FBQyxDQUFDOEosVUFBRixHQUFhOUosQ0FBQyxDQUFDOEosVUFBRixJQUFjLENBQUMsQ0FBNUIsRUFBOEI5SixDQUFDLENBQUMrSixZQUFGLEdBQWUsQ0FBQyxDQUE5QyxFQUFnRCxXQUFVL0osQ0FBVixLQUFjQSxDQUFDLENBQUNnSyxRQUFGLEdBQVcsQ0FBQyxDQUExQixDQUFoRCxFQUE2RWxILE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQnBFLENBQXRCLEVBQXdCcUIsQ0FBQyxDQUFDaUssR0FBMUIsRUFBOEJqSyxDQUE5QixDQUE3RTtBQUE4RztBQUFDOztBQUFBLGFBQU8sVUFBUzNCLENBQVQsRUFBV0wsQ0FBWCxFQUFhZ0MsQ0FBYixFQUFlO0FBQUMsZUFBT2hDLENBQUMsSUFBRVcsQ0FBQyxDQUFDTixDQUFDLENBQUN5RyxTQUFILEVBQWE5RyxDQUFiLENBQUosRUFBb0JnQyxDQUFDLElBQUVyQixDQUFDLENBQUNOLENBQUQsRUFBRzJCLENBQUgsQ0FBeEIsRUFBOEIzQixDQUFyQztBQUF1QyxPQUE5RDtBQUErRCxLQUFoUCxFQUFsTjtBQUFBLFFBQXFjRixDQUFDLEdBQUMsWUFBVTtBQUFDLGVBQVNRLENBQVQsQ0FBV04sQ0FBWCxFQUFhO0FBQUMsWUFBSUwsQ0FBQyxHQUFDLElBQU47QUFBVyxZQUFHZ0MsQ0FBQyxDQUFDLElBQUQsRUFBTXJCLENBQU4sQ0FBRCxFQUFVLEtBQUt1TyxNQUFMLEdBQVl2TyxDQUFDLENBQUNzbEIsYUFBRixDQUFnQjVsQixDQUFoQixDQUF0QixFQUF5QyxLQUFLOEksUUFBTCxHQUFjLFlBQVUsT0FBTyxLQUFLK0YsTUFBTCxDQUFZL0YsUUFBN0IsR0FBc0MxSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBS3dOLE1BQUwsQ0FBWS9GLFFBQW5DLENBQXRDLEdBQW1GLEtBQUsrRixNQUFMLENBQVkvRixRQUF0SixFQUErSixTQUFPLEtBQUtBLFFBQTlLLEVBQXVMLE1BQU0sSUFBSXRCLEtBQUosQ0FBVSx1Q0FBVixDQUFOO0FBQXlELGFBQUtxZSxtQkFBTCxJQUEyQixLQUFLQyxhQUFMLEdBQW1CLEtBQUtoZCxRQUFMLENBQWNpZCxXQUE1RCxFQUF3RSxLQUFLQyxhQUFMLEdBQW1CLEdBQUc5aEIsS0FBSCxDQUFTa0YsSUFBVCxDQUFjLEtBQUtOLFFBQUwsQ0FBY21kLFFBQTVCLENBQTNGLEVBQWlJLEtBQUtDLFlBQUwsR0FBa0IsS0FBS3JYLE1BQUwsQ0FBWXNYLElBQVosR0FBaUIsS0FBS3RYLE1BQUwsQ0FBWXVYLFVBQVosR0FBdUIsS0FBS0osYUFBTCxDQUFtQjVsQixNQUEzRCxHQUFrRXdkLElBQUksQ0FBQ3VELEdBQUwsQ0FBUyxDQUFULEVBQVd2RCxJQUFJLENBQUN3RCxHQUFMLENBQVMsS0FBS3ZTLE1BQUwsQ0FBWXVYLFVBQXJCLEVBQWdDLEtBQUtKLGFBQUwsQ0FBbUI1bEIsTUFBbkIsR0FBMEIsS0FBS2ltQixPQUEvRCxDQUFYLENBQXJOLEVBQXlTLEtBQUtDLGlCQUFMLEdBQXVCaG1CLENBQUMsQ0FBQ2ltQixXQUFGLEVBQWhVLEVBQWdWLENBQUMsZUFBRCxFQUFpQixtQkFBakIsRUFBcUMsaUJBQXJDLEVBQXVELGtCQUF2RCxFQUEwRSxrQkFBMUUsRUFBNkYsZ0JBQTdGLEVBQThHLG1CQUE5RyxFQUFrSSxrQkFBbEksRUFBcUosY0FBckosRUFBcUt0YyxPQUFySyxDQUE2SyxVQUFTM0osQ0FBVCxFQUFXO0FBQUNYLFdBQUMsQ0FBQ1csQ0FBRCxDQUFELEdBQUtYLENBQUMsQ0FBQ1csQ0FBRCxDQUFELENBQUtxRCxJQUFMLENBQVVoRSxDQUFWLENBQUw7QUFBa0IsU0FBM00sQ0FBaFYsRUFBNmhCLEtBQUtNLElBQUwsRUFBN2hCO0FBQXlpQjs7QUFBQSxhQUFPeUIsQ0FBQyxDQUFDcEIsQ0FBRCxFQUFHLENBQUM7QUFBQ3NMLFdBQUcsRUFBQyxjQUFMO0FBQW9CakgsYUFBSyxFQUFDLGlCQUFVO0FBQUNILGdCQUFNLENBQUNaLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDLEtBQUtOLGFBQXRDLEdBQXFELEtBQUt1TCxNQUFMLENBQVkyWCxTQUFaLEtBQXdCLEtBQUtDLFdBQUwsR0FBaUIsQ0FBQyxDQUFsQixFQUFvQixLQUFLQyxJQUFMLEdBQVU7QUFBQ0Msa0JBQU0sRUFBQyxDQUFSO0FBQVVDLGdCQUFJLEVBQUMsQ0FBZjtBQUFpQkMsa0JBQU0sRUFBQyxDQUF4QjtBQUEwQkMsbUJBQU8sRUFBQyxJQUFsQztBQUF1Q0Msd0JBQVksRUFBQyxDQUFDO0FBQXJELFdBQTlCLEVBQXNGLEtBQUtqZSxRQUFMLENBQWNsRixnQkFBZCxDQUErQixZQUEvQixFQUE0QyxLQUFLb2pCLGlCQUFqRCxDQUF0RixFQUEwSixLQUFLbGUsUUFBTCxDQUFjbEYsZ0JBQWQsQ0FBK0IsVUFBL0IsRUFBMEMsS0FBS3FqQixlQUEvQyxDQUExSixFQUEwTixLQUFLbmUsUUFBTCxDQUFjbEYsZ0JBQWQsQ0FBK0IsV0FBL0IsRUFBMkMsS0FBS3NqQixnQkFBaEQsQ0FBMU4sRUFBNFIsS0FBS3BlLFFBQUwsQ0FBY2xGLGdCQUFkLENBQStCLFdBQS9CLEVBQTJDLEtBQUt1akIsZ0JBQWhELENBQTVSLEVBQThWLEtBQUtyZSxRQUFMLENBQWNsRixnQkFBZCxDQUErQixTQUEvQixFQUF5QyxLQUFLd2pCLGNBQTlDLENBQTlWLEVBQTRaLEtBQUt0ZSxRQUFMLENBQWNsRixnQkFBZCxDQUErQixZQUEvQixFQUE0QyxLQUFLeWpCLGlCQUFqRCxDQUE1WixFQUFnZSxLQUFLdmUsUUFBTCxDQUFjbEYsZ0JBQWQsQ0FBK0IsV0FBL0IsRUFBMkMsS0FBSzBqQixnQkFBaEQsQ0FBaGUsRUFBa2lCLEtBQUt4ZSxRQUFMLENBQWNsRixnQkFBZCxDQUErQixPQUEvQixFQUF1QyxLQUFLSixZQUE1QyxDQUExakIsQ0FBckQ7QUFBMHFCO0FBQS9zQixPQUFELEVBQWt0QjtBQUFDb0ksV0FBRyxFQUFDLGNBQUw7QUFBb0JqSCxhQUFLLEVBQUMsaUJBQVU7QUFBQ0gsZ0JBQU0sQ0FBQ1YsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBb0MsS0FBS1IsYUFBekMsR0FBd0QsS0FBS3dGLFFBQUwsQ0FBY2hGLG1CQUFkLENBQWtDLFlBQWxDLEVBQStDLEtBQUtrakIsaUJBQXBELENBQXhELEVBQStILEtBQUtsZSxRQUFMLENBQWNoRixtQkFBZCxDQUFrQyxVQUFsQyxFQUE2QyxLQUFLbWpCLGVBQWxELENBQS9ILEVBQWtNLEtBQUtuZSxRQUFMLENBQWNoRixtQkFBZCxDQUFrQyxXQUFsQyxFQUE4QyxLQUFLb2pCLGdCQUFuRCxDQUFsTSxFQUF1USxLQUFLcGUsUUFBTCxDQUFjaEYsbUJBQWQsQ0FBa0MsV0FBbEMsRUFBOEMsS0FBS3FqQixnQkFBbkQsQ0FBdlEsRUFBNFUsS0FBS3JlLFFBQUwsQ0FBY2hGLG1CQUFkLENBQWtDLFNBQWxDLEVBQTRDLEtBQUtzakIsY0FBakQsQ0FBNVUsRUFBNlksS0FBS3RlLFFBQUwsQ0FBY2hGLG1CQUFkLENBQWtDLFlBQWxDLEVBQStDLEtBQUt1akIsaUJBQXBELENBQTdZLEVBQW9kLEtBQUt2ZSxRQUFMLENBQWNoRixtQkFBZCxDQUFrQyxXQUFsQyxFQUE4QyxLQUFLd2pCLGdCQUFuRCxDQUFwZCxFQUF5aEIsS0FBS3hlLFFBQUwsQ0FBY2hGLG1CQUFkLENBQWtDLE9BQWxDLEVBQTBDLEtBQUtOLFlBQS9DLENBQXpoQjtBQUFzbEI7QUFBM25CLE9BQWx0QixFQUErMEM7QUFBQ29JLFdBQUcsRUFBQyxNQUFMO0FBQVlqSCxhQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFLdkMsWUFBTCxJQUFvQixLQUFLMEcsUUFBTCxDQUFjekcsS0FBZCxDQUFvQitOLFFBQXBCLEdBQTZCLFFBQWpELEVBQTBELEtBQUt0SCxRQUFMLENBQWN6RyxLQUFkLENBQW9Ca2xCLFNBQXBCLEdBQThCLEtBQUsxWSxNQUFMLENBQVkyWSxHQUFaLEdBQWdCLEtBQWhCLEdBQXNCLEtBQTlHLEVBQW9ILEtBQUtDLGdCQUFMLEVBQXBILEVBQTRJLEtBQUs1WSxNQUFMLENBQVk2WSxNQUFaLENBQW1CdGUsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBNUk7QUFBMEs7QUFBdk0sT0FBLzBDLEVBQXdoRDtBQUFDd0MsV0FBRyxFQUFDLGtCQUFMO0FBQXdCakgsYUFBSyxFQUFDLGlCQUFVO0FBQUMsY0FBSXJFLENBQUMsR0FBQyxLQUFLd2xCLGFBQUwsR0FBbUIsS0FBS08sT0FBOUI7QUFBQSxjQUFzQ3JtQixDQUFDLEdBQUMsS0FBSzZPLE1BQUwsQ0FBWXNYLElBQVosR0FBaUIsS0FBS0gsYUFBTCxDQUFtQjVsQixNQUFuQixHQUEwQixJQUFFLEtBQUtpbUIsT0FBbEQsR0FBMEQsS0FBS0wsYUFBTCxDQUFtQjVsQixNQUFySDtBQUE0SCxlQUFLdW5CLFdBQUwsR0FBaUJ2bUIsUUFBUSxDQUFDd2UsYUFBVCxDQUF1QixLQUF2QixDQUFqQixFQUErQyxLQUFLK0gsV0FBTCxDQUFpQnRsQixLQUFqQixDQUF1QjZSLEtBQXZCLEdBQTZCNVQsQ0FBQyxHQUFDTixDQUFGLEdBQUksSUFBaEYsRUFBcUYsS0FBSzRuQixnQkFBTCxFQUFyRixFQUE2RyxLQUFLL1ksTUFBTCxDQUFZMlgsU0FBWixLQUF3QixLQUFLMWQsUUFBTCxDQUFjekcsS0FBZCxDQUFvQndsQixNQUFwQixHQUEyQixjQUFuRCxDQUE3RztBQUFnTCxjQUFJbG9CLENBQUMsR0FBQ3lCLFFBQVEsQ0FBQzBtQixzQkFBVCxFQUFOO0FBQXdDLGNBQUcsS0FBS2paLE1BQUwsQ0FBWXNYLElBQWYsRUFBb0IsS0FBSSxJQUFJeGtCLENBQUMsR0FBQyxLQUFLcWtCLGFBQUwsQ0FBbUI1bEIsTUFBbkIsR0FBMEIsS0FBS2ltQixPQUF6QyxFQUFpRDFrQixDQUFDLEdBQUMsS0FBS3FrQixhQUFMLENBQW1CNWxCLE1BQXRFLEVBQTZFdUIsQ0FBQyxFQUE5RSxFQUFpRjtBQUFDLGdCQUFJSCxDQUFDLEdBQUMsS0FBS3VtQixvQkFBTCxDQUEwQixLQUFLL0IsYUFBTCxDQUFtQnJrQixDQUFuQixFQUFzQnFtQixTQUF0QixDQUFnQyxDQUFDLENBQWpDLENBQTFCLENBQU47QUFBcUVyb0IsYUFBQyxDQUFDMGdCLFdBQUYsQ0FBYzdlLENBQWQ7QUFBaUI7O0FBQUEsZUFBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBS3NrQixhQUFMLENBQW1CNWxCLE1BQWpDLEVBQXdDc0IsQ0FBQyxFQUF6QyxFQUE0QztBQUFDLGdCQUFJNUIsQ0FBQyxHQUFDLEtBQUtpb0Isb0JBQUwsQ0FBMEIsS0FBSy9CLGFBQUwsQ0FBbUJ0a0IsQ0FBbkIsQ0FBMUIsQ0FBTjtBQUF1RC9CLGFBQUMsQ0FBQzBnQixXQUFGLENBQWN2Z0IsQ0FBZDtBQUFpQjs7QUFBQSxjQUFHLEtBQUsrTyxNQUFMLENBQVlzWCxJQUFmLEVBQW9CLEtBQUksSUFBSXRtQixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBS3dtQixPQUFuQixFQUEyQnhtQixDQUFDLEVBQTVCLEVBQStCO0FBQUMsZ0JBQUlxQyxDQUFDLEdBQUMsS0FBSzZsQixvQkFBTCxDQUEwQixLQUFLL0IsYUFBTCxDQUFtQm5tQixDQUFuQixFQUFzQm1vQixTQUF0QixDQUFnQyxDQUFDLENBQWpDLENBQTFCLENBQU47QUFBcUVyb0IsYUFBQyxDQUFDMGdCLFdBQUYsQ0FBY25lLENBQWQ7QUFBaUI7QUFBQSxlQUFLeWxCLFdBQUwsQ0FBaUJ0SCxXQUFqQixDQUE2QjFnQixDQUE3QixHQUFnQyxLQUFLbUosUUFBTCxDQUFjbWYsU0FBZCxHQUF3QixFQUF4RCxFQUEyRCxLQUFLbmYsUUFBTCxDQUFjdVgsV0FBZCxDQUEwQixLQUFLc0gsV0FBL0IsQ0FBM0QsRUFBdUcsS0FBS08sY0FBTCxFQUF2RztBQUE2SDtBQUFyN0IsT0FBeGhELEVBQSs4RTtBQUFDdGMsV0FBRyxFQUFDLHNCQUFMO0FBQTRCakgsYUFBSyxFQUFDLGVBQVNyRSxDQUFULEVBQVc7QUFBQyxjQUFJTixDQUFDLEdBQUNvQixRQUFRLENBQUN3ZSxhQUFULENBQXVCLEtBQXZCLENBQU47QUFBb0MsaUJBQU81ZixDQUFDLENBQUNxQyxLQUFGLENBQVE4bEIsUUFBUixHQUFpQixLQUFLdFosTUFBTCxDQUFZMlksR0FBWixHQUFnQixPQUFoQixHQUF3QixNQUF6QyxFQUFnRHhuQixDQUFDLENBQUNxQyxLQUFGLFlBQWMsS0FBS3dNLE1BQUwsQ0FBWTJZLEdBQVosR0FBZ0IsT0FBaEIsR0FBd0IsTUFBdEYsRUFBNkZ4bkIsQ0FBQyxDQUFDcUMsS0FBRixDQUFRNlIsS0FBUixHQUFjLENBQUMsS0FBS3JGLE1BQUwsQ0FBWXNYLElBQVosR0FBaUIsT0FBSyxLQUFLSCxhQUFMLENBQW1CNWxCLE1BQW5CLEdBQTBCLElBQUUsS0FBS2ltQixPQUF0QyxDQUFqQixHQUFnRSxNQUFJLEtBQUtMLGFBQUwsQ0FBbUI1bEIsTUFBeEYsSUFBZ0csR0FBM00sRUFBK01KLENBQUMsQ0FBQ3FnQixXQUFGLENBQWMvZixDQUFkLENBQS9NLEVBQWdPTixDQUF2TztBQUF5TztBQUEzVCxPQUEvOEUsRUFBNHdGO0FBQUM0TCxXQUFHLEVBQUMscUJBQUw7QUFBMkJqSCxhQUFLLEVBQUMsaUJBQVU7QUFBQyxjQUFHLFlBQVUsT0FBTyxLQUFLa0ssTUFBTCxDQUFZd1gsT0FBaEMsRUFBd0MsS0FBS0EsT0FBTCxHQUFhLEtBQUt4WCxNQUFMLENBQVl3WCxPQUF6QixDQUF4QyxLQUE4RSxJQUFHLGFBQVc3a0IsQ0FBQyxDQUFDLEtBQUtxTixNQUFMLENBQVl3WCxPQUFiLENBQWYsRUFBcUM7QUFBQyxpQkFBS0EsT0FBTCxHQUFhLENBQWI7O0FBQWUsaUJBQUksSUFBSS9sQixDQUFSLElBQWEsS0FBS3VPLE1BQUwsQ0FBWXdYLE9BQXpCO0FBQWlDN2hCLG9CQUFNLENBQUM0akIsVUFBUCxJQUFtQjluQixDQUFuQixLQUF1QixLQUFLK2xCLE9BQUwsR0FBYSxLQUFLeFgsTUFBTCxDQUFZd1gsT0FBWixDQUFvQi9sQixDQUFwQixDQUFwQztBQUFqQztBQUE2RjtBQUFDO0FBQTdRLE9BQTV3RixFQUEyaEc7QUFBQ3NMLFdBQUcsRUFBQyxNQUFMO0FBQVlqSCxhQUFLLEVBQUMsaUJBQVU7QUFBQyxjQUFJckUsQ0FBQyxHQUFDMEMsU0FBUyxDQUFDNUMsTUFBVixHQUFpQixDQUFqQixJQUFvQixLQUFLLENBQUwsS0FBUzRDLFNBQVMsQ0FBQyxDQUFELENBQXRDLEdBQTBDQSxTQUFTLENBQUMsQ0FBRCxDQUFuRCxHQUF1RCxDQUE3RDtBQUFBLGNBQStEaEQsQ0FBQyxHQUFDZ0QsU0FBUyxDQUFDLENBQUQsQ0FBMUU7O0FBQThFLGNBQUcsRUFBRSxLQUFLZ2pCLGFBQUwsQ0FBbUI1bEIsTUFBbkIsSUFBMkIsS0FBS2ltQixPQUFsQyxDQUFILEVBQThDO0FBQUMsZ0JBQUkxbUIsQ0FBQyxHQUFDLEtBQUt1bUIsWUFBWDs7QUFBd0IsZ0JBQUcsS0FBS3JYLE1BQUwsQ0FBWXNYLElBQWYsRUFBb0I7QUFBQyxrQkFBRyxLQUFLRCxZQUFMLEdBQWtCNWxCLENBQWxCLEdBQW9CLENBQXZCLEVBQXlCO0FBQUMscUJBQUsrbkIsaUJBQUw7QUFBeUIsb0JBQUkxbUIsQ0FBQyxHQUFDLEtBQUt1a0IsWUFBTCxHQUFrQixLQUFLRixhQUFMLENBQW1CNWxCLE1BQTNDO0FBQUEsb0JBQWtEb0IsQ0FBQyxHQUFDLEtBQUs2a0IsT0FBekQ7QUFBQSxvQkFBaUUza0IsQ0FBQyxHQUFDQyxDQUFDLEdBQUNILENBQXJFO0FBQUEsb0JBQXVFMUIsQ0FBQyxHQUFDLENBQUMsS0FBSytPLE1BQUwsQ0FBWTJZLEdBQVosR0FBZ0IsQ0FBaEIsR0FBa0IsQ0FBQyxDQUFwQixJQUF1QjlsQixDQUF2QixJQUEwQixLQUFLb2tCLGFBQUwsR0FBbUIsS0FBS08sT0FBbEQsQ0FBekU7QUFBQSxvQkFBb0l4bUIsQ0FBQyxHQUFDLEtBQUtnUCxNQUFMLENBQVkyWCxTQUFaLEdBQXNCLEtBQUtFLElBQUwsQ0FBVUUsSUFBVixHQUFlLEtBQUtGLElBQUwsQ0FBVUMsTUFBL0MsR0FBc0QsQ0FBNUw7QUFBOEwscUJBQUtnQixXQUFMLENBQWlCdGxCLEtBQWpCLENBQXVCLEtBQUtpa0IsaUJBQTVCLElBQStDLGtCQUFnQnhtQixDQUFDLEdBQUNELENBQWxCLElBQXFCLFdBQXBFLEVBQWdGLEtBQUtxbUIsWUFBTCxHQUFrQnZrQixDQUFDLEdBQUNyQixDQUFwRztBQUFzRyxlQUF2VixNQUE0VixLQUFLNGxCLFlBQUwsR0FBa0IsS0FBS0EsWUFBTCxHQUFrQjVsQixDQUFwQztBQUFzQyxhQUF2WixNQUE0WixLQUFLNGxCLFlBQUwsR0FBa0J0SSxJQUFJLENBQUN1RCxHQUFMLENBQVMsS0FBSytFLFlBQUwsR0FBa0I1bEIsQ0FBM0IsRUFBNkIsQ0FBN0IsQ0FBbEI7O0FBQWtEWCxhQUFDLEtBQUcsS0FBS3VtQixZQUFULEtBQXdCLEtBQUtnQyxjQUFMLENBQW9CLEtBQUtyWixNQUFMLENBQVlzWCxJQUFoQyxHQUFzQyxLQUFLdFgsTUFBTCxDQUFZMEUsUUFBWixDQUFxQm5LLElBQXJCLENBQTBCLElBQTFCLENBQXRDLEVBQXNFcEosQ0FBQyxJQUFFQSxDQUFDLENBQUNvSixJQUFGLENBQU8sSUFBUCxDQUFqRztBQUErRztBQUFDO0FBQWh2QixPQUEzaEcsRUFBNndIO0FBQUN3QyxXQUFHLEVBQUMsTUFBTDtBQUFZakgsYUFBSyxFQUFDLGlCQUFVO0FBQUMsY0FBSXJFLENBQUMsR0FBQzBDLFNBQVMsQ0FBQzVDLE1BQVYsR0FBaUIsQ0FBakIsSUFBb0IsS0FBSyxDQUFMLEtBQVM0QyxTQUFTLENBQUMsQ0FBRCxDQUF0QyxHQUEwQ0EsU0FBUyxDQUFDLENBQUQsQ0FBbkQsR0FBdUQsQ0FBN0Q7QUFBQSxjQUErRGhELENBQUMsR0FBQ2dELFNBQVMsQ0FBQyxDQUFELENBQTFFOztBQUE4RSxjQUFHLEVBQUUsS0FBS2dqQixhQUFMLENBQW1CNWxCLE1BQW5CLElBQTJCLEtBQUtpbUIsT0FBbEMsQ0FBSCxFQUE4QztBQUFDLGdCQUFJMW1CLENBQUMsR0FBQyxLQUFLdW1CLFlBQVg7O0FBQXdCLGdCQUFHLEtBQUtyWCxNQUFMLENBQVlzWCxJQUFmLEVBQW9CO0FBQUMsa0JBQUcsS0FBS0QsWUFBTCxHQUFrQjVsQixDQUFsQixHQUFvQixLQUFLMGxCLGFBQUwsQ0FBbUI1bEIsTUFBbkIsR0FBMEIsS0FBS2ltQixPQUF0RCxFQUE4RDtBQUFDLHFCQUFLZ0MsaUJBQUw7QUFBeUIsb0JBQUkxbUIsQ0FBQyxHQUFDLEtBQUt1a0IsWUFBTCxHQUFrQixLQUFLRixhQUFMLENBQW1CNWxCLE1BQTNDO0FBQUEsb0JBQWtEb0IsQ0FBQyxHQUFDLEtBQUs2a0IsT0FBekQ7QUFBQSxvQkFBaUUza0IsQ0FBQyxHQUFDQyxDQUFDLEdBQUNILENBQXJFO0FBQUEsb0JBQXVFMUIsQ0FBQyxHQUFDLENBQUMsS0FBSytPLE1BQUwsQ0FBWTJZLEdBQVosR0FBZ0IsQ0FBaEIsR0FBa0IsQ0FBQyxDQUFwQixJQUF1QjlsQixDQUF2QixJQUEwQixLQUFLb2tCLGFBQUwsR0FBbUIsS0FBS08sT0FBbEQsQ0FBekU7QUFBQSxvQkFBb0l4bUIsQ0FBQyxHQUFDLEtBQUtnUCxNQUFMLENBQVkyWCxTQUFaLEdBQXNCLEtBQUtFLElBQUwsQ0FBVUUsSUFBVixHQUFlLEtBQUtGLElBQUwsQ0FBVUMsTUFBL0MsR0FBc0QsQ0FBNUw7QUFBOEwscUJBQUtnQixXQUFMLENBQWlCdGxCLEtBQWpCLENBQXVCLEtBQUtpa0IsaUJBQTVCLElBQStDLGtCQUFnQnhtQixDQUFDLEdBQUNELENBQWxCLElBQXFCLFdBQXBFLEVBQWdGLEtBQUtxbUIsWUFBTCxHQUFrQnZrQixDQUFDLEdBQUNyQixDQUFwRztBQUFzRyxlQUE1WCxNQUFpWSxLQUFLNGxCLFlBQUwsR0FBa0IsS0FBS0EsWUFBTCxHQUFrQjVsQixDQUFwQztBQUFzQyxhQUE1YixNQUFpYyxLQUFLNGxCLFlBQUwsR0FBa0J0SSxJQUFJLENBQUN3RCxHQUFMLENBQVMsS0FBSzhFLFlBQUwsR0FBa0I1bEIsQ0FBM0IsRUFBNkIsS0FBSzBsQixhQUFMLENBQW1CNWxCLE1BQW5CLEdBQTBCLEtBQUtpbUIsT0FBNUQsQ0FBbEI7O0FBQXVGMW1CLGFBQUMsS0FBRyxLQUFLdW1CLFlBQVQsS0FBd0IsS0FBS2dDLGNBQUwsQ0FBb0IsS0FBS3JaLE1BQUwsQ0FBWXNYLElBQWhDLEdBQXNDLEtBQUt0WCxNQUFMLENBQVkwRSxRQUFaLENBQXFCbkssSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdEMsRUFBc0VwSixDQUFDLElBQUVBLENBQUMsQ0FBQ29KLElBQUYsQ0FBTyxJQUFQLENBQWpHO0FBQStHO0FBQUM7QUFBMXpCLE9BQTd3SCxFQUF5a0o7QUFBQ3dDLFdBQUcsRUFBQyxtQkFBTDtBQUF5QmpILGFBQUssRUFBQyxpQkFBVTtBQUFDLGVBQUtnakIsV0FBTCxDQUFpQnRsQixLQUFqQixDQUF1QmltQixnQkFBdkIsR0FBd0MsYUFBVyxLQUFLelosTUFBTCxDQUFZMFosTUFBL0QsRUFBc0UsS0FBS1osV0FBTCxDQUFpQnRsQixLQUFqQixDQUF1Qm1tQixVQUF2QixHQUFrQyxhQUFXLEtBQUszWixNQUFMLENBQVkwWixNQUEvSDtBQUFzSTtBQUFoTCxPQUF6a0osRUFBMnZKO0FBQUMzYyxXQUFHLEVBQUMsa0JBQUw7QUFBd0JqSCxhQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFLZ2pCLFdBQUwsQ0FBaUJ0bEIsS0FBakIsQ0FBdUJpbUIsZ0JBQXZCLEdBQXdDLFNBQU8sS0FBS3paLE1BQUwsQ0FBWXBPLFFBQW5CLEdBQTRCLEtBQTVCLEdBQWtDLEtBQUtvTyxNQUFMLENBQVkwWixNQUF0RixFQUE2RixLQUFLWixXQUFMLENBQWlCdGxCLEtBQWpCLENBQXVCbW1CLFVBQXZCLEdBQWtDLFNBQU8sS0FBSzNaLE1BQUwsQ0FBWXBPLFFBQW5CLEdBQTRCLEtBQTVCLEdBQWtDLEtBQUtvTyxNQUFMLENBQVkwWixNQUE3SztBQUFvTDtBQUE3TixPQUEzdkosRUFBMDlKO0FBQUMzYyxXQUFHLEVBQUMsTUFBTDtBQUFZakgsYUFBSyxFQUFDLGVBQVNyRSxDQUFULEVBQVdOLENBQVgsRUFBYTtBQUFDLGNBQUcsRUFBRSxLQUFLZ21CLGFBQUwsQ0FBbUI1bEIsTUFBbkIsSUFBMkIsS0FBS2ltQixPQUFsQyxDQUFILEVBQThDO0FBQUMsZ0JBQUkxbUIsQ0FBQyxHQUFDLEtBQUt1bUIsWUFBWDtBQUF3QixpQkFBS0EsWUFBTCxHQUFrQixLQUFLclgsTUFBTCxDQUFZc1gsSUFBWixHQUFpQjdsQixDQUFDLEdBQUMsS0FBSzBsQixhQUFMLENBQW1CNWxCLE1BQXRDLEdBQTZDd2QsSUFBSSxDQUFDd0QsR0FBTCxDQUFTeEQsSUFBSSxDQUFDdUQsR0FBTCxDQUFTN2dCLENBQVQsRUFBVyxDQUFYLENBQVQsRUFBdUIsS0FBSzBsQixhQUFMLENBQW1CNWxCLE1BQW5CLEdBQTBCLEtBQUtpbUIsT0FBdEQsQ0FBL0QsRUFBOEgxbUIsQ0FBQyxLQUFHLEtBQUt1bUIsWUFBVCxLQUF3QixLQUFLZ0MsY0FBTCxJQUFzQixLQUFLclosTUFBTCxDQUFZMEUsUUFBWixDQUFxQm5LLElBQXJCLENBQTBCLElBQTFCLENBQXRCLEVBQXNEcEosQ0FBQyxJQUFFQSxDQUFDLENBQUNvSixJQUFGLENBQU8sSUFBUCxDQUFqRixDQUE5SDtBQUE2TjtBQUFDO0FBQXJVLE9BQTE5SixFQUFpeUs7QUFBQ3dDLFdBQUcsRUFBQyxnQkFBTDtBQUFzQmpILGFBQUssRUFBQyxlQUFTckUsQ0FBVCxFQUFXO0FBQUMsY0FBSU4sQ0FBQyxHQUFDLElBQU47QUFBQSxjQUFXTCxDQUFDLEdBQUMsS0FBS2tQLE1BQUwsQ0FBWXNYLElBQVosR0FBaUIsS0FBS0QsWUFBTCxHQUFrQixLQUFLRyxPQUF4QyxHQUFnRCxLQUFLSCxZQUFsRTtBQUFBLGNBQStFdmtCLENBQUMsR0FBQyxDQUFDLEtBQUtrTixNQUFMLENBQVkyWSxHQUFaLEdBQWdCLENBQWhCLEdBQWtCLENBQUMsQ0FBcEIsSUFBdUI3bkIsQ0FBdkIsSUFBMEIsS0FBS21tQixhQUFMLEdBQW1CLEtBQUtPLE9BQWxELENBQWpGO0FBQTRJL2xCLFdBQUMsR0FBQzhDLHFCQUFxQixDQUFDLFlBQVU7QUFBQ0EsaUNBQXFCLENBQUMsWUFBVTtBQUFDcEQsZUFBQyxDQUFDNG5CLGdCQUFGLElBQXFCNW5CLENBQUMsQ0FBQzJuQixXQUFGLENBQWN0bEIsS0FBZCxDQUFvQnJDLENBQUMsQ0FBQ3NtQixpQkFBdEIsSUFBeUMsaUJBQWUza0IsQ0FBZixHQUFpQixXQUEvRTtBQUEyRixhQUF2RyxDQUFyQjtBQUE4SCxXQUExSSxDQUF0QixHQUFrSyxLQUFLZ21CLFdBQUwsQ0FBaUJ0bEIsS0FBakIsQ0FBdUIsS0FBS2lrQixpQkFBNUIsSUFBK0MsaUJBQWUza0IsQ0FBZixHQUFpQixXQUFuTztBQUErTztBQUFuYSxPQUFqeUssRUFBc3NMO0FBQUNpSyxXQUFHLEVBQUMsaUJBQUw7QUFBdUJqSCxhQUFLLEVBQUMsaUJBQVU7QUFBQyxjQUFJckUsQ0FBQyxHQUFDLENBQUMsS0FBS3VPLE1BQUwsQ0FBWTJZLEdBQVosR0FBZ0IsQ0FBQyxDQUFqQixHQUFtQixDQUFwQixLQUF3QixLQUFLZCxJQUFMLENBQVVFLElBQVYsR0FBZSxLQUFLRixJQUFMLENBQVVDLE1BQWpELENBQU47QUFBQSxjQUErRDNtQixDQUFDLEdBQUM0ZCxJQUFJLENBQUM2SyxHQUFMLENBQVNub0IsQ0FBVCxDQUFqRTtBQUFBLGNBQTZFWCxDQUFDLEdBQUMsS0FBS2tQLE1BQUwsQ0FBWTZaLFlBQVosR0FBeUI5SyxJQUFJLENBQUMrSyxJQUFMLENBQVUzb0IsQ0FBQyxJQUFFLEtBQUs4bEIsYUFBTCxHQUFtQixLQUFLTyxPQUExQixDQUFYLENBQXpCLEdBQXdFLENBQXZKO0FBQUEsY0FBeUoxa0IsQ0FBQyxHQUFDckIsQ0FBQyxHQUFDLENBQUYsSUFBSyxLQUFLNGxCLFlBQUwsR0FBa0J2bUIsQ0FBbEIsR0FBb0IsQ0FBcEw7QUFBQSxjQUFzTDZCLENBQUMsR0FBQ2xCLENBQUMsR0FBQyxDQUFGLElBQUssS0FBSzRsQixZQUFMLEdBQWtCdm1CLENBQWxCLEdBQW9CLEtBQUtxbUIsYUFBTCxDQUFtQjVsQixNQUFuQixHQUEwQixLQUFLaW1CLE9BQWhQO0FBQXdQL2xCLFdBQUMsR0FBQyxDQUFGLElBQUtOLENBQUMsR0FBQyxLQUFLNk8sTUFBTCxDQUFZN0YsU0FBbkIsSUFBOEIsS0FBS2dkLGFBQUwsQ0FBbUI1bEIsTUFBbkIsR0FBMEIsS0FBS2ltQixPQUE3RCxHQUFxRSxLQUFLdUMsSUFBTCxDQUFVanBCLENBQVYsQ0FBckUsR0FBa0ZXLENBQUMsR0FBQyxDQUFGLElBQUtOLENBQUMsR0FBQyxLQUFLNk8sTUFBTCxDQUFZN0YsU0FBbkIsSUFBOEIsS0FBS2dkLGFBQUwsQ0FBbUI1bEIsTUFBbkIsR0FBMEIsS0FBS2ltQixPQUE3RCxJQUFzRSxLQUFLd0MsSUFBTCxDQUFVbHBCLENBQVYsQ0FBeEosRUFBcUssS0FBS3VvQixjQUFMLENBQW9Cdm1CLENBQUMsSUFBRUgsQ0FBdkIsQ0FBcks7QUFBK0w7QUFBL2QsT0FBdHNMLEVBQXVxTTtBQUFDb0ssV0FBRyxFQUFDLGVBQUw7QUFBcUJqSCxhQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFLa2hCLG1CQUFMLElBQTJCLEtBQUtLLFlBQUwsR0FBa0IsS0FBS0csT0FBdkIsR0FBK0IsS0FBS0wsYUFBTCxDQUFtQjVsQixNQUFsRCxLQUEyRCxLQUFLOGxCLFlBQUwsR0FBa0IsS0FBS0YsYUFBTCxDQUFtQjVsQixNQUFuQixJQUEyQixLQUFLaW1CLE9BQWhDLEdBQXdDLENBQXhDLEdBQTBDLEtBQUtMLGFBQUwsQ0FBbUI1bEIsTUFBbkIsR0FBMEIsS0FBS2ltQixPQUF0SixDQUEzQixFQUEwTCxLQUFLUCxhQUFMLEdBQW1CLEtBQUtoZCxRQUFMLENBQWNpZCxXQUEzTixFQUF1TyxLQUFLMEIsZ0JBQUwsRUFBdk87QUFBK1A7QUFBclMsT0FBdnFNLEVBQTg4TTtBQUFDN2IsV0FBRyxFQUFDLFdBQUw7QUFBaUJqSCxhQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFLK2hCLElBQUwsR0FBVTtBQUFDQyxrQkFBTSxFQUFDLENBQVI7QUFBVUMsZ0JBQUksRUFBQyxDQUFmO0FBQWlCQyxrQkFBTSxFQUFDLENBQXhCO0FBQTBCQyxtQkFBTyxFQUFDLElBQWxDO0FBQXVDQyx3QkFBWSxFQUFDLEtBQUtMLElBQUwsQ0FBVUs7QUFBOUQsV0FBVjtBQUFzRjtBQUF4SCxPQUE5OE0sRUFBd2tOO0FBQUNuYixXQUFHLEVBQUMsbUJBQUw7QUFBeUJqSCxhQUFLLEVBQUMsZUFBU3JFLENBQVQsRUFBVztBQUFDLFdBQUMsQ0FBRCxLQUFLLENBQUMsVUFBRCxFQUFZLFFBQVosRUFBcUIsT0FBckIsRUFBNkIsUUFBN0IsRUFBdUN5USxPQUF2QyxDQUErQ3pRLENBQUMsQ0FBQ21DLE1BQUYsQ0FBUzRoQixRQUF4RCxDQUFMLEtBQXlFL2pCLENBQUMsQ0FBQ3dvQixlQUFGLElBQW9CLEtBQUtyQyxXQUFMLEdBQWlCLENBQUMsQ0FBdEMsRUFBd0MsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQWlCcm1CLENBQUMsQ0FBQ3lvQixPQUFGLENBQVUsQ0FBVixFQUFhQyxLQUF0RSxFQUE0RSxLQUFLdEMsSUFBTCxDQUFVRyxNQUFWLEdBQWlCdm1CLENBQUMsQ0FBQ3lvQixPQUFGLENBQVUsQ0FBVixFQUFhRSxLQUFuTDtBQUEwTDtBQUFyTyxPQUF4a04sRUFBK3lOO0FBQUNyZCxXQUFHLEVBQUMsaUJBQUw7QUFBdUJqSCxhQUFLLEVBQUMsZUFBU3JFLENBQVQsRUFBVztBQUFDQSxXQUFDLENBQUN3b0IsZUFBRixJQUFvQixLQUFLckMsV0FBTCxHQUFpQixDQUFDLENBQXRDLEVBQXdDLEtBQUttQixnQkFBTCxFQUF4QyxFQUFnRSxLQUFLbEIsSUFBTCxDQUFVRSxJQUFWLElBQWdCLEtBQUtzQyxlQUFMLEVBQWhGLEVBQXVHLEtBQUtDLFNBQUwsRUFBdkc7QUFBd0g7QUFBakssT0FBL3lOLEVBQWs5TjtBQUFDdmQsV0FBRyxFQUFDLGtCQUFMO0FBQXdCakgsYUFBSyxFQUFDLGVBQVNyRSxDQUFULEVBQVc7QUFBQyxjQUFHQSxDQUFDLENBQUN3b0IsZUFBRixJQUFvQixTQUFPLEtBQUtwQyxJQUFMLENBQVVJLE9BQWpCLEtBQTJCLEtBQUtKLElBQUwsQ0FBVUksT0FBVixHQUFrQmxKLElBQUksQ0FBQzZLLEdBQUwsQ0FBUyxLQUFLL0IsSUFBTCxDQUFVRyxNQUFWLEdBQWlCdm1CLENBQUMsQ0FBQ3lvQixPQUFGLENBQVUsQ0FBVixFQUFhRSxLQUF2QyxJQUE4Q3JMLElBQUksQ0FBQzZLLEdBQUwsQ0FBUyxLQUFLL0IsSUFBTCxDQUFVQyxNQUFWLEdBQWlCcm1CLENBQUMsQ0FBQ3lvQixPQUFGLENBQVUsQ0FBVixFQUFhQyxLQUF2QyxDQUEzRixDQUFwQixFQUE4SixLQUFLdkMsV0FBTCxJQUFrQixLQUFLQyxJQUFMLENBQVVJLE9BQTdMLEVBQXFNO0FBQUN4bUIsYUFBQyxDQUFDdUMsY0FBRixJQUFtQixLQUFLNmpCLElBQUwsQ0FBVUUsSUFBVixHQUFldG1CLENBQUMsQ0FBQ3lvQixPQUFGLENBQVUsQ0FBVixFQUFhQyxLQUEvQyxFQUFxRCxLQUFLckIsV0FBTCxDQUFpQnRsQixLQUFqQixDQUF1QmltQixnQkFBdkIsR0FBd0MsYUFBVyxLQUFLelosTUFBTCxDQUFZMFosTUFBcEgsRUFBMkgsS0FBS1osV0FBTCxDQUFpQnRsQixLQUFqQixDQUF1Qm1tQixVQUF2QixHQUFrQyxhQUFXLEtBQUszWixNQUFMLENBQVkwWixNQUFwTDtBQUEyTCxnQkFBSXZvQixDQUFDLEdBQUMsS0FBSzZPLE1BQUwsQ0FBWXNYLElBQVosR0FBaUIsS0FBS0QsWUFBTCxHQUFrQixLQUFLRyxPQUF4QyxHQUFnRCxLQUFLSCxZQUEzRDtBQUFBLGdCQUF3RXZtQixDQUFDLEdBQUNLLENBQUMsSUFBRSxLQUFLOGxCLGFBQUwsR0FBbUIsS0FBS08sT0FBMUIsQ0FBM0U7QUFBQSxnQkFBOEcxa0IsQ0FBQyxHQUFDLEtBQUsra0IsSUFBTCxDQUFVRSxJQUFWLEdBQWUsS0FBS0YsSUFBTCxDQUFVQyxNQUF6STtBQUFBLGdCQUFnSm5sQixDQUFDLEdBQUMsS0FBS3FOLE1BQUwsQ0FBWTJZLEdBQVosR0FBZ0I3bkIsQ0FBQyxHQUFDZ0MsQ0FBbEIsR0FBb0JoQyxDQUFDLEdBQUNnQyxDQUF4SztBQUEwSyxpQkFBS2dtQixXQUFMLENBQWlCdGxCLEtBQWpCLENBQXVCLEtBQUtpa0IsaUJBQTVCLElBQStDLGlCQUFlLENBQUMsS0FBS3pYLE1BQUwsQ0FBWTJZLEdBQVosR0FBZ0IsQ0FBaEIsR0FBa0IsQ0FBQyxDQUFwQixJQUF1QmhtQixDQUF0QyxHQUF3QyxXQUF2RjtBQUFtRztBQUFDO0FBQXpyQixPQUFsOU4sRUFBNm9QO0FBQUNvSyxXQUFHLEVBQUMsa0JBQUw7QUFBd0JqSCxhQUFLLEVBQUMsZUFBU3JFLENBQVQsRUFBVztBQUFDLFdBQUMsQ0FBRCxLQUFLLENBQUMsVUFBRCxFQUFZLFFBQVosRUFBcUIsT0FBckIsRUFBNkIsUUFBN0IsRUFBdUN5USxPQUF2QyxDQUErQ3pRLENBQUMsQ0FBQ21DLE1BQUYsQ0FBUzRoQixRQUF4RCxDQUFMLEtBQXlFL2pCLENBQUMsQ0FBQ3VDLGNBQUYsSUFBbUJ2QyxDQUFDLENBQUN3b0IsZUFBRixFQUFuQixFQUF1QyxLQUFLckMsV0FBTCxHQUFpQixDQUFDLENBQXpELEVBQTJELEtBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFpQnJtQixDQUFDLENBQUMwb0IsS0FBdko7QUFBOEo7QUFBeE0sT0FBN29QLEVBQXUxUDtBQUFDcGQsV0FBRyxFQUFDLGdCQUFMO0FBQXNCakgsYUFBSyxFQUFDLGVBQVNyRSxDQUFULEVBQVc7QUFBQ0EsV0FBQyxDQUFDd29CLGVBQUYsSUFBb0IsS0FBS3JDLFdBQUwsR0FBaUIsQ0FBQyxDQUF0QyxFQUF3QyxLQUFLM2QsUUFBTCxDQUFjekcsS0FBZCxDQUFvQndsQixNQUFwQixHQUEyQixjQUFuRSxFQUFrRixLQUFLRCxnQkFBTCxFQUFsRixFQUEwRyxLQUFLbEIsSUFBTCxDQUFVRSxJQUFWLElBQWdCLEtBQUtzQyxlQUFMLEVBQTFILEVBQWlKLEtBQUtDLFNBQUwsRUFBako7QUFBa0s7QUFBMU0sT0FBdjFQLEVBQW1pUTtBQUFDdmQsV0FBRyxFQUFDLGtCQUFMO0FBQXdCakgsYUFBSyxFQUFDLGVBQVNyRSxDQUFULEVBQVc7QUFBQyxjQUFHQSxDQUFDLENBQUN1QyxjQUFGLElBQW1CLEtBQUs0akIsV0FBM0IsRUFBdUM7QUFBQyxvQkFBTW5tQixDQUFDLENBQUNtQyxNQUFGLENBQVM0aEIsUUFBZixLQUEwQixLQUFLcUMsSUFBTCxDQUFVSyxZQUFWLEdBQXVCLENBQUMsQ0FBbEQsR0FBcUQsS0FBS0wsSUFBTCxDQUFVRSxJQUFWLEdBQWV0bUIsQ0FBQyxDQUFDMG9CLEtBQXRFLEVBQTRFLEtBQUtsZ0IsUUFBTCxDQUFjekcsS0FBZCxDQUFvQndsQixNQUFwQixHQUEyQixrQkFBdkcsRUFBMEgsS0FBS0YsV0FBTCxDQUFpQnRsQixLQUFqQixDQUF1QmltQixnQkFBdkIsR0FBd0MsYUFBVyxLQUFLelosTUFBTCxDQUFZMFosTUFBekwsRUFBZ00sS0FBS1osV0FBTCxDQUFpQnRsQixLQUFqQixDQUF1Qm1tQixVQUF2QixHQUFrQyxhQUFXLEtBQUszWixNQUFMLENBQVkwWixNQUF6UDtBQUFnUSxnQkFBSXZvQixDQUFDLEdBQUMsS0FBSzZPLE1BQUwsQ0FBWXNYLElBQVosR0FBaUIsS0FBS0QsWUFBTCxHQUFrQixLQUFLRyxPQUF4QyxHQUFnRCxLQUFLSCxZQUEzRDtBQUFBLGdCQUF3RXZtQixDQUFDLEdBQUNLLENBQUMsSUFBRSxLQUFLOGxCLGFBQUwsR0FBbUIsS0FBS08sT0FBMUIsQ0FBM0U7QUFBQSxnQkFBOEcxa0IsQ0FBQyxHQUFDLEtBQUsra0IsSUFBTCxDQUFVRSxJQUFWLEdBQWUsS0FBS0YsSUFBTCxDQUFVQyxNQUF6STtBQUFBLGdCQUFnSm5sQixDQUFDLEdBQUMsS0FBS3FOLE1BQUwsQ0FBWTJZLEdBQVosR0FBZ0I3bkIsQ0FBQyxHQUFDZ0MsQ0FBbEIsR0FBb0JoQyxDQUFDLEdBQUNnQyxDQUF4SztBQUEwSyxpQkFBS2dtQixXQUFMLENBQWlCdGxCLEtBQWpCLENBQXVCLEtBQUtpa0IsaUJBQTVCLElBQStDLGlCQUFlLENBQUMsS0FBS3pYLE1BQUwsQ0FBWTJZLEdBQVosR0FBZ0IsQ0FBaEIsR0FBa0IsQ0FBQyxDQUFwQixJQUF1QmhtQixDQUF0QyxHQUF3QyxXQUF2RjtBQUFtRztBQUFDO0FBQWhtQixPQUFuaVEsRUFBcW9SO0FBQUNvSyxXQUFHLEVBQUMsbUJBQUw7QUFBeUJqSCxhQUFLLEVBQUMsZUFBU3JFLENBQVQsRUFBVztBQUFDLGVBQUttbUIsV0FBTCxLQUFtQixLQUFLQSxXQUFMLEdBQWlCLENBQUMsQ0FBbEIsRUFBb0IsS0FBSzNkLFFBQUwsQ0FBY3pHLEtBQWQsQ0FBb0J3bEIsTUFBcEIsR0FBMkIsY0FBL0MsRUFBOEQsS0FBS25CLElBQUwsQ0FBVUUsSUFBVixHQUFldG1CLENBQUMsQ0FBQzBvQixLQUEvRSxFQUFxRixLQUFLdEMsSUFBTCxDQUFVSyxZQUFWLEdBQXVCLENBQUMsQ0FBN0csRUFBK0csS0FBS2EsZ0JBQUwsRUFBL0csRUFBdUksS0FBS3NCLGVBQUwsRUFBdkksRUFBOEosS0FBS0MsU0FBTCxFQUFqTDtBQUFtTTtBQUE5TyxPQUFyb1IsRUFBcTNSO0FBQUN2ZCxXQUFHLEVBQUMsY0FBTDtBQUFvQmpILGFBQUssRUFBQyxlQUFTckUsQ0FBVCxFQUFXO0FBQUMsZUFBS29tQixJQUFMLENBQVVLLFlBQVYsSUFBd0J6bUIsQ0FBQyxDQUFDdUMsY0FBRixFQUF4QixFQUEyQyxLQUFLNmpCLElBQUwsQ0FBVUssWUFBVixHQUF1QixDQUFDLENBQW5FO0FBQXFFO0FBQTNHLE9BQXIzUixFQUFrK1I7QUFBQ25iLFdBQUcsRUFBQyxRQUFMO0FBQWNqSCxhQUFLLEVBQUMsZUFBU3JFLENBQVQsRUFBV04sQ0FBWCxFQUFhO0FBQUMsY0FBR00sQ0FBQyxHQUFDLENBQUYsSUFBS0EsQ0FBQyxJQUFFLEtBQUswbEIsYUFBTCxDQUFtQjVsQixNQUE5QixFQUFxQyxNQUFNLElBQUlvSCxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUFtRCxjQUFJN0gsQ0FBQyxHQUFDVyxDQUFDLEdBQUMsS0FBSzRsQixZQUFiO0FBQUEsY0FBMEJ2a0IsQ0FBQyxHQUFDLEtBQUt1a0IsWUFBTCxHQUFrQixLQUFLRyxPQUF2QixHQUErQixDQUEvQixLQUFtQy9sQixDQUEvRDtBQUFpRSxXQUFDWCxDQUFDLElBQUVnQyxDQUFKLEtBQVEsS0FBS3VrQixZQUFMLEVBQVIsRUFBNEIsS0FBS0YsYUFBTCxDQUFtQjllLE1BQW5CLENBQTBCNUcsQ0FBMUIsRUFBNEIsQ0FBNUIsQ0FBNUIsRUFBMkQsS0FBS21uQixnQkFBTCxFQUEzRCxFQUFtRnpuQixDQUFDLElBQUVBLENBQUMsQ0FBQ29KLElBQUYsQ0FBTyxJQUFQLENBQXRGO0FBQW1HO0FBQTlSLE9BQWwrUixFQUFrd1M7QUFBQ3dDLFdBQUcsRUFBQyxRQUFMO0FBQWNqSCxhQUFLLEVBQUMsZUFBU3JFLENBQVQsRUFBV04sQ0FBWCxFQUFhTCxDQUFiLEVBQWU7QUFBQyxjQUFHSyxDQUFDLEdBQUMsQ0FBRixJQUFLQSxDQUFDLEdBQUMsS0FBS2dtQixhQUFMLENBQW1CNWxCLE1BQW5CLEdBQTBCLENBQXBDLEVBQXNDLE1BQU0sSUFBSW9ILEtBQUosQ0FBVSxxQ0FBVixDQUFOO0FBQXVELGNBQUcsQ0FBQyxDQUFELEtBQUssS0FBS3dlLGFBQUwsQ0FBbUJqVixPQUFuQixDQUEyQnpRLENBQTNCLENBQVIsRUFBc0MsTUFBTSxJQUFJa0gsS0FBSixDQUFVLDhDQUFWLENBQU47QUFBZ0UsY0FBSTdGLENBQUMsR0FBQzNCLENBQUMsSUFBRSxLQUFLa21CLFlBQVIsR0FBcUIsQ0FBckIsSUFBd0IsS0FBS0YsYUFBTCxDQUFtQjVsQixNQUFqRDtBQUF3RCxlQUFLOGxCLFlBQUwsR0FBa0J2a0IsQ0FBQyxHQUFDLEtBQUt1a0IsWUFBTCxHQUFrQixDQUFuQixHQUFxQixLQUFLQSxZQUE3QyxFQUEwRCxLQUFLRixhQUFMLENBQW1COWUsTUFBbkIsQ0FBMEJsSCxDQUExQixFQUE0QixDQUE1QixFQUE4Qk0sQ0FBOUIsQ0FBMUQsRUFBMkYsS0FBS21uQixnQkFBTCxFQUEzRixFQUFtSDluQixDQUFDLElBQUVBLENBQUMsQ0FBQ3lKLElBQUYsQ0FBTyxJQUFQLENBQXRIO0FBQW1JO0FBQWxhLE9BQWx3UyxFQUFzcVQ7QUFBQ3dDLFdBQUcsRUFBQyxTQUFMO0FBQWVqSCxhQUFLLEVBQUMsZUFBU3JFLENBQVQsRUFBV04sQ0FBWCxFQUFhO0FBQUMsZUFBS29wQixNQUFMLENBQVk5b0IsQ0FBWixFQUFjLENBQWQsR0FBaUJOLENBQUMsSUFBRUEsQ0FBQyxDQUFDb0osSUFBRixDQUFPLElBQVAsQ0FBcEI7QUFBaUM7QUFBcEUsT0FBdHFULEVBQTR1VDtBQUFDd0MsV0FBRyxFQUFDLFFBQUw7QUFBY2pILGFBQUssRUFBQyxlQUFTckUsQ0FBVCxFQUFXTixDQUFYLEVBQWE7QUFBQyxlQUFLb3BCLE1BQUwsQ0FBWTlvQixDQUFaLEVBQWMsS0FBSzBsQixhQUFMLENBQW1CNWxCLE1BQW5CLEdBQTBCLENBQXhDLEdBQTJDSixDQUFDLElBQUVBLENBQUMsQ0FBQ29KLElBQUYsQ0FBTyxJQUFQLENBQTlDO0FBQTJEO0FBQTdGLE9BQTV1VCxFQUEyMFQ7QUFBQ3dDLFdBQUcsRUFBQyxTQUFMO0FBQWVqSCxhQUFLLEVBQUMsaUJBQVU7QUFBQyxjQUFJckUsQ0FBQyxHQUFDMEMsU0FBUyxDQUFDNUMsTUFBVixHQUFpQixDQUFqQixJQUFvQixLQUFLLENBQUwsS0FBUzRDLFNBQVMsQ0FBQyxDQUFELENBQXRDLElBQTJDQSxTQUFTLENBQUMsQ0FBRCxDQUExRDtBQUFBLGNBQThEaEQsQ0FBQyxHQUFDZ0QsU0FBUyxDQUFDLENBQUQsQ0FBekU7O0FBQTZFLGNBQUcsS0FBS2EsWUFBTCxJQUFvQixLQUFLaUYsUUFBTCxDQUFjekcsS0FBZCxDQUFvQndsQixNQUFwQixHQUEyQixNQUEvQyxFQUFzRHZuQixDQUF6RCxFQUEyRDtBQUFDLGlCQUFJLElBQUlYLENBQUMsR0FBQ3lCLFFBQVEsQ0FBQzBtQixzQkFBVCxFQUFOLEVBQXdDbm1CLENBQUMsR0FBQyxDQUE5QyxFQUFnREEsQ0FBQyxHQUFDLEtBQUtxa0IsYUFBTCxDQUFtQjVsQixNQUFyRSxFQUE0RXVCLENBQUMsRUFBN0U7QUFBZ0ZoQyxlQUFDLENBQUMwZ0IsV0FBRixDQUFjLEtBQUsyRixhQUFMLENBQW1CcmtCLENBQW5CLENBQWQ7QUFBaEY7O0FBQXFILGlCQUFLbUgsUUFBTCxDQUFjbWYsU0FBZCxHQUF3QixFQUF4QixFQUEyQixLQUFLbmYsUUFBTCxDQUFjdVgsV0FBZCxDQUEwQjFnQixDQUExQixDQUEzQixFQUF3RCxLQUFLbUosUUFBTCxDQUFjdWdCLGVBQWQsQ0FBOEIsT0FBOUIsQ0FBeEQ7QUFBK0Y7O0FBQUFycEIsV0FBQyxJQUFFQSxDQUFDLENBQUNvSixJQUFGLENBQU8sSUFBUCxDQUFIO0FBQWdCO0FBQTdZLE9BQTMwVCxDQUFILEVBQTh0VSxDQUFDO0FBQUN3QyxXQUFHLEVBQUMsZUFBTDtBQUFxQmpILGFBQUssRUFBQyxlQUFTckUsQ0FBVCxFQUFXO0FBQUMsY0FBSU4sQ0FBQyxHQUFDO0FBQUM4SSxvQkFBUSxFQUFDLFFBQVY7QUFBbUJySSxvQkFBUSxFQUFDLEdBQTVCO0FBQWdDOG5CLGtCQUFNLEVBQUMsVUFBdkM7QUFBa0RsQyxtQkFBTyxFQUFDLENBQTFEO0FBQTRERCxzQkFBVSxFQUFDLENBQXZFO0FBQXlFSSxxQkFBUyxFQUFDLENBQUMsQ0FBcEY7QUFBc0ZrQyx3QkFBWSxFQUFDLENBQUMsQ0FBcEc7QUFBc0cxZixxQkFBUyxFQUFDLEVBQWhIO0FBQW1IbWQsZ0JBQUksRUFBQyxDQUFDLENBQXpIO0FBQTJIcUIsZUFBRyxFQUFDLENBQUMsQ0FBaEk7QUFBa0lFLGtCQUFNLEVBQUMsa0JBQVUsQ0FBRSxDQUFySjtBQUFzSm5VLG9CQUFRLEVBQUMsb0JBQVUsQ0FBRTtBQUEzSyxXQUFOO0FBQUEsY0FBbUw1VCxDQUFDLEdBQUNXLENBQXJMOztBQUF1TCxlQUFJLElBQUlxQixDQUFSLElBQWFoQyxDQUFiO0FBQWVLLGFBQUMsQ0FBQzJCLENBQUQsQ0FBRCxHQUFLaEMsQ0FBQyxDQUFDZ0MsQ0FBRCxDQUFOO0FBQWY7O0FBQXlCLGlCQUFPM0IsQ0FBUDtBQUFTO0FBQWhRLE9BQUQsRUFBbVE7QUFBQzRMLFdBQUcsRUFBQyxhQUFMO0FBQW1CakgsYUFBSyxFQUFDLGlCQUFVO0FBQUMsaUJBQU0sWUFBVSxPQUFPdkQsUUFBUSxDQUFDMkMsZUFBVCxDQUF5QjFCLEtBQXpCLENBQStCaW5CLFNBQWhELEdBQTBELFdBQTFELEdBQXNFLGlCQUE1RTtBQUE4RjtBQUFsSSxPQUFuUSxDQUE5dFUsQ0FBRCxFQUF3bVZocEIsQ0FBL21WO0FBQWluVixLQUE5NlcsRUFBdmM7O0FBQXczWE4sS0FBQyxXQUFELEdBQVVGLENBQVYsRUFBWVEsQ0FBQyxDQUFDZ0UsT0FBRixHQUFVdEUsQ0FBQyxXQUF2QjtBQUFnQyxHQUFya1ksQ0FBbGQsQ0FBUDtBQUFpaVosQ0FBcnhaLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFJK2lCLENBQUosQyxDQUVBOztBQUNBQSxDQUFDLEdBQUksWUFBVztBQUNmLFNBQU8sSUFBUDtBQUNBLENBRkcsRUFBSjs7QUFJQSxJQUFJO0FBQ0g7QUFDQUEsR0FBQyxHQUFHQSxDQUFDLElBQUksSUFBSWxNLFFBQUosQ0FBYSxhQUFiLEdBQVQ7QUFDQSxDQUhELENBR0UsT0FBT3ZXLENBQVAsRUFBVTtBQUNYO0FBQ0EsTUFBSSxRQUFPa0UsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQ3VlLENBQUMsR0FBR3ZlLE1BQUo7QUFDaEMsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBRUFILE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnllLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDbkJBMWUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVNELE1BQVQsRUFBaUI7QUFDakMsTUFBSSxDQUFDQSxNQUFNLENBQUNrbEIsZUFBWixFQUE2QjtBQUM1QmxsQixVQUFNLENBQUNtbEIsU0FBUCxHQUFtQixZQUFXLENBQUUsQ0FBaEM7O0FBQ0FubEIsVUFBTSxDQUFDb2xCLEtBQVAsR0FBZSxFQUFmLENBRjRCLENBRzVCOztBQUNBLFFBQUksQ0FBQ3BsQixNQUFNLENBQUM0aEIsUUFBWixFQUFzQjVoQixNQUFNLENBQUM0aEIsUUFBUCxHQUFrQixFQUFsQjtBQUN0QnhoQixVQUFNLENBQUNDLGNBQVAsQ0FBc0JMLE1BQXRCLEVBQThCLFFBQTlCLEVBQXdDO0FBQ3ZDb0gsZ0JBQVUsRUFBRSxJQUQyQjtBQUV2QzRILFNBQUcsRUFBRSxlQUFXO0FBQ2YsZUFBT2hQLE1BQU0sQ0FBQ3ZFLENBQWQ7QUFDQTtBQUpzQyxLQUF4QztBQU1BMkUsVUFBTSxDQUFDQyxjQUFQLENBQXNCTCxNQUF0QixFQUE4QixJQUE5QixFQUFvQztBQUNuQ29ILGdCQUFVLEVBQUUsSUFEdUI7QUFFbkM0SCxTQUFHLEVBQUUsZUFBVztBQUNmLGVBQU9oUCxNQUFNLENBQUMxRSxDQUFkO0FBQ0E7QUFKa0MsS0FBcEM7QUFNQTBFLFVBQU0sQ0FBQ2tsQixlQUFQLEdBQXlCLENBQXpCO0FBQ0E7O0FBQ0QsU0FBT2xsQixNQUFQO0FBQ0EsQ0FyQkQsQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFJcWxCLGFBQWEsR0FBTSxzQkFBdkI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBR3ZvQixRQUFRLENBQUNHLGdCQUFULENBQTBCbW9CLGFBQTFCLENBQXZCOztBQUVBLElBQUlDLGdCQUFnQixDQUFDdnBCLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDO0FBQzdCLE1BQUltRSxtREFBSixDQUFjbWxCLGFBQWQ7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRDs7QUFFQSxJQUFJLENBQUNqbEIsTUFBTSxDQUFDdUYsT0FBWixFQUFxQjtBQUNqQnZGLFFBQU0sQ0FBQ3VGLE9BQVAsR0FBaUIsVUFBVVYsR0FBVixFQUFlO0FBQzVCLFFBQUlzZ0IsUUFBUSxHQUFHbmxCLE1BQU0sQ0FBQ3NWLElBQVAsQ0FBYXpRLEdBQWIsQ0FBZjtBQUFBLFFBQ0kzSixDQUFDLEdBQUdpcUIsUUFBUSxDQUFDeHBCLE1BRGpCO0FBQUEsUUFFSXlwQixRQUFRLEdBQUcsSUFBSTNwQixLQUFKLENBQVVQLENBQVYsQ0FGZjs7QUFHQSxXQUFPQSxDQUFDLEVBQVI7QUFDQWtxQixjQUFRLENBQUNscUIsQ0FBRCxDQUFSLEdBQWMsQ0FBQ2lxQixRQUFRLENBQUNqcUIsQ0FBRCxDQUFULEVBQWMySixHQUFHLENBQUNzZ0IsUUFBUSxDQUFDanFCLENBQUQsQ0FBVCxDQUFqQixDQUFkO0FBREE7O0FBR0EsV0FBT2txQixRQUFQO0FBQ0gsR0FSRDtBQVNIOztBQUVELElBQUlDLElBQUksR0FBRzFvQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUVBLElBQU0wb0IsWUFBWSxHQUFHO0FBQ2pCQyxJQUFFLEVBQUUsNkJBRGE7QUFFakJDLEtBQUcsRUFBRSwrQkFGWTtBQUdqQkMsS0FBRyxFQUFFLCtCQUhZO0FBSWpCQyxLQUFHLEVBQUUsZ0NBSlk7QUFLakJDLEtBQUcsRUFBRSxnQ0FMWTtBQU1qQkMsSUFBRSxFQUFFLGdDQU5hO0FBT2pCQyxJQUFFLEVBQUUsZ0NBUGE7QUFRakJDLFdBQVMsRUFBRSxxQ0FSTTtBQVNqQkMsU0FBTyxFQUFFO0FBVFEsQ0FBckI7QUFZQS9sQixNQUFNLENBQUN1RixPQUFQLENBQWUrZixZQUFmLEVBQTZCOWYsT0FBN0IsQ0FBcUM7QUFBQTtBQUFBLE1BQUV3Z0IsVUFBRjtBQUFBLE1BQWNDLFVBQWQ7O0FBQUEsU0FDakNDLGlEQUFPLENBQUM5a0IsUUFBUixDQUFrQjZrQixVQUFsQixFQUE4QjtBQUMxQjluQixTQUFLLEVBQUcsaUJBQVc7QUFBRWtuQixVQUFJLENBQUNsb0IsU0FBTCxDQUFlQyxHQUFmLENBQW9CNG9CLFVBQXBCO0FBQW1DLEtBRDlCO0FBRTFCN2tCLFdBQU8sRUFBRyxtQkFBVztBQUFFa2tCLFVBQUksQ0FBQ2xvQixTQUFMLENBQWV5QixNQUFmLENBQXVCb25CLFVBQXZCO0FBQXNDO0FBRm5DLEdBQTlCLENBRGlDO0FBQUEsQ0FBckMsRTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBSTVmLCtDQUFKLEc7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUVBbUMsa0RBQVUsQ0FBQy9NLElBQVgsQ0FBZ0I7QUFDWnVOLFFBQU0sRUFBRSxnQkFBQW1CLEtBQUs7QUFBQSxXQUFJNkMsT0FBTyxDQUFDNkYsSUFBUixXQUFnQjFJLEtBQUssQ0FBQzRDLEVBQXRCLGVBQUo7QUFBQSxHQUREO0FBQzJDO0FBQ3ZEN0QsU0FBTyxFQUFFLGlCQUFBaUIsS0FBSztBQUFBLFdBQUk2QyxPQUFPLENBQUM2RixJQUFSLFdBQWdCMUksS0FBSyxDQUFDNEMsRUFBdEIsZ0JBQUo7QUFBQSxHQUZGO0FBRTZDO0FBQ3pEM0QsYUFBVyxFQUFFLGtCQUhEO0FBR3FCO0FBQ2pDRSxjQUFZLEVBQUUsbUJBSkY7QUFJdUI7QUFDbkNFLFdBQVMsRUFBRSxTQUxDO0FBS1U7QUFDdEJFLGVBQWEsRUFBRSxJQU5IO0FBTVM7QUFDckJFLGNBQVksRUFBRSxLQVBGO0FBT1M7QUFDckJJLG9CQUFrQixFQUFFLEtBUlI7QUFRZTtBQUMzQkYscUJBQW1CLEVBQUUsS0FUVDtBQVNnQjtBQUM1QkksV0FBUyxFQUFFLElBVkMsQ0FVSTs7QUFWSixDQUFoQixFOzs7Ozs7Ozs7OztBQ0ZBLElBQU1rYyxRQUFRLEdBQUd4cEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWpCO0FBQ0EsSUFBTXdwQixRQUFRLEdBQUd6cEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFqQjtBQUNBLElBQU15cEIsUUFBUSxHQUFHMXBCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFqQjtBQUVBLElBQUkwcEIsUUFBUSxHQUFPM3BCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBbkI7QUFDQSxJQUFJc0IsU0FBUyxHQUFNLFVBQW5CO0FBQ0EsSUFBSXFvQixZQUFZLEdBQUcsZUFBbkI7QUFFQSxJQUFNaG1CLFVBQVUsR0FBR1IsTUFBTSxDQUFDYSxVQUFQLENBQWtCLHFCQUFsQixDQUFuQjs7QUFFQSxTQUFTNGxCLGtCQUFULENBQTRCM3FCLENBQTVCLEVBQStCO0FBQzlCO0FBQ0EsTUFBSUEsQ0FBQyxDQUFDNEUsT0FBTixFQUFlO0FBRWQ7QUFDQSxRQUFJNmxCLFFBQVEsQ0FBQ25wQixTQUFiLEVBQXdCO0FBQ3ZCbXBCLGNBQVEsQ0FBQ25wQixTQUFULENBQW1CeUIsTUFBbkIsQ0FBMEJWLFNBQTFCO0FBQ0Fvb0IsY0FBUSxDQUFDbnBCLFNBQVQsQ0FBbUJ5QixNQUFuQixDQUEwQjJuQixZQUExQjtBQUNBRCxjQUFRLENBQUNucEIsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBdkI7QUFDQWtwQixjQUFRLENBQUNucEIsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsaUJBQXZCO0FBQ0E7QUFFRCxHQVZELE1BVUs7QUFFSjtBQUNBLFFBQUlrcEIsUUFBUSxDQUFDbnBCLFNBQWIsRUFBd0I7QUFDdkJtcEIsY0FBUSxDQUFDbnBCLFNBQVQsQ0FBbUJ5QixNQUFuQixDQUEwQixVQUExQjtBQUNBMG5CLGNBQVEsQ0FBQ25wQixTQUFULENBQW1CeUIsTUFBbkIsQ0FBMEIsaUJBQTFCO0FBQ0EwbkIsY0FBUSxDQUFDbnBCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCYyxTQUF2QjtBQUNBb29CLGNBQVEsQ0FBQ25wQixTQUFULENBQW1CQyxHQUFuQixDQUF1Qm1wQixZQUF2QjtBQUNBLEtBTEQsTUFLSztBQUNKRCxjQUFRLENBQUNwb0IsU0FBVCxJQUFzQixNQUFNQSxTQUFOLEdBQWtCLEdBQWxCLEdBQXdCcW9CLFlBQTlDO0FBQ0E7QUFFRDtBQUVELEMsQ0FFRDs7O0FBQ0FobUIsVUFBVSxDQUFDRyxXQUFYLENBQXVCOGxCLGtCQUF2QixFLENBRUE7O0FBQ0FBLGtCQUFrQixDQUFDam1CLFVBQUQsQ0FBbEI7QUFFQTRsQixRQUFRLENBQUNobkIsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBSztBQUN2Q2luQixVQUFRLENBQUNqcEIsU0FBVCxDQUFtQnNCLE1BQW5CLENBQTBCLFFBQTFCO0FBQ0EwbkIsVUFBUSxDQUFDaHBCLFNBQVQsQ0FBbUJzQixNQUFuQixDQUEwQixRQUExQjtBQUNBNG5CLFVBQVEsQ0FBQ2xwQixTQUFULENBQW1Cc0IsTUFBbkIsQ0FBMEIsa0JBQTFCO0FBQ0EsQ0FKRCxFLENBTUE7O0FBQ0EsU0FBU2dvQixXQUFULEdBQXNCO0FBQ2xCLE1BQUcsS0FBSzdwQixhQUFMLENBQW1CLHFCQUFuQixDQUFILEVBQTZDO0FBQy9DLFNBQUtPLFNBQUwsQ0FBZXNCLE1BQWYsQ0FBc0IsaUJBQXRCO0FBQ0c7QUFDSjs7QUFFRDlCLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIseUJBQTFCLEVBQXFEMEksT0FBckQsQ0FBNkQsVUFBU2toQixFQUFULEVBQVk7QUFDeEVBLElBQUUsQ0FBQ3ZuQixnQkFBSCxDQUFvQixPQUFwQixFQUE2QnNuQixXQUE3QjtBQUNBLENBRkQsRTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtDQUVBO0FBQ0E7QUFFQTs7QUFDQSxJQUFJN1UsVUFBVSxHQUFHLElBQUl2RSxrREFBVyxDQUFDSyxVQUFoQixFQUFqQixDLENBRUE7O0FBQ0EsSUFBSUwsa0RBQVcsQ0FBQ3NFLEtBQWhCLENBQXNCO0FBQ2xCM1YsVUFBUSxFQUFFLEdBRFE7QUFDSDtBQUNmeVcsUUFBTSxFQUFFLEVBRlUsQ0FFUDs7QUFGTyxDQUF0QixFQUlLK0gsTUFKTCxDQUlZLFNBSlosRUFJdUI7QUFKdkIsQ0FLSzNJLEtBTEwsQ0FLV0QsVUFMWCxFLENBS3dCLHFDOzs7Ozs7Ozs7Ozs7QUNkeEI7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFJK1UsaUJBQWlCLEdBQUdocUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXhCO0FBQ0EsSUFBSWdxQixhQUFhLEdBQUdqcUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQXBCO0FBQ0EsSUFBSWlxQixTQUFTLEdBQUdscUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWhCO0FBQ0EsSUFBSWtxQixTQUFTLEdBQUcsRUFBaEI7O0FBRUEsSUFBSUgsaUJBQUosRUFBdUI7QUFDbkJHLFdBQVMsR0FBRyxJQUFJQyw0Q0FBSixDQUFVO0FBQ2xCMWlCLFlBQVEsRUFBRSxZQURRO0FBRWxCckksWUFBUSxFQUFFLEdBRlE7QUFHbEI4bkIsVUFBTSxFQUFFLFVBSFU7QUFJbEJsQyxXQUFPLEVBQUUsQ0FKUztBQUtsQkQsY0FBVSxFQUFFLENBTE07QUFNbEJJLGFBQVMsRUFBRSxJQU5PO0FBT2xCa0MsZ0JBQVksRUFBRSxJQVBJO0FBUWxCMWYsYUFBUyxFQUFFLEVBUk87QUFTbEJtZCxRQUFJLEVBQUUsSUFUWTtBQVVsQnFCLE9BQUcsRUFBRSxLQVZhO0FBV2xCRSxVQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQVhFO0FBWWxCblUsWUFBUSxFQUFFLG9CQUFNLENBQUU7QUFaQSxHQUFWLENBQVo7QUFjSDs7QUFFRCxJQUFJOFgsYUFBSixFQUFtQjtBQUNmQSxlQUFhLENBQUN6bkIsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0M7QUFBQSxXQUFNMm5CLFNBQVMsQ0FBQzNDLElBQVYsRUFBTjtBQUFBLEdBQXhDO0FBQ0g7O0FBRUQsSUFBSTBDLFNBQUosRUFBZTtBQUNYQSxXQUFTLENBQUMxbkIsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0M7QUFBQSxXQUFNMm5CLFNBQVMsQ0FBQzFDLElBQVYsRUFBTjtBQUFBLEdBQXBDO0FBQ0gsQyxDQUVELDJFOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIVxyXG4gKiBBY2NvcmRpb24gdjIuOC4wXHJcbiAqIFNpbXBsZSBhY2NvcmRpb24gY3JlYXRlZCBpbiBwdXJlIEphdmFzY3JpcHQuXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNodTJrL0FjY29yZGlvblxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNy0yMDE5IE1pY2hhxYIgU3RydW1wZlxyXG4gKiBQdWJsaXNoZWQgdW5kZXIgTUlUIExpY2Vuc2VcclxuICovXHJcblwidXNlIHN0cmljdFwiOyFmdW5jdGlvbihpKXtmdW5jdGlvbiB1KG8sbCl7dmFyIGM9dGhpcyx0PXtpbml0OmZ1bmN0aW9uKCl7aWYoQXJyYXkuaXNBcnJheShvKSlyZXR1cm4gby5sZW5ndGgmJm8ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgdShlLGwpfSksITE7dGhpcy5vcHRpb25zPWgoe2R1cmF0aW9uOjYwMCxpdGVtTnVtYmVyOjAsYXJpYTohMCxjbG9zZU90aGVyczohMCxzaG93SXRlbTohMSxlbGVtZW50Q2xhc3M6XCJhY1wiLHF1ZXN0aW9uQ2xhc3M6XCJhYy1xXCIsYW5zd2VyQ2xhc3M6XCJhYy1hXCIsdGFyZ2V0Q2xhc3M6XCJhYy10YXJnZXRcIixvblRvZ2dsZTpmdW5jdGlvbigpe319LGwpLHRoaXMuY29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobyksdGhpcy5lbGVtZW50cz10aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMub3B0aW9ucy5lbGVtZW50Q2xhc3MpO3ZhciBlPXRoaXMub3B0aW9ucyx0PWUuYXJpYSxuPWUuc2hvd0l0ZW0saT1lLml0ZW1OdW1iZXI7dCYmdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFibGlzdFwiKTtmb3IodmFyIHM9MDtzPHRoaXMuZWxlbWVudHMubGVuZ3RoO3MrKyl7dmFyIHI9dGhpcy5lbGVtZW50c1tzXTtyLmNsYXNzTGlzdC5hZGQoXCJqcy1lbmFibGVkXCIpLHRoaXMuaGlkZUVsZW1lbnQociksdGhpcy5zZXRUcmFuc2l0aW9uKHIpLHRoaXMuZ2VuZXJhdGVJRChyKSx0JiZ0aGlzLnNldEFSSUEocil9aWYobil7dmFyIGE9dGhpcy5lbGVtZW50c1swXTtcIm51bWJlclwiPT10eXBlb2YgaSYmaTx0aGlzLmVsZW1lbnRzLmxlbmd0aCYmKGE9dGhpcy5lbGVtZW50c1tpXSksdGhpcy50b2dnbGVFbGVtZW50KGEsITEpfWMuYXR0YWNoRXZlbnRzKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLG49dC5kdXJhdGlvbixpPXQuYW5zd2VyQ2xhc3Mscz1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIraSkscj1hKFwidHJhbnNpdGlvblwiKTtzLnN0eWxlW3JdPW4rXCJtc1wifSxnZW5lcmF0ZUlEOmZ1bmN0aW9uKGUpe2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcImFjLVwiLmNvbmNhdChzKSkscysrfSxzZXRBUklBOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucyxuPXQucXVlc3Rpb25DbGFzcyxpPXQuYW5zd2VyQ2xhc3Mscz1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrbikscj1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIraSk7cy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJcIikscy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsXCJmYWxzZVwiKSxyLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYnBhbmVsXCIpfSx1cGRhdGVBUklBOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5vcHRpb25zLnF1ZXN0aW9uQ2xhc3M7ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK24pLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIix0KX0sY2FsbFNwZWNpZmljRWxlbWVudDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS50YXJnZXQsbj10aGlzLm9wdGlvbnMsaT1uLnF1ZXN0aW9uQ2xhc3Mscz1uLnRhcmdldENsYXNzLHI9bi5jbG9zZU90aGVycyxhPTA7YTx0aGlzLmVsZW1lbnRzLmxlbmd0aDthKyspaWYodGhpcy5lbGVtZW50c1thXS5jb250YWlucyh0KSl7KHQuY2xhc3NOYW1lLm1hdGNoKGkpfHx0LmNsYXNzTmFtZS5tYXRjaChzKSkmJihlLnByZXZlbnREZWZhdWx0KCksciYmdGhpcy5jbG9zZUFsbEVsZW1lbnRzKGEpLHRoaXMudG9nZ2xlRWxlbWVudCh0aGlzLmVsZW1lbnRzW2FdKSk7YnJlYWt9fSxoaWRlRWxlbWVudDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMuYW5zd2VyQ2xhc3M7ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK3QpLnN0eWxlLmhlaWdodD0wfSx0b2dnbGVFbGVtZW50OmZ1bmN0aW9uKGUsdCl7dmFyIG4saT0hKDE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dCl8fHQscz10aGlzLm9wdGlvbnMscj1zLmFuc3dlckNsYXNzLGE9cy5hcmlhLG89cy5vblRvZ2dsZSxsPWUucXVlcnlTZWxlY3RvcihcIi5cIityKSxjPWwuc2Nyb2xsSGVpZ2h0O2UuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKSxpfHwobC5zdHlsZS5oZWlnaHQ9XCJhdXRvXCIpLDA8cGFyc2VJbnQobC5zdHlsZS5oZWlnaHQpPyhuPSExLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2wuc3R5bGUuaGVpZ2h0PTB9KSk6KG49ITAscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7bC5zdHlsZS5oZWlnaHQ9YytcInB4XCJ9KSksYSYmdGhpcy51cGRhdGVBUklBKGUsbiksaSYmbyhlLHRoaXMuZWxlbWVudHMpfSxjbG9zZUFsbEVsZW1lbnRzOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD10aGlzLm9wdGlvbnMuYXJpYSxuPXRoaXMuZWxlbWVudHMubGVuZ3RoLGk9MDtpPG47aSsrKWlmKGkhPWUpe3ZhciBzPXRoaXMuZWxlbWVudHNbaV07cy5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1hY3RpdmVcIikmJnMuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKSx0JiZ0aGlzLnVwZGF0ZUFSSUEocywhMSksdGhpcy5oaWRlRWxlbWVudChzKX19LHJlc2l6ZUhhbmRsZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdCxuPXRoaXMub3B0aW9ucyxpPW4uZWxlbWVudENsYXNzLHM9bi5hbnN3ZXJDbGFzcyxyPXRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIraStcIi5pcy1hY3RpdmVcIiksYT0wO2E8ci5sZW5ndGg7YSsrKXQ9clthXS5xdWVyeVNlbGVjdG9yKFwiLlwiK3MpLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3Quc3R5bGUuaGVpZ2h0PVwiYXV0b1wiLGU9dC5vZmZzZXRIZWlnaHQscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5zdHlsZS5oZWlnaHQ9ZStcInB4XCJ9KX0pfSxjbGlja0hhbmRsZXI6ZnVuY3Rpb24oZSl7dGhpcy5jYWxsU3BlY2lmaWNFbGVtZW50KGUpfSxrZXlkb3duSGFuZGxlcjpmdW5jdGlvbihlKXsxMz09PWUua2V5Q29kZSYmdGhpcy5jYWxsU3BlY2lmaWNFbGVtZW50KGUpfX07dGhpcy5hdHRhY2hFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10O2UuY2xpY2tIYW5kbGVyPWUuY2xpY2tIYW5kbGVyLmJpbmQoZSksZS5rZXlkb3duSGFuZGxlcj1lLmtleWRvd25IYW5kbGVyLmJpbmQoZSksZS5yZXNpemVIYW5kbGVyPWUucmVzaXplSGFuZGxlci5iaW5kKGUpLGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUuY2xpY2tIYW5kbGVyKSxlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUua2V5ZG93bkhhbmRsZXIpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGUucmVzaXplSGFuZGxlcil9LHRoaXMuZGV0YWNoRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dDtlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlLmNsaWNrSGFuZGxlciksZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixlLmtleWRvd25IYW5kbGVyKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixlLnJlc2l6ZUhhbmRsZXIpfTt2YXIgYT1mdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlW2VdP2U6KGU9bihlKSxlPVwid2Via2l0XCIuY29uY2F0KGUpKX0sbj1mdW5jdGlvbihlKXtyZXR1cm4gZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpfSxoPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIHQpZVtuXT10W25dO3JldHVybiBlfTtpLnJlcXVlc3RBbmltYXRpb25GcmFtZT1pLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8aS53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe2kuc2V0VGltZW91dChlLDFlMy82MCl9LHQuaW5pdCgpfXZhciBzPTA7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmdm9pZCAwIT09bW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dTppLkFjY29yZGlvbj11fSh3aW5kb3cpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZW5xdWlyZVNjcmVlbiA9IGVucXVpcmVTY3JlZW47XG5leHBvcnRzLnVuZW5xdWlyZVNjcmVlbiA9IHVuZW5xdWlyZVNjcmVlbjtcbnZhciBlbnF1aXJlSnMgPSB2b2lkIDA7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIG1hdGNoTWVkaWFQb2x5ZmlsbCA9IGZ1bmN0aW9uIG1hdGNoTWVkaWFQb2x5ZmlsbChtZWRpYVF1ZXJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lZGlhOiBtZWRpYVF1ZXJ5LFxuICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkTGlzdGVuZXIoKSB7fSxcbiAgICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcigpIHt9XG4gICAgfTtcbiAgfTtcbiAgd2luZG93Lm1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSB8fCBtYXRjaE1lZGlhUG9seWZpbGw7XG4gIGVucXVpcmVKcyA9IHJlcXVpcmUoJ2VucXVpcmUuanMnKTtcbn1cblxudmFyIG1vYmlsZVF1ZXJ5ID0gJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOTlweCknO1xuXG5mdW5jdGlvbiBlbnF1aXJlU2NyZWVuKGNiKSB7XG4gIHZhciBxdWVyeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbW9iaWxlUXVlcnk7XG5cbiAgaWYgKCFlbnF1aXJlSnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IHtcbiAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2goKSB7XG4gICAgICBjYiAmJiBjYih0cnVlKTtcbiAgICB9LFxuICAgIHVubWF0Y2g6IGZ1bmN0aW9uIHVubWF0Y2goKSB7XG4gICAgICBjYiAmJiBjYigpO1xuICAgIH1cbiAgfTtcbiAgZW5xdWlyZUpzLnJlZ2lzdGVyKHF1ZXJ5LCBoYW5kbGVyKTtcbiAgcmV0dXJuIGhhbmRsZXI7XG59XG5cbmZ1bmN0aW9uIHVuZW5xdWlyZVNjcmVlbihoYW5kbGVyKSB7XG4gIHZhciBxdWVyeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbW9iaWxlUXVlcnk7XG5cbiAgaWYgKCFlbnF1aXJlSnMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZW5xdWlyZUpzLnVucmVnaXN0ZXIocXVlcnksIGhhbmRsZXIpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBlbnF1aXJlSnM7XG4iLCJ2YXIgUXVlcnlIYW5kbGVyID0gcmVxdWlyZSgnLi9RdWVyeUhhbmRsZXInKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9VdGlsJykuZWFjaDtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIG1lZGlhIHF1ZXJ5LCBtYW5hZ2VzIGl0J3Mgc3RhdGUgYW5kIHJlZ2lzdGVyZWQgaGFuZGxlcnMgZm9yIHRoaXMgcXVlcnlcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgbWVkaWEgcXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1VuY29uZGl0aW9uYWw9ZmFsc2VdIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBydW4gcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBjb25kaXRpb25zIGFyZSBtZXQuIFByaW1hcmlseSBmb3IgaGVscGluZyBvbGRlciBicm93c2VycyBkZWFsIHdpdGggbW9iaWxlLWZpcnN0IGRlc2lnblxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5KHF1ZXJ5LCBpc1VuY29uZGl0aW9uYWwpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5pc1VuY29uZGl0aW9uYWwgPSBpc1VuY29uZGl0aW9uYWw7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbihtcWwpIHtcbiAgICAgICAgLy8gQ2hyb21lIHBhc3NlcyBhbiBNZWRpYVF1ZXJ5TGlzdEV2ZW50IG9iamVjdCwgd2hpbGUgb3RoZXIgYnJvd3NlcnMgcGFzcyBNZWRpYVF1ZXJ5TGlzdCBkaXJlY3RseVxuICAgICAgICBzZWxmLm1xbCA9IG1xbC5jdXJyZW50VGFyZ2V0IHx8IG1xbDtcbiAgICAgICAgc2VsZi5hc3Nlc3MoKTtcbiAgICB9O1xuICAgIHRoaXMubXFsLmFkZExpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xufVxuXG5NZWRpYVF1ZXJ5LnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0dWN0b3IgOiBNZWRpYVF1ZXJ5LFxuXG4gICAgLyoqXG4gICAgICogYWRkIGEgaGFuZGxlciBmb3IgdGhpcyBxdWVyeSwgdHJpZ2dlcmluZyBpZiBhbHJlYWR5IGFjdGl2ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLm1hdGNoIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGRlYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIuc2V0dXBdIGNhbGxiYWNrIGZvciBpbW1lZGlhdGUgZXhlY3V0aW9uIHdoZW4gYSBxdWVyeSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtoYW5kbGVyLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIGhhbmRsZXIgaXMgbWF0Y2hlZD9cbiAgICAgKi9cbiAgICBhZGRIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgcWggPSBuZXcgUXVlcnlIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2gocWgpO1xuXG4gICAgICAgIHRoaXMubWF0Y2hlcygpICYmIHFoLm9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJlbW92ZXMgdGhlIGdpdmVuIGhhbmRsZXIgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIGNhbGxzIGl0J3MgZGVzdHJveSBtZXRob2RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gaGFuZGxlciB0aGUgaGFuZGxlciB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzO1xuICAgICAgICBlYWNoKGhhbmRsZXJzLCBmdW5jdGlvbihoLCBpKSB7XG4gICAgICAgICAgICBpZihoLmVxdWFscyhoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGguZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhaGFuZGxlcnMuc3BsaWNlKGksMSk7IC8vcmVtb3ZlIGZyb20gYXJyYXkgYW5kIGV4aXQgZWFjaCBlYXJseVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBiZSBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgbWVkaWEgcXVlcnkgY2FuIGJlIGNvbnNpZGVyZWQgYSBtYXRjaCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgbWF0Y2hlcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tcWwubWF0Y2hlcyB8fCB0aGlzLmlzVW5jb25kaXRpb25hbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBoYW5kbGVycyBhbmQgdW5iaW5kcyBldmVudHNcbiAgICAgKi9cbiAgICBjbGVhciA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tcWwucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMubGVuZ3RoID0gMDsgLy9jbGVhciBhcnJheVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICAqIEFzc2Vzc2VzIHRoZSBxdWVyeSwgdHVybmluZyBvbiBhbGwgaGFuZGxlcnMgaWYgaXQgbWF0Y2hlcywgdHVybmluZyB0aGVtIG9mZiBpZiBpdCBkb2Vzbid0IG1hdGNoXG4gICAgICAgICovXG4gICAgYXNzZXNzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLm1hdGNoZXMoKSA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXJbYWN0aW9uXSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnk7XG4iLCJ2YXIgTWVkaWFRdWVyeSA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeScpO1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcbnZhciBlYWNoID0gVXRpbC5lYWNoO1xudmFyIGlzRnVuY3Rpb24gPSBVdGlsLmlzRnVuY3Rpb247XG52YXIgaXNBcnJheSA9IFV0aWwuaXNBcnJheTtcblxuLyoqXG4gKiBBbGxvd3MgZm9yIHJlZ2lzdHJhdGlvbiBvZiBxdWVyeSBoYW5kbGVycy5cbiAqIE1hbmFnZXMgdGhlIHF1ZXJ5IGhhbmRsZXIncyBzdGF0ZSBhbmQgaXMgcmVzcG9uc2libGUgZm9yIHdpcmluZyB1cCBicm93c2VyIGV2ZW50c1xuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5RGlzcGF0Y2ggKCkge1xuICAgIGlmKCF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hdGNoTWVkaWEgbm90IHByZXNlbnQsIGxlZ2FjeSBicm93c2VycyByZXF1aXJlIGEgcG9seWZpbGwnKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJpZXMgPSB7fTtcbiAgICB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZSA9ICF3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBhbGwnKS5tYXRjaGVzO1xufVxuXG5NZWRpYVF1ZXJ5RGlzcGF0Y2gucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBNZWRpYVF1ZXJ5RGlzcGF0Y2gsXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeVxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IEFycmF5IHx8IEZ1bmN0aW9ufSBvcHRpb25zIGVpdGhlciBhIHNpbmdsZSBxdWVyeSBoYW5kbGVyIG9iamVjdCwgYSBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2YgcXVlcnkgaGFuZGxlcnNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hdGNoIGZpcmVkIHdoZW4gcXVlcnkgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGZpcmVkIHdoZW4gYSBxdWVyeSBpcyBubyBsb25nZXIgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBmaXJlZCB3aGVuIGhhbmRsZXIgZmlyc3QgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWZlclNldHVwPWZhbHNlXSB3aGV0aGVyIHNldHVwIHNob3VsZCBiZSBydW4gaW1tZWRpYXRlbHkgb3IgZGVmZXJyZWQgdW50aWwgcXVlcnkgaXMgZmlyc3QgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Nob3VsZERlZ3JhZGU9ZmFsc2VdIHdoZXRoZXIgdGhpcyBwYXJ0aWN1bGFyIG1lZGlhIHF1ZXJ5IHNob3VsZCBhbHdheXMgcnVuIG9uIGluY2FwYWJsZSBicm93c2Vyc1xuICAgICAqL1xuICAgIHJlZ2lzdGVyIDogZnVuY3Rpb24ocSwgb3B0aW9ucywgc2hvdWxkRGVncmFkZSkge1xuICAgICAgICB2YXIgcXVlcmllcyAgICAgICAgID0gdGhpcy5xdWVyaWVzLFxuICAgICAgICAgICAgaXNVbmNvbmRpdGlvbmFsID0gc2hvdWxkRGVncmFkZSAmJiB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZTtcblxuICAgICAgICBpZighcXVlcmllc1txXSkge1xuICAgICAgICAgICAgcXVlcmllc1txXSA9IG5ldyBNZWRpYVF1ZXJ5KHEsIGlzVW5jb25kaXRpb25hbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL25vcm1hbGlzZSB0byBvYmplY3QgaW4gYW4gYXJyYXlcbiAgICAgICAgaWYoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWF0Y2ggOiBvcHRpb25zIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBbb3B0aW9uc107XG4gICAgICAgIH1cbiAgICAgICAgZWFjaChvcHRpb25zLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB7IG1hdGNoIDogaGFuZGxlciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcmllc1txXS5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdW5yZWdpc3RlcnMgYSBxdWVyeSBhbmQgYWxsIGl0J3MgaGFuZGxlcnMsIG9yIGEgc3BlY2lmaWMgaGFuZGxlciBmb3IgYSBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5IHRvIHRhcmdldFxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbaGFuZGxlcl0gc3BlY2lmaWMgaGFuZGxlciB0byB1bnJlZ2lzdGVyXG4gICAgICovXG4gICAgdW5yZWdpc3RlciA6IGZ1bmN0aW9uKHEsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW3FdO1xuXG4gICAgICAgIGlmKHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkucmVtb3ZlSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcmllc1txXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFRdWVyeURpc3BhdGNoO1xuIiwiLyoqXG4gKiBEZWxlZ2F0ZSB0byBoYW5kbGUgYSBtZWRpYSBxdWVyeSBiZWluZyBtYXRjaGVkIGFuZCB1bm1hdGNoZWQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyB1bm1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBvbmUtdGltZSBjYWxsYmFjayB0cmlnZ2VyZWQgdGhlIGZpcnN0IHRpbWUgYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgcnVuIGltbWVkaWF0ZWx5LCByYXRoZXIgdGhhbiBmaXJzdCB0aW1lIHF1ZXJ5IGlzIG1hdGNoZWQ/XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUXVlcnlIYW5kbGVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICFvcHRpb25zLmRlZmVyU2V0dXAgJiYgdGhpcy5zZXR1cCgpO1xufVxuXG5RdWVyeUhhbmRsZXIucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBRdWVyeUhhbmRsZXIsXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0dXAgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnNldHVwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgYW5kIHRyaWdnZXJpbmcgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICF0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hdGNoICYmIHRoaXMub3B0aW9ucy5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyB0aGUgdW5tYXRjaCBldmVudCBmb3IgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9mZiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudW5tYXRjaCAmJiB0aGlzLm9wdGlvbnMudW5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjYWxsZWQgd2hlbiBhIGhhbmRsZXIgaXMgdG8gYmUgZGVzdHJveWVkLlxuICAgICAqIGRlbGVnYXRlcyB0byB0aGUgZGVzdHJveSBvciB1bm1hdGNoIGNhbGxiYWNrcywgZGVwZW5kaW5nIG9uIGF2YWlsYWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIGRlc3Ryb3kgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlc3Ryb3kgPyB0aGlzLm9wdGlvbnMuZGVzdHJveSgpIDogdGhpcy5vZmYoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBlcXVhbGl0eSBieSByZWZlcmVuY2UuXG4gICAgICogaWYgb2JqZWN0IGlzIHN1cHBsaWVkIGNvbXBhcmUgb3B0aW9ucywgaWYgZnVuY3Rpb24sIGNvbXBhcmUgbWF0Y2ggY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbdGFyZ2V0XSB0aGUgdGFyZ2V0IGZvciBjb21wYXJpc29uXG4gICAgICovXG4gICAgZXF1YWxzIDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPT09IHRhcmdldCB8fCB0aGlzLm9wdGlvbnMubWF0Y2ggPT09IHRhcmdldDtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnlIYW5kbGVyO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGEgY29sbGVjdGlvblxuICpcbiAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gZm5cbiAqL1xuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBmbikge1xuICAgIHZhciBpICAgICAgPSAwLFxuICAgICAgICBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgY29udDtcblxuICAgIGZvcihpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udCA9IGZuKGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICBpZihjb250ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnJlYWs7IC8vYWxsb3cgZWFybHkgZXhpdFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHRhcmdldCB0aGUgb2JqZWN0IHVuZGVyIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHRhcmdldCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGZ1bmN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaXNGdW5jdGlvbiA6IGlzRnVuY3Rpb24sXG4gICAgaXNBcnJheSA6IGlzQXJyYXksXG4gICAgZWFjaCA6IGVhY2hcbn07XG4iLCJ2YXIgTWVkaWFRdWVyeURpc3BhdGNoID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5RGlzcGF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IE1lZGlhUXVlcnlEaXNwYXRjaCgpO1xuIiwiLyohXG4gKiBMYXp5IExvYWQgLSBKYXZhU2NyaXB0IHBsdWdpbiBmb3IgbGF6eSBsb2FkaW5nIGltYWdlc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAwNy0yMDE5IE1pa2EgVHV1cG9sYVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqXG4gKiBQcm9qZWN0IGhvbWU6XG4gKiAgIGh0dHBzOi8vYXBwZWxzaWluaS5uZXQvcHJvamVjdHMvbGF6eWxvYWRcbiAqXG4gKiBWZXJzaW9uOiAyLjAuMC1yYy4yXG4gKlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuTGF6eUxvYWQgPSBmYWN0b3J5KHJvb3QpO1xuICAgIH1cbn0pICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcy53aW5kb3cgfHwgdGhpcy5nbG9iYWwsIGZ1bmN0aW9uIChyb290KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIHJvb3QgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHNyYzogXCJkYXRhLXNyY1wiLFxuICAgICAgICBzcmNzZXQ6IFwiZGF0YS1zcmNzZXRcIixcbiAgICAgICAgc2VsZWN0b3I6IFwiLmxhenlsb2FkXCIsXG4gICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIHRocmVzaG9sZDogMFxuICAgIH07XG5cbiAgICAvKipcbiAgICAqIE1lcmdlIHR3byBvciBtb3JlIG9iamVjdHMuIFJldHVybnMgYSBuZXcgb2JqZWN0LlxuICAgICogQHByaXZhdGVcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gIGRlZXAgICAgIElmIHRydWUsIGRvIGEgZGVlcCAob3IgcmVjdXJzaXZlKSBtZXJnZSBbb3B0aW9uYWxdXG4gICAgKiBAcGFyYW0ge09iamVjdH0gICBvYmplY3RzICBUaGUgb2JqZWN0cyB0byBtZXJnZSB0b2dldGhlclxuICAgICogQHJldHVybnMge09iamVjdH0gICAgICAgICAgTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xuICAgICovXG4gICAgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKCkgIHtcblxuICAgICAgICBsZXQgZXh0ZW5kZWQgPSB7fTtcbiAgICAgICAgbGV0IGRlZXAgPSBmYWxzZTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICAgICAgICAvKiBDaGVjayBpZiBhIGRlZXAgbWVyZ2UgKi9cbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pID09PSBcIltvYmplY3QgQm9vbGVhbl1cIikge1xuICAgICAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIE1lcmdlIHRoZSBvYmplY3QgaW50byB0aGUgZXh0ZW5kZWQgb2JqZWN0ICovXG4gICAgICAgIGxldCBtZXJnZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIElmIGRlZXAgbWVyZ2UgYW5kIHByb3BlcnR5IGlzIGFuIG9iamVjdCwgbWVyZ2UgcHJvcGVydGllcyAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW3Byb3BdKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBleHRlbmQodHJ1ZSwgZXh0ZW5kZWRbcHJvcF0sIG9ialtwcm9wXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmRlZFtwcm9wXSA9IG9ialtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKiBMb29wIHRocm91Z2ggZWFjaCBvYmplY3QgYW5kIGNvbmR1Y3QgYSBtZXJnZSAqL1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgbWVyZ2Uob2JqKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHRlbmRlZDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTGF6eUxvYWQoaW1hZ2VzLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgTGF6eUxvYWQucHJvdG90eXBlID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLyogV2l0aG91dCBvYnNlcnZlcnMgbG9hZCBldmVyeXRoaW5nIGFuZCBiYWlsIG91dCBlYXJseS4gKi9cbiAgICAgICAgICAgIGlmICghcm9vdC5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlcygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG9ic2VydmVyQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHJvb3Q6IHRoaXMuc2V0dGluZ3Mucm9vdCxcbiAgICAgICAgICAgICAgICByb290TWFyZ2luOiB0aGlzLnNldHRpbmdzLnJvb3RNYXJnaW4sXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiBbdGhpcy5zZXR0aW5ncy50aHJlc2hvbGRdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVudHJpZXMsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3Jjc2V0ID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyY3NldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJpbWdcIiA9PT0gZW50cnkudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgc3JjICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIG9ic2VydmVyQ29uZmlnKTtcblxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRBbmREZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRJbWFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncykgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyYyk7XG4gICAgICAgICAgICAgICAgbGV0IHNyY3NldCA9IGltYWdlLmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyY3NldCk7XG4gICAgICAgICAgICAgICAgaWYgKFwiaW1nXCIgPT09IGltYWdlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgc3JjICsgXCInKVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncykgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5sYXp5bG9hZCA9IGZ1bmN0aW9uKGltYWdlcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IExhenlMb2FkKGltYWdlcywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGlmIChyb290LmpRdWVyeSkge1xuICAgICAgICBjb25zdCAkID0gcm9vdC5qUXVlcnk7XG4gICAgICAgICQuZm4ubGF6eWxvYWQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICBvcHRpb25zLmF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlIHx8IFwiZGF0YS1zcmNcIjtcbiAgICAgICAgICAgIG5ldyBMYXp5TG9hZCgkLm1ha2VBcnJheSh0aGlzKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gTGF6eUxvYWQ7XG59KTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgTWljcm9Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgRk9DVVNBQkxFX0VMRU1FTlRTID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXScsICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXTtcblxuICB2YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZGFsKF9yZWYpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IF9yZWYudGFyZ2V0TW9kYWwsXG4gICAgICAgICAgX3JlZiR0cmlnZ2VycyA9IF9yZWYudHJpZ2dlcnMsXG4gICAgICAgICAgdHJpZ2dlcnMgPSBfcmVmJHRyaWdnZXJzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkdHJpZ2dlcnMsXG4gICAgICAgICAgX3JlZiRvblNob3cgPSBfcmVmLm9uU2hvdyxcbiAgICAgICAgICBvblNob3cgPSBfcmVmJG9uU2hvdyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uU2hvdyxcbiAgICAgICAgICBfcmVmJG9uQ2xvc2UgPSBfcmVmLm9uQ2xvc2UsXG4gICAgICAgICAgb25DbG9zZSA9IF9yZWYkb25DbG9zZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uQ2xvc2UsXG4gICAgICAgICAgX3JlZiRvcGVuVHJpZ2dlciA9IF9yZWYub3BlblRyaWdnZXIsXG4gICAgICAgICAgb3BlblRyaWdnZXIgPSBfcmVmJG9wZW5UcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInIDogX3JlZiRvcGVuVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJGNsb3NlVHJpZ2dlciA9IF9yZWYuY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIGNsb3NlVHJpZ2dlciA9IF9yZWYkY2xvc2VUcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLWNsb3NlJyA6IF9yZWYkY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIF9yZWYkb3BlbkNsYXNzID0gX3JlZi5vcGVuQ2xhc3MsXG4gICAgICAgICAgb3BlbkNsYXNzID0gX3JlZiRvcGVuQ2xhc3MgPT09IHZvaWQgMCA/ICdpcy1vcGVuJyA6IF9yZWYkb3BlbkNsYXNzLFxuICAgICAgICAgIF9yZWYkZGlzYWJsZVNjcm9sbCA9IF9yZWYuZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBkaXNhYmxlU2Nyb2xsID0gX3JlZiRkaXNhYmxlU2Nyb2xsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBfcmVmJGRpc2FibGVGb2N1cyA9IF9yZWYuZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIGRpc2FibGVGb2N1cyA9IF9yZWYkZGlzYWJsZUZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9IF9yZWYuYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uID0gX3JlZiRhd2FpdENsb3NlQW5pbWF0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCxcbiAgICAgICAgICBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPSBfcmVmLmF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdE9wZW5BbmltYXRpb24gPSBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhd2FpdE9wZW5BbmltYXRpLFxuICAgICAgICAgIF9yZWYkZGVidWdNb2RlID0gX3JlZi5kZWJ1Z01vZGUsXG4gICAgICAgICAgZGVidWdNb2RlID0gX3JlZiRkZWJ1Z01vZGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkZWJ1Z01vZGU7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2Ugb2YgdGhlIG1vZGFsXG4gICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpOyAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXNzZWQgY29uZmlnXG5cbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICBkZWJ1Z01vZGU6IGRlYnVnTW9kZSxcbiAgICAgICAgZGlzYWJsZVNjcm9sbDogZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgb3BlblRyaWdnZXI6IG9wZW5UcmlnZ2VyLFxuICAgICAgICBjbG9zZVRyaWdnZXI6IGNsb3NlVHJpZ2dlcixcbiAgICAgICAgb3BlbkNsYXNzOiBvcGVuQ2xhc3MsXG4gICAgICAgIG9uU2hvdzogb25TaG93LFxuICAgICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uOiBhd2FpdENsb3NlQW5pbWF0aW9uLFxuICAgICAgICBhd2FpdE9wZW5BbmltYXRpb246IGF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgZGlzYWJsZUZvY3VzOiBkaXNhYmxlRm9jdXNcbiAgICAgIH07IC8vIFJlZ2lzdGVyIGNsaWNrIGV2ZW50cyBvbmx5IGlmIHByZSBiaW5kaW5nIGV2ZW50TGlzdGVuZXJzXG5cbiAgICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPiAwKSB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMuYXBwbHkodGhpcywgX3RvQ29uc3VtYWJsZUFycmF5KHRyaWdnZXJzKSk7IC8vIHByZSBiaW5kIGZ1bmN0aW9ucyBmb3IgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5vbktleWRvd24gPSB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb29wcyB0aHJvdWdoIGFsbCBvcGVuVHJpZ2dlcnMgYW5kIGJpbmRzIGNsaWNrIGV2ZW50XG4gICAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzIFtBcnJheSBvZiBub2RlIGVsZW1lbnRzXVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICAgIGtleTogXCJyZWdpc3RlclRyaWdnZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJUcmlnZ2VycygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJpZ2dlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgdHJpZ2dlcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2Vycy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93TW9kYWwoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2hvd01vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkNsYXNzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2Rpc2FibGUnKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdE9wZW5BbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBfdGhpczIubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuXG4gICAgICAgICAgICBfdGhpczIuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uU2hvdyh0aGlzLm1vZGFsLCB0aGlzLmFjdGl2ZUVsZW1lbnQsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgICAgdmFyIG1vZGFsID0gdGhpcy5tb2RhbDtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW91cignZW5hYmxlJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlbWVudCAmJiB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UodGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0Q2xvc2VBbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgb3BlbkNsYXNzID0gdGhpcy5jb25maWcub3BlbkNsYXNzOyAvLyA8LSBvbGQgc2Nob29sIGZ0d1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShvcGVuQ2xhc3MpO1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbEJ5SWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpO1xuICAgICAgICBpZiAodGhpcy5tb2RhbCkgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNjcm9sbEJlaGF2aW91clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbEJlaGF2aW91cih0b2dnbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlU2Nyb2xsKSByZXR1cm47XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgICAgIHN3aXRjaCAodG9nZ2xlKSB7XG4gICAgICAgICAgY2FzZSAnZW5hYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdkaXNhYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRXZlbnRMaXN0ZW5lcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZUV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZSh0aGlzLmNvbmZpZy5jbG9zZVRyaWdnZXIpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbktleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpOyAvLyBlc2NcblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkgdGhpcy5yZXRhaW5Gb2N1cyhldmVudCk7IC8vIHRhYlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRGb2N1c2FibGVOb2Rlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU5vZGVzKCkge1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMRU1FTlRTKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVzKSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFRyaWVzIHRvIHNldCBmb2N1cyBvbiBhIG5vZGUgd2hpY2ggaXMgbm90IGEgY2xvc2UgdHJpZ2dlclxuICAgICAgICogaWYgbm8gb3RoZXIgbm9kZXMgZXhpc3QgdGhlbiBmb2N1c2VzIG9uIGZpcnN0IGNsb3NlIHRyaWdnZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldEZvY3VzVG9GaXJzdE5vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGb2N1c1RvRmlyc3ROb2RlKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGlzYWJsZUZvY3VzKSByZXR1cm47XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyByZW1vdmUgbm9kZXMgb24gd2hvc2UgY2xpY2ssIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgICAgLy8gY291bGQgbm90IHRoaW5rIG9mIGEgYmV0dGVyIG5hbWUgOihcblxuICAgICAgICB2YXIgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyA9IGZvY3VzYWJsZU5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoX3RoaXMzLmNvbmZpZy5jbG9zZVRyaWdnZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID4gMCkgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0c1swXS5mb2N1cygpO1xuICAgICAgICBpZiAobm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cy5sZW5ndGggPT09IDApIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJldGFpbkZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmV0YWluRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpOyAvLyBubyBmb2N1c2FibGUgbm9kZXNcblxuICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWx0ZXJzIG5vZGVzIHdoaWNoIGFyZSBoaWRkZW4gdG8gcHJldmVudFxuICAgICAgICAgKiBmb2N1cyBsZWFrIG91dHNpZGUgbW9kYWxcbiAgICAgICAgICovXG5cbiAgICAgICAgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gICAgICAgIH0pOyAvLyBpZiBkaXNhYmxlRm9jdXMgaXMgdHJ1ZVxuXG4gICAgICAgIGlmICghdGhpcy5tb2RhbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZvY3VzZWRJdGVtSW5kZXggPSBmb2N1c2FibGVOb2Rlcy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZU5vZGVzW2ZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNhYmxlTm9kZXMubGVuZ3RoID4gMCAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSBmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIE1vZGFsIHByb3RvdHlwZSBlbmRzLlxuICAgKiBIZXJlIG9uIGNvZGUgaXMgcmVzcG9uc2libGUgZm9yIGRldGVjdGluZyBhbmRcbiAgICogYXV0byBiaW5kaW5nIGV2ZW50IGhhbmRsZXJzIG9uIG1vZGFsIHRyaWdnZXJzXG4gICAqL1xuICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcGVuZWQgbW9kYWxcblxuXG4gIHZhciBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gYXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCBpdCdzXG4gICAqIHJlc3BlY3RpdmUgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgICBBbiBhcnJheSBvZiBhbGwgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0cmlnZ2VyQXR0ciBUaGUgZGF0YS1hdHRyaWJ1dGUgd2hpY2ggdHJpZ2dlcnMgdGhlIG1vZHVsZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG5cbiAgdmFyIGdlbmVyYXRlVHJpZ2dlck1hcCA9IGZ1bmN0aW9uIGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2VycywgdHJpZ2dlckF0dHIpIHtcbiAgICB2YXIgdHJpZ2dlck1hcCA9IFtdO1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IHRyaWdnZXIuYXR0cmlidXRlc1t0cmlnZ2VyQXR0cl0udmFsdWU7XG4gICAgICBpZiAodHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPT09IHVuZGVmaW5lZCkgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPSBbXTtcbiAgICAgIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdLnB1c2godHJpZ2dlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyaWdnZXJNYXA7XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgd2hldGhlciBhIG1vZGFsIG9mIHRoZSBnaXZlbiBpZCBleGlzdHNcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGlkICBUaGUgaWQgb2YgdGhlIG1vZGFsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlTW9kYWxQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlTW9kYWxQcmVzZW5jZShpZCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3U2VlbXMgbGlrZSB5b3UgaGF2ZSBtaXNzZWQgJWMnXCIuY29uY2F0KGlkLCBcIidcIiksICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdJRCBzb21ld2hlcmUgaW4geW91ciBjb2RlLiBSZWZlciBleGFtcGxlIGJlbG93IHRvIHJlc29sdmUgaXQuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGlkPVxcXCJcIi5jb25jYXQoaWQsIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBhcmUgbW9kYWwgdHJpZ2dlcnMgcHJlc2VudFxuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBBbiBhcnJheSBvZiBkYXRhLXRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlID0gZnVuY3Rpb24gdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpIHtcbiAgICBpZiAodHJpZ2dlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IFxcdTI3NTdQbGVhc2Ugc3BlY2lmeSBhdCBsZWFzdCBvbmUgJWMnbWljcm9tb2RhbC10cmlnZ2VyJ1wiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnZGF0YSBhdHRyaWJ1dGUuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1taWNyb21vZGFsLXRyaWdnZXI9XFxcIm15LW1vZGFsXFxcIj48L2E+XCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0cmlnZ2VycyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBtb2RhbHNcbiAgICogYXJlIHByZXNlbnQgaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgICBBcnJheSBvZiBET00gbm9kZXMgd2hpY2ggaGF2ZSBkYXRhLXRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VyTWFwIEFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgdGhlaXIgdHJpZ2dlcnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVBcmdzID0gZnVuY3Rpb24gdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSB7XG4gICAgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpO1xuICAgIGlmICghdHJpZ2dlck1hcCkgcmV0dXJuIHRydWU7XG5cbiAgICBmb3IgKHZhciBpZCBpbiB0cmlnZ2VyTWFwKSB7XG4gICAgICB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvKipcbiAgICogQmluZHMgY2xpY2sgaGFuZGxlcnMgdG8gYWxsIG1vZGFsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuXG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KGNvbmZpZykge1xuICAgIC8vIENyZWF0ZSBhbiBjb25maWcgb2JqZWN0IHdpdGggZGVmYXVsdCBvcGVuVHJpZ2dlclxuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgb3BlblRyaWdnZXI6ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcidcbiAgICB9LCBjb25maWcpOyAvLyBDb2xsZWN0cyBhbGwgdGhlIG5vZGVzIHdpdGggdGhlIHRyaWdnZXJcblxuICAgIHZhciB0cmlnZ2VycyA9IF90b0NvbnN1bWFibGVBcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiLmNvbmNhdChvcHRpb25zLm9wZW5UcmlnZ2VyLCBcIl1cIikpKTsgLy8gTWFrZXMgYSBtYXBwaW5ncyBvZiBtb2RhbHMgd2l0aCB0aGVpciB0cmlnZ2VyIG5vZGVzXG5cblxuICAgIHZhciB0cmlnZ2VyTWFwID0gZ2VuZXJhdGVUcmlnZ2VyTWFwKHRyaWdnZXJzLCBvcHRpb25zLm9wZW5UcmlnZ2VyKTsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gRm9yIGV2ZXJ5IHRhcmdldCBtb2RhbCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFyIHZhbHVlID0gdHJpZ2dlck1hcFtrZXldO1xuICAgICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IGtleTtcbiAgICAgIG9wdGlvbnMudHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkodmFsdWUpO1xuICAgICAgYWN0aXZlTW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvd3MgYSBwYXJ0aWN1bGFyIG1vZGFsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0TW9kYWwgW1RoZSBpZCBvZiB0aGUgbW9kYWwgdG8gZGlzcGxheV1cbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgW1RoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byBwYXNzXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyh0YXJnZXRNb2RhbCwgY29uZmlnKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBjb25maWcgfHwge307XG4gICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IHRhcmdldE1vZGFsOyAvLyBDaGVja3MgaWYgbW9kYWxzIGFuZCB0cmlnZ2VycyBleGlzdCBpbiBkb21cblxuICAgIGlmIChvcHRpb25zLmRlYnVnTW9kZSA9PT0gdHJ1ZSAmJiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UodGFyZ2V0TW9kYWwpID09PSBmYWxzZSkgcmV0dXJuOyAvLyBjbGVhciBldmVudHMgaW4gY2FzZSBwcmV2aW91cyBtb2RhbCB3YXNuJ3QgY2xvc2VcblxuICAgIGlmIChhY3RpdmVNb2RhbCkgYWN0aXZlTW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTsgLy8gc3RvcmVzIHJlZmVyZW5jZSB0byBhY3RpdmUgbW9kYWxcblxuICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXG4gICAgYWN0aXZlTW9kYWwuc2hvd01vZGFsKCk7XG4gIH07XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGFjdGl2ZSBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGNsb3NlXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKHRhcmdldE1vZGFsKSB7XG4gICAgdGFyZ2V0TW9kYWwgPyBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkgOiBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIHNob3c6IHNob3csXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59KCk7XG53aW5kb3cuTWljcm9Nb2RhbCA9IE1pY3JvTW9kYWw7XG5cbmV4cG9ydCBkZWZhdWx0IE1pY3JvTW9kYWw7XG4iLCIvKiFcclxuICogU2Nyb2xsTWFnaWMgdjIuMC44ICgyMDIwLTA4LTE0KVxyXG4gKiBUaGUgamF2YXNjcmlwdCBsaWJyYXJ5IGZvciBtYWdpY2FsIHNjcm9sbCBpbnRlcmFjdGlvbnMuXHJcbiAqIChjKSAyMDIwIEphbiBQYWVwa2UgKEBqYW5wYWVwa2UpXHJcbiAqIFByb2plY3QgV2Vic2l0ZTogaHR0cDovL3Njcm9sbG1hZ2ljLmlvXHJcbiAqIFxyXG4gKiBAdmVyc2lvbiAyLjAuOFxyXG4gKiBAbGljZW5zZSBEdWFsIGxpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlIGFuZCBHUEwuXHJcbiAqIEBhdXRob3IgSmFuIFBhZXBrZSAtIGUtbWFpbEBqYW5wYWVwa2UuZGVcclxuICpcclxuICogQGZpbGUgU2Nyb2xsTWFnaWMgbWFpbiBsaWJyYXJ5LlxyXG4gKi9cclxuLyoqXHJcbiAqIEBuYW1lc3BhY2UgU2Nyb2xsTWFnaWNcclxuICovXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuXHRcdGRlZmluZShmYWN0b3J5KTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBCcm93c2VyIGdsb2JhbFxyXG5cdFx0cm9vdC5TY3JvbGxNYWdpYyA9IGZhY3RvcnkoKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHR2YXIgU2Nyb2xsTWFnaWMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRfdXRpbC5sb2coMiwgJyhDT01QQVRJQklMSVRZIE5PVElDRSkgLT4gQXMgb2YgU2Nyb2xsTWFnaWMgMi4wLjAgeW91IG5lZWQgdG8gdXNlIFxcJ25ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKClcXCcgdG8gY3JlYXRlIGEgbmV3IGNvbnRyb2xsZXIgaW5zdGFuY2UuIFVzZSBcXCduZXcgU2Nyb2xsTWFnaWMuU2NlbmUoKVxcJyB0byBpbnN0YW5jZSBhIHNjZW5lLicpO1xyXG5cdH07XHJcblxyXG5cdFNjcm9sbE1hZ2ljLnZlcnNpb24gPSBcIjIuMC44XCI7XHJcblxyXG5cdC8vIFRPRE86IHRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBjaHJvbWUncyBzY3JvbGwgaml0dGVyIGJ1Z1xyXG5cdGlmICh0eXBlb2YgKHdpbmRvdykgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdm9pZCgwKSk7XHJcblx0fVxyXG5cclxuXHQvLyBnbG9iYWwgY29uc3RcclxuXHR2YXIgUElOX1NQQUNFUl9BVFRSSUJVVEUgPSBcImRhdGEtc2Nyb2xsbWFnaWMtcGluLXNwYWNlclwiO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbWFpbiBjbGFzcyB0aGF0IGlzIG5lZWRlZCBvbmNlIHBlciBzY3JvbGwgY29udGFpbmVyLlxyXG5cdCAqXHJcblx0ICogQGNsYXNzXHJcblx0ICpcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIC8vIGJhc2ljIGluaXRpYWxpemF0aW9uXHJcblx0ICogdmFyIGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG5cdCAqXHJcblx0ICogLy8gcGFzc2luZyBvcHRpb25zXHJcblx0ICogdmFyIGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcih7Y29udGFpbmVyOiBcIiNteUNvbnRhaW5lclwiLCBsb2dsZXZlbDogM30pO1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIEFuIG9iamVjdCBjb250YWluaW5nIG9uZSBvciBtb3JlIG9wdGlvbnMgZm9yIHRoZSBjb250cm9sbGVyLlxyXG5cdCAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSBbb3B0aW9ucy5jb250YWluZXI9d2luZG93XSAtIEEgc2VsZWN0b3IsIERPTSBvYmplY3QgdGhhdCByZWZlcmVuY2VzIHRoZSBtYWluIGNvbnRhaW5lciBmb3Igc2Nyb2xsaW5nLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudmVydGljYWw9dHJ1ZV0gLSBTZXRzIHRoZSBzY3JvbGwgbW9kZSB0byB2ZXJ0aWNhbCAoYHRydWVgKSBvciBob3Jpem9udGFsIChgZmFsc2VgKSBzY3JvbGxpbmcuXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmdsb2JhbFNjZW5lT3B0aW9ucz17fV0gLSBUaGVzZSBvcHRpb25zIHdpbGwgYmUgcGFzc2VkIHRvIGV2ZXJ5IFNjZW5lIHRoYXQgaXMgYWRkZWQgdG8gdGhlIGNvbnRyb2xsZXIgdXNpbmcgdGhlIGFkZFNjZW5lIG1ldGhvZC4gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gU2NlbmUgb3B0aW9ucyBzZWUge0BsaW5rIFNjcm9sbE1hZ2ljLlNjZW5lfS5cclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubG9nbGV2ZWw9Ml0gTG9nbGV2ZWwgZm9yIGRlYnVnZ2luZy4gTm90ZSB0aGF0IGxvZ2dpbmcgaXMgZGlzYWJsZWQgaW4gdGhlIG1pbmlmaWVkIHZlcnNpb24gb2YgU2Nyb2xsTWFnaWMuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDBgID0+IHNpbGVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICoqIGAxYCA9PiBlcnJvcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqKiBgMmAgPT4gZXJyb3JzLCB3YXJuaW5nc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICoqIGAzYCA9PiBlcnJvcnMsIHdhcm5pbmdzLCBkZWJ1Z2luZm9cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJlZnJlc2hJbnRlcnZhbD0xMDBdIC0gU29tZSBjaGFuZ2VzIGRvbid0IGNhbGwgZXZlbnRzIGJ5IGRlZmF1bHQsIGxpa2UgY2hhbmdpbmcgdGhlIGNvbnRhaW5lciBzaXplIG9yIG1vdmluZyBhIHNjZW5lIHRyaWdnZXIgZWxlbWVudC4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFRoaXMgaW50ZXJ2YWwgcG9sbHMgdGhlc2UgcGFyYW1ldGVycyB0byBmaXJlIHRoZSBuZWNlc3NhcnkgZXZlbnRzLiAgXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgSWYgeW91IGRvbid0IHVzZSBjdXN0b20gY29udGFpbmVycywgdHJpZ2dlciBlbGVtZW50cyBvciBoYXZlIHN0YXRpYyBsYXlvdXRzLCB3aGVyZSB0aGUgcG9zaXRpb25zIG9mIHRoZSB0cmlnZ2VyIGVsZW1lbnRzIGRvbid0IGNoYW5nZSwgeW91IGNhbiBzZXQgdGhpcyB0byAwIGRpc2FibGUgaW50ZXJ2YWwgY2hlY2tpbmcgYW5kIGltcHJvdmUgcGVyZm9ybWFuY2UuXHJcblx0ICpcclxuXHQgKi9cclxuXHRTY3JvbGxNYWdpYy5Db250cm9sbGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBzZXR0aW5nc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblx0XHR2YXJcclxuXHRcdFx0TkFNRVNQQUNFID0gJ1Njcm9sbE1hZ2ljLkNvbnRyb2xsZXInLFxyXG5cdFx0XHRTQ1JPTExfRElSRUNUSU9OX0ZPUldBUkQgPSAnRk9SV0FSRCcsXHJcblx0XHRcdFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRSA9ICdSRVZFUlNFJyxcclxuXHRcdFx0U0NST0xMX0RJUkVDVElPTl9QQVVTRUQgPSAnUEFVU0VEJyxcclxuXHRcdFx0REVGQVVMVF9PUFRJT05TID0gQ09OVFJPTExFUl9PUFRJT05TLmRlZmF1bHRzO1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBwcml2YXRlIHZhcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cdFx0dmFyXHJcblx0XHRcdENvbnRyb2xsZXIgPSB0aGlzLFxyXG5cdFx0XHRfb3B0aW9ucyA9IF91dGlsLmV4dGVuZCh7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKSxcclxuXHRcdFx0X3NjZW5lT2JqZWN0cyA9IFtdLFxyXG5cdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBmYWxzZSwgLy8gY2FuIGJlIGJvb2xlYW4gKHRydWUgPT4gYWxsIHNjZW5lcykgb3IgYW4gYXJyYXkgb2Ygc2NlbmVzIHRvIGJlIHVwZGF0ZWRcclxuXHRcdFx0X3Njcm9sbFBvcyA9IDAsXHJcblx0XHRcdF9zY3JvbGxEaXJlY3Rpb24gPSBTQ1JPTExfRElSRUNUSU9OX1BBVVNFRCxcclxuXHRcdFx0X2lzRG9jdW1lbnQgPSB0cnVlLFxyXG5cdFx0XHRfdmlld1BvcnRTaXplID0gMCxcclxuXHRcdFx0X2VuYWJsZWQgPSB0cnVlLFxyXG5cdFx0XHRfdXBkYXRlVGltZW91dCxcclxuXHRcdFx0X3JlZnJlc2hUaW1lb3V0O1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBwcml2YXRlIGZ1bmN0aW9uc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbnRlcm5hbCBjb25zdHJ1Y3RvciBmdW5jdGlvbiBvZiB0aGUgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Zm9yICh2YXIga2V5IGluIF9vcHRpb25zKSB7XHJcblx0XHRcdFx0aWYgKCFERUZBVUxUX09QVElPTlMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogVW5rbm93biBvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIF9vcHRpb25zW2tleV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lciA9IF91dGlsLmdldC5lbGVtZW50cyhfb3B0aW9ucy5jb250YWluZXIpWzBdO1xyXG5cdFx0XHQvLyBjaGVjayBTY3JvbGxDb250YWluZXJcclxuXHRcdFx0aWYgKCFfb3B0aW9ucy5jb250YWluZXIpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjcmVhdGluZyBvYmplY3QgXCIgKyBOQU1FU1BBQ0UgKyBcIjogTm8gdmFsaWQgc2Nyb2xsIGNvbnRhaW5lciBzdXBwbGllZFwiKTtcclxuXHRcdFx0XHR0aHJvdyBOQU1FU1BBQ0UgKyBcIiBpbml0IGZhaWxlZC5cIjsgLy8gY2FuY2VsXHJcblx0XHRcdH1cclxuXHRcdFx0X2lzRG9jdW1lbnQgPSBfb3B0aW9ucy5jb250YWluZXIgPT09IHdpbmRvdyB8fCBfb3B0aW9ucy5jb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkgfHwgIWRvY3VtZW50LmJvZHkuY29udGFpbnMoX29wdGlvbnMuY29udGFpbmVyKTtcclxuXHRcdFx0Ly8gbm9ybWFsaXplIHRvIHdpbmRvd1xyXG5cdFx0XHRpZiAoX2lzRG9jdW1lbnQpIHtcclxuXHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIgPSB3aW5kb3c7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gdXBkYXRlIGNvbnRhaW5lciBzaXplIGltbWVkaWF0ZWx5XHJcblx0XHRcdF92aWV3UG9ydFNpemUgPSBnZXRWaWV3cG9ydFNpemUoKTtcclxuXHRcdFx0Ly8gc2V0IGV2ZW50IGhhbmRsZXJzXHJcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uQ2hhbmdlKTtcclxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25DaGFuZ2UpO1xyXG5cclxuXHRcdFx0dmFyIHJpID0gcGFyc2VJbnQoX29wdGlvbnMucmVmcmVzaEludGVydmFsLCAxMCk7XHJcblx0XHRcdF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCA9IF91dGlsLnR5cGUuTnVtYmVyKHJpKSA/IHJpIDogREVGQVVMVF9PUFRJT05TLnJlZnJlc2hJbnRlcnZhbDtcclxuXHRcdFx0c2NoZWR1bGVSZWZyZXNoKCk7XHJcblxyXG5cdFx0XHRsb2coMywgXCJhZGRlZCBuZXcgXCIgKyBOQU1FU1BBQ0UgKyBcIiBjb250cm9sbGVyICh2XCIgKyBTY3JvbGxNYWdpYy52ZXJzaW9uICsgXCIpXCIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNjaGVkdWxlIHRoZSBuZXh0IGV4ZWN1dGlvbiBvZiB0aGUgcmVmcmVzaCBmdW5jdGlvblxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHNjaGVkdWxlUmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCA+IDApIHtcclxuXHRcdFx0XHRfcmVmcmVzaFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChyZWZyZXNoLCBfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGVmYXVsdCBmdW5jdGlvbiB0byBnZXQgc2Nyb2xsIHBvcyAtIG92ZXJ3cml0ZWFibGUgdXNpbmcgYENvbnRyb2xsZXIuc2Nyb2xsUG9zKG5ld0Z1bmN0aW9uKWBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBnZXRTY3JvbGxQb3MgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBfb3B0aW9ucy52ZXJ0aWNhbCA/IF91dGlsLmdldC5zY3JvbGxUb3AoX29wdGlvbnMuY29udGFpbmVyKSA6IF91dGlsLmdldC5zY3JvbGxMZWZ0KF9vcHRpb25zLmNvbnRhaW5lcik7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgY3VycmVudCB2aWV3cG9ydCBTaXplICh3aWR0aCB2b3IgaG9yaXpvbnRhbCwgaGVpZ2h0IGZvciB2ZXJ0aWNhbClcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBnZXRWaWV3cG9ydFNpemUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBfb3B0aW9ucy52ZXJ0aWNhbCA/IF91dGlsLmdldC5oZWlnaHQoX29wdGlvbnMuY29udGFpbmVyKSA6IF91dGlsLmdldC53aWR0aChfb3B0aW9ucy5jb250YWluZXIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERlZmF1bHQgZnVuY3Rpb24gdG8gc2V0IHNjcm9sbCBwb3MgLSBvdmVyd3JpdGVhYmxlIHVzaW5nIGBDb250cm9sbGVyLnNjcm9sbFRvKG5ld0Z1bmN0aW9uKWBcclxuXHRcdCAqIE1ha2UgYXZhaWxhYmxlIHB1YmxpY2x5IGZvciBwaW5uZWQgbW91c2V3aGVlbCB3b3JrYXJvdW5kLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHNldFNjcm9sbFBvcyA9IHRoaXMuX3NldFNjcm9sbFBvcyA9IGZ1bmN0aW9uIChwb3MpIHtcclxuXHRcdFx0aWYgKF9vcHRpb25zLnZlcnRpY2FsKSB7XHJcblx0XHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oX3V0aWwuZ2V0LnNjcm9sbExlZnQoKSwgcG9zKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnNjcm9sbFRvcCA9IHBvcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8ocG9zLCBfdXRpbC5nZXQuc2Nyb2xsVG9wKCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuc2Nyb2xsTGVmdCA9IHBvcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBIYW5kbGUgdXBkYXRlcyBpbiBjeWNsZXMgaW5zdGVhZCBvZiBvbiBzY3JvbGwgKHBlcmZvcm1hbmNlKVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVNjZW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF9lbmFibGVkICYmIF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSkge1xyXG5cdFx0XHRcdC8vIGRldGVybWluZSBzY2VuZXMgdG8gdXBkYXRlXHJcblx0XHRcdFx0dmFyIHNjZW5lc1RvVXBkYXRlID0gX3V0aWwudHlwZS5BcnJheShfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpID8gX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIDogX3NjZW5lT2JqZWN0cy5zbGljZSgwKTtcclxuXHRcdFx0XHQvLyByZXNldCBzY2VuZXNcclxuXHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBmYWxzZTtcclxuXHRcdFx0XHR2YXIgb2xkU2Nyb2xsUG9zID0gX3Njcm9sbFBvcztcclxuXHRcdFx0XHQvLyB1cGRhdGUgc2Nyb2xsIHBvcyBub3cgaW5zdGVhZCBvZiBvbkNoYW5nZSwgYXMgaXQgbWlnaHQgaGF2ZSBjaGFuZ2VkIHNpbmNlIHNjaGVkdWxpbmcgKGkuZS4gaW4tYnJvd3NlciBzbW9vdGggc2Nyb2xsKVxyXG5cdFx0XHRcdF9zY3JvbGxQb3MgPSBDb250cm9sbGVyLnNjcm9sbFBvcygpO1xyXG5cdFx0XHRcdHZhciBkZWx0YVNjcm9sbCA9IF9zY3JvbGxQb3MgLSBvbGRTY3JvbGxQb3M7XHJcblx0XHRcdFx0aWYgKGRlbHRhU2Nyb2xsICE9PSAwKSB7IC8vIHNjcm9sbCBwb3NpdGlvbiBjaGFuZ2VkP1xyXG5cdFx0XHRcdFx0X3Njcm9sbERpcmVjdGlvbiA9IChkZWx0YVNjcm9sbCA+IDApID8gU0NST0xMX0RJUkVDVElPTl9GT1JXQVJEIDogU0NST0xMX0RJUkVDVElPTl9SRVZFUlNFO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyByZXZlcnNlIG9yZGVyIG9mIHNjZW5lcyBpZiBzY3JvbGxpbmcgcmV2ZXJzZVxyXG5cdFx0XHRcdGlmIChfc2Nyb2xsRGlyZWN0aW9uID09PSBTQ1JPTExfRElSRUNUSU9OX1JFVkVSU0UpIHtcclxuXHRcdFx0XHRcdHNjZW5lc1RvVXBkYXRlLnJldmVyc2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gdXBkYXRlIHNjZW5lc1xyXG5cdFx0XHRcdHNjZW5lc1RvVXBkYXRlLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0bG9nKDMsIFwidXBkYXRpbmcgU2NlbmUgXCIgKyAoaW5kZXggKyAxKSArIFwiL1wiICsgc2NlbmVzVG9VcGRhdGUubGVuZ3RoICsgXCIgKFwiICsgX3NjZW5lT2JqZWN0cy5sZW5ndGggKyBcIiB0b3RhbClcIik7XHJcblx0XHRcdFx0XHRzY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKHNjZW5lc1RvVXBkYXRlLmxlbmd0aCA9PT0gMCAmJiBfb3B0aW9ucy5sb2dsZXZlbCA+PSAzKSB7XHJcblx0XHRcdFx0XHRsb2coMywgXCJ1cGRhdGluZyAwIFNjZW5lcyAobm90aGluZyBhZGRlZCB0byBjb250cm9sbGVyKVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbml0aWFsaXplcyByQUYgY2FsbGJhY2tcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBkZWJvdW5jZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X3VwZGF0ZVRpbWVvdXQgPSBfdXRpbC5yQUYodXBkYXRlU2NlbmVzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBIYW5kbGVzIENvbnRhaW5lciBjaGFuZ2VzXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRsb2coMywgXCJldmVudCBmaXJlZCBjYXVzaW5nIGFuIHVwZGF0ZTpcIiwgZS50eXBlKTtcclxuXHRcdFx0aWYgKGUudHlwZSA9PSBcInJlc2l6ZVwiKSB7XHJcblx0XHRcdFx0Ly8gcmVzaXplXHJcblx0XHRcdFx0X3ZpZXdQb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZSgpO1xyXG5cdFx0XHRcdF9zY3JvbGxEaXJlY3Rpb24gPSBTQ1JPTExfRElSRUNUSU9OX1BBVVNFRDtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBzY2hlZHVsZSB1cGRhdGVcclxuXHRcdFx0aWYgKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSAhPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IHRydWU7XHJcblx0XHRcdFx0ZGVib3VuY2VVcGRhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKCFfaXNEb2N1bWVudCkge1xyXG5cdFx0XHRcdC8vIHNpbXVsYXRlIHJlc2l6ZSBldmVudC4gT25seSB3b3JrcyBmb3Igdmlld3BvcnQgcmVsZXZhbnQgcGFyYW0gKHBlcmZvcm1hbmNlKVxyXG5cdFx0XHRcdGlmIChfdmlld1BvcnRTaXplICE9IGdldFZpZXdwb3J0U2l6ZSgpKSB7XHJcblx0XHRcdFx0XHR2YXIgcmVzaXplRXZlbnQ7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRyZXNpemVFdmVudCA9IG5ldyBFdmVudCgncmVzaXplJywge1xyXG5cdFx0XHRcdFx0XHRcdGJ1YmJsZXM6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGNhbmNlbGFibGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvLyBzdHVwaWQgSUVcclxuXHRcdFx0XHRcdFx0cmVzaXplRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xyXG5cdFx0XHRcdFx0XHRyZXNpemVFdmVudC5pbml0RXZlbnQoXCJyZXNpemVcIiwgZmFsc2UsIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KHJlc2l6ZUV2ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0X3NjZW5lT2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHsgLy8gcmVmcmVzaCBhbGwgc2NlbmVzXHJcblx0XHRcdFx0c2NlbmUucmVmcmVzaCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2NoZWR1bGVSZWZyZXNoKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2VuZCBhIGRlYnVnIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXHJcblx0XHQgKiBwcm92aWRlZCBwdWJsaWNseSB3aXRoIF9sb2cgZm9yIHBsdWdpbnNcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGxvZ2xldmVsIC0gVGhlIGxvZ2xldmVsIHJlcXVpcmVkIHRvIGluaXRpYXRlIG91dHB1dCBmb3IgdGhlIG1lc3NhZ2UuXHJcblx0XHQgKiBAcGFyYW0gey4uLm1peGVkfSBvdXRwdXQgLSBPbmUgb3IgbW9yZSB2YXJpYWJsZXMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBjb25zb2xlLlxyXG5cdFx0ICovXHJcblx0XHR2YXIgbG9nID0gdGhpcy5fbG9nID0gZnVuY3Rpb24gKGxvZ2xldmVsLCBvdXRwdXQpIHtcclxuXHRcdFx0aWYgKF9vcHRpb25zLmxvZ2xldmVsID49IGxvZ2xldmVsKSB7XHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIikgLT5cIik7XHJcblx0XHRcdFx0X3V0aWwubG9nLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdC8vIGZvciBzY2VuZXMgd2UgaGF2ZSBnZXR0ZXJzIGZvciBlYWNoIG9wdGlvbiwgYnV0IGZvciB0aGUgY29udHJvbGxlciB3ZSBkb24ndCwgc28gd2UgbmVlZCB0byBtYWtlIGl0IGF2YWlsYWJsZSBleHRlcm5hbGx5IGZvciBwbHVnaW5zXHJcblx0XHR0aGlzLl9vcHRpb25zID0gX29wdGlvbnM7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTb3J0IHNjZW5lcyBpbiBhc2NlbmRpbmcgb3JkZXIgb2YgdGhlaXIgc3RhcnQgb2Zmc2V0LlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2FycmF5fSBTY2VuZXNBcnJheSAtIGFuIGFycmF5IG9mIFNjcm9sbE1hZ2ljIFNjZW5lcyB0aGF0IHNob3VsZCBiZSBzb3J0ZWRcclxuXHRcdCAqIEByZXR1cm4ge2FycmF5fSBUaGUgc29ydGVkIGFycmF5IG9mIFNjZW5lcy5cclxuXHRcdCAqL1xyXG5cdFx0dmFyIHNvcnRTY2VuZXMgPSBmdW5jdGlvbiAoU2NlbmVzQXJyYXkpIHtcclxuXHRcdFx0aWYgKFNjZW5lc0FycmF5Lmxlbmd0aCA8PSAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lc0FycmF5O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciBzY2VuZXMgPSBTY2VuZXNBcnJheS5zbGljZSgwKTtcclxuXHRcdFx0XHRzY2VuZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGEuc2Nyb2xsT2Zmc2V0KCkgPiBiLnNjcm9sbE9mZnNldCgpID8gMSA6IC0xO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiBzY2VuZXM7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBwdWJsaWMgZnVuY3Rpb25zXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkZCBvbmUgb3JlIG1vcmUgc2NlbmUocykgdG8gdGhlIGNvbnRyb2xsZXIuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYFNjZW5lLmFkZFRvKGNvbnRyb2xsZXIpYC5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyB3aXRoIGEgcHJldmlvdXNseSBkZWZpbmVkIHNjZW5lXHJcblx0XHQgKiBjb250cm9sbGVyLmFkZFNjZW5lKHNjZW5lKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyB3aXRoIGEgbmV3bHkgY3JlYXRlZCBzY2VuZS5cclxuXHRcdCAqIGNvbnRyb2xsZXIuYWRkU2NlbmUobmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtkdXJhdGlvbiA6IDB9KSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gYWRkaW5nIG11bHRpcGxlIHNjZW5lc1xyXG5cdFx0ICogY29udHJvbGxlci5hZGRTY2VuZShbc2NlbmUsIHNjZW5lMiwgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtkdXJhdGlvbiA6IDB9KV0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7KFNjcm9sbE1hZ2ljLlNjZW5lfGFycmF5KX0gbmV3U2NlbmUgLSBTY3JvbGxNYWdpYyBTY2VuZSBvciBBcnJheSBvZiBTY2VuZXMgdG8gYmUgYWRkZWQgdG8gdGhlIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5hZGRTY2VuZSA9IGZ1bmN0aW9uIChuZXdTY2VuZSkge1xyXG5cdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShuZXdTY2VuZSkpIHtcclxuXHRcdFx0XHRuZXdTY2VuZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdENvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKG5ld1NjZW5lIGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuU2NlbmUpIHtcclxuXHRcdFx0XHRpZiAobmV3U2NlbmUuY29udHJvbGxlcigpICE9PSBDb250cm9sbGVyKSB7XHJcblx0XHRcdFx0XHRuZXdTY2VuZS5hZGRUbyhDb250cm9sbGVyKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKF9zY2VuZU9iamVjdHMuaW5kZXhPZihuZXdTY2VuZSkgPCAwKSB7XHJcblx0XHRcdFx0XHQvLyBuZXcgc2NlbmVcclxuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMucHVzaChuZXdTY2VuZSk7IC8vIGFkZCB0byBhcnJheVxyXG5cdFx0XHRcdFx0X3NjZW5lT2JqZWN0cyA9IHNvcnRTY2VuZXMoX3NjZW5lT2JqZWN0cyk7IC8vIHNvcnRcclxuXHRcdFx0XHRcdG5ld1NjZW5lLm9uKFwic2hpZnQuY29udHJvbGxlcl9zb3J0XCIsIGZ1bmN0aW9uICgpIHsgLy8gcmVzb3J0IHdoZW5ldmVyIHNjZW5lIG1vdmVzXHJcblx0XHRcdFx0XHRcdF9zY2VuZU9iamVjdHMgPSBzb3J0U2NlbmVzKF9zY2VuZU9iamVjdHMpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyBpbnNlcnQgR2xvYmFsIGRlZmF1bHRzLlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIF9vcHRpb25zLmdsb2JhbFNjZW5lT3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRpZiAobmV3U2NlbmVba2V5XSkge1xyXG5cdFx0XHRcdFx0XHRcdG5ld1NjZW5lW2tleV0uY2FsbChuZXdTY2VuZSwgX29wdGlvbnMuZ2xvYmFsU2NlbmVPcHRpb25zW2tleV0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsb2coMywgXCJhZGRpbmcgU2NlbmUgKG5vdyBcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgdG90YWwpXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogaW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCBmb3IgJy5hZGRTY2VuZSgpJ1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgb25lIG9yZSBtb3JlIHNjZW5lKHMpIGZyb20gdGhlIGNvbnRyb2xsZXIuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYFNjZW5lLnJlbW92ZSgpYC5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZW1vdmUgYSBzY2VuZSBmcm9tIHRoZSBjb250cm9sbGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnJlbW92ZVNjZW5lKHNjZW5lKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyByZW1vdmUgbXVsdGlwbGUgc2NlbmVzIGZyb20gdGhlIGNvbnRyb2xsZXJcclxuXHRcdCAqIGNvbnRyb2xsZXIucmVtb3ZlU2NlbmUoW3NjZW5lLCBzY2VuZTIsIHNjZW5lM10pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7KFNjcm9sbE1hZ2ljLlNjZW5lfGFycmF5KX0gU2NlbmUgLSBTY3JvbGxNYWdpYyBTY2VuZSBvciBBcnJheSBvZiBTY2VuZXMgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBjb250cm9sbGVyLlxyXG5cdFx0ICogQHJldHVybnMge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlbW92ZVNjZW5lID0gZnVuY3Rpb24gKFNjZW5lKSB7XHJcblx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KFNjZW5lKSkge1xyXG5cdFx0XHRcdFNjZW5lLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Q29udHJvbGxlci5yZW1vdmVTY2VuZShzY2VuZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyIGluZGV4ID0gX3NjZW5lT2JqZWN0cy5pbmRleE9mKFNjZW5lKTtcclxuXHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0U2NlbmUub2ZmKFwic2hpZnQuY29udHJvbGxlcl9zb3J0XCIpO1xyXG5cdFx0XHRcdFx0X3NjZW5lT2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0bG9nKDMsIFwicmVtb3ZpbmcgU2NlbmUgKG5vdyBcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgbGVmdClcIik7XHJcblx0XHRcdFx0XHRTY2VuZS5yZW1vdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdCAqIFVwZGF0ZSBvbmUgb3JlIG1vcmUgc2NlbmUocykgYWNjb3JkaW5nIHRvIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lci4gIFxyXG5cdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYFNjZW5lLnVwZGF0ZSgpYC4gIFxyXG5cdCAqIFRoZSB1cGRhdGUgbWV0aG9kIGNhbGN1bGF0ZXMgdGhlIHNjZW5lJ3Mgc3RhcnQgYW5kIGVuZCBwb3NpdGlvbiAoYmFzZWQgb24gdGhlIHRyaWdnZXIgZWxlbWVudCwgdHJpZ2dlciBob29rLCBkdXJhdGlvbiBhbmQgb2Zmc2V0KSBhbmQgY2hlY2tzIGl0IGFnYWluc3QgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcclxuXHQgKiBJdCB0aGVuIHVwZGF0ZXMgdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUgYWNjb3JkaW5nbHkgKG9yIGRvZXMgbm90aGluZywgaWYgdGhlIHN0YXRlIGlzIGFscmVhZHkgY29ycmVjdCkg4oCTIFBpbnMgd2lsbCBiZSBzZXQgdG8gdGhlaXIgY29ycmVjdCBwb3NpdGlvbiBhbmQgdHdlZW5zIHdpbGwgYmUgdXBkYXRlZCB0byB0aGVpciBjb3JyZWN0IHByb2dyZXNzLiAgXHJcblx0ICogXyoqTm90ZToqKiBUaGlzIG1ldGhvZCBnZXRzIGNhbGxlZCBjb25zdGFudGx5IHdoZW5ldmVyIENvbnRyb2xsZXIgZGV0ZWN0cyBhIGNoYW5nZS4gVGhlIG9ubHkgYXBwbGljYXRpb24gZm9yIHlvdSBpcyBpZiB5b3UgY2hhbmdlIHNvbWV0aGluZyBvdXRzaWRlIG9mIHRoZSByZWFsbSBvZiBTY3JvbGxNYWdpYywgbGlrZSBtb3ZpbmcgdGhlIHRyaWdnZXIgb3IgY2hhbmdpbmcgdHdlZW4gcGFyYW1ldGVycy5fXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogLy8gdXBkYXRlIGEgc3BlY2lmaWMgc2NlbmUgb24gbmV4dCBjeWNsZVxyXG4gXHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lKTtcclxuIFx0ICpcclxuXHQgKiAvLyB1cGRhdGUgYSBzcGVjaWZpYyBzY2VuZSBpbW1lZGlhdGVseVxyXG5cdCAqIGNvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUsIHRydWUpO1xyXG4gXHQgKlxyXG5cdCAqIC8vIHVwZGF0ZSBtdWx0aXBsZSBzY2VuZXMgc2NlbmUgb24gbmV4dCBjeWNsZVxyXG5cdCAqIGNvbnRyb2xsZXIudXBkYXRlU2NlbmUoW3NjZW5lMSwgc2NlbmUyLCBzY2VuZTNdKTtcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7U2Nyb2xsTWFnaWMuU2NlbmV9IFNjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRoYXQgaXMvYXJlIHN1cHBvc2VkIHRvIGJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbaW1tZWRpYXRlbHk9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSB1cGRhdGUgd2lsbCBiZSBpbnN0YW50LCBpZiBgZmFsc2VgIGl0IHdpbGwgd2FpdCB1bnRpbCBuZXh0IHVwZGF0ZSBjeWNsZS4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdCAgVGhpcyBpcyB1c2VmdWwgd2hlbiBjaGFuZ2luZyBtdWx0aXBsZSBwcm9wZXJ0aWVzIG9mIHRoZSBzY2VuZSAtIHRoaXMgd2F5IGl0IHdpbGwgb25seSBiZSB1cGRhdGVkIG9uY2UgYWxsIG5ldyBwcm9wZXJ0aWVzIGFyZSBzZXQgKHVwZGF0ZVNjZW5lcykuXHJcblx0ICogQHJldHVybiB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0ICovXHJcblx0XHR0aGlzLnVwZGF0ZVNjZW5lID0gZnVuY3Rpb24gKFNjZW5lLCBpbW1lZGlhdGVseSkge1xyXG5cdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShTY2VuZSkpIHtcclxuXHRcdFx0XHRTY2VuZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdENvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUsIGltbWVkaWF0ZWx5KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0XHRcdFNjZW5lLnVwZGF0ZSh0cnVlKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSAhPT0gdHJ1ZSAmJiBTY2VuZSBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7IC8vIGlmIF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSBpcyB0cnVlLCBhbGwgY29ubmVjdGVkIHNjZW5lcyBhcmUgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIHVwZGF0ZVxyXG5cdFx0XHRcdFx0Ly8gcHJlcCBhcnJheSBmb3IgbmV4dCB1cGRhdGUgY3ljbGVcclxuXHRcdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSB8fCBbXTtcclxuXHRcdFx0XHRcdGlmIChfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUuaW5kZXhPZihTY2VuZSkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlLnB1c2goU2NlbmUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gc29ydFNjZW5lcyhfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpOyAvLyBzb3J0XHJcblx0XHRcdFx0XHRkZWJvdW5jZVVwZGF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBjb250cm9sbGVyIHBhcmFtcyBhbmQgY2FsbHMgdXBkYXRlU2NlbmUgb24gZXZlcnkgc2NlbmUsIHRoYXQgaXMgYXR0YWNoZWQgdG8gdGhlIGNvbnRyb2xsZXIuICBcclxuXHRcdCAqIFNlZSBgQ29udHJvbGxlci51cGRhdGVTY2VuZSgpYCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IHRoaXMgbWVhbnMuICBcclxuXHRcdCAqIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgbm90IG5lZWQgdGhpcyBmdW5jdGlvbiwgYXMgaXQgaXMgY2FsbGVkIGNvbnN0YW50bHksIHdoZW5ldmVyIFNjcm9sbE1hZ2ljIGRldGVjdHMgYSBzdGF0ZSBjaGFuZ2UgZXZlbnQsIGxpa2UgcmVzaXplIG9yIHNjcm9sbC4gIFxyXG5cdFx0ICogVGhlIG9ubHkgYXBwbGljYXRpb24gZm9yIHRoaXMgbWV0aG9kIGlzIHdoZW4gU2Nyb2xsTWFnaWMgZmFpbHMgdG8gZGV0ZWN0IHRoZXNlIGV2ZW50cy4gIFxyXG5cdFx0ICogT25lIGFwcGxpY2F0aW9uIGlzIHdpdGggc29tZSBleHRlcm5hbCBzY3JvbGwgbGlicmFyaWVzIChsaWtlIGlTY3JvbGwpIHRoYXQgbW92ZSBhbiBpbnRlcm5hbCBjb250YWluZXIgdG8gYSBuZWdhdGl2ZSBvZmZzZXQgaW5zdGVhZCBvZiBhY3R1YWxseSBzY3JvbGxpbmcuIEluIHRoaXMgY2FzZSB0aGUgdXBkYXRlIG9uIHRoZSBjb250cm9sbGVyIG5lZWRzIHRvIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgY2hpbGQgY29udGFpbmVyJ3MgcG9zaXRpb24gY2hhbmdlcy5cclxuXHRcdCAqIEZvciB0aGlzIGNhc2UgdGhlcmUgd2lsbCBhbHNvIGJlIHRoZSBuZWVkIHRvIHByb3ZpZGUgYSBjdXN0b20gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBjb3JyZWN0IHNjcm9sbCBwb3NpdGlvbi4gU2VlIGBDb250cm9sbGVyLnNjcm9sbFBvcygpYCBmb3IgZGV0YWlscy5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyB1cGRhdGUgdGhlIGNvbnRyb2xsZXIgb24gbmV4dCBjeWNsZSAoc2F2ZXMgcGVyZm9ybWFuY2UgZHVlIHRvIGVsaW1pbmF0aW9uIG9mIHJlZHVuZGFudCB1cGRhdGVzKVxyXG5cdFx0ICogY29udHJvbGxlci51cGRhdGUoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyB1cGRhdGUgdGhlIGNvbnRyb2xsZXIgaW1tZWRpYXRlbHlcclxuXHRcdCAqIGNvbnRyb2xsZXIudXBkYXRlKHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUgKGJldHRlciBwZXJmb3JtYW5jZSlcclxuXHRcdCAqIEByZXR1cm4ge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpbW1lZGlhdGVseSkge1xyXG5cdFx0XHRvbkNoYW5nZSh7XHJcblx0XHRcdFx0dHlwZTogXCJyZXNpemVcIlxyXG5cdFx0XHR9KTsgLy8gd2lsbCB1cGRhdGUgc2l6ZSBhbmQgc2V0IF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSB0byB0cnVlXHJcblx0XHRcdGlmIChpbW1lZGlhdGVseSkge1xyXG5cdFx0XHRcdHVwZGF0ZVNjZW5lcygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNjcm9sbCB0byBhIG51bWVyaWMgc2Nyb2xsIG9mZnNldCwgYSBET00gZWxlbWVudCwgdGhlIHN0YXJ0IG9mIGEgc2NlbmUgb3IgcHJvdmlkZSBhbiBhbHRlcm5hdGUgbWV0aG9kIGZvciBzY3JvbGxpbmcuICBcclxuXHRcdCAqIEZvciB2ZXJ0aWNhbCBjb250cm9sbGVycyBpdCB3aWxsIGNoYW5nZSB0aGUgdG9wIHNjcm9sbCBvZmZzZXQgYW5kIGZvciBob3Jpem9udGFsIGFwcGxpY2F0aW9ucyBpdCB3aWxsIGNoYW5nZSB0aGUgbGVmdCBvZmZzZXQuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQHNpbmNlIDEuMS4wXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gc2Nyb2xsIHRvIGFuIG9mZnNldCBvZiAxMDBcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzY3JvbGwgdG8gYSBET00gZWxlbWVudFxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhcIiNhbmNob3JcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2Nyb2xsIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSBzY2VuZVxyXG5cdFx0ICogdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtvZmZzZXQ6IDIwMH0pO1xyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhzY2VuZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBwb3NpdGlvbiBtb2RpZmljYXRpb24gZnVuY3Rpb24gKGpRdWVyeSBhbmltYXRlIGluc3RlYWQgb2YganVtcClcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oZnVuY3Rpb24gKG5ld1Njcm9sbFBvcykge1xyXG5cdFx0ICpcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwKTsgLy8gY2FsbCBhcyB1c3VhbCwgYnV0IHRoZSBuZXcgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIGluc3RlYWRcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIGZ1bmN0aW9uIHdpdGggYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXJcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oZnVuY3Rpb24gKG5ld1Njcm9sbFBvcywgbWVzc2FnZSkge1xyXG5cdFx0ICogIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG5cdFx0ICpcdCQodGhpcykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICogLy8gY2FsbCBhcyB1c3VhbCwgYnV0IHN1cHBseSBhbiBleHRyYSBwYXJhbWV0ZXIgdG8gdGhlIGRlZmluZWQgY3VzdG9tIGZ1bmN0aW9uXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwgXCJteSBtZXNzYWdlXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgZnVuY3Rpb24gd2l0aCBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlciBjb250YWluaW5nIG11bHRpcGxlIHZhcmlhYmxlc1xyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBvcHRpb25zKSB7XHJcblx0XHQgKiAgc29tZUdsb2JhbFZhciA9IG9wdGlvbnMuYSArIG9wdGlvbnMuYjtcclxuXHRcdCAqXHQkKHRoaXMpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqIC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCBzdXBwbHkgYW4gZXh0cmEgcGFyYW1ldGVyIGNvbnRhaW5pbmcgbXVsdGlwbGUgb3B0aW9uc1xyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDAsIHthOiAxLCBiOiAyfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBmdW5jdGlvbiB3aXRoIGEgY2FsbGJhY2sgc3VwcGxpZWQgYXMgYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXJcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oZnVuY3Rpb24gKG5ld1Njcm9sbFBvcywgY2FsbGJhY2spIHtcclxuXHRcdCAqXHQkKHRoaXMpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSwgNDAwLCBcInN3aW5nXCIsIGNhbGxiYWNrKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICogLy8gY2FsbCBhcyB1c3VhbCwgYnV0IHN1cHBseSBhbiBleHRyYSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHVzZWQgYXMgYSBjYWxsYmFjayBpbiB0aGUgcHJldmlvdXNseSBkZWZpbmVkIGN1c3RvbSBzY3JvbGwgZnVuY3Rpb25cclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwLCBmdW5jdGlvbigpIHtcclxuXHRcdCAqXHRjb25zb2xlLmxvZyhcInNjcm9sbCBoYXMgZmluaXNoZWQuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHttaXhlZH0gc2Nyb2xsVGFyZ2V0IC0gVGhlIHN1cHBsaWVkIGFyZ3VtZW50IGNhbiBiZSBvbmUgb2YgdGhlc2UgdHlwZXM6XHJcblx0XHQgKiAxLiBgbnVtYmVyYCAtPiBUaGUgY29udGFpbmVyIHdpbGwgc2Nyb2xsIHRvIHRoaXMgbmV3IHNjcm9sbCBvZmZzZXQuXHJcblx0XHQgKiAyLiBgc3RyaW5nYCBvciBgb2JqZWN0YCAtPiBDYW4gYmUgYSBzZWxlY3RvciBvciBhIERPTSBvYmplY3QuICBcclxuXHRcdCAqICBUaGUgY29udGFpbmVyIHdpbGwgc2Nyb2xsIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGlzIGVsZW1lbnQuXHJcblx0XHQgKiAzLiBgU2Nyb2xsTWFnaWMgU2NlbmVgIC0+IFRoZSBjb250YWluZXIgd2lsbCBzY3JvbGwgdG8gdGhlIHN0YXJ0IG9mIHRoaXMgc2NlbmUuXHJcblx0XHQgKiA0LiBgZnVuY3Rpb25gIC0+IFRoaXMgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIGZvciBmdXR1cmUgc2Nyb2xsIHBvc2l0aW9uIG1vZGlmaWNhdGlvbnMuICBcclxuXHRcdCAqICBUaGlzIHByb3ZpZGVzIGEgd2F5IGZvciB5b3UgdG8gY2hhbmdlIHRoZSBiZWhhdmlvdXIgb2Ygc2Nyb2xsaW5nIGFuZCBhZGRpbmcgbmV3IGJlaGF2aW91ciBsaWtlIGFuaW1hdGlvbi4gVGhlIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIGFzIGEgcGFyYW1ldGVyIGFuZCBhIHJlZmVyZW5jZSB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQgdXNpbmcgYHRoaXNgLiAgXHJcblx0XHQgKiAgSXQgbWF5IGFsc28gb3B0aW9uYWxseSByZWNlaXZlIGFuIG9wdGlvbmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVyIChzZWUgYmVsb3cpICBcclxuXHRcdCAqICBfKipOT1RFOioqICBcclxuXHRcdCAqICBBbGwgb3RoZXIgb3B0aW9ucyB3aWxsIHN0aWxsIHdvcmsgYXMgZXhwZWN0ZWQsIHVzaW5nIHRoZSBuZXcgZnVuY3Rpb24gdG8gc2Nyb2xsLl9cclxuXHRcdCAqIEBwYXJhbSB7bWl4ZWR9IFthZGRpdGlvbmFsUGFyYW1ldGVyXSAtIElmIGEgY3VzdG9tIHNjcm9sbCBmdW5jdGlvbiB3YXMgZGVmaW5lZCAoc2VlIGFib3ZlIDQuKSwgeW91IG1heSB3YW50IHRvIHN1cHBseSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gaXQsIHdoZW4gY2FsbGluZyBpdC4gWW91IGNhbiBkbyB0aGlzIHVzaW5nIHRoaXMgcGFyYW1ldGVyIOKAkyBzZWUgZXhhbXBsZXMgZm9yIGRldGFpbHMuIFBsZWFzZSBub3RlLCB0aGF0IHRoaXMgcGFyYW1ldGVyIHdpbGwgaGF2ZSBubyBlZmZlY3QsIGlmIHlvdSB1c2UgdGhlIGRlZmF1bHQgc2Nyb2xsaW5nIGZ1bmN0aW9uLlxyXG5cdFx0ICogQHJldHVybnMge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNjcm9sbFRvID0gZnVuY3Rpb24gKHNjcm9sbFRhcmdldCwgYWRkaXRpb25hbFBhcmFtZXRlcikge1xyXG5cdFx0XHRpZiAoX3V0aWwudHlwZS5OdW1iZXIoc2Nyb2xsVGFyZ2V0KSkgeyAvLyBleGNlY3V0ZVxyXG5cdFx0XHRcdHNldFNjcm9sbFBvcy5jYWxsKF9vcHRpb25zLmNvbnRhaW5lciwgc2Nyb2xsVGFyZ2V0LCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcclxuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxUYXJnZXQgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5TY2VuZSkgeyAvLyBzY3JvbGwgdG8gc2NlbmVcclxuXHRcdFx0XHRpZiAoc2Nyb2xsVGFyZ2V0LmNvbnRyb2xsZXIoKSA9PT0gQ29udHJvbGxlcikgeyAvLyBjaGVjayBpZiB0aGUgY29udHJvbGxlciBpcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBzY2VuZVxyXG5cdFx0XHRcdFx0Q29udHJvbGxlci5zY3JvbGxUbyhzY3JvbGxUYXJnZXQuc2Nyb2xsT2Zmc2V0KCksIGFkZGl0aW9uYWxQYXJhbWV0ZXIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJzY3JvbGxUbygpOiBUaGUgc3VwcGxpZWQgc2NlbmUgZG9lcyBub3QgYmVsb25nIHRvIHRoaXMgY29udHJvbGxlci4gU2Nyb2xsIGNhbmNlbGxlZC5cIiwgc2Nyb2xsVGFyZ2V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoX3V0aWwudHlwZS5GdW5jdGlvbihzY3JvbGxUYXJnZXQpKSB7IC8vIGFzc2lnbiBuZXcgc2Nyb2xsIGZ1bmN0aW9uXHJcblx0XHRcdFx0c2V0U2Nyb2xsUG9zID0gc2Nyb2xsVGFyZ2V0O1xyXG5cdFx0XHR9IGVsc2UgeyAvLyBzY3JvbGwgdG8gZWxlbWVudFxyXG5cdFx0XHRcdHZhciBlbGVtID0gX3V0aWwuZ2V0LmVsZW1lbnRzKHNjcm9sbFRhcmdldClbMF07XHJcblx0XHRcdFx0aWYgKGVsZW0pIHtcclxuXHRcdFx0XHRcdC8vIGlmIHBhcmVudCBpcyBwaW4gc3BhY2VyLCB1c2Ugc3BhY2VyIHBvc2l0aW9uIGluc3RlYWQgc28gY29ycmVjdCBzdGFydCBwb3NpdGlvbiBpcyByZXR1cm5lZCBmb3IgcGlubmVkIGVsZW1lbnRzLlxyXG5cdFx0XHRcdFx0d2hpbGUgKGVsZW0ucGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUpKSB7XHJcblx0XHRcdFx0XHRcdGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdHBhcmFtID0gX29wdGlvbnMudmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCIsIC8vIHdoaWNoIHBhcmFtIGlzIG9mIGludGVyZXN0ID9cclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldChfb3B0aW9ucy5jb250YWluZXIpLCAvLyBjb250YWluZXIgcG9zaXRpb24gaXMgbmVlZGVkIGJlY2F1c2UgZWxlbWVudCBvZmZzZXQgaXMgcmV0dXJuZWQgaW4gcmVsYXRpb24gdG8gZG9jdW1lbnQsIG5vdCBpbiByZWxhdGlvbiB0byBjb250YWluZXIuXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KGVsZW0pO1xyXG5cclxuXHRcdFx0XHRcdGlmICghX2lzRG9jdW1lbnQpIHsgLy8gY29udGFpbmVyIGlzIG5vdCB0aGUgZG9jdW1lbnQgcm9vdCwgc28gc3Vic3RyYWN0IHNjcm9sbCBQb3NpdGlvbiB0byBnZXQgY29ycmVjdCB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gcmVsYXRpdmUgdG8gc2Nyb2xsY29udGVudFxyXG5cdFx0XHRcdFx0XHRjb250YWluZXJPZmZzZXRbcGFyYW1dIC09IENvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Q29udHJvbGxlci5zY3JvbGxUbyhlbGVtZW50T2Zmc2V0W3BhcmFtXSAtIGNvbnRhaW5lck9mZnNldFtwYXJhbV0sIGFkZGl0aW9uYWxQYXJhbWV0ZXIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJzY3JvbGxUbygpOiBUaGUgc3VwcGxpZWQgYXJndW1lbnQgaXMgaW52YWxpZC4gU2Nyb2xsIGNhbmNlbGxlZC5cIiwgc2Nyb2xsVGFyZ2V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiB0aGUgY3VycmVudCBzY3JvbGxQb3NpdGlvbiBvciAqKlNldCoqIGEgbmV3IG1ldGhvZCB0byBjYWxjdWxhdGUgaXQuICBcclxuXHRcdCAqIC0+ICoqR0VUKio6XHJcblx0XHQgKiBXaGVuIHVzZWQgYXMgYSBnZXR0ZXIgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uICBcclxuXHRcdCAqIFRvIGdldCBhIGNhY2hlZCB2YWx1ZSB1c2UgQ29udHJvbGxlci5pbmZvKFwic2Nyb2xsUG9zXCIpLCB3aGljaCB3aWxsIGJlIHVwZGF0ZWQgaW4gdGhlIHVwZGF0ZSBjeWNsZS4gIFxyXG5cdFx0ICogRm9yIHZlcnRpY2FsIGNvbnRyb2xsZXJzIGl0IHdpbGwgcmV0dXJuIHRoZSB0b3Agc2Nyb2xsIG9mZnNldCBhbmQgZm9yIGhvcml6b250YWwgYXBwbGljYXRpb25zIGl0IHdpbGwgcmV0dXJuIHRoZSBsZWZ0IG9mZnNldC5cclxuXHRcdCAqXHJcblx0XHQgKiAtPiAqKlNFVCoqOlxyXG5cdFx0ICogV2hlbiB1c2VkIGFzIGEgc2V0dGVyIHRoaXMgbWV0aG9kIHByb2RlcyBhIHdheSB0byBwZXJtYW5lbnRseSBvdmVyd3JpdGUgdGhlIGNvbnRyb2xsZXIncyBzY3JvbGwgcG9zaXRpb24gY2FsY3VsYXRpb24uICBcclxuXHRcdCAqIEEgdHlwaWNhbCB1c2VjYXNlIGlzIHdoZW4gdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBub3QgcmVmbGVjdGVkIGJ5IHRoZSBjb250YWluZXJzIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHZhbHVlcywgYnV0IGZvciBleGFtcGxlIGJ5IHRoZSBpbm5lciBvZmZzZXQgb2YgYSBjaGlsZCBjb250YWluZXIuICBcclxuXHRcdCAqIE1vdmluZyBhIGNoaWxkIGNvbnRhaW5lciBpbnNpZGUgYSBwYXJlbnQgaXMgYSBjb21tb25seSB1c2VkIG1ldGhvZCBmb3Igc2V2ZXJhbCBzY3JvbGxpbmcgZnJhbWV3b3JrcywgaW5jbHVkaW5nIGlTY3JvbGwuICBcclxuXHRcdCAqIEJ5IHByb3ZpZGluZyBhbiBhbHRlcm5hdGUgY2FsY3VsYXRpb24gZnVuY3Rpb24geW91IGNhbiBtYWtlIHN1cmUgU2Nyb2xsTWFnaWMgcmVjZWl2ZXMgdGhlIGNvcnJlY3Qgc2Nyb2xsIHBvc2l0aW9uLiAgXHJcblx0XHQgKiBQbGVhc2UgYWxzbyBiZWFyIGluIG1pbmQgdGhhdCB5b3VyIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4geSB2YWx1ZXMgZm9yIHZlcnRpY2FsIHNjcm9sbHMgYW4geCBmb3IgaG9yaXpvbnRhbHMuXHJcblx0XHQgKlxyXG5cdFx0ICogVG8gY2hhbmdlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBwbGVhc2UgdXNlIGBDb250cm9sbGVyLnNjcm9sbFRvKClgLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIFBvc2l0aW9uXHJcblx0XHQgKiB2YXIgc2Nyb2xsUG9zID0gY29udHJvbGxlci5zY3JvbGxQb3MoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgc2Nyb2xsIHBvc2l0aW9uIGNhbGN1bGF0aW9uIG1ldGhvZFxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxQb3MoZnVuY3Rpb24gKCkge1xyXG5cdFx0ICpcdHJldHVybiB0aGlzLmluZm8oXCJ2ZXJ0aWNhbFwiKSA/IC1teWNoaWxkY29udGFpbmVyLnkgOiAtbXljaGlsZGNvbnRhaW5lci54XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbc2Nyb2xsUG9zTWV0aG9kXSAtIFRoZSBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciB0aGUgc2Nyb2xsIHBvc2l0aW9uIGNhbGN1bGF0aW9uIG9mIHRoZSBjb250YWluZXIuXHJcblx0XHQgKiBAcmV0dXJucyB7KG51bWJlcnxDb250cm9sbGVyKX0gQ3VycmVudCBzY3JvbGwgcG9zaXRpb24gb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2Nyb2xsUG9zID0gZnVuY3Rpb24gKHNjcm9sbFBvc01ldGhvZCkge1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0cmV0dXJuIGdldFNjcm9sbFBvcy5jYWxsKENvbnRyb2xsZXIpO1xyXG5cdFx0XHR9IGVsc2UgeyAvLyBzZXRcclxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5GdW5jdGlvbihzY3JvbGxQb3NNZXRob2QpKSB7XHJcblx0XHRcdFx0XHRnZXRTY3JvbGxQb3MgPSBzY3JvbGxQb3NNZXRob2Q7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcIlByb3ZpZGVkIHZhbHVlIGZvciBtZXRob2QgJ3Njcm9sbFBvcycgaXMgbm90IGEgZnVuY3Rpb24uIFRvIGNoYW5nZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gdXNlICdzY3JvbGxUbygpJy5cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogYWxsIGluZm9zIG9yIG9uZSBpbiBwYXJ0aWN1bGFyIGFib3V0IHRoZSBjb250cm9sbGVyLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIChudW1iZXIpXHJcblx0XHQgKiB2YXIgc2Nyb2xsUG9zID0gY29udHJvbGxlci5pbmZvKFwic2Nyb2xsUG9zXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHJldHVybnMgYWxsIGluZm9zIGFzIGFuIG9iamVjdFxyXG5cdFx0ICogdmFyIGluZm9zID0gY29udHJvbGxlci5pbmZvKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFthYm91dF0gLSBJZiBwYXNzZWQgb25seSB0aGlzIGluZm8gd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGFuIG9iamVjdCBjb250YWluaW5nIGFsbC4gIFxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0IFZhbGlkIG9wdGlvbnMgYXJlOlxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcInNpemVcImAgPT4gdGhlIGN1cnJlbnQgdmlld3BvcnQgc2l6ZSBvZiB0aGUgY29udGFpbmVyXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwidmVydGljYWxcImAgPT4gdHJ1ZSBpZiB2ZXJ0aWNhbCBzY3JvbGxpbmcsIG90aGVyd2lzZSBmYWxzZVxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcInNjcm9sbFBvc1wiYCA9PiB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJzY3JvbGxEaXJlY3Rpb25cImAgPT4gdGhlIGxhc3Qga25vd24gZGlyZWN0aW9uIG9mIHRoZSBzY3JvbGxcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJjb250YWluZXJcImAgPT4gdGhlIGNvbnRhaW5lciBlbGVtZW50XHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwiaXNEb2N1bWVudFwiYCA9PiB0cnVlIGlmIGNvbnRhaW5lciBlbGVtZW50IGlzIHRoZSBkb2N1bWVudC5cclxuXHRcdCAqIEByZXR1cm5zIHsobWl4ZWR8b2JqZWN0KX0gVGhlIHJlcXVlc3RlZCBpbmZvKHMpLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmluZm8gPSBmdW5jdGlvbiAoYWJvdXQpIHtcclxuXHRcdFx0dmFyIHZhbHVlcyA9IHtcclxuXHRcdFx0XHRzaXplOiBfdmlld1BvcnRTaXplLCAvLyBjb250YWlucyBoZWlnaHQgb3Igd2lkdGggKGluIHJlZ2FyZCB0byBvcmllbnRhdGlvbik7XHJcblx0XHRcdFx0dmVydGljYWw6IF9vcHRpb25zLnZlcnRpY2FsLFxyXG5cdFx0XHRcdHNjcm9sbFBvczogX3Njcm9sbFBvcyxcclxuXHRcdFx0XHRzY3JvbGxEaXJlY3Rpb246IF9zY3JvbGxEaXJlY3Rpb24sXHJcblx0XHRcdFx0Y29udGFpbmVyOiBfb3B0aW9ucy5jb250YWluZXIsXHJcblx0XHRcdFx0aXNEb2N1bWVudDogX2lzRG9jdW1lbnRcclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldCBhbGwgYXMgYW4gb2JqZWN0XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcclxuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZXNbYWJvdXRdICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWVzW2Fib3V0XTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogb3B0aW9uIFxcXCJcIiArIGFib3V0ICsgXCJcXFwiIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBjdXJyZW50IGxvZ2xldmVsIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHZhbHVlXHJcblx0XHQgKiB2YXIgbG9nbGV2ZWwgPSBjb250cm9sbGVyLmxvZ2xldmVsKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHZhbHVlXHJcblx0XHQgKiBjb250cm9sbGVyLmxvZ2xldmVsKDMpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbbmV3TG9nbGV2ZWxdIC0gVGhlIG5ldyBsb2dsZXZlbCBzZXR0aW5nIG9mIHRoZSBDb250cm9sbGVyLiBgWzAtM11gXHJcblx0XHQgKiBAcmV0dXJucyB7KG51bWJlcnxDb250cm9sbGVyKX0gQ3VycmVudCBsb2dsZXZlbCBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5sb2dsZXZlbCA9IGZ1bmN0aW9uIChuZXdMb2dsZXZlbCkge1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0cmV0dXJuIF9vcHRpb25zLmxvZ2xldmVsO1xyXG5cdFx0XHR9IGVsc2UgaWYgKF9vcHRpb25zLmxvZ2xldmVsICE9IG5ld0xvZ2xldmVsKSB7IC8vIHNldFxyXG5cdFx0XHRcdF9vcHRpb25zLmxvZ2xldmVsID0gbmV3TG9nbGV2ZWw7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBjdXJyZW50IGVuYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2xsZXIuICBcclxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzYWJsZSBhbGwgU2NlbmVzIGNvbm5lY3RlZCB0byB0aGUgY29udHJvbGxlciB3aXRob3V0IGRlc3Ryb3lpbmcgb3IgcmVtb3ZpbmcgdGhlbS5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHZhbHVlXHJcblx0XHQgKiB2YXIgZW5hYmxlZCA9IGNvbnRyb2xsZXIuZW5hYmxlZCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRpc2FibGUgdGhlIGNvbnRyb2xsZXJcclxuXHRcdCAqIGNvbnRyb2xsZXIuZW5hYmxlZChmYWxzZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbbmV3U3RhdGVdIC0gVGhlIG5ldyBlbmFibGVkIHN0YXRlIG9mIHRoZSBjb250cm9sbGVyIGB0cnVlYCBvciBgZmFsc2VgLlxyXG5cdFx0ICogQHJldHVybnMgeyhib29sZWFufENvbnRyb2xsZXIpfSBDdXJyZW50IGVuYWJsZWQgc3RhdGUgb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuZW5hYmxlZCA9IGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0cmV0dXJuIF9lbmFibGVkO1xyXG5cdFx0XHR9IGVsc2UgaWYgKF9lbmFibGVkICE9IG5ld1N0YXRlKSB7IC8vIHNldFxyXG5cdFx0XHRcdF9lbmFibGVkID0gISFuZXdTdGF0ZTtcclxuXHRcdFx0XHRDb250cm9sbGVyLnVwZGF0ZVNjZW5lKF9zY2VuZU9iamVjdHMsIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERlc3Ryb3kgdGhlIENvbnRyb2xsZXIsIGFsbCBTY2VuZXMgYW5kIGV2ZXJ5dGhpbmcuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHdpdGhvdXQgcmVzZXR0aW5nIHRoZSBzY2VuZXNcclxuXHRcdCAqIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyLmRlc3Ryb3koKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyB3aXRoIHNjZW5lIHJlc2V0XHJcblx0XHQgKiBjb250cm9sbGVyID0gY29udHJvbGxlci5kZXN0cm95KHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0U2NlbmVzPWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgcGlucyBhbmQgdHdlZW5zIChpZiBleGlzdGVudCkgb2YgYWxsIHNjZW5lcyB3aWxsIGJlIHJlc2V0LlxyXG5cdFx0ICogQHJldHVybnMge251bGx9IE51bGwgdG8gdW5zZXQgaGFuZGxlciB2YXJpYWJsZXMuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uIChyZXNldFNjZW5lcykge1xyXG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KF9yZWZyZXNoVGltZW91dCk7XHJcblx0XHRcdHZhciBpID0gX3NjZW5lT2JqZWN0cy5sZW5ndGg7XHJcblx0XHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0XHRfc2NlbmVPYmplY3RzW2ldLmRlc3Ryb3kocmVzZXRTY2VuZXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uQ2hhbmdlKTtcclxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25DaGFuZ2UpO1xyXG5cdFx0XHRfdXRpbC5jQUYoX3VwZGF0ZVRpbWVvdXQpO1xyXG5cdFx0XHRsb2coMywgXCJkZXN0cm95ZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiAocmVzZXQ6IFwiICsgKHJlc2V0U2NlbmVzID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpICsgXCIpXCIpO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gSU5JVFxyXG5cdFx0Y29uc3RydWN0KCk7XHJcblx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHR9O1xyXG5cclxuXHQvLyBzdG9yZSBwYWdld2lkZSBjb250cm9sbGVyIG9wdGlvbnNcclxuXHR2YXIgQ09OVFJPTExFUl9PUFRJT05TID0ge1xyXG5cdFx0ZGVmYXVsdHM6IHtcclxuXHRcdFx0Y29udGFpbmVyOiB3aW5kb3csXHJcblx0XHRcdHZlcnRpY2FsOiB0cnVlLFxyXG5cdFx0XHRnbG9iYWxTY2VuZU9wdGlvbnM6IHt9LFxyXG5cdFx0XHRsb2dsZXZlbDogMixcclxuXHRcdFx0cmVmcmVzaEludGVydmFsOiAxMDBcclxuXHRcdH1cclxuXHR9O1xyXG5cdC8qXHJcblx0ICogbWV0aG9kIHVzZWQgdG8gYWRkIGFuIG9wdGlvbiB0byBTY3JvbGxNYWdpYyBTY2VuZXMuXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5hZGRPcHRpb24gPSBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0XHRDT05UUk9MTEVSX09QVElPTlMuZGVmYXVsdHNbbmFtZV0gPSBkZWZhdWx0VmFsdWU7XHJcblx0fTtcclxuXHQvLyBpbnN0YW5jZSBleHRlbnNpb24gZnVuY3Rpb24gZm9yIHBsdWdpbnNcclxuXHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbnNpb24pIHtcclxuXHRcdHZhciBvbGRDbGFzcyA9IHRoaXM7XHJcblx0XHRTY3JvbGxNYWdpYy5Db250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvbGRDbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHR0aGlzLiRzdXBlciA9IF91dGlsLmV4dGVuZCh7fSwgdGhpcyk7IC8vIGNvcHkgcGFyZW50IHN0YXRlXHJcblx0XHRcdHJldHVybiBleHRlbnNpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG5cdFx0fTtcclxuXHRcdF91dGlsLmV4dGVuZChTY3JvbGxNYWdpYy5Db250cm9sbGVyLCBvbGRDbGFzcyk7IC8vIGNvcHkgcHJvcGVydGllc1xyXG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5wcm90b3R5cGUgPSBvbGRDbGFzcy5wcm90b3R5cGU7IC8vIGNvcHkgcHJvdG90eXBlXHJcblx0XHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXI7IC8vIHJlc3RvcmUgY29uc3RydWN0b3JcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQSBTY2VuZSBkZWZpbmVzIHdoZXJlIHRoZSBjb250cm9sbGVyIHNob3VsZCByZWFjdCBhbmQgaG93LlxyXG5cdCAqXHJcblx0ICogQGNsYXNzXHJcblx0ICpcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIC8vIGNyZWF0ZSBhIHN0YW5kYXJkIHNjZW5lIGFuZCBhZGQgaXQgdG8gYSBjb250cm9sbGVyXHJcblx0ICogbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKClcclxuXHQgKlx0XHQuYWRkVG8oY29udHJvbGxlcik7XHJcblx0ICpcclxuXHQgKiAvLyBjcmVhdGUgYSBzY2VuZSB3aXRoIGN1c3RvbSBvcHRpb25zIGFuZCBhc3NpZ24gYSBoYW5kbGVyIHRvIGl0LlxyXG5cdCAqIHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcblx0ICogXHRcdGR1cmF0aW9uOiAxMDAsXHJcblx0ICpcdFx0b2Zmc2V0OiAyMDAsXHJcblx0ICpcdFx0dHJpZ2dlckhvb2s6IFwib25FbnRlclwiLFxyXG5cdCAqXHRcdHJldmVyc2U6IGZhbHNlXHJcblx0ICogfSk7XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucyBmb3IgdGhlIFNjZW5lLiBUaGUgb3B0aW9ucyBjYW4gYmUgdXBkYXRlZCBhdCBhbnkgdGltZS4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdCAgIEluc3RlYWQgb2Ygc2V0dGluZyB0aGUgb3B0aW9ucyBmb3IgZWFjaCBzY2VuZSBpbmRpdmlkdWFsbHkgeW91IGNhbiBhbHNvIHNldCB0aGVtIGdsb2JhbGx5IGluIHRoZSBjb250cm9sbGVyIGFzIHRoZSBjb250cm9sbGVycyBgZ2xvYmFsU2NlbmVPcHRpb25zYCBvcHRpb24uIFRoZSBvYmplY3QgYWNjZXB0cyB0aGUgc2FtZSBwcm9wZXJ0aWVzIGFzIHRoZSBvbmVzIGJlbG93LiAgXHJcblx0IFx0XHRcdFx0XHRcdFx0ICAgV2hlbiBhIHNjZW5lIGlzIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyIHRoZSBvcHRpb25zIGRlZmluZWQgdXNpbmcgdGhlIFNjZW5lIGNvbnN0cnVjdG9yIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgdGhvc2Ugc2V0IGluIGBnbG9iYWxTY2VuZU9wdGlvbnNgLlxyXG5cdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pfSBbb3B0aW9ucy5kdXJhdGlvbj0wXSAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmUuIFxyXG5cdCBcdFx0XHRcdFx0UGxlYXNlIHNlZSBgU2NlbmUuZHVyYXRpb24oKWAgZm9yIGRldGFpbHMuXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm9mZnNldD0wXSAtIE9mZnNldCBWYWx1ZSBmb3IgdGhlIFRyaWdnZXIgUG9zaXRpb24uIElmIG5vIHRyaWdnZXJFbGVtZW50IGlzIGRlZmluZWQgdGhpcyB3aWxsIGJlIHRoZSBzY3JvbGwgZGlzdGFuY2UgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHBhZ2UsIGFmdGVyIHdoaWNoIHRoZSBzY2VuZSB3aWxsIHN0YXJ0LlxyXG5cdCAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSBbb3B0aW9ucy50cmlnZ2VyRWxlbWVudD1udWxsXSAtIFNlbGVjdG9yIG9yIERPTSBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBzdGFydCBvZiB0aGUgc2NlbmUuIElmIHVuZGVmaW5lZCB0aGUgc2NlbmUgd2lsbCBzdGFydCByaWdodCBhdCB0aGUgc3RhcnQgb2YgdGhlIHBhZ2UgKHVubGVzcyBhbiBvZmZzZXQgaXMgc2V0KS5cclxuXHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nKX0gW29wdGlvbnMudHJpZ2dlckhvb2s9XCJvbkNlbnRlclwiXSAtIENhbiBiZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgZGVmaW5pbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyIEhvb2sgaW4gcmVsYXRpb24gdG8gdGhlIHZpZXdwb3J0LiAgXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgQ2FuIGFsc28gYmUgZGVmaW5lZCB1c2luZyBhIHN0cmluZzpcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgXCJvbkVudGVyXCJgID0+IGAxYFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGBcIm9uQ2VudGVyXCJgID0+IGAwLjVgXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYFwib25MZWF2ZVwiYCA9PiBgMGBcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJldmVyc2U9dHJ1ZV0gLSBTaG91bGQgdGhlIHNjZW5lIHJldmVyc2UsIHdoZW4gc2Nyb2xsaW5nIHVwP1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5sb2dsZXZlbD0yXSAtIExvZ2xldmVsIGZvciBkZWJ1Z2dpbmcuIE5vdGUgdGhhdCBsb2dnaW5nIGlzIGRpc2FibGVkIGluIHRoZSBtaW5pZmllZCB2ZXJzaW9uIG9mIFNjcm9sbE1hZ2ljLlxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYDBgID0+IHNpbGVudFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYDFgID0+IGVycm9yc1xyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYDJgID0+IGVycm9ycywgd2FybmluZ3NcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAzYCA9PiBlcnJvcnMsIHdhcm5pbmdzLCBkZWJ1Z2luZm9cclxuXHQgKiBcclxuXHQgKi9cclxuXHRTY3JvbGxNYWdpYy5TY2VuZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHNldHRpbmdzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHR2YXJcclxuXHRcdFx0TkFNRVNQQUNFID0gJ1Njcm9sbE1hZ2ljLlNjZW5lJyxcclxuXHRcdFx0U0NFTkVfU1RBVEVfQkVGT1JFID0gJ0JFRk9SRScsXHJcblx0XHRcdFNDRU5FX1NUQVRFX0RVUklORyA9ICdEVVJJTkcnLFxyXG5cdFx0XHRTQ0VORV9TVEFURV9BRlRFUiA9ICdBRlRFUicsXHJcblx0XHRcdERFRkFVTFRfT1BUSU9OUyA9IFNDRU5FX09QVElPTlMuZGVmYXVsdHM7XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHByaXZhdGUgdmFyc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dmFyXHJcblx0XHRcdFNjZW5lID0gdGhpcyxcclxuXHRcdFx0X29wdGlvbnMgPSBfdXRpbC5leHRlbmQoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyksXHJcblx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0JFRk9SRSxcclxuXHRcdFx0X3Byb2dyZXNzID0gMCxcclxuXHRcdFx0X3Njcm9sbE9mZnNldCA9IHtcclxuXHRcdFx0XHRzdGFydDogMCxcclxuXHRcdFx0XHRlbmQ6IDBcclxuXHRcdFx0fSwgLy8gcmVmbGVjdHMgdGhlIGNvbnRyb2xsZXJzJ3Mgc2Nyb2xsIHBvc2l0aW9uIGZvciB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc2NlbmUgcmVzcGVjdGl2ZWx5XHJcblx0XHRcdF90cmlnZ2VyUG9zID0gMCxcclxuXHRcdFx0X2VuYWJsZWQgPSB0cnVlLFxyXG5cdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QsXHJcblx0XHRcdF9jb250cm9sbGVyO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW50ZXJuYWwgY29uc3RydWN0b3IgZnVuY3Rpb24gb2YgdGhlIFNjcm9sbE1hZ2ljIFNjZW5lXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gX29wdGlvbnMpIHsgLy8gY2hlY2sgc3VwcGxpZWQgb3B0aW9uc1xyXG5cdFx0XHRcdGlmICghREVGQVVMVF9PUFRJT05TLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IFVua25vd24gb3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBfb3B0aW9uc1trZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBhZGQgZ2V0dGVycy9zZXR0ZXJzIGZvciBhbGwgcG9zc2libGUgb3B0aW9uc1xyXG5cdFx0XHRmb3IgKHZhciBvcHRpb25OYW1lIGluIERFRkFVTFRfT1BUSU9OUykge1xyXG5cdFx0XHRcdGFkZFNjZW5lT3B0aW9uKG9wdGlvbk5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHZhbGlkYXRlIGFsbCBvcHRpb25zXHJcblx0XHRcdHZhbGlkYXRlT3B0aW9uKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBFdmVudCBNYW5hZ2VtZW50XHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHR2YXIgX2xpc3RlbmVycyA9IHt9O1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBzdGFydCBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjcm9sbCBwb3NpdGlvbiBpdHMgdGhlIHN0YXJ0aW5nIHBvaW50IG9mIHRoZSBzY2VuZS4gIFxyXG5cdFx0ICogSXQgd2lsbCBhbHNvIGZpcmUgd2hlbiBzY3JvbGxpbmcgYmFjayB1cCBnb2luZyBvdmVyIHRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgc2NlbmUuIElmIHlvdSB3YW50IHNvbWV0aGluZyB0byBoYXBwZW4gb25seSB3aGVuIHNjcm9sbGluZyBkb3duL3JpZ2h0LCB1c2UgdGhlIHNjcm9sbERpcmVjdGlvbiBwYXJhbWV0ZXIgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqXHJcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNzdGFydFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcInN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIkhpdCBzdGFydCBwb2ludCBvZiBzY2VuZS5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJCRUZPUkVcImAgb3IgYFwiRFVSSU5HXCJgXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgZW5kIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2Nyb2xsIHBvc2l0aW9uIGl0cyB0aGUgZW5kaW5nIHBvaW50IG9mIHRoZSBzY2VuZS4gIFxyXG5cdFx0ICogSXQgd2lsbCBhbHNvIGZpcmUgd2hlbiBzY3JvbGxpbmcgYmFjayB1cCBmcm9tIGFmdGVyIHRoZSBzY2VuZSBhbmQgZ29pbmcgb3ZlciBpdHMgZW5kIHBvc2l0aW9uLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgdG8gaGFwcGVuIG9ubHkgd2hlbiBzY3JvbGxpbmcgZG93bi9yaWdodCwgdXNlIHRoZSBzY3JvbGxEaXJlY3Rpb24gcGFyYW1ldGVyIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjZW5kXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwiZW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIkhpdCBlbmQgcG9pbnQgb2Ygc2NlbmUuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiRFVSSU5HXCJgIG9yIGBcIkFGVEVSXCJgXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgZW50ZXIgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY2VuZSBlbnRlcnMgdGhlIFwiRFVSSU5HXCIgc3RhdGUuICBcclxuXHRcdCAqIEtlZXAgaW4gbWluZCB0aGF0IGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHRoZSBzY2VuZSBwbGF5cyBmb3J3YXJkIG9yIGJhY2t3YXJkOiBUaGlzIGV2ZW50IGFsd2F5cyBmaXJlcyB3aGVuIHRoZSBzY2VuZSBlbnRlcnMgaXRzIGFjdGl2ZSBzY3JvbGwgdGltZWZyYW1lLCByZWdhcmRsZXNzIG9mIHRoZSBzY3JvbGwtZGlyZWN0aW9uLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2VudGVyXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgZW50ZXJlZC5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSAtIGFsd2F5cyBgXCJEVVJJTkdcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBsZWF2ZSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjZW5lJ3Mgc3RhdGUgZ29lcyBmcm9tIFwiRFVSSU5HXCIgdG8gZWl0aGVyIFwiQkVGT1JFXCIgb3IgXCJBRlRFUlwiLiAgXHJcblx0XHQgKiBLZWVwIGluIG1pbmQgdGhhdCBpdCBkb2Vzbid0IG1hdHRlciBpZiB0aGUgc2NlbmUgcGxheXMgZm9yd2FyZCBvciBiYWNrd2FyZDogVGhpcyBldmVudCBhbHdheXMgZmlyZXMgd2hlbiB0aGUgc2NlbmUgbGVhdmVzIGl0cyBhY3RpdmUgc2Nyb2xsIHRpbWVmcmFtZSwgcmVnYXJkbGVzcyBvZiB0aGUgc2Nyb2xsLWRpcmVjdGlvbi5cclxuXHRcdCAqXHJcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNsZWF2ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImxlYXZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIGxlZnQuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgIG9yIGBcIkFGVEVSXCJgXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgdXBkYXRlIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2NlbmUgaXMgdXBkYXRlZCAoYnV0IG5vdCBuZWNlc3NhcmlseSBjaGFuZ2VzIHRoZSBwcm9ncmVzcykuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3VwZGF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSB1cGRhdGVkLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5zdGFydFBvcyAtIFRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgKGluIHJlbGF0aW9uIHRvIHRoZSBjb25haW5lcilcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5lbmRQb3MgLSBUaGUgZW5kaW5nIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSAoaW4gcmVsYXRpb24gdG8gdGhlIGNvbmFpbmVyKVxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnNjcm9sbFBvcyAtIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgcHJvZ3Jlc3MgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBwcm9ncmVzcyBvZiB0aGUgc2NlbmUgY2hhbmdlcy5cclxuXHRcdCAqXHJcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNwcm9ncmVzc1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcInByb2dyZXNzXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIHByb2dyZXNzIGNoYW5nZWQgdG8gXCIgKyBldmVudC5wcm9ncmVzcyk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJCRUZPUkVcImAsIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGNoYW5nZSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbnZldmVyIGEgcHJvcGVydHkgb2YgdGhlIHNjZW5lIGlzIGNoYW5nZWQuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2NoYW5nZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBQcm9wZXJ0eSBcXFwiXCIgKyBldmVudC53aGF0ICsgXCJcXFwiIGNoYW5nZWQgdG8gXCIgKyBldmVudC5uZXd2YWwpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LndoYXQgLSBJbmRpY2F0ZXMgd2hhdCB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXHJcblx0XHQgKiBAcHJvcGVydHkge21peGVkfSBldmVudC5uZXd2YWwgLSBUaGUgbmV3IHZhbHVlIG9mIHRoZSBjaGFuZ2VkIHByb3BlcnR5XHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgc2hpZnQgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW52ZXZlciB0aGUgc3RhcnQgb3IgZW5kICoqc2Nyb2xsIG9mZnNldCoqIG9mIHRoZSBzY2VuZSBjaGFuZ2UuXHJcblx0XHQgKiBUaGlzIGhhcHBlbnMgZXhwbGljaXRlbHksIHdoZW4gb25lIG9mIHRoZXNlIHZhbHVlcyBjaGFuZ2U6IGBvZmZzZXRgLCBgZHVyYXRpb25gIG9yIGB0cmlnZ2VySG9va2AuXHJcblx0XHQgKiBJdCB3aWxsIGZpcmUgaW1wbGljaXRseSB3aGVuIHRoZSBgdHJpZ2dlckVsZW1lbnRgIGNoYW5nZXMsIGlmIHRoZSBuZXcgZWxlbWVudCBoYXMgYSBkaWZmZXJlbnQgcG9zaXRpb24gKG1vc3QgY2FzZXMpLlxyXG5cdFx0ICogSXQgd2lsbCBhbHNvIGZpcmUgaW1wbGljaXRseSB3aGVuIHRoZSBzaXplIG9mIHRoZSBjb250YWluZXIgY2hhbmdlcyBhbmQgdGhlIHRyaWdnZXJIb29rIGlzIGFueXRoaW5nIG90aGVyIHRoYW4gYG9uTGVhdmVgLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNzaGlmdFxyXG5cdFx0ICogQHNpbmNlIDEuMS4wXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwic2hpZnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgbW92ZWQsIGJlY2F1c2UgdGhlIFwiICsgZXZlbnQucmVhc29uICsgXCIgaGFzIGNoYW5nZWQuKVwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5yZWFzb24gLSBJbmRpY2F0ZXMgd2h5IHRoZSBzY2VuZSBoYXMgc2hpZnRlZFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGRlc3Ryb3kgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW52ZXZlciB0aGUgc2NlbmUgaXMgZGVzdHJveWVkLlxyXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byB0aWR5IHVwIGN1c3RvbSBiZWhhdmlvdXIgdXNlZCBpbiBldmVudHMuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2Rlc3Ryb3lcclxuXHRcdCAqIEBzaW5jZSAxLjEuMFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogICAgICAgIC8vIGFkZCBjdXN0b20gYWN0aW9uXHJcblx0XHQgKiAgICAgICAgJChcIiNteS1lbGVtXCIpLmxlZnQoXCIyMDBcIik7XHJcblx0XHQgKiAgICAgIH0pXHJcblx0XHQgKiAgICAgIC5vbihcImRlc3Ryb3lcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiAgICAgICAgLy8gcmVzZXQgbXkgZWxlbWVudCB0byBzdGFydCBwb3NpdGlvblxyXG5cdFx0ICogICAgICAgIGlmIChldmVudC5yZXNldCkge1xyXG5cdFx0ICogICAgICAgICAgJChcIiNteS1lbGVtXCIpLmxlZnQoXCIwXCIpO1xyXG5cdFx0ICogICAgICAgIH1cclxuXHRcdCAqICAgICAgfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtib29sZWFufSBldmVudC5yZXNldCAtIEluZGljYXRlcyBpZiB0aGUgZGVzdHJveSBtZXRob2Qgd2FzIGNhbGxlZCB3aXRoIHJlc2V0IGB0cnVlYCBvciBgZmFsc2VgLlxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGFkZCBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSBjb250cm9sbGVyLlxyXG5cdFx0ICogVGhpcyBpcyBtb3N0bHkgdXNlZCBieSBwbHVnaW5zIHRvIGtub3cgdGhhdCBjaGFuZ2UgbWlnaHQgYmUgZHVlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNhZGRcclxuXHRcdCAqIEBzaW5jZSAyLjAuMFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImFkZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coJ1NjZW5lIHdhcyBhZGRlZCB0byBhIG5ldyBjb250cm9sbGVyLicpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtib29sZWFufSBldmVudC5jb250cm9sbGVyIC0gVGhlIGNvbnRyb2xsZXIgb2JqZWN0IHRoZSBzY2VuZSB3YXMgYWRkZWQgdG8uXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgcmVtb3ZlIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuIHRoZSBzY2VuZSBpcyByZW1vdmVkIGZyb20gYSBjb250cm9sbGVyLlxyXG5cdFx0ICogVGhpcyBpcyBtb3N0bHkgdXNlZCBieSBwbHVnaW5zIHRvIGtub3cgdGhhdCBjaGFuZ2UgbWlnaHQgYmUgZHVlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVcclxuXHRcdCAqIEBzaW5jZSAyLjAuMFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcInJlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coJ1NjZW5lIHdhcyByZW1vdmVkIGZyb20gaXRzIGNvbnRyb2xsZXIuJyk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkZCBvbmUgb3JlIG1vcmUgZXZlbnQgbGlzdGVuZXIuICBcclxuXHRcdCAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIGF0IHRoZSByZXNwZWN0aXZlIGV2ZW50LCBhbmQgYW4gb2JqZWN0IGNvbnRhaW5pbmcgcmVsZXZhbnQgZGF0YSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI29uXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIGZ1bmN0aW9uIGNhbGxiYWNrIChldmVudCkge1xyXG5cdFx0ICogXHRcdGNvbnNvbGUubG9nKFwiRXZlbnQgZmlyZWQhIChcIiArIGV2ZW50LnR5cGUgKyBcIilcIik7XHJcblx0XHQgKiB9XHJcblx0XHQgKiAvLyBhZGQgbGlzdGVuZXJzXHJcblx0XHQgKiBzY2VuZS5vbihcImNoYW5nZSB1cGRhdGUgcHJvZ3Jlc3Mgc3RhcnQgZW5kIGVudGVyIGxlYXZlXCIsIGNhbGxiYWNrKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXMgLSBUaGUgbmFtZSBvciBuYW1lcyBvZiB0aGUgZXZlbnQgdGhlIGNhbGxiYWNrIHNob3VsZCBiZSBhdHRhY2hlZCB0by5cclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBleGVjdXRlZCwgd2hlbiB0aGUgZXZlbnQgaXMgZGlzcGF0Y2hlZC4gQW4gZXZlbnQgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMub24gPSBmdW5jdGlvbiAobmFtZXMsIGNhbGxiYWNrKSB7XHJcblx0XHRcdGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKGNhbGxiYWNrKSkge1xyXG5cdFx0XHRcdG5hbWVzID0gbmFtZXMudHJpbSgpLnNwbGl0KCcgJyk7XHJcblx0XHRcdFx0bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnVsbG5hbWUpIHtcclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRuYW1lcGFydHMgPSBmdWxsbmFtZS5zcGxpdCgnLicpLFxyXG5cdFx0XHRcdFx0XHRldmVudG5hbWUgPSBuYW1lcGFydHNbMF0sXHJcblx0XHRcdFx0XHRcdG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXTtcclxuXHRcdFx0XHRcdGlmIChldmVudG5hbWUgIT0gXCIqXCIpIHsgLy8gZGlzYWxsb3cgd2lsZGNhcmRzXHJcblx0XHRcdFx0XHRcdGlmICghX2xpc3RlbmVyc1tldmVudG5hbWVdKSB7XHJcblx0XHRcdFx0XHRcdFx0X2xpc3RlbmVyc1tldmVudG5hbWVdID0gW107XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0X2xpc3RlbmVyc1tldmVudG5hbWVdLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlIHx8ICcnLFxyXG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiB3aGVuIGNhbGxpbmcgJy5vbigpJzogU3VwcGxpZWQgY2FsbGJhY2sgZm9yICdcIiArIG5hbWVzICsgXCInIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uIVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIG9uZSBvciBtb3JlIGV2ZW50IGxpc3RlbmVyLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNvZmZcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogZnVuY3Rpb24gY2FsbGJhY2sgKGV2ZW50KSB7XHJcblx0XHQgKiBcdFx0Y29uc29sZS5sb2coXCJFdmVudCBmaXJlZCEgKFwiICsgZXZlbnQudHlwZSArIFwiKVwiKTtcclxuXHRcdCAqIH1cclxuXHRcdCAqIC8vIGFkZCBsaXN0ZW5lcnNcclxuXHRcdCAqIHNjZW5lLm9uKFwiY2hhbmdlIHVwZGF0ZVwiLCBjYWxsYmFjayk7XHJcblx0XHQgKiAvLyByZW1vdmUgbGlzdGVuZXJzXHJcblx0XHQgKiBzY2VuZS5vZmYoXCJjaGFuZ2UgdXBkYXRlXCIsIGNhbGxiYWNrKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXMgLSBUaGUgbmFtZSBvciBuYW1lcyBvZiB0aGUgZXZlbnQgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC5cclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBBIHNwZWNpZmljIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuIElmIG5vbmUgaXMgcGFzc2VkIGFsbCBjYWxsYmFja3MgdG8gdGhlIGV2ZW50IGxpc3RlbmVyIHdpbGwgYmUgcmVtb3ZlZC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMub2ZmID0gZnVuY3Rpb24gKG5hbWVzLCBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoIW5hbWVzKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IEludmFsaWQgZXZlbnQgbmFtZSBzdXBwbGllZC5cIik7XHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0XHR9XHJcblx0XHRcdG5hbWVzID0gbmFtZXMudHJpbSgpLnNwbGl0KCcgJyk7XHJcblx0XHRcdG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGZ1bGxuYW1lLCBrZXkpIHtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdG5hbWVwYXJ0cyA9IGZ1bGxuYW1lLnNwbGl0KCcuJyksXHJcblx0XHRcdFx0XHRldmVudG5hbWUgPSBuYW1lcGFydHNbMF0sXHJcblx0XHRcdFx0XHRuYW1lc3BhY2UgPSBuYW1lcGFydHNbMV0gfHwgJycsXHJcblx0XHRcdFx0XHRyZW1vdmVMaXN0ID0gZXZlbnRuYW1lID09PSAnKicgPyBPYmplY3Qua2V5cyhfbGlzdGVuZXJzKSA6IFtldmVudG5hbWVdO1xyXG5cdFx0XHRcdHJlbW92ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAocmVtb3ZlKSB7XHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0bGlzdCA9IF9saXN0ZW5lcnNbcmVtb3ZlXSB8fCBbXSxcclxuXHRcdFx0XHRcdFx0aSA9IGxpc3QubGVuZ3RoO1xyXG5cdFx0XHRcdFx0d2hpbGUgKGktLSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGlzdGVuZXIgPSBsaXN0W2ldO1xyXG5cdFx0XHRcdFx0XHRpZiAobGlzdGVuZXIgJiYgKG5hbWVzcGFjZSA9PT0gbGlzdGVuZXIubmFtZXNwYWNlIHx8IG5hbWVzcGFjZSA9PT0gJyonKSAmJiAoIWNhbGxiYWNrIHx8IGNhbGxiYWNrID09IGxpc3RlbmVyLmNhbGxiYWNrKSkge1xyXG5cdFx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoIWxpc3QubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdGRlbGV0ZSBfbGlzdGVuZXJzW3JlbW92ZV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVHJpZ2dlciBhbiBldmVudC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlclxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiB0aGlzLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdGhhdCBzaG91bGQgYmUgdHJpZ2dlcmVkLlxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IFt2YXJzXSAtIEFuIG9iamVjdCBjb250YWluaW5nIGluZm8gdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMudHJpZ2dlciA9IGZ1bmN0aW9uIChuYW1lLCB2YXJzKSB7XHJcblx0XHRcdGlmIChuYW1lKSB7XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRuYW1lcGFydHMgPSBuYW1lLnRyaW0oKS5zcGxpdCgnLicpLFxyXG5cdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxyXG5cdFx0XHRcdFx0bmFtZXNwYWNlID0gbmFtZXBhcnRzWzFdLFxyXG5cdFx0XHRcdFx0bGlzdGVuZXJzID0gX2xpc3RlbmVyc1tldmVudG5hbWVdO1xyXG5cdFx0XHRcdGxvZygzLCAnZXZlbnQgZmlyZWQ6JywgZXZlbnRuYW1lLCB2YXJzID8gXCItPlwiIDogJycsIHZhcnMgfHwgJycpO1xyXG5cdFx0XHRcdGlmIChsaXN0ZW5lcnMpIHtcclxuXHRcdFx0XHRcdGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lciwga2V5KSB7XHJcblx0XHRcdFx0XHRcdGlmICghbmFtZXNwYWNlIHx8IG5hbWVzcGFjZSA9PT0gbGlzdGVuZXIubmFtZXNwYWNlKSB7XHJcblx0XHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suY2FsbChTY2VuZSwgbmV3IFNjcm9sbE1hZ2ljLkV2ZW50KGV2ZW50bmFtZSwgbGlzdGVuZXIubmFtZXNwYWNlLCBTY2VuZSwgdmFycykpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IEludmFsaWQgZXZlbnQgbmFtZSBzdXBwbGllZC5cIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBzZXQgZXZlbnQgbGlzdGVuZXJzXHJcblx0XHRTY2VuZVxyXG5cdFx0XHQub24oXCJjaGFuZ2UuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRpZiAoZS53aGF0ICE9PSBcImxvZ2xldmVsXCIgJiYgZS53aGF0ICE9PSBcInR3ZWVuQ2hhbmdlc1wiKSB7IC8vIG5vIG5lZWQgZm9yIGEgc2NlbmUgdXBkYXRlIHNjZW5lIHdpdGggdGhlc2Ugb3B0aW9ucy4uLlxyXG5cdFx0XHRcdFx0aWYgKGUud2hhdCA9PT0gXCJ0cmlnZ2VyRWxlbWVudFwiKSB7XHJcblx0XHRcdFx0XHRcdHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24oKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZS53aGF0ID09PSBcInJldmVyc2VcIikgeyAvLyB0aGUgb25seSBwcm9wZXJ0eSBsZWZ0IHRoYXQgbWF5IGhhdmUgYW4gaW1wYWN0IG9uIHRoZSBjdXJyZW50IHNjZW5lIHN0YXRlLiBFdmVyeXRoaW5nIGVsc2UgaXMgaGFuZGxlZCBieSB0aGUgc2hpZnQgZXZlbnQuXHJcblx0XHRcdFx0XHRcdFNjZW5lLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKFwic2hpZnQuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR1cGRhdGVTY3JvbGxPZmZzZXQoKTtcclxuXHRcdFx0XHRTY2VuZS51cGRhdGUoKTsgLy8gdXBkYXRlIHNjZW5lIHRvIHJlZmxlY3QgbmV3IHBvc2l0aW9uXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2VuZCBhIGRlYnVnIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogYnV0IHByb3ZpZGVkIHB1YmxpY2x5IHdpdGggX2xvZyBmb3IgcGx1Z2luc1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBsb2dsZXZlbCAtIFRoZSBsb2dsZXZlbCByZXF1aXJlZCB0byBpbml0aWF0ZSBvdXRwdXQgZm9yIHRoZSBtZXNzYWdlLlxyXG5cdFx0ICogQHBhcmFtIHsuLi5taXhlZH0gb3V0cHV0IC0gT25lIG9yIG1vcmUgdmFyaWFibGVzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgY29uc29sZS5cclxuXHRcdCAqL1xyXG5cdFx0dmFyIGxvZyA9IHRoaXMuX2xvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCwgb3V0cHV0KSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy5sb2dsZXZlbCA+PSBsb2dsZXZlbCkge1xyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEsIDAsIFwiKFwiICsgTkFNRVNQQUNFICsgXCIpIC0+XCIpO1xyXG5cdFx0XHRcdF91dGlsLmxvZy5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgdGhlIHNjZW5lIHRvIGEgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgQ29udHJvbGxlci5hZGRTY2VuZShzY2VuZSlgLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNhZGRUb1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBhZGQgYSBzY2VuZSB0byBhIFNjcm9sbE1hZ2ljIENvbnRyb2xsZXJcclxuXHRcdCAqIHNjZW5lLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7U2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gY29udHJvbGxlciAtIFRoZSBjb250cm9sbGVyIHRvIHdoaWNoIHRoZSBzY2VuZSBzaG91bGQgYmUgYWRkZWQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmFkZFRvID0gZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcclxuXHRcdFx0aWYgKCEoY29udHJvbGxlciBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIpKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IHN1cHBsaWVkIGFyZ3VtZW50IG9mICdhZGRUbygpJyBpcyBub3QgYSB2YWxpZCBTY3JvbGxNYWdpYyBDb250cm9sbGVyXCIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKF9jb250cm9sbGVyICE9IGNvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHQvLyBuZXcgY29udHJvbGxlclxyXG5cdFx0XHRcdGlmIChfY29udHJvbGxlcikgeyAvLyB3YXMgYXNzb2NpYXRlZCB0byBhIGRpZmZlcmVudCBjb250cm9sbGVyIGJlZm9yZSwgc28gcmVtb3ZlIGl0Li4uXHJcblx0XHRcdFx0XHRfY29udHJvbGxlci5yZW1vdmVTY2VuZShTY2VuZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF9jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuXHRcdFx0XHR2YWxpZGF0ZU9wdGlvbigpO1xyXG5cdFx0XHRcdHVwZGF0ZUR1cmF0aW9uKHRydWUpO1xyXG5cdFx0XHRcdHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24odHJ1ZSk7XHJcblx0XHRcdFx0dXBkYXRlU2Nyb2xsT2Zmc2V0KCk7XHJcblx0XHRcdFx0X2NvbnRyb2xsZXIuaW5mbyhcImNvbnRhaW5lclwiKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNvbnRhaW5lclJlc2l6ZSk7XHJcblx0XHRcdFx0Y29udHJvbGxlci5hZGRTY2VuZShTY2VuZSk7XHJcblx0XHRcdFx0U2NlbmUudHJpZ2dlcihcImFkZFwiLCB7XHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiBfY29udHJvbGxlclxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGxvZygzLCBcImFkZGVkIFwiICsgTkFNRVNQQUNFICsgXCIgdG8gY29udHJvbGxlclwiKTtcclxuXHRcdFx0XHRTY2VuZS51cGRhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBjdXJyZW50IGVuYWJsZWQgc3RhdGUgb2YgdGhlIHNjZW5lLiAgXHJcblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc2FibGUgdGhpcyBzY2VuZSB3aXRob3V0IHJlbW92aW5nIG9yIGRlc3Ryb3lpbmcgaXQuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2VuYWJsZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHZhbHVlXHJcblx0XHQgKiB2YXIgZW5hYmxlZCA9IHNjZW5lLmVuYWJsZWQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkaXNhYmxlIHRoZSBzY2VuZVxyXG5cdFx0ICogc2NlbmUuZW5hYmxlZChmYWxzZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbbmV3U3RhdGVdIC0gVGhlIG5ldyBlbmFibGVkIHN0YXRlIG9mIHRoZSBzY2VuZSBgdHJ1ZWAgb3IgYGZhbHNlYC5cclxuXHRcdCAqIEByZXR1cm5zIHsoYm9vbGVhbnxTY2VuZSl9IEN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5lbmFibGVkID0gZnVuY3Rpb24gKG5ld1N0YXRlKSB7XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRyZXR1cm4gX2VuYWJsZWQ7XHJcblx0XHRcdH0gZWxzZSBpZiAoX2VuYWJsZWQgIT0gbmV3U3RhdGUpIHsgLy8gc2V0XHJcblx0XHRcdFx0X2VuYWJsZWQgPSAhIW5ld1N0YXRlO1xyXG5cdFx0XHRcdFNjZW5lLnVwZGF0ZSh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHRoZSBzY2VuZSBmcm9tIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBDb250cm9sbGVyLnJlbW92ZVNjZW5lKHNjZW5lKWAuXHJcblx0XHQgKiBUaGUgc2NlbmUgd2lsbCBub3QgYmUgdXBkYXRlZCBhbnltb3JlIHVudGlsIHlvdSByZWFkZCBpdCB0byBhIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBUbyByZW1vdmUgdGhlIHBpbiBvciB0aGUgdHdlZW4geW91IG5lZWQgdG8gY2FsbCByZW1vdmVUd2VlbigpIG9yIHJlbW92ZVBpbigpIHJlc3BlY3RpdmVseS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gcmVtb3ZlIHRoZSBzY2VuZSBmcm9tIGl0cyBjb250cm9sbGVyXHJcblx0XHQgKiBzY2VuZS5yZW1vdmUoKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyKSB7XHJcblx0XHRcdFx0X2NvbnRyb2xsZXIuaW5mbyhcImNvbnRhaW5lclwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNvbnRhaW5lclJlc2l6ZSk7XHJcblx0XHRcdFx0dmFyIHRtcFBhcmVudCA9IF9jb250cm9sbGVyO1xyXG5cdFx0XHRcdF9jb250cm9sbGVyID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdHRtcFBhcmVudC5yZW1vdmVTY2VuZShTY2VuZSk7XHJcblx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInJlbW92ZVwiKTtcclxuXHRcdFx0XHRsb2coMywgXCJyZW1vdmVkIFwiICsgTkFNRVNQQUNFICsgXCIgZnJvbSBjb250cm9sbGVyXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXN0cm95IHRoZSBzY2VuZSBhbmQgZXZlcnl0aGluZy5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjZGVzdHJveVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGRlc3Ryb3kgdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXR0aW5nIHRoZSBwaW4gYW5kIHR3ZWVuIHRvIHRoZWlyIGluaXRpYWwgcG9zaXRpb25zXHJcblx0XHQgKiBzY2VuZSA9IHNjZW5lLmRlc3Ryb3koKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkZXN0cm95IHRoZSBzY2VuZSBhbmQgcmVzZXQgdGhlIHBpbiBhbmQgdHdlZW5cclxuXHRcdCAqIHNjZW5lID0gc2NlbmUuZGVzdHJveSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldD1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHBpbiBhbmQgdHdlZW4gKGlmIGV4aXN0ZW50KSB3aWxsIGJlIHJlc2V0LlxyXG5cdFx0ICogQHJldHVybnMge251bGx9IE51bGwgdG8gdW5zZXQgaGFuZGxlciB2YXJpYWJsZXMuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uIChyZXNldCkge1xyXG5cdFx0XHRTY2VuZS50cmlnZ2VyKFwiZGVzdHJveVwiLCB7XHJcblx0XHRcdFx0cmVzZXQ6IHJlc2V0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRTY2VuZS5yZW1vdmUoKTtcclxuXHRcdFx0U2NlbmUub2ZmKFwiKi4qXCIpO1xyXG5cdFx0XHRsb2coMywgXCJkZXN0cm95ZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiAocmVzZXQ6IFwiICsgKHJlc2V0ID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpICsgXCIpXCIpO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgU2NlbmUgdG8gcmVmbGVjdCB0aGUgY3VycmVudCBzdGF0ZS4gIFxyXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgQ29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSwgaW1tZWRpYXRlbHkpYC4gIFxyXG5cdFx0ICogVGhlIHVwZGF0ZSBtZXRob2QgY2FsY3VsYXRlcyB0aGUgc2NlbmUncyBzdGFydCBhbmQgZW5kIHBvc2l0aW9uIChiYXNlZCBvbiB0aGUgdHJpZ2dlciBlbGVtZW50LCB0cmlnZ2VyIGhvb2ssIGR1cmF0aW9uIGFuZCBvZmZzZXQpIGFuZCBjaGVja3MgaXQgYWdhaW5zdCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lci4gIFxyXG5cdFx0ICogSXQgdGhlbiB1cGRhdGVzIHRoZSBjdXJyZW50IHNjZW5lIHN0YXRlIGFjY29yZGluZ2x5IChvciBkb2VzIG5vdGhpbmcsIGlmIHRoZSBzdGF0ZSBpcyBhbHJlYWR5IGNvcnJlY3QpIOKAkyBQaW5zIHdpbGwgYmUgc2V0IHRvIHRoZWlyIGNvcnJlY3QgcG9zaXRpb24gYW5kIHR3ZWVucyB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlaXIgY29ycmVjdCBwcm9ncmVzcy5cclxuXHRcdCAqIFRoaXMgbWVhbnMgYW4gdXBkYXRlIGRvZXNuJ3QgbmVjZXNzYXJpbHkgcmVzdWx0IGluIGEgcHJvZ3Jlc3MgY2hhbmdlLiBUaGUgYHByb2dyZXNzYCBldmVudCB3aWxsIGJlIGZpcmVkIGlmIHRoZSBwcm9ncmVzcyBoYXMgaW5kZWVkIGNoYW5nZWQgYmV0d2VlbiB0aGlzIHVwZGF0ZSBhbmQgdGhlIGxhc3QuICBcclxuXHRcdCAqIF8qKk5PVEU6KiogVGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgY29uc3RhbnRseSB3aGVuZXZlciBTY3JvbGxNYWdpYyBkZXRlY3RzIGEgY2hhbmdlLiBUaGUgb25seSBhcHBsaWNhdGlvbiBmb3IgeW91IGlzIGlmIHlvdSBjaGFuZ2Ugc29tZXRoaW5nIG91dHNpZGUgb2YgdGhlIHJlYWxtIG9mIFNjcm9sbE1hZ2ljLCBsaWtlIG1vdmluZyB0aGUgdHJpZ2dlciBvciBjaGFuZ2luZyB0d2VlbiBwYXJhbWV0ZXJzLl9cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdXBkYXRlXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBzY2VuZSBvbiBuZXh0IHRpY2tcclxuXHRcdCAqIHNjZW5lLnVwZGF0ZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgc2NlbmUgaW1tZWRpYXRlbHlcclxuXHRcdCAqIHNjZW5lLnVwZGF0ZSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMgU2NlbmUudXBkYXRlXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbaW1tZWRpYXRlbHk9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSB1cGRhdGUgd2lsbCBiZSBpbnN0YW50LCBpZiBgZmFsc2VgIGl0IHdpbGwgd2FpdCB1bnRpbCBuZXh0IHVwZGF0ZSBjeWNsZSAoYmV0dGVyIHBlcmZvcm1hbmNlKS5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xyXG5cdFx0XHRcdGlmIChpbW1lZGlhdGVseSkge1xyXG5cdFx0XHRcdFx0aWYgKF9jb250cm9sbGVyLmVuYWJsZWQoKSAmJiBfZW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxQb3MgPSBfY29udHJvbGxlci5pbmZvKFwic2Nyb2xsUG9zXCIpLFxyXG5cdFx0XHRcdFx0XHRcdG5ld1Byb2dyZXNzO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKF9vcHRpb25zLmR1cmF0aW9uID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdG5ld1Byb2dyZXNzID0gKHNjcm9sbFBvcyAtIF9zY3JvbGxPZmZzZXQuc3RhcnQpIC8gKF9zY3JvbGxPZmZzZXQuZW5kIC0gX3Njcm9sbE9mZnNldC5zdGFydCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3UHJvZ3Jlc3MgPSBzY3JvbGxQb3MgPj0gX3Njcm9sbE9mZnNldC5zdGFydCA/IDEgOiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwidXBkYXRlXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRzdGFydFBvczogX3Njcm9sbE9mZnNldC5zdGFydCxcclxuXHRcdFx0XHRcdFx0XHRlbmRQb3M6IF9zY3JvbGxPZmZzZXQuZW5kLFxyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvczogc2Nyb2xsUG9zXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0U2NlbmUucHJvZ3Jlc3MobmV3UHJvZ3Jlc3MpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChfcGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7XHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKHRydWUpOyAvLyB1bnBpbiBpbiBwb3NpdGlvblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfY29udHJvbGxlci51cGRhdGVTY2VuZShTY2VuZSwgZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyBkeW5hbWljIHNjZW5lIHZhcmlhYmxlcyBsaWtlIHRoZSB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gb3IgdGhlIGR1cmF0aW9uLlxyXG5cdFx0ICogVGhpcyBtZXRob2QgaXMgYXV0b21hdGljYWxseSBjYWxsZWQgaW4gcmVndWxhciBpbnRlcnZhbHMgZnJvbSB0aGUgY29udHJvbGxlci4gU2VlIHtAbGluayBTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBvcHRpb24gYHJlZnJlc2hJbnRlcnZhbGAuXHJcblx0XHQgKiBcclxuXHRcdCAqIFlvdSBjYW4gY2FsbCBpdCB0byBtaW5pbWl6ZSBsYWcsIGZvciBleGFtcGxlIHdoZW4geW91IGludGVudGlvbmFsbHkgY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQuXHJcblx0XHQgKiBJZiB5b3UgZG9uJ3QgaXQgd2lsbCBzaW1wbHkgYmUgdXBkYXRlZCBpbiB0aGUgbmV4dCByZWZyZXNoIGludGVydmFsIG9mIHRoZSBjb250YWluZXIsIHdoaWNoIGlzIHVzdWFsbHkgc3VmZmljaWVudC5cclxuXHRcdCAqXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlZnJlc2hcclxuXHRcdCAqIEBzaW5jZSAxLjEuMFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHt0cmlnZ2VyRWxlbWVudDogXCIjdHJpZ2dlclwifSk7XHJcblx0XHQgKiBcclxuXHRcdCAqIC8vIGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXJcclxuXHRcdCAqICQoXCIjdHJpZ2dlclwiKS5jc3MoXCJ0b3BcIiwgNTAwKTtcclxuXHRcdCAqIC8vIGltbWVkaWF0ZWx5IGxldCB0aGUgc2NlbmUga25vdyBvZiB0aGlzIGNoYW5nZVxyXG5cdFx0ICogc2NlbmUucmVmcmVzaCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCBpZiB0aGUgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIG9yIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIGlmIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR1cGRhdGVEdXJhdGlvbigpO1xyXG5cdFx0XHR1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uKCk7XHJcblx0XHRcdC8vIHVwZGF0ZSB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb25cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgc2NlbmUncyBwcm9ncmVzcy4gIFxyXG5cdFx0ICogVXN1YWxseSBpdCBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5IHRvIHVzZSB0aGlzIGFzIGEgc2V0dGVyLCBhcyBpdCBpcyBzZXQgYXV0b21hdGljYWxseSBieSBzY2VuZS51cGRhdGUoKS4gIFxyXG5cdFx0ICogVGhlIG9yZGVyIGluIHdoaWNoIHRoZSBldmVudHMgYXJlIGZpcmVkIGRlcGVuZHMgb24gdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZTpcclxuXHRcdCAqICAxLiBTY2VuZXMgd2l0aCBgZHVyYXRpb24gPT0gMGA6ICBcclxuXHRcdCAqICBTY2VuZXMgdGhhdCBoYXZlIG5vIGR1cmF0aW9uIGJ5IGRlZmluaXRpb24gaGF2ZSBubyBlbmRpbmcuIFRodXMgdGhlIGBlbmRgIGV2ZW50IHdpbGwgbmV2ZXIgYmUgZmlyZWQuICBcclxuXHRcdCAqICBXaGVuIHRoZSB0cmlnZ2VyIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSBpcyBwYXNzZWQgdGhlIGV2ZW50cyBhcmUgYWx3YXlzIGZpcmVkIGluIHRoaXMgb3JkZXI6ICBcclxuXHRcdCAqICBgZW50ZXJgLCBgc3RhcnRgLCBgcHJvZ3Jlc3NgIHdoZW4gc2Nyb2xsaW5nIGZvcndhcmQgIFxyXG5cdFx0ICogIGFuZCAgXHJcblx0XHQgKiAgYHByb2dyZXNzYCwgYHN0YXJ0YCwgYGxlYXZlYCB3aGVuIHNjcm9sbGluZyBpbiByZXZlcnNlXHJcblx0XHQgKiAgMi4gU2NlbmVzIHdpdGggYGR1cmF0aW9uID4gMGA6ICBcclxuXHRcdCAqICBTY2VuZXMgd2l0aCBhIHNldCBkdXJhdGlvbiBoYXZlIGEgZGVmaW5lZCBzdGFydCBhbmQgZW5kIHBvaW50LiAgXHJcblx0XHQgKiAgV2hlbiBzY3JvbGxpbmcgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHNjZW5lIGl0IHdpbGwgZmlyZSB0aGVzZSBldmVudHMgaW4gdGhpcyBvcmRlcjogIFxyXG5cdFx0ICogIGBlbnRlcmAsIGBzdGFydGAsIGBwcm9ncmVzc2AgIFxyXG5cdFx0ICogIFdoZW4gY29udGludWluZyB0byBzY3JvbGwgYW5kIHBhc3NpbmcgdGhlIGVuZCBwb2ludCBpdCB3aWxsIGZpcmUgdGhlc2UgZXZlbnRzOiAgXHJcblx0XHQgKiAgYHByb2dyZXNzYCwgYGVuZGAsIGBsZWF2ZWAgIFxyXG5cdFx0ICogIFdoZW4gcmV2ZXJzaW5nIHRocm91Z2ggdGhlIGVuZCBwb2ludCB0aGVzZSBldmVudHMgYXJlIGZpcmVkOiAgXHJcblx0XHQgKiAgYGVudGVyYCwgYGVuZGAsIGBwcm9ncmVzc2AgIFxyXG5cdFx0ICogIEFuZCB3aGVuIGNvbnRpbnVpbmcgdG8gc2Nyb2xsIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uIGluIHJldmVyc2UgaXQgd2lsbCBmaXJlOiAgXHJcblx0XHQgKiAgYHByb2dyZXNzYCwgYHN0YXJ0YCwgYGxlYXZlYCAgXHJcblx0XHQgKiAgSW4gYmV0d2VlbiBzdGFydCBhbmQgZW5kIHRoZSBgcHJvZ3Jlc3NgIGV2ZW50IHdpbGwgYmUgY2FsbGVkIGNvbnN0YW50bHksIHdoZW5ldmVyIHRoZSBwcm9ncmVzcyBjaGFuZ2VzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBJbiBzaG9ydDogIFxyXG5cdFx0ICogYGVudGVyYCBldmVudHMgd2lsbCBhbHdheXMgdHJpZ2dlciAqKmJlZm9yZSoqIHRoZSBwcm9ncmVzcyB1cGRhdGUgYW5kIGBsZWF2ZWAgZW52ZW50cyB3aWxsIHRyaWdnZXIgKiphZnRlcioqIHRoZSBwcm9ncmVzcyB1cGRhdGUuICBcclxuXHRcdCAqIGBzdGFydGAgYW5kIGBlbmRgIHdpbGwgYWx3YXlzIHRyaWdnZXIgYXQgdGhlaXIgcmVzcGVjdGl2ZSBwb3NpdGlvbi5cclxuXHRcdCAqIFxyXG5cdFx0ICogUGxlYXNlIHJldmlldyB0aGUgZXZlbnQgZGVzY3JpcHRpb25zIGZvciBkZXRhaWxzIG9uIHRoZSBldmVudHMgYW5kIHRoZSBldmVudCBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3Byb2dyZXNzXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHNjZW5lIHByb2dyZXNzXHJcblx0XHQgKiB2YXIgcHJvZ3Jlc3MgPSBzY2VuZS5wcm9ncmVzcygpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBuZXcgc2NlbmUgcHJvZ3Jlc3NcclxuXHRcdCAqIHNjZW5lLnByb2dyZXNzKDAuMyk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5lbnRlcn0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc3RhcnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnByb2dyZXNzfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5lbmR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmxlYXZlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbcHJvZ3Jlc3NdIC0gVGhlIG5ldyBwcm9ncmVzcyB2YWx1ZSBvZiB0aGUgc2NlbmUgYFswLTFdYC5cclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgc2NlbmUgcHJvZ3Jlc3MuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRyZXR1cm4gX3Byb2dyZXNzO1xyXG5cdFx0XHR9IGVsc2UgeyAvLyBzZXRcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdGRvVXBkYXRlID0gZmFsc2UsXHJcblx0XHRcdFx0XHRvbGRTdGF0ZSA9IF9zdGF0ZSxcclxuXHRcdFx0XHRcdHNjcm9sbERpcmVjdGlvbiA9IF9jb250cm9sbGVyID8gX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbERpcmVjdGlvblwiKSA6ICdQQVVTRUQnLFxyXG5cdFx0XHRcdFx0cmV2ZXJzZU9yRm9yd2FyZCA9IF9vcHRpb25zLnJldmVyc2UgfHwgcHJvZ3Jlc3MgPj0gX3Byb2dyZXNzO1xyXG5cdFx0XHRcdGlmIChfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCkge1xyXG5cdFx0XHRcdFx0Ly8gemVybyBkdXJhdGlvbiBzY2VuZXNcclxuXHRcdFx0XHRcdGRvVXBkYXRlID0gX3Byb2dyZXNzICE9IHByb2dyZXNzO1xyXG5cdFx0XHRcdFx0X3Byb2dyZXNzID0gcHJvZ3Jlc3MgPCAxICYmIHJldmVyc2VPckZvcndhcmQgPyAwIDogMTtcclxuXHRcdFx0XHRcdF9zdGF0ZSA9IF9wcm9ncmVzcyA9PT0gMCA/IFNDRU5FX1NUQVRFX0JFRk9SRSA6IFNDRU5FX1NUQVRFX0RVUklORztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gc2NlbmVzIHdpdGggc3RhcnQgYW5kIGVuZFxyXG5cdFx0XHRcdFx0aWYgKHByb2dyZXNzIDwgMCAmJiBfc3RhdGUgIT09IFNDRU5FX1NUQVRFX0JFRk9SRSAmJiByZXZlcnNlT3JGb3J3YXJkKSB7XHJcblx0XHRcdFx0XHRcdC8vIGdvIGJhY2sgdG8gaW5pdGlhbCBzdGF0ZVxyXG5cdFx0XHRcdFx0XHRfcHJvZ3Jlc3MgPSAwO1xyXG5cdFx0XHRcdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9CRUZPUkU7XHJcblx0XHRcdFx0XHRcdGRvVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvZ3Jlc3MgPj0gMCAmJiBwcm9ncmVzcyA8IDEgJiYgcmV2ZXJzZU9yRm9yd2FyZCkge1xyXG5cdFx0XHRcdFx0XHRfcHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuXHRcdFx0XHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfRFVSSU5HO1xyXG5cdFx0XHRcdFx0XHRkb1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb2dyZXNzID49IDEgJiYgX3N0YXRlICE9PSBTQ0VORV9TVEFURV9BRlRFUikge1xyXG5cdFx0XHRcdFx0XHRfcHJvZ3Jlc3MgPSAxO1xyXG5cdFx0XHRcdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9BRlRFUjtcclxuXHRcdFx0XHRcdFx0ZG9VcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiAhcmV2ZXJzZU9yRm9yd2FyZCkge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpOyAvLyBpbiBjYXNlIHdlIHNjcm9sbGVkIGJhY2t3YXJkcyBtaWQtc2NlbmUgYW5kIHJldmVyc2UgaXMgZGlzYWJsZWQgPT4gdXBkYXRlIHRoZSBwaW4gcG9zaXRpb24sIHNvIGl0IGRvZXNuJ3QgbW92ZSBiYWNrIGFzIHdlbGwuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkb1VwZGF0ZSkge1xyXG5cdFx0XHRcdFx0Ly8gZmlyZSBldmVudHNcclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRldmVudFZhcnMgPSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvZ3Jlc3M6IF9wcm9ncmVzcyxcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZTogX3N0YXRlLFxyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbERpcmVjdGlvbjogc2Nyb2xsRGlyZWN0aW9uXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHN0YXRlQ2hhbmdlZCA9IF9zdGF0ZSAhPSBvbGRTdGF0ZTtcclxuXHJcblx0XHRcdFx0XHR2YXIgdHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHsgLy8gdG1wIGhlbHBlciB0byBzaW1wbGlmeSBjb2RlXHJcblx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoZXZlbnROYW1lLCBldmVudFZhcnMpO1xyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc3RhdGVDaGFuZ2VkKSB7IC8vIGVudGVyIGV2ZW50c1xyXG5cdFx0XHRcdFx0XHRpZiAob2xkU3RhdGUgIT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIoXCJlbnRlclwiKTtcclxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKG9sZFN0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgPyBcInN0YXJ0XCIgOiBcImVuZFwiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dHJpZ2dlcihcInByb2dyZXNzXCIpO1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlQ2hhbmdlZCkgeyAvLyBsZWF2ZSBldmVudHNcclxuXHRcdFx0XHRcdFx0aWYgKF9zdGF0ZSAhPT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0JFRk9SRSA/IFwic3RhcnRcIiA6IFwiZW5kXCIpO1xyXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIoXCJsZWF2ZVwiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZSB0aGUgc3RhcnQgYW5kIGVuZCBzY3JvbGxPZmZzZXQgb2YgdGhlIGNvbnRhaW5lci5cclxuXHRcdCAqIFRoZSBwb3NpdGlvbnMgcmVmbGVjdCB3aGF0IHRoZSBjb250cm9sbGVyJ3Mgc2Nyb2xsIHBvc2l0aW9uIHdpbGwgYmUgYXQgdGhlIHN0YXJ0IGFuZCBlbmQgcmVzcGVjdGl2ZWx5LlxyXG5cdFx0ICogSXMgY2FsbGVkLCB3aGVuOlxyXG5cdFx0ICogICAtIFNjZW5lIGV2ZW50IFwiY2hhbmdlXCIgaXMgY2FsbGVkIHdpdGg6IG9mZnNldCwgdHJpZ2dlckhvb2ssIGR1cmF0aW9uIFxyXG5cdFx0ICogICAtIHNjcm9sbCBjb250YWluZXIgZXZlbnQgXCJyZXNpemVcIiBpcyBjYWxsZWRcclxuXHRcdCAqICAgLSB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXJFbGVtZW50IGNoYW5nZXNcclxuXHRcdCAqICAgLSB0aGUgY29udHJvbGxlciBjaGFuZ2VzIC0+IGFkZFRvKClcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVTY3JvbGxPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF9zY3JvbGxPZmZzZXQgPSB7XHJcblx0XHRcdFx0c3RhcnQ6IF90cmlnZ2VyUG9zICsgX29wdGlvbnMub2Zmc2V0XHJcblx0XHRcdH07XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfb3B0aW9ucy50cmlnZ2VyRWxlbWVudCkge1xyXG5cdFx0XHRcdC8vIHRha2UgYXdheSB0cmlnZ2VySG9vayBwb3J0aW9uIHRvIGdldCByZWxhdGl2ZSB0byB0b3BcclxuXHRcdFx0XHRfc2Nyb2xsT2Zmc2V0LnN0YXJ0IC09IF9jb250cm9sbGVyLmluZm8oXCJzaXplXCIpICogX29wdGlvbnMudHJpZ2dlckhvb2s7XHJcblx0XHRcdH1cclxuXHRcdFx0X3Njcm9sbE9mZnNldC5lbmQgPSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0ICsgX29wdGlvbnMuZHVyYXRpb247XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgZHVyYXRpb24gaWYgc2V0IHRvIGEgZHluYW1pYyBmdW5jdGlvbi5cclxuXHRcdCAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzY2VuZSBpcyBhZGRlZCB0byBhIGNvbnRyb2xsZXIgYW5kIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIgdGhyb3VnaCBzY2VuZS5yZWZyZXNoKCkuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCBpZiB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N1cHByZXNzRXZlbnRzPWZhbHNlXSAtIElmIHRydWUgdGhlIHNoaWZ0IGV2ZW50IHdpbGwgYmUgc3VwcHJlc3NlZC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVEdXJhdGlvbiA9IGZ1bmN0aW9uIChzdXBwcmVzc0V2ZW50cykge1xyXG5cdFx0XHQvLyB1cGRhdGUgZHVyYXRpb25cclxuXHRcdFx0aWYgKF9kdXJhdGlvblVwZGF0ZU1ldGhvZCkge1xyXG5cdFx0XHRcdHZhciB2YXJuYW1lID0gXCJkdXJhdGlvblwiO1xyXG5cdFx0XHRcdGlmIChjaGFuZ2VPcHRpb24odmFybmFtZSwgX2R1cmF0aW9uVXBkYXRlTWV0aG9kLmNhbGwoU2NlbmUpKSAmJiAhc3VwcHJlc3NFdmVudHMpIHsgLy8gc2V0XHJcblx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwiY2hhbmdlXCIsIHtcclxuXHRcdFx0XHRcdFx0d2hhdDogdmFybmFtZSxcclxuXHRcdFx0XHRcdFx0bmV3dmFsOiBfb3B0aW9uc1t2YXJuYW1lXVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xyXG5cdFx0XHRcdFx0XHRyZWFzb246IHZhcm5hbWVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyRWxlbWVudCwgaWYgcHJlc2VudC5cclxuXHRcdCAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCAuLi5cclxuXHRcdCAqICAtIC4uLiB3aGVuIHRoZSB0cmlnZ2VyRWxlbWVudCBpcyBjaGFuZ2VkXHJcblx0XHQgKiAgLSAuLi4gd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSAobmV3KSBjb250cm9sbGVyXHJcblx0XHQgKiAgLSAuLi4gaW4gcmVndWxhciBpbnRlcnZhbHMgZnJvbSB0aGUgY29udHJvbGxlciB0aHJvdWdoIHNjZW5lLnJlZnJlc2goKS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIGlmIHRoZSBwb3NpdGlvbiBjaGFuZ2VkXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbc3VwcHJlc3NFdmVudHM9ZmFsc2VdIC0gSWYgdHJ1ZSB0aGUgc2hpZnQgZXZlbnQgd2lsbCBiZSBzdXBwcmVzc2VkLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24gPSBmdW5jdGlvbiAoc3VwcHJlc3NFdmVudHMpIHtcclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0ZWxlbWVudFBvcyA9IDAsXHJcblx0XHRcdFx0dGVsZW0gPSBfb3B0aW9ucy50cmlnZ2VyRWxlbWVudDtcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmICh0ZWxlbSB8fCBfdHJpZ2dlclBvcyA+IDApKSB7IC8vIGVpdGhlciBhbiBlbGVtZW50IGV4aXN0cyBvciB3YXMgcmVtb3ZlZCBhbmQgdGhlIHRyaWdnZXJQb3MgaXMgc3RpbGwgPiAwXHJcblx0XHRcdFx0aWYgKHRlbGVtKSB7IC8vIHRoZXJlIGN1cnJlbnRseSBhIHRyaWdnZXJFbGVtZW50IHNldFxyXG5cdFx0XHRcdFx0aWYgKHRlbGVtLnBhcmVudE5vZGUpIHsgLy8gY2hlY2sgaWYgZWxlbWVudCBpcyBzdGlsbCBhdHRhY2hlZCB0byBET01cclxuXHRcdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdFx0Y29udHJvbGxlckluZm8gPSBfY29udHJvbGxlci5pbmZvKCksXHJcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldChjb250cm9sbGVySW5mby5jb250YWluZXIpLCAvLyBjb250YWluZXIgcG9zaXRpb24gaXMgbmVlZGVkIGJlY2F1c2UgZWxlbWVudCBvZmZzZXQgaXMgcmV0dXJuZWQgaW4gcmVsYXRpb24gdG8gZG9jdW1lbnQsIG5vdCBpbiByZWxhdGlvbiB0byBjb250YWluZXIuXHJcblx0XHRcdFx0XHRcdFx0cGFyYW0gPSBjb250cm9sbGVySW5mby52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIjsgLy8gd2hpY2ggcGFyYW0gaXMgb2YgaW50ZXJlc3QgP1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gaWYgcGFyZW50IGlzIHNwYWNlciwgdXNlIHNwYWNlciBwb3NpdGlvbiBpbnN0ZWFkIHNvIGNvcnJlY3Qgc3RhcnQgcG9zaXRpb24gaXMgcmV0dXJuZWQgZm9yIHBpbm5lZCBlbGVtZW50cy5cclxuXHRcdFx0XHRcdFx0d2hpbGUgKHRlbGVtLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRlbGVtID0gdGVsZW0ucGFyZW50Tm9kZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGVsZW1lbnRPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KHRlbGVtKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghY29udHJvbGxlckluZm8uaXNEb2N1bWVudCkgeyAvLyBjb250YWluZXIgaXMgbm90IHRoZSBkb2N1bWVudCByb290LCBzbyBzdWJzdHJhY3Qgc2Nyb2xsIFBvc2l0aW9uIHRvIGdldCBjb3JyZWN0IHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiByZWxhdGl2ZSB0byBzY3JvbGxjb250ZW50XHJcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0W3BhcmFtXSAtPSBfY29udHJvbGxlci5zY3JvbGxQb3MoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0ZWxlbWVudFBvcyA9IGVsZW1lbnRPZmZzZXRbcGFyYW1dIC0gY29udGFpbmVyT2Zmc2V0W3BhcmFtXTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgeyAvLyB0aGVyZSB3YXMgYW4gZWxlbWVudCwgYnV0IGl0IHdhcyByZW1vdmVkIGZyb20gRE9NXHJcblx0XHRcdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IHRyaWdnZXJFbGVtZW50IHdhcyByZW1vdmVkIGZyb20gRE9NIGFuZCB3aWxsIGJlIHJlc2V0IHRvXCIsIHVuZGVmaW5lZCk7XHJcblx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXJFbGVtZW50KHVuZGVmaW5lZCk7IC8vIHVuc2V0LCBzbyBhIGNoYW5nZSBldmVudCBpcyB0cmlnZ2VyZWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBjaGFuZ2VkID0gZWxlbWVudFBvcyAhPSBfdHJpZ2dlclBvcztcclxuXHRcdFx0XHRfdHJpZ2dlclBvcyA9IGVsZW1lbnRQb3M7XHJcblx0XHRcdFx0aWYgKGNoYW5nZWQgJiYgIXN1cHByZXNzRXZlbnRzKSB7XHJcblx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xyXG5cdFx0XHRcdFx0XHRyZWFzb246IFwidHJpZ2dlckVsZW1lbnRQb3NpdGlvblwiXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUcmlnZ2VyIGEgc2hpZnQgZXZlbnQsIHdoZW4gdGhlIGNvbnRhaW5lciBpcyByZXNpemVkIGFuZCB0aGUgdHJpZ2dlckhvb2sgaXMgPiAxLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIG9uQ29udGFpbmVyUmVzaXplID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0aWYgKF9vcHRpb25zLnRyaWdnZXJIb29rID4gMCkge1xyXG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XHJcblx0XHRcdFx0XHRyZWFzb246IFwiY29udGFpbmVyUmVzaXplXCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0dmFyIF92YWxpZGF0ZSA9IF91dGlsLmV4dGVuZChTQ0VORV9PUFRJT05TLnZhbGlkYXRlLCB7XHJcblx0XHRcdC8vIHZhbGlkYXRpb24gZm9yIGR1cmF0aW9uIGhhbmRsZWQgaW50ZXJuYWxseSBmb3IgcmVmZXJlbmNlIHRvIHByaXZhdGUgdmFyIF9kdXJhdGlvbk1ldGhvZFxyXG5cdFx0XHRkdXJhdGlvbjogZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLlN0cmluZyh2YWwpICYmIHZhbC5tYXRjaCgvXihcXC58XFxkKSpcXGQrJSQvKSkge1xyXG5cdFx0XHRcdFx0Ly8gcGVyY2VudGFnZSB2YWx1ZVxyXG5cdFx0XHRcdFx0dmFyIHBlcmMgPSBwYXJzZUZsb2F0KHZhbCkgLyAxMDA7XHJcblx0XHRcdFx0XHR2YWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBfY29udHJvbGxlciA/IF9jb250cm9sbGVyLmluZm8oXCJzaXplXCIpICogcGVyYyA6IDA7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5GdW5jdGlvbih2YWwpKSB7XHJcblx0XHRcdFx0XHQvLyBmdW5jdGlvblxyXG5cdFx0XHRcdFx0X2R1cmF0aW9uVXBkYXRlTWV0aG9kID0gdmFsO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0dmFsID0gcGFyc2VGbG9hdChfZHVyYXRpb25VcGRhdGVNZXRob2QuY2FsbChTY2VuZSkpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHR2YWwgPSAtMTsgLy8gd2lsbCBjYXVzZSBlcnJvciBiZWxvd1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyB2YWwgaGFzIHRvIGJlIGZsb2F0XHJcblx0XHRcdFx0dmFsID0gcGFyc2VGbG9hdCh2YWwpO1xyXG5cdFx0XHRcdGlmICghX3V0aWwudHlwZS5OdW1iZXIodmFsKSB8fCB2YWwgPCAwKSB7XHJcblx0XHRcdFx0XHRpZiAoX2R1cmF0aW9uVXBkYXRlTWV0aG9kKSB7XHJcblx0XHRcdFx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCByZXR1cm4gdmFsdWUgb2Ygc3VwcGxpZWQgZnVuY3Rpb24gZm9yIG9wdGlvbiBcXFwiZHVyYXRpb25cXFwiOlwiLCB2YWxdO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJkdXJhdGlvblxcXCI6XCIsIHZhbF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBhIHNwZWNpZmljIG9yIGFsbCBvcHRpb25zIGFuZCByZXNldCB0byBkZWZhdWx0IGlmIG5lY2Nlc3NhcnkuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdmFsaWRhdGVPcHRpb24gPSBmdW5jdGlvbiAoY2hlY2spIHtcclxuXHRcdFx0Y2hlY2sgPSBhcmd1bWVudHMubGVuZ3RoID8gW2NoZWNrXSA6IE9iamVjdC5rZXlzKF92YWxpZGF0ZSk7XHJcblx0XHRcdGNoZWNrLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbk5hbWUsIGtleSkge1xyXG5cdFx0XHRcdHZhciB2YWx1ZTtcclxuXHRcdFx0XHRpZiAoX3ZhbGlkYXRlW29wdGlvbk5hbWVdKSB7IC8vIHRoZXJlIGlzIGEgdmFsaWRhdGlvbiBtZXRob2QgZm9yIHRoaXMgb3B0aW9uXHJcblx0XHRcdFx0XHR0cnkgeyAvLyB2YWxpZGF0ZSB2YWx1ZVxyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IF92YWxpZGF0ZVtvcHRpb25OYW1lXShfb3B0aW9uc1tvcHRpb25OYW1lXSk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7IC8vIHZhbGlkYXRpb24gZmFpbGVkIC0+IHJlc2V0IHRvIGRlZmF1bHRcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSBERUZBVUxUX09QVElPTlNbb3B0aW9uTmFtZV07XHJcblx0XHRcdFx0XHRcdHZhciBsb2dNU0cgPSBfdXRpbC50eXBlLlN0cmluZyhlKSA/IFtlXSA6IGU7XHJcblx0XHRcdFx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KGxvZ01TRykpIHtcclxuXHRcdFx0XHRcdFx0XHRsb2dNU0dbMF0gPSBcIkVSUk9SOiBcIiArIGxvZ01TR1swXTtcclxuXHRcdFx0XHRcdFx0XHRsb2dNU0cudW5zaGlmdCgxKTsgLy8gbG9nbGV2ZWwgMSBmb3IgZXJyb3IgbXNnXHJcblx0XHRcdFx0XHRcdFx0bG9nLmFwcGx5KHRoaXMsIGxvZ01TRyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IFByb2JsZW0gZXhlY3V0aW5nIHZhbGlkYXRpb24gY2FsbGJhY2sgZm9yIG9wdGlvbiAnXCIgKyBvcHRpb25OYW1lICsgXCInOlwiLCBlLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRcdFx0XHRfb3B0aW9uc1tvcHRpb25OYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGVscGVyIHVzZWQgYnkgdGhlIHNldHRlci9nZXR0ZXJzIGZvciBzY2VuZSBvcHRpb25zXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgY2hhbmdlT3B0aW9uID0gZnVuY3Rpb24gKHZhcm5hbWUsIG5ld3ZhbCkge1xyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHRjaGFuZ2VkID0gZmFsc2UsXHJcblx0XHRcdFx0b2xkdmFsID0gX29wdGlvbnNbdmFybmFtZV07XHJcblx0XHRcdGlmIChfb3B0aW9uc1t2YXJuYW1lXSAhPSBuZXd2YWwpIHtcclxuXHRcdFx0XHRfb3B0aW9uc1t2YXJuYW1lXSA9IG5ld3ZhbDtcclxuXHRcdFx0XHR2YWxpZGF0ZU9wdGlvbih2YXJuYW1lKTsgLy8gcmVzZXRzIHRvIGRlZmF1bHQgaWYgbmVjZXNzYXJ5XHJcblx0XHRcdFx0Y2hhbmdlZCA9IG9sZHZhbCAhPSBfb3B0aW9uc1t2YXJuYW1lXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY2hhbmdlZDtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gZ2VuZXJhdGUgZ2V0dGVycy9zZXR0ZXJzIGZvciBhbGwgb3B0aW9uc1xyXG5cdFx0dmFyIGFkZFNjZW5lT3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbk5hbWUpIHtcclxuXHRcdFx0aWYgKCFTY2VuZVtvcHRpb25OYW1lXSkge1xyXG5cdFx0XHRcdFNjZW5lW29wdGlvbk5hbWVdID0gZnVuY3Rpb24gKG5ld1ZhbCkge1xyXG5cdFx0XHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gX29wdGlvbnNbb3B0aW9uTmFtZV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAob3B0aW9uTmFtZSA9PT0gXCJkdXJhdGlvblwiKSB7IC8vIG5ldyBkdXJhdGlvbiBpcyBzZXQsIHNvIGFueSBwcmV2aW91c2x5IHNldCBmdW5jdGlvbiBtdXN0IGJlIHVuc2V0XHJcblx0XHRcdFx0XHRcdFx0X2R1cmF0aW9uVXBkYXRlTWV0aG9kID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChjaGFuZ2VPcHRpb24ob3B0aW9uTmFtZSwgbmV3VmFsKSkgeyAvLyBzZXRcclxuXHRcdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwiY2hhbmdlXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRcdHdoYXQ6IG9wdGlvbk5hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHRuZXd2YWw6IF9vcHRpb25zW29wdGlvbk5hbWVdXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFNDRU5FX09QVElPTlMuc2hpZnRzLmluZGV4T2Yob3B0aW9uTmFtZSkgPiAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVhc29uOiBvcHRpb25OYW1lXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBkdXJhdGlvbiBvcHRpb24gdmFsdWUuXHJcblx0XHQgKlxyXG5cdFx0ICogQXMgYSAqKnNldHRlcioqIGl0IGFjY2VwdHMgdGhyZWUgdHlwZXMgb2YgcGFyYW1ldGVyczpcclxuXHRcdCAqIDEuIGBudW1iZXJgOiBTZXRzIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmUgdG8gZXhhY3RseSB0aGlzIGFtb3VudCBvZiBwaXhlbHMuICBcclxuXHRcdCAqICAgVGhpcyBtZWFucyB0aGUgc2NlbmUgd2lsbCBsYXN0IGZvciBleGFjdGx5IHRoaXMgYW1vdW50IG9mIHBpeGVscyBzY3JvbGxlZC4gU3ViLVBpeGVscyBhcmUgYWxzbyB2YWxpZC5cclxuXHRcdCAqICAgQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhhdCB0aGUgc2NlbmUgaXMgJ29wZW4gZW5kJyBhbmQgbm8gZW5kIHdpbGwgYmUgdHJpZ2dlcmVkLiBQaW5zIHdpbGwgbmV2ZXIgdW5waW4gYW5kIGFuaW1hdGlvbnMgd2lsbCBwbGF5IGluZGVwZW5kZW50bHkgb2Ygc2Nyb2xsIHByb2dyZXNzLlxyXG5cdFx0ICogMi4gYHN0cmluZ2A6IEFsd2F5cyB1cGRhdGVzIHRoZSBkdXJhdGlvbiByZWxhdGl2ZSB0byBwYXJlbnQgc2Nyb2xsIGNvbnRhaW5lci4gIFxyXG5cdFx0ICogICBGb3IgZXhhbXBsZSBgXCIxMDAlXCJgIHdpbGwga2VlcCB0aGUgZHVyYXRpb24gYWx3YXlzIGV4YWN0bHkgYXQgdGhlIGlubmVyIGhlaWdodCBvZiB0aGUgc2Nyb2xsIGNvbnRhaW5lci5cclxuXHRcdCAqICAgV2hlbiBzY3JvbGxpbmcgdmVydGljYWxseSB0aGUgd2lkdGggaXMgdXNlZCBmb3IgcmVmZXJlbmNlIHJlc3BlY3RpdmVseS5cclxuXHRcdCAqIDMuIGBmdW5jdGlvbmA6IFRoZSBzdXBwbGllZCBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB0byByZXR1cm4gdGhlIHNjZW5lIGR1cmF0aW9uLlxyXG5cdFx0ICogICBUaGlzIGlzIHVzZWZ1bCBpbiBzZXR1cHMgd2hlcmUgdGhlIGR1cmF0aW9uIGRlcGVuZHMgb24gb3RoZXIgZWxlbWVudHMgd2hvIG1pZ2h0IGNoYW5nZSBzaXplLiBCeSBzdXBwbHlpbmcgYSBmdW5jdGlvbiB5b3UgY2FuIHJldHVybiBhIHZhbHVlIGluc3RlYWQgb2YgdXBkYXRpbmcgcG90ZW50aWFsbHkgbXVsdGlwbGUgc2NlbmUgZHVyYXRpb25zLiAgXHJcblx0XHQgKiAgIFRoZSBzY2VuZSBjYW4gYmUgcmVmZXJlbmNlZCBpbnNpZGUgdGhlIGNhbGxiYWNrIHVzaW5nIGB0aGlzYC5cclxuXHRcdCAqICAgXyoqV0FSTklORzoqKiBUaGlzIGlzIGFuIGVhc3kgd2F5IHRvIGtpbGwgcGVyZm9ybWFuY2UsIGFzIHRoZSBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIGV2ZXJ5IHRpbWUgYFNjZW5lLnJlZnJlc2goKWAgaXMgY2FsbGVkLCB3aGljaCBoYXBwZW5zIGEgbG90LiBUaGUgaW50ZXJ2YWwgaXMgZGVmaW5lZCBieSB0aGUgY29udHJvbGxlciAoc2VlIFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIgb3B0aW9uIGByZWZyZXNoSW50ZXJ2YWxgKS4gIFxyXG5cdFx0ICogICBJdCdzIHJlY29tZW5kZWQgdG8gYXZvaWQgY2FsY3VsYXRpb25zIHdpdGhpbiB0aGUgZnVuY3Rpb24gYW5kIHVzZSBjYWNoZWQgdmFyaWFibGVzIGFzIHJldHVybiB2YWx1ZXMuICBcclxuXHRcdCAqICAgVGhpcyBjb3VudHMgZG91YmxlIGlmIHlvdSB1c2UgdGhlIHNhbWUgZnVuY3Rpb24gZm9yIG11bHRpcGxlIHNjZW5lcy5fXHJcblx0XHQgKlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNkdXJhdGlvblxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBkdXJhdGlvbiB2YWx1ZVxyXG5cdFx0ICogdmFyIGR1cmF0aW9uID0gc2NlbmUuZHVyYXRpb24oKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgZHVyYXRpb25cclxuXHRcdCAqIHNjZW5lLmR1cmF0aW9uKDMwMCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGR1cmF0aW9uIHJlc3BvbnNpdmVseSB0byBjb250YWluZXIgc2l6ZVxyXG5cdFx0ICogc2NlbmUuZHVyYXRpb24oXCIxMDAlXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHVzZSBhIGZ1bmN0aW9uIHRvIHJhbmRvbWl6ZSB0aGUgZHVyYXRpb24gZm9yIHNvbWUgcmVhc29uLlxyXG5cdFx0ICogdmFyIGR1cmF0aW9uVmFsdWVDYWNoZTtcclxuXHRcdCAqIGZ1bmN0aW9uIGR1cmF0aW9uQ2FsbGJhY2sgKCkge1xyXG5cdFx0ICogICByZXR1cm4gZHVyYXRpb25WYWx1ZUNhY2hlO1xyXG5cdFx0ICogfVxyXG5cdFx0ICogZnVuY3Rpb24gdXBkYXRlRHVyYXRpb24gKCkge1xyXG5cdFx0ICogICBkdXJhdGlvblZhbHVlQ2FjaGUgPSBNYXRoLnJhbmRvbSgpICogMTAwO1xyXG5cdFx0ICogfVxyXG5cdFx0ICogdXBkYXRlRHVyYXRpb24oKTsgLy8gc2V0IHRvIGluaXRpYWwgdmFsdWVcclxuXHRcdCAqIHNjZW5lLmR1cmF0aW9uKGR1cmF0aW9uQ2FsbGJhY2spOyAvLyBzZXQgZHVyYXRpb24gY2FsbGJhY2tcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKX0gW25ld0R1cmF0aW9uXSAtIFRoZSBuZXcgZHVyYXRpb24gc2V0dGluZyBmb3IgdGhlIHNjZW5lLlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBzY2VuZSBkdXJhdGlvbi5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgb2Zmc2V0IG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjb2Zmc2V0XHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IG9mZnNldFxyXG5cdFx0ICogdmFyIG9mZnNldCA9IHNjZW5lLm9mZnNldCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyBvZmZzZXRcclxuXHRcdCAqIHNjZW5lLm9mZnNldCgxMDApO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbbmV3T2Zmc2V0XSAtIFRoZSBuZXcgb2Zmc2V0IG9mIHRoZSBzY2VuZS5cclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgc2NlbmUgb2Zmc2V0LlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSB0cmlnZ2VyRWxlbWVudCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBEb2VzICoqbm90KiogZmlyZSBgU2NlbmUuc2hpZnRgLCBiZWNhdXNlIGNoYW5naW5nIHRoZSB0cmlnZ2VyIEVsZW1lbnQgZG9lc24ndCBuZWNlc3NhcmlseSBtZWFuIHRoZSBzdGFydCBwb3NpdGlvbiBjaGFuZ2VzLiBUaGlzIHdpbGwgYmUgZGV0ZXJtaW5lZCBpbiBgU2NlbmUucmVmcmVzaCgpYCwgd2hpY2ggaXMgYXV0b21hdGljYWxseSB0cmlnZ2VyZWQuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJFbGVtZW50XHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHRyaWdnZXJFbGVtZW50XHJcblx0XHQgKiB2YXIgdHJpZ2dlckVsZW1lbnQgPSBzY2VuZS50cmlnZ2VyRWxlbWVudCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VyRWxlbWVudCB1c2luZyBhIHNlbGVjdG9yXHJcblx0XHQgKiBzY2VuZS50cmlnZ2VyRWxlbWVudChcIiN0cmlnZ2VyXCIpO1xyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHRyaWdnZXJFbGVtZW50IHVzaW5nIGEgRE9NIG9iamVjdFxyXG5cdFx0ICogc2NlbmUudHJpZ2dlckVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmlnZ2VyXCIpKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSBbbmV3VHJpZ2dlckVsZW1lbnRdIC0gVGhlIG5ldyB0cmlnZ2VyIGVsZW1lbnQgZm9yIHRoZSBzY2VuZS5cclxuXHRcdCAqIEByZXR1cm5zIHsoc3RyaW5nfG9iamVjdCl9IGBnZXRgIC0gIEN1cnJlbnQgdHJpZ2dlckVsZW1lbnQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHRyaWdnZXJIb29rIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlckhvb2tcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdHJpZ2dlckhvb2sgdmFsdWVcclxuXHRcdCAqIHZhciB0cmlnZ2VySG9vayA9IHNjZW5lLnRyaWdnZXJIb29rKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHRyaWdnZXJIb29rIHVzaW5nIGEgc3RyaW5nXHJcblx0XHQgKiBzY2VuZS50cmlnZ2VySG9vayhcIm9uTGVhdmVcIik7XHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckhvb2sgdXNpbmcgYSBudW1iZXJcclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJIb29rKDAuNyk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IFtuZXdUcmlnZ2VySG9va10gLSBUaGUgbmV3IHRyaWdnZXJIb29rIG9mIHRoZSBzY2VuZS4gU2VlIHtAbGluayBTY2VuZX0gcGFyYW1ldGVyIGRlc2NyaXB0aW9uIGZvciB2YWx1ZSBvcHRpb25zLlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCB0cmlnZ2VySG9vayAoQUxXQVlTIG51bWVyaWNhbCkuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHJldmVyc2Ugb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZXZlcnNlXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHJldmVyc2Ugb3B0aW9uXHJcblx0XHQgKiB2YXIgcmV2ZXJzZSA9IHNjZW5lLnJldmVyc2UoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgbmV3IHJldmVyc2Ugb3B0aW9uXHJcblx0XHQgKiBzY2VuZS5yZXZlcnNlKGZhbHNlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1JldmVyc2VdIC0gVGhlIG5ldyByZXZlcnNlIHNldHRpbmcgb2YgdGhlIHNjZW5lLlxyXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IGBnZXRgIC0gIEN1cnJlbnQgcmV2ZXJzZSBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGxvZ2xldmVsIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjbG9nbGV2ZWxcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgbG9nbGV2ZWxcclxuXHRcdCAqIHZhciBsb2dsZXZlbCA9IHNjZW5lLmxvZ2xldmVsKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IG5ldyBsb2dsZXZlbFxyXG5cdFx0ICogc2NlbmUubG9nbGV2ZWwoMyk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW25ld0xvZ2xldmVsXSAtIFRoZSBuZXcgbG9nbGV2ZWwgc2V0dGluZyBvZiB0aGUgc2NlbmUuIGBbMC0zXWBcclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgbG9nbGV2ZWwuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSBhc3NvY2lhdGVkIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2NvbnRyb2xsZXJcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGNvbnRyb2xsZXIgb2YgYSBzY2VuZVxyXG5cdFx0ICogdmFyIGNvbnRyb2xsZXIgPSBzY2VuZS5jb250cm9sbGVyKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge1Njcm9sbE1hZ2ljLkNvbnRyb2xsZXJ9IFBhcmVudCBjb250cm9sbGVyIG9yIGB1bmRlZmluZWRgXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuY29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIF9jb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3N0YXRlXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHN0YXRlXHJcblx0XHQgKiB2YXIgc3RhdGUgPSBzY2VuZS5zdGF0ZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IGBcIkJFRk9SRVwiYCwgYFwiRFVSSU5HXCJgIG9yIGBcIkFGVEVSXCJgXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBfc3RhdGU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiB0aGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0IGZvciB0aGUgc3RhcnQgb2YgdGhlIHNjZW5lLiAgXHJcblx0XHQgKiBNaW5kLCB0aGF0IHRoZSBzY3JvbGxPZmZzZXQgaXMgcmVsYXRlZCB0byB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyLCBpZiBgdHJpZ2dlckhvb2tgIGlzIGJpZ2dlciB0aGFuIGAwYCAob3IgYFwib25MZWF2ZVwiYCkuICBcclxuXHRcdCAqIFRoaXMgbWVhbnMsIHRoYXQgcmVzaXppbmcgdGhlIGNvbnRhaW5lciBvciBjaGFuZ2luZyB0aGUgYHRyaWdnZXJIb29rYCB3aWxsIGluZmx1ZW5jZSB0aGUgc2NlbmUncyBzdGFydCBvZmZzZXQuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3Njcm9sbE9mZnNldFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0IGZvciB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc2NlbmUuXHJcblx0XHQgKiB2YXIgc3RhcnQgPSBzY2VuZS5zY3JvbGxPZmZzZXQoKTtcclxuXHRcdCAqIHZhciBlbmQgPSBzY2VuZS5zY3JvbGxPZmZzZXQoKSArIHNjZW5lLmR1cmF0aW9uKCk7XHJcblx0XHQgKiBjb25zb2xlLmxvZyhcInRoZSBzY2VuZSBzdGFydHMgYXRcIiwgc3RhcnQsIFwiYW5kIGVuZHMgYXRcIiwgZW5kKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgc2Nyb2xsIG9mZnNldCAob2YgdGhlIGNvbnRhaW5lcikgYXQgd2hpY2ggdGhlIHNjZW5lIHdpbGwgdHJpZ2dlci4gWSB2YWx1ZSBmb3IgdmVydGljYWwgYW5kIFggdmFsdWUgZm9yIGhvcml6b250YWwgc2Nyb2xscy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zY3JvbGxPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBfc2Nyb2xsT2Zmc2V0LnN0YXJ0O1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIHRyaWdnZXIgcG9zaXRpb24gb2YgdGhlIHNjZW5lIChpbmNsdWRpbmcgdGhlIHZhbHVlIG9mIHRoZSBgb2Zmc2V0YCBvcHRpb24pLiAgXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJQb3NpdGlvblxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgc2NlbmUncyB0cmlnZ2VyIHBvc2l0aW9uXHJcblx0XHQgKiB2YXIgdHJpZ2dlclBvc2l0aW9uID0gc2NlbmUudHJpZ2dlclBvc2l0aW9uKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gU3RhcnQgcG9zaXRpb24gb2YgdGhlIHNjZW5lLiBUb3AgcG9zaXRpb24gdmFsdWUgZm9yIHZlcnRpY2FsIGFuZCBsZWZ0IHBvc2l0aW9uIHZhbHVlIGZvciBob3Jpem9udGFsIHNjcm9sbHMuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMudHJpZ2dlclBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgcG9zID0gX29wdGlvbnMub2Zmc2V0OyAvLyB0aGUgb2Zmc2V0IGlzIHRoZSBiYXNpc1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHQvLyBnZXQgdGhlIHRyaWdnZXIgcG9zaXRpb25cclxuXHRcdFx0XHRpZiAoX29wdGlvbnMudHJpZ2dlckVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdC8vIEVsZW1lbnQgYXMgdHJpZ2dlclxyXG5cdFx0XHRcdFx0cG9zICs9IF90cmlnZ2VyUG9zO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdHJpZ2dlckhvb2sgdG8gc3RhcnQgYXQgdGhlIGJlZ2lubmluZ1xyXG5cdFx0XHRcdFx0cG9zICs9IF9jb250cm9sbGVyLmluZm8oXCJzaXplXCIpICogU2NlbmUudHJpZ2dlckhvb2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBvcztcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdHZhclxyXG5cdFx0XHRfcGluLFxyXG5cdFx0XHRfcGluT3B0aW9ucztcclxuXHJcblx0XHRTY2VuZVxyXG5cdFx0XHQub24oXCJzaGlmdC5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHZhciBkdXJhdGlvbkNoYW5nZWQgPSBlLnJlYXNvbiA9PT0gXCJkdXJhdGlvblwiO1xyXG5cdFx0XHRcdGlmICgoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiAmJiBkdXJhdGlvbkNoYW5nZWQpIHx8IChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiBfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCkpIHtcclxuXHRcdFx0XHRcdC8vIGlmIFtkdXJhdGlvbiBjaGFuZ2VkIGFmdGVyIGEgc2NlbmUgKGluc2lkZSBzY2VuZSBwcm9ncmVzcyB1cGRhdGVzIHBpbiBwb3NpdGlvbildIG9yIFtkdXJhdGlvbiBpcyAwLCB3ZSBhcmUgaW4gcGluIHBoYXNlIGFuZCBzb21lIG90aGVyIHZhbHVlIGNoYW5nZWRdLlxyXG5cdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGR1cmF0aW9uQ2hhbmdlZCkge1xyXG5cdFx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKFwicHJvZ3Jlc3MuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oXCJhZGQuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbihcImRlc3Ryb3kuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRTY2VuZS5yZW1vdmVQaW4oZS5yZXNldCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGUgdGhlIHBpbiBzdGF0ZS5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVQaW5TdGF0ZSA9IGZ1bmN0aW9uIChmb3JjZVVucGluKSB7XHJcblx0XHRcdGlmIChfcGluICYmIF9jb250cm9sbGVyKSB7XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRjb250YWluZXJJbmZvID0gX2NvbnRyb2xsZXIuaW5mbygpLFxyXG5cdFx0XHRcdFx0cGluVGFyZ2V0ID0gX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQ7IC8vIG1heSBiZSBwaW4gZWxlbWVudCBvciBhbm90aGVyIHNwYWNlciwgaWYgY2FzY2FkaW5nIHBpbnNcclxuXHJcblx0XHRcdFx0aWYgKCFmb3JjZVVucGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7IC8vIGR1cmluZyBzY2VuZSBvciBpZiBkdXJhdGlvbiBpcyAwIGFuZCB3ZSBhcmUgcGFzdCB0aGUgdHJpZ2dlclxyXG5cdFx0XHRcdFx0Ly8gcGlubmVkIHN0YXRlXHJcblx0XHRcdFx0XHRpZiAoX3V0aWwuY3NzKHBpblRhcmdldCwgXCJwb3NpdGlvblwiKSAhPSBcImZpeGVkXCIpIHtcclxuXHRcdFx0XHRcdFx0Ly8gY2hhbmdlIHN0YXRlIGJlZm9yZSB1cGRhdGluZyBwaW4gc3BhY2VyIChwb3NpdGlvbiBjaGFuZ2VzIGR1ZSB0byBmaXhlZCBjb2xsYXBzaW5nIG1pZ2h0IG9jY3VyLilcclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKHBpblRhcmdldCwge1xyXG5cdFx0XHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGUgcGluIHNwYWNlclxyXG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdGZpeGVkUG9zID0gX3V0aWwuZ2V0Lm9mZnNldChfcGluT3B0aW9ucy5zcGFjZXIsIHRydWUpLCAvLyBnZXQgdmlld3BvcnQgcG9zaXRpb24gb2Ygc3BhY2VyXHJcblx0XHRcdFx0XHRcdHNjcm9sbERpc3RhbmNlID0gX29wdGlvbnMucmV2ZXJzZSB8fCBfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCA/XHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lckluZm8uc2Nyb2xsUG9zIC0gX3Njcm9sbE9mZnNldC5zdGFydCAvLyBxdWlja2VyXHJcblx0XHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdFx0TWF0aC5yb3VuZChfcHJvZ3Jlc3MgKiBfb3B0aW9ucy5kdXJhdGlvbiAqIDEwKSAvIDEwOyAvLyBpZiBubyByZXZlcnNlIGFuZCBkdXJpbmcgcGluIHRoZSBwb3NpdGlvbiBuZWVkcyB0byBiZSByZWNhbGN1bGF0ZWQgdXNpbmcgdGhlIHByb2dyZXNzXHJcblxyXG5cdFx0XHRcdFx0Ly8gYWRkIHNjcm9sbERpc3RhbmNlXHJcblx0XHRcdFx0XHRmaXhlZFBvc1tjb250YWluZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiXSArPSBzY3JvbGxEaXN0YW5jZTtcclxuXHJcblx0XHRcdFx0XHQvLyBzZXQgbmV3IHZhbHVlc1xyXG5cdFx0XHRcdFx0X3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkLCB7XHJcblx0XHRcdFx0XHRcdHRvcDogZml4ZWRQb3MudG9wLFxyXG5cdFx0XHRcdFx0XHRsZWZ0OiBmaXhlZFBvcy5sZWZ0XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gdW5waW5uZWQgc3RhdGVcclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRuZXdDU1MgPSB7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IF9waW5PcHRpb25zLmluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0XHRcdFx0bGVmdDogMFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRjaGFuZ2UgPSBfdXRpbC5jc3MocGluVGFyZ2V0LCBcInBvc2l0aW9uXCIpICE9IG5ld0NTUy5wb3NpdGlvbjtcclxuXHJcblx0XHRcdFx0XHRpZiAoIV9waW5PcHRpb25zLnB1c2hGb2xsb3dlcnMpIHtcclxuXHRcdFx0XHRcdFx0bmV3Q1NTW2NvbnRhaW5lckluZm8udmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCJdID0gX29wdGlvbnMuZHVyYXRpb24gKiBfcHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKF9vcHRpb25zLmR1cmF0aW9uID4gMCkgeyAvLyBvbmx5IGNvbmNlcm5zIHNjZW5lcyB3aXRoIGR1cmF0aW9uXHJcblx0XHRcdFx0XHRcdGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0FGVEVSICYmIHBhcnNlRmxvYXQoX3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgXCJwYWRkaW5nLXRvcFwiKSkgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2UgPSB0cnVlOyAvLyBpZiBpbiBhZnRlciBzdGF0ZSBidXQgaGF2ZW50IHVwZGF0ZWQgc3BhY2VyIHlldCAoanVtcGVkIHBhc3QgcGluKVxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFICYmIHBhcnNlRmxvYXQoX3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgXCJwYWRkaW5nLWJvdHRvbVwiKSkgPT09IDApIHsgLy8gYmVmb3JlXHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gdHJ1ZTsgLy8ganVtcGVkIHBhc3QgZml4ZWQgc3RhdGUgdXB3YXJkIGRpcmVjdGlvblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBzZXQgbmV3IHZhbHVlc1xyXG5cdFx0XHRcdFx0X3V0aWwuY3NzKHBpblRhcmdldCwgbmV3Q1NTKTtcclxuXHRcdFx0XHRcdGlmIChjaGFuZ2UpIHtcclxuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHBpbiBzcGFjZXIgaWYgc3RhdGUgY2hhbmdlZFxyXG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlIHRoZSBwaW4gc3BhY2VyIGFuZC9vciBlbGVtZW50IHNpemUuXHJcblx0XHQgKiBUaGUgc2l6ZSBvZiB0aGUgc3BhY2VyIG5lZWRzIHRvIGJlIHVwZGF0ZWQgd2hlbmV2ZXIgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZSBjaGFuZ2VzLCBpZiBpdCBpcyB0byBwdXNoIGRvd24gZm9sbG93aW5nIGVsZW1lbnRzLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVBpbkRpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfcGluICYmIF9jb250cm9sbGVyICYmIF9waW5PcHRpb25zLmluRmxvdykgeyAvLyBubyBzcGFjZXJyZXNpemUsIGlmIG9yaWdpbmFsIHBvc2l0aW9uIGlzIGFic29sdXRlXHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRhZnRlciA9IChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0FGVEVSKSxcclxuXHRcdFx0XHRcdGJlZm9yZSA9IChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0JFRk9SRSksXHJcblx0XHRcdFx0XHRkdXJpbmcgPSAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpLFxyXG5cdFx0XHRcdFx0dmVydGljYWwgPSBfY29udHJvbGxlci5pbmZvKFwidmVydGljYWxcIiksXHJcblx0XHRcdFx0XHRwaW5UYXJnZXQgPSBfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZCwgLy8gdXN1YWxseSB0aGUgcGluZWQgZWxlbWVudCBidXQgY2FuIGFsc28gYmUgYW5vdGhlciBzcGFjZXIgKGNhc2NhZGVkIHBpbnMpXHJcblx0XHRcdFx0XHRtYXJnaW5Db2xsYXBzZSA9IF91dGlsLmlzTWFyZ2luQ29sbGFwc2VUeXBlKF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwiZGlzcGxheVwiKSksXHJcblx0XHRcdFx0XHRjc3MgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly8gc2V0IG5ldyBzaXplXHJcblx0XHRcdFx0Ly8gaWYgcmVsc2l6ZTogc3BhY2VyIC0+IHBpbiB8IGVsc2U6IHBpbiAtPiBzcGFjZXJcclxuXHRcdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS53aWR0aCB8fCBfcGluT3B0aW9ucy5yZWxTaXplLmF1dG9GdWxsV2lkdGgpIHtcclxuXHRcdFx0XHRcdGlmIChkdXJpbmcpIHtcclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRcdFx0XHRcIndpZHRoXCI6IF91dGlsLmdldC53aWR0aChfcGluT3B0aW9ucy5zcGFjZXIpXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRcdFx0XHRcIndpZHRoXCI6IFwiMTAwJVwiXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBtaW53aWR0aCBpcyBuZWVkZWQgZm9yIGNhc2NhZGVkIHBpbnMuXHJcblx0XHRcdFx0XHRjc3NbXCJtaW4td2lkdGhcIl0gPSBfdXRpbC5nZXQud2lkdGgodmVydGljYWwgPyBfcGluIDogcGluVGFyZ2V0LCB0cnVlLCB0cnVlKTtcclxuXHRcdFx0XHRcdGNzcy53aWR0aCA9IGR1cmluZyA/IGNzc1tcIm1pbi13aWR0aFwiXSA6IFwiYXV0b1wiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQpIHtcclxuXHRcdFx0XHRcdGlmIChkdXJpbmcpIHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhlIG9ubHkgcGFkZGluZyB0aGUgc3BhY2VyIHNob3VsZCBldmVyIGluY2x1ZGUgaXMgdGhlIGR1cmF0aW9uIChpZiBwdXNoRm9sbG93ZXJzID0gdHJ1ZSksIHNvIHdlIG5lZWQgdG8gc3Vic3RyYWN0IHRoYXQuXHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogX3V0aWwuZ2V0LmhlaWdodChfcGluT3B0aW9ucy5zcGFjZXIpIC0gKF9waW5PcHRpb25zLnB1c2hGb2xsb3dlcnMgPyBfb3B0aW9ucy5kdXJhdGlvbiA6IDApXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRcdFx0XHRcImhlaWdodFwiOiBcIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gbWFyZ2luIGlzIG9ubHkgaW5jbHVkZWQgaWYgaXQncyBhIGNhc2NhZGVkIHBpbiB0byByZXNvbHZlIGFuIElFOSBidWdcclxuXHRcdFx0XHRcdGNzc1tcIm1pbi1oZWlnaHRcIl0gPSBfdXRpbC5nZXQuaGVpZ2h0KHZlcnRpY2FsID8gcGluVGFyZ2V0IDogX3BpbiwgdHJ1ZSwgIW1hcmdpbkNvbGxhcHNlKTsgLy8gbmVlZGVkIGZvciBjYXNjYWRpbmcgcGluc1xyXG5cdFx0XHRcdFx0Y3NzLmhlaWdodCA9IGR1cmluZyA/IGNzc1tcIm1pbi1oZWlnaHRcIl0gOiBcImF1dG9cIjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFkZCBzcGFjZSBmb3IgZHVyYXRpb24gaWYgcHVzaEZvbGxvd2VycyBpcyB0cnVlXHJcblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnB1c2hGb2xsb3dlcnMpIHtcclxuXHRcdFx0XHRcdGNzc1tcInBhZGRpbmdcIiArICh2ZXJ0aWNhbCA/IFwiVG9wXCIgOiBcIkxlZnRcIildID0gX29wdGlvbnMuZHVyYXRpb24gKiBfcHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHRjc3NbXCJwYWRkaW5nXCIgKyAodmVydGljYWwgPyBcIkJvdHRvbVwiIDogXCJSaWdodFwiKV0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqICgxIC0gX3Byb2dyZXNzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgY3NzKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIFBpbiBzdGF0ZSAoaW4gY2VydGFpbiBzY2VuYXJpb3MpXHJcblx0XHQgKiBJZiB0aGUgY29udHJvbGxlciBjb250YWluZXIgaXMgbm90IHRoZSBkb2N1bWVudCBhbmQgd2UgYXJlIG1pZC1waW4tcGhhc2Ugc2Nyb2xsaW5nIG9yIHJlc2l6aW5nIHRoZSBtYWluIGRvY3VtZW50IGNhbiByZXN1bHQgdG8gd3JvbmcgcGluIHBvc2l0aW9ucy5cclxuXHRcdCAqIFNvIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIHJlc2l6ZSBhbmQgc2Nyb2xsIG9mIHRoZSBkb2N1bWVudC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVQaW5JbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIF9waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgIV9jb250cm9sbGVyLmluZm8oXCJpc0RvY3VtZW50XCIpKSB7XHJcblx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIFBpbiBzcGFjZXIgc2l6ZSBzdGF0ZSAoaW4gY2VydGFpbiBzY2VuYXJpb3MpXHJcblx0XHQgKiBJZiBjb250YWluZXIgaXMgcmVzaXplZCBkdXJpbmcgcGluIGFuZCByZWxhdGl2ZWx5IHNpemVkIHRoZSBzaXplIG9mIHRoZSBwaW4gbWlnaHQgbmVlZCB0byBiZSB1cGRhdGVkLi4uXHJcblx0XHQgKiBTbyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiByZXNpemUgb2YgdGhlIGNvbnRhaW5lci5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVSZWxhdGl2ZVBpblNwYWNlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIF9waW4gJiYgLy8gd2VsbCwgZHVoXHJcblx0XHRcdFx0X3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgLy8gZWxlbWVudCBpbiBwaW5uZWQgc3RhdGU/XHJcblx0XHRcdFx0KCAvLyBpcyB3aWR0aCBvciBoZWlnaHQgcmVsYXRpdmVseSBzaXplZCwgYnV0IG5vdCBpbiByZWxhdGlvbiB0byBib2R5PyB0aGVuIHdlIG5lZWQgdG8gcmVjYWxjLlxyXG5cdFx0XHRcdFx0KChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoIHx8IF9waW5PcHRpb25zLnJlbFNpemUuYXV0b0Z1bGxXaWR0aCkgJiYgX3V0aWwuZ2V0LndpZHRoKHdpbmRvdykgIT0gX3V0aWwuZ2V0LndpZHRoKF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlKSkgfHxcclxuXHRcdFx0XHRcdChfcGluT3B0aW9ucy5yZWxTaXplLmhlaWdodCAmJiBfdXRpbC5nZXQuaGVpZ2h0KHdpbmRvdykgIT0gX3V0aWwuZ2V0LmhlaWdodChfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZSkpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJcyBjYWxsZWQsIHdoZW4gdGhlIG1vdXNld2hlbCBpcyB1c2VkIHdoaWxlIG92ZXIgYSBwaW5uZWQgZWxlbWVudCBpbnNpZGUgYSBkaXYgY29udGFpbmVyLlxyXG5cdFx0ICogSWYgdGhlIHNjZW5lIGlzIGluIGZpeGVkIHN0YXRlIHNjcm9sbCBldmVudHMgd291bGQgYmUgY291bnRlZCB0b3dhcmRzIHRoZSBib2R5LiBUaGlzIGZvcndhcmRzIHRoZSBldmVudCB0byB0aGUgc2Nyb2xsIGNvbnRhaW5lci5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBvbk1vdXNld2hlZWxPdmVyUGluID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIF9waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgIV9jb250cm9sbGVyLmluZm8oXCJpc0RvY3VtZW50XCIpKSB7IC8vIGluIHBpbiBzdGF0ZVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRfY29udHJvbGxlci5fc2V0U2Nyb2xsUG9zKF9jb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIikgLSAoKGUud2hlZWxEZWx0YSB8fCBlW19jb250cm9sbGVyLmluZm8oXCJ2ZXJ0aWNhbFwiKSA/IFwid2hlZWxEZWx0YVlcIiA6IFwid2hlZWxEZWx0YVhcIl0pIC8gMyB8fCAtZS5kZXRhaWwgKiAzMCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUGluIGFuIGVsZW1lbnQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmUuXHJcblx0XHQgKiBJZiB0aGUgc2NlbmUgZHVyYXRpb24gaXMgMCB0aGUgZWxlbWVudCB3aWxsIG9ubHkgYmUgdW5waW5uZWQsIGlmIHRoZSB1c2VyIHNjcm9sbHMgYmFjayBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbi4gIFxyXG5cdFx0ICogTWFrZSBzdXJlIG9ubHkgb25lIHBpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgYXQgdGhlIHNhbWUgdGltZS5cclxuXHRcdCAqIEFuIGVsZW1lbnQgY2FuIGJlIHBpbm5lZCBtdWx0aXBsZSB0aW1lcywgYnV0IG9ubHkgc3VjY2Vzc2l2ZWx5LlxyXG5cdFx0ICogXyoqTk9URToqKiBUaGUgb3B0aW9uIGBwdXNoRm9sbG93ZXJzYCBoYXMgbm8gZWZmZWN0LCB3aGVuIHRoZSBzY2VuZSBkdXJhdGlvbiBpcyAwLl9cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc2V0UGluXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gcGluIGVsZW1lbnQgYW5kIHB1c2ggYWxsIGZvbGxvd2luZyBlbGVtZW50cyBkb3duIGJ5IHRoZSBhbW91bnQgb2YgdGhlIHBpbiBkdXJhdGlvbi5cclxuXHRcdCAqIHNjZW5lLnNldFBpbihcIiNwaW5cIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcGluIGVsZW1lbnQgYW5kIGtlZXBpbmcgYWxsIGZvbGxvd2luZyBlbGVtZW50cyBpbiB0aGVpciBwbGFjZS4gVGhlIHBpbm5lZCBlbGVtZW50IHdpbGwgbW92ZSBwYXN0IHRoZW0uXHJcblx0XHQgKiBzY2VuZS5zZXRQaW4oXCIjcGluXCIsIHtwdXNoRm9sbG93ZXJzOiBmYWxzZX0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSBlbGVtZW50IC0gQSBTZWxlY3RvciB0YXJnZXRpbmcgYW4gZWxlbWVudCBvciBhIERPTSBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSBwaW5uZWQuXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gW3NldHRpbmdzXSAtIHNldHRpbmdzIGZvciB0aGUgcGluXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzZXR0aW5ncy5wdXNoRm9sbG93ZXJzPXRydWVdIC0gSWYgYHRydWVgIGZvbGxvd2luZyBlbGVtZW50cyB3aWxsIGJlIFwicHVzaGVkXCIgZG93biBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBwaW4sIGlmIGBmYWxzZWAgdGhlIHBpbm5lZCBlbGVtZW50IHdpbGwganVzdCBzY3JvbGwgcGFzdCB0aGVtLiAgXHJcblx0XHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgSWdub3JlZCwgd2hlbiBkdXJhdGlvbiBpcyBgMGAuXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3NldHRpbmdzLnNwYWNlckNsYXNzPVwic2Nyb2xsbWFnaWMtcGluLXNwYWNlclwiXSAtIENsYXNzbmFtZSBvZiB0aGUgcGluIHNwYWNlciBlbGVtZW50LCB3aGljaCBpcyB1c2VkIHRvIHJlcGxhY2UgdGhlIGVsZW1lbnQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zZXRQaW4gPSBmdW5jdGlvbiAoZWxlbWVudCwgc2V0dGluZ3MpIHtcclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0ZGVmYXVsdFNldHRpbmdzID0ge1xyXG5cdFx0XHRcdFx0cHVzaEZvbGxvd2VyczogdHJ1ZSxcclxuXHRcdFx0XHRcdHNwYWNlckNsYXNzOiBcInNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHZhciBwdXNoRm9sbG93ZXJzQWN0aXZlbHlTZXQgPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSgncHVzaEZvbGxvd2VycycpO1xyXG5cdFx0XHRzZXR0aW5ncyA9IF91dGlsLmV4dGVuZCh7fSwgZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XHJcblxyXG5cdFx0XHQvLyB2YWxpZGF0ZSBFbGVtZW50XHJcblx0XHRcdGVsZW1lbnQgPSBfdXRpbC5nZXQuZWxlbWVudHMoZWxlbWVudClbMF07XHJcblx0XHRcdGlmICghZWxlbWVudCkge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIGNhbGxpbmcgbWV0aG9kICdzZXRQaW4oKSc6IEludmFsaWQgcGluIGVsZW1lbnQgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXHJcblx0XHRcdH0gZWxzZSBpZiAoX3V0aWwuY3NzKGVsZW1lbnQsIFwicG9zaXRpb25cIikgPT09IFwiZml4ZWRcIikge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIGNhbGxpbmcgbWV0aG9kICdzZXRQaW4oKSc6IFBpbiBkb2VzIG5vdCB3b3JrIHdpdGggZWxlbWVudHMgdGhhdCBhcmUgcG9zaXRpb25lZCAnZml4ZWQnLlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7IC8vIGNhbmNlbFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoX3BpbikgeyAvLyBwcmVleGlzdGluZyBwaW4/XHJcblx0XHRcdFx0aWYgKF9waW4gPT09IGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdC8vIHNhbWUgcGluIHdlIGFscmVhZHkgaGF2ZSAtPiBkbyBub3RoaW5nXHJcblx0XHRcdFx0XHRyZXR1cm4gU2NlbmU7IC8vIGNhbmNlbFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBraWxsIG9sZCBwaW5cclxuXHRcdFx0XHRcdFNjZW5lLnJlbW92ZVBpbigpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdFx0X3BpbiA9IGVsZW1lbnQ7XHJcblxyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHRwYXJlbnREaXNwbGF5ID0gX3Bpbi5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXksXHJcblx0XHRcdFx0Ym91bmRzUGFyYW1zID0gW1widG9wXCIsIFwibGVmdFwiLCBcImJvdHRvbVwiLCBcInJpZ2h0XCIsIFwibWFyZ2luXCIsIFwibWFyZ2luTGVmdFwiLCBcIm1hcmdpblJpZ2h0XCIsIFwibWFyZ2luVG9wXCIsIFwibWFyZ2luQm90dG9tXCJdO1xyXG5cclxuXHRcdFx0X3Bpbi5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIGhhY2sgc3RhcnQgdG8gZm9yY2UgY3NzIHRvIHJldHVybiBzdHlsZXNoZWV0IHZhbHVlcyBpbnN0ZWFkIG9mIGNhbGN1bGF0ZWQgcHggdmFsdWVzLlxyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHRpbkZsb3cgPSBfdXRpbC5jc3MoX3BpbiwgXCJwb3NpdGlvblwiKSAhPSBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0cGluQ1NTID0gX3V0aWwuY3NzKF9waW4sIGJvdW5kc1BhcmFtcy5jb25jYXQoW1wiZGlzcGxheVwiXSkpLFxyXG5cdFx0XHRcdHNpemVDU1MgPSBfdXRpbC5jc3MoX3BpbiwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pO1xyXG5cdFx0XHRfcGluLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9IHBhcmVudERpc3BsYXk7IC8vIGhhY2sgZW5kLlxyXG5cclxuXHRcdFx0aWYgKCFpbkZsb3cgJiYgc2V0dGluZ3MucHVzaEZvbGxvd2Vycykge1xyXG5cdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IElmIHRoZSBwaW5uZWQgZWxlbWVudCBpcyBwb3NpdGlvbmVkIGFic29sdXRlbHkgcHVzaEZvbGxvd2VycyB3aWxsIGJlIGRpc2FibGVkLlwiKTtcclxuXHRcdFx0XHRzZXR0aW5ncy5wdXNoRm9sbG93ZXJzID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAvLyB3YWl0IHVudGlsIGFsbCBmaW5pc2hlZCwgYmVjYXVzZSB3aXRoIHJlc3BvbnNpdmUgZHVyYXRpb24gaXQgd2lsbCBvbmx5IGJlIHNldCBhZnRlciBzY2VuZSBpcyBhZGRlZCB0byBjb250cm9sbGVyXHJcblx0XHRcdFx0aWYgKF9waW4gJiYgX29wdGlvbnMuZHVyYXRpb24gPT09IDAgJiYgcHVzaEZvbGxvd2Vyc0FjdGl2ZWx5U2V0ICYmIHNldHRpbmdzLnB1c2hGb2xsb3dlcnMpIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IHB1c2hGb2xsb3dlcnMgPVwiLCB0cnVlLCBcImhhcyBubyBlZmZlY3QsIHdoZW4gc2NlbmUgZHVyYXRpb24gaXMgMC5cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAwKTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBzcGFjZXIgYW5kIGluc2VydFxyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHRzcGFjZXIgPSBfcGluLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBfcGluKSxcclxuXHRcdFx0XHRzcGFjZXJDU1MgPSBfdXRpbC5leHRlbmQocGluQ1NTLCB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogaW5GbG93ID8gXCJyZWxhdGl2ZVwiIDogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0Ym94U2l6aW5nOiBcImNvbnRlbnQtYm94XCIsXHJcblx0XHRcdFx0XHRtb3pCb3hTaXppbmc6IFwiY29udGVudC1ib3hcIixcclxuXHRcdFx0XHRcdHdlYmtpdEJveFNpemluZzogXCJjb250ZW50LWJveFwiXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoIWluRmxvdykgeyAvLyBjb3B5IHNpemUgaWYgcG9zaXRpb25lZCBhYnNvbHV0ZWx5LCB0byB3b3JrIGZvciBib3R0b20vcmlnaHQgcG9zaXRpb25lZCBlbGVtZW50cy5cclxuXHRcdFx0XHRfdXRpbC5leHRlbmQoc3BhY2VyQ1NTLCBfdXRpbC5jc3MoX3BpbiwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X3V0aWwuY3NzKHNwYWNlciwgc3BhY2VyQ1NTKTtcclxuXHRcdFx0c3BhY2VyLnNldEF0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSwgXCJcIik7XHJcblx0XHRcdF91dGlsLmFkZENsYXNzKHNwYWNlciwgc2V0dGluZ3Muc3BhY2VyQ2xhc3MpO1xyXG5cclxuXHRcdFx0Ly8gc2V0IHRoZSBwaW4gT3B0aW9uc1xyXG5cdFx0XHRfcGluT3B0aW9ucyA9IHtcclxuXHRcdFx0XHRzcGFjZXI6IHNwYWNlcixcclxuXHRcdFx0XHRyZWxTaXplOiB7IC8vIHNhdmUgaWYgc2l6ZSBpcyBkZWZpbmVkIHVzaW5nICUgdmFsdWVzLiBpZiBzbywgaGFuZGxlIHNwYWNlciByZXNpemUgZGlmZmVyZW50bHkuLi5cclxuXHRcdFx0XHRcdHdpZHRoOiBzaXplQ1NTLndpZHRoLnNsaWNlKC0xKSA9PT0gXCIlXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IHNpemVDU1MuaGVpZ2h0LnNsaWNlKC0xKSA9PT0gXCIlXCIsXHJcblx0XHRcdFx0XHRhdXRvRnVsbFdpZHRoOiBzaXplQ1NTLndpZHRoID09PSBcImF1dG9cIiAmJiBpbkZsb3cgJiYgX3V0aWwuaXNNYXJnaW5Db2xsYXBzZVR5cGUocGluQ1NTLmRpc3BsYXkpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwdXNoRm9sbG93ZXJzOiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzLFxyXG5cdFx0XHRcdGluRmxvdzogaW5GbG93LCAvLyBzdG9yZXMgaWYgdGhlIGVsZW1lbnQgdGFrZXMgdXAgc3BhY2UgaW4gdGhlIGRvY3VtZW50IGZsb3dcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmICghX3Bpbi5fX19vcmlnU3R5bGUpIHtcclxuXHRcdFx0XHRfcGluLl9fX29yaWdTdHlsZSA9IHt9O1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0cGluSW5saW5lQ1NTID0gX3Bpbi5zdHlsZSxcclxuXHRcdFx0XHRcdGNvcHlTdHlsZXMgPSBib3VuZHNQYXJhbXMuY29uY2F0KFtcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwicG9zaXRpb25cIiwgXCJib3hTaXppbmdcIiwgXCJtb3pCb3hTaXppbmdcIiwgXCJ3ZWJraXRCb3hTaXppbmdcIl0pO1xyXG5cdFx0XHRcdGNvcHlTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0XHRfcGluLl9fX29yaWdTdHlsZVt2YWxdID0gcGluSW5saW5lQ1NTW3ZhbF0gfHwgXCJcIjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgcmVsYXRpdmUgc2l6ZSwgdHJhbnNmZXIgaXQgdG8gc3BhY2VyIGFuZCBtYWtlIHBpbiBjYWxjdWxhdGUgaXQuLi5cclxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGgpIHtcclxuXHRcdFx0XHRfdXRpbC5jc3Moc3BhY2VyLCB7XHJcblx0XHRcdFx0XHR3aWR0aDogc2l6ZUNTUy53aWR0aFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLmhlaWdodCkge1xyXG5cdFx0XHRcdF91dGlsLmNzcyhzcGFjZXIsIHtcclxuXHRcdFx0XHRcdGhlaWdodDogc2l6ZUNTUy5oZWlnaHRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gbm93IHBsYWNlIHRoZSBwaW4gZWxlbWVudCBpbnNpZGUgdGhlIHNwYWNlclx0XHJcblx0XHRcdHNwYWNlci5hcHBlbmRDaGlsZChfcGluKTtcclxuXHRcdFx0Ly8gYW5kIHNldCBuZXcgY3NzXHJcblx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0cG9zaXRpb246IGluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRtYXJnaW46IFwiYXV0b1wiLFxyXG5cdFx0XHRcdHRvcDogXCJhdXRvXCIsXHJcblx0XHRcdFx0bGVmdDogXCJhdXRvXCIsXHJcblx0XHRcdFx0Ym90dG9tOiBcImF1dG9cIixcclxuXHRcdFx0XHRyaWdodDogXCJhdXRvXCJcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS53aWR0aCB8fCBfcGluT3B0aW9ucy5yZWxTaXplLmF1dG9GdWxsV2lkdGgpIHtcclxuXHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0Ym94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuXHRcdFx0XHRcdG1vekJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblx0XHRcdFx0XHR3ZWJraXRCb3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGFkZCBsaXN0ZW5lciB0byBkb2N1bWVudCB0byB1cGRhdGUgcGluIHBvc2l0aW9uIGluIGNhc2UgY29udHJvbGxlciBpcyBub3QgdGhlIGRvY3VtZW50LlxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlUGluSW5Db250YWluZXIpO1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlUGluSW5Db250YWluZXIpO1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlUmVsYXRpdmVQaW5TcGFjZXIpO1xyXG5cdFx0XHQvLyBhZGQgbW91c2V3aGVlbCBsaXN0ZW5lciB0byBjYXRjaCBzY3JvbGxzIG92ZXIgZml4ZWQgZWxlbWVudHNcclxuXHRcdFx0X3Bpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcclxuXHRcdFx0X3Bpbi5hZGRFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XHJcblxyXG5cdFx0XHRsb2coMywgXCJhZGRlZCBwaW5cIik7XHJcblxyXG5cdFx0XHQvLyBmaW5hbGx5IHVwZGF0ZSB0aGUgcGluIHRvIGluaXRcclxuXHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcclxuXHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgdGhlIHBpbiBmcm9tIHRoZSBzY2VuZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlUGluXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gcmVtb3ZlIHRoZSBwaW4gZnJvbSB0aGUgc2NlbmUgd2l0aG91dCByZXNldHRpbmcgaXQgKHRoZSBzcGFjZXIgaXMgbm90IHJlbW92ZWQpXHJcblx0XHQgKiBzY2VuZS5yZW1vdmVQaW4oKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyByZW1vdmUgdGhlIHBpbiBmcm9tIHRoZSBzY2VuZSBhbmQgcmVzZXQgdGhlIHBpbiBlbGVtZW50IHRvIGl0cyBpbml0aWFsIHBvc2l0aW9uIChzcGFjZXIgaXMgcmVtb3ZlZClcclxuXHRcdCAqIHNjZW5lLnJlbW92ZVBpbih0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldD1mYWxzZV0gLSBJZiBgZmFsc2VgIHRoZSBzcGFjZXIgd2lsbCBub3QgYmUgcmVtb3ZlZCBhbmQgdGhlIGVsZW1lbnQncyBwb3NpdGlvbiB3aWxsIG5vdCBiZSByZXNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucmVtb3ZlUGluID0gZnVuY3Rpb24gKHJlc2V0KSB7XHJcblx0XHRcdGlmIChfcGluKSB7XHJcblx0XHRcdFx0aWYgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7XHJcblx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSh0cnVlKTsgLy8gZm9yY2UgdW5waW4gYXQgcG9zaXRpb25cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHJlc2V0IHx8ICFfY29udHJvbGxlcikgeyAvLyBpZiB0aGVyZSdzIG5vIGNvbnRyb2xsZXIgbm8gcHJvZ3Jlc3Mgd2FzIG1hZGUgYW55d2F5Li4uXHJcblx0XHRcdFx0XHR2YXIgcGluVGFyZ2V0ID0gX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQ7IC8vIHVzdWFsbHkgdGhlIHBpbiBlbGVtZW50LCBidXQgbWF5IGJlIGFub3RoZXIgc3BhY2VyIChjYXNjYWRlZCBwaW5zKS4uLlxyXG5cdFx0XHRcdFx0aWYgKHBpblRhcmdldC5oYXNBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUpKSB7IC8vIGNvcHkgbWFyZ2lucyB0byBjaGlsZCBzcGFjZXJcclxuXHRcdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdFx0c3R5bGUgPSBfcGluT3B0aW9ucy5zcGFjZXIuc3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWVzID0gW1wibWFyZ2luXCIsIFwibWFyZ2luTGVmdFwiLCBcIm1hcmdpblJpZ2h0XCIsIFwibWFyZ2luVG9wXCIsIFwibWFyZ2luQm90dG9tXCJdLFxyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbnMgPSB7fTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbnNbdmFsXSA9IHN0eWxlW3ZhbF0gfHwgXCJcIjtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIG1hcmdpbnMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0X3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBpblRhcmdldCwgX3Bpbk9wdGlvbnMuc3BhY2VyKTtcclxuXHRcdFx0XHRcdF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9waW5PcHRpb25zLnNwYWNlcik7XHJcblx0XHRcdFx0XHRpZiAoIV9waW4ucGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUpKSB7IC8vIGlmIGl0J3MgdGhlIGxhc3QgcGluIGZvciB0aGlzIGVsZW1lbnQgLT4gcmVzdG9yZSBpbmxpbmUgc3R5bGVzXHJcblx0XHRcdFx0XHRcdC8vIFRPRE86IG9ubHkgY29ycmVjdGx5IHNldCBmb3IgZmlyc3QgcGluICh3aGVuIGNhc2NhZGluZykgLSBob3cgdG8gZml4P1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3BpbiwgX3Bpbi5fX19vcmlnU3R5bGUpO1xyXG5cdFx0XHRcdFx0XHRkZWxldGUgX3Bpbi5fX19vcmlnU3R5bGU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlUmVsYXRpdmVQaW5TcGFjZXIpO1xyXG5cdFx0XHRcdF9waW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XHJcblx0XHRcdFx0X3Bpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XHJcblx0XHRcdFx0X3BpbiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRsb2coMywgXCJyZW1vdmVkIHBpbiAocmVzZXQ6IFwiICsgKHJlc2V0ID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpICsgXCIpXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdHZhclxyXG5cdFx0XHRfY3NzQ2xhc3NlcyxcclxuXHRcdFx0X2Nzc0NsYXNzRWxlbXMgPSBbXTtcclxuXHJcblx0XHRTY2VuZVxyXG5cdFx0XHQub24oXCJkZXN0cm95LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0U2NlbmUucmVtb3ZlQ2xhc3NUb2dnbGUoZS5yZXNldCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0LyoqXHJcblx0XHQgKiBEZWZpbmUgYSBjc3MgY2xhc3MgbW9kaWZpY2F0aW9uIHdoaWxlIHRoZSBzY2VuZSBpcyBhY3RpdmUuICBcclxuXHRcdCAqIFdoZW4gdGhlIHNjZW5lIHRyaWdnZXJzIHRoZSBjbGFzc2VzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHN1cHBsaWVkIGVsZW1lbnQgYW5kIHJlbW92ZWQsIHdoZW4gdGhlIHNjZW5lIGlzIG92ZXIuXHJcblx0XHQgKiBJZiB0aGUgc2NlbmUgZHVyYXRpb24gaXMgMCB0aGUgY2xhc3NlcyB3aWxsIG9ubHkgYmUgcmVtb3ZlZCBpZiB0aGUgdXNlciBzY3JvbGxzIGJhY2sgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24uXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3NldENsYXNzVG9nZ2xlXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gYWRkIHRoZSBjbGFzcyAnbXljbGFzcycgdG8gdGhlIGVsZW1lbnQgd2l0aCB0aGUgaWQgJ215LWVsZW0nIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBzY2VuZS5zZXRDbGFzc1RvZ2dsZShcIiNteS1lbGVtXCIsIFwibXljbGFzc1wiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBhZGQgbXVsdGlwbGUgY2xhc3NlcyB0byBtdWx0aXBsZSBlbGVtZW50cyBkZWZpbmVkIGJ5IHRoZSBzZWxlY3RvciAnLmNsYXNzQ2hhbmdlJ1xyXG5cdFx0ICogc2NlbmUuc2V0Q2xhc3NUb2dnbGUoXCIuY2xhc3NDaGFuZ2VcIiwgXCJjbGFzczEgY2xhc3MyIGNsYXNzM1wiKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gZWxlbWVudCAtIEEgU2VsZWN0b3IgdGFyZ2V0aW5nIG9uZSBvciBtb3JlIGVsZW1lbnRzIG9yIGEgRE9NIG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIG1vZGlmaWVkLlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgLSBPbmUgb3IgbW9yZSBDbGFzc25hbWVzIChzZXBhcmF0ZWQgYnkgc3BhY2UpIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBlbGVtZW50IGR1cmluZyB0aGUgc2NlbmUuXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zZXRDbGFzc1RvZ2dsZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc2VzKSB7XHJcblx0XHRcdHZhciBlbGVtcyA9IF91dGlsLmdldC5lbGVtZW50cyhlbGVtZW50KTtcclxuXHRcdFx0aWYgKGVsZW1zLmxlbmd0aCA9PT0gMCB8fCAhX3V0aWwudHlwZS5TdHJpbmcoY2xhc3NlcykpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0Q2xhc3NUb2dnbGUoKSc6IEludmFsaWQgXCIgKyAoZWxlbXMubGVuZ3RoID09PSAwID8gXCJlbGVtZW50XCIgOiBcImNsYXNzZXNcIikgKyBcIiBzdXBwbGllZC5cIik7XHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChfY3NzQ2xhc3NFbGVtcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Ly8gcmVtb3ZlIG9sZCBvbmVzXHJcblx0XHRcdFx0U2NlbmUucmVtb3ZlQ2xhc3NUb2dnbGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRfY3NzQ2xhc3NlcyA9IGNsYXNzZXM7XHJcblx0XHRcdF9jc3NDbGFzc0VsZW1zID0gZWxlbXM7XHJcblx0XHRcdFNjZW5lLm9uKFwiZW50ZXIuaW50ZXJuYWxfY2xhc3MgbGVhdmUuaW50ZXJuYWxfY2xhc3NcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR2YXIgdG9nZ2xlID0gZS50eXBlID09PSBcImVudGVyXCIgPyBfdXRpbC5hZGRDbGFzcyA6IF91dGlsLnJlbW92ZUNsYXNzO1xyXG5cdFx0XHRcdF9jc3NDbGFzc0VsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGtleSkge1xyXG5cdFx0XHRcdFx0dG9nZ2xlKGVsZW0sIF9jc3NDbGFzc2VzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgdGhlIGNsYXNzIGJpbmRpbmcgZnJvbSB0aGUgc2NlbmUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZUNsYXNzVG9nZ2xlXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gcmVtb3ZlIGNsYXNzIGJpbmRpbmcgZnJvbSB0aGUgc2NlbmUgd2l0aG91dCByZXNldFxyXG5cdFx0ICogc2NlbmUucmVtb3ZlQ2xhc3NUb2dnbGUoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyByZW1vdmUgY2xhc3MgYmluZGluZyBhbmQgcmVtb3ZlIHRoZSBjaGFuZ2VzIGl0IGNhdXNlZFxyXG5cdFx0ICogc2NlbmUucmVtb3ZlQ2xhc3NUb2dnbGUodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYGZhbHNlYCBhbmQgdGhlIGNsYXNzZXMgYXJlIGN1cnJlbnRseSBhY3RpdmUsIHRoZXkgd2lsbCByZW1haW4gb24gdGhlIGVsZW1lbnQuIElmIGB0cnVlYCB0aGV5IHdpbGwgYmUgcmVtb3ZlZC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucmVtb3ZlQ2xhc3NUb2dnbGUgPSBmdW5jdGlvbiAocmVzZXQpIHtcclxuXHRcdFx0aWYgKHJlc2V0KSB7XHJcblx0XHRcdFx0X2Nzc0NsYXNzRWxlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwga2V5KSB7XHJcblx0XHRcdFx0XHRfdXRpbC5yZW1vdmVDbGFzcyhlbGVtLCBfY3NzQ2xhc3Nlcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0U2NlbmUub2ZmKFwic3RhcnQuaW50ZXJuYWxfY2xhc3MgZW5kLmludGVybmFsX2NsYXNzXCIpO1xyXG5cdFx0XHRfY3NzQ2xhc3NlcyA9IHVuZGVmaW5lZDtcclxuXHRcdFx0X2Nzc0NsYXNzRWxlbXMgPSBbXTtcclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBJTklUXHJcblx0XHRjb25zdHJ1Y3QoKTtcclxuXHRcdHJldHVybiBTY2VuZTtcclxuXHR9O1xyXG5cclxuXHQvLyBzdG9yZSBwYWdld2lkZSBzY2VuZSBvcHRpb25zXHJcblx0dmFyIFNDRU5FX09QVElPTlMgPSB7XHJcblx0XHRkZWZhdWx0czoge1xyXG5cdFx0XHRkdXJhdGlvbjogMCxcclxuXHRcdFx0b2Zmc2V0OiAwLFxyXG5cdFx0XHR0cmlnZ2VyRWxlbWVudDogdW5kZWZpbmVkLFxyXG5cdFx0XHR0cmlnZ2VySG9vazogMC41LFxyXG5cdFx0XHRyZXZlcnNlOiB0cnVlLFxyXG5cdFx0XHRsb2dsZXZlbDogMlxyXG5cdFx0fSxcclxuXHRcdHZhbGlkYXRlOiB7XHJcblx0XHRcdG9mZnNldDogZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcclxuXHRcdFx0XHRpZiAoIV91dGlsLnR5cGUuTnVtYmVyKHZhbCkpIHtcclxuXHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwib2Zmc2V0XFxcIjpcIiwgdmFsXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJpZ2dlckVsZW1lbnQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YWwgPSB2YWwgfHwgdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICh2YWwpIHtcclxuXHRcdFx0XHRcdHZhciBlbGVtID0gX3V0aWwuZ2V0LmVsZW1lbnRzKHZhbClbMF07XHJcblx0XHRcdFx0XHRpZiAoZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUpIHtcclxuXHRcdFx0XHRcdFx0dmFsID0gZWxlbTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRocm93IFtcIkVsZW1lbnQgZGVmaW5lZCBpbiBvcHRpb24gXFxcInRyaWdnZXJFbGVtZW50XFxcIiB3YXMgbm90IGZvdW5kOlwiLCB2YWxdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0cmlnZ2VySG9vazogZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdHZhciB0cmFuc2xhdGUgPSB7XHJcblx0XHRcdFx0XHRcIm9uQ2VudGVyXCI6IDAuNSxcclxuXHRcdFx0XHRcdFwib25FbnRlclwiOiAxLFxyXG5cdFx0XHRcdFx0XCJvbkxlYXZlXCI6IDBcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLk51bWJlcih2YWwpKSB7XHJcblx0XHRcdFx0XHR2YWwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihwYXJzZUZsb2F0KHZhbCksIDEpKTsgLy8gIG1ha2Ugc3VyZSBpdHMgYmV0d2VlZW4gMCBhbmQgMVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsIGluIHRyYW5zbGF0ZSkge1xyXG5cdFx0XHRcdFx0dmFsID0gdHJhbnNsYXRlW3ZhbF07XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwidHJpZ2dlckhvb2tcXFwiOiBcIiwgdmFsXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmV2ZXJzZTogZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdHJldHVybiAhIXZhbDsgLy8gZm9yY2UgYm9vbGVhblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2dsZXZlbDogZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdHZhbCA9IHBhcnNlSW50KHZhbCk7XHJcblx0XHRcdFx0aWYgKCFfdXRpbC50eXBlLk51bWJlcih2YWwpIHx8IHZhbCA8IDAgfHwgdmFsID4gMykge1xyXG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJsb2dsZXZlbFxcXCI6XCIsIHZhbF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH1cclxuXHRcdH0sIC8vIGhvbGRlciBmb3IgIHZhbGlkYXRpb24gbWV0aG9kcy4gZHVyYXRpb24gdmFsaWRhdGlvbiBpcyBoYW5kbGVkIGluICdnZXR0ZXJzLXNldHRlcnMuanMnXHJcblx0XHRzaGlmdHM6IFtcImR1cmF0aW9uXCIsIFwib2Zmc2V0XCIsIFwidHJpZ2dlckhvb2tcIl0sIC8vIGxpc3Qgb2Ygb3B0aW9ucyB0aGF0IHRyaWdnZXIgYSBgc2hpZnRgIGV2ZW50XHJcblx0fTtcclxuXHQvKlxyXG5cdCAqIG1ldGhvZCB1c2VkIHRvIGFkZCBhbiBvcHRpb24gdG8gU2Nyb2xsTWFnaWMgU2NlbmVzLlxyXG5cdCAqIFRPRE86IERPQyAocHJpdmF0ZSBmb3IgZGV2KVxyXG5cdCAqL1xyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLmFkZE9wdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIHZhbGlkYXRpb25DYWxsYmFjaywgc2hpZnRzKSB7XHJcblx0XHRpZiAoIShuYW1lIGluIFNDRU5FX09QVElPTlMuZGVmYXVsdHMpKSB7XHJcblx0XHRcdFNDRU5FX09QVElPTlMuZGVmYXVsdHNbbmFtZV0gPSBkZWZhdWx0VmFsdWU7XHJcblx0XHRcdFNDRU5FX09QVElPTlMudmFsaWRhdGVbbmFtZV0gPSB2YWxpZGF0aW9uQ2FsbGJhY2s7XHJcblx0XHRcdGlmIChzaGlmdHMpIHtcclxuXHRcdFx0XHRTQ0VORV9PUFRJT05TLnNoaWZ0cy5wdXNoKG5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgXCJbc3RhdGljXSBTY3JvbGxNYWdpYy5TY2VuZSAtPiBDYW5ub3QgYWRkIFNjZW5lIG9wdGlvbiAnXCIgKyBuYW1lICsgXCInLCBiZWNhdXNlIGl0IGFscmVhZHkgZXhpc3RzLlwiKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdC8vIGluc3RhbmNlIGV4dGVuc2lvbiBmdW5jdGlvbiBmb3IgcGx1Z2luc1xyXG5cdC8vIFRPRE86IERPQyAocHJpdmF0ZSBmb3IgZGV2KVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbnNpb24pIHtcclxuXHRcdHZhciBvbGRDbGFzcyA9IHRoaXM7XHJcblx0XHRTY3JvbGxNYWdpYy5TY2VuZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b2xkQ2xhc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0dGhpcy4kc3VwZXIgPSBfdXRpbC5leHRlbmQoe30sIHRoaXMpOyAvLyBjb3B5IHBhcmVudCBzdGF0ZVxyXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuXHRcdH07XHJcblx0XHRfdXRpbC5leHRlbmQoU2Nyb2xsTWFnaWMuU2NlbmUsIG9sZENsYXNzKTsgLy8gY29weSBwcm9wZXJ0aWVzXHJcblx0XHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUgPSBvbGRDbGFzcy5wcm90b3R5cGU7IC8vIGNvcHkgcHJvdG90eXBlXHJcblx0XHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY3JvbGxNYWdpYy5TY2VuZTsgLy8gcmVzdG9yZSBjb25zdHJ1Y3RvclxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVE9ETzogRE9DUyAocHJpdmF0ZSBmb3IgZGV2KVxyXG5cdCAqIEBjbGFzc1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblxyXG5cdFNjcm9sbE1hZ2ljLkV2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWVzcGFjZSwgdGFyZ2V0LCB2YXJzKSB7XHJcblx0XHR2YXJzID0gdmFycyB8fCB7fTtcclxuXHRcdGZvciAodmFyIGtleSBpbiB2YXJzKSB7XHJcblx0XHRcdHRoaXNba2V5XSA9IHZhcnNba2V5XTtcclxuXHRcdH1cclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLnRhcmdldCA9IHRoaXMuY3VycmVudFRhcmdldCA9IHRhcmdldDtcclxuXHRcdHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlIHx8ICcnO1xyXG5cdFx0dGhpcy50aW1lU3RhbXAgPSB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKlxyXG5cdCAqIFRPRE86IERPQ1MgKHByaXZhdGUgZm9yIGRldilcclxuXHQgKi9cclxuXHJcblx0dmFyIF91dGlsID0gU2Nyb2xsTWFnaWMuX3V0aWwgPSAoZnVuY3Rpb24gKHdpbmRvdykge1xyXG5cdFx0dmFyIFUgPSB7fSxcclxuXHRcdFx0aTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogaW50ZXJuYWwgaGVscGVyc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHQvLyBwYXJzZSBmbG9hdCBhbmQgZmFsbCBiYWNrIHRvIDAuXHJcblx0XHR2YXIgZmxvYXR2YWwgPSBmdW5jdGlvbiAobnVtYmVyKSB7XHJcblx0XHRcdHJldHVybiBwYXJzZUZsb2F0KG51bWJlcikgfHwgMDtcclxuXHRcdH07XHJcblx0XHQvLyBnZXQgY3VycmVudCBzdHlsZSBJRSBzYWZlIChvdGhlcndpc2UgSUUgd291bGQgcmV0dXJuIGNhbGN1bGF0ZWQgdmFsdWVzIGZvciAnYXV0bycpXHJcblx0XHR2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbiAoZWxlbSkge1xyXG5cdFx0XHRyZXR1cm4gZWxlbS5jdXJyZW50U3R5bGUgPyBlbGVtLmN1cnJlbnRTdHlsZSA6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBnZXQgZWxlbWVudCBkaW1lbnNpb24gKHdpZHRoIG9yIGhlaWdodClcclxuXHRcdHZhciBfZGltZW5zaW9uID0gZnVuY3Rpb24gKHdoaWNoLCBlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbikge1xyXG5cdFx0XHRlbGVtID0gKGVsZW0gPT09IGRvY3VtZW50KSA/IHdpbmRvdyA6IGVsZW07XHJcblx0XHRcdGlmIChlbGVtID09PSB3aW5kb3cpIHtcclxuXHRcdFx0XHRpbmNsdWRlTWFyZ2luID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAoIV90eXBlLkRvbUVsZW1lbnQoZWxlbSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHR3aGljaCA9IHdoaWNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2hpY2guc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdHZhciBkaW1lbnNpb24gPSAob3V0ZXIgPyBlbGVtWydvZmZzZXQnICsgd2hpY2hdIHx8IGVsZW1bJ291dGVyJyArIHdoaWNoXSA6IGVsZW1bJ2NsaWVudCcgKyB3aGljaF0gfHwgZWxlbVsnaW5uZXInICsgd2hpY2hdKSB8fCAwO1xyXG5cdFx0XHRpZiAob3V0ZXIgJiYgaW5jbHVkZU1hcmdpbikge1xyXG5cdFx0XHRcdHZhciBzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xyXG5cdFx0XHRcdGRpbWVuc2lvbiArPSB3aGljaCA9PT0gJ0hlaWdodCcgPyBmbG9hdHZhbChzdHlsZS5tYXJnaW5Ub3ApICsgZmxvYXR2YWwoc3R5bGUubWFyZ2luQm90dG9tKSA6IGZsb2F0dmFsKHN0eWxlLm1hcmdpbkxlZnQpICsgZmxvYXR2YWwoc3R5bGUubWFyZ2luUmlnaHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBkaW1lbnNpb247XHJcblx0XHR9O1xyXG5cdFx0Ly8gY29udmVydHMgJ21hcmdpbi10b3AnIGludG8gJ21hcmdpblRvcCdcclxuXHRcdHZhciBfY2FtZWxDYXNlID0gZnVuY3Rpb24gKHN0cikge1xyXG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL15bXmEtel0rKFthLXpdKS9nLCAnJDEnKS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoZykge1xyXG5cdFx0XHRcdHJldHVybiBnWzFdLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogZXh0ZXJuYWwgaGVscGVyc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHQvLyBleHRlbmQgb2JqIOKAkyBzYW1lIGFzIGpRdWVyeS5leHRlbmQoe30sIG9iakEsIG9iakIpXHJcblx0XHRVLmV4dGVuZCA9IGZ1bmN0aW9uIChvYmopIHtcclxuXHRcdFx0b2JqID0gb2JqIHx8IHt9O1xyXG5cdFx0XHRmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKCFhcmd1bWVudHNbaV0pIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcblx0XHRcdFx0XHRpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRcdFx0b2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG9iajtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gY2hlY2sgaWYgYSBjc3MgZGlzcGxheSB0eXBlIHJlc3VsdHMgaW4gbWFyZ2luLWNvbGxhcHNlIG9yIG5vdFxyXG5cdFx0VS5pc01hcmdpbkNvbGxhcHNlVHlwZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuXHRcdFx0cmV0dXJuIFtcImJsb2NrXCIsIFwiZmxleFwiLCBcImxpc3QtaXRlbVwiLCBcInRhYmxlXCIsIFwiLXdlYmtpdC1ib3hcIl0uaW5kZXhPZihzdHIpID4gLTE7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGltcGxlbWVudGF0aW9uIG9mIHJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG5cdFx0Ly8gYmFzZWQgb24gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzFcclxuXHRcdHZhclxyXG5cdFx0XHRsYXN0VGltZSA9IDAsXHJcblx0XHRcdHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xyXG5cdFx0dmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cdFx0dmFyIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcclxuXHRcdC8vIHRyeSB2ZW5kb3IgcHJlZml4ZXMgaWYgdGhlIGFib3ZlIGRvZXNuJ3Qgd29ya1xyXG5cdFx0Zm9yIChpID0gMDsgIV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0X3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdFx0XHRfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZhbGxiYWNrc1xyXG5cdFx0aWYgKCFfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcblx0XHRcdF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcblx0XHRcdFx0XHR0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpLFxyXG5cdFx0XHRcdFx0aWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XHJcblx0XHRcdFx0XHR9LCB0aW1lVG9DYWxsKTtcclxuXHRcdFx0XHRsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcclxuXHRcdFx0XHRyZXR1cm4gaWQ7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRpZiAoIV9jYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG5cdFx0XHRfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdFUuckFGID0gX3JlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XHJcblx0XHRVLmNBRiA9IF9jYW5jZWxBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XHJcblxyXG5cdFx0dmFyXHJcblx0XHRcdGxvZ2xldmVscyA9IFtcImVycm9yXCIsIFwid2FyblwiLCBcImxvZ1wiXSxcclxuXHRcdFx0Y29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9O1xyXG5cclxuXHRcdGNvbnNvbGUubG9nID0gY29uc29sZS5sb2cgfHwgZnVuY3Rpb24gKCkge307IC8vIG5vIGNvbnNvbGUgbG9nLCB3ZWxsIC0gZG8gbm90aGluZyB0aGVuLi4uXHJcblx0XHQvLyBtYWtlIHN1cmUgbWV0aG9kcyBmb3IgYWxsIGxldmVscyBleGlzdC5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCBsb2dsZXZlbHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIG1ldGhvZCA9IGxvZ2xldmVsc1tpXTtcclxuXHRcdFx0aWYgKCFjb25zb2xlW21ldGhvZF0pIHtcclxuXHRcdFx0XHRjb25zb2xlW21ldGhvZF0gPSBjb25zb2xlLmxvZzsgLy8gcHJlZmVyIC5sb2cgb3ZlciBub3RoaW5nXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFUubG9nID0gZnVuY3Rpb24gKGxvZ2xldmVsKSB7XHJcblx0XHRcdGlmIChsb2dsZXZlbCA+IGxvZ2xldmVscy5sZW5ndGggfHwgbG9nbGV2ZWwgPD0gMCkgbG9nbGV2ZWwgPSBsb2dsZXZlbHMubGVuZ3RoO1xyXG5cdFx0XHR2YXIgbm93ID0gbmV3IERhdGUoKSxcclxuXHRcdFx0XHR0aW1lID0gKFwiMFwiICsgbm93LmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgbm93LmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBub3cuZ2V0U2Vjb25kcygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjAwXCIgKyBub3cuZ2V0TWlsbGlzZWNvbmRzKCkpLnNsaWNlKC0zKSxcclxuXHRcdFx0XHRtZXRob2QgPSBsb2dsZXZlbHNbbG9nbGV2ZWwgLSAxXSxcclxuXHRcdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXHJcblx0XHRcdFx0ZnVuYyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoY29uc29sZVttZXRob2RdLCBjb25zb2xlKTtcclxuXHRcdFx0YXJncy51bnNoaWZ0KHRpbWUpO1xyXG5cdFx0XHRmdW5jLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogdHlwZSB0ZXN0aW5nXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHZhciBfdHlwZSA9IFUudHlwZSA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikucmVwbGFjZSgvXlxcW29iamVjdCAoLispXFxdJC8sIFwiJDFcIikudG9Mb3dlckNhc2UoKTtcclxuXHRcdH07XHJcblx0XHRfdHlwZS5TdHJpbmcgPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gX3R5cGUodikgPT09ICdzdHJpbmcnO1xyXG5cdFx0fTtcclxuXHRcdF90eXBlLkZ1bmN0aW9uID0gZnVuY3Rpb24gKHYpIHtcclxuXHRcdFx0cmV0dXJuIF90eXBlKHYpID09PSAnZnVuY3Rpb24nO1xyXG5cdFx0fTtcclxuXHRcdF90eXBlLkFycmF5ID0gZnVuY3Rpb24gKHYpIHtcclxuXHRcdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkodik7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuTnVtYmVyID0gZnVuY3Rpb24gKHYpIHtcclxuXHRcdFx0cmV0dXJuICFfdHlwZS5BcnJheSh2KSAmJiAodiAtIHBhcnNlRmxvYXQodikgKyAxKSA+PSAwO1xyXG5cdFx0fTtcclxuXHRcdF90eXBlLkRvbUVsZW1lbnQgPSBmdW5jdGlvbiAobykge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIiA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBvIGluc3RhbmNlb2YgU1ZHRWxlbWVudCA6IC8vRE9NMlxyXG5cdFx0XHRcdG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBET00gRWxlbWVudCBpbmZvXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cdFx0Ly8gYWx3YXlzIHJldHVybnMgYSBsaXN0IG9mIG1hdGNoaW5nIERPTSBlbGVtZW50cywgZnJvbSBhIHNlbGVjdG9yLCBhIERPTSBlbGVtZW50IG9yIGFuIGxpc3Qgb2YgZWxlbWVudHMgb3IgZXZlbiBhbiBhcnJheSBvZiBzZWxlY3RvcnNcclxuXHRcdHZhciBfZ2V0ID0gVS5nZXQgPSB7fTtcclxuXHRcdF9nZXQuZWxlbWVudHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHRcdFx0dmFyIGFyciA9IFtdO1xyXG5cdFx0XHRpZiAoX3R5cGUuU3RyaW5nKHNlbGVjdG9yKSkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLy8gaW52YWxpZCBzZWxlY3RvclxyXG5cdFx0XHRcdFx0cmV0dXJuIGFycjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF90eXBlKHNlbGVjdG9yKSA9PT0gJ25vZGVsaXN0JyB8fCBfdHlwZS5BcnJheShzZWxlY3RvcikgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCByZWYgPSBhcnIubGVuZ3RoID0gc2VsZWN0b3IubGVuZ3RoOyBpIDwgcmVmOyBpKyspIHsgLy8gbGlzdCBvZiBlbGVtZW50c1xyXG5cdFx0XHRcdFx0dmFyIGVsZW0gPSBzZWxlY3RvcltpXTtcclxuXHRcdFx0XHRcdGFycltpXSA9IF90eXBlLkRvbUVsZW1lbnQoZWxlbSkgPyBlbGVtIDogX2dldC5lbGVtZW50cyhlbGVtKTsgLy8gaWYgbm90IGFuIGVsZW1lbnQsIHRyeSB0byByZXNvbHZlIHJlY3Vyc2l2ZWx5XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKF90eXBlLkRvbUVsZW1lbnQoc2VsZWN0b3IpIHx8IHNlbGVjdG9yID09PSBkb2N1bWVudCB8fCBzZWxlY3RvciA9PT0gd2luZG93KSB7XHJcblx0XHRcdFx0YXJyID0gW3NlbGVjdG9yXTsgLy8gb25seSB0aGUgZWxlbWVudFxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBhcnI7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IHNjcm9sbCB0b3AgdmFsdWVcclxuXHRcdF9nZXQuc2Nyb2xsVG9wID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuXHRcdFx0cmV0dXJuIChlbGVtICYmIHR5cGVvZiBlbGVtLnNjcm9sbFRvcCA9PT0gJ251bWJlcicpID8gZWxlbS5zY3JvbGxUb3AgOiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgMDtcclxuXHRcdH07XHJcblx0XHQvLyBnZXQgc2Nyb2xsIGxlZnQgdmFsdWVcclxuXHRcdF9nZXQuc2Nyb2xsTGVmdCA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcblx0XHRcdHJldHVybiAoZWxlbSAmJiB0eXBlb2YgZWxlbS5zY3JvbGxMZWZ0ID09PSAnbnVtYmVyJykgPyBlbGVtLnNjcm9sbExlZnQgOiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgMDtcclxuXHRcdH07XHJcblx0XHQvLyBnZXQgZWxlbWVudCBoZWlnaHRcclxuXHRcdF9nZXQud2lkdGggPSBmdW5jdGlvbiAoZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0cmV0dXJuIF9kaW1lbnNpb24oJ3dpZHRoJywgZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBlbGVtZW50IHdpZHRoXHJcblx0XHRfZ2V0LmhlaWdodCA9IGZ1bmN0aW9uIChlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbikge1xyXG5cdFx0XHRyZXR1cm4gX2RpbWVuc2lvbignaGVpZ2h0JywgZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBnZXQgZWxlbWVudCBwb3NpdGlvbiAob3B0aW9uYWxseSByZWxhdGl2ZSB0byB2aWV3cG9ydClcclxuXHRcdF9nZXQub2Zmc2V0ID0gZnVuY3Rpb24gKGVsZW0sIHJlbGF0aXZlVG9WaWV3cG9ydCkge1xyXG5cdFx0XHR2YXIgb2Zmc2V0ID0ge1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwXHJcblx0XHRcdH07XHJcblx0XHRcdGlmIChlbGVtICYmIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7IC8vIGNoZWNrIGlmIGF2YWlsYWJsZVxyXG5cdFx0XHRcdHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRvZmZzZXQudG9wID0gcmVjdC50b3A7XHJcblx0XHRcdFx0b2Zmc2V0LmxlZnQgPSByZWN0LmxlZnQ7XHJcblx0XHRcdFx0aWYgKCFyZWxhdGl2ZVRvVmlld3BvcnQpIHsgLy8gY2xpZW50UmVjdCBpcyBieSBkZWZhdWx0IHJlbGF0aXZlIHRvIHZpZXdwb3J0Li4uXHJcblx0XHRcdFx0XHRvZmZzZXQudG9wICs9IF9nZXQuc2Nyb2xsVG9wKCk7XHJcblx0XHRcdFx0XHRvZmZzZXQubGVmdCArPSBfZ2V0LnNjcm9sbExlZnQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG9mZnNldDtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIERPTSBFbGVtZW50IG1hbmlwdWxhdGlvblxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHRVLmFkZENsYXNzID0gZnVuY3Rpb24gKGVsZW0sIGNsYXNzbmFtZSkge1xyXG5cdFx0XHRpZiAoY2xhc3NuYW1lKSB7XHJcblx0XHRcdFx0aWYgKGVsZW0uY2xhc3NMaXN0KVxyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NuYW1lO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0VS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjbGFzc25hbWUpIHtcclxuXHRcdFx0aWYgKGNsYXNzbmFtZSkge1xyXG5cdFx0XHRcdGlmIChlbGVtLmNsYXNzTGlzdClcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc25hbWUpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NuYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Ly8gaWYgb3B0aW9ucyBpcyBzdHJpbmcgLT4gcmV0dXJucyBjc3MgdmFsdWVcclxuXHRcdC8vIGlmIG9wdGlvbnMgaXMgYXJyYXkgLT4gcmV0dXJucyBvYmplY3Qgd2l0aCBjc3MgdmFsdWUgcGFpcnNcclxuXHRcdC8vIGlmIG9wdGlvbnMgaXMgb2JqZWN0IC0+IHNldCBuZXcgY3NzIHZhbHVlc1xyXG5cdFx0VS5jc3MgPSBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucykge1xyXG5cdFx0XHRpZiAoX3R5cGUuU3RyaW5nKG9wdGlvbnMpKSB7XHJcblx0XHRcdFx0cmV0dXJuIF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pW19jYW1lbENhc2Uob3B0aW9ucyldO1xyXG5cdFx0XHR9IGVsc2UgaWYgKF90eXBlLkFycmF5KG9wdGlvbnMpKSB7XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRvYmogPSB7fSxcclxuXHRcdFx0XHRcdHN0eWxlID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbSk7XHJcblx0XHRcdFx0b3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24sIGtleSkge1xyXG5cdFx0XHRcdFx0b2JqW29wdGlvbl0gPSBzdHlsZVtfY2FtZWxDYXNlKG9wdGlvbildO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiBvYmo7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdHZhciB2YWwgPSBvcHRpb25zW29wdGlvbl07XHJcblx0XHRcdFx0XHRpZiAodmFsID09IHBhcnNlRmxvYXQodmFsKSkgeyAvLyBhc3N1bWUgcGl4ZWwgZm9yIHNlZW1pbmdseSBudW1lcmljYWwgdmFsdWVzXHJcblx0XHRcdFx0XHRcdHZhbCArPSAncHgnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxlbS5zdHlsZVtfY2FtZWxDYXNlKG9wdGlvbildID0gdmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gVTtcclxuXHR9KHdpbmRvdyB8fCB7fSkpO1xyXG5cclxuXHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLmFkZEluZGljYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBhZGRJbmRpY2F0b3JzKCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2RlYnVnLmFkZEluZGljYXRvcnNcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2RlYnVnLmFkZEluZGljYXRvcnMuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUucmVtb3ZlSW5kaWNhdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHJlbW92ZUluZGljYXRvcnMoKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnZGVidWcuYWRkSW5kaWNhdG9yc1xcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvZGVidWcuYWRkSW5kaWNhdG9ycy5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5zZXRUd2VlbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHNldFR3ZWVuKCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2FuaW1hdGlvbi5nc2FwXFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9hbmltYXRpb24uZ3NhcC5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVUd2VlbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHJlbW92ZVR3ZWVuKCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2FuaW1hdGlvbi5nc2FwXFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9hbmltYXRpb24uZ3NhcC5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5zZXRWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHNldFZlbG9jaXR5KCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2FuaW1hdGlvbi52ZWxvY2l0eVxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLnZlbG9jaXR5LmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnJlbW92ZVZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgcmVtb3ZlVmVsb2NpdHkoKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnYW5pbWF0aW9uLnZlbG9jaXR5XFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9hbmltYXRpb24udmVsb2NpdHkuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFNjcm9sbE1hZ2ljO1xyXG59KSk7IiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2FjY29yZGlvbi1qcyc7XG5cbnZhciB0YXJnZXRlZENsYXNzICAgID0gJy5hY2NvcmRpb24tY29udGFpbmVyJztcbnZhciBhY2NvcmRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRlZENsYXNzKTtcblxuaWYgKGFjY29yZGlvbkVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgIG5ldyBBY2NvcmRpb24odGFyZ2V0ZWRDbGFzcyk7XG59XG4iLCJpbXBvcnQgZW5xdWlyZSBmcm9tICdlbnF1aXJlLWpzJztcblxuaWYgKCFPYmplY3QuZW50cmllcykge1xuICAgIE9iamVjdC5lbnRyaWVzID0gZnVuY3Rpb24oIG9iaiApe1xuICAgICAgICB2YXIgb3duUHJvcHMgPSBPYmplY3Qua2V5cyggb2JqICksXG4gICAgICAgICAgICBpID0gb3duUHJvcHMubGVuZ3RoLFxuICAgICAgICAgICAgcmVzQXJyYXkgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcbiAgICAgIFxuICAgICAgICByZXR1cm4gcmVzQXJyYXk7XG4gICAgfTtcbn1cblxubGV0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5cbmNvbnN0IG1lZGlhUXVlcmllcyA9IHtcbiAgICBzbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KScsXG4gICAgbW9iOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjFweCknLFxuICAgIHRhYjogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJyxcbiAgICBsYXA6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknLFxuICAgIGRlczogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KScsXG4gICAgbGc6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCknLFxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpJyxcbiAgICBsYW5kc2NhcGU6ICdzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gICAgcG90cmFpdDogJ3NjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknXG59O1xuXG5PYmplY3QuZW50cmllcyhtZWRpYVF1ZXJpZXMpLmZvckVhY2goKFticmVha3BvaW50LCBtZWRpYXF1ZXJ5XSkgPT4gXG4gICAgZW5xdWlyZS5yZWdpc3RlciggbWVkaWFxdWVyeSwgeyBcbiAgICAgICAgbWF0Y2ggOiBmdW5jdGlvbigpIHsgaHRtbC5jbGFzc0xpc3QuYWRkKCBicmVha3BvaW50ICk7IH0sXG4gICAgICAgIHVubWF0Y2ggOiBmdW5jdGlvbigpIHsgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCBicmVha3BvaW50ICk7IH1cbiAgICB9KVxuKTtcblxuIiwiaW1wb3J0IGxhenlsb2FkIGZyb20gJ2xhenlsb2FkJztcblxubmV3IGxhenlsb2FkKCk7IiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5cbk1pY3JvTW9kYWwuaW5pdCh7XG4gICAgb25TaG93OiBtb2RhbCA9PiBjb25zb2xlLmluZm8oYCR7bW9kYWwuaWR9IGlzIHNob3duYCksIC8vIFsxXVxuICAgIG9uQ2xvc2U6IG1vZGFsID0+IGNvbnNvbGUuaW5mbyhgJHttb2RhbC5pZH0gaXMgaGlkZGVuYCksIC8vIFsyXVxuICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1jdXN0b20tb3BlbicsIC8vIFszXVxuICAgIGNsb3NlVHJpZ2dlcjogJ2RhdGEtY3VzdG9tLWNsb3NlJywgLy8gWzRdXG4gICAgb3BlbkNsYXNzOiAnaXMtb3BlbicsIC8vIFs1XVxuICAgIGRpc2FibGVTY3JvbGw6IHRydWUsIC8vIFs2XVxuICAgIGRpc2FibGVGb2N1czogZmFsc2UsIC8vIFs3XVxuICAgIGF3YWl0T3BlbkFuaW1hdGlvbjogZmFsc2UsIC8vIFs4XVxuICAgIGF3YWl0Q2xvc2VBbmltYXRpb246IGZhbHNlLCAvLyBbOV1cbiAgICBkZWJ1Z01vZGU6IHRydWUgLy8gWzEwXVxufSk7IiwiY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IG1vYmltZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNpdmUtbWVudScpO1xuY29uc3Qgc2l0ZWJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmxldCBtYWlubWVudSAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2l2ZS1tZW51Jyk7XG5sZXQgY2xhc3NOYW1lICAgID0gJ21vYmltZW51JztcbmxldCB2ZXJ0aWNhbE1lbnUgPSAndmVydGljYWxfX25hdic7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpO1xuXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXRDaGFuZ2UoZSkge1xuXHQvLyBDaGVjayBpZiB0aGUgbWVkaWEgcXVlcnkgaXMgdHJ1ZVxuXHRpZiAoZS5tYXRjaGVzKSB7XG4gIFxuXHRcdC8vIElmIHRoZSBtZWRpYXF1ZXJ5IGlzIGxhcmdlciB0aGFuIDEwMjRweFxuXHRcdGlmIChtYWlubWVudS5jbGFzc0xpc3QpIHtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUodmVydGljYWxNZW51KTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5hZGQoJ21haW5tZW51Jyk7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsX19uYXYnKTtcblx0XHR9XG4gIFxuXHR9ZWxzZXtcblx0XHRcblx0XHQvLyBJZiB0aGUgbWVkaWFxdWVyeSBpcyBzbWFsbGVyIHRoYW4gMTAyNHB4XG5cdFx0aWYgKG1haW5tZW51LmNsYXNzTGlzdCkge1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbm1lbnUnKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWxfX25hdicpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZCh2ZXJ0aWNhbE1lbnUpO1xuXHRcdH1lbHNle1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZSArICcgJyArIHZlcnRpY2FsTWVudTtcblx0XHR9XG5cdCAgXG5cdH1cbiAgXG59XG5cbi8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyXG5tZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKGhhbmRsZVRhYmxldENoYW5nZSk7XG5cbi8vIEluaXRpYWwgY2hlY2tcbmhhbmRsZVRhYmxldENoYW5nZShtZWRpYVF1ZXJ5KTtcblxubWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcblx0bW9iaW1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG5cdG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZScpO1xuXHRzaXRlYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbWVudS1pcy1vcGVuJyk7XG59KTtcblxuLy8gQ3JlYXRlIHN1YiBtZW51c1xuZnVuY3Rpb24gY2xpY2tlZE1lbnUoKXtcbiAgICBpZih0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbWVudSAuc3ViLW1lbnUnKSl7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdzdWItbWVudS1hY3RpdmUnKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJykuZm9yRWFjaChmdW5jdGlvbihlbCl7XG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tlZE1lbnUpO1xufSk7IiwiaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gJ3Njcm9sbG1hZ2ljJztcclxuXHJcbi8vIFNjcm9sbE1hZ2ljIERvY3VtZW50YXRpb25cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2phbnBhZXBrZS9TY3JvbGxNYWdpYy93aWtpL0dldHRpbmctU3RhcnRlZC06LUhvdy10by11c2UtU2Nyb2xsTWFnaWNcclxuXHJcbi8vIGluaXQgY29udHJvbGxlclxyXG52YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcbiBcclxuLy8gY3JlYXRlIGEgc2NlbmVcclxubmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuICAgIGR1cmF0aW9uOiAxMDAsIC8vIHRoZSBzY2VuZSBzaG91bGQgbGFzdCBmb3IgYSBzY3JvbGwgZGlzdGFuY2Ugb2YgMTAwcHhcclxuICAgIG9mZnNldDogNTAgLy8gc3RhcnQgdGhpcyBzY2VuZSBhZnRlciBzY3JvbGxpbmcgZm9yIDUwcHhcclxufSlcclxuICAgIC5zZXRQaW4oJyNwb3N0LTEnKSAvLyBwaW5zIHRoZSBlbGVtZW50IGZvciB0aGUgdGhlIHNjZW5lJ3MgZHVyYXRpb25cclxuICAgIC5hZGRUbyhjb250cm9sbGVyKTsgLy8gYXNzaWduIHRoZSBzY2VuZSB0byB0aGUgY29udHJvbGxlciIsImltcG9ydCBTaWVtYSBmcm9tICdzaWVtYSc7XG5cbnZhciBzbGlkZXNob3dTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXNob3cnKTtcbnZhciBwcmV2aW91c1NsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXByZXYnKTtcbnZhciBuZXh0U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtbmV4dCcpO1xudmFyIHNsaWRlc2hvdyA9IFwiXCI7XG5cbmlmIChzbGlkZXNob3dTZWxlY3Rvcikge1xuICAgIHNsaWRlc2hvdyA9IG5ldyBTaWVtYSh7XG4gICAgICAgIHNlbGVjdG9yOiAnLnNsaWRlc2hvdycsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcbiAgICAgICAgcGVyUGFnZTogMSxcbiAgICAgICAgc3RhcnRJbmRleDogMCxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBtdWx0aXBsZURyYWc6IHRydWUsXG4gICAgICAgIHRocmVzaG9sZDogMjAsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgIG9uSW5pdDogKCkgPT4ge30sXG4gICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICB9KTtcbn1cblxuaWYgKHByZXZpb3VzU2xpZGUpIHtcbiAgICBwcmV2aW91c1NsaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2xpZGVzaG93LnByZXYoKSk7XG59XG5cbmlmIChuZXh0U2xpZGUpIHtcbiAgICBuZXh0U2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzbGlkZXNob3cubmV4dCgpKTtcbn1cblxuLy9odHRwczovL2NvZGVwZW4uaW8vY29sbGVjdGlvbi9BZHBra2QvP2N1cnNvcj1aRDB4Sm04OU1DWndQVEVtZGoweE1ESXlORFUwIiwiaW1wb3J0ICcuL2Z1bmN0aW9uLmJvZHljbGFzc2VzLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbi5zbGlkZXNob3cuanMnOyBcbmltcG9ydCAnLi9mdW5jdGlvbi5vZmZjYW52YXMuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uLmxhenlsb2FkLmpzJzsgXG5pbXBvcnQgJy4vZnVuY3Rpb24ubW9kYWwuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb24uc2Nyb2xsbWFnaWMuanMnOyJdLCJzb3VyY2VSb290IjoiIn0=