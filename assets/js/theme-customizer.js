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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/theme-customizer.js":
/*!*******************************************!*\
  !*** ./src/assets/js/theme-customizer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Customizer preview reload changes asynchronously.
 * Things like site title, description, and background color changes.
 */
(function ($) {
  // Site title and description.
  wp.customize('blogname', function (value) {
    value.bind(function (to) {
      $('.site-title a').text(to);
    });
  });
  wp.customize('blogdescription', function (value) {
    value.bind(function (to) {
      $('.site-description').text(to);
    });
  }); // Header text color

  wp.customize('header_textcolor', function (value) {
    value.bind(function (to) {
      if ('blank' === to) {
        $('.site-title, .site-title a, .site-description').css({
          'clip': 'rect(1px, 1px, 1px, 1px)',
          'position': 'absolute'
        });
      } else {
        $('.site-title, .site-title a, .site-description').css({
          'clip': 'auto',
          'color': to,
          'position': 'relative'
        });
      }
    });
  }); // Hook into background color/image change and adjust body class value as needed.

  wp.customize('background_color', function (value) {
    value.bind(function (to) {
      var body = $('body');
      if (('#ffffff' == to || '#fff' == to) && 'none' == body.css('background-image')) body.addClass('custom-background-white');else if ('' == to && 'none' == body.css('background-image')) body.addClass('custom-background-empty');else body.removeClass('custom-background-empty custom-background-white');
    });
  });
  wp.customize('background_image', function (value) {
    value.bind(function (to) {
      var body = $('body');

      if ('' !== to) {
        body.removeClass('custom-background-empty custom-background-white');
      } else if ('rgb(255, 255, 255)' === body.css('background-color')) {
        body.addClass('custom-background-white');
      } else if ('rgb(230, 230, 230)' === body.css('background-color') && '' === wp.customize.instance('background_color').get()) {
        body.addClass('custom-background-empty');
      }
    });
  });
})(jQuery);

/***/ }),

/***/ 2:
/*!*************************************************!*\
  !*** multi ./src/assets/js/theme-customizer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\myfirsttheme\wp-content\themes\myfirsttheme\src\assets\js\theme-customizer.js */"./src/assets/js/theme-customizer.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy90aGVtZS1jdXN0b21pemVyLmpzIl0sIm5hbWVzIjpbIiQiLCJ3cCIsImN1c3RvbWl6ZSIsInZhbHVlIiwiYmluZCIsInRvIiwidGV4dCIsImNzcyIsImJvZHkiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaW5zdGFuY2UiLCJnZXQiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBT0EsQ0FBRSxVQUFVQSxDQUFWLEVBQWM7QUFDZjtBQUNBQyxJQUFFLENBQUNDLFNBQUgsQ0FBYyxVQUFkLEVBQTBCLFVBQVVDLEtBQVYsRUFBa0I7QUFDM0NBLFNBQUssQ0FBQ0MsSUFBTixDQUFZLFVBQVVDLEVBQVYsRUFBZTtBQUMxQkwsT0FBQyxDQUFFLGVBQUYsQ0FBRCxDQUFxQk0sSUFBckIsQ0FBMkJELEVBQTNCO0FBQ0EsS0FGRDtBQUdBLEdBSkQ7QUFLQUosSUFBRSxDQUFDQyxTQUFILENBQWMsaUJBQWQsRUFBaUMsVUFBVUMsS0FBVixFQUFrQjtBQUNsREEsU0FBSyxDQUFDQyxJQUFOLENBQVksVUFBVUMsRUFBVixFQUFlO0FBQzFCTCxPQUFDLENBQUUsbUJBQUYsQ0FBRCxDQUF5Qk0sSUFBekIsQ0FBK0JELEVBQS9CO0FBQ0EsS0FGRDtBQUdBLEdBSkQsRUFQZSxDQWFmOztBQUNBSixJQUFFLENBQUNDLFNBQUgsQ0FBYyxrQkFBZCxFQUFrQyxVQUFVQyxLQUFWLEVBQWtCO0FBQ25EQSxTQUFLLENBQUNDLElBQU4sQ0FBWSxVQUFVQyxFQUFWLEVBQWU7QUFDMUIsVUFBSyxZQUFZQSxFQUFqQixFQUFzQjtBQUNyQkwsU0FBQyxDQUFFLCtDQUFGLENBQUQsQ0FBcURPLEdBQXJELENBQTBEO0FBQ3pELGtCQUFRLDBCQURpRDtBQUV6RCxzQkFBWTtBQUY2QyxTQUExRDtBQUlBLE9BTEQsTUFLTztBQUNOUCxTQUFDLENBQUUsK0NBQUYsQ0FBRCxDQUFxRE8sR0FBckQsQ0FBMEQ7QUFDekQsa0JBQVEsTUFEaUQ7QUFFekQsbUJBQVNGLEVBRmdEO0FBR3pELHNCQUFZO0FBSDZDLFNBQTFEO0FBS0E7QUFDRCxLQWJEO0FBY0EsR0FmRCxFQWRlLENBK0JmOztBQUNBSixJQUFFLENBQUNDLFNBQUgsQ0FBYyxrQkFBZCxFQUFrQyxVQUFVQyxLQUFWLEVBQWtCO0FBQ25EQSxTQUFLLENBQUNDLElBQU4sQ0FBWSxVQUFVQyxFQUFWLEVBQWU7QUFDMUIsVUFBSUcsSUFBSSxHQUFHUixDQUFDLENBQUUsTUFBRixDQUFaO0FBRUEsVUFBSyxDQUFFLGFBQWFLLEVBQWIsSUFBbUIsVUFBVUEsRUFBL0IsS0FBdUMsVUFBVUcsSUFBSSxDQUFDRCxHQUFMLENBQVUsa0JBQVYsQ0FBdEQsRUFDQ0MsSUFBSSxDQUFDQyxRQUFMLENBQWUseUJBQWYsRUFERCxLQUVLLElBQUssTUFBTUosRUFBTixJQUFZLFVBQVVHLElBQUksQ0FBQ0QsR0FBTCxDQUFVLGtCQUFWLENBQTNCLEVBQ0pDLElBQUksQ0FBQ0MsUUFBTCxDQUFlLHlCQUFmLEVBREksS0FHSkQsSUFBSSxDQUFDRSxXQUFMLENBQWtCLGlEQUFsQjtBQUNELEtBVEQ7QUFVQSxHQVhEO0FBWUFULElBQUUsQ0FBQ0MsU0FBSCxDQUFjLGtCQUFkLEVBQWtDLFVBQVVDLEtBQVYsRUFBa0I7QUFDbkRBLFNBQUssQ0FBQ0MsSUFBTixDQUFZLFVBQVVDLEVBQVYsRUFBZTtBQUMxQixVQUFJRyxJQUFJLEdBQUdSLENBQUMsQ0FBRSxNQUFGLENBQVo7O0FBRUEsVUFBSyxPQUFPSyxFQUFaLEVBQWlCO0FBQ2hCRyxZQUFJLENBQUNFLFdBQUwsQ0FBa0IsaURBQWxCO0FBQ0EsT0FGRCxNQUVPLElBQUsseUJBQXlCRixJQUFJLENBQUNELEdBQUwsQ0FBVSxrQkFBVixDQUE5QixFQUErRDtBQUNyRUMsWUFBSSxDQUFDQyxRQUFMLENBQWUseUJBQWY7QUFDQSxPQUZNLE1BRUEsSUFBSyx5QkFBeUJELElBQUksQ0FBQ0QsR0FBTCxDQUFVLGtCQUFWLENBQXpCLElBQTJELE9BQU9OLEVBQUUsQ0FBQ0MsU0FBSCxDQUFhUyxRQUFiLENBQXVCLGtCQUF2QixFQUE0Q0MsR0FBNUMsRUFBdkUsRUFBMkg7QUFDaklKLFlBQUksQ0FBQ0MsUUFBTCxDQUFlLHlCQUFmO0FBQ0E7QUFDRCxLQVZEO0FBV0EsR0FaRDtBQWFBLENBekRELEVBeURLSSxNQXpETCxFIiwiZmlsZSI6InRoZW1lLWN1c3RvbWl6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCIvKipcbiAqIEN1c3RvbWl6ZXIgZW5oYW5jZW1lbnRzIGZvciBhIGJldHRlciB1c2VyIGV4cGVyaWVuY2UuXG4gKlxuICogQ29udGFpbnMgaGFuZGxlcnMgdG8gbWFrZSBDdXN0b21pemVyIHByZXZpZXcgcmVsb2FkIGNoYW5nZXMgYXN5bmNocm9ub3VzbHkuXG4gKiBUaGluZ3MgbGlrZSBzaXRlIHRpdGxlLCBkZXNjcmlwdGlvbiwgYW5kIGJhY2tncm91bmQgY29sb3IgY2hhbmdlcy5cbiAqL1xuXG4oIGZ1bmN0aW9uKCAkICkge1xuXHQvLyBTaXRlIHRpdGxlIGFuZCBkZXNjcmlwdGlvbi5cblx0d3AuY3VzdG9taXplKCAnYmxvZ25hbWUnLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFsdWUuYmluZCggZnVuY3Rpb24oIHRvICkge1xuXHRcdFx0JCggJy5zaXRlLXRpdGxlIGEnICkudGV4dCggdG8gKTtcblx0XHR9ICk7XG5cdH0gKTtcblx0d3AuY3VzdG9taXplKCAnYmxvZ2Rlc2NyaXB0aW9uJywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhbHVlLmJpbmQoIGZ1bmN0aW9uKCB0byApIHtcblx0XHRcdCQoICcuc2l0ZS1kZXNjcmlwdGlvbicgKS50ZXh0KCB0byApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdC8vIEhlYWRlciB0ZXh0IGNvbG9yXG5cdHdwLmN1c3RvbWl6ZSggJ2hlYWRlcl90ZXh0Y29sb3InLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFsdWUuYmluZCggZnVuY3Rpb24oIHRvICkge1xuXHRcdFx0aWYgKCAnYmxhbmsnID09PSB0byApIHtcblx0XHRcdFx0JCggJy5zaXRlLXRpdGxlLCAuc2l0ZS10aXRsZSBhLCAuc2l0ZS1kZXNjcmlwdGlvbicgKS5jc3MoIHtcblx0XHRcdFx0XHQnY2xpcCc6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCknLFxuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdhYnNvbHV0ZSdcblx0XHRcdFx0fSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggJy5zaXRlLXRpdGxlLCAuc2l0ZS10aXRsZSBhLCAuc2l0ZS1kZXNjcmlwdGlvbicgKS5jc3MoIHtcblx0XHRcdFx0XHQnY2xpcCc6ICdhdXRvJyxcblx0XHRcdFx0XHQnY29sb3InOiB0byxcblx0XHRcdFx0XHQncG9zaXRpb24nOiAncmVsYXRpdmUnXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcblxuXHQvLyBIb29rIGludG8gYmFja2dyb3VuZCBjb2xvci9pbWFnZSBjaGFuZ2UgYW5kIGFkanVzdCBib2R5IGNsYXNzIHZhbHVlIGFzIG5lZWRlZC5cblx0d3AuY3VzdG9taXplKCAnYmFja2dyb3VuZF9jb2xvcicsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YWx1ZS5iaW5kKCBmdW5jdGlvbiggdG8gKSB7XG5cdFx0XHR2YXIgYm9keSA9ICQoICdib2R5JyApO1xuXG5cdFx0XHRpZiAoICggJyNmZmZmZmYnID09IHRvIHx8ICcjZmZmJyA9PSB0byApICYmICdub25lJyA9PSBib2R5LmNzcyggJ2JhY2tncm91bmQtaW1hZ2UnICkgKVxuXHRcdFx0XHRib2R5LmFkZENsYXNzKCAnY3VzdG9tLWJhY2tncm91bmQtd2hpdGUnICk7XG5cdFx0XHRlbHNlIGlmICggJycgPT0gdG8gJiYgJ25vbmUnID09IGJvZHkuY3NzKCAnYmFja2dyb3VuZC1pbWFnZScgKSApXG5cdFx0XHRcdGJvZHkuYWRkQ2xhc3MoICdjdXN0b20tYmFja2dyb3VuZC1lbXB0eScgKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0Ym9keS5yZW1vdmVDbGFzcyggJ2N1c3RvbS1iYWNrZ3JvdW5kLWVtcHR5IGN1c3RvbS1iYWNrZ3JvdW5kLXdoaXRlJyApO1xuXHRcdH0gKTtcblx0fSApO1xuXHR3cC5jdXN0b21pemUoICdiYWNrZ3JvdW5kX2ltYWdlJywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhbHVlLmJpbmQoIGZ1bmN0aW9uKCB0byApIHtcblx0XHRcdHZhciBib2R5ID0gJCggJ2JvZHknICk7XG5cblx0XHRcdGlmICggJycgIT09IHRvICkge1xuXHRcdFx0XHRib2R5LnJlbW92ZUNsYXNzKCAnY3VzdG9tLWJhY2tncm91bmQtZW1wdHkgY3VzdG9tLWJhY2tncm91bmQtd2hpdGUnICk7XG5cdFx0XHR9IGVsc2UgaWYgKCAncmdiKDI1NSwgMjU1LCAyNTUpJyA9PT0gYm9keS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJyApICkge1xuXHRcdFx0XHRib2R5LmFkZENsYXNzKCAnY3VzdG9tLWJhY2tncm91bmQtd2hpdGUnICk7XG5cdFx0XHR9IGVsc2UgaWYgKCAncmdiKDIzMCwgMjMwLCAyMzApJyA9PT0gYm9keS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJyApICYmICcnID09PSB3cC5jdXN0b21pemUuaW5zdGFuY2UoICdiYWNrZ3JvdW5kX2NvbG9yJyApLmdldCgpICkge1xuXHRcdFx0XHRib2R5LmFkZENsYXNzKCAnY3VzdG9tLWJhY2tncm91bmQtZW1wdHknICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIGpRdWVyeSApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==