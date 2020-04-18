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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUtanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5bG9hZC9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWljcm9tb2RhbC9kaXN0L21pY3JvbW9kYWwuZXMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmJvZHljbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ubGF6eWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJpIiwidSIsIm8iLCJsIiwiYyIsInQiLCJpbml0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWFwIiwiZSIsIm9wdGlvbnMiLCJoIiwiZHVyYXRpb24iLCJpdGVtTnVtYmVyIiwiYXJpYSIsImNsb3NlT3RoZXJzIiwic2hvd0l0ZW0iLCJlbGVtZW50Q2xhc3MiLCJxdWVzdGlvbkNsYXNzIiwiYW5zd2VyQ2xhc3MiLCJ0YXJnZXRDbGFzcyIsIm9uVG9nZ2xlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibiIsInNldEF0dHJpYnV0ZSIsInMiLCJyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZUVsZW1lbnQiLCJzZXRUcmFuc2l0aW9uIiwiZ2VuZXJhdGVJRCIsInNldEFSSUEiLCJhIiwidG9nZ2xlRWxlbWVudCIsImF0dGFjaEV2ZW50cyIsInN0eWxlIiwiY29uY2F0IiwidXBkYXRlQVJJQSIsImNhbGxTcGVjaWZpY0VsZW1lbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImNsYXNzTmFtZSIsIm1hdGNoIiwicHJldmVudERlZmF1bHQiLCJjbG9zZUFsbEVsZW1lbnRzIiwiaGVpZ2h0IiwiYXJndW1lbnRzIiwic2Nyb2xsSGVpZ2h0IiwidG9nZ2xlIiwicGFyc2VJbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJyZXNpemVIYW5kbGVyIiwib2Zmc2V0SGVpZ2h0IiwiY2xpY2tIYW5kbGVyIiwia2V5ZG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQWNjb3JkaW9uIiwid2luZG93IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVucXVpcmVTY3JlZW4iLCJ1bmVucXVpcmVTY3JlZW4iLCJlbnF1aXJlSnMiLCJtYXRjaE1lZGlhUG9seWZpbGwiLCJtZWRpYVF1ZXJ5IiwibWVkaWEiLCJtYXRjaGVzIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJyZXF1aXJlIiwibW9iaWxlUXVlcnkiLCJjYiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwiaGFuZGxlciIsInVubWF0Y2giLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJRdWVyeUhhbmRsZXIiLCJlYWNoIiwiTWVkaWFRdWVyeSIsImlzVW5jb25kaXRpb25hbCIsImhhbmRsZXJzIiwibXFsIiwic2VsZiIsImxpc3RlbmVyIiwiY3VycmVudFRhcmdldCIsImFzc2VzcyIsInByb3RvdHlwZSIsImNvbnN0dWN0b3IiLCJhZGRIYW5kbGVyIiwicWgiLCJwdXNoIiwib24iLCJyZW1vdmVIYW5kbGVyIiwiZXF1YWxzIiwiZGVzdHJveSIsInNwbGljZSIsImNsZWFyIiwiYWN0aW9uIiwiVXRpbCIsImlzRnVuY3Rpb24iLCJNZWRpYVF1ZXJ5RGlzcGF0Y2giLCJFcnJvciIsInF1ZXJpZXMiLCJicm93c2VySXNJbmNhcGFibGUiLCJjb25zdHJ1Y3RvciIsInEiLCJzaG91bGREZWdyYWRlIiwiZGVmZXJTZXR1cCIsInNldHVwIiwiaW5pdGlhbGlzZWQiLCJvZmYiLCJjb2xsZWN0aW9uIiwiZm4iLCJjb250IiwidG9TdHJpbmciLCJhcHBseSIsInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwiZ2xvYmFsIiwiZGVmYXVsdHMiLCJzcmMiLCJzcmNzZXQiLCJzZWxlY3RvciIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJleHRlbmQiLCJleHRlbmRlZCIsImRlZXAiLCJjYWxsIiwibWVyZ2UiLCJvYmoiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJMYXp5TG9hZCIsImltYWdlcyIsInNldHRpbmdzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImxvYWRJbWFnZXMiLCJvYnNlcnZlckNvbmZpZyIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwib2JzZXJ2ZSIsImxvYWRBbmREZXN0cm95IiwiZGlzY29ubmVjdCIsImxhenlsb2FkIiwialF1ZXJ5IiwiJCIsImF0dHJpYnV0ZSIsIm1ha2VBcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJtaW5MZW4iLCJuYW1lIiwidGVzdCIsImxlbiIsImFycjIiLCJNaWNyb01vZGFsIiwiRk9DVVNBQkxFX0VMRU1FTlRTIiwiTW9kYWwiLCJfcmVmIiwidGFyZ2V0TW9kYWwiLCJfcmVmJHRyaWdnZXJzIiwidHJpZ2dlcnMiLCJfcmVmJG9uU2hvdyIsIm9uU2hvdyIsIl9yZWYkb25DbG9zZSIsIm9uQ2xvc2UiLCJfcmVmJG9wZW5UcmlnZ2VyIiwib3BlblRyaWdnZXIiLCJfcmVmJGNsb3NlVHJpZ2dlciIsImNsb3NlVHJpZ2dlciIsIl9yZWYkb3BlbkNsYXNzIiwib3BlbkNsYXNzIiwiX3JlZiRkaXNhYmxlU2Nyb2xsIiwiZGlzYWJsZVNjcm9sbCIsIl9yZWYkZGlzYWJsZUZvY3VzIiwiZGlzYWJsZUZvY3VzIiwiX3JlZiRhd2FpdENsb3NlQW5pbWF0IiwiYXdhaXRDbG9zZUFuaW1hdGlvbiIsIl9yZWYkYXdhaXRPcGVuQW5pbWF0aSIsImF3YWl0T3BlbkFuaW1hdGlvbiIsIl9yZWYkZGVidWdNb2RlIiwiZGVidWdNb2RlIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsInJlZ2lzdGVyVHJpZ2dlcnMiLCJvbkNsaWNrIiwib25LZXlkb3duIiwiX3RoaXMiLCJfbGVuIiwiX2tleSIsImZpbHRlciIsIkJvb2xlYW4iLCJ0cmlnZ2VyIiwiZXZlbnQiLCJzaG93TW9kYWwiLCJfdGhpczIiLCJhY3RpdmVFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3VyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzZXRGb2N1c1RvRmlyc3ROb2RlIiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZm9jdXMiLCJjbG9zZU1vZGFsQnlJZCIsImJvZHkiLCJhc3NpZ24iLCJvdmVyZmxvdyIsImhhc0F0dHJpYnV0ZSIsInJldGFpbkZvY3VzIiwiZ2V0Rm9jdXNhYmxlTm9kZXMiLCJub2RlcyIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJmb2N1c2VkSXRlbUluZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwiYWN0aXZlTW9kYWwiLCJnZW5lcmF0ZVRyaWdnZXJNYXAiLCJ0cmlnZ2VyQXR0ciIsInRyaWdnZXJNYXAiLCJhdHRyaWJ1dGVzIiwidmFsaWRhdGVNb2RhbFByZXNlbmNlIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInZhbGlkYXRlVHJpZ2dlclByZXNlbmNlIiwidmFsaWRhdGVBcmdzIiwic2hvdyIsImNsb3NlIiwiZyIsIkZ1bmN0aW9uIiwidGFyZ2V0ZWRDbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJvd25Qcm9wcyIsImtleXMiLCJyZXNBcnJheSIsImh0bWwiLCJtZWRpYVF1ZXJpZXMiLCJzbSIsIm1vYiIsInRhYiIsImxhcCIsImRlcyIsImxnIiwieGwiLCJsYW5kc2NhcGUiLCJwb3RyYWl0IiwiYnJlYWtwb2ludCIsIm1lZGlhcXVlcnkiLCJlbnF1aXJlIiwiaW5mbyIsIm5hdlNsaWRlIiwiYnVyZ2VyIiwibmF2Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7OztBQVFhOztBQUFBLENBQUMsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsV0FBU0MsQ0FBVCxDQUFXQyxDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDLFFBQUlDLENBQUMsR0FBQyxJQUFOO0FBQUEsUUFBV0MsQ0FBQyxHQUFDO0FBQUNDLFVBQUksRUFBQyxnQkFBVTtBQUFDLFlBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTixDQUFkLENBQUgsRUFBb0Is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LEtBQUs7QUFBQSxXQUFJNkMsT0FBTyxDQUFDMkIsSUFBUixXQUFnQnhFLEtBQUssQ0FBQzRDLEVBQXRCLGVBQUo7QUFBQSxHQUREO0FBQzJDO0FBQ3ZEN0QsU0FBTyxFQUFFLGlCQUFBaUIsS0FBSztBQUFBLFdBQUk2QyxPQUFPLENBQUMyQixJQUFSLFdBQWdCeEUsS0FBSyxDQUFDNEMsRUFBdEIsZ0JBQUo7QUFBQSxHQUZGO0FBRTZDO0FBQ3pEM0QsYUFBVyxFQUFFLGtCQUhEO0FBR3FCO0FBQ2pDRSxjQUFZLEVBQUUsbUJBSkY7QUFJdUI7QUFDbkNFLFdBQVMsRUFBRSxTQUxDO0FBS1U7QUFDdEJFLGVBQWEsRUFBRSxJQU5IO0FBTVM7QUFDckJFLGNBQVksRUFBRSxLQVBGO0FBT1M7QUFDckJJLG9CQUFrQixFQUFFLEtBUlI7QUFRZTtBQUMzQkYscUJBQW1CLEVBQUUsS0FUVDtBQVNnQjtBQUM1QkksV0FBUyxFQUFFLElBVkMsQ0FVSTs7QUFWSixDQUFoQixFOzs7Ozs7Ozs7OztBQ0ZBLElBQU0wRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCLE1BQU1DLE1BQU0sR0FBR2pTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsTUFBTWlTLEdBQUcsR0FBR2xTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBWjtBQUVBZ1MsUUFBTSxDQUFDelAsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBSTtBQUNwQzBQLE9BQUcsQ0FBQzFSLFNBQUosQ0FBY3NCLE1BQWQsQ0FBcUIsdUJBQXJCO0FBQ0EsR0FGRDtBQUdBLENBUEQsQyxDQVNBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiFcclxuICogQWNjb3JkaW9uIHYyLjguMFxyXG4gKiBTaW1wbGUgYWNjb3JkaW9uIGNyZWF0ZWQgaW4gcHVyZSBKYXZhc2NyaXB0LlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaHUyay9BY2NvcmRpb25cclxuICpcclxuICogQ29weXJpZ2h0IDIwMTctMjAxOSBNaWNoYcWCIFN0cnVtcGZcclxuICogUHVibGlzaGVkIHVuZGVyIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cInVzZSBzdHJpY3RcIjshZnVuY3Rpb24oaSl7ZnVuY3Rpb24gdShvLGwpe3ZhciBjPXRoaXMsdD17aW5pdDpmdW5jdGlvbigpe2lmKEFycmF5LmlzQXJyYXkobykpcmV0dXJuIG8ubGVuZ3RoJiZvLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gbmV3IHUoZSxsKX0pLCExO3RoaXMub3B0aW9ucz1oKHtkdXJhdGlvbjo2MDAsaXRlbU51bWJlcjowLGFyaWE6ITAsY2xvc2VPdGhlcnM6ITAsc2hvd0l0ZW06ITEsZWxlbWVudENsYXNzOlwiYWNcIixxdWVzdGlvbkNsYXNzOlwiYWMtcVwiLGFuc3dlckNsYXNzOlwiYWMtYVwiLHRhcmdldENsYXNzOlwiYWMtdGFyZ2V0XCIsb25Ub2dnbGU6ZnVuY3Rpb24oKXt9fSxsKSx0aGlzLmNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8pLHRoaXMuZWxlbWVudHM9dGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm9wdGlvbnMuZWxlbWVudENsYXNzKTt2YXIgZT10aGlzLm9wdGlvbnMsdD1lLmFyaWEsbj1lLnNob3dJdGVtLGk9ZS5pdGVtTnVtYmVyO3QmJnRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYmxpc3RcIik7Zm9yKHZhciBzPTA7czx0aGlzLmVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciByPXRoaXMuZWxlbWVudHNbc107ci5jbGFzc0xpc3QuYWRkKFwianMtZW5hYmxlZFwiKSx0aGlzLmhpZGVFbGVtZW50KHIpLHRoaXMuc2V0VHJhbnNpdGlvbihyKSx0aGlzLmdlbmVyYXRlSUQociksdCYmdGhpcy5zZXRBUklBKHIpfWlmKG4pe3ZhciBhPXRoaXMuZWxlbWVudHNbMF07XCJudW1iZXJcIj09dHlwZW9mIGkmJmk8dGhpcy5lbGVtZW50cy5sZW5ndGgmJihhPXRoaXMuZWxlbWVudHNbaV0pLHRoaXMudG9nZ2xlRWxlbWVudChhLCExKX1jLmF0dGFjaEV2ZW50cygpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucyxuPXQuZHVyYXRpb24saT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpLHI9YShcInRyYW5zaXRpb25cIik7cy5zdHlsZVtyXT1uK1wibXNcIn0sZ2VuZXJhdGVJRDpmdW5jdGlvbihlKXtlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhYy1cIi5jb25jYXQocykpLHMrK30sc2V0QVJJQTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMsbj10LnF1ZXN0aW9uQ2xhc3MsaT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK24pLHI9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpO3Muc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFiXCIpLHMuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJwYW5lbFwiKX0sdXBkYXRlQVJJQTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMub3B0aW9ucy5xdWVzdGlvbkNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIituKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsdCl9LGNhbGxTcGVjaWZpY0VsZW1lbnQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUudGFyZ2V0LG49dGhpcy5vcHRpb25zLGk9bi5xdWVzdGlvbkNsYXNzLHM9bi50YXJnZXRDbGFzcyxyPW4uY2xvc2VPdGhlcnMsYT0wO2E8dGhpcy5lbGVtZW50cy5sZW5ndGg7YSsrKWlmKHRoaXMuZWxlbWVudHNbYV0uY29udGFpbnModCkpeyh0LmNsYXNzTmFtZS5tYXRjaChpKXx8dC5jbGFzc05hbWUubWF0Y2gocykpJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHImJnRoaXMuY2xvc2VBbGxFbGVtZW50cyhhKSx0aGlzLnRvZ2dsZUVsZW1lbnQodGhpcy5lbGVtZW50c1thXSkpO2JyZWFrfX0saGlkZUVsZW1lbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLmFuc3dlckNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIit0KS5zdHlsZS5oZWlnaHQ9MH0sdG9nZ2xlRWxlbWVudDpmdW5jdGlvbihlLHQpe3ZhciBuLGk9ISgxPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQpfHx0LHM9dGhpcy5vcHRpb25zLHI9cy5hbnN3ZXJDbGFzcyxhPXMuYXJpYSxvPXMub25Ub2dnbGUsbD1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrciksYz1sLnNjcm9sbEhlaWdodDtlLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIiksaXx8KGwuc3R5bGUuaGVpZ2h0PVwiYXV0b1wiKSwwPHBhcnNlSW50KGwuc3R5bGUuaGVpZ2h0KT8obj0hMSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsLnN0eWxlLmhlaWdodD0wfSkpOihuPSEwLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2wuc3R5bGUuaGVpZ2h0PWMrXCJweFwifSkpLGEmJnRoaXMudXBkYXRlQVJJQShlLG4pLGkmJm8oZSx0aGlzLmVsZW1lbnRzKX0sY2xvc2VBbGxFbGVtZW50czpmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy5vcHRpb25zLmFyaWEsbj10aGlzLmVsZW1lbnRzLmxlbmd0aCxpPTA7aTxuO2krKylpZihpIT1lKXt2YXIgcz10aGlzLmVsZW1lbnRzW2ldO3MuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpJiZzLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIiksdCYmdGhpcy51cGRhdGVBUklBKHMsITEpLHRoaXMuaGlkZUVsZW1lbnQocyl9fSxyZXNpemVIYW5kbGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQsbj10aGlzLm9wdGlvbnMsaT1uLmVsZW1lbnRDbGFzcyxzPW4uYW5zd2VyQ2xhc3Mscj10aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2krXCIuaXMtYWN0aXZlXCIpLGE9MDthPHIubGVuZ3RoO2ErKyl0PXJbYV0ucXVlcnlTZWxlY3RvcihcIi5cIitzKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnN0eWxlLmhlaWdodD1cImF1dG9cIixlPXQub2Zmc2V0SGVpZ2h0LHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3Quc3R5bGUuaGVpZ2h0PWUrXCJweFwifSl9KX0sY2xpY2tIYW5kbGVyOmZ1bmN0aW9uKGUpe3RoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX0sa2V5ZG93bkhhbmRsZXI6ZnVuY3Rpb24oZSl7MTM9PT1lLmtleUNvZGUmJnRoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX19O3RoaXMuYXR0YWNoRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dDtlLmNsaWNrSGFuZGxlcj1lLmNsaWNrSGFuZGxlci5iaW5kKGUpLGUua2V5ZG93bkhhbmRsZXI9ZS5rZXlkb3duSGFuZGxlci5iaW5kKGUpLGUucmVzaXplSGFuZGxlcj1lLnJlc2l6ZUhhbmRsZXIuYmluZChlKSxlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlLmNsaWNrSGFuZGxlciksZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixlLmtleWRvd25IYW5kbGVyKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixlLnJlc2l6ZUhhbmRsZXIpfSx0aGlzLmRldGFjaEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXQ7ZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZS5rZXlkb3duSGFuZGxlciksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5yZXNpemVIYW5kbGVyKX07dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVtlXT9lOihlPW4oZSksZT1cIndlYmtpdFwiLmNvbmNhdChlKSl9LG49ZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKX0saD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KWVbbl09dFtuXTtyZXR1cm4gZX07aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGkud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXtpLnNldFRpbWVvdXQoZSwxZTMvNjApfSx0LmluaXQoKX12YXIgcz0wO1widW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJnZvaWQgMCE9PW1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXU6aS5BY2NvcmRpb249dX0od2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVucXVpcmVTY3JlZW4gPSBlbnF1aXJlU2NyZWVuO1xuZXhwb3J0cy51bmVucXVpcmVTY3JlZW4gPSB1bmVucXVpcmVTY3JlZW47XG52YXIgZW5xdWlyZUpzID0gdm9pZCAwO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBtYXRjaE1lZGlhUG9seWZpbGwgPSBmdW5jdGlvbiBtYXRjaE1lZGlhUG9seWZpbGwobWVkaWFRdWVyeSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZWRpYTogbWVkaWFRdWVyeSxcbiAgICAgIG1hdGNoZXM6IGZhbHNlLFxuICAgICAgYWRkTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZExpc3RlbmVyKCkge30sXG4gICAgICByZW1vdmVMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKSB7fVxuICAgIH07XG4gIH07XG4gIHdpbmRvdy5tYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEgfHwgbWF0Y2hNZWRpYVBvbHlmaWxsO1xuICBlbnF1aXJlSnMgPSByZXF1aXJlKCdlbnF1aXJlLmpzJyk7XG59XG5cbnZhciBtb2JpbGVRdWVyeSA9ICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk5cHgpJztcblxuZnVuY3Rpb24gZW5xdWlyZVNjcmVlbihjYikge1xuICB2YXIgcXVlcnkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG1vYmlsZVF1ZXJ5O1xuXG4gIGlmICghZW5xdWlyZUpzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSB7XG4gICAgbWF0Y2g6IGZ1bmN0aW9uIG1hdGNoKCkge1xuICAgICAgY2IgJiYgY2IodHJ1ZSk7XG4gICAgfSxcbiAgICB1bm1hdGNoOiBmdW5jdGlvbiB1bm1hdGNoKCkge1xuICAgICAgY2IgJiYgY2IoKTtcbiAgICB9XG4gIH07XG4gIGVucXVpcmVKcy5yZWdpc3RlcihxdWVyeSwgaGFuZGxlcik7XG4gIHJldHVybiBoYW5kbGVyO1xufVxuXG5mdW5jdGlvbiB1bmVucXVpcmVTY3JlZW4oaGFuZGxlcikge1xuICB2YXIgcXVlcnkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG1vYmlsZVF1ZXJ5O1xuXG4gIGlmICghZW5xdWlyZUpzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVucXVpcmVKcy51bnJlZ2lzdGVyKHF1ZXJ5LCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZW5xdWlyZUpzO1xuIiwidmFyIFF1ZXJ5SGFuZGxlciA9IHJlcXVpcmUoJy4vUXVlcnlIYW5kbGVyJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4vVXRpbCcpLmVhY2g7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBtZWRpYSBxdWVyeSwgbWFuYWdlcyBpdCdzIHN0YXRlIGFuZCByZWdpc3RlcmVkIGhhbmRsZXJzIGZvciB0aGlzIHF1ZXJ5XG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIG1lZGlhIHF1ZXJ5IHN0cmluZ1xuICogQHBhcmFtIHtib29sZWFufSBbaXNVbmNvbmRpdGlvbmFsPWZhbHNlXSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgcnVuIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgY29uZGl0aW9ucyBhcmUgbWV0LiBQcmltYXJpbHkgZm9yIGhlbHBpbmcgb2xkZXIgYnJvd3NlcnMgZGVhbCB3aXRoIG1vYmlsZS1maXJzdCBkZXNpZ25cbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeShxdWVyeSwgaXNVbmNvbmRpdGlvbmFsKSB7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaXNVbmNvbmRpdGlvbmFsID0gaXNVbmNvbmRpdGlvbmFsO1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24obXFsKSB7XG4gICAgICAgIC8vIENocm9tZSBwYXNzZXMgYW4gTWVkaWFRdWVyeUxpc3RFdmVudCBvYmplY3QsIHdoaWxlIG90aGVyIGJyb3dzZXJzIHBhc3MgTWVkaWFRdWVyeUxpc3QgZGlyZWN0bHlcbiAgICAgICAgc2VsZi5tcWwgPSBtcWwuY3VycmVudFRhcmdldCB8fCBtcWw7XG4gICAgICAgIHNlbGYuYXNzZXNzKCk7XG4gICAgfTtcbiAgICB0aGlzLm1xbC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbn1cblxuTWVkaWFRdWVyeS5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHVjdG9yIDogTWVkaWFRdWVyeSxcblxuICAgIC8qKlxuICAgICAqIGFkZCBhIGhhbmRsZXIgZm9yIHRoaXMgcXVlcnksIHRyaWdnZXJpbmcgaWYgYWxyZWFkeSBhY3RpdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlci51bm1hdGNoXSBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBkZWFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnNldHVwXSBjYWxsYmFjayBmb3IgaW1tZWRpYXRlIGV4ZWN1dGlvbiB3aGVuIGEgcXVlcnkgaGFuZGxlciBpcyByZWdpc3RlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaGFuZGxlci5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIGRlZmVycmVkIHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBoYW5kbGVyIGlzIG1hdGNoZWQ/XG4gICAgICovXG4gICAgYWRkSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHFoID0gbmV3IFF1ZXJ5SGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKHFoKTtcblxuICAgICAgICB0aGlzLm1hdGNoZXMoKSAmJiBxaC5vbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVzIHRoZSBnaXZlbiBoYW5kbGVyIGZyb20gdGhlIGNvbGxlY3Rpb24sIGFuZCBjYWxscyBpdCdzIGRlc3Ryb3kgbWV0aG9kc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IGhhbmRsZXIgdGhlIGhhbmRsZXIgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycztcbiAgICAgICAgZWFjaChoYW5kbGVycywgZnVuY3Rpb24oaCwgaSkge1xuICAgICAgICAgICAgaWYoaC5lcXVhbHMoaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWhhbmRsZXJzLnNwbGljZShpLDEpOyAvL3JlbW92ZSBmcm9tIGFycmF5IGFuZCBleGl0IGVhY2ggZWFybHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgYmUgY29uc2lkZXJlZCBhIG1hdGNoXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIG1lZGlhIHF1ZXJ5IGNhbiBiZSBjb25zaWRlcmVkIGEgbWF0Y2gsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIG1hdGNoZXMgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXFsLm1hdGNoZXMgfHwgdGhpcy5pc1VuY29uZGl0aW9uYWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgaGFuZGxlcnMgYW5kIHVuYmluZHMgZXZlbnRzXG4gICAgICovXG4gICAgY2xlYXIgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmxlbmd0aCA9IDA7IC8vY2xlYXIgYXJyYXlcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgKiBBc3Nlc3NlcyB0aGUgcXVlcnksIHR1cm5pbmcgb24gYWxsIGhhbmRsZXJzIGlmIGl0IG1hdGNoZXMsIHR1cm5pbmcgdGhlbSBvZmYgaWYgaXQgZG9lc24ndCBtYXRjaFxuICAgICAgICAqL1xuICAgIGFzc2VzcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5tYXRjaGVzKCkgPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyW2FjdGlvbl0oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVF1ZXJ5O1xuIiwidmFyIE1lZGlhUXVlcnkgPSByZXF1aXJlKCcuL01lZGlhUXVlcnknKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG52YXIgZWFjaCA9IFV0aWwuZWFjaDtcbnZhciBpc0Z1bmN0aW9uID0gVXRpbC5pc0Z1bmN0aW9uO1xudmFyIGlzQXJyYXkgPSBVdGlsLmlzQXJyYXk7XG5cbi8qKlxuICogQWxsb3dzIGZvciByZWdpc3RyYXRpb24gb2YgcXVlcnkgaGFuZGxlcnMuXG4gKiBNYW5hZ2VzIHRoZSBxdWVyeSBoYW5kbGVyJ3Mgc3RhdGUgYW5kIGlzIHJlc3BvbnNpYmxlIGZvciB3aXJpbmcgdXAgYnJvd3NlciBldmVudHNcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeURpc3BhdGNoICgpIHtcbiAgICBpZighd2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXRjaE1lZGlhIG5vdCBwcmVzZW50LCBsZWdhY3kgYnJvd3NlcnMgcmVxdWlyZSBhIHBvbHlmaWxsJyk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyaWVzID0ge307XG4gICAgdGhpcy5icm93c2VySXNJbmNhcGFibGUgPSAhd2luZG93Lm1hdGNoTWVkaWEoJ29ubHkgYWxsJykubWF0Y2hlcztcbn1cblxuTWVkaWFRdWVyeURpc3BhdGNoLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yIDogTWVkaWFRdWVyeURpc3BhdGNoLFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgaGFuZGxlciBmb3IgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcSB0aGUgbWVkaWEgcXVlcnlcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBBcnJheSB8fCBGdW5jdGlvbn0gb3B0aW9ucyBlaXRoZXIgYSBzaW5nbGUgcXVlcnkgaGFuZGxlciBvYmplY3QsIGEgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mIHF1ZXJ5IGhhbmRsZXJzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBmaXJlZCB3aGVuIHF1ZXJ5IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy51bm1hdGNoXSBmaXJlZCB3aGVuIGEgcXVlcnkgaXMgbm8gbG9uZ2VyIG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gZmlyZWQgd2hlbiBoYW5kbGVyIGZpcnN0IHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gd2hldGhlciBzZXR1cCBzaG91bGQgYmUgcnVuIGltbWVkaWF0ZWx5IG9yIGRlZmVycmVkIHVudGlsIHF1ZXJ5IGlzIGZpcnN0IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzaG91bGREZWdyYWRlPWZhbHNlXSB3aGV0aGVyIHRoaXMgcGFydGljdWxhciBtZWRpYSBxdWVyeSBzaG91bGQgYWx3YXlzIHJ1biBvbiBpbmNhcGFibGUgYnJvd3NlcnNcbiAgICAgKi9cbiAgICByZWdpc3RlciA6IGZ1bmN0aW9uKHEsIG9wdGlvbnMsIHNob3VsZERlZ3JhZGUpIHtcbiAgICAgICAgdmFyIHF1ZXJpZXMgICAgICAgICA9IHRoaXMucXVlcmllcyxcbiAgICAgICAgICAgIGlzVW5jb25kaXRpb25hbCA9IHNob3VsZERlZ3JhZGUgJiYgdGhpcy5icm93c2VySXNJbmNhcGFibGU7XG5cbiAgICAgICAgaWYoIXF1ZXJpZXNbcV0pIHtcbiAgICAgICAgICAgIHF1ZXJpZXNbcV0gPSBuZXcgTWVkaWFRdWVyeShxLCBpc1VuY29uZGl0aW9uYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ub3JtYWxpc2UgdG8gb2JqZWN0IGluIGFuIGFycmF5XG4gICAgICAgIGlmKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1hdGNoIDogb3B0aW9ucyB9O1xuICAgICAgICB9XG4gICAgICAgIGlmKCFpc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gW29wdGlvbnNdO1xuICAgICAgICB9XG4gICAgICAgIGVhY2gob3B0aW9ucywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0geyBtYXRjaCA6IGhhbmRsZXIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXJpZXNbcV0uYWRkSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHVucmVnaXN0ZXJzIGEgcXVlcnkgYW5kIGFsbCBpdCdzIGhhbmRsZXJzLCBvciBhIHNwZWNpZmljIGhhbmRsZXIgZm9yIGEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeSB0byB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gW2hhbmRsZXJdIHNwZWNpZmljIGhhbmRsZXIgdG8gdW5yZWdpc3RlclxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1txXTtcblxuICAgICAgICBpZihxdWVyeSkge1xuICAgICAgICAgICAgaWYoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnJlbW92ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJpZXNbcV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnlEaXNwYXRjaDtcbiIsIi8qKlxuICogRGVsZWdhdGUgdG8gaGFuZGxlIGEgbWVkaWEgcXVlcnkgYmVpbmcgbWF0Y2hlZCBhbmQgdW5tYXRjaGVkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hdGNoIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy51bm1hdGNoXSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgdW5tYXRjaGVkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gb25lLXRpbWUgY2FsbGJhY2sgdHJpZ2dlcmVkIHRoZSBmaXJzdCB0aW1lIGEgcXVlcnkgaXMgbWF0Y2hlZFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIHJ1biBpbW1lZGlhdGVseSwgcmF0aGVyIHRoYW4gZmlyc3QgdGltZSBxdWVyeSBpcyBtYXRjaGVkP1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFF1ZXJ5SGFuZGxlcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAhb3B0aW9ucy5kZWZlclNldHVwICYmIHRoaXMuc2V0dXAoKTtcbn1cblxuUXVlcnlIYW5kbGVyLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yIDogUXVlcnlIYW5kbGVyLFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldHVwIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5zZXR1cCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHNldHVwIGFuZCB0cmlnZ2VyaW5nIG9mIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAhdGhpcy5pbml0aWFsaXNlZCAmJiB0aGlzLnNldHVwKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXRjaCAmJiB0aGlzLm9wdGlvbnMubWF0Y2goKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgdGhlIHVubWF0Y2ggZXZlbnQgZm9yIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvZmYgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnVubWF0Y2ggJiYgdGhpcy5vcHRpb25zLnVubWF0Y2goKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY2FsbGVkIHdoZW4gYSBoYW5kbGVyIGlzIHRvIGJlIGRlc3Ryb3llZC5cbiAgICAgKiBkZWxlZ2F0ZXMgdG8gdGhlIGRlc3Ryb3kgb3IgdW5tYXRjaCBjYWxsYmFja3MsIGRlcGVuZGluZyBvbiBhdmFpbGFiaWxpdHkuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBkZXN0cm95IDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kZXN0cm95ID8gdGhpcy5vcHRpb25zLmRlc3Ryb3koKSA6IHRoaXMub2ZmKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgZXF1YWxpdHkgYnkgcmVmZXJlbmNlLlxuICAgICAqIGlmIG9iamVjdCBpcyBzdXBwbGllZCBjb21wYXJlIG9wdGlvbnMsIGlmIGZ1bmN0aW9uLCBjb21wYXJlIG1hdGNoIGNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gW3RhcmdldF0gdGhlIHRhcmdldCBmb3IgY29tcGFyaXNvblxuICAgICAqL1xuICAgIGVxdWFscyA6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zID09PSB0YXJnZXQgfHwgdGhpcy5vcHRpb25zLm1hdGNoID09PSB0YXJnZXQ7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5SGFuZGxlcjtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBpdGVyYXRpbmcgb3ZlciBhIGNvbGxlY3Rpb25cbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvblxuICogQHBhcmFtIGZuXG4gKi9cbmZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgZm4pIHtcbiAgICB2YXIgaSAgICAgID0gMCxcbiAgICAgICAgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGNvbnQ7XG5cbiAgICBmb3IoaTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnQgPSBmbihjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgaWYoY29udCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrOyAvL2FsbG93IGVhcmx5IGV4aXRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh0YXJnZXQpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlzRnVuY3Rpb24gOiBpc0Z1bmN0aW9uLFxuICAgIGlzQXJyYXkgOiBpc0FycmF5LFxuICAgIGVhY2ggOiBlYWNoXG59O1xuIiwidmFyIE1lZGlhUXVlcnlEaXNwYXRjaCA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeURpc3BhdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBNZWRpYVF1ZXJ5RGlzcGF0Y2goKTtcbiIsIi8qIVxuICogTGF6eSBMb2FkIC0gSmF2YVNjcmlwdCBwbHVnaW4gZm9yIGxhenkgbG9hZGluZyBpbWFnZXNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOSBNaWthIFR1dXBvbGFcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuICogUHJvamVjdCBob21lOlxuICogICBodHRwczovL2FwcGVsc2lpbmkubmV0L3Byb2plY3RzL2xhenlsb2FkXG4gKlxuICogVmVyc2lvbjogMi4wLjAtcmMuMlxuICpcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LkxhenlMb2FkID0gZmFjdG9yeShyb290KTtcbiAgICB9XG59KSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMud2luZG93IHx8IHRoaXMuZ2xvYmFsLCBmdW5jdGlvbiAocm9vdCkge1xuXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpe1xuICAgICAgICByb290ID0gd2luZG93O1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBzcmM6IFwiZGF0YS1zcmNcIixcbiAgICAgICAgc3Jjc2V0OiBcImRhdGEtc3Jjc2V0XCIsXG4gICAgICAgIHNlbGVjdG9yOiBcIi5sYXp5bG9hZFwiLFxuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiBcIjBweFwiLFxuICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBNZXJnZSB0d28gb3IgbW9yZSBvYmplY3RzLiBSZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0ge0Jvb2xlYW59ICBkZWVwICAgICBJZiB0cnVlLCBkbyBhIGRlZXAgKG9yIHJlY3Vyc2l2ZSkgbWVyZ2UgW29wdGlvbmFsXVxuICAgICogQHBhcmFtIHtPYmplY3R9ICAgb2JqZWN0cyAgVGhlIG9iamVjdHMgdG8gbWVyZ2UgdG9nZXRoZXJcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9ICAgICAgICAgIE1lcmdlZCB2YWx1ZXMgb2YgZGVmYXVsdHMgYW5kIG9wdGlvbnNcbiAgICAqL1xuICAgIGNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uICgpICB7XG5cbiAgICAgICAgbGV0IGV4dGVuZGVkID0ge307XG4gICAgICAgIGxldCBkZWVwID0gZmFsc2U7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgICAgICAgLyogQ2hlY2sgaWYgYSBkZWVwIG1lcmdlICovXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzWzBdKSA9PT0gXCJbb2JqZWN0IEJvb2xlYW5dXCIpIHtcbiAgICAgICAgICAgIGRlZXAgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBNZXJnZSB0aGUgb2JqZWN0IGludG8gdGhlIGV4dGVuZGVkIG9iamVjdCAqL1xuICAgICAgICBsZXQgbWVyZ2UgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAvKiBJZiBkZWVwIG1lcmdlIGFuZCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QsIG1lcmdlIHByb3BlcnRpZXMgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZXAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtwcm9wXSkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gZXh0ZW5kKHRydWUsIGV4dGVuZGVkW3Byb3BdLCBvYmpbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyogTG9vcCB0aHJvdWdoIGVhY2ggb2JqZWN0IGFuZCBjb25kdWN0IGEgbWVyZ2UgKi9cbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIG1lcmdlKG9iaik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXh0ZW5kZWQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIExhenlMb2FkKGltYWdlcywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXMgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLnNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIExhenlMb2FkLnByb3RvdHlwZSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8qIFdpdGhvdXQgb2JzZXJ2ZXJzIGxvYWQgZXZlcnl0aGluZyBhbmQgYmFpbCBvdXQgZWFybHkuICovXG4gICAgICAgICAgICBpZiAoIXJvb3QuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGxldCBvYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICByb290OiB0aGlzLnNldHRpbmdzLnJvb3QsXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpbjogdGhpcy5zZXR0aW5ncy5yb290TWFyZ2luLFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogW3RoaXMuc2V0dGluZ3MudGhyZXNob2xkXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbnRyaWVzLCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyYyA9IGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyY3NldCA9IGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmNzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiaW1nXCIgPT09IGVudHJ5LnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnNyY3NldCA9IHNyY3NldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIHNyYyArIFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBvYnNlcnZlckNvbmZpZyk7XG5cbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5pbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkQW5kRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkSW1hZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5pbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIGxldCBzcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmMpO1xuICAgICAgICAgICAgICAgIGxldCBzcmNzZXQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmNzZXQpO1xuICAgICAgICAgICAgICAgIGlmIChcImltZ1wiID09PSBpbWFnZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIHNyYyArIFwiJylcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QubGF6eWxvYWQgPSBmdW5jdGlvbihpbWFnZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMYXp5TG9hZChpbWFnZXMsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBpZiAocm9vdC5qUXVlcnkpIHtcbiAgICAgICAgY29uc3QgJCA9IHJvb3QualF1ZXJ5O1xuICAgICAgICAkLmZuLmxhenlsb2FkID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZSB8fCBcImRhdGEtc3JjXCI7XG4gICAgICAgICAgICBuZXcgTGF6eUxvYWQoJC5tYWtlQXJyYXkodGhpcyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIExhenlMb2FkO1xufSk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIE1pY3JvTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIEZPQ1VTQUJMRV9FTEVNRU5UUyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ107XG5cbiAgdmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChfcmVmKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSBfcmVmLnRhcmdldE1vZGFsLFxuICAgICAgICAgIF9yZWYkdHJpZ2dlcnMgPSBfcmVmLnRyaWdnZXJzLFxuICAgICAgICAgIHRyaWdnZXJzID0gX3JlZiR0cmlnZ2VycyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHRyaWdnZXJzLFxuICAgICAgICAgIF9yZWYkb25TaG93ID0gX3JlZi5vblNob3csXG4gICAgICAgICAgb25TaG93ID0gX3JlZiRvblNob3cgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvblNob3csXG4gICAgICAgICAgX3JlZiRvbkNsb3NlID0gX3JlZi5vbkNsb3NlLFxuICAgICAgICAgIG9uQ2xvc2UgPSBfcmVmJG9uQ2xvc2UgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvbkNsb3NlLFxuICAgICAgICAgIF9yZWYkb3BlblRyaWdnZXIgPSBfcmVmLm9wZW5UcmlnZ2VyLFxuICAgICAgICAgIG9wZW5UcmlnZ2VyID0gX3JlZiRvcGVuVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJyA6IF9yZWYkb3BlblRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRjbG9zZVRyaWdnZXIgPSBfcmVmLmNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBjbG9zZVRyaWdnZXIgPSBfcmVmJGNsb3NlVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC1jbG9zZScgOiBfcmVmJGNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJG9wZW5DbGFzcyA9IF9yZWYub3BlbkNsYXNzLFxuICAgICAgICAgIG9wZW5DbGFzcyA9IF9yZWYkb3BlbkNsYXNzID09PSB2b2lkIDAgPyAnaXMtb3BlbicgOiBfcmVmJG9wZW5DbGFzcyxcbiAgICAgICAgICBfcmVmJGRpc2FibGVTY3JvbGwgPSBfcmVmLmRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgZGlzYWJsZVNjcm9sbCA9IF9yZWYkZGlzYWJsZVNjcm9sbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlRm9jdXMgPSBfcmVmLmRpc2FibGVGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlRm9jdXMgPSBfcmVmJGRpc2FibGVGb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVGb2N1cyxcbiAgICAgICAgICBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPSBfcmVmLmF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbiA9IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0Q2xvc2VBbmltYXQsXG4gICAgICAgICAgX3JlZiRhd2FpdE9wZW5BbmltYXRpID0gX3JlZi5hd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uID0gX3JlZiRhd2FpdE9wZW5BbmltYXRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSxcbiAgICAgICAgICBfcmVmJGRlYnVnTW9kZSA9IF9yZWYuZGVidWdNb2RlLFxuICAgICAgICAgIGRlYnVnTW9kZSA9IF9yZWYkZGVidWdNb2RlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVidWdNb2RlO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIG9mIHRoZSBtb2RhbFxuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTsgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcGFzc2VkIGNvbmZpZ1xuXG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgZGVidWdNb2RlOiBkZWJ1Z01vZGUsXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IGRpc2FibGVTY3JvbGwsXG4gICAgICAgIG9wZW5UcmlnZ2VyOiBvcGVuVHJpZ2dlcixcbiAgICAgICAgY2xvc2VUcmlnZ2VyOiBjbG9zZVRyaWdnZXIsXG4gICAgICAgIG9wZW5DbGFzczogb3BlbkNsYXNzLFxuICAgICAgICBvblNob3c6IG9uU2hvdyxcbiAgICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBhd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgIGRpc2FibGVGb2N1czogZGlzYWJsZUZvY3VzXG4gICAgICB9OyAvLyBSZWdpc3RlciBjbGljayBldmVudHMgb25seSBpZiBwcmUgYmluZGluZyBldmVudExpc3RlbmVyc1xuXG4gICAgICBpZiAodHJpZ2dlcnMubGVuZ3RoID4gMCkgdGhpcy5yZWdpc3RlclRyaWdnZXJzLmFwcGx5KHRoaXMsIF90b0NvbnN1bWFibGVBcnJheSh0cmlnZ2VycykpOyAvLyBwcmUgYmluZCBmdW5jdGlvbnMgZm9yIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMub25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9vcHMgdGhyb3VnaCBhbGwgb3BlblRyaWdnZXJzIGFuZCBiaW5kcyBjbGljayBldmVudFxuICAgICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBbQXJyYXkgb2Ygbm9kZSBlbGVtZW50c11cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAgICBrZXk6IFwicmVnaXN0ZXJUcmlnZ2Vyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVHJpZ2dlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyaWdnZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIHRyaWdnZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlcnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd01vZGFsKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNob3dNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdkaXNhYmxlJyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRPcGVuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgX3RoaXMyLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgX3RoaXMyLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vblNob3codGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHZhciBtb2RhbCA9IHRoaXMubW9kYWw7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2VuYWJsZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdENsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wZW5DbGFzcyA9IHRoaXMuY29uZmlnLm9wZW5DbGFzczsgLy8gPC0gb2xkIHNjaG9vbCBmdHdcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUob3BlbkNsYXNzKTtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxCeUlkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTtcbiAgICAgICAgaWYgKHRoaXMubW9kYWwpIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzY3JvbGxCZWhhdmlvdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxCZWhhdmlvdXIodG9nZ2xlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZVNjcm9sbCkgcmV0dXJuO1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgICAgICBzd2l0Y2ggKHRvZ2dsZSkge1xuICAgICAgICAgIGNhc2UgJ2VuYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZEV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5oYXNBdHRyaWJ1dGUodGhpcy5jb25maWcuY2xvc2VUcmlnZ2VyKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25LZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTsgLy8gZXNjXG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHRoaXMucmV0YWluRm9jdXMoZXZlbnQpOyAvLyB0YWJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Rm9jdXNhYmxlTm9kZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2FibGVOb2RlcygpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UUyk7XG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShub2RlcykpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUcmllcyB0byBzZXQgZm9jdXMgb24gYSBub2RlIHdoaWNoIGlzIG5vdCBhIGNsb3NlIHRyaWdnZXJcbiAgICAgICAqIGlmIG5vIG90aGVyIG5vZGVzIGV4aXN0IHRoZW4gZm9jdXNlcyBvbiBmaXJzdCBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRGb2N1c1RvRmlyc3ROb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRpc2FibGVGb2N1cykgcmV0dXJuO1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjsgLy8gcmVtb3ZlIG5vZGVzIG9uIHdob3NlIGNsaWNrLCB0aGUgbW9kYWwgY2xvc2VzXG4gICAgICAgIC8vIGNvdWxkIG5vdCB0aGluayBvZiBhIGJldHRlciBuYW1lIDooXG5cbiAgICAgICAgdmFyIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKF90aGlzMy5jb25maWcuY2xvc2VUcmlnZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA+IDApIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHNbMF0uZm9jdXMoKTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID09PSAwKSBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXRhaW5Gb2N1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldGFpbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlsdGVycyBub2RlcyB3aGljaCBhcmUgaGlkZGVuIHRvIHByZXZlbnRcbiAgICAgICAgICogZm9jdXMgbGVhayBvdXRzaWRlIG1vZGFsXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICAgICAgICB9KTsgLy8gaWYgZGlzYWJsZUZvY3VzIGlzIHRydWVcblxuICAgICAgICBpZiAoIXRoaXMubW9kYWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlTm9kZXMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1tmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA+IDAgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1vZGFsO1xuICB9KCk7XG4gIC8qKlxuICAgKiBNb2RhbCBwcm90b3R5cGUgZW5kcy5cbiAgICogSGVyZSBvbiBjb2RlIGlzIHJlc3BvbnNpYmxlIGZvciBkZXRlY3RpbmcgYW5kXG4gICAqIGF1dG8gYmluZGluZyBldmVudCBoYW5kbGVycyBvbiBtb2RhbCB0cmlnZ2Vyc1xuICAgKi9cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3BlbmVkIG1vZGFsXG5cblxuICB2YXIgYWN0aXZlTW9kYWwgPSBudWxsO1xuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgaXQnc1xuICAgKiByZXNwZWN0aXZlIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgICAgQW4gYXJyYXkgb2YgYWxsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdHJpZ2dlckF0dHIgVGhlIGRhdGEtYXR0cmlidXRlIHdoaWNoIHRyaWdnZXJzIHRoZSBtb2R1bGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuXG4gIHZhciBnZW5lcmF0ZVRyaWdnZXJNYXAgPSBmdW5jdGlvbiBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIHRyaWdnZXJBdHRyKSB7XG4gICAgdmFyIHRyaWdnZXJNYXAgPSBbXTtcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSB0cmlnZ2VyLmF0dHJpYnV0ZXNbdHJpZ2dlckF0dHJdLnZhbHVlO1xuICAgICAgaWYgKHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID09PSB1bmRlZmluZWQpIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID0gW107XG4gICAgICB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXS5wdXNoKHRyaWdnZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmlnZ2VyTWFwO1xuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIHdoZXRoZXIgYSBtb2RhbCBvZiB0aGUgZ2l2ZW4gaWQgZXhpc3RzXG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCAgVGhlIGlkIG9mIHRoZSBtb2RhbFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1NlZW1zIGxpa2UgeW91IGhhdmUgbWlzc2VkICVjJ1wiLmNvbmNhdChpZCwgXCInXCIpLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnSUQgc29tZXdoZXJlIGluIHlvdXIgY29kZS4gUmVmZXIgZXhhbXBsZSBiZWxvdyB0byByZXNvbHZlIGl0LicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIiBpZD1cXFwiXCIuY29uY2F0KGlkLCBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgYXJlIG1vZGFsIHRyaWdnZXJzIHByZXNlbnRcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgQW4gYXJyYXkgb2YgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKSB7XG4gICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3UGxlYXNlIHNwZWNpZnkgYXQgbGVhc3Qgb25lICVjJ21pY3JvbW9kYWwtdHJpZ2dlcidcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2RhdGEgYXR0cmlidXRlLicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtbWljcm9tb2RhbC10cmlnZ2VyPVxcXCJteS1tb2RhbFxcXCI+PC9hPlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHJpZ2dlcnMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgbW9kYWxzXG4gICAqIGFyZSBwcmVzZW50IGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgQXJyYXkgb2YgRE9NIG5vZGVzIHdoaWNoIGhhdmUgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlck1hcCBBc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIHRoZWlyIHRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlQXJncyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkge1xuICAgIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKTtcbiAgICBpZiAoIXRyaWdnZXJNYXApIHJldHVybiB0cnVlO1xuXG4gICAgZm9yICh2YXIgaWQgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgLyoqXG4gICAqIEJpbmRzIGNsaWNrIGhhbmRsZXJzIHRvIGFsbCBtb2RhbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cblxuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChjb25maWcpIHtcbiAgICAvLyBDcmVhdGUgYW4gY29uZmlnIG9iamVjdCB3aXRoIGRlZmF1bHQgb3BlblRyaWdnZXJcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInXG4gICAgfSwgY29uZmlnKTsgLy8gQ29sbGVjdHMgYWxsIHRoZSBub2RlcyB3aXRoIHRoZSB0cmlnZ2VyXG5cbiAgICB2YXIgdHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIi5jb25jYXQob3B0aW9ucy5vcGVuVHJpZ2dlciwgXCJdXCIpKSk7IC8vIE1ha2VzIGEgbWFwcGluZ3Mgb2YgbW9kYWxzIHdpdGggdGhlaXIgdHJpZ2dlciBub2Rlc1xuXG5cbiAgICB2YXIgdHJpZ2dlck1hcCA9IGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2Vycywgb3B0aW9ucy5vcGVuVHJpZ2dlcik7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkgPT09IGZhbHNlKSByZXR1cm47IC8vIEZvciBldmVyeSB0YXJnZXQgbW9kYWwgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuXG4gICAgZm9yICh2YXIga2V5IGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRyaWdnZXJNYXBba2V5XTtcbiAgICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSBrZXk7XG4gICAgICBvcHRpb25zLnRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlKTtcbiAgICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3dzIGEgcGFydGljdWxhciBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGRpc3BsYXldXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gcGFzc11cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3codGFyZ2V0TW9kYWwsIGNvbmZpZykge1xuICAgIHZhciBvcHRpb25zID0gY29uZmlnIHx8IHt9O1xuICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSB0YXJnZXRNb2RhbDsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVNb2RhbFByZXNlbmNlKHRhcmdldE1vZGFsKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gY2xlYXIgZXZlbnRzIGluIGNhc2UgcHJldmlvdXMgbW9kYWwgd2Fzbid0IGNsb3NlXG5cbiAgICBpZiAoYWN0aXZlTW9kYWwpIGFjdGl2ZU1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7IC8vIHN0b3JlcyByZWZlcmVuY2UgdG8gYWN0aXZlIG1vZGFsXG5cbiAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgIGFjdGl2ZU1vZGFsLnNob3dNb2RhbCgpO1xuICB9O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBhY3RpdmUgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBjbG9zZV1cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSh0YXJnZXRNb2RhbCkge1xuICAgIHRhcmdldE1vZGFsID8gYWN0aXZlTW9kYWwuY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIDogYWN0aXZlTW9kYWwuY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBzaG93OiBzaG93LFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufSgpO1xud2luZG93Lk1pY3JvTW9kYWwgPSBNaWNyb01vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBNaWNyb01vZGFsO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tICdhY2NvcmRpb24tanMnO1xuXG52YXIgdGFyZ2V0ZWRDbGFzcyAgICA9ICcuYWNjb3JkaW9uLWNvbnRhaW5lcic7XG52YXIgYWNjb3JkaW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0ZWRDbGFzcyk7XG5cbmlmIChhY2NvcmRpb25FbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICBuZXcgQWNjb3JkaW9uKHRhcmdldGVkQ2xhc3MpO1xufVxuIiwiaW1wb3J0IGVucXVpcmUgZnJvbSAnZW5xdWlyZS1qcyc7XG5cbmlmICghT2JqZWN0LmVudHJpZXMpIHtcbiAgICBPYmplY3QuZW50cmllcyA9IGZ1bmN0aW9uKCBvYmogKXtcbiAgICAgICAgdmFyIG93blByb3BzID0gT2JqZWN0LmtleXMoIG9iaiApLFxuICAgICAgICAgICAgaSA9IG93blByb3BzLmxlbmd0aCxcbiAgICAgICAgICAgIHJlc0FycmF5ID0gbmV3IEFycmF5KGkpO1xuICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICByZXNBcnJheVtpXSA9IFtvd25Qcm9wc1tpXSwgb2JqW293blByb3BzW2ldXV07XG4gICAgICBcbiAgICAgICAgcmV0dXJuIHJlc0FycmF5O1xuICAgIH07XG59XG5cbmxldCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuXG5jb25zdCBtZWRpYVF1ZXJpZXMgPSB7XG4gICAgc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCknLFxuICAgIG1vYjogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIxcHgpJyxcbiAgICB0YWI6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KScsXG4gICAgbGFwOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJyxcbiAgICBkZXM6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCknLFxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpJyxcbiAgICB4bDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KScsXG4gICAgbGFuZHNjYXBlOiAnc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAgIHBvdHJhaXQ6ICdzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJ1xufTtcblxuT2JqZWN0LmVudHJpZXMobWVkaWFRdWVyaWVzKS5mb3JFYWNoKChbYnJlYWtwb2ludCwgbWVkaWFxdWVyeV0pID0+IFxuICAgIGVucXVpcmUucmVnaXN0ZXIoIG1lZGlhcXVlcnksIHsgXG4gICAgICAgIG1hdGNoIDogZnVuY3Rpb24oKSB7IGh0bWwuY2xhc3NMaXN0LmFkZCggYnJlYWtwb2ludCApOyB9LFxuICAgICAgICB1bm1hdGNoIDogZnVuY3Rpb24oKSB7IGh0bWwuY2xhc3NMaXN0LnJlbW92ZSggYnJlYWtwb2ludCApOyB9XG4gICAgfSlcbik7XG5cbiIsImltcG9ydCBsYXp5bG9hZCBmcm9tICdsYXp5bG9hZCc7XG5cbm5ldyBsYXp5bG9hZCgpOyIsImltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuXG5NaWNyb01vZGFsLmluaXQoe1xuICAgIG9uU2hvdzogbW9kYWwgPT4gY29uc29sZS5pbmZvKGAke21vZGFsLmlkfSBpcyBzaG93bmApLCAvLyBbMV1cbiAgICBvbkNsb3NlOiBtb2RhbCA9PiBjb25zb2xlLmluZm8oYCR7bW9kYWwuaWR9IGlzIGhpZGRlbmApLCAvLyBbMl1cbiAgICBvcGVuVHJpZ2dlcjogJ2RhdGEtY3VzdG9tLW9wZW4nLCAvLyBbM11cbiAgICBjbG9zZVRyaWdnZXI6ICdkYXRhLWN1c3RvbS1jbG9zZScsIC8vIFs0XVxuICAgIG9wZW5DbGFzczogJ2lzLW9wZW4nLCAvLyBbNV1cbiAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlLCAvLyBbNl1cbiAgICBkaXNhYmxlRm9jdXM6IGZhbHNlLCAvLyBbN11cbiAgICBhd2FpdE9wZW5BbmltYXRpb246IGZhbHNlLCAvLyBbOF1cbiAgICBhd2FpdENsb3NlQW5pbWF0aW9uOiBmYWxzZSwgLy8gWzldXG4gICAgZGVidWdNb2RlOiB0cnVlIC8vIFsxMF1cbn0pOyIsImNvbnN0IG5hdlNsaWRlID0gKCkgPT4ge1xuXHRjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uIHVsJyk7XG5cblx0YnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9Pntcblx0XHRuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9faXMtYWN0aXZlJyk7XG5cdH0pXG59XG5cbi8vbmF2U2xpZGUoKTsiLCJpbXBvcnQgJy4vZnVuY3Rpb24uYm9keWNsYXNzZXMuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uLnNsaWRlc2hvdy5qcyc7IFxuaW1wb3J0ICcuL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb24ubGF6eWxvYWQuanMnOyBcbmltcG9ydCAnLi9mdW5jdGlvbi5tb2RhbC5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb24uYWNjb3JkaW9uLmpzJzsiXSwic291cmNlUm9vdCI6IiJ9