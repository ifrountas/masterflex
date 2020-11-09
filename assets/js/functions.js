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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUtanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5bG9hZC9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWljcm9tb2RhbC9kaXN0L21pY3JvbW9kYWwuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpZW1hL2Rpc3Qvc2llbWEubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmJvZHljbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ubGF6eWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLnNsaWRlc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJpIiwidSIsIm8iLCJsIiwiYyIsInQiLCJpbml0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWFwIiwiZSIsIm9wdGlvbnMiLCJoIiwiZHVyYXRpb24iLCJpdGVtTnVtYmVyIiwiYXJpYSIsImNsb3NlT3RoZXJzIiwic2hvd0l0ZW0iLCJlbGVtZW50Q2xhc3MiLCJxdWVzdGlvbkNsYXNzIiwiYW5zd2VyQ2xhc3MiLCJ0YXJnZXRDbGFzcyIsIm9uVG9nZ2xlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibiIsInNldEF0dHJpYnV0ZSIsInMiLCJyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZUVsZW1lbnQiLCJzZXRUcmFuc2l0aW9uIiwiZ2VuZXJhdGVJRCIsInNldEFSSUEiLCJhIiwidG9nZ2xlRWxlbWVudCIsImF0dGFjaEV2ZW50cyIsInN0eWxlIiwiY29uY2F0IiwidXBkYXRlQVJJQSIsImNhbGxTcGVjaWZpY0VsZW1lbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImNsYXNzTmFtZSIsIm1hdGNoIiwicHJldmVudERlZmF1bHQiLCJjbG9zZUFsbEVsZW1lbnRzIiwiaGVpZ2h0IiwiYXJndW1lbnRzIiwic2Nyb2xsSGVpZ2h0IiwidG9nZ2xlIiwicGFyc2VJbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJyZXNpemVIYW5kbGVyIiwib2Zmc2V0SGVpZ2h0IiwiY2xpY2tIYW5kbGVyIiwia2V5ZG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQWNjb3JkaW9uIiwid2luZG93IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVucXVpcmVTY3JlZW4iLCJ1bmVucXVpcmVTY3JlZW4iLCJlbnF1aXJlSnMiLCJtYXRjaE1lZGlhUG9seWZpbGwiLCJtZWRpYVF1ZXJ5IiwibWVkaWEiLCJtYXRjaGVzIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJyZXF1aXJlIiwibW9iaWxlUXVlcnkiLCJjYiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwiaGFuZGxlciIsInVubWF0Y2giLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJRdWVyeUhhbmRsZXIiLCJlYWNoIiwiTWVkaWFRdWVyeSIsImlzVW5jb25kaXRpb25hbCIsImhhbmRsZXJzIiwibXFsIiwic2VsZiIsImxpc3RlbmVyIiwiY3VycmVudFRhcmdldCIsImFzc2VzcyIsInByb3RvdHlwZSIsImNvbnN0dWN0b3IiLCJhZGRIYW5kbGVyIiwicWgiLCJwdXNoIiwib24iLCJyZW1vdmVIYW5kbGVyIiwiZXF1YWxzIiwiZGVzdHJveSIsInNwbGljZSIsImNsZWFyIiwiYWN0aW9uIiwiVXRpbCIsImlzRnVuY3Rpb24iLCJNZWRpYVF1ZXJ5RGlzcGF0Y2giLCJFcnJvciIsInF1ZXJpZXMiLCJicm93c2VySXNJbmNhcGFibGUiLCJjb25zdHJ1Y3RvciIsInEiLCJzaG91bGREZWdyYWRlIiwiZGVmZXJTZXR1cCIsInNldHVwIiwiaW5pdGlhbGlzZWQiLCJvZmYiLCJjb2xsZWN0aW9uIiwiZm4iLCJjb250IiwidG9TdHJpbmciLCJhcHBseSIsInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwiZ2xvYmFsIiwiZGVmYXVsdHMiLCJzcmMiLCJzcmNzZXQiLCJzZWxlY3RvciIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJleHRlbmQiLCJleHRlbmRlZCIsImRlZXAiLCJjYWxsIiwibWVyZ2UiLCJvYmoiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJMYXp5TG9hZCIsImltYWdlcyIsInNldHRpbmdzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImxvYWRJbWFnZXMiLCJvYnNlcnZlckNvbmZpZyIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwib2JzZXJ2ZSIsImxvYWRBbmREZXN0cm95IiwiZGlzY29ubmVjdCIsImxhenlsb2FkIiwialF1ZXJ5IiwiJCIsImF0dHJpYnV0ZSIsIm1ha2VBcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJtaW5MZW4iLCJuYW1lIiwidGVzdCIsImxlbiIsImFycjIiLCJNaWNyb01vZGFsIiwiRk9DVVNBQkxFX0VMRU1FTlRTIiwiTW9kYWwiLCJfcmVmIiwidGFyZ2V0TW9kYWwiLCJfcmVmJHRyaWdnZXJzIiwidHJpZ2dlcnMiLCJfcmVmJG9uU2hvdyIsIm9uU2hvdyIsIl9yZWYkb25DbG9zZSIsIm9uQ2xvc2UiLCJfcmVmJG9wZW5UcmlnZ2VyIiwib3BlblRyaWdnZXIiLCJfcmVmJGNsb3NlVHJpZ2dlciIsImNsb3NlVHJpZ2dlciIsIl9yZWYkb3BlbkNsYXNzIiwib3BlbkNsYXNzIiwiX3JlZiRkaXNhYmxlU2Nyb2xsIiwiZGlzYWJsZVNjcm9sbCIsIl9yZWYkZGlzYWJsZUZvY3VzIiwiZGlzYWJsZUZvY3VzIiwiX3JlZiRhd2FpdENsb3NlQW5pbWF0IiwiYXdhaXRDbG9zZUFuaW1hdGlvbiIsIl9yZWYkYXdhaXRPcGVuQW5pbWF0aSIsImF3YWl0T3BlbkFuaW1hdGlvbiIsIl9yZWYkZGVidWdNb2RlIiwiZGVidWdNb2RlIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsInJlZ2lzdGVyVHJpZ2dlcnMiLCJvbkNsaWNrIiwib25LZXlkb3duIiwiX3RoaXMiLCJfbGVuIiwiX2tleSIsImZpbHRlciIsIkJvb2xlYW4iLCJ0cmlnZ2VyIiwiZXZlbnQiLCJzaG93TW9kYWwiLCJfdGhpczIiLCJhY3RpdmVFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3VyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzZXRGb2N1c1RvRmlyc3ROb2RlIiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZm9jdXMiLCJjbG9zZU1vZGFsQnlJZCIsImJvZHkiLCJhc3NpZ24iLCJvdmVyZmxvdyIsImhhc0F0dHJpYnV0ZSIsInJldGFpbkZvY3VzIiwiZ2V0Rm9jdXNhYmxlTm9kZXMiLCJub2RlcyIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJmb2N1c2VkSXRlbUluZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwiYWN0aXZlTW9kYWwiLCJnZW5lcmF0ZVRyaWdnZXJNYXAiLCJ0cmlnZ2VyQXR0ciIsInRyaWdnZXJNYXAiLCJhdHRyaWJ1dGVzIiwidmFsaWRhdGVNb2RhbFByZXNlbmNlIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInZhbGlkYXRlVHJpZ2dlclByZXNlbmNlIiwidmFsaWRhdGVBcmdzIiwic2hvdyIsImNsb3NlIiwibSIsImQiLCJnZXQiLCJfX2VzTW9kdWxlIiwicCIsIm1lcmdlU2V0dGluZ3MiLCJyZXNvbHZlU2xpZGVzTnVtYmVyIiwic2VsZWN0b3JXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW5uZXJFbGVtZW50cyIsImNoaWxkcmVuIiwiY3VycmVudFNsaWRlIiwibG9vcCIsInN0YXJ0SW5kZXgiLCJNYXRoIiwibWF4IiwibWluIiwicGVyUGFnZSIsInRyYW5zZm9ybVByb3BlcnR5Iiwid2Via2l0T3JOb3QiLCJkcmFnZ2FibGUiLCJwb2ludGVyRG93biIsImRyYWciLCJzdGFydFgiLCJlbmRYIiwic3RhcnRZIiwibGV0SXRHbyIsInByZXZlbnRDbGljayIsInRvdWNoc3RhcnRIYW5kbGVyIiwidG91Y2hlbmRIYW5kbGVyIiwidG91Y2htb3ZlSGFuZGxlciIsIm1vdXNlZG93bkhhbmRsZXIiLCJtb3VzZXVwSGFuZGxlciIsIm1vdXNlbGVhdmVIYW5kbGVyIiwibW91c2Vtb3ZlSGFuZGxlciIsImRpcmVjdGlvbiIsInJ0bCIsImJ1aWxkU2xpZGVyRnJhbWUiLCJvbkluaXQiLCJzbGlkZXJGcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImVuYWJsZVRyYW5zaXRpb24iLCJjdXJzb3IiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYnVpbGRTbGlkZXJGcmFtZUl0ZW0iLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInNsaWRlVG9DdXJyZW50IiwiY3NzRmxvYXQiLCJpbm5lcldpZHRoIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJvbkNoYW5nZSIsIndlYmtpdFRyYW5zaXRpb24iLCJlYXNpbmciLCJ0cmFuc2l0aW9uIiwiYWJzIiwibXVsdGlwbGVEcmFnIiwiY2VpbCIsInByZXYiLCJuZXh0Iiwibm9kZU5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInVwZGF0ZUFmdGVyRHJhZyIsImNsZWFyRHJhZyIsImluc2VydCIsInJlbW92ZUF0dHJpYnV0ZSIsInRyYW5zZm9ybSIsImciLCJGdW5jdGlvbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwidGFyZ2V0ZWRDbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJvd25Qcm9wcyIsImtleXMiLCJyZXNBcnJheSIsImh0bWwiLCJtZWRpYVF1ZXJpZXMiLCJzbSIsIm1vYiIsInRhYiIsImxhcCIsImRlcyIsImxnIiwieGwiLCJsYW5kc2NhcGUiLCJwb3RyYWl0IiwiYnJlYWtwb2ludCIsIm1lZGlhcXVlcnkiLCJlbnF1aXJlIiwiaW5mbyIsIm1lbnVJY29uIiwibW9iaW1lbnUiLCJzaXRlYm9keSIsIm1haW5tZW51IiwidmVydGljYWxNZW51IiwiaGFuZGxlVGFibGV0Q2hhbmdlIiwiY2xpY2tlZE1lbnUiLCJlbCIsInNsaWRlc2hvd1NlbGVjdG9yIiwicHJldmlvdXNTbGlkZSIsIm5leHRTbGlkZSIsInNsaWRlc2hvdyIsIlNpZW1hIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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QUFJb1gsU0FBUyxHQUFHclgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWhCO0FBQ0EsSUFBSXFYLFNBQVMsR0FBRyxFQUFoQjs7QUFFQSxJQUFJSCxpQkFBSixFQUF1QjtBQUNuQkcsV0FBUyxHQUFHLElBQUlDLDRDQUFKLENBQVU7QUFDbEI3UCxZQUFRLEVBQUUsWUFEUTtBQUVsQnJJLFlBQVEsRUFBRSxHQUZRO0FBR2xCNFUsVUFBTSxFQUFFLFVBSFU7QUFJbEJ0QyxXQUFPLEVBQUUsQ0FKUztBQUtsQkosY0FBVSxFQUFFLENBTE07QUFNbEJPLGFBQVMsRUFBRSxJQU5PO0FBT2xCc0MsZ0JBQVksRUFBRSxJQVBJO0FBUWxCeE0sYUFBUyxFQUFFLEVBUk87QUFTbEIwSixRQUFJLEVBQUUsSUFUWTtBQVVsQndCLE9BQUcsRUFBRSxLQVZhO0FBV2xCRSxVQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQVhFO0FBWWxCZSxZQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQVpBLEdBQVYsQ0FBWjtBQWNIOztBQUVELElBQUlxRCxhQUFKLEVBQW1CO0FBQ2ZBLGVBQWEsQ0FBQzVVLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsV0FBTThVLFNBQVMsQ0FBQ2hELElBQVYsRUFBTjtBQUFBLEdBQXhDO0FBQ0g7O0FBRUQsSUFBSStDLFNBQUosRUFBZTtBQUNYQSxXQUFTLENBQUM3VSxnQkFBVixDQUEyQixPQUEzQixFQUFvQztBQUFBLFdBQU04VSxTQUFTLENBQUMvQyxJQUFWLEVBQU47QUFBQSxHQUFwQztBQUNILEMsQ0FFRCwyRTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIVxyXG4gKiBBY2NvcmRpb24gdjIuOC4wXHJcbiAqIFNpbXBsZSBhY2NvcmRpb24gY3JlYXRlZCBpbiBwdXJlIEphdmFzY3JpcHQuXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNodTJrL0FjY29yZGlvblxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNy0yMDE5IE1pY2hhxYIgU3RydW1wZlxyXG4gKiBQdWJsaXNoZWQgdW5kZXIgTUlUIExpY2Vuc2VcclxuICovXHJcblwidXNlIHN0cmljdFwiOyFmdW5jdGlvbihpKXtmdW5jdGlvbiB1KG8sbCl7dmFyIGM9dGhpcyx0PXtpbml0OmZ1bmN0aW9uKCl7aWYoQXJyYXkuaXNBcnJheShvKSlyZXR1cm4gby5sZW5ndGgmJm8ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgdShlLGwpfSksITE7dGhpcy5vcHRpb25zPWgoe2R1cmF0aW9uOjYwMCxpdGVtTnVtYmVyOjAsYXJpYTohMCxjbG9zZU90aGVyczohMCxzaG93SXRlbTohMSxlbGVtZW50Q2xhc3M6XCJhY1wiLHF1ZXN0aW9uQ2xhc3M6XCJhYy1xXCIsYW5zd2VyQ2xhc3M6XCJhYy1hXCIsdGFyZ2V0Q2xhc3M6XCJhYy10YXJnZXRcIixvblRvZ2dsZTpmdW5jdGlvbigpe319LGwpLHRoaXMuY29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobyksdGhpcy5lbGVtZW50cz10aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMub3B0aW9ucy5lbGVtZW50Q2xhc3MpO3ZhciBlPXRoaXMub3B0aW9ucyx0PWUuYXJpYSxuPWUuc2hvd0l0ZW0saT1lLml0ZW1OdW1iZXI7dCYmdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFibGlzdFwiKTtmb3IodmFyIHM9MDtzPHRoaXMuZWxlbWVudHMubGVuZ3RoO3MrKyl7dmFyIHI9dGhpcy5lbGVtZW50c1tzXTtyLmNsYXNzTGlzdC5hZGQoXCJqcy1lbmFibGVkXCIpLHRoaXMuaGlkZUVsZW1lbnQociksdGhpcy5zZXRUcmFuc2l0aW9uKHIpLHRoaXMuZ2VuZXJhdGVJRChyKSx0JiZ0aGlzLnNldEFSSUEocil9aWYobil7dmFyIGE9dGhpcy5lbGVtZW50c1swXTtcIm51bWJlclwiPT10eXBlb2YgaSYmaTx0aGlzLmVsZW1lbnRzLmxlbmd0aCYmKGE9dGhpcy5lbGVtZW50c1tpXSksdGhpcy50b2dnbGVFbGVtZW50KGEsITEpfWMuYXR0YWNoRXZlbnRzKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLG49dC5kdXJhdGlvbixpPXQuYW5zd2VyQ2xhc3Mscz1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIraSkscj1hKFwidHJhbnNpdGlvblwiKTtzLnN0eWxlW3JdPW4rXCJtc1wifSxnZW5lcmF0ZUlEOmZ1bmN0aW9uKGUpe2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcImFjLVwiLmNvbmNhdChzKSkscysrfSxzZXRBUklBOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucyxuPXQucXVlc3Rpb25DbGFzcyxpPXQuYW5zd2VyQ2xhc3Mscz1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrbikscj1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIraSk7cy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJcIikscy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsXCJmYWxzZVwiKSxyLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYnBhbmVsXCIpfSx1cGRhdGVBUklBOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5vcHRpb25zLnF1ZXN0aW9uQ2xhc3M7ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK24pLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIix0KX0sY2FsbFNwZWNpZmljRWxlbWVudDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS50YXJnZXQsbj10aGlzLm9wdGlvbnMsaT1uLnF1ZXN0aW9uQ2xhc3Mscz1uLnRhcmdldENsYXNzLHI9bi5jbG9zZU90aGVycyxhPTA7YTx0aGlzLmVsZW1lbnRzLmxlbmd0aDthKyspaWYodGhpcy5lbGVtZW50c1thXS5jb250YWlucyh0KSl7KHQuY2xhc3NOYW1lLm1hdGNoKGkpfHx0LmNsYXNzTmFtZS5tYXRjaChzKSkmJihlLnByZXZlbnREZWZhdWx0KCksciYmdGhpcy5jbG9zZUFsbEVsZW1lbnRzKGEpLHRoaXMudG9nZ2xlRWxlbWVudCh0aGlzLmVsZW1lbnRzW2FdKSk7YnJlYWt9fSxoaWRlRWxlbWVudDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMuYW5zd2VyQ2xhc3M7ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK3QpLnN0eWxlLmhlaWdodD0wfSx0b2dnbGVFbGVtZW50OmZ1bmN0aW9uKGUsdCl7dmFyIG4saT0hKDE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09dCl8fHQscz10aGlzLm9wdGlvbnMscj1zLmFuc3dlckNsYXNzLGE9cy5hcmlhLG89cy5vblRvZ2dsZSxsPWUucXVlcnlTZWxlY3RvcihcIi5cIityKSxjPWwuc2Nyb2xsSGVpZ2h0O2UuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKSxpfHwobC5zdHlsZS5oZWlnaHQ9XCJhdXRvXCIpLDA8cGFyc2VJbnQobC5zdHlsZS5oZWlnaHQpPyhuPSExLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2wuc3R5bGUuaGVpZ2h0PTB9KSk6KG49ITAscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7bC5zdHlsZS5oZWlnaHQ9YytcInB4XCJ9KSksYSYmdGhpcy51cGRhdGVBUklBKGUsbiksaSYmbyhlLHRoaXMuZWxlbWVudHMpfSxjbG9zZUFsbEVsZW1lbnRzOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD10aGlzLm9wdGlvbnMuYXJpYSxuPXRoaXMuZWxlbWVudHMubGVuZ3RoLGk9MDtpPG47aSsrKWlmKGkhPWUpe3ZhciBzPXRoaXMuZWxlbWVudHNbaV07cy5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1hY3RpdmVcIikmJnMuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKSx0JiZ0aGlzLnVwZGF0ZUFSSUEocywhMSksdGhpcy5oaWRlRWxlbWVudChzKX19LHJlc2l6ZUhhbmRsZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdCxuPXRoaXMub3B0aW9ucyxpPW4uZWxlbWVudENsYXNzLHM9bi5hbnN3ZXJDbGFzcyxyPXRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIraStcIi5pcy1hY3RpdmVcIiksYT0wO2E8ci5sZW5ndGg7YSsrKXQ9clthXS5xdWVyeVNlbGVjdG9yKFwiLlwiK3MpLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3Quc3R5bGUuaGVpZ2h0PVwiYXV0b1wiLGU9dC5vZmZzZXRIZWlnaHQscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5zdHlsZS5oZWlnaHQ9ZStcInB4XCJ9KX0pfSxjbGlja0hhbmRsZXI6ZnVuY3Rpb24oZSl7dGhpcy5jYWxsU3BlY2lmaWNFbGVtZW50KGUpfSxrZXlkb3duSGFuZGxlcjpmdW5jdGlvbihlKXsxMz09PWUua2V5Q29kZSYmdGhpcy5jYWxsU3BlY2lmaWNFbGVtZW50KGUpfX07dGhpcy5hdHRhY2hFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10O2UuY2xpY2tIYW5kbGVyPWUuY2xpY2tIYW5kbGVyLmJpbmQoZSksZS5rZXlkb3duSGFuZGxlcj1lLmtleWRvd25IYW5kbGVyLmJpbmQoZSksZS5yZXNpemVIYW5kbGVyPWUucmVzaXplSGFuZGxlci5iaW5kKGUpLGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUuY2xpY2tIYW5kbGVyKSxlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUua2V5ZG93bkhhbmRsZXIpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGUucmVzaXplSGFuZGxlcil9LHRoaXMuZGV0YWNoRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dDtlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlLmNsaWNrSGFuZGxlciksZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixlLmtleWRvd25IYW5kbGVyKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixlLnJlc2l6ZUhhbmRsZXIpfTt2YXIgYT1mdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlW2VdP2U6KGU9bihlKSxlPVwid2Via2l0XCIuY29uY2F0KGUpKX0sbj1mdW5jdGlvbihlKXtyZXR1cm4gZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpfSxoPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIHQpZVtuXT10W25dO3JldHVybiBlfTtpLnJlcXVlc3RBbmltYXRpb25GcmFtZT1pLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8aS53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe2kuc2V0VGltZW91dChlLDFlMy82MCl9LHQuaW5pdCgpfXZhciBzPTA7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmdm9pZCAwIT09bW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dTppLkFjY29yZGlvbj11fSh3aW5kb3cpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZW5xdWlyZVNjcmVlbiA9IGVucXVpcmVTY3JlZW47XG5leHBvcnRzLnVuZW5xdWlyZVNjcmVlbiA9IHVuZW5xdWlyZVNjcmVlbjtcbnZhciBlbnF1aXJlSnMgPSB2b2lkIDA7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIG1hdGNoTWVkaWFQb2x5ZmlsbCA9IGZ1bmN0aW9uIG1hdGNoTWVkaWFQb2x5ZmlsbChtZWRpYVF1ZXJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lZGlhOiBtZWRpYVF1ZXJ5LFxuICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkTGlzdGVuZXIoKSB7fSxcbiAgICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcigpIHt9XG4gICAgfTtcbiAgfTtcbiAgd2luZG93Lm1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSB8fCBtYXRjaE1lZGlhUG9seWZpbGw7XG4gIGVucXVpcmVKcyA9IHJlcXVpcmUoJ2VucXVpcmUuanMnKTtcbn1cblxudmFyIG1vYmlsZVF1ZXJ5ID0gJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOTlweCknO1xuXG5mdW5jdGlvbiBlbnF1aXJlU2NyZWVuKGNiKSB7XG4gIHZhciBxdWVyeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbW9iaWxlUXVlcnk7XG5cbiAgaWYgKCFlbnF1aXJlSnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IHtcbiAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2goKSB7XG4gICAgICBjYiAmJiBjYih0cnVlKTtcbiAgICB9LFxuICAgIHVubWF0Y2g6IGZ1bmN0aW9uIHVubWF0Y2goKSB7XG4gICAgICBjYiAmJiBjYigpO1xuICAgIH1cbiAgfTtcbiAgZW5xdWlyZUpzLnJlZ2lzdGVyKHF1ZXJ5LCBoYW5kbGVyKTtcbiAgcmV0dXJuIGhhbmRsZXI7XG59XG5cbmZ1bmN0aW9uIHVuZW5xdWlyZVNjcmVlbihoYW5kbGVyKSB7XG4gIHZhciBxdWVyeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbW9iaWxlUXVlcnk7XG5cbiAgaWYgKCFlbnF1aXJlSnMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZW5xdWlyZUpzLnVucmVnaXN0ZXIocXVlcnksIGhhbmRsZXIpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBlbnF1aXJlSnM7XG4iLCJ2YXIgUXVlcnlIYW5kbGVyID0gcmVxdWlyZSgnLi9RdWVyeUhhbmRsZXInKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9VdGlsJykuZWFjaDtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIG1lZGlhIHF1ZXJ5LCBtYW5hZ2VzIGl0J3Mgc3RhdGUgYW5kIHJlZ2lzdGVyZWQgaGFuZGxlcnMgZm9yIHRoaXMgcXVlcnlcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgbWVkaWEgcXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1VuY29uZGl0aW9uYWw9ZmFsc2VdIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBydW4gcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBjb25kaXRpb25zIGFyZSBtZXQuIFByaW1hcmlseSBmb3IgaGVscGluZyBvbGRlciBicm93c2VycyBkZWFsIHdpdGggbW9iaWxlLWZpcnN0IGRlc2lnblxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5KHF1ZXJ5LCBpc1VuY29uZGl0aW9uYWwpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5pc1VuY29uZGl0aW9uYWwgPSBpc1VuY29uZGl0aW9uYWw7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbihtcWwpIHtcbiAgICAgICAgLy8gQ2hyb21lIHBhc3NlcyBhbiBNZWRpYVF1ZXJ5TGlzdEV2ZW50IG9iamVjdCwgd2hpbGUgb3RoZXIgYnJvd3NlcnMgcGFzcyBNZWRpYVF1ZXJ5TGlzdCBkaXJlY3RseVxuICAgICAgICBzZWxmLm1xbCA9IG1xbC5jdXJyZW50VGFyZ2V0IHx8IG1xbDtcbiAgICAgICAgc2VsZi5hc3Nlc3MoKTtcbiAgICB9O1xuICAgIHRoaXMubXFsLmFkZExpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xufVxuXG5NZWRpYVF1ZXJ5LnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0dWN0b3IgOiBNZWRpYVF1ZXJ5LFxuXG4gICAgLyoqXG4gICAgICogYWRkIGEgaGFuZGxlciBmb3IgdGhpcyBxdWVyeSwgdHJpZ2dlcmluZyBpZiBhbHJlYWR5IGFjdGl2ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLm1hdGNoIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGRlYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIuc2V0dXBdIGNhbGxiYWNrIGZvciBpbW1lZGlhdGUgZXhlY3V0aW9uIHdoZW4gYSBxdWVyeSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtoYW5kbGVyLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIGhhbmRsZXIgaXMgbWF0Y2hlZD9cbiAgICAgKi9cbiAgICBhZGRIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgcWggPSBuZXcgUXVlcnlIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2gocWgpO1xuXG4gICAgICAgIHRoaXMubWF0Y2hlcygpICYmIHFoLm9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJlbW92ZXMgdGhlIGdpdmVuIGhhbmRsZXIgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIGNhbGxzIGl0J3MgZGVzdHJveSBtZXRob2RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gaGFuZGxlciB0aGUgaGFuZGxlciB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzO1xuICAgICAgICBlYWNoKGhhbmRsZXJzLCBmdW5jdGlvbihoLCBpKSB7XG4gICAgICAgICAgICBpZihoLmVxdWFscyhoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGguZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhaGFuZGxlcnMuc3BsaWNlKGksMSk7IC8vcmVtb3ZlIGZyb20gYXJyYXkgYW5kIGV4aXQgZWFjaCBlYXJseVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBiZSBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgbWVkaWEgcXVlcnkgY2FuIGJlIGNvbnNpZGVyZWQgYSBtYXRjaCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgbWF0Y2hlcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tcWwubWF0Y2hlcyB8fCB0aGlzLmlzVW5jb25kaXRpb25hbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBoYW5kbGVycyBhbmQgdW5iaW5kcyBldmVudHNcbiAgICAgKi9cbiAgICBjbGVhciA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tcWwucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMubGVuZ3RoID0gMDsgLy9jbGVhciBhcnJheVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICAqIEFzc2Vzc2VzIHRoZSBxdWVyeSwgdHVybmluZyBvbiBhbGwgaGFuZGxlcnMgaWYgaXQgbWF0Y2hlcywgdHVybmluZyB0aGVtIG9mZiBpZiBpdCBkb2Vzbid0IG1hdGNoXG4gICAgICAgICovXG4gICAgYXNzZXNzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLm1hdGNoZXMoKSA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXJbYWN0aW9uXSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnk7XG4iLCJ2YXIgTWVkaWFRdWVyeSA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeScpO1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcbnZhciBlYWNoID0gVXRpbC5lYWNoO1xudmFyIGlzRnVuY3Rpb24gPSBVdGlsLmlzRnVuY3Rpb247XG52YXIgaXNBcnJheSA9IFV0aWwuaXNBcnJheTtcblxuLyoqXG4gKiBBbGxvd3MgZm9yIHJlZ2lzdHJhdGlvbiBvZiBxdWVyeSBoYW5kbGVycy5cbiAqIE1hbmFnZXMgdGhlIHF1ZXJ5IGhhbmRsZXIncyBzdGF0ZSBhbmQgaXMgcmVzcG9uc2libGUgZm9yIHdpcmluZyB1cCBicm93c2VyIGV2ZW50c1xuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5RGlzcGF0Y2ggKCkge1xuICAgIGlmKCF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hdGNoTWVkaWEgbm90IHByZXNlbnQsIGxlZ2FjeSBicm93c2VycyByZXF1aXJlIGEgcG9seWZpbGwnKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJpZXMgPSB7fTtcbiAgICB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZSA9ICF3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBhbGwnKS5tYXRjaGVzO1xufVxuXG5NZWRpYVF1ZXJ5RGlzcGF0Y2gucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBNZWRpYVF1ZXJ5RGlzcGF0Y2gsXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeVxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IEFycmF5IHx8IEZ1bmN0aW9ufSBvcHRpb25zIGVpdGhlciBhIHNpbmdsZSBxdWVyeSBoYW5kbGVyIG9iamVjdCwgYSBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2YgcXVlcnkgaGFuZGxlcnNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hdGNoIGZpcmVkIHdoZW4gcXVlcnkgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGZpcmVkIHdoZW4gYSBxdWVyeSBpcyBubyBsb25nZXIgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBmaXJlZCB3aGVuIGhhbmRsZXIgZmlyc3QgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWZlclNldHVwPWZhbHNlXSB3aGV0aGVyIHNldHVwIHNob3VsZCBiZSBydW4gaW1tZWRpYXRlbHkgb3IgZGVmZXJyZWQgdW50aWwgcXVlcnkgaXMgZmlyc3QgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Nob3VsZERlZ3JhZGU9ZmFsc2VdIHdoZXRoZXIgdGhpcyBwYXJ0aWN1bGFyIG1lZGlhIHF1ZXJ5IHNob3VsZCBhbHdheXMgcnVuIG9uIGluY2FwYWJsZSBicm93c2Vyc1xuICAgICAqL1xuICAgIHJlZ2lzdGVyIDogZnVuY3Rpb24ocSwgb3B0aW9ucywgc2hvdWxkRGVncmFkZSkge1xuICAgICAgICB2YXIgcXVlcmllcyAgICAgICAgID0gdGhpcy5xdWVyaWVzLFxuICAgICAgICAgICAgaXNVbmNvbmRpdGlvbmFsID0gc2hvdWxkRGVncmFkZSAmJiB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZTtcblxuICAgICAgICBpZighcXVlcmllc1txXSkge1xuICAgICAgICAgICAgcXVlcmllc1txXSA9IG5ldyBNZWRpYVF1ZXJ5KHEsIGlzVW5jb25kaXRpb25hbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL25vcm1hbGlzZSB0byBvYmplY3QgaW4gYW4gYXJyYXlcbiAgICAgICAgaWYoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWF0Y2ggOiBvcHRpb25zIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBbb3B0aW9uc107XG4gICAgICAgIH1cbiAgICAgICAgZWFjaChvcHRpb25zLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB7IG1hdGNoIDogaGFuZGxlciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcmllc1txXS5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdW5yZWdpc3RlcnMgYSBxdWVyeSBhbmQgYWxsIGl0J3MgaGFuZGxlcnMsIG9yIGEgc3BlY2lmaWMgaGFuZGxlciBmb3IgYSBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5IHRvIHRhcmdldFxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbaGFuZGxlcl0gc3BlY2lmaWMgaGFuZGxlciB0byB1bnJlZ2lzdGVyXG4gICAgICovXG4gICAgdW5yZWdpc3RlciA6IGZ1bmN0aW9uKHEsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW3FdO1xuXG4gICAgICAgIGlmKHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkucmVtb3ZlSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcmllc1txXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFRdWVyeURpc3BhdGNoO1xuIiwiLyoqXG4gKiBEZWxlZ2F0ZSB0byBoYW5kbGUgYSBtZWRpYSBxdWVyeSBiZWluZyBtYXRjaGVkIGFuZCB1bm1hdGNoZWQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyB1bm1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBvbmUtdGltZSBjYWxsYmFjayB0cmlnZ2VyZWQgdGhlIGZpcnN0IHRpbWUgYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgcnVuIGltbWVkaWF0ZWx5LCByYXRoZXIgdGhhbiBmaXJzdCB0aW1lIHF1ZXJ5IGlzIG1hdGNoZWQ/XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUXVlcnlIYW5kbGVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICFvcHRpb25zLmRlZmVyU2V0dXAgJiYgdGhpcy5zZXR1cCgpO1xufVxuXG5RdWVyeUhhbmRsZXIucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBRdWVyeUhhbmRsZXIsXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0dXAgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnNldHVwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgYW5kIHRyaWdnZXJpbmcgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICF0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hdGNoICYmIHRoaXMub3B0aW9ucy5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyB0aGUgdW5tYXRjaCBldmVudCBmb3IgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9mZiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudW5tYXRjaCAmJiB0aGlzLm9wdGlvbnMudW5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjYWxsZWQgd2hlbiBhIGhhbmRsZXIgaXMgdG8gYmUgZGVzdHJveWVkLlxuICAgICAqIGRlbGVnYXRlcyB0byB0aGUgZGVzdHJveSBvciB1bm1hdGNoIGNhbGxiYWNrcywgZGVwZW5kaW5nIG9uIGF2YWlsYWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIGRlc3Ryb3kgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlc3Ryb3kgPyB0aGlzLm9wdGlvbnMuZGVzdHJveSgpIDogdGhpcy5vZmYoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBlcXVhbGl0eSBieSByZWZlcmVuY2UuXG4gICAgICogaWYgb2JqZWN0IGlzIHN1cHBsaWVkIGNvbXBhcmUgb3B0aW9ucywgaWYgZnVuY3Rpb24sIGNvbXBhcmUgbWF0Y2ggY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbdGFyZ2V0XSB0aGUgdGFyZ2V0IGZvciBjb21wYXJpc29uXG4gICAgICovXG4gICAgZXF1YWxzIDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPT09IHRhcmdldCB8fCB0aGlzLm9wdGlvbnMubWF0Y2ggPT09IHRhcmdldDtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnlIYW5kbGVyO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGEgY29sbGVjdGlvblxuICpcbiAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gZm5cbiAqL1xuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBmbikge1xuICAgIHZhciBpICAgICAgPSAwLFxuICAgICAgICBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgY29udDtcblxuICAgIGZvcihpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udCA9IGZuKGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICBpZihjb250ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnJlYWs7IC8vYWxsb3cgZWFybHkgZXhpdFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHRhcmdldCB0aGUgb2JqZWN0IHVuZGVyIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHRhcmdldCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGZ1bmN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaXNGdW5jdGlvbiA6IGlzRnVuY3Rpb24sXG4gICAgaXNBcnJheSA6IGlzQXJyYXksXG4gICAgZWFjaCA6IGVhY2hcbn07XG4iLCJ2YXIgTWVkaWFRdWVyeURpc3BhdGNoID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5RGlzcGF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IE1lZGlhUXVlcnlEaXNwYXRjaCgpO1xuIiwiLyohXG4gKiBMYXp5IExvYWQgLSBKYXZhU2NyaXB0IHBsdWdpbiBmb3IgbGF6eSBsb2FkaW5nIGltYWdlc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAwNy0yMDE5IE1pa2EgVHV1cG9sYVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqXG4gKiBQcm9qZWN0IGhvbWU6XG4gKiAgIGh0dHBzOi8vYXBwZWxzaWluaS5uZXQvcHJvamVjdHMvbGF6eWxvYWRcbiAqXG4gKiBWZXJzaW9uOiAyLjAuMC1yYy4yXG4gKlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuTGF6eUxvYWQgPSBmYWN0b3J5KHJvb3QpO1xuICAgIH1cbn0pICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcy53aW5kb3cgfHwgdGhpcy5nbG9iYWwsIGZ1bmN0aW9uIChyb290KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIHJvb3QgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHNyYzogXCJkYXRhLXNyY1wiLFxuICAgICAgICBzcmNzZXQ6IFwiZGF0YS1zcmNzZXRcIixcbiAgICAgICAgc2VsZWN0b3I6IFwiLmxhenlsb2FkXCIsXG4gICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIHRocmVzaG9sZDogMFxuICAgIH07XG5cbiAgICAvKipcbiAgICAqIE1lcmdlIHR3byBvciBtb3JlIG9iamVjdHMuIFJldHVybnMgYSBuZXcgb2JqZWN0LlxuICAgICogQHByaXZhdGVcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gIGRlZXAgICAgIElmIHRydWUsIGRvIGEgZGVlcCAob3IgcmVjdXJzaXZlKSBtZXJnZSBbb3B0aW9uYWxdXG4gICAgKiBAcGFyYW0ge09iamVjdH0gICBvYmplY3RzICBUaGUgb2JqZWN0cyB0byBtZXJnZSB0b2dldGhlclxuICAgICogQHJldHVybnMge09iamVjdH0gICAgICAgICAgTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xuICAgICovXG4gICAgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKCkgIHtcblxuICAgICAgICBsZXQgZXh0ZW5kZWQgPSB7fTtcbiAgICAgICAgbGV0IGRlZXAgPSBmYWxzZTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICAgICAgICAvKiBDaGVjayBpZiBhIGRlZXAgbWVyZ2UgKi9cbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pID09PSBcIltvYmplY3QgQm9vbGVhbl1cIikge1xuICAgICAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIE1lcmdlIHRoZSBvYmplY3QgaW50byB0aGUgZXh0ZW5kZWQgb2JqZWN0ICovXG4gICAgICAgIGxldCBtZXJnZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIElmIGRlZXAgbWVyZ2UgYW5kIHByb3BlcnR5IGlzIGFuIG9iamVjdCwgbWVyZ2UgcHJvcGVydGllcyAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW3Byb3BdKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBleHRlbmQodHJ1ZSwgZXh0ZW5kZWRbcHJvcF0sIG9ialtwcm9wXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmRlZFtwcm9wXSA9IG9ialtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKiBMb29wIHRocm91Z2ggZWFjaCBvYmplY3QgYW5kIGNvbmR1Y3QgYSBtZXJnZSAqL1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgbWVyZ2Uob2JqKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHRlbmRlZDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTGF6eUxvYWQoaW1hZ2VzLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgTGF6eUxvYWQucHJvdG90eXBlID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLyogV2l0aG91dCBvYnNlcnZlcnMgbG9hZCBldmVyeXRoaW5nIGFuZCBiYWlsIG91dCBlYXJseS4gKi9cbiAgICAgICAgICAgIGlmICghcm9vdC5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlcygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG9ic2VydmVyQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHJvb3Q6IHRoaXMuc2V0dGluZ3Mucm9vdCxcbiAgICAgICAgICAgICAgICByb290TWFyZ2luOiB0aGlzLnNldHRpbmdzLnJvb3RNYXJnaW4sXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiBbdGhpcy5zZXR0aW5ncy50aHJlc2hvbGRdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVudHJpZXMsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3Jjc2V0ID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyY3NldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJpbWdcIiA9PT0gZW50cnkudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgc3JjICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIG9ic2VydmVyQ29uZmlnKTtcblxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRBbmREZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRJbWFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncykgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyYyk7XG4gICAgICAgICAgICAgICAgbGV0IHNyY3NldCA9IGltYWdlLmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyY3NldCk7XG4gICAgICAgICAgICAgICAgaWYgKFwiaW1nXCIgPT09IGltYWdlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgc3JjICsgXCInKVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncykgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5sYXp5bG9hZCA9IGZ1bmN0aW9uKGltYWdlcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IExhenlMb2FkKGltYWdlcywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGlmIChyb290LmpRdWVyeSkge1xuICAgICAgICBjb25zdCAkID0gcm9vdC5qUXVlcnk7XG4gICAgICAgICQuZm4ubGF6eWxvYWQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICBvcHRpb25zLmF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlIHx8IFwiZGF0YS1zcmNcIjtcbiAgICAgICAgICAgIG5ldyBMYXp5TG9hZCgkLm1ha2VBcnJheSh0aGlzKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gTGF6eUxvYWQ7XG59KTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgTWljcm9Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgRk9DVVNBQkxFX0VMRU1FTlRTID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXScsICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXTtcblxuICB2YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZGFsKF9yZWYpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IF9yZWYudGFyZ2V0TW9kYWwsXG4gICAgICAgICAgX3JlZiR0cmlnZ2VycyA9IF9yZWYudHJpZ2dlcnMsXG4gICAgICAgICAgdHJpZ2dlcnMgPSBfcmVmJHRyaWdnZXJzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkdHJpZ2dlcnMsXG4gICAgICAgICAgX3JlZiRvblNob3cgPSBfcmVmLm9uU2hvdyxcbiAgICAgICAgICBvblNob3cgPSBfcmVmJG9uU2hvdyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uU2hvdyxcbiAgICAgICAgICBfcmVmJG9uQ2xvc2UgPSBfcmVmLm9uQ2xvc2UsXG4gICAgICAgICAgb25DbG9zZSA9IF9yZWYkb25DbG9zZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uQ2xvc2UsXG4gICAgICAgICAgX3JlZiRvcGVuVHJpZ2dlciA9IF9yZWYub3BlblRyaWdnZXIsXG4gICAgICAgICAgb3BlblRyaWdnZXIgPSBfcmVmJG9wZW5UcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInIDogX3JlZiRvcGVuVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJGNsb3NlVHJpZ2dlciA9IF9yZWYuY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIGNsb3NlVHJpZ2dlciA9IF9yZWYkY2xvc2VUcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLWNsb3NlJyA6IF9yZWYkY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIF9yZWYkb3BlbkNsYXNzID0gX3JlZi5vcGVuQ2xhc3MsXG4gICAgICAgICAgb3BlbkNsYXNzID0gX3JlZiRvcGVuQ2xhc3MgPT09IHZvaWQgMCA/ICdpcy1vcGVuJyA6IF9yZWYkb3BlbkNsYXNzLFxuICAgICAgICAgIF9yZWYkZGlzYWJsZVNjcm9sbCA9IF9yZWYuZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBkaXNhYmxlU2Nyb2xsID0gX3JlZiRkaXNhYmxlU2Nyb2xsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBfcmVmJGRpc2FibGVGb2N1cyA9IF9yZWYuZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIGRpc2FibGVGb2N1cyA9IF9yZWYkZGlzYWJsZUZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9IF9yZWYuYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uID0gX3JlZiRhd2FpdENsb3NlQW5pbWF0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCxcbiAgICAgICAgICBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPSBfcmVmLmF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdE9wZW5BbmltYXRpb24gPSBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhd2FpdE9wZW5BbmltYXRpLFxuICAgICAgICAgIF9yZWYkZGVidWdNb2RlID0gX3JlZi5kZWJ1Z01vZGUsXG4gICAgICAgICAgZGVidWdNb2RlID0gX3JlZiRkZWJ1Z01vZGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkZWJ1Z01vZGU7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2Ugb2YgdGhlIG1vZGFsXG4gICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpOyAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXNzZWQgY29uZmlnXG5cbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICBkZWJ1Z01vZGU6IGRlYnVnTW9kZSxcbiAgICAgICAgZGlzYWJsZVNjcm9sbDogZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgb3BlblRyaWdnZXI6IG9wZW5UcmlnZ2VyLFxuICAgICAgICBjbG9zZVRyaWdnZXI6IGNsb3NlVHJpZ2dlcixcbiAgICAgICAgb3BlbkNsYXNzOiBvcGVuQ2xhc3MsXG4gICAgICAgIG9uU2hvdzogb25TaG93LFxuICAgICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uOiBhd2FpdENsb3NlQW5pbWF0aW9uLFxuICAgICAgICBhd2FpdE9wZW5BbmltYXRpb246IGF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgZGlzYWJsZUZvY3VzOiBkaXNhYmxlRm9jdXNcbiAgICAgIH07IC8vIFJlZ2lzdGVyIGNsaWNrIGV2ZW50cyBvbmx5IGlmIHByZSBiaW5kaW5nIGV2ZW50TGlzdGVuZXJzXG5cbiAgICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPiAwKSB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMuYXBwbHkodGhpcywgX3RvQ29uc3VtYWJsZUFycmF5KHRyaWdnZXJzKSk7IC8vIHByZSBiaW5kIGZ1bmN0aW9ucyBmb3IgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5vbktleWRvd24gPSB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb29wcyB0aHJvdWdoIGFsbCBvcGVuVHJpZ2dlcnMgYW5kIGJpbmRzIGNsaWNrIGV2ZW50XG4gICAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzIFtBcnJheSBvZiBub2RlIGVsZW1lbnRzXVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICAgIGtleTogXCJyZWdpc3RlclRyaWdnZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJUcmlnZ2VycygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJpZ2dlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgdHJpZ2dlcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2Vycy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93TW9kYWwoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2hvd01vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkNsYXNzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2Rpc2FibGUnKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdE9wZW5BbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBfdGhpczIubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuXG4gICAgICAgICAgICBfdGhpczIuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uU2hvdyh0aGlzLm1vZGFsLCB0aGlzLmFjdGl2ZUVsZW1lbnQsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgICAgdmFyIG1vZGFsID0gdGhpcy5tb2RhbDtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW91cignZW5hYmxlJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlbWVudCAmJiB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UodGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0Q2xvc2VBbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgb3BlbkNsYXNzID0gdGhpcy5jb25maWcub3BlbkNsYXNzOyAvLyA8LSBvbGQgc2Nob29sIGZ0d1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShvcGVuQ2xhc3MpO1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbEJ5SWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpO1xuICAgICAgICBpZiAodGhpcy5tb2RhbCkgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNjcm9sbEJlaGF2aW91clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbEJlaGF2aW91cih0b2dnbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlU2Nyb2xsKSByZXR1cm47XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgICAgIHN3aXRjaCAodG9nZ2xlKSB7XG4gICAgICAgICAgY2FzZSAnZW5hYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdkaXNhYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRXZlbnRMaXN0ZW5lcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZUV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZSh0aGlzLmNvbmZpZy5jbG9zZVRyaWdnZXIpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbktleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpOyAvLyBlc2NcblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkgdGhpcy5yZXRhaW5Gb2N1cyhldmVudCk7IC8vIHRhYlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRGb2N1c2FibGVOb2Rlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU5vZGVzKCkge1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMRU1FTlRTKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVzKSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFRyaWVzIHRvIHNldCBmb2N1cyBvbiBhIG5vZGUgd2hpY2ggaXMgbm90IGEgY2xvc2UgdHJpZ2dlclxuICAgICAgICogaWYgbm8gb3RoZXIgbm9kZXMgZXhpc3QgdGhlbiBmb2N1c2VzIG9uIGZpcnN0IGNsb3NlIHRyaWdnZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldEZvY3VzVG9GaXJzdE5vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGb2N1c1RvRmlyc3ROb2RlKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGlzYWJsZUZvY3VzKSByZXR1cm47XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyByZW1vdmUgbm9kZXMgb24gd2hvc2UgY2xpY2ssIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgICAgLy8gY291bGQgbm90IHRoaW5rIG9mIGEgYmV0dGVyIG5hbWUgOihcblxuICAgICAgICB2YXIgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyA9IGZvY3VzYWJsZU5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoX3RoaXMzLmNvbmZpZy5jbG9zZVRyaWdnZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID4gMCkgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0c1swXS5mb2N1cygpO1xuICAgICAgICBpZiAobm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cy5sZW5ndGggPT09IDApIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJldGFpbkZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmV0YWluRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpOyAvLyBubyBmb2N1c2FibGUgbm9kZXNcblxuICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWx0ZXJzIG5vZGVzIHdoaWNoIGFyZSBoaWRkZW4gdG8gcHJldmVudFxuICAgICAgICAgKiBmb2N1cyBsZWFrIG91dHNpZGUgbW9kYWxcbiAgICAgICAgICovXG5cbiAgICAgICAgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gICAgICAgIH0pOyAvLyBpZiBkaXNhYmxlRm9jdXMgaXMgdHJ1ZVxuXG4gICAgICAgIGlmICghdGhpcy5tb2RhbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZvY3VzZWRJdGVtSW5kZXggPSBmb2N1c2FibGVOb2Rlcy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZU5vZGVzW2ZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNhYmxlTm9kZXMubGVuZ3RoID4gMCAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSBmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIE1vZGFsIHByb3RvdHlwZSBlbmRzLlxuICAgKiBIZXJlIG9uIGNvZGUgaXMgcmVzcG9uc2libGUgZm9yIGRldGVjdGluZyBhbmRcbiAgICogYXV0byBiaW5kaW5nIGV2ZW50IGhhbmRsZXJzIG9uIG1vZGFsIHRyaWdnZXJzXG4gICAqL1xuICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcGVuZWQgbW9kYWxcblxuXG4gIHZhciBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gYXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCBpdCdzXG4gICAqIHJlc3BlY3RpdmUgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgICBBbiBhcnJheSBvZiBhbGwgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0cmlnZ2VyQXR0ciBUaGUgZGF0YS1hdHRyaWJ1dGUgd2hpY2ggdHJpZ2dlcnMgdGhlIG1vZHVsZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG5cbiAgdmFyIGdlbmVyYXRlVHJpZ2dlck1hcCA9IGZ1bmN0aW9uIGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2VycywgdHJpZ2dlckF0dHIpIHtcbiAgICB2YXIgdHJpZ2dlck1hcCA9IFtdO1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IHRyaWdnZXIuYXR0cmlidXRlc1t0cmlnZ2VyQXR0cl0udmFsdWU7XG4gICAgICBpZiAodHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPT09IHVuZGVmaW5lZCkgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPSBbXTtcbiAgICAgIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdLnB1c2godHJpZ2dlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyaWdnZXJNYXA7XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgd2hldGhlciBhIG1vZGFsIG9mIHRoZSBnaXZlbiBpZCBleGlzdHNcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGlkICBUaGUgaWQgb2YgdGhlIG1vZGFsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlTW9kYWxQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlTW9kYWxQcmVzZW5jZShpZCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3U2VlbXMgbGlrZSB5b3UgaGF2ZSBtaXNzZWQgJWMnXCIuY29uY2F0KGlkLCBcIidcIiksICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdJRCBzb21ld2hlcmUgaW4geW91ciBjb2RlLiBSZWZlciBleGFtcGxlIGJlbG93IHRvIHJlc29sdmUgaXQuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGlkPVxcXCJcIi5jb25jYXQoaWQsIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBhcmUgbW9kYWwgdHJpZ2dlcnMgcHJlc2VudFxuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBBbiBhcnJheSBvZiBkYXRhLXRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlID0gZnVuY3Rpb24gdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpIHtcbiAgICBpZiAodHJpZ2dlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IFxcdTI3NTdQbGVhc2Ugc3BlY2lmeSBhdCBsZWFzdCBvbmUgJWMnbWljcm9tb2RhbC10cmlnZ2VyJ1wiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnZGF0YSBhdHRyaWJ1dGUuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1taWNyb21vZGFsLXRyaWdnZXI9XFxcIm15LW1vZGFsXFxcIj48L2E+XCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0cmlnZ2VycyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBtb2RhbHNcbiAgICogYXJlIHByZXNlbnQgaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgICBBcnJheSBvZiBET00gbm9kZXMgd2hpY2ggaGF2ZSBkYXRhLXRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VyTWFwIEFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgdGhlaXIgdHJpZ2dlcnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVBcmdzID0gZnVuY3Rpb24gdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSB7XG4gICAgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpO1xuICAgIGlmICghdHJpZ2dlck1hcCkgcmV0dXJuIHRydWU7XG5cbiAgICBmb3IgKHZhciBpZCBpbiB0cmlnZ2VyTWFwKSB7XG4gICAgICB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvKipcbiAgICogQmluZHMgY2xpY2sgaGFuZGxlcnMgdG8gYWxsIG1vZGFsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuXG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KGNvbmZpZykge1xuICAgIC8vIENyZWF0ZSBhbiBjb25maWcgb2JqZWN0IHdpdGggZGVmYXVsdCBvcGVuVHJpZ2dlclxuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgb3BlblRyaWdnZXI6ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcidcbiAgICB9LCBjb25maWcpOyAvLyBDb2xsZWN0cyBhbGwgdGhlIG5vZGVzIHdpdGggdGhlIHRyaWdnZXJcblxuICAgIHZhciB0cmlnZ2VycyA9IF90b0NvbnN1bWFibGVBcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiLmNvbmNhdChvcHRpb25zLm9wZW5UcmlnZ2VyLCBcIl1cIikpKTsgLy8gTWFrZXMgYSBtYXBwaW5ncyBvZiBtb2RhbHMgd2l0aCB0aGVpciB0cmlnZ2VyIG5vZGVzXG5cblxuICAgIHZhciB0cmlnZ2VyTWFwID0gZ2VuZXJhdGVUcmlnZ2VyTWFwKHRyaWdnZXJzLCBvcHRpb25zLm9wZW5UcmlnZ2VyKTsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gRm9yIGV2ZXJ5IHRhcmdldCBtb2RhbCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFyIHZhbHVlID0gdHJpZ2dlck1hcFtrZXldO1xuICAgICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IGtleTtcbiAgICAgIG9wdGlvbnMudHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkodmFsdWUpO1xuICAgICAgYWN0aXZlTW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvd3MgYSBwYXJ0aWN1bGFyIG1vZGFsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0TW9kYWwgW1RoZSBpZCBvZiB0aGUgbW9kYWwgdG8gZGlzcGxheV1cbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgW1RoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byBwYXNzXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyh0YXJnZXRNb2RhbCwgY29uZmlnKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBjb25maWcgfHwge307XG4gICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IHRhcmdldE1vZGFsOyAvLyBDaGVja3MgaWYgbW9kYWxzIGFuZCB0cmlnZ2VycyBleGlzdCBpbiBkb21cblxuICAgIGlmIChvcHRpb25zLmRlYnVnTW9kZSA9PT0gdHJ1ZSAmJiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UodGFyZ2V0TW9kYWwpID09PSBmYWxzZSkgcmV0dXJuOyAvLyBjbGVhciBldmVudHMgaW4gY2FzZSBwcmV2aW91cyBtb2RhbCB3YXNuJ3QgY2xvc2VcblxuICAgIGlmIChhY3RpdmVNb2RhbCkgYWN0aXZlTW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTsgLy8gc3RvcmVzIHJlZmVyZW5jZSB0byBhY3RpdmUgbW9kYWxcblxuICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXG4gICAgYWN0aXZlTW9kYWwuc2hvd01vZGFsKCk7XG4gIH07XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGFjdGl2ZSBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGNsb3NlXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKHRhcmdldE1vZGFsKSB7XG4gICAgdGFyZ2V0TW9kYWwgPyBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkgOiBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIHNob3c6IHNob3csXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59KCk7XG53aW5kb3cuTWljcm9Nb2RhbCA9IE1pY3JvTW9kYWw7XG5cbmV4cG9ydCBkZWZhdWx0IE1pY3JvTW9kYWw7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlNpZW1hXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TaWVtYT10KCk6ZS5TaWVtYT10KCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKGlbcl0pcmV0dXJuIGlbcl0uZXhwb3J0czt2YXIgbj1pW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmw9ITAsbi5leHBvcnRzfXZhciBpPXt9O3JldHVybiB0Lm09ZSx0LmM9aSx0LmQ9ZnVuY3Rpb24oZSxpLHIpe3QubyhlLGkpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIGk9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChpLFwiYVwiLGkpLGl9LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIHI9dFtpXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LGkscil7cmV0dXJuIGkmJmUodC5wcm90b3R5cGUsaSksciYmZSh0LHIpLHR9fSgpLGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBpPXRoaXM7aWYocih0aGlzLGUpLHRoaXMuY29uZmlnPWUubWVyZ2VTZXR0aW5ncyh0KSx0aGlzLnNlbGVjdG9yPVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5zZWxlY3Rvcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLnNlbGVjdG9yKTp0aGlzLmNvbmZpZy5zZWxlY3RvcixudWxsPT09dGhpcy5zZWxlY3Rvcil0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd3Jvbmcgd2l0aCB5b3VyIHNlbGVjdG9yIPCfmK1cIik7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5pbm5lckVsZW1lbnRzPVtdLnNsaWNlLmNhbGwodGhpcy5zZWxlY3Rvci5jaGlsZHJlbiksdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jb25maWcubG9vcD90aGlzLmNvbmZpZy5zdGFydEluZGV4JXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg6TWF0aC5tYXgoMCxNYXRoLm1pbih0aGlzLmNvbmZpZy5zdGFydEluZGV4LHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSksdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eT1lLndlYmtpdE9yTm90KCksW1wicmVzaXplSGFuZGxlclwiLFwidG91Y2hzdGFydEhhbmRsZXJcIixcInRvdWNoZW5kSGFuZGxlclwiLFwidG91Y2htb3ZlSGFuZGxlclwiLFwibW91c2Vkb3duSGFuZGxlclwiLFwibW91c2V1cEhhbmRsZXJcIixcIm1vdXNlbGVhdmVIYW5kbGVyXCIsXCJtb3VzZW1vdmVIYW5kbGVyXCIsXCJjbGlja0hhbmRsZXJcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtpW2VdPWlbZV0uYmluZChpKX0pLHRoaXMuaW5pdCgpfXJldHVybiBzKGUsW3trZXk6XCJhdHRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZHJhZz17c3RhcnRYOjAsZW5kWDowLHN0YXJ0WTowLGxldEl0R286bnVsbCxwcmV2ZW50Q2xpY2s6ITF9LHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnRvdWNoc3RhcnRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMudG91Y2hlbmRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvdWNobW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMubW91c2Vkb3duSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW91c2V1cEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlbGVhdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdXNlbW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGlja0hhbmRsZXIpKX19LHtrZXk6XCJkZXRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKX19LHtrZXk6XCJpbml0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmF0dGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIix0aGlzLnNlbGVjdG9yLnN0eWxlLmRpcmVjdGlvbj10aGlzLmNvbmZpZy5ydGw/XCJydGxcIjpcImx0clwiLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHRoaXMuY29uZmlnLm9uSW5pdC5jYWxsKHRoaXMpfX0se2tleTpcImJ1aWxkU2xpZGVyRnJhbWVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UsdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2U6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0aGlzLnNsaWRlckZyYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53aWR0aD1lKnQrXCJweFwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgcj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKXt2YXIgbj10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tyXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKG4pfWZvcih2YXIgcz0wO3M8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciBsPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW3NdKTtpLmFwcGVuZENoaWxkKGwpfWlmKHRoaXMuY29uZmlnLmxvb3ApZm9yKHZhciBvPTA7bzx0aGlzLnBlclBhZ2U7bysrKXt2YXIgYT10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tvXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKGEpfXRoaXMuc2xpZGVyRnJhbWUuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyRnJhbWUpLHRoaXMuc2xpZGVUb0N1cnJlbnQoKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lSXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuc3R5bGUuY3NzRmxvYXQ9dGhpcy5jb25maWcucnRsP1wicmlnaHRcIjpcImxlZnRcIix0LnN0eWxlLmZsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS53aWR0aD0odGhpcy5jb25maWcubG9vcD8xMDAvKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2UpOjEwMC90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKStcIiVcIix0LmFwcGVuZENoaWxkKGUpLHR9fSx7a2V5OlwicmVzb2x2ZVNsaWRlc051bWJlclwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuY29uZmlnLnBlclBhZ2UpdGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2U7ZWxzZSBpZihcIm9iamVjdFwiPT09bih0aGlzLmNvbmZpZy5wZXJQYWdlKSl7dGhpcy5wZXJQYWdlPTE7Zm9yKHZhciBlIGluIHRoaXMuY29uZmlnLnBlclBhZ2Upd2luZG93LmlubmVyV2lkdGg+PWUmJih0aGlzLnBlclBhZ2U9dGhpcy5jb25maWcucGVyUGFnZVtlXSl9fX0se2tleTpcInByZXZcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7aWYodGhpcy5jb25maWcubG9vcCl7aWYodGhpcy5jdXJyZW50U2xpZGUtZTwwKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXItZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1heCh0aGlzLmN1cnJlbnRTbGlkZS1lLDApO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJuZXh0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlK2U+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2Upe3RoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTt2YXIgcj10aGlzLmN1cnJlbnRTbGlkZS10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLG49dGhpcy5wZXJQYWdlLHM9cituLGw9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpzKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxvPXRoaXMuY29uZmlnLmRyYWdnYWJsZT90aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYOjA7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyhsK28pK1wicHgsIDAsIDApXCIsdGhpcy5jdXJyZW50U2xpZGU9citlfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jdXJyZW50U2xpZGUrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPU1hdGgubWluKHRoaXMuY3VycmVudFNsaWRlK2UsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJkaXNhYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZW5hYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZ319LHtrZXk6XCJnb1RvXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO3RoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/ZSV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWluKE1hdGgubWF4KGUsMCksdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLGkhPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQoKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcInNsaWRlVG9DdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLHI9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSppKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKTtlP3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3QuZW5hYmxlVHJhbnNpdGlvbigpLHQuc2xpZGVyRnJhbWUuc3R5bGVbdC50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9KX0pOnRoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9fSx7a2V5OlwidXBkYXRlQWZ0ZXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0odGhpcy5jb25maWcucnRsPy0xOjEpKih0aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYKSx0PU1hdGguYWJzKGUpLGk9dGhpcy5jb25maWcubXVsdGlwbGVEcmFnP01hdGguY2VpbCh0Lyh0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSk6MSxyPWU+MCYmdGhpcy5jdXJyZW50U2xpZGUtaTwwLG49ZTwwJiZ0aGlzLmN1cnJlbnRTbGlkZStpPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlO2U+MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlP3RoaXMucHJldihpKTplPDAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZSYmdGhpcy5uZXh0KGkpLHRoaXMuc2xpZGVUb0N1cnJlbnQocnx8bil9fSx7a2V5OlwicmVzaXplSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgmJih0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2U/MDp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5idWlsZFNsaWRlckZyYW1lKCl9fSx7a2V5OlwiY2xlYXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOnRoaXMuZHJhZy5wcmV2ZW50Q2xpY2t9fX0se2tleTpcInRvdWNoc3RhcnRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS50b3VjaGVzWzBdLnBhZ2VYLHRoaXMuZHJhZy5zdGFydFk9ZS50b3VjaGVzWzBdLnBhZ2VZKX19LHtrZXk6XCJ0b3VjaGVuZEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJ0b3VjaG1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5zdG9wUHJvcGFnYXRpb24oKSxudWxsPT09dGhpcy5kcmFnLmxldEl0R28mJih0aGlzLmRyYWcubGV0SXRHbz1NYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRZLWUudG91Y2hlc1swXS5wYWdlWSk8TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WC1lLnRvdWNoZXNbMF0ucGFnZVgpKSx0aGlzLnBvaW50ZXJEb3duJiZ0aGlzLmRyYWcubGV0SXRHbyl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5lbmRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2Vkb3duSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITAsdGhpcy5kcmFnLnN0YXJ0WD1lLnBhZ2VYKX19LHtrZXk6XCJtb3VzZXVwSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwibW91c2Vtb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSx0aGlzLnBvaW50ZXJEb3duKXtcIkFcIj09PWUudGFyZ2V0Lm5vZGVOYW1lJiYodGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMCksdGhpcy5kcmFnLmVuZFg9ZS5wYWdlWCx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYmJpbmdcIix0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2VsZWF2ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnBvaW50ZXJEb3duJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMSx0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCkpfX0se2tleTpcImNsaWNrSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuZHJhZy5wcmV2ZW50Q2xpY2smJmUucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcucHJldmVudENsaWNrPSExfX0se2tleTpcInJlbW92ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoZTwwfHxlPj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkl0ZW0gdG8gcmVtb3ZlIGRvZXNuJ3QgZXhpc3Qg8J+YrVwiKTt2YXIgaT1lPHRoaXMuY3VycmVudFNsaWRlLHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlLTE9PT1lOyhpfHxyKSYmdGhpcy5jdXJyZW50U2xpZGUtLSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKGUsMSksdGhpcy5idWlsZFNsaWRlckZyYW1lKCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImluc2VydFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxpKXtpZih0PDB8fHQ+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbnNldCBpdCBhdCB0aGlzIGluZGV4IPCfmK1cIik7aWYoLTEhPT10aGlzLmlubmVyRWxlbWVudHMuaW5kZXhPZihlKSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2FtZSBpdGVtIGluIGEgY2Fyb3VzZWw/IFJlYWxseT8gTm9wZSDwn5itXCIpO3ZhciByPXQ8PXRoaXMuY3VycmVudFNsaWRlPjAmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5jdXJyZW50U2xpZGU9cj90aGlzLmN1cnJlbnRTbGlkZSsxOnRoaXMuY3VycmVudFNsaWRlLHRoaXMuaW5uZXJFbGVtZW50cy5zcGxpY2UodCwwLGUpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLGkmJmkuY2FsbCh0aGlzKX19LHtrZXk6XCJwcmVwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLDApLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJhcHBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSx0PWFyZ3VtZW50c1sxXTtpZih0aGlzLmRldGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiYXV0b1wiLGUpe2Zvcih2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscj0wO3I8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtyKyspaS5hcHBlbmRDaGlsZCh0aGlzLmlubmVyRWxlbWVudHNbcl0pO3RoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZChpKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpfXQmJnQuY2FsbCh0aGlzKX19XSxbe2tleTpcIm1lcmdlU2V0dGluZ3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD17c2VsZWN0b3I6XCIuc2llbWFcIixkdXJhdGlvbjoyMDAsZWFzaW5nOlwiZWFzZS1vdXRcIixwZXJQYWdlOjEsc3RhcnRJbmRleDowLGRyYWdnYWJsZTohMCxtdWx0aXBsZURyYWc6ITAsdGhyZXNob2xkOjIwLGxvb3A6ITEscnRsOiExLG9uSW5pdDpmdW5jdGlvbigpe30sb25DaGFuZ2U6ZnVuY3Rpb24oKXt9fSxpPWU7Zm9yKHZhciByIGluIGkpdFtyXT1pW3JdO3JldHVybiB0fX0se2tleTpcIndlYmtpdE9yTm90XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT9cInRyYW5zZm9ybVwiOlwiV2Via2l0VHJhbnNmb3JtXCJ9fV0pLGV9KCk7dC5kZWZhdWx0PWwsZS5leHBvcnRzPXQuZGVmYXVsdH1dKX0pOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBBY2NvcmRpb24gZnJvbSAnYWNjb3JkaW9uLWpzJztcclxuXHJcbnZhciB0YXJnZXRlZENsYXNzICAgID0gJy5hY2NvcmRpb24tY29udGFpbmVyJztcclxudmFyIGFjY29yZGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldGVkQ2xhc3MpO1xyXG5cclxuaWYgKGFjY29yZGlvbkVsZW1lbnQubGVuZ3RoID4gMCkge1xyXG4gICAgbmV3IEFjY29yZGlvbih0YXJnZXRlZENsYXNzKTtcclxufVxyXG4iLCJpbXBvcnQgZW5xdWlyZSBmcm9tICdlbnF1aXJlLWpzJztcclxuXHJcbmlmICghT2JqZWN0LmVudHJpZXMpIHtcclxuICAgIE9iamVjdC5lbnRyaWVzID0gZnVuY3Rpb24oIG9iaiApe1xyXG4gICAgICAgIHZhciBvd25Qcm9wcyA9IE9iamVjdC5rZXlzKCBvYmogKSxcclxuICAgICAgICAgICAgaSA9IG93blByb3BzLmxlbmd0aCxcclxuICAgICAgICAgICAgcmVzQXJyYXkgPSBuZXcgQXJyYXkoaSk7XHJcbiAgICAgICAgd2hpbGUgKGktLSlcclxuICAgICAgICByZXNBcnJheVtpXSA9IFtvd25Qcm9wc1tpXSwgb2JqW293blByb3BzW2ldXV07XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXNBcnJheTtcclxuICAgIH07XHJcbn1cclxuXHJcbmxldCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xyXG5cclxuY29uc3QgbWVkaWFRdWVyaWVzID0ge1xyXG4gICAgc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCknLFxyXG4gICAgbW9iOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjFweCknLFxyXG4gICAgdGFiOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCknLFxyXG4gICAgbGFwOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJyxcclxuICAgIGRlczogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KScsXHJcbiAgICBsZzogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KScsXHJcbiAgICB4bDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KScsXHJcbiAgICBsYW5kc2NhcGU6ICdzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXHJcbiAgICBwb3RyYWl0OiAnc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSdcclxufTtcclxuXHJcbk9iamVjdC5lbnRyaWVzKG1lZGlhUXVlcmllcykuZm9yRWFjaCgoW2JyZWFrcG9pbnQsIG1lZGlhcXVlcnldKSA9PiBcclxuICAgIGVucXVpcmUucmVnaXN0ZXIoIG1lZGlhcXVlcnksIHsgXHJcbiAgICAgICAgbWF0Y2ggOiBmdW5jdGlvbigpIHsgaHRtbC5jbGFzc0xpc3QuYWRkKCBicmVha3BvaW50ICk7IH0sXHJcbiAgICAgICAgdW5tYXRjaCA6IGZ1bmN0aW9uKCkgeyBodG1sLmNsYXNzTGlzdC5yZW1vdmUoIGJyZWFrcG9pbnQgKTsgfVxyXG4gICAgfSlcclxuKTtcclxuXHJcbiIsImltcG9ydCBsYXp5bG9hZCBmcm9tICdsYXp5bG9hZCc7XHJcblxyXG5uZXcgbGF6eWxvYWQoKTsiLCJpbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcclxuXHJcbk1pY3JvTW9kYWwuaW5pdCh7XHJcbiAgICBvblNob3c6IG1vZGFsID0+IGNvbnNvbGUuaW5mbyhgJHttb2RhbC5pZH0gaXMgc2hvd25gKSwgLy8gWzFdXHJcbiAgICBvbkNsb3NlOiBtb2RhbCA9PiBjb25zb2xlLmluZm8oYCR7bW9kYWwuaWR9IGlzIGhpZGRlbmApLCAvLyBbMl1cclxuICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1jdXN0b20tb3BlbicsIC8vIFszXVxyXG4gICAgY2xvc2VUcmlnZ2VyOiAnZGF0YS1jdXN0b20tY2xvc2UnLCAvLyBbNF1cclxuICAgIG9wZW5DbGFzczogJ2lzLW9wZW4nLCAvLyBbNV1cclxuICAgIGRpc2FibGVTY3JvbGw6IHRydWUsIC8vIFs2XVxyXG4gICAgZGlzYWJsZUZvY3VzOiBmYWxzZSwgLy8gWzddXHJcbiAgICBhd2FpdE9wZW5BbmltYXRpb246IGZhbHNlLCAvLyBbOF1cclxuICAgIGF3YWl0Q2xvc2VBbmltYXRpb246IGZhbHNlLCAvLyBbOV1cclxuICAgIGRlYnVnTW9kZTogdHJ1ZSAvLyBbMTBdXHJcbn0pOyIsImNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XHJcbmNvbnN0IG1vYmltZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNpdmUtbWVudScpO1xyXG5jb25zdCBzaXRlYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbmxldCBtYWlubWVudSAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2l2ZS1tZW51Jyk7XHJcbmxldCBjbGFzc05hbWUgICAgPSAnbW9iaW1lbnUnO1xyXG5sZXQgdmVydGljYWxNZW51ID0gJ3ZlcnRpY2FsX19uYXYnO1xyXG5cclxuY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJyk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXRDaGFuZ2UoZSkge1xyXG5cdC8vIENoZWNrIGlmIHRoZSBtZWRpYSBxdWVyeSBpcyB0cnVlXHJcblx0aWYgKGUubWF0Y2hlcykge1xyXG4gIFxyXG5cdFx0Ly8gSWYgdGhlIG1lZGlhcXVlcnkgaXMgbGFyZ2VyIHRoYW4gMTAyNHB4XHJcblx0XHRpZiAobWFpbm1lbnUuY2xhc3NMaXN0KSB7XHJcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSh2ZXJ0aWNhbE1lbnUpO1xyXG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKCdtYWlubWVudScpO1xyXG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsX19uYXYnKTtcclxuXHRcdH1cclxuICBcclxuXHR9ZWxzZXtcclxuXHRcdFxyXG5cdFx0Ly8gSWYgdGhlIG1lZGlhcXVlcnkgaXMgc21hbGxlciB0aGFuIDEwMjRweFxyXG5cdFx0aWYgKG1haW5tZW51LmNsYXNzTGlzdCkge1xyXG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWlubWVudScpO1xyXG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsX19uYXYnKTtcclxuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKHZlcnRpY2FsTWVudSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bWFpbm1lbnUuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZSArICcgJyArIHZlcnRpY2FsTWVudTtcclxuXHRcdH1cclxuXHQgIFxyXG5cdH1cclxuICBcclxufVxyXG5cclxuLy8gUmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJcclxubWVkaWFRdWVyeS5hZGRMaXN0ZW5lcihoYW5kbGVUYWJsZXRDaGFuZ2UpO1xyXG5cclxuLy8gSW5pdGlhbCBjaGVja1xyXG5oYW5kbGVUYWJsZXRDaGFuZ2UobWVkaWFRdWVyeSk7XHJcblxyXG5tZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG5cdG1vYmltZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZScpO1xyXG5cdG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZScpO1xyXG5cdHNpdGVib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vYmltZW51LWlzLW9wZW4nKTtcclxufSk7XHJcblxyXG4vLyBDcmVhdGUgc3ViIG1lbnVzXHJcbmZ1bmN0aW9uIGNsaWNrZWRNZW51KCl7XHJcbiAgICBpZih0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbWVudSAuc3ViLW1lbnUnKSl7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3N1Yi1tZW51LWFjdGl2ZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicpLmZvckVhY2goZnVuY3Rpb24oZWwpe1xyXG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tlZE1lbnUpO1xyXG59KTsiLCJpbXBvcnQgU2llbWEgZnJvbSAnc2llbWEnO1xyXG5cclxudmFyIHNsaWRlc2hvd1NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlc2hvdycpO1xyXG52YXIgcHJldmlvdXNTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1wcmV2Jyk7XHJcbnZhciBuZXh0U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtbmV4dCcpO1xyXG52YXIgc2xpZGVzaG93ID0gXCJcIjtcclxuXHJcbmlmIChzbGlkZXNob3dTZWxlY3Rvcikge1xyXG4gICAgc2xpZGVzaG93ID0gbmV3IFNpZW1hKHtcclxuICAgICAgICBzZWxlY3RvcjogJy5zbGlkZXNob3cnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgIHBlclBhZ2U6IDEsXHJcbiAgICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxyXG4gICAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBydGw6IGZhbHNlLFxyXG4gICAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmIChwcmV2aW91c1NsaWRlKSB7XHJcbiAgICBwcmV2aW91c1NsaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2xpZGVzaG93LnByZXYoKSk7XHJcbn1cclxuXHJcbmlmIChuZXh0U2xpZGUpIHtcclxuICAgIG5leHRTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNsaWRlc2hvdy5uZXh0KCkpO1xyXG59XHJcblxyXG4vL2h0dHBzOi8vY29kZXBlbi5pby9jb2xsZWN0aW9uL0FkcGtrZC8/Y3Vyc29yPVpEMHhKbTg5TUNad1BURW1kajB4TURJeU5EVTAiLCJpbXBvcnQgJy4vZnVuY3Rpb24uYm9keWNsYXNzZXMuanMnO1xyXG5pbXBvcnQgJy4vZnVuY3Rpb24uc2xpZGVzaG93LmpzJzsgXHJcbmltcG9ydCAnLi9mdW5jdGlvbi5vZmZjYW52YXMuanMnO1xyXG5pbXBvcnQgJy4vZnVuY3Rpb24ubGF6eWxvYWQuanMnOyBcclxuaW1wb3J0ICcuL2Z1bmN0aW9uLm1vZGFsLmpzJztcclxuaW1wb3J0ICcuL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==