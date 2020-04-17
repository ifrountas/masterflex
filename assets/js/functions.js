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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUtanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5bG9hZC9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uYm9keWNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVucXVpcmVTY3JlZW4iLCJ1bmVucXVpcmVTY3JlZW4iLCJlbnF1aXJlSnMiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhUG9seWZpbGwiLCJtZWRpYVF1ZXJ5IiwibWVkaWEiLCJtYXRjaGVzIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJyZXF1aXJlIiwibW9iaWxlUXVlcnkiLCJjYiIsInF1ZXJ5IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaGFuZGxlciIsIm1hdGNoIiwidW5tYXRjaCIsInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsIlF1ZXJ5SGFuZGxlciIsImVhY2giLCJNZWRpYVF1ZXJ5IiwiaXNVbmNvbmRpdGlvbmFsIiwiaGFuZGxlcnMiLCJtcWwiLCJzZWxmIiwibGlzdGVuZXIiLCJjdXJyZW50VGFyZ2V0IiwiYXNzZXNzIiwicHJvdG90eXBlIiwiY29uc3R1Y3RvciIsImFkZEhhbmRsZXIiLCJxaCIsInB1c2giLCJvbiIsInJlbW92ZUhhbmRsZXIiLCJoIiwiaSIsImVxdWFscyIsImRlc3Ryb3kiLCJzcGxpY2UiLCJjbGVhciIsImFjdGlvbiIsIm1vZHVsZSIsIlV0aWwiLCJpc0Z1bmN0aW9uIiwiaXNBcnJheSIsIk1lZGlhUXVlcnlEaXNwYXRjaCIsIkVycm9yIiwicXVlcmllcyIsImJyb3dzZXJJc0luY2FwYWJsZSIsImNvbnN0cnVjdG9yIiwicSIsIm9wdGlvbnMiLCJzaG91bGREZWdyYWRlIiwiZGVmZXJTZXR1cCIsInNldHVwIiwiaW5pdGlhbGlzZWQiLCJvZmYiLCJ0YXJnZXQiLCJjb2xsZWN0aW9uIiwiZm4iLCJjb250IiwidG9TdHJpbmciLCJhcHBseSIsInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwiZ2xvYmFsIiwiZGVmYXVsdHMiLCJzcmMiLCJzcmNzZXQiLCJzZWxlY3RvciIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJleHRlbmQiLCJleHRlbmRlZCIsImRlZXAiLCJjYWxsIiwibWVyZ2UiLCJvYmoiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJMYXp5TG9hZCIsImltYWdlcyIsInNldHRpbmdzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJpbml0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJsb2FkSW1hZ2VzIiwib2JzZXJ2ZXJDb25maWciLCJlbnRyaWVzIiwiQXJyYXkiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2UiLCJvYnNlcnZlIiwibG9hZEFuZERlc3Ryb3kiLCJkaXNjb25uZWN0IiwibGF6eWxvYWQiLCJqUXVlcnkiLCIkIiwiYXR0cmlidXRlIiwibWFrZUFycmF5IiwiZyIsIkZ1bmN0aW9uIiwiZSIsIm93blByb3BzIiwia2V5cyIsInJlc0FycmF5IiwiaHRtbCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYVF1ZXJpZXMiLCJzbSIsIm1vYiIsInRhYiIsImxhcCIsImRlcyIsImxnIiwieGwiLCJsYW5kc2NhcGUiLCJwb3RyYWl0IiwiYnJlYWtwb2ludCIsIm1lZGlhcXVlcnkiLCJlbnF1aXJlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibmF2U2xpZGUiLCJidXJnZXIiLCJuYXYiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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Q0FBQ0wsU0FBSixDQUFjTyxNQUFkLENBQXFCLHVCQUFyQjtBQUNBLEdBRkQ7QUFHQSxDQVBELEMsQ0FTQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZW5xdWlyZVNjcmVlbiA9IGVucXVpcmVTY3JlZW47XG5leHBvcnRzLnVuZW5xdWlyZVNjcmVlbiA9IHVuZW5xdWlyZVNjcmVlbjtcbnZhciBlbnF1aXJlSnMgPSB2b2lkIDA7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIG1hdGNoTWVkaWFQb2x5ZmlsbCA9IGZ1bmN0aW9uIG1hdGNoTWVkaWFQb2x5ZmlsbChtZWRpYVF1ZXJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lZGlhOiBtZWRpYVF1ZXJ5LFxuICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkTGlzdGVuZXIoKSB7fSxcbiAgICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcigpIHt9XG4gICAgfTtcbiAgfTtcbiAgd2luZG93Lm1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSB8fCBtYXRjaE1lZGlhUG9seWZpbGw7XG4gIGVucXVpcmVKcyA9IHJlcXVpcmUoJ2VucXVpcmUuanMnKTtcbn1cblxudmFyIG1vYmlsZVF1ZXJ5ID0gJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOTlweCknO1xuXG5mdW5jdGlvbiBlbnF1aXJlU2NyZWVuKGNiKSB7XG4gIHZhciBxdWVyeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbW9iaWxlUXVlcnk7XG5cbiAgaWYgKCFlbnF1aXJlSnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IHtcbiAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2goKSB7XG4gICAgICBjYiAmJiBjYih0cnVlKTtcbiAgICB9LFxuICAgIHVubWF0Y2g6IGZ1bmN0aW9uIHVubWF0Y2goKSB7XG4gICAgICBjYiAmJiBjYigpO1xuICAgIH1cbiAgfTtcbiAgZW5xdWlyZUpzLnJlZ2lzdGVyKHF1ZXJ5LCBoYW5kbGVyKTtcbiAgcmV0dXJuIGhhbmRsZXI7XG59XG5cbmZ1bmN0aW9uIHVuZW5xdWlyZVNjcmVlbihoYW5kbGVyKSB7XG4gIHZhciBxdWVyeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbW9iaWxlUXVlcnk7XG5cbiAgaWYgKCFlbnF1aXJlSnMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZW5xdWlyZUpzLnVucmVnaXN0ZXIocXVlcnksIGhhbmRsZXIpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBlbnF1aXJlSnM7XG4iLCJ2YXIgUXVlcnlIYW5kbGVyID0gcmVxdWlyZSgnLi9RdWVyeUhhbmRsZXInKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9VdGlsJykuZWFjaDtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIG1lZGlhIHF1ZXJ5LCBtYW5hZ2VzIGl0J3Mgc3RhdGUgYW5kIHJlZ2lzdGVyZWQgaGFuZGxlcnMgZm9yIHRoaXMgcXVlcnlcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgbWVkaWEgcXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1VuY29uZGl0aW9uYWw9ZmFsc2VdIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBydW4gcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBjb25kaXRpb25zIGFyZSBtZXQuIFByaW1hcmlseSBmb3IgaGVscGluZyBvbGRlciBicm93c2VycyBkZWFsIHdpdGggbW9iaWxlLWZpcnN0IGRlc2lnblxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5KHF1ZXJ5LCBpc1VuY29uZGl0aW9uYWwpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5pc1VuY29uZGl0aW9uYWwgPSBpc1VuY29uZGl0aW9uYWw7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbihtcWwpIHtcbiAgICAgICAgLy8gQ2hyb21lIHBhc3NlcyBhbiBNZWRpYVF1ZXJ5TGlzdEV2ZW50IG9iamVjdCwgd2hpbGUgb3RoZXIgYnJvd3NlcnMgcGFzcyBNZWRpYVF1ZXJ5TGlzdCBkaXJlY3RseVxuICAgICAgICBzZWxmLm1xbCA9IG1xbC5jdXJyZW50VGFyZ2V0IHx8IG1xbDtcbiAgICAgICAgc2VsZi5hc3Nlc3MoKTtcbiAgICB9O1xuICAgIHRoaXMubXFsLmFkZExpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xufVxuXG5NZWRpYVF1ZXJ5LnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0dWN0b3IgOiBNZWRpYVF1ZXJ5LFxuXG4gICAgLyoqXG4gICAgICogYWRkIGEgaGFuZGxlciBmb3IgdGhpcyBxdWVyeSwgdHJpZ2dlcmluZyBpZiBhbHJlYWR5IGFjdGl2ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLm1hdGNoIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGRlYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIuc2V0dXBdIGNhbGxiYWNrIGZvciBpbW1lZGlhdGUgZXhlY3V0aW9uIHdoZW4gYSBxdWVyeSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtoYW5kbGVyLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIGhhbmRsZXIgaXMgbWF0Y2hlZD9cbiAgICAgKi9cbiAgICBhZGRIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgcWggPSBuZXcgUXVlcnlIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2gocWgpO1xuXG4gICAgICAgIHRoaXMubWF0Y2hlcygpICYmIHFoLm9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJlbW92ZXMgdGhlIGdpdmVuIGhhbmRsZXIgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIGNhbGxzIGl0J3MgZGVzdHJveSBtZXRob2RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gaGFuZGxlciB0aGUgaGFuZGxlciB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzO1xuICAgICAgICBlYWNoKGhhbmRsZXJzLCBmdW5jdGlvbihoLCBpKSB7XG4gICAgICAgICAgICBpZihoLmVxdWFscyhoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGguZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhaGFuZGxlcnMuc3BsaWNlKGksMSk7IC8vcmVtb3ZlIGZyb20gYXJyYXkgYW5kIGV4aXQgZWFjaCBlYXJseVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBiZSBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgbWVkaWEgcXVlcnkgY2FuIGJlIGNvbnNpZGVyZWQgYSBtYXRjaCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgbWF0Y2hlcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tcWwubWF0Y2hlcyB8fCB0aGlzLmlzVW5jb25kaXRpb25hbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBoYW5kbGVycyBhbmQgdW5iaW5kcyBldmVudHNcbiAgICAgKi9cbiAgICBjbGVhciA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tcWwucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMubGVuZ3RoID0gMDsgLy9jbGVhciBhcnJheVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICAqIEFzc2Vzc2VzIHRoZSBxdWVyeSwgdHVybmluZyBvbiBhbGwgaGFuZGxlcnMgaWYgaXQgbWF0Y2hlcywgdHVybmluZyB0aGVtIG9mZiBpZiBpdCBkb2Vzbid0IG1hdGNoXG4gICAgICAgICovXG4gICAgYXNzZXNzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLm1hdGNoZXMoKSA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXJbYWN0aW9uXSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnk7XG4iLCJ2YXIgTWVkaWFRdWVyeSA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeScpO1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcbnZhciBlYWNoID0gVXRpbC5lYWNoO1xudmFyIGlzRnVuY3Rpb24gPSBVdGlsLmlzRnVuY3Rpb247XG52YXIgaXNBcnJheSA9IFV0aWwuaXNBcnJheTtcblxuLyoqXG4gKiBBbGxvd3MgZm9yIHJlZ2lzdHJhdGlvbiBvZiBxdWVyeSBoYW5kbGVycy5cbiAqIE1hbmFnZXMgdGhlIHF1ZXJ5IGhhbmRsZXIncyBzdGF0ZSBhbmQgaXMgcmVzcG9uc2libGUgZm9yIHdpcmluZyB1cCBicm93c2VyIGV2ZW50c1xuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5RGlzcGF0Y2ggKCkge1xuICAgIGlmKCF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hdGNoTWVkaWEgbm90IHByZXNlbnQsIGxlZ2FjeSBicm93c2VycyByZXF1aXJlIGEgcG9seWZpbGwnKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJpZXMgPSB7fTtcbiAgICB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZSA9ICF3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBhbGwnKS5tYXRjaGVzO1xufVxuXG5NZWRpYVF1ZXJ5RGlzcGF0Y2gucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBNZWRpYVF1ZXJ5RGlzcGF0Y2gsXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeVxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IEFycmF5IHx8IEZ1bmN0aW9ufSBvcHRpb25zIGVpdGhlciBhIHNpbmdsZSBxdWVyeSBoYW5kbGVyIG9iamVjdCwgYSBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2YgcXVlcnkgaGFuZGxlcnNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hdGNoIGZpcmVkIHdoZW4gcXVlcnkgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGZpcmVkIHdoZW4gYSBxdWVyeSBpcyBubyBsb25nZXIgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBmaXJlZCB3aGVuIGhhbmRsZXIgZmlyc3QgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWZlclNldHVwPWZhbHNlXSB3aGV0aGVyIHNldHVwIHNob3VsZCBiZSBydW4gaW1tZWRpYXRlbHkgb3IgZGVmZXJyZWQgdW50aWwgcXVlcnkgaXMgZmlyc3QgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Nob3VsZERlZ3JhZGU9ZmFsc2VdIHdoZXRoZXIgdGhpcyBwYXJ0aWN1bGFyIG1lZGlhIHF1ZXJ5IHNob3VsZCBhbHdheXMgcnVuIG9uIGluY2FwYWJsZSBicm93c2Vyc1xuICAgICAqL1xuICAgIHJlZ2lzdGVyIDogZnVuY3Rpb24ocSwgb3B0aW9ucywgc2hvdWxkRGVncmFkZSkge1xuICAgICAgICB2YXIgcXVlcmllcyAgICAgICAgID0gdGhpcy5xdWVyaWVzLFxuICAgICAgICAgICAgaXNVbmNvbmRpdGlvbmFsID0gc2hvdWxkRGVncmFkZSAmJiB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZTtcblxuICAgICAgICBpZighcXVlcmllc1txXSkge1xuICAgICAgICAgICAgcXVlcmllc1txXSA9IG5ldyBNZWRpYVF1ZXJ5KHEsIGlzVW5jb25kaXRpb25hbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL25vcm1hbGlzZSB0byBvYmplY3QgaW4gYW4gYXJyYXlcbiAgICAgICAgaWYoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWF0Y2ggOiBvcHRpb25zIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBbb3B0aW9uc107XG4gICAgICAgIH1cbiAgICAgICAgZWFjaChvcHRpb25zLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB7IG1hdGNoIDogaGFuZGxlciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcmllc1txXS5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdW5yZWdpc3RlcnMgYSBxdWVyeSBhbmQgYWxsIGl0J3MgaGFuZGxlcnMsIG9yIGEgc3BlY2lmaWMgaGFuZGxlciBmb3IgYSBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5IHRvIHRhcmdldFxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbaGFuZGxlcl0gc3BlY2lmaWMgaGFuZGxlciB0byB1bnJlZ2lzdGVyXG4gICAgICovXG4gICAgdW5yZWdpc3RlciA6IGZ1bmN0aW9uKHEsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW3FdO1xuXG4gICAgICAgIGlmKHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkucmVtb3ZlSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcmllc1txXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFRdWVyeURpc3BhdGNoO1xuIiwiLyoqXG4gKiBEZWxlZ2F0ZSB0byBoYW5kbGUgYSBtZWRpYSBxdWVyeSBiZWluZyBtYXRjaGVkIGFuZCB1bm1hdGNoZWQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyB1bm1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBvbmUtdGltZSBjYWxsYmFjayB0cmlnZ2VyZWQgdGhlIGZpcnN0IHRpbWUgYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgcnVuIGltbWVkaWF0ZWx5LCByYXRoZXIgdGhhbiBmaXJzdCB0aW1lIHF1ZXJ5IGlzIG1hdGNoZWQ/XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUXVlcnlIYW5kbGVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICFvcHRpb25zLmRlZmVyU2V0dXAgJiYgdGhpcy5zZXR1cCgpO1xufVxuXG5RdWVyeUhhbmRsZXIucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBRdWVyeUhhbmRsZXIsXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0dXAgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnNldHVwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgYW5kIHRyaWdnZXJpbmcgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICF0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hdGNoICYmIHRoaXMub3B0aW9ucy5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyB0aGUgdW5tYXRjaCBldmVudCBmb3IgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9mZiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudW5tYXRjaCAmJiB0aGlzLm9wdGlvbnMudW5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjYWxsZWQgd2hlbiBhIGhhbmRsZXIgaXMgdG8gYmUgZGVzdHJveWVkLlxuICAgICAqIGRlbGVnYXRlcyB0byB0aGUgZGVzdHJveSBvciB1bm1hdGNoIGNhbGxiYWNrcywgZGVwZW5kaW5nIG9uIGF2YWlsYWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIGRlc3Ryb3kgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlc3Ryb3kgPyB0aGlzLm9wdGlvbnMuZGVzdHJveSgpIDogdGhpcy5vZmYoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBlcXVhbGl0eSBieSByZWZlcmVuY2UuXG4gICAgICogaWYgb2JqZWN0IGlzIHN1cHBsaWVkIGNvbXBhcmUgb3B0aW9ucywgaWYgZnVuY3Rpb24sIGNvbXBhcmUgbWF0Y2ggY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbdGFyZ2V0XSB0aGUgdGFyZ2V0IGZvciBjb21wYXJpc29uXG4gICAgICovXG4gICAgZXF1YWxzIDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPT09IHRhcmdldCB8fCB0aGlzLm9wdGlvbnMubWF0Y2ggPT09IHRhcmdldDtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnlIYW5kbGVyO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGEgY29sbGVjdGlvblxuICpcbiAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gZm5cbiAqL1xuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBmbikge1xuICAgIHZhciBpICAgICAgPSAwLFxuICAgICAgICBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgY29udDtcblxuICAgIGZvcihpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udCA9IGZuKGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICBpZihjb250ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnJlYWs7IC8vYWxsb3cgZWFybHkgZXhpdFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHRhcmdldCB0aGUgb2JqZWN0IHVuZGVyIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHRhcmdldCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGZ1bmN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaXNGdW5jdGlvbiA6IGlzRnVuY3Rpb24sXG4gICAgaXNBcnJheSA6IGlzQXJyYXksXG4gICAgZWFjaCA6IGVhY2hcbn07XG4iLCJ2YXIgTWVkaWFRdWVyeURpc3BhdGNoID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5RGlzcGF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IE1lZGlhUXVlcnlEaXNwYXRjaCgpO1xuIiwiLyohXG4gKiBMYXp5IExvYWQgLSBKYXZhU2NyaXB0IHBsdWdpbiBmb3IgbGF6eSBsb2FkaW5nIGltYWdlc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAwNy0yMDE5IE1pa2EgVHV1cG9sYVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqXG4gKiBQcm9qZWN0IGhvbWU6XG4gKiAgIGh0dHBzOi8vYXBwZWxzaWluaS5uZXQvcHJvamVjdHMvbGF6eWxvYWRcbiAqXG4gKiBWZXJzaW9uOiAyLjAuMC1yYy4yXG4gKlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuTGF6eUxvYWQgPSBmYWN0b3J5KHJvb3QpO1xuICAgIH1cbn0pICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcy53aW5kb3cgfHwgdGhpcy5nbG9iYWwsIGZ1bmN0aW9uIChyb290KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIHJvb3QgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHNyYzogXCJkYXRhLXNyY1wiLFxuICAgICAgICBzcmNzZXQ6IFwiZGF0YS1zcmNzZXRcIixcbiAgICAgICAgc2VsZWN0b3I6IFwiLmxhenlsb2FkXCIsXG4gICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIHRocmVzaG9sZDogMFxuICAgIH07XG5cbiAgICAvKipcbiAgICAqIE1lcmdlIHR3byBvciBtb3JlIG9iamVjdHMuIFJldHVybnMgYSBuZXcgb2JqZWN0LlxuICAgICogQHByaXZhdGVcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gIGRlZXAgICAgIElmIHRydWUsIGRvIGEgZGVlcCAob3IgcmVjdXJzaXZlKSBtZXJnZSBbb3B0aW9uYWxdXG4gICAgKiBAcGFyYW0ge09iamVjdH0gICBvYmplY3RzICBUaGUgb2JqZWN0cyB0byBtZXJnZSB0b2dldGhlclxuICAgICogQHJldHVybnMge09iamVjdH0gICAgICAgICAgTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xuICAgICovXG4gICAgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKCkgIHtcblxuICAgICAgICBsZXQgZXh0ZW5kZWQgPSB7fTtcbiAgICAgICAgbGV0IGRlZXAgPSBmYWxzZTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICAgICAgICAvKiBDaGVjayBpZiBhIGRlZXAgbWVyZ2UgKi9cbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pID09PSBcIltvYmplY3QgQm9vbGVhbl1cIikge1xuICAgICAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIE1lcmdlIHRoZSBvYmplY3QgaW50byB0aGUgZXh0ZW5kZWQgb2JqZWN0ICovXG4gICAgICAgIGxldCBtZXJnZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIElmIGRlZXAgbWVyZ2UgYW5kIHByb3BlcnR5IGlzIGFuIG9iamVjdCwgbWVyZ2UgcHJvcGVydGllcyAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW3Byb3BdKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBleHRlbmQodHJ1ZSwgZXh0ZW5kZWRbcHJvcF0sIG9ialtwcm9wXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmRlZFtwcm9wXSA9IG9ialtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKiBMb29wIHRocm91Z2ggZWFjaCBvYmplY3QgYW5kIGNvbmR1Y3QgYSBtZXJnZSAqL1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgbWVyZ2Uob2JqKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHRlbmRlZDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTGF6eUxvYWQoaW1hZ2VzLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgTGF6eUxvYWQucHJvdG90eXBlID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLyogV2l0aG91dCBvYnNlcnZlcnMgbG9hZCBldmVyeXRoaW5nIGFuZCBiYWlsIG91dCBlYXJseS4gKi9cbiAgICAgICAgICAgIGlmICghcm9vdC5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlcygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG9ic2VydmVyQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHJvb3Q6IHRoaXMuc2V0dGluZ3Mucm9vdCxcbiAgICAgICAgICAgICAgICByb290TWFyZ2luOiB0aGlzLnNldHRpbmdzLnJvb3RNYXJnaW4sXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiBbdGhpcy5zZXR0aW5ncy50aHJlc2hvbGRdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVudHJpZXMsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3Jjc2V0ID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyY3NldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJpbWdcIiA9PT0gZW50cnkudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgc3JjICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIG9ic2VydmVyQ29uZmlnKTtcblxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRBbmREZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRJbWFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncykgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyYyk7XG4gICAgICAgICAgICAgICAgbGV0IHNyY3NldCA9IGltYWdlLmdldEF0dHJpYnV0ZShzZWxmLnNldHRpbmdzLnNyY3NldCk7XG4gICAgICAgICAgICAgICAgaWYgKFwiaW1nXCIgPT09IGltYWdlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgc3JjICsgXCInKVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncykgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5sYXp5bG9hZCA9IGZ1bmN0aW9uKGltYWdlcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IExhenlMb2FkKGltYWdlcywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGlmIChyb290LmpRdWVyeSkge1xuICAgICAgICBjb25zdCAkID0gcm9vdC5qUXVlcnk7XG4gICAgICAgICQuZm4ubGF6eWxvYWQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICBvcHRpb25zLmF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlIHx8IFwiZGF0YS1zcmNcIjtcbiAgICAgICAgICAgIG5ldyBMYXp5TG9hZCgkLm1ha2VBcnJheSh0aGlzKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gTGF6eUxvYWQ7XG59KTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBlbnF1aXJlIGZyb20gJ2VucXVpcmUtanMnO1xyXG5cclxuaWYgKCFPYmplY3QuZW50cmllcykge1xyXG4gICAgT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbiggb2JqICl7XHJcbiAgICAgICAgdmFyIG93blByb3BzID0gT2JqZWN0LmtleXMoIG9iaiApLFxyXG4gICAgICAgICAgICBpID0gb3duUHJvcHMubGVuZ3RoLFxyXG4gICAgICAgICAgICByZXNBcnJheSA9IG5ldyBBcnJheShpKTtcclxuICAgICAgICB3aGlsZSAoaS0tKVxyXG4gICAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc0FycmF5O1xyXG4gICAgfTtcclxufVxyXG5cclxubGV0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XHJcblxyXG5jb25zdCBtZWRpYVF1ZXJpZXMgPSB7XHJcbiAgICBzbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KScsXHJcbiAgICBtb2I6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMXB4KScsXHJcbiAgICB0YWI6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KScsXHJcbiAgICBsYXA6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknLFxyXG4gICAgZGVzOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpJyxcclxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpJyxcclxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpJyxcclxuICAgIGxhbmRzY2FwZTogJ3NjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcclxuICAgIHBvdHJhaXQ6ICdzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJ1xyXG59O1xyXG5cclxuT2JqZWN0LmVudHJpZXMobWVkaWFRdWVyaWVzKS5mb3JFYWNoKChbYnJlYWtwb2ludCwgbWVkaWFxdWVyeV0pID0+IFxyXG4gICAgZW5xdWlyZS5yZWdpc3RlciggbWVkaWFxdWVyeSwgeyBcclxuICAgICAgICBtYXRjaCA6IGZ1bmN0aW9uKCkgeyBodG1sLmNsYXNzTGlzdC5hZGQoIGJyZWFrcG9pbnQgKTsgfSxcclxuICAgICAgICB1bm1hdGNoIDogZnVuY3Rpb24oKSB7IGh0bWwuY2xhc3NMaXN0LnJlbW92ZSggYnJlYWtwb2ludCApOyB9XHJcbiAgICB9KVxyXG4pO1xyXG5cclxuIiwiaW1wb3J0IGxhenlsb2FkIGZyb20gJ2xhenlsb2FkJztcclxuXHJcbm5ldyBsYXp5bG9hZCgpOyIsImNvbnN0IG5hdlNsaWRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcclxuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbiB1bCcpO1xyXG5cclxuXHRidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG5cdFx0bmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdmlnYXRpb25fX2lzLWFjdGl2ZScpO1xyXG5cdH0pXHJcbn1cclxuXHJcbi8vbmF2U2xpZGUoKTsiLCJpbXBvcnQgJy4vZnVuY3Rpb24uYm9keWNsYXNzZXMuanMnO1xyXG5pbXBvcnQgJy4vZnVuY3Rpb24uc2xpZGVzaG93LmpzJzsgXHJcbmltcG9ydCAnLi9mdW5jdGlvbi5vZmZjYW52YXMuanMnO1xyXG5pbXBvcnQgJy4vZnVuY3Rpb24ubGF6eWxvYWQuanMnOyAiXSwic291cmNlUm9vdCI6IiJ9