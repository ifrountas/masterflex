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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/wp-color-picker-alpha.js":
/*!************************************************!*\
  !*** ./src/assets/js/wp-color-picker-alpha.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**!
 * wp-color-picker-alpha
 *
 * Overwrite Automattic Iris for enabled Alpha Channel in wpColorPicker
 * Only run in input and is defined data alpha in true
 *
 * Version: 2.1.3
 * https://github.com/kallookoo/wp-color-picker-alpha
 * Licensed under the GPLv2 license.
 */
!function (t) {
  if (!t.wp.wpColorPicker.prototype._hasAlpha) {
    var o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==",
        r = '<div class="wp-picker-holder" />',
        e = '<div class="wp-picker-container" />',
        i = '<input type="button" class="button button-small" />',
        a = void 0 !== wpColorPickerL10n.current;
    if (a) var n = '<a tabindex="0" class="wp-color-result" />';else {
      n = '<button type="button" class="button wp-color-result" aria-expanded="false"><span class="wp-color-result-text"></span></button>';
      var l = "<label></label>",
          s = '<span class="screen-reader-text"></span>';
    }
    Color.fn.toString = function () {
      if (this._alpha < 1) return this.toCSS("rgba", this._alpha).replace(/\s+/g, "");
      var t = parseInt(this._color, 10).toString(16);
      return this.error ? "" : (t.length < 6 && (t = ("00000" + t).substr(-6)), "#" + t);
    }, t.widget("wp.wpColorPicker", t.wp.wpColorPicker, {
      _hasAlpha: !0,
      _create: function _create() {
        if (t.support.iris) {
          var p = this,
              c = p.element;
          if (t.extend(p.options, c.data()), "hue" === p.options.type) return p._createHueOnly();
          p.close = t.proxy(p.close, p), p.initialValue = c.val(), c.addClass("wp-color-picker"), a ? (c.hide().wrap(e), p.wrap = c.parent(), p.toggler = t(n).insertBefore(c).css({
            backgroundColor: p.initialValue
          }).attr("title", wpColorPickerL10n.pick).attr("data-current", wpColorPickerL10n.current), p.pickerContainer = t(r).insertAfter(c), p.button = t(i).addClass("hidden")) : (c.parent("label").length || (c.wrap(l), p.wrappingLabelText = t(s).insertBefore(c).text(wpColorPickerL10n.defaultLabel)), p.wrappingLabel = c.parent(), p.wrappingLabel.wrap(e), p.wrap = p.wrappingLabel.parent(), p.toggler = t(n).insertBefore(p.wrappingLabel).css({
            backgroundColor: p.initialValue
          }), p.toggler.find(".wp-color-result-text").text(wpColorPickerL10n.pick), p.pickerContainer = t(r).insertAfter(p.wrappingLabel), p.button = t(i)), p.options.defaultColor ? (p.button.addClass("wp-picker-default").val(wpColorPickerL10n.defaultString), a || p.button.attr("aria-label", wpColorPickerL10n.defaultAriaLabel)) : (p.button.addClass("wp-picker-clear").val(wpColorPickerL10n.clear), a || p.button.attr("aria-label", wpColorPickerL10n.clearAriaLabel)), a ? c.wrap('<span class="wp-picker-input-wrap" />').after(p.button) : (p.wrappingLabel.wrap('<span class="wp-picker-input-wrap hidden" />').after(p.button), p.inputWrapper = c.closest(".wp-picker-input-wrap")), c.iris({
            target: p.pickerContainer,
            hide: p.options.hide,
            width: p.options.width,
            mode: p.options.mode,
            palettes: p.options.palettes,
            change: function change(r, e) {
              p.options.alpha ? (p.toggler.css({
                "background-image": "url(" + o + ")"
              }), a ? p.toggler.html('<span class="color-alpha" />') : (p.toggler.css({
                position: "relative"
              }), 0 == p.toggler.find("span.color-alpha").length && p.toggler.append('<span class="color-alpha" />')), p.toggler.find("span.color-alpha").css({
                width: "30px",
                height: "28px",
                position: "absolute",
                top: 0,
                left: 0,
                "border-top-left-radius": "2px",
                "border-bottom-left-radius": "2px",
                background: e.color.toString()
              })) : p.toggler.css({
                backgroundColor: e.color.toString()
              }), t.isFunction(p.options.change) && p.options.change.call(this, r, e);
            }
          }), c.val(p.initialValue), p._addListeners(), p.options.hide || p.toggler.click();
        }
      },
      _addListeners: function _addListeners() {
        var o = this;
        o.wrap.on("click.wpcolorpicker", function (t) {
          t.stopPropagation();
        }), o.toggler.click(function () {
          o.toggler.hasClass("wp-picker-open") ? o.close() : o.open();
        }), o.element.on("change", function (r) {
          ("" === t(this).val() || o.element.hasClass("iris-error")) && (o.options.alpha ? (a && o.toggler.removeAttr("style"), o.toggler.find("span.color-alpha").css("backgroundColor", "")) : o.toggler.css("backgroundColor", ""), t.isFunction(o.options.clear) && o.options.clear.call(this, r));
        }), o.button.on("click", function (r) {
          t(this).hasClass("wp-picker-clear") ? (o.element.val(""), o.options.alpha ? (a && o.toggler.removeAttr("style"), o.toggler.find("span.color-alpha").css("backgroundColor", "")) : o.toggler.css("backgroundColor", ""), t.isFunction(o.options.clear) && o.options.clear.call(this, r), o.element.trigger("change")) : t(this).hasClass("wp-picker-default") && o.element.val(o.options.defaultColor).change();
        });
      }
    }), t.widget("a8c.iris", t.a8c.iris, {
      _create: function _create() {
        if (this._super(), this.options.alpha = this.element.data("alpha") || !1, this.element.is(":input") || (this.options.alpha = !1), void 0 !== this.options.alpha && this.options.alpha) {
          var o = this,
              r = o.element,
              e = t('<div class="iris-strip iris-slider iris-alpha-slider"><div class="iris-slider-offset iris-slider-offset-alpha"></div></div>').appendTo(o.picker.find(".iris-picker-inner")),
              i = e.find(".iris-slider-offset-alpha"),
              a = {
            aContainer: e,
            aSlider: i
          };
          void 0 !== r.data("custom-width") ? o.options.customWidth = parseInt(r.data("custom-width")) || 0 : o.options.customWidth = 100, o.options.defaultWidth = r.width(), (o._color._alpha < 1 || -1 != o._color.toString().indexOf("rgb")) && r.width(parseInt(o.options.defaultWidth + o.options.customWidth)), t.each(a, function (t, r) {
            o.controls[t] = r;
          }), o.controls.square.css({
            "margin-right": "0"
          });
          var n = o.picker.width() - o.controls.square.width() - 20,
              l = n / 6,
              s = n / 2 - l;
          t.each(["aContainer", "strip"], function (t, r) {
            o.controls[r].width(s).css({
              "margin-left": l + "px"
            });
          }), o._initControls(), o._change();
        }
      },
      _initControls: function _initControls() {
        if (this._super(), this.options.alpha) {
          var t = this;
          t.controls.aSlider.slider({
            orientation: "vertical",
            min: 0,
            max: 100,
            step: 1,
            value: parseInt(100 * t._color._alpha),
            slide: function slide(o, r) {
              t._color._alpha = parseFloat(r.value / 100), t._change.apply(t, arguments);
            }
          });
        }
      },
      _change: function _change() {
        this._super();

        var t = this,
            r = t.element;

        if (this.options.alpha) {
          var e = t.controls,
              i = parseInt(100 * t._color._alpha),
              a = t._color.toRgb(),
              n = ["rgb(" + a.r + "," + a.g + "," + a.b + ") 0%", "rgba(" + a.r + "," + a.g + "," + a.b + ", 0) 100%"],
              l = t.options.defaultWidth,
              s = t.options.customWidth,
              p = t.picker.closest(".wp-picker-container").find(".wp-color-result");

          e.aContainer.css({
            background: "linear-gradient(to bottom, " + n.join(", ") + "), url(" + o + ")"
          }), p.hasClass("wp-picker-open") && (e.aSlider.slider("value", i), t._color._alpha < 1 ? (e.strip.attr("style", e.strip.attr("style").replace(/rgba\(([0-9]+,)(\s+)?([0-9]+,)(\s+)?([0-9]+)(,(\s+)?[0-9\.]+)\)/g, "rgb($1$3$5)")), r.width(parseInt(l + s))) : r.width(l));
        }

        (r.data("reset-alpha") || !1) && t.picker.find(".iris-palette-container").on("click.palette", ".iris-palette", function () {
          t._color._alpha = 1, t.active = "external", t._change();
        }), r.trigger("change");
      },
      _addInputListeners: function _addInputListeners(t) {
        var o = this,
            r = function r(_r) {
          var e = new Color(t.val()),
              i = t.val();
          t.removeClass("iris-error"), e.error ? "" !== i && t.addClass("iris-error") : e.toString() !== o._color.toString() && ("keyup" === _r.type && i.match(/^[0-9a-fA-F]{3}$/) || o._setOption("color", e.toString()));
        };

        t.on("change", r).on("keyup", o._debounce(r, 100)), o.options.hide && t.on("focus", function () {
          o.show();
        });
      }
    });
  }
}(jQuery), jQuery(document).ready(function (t) {
  t(".color-picker").each(function (o, r) {
    var e = {
      palettes: _wpCustomizeSettings.controls[t(this).attr("id")].colorpickerpalette
    };
    t(r).wpColorPicker(e);
  });
});

/***/ }),

/***/ 3:
/*!******************************************************!*\
  !*** multi ./src/assets/js/wp-color-picker-alpha.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\myfirsttheme\wp-content\themes\myfirsttheme\src\assets\js\wp-color-picker-alpha.js */"./src/assets/js/wp-color-picker-alpha.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy93cC1jb2xvci1waWNrZXItYWxwaGEuanMiXSwibmFtZXMiOlsidCIsIndwIiwid3BDb2xvclBpY2tlciIsInByb3RvdHlwZSIsIl9oYXNBbHBoYSIsIm8iLCJyIiwiZSIsImkiLCJhIiwid3BDb2xvclBpY2tlckwxMG4iLCJjdXJyZW50IiwibiIsImwiLCJzIiwiQ29sb3IiLCJmbiIsInRvU3RyaW5nIiwiX2FscGhhIiwidG9DU1MiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJfY29sb3IiLCJlcnJvciIsImxlbmd0aCIsInN1YnN0ciIsIndpZGdldCIsIl9jcmVhdGUiLCJzdXBwb3J0IiwiaXJpcyIsInAiLCJjIiwiZWxlbWVudCIsImV4dGVuZCIsIm9wdGlvbnMiLCJkYXRhIiwidHlwZSIsIl9jcmVhdGVIdWVPbmx5IiwiY2xvc2UiLCJwcm94eSIsImluaXRpYWxWYWx1ZSIsInZhbCIsImFkZENsYXNzIiwiaGlkZSIsIndyYXAiLCJwYXJlbnQiLCJ0b2dnbGVyIiwiaW5zZXJ0QmVmb3JlIiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwiYXR0ciIsInBpY2siLCJwaWNrZXJDb250YWluZXIiLCJpbnNlcnRBZnRlciIsImJ1dHRvbiIsIndyYXBwaW5nTGFiZWxUZXh0IiwidGV4dCIsImRlZmF1bHRMYWJlbCIsIndyYXBwaW5nTGFiZWwiLCJmaW5kIiwiZGVmYXVsdENvbG9yIiwiZGVmYXVsdFN0cmluZyIsImRlZmF1bHRBcmlhTGFiZWwiLCJjbGVhciIsImNsZWFyQXJpYUxhYmVsIiwiYWZ0ZXIiLCJpbnB1dFdyYXBwZXIiLCJjbG9zZXN0IiwidGFyZ2V0Iiwid2lkdGgiLCJtb2RlIiwicGFsZXR0ZXMiLCJjaGFuZ2UiLCJhbHBoYSIsImh0bWwiLCJwb3NpdGlvbiIsImFwcGVuZCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsIl9hZGRMaXN0ZW5lcnMiLCJjbGljayIsIm9uIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzQ2xhc3MiLCJvcGVuIiwicmVtb3ZlQXR0ciIsInRyaWdnZXIiLCJhOGMiLCJfc3VwZXIiLCJpcyIsImFwcGVuZFRvIiwicGlja2VyIiwiYUNvbnRhaW5lciIsImFTbGlkZXIiLCJjdXN0b21XaWR0aCIsImRlZmF1bHRXaWR0aCIsImluZGV4T2YiLCJlYWNoIiwiY29udHJvbHMiLCJzcXVhcmUiLCJfaW5pdENvbnRyb2xzIiwiX2NoYW5nZSIsInNsaWRlciIsIm9yaWVudGF0aW9uIiwibWluIiwibWF4Iiwic3RlcCIsInZhbHVlIiwic2xpZGUiLCJwYXJzZUZsb2F0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ0b1JnYiIsImciLCJiIiwiam9pbiIsInN0cmlwIiwiYWN0aXZlIiwiX2FkZElucHV0TGlzdGVuZXJzIiwicmVtb3ZlQ2xhc3MiLCJtYXRjaCIsIl9zZXRPcHRpb24iLCJfZGVib3VuY2UiLCJzaG93IiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIl93cEN1c3RvbWl6ZVNldHRpbmdzIiwiY29sb3JwaWNrZXJwYWxldHRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtR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T0FBTCxFQUFhLFlBQVU7QUFBQ2pGLFdBQUMsQ0FBQzJILElBQUY7QUFBUyxTQUFqQyxDQUFoRTtBQUFtRztBQUFqK0UsS0FBL0IsQ0FBN3lHO0FBQWd6TDtBQUFDLENBQS9rTixDQUFnbE5DLE1BQWhsTixDQUFELEVBQXlsTkEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFVBQVNuSSxDQUFULEVBQVc7QUFBQ0EsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQnNHLElBQW5CLENBQXdCLFVBQVNqRyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLFFBQUlDLENBQUMsR0FBQztBQUFDZ0UsY0FBUSxFQUFDNkQsb0JBQW9CLENBQUM3QixRQUFyQixDQUE4QnZHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtELElBQVIsQ0FBYSxJQUFiLENBQTlCLEVBQWtEbUY7QUFBNUQsS0FBTjtBQUFzRnJJLEtBQUMsQ0FBQ00sQ0FBRCxDQUFELENBQUtKLGFBQUwsQ0FBbUJLLENBQW5CO0FBQXNCLEdBQWxKO0FBQW9KLENBQXZMLENBQXpsTixDIiwiZmlsZSI6IndwLWNvbG9yLXBpY2tlci1hbHBoYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIi8qKiFcbiAqIHdwLWNvbG9yLXBpY2tlci1hbHBoYVxuICpcbiAqIE92ZXJ3cml0ZSBBdXRvbWF0dGljIElyaXMgZm9yIGVuYWJsZWQgQWxwaGEgQ2hhbm5lbCBpbiB3cENvbG9yUGlja2VyXG4gKiBPbmx5IHJ1biBpbiBpbnB1dCBhbmQgaXMgZGVmaW5lZCBkYXRhIGFscGhhIGluIHRydWVcbiAqXG4gKiBWZXJzaW9uOiAyLjEuM1xuICogaHR0cHM6Ly9naXRodWIuY29tL2thbGxvb2tvby93cC1jb2xvci1waWNrZXItYWxwaGFcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBHUEx2MiBsaWNlbnNlLlxuICovXG4hZnVuY3Rpb24odCl7aWYoIXQud3Aud3BDb2xvclBpY2tlci5wcm90b3R5cGUuX2hhc0FscGhhKXt2YXIgbz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBSUFBQUhubGxpZ0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBSEpKUkVGVWVOcGkrUC8vLzRFREJ4aUFHTWdDQ0NBR0ZCNUFBREdDUkJnWURoNDhDQ1JaSUpTOXZUMlFCQWdnRkJrbUJpU0FvZ3hGQmlDQW9Ib2dBS0lLQWxCVVlURUxBaUFtRXRBQkVFQ2syMEc2Qk9tdUlsMENJTUJRL0lFTWtPMG15aVNTcmFhYUJoWmNia1VPczBIdUJ3RHBsejV1RkozWjRnQUFBQUJKUlU1RXJrSmdnZz09XCIscj0nPGRpdiBjbGFzcz1cIndwLXBpY2tlci1ob2xkZXJcIiAvPicsZT0nPGRpdiBjbGFzcz1cIndwLXBpY2tlci1jb250YWluZXJcIiAvPicsaT0nPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tc21hbGxcIiAvPicsYT12b2lkIDAhPT13cENvbG9yUGlja2VyTDEwbi5jdXJyZW50O2lmKGEpdmFyIG49JzxhIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwid3AtY29sb3ItcmVzdWx0XCIgLz4nO2Vsc2V7bj0nPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gd3AtY29sb3ItcmVzdWx0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+PHNwYW4gY2xhc3M9XCJ3cC1jb2xvci1yZXN1bHQtdGV4dFwiPjwvc3Bhbj48L2J1dHRvbj4nO3ZhciBsPVwiPGxhYmVsPjwvbGFiZWw+XCIscz0nPHNwYW4gY2xhc3M9XCJzY3JlZW4tcmVhZGVyLXRleHRcIj48L3NwYW4+J31Db2xvci5mbi50b1N0cmluZz1mdW5jdGlvbigpe2lmKHRoaXMuX2FscGhhPDEpcmV0dXJuIHRoaXMudG9DU1MoXCJyZ2JhXCIsdGhpcy5fYWxwaGEpLnJlcGxhY2UoL1xccysvZyxcIlwiKTt2YXIgdD1wYXJzZUludCh0aGlzLl9jb2xvciwxMCkudG9TdHJpbmcoMTYpO3JldHVybiB0aGlzLmVycm9yP1wiXCI6KHQubGVuZ3RoPDYmJih0PShcIjAwMDAwXCIrdCkuc3Vic3RyKC02KSksXCIjXCIrdCl9LHQud2lkZ2V0KFwid3Aud3BDb2xvclBpY2tlclwiLHQud3Aud3BDb2xvclBpY2tlcix7X2hhc0FscGhhOiEwLF9jcmVhdGU6ZnVuY3Rpb24oKXtpZih0LnN1cHBvcnQuaXJpcyl7dmFyIHA9dGhpcyxjPXAuZWxlbWVudDtpZih0LmV4dGVuZChwLm9wdGlvbnMsYy5kYXRhKCkpLFwiaHVlXCI9PT1wLm9wdGlvbnMudHlwZSlyZXR1cm4gcC5fY3JlYXRlSHVlT25seSgpO3AuY2xvc2U9dC5wcm94eShwLmNsb3NlLHApLHAuaW5pdGlhbFZhbHVlPWMudmFsKCksYy5hZGRDbGFzcyhcIndwLWNvbG9yLXBpY2tlclwiKSxhPyhjLmhpZGUoKS53cmFwKGUpLHAud3JhcD1jLnBhcmVudCgpLHAudG9nZ2xlcj10KG4pLmluc2VydEJlZm9yZShjKS5jc3Moe2JhY2tncm91bmRDb2xvcjpwLmluaXRpYWxWYWx1ZX0pLmF0dHIoXCJ0aXRsZVwiLHdwQ29sb3JQaWNrZXJMMTBuLnBpY2spLmF0dHIoXCJkYXRhLWN1cnJlbnRcIix3cENvbG9yUGlja2VyTDEwbi5jdXJyZW50KSxwLnBpY2tlckNvbnRhaW5lcj10KHIpLmluc2VydEFmdGVyKGMpLHAuYnV0dG9uPXQoaSkuYWRkQ2xhc3MoXCJoaWRkZW5cIikpOihjLnBhcmVudChcImxhYmVsXCIpLmxlbmd0aHx8KGMud3JhcChsKSxwLndyYXBwaW5nTGFiZWxUZXh0PXQocykuaW5zZXJ0QmVmb3JlKGMpLnRleHQod3BDb2xvclBpY2tlckwxMG4uZGVmYXVsdExhYmVsKSkscC53cmFwcGluZ0xhYmVsPWMucGFyZW50KCkscC53cmFwcGluZ0xhYmVsLndyYXAoZSkscC53cmFwPXAud3JhcHBpbmdMYWJlbC5wYXJlbnQoKSxwLnRvZ2dsZXI9dChuKS5pbnNlcnRCZWZvcmUocC53cmFwcGluZ0xhYmVsKS5jc3Moe2JhY2tncm91bmRDb2xvcjpwLmluaXRpYWxWYWx1ZX0pLHAudG9nZ2xlci5maW5kKFwiLndwLWNvbG9yLXJlc3VsdC10ZXh0XCIpLnRleHQod3BDb2xvclBpY2tlckwxMG4ucGljaykscC5waWNrZXJDb250YWluZXI9dChyKS5pbnNlcnRBZnRlcihwLndyYXBwaW5nTGFiZWwpLHAuYnV0dG9uPXQoaSkpLHAub3B0aW9ucy5kZWZhdWx0Q29sb3I/KHAuYnV0dG9uLmFkZENsYXNzKFwid3AtcGlja2VyLWRlZmF1bHRcIikudmFsKHdwQ29sb3JQaWNrZXJMMTBuLmRlZmF1bHRTdHJpbmcpLGF8fHAuYnV0dG9uLmF0dHIoXCJhcmlhLWxhYmVsXCIsd3BDb2xvclBpY2tlckwxMG4uZGVmYXVsdEFyaWFMYWJlbCkpOihwLmJ1dHRvbi5hZGRDbGFzcyhcIndwLXBpY2tlci1jbGVhclwiKS52YWwod3BDb2xvclBpY2tlckwxMG4uY2xlYXIpLGF8fHAuYnV0dG9uLmF0dHIoXCJhcmlhLWxhYmVsXCIsd3BDb2xvclBpY2tlckwxMG4uY2xlYXJBcmlhTGFiZWwpKSxhP2Mud3JhcCgnPHNwYW4gY2xhc3M9XCJ3cC1waWNrZXItaW5wdXQtd3JhcFwiIC8+JykuYWZ0ZXIocC5idXR0b24pOihwLndyYXBwaW5nTGFiZWwud3JhcCgnPHNwYW4gY2xhc3M9XCJ3cC1waWNrZXItaW5wdXQtd3JhcCBoaWRkZW5cIiAvPicpLmFmdGVyKHAuYnV0dG9uKSxwLmlucHV0V3JhcHBlcj1jLmNsb3Nlc3QoXCIud3AtcGlja2VyLWlucHV0LXdyYXBcIikpLGMuaXJpcyh7dGFyZ2V0OnAucGlja2VyQ29udGFpbmVyLGhpZGU6cC5vcHRpb25zLmhpZGUsd2lkdGg6cC5vcHRpb25zLndpZHRoLG1vZGU6cC5vcHRpb25zLm1vZGUscGFsZXR0ZXM6cC5vcHRpb25zLnBhbGV0dGVzLGNoYW5nZTpmdW5jdGlvbihyLGUpe3Aub3B0aW9ucy5hbHBoYT8ocC50b2dnbGVyLmNzcyh7XCJiYWNrZ3JvdW5kLWltYWdlXCI6XCJ1cmwoXCIrbytcIilcIn0pLGE/cC50b2dnbGVyLmh0bWwoJzxzcGFuIGNsYXNzPVwiY29sb3ItYWxwaGFcIiAvPicpOihwLnRvZ2dsZXIuY3NzKHtwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KSwwPT1wLnRvZ2dsZXIuZmluZChcInNwYW4uY29sb3ItYWxwaGFcIikubGVuZ3RoJiZwLnRvZ2dsZXIuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNvbG9yLWFscGhhXCIgLz4nKSkscC50b2dnbGVyLmZpbmQoXCJzcGFuLmNvbG9yLWFscGhhXCIpLmNzcyh7d2lkdGg6XCIzMHB4XCIsaGVpZ2h0OlwiMjhweFwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6MCxsZWZ0OjAsXCJib3JkZXItdG9wLWxlZnQtcmFkaXVzXCI6XCIycHhcIixcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIjpcIjJweFwiLGJhY2tncm91bmQ6ZS5jb2xvci50b1N0cmluZygpfSkpOnAudG9nZ2xlci5jc3Moe2JhY2tncm91bmRDb2xvcjplLmNvbG9yLnRvU3RyaW5nKCl9KSx0LmlzRnVuY3Rpb24ocC5vcHRpb25zLmNoYW5nZSkmJnAub3B0aW9ucy5jaGFuZ2UuY2FsbCh0aGlzLHIsZSl9fSksYy52YWwocC5pbml0aWFsVmFsdWUpLHAuX2FkZExpc3RlbmVycygpLHAub3B0aW9ucy5oaWRlfHxwLnRvZ2dsZXIuY2xpY2soKX19LF9hZGRMaXN0ZW5lcnM6ZnVuY3Rpb24oKXt2YXIgbz10aGlzO28ud3JhcC5vbihcImNsaWNrLndwY29sb3JwaWNrZXJcIixmdW5jdGlvbih0KXt0LnN0b3BQcm9wYWdhdGlvbigpfSksby50b2dnbGVyLmNsaWNrKGZ1bmN0aW9uKCl7by50b2dnbGVyLmhhc0NsYXNzKFwid3AtcGlja2VyLW9wZW5cIik/by5jbG9zZSgpOm8ub3BlbigpfSksby5lbGVtZW50Lm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24ocil7KFwiXCI9PT10KHRoaXMpLnZhbCgpfHxvLmVsZW1lbnQuaGFzQ2xhc3MoXCJpcmlzLWVycm9yXCIpKSYmKG8ub3B0aW9ucy5hbHBoYT8oYSYmby50b2dnbGVyLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxvLnRvZ2dsZXIuZmluZChcInNwYW4uY29sb3ItYWxwaGFcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsXCJcIikpOm8udG9nZ2xlci5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIixcIlwiKSx0LmlzRnVuY3Rpb24oby5vcHRpb25zLmNsZWFyKSYmby5vcHRpb25zLmNsZWFyLmNhbGwodGhpcyxyKSl9KSxvLmJ1dHRvbi5vbihcImNsaWNrXCIsZnVuY3Rpb24ocil7dCh0aGlzKS5oYXNDbGFzcyhcIndwLXBpY2tlci1jbGVhclwiKT8oby5lbGVtZW50LnZhbChcIlwiKSxvLm9wdGlvbnMuYWxwaGE/KGEmJm8udG9nZ2xlci5yZW1vdmVBdHRyKFwic3R5bGVcIiksby50b2dnbGVyLmZpbmQoXCJzcGFuLmNvbG9yLWFscGhhXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLFwiXCIpKTpvLnRvZ2dsZXIuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsXCJcIiksdC5pc0Z1bmN0aW9uKG8ub3B0aW9ucy5jbGVhcikmJm8ub3B0aW9ucy5jbGVhci5jYWxsKHRoaXMsciksby5lbGVtZW50LnRyaWdnZXIoXCJjaGFuZ2VcIikpOnQodGhpcykuaGFzQ2xhc3MoXCJ3cC1waWNrZXItZGVmYXVsdFwiKSYmby5lbGVtZW50LnZhbChvLm9wdGlvbnMuZGVmYXVsdENvbG9yKS5jaGFuZ2UoKX0pfX0pLHQud2lkZ2V0KFwiYThjLmlyaXNcIix0LmE4Yy5pcmlzLHtfY3JlYXRlOmZ1bmN0aW9uKCl7aWYodGhpcy5fc3VwZXIoKSx0aGlzLm9wdGlvbnMuYWxwaGE9dGhpcy5lbGVtZW50LmRhdGEoXCJhbHBoYVwiKXx8ITEsdGhpcy5lbGVtZW50LmlzKFwiOmlucHV0XCIpfHwodGhpcy5vcHRpb25zLmFscGhhPSExKSx2b2lkIDAhPT10aGlzLm9wdGlvbnMuYWxwaGEmJnRoaXMub3B0aW9ucy5hbHBoYSl7dmFyIG89dGhpcyxyPW8uZWxlbWVudCxlPXQoJzxkaXYgY2xhc3M9XCJpcmlzLXN0cmlwIGlyaXMtc2xpZGVyIGlyaXMtYWxwaGEtc2xpZGVyXCI+PGRpdiBjbGFzcz1cImlyaXMtc2xpZGVyLW9mZnNldCBpcmlzLXNsaWRlci1vZmZzZXQtYWxwaGFcIj48L2Rpdj48L2Rpdj4nKS5hcHBlbmRUbyhvLnBpY2tlci5maW5kKFwiLmlyaXMtcGlja2VyLWlubmVyXCIpKSxpPWUuZmluZChcIi5pcmlzLXNsaWRlci1vZmZzZXQtYWxwaGFcIiksYT17YUNvbnRhaW5lcjplLGFTbGlkZXI6aX07dm9pZCAwIT09ci5kYXRhKFwiY3VzdG9tLXdpZHRoXCIpP28ub3B0aW9ucy5jdXN0b21XaWR0aD1wYXJzZUludChyLmRhdGEoXCJjdXN0b20td2lkdGhcIikpfHwwOm8ub3B0aW9ucy5jdXN0b21XaWR0aD0xMDAsby5vcHRpb25zLmRlZmF1bHRXaWR0aD1yLndpZHRoKCksKG8uX2NvbG9yLl9hbHBoYTwxfHwtMSE9by5fY29sb3IudG9TdHJpbmcoKS5pbmRleE9mKFwicmdiXCIpKSYmci53aWR0aChwYXJzZUludChvLm9wdGlvbnMuZGVmYXVsdFdpZHRoK28ub3B0aW9ucy5jdXN0b21XaWR0aCkpLHQuZWFjaChhLGZ1bmN0aW9uKHQscil7by5jb250cm9sc1t0XT1yfSksby5jb250cm9scy5zcXVhcmUuY3NzKHtcIm1hcmdpbi1yaWdodFwiOlwiMFwifSk7dmFyIG49by5waWNrZXIud2lkdGgoKS1vLmNvbnRyb2xzLnNxdWFyZS53aWR0aCgpLTIwLGw9bi82LHM9bi8yLWw7dC5lYWNoKFtcImFDb250YWluZXJcIixcInN0cmlwXCJdLGZ1bmN0aW9uKHQscil7by5jb250cm9sc1tyXS53aWR0aChzKS5jc3Moe1wibWFyZ2luLWxlZnRcIjpsK1wicHhcIn0pfSksby5faW5pdENvbnRyb2xzKCksby5fY2hhbmdlKCl9fSxfaW5pdENvbnRyb2xzOmZ1bmN0aW9uKCl7aWYodGhpcy5fc3VwZXIoKSx0aGlzLm9wdGlvbnMuYWxwaGEpe3ZhciB0PXRoaXM7dC5jb250cm9scy5hU2xpZGVyLnNsaWRlcih7b3JpZW50YXRpb246XCJ2ZXJ0aWNhbFwiLG1pbjowLG1heDoxMDAsc3RlcDoxLHZhbHVlOnBhcnNlSW50KDEwMCp0Ll9jb2xvci5fYWxwaGEpLHNsaWRlOmZ1bmN0aW9uKG8scil7dC5fY29sb3IuX2FscGhhPXBhcnNlRmxvYXQoci52YWx1ZS8xMDApLHQuX2NoYW5nZS5hcHBseSh0LGFyZ3VtZW50cyl9fSl9fSxfY2hhbmdlOmZ1bmN0aW9uKCl7dGhpcy5fc3VwZXIoKTt2YXIgdD10aGlzLHI9dC5lbGVtZW50O2lmKHRoaXMub3B0aW9ucy5hbHBoYSl7dmFyIGU9dC5jb250cm9scyxpPXBhcnNlSW50KDEwMCp0Ll9jb2xvci5fYWxwaGEpLGE9dC5fY29sb3IudG9SZ2IoKSxuPVtcInJnYihcIithLnIrXCIsXCIrYS5nK1wiLFwiK2EuYitcIikgMCVcIixcInJnYmEoXCIrYS5yK1wiLFwiK2EuZytcIixcIithLmIrXCIsIDApIDEwMCVcIl0sbD10Lm9wdGlvbnMuZGVmYXVsdFdpZHRoLHM9dC5vcHRpb25zLmN1c3RvbVdpZHRoLHA9dC5waWNrZXIuY2xvc2VzdChcIi53cC1waWNrZXItY29udGFpbmVyXCIpLmZpbmQoXCIud3AtY29sb3ItcmVzdWx0XCIpO2UuYUNvbnRhaW5lci5jc3Moe2JhY2tncm91bmQ6XCJsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBcIituLmpvaW4oXCIsIFwiKStcIiksIHVybChcIitvK1wiKVwifSkscC5oYXNDbGFzcyhcIndwLXBpY2tlci1vcGVuXCIpJiYoZS5hU2xpZGVyLnNsaWRlcihcInZhbHVlXCIsaSksdC5fY29sb3IuX2FscGhhPDE/KGUuc3RyaXAuYXR0cihcInN0eWxlXCIsZS5zdHJpcC5hdHRyKFwic3R5bGVcIikucmVwbGFjZSgvcmdiYVxcKChbMC05XSssKShcXHMrKT8oWzAtOV0rLCkoXFxzKyk/KFswLTldKykoLChcXHMrKT9bMC05XFwuXSspXFwpL2csXCJyZ2IoJDEkMyQ1KVwiKSksci53aWR0aChwYXJzZUludChsK3MpKSk6ci53aWR0aChsKSl9KHIuZGF0YShcInJlc2V0LWFscGhhXCIpfHwhMSkmJnQucGlja2VyLmZpbmQoXCIuaXJpcy1wYWxldHRlLWNvbnRhaW5lclwiKS5vbihcImNsaWNrLnBhbGV0dGVcIixcIi5pcmlzLXBhbGV0dGVcIixmdW5jdGlvbigpe3QuX2NvbG9yLl9hbHBoYT0xLHQuYWN0aXZlPVwiZXh0ZXJuYWxcIix0Ll9jaGFuZ2UoKX0pLHIudHJpZ2dlcihcImNoYW5nZVwiKX0sX2FkZElucHV0TGlzdGVuZXJzOmZ1bmN0aW9uKHQpe3ZhciBvPXRoaXMscj1mdW5jdGlvbihyKXt2YXIgZT1uZXcgQ29sb3IodC52YWwoKSksaT10LnZhbCgpO3QucmVtb3ZlQ2xhc3MoXCJpcmlzLWVycm9yXCIpLGUuZXJyb3I/XCJcIiE9PWkmJnQuYWRkQ2xhc3MoXCJpcmlzLWVycm9yXCIpOmUudG9TdHJpbmcoKSE9PW8uX2NvbG9yLnRvU3RyaW5nKCkmJihcImtleXVwXCI9PT1yLnR5cGUmJmkubWF0Y2goL15bMC05YS1mQS1GXXszfSQvKXx8by5fc2V0T3B0aW9uKFwiY29sb3JcIixlLnRvU3RyaW5nKCkpKX07dC5vbihcImNoYW5nZVwiLHIpLm9uKFwia2V5dXBcIixvLl9kZWJvdW5jZShyLDEwMCkpLG8ub3B0aW9ucy5oaWRlJiZ0Lm9uKFwiZm9jdXNcIixmdW5jdGlvbigpe28uc2hvdygpfSl9fSl9fShqUXVlcnkpLGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24odCl7dChcIi5jb2xvci1waWNrZXJcIikuZWFjaChmdW5jdGlvbihvLHIpe3ZhciBlPXtwYWxldHRlczpfd3BDdXN0b21pemVTZXR0aW5ncy5jb250cm9sc1t0KHRoaXMpLmF0dHIoXCJpZFwiKV0uY29sb3JwaWNrZXJwYWxldHRlfTt0KHIpLndwQ29sb3JQaWNrZXIoZSl9KX0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==