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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/function.ie11.vars.js":
/*!*********************************************!*\
  !*** ./src/assets/js/function.ie11.vars.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ie11CustomProperties.js v3.0.6 | MIT License | https://git.io/fjXMN */
!function () {
  'use strict'; // check for support

  var testEl = document.createElement('i');
  testEl.style.setProperty('--x', 'y');
  if (testEl.style.getPropertyValue('--x') === 'y' || !testEl.msMatchesSelector) return;
  if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
  var listeners = [],
      root = document,
      Observer;

  function qsa(el, selector) {
    try {
      return el.querySelectorAll(selector);
    } catch (e) {
      // console.warn('the Selector '+selector+' can not be parsed');
      return [];
    }
  }

  function onElement(selector, callback) {
    var listener = {
      selector: selector,
      callback: callback,
      elements: new WeakMap()
    };
    var els = qsa(root, listener.selector),
        i = 0,
        el;

    while (el = els[i++]) {
      listener.elements.set(el, true);
      listener.callback.call(el, el);
    }

    listeners.push(listener);

    if (!Observer) {
      Observer = new MutationObserver(checkMutations);
      Observer.observe(root, {
        childList: true,
        subtree: true
      });
    }

    checkListener(listener);
  }

  ;

  function checkListener(listener, target) {
    var i = 0,
        el,
        els = [];

    try {
      target && target.matches(listener.selector) && els.push(target);
    } catch (e) {}

    if (loaded) {
      // ok? check inside node on innerHTML - only when loaded
      Array.prototype.push.apply(els, qsa(target || root, listener.selector));
    }

    while (el = els[i++]) {
      if (listener.elements.has(el)) continue;
      listener.elements.set(el, true);
      listener.callback.call(el, el);
    }
  }

  function checkListeners(inside) {
    var i = 0,
        listener;

    while (listener = listeners[i++]) {
      checkListener(listener, inside);
    }
  }

  function checkMutations(mutations) {
    var j = 0,
        i,
        mutation,
        nodes,
        target;

    while (mutation = mutations[j++]) {
      nodes = mutation.addedNodes, i = 0;

      while (target = nodes[i++]) {
        target.nodeType === 1 && checkListeners(target);
      }
    }
  }

  var loaded = false;
  document.addEventListener('DOMContentLoaded', function () {
    loaded = true;
  }); // svg polyfills

  function copyProperty(prop, from, to) {
    var desc = Object.getOwnPropertyDescriptor(from, prop);
    Object.defineProperty(to, prop, desc);
  }

  if (!('classList' in Element.prototype)) {
    copyProperty('classList', HTMLElement.prototype, Element.prototype);
  }

  if (!('innerHTML' in Element.prototype)) {
    copyProperty('innerHTML', HTMLElement.prototype, Element.prototype);
  }

  if (!('sheet' in SVGStyleElement.prototype)) {
    Object.defineProperty(SVGStyleElement.prototype, 'sheet', {
      get: function get() {
        var all = document.styleSheets,
            i = 0,
            sheet;

        while (sheet = all[i++]) {
          if (sheet.ownerNode === this) return sheet;
        }
      }
    });
  } // main logic
  // cached regexps, better performance


  var regFindSetters = /([\s{;])(--([A-Za-z0-9-_]*)\s*:([^;!}{]+)(!important)?)(?=\s*([;}]|$))/g;
  var regFindGetters = /([{;]\s*)([A-Za-z0-9-_]+\s*:[^;}{]*var\([^!;}{]+)(!important)?(?=\s*([;}$]|$))/g;
  var regRuleIEGetters = /-ieVar-([^:]+):/g;
  var regRuleIESetters = /-ie-([^};]+)/g; //const regHasVar = /var\(/;

  var regPseudos = /:(hover|active|focus|target|:before|:after|:first-letter|:first-line)/;
  onElement('link[rel="stylesheet"]', function (el) {
    fetchCss(el.href, function (css) {
      var newCss = rewriteCss(css);
      if (css === newCss) return;
      newCss = relToAbs(el.href, newCss);
      el.disabled = true;
      var style = document.createElement('style');
      if (el.media) style.setAttribute('media', el.media);
      el.parentNode.insertBefore(style, el);
      activateStyleElement(style, newCss);
    });
  });

  function foundStyle(el) {
    if (el.ieCP_polyfilled) return;
    if (el.ieCP_elementSheet) return;
    var css = el.innerHTML;
    var newCss = rewriteCss(css);
    if (css === newCss) return;
    activateStyleElement(el, newCss);
  }

  onElement('style', foundStyle); // immediate, to pass w3c-tests, bud its a bad idea
  // addEventListener('DOMNodeInserted',function(e){ e.target.tagName === 'STYLE' && foundStyle(e.target); });

  onElement('[ie-style]', function (el) {
    var newCss = rewriteCss('{' + el.getAttribute('ie-style')).substr(1);
    el.style.cssText += ';' + newCss;
    var found = parseRewrittenStyle(el.style);
    if (found.getters) addGetterElement(el, found.getters, '%styleAttr');
    if (found.setters) addSetterElement(el, found.setters);
  });

  function relToAbs(base, css) {
    return css.replace(/url\(([^)]+)\)/g, function ($0, $1) {
      $1 = $1.trim().replace(/(^['"]|['"]$)/g, '');
      if ($1.match(/^([a-z]+:|\/)/)) return $0;
      base = base.replace(/\?.*/, '');
      return 'url(' + base + './../' + $1 + ')';
    });
  } // ie has a bug, where unknown properties at pseudo-selectors are computed at the element
  // #el::after { -content:'x'; } => getComputedStyle(el)['-content'] == 'x'
  // should we add something like -ieVar-pseudo_after-content:'x'?


  function rewriteCss(css) {
    /* uncomment if spec finished and needed by someone
    css = css.replace(/@property ([^{]+){([^}]+)}/, function($0, prop, body){
    	prop = prop.trim();
    	const declaration = {name:prop};
    	body.split(';').forEach(function(pair){
    		const x = pair.split(':');
    		if (x[1]) declaration[ x[0].trim() ] = x[1];
    	});
    	declaration['inherits'] = declaration['inherits'].trim()==='true' ? true : false;
    	declaration['initialValue'] = declaration['initial-value'];
    	CSS.registerProperty(declaration)
    	return '/*\n @property ... removed \n*'+'/';
    });
    */
    return css.replace(regFindSetters, function ($0, $1, $2, $3, $4, important) {
      return $1 + '-ie-' + (important ? '❗' : '') + $3 + ':' + encodeValue($4);
    }).replace(regFindGetters, function ($0, $1, $2, important) {
      return $1 + '-ieVar-' + (important ? '❗' : '') + $2 + '; ' + $2; // keep the original, so chaining works "--x:var(--y)"
    });
  }

  function encodeValue(value) {
    return value;
    return value.replace(/ /g, '␣');
  }

  var keywords = {
    initial: 1,
    inherit: 1,
    revert: 1,
    unset: 1
  };

  function decodeValue(value) {
    return value;
    if (value === undefined) return;
    value = value.replace(/␣/g, ' ');
    var trimmed = value.trim();
    if (keywords[trimmed]) return trimmed;
    return value;
  } // beta


  var styles_of_getter_properties = {};

  function parseRewrittenStyle(style) {
    // less memory then parameter cssText?
    // beta
    style['z-index']; // ie11 can access unknown properties in stylesheets only if accessed a dashed known property

    var cssText = style.cssText;
    var matchesGetters = cssText.match(regRuleIEGetters),
        j,
        match;

    if (matchesGetters) {
      var getters = []; // eg. [border,color]

      for (j = 0; match = matchesGetters[j++];) {
        var propName = match.slice(7, -1);
        if (propName[0] === '❗') propName = propName.substr(1);
        getters.push(propName); // beta

        if (!styles_of_getter_properties[propName]) styles_of_getter_properties[propName] = [];
        styles_of_getter_properties[propName].push(style);
      }
    }

    var matchesSetters = cssText.match(regRuleIESetters);

    if (matchesSetters) {
      var setters = {}; // eg. [--color:#fff, --padding:10px];

      for (j = 0; match = matchesSetters[j++];) {
        var x = match.substr(4).split(':');
        var _propName = x[0];
        var propValue = x[1];
        if (_propName[0] === '❗') _propName = _propName.substr(1);
        setters[_propName] = propValue;
      }
    }

    return {
      getters: getters,
      setters: setters
    };
  }

  function activateStyleElement(style, css) {
    style.innerHTML = css;
    style.ieCP_polyfilled = true;
    var rules = style.sheet.rules,
        i = 0,
        rule; // cssRules = CSSRuleList, rules = MSCSSRuleList

    while (rule = rules[i++]) {
      var found = parseRewrittenStyle(rule.style);
      if (found.getters) addGettersSelector(rule.selectorText, found.getters);
      if (found.setters) addSettersSelector(rule.selectorText, found.setters); // mediaQueries: redraw the hole document
      // better add events for each element?

      var media = rule.parentRule && rule.parentRule.media && rule.parentRule.media.mediaText;

      if (media && (found.getters || found.setters)) {
        matchMedia(media).addListener(function () {
          drawTree(document.documentElement);
        });
      }
    } // beta


    redrawStyleSheets();
  }

  function addGettersSelector(selector, properties) {
    selectorAddPseudoListeners(selector);
    onElement(unPseudo(selector), function (el) {
      addGetterElement(el, properties, selector);
      drawElement(el);
    });
  }

  function addGetterElement(el, properties, selector) {
    var i = 0,
        prop,
        j;
    var selectors = selector.split(','); // split grouped selectors

    el.setAttribute('iecp-needed', true);
    if (!el.ieCPSelectors) el.ieCPSelectors = {};

    while (prop = properties[i++]) {
      for (j = 0; selector = selectors[j++];) {
        var parts = selector.trim().split('::');
        if (!el.ieCPSelectors[prop]) el.ieCPSelectors[prop] = [];
        el.ieCPSelectors[prop].push({
          selector: parts[0],
          pseudo: parts[1] ? '::' + parts[1] : ''
        });
      }
    }
  }

  function addSettersSelector(selector, propVals) {
    selectorAddPseudoListeners(selector);
    onElement(unPseudo(selector), function (el) {
      addSetterElement(el, propVals);
    });
  }

  function addSetterElement(el, propVals) {
    if (!el.ieCP_setters) el.ieCP_setters = {};

    for (var prop in propVals) {
      // eg. {foo:#fff, bar:baz}
      el.ieCP_setters['--' + prop] = 1;
    }

    drawTree(el);
  } //beta


  function redrawStyleSheets() {
    for (var prop in styles_of_getter_properties) {
      var styles = styles_of_getter_properties[prop];

      for (var i = 0, style; style = styles[i++];) {
        if (style.owningElement) continue;
        var value = style['-ieVar-' + prop];
        if (!value) continue;
        value = styleComputeValueWidthVars(getComputedStyle(document.documentElement), value);
        if (value === '') continue;

        try {
          style[prop] = value;
        } catch (e) {}
      }
    }
  }

  var pseudos = {
    hover: {
      on: 'mouseenter',
      off: 'mouseleave'
    },
    focus: {
      on: 'focusin',
      off: 'focusout'
    },
    active: {
      on: 'CSSActivate',
      off: 'CSSDeactivate'
    }
  };

  function selectorAddPseudoListeners(selector) {
    // ie11 has the strange behavoir, that groups of selectors are individual rules, but starting with the full selector:
    // td, th, button { color:red } results in this rules:
    // "td, th, button" | "th, th" | "th"
    selector = selector.split(',')[0];

    for (var pseudo in pseudos) {
      var parts = selector.split(':' + pseudo);

      if (parts.length > 1) {
        var ending;

        (function () {
          ending = parts[1].match(/^[^\s]*/); // ending elementpart of selector (used for not(:active))

          var sel = unPseudo(parts[0] + ending);
          var listeners = pseudos[pseudo];
          onElement(sel, function (el) {
            el.addEventListener(listeners.on, drawTreeEvent);
            el.addEventListener(listeners.off, drawTreeEvent);
          });
        })();
      }
    }
  }

  var CSSActive = null;
  document.addEventListener('mousedown', function (e) {
    setTimeout(function () {
      if (e.target === document.activeElement) {
        var evt = document.createEvent('Event');
        evt.initEvent('CSSActivate', true, true);
        CSSActive = e.target;
        CSSActive.dispatchEvent(evt);
      }
    });
  });
  document.addEventListener('mouseup', function () {
    if (CSSActive) {
      var evt = document.createEvent('Event');
      evt.initEvent('CSSDeactivate', true, true);
      CSSActive.dispatchEvent(evt);
      CSSActive = null;
    }
  });

  function unPseudo(selector) {
    return selector.replace(regPseudos, '').replace(':not()', '');
  }

  var uniqueCounter = 0;
  /* old *
  function _drawElement(el) {
  	if (!el.ieCP_unique) { // use el.uniqueNumber? but needs class for the css-selector => test performance
  		el.ieCP_unique = ++uniqueCounter;
  		el.classList.add('iecp-u' + el.ieCP_unique);
  	}
  	var style = getComputedStyle(el);
  	if (el.ieCP_sheet) while (el.ieCP_sheet.rules[0]) el.ieCP_sheet.deleteRule(0);
  	for (var prop in el.ieCPSelectors) {
  		var important = style['-ieVar-❗' + prop];
  		let valueWithVar = important || style['-ieVar-' + prop];
  		if (!valueWithVar) continue; // todo, what if '0'
  			var details = {};
  		var value = styleComputeValueWidthVars(style, valueWithVar, details);
  			if (important) value += ' !important';
  		for (var i=0, item; item=el.ieCPSelectors[prop][i++];) { // todo: split and use requestAnimationFrame?
  			if (item.selector === '%styleAttr') {
  				el.style[prop] = value;
  			} else {
  					// beta
  				if (!important && details.allByRoot !== false) continue; // dont have to draw root-properties
  					//let selector = item.selector.replace(/>? \.[^ ]+/, ' ', item.selector); // todo: try to equalize specificity
  				let selector = item.selector;
  				elementStyleSheet(el).insertRule(selector + '.iecp-u' + el.ieCP_unique + item.pseudo + ' {' + prop + ':' + value + '}', 0);
  			}
  		}
  	}
  }
  function elementStyleSheet(el){
  	if (!el.ieCP_sheet) {
  		const styleEl = document.createElement('style');
  		styleEl.ieCP_elementSheet = 1;
  		//el.appendChild(styleEl); // yes! self-closing tags can have style as children, but - if i set innerHTML, the stylesheet is lost
  		document.head.appendChild(styleEl);
  		el.ieCP_sheet = styleEl.sheet;
  	}
  	return el.ieCP_sheet;
  }
  	/* */

  function _drawElement(el) {
    if (!el.ieCP_unique) {
      // use el.uniqueNumber? but needs class for the css-selector => test performance
      el.ieCP_unique = ++uniqueCounter;
      el.classList.add('iecp-u' + el.ieCP_unique);
    }

    var style = getComputedStyle(el);
    var css = '';

    for (var prop in el.ieCPSelectors) {
      var important = style['-ieVar-❗' + prop];
      var valueWithVar = important || style['-ieVar-' + prop];
      if (!valueWithVar) continue; // todo, what if '0'

      var details = {};
      var value = styleComputeValueWidthVars(style, valueWithVar, details); //if (value==='initial') value = initials[prop];

      if (important) value += ' !important';

      for (var i = 0, item; item = el.ieCPSelectors[prop][i++];) {
        // todo: split and use requestAnimationFrame?
        if (item.selector === '%styleAttr') {
          el.style[prop] = value;
        } else {
          // beta
          if (!important && details.allByRoot !== false) continue; // dont have to draw root-properties
          //let selector = item.selector.replace(/>? \.[^ ]+/, ' ', item.selector); // todo: try to equalize specificity

          var selector = item.selector;
          css += selector + '.iecp-u' + el.ieCP_unique + item.pseudo + '{' + prop + ':' + value + '}\n';
        }
      }
    }

    elementSetCss(el, css);
  }

  function elementSetCss(el, css) {
    if (!el.ieCP_styleEl && css) {
      var styleEl = document.createElement('style');
      styleEl.ieCP_elementSheet = 1; //el.appendChild(styleEl); // yes! self-closing tags can have style as children, but - if i set innerHTML, the stylesheet is lost

      document.head.appendChild(styleEl);
      el.ieCP_styleEl = styleEl;
    }

    if (el.ieCP_styleEl) el.ieCP_styleEl.innerHTML = css;
  }
  /* */


  function drawTree(target) {
    if (!target) return;
    var els = target.querySelectorAll('[iecp-needed]');
    if (target.hasAttribute && target.hasAttribute('iecp-needed')) drawElement(target); // self

    for (var i = 0, el; el = els[i++];) {
      drawElement(el);
    } // tree

  } // draw queue


  var drawQueue = new Set();
  var collecting = false;
  var drawing = false;

  function drawElement(el) {
    drawQueue.add(el);
    if (collecting) return;
    collecting = true;
    requestAnimationFrame(function () {
      //setImmediate(function(){
      collecting = false;
      drawing = true;
      drawQueue.forEach(_drawElement);
      drawQueue.clear();
      setTimeout(function () {
        // mutationObserver will trigger delayed, requestAnimationFrame will miss some changes
        drawing = false;
      });
    });
  }

  function drawTreeEvent(e) {
    drawTree(e.target);
  }

  function findVars(str, cb) {
    // css value parser
    var level = 0,
        openedLevel = null,
        lastPoint = 0,
        newStr = '',
        i = 0,
        _char,
        insideCalc;

    while (_char = str[i++]) {
      if (_char === '(') {
        ++level;

        if (openedLevel === null && str[i - 4] + str[i - 3] + str[i - 2] === 'var') {
          openedLevel = level;
          newStr += str.substring(lastPoint, i - 4);
          lastPoint = i;
        }

        if (str[i - 5] + str[i - 4] + str[i - 3] + str[i - 2] === 'calc') {
          insideCalc = level;
        }
      }

      if (_char === ')' && openedLevel === level) {
        var variable = str.substring(lastPoint, i - 1).trim(),
            fallback = void 0;
        var x = variable.indexOf(',');

        if (x !== -1) {
          fallback = variable.slice(x + 1);
          variable = variable.slice(0, x);
        }

        newStr += cb(variable, fallback, insideCalc);
        lastPoint = i;
        openedLevel = null;
      }

      if (_char === ')') {
        --level;
        if (insideCalc === level) insideCalc = null;
      }
    }

    newStr += str.substring(lastPoint);
    return newStr;
  }

  function styleComputeValueWidthVars(style, valueWithVars, details) {
    return findVars(valueWithVars, function (variable, fallback, insideCalc) {
      var value = style.getPropertyValue(variable);
      if (insideCalc) value = value.replace(/^calc\(/, '('); // prevent nested calc

      if (details && style.lastPropertyServedBy !== document.documentElement) details.allByRoot = false;
      if (value === '' && fallback) value = styleComputeValueWidthVars(style, fallback, details);
      return value;
    });
  } // mutation listener


  var observer = new MutationObserver(function (mutations) {
    if (drawing) return;

    for (var i = 0, mutation; mutation = mutations[i++];) {
      if (mutation.attributeName === 'iecp-needed') continue; // why?
      // recheck all selectors if it targets new elements?

      drawTree(mutation.target);
    }
  });
  setTimeout(function () {
    observer.observe(document, {
      attributes: true,
      subtree: true
    });
  }); // :target listener

  var oldHash = location.hash;
  addEventListener('hashchange', function (e) {
    var newEl = document.getElementById(location.hash.substr(1));

    if (newEl) {
      var oldEl = document.getElementById(oldHash.substr(1));
      drawTree(newEl);
      drawTree(oldEl);
    } else {
      drawTree(document);
    }

    oldHash = location.hash;
  }); // add owningElement to Element.style

  var descriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'style');
  var styleGetter = descriptor.get;

  descriptor.get = function () {
    var style = styleGetter.call(this);
    style.owningElement = this;
    return style;
  };

  Object.defineProperty(HTMLElement.prototype, 'style', descriptor); // add computedFor to computed style-objects

  var originalGetComputed = getComputedStyle;

  window.getComputedStyle = function (el) {
    var style = originalGetComputed.apply(this, arguments);
    style.computedFor = el; //style.pseudoElt = pseudoElt; //not needed at the moment

    return style;
  }; // getPropertyValue / setProperty hooks


  var StyleProto = CSSStyleDeclaration.prototype;
  var oldGetP = StyleProto.getPropertyValue;

  StyleProto.getPropertyValue = function (property) {
    this.lastPropertyServedBy = false;
    property = property.trim();
    /* *
    if (this.owningElement) {
    	const ieProperty = '-ieVar-'+property;
    	const iePropertyImportant = '-ieVar-❗'+property;
    	let value = this[iePropertyImportant] || this[ieProperty];
    	if (value !== undefined) {
    		// todo, test if syntax valid
    		return value;
    	}
    }
    /* */

    if (property[0] !== '-' || property[1] !== '-') return oldGetP.apply(this, arguments);
    var undashed = property.substr(2);
    var ieProperty = '-ie-' + undashed;
    var iePropertyImportant = '-ie-❗' + undashed;
    var value = decodeValue(this[iePropertyImportant] || this[ieProperty]);

    if (this.computedFor) {
      // computedStyle
      if (value !== undefined && !inheritingKeywords[value]) {
        //if (regHasVar.test(value))  // todo: to i need this check?!!! i think its faster without
        value = styleComputeValueWidthVars(this, value);
        this.lastPropertyServedBy = this.computedFor;
      } else {
        // inherited
        if (inheritingKeywords[value] || !register[property] || register[property].inherits) {
          //let el = this.pseudoElt ? this.computedFor : this.computedFor.parentNode;
          var el = this.computedFor.parentNode;

          while (el.nodeType === 1) {
            // how slower would it be to getComputedStyle for every element, not just with defined ieCP_setters
            if (el.ieCP_setters && el.ieCP_setters[property]) {
              // i could make
              // value = el.nodeType ? getComputedStyle(this.computedFor.parentNode).getPropertyValue(property)
              // but i fear performance, stupid?
              var style = getComputedStyle(el);
              var tmpVal = decodeValue(style[iePropertyImportant] || style[ieProperty]);

              if (tmpVal !== undefined) {
                // calculated style from current element not from the element the value was inherited from! (style, value)
                //value = tmpVal; if (regHasVar.test(tmpVal))  // todo: to i need this check?!!! i think its faster without
                value = styleComputeValueWidthVars(this, tmpVal);
                this.lastPropertyServedBy = el;
                break;
              }
            }

            el = el.parentNode;
          }
        }
      }

      if (value === 'initial') return '';
    } //if ((value === undefined || value === 'initial') && register[property]) value = register[property].initialValue; // todo?


    if (value === undefined && register[property]) value = register[property].initialValue;
    if (value === undefined) return '';
    return value;
  };

  var inheritingKeywords = {
    inherit: 1,
    revert: 1,
    unset: 1
  };
  var oldSetP = StyleProto.setProperty;

  StyleProto.setProperty = function (property, value, prio) {
    if (property[0] !== '-' || property[1] !== '-') return oldSetP.apply(this, arguments);
    var el = this.owningElement;

    if (el) {
      if (!el.ieCP_setters) el.ieCP_setters = {};
      el.ieCP_setters[property] = 1;
    }

    property = '-ie-' + (prio === 'important' ? '❗' : '') + property.substr(2);
    this.cssText += '; ' + property + ':' + encodeValue(value) + ';'; //this[property] = value;

    el === document.documentElement && redrawStyleSheets();
    el && drawTree(el); // its delayed internal
  };
  /*
  var descriptor = Object.getOwnPropertyDescriptor(StyleProto, 'cssText');
  var cssTextGetter = descriptor.get;
  var cssTextSetter = descriptor.set;
  // descriptor.get = function () {
  // 	const style = styleGetter.call(this);
  // 	style.owningElement = this;
  // 	return style;
  // }
  descriptor.set = function (css) {
  	var el = this.owningElement;
  	if (el) {
  		css = rewriteCss('{'+css).substr(1);
  		cssTextSetter.call(this, css);
  		var found = parseRewrittenStyle(this);
  		if (found.getters) addGetterElement(el, found.getters, '%styleAttr');
  		if (found.setters) addSetterElement(el, found.setters);
  		return;
  	}
  	return cssTextSetter.call(this, css);
  }
  Object.defineProperty(StyleProto, 'cssText', descriptor);
  */


  if (!window.CSS) window.CSS = {};
  var register = {};

  CSS.registerProperty = function (options) {
    register[options.name] = options;
  }; // fix "initial" keyword with generated custom properties, this is not supported ad all by ie, should i make a separate "inherit"-polyfill?

  /*
  const computed = getComputedStyle(document.documentElement)
  const initials = {};
  for (let i in computed) {
  	initials[i.replace(/([A-Z])/, function(x){ return '-'+x.toLowerCase(x) })] = computed[i];
  }
  initials['display'] = 'inline';
  */
  // utils


  function fetchCss(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.overrideMimeType('text/css');

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        callback(request.responseText);
      }
    };

    request.send();
  }
}();

/***/ }),

/***/ 1:
/*!***************************************************!*\
  !*** multi ./src/assets/js/function.ie11.vars.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\myfirsttheme\wp-content\themes\myfirsttheme\src\assets\js\function.ie11.vars.js */"./src/assets/js/function.ie11.vars.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5pZTExLnZhcnMuanMiXSwibmFtZXMiOlsidGVzdEVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5VmFsdWUiLCJtc01hdGNoZXNTZWxlY3RvciIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJtYXRjaGVzIiwibGlzdGVuZXJzIiwicm9vdCIsIk9ic2VydmVyIiwicXNhIiwiZWwiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwib25FbGVtZW50IiwiY2FsbGJhY2siLCJsaXN0ZW5lciIsImVsZW1lbnRzIiwiV2Vha01hcCIsImVscyIsImkiLCJzZXQiLCJjYWxsIiwicHVzaCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJjaGVja011dGF0aW9ucyIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiY2hlY2tMaXN0ZW5lciIsInRhcmdldCIsImxvYWRlZCIsIkFycmF5IiwiYXBwbHkiLCJoYXMiLCJjaGVja0xpc3RlbmVycyIsImluc2lkZSIsIm11dGF0aW9ucyIsImoiLCJtdXRhdGlvbiIsIm5vZGVzIiwiYWRkZWROb2RlcyIsIm5vZGVUeXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvcHlQcm9wZXJ0eSIsInByb3AiLCJmcm9tIiwidG8iLCJkZXNjIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJIVE1MRWxlbWVudCIsIlNWR1N0eWxlRWxlbWVudCIsImdldCIsImFsbCIsInN0eWxlU2hlZXRzIiwic2hlZXQiLCJvd25lck5vZGUiLCJyZWdGaW5kU2V0dGVycyIsInJlZ0ZpbmRHZXR0ZXJzIiwicmVnUnVsZUlFR2V0dGVycyIsInJlZ1J1bGVJRVNldHRlcnMiLCJyZWdQc2V1ZG9zIiwiZmV0Y2hDc3MiLCJocmVmIiwiY3NzIiwibmV3Q3NzIiwicmV3cml0ZUNzcyIsInJlbFRvQWJzIiwiZGlzYWJsZWQiLCJtZWRpYSIsInNldEF0dHJpYnV0ZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJhY3RpdmF0ZVN0eWxlRWxlbWVudCIsImZvdW5kU3R5bGUiLCJpZUNQX3BvbHlmaWxsZWQiLCJpZUNQX2VsZW1lbnRTaGVldCIsImlubmVySFRNTCIsImdldEF0dHJpYnV0ZSIsInN1YnN0ciIsImNzc1RleHQiLCJmb3VuZCIsInBhcnNlUmV3cml0dGVuU3R5bGUiLCJnZXR0ZXJzIiwiYWRkR2V0dGVyRWxlbWVudCIsInNldHRlcnMiLCJhZGRTZXR0ZXJFbGVtZW50IiwiYmFzZSIsInJlcGxhY2UiLCIkMCIsIiQxIiwidHJpbSIsIm1hdGNoIiwiJDIiLCIkMyIsIiQ0IiwiaW1wb3J0YW50IiwiZW5jb2RlVmFsdWUiLCJ2YWx1ZSIsImtleXdvcmRzIiwiaW5pdGlhbCIsImluaGVyaXQiLCJyZXZlcnQiLCJ1bnNldCIsImRlY29kZVZhbHVlIiwidW5kZWZpbmVkIiwidHJpbW1lZCIsInN0eWxlc19vZl9nZXR0ZXJfcHJvcGVydGllcyIsIm1hdGNoZXNHZXR0ZXJzIiwicHJvcE5hbWUiLCJzbGljZSIsIm1hdGNoZXNTZXR0ZXJzIiwieCIsInNwbGl0IiwicHJvcFZhbHVlIiwicnVsZXMiLCJydWxlIiwiYWRkR2V0dGVyc1NlbGVjdG9yIiwic2VsZWN0b3JUZXh0IiwiYWRkU2V0dGVyc1NlbGVjdG9yIiwicGFyZW50UnVsZSIsIm1lZGlhVGV4dCIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsImRyYXdUcmVlIiwiZG9jdW1lbnRFbGVtZW50IiwicmVkcmF3U3R5bGVTaGVldHMiLCJwcm9wZXJ0aWVzIiwic2VsZWN0b3JBZGRQc2V1ZG9MaXN0ZW5lcnMiLCJ1blBzZXVkbyIsImRyYXdFbGVtZW50Iiwic2VsZWN0b3JzIiwiaWVDUFNlbGVjdG9ycyIsInBhcnRzIiwicHNldWRvIiwicHJvcFZhbHMiLCJpZUNQX3NldHRlcnMiLCJzdHlsZXMiLCJvd25pbmdFbGVtZW50Iiwic3R5bGVDb21wdXRlVmFsdWVXaWR0aFZhcnMiLCJnZXRDb21wdXRlZFN0eWxlIiwicHNldWRvcyIsImhvdmVyIiwib24iLCJvZmYiLCJmb2N1cyIsImFjdGl2ZSIsImxlbmd0aCIsImVuZGluZyIsInNlbCIsImRyYXdUcmVlRXZlbnQiLCJDU1NBY3RpdmUiLCJzZXRUaW1lb3V0IiwiYWN0aXZlRWxlbWVudCIsImV2dCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInVuaXF1ZUNvdW50ZXIiLCJfZHJhd0VsZW1lbnQiLCJpZUNQX3VuaXF1ZSIsImNsYXNzTGlzdCIsImFkZCIsInZhbHVlV2l0aFZhciIsImRldGFpbHMiLCJpdGVtIiwiYWxsQnlSb290IiwiZWxlbWVudFNldENzcyIsImllQ1Bfc3R5bGVFbCIsInN0eWxlRWwiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJoYXNBdHRyaWJ1dGUiLCJkcmF3UXVldWUiLCJTZXQiLCJjb2xsZWN0aW5nIiwiZHJhd2luZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZvckVhY2giLCJjbGVhciIsImZpbmRWYXJzIiwic3RyIiwiY2IiLCJsZXZlbCIsIm9wZW5lZExldmVsIiwibGFzdFBvaW50IiwibmV3U3RyIiwiY2hhciIsImluc2lkZUNhbGMiLCJzdWJzdHJpbmciLCJ2YXJpYWJsZSIsImZhbGxiYWNrIiwiaW5kZXhPZiIsInZhbHVlV2l0aFZhcnMiLCJsYXN0UHJvcGVydHlTZXJ2ZWRCeSIsIm9ic2VydmVyIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZXMiLCJvbGRIYXNoIiwibG9jYXRpb24iLCJoYXNoIiwibmV3RWwiLCJnZXRFbGVtZW50QnlJZCIsIm9sZEVsIiwiZGVzY3JpcHRvciIsInN0eWxlR2V0dGVyIiwib3JpZ2luYWxHZXRDb21wdXRlZCIsIndpbmRvdyIsImFyZ3VtZW50cyIsImNvbXB1dGVkRm9yIiwiU3R5bGVQcm90byIsIkNTU1N0eWxlRGVjbGFyYXRpb24iLCJvbGRHZXRQIiwicHJvcGVydHkiLCJ1bmRhc2hlZCIsImllUHJvcGVydHkiLCJpZVByb3BlcnR5SW1wb3J0YW50IiwiaW5oZXJpdGluZ0tleXdvcmRzIiwicmVnaXN0ZXIiLCJpbmhlcml0cyIsInRtcFZhbCIsImluaXRpYWxWYWx1ZSIsIm9sZFNldFAiLCJwcmlvIiwiQ1NTIiwicmVnaXN0ZXJQcm9wZXJ0eSIsIm9wdGlvbnMiLCJuYW1lIiwidXJsIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm92ZXJyaWRlTWltZVR5cGUiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxDQUFDLFlBQVk7QUFDWixlQURZLENBR1o7O0FBQ0EsTUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtB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Ozs7Ozs7QUFTQTs7O0FBQ0EsV0FBU3BLLFFBQVQsQ0FBa0JzSyxHQUFsQixFQUF1QnZOLFFBQXZCLEVBQWlDO0FBQ2hDLFFBQUl3TixPQUFPLEdBQUcsSUFBSUMsY0FBSixFQUFkO0FBQ0FELFdBQU8sQ0FBQ0UsSUFBUixDQUFhLEtBQWIsRUFBb0JILEdBQXBCO0FBQ0FDLFdBQU8sQ0FBQ0csZ0JBQVIsQ0FBeUIsVUFBekI7O0FBQ0FILFdBQU8sQ0FBQ0ksTUFBUixHQUFpQixZQUFZO0FBQzVCLFVBQUlKLE9BQU8sQ0FBQ0ssTUFBUixJQUFrQixHQUFsQixJQUF5QkwsT0FBTyxDQUFDSyxNQUFSLEdBQWlCLEdBQTlDLEVBQW1EO0FBQ2xEN04sZ0JBQVEsQ0FBQ3dOLE9BQU8sQ0FBQ00sWUFBVCxDQUFSO0FBQ0E7QUFDRCxLQUpEOztBQUtBTixXQUFPLENBQUNPLElBQVI7QUFDQTtBQUVELENBL3JCQSxFQUFELEMiLCJmaWxlIjoiZnVuY3Rpb24uaWUxMS52YXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLyohIGllMTFDdXN0b21Qcm9wZXJ0aWVzLmpzIHYzLjAuNiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXQuaW8vZmpYTU4gKi9cbiFmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvLyBjaGVjayBmb3Igc3VwcG9ydFxuXHR2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXHR0ZXN0RWwuc3R5bGUuc2V0UHJvcGVydHkoJy0teCcsICd5Jyk7XG5cdGlmICh0ZXN0RWwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS14JykgPT09ICd5JyB8fCAhdGVzdEVsLm1zTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm47XG5cblx0aWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gW10sXG4gICAgICAgIHJvb3QgPSBkb2N1bWVudCxcbiAgICAgICAgT2JzZXJ2ZXI7XG5cblx0ZnVuY3Rpb24gcXNhKGVsLCBzZWxlY3Rvcil7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdC8vIGNvbnNvbGUud2FybigndGhlIFNlbGVjdG9yICcrc2VsZWN0b3IrJyBjYW4gbm90IGJlIHBhcnNlZCcpO1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuICAgIGZ1bmN0aW9uIG9uRWxlbWVudCAoc2VsZWN0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgIGVsZW1lbnRzOiBuZXcgV2Vha01hcCgpLFxuICAgICAgICB9O1xuXHRcdHZhciBlbHMgPSBxc2Eocm9vdCwgbGlzdGVuZXIuc2VsZWN0b3IpLCBpPTAsIGVsO1xuXHRcdHdoaWxlIChlbCA9IGVsc1tpKytdKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5lbGVtZW50cy5zZXQoZWwsIHRydWUpO1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChlbCwgZWwpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgaWYgKCFPYnNlcnZlcikge1xuICAgICAgICAgICAgT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjaGVja011dGF0aW9ucyk7XG4gICAgICAgICAgICBPYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBlbCwgZWxzID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdHRhcmdldCAmJiB0YXJnZXQubWF0Y2hlcyhsaXN0ZW5lci5zZWxlY3RvcikgJiYgZWxzLnB1c2godGFyZ2V0KTtcblx0XHR9IGNhdGNoKGUpIHt9XG4gICAgICAgIGlmIChsb2FkZWQpIHsgLy8gb2s/IGNoZWNrIGluc2lkZSBub2RlIG9uIGlubmVySFRNTCAtIG9ubHkgd2hlbiBsb2FkZWRcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVscywgcXNhKHRhcmdldCB8fCByb290LCBsaXN0ZW5lci5zZWxlY3RvcikpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChlbCA9IGVsc1tpKytdKSB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuZWxlbWVudHMuaGFzKGVsKSkgY29udGludWU7XG4gICAgICAgICAgICBsaXN0ZW5lci5lbGVtZW50cy5zZXQoZWwsdHJ1ZSk7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjay5jYWxsKGVsLCBlbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcnMoaW5zaWRlKSB7XG4gICAgICAgIHZhciBpID0gMCwgbGlzdGVuZXI7XG4gICAgICAgIHdoaWxlIChsaXN0ZW5lciA9IGxpc3RlbmVyc1tpKytdKSBjaGVja0xpc3RlbmVyKGxpc3RlbmVyLCBpbnNpZGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja011dGF0aW9ucyhtdXRhdGlvbnMpIHtcblx0XHR2YXIgaiA9IDAsIGksIG11dGF0aW9uLCBub2RlcywgdGFyZ2V0O1xuICAgICAgICB3aGlsZSAobXV0YXRpb24gPSBtdXRhdGlvbnNbaisrXSkge1xuICAgICAgICAgICAgbm9kZXMgPSBtdXRhdGlvbi5hZGRlZE5vZGVzLCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgPSBub2Rlc1tpKytdKSB0YXJnZXQubm9kZVR5cGUgPT09IDEgJiYgY2hlY2tMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xuXG5cdC8vIHN2ZyBwb2x5ZmlsbHNcblx0ZnVuY3Rpb24gY29weVByb3BlcnR5KHByb3AsIGZyb20sIHRvKXtcblx0XHR2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnJvbSwgcHJvcCk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBwcm9wLCBkZXNjKTtcblx0fVxuXHRpZiAoISgnY2xhc3NMaXN0JyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcblx0XHRjb3B5UHJvcGVydHkoJ2NsYXNzTGlzdCcsIEhUTUxFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUpO1xuXHR9XG5cdGlmICghKCdpbm5lckhUTUwnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xuXHRcdGNvcHlQcm9wZXJ0eSgnaW5uZXJIVE1MJywgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSk7XG5cdH1cblx0aWYgKCEoJ3NoZWV0JyBpbiBTVkdTdHlsZUVsZW1lbnQucHJvdG90eXBlKSkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTVkdTdHlsZUVsZW1lbnQucHJvdG90eXBlLCAnc2hlZXQnLCB7XG5cdFx0XHRnZXQ6ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIGFsbCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzLCBpPTAsIHNoZWV0O1xuXHRcdFx0XHR3aGlsZSAoc2hlZXQ9YWxsW2krK10pIHtcblx0XHRcdFx0XHRpZiAoc2hlZXQub3duZXJOb2RlID09PSB0aGlzKSByZXR1cm4gc2hlZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblxuXHQvLyBtYWluIGxvZ2ljXG5cblx0Ly8gY2FjaGVkIHJlZ2V4cHMsIGJldHRlciBwZXJmb3JtYW5jZVxuXHRjb25zdCByZWdGaW5kU2V0dGVycyA9IC8oW1xcc3s7XSkoLS0oW0EtWmEtejAtOS1fXSopXFxzKjooW147IX17XSspKCFpbXBvcnRhbnQpPykoPz1cXHMqKFs7fV18JCkpL2c7XG5cdGNvbnN0IHJlZ0ZpbmRHZXR0ZXJzID0gLyhbeztdXFxzKikoW0EtWmEtejAtOS1fXStcXHMqOlteO317XSp2YXJcXChbXiE7fXtdKykoIWltcG9ydGFudCk/KD89XFxzKihbO30kXXwkKSkvZztcblx0Y29uc3QgcmVnUnVsZUlFR2V0dGVycyA9IC8taWVWYXItKFteOl0rKTovZ1xuXHRjb25zdCByZWdSdWxlSUVTZXR0ZXJzID0gLy1pZS0oW159O10rKS9nXG5cdC8vY29uc3QgcmVnSGFzVmFyID0gL3ZhclxcKC87XG5cdGNvbnN0IHJlZ1BzZXVkb3MgPSAvOihob3ZlcnxhY3RpdmV8Zm9jdXN8dGFyZ2V0fDpiZWZvcmV8OmFmdGVyfDpmaXJzdC1sZXR0ZXJ8OmZpcnN0LWxpbmUpLztcblxuXHRvbkVsZW1lbnQoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScsIGZ1bmN0aW9uIChlbCkge1xuXHRcdGZldGNoQ3NzKGVsLmhyZWYsIGZ1bmN0aW9uIChjc3MpIHtcblx0XHRcdHZhciBuZXdDc3MgPSByZXdyaXRlQ3NzKGNzcyk7XG5cdFx0XHRpZiAoY3NzID09PSBuZXdDc3MpIHJldHVybjtcblx0XHRcdG5ld0NzcyA9IHJlbFRvQWJzKGVsLmhyZWYsIG5ld0Nzcyk7XG5cdFx0XHRlbC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdFx0aWYgKGVsLm1lZGlhKSBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgZWwubWVkaWEpO1xuXHRcdFx0ZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGUsIGVsKTtcblx0XHRcdGFjdGl2YXRlU3R5bGVFbGVtZW50KHN0eWxlLCBuZXdDc3MpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRmdW5jdGlvbiBmb3VuZFN0eWxlKGVsKXtcblx0XHRpZiAoZWwuaWVDUF9wb2x5ZmlsbGVkKSByZXR1cm47XG5cdFx0aWYgKGVsLmllQ1BfZWxlbWVudFNoZWV0KSByZXR1cm47XG5cdFx0dmFyIGNzcyA9IGVsLmlubmVySFRNTDtcblx0XHR2YXIgbmV3Q3NzID0gcmV3cml0ZUNzcyhjc3MpO1xuXHRcdGlmIChjc3MgPT09IG5ld0NzcykgcmV0dXJuO1xuXHRcdGFjdGl2YXRlU3R5bGVFbGVtZW50KGVsLCBuZXdDc3MpO1xuXHR9XG5cdG9uRWxlbWVudCgnc3R5bGUnLCBmb3VuZFN0eWxlKTtcblx0Ly8gaW1tZWRpYXRlLCB0byBwYXNzIHczYy10ZXN0cywgYnVkIGl0cyBhIGJhZCBpZGVhXG5cdC8vIGFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsZnVuY3Rpb24oZSl7IGUudGFyZ2V0LnRhZ05hbWUgPT09ICdTVFlMRScgJiYgZm91bmRTdHlsZShlLnRhcmdldCk7IH0pO1xuXG5cblxuXHRvbkVsZW1lbnQoJ1tpZS1zdHlsZV0nLCBmdW5jdGlvbiAoZWwpIHtcblx0XHR2YXIgbmV3Q3NzID0gcmV3cml0ZUNzcygneycrZWwuZ2V0QXR0cmlidXRlKCdpZS1zdHlsZScpKS5zdWJzdHIoMSk7XG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCArPSAnOycrIG5ld0Nzcztcblx0XHR2YXIgZm91bmQgPSBwYXJzZVJld3JpdHRlblN0eWxlKGVsLnN0eWxlKTtcblx0XHRpZiAoZm91bmQuZ2V0dGVycykgYWRkR2V0dGVyRWxlbWVudChlbCwgZm91bmQuZ2V0dGVycywgJyVzdHlsZUF0dHInKTtcblx0XHRpZiAoZm91bmQuc2V0dGVycykgYWRkU2V0dGVyRWxlbWVudChlbCwgZm91bmQuc2V0dGVycyk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHJlbFRvQWJzKGJhc2UsIGNzcykge1xuXHRcdHJldHVybiBjc3MucmVwbGFjZSgvdXJsXFwoKFteKV0rKVxcKS9nLCBmdW5jdGlvbigkMCwgJDEpe1xuXHRcdFx0JDEgPSAkMS50cmltKCkucmVwbGFjZSgvKF5bJ1wiXXxbJ1wiXSQpL2csJycpO1xuXHRcdFx0aWYgKCQxLm1hdGNoKC9eKFthLXpdKzp8XFwvKS8pKSByZXR1cm4gJDA7XG5cdFx0XHRiYXNlID0gYmFzZS5yZXBsYWNlKC9cXD8uKi8sJycpO1xuXHRcdFx0cmV0dXJuICd1cmwoJysgYmFzZSArICcuLy4uLycgKyAkMSArJyknO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gaWUgaGFzIGEgYnVnLCB3aGVyZSB1bmtub3duIHByb3BlcnRpZXMgYXQgcHNldWRvLXNlbGVjdG9ycyBhcmUgY29tcHV0ZWQgYXQgdGhlIGVsZW1lbnRcblx0Ly8gI2VsOjphZnRlciB7IC1jb250ZW50Oid4JzsgfSA9PiBnZXRDb21wdXRlZFN0eWxlKGVsKVsnLWNvbnRlbnQnXSA9PSAneCdcblx0Ly8gc2hvdWxkIHdlIGFkZCBzb21ldGhpbmcgbGlrZSAtaWVWYXItcHNldWRvX2FmdGVyLWNvbnRlbnQ6J3gnP1xuXHRmdW5jdGlvbiByZXdyaXRlQ3NzKGNzcykge1xuXG5cdFx0LyogdW5jb21tZW50IGlmIHNwZWMgZmluaXNoZWQgYW5kIG5lZWRlZCBieSBzb21lb25lXG5cdFx0Y3NzID0gY3NzLnJlcGxhY2UoL0Bwcm9wZXJ0eSAoW157XSspeyhbXn1dKyl9LywgZnVuY3Rpb24oJDAsIHByb3AsIGJvZHkpe1xuXHRcdFx0cHJvcCA9IHByb3AudHJpbSgpO1xuXHRcdFx0Y29uc3QgZGVjbGFyYXRpb24gPSB7bmFtZTpwcm9wfTtcblx0XHRcdGJvZHkuc3BsaXQoJzsnKS5mb3JFYWNoKGZ1bmN0aW9uKHBhaXIpe1xuXHRcdFx0XHRjb25zdCB4ID0gcGFpci5zcGxpdCgnOicpO1xuXHRcdFx0XHRpZiAoeFsxXSkgZGVjbGFyYXRpb25bIHhbMF0udHJpbSgpIF0gPSB4WzFdO1xuXHRcdFx0fSk7XG5cdFx0XHRkZWNsYXJhdGlvblsnaW5oZXJpdHMnXSA9IGRlY2xhcmF0aW9uWydpbmhlcml0cyddLnRyaW0oKT09PSd0cnVlJyA/IHRydWUgOiBmYWxzZTtcblx0XHRcdGRlY2xhcmF0aW9uWydpbml0aWFsVmFsdWUnXSA9IGRlY2xhcmF0aW9uWydpbml0aWFsLXZhbHVlJ107XG5cdFx0XHRDU1MucmVnaXN0ZXJQcm9wZXJ0eShkZWNsYXJhdGlvbilcblx0XHRcdHJldHVybiAnLypcXG4gQHByb3BlcnR5IC4uLiByZW1vdmVkIFxcbionKycvJztcblx0XHR9KTtcblx0XHQqL1xuXHRcdHJldHVybiBjc3MucmVwbGFjZShyZWdGaW5kU2V0dGVycywgZnVuY3Rpb24oJDAsICQxLCAkMiwgJDMsICQ0LCBpbXBvcnRhbnQpe1xuXHRcdFx0cmV0dXJuICQxKyctaWUtJysoaW1wb3J0YW50PyfinZcnOicnKSskMysnOicrZW5jb2RlVmFsdWUoJDQpO1xuXHRcdH0pLnJlcGxhY2UocmVnRmluZEdldHRlcnMsIGZ1bmN0aW9uKCQwLCAkMSwgJDIsIGltcG9ydGFudCl7XG5cdFx0XHRyZXR1cm4gJDErJy1pZVZhci0nKyhpbXBvcnRhbnQ/J+Kdlyc6JycpKyQyKyc7ICcrJDI7IC8vIGtlZXAgdGhlIG9yaWdpbmFsLCBzbyBjaGFpbmluZyB3b3JrcyBcIi0teDp2YXIoLS15KVwiXG5cdFx0fSk7XG5cdH1cblx0ZnVuY3Rpb24gZW5jb2RlVmFsdWUodmFsdWUpe1xuXHRcdHJldHVybiB2YWx1ZTtcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvIC9nLCfikKMnKTtcblx0fVxuXHRjb25zdCBrZXl3b3JkcyA9IHtpbml0aWFsOjEsaW5oZXJpdDoxLHJldmVydDoxLHVuc2V0OjF9O1xuXHRmdW5jdGlvbiBkZWNvZGVWYWx1ZSh2YWx1ZSl7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHRcdGlmICh2YWx1ZT09PXVuZGVmaW5lZCkgcmV0dXJuO1xuXHRcdHZhbHVlID0gIHZhbHVlLnJlcGxhY2UoL+KQoy9nLCcgJyk7XG5cdFx0Y29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKTtcblx0XHRpZiAoa2V5d29yZHNbdHJpbW1lZF0pIHJldHVybiB0cmltbWVkO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdC8vIGJldGFcblx0Y29uc3Qgc3R5bGVzX29mX2dldHRlcl9wcm9wZXJ0aWVzID0ge307XG5cblx0ZnVuY3Rpb24gcGFyc2VSZXdyaXR0ZW5TdHlsZShzdHlsZSkgeyAvLyBsZXNzIG1lbW9yeSB0aGVuIHBhcmFtZXRlciBjc3NUZXh0P1xuXG5cdFx0Ly8gYmV0YVxuXHRcdHN0eWxlWyd6LWluZGV4J107IC8vIGllMTEgY2FuIGFjY2VzcyB1bmtub3duIHByb3BlcnRpZXMgaW4gc3R5bGVzaGVldHMgb25seSBpZiBhY2Nlc3NlZCBhIGRhc2hlZCBrbm93biBwcm9wZXJ0eVxuXG5cdFx0Y29uc3QgY3NzVGV4dCA9IHN0eWxlLmNzc1RleHQ7XG5cdFx0dmFyIG1hdGNoZXNHZXR0ZXJzID0gY3NzVGV4dC5tYXRjaChyZWdSdWxlSUVHZXR0ZXJzKSwgaiwgbWF0Y2g7XG5cdFx0aWYgKG1hdGNoZXNHZXR0ZXJzKSB7XG5cdFx0XHR2YXIgZ2V0dGVycyA9IFtdOyAvLyBlZy4gW2JvcmRlcixjb2xvcl1cblx0XHRcdGZvciAoaiA9IDA7IG1hdGNoID0gbWF0Y2hlc0dldHRlcnNbaisrXTspIHtcblx0XHRcdFx0bGV0IHByb3BOYW1lID0gbWF0Y2guc2xpY2UoNywgLTEpO1xuXHRcdFx0XHRpZiAocHJvcE5hbWVbMF0gPT09ICfinZcnKSBwcm9wTmFtZSA9IHByb3BOYW1lLnN1YnN0cigxKTtcblx0XHRcdFx0Z2V0dGVycy5wdXNoKHByb3BOYW1lKTtcblxuXHRcdFx0XHQvLyBiZXRhXG5cdFx0XHRcdGlmICghc3R5bGVzX29mX2dldHRlcl9wcm9wZXJ0aWVzW3Byb3BOYW1lXSkgc3R5bGVzX29mX2dldHRlcl9wcm9wZXJ0aWVzW3Byb3BOYW1lXSA9IFtdO1xuXHRcdFx0XHRzdHlsZXNfb2ZfZ2V0dGVyX3Byb3BlcnRpZXNbcHJvcE5hbWVdLnB1c2goc3R5bGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgbWF0Y2hlc1NldHRlcnMgPSBjc3NUZXh0Lm1hdGNoKHJlZ1J1bGVJRVNldHRlcnMpO1xuXHRcdGlmIChtYXRjaGVzU2V0dGVycykge1xuXHRcdFx0dmFyIHNldHRlcnMgPSB7fTsgLy8gZWcuIFstLWNvbG9yOiNmZmYsIC0tcGFkZGluZzoxMHB4XTtcblx0XHRcdGZvciAoaiA9IDA7IG1hdGNoID0gbWF0Y2hlc1NldHRlcnNbaisrXTspIHtcblx0XHRcdFx0bGV0IHggPSBtYXRjaC5zdWJzdHIoNCkuc3BsaXQoJzonKTtcblx0XHRcdFx0bGV0IHByb3BOYW1lID0geFswXTtcblx0XHRcdFx0bGV0IHByb3BWYWx1ZSA9IHhbMV07XG5cdFx0XHRcdGlmIChwcm9wTmFtZVswXSA9PT0gJ+KdlycpIHByb3BOYW1lID0gcHJvcE5hbWUuc3Vic3RyKDEpO1xuXHRcdFx0XHRzZXR0ZXJzW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtnZXR0ZXJzOmdldHRlcnMsIHNldHRlcnM6c2V0dGVyc307XG5cdH1cblx0ZnVuY3Rpb24gYWN0aXZhdGVTdHlsZUVsZW1lbnQoc3R5bGUsIGNzcykge1xuXHRcdHN0eWxlLmlubmVySFRNTCA9IGNzcztcblx0XHRzdHlsZS5pZUNQX3BvbHlmaWxsZWQgPSB0cnVlO1xuXHRcdHZhciBydWxlcyA9IHN0eWxlLnNoZWV0LnJ1bGVzLCBpPTAsIHJ1bGU7IC8vIGNzc1J1bGVzID0gQ1NTUnVsZUxpc3QsIHJ1bGVzID0gTVNDU1NSdWxlTGlzdFxuXHRcdHdoaWxlIChydWxlID0gcnVsZXNbaSsrXSkge1xuXHRcdFx0Y29uc3QgZm91bmQgPSBwYXJzZVJld3JpdHRlblN0eWxlKHJ1bGUuc3R5bGUpO1xuXHRcdFx0aWYgKGZvdW5kLmdldHRlcnMpIGFkZEdldHRlcnNTZWxlY3RvcihydWxlLnNlbGVjdG9yVGV4dCwgZm91bmQuZ2V0dGVycyk7XG5cdFx0XHRpZiAoZm91bmQuc2V0dGVycykgYWRkU2V0dGVyc1NlbGVjdG9yKHJ1bGUuc2VsZWN0b3JUZXh0LCBmb3VuZC5zZXR0ZXJzKTtcblxuXHRcdFx0Ly8gbWVkaWFRdWVyaWVzOiByZWRyYXcgdGhlIGhvbGUgZG9jdW1lbnRcblx0XHRcdC8vIGJldHRlciBhZGQgZXZlbnRzIGZvciBlYWNoIGVsZW1lbnQ/XG5cdFx0XHRjb25zdCBtZWRpYSA9IHJ1bGUucGFyZW50UnVsZSAmJiBydWxlLnBhcmVudFJ1bGUubWVkaWEgJiYgcnVsZS5wYXJlbnRSdWxlLm1lZGlhLm1lZGlhVGV4dDtcblx0XHRcdGlmIChtZWRpYSAmJiAoZm91bmQuZ2V0dGVycyB8fCBmb3VuZC5zZXR0ZXJzKSkge1xuXHRcdFx0XHRtYXRjaE1lZGlhKG1lZGlhKS5hZGRMaXN0ZW5lcihmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGRyYXdUcmVlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBiZXRhXG5cdFx0cmVkcmF3U3R5bGVTaGVldHMoKVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkR2V0dGVyc1NlbGVjdG9yKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG5cdFx0c2VsZWN0b3JBZGRQc2V1ZG9MaXN0ZW5lcnMoc2VsZWN0b3IpO1xuXHRcdG9uRWxlbWVudCh1blBzZXVkbyhzZWxlY3RvciksIGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0YWRkR2V0dGVyRWxlbWVudChlbCwgcHJvcGVydGllcywgc2VsZWN0b3IpO1xuXHRcdFx0ZHJhd0VsZW1lbnQoZWwpO1xuXHRcdH0pO1xuXHR9XG5cdGZ1bmN0aW9uIGFkZEdldHRlckVsZW1lbnQoZWwsIHByb3BlcnRpZXMsIHNlbGVjdG9yKSB7XG5cdFx0dmFyIGk9MCwgcHJvcCwgajtcblx0XHRjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3Rvci5zcGxpdCgnLCcpOyAvLyBzcGxpdCBncm91cGVkIHNlbGVjdG9yc1xuXHRcdGVsLnNldEF0dHJpYnV0ZSgnaWVjcC1uZWVkZWQnLCB0cnVlKTtcblx0XHRpZiAoIWVsLmllQ1BTZWxlY3RvcnMpIGVsLmllQ1BTZWxlY3RvcnMgPSB7fTtcblx0XHR3aGlsZSAocHJvcCA9IHByb3BlcnRpZXNbaSsrXSkge1xuXHRcdFx0Zm9yIChqID0gMDsgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaisrXTspIHtcblx0XHRcdFx0Y29uc3QgcGFydHMgPSBzZWxlY3Rvci50cmltKCkuc3BsaXQoJzo6Jyk7XG5cdFx0XHRcdGlmICghZWwuaWVDUFNlbGVjdG9yc1twcm9wXSkgZWwuaWVDUFNlbGVjdG9yc1twcm9wXSA9IFtdO1xuXHRcdFx0XHRlbC5pZUNQU2VsZWN0b3JzW3Byb3BdLnB1c2goe1xuXHRcdFx0XHRcdHNlbGVjdG9yOiBwYXJ0c1swXSxcblx0XHRcdFx0XHRwc2V1ZG86IHBhcnRzWzFdID8gJzo6JyArIHBhcnRzWzFdIDogJydcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGFkZFNldHRlcnNTZWxlY3RvcihzZWxlY3RvciwgcHJvcFZhbHMpIHtcblx0XHRzZWxlY3RvckFkZFBzZXVkb0xpc3RlbmVycyhzZWxlY3Rvcik7XG5cdFx0b25FbGVtZW50KHVuUHNldWRvKHNlbGVjdG9yKSwgZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRhZGRTZXR0ZXJFbGVtZW50KGVsLCBwcm9wVmFscyk7XG5cdFx0fSk7XG5cdH1cblx0ZnVuY3Rpb24gYWRkU2V0dGVyRWxlbWVudChlbCwgcHJvcFZhbHMpIHtcblx0XHRpZiAoIWVsLmllQ1Bfc2V0dGVycykgZWwuaWVDUF9zZXR0ZXJzID0ge307XG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBwcm9wVmFscykgeyAvLyBlZy4ge2ZvbzojZmZmLCBiYXI6YmF6fVxuXHRcdFx0ZWwuaWVDUF9zZXR0ZXJzWyctLScgKyBwcm9wXSA9IDE7XG5cdFx0fVxuXHRcdGRyYXdUcmVlKGVsKTtcblx0fVxuXG5cdC8vYmV0YVxuXHRmdW5jdGlvbiByZWRyYXdTdHlsZVNoZWV0cygpIHtcblx0XHRmb3IgKHZhciBwcm9wIGluIHN0eWxlc19vZl9nZXR0ZXJfcHJvcGVydGllcykge1xuXHRcdFx0bGV0IHN0eWxlcyA9IHN0eWxlc19vZl9nZXR0ZXJfcHJvcGVydGllc1twcm9wXTtcblx0XHRcdGZvciAodmFyIGk9MCwgc3R5bGU7IHN0eWxlPXN0eWxlc1tpKytdOykge1xuXHRcdFx0XHRpZiAoc3R5bGUub3duaW5nRWxlbWVudCkgY29udGludWU7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHN0eWxlWyctaWVWYXItJytwcm9wXTtcblx0XHRcdFx0aWYgKCF2YWx1ZSkgY29udGludWU7XG5cdFx0XHRcdHZhbHVlID0gc3R5bGVDb21wdXRlVmFsdWVXaWR0aFZhcnMoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLCB2YWx1ZSk7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gJycpIGNvbnRpbnVlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHN0eWxlW3Byb3BdID0gdmFsdWU7XG5cdFx0XHRcdH0gY2F0Y2goZSkge31cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdGNvbnN0IHBzZXVkb3MgPSB7XG5cdFx0aG92ZXI6e1xuXHRcdFx0b246J21vdXNlZW50ZXInLFxuXHRcdFx0b2ZmOidtb3VzZWxlYXZlJ1xuXHRcdH0sXG5cdFx0Zm9jdXM6e1xuXHRcdFx0b246J2ZvY3VzaW4nLFxuXHRcdFx0b2ZmOidmb2N1c291dCdcblx0XHR9LFxuXHRcdGFjdGl2ZTp7XG5cdFx0XHRvbjonQ1NTQWN0aXZhdGUnLFxuXHRcdFx0b2ZmOidDU1NEZWFjdGl2YXRlJ1xuXHRcdH0sXG5cdH07XG5cdGZ1bmN0aW9uIHNlbGVjdG9yQWRkUHNldWRvTGlzdGVuZXJzKHNlbGVjdG9yKXtcblx0XHQvLyBpZTExIGhhcyB0aGUgc3RyYW5nZSBiZWhhdm9pciwgdGhhdCBncm91cHMgb2Ygc2VsZWN0b3JzIGFyZSBpbmRpdmlkdWFsIHJ1bGVzLCBidXQgc3RhcnRpbmcgd2l0aCB0aGUgZnVsbCBzZWxlY3Rvcjpcblx0XHQvLyB0ZCwgdGgsIGJ1dHRvbiB7IGNvbG9yOnJlZCB9IHJlc3VsdHMgaW4gdGhpcyBydWxlczpcblx0XHQvLyBcInRkLCB0aCwgYnV0dG9uXCIgfCBcInRoLCB0aFwiIHwgXCJ0aFwiXG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zcGxpdCgnLCcpWzBdO1xuXHRcdGZvciAodmFyIHBzZXVkbyBpbiBwc2V1ZG9zKSB7XG5cdFx0XHR2YXIgcGFydHMgPSBzZWxlY3Rvci5zcGxpdCgnOicrcHNldWRvKTtcblx0XHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHZhciBlbmRpbmcgPSBwYXJ0c1sxXS5tYXRjaCgvXlteXFxzXSovKTsgLy8gZW5kaW5nIGVsZW1lbnRwYXJ0IG9mIHNlbGVjdG9yICh1c2VkIGZvciBub3QoOmFjdGl2ZSkpXG5cdFx0XHRcdGxldCBzZWwgPSB1blBzZXVkbyhwYXJ0c1swXStlbmRpbmcpO1xuXHRcdFx0XHRjb25zdCBsaXN0ZW5lcnMgPSBwc2V1ZG9zW3BzZXVkb107XG5cdFx0XHRcdG9uRWxlbWVudChzZWwsIGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXJzLm9uLCBkcmF3VHJlZUV2ZW50KTtcblx0XHRcdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKGxpc3RlbmVycy5vZmYsIGRyYXdUcmVlRXZlbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0bGV0IENTU0FjdGl2ZSA9IG51bGw7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsZnVuY3Rpb24oZSl7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0aWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG5cdFx0XHRcdHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRcdFx0ZXZ0LmluaXRFdmVudCgnQ1NTQWN0aXZhdGUnLCB0cnVlLCB0cnVlKTtcblx0XHRcdFx0Q1NTQWN0aXZlID0gZS50YXJnZXQ7XG5cdFx0XHRcdENTU0FjdGl2ZS5kaXNwYXRjaEV2ZW50KGV2dCk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSk7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLGZ1bmN0aW9uKCl7XG5cdFx0aWYgKENTU0FjdGl2ZSkge1xuXHRcdFx0dmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXHRcdFx0ZXZ0LmluaXRFdmVudCgnQ1NTRGVhY3RpdmF0ZScsIHRydWUsIHRydWUpO1xuXHRcdFx0Q1NTQWN0aXZlLmRpc3BhdGNoRXZlbnQoZXZ0KTtcblx0XHRcdENTU0FjdGl2ZSA9IG51bGw7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiB1blBzZXVkbyhzZWxlY3Rvcil7XG5cdFx0cmV0dXJuIHNlbGVjdG9yLnJlcGxhY2UocmVnUHNldWRvcywnJykucmVwbGFjZSgnOm5vdCgpJywnJyk7XG5cdH1cblxuXHR2YXIgdW5pcXVlQ291bnRlciA9IDA7XG5cblx0Lyogb2xkICpcblx0ZnVuY3Rpb24gX2RyYXdFbGVtZW50KGVsKSB7XG5cdFx0aWYgKCFlbC5pZUNQX3VuaXF1ZSkgeyAvLyB1c2UgZWwudW5pcXVlTnVtYmVyPyBidXQgbmVlZHMgY2xhc3MgZm9yIHRoZSBjc3Mtc2VsZWN0b3IgPT4gdGVzdCBwZXJmb3JtYW5jZVxuXHRcdFx0ZWwuaWVDUF91bmlxdWUgPSArK3VuaXF1ZUNvdW50ZXI7XG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdpZWNwLXUnICsgZWwuaWVDUF91bmlxdWUpO1xuXHRcdH1cblx0XHR2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblx0XHRpZiAoZWwuaWVDUF9zaGVldCkgd2hpbGUgKGVsLmllQ1Bfc2hlZXQucnVsZXNbMF0pIGVsLmllQ1Bfc2hlZXQuZGVsZXRlUnVsZSgwKTtcblx0XHRmb3IgKHZhciBwcm9wIGluIGVsLmllQ1BTZWxlY3RvcnMpIHtcblx0XHRcdHZhciBpbXBvcnRhbnQgPSBzdHlsZVsnLWllVmFyLeKdlycgKyBwcm9wXTtcblx0XHRcdGxldCB2YWx1ZVdpdGhWYXIgPSBpbXBvcnRhbnQgfHwgc3R5bGVbJy1pZVZhci0nICsgcHJvcF07XG5cdFx0XHRpZiAoIXZhbHVlV2l0aFZhcikgY29udGludWU7IC8vIHRvZG8sIHdoYXQgaWYgJzAnXG5cblx0XHRcdHZhciBkZXRhaWxzID0ge307XG5cdFx0XHR2YXIgdmFsdWUgPSBzdHlsZUNvbXB1dGVWYWx1ZVdpZHRoVmFycyhzdHlsZSwgdmFsdWVXaXRoVmFyLCBkZXRhaWxzKTtcblxuXHRcdFx0aWYgKGltcG9ydGFudCkgdmFsdWUgKz0gJyAhaW1wb3J0YW50Jztcblx0XHRcdGZvciAodmFyIGk9MCwgaXRlbTsgaXRlbT1lbC5pZUNQU2VsZWN0b3JzW3Byb3BdW2krK107KSB7IC8vIHRvZG86IHNwbGl0IGFuZCB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lP1xuXHRcdFx0XHRpZiAoaXRlbS5zZWxlY3RvciA9PT0gJyVzdHlsZUF0dHInKSB7XG5cdFx0XHRcdFx0ZWwuc3R5bGVbcHJvcF0gPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIGJldGFcblx0XHRcdFx0XHRpZiAoIWltcG9ydGFudCAmJiBkZXRhaWxzLmFsbEJ5Um9vdCAhPT0gZmFsc2UpIGNvbnRpbnVlOyAvLyBkb250IGhhdmUgdG8gZHJhdyByb290LXByb3BlcnRpZXNcblxuXHRcdFx0XHRcdC8vbGV0IHNlbGVjdG9yID0gaXRlbS5zZWxlY3Rvci5yZXBsYWNlKC8+PyBcXC5bXiBdKy8sICcgJywgaXRlbS5zZWxlY3Rvcik7IC8vIHRvZG86IHRyeSB0byBlcXVhbGl6ZSBzcGVjaWZpY2l0eVxuXHRcdFx0XHRcdGxldCBzZWxlY3RvciA9IGl0ZW0uc2VsZWN0b3I7XG5cdFx0XHRcdFx0ZWxlbWVudFN0eWxlU2hlZXQoZWwpLmluc2VydFJ1bGUoc2VsZWN0b3IgKyAnLmllY3AtdScgKyBlbC5pZUNQX3VuaXF1ZSArIGl0ZW0ucHNldWRvICsgJyB7JyArIHByb3AgKyAnOicgKyB2YWx1ZSArICd9JywgMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZWxlbWVudFN0eWxlU2hlZXQoZWwpe1xuXHRcdGlmICghZWwuaWVDUF9zaGVldCkge1xuXHRcdFx0Y29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0XHRzdHlsZUVsLmllQ1BfZWxlbWVudFNoZWV0ID0gMTtcblx0XHRcdC8vZWwuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7IC8vIHllcyEgc2VsZi1jbG9zaW5nIHRhZ3MgY2FuIGhhdmUgc3R5bGUgYXMgY2hpbGRyZW4sIGJ1dCAtIGlmIGkgc2V0IGlubmVySFRNTCwgdGhlIHN0eWxlc2hlZXQgaXMgbG9zdFxuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcblx0XHRcdGVsLmllQ1Bfc2hlZXQgPSBzdHlsZUVsLnNoZWV0O1xuXHRcdH1cblx0XHRyZXR1cm4gZWwuaWVDUF9zaGVldDtcblx0fVxuXG5cdC8qICovXG5cdGZ1bmN0aW9uIF9kcmF3RWxlbWVudChlbCkge1xuXHRcdGlmICghZWwuaWVDUF91bmlxdWUpIHsgLy8gdXNlIGVsLnVuaXF1ZU51bWJlcj8gYnV0IG5lZWRzIGNsYXNzIGZvciB0aGUgY3NzLXNlbGVjdG9yID0+IHRlc3QgcGVyZm9ybWFuY2Vcblx0XHRcdGVsLmllQ1BfdW5pcXVlID0gKyt1bmlxdWVDb3VudGVyO1xuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaWVjcC11JyArIGVsLmllQ1BfdW5pcXVlKTtcblx0XHR9XG5cdFx0dmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0bGV0IGNzcyA9ICcnO1xuXHRcdGZvciAodmFyIHByb3AgaW4gZWwuaWVDUFNlbGVjdG9ycykge1xuXHRcdFx0dmFyIGltcG9ydGFudCA9IHN0eWxlWyctaWVWYXIt4p2XJyArIHByb3BdO1xuXHRcdFx0bGV0IHZhbHVlV2l0aFZhciA9IGltcG9ydGFudCB8fCBzdHlsZVsnLWllVmFyLScgKyBwcm9wXTtcblx0XHRcdGlmICghdmFsdWVXaXRoVmFyKSBjb250aW51ZTsgLy8gdG9kbywgd2hhdCBpZiAnMCdcblx0XHRcdHZhciBkZXRhaWxzID0ge307XG5cdFx0XHR2YXIgdmFsdWUgPSBzdHlsZUNvbXB1dGVWYWx1ZVdpZHRoVmFycyhzdHlsZSwgdmFsdWVXaXRoVmFyLCBkZXRhaWxzKTtcblx0XHRcdC8vaWYgKHZhbHVlPT09J2luaXRpYWwnKSB2YWx1ZSA9IGluaXRpYWxzW3Byb3BdO1xuXHRcdFx0aWYgKGltcG9ydGFudCkgdmFsdWUgKz0gJyAhaW1wb3J0YW50Jztcblx0XHRcdGZvciAodmFyIGk9MCwgaXRlbTsgaXRlbT1lbC5pZUNQU2VsZWN0b3JzW3Byb3BdW2krK107KSB7IC8vIHRvZG86IHNwbGl0IGFuZCB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lP1xuXHRcdFx0XHRpZiAoaXRlbS5zZWxlY3RvciA9PT0gJyVzdHlsZUF0dHInKSB7XG5cdFx0XHRcdFx0ZWwuc3R5bGVbcHJvcF0gPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIGJldGFcblx0XHRcdFx0XHRpZiAoIWltcG9ydGFudCAmJiBkZXRhaWxzLmFsbEJ5Um9vdCAhPT0gZmFsc2UpIGNvbnRpbnVlOyAvLyBkb250IGhhdmUgdG8gZHJhdyByb290LXByb3BlcnRpZXNcblxuXHRcdFx0XHRcdC8vbGV0IHNlbGVjdG9yID0gaXRlbS5zZWxlY3Rvci5yZXBsYWNlKC8+PyBcXC5bXiBdKy8sICcgJywgaXRlbS5zZWxlY3Rvcik7IC8vIHRvZG86IHRyeSB0byBlcXVhbGl6ZSBzcGVjaWZpY2l0eVxuXHRcdFx0XHRcdGxldCBzZWxlY3RvciA9IGl0ZW0uc2VsZWN0b3I7XG5cdFx0XHRcdFx0Y3NzICs9IHNlbGVjdG9yICsgJy5pZWNwLXUnICsgZWwuaWVDUF91bmlxdWUgKyBpdGVtLnBzZXVkbyArICd7JyArIHByb3AgKyAnOicgKyB2YWx1ZSArICd9XFxuJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbGVtZW50U2V0Q3NzKGVsLCBjc3MpO1xuXHR9XG5cdGZ1bmN0aW9uIGVsZW1lbnRTZXRDc3MoZWwsIGNzcyl7XG5cdFx0aWYgKCFlbC5pZUNQX3N0eWxlRWwgJiYgY3NzKSB7XG5cdFx0XHRjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRcdHN0eWxlRWwuaWVDUF9lbGVtZW50U2hlZXQgPSAxO1xuXHRcdFx0Ly9lbC5hcHBlbmRDaGlsZChzdHlsZUVsKTsgLy8geWVzISBzZWxmLWNsb3NpbmcgdGFncyBjYW4gaGF2ZSBzdHlsZSBhcyBjaGlsZHJlbiwgYnV0IC0gaWYgaSBzZXQgaW5uZXJIVE1MLCB0aGUgc3R5bGVzaGVldCBpcyBsb3N0XG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuXHRcdFx0ZWwuaWVDUF9zdHlsZUVsID0gc3R5bGVFbDtcblx0XHR9XG5cdFx0aWYgKGVsLmllQ1Bfc3R5bGVFbCkgZWwuaWVDUF9zdHlsZUVsLmlubmVySFRNTCA9IGNzcztcblx0fVxuXHQvKiAqL1xuXG5cdGZ1bmN0aW9uIGRyYXdUcmVlKHRhcmdldCkge1xuXHRcdGlmICghdGFyZ2V0KSByZXR1cm47XG5cdFx0dmFyIGVscyA9IHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdbaWVjcC1uZWVkZWRdJyk7XG5cdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaWVjcC1uZWVkZWQnKSkgZHJhd0VsZW1lbnQodGFyZ2V0KTsgLy8gc2VsZlxuXHRcdGZvciAodmFyIGkgPSAwLCBlbDsgZWwgPSBlbHNbaSsrXTspIGRyYXdFbGVtZW50KGVsKTsgLy8gdHJlZVxuXHR9XG5cdC8vIGRyYXcgcXVldWVcblx0bGV0IGRyYXdRdWV1ZSA9IG5ldyBTZXQoKTtcblx0bGV0IGNvbGxlY3RpbmcgPSBmYWxzZTtcblx0bGV0IGRyYXdpbmcgPSBmYWxzZTtcblx0ZnVuY3Rpb24gZHJhd0VsZW1lbnQoZWwpe1xuXHRcdGRyYXdRdWV1ZS5hZGQoZWwpO1xuXHRcdGlmIChjb2xsZWN0aW5nKSByZXR1cm47XG5cdFx0Y29sbGVjdGluZyA9IHRydWU7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7XG5cdFx0Ly9zZXRJbW1lZGlhdGUoZnVuY3Rpb24oKXtcblx0XHRcdGNvbGxlY3RpbmcgPSBmYWxzZTtcblx0XHRcdGRyYXdpbmcgPSB0cnVlO1xuXHRcdFx0ZHJhd1F1ZXVlLmZvckVhY2goX2RyYXdFbGVtZW50KTtcblx0XHRcdGRyYXdRdWV1ZS5jbGVhcigpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyAvLyBtdXRhdGlvbk9ic2VydmVyIHdpbGwgdHJpZ2dlciBkZWxheWVkLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2lsbCBtaXNzIHNvbWUgY2hhbmdlc1xuXHRcdFx0XHRkcmF3aW5nID0gZmFsc2U7XG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXG5cdGZ1bmN0aW9uIGRyYXdUcmVlRXZlbnQoZSkge1xuXHRcdGRyYXdUcmVlKGUudGFyZ2V0KVxuXHR9XG5cblx0ZnVuY3Rpb24gZmluZFZhcnMoc3RyLCBjYil7IC8vIGNzcyB2YWx1ZSBwYXJzZXJcblx0XHRsZXQgbGV2ZWw9MCwgb3BlbmVkTGV2ZWw9bnVsbCwgbGFzdFBvaW50PTAsIG5ld1N0ciA9ICcnLCBpPTAsIGNoYXIsIGluc2lkZUNhbGM7XG5cdFx0d2hpbGUgKGNoYXI9c3RyW2krK10pIHtcblx0XHRcdGlmIChjaGFyID09PSAnKCcpIHtcblx0XHRcdFx0KytsZXZlbDtcblx0XHRcdFx0aWYgKG9wZW5lZExldmVsID09PSBudWxsICYmIHN0cltpLTRdK3N0cltpLTNdK3N0cltpLTJdID09PSAndmFyJykge1xuXHRcdFx0XHRcdG9wZW5lZExldmVsID0gbGV2ZWw7XG5cdFx0XHRcdFx0bmV3U3RyICs9IHN0ci5zdWJzdHJpbmcobGFzdFBvaW50LCBpLTQpO1xuXHRcdFx0XHRcdGxhc3RQb2ludCA9IGk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0cltpLTVdK3N0cltpLTRdK3N0cltpLTNdK3N0cltpLTJdID09PSAnY2FsYycpIHtcblx0XHRcdFx0XHRpbnNpZGVDYWxjID0gbGV2ZWw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjaGFyID09PSAnKScgJiYgb3BlbmVkTGV2ZWwgPT09IGxldmVsKSB7XG5cdFx0XHRcdGxldCB2YXJpYWJsZSA9IHN0ci5zdWJzdHJpbmcobGFzdFBvaW50LCBpLTEpLnRyaW0oKSwgZmFsbGJhY2s7XG5cdFx0XHRcdGxldCB4ID0gdmFyaWFibGUuaW5kZXhPZignLCcpO1xuXHRcdFx0XHRpZiAoeCE9PS0xKSB7XG5cdFx0XHRcdFx0ZmFsbGJhY2sgPSB2YXJpYWJsZS5zbGljZSh4KzEpO1xuXHRcdFx0XHRcdHZhcmlhYmxlID0gdmFyaWFibGUuc2xpY2UoMCx4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdTdHIgKz0gY2IodmFyaWFibGUsIGZhbGxiYWNrLCBpbnNpZGVDYWxjKTtcblx0XHRcdFx0bGFzdFBvaW50ID0gaTtcblx0XHRcdFx0b3BlbmVkTGV2ZWwgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNoYXIgPT09ICcpJykge1xuXHRcdFx0XHQtLWxldmVsO1xuXHRcdFx0XHRpZiAoaW5zaWRlQ2FsYyA9PT0gbGV2ZWwpIGluc2lkZUNhbGMgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRuZXdTdHIgKz0gc3RyLnN1YnN0cmluZyhsYXN0UG9pbnQpO1xuXHRcdHJldHVybiBuZXdTdHI7XG5cdH1cblx0ZnVuY3Rpb24gc3R5bGVDb21wdXRlVmFsdWVXaWR0aFZhcnMoc3R5bGUsIHZhbHVlV2l0aFZhcnMsIGRldGFpbHMpe1xuXHRcdHJldHVybiBmaW5kVmFycyh2YWx1ZVdpdGhWYXJzLCBmdW5jdGlvbih2YXJpYWJsZSwgZmFsbGJhY2ssIGluc2lkZUNhbGMpe1xuXHRcdFx0dmFyIHZhbHVlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSh2YXJpYWJsZSk7XG5cdFx0XHRpZiAoaW5zaWRlQ2FsYykgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eY2FsY1xcKC8sICcoJyk7IC8vIHByZXZlbnQgbmVzdGVkIGNhbGNcblx0XHRcdGlmIChkZXRhaWxzICYmIHN0eWxlLmxhc3RQcm9wZXJ0eVNlcnZlZEJ5ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIGRldGFpbHMuYWxsQnlSb290ID0gZmFsc2U7XG5cdFx0XHRpZiAodmFsdWU9PT0nJyAmJiBmYWxsYmFjaykgdmFsdWUgPSBzdHlsZUNvbXB1dGVWYWx1ZVdpZHRoVmFycyhzdHlsZSwgZmFsbGJhY2ssIGRldGFpbHMpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gbXV0YXRpb24gbGlzdGVuZXJcblx0dmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG5cdFx0aWYgKGRyYXdpbmcpIHJldHVybjtcblx0XHRmb3IgKHZhciBpPTAsIG11dGF0aW9uOyBtdXRhdGlvbj1tdXRhdGlvbnNbaSsrXTspIHtcblx0XHRcdGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnaWVjcC1uZWVkZWQnKSBjb250aW51ZTsgLy8gd2h5P1xuXHRcdFx0Ly8gcmVjaGVjayBhbGwgc2VsZWN0b3JzIGlmIGl0IHRhcmdldHMgbmV3IGVsZW1lbnRzP1xuXHRcdFx0ZHJhd1RyZWUobXV0YXRpb24udGFyZ2V0KTtcblx0XHR9XG5cdH0pO1xuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCx7YXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblx0fSlcblxuXHQvLyA6dGFyZ2V0IGxpc3RlbmVyXG5cdHZhciBvbGRIYXNoID0gbG9jYXRpb24uaGFzaFxuXHRhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJyxmdW5jdGlvbihlKXtcblx0XHR2YXIgbmV3RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XG5cdFx0aWYgKG5ld0VsKSB7XG5cdFx0XHR2YXIgb2xkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbGRIYXNoLnN1YnN0cigxKSk7XG5cdFx0XHRkcmF3VHJlZShuZXdFbCk7XG5cdFx0XHRkcmF3VHJlZShvbGRFbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRyYXdUcmVlKGRvY3VtZW50KTtcblx0XHR9XG5cdFx0b2xkSGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cdH0pO1xuXG5cdC8vIGFkZCBvd25pbmdFbGVtZW50IHRvIEVsZW1lbnQuc3R5bGVcblx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ3N0eWxlJyk7XG5cdHZhciBzdHlsZUdldHRlciA9IGRlc2NyaXB0b3IuZ2V0O1xuXHRkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBzdHlsZSA9IHN0eWxlR2V0dGVyLmNhbGwodGhpcyk7XG5cdFx0c3R5bGUub3duaW5nRWxlbWVudCA9IHRoaXM7XG5cdFx0cmV0dXJuIHN0eWxlO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUsICdzdHlsZScsIGRlc2NyaXB0b3IpO1xuXG5cdC8vIGFkZCBjb21wdXRlZEZvciB0byBjb21wdXRlZCBzdHlsZS1vYmplY3RzXG5cdHZhciBvcmlnaW5hbEdldENvbXB1dGVkID0gZ2V0Q29tcHV0ZWRTdHlsZTtcblx0d2luZG93LmdldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHR2YXIgc3R5bGUgPSBvcmlnaW5hbEdldENvbXB1dGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0c3R5bGUuY29tcHV0ZWRGb3IgPSBlbDtcblx0XHQvL3N0eWxlLnBzZXVkb0VsdCA9IHBzZXVkb0VsdDsgLy9ub3QgbmVlZGVkIGF0IHRoZSBtb21lbnRcblx0XHRyZXR1cm4gc3R5bGU7XG5cdH1cblxuXHQvLyBnZXRQcm9wZXJ0eVZhbHVlIC8gc2V0UHJvcGVydHkgaG9va3Ncblx0Y29uc3QgU3R5bGVQcm90byA9IENTU1N0eWxlRGVjbGFyYXRpb24ucHJvdG90eXBlO1xuXG5cdGNvbnN0IG9sZEdldFAgPSBTdHlsZVByb3RvLmdldFByb3BlcnR5VmFsdWU7XG5cdFN0eWxlUHJvdG8uZ2V0UHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuXHRcdHRoaXMubGFzdFByb3BlcnR5U2VydmVkQnkgPSBmYWxzZTtcblx0XHRwcm9wZXJ0eSA9IHByb3BlcnR5LnRyaW0oKTtcblxuXHRcdC8qICpcblx0XHRpZiAodGhpcy5vd25pbmdFbGVtZW50KSB7XG5cdFx0XHRjb25zdCBpZVByb3BlcnR5ID0gJy1pZVZhci0nK3Byb3BlcnR5O1xuXHRcdFx0Y29uc3QgaWVQcm9wZXJ0eUltcG9ydGFudCA9ICctaWVWYXIt4p2XJytwcm9wZXJ0eTtcblx0XHRcdGxldCB2YWx1ZSA9IHRoaXNbaWVQcm9wZXJ0eUltcG9ydGFudF0gfHwgdGhpc1tpZVByb3BlcnR5XTtcblx0XHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIHRvZG8sIHRlc3QgaWYgc3ludGF4IHZhbGlkXG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LyogKi9cblxuXHRcdGlmIChwcm9wZXJ0eVswXSAhPT0gJy0nIHx8IHByb3BlcnR5WzFdICE9PSAnLScpIHJldHVybiBvbGRHZXRQLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0Y29uc3QgdW5kYXNoZWQgPSBwcm9wZXJ0eS5zdWJzdHIoMik7XG5cdFx0Y29uc3QgaWVQcm9wZXJ0eSA9ICctaWUtJyt1bmRhc2hlZDtcblx0XHRjb25zdCBpZVByb3BlcnR5SW1wb3J0YW50ID0gJy1pZS3inZcnK3VuZGFzaGVkO1xuXHRcdGxldCB2YWx1ZSA9IGRlY29kZVZhbHVlKHRoaXNbaWVQcm9wZXJ0eUltcG9ydGFudF0gfHwgdGhpc1tpZVByb3BlcnR5XSk7XG5cblx0XHRpZiAodGhpcy5jb21wdXRlZEZvcikgeyAvLyBjb21wdXRlZFN0eWxlXG5cdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhaW5oZXJpdGluZ0tleXdvcmRzW3ZhbHVlXSkge1xuXHRcdFx0XHQvL2lmIChyZWdIYXNWYXIudGVzdCh2YWx1ZSkpICAvLyB0b2RvOiB0byBpIG5lZWQgdGhpcyBjaGVjaz8hISEgaSB0aGluayBpdHMgZmFzdGVyIHdpdGhvdXRcblx0XHRcdFx0XHR2YWx1ZSA9IHN0eWxlQ29tcHV0ZVZhbHVlV2lkdGhWYXJzKHRoaXMsIHZhbHVlKTtcblx0XHRcdFx0dGhpcy5sYXN0UHJvcGVydHlTZXJ2ZWRCeSA9IHRoaXMuY29tcHV0ZWRGb3I7XG5cdFx0XHR9IGVsc2UgeyAvLyBpbmhlcml0ZWRcblx0XHRcdFx0aWYgKGluaGVyaXRpbmdLZXl3b3Jkc1t2YWx1ZV0gfHwgIXJlZ2lzdGVyW3Byb3BlcnR5XSB8fCByZWdpc3Rlcltwcm9wZXJ0eV0uaW5oZXJpdHMpIHtcblx0XHRcdFx0XHQvL2xldCBlbCA9IHRoaXMucHNldWRvRWx0ID8gdGhpcy5jb21wdXRlZEZvciA6IHRoaXMuY29tcHV0ZWRGb3IucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRsZXQgZWwgPSB0aGlzLmNvbXB1dGVkRm9yLnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0d2hpbGUgKGVsLm5vZGVUeXBlID09PSAxKSB7XG5cdFx0XHRcdFx0XHQvLyBob3cgc2xvd2VyIHdvdWxkIGl0IGJlIHRvIGdldENvbXB1dGVkU3R5bGUgZm9yIGV2ZXJ5IGVsZW1lbnQsIG5vdCBqdXN0IHdpdGggZGVmaW5lZCBpZUNQX3NldHRlcnNcblx0XHRcdFx0XHRcdGlmIChlbC5pZUNQX3NldHRlcnMgJiYgZWwuaWVDUF9zZXR0ZXJzW3Byb3BlcnR5XSkge1xuXHRcdFx0XHRcdFx0XHQvLyBpIGNvdWxkIG1ha2Vcblx0XHRcdFx0XHRcdFx0Ly8gdmFsdWUgPSBlbC5ub2RlVHlwZSA/IGdldENvbXB1dGVkU3R5bGUodGhpcy5jb21wdXRlZEZvci5wYXJlbnROb2RlKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KVxuXHRcdFx0XHRcdFx0XHQvLyBidXQgaSBmZWFyIHBlcmZvcm1hbmNlLCBzdHVwaWQ/XG5cdFx0XHRcdFx0XHRcdHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXHRcdFx0XHRcdFx0XHR2YXIgdG1wVmFsID0gZGVjb2RlVmFsdWUoc3R5bGVbaWVQcm9wZXJ0eUltcG9ydGFudF0gfHwgc3R5bGVbaWVQcm9wZXJ0eV0pO1xuXHRcdFx0XHRcdFx0XHRpZiAodG1wVmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBjYWxjdWxhdGVkIHN0eWxlIGZyb20gY3VycmVudCBlbGVtZW50IG5vdCBmcm9tIHRoZSBlbGVtZW50IHRoZSB2YWx1ZSB3YXMgaW5oZXJpdGVkIGZyb20hIChzdHlsZSwgdmFsdWUpXG5cdFx0XHRcdFx0XHRcdFx0Ly92YWx1ZSA9IHRtcFZhbDsgaWYgKHJlZ0hhc1Zhci50ZXN0KHRtcFZhbCkpICAvLyB0b2RvOiB0byBpIG5lZWQgdGhpcyBjaGVjaz8hISEgaSB0aGluayBpdHMgZmFzdGVyIHdpdGhvdXRcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlID0gc3R5bGVDb21wdXRlVmFsdWVXaWR0aFZhcnModGhpcywgdG1wVmFsKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RQcm9wZXJ0eVNlcnZlZEJ5ID0gZWw7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsID0gZWwucGFyZW50Tm9kZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZT09PSdpbml0aWFsJykgcmV0dXJuICcnO1xuXHRcdH1cblx0XHQvL2lmICgodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJ2luaXRpYWwnKSAmJiByZWdpc3Rlcltwcm9wZXJ0eV0pIHZhbHVlID0gcmVnaXN0ZXJbcHJvcGVydHldLmluaXRpYWxWYWx1ZTsgLy8gdG9kbz9cblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiByZWdpc3Rlcltwcm9wZXJ0eV0pIHZhbHVlID0gcmVnaXN0ZXJbcHJvcGVydHldLmluaXRpYWxWYWx1ZTtcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fTtcblx0Y29uc3QgaW5oZXJpdGluZ0tleXdvcmRzID0ge2luaGVyaXQ6MSxyZXZlcnQ6MSx1bnNldDoxfTtcblxuXHRjb25zdCBvbGRTZXRQID0gU3R5bGVQcm90by5zZXRQcm9wZXJ0eTtcblx0U3R5bGVQcm90by5zZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUsIHByaW8pIHtcblx0XHRpZiAocHJvcGVydHlbMF0gIT09ICctJyB8fCBwcm9wZXJ0eVsxXSAhPT0gJy0nKSByZXR1cm4gb2xkU2V0UC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdGNvbnN0IGVsID0gdGhpcy5vd25pbmdFbGVtZW50O1xuXHRcdGlmIChlbCkge1xuXHRcdFx0aWYgKCFlbC5pZUNQX3NldHRlcnMpIGVsLmllQ1Bfc2V0dGVycyA9IHt9O1xuXHRcdFx0ZWwuaWVDUF9zZXR0ZXJzW3Byb3BlcnR5XSA9IDE7XG5cdFx0fVxuXHRcdHByb3BlcnR5ID0gJy1pZS0nKyhwcmlvPT09J2ltcG9ydGFudCc/J+Kdlyc6JycpICsgcHJvcGVydHkuc3Vic3RyKDIpO1xuXHRcdHRoaXMuY3NzVGV4dCArPSAnOyAnICsgcHJvcGVydHkgKyAnOicgKyBlbmNvZGVWYWx1ZSh2YWx1ZSkgKyAnOyc7XG5cdFx0Ly90aGlzW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdGVsID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgcmVkcmF3U3R5bGVTaGVldHMoKTtcblx0XHRlbCAmJiBkcmF3VHJlZShlbCk7IC8vIGl0cyBkZWxheWVkIGludGVybmFsXG5cdH07XG5cblxuXHQvKlxuXHR2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU3R5bGVQcm90bywgJ2Nzc1RleHQnKTtcblx0dmFyIGNzc1RleHRHZXR0ZXIgPSBkZXNjcmlwdG9yLmdldDtcblx0dmFyIGNzc1RleHRTZXR0ZXIgPSBkZXNjcmlwdG9yLnNldDtcblx0Ly8gZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIFx0Y29uc3Qgc3R5bGUgPSBzdHlsZUdldHRlci5jYWxsKHRoaXMpO1xuXHQvLyBcdHN0eWxlLm93bmluZ0VsZW1lbnQgPSB0aGlzO1xuXHQvLyBcdHJldHVybiBzdHlsZTtcblx0Ly8gfVxuXHRkZXNjcmlwdG9yLnNldCA9IGZ1bmN0aW9uIChjc3MpIHtcblx0XHR2YXIgZWwgPSB0aGlzLm93bmluZ0VsZW1lbnQ7XG5cdFx0aWYgKGVsKSB7XG5cdFx0XHRjc3MgPSByZXdyaXRlQ3NzKCd7Jytjc3MpLnN1YnN0cigxKTtcblx0XHRcdGNzc1RleHRTZXR0ZXIuY2FsbCh0aGlzLCBjc3MpO1xuXHRcdFx0dmFyIGZvdW5kID0gcGFyc2VSZXdyaXR0ZW5TdHlsZSh0aGlzKTtcblx0XHRcdGlmIChmb3VuZC5nZXR0ZXJzKSBhZGRHZXR0ZXJFbGVtZW50KGVsLCBmb3VuZC5nZXR0ZXJzLCAnJXN0eWxlQXR0cicpO1xuXHRcdFx0aWYgKGZvdW5kLnNldHRlcnMpIGFkZFNldHRlckVsZW1lbnQoZWwsIGZvdW5kLnNldHRlcnMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gY3NzVGV4dFNldHRlci5jYWxsKHRoaXMsIGNzcyk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFN0eWxlUHJvdG8sICdjc3NUZXh0JywgZGVzY3JpcHRvcik7XG5cdCovXG5cblxuXHRpZiAoIXdpbmRvdy5DU1MpIHdpbmRvdy5DU1MgPSB7fTtcblx0Y29uc3QgcmVnaXN0ZXIgPSB7fVxuXHRDU1MucmVnaXN0ZXJQcm9wZXJ0eSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHJlZ2lzdGVyW29wdGlvbnMubmFtZV0gPSBvcHRpb25zO1xuXHR9XG5cblx0Ly8gZml4IFwiaW5pdGlhbFwiIGtleXdvcmQgd2l0aCBnZW5lcmF0ZWQgY3VzdG9tIHByb3BlcnRpZXMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZCBhZCBhbGwgYnkgaWUsIHNob3VsZCBpIG1ha2UgYSBzZXBhcmF0ZSBcImluaGVyaXRcIi1wb2x5ZmlsbD9cblx0Lypcblx0Y29uc3QgY29tcHV0ZWQgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcblx0Y29uc3QgaW5pdGlhbHMgPSB7fTtcblx0Zm9yIChsZXQgaSBpbiBjb21wdXRlZCkge1xuXHRcdGluaXRpYWxzW2kucmVwbGFjZSgvKFtBLVpdKS8sIGZ1bmN0aW9uKHgpeyByZXR1cm4gJy0nK3gudG9Mb3dlckNhc2UoeCkgfSldID0gY29tcHV0ZWRbaV07XG5cdH1cblx0aW5pdGlhbHNbJ2Rpc3BsYXknXSA9ICdpbmxpbmUnO1xuXHQqL1xuXG5cdC8vIHV0aWxzXG5cdGZ1bmN0aW9uIGZldGNoQ3NzKHVybCwgY2FsbGJhY2spIHtcblx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHJlcXVlc3Qub3BlbignR0VUJywgdXJsKTtcblx0XHRyZXF1ZXN0Lm92ZXJyaWRlTWltZVR5cGUoJ3RleHQvY3NzJyk7XG5cdFx0cmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XG5cdFx0XHRcdGNhbGxiYWNrKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJlcXVlc3Quc2VuZCgpO1xuXHR9XG5cbn0oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=