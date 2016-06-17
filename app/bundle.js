/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _scriptsWeatherLoader = __webpack_require__(1);

	(0, _scriptsWeatherLoader.loadWeather)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _http_utils = __webpack_require__(2);

	var _contentBuilder = __webpack_require__(3);

	var loadWeather = function loadWeather() {
	    return (0, _http_utils.get)('https://weathersync.herokuapp.com/ip').then(function (response) {
	        return (0, _http_utils.get)('https://weathersync.herokuapp.com/weather/' + response.location.latitude + ',' + response.location.longitude);
	    }).then(_contentBuilder.getContent).then(function (content) {
	        return document.querySelector('.content').innerHTML = content;
	    });
	};

	exports['default'] = {
	    loadWeather: loadWeather
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.get = get;

	function get(url) {
	    return new Promise(function (resolve, reject) {
	        var req = new XMLHttpRequest();
	        req.open('GET', url);

	        req.onload = function () {
	            if (req.status === 200) {
	                resolve(JSON.parse(req.response));
	            } else {
	                reject(Error(req.statusText));
	            }
	        };
	        req.onerror = function () {
	            reject(Error('Network Error'));
	        };
	        req.send();
	    });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var getContent = function getContent(response) {
	  var current = response.weather[0];
	  return '\n    <div class="weather">\n  \t\t<h2>CURRENT CONDITIONS FOR</h1>\n  \t\t<h3>' + response.name + '</h3>\n  \t\t<h3>' + response.main.temp + ' &deg;F</h3>\n  \t\t<img class="weather-icon" src="http://openweathermap.org/img/w/' + current.icon + '.png" alt="wheater Image" />\n  \t\t<h3 id="description">' + current.description + '</h3>\n  \t</div>\n  ';
	};

	exports['default'] = {
	  getContent: getContent
	};
	module.exports = exports['default'];

/***/ }
/******/ ]);