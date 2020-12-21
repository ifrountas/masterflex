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

module.exports = __webpack_require__(/*! C:\laragon\www\ilioupolinews\wp-content\themes\myfirsttheme\src\assets\js\function.ie11.vars.js */"./src/assets/js/function.ie11.vars.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbi5pZTExLnZhcnMuanMiXSwibmFtZXMiOlsidGVzdEVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5VmFsdWUiLCJtc01hdGNoZXNTZWxlY3RvciIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJtYXRjaGVzIiwibGlzdGVuZXJzIiwicm9vdCIsIk9ic2VydmVyIiwicXNhIiwiZWwiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwib25FbGVtZW50IiwiY2FsbGJhY2siLCJsaXN0ZW5lciIsImVsZW1lbnRzIiwiV2Vha01hcCIsImVscyIsImkiLCJzZXQiLCJjYWxsIiwicHVzaCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJjaGVja011dGF0aW9ucyIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiY2hlY2tMaXN0ZW5lciIsInRhcmdldCIsImxvYWRlZCIsIkFycmF5IiwiYXBwbHkiLCJoYXMiLCJjaGVja0xpc3RlbmVycyIsImluc2lkZSIsIm11dGF0aW9ucyIsImoiLCJtdXRhdGlvbiIsIm5vZGVzIiwiYWRkZWROb2RlcyIsIm5vZGVUeXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvcHlQcm9wZXJ0eSIsInByb3AiLCJmcm9tIiwidG8iLCJkZXNjIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJIVE1MRWxlbWVudCIsIlNWR1N0eWxlRWxlbWVudCIsImdldCIsImFsbCIsInN0eWxlU2hlZXRzIiwic2hlZXQiLCJvd25lck5vZGUiLCJyZWdGaW5kU2V0dGVycyIsInJlZ0ZpbmRHZXR0ZXJzIiwicmVnUnVsZUlFR2V0dGVycyIsInJlZ1J1bGVJRVNldHRlcnMiLCJyZWdQc2V1ZG9zIiwiZmV0Y2hDc3MiLCJocmVmIiwiY3NzIiwibmV3Q3NzIiwicmV3cml0ZUNzcyIsInJlbFRvQWJzIiwiZGlzYWJsZWQiLCJtZWRpYSIsInNldEF0dHJpYnV0ZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJhY3RpdmF0ZVN0eWxlRWxlbWVudCIsImZvdW5kU3R5bGUiLCJpZUNQX3BvbHlmaWxsZWQiLCJpZUNQX2VsZW1lbnRTaGVldCIsImlubmVySFRNTCIsImdldEF0dHJpYnV0ZSIsInN1YnN0ciIsImNzc1RleHQiLCJmb3VuZCIsInBhcnNlUmV3cml0dGVuU3R5bGUiLCJnZXR0ZXJzIiwiYWRkR2V0dGVyRWxlbWVudCIsInNldHRlcnMiLCJhZGRTZXR0ZXJFbGVtZW50IiwiYmFzZSIsInJlcGxhY2UiLCIkMCIsIiQxIiwidHJpbSIsIm1hdGNoIiwiJDIiLCIkMyIsIiQ0IiwiaW1wb3J0YW50IiwiZW5jb2RlVmFsdWUiLCJ2YWx1ZSIsImtleXdvcmRzIiwiaW5pdGlhbCIsImluaGVyaXQiLCJyZXZlcnQiLCJ1bnNldCIsImRlY29kZVZhbHVlIiwidW5kZWZpbmVkIiwidHJpbW1lZCIsInN0eWxlc19vZl9nZXR0ZXJfcHJvcGVydGllcyIsIm1hdGNoZXNHZXR0ZXJzIiwicHJvcE5hbWUiLCJzbGljZSIsIm1hdGNoZXNTZXR0ZXJzIiwieCIsInNwbGl0IiwicHJvcFZhbHVlIiwicnVsZXMiLCJydWxlIiwiYWRkR2V0dGVyc1NlbGVjdG9yIiwic2VsZWN0b3JUZXh0IiwiYWRkU2V0dGVyc1NlbGVjdG9yIiwicGFyZW50UnVsZSIsIm1lZGlhVGV4dCIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsImRyYXdUcmVlIiwiZG9jdW1lbnRFbGVtZW50IiwicmVkcmF3U3R5bGVTaGVldHMiLCJwcm9wZXJ0aWVzIiwic2VsZWN0b3JBZGRQc2V1ZG9MaXN0ZW5lcnMiLCJ1blBzZXVkbyIsImRyYXdFbGVtZW50Iiwic2VsZWN0b3JzIiwiaWVDUFNlbGVjdG9ycyIsInBhcnRzIiwicHNldWRvIiwicHJvcFZhbHMiLCJpZUNQX3NldHRlcnMiLCJzdHlsZXMiLCJvd25pbmdFbGVtZW50Iiwic3R5bGVDb21wdXRlVmFsdWVXaWR0aFZhcnMiLCJnZXRDb21wdXRlZFN0eWxlIiwicHNldWRvcyIsImhvdmVyIiwib24iLCJvZmYiLCJmb2N1cyIsImFjdGl2ZSIsImxlbmd0aCIsImVuZGluZyIsInNlbCIsImRyYXdUcmVlRXZlbnQiLCJDU1NBY3RpdmUiLCJzZXRUaW1lb3V0IiwiYWN0aXZlRWxlbWVudCIsImV2dCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInVuaXF1ZUNvdW50ZXIiLCJfZHJhd0VsZW1lbnQiLCJpZUNQX3VuaXF1ZSIsImNsYXNzTGlzdCIsImFkZCIsInZhbHVlV2l0aFZhciIsImRldGFpbHMiLCJpdGVtIiwiYWxsQnlSb290IiwiZWxlbWVudFNldENzcyIsImllQ1Bfc3R5bGVFbCIsInN0eWxlRWwiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJoYXNBdHRyaWJ1dGUiLCJkcmF3UXVldWUiLCJTZXQiLCJjb2xsZWN0aW5nIiwiZHJhd2luZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZvckVhY2giLCJjbGVhciIsImZpbmRWYXJzIiwic3RyIiwiY2IiLCJsZXZlbCIsIm9wZW5lZExldmVsIiwibGFzdFBvaW50IiwibmV3U3RyIiwiY2hhciIsImluc2lkZUNhbGMiLCJzdWJzdHJpbmciLCJ2YXJpYWJsZSIsImZhbGxiYWNrIiwiaW5kZXhPZiIsInZhbHVlV2l0aFZhcnMiLCJsYXN0UHJvcGVydHlTZXJ2ZWRCeSIsIm9ic2VydmVyIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZXMiLCJvbGRIYXNoIiwibG9jYXRpb24iLCJoYXNoIiwibmV3RWwiLCJnZXRFbGVtZW50QnlJZCIsIm9sZEVsIiwiZGVzY3JpcHRvciIsInN0eWxlR2V0dGVyIiwib3JpZ2luYWxHZXRDb21wdXRlZCIsIndpbmRvdyIsImFyZ3VtZW50cyIsImNvbXB1dGVkRm9yIiwiU3R5bGVQcm90byIsIkNTU1N0eWxlRGVjbGFyYXRpb24iLCJvbGRHZXRQIiwicHJvcGVydHkiLCJ1bmRhc2hlZCIsImllUHJvcGVydHkiLCJpZVByb3BlcnR5SW1wb3J0YW50IiwiaW5oZXJpdGluZ0tleXdvcmRzIiwicmVnaXN0ZXIiLCJpbmhlcml0cyIsInRtcFZhbCIsImluaXRpYWxWYWx1ZSIsIm9sZFNldFAiLCJwcmlvIiwiQ1NTIiwicmVnaXN0ZXJQcm9wZXJ0eSIsIm9wdGlvbnMiLCJuYW1lIiwidXJsIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm92ZXJyaWRlTWltZVR5cGUiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxDQUFDLFlBQVk7QUFDWixlQURZLENBR1o7O0FBQ0EsTUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtB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QUNBOzs7Ozs7OztBQVNBOzs7QUFDQSxXQUFTcEssUUFBVCxDQUFrQnNLLEdBQWxCLEVBQXVCdk4sUUFBdkIsRUFBaUM7QUFDaEMsUUFBSXdOLE9BQU8sR0FBRyxJQUFJQyxjQUFKLEVBQWQ7QUFDQUQsV0FBTyxDQUFDRSxJQUFSLENBQWEsS0FBYixFQUFvQkgsR0FBcEI7QUFDQUMsV0FBTyxDQUFDRyxnQkFBUixDQUF5QixVQUF6Qjs7QUFDQUgsV0FBTyxDQUFDSSxNQUFSLEdBQWlCLFlBQVk7QUFDNUIsVUFBSUosT0FBTyxDQUFDSyxNQUFSLElBQWtCLEdBQWxCLElBQXlCTCxPQUFPLENBQUNLLE1BQVIsR0FBaUIsR0FBOUMsRUFBbUQ7QUFDbEQ3TixnQkFBUSxDQUFDd04sT0FBTyxDQUFDTSxZQUFULENBQVI7QUFDQTtBQUNELEtBSkQ7O0FBS0FOLFdBQU8sQ0FBQ08sSUFBUjtBQUNBO0FBRUQsQ0EvckJBLEVBQUQsQyIsImZpbGUiOiJmdW5jdGlvbi5pZTExLnZhcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvKiEgaWUxMUN1c3RvbVByb3BlcnRpZXMuanMgdjMuMC42IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdC5pby9malhNTiAqL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly8gY2hlY2sgZm9yIHN1cHBvcnRcclxuXHR2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG5cdHRlc3RFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS14JywgJ3knKTtcclxuXHRpZiAodGVzdEVsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0teCcpID09PSAneScgfHwgIXRlc3RFbC5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuXHRpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcclxuXHJcbiAgICB2YXIgbGlzdGVuZXJzID0gW10sXHJcbiAgICAgICAgcm9vdCA9IGRvY3VtZW50LFxyXG4gICAgICAgIE9ic2VydmVyO1xyXG5cclxuXHRmdW5jdGlvbiBxc2EoZWwsIHNlbGVjdG9yKXtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHJldHVybiBlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHQvLyBjb25zb2xlLndhcm4oJ3RoZSBTZWxlY3RvciAnK3NlbGVjdG9yKycgY2FuIG5vdCBiZSBwYXJzZWQnKTtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fVxyXG5cdH1cclxuICAgIGZ1bmN0aW9uIG9uRWxlbWVudCAoc2VsZWN0b3IsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0ge1xyXG4gICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgZWxlbWVudHM6IG5ldyBXZWFrTWFwKCksXHJcbiAgICAgICAgfTtcclxuXHRcdHZhciBlbHMgPSBxc2Eocm9vdCwgbGlzdGVuZXIuc2VsZWN0b3IpLCBpPTAsIGVsO1xyXG5cdFx0d2hpbGUgKGVsID0gZWxzW2krK10pIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIuZWxlbWVudHMuc2V0KGVsLCB0cnVlKTtcclxuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChlbCwgZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKCFPYnNlcnZlcikge1xyXG4gICAgICAgICAgICBPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNoZWNrTXV0YXRpb25zKTtcclxuICAgICAgICAgICAgT2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyLCB0YXJnZXQpIHtcclxuICAgICAgICB2YXIgaSA9IDAsIGVsLCBlbHMgPSBbXTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRhcmdldCAmJiB0YXJnZXQubWF0Y2hlcyhsaXN0ZW5lci5zZWxlY3RvcikgJiYgZWxzLnB1c2godGFyZ2V0KTtcclxuXHRcdH0gY2F0Y2goZSkge31cclxuICAgICAgICBpZiAobG9hZGVkKSB7IC8vIG9rPyBjaGVjayBpbnNpZGUgbm9kZSBvbiBpbm5lckhUTUwgLSBvbmx5IHdoZW4gbG9hZGVkXHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVscywgcXNhKHRhcmdldCB8fCByb290LCBsaXN0ZW5lci5zZWxlY3RvcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoZWwgPSBlbHNbaSsrXSkge1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuZWxlbWVudHMuaGFzKGVsKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmVsZW1lbnRzLnNldChlbCx0cnVlKTtcclxuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChlbCwgZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoZWNrTGlzdGVuZXJzKGluc2lkZSkge1xyXG4gICAgICAgIHZhciBpID0gMCwgbGlzdGVuZXI7XHJcbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyID0gbGlzdGVuZXJzW2krK10pIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIsIGluc2lkZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGVja011dGF0aW9ucyhtdXRhdGlvbnMpIHtcclxuXHRcdHZhciBqID0gMCwgaSwgbXV0YXRpb24sIG5vZGVzLCB0YXJnZXQ7XHJcbiAgICAgICAgd2hpbGUgKG11dGF0aW9uID0gbXV0YXRpb25zW2orK10pIHtcclxuICAgICAgICAgICAgbm9kZXMgPSBtdXRhdGlvbi5hZGRlZE5vZGVzLCBpID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCA9IG5vZGVzW2krK10pIHRhcmdldC5ub2RlVHlwZSA9PT0gMSAmJiBjaGVja0xpc3RlbmVycyh0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9hZGVkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxvYWRlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcblx0Ly8gc3ZnIHBvbHlmaWxsc1xyXG5cdGZ1bmN0aW9uIGNvcHlQcm9wZXJ0eShwcm9wLCBmcm9tLCB0byl7XHJcblx0XHR2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnJvbSwgcHJvcCk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIHByb3AsIGRlc2MpO1xyXG5cdH1cclxuXHRpZiAoISgnY2xhc3NMaXN0JyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcclxuXHRcdGNvcHlQcm9wZXJ0eSgnY2xhc3NMaXN0JywgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSk7XHJcblx0fVxyXG5cdGlmICghKCdpbm5lckhUTUwnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG5cdFx0Y29weVByb3BlcnR5KCdpbm5lckhUTUwnLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEVsZW1lbnQucHJvdG90eXBlKTtcclxuXHR9XHJcblx0aWYgKCEoJ3NoZWV0JyBpbiBTVkdTdHlsZUVsZW1lbnQucHJvdG90eXBlKSkge1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFNWR1N0eWxlRWxlbWVudC5wcm90b3R5cGUsICdzaGVldCcsIHtcclxuXHRcdFx0Z2V0OmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dmFyIGFsbCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzLCBpPTAsIHNoZWV0O1xyXG5cdFx0XHRcdHdoaWxlIChzaGVldD1hbGxbaSsrXSkge1xyXG5cdFx0XHRcdFx0aWYgKHNoZWV0Lm93bmVyTm9kZSA9PT0gdGhpcykgcmV0dXJuIHNoZWV0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIG1haW4gbG9naWNcclxuXHJcblx0Ly8gY2FjaGVkIHJlZ2V4cHMsIGJldHRlciBwZXJmb3JtYW5jZVxyXG5cdGNvbnN0IHJlZ0ZpbmRTZXR0ZXJzID0gLyhbXFxzeztdKSgtLShbQS1aYS16MC05LV9dKilcXHMqOihbXjshfXtdKykoIWltcG9ydGFudCk/KSg/PVxccyooWzt9XXwkKSkvZztcclxuXHRjb25zdCByZWdGaW5kR2V0dGVycyA9IC8oW3s7XVxccyopKFtBLVphLXowLTktX10rXFxzKjpbXjt9e10qdmFyXFwoW14hO317XSspKCFpbXBvcnRhbnQpPyg/PVxccyooWzt9JF18JCkpL2c7XHJcblx0Y29uc3QgcmVnUnVsZUlFR2V0dGVycyA9IC8taWVWYXItKFteOl0rKTovZ1xyXG5cdGNvbnN0IHJlZ1J1bGVJRVNldHRlcnMgPSAvLWllLShbXn07XSspL2dcclxuXHQvL2NvbnN0IHJlZ0hhc1ZhciA9IC92YXJcXCgvO1xyXG5cdGNvbnN0IHJlZ1BzZXVkb3MgPSAvOihob3ZlcnxhY3RpdmV8Zm9jdXN8dGFyZ2V0fDpiZWZvcmV8OmFmdGVyfDpmaXJzdC1sZXR0ZXJ8OmZpcnN0LWxpbmUpLztcclxuXHJcblx0b25FbGVtZW50KCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nLCBmdW5jdGlvbiAoZWwpIHtcclxuXHRcdGZldGNoQ3NzKGVsLmhyZWYsIGZ1bmN0aW9uIChjc3MpIHtcclxuXHRcdFx0dmFyIG5ld0NzcyA9IHJld3JpdGVDc3MoY3NzKTtcclxuXHRcdFx0aWYgKGNzcyA9PT0gbmV3Q3NzKSByZXR1cm47XHJcblx0XHRcdG5ld0NzcyA9IHJlbFRvQWJzKGVsLmhyZWYsIG5ld0Nzcyk7XHJcblx0XHRcdGVsLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuXHRcdFx0aWYgKGVsLm1lZGlhKSBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgZWwubWVkaWEpO1xyXG5cdFx0XHRlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgZWwpO1xyXG5cdFx0XHRhY3RpdmF0ZVN0eWxlRWxlbWVudChzdHlsZSwgbmV3Q3NzKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBmb3VuZFN0eWxlKGVsKXtcclxuXHRcdGlmIChlbC5pZUNQX3BvbHlmaWxsZWQpIHJldHVybjtcclxuXHRcdGlmIChlbC5pZUNQX2VsZW1lbnRTaGVldCkgcmV0dXJuO1xyXG5cdFx0dmFyIGNzcyA9IGVsLmlubmVySFRNTDtcclxuXHRcdHZhciBuZXdDc3MgPSByZXdyaXRlQ3NzKGNzcyk7XHJcblx0XHRpZiAoY3NzID09PSBuZXdDc3MpIHJldHVybjtcclxuXHRcdGFjdGl2YXRlU3R5bGVFbGVtZW50KGVsLCBuZXdDc3MpO1xyXG5cdH1cclxuXHRvbkVsZW1lbnQoJ3N0eWxlJywgZm91bmRTdHlsZSk7XHJcblx0Ly8gaW1tZWRpYXRlLCB0byBwYXNzIHczYy10ZXN0cywgYnVkIGl0cyBhIGJhZCBpZGVhXHJcblx0Ly8gYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJyxmdW5jdGlvbihlKXsgZS50YXJnZXQudGFnTmFtZSA9PT0gJ1NUWUxFJyAmJiBmb3VuZFN0eWxlKGUudGFyZ2V0KTsgfSk7XHJcblxyXG5cclxuXHJcblx0b25FbGVtZW50KCdbaWUtc3R5bGVdJywgZnVuY3Rpb24gKGVsKSB7XHJcblx0XHR2YXIgbmV3Q3NzID0gcmV3cml0ZUNzcygneycrZWwuZ2V0QXR0cmlidXRlKCdpZS1zdHlsZScpKS5zdWJzdHIoMSk7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ICs9ICc7JysgbmV3Q3NzO1xyXG5cdFx0dmFyIGZvdW5kID0gcGFyc2VSZXdyaXR0ZW5TdHlsZShlbC5zdHlsZSk7XHJcblx0XHRpZiAoZm91bmQuZ2V0dGVycykgYWRkR2V0dGVyRWxlbWVudChlbCwgZm91bmQuZ2V0dGVycywgJyVzdHlsZUF0dHInKTtcclxuXHRcdGlmIChmb3VuZC5zZXR0ZXJzKSBhZGRTZXR0ZXJFbGVtZW50KGVsLCBmb3VuZC5zZXR0ZXJzKTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gcmVsVG9BYnMoYmFzZSwgY3NzKSB7XHJcblx0XHRyZXR1cm4gY3NzLnJlcGxhY2UoL3VybFxcKChbXildKylcXCkvZywgZnVuY3Rpb24oJDAsICQxKXtcclxuXHRcdFx0JDEgPSAkMS50cmltKCkucmVwbGFjZSgvKF5bJ1wiXXxbJ1wiXSQpL2csJycpO1xyXG5cdFx0XHRpZiAoJDEubWF0Y2goL14oW2Etel0rOnxcXC8pLykpIHJldHVybiAkMDtcclxuXHRcdFx0YmFzZSA9IGJhc2UucmVwbGFjZSgvXFw/LiovLCcnKTtcclxuXHRcdFx0cmV0dXJuICd1cmwoJysgYmFzZSArICcuLy4uLycgKyAkMSArJyknO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBpZSBoYXMgYSBidWcsIHdoZXJlIHVua25vd24gcHJvcGVydGllcyBhdCBwc2V1ZG8tc2VsZWN0b3JzIGFyZSBjb21wdXRlZCBhdCB0aGUgZWxlbWVudFxyXG5cdC8vICNlbDo6YWZ0ZXIgeyAtY29udGVudDoneCc7IH0gPT4gZ2V0Q29tcHV0ZWRTdHlsZShlbClbJy1jb250ZW50J10gPT0gJ3gnXHJcblx0Ly8gc2hvdWxkIHdlIGFkZCBzb21ldGhpbmcgbGlrZSAtaWVWYXItcHNldWRvX2FmdGVyLWNvbnRlbnQ6J3gnP1xyXG5cdGZ1bmN0aW9uIHJld3JpdGVDc3MoY3NzKSB7XHJcblxyXG5cdFx0LyogdW5jb21tZW50IGlmIHNwZWMgZmluaXNoZWQgYW5kIG5lZWRlZCBieSBzb21lb25lXHJcblx0XHRjc3MgPSBjc3MucmVwbGFjZSgvQHByb3BlcnR5IChbXntdKyl7KFtefV0rKX0vLCBmdW5jdGlvbigkMCwgcHJvcCwgYm9keSl7XHJcblx0XHRcdHByb3AgPSBwcm9wLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgZGVjbGFyYXRpb24gPSB7bmFtZTpwcm9wfTtcclxuXHRcdFx0Ym9keS5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24ocGFpcil7XHJcblx0XHRcdFx0Y29uc3QgeCA9IHBhaXIuc3BsaXQoJzonKTtcclxuXHRcdFx0XHRpZiAoeFsxXSkgZGVjbGFyYXRpb25bIHhbMF0udHJpbSgpIF0gPSB4WzFdO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZGVjbGFyYXRpb25bJ2luaGVyaXRzJ10gPSBkZWNsYXJhdGlvblsnaW5oZXJpdHMnXS50cmltKCk9PT0ndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdGRlY2xhcmF0aW9uWydpbml0aWFsVmFsdWUnXSA9IGRlY2xhcmF0aW9uWydpbml0aWFsLXZhbHVlJ107XHJcblx0XHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGRlY2xhcmF0aW9uKVxyXG5cdFx0XHRyZXR1cm4gJy8qXFxuIEBwcm9wZXJ0eSAuLi4gcmVtb3ZlZCBcXG4qJysnLyc7XHJcblx0XHR9KTtcclxuXHRcdCovXHJcblx0XHRyZXR1cm4gY3NzLnJlcGxhY2UocmVnRmluZFNldHRlcnMsIGZ1bmN0aW9uKCQwLCAkMSwgJDIsICQzLCAkNCwgaW1wb3J0YW50KXtcclxuXHRcdFx0cmV0dXJuICQxKyctaWUtJysoaW1wb3J0YW50PyfinZcnOicnKSskMysnOicrZW5jb2RlVmFsdWUoJDQpO1xyXG5cdFx0fSkucmVwbGFjZShyZWdGaW5kR2V0dGVycywgZnVuY3Rpb24oJDAsICQxLCAkMiwgaW1wb3J0YW50KXtcclxuXHRcdFx0cmV0dXJuICQxKyctaWVWYXItJysoaW1wb3J0YW50PyfinZcnOicnKSskMisnOyAnKyQyOyAvLyBrZWVwIHRoZSBvcmlnaW5hbCwgc28gY2hhaW5pbmcgd29ya3MgXCItLXg6dmFyKC0teSlcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGVuY29kZVZhbHVlKHZhbHVlKXtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKC8gL2csJ+KQoycpO1xyXG5cdH1cclxuXHRjb25zdCBrZXl3b3JkcyA9IHtpbml0aWFsOjEsaW5oZXJpdDoxLHJldmVydDoxLHVuc2V0OjF9O1xyXG5cdGZ1bmN0aW9uIGRlY29kZVZhbHVlKHZhbHVlKXtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdGlmICh2YWx1ZT09PXVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cdFx0dmFsdWUgPSAgdmFsdWUucmVwbGFjZSgv4pCjL2csJyAnKTtcclxuXHRcdGNvbnN0IHRyaW1tZWQgPSB2YWx1ZS50cmltKCk7XHJcblx0XHRpZiAoa2V5d29yZHNbdHJpbW1lZF0pIHJldHVybiB0cmltbWVkO1xyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH1cclxuXHJcblx0Ly8gYmV0YVxyXG5cdGNvbnN0IHN0eWxlc19vZl9nZXR0ZXJfcHJvcGVydGllcyA9IHt9O1xyXG5cclxuXHRmdW5jdGlvbiBwYXJzZVJld3JpdHRlblN0eWxlKHN0eWxlKSB7IC8vIGxlc3MgbWVtb3J5IHRoZW4gcGFyYW1ldGVyIGNzc1RleHQ/XHJcblxyXG5cdFx0Ly8gYmV0YVxyXG5cdFx0c3R5bGVbJ3otaW5kZXgnXTsgLy8gaWUxMSBjYW4gYWNjZXNzIHVua25vd24gcHJvcGVydGllcyBpbiBzdHlsZXNoZWV0cyBvbmx5IGlmIGFjY2Vzc2VkIGEgZGFzaGVkIGtub3duIHByb3BlcnR5XHJcblxyXG5cdFx0Y29uc3QgY3NzVGV4dCA9IHN0eWxlLmNzc1RleHQ7XHJcblx0XHR2YXIgbWF0Y2hlc0dldHRlcnMgPSBjc3NUZXh0Lm1hdGNoKHJlZ1J1bGVJRUdldHRlcnMpLCBqLCBtYXRjaDtcclxuXHRcdGlmIChtYXRjaGVzR2V0dGVycykge1xyXG5cdFx0XHR2YXIgZ2V0dGVycyA9IFtdOyAvLyBlZy4gW2JvcmRlcixjb2xvcl1cclxuXHRcdFx0Zm9yIChqID0gMDsgbWF0Y2ggPSBtYXRjaGVzR2V0dGVyc1tqKytdOykge1xyXG5cdFx0XHRcdGxldCBwcm9wTmFtZSA9IG1hdGNoLnNsaWNlKDcsIC0xKTtcclxuXHRcdFx0XHRpZiAocHJvcE5hbWVbMF0gPT09ICfinZcnKSBwcm9wTmFtZSA9IHByb3BOYW1lLnN1YnN0cigxKTtcclxuXHRcdFx0XHRnZXR0ZXJzLnB1c2gocHJvcE5hbWUpO1xyXG5cclxuXHRcdFx0XHQvLyBiZXRhXHJcblx0XHRcdFx0aWYgKCFzdHlsZXNfb2ZfZ2V0dGVyX3Byb3BlcnRpZXNbcHJvcE5hbWVdKSBzdHlsZXNfb2ZfZ2V0dGVyX3Byb3BlcnRpZXNbcHJvcE5hbWVdID0gW107XHJcblx0XHRcdFx0c3R5bGVzX29mX2dldHRlcl9wcm9wZXJ0aWVzW3Byb3BOYW1lXS5wdXNoKHN0eWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIG1hdGNoZXNTZXR0ZXJzID0gY3NzVGV4dC5tYXRjaChyZWdSdWxlSUVTZXR0ZXJzKTtcclxuXHRcdGlmIChtYXRjaGVzU2V0dGVycykge1xyXG5cdFx0XHR2YXIgc2V0dGVycyA9IHt9OyAvLyBlZy4gWy0tY29sb3I6I2ZmZiwgLS1wYWRkaW5nOjEwcHhdO1xyXG5cdFx0XHRmb3IgKGogPSAwOyBtYXRjaCA9IG1hdGNoZXNTZXR0ZXJzW2orK107KSB7XHJcblx0XHRcdFx0bGV0IHggPSBtYXRjaC5zdWJzdHIoNCkuc3BsaXQoJzonKTtcclxuXHRcdFx0XHRsZXQgcHJvcE5hbWUgPSB4WzBdO1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsdWUgPSB4WzFdO1xyXG5cdFx0XHRcdGlmIChwcm9wTmFtZVswXSA9PT0gJ+KdlycpIHByb3BOYW1lID0gcHJvcE5hbWUuc3Vic3RyKDEpO1xyXG5cdFx0XHRcdHNldHRlcnNbcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge2dldHRlcnM6Z2V0dGVycywgc2V0dGVyczpzZXR0ZXJzfTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gYWN0aXZhdGVTdHlsZUVsZW1lbnQoc3R5bGUsIGNzcykge1xyXG5cdFx0c3R5bGUuaW5uZXJIVE1MID0gY3NzO1xyXG5cdFx0c3R5bGUuaWVDUF9wb2x5ZmlsbGVkID0gdHJ1ZTtcclxuXHRcdHZhciBydWxlcyA9IHN0eWxlLnNoZWV0LnJ1bGVzLCBpPTAsIHJ1bGU7IC8vIGNzc1J1bGVzID0gQ1NTUnVsZUxpc3QsIHJ1bGVzID0gTVNDU1NSdWxlTGlzdFxyXG5cdFx0d2hpbGUgKHJ1bGUgPSBydWxlc1tpKytdKSB7XHJcblx0XHRcdGNvbnN0IGZvdW5kID0gcGFyc2VSZXdyaXR0ZW5TdHlsZShydWxlLnN0eWxlKTtcclxuXHRcdFx0aWYgKGZvdW5kLmdldHRlcnMpIGFkZEdldHRlcnNTZWxlY3RvcihydWxlLnNlbGVjdG9yVGV4dCwgZm91bmQuZ2V0dGVycyk7XHJcblx0XHRcdGlmIChmb3VuZC5zZXR0ZXJzKSBhZGRTZXR0ZXJzU2VsZWN0b3IocnVsZS5zZWxlY3RvclRleHQsIGZvdW5kLnNldHRlcnMpO1xyXG5cclxuXHRcdFx0Ly8gbWVkaWFRdWVyaWVzOiByZWRyYXcgdGhlIGhvbGUgZG9jdW1lbnRcclxuXHRcdFx0Ly8gYmV0dGVyIGFkZCBldmVudHMgZm9yIGVhY2ggZWxlbWVudD9cclxuXHRcdFx0Y29uc3QgbWVkaWEgPSBydWxlLnBhcmVudFJ1bGUgJiYgcnVsZS5wYXJlbnRSdWxlLm1lZGlhICYmIHJ1bGUucGFyZW50UnVsZS5tZWRpYS5tZWRpYVRleHQ7XHJcblx0XHRcdGlmIChtZWRpYSAmJiAoZm91bmQuZ2V0dGVycyB8fCBmb3VuZC5zZXR0ZXJzKSkge1xyXG5cdFx0XHRcdG1hdGNoTWVkaWEobWVkaWEpLmFkZExpc3RlbmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRkcmF3VHJlZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGJldGFcclxuXHRcdHJlZHJhd1N0eWxlU2hlZXRzKClcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZEdldHRlcnNTZWxlY3RvcihzZWxlY3RvciwgcHJvcGVydGllcykge1xyXG5cdFx0c2VsZWN0b3JBZGRQc2V1ZG9MaXN0ZW5lcnMoc2VsZWN0b3IpO1xyXG5cdFx0b25FbGVtZW50KHVuUHNldWRvKHNlbGVjdG9yKSwgZnVuY3Rpb24gKGVsKSB7XHJcblx0XHRcdGFkZEdldHRlckVsZW1lbnQoZWwsIHByb3BlcnRpZXMsIHNlbGVjdG9yKTtcclxuXHRcdFx0ZHJhd0VsZW1lbnQoZWwpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGFkZEdldHRlckVsZW1lbnQoZWwsIHByb3BlcnRpZXMsIHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgaT0wLCBwcm9wLCBqO1xyXG5cdFx0Y29uc3Qgc2VsZWN0b3JzID0gc2VsZWN0b3Iuc3BsaXQoJywnKTsgLy8gc3BsaXQgZ3JvdXBlZCBzZWxlY3RvcnNcclxuXHRcdGVsLnNldEF0dHJpYnV0ZSgnaWVjcC1uZWVkZWQnLCB0cnVlKTtcclxuXHRcdGlmICghZWwuaWVDUFNlbGVjdG9ycykgZWwuaWVDUFNlbGVjdG9ycyA9IHt9O1xyXG5cdFx0d2hpbGUgKHByb3AgPSBwcm9wZXJ0aWVzW2krK10pIHtcclxuXHRcdFx0Zm9yIChqID0gMDsgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaisrXTspIHtcclxuXHRcdFx0XHRjb25zdCBwYXJ0cyA9IHNlbGVjdG9yLnRyaW0oKS5zcGxpdCgnOjonKTtcclxuXHRcdFx0XHRpZiAoIWVsLmllQ1BTZWxlY3RvcnNbcHJvcF0pIGVsLmllQ1BTZWxlY3RvcnNbcHJvcF0gPSBbXTtcclxuXHRcdFx0XHRlbC5pZUNQU2VsZWN0b3JzW3Byb3BdLnB1c2goe1xyXG5cdFx0XHRcdFx0c2VsZWN0b3I6IHBhcnRzWzBdLFxyXG5cdFx0XHRcdFx0cHNldWRvOiBwYXJ0c1sxXSA/ICc6OicgKyBwYXJ0c1sxXSA6ICcnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gYWRkU2V0dGVyc1NlbGVjdG9yKHNlbGVjdG9yLCBwcm9wVmFscykge1xyXG5cdFx0c2VsZWN0b3JBZGRQc2V1ZG9MaXN0ZW5lcnMoc2VsZWN0b3IpO1xyXG5cdFx0b25FbGVtZW50KHVuUHNldWRvKHNlbGVjdG9yKSwgZnVuY3Rpb24gKGVsKSB7XHJcblx0XHRcdGFkZFNldHRlckVsZW1lbnQoZWwsIHByb3BWYWxzKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBhZGRTZXR0ZXJFbGVtZW50KGVsLCBwcm9wVmFscykge1xyXG5cdFx0aWYgKCFlbC5pZUNQX3NldHRlcnMpIGVsLmllQ1Bfc2V0dGVycyA9IHt9O1xyXG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBwcm9wVmFscykgeyAvLyBlZy4ge2ZvbzojZmZmLCBiYXI6YmF6fVxyXG5cdFx0XHRlbC5pZUNQX3NldHRlcnNbJy0tJyArIHByb3BdID0gMTtcclxuXHRcdH1cclxuXHRcdGRyYXdUcmVlKGVsKTtcclxuXHR9XHJcblxyXG5cdC8vYmV0YVxyXG5cdGZ1bmN0aW9uIHJlZHJhd1N0eWxlU2hlZXRzKCkge1xyXG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBzdHlsZXNfb2ZfZ2V0dGVyX3Byb3BlcnRpZXMpIHtcclxuXHRcdFx0bGV0IHN0eWxlcyA9IHN0eWxlc19vZl9nZXR0ZXJfcHJvcGVydGllc1twcm9wXTtcclxuXHRcdFx0Zm9yICh2YXIgaT0wLCBzdHlsZTsgc3R5bGU9c3R5bGVzW2krK107KSB7XHJcblx0XHRcdFx0aWYgKHN0eWxlLm93bmluZ0VsZW1lbnQpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdHZhciB2YWx1ZSA9IHN0eWxlWyctaWVWYXItJytwcm9wXTtcclxuXHRcdFx0XHRpZiAoIXZhbHVlKSBjb250aW51ZTtcclxuXHRcdFx0XHR2YWx1ZSA9IHN0eWxlQ29tcHV0ZVZhbHVlV2lkdGhWYXJzKGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSwgdmFsdWUpO1xyXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gJycpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRzdHlsZVtwcm9wXSA9IHZhbHVlO1xyXG5cdFx0XHRcdH0gY2F0Y2goZSkge31cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0IHBzZXVkb3MgPSB7XHJcblx0XHRob3Zlcjp7XHJcblx0XHRcdG9uOidtb3VzZWVudGVyJyxcclxuXHRcdFx0b2ZmOidtb3VzZWxlYXZlJ1xyXG5cdFx0fSxcclxuXHRcdGZvY3VzOntcclxuXHRcdFx0b246J2ZvY3VzaW4nLFxyXG5cdFx0XHRvZmY6J2ZvY3Vzb3V0J1xyXG5cdFx0fSxcclxuXHRcdGFjdGl2ZTp7XHJcblx0XHRcdG9uOidDU1NBY3RpdmF0ZScsXHJcblx0XHRcdG9mZjonQ1NTRGVhY3RpdmF0ZSdcclxuXHRcdH0sXHJcblx0fTtcclxuXHRmdW5jdGlvbiBzZWxlY3RvckFkZFBzZXVkb0xpc3RlbmVycyhzZWxlY3Rvcil7XHJcblx0XHQvLyBpZTExIGhhcyB0aGUgc3RyYW5nZSBiZWhhdm9pciwgdGhhdCBncm91cHMgb2Ygc2VsZWN0b3JzIGFyZSBpbmRpdmlkdWFsIHJ1bGVzLCBidXQgc3RhcnRpbmcgd2l0aCB0aGUgZnVsbCBzZWxlY3RvcjpcclxuXHRcdC8vIHRkLCB0aCwgYnV0dG9uIHsgY29sb3I6cmVkIH0gcmVzdWx0cyBpbiB0aGlzIHJ1bGVzOlxyXG5cdFx0Ly8gXCJ0ZCwgdGgsIGJ1dHRvblwiIHwgXCJ0aCwgdGhcIiB8IFwidGhcIlxyXG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zcGxpdCgnLCcpWzBdO1xyXG5cdFx0Zm9yICh2YXIgcHNldWRvIGluIHBzZXVkb3MpIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gc2VsZWN0b3Iuc3BsaXQoJzonK3BzZXVkbyk7XHJcblx0XHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0dmFyIGVuZGluZyA9IHBhcnRzWzFdLm1hdGNoKC9eW15cXHNdKi8pOyAvLyBlbmRpbmcgZWxlbWVudHBhcnQgb2Ygc2VsZWN0b3IgKHVzZWQgZm9yIG5vdCg6YWN0aXZlKSlcclxuXHRcdFx0XHRsZXQgc2VsID0gdW5Qc2V1ZG8ocGFydHNbMF0rZW5kaW5nKTtcclxuXHRcdFx0XHRjb25zdCBsaXN0ZW5lcnMgPSBwc2V1ZG9zW3BzZXVkb107XHJcblx0XHRcdFx0b25FbGVtZW50KHNlbCwgZnVuY3Rpb24gKGVsKSB7XHJcblx0XHRcdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKGxpc3RlbmVycy5vbiwgZHJhd1RyZWVFdmVudCk7XHJcblx0XHRcdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKGxpc3RlbmVycy5vZmYsIGRyYXdUcmVlRXZlbnQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGxldCBDU1NBY3RpdmUgPSBudWxsO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsZnVuY3Rpb24oZSl7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG5cdFx0XHRcdHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuXHRcdFx0XHRldnQuaW5pdEV2ZW50KCdDU1NBY3RpdmF0ZScsIHRydWUsIHRydWUpO1xyXG5cdFx0XHRcdENTU0FjdGl2ZSA9IGUudGFyZ2V0O1xyXG5cdFx0XHRcdENTU0FjdGl2ZS5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsZnVuY3Rpb24oKXtcclxuXHRcdGlmIChDU1NBY3RpdmUpIHtcclxuXHRcdFx0dmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG5cdFx0XHRldnQuaW5pdEV2ZW50KCdDU1NEZWFjdGl2YXRlJywgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRcdENTU0FjdGl2ZS5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcblx0XHRcdENTU0FjdGl2ZSA9IG51bGw7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIHVuUHNldWRvKHNlbGVjdG9yKXtcclxuXHRcdHJldHVybiBzZWxlY3Rvci5yZXBsYWNlKHJlZ1BzZXVkb3MsJycpLnJlcGxhY2UoJzpub3QoKScsJycpO1xyXG5cdH1cclxuXHJcblx0dmFyIHVuaXF1ZUNvdW50ZXIgPSAwO1xyXG5cclxuXHQvKiBvbGQgKlxyXG5cdGZ1bmN0aW9uIF9kcmF3RWxlbWVudChlbCkge1xyXG5cdFx0aWYgKCFlbC5pZUNQX3VuaXF1ZSkgeyAvLyB1c2UgZWwudW5pcXVlTnVtYmVyPyBidXQgbmVlZHMgY2xhc3MgZm9yIHRoZSBjc3Mtc2VsZWN0b3IgPT4gdGVzdCBwZXJmb3JtYW5jZVxyXG5cdFx0XHRlbC5pZUNQX3VuaXF1ZSA9ICsrdW5pcXVlQ291bnRlcjtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaWVjcC11JyArIGVsLmllQ1BfdW5pcXVlKTtcclxuXHRcdH1cclxuXHRcdHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xyXG5cdFx0aWYgKGVsLmllQ1Bfc2hlZXQpIHdoaWxlIChlbC5pZUNQX3NoZWV0LnJ1bGVzWzBdKSBlbC5pZUNQX3NoZWV0LmRlbGV0ZVJ1bGUoMCk7XHJcblx0XHRmb3IgKHZhciBwcm9wIGluIGVsLmllQ1BTZWxlY3RvcnMpIHtcclxuXHRcdFx0dmFyIGltcG9ydGFudCA9IHN0eWxlWyctaWVWYXIt4p2XJyArIHByb3BdO1xyXG5cdFx0XHRsZXQgdmFsdWVXaXRoVmFyID0gaW1wb3J0YW50IHx8IHN0eWxlWyctaWVWYXItJyArIHByb3BdO1xyXG5cdFx0XHRpZiAoIXZhbHVlV2l0aFZhcikgY29udGludWU7IC8vIHRvZG8sIHdoYXQgaWYgJzAnXHJcblxyXG5cdFx0XHR2YXIgZGV0YWlscyA9IHt9O1xyXG5cdFx0XHR2YXIgdmFsdWUgPSBzdHlsZUNvbXB1dGVWYWx1ZVdpZHRoVmFycyhzdHlsZSwgdmFsdWVXaXRoVmFyLCBkZXRhaWxzKTtcclxuXHJcblx0XHRcdGlmIChpbXBvcnRhbnQpIHZhbHVlICs9ICcgIWltcG9ydGFudCc7XHJcblx0XHRcdGZvciAodmFyIGk9MCwgaXRlbTsgaXRlbT1lbC5pZUNQU2VsZWN0b3JzW3Byb3BdW2krK107KSB7IC8vIHRvZG86IHNwbGl0IGFuZCB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lP1xyXG5cdFx0XHRcdGlmIChpdGVtLnNlbGVjdG9yID09PSAnJXN0eWxlQXR0cicpIHtcclxuXHRcdFx0XHRcdGVsLnN0eWxlW3Byb3BdID0gdmFsdWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHQvLyBiZXRhXHJcblx0XHRcdFx0XHRpZiAoIWltcG9ydGFudCAmJiBkZXRhaWxzLmFsbEJ5Um9vdCAhPT0gZmFsc2UpIGNvbnRpbnVlOyAvLyBkb250IGhhdmUgdG8gZHJhdyByb290LXByb3BlcnRpZXNcclxuXHJcblx0XHRcdFx0XHQvL2xldCBzZWxlY3RvciA9IGl0ZW0uc2VsZWN0b3IucmVwbGFjZSgvPj8gXFwuW14gXSsvLCAnICcsIGl0ZW0uc2VsZWN0b3IpOyAvLyB0b2RvOiB0cnkgdG8gZXF1YWxpemUgc3BlY2lmaWNpdHlcclxuXHRcdFx0XHRcdGxldCBzZWxlY3RvciA9IGl0ZW0uc2VsZWN0b3I7XHJcblx0XHRcdFx0XHRlbGVtZW50U3R5bGVTaGVldChlbCkuaW5zZXJ0UnVsZShzZWxlY3RvciArICcuaWVjcC11JyArIGVsLmllQ1BfdW5pcXVlICsgaXRlbS5wc2V1ZG8gKyAnIHsnICsgcHJvcCArICc6JyArIHZhbHVlICsgJ30nLCAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gZWxlbWVudFN0eWxlU2hlZXQoZWwpe1xyXG5cdFx0aWYgKCFlbC5pZUNQX3NoZWV0KSB7XHJcblx0XHRcdGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5cdFx0XHRzdHlsZUVsLmllQ1BfZWxlbWVudFNoZWV0ID0gMTtcclxuXHRcdFx0Ly9lbC5hcHBlbmRDaGlsZChzdHlsZUVsKTsgLy8geWVzISBzZWxmLWNsb3NpbmcgdGFncyBjYW4gaGF2ZSBzdHlsZSBhcyBjaGlsZHJlbiwgYnV0IC0gaWYgaSBzZXQgaW5uZXJIVE1MLCB0aGUgc3R5bGVzaGVldCBpcyBsb3N0XHJcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcblx0XHRcdGVsLmllQ1Bfc2hlZXQgPSBzdHlsZUVsLnNoZWV0O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGVsLmllQ1Bfc2hlZXQ7XHJcblx0fVxyXG5cclxuXHQvKiAqL1xyXG5cdGZ1bmN0aW9uIF9kcmF3RWxlbWVudChlbCkge1xyXG5cdFx0aWYgKCFlbC5pZUNQX3VuaXF1ZSkgeyAvLyB1c2UgZWwudW5pcXVlTnVtYmVyPyBidXQgbmVlZHMgY2xhc3MgZm9yIHRoZSBjc3Mtc2VsZWN0b3IgPT4gdGVzdCBwZXJmb3JtYW5jZVxyXG5cdFx0XHRlbC5pZUNQX3VuaXF1ZSA9ICsrdW5pcXVlQ291bnRlcjtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaWVjcC11JyArIGVsLmllQ1BfdW5pcXVlKTtcclxuXHRcdH1cclxuXHRcdHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xyXG5cdFx0bGV0IGNzcyA9ICcnO1xyXG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBlbC5pZUNQU2VsZWN0b3JzKSB7XHJcblx0XHRcdHZhciBpbXBvcnRhbnQgPSBzdHlsZVsnLWllVmFyLeKdlycgKyBwcm9wXTtcclxuXHRcdFx0bGV0IHZhbHVlV2l0aFZhciA9IGltcG9ydGFudCB8fCBzdHlsZVsnLWllVmFyLScgKyBwcm9wXTtcclxuXHRcdFx0aWYgKCF2YWx1ZVdpdGhWYXIpIGNvbnRpbnVlOyAvLyB0b2RvLCB3aGF0IGlmICcwJ1xyXG5cdFx0XHR2YXIgZGV0YWlscyA9IHt9O1xyXG5cdFx0XHR2YXIgdmFsdWUgPSBzdHlsZUNvbXB1dGVWYWx1ZVdpZHRoVmFycyhzdHlsZSwgdmFsdWVXaXRoVmFyLCBkZXRhaWxzKTtcclxuXHRcdFx0Ly9pZiAodmFsdWU9PT0naW5pdGlhbCcpIHZhbHVlID0gaW5pdGlhbHNbcHJvcF07XHJcblx0XHRcdGlmIChpbXBvcnRhbnQpIHZhbHVlICs9ICcgIWltcG9ydGFudCc7XHJcblx0XHRcdGZvciAodmFyIGk9MCwgaXRlbTsgaXRlbT1lbC5pZUNQU2VsZWN0b3JzW3Byb3BdW2krK107KSB7IC8vIHRvZG86IHNwbGl0IGFuZCB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lP1xyXG5cdFx0XHRcdGlmIChpdGVtLnNlbGVjdG9yID09PSAnJXN0eWxlQXR0cicpIHtcclxuXHRcdFx0XHRcdGVsLnN0eWxlW3Byb3BdID0gdmFsdWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHQvLyBiZXRhXHJcblx0XHRcdFx0XHRpZiAoIWltcG9ydGFudCAmJiBkZXRhaWxzLmFsbEJ5Um9vdCAhPT0gZmFsc2UpIGNvbnRpbnVlOyAvLyBkb250IGhhdmUgdG8gZHJhdyByb290LXByb3BlcnRpZXNcclxuXHJcblx0XHRcdFx0XHQvL2xldCBzZWxlY3RvciA9IGl0ZW0uc2VsZWN0b3IucmVwbGFjZSgvPj8gXFwuW14gXSsvLCAnICcsIGl0ZW0uc2VsZWN0b3IpOyAvLyB0b2RvOiB0cnkgdG8gZXF1YWxpemUgc3BlY2lmaWNpdHlcclxuXHRcdFx0XHRcdGxldCBzZWxlY3RvciA9IGl0ZW0uc2VsZWN0b3I7XHJcblx0XHRcdFx0XHRjc3MgKz0gc2VsZWN0b3IgKyAnLmllY3AtdScgKyBlbC5pZUNQX3VuaXF1ZSArIGl0ZW0ucHNldWRvICsgJ3snICsgcHJvcCArICc6JyArIHZhbHVlICsgJ31cXG4nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxlbWVudFNldENzcyhlbCwgY3NzKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gZWxlbWVudFNldENzcyhlbCwgY3NzKXtcclxuXHRcdGlmICghZWwuaWVDUF9zdHlsZUVsICYmIGNzcykge1xyXG5cdFx0XHRjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuXHRcdFx0c3R5bGVFbC5pZUNQX2VsZW1lbnRTaGVldCA9IDE7XHJcblx0XHRcdC8vZWwuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7IC8vIHllcyEgc2VsZi1jbG9zaW5nIHRhZ3MgY2FuIGhhdmUgc3R5bGUgYXMgY2hpbGRyZW4sIGJ1dCAtIGlmIGkgc2V0IGlubmVySFRNTCwgdGhlIHN0eWxlc2hlZXQgaXMgbG9zdFxyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xyXG5cdFx0XHRlbC5pZUNQX3N0eWxlRWwgPSBzdHlsZUVsO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGVsLmllQ1Bfc3R5bGVFbCkgZWwuaWVDUF9zdHlsZUVsLmlubmVySFRNTCA9IGNzcztcclxuXHR9XHJcblx0LyogKi9cclxuXHJcblx0ZnVuY3Rpb24gZHJhd1RyZWUodGFyZ2V0KSB7XHJcblx0XHRpZiAoIXRhcmdldCkgcmV0dXJuO1xyXG5cdFx0dmFyIGVscyA9IHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdbaWVjcC1uZWVkZWRdJyk7XHJcblx0XHRpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdpZWNwLW5lZWRlZCcpKSBkcmF3RWxlbWVudCh0YXJnZXQpOyAvLyBzZWxmXHJcblx0XHRmb3IgKHZhciBpID0gMCwgZWw7IGVsID0gZWxzW2krK107KSBkcmF3RWxlbWVudChlbCk7IC8vIHRyZWVcclxuXHR9XHJcblx0Ly8gZHJhdyBxdWV1ZVxyXG5cdGxldCBkcmF3UXVldWUgPSBuZXcgU2V0KCk7XHJcblx0bGV0IGNvbGxlY3RpbmcgPSBmYWxzZTtcclxuXHRsZXQgZHJhd2luZyA9IGZhbHNlO1xyXG5cdGZ1bmN0aW9uIGRyYXdFbGVtZW50KGVsKXtcclxuXHRcdGRyYXdRdWV1ZS5hZGQoZWwpO1xyXG5cdFx0aWYgKGNvbGxlY3RpbmcpIHJldHVybjtcclxuXHRcdGNvbGxlY3RpbmcgPSB0cnVlO1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7XHJcblx0XHQvL3NldEltbWVkaWF0ZShmdW5jdGlvbigpe1xyXG5cdFx0XHRjb2xsZWN0aW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYXdpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmF3UXVldWUuZm9yRWFjaChfZHJhd0VsZW1lbnQpO1xyXG5cdFx0XHRkcmF3UXVldWUuY2xlYXIoKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyAvLyBtdXRhdGlvbk9ic2VydmVyIHdpbGwgdHJpZ2dlciBkZWxheWVkLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2lsbCBtaXNzIHNvbWUgY2hhbmdlc1xyXG5cdFx0XHRcdGRyYXdpbmcgPSBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gZHJhd1RyZWVFdmVudChlKSB7XHJcblx0XHRkcmF3VHJlZShlLnRhcmdldClcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZpbmRWYXJzKHN0ciwgY2IpeyAvLyBjc3MgdmFsdWUgcGFyc2VyXHJcblx0XHRsZXQgbGV2ZWw9MCwgb3BlbmVkTGV2ZWw9bnVsbCwgbGFzdFBvaW50PTAsIG5ld1N0ciA9ICcnLCBpPTAsIGNoYXIsIGluc2lkZUNhbGM7XHJcblx0XHR3aGlsZSAoY2hhcj1zdHJbaSsrXSkge1xyXG5cdFx0XHRpZiAoY2hhciA9PT0gJygnKSB7XHJcblx0XHRcdFx0KytsZXZlbDtcclxuXHRcdFx0XHRpZiAob3BlbmVkTGV2ZWwgPT09IG51bGwgJiYgc3RyW2ktNF0rc3RyW2ktM10rc3RyW2ktMl0gPT09ICd2YXInKSB7XHJcblx0XHRcdFx0XHRvcGVuZWRMZXZlbCA9IGxldmVsO1xyXG5cdFx0XHRcdFx0bmV3U3RyICs9IHN0ci5zdWJzdHJpbmcobGFzdFBvaW50LCBpLTQpO1xyXG5cdFx0XHRcdFx0bGFzdFBvaW50ID0gaTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHN0cltpLTVdK3N0cltpLTRdK3N0cltpLTNdK3N0cltpLTJdID09PSAnY2FsYycpIHtcclxuXHRcdFx0XHRcdGluc2lkZUNhbGMgPSBsZXZlbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGNoYXIgPT09ICcpJyAmJiBvcGVuZWRMZXZlbCA9PT0gbGV2ZWwpIHtcclxuXHRcdFx0XHRsZXQgdmFyaWFibGUgPSBzdHIuc3Vic3RyaW5nKGxhc3RQb2ludCwgaS0xKS50cmltKCksIGZhbGxiYWNrO1xyXG5cdFx0XHRcdGxldCB4ID0gdmFyaWFibGUuaW5kZXhPZignLCcpO1xyXG5cdFx0XHRcdGlmICh4IT09LTEpIHtcclxuXHRcdFx0XHRcdGZhbGxiYWNrID0gdmFyaWFibGUuc2xpY2UoeCsxKTtcclxuXHRcdFx0XHRcdHZhcmlhYmxlID0gdmFyaWFibGUuc2xpY2UoMCx4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmV3U3RyICs9IGNiKHZhcmlhYmxlLCBmYWxsYmFjaywgaW5zaWRlQ2FsYyk7XHJcblx0XHRcdFx0bGFzdFBvaW50ID0gaTtcclxuXHRcdFx0XHRvcGVuZWRMZXZlbCA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGNoYXIgPT09ICcpJykge1xyXG5cdFx0XHRcdC0tbGV2ZWw7XHJcblx0XHRcdFx0aWYgKGluc2lkZUNhbGMgPT09IGxldmVsKSBpbnNpZGVDYWxjID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0bmV3U3RyICs9IHN0ci5zdWJzdHJpbmcobGFzdFBvaW50KTtcclxuXHRcdHJldHVybiBuZXdTdHI7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHN0eWxlQ29tcHV0ZVZhbHVlV2lkdGhWYXJzKHN0eWxlLCB2YWx1ZVdpdGhWYXJzLCBkZXRhaWxzKXtcclxuXHRcdHJldHVybiBmaW5kVmFycyh2YWx1ZVdpdGhWYXJzLCBmdW5jdGlvbih2YXJpYWJsZSwgZmFsbGJhY2ssIGluc2lkZUNhbGMpe1xyXG5cdFx0XHR2YXIgdmFsdWUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHZhcmlhYmxlKTtcclxuXHRcdFx0aWYgKGluc2lkZUNhbGMpIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXmNhbGNcXCgvLCAnKCcpOyAvLyBwcmV2ZW50IG5lc3RlZCBjYWxjXHJcblx0XHRcdGlmIChkZXRhaWxzICYmIHN0eWxlLmxhc3RQcm9wZXJ0eVNlcnZlZEJ5ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIGRldGFpbHMuYWxsQnlSb290ID0gZmFsc2U7XHJcblx0XHRcdGlmICh2YWx1ZT09PScnICYmIGZhbGxiYWNrKSB2YWx1ZSA9IHN0eWxlQ29tcHV0ZVZhbHVlV2lkdGhWYXJzKHN0eWxlLCBmYWxsYmFjaywgZGV0YWlscyk7XHJcblx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gbXV0YXRpb24gbGlzdGVuZXJcclxuXHR2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcclxuXHRcdGlmIChkcmF3aW5nKSByZXR1cm47XHJcblx0XHRmb3IgKHZhciBpPTAsIG11dGF0aW9uOyBtdXRhdGlvbj1tdXRhdGlvbnNbaSsrXTspIHtcclxuXHRcdFx0aWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdpZWNwLW5lZWRlZCcpIGNvbnRpbnVlOyAvLyB3aHk/XHJcblx0XHRcdC8vIHJlY2hlY2sgYWxsIHNlbGVjdG9ycyBpZiBpdCB0YXJnZXRzIG5ldyBlbGVtZW50cz9cclxuXHRcdFx0ZHJhd1RyZWUobXV0YXRpb24udGFyZ2V0KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LHthdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xyXG5cdH0pXHJcblxyXG5cdC8vIDp0YXJnZXQgbGlzdGVuZXJcclxuXHR2YXIgb2xkSGFzaCA9IGxvY2F0aW9uLmhhc2hcclxuXHRhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJyxmdW5jdGlvbihlKXtcclxuXHRcdHZhciBuZXdFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcclxuXHRcdGlmIChuZXdFbCkge1xyXG5cdFx0XHR2YXIgb2xkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbGRIYXNoLnN1YnN0cigxKSk7XHJcblx0XHRcdGRyYXdUcmVlKG5ld0VsKTtcclxuXHRcdFx0ZHJhd1RyZWUob2xkRWwpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZHJhd1RyZWUoZG9jdW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0b2xkSGFzaCA9IGxvY2F0aW9uLmhhc2g7XHJcblx0fSk7XHJcblxyXG5cdC8vIGFkZCBvd25pbmdFbGVtZW50IHRvIEVsZW1lbnQuc3R5bGVcclxuXHR2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnc3R5bGUnKTtcclxuXHR2YXIgc3R5bGVHZXR0ZXIgPSBkZXNjcmlwdG9yLmdldDtcclxuXHRkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHN0eWxlID0gc3R5bGVHZXR0ZXIuY2FsbCh0aGlzKTtcclxuXHRcdHN0eWxlLm93bmluZ0VsZW1lbnQgPSB0aGlzO1xyXG5cdFx0cmV0dXJuIHN0eWxlO1xyXG5cdH1cclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnc3R5bGUnLCBkZXNjcmlwdG9yKTtcclxuXHJcblx0Ly8gYWRkIGNvbXB1dGVkRm9yIHRvIGNvbXB1dGVkIHN0eWxlLW9iamVjdHNcclxuXHR2YXIgb3JpZ2luYWxHZXRDb21wdXRlZCA9IGdldENvbXB1dGVkU3R5bGU7XHJcblx0d2luZG93LmdldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbiAoZWwpIHtcclxuXHRcdHZhciBzdHlsZSA9IG9yaWdpbmFsR2V0Q29tcHV0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHN0eWxlLmNvbXB1dGVkRm9yID0gZWw7XHJcblx0XHQvL3N0eWxlLnBzZXVkb0VsdCA9IHBzZXVkb0VsdDsgLy9ub3QgbmVlZGVkIGF0IHRoZSBtb21lbnRcclxuXHRcdHJldHVybiBzdHlsZTtcclxuXHR9XHJcblxyXG5cdC8vIGdldFByb3BlcnR5VmFsdWUgLyBzZXRQcm9wZXJ0eSBob29rc1xyXG5cdGNvbnN0IFN0eWxlUHJvdG8gPSBDU1NTdHlsZURlY2xhcmF0aW9uLnByb3RvdHlwZTtcclxuXHJcblx0Y29uc3Qgb2xkR2V0UCA9IFN0eWxlUHJvdG8uZ2V0UHJvcGVydHlWYWx1ZTtcclxuXHRTdHlsZVByb3RvLmdldFByb3BlcnR5VmFsdWUgPSBmdW5jdGlvbiAocHJvcGVydHkpIHtcclxuXHRcdHRoaXMubGFzdFByb3BlcnR5U2VydmVkQnkgPSBmYWxzZTtcclxuXHRcdHByb3BlcnR5ID0gcHJvcGVydHkudHJpbSgpO1xyXG5cclxuXHRcdC8qICpcclxuXHRcdGlmICh0aGlzLm93bmluZ0VsZW1lbnQpIHtcclxuXHRcdFx0Y29uc3QgaWVQcm9wZXJ0eSA9ICctaWVWYXItJytwcm9wZXJ0eTtcclxuXHRcdFx0Y29uc3QgaWVQcm9wZXJ0eUltcG9ydGFudCA9ICctaWVWYXIt4p2XJytwcm9wZXJ0eTtcclxuXHRcdFx0bGV0IHZhbHVlID0gdGhpc1tpZVByb3BlcnR5SW1wb3J0YW50XSB8fCB0aGlzW2llUHJvcGVydHldO1xyXG5cdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdC8vIHRvZG8sIHRlc3QgaWYgc3ludGF4IHZhbGlkXHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvKiAqL1xyXG5cclxuXHRcdGlmIChwcm9wZXJ0eVswXSAhPT0gJy0nIHx8IHByb3BlcnR5WzFdICE9PSAnLScpIHJldHVybiBvbGRHZXRQLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRjb25zdCB1bmRhc2hlZCA9IHByb3BlcnR5LnN1YnN0cigyKTtcclxuXHRcdGNvbnN0IGllUHJvcGVydHkgPSAnLWllLScrdW5kYXNoZWQ7XHJcblx0XHRjb25zdCBpZVByb3BlcnR5SW1wb3J0YW50ID0gJy1pZS3inZcnK3VuZGFzaGVkO1xyXG5cdFx0bGV0IHZhbHVlID0gZGVjb2RlVmFsdWUodGhpc1tpZVByb3BlcnR5SW1wb3J0YW50XSB8fCB0aGlzW2llUHJvcGVydHldKTtcclxuXHJcblx0XHRpZiAodGhpcy5jb21wdXRlZEZvcikgeyAvLyBjb21wdXRlZFN0eWxlXHJcblx0XHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFpbmhlcml0aW5nS2V5d29yZHNbdmFsdWVdKSB7XHJcblx0XHRcdFx0Ly9pZiAocmVnSGFzVmFyLnRlc3QodmFsdWUpKSAgLy8gdG9kbzogdG8gaSBuZWVkIHRoaXMgY2hlY2s/ISEhIGkgdGhpbmsgaXRzIGZhc3RlciB3aXRob3V0XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHN0eWxlQ29tcHV0ZVZhbHVlV2lkdGhWYXJzKHRoaXMsIHZhbHVlKTtcclxuXHRcdFx0XHR0aGlzLmxhc3RQcm9wZXJ0eVNlcnZlZEJ5ID0gdGhpcy5jb21wdXRlZEZvcjtcclxuXHRcdFx0fSBlbHNlIHsgLy8gaW5oZXJpdGVkXHJcblx0XHRcdFx0aWYgKGluaGVyaXRpbmdLZXl3b3Jkc1t2YWx1ZV0gfHwgIXJlZ2lzdGVyW3Byb3BlcnR5XSB8fCByZWdpc3Rlcltwcm9wZXJ0eV0uaW5oZXJpdHMpIHtcclxuXHRcdFx0XHRcdC8vbGV0IGVsID0gdGhpcy5wc2V1ZG9FbHQgPyB0aGlzLmNvbXB1dGVkRm9yIDogdGhpcy5jb21wdXRlZEZvci5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0bGV0IGVsID0gdGhpcy5jb21wdXRlZEZvci5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0d2hpbGUgKGVsLm5vZGVUeXBlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdC8vIGhvdyBzbG93ZXIgd291bGQgaXQgYmUgdG8gZ2V0Q29tcHV0ZWRTdHlsZSBmb3IgZXZlcnkgZWxlbWVudCwgbm90IGp1c3Qgd2l0aCBkZWZpbmVkIGllQ1Bfc2V0dGVyc1xyXG5cdFx0XHRcdFx0XHRpZiAoZWwuaWVDUF9zZXR0ZXJzICYmIGVsLmllQ1Bfc2V0dGVyc1twcm9wZXJ0eV0pIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBpIGNvdWxkIG1ha2VcclxuXHRcdFx0XHRcdFx0XHQvLyB2YWx1ZSA9IGVsLm5vZGVUeXBlID8gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNvbXB1dGVkRm9yLnBhcmVudE5vZGUpLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpXHJcblx0XHRcdFx0XHRcdFx0Ly8gYnV0IGkgZmVhciBwZXJmb3JtYW5jZSwgc3R1cGlkP1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciB0bXBWYWwgPSBkZWNvZGVWYWx1ZShzdHlsZVtpZVByb3BlcnR5SW1wb3J0YW50XSB8fCBzdHlsZVtpZVByb3BlcnR5XSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRtcFZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjYWxjdWxhdGVkIHN0eWxlIGZyb20gY3VycmVudCBlbGVtZW50IG5vdCBmcm9tIHRoZSBlbGVtZW50IHRoZSB2YWx1ZSB3YXMgaW5oZXJpdGVkIGZyb20hIChzdHlsZSwgdmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHQvL3ZhbHVlID0gdG1wVmFsOyBpZiAocmVnSGFzVmFyLnRlc3QodG1wVmFsKSkgIC8vIHRvZG86IHRvIGkgbmVlZCB0aGlzIGNoZWNrPyEhISBpIHRoaW5rIGl0cyBmYXN0ZXIgd2l0aG91dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHN0eWxlQ29tcHV0ZVZhbHVlV2lkdGhWYXJzKHRoaXMsIHRtcFZhbCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RQcm9wZXJ0eVNlcnZlZEJ5ID0gZWw7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWwgPSBlbC5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodmFsdWU9PT0naW5pdGlhbCcpIHJldHVybiAnJztcclxuXHRcdH1cclxuXHRcdC8vaWYgKCh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnaW5pdGlhbCcpICYmIHJlZ2lzdGVyW3Byb3BlcnR5XSkgdmFsdWUgPSByZWdpc3Rlcltwcm9wZXJ0eV0uaW5pdGlhbFZhbHVlOyAvLyB0b2RvP1xyXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgcmVnaXN0ZXJbcHJvcGVydHldKSB2YWx1ZSA9IHJlZ2lzdGVyW3Byb3BlcnR5XS5pbml0aWFsVmFsdWU7XHJcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH07XHJcblx0Y29uc3QgaW5oZXJpdGluZ0tleXdvcmRzID0ge2luaGVyaXQ6MSxyZXZlcnQ6MSx1bnNldDoxfTtcclxuXHJcblx0Y29uc3Qgb2xkU2V0UCA9IFN0eWxlUHJvdG8uc2V0UHJvcGVydHk7XHJcblx0U3R5bGVQcm90by5zZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUsIHByaW8pIHtcclxuXHRcdGlmIChwcm9wZXJ0eVswXSAhPT0gJy0nIHx8IHByb3BlcnR5WzFdICE9PSAnLScpIHJldHVybiBvbGRTZXRQLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRjb25zdCBlbCA9IHRoaXMub3duaW5nRWxlbWVudDtcclxuXHRcdGlmIChlbCkge1xyXG5cdFx0XHRpZiAoIWVsLmllQ1Bfc2V0dGVycykgZWwuaWVDUF9zZXR0ZXJzID0ge307XHJcblx0XHRcdGVsLmllQ1Bfc2V0dGVyc1twcm9wZXJ0eV0gPSAxO1xyXG5cdFx0fVxyXG5cdFx0cHJvcGVydHkgPSAnLWllLScrKHByaW89PT0naW1wb3J0YW50Jz8n4p2XJzonJykgKyBwcm9wZXJ0eS5zdWJzdHIoMik7XHJcblx0XHR0aGlzLmNzc1RleHQgKz0gJzsgJyArIHByb3BlcnR5ICsgJzonICsgZW5jb2RlVmFsdWUodmFsdWUpICsgJzsnO1xyXG5cdFx0Ly90aGlzW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG5cdFx0ZWwgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiByZWRyYXdTdHlsZVNoZWV0cygpO1xyXG5cdFx0ZWwgJiYgZHJhd1RyZWUoZWwpOyAvLyBpdHMgZGVsYXllZCBpbnRlcm5hbFxyXG5cdH07XHJcblxyXG5cclxuXHQvKlxyXG5cdHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihTdHlsZVByb3RvLCAnY3NzVGV4dCcpO1xyXG5cdHZhciBjc3NUZXh0R2V0dGVyID0gZGVzY3JpcHRvci5nZXQ7XHJcblx0dmFyIGNzc1RleHRTZXR0ZXIgPSBkZXNjcmlwdG9yLnNldDtcclxuXHQvLyBkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uICgpIHtcclxuXHQvLyBcdGNvbnN0IHN0eWxlID0gc3R5bGVHZXR0ZXIuY2FsbCh0aGlzKTtcclxuXHQvLyBcdHN0eWxlLm93bmluZ0VsZW1lbnQgPSB0aGlzO1xyXG5cdC8vIFx0cmV0dXJuIHN0eWxlO1xyXG5cdC8vIH1cclxuXHRkZXNjcmlwdG9yLnNldCA9IGZ1bmN0aW9uIChjc3MpIHtcclxuXHRcdHZhciBlbCA9IHRoaXMub3duaW5nRWxlbWVudDtcclxuXHRcdGlmIChlbCkge1xyXG5cdFx0XHRjc3MgPSByZXdyaXRlQ3NzKCd7Jytjc3MpLnN1YnN0cigxKTtcclxuXHRcdFx0Y3NzVGV4dFNldHRlci5jYWxsKHRoaXMsIGNzcyk7XHJcblx0XHRcdHZhciBmb3VuZCA9IHBhcnNlUmV3cml0dGVuU3R5bGUodGhpcyk7XHJcblx0XHRcdGlmIChmb3VuZC5nZXR0ZXJzKSBhZGRHZXR0ZXJFbGVtZW50KGVsLCBmb3VuZC5nZXR0ZXJzLCAnJXN0eWxlQXR0cicpO1xyXG5cdFx0XHRpZiAoZm91bmQuc2V0dGVycykgYWRkU2V0dGVyRWxlbWVudChlbCwgZm91bmQuc2V0dGVycyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjc3NUZXh0U2V0dGVyLmNhbGwodGhpcywgY3NzKTtcclxuXHR9XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFN0eWxlUHJvdG8sICdjc3NUZXh0JywgZGVzY3JpcHRvcik7XHJcblx0Ki9cclxuXHJcblxyXG5cdGlmICghd2luZG93LkNTUykgd2luZG93LkNTUyA9IHt9O1xyXG5cdGNvbnN0IHJlZ2lzdGVyID0ge31cclxuXHRDU1MucmVnaXN0ZXJQcm9wZXJ0eSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cdFx0cmVnaXN0ZXJbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnM7XHJcblx0fVxyXG5cclxuXHQvLyBmaXggXCJpbml0aWFsXCIga2V5d29yZCB3aXRoIGdlbmVyYXRlZCBjdXN0b20gcHJvcGVydGllcywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkIGFkIGFsbCBieSBpZSwgc2hvdWxkIGkgbWFrZSBhIHNlcGFyYXRlIFwiaW5oZXJpdFwiLXBvbHlmaWxsP1xyXG5cdC8qXHJcblx0Y29uc3QgY29tcHV0ZWQgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcclxuXHRjb25zdCBpbml0aWFscyA9IHt9O1xyXG5cdGZvciAobGV0IGkgaW4gY29tcHV0ZWQpIHtcclxuXHRcdGluaXRpYWxzW2kucmVwbGFjZSgvKFtBLVpdKS8sIGZ1bmN0aW9uKHgpeyByZXR1cm4gJy0nK3gudG9Mb3dlckNhc2UoeCkgfSldID0gY29tcHV0ZWRbaV07XHJcblx0fVxyXG5cdGluaXRpYWxzWydkaXNwbGF5J10gPSAnaW5saW5lJztcclxuXHQqL1xyXG5cclxuXHQvLyB1dGlsc1xyXG5cdGZ1bmN0aW9uIGZldGNoQ3NzKHVybCwgY2FsbGJhY2spIHtcclxuXHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHRyZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCk7XHJcblx0XHRyZXF1ZXN0Lm92ZXJyaWRlTWltZVR5cGUoJ3RleHQvY3NzJyk7XHJcblx0XHRyZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJlcXVlc3Quc2VuZCgpO1xyXG5cdH1cclxuXHJcbn0oKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==