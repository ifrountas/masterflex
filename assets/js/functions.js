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
/*! no static exports found */
/***/ (function(module, exports) {

// import enquire from 'enquire-js';
// if (!Object.entries) {
//     Object.entries = function( obj ){
//         var ownProps = Object.keys( obj ),
//             i = ownProps.length,
//             resArray = new Array(i);
//         while (i--)
//         resArray[i] = [ownProps[i], obj[ownProps[i]]];
//         return resArray;
//     };
// }
// let html = document.querySelector('html');
// const mediaQueries = {
//     sm: 'screen and (min-width: 0px)',
//     mob: 'screen and (min-width: 321px)',
//     tab: 'screen and (min-width: 600px)',
//     lap: 'screen and (min-width: 1024px)',
//     des: 'screen and (min-width: 1280px)',
//     lg: 'screen and (min-width: 1440px)',
//     xl: 'screen and (min-width: 1680px)',
//     landscape: 'screen and (orientation: landscape)',
//     potrait: 'screen and (orientation: portrait)'
// };
// Object.entries(mediaQueries).forEach(([breakpoint, mediaquery]) => 
//     enquire.register( mediaquery, { 
//         match : function() { html.classList.add( breakpoint ); },
//         unmatch : function() { html.classList.remove( breakpoint ); }
//     })
// );

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
/* harmony import */ var _function_bodyclasses_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_function_bodyclasses_js__WEBPACK_IMPORTED_MODULE_0__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pY3JvbW9kYWwvZGlzdC9taWNyb21vZGFsLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaWVtYS9kaXN0L3NpZW1hLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uYm9keWNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9uLnNsaWRlc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJpIiwidSIsIm8iLCJsIiwiYyIsInQiLCJpbml0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWFwIiwiZSIsIm9wdGlvbnMiLCJoIiwiZHVyYXRpb24iLCJpdGVtTnVtYmVyIiwiYXJpYSIsImNsb3NlT3RoZXJzIiwic2hvd0l0ZW0iLCJlbGVtZW50Q2xhc3MiLCJxdWVzdGlvbkNsYXNzIiwiYW5zd2VyQ2xhc3MiLCJ0YXJnZXRDbGFzcyIsIm9uVG9nZ2xlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibiIsInNldEF0dHJpYnV0ZSIsInMiLCJyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZUVsZW1lbnQiLCJzZXRUcmFuc2l0aW9uIiwiZ2VuZXJhdGVJRCIsInNldEFSSUEiLCJhIiwidG9nZ2xlRWxlbWVudCIsImF0dGFjaEV2ZW50cyIsInN0eWxlIiwiY29uY2F0IiwidXBkYXRlQVJJQSIsImNhbGxTcGVjaWZpY0VsZW1lbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImNsYXNzTmFtZSIsIm1hdGNoIiwicHJldmVudERlZmF1bHQiLCJjbG9zZUFsbEVsZW1lbnRzIiwiaGVpZ2h0IiwiYXJndW1lbnRzIiwic2Nyb2xsSGVpZ2h0IiwidG9nZ2xlIiwicGFyc2VJbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJyZXNpemVIYW5kbGVyIiwib2Zmc2V0SGVpZ2h0IiwiY2xpY2tIYW5kbGVyIiwia2V5ZG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQWNjb3JkaW9uIiwid2luZG93IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJpdGVyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmcm9tIiwibWluTGVuIiwidG9TdHJpbmciLCJjYWxsIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsImxlbiIsImFycjIiLCJNaWNyb01vZGFsIiwiRk9DVVNBQkxFX0VMRU1FTlRTIiwiTW9kYWwiLCJfcmVmIiwidGFyZ2V0TW9kYWwiLCJfcmVmJHRyaWdnZXJzIiwidHJpZ2dlcnMiLCJfcmVmJG9uU2hvdyIsIm9uU2hvdyIsIl9yZWYkb25DbG9zZSIsIm9uQ2xvc2UiLCJfcmVmJG9wZW5UcmlnZ2VyIiwib3BlblRyaWdnZXIiLCJfcmVmJGNsb3NlVHJpZ2dlciIsImNsb3NlVHJpZ2dlciIsIl9yZWYkb3BlbkNsYXNzIiwib3BlbkNsYXNzIiwiX3JlZiRkaXNhYmxlU2Nyb2xsIiwiZGlzYWJsZVNjcm9sbCIsIl9yZWYkZGlzYWJsZUZvY3VzIiwiZGlzYWJsZUZvY3VzIiwiX3JlZiRhd2FpdENsb3NlQW5pbWF0IiwiYXdhaXRDbG9zZUFuaW1hdGlvbiIsIl9yZWYkYXdhaXRPcGVuQW5pbWF0aSIsImF3YWl0T3BlbkFuaW1hdGlvbiIsIl9yZWYkZGVidWdNb2RlIiwiZGVidWdNb2RlIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsInJlZ2lzdGVyVHJpZ2dlcnMiLCJhcHBseSIsIm9uQ2xpY2siLCJvbktleWRvd24iLCJ2YWx1ZSIsIl90aGlzIiwiX2xlbiIsIl9rZXkiLCJmaWx0ZXIiLCJCb29sZWFuIiwiZm9yRWFjaCIsInRyaWdnZXIiLCJldmVudCIsInNob3dNb2RhbCIsIl90aGlzMiIsInVuZGVmaW5lZCIsImFjdGl2ZUVsZW1lbnQiLCJzY3JvbGxCZWhhdmlvdXIiLCJhZGRFdmVudExpc3RlbmVycyIsImhhbmRsZXIiLCJzZXRGb2N1c1RvRmlyc3ROb2RlIiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZm9jdXMiLCJjbG9zZU1vZGFsQnlJZCIsImJvZHkiLCJhc3NpZ24iLCJvdmVyZmxvdyIsImhhc0F0dHJpYnV0ZSIsInJldGFpbkZvY3VzIiwiZ2V0Rm9jdXNhYmxlTm9kZXMiLCJub2RlcyIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJmb2N1c2VkSXRlbUluZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwiYWN0aXZlTW9kYWwiLCJnZW5lcmF0ZVRyaWdnZXJNYXAiLCJ0cmlnZ2VyQXR0ciIsInRyaWdnZXJNYXAiLCJhdHRyaWJ1dGVzIiwicHVzaCIsInZhbGlkYXRlTW9kYWxQcmVzZW5jZSIsImlkIiwiY29uc29sZSIsIndhcm4iLCJ2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSIsInZhbGlkYXRlQXJncyIsInNob3ciLCJjbG9zZSIsImRlZmluZSIsInNlbGYiLCJtIiwiZCIsImdldCIsIl9fZXNNb2R1bGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJtZXJnZVNldHRpbmdzIiwic2VsZWN0b3IiLCJFcnJvciIsInJlc29sdmVTbGlkZXNOdW1iZXIiLCJzZWxlY3RvcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJpbm5lckVsZW1lbnRzIiwiY2hpbGRyZW4iLCJjdXJyZW50U2xpZGUiLCJsb29wIiwic3RhcnRJbmRleCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJwZXJQYWdlIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ3ZWJraXRPck5vdCIsImRyYWdnYWJsZSIsInBvaW50ZXJEb3duIiwiZHJhZyIsInN0YXJ0WCIsImVuZFgiLCJzdGFydFkiLCJsZXRJdEdvIiwicHJldmVudENsaWNrIiwidG91Y2hzdGFydEhhbmRsZXIiLCJ0b3VjaGVuZEhhbmRsZXIiLCJ0b3VjaG1vdmVIYW5kbGVyIiwibW91c2Vkb3duSGFuZGxlciIsIm1vdXNldXBIYW5kbGVyIiwibW91c2VsZWF2ZUhhbmRsZXIiLCJtb3VzZW1vdmVIYW5kbGVyIiwiZGlyZWN0aW9uIiwicnRsIiwiYnVpbGRTbGlkZXJGcmFtZSIsIm9uSW5pdCIsInNsaWRlckZyYW1lIiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiZW5hYmxlVHJhbnNpdGlvbiIsImN1cnNvciIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJidWlsZFNsaWRlckZyYW1lSXRlbSIsImNsb25lTm9kZSIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwic2xpZGVUb0N1cnJlbnQiLCJjc3NGbG9hdCIsImlubmVyV2lkdGgiLCJkaXNhYmxlVHJhbnNpdGlvbiIsIm9uQ2hhbmdlIiwid2Via2l0VHJhbnNpdGlvbiIsImVhc2luZyIsInRyYW5zaXRpb24iLCJhYnMiLCJtdWx0aXBsZURyYWciLCJjZWlsIiwidGhyZXNob2xkIiwicHJldiIsIm5leHQiLCJub2RlTmFtZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlQWZ0ZXJEcmFnIiwiY2xlYXJEcmFnIiwic3BsaWNlIiwiaW5zZXJ0IiwicmVtb3ZlQXR0cmlidXRlIiwidHJhbnNmb3JtIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJ0YXJnZXRlZENsYXNzIiwiYWNjb3JkaW9uRWxlbWVudCIsImluZm8iLCJtZW51SWNvbiIsIm1vYmltZW51Iiwic2l0ZWJvZHkiLCJtYWlubWVudSIsInZlcnRpY2FsTWVudSIsIm1lZGlhUXVlcnkiLCJtYXRjaE1lZGlhIiwiaGFuZGxlVGFibGV0Q2hhbmdlIiwibWF0Y2hlcyIsImFkZExpc3RlbmVyIiwiY2xpY2tlZE1lbnUiLCJlbCIsInNsaWRlc2hvd1NlbGVjdG9yIiwicHJldmlvdXNTbGlkZSIsIm5leHRTbGlkZSIsInNsaWRlc2hvdyIsIlNpZW1hIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztR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QUFZLEVBQUUsSUFQSTtBQVFsQkUsYUFBUyxFQUFFLEVBUk87QUFTbEJoRCxRQUFJLEVBQUUsSUFUWTtBQVVsQndCLE9BQUcsRUFBRSxLQVZhO0FBV2xCRSxVQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQVhFO0FBWWxCZSxZQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQVpBLEdBQVYsQ0FBWjtBQWNIOztBQUVELElBQUl3QyxhQUFKLEVBQW1CO0FBQ2ZBLGVBQWEsQ0FBQ3ZPLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsV0FBTXlPLFNBQVMsQ0FBQ2xDLElBQVYsRUFBTjtBQUFBLEdBQXhDO0FBQ0g7O0FBRUQsSUFBSWlDLFNBQUosRUFBZTtBQUNYQSxXQUFTLENBQUN4TyxnQkFBVixDQUEyQixPQUEzQixFQUFvQztBQUFBLFdBQU15TyxTQUFTLENBQUNqQyxJQUFWLEVBQU47QUFBQSxHQUFwQztBQUNILEMsQ0FFRCwyRTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7Q0FFQSw2QiIsImZpbGUiOiJmdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiFcclxuICogQWNjb3JkaW9uIHYyLjguMFxyXG4gKiBTaW1wbGUgYWNjb3JkaW9uIGNyZWF0ZWQgaW4gcHVyZSBKYXZhc2NyaXB0LlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaHUyay9BY2NvcmRpb25cclxuICpcclxuICogQ29weXJpZ2h0IDIwMTctMjAxOSBNaWNoYcWCIFN0cnVtcGZcclxuICogUHVibGlzaGVkIHVuZGVyIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cInVzZSBzdHJpY3RcIjshZnVuY3Rpb24oaSl7ZnVuY3Rpb24gdShvLGwpe3ZhciBjPXRoaXMsdD17aW5pdDpmdW5jdGlvbigpe2lmKEFycmF5LmlzQXJyYXkobykpcmV0dXJuIG8ubGVuZ3RoJiZvLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gbmV3IHUoZSxsKX0pLCExO3RoaXMub3B0aW9ucz1oKHtkdXJhdGlvbjo2MDAsaXRlbU51bWJlcjowLGFyaWE6ITAsY2xvc2VPdGhlcnM6ITAsc2hvd0l0ZW06ITEsZWxlbWVudENsYXNzOlwiYWNcIixxdWVzdGlvbkNsYXNzOlwiYWMtcVwiLGFuc3dlckNsYXNzOlwiYWMtYVwiLHRhcmdldENsYXNzOlwiYWMtdGFyZ2V0XCIsb25Ub2dnbGU6ZnVuY3Rpb24oKXt9fSxsKSx0aGlzLmNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8pLHRoaXMuZWxlbWVudHM9dGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm9wdGlvbnMuZWxlbWVudENsYXNzKTt2YXIgZT10aGlzLm9wdGlvbnMsdD1lLmFyaWEsbj1lLnNob3dJdGVtLGk9ZS5pdGVtTnVtYmVyO3QmJnRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYmxpc3RcIik7Zm9yKHZhciBzPTA7czx0aGlzLmVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciByPXRoaXMuZWxlbWVudHNbc107ci5jbGFzc0xpc3QuYWRkKFwianMtZW5hYmxlZFwiKSx0aGlzLmhpZGVFbGVtZW50KHIpLHRoaXMuc2V0VHJhbnNpdGlvbihyKSx0aGlzLmdlbmVyYXRlSUQociksdCYmdGhpcy5zZXRBUklBKHIpfWlmKG4pe3ZhciBhPXRoaXMuZWxlbWVudHNbMF07XCJudW1iZXJcIj09dHlwZW9mIGkmJmk8dGhpcy5lbGVtZW50cy5sZW5ndGgmJihhPXRoaXMuZWxlbWVudHNbaV0pLHRoaXMudG9nZ2xlRWxlbWVudChhLCExKX1jLmF0dGFjaEV2ZW50cygpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucyxuPXQuZHVyYXRpb24saT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpLHI9YShcInRyYW5zaXRpb25cIik7cy5zdHlsZVtyXT1uK1wibXNcIn0sZ2VuZXJhdGVJRDpmdW5jdGlvbihlKXtlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhYy1cIi5jb25jYXQocykpLHMrK30sc2V0QVJJQTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMsbj10LnF1ZXN0aW9uQ2xhc3MsaT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK24pLHI9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpO3Muc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFiXCIpLHMuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJwYW5lbFwiKX0sdXBkYXRlQVJJQTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMub3B0aW9ucy5xdWVzdGlvbkNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIituKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsdCl9LGNhbGxTcGVjaWZpY0VsZW1lbnQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUudGFyZ2V0LG49dGhpcy5vcHRpb25zLGk9bi5xdWVzdGlvbkNsYXNzLHM9bi50YXJnZXRDbGFzcyxyPW4uY2xvc2VPdGhlcnMsYT0wO2E8dGhpcy5lbGVtZW50cy5sZW5ndGg7YSsrKWlmKHRoaXMuZWxlbWVudHNbYV0uY29udGFpbnModCkpeyh0LmNsYXNzTmFtZS5tYXRjaChpKXx8dC5jbGFzc05hbWUubWF0Y2gocykpJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHImJnRoaXMuY2xvc2VBbGxFbGVtZW50cyhhKSx0aGlzLnRvZ2dsZUVsZW1lbnQodGhpcy5lbGVtZW50c1thXSkpO2JyZWFrfX0saGlkZUVsZW1lbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLmFuc3dlckNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIit0KS5zdHlsZS5oZWlnaHQ9MH0sdG9nZ2xlRWxlbWVudDpmdW5jdGlvbihlLHQpe3ZhciBuLGk9ISgxPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQpfHx0LHM9dGhpcy5vcHRpb25zLHI9cy5hbnN3ZXJDbGFzcyxhPXMuYXJpYSxvPXMub25Ub2dnbGUsbD1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrciksYz1sLnNjcm9sbEhlaWdodDtlLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIiksaXx8KGwuc3R5bGUuaGVpZ2h0PVwiYXV0b1wiKSwwPHBhcnNlSW50KGwuc3R5bGUuaGVpZ2h0KT8obj0hMSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsLnN0eWxlLmhlaWdodD0wfSkpOihuPSEwLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2wuc3R5bGUuaGVpZ2h0PWMrXCJweFwifSkpLGEmJnRoaXMudXBkYXRlQVJJQShlLG4pLGkmJm8oZSx0aGlzLmVsZW1lbnRzKX0sY2xvc2VBbGxFbGVtZW50czpmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy5vcHRpb25zLmFyaWEsbj10aGlzLmVsZW1lbnRzLmxlbmd0aCxpPTA7aTxuO2krKylpZihpIT1lKXt2YXIgcz10aGlzLmVsZW1lbnRzW2ldO3MuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpJiZzLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIiksdCYmdGhpcy51cGRhdGVBUklBKHMsITEpLHRoaXMuaGlkZUVsZW1lbnQocyl9fSxyZXNpemVIYW5kbGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQsbj10aGlzLm9wdGlvbnMsaT1uLmVsZW1lbnRDbGFzcyxzPW4uYW5zd2VyQ2xhc3Mscj10aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2krXCIuaXMtYWN0aXZlXCIpLGE9MDthPHIubGVuZ3RoO2ErKyl0PXJbYV0ucXVlcnlTZWxlY3RvcihcIi5cIitzKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnN0eWxlLmhlaWdodD1cImF1dG9cIixlPXQub2Zmc2V0SGVpZ2h0LHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3Quc3R5bGUuaGVpZ2h0PWUrXCJweFwifSl9KX0sY2xpY2tIYW5kbGVyOmZ1bmN0aW9uKGUpe3RoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX0sa2V5ZG93bkhhbmRsZXI6ZnVuY3Rpb24oZSl7MTM9PT1lLmtleUNvZGUmJnRoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX19O3RoaXMuYXR0YWNoRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dDtlLmNsaWNrSGFuZGxlcj1lLmNsaWNrSGFuZGxlci5iaW5kKGUpLGUua2V5ZG93bkhhbmRsZXI9ZS5rZXlkb3duSGFuZGxlci5iaW5kKGUpLGUucmVzaXplSGFuZGxlcj1lLnJlc2l6ZUhhbmRsZXIuYmluZChlKSxlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlLmNsaWNrSGFuZGxlciksZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixlLmtleWRvd25IYW5kbGVyKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixlLnJlc2l6ZUhhbmRsZXIpfSx0aGlzLmRldGFjaEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXQ7ZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZS5rZXlkb3duSGFuZGxlciksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5yZXNpemVIYW5kbGVyKX07dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVtlXT9lOihlPW4oZSksZT1cIndlYmtpdFwiLmNvbmNhdChlKSl9LG49ZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKX0saD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KWVbbl09dFtuXTtyZXR1cm4gZX07aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGkud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXtpLnNldFRpbWVvdXQoZSwxZTMvNjApfSx0LmluaXQoKX12YXIgcz0wO1widW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJnZvaWQgMCE9PW1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXU6aS5BY2NvcmRpb249dX0od2luZG93KTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIE1pY3JvTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIEZPQ1VTQUJMRV9FTEVNRU5UUyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ107XG5cbiAgdmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChfcmVmKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSBfcmVmLnRhcmdldE1vZGFsLFxuICAgICAgICAgIF9yZWYkdHJpZ2dlcnMgPSBfcmVmLnRyaWdnZXJzLFxuICAgICAgICAgIHRyaWdnZXJzID0gX3JlZiR0cmlnZ2VycyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHRyaWdnZXJzLFxuICAgICAgICAgIF9yZWYkb25TaG93ID0gX3JlZi5vblNob3csXG4gICAgICAgICAgb25TaG93ID0gX3JlZiRvblNob3cgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvblNob3csXG4gICAgICAgICAgX3JlZiRvbkNsb3NlID0gX3JlZi5vbkNsb3NlLFxuICAgICAgICAgIG9uQ2xvc2UgPSBfcmVmJG9uQ2xvc2UgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvbkNsb3NlLFxuICAgICAgICAgIF9yZWYkb3BlblRyaWdnZXIgPSBfcmVmLm9wZW5UcmlnZ2VyLFxuICAgICAgICAgIG9wZW5UcmlnZ2VyID0gX3JlZiRvcGVuVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJyA6IF9yZWYkb3BlblRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRjbG9zZVRyaWdnZXIgPSBfcmVmLmNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBjbG9zZVRyaWdnZXIgPSBfcmVmJGNsb3NlVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC1jbG9zZScgOiBfcmVmJGNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJG9wZW5DbGFzcyA9IF9yZWYub3BlbkNsYXNzLFxuICAgICAgICAgIG9wZW5DbGFzcyA9IF9yZWYkb3BlbkNsYXNzID09PSB2b2lkIDAgPyAnaXMtb3BlbicgOiBfcmVmJG9wZW5DbGFzcyxcbiAgICAgICAgICBfcmVmJGRpc2FibGVTY3JvbGwgPSBfcmVmLmRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgZGlzYWJsZVNjcm9sbCA9IF9yZWYkZGlzYWJsZVNjcm9sbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlRm9jdXMgPSBfcmVmLmRpc2FibGVGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlRm9jdXMgPSBfcmVmJGRpc2FibGVGb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVGb2N1cyxcbiAgICAgICAgICBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPSBfcmVmLmF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbiA9IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0Q2xvc2VBbmltYXQsXG4gICAgICAgICAgX3JlZiRhd2FpdE9wZW5BbmltYXRpID0gX3JlZi5hd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uID0gX3JlZiRhd2FpdE9wZW5BbmltYXRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSxcbiAgICAgICAgICBfcmVmJGRlYnVnTW9kZSA9IF9yZWYuZGVidWdNb2RlLFxuICAgICAgICAgIGRlYnVnTW9kZSA9IF9yZWYkZGVidWdNb2RlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVidWdNb2RlO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIG9mIHRoZSBtb2RhbFxuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTsgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcGFzc2VkIGNvbmZpZ1xuXG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgZGVidWdNb2RlOiBkZWJ1Z01vZGUsXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IGRpc2FibGVTY3JvbGwsXG4gICAgICAgIG9wZW5UcmlnZ2VyOiBvcGVuVHJpZ2dlcixcbiAgICAgICAgY2xvc2VUcmlnZ2VyOiBjbG9zZVRyaWdnZXIsXG4gICAgICAgIG9wZW5DbGFzczogb3BlbkNsYXNzLFxuICAgICAgICBvblNob3c6IG9uU2hvdyxcbiAgICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBhd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgIGRpc2FibGVGb2N1czogZGlzYWJsZUZvY3VzXG4gICAgICB9OyAvLyBSZWdpc3RlciBjbGljayBldmVudHMgb25seSBpZiBwcmUgYmluZGluZyBldmVudExpc3RlbmVyc1xuXG4gICAgICBpZiAodHJpZ2dlcnMubGVuZ3RoID4gMCkgdGhpcy5yZWdpc3RlclRyaWdnZXJzLmFwcGx5KHRoaXMsIF90b0NvbnN1bWFibGVBcnJheSh0cmlnZ2VycykpOyAvLyBwcmUgYmluZCBmdW5jdGlvbnMgZm9yIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMub25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9vcHMgdGhyb3VnaCBhbGwgb3BlblRyaWdnZXJzIGFuZCBiaW5kcyBjbGljayBldmVudFxuICAgICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBbQXJyYXkgb2Ygbm9kZSBlbGVtZW50c11cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAgICBrZXk6IFwicmVnaXN0ZXJUcmlnZ2Vyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVHJpZ2dlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyaWdnZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIHRyaWdnZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlcnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd01vZGFsKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNob3dNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdkaXNhYmxlJyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRPcGVuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgX3RoaXMyLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgX3RoaXMyLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vblNob3codGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHZhciBtb2RhbCA9IHRoaXMubW9kYWw7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2VuYWJsZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdENsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wZW5DbGFzcyA9IHRoaXMuY29uZmlnLm9wZW5DbGFzczsgLy8gPC0gb2xkIHNjaG9vbCBmdHdcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUob3BlbkNsYXNzKTtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxCeUlkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTtcbiAgICAgICAgaWYgKHRoaXMubW9kYWwpIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzY3JvbGxCZWhhdmlvdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxCZWhhdmlvdXIodG9nZ2xlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZVNjcm9sbCkgcmV0dXJuO1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgICAgICBzd2l0Y2ggKHRvZ2dsZSkge1xuICAgICAgICAgIGNhc2UgJ2VuYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZEV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5oYXNBdHRyaWJ1dGUodGhpcy5jb25maWcuY2xvc2VUcmlnZ2VyKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25LZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTsgLy8gZXNjXG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHRoaXMucmV0YWluRm9jdXMoZXZlbnQpOyAvLyB0YWJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Rm9jdXNhYmxlTm9kZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2FibGVOb2RlcygpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UUyk7XG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShub2RlcykpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUcmllcyB0byBzZXQgZm9jdXMgb24gYSBub2RlIHdoaWNoIGlzIG5vdCBhIGNsb3NlIHRyaWdnZXJcbiAgICAgICAqIGlmIG5vIG90aGVyIG5vZGVzIGV4aXN0IHRoZW4gZm9jdXNlcyBvbiBmaXJzdCBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRGb2N1c1RvRmlyc3ROb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRpc2FibGVGb2N1cykgcmV0dXJuO1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjsgLy8gcmVtb3ZlIG5vZGVzIG9uIHdob3NlIGNsaWNrLCB0aGUgbW9kYWwgY2xvc2VzXG4gICAgICAgIC8vIGNvdWxkIG5vdCB0aGluayBvZiBhIGJldHRlciBuYW1lIDooXG5cbiAgICAgICAgdmFyIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKF90aGlzMy5jb25maWcuY2xvc2VUcmlnZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA+IDApIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHNbMF0uZm9jdXMoKTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID09PSAwKSBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXRhaW5Gb2N1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldGFpbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlsdGVycyBub2RlcyB3aGljaCBhcmUgaGlkZGVuIHRvIHByZXZlbnRcbiAgICAgICAgICogZm9jdXMgbGVhayBvdXRzaWRlIG1vZGFsXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICAgICAgICB9KTsgLy8gaWYgZGlzYWJsZUZvY3VzIGlzIHRydWVcblxuICAgICAgICBpZiAoIXRoaXMubW9kYWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlTm9kZXMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1tmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA+IDAgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1vZGFsO1xuICB9KCk7XG4gIC8qKlxuICAgKiBNb2RhbCBwcm90b3R5cGUgZW5kcy5cbiAgICogSGVyZSBvbiBjb2RlIGlzIHJlc3BvbnNpYmxlIGZvciBkZXRlY3RpbmcgYW5kXG4gICAqIGF1dG8gYmluZGluZyBldmVudCBoYW5kbGVycyBvbiBtb2RhbCB0cmlnZ2Vyc1xuICAgKi9cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3BlbmVkIG1vZGFsXG5cblxuICB2YXIgYWN0aXZlTW9kYWwgPSBudWxsO1xuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgaXQnc1xuICAgKiByZXNwZWN0aXZlIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgICAgQW4gYXJyYXkgb2YgYWxsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdHJpZ2dlckF0dHIgVGhlIGRhdGEtYXR0cmlidXRlIHdoaWNoIHRyaWdnZXJzIHRoZSBtb2R1bGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuXG4gIHZhciBnZW5lcmF0ZVRyaWdnZXJNYXAgPSBmdW5jdGlvbiBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIHRyaWdnZXJBdHRyKSB7XG4gICAgdmFyIHRyaWdnZXJNYXAgPSBbXTtcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSB0cmlnZ2VyLmF0dHJpYnV0ZXNbdHJpZ2dlckF0dHJdLnZhbHVlO1xuICAgICAgaWYgKHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID09PSB1bmRlZmluZWQpIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID0gW107XG4gICAgICB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXS5wdXNoKHRyaWdnZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmlnZ2VyTWFwO1xuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIHdoZXRoZXIgYSBtb2RhbCBvZiB0aGUgZ2l2ZW4gaWQgZXhpc3RzXG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCAgVGhlIGlkIG9mIHRoZSBtb2RhbFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1NlZW1zIGxpa2UgeW91IGhhdmUgbWlzc2VkICVjJ1wiLmNvbmNhdChpZCwgXCInXCIpLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnSUQgc29tZXdoZXJlIGluIHlvdXIgY29kZS4gUmVmZXIgZXhhbXBsZSBiZWxvdyB0byByZXNvbHZlIGl0LicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIiBpZD1cXFwiXCIuY29uY2F0KGlkLCBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgYXJlIG1vZGFsIHRyaWdnZXJzIHByZXNlbnRcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgQW4gYXJyYXkgb2YgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKSB7XG4gICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3UGxlYXNlIHNwZWNpZnkgYXQgbGVhc3Qgb25lICVjJ21pY3JvbW9kYWwtdHJpZ2dlcidcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2RhdGEgYXR0cmlidXRlLicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtbWljcm9tb2RhbC10cmlnZ2VyPVxcXCJteS1tb2RhbFxcXCI+PC9hPlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHJpZ2dlcnMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgbW9kYWxzXG4gICAqIGFyZSBwcmVzZW50IGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgQXJyYXkgb2YgRE9NIG5vZGVzIHdoaWNoIGhhdmUgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlck1hcCBBc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIHRoZWlyIHRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlQXJncyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkge1xuICAgIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKTtcbiAgICBpZiAoIXRyaWdnZXJNYXApIHJldHVybiB0cnVlO1xuXG4gICAgZm9yICh2YXIgaWQgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgLyoqXG4gICAqIEJpbmRzIGNsaWNrIGhhbmRsZXJzIHRvIGFsbCBtb2RhbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cblxuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChjb25maWcpIHtcbiAgICAvLyBDcmVhdGUgYW4gY29uZmlnIG9iamVjdCB3aXRoIGRlZmF1bHQgb3BlblRyaWdnZXJcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInXG4gICAgfSwgY29uZmlnKTsgLy8gQ29sbGVjdHMgYWxsIHRoZSBub2RlcyB3aXRoIHRoZSB0cmlnZ2VyXG5cbiAgICB2YXIgdHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIi5jb25jYXQob3B0aW9ucy5vcGVuVHJpZ2dlciwgXCJdXCIpKSk7IC8vIE1ha2VzIGEgbWFwcGluZ3Mgb2YgbW9kYWxzIHdpdGggdGhlaXIgdHJpZ2dlciBub2Rlc1xuXG5cbiAgICB2YXIgdHJpZ2dlck1hcCA9IGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2Vycywgb3B0aW9ucy5vcGVuVHJpZ2dlcik7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkgPT09IGZhbHNlKSByZXR1cm47IC8vIEZvciBldmVyeSB0YXJnZXQgbW9kYWwgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuXG4gICAgZm9yICh2YXIga2V5IGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRyaWdnZXJNYXBba2V5XTtcbiAgICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSBrZXk7XG4gICAgICBvcHRpb25zLnRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlKTtcbiAgICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3dzIGEgcGFydGljdWxhciBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGRpc3BsYXldXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gcGFzc11cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3codGFyZ2V0TW9kYWwsIGNvbmZpZykge1xuICAgIHZhciBvcHRpb25zID0gY29uZmlnIHx8IHt9O1xuICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSB0YXJnZXRNb2RhbDsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVNb2RhbFByZXNlbmNlKHRhcmdldE1vZGFsKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gY2xlYXIgZXZlbnRzIGluIGNhc2UgcHJldmlvdXMgbW9kYWwgd2Fzbid0IGNsb3NlXG5cbiAgICBpZiAoYWN0aXZlTW9kYWwpIGFjdGl2ZU1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7IC8vIHN0b3JlcyByZWZlcmVuY2UgdG8gYWN0aXZlIG1vZGFsXG5cbiAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgIGFjdGl2ZU1vZGFsLnNob3dNb2RhbCgpO1xuICB9O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBhY3RpdmUgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBjbG9zZV1cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSh0YXJnZXRNb2RhbCkge1xuICAgIHRhcmdldE1vZGFsID8gYWN0aXZlTW9kYWwuY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIDogYWN0aXZlTW9kYWwuY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBzaG93OiBzaG93LFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufSgpO1xud2luZG93Lk1pY3JvTW9kYWwgPSBNaWNyb01vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBNaWNyb01vZGFsO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2FjY29yZGlvbi1qcyc7XG5cbnZhciB0YXJnZXRlZENsYXNzICAgID0gJy5hY2NvcmRpb24tY29udGFpbmVyJztcbnZhciBhY2NvcmRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRlZENsYXNzKTtcblxuaWYgKGFjY29yZGlvbkVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgIG5ldyBBY2NvcmRpb24odGFyZ2V0ZWRDbGFzcyk7XG59XG4iLCIvLyBpbXBvcnQgZW5xdWlyZSBmcm9tICdlbnF1aXJlLWpzJztcblxuLy8gaWYgKCFPYmplY3QuZW50cmllcykge1xuLy8gICAgIE9iamVjdC5lbnRyaWVzID0gZnVuY3Rpb24oIG9iaiApe1xuLy8gICAgICAgICB2YXIgb3duUHJvcHMgPSBPYmplY3Qua2V5cyggb2JqICksXG4vLyAgICAgICAgICAgICBpID0gb3duUHJvcHMubGVuZ3RoLFxuLy8gICAgICAgICAgICAgcmVzQXJyYXkgPSBuZXcgQXJyYXkoaSk7XG4vLyAgICAgICAgIHdoaWxlIChpLS0pXG4vLyAgICAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcbiAgICAgIFxuLy8gICAgICAgICByZXR1cm4gcmVzQXJyYXk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gbGV0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5cbi8vIGNvbnN0IG1lZGlhUXVlcmllcyA9IHtcbi8vICAgICBzbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KScsXG4vLyAgICAgbW9iOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjFweCknLFxuLy8gICAgIHRhYjogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJyxcbi8vICAgICBsYXA6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknLFxuLy8gICAgIGRlczogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KScsXG4vLyAgICAgbGc6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCknLFxuLy8gICAgIHhsOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpJyxcbi8vICAgICBsYW5kc2NhcGU6ICdzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4vLyAgICAgcG90cmFpdDogJ3NjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknXG4vLyB9O1xuXG4vLyBPYmplY3QuZW50cmllcyhtZWRpYVF1ZXJpZXMpLmZvckVhY2goKFticmVha3BvaW50LCBtZWRpYXF1ZXJ5XSkgPT4gXG4vLyAgICAgZW5xdWlyZS5yZWdpc3RlciggbWVkaWFxdWVyeSwgeyBcbi8vICAgICAgICAgbWF0Y2ggOiBmdW5jdGlvbigpIHsgaHRtbC5jbGFzc0xpc3QuYWRkKCBicmVha3BvaW50ICk7IH0sXG4vLyAgICAgICAgIHVubWF0Y2ggOiBmdW5jdGlvbigpIHsgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCBicmVha3BvaW50ICk7IH1cbi8vICAgICB9KVxuLy8gKTtcblxuIiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5cbk1pY3JvTW9kYWwuaW5pdCh7XG4gICAgb25TaG93OiBtb2RhbCA9PiBjb25zb2xlLmluZm8oYCR7bW9kYWwuaWR9IGlzIHNob3duYCksIC8vIFsxXVxuICAgIG9uQ2xvc2U6IG1vZGFsID0+IGNvbnNvbGUuaW5mbyhgJHttb2RhbC5pZH0gaXMgaGlkZGVuYCksIC8vIFsyXVxuICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1jdXN0b20tb3BlbicsIC8vIFszXVxuICAgIGNsb3NlVHJpZ2dlcjogJ2RhdGEtY3VzdG9tLWNsb3NlJywgLy8gWzRdXG4gICAgb3BlbkNsYXNzOiAnaXMtb3BlbicsIC8vIFs1XVxuICAgIGRpc2FibGVTY3JvbGw6IHRydWUsIC8vIFs2XVxuICAgIGRpc2FibGVGb2N1czogZmFsc2UsIC8vIFs3XVxuICAgIGF3YWl0T3BlbkFuaW1hdGlvbjogZmFsc2UsIC8vIFs4XVxuICAgIGF3YWl0Q2xvc2VBbmltYXRpb246IGZhbHNlLCAvLyBbOV1cbiAgICBkZWJ1Z01vZGU6IHRydWUgLy8gWzEwXVxufSk7IiwiY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IG1vYmltZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNpdmUtbWVudScpO1xuY29uc3Qgc2l0ZWJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmxldCBtYWlubWVudSAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2l2ZS1tZW51Jyk7XG5sZXQgY2xhc3NOYW1lICAgID0gJ21vYmltZW51JztcbmxldCB2ZXJ0aWNhbE1lbnUgPSAndmVydGljYWxfX25hdic7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpO1xuXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXRDaGFuZ2UoZSkge1xuXHQvLyBDaGVjayBpZiB0aGUgbWVkaWEgcXVlcnkgaXMgdHJ1ZVxuXHRpZiAoZS5tYXRjaGVzKSB7XG4gIFxuXHRcdC8vIElmIHRoZSBtZWRpYXF1ZXJ5IGlzIGxhcmdlciB0aGFuIDEwMjRweFxuXHRcdGlmIChtYWlubWVudS5jbGFzc0xpc3QpIHtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUodmVydGljYWxNZW51KTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5hZGQoJ21haW5tZW51Jyk7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsX19uYXYnKTtcblx0XHR9XG4gIFxuXHR9ZWxzZXtcblx0XHRcblx0XHQvLyBJZiB0aGUgbWVkaWFxdWVyeSBpcyBzbWFsbGVyIHRoYW4gMTAyNHB4XG5cdFx0aWYgKG1haW5tZW51LmNsYXNzTGlzdCkge1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbm1lbnUnKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWxfX25hdicpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZCh2ZXJ0aWNhbE1lbnUpO1xuXHRcdH1lbHNle1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZSArICcgJyArIHZlcnRpY2FsTWVudTtcblx0XHR9XG5cdCAgXG5cdH1cbiAgXG59XG5cbi8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyXG5tZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKGhhbmRsZVRhYmxldENoYW5nZSk7XG5cbi8vIEluaXRpYWwgY2hlY2tcbmhhbmRsZVRhYmxldENoYW5nZShtZWRpYVF1ZXJ5KTtcblxubWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcblx0bW9iaW1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG5cdG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZScpO1xuXHRzaXRlYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbWVudS1pcy1vcGVuJyk7XG59KTtcblxuLy8gQ3JlYXRlIHN1YiBtZW51c1xuZnVuY3Rpb24gY2xpY2tlZE1lbnUoKXtcbiAgICBpZih0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbWVudSAuc3ViLW1lbnUnKSl7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdzdWItbWVudS1hY3RpdmUnKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJykuZm9yRWFjaChmdW5jdGlvbihlbCl7XG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tlZE1lbnUpO1xufSk7IiwiaW1wb3J0IFNpZW1hIGZyb20gJ3NpZW1hJztcblxudmFyIHNsaWRlc2hvd1NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlc2hvdycpO1xudmFyIHByZXZpb3VzU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtcHJldicpO1xudmFyIG5leHRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1uZXh0Jyk7XG52YXIgc2xpZGVzaG93ID0gXCJcIjtcblxuaWYgKHNsaWRlc2hvd1NlbGVjdG9yKSB7XG4gICAgc2xpZGVzaG93ID0gbmV3IFNpZW1hKHtcbiAgICAgICAgc2VsZWN0b3I6ICcuc2xpZGVzaG93JyxcbiAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxuICAgICAgICBwZXJQYWdlOiAxLFxuICAgICAgICBzdGFydEluZGV4OiAwLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcbiAgICAgICAgdGhyZXNob2xkOiAyMCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIH0pO1xufVxuXG5pZiAocHJldmlvdXNTbGlkZSkge1xuICAgIHByZXZpb3VzU2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzbGlkZXNob3cucHJldigpKTtcbn1cblxuaWYgKG5leHRTbGlkZSkge1xuICAgIG5leHRTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNsaWRlc2hvdy5uZXh0KCkpO1xufVxuXG4vL2h0dHBzOi8vY29kZXBlbi5pby9jb2xsZWN0aW9uL0FkcGtrZC8/Y3Vyc29yPVpEMHhKbTg5TUNad1BURW1kajB4TURJeU5EVTAiLCJpbXBvcnQgJy4vZnVuY3Rpb24uYm9keWNsYXNzZXMuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uLnNsaWRlc2hvdy5qcyc7IFxuaW1wb3J0ICcuL2Z1bmN0aW9uLm9mZmNhbnZhcy5qcyc7XG4vL2ltcG9ydCAnLi9mdW5jdGlvbi5sYXp5bG9hZC5qcyc7IFxuaW1wb3J0ICcuL2Z1bmN0aW9uLm1vZGFsLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbi5hY2NvcmRpb24uanMnO1xuLy9pbXBvcnQgJy4vZnVuY3Rpb24ubGF4LmpzJzsiXSwic291cmNlUm9vdCI6IiJ9