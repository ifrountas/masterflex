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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUtanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5bG9hZC9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWljcm9tb2RhbC9kaXN0L21pY3JvbW9kYWwuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpZW1hL2Rpc3Qvc2llbWEubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmJvZHljbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ubGF6eWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLnNsaWRlc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJpIiwidSIsIm8iLCJsIiwiYyIsInQiLCJpbml0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWFwIiwiZSIsIm9wdGlvbnMiLCJoIiwiZHVyYXRpb24iLCJpdGVtTnVtYmVyIiwiYXJpYSIsImNsb3NlT3RoZXJzIiwic2hvd0l0ZW0iLCJlbGVtZW50Q2xhc3MiLCJxdWVzdGlvbkNsYXNzIiwiYW5zd2VyQ2xhc3MiLCJ0YXJnZXRDbGFzcyIsIm9uVG9nZ2xlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibiIsInNldEF0dHJpYnV0ZSIsInMiLCJyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZUVsZW1lbnQiLCJzZXRUcmFuc2l0aW9uIiwiZ2VuZXJhdGVJRCIsInNldEFSSUEiLCJhIiwidG9nZ2xlRWxlbWVudCIsImF0dGFjaEV2ZW50cyIsInN0eWxlIiwiY29uY2F0IiwidXBkYXRlQVJJQSIsImNhbGxTcGVjaWZpY0VsZW1lbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImNsYXNzTmFtZSIsIm1hdGNoIiwicHJldmVudERlZmF1bHQiLCJjbG9zZUFsbEVsZW1lbnRzIiwiaGVpZ2h0IiwiYXJndW1lbnRzIiwic2Nyb2xsSGVpZ2h0IiwidG9nZ2xlIiwicGFyc2VJbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJyZXNpemVIYW5kbGVyIiwib2Zmc2V0SGVpZ2h0IiwiY2xpY2tIYW5kbGVyIiwia2V5ZG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQWNjb3JkaW9uIiwid2luZG93IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVucXVpcmVTY3JlZW4iLCJ1bmVucXVpcmVTY3JlZW4iLCJlbnF1aXJlSnMiLCJtYXRjaE1lZGlhUG9seWZpbGwiLCJtZWRpYVF1ZXJ5IiwibWVkaWEiLCJtYXRjaGVzIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJyZXF1aXJlIiwibW9iaWxlUXVlcnkiLCJjYiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwiaGFuZGxlciIsInVubWF0Y2giLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJRdWVyeUhhbmRsZXIiLCJlYWNoIiwiTWVkaWFRdWVyeSIsImlzVW5jb25kaXRpb25hbCIsImhhbmRsZXJzIiwibXFsIiwic2VsZiIsImxpc3RlbmVyIiwiY3VycmVudFRhcmdldCIsImFzc2VzcyIsInByb3RvdHlwZSIsImNvbnN0dWN0b3IiLCJhZGRIYW5kbGVyIiwicWgiLCJwdXNoIiwib24iLCJyZW1vdmVIYW5kbGVyIiwiZXF1YWxzIiwiZGVzdHJveSIsInNwbGljZSIsImNsZWFyIiwiYWN0aW9uIiwiVXRpbCIsImlzRnVuY3Rpb24iLCJNZWRpYVF1ZXJ5RGlzcGF0Y2giLCJFcnJvciIsInF1ZXJpZXMiLCJicm93c2VySXNJbmNhcGFibGUiLCJjb25zdHJ1Y3RvciIsInEiLCJzaG91bGREZWdyYWRlIiwiZGVmZXJTZXR1cCIsInNldHVwIiwiaW5pdGlhbGlzZWQiLCJvZmYiLCJjb2xsZWN0aW9uIiwiZm4iLCJjb250IiwidG9TdHJpbmciLCJhcHBseSIsInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwiZ2xvYmFsIiwiZGVmYXVsdHMiLCJzcmMiLCJzcmNzZXQiLCJzZWxlY3RvciIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJleHRlbmQiLCJleHRlbmRlZCIsImRlZXAiLCJjYWxsIiwibWVyZ2UiLCJvYmoiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJMYXp5TG9hZCIsImltYWdlcyIsInNldHRpbmdzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImxvYWRJbWFnZXMiLCJvYnNlcnZlckNvbmZpZyIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwib2JzZXJ2ZSIsImxvYWRBbmREZXN0cm95IiwiZGlzY29ubmVjdCIsImxhenlsb2FkIiwialF1ZXJ5IiwiJCIsImF0dHJpYnV0ZSIsIm1ha2VBcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJtaW5MZW4iLCJuYW1lIiwidGVzdCIsImxlbiIsImFycjIiLCJNaWNyb01vZGFsIiwiRk9DVVNBQkxFX0VMRU1FTlRTIiwiTW9kYWwiLCJfcmVmIiwidGFyZ2V0TW9kYWwiLCJfcmVmJHRyaWdnZXJzIiwidHJpZ2dlcnMiLCJfcmVmJG9uU2hvdyIsIm9uU2hvdyIsIl9yZWYkb25DbG9zZSIsIm9uQ2xvc2UiLCJfcmVmJG9wZW5UcmlnZ2VyIiwib3BlblRyaWdnZXIiLCJfcmVmJGNsb3NlVHJpZ2dlciIsImNsb3NlVHJpZ2dlciIsIl9yZWYkb3BlbkNsYXNzIiwib3BlbkNsYXNzIiwiX3JlZiRkaXNhYmxlU2Nyb2xsIiwiZGlzYWJsZVNjcm9sbCIsIl9yZWYkZGlzYWJsZUZvY3VzIiwiZGlzYWJsZUZvY3VzIiwiX3JlZiRhd2FpdENsb3NlQW5pbWF0IiwiYXdhaXRDbG9zZUFuaW1hdGlvbiIsIl9yZWYkYXdhaXRPcGVuQW5pbWF0aSIsImF3YWl0T3BlbkFuaW1hdGlvbiIsIl9yZWYkZGVidWdNb2RlIiwiZGVidWdNb2RlIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsInJlZ2lzdGVyVHJpZ2dlcnMiLCJvbkNsaWNrIiwib25LZXlkb3duIiwiX3RoaXMiLCJfbGVuIiwiX2tleSIsImZpbHRlciIsIkJvb2xlYW4iLCJ0cmlnZ2VyIiwiZXZlbnQiLCJzaG93TW9kYWwiLCJfdGhpczIiLCJhY3RpdmVFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3VyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzZXRGb2N1c1RvRmlyc3ROb2RlIiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZm9jdXMiLCJjbG9zZU1vZGFsQnlJZCIsImJvZHkiLCJhc3NpZ24iLCJvdmVyZmxvdyIsImhhc0F0dHJpYnV0ZSIsInJldGFpbkZvY3VzIiwiZ2V0Rm9jdXNhYmxlTm9kZXMiLCJub2RlcyIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJmb2N1c2VkSXRlbUluZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwiYWN0aXZlTW9kYWwiLCJnZW5lcmF0ZVRyaWdnZXJNYXAiLCJ0cmlnZ2VyQXR0ciIsInRyaWdnZXJNYXAiLCJhdHRyaWJ1dGVzIiwidmFsaWRhdGVNb2RhbFByZXNlbmNlIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInZhbGlkYXRlVHJpZ2dlclByZXNlbmNlIiwidmFsaWRhdGVBcmdzIiwic2hvdyIsImNsb3NlIiwibSIsImQiLCJnZXQiLCJfX2VzTW9kdWxlIiwicCIsIm1lcmdlU2V0dGluZ3MiLCJyZXNvbHZlU2xpZGVzTnVtYmVyIiwic2VsZWN0b3JXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW5uZXJFbGVtZW50cyIsImNoaWxkcmVuIiwiY3VycmVudFNsaWRlIiwibG9vcCIsInN0YXJ0SW5kZXgiLCJNYXRoIiwibWF4IiwibWluIiwicGVyUGFnZSIsInRyYW5zZm9ybVByb3BlcnR5Iiwid2Via2l0T3JOb3QiLCJkcmFnZ2FibGUiLCJwb2ludGVyRG93biIsImRyYWciLCJzdGFydFgiLCJlbmRYIiwic3RhcnRZIiwibGV0SXRHbyIsInByZXZlbnRDbGljayIsInRvdWNoc3RhcnRIYW5kbGVyIiwidG91Y2hlbmRIYW5kbGVyIiwidG91Y2htb3ZlSGFuZGxlciIsIm1vdXNlZG93bkhhbmRsZXIiLCJtb3VzZXVwSGFuZGxlciIsIm1vdXNlbGVhdmVIYW5kbGVyIiwibW91c2Vtb3ZlSGFuZGxlciIsImRpcmVjdGlvbiIsInJ0bCIsImJ1aWxkU2xpZGVyRnJhbWUiLCJvbkluaXQiLCJzbGlkZXJGcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImVuYWJsZVRyYW5zaXRpb24iLCJjdXJzb3IiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYnVpbGRTbGlkZXJGcmFtZUl0ZW0iLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInNsaWRlVG9DdXJyZW50IiwiY3NzRmxvYXQiLCJpbm5lcldpZHRoIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJvbkNoYW5nZSIsIndlYmtpdFRyYW5zaXRpb24iLCJlYXNpbmciLCJ0cmFuc2l0aW9uIiwiYWJzIiwibXVsdGlwbGVEcmFnIiwiY2VpbCIsInByZXYiLCJuZXh0Iiwibm9kZU5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInVwZGF0ZUFmdGVyRHJhZyIsImNsZWFyRHJhZyIsImluc2VydCIsInJlbW92ZUF0dHJpYnV0ZSIsInRyYW5zZm9ybSIsImciLCJGdW5jdGlvbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwidGFyZ2V0ZWRDbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJvd25Qcm9wcyIsImtleXMiLCJyZXNBcnJheSIsImh0bWwiLCJtZWRpYVF1ZXJpZXMiLCJzbSIsIm1vYiIsInRhYiIsImxhcCIsImRlcyIsImxnIiwieGwiLCJsYW5kc2NhcGUiLCJwb3RyYWl0IiwiYnJlYWtwb2ludCIsIm1lZGlhcXVlcnkiLCJlbnF1aXJlIiwiaW5mbyIsIm5hdlNsaWRlIiwiYnVyZ2VyIiwibmF2Iiwic2xpZGVzaG93U2VsZWN0b3IiLCJwcmV2aW91c1NsaWRlIiwibmV4dFNsaWRlIiwic2xpZGVzaG93IiwiU2llbWEiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7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QUFDdlUsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0M7QUFBQSxXQUFNeVUsU0FBUyxDQUFDM0MsSUFBVixFQUFOO0FBQUEsR0FBeEM7QUFDSDs7QUFFRCxJQUFJMEMsU0FBSixFQUFlO0FBQ1hBLFdBQVMsQ0FBQ3hVLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DO0FBQUEsV0FBTXlVLFNBQVMsQ0FBQzFDLElBQVYsRUFBTjtBQUFBLEdBQXBDO0FBQ0gsQyxDQUVELDJFOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohXHJcbiAqIEFjY29yZGlvbiB2Mi44LjBcclxuICogU2ltcGxlIGFjY29yZGlvbiBjcmVhdGVkIGluIHB1cmUgSmF2YXNjcmlwdC5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY2h1MmsvQWNjb3JkaW9uXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE3LTIwMTkgTWljaGHFgiBTdHJ1bXBmXHJcbiAqIFB1Ymxpc2hlZCB1bmRlciBNSVQgTGljZW5zZVxyXG4gKi9cclxuXCJ1c2Ugc3RyaWN0XCI7IWZ1bmN0aW9uKGkpe2Z1bmN0aW9uIHUobyxsKXt2YXIgYz10aGlzLHQ9e2luaXQ6ZnVuY3Rpb24oKXtpZihBcnJheS5pc0FycmF5KG8pKXJldHVybiBvLmxlbmd0aCYmby5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyB1KGUsbCl9KSwhMTt0aGlzLm9wdGlvbnM9aCh7ZHVyYXRpb246NjAwLGl0ZW1OdW1iZXI6MCxhcmlhOiEwLGNsb3NlT3RoZXJzOiEwLHNob3dJdGVtOiExLGVsZW1lbnRDbGFzczpcImFjXCIscXVlc3Rpb25DbGFzczpcImFjLXFcIixhbnN3ZXJDbGFzczpcImFjLWFcIix0YXJnZXRDbGFzczpcImFjLXRhcmdldFwiLG9uVG9nZ2xlOmZ1bmN0aW9uKCl7fX0sbCksdGhpcy5jb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvKSx0aGlzLmVsZW1lbnRzPXRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5vcHRpb25zLmVsZW1lbnRDbGFzcyk7dmFyIGU9dGhpcy5vcHRpb25zLHQ9ZS5hcmlhLG49ZS5zaG93SXRlbSxpPWUuaXRlbU51bWJlcjt0JiZ0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJsaXN0XCIpO2Zvcih2YXIgcz0wO3M8dGhpcy5lbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgcj10aGlzLmVsZW1lbnRzW3NdO3IuY2xhc3NMaXN0LmFkZChcImpzLWVuYWJsZWRcIiksdGhpcy5oaWRlRWxlbWVudChyKSx0aGlzLnNldFRyYW5zaXRpb24ociksdGhpcy5nZW5lcmF0ZUlEKHIpLHQmJnRoaXMuc2V0QVJJQShyKX1pZihuKXt2YXIgYT10aGlzLmVsZW1lbnRzWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiZpPHRoaXMuZWxlbWVudHMubGVuZ3RoJiYoYT10aGlzLmVsZW1lbnRzW2ldKSx0aGlzLnRvZ2dsZUVsZW1lbnQoYSwhMSl9Yy5hdHRhY2hFdmVudHMoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMsbj10LmR1cmF0aW9uLGk9dC5hbnN3ZXJDbGFzcyxzPWUucXVlcnlTZWxlY3RvcihcIi5cIitpKSxyPWEoXCJ0cmFuc2l0aW9uXCIpO3Muc3R5bGVbcl09bitcIm1zXCJ9LGdlbmVyYXRlSUQ6ZnVuY3Rpb24oZSl7ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWMtXCIuY29uY2F0KHMpKSxzKyt9LHNldEFSSUE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLG49dC5xdWVzdGlvbkNsYXNzLGk9dC5hbnN3ZXJDbGFzcyxzPWUucXVlcnlTZWxlY3RvcihcIi5cIituKSxyPWUucXVlcnlTZWxlY3RvcihcIi5cIitpKTtzLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYlwiKSxzLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLHIuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFicGFuZWxcIil9LHVwZGF0ZUFSSUE6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLm9wdGlvbnMucXVlc3Rpb25DbGFzcztlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrbikuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLHQpfSxjYWxsU3BlY2lmaWNFbGVtZW50OmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnRhcmdldCxuPXRoaXMub3B0aW9ucyxpPW4ucXVlc3Rpb25DbGFzcyxzPW4udGFyZ2V0Q2xhc3Mscj1uLmNsb3NlT3RoZXJzLGE9MDthPHRoaXMuZWxlbWVudHMubGVuZ3RoO2ErKylpZih0aGlzLmVsZW1lbnRzW2FdLmNvbnRhaW5zKHQpKXsodC5jbGFzc05hbWUubWF0Y2goaSl8fHQuY2xhc3NOYW1lLm1hdGNoKHMpKSYmKGUucHJldmVudERlZmF1bHQoKSxyJiZ0aGlzLmNsb3NlQWxsRWxlbWVudHMoYSksdGhpcy50b2dnbGVFbGVtZW50KHRoaXMuZWxlbWVudHNbYV0pKTticmVha319LGhpZGVFbGVtZW50OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucy5hbnN3ZXJDbGFzcztlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdCkuc3R5bGUuaGVpZ2h0PTB9LHRvZ2dsZUVsZW1lbnQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPSEoMTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT10KXx8dCxzPXRoaXMub3B0aW9ucyxyPXMuYW5zd2VyQ2xhc3MsYT1zLmFyaWEsbz1zLm9uVG9nZ2xlLGw9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK3IpLGM9bC5zY3JvbGxIZWlnaHQ7ZS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpLGl8fChsLnN0eWxlLmhlaWdodD1cImF1dG9cIiksMDxwYXJzZUludChsLnN0eWxlLmhlaWdodCk/KG49ITEscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7bC5zdHlsZS5oZWlnaHQ9MH0pKToobj0hMCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsLnN0eWxlLmhlaWdodD1jK1wicHhcIn0pKSxhJiZ0aGlzLnVwZGF0ZUFSSUEoZSxuKSxpJiZvKGUsdGhpcy5lbGVtZW50cyl9LGNsb3NlQWxsRWxlbWVudHM6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMub3B0aW9ucy5hcmlhLG49dGhpcy5lbGVtZW50cy5sZW5ndGgsaT0wO2k8bjtpKyspaWYoaSE9ZSl7dmFyIHM9dGhpcy5lbGVtZW50c1tpXTtzLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSYmcy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpLHQmJnRoaXMudXBkYXRlQVJJQShzLCExKSx0aGlzLmhpZGVFbGVtZW50KHMpfX0scmVzaXplSGFuZGxlcjpmdW5jdGlvbigpe2Zvcih2YXIgZSx0LG49dGhpcy5vcHRpb25zLGk9bi5lbGVtZW50Q2xhc3Mscz1uLmFuc3dlckNsYXNzLHI9dGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5cIitpK1wiLmlzLWFjdGl2ZVwiKSxhPTA7YTxyLmxlbmd0aDthKyspdD1yW2FdLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrcykscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5zdHlsZS5oZWlnaHQ9XCJhdXRvXCIsZT10Lm9mZnNldEhlaWdodCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnN0eWxlLmhlaWdodD1lK1wicHhcIn0pfSl9LGNsaWNrSGFuZGxlcjpmdW5jdGlvbihlKXt0aGlzLmNhbGxTcGVjaWZpY0VsZW1lbnQoZSl9LGtleWRvd25IYW5kbGVyOmZ1bmN0aW9uKGUpezEzPT09ZS5rZXlDb2RlJiZ0aGlzLmNhbGxTcGVjaWZpY0VsZW1lbnQoZSl9fTt0aGlzLmF0dGFjaEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXQ7ZS5jbGlja0hhbmRsZXI9ZS5jbGlja0hhbmRsZXIuYmluZChlKSxlLmtleWRvd25IYW5kbGVyPWUua2V5ZG93bkhhbmRsZXIuYmluZChlKSxlLnJlc2l6ZUhhbmRsZXI9ZS5yZXNpemVIYW5kbGVyLmJpbmQoZSksZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZS5rZXlkb3duSGFuZGxlciksaS5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5yZXNpemVIYW5kbGVyKX0sdGhpcy5kZXRhY2hFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10O2UuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUuY2xpY2tIYW5kbGVyKSxlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUua2V5ZG93bkhhbmRsZXIpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGUucmVzaXplSGFuZGxlcil9O3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVbZV0/ZTooZT1uKGUpLGU9XCJ3ZWJraXRcIi5jb25jYXQoZSkpfSxuPWZ1bmN0aW9uKGUpe3JldHVybiBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9LGg9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl07cmV0dXJuIGV9O2kucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxpLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7aS5zZXRUaW1lb3V0KGUsMWUzLzYwKX0sdC5pbml0KCl9dmFyIHM9MDtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZ2b2lkIDAhPT1tb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz11OmkuQWNjb3JkaW9uPXV9KHdpbmRvdyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lbnF1aXJlU2NyZWVuID0gZW5xdWlyZVNjcmVlbjtcbmV4cG9ydHMudW5lbnF1aXJlU2NyZWVuID0gdW5lbnF1aXJlU2NyZWVuO1xudmFyIGVucXVpcmVKcyA9IHZvaWQgMDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgbWF0Y2hNZWRpYVBvbHlmaWxsID0gZnVuY3Rpb24gbWF0Y2hNZWRpYVBvbHlmaWxsKG1lZGlhUXVlcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVkaWE6IG1lZGlhUXVlcnksXG4gICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcigpIHt9LFxuICAgICAgcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge31cbiAgICB9O1xuICB9O1xuICB3aW5kb3cubWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhIHx8IG1hdGNoTWVkaWFQb2x5ZmlsbDtcbiAgZW5xdWlyZUpzID0gcmVxdWlyZSgnZW5xdWlyZS5qcycpO1xufVxuXG52YXIgbW9iaWxlUXVlcnkgPSAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OXB4KSc7XG5cbmZ1bmN0aW9uIGVucXVpcmVTY3JlZW4oY2IpIHtcbiAgdmFyIHF1ZXJ5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBtb2JpbGVRdWVyeTtcblxuICBpZiAoIWVucXVpcmVKcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0ge1xuICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaCgpIHtcbiAgICAgIGNiICYmIGNiKHRydWUpO1xuICAgIH0sXG4gICAgdW5tYXRjaDogZnVuY3Rpb24gdW5tYXRjaCgpIHtcbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfVxuICB9O1xuICBlbnF1aXJlSnMucmVnaXN0ZXIocXVlcnksIGhhbmRsZXIpO1xuICByZXR1cm4gaGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gdW5lbnF1aXJlU2NyZWVuKGhhbmRsZXIpIHtcbiAgdmFyIHF1ZXJ5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBtb2JpbGVRdWVyeTtcblxuICBpZiAoIWVucXVpcmVKcykge1xuICAgIHJldHVybjtcbiAgfVxuICBlbnF1aXJlSnMudW5yZWdpc3RlcihxdWVyeSwgaGFuZGxlcik7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGVucXVpcmVKcztcbiIsInZhciBRdWVyeUhhbmRsZXIgPSByZXF1aXJlKCcuL1F1ZXJ5SGFuZGxlcicpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuL1V0aWwnKS5lYWNoO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgbWVkaWEgcXVlcnksIG1hbmFnZXMgaXQncyBzdGF0ZSBhbmQgcmVnaXN0ZXJlZCBoYW5kbGVycyBmb3IgdGhpcyBxdWVyeVxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBtZWRpYSBxdWVyeSBzdHJpbmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzVW5jb25kaXRpb25hbD1mYWxzZV0gd2hldGhlciB0aGUgbWVkaWEgcXVlcnkgc2hvdWxkIHJ1biByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIGNvbmRpdGlvbnMgYXJlIG1ldC4gUHJpbWFyaWx5IGZvciBoZWxwaW5nIG9sZGVyIGJyb3dzZXJzIGRlYWwgd2l0aCBtb2JpbGUtZmlyc3QgZGVzaWduXG4gKi9cbmZ1bmN0aW9uIE1lZGlhUXVlcnkocXVlcnksIGlzVW5jb25kaXRpb25hbCkge1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmlzVW5jb25kaXRpb25hbCA9IGlzVW5jb25kaXRpb25hbDtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uKG1xbCkge1xuICAgICAgICAvLyBDaHJvbWUgcGFzc2VzIGFuIE1lZGlhUXVlcnlMaXN0RXZlbnQgb2JqZWN0LCB3aGlsZSBvdGhlciBicm93c2VycyBwYXNzIE1lZGlhUXVlcnlMaXN0IGRpcmVjdGx5XG4gICAgICAgIHNlbGYubXFsID0gbXFsLmN1cnJlbnRUYXJnZXQgfHwgbXFsO1xuICAgICAgICBzZWxmLmFzc2VzcygpO1xuICAgIH07XG4gICAgdGhpcy5tcWwuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG59XG5cbk1lZGlhUXVlcnkucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3R1Y3RvciA6IE1lZGlhUXVlcnksXG5cbiAgICAvKipcbiAgICAgKiBhZGQgYSBoYW5kbGVyIGZvciB0aGlzIHF1ZXJ5LCB0cmlnZ2VyaW5nIGlmIGFscmVhZHkgYWN0aXZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gcXVlcnkgaXMgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIudW5tYXRjaF0gY2FsbGJhY2sgZm9yIHdoZW4gcXVlcnkgaXMgZGVhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlci5zZXR1cF0gY2FsbGJhY2sgZm9yIGltbWVkaWF0ZSBleGVjdXRpb24gd2hlbiBhIHF1ZXJ5IGhhbmRsZXIgaXMgcmVnaXN0ZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhbmRsZXIuZGVmZXJTZXR1cD1mYWxzZV0gc2hvdWxkIHRoZSBzZXR1cCBjYWxsYmFjayBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZmlyc3QgdGltZSB0aGUgaGFuZGxlciBpcyBtYXRjaGVkP1xuICAgICAqL1xuICAgIGFkZEhhbmRsZXIgOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIHZhciBxaCA9IG5ldyBRdWVyeUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChxaCk7XG5cbiAgICAgICAgdGhpcy5tYXRjaGVzKCkgJiYgcWgub24oKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlcyB0aGUgZ2l2ZW4gaGFuZGxlciBmcm9tIHRoZSBjb2xsZWN0aW9uLCBhbmQgY2FsbHMgaXQncyBkZXN0cm95IG1ldGhvZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBoYW5kbGVyIHRoZSBoYW5kbGVyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZUhhbmRsZXIgOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnM7XG4gICAgICAgIGVhY2goaGFuZGxlcnMsIGZ1bmN0aW9uKGgsIGkpIHtcbiAgICAgICAgICAgIGlmKGguZXF1YWxzKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFoYW5kbGVycy5zcGxpY2UoaSwxKTsgLy9yZW1vdmUgZnJvbSBhcnJheSBhbmQgZXhpdCBlYWNoIGVhcmx5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgbWVkaWEgcXVlcnkgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYSBtYXRjaFxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBtZWRpYSBxdWVyeSBjYW4gYmUgY29uc2lkZXJlZCBhIG1hdGNoLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBtYXRjaGVzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1xbC5tYXRjaGVzIHx8IHRoaXMuaXNVbmNvbmRpdGlvbmFsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGhhbmRsZXJzIGFuZCB1bmJpbmRzIGV2ZW50c1xuICAgICAqL1xuICAgIGNsZWFyIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1xbC5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5sZW5ndGggPSAwOyAvL2NsZWFyIGFycmF5XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgICogQXNzZXNzZXMgdGhlIHF1ZXJ5LCB0dXJuaW5nIG9uIGFsbCBoYW5kbGVycyBpZiBpdCBtYXRjaGVzLCB0dXJuaW5nIHRoZW0gb2ZmIGlmIGl0IGRvZXNuJ3QgbWF0Y2hcbiAgICAgICAgKi9cbiAgICBhc3Nlc3MgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMubWF0Y2hlcygpID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlclthY3Rpb25dKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFRdWVyeTtcbiIsInZhciBNZWRpYVF1ZXJ5ID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5Jyk7XG52YXIgVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xudmFyIGVhY2ggPSBVdGlsLmVhY2g7XG52YXIgaXNGdW5jdGlvbiA9IFV0aWwuaXNGdW5jdGlvbjtcbnZhciBpc0FycmF5ID0gVXRpbC5pc0FycmF5O1xuXG4vKipcbiAqIEFsbG93cyBmb3IgcmVnaXN0cmF0aW9uIG9mIHF1ZXJ5IGhhbmRsZXJzLlxuICogTWFuYWdlcyB0aGUgcXVlcnkgaGFuZGxlcidzIHN0YXRlIGFuZCBpcyByZXNwb25zaWJsZSBmb3Igd2lyaW5nIHVwIGJyb3dzZXIgZXZlbnRzXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE1lZGlhUXVlcnlEaXNwYXRjaCAoKSB7XG4gICAgaWYoIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWF0Y2hNZWRpYSBub3QgcHJlc2VudCwgbGVnYWN5IGJyb3dzZXJzIHJlcXVpcmUgYSBwb2x5ZmlsbCcpO1xuICAgIH1cblxuICAgIHRoaXMucXVlcmllcyA9IHt9O1xuICAgIHRoaXMuYnJvd3NlcklzSW5jYXBhYmxlID0gIXdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IGFsbCcpLm1hdGNoZXM7XG59XG5cbk1lZGlhUXVlcnlEaXNwYXRjaC5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvciA6IE1lZGlhUXVlcnlEaXNwYXRjaCxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGhhbmRsZXIgZm9yIHRoZSBnaXZlbiBtZWRpYSBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5XG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgQXJyYXkgfHwgRnVuY3Rpb259IG9wdGlvbnMgZWl0aGVyIGEgc2luZ2xlIHF1ZXJ5IGhhbmRsZXIgb2JqZWN0LCBhIGZ1bmN0aW9uLCBvciBhbiBhcnJheSBvZiBxdWVyeSBoYW5kbGVyc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggZmlyZWQgd2hlbiBxdWVyeSBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMudW5tYXRjaF0gZmlyZWQgd2hlbiBhIHF1ZXJ5IGlzIG5vIGxvbmdlciBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuc2V0dXBdIGZpcmVkIHdoZW4gaGFuZGxlciBmaXJzdCB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHdoZXRoZXIgc2V0dXAgc2hvdWxkIGJlIHJ1biBpbW1lZGlhdGVseSBvciBkZWZlcnJlZCB1bnRpbCBxdWVyeSBpcyBmaXJzdCBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc2hvdWxkRGVncmFkZT1mYWxzZV0gd2hldGhlciB0aGlzIHBhcnRpY3VsYXIgbWVkaWEgcXVlcnkgc2hvdWxkIGFsd2F5cyBydW4gb24gaW5jYXBhYmxlIGJyb3dzZXJzXG4gICAgICovXG4gICAgcmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBvcHRpb25zLCBzaG91bGREZWdyYWRlKSB7XG4gICAgICAgIHZhciBxdWVyaWVzICAgICAgICAgPSB0aGlzLnF1ZXJpZXMsXG4gICAgICAgICAgICBpc1VuY29uZGl0aW9uYWwgPSBzaG91bGREZWdyYWRlICYmIHRoaXMuYnJvd3NlcklzSW5jYXBhYmxlO1xuXG4gICAgICAgIGlmKCFxdWVyaWVzW3FdKSB7XG4gICAgICAgICAgICBxdWVyaWVzW3FdID0gbmV3IE1lZGlhUXVlcnkocSwgaXNVbmNvbmRpdGlvbmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbm9ybWFsaXNlIHRvIG9iamVjdCBpbiBhbiBhcnJheVxuICAgICAgICBpZihpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0geyBtYXRjaCA6IG9wdGlvbnMgfTtcbiAgICAgICAgfVxuICAgICAgICBpZighaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IFtvcHRpb25zXTtcbiAgICAgICAgfVxuICAgICAgICBlYWNoKG9wdGlvbnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHsgbWF0Y2ggOiBoYW5kbGVyIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyaWVzW3FdLmFkZEhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB1bnJlZ2lzdGVycyBhIHF1ZXJ5IGFuZCBhbGwgaXQncyBoYW5kbGVycywgb3IgYSBzcGVjaWZpYyBoYW5kbGVyIGZvciBhIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcSB0aGUgbWVkaWEgcXVlcnkgdG8gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IFtoYW5kbGVyXSBzcGVjaWZpYyBoYW5kbGVyIHRvIHVucmVnaXN0ZXJcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyIDogZnVuY3Rpb24ocSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbcV07XG5cbiAgICAgICAgaWYocXVlcnkpIHtcbiAgICAgICAgICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5yZW1vdmVIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnkuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5xdWVyaWVzW3FdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVF1ZXJ5RGlzcGF0Y2g7XG4iLCIvKipcbiAqIERlbGVnYXRlIHRvIGhhbmRsZSBhIG1lZGlhIHF1ZXJ5IGJlaW5nIG1hdGNoZWQgYW5kIHVubWF0Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgbWF0Y2hlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMudW5tYXRjaF0gY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIHVubWF0Y2hlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuc2V0dXBdIG9uZS10aW1lIGNhbGxiYWNrIHRyaWdnZXJlZCB0aGUgZmlyc3QgdGltZSBhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gc2hvdWxkIHRoZSBzZXR1cCBjYWxsYmFjayBiZSBydW4gaW1tZWRpYXRlbHksIHJhdGhlciB0aGFuIGZpcnN0IHRpbWUgcXVlcnkgaXMgbWF0Y2hlZD9cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBRdWVyeUhhbmRsZXIob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgIW9wdGlvbnMuZGVmZXJTZXR1cCAmJiB0aGlzLnNldHVwKCk7XG59XG5cblF1ZXJ5SGFuZGxlci5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvciA6IFF1ZXJ5SGFuZGxlcixcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHNldHVwIG9mIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXR1cCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMuc2V0dXApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBhbmQgdHJpZ2dlcmluZyBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgb24gOiBmdW5jdGlvbigpIHtcbiAgICAgICAgIXRoaXMuaW5pdGlhbGlzZWQgJiYgdGhpcy5zZXR1cCgpO1xuICAgICAgICB0aGlzLm9wdGlvbnMubWF0Y2ggJiYgdGhpcy5vcHRpb25zLm1hdGNoKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHRoZSB1bm1hdGNoIGV2ZW50IGZvciB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgb2ZmIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51bm1hdGNoICYmIHRoaXMub3B0aW9ucy51bm1hdGNoKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNhbGxlZCB3aGVuIGEgaGFuZGxlciBpcyB0byBiZSBkZXN0cm95ZWQuXG4gICAgICogZGVsZWdhdGVzIHRvIHRoZSBkZXN0cm95IG9yIHVubWF0Y2ggY2FsbGJhY2tzLCBkZXBlbmRpbmcgb24gYXZhaWxhYmlsaXR5LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgZGVzdHJveSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGVzdHJveSA/IHRoaXMub3B0aW9ucy5kZXN0cm95KCkgOiB0aGlzLm9mZigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBkZXRlcm1pbmVzIGVxdWFsaXR5IGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBpZiBvYmplY3QgaXMgc3VwcGxpZWQgY29tcGFyZSBvcHRpb25zLCBpZiBmdW5jdGlvbiwgY29tcGFyZSBtYXRjaCBjYWxsYmFja1xuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IFt0YXJnZXRdIHRoZSB0YXJnZXQgZm9yIGNvbXBhcmlzb25cbiAgICAgKi9cbiAgICBlcXVhbHMgOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9PT0gdGFyZ2V0IHx8IHRoaXMub3B0aW9ucy5tYXRjaCA9PT0gdGFyZ2V0O1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeUhhbmRsZXI7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgaXRlcmF0aW5nIG92ZXIgYSBjb2xsZWN0aW9uXG4gKlxuICogQHBhcmFtIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSBmblxuICovXG5mdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGZuKSB7XG4gICAgdmFyIGkgICAgICA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICBjb250O1xuXG4gICAgZm9yKGk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb250ID0gZm4oY29sbGVjdGlvbltpXSwgaSk7XG4gICAgICAgIGlmKGNvbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhazsgLy9hbGxvdyBlYXJseSBleGl0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodGFyZ2V0KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHRhcmdldCB0aGUgb2JqZWN0IHVuZGVyIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgZnVuY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpc0Z1bmN0aW9uIDogaXNGdW5jdGlvbixcbiAgICBpc0FycmF5IDogaXNBcnJheSxcbiAgICBlYWNoIDogZWFjaFxufTtcbiIsInZhciBNZWRpYVF1ZXJ5RGlzcGF0Y2ggPSByZXF1aXJlKCcuL01lZGlhUXVlcnlEaXNwYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgTWVkaWFRdWVyeURpc3BhdGNoKCk7XG4iLCIvKiFcbiAqIExhenkgTG9hZCAtIEphdmFTY3JpcHQgcGx1Z2luIGZvciBsYXp5IGxvYWRpbmcgaW1hZ2VzXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDA3LTIwMTkgTWlrYSBUdXVwb2xhXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICpcbiAqIFByb2plY3QgaG9tZTpcbiAqICAgaHR0cHM6Ly9hcHBlbHNpaW5pLm5ldC9wcm9qZWN0cy9sYXp5bG9hZFxuICpcbiAqIFZlcnNpb246IDIuMC4wLXJjLjJcbiAqXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5MYXp5TG9hZCA9IGZhY3Rvcnkocm9vdCk7XG4gICAgfVxufSkgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0aGlzLndpbmRvdyB8fCB0aGlzLmdsb2JhbCwgZnVuY3Rpb24gKHJvb3QpIHtcblxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgcm9vdCA9IHdpbmRvdztcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgc3JjOiBcImRhdGEtc3JjXCIsXG4gICAgICAgIHNyY3NldDogXCJkYXRhLXNyY3NldFwiLFxuICAgICAgICBzZWxlY3RvcjogXCIubGF6eWxvYWRcIixcbiAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgfTtcblxuICAgIC8qKlxuICAgICogTWVyZ2UgdHdvIG9yIG1vcmUgb2JqZWN0cy4gUmV0dXJucyBhIG5ldyBvYmplY3QuXG4gICAgKiBAcHJpdmF0ZVxuICAgICogQHBhcmFtIHtCb29sZWFufSAgZGVlcCAgICAgSWYgdHJ1ZSwgZG8gYSBkZWVwIChvciByZWN1cnNpdmUpIG1lcmdlIFtvcHRpb25hbF1cbiAgICAqIEBwYXJhbSB7T2JqZWN0fSAgIG9iamVjdHMgIFRoZSBvYmplY3RzIHRvIG1lcmdlIHRvZ2V0aGVyXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fSAgICAgICAgICBNZXJnZWQgdmFsdWVzIG9mIGRlZmF1bHRzIGFuZCBvcHRpb25zXG4gICAgKi9cbiAgICBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoKSAge1xuXG4gICAgICAgIGxldCBleHRlbmRlZCA9IHt9O1xuICAgICAgICBsZXQgZGVlcCA9IGZhbHNlO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gICAgICAgIC8qIENoZWNrIGlmIGEgZGVlcCBtZXJnZSAqL1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50c1swXSkgPT09IFwiW29iamVjdCBCb29sZWFuXVwiKSB7XG4gICAgICAgICAgICBkZWVwID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTWVyZ2UgdGhlIG9iamVjdCBpbnRvIHRoZSBleHRlbmRlZCBvYmplY3QgKi9cbiAgICAgICAgbGV0IG1lcmdlID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogSWYgZGVlcCBtZXJnZSBhbmQgcHJvcGVydHkgaXMgYW4gb2JqZWN0LCBtZXJnZSBwcm9wZXJ0aWVzICovXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWVwICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpbcHJvcF0pID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmRlZFtwcm9wXSA9IGV4dGVuZCh0cnVlLCBleHRlbmRlZFtwcm9wXSwgb2JqW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qIExvb3AgdGhyb3VnaCBlYWNoIG9iamVjdCBhbmQgY29uZHVjdCBhIG1lcmdlICovXG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBtZXJnZShvYmopO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4dGVuZGVkO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBMYXp5TG9hZChpbWFnZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZXR0aW5ncy5zZWxlY3Rvcik7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBMYXp5TG9hZC5wcm90b3R5cGUgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvKiBXaXRob3V0IG9ic2VydmVycyBsb2FkIGV2ZXJ5dGhpbmcgYW5kIGJhaWwgb3V0IGVhcmx5LiAqL1xuICAgICAgICAgICAgaWYgKCFyb290LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgb2JzZXJ2ZXJDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgcm9vdDogdGhpcy5zZXR0aW5ncy5yb290LFxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46IHRoaXMuc2V0dGluZ3Mucm9vdE1hcmdpbixcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IFt0aGlzLnNldHRpbmdzLnRocmVzaG9sZF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcykge1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZW50cmllcywgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmMgPSBlbnRyeS50YXJnZXQuZ2V0QXR0cmlidXRlKHNlbGYuc2V0dGluZ3Muc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmNzZXQgPSBlbnRyeS50YXJnZXQuZ2V0QXR0cmlidXRlKHNlbGYuc2V0dGluZ3Muc3Jjc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImltZ1wiID09PSBlbnRyeS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zcmNzZXQgPSBzcmNzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBzcmMgKyBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgb2JzZXJ2ZXJDb25maWcpO1xuXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZEFuZERlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncykgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHRoaXMubG9hZEltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZEltYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKHNlbGYuc2V0dGluZ3Muc3JjKTtcbiAgICAgICAgICAgICAgICBsZXQgc3Jjc2V0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKHNlbGYuc2V0dGluZ3Muc3Jjc2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoXCJpbWdcIiA9PT0gaW1hZ2UudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmNzZXQgPSBzcmNzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBzcmMgKyBcIicpXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290Lmxhenlsb2FkID0gZnVuY3Rpb24oaW1hZ2VzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTGF6eUxvYWQoaW1hZ2VzLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgaWYgKHJvb3QualF1ZXJ5KSB7XG4gICAgICAgIGNvbnN0ICQgPSByb290LmpRdWVyeTtcbiAgICAgICAgJC5mbi5sYXp5bG9hZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMuYXR0cmlidXRlID0gb3B0aW9ucy5hdHRyaWJ1dGUgfHwgXCJkYXRhLXNyY1wiO1xuICAgICAgICAgICAgbmV3IExhenlMb2FkKCQubWFrZUFycmF5KHRoaXMpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBMYXp5TG9hZDtcbn0pO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciBNaWNyb01vZGFsID0gZnVuY3Rpb24gKCkge1xuXG4gIHZhciBGT0NVU0FCTEVfRUxFTUVOVFMgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJywgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKSddO1xuXG4gIHZhciBNb2RhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9kYWwoX3JlZikge1xuICAgICAgdmFyIHRhcmdldE1vZGFsID0gX3JlZi50YXJnZXRNb2RhbCxcbiAgICAgICAgICBfcmVmJHRyaWdnZXJzID0gX3JlZi50cmlnZ2VycyxcbiAgICAgICAgICB0cmlnZ2VycyA9IF9yZWYkdHJpZ2dlcnMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiR0cmlnZ2VycyxcbiAgICAgICAgICBfcmVmJG9uU2hvdyA9IF9yZWYub25TaG93LFxuICAgICAgICAgIG9uU2hvdyA9IF9yZWYkb25TaG93ID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9yZWYkb25TaG93LFxuICAgICAgICAgIF9yZWYkb25DbG9zZSA9IF9yZWYub25DbG9zZSxcbiAgICAgICAgICBvbkNsb3NlID0gX3JlZiRvbkNsb3NlID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9yZWYkb25DbG9zZSxcbiAgICAgICAgICBfcmVmJG9wZW5UcmlnZ2VyID0gX3JlZi5vcGVuVHJpZ2dlcixcbiAgICAgICAgICBvcGVuVHJpZ2dlciA9IF9yZWYkb3BlblRyaWdnZXIgPT09IHZvaWQgMCA/ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcicgOiBfcmVmJG9wZW5UcmlnZ2VyLFxuICAgICAgICAgIF9yZWYkY2xvc2VUcmlnZ2VyID0gX3JlZi5jbG9zZVRyaWdnZXIsXG4gICAgICAgICAgY2xvc2VUcmlnZ2VyID0gX3JlZiRjbG9zZVRyaWdnZXIgPT09IHZvaWQgMCA/ICdkYXRhLW1pY3JvbW9kYWwtY2xvc2UnIDogX3JlZiRjbG9zZVRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRvcGVuQ2xhc3MgPSBfcmVmLm9wZW5DbGFzcyxcbiAgICAgICAgICBvcGVuQ2xhc3MgPSBfcmVmJG9wZW5DbGFzcyA9PT0gdm9pZCAwID8gJ2lzLW9wZW4nIDogX3JlZiRvcGVuQ2xhc3MsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlU2Nyb2xsID0gX3JlZi5kaXNhYmxlU2Nyb2xsLFxuICAgICAgICAgIGRpc2FibGVTY3JvbGwgPSBfcmVmJGRpc2FibGVTY3JvbGwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkaXNhYmxlU2Nyb2xsLFxuICAgICAgICAgIF9yZWYkZGlzYWJsZUZvY3VzID0gX3JlZi5kaXNhYmxlRm9jdXMsXG4gICAgICAgICAgZGlzYWJsZUZvY3VzID0gX3JlZiRkaXNhYmxlRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkaXNhYmxlRm9jdXMsXG4gICAgICAgICAgX3JlZiRhd2FpdENsb3NlQW5pbWF0ID0gX3JlZi5hd2FpdENsb3NlQW5pbWF0aW9uLFxuICAgICAgICAgIGF3YWl0Q2xvc2VBbmltYXRpb24gPSBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhd2FpdENsb3NlQW5pbWF0LFxuICAgICAgICAgIF9yZWYkYXdhaXRPcGVuQW5pbWF0aSA9IF9yZWYuYXdhaXRPcGVuQW5pbWF0aW9uLFxuICAgICAgICAgIGF3YWl0T3BlbkFuaW1hdGlvbiA9IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0T3BlbkFuaW1hdGksXG4gICAgICAgICAgX3JlZiRkZWJ1Z01vZGUgPSBfcmVmLmRlYnVnTW9kZSxcbiAgICAgICAgICBkZWJ1Z01vZGUgPSBfcmVmJGRlYnVnTW9kZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRlYnVnTW9kZTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgICAgLy8gU2F2ZSBhIHJlZmVyZW5jZSBvZiB0aGUgbW9kYWxcbiAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRNb2RhbCk7IC8vIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHBhc3NlZCBjb25maWdcblxuICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgIGRlYnVnTW9kZTogZGVidWdNb2RlLFxuICAgICAgICBkaXNhYmxlU2Nyb2xsOiBkaXNhYmxlU2Nyb2xsLFxuICAgICAgICBvcGVuVHJpZ2dlcjogb3BlblRyaWdnZXIsXG4gICAgICAgIGNsb3NlVHJpZ2dlcjogY2xvc2VUcmlnZ2VyLFxuICAgICAgICBvcGVuQ2xhc3M6IG9wZW5DbGFzcyxcbiAgICAgICAgb25TaG93OiBvblNob3csXG4gICAgICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgICAgIGF3YWl0Q2xvc2VBbmltYXRpb246IGF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgIGF3YWl0T3BlbkFuaW1hdGlvbjogYXdhaXRPcGVuQW5pbWF0aW9uLFxuICAgICAgICBkaXNhYmxlRm9jdXM6IGRpc2FibGVGb2N1c1xuICAgICAgfTsgLy8gUmVnaXN0ZXIgY2xpY2sgZXZlbnRzIG9ubHkgaWYgcHJlIGJpbmRpbmcgZXZlbnRMaXN0ZW5lcnNcblxuICAgICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA+IDApIHRoaXMucmVnaXN0ZXJUcmlnZ2Vycy5hcHBseSh0aGlzLCBfdG9Db25zdW1hYmxlQXJyYXkodHJpZ2dlcnMpKTsgLy8gcHJlIGJpbmQgZnVuY3Rpb25zIGZvciBldmVudCBsaXN0ZW5lcnNcblxuICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLm9uS2V5ZG93biA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvb3BzIHRocm91Z2ggYWxsIG9wZW5UcmlnZ2VycyBhbmQgYmluZHMgY2xpY2sgZXZlbnRcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgW0FycmF5IG9mIG5vZGUgZWxlbWVudHNdXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgICAga2V5OiBcInJlZ2lzdGVyVHJpZ2dlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclRyaWdnZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmlnZ2VycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICB0cmlnZ2Vyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJzLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNob3dNb2RhbChldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzaG93TW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW91cignZGlzYWJsZScpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0T3BlbkFuaW1hdGlvbikge1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIF90aGlzMi5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIF90aGlzMi5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcub25TaG93KHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZU1vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB2YXIgbW9kYWwgPSB0aGlzLm1vZGFsO1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdlbmFibGUnKTtcblxuICAgICAgICBpZiAodGhpcy5hY3RpdmVFbGVtZW50ICYmIHRoaXMuYWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcub25DbG9zZSh0aGlzLm1vZGFsLCB0aGlzLmFjdGl2ZUVsZW1lbnQsIGV2ZW50KTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRDbG9zZUFuaW1hdGlvbikge1xuICAgICAgICAgIHZhciBvcGVuQ2xhc3MgPSB0aGlzLmNvbmZpZy5vcGVuQ2xhc3M7IC8vIDwtIG9sZCBzY2hvb2wgZnR3XG5cbiAgICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKG9wZW5DbGFzcyk7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZU1vZGFsQnlJZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWxCeUlkKHRhcmdldE1vZGFsKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRNb2RhbCk7XG4gICAgICAgIGlmICh0aGlzLm1vZGFsKSB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2Nyb2xsQmVoYXZpb3VyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsQmVoYXZpb3VyKHRvZ2dsZSkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVTY3JvbGwpIHJldHVybjtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAgICAgc3dpdGNoICh0b2dnbGUpIHtcbiAgICAgICAgICBjYXNlICdlbmFibGUnOlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LnN0eWxlLCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2Rpc2FibGUnOlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LnN0eWxlLCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZGRFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVtb3ZlRXZlbnRMaXN0ZW5lcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaGFzQXR0cmlidXRlKHRoaXMuY29uZmlnLmNsb3NlVHJpZ2dlcikpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uS2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5ZG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHRoaXMuY2xvc2VNb2RhbChldmVudCk7IC8vIGVzY1xuXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5KSB0aGlzLnJldGFpbkZvY3VzKGV2ZW50KTsgLy8gdGFiXG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEZvY3VzYWJsZU5vZGVzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvckFsbChGT0NVU0FCTEVfRUxFTUVOVFMpO1xuICAgICAgICByZXR1cm4gQXJyYXkuYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkobm9kZXMpKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVHJpZXMgdG8gc2V0IGZvY3VzIG9uIGEgbm9kZSB3aGljaCBpcyBub3QgYSBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKiBpZiBubyBvdGhlciBub2RlcyBleGlzdCB0aGVuIGZvY3VzZXMgb24gZmlyc3QgY2xvc2UgdHJpZ2dlclxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0Rm9jdXNUb0ZpcnN0Tm9kZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZvY3VzVG9GaXJzdE5vZGUoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kaXNhYmxlRm9jdXMpIHJldHVybjtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpOyAvLyBubyBmb2N1c2FibGUgbm9kZXNcblxuICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47IC8vIHJlbW92ZSBub2RlcyBvbiB3aG9zZSBjbGljaywgdGhlIG1vZGFsIGNsb3Nlc1xuICAgICAgICAvLyBjb3VsZCBub3QgdGhpbmsgb2YgYSBiZXR0ZXIgbmFtZSA6KFxuXG4gICAgICAgIHZhciBub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZShfdGhpczMuY29uZmlnLmNsb3NlVHJpZ2dlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cy5sZW5ndGggPiAwKSBub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzWzBdLmZvY3VzKCk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA9PT0gMCkgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmV0YWluRm9jdXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXRhaW5Gb2N1cyhldmVudCkge1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbHRlcnMgbm9kZXMgd2hpY2ggYXJlIGhpZGRlbiB0byBwcmV2ZW50XG4gICAgICAgICAqIGZvY3VzIGxlYWsgb3V0c2lkZSBtb2RhbFxuICAgICAgICAgKi9cblxuICAgICAgICBmb2N1c2FibGVOb2RlcyA9IGZvY3VzYWJsZU5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiBub2RlLm9mZnNldFBhcmVudCAhPT0gbnVsbDtcbiAgICAgICAgfSk7IC8vIGlmIGRpc2FibGVGb2N1cyBpcyB0cnVlXG5cbiAgICAgICAgaWYgKCF0aGlzLm1vZGFsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZm9jdXNlZEl0ZW1JbmRleCA9IGZvY3VzYWJsZU5vZGVzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSAmJiBmb2N1c2FibGVOb2Rlcy5sZW5ndGggPiAwICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IGZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNb2RhbDtcbiAgfSgpO1xuICAvKipcbiAgICogTW9kYWwgcHJvdG90eXBlIGVuZHMuXG4gICAqIEhlcmUgb24gY29kZSBpcyByZXNwb25zaWJsZSBmb3IgZGV0ZWN0aW5nIGFuZFxuICAgKiBhdXRvIGJpbmRpbmcgZXZlbnQgaGFuZGxlcnMgb24gbW9kYWwgdHJpZ2dlcnNcbiAgICovXG4gIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9wZW5lZCBtb2RhbFxuXG5cbiAgdmFyIGFjdGl2ZU1vZGFsID0gbnVsbDtcbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhbiBhc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIGl0J3NcbiAgICogcmVzcGVjdGl2ZSB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgICAgIEFuIGFycmF5IG9mIGFsbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRyaWdnZXJBdHRyIFRoZSBkYXRhLWF0dHJpYnV0ZSB3aGljaCB0cmlnZ2VycyB0aGUgbW9kdWxlXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cblxuICB2YXIgZ2VuZXJhdGVUcmlnZ2VyTWFwID0gZnVuY3Rpb24gZ2VuZXJhdGVUcmlnZ2VyTWFwKHRyaWdnZXJzLCB0cmlnZ2VyQXR0cikge1xuICAgIHZhciB0cmlnZ2VyTWFwID0gW107XG4gICAgdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgdmFyIHRhcmdldE1vZGFsID0gdHJpZ2dlci5hdHRyaWJ1dGVzW3RyaWdnZXJBdHRyXS52YWx1ZTtcbiAgICAgIGlmICh0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXSA9PT0gdW5kZWZpbmVkKSB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXSA9IFtdO1xuICAgICAgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0ucHVzaCh0cmlnZ2VyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJpZ2dlck1hcDtcbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB3aGV0aGVyIGEgbW9kYWwgb2YgdGhlIGdpdmVuIGlkIGV4aXN0c1xuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge251bWJlcn0gaWQgIFRoZSBpZCBvZiB0aGUgbW9kYWxcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVNb2RhbFByZXNlbmNlID0gZnVuY3Rpb24gdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKSB7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IFxcdTI3NTdTZWVtcyBsaWtlIHlvdSBoYXZlIG1pc3NlZCAlYydcIi5jb25jYXQoaWQsIFwiJ1wiKSwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ0lEIHNvbWV3aGVyZSBpbiB5b3VyIGNvZGUuIFJlZmVyIGV4YW1wbGUgYmVsb3cgdG8gcmVzb2x2ZSBpdC4nKTtcbiAgICAgIGNvbnNvbGUud2FybihcIiVjRXhhbXBsZTpcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbFxcXCIgaWQ9XFxcIlwiLmNvbmNhdChpZCwgXCJcXFwiPjwvZGl2PlwiKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIGlmIHRoZXJlIGFyZSBtb2RhbCB0cmlnZ2VycyBwcmVzZW50XG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzIEFuIGFycmF5IG9mIGRhdGEtdHJpZ2dlcnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSh0cmlnZ2Vycykge1xuICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1BsZWFzZSBzcGVjaWZ5IGF0IGxlYXN0IG9uZSAlYydtaWNyb21vZGFsLXRyaWdnZXInXCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdkYXRhIGF0dHJpYnV0ZS4nKTtcbiAgICAgIGNvbnNvbGUud2FybihcIiVjRXhhbXBsZTpcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgXCI8YSBocmVmPVxcXCIjXFxcIiBkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcj1cXFwibXktbW9kYWxcXFwiPjwvYT5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQ2hlY2tzIGlmIHRyaWdnZXJzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG1vZGFsc1xuICAgKiBhcmUgcHJlc2VudCBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgIEFycmF5IG9mIERPTSBub2RlcyB3aGljaCBoYXZlIGRhdGEtdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJNYXAgQXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCB0aGVpciB0cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZUFyZ3MgPSBmdW5jdGlvbiB2YWxpZGF0ZUFyZ3ModHJpZ2dlcnMsIHRyaWdnZXJNYXApIHtcbiAgICB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSh0cmlnZ2Vycyk7XG4gICAgaWYgKCF0cmlnZ2VyTWFwKSByZXR1cm4gdHJ1ZTtcblxuICAgIGZvciAodmFyIGlkIGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhbGlkYXRlTW9kYWxQcmVzZW5jZShpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIC8qKlxuICAgKiBCaW5kcyBjbGljayBoYW5kbGVycyB0byBhbGwgbW9kYWwgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG5cblxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQoY29uZmlnKSB7XG4gICAgLy8gQ3JlYXRlIGFuIGNvbmZpZyBvYmplY3Qgd2l0aCBkZWZhdWx0IG9wZW5UcmlnZ2VyXG4gICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICBvcGVuVHJpZ2dlcjogJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJ1xuICAgIH0sIGNvbmZpZyk7IC8vIENvbGxlY3RzIGFsbCB0aGUgbm9kZXMgd2l0aCB0aGUgdHJpZ2dlclxuXG4gICAgdmFyIHRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIuY29uY2F0KG9wdGlvbnMub3BlblRyaWdnZXIsIFwiXVwiKSkpOyAvLyBNYWtlcyBhIG1hcHBpbmdzIG9mIG1vZGFscyB3aXRoIHRoZWlyIHRyaWdnZXIgbm9kZXNcblxuXG4gICAgdmFyIHRyaWdnZXJNYXAgPSBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIG9wdGlvbnMub3BlblRyaWdnZXIpOyAvLyBDaGVja3MgaWYgbW9kYWxzIGFuZCB0cmlnZ2VycyBleGlzdCBpbiBkb21cblxuICAgIGlmIChvcHRpb25zLmRlYnVnTW9kZSA9PT0gdHJ1ZSAmJiB2YWxpZGF0ZUFyZ3ModHJpZ2dlcnMsIHRyaWdnZXJNYXApID09PSBmYWxzZSkgcmV0dXJuOyAvLyBGb3IgZXZlcnkgdGFyZ2V0IG1vZGFsIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2VcblxuICAgIGZvciAodmFyIGtleSBpbiB0cmlnZ2VyTWFwKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0cmlnZ2VyTWFwW2tleV07XG4gICAgICBvcHRpb25zLnRhcmdldE1vZGFsID0ga2V5O1xuICAgICAgb3B0aW9ucy50cmlnZ2VycyA9IF90b0NvbnN1bWFibGVBcnJheSh2YWx1ZSk7XG4gICAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBTaG93cyBhIHBhcnRpY3VsYXIgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBkaXNwbGF5XVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIHBhc3NdXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG5cbiAgdmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KHRhcmdldE1vZGFsLCBjb25maWcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGNvbmZpZyB8fCB7fTtcbiAgICBvcHRpb25zLnRhcmdldE1vZGFsID0gdGFyZ2V0TW9kYWw7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlTW9kYWxQcmVzZW5jZSh0YXJnZXRNb2RhbCkgPT09IGZhbHNlKSByZXR1cm47IC8vIGNsZWFyIGV2ZW50cyBpbiBjYXNlIHByZXZpb3VzIG1vZGFsIHdhc24ndCBjbG9zZVxuXG4gICAgaWYgKGFjdGl2ZU1vZGFsKSBhY3RpdmVNb2RhbC5yZW1vdmVFdmVudExpc3RlbmVycygpOyAvLyBzdG9yZXMgcmVmZXJlbmNlIHRvIGFjdGl2ZSBtb2RhbFxuXG4gICAgYWN0aXZlTW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cbiAgICBhY3RpdmVNb2RhbC5zaG93TW9kYWwoKTtcbiAgfTtcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgYWN0aXZlIG1vZGFsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0TW9kYWwgW1RoZSBpZCBvZiB0aGUgbW9kYWwgdG8gY2xvc2VdXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UodGFyZ2V0TW9kYWwpIHtcbiAgICB0YXJnZXRNb2RhbCA/IGFjdGl2ZU1vZGFsLmNsb3NlTW9kYWxCeUlkKHRhcmdldE1vZGFsKSA6IGFjdGl2ZU1vZGFsLmNsb3NlTW9kYWwoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gICAgc2hvdzogc2hvdyxcbiAgICBjbG9zZTogY2xvc2VcbiAgfTtcbn0oKTtcbndpbmRvdy5NaWNyb01vZGFsID0gTWljcm9Nb2RhbDtcblxuZXhwb3J0IGRlZmF1bHQgTWljcm9Nb2RhbDtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiU2llbWFcIixbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNpZW1hPXQoKTplLlNpZW1hPXQoKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYoaVtyXSlyZXR1cm4gaVtyXS5leHBvcnRzO3ZhciBuPWlbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubD0hMCxuLmV4cG9ydHN9dmFyIGk9e307cmV0dXJuIHQubT1lLHQuYz1pLHQuZD1mdW5jdGlvbihlLGkscil7dC5vKGUsaSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpyfSl9LHQubj1mdW5jdGlvbihlKXt2YXIgaT1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gdC5kKGksXCJhXCIsaSksaX0sdC5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSx0LnA9XCJcIix0KHQucz0wKX0oW2Z1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgcj10W2ldO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsaSxyKXtyZXR1cm4gaSYmZSh0LnByb3RvdHlwZSxpKSxyJiZlKHQsciksdH19KCksbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIGk9dGhpcztpZihyKHRoaXMsZSksdGhpcy5jb25maWc9ZS5tZXJnZVNldHRpbmdzKHQpLHRoaXMuc2VsZWN0b3I9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuY29uZmlnLnNlbGVjdG9yP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWcuc2VsZWN0b3IpOnRoaXMuY29uZmlnLnNlbGVjdG9yLG51bGw9PT10aGlzLnNlbGVjdG9yKXRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3cm9uZyB3aXRoIHlvdXIgc2VsZWN0b3Ig8J+YrVwiKTt0aGlzLnJlc29sdmVTbGlkZXNOdW1iZXIoKSx0aGlzLnNlbGVjdG9yV2lkdGg9dGhpcy5zZWxlY3Rvci5vZmZzZXRXaWR0aCx0aGlzLmlubmVyRWxlbWVudHM9W10uc2xpY2UuY2FsbCh0aGlzLnNlbGVjdG9yLmNoaWxkcmVuKSx0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY29uZmlnLnN0YXJ0SW5kZXgldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1heCgwLE1hdGgubWluKHRoaXMuY29uZmlnLnN0YXJ0SW5kZXgsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpKSx0aGlzLnRyYW5zZm9ybVByb3BlcnR5PWUud2Via2l0T3JOb3QoKSxbXCJyZXNpemVIYW5kbGVyXCIsXCJ0b3VjaHN0YXJ0SGFuZGxlclwiLFwidG91Y2hlbmRIYW5kbGVyXCIsXCJ0b3VjaG1vdmVIYW5kbGVyXCIsXCJtb3VzZWRvd25IYW5kbGVyXCIsXCJtb3VzZXVwSGFuZGxlclwiLFwibW91c2VsZWF2ZUhhbmRsZXJcIixcIm1vdXNlbW92ZUhhbmRsZXJcIixcImNsaWNrSGFuZGxlclwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lbZV09aVtlXS5iaW5kKGkpfSksdGhpcy5pbml0KCl9cmV0dXJuIHMoZSxbe2tleTpcImF0dGFjaEV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZUhhbmRsZXIpLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazohMX0sdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcikpfX0se2tleTpcImRldGFjaEV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnRvdWNoc3RhcnRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMudG91Y2hlbmRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvdWNobW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMubW91c2Vkb3duSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW91c2V1cEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlbGVhdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdXNlbW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGlja0hhbmRsZXIpfX0se2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuYXR0YWNoRXZlbnRzKCksdGhpcy5zZWxlY3Rvci5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLHRoaXMuc2VsZWN0b3Iuc3R5bGUuZGlyZWN0aW9uPXRoaXMuY29uZmlnLnJ0bD9cInJ0bFwiOlwibHRyXCIsdGhpcy5idWlsZFNsaWRlckZyYW1lKCksdGhpcy5jb25maWcub25Jbml0LmNhbGwodGhpcyl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSx0PXRoaXMuY29uZmlnLmxvb3A/dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsyKnRoaXMucGVyUGFnZTp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuc2xpZGVyRnJhbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndpZHRoPWUqdCtcInB4XCIsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIik7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2lmKHRoaXMuY29uZmlnLmxvb3ApZm9yKHZhciByPXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlO3I8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtyKyspe3ZhciBuPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW3JdLmNsb25lTm9kZSghMCkpO2kuYXBwZW5kQ2hpbGQobil9Zm9yKHZhciBzPTA7czx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3MrKyl7dmFyIGw9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbc10pO2kuYXBwZW5kQ2hpbGQobCl9aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIG89MDtvPHRoaXMucGVyUGFnZTtvKyspe3ZhciBhPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW29dLmNsb25lTm9kZSghMCkpO2kuYXBwZW5kQ2hpbGQoYSl9dGhpcy5zbGlkZXJGcmFtZS5hcHBlbmRDaGlsZChpKSx0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQodGhpcy5zbGlkZXJGcmFtZSksdGhpcy5zbGlkZVRvQ3VycmVudCgpfX0se2tleTpcImJ1aWxkU2xpZGVyRnJhbWVJdGVtXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5zdHlsZS5jc3NGbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUuZmxvYXQ9dGhpcy5jb25maWcucnRsP1wicmlnaHRcIjpcImxlZnRcIix0LnN0eWxlLndpZHRoPSh0aGlzLmNvbmZpZy5sb29wPzEwMC8odGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsyKnRoaXMucGVyUGFnZSk6MTAwL3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgpK1wiJVwiLHQuYXBwZW5kQ2hpbGQoZSksdH19LHtrZXk6XCJyZXNvbHZlU2xpZGVzTnVtYmVyXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZihcIm51bWJlclwiPT10eXBlb2YgdGhpcy5jb25maWcucGVyUGFnZSl0aGlzLnBlclBhZ2U9dGhpcy5jb25maWcucGVyUGFnZTtlbHNlIGlmKFwib2JqZWN0XCI9PT1uKHRoaXMuY29uZmlnLnBlclBhZ2UpKXt0aGlzLnBlclBhZ2U9MTtmb3IodmFyIGUgaW4gdGhpcy5jb25maWcucGVyUGFnZSl3aW5kb3cuaW5uZXJXaWR0aD49ZSYmKHRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlW2VdKX19fSx7a2V5OlwicHJldlwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZS1lPDApe3RoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTt2YXIgcj10aGlzLmN1cnJlbnRTbGlkZSt0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLG49dGhpcy5wZXJQYWdlLHM9cituLGw9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpzKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxvPXRoaXMuY29uZmlnLmRyYWdnYWJsZT90aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYOjA7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyhsK28pK1wicHgsIDAsIDApXCIsdGhpcy5jdXJyZW50U2xpZGU9ci1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jdXJyZW50U2xpZGUtZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPU1hdGgubWF4KHRoaXMuY3VycmVudFNsaWRlLWUsMCk7aSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCh0aGlzLmNvbmZpZy5sb29wKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcIm5leHRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7aWYodGhpcy5jb25maWcubG9vcCl7aWYodGhpcy5jdXJyZW50U2xpZGUrZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlLXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZStlfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5taW4odGhpcy5jdXJyZW50U2xpZGUrZSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSk7aSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCh0aGlzLmNvbmZpZy5sb29wKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcImRpc2FibGVUcmFuc2l0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZ319LHtrZXk6XCJlbmFibGVUcmFuc2l0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImdvVG9cIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7dGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jb25maWcubG9vcD9lJXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg6TWF0aC5taW4oTWF0aC5tYXgoZSwwKSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksaSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCgpLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5Olwic2xpZGVUb0N1cnJlbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUscj0odGhpcy5jb25maWcucnRsPzE6LTEpKmkqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpO2U/cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5lbmFibGVUcmFuc2l0aW9uKCksdC5zbGlkZXJGcmFtZS5zdHlsZVt0LnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiK3IrXCJweCwgMCwgMClcIn0pfSk6dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiK3IrXCJweCwgMCwgMClcIn19LHtrZXk6XCJ1cGRhdGVBZnRlckRyYWdcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPSh0aGlzLmNvbmZpZy5ydGw/LTE6MSkqKHRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgpLHQ9TWF0aC5hYnMoZSksaT10aGlzLmNvbmZpZy5tdWx0aXBsZURyYWc/TWF0aC5jZWlsKHQvKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpKToxLHI9ZT4wJiZ0aGlzLmN1cnJlbnRTbGlkZS1pPDAsbj1lPDAmJnRoaXMuY3VycmVudFNsaWRlK2k+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7ZT4wJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2U/dGhpcy5wcmV2KGkpOmU8MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlJiZ0aGlzLm5leHQoaSksdGhpcy5zbGlkZVRvQ3VycmVudChyfHxuKX19LHtrZXk6XCJyZXNpemVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnJlc29sdmVTbGlkZXNOdW1iZXIoKSx0aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCYmKHRoaXMuY3VycmVudFNsaWRlPXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZT8wOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSx0aGlzLnNlbGVjdG9yV2lkdGg9dGhpcy5zZWxlY3Rvci5vZmZzZXRXaWR0aCx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKX19LHtrZXk6XCJjbGVhckRyYWdcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZHJhZz17c3RhcnRYOjAsZW5kWDowLHN0YXJ0WTowLGxldEl0R286bnVsbCxwcmV2ZW50Q2xpY2s6dGhpcy5kcmFnLnByZXZlbnRDbGlja319fSx7a2V5OlwidG91Y2hzdGFydEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITAsdGhpcy5kcmFnLnN0YXJ0WD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5kcmFnLnN0YXJ0WT1lLnRvdWNoZXNbMF0ucGFnZVkpfX0se2tleTpcInRvdWNoZW5kSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcInRvdWNobW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnN0b3BQcm9wYWdhdGlvbigpLG51bGw9PT10aGlzLmRyYWcubGV0SXRHbyYmKHRoaXMuZHJhZy5sZXRJdEdvPU1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFktZS50b3VjaGVzWzBdLnBhZ2VZKTxNYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRYLWUudG91Y2hlc1swXS5wYWdlWCkpLHRoaXMucG9pbnRlckRvd24mJnRoaXMuZHJhZy5sZXRJdEdvKXtlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLmVuZFg9ZS50b3VjaGVzWzBdLnBhZ2VYLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nO3ZhciB0PXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLGk9dCoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkscj10aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYLG49dGhpcy5jb25maWcucnRsP2krcjppLXI7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyh0aGlzLmNvbmZpZy5ydGw/MTotMSkqbitcInB4LCAwLCAwKVwifX19LHtrZXk6XCJtb3VzZWRvd25IYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUucGFnZVgpfX0se2tleTpcIm1vdXNldXBIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJtb3VzZW1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMucG9pbnRlckRvd24pe1wiQVwiPT09ZS50YXJnZXQubm9kZU5hbWUmJih0aGlzLmRyYWcucHJldmVudENsaWNrPSEwKSx0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiYmluZ1wiLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nO3ZhciB0PXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLGk9dCoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkscj10aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYLG49dGhpcy5jb25maWcucnRsP2krcjppLXI7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyh0aGlzLmNvbmZpZy5ydGw/MTotMSkqbitcInB4LCAwLCAwKVwifX19LHtrZXk6XCJtb3VzZWxlYXZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucG9pbnRlckRvd24mJih0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIsdGhpcy5kcmFnLmVuZFg9ZS5wYWdlWCx0aGlzLmRyYWcucHJldmVudENsaWNrPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKSl9fSx7a2V5OlwiY2xpY2tIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5kcmFnLnByZXZlbnRDbGljayYmZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITF9fSx7a2V5OlwicmVtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZihlPDB8fGU+PXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiSXRlbSB0byByZW1vdmUgZG9lc24ndCBleGlzdCDwn5itXCIpO3ZhciBpPWU8dGhpcy5jdXJyZW50U2xpZGUscj10aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2UtMT09PWU7KGl8fHIpJiZ0aGlzLmN1cnJlbnRTbGlkZS0tLHRoaXMuaW5uZXJFbGVtZW50cy5zcGxpY2UoZSwxKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiaW5zZXJ0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LGkpe2lmKHQ8MHx8dD50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzEpdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGluc2V0IGl0IGF0IHRoaXMgaW5kZXgg8J+YrVwiKTtpZigtMSE9PXRoaXMuaW5uZXJFbGVtZW50cy5pbmRleE9mKGUpKXRocm93IG5ldyBFcnJvcihcIlRoZSBzYW1lIGl0ZW0gaW4gYSBjYXJvdXNlbD8gUmVhbGx5PyBOb3BlIPCfmK1cIik7dmFyIHI9dDw9dGhpcy5jdXJyZW50U2xpZGU+MCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0aGlzLmN1cnJlbnRTbGlkZT1yP3RoaXMuY3VycmVudFNsaWRlKzE6dGhpcy5jdXJyZW50U2xpZGUsdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZSh0LDAsZSksdGhpcy5idWlsZFNsaWRlckZyYW1lKCksaSYmaS5jYWxsKHRoaXMpfX0se2tleTpcInByZXBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsMCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImFwcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzEpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLHQ9YXJndW1lbnRzWzFdO2lmKHRoaXMuZGV0YWNoRXZlbnRzKCksdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCJhdXRvXCIsZSl7Zm9yKHZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxyPTA7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKylpLmFwcGVuZENoaWxkKHRoaXMuaW5uZXJFbGVtZW50c1tyXSk7dGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIil9dCYmdC5jYWxsKHRoaXMpfX1dLFt7a2V5OlwibWVyZ2VTZXR0aW5nc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXtzZWxlY3RvcjpcIi5zaWVtYVwiLGR1cmF0aW9uOjIwMCxlYXNpbmc6XCJlYXNlLW91dFwiLHBlclBhZ2U6MSxzdGFydEluZGV4OjAsZHJhZ2dhYmxlOiEwLG11bHRpcGxlRHJhZzohMCx0aHJlc2hvbGQ6MjAsbG9vcDohMSxydGw6ITEsb25Jbml0OmZ1bmN0aW9uKCl7fSxvbkNoYW5nZTpmdW5jdGlvbigpe319LGk9ZTtmb3IodmFyIHIgaW4gaSl0W3JdPWlbcl07cmV0dXJuIHR9fSx7a2V5Olwid2Via2l0T3JOb3RcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtP1widHJhbnNmb3JtXCI6XCJXZWJraXRUcmFuc2Zvcm1cIn19XSksZX0oKTt0LmRlZmF1bHQ9bCxlLmV4cG9ydHM9dC5kZWZhdWx0fV0pfSk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tICdhY2NvcmRpb24tanMnO1xyXG5cclxudmFyIHRhcmdldGVkQ2xhc3MgICAgPSAnLmFjY29yZGlvbi1jb250YWluZXInO1xyXG52YXIgYWNjb3JkaW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0ZWRDbGFzcyk7XHJcblxyXG5pZiAoYWNjb3JkaW9uRWxlbWVudC5sZW5ndGggPiAwKSB7XHJcbiAgICBuZXcgQWNjb3JkaW9uKHRhcmdldGVkQ2xhc3MpO1xyXG59XHJcbiIsImltcG9ydCBlbnF1aXJlIGZyb20gJ2VucXVpcmUtanMnO1xyXG5cclxuaWYgKCFPYmplY3QuZW50cmllcykge1xyXG4gICAgT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbiggb2JqICl7XHJcbiAgICAgICAgdmFyIG93blByb3BzID0gT2JqZWN0LmtleXMoIG9iaiApLFxyXG4gICAgICAgICAgICBpID0gb3duUHJvcHMubGVuZ3RoLFxyXG4gICAgICAgICAgICByZXNBcnJheSA9IG5ldyBBcnJheShpKTtcclxuICAgICAgICB3aGlsZSAoaS0tKVxyXG4gICAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc0FycmF5O1xyXG4gICAgfTtcclxufVxyXG5cclxubGV0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XHJcblxyXG5jb25zdCBtZWRpYVF1ZXJpZXMgPSB7XHJcbiAgICBzbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KScsXHJcbiAgICBtb2I6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMXB4KScsXHJcbiAgICB0YWI6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KScsXHJcbiAgICBsYXA6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknLFxyXG4gICAgZGVzOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpJyxcclxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpJyxcclxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpJyxcclxuICAgIGxhbmRzY2FwZTogJ3NjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcclxuICAgIHBvdHJhaXQ6ICdzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJ1xyXG59O1xyXG5cclxuT2JqZWN0LmVudHJpZXMobWVkaWFRdWVyaWVzKS5mb3JFYWNoKChbYnJlYWtwb2ludCwgbWVkaWFxdWVyeV0pID0+IFxyXG4gICAgZW5xdWlyZS5yZWdpc3RlciggbWVkaWFxdWVyeSwgeyBcclxuICAgICAgICBtYXRjaCA6IGZ1bmN0aW9uKCkgeyBodG1sLmNsYXNzTGlzdC5hZGQoIGJyZWFrcG9pbnQgKTsgfSxcclxuICAgICAgICB1bm1hdGNoIDogZnVuY3Rpb24oKSB7IGh0bWwuY2xhc3NMaXN0LnJlbW92ZSggYnJlYWtwb2ludCApOyB9XHJcbiAgICB9KVxyXG4pO1xyXG5cclxuIiwiaW1wb3J0IGxhenlsb2FkIGZyb20gJ2xhenlsb2FkJztcclxuXHJcbm5ldyBsYXp5bG9hZCgpOyIsImltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xyXG5cclxuTWljcm9Nb2RhbC5pbml0KHtcclxuICAgIG9uU2hvdzogbW9kYWwgPT4gY29uc29sZS5pbmZvKGAke21vZGFsLmlkfSBpcyBzaG93bmApLCAvLyBbMV1cclxuICAgIG9uQ2xvc2U6IG1vZGFsID0+IGNvbnNvbGUuaW5mbyhgJHttb2RhbC5pZH0gaXMgaGlkZGVuYCksIC8vIFsyXVxyXG4gICAgb3BlblRyaWdnZXI6ICdkYXRhLWN1c3RvbS1vcGVuJywgLy8gWzNdXHJcbiAgICBjbG9zZVRyaWdnZXI6ICdkYXRhLWN1c3RvbS1jbG9zZScsIC8vIFs0XVxyXG4gICAgb3BlbkNsYXNzOiAnaXMtb3BlbicsIC8vIFs1XVxyXG4gICAgZGlzYWJsZVNjcm9sbDogdHJ1ZSwgLy8gWzZdXHJcbiAgICBkaXNhYmxlRm9jdXM6IGZhbHNlLCAvLyBbN11cclxuICAgIGF3YWl0T3BlbkFuaW1hdGlvbjogZmFsc2UsIC8vIFs4XVxyXG4gICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogZmFsc2UsIC8vIFs5XVxyXG4gICAgZGVidWdNb2RlOiB0cnVlIC8vIFsxMF1cclxufSk7IiwiY29uc3QgbmF2U2xpZGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xyXG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uIHVsJyk7XHJcblxyXG5cdGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcblx0XHRuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9faXMtYWN0aXZlJyk7XHJcblx0fSlcclxufVxyXG5cclxuLy9uYXZTbGlkZSgpOyIsImltcG9ydCBTaWVtYSBmcm9tICdzaWVtYSc7XHJcblxyXG52YXIgc2xpZGVzaG93U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVzaG93Jyk7XHJcbnZhciBwcmV2aW91c1NsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXByZXYnKTtcclxudmFyIG5leHRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1uZXh0Jyk7XHJcbnZhciBzbGlkZXNob3cgPSBcIlwiO1xyXG5cclxuaWYgKHNsaWRlc2hvd1NlbGVjdG9yKSB7XHJcbiAgICBzbGlkZXNob3cgPSBuZXcgU2llbWEoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnLnNsaWRlc2hvdycsXHJcbiAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgcGVyUGFnZTogMSxcclxuICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKHByZXZpb3VzU2xpZGUpIHtcclxuICAgIHByZXZpb3VzU2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzbGlkZXNob3cucHJldigpKTtcclxufVxyXG5cclxuaWYgKG5leHRTbGlkZSkge1xyXG4gICAgbmV4dFNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2xpZGVzaG93Lm5leHQoKSk7XHJcbn1cclxuXHJcbi8vaHR0cHM6Ly9jb2RlcGVuLmlvL2NvbGxlY3Rpb24vQWRwa2tkLz9jdXJzb3I9WkQweEptODlNQ1p3UFRFbWRqMHhNREl5TkRVMCIsImltcG9ydCAnLi9mdW5jdGlvbi5ib2R5Y2xhc3Nlcy5qcyc7XHJcbmltcG9ydCAnLi9mdW5jdGlvbi5zbGlkZXNob3cuanMnOyBcclxuaW1wb3J0ICcuL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyc7XHJcbmltcG9ydCAnLi9mdW5jdGlvbi5sYXp5bG9hZC5qcyc7IFxyXG5pbXBvcnQgJy4vZnVuY3Rpb24ubW9kYWwuanMnO1xyXG5pbXBvcnQgJy4vZnVuY3Rpb24uYWNjb3JkaW9uLmpzJzsiXSwic291cmNlUm9vdCI6IiJ9