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

new accordion_js__WEBPACK_IMPORTED_MODULE_0___default.a('.accordion-container');

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

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.navigation ul');
  burger.addEventListener('click', function () {
    nav.classList.toggle('navigation__is-active');
  });
}; //navSlide();

/***/ }),

/***/ "./src/assets/js/function.slideshow.js":
/*!*********************************************!*\
  !*** ./src/assets/js/function.slideshow.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _function_slideshow_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_function_slideshow_js__WEBPACK_IMPORTED_MODULE_1__);
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

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/wp-content/themes/firsttheme/src/assets/js/functions.js */"./src/assets/js/functions.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUtanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5bG9hZC9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWljcm9tb2RhbC9kaXN0L21pY3JvbW9kYWwuZXMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmJvZHljbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ubGF6eWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJpIiwidSIsIm8iLCJsIiwiYyIsInQiLCJpbml0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWFwIiwiZSIsIm9wdGlvbnMiLCJoIiwiZHVyYXRpb24iLCJpdGVtTnVtYmVyIiwiYXJpYSIsImNsb3NlT3RoZXJzIiwic2hvd0l0ZW0iLCJlbGVtZW50Q2xhc3MiLCJxdWVzdGlvbkNsYXNzIiwiYW5zd2VyQ2xhc3MiLCJ0YXJnZXRDbGFzcyIsIm9uVG9nZ2xlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibiIsInNldEF0dHJpYnV0ZSIsInMiLCJyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZUVsZW1lbnQiLCJzZXRUcmFuc2l0aW9uIiwiZ2VuZXJhdGVJRCIsInNldEFSSUEiLCJhIiwidG9nZ2xlRWxlbWVudCIsImF0dGFjaEV2ZW50cyIsInN0eWxlIiwiY29uY2F0IiwidXBkYXRlQVJJQSIsImNhbGxTcGVjaWZpY0VsZW1lbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImNsYXNzTmFtZSIsIm1hdGNoIiwicHJldmVudERlZmF1bHQiLCJjbG9zZUFsbEVsZW1lbnRzIiwiaGVpZ2h0IiwiYXJndW1lbnRzIiwic2Nyb2xsSGVpZ2h0IiwidG9nZ2xlIiwicGFyc2VJbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJyZXNpemVIYW5kbGVyIiwib2Zmc2V0SGVpZ2h0IiwiY2xpY2tIYW5kbGVyIiwia2V5ZG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQWNjb3JkaW9uIiwid2luZG93IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVucXVpcmVTY3JlZW4iLCJ1bmVucXVpcmVTY3JlZW4iLCJlbnF1aXJlSnMiLCJtYXRjaE1lZGlhUG9seWZpbGwiLCJtZWRpYVF1ZXJ5IiwibWVkaWEiLCJtYXRjaGVzIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJyZXF1aXJlIiwibW9iaWxlUXVlcnkiLCJjYiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwiaGFuZGxlciIsInVubWF0Y2giLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJRdWVyeUhhbmRsZXIiLCJlYWNoIiwiTWVkaWFRdWVyeSIsImlzVW5jb25kaXRpb25hbCIsImhhbmRsZXJzIiwibXFsIiwic2VsZiIsImxpc3RlbmVyIiwiY3VycmVudFRhcmdldCIsImFzc2VzcyIsInByb3RvdHlwZSIsImNvbnN0dWN0b3IiLCJhZGRIYW5kbGVyIiwicWgiLCJwdXNoIiwib24iLCJyZW1vdmVIYW5kbGVyIiwiZXF1YWxzIiwiZGVzdHJveSIsInNwbGljZSIsImNsZWFyIiwiYWN0aW9uIiwiVXRpbCIsImlzRnVuY3Rpb24iLCJNZWRpYVF1ZXJ5RGlzcGF0Y2giLCJFcnJvciIsInF1ZXJpZXMiLCJicm93c2VySXNJbmNhcGFibGUiLCJjb25zdHJ1Y3RvciIsInEiLCJzaG91bGREZWdyYWRlIiwiZGVmZXJTZXR1cCIsInNldHVwIiwiaW5pdGlhbGlzZWQiLCJvZmYiLCJjb2xsZWN0aW9uIiwiZm4iLCJjb250IiwidG9TdHJpbmciLCJhcHBseSIsInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwiZ2xvYmFsIiwiZGVmYXVsdHMiLCJzcmMiLCJzcmNzZXQiLCJzZWxlY3RvciIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJleHRlbmQiLCJleHRlbmRlZCIsImRlZXAiLCJjYWxsIiwibWVyZ2UiLCJvYmoiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJMYXp5TG9hZCIsImltYWdlcyIsInNldHRpbmdzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImxvYWRJbWFnZXMiLCJvYnNlcnZlckNvbmZpZyIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwib2JzZXJ2ZSIsImxvYWRBbmREZXN0cm95IiwiZGlzY29ubmVjdCIsImxhenlsb2FkIiwialF1ZXJ5IiwiJCIsImF0dHJpYnV0ZSIsIm1ha2VBcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJtaW5MZW4iLCJuYW1lIiwidGVzdCIsImxlbiIsImFycjIiLCJNaWNyb01vZGFsIiwiRk9DVVNBQkxFX0VMRU1FTlRTIiwiTW9kYWwiLCJfcmVmIiwidGFyZ2V0TW9kYWwiLCJfcmVmJHRyaWdnZXJzIiwidHJpZ2dlcnMiLCJfcmVmJG9uU2hvdyIsIm9uU2hvdyIsIl9yZWYkb25DbG9zZSIsIm9uQ2xvc2UiLCJfcmVmJG9wZW5UcmlnZ2VyIiwib3BlblRyaWdnZXIiLCJfcmVmJGNsb3NlVHJpZ2dlciIsImNsb3NlVHJpZ2dlciIsIl9yZWYkb3BlbkNsYXNzIiwib3BlbkNsYXNzIiwiX3JlZiRkaXNhYmxlU2Nyb2xsIiwiZGlzYWJsZVNjcm9sbCIsIl9yZWYkZGlzYWJsZUZvY3VzIiwiZGlzYWJsZUZvY3VzIiwiX3JlZiRhd2FpdENsb3NlQW5pbWF0IiwiYXdhaXRDbG9zZUFuaW1hdGlvbiIsIl9yZWYkYXdhaXRPcGVuQW5pbWF0aSIsImF3YWl0T3BlbkFuaW1hdGlvbiIsIl9yZWYkZGVidWdNb2RlIiwiZGVidWdNb2RlIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsInJlZ2lzdGVyVHJpZ2dlcnMiLCJvbkNsaWNrIiwib25LZXlkb3duIiwiX3RoaXMiLCJfbGVuIiwiX2tleSIsImZpbHRlciIsIkJvb2xlYW4iLCJ0cmlnZ2VyIiwiZXZlbnQiLCJzaG93TW9kYWwiLCJfdGhpczIiLCJhY3RpdmVFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3VyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzZXRGb2N1c1RvRmlyc3ROb2RlIiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZm9jdXMiLCJjbG9zZU1vZGFsQnlJZCIsImJvZHkiLCJhc3NpZ24iLCJvdmVyZmxvdyIsImhhc0F0dHJpYnV0ZSIsInJldGFpbkZvY3VzIiwiZ2V0Rm9jdXNhYmxlTm9kZXMiLCJub2RlcyIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJmb2N1c2VkSXRlbUluZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwiYWN0aXZlTW9kYWwiLCJnZW5lcmF0ZVRyaWdnZXJNYXAiLCJ0cmlnZ2VyQXR0ciIsInRyaWdnZXJNYXAiLCJhdHRyaWJ1dGVzIiwidmFsaWRhdGVNb2RhbFByZXNlbmNlIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInZhbGlkYXRlVHJpZ2dlclByZXNlbmNlIiwidmFsaWRhdGVBcmdzIiwic2hvdyIsImNsb3NlIiwiZyIsIkZ1bmN0aW9uIiwib3duUHJvcHMiLCJrZXlzIiwicmVzQXJyYXkiLCJodG1sIiwibWVkaWFRdWVyaWVzIiwic20iLCJtb2IiLCJ0YWIiLCJsYXAiLCJkZXMiLCJsZyIsInhsIiwibGFuZHNjYXBlIiwicG90cmFpdCIsImJyZWFrcG9pbnQiLCJtZWRpYXF1ZXJ5IiwiZW5xdWlyZSIsImluZm8iLCJuYXZTbGlkZSIsImJ1cmdlciIsIm5hdiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7QUFRYTs7QUFBQSxDQUFDLFVBQVNBLENBQVQsRUFBVztBQUFDLFdBQVNDLENBQVQsQ0FBV0MsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxRQUFJQyxDQUFDLEdBQUMsSUFBTjtBQUFBLFFBQVdDLENBQUMsR0FBQztBQUFDQyxVQUFJLEVBQUMsZ0JBQVU7QUFBQyxZQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY04sQ0FBZCxDQUFILEVBQW9CLE9BQU9BLENBQUMsQ0FBQ08sTUFBRixJQUFVUCxDQUFDLENB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O0FBRTZDO0FBQ3pEM0QsYUFBVyxFQUFFLGtCQUhEO0FBR3FCO0FBQ2pDRSxjQUFZLEVBQUUsbUJBSkY7QUFJdUI7QUFDbkNFLFdBQVMsRUFBRSxTQUxDO0FBS1U7QUFDdEJFLGVBQWEsRUFBRSxJQU5IO0FBTVM7QUFDckJFLGNBQVksRUFBRSxLQVBGO0FBT1M7QUFDckJJLG9CQUFrQixFQUFFLEtBUlI7QUFRZTtBQUMzQkYscUJBQW1CLEVBQUUsS0FUVDtBQVNnQjtBQUM1QkksV0FBUyxFQUFFLElBVkMsQ0FVSTs7QUFWSixDQUFoQixFOzs7Ozs7Ozs7OztBQ0ZBLElBQU13RSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCLE1BQU1DLE1BQU0sR0FBRy9SLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsTUFBTStSLEdBQUcsR0FBR2hTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBWjtBQUVBOFIsUUFBTSxDQUFDdlAsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBSTtBQUNwQ3dQLE9BQUcsQ0FBQ3hSLFNBQUosQ0FBY3NCLE1BQWQsQ0FBcUIsdUJBQXJCO0FBQ0EsR0FGRDtBQUdBLENBUEQsQyxDQVNBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiFcclxuICogQWNjb3JkaW9uIHYyLjguMFxyXG4gKiBTaW1wbGUgYWNjb3JkaW9uIGNyZWF0ZWQgaW4gcHVyZSBKYXZhc2NyaXB0LlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaHUyay9BY2NvcmRpb25cclxuICpcclxuICogQ29weXJpZ2h0IDIwMTctMjAxOSBNaWNoYcWCIFN0cnVtcGZcclxuICogUHVibGlzaGVkIHVuZGVyIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cInVzZSBzdHJpY3RcIjshZnVuY3Rpb24oaSl7ZnVuY3Rpb24gdShvLGwpe3ZhciBjPXRoaXMsdD17aW5pdDpmdW5jdGlvbigpe2lmKEFycmF5LmlzQXJyYXkobykpcmV0dXJuIG8ubGVuZ3RoJiZvLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gbmV3IHUoZSxsKX0pLCExO3RoaXMub3B0aW9ucz1oKHtkdXJhdGlvbjo2MDAsaXRlbU51bWJlcjowLGFyaWE6ITAsY2xvc2VPdGhlcnM6ITAsc2hvd0l0ZW06ITEsZWxlbWVudENsYXNzOlwiYWNcIixxdWVzdGlvbkNsYXNzOlwiYWMtcVwiLGFuc3dlckNsYXNzOlwiYWMtYVwiLHRhcmdldENsYXNzOlwiYWMtdGFyZ2V0XCIsb25Ub2dnbGU6ZnVuY3Rpb24oKXt9fSxsKSx0aGlzLmNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8pLHRoaXMuZWxlbWVudHM9dGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm9wdGlvbnMuZWxlbWVudENsYXNzKTt2YXIgZT10aGlzLm9wdGlvbnMsdD1lLmFyaWEsbj1lLnNob3dJdGVtLGk9ZS5pdGVtTnVtYmVyO3QmJnRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYmxpc3RcIik7Zm9yKHZhciBzPTA7czx0aGlzLmVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciByPXRoaXMuZWxlbWVudHNbc107ci5jbGFzc0xpc3QuYWRkKFwianMtZW5hYmxlZFwiKSx0aGlzLmhpZGVFbGVtZW50KHIpLHRoaXMuc2V0VHJhbnNpdGlvbihyKSx0aGlzLmdlbmVyYXRlSUQociksdCYmdGhpcy5zZXRBUklBKHIpfWlmKG4pe3ZhciBhPXRoaXMuZWxlbWVudHNbMF07XCJudW1iZXJcIj09dHlwZW9mIGkmJmk8dGhpcy5lbGVtZW50cy5sZW5ndGgmJihhPXRoaXMuZWxlbWVudHNbaV0pLHRoaXMudG9nZ2xlRWxlbWVudChhLCExKX1jLmF0dGFjaEV2ZW50cygpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucyxuPXQuZHVyYXRpb24saT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpLHI9YShcInRyYW5zaXRpb25cIik7cy5zdHlsZVtyXT1uK1wibXNcIn0sZ2VuZXJhdGVJRDpmdW5jdGlvbihlKXtlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhYy1cIi5jb25jYXQocykpLHMrK30sc2V0QVJJQTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMsbj10LnF1ZXN0aW9uQ2xhc3MsaT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK24pLHI9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpO3Muc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFiXCIpLHMuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJwYW5lbFwiKX0sdXBkYXRlQVJJQTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMub3B0aW9ucy5xdWVzdGlvbkNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIituKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsdCl9LGNhbGxTcGVjaWZpY0VsZW1lbnQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUudGFyZ2V0LG49dGhpcy5vcHRpb25zLGk9bi5xdWVzdGlvbkNsYXNzLHM9bi50YXJnZXRDbGFzcyxyPW4uY2xvc2VPdGhlcnMsYT0wO2E8dGhpcy5lbGVtZW50cy5sZW5ndGg7YSsrKWlmKHRoaXMuZWxlbWVudHNbYV0uY29udGFpbnModCkpeyh0LmNsYXNzTmFtZS5tYXRjaChpKXx8dC5jbGFzc05hbWUubWF0Y2gocykpJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHImJnRoaXMuY2xvc2VBbGxFbGVtZW50cyhhKSx0aGlzLnRvZ2dsZUVsZW1lbnQodGhpcy5lbGVtZW50c1thXSkpO2JyZWFrfX0saGlkZUVsZW1lbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLmFuc3dlckNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIit0KS5zdHlsZS5oZWlnaHQ9MH0sdG9nZ2xlRWxlbWVudDpmdW5jdGlvbihlLHQpe3ZhciBuLGk9ISgxPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQpfHx0LHM9dGhpcy5vcHRpb25zLHI9cy5hbnN3ZXJDbGFzcyxhPXMuYXJpYSxvPXMub25Ub2dnbGUsbD1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrciksYz1sLnNjcm9sbEhlaWdodDtlLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIiksaXx8KGwuc3R5bGUuaGVpZ2h0PVwiYXV0b1wiKSwwPHBhcnNlSW50KGwuc3R5bGUuaGVpZ2h0KT8obj0hMSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsLnN0eWxlLmhlaWdodD0wfSkpOihuPSEwLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2wuc3R5bGUuaGVpZ2h0PWMrXCJweFwifSkpLGEmJnRoaXMudXBkYXRlQVJJQShlLG4pLGkmJm8oZSx0aGlzLmVsZW1lbnRzKX0sY2xvc2VBbGxFbGVtZW50czpmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy5vcHRpb25zLmFyaWEsbj10aGlzLmVsZW1lbnRzLmxlbmd0aCxpPTA7aTxuO2krKylpZihpIT1lKXt2YXIgcz10aGlzLmVsZW1lbnRzW2ldO3MuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpJiZzLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIiksdCYmdGhpcy51cGRhdGVBUklBKHMsITEpLHRoaXMuaGlkZUVsZW1lbnQocyl9fSxyZXNpemVIYW5kbGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQsbj10aGlzLm9wdGlvbnMsaT1uLmVsZW1lbnRDbGFzcyxzPW4uYW5zd2VyQ2xhc3Mscj10aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2krXCIuaXMtYWN0aXZlXCIpLGE9MDthPHIubGVuZ3RoO2ErKyl0PXJbYV0ucXVlcnlTZWxlY3RvcihcIi5cIitzKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnN0eWxlLmhlaWdodD1cImF1dG9cIixlPXQub2Zmc2V0SGVpZ2h0LHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3Quc3R5bGUuaGVpZ2h0PWUrXCJweFwifSl9KX0sY2xpY2tIYW5kbGVyOmZ1bmN0aW9uKGUpe3RoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX0sa2V5ZG93bkhhbmRsZXI6ZnVuY3Rpb24oZSl7MTM9PT1lLmtleUNvZGUmJnRoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX19O3RoaXMuYXR0YWNoRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dDtlLmNsaWNrSGFuZGxlcj1lLmNsaWNrSGFuZGxlci5iaW5kKGUpLGUua2V5ZG93bkhhbmRsZXI9ZS5rZXlkb3duSGFuZGxlci5iaW5kKGUpLGUucmVzaXplSGFuZGxlcj1lLnJlc2l6ZUhhbmRsZXIuYmluZChlKSxlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlLmNsaWNrSGFuZGxlciksZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixlLmtleWRvd25IYW5kbGVyKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixlLnJlc2l6ZUhhbmRsZXIpfSx0aGlzLmRldGFjaEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXQ7ZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZS5rZXlkb3duSGFuZGxlciksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5yZXNpemVIYW5kbGVyKX07dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVtlXT9lOihlPW4oZSksZT1cIndlYmtpdFwiLmNvbmNhdChlKSl9LG49ZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKX0saD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KWVbbl09dFtuXTtyZXR1cm4gZX07aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGkud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXtpLnNldFRpbWVvdXQoZSwxZTMvNjApfSx0LmluaXQoKX12YXIgcz0wO1widW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJnZvaWQgMCE9PW1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXU6aS5BY2NvcmRpb249dX0od2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVucXVpcmVTY3JlZW4gPSBlbnF1aXJlU2NyZWVuO1xuZXhwb3J0cy51bmVucXVpcmVTY3JlZW4gPSB1bmVucXVpcmVTY3JlZW47XG52YXIgZW5xdWlyZUpzID0gdm9pZCAwO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBtYXRjaE1lZGlhUG9seWZpbGwgPSBmdW5jdGlvbiBtYXRjaE1lZGlhUG9seWZpbGwobWVkaWFRdWVyeSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZWRpYTogbWVkaWFRdWVyeSxcbiAgICAgIG1hdGNoZXM6IGZhbHNlLFxuICAgICAgYWRkTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZExpc3RlbmVyKCkge30sXG4gICAgICByZW1vdmVMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKSB7fVxuICAgIH07XG4gIH07XG4gIHdpbmRvdy5tYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEgfHwgbWF0Y2hNZWRpYVBvbHlmaWxsO1xuICBlbnF1aXJlSnMgPSByZXF1aXJlKCdlbnF1aXJlLmpzJyk7XG59XG5cbnZhciBtb2JpbGVRdWVyeSA9ICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk5cHgpJztcblxuZnVuY3Rpb24gZW5xdWlyZVNjcmVlbihjYikge1xuICB2YXIgcXVlcnkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG1vYmlsZVF1ZXJ5O1xuXG4gIGlmICghZW5xdWlyZUpzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSB7XG4gICAgbWF0Y2g6IGZ1bmN0aW9uIG1hdGNoKCkge1xuICAgICAgY2IgJiYgY2IodHJ1ZSk7XG4gICAgfSxcbiAgICB1bm1hdGNoOiBmdW5jdGlvbiB1bm1hdGNoKCkge1xuICAgICAgY2IgJiYgY2IoKTtcbiAgICB9XG4gIH07XG4gIGVucXVpcmVKcy5yZWdpc3RlcihxdWVyeSwgaGFuZGxlcik7XG4gIHJldHVybiBoYW5kbGVyO1xufVxuXG5mdW5jdGlvbiB1bmVucXVpcmVTY3JlZW4oaGFuZGxlcikge1xuICB2YXIgcXVlcnkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG1vYmlsZVF1ZXJ5O1xuXG4gIGlmICghZW5xdWlyZUpzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVucXVpcmVKcy51bnJlZ2lzdGVyKHF1ZXJ5LCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZW5xdWlyZUpzO1xuIiwidmFyIFF1ZXJ5SGFuZGxlciA9IHJlcXVpcmUoJy4vUXVlcnlIYW5kbGVyJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4vVXRpbCcpLmVhY2g7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBtZWRpYSBxdWVyeSwgbWFuYWdlcyBpdCdzIHN0YXRlIGFuZCByZWdpc3RlcmVkIGhhbmRsZXJzIGZvciB0aGlzIHF1ZXJ5XG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIG1lZGlhIHF1ZXJ5IHN0cmluZ1xuICogQHBhcmFtIHtib29sZWFufSBbaXNVbmNvbmRpdGlvbmFsPWZhbHNlXSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgcnVuIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgY29uZGl0aW9ucyBhcmUgbWV0LiBQcmltYXJpbHkgZm9yIGhlbHBpbmcgb2xkZXIgYnJvd3NlcnMgZGVhbCB3aXRoIG1vYmlsZS1maXJzdCBkZXNpZ25cbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeShxdWVyeSwgaXNVbmNvbmRpdGlvbmFsKSB7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaXNVbmNvbmRpdGlvbmFsID0gaXNVbmNvbmRpdGlvbmFsO1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24obXFsKSB7XG4gICAgICAgIC8vIENocm9tZSBwYXNzZXMgYW4gTWVkaWFRdWVyeUxpc3RFdmVudCBvYmplY3QsIHdoaWxlIG90aGVyIGJyb3dzZXJzIHBhc3MgTWVkaWFRdWVyeUxpc3QgZGlyZWN0bHlcbiAgICAgICAgc2VsZi5tcWwgPSBtcWwuY3VycmVudFRhcmdldCB8fCBtcWw7XG4gICAgICAgIHNlbGYuYXNzZXNzKCk7XG4gICAgfTtcbiAgICB0aGlzLm1xbC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbn1cblxuTWVkaWFRdWVyeS5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHVjdG9yIDogTWVkaWFRdWVyeSxcblxuICAgIC8qKlxuICAgICAqIGFkZCBhIGhhbmRsZXIgZm9yIHRoaXMgcXVlcnksIHRyaWdnZXJpbmcgaWYgYWxyZWFkeSBhY3RpdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlci51bm1hdGNoXSBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBkZWFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnNldHVwXSBjYWxsYmFjayBmb3IgaW1tZWRpYXRlIGV4ZWN1dGlvbiB3aGVuIGEgcXVlcnkgaGFuZGxlciBpcyByZWdpc3RlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaGFuZGxlci5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIGRlZmVycmVkIHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBoYW5kbGVyIGlzIG1hdGNoZWQ/XG4gICAgICovXG4gICAgYWRkSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHFoID0gbmV3IFF1ZXJ5SGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKHFoKTtcblxuICAgICAgICB0aGlzLm1hdGNoZXMoKSAmJiBxaC5vbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVzIHRoZSBnaXZlbiBoYW5kbGVyIGZyb20gdGhlIGNvbGxlY3Rpb24sIGFuZCBjYWxscyBpdCdzIGRlc3Ryb3kgbWV0aG9kc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IGhhbmRsZXIgdGhlIGhhbmRsZXIgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycztcbiAgICAgICAgZWFjaChoYW5kbGVycywgZnVuY3Rpb24oaCwgaSkge1xuICAgICAgICAgICAgaWYoaC5lcXVhbHMoaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWhhbmRsZXJzLnNwbGljZShpLDEpOyAvL3JlbW92ZSBmcm9tIGFycmF5IGFuZCBleGl0IGVhY2ggZWFybHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgYmUgY29uc2lkZXJlZCBhIG1hdGNoXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIG1lZGlhIHF1ZXJ5IGNhbiBiZSBjb25zaWRlcmVkIGEgbWF0Y2gsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIG1hdGNoZXMgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXFsLm1hdGNoZXMgfHwgdGhpcy5pc1VuY29uZGl0aW9uYWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgaGFuZGxlcnMgYW5kIHVuYmluZHMgZXZlbnRzXG4gICAgICovXG4gICAgY2xlYXIgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmxlbmd0aCA9IDA7IC8vY2xlYXIgYXJyYXlcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgKiBBc3Nlc3NlcyB0aGUgcXVlcnksIHR1cm5pbmcgb24gYWxsIGhhbmRsZXJzIGlmIGl0IG1hdGNoZXMsIHR1cm5pbmcgdGhlbSBvZmYgaWYgaXQgZG9lc24ndCBtYXRjaFxuICAgICAgICAqL1xuICAgIGFzc2VzcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5tYXRjaGVzKCkgPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyW2FjdGlvbl0oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVF1ZXJ5O1xuIiwidmFyIE1lZGlhUXVlcnkgPSByZXF1aXJlKCcuL01lZGlhUXVlcnknKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG52YXIgZWFjaCA9IFV0aWwuZWFjaDtcbnZhciBpc0Z1bmN0aW9uID0gVXRpbC5pc0Z1bmN0aW9uO1xudmFyIGlzQXJyYXkgPSBVdGlsLmlzQXJyYXk7XG5cbi8qKlxuICogQWxsb3dzIGZvciByZWdpc3RyYXRpb24gb2YgcXVlcnkgaGFuZGxlcnMuXG4gKiBNYW5hZ2VzIHRoZSBxdWVyeSBoYW5kbGVyJ3Mgc3RhdGUgYW5kIGlzIHJlc3BvbnNpYmxlIGZvciB3aXJpbmcgdXAgYnJvd3NlciBldmVudHNcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeURpc3BhdGNoICgpIHtcbiAgICBpZighd2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXRjaE1lZGlhIG5vdCBwcmVzZW50LCBsZWdhY3kgYnJvd3NlcnMgcmVxdWlyZSBhIHBvbHlmaWxsJyk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyaWVzID0ge307XG4gICAgdGhpcy5icm93c2VySXNJbmNhcGFibGUgPSAhd2luZG93Lm1hdGNoTWVkaWEoJ29ubHkgYWxsJykubWF0Y2hlcztcbn1cblxuTWVkaWFRdWVyeURpc3BhdGNoLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yIDogTWVkaWFRdWVyeURpc3BhdGNoLFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgaGFuZGxlciBmb3IgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcSB0aGUgbWVkaWEgcXVlcnlcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBBcnJheSB8fCBGdW5jdGlvbn0gb3B0aW9ucyBlaXRoZXIgYSBzaW5nbGUgcXVlcnkgaGFuZGxlciBvYmplY3QsIGEgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mIHF1ZXJ5IGhhbmRsZXJzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBmaXJlZCB3aGVuIHF1ZXJ5IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy51bm1hdGNoXSBmaXJlZCB3aGVuIGEgcXVlcnkgaXMgbm8gbG9uZ2VyIG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gZmlyZWQgd2hlbiBoYW5kbGVyIGZpcnN0IHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gd2hldGhlciBzZXR1cCBzaG91bGQgYmUgcnVuIGltbWVkaWF0ZWx5IG9yIGRlZmVycmVkIHVudGlsIHF1ZXJ5IGlzIGZpcnN0IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzaG91bGREZWdyYWRlPWZhbHNlXSB3aGV0aGVyIHRoaXMgcGFydGljdWxhciBtZWRpYSBxdWVyeSBzaG91bGQgYWx3YXlzIHJ1biBvbiBpbmNhcGFibGUgYnJvd3NlcnNcbiAgICAgKi9cbiAgICByZWdpc3RlciA6IGZ1bmN0aW9uKHEsIG9wdGlvbnMsIHNob3VsZERlZ3JhZGUpIHtcbiAgICAgICAgdmFyIHF1ZXJpZXMgICAgICAgICA9IHRoaXMucXVlcmllcyxcbiAgICAgICAgICAgIGlzVW5jb25kaXRpb25hbCA9IHNob3VsZERlZ3JhZGUgJiYgdGhpcy5icm93c2VySXNJbmNhcGFibGU7XG5cbiAgICAgICAgaWYoIXF1ZXJpZXNbcV0pIHtcbiAgICAgICAgICAgIHF1ZXJpZXNbcV0gPSBuZXcgTWVkaWFRdWVyeShxLCBpc1VuY29uZGl0aW9uYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ub3JtYWxpc2UgdG8gb2JqZWN0IGluIGFuIGFycmF5XG4gICAgICAgIGlmKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1hdGNoIDogb3B0aW9ucyB9O1xuICAgICAgICB9XG4gICAgICAgIGlmKCFpc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gW29wdGlvbnNdO1xuICAgICAgICB9XG4gICAgICAgIGVhY2gob3B0aW9ucywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0geyBtYXRjaCA6IGhhbmRsZXIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXJpZXNbcV0uYWRkSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHVucmVnaXN0ZXJzIGEgcXVlcnkgYW5kIGFsbCBpdCdzIGhhbmRsZXJzLCBvciBhIHNwZWNpZmljIGhhbmRsZXIgZm9yIGEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeSB0byB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gW2hhbmRsZXJdIHNwZWNpZmljIGhhbmRsZXIgdG8gdW5yZWdpc3RlclxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1txXTtcblxuICAgICAgICBpZihxdWVyeSkge1xuICAgICAgICAgICAgaWYoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnJlbW92ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJpZXNbcV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnlEaXNwYXRjaDtcbiIsIi8qKlxuICogRGVsZWdhdGUgdG8gaGFuZGxlIGEgbWVkaWEgcXVlcnkgYmVpbmcgbWF0Y2hlZCBhbmQgdW5tYXRjaGVkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hdGNoIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy51bm1hdGNoXSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgdW5tYXRjaGVkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gb25lLXRpbWUgY2FsbGJhY2sgdHJpZ2dlcmVkIHRoZSBmaXJzdCB0aW1lIGEgcXVlcnkgaXMgbWF0Y2hlZFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIHJ1biBpbW1lZGlhdGVseSwgcmF0aGVyIHRoYW4gZmlyc3QgdGltZSBxdWVyeSBpcyBtYXRjaGVkP1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFF1ZXJ5SGFuZGxlcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAhb3B0aW9ucy5kZWZlclNldHVwICYmIHRoaXMuc2V0dXAoKTtcbn1cblxuUXVlcnlIYW5kbGVyLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yIDogUXVlcnlIYW5kbGVyLFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldHVwIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5zZXR1cCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHNldHVwIGFuZCB0cmlnZ2VyaW5nIG9mIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAhdGhpcy5pbml0aWFsaXNlZCAmJiB0aGlzLnNldHVwKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXRjaCAmJiB0aGlzLm9wdGlvbnMubWF0Y2goKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgdGhlIHVubWF0Y2ggZXZlbnQgZm9yIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvZmYgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnVubWF0Y2ggJiYgdGhpcy5vcHRpb25zLnVubWF0Y2goKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY2FsbGVkIHdoZW4gYSBoYW5kbGVyIGlzIHRvIGJlIGRlc3Ryb3llZC5cbiAgICAgKiBkZWxlZ2F0ZXMgdG8gdGhlIGRlc3Ryb3kgb3IgdW5tYXRjaCBjYWxsYmFja3MsIGRlcGVuZGluZyBvbiBhdmFpbGFiaWxpdHkuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBkZXN0cm95IDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kZXN0cm95ID8gdGhpcy5vcHRpb25zLmRlc3Ryb3koKSA6IHRoaXMub2ZmKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgZXF1YWxpdHkgYnkgcmVmZXJlbmNlLlxuICAgICAqIGlmIG9iamVjdCBpcyBzdXBwbGllZCBjb21wYXJlIG9wdGlvbnMsIGlmIGZ1bmN0aW9uLCBjb21wYXJlIG1hdGNoIGNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gW3RhcmdldF0gdGhlIHRhcmdldCBmb3IgY29tcGFyaXNvblxuICAgICAqL1xuICAgIGVxdWFscyA6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zID09PSB0YXJnZXQgfHwgdGhpcy5vcHRpb25zLm1hdGNoID09PSB0YXJnZXQ7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5SGFuZGxlcjtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBpdGVyYXRpbmcgb3ZlciBhIGNvbGxlY3Rpb25cbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvblxuICogQHBhcmFtIGZuXG4gKi9cbmZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgZm4pIHtcbiAgICB2YXIgaSAgICAgID0gMCxcbiAgICAgICAgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGNvbnQ7XG5cbiAgICBmb3IoaTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnQgPSBmbihjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgaWYoY29udCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrOyAvL2FsbG93IGVhcmx5IGV4aXRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh0YXJnZXQpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlzRnVuY3Rpb24gOiBpc0Z1bmN0aW9uLFxuICAgIGlzQXJyYXkgOiBpc0FycmF5LFxuICAgIGVhY2ggOiBlYWNoXG59O1xuIiwidmFyIE1lZGlhUXVlcnlEaXNwYXRjaCA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeURpc3BhdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBNZWRpYVF1ZXJ5RGlzcGF0Y2goKTtcbiIsIi8qIVxuICogTGF6eSBMb2FkIC0gSmF2YVNjcmlwdCBwbHVnaW4gZm9yIGxhenkgbG9hZGluZyBpbWFnZXNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOSBNaWthIFR1dXBvbGFcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuICogUHJvamVjdCBob21lOlxuICogICBodHRwczovL2FwcGVsc2lpbmkubmV0L3Byb2plY3RzL2xhenlsb2FkXG4gKlxuICogVmVyc2lvbjogMi4wLjAtcmMuMlxuICpcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LkxhenlMb2FkID0gZmFjdG9yeShyb290KTtcbiAgICB9XG59KSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMud2luZG93IHx8IHRoaXMuZ2xvYmFsLCBmdW5jdGlvbiAocm9vdCkge1xuXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpe1xuICAgICAgICByb290ID0gd2luZG93O1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBzcmM6IFwiZGF0YS1zcmNcIixcbiAgICAgICAgc3Jjc2V0OiBcImRhdGEtc3Jjc2V0XCIsXG4gICAgICAgIHNlbGVjdG9yOiBcIi5sYXp5bG9hZFwiLFxuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiBcIjBweFwiLFxuICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBNZXJnZSB0d28gb3IgbW9yZSBvYmplY3RzLiBSZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0ge0Jvb2xlYW59ICBkZWVwICAgICBJZiB0cnVlLCBkbyBhIGRlZXAgKG9yIHJlY3Vyc2l2ZSkgbWVyZ2UgW29wdGlvbmFsXVxuICAgICogQHBhcmFtIHtPYmplY3R9ICAgb2JqZWN0cyAgVGhlIG9iamVjdHMgdG8gbWVyZ2UgdG9nZXRoZXJcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9ICAgICAgICAgIE1lcmdlZCB2YWx1ZXMgb2YgZGVmYXVsdHMgYW5kIG9wdGlvbnNcbiAgICAqL1xuICAgIGNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uICgpICB7XG5cbiAgICAgICAgbGV0IGV4dGVuZGVkID0ge307XG4gICAgICAgIGxldCBkZWVwID0gZmFsc2U7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgICAgICAgLyogQ2hlY2sgaWYgYSBkZWVwIG1lcmdlICovXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzWzBdKSA9PT0gXCJbb2JqZWN0IEJvb2xlYW5dXCIpIHtcbiAgICAgICAgICAgIGRlZXAgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBNZXJnZSB0aGUgb2JqZWN0IGludG8gdGhlIGV4dGVuZGVkIG9iamVjdCAqL1xuICAgICAgICBsZXQgbWVyZ2UgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAvKiBJZiBkZWVwIG1lcmdlIGFuZCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QsIG1lcmdlIHByb3BlcnRpZXMgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZXAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtwcm9wXSkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gZXh0ZW5kKHRydWUsIGV4dGVuZGVkW3Byb3BdLCBvYmpbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyogTG9vcCB0aHJvdWdoIGVhY2ggb2JqZWN0IGFuZCBjb25kdWN0IGEgbWVyZ2UgKi9cbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIG1lcmdlKG9iaik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXh0ZW5kZWQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIExhenlMb2FkKGltYWdlcywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXMgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLnNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIExhenlMb2FkLnByb3RvdHlwZSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8qIFdpdGhvdXQgb2JzZXJ2ZXJzIGxvYWQgZXZlcnl0aGluZyBhbmQgYmFpbCBvdXQgZWFybHkuICovXG4gICAgICAgICAgICBpZiAoIXJvb3QuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGxldCBvYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICByb290OiB0aGlzLnNldHRpbmdzLnJvb3QsXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpbjogdGhpcy5zZXR0aW5ncy5yb290TWFyZ2luLFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogW3RoaXMuc2V0dGluZ3MudGhyZXNob2xkXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbnRyaWVzLCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyYyA9IGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyY3NldCA9IGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmNzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiaW1nXCIgPT09IGVudHJ5LnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnNyY3NldCA9IHNyY3NldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIHNyYyArIFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBvYnNlcnZlckNvbmZpZyk7XG5cbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5pbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkQW5kRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkSW1hZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5pbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIGxldCBzcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmMpO1xuICAgICAgICAgICAgICAgIGxldCBzcmNzZXQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmNzZXQpO1xuICAgICAgICAgICAgICAgIGlmIChcImltZ1wiID09PSBpbWFnZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIHNyYyArIFwiJylcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QubGF6eWxvYWQgPSBmdW5jdGlvbihpbWFnZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMYXp5TG9hZChpbWFnZXMsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBpZiAocm9vdC5qUXVlcnkpIHtcbiAgICAgICAgY29uc3QgJCA9IHJvb3QualF1ZXJ5O1xuICAgICAgICAkLmZuLmxhenlsb2FkID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZSB8fCBcImRhdGEtc3JjXCI7XG4gICAgICAgICAgICBuZXcgTGF6eUxvYWQoJC5tYWtlQXJyYXkodGhpcyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIExhenlMb2FkO1xufSk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIE1pY3JvTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIEZPQ1VTQUJMRV9FTEVNRU5UUyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ107XG5cbiAgdmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChfcmVmKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSBfcmVmLnRhcmdldE1vZGFsLFxuICAgICAgICAgIF9yZWYkdHJpZ2dlcnMgPSBfcmVmLnRyaWdnZXJzLFxuICAgICAgICAgIHRyaWdnZXJzID0gX3JlZiR0cmlnZ2VycyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHRyaWdnZXJzLFxuICAgICAgICAgIF9yZWYkb25TaG93ID0gX3JlZi5vblNob3csXG4gICAgICAgICAgb25TaG93ID0gX3JlZiRvblNob3cgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvblNob3csXG4gICAgICAgICAgX3JlZiRvbkNsb3NlID0gX3JlZi5vbkNsb3NlLFxuICAgICAgICAgIG9uQ2xvc2UgPSBfcmVmJG9uQ2xvc2UgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvbkNsb3NlLFxuICAgICAgICAgIF9yZWYkb3BlblRyaWdnZXIgPSBfcmVmLm9wZW5UcmlnZ2VyLFxuICAgICAgICAgIG9wZW5UcmlnZ2VyID0gX3JlZiRvcGVuVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJyA6IF9yZWYkb3BlblRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRjbG9zZVRyaWdnZXIgPSBfcmVmLmNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBjbG9zZVRyaWdnZXIgPSBfcmVmJGNsb3NlVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC1jbG9zZScgOiBfcmVmJGNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJG9wZW5DbGFzcyA9IF9yZWYub3BlbkNsYXNzLFxuICAgICAgICAgIG9wZW5DbGFzcyA9IF9yZWYkb3BlbkNsYXNzID09PSB2b2lkIDAgPyAnaXMtb3BlbicgOiBfcmVmJG9wZW5DbGFzcyxcbiAgICAgICAgICBfcmVmJGRpc2FibGVTY3JvbGwgPSBfcmVmLmRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgZGlzYWJsZVNjcm9sbCA9IF9yZWYkZGlzYWJsZVNjcm9sbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlRm9jdXMgPSBfcmVmLmRpc2FibGVGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlRm9jdXMgPSBfcmVmJGRpc2FibGVGb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVGb2N1cyxcbiAgICAgICAgICBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPSBfcmVmLmF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbiA9IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0Q2xvc2VBbmltYXQsXG4gICAgICAgICAgX3JlZiRhd2FpdE9wZW5BbmltYXRpID0gX3JlZi5hd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uID0gX3JlZiRhd2FpdE9wZW5BbmltYXRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSxcbiAgICAgICAgICBfcmVmJGRlYnVnTW9kZSA9IF9yZWYuZGVidWdNb2RlLFxuICAgICAgICAgIGRlYnVnTW9kZSA9IF9yZWYkZGVidWdNb2RlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVidWdNb2RlO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIG9mIHRoZSBtb2RhbFxuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTsgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcGFzc2VkIGNvbmZpZ1xuXG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgZGVidWdNb2RlOiBkZWJ1Z01vZGUsXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IGRpc2FibGVTY3JvbGwsXG4gICAgICAgIG9wZW5UcmlnZ2VyOiBvcGVuVHJpZ2dlcixcbiAgICAgICAgY2xvc2VUcmlnZ2VyOiBjbG9zZVRyaWdnZXIsXG4gICAgICAgIG9wZW5DbGFzczogb3BlbkNsYXNzLFxuICAgICAgICBvblNob3c6IG9uU2hvdyxcbiAgICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBhd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgIGRpc2FibGVGb2N1czogZGlzYWJsZUZvY3VzXG4gICAgICB9OyAvLyBSZWdpc3RlciBjbGljayBldmVudHMgb25seSBpZiBwcmUgYmluZGluZyBldmVudExpc3RlbmVyc1xuXG4gICAgICBpZiAodHJpZ2dlcnMubGVuZ3RoID4gMCkgdGhpcy5yZWdpc3RlclRyaWdnZXJzLmFwcGx5KHRoaXMsIF90b0NvbnN1bWFibGVBcnJheSh0cmlnZ2VycykpOyAvLyBwcmUgYmluZCBmdW5jdGlvbnMgZm9yIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMub25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9vcHMgdGhyb3VnaCBhbGwgb3BlblRyaWdnZXJzIGFuZCBiaW5kcyBjbGljayBldmVudFxuICAgICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBbQXJyYXkgb2Ygbm9kZSBlbGVtZW50c11cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAgICBrZXk6IFwicmVnaXN0ZXJUcmlnZ2Vyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVHJpZ2dlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyaWdnZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIHRyaWdnZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlcnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd01vZGFsKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNob3dNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdkaXNhYmxlJyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRPcGVuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgX3RoaXMyLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgX3RoaXMyLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vblNob3codGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHZhciBtb2RhbCA9IHRoaXMubW9kYWw7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2VuYWJsZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdENsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wZW5DbGFzcyA9IHRoaXMuY29uZmlnLm9wZW5DbGFzczsgLy8gPC0gb2xkIHNjaG9vbCBmdHdcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUob3BlbkNsYXNzKTtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxCeUlkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTtcbiAgICAgICAgaWYgKHRoaXMubW9kYWwpIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzY3JvbGxCZWhhdmlvdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxCZWhhdmlvdXIodG9nZ2xlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZVNjcm9sbCkgcmV0dXJuO1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgICAgICBzd2l0Y2ggKHRvZ2dsZSkge1xuICAgICAgICAgIGNhc2UgJ2VuYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZEV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5oYXNBdHRyaWJ1dGUodGhpcy5jb25maWcuY2xvc2VUcmlnZ2VyKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25LZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTsgLy8gZXNjXG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHRoaXMucmV0YWluRm9jdXMoZXZlbnQpOyAvLyB0YWJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Rm9jdXNhYmxlTm9kZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2FibGVOb2RlcygpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UUyk7XG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShub2RlcykpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUcmllcyB0byBzZXQgZm9jdXMgb24gYSBub2RlIHdoaWNoIGlzIG5vdCBhIGNsb3NlIHRyaWdnZXJcbiAgICAgICAqIGlmIG5vIG90aGVyIG5vZGVzIGV4aXN0IHRoZW4gZm9jdXNlcyBvbiBmaXJzdCBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRGb2N1c1RvRmlyc3ROb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRpc2FibGVGb2N1cykgcmV0dXJuO1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjsgLy8gcmVtb3ZlIG5vZGVzIG9uIHdob3NlIGNsaWNrLCB0aGUgbW9kYWwgY2xvc2VzXG4gICAgICAgIC8vIGNvdWxkIG5vdCB0aGluayBvZiBhIGJldHRlciBuYW1lIDooXG5cbiAgICAgICAgdmFyIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKF90aGlzMy5jb25maWcuY2xvc2VUcmlnZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA+IDApIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHNbMF0uZm9jdXMoKTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID09PSAwKSBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXRhaW5Gb2N1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldGFpbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlsdGVycyBub2RlcyB3aGljaCBhcmUgaGlkZGVuIHRvIHByZXZlbnRcbiAgICAgICAgICogZm9jdXMgbGVhayBvdXRzaWRlIG1vZGFsXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICAgICAgICB9KTsgLy8gaWYgZGlzYWJsZUZvY3VzIGlzIHRydWVcblxuICAgICAgICBpZiAoIXRoaXMubW9kYWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlTm9kZXMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1tmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA+IDAgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1vZGFsO1xuICB9KCk7XG4gIC8qKlxuICAgKiBNb2RhbCBwcm90b3R5cGUgZW5kcy5cbiAgICogSGVyZSBvbiBjb2RlIGlzIHJlc3BvbnNpYmxlIGZvciBkZXRlY3RpbmcgYW5kXG4gICAqIGF1dG8gYmluZGluZyBldmVudCBoYW5kbGVycyBvbiBtb2RhbCB0cmlnZ2Vyc1xuICAgKi9cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3BlbmVkIG1vZGFsXG5cblxuICB2YXIgYWN0aXZlTW9kYWwgPSBudWxsO1xuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgaXQnc1xuICAgKiByZXNwZWN0aXZlIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgICAgQW4gYXJyYXkgb2YgYWxsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdHJpZ2dlckF0dHIgVGhlIGRhdGEtYXR0cmlidXRlIHdoaWNoIHRyaWdnZXJzIHRoZSBtb2R1bGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuXG4gIHZhciBnZW5lcmF0ZVRyaWdnZXJNYXAgPSBmdW5jdGlvbiBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIHRyaWdnZXJBdHRyKSB7XG4gICAgdmFyIHRyaWdnZXJNYXAgPSBbXTtcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSB0cmlnZ2VyLmF0dHJpYnV0ZXNbdHJpZ2dlckF0dHJdLnZhbHVlO1xuICAgICAgaWYgKHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID09PSB1bmRlZmluZWQpIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID0gW107XG4gICAgICB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXS5wdXNoKHRyaWdnZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmlnZ2VyTWFwO1xuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIHdoZXRoZXIgYSBtb2RhbCBvZiB0aGUgZ2l2ZW4gaWQgZXhpc3RzXG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCAgVGhlIGlkIG9mIHRoZSBtb2RhbFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1NlZW1zIGxpa2UgeW91IGhhdmUgbWlzc2VkICVjJ1wiLmNvbmNhdChpZCwgXCInXCIpLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnSUQgc29tZXdoZXJlIGluIHlvdXIgY29kZS4gUmVmZXIgZXhhbXBsZSBiZWxvdyB0byByZXNvbHZlIGl0LicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIiBpZD1cXFwiXCIuY29uY2F0KGlkLCBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgYXJlIG1vZGFsIHRyaWdnZXJzIHByZXNlbnRcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgQW4gYXJyYXkgb2YgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKSB7XG4gICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3UGxlYXNlIHNwZWNpZnkgYXQgbGVhc3Qgb25lICVjJ21pY3JvbW9kYWwtdHJpZ2dlcidcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2RhdGEgYXR0cmlidXRlLicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtbWljcm9tb2RhbC10cmlnZ2VyPVxcXCJteS1tb2RhbFxcXCI+PC9hPlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHJpZ2dlcnMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgbW9kYWxzXG4gICAqIGFyZSBwcmVzZW50IGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgQXJyYXkgb2YgRE9NIG5vZGVzIHdoaWNoIGhhdmUgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlck1hcCBBc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIHRoZWlyIHRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlQXJncyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkge1xuICAgIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKTtcbiAgICBpZiAoIXRyaWdnZXJNYXApIHJldHVybiB0cnVlO1xuXG4gICAgZm9yICh2YXIgaWQgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgLyoqXG4gICAqIEJpbmRzIGNsaWNrIGhhbmRsZXJzIHRvIGFsbCBtb2RhbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cblxuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChjb25maWcpIHtcbiAgICAvLyBDcmVhdGUgYW4gY29uZmlnIG9iamVjdCB3aXRoIGRlZmF1bHQgb3BlblRyaWdnZXJcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInXG4gICAgfSwgY29uZmlnKTsgLy8gQ29sbGVjdHMgYWxsIHRoZSBub2RlcyB3aXRoIHRoZSB0cmlnZ2VyXG5cbiAgICB2YXIgdHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIi5jb25jYXQob3B0aW9ucy5vcGVuVHJpZ2dlciwgXCJdXCIpKSk7IC8vIE1ha2VzIGEgbWFwcGluZ3Mgb2YgbW9kYWxzIHdpdGggdGhlaXIgdHJpZ2dlciBub2Rlc1xuXG5cbiAgICB2YXIgdHJpZ2dlck1hcCA9IGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2Vycywgb3B0aW9ucy5vcGVuVHJpZ2dlcik7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkgPT09IGZhbHNlKSByZXR1cm47IC8vIEZvciBldmVyeSB0YXJnZXQgbW9kYWwgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuXG4gICAgZm9yICh2YXIga2V5IGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRyaWdnZXJNYXBba2V5XTtcbiAgICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSBrZXk7XG4gICAgICBvcHRpb25zLnRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlKTtcbiAgICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3dzIGEgcGFydGljdWxhciBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGRpc3BsYXldXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gcGFzc11cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3codGFyZ2V0TW9kYWwsIGNvbmZpZykge1xuICAgIHZhciBvcHRpb25zID0gY29uZmlnIHx8IHt9O1xuICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSB0YXJnZXRNb2RhbDsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVNb2RhbFByZXNlbmNlKHRhcmdldE1vZGFsKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gY2xlYXIgZXZlbnRzIGluIGNhc2UgcHJldmlvdXMgbW9kYWwgd2Fzbid0IGNsb3NlXG5cbiAgICBpZiAoYWN0aXZlTW9kYWwpIGFjdGl2ZU1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7IC8vIHN0b3JlcyByZWZlcmVuY2UgdG8gYWN0aXZlIG1vZGFsXG5cbiAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgIGFjdGl2ZU1vZGFsLnNob3dNb2RhbCgpO1xuICB9O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBhY3RpdmUgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBjbG9zZV1cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSh0YXJnZXRNb2RhbCkge1xuICAgIHRhcmdldE1vZGFsID8gYWN0aXZlTW9kYWwuY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIDogYWN0aXZlTW9kYWwuY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBzaG93OiBzaG93LFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufSgpO1xud2luZG93Lk1pY3JvTW9kYWwgPSBNaWNyb01vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBNaWNyb01vZGFsO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tICdhY2NvcmRpb24tanMnO1xuXG5uZXcgQWNjb3JkaW9uKCcuYWNjb3JkaW9uLWNvbnRhaW5lcicpOyIsImltcG9ydCBlbnF1aXJlIGZyb20gJ2VucXVpcmUtanMnO1xuXG5pZiAoIU9iamVjdC5lbnRyaWVzKSB7XG4gICAgT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbiggb2JqICl7XG4gICAgICAgIHZhciBvd25Qcm9wcyA9IE9iamVjdC5rZXlzKCBvYmogKSxcbiAgICAgICAgICAgIGkgPSBvd25Qcm9wcy5sZW5ndGgsXG4gICAgICAgICAgICByZXNBcnJheSA9IG5ldyBBcnJheShpKTtcbiAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgcmVzQXJyYXlbaV0gPSBbb3duUHJvcHNbaV0sIG9ialtvd25Qcm9wc1tpXV1dO1xuICAgICAgXG4gICAgICAgIHJldHVybiByZXNBcnJheTtcbiAgICB9O1xufVxuXG5sZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcblxuY29uc3QgbWVkaWFRdWVyaWVzID0ge1xuICAgIHNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpJyxcbiAgICBtb2I6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMXB4KScsXG4gICAgdGFiOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCknLFxuICAgIGxhcDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KScsXG4gICAgZGVzOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpJyxcbiAgICBsZzogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KScsXG4gICAgeGw6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCknLFxuICAgIGxhbmRzY2FwZTogJ3NjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgICBwb3RyYWl0OiAnc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSdcbn07XG5cbk9iamVjdC5lbnRyaWVzKG1lZGlhUXVlcmllcykuZm9yRWFjaCgoW2JyZWFrcG9pbnQsIG1lZGlhcXVlcnldKSA9PiBcbiAgICBlbnF1aXJlLnJlZ2lzdGVyKCBtZWRpYXF1ZXJ5LCB7IFxuICAgICAgICBtYXRjaCA6IGZ1bmN0aW9uKCkgeyBodG1sLmNsYXNzTGlzdC5hZGQoIGJyZWFrcG9pbnQgKTsgfSxcbiAgICAgICAgdW5tYXRjaCA6IGZ1bmN0aW9uKCkgeyBodG1sLmNsYXNzTGlzdC5yZW1vdmUoIGJyZWFrcG9pbnQgKTsgfVxuICAgIH0pXG4pO1xuXG4iLCJpbXBvcnQgbGF6eWxvYWQgZnJvbSAnbGF6eWxvYWQnO1xuXG5uZXcgbGF6eWxvYWQoKTsiLCJpbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcblxuTWljcm9Nb2RhbC5pbml0KHtcbiAgICBvblNob3c6IG1vZGFsID0+IGNvbnNvbGUuaW5mbyhgJHttb2RhbC5pZH0gaXMgc2hvd25gKSwgLy8gWzFdXG4gICAgb25DbG9zZTogbW9kYWwgPT4gY29uc29sZS5pbmZvKGAke21vZGFsLmlkfSBpcyBoaWRkZW5gKSwgLy8gWzJdXG4gICAgb3BlblRyaWdnZXI6ICdkYXRhLWN1c3RvbS1vcGVuJywgLy8gWzNdXG4gICAgY2xvc2VUcmlnZ2VyOiAnZGF0YS1jdXN0b20tY2xvc2UnLCAvLyBbNF1cbiAgICBvcGVuQ2xhc3M6ICdpcy1vcGVuJywgLy8gWzVdXG4gICAgZGlzYWJsZVNjcm9sbDogdHJ1ZSwgLy8gWzZdXG4gICAgZGlzYWJsZUZvY3VzOiBmYWxzZSwgLy8gWzddXG4gICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBmYWxzZSwgLy8gWzhdXG4gICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogZmFsc2UsIC8vIFs5XVxuICAgIGRlYnVnTW9kZTogdHJ1ZSAvLyBbMTBdXG59KTsiLCJjb25zdCBuYXZTbGlkZSA9ICgpID0+IHtcblx0Y29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbiB1bCcpO1xuXG5cdGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cdFx0bmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdmlnYXRpb25fX2lzLWFjdGl2ZScpO1xuXHR9KVxufVxuXG4vL25hdlNsaWRlKCk7IiwiaW1wb3J0ICcuL2Z1bmN0aW9uLmJvZHljbGFzc2VzLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbi5zbGlkZXNob3cuanMnOyBcbmltcG9ydCAnLi9mdW5jdGlvbi5vZmZjYW52YXMuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uLmxhenlsb2FkLmpzJzsgXG5pbXBvcnQgJy4vZnVuY3Rpb24ubW9kYWwuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==