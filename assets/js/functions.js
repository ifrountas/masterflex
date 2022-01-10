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

 //import './function.scrollmenu.js'; 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi1qcy9kaXN0L2FjY29yZGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pY3JvbW9kYWwvZGlzdC9taWNyb21vZGFsLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaWVtYS9kaXN0L3NpZW1hLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24uYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnVuY3Rpb24ubW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5vZmZjYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5zbGlkZXNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOlsiaSIsInUiLCJvIiwibCIsImMiLCJ0IiwiaW5pdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm1hcCIsImUiLCJvcHRpb25zIiwiaCIsImR1cmF0aW9uIiwiaXRlbU51bWJlciIsImFyaWEiLCJjbG9zZU90aGVycyIsInNob3dJdGVtIiwiZWxlbWVudENsYXNzIiwicXVlc3Rpb25DbGFzcyIsImFuc3dlckNsYXNzIiwidGFyZ2V0Q2xhc3MiLCJvblRvZ2dsZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm4iLCJzZXRBdHRyaWJ1dGUiLCJzIiwiciIsImNsYXNzTGlzdCIsImFkZCIsImhpZGVFbGVtZW50Iiwic2V0VHJhbnNpdGlvbiIsImdlbmVyYXRlSUQiLCJzZXRBUklBIiwiYSIsInRvZ2dsZUVsZW1lbnQiLCJhdHRhY2hFdmVudHMiLCJzdHlsZSIsImNvbmNhdCIsInVwZGF0ZUFSSUEiLCJjYWxsU3BlY2lmaWNFbGVtZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbGFzc05hbWUiLCJtYXRjaCIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VBbGxFbGVtZW50cyIsImhlaWdodCIsImFyZ3VtZW50cyIsInNjcm9sbEhlaWdodCIsInRvZ2dsZSIsInBhcnNlSW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlIiwicmVzaXplSGFuZGxlciIsIm9mZnNldEhlaWdodCIsImNsaWNrSGFuZGxlciIsImtleWRvd25IYW5kbGVyIiwia2V5Q29kZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50RWxlbWVudCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwibW9kdWxlIiwiZXhwb3J0cyIsIkFjY29yZGlvbiIsIndpbmRvdyIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIm1pbkxlbiIsInRvU3RyaW5nIiwiY2FsbCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiTWljcm9Nb2RhbCIsIkZPQ1VTQUJMRV9FTEVNRU5UUyIsIk1vZGFsIiwiX3JlZiIsInRhcmdldE1vZGFsIiwiX3JlZiR0cmlnZ2VycyIsInRyaWdnZXJzIiwiX3JlZiRvblNob3ciLCJvblNob3ciLCJfcmVmJG9uQ2xvc2UiLCJvbkNsb3NlIiwiX3JlZiRvcGVuVHJpZ2dlciIsIm9wZW5UcmlnZ2VyIiwiX3JlZiRjbG9zZVRyaWdnZXIiLCJjbG9zZVRyaWdnZXIiLCJfcmVmJG9wZW5DbGFzcyIsIm9wZW5DbGFzcyIsIl9yZWYkZGlzYWJsZVNjcm9sbCIsImRpc2FibGVTY3JvbGwiLCJfcmVmJGRpc2FibGVGb2N1cyIsImRpc2FibGVGb2N1cyIsIl9yZWYkYXdhaXRDbG9zZUFuaW1hdCIsImF3YWl0Q2xvc2VBbmltYXRpb24iLCJfcmVmJGF3YWl0T3BlbkFuaW1hdGkiLCJhd2FpdE9wZW5BbmltYXRpb24iLCJfcmVmJGRlYnVnTW9kZSIsImRlYnVnTW9kZSIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJyZWdpc3RlclRyaWdnZXJzIiwiYXBwbHkiLCJvbkNsaWNrIiwib25LZXlkb3duIiwidmFsdWUiLCJfdGhpcyIsIl9sZW4iLCJfa2V5IiwiZmlsdGVyIiwiQm9vbGVhbiIsImZvckVhY2giLCJ0cmlnZ2VyIiwiZXZlbnQiLCJzaG93TW9kYWwiLCJfdGhpczIiLCJ1bmRlZmluZWQiLCJhY3RpdmVFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3VyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoYW5kbGVyIiwic2V0Rm9jdXNUb0ZpcnN0Tm9kZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImZvY3VzIiwiY2xvc2VNb2RhbEJ5SWQiLCJib2R5IiwiYXNzaWduIiwib3ZlcmZsb3ciLCJoYXNBdHRyaWJ1dGUiLCJyZXRhaW5Gb2N1cyIsImdldEZvY3VzYWJsZU5vZGVzIiwibm9kZXMiLCJfdGhpczMiLCJmb2N1c2FibGVOb2RlcyIsIm5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMiLCJub2RlIiwib2Zmc2V0UGFyZW50IiwiZm9jdXNlZEl0ZW1JbmRleCIsImluZGV4T2YiLCJzaGlmdEtleSIsImFjdGl2ZU1vZGFsIiwiZ2VuZXJhdGVUcmlnZ2VyTWFwIiwidHJpZ2dlckF0dHIiLCJ0cmlnZ2VyTWFwIiwiYXR0cmlidXRlcyIsInB1c2giLCJ2YWxpZGF0ZU1vZGFsUHJlc2VuY2UiLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwidmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UiLCJ2YWxpZGF0ZUFyZ3MiLCJzaG93IiwiY2xvc2UiLCJkZWZpbmUiLCJzZWxmIiwibSIsImQiLCJnZXQiLCJfX2VzTW9kdWxlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwibWVyZ2VTZXR0aW5ncyIsInNlbGVjdG9yIiwiRXJyb3IiLCJyZXNvbHZlU2xpZGVzTnVtYmVyIiwic2VsZWN0b3JXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW5uZXJFbGVtZW50cyIsImNoaWxkcmVuIiwiY3VycmVudFNsaWRlIiwibG9vcCIsInN0YXJ0SW5kZXgiLCJNYXRoIiwibWF4IiwibWluIiwicGVyUGFnZSIsInRyYW5zZm9ybVByb3BlcnR5Iiwid2Via2l0T3JOb3QiLCJkcmFnZ2FibGUiLCJwb2ludGVyRG93biIsImRyYWciLCJzdGFydFgiLCJlbmRYIiwic3RhcnRZIiwibGV0SXRHbyIsInByZXZlbnRDbGljayIsInRvdWNoc3RhcnRIYW5kbGVyIiwidG91Y2hlbmRIYW5kbGVyIiwidG91Y2htb3ZlSGFuZGxlciIsIm1vdXNlZG93bkhhbmRsZXIiLCJtb3VzZXVwSGFuZGxlciIsIm1vdXNlbGVhdmVIYW5kbGVyIiwibW91c2Vtb3ZlSGFuZGxlciIsImRpcmVjdGlvbiIsInJ0bCIsImJ1aWxkU2xpZGVyRnJhbWUiLCJvbkluaXQiLCJzbGlkZXJGcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImVuYWJsZVRyYW5zaXRpb24iLCJjdXJzb3IiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYnVpbGRTbGlkZXJGcmFtZUl0ZW0iLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInNsaWRlVG9DdXJyZW50IiwiY3NzRmxvYXQiLCJpbm5lcldpZHRoIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJvbkNoYW5nZSIsIndlYmtpdFRyYW5zaXRpb24iLCJlYXNpbmciLCJ0cmFuc2l0aW9uIiwiYWJzIiwibXVsdGlwbGVEcmFnIiwiY2VpbCIsInRocmVzaG9sZCIsInByZXYiLCJuZXh0Iiwibm9kZU5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInVwZGF0ZUFmdGVyRHJhZyIsImNsZWFyRHJhZyIsInNwbGljZSIsImluc2VydCIsInJlbW92ZUF0dHJpYnV0ZSIsInRyYW5zZm9ybSIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwidGFyZ2V0ZWRDbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJpbmZvIiwibWVudUljb24iLCJtb2JpbWVudSIsInNpdGVib2R5IiwibWFpbm1lbnUiLCJ2ZXJ0aWNhbE1lbnUiLCJtZWRpYVF1ZXJ5IiwibWF0Y2hNZWRpYSIsImhhbmRsZVRhYmxldENoYW5nZSIsIm1hdGNoZXMiLCJhZGRMaXN0ZW5lciIsImNsaWNrZWRNZW51IiwiZWwiLCJzbGlkZXNob3dTZWxlY3RvciIsInByZXZpb3VzU2xpZGUiLCJuZXh0U2xpZGUiLCJzbGlkZXNob3ciLCJTaWVtYSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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Q0FBK0IsT0FBL0IsRUFBd0M7QUFBQSxXQUFNeU8sU0FBUyxDQUFDbEMsSUFBVixFQUFOO0FBQUEsR0FBeEM7QUFDSDs7QUFFRCxJQUFJaUMsU0FBSixFQUFlO0FBQ1hBLFdBQVMsQ0FBQ3hPLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DO0FBQUEsV0FBTXlPLFNBQVMsQ0FBQ2pDLElBQVYsRUFBTjtBQUFBLEdBQXBDO0FBQ0gsQyxDQUVELDJFOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7Q0FFQSw2QiIsImZpbGUiOiJmdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiFcclxuICogQWNjb3JkaW9uIHYyLjguMFxyXG4gKiBTaW1wbGUgYWNjb3JkaW9uIGNyZWF0ZWQgaW4gcHVyZSBKYXZhc2NyaXB0LlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaHUyay9BY2NvcmRpb25cclxuICpcclxuICogQ29weXJpZ2h0IDIwMTctMjAxOSBNaWNoYcWCIFN0cnVtcGZcclxuICogUHVibGlzaGVkIHVuZGVyIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cInVzZSBzdHJpY3RcIjshZnVuY3Rpb24oaSl7ZnVuY3Rpb24gdShvLGwpe3ZhciBjPXRoaXMsdD17aW5pdDpmdW5jdGlvbigpe2lmKEFycmF5LmlzQXJyYXkobykpcmV0dXJuIG8ubGVuZ3RoJiZvLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gbmV3IHUoZSxsKX0pLCExO3RoaXMub3B0aW9ucz1oKHtkdXJhdGlvbjo2MDAsaXRlbU51bWJlcjowLGFyaWE6ITAsY2xvc2VPdGhlcnM6ITAsc2hvd0l0ZW06ITEsZWxlbWVudENsYXNzOlwiYWNcIixxdWVzdGlvbkNsYXNzOlwiYWMtcVwiLGFuc3dlckNsYXNzOlwiYWMtYVwiLHRhcmdldENsYXNzOlwiYWMtdGFyZ2V0XCIsb25Ub2dnbGU6ZnVuY3Rpb24oKXt9fSxsKSx0aGlzLmNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8pLHRoaXMuZWxlbWVudHM9dGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm9wdGlvbnMuZWxlbWVudENsYXNzKTt2YXIgZT10aGlzLm9wdGlvbnMsdD1lLmFyaWEsbj1lLnNob3dJdGVtLGk9ZS5pdGVtTnVtYmVyO3QmJnRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYmxpc3RcIik7Zm9yKHZhciBzPTA7czx0aGlzLmVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciByPXRoaXMuZWxlbWVudHNbc107ci5jbGFzc0xpc3QuYWRkKFwianMtZW5hYmxlZFwiKSx0aGlzLmhpZGVFbGVtZW50KHIpLHRoaXMuc2V0VHJhbnNpdGlvbihyKSx0aGlzLmdlbmVyYXRlSUQociksdCYmdGhpcy5zZXRBUklBKHIpfWlmKG4pe3ZhciBhPXRoaXMuZWxlbWVudHNbMF07XCJudW1iZXJcIj09dHlwZW9mIGkmJmk8dGhpcy5lbGVtZW50cy5sZW5ndGgmJihhPXRoaXMuZWxlbWVudHNbaV0pLHRoaXMudG9nZ2xlRWxlbWVudChhLCExKX1jLmF0dGFjaEV2ZW50cygpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9ucyxuPXQuZHVyYXRpb24saT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpLHI9YShcInRyYW5zaXRpb25cIik7cy5zdHlsZVtyXT1uK1wibXNcIn0sZ2VuZXJhdGVJRDpmdW5jdGlvbihlKXtlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhYy1cIi5jb25jYXQocykpLHMrK30sc2V0QVJJQTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMsbj10LnF1ZXN0aW9uQ2xhc3MsaT10LmFuc3dlckNsYXNzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK24pLHI9ZS5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpO3Muc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFiXCIpLHMuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJwYW5lbFwiKX0sdXBkYXRlQVJJQTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMub3B0aW9ucy5xdWVzdGlvbkNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIituKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsdCl9LGNhbGxTcGVjaWZpY0VsZW1lbnQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUudGFyZ2V0LG49dGhpcy5vcHRpb25zLGk9bi5xdWVzdGlvbkNsYXNzLHM9bi50YXJnZXRDbGFzcyxyPW4uY2xvc2VPdGhlcnMsYT0wO2E8dGhpcy5lbGVtZW50cy5sZW5ndGg7YSsrKWlmKHRoaXMuZWxlbWVudHNbYV0uY29udGFpbnModCkpeyh0LmNsYXNzTmFtZS5tYXRjaChpKXx8dC5jbGFzc05hbWUubWF0Y2gocykpJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHImJnRoaXMuY2xvc2VBbGxFbGVtZW50cyhhKSx0aGlzLnRvZ2dsZUVsZW1lbnQodGhpcy5lbGVtZW50c1thXSkpO2JyZWFrfX0saGlkZUVsZW1lbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLmFuc3dlckNsYXNzO2UucXVlcnlTZWxlY3RvcihcIi5cIit0KS5zdHlsZS5oZWlnaHQ9MH0sdG9nZ2xlRWxlbWVudDpmdW5jdGlvbihlLHQpe3ZhciBuLGk9ISgxPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PXQpfHx0LHM9dGhpcy5vcHRpb25zLHI9cy5hbnN3ZXJDbGFzcyxhPXMuYXJpYSxvPXMub25Ub2dnbGUsbD1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrciksYz1sLnNjcm9sbEhlaWdodDtlLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIiksaXx8KGwuc3R5bGUuaGVpZ2h0PVwiYXV0b1wiKSwwPHBhcnNlSW50KGwuc3R5bGUuaGVpZ2h0KT8obj0hMSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsLnN0eWxlLmhlaWdodD0wfSkpOihuPSEwLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2wuc3R5bGUuaGVpZ2h0PWMrXCJweFwifSkpLGEmJnRoaXMudXBkYXRlQVJJQShlLG4pLGkmJm8oZSx0aGlzLmVsZW1lbnRzKX0sY2xvc2VBbGxFbGVtZW50czpmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy5vcHRpb25zLmFyaWEsbj10aGlzLmVsZW1lbnRzLmxlbmd0aCxpPTA7aTxuO2krKylpZihpIT1lKXt2YXIgcz10aGlzLmVsZW1lbnRzW2ldO3MuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpJiZzLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIiksdCYmdGhpcy51cGRhdGVBUklBKHMsITEpLHRoaXMuaGlkZUVsZW1lbnQocyl9fSxyZXNpemVIYW5kbGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQsbj10aGlzLm9wdGlvbnMsaT1uLmVsZW1lbnRDbGFzcyxzPW4uYW5zd2VyQ2xhc3Mscj10aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2krXCIuaXMtYWN0aXZlXCIpLGE9MDthPHIubGVuZ3RoO2ErKyl0PXJbYV0ucXVlcnlTZWxlY3RvcihcIi5cIitzKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnN0eWxlLmhlaWdodD1cImF1dG9cIixlPXQub2Zmc2V0SGVpZ2h0LHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3Quc3R5bGUuaGVpZ2h0PWUrXCJweFwifSl9KX0sY2xpY2tIYW5kbGVyOmZ1bmN0aW9uKGUpe3RoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX0sa2V5ZG93bkhhbmRsZXI6ZnVuY3Rpb24oZSl7MTM9PT1lLmtleUNvZGUmJnRoaXMuY2FsbFNwZWNpZmljRWxlbWVudChlKX19O3RoaXMuYXR0YWNoRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dDtlLmNsaWNrSGFuZGxlcj1lLmNsaWNrSGFuZGxlci5iaW5kKGUpLGUua2V5ZG93bkhhbmRsZXI9ZS5rZXlkb3duSGFuZGxlci5iaW5kKGUpLGUucmVzaXplSGFuZGxlcj1lLnJlc2l6ZUhhbmRsZXIuYmluZChlKSxlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlLmNsaWNrSGFuZGxlciksZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixlLmtleWRvd25IYW5kbGVyKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixlLnJlc2l6ZUhhbmRsZXIpfSx0aGlzLmRldGFjaEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXQ7ZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZS5rZXlkb3duSGFuZGxlciksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZS5yZXNpemVIYW5kbGVyKX07dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVtlXT9lOihlPW4oZSksZT1cIndlYmtpdFwiLmNvbmNhdChlKSl9LG49ZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKX0saD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KWVbbl09dFtuXTtyZXR1cm4gZX07aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGkud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXtpLnNldFRpbWVvdXQoZSwxZTMvNjApfSx0LmluaXQoKX12YXIgcz0wO1widW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJnZvaWQgMCE9PW1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXU6aS5BY2NvcmRpb249dX0od2luZG93KTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIE1pY3JvTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIEZPQ1VTQUJMRV9FTEVNRU5UUyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ107XG5cbiAgdmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChfcmVmKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSBfcmVmLnRhcmdldE1vZGFsLFxuICAgICAgICAgIF9yZWYkdHJpZ2dlcnMgPSBfcmVmLnRyaWdnZXJzLFxuICAgICAgICAgIHRyaWdnZXJzID0gX3JlZiR0cmlnZ2VycyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHRyaWdnZXJzLFxuICAgICAgICAgIF9yZWYkb25TaG93ID0gX3JlZi5vblNob3csXG4gICAgICAgICAgb25TaG93ID0gX3JlZiRvblNob3cgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvblNob3csXG4gICAgICAgICAgX3JlZiRvbkNsb3NlID0gX3JlZi5vbkNsb3NlLFxuICAgICAgICAgIG9uQ2xvc2UgPSBfcmVmJG9uQ2xvc2UgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvbkNsb3NlLFxuICAgICAgICAgIF9yZWYkb3BlblRyaWdnZXIgPSBfcmVmLm9wZW5UcmlnZ2VyLFxuICAgICAgICAgIG9wZW5UcmlnZ2VyID0gX3JlZiRvcGVuVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJyA6IF9yZWYkb3BlblRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRjbG9zZVRyaWdnZXIgPSBfcmVmLmNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBjbG9zZVRyaWdnZXIgPSBfcmVmJGNsb3NlVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC1jbG9zZScgOiBfcmVmJGNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJG9wZW5DbGFzcyA9IF9yZWYub3BlbkNsYXNzLFxuICAgICAgICAgIG9wZW5DbGFzcyA9IF9yZWYkb3BlbkNsYXNzID09PSB2b2lkIDAgPyAnaXMtb3BlbicgOiBfcmVmJG9wZW5DbGFzcyxcbiAgICAgICAgICBfcmVmJGRpc2FibGVTY3JvbGwgPSBfcmVmLmRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgZGlzYWJsZVNjcm9sbCA9IF9yZWYkZGlzYWJsZVNjcm9sbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlRm9jdXMgPSBfcmVmLmRpc2FibGVGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlRm9jdXMgPSBfcmVmJGRpc2FibGVGb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVGb2N1cyxcbiAgICAgICAgICBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPSBfcmVmLmF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbiA9IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0Q2xvc2VBbmltYXQsXG4gICAgICAgICAgX3JlZiRhd2FpdE9wZW5BbmltYXRpID0gX3JlZi5hd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uID0gX3JlZiRhd2FpdE9wZW5BbmltYXRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSxcbiAgICAgICAgICBfcmVmJGRlYnVnTW9kZSA9IF9yZWYuZGVidWdNb2RlLFxuICAgICAgICAgIGRlYnVnTW9kZSA9IF9yZWYkZGVidWdNb2RlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVidWdNb2RlO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIG9mIHRoZSBtb2RhbFxuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTsgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcGFzc2VkIGNvbmZpZ1xuXG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgZGVidWdNb2RlOiBkZWJ1Z01vZGUsXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IGRpc2FibGVTY3JvbGwsXG4gICAgICAgIG9wZW5UcmlnZ2VyOiBvcGVuVHJpZ2dlcixcbiAgICAgICAgY2xvc2VUcmlnZ2VyOiBjbG9zZVRyaWdnZXIsXG4gICAgICAgIG9wZW5DbGFzczogb3BlbkNsYXNzLFxuICAgICAgICBvblNob3c6IG9uU2hvdyxcbiAgICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBhd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgIGRpc2FibGVGb2N1czogZGlzYWJsZUZvY3VzXG4gICAgICB9OyAvLyBSZWdpc3RlciBjbGljayBldmVudHMgb25seSBpZiBwcmUgYmluZGluZyBldmVudExpc3RlbmVyc1xuXG4gICAgICBpZiAodHJpZ2dlcnMubGVuZ3RoID4gMCkgdGhpcy5yZWdpc3RlclRyaWdnZXJzLmFwcGx5KHRoaXMsIF90b0NvbnN1bWFibGVBcnJheSh0cmlnZ2VycykpOyAvLyBwcmUgYmluZCBmdW5jdGlvbnMgZm9yIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMub25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9vcHMgdGhyb3VnaCBhbGwgb3BlblRyaWdnZXJzIGFuZCBiaW5kcyBjbGljayBldmVudFxuICAgICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBbQXJyYXkgb2Ygbm9kZSBlbGVtZW50c11cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAgICBrZXk6IFwicmVnaXN0ZXJUcmlnZ2Vyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVHJpZ2dlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyaWdnZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIHRyaWdnZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlcnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd01vZGFsKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNob3dNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdkaXNhYmxlJyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRPcGVuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgX3RoaXMyLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgX3RoaXMyLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vblNob3codGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHZhciBtb2RhbCA9IHRoaXMubW9kYWw7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2VuYWJsZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdENsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wZW5DbGFzcyA9IHRoaXMuY29uZmlnLm9wZW5DbGFzczsgLy8gPC0gb2xkIHNjaG9vbCBmdHdcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUob3BlbkNsYXNzKTtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxCeUlkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTtcbiAgICAgICAgaWYgKHRoaXMubW9kYWwpIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzY3JvbGxCZWhhdmlvdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxCZWhhdmlvdXIodG9nZ2xlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZVNjcm9sbCkgcmV0dXJuO1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgICAgICBzd2l0Y2ggKHRvZ2dsZSkge1xuICAgICAgICAgIGNhc2UgJ2VuYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZEV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5oYXNBdHRyaWJ1dGUodGhpcy5jb25maWcuY2xvc2VUcmlnZ2VyKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25LZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTsgLy8gZXNjXG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHRoaXMucmV0YWluRm9jdXMoZXZlbnQpOyAvLyB0YWJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Rm9jdXNhYmxlTm9kZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2FibGVOb2RlcygpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UUyk7XG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShub2RlcykpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUcmllcyB0byBzZXQgZm9jdXMgb24gYSBub2RlIHdoaWNoIGlzIG5vdCBhIGNsb3NlIHRyaWdnZXJcbiAgICAgICAqIGlmIG5vIG90aGVyIG5vZGVzIGV4aXN0IHRoZW4gZm9jdXNlcyBvbiBmaXJzdCBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRGb2N1c1RvRmlyc3ROb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRpc2FibGVGb2N1cykgcmV0dXJuO1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjsgLy8gcmVtb3ZlIG5vZGVzIG9uIHdob3NlIGNsaWNrLCB0aGUgbW9kYWwgY2xvc2VzXG4gICAgICAgIC8vIGNvdWxkIG5vdCB0aGluayBvZiBhIGJldHRlciBuYW1lIDooXG5cbiAgICAgICAgdmFyIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKF90aGlzMy5jb25maWcuY2xvc2VUcmlnZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA+IDApIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHNbMF0uZm9jdXMoKTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID09PSAwKSBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXRhaW5Gb2N1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldGFpbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlsdGVycyBub2RlcyB3aGljaCBhcmUgaGlkZGVuIHRvIHByZXZlbnRcbiAgICAgICAgICogZm9jdXMgbGVhayBvdXRzaWRlIG1vZGFsXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICAgICAgICB9KTsgLy8gaWYgZGlzYWJsZUZvY3VzIGlzIHRydWVcblxuICAgICAgICBpZiAoIXRoaXMubW9kYWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlTm9kZXMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1tmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA+IDAgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1vZGFsO1xuICB9KCk7XG4gIC8qKlxuICAgKiBNb2RhbCBwcm90b3R5cGUgZW5kcy5cbiAgICogSGVyZSBvbiBjb2RlIGlzIHJlc3BvbnNpYmxlIGZvciBkZXRlY3RpbmcgYW5kXG4gICAqIGF1dG8gYmluZGluZyBldmVudCBoYW5kbGVycyBvbiBtb2RhbCB0cmlnZ2Vyc1xuICAgKi9cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3BlbmVkIG1vZGFsXG5cblxuICB2YXIgYWN0aXZlTW9kYWwgPSBudWxsO1xuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgaXQnc1xuICAgKiByZXNwZWN0aXZlIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgICAgQW4gYXJyYXkgb2YgYWxsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdHJpZ2dlckF0dHIgVGhlIGRhdGEtYXR0cmlidXRlIHdoaWNoIHRyaWdnZXJzIHRoZSBtb2R1bGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuXG4gIHZhciBnZW5lcmF0ZVRyaWdnZXJNYXAgPSBmdW5jdGlvbiBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIHRyaWdnZXJBdHRyKSB7XG4gICAgdmFyIHRyaWdnZXJNYXAgPSBbXTtcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSB0cmlnZ2VyLmF0dHJpYnV0ZXNbdHJpZ2dlckF0dHJdLnZhbHVlO1xuICAgICAgaWYgKHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID09PSB1bmRlZmluZWQpIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID0gW107XG4gICAgICB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXS5wdXNoKHRyaWdnZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmlnZ2VyTWFwO1xuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIHdoZXRoZXIgYSBtb2RhbCBvZiB0aGUgZ2l2ZW4gaWQgZXhpc3RzXG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCAgVGhlIGlkIG9mIHRoZSBtb2RhbFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1NlZW1zIGxpa2UgeW91IGhhdmUgbWlzc2VkICVjJ1wiLmNvbmNhdChpZCwgXCInXCIpLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnSUQgc29tZXdoZXJlIGluIHlvdXIgY29kZS4gUmVmZXIgZXhhbXBsZSBiZWxvdyB0byByZXNvbHZlIGl0LicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIiBpZD1cXFwiXCIuY29uY2F0KGlkLCBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgYXJlIG1vZGFsIHRyaWdnZXJzIHByZXNlbnRcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgQW4gYXJyYXkgb2YgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKSB7XG4gICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3UGxlYXNlIHNwZWNpZnkgYXQgbGVhc3Qgb25lICVjJ21pY3JvbW9kYWwtdHJpZ2dlcidcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2RhdGEgYXR0cmlidXRlLicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtbWljcm9tb2RhbC10cmlnZ2VyPVxcXCJteS1tb2RhbFxcXCI+PC9hPlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHJpZ2dlcnMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgbW9kYWxzXG4gICAqIGFyZSBwcmVzZW50IGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgQXJyYXkgb2YgRE9NIG5vZGVzIHdoaWNoIGhhdmUgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlck1hcCBBc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIHRoZWlyIHRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlQXJncyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkge1xuICAgIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKTtcbiAgICBpZiAoIXRyaWdnZXJNYXApIHJldHVybiB0cnVlO1xuXG4gICAgZm9yICh2YXIgaWQgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgLyoqXG4gICAqIEJpbmRzIGNsaWNrIGhhbmRsZXJzIHRvIGFsbCBtb2RhbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cblxuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChjb25maWcpIHtcbiAgICAvLyBDcmVhdGUgYW4gY29uZmlnIG9iamVjdCB3aXRoIGRlZmF1bHQgb3BlblRyaWdnZXJcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInXG4gICAgfSwgY29uZmlnKTsgLy8gQ29sbGVjdHMgYWxsIHRoZSBub2RlcyB3aXRoIHRoZSB0cmlnZ2VyXG5cbiAgICB2YXIgdHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIi5jb25jYXQob3B0aW9ucy5vcGVuVHJpZ2dlciwgXCJdXCIpKSk7IC8vIE1ha2VzIGEgbWFwcGluZ3Mgb2YgbW9kYWxzIHdpdGggdGhlaXIgdHJpZ2dlciBub2Rlc1xuXG5cbiAgICB2YXIgdHJpZ2dlck1hcCA9IGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2Vycywgb3B0aW9ucy5vcGVuVHJpZ2dlcik7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkgPT09IGZhbHNlKSByZXR1cm47IC8vIEZvciBldmVyeSB0YXJnZXQgbW9kYWwgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuXG4gICAgZm9yICh2YXIga2V5IGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRyaWdnZXJNYXBba2V5XTtcbiAgICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSBrZXk7XG4gICAgICBvcHRpb25zLnRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlKTtcbiAgICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3dzIGEgcGFydGljdWxhciBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGRpc3BsYXldXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gcGFzc11cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3codGFyZ2V0TW9kYWwsIGNvbmZpZykge1xuICAgIHZhciBvcHRpb25zID0gY29uZmlnIHx8IHt9O1xuICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSB0YXJnZXRNb2RhbDsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVNb2RhbFByZXNlbmNlKHRhcmdldE1vZGFsKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gY2xlYXIgZXZlbnRzIGluIGNhc2UgcHJldmlvdXMgbW9kYWwgd2Fzbid0IGNsb3NlXG5cbiAgICBpZiAoYWN0aXZlTW9kYWwpIGFjdGl2ZU1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7IC8vIHN0b3JlcyByZWZlcmVuY2UgdG8gYWN0aXZlIG1vZGFsXG5cbiAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgIGFjdGl2ZU1vZGFsLnNob3dNb2RhbCgpO1xuICB9O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBhY3RpdmUgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBjbG9zZV1cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSh0YXJnZXRNb2RhbCkge1xuICAgIHRhcmdldE1vZGFsID8gYWN0aXZlTW9kYWwuY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIDogYWN0aXZlTW9kYWwuY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBzaG93OiBzaG93LFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufSgpO1xud2luZG93Lk1pY3JvTW9kYWwgPSBNaWNyb01vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBNaWNyb01vZGFsO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2FjY29yZGlvbi1qcyc7XG5cbnZhciB0YXJnZXRlZENsYXNzICAgID0gJy5hY2NvcmRpb24tY29udGFpbmVyJztcbnZhciBhY2NvcmRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRlZENsYXNzKTtcblxuaWYgKGFjY29yZGlvbkVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgIG5ldyBBY2NvcmRpb24odGFyZ2V0ZWRDbGFzcyk7XG59XG4iLCJpbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcblxuTWljcm9Nb2RhbC5pbml0KHtcbiAgICBvblNob3c6IG1vZGFsID0+IGNvbnNvbGUuaW5mbyhgJHttb2RhbC5pZH0gaXMgc2hvd25gKSwgLy8gWzFdXG4gICAgb25DbG9zZTogbW9kYWwgPT4gY29uc29sZS5pbmZvKGAke21vZGFsLmlkfSBpcyBoaWRkZW5gKSwgLy8gWzJdXG4gICAgb3BlblRyaWdnZXI6ICdkYXRhLWN1c3RvbS1vcGVuJywgLy8gWzNdXG4gICAgY2xvc2VUcmlnZ2VyOiAnZGF0YS1jdXN0b20tY2xvc2UnLCAvLyBbNF1cbiAgICBvcGVuQ2xhc3M6ICdpcy1vcGVuJywgLy8gWzVdXG4gICAgZGlzYWJsZVNjcm9sbDogdHJ1ZSwgLy8gWzZdXG4gICAgZGlzYWJsZUZvY3VzOiBmYWxzZSwgLy8gWzddXG4gICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBmYWxzZSwgLy8gWzhdXG4gICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogZmFsc2UsIC8vIFs5XVxuICAgIGRlYnVnTW9kZTogdHJ1ZSAvLyBbMTBdXG59KTsiLCJjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItbWVudScpO1xuY29uc3QgbW9iaW1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2l2ZS1tZW51Jyk7XG5jb25zdCBzaXRlYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxubGV0IG1haW5tZW51ICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zaXZlLW1lbnUnKTtcbmxldCBjbGFzc05hbWUgICAgPSAnbW9iaW1lbnUnO1xubGV0IHZlcnRpY2FsTWVudSA9ICd2ZXJ0aWNhbF9fbmF2JztcblxuY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJyk7XG5cbmZ1bmN0aW9uIGhhbmRsZVRhYmxldENoYW5nZShlKSB7XG5cdC8vIENoZWNrIGlmIHRoZSBtZWRpYSBxdWVyeSBpcyB0cnVlXG5cdGlmIChlLm1hdGNoZXMpIHtcbiAgXG5cdFx0Ly8gSWYgdGhlIG1lZGlhcXVlcnkgaXMgbGFyZ2VyIHRoYW4gMTAyNHB4XG5cdFx0aWYgKG1haW5tZW51LmNsYXNzTGlzdCkge1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSh2ZXJ0aWNhbE1lbnUpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbm1lbnUnKTtcblx0XHRcdG1haW5tZW51LmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWxfX25hdicpO1xuXHRcdH1cbiAgXG5cdH1lbHNle1xuXHRcdFxuXHRcdC8vIElmIHRoZSBtZWRpYXF1ZXJ5IGlzIHNtYWxsZXIgdGhhbiAxMDI0cHhcblx0XHRpZiAobWFpbm1lbnUuY2xhc3NMaXN0KSB7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWlubWVudScpO1xuXHRcdFx0bWFpbm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbF9fbmF2Jyk7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0XHRtYWlubWVudS5jbGFzc0xpc3QuYWRkKHZlcnRpY2FsTWVudSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRtYWlubWVudS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lICsgJyAnICsgdmVydGljYWxNZW51O1xuXHRcdH1cblx0ICBcblx0fVxuICBcbn1cblxuLy8gUmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJcbm1lZGlhUXVlcnkuYWRkTGlzdGVuZXIoaGFuZGxlVGFibGV0Q2hhbmdlKTtcblxuLy8gSW5pdGlhbCBjaGVja1xuaGFuZGxlVGFibGV0Q2hhbmdlKG1lZGlhUXVlcnkpO1xuXG5tZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuXHRtb2JpbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2UnKTtcblx0bWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG5cdHNpdGVib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vYmltZW51LWlzLW9wZW4nKTtcbn0pO1xuXG4vLyBDcmVhdGUgc3ViIG1lbnVzXG5mdW5jdGlvbiBjbGlja2VkTWVudSgpe1xuICAgIGlmKHRoaXMucXVlcnlTZWxlY3RvcignLm1vYmltZW51IC5zdWItbWVudScpKXtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3N1Yi1tZW51LWFjdGl2ZScpO1xuICAgIH1cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja2VkTWVudSk7XG59KTsiLCJpbXBvcnQgU2llbWEgZnJvbSAnc2llbWEnO1xuXG52YXIgc2xpZGVzaG93U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVzaG93Jyk7XG52YXIgcHJldmlvdXNTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1wcmV2Jyk7XG52YXIgbmV4dFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLW5leHQnKTtcbnZhciBzbGlkZXNob3cgPSBcIlwiO1xuXG5pZiAoc2xpZGVzaG93U2VsZWN0b3IpIHtcbiAgICBzbGlkZXNob3cgPSBuZXcgU2llbWEoe1xuICAgICAgICBzZWxlY3RvcjogJy5zbGlkZXNob3cnLFxuICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXG4gICAgICAgIHBlclBhZ2U6IDEsXG4gICAgICAgIHN0YXJ0SW5kZXg6IDAsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxuICAgICAgICB0aHJlc2hvbGQ6IDIwLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICBvbkluaXQ6ICgpID0+IHt9LFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgfSk7XG59XG5cbmlmIChwcmV2aW91c1NsaWRlKSB7XG4gICAgcHJldmlvdXNTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNsaWRlc2hvdy5wcmV2KCkpO1xufVxuXG5pZiAobmV4dFNsaWRlKSB7XG4gICAgbmV4dFNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2xpZGVzaG93Lm5leHQoKSk7XG59XG5cbi8vaHR0cHM6Ly9jb2RlcGVuLmlvL2NvbGxlY3Rpb24vQWRwa2tkLz9jdXJzb3I9WkQweEptODlNQ1p3UFRFbWRqMHhNREl5TkRVMCIsIi8vaW1wb3J0ICcuL2Z1bmN0aW9uLmJvZHljbGFzc2VzLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbi5zbGlkZXNob3cuanMnOyBcbmltcG9ydCAnLi9mdW5jdGlvbi5vZmZjYW52YXMuanMnO1xuLy9pbXBvcnQgJy4vZnVuY3Rpb24uc2Nyb2xsbWVudS5qcyc7IFxuLy9pbXBvcnQgJy4vZnVuY3Rpb24ubGF6eWxvYWQuanMnOyBcbmltcG9ydCAnLi9mdW5jdGlvbi5tb2RhbC5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb24uYWNjb3JkaW9uLmpzJztcbi8vaW1wb3J0ICcuL2Z1bmN0aW9uLmxheC5qcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==