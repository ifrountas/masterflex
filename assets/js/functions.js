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
/* harmony import */ var _function_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function.modal.js */ "./src/assets/js/function.modal.js");
/* harmony import */ var _function_accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function.accordion.js */ "./src/assets/js/function.accordion.js");


 //import './function.lazyload.js'; 


 //import './function.lax.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUtanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taWNyb21vZGFsL2Rpc3QvbWljcm9tb2RhbC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLmJvZHljbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ubW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5vZmZjYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5zbGlkZXNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOlsiaSIsInUiLCJvIiwibCIsImMiLCJ0IiwiaW5pdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm1hcCIsImUiLCJvcHRpb25zIiwiaCIsImR1cmF0aW9uIiwiaXRlbU51bWJlciIsImFyaWEiLCJjbG9zZU90aGVycyIsInNob3dJdGVtIiwiZWxlbWVudENsYXNzIiwicXVlc3Rpb25DbGFzcyIsImFuc3dlckNsYXNzIiwidGFyZ2V0Q2xhc3MiLCJvblRvZ2dsZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm4iLCJzZXRBdHRyaWJ1dGUiLCJzIiwiciIsImNsYXNzTGlzdCIsImFkZCIsImhpZGVFbGVtZW50Iiwic2V0VHJhbnNpdGlvbiIsImdlbmVyYXRlSUQiLCJzZXRBUklBIiwiYSIsInRvZ2dsZUVsZW1lbnQiLCJhdHRhY2hFdmVudHMiLCJzdHlsZSIsImNvbmNhdCIsInVwZGF0ZUFSSUEiLCJjYWxsU3BlY2lmaWNFbGVtZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbGFzc05hbWUiLCJtYXRjaCIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VBbGxFbGVtZW50cyIsImhlaWdodCIsImFyZ3VtZW50cyIsInNjcm9sbEhlaWdodCIsInRvZ2dsZSIsInBhcnNlSW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlIiwicmVzaXplSGFuZGxlciIsIm9mZnNldEhlaWdodCIsImNsaWNrSGFuZGxlciIsImtleWRvd25IYW5kbGVyIiwia2V5Q29kZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50RWxlbWVudCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwibW9kdWxlIiwiZXhwb3J0cyIsIkFjY29yZGlvbiIsIndpbmRvdyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnF1aXJlU2NyZWVuIiwidW5lbnF1aXJlU2NyZWVuIiwiZW5xdWlyZUpzIiwibWF0Y2hNZWRpYVBvbHlmaWxsIiwibWVkaWFRdWVyeSIsIm1lZGlhIiwibWF0Y2hlcyIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJtYXRjaE1lZGlhIiwicmVxdWlyZSIsIm1vYmlsZVF1ZXJ5IiwiY2IiLCJxdWVyeSIsInVuZGVmaW5lZCIsImhhbmRsZXIiLCJ1bm1hdGNoIiwicmVnaXN0ZXIiLCJ1bnJlZ2lzdGVyIiwiUXVlcnlIYW5kbGVyIiwiZWFjaCIsIk1lZGlhUXVlcnkiLCJpc1VuY29uZGl0aW9uYWwiLCJoYW5kbGVycyIsIm1xbCIsInNlbGYiLCJsaXN0ZW5lciIsImN1cnJlbnRUYXJnZXQiLCJhc3Nlc3MiLCJwcm90b3R5cGUiLCJjb25zdHVjdG9yIiwiYWRkSGFuZGxlciIsInFoIiwicHVzaCIsIm9uIiwicmVtb3ZlSGFuZGxlciIsImVxdWFscyIsImRlc3Ryb3kiLCJzcGxpY2UiLCJjbGVhciIsImFjdGlvbiIsIlV0aWwiLCJpc0Z1bmN0aW9uIiwiTWVkaWFRdWVyeURpc3BhdGNoIiwiRXJyb3IiLCJxdWVyaWVzIiwiYnJvd3NlcklzSW5jYXBhYmxlIiwiY29uc3RydWN0b3IiLCJxIiwic2hvdWxkRGVncmFkZSIsImRlZmVyU2V0dXAiLCJzZXR1cCIsImluaXRpYWxpc2VkIiwib2ZmIiwiY29sbGVjdGlvbiIsImZuIiwiY29udCIsInRvU3RyaW5nIiwiYXBwbHkiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJpdGVyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmcm9tIiwibWluTGVuIiwiY2FsbCIsIm5hbWUiLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIk1pY3JvTW9kYWwiLCJGT0NVU0FCTEVfRUxFTUVOVFMiLCJNb2RhbCIsIl9yZWYiLCJ0YXJnZXRNb2RhbCIsIl9yZWYkdHJpZ2dlcnMiLCJ0cmlnZ2VycyIsIl9yZWYkb25TaG93Iiwib25TaG93IiwiX3JlZiRvbkNsb3NlIiwib25DbG9zZSIsIl9yZWYkb3BlblRyaWdnZXIiLCJvcGVuVHJpZ2dlciIsIl9yZWYkY2xvc2VUcmlnZ2VyIiwiY2xvc2VUcmlnZ2VyIiwiX3JlZiRvcGVuQ2xhc3MiLCJvcGVuQ2xhc3MiLCJfcmVmJGRpc2FibGVTY3JvbGwiLCJkaXNhYmxlU2Nyb2xsIiwiX3JlZiRkaXNhYmxlRm9jdXMiLCJkaXNhYmxlRm9jdXMiLCJfcmVmJGF3YWl0Q2xvc2VBbmltYXQiLCJhd2FpdENsb3NlQW5pbWF0aW9uIiwiX3JlZiRhd2FpdE9wZW5BbmltYXRpIiwiYXdhaXRPcGVuQW5pbWF0aW9uIiwiX3JlZiRkZWJ1Z01vZGUiLCJkZWJ1Z01vZGUiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiY29uZmlnIiwicmVnaXN0ZXJUcmlnZ2VycyIsIm9uQ2xpY2siLCJvbktleWRvd24iLCJfdGhpcyIsIl9sZW4iLCJfa2V5IiwiZmlsdGVyIiwiQm9vbGVhbiIsImZvckVhY2giLCJ0cmlnZ2VyIiwiZXZlbnQiLCJzaG93TW9kYWwiLCJfdGhpczIiLCJhY3RpdmVFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3VyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzZXRGb2N1c1RvRmlyc3ROb2RlIiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZm9jdXMiLCJjbG9zZU1vZGFsQnlJZCIsImJvZHkiLCJhc3NpZ24iLCJvdmVyZmxvdyIsImhhc0F0dHJpYnV0ZSIsInJldGFpbkZvY3VzIiwiZ2V0Rm9jdXNhYmxlTm9kZXMiLCJub2RlcyIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJmb2N1c2VkSXRlbUluZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwiYWN0aXZlTW9kYWwiLCJnZW5lcmF0ZVRyaWdnZXJNYXAiLCJ0cmlnZ2VyQXR0ciIsInRyaWdnZXJNYXAiLCJhdHRyaWJ1dGVzIiwidmFsaWRhdGVNb2RhbFByZXNlbmNlIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInZhbGlkYXRlVHJpZ2dlclByZXNlbmNlIiwidmFsaWRhdGVBcmdzIiwic2hvdyIsImNsb3NlIiwiZGVmaW5lIiwibSIsImQiLCJnZXQiLCJfX2VzTW9kdWxlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwibWVyZ2VTZXR0aW5ncyIsInNlbGVjdG9yIiwicmVzb2x2ZVNsaWRlc051bWJlciIsInNlbGVjdG9yV2lkdGgiLCJvZmZzZXRXaWR0aCIsImlubmVyRWxlbWVudHMiLCJjaGlsZHJlbiIsImN1cnJlbnRTbGlkZSIsImxvb3AiLCJzdGFydEluZGV4IiwiTWF0aCIsIm1heCIsIm1pbiIsInBlclBhZ2UiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsIndlYmtpdE9yTm90IiwiZHJhZ2dhYmxlIiwicG9pbnRlckRvd24iLCJkcmFnIiwic3RhcnRYIiwiZW5kWCIsInN0YXJ0WSIsImxldEl0R28iLCJwcmV2ZW50Q2xpY2siLCJ0b3VjaHN0YXJ0SGFuZGxlciIsInRvdWNoZW5kSGFuZGxlciIsInRvdWNobW92ZUhhbmRsZXIiLCJtb3VzZWRvd25IYW5kbGVyIiwibW91c2V1cEhhbmRsZXIiLCJtb3VzZWxlYXZlSGFuZGxlciIsIm1vdXNlbW92ZUhhbmRsZXIiLCJkaXJlY3Rpb24iLCJydGwiLCJidWlsZFNsaWRlckZyYW1lIiwib25Jbml0Iiwic2xpZGVyRnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJlbmFibGVUcmFuc2l0aW9uIiwiY3Vyc29yIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImJ1aWxkU2xpZGVyRnJhbWVJdGVtIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJzbGlkZVRvQ3VycmVudCIsImNzc0Zsb2F0IiwiaW5uZXJXaWR0aCIsImRpc2FibGVUcmFuc2l0aW9uIiwib25DaGFuZ2UiLCJ3ZWJraXRUcmFuc2l0aW9uIiwiZWFzaW5nIiwidHJhbnNpdGlvbiIsImFicyIsIm11bHRpcGxlRHJhZyIsImNlaWwiLCJ0aHJlc2hvbGQiLCJwcmV2IiwibmV4dCIsIm5vZGVOYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ1cGRhdGVBZnRlckRyYWciLCJjbGVhckRyYWciLCJpbnNlcnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0cmFuc2Zvcm0iLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsInRhcmdldGVkQ2xhc3MiLCJhY2NvcmRpb25FbGVtZW50IiwiZW50cmllcyIsIm9iaiIsIm93blByb3BzIiwia2V5cyIsInJlc0FycmF5IiwiaHRtbCIsIm1lZGlhUXVlcmllcyIsInNtIiwibW9iIiwidGFiIiwibGFwIiwiZGVzIiwibGciLCJ4bCIsImxhbmRzY2FwZSIsInBvdHJhaXQiLCJicmVha3BvaW50IiwibWVkaWFxdWVyeSIsImVucXVpcmUiLCJpbmZvIiwibWVudUljb24iLCJtb2JpbWVudSIsInNpdGVib2R5IiwibWFpbm1lbnUiLCJ2ZXJ0aWNhbE1lbnUiLCJoYW5kbGVUYWJsZXRDaGFuZ2UiLCJjbGlja2VkTWVudSIsImVsIiwic2xpZGVzaG93U2VsZWN0b3IiLCJwcmV2aW91c1NsaWRlIiwibmV4dFNsaWRlIiwic2xpZGVzaG93IiwiU2llbWEiXSwibWFwcGluZ3MiOiI7UUFB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QUosRUFBdUI7QUFDbkJHLFdBQVMsR0FBRyxJQUFJQyw0Q0FBSixDQUFVO0FBQ2xCekcsWUFBUSxFQUFFLFlBRFE7QUFFbEJwUCxZQUFRLEVBQUUsR0FGUTtBQUdsQnNTLFVBQU0sRUFBRSxVQUhVO0FBSWxCdEMsV0FBTyxFQUFFLENBSlM7QUFLbEJKLGNBQVUsRUFBRSxDQUxNO0FBTWxCTyxhQUFTLEVBQUUsSUFOTztBQU9sQnNDLGdCQUFZLEVBQUUsSUFQSTtBQVFsQkUsYUFBUyxFQUFFLEVBUk87QUFTbEJoRCxRQUFJLEVBQUUsSUFUWTtBQVVsQndCLE9BQUcsRUFBRSxLQVZhO0FBV2xCRSxVQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQVhFO0FBWWxCZSxZQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQVpBLEdBQVYsQ0FBWjtBQWNIOztBQUVELElBQUlzRCxhQUFKLEVBQW1CO0FBQ2ZBLGVBQWEsQ0FBQ3ZTLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsV0FBTXlTLFNBQVMsQ0FBQ2hELElBQVYsRUFBTjtBQUFBLEdBQXhDO0FBQ0g7O0FBRUQsSUFBSStDLFNBQUosRUFBZTtBQUNYQSxXQUFTLENBQUN4UyxnQkFBVixDQUEyQixPQUEzQixFQUFvQztBQUFBLFdBQU15UyxTQUFTLENBQUMvQyxJQUFWLEVBQU47QUFBQSxHQUFwQztBQUNILEMsQ0FFRCwyRTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBOztBQUNBO0NBRUEsNkIiLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohXHJcbiAqIEFjY29yZGlvbiB2Mi44LjBcclxuICogU2ltcGxlIGFjY29yZGlvbiBjcmVhdGVkIGluIHB1cmUgSmF2YXNjcmlwdC5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY2h1MmsvQWNjb3JkaW9uXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE3LTIwMTkgTWljaGHFgiBTdHJ1bXBmXHJcbiAqIFB1Ymxpc2hlZCB1bmRlciBNSVQgTGljZW5zZVxyXG4gKi9cclxuXCJ1c2Ugc3RyaWN0XCI7IWZ1bmN0aW9uKGkpe2Z1bmN0aW9uIHUobyxsKXt2YXIgYz10aGlzLHQ9e2luaXQ6ZnVuY3Rpb24oKXtpZihBcnJheS5pc0FycmF5KG8pKXJldHVybiBvLmxlbmd0aCYmby5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyB1KGUsbCl9KSwhMTt0aGlzLm9wdGlvbnM9aCh7ZHVyYXRpb246NjAwLGl0ZW1OdW1iZXI6MCxhcmlhOiEwLGNsb3NlT3RoZXJzOiEwLHNob3dJdGVtOiExLGVsZW1lbnRDbGFzczpcImFjXCIscXVlc3Rpb25DbGFzczpcImFjLXFcIixhbnN3ZXJDbGFzczpcImFjLWFcIix0YXJnZXRDbGFzczpcImFjLXRhcmdldFwiLG9uVG9nZ2xlOmZ1bmN0aW9uKCl7fX0sbCksdGhpcy5jb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvKSx0aGlzLmVsZW1lbnRzPXRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5vcHRpb25zLmVsZW1lbnRDbGFzcyk7dmFyIGU9dGhpcy5vcHRpb25zLHQ9ZS5hcmlhLG49ZS5zaG93SXRlbSxpPWUuaXRlbU51bWJlcjt0JiZ0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJsaXN0XCIpO2Zvcih2YXIgcz0wO3M8dGhpcy5lbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgcj10aGlzLmVsZW1lbnRzW3NdO3IuY2xhc3NMaXN0LmFkZChcImpzLWVuYWJsZWRcIiksdGhpcy5oaWRlRWxlbWVudChyKSx0aGlzLnNldFRyYW5zaXRpb24ociksdGhpcy5nZW5lcmF0ZUlEKHIpLHQmJnRoaXMuc2V0QVJJQShyKX1pZihuKXt2YXIgYT10aGlzLmVsZW1lbnRzWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiZpPHRoaXMuZWxlbWVudHMubGVuZ3RoJiYoYT10aGlzLmVsZW1lbnRzW2ldKSx0aGlzLnRvZ2dsZUVsZW1lbnQoYSwhMSl9Yy5hdHRhY2hFdmVudHMoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMsbj10LmR1cmF0aW9uLGk9dC5hbnN3ZXJDbGFzcyxzPWUucXVlcnlTZWxlY3RvcihcIi5cIitpKSxyPWEoXCJ0cmFuc2l0aW9uXCIpO3Muc3R5bGVbcl09bitcIm1zXCJ9LGdlbmVyYXRlSUQ6ZnVuY3Rpb24oZSl7ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWMtXCIuY29uY2F0KHMpKSxzKyt9LHNldEFSSUE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLG49dC5xdWVzdGlvbkNsYXNzLGk9dC5hbnN3ZXJDbGFzcyxzPWUucXVlcnlTZWxlY3RvcihcIi5cIituKSxyPWUucXVlcnlTZWxlY3RvcihcIi5cIitpKTtzLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYlwiKSxzLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLHIuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFicGFuZWxcIil9LHVwZGF0ZUFSSUE6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLm9wdGlvbnMucXVlc3Rpb25DbGFzcztlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrbikuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLHQpfSxjYWxsU3BlY2lmaWNFbGVtZW50OmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnRhcmdldCxuPXRoaXMub3B0aW9ucyxpPW4ucXVlc3Rpb25DbGFzcyxzPW4udGFyZ2V0Q2xhc3Mscj1uLmNsb3NlT3RoZXJzLGE9MDthPHRoaXMuZWxlbWVudHMubGVuZ3RoO2ErKylpZih0aGlzLmVsZW1lbnRzW2FdLmNvbnRhaW5zKHQpKXsodC5jbGFzc05hbWUubWF0Y2goaSl8fHQuY2xhc3NOYW1lLm1hdGNoKHMpKSYmKGUucHJldmVudERlZmF1bHQoKSxyJiZ0aGlzLmNsb3NlQWxsRWxlbWVudHMoYSksdGhpcy50b2dnbGVFbGVtZW50KHRoaXMuZWxlbWVudHNbYV0pKTticmVha319LGhpZGVFbGVtZW50OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucy5hbnN3ZXJDbGFzcztlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdCkuc3R5bGUuaGVpZ2h0PTB9LHRvZ2dsZUVsZW1lbnQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPSEoMTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT10KXx8dCxzPXRoaXMub3B0aW9ucyxyPXMuYW5zd2VyQ2xhc3MsYT1zLmFyaWEsbz1zLm9uVG9nZ2xlLGw9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK3IpLGM9bC5zY3JvbGxIZWlnaHQ7ZS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpLGl8fChsLnN0eWxlLmhlaWdodD1cImF1dG9cIiksMDxwYXJzZUludChsLnN0eWxlLmhlaWdodCk/KG49ITEscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7bC5zdHlsZS5oZWlnaHQ9MH0pKToobj0hMCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsLnN0eWxlLmhlaWdodD1jK1wicHhcIn0pKSxhJiZ0aGlzLnVwZGF0ZUFSSUEoZSxuKSxpJiZvKGUsdGhpcy5lbGVtZW50cyl9LGNsb3NlQWxsRWxlbWVudHM6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMub3B0aW9ucy5hcmlhLG49dGhpcy5lbGVtZW50cy5sZW5ndGgsaT0wO2k8bjtpKyspaWYoaSE9ZSl7dmFyIHM9dGhpcy5lbGVtZW50c1tpXTtzLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSYmcy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpLHQmJnRoaXMudXBkYXRlQVJJQShzLCExKSx0aGlzLmhpZGVFbGVtZW50KHMpfX0scmVzaXplSGFuZGxlcjpmdW5jdGlvbigpe2Zvcih2YXIgZSx0LG49dGhpcy5vcHRpb25zLGk9bi5lbGVtZW50Q2xhc3Mscz1uLmFuc3dlckNsYXNzLHI9dGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5cIitpK1wiLmlzLWFjdGl2ZVwiKSxhPTA7YTxyLmxlbmd0aDthKyspdD1yW2FdLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrcykscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5zdHlsZS5oZWlnaHQ9XCJhdXRvXCIsZT10Lm9mZnNldEhlaWdodCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnN0eWxlLmhlaWdodD1lK1wicHhcIn0pfSl9LGNsaWNrSGFuZGxlcjpmdW5jdGlvbihlKXt0aGlzLmNhbGxTcGVjaWZpY0VsZW1lbnQoZSl9LGtleWRvd25IYW5kbGVyOmZ1bmN0aW9uKGUpezEzPT09ZS5rZXlDb2RlJiZ0aGlzLmNhbGxTcGVjaWZpY0VsZW1lbnQoZSl9fTt0aGlzLmF0dGFjaEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXQ7ZS5jbGlja0hhbmRsZXI9ZS5jbGlja0hhbmRsZXIuYmluZChlKSxlLmtleWRvd25IYW5kbGVyPWUua2V5ZG93bkhhbmRsZXIuYmluZChlKSxlLnJlc2l6ZUhhbmRsZXI9ZS5yZXNpemVIYW5kbGVyLmJpbmQoZSksZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZS5rZXlkb3duSGFuZGxlciksaS5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5yZXNpemVIYW5kbGVyKX0sdGhpcy5kZXRhY2hFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10O2UuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUuY2xpY2tIYW5kbGVyKSxlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUua2V5ZG93bkhhbmRsZXIpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGUucmVzaXplSGFuZGxlcil9O3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVbZV0/ZTooZT1uKGUpLGU9XCJ3ZWJraXRcIi5jb25jYXQoZSkpfSxuPWZ1bmN0aW9uKGUpe3JldHVybiBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9LGg9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl07cmV0dXJuIGV9O2kucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxpLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7aS5zZXRUaW1lb3V0KGUsMWUzLzYwKX0sdC5pbml0KCl9dmFyIHM9MDtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZ2b2lkIDAhPT1tb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz11OmkuQWNjb3JkaW9uPXV9KHdpbmRvdyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lbnF1aXJlU2NyZWVuID0gZW5xdWlyZVNjcmVlbjtcbmV4cG9ydHMudW5lbnF1aXJlU2NyZWVuID0gdW5lbnF1aXJlU2NyZWVuO1xudmFyIGVucXVpcmVKcyA9IHZvaWQgMDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgbWF0Y2hNZWRpYVBvbHlmaWxsID0gZnVuY3Rpb24gbWF0Y2hNZWRpYVBvbHlmaWxsKG1lZGlhUXVlcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVkaWE6IG1lZGlhUXVlcnksXG4gICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcigpIHt9LFxuICAgICAgcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge31cbiAgICB9O1xuICB9O1xuICB3aW5kb3cubWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhIHx8IG1hdGNoTWVkaWFQb2x5ZmlsbDtcbiAgZW5xdWlyZUpzID0gcmVxdWlyZSgnZW5xdWlyZS5qcycpO1xufVxuXG52YXIgbW9iaWxlUXVlcnkgPSAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OXB4KSc7XG5cbmZ1bmN0aW9uIGVucXVpcmVTY3JlZW4oY2IpIHtcbiAgdmFyIHF1ZXJ5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBtb2JpbGVRdWVyeTtcblxuICBpZiAoIWVucXVpcmVKcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0ge1xuICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaCgpIHtcbiAgICAgIGNiICYmIGNiKHRydWUpO1xuICAgIH0sXG4gICAgdW5tYXRjaDogZnVuY3Rpb24gdW5tYXRjaCgpIHtcbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfVxuICB9O1xuICBlbnF1aXJlSnMucmVnaXN0ZXIocXVlcnksIGhhbmRsZXIpO1xuICByZXR1cm4gaGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gdW5lbnF1aXJlU2NyZWVuKGhhbmRsZXIpIHtcbiAgdmFyIHF1ZXJ5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBtb2JpbGVRdWVyeTtcblxuICBpZiAoIWVucXVpcmVKcykge1xuICAgIHJldHVybjtcbiAgfVxuICBlbnF1aXJlSnMudW5yZWdpc3RlcihxdWVyeSwgaGFuZGxlcik7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGVucXVpcmVKcztcbiIsInZhciBRdWVyeUhhbmRsZXIgPSByZXF1aXJlKCcuL1F1ZXJ5SGFuZGxlcicpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuL1V0aWwnKS5lYWNoO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgbWVkaWEgcXVlcnksIG1hbmFnZXMgaXQncyBzdGF0ZSBhbmQgcmVnaXN0ZXJlZCBoYW5kbGVycyBmb3IgdGhpcyBxdWVyeVxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBtZWRpYSBxdWVyeSBzdHJpbmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzVW5jb25kaXRpb25hbD1mYWxzZV0gd2hldGhlciB0aGUgbWVkaWEgcXVlcnkgc2hvdWxkIHJ1biByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIGNvbmRpdGlvbnMgYXJlIG1ldC4gUHJpbWFyaWx5IGZvciBoZWxwaW5nIG9sZGVyIGJyb3dzZXJzIGRlYWwgd2l0aCBtb2JpbGUtZmlyc3QgZGVzaWduXG4gKi9cbmZ1bmN0aW9uIE1lZGlhUXVlcnkocXVlcnksIGlzVW5jb25kaXRpb25hbCkge1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmlzVW5jb25kaXRpb25hbCA9IGlzVW5jb25kaXRpb25hbDtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uKG1xbCkge1xuICAgICAgICAvLyBDaHJvbWUgcGFzc2VzIGFuIE1lZGlhUXVlcnlMaXN0RXZlbnQgb2JqZWN0LCB3aGlsZSBvdGhlciBicm93c2VycyBwYXNzIE1lZGlhUXVlcnlMaXN0IGRpcmVjdGx5XG4gICAgICAgIHNlbGYubXFsID0gbXFsLmN1cnJlbnRUYXJnZXQgfHwgbXFsO1xuICAgICAgICBzZWxmLmFzc2VzcygpO1xuICAgIH07XG4gICAgdGhpcy5tcWwuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG59XG5cbk1lZGlhUXVlcnkucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3R1Y3RvciA6IE1lZGlhUXVlcnksXG5cbiAgICAvKipcbiAgICAgKiBhZGQgYSBoYW5kbGVyIGZvciB0aGlzIHF1ZXJ5LCB0cmlnZ2VyaW5nIGlmIGFscmVhZHkgYWN0aXZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gcXVlcnkgaXMgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIudW5tYXRjaF0gY2FsbGJhY2sgZm9yIHdoZW4gcXVlcnkgaXMgZGVhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlci5zZXR1cF0gY2FsbGJhY2sgZm9yIGltbWVkaWF0ZSBleGVjdXRpb24gd2hlbiBhIHF1ZXJ5IGhhbmRsZXIgaXMgcmVnaXN0ZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhbmRsZXIuZGVmZXJTZXR1cD1mYWxzZV0gc2hvdWxkIHRoZSBzZXR1cCBjYWxsYmFjayBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZmlyc3QgdGltZSB0aGUgaGFuZGxlciBpcyBtYXRjaGVkP1xuICAgICAqL1xuICAgIGFkZEhhbmRsZXIgOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIHZhciBxaCA9IG5ldyBRdWVyeUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChxaCk7XG5cbiAgICAgICAgdGhpcy5tYXRjaGVzKCkgJiYgcWgub24oKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlcyB0aGUgZ2l2ZW4gaGFuZGxlciBmcm9tIHRoZSBjb2xsZWN0aW9uLCBhbmQgY2FsbHMgaXQncyBkZXN0cm95IG1ldGhvZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBoYW5kbGVyIHRoZSBoYW5kbGVyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZUhhbmRsZXIgOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnM7XG4gICAgICAgIGVhY2goaGFuZGxlcnMsIGZ1bmN0aW9uKGgsIGkpIHtcbiAgICAgICAgICAgIGlmKGguZXF1YWxzKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFoYW5kbGVycy5zcGxpY2UoaSwxKTsgLy9yZW1vdmUgZnJvbSBhcnJheSBhbmQgZXhpdCBlYWNoIGVhcmx5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgbWVkaWEgcXVlcnkgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYSBtYXRjaFxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBtZWRpYSBxdWVyeSBjYW4gYmUgY29uc2lkZXJlZCBhIG1hdGNoLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBtYXRjaGVzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1xbC5tYXRjaGVzIHx8IHRoaXMuaXNVbmNvbmRpdGlvbmFsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGhhbmRsZXJzIGFuZCB1bmJpbmRzIGV2ZW50c1xuICAgICAqL1xuICAgIGNsZWFyIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1xbC5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5sZW5ndGggPSAwOyAvL2NsZWFyIGFycmF5XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgICogQXNzZXNzZXMgdGhlIHF1ZXJ5LCB0dXJuaW5nIG9uIGFsbCBoYW5kbGVycyBpZiBpdCBtYXRjaGVzLCB0dXJuaW5nIHRoZW0gb2ZmIGlmIGl0IGRvZXNuJ3QgbWF0Y2hcbiAgICAgICAgKi9cbiAgICBhc3Nlc3MgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMubWF0Y2hlcygpID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlclthY3Rpb25dKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFRdWVyeTtcbiIsInZhciBNZWRpYVF1ZXJ5ID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5Jyk7XG52YXIgVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xudmFyIGVhY2ggPSBVdGlsLmVhY2g7XG52YXIgaXNGdW5jdGlvbiA9IFV0aWwuaXNGdW5jdGlvbjtcbnZhciBpc0FycmF5ID0gVXRpbC5pc0FycmF5O1xuXG4vKipcbiAqIEFsbG93cyBmb3IgcmVnaXN0cmF0aW9uIG9mIHF1ZXJ5IGhhbmRsZXJzLlxuICogTWFuYWdlcyB0aGUgcXVlcnkgaGFuZGxlcidzIHN0YXRlIGFuZCBpcyByZXNwb25zaWJsZSBmb3Igd2lyaW5nIHVwIGJyb3dzZXIgZXZlbnRzXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE1lZGlhUXVlcnlEaXNwYXRjaCAoKSB7XG4gICAgaWYoIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWF0Y2hNZWRpYSBub3QgcHJlc2VudCwgbGVnYWN5IGJyb3dzZXJzIHJlcXVpcmUgYSBwb2x5ZmlsbCcpO1xuICAgIH1cblxuICAgIHRoaXMucXVlcmllcyA9IHt9O1xuICAgIHRoaXMuYnJvd3NlcklzSW5jYXBhYmxlID0gIXdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IGFsbCcpLm1hdGNoZXM7XG59XG5cbk1lZGlhUXVlcnlEaXNwYXRjaC5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvciA6IE1lZGlhUXVlcnlEaXNwYXRjaCxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGhhbmRsZXIgZm9yIHRoZSBnaXZlbiBtZWRpYSBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5XG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgQXJyYXkgfHwgRnVuY3Rpb259IG9wdGlvbnMgZWl0aGVyIGEgc2luZ2xlIHF1ZXJ5IGhhbmRsZXIgb2JqZWN0LCBhIGZ1bmN0aW9uLCBvciBhbiBhcnJheSBvZiBxdWVyeSBoYW5kbGVyc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggZmlyZWQgd2hlbiBxdWVyeSBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMudW5tYXRjaF0gZmlyZWQgd2hlbiBhIHF1ZXJ5IGlzIG5vIGxvbmdlciBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuc2V0dXBdIGZpcmVkIHdoZW4gaGFuZGxlciBmaXJzdCB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHdoZXRoZXIgc2V0dXAgc2hvdWxkIGJlIHJ1biBpbW1lZGlhdGVseSBvciBkZWZlcnJlZCB1bnRpbCBxdWVyeSBpcyBmaXJzdCBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc2hvdWxkRGVncmFkZT1mYWxzZV0gd2hldGhlciB0aGlzIHBhcnRpY3VsYXIgbWVkaWEgcXVlcnkgc2hvdWxkIGFsd2F5cyBydW4gb24gaW5jYXBhYmxlIGJyb3dzZXJzXG4gICAgICovXG4gICAgcmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBvcHRpb25zLCBzaG91bGREZWdyYWRlKSB7XG4gICAgICAgIHZhciBxdWVyaWVzICAgICAgICAgPSB0aGlzLnF1ZXJpZXMsXG4gICAgICAgICAgICBpc1VuY29uZGl0aW9uYWwgPSBzaG91bGREZWdyYWRlICYmIHRoaXMuYnJvd3NlcklzSW5jYXBhYmxlO1xuXG4gICAgICAgIGlmKCFxdWVyaWVzW3FdKSB7XG4gICAgICAgICAgICBxdWVyaWVzW3FdID0gbmV3IE1lZGlhUXVlcnkocSwgaXNVbmNvbmRpdGlvbmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbm9ybWFsaXNlIHRvIG9iamVjdCBpbiBhbiBhcnJheVxuICAgICAgICBpZihpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0geyBtYXRjaCA6IG9wdGlvbnMgfTtcbiAgICAgICAgfVxuICAgICAgICBpZighaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IFtvcHRpb25zXTtcbiAgICAgICAgfVxuICAgICAgICBlYWNoKG9wdGlvbnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHsgbWF0Y2ggOiBoYW5kbGVyIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyaWVzW3FdLmFkZEhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB1bnJlZ2lzdGVycyBhIHF1ZXJ5IGFuZCBhbGwgaXQncyBoYW5kbGVycywgb3IgYSBzcGVjaWZpYyBoYW5kbGVyIGZvciBhIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcSB0aGUgbWVkaWEgcXVlcnkgdG8gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IFtoYW5kbGVyXSBzcGVjaWZpYyBoYW5kbGVyIHRvIHVucmVnaXN0ZXJcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyIDogZnVuY3Rpb24ocSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbcV07XG5cbiAgICAgICAgaWYocXVlcnkpIHtcbiAgICAgICAgICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5yZW1vdmVIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnkuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5xdWVyaWVzW3FdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVF1ZXJ5RGlzcGF0Y2g7XG4iLCIvKipcbiAqIERlbGVnYXRlIHRvIGhhbmRsZSBhIG1lZGlhIHF1ZXJ5IGJlaW5nIG1hdGNoZWQgYW5kIHVubWF0Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgbWF0Y2hlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMudW5tYXRjaF0gY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIHVubWF0Y2hlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuc2V0dXBdIG9uZS10aW1lIGNhbGxiYWNrIHRyaWdnZXJlZCB0aGUgZmlyc3QgdGltZSBhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gc2hvdWxkIHRoZSBzZXR1cCBjYWxsYmFjayBiZSBydW4gaW1tZWRpYXRlbHksIHJhdGhlciB0aGFuIGZpcnN0IHRpbWUgcXVlcnkgaXMgbWF0Y2hlZD9cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBRdWVyeUhhbmRsZXIob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgIW9wdGlvbnMuZGVmZXJTZXR1cCAmJiB0aGlzLnNldHVwKCk7XG59XG5cblF1ZXJ5SGFuZGxlci5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvciA6IFF1ZXJ5SGFuZGxlcixcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHNldHVwIG9mIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXR1cCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMuc2V0dXApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBhbmQgdHJpZ2dlcmluZyBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgb24gOiBmdW5jdGlvbigpIHtcbiAgICAgICAgIXRoaXMuaW5pdGlhbGlzZWQgJiYgdGhpcy5zZXR1cCgpO1xuICAgICAgICB0aGlzLm9wdGlvbnMubWF0Y2ggJiYgdGhpcy5vcHRpb25zLm1hdGNoKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHRoZSB1bm1hdGNoIGV2ZW50IGZvciB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgb2ZmIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51bm1hdGNoICYmIHRoaXMub3B0aW9ucy51bm1hdGNoKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNhbGxlZCB3aGVuIGEgaGFuZGxlciBpcyB0byBiZSBkZXN0cm95ZWQuXG4gICAgICogZGVsZWdhdGVzIHRvIHRoZSBkZXN0cm95IG9yIHVubWF0Y2ggY2FsbGJhY2tzLCBkZXBlbmRpbmcgb24gYXZhaWxhYmlsaXR5LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgZGVzdHJveSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGVzdHJveSA/IHRoaXMub3B0aW9ucy5kZXN0cm95KCkgOiB0aGlzLm9mZigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBkZXRlcm1pbmVzIGVxdWFsaXR5IGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBpZiBvYmplY3QgaXMgc3VwcGxpZWQgY29tcGFyZSBvcHRpb25zLCBpZiBmdW5jdGlvbiwgY29tcGFyZSBtYXRjaCBjYWxsYmFja1xuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IFt0YXJnZXRdIHRoZSB0YXJnZXQgZm9yIGNvbXBhcmlzb25cbiAgICAgKi9cbiAgICBlcXVhbHMgOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9PT0gdGFyZ2V0IHx8IHRoaXMub3B0aW9ucy5tYXRjaCA9PT0gdGFyZ2V0O1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeUhhbmRsZXI7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgaXRlcmF0aW5nIG92ZXIgYSBjb2xsZWN0aW9uXG4gKlxuICogQHBhcmFtIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSBmblxuICovXG5mdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGZuKSB7XG4gICAgdmFyIGkgICAgICA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICBjb250O1xuXG4gICAgZm9yKGk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb250ID0gZm4oY29sbGVjdGlvbltpXSwgaSk7XG4gICAgICAgIGlmKGNvbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhazsgLy9hbGxvdyBlYXJseSBleGl0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodGFyZ2V0KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHRhcmdldCB0aGUgb2JqZWN0IHVuZGVyIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgZnVuY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpc0Z1bmN0aW9uIDogaXNGdW5jdGlvbixcbiAgICBpc0FycmF5IDogaXNBcnJheSxcbiAgICBlYWNoIDogZWFjaFxufTtcbiIsInZhciBNZWRpYVF1ZXJ5RGlzcGF0Y2ggPSByZXF1aXJlKCcuL01lZGlhUXVlcnlEaXNwYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgTWVkaWFRdWVyeURpc3BhdGNoKCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIE1pY3JvTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIEZPQ1VTQUJMRV9FTEVNRU5UUyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ107XG5cbiAgdmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChfcmVmKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSBfcmVmLnRhcmdldE1vZGFsLFxuICAgICAgICAgIF9yZWYkdHJpZ2dlcnMgPSBfcmVmLnRyaWdnZXJzLFxuICAgICAgICAgIHRyaWdnZXJzID0gX3JlZiR0cmlnZ2VycyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHRyaWdnZXJzLFxuICAgICAgICAgIF9yZWYkb25TaG93ID0gX3JlZi5vblNob3csXG4gICAgICAgICAgb25TaG93ID0gX3JlZiRvblNob3cgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvblNob3csXG4gICAgICAgICAgX3JlZiRvbkNsb3NlID0gX3JlZi5vbkNsb3NlLFxuICAgICAgICAgIG9uQ2xvc2UgPSBfcmVmJG9uQ2xvc2UgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvbkNsb3NlLFxuICAgICAgICAgIF9yZWYkb3BlblRyaWdnZXIgPSBfcmVmLm9wZW5UcmlnZ2VyLFxuICAgICAgICAgIG9wZW5UcmlnZ2VyID0gX3JlZiRvcGVuVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJyA6IF9yZWYkb3BlblRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRjbG9zZVRyaWdnZXIgPSBfcmVmLmNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBjbG9zZVRyaWdnZXIgPSBfcmVmJGNsb3NlVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC1jbG9zZScgOiBfcmVmJGNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJG9wZW5DbGFzcyA9IF9yZWYub3BlbkNsYXNzLFxuICAgICAgICAgIG9wZW5DbGFzcyA9IF9yZWYkb3BlbkNsYXNzID09PSB2b2lkIDAgPyAnaXMtb3BlbicgOiBfcmVmJG9wZW5DbGFzcyxcbiAgICAgICAgICBfcmVmJGRpc2FibGVTY3JvbGwgPSBfcmVmLmRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgZGlzYWJsZVNjcm9sbCA9IF9yZWYkZGlzYWJsZVNjcm9sbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlRm9jdXMgPSBfcmVmLmRpc2FibGVGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlRm9jdXMgPSBfcmVmJGRpc2FibGVGb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVGb2N1cyxcbiAgICAgICAgICBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPSBfcmVmLmF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbiA9IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0Q2xvc2VBbmltYXQsXG4gICAgICAgICAgX3JlZiRhd2FpdE9wZW5BbmltYXRpID0gX3JlZi5hd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uID0gX3JlZiRhd2FpdE9wZW5BbmltYXRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSxcbiAgICAgICAgICBfcmVmJGRlYnVnTW9kZSA9IF9yZWYuZGVidWdNb2RlLFxuICAgICAgICAgIGRlYnVnTW9kZSA9IF9yZWYkZGVidWdNb2RlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVidWdNb2RlO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIG9mIHRoZSBtb2RhbFxuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTsgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcGFzc2VkIGNvbmZpZ1xuXG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgZGVidWdNb2RlOiBkZWJ1Z01vZGUsXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IGRpc2FibGVTY3JvbGwsXG4gICAgICAgIG9wZW5UcmlnZ2VyOiBvcGVuVHJpZ2dlcixcbiAgICAgICAgY2xvc2VUcmlnZ2VyOiBjbG9zZVRyaWdnZXIsXG4gICAgICAgIG9wZW5DbGFzczogb3BlbkNsYXNzLFxuICAgICAgICBvblNob3c6IG9uU2hvdyxcbiAgICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBhd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgIGRpc2FibGVGb2N1czogZGlzYWJsZUZvY3VzXG4gICAgICB9OyAvLyBSZWdpc3RlciBjbGljayBldmVudHMgb25seSBpZiBwcmUgYmluZGluZyBldmVudExpc3RlbmVyc1xuXG4gICAgICBpZiAodHJpZ2dlcnMubGVuZ3RoID4gMCkgdGhpcy5yZWdpc3RlclRyaWdnZXJzLmFwcGx5KHRoaXMsIF90b0NvbnN1bWFibGVBcnJheSh0cmlnZ2VycykpOyAvLyBwcmUgYmluZCBmdW5jdGlvbnMgZm9yIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMub25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9vcHMgdGhyb3VnaCBhbGwgb3BlblRyaWdnZXJzIGFuZCBiaW5kcyBjbGljayBldmVudFxuICAgICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBbQXJyYXkgb2Ygbm9kZSBlbGVtZW50c11cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAgICBrZXk6IFwicmVnaXN0ZXJUcmlnZ2Vyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVHJpZ2dlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyaWdnZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIHRyaWdnZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlcnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd01vZGFsKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNob3dNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdkaXNhYmxlJyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRPcGVuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgX3RoaXMyLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgX3RoaXMyLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vblNob3codGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHZhciBtb2RhbCA9IHRoaXMubW9kYWw7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2VuYWJsZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdENsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wZW5DbGFzcyA9IHRoaXMuY29uZmlnLm9wZW5DbGFzczsgLy8gPC0gb2xkIHNjaG9vbCBmdHdcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUob3BlbkNsYXNzKTtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxCeUlkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTtcbiAgICAgICAgaWYgKHRoaXMubW9kYWwpIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzY3JvbGxCZWhhdmlvdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxCZWhhdmlvdXIodG9nZ2xlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZVNjcm9sbCkgcmV0dXJuO1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgICAgICBzd2l0Y2ggKHRvZ2dsZSkge1xuICAgICAgICAgIGNhc2UgJ2VuYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZEV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5oYXNBdHRyaWJ1dGUodGhpcy5jb25maWcuY2xvc2VUcmlnZ2VyKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25LZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTsgLy8gZXNjXG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHRoaXMucmV0YWluRm9jdXMoZXZlbnQpOyAvLyB0YWJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Rm9jdXNhYmxlTm9kZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2FibGVOb2RlcygpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UUyk7XG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShub2RlcykpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUcmllcyB0byBzZXQgZm9jdXMgb24gYSBub2RlIHdoaWNoIGlzIG5vdCBhIGNsb3NlIHRyaWdnZXJcbiAgICAgICAqIGlmIG5vIG90aGVyIG5vZGVzIGV4aXN0IHRoZW4gZm9jdXNlcyBvbiBmaXJzdCBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRGb2N1c1RvRmlyc3ROb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRpc2FibGVGb2N1cykgcmV0dXJuO1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjsgLy8gcmVtb3ZlIG5vZGVzIG9uIHdob3NlIGNsaWNrLCB0aGUgbW9kYWwgY2xvc2VzXG4gICAgICAgIC8vIGNvdWxkIG5vdCB0aGluayBvZiBhIGJldHRlciBuYW1lIDooXG5cbiAgICAgICAgdmFyIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKF90aGlzMy5jb25maWcuY2xvc2VUcmlnZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA+IDApIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHNbMF0uZm9jdXMoKTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID09PSAwKSBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXRhaW5Gb2N1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldGFpbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlsdGVycyBub2RlcyB3aGljaCBhcmUgaGlkZGVuIHRvIHByZXZlbnRcbiAgICAgICAgICogZm9jdXMgbGVhayBvdXRzaWRlIG1vZGFsXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICAgICAgICB9KTsgLy8gaWYgZGlzYWJsZUZvY3VzIGlzIHRydWVcblxuICAgICAgICBpZiAoIXRoaXMubW9kYWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlTm9kZXMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1tmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA+IDAgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1vZGFsO1xuICB9KCk7XG4gIC8qKlxuICAgKiBNb2RhbCBwcm90b3R5cGUgZW5kcy5cbiAgICogSGVyZSBvbiBjb2RlIGlzIHJlc3BvbnNpYmxlIGZvciBkZXRlY3RpbmcgYW5kXG4gICAqIGF1dG8gYmluZGluZyBldmVudCBoYW5kbGVycyBvbiBtb2RhbCB0cmlnZ2Vyc1xuICAgKi9cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3BlbmVkIG1vZGFsXG5cblxuICB2YXIgYWN0aXZlTW9kYWwgPSBudWxsO1xuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgaXQnc1xuICAgKiByZXNwZWN0aXZlIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgICAgQW4gYXJyYXkgb2YgYWxsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdHJpZ2dlckF0dHIgVGhlIGRhdGEtYXR0cmlidXRlIHdoaWNoIHRyaWdnZXJzIHRoZSBtb2R1bGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuXG4gIHZhciBnZW5lcmF0ZVRyaWdnZXJNYXAgPSBmdW5jdGlvbiBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIHRyaWdnZXJBdHRyKSB7XG4gICAgdmFyIHRyaWdnZXJNYXAgPSBbXTtcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSB0cmlnZ2VyLmF0dHJpYnV0ZXNbdHJpZ2dlckF0dHJdLnZhbHVlO1xuICAgICAgaWYgKHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID09PSB1bmRlZmluZWQpIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID0gW107XG4gICAgICB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXS5wdXNoKHRyaWdnZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmlnZ2VyTWFwO1xuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIHdoZXRoZXIgYSBtb2RhbCBvZiB0aGUgZ2l2ZW4gaWQgZXhpc3RzXG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCAgVGhlIGlkIG9mIHRoZSBtb2RhbFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1NlZW1zIGxpa2UgeW91IGhhdmUgbWlzc2VkICVjJ1wiLmNvbmNhdChpZCwgXCInXCIpLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnSUQgc29tZXdoZXJlIGluIHlvdXIgY29kZS4gUmVmZXIgZXhhbXBsZSBiZWxvdyB0byByZXNvbHZlIGl0LicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIiBpZD1cXFwiXCIuY29uY2F0KGlkLCBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgYXJlIG1vZGFsIHRyaWdnZXJzIHByZXNlbnRcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgQW4gYXJyYXkgb2YgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKSB7XG4gICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3UGxlYXNlIHNwZWNpZnkgYXQgbGVhc3Qgb25lICVjJ21pY3JvbW9kYWwtdHJpZ2dlcidcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2RhdGEgYXR0cmlidXRlLicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtbWljcm9tb2RhbC10cmlnZ2VyPVxcXCJteS1tb2RhbFxcXCI+PC9hPlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHJpZ2dlcnMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgbW9kYWxzXG4gICAqIGFyZSBwcmVzZW50IGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgQXJyYXkgb2YgRE9NIG5vZGVzIHdoaWNoIGhhdmUgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlck1hcCBBc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIHRoZWlyIHRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlQXJncyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkge1xuICAgIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKTtcbiAgICBpZiAoIXRyaWdnZXJNYXApIHJldHVybiB0cnVlO1xuXG4gICAgZm9yICh2YXIgaWQgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgLyoqXG4gICAqIEJpbmRzIGNsaWNrIGhhbmRsZXJzIHRvIGFsbCBtb2RhbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cblxuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChjb25maWcpIHtcbiAgICAvLyBDcmVhdGUgYW4gY29uZmlnIG9iamVjdCB3aXRoIGRlZmF1bHQgb3BlblRyaWdnZXJcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInXG4gICAgfSwgY29uZmlnKTsgLy8gQ29sbGVjdHMgYWxsIHRoZSBub2RlcyB3aXRoIHRoZSB0cmlnZ2VyXG5cbiAgICB2YXIgdHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIi5jb25jYXQob3B0aW9ucy5vcGVuVHJpZ2dlciwgXCJdXCIpKSk7IC8vIE1ha2VzIGEgbWFwcGluZ3Mgb2YgbW9kYWxzIHdpdGggdGhlaXIgdHJpZ2dlciBub2Rlc1xuXG5cbiAgICB2YXIgdHJpZ2dlck1hcCA9IGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2Vycywgb3B0aW9ucy5vcGVuVHJpZ2dlcik7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkgPT09IGZhbHNlKSByZXR1cm47IC8vIEZvciBldmVyeSB0YXJnZXQgbW9kYWwgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuXG4gICAgZm9yICh2YXIga2V5IGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRyaWdnZXJNYXBba2V5XTtcbiAgICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSBrZXk7XG4gICAgICBvcHRpb25zLnRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlKTtcbiAgICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3dzIGEgcGFydGljdWxhciBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGRpc3BsYXldXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gcGFzc11cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3codGFyZ2V0TW9kYWwsIGNvbmZpZykge1xuICAgIHZhciBvcHRpb25zID0gY29uZmlnIHx8IHt9O1xuICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSB0YXJnZXRNb2RhbDsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVNb2RhbFByZXNlbmNlKHRhcmdldE1vZGFsKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gY2xlYXIgZXZlbnRzIGluIGNhc2UgcHJldmlvdXMgbW9kYWwgd2Fzbid0IGNsb3NlXG5cbiAgICBpZiAoYWN0aXZlTW9kYWwpIGFjdGl2ZU1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7IC8vIHN0b3JlcyByZWZlcmVuY2UgdG8gYWN0aXZlIG1vZGFsXG5cbiAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgIGFjdGl2ZU1vZGFsLnNob3dNb2RhbCgpO1xuICB9O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBhY3RpdmUgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBjbG9zZV1cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSh0YXJnZXRNb2RhbCkge1xuICAgIHRhcmdldE1vZGFsID8gYWN0aXZlTW9kYWwuY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIDogYWN0aXZlTW9kYWwuY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBzaG93OiBzaG93LFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufSgpO1xud2luZG93Lk1pY3JvTW9kYWwgPSBNaWNyb01vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBNaWNyb01vZGFsO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2FjY29yZGlvbi1qcyc7XG5cbnZhciB0YXJnZXRlZENsYXNzICAgID0gJy5hY2NvcmRpb24tY29udGFpbmVyJztcbnZhciBhY2NvcmRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRlZENsYXNzKTtcblxuaWYgKGFjY29yZGlvbkVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgIG5ldyBBY2NvcmRpb24odGFyZ2V0ZWRDbGFzcyk7XG59XG4iLCJpbXBvcnQgZW5xdWlyZSBmcm9tICdlbnF1aXJlLWpzJztcblxuaWYgKCFPYmplY3QuZW50cmllcykge1xuICAgIE9iamVjdC5lbnRyaWVzID0gZnVuY3Rpb24oIG9iaiApe1xuICAgICAgICB2YXIgb3duUHJvcHMgPSBPYmplY3Qua2V5cyggb2JqICksXG4gICAgICAgICAgICBpID0gb3duUHJvcHMubGVuZ3RoLFxuICAgICAgICAgICAgcmVzQXJyYXkgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcbiAgICAgIFxuICAgICAgICByZXR1cm4gcmVzQXJyYXk7XG4gICAgfTtcbn1cblxubGV0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5cbmNvbnN0IG1lZGlhUXVlcmllcyA9IHtcbiAgICBzbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KScsXG4gICAgbW9iOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjFweCknLFxuICAgIHRhYjogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJyxcbiAgICBsYXA6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknLFxuICAgIGRlczogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KScsXG4gICAgbGc6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCknLFxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpJyxcbiAgICBsYW5kc2NhcGU6ICdzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gICAgcG90cmFpdDogJ3NjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknXG59O1xuXG5PYmplY3QuZW50cmllcyhtZWRpYVF1ZXJpZXMpLmZvckVhY2goKFticmVha3BvaW50LCBtZWRpYXF1ZXJ5XSkgPT4gXG4gICAgZW5xdWlyZS5yZWdpc3RlciggbWVkaWFxdWVyeSwgeyBcbiAgICAgICAgbWF0Y2ggOiBmdW5jdGlvbigpIHsgaHRtbC5jbGFzc0xpc3QuYWRkKCBicmVha3BvaW50ICk7IH0sXG4gICAgICAgIHVubWF0Y2ggOiBmdW5jdGlvbigpIHsgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCBicmVha3BvaW50ICk7IH1cbiAgICB9KVxuKTtcblxuIiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5cbk1pY3JvTW9kYWwuaW5pdCh7XG4gICAgb25TaG93OiBtb2RhbCA9PiBjb25zb2xlLmluZm8oYCR7bW9kYWwuaWR9IGlzIHNob3duYCksIC8vIFsxXVxuICAgIG9uQ2xvc2U6IG1vZGFsID0+IGNvbnNvbGUuaW5mbyhgJHttb2RhbC5pZH0gaXMgaGlkZGVuYCksIC8vIFsyXVxuICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1jdXN0b20tb3BlbicsIC8vIFszXVxuICAgIGNsb3NlVHJpZ2dlcjogJ2RhdGEtY3VzdG9tLWNsb3NlJywgLy8gWzRdXG4gICAgb3BlbkNsYXNzOiAnaXMtb3BlbicsIC8vIFs1XVxuICAgIGRpc2FibGVTY3JvbGw6IHRydWUsIC8vIFs2XVxuICAgIGRpc2FibGVGb2N1czogZmFsc2UsIC8vIFs3XVxuICAgIGF3YWl0T3BlbkFuaW1hdGlvbjogZmFsc2UsIC8vIFs4XVxuICAgIGF3YWl0Q2xvc2VBbmltYXRpb246IGZhbHNlLCAvLyBbOV1cbiAgICBkZWJ1Z01vZGU6IHRydWUgLy8gWzEwXVxufSk7IiwiY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IG1vYmltZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNpdmUtbWVudScpO1xuY29uc3Qgc2l0ZWJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmxldCBtYWlubWVudSAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2l2ZS1tZW51Jyk7XG5sZXQgY2xhc3NOYW1lICAgID0gJ21vYmltZW51JztcbmxldCB2ZXJ0aWNhbE1lbnUgPSAndmVydGljYWxfX25hdic7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpO1xuXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXRDaGFuZ2UoZSkge1xuXHQvLyBDaGVjayBpZiB0aGUgbWVkaWEgcXVlcnkgaXMgdHJ1ZVxuXHRpZiAoZS5tYXRjaGVzKSB7XG4gIFxuXHRcdC8vIElmIHRoZSBtZWRpYXF1ZXJ5IGlzIGxhcmdlciB0aGFuIDEwMjRweFxuXHRcdGlmIChtYWlubWVudS5jbGFzc0xpc3QpIHtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUodmVydGljYWxNZW51KTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5hZGQoJ21haW5tZW51Jyk7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsX19uYXYnKTtcblx0XHR9XG4gIFxuXHR9ZWxzZXtcblx0XHRcblx0XHQvLyBJZiB0aGUgbWVkaWFxdWVyeSBpcyBzbWFsbGVyIHRoYW4gMTAyNHB4XG5cdFx0aWYgKG1haW5tZW51LmNsYXNzTGlzdCkge1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbm1lbnUnKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWxfX25hdicpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZCh2ZXJ0aWNhbE1lbnUpO1xuXHRcdH1lbHNle1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZSArICcgJyArIHZlcnRpY2FsTWVudTtcblx0XHR9XG5cdCAgXG5cdH1cbiAgXG59XG5cbi8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyXG5tZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKGhhbmRsZVRhYmxldENoYW5nZSk7XG5cbi8vIEluaXRpYWwgY2hlY2tcbmhhbmRsZVRhYmxldENoYW5nZShtZWRpYVF1ZXJ5KTtcblxubWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcblx0bW9iaW1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG5cdG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZScpO1xuXHRzaXRlYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbWVudS1pcy1vcGVuJyk7XG59KTtcblxuLy8gQ3JlYXRlIHN1YiBtZW51c1xuZnVuY3Rpb24gY2xpY2tlZE1lbnUoKXtcbiAgICBpZih0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbWVudSAuc3ViLW1lbnUnKSl7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdzdWItbWVudS1hY3RpdmUnKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJykuZm9yRWFjaChmdW5jdGlvbihlbCl7XG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tlZE1lbnUpO1xufSk7IiwiaW1wb3J0IFNpZW1hIGZyb20gJ3NpZW1hJztcblxudmFyIHNsaWRlc2hvd1NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlc2hvdycpO1xudmFyIHByZXZpb3VzU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtcHJldicpO1xudmFyIG5leHRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1uZXh0Jyk7XG52YXIgc2xpZGVzaG93ID0gXCJcIjtcblxuaWYgKHNsaWRlc2hvd1NlbGVjdG9yKSB7XG4gICAgc2xpZGVzaG93ID0gbmV3IFNpZW1hKHtcbiAgICAgICAgc2VsZWN0b3I6ICcuc2xpZGVzaG93JyxcbiAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxuICAgICAgICBwZXJQYWdlOiAxLFxuICAgICAgICBzdGFydEluZGV4OiAwLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcbiAgICAgICAgdGhyZXNob2xkOiAyMCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIH0pO1xufVxuXG5pZiAocHJldmlvdXNTbGlkZSkge1xuICAgIHByZXZpb3VzU2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzbGlkZXNob3cucHJldigpKTtcbn1cblxuaWYgKG5leHRTbGlkZSkge1xuICAgIG5leHRTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNsaWRlc2hvdy5uZXh0KCkpO1xufVxuXG4vL2h0dHBzOi8vY29kZXBlbi5pby9jb2xsZWN0aW9uL0FkcGtrZC8/Y3Vyc29yPVpEMHhKbTg5TUNad1BURW1kajB4TURJeU5EVTAiLCJpbXBvcnQgJy4vZnVuY3Rpb24uYm9keWNsYXNzZXMuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uLnNsaWRlc2hvdy5qcyc7IFxuaW1wb3J0ICcuL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyc7XG4vL2ltcG9ydCAnLi9mdW5jdGlvbi5sYXp5bG9hZC5qcyc7IFxuaW1wb3J0ICcuL2Z1bmN0aW9uLm1vZGFsLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbi5hY2NvcmRpb24uanMnO1xuLy9pbXBvcnQgJy4vZnVuY3Rpb24ubGF4LmpzJzsiXSwic291cmNlUm9vdCI6IiJ9