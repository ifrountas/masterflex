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
/* harmony import */ var _function_slideshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function.slideshow.js */ "./src/assets/js/function.slideshow.js");
/* harmony import */ var _function_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function.offcanvas.js */ "./src/assets/js/function.offcanvas.js");
/* harmony import */ var _function_offcanvas_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_function_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _function_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function.modal.js */ "./src/assets/js/function.modal.js");
/* harmony import */ var _function_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function.accordion.js */ "./src/assets/js/function.accordion.js");
//import './function.bodyclasses.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pY3JvbW9kYWwvZGlzdC9taWNyb21vZGFsLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaWVtYS9kaXN0L3NpZW1hLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ubW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5vZmZjYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5zbGlkZXNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOlsiaSIsInUiLCJvIiwibCIsImMiLCJ0IiwiaW5pdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm1hcCIsImUiLCJvcHRpb25zIiwiaCIsImR1cmF0aW9uIiwiaXRlbU51bWJlciIsImFyaWEiLCJjbG9zZU90aGVycyIsInNob3dJdGVtIiwiZWxlbWVudENsYXNzIiwicXVlc3Rpb25DbGFzcyIsImFuc3dlckNsYXNzIiwidGFyZ2V0Q2xhc3MiLCJvblRvZ2dsZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm4iLCJzZXRBdHRyaWJ1dGUiLCJzIiwiciIsImNsYXNzTGlzdCIsImFkZCIsImhpZGVFbGVtZW50Iiwic2V0VHJhbnNpdGlvbiIsImdlbmVyYXRlSUQiLCJzZXRBUklBIiwiYSIsInRvZ2dsZUVsZW1lbnQiLCJhdHRhY2hFdmVudHMiLCJzdHlsZSIsImNvbmNhdCIsInVwZGF0ZUFSSUEiLCJjYWxsU3BlY2lmaWNFbGVtZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbGFzc05hbWUiLCJtYXRjaCIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VBbGxFbGVtZW50cyIsImhlaWdodCIsImFyZ3VtZW50cyIsInNjcm9sbEhlaWdodCIsInRvZ2dsZSIsInBhcnNlSW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlIiwicmVzaXplSGFuZGxlciIsIm9mZnNldEhlaWdodCIsImNsaWNrSGFuZGxlciIsImtleWRvd25IYW5kbGVyIiwia2V5Q29kZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50RWxlbWVudCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwibW9kdWxlIiwiZXhwb3J0cyIsIkFjY29yZGlvbiIsIndpbmRvdyIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIm1pbkxlbiIsInRvU3RyaW5nIiwiY2FsbCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiTWljcm9Nb2RhbCIsIkZPQ1VTQUJMRV9FTEVNRU5UUyIsIk1vZGFsIiwiX3JlZiIsInRhcmdldE1vZGFsIiwiX3JlZiR0cmlnZ2VycyIsInRyaWdnZXJzIiwiX3JlZiRvblNob3ciLCJvblNob3ciLCJfcmVmJG9uQ2xvc2UiLCJvbkNsb3NlIiwiX3JlZiRvcGVuVHJpZ2dlciIsIm9wZW5UcmlnZ2VyIiwiX3JlZiRjbG9zZVRyaWdnZXIiLCJjbG9zZVRyaWdnZXIiLCJfcmVmJG9wZW5DbGFzcyIsIm9wZW5DbGFzcyIsIl9yZWYkZGlzYWJsZVNjcm9sbCIsImRpc2FibGVTY3JvbGwiLCJfcmVmJGRpc2FibGVGb2N1cyIsImRpc2FibGVGb2N1cyIsIl9yZWYkYXdhaXRDbG9zZUFuaW1hdCIsImF3YWl0Q2xvc2VBbmltYXRpb24iLCJfcmVmJGF3YWl0T3BlbkFuaW1hdGkiLCJhd2FpdE9wZW5BbmltYXRpb24iLCJfcmVmJGRlYnVnTW9kZSIsImRlYnVnTW9kZSIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJyZWdpc3RlclRyaWdnZXJzIiwiYXBwbHkiLCJvbkNsaWNrIiwib25LZXlkb3duIiwidmFsdWUiLCJfdGhpcyIsIl9sZW4iLCJfa2V5IiwiZmlsdGVyIiwiQm9vbGVhbiIsImZvckVhY2giLCJ0cmlnZ2VyIiwiZXZlbnQiLCJzaG93TW9kYWwiLCJfdGhpczIiLCJ1bmRlZmluZWQiLCJhY3RpdmVFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3VyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoYW5kbGVyIiwic2V0Rm9jdXNUb0ZpcnN0Tm9kZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImZvY3VzIiwiY2xvc2VNb2RhbEJ5SWQiLCJib2R5IiwiYXNzaWduIiwib3ZlcmZsb3ciLCJoYXNBdHRyaWJ1dGUiLCJyZXRhaW5Gb2N1cyIsImdldEZvY3VzYWJsZU5vZGVzIiwibm9kZXMiLCJfdGhpczMiLCJmb2N1c2FibGVOb2RlcyIsIm5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMiLCJub2RlIiwib2Zmc2V0UGFyZW50IiwiZm9jdXNlZEl0ZW1JbmRleCIsImluZGV4T2YiLCJzaGlmdEtleSIsImFjdGl2ZU1vZGFsIiwiZ2VuZXJhdGVUcmlnZ2VyTWFwIiwidHJpZ2dlckF0dHIiLCJ0cmlnZ2VyTWFwIiwiYXR0cmlidXRlcyIsInB1c2giLCJ2YWxpZGF0ZU1vZGFsUHJlc2VuY2UiLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwidmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UiLCJ2YWxpZGF0ZUFyZ3MiLCJzaG93IiwiY2xvc2UiLCJkZWZpbmUiLCJzZWxmIiwibSIsImQiLCJnZXQiLCJfX2VzTW9kdWxlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwibWVyZ2VTZXR0aW5ncyIsInNlbGVjdG9yIiwiRXJyb3IiLCJyZXNvbHZlU2xpZGVzTnVtYmVyIiwic2VsZWN0b3JXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW5uZXJFbGVtZW50cyIsImNoaWxkcmVuIiwiY3VycmVudFNsaWRlIiwibG9vcCIsInN0YXJ0SW5kZXgiLCJNYXRoIiwibWF4IiwibWluIiwicGVyUGFnZSIsInRyYW5zZm9ybVByb3BlcnR5Iiwid2Via2l0T3JOb3QiLCJkcmFnZ2FibGUiLCJwb2ludGVyRG93biIsImRyYWciLCJzdGFydFgiLCJlbmRYIiwic3RhcnRZIiwibGV0SXRHbyIsInByZXZlbnRDbGljayIsInRvdWNoc3RhcnRIYW5kbGVyIiwidG91Y2hlbmRIYW5kbGVyIiwidG91Y2htb3ZlSGFuZGxlciIsIm1vdXNlZG93bkhhbmRsZXIiLCJtb3VzZXVwSGFuZGxlciIsIm1vdXNlbGVhdmVIYW5kbGVyIiwibW91c2Vtb3ZlSGFuZGxlciIsImRpcmVjdGlvbiIsInJ0bCIsImJ1aWxkU2xpZGVyRnJhbWUiLCJvbkluaXQiLCJzbGlkZXJGcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImVuYWJsZVRyYW5zaXRpb24iLCJjdXJzb3IiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYnVpbGRTbGlkZXJGcmFtZUl0ZW0iLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInNsaWRlVG9DdXJyZW50IiwiY3NzRmxvYXQiLCJpbm5lcldpZHRoIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJvbkNoYW5nZSIsIndlYmtpdFRyYW5zaXRpb24iLCJlYXNpbmciLCJ0cmFuc2l0aW9uIiwiYWJzIiwibXVsdGlwbGVEcmFnIiwiY2VpbCIsInRocmVzaG9sZCIsInByZXYiLCJuZXh0Iiwibm9kZU5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInVwZGF0ZUFmdGVyRHJhZyIsImNsZWFyRHJhZyIsInNwbGljZSIsImluc2VydCIsInJlbW92ZUF0dHJpYnV0ZSIsInRyYW5zZm9ybSIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwidGFyZ2V0ZWRDbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJpbmZvIiwibWVudUljb24iLCJtb2JpbWVudSIsInNpdGVib2R5IiwibWFpbm1lbnUiLCJ2ZXJ0aWNhbE1lbnUiLCJtZWRpYVF1ZXJ5IiwibWF0Y2hNZWRpYSIsImhhbmRsZVRhYmxldENoYW5nZSIsIm1hdGNoZXMiLCJhZGRMaXN0ZW5lciIsImNsaWNrZWRNZW51IiwiZWwiLCJzbGlkZXNob3dTZWxlY3RvciIsInByZXZpb3VzU2xpZGUiLCJuZXh0U2xpZGUiLCJzbGlkZXNob3ciLCJTaWVtYSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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Q0FBK0IsT0FBL0IsRUFBd0M7QUFBQSxXQUFNeU8sU0FBUyxDQUFDbEMsSUFBVixFQUFOO0FBQUEsR0FBeEM7QUFDSDs7QUFFRCxJQUFJaUMsU0FBSixFQUFlO0FBQ1hBLFdBQVMsQ0FBQ3hPLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DO0FBQUEsV0FBTXlPLFNBQVMsQ0FBQ2pDLElBQVYsRUFBTjtBQUFBLEdBQXBDO0FBQ0gsQyxDQUVELDJFOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBOztBQUNBO0NBRUEsNkIiLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohXHJcbiAqIEFjY29yZGlvbiB2Mi44LjBcclxuICogU2ltcGxlIGFjY29yZGlvbiBjcmVhdGVkIGluIHB1cmUgSmF2YXNjcmlwdC5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY2h1MmsvQWNjb3JkaW9uXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE3LTIwMTkgTWljaGHFgiBTdHJ1bXBmXHJcbiAqIFB1Ymxpc2hlZCB1bmRlciBNSVQgTGljZW5zZVxyXG4gKi9cclxuXCJ1c2Ugc3RyaWN0XCI7IWZ1bmN0aW9uKGkpe2Z1bmN0aW9uIHUobyxsKXt2YXIgYz10aGlzLHQ9e2luaXQ6ZnVuY3Rpb24oKXtpZihBcnJheS5pc0FycmF5KG8pKXJldHVybiBvLmxlbmd0aCYmby5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyB1KGUsbCl9KSwhMTt0aGlzLm9wdGlvbnM9aCh7ZHVyYXRpb246NjAwLGl0ZW1OdW1iZXI6MCxhcmlhOiEwLGNsb3NlT3RoZXJzOiEwLHNob3dJdGVtOiExLGVsZW1lbnRDbGFzczpcImFjXCIscXVlc3Rpb25DbGFzczpcImFjLXFcIixhbnN3ZXJDbGFzczpcImFjLWFcIix0YXJnZXRDbGFzczpcImFjLXRhcmdldFwiLG9uVG9nZ2xlOmZ1bmN0aW9uKCl7fX0sbCksdGhpcy5jb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvKSx0aGlzLmVsZW1lbnRzPXRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5vcHRpb25zLmVsZW1lbnRDbGFzcyk7dmFyIGU9dGhpcy5vcHRpb25zLHQ9ZS5hcmlhLG49ZS5zaG93SXRlbSxpPWUuaXRlbU51bWJlcjt0JiZ0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJsaXN0XCIpO2Zvcih2YXIgcz0wO3M8dGhpcy5lbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgcj10aGlzLmVsZW1lbnRzW3NdO3IuY2xhc3NMaXN0LmFkZChcImpzLWVuYWJsZWRcIiksdGhpcy5oaWRlRWxlbWVudChyKSx0aGlzLnNldFRyYW5zaXRpb24ociksdGhpcy5nZW5lcmF0ZUlEKHIpLHQmJnRoaXMuc2V0QVJJQShyKX1pZihuKXt2YXIgYT10aGlzLmVsZW1lbnRzWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiZpPHRoaXMuZWxlbWVudHMubGVuZ3RoJiYoYT10aGlzLmVsZW1lbnRzW2ldKSx0aGlzLnRvZ2dsZUVsZW1lbnQoYSwhMSl9Yy5hdHRhY2hFdmVudHMoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMsbj10LmR1cmF0aW9uLGk9dC5hbnN3ZXJDbGFzcyxzPWUucXVlcnlTZWxlY3RvcihcIi5cIitpKSxyPWEoXCJ0cmFuc2l0aW9uXCIpO3Muc3R5bGVbcl09bitcIm1zXCJ9LGdlbmVyYXRlSUQ6ZnVuY3Rpb24oZSl7ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWMtXCIuY29uY2F0KHMpKSxzKyt9LHNldEFSSUE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLG49dC5xdWVzdGlvbkNsYXNzLGk9dC5hbnN3ZXJDbGFzcyxzPWUucXVlcnlTZWxlY3RvcihcIi5cIituKSxyPWUucXVlcnlTZWxlY3RvcihcIi5cIitpKTtzLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYlwiKSxzLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLHIuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFicGFuZWxcIil9LHVwZGF0ZUFSSUE6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLm9wdGlvbnMucXVlc3Rpb25DbGFzcztlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrbikuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLHQpfSxjYWxsU3BlY2lmaWNFbGVtZW50OmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnRhcmdldCxuPXRoaXMub3B0aW9ucyxpPW4ucXVlc3Rpb25DbGFzcyxzPW4udGFyZ2V0Q2xhc3Mscj1uLmNsb3NlT3RoZXJzLGE9MDthPHRoaXMuZWxlbWVudHMubGVuZ3RoO2ErKylpZih0aGlzLmVsZW1lbnRzW2FdLmNvbnRhaW5zKHQpKXsodC5jbGFzc05hbWUubWF0Y2goaSl8fHQuY2xhc3NOYW1lLm1hdGNoKHMpKSYmKGUucHJldmVudERlZmF1bHQoKSxyJiZ0aGlzLmNsb3NlQWxsRWxlbWVudHMoYSksdGhpcy50b2dnbGVFbGVtZW50KHRoaXMuZWxlbWVudHNbYV0pKTticmVha319LGhpZGVFbGVtZW50OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucy5hbnN3ZXJDbGFzcztlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdCkuc3R5bGUuaGVpZ2h0PTB9LHRvZ2dsZUVsZW1lbnQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPSEoMTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT10KXx8dCxzPXRoaXMub3B0aW9ucyxyPXMuYW5zd2VyQ2xhc3MsYT1zLmFyaWEsbz1zLm9uVG9nZ2xlLGw9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK3IpLGM9bC5zY3JvbGxIZWlnaHQ7ZS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpLGl8fChsLnN0eWxlLmhlaWdodD1cImF1dG9cIiksMDxwYXJzZUludChsLnN0eWxlLmhlaWdodCk/KG49ITEscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7bC5zdHlsZS5oZWlnaHQ9MH0pKToobj0hMCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsLnN0eWxlLmhlaWdodD1jK1wicHhcIn0pKSxhJiZ0aGlzLnVwZGF0ZUFSSUEoZSxuKSxpJiZvKGUsdGhpcy5lbGVtZW50cyl9LGNsb3NlQWxsRWxlbWVudHM6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMub3B0aW9ucy5hcmlhLG49dGhpcy5lbGVtZW50cy5sZW5ndGgsaT0wO2k8bjtpKyspaWYoaSE9ZSl7dmFyIHM9dGhpcy5lbGVtZW50c1tpXTtzLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSYmcy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpLHQmJnRoaXMudXBkYXRlQVJJQShzLCExKSx0aGlzLmhpZGVFbGVtZW50KHMpfX0scmVzaXplSGFuZGxlcjpmdW5jdGlvbigpe2Zvcih2YXIgZSx0LG49dGhpcy5vcHRpb25zLGk9bi5lbGVtZW50Q2xhc3Mscz1uLmFuc3dlckNsYXNzLHI9dGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5cIitpK1wiLmlzLWFjdGl2ZVwiKSxhPTA7YTxyLmxlbmd0aDthKyspdD1yW2FdLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrcykscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5zdHlsZS5oZWlnaHQ9XCJhdXRvXCIsZT10Lm9mZnNldEhlaWdodCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnN0eWxlLmhlaWdodD1lK1wicHhcIn0pfSl9LGNsaWNrSGFuZGxlcjpmdW5jdGlvbihlKXt0aGlzLmNhbGxTcGVjaWZpY0VsZW1lbnQoZSl9LGtleWRvd25IYW5kbGVyOmZ1bmN0aW9uKGUpezEzPT09ZS5rZXlDb2RlJiZ0aGlzLmNhbGxTcGVjaWZpY0VsZW1lbnQoZSl9fTt0aGlzLmF0dGFjaEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXQ7ZS5jbGlja0hhbmRsZXI9ZS5jbGlja0hhbmRsZXIuYmluZChlKSxlLmtleWRvd25IYW5kbGVyPWUua2V5ZG93bkhhbmRsZXIuYmluZChlKSxlLnJlc2l6ZUhhbmRsZXI9ZS5yZXNpemVIYW5kbGVyLmJpbmQoZSksZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZS5rZXlkb3duSGFuZGxlciksaS5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5yZXNpemVIYW5kbGVyKX0sdGhpcy5kZXRhY2hFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10O2UuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUuY2xpY2tIYW5kbGVyKSxlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUua2V5ZG93bkhhbmRsZXIpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGUucmVzaXplSGFuZGxlcil9O3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVbZV0/ZTooZT1uKGUpLGU9XCJ3ZWJraXRcIi5jb25jYXQoZSkpfSxuPWZ1bmN0aW9uKGUpe3JldHVybiBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9LGg9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl07cmV0dXJuIGV9O2kucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxpLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7aS5zZXRUaW1lb3V0KGUsMWUzLzYwKX0sdC5pbml0KCl9dmFyIHM9MDtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZ2b2lkIDAhPT1tb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz11OmkuQWNjb3JkaW9uPXV9KHdpbmRvdyk7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciBNaWNyb01vZGFsID0gZnVuY3Rpb24gKCkge1xuXG4gIHZhciBGT0NVU0FCTEVfRUxFTUVOVFMgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJywgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKSddO1xuXG4gIHZhciBNb2RhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9kYWwoX3JlZikge1xuICAgICAgdmFyIHRhcmdldE1vZGFsID0gX3JlZi50YXJnZXRNb2RhbCxcbiAgICAgICAgICBfcmVmJHRyaWdnZXJzID0gX3JlZi50cmlnZ2VycyxcbiAgICAgICAgICB0cmlnZ2VycyA9IF9yZWYkdHJpZ2dlcnMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiR0cmlnZ2VycyxcbiAgICAgICAgICBfcmVmJG9uU2hvdyA9IF9yZWYub25TaG93LFxuICAgICAgICAgIG9uU2hvdyA9IF9yZWYkb25TaG93ID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9yZWYkb25TaG93LFxuICAgICAgICAgIF9yZWYkb25DbG9zZSA9IF9yZWYub25DbG9zZSxcbiAgICAgICAgICBvbkNsb3NlID0gX3JlZiRvbkNsb3NlID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9yZWYkb25DbG9zZSxcbiAgICAgICAgICBfcmVmJG9wZW5UcmlnZ2VyID0gX3JlZi5vcGVuVHJpZ2dlcixcbiAgICAgICAgICBvcGVuVHJpZ2dlciA9IF9yZWYkb3BlblRyaWdnZXIgPT09IHZvaWQgMCA/ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcicgOiBfcmVmJG9wZW5UcmlnZ2VyLFxuICAgICAgICAgIF9yZWYkY2xvc2VUcmlnZ2VyID0gX3JlZi5jbG9zZVRyaWdnZXIsXG4gICAgICAgICAgY2xvc2VUcmlnZ2VyID0gX3JlZiRjbG9zZVRyaWdnZXIgPT09IHZvaWQgMCA/ICdkYXRhLW1pY3JvbW9kYWwtY2xvc2UnIDogX3JlZiRjbG9zZVRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRvcGVuQ2xhc3MgPSBfcmVmLm9wZW5DbGFzcyxcbiAgICAgICAgICBvcGVuQ2xhc3MgPSBfcmVmJG9wZW5DbGFzcyA9PT0gdm9pZCAwID8gJ2lzLW9wZW4nIDogX3JlZiRvcGVuQ2xhc3MsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlU2Nyb2xsID0gX3JlZi5kaXNhYmxlU2Nyb2xsLFxuICAgICAgICAgIGRpc2FibGVTY3JvbGwgPSBfcmVmJGRpc2FibGVTY3JvbGwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkaXNhYmxlU2Nyb2xsLFxuICAgICAgICAgIF9yZWYkZGlzYWJsZUZvY3VzID0gX3JlZi5kaXNhYmxlRm9jdXMsXG4gICAgICAgICAgZGlzYWJsZUZvY3VzID0gX3JlZiRkaXNhYmxlRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkaXNhYmxlRm9jdXMsXG4gICAgICAgICAgX3JlZiRhd2FpdENsb3NlQW5pbWF0ID0gX3JlZi5hd2FpdENsb3NlQW5pbWF0aW9uLFxuICAgICAgICAgIGF3YWl0Q2xvc2VBbmltYXRpb24gPSBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhd2FpdENsb3NlQW5pbWF0LFxuICAgICAgICAgIF9yZWYkYXdhaXRPcGVuQW5pbWF0aSA9IF9yZWYuYXdhaXRPcGVuQW5pbWF0aW9uLFxuICAgICAgICAgIGF3YWl0T3BlbkFuaW1hdGlvbiA9IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0T3BlbkFuaW1hdGksXG4gICAgICAgICAgX3JlZiRkZWJ1Z01vZGUgPSBfcmVmLmRlYnVnTW9kZSxcbiAgICAgICAgICBkZWJ1Z01vZGUgPSBfcmVmJGRlYnVnTW9kZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRlYnVnTW9kZTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgICAgLy8gU2F2ZSBhIHJlZmVyZW5jZSBvZiB0aGUgbW9kYWxcbiAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRNb2RhbCk7IC8vIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHBhc3NlZCBjb25maWdcblxuICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgIGRlYnVnTW9kZTogZGVidWdNb2RlLFxuICAgICAgICBkaXNhYmxlU2Nyb2xsOiBkaXNhYmxlU2Nyb2xsLFxuICAgICAgICBvcGVuVHJpZ2dlcjogb3BlblRyaWdnZXIsXG4gICAgICAgIGNsb3NlVHJpZ2dlcjogY2xvc2VUcmlnZ2VyLFxuICAgICAgICBvcGVuQ2xhc3M6IG9wZW5DbGFzcyxcbiAgICAgICAgb25TaG93OiBvblNob3csXG4gICAgICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgICAgIGF3YWl0Q2xvc2VBbmltYXRpb246IGF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgIGF3YWl0T3BlbkFuaW1hdGlvbjogYXdhaXRPcGVuQW5pbWF0aW9uLFxuICAgICAgICBkaXNhYmxlRm9jdXM6IGRpc2FibGVGb2N1c1xuICAgICAgfTsgLy8gUmVnaXN0ZXIgY2xpY2sgZXZlbnRzIG9ubHkgaWYgcHJlIGJpbmRpbmcgZXZlbnRMaXN0ZW5lcnNcblxuICAgICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA+IDApIHRoaXMucmVnaXN0ZXJUcmlnZ2Vycy5hcHBseSh0aGlzLCBfdG9Db25zdW1hYmxlQXJyYXkodHJpZ2dlcnMpKTsgLy8gcHJlIGJpbmQgZnVuY3Rpb25zIGZvciBldmVudCBsaXN0ZW5lcnNcblxuICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLm9uS2V5ZG93biA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvb3BzIHRocm91Z2ggYWxsIG9wZW5UcmlnZ2VycyBhbmQgYmluZHMgY2xpY2sgZXZlbnRcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgW0FycmF5IG9mIG5vZGUgZWxlbWVudHNdXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgICAga2V5OiBcInJlZ2lzdGVyVHJpZ2dlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclRyaWdnZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmlnZ2VycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICB0cmlnZ2Vyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJzLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNob3dNb2RhbChldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzaG93TW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW91cignZGlzYWJsZScpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0T3BlbkFuaW1hdGlvbikge1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIF90aGlzMi5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIF90aGlzMi5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcub25TaG93KHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZU1vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB2YXIgbW9kYWwgPSB0aGlzLm1vZGFsO1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdlbmFibGUnKTtcblxuICAgICAgICBpZiAodGhpcy5hY3RpdmVFbGVtZW50ICYmIHRoaXMuYWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcub25DbG9zZSh0aGlzLm1vZGFsLCB0aGlzLmFjdGl2ZUVsZW1lbnQsIGV2ZW50KTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRDbG9zZUFuaW1hdGlvbikge1xuICAgICAgICAgIHZhciBvcGVuQ2xhc3MgPSB0aGlzLmNvbmZpZy5vcGVuQ2xhc3M7IC8vIDwtIG9sZCBzY2hvb2wgZnR3XG5cbiAgICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKG9wZW5DbGFzcyk7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZU1vZGFsQnlJZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWxCeUlkKHRhcmdldE1vZGFsKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRNb2RhbCk7XG4gICAgICAgIGlmICh0aGlzLm1vZGFsKSB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2Nyb2xsQmVoYXZpb3VyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsQmVoYXZpb3VyKHRvZ2dsZSkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVTY3JvbGwpIHJldHVybjtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAgICAgc3dpdGNoICh0b2dnbGUpIHtcbiAgICAgICAgICBjYXNlICdlbmFibGUnOlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LnN0eWxlLCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2Rpc2FibGUnOlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LnN0eWxlLCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZGRFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVtb3ZlRXZlbnRMaXN0ZW5lcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaGFzQXR0cmlidXRlKHRoaXMuY29uZmlnLmNsb3NlVHJpZ2dlcikpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uS2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5ZG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHRoaXMuY2xvc2VNb2RhbChldmVudCk7IC8vIGVzY1xuXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5KSB0aGlzLnJldGFpbkZvY3VzKGV2ZW50KTsgLy8gdGFiXG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEZvY3VzYWJsZU5vZGVzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvckFsbChGT0NVU0FCTEVfRUxFTUVOVFMpO1xuICAgICAgICByZXR1cm4gQXJyYXkuYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkobm9kZXMpKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVHJpZXMgdG8gc2V0IGZvY3VzIG9uIGEgbm9kZSB3aGljaCBpcyBub3QgYSBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKiBpZiBubyBvdGhlciBub2RlcyBleGlzdCB0aGVuIGZvY3VzZXMgb24gZmlyc3QgY2xvc2UgdHJpZ2dlclxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0Rm9jdXNUb0ZpcnN0Tm9kZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZvY3VzVG9GaXJzdE5vZGUoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kaXNhYmxlRm9jdXMpIHJldHVybjtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpOyAvLyBubyBmb2N1c2FibGUgbm9kZXNcblxuICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47IC8vIHJlbW92ZSBub2RlcyBvbiB3aG9zZSBjbGljaywgdGhlIG1vZGFsIGNsb3Nlc1xuICAgICAgICAvLyBjb3VsZCBub3QgdGhpbmsgb2YgYSBiZXR0ZXIgbmFtZSA6KFxuXG4gICAgICAgIHZhciBub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZShfdGhpczMuY29uZmlnLmNsb3NlVHJpZ2dlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cy5sZW5ndGggPiAwKSBub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzWzBdLmZvY3VzKCk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA9PT0gMCkgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmV0YWluRm9jdXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXRhaW5Gb2N1cyhldmVudCkge1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbHRlcnMgbm9kZXMgd2hpY2ggYXJlIGhpZGRlbiB0byBwcmV2ZW50XG4gICAgICAgICAqIGZvY3VzIGxlYWsgb3V0c2lkZSBtb2RhbFxuICAgICAgICAgKi9cblxuICAgICAgICBmb2N1c2FibGVOb2RlcyA9IGZvY3VzYWJsZU5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiBub2RlLm9mZnNldFBhcmVudCAhPT0gbnVsbDtcbiAgICAgICAgfSk7IC8vIGlmIGRpc2FibGVGb2N1cyBpcyB0cnVlXG5cbiAgICAgICAgaWYgKCF0aGlzLm1vZGFsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZm9jdXNlZEl0ZW1JbmRleCA9IGZvY3VzYWJsZU5vZGVzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSAmJiBmb2N1c2FibGVOb2Rlcy5sZW5ndGggPiAwICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IGZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNb2RhbDtcbiAgfSgpO1xuICAvKipcbiAgICogTW9kYWwgcHJvdG90eXBlIGVuZHMuXG4gICAqIEhlcmUgb24gY29kZSBpcyByZXNwb25zaWJsZSBmb3IgZGV0ZWN0aW5nIGFuZFxuICAgKiBhdXRvIGJpbmRpbmcgZXZlbnQgaGFuZGxlcnMgb24gbW9kYWwgdHJpZ2dlcnNcbiAgICovXG4gIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9wZW5lZCBtb2RhbFxuXG5cbiAgdmFyIGFjdGl2ZU1vZGFsID0gbnVsbDtcbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhbiBhc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIGl0J3NcbiAgICogcmVzcGVjdGl2ZSB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgICAgIEFuIGFycmF5IG9mIGFsbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRyaWdnZXJBdHRyIFRoZSBkYXRhLWF0dHJpYnV0ZSB3aGljaCB0cmlnZ2VycyB0aGUgbW9kdWxlXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cblxuICB2YXIgZ2VuZXJhdGVUcmlnZ2VyTWFwID0gZnVuY3Rpb24gZ2VuZXJhdGVUcmlnZ2VyTWFwKHRyaWdnZXJzLCB0cmlnZ2VyQXR0cikge1xuICAgIHZhciB0cmlnZ2VyTWFwID0gW107XG4gICAgdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgdmFyIHRhcmdldE1vZGFsID0gdHJpZ2dlci5hdHRyaWJ1dGVzW3RyaWdnZXJBdHRyXS52YWx1ZTtcbiAgICAgIGlmICh0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXSA9PT0gdW5kZWZpbmVkKSB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXSA9IFtdO1xuICAgICAgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0ucHVzaCh0cmlnZ2VyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJpZ2dlck1hcDtcbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB3aGV0aGVyIGEgbW9kYWwgb2YgdGhlIGdpdmVuIGlkIGV4aXN0c1xuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge251bWJlcn0gaWQgIFRoZSBpZCBvZiB0aGUgbW9kYWxcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVNb2RhbFByZXNlbmNlID0gZnVuY3Rpb24gdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKSB7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IFxcdTI3NTdTZWVtcyBsaWtlIHlvdSBoYXZlIG1pc3NlZCAlYydcIi5jb25jYXQoaWQsIFwiJ1wiKSwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ0lEIHNvbWV3aGVyZSBpbiB5b3VyIGNvZGUuIFJlZmVyIGV4YW1wbGUgYmVsb3cgdG8gcmVzb2x2ZSBpdC4nKTtcbiAgICAgIGNvbnNvbGUud2FybihcIiVjRXhhbXBsZTpcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbFxcXCIgaWQ9XFxcIlwiLmNvbmNhdChpZCwgXCJcXFwiPjwvZGl2PlwiKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIGlmIHRoZXJlIGFyZSBtb2RhbCB0cmlnZ2VycyBwcmVzZW50XG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzIEFuIGFycmF5IG9mIGRhdGEtdHJpZ2dlcnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSh0cmlnZ2Vycykge1xuICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1BsZWFzZSBzcGVjaWZ5IGF0IGxlYXN0IG9uZSAlYydtaWNyb21vZGFsLXRyaWdnZXInXCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdkYXRhIGF0dHJpYnV0ZS4nKTtcbiAgICAgIGNvbnNvbGUud2FybihcIiVjRXhhbXBsZTpcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgXCI8YSBocmVmPVxcXCIjXFxcIiBkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcj1cXFwibXktbW9kYWxcXFwiPjwvYT5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQ2hlY2tzIGlmIHRyaWdnZXJzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG1vZGFsc1xuICAgKiBhcmUgcHJlc2VudCBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgIEFycmF5IG9mIERPTSBub2RlcyB3aGljaCBoYXZlIGRhdGEtdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJNYXAgQXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCB0aGVpciB0cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZUFyZ3MgPSBmdW5jdGlvbiB2YWxpZGF0ZUFyZ3ModHJpZ2dlcnMsIHRyaWdnZXJNYXApIHtcbiAgICB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSh0cmlnZ2Vycyk7XG4gICAgaWYgKCF0cmlnZ2VyTWFwKSByZXR1cm4gdHJ1ZTtcblxuICAgIGZvciAodmFyIGlkIGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhbGlkYXRlTW9kYWxQcmVzZW5jZShpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIC8qKlxuICAgKiBCaW5kcyBjbGljayBoYW5kbGVycyB0byBhbGwgbW9kYWwgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG5cblxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQoY29uZmlnKSB7XG4gICAgLy8gQ3JlYXRlIGFuIGNvbmZpZyBvYmplY3Qgd2l0aCBkZWZhdWx0IG9wZW5UcmlnZ2VyXG4gICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICBvcGVuVHJpZ2dlcjogJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJ1xuICAgIH0sIGNvbmZpZyk7IC8vIENvbGxlY3RzIGFsbCB0aGUgbm9kZXMgd2l0aCB0aGUgdHJpZ2dlclxuXG4gICAgdmFyIHRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIuY29uY2F0KG9wdGlvbnMub3BlblRyaWdnZXIsIFwiXVwiKSkpOyAvLyBNYWtlcyBhIG1hcHBpbmdzIG9mIG1vZGFscyB3aXRoIHRoZWlyIHRyaWdnZXIgbm9kZXNcblxuXG4gICAgdmFyIHRyaWdnZXJNYXAgPSBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIG9wdGlvbnMub3BlblRyaWdnZXIpOyAvLyBDaGVja3MgaWYgbW9kYWxzIGFuZCB0cmlnZ2VycyBleGlzdCBpbiBkb21cblxuICAgIGlmIChvcHRpb25zLmRlYnVnTW9kZSA9PT0gdHJ1ZSAmJiB2YWxpZGF0ZUFyZ3ModHJpZ2dlcnMsIHRyaWdnZXJNYXApID09PSBmYWxzZSkgcmV0dXJuOyAvLyBGb3IgZXZlcnkgdGFyZ2V0IG1vZGFsIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2VcblxuICAgIGZvciAodmFyIGtleSBpbiB0cmlnZ2VyTWFwKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0cmlnZ2VyTWFwW2tleV07XG4gICAgICBvcHRpb25zLnRhcmdldE1vZGFsID0ga2V5O1xuICAgICAgb3B0aW9ucy50cmlnZ2VycyA9IF90b0NvbnN1bWFibGVBcnJheSh2YWx1ZSk7XG4gICAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBTaG93cyBhIHBhcnRpY3VsYXIgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBkaXNwbGF5XVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIHBhc3NdXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG5cbiAgdmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KHRhcmdldE1vZGFsLCBjb25maWcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGNvbmZpZyB8fCB7fTtcbiAgICBvcHRpb25zLnRhcmdldE1vZGFsID0gdGFyZ2V0TW9kYWw7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlTW9kYWxQcmVzZW5jZSh0YXJnZXRNb2RhbCkgPT09IGZhbHNlKSByZXR1cm47IC8vIGNsZWFyIGV2ZW50cyBpbiBjYXNlIHByZXZpb3VzIG1vZGFsIHdhc24ndCBjbG9zZVxuXG4gICAgaWYgKGFjdGl2ZU1vZGFsKSBhY3RpdmVNb2RhbC5yZW1vdmVFdmVudExpc3RlbmVycygpOyAvLyBzdG9yZXMgcmVmZXJlbmNlIHRvIGFjdGl2ZSBtb2RhbFxuXG4gICAgYWN0aXZlTW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cbiAgICBhY3RpdmVNb2RhbC5zaG93TW9kYWwoKTtcbiAgfTtcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgYWN0aXZlIG1vZGFsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0TW9kYWwgW1RoZSBpZCBvZiB0aGUgbW9kYWwgdG8gY2xvc2VdXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UodGFyZ2V0TW9kYWwpIHtcbiAgICB0YXJnZXRNb2RhbCA/IGFjdGl2ZU1vZGFsLmNsb3NlTW9kYWxCeUlkKHRhcmdldE1vZGFsKSA6IGFjdGl2ZU1vZGFsLmNsb3NlTW9kYWwoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gICAgc2hvdzogc2hvdyxcbiAgICBjbG9zZTogY2xvc2VcbiAgfTtcbn0oKTtcbndpbmRvdy5NaWNyb01vZGFsID0gTWljcm9Nb2RhbDtcblxuZXhwb3J0IGRlZmF1bHQgTWljcm9Nb2RhbDtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiU2llbWFcIixbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNpZW1hPXQoKTplLlNpZW1hPXQoKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYoaVtyXSlyZXR1cm4gaVtyXS5leHBvcnRzO3ZhciBuPWlbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubD0hMCxuLmV4cG9ydHN9dmFyIGk9e307cmV0dXJuIHQubT1lLHQuYz1pLHQuZD1mdW5jdGlvbihlLGkscil7dC5vKGUsaSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpyfSl9LHQubj1mdW5jdGlvbihlKXt2YXIgaT1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gdC5kKGksXCJhXCIsaSksaX0sdC5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSx0LnA9XCJcIix0KHQucz0wKX0oW2Z1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgcj10W2ldO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsaSxyKXtyZXR1cm4gaSYmZSh0LnByb3RvdHlwZSxpKSxyJiZlKHQsciksdH19KCksbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIGk9dGhpcztpZihyKHRoaXMsZSksdGhpcy5jb25maWc9ZS5tZXJnZVNldHRpbmdzKHQpLHRoaXMuc2VsZWN0b3I9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuY29uZmlnLnNlbGVjdG9yP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWcuc2VsZWN0b3IpOnRoaXMuY29uZmlnLnNlbGVjdG9yLG51bGw9PT10aGlzLnNlbGVjdG9yKXRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3cm9uZyB3aXRoIHlvdXIgc2VsZWN0b3Ig8J+YrVwiKTt0aGlzLnJlc29sdmVTbGlkZXNOdW1iZXIoKSx0aGlzLnNlbGVjdG9yV2lkdGg9dGhpcy5zZWxlY3Rvci5vZmZzZXRXaWR0aCx0aGlzLmlubmVyRWxlbWVudHM9W10uc2xpY2UuY2FsbCh0aGlzLnNlbGVjdG9yLmNoaWxkcmVuKSx0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY29uZmlnLnN0YXJ0SW5kZXgldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1heCgwLE1hdGgubWluKHRoaXMuY29uZmlnLnN0YXJ0SW5kZXgsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpKSx0aGlzLnRyYW5zZm9ybVByb3BlcnR5PWUud2Via2l0T3JOb3QoKSxbXCJyZXNpemVIYW5kbGVyXCIsXCJ0b3VjaHN0YXJ0SGFuZGxlclwiLFwidG91Y2hlbmRIYW5kbGVyXCIsXCJ0b3VjaG1vdmVIYW5kbGVyXCIsXCJtb3VzZWRvd25IYW5kbGVyXCIsXCJtb3VzZXVwSGFuZGxlclwiLFwibW91c2VsZWF2ZUhhbmRsZXJcIixcIm1vdXNlbW92ZUhhbmRsZXJcIixcImNsaWNrSGFuZGxlclwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lbZV09aVtlXS5iaW5kKGkpfSksdGhpcy5pbml0KCl9cmV0dXJuIHMoZSxbe2tleTpcImF0dGFjaEV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZUhhbmRsZXIpLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazohMX0sdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcikpfX0se2tleTpcImRldGFjaEV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnRvdWNoc3RhcnRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMudG91Y2hlbmRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvdWNobW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMubW91c2Vkb3duSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW91c2V1cEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlbGVhdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdXNlbW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGlja0hhbmRsZXIpfX0se2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuYXR0YWNoRXZlbnRzKCksdGhpcy5zZWxlY3Rvci5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLHRoaXMuc2VsZWN0b3Iuc3R5bGUuZGlyZWN0aW9uPXRoaXMuY29uZmlnLnJ0bD9cInJ0bFwiOlwibHRyXCIsdGhpcy5idWlsZFNsaWRlckZyYW1lKCksdGhpcy5jb25maWcub25Jbml0LmNhbGwodGhpcyl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSx0PXRoaXMuY29uZmlnLmxvb3A/dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsyKnRoaXMucGVyUGFnZTp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuc2xpZGVyRnJhbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndpZHRoPWUqdCtcInB4XCIsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIik7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2lmKHRoaXMuY29uZmlnLmxvb3ApZm9yKHZhciByPXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlO3I8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtyKyspe3ZhciBuPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW3JdLmNsb25lTm9kZSghMCkpO2kuYXBwZW5kQ2hpbGQobil9Zm9yKHZhciBzPTA7czx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3MrKyl7dmFyIGw9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbc10pO2kuYXBwZW5kQ2hpbGQobCl9aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIG89MDtvPHRoaXMucGVyUGFnZTtvKyspe3ZhciBhPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW29dLmNsb25lTm9kZSghMCkpO2kuYXBwZW5kQ2hpbGQoYSl9dGhpcy5zbGlkZXJGcmFtZS5hcHBlbmRDaGlsZChpKSx0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQodGhpcy5zbGlkZXJGcmFtZSksdGhpcy5zbGlkZVRvQ3VycmVudCgpfX0se2tleTpcImJ1aWxkU2xpZGVyRnJhbWVJdGVtXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5zdHlsZS5jc3NGbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUuZmxvYXQ9dGhpcy5jb25maWcucnRsP1wicmlnaHRcIjpcImxlZnRcIix0LnN0eWxlLndpZHRoPSh0aGlzLmNvbmZpZy5sb29wPzEwMC8odGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsyKnRoaXMucGVyUGFnZSk6MTAwL3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgpK1wiJVwiLHQuYXBwZW5kQ2hpbGQoZSksdH19LHtrZXk6XCJyZXNvbHZlU2xpZGVzTnVtYmVyXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZihcIm51bWJlclwiPT10eXBlb2YgdGhpcy5jb25maWcucGVyUGFnZSl0aGlzLnBlclBhZ2U9dGhpcy5jb25maWcucGVyUGFnZTtlbHNlIGlmKFwib2JqZWN0XCI9PT1uKHRoaXMuY29uZmlnLnBlclBhZ2UpKXt0aGlzLnBlclBhZ2U9MTtmb3IodmFyIGUgaW4gdGhpcy5jb25maWcucGVyUGFnZSl3aW5kb3cuaW5uZXJXaWR0aD49ZSYmKHRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlW2VdKX19fSx7a2V5OlwicHJldlwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZS1lPDApe3RoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTt2YXIgcj10aGlzLmN1cnJlbnRTbGlkZSt0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLG49dGhpcy5wZXJQYWdlLHM9cituLGw9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpzKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxvPXRoaXMuY29uZmlnLmRyYWdnYWJsZT90aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYOjA7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyhsK28pK1wicHgsIDAsIDApXCIsdGhpcy5jdXJyZW50U2xpZGU9ci1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jdXJyZW50U2xpZGUtZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPU1hdGgubWF4KHRoaXMuY3VycmVudFNsaWRlLWUsMCk7aSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCh0aGlzLmNvbmZpZy5sb29wKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcIm5leHRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7aWYodGhpcy5jb25maWcubG9vcCl7aWYodGhpcy5jdXJyZW50U2xpZGUrZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlLXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZStlfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5taW4odGhpcy5jdXJyZW50U2xpZGUrZSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSk7aSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCh0aGlzLmNvbmZpZy5sb29wKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcImRpc2FibGVUcmFuc2l0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZ319LHtrZXk6XCJlbmFibGVUcmFuc2l0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImdvVG9cIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7dGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jb25maWcubG9vcD9lJXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg6TWF0aC5taW4oTWF0aC5tYXgoZSwwKSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksaSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCgpLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5Olwic2xpZGVUb0N1cnJlbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUscj0odGhpcy5jb25maWcucnRsPzE6LTEpKmkqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpO2U/cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5lbmFibGVUcmFuc2l0aW9uKCksdC5zbGlkZXJGcmFtZS5zdHlsZVt0LnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiK3IrXCJweCwgMCwgMClcIn0pfSk6dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiK3IrXCJweCwgMCwgMClcIn19LHtrZXk6XCJ1cGRhdGVBZnRlckRyYWdcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPSh0aGlzLmNvbmZpZy5ydGw/LTE6MSkqKHRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgpLHQ9TWF0aC5hYnMoZSksaT10aGlzLmNvbmZpZy5tdWx0aXBsZURyYWc/TWF0aC5jZWlsKHQvKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpKToxLHI9ZT4wJiZ0aGlzLmN1cnJlbnRTbGlkZS1pPDAsbj1lPDAmJnRoaXMuY3VycmVudFNsaWRlK2k+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7ZT4wJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2U/dGhpcy5wcmV2KGkpOmU8MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlJiZ0aGlzLm5leHQoaSksdGhpcy5zbGlkZVRvQ3VycmVudChyfHxuKX19LHtrZXk6XCJyZXNpemVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnJlc29sdmVTbGlkZXNOdW1iZXIoKSx0aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCYmKHRoaXMuY3VycmVudFNsaWRlPXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZT8wOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSx0aGlzLnNlbGVjdG9yV2lkdGg9dGhpcy5zZWxlY3Rvci5vZmZzZXRXaWR0aCx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKX19LHtrZXk6XCJjbGVhckRyYWdcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZHJhZz17c3RhcnRYOjAsZW5kWDowLHN0YXJ0WTowLGxldEl0R286bnVsbCxwcmV2ZW50Q2xpY2s6dGhpcy5kcmFnLnByZXZlbnRDbGlja319fSx7a2V5OlwidG91Y2hzdGFydEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITAsdGhpcy5kcmFnLnN0YXJ0WD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5kcmFnLnN0YXJ0WT1lLnRvdWNoZXNbMF0ucGFnZVkpfX0se2tleTpcInRvdWNoZW5kSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcInRvdWNobW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnN0b3BQcm9wYWdhdGlvbigpLG51bGw9PT10aGlzLmRyYWcubGV0SXRHbyYmKHRoaXMuZHJhZy5sZXRJdEdvPU1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFktZS50b3VjaGVzWzBdLnBhZ2VZKTxNYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRYLWUudG91Y2hlc1swXS5wYWdlWCkpLHRoaXMucG9pbnRlckRvd24mJnRoaXMuZHJhZy5sZXRJdEdvKXtlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLmVuZFg9ZS50b3VjaGVzWzBdLnBhZ2VYLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nO3ZhciB0PXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLGk9dCoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkscj10aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYLG49dGhpcy5jb25maWcucnRsP2krcjppLXI7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyh0aGlzLmNvbmZpZy5ydGw/MTotMSkqbitcInB4LCAwLCAwKVwifX19LHtrZXk6XCJtb3VzZWRvd25IYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUucGFnZVgpfX0se2tleTpcIm1vdXNldXBIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJtb3VzZW1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMucG9pbnRlckRvd24pe1wiQVwiPT09ZS50YXJnZXQubm9kZU5hbWUmJih0aGlzLmRyYWcucHJldmVudENsaWNrPSEwKSx0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiYmluZ1wiLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nO3ZhciB0PXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLGk9dCoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkscj10aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYLG49dGhpcy5jb25maWcucnRsP2krcjppLXI7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyh0aGlzLmNvbmZpZy5ydGw/MTotMSkqbitcInB4LCAwLCAwKVwifX19LHtrZXk6XCJtb3VzZWxlYXZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucG9pbnRlckRvd24mJih0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIsdGhpcy5kcmFnLmVuZFg9ZS5wYWdlWCx0aGlzLmRyYWcucHJldmVudENsaWNrPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKSl9fSx7a2V5OlwiY2xpY2tIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5kcmFnLnByZXZlbnRDbGljayYmZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITF9fSx7a2V5OlwicmVtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZihlPDB8fGU+PXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiSXRlbSB0byByZW1vdmUgZG9lc24ndCBleGlzdCDwn5itXCIpO3ZhciBpPWU8dGhpcy5jdXJyZW50U2xpZGUscj10aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2UtMT09PWU7KGl8fHIpJiZ0aGlzLmN1cnJlbnRTbGlkZS0tLHRoaXMuaW5uZXJFbGVtZW50cy5zcGxpY2UoZSwxKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiaW5zZXJ0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LGkpe2lmKHQ8MHx8dD50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzEpdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGluc2V0IGl0IGF0IHRoaXMgaW5kZXgg8J+YrVwiKTtpZigtMSE9PXRoaXMuaW5uZXJFbGVtZW50cy5pbmRleE9mKGUpKXRocm93IG5ldyBFcnJvcihcIlRoZSBzYW1lIGl0ZW0gaW4gYSBjYXJvdXNlbD8gUmVhbGx5PyBOb3BlIPCfmK1cIik7dmFyIHI9dDw9dGhpcy5jdXJyZW50U2xpZGU+MCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0aGlzLmN1cnJlbnRTbGlkZT1yP3RoaXMuY3VycmVudFNsaWRlKzE6dGhpcy5jdXJyZW50U2xpZGUsdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZSh0LDAsZSksdGhpcy5idWlsZFNsaWRlckZyYW1lKCksaSYmaS5jYWxsKHRoaXMpfX0se2tleTpcInByZXBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsMCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImFwcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzEpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLHQ9YXJndW1lbnRzWzFdO2lmKHRoaXMuZGV0YWNoRXZlbnRzKCksdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCJhdXRvXCIsZSl7Zm9yKHZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxyPTA7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKylpLmFwcGVuZENoaWxkKHRoaXMuaW5uZXJFbGVtZW50c1tyXSk7dGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIil9dCYmdC5jYWxsKHRoaXMpfX1dLFt7a2V5OlwibWVyZ2VTZXR0aW5nc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXtzZWxlY3RvcjpcIi5zaWVtYVwiLGR1cmF0aW9uOjIwMCxlYXNpbmc6XCJlYXNlLW91dFwiLHBlclBhZ2U6MSxzdGFydEluZGV4OjAsZHJhZ2dhYmxlOiEwLG11bHRpcGxlRHJhZzohMCx0aHJlc2hvbGQ6MjAsbG9vcDohMSxydGw6ITEsb25Jbml0OmZ1bmN0aW9uKCl7fSxvbkNoYW5nZTpmdW5jdGlvbigpe319LGk9ZTtmb3IodmFyIHIgaW4gaSl0W3JdPWlbcl07cmV0dXJuIHR9fSx7a2V5Olwid2Via2l0T3JOb3RcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtP1widHJhbnNmb3JtXCI6XCJXZWJraXRUcmFuc2Zvcm1cIn19XSksZX0oKTt0LmRlZmF1bHQ9bCxlLmV4cG9ydHM9dC5kZWZhdWx0fV0pfSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tICdhY2NvcmRpb24tanMnO1xuXG52YXIgdGFyZ2V0ZWRDbGFzcyAgICA9ICcuYWNjb3JkaW9uLWNvbnRhaW5lcic7XG52YXIgYWNjb3JkaW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0ZWRDbGFzcyk7XG5cbmlmIChhY2NvcmRpb25FbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICBuZXcgQWNjb3JkaW9uKHRhcmdldGVkQ2xhc3MpO1xufVxuIiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5cbk1pY3JvTW9kYWwuaW5pdCh7XG4gICAgb25TaG93OiBtb2RhbCA9PiBjb25zb2xlLmluZm8oYCR7bW9kYWwuaWR9IGlzIHNob3duYCksIC8vIFsxXVxuICAgIG9uQ2xvc2U6IG1vZGFsID0+IGNvbnNvbGUuaW5mbyhgJHttb2RhbC5pZH0gaXMgaGlkZGVuYCksIC8vIFsyXVxuICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1jdXN0b20tb3BlbicsIC8vIFszXVxuICAgIGNsb3NlVHJpZ2dlcjogJ2RhdGEtY3VzdG9tLWNsb3NlJywgLy8gWzRdXG4gICAgb3BlbkNsYXNzOiAnaXMtb3BlbicsIC8vIFs1XVxuICAgIGRpc2FibGVTY3JvbGw6IHRydWUsIC8vIFs2XVxuICAgIGRpc2FibGVGb2N1czogZmFsc2UsIC8vIFs3XVxuICAgIGF3YWl0T3BlbkFuaW1hdGlvbjogZmFsc2UsIC8vIFs4XVxuICAgIGF3YWl0Q2xvc2VBbmltYXRpb246IGZhbHNlLCAvLyBbOV1cbiAgICBkZWJ1Z01vZGU6IHRydWUgLy8gWzEwXVxufSk7IiwiY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IG1vYmltZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNpdmUtbWVudScpO1xuY29uc3Qgc2l0ZWJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmxldCBtYWlubWVudSAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2l2ZS1tZW51Jyk7XG5sZXQgY2xhc3NOYW1lICAgID0gJ21vYmltZW51JztcbmxldCB2ZXJ0aWNhbE1lbnUgPSAndmVydGljYWxfX25hdic7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpO1xuXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXRDaGFuZ2UoZSkge1xuXHQvLyBDaGVjayBpZiB0aGUgbWVkaWEgcXVlcnkgaXMgdHJ1ZVxuXHRpZiAoZS5tYXRjaGVzKSB7XG4gIFxuXHRcdC8vIElmIHRoZSBtZWRpYXF1ZXJ5IGlzIGxhcmdlciB0aGFuIDEwMjRweFxuXHRcdGlmIChtYWlubWVudS5jbGFzc0xpc3QpIHtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUodmVydGljYWxNZW51KTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5hZGQoJ21haW5tZW51Jyk7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsX19uYXYnKTtcblx0XHR9XG4gIFxuXHR9ZWxzZXtcblx0XHRcblx0XHQvLyBJZiB0aGUgbWVkaWFxdWVyeSBpcyBzbWFsbGVyIHRoYW4gMTAyNHB4XG5cdFx0aWYgKG1haW5tZW51LmNsYXNzTGlzdCkge1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbm1lbnUnKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWxfX25hdicpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZCh2ZXJ0aWNhbE1lbnUpO1xuXHRcdH1lbHNle1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZSArICcgJyArIHZlcnRpY2FsTWVudTtcblx0XHR9XG5cdCAgXG5cdH1cbiAgXG59XG5cbi8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyXG5tZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKGhhbmRsZVRhYmxldENoYW5nZSk7XG5cbi8vIEluaXRpYWwgY2hlY2tcbmhhbmRsZVRhYmxldENoYW5nZShtZWRpYVF1ZXJ5KTtcblxubWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcblx0bW9iaW1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG5cdG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZScpO1xuXHRzaXRlYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbWVudS1pcy1vcGVuJyk7XG59KTtcblxuLy8gQ3JlYXRlIHN1YiBtZW51c1xuZnVuY3Rpb24gY2xpY2tlZE1lbnUoKXtcbiAgICBpZih0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbWVudSAuc3ViLW1lbnUnKSl7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdzdWItbWVudS1hY3RpdmUnKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJykuZm9yRWFjaChmdW5jdGlvbihlbCl7XG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tlZE1lbnUpO1xufSk7IiwiaW1wb3J0IFNpZW1hIGZyb20gJ3NpZW1hJztcblxudmFyIHNsaWRlc2hvd1NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlc2hvdycpO1xudmFyIHByZXZpb3VzU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtcHJldicpO1xudmFyIG5leHRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1uZXh0Jyk7XG52YXIgc2xpZGVzaG93ID0gXCJcIjtcblxuaWYgKHNsaWRlc2hvd1NlbGVjdG9yKSB7XG4gICAgc2xpZGVzaG93ID0gbmV3IFNpZW1hKHtcbiAgICAgICAgc2VsZWN0b3I6ICcuc2xpZGVzaG93JyxcbiAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxuICAgICAgICBwZXJQYWdlOiAxLFxuICAgICAgICBzdGFydEluZGV4OiAwLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcbiAgICAgICAgdGhyZXNob2xkOiAyMCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIH0pO1xufVxuXG5pZiAocHJldmlvdXNTbGlkZSkge1xuICAgIHByZXZpb3VzU2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzbGlkZXNob3cucHJldigpKTtcbn1cblxuaWYgKG5leHRTbGlkZSkge1xuICAgIG5leHRTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNsaWRlc2hvdy5uZXh0KCkpO1xufVxuXG4vL2h0dHBzOi8vY29kZXBlbi5pby9jb2xsZWN0aW9uL0FkcGtrZC8/Y3Vyc29yPVpEMHhKbTg5TUNad1BURW1kajB4TURJeU5EVTAiLCIvL2ltcG9ydCAnLi9mdW5jdGlvbi5ib2R5Y2xhc3Nlcy5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb24uc2xpZGVzaG93LmpzJzsgXG5pbXBvcnQgJy4vZnVuY3Rpb24ub2ZmY2FudmFzLmpzJztcbi8vaW1wb3J0ICcuL2Z1bmN0aW9uLmxhenlsb2FkLmpzJzsgXG5pbXBvcnQgJy4vZnVuY3Rpb24ubW9kYWwuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uLmFjY29yZGlvbi5qcyc7XG4vL2ltcG9ydCAnLi9mdW5jdGlvbi5sYXguanMnOyJdLCJzb3VyY2VSb290IjoiIn0=