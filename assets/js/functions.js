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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUtanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5bG9hZC9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWljcm9tb2RhbC9kaXN0L21pY3JvbW9kYWwuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpZW1hL2Rpc3Qvc2llbWEubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmJvZHljbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ubGF6eWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLnNsaWRlc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJpIiwidSIsIm8iLCJsIiwiYyIsInQiLCJpbml0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWFwIiwiZSIsIm9wdGlvbnMiLCJoIiwiZHVyYXRpb24iLCJpdGVtTnVtYmVyIiwiYXJpYSIsImNsb3NlT3RoZXJzIiwic2hvd0l0ZW0iLCJlbGVtZW50Q2xhc3MiLCJxdWVzdGlvbkNsYXNzIiwiYW5zd2VyQ2xhc3MiLCJ0YXJnZXRDbGFzcyIsIm9uVG9nZ2xlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibiIsInNldEF0dHJpYnV0ZSIsInMiLCJyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZUVsZW1lbnQiLCJzZXRUcmFuc2l0aW9uIiwiZ2VuZXJhdGVJRCIsInNldEFSSUEiLCJhIiwidG9nZ2xlRWxlbWVudCIsImF0dGFjaEV2ZW50cyIsInN0eWxlIiwiY29uY2F0IiwidXBkYXRlQVJJQSIsImNhbGxTcGVjaWZpY0VsZW1lbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImNsYXNzTmFtZSIsIm1hdGNoIiwicHJldmVudERlZmF1bHQiLCJjbG9zZUFsbEVsZW1lbnRzIiwiaGVpZ2h0IiwiYXJndW1lbnRzIiwic2Nyb2xsSGVpZ2h0IiwidG9nZ2xlIiwicGFyc2VJbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJyZXNpemVIYW5kbGVyIiwib2Zmc2V0SGVpZ2h0IiwiY2xpY2tIYW5kbGVyIiwia2V5ZG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQWNjb3JkaW9uIiwid2luZG93IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVucXVpcmVTY3JlZW4iLCJ1bmVucXVpcmVTY3JlZW4iLCJlbnF1aXJlSnMiLCJtYXRjaE1lZGlhUG9seWZpbGwiLCJtZWRpYVF1ZXJ5IiwibWVkaWEiLCJtYXRjaGVzIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJyZXF1aXJlIiwibW9iaWxlUXVlcnkiLCJjYiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwiaGFuZGxlciIsInVubWF0Y2giLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJRdWVyeUhhbmRsZXIiLCJlYWNoIiwiTWVkaWFRdWVyeSIsImlzVW5jb25kaXRpb25hbCIsImhhbmRsZXJzIiwibXFsIiwic2VsZiIsImxpc3RlbmVyIiwiY3VycmVudFRhcmdldCIsImFzc2VzcyIsInByb3RvdHlwZSIsImNvbnN0dWN0b3IiLCJhZGRIYW5kbGVyIiwicWgiLCJwdXNoIiwib24iLCJyZW1vdmVIYW5kbGVyIiwiZXF1YWxzIiwiZGVzdHJveSIsInNwbGljZSIsImNsZWFyIiwiYWN0aW9uIiwiVXRpbCIsImlzRnVuY3Rpb24iLCJNZWRpYVF1ZXJ5RGlzcGF0Y2giLCJFcnJvciIsInF1ZXJpZXMiLCJicm93c2VySXNJbmNhcGFibGUiLCJjb25zdHJ1Y3RvciIsInEiLCJzaG91bGREZWdyYWRlIiwiZGVmZXJTZXR1cCIsInNldHVwIiwiaW5pdGlhbGlzZWQiLCJvZmYiLCJjb2xsZWN0aW9uIiwiZm4iLCJjb250IiwidG9TdHJpbmciLCJhcHBseSIsInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwiZ2xvYmFsIiwiZGVmYXVsdHMiLCJzcmMiLCJzcmNzZXQiLCJzZWxlY3RvciIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJleHRlbmQiLCJleHRlbmRlZCIsImRlZXAiLCJjYWxsIiwibWVyZ2UiLCJvYmoiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJMYXp5TG9hZCIsImltYWdlcyIsInNldHRpbmdzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImxvYWRJbWFnZXMiLCJvYnNlcnZlckNvbmZpZyIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwib2JzZXJ2ZSIsImxvYWRBbmREZXN0cm95IiwiZGlzY29ubmVjdCIsImxhenlsb2FkIiwialF1ZXJ5IiwiJCIsImF0dHJpYnV0ZSIsIm1ha2VBcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJtaW5MZW4iLCJuYW1lIiwidGVzdCIsImxlbiIsImFycjIiLCJNaWNyb01vZGFsIiwiRk9DVVNBQkxFX0VMRU1FTlRTIiwiTW9kYWwiLCJfcmVmIiwidGFyZ2V0TW9kYWwiLCJfcmVmJHRyaWdnZXJzIiwidHJpZ2dlcnMiLCJfcmVmJG9uU2hvdyIsIm9uU2hvdyIsIl9yZWYkb25DbG9zZSIsIm9uQ2xvc2UiLCJfcmVmJG9wZW5UcmlnZ2VyIiwib3BlblRyaWdnZXIiLCJfcmVmJGNsb3NlVHJpZ2dlciIsImNsb3NlVHJpZ2dlciIsIl9yZWYkb3BlbkNsYXNzIiwib3BlbkNsYXNzIiwiX3JlZiRkaXNhYmxlU2Nyb2xsIiwiZGlzYWJsZVNjcm9sbCIsIl9yZWYkZGlzYWJsZUZvY3VzIiwiZGlzYWJsZUZvY3VzIiwiX3JlZiRhd2FpdENsb3NlQW5pbWF0IiwiYXdhaXRDbG9zZUFuaW1hdGlvbiIsIl9yZWYkYXdhaXRPcGVuQW5pbWF0aSIsImF3YWl0T3BlbkFuaW1hdGlvbiIsIl9yZWYkZGVidWdNb2RlIiwiZGVidWdNb2RlIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsInJlZ2lzdGVyVHJpZ2dlcnMiLCJvbkNsaWNrIiwib25LZXlkb3duIiwiX3RoaXMiLCJfbGVuIiwiX2tleSIsImZpbHRlciIsIkJvb2xlYW4iLCJ0cmlnZ2VyIiwiZXZlbnQiLCJzaG93TW9kYWwiLCJfdGhpczIiLCJhY3RpdmVFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3VyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzZXRGb2N1c1RvRmlyc3ROb2RlIiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZm9jdXMiLCJjbG9zZU1vZGFsQnlJZCIsImJvZHkiLCJhc3NpZ24iLCJvdmVyZmxvdyIsImhhc0F0dHJpYnV0ZSIsInJldGFpbkZvY3VzIiwiZ2V0Rm9jdXNhYmxlTm9kZXMiLCJub2RlcyIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJmb2N1c2VkSXRlbUluZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwiYWN0aXZlTW9kYWwiLCJnZW5lcmF0ZVRyaWdnZXJNYXAiLCJ0cmlnZ2VyQXR0ciIsInRyaWdnZXJNYXAiLCJhdHRyaWJ1dGVzIiwidmFsaWRhdGVNb2RhbFByZXNlbmNlIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInZhbGlkYXRlVHJpZ2dlclByZXNlbmNlIiwidmFsaWRhdGVBcmdzIiwic2hvdyIsImNsb3NlIiwibSIsImQiLCJnZXQiLCJfX2VzTW9kdWxlIiwicCIsIm1lcmdlU2V0dGluZ3MiLCJyZXNvbHZlU2xpZGVzTnVtYmVyIiwic2VsZWN0b3JXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW5uZXJFbGVtZW50cyIsImNoaWxkcmVuIiwiY3VycmVudFNsaWRlIiwibG9vcCIsInN0YXJ0SW5kZXgiLCJNYXRoIiwibWF4IiwibWluIiwicGVyUGFnZSIsInRyYW5zZm9ybVByb3BlcnR5Iiwid2Via2l0T3JOb3QiLCJkcmFnZ2FibGUiLCJwb2ludGVyRG93biIsImRyYWciLCJzdGFydFgiLCJlbmRYIiwic3RhcnRZIiwibGV0SXRHbyIsInByZXZlbnRDbGljayIsInRvdWNoc3RhcnRIYW5kbGVyIiwidG91Y2hlbmRIYW5kbGVyIiwidG91Y2htb3ZlSGFuZGxlciIsIm1vdXNlZG93bkhhbmRsZXIiLCJtb3VzZXVwSGFuZGxlciIsIm1vdXNlbGVhdmVIYW5kbGVyIiwibW91c2Vtb3ZlSGFuZGxlciIsImRpcmVjdGlvbiIsInJ0bCIsImJ1aWxkU2xpZGVyRnJhbWUiLCJvbkluaXQiLCJzbGlkZXJGcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImVuYWJsZVRyYW5zaXRpb24iLCJjdXJzb3IiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYnVpbGRTbGlkZXJGcmFtZUl0ZW0iLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInNsaWRlVG9DdXJyZW50IiwiY3NzRmxvYXQiLCJpbm5lcldpZHRoIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJvbkNoYW5nZSIsIndlYmtpdFRyYW5zaXRpb24iLCJlYXNpbmciLCJ0cmFuc2l0aW9uIiwiYWJzIiwibXVsdGlwbGVEcmFnIiwiY2VpbCIsInByZXYiLCJuZXh0Iiwibm9kZU5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInVwZGF0ZUFmdGVyRHJhZyIsImNsZWFyRHJhZyIsImluc2VydCIsInJlbW92ZUF0dHJpYnV0ZSIsInRyYW5zZm9ybSIsImciLCJGdW5jdGlvbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwidGFyZ2V0ZWRDbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJvd25Qcm9wcyIsImtleXMiLCJyZXNBcnJheSIsImh0bWwiLCJtZWRpYVF1ZXJpZXMiLCJzbSIsIm1vYiIsInRhYiIsImxhcCIsImRlcyIsImxnIiwieGwiLCJsYW5kc2NhcGUiLCJwb3RyYWl0IiwiYnJlYWtwb2ludCIsIm1lZGlhcXVlcnkiLCJlbnF1aXJlIiwiaW5mbyIsIm1lbnVJY29uIiwibW9iaW1lbnUiLCJzaXRlYm9keSIsIm1haW5tZW51IiwidmVydGljYWxNZW51IiwiaGFuZGxlVGFibGV0Q2hhbmdlIiwic2xpZGVzaG93U2VsZWN0b3IiLCJwcmV2aW91c1NsaWRlIiwibmV4dFNsaWRlIiwic2xpZGVzaG93IiwiU2llbWEiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUFZLEVBQUUsSUFQSTtBQVFsQnhNLGFBQVMsRUFBRSxFQVJPO0FBU2xCMEosUUFBSSxFQUFFLElBVFk7QUFVbEJ3QixPQUFHLEVBQUUsS0FWYTtBQVdsQkUsVUFBTSxFQUFFLGtCQUFNLENBQUUsQ0FYRTtBQVlsQmUsWUFBUSxFQUFFLG9CQUFNLENBQUU7QUFaQSxHQUFWLENBQVo7QUFjSDs7QUFFRCxJQUFJbUQsYUFBSixFQUFtQjtBQUNmQSxlQUFhLENBQUMxVSxnQkFBZCxDQUErQixPQUEvQixFQUF3QztBQUFBLFdBQU00VSxTQUFTLENBQUM5QyxJQUFWLEVBQU47QUFBQSxHQUF4QztBQUNIOztBQUVELElBQUk2QyxTQUFKLEVBQWU7QUFDWEEsV0FBUyxDQUFDM1UsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0M7QUFBQSxXQUFNNFUsU0FBUyxDQUFDN0MsSUFBVixFQUFOO0FBQUEsR0FBcEM7QUFDSCxDLENBRUQsMkU7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiFcclxuICogQWNjb3JkaW9uIHYyLjguMFxyXG4gKiBTaW1wbGUgYWNjb3JkaW9uIGNyZWF0ZWQgaW4gcHVyZSBKYXZhc2NyaXB0LlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaHUyay9BY2NvcmRpb25cclxuICpcclxuICogQ29weXJpZ2h0IDIwMTctMjAxOSBNaWNoYcWCIFN0cnVtcGZcclxuICogUHVibGlzaGVkIHVuZGVyIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cInVzZSBzdHJpY3RcIjshZnVuY3Rpb24oaSl7ZnVuY3Rpb24gdShvLGwpe3ZhciBjPXRoaXMsdD17aW5pdDpmdW5jdGlvbigpe2lmKEFycmF5LmlzQXJyYXkobykpcmV0dXJuIG8ubGVuZ3RoJiZvLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gbmV3IHUoZSxsKX0pLCExO3RoaXMub3B0aW9ucz1oKHtkdXJhdGlvbjo2MDAsaXRlbU51bWJlcjowLGFyaWE6ITAsY2xvc2VPdGhlcnM6ITAsc2hvd0l0ZW06ITEsZWxlbWVudENsYXNzOlwiYWNcIixxdWVzdGlvbkNsYXNzOlwiYWMtcVwiLGFuc3dlckNsYXNzOlwiYWMtYVwiLHRhcmdldENsYXNzOlwiYWMtdGFyZ2V0XCIsb25Ub2dnbGU6ZnVuY3Rpb24oKXt9fSxsKSx0aGlzLmNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8pLHRoaXMuZWxlbWVudHM9dGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm9wdGlvbnMuZWxlbWVudENsYXNzKTt2YXIgZT10aGlzLm9wdGlvbnMsdD1lLmFyaWEsbj1lLnNob3dJdGVtLGk9ZS5pdGVtTnVtYmVyO3QmJnRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYmxpc3RcIik7Zm9yKHZhciBzPTA7czx0aGlzLmVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciByPXRoaXMuZWxlbWVudHNbc107ci5jbGFzc0xpc3QuYWRkKFwianMtZW5hYmxlZFwiKSx0aGlzLmhpZGVFbGVtZW50KHIpLHRoaXMuc2V0VHJhbnNpdGlvbihyKSx0aGlzLmdlbmVyYXRlSUQociksdCYmdGhpcy5zZXRBUklBKHIpfWlmKG4pe3ZhciBhPXRoaXMuZWxlbWVudHNbMF07XCJudW1iZXJcIj09dHlwZW9mIGkmJmk8dGhpcy5lbGVtZW50cy5sZW5ndGgmJihhPXRoaXMuZWxlbWVudHNbaV0pLHRoaXMudG9nZ2xlRWxlbWVudChhLCExKX1jLmF0dGFjaEV2ZW50cygpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucyxuPXQuZHVyYXRpb24saT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpLHI9YShcInRyYW5zaXRpb25cIik7cy5zdHlsZVtyXT1uK1wibXNcIn0sZ2VuZXJhdGVJRDpmdW5jdGlvbihlKXtlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhYy1cIi5jb25jYXQocykpLHMrK30sc2V0QVJJQTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMsbj10LnF1ZXN0aW9uQ2xhc3MsaT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK24pLHI9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpO3Muc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFiXCIpLHMuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJwYW5lbFwiKX0sdXBkYXRlQVJJQTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMub3B0aW9ucy5xdWVzdGlvbkNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIituKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsdCl9LGNhbGxTcGVjaWZpY0VsZW1lbnQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUudGFyZ2V0LG49dGhpcy5vcHRpb25zLGk9bi5xdWVzdGlvbkNsYXNzLHM9bi50YXJnZXRDbGFzcyxyPW4uY2xvc2VPdGhlcnMsYT0wO2E8dGhpcy5lbGVtZW50cy5sZW5ndGg7YSsrKWlmKHRoaXMuZWxlbWVudHNbYV0uY29udGFpbnModCkpeyh0LmNsYXNzTmFtZS5tYXRjaChpKXx8dC5jbGFzc05hbWUubWF0Y2gocykpJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHImJnRoaXMuY2xvc2VBbGxFbGVtZW50cyhhKSx0aGlzLnRvZ2dsZUVsZW1lbnQodGhpcy5lbGVtZW50c1thXSkpO2JyZWFrfX0saGlkZUVsZW1lbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLmFuc3dlckNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIit0KS5zdHlsZS5oZWlnaHQ9MH0sdG9nZ2xlRWxlbWVudDpmdW5jdGlvbihlLHQpe3ZhciBuLGk9ISgxPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQpfHx0LHM9dGhpcy5vcHRpb25zLHI9cy5hbnN3ZXJDbGFzcyxhPXMuYXJpYSxvPXMub25Ub2dnbGUsbD1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrciksYz1sLnNjcm9sbEhlaWdodDtlLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIiksaXx8KGwuc3R5bGUuaGVpZ2h0PVwiYXV0b1wiKSwwPHBhcnNlSW50KGwuc3R5bGUuaGVpZ2h0KT8obj0hMSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsLnN0eWxlLmhlaWdodD0wfSkpOihuPSEwLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2wuc3R5bGUuaGVpZ2h0PWMrXCJweFwifSkpLGEmJnRoaXMudXBkYXRlQVJJQShlLG4pLGkmJm8oZSx0aGlzLmVsZW1lbnRzKX0sY2xvc2VBbGxFbGVtZW50czpmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy5vcHRpb25zLmFyaWEsbj10aGlzLmVsZW1lbnRzLmxlbmd0aCxpPTA7aTxuO2krKylpZihpIT1lKXt2YXIgcz10aGlzLmVsZW1lbnRzW2ldO3MuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpJiZzLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIiksdCYmdGhpcy51cGRhdGVBUklBKHMsITEpLHRoaXMuaGlkZUVsZW1lbnQocyl9fSxyZXNpemVIYW5kbGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQsbj10aGlzLm9wdGlvbnMsaT1uLmVsZW1lbnRDbGFzcyxzPW4uYW5zd2VyQ2xhc3Mscj10aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2krXCIuaXMtYWN0aXZlXCIpLGE9MDthPHIubGVuZ3RoO2ErKyl0PXJbYV0ucXVlcnlTZWxlY3RvcihcIi5cIitzKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnN0eWxlLmhlaWdodD1cImF1dG9cIixlPXQub2Zmc2V0SGVpZ2h0LHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3Quc3R5bGUuaGVpZ2h0PWUrXCJweFwifSl9KX0sY2xpY2tIYW5kbGVyOmZ1bmN0aW9uKGUpe3RoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX0sa2V5ZG93bkhhbmRsZXI6ZnVuY3Rpb24oZSl7MTM9PT1lLmtleUNvZGUmJnRoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX19O3RoaXMuYXR0YWNoRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dDtlLmNsaWNrSGFuZGxlcj1lLmNsaWNrSGFuZGxlci5iaW5kKGUpLGUua2V5ZG93bkhhbmRsZXI9ZS5rZXlkb3duSGFuZGxlci5iaW5kKGUpLGUucmVzaXplSGFuZGxlcj1lLnJlc2l6ZUhhbmRsZXIuYmluZChlKSxlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlLmNsaWNrSGFuZGxlciksZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixlLmtleWRvd25IYW5kbGVyKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixlLnJlc2l6ZUhhbmRsZXIpfSx0aGlzLmRldGFjaEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXQ7ZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZS5rZXlkb3duSGFuZGxlciksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5yZXNpemVIYW5kbGVyKX07dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVtlXT9lOihlPW4oZSksZT1cIndlYmtpdFwiLmNvbmNhdChlKSl9LG49ZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKX0saD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KWVbbl09dFtuXTtyZXR1cm4gZX07aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGkud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXtpLnNldFRpbWVvdXQoZSwxZTMvNjApfSx0LmluaXQoKX12YXIgcz0wO1widW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJnZvaWQgMCE9PW1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXU6aS5BY2NvcmRpb249dX0od2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVucXVpcmVTY3JlZW4gPSBlbnF1aXJlU2NyZWVuO1xuZXhwb3J0cy51bmVucXVpcmVTY3JlZW4gPSB1bmVucXVpcmVTY3JlZW47XG52YXIgZW5xdWlyZUpzID0gdm9pZCAwO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBtYXRjaE1lZGlhUG9seWZpbGwgPSBmdW5jdGlvbiBtYXRjaE1lZGlhUG9seWZpbGwobWVkaWFRdWVyeSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZWRpYTogbWVkaWFRdWVyeSxcbiAgICAgIG1hdGNoZXM6IGZhbHNlLFxuICAgICAgYWRkTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZExpc3RlbmVyKCkge30sXG4gICAgICByZW1vdmVMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKSB7fVxuICAgIH07XG4gIH07XG4gIHdpbmRvdy5tYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEgfHwgbWF0Y2hNZWRpYVBvbHlmaWxsO1xuICBlbnF1aXJlSnMgPSByZXF1aXJlKCdlbnF1aXJlLmpzJyk7XG59XG5cbnZhciBtb2JpbGVRdWVyeSA9ICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk5cHgpJztcblxuZnVuY3Rpb24gZW5xdWlyZVNjcmVlbihjYikge1xuICB2YXIgcXVlcnkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG1vYmlsZVF1ZXJ5O1xuXG4gIGlmICghZW5xdWlyZUpzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSB7XG4gICAgbWF0Y2g6IGZ1bmN0aW9uIG1hdGNoKCkge1xuICAgICAgY2IgJiYgY2IodHJ1ZSk7XG4gICAgfSxcbiAgICB1bm1hdGNoOiBmdW5jdGlvbiB1bm1hdGNoKCkge1xuICAgICAgY2IgJiYgY2IoKTtcbiAgICB9XG4gIH07XG4gIGVucXVpcmVKcy5yZWdpc3RlcihxdWVyeSwgaGFuZGxlcik7XG4gIHJldHVybiBoYW5kbGVyO1xufVxuXG5mdW5jdGlvbiB1bmVucXVpcmVTY3JlZW4oaGFuZGxlcikge1xuICB2YXIgcXVlcnkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG1vYmlsZVF1ZXJ5O1xuXG4gIGlmICghZW5xdWlyZUpzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVucXVpcmVKcy51bnJlZ2lzdGVyKHF1ZXJ5LCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZW5xdWlyZUpzO1xuIiwidmFyIFF1ZXJ5SGFuZGxlciA9IHJlcXVpcmUoJy4vUXVlcnlIYW5kbGVyJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4vVXRpbCcpLmVhY2g7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBtZWRpYSBxdWVyeSwgbWFuYWdlcyBpdCdzIHN0YXRlIGFuZCByZWdpc3RlcmVkIGhhbmRsZXJzIGZvciB0aGlzIHF1ZXJ5XG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIG1lZGlhIHF1ZXJ5IHN0cmluZ1xuICogQHBhcmFtIHtib29sZWFufSBbaXNVbmNvbmRpdGlvbmFsPWZhbHNlXSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgcnVuIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgY29uZGl0aW9ucyBhcmUgbWV0LiBQcmltYXJpbHkgZm9yIGhlbHBpbmcgb2xkZXIgYnJvd3NlcnMgZGVhbCB3aXRoIG1vYmlsZS1maXJzdCBkZXNpZ25cbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeShxdWVyeSwgaXNVbmNvbmRpdGlvbmFsKSB7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaXNVbmNvbmRpdGlvbmFsID0gaXNVbmNvbmRpdGlvbmFsO1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24obXFsKSB7XG4gICAgICAgIC8vIENocm9tZSBwYXNzZXMgYW4gTWVkaWFRdWVyeUxpc3RFdmVudCBvYmplY3QsIHdoaWxlIG90aGVyIGJyb3dzZXJzIHBhc3MgTWVkaWFRdWVyeUxpc3QgZGlyZWN0bHlcbiAgICAgICAgc2VsZi5tcWwgPSBtcWwuY3VycmVudFRhcmdldCB8fCBtcWw7XG4gICAgICAgIHNlbGYuYXNzZXNzKCk7XG4gICAgfTtcbiAgICB0aGlzLm1xbC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbn1cblxuTWVkaWFRdWVyeS5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHVjdG9yIDogTWVkaWFRdWVyeSxcblxuICAgIC8qKlxuICAgICAqIGFkZCBhIGhhbmRsZXIgZm9yIHRoaXMgcXVlcnksIHRyaWdnZXJpbmcgaWYgYWxyZWFkeSBhY3RpdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlci51bm1hdGNoXSBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBkZWFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnNldHVwXSBjYWxsYmFjayBmb3IgaW1tZWRpYXRlIGV4ZWN1dGlvbiB3aGVuIGEgcXVlcnkgaGFuZGxlciBpcyByZWdpc3RlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaGFuZGxlci5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIGRlZmVycmVkIHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBoYW5kbGVyIGlzIG1hdGNoZWQ/XG4gICAgICovXG4gICAgYWRkSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHFoID0gbmV3IFF1ZXJ5SGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKHFoKTtcblxuICAgICAgICB0aGlzLm1hdGNoZXMoKSAmJiBxaC5vbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVzIHRoZSBnaXZlbiBoYW5kbGVyIGZyb20gdGhlIGNvbGxlY3Rpb24sIGFuZCBjYWxscyBpdCdzIGRlc3Ryb3kgbWV0aG9kc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IGhhbmRsZXIgdGhlIGhhbmRsZXIgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycztcbiAgICAgICAgZWFjaChoYW5kbGVycywgZnVuY3Rpb24oaCwgaSkge1xuICAgICAgICAgICAgaWYoaC5lcXVhbHMoaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWhhbmRsZXJzLnNwbGljZShpLDEpOyAvL3JlbW92ZSBmcm9tIGFycmF5IGFuZCBleGl0IGVhY2ggZWFybHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgYmUgY29uc2lkZXJlZCBhIG1hdGNoXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIG1lZGlhIHF1ZXJ5IGNhbiBiZSBjb25zaWRlcmVkIGEgbWF0Y2gsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIG1hdGNoZXMgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXFsLm1hdGNoZXMgfHwgdGhpcy5pc1VuY29uZGl0aW9uYWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgaGFuZGxlcnMgYW5kIHVuYmluZHMgZXZlbnRzXG4gICAgICovXG4gICAgY2xlYXIgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmxlbmd0aCA9IDA7IC8vY2xlYXIgYXJyYXlcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgKiBBc3Nlc3NlcyB0aGUgcXVlcnksIHR1cm5pbmcgb24gYWxsIGhhbmRsZXJzIGlmIGl0IG1hdGNoZXMsIHR1cm5pbmcgdGhlbSBvZmYgaWYgaXQgZG9lc24ndCBtYXRjaFxuICAgICAgICAqL1xuICAgIGFzc2VzcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5tYXRjaGVzKCkgPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyW2FjdGlvbl0oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVF1ZXJ5O1xuIiwidmFyIE1lZGlhUXVlcnkgPSByZXF1aXJlKCcuL01lZGlhUXVlcnknKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG52YXIgZWFjaCA9IFV0aWwuZWFjaDtcbnZhciBpc0Z1bmN0aW9uID0gVXRpbC5pc0Z1bmN0aW9uO1xudmFyIGlzQXJyYXkgPSBVdGlsLmlzQXJyYXk7XG5cbi8qKlxuICogQWxsb3dzIGZvciByZWdpc3RyYXRpb24gb2YgcXVlcnkgaGFuZGxlcnMuXG4gKiBNYW5hZ2VzIHRoZSBxdWVyeSBoYW5kbGVyJ3Mgc3RhdGUgYW5kIGlzIHJlc3BvbnNpYmxlIGZvciB3aXJpbmcgdXAgYnJvd3NlciBldmVudHNcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeURpc3BhdGNoICgpIHtcbiAgICBpZighd2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXRjaE1lZGlhIG5vdCBwcmVzZW50LCBsZWdhY3kgYnJvd3NlcnMgcmVxdWlyZSBhIHBvbHlmaWxsJyk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyaWVzID0ge307XG4gICAgdGhpcy5icm93c2VySXNJbmNhcGFibGUgPSAhd2luZG93Lm1hdGNoTWVkaWEoJ29ubHkgYWxsJykubWF0Y2hlcztcbn1cblxuTWVkaWFRdWVyeURpc3BhdGNoLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yIDogTWVkaWFRdWVyeURpc3BhdGNoLFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgaGFuZGxlciBmb3IgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcSB0aGUgbWVkaWEgcXVlcnlcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBBcnJheSB8fCBGdW5jdGlvbn0gb3B0aW9ucyBlaXRoZXIgYSBzaW5nbGUgcXVlcnkgaGFuZGxlciBvYmplY3QsIGEgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mIHF1ZXJ5IGhhbmRsZXJzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBmaXJlZCB3aGVuIHF1ZXJ5IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy51bm1hdGNoXSBmaXJlZCB3aGVuIGEgcXVlcnkgaXMgbm8gbG9uZ2VyIG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gZmlyZWQgd2hlbiBoYW5kbGVyIGZpcnN0IHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gd2hldGhlciBzZXR1cCBzaG91bGQgYmUgcnVuIGltbWVkaWF0ZWx5IG9yIGRlZmVycmVkIHVudGlsIHF1ZXJ5IGlzIGZpcnN0IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzaG91bGREZWdyYWRlPWZhbHNlXSB3aGV0aGVyIHRoaXMgcGFydGljdWxhciBtZWRpYSBxdWVyeSBzaG91bGQgYWx3YXlzIHJ1biBvbiBpbmNhcGFibGUgYnJvd3NlcnNcbiAgICAgKi9cbiAgICByZWdpc3RlciA6IGZ1bmN0aW9uKHEsIG9wdGlvbnMsIHNob3VsZERlZ3JhZGUpIHtcbiAgICAgICAgdmFyIHF1ZXJpZXMgICAgICAgICA9IHRoaXMucXVlcmllcyxcbiAgICAgICAgICAgIGlzVW5jb25kaXRpb25hbCA9IHNob3VsZERlZ3JhZGUgJiYgdGhpcy5icm93c2VySXNJbmNhcGFibGU7XG5cbiAgICAgICAgaWYoIXF1ZXJpZXNbcV0pIHtcbiAgICAgICAgICAgIHF1ZXJpZXNbcV0gPSBuZXcgTWVkaWFRdWVyeShxLCBpc1VuY29uZGl0aW9uYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ub3JtYWxpc2UgdG8gb2JqZWN0IGluIGFuIGFycmF5XG4gICAgICAgIGlmKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1hdGNoIDogb3B0aW9ucyB9O1xuICAgICAgICB9XG4gICAgICAgIGlmKCFpc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gW29wdGlvbnNdO1xuICAgICAgICB9XG4gICAgICAgIGVhY2gob3B0aW9ucywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0geyBtYXRjaCA6IGhhbmRsZXIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXJpZXNbcV0uYWRkSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHVucmVnaXN0ZXJzIGEgcXVlcnkgYW5kIGFsbCBpdCdzIGhhbmRsZXJzLCBvciBhIHNwZWNpZmljIGhhbmRsZXIgZm9yIGEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeSB0byB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gW2hhbmRsZXJdIHNwZWNpZmljIGhhbmRsZXIgdG8gdW5yZWdpc3RlclxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1txXTtcblxuICAgICAgICBpZihxdWVyeSkge1xuICAgICAgICAgICAgaWYoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnJlbW92ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJpZXNbcV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnlEaXNwYXRjaDtcbiIsIi8qKlxuICogRGVsZWdhdGUgdG8gaGFuZGxlIGEgbWVkaWEgcXVlcnkgYmVpbmcgbWF0Y2hlZCBhbmQgdW5tYXRjaGVkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hdGNoIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy51bm1hdGNoXSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgdW5tYXRjaGVkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gb25lLXRpbWUgY2FsbGJhY2sgdHJpZ2dlcmVkIHRoZSBmaXJzdCB0aW1lIGEgcXVlcnkgaXMgbWF0Y2hlZFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIHJ1biBpbW1lZGlhdGVseSwgcmF0aGVyIHRoYW4gZmlyc3QgdGltZSBxdWVyeSBpcyBtYXRjaGVkP1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFF1ZXJ5SGFuZGxlcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAhb3B0aW9ucy5kZWZlclNldHVwICYmIHRoaXMuc2V0dXAoKTtcbn1cblxuUXVlcnlIYW5kbGVyLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yIDogUXVlcnlIYW5kbGVyLFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldHVwIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5zZXR1cCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHNldHVwIGFuZCB0cmlnZ2VyaW5nIG9mIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAhdGhpcy5pbml0aWFsaXNlZCAmJiB0aGlzLnNldHVwKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXRjaCAmJiB0aGlzLm9wdGlvbnMubWF0Y2goKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgdGhlIHVubWF0Y2ggZXZlbnQgZm9yIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvZmYgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnVubWF0Y2ggJiYgdGhpcy5vcHRpb25zLnVubWF0Y2goKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY2FsbGVkIHdoZW4gYSBoYW5kbGVyIGlzIHRvIGJlIGRlc3Ryb3llZC5cbiAgICAgKiBkZWxlZ2F0ZXMgdG8gdGhlIGRlc3Ryb3kgb3IgdW5tYXRjaCBjYWxsYmFja3MsIGRlcGVuZGluZyBvbiBhdmFpbGFiaWxpdHkuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBkZXN0cm95IDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kZXN0cm95ID8gdGhpcy5vcHRpb25zLmRlc3Ryb3koKSA6IHRoaXMub2ZmKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgZXF1YWxpdHkgYnkgcmVmZXJlbmNlLlxuICAgICAqIGlmIG9iamVjdCBpcyBzdXBwbGllZCBjb21wYXJlIG9wdGlvbnMsIGlmIGZ1bmN0aW9uLCBjb21wYXJlIG1hdGNoIGNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gW3RhcmdldF0gdGhlIHRhcmdldCBmb3IgY29tcGFyaXNvblxuICAgICAqL1xuICAgIGVxdWFscyA6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zID09PSB0YXJnZXQgfHwgdGhpcy5vcHRpb25zLm1hdGNoID09PSB0YXJnZXQ7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5SGFuZGxlcjtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBpdGVyYXRpbmcgb3ZlciBhIGNvbGxlY3Rpb25cbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvblxuICogQHBhcmFtIGZuXG4gKi9cbmZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgZm4pIHtcbiAgICB2YXIgaSAgICAgID0gMCxcbiAgICAgICAgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGNvbnQ7XG5cbiAgICBmb3IoaTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnQgPSBmbihjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgaWYoY29udCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrOyAvL2FsbG93IGVhcmx5IGV4aXRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh0YXJnZXQpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlzRnVuY3Rpb24gOiBpc0Z1bmN0aW9uLFxuICAgIGlzQXJyYXkgOiBpc0FycmF5LFxuICAgIGVhY2ggOiBlYWNoXG59O1xuIiwidmFyIE1lZGlhUXVlcnlEaXNwYXRjaCA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeURpc3BhdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBNZWRpYVF1ZXJ5RGlzcGF0Y2goKTtcbiIsIi8qIVxuICogTGF6eSBMb2FkIC0gSmF2YVNjcmlwdCBwbHVnaW4gZm9yIGxhenkgbG9hZGluZyBpbWFnZXNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOSBNaWthIFR1dXBvbGFcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuICogUHJvamVjdCBob21lOlxuICogICBodHRwczovL2FwcGVsc2lpbmkubmV0L3Byb2plY3RzL2xhenlsb2FkXG4gKlxuICogVmVyc2lvbjogMi4wLjAtcmMuMlxuICpcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LkxhenlMb2FkID0gZmFjdG9yeShyb290KTtcbiAgICB9XG59KSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMud2luZG93IHx8IHRoaXMuZ2xvYmFsLCBmdW5jdGlvbiAocm9vdCkge1xuXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpe1xuICAgICAgICByb290ID0gd2luZG93O1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBzcmM6IFwiZGF0YS1zcmNcIixcbiAgICAgICAgc3Jjc2V0OiBcImRhdGEtc3Jjc2V0XCIsXG4gICAgICAgIHNlbGVjdG9yOiBcIi5sYXp5bG9hZFwiLFxuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiBcIjBweFwiLFxuICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBNZXJnZSB0d28gb3IgbW9yZSBvYmplY3RzLiBSZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0ge0Jvb2xlYW59ICBkZWVwICAgICBJZiB0cnVlLCBkbyBhIGRlZXAgKG9yIHJlY3Vyc2l2ZSkgbWVyZ2UgW29wdGlvbmFsXVxuICAgICogQHBhcmFtIHtPYmplY3R9ICAgb2JqZWN0cyAgVGhlIG9iamVjdHMgdG8gbWVyZ2UgdG9nZXRoZXJcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9ICAgICAgICAgIE1lcmdlZCB2YWx1ZXMgb2YgZGVmYXVsdHMgYW5kIG9wdGlvbnNcbiAgICAqL1xuICAgIGNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uICgpICB7XG5cbiAgICAgICAgbGV0IGV4dGVuZGVkID0ge307XG4gICAgICAgIGxldCBkZWVwID0gZmFsc2U7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgICAgICAgLyogQ2hlY2sgaWYgYSBkZWVwIG1lcmdlICovXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzWzBdKSA9PT0gXCJbb2JqZWN0IEJvb2xlYW5dXCIpIHtcbiAgICAgICAgICAgIGRlZXAgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBNZXJnZSB0aGUgb2JqZWN0IGludG8gdGhlIGV4dGVuZGVkIG9iamVjdCAqL1xuICAgICAgICBsZXQgbWVyZ2UgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAvKiBJZiBkZWVwIG1lcmdlIGFuZCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QsIG1lcmdlIHByb3BlcnRpZXMgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZXAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtwcm9wXSkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gZXh0ZW5kKHRydWUsIGV4dGVuZGVkW3Byb3BdLCBvYmpbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyogTG9vcCB0aHJvdWdoIGVhY2ggb2JqZWN0IGFuZCBjb25kdWN0IGEgbWVyZ2UgKi9cbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIG1lcmdlKG9iaik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXh0ZW5kZWQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIExhenlMb2FkKGltYWdlcywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXMgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLnNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIExhenlMb2FkLnByb3RvdHlwZSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8qIFdpdGhvdXQgb2JzZXJ2ZXJzIGxvYWQgZXZlcnl0aGluZyBhbmQgYmFpbCBvdXQgZWFybHkuICovXG4gICAgICAgICAgICBpZiAoIXJvb3QuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGxldCBvYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICByb290OiB0aGlzLnNldHRpbmdzLnJvb3QsXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpbjogdGhpcy5zZXR0aW5ncy5yb290TWFyZ2luLFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogW3RoaXMuc2V0dGluZ3MudGhyZXNob2xkXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbnRyaWVzLCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyYyA9IGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyY3NldCA9IGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmNzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiaW1nXCIgPT09IGVudHJ5LnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnNyY3NldCA9IHNyY3NldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIHNyYyArIFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBvYnNlcnZlckNvbmZpZyk7XG5cbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5pbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkQW5kRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkSW1hZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5pbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIGxldCBzcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmMpO1xuICAgICAgICAgICAgICAgIGxldCBzcmNzZXQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoc2VsZi5zZXR0aW5ncy5zcmNzZXQpO1xuICAgICAgICAgICAgICAgIGlmIChcImltZ1wiID09PSBpbWFnZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIHNyYyArIFwiJylcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QubGF6eWxvYWQgPSBmdW5jdGlvbihpbWFnZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMYXp5TG9hZChpbWFnZXMsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBpZiAocm9vdC5qUXVlcnkpIHtcbiAgICAgICAgY29uc3QgJCA9IHJvb3QualF1ZXJ5O1xuICAgICAgICAkLmZuLmxhenlsb2FkID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZSB8fCBcImRhdGEtc3JjXCI7XG4gICAgICAgICAgICBuZXcgTGF6eUxvYWQoJC5tYWtlQXJyYXkodGhpcyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIExhenlMb2FkO1xufSk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIE1pY3JvTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIEZPQ1VTQUJMRV9FTEVNRU5UUyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ107XG5cbiAgdmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChfcmVmKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSBfcmVmLnRhcmdldE1vZGFsLFxuICAgICAgICAgIF9yZWYkdHJpZ2dlcnMgPSBfcmVmLnRyaWdnZXJzLFxuICAgICAgICAgIHRyaWdnZXJzID0gX3JlZiR0cmlnZ2VycyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHRyaWdnZXJzLFxuICAgICAgICAgIF9yZWYkb25TaG93ID0gX3JlZi5vblNob3csXG4gICAgICAgICAgb25TaG93ID0gX3JlZiRvblNob3cgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvblNob3csXG4gICAgICAgICAgX3JlZiRvbkNsb3NlID0gX3JlZi5vbkNsb3NlLFxuICAgICAgICAgIG9uQ2xvc2UgPSBfcmVmJG9uQ2xvc2UgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvbkNsb3NlLFxuICAgICAgICAgIF9yZWYkb3BlblRyaWdnZXIgPSBfcmVmLm9wZW5UcmlnZ2VyLFxuICAgICAgICAgIG9wZW5UcmlnZ2VyID0gX3JlZiRvcGVuVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJyA6IF9yZWYkb3BlblRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRjbG9zZVRyaWdnZXIgPSBfcmVmLmNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBjbG9zZVRyaWdnZXIgPSBfcmVmJGNsb3NlVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC1jbG9zZScgOiBfcmVmJGNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJG9wZW5DbGFzcyA9IF9yZWYub3BlbkNsYXNzLFxuICAgICAgICAgIG9wZW5DbGFzcyA9IF9yZWYkb3BlbkNsYXNzID09PSB2b2lkIDAgPyAnaXMtb3BlbicgOiBfcmVmJG9wZW5DbGFzcyxcbiAgICAgICAgICBfcmVmJGRpc2FibGVTY3JvbGwgPSBfcmVmLmRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgZGlzYWJsZVNjcm9sbCA9IF9yZWYkZGlzYWJsZVNjcm9sbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlRm9jdXMgPSBfcmVmLmRpc2FibGVGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlRm9jdXMgPSBfcmVmJGRpc2FibGVGb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVGb2N1cyxcbiAgICAgICAgICBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPSBfcmVmLmF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbiA9IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0Q2xvc2VBbmltYXQsXG4gICAgICAgICAgX3JlZiRhd2FpdE9wZW5BbmltYXRpID0gX3JlZi5hd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uID0gX3JlZiRhd2FpdE9wZW5BbmltYXRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSxcbiAgICAgICAgICBfcmVmJGRlYnVnTW9kZSA9IF9yZWYuZGVidWdNb2RlLFxuICAgICAgICAgIGRlYnVnTW9kZSA9IF9yZWYkZGVidWdNb2RlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVidWdNb2RlO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIG9mIHRoZSBtb2RhbFxuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTsgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcGFzc2VkIGNvbmZpZ1xuXG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgZGVidWdNb2RlOiBkZWJ1Z01vZGUsXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IGRpc2FibGVTY3JvbGwsXG4gICAgICAgIG9wZW5UcmlnZ2VyOiBvcGVuVHJpZ2dlcixcbiAgICAgICAgY2xvc2VUcmlnZ2VyOiBjbG9zZVRyaWdnZXIsXG4gICAgICAgIG9wZW5DbGFzczogb3BlbkNsYXNzLFxuICAgICAgICBvblNob3c6IG9uU2hvdyxcbiAgICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBhd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgIGRpc2FibGVGb2N1czogZGlzYWJsZUZvY3VzXG4gICAgICB9OyAvLyBSZWdpc3RlciBjbGljayBldmVudHMgb25seSBpZiBwcmUgYmluZGluZyBldmVudExpc3RlbmVyc1xuXG4gICAgICBpZiAodHJpZ2dlcnMubGVuZ3RoID4gMCkgdGhpcy5yZWdpc3RlclRyaWdnZXJzLmFwcGx5KHRoaXMsIF90b0NvbnN1bWFibGVBcnJheSh0cmlnZ2VycykpOyAvLyBwcmUgYmluZCBmdW5jdGlvbnMgZm9yIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMub25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9vcHMgdGhyb3VnaCBhbGwgb3BlblRyaWdnZXJzIGFuZCBiaW5kcyBjbGljayBldmVudFxuICAgICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBbQXJyYXkgb2Ygbm9kZSBlbGVtZW50c11cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAgICBrZXk6IFwicmVnaXN0ZXJUcmlnZ2Vyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVHJpZ2dlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyaWdnZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIHRyaWdnZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlcnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd01vZGFsKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNob3dNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdkaXNhYmxlJyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRPcGVuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgX3RoaXMyLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgX3RoaXMyLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vblNob3codGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHZhciBtb2RhbCA9IHRoaXMubW9kYWw7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2VuYWJsZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdENsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wZW5DbGFzcyA9IHRoaXMuY29uZmlnLm9wZW5DbGFzczsgLy8gPC0gb2xkIHNjaG9vbCBmdHdcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUob3BlbkNsYXNzKTtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxCeUlkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTtcbiAgICAgICAgaWYgKHRoaXMubW9kYWwpIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzY3JvbGxCZWhhdmlvdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxCZWhhdmlvdXIodG9nZ2xlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZVNjcm9sbCkgcmV0dXJuO1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgICAgICBzd2l0Y2ggKHRvZ2dsZSkge1xuICAgICAgICAgIGNhc2UgJ2VuYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZEV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5oYXNBdHRyaWJ1dGUodGhpcy5jb25maWcuY2xvc2VUcmlnZ2VyKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25LZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTsgLy8gZXNjXG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHRoaXMucmV0YWluRm9jdXMoZXZlbnQpOyAvLyB0YWJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Rm9jdXNhYmxlTm9kZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2FibGVOb2RlcygpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UUyk7XG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShub2RlcykpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUcmllcyB0byBzZXQgZm9jdXMgb24gYSBub2RlIHdoaWNoIGlzIG5vdCBhIGNsb3NlIHRyaWdnZXJcbiAgICAgICAqIGlmIG5vIG90aGVyIG5vZGVzIGV4aXN0IHRoZW4gZm9jdXNlcyBvbiBmaXJzdCBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRGb2N1c1RvRmlyc3ROb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRpc2FibGVGb2N1cykgcmV0dXJuO1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjsgLy8gcmVtb3ZlIG5vZGVzIG9uIHdob3NlIGNsaWNrLCB0aGUgbW9kYWwgY2xvc2VzXG4gICAgICAgIC8vIGNvdWxkIG5vdCB0aGluayBvZiBhIGJldHRlciBuYW1lIDooXG5cbiAgICAgICAgdmFyIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKF90aGlzMy5jb25maWcuY2xvc2VUcmlnZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA+IDApIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHNbMF0uZm9jdXMoKTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID09PSAwKSBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXRhaW5Gb2N1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldGFpbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlsdGVycyBub2RlcyB3aGljaCBhcmUgaGlkZGVuIHRvIHByZXZlbnRcbiAgICAgICAgICogZm9jdXMgbGVhayBvdXRzaWRlIG1vZGFsXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICAgICAgICB9KTsgLy8gaWYgZGlzYWJsZUZvY3VzIGlzIHRydWVcblxuICAgICAgICBpZiAoIXRoaXMubW9kYWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlTm9kZXMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1tmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA+IDAgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1vZGFsO1xuICB9KCk7XG4gIC8qKlxuICAgKiBNb2RhbCBwcm90b3R5cGUgZW5kcy5cbiAgICogSGVyZSBvbiBjb2RlIGlzIHJlc3BvbnNpYmxlIGZvciBkZXRlY3RpbmcgYW5kXG4gICAqIGF1dG8gYmluZGluZyBldmVudCBoYW5kbGVycyBvbiBtb2RhbCB0cmlnZ2Vyc1xuICAgKi9cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3BlbmVkIG1vZGFsXG5cblxuICB2YXIgYWN0aXZlTW9kYWwgPSBudWxsO1xuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgaXQnc1xuICAgKiByZXNwZWN0aXZlIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgICAgQW4gYXJyYXkgb2YgYWxsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdHJpZ2dlckF0dHIgVGhlIGRhdGEtYXR0cmlidXRlIHdoaWNoIHRyaWdnZXJzIHRoZSBtb2R1bGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuXG4gIHZhciBnZW5lcmF0ZVRyaWdnZXJNYXAgPSBmdW5jdGlvbiBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIHRyaWdnZXJBdHRyKSB7XG4gICAgdmFyIHRyaWdnZXJNYXAgPSBbXTtcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSB0cmlnZ2VyLmF0dHJpYnV0ZXNbdHJpZ2dlckF0dHJdLnZhbHVlO1xuICAgICAgaWYgKHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID09PSB1bmRlZmluZWQpIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID0gW107XG4gICAgICB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXS5wdXNoKHRyaWdnZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmlnZ2VyTWFwO1xuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIHdoZXRoZXIgYSBtb2RhbCBvZiB0aGUgZ2l2ZW4gaWQgZXhpc3RzXG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCAgVGhlIGlkIG9mIHRoZSBtb2RhbFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1NlZW1zIGxpa2UgeW91IGhhdmUgbWlzc2VkICVjJ1wiLmNvbmNhdChpZCwgXCInXCIpLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnSUQgc29tZXdoZXJlIGluIHlvdXIgY29kZS4gUmVmZXIgZXhhbXBsZSBiZWxvdyB0byByZXNvbHZlIGl0LicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIiBpZD1cXFwiXCIuY29uY2F0KGlkLCBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgYXJlIG1vZGFsIHRyaWdnZXJzIHByZXNlbnRcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgQW4gYXJyYXkgb2YgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKSB7XG4gICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3UGxlYXNlIHNwZWNpZnkgYXQgbGVhc3Qgb25lICVjJ21pY3JvbW9kYWwtdHJpZ2dlcidcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2RhdGEgYXR0cmlidXRlLicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtbWljcm9tb2RhbC10cmlnZ2VyPVxcXCJteS1tb2RhbFxcXCI+PC9hPlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHJpZ2dlcnMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgbW9kYWxzXG4gICAqIGFyZSBwcmVzZW50IGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgQXJyYXkgb2YgRE9NIG5vZGVzIHdoaWNoIGhhdmUgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlck1hcCBBc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIHRoZWlyIHRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlQXJncyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkge1xuICAgIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKTtcbiAgICBpZiAoIXRyaWdnZXJNYXApIHJldHVybiB0cnVlO1xuXG4gICAgZm9yICh2YXIgaWQgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgLyoqXG4gICAqIEJpbmRzIGNsaWNrIGhhbmRsZXJzIHRvIGFsbCBtb2RhbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cblxuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChjb25maWcpIHtcbiAgICAvLyBDcmVhdGUgYW4gY29uZmlnIG9iamVjdCB3aXRoIGRlZmF1bHQgb3BlblRyaWdnZXJcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInXG4gICAgfSwgY29uZmlnKTsgLy8gQ29sbGVjdHMgYWxsIHRoZSBub2RlcyB3aXRoIHRoZSB0cmlnZ2VyXG5cbiAgICB2YXIgdHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIi5jb25jYXQob3B0aW9ucy5vcGVuVHJpZ2dlciwgXCJdXCIpKSk7IC8vIE1ha2VzIGEgbWFwcGluZ3Mgb2YgbW9kYWxzIHdpdGggdGhlaXIgdHJpZ2dlciBub2Rlc1xuXG5cbiAgICB2YXIgdHJpZ2dlck1hcCA9IGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2Vycywgb3B0aW9ucy5vcGVuVHJpZ2dlcik7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkgPT09IGZhbHNlKSByZXR1cm47IC8vIEZvciBldmVyeSB0YXJnZXQgbW9kYWwgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuXG4gICAgZm9yICh2YXIga2V5IGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRyaWdnZXJNYXBba2V5XTtcbiAgICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSBrZXk7XG4gICAgICBvcHRpb25zLnRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlKTtcbiAgICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3dzIGEgcGFydGljdWxhciBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGRpc3BsYXldXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gcGFzc11cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3codGFyZ2V0TW9kYWwsIGNvbmZpZykge1xuICAgIHZhciBvcHRpb25zID0gY29uZmlnIHx8IHt9O1xuICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSB0YXJnZXRNb2RhbDsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVNb2RhbFByZXNlbmNlKHRhcmdldE1vZGFsKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gY2xlYXIgZXZlbnRzIGluIGNhc2UgcHJldmlvdXMgbW9kYWwgd2Fzbid0IGNsb3NlXG5cbiAgICBpZiAoYWN0aXZlTW9kYWwpIGFjdGl2ZU1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7IC8vIHN0b3JlcyByZWZlcmVuY2UgdG8gYWN0aXZlIG1vZGFsXG5cbiAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgIGFjdGl2ZU1vZGFsLnNob3dNb2RhbCgpO1xuICB9O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBhY3RpdmUgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBjbG9zZV1cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSh0YXJnZXRNb2RhbCkge1xuICAgIHRhcmdldE1vZGFsID8gYWN0aXZlTW9kYWwuY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIDogYWN0aXZlTW9kYWwuY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBzaG93OiBzaG93LFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufSgpO1xud2luZG93Lk1pY3JvTW9kYWwgPSBNaWNyb01vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBNaWNyb01vZGFsO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2FjY29yZGlvbi1qcyc7XHJcblxyXG52YXIgdGFyZ2V0ZWRDbGFzcyAgICA9ICcuYWNjb3JkaW9uLWNvbnRhaW5lcic7XHJcbnZhciBhY2NvcmRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRlZENsYXNzKTtcclxuXHJcbmlmIChhY2NvcmRpb25FbGVtZW50Lmxlbmd0aCA+IDApIHtcclxuICAgIG5ldyBBY2NvcmRpb24odGFyZ2V0ZWRDbGFzcyk7XHJcbn1cclxuIiwiaW1wb3J0IGVucXVpcmUgZnJvbSAnZW5xdWlyZS1qcyc7XHJcblxyXG5pZiAoIU9iamVjdC5lbnRyaWVzKSB7XHJcbiAgICBPYmplY3QuZW50cmllcyA9IGZ1bmN0aW9uKCBvYmogKXtcclxuICAgICAgICB2YXIgb3duUHJvcHMgPSBPYmplY3Qua2V5cyggb2JqICksXHJcbiAgICAgICAgICAgIGkgPSBvd25Qcm9wcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHJlc0FycmF5ID0gbmV3IEFycmF5KGkpO1xyXG4gICAgICAgIHdoaWxlIChpLS0pXHJcbiAgICAgICAgcmVzQXJyYXlbaV0gPSBbb3duUHJvcHNbaV0sIG9ialtvd25Qcm9wc1tpXV1dO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gcmVzQXJyYXk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5sZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcclxuXHJcbmNvbnN0IG1lZGlhUXVlcmllcyA9IHtcclxuICAgIHNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpJyxcclxuICAgIG1vYjogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIxcHgpJyxcclxuICAgIHRhYjogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJyxcclxuICAgIGxhcDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KScsXHJcbiAgICBkZXM6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCknLFxyXG4gICAgbGc6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCknLFxyXG4gICAgeGw6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCknLFxyXG4gICAgbGFuZHNjYXBlOiAnc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxyXG4gICAgcG90cmFpdDogJ3NjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknXHJcbn07XHJcblxyXG5PYmplY3QuZW50cmllcyhtZWRpYVF1ZXJpZXMpLmZvckVhY2goKFticmVha3BvaW50LCBtZWRpYXF1ZXJ5XSkgPT4gXHJcbiAgICBlbnF1aXJlLnJlZ2lzdGVyKCBtZWRpYXF1ZXJ5LCB7IFxyXG4gICAgICAgIG1hdGNoIDogZnVuY3Rpb24oKSB7IGh0bWwuY2xhc3NMaXN0LmFkZCggYnJlYWtwb2ludCApOyB9LFxyXG4gICAgICAgIHVubWF0Y2ggOiBmdW5jdGlvbigpIHsgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCBicmVha3BvaW50ICk7IH1cclxuICAgIH0pXHJcbik7XHJcblxyXG4iLCJpbXBvcnQgbGF6eWxvYWQgZnJvbSAnbGF6eWxvYWQnO1xyXG5cclxubmV3IGxhenlsb2FkKCk7IiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XHJcblxyXG5NaWNyb01vZGFsLmluaXQoe1xyXG4gICAgb25TaG93OiBtb2RhbCA9PiBjb25zb2xlLmluZm8oYCR7bW9kYWwuaWR9IGlzIHNob3duYCksIC8vIFsxXVxyXG4gICAgb25DbG9zZTogbW9kYWwgPT4gY29uc29sZS5pbmZvKGAke21vZGFsLmlkfSBpcyBoaWRkZW5gKSwgLy8gWzJdXHJcbiAgICBvcGVuVHJpZ2dlcjogJ2RhdGEtY3VzdG9tLW9wZW4nLCAvLyBbM11cclxuICAgIGNsb3NlVHJpZ2dlcjogJ2RhdGEtY3VzdG9tLWNsb3NlJywgLy8gWzRdXHJcbiAgICBvcGVuQ2xhc3M6ICdpcy1vcGVuJywgLy8gWzVdXHJcbiAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlLCAvLyBbNl1cclxuICAgIGRpc2FibGVGb2N1czogZmFsc2UsIC8vIFs3XVxyXG4gICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBmYWxzZSwgLy8gWzhdXHJcbiAgICBhd2FpdENsb3NlQW5pbWF0aW9uOiBmYWxzZSwgLy8gWzldXHJcbiAgICBkZWJ1Z01vZGU6IHRydWUgLy8gWzEwXVxyXG59KTsiLCJjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItbWVudScpO1xyXG5jb25zdCBtb2JpbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zaXZlLW1lbnUnKTtcclxuY29uc3Qgc2l0ZWJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5sZXQgbWFpbm1lbnUgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNpdmUtbWVudScpO1xyXG5sZXQgY2xhc3NOYW1lICAgID0gJ21vYmltZW51JztcclxubGV0IHZlcnRpY2FsTWVudSA9ICd2ZXJ0aWNhbF9fbmF2JztcclxuXHJcbmNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGV0Q2hhbmdlKGUpIHtcclxuXHQvLyBDaGVjayBpZiB0aGUgbWVkaWEgcXVlcnkgaXMgdHJ1ZVxyXG5cdGlmIChlLm1hdGNoZXMpIHtcclxuICBcclxuXHRcdC8vIElmIHRoZSBtZWRpYXF1ZXJ5IGlzIGxhcmdlciB0aGFuIDEwMjRweFxyXG5cdFx0aWYgKG1haW5tZW51LmNsYXNzTGlzdCkge1xyXG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUodmVydGljYWxNZW51KTtcclxuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbm1lbnUnKTtcclxuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbF9fbmF2Jyk7XHJcblx0XHR9XHJcbiAgXHJcblx0fWVsc2V7XHJcblx0XHRcclxuXHRcdC8vIElmIHRoZSBtZWRpYXF1ZXJ5IGlzIHNtYWxsZXIgdGhhbiAxMDI0cHhcclxuXHRcdGlmIChtYWlubWVudS5jbGFzc0xpc3QpIHtcclxuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbm1lbnUnKTtcclxuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbF9fbmF2Jyk7XHJcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZCh2ZXJ0aWNhbE1lbnUpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdG1haW5tZW51LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWUgKyAnICcgKyB2ZXJ0aWNhbE1lbnU7XHJcblx0XHR9XHJcblx0ICBcclxuXHR9XHJcbiAgXHJcbn1cclxuXHJcbi8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyXHJcbm1lZGlhUXVlcnkuYWRkTGlzdGVuZXIoaGFuZGxlVGFibGV0Q2hhbmdlKTtcclxuXHJcbi8vIEluaXRpYWwgY2hlY2tcclxuaGFuZGxlVGFibGV0Q2hhbmdlKG1lZGlhUXVlcnkpO1xyXG5cclxubWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuXHRtb2JpbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2UnKTtcclxuXHRtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2UnKTtcclxuXHRzaXRlYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbWVudS1pcy1vcGVuJyk7XHJcbn0pOyIsImltcG9ydCBTaWVtYSBmcm9tICdzaWVtYSc7XHJcblxyXG52YXIgc2xpZGVzaG93U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVzaG93Jyk7XHJcbnZhciBwcmV2aW91c1NsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXByZXYnKTtcclxudmFyIG5leHRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1uZXh0Jyk7XHJcbnZhciBzbGlkZXNob3cgPSBcIlwiO1xyXG5cclxuaWYgKHNsaWRlc2hvd1NlbGVjdG9yKSB7XHJcbiAgICBzbGlkZXNob3cgPSBuZXcgU2llbWEoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnLnNsaWRlc2hvdycsXHJcbiAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgcGVyUGFnZTogMSxcclxuICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKHByZXZpb3VzU2xpZGUpIHtcclxuICAgIHByZXZpb3VzU2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzbGlkZXNob3cucHJldigpKTtcclxufVxyXG5cclxuaWYgKG5leHRTbGlkZSkge1xyXG4gICAgbmV4dFNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2xpZGVzaG93Lm5leHQoKSk7XHJcbn1cclxuXHJcbi8vaHR0cHM6Ly9jb2RlcGVuLmlvL2NvbGxlY3Rpb24vQWRwa2tkLz9jdXJzb3I9WkQweEptODlNQ1p3UFRFbWRqMHhNREl5TkRVMCIsImltcG9ydCAnLi9mdW5jdGlvbi5ib2R5Y2xhc3Nlcy5qcyc7XHJcbmltcG9ydCAnLi9mdW5jdGlvbi5zbGlkZXNob3cuanMnOyBcclxuaW1wb3J0ICcuL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyc7XHJcbmltcG9ydCAnLi9mdW5jdGlvbi5sYXp5bG9hZC5qcyc7IFxyXG5pbXBvcnQgJy4vZnVuY3Rpb24ubW9kYWwuanMnO1xyXG5pbXBvcnQgJy4vZnVuY3Rpb24uYWNjb3JkaW9uLmpzJzsiXSwic291cmNlUm9vdCI6IiJ9