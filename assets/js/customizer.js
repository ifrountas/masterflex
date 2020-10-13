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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/customizer.js":
/*!*************************************!*\
  !*** ./src/assets/js/customizer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  "use strict";
  /**
   * Sortable Repeater Custom Control
   *
   * @author Anthony Hortin <http://maddisondesigns.com>
   * @license http://www.gnu.org/licenses/gpl-2.0.html
   * @link https://github.com/maddisondesigns
   */
  // Update the values for all our input fields and initialise the sortable repeater

  $('.sortable_repeater_control').each(function () {
    // If there is an existing customizer value, populate our rows
    var defaultValuesArray = $(this).find('.customize-control-sortable-repeater').val().split(',');
    var numRepeaterItems = defaultValuesArray.length;

    if (numRepeaterItems > 0) {
      // Add the first item to our existing input field
      $(this).find('.repeater-input').val(defaultValuesArray[0]); // Create a new row for each new value

      if (numRepeaterItems > 1) {
        var i;

        for (i = 1; i < numRepeaterItems; ++i) {
          skyrocketAppendRow($(this), defaultValuesArray[i]);
        }
      }
    }
  }); // Make our Repeater fields sortable

  $(this).find('.sortable_repeater.sortable').sortable({
    update: function update(event, ui) {
      skyrocketGetAllInputs($(this).parent());
    }
  }); // Remove item starting from it's parent element

  $('.sortable_repeater.sortable').on('click', '.customize-control-sortable-repeater-delete', function (event) {
    event.preventDefault();
    var numItems = $(this).parent().parent().find('.repeater').length;

    if (numItems > 1) {
      $(this).parent().slideUp('fast', function () {
        var parentContainer = $(this).parent().parent();
        $(this).remove();
        skyrocketGetAllInputs(parentContainer);
      });
    } else {
      $(this).parent().find('.repeater-input').val('');
      skyrocketGetAllInputs($(this).parent().parent().parent());
    }
  }); // Add new item

  $('.customize-control-sortable-repeater-add').click(function (event) {
    event.preventDefault();
    skyrocketAppendRow($(this).parent());
    skyrocketGetAllInputs($(this).parent());
  }); // Refresh our hidden field if any fields change

  $('.sortable_repeater.sortable').change(function () {
    skyrocketGetAllInputs($(this).parent());
  }); // Add https:// to the start of the URL if it doesn't have it

  $('.sortable_repeater.sortable').on('blur', '.repeater-input', function () {
    var url = $(this);
    var val = url.val();

    if (val && !val.match(/^.+:\/\/.*/)) {
      // Important! Make sure to trigger change event so Customizer knows it has to save the field
      url.val('https://' + val).trigger('change');
    }
  }); // Append a new row to our list of elements

  function skyrocketAppendRow($element) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var newRow = '<div class="repeater" style="display:none"><input type="text" value="' + defaultValue + '" class="repeater-input" placeholder="https://" /><span class="dashicons dashicons-sort"></span><a class="customize-control-sortable-repeater-delete" href="#"><span class="dashicons dashicons-no-alt"></span></a></div>';
    $element.find('.sortable').append(newRow);
    $element.find('.sortable').find('.repeater:last').slideDown('slow', function () {
      $(this).find('input').focus();
    });
  } // Get the values from the repeater input fields and add to our hidden field


  function skyrocketGetAllInputs($element) {
    var inputValues = $element.find('.repeater-input').map(function () {
      return $(this).val();
    }).toArray(); // Add all the values from our repeater fields to the hidden field (which is the one that actually gets saved)

    $element.find('.customize-control-sortable-repeater').val(inputValues); // Important! Make sure to trigger change event so Customizer knows it has to save the field

    $element.find('.customize-control-sortable-repeater').trigger('change');
  }
  /**
   * Slider Custom Control
   *
   * @author Anthony Hortin <http://maddisondesigns.com>
   * @license http://www.gnu.org/licenses/gpl-2.0.html
   * @link https://github.com/maddisondesigns
   */
  // Set our slider defaults and initialise the slider


  $('.slider-custom-control').each(function () {
    var sliderValue = $(this).find('.customize-control-slider-value').val();
    var newSlider = $(this).find('.slider');
    var sliderMinValue = parseFloat(newSlider.attr('slider-min-value'));
    var sliderMaxValue = parseFloat(newSlider.attr('slider-max-value'));
    var sliderStepValue = parseFloat(newSlider.attr('slider-step-value'));
    newSlider.slider({
      value: sliderValue,
      min: sliderMinValue,
      max: sliderMaxValue,
      step: sliderStepValue,
      change: function change(e, ui) {
        // Important! When slider stops moving make sure to trigger change event so Customizer knows it has to save the field
        $(this).parent().find('.customize-control-slider-value').trigger('change');
      }
    });
  }); // Change the value of the input field as the slider is moved

  $('.slider').on('slide', function (event, ui) {
    $(this).parent().find('.customize-control-slider-value').val(ui.value);
  }); // Reset slider and input field back to the default value

  $('.slider-reset').on('click', function () {
    var resetValue = $(this).attr('slider-reset-value');
    $(this).parent().find('.customize-control-slider-value').val(resetValue);
    $(this).parent().find('.slider').slider('value', resetValue);
  }); // Update slider if the input field loses focus as it's most likely changed

  $('.customize-control-slider-value').blur(function () {
    var resetValue = $(this).val();
    var slider = $(this).parent().find('.slider');
    var sliderMinValue = parseInt(slider.attr('slider-min-value'));
    var sliderMaxValue = parseInt(slider.attr('slider-max-value')); // Make sure our manual input value doesn't exceed the minimum & maxmium values

    if (resetValue < sliderMinValue) {
      resetValue = sliderMinValue;
      $(this).val(resetValue);
    }

    if (resetValue > sliderMaxValue) {
      resetValue = sliderMaxValue;
      $(this).val(resetValue);
    }

    $(this).parent().find('.slider').slider('value', resetValue);
  });
  /**
   * Single Accordion Custom Control
   *
   * @author Anthony Hortin <http://maddisondesigns.com>
   * @license http://www.gnu.org/licenses/gpl-2.0.html
   * @link https://github.com/maddisondesigns
   */

  $('.single-accordion-toggle').click(function () {
    var $accordionToggle = $(this);
    $(this).parent().find('.single-accordion').slideToggle('slow', function () {
      $accordionToggle.toggleClass('single-accordion-toggle-rotate', $(this).is(':visible'));
    });
  });
  /**
   * Image Checkbox Custom Control
   *
   * @author Anthony Hortin <http://maddisondesigns.com>
   * @license http://www.gnu.org/licenses/gpl-2.0.html
   * @link https://github.com/maddisondesigns
   */

  $('.multi-image-checkbox').on('change', function () {
    skyrocketGetAllImageCheckboxes($(this).parent().parent());
  }); // Get the values from the checkboxes and add to our hidden field

  function skyrocketGetAllImageCheckboxes($element) {
    var inputValues = $element.find('.multi-image-checkbox').map(function () {
      if ($(this).is(':checked')) {
        return $(this).val();
      }
    }).toArray(); // Important! Make sure to trigger change event so Customizer knows it has to save the field

    $element.find('.customize-control-multi-image-checkbox').val(inputValues).trigger('change');
  }
  /**
   * Pill Checkbox Custom Control
   *
   * @author Anthony Hortin <http://maddisondesigns.com>
   * @license http://www.gnu.org/licenses/gpl-2.0.html
   * @link https://github.com/maddisondesigns
   */


  $(".pill_checkbox_control .sortable").sortable({
    placeholder: "pill-ui-state-highlight",
    update: function update(event, ui) {
      skyrocketGetAllPillCheckboxes($(this).parent());
    }
  });
  $('.pill_checkbox_control .sortable-pill-checkbox').on('change', function () {
    skyrocketGetAllPillCheckboxes($(this).parent().parent().parent());
  }); // Get the values from the checkboxes and add to our hidden field

  function skyrocketGetAllPillCheckboxes($element) {
    var inputValues = $element.find('.sortable-pill-checkbox').map(function () {
      if ($(this).is(':checked')) {
        return $(this).val();
      }
    }).toArray();
    $element.find('.customize-control-sortable-pill-checkbox').val(inputValues).trigger('change');
  }
  /**
   * Dropdown Select2 Custom Control
   *
   * @author Anthony Hortin <http://maddisondesigns.com>
   * @license http://www.gnu.org/licenses/gpl-2.0.html
   * @link https://github.com/maddisondesigns
   */


  $('.customize-control-dropdown-select2').each(function () {
    $('.customize-control-select2').select2({
      allowClear: true
    });
  });
  $(".customize-control-select2").on("change", function () {
    var select2Val = $(this).val();
    $(this).parent().find('.customize-control-dropdown-select2').val(select2Val).trigger('change');
  });
  /**
   * Googe Font Select Custom Control
   *
   * @author Anthony Hortin <http://maddisondesigns.com>
   * @license http://www.gnu.org/licenses/gpl-2.0.html
   * @link https://github.com/maddisondesigns
   */

  $('.google-fonts-list').each(function (i, obj) {
    if (!$(obj).hasClass('select2-hidden-accessible')) {
      $(obj).select2();
    }
  });
  $('.google-fonts-list').on('change', function () {
    var elementRegularWeight = $(this).parent().parent().find('.google-fonts-regularweight-style');
    var elementItalicWeight = $(this).parent().parent().find('.google-fonts-italicweight-style');
    var elementBoldWeight = $(this).parent().parent().find('.google-fonts-boldweight-style');
    var selectedFont = $(this).val();
    var customizerControlName = $(this).attr('control-name');
    var elementItalicWeightCount = 0;
    var elementBoldWeightCount = 0; // Clear Weight/Style dropdowns

    elementRegularWeight.empty();
    elementItalicWeight.empty();
    elementBoldWeight.empty(); // Make sure Italic & Bold dropdowns are enabled

    elementItalicWeight.prop('disabled', false);
    elementBoldWeight.prop('disabled', false); // Get the Google Fonts control object

    var bodyfontcontrol = _wpCustomizeSettings.controls[customizerControlName]; // Find the index of the selected font

    var indexes = $.map(bodyfontcontrol.skyrocketfontslist, function (obj, index) {
      if (obj.family === selectedFont) {
        return index;
      }
    });
    var index = indexes[0]; // For the selected Google font show the available weight/style variants

    $.each(bodyfontcontrol.skyrocketfontslist[index].variants, function (val, text) {
      elementRegularWeight.append($('<option></option>').val(text).html(text));

      if (text.indexOf("italic") >= 0) {
        elementItalicWeight.append($('<option></option>').val(text).html(text));
        elementItalicWeightCount++;
      } else {
        elementBoldWeight.append($('<option></option>').val(text).html(text));
        elementBoldWeightCount++;
      }
    });

    if (elementItalicWeightCount == 0) {
      elementItalicWeight.append($('<option></option>').val('').html('Not Available for this font'));
      elementItalicWeight.prop('disabled', 'disabled');
    }

    if (elementBoldWeightCount == 0) {
      elementBoldWeight.append($('<option></option>').val('').html('Not Available for this font'));
      elementBoldWeight.prop('disabled', 'disabled');
    } // Update the font category based on the selected font


    $(this).parent().parent().find('.google-fonts-category').val(bodyfontcontrol.skyrocketfontslist[index].category);
    skyrocketGetAllSelects($(this).parent().parent());
  });
  $('.google_fonts_select_control select').on('change', function () {
    skyrocketGetAllSelects($(this).parent().parent());
  });

  function skyrocketGetAllSelects($element) {
    var selectedFont = {
      font: $element.find('.google-fonts-list').val(),
      regularweight: $element.find('.google-fonts-regularweight-style').val(),
      italicweight: $element.find('.google-fonts-italicweight-style').val(),
      boldweight: $element.find('.google-fonts-boldweight-style').val(),
      category: $element.find('.google-fonts-category').val()
    }; // Important! Make sure to trigger change event so Customizer knows it has to save the field

    $element.find('.customize-control-google-font-selection').val(JSON.stringify(selectedFont)).trigger('change');
  }
  /**
   * TinyMCE Custom Control
   *
   * @author Anthony Hortin <http://maddisondesigns.com>
   * @license http://www.gnu.org/licenses/gpl-2.0.html
   * @link https://github.com/maddisondesigns
   */


  $('.customize-control-tinymce-editor').each(function () {
    // Get the toolbar strings that were passed from the PHP Class
    var tinyMCEToolbar1String = _wpCustomizeSettings.controls[$(this).attr('id')].skyrockettinymcetoolbar1;

    var tinyMCEToolbar2String = _wpCustomizeSettings.controls[$(this).attr('id')].skyrockettinymcetoolbar2;

    var tinyMCEMediaButtons = _wpCustomizeSettings.controls[$(this).attr('id')].skyrocketmediabuttons;

    wp.editor.initialize($(this).attr('id'), {
      tinymce: {
        wpautop: true,
        toolbar1: tinyMCEToolbar1String,
        toolbar2: tinyMCEToolbar2String
      },
      quicktags: true,
      mediaButtons: tinyMCEMediaButtons
    });
  });
  $(document).on('tinymce-editor-init', function (event, editor) {
    editor.on('change', function (e) {
      tinyMCE.triggerSave();
      $('#' + editor.id).trigger('change');
    });
  });
  /**
  	 * Alpha Color Picker Custom Control
  	 *
  	 * @author Braad Martin <http://braadmartin.com>
  	 * @license http://www.gnu.org/licenses/gpl-3.0.html
  	 * @link https://github.com/BraadMartin/components/tree/master/customizer/alpha-color-picker
  	 */
  // Loop over each control and transform it into our color picker.

  $('.alpha-color-control').each(function () {
    // Scope the vars.
    var $control, startingColor, paletteInput, showOpacity, defaultColor, palette, colorPickerOptions, $container, $alphaSlider, alphaVal, sliderOptions; // Store the control instance.

    $control = $(this); // Get a clean starting value for the option.

    startingColor = $control.val().replace(/\s+/g, ''); // Get some data off the control.

    paletteInput = $control.attr('data-palette');
    showOpacity = $control.attr('data-show-opacity');
    defaultColor = $control.attr('data-default-color'); // Process the palette.

    if (paletteInput.indexOf('|') !== -1) {
      palette = paletteInput.split('|');
    } else if ('false' == paletteInput) {
      palette = false;
    } else {
      palette = true;
    } // Set up the options that we'll pass to wpColorPicker().


    colorPickerOptions = {
      change: function change(event, ui) {
        var key, value, alpha, $transparency;
        key = $control.attr('data-customize-setting-link');
        value = $control.wpColorPicker('color'); // Set the opacity value on the slider handle when the default color button is clicked.

        if (defaultColor == value) {
          alpha = acp_get_alpha_value_from_color(value);
          $alphaSlider.find('.ui-slider-handle').text(alpha);
        } // Send ajax request to wp.customize to trigger the Save action.


        wp.customize(key, function (obj) {
          obj.set(value);
        });
        $transparency = $container.find('.transparency'); // Always show the background color of the opacity slider at 100% opacity.

        $transparency.css('background-color', ui.color.toString('no-alpha'));
      },
      palettes: palette // Use the passed in palette.

    }; // Create the colorpicker.

    $control.wpColorPicker(colorPickerOptions);
    $container = $control.parents('.wp-picker-container:first'); // Insert our opacity slider.

    $('<div class="alpha-color-picker-container">' + '<div class="min-click-zone click-zone"></div>' + '<div class="max-click-zone click-zone"></div>' + '<div class="alpha-slider"></div>' + '<div class="transparency"></div>' + '</div>').appendTo($container.find('.wp-picker-holder'));
    $alphaSlider = $container.find('.alpha-slider'); // If starting value is in format RGBa, grab the alpha channel.

    alphaVal = acp_get_alpha_value_from_color(startingColor); // Set up jQuery UI slider() options.

    sliderOptions = {
      create: function create(event, ui) {
        var value = $(this).slider('value'); // Set up initial values.

        $(this).find('.ui-slider-handle').text(value);
        $(this).siblings('.transparency ').css('background-color', startingColor);
      },
      value: alphaVal,
      range: 'max',
      step: 1,
      min: 0,
      max: 100,
      animate: 300
    }; // Initialize jQuery UI slider with our options.

    $alphaSlider.slider(sliderOptions); // Maybe show the opacity on the handle.

    if ('true' == showOpacity) {
      $alphaSlider.find('.ui-slider-handle').addClass('show-opacity');
    } // Bind event handlers for the click zones.


    $container.find('.min-click-zone').on('click', function () {
      acp_update_alpha_value_on_color_control(0, $control, $alphaSlider, true);
    });
    $container.find('.max-click-zone').on('click', function () {
      acp_update_alpha_value_on_color_control(100, $control, $alphaSlider, true);
    }); // Bind event handler for clicking on a palette color.

    $container.find('.iris-palette').on('click', function () {
      var color, alpha;
      color = $(this).css('background-color');
      alpha = acp_get_alpha_value_from_color(color);
      acp_update_alpha_value_on_alpha_slider(alpha, $alphaSlider); // Sometimes Iris doesn't set a perfect background-color on the palette,
      // for example rgba(20, 80, 100, 0.3) becomes rgba(20, 80, 100, 0.298039).
      // To compensante for this we round the opacity value on RGBa colors here
      // and save it a second time to the color picker object.

      if (alpha != 100) {
        color = color.replace(/[^,]+(?=\))/, (alpha / 100).toFixed(2));
      }

      $control.wpColorPicker('color', color);
    }); // Bind event handler for clicking on the 'Clear' button.

    $container.find('.button.wp-picker-clear').on('click', function () {
      var key = $control.attr('data-customize-setting-link'); // The #fff color is delibrate here. This sets the color picker to white instead of the
      // defult black, which puts the color picker in a better place to visually represent empty.

      $control.wpColorPicker('color', '#ffffff'); // Set the actual option value to empty string.

      wp.customize(key, function (obj) {
        obj.set('');
      });
      acp_update_alpha_value_on_alpha_slider(100, $alphaSlider);
    }); // Bind event handler for clicking on the 'Default' button.

    $container.find('.button.wp-picker-default').on('click', function () {
      var alpha = acp_get_alpha_value_from_color(defaultColor);
      acp_update_alpha_value_on_alpha_slider(alpha, $alphaSlider);
    }); // Bind event handler for typing or pasting into the input.

    $control.on('input', function () {
      var value = $(this).val();
      var alpha = acp_get_alpha_value_from_color(value);
      acp_update_alpha_value_on_alpha_slider(alpha, $alphaSlider);
    }); // Update all the things when the slider is interacted with.

    $alphaSlider.slider().on('slide', function (event, ui) {
      var alpha = parseFloat(ui.value) / 100.0;
      acp_update_alpha_value_on_color_control(alpha, $control, $alphaSlider, false); // Change value shown on slider handle.

      $(this).find('.ui-slider-handle').text(ui.value);
    });
  });
  /**
   * Override the stock color.js toString() method to add support for outputting RGBa or Hex.
   */

  Color.prototype.toString = function (flag) {
    // If our no-alpha flag has been passed in, output RGBa value with 100% opacity.
    // This is used to set the background color on the opacity slider during color changes.
    if ('no-alpha' == flag) {
      return this.toCSS('rgba', '1').replace(/\s+/g, '');
    } // If we have a proper opacity value, output RGBa.


    if (1 > this._alpha) {
      return this.toCSS('rgba', this._alpha).replace(/\s+/g, '');
    } // Proceed with stock color.js hex output.


    var hex = parseInt(this._color, 10).toString(16);

    if (this.error) {
      return '';
    }

    if (hex.length < 6) {
      for (var i = 6 - hex.length - 1; i >= 0; i--) {
        hex = '0' + hex;
      }
    }

    return '#' + hex;
  };
  /**
   * Given an RGBa, RGB, or hex color value, return the alpha channel value.
   */


  function acp_get_alpha_value_from_color(value) {
    var alphaVal; // Remove all spaces from the passed in value to help our RGBa regex.

    value = value.replace(/ /g, '');

    if (value.match(/rgba\(\d+\,\d+\,\d+\,([^\)]+)\)/)) {
      alphaVal = parseFloat(value.match(/rgba\(\d+\,\d+\,\d+\,([^\)]+)\)/)[1]).toFixed(2) * 100;
      alphaVal = parseInt(alphaVal);
    } else {
      alphaVal = 100;
    }

    return alphaVal;
  }
  /**
   * Force update the alpha value of the color picker object and maybe the alpha slider.
   */


  function acp_update_alpha_value_on_color_control(alpha, $control, $alphaSlider, update_slider) {
    var iris, colorPicker, color;
    iris = $control.data('a8cIris');
    colorPicker = $control.data('wpWpColorPicker'); // Set the alpha value on the Iris object.

    iris._color._alpha = alpha; // Store the new color value.

    color = iris._color.toString(); // Set the value of the input.

    $control.val(color); // Update the background color of the color picker.

    colorPicker.toggler.css({
      'background-color': color
    }); // Maybe update the alpha slider itself.

    if (update_slider) {
      acp_update_alpha_value_on_alpha_slider(alpha, $alphaSlider);
    } // Update the color value of the color picker object.


    $control.wpColorPicker('color', color);
  }
  /**
   * Update the slider handle position and label.
   */


  function acp_update_alpha_value_on_alpha_slider(alpha, $alphaSlider) {
    $alphaSlider.slider('value', alpha);
    $alphaSlider.find('.ui-slider-handle').text(alpha.toString());
  }
});
/**
 * Remove attached events from the Upsell Section to stop panel from being able to open/close
 */

(function ($, api) {
  api.sectionConstructor['skyrocket-upsell'] = api.Section.extend({
    // Remove events for this type of section.
    attachEvents: function attachEvents() {},
    // Ensure this type of section is active. Normally, sections without contents aren't visible.
    isContextuallyActive: function isContextuallyActive() {
      return true;
    }
  });
})(jQuery, wp.customize);

/***/ }),

/***/ 4:
/*!*******************************************!*\
  !*** multi ./src/assets/js/customizer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/wp-content/themes/firsttheme/src/assets/js/customizer.js */"./src/assets/js/customizer.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemVyLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiZWFjaCIsImRlZmF1bHRWYWx1ZXNBcnJheSIsImZpbmQiLCJ2YWwiLCJzcGxpdCIsIm51bVJlcGVhdGVySXRlbXMiLCJsZW5ndGgiLCJpIiwic2t5cm9ja2V0QXBwZW5kUm93Iiwic29ydGFibGUiLCJ1cGRhdGUiLCJldmVudCIsInVpIiwic2t5cm9ja2V0R2V0QWxsSW5wdXRzIiwicGFyZW50Iiwib24iLCJwcmV2ZW50RGVmYXVsdCIsIm51bUl0ZW1zIiwic2xpZGVVcCIsInBhcmVudENvbnRhaW5lciIsInJlbW92ZSIsImNsaWNrIiwiY2hhbmdlIiwidXJsIiwibWF0Y2giLCJ0cmlnZ2VyIiwiJGVsZW1lbnQiLCJkZWZhdWx0VmFsdWUiLCJuZXdSb3ciLCJhcHBlbmQiLCJzbGlkZURvd24iLCJmb2N1cyIsImlucHV0VmFsdWVzIiwibWFwIiwidG9BcnJheSIsInNsaWRlclZhbHVlIiwibmV3U2xpZGVyIiwic2xpZGVyTWluVmFsdWUiLCJwYXJzZUZsb2F0IiwiYXR0ciIsInNsaWRlck1heFZhbHVlIiwic2xpZGVyU3RlcFZhbHVlIiwic2xpZGVyIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJzdGVwIiwiZSIsInJlc2V0VmFsdWUiLCJibHVyIiwicGFyc2VJbnQiLCIkYWNjb3JkaW9uVG9nZ2xlIiwic2xpZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsImlzIiwic2t5cm9ja2V0R2V0QWxsSW1hZ2VDaGVja2JveGVzIiwicGxhY2Vob2xkZXIiLCJza3lyb2NrZXRHZXRBbGxQaWxsQ2hlY2tib3hlcyIsInNlbGVjdDIiLCJhbGxvd0NsZWFyIiwic2VsZWN0MlZhbCIsIm9iaiIsImhhc0NsYXNzIiwiZWxlbWVudFJlZ3VsYXJXZWlnaHQiLCJlbGVtZW50SXRhbGljV2VpZ2h0IiwiZWxlbWVudEJvbGRXZWlnaHQiLCJzZWxlY3RlZEZvbnQiLCJjdXN0b21pemVyQ29udHJvbE5hbWUiLCJlbGVtZW50SXRhbGljV2VpZ2h0Q291bnQiLCJlbGVtZW50Qm9sZFdlaWdodENvdW50IiwiZW1wdHkiLCJwcm9wIiwiYm9keWZvbnRjb250cm9sIiwiX3dwQ3VzdG9taXplU2V0dGluZ3MiLCJjb250cm9scyIsImluZGV4ZXMiLCJza3lyb2NrZXRmb250c2xpc3QiLCJpbmRleCIsImZhbWlseSIsInZhcmlhbnRzIiwidGV4dCIsImh0bWwiLCJpbmRleE9mIiwiY2F0ZWdvcnkiLCJza3lyb2NrZXRHZXRBbGxTZWxlY3RzIiwiZm9udCIsInJlZ3VsYXJ3ZWlnaHQiLCJpdGFsaWN3ZWlnaHQiLCJib2xkd2VpZ2h0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRpbnlNQ0VUb29sYmFyMVN0cmluZyIsInNreXJvY2tldHRpbnltY2V0b29sYmFyMSIsInRpbnlNQ0VUb29sYmFyMlN0cmluZyIsInNreXJvY2tldHRpbnltY2V0b29sYmFyMiIsInRpbnlNQ0VNZWRpYUJ1dHRvbnMiLCJza3lyb2NrZXRtZWRpYWJ1dHRvbnMiLCJ3cCIsImVkaXRvciIsImluaXRpYWxpemUiLCJ0aW55bWNlIiwid3BhdXRvcCIsInRvb2xiYXIxIiwidG9vbGJhcjIiLCJxdWlja3RhZ3MiLCJtZWRpYUJ1dHRvbnMiLCJ0aW55TUNFIiwidHJpZ2dlclNhdmUiLCJpZCIsIiRjb250cm9sIiwic3RhcnRpbmdDb2xvciIsInBhbGV0dGVJbnB1dCIsInNob3dPcGFjaXR5IiwiZGVmYXVsdENvbG9yIiwicGFsZXR0ZSIsImNvbG9yUGlja2VyT3B0aW9ucyIsIiRjb250YWluZXIiLCIkYWxwaGFTbGlkZXIiLCJhbHBoYVZhbCIsInNsaWRlck9wdGlvbnMiLCJyZXBsYWNlIiwia2V5IiwiYWxwaGEiLCIkdHJhbnNwYXJlbmN5Iiwid3BDb2xvclBpY2tlciIsImFjcF9nZXRfYWxwaGFfdmFsdWVfZnJvbV9jb2xvciIsImN1c3RvbWl6ZSIsInNldCIsImNzcyIsImNvbG9yIiwidG9TdHJpbmciLCJwYWxldHRlcyIsInBhcmVudHMiLCJhcHBlbmRUbyIsImNyZWF0ZSIsInNpYmxpbmdzIiwicmFuZ2UiLCJhbmltYXRlIiwiYWRkQ2xhc3MiLCJhY3BfdXBkYXRlX2FscGhhX3ZhbHVlX29uX2NvbG9yX2NvbnRyb2wiLCJhY3BfdXBkYXRlX2FscGhhX3ZhbHVlX29uX2FscGhhX3NsaWRlciIsInRvRml4ZWQiLCJDb2xvciIsInByb3RvdHlwZSIsImZsYWciLCJ0b0NTUyIsIl9hbHBoYSIsImhleCIsIl9jb2xvciIsImVycm9yIiwidXBkYXRlX3NsaWRlciIsImlyaXMiLCJjb2xvclBpY2tlciIsImRhdGEiLCJ0b2dnbGVyIiwiYXBpIiwic2VjdGlvbkNvbnN0cnVjdG9yIiwiU2VjdGlvbiIsImV4dGVuZCIsImF0dGFjaEV2ZW50cyIsImlzQ29udGV4dHVhbGx5QWN0aXZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJqUXVlcnkoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvKipcblx0ICogU29ydGFibGUgUmVwZWF0ZXIgQ3VzdG9tIENvbnRyb2xcblx0ICpcblx0ICogQGF1dGhvciBBbnRob255IEhvcnRpbiA8aHR0cDovL21hZGRpc29uZGVzaWducy5jb20+XG5cdCAqIEBsaWNlbnNlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcblx0ICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21hZGRpc29uZGVzaWduc1xuXHQgKi9cblxuXHQvLyBVcGRhdGUgdGhlIHZhbHVlcyBmb3IgYWxsIG91ciBpbnB1dCBmaWVsZHMgYW5kIGluaXRpYWxpc2UgdGhlIHNvcnRhYmxlIHJlcGVhdGVyXG5cdCQoJy5zb3J0YWJsZV9yZXBlYXRlcl9jb250cm9sJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHQvLyBJZiB0aGVyZSBpcyBhbiBleGlzdGluZyBjdXN0b21pemVyIHZhbHVlLCBwb3B1bGF0ZSBvdXIgcm93c1xuXHRcdHZhciBkZWZhdWx0VmFsdWVzQXJyYXkgPSAkKHRoaXMpLmZpbmQoJy5jdXN0b21pemUtY29udHJvbC1zb3J0YWJsZS1yZXBlYXRlcicpLnZhbCgpLnNwbGl0KCcsJyk7XG5cdFx0dmFyIG51bVJlcGVhdGVySXRlbXMgPSBkZWZhdWx0VmFsdWVzQXJyYXkubGVuZ3RoO1xuXG5cdFx0aWYobnVtUmVwZWF0ZXJJdGVtcyA+IDApIHtcblx0XHRcdC8vIEFkZCB0aGUgZmlyc3QgaXRlbSB0byBvdXIgZXhpc3RpbmcgaW5wdXQgZmllbGRcblx0XHRcdCQodGhpcykuZmluZCgnLnJlcGVhdGVyLWlucHV0JykudmFsKGRlZmF1bHRWYWx1ZXNBcnJheVswXSk7XG5cdFx0XHQvLyBDcmVhdGUgYSBuZXcgcm93IGZvciBlYWNoIG5ldyB2YWx1ZVxuXHRcdFx0aWYobnVtUmVwZWF0ZXJJdGVtcyA+IDEpIHtcblx0XHRcdFx0dmFyIGk7XG5cdFx0XHRcdGZvciAoaSA9IDE7IGkgPCBudW1SZXBlYXRlckl0ZW1zOyArK2kpIHtcblx0XHRcdFx0XHRza3lyb2NrZXRBcHBlbmRSb3coJCh0aGlzKSwgZGVmYXVsdFZhbHVlc0FycmF5W2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Ly8gTWFrZSBvdXIgUmVwZWF0ZXIgZmllbGRzIHNvcnRhYmxlXG5cdCQodGhpcykuZmluZCgnLnNvcnRhYmxlX3JlcGVhdGVyLnNvcnRhYmxlJykuc29ydGFibGUoe1xuXHRcdHVwZGF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG5cdFx0XHRza3lyb2NrZXRHZXRBbGxJbnB1dHMoJCh0aGlzKS5wYXJlbnQoKSk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBSZW1vdmUgaXRlbSBzdGFydGluZyBmcm9tIGl0J3MgcGFyZW50IGVsZW1lbnRcblx0JCgnLnNvcnRhYmxlX3JlcGVhdGVyLnNvcnRhYmxlJykub24oJ2NsaWNrJywgJy5jdXN0b21pemUtY29udHJvbC1zb3J0YWJsZS1yZXBlYXRlci1kZWxldGUnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIG51bUl0ZW1zID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcucmVwZWF0ZXInKS5sZW5ndGg7XG5cblx0XHRpZihudW1JdGVtcyA+IDEpIHtcblx0XHRcdCQodGhpcykucGFyZW50KCkuc2xpZGVVcCgnZmFzdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcGFyZW50Q29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0c2t5cm9ja2V0R2V0QWxsSW5wdXRzKHBhcmVudENvbnRhaW5lcik7XG5cdFx0XHR9KVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLnJlcGVhdGVyLWlucHV0JykudmFsKCcnKTtcblx0XHRcdHNreXJvY2tldEdldEFsbElucHV0cygkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIEFkZCBuZXcgaXRlbVxuXHQkKCcuY3VzdG9taXplLWNvbnRyb2wtc29ydGFibGUtcmVwZWF0ZXItYWRkJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNreXJvY2tldEFwcGVuZFJvdygkKHRoaXMpLnBhcmVudCgpKTtcblx0XHRza3lyb2NrZXRHZXRBbGxJbnB1dHMoJCh0aGlzKS5wYXJlbnQoKSk7XG5cdH0pO1xuXG5cdC8vIFJlZnJlc2ggb3VyIGhpZGRlbiBmaWVsZCBpZiBhbnkgZmllbGRzIGNoYW5nZVxuXHQkKCcuc29ydGFibGVfcmVwZWF0ZXIuc29ydGFibGUnKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG5cdFx0c2t5cm9ja2V0R2V0QWxsSW5wdXRzKCQodGhpcykucGFyZW50KCkpO1xuXHR9KVxuXG5cdC8vIEFkZCBodHRwczovLyB0byB0aGUgc3RhcnQgb2YgdGhlIFVSTCBpZiBpdCBkb2Vzbid0IGhhdmUgaXRcblx0JCgnLnNvcnRhYmxlX3JlcGVhdGVyLnNvcnRhYmxlJykub24oJ2JsdXInLCAnLnJlcGVhdGVyLWlucHV0JywgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVybCA9ICQodGhpcyk7XG5cdFx0dmFyIHZhbCA9IHVybC52YWwoKTtcblx0XHRpZih2YWwgJiYgIXZhbC5tYXRjaCgvXi4rOlxcL1xcLy4qLykpIHtcblx0XHRcdC8vIEltcG9ydGFudCEgTWFrZSBzdXJlIHRvIHRyaWdnZXIgY2hhbmdlIGV2ZW50IHNvIEN1c3RvbWl6ZXIga25vd3MgaXQgaGFzIHRvIHNhdmUgdGhlIGZpZWxkXG5cdFx0XHR1cmwudmFsKCdodHRwczovLycgKyB2YWwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gQXBwZW5kIGEgbmV3IHJvdyB0byBvdXIgbGlzdCBvZiBlbGVtZW50c1xuXHRmdW5jdGlvbiBza3lyb2NrZXRBcHBlbmRSb3coJGVsZW1lbnQsIGRlZmF1bHRWYWx1ZSA9ICcnKSB7XG5cdFx0dmFyIG5ld1JvdyA9ICc8ZGl2IGNsYXNzPVwicmVwZWF0ZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArIGRlZmF1bHRWYWx1ZSArICdcIiBjbGFzcz1cInJlcGVhdGVyLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJodHRwczovL1wiIC8+PHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNvcnRcIj48L3NwYW4+PGEgY2xhc3M9XCJjdXN0b21pemUtY29udHJvbC1zb3J0YWJsZS1yZXBlYXRlci1kZWxldGVcIiBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy1uby1hbHRcIj48L3NwYW4+PC9hPjwvZGl2Pic7XG5cblx0XHQkZWxlbWVudC5maW5kKCcuc29ydGFibGUnKS5hcHBlbmQobmV3Um93KTtcblx0XHQkZWxlbWVudC5maW5kKCcuc29ydGFibGUnKS5maW5kKCcucmVwZWF0ZXI6bGFzdCcpLnNsaWRlRG93bignc2xvdycsIGZ1bmN0aW9uKCl7XG5cdFx0XHQkKHRoaXMpLmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIEdldCB0aGUgdmFsdWVzIGZyb20gdGhlIHJlcGVhdGVyIGlucHV0IGZpZWxkcyBhbmQgYWRkIHRvIG91ciBoaWRkZW4gZmllbGRcblx0ZnVuY3Rpb24gc2t5cm9ja2V0R2V0QWxsSW5wdXRzKCRlbGVtZW50KSB7XG5cdFx0dmFyIGlucHV0VmFsdWVzID0gJGVsZW1lbnQuZmluZCgnLnJlcGVhdGVyLWlucHV0JykubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICQodGhpcykudmFsKCk7XG5cdFx0fSkudG9BcnJheSgpO1xuXHRcdC8vIEFkZCBhbGwgdGhlIHZhbHVlcyBmcm9tIG91ciByZXBlYXRlciBmaWVsZHMgdG8gdGhlIGhpZGRlbiBmaWVsZCAod2hpY2ggaXMgdGhlIG9uZSB0aGF0IGFjdHVhbGx5IGdldHMgc2F2ZWQpXG5cdFx0JGVsZW1lbnQuZmluZCgnLmN1c3RvbWl6ZS1jb250cm9sLXNvcnRhYmxlLXJlcGVhdGVyJykudmFsKGlucHV0VmFsdWVzKTtcblx0XHQvLyBJbXBvcnRhbnQhIE1ha2Ugc3VyZSB0byB0cmlnZ2VyIGNoYW5nZSBldmVudCBzbyBDdXN0b21pemVyIGtub3dzIGl0IGhhcyB0byBzYXZlIHRoZSBmaWVsZFxuXHRcdCRlbGVtZW50LmZpbmQoJy5jdXN0b21pemUtY29udHJvbC1zb3J0YWJsZS1yZXBlYXRlcicpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNsaWRlciBDdXN0b20gQ29udHJvbFxuXHQgKlxuXHQgKiBAYXV0aG9yIEFudGhvbnkgSG9ydGluIDxodHRwOi8vbWFkZGlzb25kZXNpZ25zLmNvbT5cblx0ICogQGxpY2Vuc2UgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxuXHQgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbWFkZGlzb25kZXNpZ25zXG5cdCAqL1xuXG5cdC8vIFNldCBvdXIgc2xpZGVyIGRlZmF1bHRzIGFuZCBpbml0aWFsaXNlIHRoZSBzbGlkZXJcblx0JCgnLnNsaWRlci1jdXN0b20tY29udHJvbCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgc2xpZGVyVmFsdWUgPSAkKHRoaXMpLmZpbmQoJy5jdXN0b21pemUtY29udHJvbC1zbGlkZXItdmFsdWUnKS52YWwoKTtcblx0XHR2YXIgbmV3U2xpZGVyID0gJCh0aGlzKS5maW5kKCcuc2xpZGVyJyk7XG5cdFx0dmFyIHNsaWRlck1pblZhbHVlID0gcGFyc2VGbG9hdChuZXdTbGlkZXIuYXR0cignc2xpZGVyLW1pbi12YWx1ZScpKTtcblx0XHR2YXIgc2xpZGVyTWF4VmFsdWUgPSBwYXJzZUZsb2F0KG5ld1NsaWRlci5hdHRyKCdzbGlkZXItbWF4LXZhbHVlJykpO1xuXHRcdHZhciBzbGlkZXJTdGVwVmFsdWUgPSBwYXJzZUZsb2F0KG5ld1NsaWRlci5hdHRyKCdzbGlkZXItc3RlcC12YWx1ZScpKTtcblxuXHRcdG5ld1NsaWRlci5zbGlkZXIoe1xuXHRcdFx0dmFsdWU6IHNsaWRlclZhbHVlLFxuXHRcdFx0bWluOiBzbGlkZXJNaW5WYWx1ZSxcblx0XHRcdG1heDogc2xpZGVyTWF4VmFsdWUsXG5cdFx0XHRzdGVwOiBzbGlkZXJTdGVwVmFsdWUsXG5cdFx0XHRjaGFuZ2U6IGZ1bmN0aW9uKGUsdWkpe1xuXHRcdFx0XHQvLyBJbXBvcnRhbnQhIFdoZW4gc2xpZGVyIHN0b3BzIG1vdmluZyBtYWtlIHN1cmUgdG8gdHJpZ2dlciBjaGFuZ2UgZXZlbnQgc28gQ3VzdG9taXplciBrbm93cyBpdCBoYXMgdG8gc2F2ZSB0aGUgZmllbGRcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuY3VzdG9taXplLWNvbnRyb2wtc2xpZGVyLXZhbHVlJykudHJpZ2dlcignY2hhbmdlJyk7XG5cdCAgICAgIH1cblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gQ2hhbmdlIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgZmllbGQgYXMgdGhlIHNsaWRlciBpcyBtb3ZlZFxuXHQkKCcuc2xpZGVyJykub24oJ3NsaWRlJywgZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuY3VzdG9taXplLWNvbnRyb2wtc2xpZGVyLXZhbHVlJykudmFsKHVpLnZhbHVlKTtcblx0fSk7XG5cblx0Ly8gUmVzZXQgc2xpZGVyIGFuZCBpbnB1dCBmaWVsZCBiYWNrIHRvIHRoZSBkZWZhdWx0IHZhbHVlXG5cdCQoJy5zbGlkZXItcmVzZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgcmVzZXRWYWx1ZSA9ICQodGhpcykuYXR0cignc2xpZGVyLXJlc2V0LXZhbHVlJyk7XG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuY3VzdG9taXplLWNvbnRyb2wtc2xpZGVyLXZhbHVlJykudmFsKHJlc2V0VmFsdWUpO1xuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLnNsaWRlcicpLnNsaWRlcigndmFsdWUnLCByZXNldFZhbHVlKTtcblx0fSk7XG5cblx0Ly8gVXBkYXRlIHNsaWRlciBpZiB0aGUgaW5wdXQgZmllbGQgbG9zZXMgZm9jdXMgYXMgaXQncyBtb3N0IGxpa2VseSBjaGFuZ2VkXG5cdCQoJy5jdXN0b21pemUtY29udHJvbC1zbGlkZXItdmFsdWUnKS5ibHVyKGZ1bmN0aW9uKCkge1xuXHRcdHZhciByZXNldFZhbHVlID0gJCh0aGlzKS52YWwoKTtcblx0XHR2YXIgc2xpZGVyID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuc2xpZGVyJyk7XG5cdFx0dmFyIHNsaWRlck1pblZhbHVlID0gcGFyc2VJbnQoc2xpZGVyLmF0dHIoJ3NsaWRlci1taW4tdmFsdWUnKSk7XG5cdFx0dmFyIHNsaWRlck1heFZhbHVlID0gcGFyc2VJbnQoc2xpZGVyLmF0dHIoJ3NsaWRlci1tYXgtdmFsdWUnKSk7XG5cblx0XHQvLyBNYWtlIHN1cmUgb3VyIG1hbnVhbCBpbnB1dCB2YWx1ZSBkb2Vzbid0IGV4Y2VlZCB0aGUgbWluaW11bSAmIG1heG1pdW0gdmFsdWVzXG5cdFx0aWYocmVzZXRWYWx1ZSA8IHNsaWRlck1pblZhbHVlKSB7XG5cdFx0XHRyZXNldFZhbHVlID0gc2xpZGVyTWluVmFsdWU7XG5cdFx0XHQkKHRoaXMpLnZhbChyZXNldFZhbHVlKTtcblx0XHR9XG5cdFx0aWYocmVzZXRWYWx1ZSA+IHNsaWRlck1heFZhbHVlKSB7XG5cdFx0XHRyZXNldFZhbHVlID0gc2xpZGVyTWF4VmFsdWU7XG5cdFx0XHQkKHRoaXMpLnZhbChyZXNldFZhbHVlKTtcblx0XHR9XG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuc2xpZGVyJykuc2xpZGVyKCd2YWx1ZScsIHJlc2V0VmFsdWUpO1xuXHR9KTtcblxuXHQvKipcblx0ICogU2luZ2xlIEFjY29yZGlvbiBDdXN0b20gQ29udHJvbFxuXHQgKlxuXHQgKiBAYXV0aG9yIEFudGhvbnkgSG9ydGluIDxodHRwOi8vbWFkZGlzb25kZXNpZ25zLmNvbT5cblx0ICogQGxpY2Vuc2UgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxuXHQgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbWFkZGlzb25kZXNpZ25zXG5cdCAqL1xuXG5cdCQoJy5zaW5nbGUtYWNjb3JkaW9uLXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdHZhciAkYWNjb3JkaW9uVG9nZ2xlID0gJCh0aGlzKTtcblx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5zaW5nbGUtYWNjb3JkaW9uJykuc2xpZGVUb2dnbGUoJ3Nsb3cnLCBmdW5jdGlvbigpIHtcblx0XHRcdCRhY2NvcmRpb25Ub2dnbGUudG9nZ2xlQ2xhc3MoJ3NpbmdsZS1hY2NvcmRpb24tdG9nZ2xlLXJvdGF0ZScsICQodGhpcykuaXMoJzp2aXNpYmxlJykpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHQvKipcblx0ICogSW1hZ2UgQ2hlY2tib3ggQ3VzdG9tIENvbnRyb2xcblx0ICpcblx0ICogQGF1dGhvciBBbnRob255IEhvcnRpbiA8aHR0cDovL21hZGRpc29uZGVzaWducy5jb20+XG5cdCAqIEBsaWNlbnNlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcblx0ICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21hZGRpc29uZGVzaWduc1xuXHQgKi9cblxuXHQkKCcubXVsdGktaW1hZ2UtY2hlY2tib3gnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHQgIHNreXJvY2tldEdldEFsbEltYWdlQ2hlY2tib3hlcygkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpKTtcblx0fSk7XG5cblx0Ly8gR2V0IHRoZSB2YWx1ZXMgZnJvbSB0aGUgY2hlY2tib3hlcyBhbmQgYWRkIHRvIG91ciBoaWRkZW4gZmllbGRcblx0ZnVuY3Rpb24gc2t5cm9ja2V0R2V0QWxsSW1hZ2VDaGVja2JveGVzKCRlbGVtZW50KSB7XG5cdCAgdmFyIGlucHV0VmFsdWVzID0gJGVsZW1lbnQuZmluZCgnLm11bHRpLWltYWdlLWNoZWNrYm94JykubWFwKGZ1bmN0aW9uKCkge1xuXHQgICAgaWYoICQodGhpcykuaXMoJzpjaGVja2VkJykgKSB7XG5cdCAgICAgIHJldHVybiAkKHRoaXMpLnZhbCgpO1xuXHQgICAgfVxuXHQgIH0pLnRvQXJyYXkoKTtcblx0ICAvLyBJbXBvcnRhbnQhIE1ha2Ugc3VyZSB0byB0cmlnZ2VyIGNoYW5nZSBldmVudCBzbyBDdXN0b21pemVyIGtub3dzIGl0IGhhcyB0byBzYXZlIHRoZSBmaWVsZFxuXHQgICRlbGVtZW50LmZpbmQoJy5jdXN0b21pemUtY29udHJvbC1tdWx0aS1pbWFnZS1jaGVja2JveCcpLnZhbChpbnB1dFZhbHVlcykudHJpZ2dlcignY2hhbmdlJyk7XG5cdH1cblxuXHQvKipcblx0ICogUGlsbCBDaGVja2JveCBDdXN0b20gQ29udHJvbFxuXHQgKlxuXHQgKiBAYXV0aG9yIEFudGhvbnkgSG9ydGluIDxodHRwOi8vbWFkZGlzb25kZXNpZ25zLmNvbT5cblx0ICogQGxpY2Vuc2UgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxuXHQgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbWFkZGlzb25kZXNpZ25zXG5cdCAqL1xuXG5cdCQoIFwiLnBpbGxfY2hlY2tib3hfY29udHJvbCAuc29ydGFibGVcIiApLnNvcnRhYmxlKHtcblx0XHRwbGFjZWhvbGRlcjogXCJwaWxsLXVpLXN0YXRlLWhpZ2hsaWdodFwiLFxuXHRcdHVwZGF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdHNreXJvY2tldEdldEFsbFBpbGxDaGVja2JveGVzKCQodGhpcykucGFyZW50KCkpO1xuXHRcdH1cblx0fSk7XG5cblx0JCgnLnBpbGxfY2hlY2tib3hfY29udHJvbCAuc29ydGFibGUtcGlsbC1jaGVja2JveCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0c2t5cm9ja2V0R2V0QWxsUGlsbENoZWNrYm94ZXMoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKSk7XG5cdH0pO1xuXG5cdC8vIEdldCB0aGUgdmFsdWVzIGZyb20gdGhlIGNoZWNrYm94ZXMgYW5kIGFkZCB0byBvdXIgaGlkZGVuIGZpZWxkXG5cdGZ1bmN0aW9uIHNreXJvY2tldEdldEFsbFBpbGxDaGVja2JveGVzKCRlbGVtZW50KSB7XG5cdFx0dmFyIGlucHV0VmFsdWVzID0gJGVsZW1lbnQuZmluZCgnLnNvcnRhYmxlLXBpbGwtY2hlY2tib3gnKS5tYXAoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggJCh0aGlzKS5pcygnOmNoZWNrZWQnKSApIHtcblx0XHRcdFx0cmV0dXJuICQodGhpcykudmFsKCk7XG5cdFx0XHR9XG5cdFx0fSkudG9BcnJheSgpO1xuXHRcdCRlbGVtZW50LmZpbmQoJy5jdXN0b21pemUtY29udHJvbC1zb3J0YWJsZS1waWxsLWNoZWNrYm94JykudmFsKGlucHV0VmFsdWVzKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEcm9wZG93biBTZWxlY3QyIEN1c3RvbSBDb250cm9sXG5cdCAqXG5cdCAqIEBhdXRob3IgQW50aG9ueSBIb3J0aW4gPGh0dHA6Ly9tYWRkaXNvbmRlc2lnbnMuY29tPlxuXHQgKiBAbGljZW5zZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sXG5cdCAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tYWRkaXNvbmRlc2lnbnNcblx0ICovXG5cblx0JCgnLmN1c3RvbWl6ZS1jb250cm9sLWRyb3Bkb3duLXNlbGVjdDInKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0JCgnLmN1c3RvbWl6ZS1jb250cm9sLXNlbGVjdDInKS5zZWxlY3QyKHtcblx0XHRcdGFsbG93Q2xlYXI6IHRydWVcblx0XHR9KTtcblx0fSk7XG5cblx0JChcIi5jdXN0b21pemUtY29udHJvbC1zZWxlY3QyXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzZWxlY3QyVmFsID0gJCh0aGlzKS52YWwoKTtcblx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5jdXN0b21pemUtY29udHJvbC1kcm9wZG93bi1zZWxlY3QyJykudmFsKHNlbGVjdDJWYWwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHR9KTtcblxuXHQvKipcblx0ICogR29vZ2UgRm9udCBTZWxlY3QgQ3VzdG9tIENvbnRyb2xcblx0ICpcblx0ICogQGF1dGhvciBBbnRob255IEhvcnRpbiA8aHR0cDovL21hZGRpc29uZGVzaWducy5jb20+XG5cdCAqIEBsaWNlbnNlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcblx0ICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21hZGRpc29uZGVzaWduc1xuXHQgKi9cblxuXHQkKCcuZ29vZ2xlLWZvbnRzLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIChpLCBvYmopIHtcblx0XHRpZiAoISQob2JqKS5oYXNDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpKSB7XG5cdFx0XHQkKG9iaikuc2VsZWN0MigpO1xuXHRcdH1cblx0fSk7XG5cblx0JCgnLmdvb2dsZS1mb250cy1saXN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlbGVtZW50UmVndWxhcldlaWdodCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmdvb2dsZS1mb250cy1yZWd1bGFyd2VpZ2h0LXN0eWxlJyk7XG5cdFx0dmFyIGVsZW1lbnRJdGFsaWNXZWlnaHQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5nb29nbGUtZm9udHMtaXRhbGljd2VpZ2h0LXN0eWxlJyk7XG5cdFx0dmFyIGVsZW1lbnRCb2xkV2VpZ2h0ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuZ29vZ2xlLWZvbnRzLWJvbGR3ZWlnaHQtc3R5bGUnKTtcblx0XHR2YXIgc2VsZWN0ZWRGb250ID0gJCh0aGlzKS52YWwoKTtcblx0XHR2YXIgY3VzdG9taXplckNvbnRyb2xOYW1lID0gJCh0aGlzKS5hdHRyKCdjb250cm9sLW5hbWUnKTtcblx0XHR2YXIgZWxlbWVudEl0YWxpY1dlaWdodENvdW50ID0gMDtcblx0XHR2YXIgZWxlbWVudEJvbGRXZWlnaHRDb3VudCA9IDA7XG5cblx0XHQvLyBDbGVhciBXZWlnaHQvU3R5bGUgZHJvcGRvd25zXG5cdFx0ZWxlbWVudFJlZ3VsYXJXZWlnaHQuZW1wdHkoKTtcblx0XHRlbGVtZW50SXRhbGljV2VpZ2h0LmVtcHR5KCk7XG5cdFx0ZWxlbWVudEJvbGRXZWlnaHQuZW1wdHkoKTtcblx0XHQvLyBNYWtlIHN1cmUgSXRhbGljICYgQm9sZCBkcm9wZG93bnMgYXJlIGVuYWJsZWRcblx0XHRlbGVtZW50SXRhbGljV2VpZ2h0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXHRcdGVsZW1lbnRCb2xkV2VpZ2h0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG5cdFx0Ly8gR2V0IHRoZSBHb29nbGUgRm9udHMgY29udHJvbCBvYmplY3Rcblx0XHR2YXIgYm9keWZvbnRjb250cm9sID0gX3dwQ3VzdG9taXplU2V0dGluZ3MuY29udHJvbHNbY3VzdG9taXplckNvbnRyb2xOYW1lXTtcblxuXHRcdC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBmb250XG5cdFx0dmFyIGluZGV4ZXMgPSAkLm1hcChib2R5Zm9udGNvbnRyb2wuc2t5cm9ja2V0Zm9udHNsaXN0LCBmdW5jdGlvbihvYmosIGluZGV4KSB7XG5cdFx0XHRpZihvYmouZmFtaWx5ID09PSBzZWxlY3RlZEZvbnQpIHtcblx0XHRcdFx0cmV0dXJuIGluZGV4O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBpbmRleCA9IGluZGV4ZXNbMF07XG5cblx0XHQvLyBGb3IgdGhlIHNlbGVjdGVkIEdvb2dsZSBmb250IHNob3cgdGhlIGF2YWlsYWJsZSB3ZWlnaHQvc3R5bGUgdmFyaWFudHNcblx0XHQkLmVhY2goYm9keWZvbnRjb250cm9sLnNreXJvY2tldGZvbnRzbGlzdFtpbmRleF0udmFyaWFudHMsIGZ1bmN0aW9uKHZhbCwgdGV4dCkge1xuXHRcdFx0ZWxlbWVudFJlZ3VsYXJXZWlnaHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8b3B0aW9uPjwvb3B0aW9uPicpLnZhbCh0ZXh0KS5odG1sKHRleHQpXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHRleHQuaW5kZXhPZihcIml0YWxpY1wiKSA+PSAwKSB7XG5cdFx0XHRcdGVsZW1lbnRJdGFsaWNXZWlnaHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxvcHRpb24+PC9vcHRpb24+JykudmFsKHRleHQpLmh0bWwodGV4dClcblx0XHRcdFx0KTtcblx0XHRcdFx0ZWxlbWVudEl0YWxpY1dlaWdodENvdW50Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50Qm9sZFdlaWdodC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPG9wdGlvbj48L29wdGlvbj4nKS52YWwodGV4dCkuaHRtbCh0ZXh0KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRlbGVtZW50Qm9sZFdlaWdodENvdW50Kys7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZihlbGVtZW50SXRhbGljV2VpZ2h0Q291bnQgPT0gMCkge1xuXHRcdFx0ZWxlbWVudEl0YWxpY1dlaWdodC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxvcHRpb24+PC9vcHRpb24+JykudmFsKCcnKS5odG1sKCdOb3QgQXZhaWxhYmxlIGZvciB0aGlzIGZvbnQnKVxuXHRcdFx0KTtcblx0XHRcdGVsZW1lbnRJdGFsaWNXZWlnaHQucHJvcCgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR9XG5cdFx0aWYoZWxlbWVudEJvbGRXZWlnaHRDb3VudCA9PSAwKSB7XG5cdFx0XHRlbGVtZW50Qm9sZFdlaWdodC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxvcHRpb24+PC9vcHRpb24+JykudmFsKCcnKS5odG1sKCdOb3QgQXZhaWxhYmxlIGZvciB0aGlzIGZvbnQnKVxuXHRcdFx0KTtcblx0XHRcdGVsZW1lbnRCb2xkV2VpZ2h0LnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXG5cdFx0Ly8gVXBkYXRlIHRoZSBmb250IGNhdGVnb3J5IGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBmb250XG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuZ29vZ2xlLWZvbnRzLWNhdGVnb3J5JykudmFsKGJvZHlmb250Y29udHJvbC5za3lyb2NrZXRmb250c2xpc3RbaW5kZXhdLmNhdGVnb3J5KTtcblxuXHRcdHNreXJvY2tldEdldEFsbFNlbGVjdHMoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKSk7XG5cdH0pO1xuXG5cdCQoJy5nb29nbGVfZm9udHNfc2VsZWN0X2NvbnRyb2wgc2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdHNreXJvY2tldEdldEFsbFNlbGVjdHMoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKSk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHNreXJvY2tldEdldEFsbFNlbGVjdHMoJGVsZW1lbnQpIHtcblx0XHR2YXIgc2VsZWN0ZWRGb250ID0ge1xuXHRcdFx0Zm9udDogJGVsZW1lbnQuZmluZCgnLmdvb2dsZS1mb250cy1saXN0JykudmFsKCksXG5cdFx0XHRyZWd1bGFyd2VpZ2h0OiAkZWxlbWVudC5maW5kKCcuZ29vZ2xlLWZvbnRzLXJlZ3VsYXJ3ZWlnaHQtc3R5bGUnKS52YWwoKSxcblx0XHRcdGl0YWxpY3dlaWdodDogJGVsZW1lbnQuZmluZCgnLmdvb2dsZS1mb250cy1pdGFsaWN3ZWlnaHQtc3R5bGUnKS52YWwoKSxcblx0XHRcdGJvbGR3ZWlnaHQ6ICRlbGVtZW50LmZpbmQoJy5nb29nbGUtZm9udHMtYm9sZHdlaWdodC1zdHlsZScpLnZhbCgpLFxuXHRcdFx0Y2F0ZWdvcnk6ICRlbGVtZW50LmZpbmQoJy5nb29nbGUtZm9udHMtY2F0ZWdvcnknKS52YWwoKVxuXHRcdH07XG5cblx0XHQvLyBJbXBvcnRhbnQhIE1ha2Ugc3VyZSB0byB0cmlnZ2VyIGNoYW5nZSBldmVudCBzbyBDdXN0b21pemVyIGtub3dzIGl0IGhhcyB0byBzYXZlIHRoZSBmaWVsZFxuXHRcdCRlbGVtZW50LmZpbmQoJy5jdXN0b21pemUtY29udHJvbC1nb29nbGUtZm9udC1zZWxlY3Rpb24nKS52YWwoSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRGb250KSkudHJpZ2dlcignY2hhbmdlJyk7XG5cdH1cblxuXHQvKipcblx0ICogVGlueU1DRSBDdXN0b20gQ29udHJvbFxuXHQgKlxuXHQgKiBAYXV0aG9yIEFudGhvbnkgSG9ydGluIDxodHRwOi8vbWFkZGlzb25kZXNpZ25zLmNvbT5cblx0ICogQGxpY2Vuc2UgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxuXHQgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbWFkZGlzb25kZXNpZ25zXG5cdCAqL1xuXG5cdCQoJy5jdXN0b21pemUtY29udHJvbC10aW55bWNlLWVkaXRvcicpLmVhY2goZnVuY3Rpb24oKXtcblx0XHQvLyBHZXQgdGhlIHRvb2xiYXIgc3RyaW5ncyB0aGF0IHdlcmUgcGFzc2VkIGZyb20gdGhlIFBIUCBDbGFzc1xuXHRcdHZhciB0aW55TUNFVG9vbGJhcjFTdHJpbmcgPSBfd3BDdXN0b21pemVTZXR0aW5ncy5jb250cm9sc1skKHRoaXMpLmF0dHIoJ2lkJyldLnNreXJvY2tldHRpbnltY2V0b29sYmFyMTtcblx0XHR2YXIgdGlueU1DRVRvb2xiYXIyU3RyaW5nID0gX3dwQ3VzdG9taXplU2V0dGluZ3MuY29udHJvbHNbJCh0aGlzKS5hdHRyKCdpZCcpXS5za3lyb2NrZXR0aW55bWNldG9vbGJhcjI7XG5cdFx0dmFyIHRpbnlNQ0VNZWRpYUJ1dHRvbnMgPSBfd3BDdXN0b21pemVTZXR0aW5ncy5jb250cm9sc1skKHRoaXMpLmF0dHIoJ2lkJyldLnNreXJvY2tldG1lZGlhYnV0dG9ucztcblxuXHRcdHdwLmVkaXRvci5pbml0aWFsaXplKCAkKHRoaXMpLmF0dHIoJ2lkJyksIHtcblx0XHRcdHRpbnltY2U6IHtcblx0XHRcdFx0d3BhdXRvcDogdHJ1ZSxcblx0XHRcdFx0dG9vbGJhcjE6IHRpbnlNQ0VUb29sYmFyMVN0cmluZyxcblx0XHRcdFx0dG9vbGJhcjI6IHRpbnlNQ0VUb29sYmFyMlN0cmluZ1xuXHRcdFx0fSxcblx0XHRcdHF1aWNrdGFnczogdHJ1ZSxcblx0XHRcdG1lZGlhQnV0dG9uczogdGlueU1DRU1lZGlhQnV0dG9uc1xuXHRcdH0pO1xuXHR9KTtcblx0JChkb2N1bWVudCkub24oICd0aW55bWNlLWVkaXRvci1pbml0JywgZnVuY3Rpb24oIGV2ZW50LCBlZGl0b3IgKSB7XG5cdFx0ZWRpdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHR0aW55TUNFLnRyaWdnZXJTYXZlKCk7XG5cdFx0XHQkKCcjJytlZGl0b3IuaWQpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHQvKipcbiBcdCAqIEFscGhhIENvbG9yIFBpY2tlciBDdXN0b20gQ29udHJvbFxuIFx0ICpcbiBcdCAqIEBhdXRob3IgQnJhYWQgTWFydGluIDxodHRwOi8vYnJhYWRtYXJ0aW4uY29tPlxuIFx0ICogQGxpY2Vuc2UgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAuaHRtbFxuIFx0ICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0JyYWFkTWFydGluL2NvbXBvbmVudHMvdHJlZS9tYXN0ZXIvY3VzdG9taXplci9hbHBoYS1jb2xvci1waWNrZXJcbiBcdCAqL1xuXG5cdC8vIExvb3Agb3ZlciBlYWNoIGNvbnRyb2wgYW5kIHRyYW5zZm9ybSBpdCBpbnRvIG91ciBjb2xvciBwaWNrZXIuXG5cdCQoICcuYWxwaGEtY29sb3ItY29udHJvbCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFNjb3BlIHRoZSB2YXJzLlxuXHRcdHZhciAkY29udHJvbCwgc3RhcnRpbmdDb2xvciwgcGFsZXR0ZUlucHV0LCBzaG93T3BhY2l0eSwgZGVmYXVsdENvbG9yLCBwYWxldHRlLFxuXHRcdFx0Y29sb3JQaWNrZXJPcHRpb25zLCAkY29udGFpbmVyLCAkYWxwaGFTbGlkZXIsIGFscGhhVmFsLCBzbGlkZXJPcHRpb25zO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGNvbnRyb2wgaW5zdGFuY2UuXG5cdFx0JGNvbnRyb2wgPSAkKCB0aGlzICk7XG5cblx0XHQvLyBHZXQgYSBjbGVhbiBzdGFydGluZyB2YWx1ZSBmb3IgdGhlIG9wdGlvbi5cblx0XHRzdGFydGluZ0NvbG9yID0gJGNvbnRyb2wudmFsKCkucmVwbGFjZSggL1xccysvZywgJycgKTtcblxuXHRcdC8vIEdldCBzb21lIGRhdGEgb2ZmIHRoZSBjb250cm9sLlxuXHRcdHBhbGV0dGVJbnB1dCA9ICRjb250cm9sLmF0dHIoICdkYXRhLXBhbGV0dGUnICk7XG5cdFx0c2hvd09wYWNpdHkgID0gJGNvbnRyb2wuYXR0ciggJ2RhdGEtc2hvdy1vcGFjaXR5JyApO1xuXHRcdGRlZmF1bHRDb2xvciA9ICRjb250cm9sLmF0dHIoICdkYXRhLWRlZmF1bHQtY29sb3InICk7XG5cblx0XHQvLyBQcm9jZXNzIHRoZSBwYWxldHRlLlxuXHRcdGlmICggcGFsZXR0ZUlucHV0LmluZGV4T2YoICd8JyApICE9PSAtMSApIHtcblx0XHRcdHBhbGV0dGUgPSBwYWxldHRlSW5wdXQuc3BsaXQoICd8JyApO1xuXHRcdH0gZWxzZSBpZiAoICdmYWxzZScgPT0gcGFsZXR0ZUlucHV0ICkge1xuXHRcdFx0cGFsZXR0ZSA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWxldHRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdXAgdGhlIG9wdGlvbnMgdGhhdCB3ZSdsbCBwYXNzIHRvIHdwQ29sb3JQaWNrZXIoKS5cblx0XHRjb2xvclBpY2tlck9wdGlvbnMgPSB7XG5cdFx0XHRjaGFuZ2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdHZhciBrZXksIHZhbHVlLCBhbHBoYSwgJHRyYW5zcGFyZW5jeTtcblxuXHRcdFx0XHRrZXkgPSAkY29udHJvbC5hdHRyKCAnZGF0YS1jdXN0b21pemUtc2V0dGluZy1saW5rJyApO1xuXHRcdFx0XHR2YWx1ZSA9ICRjb250cm9sLndwQ29sb3JQaWNrZXIoICdjb2xvcicgKTtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIG9wYWNpdHkgdmFsdWUgb24gdGhlIHNsaWRlciBoYW5kbGUgd2hlbiB0aGUgZGVmYXVsdCBjb2xvciBidXR0b24gaXMgY2xpY2tlZC5cblx0XHRcdFx0aWYgKCBkZWZhdWx0Q29sb3IgPT0gdmFsdWUgKSB7XG5cdFx0XHRcdFx0YWxwaGEgPSBhY3BfZ2V0X2FscGhhX3ZhbHVlX2Zyb21fY29sb3IoIHZhbHVlICk7XG5cdFx0XHRcdFx0JGFscGhhU2xpZGVyLmZpbmQoICcudWktc2xpZGVyLWhhbmRsZScgKS50ZXh0KCBhbHBoYSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2VuZCBhamF4IHJlcXVlc3QgdG8gd3AuY3VzdG9taXplIHRvIHRyaWdnZXIgdGhlIFNhdmUgYWN0aW9uLlxuXHRcdFx0XHR3cC5jdXN0b21pemUoIGtleSwgZnVuY3Rpb24oIG9iaiApIHtcblx0XHRcdFx0XHRvYmouc2V0KCB2YWx1ZSApO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkdHJhbnNwYXJlbmN5ID0gJGNvbnRhaW5lci5maW5kKCAnLnRyYW5zcGFyZW5jeScgKTtcblxuXHRcdFx0XHQvLyBBbHdheXMgc2hvdyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgb3BhY2l0eSBzbGlkZXIgYXQgMTAwJSBvcGFjaXR5LlxuXHRcdFx0XHQkdHJhbnNwYXJlbmN5LmNzcyggJ2JhY2tncm91bmQtY29sb3InLCB1aS5jb2xvci50b1N0cmluZyggJ25vLWFscGhhJyApICk7XG5cdFx0XHR9LFxuXHRcdFx0cGFsZXR0ZXM6IHBhbGV0dGUgLy8gVXNlIHRoZSBwYXNzZWQgaW4gcGFsZXR0ZS5cblx0XHR9O1xuXG5cdFx0Ly8gQ3JlYXRlIHRoZSBjb2xvcnBpY2tlci5cblx0XHQkY29udHJvbC53cENvbG9yUGlja2VyKCBjb2xvclBpY2tlck9wdGlvbnMgKTtcblxuXHRcdCRjb250YWluZXIgPSAkY29udHJvbC5wYXJlbnRzKCAnLndwLXBpY2tlci1jb250YWluZXI6Zmlyc3QnICk7XG5cblx0XHQvLyBJbnNlcnQgb3VyIG9wYWNpdHkgc2xpZGVyLlxuXHRcdCQoICc8ZGl2IGNsYXNzPVwiYWxwaGEtY29sb3ItcGlja2VyLWNvbnRhaW5lclwiPicgK1xuXHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1pbi1jbGljay16b25lIGNsaWNrLXpvbmVcIj48L2Rpdj4nICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtYXgtY2xpY2stem9uZSBjbGljay16b25lXCI+PC9kaXY+JyArXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiYWxwaGEtc2xpZGVyXCI+PC9kaXY+JyArXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwidHJhbnNwYXJlbmN5XCI+PC9kaXY+JyArXG5cdFx0XHQnPC9kaXY+JyApLmFwcGVuZFRvKCAkY29udGFpbmVyLmZpbmQoICcud3AtcGlja2VyLWhvbGRlcicgKSApO1xuXG5cdFx0JGFscGhhU2xpZGVyID0gJGNvbnRhaW5lci5maW5kKCAnLmFscGhhLXNsaWRlcicgKTtcblxuXHRcdC8vIElmIHN0YXJ0aW5nIHZhbHVlIGlzIGluIGZvcm1hdCBSR0JhLCBncmFiIHRoZSBhbHBoYSBjaGFubmVsLlxuXHRcdGFscGhhVmFsID0gYWNwX2dldF9hbHBoYV92YWx1ZV9mcm9tX2NvbG9yKCBzdGFydGluZ0NvbG9yICk7XG5cblx0XHQvLyBTZXQgdXAgalF1ZXJ5IFVJIHNsaWRlcigpIG9wdGlvbnMuXG5cdFx0c2xpZGVyT3B0aW9ucyA9IHtcblx0XHRcdGNyZWF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gJCggdGhpcyApLnNsaWRlciggJ3ZhbHVlJyApO1xuXG5cdFx0XHRcdC8vIFNldCB1cCBpbml0aWFsIHZhbHVlcy5cblx0XHRcdFx0JCggdGhpcyApLmZpbmQoICcudWktc2xpZGVyLWhhbmRsZScgKS50ZXh0KCB2YWx1ZSApO1xuXHRcdFx0XHQkKCB0aGlzICkuc2libGluZ3MoICcudHJhbnNwYXJlbmN5ICcpLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCBzdGFydGluZ0NvbG9yICk7XG5cdFx0XHR9LFxuXHRcdFx0dmFsdWU6IGFscGhhVmFsLFxuXHRcdFx0cmFuZ2U6ICdtYXgnLFxuXHRcdFx0c3RlcDogMSxcblx0XHRcdG1pbjogMCxcblx0XHRcdG1heDogMTAwLFxuXHRcdFx0YW5pbWF0ZTogMzAwXG5cdFx0fTtcblxuXHRcdC8vIEluaXRpYWxpemUgalF1ZXJ5IFVJIHNsaWRlciB3aXRoIG91ciBvcHRpb25zLlxuXHRcdCRhbHBoYVNsaWRlci5zbGlkZXIoIHNsaWRlck9wdGlvbnMgKTtcblxuXHRcdC8vIE1heWJlIHNob3cgdGhlIG9wYWNpdHkgb24gdGhlIGhhbmRsZS5cblx0XHRpZiAoICd0cnVlJyA9PSBzaG93T3BhY2l0eSApIHtcblx0XHRcdCRhbHBoYVNsaWRlci5maW5kKCAnLnVpLXNsaWRlci1oYW5kbGUnICkuYWRkQ2xhc3MoICdzaG93LW9wYWNpdHknICk7XG5cdFx0fVxuXG5cdFx0Ly8gQmluZCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNsaWNrIHpvbmVzLlxuXHRcdCRjb250YWluZXIuZmluZCggJy5taW4tY2xpY2stem9uZScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRhY3BfdXBkYXRlX2FscGhhX3ZhbHVlX29uX2NvbG9yX2NvbnRyb2woIDAsICRjb250cm9sLCAkYWxwaGFTbGlkZXIsIHRydWUgKTtcblx0XHR9KTtcblx0XHQkY29udGFpbmVyLmZpbmQoICcubWF4LWNsaWNrLXpvbmUnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0YWNwX3VwZGF0ZV9hbHBoYV92YWx1ZV9vbl9jb2xvcl9jb250cm9sKCAxMDAsICRjb250cm9sLCAkYWxwaGFTbGlkZXIsIHRydWUgKTtcblx0XHR9KTtcblxuXHRcdC8vIEJpbmQgZXZlbnQgaGFuZGxlciBmb3IgY2xpY2tpbmcgb24gYSBwYWxldHRlIGNvbG9yLlxuXHRcdCRjb250YWluZXIuZmluZCggJy5pcmlzLXBhbGV0dGUnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGNvbG9yLCBhbHBoYTtcblxuXHRcdFx0Y29sb3IgPSAkKCB0aGlzICkuY3NzKCAnYmFja2dyb3VuZC1jb2xvcicgKTtcblx0XHRcdGFscGhhID0gYWNwX2dldF9hbHBoYV92YWx1ZV9mcm9tX2NvbG9yKCBjb2xvciApO1xuXG5cdFx0XHRhY3BfdXBkYXRlX2FscGhhX3ZhbHVlX29uX2FscGhhX3NsaWRlciggYWxwaGEsICRhbHBoYVNsaWRlciApO1xuXG5cdFx0XHQvLyBTb21ldGltZXMgSXJpcyBkb2Vzbid0IHNldCBhIHBlcmZlY3QgYmFja2dyb3VuZC1jb2xvciBvbiB0aGUgcGFsZXR0ZSxcblx0XHRcdC8vIGZvciBleGFtcGxlIHJnYmEoMjAsIDgwLCAxMDAsIDAuMykgYmVjb21lcyByZ2JhKDIwLCA4MCwgMTAwLCAwLjI5ODAzOSkuXG5cdFx0XHQvLyBUbyBjb21wZW5zYW50ZSBmb3IgdGhpcyB3ZSByb3VuZCB0aGUgb3BhY2l0eSB2YWx1ZSBvbiBSR0JhIGNvbG9ycyBoZXJlXG5cdFx0XHQvLyBhbmQgc2F2ZSBpdCBhIHNlY29uZCB0aW1lIHRvIHRoZSBjb2xvciBwaWNrZXIgb2JqZWN0LlxuXHRcdFx0aWYgKCBhbHBoYSAhPSAxMDAgKSB7XG5cdFx0XHRcdGNvbG9yID0gY29sb3IucmVwbGFjZSggL1teLF0rKD89XFwpKS8sICggYWxwaGEgLyAxMDAgKS50b0ZpeGVkKCAyICkgKTtcblx0XHRcdH1cblxuXHRcdFx0JGNvbnRyb2wud3BDb2xvclBpY2tlciggJ2NvbG9yJywgY29sb3IgKTtcblx0XHR9KTtcblxuXHRcdC8vIEJpbmQgZXZlbnQgaGFuZGxlciBmb3IgY2xpY2tpbmcgb24gdGhlICdDbGVhcicgYnV0dG9uLlxuXHRcdCRjb250YWluZXIuZmluZCggJy5idXR0b24ud3AtcGlja2VyLWNsZWFyJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBrZXkgPSAkY29udHJvbC5hdHRyKCAnZGF0YS1jdXN0b21pemUtc2V0dGluZy1saW5rJyApO1xuXG5cdFx0XHQvLyBUaGUgI2ZmZiBjb2xvciBpcyBkZWxpYnJhdGUgaGVyZS4gVGhpcyBzZXRzIHRoZSBjb2xvciBwaWNrZXIgdG8gd2hpdGUgaW5zdGVhZCBvZiB0aGVcblx0XHRcdC8vIGRlZnVsdCBibGFjaywgd2hpY2ggcHV0cyB0aGUgY29sb3IgcGlja2VyIGluIGEgYmV0dGVyIHBsYWNlIHRvIHZpc3VhbGx5IHJlcHJlc2VudCBlbXB0eS5cblx0XHRcdCRjb250cm9sLndwQ29sb3JQaWNrZXIoICdjb2xvcicsICcjZmZmZmZmJyApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGFjdHVhbCBvcHRpb24gdmFsdWUgdG8gZW1wdHkgc3RyaW5nLlxuXHRcdFx0d3AuY3VzdG9taXplKCBrZXksIGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0XHRcdG9iai5zZXQoICcnICk7XG5cdFx0XHR9KTtcblxuXHRcdFx0YWNwX3VwZGF0ZV9hbHBoYV92YWx1ZV9vbl9hbHBoYV9zbGlkZXIoIDEwMCwgJGFscGhhU2xpZGVyICk7XG5cdFx0fSk7XG5cblx0XHQvLyBCaW5kIGV2ZW50IGhhbmRsZXIgZm9yIGNsaWNraW5nIG9uIHRoZSAnRGVmYXVsdCcgYnV0dG9uLlxuXHRcdCRjb250YWluZXIuZmluZCggJy5idXR0b24ud3AtcGlja2VyLWRlZmF1bHQnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGFscGhhID0gYWNwX2dldF9hbHBoYV92YWx1ZV9mcm9tX2NvbG9yKCBkZWZhdWx0Q29sb3IgKTtcblxuXHRcdFx0YWNwX3VwZGF0ZV9hbHBoYV92YWx1ZV9vbl9hbHBoYV9zbGlkZXIoIGFscGhhLCAkYWxwaGFTbGlkZXIgKTtcblx0XHR9KTtcblxuXHRcdC8vIEJpbmQgZXZlbnQgaGFuZGxlciBmb3IgdHlwaW5nIG9yIHBhc3RpbmcgaW50byB0aGUgaW5wdXQuXG5cdFx0JGNvbnRyb2wub24oICdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHZhbHVlID0gJCggdGhpcyApLnZhbCgpO1xuXHRcdFx0dmFyIGFscGhhID0gYWNwX2dldF9hbHBoYV92YWx1ZV9mcm9tX2NvbG9yKCB2YWx1ZSApO1xuXG5cdFx0XHRhY3BfdXBkYXRlX2FscGhhX3ZhbHVlX29uX2FscGhhX3NsaWRlciggYWxwaGEsICRhbHBoYVNsaWRlciApO1xuXHRcdH0pO1xuXG5cdFx0Ly8gVXBkYXRlIGFsbCB0aGUgdGhpbmdzIHdoZW4gdGhlIHNsaWRlciBpcyBpbnRlcmFjdGVkIHdpdGguXG5cdFx0JGFscGhhU2xpZGVyLnNsaWRlcigpLm9uKCAnc2xpZGUnLCBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdCggdWkudmFsdWUgKSAvIDEwMC4wO1xuXG5cdFx0XHRhY3BfdXBkYXRlX2FscGhhX3ZhbHVlX29uX2NvbG9yX2NvbnRyb2woIGFscGhhLCAkY29udHJvbCwgJGFscGhhU2xpZGVyLCBmYWxzZSApO1xuXG5cdFx0XHQvLyBDaGFuZ2UgdmFsdWUgc2hvd24gb24gc2xpZGVyIGhhbmRsZS5cblx0XHRcdCQoIHRoaXMgKS5maW5kKCAnLnVpLXNsaWRlci1oYW5kbGUnICkudGV4dCggdWkudmFsdWUgKTtcblx0XHR9KTtcblxuXHR9KTtcblxuXHQvKipcblx0ICogT3ZlcnJpZGUgdGhlIHN0b2NrIGNvbG9yLmpzIHRvU3RyaW5nKCkgbWV0aG9kIHRvIGFkZCBzdXBwb3J0IGZvciBvdXRwdXR0aW5nIFJHQmEgb3IgSGV4LlxuXHQgKi9cblx0Q29sb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oIGZsYWcgKSB7XG5cblx0XHQvLyBJZiBvdXIgbm8tYWxwaGEgZmxhZyBoYXMgYmVlbiBwYXNzZWQgaW4sIG91dHB1dCBSR0JhIHZhbHVlIHdpdGggMTAwJSBvcGFjaXR5LlxuXHRcdC8vIFRoaXMgaXMgdXNlZCB0byBzZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb24gdGhlIG9wYWNpdHkgc2xpZGVyIGR1cmluZyBjb2xvciBjaGFuZ2VzLlxuXHRcdGlmICggJ25vLWFscGhhJyA9PSBmbGFnICkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9DU1MoICdyZ2JhJywgJzEnICkucmVwbGFjZSggL1xccysvZywgJycgKTtcblx0XHR9XG5cblx0XHQvLyBJZiB3ZSBoYXZlIGEgcHJvcGVyIG9wYWNpdHkgdmFsdWUsIG91dHB1dCBSR0JhLlxuXHRcdGlmICggMSA+IHRoaXMuX2FscGhhICkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9DU1MoICdyZ2JhJywgdGhpcy5fYWxwaGEgKS5yZXBsYWNlKCAvXFxzKy9nLCAnJyApO1xuXHRcdH1cblxuXHRcdC8vIFByb2NlZWQgd2l0aCBzdG9jayBjb2xvci5qcyBoZXggb3V0cHV0LlxuXHRcdHZhciBoZXggPSBwYXJzZUludCggdGhpcy5fY29sb3IsIDEwICkudG9TdHJpbmcoIDE2ICk7XG5cdFx0aWYgKCB0aGlzLmVycm9yICkgeyByZXR1cm4gJyc7IH1cblx0XHRpZiAoIGhleC5sZW5ndGggPCA2ICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSA2IC0gaGV4Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuXHRcdFx0XHRoZXggPSAnMCcgKyBoZXg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuICcjJyArIGhleDtcblx0fTtcblxuXHQvKipcblx0ICogR2l2ZW4gYW4gUkdCYSwgUkdCLCBvciBoZXggY29sb3IgdmFsdWUsIHJldHVybiB0aGUgYWxwaGEgY2hhbm5lbCB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGFjcF9nZXRfYWxwaGFfdmFsdWVfZnJvbV9jb2xvciggdmFsdWUgKSB7XG5cdFx0dmFyIGFscGhhVmFsO1xuXG5cdFx0Ly8gUmVtb3ZlIGFsbCBzcGFjZXMgZnJvbSB0aGUgcGFzc2VkIGluIHZhbHVlIHRvIGhlbHAgb3VyIFJHQmEgcmVnZXguXG5cdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCAvIC9nLCAnJyApO1xuXG5cdFx0aWYgKCB2YWx1ZS5tYXRjaCggL3JnYmFcXChcXGQrXFwsXFxkK1xcLFxcZCtcXCwoW15cXCldKylcXCkvICkgKSB7XG5cdFx0XHRhbHBoYVZhbCA9IHBhcnNlRmxvYXQoIHZhbHVlLm1hdGNoKCAvcmdiYVxcKFxcZCtcXCxcXGQrXFwsXFxkK1xcLChbXlxcKV0rKVxcKS8gKVsxXSApLnRvRml4ZWQoMikgKiAxMDA7XG5cdFx0XHRhbHBoYVZhbCA9IHBhcnNlSW50KCBhbHBoYVZhbCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhbHBoYVZhbCA9IDEwMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWxwaGFWYWw7XG5cdH1cblxuXHQvKipcblx0ICogRm9yY2UgdXBkYXRlIHRoZSBhbHBoYSB2YWx1ZSBvZiB0aGUgY29sb3IgcGlja2VyIG9iamVjdCBhbmQgbWF5YmUgdGhlIGFscGhhIHNsaWRlci5cblx0ICovXG5cdCBmdW5jdGlvbiBhY3BfdXBkYXRlX2FscGhhX3ZhbHVlX29uX2NvbG9yX2NvbnRyb2woIGFscGhhLCAkY29udHJvbCwgJGFscGhhU2xpZGVyLCB1cGRhdGVfc2xpZGVyICkge1xuXHRcdHZhciBpcmlzLCBjb2xvclBpY2tlciwgY29sb3I7XG5cblx0XHRpcmlzID0gJGNvbnRyb2wuZGF0YSggJ2E4Y0lyaXMnICk7XG5cdFx0Y29sb3JQaWNrZXIgPSAkY29udHJvbC5kYXRhKCAnd3BXcENvbG9yUGlja2VyJyApO1xuXG5cdFx0Ly8gU2V0IHRoZSBhbHBoYSB2YWx1ZSBvbiB0aGUgSXJpcyBvYmplY3QuXG5cdFx0aXJpcy5fY29sb3IuX2FscGhhID0gYWxwaGE7XG5cblx0XHQvLyBTdG9yZSB0aGUgbmV3IGNvbG9yIHZhbHVlLlxuXHRcdGNvbG9yID0gaXJpcy5fY29sb3IudG9TdHJpbmcoKTtcblxuXHRcdC8vIFNldCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0LlxuXHRcdCRjb250cm9sLnZhbCggY29sb3IgKTtcblxuXHRcdC8vIFVwZGF0ZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgY29sb3IgcGlja2VyLlxuXHRcdGNvbG9yUGlja2VyLnRvZ2dsZXIuY3NzKHtcblx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3Jcblx0XHR9KTtcblxuXHRcdC8vIE1heWJlIHVwZGF0ZSB0aGUgYWxwaGEgc2xpZGVyIGl0c2VsZi5cblx0XHRpZiAoIHVwZGF0ZV9zbGlkZXIgKSB7XG5cdFx0XHRhY3BfdXBkYXRlX2FscGhhX3ZhbHVlX29uX2FscGhhX3NsaWRlciggYWxwaGEsICRhbHBoYVNsaWRlciApO1xuXHRcdH1cblxuXHRcdC8vIFVwZGF0ZSB0aGUgY29sb3IgdmFsdWUgb2YgdGhlIGNvbG9yIHBpY2tlciBvYmplY3QuXG5cdFx0JGNvbnRyb2wud3BDb2xvclBpY2tlciggJ2NvbG9yJywgY29sb3IgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIHNsaWRlciBoYW5kbGUgcG9zaXRpb24gYW5kIGxhYmVsLlxuXHQgKi9cblx0ZnVuY3Rpb24gYWNwX3VwZGF0ZV9hbHBoYV92YWx1ZV9vbl9hbHBoYV9zbGlkZXIoIGFscGhhLCAkYWxwaGFTbGlkZXIgKSB7XG5cdFx0JGFscGhhU2xpZGVyLnNsaWRlciggJ3ZhbHVlJywgYWxwaGEgKTtcblx0XHQkYWxwaGFTbGlkZXIuZmluZCggJy51aS1zbGlkZXItaGFuZGxlJyApLnRleHQoIGFscGhhLnRvU3RyaW5nKCkgKTtcblx0fVxuXG59KTtcblxuLyoqXG4gKiBSZW1vdmUgYXR0YWNoZWQgZXZlbnRzIGZyb20gdGhlIFVwc2VsbCBTZWN0aW9uIHRvIHN0b3AgcGFuZWwgZnJvbSBiZWluZyBhYmxlIHRvIG9wZW4vY2xvc2VcbiAqL1xuKCBmdW5jdGlvbiggJCwgYXBpICkge1xuXHRhcGkuc2VjdGlvbkNvbnN0cnVjdG9yWydza3lyb2NrZXQtdXBzZWxsJ10gPSBhcGkuU2VjdGlvbi5leHRlbmQoIHtcblxuXHRcdC8vIFJlbW92ZSBldmVudHMgZm9yIHRoaXMgdHlwZSBvZiBzZWN0aW9uLlxuXHRcdGF0dGFjaEV2ZW50czogZnVuY3Rpb24gKCkge30sXG5cblx0XHQvLyBFbnN1cmUgdGhpcyB0eXBlIG9mIHNlY3Rpb24gaXMgYWN0aXZlLiBOb3JtYWxseSwgc2VjdGlvbnMgd2l0aG91dCBjb250ZW50cyBhcmVuJ3QgdmlzaWJsZS5cblx0XHRpc0NvbnRleHR1YWxseUFjdGl2ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9ICk7XG59ICkoIGpRdWVyeSwgd3AuY3VzdG9taXplICk7XG4iXSwic291cmNlUm9vdCI6IiJ9